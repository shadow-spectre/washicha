import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
    title: "WashiTea | About",
    description: "Homepage of WashiCha",
};

const About= () => {
  return (
    <>
        <Head>
          <link rel="canonical" href="/home" data-rh="true" />  
        </Head>
        <div>About Page</div>     
    </>
  )
}

export default About