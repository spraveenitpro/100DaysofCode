import React from "react";

class MemeGenerator extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: "",
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        //console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }
  //   handleChange(event) {
  //     //console.log("this is working");
  //     const { name, value } = event.target;
  //     this.setState({ [name]: value });
  //   }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var randomImg = this.state.allMemeImgs[
      Math.floor(Math.random() * this.state.allMemeImgs.length)
    ];
    this.setState({ randomImg: randomImg.url });
  };
  render() {
    //this.memeSearch();

    return (
      <>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder=" Enter top text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder=" Enter bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom"> {this.state.bottomText}</h2>
        </div>
      </>
    );
  }
}

export default MemeGenerator;
