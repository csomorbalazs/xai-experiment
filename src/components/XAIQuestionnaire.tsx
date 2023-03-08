import Head from "next/head";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { questionnaire } from "@/questionnaire/questionnaire";
import { registerMyQuestion } from "./NewsItemQuestion";
import { XAIFeatureLevel } from "@/model/xai-feature-level";

const XAIQuestionnaire = ({ xaiFeature }: { xaiFeature: XAIFeatureLevel }) => {
  registerMyQuestion();
  const survey = new Model(questionnaire(xaiFeature));

  survey.onComplete.add((result) => {
    alert(JSON.stringify(result.data));
  });

  return (
    <>
      <Head>
        <title>XAI Experiment - {xaiFeature}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Survey
          model={survey}
          css={{
            "--sd-base-padding": "32px",
            ".sd-action-bar": {
              justifyContent: "end",
            },
            ".sd-row": {
              justifyContent: "center",
            },
          }}
        />
      </main>
    </>
  );
};

export default XAIQuestionnaire;
