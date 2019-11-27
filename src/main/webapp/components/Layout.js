// components/Layout.js

import Header from "./Header";
import Head from 'next/head';


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

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Head>
      <title>TimeSheet</title>
      <link href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" rel="stylesheet" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Head>
    <Header />
    <section className="section">
      <div className="container">
        {props.children}
      </div>
    </section>
    

  </div>
);

export default Layout;