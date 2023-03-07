import startPage from "./questionnaire/start-page";
import expectations from "./questionnaire/expectations";
import informationLiteracy from "./questionnaire/information-literacy";
import informationSeekingBehaviour from "./questionnaire/information-seeking-behaviour";
import experimentPages from "./questionnaire/experiment";
import systemEvaluation from "./system-evaluation";
import postQuestionnaire from "./questionnaire/post-questionnaire";
import demographics from "./questionnaire/demographics";
import almostDone from "./questionnaire/almost-done";
import { XAIFeatureLevel } from "@/model/xai-feature-level";

export const questionnaire = (xaiFeatures: XAIFeatureLevel) => {
  return {
    firstPageIsStarted: true,
    showPageNumbers: true,
    showProgressBar: "top",
    pages: [
      startPage,
      expectations,
      informationLiteracy,
      ...informationSeekingBehaviour,
      ...experimentPages(xaiFeatures),
      almostDone,
      ...systemEvaluation,
      postQuestionnaire,
      demographics,
    ],
  };
};
