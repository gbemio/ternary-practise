import React from "react";
import "./App.css";

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  // const isGoingOut = true;

  // uusing ternary
  // let answer = isGoingOut ? "Yes" : "No";

  // let answer; // Use ternary here
  // if (isGoingOut === true) {
  //   answer = "Yes";
  // } else {
  //   answer = "No";
  // }

  function changeMind() {
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div onClick={changeMind} className="state--value">
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
