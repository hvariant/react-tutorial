import { useEffect, useReducer } from 'react';
import speakersReducer from './speakersReducer';
import axios from 'axios';

function useSpeakerDataManager() {
  const [
    { isLoading, speakerList, favoriteClickCount, hasErrored, error },
    dispatch,
  ] = useReducer(speakersReducer, {
    speakerList: [],
    isLoading: true,
    favoriteClickCount: 0,
    hasErrored: false,
    error: null,
  });

  function incrementFavoriteClickCount() {
    dispatch({ type: 'incrementFavoriteClickCount' });
  }

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async () => {
      axios.put(`http://localhost:4000/speakers/${speakerRec.id}`, {
        ...speakerRec,
        favorite: !speakerRec.favorite,
      });
      speakerRec.favorite
        ? dispatch({ type: 'unfavorite', id: speakerRec.id })
        : dispatch({ type: 'favorite', id: speakerRec.id });
    };
    updateData();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:4000/speakers');
        dispatch({ type: 'setSpeakerList', data: result.data });
      } catch (e) {
        dispatch({ type: 'errored', error: e });
      }
    };
    fetchData();
  }, []); // [speakingSunday, speakingSaturday]);

  return {
    isLoading,
    speakerList,
    toggleSpeakerFavorite,
    favoriteClickCount,
    incrementFavoriteClickCount,
    hasErrored,
    error,
  };
}

export default useSpeakerDataManager;
