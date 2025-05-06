import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React, { useState } from 'react';
function TextArea(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    function LowerCase(e) {
        setText(text.toLowerCase());
        props.showAlert("Text has been changed to Lower Case", "success");
    }
    
    function changeState() {
        const upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Text has been changed to Upper Case", "success");
    }

    return (
        <>
            <div className={`form-floating bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                <h1>{props.title}</h1>
                <textarea className="form-control" onChange={handleOnChange} value={text} placeholder="Leave a comment here" id="floatingTextarea" rows="8"></textarea><br />
                <button className="btn btn-primary" onClick={changeState}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={LowerCase}>Convert to LowerCase</button>
                
            </div>
            <div className="contener my-3">
                <h1>Your Text Summary</h1>
                <p>
                    WORDES : {text.split(" ").length} <br />
                    Charactes : {text.length} <br />
                    Time to Read : {0.008 * text.split(" ").length} minutes <br />
                </p>
                <h3>Preview</h3>
                <p>
                    {text} <br />
                </p>
            </div>

        </>
    )
}

export default TextArea;
