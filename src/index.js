```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css"; // Double-check this path if your style.css is placed inside src/[span_0](start_span)[span_0](end_span)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
