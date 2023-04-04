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
          Full versions
        </h2>
        <ul
          css={{
            marginLeft: "16px",
          }}
        >
          <li>
            Basic:{" "}
            <Link href="/qualification/basic/group-2">Qualification</Link> -{" "}
            <Link href="/main/basic/group-2">Main</Link>
          </li>
          <li>
            Salient features:{" "}
            <Link href="/qualification/salient/group-2">Qualification</Link> -{" "}
            <Link href="/main/salient/group-2">Main</Link>
          </li>
          <li>
            Natural language explanation:{" "}
            <Link href="/qualification/explanations/group-2">
              Qualification
            </Link>{" "}
            - <Link href="/main/explanations/group-2">Main</Link>
          </li>
          <li>
            Random:{" "}
            <Link href="/random">
              (group: 1/2, feature: salient/explanations)
            </Link>
          </li>
        </ul>
        <h2
          css={{
            fontSize: "22px",
            fontWeight: 600,
            marginTop: "32px",
          }}
        >
          Experimental part only
        </h2>
        <ul
          css={{
            marginLeft: "16px",
          }}
        >
          <li>
            Basic:{" "}
            <Link href="/qualification/basic/group-2?experimentOnly=true">
              Qualification
            </Link>{" "}
            - <Link href="/main/basic/group-2?experimentOnly=true">Main</Link>
          </li>
          <li>
            Salient features:{" "}
            <Link href="/qualification/salient/group-2?experimentOnly=true">
              Qualification
            </Link>{" "}
            - <Link href="/main/salient/group-2?experimentOnly=true">Main</Link>
          </li>
          <li>
            Natural language explanation:{" "}
            <Link href="/qualification/explanations/group-2?experimentOnly=true">
              Qualification
            </Link>{" "}
            -{" "}
            <Link href="/main/explanations/group-2?experimentOnly=true">
              Main
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
