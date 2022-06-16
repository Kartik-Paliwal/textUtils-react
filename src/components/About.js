import React,{useState} from "react";

export default function About() {
  const [myStyle,setMyStyle]= useState(
  {
    color: "black",
    backgroundColor:"white",
    border:"2px solid black"
    });
    const [btnText,setBtnText]=useState("Enable dark mode");
    const toggleStyle = ()=>{
        if(myStyle.color==="white"){
            setMyStyle({
                color: "black",
                backgroundColor:"white",
                border:"2px solid black"
            })
            setBtnText("Enable dark mode");    
        }
            else{
                setMyStyle({
                    color: "white",
                    backgroundColor:"#212529",
                    border:"2px solid white"
                })
                setBtnText("Enable light mode");    
            }
        }
    
  return (
    <div className="container my-2" style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <b>
                 Accordion Item #1
                </b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This is the first item's accordion body. It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the .accordion-body,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"  
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <b>
                 Accordion Item #2
                </b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This is the second item's accordion body. It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the .accordion-body,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>
                Accordion Item #3
                </b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This is the third item's accordion body. It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the .accordion-body,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
      <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
      </div>
    </div>
  );
}
