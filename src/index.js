import { StrictMode } from "react";
import  ReactDOM  from "react-dom";
import  App  from "./App";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

ReactDOM.render(<App/>, document.querySelector("root"));