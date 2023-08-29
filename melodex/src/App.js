import './App.css';
import Player from './Player';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import LikedSongs from './pages/Liked.js';
import Playlists from './pages/Playlists.js';
import Discover from './pages/Discover.js';
import Search from './pages/Search.js';
import SignIn from './pages/SignIn.js';


function App() {

  const testSong = {
    "name":"Avalon",
    "artist":"$uicideBoys",
    "img":"https://media.pitchfork.com/photos/611a0dee7818868ad0dc1d3d/master/pass/100000x100000-999.jpeg"
  }

  const Time = {
    "current":"1:25",
    "max":"2:25"
  }

  return (
    <>
      <NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/playlists' element={<Playlists/>}></Route>
          <Route path='/liked' element={<LikedSongs/>}></Route>
          <Route path='/discover' element={<Discover/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </NavBar>
      <Player Song={testSong} Time={Time}/>
      
    </>
  );
}

export default App;
