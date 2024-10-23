import React from "react";
import ReactDom from "react-dom"
const root=ReactDom.createRoot(document.getElementById("root"));
const parent=React.createElement("h1",{id:"parent"},
    React.createElement("h3",{id:"child"},"Hi i am child")
);
root.render(parent);