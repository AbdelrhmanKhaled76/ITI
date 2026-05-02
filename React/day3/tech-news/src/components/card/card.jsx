import { Component } from "react";
import bannerImg from "../../assets/1.jpeg";
import styles from "./style.module.css";
import Button from "../button/button";

class Card extends Component {
    render() {
        const { data } = this.props;

        const title = data?.title || "Latest Tech News";
        const summary = data?.summary || "Loading news summary...";
        const category = data?.category || "Tech";
        const date = data?.date || "2026";

        return (
            <div className={styles.card}>
                <header className={styles['card-header']}>
                    <div className={styles['banner-wrapper']}>
                        <img src={bannerImg} alt={title} className={styles['banner-img']} />
                    </div>

                    <div className={styles['badge-pill']}>
                        <span className={styles['badge-icon']}>⚡</span>
                        <span className={styles['badge-text']}>{category}</span>
                    </div>
                </header>

                <div className={styles['card-body']}>
                    <article>
                        <div className={styles['label-div']}>
                            <h4>{title}</h4>
                            <span className={styles['sub-label']}>{date}</span>
                        </div>
                        <p>{summary}</p>
                    </article>

                    <div className={styles['card-actions']}>
                        <div className={styles['vote-buttons']}>
                            <button className={`${styles['vote-btn']} ${styles.upvote}`}>
                                <span>▲</span> Upvote
                            </button>
                            <button className={`${styles['vote-btn']} ${styles.downvote}`}>
                                <span>▼</span> Downvote
                            </button>
                        </div>
                        <Button />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;