import axios from "axios";
import { BACKEND_URL } from "../config";

async function registerUser(email, username, password) {
  await axios
    .post(BACKEND_URL + "/register", {
      email: email,
      username: username,
      password: password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return { error: error };
    });
}
async function loginUser(username, password) {
  await axios
    .post(BACKEND_URL + "/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return { error: error };
    });
}

async function userData(token) {
  await axios
    .get(BACKEND_URL + "/user", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return false;
    });
}

export { registerUser, loginUser, userData };
