import Head from "next/head";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { preQuestionnaire } from "@/data/pre-questionnaire";
import data from "@/data/news-items.json";
import NewsItem from "@/model/news-item";
import NewsItemComponent from "@/components/NewsItemComponent";

const Home = () => {
  // const survey = new Model(preQuestionnaire);

  const newsItems: NewsItem[] = data;

  console.log(newsItems[0].content);

  return (
    <>
      <Head>
        <title>XAI Experiment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Survey model={survey} /> */}
        <NewsItemComponent newsItem={newsItems[0]} xaiFeature={"none"} />
      </main>
    </>
  );
};

export default Home;
