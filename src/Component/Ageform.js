import React from "react";
import useInput from "../Hook/useInput";

export default function Ageform(props) {
  const [
    entername,
    enterage,
    changeName,
    changeAge,
    resetName,
    resetAge,
  ] = useInput("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.add(entername, enterage);
          resetName();
          resetAge();
        }}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="username"
            name="username"
            value={entername}
            onChange={changeName}
            required
          />
          <label htmlFor="floatingInput">User Name</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="floatingPassword"
            placeholder="age"
            name="age"
            value={enterage}
            onChange={changeAge}
            required
          />
          <label htmlFor="floatingPassword">Age</label>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-warning btn-lg">Add</button>
        </div>
      </form>
    </div>
  );
}
