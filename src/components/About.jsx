// Dark Mode and Light Mode Toggle

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{useState} from 'react';

function About(props) {

    const [myStyle,setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
    })

    const [btntext,setBtnText] = useState("Enable Dark Mode");

    function toggelStyle (){
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            }
        )
        setBtnText("Enable Dark Mode")
        }else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode");
        }
    }



    return (
        <div className={`accordion bg-${props.mode} `} id="accordionExample" >
            <h1 className="my-3 mx-3">About Us</h1>
            <div className={`accordion-item mx-3 bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`} >
                <h2 className="accordion-header">
                    <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className={`accordion-item mx-3 bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                <h2 className="accordion-header">
                    <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>

            {/* <button className="btn btn-primary my-3 mx-3" onClick={toggelStyle}>{btntext}</button> */}
        </div>
    )
}

export default About;
