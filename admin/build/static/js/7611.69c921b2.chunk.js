(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[7611],{37611:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return D}});var o=n(72791),r=n(47022),i=n(89743),a=n(2677),s=n(11087),c=n(52007);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}function m(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function h(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f(t);if(e){var r=f(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h(this,n)}}function v(t){return function(t){if(Array.isArray(t))return T(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),r=o?o[1]:"",i=o?o[3]:"",a=o?o[2]:n,s=a.length>=e?a:(v(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(r).concat(s).concat(i)}var S={daysInHours:!1,zeroPadTime:2};function A(t,e){var n=t.days,o=t.hours,r=t.minutes,i=t.seconds,a=Object.assign(Object.assign({},S),e),s=a.daysInHours,c=a.zeroPadTime,u=a.zeroPadDays,l=void 0===u?c:u,p=Math.min(2,c),m=s?g(o+24*n,c):g(o,p);return{days:s?"":g(n,l),hours:m,minutes:g(r,p),seconds:g(i,p)}}var b=function(t){m(n,t);var e=y(n);function n(){var t;return u(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return p(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,o.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(o.Component);b.propTypes={count:c.number,children:c.element,onComplete:c.func};var C=function(t){m(n,t);var e=y(n);function n(t){var r;if(u(this,n),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,o.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(t){r.props.onComplete&&r.props.onComplete(t)},t.date){var i=r.calcTimeDelta();r.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return p(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,r=t.controlled,i=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,r=void 0===o?Date.now:o,i=n.precision,a=void 0===i?0:i,s=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=u);var p=s?e:e-r(),m=Math.min(20,Math.max(0,a)),f=Math.round(1e3*parseFloat(((l?p:Math.max(0,p))/1e3).toFixed(m))),d=Math.abs(f)/1e3;return{total:f,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:f<=0}}(e,{now:n,precision:o,controlled:r,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var r;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(n){var r=e||n.status;return t.completed&&!o.props.overtime?r="COMPLETED":e||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:t,status:r}}),(function(){n&&n(o.state.timeDelta),r&&r(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:A(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return(0,o.createElement)(b,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var i=this.props,a=i.className,s=i.overtime,c=i.children,u=i.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!s)return(0,o.cloneElement)(c,{countdown:l});var p=l.formatted,m=p.days,f=p.hours,d=p.minutes,h=p.seconds;return(0,o.createElement)("span",{className:a},l.total<0?"-":"",m,m?":":"",f,":",d,":",h)}}]),n}(o.Component);C.defaultProps=Object.assign(Object.assign({},S),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),C.propTypes={date:(0,c.oneOfType)([(0,c.instanceOf)(Date),c.string,c.number]),daysInHours:c.bool,zeroPadTime:c.number,zeroPadDays:c.number,controlled:c.bool,intervalDelay:c.number,precision:c.number,autoStart:c.bool,overtime:c.bool,className:c.string,children:c.element,renderer:c.func,now:c.func,onMount:c.func,onStart:c.func,onPause:c.func,onStop:c.func,onTick:c.func,onComplete:c.func};var j=C,x=n(42874),w=n(80184),D=function(){(0,o.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[]);return(0,w.jsx)("div",{className:"account-pages my-5",children:(0,w.jsxs)(r.Z,{children:[(0,w.jsx)(i.Z,{children:(0,w.jsx)(a.Z,{xs:12,children:(0,w.jsxs)("div",{className:"text-center",children:[(0,w.jsx)(s.rU,{to:"/",className:"logo",children:(0,w.jsx)("img",{src:x,alt:"logo",height:"22",className:"logo-light mx-auto"})}),(0,w.jsx)("h3",{className:"mt-4",children:"Stay tunned, we're launching very soon"}),(0,w.jsx)("p",{className:"text-muted",children:"We're making the system more awesome."})]})})}),(0,w.jsx)(i.Z,{className:"mt-5 justify-content-center",children:(0,w.jsx)(a.Z,{md:8,className:"text-center",children:(0,w.jsx)(j,{date:Date.parse("2022/12/31"),renderer:function(t){var e=t.days,n=t.hours,o=t.minutes,r=t.seconds;return t.completed?(0,w.jsx)("h3",{children:"Coming Soon"}):(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:"counter-number",children:[(0,w.jsxs)("div",{className:"coming-box",children:[e,(0,w.jsx)("span",{children:"Days"})]}),(0,w.jsxs)("div",{className:"coming-box",children:[n,(0,w.jsx)("span",{children:"Hours"})]}),(0,w.jsxs)("div",{className:"coming-box",children:[o,(0,w.jsx)("span",{children:"Minutes"})]}),(0,w.jsxs)("div",{className:"coming-box",children:[r,(0,w.jsx)("span",{children:"Seconds"})]})]})})}})})})]})})}},80888:function(t,e,n){"use strict";var o=n(79047);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},52007:function(t,e,n){t.exports=n(80888)()},79047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},42874:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAQCAYAAADtT6rEAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABPJJREFUeJzVmH+IVUUUx5/ruq6irqmtpIaoqOiiZbWjZpmgVARqIa0tmxXU9s/GWmCChaVEUrGCUvnbSlKpVdNUEH/0S1nyR2VaCeaPJSHFCkmtLHfd1/c43/EdZ++97933FNYLH3jv3JkzM+c7c2bmJhLqSVZUFIKxYAmoBw2gERwFS8F40CYR8zFmTGtQQPLj1qePvmAw6JNN/Qi/+WAseAAUXkvfWT0IcHvwIbgIkiE0UKQOcXxjgDPBQfIRuDlu/1BnN/gH7IxbN43fyaCRPHstfcd+KMLqkOBfAucpwilwAswFRZn4xuCKwCGQJA1gQtw+os5+1t8Tf4SRft9QfVuQg5/R4CnwYFYOmI5WRqyChWAkmA5aZdHB8eCSGqzwaRZ+rpcQfcBn4AswJAc/q9m/L7NygODeCy5ECHEEfAK+A2+C1xWDMujgErUSDvP3OdAx5kCvixD0nQdi732qvuyBW3MVYlmECOl4J00H24Mz7OAO8IJaFVNC6sjm+Qh4D2wGi7jsmwmB36VgFngRdAevgW1gPXiCvm4HCznra8GjEjjloz99zHIrQkQBVbQ9Bu4Bq+h7MRig6peDFeBf9q+e9e73xjUM1IhQ4Cv6uUsLcTwHIQ6AggghJqvAPy0DAGf5X2ZQs1QH2/teGhOawF8BQlTRdh78FlBHfF307JImn1M+HlLvytUEcvvaKWMPCdrHSXA3y64P6K9Qo9qYzozgl/kPzL48MbgJ6+B+C8aB0RlQCgKPo1yua9jgEWOPn/mcEWL7A/Tz6pSpTsr7TWAnO+zsQUI4MbZwtuk96QJn8ufGnozEdsxNggyEcOXXebaPWXY++JHtJDlh5HQ4je/vVJNBUvJGsAGcpk3elSV4KtJCHAaV4MkMmATahghxH/idjUnKyFPBcx2rVuXljvGrSS3vgbSLeHplhQkxSYJrbFrZouyVxu4B+WpiCJ1irIj+tPcAx2n/CbSj3078n+REuHJfMjalif1vo06L+D2Ewtgx8UiabWo6JEffECHeVQN8y9jUJLzM2S72Xap8iSo/J8BffRoh2in7K8p+i7JPVfauGQpR5/VjO+0/KzELuSqu2qwplBNot/Eus8buWfKuUYRYm4MQK0NE6KYCF4Xk8VLWGa7szwf43JdGiAJln6nsxcpenYUQu7x+uNNRJkJ0BkdpXxswprdd2yLExKT9jOEHeTlYB2rBMyEMDhFC0oTL03JqOhmAG/wG1umlbCs8fx1MapO/kYSQtLWXdjm6d/Z81fHdnyJEEagLEKIMVJGCAFonQh44/kANTgY6wGMgOGFSG1hHY/P4N65jJpXzJf/OV/5aohBtwQ8mtXfI1wS3J86jXU5NLxl7iJGxyr7n9srNl50jqN3B1zFS0h5QEiLCTcZuTNLAgQix5qgAVNJWQhGcXX6783lTSxWC9lrlR7JBDe1yv/nFG9MZ9V8OA3dcaQCB7QG+z0AEWT23RgR4imrk1YhyI9WM2KpmkKyE08pHkkFxq2V/CxViqLn6LqPvEcO5UvxPPZLOTLPgIMDFoBrsBU0q+LKH7AMzQJew4LJRuS+MIaFfWY3Nq6NYzhjedo1NR+KjAkwz9iYsm/9txn6uHqF89FRt5Sl7b2XXAvVS9ja0dVG2YtokdZTSNszr91DaJbj+KUj6/TB43DS/I3UFE4y9dcslrlzH53+pHdVB5dAlwgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=7611.69c921b2.chunk.js.map