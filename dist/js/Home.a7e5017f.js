(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"0481":function(t,e,r){"use strict";var a=r("23e7"),c=r("a2bf"),n=r("7b0b"),s=r("50c4"),i=r("a691"),o=r("65f0");a({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=n(this),r=s(e.length),a=o(e,0);return a.length=c(a,e,e,r,0,void 0===t?1:i(t)),a}})},4069:function(t,e,r){var a=r("44d2");a("flat")},8708:function(t,e,r){"use strict";r("a4d3"),r("e01a"),r("b0c0");var a=r("7a23"),c={class:"col-full"},n={class:"forum-list"},s={class:"list-title"},i={key:1},o={class:"forum-details"},u={class:"threads-count"},d={class:"count"},l=Object(a["i"])("div",{class:"last-thread"},null,-1);function b(t,e,r,b,f,h){var j=Object(a["L"])("router-link");return Object(a["C"])(),Object(a["h"])("div",c,[Object(a["i"])("div",n,[Object(a["i"])("h2",s,[r.categoryId?(Object(a["C"])(),Object(a["f"])(j,{key:0,to:{name:"Category",params:{id:r.categoryId}}},{default:Object(a["Z"])((function(){return[Object(a["l"])(Object(a["Q"])(r.title),1)]})),_:1},8,["to"])):(Object(a["C"])(),Object(a["h"])("span",i,Object(a["Q"])(r.title),1))]),(Object(a["C"])(!0),Object(a["h"])(a["a"],null,Object(a["J"])(r.forums,(function(t){var e;return Object(a["C"])(),Object(a["h"])("div",{class:"forum-listing",key:t.id},[Object(a["i"])("div",o,[Object(a["m"])(j,{to:{name:"Forum",params:{id:t.id}},class:"text-xlarge"},{default:Object(a["Z"])((function(){return[Object(a["l"])(Object(a["Q"])(t.name),1)]})),_:2},1032,["to"]),Object(a["i"])("p",null,Object(a["Q"])(t.description),1)]),Object(a["i"])("div",u,[Object(a["i"])("p",null,[Object(a["i"])("span",d,Object(a["Q"])(null===(e=t.threads)||void 0===e?void 0:e.length),1),Object(a["l"])(" "+Object(a["Q"])(h.forumThreadsWord(t)),1)])]),l])})),128))])])}var f={props:{forums:{required:!0,type:Array},title:{type:String,default:"Forums"},categoryId:{required:!1,type:String}},methods:{forumThreadsWord:function(t){var e;return null!==(e=t.threads)&&void 0!==e&&e.length?t.threads.length>1?"threads":"thread":"no threads"}}};f.render=b;e["a"]=f},a2bf:function(t,e,r){"use strict";var a=r("e8b5"),c=r("50c4"),n=r("0366"),s=function(t,e,r,i,o,u,d,l){var b,f=o,h=0,j=!!d&&n(d,l,3);while(h<i){if(h in r){if(b=j?j(r[h],h,e):r[h],u>0&&a(b))f=s(t,e,b,c(b.length),f,u-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[f]=b}f++}h++}return f};t.exports=s},bc13:function(t,e,r){"use strict";r.r(e);var a=r("7a23"),c={key:0,class:"container"},n=Object(a["i"])("h1",{class:"push-top"},"Welcome to the Forum",-1);function s(t,e,r,s,i,o){var u=Object(a["L"])("CategoryList");return t.asyncDataStatus_ready?(Object(a["C"])(),Object(a["h"])("div",c,[n,Object(a["m"])(u,{categories:o.categories},null,8,["categories"])])):Object(a["g"])("",!0)}r("0481"),r("d81d"),r("4069"),r("96cf");var i=r("1da1"),o=r("5530");r("b0c0");function u(t,e,r,c,n,s){var i=Object(a["L"])("ForumList");return Object(a["C"])(!0),Object(a["h"])(a["a"],null,Object(a["J"])(r.categories,(function(t){return Object(a["C"])(),Object(a["f"])(i,{key:t.id,forums:s.getForumsForCategory(t),title:t.name,"category-id":t.id},null,8,["forums","title","category-id"])})),128)}r("4de4");var d=r("8708"),l={components:{ForumList:d["a"]},props:{categories:{required:!0,type:Array}},methods:{getForumsForCategory:function(t){return this.$store.state.forums.items.filter((function(e){return e.categoryId===t.id}))}}};l.render=u;var b=l,f=r("5502"),h=r("cae2"),j={components:{CategoryList:b},mixins:[h["a"]],computed:{categories:function(){return this.$store.state.categories.items}},methods:Object(o["a"])(Object(o["a"])({},Object(f["b"])("categories",["fetchAllCategories"])),Object(f["b"])("forums",["fetchForums"])),created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchAllCategories();case 2:return r=e.sent,a=r.map((function(t){return t.forums})).flat(),e.next=6,t.fetchForums({ids:a});case 6:t.asyncDataStatus_fetched();case 7:case"end":return e.stop()}}),e)})))()}};j.render=s;e["default"]=j},cae2:function(t,e,r){"use strict";e["a"]={data:function(){return{asyncDataStatus_ready:!1}},methods:{asyncDataStatus_fetched:function(){this.asyncDataStatus_ready=!0,this.$emit("ready")}}}}}]);
//# sourceMappingURL=Home.a7e5017f.js.map