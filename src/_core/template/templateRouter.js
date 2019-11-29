import React from "react";
import Header from "../component/Header";

export class HomeTemplate extends React.Component {
  render() {
    // console.log(this.props);
    const Cmp = this.props.Component
    return (
      <>
        <Header/>
        <Cmp/>
      </>
    )
  }
}
