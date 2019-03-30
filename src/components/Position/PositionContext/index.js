import React, { useState, useContext } from "react";
import axios from "axios";

import { connect } from "react-redux";

import { API_URL } from "../../../constants/urls";
import FirebaseContext from "../../../Firebase/context";

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
  setShiftTimesId: () => {},
  createShiftTimes: () => {},
  createPosition: () => {}
});

function PositionContext(props) {
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [positionName, setPositionName] = useState("");
  const [positionDesc, setPositionDesc] = useState("");
  const [standardQuestions, setStandardQuestions] = useState({});
  const [customQuestions, setCustomQuestions] = useState([]);
  const [work_history, setWorkRefs] = useState(false);
  const [personal_refs, setPersonalRefs] = useState(false);
  const [educational_history, setEduHist] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [shiftTimesId, setShiftTimesId] = useState(1);

  const firebase = useContext(FirebaseContext);
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
          isActive: work_history,
          toggle: () => setWorkRefs(!work_history)
        },
        {
          id: "edu",
          question: "Educational History.",
          isActive: educational_history,
          toggle: () => setEduHist(!educational_history)
        },
        {
          id: "per",
          question: "Please provide three personal references.",
          isActive: personal_refs,
          toggle: () => setPersonalRefs(!personal_refs)
        }
      ]
    }
  };

  const createPosition = async (shift_times, standard_shift_times) => {
    const token = await firebase.doGetCurrentUserIdToken();
    return axios.post(
      `${API_URL}/businesses/position?bid=${props.business.id}`,
      {
        name: positionName,
        description: positionDesc,
        work_history,
        educational_history,
        personal_refs,
        availability,
        shift_times,
        standard_shift_times,
        questions: activeQuestions,
        token
      }
    );
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
    setShiftTimesId,
    createPosition
  };

  return (
    <PositionQuestionContext.Provider value={positionContext}>
      {props.children}
    </PositionQuestionContext.Provider>
  );
}

export default connect(state => ({ business: state.business }))(
  PositionContext
);
