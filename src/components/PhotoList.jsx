import React from 'react';
import Photo from './Photo';
import { useParams } from 'react-router-dom';

const PhotoList = ({ photos, title, search, prevQuery, isLoading }) => {
  
  // if component is called b/c of search route, and if the included search query params do not match the query state value
  // then search has not yet been exceuted, so we execute search now
  if(search){
    const { query } = useParams();
    if( query != prevQuery){
      search(query);
    }
  }

  // if isLoading is true (eg awaiting response from httpRequest for search via flickr API)
  if(isLoading === true){
    return(
      <div className="photo-container">
        <h2>{title}</h2>
        <p>Loading...</p>
      </div>
    );
  }

  // if search is the trigger but there are no results
  if(search && photos.length === 0 && isLoading === false){
    return(
      <div className="photo-container">
        <h2>{title}</h2>
        <li class="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
      </div>
    );
  }
      
  //happy path default return when photos exist
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