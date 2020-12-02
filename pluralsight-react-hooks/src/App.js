import React from 'react';
import { GlobalProvider } from './GlobalState';
import Home from './Home';
import Speakers from './Speakers';

export const ConfigContext = React.createContext();

const ConfigValue = {
  showSpeakerSpeakingDays: true,
  showSignMeUp: true,
};

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={ConfigValue}>
      <GlobalProvider>
        <div>{pageToShow(pageName)}</div>
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default App;
