import React from 'react';
import ReactDOM from "react-dom/client";

const body = React.createElement("h1",{className: "body"},"Lets Go !!");        
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(body);