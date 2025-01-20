import Head from "next/head";
import { Roboto } from "next/font/google";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import styles from "@/styles/Layout.module.scss"
import "@/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function App({ Component, pageProps }) {
  const { 
    metaTitle = "Red Sun Menu", 
    metaDescription = "An online cookbook and delivery service of assorted japanese food" 
  } = pageProps;

  return (
    <>
      <Head>
        <title>Red Sun Menu</title>
        <meta name="author" content="Lance Malaga" />
        <meta property="title"  content={metaTitle} />
        <meta property="description"  content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className={`${roboto.className} ${styles.layout}`}>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  );
}
