import Head from 'next/head';
import '../css/main.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Awesome Website</title>
      </Head>
      <h1>Welcome to My Cool Site!</h1>
    </>
  );
}

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
