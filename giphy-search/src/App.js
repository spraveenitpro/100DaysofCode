import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import GifCard from "./components/GifCard";
import "./App.css";

class App extends React.Component {
  state = {
    gifs: [],
  };

  apiKey = "0Yi0DokZi0a2Ts7ycbWw8ho5dOp9FI3V";
  urlPath = "https://api.giphy.com/v1/gifs/search";

  giphySearch = (query) => {
    fetch(`${this.urlPath}?api_key=${this.apiKey}&q=${query}`)
      .then((response) => response.json())
      .then((data) => this.setState({ gifs: data.data }));
  };

  render() {
    return (
      <>
        <Header />
        <SearchForm giphySearch={this.giphySearch} />
        <Container>
          <Row>
            {this.state.gifs.map((gif) => {
              const url = gif.images.fixed_height.url;
              return <GifCard url={url} />;
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
