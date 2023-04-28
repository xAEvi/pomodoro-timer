import './App.css';
import Timer from './components/Timer';
import Controls from './components/Controls';
import { BiPlay, BiReset, BiPause } from "react-icons/bi";
import { useState, useEffect } from 'react';

function App() {

  const [session, setSession] = useState(25);
  const [breaks, setBreaks] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(session);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [breakTime, setBreakTime] = useState(false);

  const handleSessionChange = (newValue) => {
    setSession(newValue);
  }

  const handleBreaksChange = (newValue) => {
    setBreaks(newValue);
  }

  const handleLongBreakChange = (newValue) => {
    setLongBreak(newValue);
  }

  const startCountdown = () => {
    setPlaying(true);
  };

  const stopCountdown = () => {
    setPlaying(false);
    setPaused(true);
  }

  const resetCountdown = () => {
    if (window.confirm("Are you sure you want to reset? Pomodoros count will reset as well")){
      setPlaying(false);
      setPaused(false);
      setPomodoroCount(0);
      setBreakTime(false);
      setTimeLeft(session)
    }
  }

  const checkLongBreak = () => {
    return pomodoroCount % 4 === 0
  }

  useEffect(() => {
    let timer;
    // Session timer
    if (playing && !breakTime){
      timer = setInterval(() => {
          setTimeLeft((time) => time - 1);
      }, 1000);
      if (timeLeft === 0) {
        setBreakTime(true)
        setPlaying(false);
        setPomodoroCount(pomodoroCount + 1);
      }
    }
    
    // Break timer
    if (playing && breakTime){
      timer = setInterval(() => {
          setTimeLeft((time) => time - 1);
      }, 1000);
      if (timeLeft === 0) {
        setBreakTime(false)
        setPlaying(false);
      }
    }

    // Pause
    if (paused){

    }

    // Start/Change session time
    if(!paused && !playing){
      setTimeLeft(session * 60)
    }

    // Start/Change break time
    if(!paused && !playing && breakTime && !checkLongBreak()){
      setTimeLeft(breaks * 60)
    }

    // Start/Change long break time
    if(!paused && !playing && breakTime && checkLongBreak()){
      setTimeLeft(longBreak * 60)
    }

    return () => clearInterval(timer);
  }, [playing, timeLeft, session, breaks, longBreak, pomodoroCount, breakTime, paused]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="App">
      <Timer 
        timer={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
      />
      <div className='buttons'>
        <div className='play-pause'>
          <BiPlay 
            onClick={startCountdown}
            className={playing ? 'hidden' : ''}
            size={50}
          />
          <BiPause 
            onClick={stopCountdown}
            className={!playing ? 'hidden' : ''}
            size={50}
          />
        </div>
        <div className='reset'>
          <BiReset 
            onClick={resetCountdown}
            size={50}
          />
        </div>
      </div>
      <Controls 
        session={session}
        breaks={breaks}
        longBreak={longBreak}
        handleSessionChange={handleSessionChange}
        handleBreaksChange={handleBreaksChange}
        handleLongBreakChange={handleLongBreakChange}
      />
    </div>
  );
}

export default App;
