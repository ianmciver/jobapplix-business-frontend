import React, { useContext } from "react";
import { TabsContainer, Tab, TabTitle } from "./styles";

import { ApplicationsContext } from "../ApplicationsContext";

export default function ApplicationTabs(props) {
  const applicationContext = useContext(ApplicationsContext);
  const clickHandler = id => e => {
    applicationContext.setGroupSelected(id);
  };

  return (
    <TabsContainer>
      {applicationContext.groups.map(tab => (
        <Tab
          key={tab.id}
          selected={applicationContext.selectedGroupId === tab.id}
          onClick={clickHandler(tab.id)}
        >
          <TabTitle selected={applicationContext.selectedGroupId === tab.id}>
            {tab.title}
          </TabTitle>
        </Tab>
      ))}
    </TabsContainer>
  );
}
