import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      // document.body.style.caretColor="red";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils-Home-Dark-Mode";
      // setInterval(() => {
      //   document.title="TextUtils-Warning";

      // }, 2000);
      // setInterval(() => {
      //   document.title="TextUtils-Virus Detected";

      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils-Home-Light-Mode";
    }
  }
  const toggleMode1 = () => {
    if (mode !== 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(18 52 19)";
      // document.body.style.caretColor="red";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils-Home-Green-Dark-Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils-Home-Light-Mode";
    }
  }
  const toggleMode2 = () => {
    if (mode !== 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(69 13 13)";
      // document.body.style.caretColor="red";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils-Home-Red-Dark-Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils-Home-Light-Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
          {/* <Route exact path="/About">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm heading="Enter your text to anlyze" showAlert={showAlert} mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
