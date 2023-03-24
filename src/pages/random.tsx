import XAIQuestionnaire from "@/components/XAIQuestionnaire";
import getRandomizedNewsItems from "@/helper/get-randomized-news-items";

const Home = () => {
  // generate random group number (1 or 2)
  const groupNumber = Math.random() < 0.5 ? 1 : 2;
  const newsItems = getRandomizedNewsItems(groupNumber);

  // get randomized feature (either "salient" or "explanations")
  const features = Math.random() < 0.5 ? "salient" : "explanations";

  return (
    <XAIQuestionnaire
      newsItems={newsItems}
      xaiFeature={features}
      groupNumber={groupNumber}
    />
  );
};

export default Home;
