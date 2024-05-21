import React from "react";
import styles from "./Body.module.css";
const Body = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,i'am Bharathi</h1>
        <p>
          I am a fullstack developer skilled in React front-end Developmemt and
          Node js with Express for back-end development.I build dynamic,
          responsive web applications with a focus on performance and
          scalability. I have expertise in RESTful API development, and database
          management with both SQL and NoSQL databases. My goal is to create
          seamless user experiences and robust server-side solutions.
        </p>
      </div>
      <img className={styles.myimage} src="src/assets/myimage.png"></img>
    </section>
  );
};

export default Body;
