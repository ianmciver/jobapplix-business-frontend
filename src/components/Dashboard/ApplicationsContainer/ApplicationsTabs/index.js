import React, { useState } from "react";
import { TabsContainer, Tab, TabTitle } from "./styles";

const groups = [
  { id: 1000, title: "All" },
  { id: 0, title: "New" },
  { id: 1, title: "Hired" },
  { id: 2, title: "High Potential" },
  { id: 3, title: "Pile" },
  { id: 4, title: "In Progress" },
  { id: 5, title: "Not Hired" }
];
export default function ApplicationTabs(props) {
  const [selected, setSelected] = useState(1000);

  const clickHandler = id => e => {
    setSelected(id);
  };

  return (
    <TabsContainer>
      {groups.map(tab => (
        <Tab
          key={tab.id}
          selected={selected === tab.id}
          onClick={clickHandler(tab.id)}
        >
          <TabTitle selected={selected === tab.id}>{tab.title}</TabTitle>
        </Tab>
      ))}
    </TabsContainer>
  );
}
