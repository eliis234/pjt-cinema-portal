import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export class HomeTemplate extends React.Component {
  render() {
    // console.log(this.props);
    const Cmp = this.props.Component
    return (
    <div style={{
      background: "url('/img/background1.jpg')",
    }}>
        <Header/>
        <Cmp {...this.props.match}/>
        <Footer/>
      </div>
    )
  }
}
