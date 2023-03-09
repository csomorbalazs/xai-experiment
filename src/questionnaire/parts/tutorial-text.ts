import { XAIFeatureLevel } from "@/model/xai-feature-level";

const tutorialText = (xaiFeatures: XAIFeatureLevel) => {
  return {
    name: "tutorial-text",
    elements: [
      {
        maxWidth: "900px",
        type: "html",
        html: `
        <div>
          <p>
            <b>Explanations for the Task of Credibility Assessment of News Items</b>
          </p>
          </br>
          <p>
            In the following you are asked to rate the truthfulness of a news article. Please read the news article carefully and then change the slider displayed below on a truthfulness scale from 0 to 100 based on your own impression of how accurate the news item is. On the next page additional information will be displayed. This information contains the truthfulness rating from an Artificial Intelligence System running in the background indicating the predicted truthfulness of the news item. Below you will find further information about the publishing date and source. 
          </p>
          </br>
          ${
            xaiFeatures === "salient"
              ? `
              <p>
                Furthermore, different explanations for the system's prediction will be shown. This includes:
                </br>
                </br>
                1. Text highlights marked in yellow, highlighting the sentences the AI system detects to contain false information,
                </br>
                2. Sentiment highlights marked in blue, highlighting words and phrases containing emotional content. In various studies it has been shown that fake news items tend to contain emotional speech more often than true or accurate news items.
                </br>
                3. The readability of the news item indicates how easy it is to read the text.
              </p>
              </br>
              `
              : ``
          }
          ${
            xaiFeatures === "explanations"
              ? `
              <p>
                Furthermore an AI generated explanation is given, why the news item tends to be true or fake.
              </p>
              </br>
              `
              : ``
          }
          <p>
            Based on the additional provided information, reconsider your original truthfulness rating and rate the news item again on a truthfulness scale between 0 and 100%. Afterwards several questions will be asked about the news item itself and the AI generated explainability features.
          </p>
          </br>
          <p>
            Overall, eight news items will be shown to you. Please read the news items carefully and perform your truthfulness rating by considering the AI generated explainability features. When you click on <b><i>Next</i></b> you will be introduced to the different information to consider during your task of truthfulness rating of news items. 
          </p>
        </div>
        `,
      },
    ],
  };
};

export default tutorialText;
