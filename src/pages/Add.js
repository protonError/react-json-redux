import React from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/action";
import { useNavigate } from "react-router-dom";
function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  let dispatch = useDispatch();

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setState({ ...state, [name]: value });
  // };
  const [form] = Form.useForm();

  let navigate = useNavigate();
  const submitform = (values) => {
    dispatch(addUser(values));
    navigate("/home");
  };
  return (
    <>
      <Container>
        <Row>
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8 shadow bg-light mt-5 p-4">
            <h5>Add data</h5>
            <Form
              layout="vertical"
              form={form}
              requiredMark="optional"
              onFinish={submitform}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item
                label="Age"
                name="age"
                className="!w-full"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber
                  style={{
                    width: "100%",
                  }}
                  min={1}
                  placeholder="input placeholder"
                />
              </Form.Item>
              <Form.Item
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="input placeholder" type="text" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-md-2">&nbsp;</div>
        </Row>
      </Container>
    </>
  );
}

export default Add;
