import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.jsx";

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon";
link.href = import.meta.env.BASE_URL + "favicon.ico";
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
