(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,n){"use strict";n.r(t);var a=n(6),s=n(7),i=n(9),c=n(8),l=n(10),o=n(0),r=n.n(o),u=n(120),d=n.n(u),p=Object(o.lazy)(function(){return n.e(5).then(n.bind(null,140))}),m=function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={posts:[]},n.getPosts=function(){d.a.get("https://ichiranjeeb.com/wp-json/wp/v2/posts/?_embed").then(function(e){n.setState({posts:e.data}),console.log(n.state.posts)})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){return r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",{className:"loader"})},r.a.createElement("div",{style:{textAlign:"center"}},this.state.posts.map(function(e){return r.a.createElement("div",{style:{textAlign:"center",alignItems:"center",display:"inline-block",justifyContent:"center"},key:e.id},r.a.createElement(p,{title:e.title.rendered,link:e.link,img:e._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}))})))}}]),t}(o.Component);t.default=m}}]);
//# sourceMappingURL=4.a69c5b91.chunk.js.map