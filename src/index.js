import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import '../src/styles/index.scss';

{
const container = document.getElementById("root");
    // console.log(container);
const rooter = createRoot(container);
    // console.log(rooter);
rooter.render(<App />);
}
