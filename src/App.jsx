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

//supporting code (move to separate file later

//fetch data
const fetchData = (query) => {
  console.log(query)
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

const flickrQuery = (searchTerm) => {
  return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPhotos, setSearchPhotos] = useState([]);
  const [catPhotos, setCatPhotos] = useState([]);
  const [dogPhotos, setDogPhotos] = useState([]);
  const [computerPhotos, setCompPhotos] = useState([]);

  //init all app data
  useEffect(() => {
    fetchData(flickrQuery('cat')).then( result => {setCatPhotos(result);} );
    fetchData(flickrQuery('dog')).then( result => {setDogPhotos(result);} );
    fetchData(flickrQuery('computer')).then( result => {setCompPhotos(result);} );
  }, []);

  const getSearchResults = (query) => {
    setSearchQuery(query);
    fetchData(flickrQuery(query))
      .then(result => { setSearchPhotos(result); });
  }

  return (
    <div className="container">
      <Nav />
      <Search fetchData={fetchData} updateState={setSearchPhotos} flickrQuery={flickrQuery} />
      <Routes>
        <Route path="/" element={<PhotoList photos={[]} title="home" />}/>
        <Route path="/cats" element={<PhotoList photos={catPhotos} title="cats" />} />
        <Route path="/dogs" element={<PhotoList photos={dogPhotos} title="dogs" />} />
        <Route path="/computers" element={<PhotoList photos={computerPhotos} title="computers" />} />
        <Route path="/search/:query" element={<PhotoList photos={searchPhotos} title="search" search={getSearchResults} prevQuery={searchQuery} />} />
      </Routes>
    </div> 
  )
}

export default App
