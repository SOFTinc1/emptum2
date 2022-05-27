import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51L10CSB3F9eJY08cmvNMtX1rcaiiKjhwSx5QXcRXthc6RDUUTZQ6Lo22wic7bii1dvSiCv6YIEzPoq05BoDPObZc00OQfHw335";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="emptum"
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
