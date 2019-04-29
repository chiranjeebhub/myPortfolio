import React, { Component } from "react";
import { Grid, Cell, Button, FABButton, Icon } from "react-mdl";
import { gray } from "ansi-colors";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    shown: false
  };

  toggle = () => {
    this.setState({
      shown: !this.state.shown
    });
  };

  render() {
    const shown = {
      display: this.state.shown ? "block" : "none"
    };

    const hidden = {
      display: this.state.shown ? "none" : "block"
    };
    return (
      <Grid className="home-grid" style={{ height: "87vh" }}>
        <Cell col={2} />
        <Cell col={4} style={{ textAlign: "left" }}>
          <h1 style={{ fontSize: "80px" }}>
            <b>Hello </b>
            <FABButton mini colored primary ripple onClick={this.toggle}>
              <Icon name="share" />
            </FABButton>
          </h1>
          <h6 style={shown}>
            <i class="fab fa-twitter" />
            <a
              href="https://twitter.com/ichiranjeeb"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              &nbsp;&nbsp;<b>twitter</b>
            </a>
            &nbsp;&nbsp; <i class="fab fa-linkedin" />
            <a
              href="https://www.linkedin.com/in/ichiranjeeb"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              &nbsp;&nbsp;<b>LinkedIn</b>
            </a>
            &nbsp;&nbsp;
            <i class="fab fa-github" />
            <a
              href="https://github.com/chiranjeebhub"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              &nbsp;&nbsp;<b>Github</b>
            </a>
          </h6>
          <p style={{ fontSize: "15px" }}>
            Welcome to my portfolio. I am <b>Chiranjeeb</b> and here I will talk
            about what I do, what I like and what not. Let me take you on a
            little trip. buckle up.
          </p>
          <p style={{ fontSize: "20px" }}>
            <b>What I do ?</b>
          </p>
          <ul>
            <li>React WebApp development</li>
            <li>Wordpress Web Development</li>
            <li>Graphic Designing</li>
          </ul>
          <br />
          <Link to="/portfolio">
            <Button raised accent ripple>
              <i class="fab fa-github" />
              &nbsp;&nbsp;Projects I did
            </Button>
          </Link>
          &nbsp;&nbsp;
          <br />
          {/* <iframe
              src="https://open.spotify.com/embed/track/7DTfOX4SIuMMt33sSVvLRr"
              width="500"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            /> */}
        </Cell>
        <Cell col={4} style={{ textAlign: "right" }} id="nav">
          <br />
          <br />
          <i
            class="fas fa-code"
            style={{ fontSize: 450, color: "gray", opacity: "0.2" }}
          />
          {/* <img
              style={{ borderRadius: "50%", width: "300px" }}
              src={require("../me.jpg")}
            /> */}
        </Cell>
        <Cell col={2} />
      </Grid>
    );
  }
}

export default Home;
