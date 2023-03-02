import data from "@/data/news-items.json";
import NewsItem from "@/model/news-item";

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

const seriousnessLikert7 = [
  {
    value: 7,
    text: "Very serious",
  },
  {
    value: 6,
    text: "Serious",
  },
  {
    value: 5,
    text: "Somewhat serious",
  },
  {
    value: 4,
    text: "Neutral",
  },
  {
    value: 3,
    text: "Rather not serious",
  },
  {
    value: 2,
    text: "Not serious",
  },
  {
    value: 1,
    text: "Not serious at all",
  },
];

const accuracyLikert7 = [
  {
    value: 7,
    text: "Very accurate",
  },
  {
    value: 6,
    text: "Accurate",
  },
  {
    value: 5,
    text: "Somewhat accurate",
  },
  {
    value: 4,
    text: "Neutral",
  },
  {
    value: 3,
    text: "Rather inaccurate",
  },
  {
    value: 2,
    text: "Inaccurate",
  },
  {
    value: 1,
    text: "Very inaccurate",
  },
];

const accessibilityLikert7 = [
  {
    value: 7,
    text: "Very accessible",
  },
  {
    value: 6,
    text: "Accessible",
  },
  {
    value: 5,
    text: "Somewhat accessible",
  },
  {
    value: 4,
    text: "Neutral",
  },
  {
    value: 3,
    text: "Somewhat not accessible",
  },
  {
    value: 2,
    text: "Not accessible",
  },
  {
    value: 1,
    text: "Very not accessible",
  },
];

const importanceLikert7 = [
  {
    value: 7,
    text: "Very important",
  },
  {
    value: 6,
    text: "Important",
  },
  {
    value: 5,
    text: "Somewhat important",
  },
  {
    value: 4,
    text: "Neutral",
  },
  {
    value: 3,
    text: "Somewhat not important",
  },
  {
    value: 2,
    text: "Not important",
  },
  {
    value: 1,
    text: "Very not important",
  },
];

const startPage = {
  elements: [
    {
      type: "html",
      html: `
        <h1>XAI Experiment</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus metus vitae libero fringilla ornare. Suspendisse ac nisl aliquet turpis finibus laoreet quis eu tortor. Cras iaculis vitae ipsum quis blandit. Proin viverra orci sit amet odio egestas, eu malesuada nunc facilisis. Mauris consectetur auctor mattis. Proin in consectetur neque. Phasellus eu purus et velit venenatis tristique. In mattis et lorem eu iaculis. Aenean vehicula risus vitae quam cursus porttitor. Sed varius urna felis, in laoreet sapien suscipit in. Curabitur in nunc sit amet lectus dapibus pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    `,
    },
  ],
};

const demographics = {
  title: "Demographics",
  description:
    "Please answer the following questions to complete the survey, when you are done click complete",
  elements: [
    {
      title: "To which age category do you belong?",
      type: "radiogroup",
      name: "age",
      hideNumber: true,
      choices: [
        { value: "18-20", text: "18-20" },
        { value: "21-29", text: "21-29" },
        { value: "30-39", text: "30-39" },
        { value: "40-49", text: "40-49" },
        { value: "50-59", text: "50-59" },
        { value: "60-or-older", text: "60 or older" },
      ],
    },
    {
      title: "What is your gender?",
      type: "radiogroup",
      name: "gender",
      hideNumber: true,
      choices: [
        { value: "female", text: "female" },
        { value: "male", text: "male" },
        { value: "diverse", text: "diverse" },
      ],
    },
    {
      title: "In which country do you currently live?",
      type: "text",
      name: "country",
      hideNumber: true,
    },
    {
      title: "What is your nationality?",
      type: "text",
      name: "nationality",
      hideNumber: true,
    },
    {
      title: "What is your highest school-leaving qualification?",
      type: "radiogroup",
      name: "education",
      hideNumber: true,
      choices: [
        { value: "no-degree", text: "no degree" },
        {
          value: "secondary",
          text: "secondary school diploma / elementary school diploma",
        },
        { value: "upper-secondary", text: "upper secondary school" },
        { value: "high-school", text: "high school diploma" },
        { value: "university", text: "university degree" },
      ],
    },
    {
      title:
        "Which of the following categories best describes your employment status?",
      type: "radiogroup",
      name: "employment",
      hideNumber: true,
      choices: [
        { value: "apprentice", text: "Apprentice" },
        { value: "student", text: "Student" },
        { value: "salaried-employee", text: "Salaried employee" },
        { value: "self-employed", text: "Self-employed" },
        { value: "civil-servant", text: "Civil servant" },
        { value: "retiree-pensioner", text: "Retiree / pensioner" },
        { value: "unemployed", text: "Unemployed" },
        { value: "other", text: "Other" },
      ],
    },
    {
      title: "What is your annual household income (gross)?",
      type: "radiogroup",
      name: "income",
      hideNumber: true,
      choices: [
        { value: "less-than-20000-eur", text: "Less than 20.000€" },
        { value: "20000-34999-eur", text: "20.000-34.999€" },
        { value: "35000-49999-eur", text: "35.000-49.999€" },
        { value: "50000-74999-eur", text: "50.000-74.999€" },
        { value: "75000-99999-eur", text: "75.000-99.999€" },
        { value: "over-100000-eur", text: "Over 100.000€" },
        { value: "no-answer", text: "I do not want to answer" },
      ],
    },
  ],
};

