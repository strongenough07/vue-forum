(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Category"],{"5d64":function(t,e,r){"use strict";r.r(e);r("b0c0");var a=r("7a23"),c={key:0,class:"container col-full"};function n(t,e,r,n,s,i){var o=Object(a["L"])("ForumList");return t.asyncDataStatus_ready?(Object(a["C"])(),Object(a["h"])("div",c,[Object(a["i"])("h1",null,Object(a["Q"])(i.category.name),1),Object(a["m"])(o,{title:i.category.name,forums:i.getForumsForCategory(i.category)},null,8,["title","forums"])])):Object(a["g"])("",!0)}r("4de4"),r("96cf");var s=r("1da1"),i=r("5530"),o=r("8708"),u=r("ce96"),d=r("5502"),l=r("cae2"),b={components:{ForumList:o["a"]},mixins:[l["a"]],props:{id:{required:!0,type:String}},computed:{category:function(){return Object(u["c"])(this.$store.state.categories.items,this.id)||{}}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["b"])("categories",["fetchCategory"])),Object(d["b"])("forums",["fetchForums"])),{},{getForumsForCategory:function(t){return this.$store.state.forums.items.filter((function(e){return e.categoryId===t.id}))}}),created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCategory({id:t.id});case 2:return r=e.sent,e.next=5,t.fetchForums({ids:r.forums});case 5:t.asyncDataStatus_fetched();case 6:case"end":return e.stop()}}),e)})))()}};b.render=n;e["default"]=b},8708:function(t,e,r){"use strict";r("a4d3"),r("e01a"),r("b0c0");var a=r("7a23"),c={class:"col-full"},n={class:"forum-list"},s={class:"list-title"},i={key:1},o={class:"forum-details"},u={class:"threads-count"},d={class:"count"},l=Object(a["i"])("div",{class:"last-thread"},null,-1);function b(t,e,r,b,j,O){var f=Object(a["L"])("router-link");return Object(a["C"])(),Object(a["h"])("div",c,[Object(a["i"])("div",n,[Object(a["i"])("h2",s,[r.categoryId?(Object(a["C"])(),Object(a["f"])(f,{key:0,to:{name:"Category",params:{id:r.categoryId}}},{default:Object(a["Z"])((function(){return[Object(a["l"])(Object(a["Q"])(r.title),1)]})),_:1},8,["to"])):(Object(a["C"])(),Object(a["h"])("span",i,Object(a["Q"])(r.title),1))]),(Object(a["C"])(!0),Object(a["h"])(a["a"],null,Object(a["J"])(r.forums,(function(t){var e;return Object(a["C"])(),Object(a["h"])("div",{class:"forum-listing",key:t.id},[Object(a["i"])("div",o,[Object(a["m"])(f,{to:{name:"Forum",params:{id:t.id}},class:"text-xlarge"},{default:Object(a["Z"])((function(){return[Object(a["l"])(Object(a["Q"])(t.name),1)]})),_:2},1032,["to"]),Object(a["i"])("p",null,Object(a["Q"])(t.description),1)]),Object(a["i"])("div",u,[Object(a["i"])("p",null,[Object(a["i"])("span",d,Object(a["Q"])(null===(e=t.threads)||void 0===e?void 0:e.length),1),Object(a["l"])(" "+Object(a["Q"])(O.forumThreadsWord(t)),1)])]),l])})),128))])])}var j={props:{forums:{required:!0,type:Array},title:{type:String,default:"Forums"},categoryId:{required:!1,type:String}},methods:{forumThreadsWord:function(t){var e;return null!==(e=t.threads)&&void 0!==e&&e.length?t.threads.length>1?"threads":"thread":"no threads"}}};j.render=b;e["a"]=j},cae2:function(t,e,r){"use strict";e["a"]={data:function(){return{asyncDataStatus_ready:!1}},methods:{asyncDataStatus_fetched:function(){this.asyncDataStatus_ready=!0,this.$emit("ready")}}}}}]);
//# sourceMappingURL=Category.bfa17d3d.js.map