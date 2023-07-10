import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Col>
      <Card
        onClick={() => setShowImage(!showImage)}
        className="player-card"
        role="button"
      >
        {showImage ? (
          <Card.Img variant="top" src={img} height="350px" />
        ) : (
          <ul>
            {statistics.map((item, i) => (
              <li className="list-unstytled h5 text-start" key={i}>
                🏀{item}
              </li>
            ))}
          </ul>
        )}
        <Card.Footer>
          <Card.Title>{name}</Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PlayerCard;
