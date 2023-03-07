import Head from "next/head";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { questionnaire } from "@/data/questionnaire";
import { registerMyQuestion } from "@/components/NewsItemQuestion";

const Home = () => {
  // have 3 links to 3 different pages /natural-language, /salient, /basic
  // each page has a different questionnaire
  // each page has a different XAI feature level
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
            <a href="/basic">Basic</a>
          </li>
          <li>
            <a href="/salient">Salient features</a>
          </li>
          <li>
            <a href="/natural-language">Natural language explanation</a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
