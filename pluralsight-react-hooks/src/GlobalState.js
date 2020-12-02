import React from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={useSpeakerDataManager()}>
      {children}
    </GlobalContext.Provider>
  );
};
