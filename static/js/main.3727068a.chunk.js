(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){e.exports=n(277)},159:function(e,t,n){},161:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),l=(n(159),n(45)),o=n(46),s=n(50),u=n(47),m=n(51),h=(n(161),n(15)),d=n(48),p="https://api.github.com/users/Pk013",E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},active:!1},n.componentDidMount=function(e){fetch(p).then(function(e){return e.json()}).then(function(e){n.setState({user:e}),console.log(Object.entries({profileInfo:e}))})},n.handleClick=function(e){n.setState(function(e){return{active:!e.active}})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Container,null,r.a.createElement(h.Button,{id:"spinner",onClick:this.handleClick,className:"trinity-rings-spinner"},r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"})),this.state.active?r.a.createElement(h.Card,{id:"card",className:"small",header:r.a.createElement("div",{id:"parent"},r.a.createElement(h.CardTitle,{image:this.state.user.avatar_url},r.a.createElement("br",null),r.a.createElement("b",null,this.state.user.name),r.a.createElement("br",null)),r.a.createElement(d.a,null,r.a.createElement("b",null,"Login: "),this.state.user.login,r.a.createElement("br",null),r.a.createElement("b",null,"Public repositories:")," ",this.state.user.public_repos,r.a.createElement("br",null),r.a.createElement("p",null,"Kenzie Academy is pretty cool. This place is great and I cant wait to see where it takes me."," "),r.a.createElement("a",{href:"https://epic-spinners.epicmax.co/#/"},"Moving Icons")))}):null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[154,2,1]]]);
//# sourceMappingURL=main.3727068a.chunk.js.map