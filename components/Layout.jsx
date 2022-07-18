import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wes@init1.io</title>
        <link rel="icon" href="/static/images/favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
