import React from "react";
import "./App.css";
import axios from "axios";

const ApiKey = "14aYr55pkAYqxbbMvmQKuBF1oarFzFAs";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: false,
      books: [],
      articles: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/relationships.json?api-key=${ApiKey}`
      )
      .then((res) => {
        console.log("am i ?");

        this.setState({
          books: res.data.results.books,
          articles: res.data.results.books.slice(0, 3),
        });
        console.log(res.data.results.books, "articles");
      });
  };

  getArticles = () => {
    if (this.state.books.length === 0) {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/current/relationships.json?api-key=${ApiKey}`
        )
        .then((res) => {
          console.log("am i ?");

          this.setState({
            books: res.data.results.books,
          });
        });
    }
    this.setState({
      articles: this.state.books.slice(0, 3),
      books: this.state.books.slice(3),
    });
  };

  render() {
    console.log(this.state.books);
    return (
      <>
        <h2>Articles</h2>
        <div className="articles">
          {this.state.articles.map((book) => (
            <div className="article">
              <img
                src={book.book_image}
                width="200px"
                height="300px"
                alt="book-image"
              />
              <button className="article-btn">Read Article</button>
            </div>
          ))}
        </div>
        <button onClick={() => this.getArticles()} className="moreArticle-btn">
          More Articles
        </button>
      </>
    );
  }
}

export default Articles;
