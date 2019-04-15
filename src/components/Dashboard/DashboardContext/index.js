import React, { useState } from "react";

export const DashboardContext = React.createContext(null);

export default function DashboardProvider(props) {
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    if (!userMenuOpen) {
      setBusinessMenuOpen(false);
    }
  };
  const toggleBusinessMenu = () => {
    setBusinessMenuOpen(!businessMenuOpen);
    if (!businessMenuOpen) {
      setUserMenuOpen(false);
    }
  };
  return (
    <DashboardContext.Provider
      value={{
        businessMenuOpen,
        toggleBusinessMenu,
        userMenuOpen,
        toggleUserMenu
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
}
