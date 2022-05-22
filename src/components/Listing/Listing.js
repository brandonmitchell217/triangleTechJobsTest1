import React from 'react';
import './Listing.css';

const Listing = ({
  title,
  company,
  location,
  compensation,
  type,
  description,
  time,
}) => {
  // useEffect(() => {
  //   fetch('data.json')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="app__listing">
      <div className="app__listing-header">
        <h2>{title}</h2>
      </div>
      <div className="app__listing-company">
        <span>{company}</span>
        <span>{location}</span>
      </div>
      <div className="app__listing-compensation">
        <span>{compensation}</span>
      </div>
      <div className="app__listing-type">
        <span>{type}</span>
      </div>
      <div className="app__listing-description">
        <p>{description}</p>
      </div>
      <div className="app__listing-time">
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Listing;
