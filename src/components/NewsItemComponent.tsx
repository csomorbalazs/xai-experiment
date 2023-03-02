import NewsItem from "@/model/news-item";
import { createTheme, Slider, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";

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
        width: "100%",
        display: "flex",
        fontFamily: "Inter, sans-serif",
        color: "#1D1D1F",
        whiteSpace: "normal",
      }}
    >
      <article
        css={{
          width: "60%",
          maxWidth: "60%",
          minWidth: "60%",
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
          width: "40%",
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",

          h2: {
            fontSize: "14px",
            color: "#4F4F4F",
            fontWeight: 600,
            marginBottom: "8px",
          },

          section: {
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
            height: "fit-content",
            padding: "20px",
            border: "2px solid transparent",

            h1: {
              fontSize: "18px",
              fontWeight: 600,
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
        {xaiFeatures !== "none" && (
          <section>
            <h1>AI System prediction</h1>
            <div className="line"></div>
            <div
              css={{
                display: "flex",
                gap: "8px",
              }}
            >
              <h2>Truthfulness</h2>
              <ThuthfulnessComponent
                initialScore={newsItem.xaiFeatures.truthfulness}
              />
            </div>
          </section>
        )}
        {isInput && (
          <section
            css={{
              borderColor: "#19B394 !important",
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
              <ThuthfulnessComponent
                initialScore={ratingValue}
                interactive
                onChange={(score) => {
                  setRatingValue(score);
                  onRatingChange(score);
                }}
              />
            </div>
          </section>
        )}
      </aside>
    </section>
  );
};

const ThuthfulnessComponent = ({
  initialScore,
  interactive = false,
  onChange,
}: {
  initialScore: number;
  interactive?: boolean;
  onChange?: (score: number) => void;
}) => {
  return (
    <>
      <div
        css={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          gap: "1px",
          position: "relative",
          ".part": {
            width: "100%",
            height: "14px",
            position: "relative",

            "&:nth-of-type(1)": {
              borderRadius: "6px 0 0 6px",
              background: "#595959",
            },

            "&:nth-of-type(2)": {
              background: "#7F7F7F",
            },

            "&:nth-of-type(3)": {
              background: "#A5A5A5",
            },

            "&:nth-of-type(4)": {
              background: "#BFBFBF",
            },

            "&:nth-of-type(5)": {
              borderRadius: "0 6px 6px 0",
              background: "#D8D8D8",
            },

            "> label": {
              fontSize: "10px",
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              // don't break line
              whiteSpace: "nowrap",
            },
          },
        }}
      >
        <div className="part 1">
          <label>Fake</label>
        </div>
        <div className="part 2">
          <label>Rather fake</label>
        </div>
        <div className="part 3">
          <label>Neutral</label>
        </div>
        <div className="part 4">
          <label>Rather true</label>
        </div>
        <div className="part 5">
          <label>True</label>
        </div>
        <div
          css={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemeProvider
            theme={createTheme({
              palette: {
                primary: {
                  main: "#19B394",
                },
              },
            })}
          >
            <Slider
              value={initialScore}
              valueLabelDisplay="on"
              color="primary"
              valueLabelFormat={(value) => {
                return `${value}%`;
              }}
              css={{
                "& .MuiSlider-rail": {
                  color: "transparent",
                },
                "& .MuiSlider-track": {
                  color: "transparent",
                },
                "& .MuiSlider-valueLabel": {
                  top: "-8px",
                  backgroundColor: interactive ? "#19B394" : "#757575",
                },
              }}
              disabled={!interactive}
              onChange={(e, value) => {
                onChange && onChange(value as number);
              }}
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default NewsItemComponent;
