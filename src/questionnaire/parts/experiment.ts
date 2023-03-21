import { agreementLikert7 } from "@/helper/likert-scales";
import NewsItem from "@/model/news-item";
import { XAIFeatureLevel } from "@/model/xai-feature-level";

const getPagesForNewsItem = (
  newsItem: NewsItem,
  xaiFeatures: XAIFeatureLevel
) => {
  const title = "Truthfulness Rating of News Items";
  const description =
    "Please read the news item carefully and adjust the truthfulness rating based on the information provided.";

  return [
    {
      title,
      description,
      elements: [
        {
          type: "newsitem",
          name: `newsitem-${newsItem.id}-rating-before-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: "none",
          isInput: true,
        },
      ],
    },
    {
      title,
      description,
      elements: [
        {
          type: "newsitem",
          name: `newsitem-${newsItem.id}-article-with-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: xaiFeatures,
          isInput: false,
        },
      ],
    },
    {
      title,
      description,
      elements: [
        {
          type: "newsitem",
          name: `newsitem-${newsItem.id}-rating-after-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: xaiFeatures,
          isInput: true,
        },
      ],
    },
    {
      title,
      description,
      elements: [
        {
          // multiple choice control question
          type: "radiogroup",
          name: `newsitem-${newsItem.id}-control-question`,
          title: newsItem.controlQuestion.question,
          hideNumber: true,
          choicesOrder: "random",
          choices: [
            {
              value: "correct",
              text: newsItem.controlQuestion.correctAnswer,
            },
            ...newsItem.controlQuestion.wrongAnswers.map((answer, i) => ({
              value: `wrong-${i + 1}`,
              text: answer,
            })),
          ],
        },
      ],
    },
    {
      title: "Evaluate the system",
      description:
        "Evaluate the AI system based on the explanations it provided",
      elements: [
        {
          type: "matrix",
          name: `newsitem-${newsItem.id}-sys-evaluation`,
          title: "Competence",
          hideNumber: true,
          titleLocation: "hidden",
          columns: agreementLikert7,
          alternateRows: true,
          rows: [
            {
              text: "The system classified the news items correctly.",
              value: "classified-correctly",
            },
            {
              text: "I understand what the system does.",
              value: "understand-what-system-does",
            },
            {
              text: "The explainability features presented are useful to assess the credibility of the news item.",
              value: "useful-assess-credibility-news-item",
            },
            {
              text: "The indications given by the system are useful to assess the credibility of the news item.",
              value: "useful-assess-credibility-news-item-indications",
            },
            {
              text: "The presented explanations are comprehensible and help me with assessing the news articles.",
              value: "explanations-comprehensible-help-assess-news-articles",
            },
          ],
        },
      ],
    },
  ];
};

const experimentPages = (
  newsItems: NewsItem[],
  xaiFeatures: XAIFeatureLevel
) => {
  return [
    ...newsItems.flatMap((newsItem) =>
      getPagesForNewsItem(newsItem as any, xaiFeatures)
    ),
  ];
};

export default experimentPages;
