import XAIQuestionnaire from "@/components/XAIQuestionnaire";
import getRandomizedNewsItems from "@/helper/get-randomized-news-items";
import { XAIFeatureLevel } from "@/model/xai-feature-level";

const Home = ({
  group,
  features,
}: {
  group: string;
  features: XAIFeatureLevel;
}) => {
  // parse group number from group string
  const groupNumber = parseInt(group.split("-")[1]);
  const newsItems = getRandomizedNewsItems(groupNumber);

  return (
    <XAIQuestionnaire
      newsItems={newsItems}
      xaiFeature={features}
      groupNumber={groupNumber}
    />
  );
};

export default Home;

export const getStaticPaths = async () => {
  const groups = [1, 2].map((group) => `group-${group}`);
  const features = ["basic", "salient", "explanations"];

  const paths = groups.flatMap((group) =>
    features.map((features) => ({ params: { group, features } }))
  );

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: {
    group: string;
    features: string;
  };
}) => {
  return {
    props: {
      group: params.group,
      features: params.features,
    },
  };
};
