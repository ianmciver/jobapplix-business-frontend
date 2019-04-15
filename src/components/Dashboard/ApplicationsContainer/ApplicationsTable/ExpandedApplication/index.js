import React, { useContext } from "react";
import { GroupTitle } from "./styles";
import { ApplicationsContext } from "../../ApplicationsContext";

import GeneralInformation from "./GeneralInformation";
import QuestionsGroup from "./QuestionsGroup";
import PersonalRefs from "./PersonalRefs";
import EduHistory from "./EduHistory";
import WorkHistory from "./WorkHistory";
import Availability from "./Availability";
import Notes from "./Notes";

export const titles = {
  basic: "General Information",
  custom: "Custom Questions",
  position: "Position Information",
  history: "Employee History",
  general: "Applicant Information",
  skills: "Applicant Skills",
  other: "Other Details"
};

export default function ExpandedApplication(props) {
  const appContext = useContext(ApplicationsContext);
  const app = appContext.selectedApp;
  const questionGroups = appContext.selectedApp &&
    appContext.selectedApp.questions && [...appContext.selectedApp.questions];
  return (
    <>
      {appContext.selectedApp && appContext.selectedApp.app_id ? (
        <>
          {questionGroups.map(g => {
            if (g.groupName === "basic") {
              return (
                <GeneralInformation
                  questionGroup={g}
                  position={appContext.selectedApp.position_name}
                  applied={appContext.selectedApp.created_at}
                  key={g.groupName}
                />
              );
            } else {
              return <QuestionsGroup group={g} key={g.groupName} />;
            }
          })}
          {app.includeAvailability && (
            <Availability
              availability={app.availability[0]}
              shiftTimes={app.shiftTimes}
              positionShiftTimes={app.positionShiftTimes}
            />
          )}
          {app.includePersonalRefs && (
            <PersonalRefs references={app.personal_refs} />
          )}
          {app.includeEducationHistory && (
            <EduHistory history={app.edu_history} />
          )}
          {app.includeWorkHistory && <WorkHistory history={app.work_history} />}
          <Notes />
        </>
      ) : (
        <GroupTitle>Loading</GroupTitle>
      )}
    </>
  );
}
