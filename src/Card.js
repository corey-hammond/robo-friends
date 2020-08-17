import React, { Fragment } from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green br3 pa3 ma2 grow bw2 shadow-5 dib tc">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
