import React from "react";
import netherlandsImage from "../img/netherlands.jpg";

export const Content = () => {
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.1rem",
    textAlign: "justify",
  };
  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "20px",
    cursor: "pointer",
    marginBottom: "5rem",
  };
  return (
    <main>
      {/** Inline Css ,çift süslü kullanılır */}
      <h2 style={{ color: "white", backgroundColor: "red" }}>REACT JS</h2>
      <p style={parStyle}>React JS Strating</p>
      <div className="image-container">
        <img
          src="https://cdn.pixabay.com/photo/2015/02/18/20/20/poppy-641423_640.jpg"
          style={imgStyle}
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2020/03/26/19/37/poppies-4971583_640.jpg"
          style={imgStyle}
          alt=""
        />
        <img style={imgStyle} src={netherlandsImage} alt="netherlans" />
        <img style={imgStyle} src="assets/rocks.jpg" alt="rocks" />
      </div>
      <p style={parStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora esse
        dolorem rem deserunt dicta omnis eos. Quis nulla quasi dolor!
      </p>
      <h4 style={parStyle}>Bu bir h4 dür</h4>
      <h3 className="content-h3">bu bir h3 elementtir</h3>
    </main>
  );
};
