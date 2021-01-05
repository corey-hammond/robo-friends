import React, { Fragment } from "react";
import Card from "../Components/Card";

const CardList = ({ robots }) => {
  const robotsArray = robots.map((robot, i) => {
    return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />;
  });
  return <div>{robotsArray}</div>;
};

export default CardList;
