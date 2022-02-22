import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import placeHeader from "remote/placeHeader";
import "./index.scss";

const App = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    placeHeader(headerRef.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div ref={headerRef}></div>
      <div>Name: react-host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
