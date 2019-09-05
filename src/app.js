import React from "react";
// import { connect } from "react-redux";

import "./../styles/reset.css";

import Header from "./../components/headerComponent/header.component.jsx";
import Footer from "./../components/footerComponent/footer.component.jsx";
import Counter from "./../components/counterComponent/counter.component.jsx";

import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
