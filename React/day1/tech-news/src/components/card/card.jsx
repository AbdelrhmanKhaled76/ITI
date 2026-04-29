import { Component } from "react";
import bannerImg from "../../assets/1.jpeg";
import "./style.css";

import Button from "../button/button";

class Card extends Component {
    render() {
        return (
            <div className="card">
                <header className="card-header">
                    <div className="banner-wrapper">
                        <img src={bannerImg} alt="Banner" className="banner-img" />
                    </div>

                    <div className="badge-pill">
                        <span className="badge-icon">💎</span>
                        <span className="badge-text">Sketch</span>
                    </div>
                </header>

                <div className="card-body">
                    <article>
                        <div className="label-div">
                            <h4>title</h4>
                            <span className="sub-label">label</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis ad sunt consequatur minus, saepe distinctio provident nam optio voluptatem dolorem!
                        </p>
                    </article>

                    <Button />
                </div>
            </div>
        );
    }
}

export default Card;