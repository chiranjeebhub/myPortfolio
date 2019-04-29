import React, { Component } from "react";
import { Card, CardTitle, CardActions } from "react-mdl";

class Graphic extends Component {
  render() {
    return (
      <Card
        shadow={0}
        style={{
          width: "256px",
          height: "256px",
          background:
            "url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover",
          margin: "auto"
        }}
      >
        <CardTitle expand />
        <CardActions
          style={{
            height: "52px",
            padding: "16px",
            background: "rgba(0,0,0,0.2)"
          }}
        >
          <span style={{ color: "#fff", fontSize: "14px", fontWeight: "500" }}>
            Image.jpg
          </span>
        </CardActions>
      </Card>
    );
  }
}

export default Graphic;
