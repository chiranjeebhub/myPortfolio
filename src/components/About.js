import React, { Component } from "react";
import { Grid, Cell, Button, Tabs, Tab } from "react-mdl";
import Experience from "./Experience";
class About extends Component {
  state = { activeTab: 1 };

  toggleTabs = () => {
    if (this.state.activeTab === 0) {
      return (
        <Grid>
          <Cell col={2}>
            <h4>
              <img src="http://www.bput.ac.in/images/bput-logo.png" />
            </h4>
          </Cell>
          <Cell col={6}>
            <h4>
              <b>Bachelor of Technology</b>
            </h4>
            <p>
              @ MITS, Odisha
              <br /> Computer Science (2007-2011)
            </p>
            <p>
              <i class="fas fa-external-link-alt" />
              &nbsp;
              <a href="http://www.bput.ac.in/home.html" target="_blank">
                BPUT, Odisha
              </a>
            </p>
          </Cell>
        </Grid>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Experience
            year={"2017 - Present"}
            cname={"Rebrand Digital Pvt.Ltd"}
            position={"Application Developer/ Designer"}
            description={
              "Out of numerous professions out there, I choose Computer Science because of the unique learning opportunity it provides. Like an actor who gets to play different characters, we developers get to develop projects of various fields. That exposes us to a vast array of knowledge that a regular person never gets to learn in a lifetime."
            }
          />
          <hr />
          <Experience
            year={"2016 - 2017"}
            cname={"FNY Digital"}
            position={"Senior UI/UX Designer, Developer"}
            description={
              "Out of numerous professions out there, I choose Computer Science because of the unique learning opportunity it provides. Like an actor who gets to play different characters, we developers get to develop projects of various fields. That exposes us to a vast array of knowledge that a regular person never gets to learn in a lifetime."
            }
          />
          <hr />
          <Experience
            year={"2015 - 2016"}
            cname={"CTPL"}
            position={"UI/UX Design Lead"}
            description={
              "Out of numerous professions out there, I choose Computer Science because of the unique learning opportunity it provides. Like an actor who gets to play different characters, we developers get to develop projects of various fields. That exposes us to a vast array of knowledge that a regular person never gets to learn in a lifetime."
            }
          />
          <hr />
          <Experience
            year={"2012 - 2014"}
            cname={"Odisha 24x7"}
            position={"Research Analyst"}
            description={
              "Out of numerous professions out there, I choose Computer Science because of the unique learning opportunity it provides. Like an actor who gets to play different characters, we developers get to develop projects of various fields. That exposes us to a vast array of knowledge that a regular person never gets to learn in a lifetime."
            }
          />
        </div>
      );
    } else {
      return (
        <div>
          `<h1>Achievements</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <br />
        <Grid className="home-grid">
          <Cell col={1} />
          <Cell col={3} style={{ textAlign: "right" }}>
            <br />
            <img
              style={{ borderRadius: "5%", width: "300px", boxShadow: "5px" }}
              src={require("../me.jpg")}
            />
          </Cell>

          <Cell col={6} style={{ marginLeft: "40px", marginTop: "30px" }}>
            <h1>
              <b>Chiranjeeb Jena</b>
            </h1>

            <p style={{ fontSize: "15px" }}>
              Out of numerous professions out there, I choose Computer Science
              because of the unique learning opportunity it provides. Like an
              actor who gets to play different characters, we developers get to
              develop projects of various fields. That exposes us to a vast
              array of knowledge that a regular person never gets to learn in a
              lifetime.
            </p>
            <h6>
              <i class="fab fa-twitter" />
              &nbsp;&nbsp;<b>twitter</b>&nbsp;&nbsp;
              <i class="fab fa-linkedin" />
              &nbsp;&nbsp;<b>LinkedIn</b>&nbsp;&nbsp;
              <i class="fab fa-github" />
              &nbsp;&nbsp;<b>Github</b>&nbsp;&nbsp;
            </h6>
          </Cell>
          <Cell col={1} />
        </Grid>

        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Education</Tab>
          <Tab>Experience</Tab>
          <Tab>Achivements</Tab>
        </Tabs>
        <section>
          <div className="content">
            <Grid className="home-grid">
              <Cell col={2} />
              <Cell col={8}>{this.toggleTabs()}</Cell>
              <Cell col={2} />
            </Grid>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
