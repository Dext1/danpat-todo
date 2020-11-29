import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Appi = () => {
  let [circleBackgroundColor, setCircleBackgroundColor] = React.useState(
    "lightblue"
  );

  React.useEffect(() => {
    // testipaskaa, koita toimia
    document.body.style.backgroundColor = getRandomColor();
  });

  const changeCircleBackgroundColor = () => {
    // change the value of circleBackgroundColor
    setCircleBackgroundColor(getRandomColor());
  };

  return (
    <main>
      <div
        style={{ backgroundColor: circleBackgroundColor }}
        className="circle"
      />
      <button onClick={changeCircleBackgroundColor}>Change Color</button>
    </main>
  );
};

const getRandomColor = () => {
  return "#" + Math.random().toString(16).slice(2, 8);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Appi />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
