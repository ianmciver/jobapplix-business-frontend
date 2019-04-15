import React from "react";

import { ExtendedAppGroup, GroupTitle } from "../styles";

import { titles } from "../index";
import QuestionAndAnswer from "./QuestionAndAnswer";

export default function QuestionsGroup(props) {
  const title = titles[props.group.groupName];
  return (
    <ExtendedAppGroup>
      <GroupTitle>{title}:</GroupTitle>
      {props.group.questions.map(q => (
        <QuestionAndAnswer question={q} key={q.id} />
      ))}
    </ExtendedAppGroup>
  );
}
