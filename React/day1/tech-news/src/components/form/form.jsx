import { Component } from "react";
import "./style.css"

class Form extends Component {
    render() {
        return <form className="news-form">
            <h2>Subscribe to Updates</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <button type="submit" className="submit-btn">Subscribe</button>
        </form>
    }
}

export default Form