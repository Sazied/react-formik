(this["webpackJsonpreact-formik"]=this["webpackJsonpreact-formik"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},306:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(47),l=n.n(a),o=(n(134),n(35)),i=(n.p,n(135),n(17)),s=n(9),j=n(30),b=n(5),m=n(16),d=n(6),O=n(12),u=n(1),h=function(e){return Object(u.jsx)("p",{className:"error",children:e.children})},x=function(e){var t=e.name,n=e.value,c=e.label,r=Object(O.a)(e,["name","value","label"]);return Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:t,children:c}),Object(u.jsx)(b.c,{name:t,children:function(e){var c=e.field;e.meta;return console.log(c),Object(u.jsx)("input",Object(d.a)(Object(d.a)({id:t,value:n},c),r))}}),Object(u.jsx)(b.a,{name:t,component:h})]})},p=function(e){var t=e.label,n=e.name,c=Object(O.a)(e,["label","name"]);return Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:n,children:t}),Object(u.jsx)(b.c,Object(d.a)({as:"textarea",name:n},c)),Object(u.jsx)(b.a,{name:n,component:h})]})},f=function(e){var t=e.name,n=e.label,c=e.options,r=Object(O.a)(e,["name","label","options"]);return Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:t,children:n}),Object(u.jsx)(b.c,Object(d.a)(Object(d.a)({name:t},r),{},{children:function(e){var n=e.field;e.meta,e.form;return Object(u.jsx)("select",Object(d.a)(Object(d.a)({id:t},n),{},{children:c.map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.key},e.value)}))}))}})),Object(u.jsx)(b.a,{name:t,component:h})]})},v=function(e){var t=e.label,n=e.name,c=e.options,a=Object(O.a)(e,["label","name","options"]);return Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:n,children:t}),Object(u.jsx)(b.c,Object(d.a)(Object(d.a)({name:n},a),{},{children:function(e){var t=e.field;return c.map((function(e){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)("input",Object(d.a)(Object(d.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),Object(u.jsx)("label",{htmlFor:e.value,children:e.key})]},e.key)}))}})),Object(u.jsx)(b.a,{name:n,component:h})]})},y=function(e){var t=e.label,n=e.name,c=e.options,a=Object(O.a)(e,["label","name","options"]);return Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:n,children:t}),Object(u.jsx)(b.c,Object(d.a)(Object(d.a)({name:n},a),{},{children:function(e){var t=e.field;return c.map((function(e){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)("input",Object(d.a)(Object(d.a)({type:"checkbox",id:e.value},t),{},{value:e.value,checked:t.value.includes(e.value)})),Object(u.jsx)("label",{htmlFor:e.value,children:e.key})]},e.key)}))}})),Object(u.jsx)(b.a,{name:n,component:h})]})},F=n(126),k=n.n(F),N=(n(243),function(e){var t=e.name,n=e.label,c=Object(O.a)(e,["name","label"]);return Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:t,children:n}),Object(u.jsx)(b.c,{name:t,children:function(e){var n=e.form,r=e.field,a=n.setFieldValue,l=r.value;return Object(u.jsx)(k.a,Object(d.a)(Object(d.a)(Object(d.a)({id:t},r),c),{},{selected:l,onChange:function(e){return a(t,e)}}))}})]})}),g=function(e){var t=e.control,n=Object(O.a)(e,["control"]);switch(t){case"input":return Object(u.jsx)(x,Object(d.a)({},n));case"textarea":return Object(u.jsx)(p,Object(d.a)({},n));case"select":return Object(u.jsx)(f,Object(d.a)({},n));case"radio":return Object(u.jsx)(v,Object(d.a)({},n));case"checkbox":return Object(u.jsx)(y,Object(d.a)({},n));case"date":return Object(u.jsx)(N,Object(d.a)({},n));default:return null}},q=n(129),S=function(){var e=[{key:"Select an Option",value:""},{key:"Option 1",value:"option1"},{key:"Option 2",value:"option2"},{key:"Option 3",value:"option3"}],t=[{key:"Option 1",value:"rOption1"},{key:"Option 2",value:"rOption2"},{key:"Option 3",value:"rOption3"}],n=[{key:"Option 1",value:"cOption1"},{key:"Option 2",value:"cOption2"},{key:"Option 3",value:"cOption3"}],c={email:"",description:"",selectOption:"",radioOption:"",checkboxOption:[],date:null},r=m.c({email:m.d().required("Required"),description:m.d().required("Required"),selectOption:m.d().required("Required"),radioOption:m.d().required("Required"),checkboxOption:m.a().min(1,"Required"),date:m.b().required("Required").nullable()});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.b,{to:"/old-form",children:"Old Form"}),Object(u.jsx)(b.f,{initialValues:c,validationSchema:r,onSubmit:function(e){return console.log("Form Data",e)},children:function(r){return Object(u.jsxs)(b.e,{children:[Object(u.jsx)(q.a,{onValidationChange:function(e,t){console.log(e,t)}}),Object(u.jsx)(g,{control:"input",type:"email",label:"Email",name:"email",value:c.email}),Object(u.jsx)(g,{control:"textarea",label:"Description",name:"description"}),Object(u.jsx)(g,{control:"select",label:"Select an Option",name:"selectOption",options:e}),Object(u.jsx)(g,{control:"radio",label:"Select an Option",name:"radioOption",options:t}),Object(u.jsx)(g,{control:"checkbox",label:"Pick Options",name:"checkboxOption",options:n}),Object(u.jsx)(g,{control:"date",label:"Pick a Date",name:"date"}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})}})]})},w={name:"",email:"",channel:"",comments:"",socials:{facebook:"",twitter:""},phoneNumbers:["",""],phNumbers:[""]},P=function(e,t){console.log("Form data",e),console.log("On Submit Props",t),t.setSubmitting(!1),t.resetForm()},R=m.c({name:m.d().required("Required"),email:m.d().email("Invalid email format").required("Required"),channel:m.d().required("Required")}),C=function(e){var t;return console.log(t),e||(t="Required"),t},V=function(){return console.log({Field:b.c}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.b,{to:"new-form",children:"New Form"}),Object(u.jsx)(b.f,{initialValues:w,onSubmit:P,validationSchema:R,children:function(e){return console.log("Formik Props",e),Object(u.jsxs)(b.e,{children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)(b.c,{type:"text",id:"name",name:"name"}),Object(u.jsx)(b.a,{name:"name",component:h})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)(b.c,{type:"email",id:"email",name:"email"}),Object(u.jsx)(b.a,{name:"email",children:function(e){return Object(u.jsx)("p",{className:"error",children:e})}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"channel",children:"Channel"}),Object(u.jsx)(b.c,{type:"text",id:"channel",name:"channel"}),Object(u.jsx)(b.a,{name:"channel",children:function(e){return Object(u.jsx)("p",{className:"error",children:e})}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"comments",children:"Comments"}),Object(u.jsx)(b.c,{as:"textarea",id:"comments",name:"comments",validate:C}),Object(u.jsx)(b.a,{name:"comments",component:h})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"address",children:"Address"}),Object(u.jsx)(b.b,{name:"address",children:function(e){var t=e.field,n=(e.form,e.meta);return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",Object(d.a)({type:"text",id:"address"},t)),n.touched&&n.error&&Object(u.jsx)("p",{children:n.error})]})}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"facebook",children:"Facebook Profile"}),Object(u.jsx)(b.c,{type:"text",id:"facebook",name:"socials.facebook"})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"twitter",children:"Twitter Profile"}),Object(u.jsx)(b.c,{name:"socials.twitter",children:function(e){var t=e.field,n=(e.form,e.meta);return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",Object(d.a)({type:"text",id:"twitter"},t)),n.touched&&n.error&&Object(u.jsx)("p",{children:n.error})]})}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"primaryPh",children:"Primary phone number"}),Object(u.jsx)(b.c,{type:"text",id:"primaryPh",name:"phoneNumbers[0]"})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"secondaryPh",children:"Secondary phone number"}),Object(u.jsx)(b.c,{name:"phoneNumbers[1]",children:function(e){var t=e.field;e.form,e.meta;return Object(u.jsx)("input",Object(d.a)({type:"text",id:"secondaryPh"},t))}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"phNumbers",children:"List of phone numbers"}),Object(u.jsx)(b.d,{name:"phNumbers",children:function(e){var t=e.push,n=e.remove,c=e.form.values.phNumbers;return Object(u.jsx)("div",{children:c.map((function(e,c){return Object(u.jsxs)("div",{children:[Object(u.jsx)(b.c,{type:"text",name:"phNumbers[".concat(c,"]")}),c>0&&Object(u.jsx)("button",{type:"button",onClick:function(){return n(c)},children:" - "}),Object(u.jsx)("button",{type:"button",onClick:function(){return t("")},children:" + "})]},c)}))})}})]}),Object(u.jsx)("button",{type:"submit",disabled:!e.isValid||e.isSubmitting,children:"Submit"})]})}})]})},D=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(i.b,{to:"/newform",children:"New From"}),Object(u.jsx)(i.b,{to:"/oldform",children:"Old From"})]})};var E=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=(t[0],t[1]),r=Object(j.a)(),a=r.user;return r.isAuthenticated,r.isLoading,Object(c.useEffect)((function(){"sazied@polyunity.com"===(null===a||void 0===a?void 0:a.email)&&n(!0)})),Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(i.a,{basename:"/",children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/newform",children:"New From"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/oldform",children:"Old From"})})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(s.a,{exact:!0,path:"/",component:D}),Object(u.jsx)(s.a,{path:"/newform",component:S}),Object(u.jsx)(s.a,{path:"/oldform",component:V})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,311)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),a(e),l(e)}))};l.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),L()}},[[306,1,2]]]);
//# sourceMappingURL=main.f5308614.chunk.js.map