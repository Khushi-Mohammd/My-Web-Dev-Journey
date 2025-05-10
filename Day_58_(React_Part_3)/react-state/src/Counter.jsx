import { useState } from "react";

function init() {
  console.log("init was executed");
  return Math.random();
}

export default function Counter() {
  const [count, setCount] = useState(init);
  // console.log(`count outside =`, count);
  console.log("component was rendered");

  function incCount() {
    setCount((currCount) => {
      return currCount + 1;
    });

    // setCount((currCount) => {
    //   return currCount + 1;
    // });

    // console.log(`count inside =`, count);

    // setCount(25);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
