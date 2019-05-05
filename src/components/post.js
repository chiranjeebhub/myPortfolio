import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {};

  decodeHtml = html => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

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
          <b>{this.decodeHtml(this.props.title)}</b>
        </CardText>
        <CardActions border>
          {/* <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <Button colored>
              <i className="fas fa-external-link-alt" />
              &nbsp; Visit Post
            </Button>
          </a> */}
          <Link to={`/${this.props.id}`}>
            <Button colored>
              <i className="fas fa-external-link-alt" />
              &nbsp; Visit Post
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default Post;
