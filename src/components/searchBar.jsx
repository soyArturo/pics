import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    console.log("Submitted");
  };

  render() {
    const { length } = this.props;
    return (
      <div
        className="card mx-auto"
        style={{
          borderRadius: "10px",
          boxShadow: "1px 0px 12px 0px rgba(50,50,50,0.3)",
        }}>
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="mb3">
              <label className="form-label fw-bold">Image Search</label>
              <input
                type="text"
                className="form-control"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
          <div className="mt-1 text-end">
            <p className="">Found: {length.length} images</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
