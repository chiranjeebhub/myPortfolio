import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

class Post extends Component {
  state = {};

  render() {
    return (
      <Card
        shadow={3}
        style={{ width: "300px", margin: "20px", display: "inline-block" }}
      >
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: `url(${this.props.img}) center / cover`
          }}
        />
        <CardText>
          <b>{this.props.title}</b>
        </CardText>
        <CardActions border>
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <Button colored>
              <i className="fas fa-external-link-alt" />
              &nbsp; Visit Post
            </Button>
          </a>
        </CardActions>
      </Card>
    );
  }
}

export default Post;
