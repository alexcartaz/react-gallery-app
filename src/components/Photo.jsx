import React from 'react';

let genPhotoUrl = (photo) => {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}

const Photo = ( {photo} ) => {
  return (
    <li>
        <img src={genPhotoUrl(photo)} alt={photo.title} />
    </li>
  );
}

export default Photo;