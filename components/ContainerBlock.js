import React from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Kevin Chao - Programmer and Web Developer",
    description:
      "Back End or Front End, I can get comfortable with either. Contact me to catch up ",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={"https://kevinhchao.com${router.asPath}"}
        />
        <link rel="canonical" href={"https://kevinhchao.com${router.asPath}"} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Kevin Chao" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <main className="bg-gray 800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
