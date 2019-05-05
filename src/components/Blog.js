import React, { Component } from "react";
import axios from "axios";
import Post from "./post";
//const Post = lazy(() => import("./post"));
class Blog extends Component {
  state = {
    posts: [],
    loading: false
  };

  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    axios
      .get(`https://ichiranjeeb.com/wp-json/wp/v2/posts/?_embed`)
      .then(res => {
        this.setState({
          posts: res.data,
          loading: true
        });
        console.log(this.state.posts);
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <div style={{ textAlign: "center" }}>
          {this.state.posts.map(post => {
            return (
              <div
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  display: "inline-block",
                  justifyContent: "center"
                }}
                key={post.id}
              >
                <Post
                  id={post.id}
                  title={post.title.rendered}
                  link={post.link}
                  img={
                    post._embedded["wp:featuredmedia"]["0"].media_details.sizes
                      .full.source_url
                  }
                />
              </div>
            );
          })}
        </div>
      );
    }
    return <div className="loader" />;
  }
}

export default Blog;
