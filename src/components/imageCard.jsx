import React, { Component } from "react";

class ImageCard extends Component {
  state = {};
  render() {
    const { image } = this.props;
    return (
      <div className="card h-100">
        <img
          src={image.urls.regular}
          alt={image.description}
          key={image.id}
          className="card-img-top"
        />
      </div>
    );
  }
}

export default ImageCard;
