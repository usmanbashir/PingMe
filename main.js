import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";

let documentReady = () => {
  const appNode = document.getElementById("app");

  if (appNode) {
    ReactDOM.render(
      <div>
        <h1>Ping Me!</h1>
        <p>Be reachable when needed by your loved ones; be they man or machine.</p>
      </div>
    , appNode);
  }
};

jQuery(documentReady);
