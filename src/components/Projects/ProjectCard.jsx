import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <img
        src="src\components\Projects\image.webp" // Make sure this image is in the public folder
        alt="E-commerce Application"
        className={styles.image}
      />
      <h3 className={styles.title}>E-commerce Application</h3>
      <p className={styles.description}>
        A full-stack web application providing a seamless online shopping experience. 
        Features include user authentication, product management, shopping cart, order tracking, 
        and an admin dashboard for managing products and users.
      </p>
      <ul className={styles.skills}>
        <li className={styles.skill}>ReactJS</li>
        <li className={styles.skill}>Java Spring Boot</li>
        <li className={styles.skill}>MongoDB</li>
        <li className={styles.skill}>REST APIs</li>
        <li className={styles.skill}>Payment Integration</li>
      </ul>
      <div className={styles.links}>
        <a
          href="https://github.com/Viswa-vt/Ecom"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href="https://github.com/Viswa-vt/Ecom"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};
