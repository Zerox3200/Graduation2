"use strict";(self.webpackChunkcameraman=self.webpackChunkcameraman||[]).push([[137],{8470:(e,a,i)=>{i.r(a),i.d(a,{default:()=>m});var l=i(2791),t=i(4330);const n=i.p+"static/media/Screen_Shot_2022-04-15_at_10.17.44_AM-removebg-preview.e8d87074107ce70b0176.png";var s=i(5705),r=i(8007),o=i(2162),c=i(184);function m(e){let{UpdateImage:a,OldImage:i}=e;const[m,d]=(0,l.useState)(n),g=r.Ry({image:r.nK().test("File_Size","Too large!",(e=>e&&e.size<1048576)).test("File_Type","Invalid!!",(e=>e&&["image/png","image/jpeg","image/jpg"].includes(e.type)))}),p=(0,s.TA)({initialValues:{image:""},onSubmit:e=>{console.log(m),console.log(e)},validationSchema:g});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.E.div,{className:"DropBox",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:"linear"},children:(0,c.jsxs)(o.E.form,{onSubmit:p.handleSubmit,className:"ImageUpdate row align-content-around justify-content-evenly p-2 position-relative",initial:{y:20},animate:{y:0},transition:{duration:.8,type:"spring"},children:[(0,c.jsx)(t.QAE,{onClick:a}),(0,c.jsx)("h1",{className:"col-md-12 h4",children:"Edit Profile Image"}),(0,c.jsxs)("div",{className:"ImageUpdate_Old col-md-5 d-flex flex-column justify-content-center align-items-center p-2 row-gap-2",children:[(0,c.jsx)("img",{src:i,alt:"...",loading:"lazy"}),(0,c.jsx)("p",{className:"h4",children:"Old Profile Image"})]}),(0,c.jsxs)("div",{className:"ImageUpdate_New col-md-5 d-flex flex-column justify-content-center align-items-center p-2 row-gap-2",children:[(0,c.jsx)("img",{src:m,alt:"...",loading:"lazy"}),(0,c.jsx)("p",{className:"h4",children:"Upload Image"}),p.errors.image?(0,c.jsx)("span",{className:"alert alert-danger w-100",children:p.errors.image}):null,(0,c.jsx)("input",{className:"form-control",name:"Image",type:"file",id:"formFile",onChange:e=>{p.setFieldValue("image",e.target.files[0]),(e=>{if(e){const a=new FileReader;a.readAsDataURL(e),a.onload=()=>{d(a.result)}}})(e.target.files[0])}})]}),(0,c.jsx)("input",{type:"submit",className:"btn",value:"Upload Image",accept:"image/*"})]})})})}}}]);
//# sourceMappingURL=137.a5b4875c.chunk.js.map