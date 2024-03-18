import Portfolio from '@/components/Portfolio';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <Portfolio />
    </main>
  );
}
