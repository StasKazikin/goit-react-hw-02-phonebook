(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__1dDVV",input:"Filter_input__18B2M"}},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),o=n(14),s=n(2),u=n(3),l=n(5),b=n(4),m=n(13),d=n(8),h=n.n(d),j=n(6),p=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.contactId=h.a.generate(),t.handleInput=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit({id:t.contactId,name:a,number:c}),t.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:j.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.label,htmlFor:this.nameInputId,children:["Name",Object(p.jsx)("input",{className:j.input,type:"text",name:"name",value:e,onChange:this.handleInput,id:this.nameInputId})]}),Object(p.jsxs)("label",{className:j.label,htmlFor:this.numberInputId,children:["Number",Object(p.jsx)("input",{className:j.input,type:"text",name:"number",value:n,onChange:this.handleInput,id:this.numberInputId})]}),Object(p.jsx)("button",{className:j.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(11),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onChange;return Object(p.jsxs)("label",{className:O.label,children:["Find contacts by name",Object(p.jsx)("input",{className:O.input,type:"text",name:"filter",value:e,onChange:n})]})}}]),n}(a.Component),v=n(9),_=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onClick;return Object(p.jsx)("ul",{className:v.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(p.jsxs)("li",{className:v.item,children:[Object(p.jsxs)("span",{children:[e,": ",a]}),Object(p.jsx)("button",{className:v.button,id:c,type:"button",onClick:n,children:"Delete"})]},c)}))})}}]),n}(a.Component),x=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(o.a)(n),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.filterContacts();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(C,{filter:this.state.filter,onChange:this.changeFilter}),Object(p.jsx)(_,{contacts:t,onClick:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__-HXt0",label:"ContactForm_label__2bnVG",input:"ContactForm_input__1eGW5",button:"ContactForm_button__2MLTd"}},9:function(t,e,n){t.exports={list:"ContactList_list__3EEDC",item:"ContactList_item__3a38Q",button:"ContactList_button__1ZR06"}}},[[28,1,2]]]);
//# sourceMappingURL=main.94362e7e.chunk.js.map