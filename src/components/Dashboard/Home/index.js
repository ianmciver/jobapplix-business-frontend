import React from "react";
import { connect } from "react-redux";

import {
  HomeContainer,
  GreetingContainer,
  Welcome,
  Greeting,
  OverviewContainer,
  Overview,
  PositionContainer,
  PositionNameContainer,
  StatsContainer,
  StatContainer,
  StatNumber,
  StatTitle,
  ActionButton
} from "./styles";
import { dashboard, applications } from "../../../constants/routes";

function Home(props) {
  const newApplicationCount = props.business.applications.filter(
    app => app.group === 0
  ).length;

  const positionApplicationsGroups = props.business.positions.reduce(
    (acc, pos) => {
      const hires = props.business.applications.filter(
        app => app.position_id === pos.id && app.group === 1
      ).length;
      const newApps = props.business.applications.filter(
        app => app.position_id === pos.id && app.group === 0
      ).length;
      const totalApps = props.business.applications.filter(
        app => app.position_id === pos.id
      ).length;
      return [
        ...acc,
        {
          id: pos.id,
          name: pos.name,
          active: pos.active,
          newApps,
          totalApps,
          hires
        }
      ];
    },
    []
  );

  return (
    <HomeContainer>
      <GreetingContainer>
        <Welcome>Welcome Back!</Welcome>
        <Greeting>
          You have received {newApplicationCount} new applications since your
          last visit.
        </Greeting>
      </GreetingContainer>
      <OverviewContainer>
        <Overview>
          <p>OVERVIEW</p>
        </Overview>
        {positionApplicationsGroups.map(pos => {
          return (
            <PositionContainer key={pos.id}>
              <PositionNameContainer>
                <h3>{pos.name}</h3>
                <h3>|</h3>
                <p>Status: {pos.active ? "Active" : "Not-Active"}</p>
              </PositionNameContainer>
              <StatsContainer>
                <StatContainer>
                  <StatNumber>{pos.totalApps}</StatNumber>
                  <StatTitle>Total Apps</StatTitle>
                </StatContainer>
                <StatContainer>
                  <StatNumber>{pos.newApps}</StatNumber>
                  <StatTitle>New Apps</StatTitle>
                </StatContainer>
                <StatContainer>
                  <StatNumber>{pos.hires}</StatNumber>
                  <StatTitle>Hired</StatTitle>
                </StatContainer>
              </StatsContainer>
            </PositionContainer>
          );
        })}
      </OverviewContainer>
      <ActionButton
        onClick={e => props.history.push(`${dashboard}${applications}`)}
      >
        View all applications
      </ActionButton>
    </HomeContainer>
  );
}

export default connect(state => ({
  business: state.business,
  user: state.businessUser
}))(Home);
