import React from "react";
import { BsPlusLg, BsFillArchiveFill } from "react-icons/bs";

import { IoIosArrowForward } from "react-icons/io";
import { MdLabel } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <footer className="home-bottom-section">
        <div className="more-feature">
          <p>More Features</p>
          <p>Coming soon!</p>
          <IoIosArrowForward className="arrow-btn" />
        </div>
        <div className="home-archive">
          <BsFillArchiveFill className="feature-icon" />
          <p>Archive</p>
          <span>
            See more&nbsp; <BsPlusLg />
          </span>
        </div>
        <div className="home-labels">
          <MdLabel className="feature-icon" />
          <p>Labels</p>
          <span>
            See more&nbsp; <BsPlusLg />
          </span>
        </div>
      </footer>
    </>
  );
};
