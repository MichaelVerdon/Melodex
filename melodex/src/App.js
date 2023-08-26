import './App.css';
import Player from './Player';
import NavBar from './NavBar';

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
      <NavBar/>
      <Player Song={testSong} Time={Time}/>
    </>
  );
}

export default App;
