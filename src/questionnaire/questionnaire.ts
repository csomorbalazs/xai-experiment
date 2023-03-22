import { XAIFeatureLevel } from "@/model/xai-feature-level";
import startPage from "./parts/start-page";
import expectations from "./parts/expectations";
import informationLiteracy from "./parts/information-literacy";
import informationSeekingBehaviour from "./parts/information-seeking-behaviour";
import experimentPages from "./parts/experiment";
import aiSystemEvaluation from "./parts/ai-system-evaluation";
import demographics from "./parts/demographics";
import almostDone from "./parts/almost-done";
import tutorial from "./parts/tutorial";
import youAreReady from "./parts/you-are-ready";
import personalCode from "./parts/personal-code";
import NewsItem from "@/model/news-item";
import newsDashboardEvaluation from "./parts/news-dashboard-evaluation";

export const questionnaire = (
  newsItems: NewsItem[],
  xaiFeatures: XAIFeatureLevel
) => {
  // check if experimentOnly is set to true in query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const experimentOnly = urlParams.get("experimentOnly") === "true";

  if (experimentOnly) {
    return {
      firstPageIsStarted: false,
      showPageNumbers: false,
      showProgressBar: "top",
      pages: [...experimentPages(newsItems, xaiFeatures)],
    };
  }

  return {
    firstPageIsStarted: true,
    showPageNumbers: false,
    showProgressBar: "top",
    pages: [
      startPage,
      personalCode,
      expectations,
      informationLiteracy,
      ...informationSeekingBehaviour,
      ...tutorial(xaiFeatures),
      youAreReady,
      ...experimentPages(newsItems, xaiFeatures),
      almostDone,
      ...aiSystemEvaluation(xaiFeatures),
      newsDashboardEvaluation,
      demographics,
    ],
  };
};
