import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}

      {/* Footer */}
    </div>
  );
};

export default Home;
