import data from "@/data/news-items.json";
import NewsItem from "@/model/news-item";

const getRandomizedNewsItems = (group: number): NewsItem[] => {
  const groupItems = data.filter((item) => item.group === group) as NewsItem[];
  const falsePositive = data.filter((item) => item.isFalsePositive)[0];
  const trueNegative = data.filter((item) => item.isTrueNegative)[0];

  // randomize the order of the items
  groupItems.sort(() => Math.random() - 0.5);

  // add false positive as 4th item
  groupItems.splice(3, 0, falsePositive as NewsItem);

  // add true negative as 8th item
  groupItems.splice(7, 0, trueNegative as NewsItem);

  return groupItems;
};

export default getRandomizedNewsItems;
