import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={3}>
          <h4>
            <b>{this.props.year}</b>
          </h4>
        </Cell>
        <Cell col={9}>
          <h4>
            <b>{this.props.cname}</b>
          </h4>
          <p>{this.props.position}</p>
          <p>{this.props.description}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
