(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RObh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/form",function(){return n("o7rM")}])},o7rM:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return j});var a=n("0iUn"),i=n("MI3g"),l=n("a7VT"),s=n("AT/M"),u=n("sLSF"),o=n("Tit0"),c=n("q1tI"),r=n.n(c),h=n("qPgm"),m=n("5Yp1"),p=n("YFqc"),d=n.n(p),b=n("nOHt"),f=n.n(b),v=r.a.createElement,j=function(e){function t(e){var n;Object(a.a)(this,t);var u="";return(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).props.query.name&&(u=n.props.query.name),n.state={name:u},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n}return Object(o.a)(t,e),Object(u.a)(t,null,[{key:"getInitialProps",value:function(e){return{query:e.query}}}]),Object(u.a)(t,[{key:"handleSubmit",value:function(e){this.props.query.id?h.a.put("/project/"+this.props.query.id,{name:this.state.name}).then(function(e){f.a.push("/project/list")}).catch(function(e){return null}):h.a.post("/project",{name:this.state.name}).then(function(e){console.log("salvou com sucesso",e),f.a.push("/project/list")}).catch(function(e){return null}),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return v(m.a,null,v("form",{onSubmit:this.handleSubmit},v("div",null,v("h1",{className:"title"},"Project Form"),v("div",{className:"field"},v("label",{className:"label"},"Name"),v("div",{className:"control"},v("input",{className:"input",value:this.state.name,onChange:this.handleChange,type:"text",placeholder:"Project name"})))),v("div",null,"\xa0"),v("div",{className:"field is-grouped"},v("div",{className:"control"},v("button",{type:"submit",className:"button is-link"},"Submit")),v("div",{className:"control"},v(d.a,{href:"/project/list"},v("button",{className:"button is-link is-light"},"Cancel"))))))}}]),t}(r.a.Component)}},[["RObh",0,1]]]);