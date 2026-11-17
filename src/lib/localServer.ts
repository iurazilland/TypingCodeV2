'use client';

import { useEffect, useState } from 'react';

const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '::1', '[::1]']);

/**
 * Checks whether a hostname corresponds to a local server rather than a deployed domain.
 */
export function isLocalHostname(hostname: string): boolean {
  return LOCAL_HOSTNAMES.has(hostname) || hostname.endsWith('.local');
}

/**
 * Returns true when running under `next dev` or served from a localhost address.
 * Uses `NODE_ENV` for initial state to prevent SSR/client hydration mismatches.
 */
export function useIsLocalServer(): boolean {
  const [isLocal, setIsLocal] = useState<boolean>(
    () => process.env.NODE_ENV === 'development'
  );

  useEffect(() => {
    if (!isLocal && typeof window !== 'undefined' && isLocalHostname(window.location.hostname)) {
      setIsLocal(true);
    }
  }, [isLocal]);

  return isLocal;
}

