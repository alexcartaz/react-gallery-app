import React from 'react';
import Photo from './Photo';
import { useParams } from 'react-router-dom';

const PhotoList = ({ photos, title, search, prevQuery }) => {

  if(search){
    const { query } = useParams();
    if( query != prevQuery){
      search(query);
    }
  }

  return (
    <div className="photo-container">
      <h2>{title}</h2>
      <ul>
        {photos.map(photo => {
          return(
            <Photo key={photo.id} photo={photo} />
          );
        })}
      </ul>
    </div>
  );
}

export default PhotoList;