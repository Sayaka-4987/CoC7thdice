(this.webpackJsonptmpl=this.webpackJsonptmpl||[]).push([[0],{192:function(e,t,c){},370:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(30),j=c.n(a),r=c(76),i=c(45),l=c(72),s=c(376),b=c(378),o=c(374),h=c(377),O=c(179),d=c(372),x=c(373),u=c(375),p=(c(190),c(192),c(171)),v=c(7),f=l.a.Option,m=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),c=t[0],a=t[1],j=Object(n.useState)(425),m=Object(i.a)(j,2),y=m[0],g=m[1],C=Object(n.useState)(["","","","",""]),S=Object(i.a)(C,2),w=S[0],M=S[1],F=Object(n.useState)(1),N=Object(i.a)(F,2),k=N[0],z=N[1],A=Object(n.useState)([]),I=Object(i.a)(A,2),P=I[0],D=I[1],E=Object(n.useState)(6),T=Object(i.a)(E,2),V=T[0],R=T[1],U=Object(n.useState)(50),B=Object(i.a)(U,2),H=B[0],J=B[1],W=Object(n.useState)("\u4fa6\u67e5"),X=Object(i.a)(W,2),Z=X[0],K=X[1],L=Object(n.useState)(1),q=Object(i.a)(L,2),G=q[0],Q=q[1],Y=Object(n.useState)(""),$=Object(i.a)(Y,2),_=$[0],ee=$[1],te=function(){return Object(v.jsx)("svg",{t:"1642497827253",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2306",width:"25px",height:"25px","vertical-align":"super",children:Object(v.jsx)("path",{d:"M910.145163 0H113.854837A114.143809 114.143809 0 0 0 0 113.854837v796.290326a114.143809 114.143809 0 0 0 113.854837 113.854837h796.290326a114.143809 114.143809 0 0 0 113.854837-113.854837V113.854837A114.259397 114.259397 0 0 0 910.145163 0zM331.797268 331.797268a85.362231 85.362231 0 1 1 0-120.674568 85.188847 85.188847 0 0 1 0 120.674568z m240.540016 240.655605a85.362231 85.362231 0 1 1 0-120.674568A85.188847 85.188847 0 0 1 572.163901 572.510667z m240.655605 240.540016a85.362231 85.362231 0 1 1 0-120.674569 85.188847 85.188847 0 0 1 0.057794 120.732363z","p-id":"2307",fill:"#FFFFFF"})})},ce=function(e){return Math.floor(Math.random()*e+1)},ne=function(e){return 9===e.length?"\u529b\u91cf(STR): ".concat(e[0],", \u4f53\u8d28(CON): ").concat(e[1],", \u4f53\u578b(SIZ): ").concat(e[2],", \u654f\u6377(DEX): ").concat(e[3],", \u5916\u8c8c(APP): ").concat(e[4],", \u667a\u529b/\u7075\u611f(INT): ").concat(e[5],", \u610f\u5fd7(POW): ").concat(e[6],", \u6559\u80b2/\u77e5\u8bc6(EDU): ").concat(e[7],", \u5e78\u8fd0(LUCK): ").concat(e[8]):"\u529b\u91cf(STR): ".concat(e[0],", \u4f53\u8d28(CON): ").concat(e[1],", \u4f53\u578b(SIZ): ").concat(e[2],", \u654f\u6377(DEX): ").concat(e[3],", \u5916\u8c8c(APP): ").concat(e[4],", \u667a\u529b/\u7075\u611f(INT): ").concat(e[5],", \u610f\u5fd7(POW): ").concat(e[6],", \u6559\u80b2/\u77e5\u8bc6(EDU): ").concat(e[7])};return Object(v.jsxs)(s.a,{className:"layout",style:{height:"100%"},children:[Object(v.jsxs)(b.b,{direction:"vertical",children:[Object(v.jsx)(p.Header,{children:Object(v.jsxs)(b.b,{size:"middle",children:[Object(v.jsx)(te,{}),Object(v.jsx)("h1",{children:"CoC7th \u89c4\u5219\u7528\u4e34\u65f6\u9ab0\u5b50"})]})}),Object(v.jsxs)(s.a,{style:{padding:"10px 50px"},className:"content",children:[Object(v.jsx)("h2",{children:"\u4eba\u7269\u53619\u7ef4\u5c5e\u6027\u751f\u6210"}),Object(v.jsx)("div",{children:Object(v.jsxs)(b.b,{children:["\u5c5e\u6027\u70b9\u603b\u548c =",Object(v.jsx)(o.a,{min:120,max:640,value:y,onChange:g}),Object(v.jsx)(h.a,{checked:c,onChange:function(e){a(e.target.checked)}}),"\u542b\u5e78\u8fd0",Object(v.jsx)(O.a,{type:"primary",onClick:function(){!function(){for(var e=["","","","",""],t=c?9:8,n=5*Math.floor(Number(y)/t/5),a=Number(y)-n*t,j=0;j<5;j++){for(var i=new Array(t).fill(n),l=0;l<5;l++){for(var s=ce(t)-1,b=ce(t)-1;s===b;)b=ce(t)-1;i[s]+=5,i[b]-=5}i[ce(t)-1]+=a;for(var o=i.indexOf(Math.min.apply(Math,Object(r.a)(i))),h=i.indexOf(Math.max.apply(Math,Object(r.a)(i)));i[h]>80;)i[o]+=i[h]-80,i[h]-=i[h]-80,h=i.indexOf(Math.max.apply(Math,Object(r.a)(i))),o=i.indexOf(Math.min.apply(Math,Object(r.a)(i)));e[j]=ne(i)}console.log(e),M(e)}()},children:"\u968f\u673a5\u7ec4"})]})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)(d.b,{style:{backgroundColor:"#FFFFFF"},size:"small",header:Object(v.jsx)("div",{children:"\u751f\u6210\u7ed3\u679c"}),bordered:!0,dataSource:w,renderItem:function(e){return Object(v.jsx)(d.b.Item,{children:e})}})]}),Object(v.jsxs)("h2",{children:[Object(v.jsx)("br",{}),"\u63b7\u9ab0"]}),Object(v.jsxs)(b.b,{size:"middle",children:[Object(v.jsxs)("div",{children:["\u6295\u63b7\xa0",Object(v.jsxs)(l.a,{defaultValue:"6",style:{width:120},onChange:function(e){R(Number(e)),D([])},children:[Object(v.jsx)(f,{value:"3",children:"r3\u9ab0\u5b50"}),Object(v.jsx)(f,{value:"4",children:"r4\u9ab0\u5b50"}),Object(v.jsx)(f,{value:"6",children:"r6\u9ab0\u5b50"}),Object(v.jsx)(f,{value:"8",children:"r8\u9ab0\u5b50"}),Object(v.jsx)(f,{value:"10",children:"r10\u9ab0\u5b50"}),Object(v.jsx)(f,{value:"20",children:"r20\u9ab0\u5b50"}),Object(v.jsx)(f,{value:"100",children:"r100\u9ab0\u5b50"})]}),"\uff0c\u5171\xa0",Object(v.jsx)(o.a,{min:1,max:10,value:k,onChange:z,size:"small",style:{width:50}}),"\xa0\u6b21"]}),Object(v.jsx)(O.a,{type:"primary",onClick:function(){!function(e,t){for(var c=new Array(t).fill(1),n=0;n<t;n++)c[n]=ce(e);D(c)}(V,k)},children:"\u63b7\u9ab0\u5b50"})]}),Object(v.jsxs)(b.b,{children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("br",{}),"\u60a8\u629b\u51fa\u4e86",k,"\u4e2ar",V,"\u9ab0\u5b50\uff1a\u7ed3\u679c\u4e3a"]}),Object(v.jsx)(x.a,{value:P.toString(),style:{color:"#003a8c"}})]}),Object(v.jsxs)("h2",{children:[Object(v.jsx)("br",{}),"\u6280\u80fd\u68c0\u5b9a"]}),Object(v.jsxs)(b.b,{direction:"vertical",children:[Object(v.jsxs)(b.b,{children:["\u6280\u80fd\u540d\u79f0\u9009\u62e9",Object(v.jsx)(l.a,{defaultValue:"\u4fa6\u67e5",style:{width:120},placeholder:"\u9009\u62e9\u8981\u68c0\u5b9a\u7684\u6280\u80fd",onChange:function(e){K(e)},children:["\u4fa6\u67e5","\u8046\u542c","\u56fe\u4e66\u9986\u4f7f\u7528","\u6bcd\u8bed","\u6500\u722c","\u95ea\u907f","\u6597\u6bb4","\u9501\u5320","\u533b\u5b66","\u5c04\u51fb","\u6025\u6551","\u8bf4\u670d","\u53d6\u60a6","\u8bdd\u672f","\u6050\u5413","\u5fc3\u7406\u5b66"].map((function(e){return Object(v.jsx)(f,{children:e},e)}))}),"\u6216\u8f93\u5165",Object(v.jsx)(u.a,{allowClear:!0,value:Z,onChange:function(e){K(e.target.value)},style:{width:"120px"}})]}),Object(v.jsxs)(b.b,{children:["\u6570\u503c",Object(v.jsx)(o.a,{min:1,max:100,value:H,onChange:J}),"\u96be\u5ea6",Object(v.jsxs)(l.a,{placeholder:"\u68c0\u5b9a\u96be\u5ea6",defaultValue:"1.0",onChange:function(e){Q(Number(e))},children:[Object(v.jsx)(f,{value:"1.0",children:"\u666e\u901a\u6210\u529f"}),Object(v.jsx)(f,{value:"0.5",children:"\u56f0\u96be\u6210\u529f"}),Object(v.jsx)(f,{value:"0.2",children:"\u6781\u96be\u6210\u529f"})]}),Object(v.jsx)(O.a,{type:"primary",onClick:function(){ee(function(e,t,c){var n=ce(100),a=n<=t*c?"\u6210\u529f":"\u5931\u8d25";return 1===n?a="\u5927\u6210\u529f\uff01":(100===n||n>=96&&t<50)&&(a="\u5927\u5931\u8d25\uff01"),"\u60a8\u8fdb\u884c\u4e86".concat(e).concat(t*c,"\u68c0\u5b9a\uff1a1D100=").concat(n,"\uff0c").concat(a)}(Z,H,G))},children:"\u8fdb\u884c\u68c0\u5b9a"})]}),Object(v.jsx)("div",{style:{fontSize:"smaller"},children:"* \u6b64\u5904\u5927\u6210\u529f\u5927\u5931\u8d25\u91c7\u7528\u5b98\u65b9\u89c4\u5219\uff0c\u82e5\u4f7f\u7528\u623f\u89c4\u53ef\u4ee5\u53ea\u53d6\u9ab0\u5b50\u6570\u5b57\u4e3a\u51c6"}),Object(v.jsx)("div",{children:_})]})]})]}),Object(v.jsx)(s.a,{style:{textAlign:"center",height:"100%"},children:Object(v.jsxs)("p",{children:["Copyright \xa9 Sayaka-4987 2022",Object(v.jsx)("br",{}),"Powered by React and Ant Design"]})})]})};j.a.render(Object(v.jsx)(m,{}),document.getElementById("root"))}},[[370,1,2]]]);
//# sourceMappingURL=main.97d36cd7.chunk.js.map