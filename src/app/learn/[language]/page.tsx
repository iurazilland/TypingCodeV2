import { redirect } from 'next/navigation';

export default function LegacyLearnRedirectPage({
  params,
}: {
  params: { language: string };
}) {
  if (params.language.toLowerCase().startsWith('python')) {
    redirect('/practice/python_basic');
  }
  redirect('/languages');
}