const expectations = {
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
          text: "I think it's a good idea to rely on AI for Fake News Detection",
        },
      ],
    },
  ],
};

const informationLiteracy = {
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
};

const informationSeekingBehaviour = {
  title: "Information Seeking Behaviour",
  description:
    "In this part you should answer questions about your behaviour while searching for information. Please answer as truthfully as possible.",
  elements: [
    // panel
    {
      type: "panel",
      name: "sources",
      title: "Sources",
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
              text: "Personal Talk (Interview)",
              visibleIf: "{journalist}='Yes'",
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
        {
          type: "text",
          name: "most-used-source",
          hideNumber: true,
          title:
            "What is your most used source from the given sources? (display all source categories)",
        },
        {
          title:
            "From the given sources: name the three sources you use most often and rank them.",
          type: "text",
          name: "most-used-sources",
          hideNumber: true,
        },
        {
          title: "How do you rate the seriousness of that source?",
          type: "matrix",
          name: "seriousness",
          hideNumber: true,
          columns: seriousnessLikert7,
          rows: [
            {
              value: "source-seriousness",
              text: "Seriousness of the source",
            },
          ],
        },
        {
          title:
            "How would you rate the accuracy of information available from the following sources?",
          type: "matrix",
          name: "accuracy",
          hideNumber: true,
          columns: accuracyLikert7,
          rows: [
            {
              value: "newspaper",
              text: "Newspaper",
            },
            {
              value: "online-newspaper",
              text: "Online newspaper",
            },
            {
              value: "instagram",
              text: "Instagram",
            },
            {
              value: "twitter",
              text: "Twitter",
            },
            {
              value: "facebook",
              text: "Facebook",
            },
          ],
        },
      ],
    },
    // panel
    {
      type: "panel",
      name: "access-of-information",
      title: "Access of Information",
      elements: [
        {
          type: "matrix",
          name: "accessibility",
          title:
            "How accessible is information about transparency and reliability of online sources for you?",
          hideNumber: true,
          columns: accessibilityLikert7,
          rows: [
            {
              value: "accessibility-of-information-about-transparency",
              text: "Transparency and reliability",
            },
          ],
        },
        {
          title: "How do you access the material?",
          type: "matrix",
          name: "access",
          hideNumber: true,
          columns: frequencyLikert7,
          rows: [
            {
              value: "personal-purchase",
              text: "By personal purchase",
            },
            {
              value: "google",
              text: "Google",
            },
            {
              value: "library",
              text: "Library",
            },
            {
              value: "websites",
              text: "Websites",
            },
          ],
        },
        {
          title:
            "How important is it for you to receive comprehensive information?",
          type: "matrix",
          name: "comprehensive-information",
          hideNumber: true,
          columns: importanceLikert7,
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
          rows: [
            {
              value: "keep-up-to-date",
              text: "Keep up-to-date",
            },
            {
              value: "general-awareness",
              text: "General awareness",
            },
            {
              value: "preparing-research",
              text: "Preparing research",
            },
          ],
        },
      ],
    },
  ],
};

