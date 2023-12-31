import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config.js'
import { Route, Routes } from 'react-router-dom'

//App Components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'

//fetch data
const fetchData = (query) => {
  return fetch(query)
    .then(res => {
      return res.json().then((data) => {
        //console.log(data.photos.photo[0])
        return data.photos.photo;
      }).catch(err => {
        console.log("error fetching and parsing data", err)
      });
    });
}

//supporting code (move to separate file later)
const flickrQuery = (searchTerm) => {
  return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
}

function App() {
  const [photos, setPhotos] = useState([]);
  const [catPhotos, setCatPhotos] = useState([]);
  const [dogPhotos, setDogPhotos] = useState([]);
  const [computerPhotos, setCompPhotos] = useState([]);

  useEffect(() => {
    //init all app data
    fetchData(flickrQuery('cats')).then( result => {setCatPhotos(result);} );
    fetchData(flickrQuery('dogs')).then( result => {setDogPhotos(result);} );
    fetchData(flickrQuery('computers')).then( result => {setCompPhotos(result);} );
  }, []);

  return (
    <div className="container">
      <Nav />
      <Search />
      <Routes>
        <Route path="/" element={<PhotoList photos={photos} title="home" />}/>
        <Route path="/cats" element={<PhotoList photos={catPhotos} title="cats" />} />
        <Route path="/dogs" element={<PhotoList photos={dogPhotos} title="dogs" />} />
        <Route path="/computers" element={<PhotoList photos={computerPhotos} title="computers" />} />
        <Route path="/search/:query" element={<PhotoList photos='tbd' title="search" />} />
      </Routes>
    </div> 
  )
}

export default App
