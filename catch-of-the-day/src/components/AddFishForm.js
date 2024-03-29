import React from "react";

class AddFishForm extends React.Component {
  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
    console.log(fish);
  };
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="NAME" ref={this.nameRef} />
        <input
          name="price"
          type="text"
          placeholder="PRICE"
          ref={this.priceRef}
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="Unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="DESC" ref={this.descRef} />
        <input
          name="image"
          type="text"
          placeholder="IMAGE"
          ref={this.imageRef}
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
