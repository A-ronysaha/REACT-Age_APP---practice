import React from "react";
import Showlist from "./Showlist";

export default function Agelist(props) {
  return (
    <div>
      <ul className="list-group list-group-flush mt-10">
        {props.userAge.map((t) => (
          <Showlist id={t.id} key={t.id} user={t.username} userage={t.age} removeResult={props.remove} />
        ))}
      </ul>
    </div>
  );
}
