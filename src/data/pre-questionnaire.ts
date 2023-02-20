const agreementLikert7 = [
  {
    value: 7,
    text: "Strongly agree",
  },
  {
    value: 6,
    text: "Agree",
  },
  {
    value: 5,
    text: "Somewhat agree",
  },
  {
    value: 4,
    text: "Neutral",
  },
  {
    value: 3,
    text: "Somewhat disagree",
  },
  {
    value: 2,
    text: "Disagree",
  },
  {
    value: 1,
    text: "Strongly disagree",
  },
];

const likelihoodLikert7 = [
  {
    value: 7,
    text: "Always true",
  },
  {
    value: 6,
    text: "Usually true",
  },
  {
    value: 5,
    text: "Often true",
  },
  {
    value: 4,
    text: "Occasionally True",
  },
  {
    value: 3,
    text: "Rarely true",
  },
  {
    value: 2,
    text: "Usually not true",
  },
  {
    value: 1,
    text: "Never true",
  },
];

const frequencyLikert7 = [
  {
    value: 7,
    text: "Always",
  },
  {
    value: 6,
    text: "Usually",
  },
  {
    value: 5,
    text: "Frequently",
  },
  {
    value: 4,
    text: "Sometimes",
  },
  {
    value: 3,
    text: "Occasionally",
  },
  {
    value: 2,
    text: "Rarely",
  },
  {
    value: 1,
    text: "Never",
  },
];

export const preQuestionnaire = {
  showPageNumbers: false,
  pages: [
    {
      title: "Expectations",
      description:
        "In this part you should answer some questions about your expectation regarding AI based Fake News Detection",
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
              value: "new-tech",
              text: "My typical approach is to trust new technologies until they prove to me that I shouldn’t trust them.",
            },
            {
              value: "benefit-of doubt",
              text: "I generally give technology the benefit of the doubt when I first use it.",
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
              value: "ai-for-fake-news",
              text: "I think it’s a good idea to rely on AI for Fake News Detection",
            },
          ],
        },
      ],
    },
    {
      title: "Information Literacy",
      description:
        "Here in this part you should answer questions about your ability to deal with any information in a self-determined, sovereign, responsible and goal-oriented manner. Please answer as truthfully as possible.",
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
    },
    {
      title: "Information Seeking Behaviour",
      description:
        "In this part you should answer questions about your behaviour while searching for information. Please answer as truthfully as possible.",
      elements: [
        {
          type: "matrix",
          name: "sources",
          title: "How often do you use these sources to learn about different topics?",
          alternateRows: true,
          hideNumber: true,
          columns: frequencyLikert7,
          rows: [
            {
              value: "misinformation",
              text: "Newspaper",
            },
            {
              value: "reliability",
              text: "Online newspaper",
            },
            {
              value: "subscribed-openaccess",
              text: "Instagram",
            },
            {
              value: "authentic-sources",
              text: "Twitter",
            },
            {
              value: "research-level",
              text: "Facebook",
            },
            {
              value: "plagiarism",
              text: "Personal Talk (Interview)", // TODO: only for journalists
            },
            {
              value: "relevant-literature",
              text: "Blogs/Websites",
            },
            {
              value: "right-and-fake",
              text: "In personal social networks",
            },
          ],
        },
      ],
    },
  ],
};
