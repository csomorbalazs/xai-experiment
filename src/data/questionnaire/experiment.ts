import newsItems from "@/data/news-items.json";
import { agreementLikert7 } from "@/helper/likert-scales";
import NewsItem from "@/model/news-item";

const XAI_FEATURES = "salient";

const getPagesForNewsItem = (newsItem: NewsItem) => {
  return [
    {
      title: "Evaluate news article",
      description:
        "Carefully read the news article and evaluate the news article's truthfulness based on your own opinion, when you are done click next",
      elements: [
        {
          type: "newsitem",
          name: `${newsItem.id}-rating-before-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: "none",
          isInput: true,
        },
      ],
    },
    {
      title: "Analyse news article with AI",
      description:
        "Carefully analyse the news article and pay attention to the explanations provided by the AI system, when you are done click next",
      elements: [
        {
          type: "newsitem",
          name: `${newsItem.id}-article-with-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: XAI_FEATURES,
          isInput: false,
        },
      ],
    },
    {
      title: "Evaluate news article with AI",
      description:
        "Evaluate the news article's truthfulness again after seeing the AI system's explanation, when you are done click next",
      elements: [
        {
          type: "newsitem",
          name: `${newsItem.id}-rating-after-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: XAI_FEATURES,
          isInput: true,
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
          name: `${newsItem.id}-sys-evaluation`,
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

const experimentPages = [
  ...newsItems.flatMap((newsItem) => getPagesForNewsItem(newsItem as any)),
];

export default experimentPages;
