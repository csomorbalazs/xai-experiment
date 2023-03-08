import exampleNewsItem from "@/data/example-news-item.json";
import NewsItem from "@/model/news-item";
import { TutorialTooltipStep } from "@/model/tutorial-tooltip-step";
import { XAIFeatureLevel } from "@/model/xai-feature-level";
import tutorialText from "./tutorial-text";

const getTutorialPageForStep = (
  newsItem: NewsItem,
  {
    isInput,
    xaiFeatures,
    step,
  }: {
    isInput: boolean;
    xaiFeatures: XAIFeatureLevel;
    step: TutorialTooltipStep;
  }
) => {
  const title = "Truthfulness Rating of News Items";
  const description =
    "Please read the news item carefully and adjust the truthfulness rating based on the information provided.";

  return {
    title,
    description,
    elements: [
      {
        type: "newsitem",
        hideNumber: true,
        name: `tutorial-${step}`,
        titleLocation: "hidden",
        newsitem: newsItem,
        xaiFeatures: xaiFeatures,
        isInput: isInput,
        isTutorial: true,
        tutorialTooltip: step,
      },
    ],
  };
};

const getTutorialPagesForNewsItem = (
  newsItem: NewsItem,
  xaiFeatures: XAIFeatureLevel
) => {
  return [
    getTutorialPageForStep(newsItem, {
      isInput: false,
      xaiFeatures: "none",
      step: "article",
    }),
    getTutorialPageForStep(newsItem, {
      isInput: true,
      xaiFeatures: "none",
      step: "your-rating",
    }),
    getTutorialPageForStep(newsItem, {
      isInput: false,
      xaiFeatures: xaiFeatures,
      step: "ai-rating",
    }),
    xaiFeatures === "salient" &&
      getTutorialPageForStep(newsItem, {
        isInput: false,
        xaiFeatures: xaiFeatures,
        step: "readability",
      }),
    xaiFeatures === "salient" &&
      getTutorialPageForStep(newsItem, {
        isInput: false,
        xaiFeatures: xaiFeatures,
        step: "text-highlights",
      }),
    xaiFeatures === "salient" &&
      getTutorialPageForStep(newsItem, {
        isInput: false,
        xaiFeatures: xaiFeatures,
        step: "sentiment-highlights",
      }),
    xaiFeatures === "explanations" &&
      getTutorialPageForStep(newsItem, {
        isInput: false,
        xaiFeatures: xaiFeatures,
        step: "natural-language-explanation",
      }),
    getTutorialPageForStep(newsItem, {
      isInput: true,
      xaiFeatures: xaiFeatures,
      step: "redo-your-rating",
    }),
  ];
};

const experimentPages = (xaiFeatures: XAIFeatureLevel) => {
  const tutorialTextPage = tutorialText(xaiFeatures);

  return [
    tutorialTextPage,
    ...getTutorialPagesForNewsItem(exampleNewsItem as any, xaiFeatures),
  ];
};

export default experimentPages;
