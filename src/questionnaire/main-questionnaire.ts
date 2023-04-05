import { XAIFeatureLevel } from "@/model/xai-feature-level";
import mainStartPage from "./parts/main-start-page";
import experimentPages from "./parts/experiment";
import aiSystemEvaluation from "./parts/ai-system-evaluation";
import demographics from "./parts/demographics";
import almostDone from "./parts/almost-done";
import tutorial from "./parts/tutorial";
import youAreReady from "./parts/you-are-ready";
import NewsItem from "@/model/news-item";
import newsDashboardEvaluation from "./parts/news-dashboard-evaluation";

export const mainQuestionnaire = (
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
      mainStartPage,
      ...tutorial(xaiFeatures),
      youAreReady,
      ...experimentPages(newsItems, xaiFeatures, "main"),
      almostDone,
      ...aiSystemEvaluation(xaiFeatures),
      newsDashboardEvaluation,
      demographics,
    ],
    completedHtmlOnCondition: [
      {
        expression: `{correctAnswers} >= 5`,
        html: `<div style="max-width: 900px; margin: 0 auto;">
        <p>
        Thank you for taking part in the XAI experiment! Congratulations, you have answered <b>{correctAnswers} out of 6 control questions correctly</b> and you will receive a <b>bonus of 5€ within the next days</b>.
        </p>
        </br>
        <p>
        You can close this Tab now.
        </p>
        </div>`,
      },
    ],
    completedHtml: `<div style="max-width: 900px; margin: 0 auto;">
    <p>
    Thank you for taking part in the XAI experiment! Unfortunately, you have not paid enough attention to the control questions and you will <b>not receive a bonus</b>.
    </p>
    </br>
    <p>
    You can close this Tab now.
    </p>
    </div>`,
  };

  if (experimentOnly) {
    questionnaire.firstPageIsStarted = false;
    questionnaire.pages = [...experimentPages(newsItems, xaiFeatures, "main")];
  }

  return questionnaire;
};
