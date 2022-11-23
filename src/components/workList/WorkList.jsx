import React from "react";
import "./workList.scss";

export default function WorkList({ title, active, setSelected, id }) {
  return (
    <div>
      <li
        className={active ? "portfolioListe activee" : "portfolioListe"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </div>
  );
}
