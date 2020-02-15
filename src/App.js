import React, {useState, useRef, useEffect} from 'react';
import GetScan from './components/GetScann';
import GenerateQr from './components/GenerateQr';
import './App.css';
import styles from './styles.module.css';
import TestUseState from './components/testUseState';

function App() {
  const parentRef = useRef();
  useEffect(() => parentRef.current && parentRef.current.focusInput());
  const [state, setstate] = useState({generate: false, scann:false})
  const handleClickGen = () => {
    setstate({generate: true, scann: false});
    //parentRef.current.focusInput();
  }
  const handleClickScan = () => {
    setstate({scann: true, generate: false})
  }
  return (
    <div className="App">
      <button className={styles.button} onClick={handleClickGen}>Generate qr code</button>
      <button className={styles.button} onClick={handleClickScan}>Scann qr code</button>
      {state.generate && <GenerateQr ref={parentRef}/>}
      {state.scann && <GetScan />}
      {/* <TestUseState /> */}
    </div>
  );
}

export default App;
