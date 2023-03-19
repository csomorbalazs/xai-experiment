import Head from "next/head";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { questionnaire } from "@/questionnaire/questionnaire";
import { registerMyQuestion } from "./NewsItemQuestion";
import { XAIFeatureLevel } from "@/model/xai-feature-level";
import NewsItem from "@/model/news-item";

const XAIQuestionnaire = ({
  newsItems,
  xaiFeature,
}: {
  newsItems: NewsItem[];
  xaiFeature: XAIFeatureLevel;
}) => {
  registerMyQuestion();
  const survey = new Model(questionnaire(newsItems, xaiFeature));

  survey.onComplete.add((result) => {
    alert(JSON.stringify(result.data));
  });

  survey.onCurrentPageChanged.add((sender, options) => {
    if (options.oldCurrentPage.name === "you-are-ready" && options.isPrevPage) {
      sender.setValue("understand-task", undefined);
      sender.currentPage = sender.getPageByName("tutorial-text");
    }
  });

  survey.onValueChanged.add((sender, options) => {
    if (options.name === "understand-task") {
      if (options.value === "No") {
        sender.setValue("understand-task", undefined);
        sender.currentPage = sender.getPageByName("tutorial-text");
      }
    }
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
