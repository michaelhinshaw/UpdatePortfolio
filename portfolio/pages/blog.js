import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <h1>Blog</h1>
      </main>
    </div>
  );
}
