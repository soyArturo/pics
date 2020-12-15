import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import unpslash from "./api/unpslash";
import ImageList from "./components/imageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unpslash.get("/search/photos?per_page=20", {
      params: { query: term },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    const { images } = this.state;
    return (
      <div className="container mt-5">
        <SearchBar onSubmit={this.onSearchSubmit} length={images} />
        <ImageList images={images} />
      </div>
    );
  }
}
export default App;
