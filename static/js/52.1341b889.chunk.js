"use strict";(self.webpackChunkcameraman=self.webpackChunkcameraman||[]).push([[52],{9052:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});t(2791);var i=t(2162),n=t(5705),s=t(8007),l=t(4330),r=t(184);function d(e){let{UpdateBudget:a}=e;const t=s.Ry({Budget:s.Rx().min(25,"Budget must be at least 25").required("For Update Budget it's required")}),d=(0,n.TA)({initialValues:{Budget:""},onSubmit:e=>{console.log(e)},validationSchema:t});return(0,r.jsx)(i.E.div,{className:"BudGetDropBox",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:"linear"},children:(0,r.jsxs)(i.E.form,{className:"UpdateBudget position-relative row justify-content-center align-items-center p-5",onSubmit:d.handleSubmit,initial:{y:20},animate:{y:0},transition:{duration:.8,type:"spring"},children:[(0,r.jsx)(l.QAE,{onClick:a}),(0,r.jsxs)("div",{className:"col-md-12 mt-4",children:[(0,r.jsx)("h1",{className:"form-label h4",children:"Budget"}),(0,r.jsx)("input",{type:"number",className:"form-control my-3",onChange:d.handleChange,onBlur:d.handleBlur,id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"Budget",placeholder:"Add Your New Budget...."}),d.errors.Budget&&(0,r.jsx)("span",{className:"alert alert-danger  d-block",children:d.errors.Budget})]}),(0,r.jsx)("input",{type:"submit",value:"Send Updates",className:"btn mt-2",disabled:!(d.dirty&&d.isValid)})]})})}}}]);
//# sourceMappingURL=52.1341b889.chunk.js.map