import { Component } from "react";
export class WordCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctr: 0
    };
  }
  calculateWords = (event) => {
    let word = event.target.value;
    const arr = word.trim().split(/\s+/).filter(Boolean);
    this.setState({ ctr: arr.length });
  };
  render() {
    return (
      <div className="container-sm d-grid place-items-center">
        <h1>Responsive Paragraph Word Counter</h1>
        <center>
        <textarea rows="10"
          onChange={this.calculateWords}
          placeholder="Enter any text......." className="col-6 my-3"
        />
        </center>
        <h4>Word Count: {this.state.ctr}</h4>
      </div>
    );
  }
}
