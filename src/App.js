import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './Alert';

// import {
//   BrowserRouter as Router,
//   Routes,  // Replaces Switch
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500); // Changed to 1500 for visibility
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}> */}
            {/* </Route> */}
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
       
    </>
  );
}

export default App;
