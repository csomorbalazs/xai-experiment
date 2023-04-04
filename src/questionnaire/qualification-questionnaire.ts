import { XAIFeatureLevel } from "@/model/xai-feature-level";
import expectations from "./parts/expectations";
import informationLiteracy from "./parts/information-literacy";
import informationSeekingBehaviour from "./parts/information-seeking-behaviour";
import experimentPages from "./parts/experiment";
import tutorial from "./parts/tutorial";
import youAreReady from "./parts/you-are-ready";
import personalCode from "./parts/personal-code";
import NewsItem from "@/model/news-item";
import qualificationStartPage from "./parts/qualification-start-page";
import welcomeToQualification from "./parts/welcome-to-qualification";

export const qualificationQuestionnaire = (
  newsItems: NewsItem[],
  xaiFeatures: XAIFeatureLevel
) => {
  // check if experimentOnly is set to true in query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const experimentOnly = urlParams.get("experimentOnly") === "true";

  const questionnaire = {
    firstPageIsStarted: true,
    showPageNumbers: false,
    showProgressBar: "top",
    pages: [
      qualificationStartPage,
      personalCode,
      welcomeToQualification,
      expectations,
      informationLiteracy,
      ...informationSeekingBehaviour,
      ...tutorial(xaiFeatures),
      youAreReady,
      ...experimentPages(newsItems, xaiFeatures),
    ],
  };

  if (experimentOnly) {
    questionnaire.pages = [...experimentPages(newsItems, xaiFeatures)];
  }

  return questionnaire;
};
