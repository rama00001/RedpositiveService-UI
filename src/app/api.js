import axios from "axios";

const apiURL = process.env.REACT_APP_REQRES_API;

function getUsers() {
  const response = axios.get(`${apiURL}/users`);

  return response;
}

function getCreatedUser({ name, email, phone_number, hobbies }) {
  const response = axios.post(`${apiURL}/users`, {
    name,
    email,
    phone_number,
    hobbies
  });

  return response;
}

function getUpdatedUser(id, user) {
  const response = axios.put(`${apiURL}/users/${id}`, {
    avatar: user.avatar,
    id: id,
    name: user.name,
    email: user.email,
    phone_number: user.phone_number,
    hobbies: user.hobbies
  });

  return response;
}

function getDeletedUser(id) {
  const response = axios.delete(`${apiURL}/users/${id}`);

  return response;
}

export { getUsers, getCreatedUser, getUpdatedUser, getDeletedUser };
