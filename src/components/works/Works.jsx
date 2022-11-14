import React, { useEffect, useState } from "react";
import { designwork, featuredwork, webwork } from "../../data";
import WorkList from "../workList/WorkList";
import "./works.scss";

export default function Works() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Wed App",
    },
    {
      id: "Design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredwork);
        break;
      case "web":
        setData(webwork);
        break;
      case "design":
        setData(designwork);
        break;
      default:
        setData(featuredwork);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio-title">Portfolio</h1>
      <ul className="portfolio-box">
        {list.map((item) => (
          <WorkList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
