import React, { useState, useRef, useEffect } from "react";
import GetScan from "./components/GetScann";
import GenerateQr from "./components/GenerateQr";
import CheckWhatInDB from './components/CheckWhatInDB';
import GetAllPosts from './components/GetAllPosts';
import Nav from "./components/Nav";
import "./App.css";
import styles from "./styles.module.css";
import { Route } from "react-router-dom";

function App() {
  const parentRef = useRef();
  useEffect(() => parentRef.current && parentRef.current.focusInput());
  const [state, setstate] = useState({ generate: false, scann: false });
  const handleClickGen = () => {
    setstate({ generate: true, scann: false });
    //parentRef.current.focusInput();
  };
  const handleClickScan = () => {
    setstate({ scann: true, generate: false });
  };
  return (
    <div className="App">
      <Nav>
      <div className={styles.Navi}>
        <button className={styles.button} onClick={handleClickGen}>
          Generate qr code
        </button>
        <button className={styles.button} onClick={handleClickScan}>
          Scann qr code
        </button>
      </div>
      </Nav>
      {state.generate && <GenerateQr ref={parentRef} />}
      {state.scann && <GetScan />}
      <Route exact path="/" component={CheckWhatInDB} />
      <Route exact path="/all-posts" component={GetAllPosts} />
    </div>
  );
}

export default App;
