import NewsItem from "@/model/news-item";
import React from "react";
import { Question, Serializer, ElementFactory } from "survey-core";
import { SurveyElementBase, ReactQuestionFactory } from "survey-react-ui";
import NewsItemComponent from "./NewsItemComponent";

const QUESTION_TYPE = "newsitem";

export const registerMyQuestion = () => {
  ElementFactory.Instance.registerElement(QUESTION_TYPE, (name) => {
    return new NewsItemQuestionModel(name);
  });
};

export class NewsItemQuestionModel extends Question {
  getType() {
    return QUESTION_TYPE;
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class NewsItemQuestion extends SurveyElementBase<
  {
    question: {
      newsitem: NewsItem;
      xaiFeatures: "none" | "basic";
      isInput: boolean;
      value: number;
    };
  },
  {
    value: number;
  }
> {
  constructor(props: any) {
    super(props);

    if (this.question.isInput) {
      this.question.value = 50;
    }
  }

  get value() {
    return this.question.value;
  }

  get question() {
    return this.props.question;
  }

  render() {
    if (!this.question) return null;
    return (
      <NewsItemComponent
        newsItem={this.question.newsitem}
        xaiFeatures={this.question.xaiFeatures}
        isInput={this.question.isInput}
        onRatingChange={(value) => {
          this.question.value = value;
        }}
      />
    );
  }
}

Serializer.addClass(
  QUESTION_TYPE,
  ["newsitem:object", "xaiFeatures:string", "isInput:boolean"],
  () => new NewsItemQuestionModel(""),
  "question"
);

ReactQuestionFactory.Instance.registerQuestion(QUESTION_TYPE, (props) => {
  return React.createElement(NewsItemQuestion, props);
});
