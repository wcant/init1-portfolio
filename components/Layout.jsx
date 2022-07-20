import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wes@init1.io</title>
        <link rel="icon" href="/static/images/favicon.ico"></link>
      </Head>
      <div className="App">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
