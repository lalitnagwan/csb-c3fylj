parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"T6ID":[function(require,module,exports) {
var e,t,l,n,o=document.getElementById("bar-1"),i=document.getElementById("bar-2"),s=document.getElementById("ball"),d=20,f="Bar-1",a="Bar-2",r="abc",g=123,y=2,c=2,h=12,u=!1;function m(e){o.style.left=(window.innerWidth-o.offsetWidth)/2+"px",i.style.left=(window.innerWidth-i.offsetWidth)/2+"px",s.style.left=(window.innerWidth-s.offsetWidth)/2+"px",e===f?(s.style.top=i.getBoundingClientRect().y-i.getBoundingClientRect().height+"px",c=-2):e===a&&(s.style.top=o.getBoundingClientRect().height+"px",c=2),l=0,u=!1}function p(e,o){l>n&&(n=l,localStorage.setItem(r,o),localStorage.setItem(g,n)),clearInterval(t),m(o),alert(o+" wins with score of "+100*e+". Max Score is: "+100*n)}localStorage.setItem(g,"null"),localStorage.setItem(g,"null"),n=localStorage.getItem(g),"null"===(e=localStorage.getItem(r))||"null"===n?(alert("Hello.. This is your first game"),n=0,e=f):alert(e+" has maximum score of "+100*n),m(e),document.addEventListener("keydown",function(e){if(68!=e.keyCode&&39!=e.keyCode||parseInt(o.style.left)<window.innerWidth-o.offsetWidth-h&&(o.style.left=parseInt(o.style.left)+d+"px",i.style.left=o.style.left),65!=e.keyCode&&37!=e.keyCode||parseInt(o.style.left)>h&&(o.style.left=parseInt(o.style.left)-d+"px",i.style.left=o.style.left),13==e.keyCode&&!u){u=!0;var n=s.getBoundingClientRect(),r=n.x,g=n.y,m=n.width,w=o.offsetHeight,I=i.offsetHeight,x=i.offsetWidth,B=i.offsetWidth;t=setInterval(function(){var e=o.getBoundingClientRect().x,t=i.getBoundingClientRect().x,n=r+m/2;r+=y,g+=c,s.style.left=r+"px",s.style.top=g+"px",(r+m>window.innerWidth||r<0)&&(y=-y),g<=w&&(c=-c,l++,(n<e||n>e+x)&&p(l,a)),g+m>=window.innerHeight-I&&(c=-c,l++,(n<t||n>t+B)&&p(l,f))},10)}});
},{}]},{},["T6ID"], null)
//# sourceMappingURL=/csb-c3fylj/script.e954828f.js.map