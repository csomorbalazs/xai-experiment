import {
  accessibilityLikert7,
  accuracyLikert7,
  frequencyLikert7,
  importanceLikert7,
  seriousnessLikert7,
} from "@/helper/likert-scales";

const informationSeekingBehaviour = [
  {
    title: "Survey Part 1: Your General Behaviour Searching for Information I",
    description:
      "In this part you should answer questions about the accessibility and transparency of information. Please answer as truthfully as possible.",
    elements: [
      {
        type: "boolean",
        name: "journalist",
        title: "Are a journalist by profession?",
        valueTrue: "Yes",
        valueFalse: "No",
        renderAs: "radio",
        hideNumber: true,
      },
      {
        type: "matrix",
        name: "sources",
        title:
          "How often do you use these sources to learn about different topics?",
        hideNumber: true,
        columns: frequencyLikert7,
        alternateRows: true,
        rows: [
          { value: "newspaper", text: "Newspaper" },
          { value: "online-newspaper", text: "Online newspaper" },
          { value: "instagram", text: "Instagram" },
          { value: "twitter", text: "Twitter" },
          { value: "facebook", text: "Facebook" },
          {
            value: "interview",
            text: "Personal Talk (Interview)",
            visibleIf: "{journalist}='Yes'",
          },
          { value: "blogs-websites", text: "Blogs/Websites" },
          {
            value: "personal-social-networks",
            text: "In personal social networks",
          },
        ],
      },
      {
        type: "text",
        name: "most-used-source",
        hideNumber: true,
        title: "What is your most used source from the given sources above?",
      },
      {
        title:
          "From the given sources: name the three sources from above you use most often and rank them such, that you most accessed source appears first.",
        type: "text",
        name: "most-used-sources",
        hideNumber: true,
      },
      {
        title:
          "How do you rate the seriousness of the source you named first in the previous question?",
        type: "matrix",
        name: "seriousness",
        hideNumber: true,
        columns: seriousnessLikert7,
        alternateRows: true,
        rows: [
          {
            value: "source-seriousness",
            text: "Seriousness of the source",
          },
        ],
      },
      {
        title:
          "How would you rate the truthfulness of information available from the following sources?",
        type: "matrix",
        name: "accuracy",
        hideNumber: true,
        columns: accuracyLikert7,
        alternateRows: true,
        rows: [
          { value: "newspaper", text: "Newspaper" },
          { value: "online-newspaper", text: "Online newspaper" },
          { value: "instagram", text: "Instagram" },
          { value: "twitter", text: "Twitter" },
          { value: "facebook", text: "Facebook" },
        ],
      },
    ],
  },
  {
    title: "Survey Part 1: Your General Behaviour Searching for Information II",
    description:
      "In this part you should answer questions about the accessibility and transparency of information. Please answer as truthfully as possible.",
    elements: [
      {
        type: "matrix",
        name: "accessibility",
        title:
          "How accessible is transparent and reliable information about online sources and their content for you?",
        hideNumber: true,
        columns: accessibilityLikert7,
        alternateRows: true,
        rows: [
          {
            value: "accessibility-of-information-about-transparency",
            text: "Accessibility",
          },
        ],
      },
      {
        title: "How do you access the material?",
        type: "matrix",
        name: "access",
        hideNumber: true,
        columns: frequencyLikert7,
        alternateRows: true,
        rows: [
          { value: "personal-purchase", text: "By personal purchase" },
          { value: "google", text: "Google" },
          { value: "library", text: "Library" },
          { value: "websites", text: "Websites" },
        ],
      },
      {
        title:
          "How important is it for you to receive comprehensive information?",
        type: "matrix",
        name: "comprehensive-information",
        hideNumber: true,
        columns: importanceLikert7,
        alternateRows: true,
        rows: [
          {
            value: "comprehensive-information",
            text: "Receiving comprehensive information",
          },
        ],
      },
      {
        title: "What is your purpose of information seeking?",
        type: "matrix",
        name: "purpose",
        hideNumber: true,
        columns: frequencyLikert7,
        alternateRows: true,
        rows: [
          { value: "keep-up-to-date", text: "Keep up-to-date" },
          { value: "general-awareness", text: "General awareness" },
          { value: "preparing-research", text: "Preparing research" },
        ],
      },
    ],
  },
];

export default informationSeekingBehaviour;
