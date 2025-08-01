import React from "react";
import Header from "./components/header/Header/Header";
import Main from "./components/mainSection/main/Main";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <footer></footer>
      </>
    );
  }
}

export default App;
