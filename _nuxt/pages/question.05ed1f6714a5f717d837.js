webpackJsonp([1],{"0mIN":function(t,e,n){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"button prev",on:{click:this.clickPrev}},[this._v("이전")]),e("div",{staticClass:"button next",on:{click:this.clickNext}},[this._v("다음")])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},A0ec:function(t,e,n){var s=n("kPZZ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("41f6a0b2",s,!1,{sourceMap:!1})},J6V4:function(t,e,n){var s=n("uyv5");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("3673c764",s,!1,{sourceMap:!1})},WhC7:function(t,e,n){"use strict";var s=n("mtWM"),i=n.n(s);e.a={init:function(){i.a.defaults.baseURL="https://35.221.106.237:8080/",i.a.defaults.headers.get["Content-Type"]="application/json"},get:function(t,e){return i.a.get(t,e)}}},kPZZ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".footer[data-v-343f8f2b]{width:100%;display:grid;grid-template-columns:1fr 1fr;color:#fff;min-height:60px;max-width:500px}.footer .button[data-v-343f8f2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.footer .button.prev[data-v-343f8f2b]{background-color:#243327}.footer .button.next[data-v-343f8f2b]{background-color:#62976c}",""])},mjmt:function(t,e,n){"use strict";var s=n("tUzm"),i=n("WhC7");e.a={name:"",data:function(){return{question:"",answers:[],next_id:0,selected:!1,answer_list:[]}},computed:{setHalf:function(){return this.answers.length>=3}},mounted:function(){var t=this;i.a.get("questions/next").then(function(e){var n=e.data;t.question=n.question,t.answers=n.answers})},methods:{setNextId:function(t){this.selected=t},clickNext:function(){var t=this.selected;if(t.isLeaf)if(/search/.test(t.targetUrl))this.$router.push("/search");else if(t.targetUrl)this.$router.push({path:"/result",props:{key:t.targetUrl,keys:""}});else{var e=this.answer_list.join(",");this.$router.push({path:"/result",props:{key:"",keys:e}})}else this.answer_list.push(t.id),this.getQuestion(t.nextQuestionId)},clickPrev:function(){this.answer_list.pop()&&this.$router.back()},getQuestion:function(t){var e=this;i.a.get("questions/next?parent_id="+t).then(function(t){var n=t.data;e.question=n.question,e.answers=n.answers})}},components:{FooterButton:s.a}}},raou:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("mjmt"),i=n("tOVW"),a=!1;var r=function(t){a||n("J6V4")},o=n("VU/8")(s.a,i.a,!1,r,"data-v-7ec1465f",null);o.options.__file="pages/question.vue",e.default=o.exports},tOVW:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.question))]),n("h2",{staticClass:"sub-title"},[t._v("아래 항목을 선택해 주세요.")]),n("section",{staticClass:"answer-wrap",class:{two:2===t.answers.length}},t._l(t.answers,function(e){return n("button",{key:e.id,staticClass:"answer",class:{selected:e===t.selected},on:{click:function(n){t.setNextId(e)}}},[t._v("\n      "+t._s(e.description)+"\n    ")])})),n("footer-button",{on:{next:t.clickNext,prev:t.clickPrev}})],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},tUzm:function(t,e,n){"use strict";var s=n("xkNX"),i=n("0mIN"),a=!1;var r=function(t){a||n("A0ec")},o=n("VU/8")(s.a,i.a,!1,r,"data-v-343f8f2b",null);o.options.__file="components/question/FooterButton.vue",e.a=o.exports},uyv5:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".container[data-v-7ec1465f]{width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:500px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#f8f8f7}.container .title[data-v-7ec1465f]{width:85%;text-align:center;word-break:keep-all}.container .sub-title[data-v-7ec1465f]{margin:4vh 0;font-size:16px;font-size:1rem}.container .answer-wrap[data-v-7ec1465f]{width:80%;height:52vh;display:grid;grid-template-columns:repeat(2,50%);grid-template-rows:repeat(2,50%);grid-gap:1vw}.container .answer-wrap .answer[data-v-7ec1465f]{width:100%;text-align:center;background-color:#fff;border:0;font-size:16px;font-size:1rem}.container .answer-wrap .answer[data-v-7ec1465f]:focus{outline:0}.container .answer-wrap .answer.selected[data-v-7ec1465f]{background-color:#82aa12}.container .answer-wrap.two[data-v-7ec1465f]{grid-template-columns:100%}.container .footer[data-v-7ec1465f]{position:absolute;bottom:0}",""])},xkNX:function(t,e,n){"use strict";e.a={methods:{clickNext:function(){this.$emit("next")},clickPrev:function(){this.$emit("prev")}}}}});