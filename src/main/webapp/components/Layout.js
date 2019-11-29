// components/Layout.js

import Header from "./Header";
import Head from 'next/head';
import React from 'react';


const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messagetext: this.props.messagetext,
      messagetype: this.props.messagetype
    }

    this.hideMessage = this.hideMessage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messagetext !== this.props.messagetext) {
      console.log(`this.props`,this.props);
      this.setState({
        messagetext: this.props.messagetext,
        messagetype: this.props.messagetype
      })
    }
  }

  hideMessage(){
    this.setState({
      messagetext : '',
      messagetype : ''
    })
  }

  render() {
    return (
      <div className="Layout" style={layoutStyle}>
        <Head>
          <title>TimeSheet</title>
          <link href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/slate/bulmaswatch.min.css" />
          <link rel="stylesheet" href="../static/style.scss" />
        </Head>

        <Header />
        {this.state.messagetext !== '' &&
          <div className={this.state.messagetype}>
            <button className="delete" onClick={this.hideMessage.bind()}></button>
            {this.state.messagetext}
          </div>
        }

        <section className="section">
          <div className="container is-fluid no-margin">
            {this.props.children}
          </div>
        </section>


      </div>
    )
  }

}
