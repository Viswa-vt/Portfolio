import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const techLogos = [
  { name: "HTML", src: "https://th.bing.com/th/id/R.b045c4ec1aa002ab98a01bd6c820cec2?rik=B0joYq0BqCXKmg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2017%2f07%2fHTML5_badge-700x700.png&ehk=uwQufIAXG2teVAja7fcBjb0Y3aXWToHlNiWIK4wKMr4%3d&risl=&pid=ImgRaw&r=0" },
  { name: "CSS", src: "https://th.bing.com/th/id/OIP.aiII04uB8m611vQPSw7HfgHaHa?rs=1&pid=ImgDetMain" },
  { name: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "ReactJS", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Java", src: "https://static.vecteezy.com/system/resources/previews/019/899/948/non_2x/java-free-download-free-png.png" },
  { name: "Spring Boot", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
  { name: "MySQL", src: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { name: "Git", src: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" },
  { name: "GitHub", src: "https://pngimg.com/uploads/github/github_PNG53.png" }
];

const myHistory = [
  {
    role: "Java Virtual Intern",
    organisation: "KodNest",
    startDate: "01 Jan 2024",
    endDate: "03 May 2024",
    experiences: ["Worked on Java-based applications", "Gained hands-on experience in Full Stack Java development"]
  },
  {
    role: "Full Stack Java Developer Certification",
    organisation: "Excelr",
    startDate: "07 July 2024",
    endDate: " 16-Dec-2024 ",
    experiences: ["Completed intensive training on Full Stack Java development"]
  },
  {
    role: "Internship Project",
    organisation: "Excelr",
    startDate: "17th Oct 2024",
    endDate: "17th Jan 2025",
    experiences: [
      "Developed a full-fledged e-commerce application",
      "Implemented user authentication, product management, and secure payments"
    ]
  }
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>SkillSet</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {techLogos.map((tech, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={tech.src} alt={tech.name} className={styles.skillImage} />
                </div>
                <p>{tech.name}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {myHistory.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
