import React from "react";
import "./navigation.css";
import axios from "axios";
import "../App.css";
class Categories extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount = () => {
    const ApiKey = "14aYr55pkAYqxbbMvmQKuBF1oarFzFAs";

    console.log("am i here?");

    axios.get(`http://api.nytimes.com/svc/books/`).then((res) => {
      const persons = res.data;
      // this.setState({ persons });
      console.log(persons, "books");
    });
  };

  render() {
    return (
      <div className="main-page">
        <div className="wrapper">
          <div className="category-box">Fantasy</div>
          <div className="category-box">Romance</div>
          <div className="category-box">Realism</div>
          <div className="category-box">Historic</div>
          <div className="category-box">Erotica</div>
          <div className="category-box">Horror</div>
        </div>
      </div>
    );
  }
}

export default Categories;
