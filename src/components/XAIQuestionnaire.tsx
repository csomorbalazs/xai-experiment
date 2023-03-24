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
  groupNumber,
}: {
  newsItems: NewsItem[];
  xaiFeature: XAIFeatureLevel;
  groupNumber: number;
}) => {
  console.log(`GROUP: ${groupNumber}; FEATURE: ${xaiFeature}`);

  registerMyQuestion();
  const survey = new Model(questionnaire(newsItems, xaiFeature));

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

  survey.onComplete.add((result) => {
    // crowdee removes the id from the form, so in production we need to get it by the second selector
    const submitForm = (document.getElementById("submit-form") ??
      document.querySelector("body > form")) as HTMLFormElement;

    const addHiddenInput = (name: string, value: any) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      submitForm.appendChild(input);
    };

    // add the survey data to the form one by one
    for (const key in result.data) {
      // if the data is an object, add each key-value pair as a hidden input
      if (typeof result.data[key] === "object") {
        for (const subKey in result.data[key]) {
          addHiddenInput(`${key}.${subKey}`, result.data[key][subKey]);
        }
      } else {
        addHiddenInput(key, result.data[key]);
      }
    }

    addHiddenInput("METADATA.GROUP", groupNumber);
    addHiddenInput("METADATA.FEATURE", xaiFeature);

    // submit the form
    submitForm.submit();
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
            "--sd-base-padding": "32px",
            ".sd-action-bar": {
              justifyContent: "end",
            },
            ".sd-row": {
              justifyContent: "center",
            },
            ".sd-progress__text": {
              display: "none",
            },
          }}
        />
      </main>
    </>
  );
};

export default XAIQuestionnaire;
