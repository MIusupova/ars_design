import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <h1>404 — Page introuvable / Страница не найдена</h1>
      <Link href="/">Retour à l&apos;accueil / Вернуться на главную</Link>
    </div>
  );
}
