import { Component } from "react";
import Card from "../card/card";
import styles from "./news.module.css";
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

  addNews = (newNews) => {
    this.setState((prevState) => ({
      newsItems: [newNews, ...prevState.newsItems]
    }));
  };

  render() {
    const { newsItems, loading, error } = this.state;

    if (loading) return <div className={styles['news-loading']}>Loading News...</div>;
    if (error) return <div className={styles['news-error']}>Error: {error}</div>;

    return (
      <section className={styles['news-container']}>
        <div className={styles['news-form-side']}>
          <Form addNews={this.addNews} />
        </div>
        <div className={styles['news-cards-side']}>
          {newsItems.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </section>
    );
  }
}

export default News;