import React, { useState, useEffect, createContext, useContext } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { API_URL } from "../../../../constants/urls";
import {
  updateApplicationGroup,
  getApplications
} from "../../../../actions/businessActions";
import FirebaseContext from "../../../../Firebase/context";

export const ApplicationsContext = createContext({
  selectedGroupId: 1000,
  groups: [],
  applications: [],
  archivedApplications: [],
  changeApplicationGroup: () => {}
});

const initialAvailability = {
  fri_first: false,
  fri_second: false,
  fri_third: false,
  mon_first: false,
  mon_second: false,
  mon_third: false,
  sat_first: false,
  sat_second: false,
  sat_third: false,
  sun_first: false,
  sun_second: false,
  sun_third: false,
  thurs_first: false,
  thurs_second: false,
  thurs_third: false,
  tues_first: false,
  tues_second: false,
  tues_third: false,
  wed_first: false,
  wed_second: false,
  wed_third: false
};

function ApplicationsProvider(props) {
  const firebase = useContext(FirebaseContext);
  const [selectedGroupId, setSelectedGroupId] = useState(1000);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [applications, setApplications] = useState([]);
  const [archivedApplications, setArchivedApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState({});
  const [selectedAppId, setSelectedAppId] = useState(-1);
  const [applicationCache, setApplicationCache] = useState({});
  const [availabilityFilter, setAvailabilityFilter] = useState(
    initialAvailability
  );
  const [availabilityFilterOpen, setAvailabilityFilterOpen] = useState(false);
  const groups = [
    { id: 1000, title: "All" },
    { id: 1, title: "New" },
    { id: 2, title: "Hired" },
    { id: 3, title: "In Progress" },
    { id: 5, title: "Pile" },
    { id: 4, title: "High Potential" },
    { id: 6, title: "Not Hired" },
    { id: 7, title: "Archived" }
  ];

  const getArchivedApplications = async () => {
    let token = await firebase.doGetCurrentUserIdToken();
    axios
      .get(
        `${API_URL}/applications/archivedapps?bid=${props.businessId}&token=${token}`
      )
      .then(res => {
        setArchivedApplications(res.data.applications);
      })
      .catch(err => console.log(err));
  };

  const changeApplicationGroup = async (id, groupId) => {
    let app = applications.find(app => app.app_id === id);

    // Handle the change if an archived application is being un-archived
    if (!app && groupId !== 7) {
      let newArchivedApps = archivedApplications.filter(
        app => app.app_id !== id
      );
      props.updateApplicationGroup(id, groupId, () => {
        props.getApplications(() => {
          setArchivedApplications(newArchivedApps);
        });
      });
    }

    // Handle the change if an un-archived application is being archived
    if (groupId === 7) {
      let newApplications = applications.filter(app => app.app_id !== id);
      props.updateApplicationGroup(id, groupId, () => {
        props.getApplications(() => {
          setApplications(newApplications);
        });
      });
    }

    // Handle the change if an un-archived application is remaining un-archived, but changing groups.
    if (app && groupId !== 7) {
      props.updateApplicationGroup(id, groupId);
    }
  };

  const setGroupSelected = id => {
    if (id === 7) {
      getArchivedApplications();
    } else {
      let appsByGroup =
        id === 1000
          ? props.applications
          : props.applications.filter(app => app.group === id);
      let apps =
        selectedPositions.length === 0
          ? appsByGroup
          : appsByGroup.filter(app => {
              return selectedPositions.indexOf(app.position_id) >= 0;
            });
      let availabilityFilterApps = Object.values(availabilityFilter).reduce(
        (a, b) => a | b
      )
        ? apps.filter(app => {
            let match = true;
            for (let key in availabilityFilter) {
              if (availabilityFilter[key]) {
                if (!app.availability || !app.availability[key]) {
                  match = false;
                }
              }
            }
            return match;
          })
        : apps;
      setApplications(availabilityFilterApps);
    }
    setSelectedGroupId(id);
  };

  const formatApplication = application => {
    let position = props.positions.find(
      pos => pos.id === application.position_id
    );
    position.questions = position.questions.map(qGroup => {
      let newQuestions = qGroup.questions.map(q => {
        let answer = application.questions.find(ans => {
          return ans.question_id === q.id;
        });
        return { ...q, ...answer };
      });
      return { ...qGroup, questions: newQuestions };
    });
    const formattedApp = {
      ...application,
      questions: position.questions,
      positionShiftTimes: position.shift_times,
      includeAvailability: position.availability,
      includeWorkHistory: position.workHistory,
      includePersonalRefs: position.personalRefs,
      includeEducationHistory: position.educationHistory
    };
    const newCache = {
      ...applicationCache,
      [application.app_id]: formattedApp
    };
    setApplicationCache(newCache);
    return formattedApp;
  };

  const selectAppById = async id => {
    try {
      setSelectedAppId(id);
      let token = await firebase.doGetCurrentUserIdToken();

      let cachedApp = applicationCache[id];
      if (id === selectedAppId) {
        setSelectedAppId(-1);
      } else if (cachedApp !== undefined) {
        setSelectedApp(cachedApp);
      } else {
        setSelectedApp({});
        let response = await axios.get(
          `${API_URL}/applications?token=${token}&bid=${props.businessId}&appid=${id}`
        );
        const app = formatApplication(response.data.application);
        setSelectedApp(app);
      }
    } catch (err) {
      console.log(err);
      setSelectedAppId(-1);
    }
  };

  const selectPosition = posId => {
    let selectedIndex = selectedPositions.indexOf(posId);
    if (selectedIndex < 0) {
      setSelectedPositions([...selectedPositions, posId]);
    } else {
      let newSelectedPositions = [
        ...selectedPositions.slice(0, selectedIndex),
        ...selectedPositions.slice(selectedIndex + 1)
      ];
      setSelectedPositions(newSelectedPositions);
    }
  };

  const addNote = async noteText => {
    const token = await firebase.doGetCurrentUserIdToken();
    let newComment = await axios.post(
      `${API_URL}/applications/comment?bid=${props.businessId}`,
      {
        comment: noteText,
        appid: selectedAppId,
        token
      }
    );
    // update applicationCache
    let cachedApplication = { ...applicationCache[selectedAppId] };
    let cachedAppNotesArray = [
      ...cachedApplication.comments,
      newComment.data.comment
    ];
    setApplicationCache({
      ...applicationCache,
      [selectedAppId]: { ...cachedApplication, comments: cachedAppNotesArray }
    });
    // update selectedApplication
    let application = { ...selectedApp };
    let notesArray = [...application.comments, newComment.data.comment];
    setSelectedApp({ ...application, comments: notesArray });
  };

  const toggleAvailability = shift => {
    let newAvailFilter = { ...availabilityFilter };
    newAvailFilter[shift] = !newAvailFilter[shift];
    setAvailabilityFilter(newAvailFilter);
  };

  const resetAvailability = () => {
    setAvailabilityFilter(initialAvailability);
  };

  useEffect(() => {
    setGroupSelected(selectedGroupId);
  }, [props.applications, selectedPositions, availabilityFilter]);

  return (
    <ApplicationsContext.Provider
      value={{
        selectedGroupId,
        setGroupSelected,
        groups,
        applications,
        changeApplicationGroup,
        selectAppById,
        selectedAppId,
        selectedApp,
        addNote,
        positions: props.positions,
        selectedPositions,
        selectPosition,
        toggleAvailability,
        availabilityFilter,
        availabilityFilterOpen,
        setAvailabilityFilterOpen,
        resetAvailability,
        archivedApplications
      }}
    >
      {props.children}
    </ApplicationsContext.Provider>
  );
}

export default connect(
  state => ({
    applications: state.business.applications,
    businessId: state.business.id,
    positions: state.business.positions
  }),
  { updateApplicationGroup, getApplications }
)(ApplicationsProvider);
