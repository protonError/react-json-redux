import * as types from "./actiontype";
import axios from "axios";

const getUsers = (user) => ({
  type: types.GET_USERS,
  payload: user,
});
const userDelete = (user) => ({
  type: types.DELETE_USER,
  payload: user,
});
const userEdit = (user) => ({
  type: types.EDIT_USER,
  payload: user,
});
const userAdd = (user) => ({
  type: types.ADD_USER,
  payload: user,
});
export const loadUser = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getUsers(resp.data));
        // console.table(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(userDelete(resp.data));
        dispatch(loadUser());
        // console.table(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const addUser = (user) => {
//   return function (dispatch) {
//     axios
//       .post(`${process.env.REACT_APP_API}`, user)
//       .then((resp) => {
//         dispatch(userAdd(resp.data));
//         // dispatch(loadUser());
//         console.table(resp.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        dispatch(userAdd(resp.data));

        console.log(resp.data, "data is received");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
