import React from "react";
import { Container, Row,} from "react-bootstrap";
import {Form,Button,Input} from "antd"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, loadUser } from "../redux/action";
import { useNavigate,useParams } from "react-router-dom";
function Edit() {
  const [name, setName] = useState("");
  var id = useParams();
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const [data,setData] = useState({});
  useEffect(() => {
    dispatch(loadUser());
    if (users.length) {
        const result = users.find((users) => {
          return users.id === id;
          console.log(users.id === id,'ddd')
        });
        // setData();
        console.log(users,"dataFromid")
      }
  }, [users,dispatch,id]);

  const [error, setError] = useState("");
  
  console.log(users,"dd")
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
            <h5>Edit data</h5>
   <Form>
   <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
          initialValue={users[0]?.name}
        >
          <Input value={users[0]?.name} />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="submit" variant="primary">Submit</Button>
   </Form>
          </div>
          <div className="col-md-2">&nbsp;</div>
        </Row>
      </Container>
    </>
  );
}

export default Edit;
