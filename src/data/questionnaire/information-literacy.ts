import { likelihoodLikert7 } from "@/helper/likert-scales";

const informationLiteracy = {
  title: "General Background of Reading and Searching for News  ",
  description:
    "Please answer the following questions as truthfully as possible.",
  elements: [
    {
      type: "matrix",
      name: "information-literacy",
      alternateRows: true,
      titleLocation: "hidden",
      hideNumber: true,
      columns: likelihoodLikert7,
      rows: [
        {
          value: "misinformation",
          text: "I can identify misinformation",
        },
        {
          value: "reliability",
          text: "I can check the reliability of the searched information",
        },
        {
          value: "subscribed-openaccess",
          text: "I can efficiently use subscribed and openaccess information resources.",
        },
        {
          value: "authentic-sources",
          text: "I can identify the best authentic sources of information",
        },
        {
          value: "research-level",
          text: "I have research-level skills.",
        },
        {
          value: "plagiarism",
          text: "I know about plagiarism and publication ethics.",
        },
        {
          value: "relevant-literature",
          text: "I have the skill to access information resources for finding relevant literature.",
        },
        {
          value: "right-and-fake",
          text: "I can differentiate between right and fake information.",
        },
        {
          value: "it-skills",
          text: "I have skills in Information Technology (IT).",
        },
      ],
    },
  ],
};

export default informationLiteracy;
