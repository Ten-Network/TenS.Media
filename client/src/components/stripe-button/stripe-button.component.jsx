import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publichableKey =
    "pk_test_51Gt92lAHloLKFKhU77Od2GT8o7revPfpV6Yt6sW2XZjLHhYwjwFYRISG1boC6QuiaXJIe01RiS8kIFpMVijVQ8zy00fH3ZqkEB";

  const onToken = (token) => alert("Payment Successfull");

  return (
    <StripeCheckout
      label="Pay Now"
      name="Big Basket"
      billingAddress
      shippingAddress
      currency="INR"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLable="Pay Now"
      token={onToken}
      stripeKey={publichableKey}
    />
  );
};

export default StripeCheckoutButton;
