import React from "react";
import style from "./style.module.scss";

interface courseItem {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
}

const Course: React.FC<courseItem> = ({ image, name, bgColor, id, tags }) => {
  return (
    <article className={style.course}>
      <div style={{ backgroundColor: bgColor }} className={style.imgContainer}>
        <img src={image} alt="course"></img>
      </div>
      <h2>{name}</h2>
    </article>
  );
};

export default Course;
