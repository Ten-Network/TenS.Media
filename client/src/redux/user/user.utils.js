import axios from "axios";

export const registerUser = async ({ name, email, password }) => {
  try {
    const newUser = {
      name: name,
      username: email,
      email: email,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(newUser);

    await axios.post("/register", body, config);
  } catch (error) {
    alert(error.response.data);
  }
};

export const logInUser = async ({ email, password }) => {
  try {
    const newUser = {
      username: email,
      email: email,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(newUser);

    await axios.post("/login", body, config);
  } catch (error) {
    alert(error.response.data);
  }
};

export const logOutUser = async () => {
  const response = await axios.get("/authenticated");

  const user = response.data.user;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      cart: user.cart,
      name: user.name,
      username: user.username,
      email: user.email,
      id: user._id,
    };

    const body = JSON.stringify(data);

    await axios.post("/logout", body, config);
  } catch (error) {
    alert(error.response.data);
  }
};
