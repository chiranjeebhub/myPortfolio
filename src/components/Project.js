import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

class Project extends Component {
  state = {};

  render() {
    return (
      <Card shadow={3} style={{ width: "300px", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: `url(${this.props.img}) center / cover`
          }}
        />
        <CardText>
          <b>{this.props.name}:</b> {this.props.description}
        </CardText>
        <CardActions border>
          <a href={this.props.github} target="_blank">
            <Button colored>
              <i class="fab fa-github" />
              &nbsp; Github
            </Button>
          </a>
          <a href={this.props.demo} target="_blank">
            <Button colored>
              <i class="fas fa-external-link-alt" />
              &nbsp; Demo
            </Button>
          </a>
        </CardActions>
      </Card>
    );
  }
}

export default Project;
