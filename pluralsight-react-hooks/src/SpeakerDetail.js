import ImageToggleOnScroll from './ImageToggleOnScroll';
import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

const SpeakerDetail = ({ index, speakerRec, onHeartFavoriteHandler }) => {
  const { id, firstName, lastName, bio, favorite } = speakerRec;
  console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);

  const { incrementFavoriteClickCount } = useContext(GlobalContext);

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/rtf-${id}.jpg`}
        secondaryImg={`/static/speakers/rtf-${id}.jpg`}
        alt={`${firstName} ${lastName}`}
        index={index}
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={id}
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, speakerRec);
              incrementFavoriteClickCount();
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  );
};

export default React.memo(SpeakerDetail);
