import React, { Component, lazy, Suspense } from "react";
import axios from "axios";
import Post from "./post";
//const Post = lazy(() => import("./post"));
class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    axios
      .get(`https://ichiranjeeb.com/wp-json/wp/v2/posts/?_embed`)
      .then(res => {
        this.setState({
          posts: res.data
        });
        console.log(this.state.posts);
      });
  };

  render() {
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
}

export default Blog;