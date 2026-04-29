import { Component } from "react";
import Card from "../card/Card";
import "./News.css";
import Form from "../form/form";

class News extends Component {
  render() {
    const cardsNumber = 6
    return (
      <section className="news-container">
        <div className="news-form-side">
          <Form />
        </div>
        <div className="news-cards-side">
          {
            Array.from({ length: cardsNumber }).map((_, index) => (
              <Card key={index} />
            ))
          }

        </div>
      </section>
    );
  }
}

export default News;