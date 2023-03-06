interface NewsItem {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  source: string;
  category?: string;
  publishingDate: string;
  label: "fake" | "true";
  xaiFeatures: {
    truthfulness: number;
    readability: "easy" | "medium" | "hard";
    highlightedContent: string;
    naturalLanguageExplanation: string;
  };
}

export default NewsItem;
