import React, { Component, lazy, Suspense } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
//import Blog from "./Blog";
const Blog = lazy(() => import("./Blog"));
class Nav extends Component {
  state = {};

  render() {
    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <Link to="/">
                  <img
                    style={{ borderRadius: "50%", width: "40px" }}
                    src={require("../logo.jpg")}
                    alt="logo"
                  />
                </Link>

                <Link to="/" style={{ textDecoration: "none" }}>
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
            <Navigation id="nav">
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/portfolio">Portfolio</Link>

              <Link to="/blog">
                <i className="fas fa-code-branch" /> Blog
              </Link>

              {/* <a href="https://ichiranjeeb.com" target="_blank">
                Blog
              </a> */}
            </Navigation>
          </Header>
          <Drawer title="Chiranjeeb Jena">
            <Navigation>
              <Link to="/">
                <i className="fas fa-house-damage" /> Home
              </Link>
              <Link to="/resume">
                <i className="far fa-address-card" /> Resume
              </Link>
              <Link to="/portfolio">
                <i className="fas fa-code-branch" /> Portfolio
              </Link>
              <Link to="/blog">
                <i className="fas fa-code-branch" /> Blog
              </Link>
              {/* <a href="https://ichiranjeeb.com" target="_blank">
                <i class="fas fa-rss" /> Blog
              </a> */}
            </Navigation>
          </Drawer>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/resume" component={About} />
              <Suspense fallback={<div className="loader" />}>
                <Route path="/blog" component={Blog} />
              </Suspense>
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Nav);
