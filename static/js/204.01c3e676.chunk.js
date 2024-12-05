"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[204],{6794:(s,e,r)=>{r.d(e,{Z:()=>c});r(2791);var a=r(6355),o=r(3495),n=r(1087),t=r(184);const c=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("footer",{children:[(0,t.jsxs)("div",{className:"footer",children:[(0,t.jsxs)("div",{className:"footer-links",children:[(0,t.jsx)("h3",{children:"Links"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/doctors",children:"Doctors"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/appointments",children:"Appointments"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/notifications",children:"Notifications"})}),(0,t.jsx)("li",{children:(0,t.jsx)(o.fO,{to:"/#contact",children:"Contact Us"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.OL,{to:"/profile",children:"Profile"})})]})]}),(0,t.jsxs)("div",{className:"social",children:[(0,t.jsx)("h3",{children:"Social links"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"facebook",children:(0,t.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(a.tBk,{})})}),(0,t.jsx)("li",{className:"youtube",children:(0,t.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(a.V2E,{})})}),(0,t.jsx)("li",{className:"instagram",children:(0,t.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(a.Zf_,{})})})]})]})]}),(0,t.jsxs)("div",{className:"footer-bottom",children:["Copy Right \xa9 ",(new Date).getFullYear()]})]})})},8204:(s,e,r)=>{r.r(e),r.d(e,{default:()=>u});var a=r(2791),o=(r(7646),r(6794)),n=r(4956),t=r(3263),c=r(5218),l=r(5318),i=r(9434),d=r(3200),p=r(4971),w=r(456),h=r(184);t.Z.defaults.baseURL="http://localhost:5015/api";const u=function(){const{userId:s}=(0,w.Z)(localStorage.getItem("token")),e=(0,i.I0)(),{loading:r}=(0,i.v9)((s=>s.root)),[u,f]=(0,a.useState)(""),[m,x]=(0,a.useState)({password:"",newpassword:"",confnewpassword:""});(0,a.useEffect)((()=>{(async()=>{try{e((0,l.K4)(!0));const r=await(0,p.Z)(`/user/getuser/${s}`);x({...r,password:"",newpassword:null===r.newpassword?"":r.newpassword}),f(r.pic),e((0,l.K4)(!1))}catch(r){console.error("Error fetching user data:",r)}})()}),[e]);const j=s=>{const{name:e,value:r}=s.target;x({...m,[e]:r})};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.Z,{}),r?(0,h.jsx)(d.Z,{}):(0,h.jsx)("section",{className:"register-section flex-center",children:(0,h.jsxs)("div",{className:"profile-container flex-center",children:[(0,h.jsx)("h2",{className:"form-heading",children:"Profile"}),(0,h.jsx)("img",{src:u,alt:"profile",className:"profile-pic"}),(0,h.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const{password:r,newpassword:a,confnewpassword:o}=m;if(a!==o)return c.ZP.error("Passwords do not match");try{"Password changed successfully"===(await t.Z.put("/user/changepassword",{userId:s,currentPassword:r,newPassword:a,confirmNewPassword:o},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).data?(c.ZP.success("Password updated successfully"),x({...m,password:"",newpassword:"",confnewpassword:""})):c.ZP.error("Unable to update password")}catch(n){console.error("Error updating password:",n),n.response?c.ZP.error(n.response.data):c.ZP.error("Network error. Please try again.")}},className:"register-form",children:[(0,h.jsx)("div",{className:"form-same-row",children:(0,h.jsx)("input",{type:"password",name:"password",className:"form-input",placeholder:"Enter your current password",value:m.password,onChange:j})}),(0,h.jsxs)("div",{className:"form-same-row",children:[(0,h.jsx)("input",{type:"password",name:"newpassword",className:"form-input",placeholder:"Enter your new password",value:m.newpassword,onChange:j}),(0,h.jsx)("input",{type:"password",name:"confnewpassword",className:"form-input",placeholder:"Confirm your new password",value:m.confnewpassword,onChange:j})]}),(0,h.jsx)("button",{type:"submit",className:"btn form-btn",children:"Update"})]})]})}),(0,h.jsx)(o.Z,{})]})}}}]);
//# sourceMappingURL=204.01c3e676.chunk.js.map