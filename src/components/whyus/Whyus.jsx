import React from "react";
import { Button } from "../button/Button";
import "./whyus.scss";

export default function Whyus() {
  return (
    <section className="whyus">
      <div className="container">
        <h2 className="whyus-title">Why Us</h2>
        <div className="item-container">
          <div className="whyus-item-box">
            <div className="whyus-item">
              <figure className="whyus-figure">
                <img src="whyusassets/optimize.webp" alt="" />
              </figure>
              <div className="whyus-content">
                <h3 className="whyus-title">OPTIMIZE YOUR PROCESSES</h3>
                <p className="whyus-text">
                  You will get a free personal manager who will help to build a
                  strategy, optimize the budget and deadline, organize the
                  development process and launch the project.
                </p>
              </div>
            </div>
            <div className="whyus-item">
              <figure className="whyus-figure">
                <img src="whyusassets/strategy.jpg" alt="" />
              </figure>
              <div className="whyus-content">
                <h3 className="whyus-title">
                  GET YOUR LEADS GENERATION STRATEGY!
                </h3>
                <p className="whyus-text">
                  Combining marketing and technology, we provide a full range of
                  services from the UI/UX design and web development to SEO and
                  promotion.
                </p>
              </div>
            </div>
          </div>
          <div className="whyus-item-box">
            <div className="whyus-item">
              <figure className="whyus-figure">
                <img src="whyusassets/revenue.jpg" alt="" />
              </figure>
              <div className="whyus-content">
                <h3 className="whyus-title">ACCELERATE YOUR REVENUE!</h3>
                <p className="whyus-text">
                  200+ years of cumulative team experience. No matter the
                  industry, business goals, or location to turn your
                  requirements into the profitable solution.
                </p>
              </div>
            </div>
            <div className="whyus-item">
              <figure className="whyus-figure">
                <img src="whyusassets/exceed.jpg" alt="" />
              </figure>
              <div className="whyus-content">
                <h3 className="whyus-title">EXCEED YOUR EXPECTATIONS!</h3>
                <p className="whyus-text">
                  Not limited to standard methods. We use the horizontal a
                  corporate culture that naturally encourages employees to be
                  masters of innovations.
                </p>
              </div>
            </div>
          </div>
          <div className="whyus-item-box">
            <div className="whyus-item">
              <figure className="whyus-figure">
                <img src="whyusassets/protect.jpg" alt="" />
              </figure>
              <div className="whyus-content">
                <h3 className="whyus-title">PROTECT YOUR BUSINESS!</h3>
                <p className="whyus-text">
                  Every website or app is secure and built on the latest
                  versions of open source content
                </p>
              </div>
            </div>
            <div className="whyus-item">
              <figure className="whyus-figure">
                <img src="whyusassets/respect.jpeg" alt="" />
              </figure>
              <div className="whyus-content">
                <h3 className="whyus-title">RESPECT YOU!</h3>
                <p className="whyus-text">
                  It’s great to work with honesty, transparency, trustworthy and
                  law-abiding.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button>GET IN TOUCH</Button>
      </div>
    </section>
  );
}
