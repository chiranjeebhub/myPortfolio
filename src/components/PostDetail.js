import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import axios from "axios";
import loadjs from "loadjs";
//import { FacebookProvider, Comments } from "react-facebook";

class PostDetail extends Component {
  state = {
    title: "",
    body: "",
    img: "",
    link: ""
  };

  componentDidMount() {
    this.getPostDetail();
    loadjs("https://static.addtoany.com/menu/page.js", () => {});
  }

  getPostDetail = () => {
    const id = this.props.match.params.id;
    console.log(this.props.match);
    axios
      .get(`https://ichiranjeeb.com/wp-json/wp/v2/posts/${id}?_embed`)
      .then(res => {
        this.setState({
          title: res.data.title.rendered,
          body: res.data.content.rendered,
          date: res.data.date,
          link: res.data.link,
          img:
            res.data._embedded["wp:featuredmedia"]["0"].media_details.sizes.full
              .source_url
        });
        console.log(res.data);
        console.log(this.state.img);
      });
  };

  decodeHtml = html => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  render() {
    return (
      <div>
        <Card
          shadow={0}
          style={{ width: "70%", margin: "auto", marginTop: "30px" }}
        >
          <CardTitle
            style={{
              color: "#fff",
              height: "50vh",
              background: `url(${this.state.img}) center / cover`
            }}
          />
          <CardText>
            <h4>{this.state.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: this.state.body }} />
          </CardText>

          <CardActions border>
            <Link to="/blog">
              <Button colored>
                <i className="fas fa-arrow-left" /> &nbsp;Back
              </Button>
            </Link>
            <a href={this.state.link} target="_blank" rel="noopener noreferrer">
              <Button colored style={{ float: "right" }}>
                <i className="fas fa-external-link-alt" /> Visit Source
              </Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" className="a2a_dd" />
          </CardMenu>
        </Card>
        {/* <div style={{ textAlign: "center" }}>
          <FacebookProvider appId="640404173094203">
            <Comments href="http://www.facebook.com" />
          </FacebookProvider>
        </div> */}
      </div>
    );
  }
}

export default withRouter(PostDetail);
