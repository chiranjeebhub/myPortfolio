import React, { Component } from "react";
import { Grid, Cell, Tabs, Tab } from "react-mdl";
import Experience from "./Experience";
class About extends Component {
  state = { activeTab: 1 };

  toggleTabs = () => {
    if (this.state.activeTab === 0) {
      return (
        <Grid>
          <Cell col={2}>
            <h4>
              <img
                src="http://www.bput.ac.in/images/bput-logo.png"
                alt="bput"
              />
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
              <a
                href="http://www.bput.ac.in/home.html"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            cname={"Rebrand Digital"}
            position={"Application Developer/ Designer"}
            description={
              "Rebrand Digital, an innovative startup that deals with every aspect of the digital presence of an individual or an organization. I have joined the company little after it's inception and is responsible for designing and developing web-based applications as per the requirement of the client. It can be a SPA (Single Page App) build with React, a site built with CMS like Wordpress or a simple HTML5 and CSS3 based site. Apart from that, I am also looking after designing process."
            }
          />
          <hr />
          <Experience
            year={"2016 - 2017"}
            cname={"FNY Digital"}
            position={"Senior UI/UX Designer, Developer"}
            description={
              "FNYDigital is a digital media startup that set out to revolutionalize Online Reputation Management.  I worked with the core team to kick start the process. I have worked there for a year and within that time period, I had the opportunity to work with national level leaders. "
            }
          />
          <hr />
          <Experience
            year={"2015 - 2016"}
            cname={"CTPL"}
            position={"Design Lead"}
            description={
              "CTPL, a subsidiary of Krishna Maruti Group is a mega manufacturing facility that manufactures exclusively for Maruti Suzuki. I was hired to ease the internal work process by designing and developing corporate web apps for internal use"
            }
          />
          <hr />
          <Experience
            year={"2012 - 2014"}
            cname={"Odisha 24x7"}
            position={"Research Analyst"}
            description={
              "Odisha 24x7 was a directory service initiative a lot like just dial with a localization spin on it. I was hired to design the customer interaction flow as well as the UI of the site."
            }
          />
        </div>
      );
    } else {
      return (
        <div style={{ width: "90%" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <i class="far fa-hand-point-right" /> As an influencer, I was
              working with <b>Nawzil Najeeb</b> (Marketing Manager, Microsoft
              Kuwait) as a freelancer to promote Windows Phone 8.1 on Facebook.
            </li>
            <hr />
            <li>
              <i class="far fa-hand-point-right" /> As a Digital Marketer, I
              have worked with famous figures like
              <b> Prahlad Singh Patel</b>, <b>Rajiv Pratap Rudy</b> and
              <b> Shahnawaz Hussain</b>.
            </li>
            <hr />
            <li>
              <i class="far fa-hand-point-right" /> I have organized{" "}
              <b>Hon. Prime minister Shri Narendra Modi</b>’s direct
              communication with the pubic of Madhya Pradesh on 10th Oct 2018
            </li>
          </ul>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Grid className="about-grid">
          <Cell col={1} id="nav" />
          <Cell col={3} style={{ textAlign: "right" }}>
            <img
              style={{ borderRadius: "5%", width: "300px", boxShadow: "5px" }}
              src={require("../me.jpg")}
              alt="me"
              id="nav"
            />
          </Cell>

          <Cell col={6} style={{ marginLeft: "40px", marginTop: "0px" }}>
            <h1 id="name">
              <b>Chiranjeeb Jena</b>
            </h1>

            <p style={{ fontSize: "17px", textAlign: "justify" }}>
              Out of numerous professions out there, I choose Computer Science
              because of the unique learning opportunity it provides. Like an
              actor who gets to play different characters, we developers get to
              develop projects in various fields. That exposes us to a vast
              array of knowledge that a regular person never gets to learn in a
              lifetime.
            </p>
            <h6>
              <i class="fas fa-envelope-open-text" />
              <a
                href="mailto:chiranjib.jena@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                &nbsp;&nbsp;chiranjib.jena@gmail.com
              </a>
              <br />
              <i class="fas fa-phone-square" />
              &nbsp;
              <a
                href="tel:07978215185"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px"
                }}
              >
                &nbsp;&nbsp;+91-7978215185
              </a>
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
            <Grid className="">
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
