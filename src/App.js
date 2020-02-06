import React, {useState} from 'react';
import GetScan from './components/GetScann';
import GenerateQr from './components/GenerateQr';
import './App.css';
import styles from './styles.module.css'

function App() {
  const [state, setstate] = useState({generate: false, scann:false})
  const handleClickGen = () => {
    setstate({generate: true, scann: false})
  }
  const handleClickScan = () => {
    setstate({scann: true, generate: false})
  }
  return (
    <div className="App">
      <button className={styles.button} onClick={handleClickGen}>Generate qr code</button>
      <button className={styles.button} onClick={handleClickScan}>Scann qr code</button>
      {state.generate && <GenerateQr />}
      {state.scann && <GetScan />}
    </div>
  );
}

export default App;
