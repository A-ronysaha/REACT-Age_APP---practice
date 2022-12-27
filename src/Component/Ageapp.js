import React, { useState, useEffect, Fragment } from "react";
const { v4: uuidv4 } = require("uuid");
import Ageform from "./Ageform";
import Agelist from "./Agelist";

function Ageapp() {
  //const ageArry = [{ id: 1, username: "Mark", age: 20 }];
  const initialAge = JSON.parse(window.localStorage.getItem("Age")) || [];
  const [age, setAge] = useState(initialAge);
  useEffect(() => {
    console.log("USE_EFFECT function RUN");
    window.localStorage.setItem("Age", JSON.stringify(age));
  }, [age]);
  function addAge(newuser, newage) {
    console.log("ADD function RUN");
    setAge([...age, { id: uuidv4(), username: newuser, age: newage }]);
  }
  function deleteResult(todoId) {
    console.log("DELETE function RUN");
    let updtTodo = age.filter((t) => t.id !== todoId);
    setAge(updtTodo);
  }
  return (
    <React.Fragment>
      <section>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand">
              Ageapp Using HOOK(usestate,usecontext)
            </a>
          </div>
        </nav>
        <h2 className="text-center">Fill up User Age</h2>
        <div className="offset-3 card text-center w-50 my5 mt-5">
          <Ageform add={addAge} />
        </div>
        <div className="offset-5 card mt-5" style={{ width: "18rem" }}>
          <Agelist userAge={age} remove={deleteResult} />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Ageapp;
