import { Component } from "react";
import styles from "./style.module.css"

class Form extends Component {
    state = {
        title: "",
        summary: "",
        category: "",
        date: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, summary, category, date } = this.state;
        
        if (!title || !summary || !category || !date) {
            alert("Please fill in all fields");
            return;
        }

        const newNews = {
            id: Date.now(),
            title,
            summary,
            category,
            date
        };

        this.props.addNews(newNews);
        
        this.setState({
            title: "",
            summary: "",
            category: "",
            date: ""
        });
    }

    render() {
        const { title, summary, category, date } = this.state;

        return (
            <form className={styles['news-form']} onSubmit={this.handleSubmit}>
                <h2>Add News Item</h2>
                <div className={styles['form-group']}>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={title} 
                        onChange={this.handleChange} 
                        placeholder="Enter news title" 
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="summary">Summary</label>
                    <textarea 
                        id="summary" 
                        name="summary" 
                        value={summary} 
                        onChange={this.handleChange} 
                        placeholder="Enter news summary"
                    ></textarea>
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="category">Category</label>
                    <input 
                        type="text" 
                        id="category" 
                        name="category" 
                        value={category} 
                        onChange={this.handleChange} 
                        placeholder="e.g. AI, Tech, Business" 
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={date} 
                        onChange={this.handleChange} 
                    />
                </div>
                <button type="submit" className={styles['submit-btn']}>Add Card</button>
            </form>
        )
    }
}

export default Form