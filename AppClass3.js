import React from "react";
import ReactDom from "react-dom/client";

const el=React.createElement("h1",{id:"parent"},"Hello there");

const jsxHeading=(<h1 id="hero" 
        className="hero">
        Hey there from jSX
    </h1>);

const HeadingComponent=()=><h1>Ki re</h1>;
const HeadingComponent2=()=>(<h1>Ki re</h1>);
const HeadingComponent3=()=>{
    return(
        <div>
            {jsxHeading}
            <HeadingComponent/>
            <h1>Ki re</h1>
        </div>
    )
};



const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3></HeadingComponent3>);