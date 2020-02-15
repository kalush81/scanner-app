import React, {useState, useRef, useEffect} from 'react';
import GetScan from './components/GetScann';
import GenerateQr from './components/GenerateQr';
import Modal from 'react-modal';
import './App.css';
import styles from './styles.module.css';


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
      <Modal isOpen={state.scann}>
        <h3>I am a modal at app component</h3>
      </Modal>
      <button className={styles.button} onClick={handleClickGen}>Generate qr code</button>
      <button className={styles.button} onClick={handleClickScan}>Scann qr code</button>
      {state.generate && <GenerateQr ref={parentRef}/>}
      {state.scann && <GetScan />}
      {/* <TestUseState /> */}
    </div>
  );
}

export default App;
