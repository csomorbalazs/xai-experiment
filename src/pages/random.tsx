import XAIQuestionnaire from "@/components/XAIQuestionnaire";
import getRandomizedNewsItems from "@/helper/get-randomized-news-items";
import { XAIFeatureLevel } from "@/model/xai-feature-level";

const Home = () => {
  // see if group number and feature are stored in local storage
  let groupNumber = parseInt(
    localStorage.getItem("xai-experiment.group") ?? "0"
  );
  let feature = localStorage.getItem(
    "xai-experiment.feature"
  ) as XAIFeatureLevel | null;

  // if they are not, generate random group number and feature
  if (groupNumber === 0 || feature === null) {
    groupNumber = 2;

    // get randomized feature ("basic" or "salient" or "explanations")
    // pick a random number between 0 and 2
    const randomFeatureNumber = Math.floor(Math.random() * 3);
    feature = ["basic", "salient", "explanations"][
      randomFeatureNumber
    ] as XAIFeatureLevel;

    // store group number and feature in local storage
    localStorage.setItem("xai-experiment.group", groupNumber.toString());
    localStorage.setItem("xai-experiment.feature", feature);
  }

  const newsItems = getRandomizedNewsItems(groupNumber, "merged");

  return (
    <XAIQuestionnaire
      newsItems={newsItems}
      xaiFeature={feature}
      groupNumber={groupNumber}
      part="merged"
    />
  );
};

export default Home;
