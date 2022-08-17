// import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";


import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in/signin-page";
import SignUpPage from "./pages/sign-up/signup-page";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import CollectionsOverview from "./components/collections-overview/collections-overview.component";
import CollectionPage from "./pages/collection/collection.component";
import Footer from "./components/footer/footer.component";
import WithSpinner from "./components/with-spinner/with-spinner.components";

// import { GlobalStyle } from "./components/global.styles";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
const HomepageWithSpinner = WithSpinner(Homepage);


class App extends React.Component {
  state = {
    loading: true,
  };
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser} = this.props;
    this.onSubsceribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {/* <GlobalStyle /> */}
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomepageWithSpinner isLoading={loading} />} />

          <Route path="/shop/" element={<ShopPage />}>
            <Route index element={<CollectionsOverview />} />
            <Route path=":collectionId" element={<CollectionPage />} />
          </Route>

          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInPage />
              )
            }
          />
          <Route exact path="/signup" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
