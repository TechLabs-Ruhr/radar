(window.webpackJsonp=window.webpackJsonp||[]).push([[23,4,5,15,22],{436:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("1eb89c8e",content,!0,{sourceMap:!1})},438:function(t,e,n){"use strict";n.r(e);var r=n(35),o=Object(r.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),c=(n(439),n(15)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},439:function(t,e,n){"use strict";n(436)},440:function(t,e,n){var r=n(61)(!1);r.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=r},442:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(443),o=n(434);function c(t,e){Object(o.a)(2,arguments);var n=Object(r.a)(t),c=Object(r.a)(e);return n.getTime()===c.getTime()}},443:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(435),o=n(434);function c(t){Object(o.a)(1,arguments);var e=Object(r.a)(t);return e.setHours(0,0,0,0),e}},444:function(t,e,n){"use strict";n.r(e);var r=n(35),o=Object(r.b)({props:{resource:{type:Object,required:!0}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools",game:"dice"}}}}),c=n(15),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:border-blue-600 hover:shadow-lg hover:text-blue-600",attrs:{href:t.resource.url,target:"blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(151).default})},445:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(35),o=n(447),c=n(449),l=n(464),f=n(453),v=function(t){var e=Object(r.a)((function(){return Object(o.a)(t.date)})),n=Object(r.a)((function(){return Object(c.a)(t.date)}));return{isLive:Object(r.a)((function(){var e=Object(l.a)(new Date,t.date);return e>=0&&e<=120})),isFutureDate:e,isTodayDate:n,isInOneHour:Object(r.a)((function(){var e=Object(l.a)(t.date,new Date);return e<=60&&e>=0})),isPastDate:Object(r.a)((function(){return Object(f.a)(t.date)}))}}},446:function(t,e,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("612abbb6",content,!0,{sourceMap:!1})},447:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(435),o=n(434);function c(t){return Object(o.a)(1,arguments),Object(r.a)(t).getTime()>Date.now()}},449:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(442),o=n(434);function c(t){return Object(o.a)(1,arguments),Object(r.a)(t,Date.now())}},450:function(t,e,n){"use strict";n.r(e);n(30),n(19),n(29),n(32),n(20),n(36);var r=n(10),o=n(510),c=n(35),l=n(445);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(c.b)({props:{tlEvent:{type:Object,required:!0},isCurrentEvent:{type:Boolean},isPastEvent:{type:Boolean},showResources:{type:Boolean},showPermalink:{type:Boolean}},setup:function(t){var e=new Date(t.tlEvent.date),n=Object(l.a)(v(v({},t.tlEvent),{},{date:e})),r=n.isPastDate,f=n.isFutureDate,d=n.isLive,m=n.isInOneHour,O=Object(c.a)((function(){return t.tlEvent.resources||t.tlEvent.forms||t.tlEvent.meetings})),j=Object(c.a)((function(){return d.value?"Taking":r.value?"Took":"Takes"}));return{format:o.a,eventDate:e,hasResources:O,isInOneHour:m,isLive:d,isPastDate:r,isFutureDate:f,verb:j}}}),m=(n(454),n(15)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WrapperContentBox",{attrs:{faded:t.isPastDate&&!t.isLive,emphasized:t.isCurrentEvent}},[n("article",{staticClass:"relative pt-8 lg:pt-0"},[t.isCurrentEvent?n("Stamp",{attrs:{date:t.eventDate}}):t._e(),t._v(" "),n("header",{staticClass:"flex flex-col items-center mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center",class:t.isCurrentEvent?"text-pink-600":"text-gray-400"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"calendar-day"}})],1),t._v(" "),t.showPermalink?[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/event/"+t.tlEvent.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold hover:underline"},[t._v("\n            "+t._s(t.tlEvent.name)+"\n            "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-blue-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])])]:[n("h2",{staticClass:"inline-block mb-1 text-2xl font-bold"},[t._v("\n          "+t._s(t.tlEvent.name)+"\n        ")])],t._v(" "),n("div",[n("p",{staticClass:"text-lg text-center"},[t._v("\n          "+t._s(t.verb)+" place on\n          "+t._s(t.format(t.eventDate,"MMMM do, 'at' h:mm aaaa"))+"\n        ")])])],2),t._v(" "),n("main",[n("div",{staticClass:"pb-10 prose",domProps:{innerHTML:t._s(t.$md.render(t.tlEvent.description))}})]),t._v(" "),t.hasResources?n("aside",{staticClass:"space-y-8"},[(t.isInOneHour||t.isLive)&&t.tlEvent.meetings&&t.tlEvent.meetings.length?[n("EventListItemResourceList",{attrs:{resources:t.tlEvent.meetings,title:"Meeting Rooms"}})]:t.isCurrentEvent?[n("p",{staticClass:"italic text-center text-gray-400"},[t._v("\n          Links and other resources will be posted soon!\n        ")])]:t._e(),t._v(" "),t.isLive||t.isPastDate?[t.tlEvent.forms&&t.tlEvent.forms.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.forms,title:"Forms"}}):t._e(),t._v(" "),t.tlEvent.resources&&t.tlEvent.resources.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.resources,title:"Resources"}}):t._e()]:t._e()],2):t._e()],1)])}),[],!1,null,"400f0aa2",null);e.default=component.exports;installComponents(component,{Stamp:n(451).default,TIcon:n(151).default,EventListItemResourceList:n(452).default,WrapperContentBox:n(438).default})},451:function(t,e,n){"use strict";n.r(e);var r=n(35),o=n(445),c=Object(r.b)({props:{date:{type:Date,default:new Date}},setup:function(t){var e=Object(o.a)({date:t.date}),n=e.isLive,c=e.isFutureDate,l=e.isTodayDate,text=Object(r.a)((function(){return n.value?"live!":l.value?"today!":"next"})),f=Object(r.a)((function(){return c.value&&!l.value?"text-blue-600 bg-white":"text-white bg-blue-600"}));return{isFutureDate:c,isTodayDate:l,text:text,classNames:f,isLive:n}}}),l=n(15),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow",class:t.classNames},[n("span",[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},452:function(t,e,n){"use strict";n.r(e);var r=n(35),o=Object(r.b)({props:{resources:{type:Array,default:function(){return[]}},title:{type:String,default:""}},setup:function(){return{}}}),c=n(15),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"title-with-lines"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"link-grid"},t._l(t.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResourceListItem:n(444).default})},453:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(435),o=n(434);function c(t){return Object(o.a)(1,arguments),Object(r.a)(t).getTime()<Date.now()}},454:function(t,e,n){"use strict";n(446)},455:function(t,e,n){var r=n(61)(!1);r.push([t.i,".title-link:hover .icon[data-v-400f0aa2]{display:inline-block}",""]),t.exports=r},464:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(435),o=n(434);function c(t,e){Object(o.a)(2,arguments);var n=Object(r.a)(t),c=Object(r.a)(e);return n.getTime()-c.getTime()}function l(t,e){Object(o.a)(2,arguments);var n=c(t,e)/6e4;return n>0?Math.floor(n):Math.ceil(n)}},514:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(37),n(35)),c=Object(o.b)({setup:function(){var t=Object(o.e)().$content,e=Object(o.g)(),n=Object(o.d)("");return Object(o.f)(Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t("/events").where({slug:e.value.params.slug}).limit(1).fetch();case 2:return r.abrupt("return",n.value=r.sent);case 3:case"end":return r.stop()}}),r)})))),{event:n}}}),l=n(15),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"space-y-4 lg:mx-auto lg:max-w-2xl"},[n("NuxtLink",{staticClass:"text-gray-500 hover:text-gray-700",attrs:{to:"/"}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-left"}}),t._v(" Back to the\n      Timeline")],1),t._v(" "),t.$fetchState.pending?n("WrapperContentBox",[t._v("Loading...")]):n("EventListItem",{attrs:{"tl-event":t.event[0],"show-resources":""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(151).default,WrapperContentBox:n(438).default,EventListItem:n(450).default})}}]);