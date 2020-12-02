import { useEffect, useReducer } from 'react';
import SpeakerData from './SpeakerData';
import speakersReducer from './speakersReducer';
import axios from 'axios';

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    speakerList: [],
    isLoading: true,
  });

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
      const result = await axios.get('http://localhost:4000/speakers');
      dispatch({ type: 'setSpeakerList', data: result.data });
    };
    fetchData();
  }, []); // [speakingSunday, speakingSaturday]);

  return { isLoading, speakerList, toggleSpeakerFavorite };
}

export default useSpeakerDataManager;
