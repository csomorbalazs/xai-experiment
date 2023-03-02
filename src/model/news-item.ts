interface NewsItem {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  source: string;
  publishingDate: string;
  content: string;
  label: "fake" | "true";
  xaiFeatures: {
    truthfulness: number;
    labeledContent: string;
    readability: number;
    naturalLanguageExplanation: string;
    sentiment: string;
  };
}

export default NewsItem;
