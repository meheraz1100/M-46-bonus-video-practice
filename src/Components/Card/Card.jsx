import React from "react";

const Card = ({cardData}) => {
    console.log(cardData);
  return (
    <div>
      <div className="。。。">
        <div className="。。。 flex gap-6">
          <figure>
            <img src={cardData.thumbnail} alt="thumbnail" className="rounded-lg" />
          </figure>
          <div className="。。。">
            <h2 className="。。。">{cardData.title}</h2>
            <p> {cardData.owner}</p>
            <div className="。。。"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
