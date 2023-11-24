import React from "react";
// import { Leftbox } from "./Components/Leftbox";
// import { Rightbox } from "./Components/Rightbox";
import { useState } from "react";

const App = () => {
  const [leftBoxItems, setLeftBoxItems] = useState([
    "orange",
    "apple",
    "banana",
    "pear",
    "grapes",
  ]);

  const [rightBoxItems, setRightBoxItems] = useState([
    "dog",
    "cat",
    "ant",
    "goat",
    "chicken",
  ]);
  let LeftTransportableItems = [];
  let RightTransportableItems = [];
  return (
    <div className="container">
      <div className="box">
        {leftBoxItems.map((item) => {
          return (
            <div>
              <input
                onChange={(e) => {
                  if (e.target.checked) {
                    LeftTransportableItems.push(item);
                  } else if (!e.target.checked) {
                    LeftTransportableItems.pop(item);
                  }
                  console.log(LeftTransportableItems);
                }}
                type="checkbox"
                id="scales"
                name={item}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setRightBoxItems(rightBoxItems.concat(LeftTransportableItems));
            setLeftBoxItems(
              leftBoxItems.filter(
                (item) => !LeftTransportableItems.includes(item)
              )
            );
            LeftTransportableItems = [];
          }}
        >
          Right
        </button>
        <button
          onClick={() => {
            setLeftBoxItems(leftBoxItems.concat(RightTransportableItems));
            setRightBoxItems(
              rightBoxItems.filter(
                (item) => !RightTransportableItems.includes(item)
              )
            );
            RightTransportableItems = [];
          }}
        >
          Left
        </button>
      </div>
      <div className="box">
        {rightBoxItems.map((item) => {
          return (
            <div>
              <input
                onChange={(e) => {
                  if (e.target.checked) {
                    if (e.target.checked) {
                      RightTransportableItems.push(item);
                    } else if (!e.target.checked) {
                      RightTransportableItems.pop(item);
                    }
                    console.log(RightTransportableItems);
                  }
                }}
                type="checkbox"
                id="scales"
                name={item}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
