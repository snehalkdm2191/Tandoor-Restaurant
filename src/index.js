import React from "react";
import ReactDOM from "react-dom";
import { MenuProvider } from "./state/MenuProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
