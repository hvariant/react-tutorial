import React, { createContext } from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const provider = useSpeakerDataManager();
  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
