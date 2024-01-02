import React from 'react';

// constructs flcikr photo url from flickr API component variables
let genPhotoUrl = (photo) => {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}

// renders one image based on passed in photo object from flickr API
const Photo = ( {photo} ) => {
  return (
    <li>
        <img src={genPhotoUrl(photo)} alt={photo.title} />
    </li>
  );
}

export default Photo;