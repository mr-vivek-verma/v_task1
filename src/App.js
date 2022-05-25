import React, { useState } from "react";
import Checkbox from "./Components/checkbox/Checkbox";
import Context from "./Components/Context/Context";

const App = () => {
  const [show, setShow] = useState();
  const [_bg, set_bg] = useState("pink");
  const [check, setCheck] = useState(false);

  const [states, updateChanges] = useState({
    List: [],
  });
  function changeState(a) {
    updateChanges({
      List: a,
    });
  }

  const handle = () => {
    setShow(states.List);
    set_bg("green");
    setCheck(true);
  };

  return (
    <Context.Provider value={{ states, changeState }}>
      <Checkbox bg={_bg} lable="1st CheckBox" />
      <Checkbox bg={_bg} lable="2nd Checkbox" />
      <Checkbox bg={_bg} lable="3rd CheckBox" />

      <div
        style={{ backgroundColor: `${check ? "green" : "orange"}` }}
        onClick={() => handle()}
        className="btn"
      >
        {check ? "Done" : "Submit"}
      </div>
      {show?.map((value, i) => (
        <h1 key={i}>{value}</h1>
      ))}
    </Context.Provider>
  );
};

export default App;