const postQuestionnaire = {
  title: "Post Questionnaire",
  description:
    "Please answer the following questions after you have read the news article and analysed it with the AI system",
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
      title: "What was the most useful explanation feature for you?",
      type: "radiogroup",
      name: "most-useful-explanation-feature",
      hideNumber: true,
      choices: [
        {
          value: "credibility-assessment",
          text: "Credibility assessment from the AI system",
        },
        {
          value: "information-about-the-source",
          text: "Information about the source",
        },
        { value: "publishing-date", text: "Publishing date" },
      ],
    },
    {
      title:
        "What other information would you like to obtain to better assess the credibility of an article?",
      type: "text",
      name: "other-information",
      hideNumber: true,
    },
    {
      title:
        "What do you value more in terms of information - speed or comprehensiveness?",
      type: "radiogroup",
      name: "value-speed-or-comprehensiveness",
      hideNumber: true,
      choices: [
        {
          value: "speed",
          text: "Speed",
        },
        {
          value: "comprehensiveness",
          text: "Comprehensiveness",
        },
      ],
    },
    {
      title:
        "What criteria do you use to judge whether a news/article is reliable?",
      type: "text",
      name: "criteria-to-judge-reliability",
      hideNumber: true,
    },
    {
      type: "matrix",
      name: "expectations-after-exp",
      titleLocation: "hidden",
      hideNumber: true,
      alternateRows: true,
      columns: agreementLikert7,
      rows: [
        {
          value: "ai-intimidates-after-exp",
          text: "AI intimidates me",
        },
        {
          value: "understand-ai-after-exp",
          text: "I feel unsure of my ability to understand AI",
        },
        {
          value: "ai-for-fake-news-after-exp",
          text: "I think it's a good idea to rely on AI for Fake News Detection",
        },
        {
          value: "system-helpful-after-exp",
          text: "For my everyday consumption of news this system is helpful",
        },
        {
          value: "everyday-work-helpful-after-exp",
          text: "For my everyday work assessing information the system is helpful",
          visibleIf: "{journalist}='Yes'",
        },
        {
          value: "system-has-functionality-for-work-after-exp",
          text: "The System has the functionality I need for my work",
          visibleIf: "{journalist}='Yes'",
        },
      ],
    },
    {
      title: "What functionality would be a good addition?",
      type: "text",
      name: "additional-functionality",
      hideNumber: true,
      visibleIf: "{journalist}='Yes'",
    },
  ],
};

const systemEvaluation = {
  title: "System Evaluation",
  description:
    "Please answer the following questions after you have used the system",
  elements: [
    {
      type: "matrix",
      name: "competence",
      title: "Competence",
      hideNumber: true,
      columns: agreementLikert7,
      rows: [
        {
          text: "This system supports decision making in Fake News detection very well.",
          value: "system-supports-decision-making",
        },
        {
          text: "In general, this system is able to detect Fake News.",
          value: "system-able-to-detect-fake-news",
        },
        {
          text: "The AI system is able to classify the news articles competently",
          value: "system-able-to-classify-news-articles",
        },
        {
          text: "The system can correctly classify the presented news articles",
          value: "system-can-correctly-classify-news-articles",
        },
        {
          text: "The system can efficiently classify the presented news articles",
          value: "system-can-efficiently-classify-news-articles",
        },
      ],
    },
    {
      type: "matrix",
      name: "integrity",
      title: "Benevolence/Integrity",
      hideNumber: true,
      columns: agreementLikert7,
      rows: [
        {
          text: "The AI system decides neutral.",
          value: "system-decides-neutral",
        },
        {
          text: "The AI system decides consistently according to the same criteria.",
          value: "system-decides-consistently",
        },
        {
          text: "The criteria according to which the AI system evaluates are acceptable.",
          value: "system-evaluates-criteria-acceptable",
        },
      ],
    },
    {
      type: "matrix",
      name: "transparency",
      title: "Transparency",
      hideNumber: true,
      columns: agreementLikert7,
      rows: [
        {
          text: "I understand why this system provided the decision it did.",
          value: "understand-why-system-provided-decision",
        },
        {
          text: "I understand what this system bases its provided decision on.",
          value: "understand-what-system-bases-decision-on",
        },
        {
          text: "The classification of the AI is comprehensible for me.",
          value: "classification-comprehensible",
        },
        {
          text: "It is easy to follow what the system does.",
          value: "easy-to-follow-what-system-does",
        },
        // {
        //   text:"What is the degree of explanatory quality?", // TODO: what's the scale
        // }
      ],
    },
    {
      type: "matrix",
      name: "reuse",
      title: "Re-use",
      hideNumber: true,
      columns: agreementLikert7,
      rows: [
        {
          text: "I know what will happen the next time I use the system because I understand how it behaves",
          value: "know-what-will-happen-next-time",
        },
      ],
    },
    {
      type: "matrix",
      name: "overall",
      title: "Overall",
      hideNumber: true,
      columns: agreementLikert7,
      rows: [
        {
          text: "I tend to trust this system , even though I have little or no knowledge of it",
          value: "tend-to-trust-system",
        },
        {
          text: "My tendency to trust this system is high.",
          value: "tendency-to-trust-system-high",
        },
      ],
    },
    {
      type: "matrix",
      name: "explanation-usefulness",
      title: "Explanation Usefulness",
      hideNumber: true,
      columns: agreementLikert7,
      rows: [
        {
          text: "Using the system would increase my effectiveness in detecting Fake News.",
          value: "increase-effectiveness-fake-news-detection",
        },
        {
          text: "I think the system is useful for assessing news articles.",
          value: "useful-assess-news-articles",
        },
        {
          text: "Using the system will help me detect Fake News faster in the future.",
          value: "help-detect-fake-news-faster",
        },
        {
          text: "Overall, I understand how this system assists me with decisions I have to make.",
          value: "assist-decisions",
        },
        {
          text: "Overall, I think the explanations for the news article are useful",
          value: "useful-explanations-news",
        },
        {
          text: "It takes too long to learn how to use the system to make it worth the effort.",
          value: "long-learning-time-not-worth",
        },
      ],
    },
    {
      type: "matrix",
      name: "understandability",
      title: "Understandability",
      hideNumber: true,
      columns: agreementLikert7,
      rows: [
        {
          text: "Overall, the presented explanations are comprehensible and help me with assessing the news articles.",
          value: "comprehensible-explanations-help-assess-news-articles",
        },
        {
          text: "The presented explainability features seem too complicated.",
          value: "complicated-explainability-features",
        },
        {
          text: "The metadata is presented comprehensible and useful for the task.",
          value: "comprehensible-useful-metadata",
        },
      ],
    },
  ],
};

