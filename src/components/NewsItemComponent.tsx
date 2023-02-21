import NewsItem from "@/model/news-item";
import { css } from "@emotion/react";

const NewsItemComponent = ({
  newsItem,
  xaiFeature,
}: {
  newsItem: NewsItem;
  xaiFeature: "none" | "sentiment" | "explanation";
}) => {
  // turn <mark></mark> into <span class="xai-highlight"></span>
  const xaiHighlight = (content: string) => {
    const contentStr = content
      .replace(/<mark>/g, "<span class='xai-highlight'>")
      .replace(/<\/mark>/g, "</span>");

    return <div dangerouslySetInnerHTML={{ __html: contentStr }} />;
  };

  return (
    <section>
      <article
        css={{
          h1: {
            fontSize: "28px",
          },
          h2: {
            fontSize: "24px",
          },
          ".xai-highlight": {
            backgroundColor: "yellow",
          },
        }}
      >
        <h1>{newsItem.title}</h1>
        <h2>{newsItem.subtitle}</h2>
        <h3>
          {newsItem.source} - {newsItem.publishingDate}
        </h3>
        {xaiHighlight(newsItem.xaiFeatures.labeledContent)}
      </article>
    </section>
  );
};

export default NewsItemComponent;
