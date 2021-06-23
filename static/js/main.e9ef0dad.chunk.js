(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{42:function(e,t,s){"use strict";s.r(t);var a=s(2),l=s(12),n=s.n(l),c=s(0);var r=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"bg-light p-4 rounded-lg text-center",children:[Object(c.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(c.jsx)("p",{className:"lead",children:"Search by empoyee or apply a filter to sort the companies employees"})]}),Object(c.jsx)("hr",{})]})},i=s(13),o=s(14),d=s(17),m=s(16),h=s(15),j=s.n(h),p=function(){return j.a.get("https://randomuser.me/api/?results=200&nat=us")},u=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table table-striped",children:[Object(c.jsx)("thead",{className:"thead-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",className:"m-1 align-middle",children:"Photo"}),Object(c.jsxs)("th",{scope:"col",className:"m-1 align-middle",children:[Object(c.jsx)("span",{onClick:function(){return e.sortEmployees("last")},children:"Last Name "}),Object(c.jsx)("i",{className:"fas fa-sort-down align-top"})]}),Object(c.jsxs)("th",{scope:"col",className:"m-1 align-middle",children:[Object(c.jsx)("span",{onClick:function(){return e.sortEmployees("first")},children:"First Name "}),Object(c.jsx)("i",{className:"fas fa-sort-down align-top"})]}),Object(c.jsx)("th",{scope:"col",className:"m-1 align-middle",children:"DOB"}),Object(c.jsx)("th",{scope:"col",className:"m-1 align-middle",children:"Gender"}),Object(c.jsx)("th",{scope:"col",className:"m-1 align-middle",children:"Cell Phone"}),Object(c.jsxs)("th",{scope:"col",className:"m-1 align-middle",children:[Object(c.jsx)("span",{onClick:function(){return e.sortEmployees("email")},children:"Email "}),Object(c.jsx)("i",{className:"fas fa-sort-down align-top"})]})]})}),Object(c.jsx)("tbody",{children:e.filteredEmployees.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"align-middle",children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:e.name.last})}),Object(c.jsx)("td",{className:"align-middle",children:e.name.last}),Object(c.jsx)("td",{className:"align-middle",children:e.name.first}),Object(c.jsx)("td",{className:"align-middle",children:e.dob.date}),Object(c.jsx)("td",{className:"align-middle",children:e.gender}),Object(c.jsx)("td",{className:"align-middle",children:e.cell}),Object(c.jsx)("td",{className:"align-middle",children:e.email}),Object(c.jsx)("td",{className:"align-middle"})]},e.login.uuid)}))})]})})},b=function(e){return Object(c.jsx)("form",{className:"form-inline m-4",children:Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("input",{type:"search",name:"search",className:"form-control",value:e.search,onChange:e.handleInputChange,placeholder:"Search by last name"}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:e.handleFormSubmit,children:"Search"})})]})})},O=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={headers:[],employees:[],order:"descend",search:"",filteredEmployees:[]},e.handleInputChange=function(t){e.setState({search:t.target.value}),e.filterEmployees(e.state.search.toLowerCase().trim())},e.handleFormSubmit=function(t){t.preventDefault(),console.log(e.state.search),e.filterEmployees(e.state.search.toLowerCase().trim())},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(e){return e.name.last.toLowerCase().includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.sortEmployees=function(t){var s=e.state.filteredEmployees.sort((function(e,s){return e[t]>s[t]||e.name[t]>s.name[t]?1:e[t]<s[t]||e.name[t]<s.name[t]?-1:0}));e.setState({filteredEmployees:s})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({headers:t.data.results,employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(c.jsx)(u,{headers:this.state.headers,employees:this.state.employees,filteredEmployees:this.state.filteredEmployees,sortEmployees:this.sortEmployees})]})}}]),s}(a.Component);var f=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(r,{}),Object(c.jsx)(O,{})]})};s(41);n.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e9ef0dad.chunk.js.map