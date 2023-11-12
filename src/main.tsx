import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import { App } from "./presentations";

TagManager.initialize({
  gtmId: import.meta.env.VITE_GTM_ID,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
