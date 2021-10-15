import axios from "axios";
import { useState } from "react";
const GetBooksApi = ({ article }) => {
  // `https://api.nytimes.com/svc/books/v3/lists/current/${article}.json?api-key=${ApiKey}`

  const [Posts, setPost] = useState([]);

  axios
    .get(
      `https://api.nytimes.com/svc/books/v3/lists/current/${article}.json?api-key=${ApiKey}`
    )
    .then((res) => {
      console.log("am i here?");

      // this.setState({ persons });
      console.log(res.data.results.books, "books");
      setPost(res.data.results.books);
    });
  // console.log(Posts[0], "posts");
  return (
    <div className="list-api">
      {Posts.map((item) => (
        <div>
          <h5>{item.title}</h5>
          <h5>{item.author}</h5>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
export default GetBooksApi;
