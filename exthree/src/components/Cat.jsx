import React from "react";
import { Name } from "./Name";
const Cat = ({ name, img, color = "grey" }) => {
  /* const { name, img, color } = props; */
  return (
    <div>
      <Name name={name} />

      <img src={img} alt="cat-img" />
      <p>Color:{color}</p>
    </div>
  );
};

export default Cat;
