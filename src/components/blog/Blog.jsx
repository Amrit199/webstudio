import React from "react";
import "./blog.scss";

export default function Blog() {
  return (
    <div className="blog-container" id="blog">
      <h1 className="blog-title">Blog</h1>
      <div className="body-container">
        <div className="item-container">
          <div className="img-container">
            <img src="blogassets/figtoword.jpg" alt="" />
            <div className="details">
              <h3>Roman Benerzol</h3>
              <p>sep 14, 2022</p>
              <p>3k views</p>
            </div>
          </div>
          <p className="description">
            Convert Figma to Wordpress: how to do that in the right way
          </p>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src="blogassets/seo.jpg" alt="" />
            <div className="details">
              <h3>Roman Benerzol</h3>
              <p>Oct 14, 2022</p>
              <p>1.2k views</p>
            </div>
          </div>
          <p className="description">
            What metrics matter when doing keyword research for SEO
          </p>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src="blogassets/agency.jpeg" alt="" />
            <div className="details">
              <h3>Roman Benerzol</h3>
              <p>Aug 14, 2022</p>
              <p>2k views</p>
            </div>
          </div>
          <p className="description">
            Reasons and benefits of hiring a full-service software development
            agency
          </p>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src="blogassets/digital.jpg" alt="" />
            <div className="details">
              <h3>Roman Benerzol</h3>
              <p>March 14, 2022</p>
              <p>1k views</p>
            </div>
          </div>
          <p className="description">
            Stop using marketing tricks that harm customers
          </p>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src="blogassets/security.jpg" alt="" />
            <div className="details">
              <h3>Roman Benerzol</h3>
              <p>Jan 14, 2022</p>
              <p>780 views</p>
            </div>
          </div>
          <p className="description">
            Advantages of Media Monitoring for Your Business
          </p>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src="blogassets/manipulation.jpeg" alt="" />
            <div className="details">
              <h3>Roman Benerzol</h3>
              <p>Feb 14, 2022</p>
              <p>1.5k views</p>
            </div>
          </div>
          <p className="description">
            Reasons why a product page might not be ranking
          </p>
        </div>
      </div>
    </div>
  );
}
