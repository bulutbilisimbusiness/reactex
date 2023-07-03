import React from "react";
import CardStyle from "./Card.module.css";
import Button from "../button/Button";
const Card = ({ btn, lang, img }) => {
  return (
    <div>
      <h1 className={CardStyle["title"]}>{lang}</h1>
      <img className={CardStyle["images"]} src={img} alt="images" />

      <Button btn={btn} />
    </div>
  );
};

export default Card;
