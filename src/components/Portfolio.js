import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Button } from "react-mdl";
import Project from "./Project";
import Graphic from "./Graphic";

class Portfolio extends Component {
  state = {
    activeTab: 0
  };

  toggleTabs = () => {
    if (this.state.activeTab === 0) {
      return (
        <div style={{ display: "flex" }}>
          <Project
            img={
              "https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8.jpg"
            }
            name={"MovieDB"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
            }
            github={"https://github.com/chiranjeebhub/MovieDB"}
            demo={""}
          />
          <Project
            img={
              "https://cdn.oceanwp.org/wp-content/uploads/2017/07/portfolio-image.png"
            }
            name={"Portfolio"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
            }
            github={"https://github.com/chiranjeebhub/portfolio"}
            demo={""}
          />
          <Project
            img={
              "https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8.jpg"
            }
            name={"MovieDB"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
            }
            github={"https://github.com/chiranjeebhub/portfolio"}
            demo={""}
          />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div style={{ display: "flex" }}>
            <Project
              img={
                "https://ichiranjeeb.com/wp-content/uploads/2018/08/my-1024x1024.jpg"
              }
              name={"www.ichiranjeeb.com"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
              }
              github={"https://github.com/chiranjeebhub/portfolio"}
              demo={"https://ichiranjeeb.com"}
            />
            <Project
              img={
                "https://brandingwings.com/wp-content/uploads/2018/09/rocket.gif"
              }
              name={"Branding Wings"}
              description={
                "A startup that deals with web development, online reputation management, social media management and digital marketing"
              }
              github={"https://github.com/chiranjeebhub/portfolio"}
              demo={"https://brandingwings.com/"}
            />
            <Project
              img={
                "https://medflyvet.com/wp-content/uploads/2019/02/about5_new25_n.png"
              }
              name={"Medflyvet"}
              description={
                "MovieDB: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
              }
              github={"https://github.com/chiranjeebhub/portfolio"}
              demo={"https://medflyvet.com"}
            />
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <Project
              img={
                "https://ichiranjeeb.com/wp-content/uploads/2018/08/my-1024x1024.jpg"
              }
              name={"www.ichiranjeeb.com"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
              }
              github={"https://github.com/chiranjeebhub/portfolio"}
              demo={"https://ichiranjeeb.com"}
            />
            <Project
              img={
                "https://brandingwings.com/wp-content/uploads/2018/09/rocket.gif"
              }
              name={"Branding Wings"}
              description={
                "A startup that deals with web development, online reputation management, social media management and digital marketing"
              }
              github={"https://github.com/chiranjeebhub/portfolio"}
              demo={"https://brandingwings.com/"}
            />
            <Project
              img={
                "https://medflyvet.com/wp-content/uploads/2019/02/about5_new25_n.png"
              }
              name={"Medflyvet"}
              description={
                "MovieDB: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
              }
              github={"https://github.com/chiranjeebhub/portfolio"}
              demo={"https://medflyvet.com"}
            />
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div style={{ display: "flex" }}>
          <Grid className="home-grid">
            <Cell col={12}>
              <h1 style={{ fontSize: 50, color: "gray", opacity: "0.3" }}>
                <b>
                  Visit my{" "}
                  <i class="fab fa-behance" style={{ color: "blue" }} />
                  hance profile
                </b>
              </h1>
              <a href="https://www.behance.net/ichiranjeeb" target="_blank">
                <Button raised accent ripple>
                  <i
                    class="fas fa-external-link-alt"
                    style={{ color: "black" }}
                  />
                  &nbsp;&nbsp;Behance Profile
                </Button>
              </a>
            </Cell>
          </Grid>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React Projects</Tab>
          <Tab>Wordpress Projects</Tab>
          <Tab>Graphics</Tab>
        </Tabs>
        <section>
          <div className="content">
            <Grid className="home-grid">
              <Cell col={1} />
              <Cell col={10}>{this.toggleTabs()}</Cell>
              <Cell col={1} />
            </Grid>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
