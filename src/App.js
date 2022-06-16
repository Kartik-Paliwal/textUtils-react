import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';
import { useState } from "react";
import Alert from "./components/Alert";
// import {BrowserRouter as Router ,Routes , Route }  from 'react-router-dom'
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = (cls) => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode ","success")
      document.title='text-utils - Dark Mode'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('light mode',"success")
      document.title='text-utils - Light Mode'
    }
  };
  const showAlert=(message,type) => {
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        },1500)
  }
  return (
    <>
    {/* // <Router> */}
      <Navbar title="textUtils" mode={mode}aboutText="about" toggleMode={toggleMode} color={mode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={}/> */}
          {/* <About/> */}
          {/* <Route exact path="/" element={}/> */}
          <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* </Routes> */}
        {/* <About/> */}
      </div>
    {/* // </Router> */}
    </>
  );
}

export default App;
