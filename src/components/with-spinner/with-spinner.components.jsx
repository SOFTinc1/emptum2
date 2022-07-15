import React from "react";
import { SpinnerOverlay, SpinnerContainer, H1 } from "./with-spinner.styles";
import Typical from "react-typical";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        {/* <SpinnerContainer /> */}
        <H1> Please Wait...</H1>
        <H1
          as={Typical}
          loop={Infinity}
          wrapper="h1"
          steps={[
            "Its loading",
            1000,
            "you are almost there",
            1000,
            "seems the network is poor",
            1000,
            "its a hold-up",
            1000,
          ]}
        />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
