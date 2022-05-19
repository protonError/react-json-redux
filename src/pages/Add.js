import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/action";
import { useNavigate } from "react-router-dom";
function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  let dispatch = useDispatch();
  const [error, setError] = useState("");
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setState({ ...state, [name]: value });
  // };
  const [state, setState] = useState({
    name: "",
    age: "",
    city: "",
  });
  function newName(e) {
    setName(e.target.value);
  }
  function newAge(e) {
    setAge(e.target.value);
  }
  function newCity(e) {
    setCity(e.target.value);
  }
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || age === "" || city === "") {
      setError("Please fill all the fields");
      alert("Please fill all the fields");
    } else {
      setError("");
      setState({
        id: Math.floor(Math.random() * 100),
        name: name,
        age: age,
        city: city,
      });
      dispatch(addUser(state));
      console.log(state);
      setName("");
      setAge("");
      setCity("");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8 shadow bg-light mt-5 p-4">
            <h5>Add data</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => newName(e)}
                  placeholder="Enter name"
                  value={name}
                />
              </Form.Group>
              <Form.Group controlId="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => newAge(e)}
                  placeholder="Enter age"
                  value={age}
                />
              </Form.Group>
              <Form.Group controlId="City">
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={(e) => newCity(e)}
                  type="text"
                  placeholder="Enter city"
                  value={city}
                />
              </Form.Group>
              <Button className="btn-submit" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-md-2">&nbsp;</div>
        </Row>
      </Container>
    </>
  );
}

export default Add;
