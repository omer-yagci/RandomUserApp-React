import React from "react";
import classes from "../scss/card.module.scss";

const Card = ({
  email,
  picture: { large },
  phone,
  registered: { age, date },
  name: { title, first, last },
  location: { city, country },
  newPersonData,
  setNewPersonData,
}) => {
  const clickHandler = () => {
    setNewPersonData(!newPersonData);
  };
  return (
    <div className="main">
      <div className={classes.container}>
        <img src={large} alt={first} />
        <div>
          <h5>
            {title} {first} {last}
          </h5>
        </div>
        <ul className="list-container">
          <li>
            <i className="fa-solid fa-envelope-open-text"></i> {email}
          </li>
          <li>
            <i className="fa-solid fa-phone-volume"></i> {phone}
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i> {city} {country}
          </li>
          <li>
            Age: {age} <br /> Register Date:{date.slice(0, 10)}
          </li>
        </ul>
      </div>
      <button className={classes.btn} onClick={clickHandler}>
        Random User
      </button>
    </div>
  );
};

export default Card;
