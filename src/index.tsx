import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import { RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
