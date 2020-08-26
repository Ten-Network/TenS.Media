import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Carousel from "../../components/carousel/carousel.component";
import Directory from "../../components/directory/directory.component";

import { setCurrentUser } from "../../redux/user/user.actions";

import "./homepage.styles.scss";

const Homepage = ({ setCurrentUser }) => {
  useEffect(() => {
    const isLoggedIn = async () => {
      const user = await (await axios.get("/authenticated")).data.user;

      if (user) {
        setCurrentUser({
          id: user._id,
          cart: user.cart,
          name: user.name,
          email: user.email,
        });
      } else {
        setCurrentUser(null);
      }
    };
    isLoggedIn();
  }, [setCurrentUser]);

  return (
    <div className="homepage">
      <Carousel className="carousel" name={"homepageSlides"} />
      <Directory />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Homepage);
