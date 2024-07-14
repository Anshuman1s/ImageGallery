import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Uploader from "./Components/Uploader.jsx";
import Gallery from "./Components/Gallery.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Uploader />
    <Gallery />
  </React.StrictMode>
);
