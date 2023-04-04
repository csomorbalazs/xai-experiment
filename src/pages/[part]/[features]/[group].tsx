import XAIQuestionnaire from "@/components/XAIQuestionnaire";
import getRandomizedNewsItems from "@/helper/get-randomized-news-items";
import { SurveyPart } from "@/model/survey-part";
import { XAIFeatureLevel } from "@/model/xai-feature-level";

const Home = ({
  part,
  group,
  features,
}: {
  part: SurveyPart;
  group: string;
  features: XAIFeatureLevel;
}) => {
  // parse group number from group string
  const groupNumber = parseInt(group.split("-")[1]);
  const newsItems = getRandomizedNewsItems(groupNumber, part);

  return (
    <XAIQuestionnaire
      newsItems={newsItems}
      xaiFeature={features}
      groupNumber={groupNumber}
      part={part}
    />
  );
};

export default Home;

export const getStaticPaths = async () => {
  const parts = ["qualification", "main"];
  const groups = [1, 2].map((group) => `group-${group}`);
  const features = ["basic", "salient", "explanations"];

  const paths = parts.flatMap((part) =>
    groups.flatMap((group) =>
      features.map((features) => ({
        params: {
          part,
          group,
          features,
        },
      }))
    )
  );

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: {
    group: string;
    features: string;
    part: string;
  };
}) => {
  return {
    props: {
      group: params.group,
      features: params.features,
      part: params.part,
    },
  };
};
