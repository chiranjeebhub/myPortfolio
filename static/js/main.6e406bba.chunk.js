(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/me.90b51781.jpg"},111:function(e,t,a){e.exports=a.p+"static/media/logo.53206b6e.jpg"},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),i=a.n(l),o=(a(48),a(49),a(5)),c=a(6),s=a(8),m=a(7),h=a(9),p=a(1),d=a(10),u=a(16),b=(a(99),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={shown:!1},a.toggle=function(){a.setState({shown:!a.state.shown})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={display:this.state.shown?"block":"none"};this.state.shown;return r.a.createElement(p.Grid,{className:"home-grid",style:{height:"87vh"}},r.a.createElement(p.Cell,{col:2}),r.a.createElement(p.Cell,{col:4,style:{textAlign:"left"}},r.a.createElement("h1",{style:{fontSize:"80px"}},r.a.createElement("b",null,"Hello "),r.a.createElement(p.FABButton,{mini:!0,colored:!0,primary:!0,ripple:!0,onClick:this.toggle},r.a.createElement(p.Icon,{name:"share"}))),r.a.createElement("h6",{style:e},r.a.createElement("i",{class:"fab fa-twitter"}),r.a.createElement("a",{href:"https://twitter.com/ichiranjeeb",target:"_blank",style:{textDecoration:"none"}},"\xa0\xa0",r.a.createElement("b",null,"twitter")),"\xa0\xa0 ",r.a.createElement("i",{class:"fab fa-linkedin"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/ichiranjeeb",target:"_blank",style:{textDecoration:"none"}},"\xa0\xa0",r.a.createElement("b",null,"LinkedIn")),"\xa0\xa0",r.a.createElement("i",{class:"fab fa-github"}),r.a.createElement("a",{href:"https://github.com/chiranjeebhub",target:"_blank",style:{textDecoration:"none"}},"\xa0\xa0",r.a.createElement("b",null,"Github"))),r.a.createElement("p",{style:{fontSize:"15px"}},"Welcome to my portfolio. I am ",r.a.createElement("b",null,"Chiranjeeb")," and here I will talk about what I do, what I like and what not. Let me take you on a little trip. buckle up."),r.a.createElement("p",{style:{fontSize:"20px"}},r.a.createElement("b",null,"What I do ?")),r.a.createElement("ul",null,r.a.createElement("li",null,"React WebApp development"),r.a.createElement("li",null,"Wordpress Web Development"),r.a.createElement("li",null,"Graphic Designing")),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/portfolio"},r.a.createElement(p.Button,{raised:!0,accent:!0,ripple:!0},r.a.createElement("i",{class:"fab fa-github"}),"\xa0\xa0Projects I did")),"\xa0\xa0",r.a.createElement("br",null)),r.a.createElement(p.Cell,{col:4,style:{textAlign:"right"},id:"nav"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",{class:"fas fa-code",style:{fontSize:450,color:"gray",opacity:"0.2"}})),r.a.createElement(p.Cell,{col:2}))}}]),t}(n.Component)),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Card,{shadow:3,style:{width:"300px",margin:"20px",display:"inline-block"}},r.a.createElement(p.CardTitle,{style:{color:"#fff",height:"176px",background:"url(".concat(this.props.img,") center / cover")}}),r.a.createElement(p.CardText,null,r.a.createElement("b",null,this.props.name,":")," ",this.props.description),r.a.createElement(p.CardActions,{border:!0},r.a.createElement("a",{href:this.props.github,target:"_blank"},r.a.createElement(p.Button,{colored:!0},r.a.createElement("i",{class:"fab fa-github"}),"\xa0 Github"))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Card,{shadow:3,style:{width:"300px",margin:"20px",display:"inline-block"}},r.a.createElement(p.CardTitle,{style:{color:"#fff",height:"176px",background:"url(".concat(this.props.img,") center / cover")}}),r.a.createElement(p.CardText,null,r.a.createElement("b",null,this.props.name,":")," ",this.props.description),r.a.createElement(p.CardActions,{border:!0},r.a.createElement("a",{href:this.props.demo,target:"_blank"},r.a.createElement(p.Button,{colored:!0},r.a.createElement("i",{class:"fas fa-external-link-alt"}),"\xa0 Demo"))))}}]),t}(n.Component),f=(n.Component,function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={activeTab:0},a.toggleTabs=function(){return 0===a.state.activeTab?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(g,{img:"https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8.jpg",name:"MovieDB",description:"This is a Movie Database that fetches data from The Movie Database API. In this app, I have used React Router, Axios and Context API",github:"https://github.com/chiranjeebhub/MovieDB"}),r.a.createElement(g,{img:"https://cdn.oceanwp.org/wp-content/uploads/2017/07/portfolio-image.png",name:"Portfolio",description:"This is my portfolio that you are looking at right now. In this app, I have used React Router, Material UI and deployed it to GitHub Pages.",github:"https://github.com/chiranjeebhub/myPortfolio"}),r.a.createElement(g,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/property.jpg",name:"Cred Homes (Ongoing)",description:"This is a property App built with React which is currently ongoing. Till Now I have used React Router, Bootstrap, Axios & Redux",github:"https://github.com/chiranjeebhub/cdhomes_react"})):1===a.state.activeTab?r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E,{img:"https://ichiranjeeb.com/wp-content/uploads/2018/08/my-1024x1024.jpg",name:"My Blog",description:"This is my personal blog build with WordPress. I have designed the site with Elementor Pro and some other frameworks.",demo:"https://ichiranjeeb.com"}),r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-582.png",name:"Branding Wings",description:"Developed the web presence of this startup that deals with web development, ORM, social media management and digital marketing",demo:"https://brandingwings.com/"}),r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-903.png",name:"Medflyvet",description:"Medfly Healthcare provides healthcare solutions for your pets. I have developed their e-commerce platform to sell directly to consumers",demo:"https://medflyvet.com"})),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-267.png",name:"Digital Aarambh",description:"Developed the website of this startup that deals with political campaigns as well as digital marketing for both individuals and organizations",demo:"https://digitalaarambh.com/"}),r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-809.png",name:"Digialaya",description:"Revamped the site of this organization that provides digital communication solutions such as toll free numbers for corporations.",demo:"http://digialaya.com/"}),r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-755.png",name:"Views Connect",description:"Views Connect is a blog designed to make the current and cutting edge technology news accessible to everyone",demo:"http://viewsconnect.com/"})),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E,{img:"http://shoppetcare.com/wp-content/uploads/2019/04/cat.jpg",name:"Shop Petcare",description:"I have developed their e-commerce platform for this firm so that they can sell their products directly to American consumers",demo:"http://shoppetcare.com/"}),r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-816.png",name:"E-Digital Warriors",description:"Developed the website of this startup that deals with digital marketing for both individuals and organizations",demo:"http://www.edigitalwarriors.com/"}),r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-827.png",name:"Sai Art Group",description:"Developed the website for Sai Art Group, a dance institute situated at Lewis Center, Ohio",demo:"https://saiartgroup.com/"}))):2===a.state.activeTab?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E,{img:"http://prahladsinghpatel.com/assets/images/3-2-2000x1328.png",name:"Prahlad Singh Patel",description:"I was fortunate enough to work with a reputed Member of Parliament. I have designed the official website as well as managed his social media profiles. ",demo:"http://prahladsinghpatel.com"}),r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/transcriptomics-s6-2000x833.jpg",name:"Biomics Techno Solutions (in Maintainance)",description:"It is one of the fastest developing bioinformatics research and training organizations and I have develoed their website",demo:"http://biomicstechnosolutions.com"}),r.a.createElement(E,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-950.png",name:"Rebrand Digital (in Maintainance)",description:"This is the firm that I am working at. I ahve developed the V1.0 two years ago, now I am developing the V2.0 of the site. It will go live soon",demo:"http://prahladsinghpatel.com"})):r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(p.Grid,{className:""},r.a.createElement(p.Cell,{col:12},r.a.createElement("h1",{style:{fontSize:50,color:"gray",opacity:"0.3"}},r.a.createElement("b",null,"Visit my"," ",r.a.createElement("i",{class:"fab fa-behance",style:{color:"blue"}}),"hance profile")),r.a.createElement("a",{href:"https://www.behance.net/ichiranjeeb",target:"_blank"},r.a.createElement(p.Button,{raised:!0,accent:!0,ripple:!0},r.a.createElement("i",{class:"fas fa-external-link-alt",style:{color:"black"}}),"\xa0\xa0Behance Profile")))))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(p.Tab,null,"React"),r.a.createElement(p.Tab,null,"Wordpress"),r.a.createElement(p.Tab,null,"HTML/CSS"),r.a.createElement(p.Tab,null,"Graphics")),r.a.createElement("section",null,r.a.createElement("div",{className:"content"},r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:10},this.toggleTabs())))))}}]),t}(n.Component)),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:3},r.a.createElement("h4",null,r.a.createElement("b",null,this.props.year))),r.a.createElement(p.Cell,{col:9},r.a.createElement("h4",null,r.a.createElement("b",null,this.props.cname)),r.a.createElement("p",null,this.props.position),r.a.createElement("p",null,this.props.description)))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={activeTab:1},a.toggleTabs=function(){return 0===a.state.activeTab?r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:2},r.a.createElement("h4",null,r.a.createElement("img",{src:"http://www.bput.ac.in/images/bput-logo.png"}))),r.a.createElement(p.Cell,{col:6},r.a.createElement("h4",null,r.a.createElement("b",null,"Bachelor of Technology")),r.a.createElement("p",null,"@ MITS, Odisha",r.a.createElement("br",null)," Computer Science (2007-2011)"),r.a.createElement("p",null,r.a.createElement("i",{class:"fas fa-external-link-alt"}),"\xa0",r.a.createElement("a",{href:"http://www.bput.ac.in/home.html",target:"_blank"},"BPUT, Odisha")))):1===a.state.activeTab?r.a.createElement("div",null,r.a.createElement(w,{year:"2017 - Present",cname:"Rebrand Digital Pvt.Ltd",position:"Application Developer/ Designer",description:"Rebrand Digital, an innovative startup that deals with every aspect of the digital presence of an individual or an organization. I have joined the company little after it's inception and is responsible for designing and developing web-based applications as per the requirement of the client. It can be a SPA (Single Page App) build with React, a site built with CMS like Wordpress or a simple HTML5 and CSS3 based site. Apart from that, I am also looking after designing process."}),r.a.createElement("hr",null),r.a.createElement(w,{year:"2016 - 2017",cname:"FNY Digital",position:"Senior UI/UX Designer, Developer",description:"FNYDigital is a digital media startup that set out to revolutionalize Online Reputation Management.  I worked with the core team to kick start the process. I have worked there for a year and within that time period, I had the opportunity to work with national level leaders. "}),r.a.createElement("hr",null),r.a.createElement(w,{year:"2015 - 2016",cname:"CTPL",position:"Design Lead",description:"CTPL, a subsidiary of Krishna Maruti Group is a mega manufacturing facility that manufactures exclusively for Maruti Suzuki. I was hired to ease the internal work process by designing and developing corporate web apps for internal use"}),r.a.createElement("hr",null),r.a.createElement(w,{year:"2012 - 2014",cname:"Odisha 24x7",position:"Research Analyst",description:"Odisha 24x7 was a directory service initiative a lot like just dial with a localization spin on it. I was hired to design the customer interaction flow as well as the UI of the site."})):r.a.createElement("div",null,"`",r.a.createElement("h1",null,"Achievements"))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.Grid,{className:"about-grid"},r.a.createElement(p.Cell,{col:1,id:"nav"}),r.a.createElement(p.Cell,{col:3,style:{textAlign:"right"}},r.a.createElement("img",{style:{borderRadius:"5%",width:"300px",boxShadow:"5px"},src:a(110),id:"nav"})),r.a.createElement(p.Cell,{col:6,style:{marginLeft:"40px",marginTop:"10px"}},r.a.createElement("h1",{id:"name"},r.a.createElement("b",null,"Chiranjeeb Jena")),r.a.createElement("p",{style:{fontSize:"15px"}},"Out of numerous professions out there, I choose Computer Science because of the unique learning opportunity it provides. Like an actor who gets to play different characters, we developers get to develop projects in various fields. That exposes us to a vast array of knowledge that a regular person never gets to learn in a lifetime."),r.a.createElement("h6",null,r.a.createElement("i",{class:"fab fa-twitter"}),r.a.createElement("a",{href:"https://twitter.com/ichiranjeeb",target:"_blank",style:{textDecoration:"none",color:"white"}},"\xa0\xa0",r.a.createElement("b",null,"twitter")),"\xa0\xa0 ",r.a.createElement("i",{class:"fab fa-linkedin"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/ichiranjeeb",target:"_blank",style:{textDecoration:"none",color:"white"}},"\xa0\xa0",r.a.createElement("b",null,"LinkedIn")),"\xa0\xa0",r.a.createElement("i",{class:"fab fa-github"}),r.a.createElement("a",{href:"https://github.com/chiranjeebhub",target:"_blank",style:{textDecoration:"none",color:"white"}},"\xa0\xa0",r.a.createElement("b",null,"Github")))),r.a.createElement(p.Cell,{col:1})),r.a.createElement(p.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(p.Tab,null,"Education"),r.a.createElement(p.Tab,null,"Experience"),r.a.createElement(p.Tab,null,"Achivements")),r.a.createElement("section",null,r.a.createElement("div",{className:"content"},r.a.createElement(p.Grid,{className:""},r.a.createElement(p.Cell,{col:2}),r.a.createElement(p.Cell,{col:8},this.toggleTabs()),r.a.createElement(p.Cell,{col:2})))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100vh",position:"relative"}},r.a.createElement(p.Layout,{fixedHeader:!0},r.a.createElement(p.Header,{title:r.a.createElement("span",null,r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{style:{borderRadius:"50%",width:"40px"},src:a(111)})),r.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("span",{style:{color:"white"}},"\xa0\xa0Chiranjeeb Jena\xa0")),r.a.createElement("span",{style:{color:"#ddd"}},this.props.history.location.pathname))},r.a.createElement(p.Navigation,{id:"nav"},r.a.createElement(d.b,{to:"/"},"Home"),r.a.createElement(d.b,{to:"/resume"},"Resume"),r.a.createElement(d.b,{to:"/portfolio"},"Portfolio"),r.a.createElement("a",{href:"https://ichiranjeeb.com",target:"_blank"},"Blog"))),r.a.createElement(p.Drawer,{title:"Chiranjeeb Jena"},r.a.createElement(p.Navigation,null,r.a.createElement(d.b,{to:"/"},r.a.createElement("i",{class:"fas fa-house-damage"})," Home"),r.a.createElement(d.b,{to:"/resume"},r.a.createElement("i",{class:"far fa-address-card"})," Resume"),r.a.createElement(d.b,{to:"/portfolio"},r.a.createElement("i",{class:"fas fa-code-branch"})," Portfolio"),r.a.createElement("a",{href:"https://ichiranjeeb.com",target:"_blank"},r.a.createElement("i",{class:"fas fa-rss"})," Blog"))),r.a.createElement(p.Content,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:b}),r.a.createElement(u.a,{path:"/portfolio",component:f}),r.a.createElement(u.a,{path:"/resume",component:v})))))}}]),t}(n.Component),j=Object(u.e)(y);var k=function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(112),a(113);i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){e.exports=a(114)},48:function(e,t,a){},49:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.6e406bba.chunk.js.map