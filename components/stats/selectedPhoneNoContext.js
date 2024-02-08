import React, { createContext, useContext, useState } from "react";

const SelectedPhoneNoContext = createContext();

export const useSelectedPhoneNo = () => useContext(SelectedPhoneNoContext);

export const SelectedPhoneNoProvider = ({ children }) => {
  const [selectedPhoneNo, setSelectedPhoneNo] = useState(null);

  return (
    <SelectedPhoneNoContext.Provider value={{ selectedPhoneNo, setSelectedPhoneNo }}>
      {children}
    </SelectedPhoneNoContext.Provider>
  );
};
