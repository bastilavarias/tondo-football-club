(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return h}));var n=r(342),o=r(1),c=Object(o.f)("v-card__actions"),l=Object(o.f)("v-card__subtitle"),d=Object(o.f)("v-card__text"),h=Object(o.f)("v-card__title");n.a},334:function(t,e,r){var content=r(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("74a335fa",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r(37);e.a={computed:{screenBreakPoint:function(){return this.$vuetify.breakpoint.name},isOnMobile:function(){return"xs"===this.screenBreakPoint||"sm"===this.screenBreakPoint},test:function(){return this.$vuetify.breakpoint}},methods:{cutText:function(text,t){var e=text;return text.length>t&&(e="".concat(text.slice(0,t),"...")),e}}}},337:function(t,e,r){"use strict";var n={name:"generic-content-holder",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},image:{required:!0}}},o=(r(339),r(14)),c=r(22),l=r.n(c),d=r(332),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-background pt-10",style:"background-image: url('"+t.image+"')"},[r("div",{staticClass:"text-center",staticStyle:{color:"#ffffff"}},[r("v-container",[r("h1",{staticClass:"display-2 font-weight-bold mb-10"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"subtitle-1"},[t._v(t._s(t.subtitle))])])],1),t._v(" "),t._t("default")],2)}),[],!1,null,"033b1506",null);e.a=component.exports;l()(component,{VContainer:d.a})},339:function(t,e,r){"use strict";var n=r(334);r.n(n).a},340:function(t,e,r){(e=r(10)(!1)).push([t.i,".content-background[data-v-033b1506]{width:100%;height:auto;background-repeat:no-repeat;background-position:50%;background-size:cover}",""]),t.exports=e},342:function(t,e,r){"use strict";r(12),r(9),r(7),r(5),r(8);var n=r(2),o=(r(21),r(345),r(141)),c=r(343),l=r(36),d=r(6);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return v({"v-card":!0},l.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},343:function(t,e,r){"use strict";r(21);var n=r(0),o=r(344);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},344:function(t,e,r){"use strict";r(12),r(9),r(7),r(5),r(8),r(139);var n=r(2),o=(r(21),r(347),r(81)),c=r(23),l=r(63),d=r(140),h=r(19),v=r(1),f=r(6);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _=Object(f.a)(c.a,Object(l.b)(["absolute","fixed","top","bottom"]),d.a,h.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v.e)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v.e)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.$vuetify.rtl?"right":"left",Object(v.e)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(v.e)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(v.e)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(v.n)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(v.e)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=_},345:function(t,e,r){var content=r(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("e23b7040",content,!0,{sourceMap:!1})},346:function(t,e,r){(e=r(10)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--light.v-card.v-card--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:thin solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;-webkit-transition-property:box-shadow,opacity;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;-webkit-transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;-webkit-transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;-webkit-transition:opacity .2s;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;-webkit-transition:inherit;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""]),t.exports=e},347:function(t,e,r){var content=r(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("cf87dc84",content,!0,{sourceMap:!1})},348:function(t,e,r){(e=r(10)(!1)).push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;-webkit-transition:.2s cubic-bezier(.4,0,.6,1);transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;width:100%;z-index:1}.v-progress-linear__background,.v-progress-linear__buffer{left:0;position:absolute;top:0;-webkit-transition:inherit;transition:inherit}.v-progress-linear__background{bottom:0}.v-progress-linear__content{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;height:100%;left:0;-webkit-box-pack:center;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear__determinate{height:inherit;-webkit-transition:inherit;transition:inherit}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate--active .long{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__indeterminate--active .short{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__stream{-webkit-animation:stream .25s linear infinite;animation:stream .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);-webkit-transition:inherit;transition:inherit}.v-progress-linear__wrapper{overflow:hidden;position:relative;-webkit-transition:inherit;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat-x}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes stream{to{-webkit-transform:translateX(-8px);transform:translateX(-8px)}}@keyframes stream{to{-webkit-transform:translateX(-8px);transform:translateX(-8px)}}",""]),t.exports=e},382:function(t,e,r){t.exports=r.p+"img/d5b44be.jpg"},431:function(t,e,r){"use strict";r.r(e);var n=r(337),o=r(335),c={name:"article-item-view",props:{title:{type:String,required:!0},content:{type:String,required:!0}}},l=r(14),d=r(22),h=r.n(d),v=r(321),f=r(342),m=r(333),_=r(129),y=r(189),x=r(78),k=r(132),w=r(13),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("v-card",{attrs:{outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4 grey--text"},[t._v("February 20, 2020")]),t._v(" "),n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(t.title))]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.content))])],1),t._v(" "),n("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}},[n("v-img",{attrs:{src:r(382)}})],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"",small:"",icon:"",color:"primary"}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-book-open")])],1)],1)],1)],1)}),[],!1,null,null,null),O=component.exports;h()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VIcon:_.a,VImg:y.a,VListItem:x.a,VListItemAvatar:k.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c});var j={name:"articles",components:{ArticleItemView:O,GenericContentHolder:n.a},data:function(){return{posts:[]}},mixins:[o.a],computed:{featuredArticles:function(){return this.posts.slice(0,4)}},mounted:function(){var t=this;fetch("//jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(e){t.posts=e.slice(0,12),console.log(t.posts)}))}},C=r(328),B=r(332),z=r(329),P=Object(l.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticStyle:{height:"100px"}}),t._v(" "),r("v-container",[r("generic-content-holder",{staticClass:"white",attrs:{"has-separator":"",title:"Featured Articles"}},[r("div",{staticClass:"mb-10"}),t._v(" "),r("v-row",[t._l(t.featuredArticles,(function(t,e){return[r("v-col",{attrs:{cols:"12",md:"4",lg:"3"}},[r("article-item-view",{key:e,attrs:{title:t.title,content:t.body}})],1)]}))],2)],1),t._v(" "),r("div",{staticClass:"mb-10"}),t._v(" "),r("generic-content-holder",{staticClass:"white",attrs:{"has-separator":"",title:"Posted Articles"}},[r("div",{staticClass:"mb-10"}),t._v(" "),r("v-row",[t._l(t.posts,(function(t,e){return[r("v-col",{attrs:{cols:"12",md:"4",lg:"3"}},[r("article-item-view",{key:e,attrs:{title:t.title,content:t.body}})],1)]}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=P.exports;h()(P,{VCol:C.a,VContainer:B.a,VRow:z.a})}}]);