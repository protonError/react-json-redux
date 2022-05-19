import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { loadUser, deleteUser } from "../redux/action";
import { Link } from "react-router-dom";
import { handleBreakpoints } from "@mui/system";

function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-12 mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.city}</td>
                      <td style={{ width: "16%" }}>
                        <Button
                          className="mx-2"
                          type="button"
                          variant="primary"
                          as={Link}
                          to={`/edit/${user.id}`}
                        >
                          Edit
                        </Button>
                        <Button
                          type="button"
                          variant="danger"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
