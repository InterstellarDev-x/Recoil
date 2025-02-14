import { useState } from "react";

import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atmos/counter";

function App() {
 

  return (
    <RecoilRoot>
      <Counter />
      <Increasebtn />
      <Decreasebtn />
    </RecoilRoot>
  );
}

function Counter() {
  const counter = useRecoilValue(counterAtom);
  

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

function Increasebtn() {
  const setCount = useSetRecoilState(counterAtom);

  function increasebtn() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      
      <button onClick={increasebtn}>Increase</button>
    </div>
  );
}



function Decreasebtn() {
  const setCount = useSetRecoilState(counterAtom);
  function decreasebtn() {
    setCount((count) => count - 1);
  }

  return (
    <div>
      {" "}
      <button onClick={decreasebtn}>Decrease</button>
    </div>
  );
}

export default App;
