import { Component } from "react";
import styles from "./style.module.css";

class Button extends Component {
    render() {
        return (
            <button type="button" className={styles['get-in-touch-btn']}>
                view more
            </button>
        );
    }
}

export default Button;