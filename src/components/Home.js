import React, { Component } from "react";
import { Grid, Cell, Button, FABButton, Icon } from "react-mdl";
import { gray } from "ansi-colors";

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
      <div>
        <Grid className="home-grid">
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
              &nbsp;&nbsp;<b>twitter</b>&nbsp;&nbsp;
              <i class="fab fa-linkedin" />
              &nbsp;&nbsp;<b>LinkedIn</b>&nbsp;&nbsp;
              <i class="fab fa-github" />
              &nbsp;&nbsp;<b>Github</b>&nbsp;&nbsp;
            </h6>
            <p style={{ fontSize: "15px" }}>
              Welcome to my portfolio. I am <b>Chiranjeeb</b> and here I will
              talk about what I do, what I like and what not. Let me take you on
              a little trip. buckle up.
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
            <Button raised accent ripple>
              <i class="fas fa-arrow-down" />
              &nbsp;&nbsp;Download CV
            </Button>
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
          <Cell col={4} style={{ textAlign: "right" }}>
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
      </div>
    );
  }
}

export default Home;
