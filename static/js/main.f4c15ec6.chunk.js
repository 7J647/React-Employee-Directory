(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{4:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n.n(r),i=n(13),l=n.n(i),o=(n(4),n(14)),a=n(15),h=n(18),d=n(17),j=n(16),u=n.n(j),b=function(){return u.a.get("https://randomuser.me/api/?results=50")};var m=function(e){return Object(c.jsxs)("table",{class:"table table-striped",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Image"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{children:[" ",Object(c.jsx)("img",{alt:"thumbnail",className:"img-fluid",src:e.image,style:{margin:"0 auto"}})]}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.dob})]})})]})},x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={results:[]},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({results:t.data.results}),console.log(t)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{children:this.state.results.map((function(e){return Object(c.jsx)(m,{image:e.picture.thumbnail,name:e.name.first+e.name.last,phone:e.phone,email:e.email,dob:e.dob.date})}))})})}}]),n}(r.Component);var O=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{style:{backgroundColor:"rgb(0,24,65)",height:130,borderBottom:"5px solid red"},className:"header",children:[Object(c.jsx)("h1",{style:{color:"white",textAlign:"center",fontFamily:"Reem Kufi"},children:"Employee Directory"}),Object(c.jsx)("p",{style:{color:"white",textAlign:"center",fontFamily:"Reem Kufi"},children:"Click on carrots to filter by heading or use the search box to narrow your results."})]}),Object(c.jsx)("div",{style:{margin:20,display:"flex",justifyContent:"center"},children:Object(c.jsx)("input",{style:{height:45,width:200,borderRadius:5,borderColor:"#E8E7EB"},type:"search",id:"search",placeholder:"Search",fontFamily:"Reem Kufi",onChange:e.handleInputChange,value:e.search})}),Object(c.jsx)("div",{children:Object(c.jsx)(x,{})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(41);l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.f4c15ec6.chunk.js.map