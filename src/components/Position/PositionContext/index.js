import React, { useState } from "react";

export const PositionQuestionContext = React.createContext({
  activeQuestions: [],
  positionName: "",
  positionDesc: "",
  standardQuestions: [],
  customQuestions: [],
  refsQuestions: {},
  availability: false,
  shiftTimesId: 1,
  addOrRemoveActiveQuestions: () => {},
  setPositionName: () => {},
  setPositionDesc: () => {},
  setStandardQuestions: () => {},
  setCustomQuestions: () => {},
  setActiveQuestions: () => {},
  setRefs: () => {},
  setAvailability: () => {},
  setShiftTimesId: () => {}
});

export default function PositionContext(props) {
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [positionName, setPositionName] = useState("");
  const [positionDesc, setPositionDesc] = useState("");
  const [standardQuestions, setStandardQuestions] = useState({});
  const [customQuestions, setCustomQuestions] = useState([]);
  const [workRefs, setWorkRefs] = useState(false);
  const [personalRefs, setPersonalRefs] = useState(false);
  const [eduHist, setEduHist] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [shiftTimesId, setShiftTimesId] = useState(1);

  const addOrRemoveActiveQuestions = id => {
    if (typeof id === String) {
    }
    let qid = activeQuestions.indexOf(id);
    if (qid > -1) {
      setActiveQuestions([
        ...activeQuestions.slice(0, qid),
        ...activeQuestions.slice(qid + 1)
      ]);
    } else {
      setActiveQuestions([...activeQuestions, id]);
    }
  };

  const refsQuestions = {
    references: {
      title: "Work/EDU. History & Personal References",
      questions: [
        {
          id: "work",
          question: "Previous Work History.",
          isActive: workRefs,
          toggle: () => setWorkRefs(!workRefs)
        },
        {
          id: "edu",
          question: "Educational History.",
          isActive: eduHist,
          toggle: () => setEduHist(!eduHist)
        },
        {
          id: "per",
          question: "Please provide three personal references.",
          isActive: personalRefs,
          toggle: () => setPersonalRefs(!personalRefs)
        }
      ]
    }
  };

  const positionContext = {
    activeQuestions,
    positionName,
    positionDesc,
    setPositionDesc,
    setActiveQuestions,
    setPositionName,
    standardQuestions,
    setStandardQuestions,
    addOrRemoveActiveQuestions,
    refsQuestions,
    customQuestions,
    setCustomQuestions,
    availability,
    setAvailability,
    shiftTimesId,
    setShiftTimesId
  };

  return (
    <PositionQuestionContext.Provider value={positionContext}>
      {props.children}
    </PositionQuestionContext.Provider>
  );
}
