import NewsItem from "@/model/news-item";
import { createTheme, Slider, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import ThuthfulnessSlider from "./TruthfulnessSlider";

const NewsItemComponent = ({
  newsItem,
  xaiFeatures,
  isInput = false,
  onRatingChange = () => {},
}: {
  newsItem: NewsItem;
  xaiFeatures: "none" | "basic";
  isInput: boolean;
  onRatingChange: (value: number) => void;
}) => {
  const DEFAULT_RATING = 50;
  const [ratingValue, setRatingValue] = useState(DEFAULT_RATING);

  const xaiHighlight = (content: string) => {
    return content
      .replace(/<mark>/g, "<span class='xai-highlight'>")
      .replace(/<\/mark>/g, "</span>");
  };

  return (
    <section
      css={{
        fontFamily: "Inter, sans-serif",
        color: "#1D1D1F",
        whiteSpace: "normal",

        display: "grid",
        gridTemplateColumns: "minmax(58%, 1fr) minmax(380px, 1fr)",
        gap: "32px",

        "@media (max-width: 1100px)": {
          gridTemplateColumns: "1fr",
        },

        ".container": {
          backgroundColor: "#FBFBFB",
          borderRadius: "8px",
          padding: "20px",
          minWidth: "380px",

          h1: {
            fontSize: "18px",
            fontWeight: 600,
          },

          h2: {
            fontSize: "14px",
            color: "#4F4F4F",
            fontWeight: 600,
            marginBottom: "8px",
          },

          ".line": {
            width: "100%",
            height: "1px",
            backgroundColor: "#E5E5E5",
            margin: "20px 0",
          },
        },
      }}
    >
      <article
        css={{
          h1: {
            fontSize: "30px",
            marginBottom: "8px",
          },
          h2: {
            fontSize: "18px",
            color: "#4F4F4F",
            fontWeight: 500,
            marginBottom: "24px",
          },
          h3: {
            fontSize: "14px",
            fontWeight: 500,
            marginBottom: "24px",
          },
          p: {
            fontSize: "16px",
            lineHeight: "24px",
          },
          ".xai-highlight": {
            backgroundColor: "yellow",
          },
        }}
      >
        <div
          css={{
            fontSize: "14px",
            marginBottom: "12px",
            fontWeight: 700,
            color: "#0055F6",
          }}
        >
          {newsItem.category}
        </div>
        <h1>{newsItem.title}</h1>
        <h2>{newsItem.subtitle}</h2>
        <h3>
          {newsItem.source} - {newsItem.publishingDate}
        </h3>
        <div></div>
        <p
          dangerouslySetInnerHTML={{
            __html: xaiHighlight(newsItem.content),
          }}
          css={{
            textAlign: "justify",
          }}
        ></p>
      </article>
      <aside
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {xaiFeatures !== "none" && (
          <section
            className="container"
            css={{
              height: "100%",
              border: "1px solid #E5E5E5",
              background: "transparent",
            }}
          >
            <h1>AI System prediction</h1>
            <div className="line"></div>
            <div
              css={{
                display: "flex",
                gap: "8px",
              }}
            >
              <h2>Truthfulness</h2>
              <ThuthfulnessSlider
                initialScore={newsItem.xaiFeatures.truthfulness}
              />
            </div>
          </section>
        )}
      </aside>
      {isInput && (
        <div
          className="container"
          css={{
            border: "1px solid #19B394",
            flex: 1,
            minWidth: "58%",
          }}
        >
          <h1>Your rating</h1>
          <div className="line"></div>
          <div
            css={{
              display: "flex",
              gap: "8px",
            }}
          >
            <h2>Truthfulness</h2>
            <ThuthfulnessSlider
              initialScore={ratingValue}
              interactive
              onChange={(score) => {
                setRatingValue(score);
                onRatingChange(score);
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsItemComponent;
