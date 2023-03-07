import Head from "next/head";
import "survey-core/defaultV2.min.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>XAI Experiment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        css={{
          fontFamily: "Inter, sans-serif",
          color: "#1D1D1F",
          fontSize: "16px",
          lineHeight: "1.5",
          padding: "32px",
        }}
      >
        <h1>XAI Experiment</h1>
        <h2
          css={{
            fontSize: "22px",
            fontWeight: 600,
          }}
        >
          Choose version
        </h2>
        <ul
          css={{
            marginLeft: "16px",
          }}
        >
          <li>
            <Link href="/basic">Basic</Link>
          </li>
          <li>
            <Link href="/salient">Salient features</Link>
          </li>
          <li>
            <Link href="/natural-language">Natural language explanation</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
