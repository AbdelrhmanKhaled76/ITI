// Card.jsx
import { Component } from "react";
// Assumes you keep your banner image, but we'll need a placeholder user image
import bannerImg from "../../assets/1.jpeg";
// We'll use a placeholder for now, you should add your user photo later
const userAvatarPlaceholder = "https://i.pravatar.cc/150";
import "./style.css";

class Card extends Component {
    render() {
        return (
            <div className="card">
                {/* NEW HEADER SECTION for layered positioning */}
                <header className="card-header">
                    {/* Main Background Banner */}
                    <div className="banner-wrapper">
                        <img src={bannerImg} alt="Banner" className="banner-img" />
                    </div>



                    {/* New "Badge" to match the image structure */}
                    <div className="badge-pill">
                        <span className="badge-icon">💎</span>
                        <span className="badge-text">Sketch</span>
                    </div>
                </header>

                {/* ENCAPSULATED CONTENT SECTION */}
                <div className="card-body">
                    <article>
                        <div className="label-div">
                            {/* Using your title element */}
                            <h4>title</h4>
                            {/* Use your label text */}
                            <span className="sub-label">label</span>
                        </div>
                        {/* Added spacing around paragraphs */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis ad sunt consequatur minus, saepe distinctio provident nam optio voluptatem dolorem!
                        </p>
                    </article>

                    {/* Your button, styled to match "Get In Touch" */}
                    <button type="button" className="get-in-touch-btn">
                        view more
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;