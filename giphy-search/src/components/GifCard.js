import React from "react";
import { Image } from "react-bootstrap";

class GifCard extends React.Component {
  render() {
    return (
      <>
        <Image src={this.props.url} />
      </>
    );
  }
}

export default GifCard;
