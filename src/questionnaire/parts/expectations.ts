import { agreementLikert7 } from "@/helper/likert-scales";

const expectations = {
  title:
    "Survey Part 1: Your General Thoughts about using Artificial Intelligence (AI) for Fake News Detection",
  description:
    "In the following several questions will be asked about your general perception of Artificial Intelligence and its use for detecting false content in news items. Please answer the following questions as truthfully as possible.",
  elements: [
    {
      type: "matrix",
      name: "expectations",
      titleLocation: "hidden",
      hideNumber: true,
      alternateRows: true,
      columns: agreementLikert7,
      rows: [
        {
          value: "trust-new-tech",
          text: "My typical approach is to trust new technologies until they prove to me that I shouldn't trust them",
        },
        {
          value: "benefit-of-doubt",
          text: "I generally give technology the benefit of the doubt when I first use it",
        },
        {
          value: "ai-intimidates",
          text: "AI intimidates me",
        },
        {
          value: "understand-ai",
          text: "I feel unsure of my ability to understand AI",
        },
        {
          value: "ai-for-fake-news-good-idea",
          text: "I think it's a good idea to rely on AI for Fake News Detection",
        },
      ],
    },
  ],
};

export default expectations;
