import Head from "next/head";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { questionnaire } from "@/data/questionnaire";
import { registerMyQuestion } from "@/components/NewsItemQuestion";

const Home = () => {
  registerMyQuestion();
  const survey = new Model(questionnaire);

  survey.onComplete.add((result) => {
    alert(JSON.stringify(result.data));
  });

  return (
    <>
      <Head>
        <title>XAI Experiment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Survey
          model={survey}
          css={{
            ".sd-action-bar": {
              justifyContent: "end",
            },
            ".sd-element": {
              paddingLeft: "32px",
              paddingRight: "32px",
            },
          }}
        />
      </main>
    </>
  );
};

export default Home;
