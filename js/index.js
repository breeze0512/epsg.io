var k,l=this;function aa(a,b){var c=a.split("."),d=l;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function n(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ba(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function r(a){return"function"==p(a)}function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return t.apply(null,arguments)}var ea=Date.now||function(){return+new Date};
function u(a,b){function c(){}c.prototype=b.prototype;a.ra=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fa=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function v(a){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}u(v,Error);v.prototype.name="CustomError";var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ga(a,b){return a<b?-1:a>b?1:0};var ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ia=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e},ka=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function la(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function ma(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var x;a:{var na=l.navigator;if(na){var oa=na.userAgent;if(oa){x=oa;break a}}x=""}function y(a){return-1!=x.indexOf(a)};function pa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function qa(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ua(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ta.length;f++)c=ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var va=y("Opera")||y("OPR"),z=y("Trident")||y("MSIE"),wa=y("Edge"),A=y("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),B=-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge");function xa(){var a=x;if(A)return/rv\:([^\);]+)(\)|;)/.exec(a);if(wa)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(B)return/WebKit\/(\S+)/.exec(a)}function ya(){var a=l.document;return a?a.documentMode:void 0}
var za=function(){if(va&&l.opera){var a;var b=l.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=xa())&&(a=b?b[1]:"");return z&&(b=ya(),b>parseFloat(a))?String(b):a}(),Aa={};
function C(a){var b;if(!(b=Aa[a])){b=0;for(var c=fa(String(za)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),w=RegExp("(\\d*)(\\D*)","g");do{var Q=m.exec(g)||["","",""],R=w.exec(h)||["","",""];if(0==Q[0].length&&0==R[0].length)break;b=ga(0==Q[1].length?0:parseInt(Q[1],10),0==R[1].length?0:parseInt(R[1],10))||ga(0==Q[2].length,0==R[2].length)||ga(Q[2],R[2])}while(0==b)}b=Aa[a]=0<=b}return b}
var Ba=l.document,Ca=Ba&&z?ya()||("CSS1Compat"==Ba.compatMode?parseInt(za,10):5):void 0;var Da=!z||9<=Ca,Ea=z&&!C("9");!B||C("528");A&&C("1.9b")||z&&C("8")||va&&C("9.5")||B&&C("528");A&&!C("8")||z&&C("9");function D(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.ia=!1}D.prototype.stopPropagation=function(){this.ia=!0};D.prototype.preventDefault=function(){this.defaultPrevented=!0};function Fa(a){Fa[" "](a);return a}Fa[" "]=n;function E(a,b){D.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.N=this.state=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(A){var f;a:{try{Fa(e.nodeName);f=!0;break a}catch(g){}f=
!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=B||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=B||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,
this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.N=a;a.defaultPrevented&&this.preventDefault()}}u(E,D);E.prototype.stopPropagation=function(){E.ra.stopPropagation.call(this);this.N.stopPropagation?this.N.stopPropagation():this.N.cancelBubble=!0};
E.prototype.preventDefault=function(){E.ra.preventDefault.call(this);var a=this.N;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ea)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ga="closure_listenable_"+(1E6*Math.random()|0),Ha=0;function Ia(a,b,c,d,e){this.listener=a;this.X=null;this.src=b;this.type=c;this.T=!!d;this.ha=e;this.key=++Ha;this.R=this.ea=!1}function Ja(a){a.R=!0;a.listener=null;a.X=null;a.src=null;a.ha=null};function F(a){this.src=a;this.j={};this.$=0}F.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.j[f];a||(a=this.j[f]=[],this.$++);var g=Ka(a,b,d,e);-1<g?(b=a[g],c||(b.ea=!1)):(b=new Ia(b,this.src,f,!!d,e),b.ea=c,a.push(b));return b};F.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.j))return!1;var e=this.j[a];b=Ka(e,b,c,d);return-1<b?(Ja(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.j[a],this.$--),!0):!1};
F.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return qa(this.j,function(a){for(var g=0;g<a.length;++g)if(!(c&&a[g].type!=d||e&&a[g].T!=b))return!0;return!1})};function Ka(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.R&&f.listener==b&&f.T==!!c&&f.ha==d)return e}return-1};var La="closure_lm_"+(1E6*Math.random()|0),Ma={},Na=0;
function G(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)G(a,b[f],c,d,e);else if(c=Oa(c),a&&a[Ga])a.Ga(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=Pa(a);g||(a[La]=g=new F(a));c=g.add(b,c,!1,d,e);if(!c.X){d=Qa();c.X=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Ra(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Na++}}}
function Qa(){var a=Sa,b=Da?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Ra(a){return a in Ma?Ma[a]:Ma[a]="on"+a}function Ta(a,b,c,d){var e=!0;if(a=Pa(a))if(b=a.j[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.T==c&&!f.R&&(f=Ua(f,d),e=e&&!1!==f)}return e}
function Ua(a,b){var c=a.listener,d=a.ha||a.src;if(a.ea&&"number"!=typeof a&&a&&!a.R){var e=a.src;if(e&&e[Ga])e.Ha(a);else{var f=a.type,g=a.X;e.removeEventListener?e.removeEventListener(f,g,a.T):e.detachEvent&&e.detachEvent(Ra(f),g);Na--;if(f=Pa(e)){var g=a.type,h;if(h=g in f.j){h=f.j[g];var m=ha(h,a),w;(w=0<=m)&&Array.prototype.splice.call(h,m,1);h=w}h&&(Ja(a),0==f.j[g].length&&(delete f.j[g],f.$--));0==f.$&&(f.src=null,e[La]=null)}else Ja(a)}}return c.call(d,b)}
function Sa(a,b){if(a.R)return!0;if(!Da){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new E(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.ia&&0<=g;g--){c.currentTarget=e[g];var h=Ta(e[g],f,!0,c),d=d&&h}for(g=0;!c.ia&&g<e.length;g++)c.currentTarget=
e[g],h=Ta(e[g],f,!1,c),d=d&&h}return d}return Ua(a,new E(b,this))}function Pa(a){a=a[La];return a instanceof F?a:null}var Va="__closure_events_fn_"+(1E9*Math.random()>>>0);function Oa(a){if(r(a))return a;a[Va]||(a[Va]=function(b){return a.handleEvent(b)});return a[Va]};function Wa(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}function Xa(a,b){var c;a.classList?c=a.classList.contains(b):(c=Wa(a),c=0<=ha(c,b));return c}function Ya(a,b){a.classList?a.classList.add(b):Xa(a,b)||(a.className+=0<a.className.length?" "+b:b)}function Za(a,b){a.classList?a.classList.remove(b):Xa(a,b)&&(a.className=ja(Wa(a),function(a){return a!=b}).join(" "))};function $a(a){if(a.i&&"function"==typeof a.i)return a.i();if(q(a))return a.split("");if(ba(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ra(a)}
function ab(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ba(a)||q(a))ia(a,b,c);else{var d;if(a.A&&"function"==typeof a.A)d=a.A();else if(a.i&&"function"==typeof a.i)d=void 0;else if(ba(a)||q(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=sa(a);for(var e=$a(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}};function bb(a,b){this.m={};this.c=[];this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}k=bb.prototype;k.i=function(){cb(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.m[this.c[b]]);return a};k.A=function(){cb(this);return this.c.concat()};k.M=function(a){return H(this.m,a)};k.clear=function(){this.m={};this.b=this.c.length=0};
k.remove=function(a){return H(this.m,a)?(delete this.m[a],this.b--,this.c.length>2*this.b&&cb(this),!0):!1};function cb(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];H(a.m,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],H(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}}k.get=function(a,b){return H(this.m,a)?this.m[a]:b};k.set=function(a,b){H(this.m,a)||(this.b++,this.c.push(a));this.m[a]=b};
k.addAll=function(a){var b;a instanceof bb?(b=a.A(),a=a.i()):(b=sa(a),a=ra(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};k.forEach=function(a,b){for(var c=this.A(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new bb(this)};function H(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var db=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function eb(a,b){if(a)for(var c=a.split("\x26"),d=0;d<c.length;d++){var e=c[d].indexOf("\x3d"),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};function I(a,b){this.u=this.G=this.B="";this.K=null;this.D=this.o="";this.h=this.ya=!1;var c;if(a instanceof I)this.h=void 0!==b?b:a.h,fb(this,a.B),c=a.G,J(this),this.G=c,c=a.u,J(this),this.u=c,gb(this,a.K),c=a.o,J(this),this.o=c,hb(this,a.s.clone()),c=a.D,J(this),this.D=c;else if(a&&(c=String(a).match(db))){this.h=!!b;fb(this,c[1]||"",!0);var d=c[2]||"";J(this);this.G=K(d);d=c[3]||"";J(this);this.u=K(d,!0);gb(this,c[4]);d=c[5]||"";J(this);this.o=K(d,!0);hb(this,c[6]||"",!0);c=c[7]||"";J(this);this.D=
K(c)}else this.h=!!b,this.s=new L(null,0,this.h)}I.prototype.toString=function(){var a=[],b=this.B;b&&a.push(M(b,ib,!0),":");var c=this.u;if(c||"file"==b)a.push("//"),(b=this.G)&&a.push(M(b,ib,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.K,null!=c&&a.push(":",String(c));if(c=this.o)this.u&&"/"!=c.charAt(0)&&a.push("/"),a.push(M(c,"/"==c.charAt(0)?jb:kb,!0));(c=this.s.toString())&&a.push("?",c);(c=this.D)&&a.push("#",M(c,lb));return a.join("")};
I.prototype.resolve=function(a){var b=this.clone(),c=!!a.B;c?fb(b,a.B):c=!!a.G;if(c){var d=a.G;J(b);b.G=d}else c=!!a.u;c?(d=a.u,J(b),b.u=d):c=null!=a.K;d=a.o;if(c)gb(b,a.K);else if(c=!!a.o){if("/"!=d.charAt(0))if(this.u&&!this.o)d="/"+d;else{var e=b.o.lastIndexOf("/");-1!=e&&(d=b.o.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==
h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?(J(b),b.o=d):c=""!==a.s.toString();c?hb(b,K(a.s.toString())):c=!!a.D;c&&(a=a.D,J(b),b.D=a);return b};I.prototype.clone=function(){return new I(this)};function fb(a,b,c){J(a);a.B=c?K(b,!0):b;a.B&&(a.B=a.B.replace(/:$/,""))}function gb(a,b){J(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.K=b}else a.K=null}
function hb(a,b,c){J(a);b instanceof L?(a.s=b,a.s.ja(a.h)):(c||(b=M(b,mb)),a.s=new L(b,0,a.h))}function nb(a,b,c){J(a);"array"==p(c)||(c=[String(c)]);ob(a.s,b,c)}function J(a){if(a.ya)throw Error("Tried to modify a read-only Uri");}I.prototype.ja=function(a){this.h=a;this.s&&this.s.ja(a);return this};function K(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function M(a,b,c){return q(a)?(a=encodeURI(a).replace(b,pb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pb(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ib=/[#\/\?@]/g,kb=/[\#\?:]/g,jb=/[\#\?]/g,mb=/[\#\?@]/g,lb=/#/g;function L(a,b,c){this.b=this.a=null;this.g=a||null;this.h=!!c}function N(a){a.a||(a.a=new bb,a.b=0,a.g&&eb(a.g,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}k=L.prototype;
k.add=function(a,b){N(this);this.g=null;a=O(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b++;return this};k.remove=function(a){N(this);a=O(this,a);return this.a.M(a)?(this.g=null,this.b-=this.a.get(a).length,this.a.remove(a)):!1};k.clear=function(){this.a=this.g=null;this.b=0};k.M=function(a){N(this);a=O(this,a);return this.a.M(a)};k.A=function(){N(this);for(var a=this.a.i(),b=this.a.A(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
k.i=function(a){N(this);var b=[];if(q(a))this.M(a)&&(b=la(b,this.a.get(O(this,a))));else{a=this.a.i();for(var c=0;c<a.length;c++)b=la(b,a[c])}return b};k.set=function(a,b){N(this);this.g=null;a=O(this,a);this.M(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b++;return this};k.get=function(a,b){var c=a?this.i(a):[];return 0<c.length?String(c[0]):b};function ob(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.a.set(O(a,b),ma(c)),a.b+=c.length)}
k.toString=function(){if(this.g)return this.g;if(!this.a)return"";for(var a=[],b=this.a.A(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.i(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="\x3d"+encodeURIComponent(String(d[f])));a.push(g)}return this.g=a.join("\x26")};k.clone=function(){var a=new L;a.g=this.g;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};function O(a,b){var c=String(b);a.h&&(c=c.toLowerCase());return c}
k.ja=function(a){a&&!this.h&&(N(this),this.g=null,this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),ob(this,d,a))},this));this.h=a};k.extend=function(a){for(var b=0;b<arguments.length;b++)ab(arguments[b],function(a,b){this.add(b,a)},this)};function qb(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function rb(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function sb(a,b,c){this.za=c;this.va=a;this.Aa=b;this.W=0;this.V=null}sb.prototype.get=function(){var a;0<this.W?(this.W--,a=this.V,this.V=a.next,a.next=null):a=this.va();return a};sb.prototype.put=function(a){this.Aa(a);this.W<this.za&&(this.W++,a.next=this.V,this.V=a)};function tb(){this.ba=this.L=null}var vb=new sb(function(){return new ub},function(a){a.reset()},100);tb.prototype.add=function(a,b){var c=vb.get();c.set(a,b);this.ba?this.ba.next=c:this.L=c;this.ba=c};tb.prototype.remove=function(){var a=null;this.L&&(a=this.L,this.L=this.L.next,this.L||(this.ba=null),a.next=null);return a};function ub(){this.next=this.scope=this.ga=null}ub.prototype.set=function(a,b){this.ga=a;this.scope=b;this.next=null};
ub.prototype.reset=function(){this.next=this.scope=this.ga=null};function wb(a){l.setTimeout(function(){throw a;},0)}var xb;
function yb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.la;c.la=null;a()}};return function(a){d.next={la:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};function zb(a,b){Ab||Bb();Cb||(Ab(),Cb=!0);Db.add(a,b)}var Ab;function Bb(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Ab=function(){a.then(Eb)}}else Ab=function(){var a=Eb;!r(l.setImmediate)||l.Window&&l.Window.prototype&&l.Window.prototype.setImmediate==l.setImmediate?(xb||(xb=yb()),xb(a)):l.setImmediate(a)}}var Cb=!1,Db=new tb;function Eb(){for(var a=null;a=Db.remove();){try{a.ga.call(a.scope)}catch(b){wb(b)}vb.put(a)}Cb=!1};function P(a,b){this.l=S;this.v=void 0;this.H=this.w=this.f=null;this.U=this.fa=!1;if(a!=n)try{var c=this;a.call(b,function(a){T(c,Fb,a)},function(a){T(c,U,a)})}catch(d){T(this,U,d)}}var S=0,Fb=2,U=3;function Gb(){this.next=this.context=this.J=this.P=this.C=null;this.S=!1}Gb.prototype.reset=function(){this.context=this.J=this.P=this.C=null;this.S=!1};var Hb=new sb(function(){return new Gb},function(a){a.reset()},100);function Ib(a,b,c){var d=Hb.get();d.P=a;d.J=b;d.context=c;return d}
P.prototype.then=function(a,b,c){return Jb(this,r(a)?a:null,r(b)?b:null,c)};qb(P);P.prototype.cancel=function(a){this.l==S&&zb(function(){var b=new V(a);Kb(this,b)},this)};function Kb(a,b){if(a.l==S)if(a.f){var c=a.f;if(c.w){for(var d=0,e=null,f=null,g=c.w;g&&(g.S||(d++,g.C==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.l==S&&1==d?Kb(c,b):(f?(d=f,d.next==c.H&&(c.H=d),d.next=d.next.next):Lb(c),Mb(c,e,U,b)))}a.f=null}else T(a,U,b)}
function Nb(a,b){a.w||a.l!=Fb&&a.l!=U||Ob(a);a.H?a.H.next=b:a.w=b;a.H=b}function Jb(a,b,c,d){var e=Ib(null,null,null);e.C=new P(function(a,g){e.P=b?function(c){try{var e=b.call(d,c);a(e)}catch(w){g(w)}}:a;e.J=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof V?g(b):a(e)}catch(w){g(w)}}:g});e.C.f=a;Nb(a,e);return e.C}P.prototype.Ca=function(a){this.l=S;T(this,Fb,a)};P.prototype.Da=function(a){this.l=S;T(this,U,a)};
function T(a,b,c){if(a.l==S){a==c&&(b=U,c=new TypeError("Promise cannot resolve to itself"));a.l=1;var d;a:{var e=c,f=a.Ca,g=a.Da;if(e instanceof P)Nb(e,Ib(f||n,g||null,a)),d=!0;else if(rb(e))e.then(f,g,a),d=!0;else{var h=typeof e;if("object"==h&&null!=e||"function"==h)try{var m=e.then;if(r(m)){Pb(e,m,f,g,a);d=!0;break a}}catch(w){g.call(a,w);d=!0;break a}d=!1}}d||(a.v=c,a.l=b,a.f=null,Ob(a),b!=U||c instanceof V||Qb(a,c))}}
function Pb(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}function g(a){h||(h=!0,c.call(e,a))}var h=!1;try{b.call(a,g,f)}catch(m){f(m)}}function Ob(a){a.fa||(a.fa=!0,zb(a.xa,a))}function Lb(a){var b=null;a.w&&(b=a.w,a.w=b.next,b.next=null);a.w||(a.H=null);return b}P.prototype.xa=function(){for(var a=null;a=Lb(this);)Mb(this,a,this.l,this.v);this.fa=!1};
function Mb(a,b,c,d){if(c==U&&b.J&&!b.S)for(;a&&a.U;a=a.f)a.U=!1;if(b.C)b.C.f=null,Rb(b,c,d);else try{b.S?b.P.call(b.context):Rb(b,c,d)}catch(e){Sb.call(null,e)}Hb.put(b)}function Rb(a,b,c){b==Fb?a.P.call(a.context,c):a.J&&a.J.call(a.context,c)}function Qb(a,b){a.U=!0;zb(function(){a.U&&Sb.call(null,b)})}var Sb=wb;function V(a){v.call(this,a)}u(V,v);V.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function W(a,b){this.Y=[];this.pa=a;this.na=b||null;this.O=this.I=!1;this.v=void 0;this.ka=this.sa=this.ca=!1;this.aa=0;this.f=null;this.da=0}W.prototype.cancel=function(a){if(this.I)this.v instanceof W&&this.v.cancel();else{if(this.f){var b=this.f;delete this.f;a?b.cancel(a):(b.da--,0>=b.da&&b.cancel())}this.pa?this.pa.call(this.na,this):this.ka=!0;this.I||(a=new X,Tb(this),Y(this,!1,a))}};W.prototype.ma=function(a,b){this.ca=!1;Y(this,a,b)};function Y(a,b,c){a.I=!0;a.v=c;a.O=!b;Ub(a)}
function Tb(a){if(a.I){if(!a.ka)throw new Vb;a.ka=!1}}function Wb(a,b,c,d){a.Y.push([b,c,d]);a.I&&Ub(a)}W.prototype.then=function(a,b,c){var d,e,f=new P(function(a,b){d=a;e=b});Wb(this,d,function(a){a instanceof X?f.cancel():e(a)});return f.then(a,b,c)};qb(W);function Xb(a){return ka(a.Y,function(a){return r(a[1])})}
function Ub(a){if(a.aa&&a.I&&Xb(a)){var b=a.aa,c=Yb[b];c&&(l.clearTimeout(c.F),delete Yb[b]);a.aa=0}a.f&&(a.f.da--,delete a.f);for(var b=a.v,d=c=!1;a.Y.length&&!a.ca;){var e=a.Y.shift(),f=e[0],g=e[1],e=e[2];if(f=a.O?g:f)try{var h=f.call(e||a.na,b);void 0!==h&&(a.O=a.O&&(h==b||h instanceof Error),a.v=b=h);if(rb(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.ca=!0}catch(m){b=m,a.O=!0,Xb(a)||(c=!0)}}a.v=b;d&&(h=t(a.ma,a,!0),d=t(a.ma,a,!1),b instanceof W?(Wb(b,h,d),b.sa=!0):b.then(h,
d));c&&(b=new Zb(b),Yb[b.F]=b,a.aa=b.F)}function Vb(){v.call(this)}u(Vb,v);Vb.prototype.message="Deferred has already fired";Vb.prototype.name="AlreadyCalledError";function X(){v.call(this)}u(X,v);X.prototype.message="Deferred was canceled";X.prototype.name="CanceledError";function Zb(a){this.F=l.setTimeout(t(this.Ba,this),0);this.wa=a}Zb.prototype.Ba=function(){delete Yb[this.F];throw this.wa;};var Yb={};!A&&!z||z&&9<=Ca||A&&C("1.9.1");z&&C("9");function Z(a){var b=document;return q(a)?b.getElementById(a):a}function $b(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):ac(a)}function bc(a){var b=document,c=null;return(c=b.getElementsByClassName?b.getElementsByClassName(a)[0]:b.querySelectorAll&&b.querySelector?b.querySelector("."+a):ac(a)[0])||null}
function ac(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=ha(g.split(/\s+/),a);h&&(e[d++]=b)}e.length=d;return e}return f}
function cc(a,b){pa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:dc.hasOwnProperty(d)?a.setAttribute(dc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var dc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function ec(a,b){var c=b||{},d=c.document||document,e=document.createElement("SCRIPT"),f={qa:e,Z:void 0},g=new W(fc,f),h=null,m=null!=c.timeout?c.timeout:5E3;0<m&&(h=window.setTimeout(function(){gc(e,!0);var b=new hc(ic,"Timeout reached for loading script "+a);Tb(g);Y(g,!1,b)},m),f.Z=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(gc(e,c.ua||!1,h),Tb(g),Y(g,!0,null))};e.onerror=function(){gc(e,!0,h);var b=new hc(jc,"Error while loading script "+
a);Tb(g);Y(g,!1,b)};f=c.attributes||{};ua(f,{type:"text/javascript",charset:"UTF-8",src:a});cc(e,f);kc(d).appendChild(e);return g}function kc(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function fc(){if(this&&this.qa){var a=this.qa;a&&"SCRIPT"==a.tagName&&gc(a,!0,this.Z)}}function gc(a,b,c){null!=c&&l.clearTimeout(c);a.onload=n;a.onerror=n;a.onreadystatechange=n;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var jc=0,ic=1;
function hc(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);v.call(this,c);this.code=a}u(hc,v);function lc(a,b){this.Ea=new I(a);this.ta=b?b:"callback";this.Z=5E3}var mc=0;lc.prototype.send=function(a,b,c,d){a=a||null;d=d||"_"+(mc++).toString(36)+ea().toString(36);l._callbacks_||(l._callbacks_={});var e=this.Ea.clone();if(a)for(var f in a)a.hasOwnProperty&&!a.hasOwnProperty(f)||nb(e,f,a[f]);b&&(l._callbacks_[d]=nc(d,b),nb(e,this.ta,"_callbacks_."+d));b=ec(e.toString(),{timeout:this.Z,ua:!0});Wb(b,null,oc(d,a,c),void 0);return{F:d,oa:b}};
lc.prototype.cancel=function(a){a&&(a.oa&&a.oa.cancel(),a.F&&pc(a.F,!1))};function oc(a,b,c){return function(){pc(a,!1);c&&c(b)}}function nc(a,b){return function(c){pc(a,!0);b.apply(void 0,arguments)}}function pc(a,b){l._callbacks_[a]&&(b?delete l._callbacks_[a]:l._callbacks_[a]=n)};function qc(){function a(a,b,e){window.open(a,"_blank","toolbar\x3dno,location\x3dno, directories\x3dno, status\x3dno, menubar\x3dno, scrollbars\x3dno,resizable\x3dno, copyhistory\x3dno, width\x3d"+b+", height\x3d"+e+", top\x3d"+(screen.height/2-e/2)+", left\x3d"+(screen.width/2-b/2))}var b=Z("share_facebook");b&&G(b,"click",function(b){b.preventDefault();a(this.href,645,353)});(b=Z("share_twitterb"))&&G(b,"click",function(b){b.preventDefault();a(this.href,450,257)});(b=Z("share_pinterest"))&&G(b,
"click",function(b){b.preventDefault();a(this.href,620,280)});(b=Z("share_gplusdark"))&&G(b,"click",function(b){b.preventDefault();a(this.href,610,315)})}
aa("home_init",function(){var a=Z("q");a&&a.focus();Z("countryLinkWrapper")&&(new lc("http://freegeoip.net/json/")).send({},function(a){if(a.country_name){var c=a.country_name;"US"==a.country_code&&(c=a.region_name);Z("country").innerHTML=c;Z("countryLink").href="http://epsg.io/?q\x3d"+encodeURIComponent(c);Z("countryLink").style.display="inline"}});bc("socialicons")&&qc()});aa("results_init",function(){});
aa("detail_init",function(){function a(a){a.preventDefault();a=a.target;var b=Z(a.id+"_code"),c=bc("switcher_selected"),g=bc("code_visible");Za(c,"switcher_selected");Za(g,"code_visible");Ya(a,"switcher_selected");Ya(b,"code_visible")}var b=Z("trans_deprecated_link");b&&G(b,"click",function(a){a.preventDefault();a=Z("trans_deprecated");"block"==a.style.display?(a.style.display="none",b.innerHTML="Show deprecated transformations"):(a.style.display="block",b.innerHTML="Hide deprecated transfortmations")});
ia($b("switcher"),function(b){G(b,"click",a)});var c=window.ZeroClipboard;c.config({moviePath:"/js/ZeroClipboard.swf"});ia($b("zeroclipboard"),function(a){new c(a)});bc("socialicons")&&qc()});
