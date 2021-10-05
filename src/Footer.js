import React from "react";
import "./App.css";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    return (
      <div className="submit">
        <form>
          <label>
            Get a free newsletter on making your creative work succeed.{" "}
          </label>
          <input type="text" className="input-email" value={this.state.email} />
          <button className="submit-button" onChange={this.handleChange}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default Footer;
