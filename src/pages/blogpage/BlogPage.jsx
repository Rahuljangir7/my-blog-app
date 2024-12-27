import React from "react";
import "./blogpage.css";
import { cardJson } from "../../data";
import About from "../about/About";
import Card from "../../utility/Card";

const BlogPage = () => {
  return (
    <div className="blogpage">
      <About
        title="The Blog"
        des="At IMPULSE, our blog offers insightful articles on technology, trends, and development. Whether you’re looking for tutorials, the latest tech news, or thought-provoking content, we’ve got something to inspire and inform you."
      />

      <div className="blogpage-section">
        {cardJson.map((item, idx) => (
          <Card
            key={idx}
            img={item.image}
            date={item.date}
            heading={item.title}
            para={item.des}
            blogPageLink={item.linkName}
            linkName={item.linkName}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
