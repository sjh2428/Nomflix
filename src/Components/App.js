import React, { Component } from 'react';
import Router from "Components/Router";
import GlobalStyles from 'Components/GlobalStyles';
// Header 폴더 안에서 index.js를 찾음

class App extends Component {
  render() {
      return (
      <>
        <Router />
        <GlobalStyles />
      </>
    ); // 하나의 Component만 return. -> Fragment
  }
}

export default App;
