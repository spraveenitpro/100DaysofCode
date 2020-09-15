import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader,
  Cardfooter,
  CardFooter,
  CardGroup,
} from "reactstrap";
import "./index.css";

const App = () => {
  // const contacts = [
  //   { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
  //   { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
  //   { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
  // ];
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.results);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CardGroup>
        {contacts.map((contact) => (
          <ContactCard
            avatar={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        ))}
      </CardGroup>
      <CardGroup>
        {contacts.map((contact) => (
          <ContactCard
            avatar={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        ))}
      </CardGroup>
      <CardGroup>
        {contacts.map((contact) => (
          <ContactCard
            avatar={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        ))}
      </CardGroup>
    </>
  );
};

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);
  console.log(props.avatar);
  return (
    // <div className="contact-card">
    //   <img src={props.avatar} alt="" />
    //   <div className="user-details">
    //     <p>Name: {props.name}</p>
    //     <p>Email:{props.email}</p>
    //     <button
    //       onClick={() => {
    //         setShowAge(!showAge);
    //       }}
    //     >
    //       Toggle Age
    //     </button>
    //     {showAge && <p> Age: {props.age}</p>}
    //   </div>
    // </div>

    <Card body outline color="primary" className="text-center">
      <CardBody>
        <CardHeader>{props.name}</CardHeader>
        <img top width="128px" src={props.avatar} alt="profile pic" />

        <CardText> {showAge && <p> Age: {props.age}</p>}</CardText>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowAge(!showAge);
          }}
        >
          Toggle Age
        </button>
      </CardBody>
      <CardFooter> {props.email} </CardFooter>
    </Card>
  );
};

export default App;
