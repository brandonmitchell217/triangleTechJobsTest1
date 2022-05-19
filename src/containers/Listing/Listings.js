import React from 'react';
import Listing from '../../components/Listing/Listing';
import './Listings.css';

const Listings = () => {
  return (
    <div className="container">
      <Listing
        title="Software Engineer"
        company="The Company"
        location="Raleigh, NC 27611"
        compensation="Est. $65K - $75K/year"
        type="Full-time"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        time="Posted recently"
      />
      <Listing
        title="Full Stack Developer"
        company="The Other Company"
        location="Durham, NC 27517"
        compensation="Est. $60K - $70K/year"
        type="Full-time"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet. Lorem donec massa sapien faucibus et."
        time="Posted a day ago"
      />
      <Listing
        title="Backend Developer"
        company="Some Other Company"
        location="Cary, NC 27511"
        compensation="Est. $80K - $90K/year"
        type="Full-time"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus. Aliquet eget sit amet tellus cras adipiscing enim eu."
        time="Posted a day ago"
      />
    </div>
  );
};

export default Listings;
