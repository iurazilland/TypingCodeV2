import { createClient } from '@/lib/supabase/client';

const TARGET_AVATAR_SIZE = 256;
const MAX_INPUT_BYTES = 10 * 1024 * 1024; // 10MB raw file cap before compression

function loadImageElement(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('이미지 파일을 읽을 수 없습니다.'));
    };
    img.src = objectUrl;
  });
}

/**
 * Center-crops any user image to 256x256 and encodes as WebP (~15-35KB)
 * using native browser Canvas with zero external npm dependencies.
 */
export async function compressAvatarImage(file: File): Promise<{
  blob: Blob;
  mimeType: string;
  ext: string;
}> {
  if (!file.type.startsWith('image/')) {
    throw new Error('이미지 파일(JPG, PNG, WebP)만 업로드할 수 있습니다.');
  }
  if (file.size > MAX_INPUT_BYTES) {
    throw new Error('원본 이미지는 10MB 이하 파일을 선택해 주세요.');
  }

  const img = await loadImageElement(file);
  const srcWidth = img.naturalWidth || img.width;
  const srcHeight = img.naturalHeight || img.height;

  if (srcWidth < 16 || srcHeight < 16) {
    throw new Error('이미지 해상도가 너무 작습니다.');
  }

  const cropSize = Math.min(srcWidth, srcHeight);
  const sx = Math.floor((srcWidth - cropSize) / 2);
  const sy = Math.floor((srcHeight - cropSize) / 2);

  const canvas = document.createElement('canvas');
  canvas.width = TARGET_AVATAR_SIZE;
  canvas.height = TARGET_AVATAR_SIZE;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('브라우저 이미지 압축 컨텍스트를 초기화할 수 없습니다.');
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.clearRect(0, 0, TARGET_AVATAR_SIZE, TARGET_AVATAR_SIZE);
  ctx.drawImage(
    img,
    sx,
    sy,
    cropSize,
    cropSize,
    0,
    0,
    TARGET_AVATAR_SIZE,
    TARGET_AVATAR_SIZE
  );

  const encodeBlob = (mime: string, quality: number) =>
    new Promise<Blob | null>((resolve) => {
      canvas.toBlob((b) => resolve(b), mime, quality);
    });

  let blob = await encodeBlob('image/webp', 0.82);
  let mimeType = 'image/webp';
  let ext = 'webp';

  // Fallback for browsers without WebP encoding support
  if (!blob || blob.type !== 'image/webp') {
    blob = await encodeBlob('image/jpeg', 0.84);
    mimeType = 'image/jpeg';
    ext = 'jpg';
  }

  if (!blob) {
    throw new Error('이미지 압축에 실패했습니다.');
  }

  return { blob, mimeType, ext };
}

export async function uploadCompressedAvatar(
  userId: string,
  file: File
): Promise<{ publicUrl: string; compressedBytes: number }> {
  const { blob, mimeType, ext } = await compressAvatarImage(file);
  const supabase = createClient();
  const objectPath = `${userId}/avatar.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(objectPath, blob, {
      upsert: true,
      contentType: mimeType,
      cacheControl: '3600',
    });

  if (uploadError) {
    throw new Error(
      uploadError.message.includes('Bucket not found')
        ? 'Supabase Storage에 avatars 버킷이 아직 생성되지 않았습니다. 최신 SQL 마이그레이션을 먼저 실행해 주세요.'
        : `아바타 업로드 실패: ${uploadError.message}`
    );
  }

  const { data } = supabase.storage.from('avatars').getPublicUrl(objectPath);
  const cacheBustedUrl = `${data.publicUrl}?v=${Date.now()}`;

  return {
    publicUrl: cacheBustedUrl,
    compressedBytes: blob.size,
  };
}

export async function deleteUploadedAvatar(userId: string): Promise<void> {
  const supabase = createClient();
  await supabase.storage
    .from('avatars')
    .remove([`${userId}/avatar.webp`, `${userId}/avatar.jpg`, `${userId}/avatar.png`]);
}
