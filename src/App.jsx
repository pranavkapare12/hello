import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Nav from './components/nav'
import TextArea from './components/TextArea'
import About from './components/About'
import Alert from './components/alert'
import './App.css'
import React,{useState} from 'react'
import { BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';


function App() {
const [mode,setMode] = useState("light");
const [alert,setAlert] = useState();

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500)
}

const toggleMode = () =>{
  if(mode === "light")
  {
    setMode("dark");
    document.getElementById('root').style.backgroundColor='#242424';
    showAlert("Dark mode has been enabled","success");
  }else{
    setMode("light")
    document.getElementById('root').style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
}


  return (
    <>
      <Router>
      <Nav title="Home"  title1="Contact"   mode={mode} toggleMode={toggleMode}/>
      <div className={`container bg-${mode} text-${mode === 'light' ? 'black' : 'light'} h-auto` }>


        <Routes>
          <Route path="/"exect element={<TextArea title="Enter the thext to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}/>
          <Route path="/about" exect element={<About mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/contact" exect element={<h1>Wellcome to Contact Page</h1>}></Route> 
        </Routes>





      {/* <Alert alert={alert}/> */}
      {/*  */}
      {/* <About mode={mode} toggleMode={toggleMode}/> */}


      
      </div>
      </Router>
    </>
  )
}

export default App
