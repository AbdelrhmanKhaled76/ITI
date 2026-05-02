import { Component } from "react";
import Card from "../card/Card";
import "./News.css";
import Form from "../form/form";

class News extends Component {
  state = {
    newsItems: [],
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/news");
      if (!response.ok) throw new Error("Failed to fetch news");
      const data = await response.json();
      this.setState({ newsItems: data, loading: false });
    } catch (error) {
      console.error("News fetch error:", error);
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { newsItems, loading, error } = this.state;

    if (loading) return <div className="news-loading">Loading News...</div>;
    if (error) return <div className="news-error">Error: {error}</div>;

    return (
      <section className="news-container">
        <div className="news-form-side">
          <Form />
        </div>
        <div className="news-cards-side">
          {newsItems.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </section>
    );
  }
}

export default News;