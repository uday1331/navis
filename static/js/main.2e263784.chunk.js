(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{194:function(e,a,t){e.exports=t(393)},199:function(e,a,t){},393:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),c=t(5),o=t.n(c),i=(t(199),t(63)),m=t(64),s=t(67),u=t(65),p=t(68),d=t(70),E=t(47),f=(t(200),t(395)),h=t(402),y=t(8),b=f.a.Header,g=f.a.Content,v=f.a.Sider,k=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={collapsed:!1},t.onCollapse=function(e){t.setState({collapsed:e})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{minHeight:"100vh"}},r.a.createElement(v,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},r.a.createElement("div",{className:"logo"}),r.a.createElement(h.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(h.a.Item,{key:"1"},r.a.createElement(y.a,{type:"pie-chart"}),r.a.createElement("span",null,"All Transactions"),r.a.createElement(d.b,{to:"/"})),r.a.createElement(h.a.Item,{key:"2"},r.a.createElement(y.a,{type:"desktop"}),r.a.createElement("span",null,"Make a Claim"),r.a.createElement(d.b,{to:"/makeClaim"})),r.a.createElement(h.a.Item,{key:"3"},r.a.createElement(y.a,{type:"mail"}),r.a.createElement("span",null,"Open Seller Form"),r.a.createElement(d.b,{to:"/openSellerForm"})))),r.a.createElement(f.a,null,r.a.createElement(b,{style:{background:"#fff",padding:0}}),r.a.createElement(g,{style:{padding:"0 20px",marginTop:"20px"}},this.props.children)))}}]),a}(r.a.Component),C=t(46),O=t(399),x=t(401),w=t(71),I=t(31),j=t(397),S=t(405),T=t(406),F=O.a.Title,A=(O.a.h1,O.a.h2,O.a.h3,O.a.h4,{container:{display:"grid",gridTemplateColumns:"70% 30%"},card:{borderRadius:10}}),N=function(e){var a=e.data,t=e.onClickFunction;return r.a.createElement(w.a,null,r.a.createElement(I.a,{span:3,style:{textAlign:"justify",marginTop:"8px"}},r.a.createElement(F,{level:3,style:{lineHeight:"1"}},r.a.createElement("b",null,"20"),r.a.createElement("br",null),"AUG")),r.a.createElement(I.a,{span:21},r.a.createElement(j.a,{title:"#Transaction ".concat(a.id),size:"default",hoverable:!0,style:A.card,onClick:function(){t(a)}},r.a.createElement("div",{style:A.container},r.a.createElement(S.a,null,r.a.createElement(S.a.Item,null,a.placeOfExport),r.a.createElement(S.a.Item,null,a.placeOfImport)),r.a.createElement(T.a,{color:"magenta",style:{height:20,width:"auto"}},a.goods)),r.a.createElement(w.a,null,r.a.createElement(I.a,{span:8},r.a.createElement("b",null,"Seller")),r.a.createElement(I.a,{span:16},a.sellerName)),r.a.createElement(w.a,null,r.a.createElement(I.a,{span:8},r.a.createElement("b",null,"Buyer")),r.a.createElement(I.a,{span:16},a.buyerName)),r.a.createElement(w.a,null,r.a.createElement(I.a,{span:8},r.a.createElement("b",null,"Contract No.")),r.a.createElement(I.a,{span:16},a.contractNumber)),r.a.createElement(w.a,null,r.a.createElement(I.a,{span:8},r.a.createElement("b",null,"Document No.")),r.a.createElement(I.a,{span:16},a.documentNumber)),r.a.createElement(w.a,null,r.a.createElement(I.a,{span:8},r.a.createElement("b",null,"Invoice No.")),r.a.createElement(I.a,{span:16},a.invoiceNumber)))))},B=(t(268),t(270),t(394),t(87)),K=t.n(B);K.a.initializeApp({apiKey:"AIzaSyBXqTsNBHuMlxRzJRJ14q9lhq-h4XOCxaw",authDomain:"navis-c0f46.firebaseapp.com",databaseURL:"https://navis-c0f46.firebaseio.com",projectId:"navis-c0f46",storageBucket:"navis-c0f46.appspot.com",messagingSenderId:"338809703314",appId:"1:338809703314:web:f330aad6d9956398780f4b"}),n=K.a.firestore(),K.a.storage();K.a;var L=n,P=function(e){var a=e.onClickFunction,t=Object(l.useState)([]),n=Object(C.a)(t,2),c=n[0],o=n[1];return Object(l.useEffect)((function(){L.collection("claims").get().then((function(e){e.forEach((function(e){o(e.data().claims)}))}))})),r.a.createElement("div",{style:{margin:"20px auto"}},c.map((function(e){return r.a.createElement(N,{key:e.id,data:e,onClickFunction:a})})))},D=f.a.Content,H=f.a.Sider,R=O.a.Title,V=O.a.Text,z=function(){var e=["latest","earliest","claimant name"],a=Object(l.useState)("latest"),t=Object(C.a)(a,2),n=t[0],c=t[1],o=r.a.createElement(h.a,{onClick:function(e){c(e.key)}},e.map((function(e){return r.a.createElement(h.a.Item,{key:e},r.a.createElement(V,null,e))})));return r.a.createElement(f.a,{style:{padding:"24px 0",background:"#fff"}},r.a.createElement(H,{width:550,style:{background:"#fff"}},r.a.createElement(h.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},r.a.createElement("div",{style:{margin:"auto 20px"}},r.a.createElement(R,null,"All Transactions"),r.a.createElement(V,null,"sorted by "),r.a.createElement(x.a,{overlay:o},r.a.createElement(V,{style:{color:"blue"}},n," ",e[n]," ",r.a.createElement(y.a,{type:"down"}))),r.a.createElement(P,{sortCriteria:n})))),r.a.createElement(D,{style:{padding:"0 24px",height:"540px"}}))},J=t(403),M=t(398),q=t(404),U=t(57),W=O.a.Title,X=O.a.Text,G=J.a.TextArea,$=function(e){var a=e.data,t=Object(l.useState)({notes:null,permissions:!1}),n=Object(C.a)(t,2),c=n[0],o=n[1];if(null===a)return r.a.createElement("div",null,r.a.createElement(W,{level:2},"Please select a transaction."));return r.a.createElement("div",null,r.a.createElement(W,{level:2},"Claim Application"),r.a.createElement(W,{level:3},"#Transaction ",a.id),r.a.createElement(M.a,{layout:"vertical",onSubmit:function(e){console.log(c)}},r.a.createElement(X,null,"Notes to HKECIC"),r.a.createElement(G,{rows:12,style:{margin:"10px auto"},placeholder:"instructions and information pertaining to the claim",onChange:function(e){c.notes=e.target.value,o({form:c})}}),r.a.createElement(X,null,"Data Permissions"),r.a.createElement(q.a,{style:{display:"block",margin:"10px auto"},onChange:function(e){c.permissions=e.target.checked,o({form:c})}},"Allow HKECIC to see all documents related to transaction"),r.a.createElement(U.a,{type:"primary",htmlType:"submit"},"Submit")))},_=f.a.Content,Q=f.a.Sider,Y=O.a.Title,Z=O.a.Text,ee=function(){var e=Object(l.useState)(null),a=Object(C.a)(e,2),t=a[0],n=a[1];return r.a.createElement(f.a,{style:{padding:"24px 0",background:"#fff"}},r.a.createElement(Q,{width:550,style:{background:"#fff"}},r.a.createElement(h.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},r.a.createElement("div",{style:{margin:"auto 20px"}},r.a.createElement(Y,null,"Make a Claim"),r.a.createElement(Z,null,"Choose Transaction"),r.a.createElement(P,{sortCriteria:null,onClickFunction:function(e){n(e)}})))),r.a.createElement(_,{style:{padding:"0 24px",height:"540px"}},r.a.createElement($,{data:t})))},ae=t(400),te=t(396),ne=(ae.a.Option,function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields((function(e,a){e||console.log("Received values of form: ",a)}))},t.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement("h1",null,"Seller Form"),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),r.a.createElement(M.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:14}},{onSubmit:this.handleSubmit}),r.a.createElement(M.a.Item,{label:"Sale Contract          "},e("upload",{valuePropName:"saleContract",getValueFromEvent:this.normFile})(r.a.createElement(te.a,{name:"sale contract",action:"/upload.do",listType:"picture"},r.a.createElement(U.a,null,r.a.createElement(y.a,{type:"upload"})," Click to upload")))),r.a.createElement(M.a.Item,{label:"Invoice                "},e("upload",{valuePropName:"invoice",getValueFromEvent:this.normFile})(r.a.createElement(te.a,{name:"sale contract",action:"/upload.do",listType:"picture"},r.a.createElement(U.a,null,r.a.createElement(y.a,{type:"upload"})," Click to upload")))),r.a.createElement(M.a.Item,{label:"Bill of lading          "},e("upload",{valuePropName:"saleContract",getValueFromEvent:this.normFile})(r.a.createElement(te.a,{name:"LadingBill",action:"/upload.do",listType:"picture"},r.a.createElement(U.a,null,r.a.createElement(y.a,{type:"upload"})," Click to upload")))),r.a.createElement(M.a.Item,{label:"Export Declaration form "},e("upload",{valuePropName:"saleContract",getValueFromEvent:this.normFile})(r.a.createElement(te.a,{name:"exportDeclaration",action:"/upload.do",listType:"picture"},r.a.createElement(U.a,null,r.a.createElement(y.a,{type:"upload"})," Click to upload")))),r.a.createElement(M.a.Item,{label:"Bank Advice             "},e("upload",{valuePropName:"saleContract",getValueFromEvent:this.normFile})(r.a.createElement(te.a,{name:"bankAdvice",action:"/upload.do",listType:"picture"},r.a.createElement(U.a,null,r.a.createElement(y.a,{type:"upload"})," Click to upload")))),r.a.createElement(M.a.Item,{wrapperCol:{span:12,offset:6}},r.a.createElement(U.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),a}(r.a.Component)),le=M.a.create({name:"validate_other"})(ne),re=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(E.c,null,r.a.createElement(k,null,r.a.createElement(E.a,{exact:!0,path:"/",component:z}),r.a.createElement(E.a,{exact:!0,path:"/makeClaim",component:ee}),r.a.createElement(E.a,{exact:!0,path:"/openSellerForm",component:le}))))}}]),a}(r.a.Component);var ce=function(){return r.a.createElement(re,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[194,1,2]]]);
//# sourceMappingURL=main.2e263784.chunk.js.map