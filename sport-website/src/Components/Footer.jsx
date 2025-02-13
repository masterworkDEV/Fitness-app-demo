import React from "react";
import image from "../assets/images/hero-image.png";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
const Footer = () => {
  const { footerState } = useContext(DataContext);
  console.log(footerState);

  return (
    <>
      {footerState && (
        <footer className="footer">
          <article className="card">
            <img src={image} alt="../assets/images/hero-image.png" />
          </article>
          <article className="card">
            <small>Games</small>

            <h4>Basketball</h4>

            <p>
              Details of traning sessions,
              <br />
              Tournaments and Courts Booking
            </p>
          </article>
          <article className="card">
            <h4>Tennis</h4>

            <p>Information on lessons,Court Availablity, And Tournaments</p>
          </article>
          <article className="card">
            <div className="offer">
              <span>New Offer</span>
            </div>
            <div className="range">
              <label htmlFor="range">01</label>
              <input type="range" />
              <label htmlFor="range">04</label>
            </div>
          </article>
          )
        </footer>
      )}
    </>
  );
};

export default Footer;
