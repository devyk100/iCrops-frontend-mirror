// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { backendUrl } from "./axios_defaults.ts";
("./axios_defaults.ts");
console.log(backendUrl);
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
