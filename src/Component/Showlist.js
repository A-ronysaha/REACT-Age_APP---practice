import React from "react";

export default function Showlist(props) {
  return (
    <div>
      <li className="list-group-item">
        {props.user}
        {""}({props.userage} year)
        <i className="fas fa-solid fa-trash"  onClick={() => {
            props.removeResult(props.id);
          }} />
        <i
          className="fas fa-solid fa-edit"
         
        />
      </li>
    </div>
  );
}
