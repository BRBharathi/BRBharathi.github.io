import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightmenu}>
        <ul className={styles.rightmenuitems}>
          <li>
            <img src="src/assets/htmlicon.svg"></img>
          </li>
          <li>
            <img src="src/assets/cssicon.svg" />
          </li>
          <li>
            <img src="src/assets/javascripticon.svg" />
          </li>
        </ul>
        <ul className={styles.rightmenuitems}>
          <li>
            <img src="src/assets/reacticon.svg" />
          </li>

          <li>
            <img src="src/assets/nodejsicon.svg" />
          </li>
          <li>
            <img src="src/assets/expressjsicon.svg" />
          </li>
        </ul>
        <ul className={styles.rightmenuitems}>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-java" size="5x" />
          </li>
          <li>
            <img src="src/assets/springbooticon.svg" />
          </li>
        </ul>
      </div>
      <div className={styles.leftmenu}>
        <ul className={styles.leftmenuitems}>
          <li>
            <li>
              <a
                href="https://github.com/BRBharathi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>
            </li>
          </li>
          <li>
            <a
              href="https://github.com/BRBharathi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
