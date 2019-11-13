import React, { useContext } from "react";

import { ApplicationsContext } from "../ApplicationsContext";
import ApplicationRow from "./ApplicationRow";
import GroupsDropdown from "./ApplicationRow/GroupsDropdown";
import ExpandedApplication from "./ExpandedApplication";

import { backgroundAppTable } from "../../../../constants/colors";

import {
  ApplicationsGroup,
  ApplicationsGroupHead,
  ApplicationsRowContent,
  ExpandAppIcon
} from "./styles";

export default function ApplicationsTable() {
  const applicationsContext = useContext(ApplicationsContext);
  const applications =
    applicationsContext.selectedGroupId === 7
      ? applicationsContext.archivedApplications
      : applicationsContext.applications;
  return (
    <ApplicationsGroup>
      <ApplicationsGroupHead>
        <ApplicationRow
          colOne={"name"}
          colTwo={"position"}
          colThree={"group"}
          colFour={"details"}
        />
      </ApplicationsGroupHead>
      {applications.map((app, index) => {
        const firstName = app.questions.find(q => q.question_id === 1);
        const lastName = app.questions.find(q => q.question_id === 2);
        const groupName = applicationsContext.groups.find(
          g => app.group === g.id
        );
        const bgcolor = index % 2 ? "transparent" : backgroundAppTable;
        return (
          <ApplicationsRowContent bgcolor={bgcolor} key={app.app_id}>
            <ApplicationRow
              colOne={`${lastName ? lastName.answer_text : ""}, ${
                firstName ? firstName.answer_text : ""
              }`}
              colTwo={app.position_name}
              colThree={() => (
                <GroupsDropdown selected={groupName.title} appId={app.app_id} />
              )}
              colFour={() => {
                return (
                  <ExpandAppIcon
                    viewBox="0 0 24 24"
                    onClick={() => {
                      applicationsContext.selectAppById(app.app_id);
                    }}
                    selected={app.app_id === applicationsContext.selectedAppId}
                  >
                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                  </ExpandAppIcon>
                );
              }}
            />
            {applicationsContext.selectedAppId === app.app_id ? (
              <ExpandedApplication />
            ) : null}
          </ApplicationsRowContent>
        );
      })}
    </ApplicationsGroup>
  );
}
