(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/me.90b51781.jpg"},109:function(e,t,a){e.exports=a.p+"static/media/logo.53206b6e.jpg"},112:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),i=a.n(r),o=(a(49),a(50),a(5)),c=a(6),s=a(8),m=a(7),h=a(9),p=a(1),d=a(11),u=a(16),b=a(41),g=a.n(b),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={shown:!0},a.componentDidMount=function(){g()("https://static.addtoany.com/menu/page.js",function(){})},a.toggle=function(){a.setState({shown:!a.state.shown})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={display:this.state.shown?"block":"none"};this.state.shown;return l.a.createElement(p.Grid,{className:"home-grid",style:{height:"87vh"}},l.a.createElement(p.Cell,{col:2}),l.a.createElement(p.Cell,{col:4,style:{textAlign:"left"}},l.a.createElement("h1",{style:{fontSize:"80px"}},l.a.createElement("b",null,"Hello "),l.a.createElement("a",{class:"a2a_dd",href:"#"},l.a.createElement(p.FABButton,{mini:!0,colored:!0,primary:!0,ripple:!0,onClick:this.toggle},l.a.createElement(p.Icon,{name:"share"})))),l.a.createElement("h6",{style:e},l.a.createElement("i",{class:"fab fa-twitter"}),l.a.createElement("a",{href:"https://twitter.com/ichiranjeeb",target:"_blank",style:{textDecoration:"none"}},"\xa0\xa0",l.a.createElement("b",null,"twitter")),"\xa0\xa0 ",l.a.createElement("i",{class:"fab fa-linkedin"}),l.a.createElement("a",{href:"https://www.linkedin.com/in/ichiranjeeb",target:"_blank",style:{textDecoration:"none"}},"\xa0\xa0",l.a.createElement("b",null,"LinkedIn")),"\xa0\xa0",l.a.createElement("i",{class:"fab fa-github"}),l.a.createElement("a",{href:"https://github.com/chiranjeebhub",target:"_blank",style:{textDecoration:"none"}},"\xa0\xa0",l.a.createElement("b",null,"Github"))),l.a.createElement("p",{style:{fontSize:"15px"}},"Welcome to my portfolio. I am ",l.a.createElement("b",null,"Chiranjeeb")," and here I will talk about what I do, what I like and what not. Let me take you on a little trip. buckle up."),l.a.createElement("p",{style:{fontSize:"20px"}},l.a.createElement("b",null,"What I do ?")),l.a.createElement("ul",null,l.a.createElement("li",null,"React WebApp development"),l.a.createElement("li",null,"Wordpress Web Development"),l.a.createElement("li",null,"Graphic Designing")),l.a.createElement("br",null),l.a.createElement(d.b,{to:"/portfolio"},l.a.createElement(p.Button,{raised:!0,accent:!0,ripple:!0},l.a.createElement("i",{class:"fab fa-github"}),"\xa0\xa0Projects I did")),"\xa0\xa0",l.a.createElement("br",null)),l.a.createElement(p.Cell,{col:4,style:{textAlign:"right"},id:"nav"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",{class:"fas fa-code",style:{fontSize:450,color:"gray",opacity:"0.2"}})),l.a.createElement(p.Cell,{col:2}))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(p.Card,{shadow:3,style:{width:"300px",margin:"20px",display:"inline-block"}},l.a.createElement(p.CardTitle,{style:{color:"#fff",height:"176px",background:"url(".concat(this.props.img,") center / cover")}}),l.a.createElement(p.CardText,null,l.a.createElement("b",null,this.props.name,":")," ",this.props.description),l.a.createElement(p.CardActions,{border:!0},l.a.createElement("a",{href:this.props.github,target:"_blank"},l.a.createElement(p.Button,{colored:!0},l.a.createElement("i",{class:"fab fa-github"}),"\xa0 Github"))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(p.Card,{shadow:3,style:{width:"300px",margin:"20px",display:"inline-block"}},l.a.createElement(p.CardTitle,{style:{color:"#fff",height:"176px",background:"url(".concat(this.props.img,") center / cover")}}),l.a.createElement(p.CardText,null,l.a.createElement("b",null,this.props.name,":")," ",this.props.description),l.a.createElement(p.CardActions,{border:!0},l.a.createElement("a",{href:this.props.demo,target:"_blank"},l.a.createElement(p.Button,{colored:!0},l.a.createElement("i",{class:"fas fa-external-link-alt"}),"\xa0 Demo"))))}}]),t}(n.Component),v=(n.Component,function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:0},a.toggleTabs=function(){return 0===a.state.activeTab?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(f,{img:"https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8.jpg",name:"MovieDB",description:"This is a Movie Database that fetches data from The Movie Database API. In this app, I have used React Router, Axios and Context API",github:"https://github.com/chiranjeebhub/MovieDB"}),l.a.createElement(f,{img:"https://cdn.oceanwp.org/wp-content/uploads/2017/07/portfolio-image.png",name:"Portfolio",description:"This is my portfolio that you are looking at right now. In this app, I have used React Router, Material UI and deployed it to GitHub Pages.",github:"https://github.com/chiranjeebhub/myPortfolio"}),l.a.createElement(f,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/property.jpg",name:"Cred Homes (Ongoing)",description:"This is a property App built with React which is currently ongoing. Till Now I have used React Router, Bootstrap, Axios & Redux",github:"https://github.com/chiranjeebhub/cdhomes_react"})):1===a.state.activeTab?l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(w,{img:"https://ichiranjeeb.com/wp-content/uploads/2018/08/my-1024x1024.jpg",name:"My Blog",description:"This is my personal blog build with WordPress. I have designed the site with Elementor Pro and some other frameworks.",demo:"https://ichiranjeeb.com"}),l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-582.png",name:"Branding Wings",description:"Developed the web presence of this startup that deals with web development, ORM, social media management and digital marketing",demo:"https://brandingwings.com/"}),l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-903.png",name:"Medflyvet",description:"Medfly Healthcare provides healthcare solutions for your pets. I have developed their e-commerce platform to sell directly to consumers",demo:"https://medflyvet.com"})),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-267.png",name:"Digital Aarambh",description:"Developed the website of this startup that deals with political campaigns as well as digital marketing for both individuals and organizations",demo:"https://digitalaarambh.com/"}),l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-809.png",name:"Digialaya",description:"Revamped the site of this organization that provides digital communication solutions such as toll free numbers for corporations.",demo:"http://digialaya.com/"}),l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-755.png",name:"Views Connect",description:"Views Connect is a blog designed to make the current and cutting edge technology news accessible to everyone",demo:"http://viewsconnect.com/"})),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(w,{img:"http://shoppetcare.com/wp-content/uploads/2019/04/cat.jpg",name:"Shop Petcare",description:"I have developed their e-commerce platform for this firm so that they can sell their products directly to American consumers",demo:"http://shoppetcare.com/"}),l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-816.png",name:"E-Digital Warriors",description:"Developed the website of this startup that deals with digital marketing for both individuals and organizations",demo:"http://www.edigitalwarriors.com/"}),l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-827.png",name:"Sai Art Group",description:"Developed the website for Sai Art Group, a dance institute situated at Lewis Center, Ohio",demo:"https://saiartgroup.com/"}))):2===a.state.activeTab?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(w,{img:"http://prahladsinghpatel.com/assets/images/3-2-2000x1328.png",name:"Prahlad Singh Patel",description:"I was fortunate enough to work with a reputed Member of Parliament. I have designed the official website as well as managed his social media profiles. ",demo:"http://prahladsinghpatel.com"}),l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/transcriptomics-s6-2000x833.jpg",name:"Biomics Techno Solutions (in Maintainance)",description:"It is one of the fastest developing bioinformatics research and training organizations and I have designed and develoed their website",demo:"http://biomicstechnosolutions.com"}),l.a.createElement(w,{img:"http://ichiranjeeb.com/wp-content/uploads/2019/04/Screenshot-950.png",name:"Rebrand Digital (in Maintainance)",description:"This is the firm that I am working at. I have developed the V1.0 two years ago, now I am developing the V2.0 of the site. It will go live soon",demo:"http://rebrandigital.com"})):l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(p.Grid,{className:""},l.a.createElement(p.Cell,{col:12},l.a.createElement("h1",{style:{fontSize:50,color:"gray",opacity:"0.3"}},l.a.createElement("b",null,"Visit my"," ",l.a.createElement("i",{class:"fab fa-behance",style:{color:"blue"}}),"hance profile")),l.a.createElement("a",{href:"https://www.behance.net/ichiranjeeb",target:"_blank"},l.a.createElement(p.Button,{raised:!0,accent:!0,ripple:!0},l.a.createElement("i",{class:"fas fa-external-link-alt",style:{color:"black"}}),"\xa0\xa0Behance Profile")))))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},l.a.createElement(p.Tab,null,"React"),l.a.createElement(p.Tab,null,"Wordpress"),l.a.createElement(p.Tab,null,"HTML/CSS"),l.a.createElement(p.Tab,null,"Graphics")),l.a.createElement("section",null,l.a.createElement("div",{className:"content"},l.a.createElement(p.Grid,null,l.a.createElement(p.Cell,{col:1}),l.a.createElement(p.Cell,{col:10},this.toggleTabs()),l.a.createElement(p.Cell,{col:1})))))}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(p.Grid,null,l.a.createElement(p.Cell,{col:3},l.a.createElement("h4",null,l.a.createElement("b",null,this.props.year))),l.a.createElement(p.Cell,{col:9},l.a.createElement("h4",null,l.a.createElement("b",null,this.props.cname)),l.a.createElement("p",null,this.props.position),l.a.createElement("p",null,this.props.description)))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:1},a.toggleTabs=function(){return 0===a.state.activeTab?l.a.createElement(p.Grid,null,l.a.createElement(p.Cell,{col:2},l.a.createElement("h4",null,l.a.createElement("img",{src:"http://www.bput.ac.in/images/bput-logo.png"}))),l.a.createElement(p.Cell,{col:6},l.a.createElement("h4",null,l.a.createElement("b",null,"Bachelor of Technology")),l.a.createElement("p",null,"@ MITS, Odisha",l.a.createElement("br",null)," Computer Science (2007-2011)"),l.a.createElement("p",null,l.a.createElement("i",{class:"fas fa-external-link-alt"}),"\xa0",l.a.createElement("a",{href:"http://www.bput.ac.in/home.html",target:"_blank"},"BPUT, Odisha")))):1===a.state.activeTab?l.a.createElement("div",null,l.a.createElement(y,{year:"2017 - Present",cname:"Rebrand Digital",position:"Application Developer/ Designer",description:"Rebrand Digital, an innovative startup that deals with every aspect of the digital presence of an individual or an organization. I have joined the company little after it's inception and is responsible for designing and developing web-based applications as per the requirement of the client. It can be a SPA (Single Page App) build with React, a site built with CMS like Wordpress or a simple HTML5 and CSS3 based site. Apart from that, I am also looking after designing process."}),l.a.createElement("hr",null),l.a.createElement(y,{year:"2016 - 2017",cname:"FNY Digital",position:"Senior UI/UX Designer, Developer",description:"FNYDigital is a digital media startup that set out to revolutionalize Online Reputation Management.  I worked with the core team to kick start the process. I have worked there for a year and within that time period, I had the opportunity to work with national level leaders. "}),l.a.createElement("hr",null),l.a.createElement(y,{year:"2015 - 2016",cname:"CTPL",position:"Design Lead",description:"CTPL, a subsidiary of Krishna Maruti Group is a mega manufacturing facility that manufactures exclusively for Maruti Suzuki. I was hired to ease the internal work process by designing and developing corporate web apps for internal use"}),l.a.createElement("hr",null),l.a.createElement(y,{year:"2012 - 2014",cname:"Odisha 24x7",position:"Research Analyst",description:"Odisha 24x7 was a directory service initiative a lot like just dial with a localization spin on it. I was hired to design the customer interaction flow as well as the UI of the site."})):l.a.createElement("div",{style:{width:"90%"}},l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("i",{class:"far fa-hand-point-right"})," As an influencer, I was working with ",l.a.createElement("b",null,"Nawzil Najeeb")," (Marketing Manager, Microsoft Kuwait) as a freelancer to promote Windows Phone 8.1 on Facebook."),l.a.createElement("hr",null),l.a.createElement("li",null,l.a.createElement("i",{class:"far fa-hand-point-right"})," As a Digital Marketer, I have worked with famous figures like",l.a.createElement("b",null," Prahlad Singh Patel"),", ",l.a.createElement("b",null,"Rajiv Pratap Rudy")," and",l.a.createElement("b",null," Shahnawaz Hussain"),"."),l.a.createElement("hr",null),l.a.createElement("li",null,l.a.createElement("i",{class:"far fa-hand-point-right"})," I have organized"," ",l.a.createElement("b",null,"Hon. Prime minister Shri Narendra Modi"),"\u2019s direct communication with the pubic of Madhya Pradesh on 10th Oct 2018")))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p.Grid,{className:"about-grid"},l.a.createElement(p.Cell,{col:1,id:"nav"}),l.a.createElement(p.Cell,{col:3,style:{textAlign:"right"}},l.a.createElement("img",{style:{borderRadius:"5%",width:"300px",boxShadow:"5px"},src:a(108),id:"nav"})),l.a.createElement(p.Cell,{col:6,style:{marginLeft:"40px",marginTop:"10px"}},l.a.createElement("h1",{id:"name"},l.a.createElement("b",null,"Chiranjeeb Jena")),l.a.createElement("p",{style:{fontSize:"15px"}},"Out of numerous professions out there, I choose Computer Science because of the unique learning opportunity it provides. Like an actor who gets to play different characters, we developers get to develop projects in various fields. That exposes us to a vast array of knowledge that a regular person never gets to learn in a lifetime."),l.a.createElement("h6",null,l.a.createElement("i",{class:"fab fa-twitter"}),l.a.createElement("a",{href:"https://twitter.com/ichiranjeeb",target:"_blank",style:{textDecoration:"none",color:"white"}},"\xa0\xa0",l.a.createElement("b",null,"twitter")),"\xa0\xa0 ",l.a.createElement("i",{class:"fab fa-linkedin"}),l.a.createElement("a",{href:"https://www.linkedin.com/in/ichiranjeeb",target:"_blank",style:{textDecoration:"none",color:"white"}},"\xa0\xa0",l.a.createElement("b",null,"LinkedIn")),"\xa0\xa0",l.a.createElement("i",{class:"fab fa-github"}),l.a.createElement("a",{href:"https://github.com/chiranjeebhub",target:"_blank",style:{textDecoration:"none",color:"white"}},"\xa0\xa0",l.a.createElement("b",null,"Github")))),l.a.createElement(p.Cell,{col:1})),l.a.createElement(p.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},l.a.createElement(p.Tab,null,"Education"),l.a.createElement(p.Tab,null,"Experience"),l.a.createElement(p.Tab,null,"Achivements")),l.a.createElement("section",null,l.a.createElement("div",{className:"content"},l.a.createElement(p.Grid,{className:""},l.a.createElement(p.Cell,{col:2}),l.a.createElement(p.Cell,{col:8},this.toggleTabs()),l.a.createElement(p.Cell,{col:2})))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{height:"100vh",position:"relative"}},l.a.createElement(p.Layout,{fixedHeader:!0},l.a.createElement(p.Header,{title:l.a.createElement("span",null,l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{style:{borderRadius:"50%",width:"40px"},src:a(109)})),l.a.createElement(d.b,{to:"/",style:{textDecoration:"none"}},l.a.createElement("span",{style:{color:"white"}},"\xa0\xa0Chiranjeeb Jena\xa0")),l.a.createElement("span",{style:{color:"#ddd"}},this.props.history.location.pathname))},l.a.createElement(p.Navigation,{id:"nav"},l.a.createElement(d.b,{to:"/"},"Home"),l.a.createElement(d.b,{to:"/resume"},"Resume"),l.a.createElement(d.b,{to:"/portfolio"},"Portfolio"),l.a.createElement("a",{href:"https://ichiranjeeb.com",target:"_blank"},"Blog"))),l.a.createElement(p.Drawer,{title:"Chiranjeeb Jena"},l.a.createElement(p.Navigation,null,l.a.createElement(d.b,{to:"/"},l.a.createElement("i",{class:"fas fa-house-damage"})," Home"),l.a.createElement(d.b,{to:"/resume"},l.a.createElement("i",{class:"far fa-address-card"})," Resume"),l.a.createElement(d.b,{to:"/portfolio"},l.a.createElement("i",{class:"fas fa-code-branch"})," Portfolio"),l.a.createElement("a",{href:"https://ichiranjeeb.com",target:"_blank"},l.a.createElement("i",{class:"fas fa-rss"})," Blog"))),l.a.createElement(p.Content,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:E}),l.a.createElement(u.a,{path:"/portfolio",component:v}),l.a.createElement(u.a,{path:"/resume",component:j})))))}}]),t}(n.Component),C=Object(u.e)(k);var x=function(){return l.a.createElement(d.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(110),a(111);i.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){e.exports=a(112)},49:function(e,t,a){},50:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.5d137033.chunk.js.map