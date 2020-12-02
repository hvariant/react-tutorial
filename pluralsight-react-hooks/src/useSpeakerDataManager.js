import { useEffect, useReducer } from 'react';
import SpeakerData from './SpeakerData';
import speakersReducer from './speakersReducer';

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    speakerList: [],
    isLoading: true,
  });

  function toggleSpeakerFavorite(speakerRec) {
    speakerRec.favorite
      ? dispatch({ type: 'unfavorite', id: speakerRec.id })
      : dispatch({ type: 'favorite', id: speakerRec.id });
  }

  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({
        type: 'setSpeakerList',
        data: SpeakerData,
      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []); // [speakingSunday, speakingSaturday]);

  return { isLoading, speakerList, toggleSpeakerFavorite };
}

export default useSpeakerDataManager;
