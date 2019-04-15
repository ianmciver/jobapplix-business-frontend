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
  return (
    <ApplicationsGroup>
      <ApplicationsGroupHead>
        <ApplicationRow colOne={"name"} colTwo={"group"} colThree={"details"} />
      </ApplicationsGroupHead>
      {applicationsContext.applications.map((app, index) => {
        const firstName = app.questions.find(q => q.question_id === 1);
        const lastName = app.questions.find(q => q.question_id === 2);
        const groupName = applicationsContext.groups.find(
          g => app.group === g.id
        );
        const bgcolor = index % 2 ? "transparent" : backgroundAppTable;
        return (
          <ApplicationsRowContent bgcolor={bgcolor} key={app.app_id}>
            <ApplicationRow
              colOne={`${lastName.answer_text}, ${firstName.answer_text}`}
              colTwo={() => (
                <GroupsDropdown selected={groupName.title} appId={app.app_id} />
              )}
              colThree={() => {
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

// name: 169 40.8%, group 145.7 35.2%, details 99.36 (24%)
// name, position, group, email, date applied , details
