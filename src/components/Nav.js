import React, { useContext } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import {
  Link,
  NavLink,
  withRouter,
  Route,
  Switch,
  __RouterContext
} from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Blog from "./Blog";
import PostDetail from "./PostDetail";
import { useTransition, animated } from "react-spring";
//const Blog = lazy(() => import("./Blog"));
function Nav() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" }
  });
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
                {/* {this.props.history.location.pathname} */}
              </span>
            </span>
          }
        >
          <Navigation id="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>

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
          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/resume" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/:id" component={PostDetail} />
              </Switch>
            </animated.div>
          ))}
        </Content>
      </Layout>
    </div>
  );
}

export default withRouter(Nav);
