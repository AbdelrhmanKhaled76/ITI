import { Component } from "react";
import styles from "./style.module.css";

class Header extends Component {
    render() {
        return (
            <header className={styles['main-header']}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>Brand</div>
                    <ul className={styles['nav-links']}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;