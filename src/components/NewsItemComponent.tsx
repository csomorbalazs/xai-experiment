import NewsItem from "@/model/news-item";
import { TutorialTooltipStep } from "@/model/tutorial-tooltip-step";
import { XAIFeatureLevel } from "@/model/xai-feature-level";
import { useState } from "react";
import ThuthfulnessSlider from "./TruthfulnessSlider";
import TutorialTooltip from "./TutorialTooltip";

const NewsItemComponent = ({
  newsItem,
  xaiFeatures,
  isInput = false,
  onRatingChange = () => {},
  isTutorialMode = false,
  tutorialTooltip = null,
}: {
  newsItem: NewsItem;
  xaiFeatures: XAIFeatureLevel;
  isInput: boolean;
  onRatingChange: (value: number) => void;
  isTutorialMode: boolean;
  tutorialTooltip: TutorialTooltipStep | null;
}) => {
  const [ratingValue, setRatingValue] = useState<number | undefined>(undefined);

  const xaiHighlight = (content: string) => {
    return content
      .replace(/<mark>/g, "<span class='xai-highlight'>")
      .replace(/<\/mark>/g, "</span>")
      .replace(/<sentiment>/g, "<span class='sentiment-highlight'>")
      .replace(/<\/sentiment>/g, "</span>");
  };

  const getHighlightedSentences = (highlightedContent: string) => {
    const sentences = highlightedContent.match(/<mark>(.*?)<\/mark>/g);

    if (sentences) {
      return sentences.map((sentence) => {
        return sentence
          .replace(/<\/?mark>/g, "")
          .replace(/<\/?sentiment>/g, "");
      });
    } else {
      return [];
    }
  };

  const getSentimentHighlights = (highlightedContent: string) => {
    const sentences = highlightedContent.match(
      /<sentiment>(.*?)<\/sentiment>/g
    );

    if (sentences) {
      return sentences.map((sentence) => {
        return sentence
          .replace(/<\/?sentiment>/g, "")
          .replace(/<\/?mark>/g, "");
      });
    } else {
      return [];
    }
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
          position: "relative",
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
            backgroundColor: "#FFE826",
          },
          ".sentiment-highlight": {
            backgroundColor: "#00FEFE",
          },
        }}
      >
        {tutorialTooltip === "article" && (
          <TutorialTooltip>
            Here the title and content of the news article are provided. The
            article is written in the {newsItem.category} domain, displayed at
            the top. Please read the news item carefully and click next.
          </TutorialTooltip>
        )}
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
        <div></div>
        <p
          dangerouslySetInnerHTML={{
            __html:
              xaiFeatures === "salient"
                ? xaiHighlight(newsItem.xaiFeatures.highlightedContent)
                : newsItem.content,
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
            <h1>AI-System Truthfulness Rating</h1>
            <div className="line"></div>
            <div
              css={{
                display: "flex",
                gap: "8px",
                position: "relative",
              }}
            >
              {tutorialTooltip === "ai-rating" && (
                <TutorialTooltip>
                  This is the AI generated truthfulness rating from the AI
                  system running in the background. The system is trained on
                  many news items and predicts the truthfulness of the news
                  item. Here you see also the publishing date and source
                  publishing the news item. Please click next.
                </TutorialTooltip>
              )}
              <h2>Truthfulness</h2>
              <ThuthfulnessSlider
                initialScore={newsItem.xaiFeatures.truthfulness}
              />
            </div>
            <div className="line"></div>
            <div
              css={{
                display: "flex",
              }}
            >
              <div
                css={{
                  flex: 1,
                }}
              >
                <h2>Publishing date</h2> {newsItem.publishingDate}
              </div>
              <div
                css={{
                  flex: 1,
                }}
              >
                <h2>Source</h2> {newsItem.source}
              </div>
            </div>
            {xaiFeatures === "salient" && (
              <>
                <div className="line"></div>
                <div
                  css={{
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  {tutorialTooltip === "readability" && (
                    <TutorialTooltip>
                      Here you can see the readability rating which can be
                      either easy, medium or hard to read. Please click next.
                    </TutorialTooltip>
                  )}
                  <h2>Readability</h2>
                  <div
                    css={{
                      display: "flex",
                      width: "340px",
                      height: "36px",

                      ".level": {
                        flex: 1,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #E5E5E5",
                        fontSize: "14px",
                      },

                      ".selected": {
                        border: "1px solid #7F7F7F !important",
                        backgroundColor: "#F3F3F3",
                        fontWeight: 500,
                      },
                    }}
                  >
                    <div
                      className={`level ${
                        newsItem.xaiFeatures.readability === "easy"
                          ? "selected"
                          : ""
                      }`}
                      css={{
                        borderRight: "none !important",
                        borderRadius: "4px 0 0 4px",
                      }}
                    >
                      Easy
                    </div>
                    <div
                      className={`level ${
                        newsItem.xaiFeatures.readability === "medium"
                          ? "selected"
                          : ""
                      }`}
                      css={[
                        newsItem.xaiFeatures.readability === "easy" &&
                          "border-left: none !important",
                        newsItem.xaiFeatures.readability === "hard" &&
                          "border-right: none !important",
                      ]}
                    >
                      Medium
                    </div>
                    <div
                      className={`level ${
                        newsItem.xaiFeatures.readability === "hard"
                          ? "selected"
                          : ""
                      }`}
                      css={{
                        borderLeft: "none !important",
                        borderRadius: "0 4px 4px 0",
                      }}
                    >
                      Hard
                    </div>
                  </div>
                </div>
                <div className="line"></div>
                <div
                  css={{
                    position: "relative",
                  }}
                >
                  {tutorialTooltip === "text-highlights" && (
                    <TutorialTooltip>
                      Here you see the highlighted text in yellow, where the AI
                      system detected content which either supports the fakeness
                      or the truthfulness of the news item. Please click next.
                    </TutorialTooltip>
                  )}
                  <h2>Highlights</h2>
                  <div>
                    {getHighlightedSentences(
                      newsItem.xaiFeatures.highlightedContent
                    ).map((sentence, index) => (
                      <blockquote
                        key={index}
                        css={{
                          borderLeft: "6px solid #FFE826",
                          padding: "8px",
                          margin: "8px 0",
                          backgroundColor: "#FFE8261A",
                        }}
                      >
                        {sentence}
                      </blockquote>
                    ))}
                  </div>
                </div>
                <div className="line"></div>
                <div
                  css={{
                    position: "relative",
                  }}
                >
                  {tutorialTooltip === "sentiment-highlights" && (
                    <TutorialTooltip>
                      Here you see the words highlighted in blue which contain
                      emotional content, which is typical for fake news. Please
                      click next.
                    </TutorialTooltip>
                  )}
                  <h2>Sentiment highlights</h2>
                  <div
                    css={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {getSentimentHighlights(
                      newsItem.xaiFeatures.highlightedContent
                    ).map((sentence, index) => (
                      <blockquote
                        key={index}
                        css={{
                          borderLeft: "6px solid #00FEFE",
                          padding: "8px",
                          backgroundColor: "#00FEFE1A",
                        }}
                      >
                        {sentence}
                      </blockquote>
                    ))}
                  </div>
                </div>
              </>
            )}
            {xaiFeatures === "explanations" && (
              <>
                <div className="line"></div>
                <div
                  css={{
                    position: "relative",
                  }}
                >
                  {tutorialTooltip === "natural-language-explanation" && (
                    <TutorialTooltip>
                      Here you read the natural language explanation of the AI
                      system why the news item is true or false. Please read it
                      carefully and click next.
                    </TutorialTooltip>
                  )}
                  <h2>Natural language explanation</h2>
                  <blockquote
                    css={{
                      borderLeft: "6px solid #FF6FFF",
                      padding: "8px",
                      margin: "8px 0",
                      backgroundColor: "#FF6FFF1A",
                    }}
                  >
                    {newsItem.xaiFeatures.naturalLanguageExplanation}
                  </blockquote>
                </div>
              </>
            )}
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
            position: "relative",
          }}
        >
          {tutorialTooltip === "your-rating" && (
            <TutorialTooltip>
              Here you can perform your own truthfulness rating based on the
              news article and the additional information and explanations
              provided. Please click next.
            </TutorialTooltip>
          )}
          {tutorialTooltip === "redo-your-rating" && (
            <TutorialTooltip>
              You will be asked to redo your personal truthfulness rating by
              taking the additional information provided by the AI system into
              account. Please click next.
            </TutorialTooltip>
          )}
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
