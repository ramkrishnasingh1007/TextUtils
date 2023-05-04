import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
       //props.showAlert("Conveted to UpperCase", "success");
    }
    const handleLoClick = ()=> {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=> {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState(''); 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
           <h1>{props.heading}</h1>
          <div className="mb-3">
              <label htmlFor="myBox" className="form-label"></label>
              <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
       {/* <button className="btn btn-primary mx-2" onClick={handleAlternate}>AlTeRnAtE Text</button>*/}


          </div>
    <div className="container" my-3 style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary:</h1>
     <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
        <p>{0.008 *(text.split(" ").length - 1)} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Type above to preview:"} </p>

    </div>
    </>
  )
}