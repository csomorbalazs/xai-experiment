interface NewsItem {
  id: number;
  title: string;
  subtitle?: string;
  source: string;
  publishingDate: string;
  content: string;
  label: "fake" | "true";
  xaiFeatures: {
    labeledContent: string;
    readability: number;
    naturalLanguageExplanation: string;
    sentiment: string;
  };
}

export default NewsItem;
