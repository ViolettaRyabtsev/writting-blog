import React from "react";
import "./App.css";
class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: false,
    };
  }

  render() {
    return (
      <>
        <h2>Articles</h2>
        <div className="articles">
          <div className="oneArticle">
            <h3>blsldldl</h3>
            <button className="article-btn">Read Article</button>
          </div>
          <div className="twoArticle">
            <h3>blsldldl</h3>
            <button className="article-btn">Read Article</button>
          </div>
          <div className="threeArticle">
            <h3>blsldldl</h3>
            <button className="article-btn">Read Article</button>
          </div>
        </div>
        <button className="moreArticle-btn">More Articles</button>
      </>
    );
  }
}

export default Articles;