const getPagesForNewsItem = (newsItem: NewsItem) => {
  return [
    {
      title: "Evaluate news article",
      description:
        "Carefully read the news article and evaluate the news article's truthfulness based on your own opinion, when you are done click next",
      elements: [
        {
          type: "newsitem",
          name: `${newsItem.id}-rating-before-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: "none",
          isInput: true,
        },
      ],
    },
    {
      title: "Analyse news article with AI",
      description:
        "Carefully analyse the news article and pay attention to the explanations provided by the AI system, when you are done click next",
      elements: [
        {
          type: "newsitem",
          name: `${newsItem.id}-article-with-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: "basic",
          isInput: false,
        },
      ],
    },
    {
      title: "Evaluate news article with AI",
      description:
        "Evaluate the news article's truthfulness again after seeing the AI system's explanation, when you are done click next",
      elements: [
        {
          type: "newsitem",
          name: `${newsItem.id}-rating-after-xai`,
          hideNumber: true,
          titleLocation: "hidden",
          newsitem: newsItem,
          xaiFeatures: "basic",
          isInput: true,
        },
      ],
    },
    {
      title: "Evaluate the system",
      description:
        "Evaluate the AI system based on the explanations it provided",
      elements: [
        {
          type: "matrix",
          name: `${newsItem.id}-sys-evaluation`,
          title: "Competence",
          hideNumber: true,
          titleLocation: "hidden",
          columns: agreementLikert7,
          rows: [
            {
              text: "The system classified the news items correctly.",
              value: "classified-correctly",
            },
            {
              text: "I understand what the system does.",
              value: "understand-what-system-does",
            },
            {
              text: "The explainability features presented are useful to assess the credibility of the news item.",
              value: "useful-assess-credibility-news-item",
            },
            {
              text: "The indications given by the system are useful to assess the credibility of the news item.",
              value: "useful-assess-credibility-news-item-indications",
            },
            {
              text: "The presented explanations are comprehensible and help me with assessing the news articles.",
              value: "explanations-comprehensible-help-assess-news-articles",
            },
          ],
        },
      ],
    },
  ];
};

export const questionnaire = {
  firstPageIsStarted: true,
  showPageNumbers: true,
  showProgressBar: "top",
  pages: [
    startPage,
    expectations,
    informationLiteracy,
    informationSeekingBehaviour,
    ...data.flatMap((newsItem) => getPagesForNewsItem(newsItem as any)),
    systemEvaluation,
    postQuestionnaire,
    demographics,
  ],
};
