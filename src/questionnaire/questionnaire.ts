import { XAIFeatureLevel } from "@/model/xai-feature-level";
import startPage from "./parts/start-page";
import expectations from "./parts/expectations";
import informationLiteracy from "./parts/information-literacy";
import informationSeekingBehaviour from "./parts/information-seeking-behaviour";
import experimentPages from "./parts/experiment";
import systemEvaluation from "./parts/system-evaluation";
import postQuestionnaire from "./parts/post-questionnaire";
import demographics from "./parts/demographics";
import almostDone from "./parts/almost-done";
import tutorial from "./parts/tutorial";
import youAreReady from "./parts/you-are-ready";

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
      ...tutorial(xaiFeatures),
      youAreReady,
      ...experimentPages(xaiFeatures),
      almostDone,
      ...systemEvaluation,
      postQuestionnaire(xaiFeatures),
      demographics,
    ],
  };
};
