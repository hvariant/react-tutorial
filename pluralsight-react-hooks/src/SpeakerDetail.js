import ImageToggleOnScroll from './ImageToggleOnScroll';
import React from 'react';

const SpeakerDetail = ({
  id,
  location,
  firstName,
  lastName,
  favorite,
  bio,
  onHeartFavoriteHandler,
}) => {
  console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/rtf-${id}.jpg`}
        secondaryImg={`/static/speakers/rtf-${id}.jpg`}
        alt={`${firstName} ${lastName}`}
        location={location}
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={id}
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, !favorite);
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
