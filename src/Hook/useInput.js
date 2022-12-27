import { useState } from "react";

export default function useInput(val = "") {
  const [username, setname] = useState(val);
  const [userage, setage] = useState(val);
  function changeName(e) {
    setname(e.target.value);
  }
  function changeAge(e) {
    setage(e.target.value);
  }

  function resetName() {
    setname("");
  }
  function resetAge() {
    setage("");
  }
 
  return [
    username,
    userage,
    changeName,
    changeAge,
    resetName,
    resetAge,
  ];
}
