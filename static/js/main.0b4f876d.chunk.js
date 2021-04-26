(this["webpackJsonpreact-formik"]=this["webpackJsonpreact-formik"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(45),l=n.n(a),o=(n(131),n.p,n(132),n(20)),i=n(9),s=(n(32),n(5)),j=n(16),b=n(6),m=n(12),d=n(1),O=function(e){return Object(d.jsx)("p",{className:"error",children:e.children})},u=function(e){var t=e.name,n=e.value,c=e.label,r=Object(m.a)(e,["name","value","label"]);return Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:t,children:c}),Object(d.jsx)(s.c,{name:t,children:function(e){var c=e.field;e.meta;return console.log(c),Object(d.jsx)("input",Object(b.a)(Object(b.a)({id:t,value:n},c),r))}}),Object(d.jsx)(s.a,{name:t,component:O})]})},h=function(e){var t=e.label,n=e.name,c=Object(m.a)(e,["label","name"]);return Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:n,children:t}),Object(d.jsx)(s.c,Object(b.a)({as:"textarea",name:n},c)),Object(d.jsx)(s.a,{name:n,component:O})]})},x=function(e){var t=e.name,n=e.label,c=e.options,r=Object(m.a)(e,["name","label","options"]);return Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:t,children:n}),Object(d.jsx)(s.c,Object(b.a)(Object(b.a)({name:t},r),{},{children:function(e){var n=e.field;e.meta,e.form;return Object(d.jsx)("select",Object(b.a)(Object(b.a)({id:t},n),{},{children:c.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.key},e.value)}))}))}})),Object(d.jsx)(s.a,{name:t,component:O})]})},p=function(e){var t=e.label,n=e.name,c=e.options,a=Object(m.a)(e,["label","name","options"]);return Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:n,children:t}),Object(d.jsx)(s.c,Object(b.a)(Object(b.a)({name:n},a),{},{children:function(e){var t=e.field;return c.map((function(e){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("input",Object(b.a)(Object(b.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),Object(d.jsx)("label",{htmlFor:e.value,children:e.key})]},e.key)}))}})),Object(d.jsx)(s.a,{name:n,component:O})]})},f=function(e){var t=e.label,n=e.name,c=e.options,a=Object(m.a)(e,["label","name","options"]);return Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:n,children:t}),Object(d.jsx)(s.c,Object(b.a)(Object(b.a)({name:n},a),{},{children:function(e){var t=e.field;return c.map((function(e){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("input",Object(b.a)(Object(b.a)({type:"checkbox",id:e.value},t),{},{value:e.value,checked:t.value.includes(e.value)})),Object(d.jsx)("label",{htmlFor:e.value,children:e.key})]},e.key)}))}})),Object(d.jsx)(s.a,{name:n,component:O})]})},v=n(123),k=n.n(v),y=(n(240),function(e){var t=e.name,n=e.label,c=Object(m.a)(e,["name","label"]);return Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:t,children:n}),Object(d.jsx)(s.c,{name:t,children:function(e){var n=e.form,r=e.field,a=n.setFieldValue,l=r.value;return Object(d.jsx)(k.a,Object(b.a)(Object(b.a)(Object(b.a)({id:t},r),c),{},{selected:l,onChange:function(e){return a(t,e)}}))}})]})}),F=function(e){var t=e.control,n=Object(m.a)(e,["control"]);switch(t){case"input":return Object(d.jsx)(u,Object(b.a)({},n));case"textarea":return Object(d.jsx)(h,Object(b.a)({},n));case"select":return Object(d.jsx)(x,Object(b.a)({},n));case"radio":return Object(d.jsx)(p,Object(b.a)({},n));case"checkbox":return Object(d.jsx)(f,Object(b.a)({},n));case"date":return Object(d.jsx)(y,Object(b.a)({},n));default:return null}},g=n(126),N=function(){var e=[{key:"Select an Option",value:""},{key:"Option 1",value:"option1"},{key:"Option 2",value:"option2"},{key:"Option 3",value:"option3"}],t=[{key:"Option 1",value:"rOption1"},{key:"Option 2",value:"rOption2"},{key:"Option 3",value:"rOption3"}],n=[{key:"Option 1",value:"cOption1"},{key:"Option 2",value:"cOption2"},{key:"Option 3",value:"cOption3"}],c={email:"",description:"",selectOption:"",radioOption:"",checkboxOption:[],date:null},r=j.c({email:j.d().required("Required"),description:j.d().required("Required"),selectOption:j.d().required("Required"),radioOption:j.d().required("Required"),checkboxOption:j.a().min(1,"Required"),date:j.b().required("Required").nullable()});return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.f,{initialValues:c,validationSchema:r,onSubmit:function(e){return console.log("Form Data",e)},children:function(r){return Object(d.jsxs)(s.e,{children:[Object(d.jsx)(g.a,{onValidationChange:function(e,t){console.log(e,t)}}),Object(d.jsx)(F,{control:"input",type:"email",label:"Email",name:"email",value:c.email}),Object(d.jsx)(F,{control:"textarea",label:"Description",name:"description"}),Object(d.jsx)(F,{control:"select",label:"Select an Option",name:"selectOption",options:e}),Object(d.jsx)(F,{control:"radio",label:"Select an Option",name:"radioOption",options:t}),Object(d.jsx)(F,{control:"checkbox",label:"Pick Options",name:"checkboxOption",options:n}),Object(d.jsx)(F,{control:"date",label:"Pick a Date",name:"date"}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})}})})},q={name:"",email:"",channel:"",comments:"",socials:{facebook:"",twitter:""},phoneNumbers:["",""],phNumbers:[""]},w=function(e,t){console.log("Form data",e),console.log("On Submit Props",t),t.setSubmitting(!1),t.resetForm()},S=j.c({name:j.d().required("Required"),email:j.d().email("Invalid email format").required("Required"),channel:j.d().required("Required")}),P=function(e){var t;return console.log(t),e||(t="Required"),t},R=function(){return console.log({Field:s.c}),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.f,{initialValues:q,onSubmit:w,validationSchema:S,children:function(e){return console.log("Formik Props",e),Object(d.jsxs)(s.e,{children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)(s.c,{type:"text",id:"name",name:"name"}),Object(d.jsx)(s.a,{name:"name",component:O})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)(s.c,{type:"email",id:"email",name:"email"}),Object(d.jsx)(s.a,{name:"email",children:function(e){return Object(d.jsx)("p",{className:"error",children:e})}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"channel",children:"Channel"}),Object(d.jsx)(s.c,{type:"text",id:"channel",name:"channel"}),Object(d.jsx)(s.a,{name:"channel",children:function(e){return Object(d.jsx)("p",{className:"error",children:e})}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"comments",children:"Comments"}),Object(d.jsx)(s.c,{as:"textarea",id:"comments",name:"comments",validate:P}),Object(d.jsx)(s.a,{name:"comments",component:O})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"address",children:"Address"}),Object(d.jsx)(s.b,{name:"address",children:function(e){var t=e.field,n=(e.form,e.meta);return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",Object(b.a)({type:"text",id:"address"},t)),n.touched&&n.error&&Object(d.jsx)("p",{children:n.error})]})}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"facebook",children:"Facebook Profile"}),Object(d.jsx)(s.c,{type:"text",id:"facebook",name:"socials.facebook"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"twitter",children:"Twitter Profile"}),Object(d.jsx)(s.c,{name:"socials.twitter",children:function(e){var t=e.field,n=(e.form,e.meta);return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",Object(b.a)({type:"text",id:"twitter"},t)),n.touched&&n.error&&Object(d.jsx)("p",{children:n.error})]})}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"primaryPh",children:"Primary phone number"}),Object(d.jsx)(s.c,{type:"text",id:"primaryPh",name:"phoneNumbers[0]"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"secondaryPh",children:"Secondary phone number"}),Object(d.jsx)(s.c,{name:"phoneNumbers[1]",children:function(e){var t=e.field;e.form,e.meta;return Object(d.jsx)("input",Object(b.a)({type:"text",id:"secondaryPh"},t))}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"phNumbers",children:"List of phone numbers"}),Object(d.jsx)(s.d,{name:"phNumbers",children:function(e){var t=e.push,n=e.remove,c=e.form.values.phNumbers;return Object(d.jsx)("div",{children:c.map((function(e,c){return Object(d.jsxs)("div",{children:[Object(d.jsx)(s.c,{type:"text",name:"phNumbers[".concat(c,"]")}),c>0&&Object(d.jsx)("button",{type:"button",onClick:function(){return n(c)},children:" - "}),Object(d.jsx)("button",{type:"button",onClick:function(){return t("")},children:" + "})]},c)}))})}})]}),Object(d.jsx)("button",{type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Submit"})]})}})})},C=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:"".concat("/react-formik","/img/sazied.jpg"),alt:"profile_image"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{to:"/newform",children:"New From"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{to:"/oldform",children:"Old From"})})]})]})};var D=function(){return console.log(window.location),console.log(window.location.origin),Object(d.jsx)(c.Fragment,{children:Object(d.jsx)(o.a,{basename:"/react-formik",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{to:"/",children:"Home"})}),Object(d.jsx)("img",{src:"".concat("/react-formik","/logo192.png"),alt:"react-logo"}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(C,{})}}),Object(d.jsx)(i.a,{path:"/newform",render:function(){return Object(d.jsx)(N,{})}}),Object(d.jsx)(i.a,{path:"/oldform",render:function(){return Object(d.jsx)(R,{})}}),Object(d.jsx)(i.a,{component:function(){return Object(d.jsx)("h1",{children:"404 NOT FOUND"})}})]})]})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,308)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),a(e),l(e)}))};l.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),V()}},[[303,1,2]]]);
//# sourceMappingURL=main.0b4f876d.chunk.js.map