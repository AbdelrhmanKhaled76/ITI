import { Component } from "react";
import "./style.css";

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <nav className="navbar">
                    <div className="logo">Brand</div>
                    <ul className="nav-links">
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