import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, count, selected}) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected}/>
      {count && count > 0 && (
        <div className='fav-badge__count'>
          <span>{count}</span>
        </div>
      )}
    </div>
  );
};

export default FavBadge;