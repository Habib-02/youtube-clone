import React from "react";
import Header from "./layout/Header";
import Main from "./features/Main";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
