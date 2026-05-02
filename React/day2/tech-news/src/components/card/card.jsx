import { Component } from "react";
import bannerImg from "../../assets/1.jpeg";
import "./style.css";
import Button from "../button/button";

class Card extends Component {
    render() {
        const { data } = this.props;

        const title = data?.title || "Latest Tech News";
        const summary = data?.summary || "Loading news summary...";
        const category = data?.category || "Tech";
        const date = data?.date || "2026";

        return (
            <div className="card">
                <header className="card-header">
                    <div className="banner-wrapper">
                        <img src={bannerImg} alt={title} className="banner-img" />
                    </div>

                    <div className="badge-pill">
                        <span className="badge-icon">⚡</span>
                        <span className="badge-text">{category}</span>
                    </div>
                </header>

                <div className="card-body">
                    <article>
                        <div className="label-div">
                            <h4>{title}</h4>
                            <span className="sub-label">{date}</span>
                        </div>
                        <p>{summary}</p>
                    </article>

                    <Button />
                </div>
            </div>
        );
    }
}

export default Card;