import React from "react";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, history, currentUser }) => {
  const { imageUrl, title, price } = item;

  return (
    <div className="collection-item">
      <div
        className="img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{title}</span>
        <span className="price">Rs {price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => (currentUser ? addItem(item) : history.push("/signin"))}
      >
        add to cart
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
);
