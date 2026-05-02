import { Component } from "react";
import styles from "./style.module.css";

class Footer extends Component {
  render() {
    return (
      <footer className={styles['footer-container']}>
        <div className={styles['footer-content']}>
          <h3 className={styles['footer-title']}>Tech News</h3>
          <p className={styles['footer-text']}>Staying updated with the latest in technology.</p>
        </div>
        <div className={styles['footer-bottom']}>
          <p>&copy; 2026 Tech News. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;