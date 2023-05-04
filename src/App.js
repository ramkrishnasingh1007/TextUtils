import { useState } from 'react';
import  './App.css';
//import About from './components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');

//const [alert, setAlert] = useState(null);
//const showAlert = (message, type)=>{
  //    setAlert({
    //    msg: message,
      //  type: type
     // })
    
     // setTimeout(() =>{
      //setAlert(null);
      //}, 1500);
  //  }    

  
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
     // showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - DarkMode'; //to change title at the top favicon dynamically
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Dark mode disabled", "success");
      document.title = 'TextUtils - LightMode';

    }
  }
  return (
    <>
    {/*<Navbar/>*/}
     {/*<TextForm showAlert={setAlert} heading="Enter text below to analyze:" mode={mode}/>*/}
  
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/*<Alert alert={alert}/>*/}
 <div className="container my-3">
<TextForm heading="Enter text below to analyze:" mode={mode}/>
  {/*<About/>*/}
          
 
</div>
 </>
  );
}
export default App;