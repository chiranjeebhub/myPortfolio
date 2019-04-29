import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link, withRouter } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <Link to="/myPortfolio">
                  <img
                    style={{ borderRadius: "50%", width: "40px" }}
                    src={require("../logo.jpg")}
                  />
                </Link>

                <Link to="/myPortfolio" style={{ textDecoration: "none" }}>
                  <span style={{ color: "white" }}>
                    &nbsp;&nbsp;Chiranjeeb Jena&nbsp;
                  </span>
                </Link>
                <span style={{ color: "#ddd" }}>
                  {this.props.history.location.pathname}
                </span>
              </span>
            }
          >
            <Navigation>
              <Link to="/myPortfolio">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/blog">Blog</Link>
            </Navigation>
          </Header>
          <Drawer title="Chiranjeeb Jena">
            <Navigation>
              <Link to="/myPortfolio">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/blog">Blog</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Switch>
              <Route exact path="/myPortfolio" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Nav);
