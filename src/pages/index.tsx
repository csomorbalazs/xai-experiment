import Head from "next/head";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { preQuestionnaire } from "@/data/pre-questionnaire";

const Home = () => {
  const survey = new Model(preQuestionnaire);

  return (
    <>
      <Head>
        <title>XAI Experiment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Survey model={survey} />
      </main>
    </>
  );
};

export default Home;
