import React, { useState, useContext } from "react";
import axios from "axios";

import { connect } from "react-redux";

import { updatePosition } from "../../../../actions/businessActions";

import { API_URL } from "../../../../constants/urls";
import { FirebaseContext } from "../../../../Firebase";
import { ShiftTimesContext } from "../ShiftTimesContext";

import { questionGroups } from "../PositionQuestions/data";

export const PositionQuestionContext = React.createContext({
  positionId: -1,
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
  createPosition: () => {},
  loadPosition: () => {}
});

function PositionContext(props) {
  const [positionId, setPositionId] = useState(-1);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [positionName, setPositionName] = useState("");
  const [positionDesc, setPositionDesc] = useState("");
  const [standardQuestions, setStandardQuestions] = useState({});
  const [customQuestions, setCustomQuestions] = useState([]);
  const [work_history, setWorkRefs] = useState(false);
  const [personal_refs, setPersonalRefs] = useState(false);
  const [educational_history, setEduHist] = useState(false);
  const [availability, setAvailability] = useState(false);

  const firebase = useContext(FirebaseContext);
  const shiftTimes = useContext(ShiftTimesContext);
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
  const resetPosition = () => {
    setPositionId(-1);
    setActiveQuestions([]);
    setPositionName("");
    setPositionDesc("");
    setStandardQuestions({});
    setCustomQuestions([]);
    setWorkRefs(false);
    setPersonalRefs(false);
    setEduHist(false);
    setAvailability(false);
    shiftTimes.resetShiftTimes();
  };
  const loadPosition = async position => {
    // This will load an existing position into the context. This will allow us to update a position.
    // Get all current active questions and load them into the activeQuestions state
    const activeQuestions = position.questions.reduce((acc, group) => {
      return [...acc, ...group.questions.map(q => q.id)];
    }, []);
    setActiveQuestions(activeQuestions);

    // The rest does not need to be massaged to fit into the context.
    setPositionName(position.name);
    setPositionDesc(position.description);
    setWorkRefs(position.work_history);
    setPersonalRefs(position.personal_refs);
    setEduHist(position.educational_history);
    setAvailability(position.availability);
    setPositionId(position.id);

    // Get current list of standard questions and set those to the context.
    let standardQuestions = await axios.get(
      `${API_URL}/businesses/standardquestions`
    );
    standardQuestions.data.questions.forEach(question => {
      questionGroups[question.group].questions.push(question);
    });
    setStandardQuestions(questionGroups);
    shiftTimes.loadShiftTimes(position.shift_times);
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

  const createPosition = async () => {
    const token = await firebase.doGetCurrentUserIdToken();
    const newShiftTimes = shiftTimes.createShiftTimes(true);
    return axios.post(
      `${API_URL}/businesses/position?bid=${props.business.id}`,
      {
        name: positionName,
        description: positionDesc,
        work_history,
        educational_history,
        personal_refs,
        availability,
        shift_times: newShiftTimes,
        questions: activeQuestions,
        token
      }
    );
  };

  const updatePosition = async () => {
    const token = await firebase.doGetCurrentUserIdToken();
    const newShiftTimes = shiftTimes.createShiftTimes(false);
    const updatedPosition = {
      name: positionName,
      description: positionDesc,
      work_history,
      educational_history,
      personal_refs,
      availability,
      shift_times: newShiftTimes,
      questions: activeQuestions,
      token
    };
    return props.updatePosition(positionId, updatedPosition);
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
    createPosition,
    loadPosition,
    updatePosition,
    resetPosition
  };

  return (
    <PositionQuestionContext.Provider value={positionContext}>
      {props.children}
    </PositionQuestionContext.Provider>
  );
}

export default connect(
  state => ({ business: state.business }),
  { updatePosition }
)(PositionContext);
