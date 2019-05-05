import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Button } from "react-mdl";
import Project from "./Project";
import Wproject from "./Wproject";
import Graphic from "./Graphic";

class Portfolio extends Component {
  state = {
    activeTab: 0
  };

  toggleTabs = () => {
    if (this.state.activeTab === 0) {
      return (
        <div style={{ textAlign: "center" }}>
          <Project
            img={
              "https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8.jpg"
            }
            name={"MovieDB"}
            description={
              "This is a Movie Database that fetches data from The Movie Database API. In this app, I have used React Router, Axios and Context API"
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
              "This is my portfolio that you are looking at right now. In this app, I have used React Router, Material UI and deployed it to GitHub Pages."
            }
            github={"https://github.com/chiranjeebhub/myPortfolio"}
            demo={"https://chiranjeebhub.github.io/myPortfolio"}
          />

          <Project
            img={
              "https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg"
            }
            name={"Text Generator"}
            description={
              "This is a lorem-ipsum text generator that I have creted for my personal use. It uses baconipsum API to generated words"
            }
            github={"https://github.com/chiranjeebhub/lorem"}
            demo={"https://chiranjeebhub.github.io/lorem/"}
          />
          <Project
            img={"https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy_s.gif"}
            name={"Gif Search"}
            description={
              "This is a GIF search engine with 10 result limit that is powered by Giphy API. Packages used: Bootstrap, Axios, gh-pages. Pending to-do: Pagination"
            }
            github={"https://github.com/chiranjeebhub/giphy"}
            demo={"https://chiranjeebhub.github.io/giphy/"}
          />
          <Project
            img={
              "http://ichiranjeeb.com/wp-content/uploads/2019/04/property.jpg"
            }
            name={"Cred Homes (Ongoing)"}
            description={
              "This is a property App built with React which is currently ongoing. Till Now I have used React Router, Bootstrap, Axios & Redux"
            }
            github={"https://github.com/chiranjeebhub/cdhomes_react"}
            demo={""}
          />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div style={{ textAlign: "center" }}>
            <Wproject
              img={"http://ichiranjeeb.com/wp-content/uploads/2019/04/2.png"}
              name={"My Blog"}
              description={
                "This is my personal blog build with WordPress. I have designed the site with Elementor Pro and some other frameworks."
              }
              demo={"https://ichiranjeeb.com"}
            />
            <Wproject
              img={
                "http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-582.png"
              }
              name={"Branding Wings"}
              description={
                "Developed the web presence of this startup that deals with web development, ORM, social media management and digital marketing"
              }
              demo={"https://brandingwings.com/"}
            />
            <Wproject
              img={
                "http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-903.png"
              }
              name={"Medflyvet"}
              description={
                "Medfly Healthcare provides healthcare solutions for your pets. I have developed their e-commerce platform to sell directly to consumers"
              }
              demo={"https://medflyvet.com"}
            />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Wproject
              img={
                "http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-267.png"
              }
              name={"Digital Aarambh"}
              description={
                "Developed the website of this startup that deals with political campaigns as well as digital marketing for both individuals and organizations"
              }
              demo={"https://digitalaarambh.com/"}
            />
            <Wproject
              img={
                "http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-809.png"
              }
              name={"Digialaya"}
              description={
                "Revamped the site of this organization that provides digital communication solutions such as toll free numbers for corporations."
              }
              demo={"http://digialaya.com/"}
            />
            <Wproject
              img={
                "http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-755.png"
              }
              name={"Views Connect"}
              description={
                "Views Connect is a blog designed to make the current and cutting edge technology news accessible to everyone"
              }
              demo={"http://viewsconnect.com/"}
            />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Wproject
              img={"http://shoppetcare.com/wp-content/uploads/2019/04/cat.jpg"}
              name={"Shop Petcare"}
              description={
                "I have developed their e-commerce platform for this firm so that they can sell their products directly to American consumers"
              }
              demo={"http://shoppetcare.com/"}
            />
            <Wproject
              img={
                "http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-816.png"
              }
              name={"E-Digital Warriors"}
              description={
                "Developed the website of this startup that deals with digital marketing for both individuals and organizations"
              }
              demo={"http://www.edigitalwarriors.com/"}
            />
            <Wproject
              img={
                "http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-827.png"
              }
              name={"Sai Art Group"}
              description={
                "Developed the website for Sai Art Group, a dance institute situated at Lewis Center, Ohio"
              }
              demo={"https://saiartgroup.com/"}
            />
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div style={{ textAlign: "center" }}>
          <Wproject
            img={"http://prahladsinghpatel.com/assets/images/3-2-2000x1328.png"}
            name={"Prahlad Singh Patel"}
            description={
              "I was fortunate enough to work with a reputed Member of Parliament. I have designed the official website as well as managed his social media profiles. "
            }
            demo={"http://prahladsinghpatel.com"}
          />
          <Wproject
            img={
              "http://ichiranjeeb.com/wp-content/uploads/2019/04/transcriptomics-s6-2000x833.jpg"
            }
            name={"Biomics Techno Solutions (in Maintainance)"}
            description={
              "It is one of the fastest developing bioinformatics research and training organizations and I have designed and develoed their website"
            }
            demo={"http://biomicstechnosolutions.com"}
          />
          <Wproject
            img={
              "http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-950.png"
            }
            name={"Rebrand Digital (in Maintainance)"}
            description={
              "This is the firm that I am working at. I have developed the V1.0 two years ago, now I am developing the V2.0 of the site. It will go live soon"
            }
            demo={"http://rebrandigital.com"}
          />
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }}>
          <Grid className="">
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
          <Tab>React</Tab>
          <Tab>Wordpress</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Graphics</Tab>
        </Tabs>
        <section>
          <div className="content">
            <Grid>
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
