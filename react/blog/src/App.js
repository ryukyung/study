/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
  let post = "나는야 가오리";
  let [title, changeTitle] = useState(["깡패 가오리", "그냥 가오리", "바보 가오리"]);
  let [goodPoint, changeGood] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>gaori</h4>
      </div>
      <button
        onClick={() => {
          let copyTitle = [...title];
          copyTitle[0] = post;
          changeTitle(copyTitle);
        }}
      >
        Edit
      </button>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              changeGood(goodPoint + 1);
            }}
          >
            👍
          </span>
          {goodPoint}
        </h4>
        <p>2022.12.28 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2022.12.28 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2022.12.28 발행</p>
      </div>
      <Modal />
    </div>
  );
}
function Modal() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>desc</p>
    </div>
  );
}

export default App;
