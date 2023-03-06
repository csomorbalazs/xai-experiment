import { agreementLikert7 } from "@/helper/likert-scales";

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
      alternateRows: true,
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
      alternateRows: true,
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
      alternateRows: true,
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
      alternateRows: true,
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
      alternateRows: true,
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
      alternateRows: true,
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
      alternateRows: true,
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

export default systemEvaluation;
