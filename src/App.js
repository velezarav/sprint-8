import './App.css';
import NavBar from './components/NavBar';
import SpaceFiles from './components/SpaceFiles';
import SpaceList from './components/SpaceList';

function App() {
  return (
    <div className="Home">
      <NavBar />
      <SpaceList />
      {/* <SpaceFiles /> */}
    </div>
  );
}

export default App;
