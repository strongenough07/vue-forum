(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Register"],{"56b4":function(e,a,t){"use strict";t.r(a);t("b0c0");var r=t("7a23"),n={class:"flex-grid justify-center"},i={class:"col-2"},l=Object(r["i"])("h1",{class:"text-center"},"Register",-1),o={class:"form-group"},s={for:"avatar"},u=Object(r["l"])(" Avatar "),c={key:0},m=["src"],d=Object(r["i"])("div",{class:"form-actions"},[Object(r["i"])("button",{type:"submit",class:"btn-blue btn-block"},"Register")],-1),b={class:"text-center push-top"},f=Object(r["i"])("i",{class:"fa fa-google fa-btn"},null,-1),p=Object(r["l"])("Sign up with Google "),g=[f,p];function v(e,a,t,f,p,v){var j=Object(r["L"])("AppFormField"),h=Object(r["L"])("VeeField"),O=Object(r["L"])("VeeErrorMessage"),w=Object(r["L"])("VeeForm");return Object(r["C"])(),Object(r["h"])("div",n,[Object(r["i"])("div",i,[Object(r["m"])(w,{onSubmit:v.register,class:"card card-form"},{default:Object(r["Z"])((function(){return[l,Object(r["m"])(j,{modelValue:p.form.name,"onUpdate:modelValue":a[0]||(a[0]=function(e){return p.form.name=e}),name:"name",label:"Name",rules:"required"},null,8,["modelValue"]),Object(r["m"])(j,{modelValue:p.form.username,"onUpdate:modelValue":a[1]||(a[1]=function(e){return p.form.username=e}),name:"username",label:"Username",rules:"required|unique"},null,8,["modelValue"]),Object(r["m"])(j,{modelValue:p.form.email,"onUpdate:modelValue":a[2]||(a[2]=function(e){return p.form.email=e}),name:"email",label:"Email",rules:"required|email|unique",type:"email"},null,8,["modelValue"]),Object(r["m"])(j,{modelValue:p.form.password,"onUpdate:modelValue":a[3]||(a[3]=function(e){return p.form.password=e}),name:"password",label:"Password",rules:"required|min:8",type:"password"},null,8,["modelValue"]),Object(r["i"])("div",o,[Object(r["i"])("label",s,[u,p.avatarPreview?(Object(r["C"])(),Object(r["h"])("div",c,[Object(r["i"])("img",{src:p.avatarPreview,class:"avatar-xlarge"},null,8,m)])):Object(r["g"])("",!0)]),Object(r["ab"])(Object(r["m"])(h,{name:"avatar",id:"avatar",type:"file",class:"form-input",onChange:v.handleImageUpload,accept:"image/*"},null,8,["onChange"]),[[r["V"],!p.avatarPreview]])]),Object(r["m"])(O,{name:"avatar",class:"form-error"}),d]})),_:1},8,["onSubmit"]),Object(r["i"])("div",b,[Object(r["i"])("button",{onClick:a[4]||(a[4]=function(){return v.registerWithGoogle&&v.registerWithGoogle.apply(v,arguments)}),class:"btn-red btn-xsmall"},g)])])])}t("96cf");var j=t("1da1"),h={data:function(){return{avatarPreview:null,form:{name:"",username:"",email:"",password:"",avatar:""}}},methods:{register:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("auth/registerUserWithEmailAndPassword",e.form);case 2:e.$router.push("/");case 3:case"end":return a.stop()}}),a)})))()},registerWithGoogle:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("auth/signInWithGoogle");case 2:e.$router.push("/");case 3:case"end":return a.stop()}}),a)})))()},handleImageUpload:function(e){var a=this;this.form.avatar=e.target.files[0];var t=new FileReader;t.onload=function(e){a.avatarPreview=e.target.result},t.readAsDataURL(this.form.avatar)}},created:function(){this.$emit("ready")}};h.render=v;a["default"]=h}}]);
//# sourceMappingURL=Register.e122959c.js.map