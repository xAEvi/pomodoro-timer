import './App.css';
import Timer from './components/Timer';
import Controls from './components/Controls';
import { BiPlay, BiReset, BiPause } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <Timer />
      <div className='buttons'>
        <div className='play-pause'>
          <BiPlay id='play' size={50}/>
          <BiPause id='pause' size={50}/>
        </div>
        <div className='reset'>
          <BiReset size={50}/>
        </div>
      </div>
      <Controls />
    </div>
  );
}

export default App;
