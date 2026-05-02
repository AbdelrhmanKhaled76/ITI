import { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">Tech News</h3>
          <p className="footer-text">Staying updated with the latest in technology.</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Tech News. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;