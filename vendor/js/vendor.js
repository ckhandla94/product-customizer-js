//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map
$.scrollWindowTo = function(pos, duration, cb) {
  if (duration == null) {
    duration = 0;
  }
  if (pos === $(window).scrollTop()) {
    $(window).trigger('scroll');
    if (typeof cb === "function") {
      cb();
    }
    return;
  }
  return $('html, body').animate({
    scrollTop: pos
  }, duration, function() {
    return typeof cb === "function" ? cb() : void 0;
  });
};
(function() {
  var arrays, basicObjects, deepClone, deepExtend, deepExtendCouple, isBasicObject,
    __slice = [].slice;

  deepClone = function(obj) {
    var func, isArr;
    if (!_.isObject(obj || _.isFunction(obj))) {
      return obj;
    }
    if (_.isDate(obj)) {
      return new Date(obj.getTime());
    }
    if (_.isRegExp(obj)) {
      return new RegExp(obj.source, obj.toString().replace(/.*\//, ""));
    }
    isArr = _.isArray(obj || _.isArguments(obj));
    func = function(memo, value, key) {
      if (isArr) {
        memo.push(deepClone(value));
      } else {
        memo[key] = deepClone(value);
      }
      return memo;
    };
    return _.reduce(obj, func, isArr ? [] : {});
  };

  isBasicObject = function(object) {
    if(object === null) return false;
    return (object.prototype === {}.prototype || object.prototype === Object.prototype) && _.isObject(object) && !_.isArray(object) && !_.isFunction(object) && !_.isDate(object) && !_.isRegExp(object) && !_.isArguments(object);
  };

  basicObjects = function(object) {
    return _.filter(_.keys(object), function(key) {
      return isBasicObject(object[key]);
    });
  };

  arrays = function(object) {
    return _.filter(_.keys(object), function(key) {
      return _.isArray(object[key]);
    });
  };

  deepExtendCouple = function(destination, source, maxDepth) {
    var combine, recurse, sharedArrayKey, sharedArrayKeys, sharedObjectKey, sharedObjectKeys, _i, _j, _len, _len1;
    if (maxDepth == null) {
      maxDepth = 20;
    }
    if (maxDepth <= 0) {
      console.warn('_.deepExtend(): Maximum depth of recursion hit.');
      return _.extend(destination, source);
    }
    sharedObjectKeys = _.intersection(basicObjects(destination), basicObjects(source));
    recurse = function(key) {
      return source[key] = deepExtendCouple(destination[key], source[key], maxDepth - 1);
    };
    for (_i = 0, _len = sharedObjectKeys.length; _i < _len; _i++) {
      sharedObjectKey = sharedObjectKeys[_i];
      recurse(sharedObjectKey);
    }
    sharedArrayKeys = _.intersection(arrays(destination), arrays(source));
    combine = function(key) {
      return source[key] = _.union(destination[key], source[key]);
    };
    for (_j = 0, _len1 = sharedArrayKeys.length; _j < _len1; _j++) {
      sharedArrayKey = sharedArrayKeys[_j];
      combine(sharedArrayKey);
    }
    return _.extend(destination, source);
  };

  deepExtend = function() {
    var finalObj, maxDepth, objects, _i;
    objects = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), maxDepth = arguments[_i++];
    if (!_.isNumber(maxDepth)) {
      objects.push(maxDepth);
      maxDepth = 20;
    }
    if (objects.length <= 1) {
      return objects[0];
    }
    if (maxDepth <= 0) {
      return _.extend.apply(this, objects);
    }
    finalObj = objects.shift();
    while (objects.length > 0) {
      finalObj = deepExtendCouple(finalObj, deepClone(objects.shift()), maxDepth);
    }
    return finalObj;
  };

  _.mixin({
    deepClone: deepClone,
    isBasicObject: isBasicObject,
    basicObjects: basicObjects,
    arrays: arrays,
    deepExtend: deepExtend
  });

}).call(this);
// Rivets.js
// version: 0.5.13
// author: Michael Richards
// license: MIT
(function() {
  var Rivets, jQuery,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Rivets = {};

  jQuery = window.jQuery || window.Zepto;

  if (!String.prototype.trim) {
    String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, '');
    };
  }

  Rivets.Binding = (function() {
    function Binding(view, el, type, key, keypath, options) {
      var identifier, regexp, value, _ref;
      this.view = view;
      this.el = el;
      this.type = type;
      this.key = key;
      this.keypath = keypath;
      this.options = options != null ? options : {};
      this.update = __bind(this.update, this);
      this.unbind = __bind(this.unbind, this);
      this.bind = __bind(this.bind, this);
      this.publish = __bind(this.publish, this);
      this.sync = __bind(this.sync, this);
      this.set = __bind(this.set, this);
      this.eventHandler = __bind(this.eventHandler, this);
      this.formattedValue = __bind(this.formattedValue, this);
      if (!(this.binder = this.view.binders[type])) {
        _ref = this.view.binders;
        for (identifier in _ref) {
          value = _ref[identifier];
          if (identifier !== '*' && identifier.indexOf('*') !== -1) {
            regexp = new RegExp("^" + (identifier.replace('*', '.+')) + "$");
            if (regexp.test(type)) {
              this.binder = value;
              this.args = new RegExp("^" + (identifier.replace('*', '(.+)')) + "$").exec(type);
              this.args.shift();
            }
          }
        }
      }
      this.binder || (this.binder = this.view.binders['*']);
      if (this.binder instanceof Function) {
        this.binder = {
          routine: this.binder
        };
      }
      this.formatters = this.options.formatters || [];
      this.model = this.key ? this.view.models[this.key] : this.view.models;
    }

    Binding.prototype.formattedValue = function(value) {
      var args, formatter, id, _i, _len, _ref;
      _ref = this.formatters;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        formatter = _ref[_i];
        args = formatter.split(/\s+/);
        id = args.shift();
        formatter = this.model[id] instanceof Function ? this.model[id] : this.view.formatters[id];
        if ((formatter != null ? formatter.read : void 0) instanceof Function) {
          value = formatter.read.apply(formatter, [value].concat(__slice.call(args)));
        } else if (formatter instanceof Function) {
          value = formatter.apply(null, [value].concat(__slice.call(args)));
        }
      }
      return value;
    };

    Binding.prototype.eventHandler = function(fn) {
      var binding, handler;
      handler = (binding = this).view.config.handler;
      return function(ev) {
        return handler.call(fn, this, ev, binding);
      };
    };

    Binding.prototype.set = function(value) {
      var _ref;
      value = value instanceof Function && !this.binder["function"] ? this.formattedValue(value.call(this.model)) : this.formattedValue(value);
      return (_ref = this.binder.routine) != null ? _ref.call(this, this.el, value) : void 0;
    };

    Binding.prototype.sync = function() {
      return this.set(this.options.bypass ? this.model[this.keypath] : this.view.config.adapter.read(this.model, this.keypath));
    };

    Binding.prototype.publish = function() {
      var args, formatter, id, value, _i, _len, _ref, _ref1, _ref2;
      value = Rivets.Util.getInputValue(this.el);
      _ref = this.formatters.slice(0).reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        formatter = _ref[_i];
        args = formatter.split(/\s+/);
        id = args.shift();
        if ((_ref1 = this.view.formatters[id]) != null ? _ref1.publish : void 0) {
          value = (_ref2 = this.view.formatters[id]).publish.apply(_ref2, [value].concat(__slice.call(args)));
        }
      }
      return this.view.config.adapter.publish(this.model, this.keypath, value);
    };

    Binding.prototype.bind = function() {
      var dependency, keypath, model, _i, _len, _ref, _ref1, _ref2, _results;
      if ((_ref = this.binder.bind) != null) {
        _ref.call(this, this.el);
      }
      if (this.options.bypass) {
        this.sync();
      } else {
        this.view.config.adapter.subscribe(this.model, this.keypath, this.sync);
        if (this.view.config.preloadData) {
          this.sync();
        }
      }
      if ((_ref1 = this.options.dependencies) != null ? _ref1.length : void 0) {
        _ref2 = this.options.dependencies;
        _results = [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          dependency = _ref2[_i];
          if (/^\./.test(dependency)) {
            model = this.model;
            keypath = dependency.substr(1);
          } else {
            dependency = dependency.split('.');
            model = this.view.models[dependency.shift()];
            keypath = dependency.join('.');
          }
          _results.push(this.view.config.adapter.subscribe(model, keypath, this.sync));
        }
        return _results;
      }
    };

    Binding.prototype.unbind = function() {
      var dependency, keypath, model, _i, _len, _ref, _ref1, _ref2, _results;
      if ((_ref = this.binder.unbind) != null) {
        _ref.call(this, this.el);
      }
      if (!this.options.bypass) {
        this.view.config.adapter.unsubscribe(this.model, this.keypath, this.sync);
      }
      if ((_ref1 = this.options.dependencies) != null ? _ref1.length : void 0) {
        _ref2 = this.options.dependencies;
        _results = [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          dependency = _ref2[_i];
          if (/^\./.test(dependency)) {
            model = this.model;
            keypath = dependency.substr(1);
          } else {
            dependency = dependency.split('.');
            model = this.view.models[dependency.shift()];
            keypath = dependency.join('.');
          }
          _results.push(this.view.config.adapter.unsubscribe(model, keypath, this.sync));
        }
        return _results;
      }
    };

    Binding.prototype.update = function(models) {
      var _ref;
      if (models == null) {
        models = {};
      }
      if (this.key) {
        if (models[this.key]) {
          if (!this.options.bypass) {
            this.view.config.adapter.unsubscribe(this.model, this.keypath, this.sync);
          }
          this.model = models[this.key];
          if (this.options.bypass) {
            this.sync();
          } else {
            this.view.config.adapter.subscribe(this.model, this.keypath, this.sync);
            if (this.view.config.preloadData) {
              this.sync();
            }
          }
        }
      } else {
        this.sync();
      }
      return (_ref = this.binder.update) != null ? _ref.call(this, models) : void 0;
    };

    return Binding;

  })();

  Rivets.ComponentBinding = (function(_super) {
    __extends(ComponentBinding, _super);

    function ComponentBinding(view, el, type) {
      var attribute, _i, _len, _ref, _ref1;
      this.view = view;
      this.el = el;
      this.type = type;
      this.unbind = __bind(this.unbind, this);
      this.bind = __bind(this.bind, this);
      this.update = __bind(this.update, this);
      this.locals = __bind(this.locals, this);
      this.component = Rivets.components[this.type];
      this.attributes = {};
      this.inflections = {};
      _ref = this.el.attributes || [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attribute = _ref[_i];
        if (_ref1 = attribute.name, __indexOf.call(this.component.attributes, _ref1) >= 0) {
          this.attributes[attribute.name] = attribute.value;
        } else {
          this.inflections[attribute.name] = attribute.value;
        }
      }
    }

    ComponentBinding.prototype.sync = function() {};

    ComponentBinding.prototype.locals = function(models) {
      var inverse, key, model, path, result, _i, _len, _ref, _ref1;
      if (models == null) {
        models = this.view.models;
      }
      result = {};
      _ref = this.inflections;
      for (key in _ref) {
        inverse = _ref[key];
        _ref1 = inverse.split('.');
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          path = _ref1[_i];
          result[key] = (result[key] || models)[path];
        }
      }
      for (key in models) {
        model = models[key];
        if (result[key] == null) {
          result[key] = model;
        }
      }
      return result;
    };

    ComponentBinding.prototype.update = function(models) {
      var _ref;
      return (_ref = this.componentView) != null ? _ref.update(this.locals(models)) : void 0;
    };

    ComponentBinding.prototype.bind = function() {
      var el, _ref;
      if (this.componentView != null) {
        return (_ref = this.componentView) != null ? _ref.bind() : void 0;
      } else {
        el = this.component.build.call(this.attributes);
        (this.componentView = new Rivets.View(el, this.locals(), this.view.options)).bind();
        return this.el.parentNode.replaceChild(el, this.el);
      }
    };

    ComponentBinding.prototype.unbind = function() {
      var _ref;
      return (_ref = this.componentView) != null ? _ref.unbind() : void 0;
    };

    return ComponentBinding;

  })(Rivets.Binding);

  Rivets.TextBinding = (function(_super) {
    __extends(TextBinding, _super);

    function TextBinding(view, el, type, key, keypath, options) {
      this.view = view;
      this.el = el;
      this.type = type;
      this.key = key;
      this.keypath = keypath;
      this.options = options != null ? options : {};
      this.sync = __bind(this.sync, this);
      this.formatters = this.options.formatters || [];
      this.model = this.key ? this.view.models[this.key] : this.view.models;
    }

    TextBinding.prototype.binder = {
      routine: function(node, value) {
        return node.data = value != null ? value : '';
      }
    };

    TextBinding.prototype.sync = function() {
      return TextBinding.__super__.sync.apply(this, arguments);
    };

    return TextBinding;

  })(Rivets.Binding);

  Rivets.View = (function() {
    function View(els, models, options) {
      var k, option, v, _base, _i, _len, _ref, _ref1, _ref2;
      this.els = els;
      this.models = models;
      this.options = options != null ? options : {};
      this.update = __bind(this.update, this);
      this.publish = __bind(this.publish, this);
      this.sync = __bind(this.sync, this);
      this.unbind = __bind(this.unbind, this);
      this.bind = __bind(this.bind, this);
      this.select = __bind(this.select, this);
      this.build = __bind(this.build, this);
      this.componentRegExp = __bind(this.componentRegExp, this);
      this.bindingRegExp = __bind(this.bindingRegExp, this);
      if (typeof this.els.length === 'undefined') {
        this.els = [this.els];
      }
      _ref = ['config', 'binders', 'formatters'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        this[option] = {};
        if (this.options[option]) {
          _ref1 = this.options[option];
          for (k in _ref1) {
            v = _ref1[k];
            this[option][k] = v;
          }
        }
        _ref2 = Rivets[option];
        for (k in _ref2) {
          v = _ref2[k];
          if ((_base = this[option])[k] == null) {
            _base[k] = v;
          }
        }
      }
      this.build();
    }

    View.prototype.bindingRegExp = function() {
      var prefix;
      prefix = this.config.prefix;
      if (prefix) {
        return new RegExp("^data-" + prefix + "-");
      } else {
        return /^data-/;
      }
    };

    View.prototype.componentRegExp = function() {
      var _ref, _ref1;
      return new RegExp("^" + ((_ref = (_ref1 = this.config.prefix) != null ? _ref1.toUpperCase() : void 0) != null ? _ref : 'RV') + "-");
    };

    View.prototype.build = function() {
      var bindingRegExp, buildBinding, componentRegExp, el, parse, skipNodes, _i, _len, _ref,
        _this = this;
      this.bindings = [];
      skipNodes = [];
      bindingRegExp = this.bindingRegExp();
      componentRegExp = this.componentRegExp();
      buildBinding = function(binding, node, type, declaration) {
        var context, ctx, dependencies, key, keypath, options, path, pipe, pipes, splitPath;
        options = {};
        pipes = (function() {
          var _i, _len, _ref, _results;
          _ref = declaration.split('|');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            pipe = _ref[_i];
            _results.push(pipe.trim());
          }
          return _results;
        })();
        context = (function() {
          var _i, _len, _ref, _results;
          _ref = pipes.shift().split('<');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            ctx = _ref[_i];
            _results.push(ctx.trim());
          }
          return _results;
        })();
        path = context.shift();
        splitPath = path.split(/\.|:/);
        options.formatters = pipes;
        options.bypass = path.indexOf(':') !== -1;
        if (splitPath[0]) {
          key = splitPath.shift();
        } else {
          key = null;
          splitPath.shift();
        }
        keypath = splitPath.join('.');
        if (dependencies = context.shift()) {
          options.dependencies = dependencies.split(/\s+/);
        }
        return _this.bindings.push(new Rivets[binding](_this, node, type, key, keypath, options));
      };
      parse = function(node) {
        var attribute, attributes, binder, childNode, delimiters, identifier, n, parser, regexp, restTokens, startToken, text, token, tokens, type, value, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _results;
        if (__indexOf.call(skipNodes, node) < 0) {
          if (node.nodeType === Node.TEXT_NODE) {
            parser = Rivets.TextTemplateParser;
            if (delimiters = _this.config.templateDelimiters) {
              if ((tokens = parser.parse(node.data, delimiters)).length) {
                if (!(tokens.length === 1 && tokens[0].type === parser.types.text)) {
                  startToken = tokens[0], restTokens = 2 <= tokens.length ? __slice.call(tokens, 1) : [];
                  node.data = startToken.value;
                  if (startToken.type === 0) {
                    node.data = startToken.value;
                  } else {
                    buildBinding('TextBinding', node, null, startToken.value);
                  }
                  for (_i = 0, _len = restTokens.length; _i < _len; _i++) {
                    token = restTokens[_i];
                    text = document.createTextNode(token.value);
                    node.parentNode.appendChild(text);
                    if (token.type === 1) {
                      buildBinding('TextBinding', text, null, token.value);
                    }
                  }
                }
              }
            }
          } else if (componentRegExp.test(node.tagName)) {
            type = node.tagName.replace(componentRegExp, '').toLowerCase();
            _this.bindings.push(new Rivets.ComponentBinding(_this, node, type));
          } else if (node.attributes != null) {
            _ref = node.attributes;
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              attribute = _ref[_j];
              if (bindingRegExp.test(attribute.name)) {
                type = attribute.name.replace(bindingRegExp, '');
                if (!(binder = _this.binders[type])) {
                  _ref1 = _this.binders;
                  for (identifier in _ref1) {
                    value = _ref1[identifier];
                    if (identifier !== '*' && identifier.indexOf('*') !== -1) {
                      regexp = new RegExp("^" + (identifier.replace('*', '.+')) + "$");
                      if (regexp.test(type)) {
                        binder = value;
                      }
                    }
                  }
                }
                binder || (binder = _this.binders['*']);
                if (binder.block) {
                  _ref2 = node.childNodes;
                  for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                    n = _ref2[_k];
                    skipNodes.push(n);
                  }
                  attributes = [attribute];
                }
              }
            }
            _ref3 = attributes || node.attributes;
            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
              attribute = _ref3[_l];
              if (bindingRegExp.test(attribute.name)) {
                type = attribute.name.replace(bindingRegExp, '');
                buildBinding('Binding', node, type, attribute.value);
              }
            }
          }
          _ref4 = node.childNodes;
          _results = [];
          for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
            childNode = _ref4[_m];
            _results.push(parse(childNode));
          }
          return _results;
        }
      };
      _ref = this.els;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        el = _ref[_i];
        parse(el);
      }
    };

    View.prototype.select = function(fn) {
      var binding, _i, _len, _ref, _results;
      _ref = this.bindings;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        binding = _ref[_i];
        if (fn(binding)) {
          _results.push(binding);
        }
      }
      return _results;
    };

    View.prototype.bind = function() {
      var binding, _i, _len, _ref, _results;
      _ref = this.bindings;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        binding = _ref[_i];
        _results.push(binding.bind());
      }
      return _results;
    };

    View.prototype.unbind = function() {
      var binding, _i, _len, _ref, _results;
      _ref = this.bindings;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        binding = _ref[_i];
        _results.push(binding.unbind());
      }
      return _results;
    };

    View.prototype.sync = function() {
      var binding, _i, _len, _ref, _results;
      _ref = this.bindings;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        binding = _ref[_i];
        _results.push(binding.sync());
      }
      return _results;
    };

    View.prototype.publish = function() {
      var binding, _i, _len, _ref, _results;
      _ref = this.select(function(b) {
        return b.binder.publishes;
      });
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        binding = _ref[_i];
        _results.push(binding.publish());
      }
      return _results;
    };

    View.prototype.update = function(models) {
      var binding, key, model, _i, _len, _ref, _results;
      if (models == null) {
        models = {};
      }
      for (key in models) {
        model = models[key];
        this.models[key] = model;
      }
      _ref = this.bindings;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        binding = _ref[_i];
        _results.push(binding.update(models));
      }
      return _results;
    };

    return View;

  })();

  Rivets.TextTemplateParser = (function() {
    function TextTemplateParser() {}

    TextTemplateParser.types = {
      text: 0,
      binding: 1
    };

    TextTemplateParser.parse = function(template, delimiters) {
      var index, lastIndex, lastToken, length, substring, tokens, value;
      tokens = [];
      length = template.length;
      index = 0;
      lastIndex = 0;
      while (lastIndex < length) {
        index = template.indexOf(delimiters[0], lastIndex);
        if (index < 0) {
          tokens.push({
            type: this.types.text,
            value: template.slice(lastIndex)
          });
          break;
        } else {
          if (index > 0 && lastIndex < index) {
            tokens.push({
              type: this.types.text,
              value: template.slice(lastIndex, index)
            });
          }
          lastIndex = index + 2;
          index = template.indexOf(delimiters[1], lastIndex);
          if (index < 0) {
            substring = template.slice(lastIndex - 2);
            lastToken = tokens[tokens.length - 1];
            if ((lastToken != null ? lastToken.type : void 0) === this.types.text) {
              lastToken.value += substring;
            } else {
              tokens.push({
                type: this.types.text,
                value: substring
              });
            }
            break;
          }
          value = template.slice(lastIndex, index).trim();
          tokens.push({
            type: this.types.binding,
            value: value
          });
          lastIndex = index + 2;
        }
      }
      return tokens;
    };

    return TextTemplateParser;

  })();

  Rivets.Util = {
    bindEvent: function(el, event, handler) {
      if (window.jQuery != null) {
        el = jQuery(el);
        if (el.on != null) {
          return el.on(event, handler);
        } else {
          return el.bind(event, handler);
        }
      } else if (window.addEventListener != null) {
        return el.addEventListener(event, handler, false);
      } else {
        event = 'on' + event;
        return el.attachEvent(event, handler);
      }
    },
    unbindEvent: function(el, event, handler) {
      if (window.jQuery != null) {
        el = jQuery(el);
        if (el.off != null) {
          return el.off(event, handler);
        } else {
          return el.unbind(event, handler);
        }
      } else if (window.removeEventListener != null) {
        return el.removeEventListener(event, handler, false);
      } else {
        event = 'on' + event;
        return el.detachEvent(event, handler);
      }
    },
    getInputValue: function(el) {
      var o, _i, _len, _results;
      if (window.jQuery != null) {
        el = jQuery(el);
        switch (el[0].type) {
          case 'checkbox':
            return el.is(':checked');
          default:
            return el.val();
        }
      } else {
        switch (el.type) {
          case 'checkbox':
            return el.checked;
          case 'select-multiple':
            _results = [];
            for (_i = 0, _len = el.length; _i < _len; _i++) {
              o = el[_i];
              if (o.selected) {
                _results.push(o.value);
              }
            }
            return _results;
            break;
          default:
            return el.value;
        }
      }
    }
  };

  Rivets.binders = {
    enabled: function(el, value) {
      return el.disabled = !value;
    },
    disabled: function(el, value) {
      return el.disabled = !!value;
    },
    checked: {
      publishes: true,
      bind: function(el) {
        return Rivets.Util.bindEvent(el, 'change', this.publish);
      },
      unbind: function(el) {
        return Rivets.Util.unbindEvent(el, 'change', this.publish);
      },
      routine: function(el, value) {
        var _ref;
        if (el.type === 'radio') {
          return el.checked = ((_ref = el.value) != null ? _ref.toString() : void 0) === (value != null ? value.toString() : void 0);
        } else {
          return el.checked = !!value;
        }
      }
    },
    unchecked: {
      publishes: true,
      bind: function(el) {
        return Rivets.Util.bindEvent(el, 'change', this.publish);
      },
      unbind: function(el) {
        return Rivets.Util.unbindEvent(el, 'change', this.publish);
      },
      routine: function(el, value) {
        var _ref;
        if (el.type === 'radio') {
          return el.checked = ((_ref = el.value) != null ? _ref.toString() : void 0) !== (value != null ? value.toString() : void 0);
        } else {
          return el.checked = !value;
        }
      }
    },
    show: function(el, value) {
      return el.style.display = value ? '' : 'none';
    },
    hide: function(el, value) {
      return el.style.display = value ? 'none' : '';
    },
    html: function(el, value) {
      return el.innerHTML = value != null ? value : '';
    },
    value: {
      publishes: true,
      bind: function(el) {
        return Rivets.Util.bindEvent(el, 'change', this.publish);
      },
      unbind: function(el) {
        return Rivets.Util.unbindEvent(el, 'change', this.publish);
      },
      routine: function(el, value) {
        var o, _i, _len, _ref, _ref1, _ref2, _results;
        if (window.jQuery != null) {
          el = jQuery(el);
          if ((value != null ? value.toString() : void 0) !== ((_ref = el.val()) != null ? _ref.toString() : void 0)) {
            return el.val(value != null ? value : '');
          }
        } else {
          if (el.type === 'select-multiple') {
            if (value != null) {
              _results = [];
              for (_i = 0, _len = el.length; _i < _len; _i++) {
                o = el[_i];
                _results.push(o.selected = (_ref1 = o.value, __indexOf.call(value, _ref1) >= 0));
              }
              return _results;
            }
          } else if ((value != null ? value.toString() : void 0) !== ((_ref2 = el.value) != null ? _ref2.toString() : void 0)) {
            return el.value = value != null ? value : '';
          }
        }
      }
    },
    text: function(el, value) {
      if (el.innerText != null) {
        return el.innerText = value != null ? value : '';
      } else {
        return el.textContent = value != null ? value : '';
      }
    },
    "if": {
      block: true,
      bind: function(el) {
        var attr, declaration;
        if (this.marker == null) {
          attr = ['data', this.view.config.prefix, this.type].join('-').replace('--', '-');
          declaration = el.getAttribute(attr);
          this.marker = document.createComment(" rivets: " + this.type + " " + declaration + " ");
          el.removeAttribute(attr);
          el.parentNode.insertBefore(this.marker, el);
          return el.parentNode.removeChild(el);
        }
      },
      unbind: function() {
        var _ref;
        return (_ref = this.nested) != null ? _ref.unbind() : void 0;
      },
      routine: function(el, value) {
        var key, model, models, options, _ref;
        if (!!value === (this.nested == null)) {
          if (value) {
            models = {};
            _ref = this.view.models;
            for (key in _ref) {
              model = _ref[key];
              models[key] = model;
            }
            options = {
              binders: this.view.options.binders,
              formatters: this.view.options.formatters,
              config: this.view.options.config
            };
            (this.nested = new Rivets.View(el, models, options)).bind();
            return this.marker.parentNode.insertBefore(el, this.marker.nextSibling);
          } else {
            el.parentNode.removeChild(el);
            this.nested.unbind();
            return delete this.nested;
          }
        }
      },
      update: function(models) {
        var _ref;
        return (_ref = this.nested) != null ? _ref.update(models) : void 0;
      }
    },
    unless: {
      block: true,
      bind: function(el) {
        return Rivets.binders["if"].bind.call(this, el);
      },
      unbind: function() {
        return Rivets.binders["if"].unbind.call(this);
      },
      routine: function(el, value) {
        return Rivets.binders["if"].routine.call(this, el, !value);
      },
      update: function(models) {
        return Rivets.binders["if"].update.call(this, models);
      }
    },
    "on-*": {
      "function": true,
      unbind: function(el) {
        if (this.handler) {
          return Rivets.Util.unbindEvent(el, this.args[0], this.handler);
        }
      },
      routine: function(el, value) {
        if (this.handler) {
          Rivets.Util.unbindEvent(el, this.args[0], this.handler);
        }
        return Rivets.Util.bindEvent(el, this.args[0], this.handler = this.eventHandler(value));
      }
    },
    "each-*": {
      block: true,
      bind: function(el) {
        var attr;
        if (this.marker == null) {
          attr = ['data', this.view.config.prefix, this.type].join('-').replace('--', '-');
          this.marker = document.createComment(" rivets: " + this.type + " ");
          this.iterated = [];
          el.removeAttribute(attr);
          el.parentNode.insertBefore(this.marker, el);
          return el.parentNode.removeChild(el);
        }
      },
      unbind: function(el) {
        var view, _i, _len, _ref, _results;
        if (this.iterated != null) {
          _ref = this.iterated;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            view = _ref[_i];
            _results.push(view.unbind());
          }
          return _results;
        }
      },
      routine: function(el, collection) {
        var data, i, index, k, key, model, modelName, options, previous, template, v, view, _i, _j, _len, _len1, _ref, _ref1, _ref2, _results;
        modelName = this.args[0];
        collection = collection || [];
        if (this.iterated.length > collection.length) {
          _ref = Array(this.iterated.length - collection.length);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            i = _ref[_i];
            view = this.iterated.pop();
            view.unbind();
            this.marker.parentNode.removeChild(view.els[0]);
          }
        }
        _results = [];
        for (index = _j = 0, _len1 = collection.length; _j < _len1; index = ++_j) {
          model = collection[index];
          data = {};
          data[modelName] = model;
          if (this.iterated[index] == null) {
            _ref1 = this.view.models;
            for (key in _ref1) {
              model = _ref1[key];
              if (data[key] == null) {
                data[key] = model;
              }
            }
            previous = this.iterated.length ? this.iterated[this.iterated.length - 1].els[0] : this.marker;
            options = {
              binders: this.view.options.binders,
              formatters: this.view.options.formatters,
              config: {}
            };
            _ref2 = this.view.options.config;
            for (k in _ref2) {
              v = _ref2[k];
              options.config[k] = v;
            }
            options.config.preloadData = true;
            template = el.cloneNode(true);
            view = new Rivets.View(template, data, options);
            view.bind();
            this.iterated.push(view);
            _results.push(this.marker.parentNode.insertBefore(template, previous.nextSibling));
          } else if (this.iterated[index].models[modelName] !== model) {
            _results.push(this.iterated[index].update(data));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      },
      update: function(models) {
        var data, key, model, view, _i, _len, _ref, _results;
        data = {};
        for (key in models) {
          model = models[key];
          if (key !== this.args[0]) {
            data[key] = model;
          }
        }
        _ref = this.iterated;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          view = _ref[_i];
          _results.push(view.update(data));
        }
        return _results;
      }
    },
    "class-*": function(el, value) {
      var elClass;
      elClass = " " + el.className + " ";
      if (!value === (elClass.indexOf(" " + this.args[0] + " ") !== -1)) {
        return el.className = value ? "" + el.className + " " + this.args[0] : elClass.replace(" " + this.args[0] + " ", ' ').trim();
      }
    },
    "*": function(el, value) {
      if (value) {
        return el.setAttribute(this.type, value);
      } else {
        return el.removeAttribute(this.type);
      }
    }
  };

  Rivets.components = {};

  Rivets.config = {
    preloadData: true,
    handler: function(context, ev, binding) {
      return this.call(context, ev, binding.view.models);
    }
  };

  Rivets.formatters = {};

  Rivets.factory = function(exports) {
    exports._ = Rivets;
    exports.binders = Rivets.binders;
    exports.components = Rivets.components;
    exports.formatters = Rivets.formatters;
    exports.config = Rivets.config;
    exports.configure = function(options) {
      var property, value;
      if (options == null) {
        options = {};
      }
      for (property in options) {
        value = options[property];
        Rivets.config[property] = value;
      }
    };
    return exports.bind = function(el, models, options) {
      var view;
      if (models == null) {
        models = {};
      }
      if (options == null) {
        options = {};
      }
      view = new Rivets.View(el, models, options);
      view.bind();
      return view;
    };
  };

  if (typeof exports === 'object') {
    Rivets.factory(exports);
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function(exports) {
      Rivets.factory(this.rivets = exports);
      return exports;
    });
  } else {
    Rivets.factory(this.rivets = {});
  }

}).call(this);

//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

/**
 * Main source
 */

;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['underscore', 'backbone'], factory);
    } else {
        // globals
        factory(_, Backbone);
    }
}(function(_, Backbone) {
    
    /**
     * Takes a nested object and returns a shallow object keyed with the path names
     * e.g. { "level1.level2": "value" }
     *
     * @param  {Object}      Nested object e.g. { level1: { level2: 'value' } }
     * @return {Object}      Shallow object with path names e.g. { 'level1.level2': 'value' }
     */
    function objToPaths(obj) {
        var ret = {},
            separator = DeepModel.keyPathSeparator;

        for (var key in obj) {
            var val = obj[key];

            if (val && val.constructor === Object && !_.isEmpty(val)) {
                //Recursion for embedded objects
                var obj2 = objToPaths(val);

                for (var key2 in obj2) {
                    var val2 = obj2[key2];

                    ret[key + separator + key2] = val2;
                }
            } else {
                ret[key] = val;
            }
        }

        return ret;
    }

    /**
     * @param {Object}  Object to fetch attribute from
     * @param {String}  Object path e.g. 'user.name'
     * @return {Mixed}
     */
    function getNested(obj, path, return_exists) {
        var separator = DeepModel.keyPathSeparator;

        var fields = path.split(separator);
        var result = obj;
        return_exists || (return_exists === false);
        for (var i = 0, n = fields.length; i < n; i++) {
            if (return_exists && !_.has(result, fields[i])) {
                return false;
            }
            result = result[fields[i]];

            if (result == null && i < n - 1) {
                result = {};
            }
            
            if (typeof result === 'undefined') {
                if (return_exists)
                {
                    return true;
                }
                return result;
            }
        }
        if (return_exists)
        {
            return true;
        }
        return result;
    }

    /**
     * @param {Object} obj                Object to fetch attribute from
     * @param {String} path               Object path e.g. 'user.name'
     * @param {Object} [options]          Options
     * @param {Boolean} [options.unset]   Whether to delete the value
     * @param {Mixed}                     Value to set
     */
    function setNested(obj, path, val, options) {
        options = options || {};

        var separator = DeepModel.keyPathSeparator;

        var fields = path.split(separator);
        var result = obj;
        for (var i = 0, n = fields.length; i < n && result !== undefined ; i++) {
            var field = fields[i];

            //If the last in the path, set the value
            if (i === n - 1) {
                options.unset ? delete result[field] : result[field] = val;
            } else {
                //Create the child object if it doesn't exist, or isn't an object
                if (typeof result[field] === 'undefined' || ! _.isObject(result[field])) {
                    result[field] = {};
                }

                //Move onto the next part of the path
                result = result[field];
            }
        }
    }

    function deleteNested(obj, path) {
      setNested(obj, path, null, { unset: true });
    }

    var DeepModel = Backbone.Model.extend({

        // Override constructor
        // Support having nested defaults by using _.deepExtend instead of _.extend
        constructor: function(attributes, options) {
            var defaults;
            var attrs = attributes || {};
            this.cid = _.uniqueId('c');
            this.attributes = {};
            if (options && options.collection) this.collection = options.collection;
            if (options && options.parse) attrs = this.parse(attrs, options) || {};
            if (defaults = _.result(this, 'defaults')) {
                //<custom code>
                // Replaced the call to _.defaults with _.deepExtend.
                attrs = _.deepExtend({}, defaults, attrs);
                //</custom code>
            }
            this.set(attrs, options);
            this.changed = {};
            this.initialize.apply(this, arguments);
        },

        // Return a copy of the model's `attributes` object.
        toJSON: function(options) {
          return _.deepClone(this.attributes);
        },

        // Override get
        // Supports nested attributes via the syntax 'obj.attr' e.g. 'author.user.name'
        get: function(attr) {
            return getNested(this.attributes, attr);
        },

        // Override set
        // Supports nested attributes via the syntax 'obj.attr' e.g. 'author.user.name'
        set: function(key, val, options) {
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if (key == null) return this;
            
            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (typeof key === 'object') {
              attrs = key;
              options = val || {};
            } else {
              (attrs = {})[key] = val;
            }

            options || (options = {});
            
            // Run validation.
            if (!this._validate(attrs, options)) return false;

            // Extract attributes and options.
            unset           = options.unset;
            silent          = options.silent;
            changes         = [];
            changing        = this._changing;
            this._changing  = true;

            if (!changing) {
              this._previousAttributes = _.deepClone(this.attributes); //<custom>: Replaced _.clone with _.deepClone
              this.changed = {};
            }
            current = this.attributes, prev = this._previousAttributes;

            // Check for changes of `id`.
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

            //<custom code>
            attrs = objToPaths(attrs);
            //</custom code>

            // For each `set` attribute, update or delete the current value.
            for (attr in attrs) {
              val = attrs[attr];

              //<custom code>: Using getNested, setNested and deleteNested
              if (!_.isEqual(getNested(current, attr), val)) changes.push(attr);
              if (!_.isEqual(getNested(prev, attr), val)) {
                setNested(this.changed, attr, val);
              } else {
                deleteNested(this.changed, attr);
              }
              unset ? deleteNested(current, attr) : setNested(current, attr, val);
              //</custom code>
            }

            // Trigger all relevant attribute changes.
            if (!silent) {
              if (changes.length) this._pending = true;

              //<custom code>
              var separator = DeepModel.keyPathSeparator;

              for (var i = 0, l = changes.length; i < l; i++) {
                var key = changes[i];

                this.trigger('change:' + key, this, getNested(current, key), options);

                var fields = key.split(separator);

                //Trigger change events for parent keys with wildcard (*) notation
                for(var n = fields.length - 1; n > 0; n--) {
                  var parentKey = _.first(fields, n).join(separator),
                      wildcardKey = parentKey + separator + '*';

                  this.trigger('change:' + wildcardKey, this, getNested(current, parentKey), options);
                }
                //</custom code>
              }
            }

            if (changing) return this;
            if (!silent) {
              while (this._pending) {
                this._pending = false;
                this.trigger('change', this, options);
              }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },

        // Clear all attributes on the model, firing `"change"` unless you choose
        // to silence it.
        clear: function(options) {
          var attrs = {};
          var shallowAttributes = objToPaths(this.attributes);
          for (var key in shallowAttributes) attrs[key] = void 0;
          return this.set(attrs, _.extend({}, options, {unset: true}));
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function(attr) {
          if (attr == null) return !_.isEmpty(this.changed);
          return getNested(this.changed, attr) !== undefined;
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function(diff) {
          //<custom code>: objToPaths
          if (!diff) return this.hasChanged() ? objToPaths(this.changed) : false;
          //</custom code>

          var old = this._changing ? this._previousAttributes : this.attributes;
          
          //<custom code>
          diff = objToPaths(diff);
          old = objToPaths(old);
          //</custom code>

          var val, changed = false;
          for (var attr in diff) {
            if (_.isEqual(old[attr], (val = diff[attr]))) continue;
            (changed || (changed = {}))[attr] = val;
          }
          return changed;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function(attr) {
          if (attr == null || !this._previousAttributes) return null;

          //<custom code>
          return getNested(this._previousAttributes, attr);
          //</custom code>
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function() {
          //<custom code>
          return _.deepClone(this._previousAttributes);
          //</custom code>
        }
    });


    //Config; override in your app to customise
    DeepModel.keyPathSeparator = '.';


    //Exports
    Backbone.DeepModel = DeepModel;

    //For use in NodeJS
    if (typeof module != 'undefined') module.exports = DeepModel;
    
    return Backbone;

}));

var fabric=fabric||{version:"1.7.19"};"undefined"!=typeof exports&&(exports.fabric=fabric),"undefined"!=typeof document&&"undefined"!=typeof window?(fabric.document=document,fabric.window=window,window.fabric=fabric):(fabric.document=require("jsdom").jsdom(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E")),fabric.document.createWindow?fabric.window=fabric.document.createWindow():fabric.window=fabric.document.parentWindow),fabric.isTouchSupported="ontouchstart"in fabric.window,fabric.isLikelyNode="undefined"!=typeof Buffer&&"undefined"==typeof window,fabric.SHARED_ATTRIBUTES=["display","transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id"],fabric.DPI=96,fabric.reNum="(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)",fabric.fontPaths={},fabric.iMatrix=[1,0,0,1,0,0],fabric.canvasModule="canvas",fabric.perfLimitSizeTotal=2097152,fabric.maxCacheSideLimit=4096,fabric.minCacheSideLimit=256,fabric.charWidthsCache={},fabric.devicePixelRatio=fabric.window.devicePixelRatio||fabric.window.webkitDevicePixelRatio||fabric.window.mozDevicePixelRatio||1,function(){function t(t,e){if(this.__eventListeners[t]){var i=this.__eventListeners[t];e?i[i.indexOf(e)]=!1:fabric.util.array.fill(i,!1)}}function e(t,e){if(this.__eventListeners||(this.__eventListeners={}),1===arguments.length)for(var i in t)this.on(i,t[i]);else this.__eventListeners[t]||(this.__eventListeners[t]=[]),this.__eventListeners[t].push(e);return this}function i(e,i){if(this.__eventListeners){if(0===arguments.length)for(e in this.__eventListeners)t.call(this,e);else if(1===arguments.length&&"object"==typeof arguments[0])for(var r in e)t.call(this,r,e[r]);else t.call(this,e,i);return this}}function r(t,e){if(this.__eventListeners){var i=this.__eventListeners[t];if(i){for(var r=0,n=i.length;r<n;r++)i[r]&&i[r].call(this,e||{});return this.__eventListeners[t]=i.filter(function(t){return!1!==t}),this}}}fabric.Observable={observe:e,stopObserving:i,fire:r,on:e,off:i,trigger:r}}(),fabric.Collection={_objects:[],add:function(){if(this._objects.push.apply(this._objects,arguments),this._onObjectAdded)for(var t=0,e=arguments.length;t<e;t++)this._onObjectAdded(arguments[t]);return this.renderOnAddRemove&&this.renderAll(),this},insertAt:function(t,e,i){var r=this.getObjects();return i?r[e]=t:r.splice(e,0,t),this._onObjectAdded&&this._onObjectAdded(t),this.renderOnAddRemove&&this.renderAll(),this},remove:function(){for(var t,e=this.getObjects(),i=!1,r=0,n=arguments.length;r<n;r++)-1!==(t=e.indexOf(arguments[r]))&&(i=!0,e.splice(t,1),this._onObjectRemoved&&this._onObjectRemoved(arguments[r]));return this.renderOnAddRemove&&i&&this.renderAll(),this},forEachObject:function(t,e){for(var i=this.getObjects(),r=0,n=i.length;r<n;r++)t.call(e,i[r],r,i);return this},getObjects:function(t){return void 0===t?this._objects:this._objects.filter(function(e){return e.type===t})},item:function(t){return this.getObjects()[t]},isEmpty:function(){return 0===this.getObjects().length},size:function(){return this.getObjects().length},contains:function(t){return this.getObjects().indexOf(t)>-1},complexity:function(){return this.getObjects().reduce(function(t,e){return t+=e.complexity?e.complexity():0},0)}},fabric.CommonMethods={_setOptions:function(t){for(var e in t)this.set(e,t[e])},_initGradient:function(t,e){!t||!t.colorStops||t instanceof fabric.Gradient||this.set(e,new fabric.Gradient(t))},_initPattern:function(t,e,i){!t||!t.source||t instanceof fabric.Pattern?i&&i():this.set(e,new fabric.Pattern(t,i))},_initClipping:function(t){if(t.clipTo&&"string"==typeof t.clipTo){var e=fabric.util.getFunctionBody(t.clipTo);void 0!==e&&(this.clipTo=new Function("ctx",e))}},_setObject:function(t){for(var e in t)this._set(e,t[e])},set:function(t,e){return"object"==typeof t?this._setObject(t):"function"==typeof e&&"clipTo"!==t?this._set(t,e(this.get(t))):this._set(t,e),this},_set:function(t,e){this[t]=e},toggle:function(t){var e=this.get(t);return"boolean"==typeof e&&this.set(t,!e),this},get:function(t){return this[t]}},function(t){var e=Math.sqrt,i=Math.atan2,r=Math.pow,n=Math.abs,s=Math.PI/180;fabric.util={removeFromArray:function(t,e){var i=t.indexOf(e);return-1!==i&&t.splice(i,1),t},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},degreesToRadians:function(t){return t*s},radiansToDegrees:function(t){return t/s},rotatePoint:function(t,e,i){t.subtractEquals(e);var r=fabric.util.rotateVector(t,i);return new fabric.Point(r.x,r.y).addEquals(e)},rotateVector:function(t,e){var i=Math.sin(e),r=Math.cos(e);return{x:t.x*r-t.y*i,y:t.x*i+t.y*r}},transformPoint:function(t,e,i){return i?new fabric.Point(e[0]*t.x+e[2]*t.y,e[1]*t.x+e[3]*t.y):new fabric.Point(e[0]*t.x+e[2]*t.y+e[4],e[1]*t.x+e[3]*t.y+e[5])},makeBoundingBoxFromPoints:function(t){var e=[t[0].x,t[1].x,t[2].x,t[3].x],i=fabric.util.array.min(e),r=fabric.util.array.max(e),n=Math.abs(i-r),s=[t[0].y,t[1].y,t[2].y,t[3].y],o=fabric.util.array.min(s),a=fabric.util.array.max(s);return{left:i,top:o,width:n,height:Math.abs(o-a)}},invertTransform:function(t){var e=1/(t[0]*t[3]-t[1]*t[2]),i=[e*t[3],-e*t[1],-e*t[2],e*t[0]],r=fabric.util.transformPoint({x:t[4],y:t[5]},i,!0);return i[4]=-r.x,i[5]=-r.y,i},toFixed:function(t,e){return parseFloat(Number(t).toFixed(e))},parseUnit:function(t,e){var i=/\D{0,2}$/.exec(t),r=parseFloat(t);switch(e||(e=fabric.Text.DEFAULT_SVG_FONT_SIZE),i[0]){case"mm":return r*fabric.DPI/25.4;case"cm":return r*fabric.DPI/2.54;case"in":return r*fabric.DPI;case"pt":return r*fabric.DPI/72;case"pc":return r*fabric.DPI/72*12;case"em":return r*e;default:return r}},falseFunction:function(){return!1},getKlass:function(t,e){return t=fabric.util.string.camelize(t.charAt(0).toUpperCase()+t.slice(1)),fabric.util.resolveNamespace(e)[t]},resolveNamespace:function(e){if(!e)return fabric;var i,r=e.split("."),n=r.length,s=t||fabric.window;for(i=0;i<n;++i)s=s[r[i]];return s},loadImage:function(t,e,i,r){if(t){var n=fabric.util.createImage();n.onload=function(){e&&e.call(i,n),n=n.onload=n.onerror=null},n.onerror=function(){fabric.log("Error loading "+n.src),e&&e.call(i,null,!0),n=n.onload=n.onerror=null},0!==t.indexOf("data")&&r&&(n.crossOrigin=r),n.src=t}else e&&e.call(i,t)},enlivenObjects:function(t,e,i,r){function n(){++o===a&&e&&e(s)}var s=[],o=0,a=(t=t||[]).length;a?t.forEach(function(t,e){t&&t.type?fabric.util.getKlass(t.type,i).fromObject(t,function(i,o){o||(s[e]=i),r&&r(t,i,o),n()},!0):n()}):e&&e(s)},enlivenPatterns:function(t,e){function i(){++n===s&&e&&e(r)}var r=[],n=0,s=(t=t||[]).length;s?t.forEach(function(t,e){t&&t.source?new fabric.Pattern(t,function(t){r[e]=t,i()}):(r[e]=t,i())}):e&&e(r)},groupSVGElements:function(t,e,i){var r;return r=new fabric.PathGroup(t,e),void 0!==i&&(r.sourcePath=i),r},populateWithProperties:function(t,e,i){if(i&&"[object Array]"===Object.prototype.toString.call(i))for(var r=0,n=i.length;r<n;r++)i[r]in t&&(e[i[r]]=t[i[r]])},drawDashedLine:function(t,r,n,s,o,a){var h=s-r,c=o-n,l=e(h*h+c*c),u=i(c,h),f=a.length,d=0,g=!0;for(t.save(),t.translate(r,n),t.moveTo(0,0),t.rotate(u),r=0;l>r;)(r+=a[d++%f])>l&&(r=l),t[g?"lineTo":"moveTo"](r,0),g=!g;t.restore()},createCanvasElement:function(t){return t||(t=fabric.document.createElement("canvas")),t.getContext||"undefined"==typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(t),t},createImage:function(){return fabric.isLikelyNode?new(require("canvas").Image):fabric.document.createElement("img")},createAccessors:function(t){var e,i,r,n,s,o=t.prototype;for(e=o.stateProperties.length;e--;)n="set"+(r=(i=o.stateProperties[e]).charAt(0).toUpperCase()+i.slice(1)),o[s="get"+r]||(o[s]=function(t){return new Function('return this.get("'+t+'")')}(i)),o[n]||(o[n]=function(t){return new Function("value",'return this.set("'+t+'", value)')}(i))},clipContext:function(t,e){e.save(),e.beginPath(),t.clipTo(e),e.clip()},multiplyTransformMatrices:function(t,e,i){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],i?0:t[0]*e[4]+t[2]*e[5]+t[4],i?0:t[1]*e[4]+t[3]*e[5]+t[5]]},qrDecompose:function(t){var n=i(t[1],t[0]),o=r(t[0],2)+r(t[1],2),a=e(o),h=(t[0]*t[3]-t[2]*t[1])/a,c=i(t[0]*t[2]+t[1]*t[3],o);return{angle:n/s,scaleX:a,scaleY:h,skewX:c/s,skewY:0,translateX:t[4],translateY:t[5]}},customTransformMatrix:function(t,e,i){var r=[1,0,n(Math.tan(i*s)),1],o=[n(t),0,0,n(e)];return fabric.util.multiplyTransformMatrices(o,r,!0)},resetObjectTransform:function(t){t.scaleX=1,t.scaleY=1,t.skewX=0,t.skewY=0,t.flipX=!1,t.flipY=!1,t.setAngle(0)},getFunctionBody:function(t){return(String(t).match(/function[^{]*\{([\s\S]*)\}/)||{})[1]},isTransparent:function(t,e,i,r){r>0&&(e>r?e-=r:e=0,i>r?i-=r:i=0);var n,s,o=!0,a=t.getImageData(e,i,2*r||1,2*r||1),h=a.data.length;for(n=3;n<h&&(s=a.data[n],!1!==(o=s<=0));n+=4);return a=null,o},parsePreserveAspectRatioAttribute:function(t){var e,i="meet",r="Mid",n="Mid",s=t.split(" ");return s&&s.length&&("meet"!==(i=s.pop())&&"slice"!==i?(e=i,i="meet"):s.length&&(e=s.pop())),r="none"!==e?e.slice(1,4):"none",n="none"!==e?e.slice(5,8):"none",{meetOrSlice:i,alignX:r,alignY:n}},clearFabricFontCache:function(t){t?fabric.charWidthsCache[t]&&delete fabric.charWidthsCache[t]:fabric.charWidthsCache={}},limitDimsByArea:function(t,e){var i=Math.sqrt(e*t),r=Math.floor(e/i);return{x:Math.floor(i),y:r}},capValue:function(t,e,i){return Math.max(t,Math.min(e,i))}}}("undefined"!=typeof exports?exports:this),function(){function t(t,r,s,o,h,c,l){var u=a.call(arguments);if(n[u])return n[u];var f=Math.PI,d=l*f/180,g=Math.sin(d),p=Math.cos(d),v=0,b=0,m=-p*t*.5-g*r*.5,_=-p*r*.5+g*t*.5,y=(s=Math.abs(s))*s,x=(o=Math.abs(o))*o,C=_*_,S=m*m,w=y*x-y*C-x*S,O=0;if(w<0){var T=Math.sqrt(1-w/(y*x));s*=T,o*=T}else O=(h===c?-1:1)*Math.sqrt(w/(y*C+x*S));var j=O*s*_/o,k=-O*o*m/s,M=p*j-g*k+.5*t,D=g*j+p*k+.5*r,P=i(1,0,(m-j)/s,(_-k)/o),A=i((m-j)/s,(_-k)/o,(-m-j)/s,(-_-k)/o);0===c&&A>0?A-=2*f:1===c&&A<0&&(A+=2*f);for(var E=Math.ceil(Math.abs(A/f*2)),I=[],L=A/E,F=8/3*Math.sin(L/4)*Math.sin(L/4)/Math.sin(L/2),B=P+L,R=0;R<E;R++)I[R]=e(P,B,p,g,s,o,M,D,F,v,b),v=I[R][4],b=I[R][5],P=B,B+=L;return n[u]=I,I}function e(t,e,i,r,n,o,h,c,l,u,f){var d=a.call(arguments);if(s[d])return s[d];var g=Math.cos(t),p=Math.sin(t),v=Math.cos(e),b=Math.sin(e),m=i*n*v-r*o*b+h,_=r*n*v+i*o*b+c,y=u+l*(-i*n*p-r*o*g),x=f+l*(-r*n*p+i*o*g),C=m+l*(i*n*b+r*o*v),S=_+l*(r*n*b-i*o*v);return s[d]=[y,x,C,S,m,_],s[d]}function i(t,e,i,r){var n=Math.atan2(e,t),s=Math.atan2(r,i);return s>=n?s-n:2*Math.PI-(n-s)}function r(t,e,i,r,n,s,h,c){var l=a.call(arguments);if(o[l])return o[l];var u,f,d,g,p,v,b,m,_=Math.sqrt,y=Math.min,x=Math.max,C=Math.abs,S=[],w=[[],[]];f=6*t-12*i+6*n,u=-3*t+9*i-9*n+3*h,d=3*i-3*t;for(var O=0;O<2;++O)if(O>0&&(f=6*e-12*r+6*s,u=-3*e+9*r-9*s+3*c,d=3*r-3*e),C(u)<1e-12){if(C(f)<1e-12)continue;0<(g=-d/f)&&g<1&&S.push(g)}else(b=f*f-4*d*u)<0||(0<(p=(-f+(m=_(b)))/(2*u))&&p<1&&S.push(p),0<(v=(-f-m)/(2*u))&&v<1&&S.push(v));for(var T,j,k,M=S.length,D=M;M--;)T=(k=1-(g=S[M]))*k*k*t+3*k*k*g*i+3*k*g*g*n+g*g*g*h,w[0][M]=T,j=k*k*k*e+3*k*k*g*r+3*k*g*g*s+g*g*g*c,w[1][M]=j;w[0][D]=t,w[1][D]=e,w[0][D+1]=h,w[1][D+1]=c;var P=[{x:y.apply(null,w[0]),y:y.apply(null,w[1])},{x:x.apply(null,w[0]),y:x.apply(null,w[1])}];return o[l]=P,P}var n={},s={},o={},a=Array.prototype.join;fabric.util.drawArc=function(e,i,r,n){for(var s=n[0],o=n[1],a=n[2],h=n[3],c=n[4],l=[[],[],[],[]],u=t(n[5]-i,n[6]-r,s,o,h,c,a),f=0,d=u.length;f<d;f++)l[f][0]=u[f][0]+i,l[f][1]=u[f][1]+r,l[f][2]=u[f][2]+i,l[f][3]=u[f][3]+r,l[f][4]=u[f][4]+i,l[f][5]=u[f][5]+r,e.bezierCurveTo.apply(e,l[f])},fabric.util.getBoundsOfArc=function(e,i,n,s,o,a,h,c,l){for(var u,f=0,d=0,g=[],p=t(c-e,l-i,n,s,a,h,o),v=0,b=p.length;v<b;v++)u=r(f,d,p[v][0],p[v][1],p[v][2],p[v][3],p[v][4],p[v][5]),g.push({x:u[0].x+e,y:u[0].y+i}),g.push({x:u[1].x+e,y:u[1].y+i}),f=p[v][4],d=p[v][5];return g},fabric.util.getBoundsOfCurve=r}(),function(){function t(t,e,i){if(t&&0!==t.length){var r=t.length-1,n=e?t[r][e]:t[r];if(e)for(;r--;)i(t[r][e],n)&&(n=t[r][e]);else for(;r--;)i(t[r],n)&&(n=t[r]);return n}}var e=Array.prototype.slice;Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(void 0===this||null===this)throw new TypeError;var e=Object(this),i=e.length>>>0;if(0===i)return-1;var r=0;if(arguments.length>0&&((r=Number(arguments[1]))!==r?r=0:0!==r&&r!==Number.POSITIVE_INFINITY&&r!==Number.NEGATIVE_INFINITY&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=i)return-1;for(var n=r>=0?r:Math.max(i-Math.abs(r),0);n<i;n++)if(n in e&&e[n]===t)return n;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)i in this&&t.call(e,this[i],i,this)}),Array.prototype.map||(Array.prototype.map=function(t,e){for(var i=[],r=0,n=this.length>>>0;r<n;r++)r in this&&(i[r]=t.call(e,this[r],r,this));return i}),Array.prototype.every||(Array.prototype.every=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)if(i in this&&!t.call(e,this[i],i,this))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)if(i in this&&t.call(e,this[i],i,this))return!0;return!1}),Array.prototype.filter||(Array.prototype.filter=function(t,e){for(var i,r=[],n=0,s=this.length>>>0;n<s;n++)n in this&&(i=this[n],t.call(e,i,n,this)&&r.push(i));return r}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e,i=this.length>>>0,r=0;if(arguments.length>1)e=arguments[1];else for(;;){if(r in this){e=this[r++];break}if(++r>=i)throw new TypeError}for(;r<i;r++)r in this&&(e=t.call(null,e,this[r],r,this));return e}),fabric.util.array={fill:function(t,e){for(var i=t.length;i--;)t[i]=e;return t},invoke:function(t,i){for(var r=e.call(arguments,2),n=[],s=0,o=t.length;s<o;s++)n[s]=r.length?t[s][i].apply(t[s],r):t[s][i].call(t[s]);return n},min:function(e,i){return t(e,i,function(t,e){return t<e})},max:function(e,i){return t(e,i,function(t,e){return t>=e})}}}(),function(){function t(e,i,r){if(r)if(!fabric.isLikelyNode&&i instanceof Element)e=i;else if(i instanceof Array){e=[];for(var n=0,s=i.length;n<s;n++)e[n]=t({},i[n],r)}else if(i&&"object"==typeof i)for(var o in i)i.hasOwnProperty(o)&&(e[o]=t({},i[o],r));else e=i;else for(var o in i)e[o]=i[o];return e}fabric.util.object={extend:t,clone:function(e,i){return t({},e,i)}}}(),function(){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")}),fabric.util.string={camelize:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},capitalize:function(t,e){return t.charAt(0).toUpperCase()+(e?t.slice(1):t.slice(1).toLowerCase())},escapeXml:function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}}(),function(){var t=Array.prototype.slice,e=Function.prototype.apply,i=function(){};Function.prototype.bind||(Function.prototype.bind=function(r){var n,s=this,o=t.call(arguments,1);return n=o.length?function(){return e.call(s,this instanceof i?this:r,o.concat(t.call(arguments)))}:function(){return e.call(s,this instanceof i?this:r,arguments)},i.prototype=this.prototype,n.prototype=new i,n})}(),function(){function t(){}function e(t){for(var e=null,r=this;r.constructor.superclass;){var n=r.constructor.superclass.prototype[t];if(r[t]!==n){e=n;break}r=r.constructor.superclass.prototype}return e?arguments.length>1?e.apply(this,i.call(arguments,1)):e.call(this):console.log("tried to callSuper "+t+", method not found in prototype chain",this)}var i=Array.prototype.slice,r=function(){},n=function(){for(var t in{toString:1})if("toString"===t)return!1;return!0}(),s=function(t,e,i){for(var r in e)r in t.prototype&&"function"==typeof t.prototype[r]&&(e[r]+"").indexOf("callSuper")>-1?t.prototype[r]=function(t){return function(){var r=this.constructor.superclass;this.constructor.superclass=i;var n=e[t].apply(this,arguments);if(this.constructor.superclass=r,"initialize"!==t)return n}}(r):t.prototype[r]=e[r],n&&(e.toString!==Object.prototype.toString&&(t.prototype.toString=e.toString),e.valueOf!==Object.prototype.valueOf&&(t.prototype.valueOf=e.valueOf))};fabric.util.createClass=function(){function n(){this.initialize.apply(this,arguments)}var o=null,a=i.call(arguments,0);"function"==typeof a[0]&&(o=a.shift()),n.superclass=o,n.subclasses=[],o&&(t.prototype=o.prototype,n.prototype=new t,o.subclasses.push(n));for(var h=0,c=a.length;h<c;h++)s(n,a[h],o);return n.prototype.initialize||(n.prototype.initialize=r),n.prototype.constructor=n,n.prototype.callSuper=e,n}}(),function(){function t(t){var e,i,r=Array.prototype.slice.call(arguments,1),n=r.length;for(i=0;i<n;i++)if(e=typeof t[r[i]],!/^(?:function|object|unknown)$/.test(e))return!1;return!0}function e(t,e){return{handler:e,wrappedHandler:i(t,e)}}function i(t,e){return function(i){e.call(s(t),i||fabric.window.event)}}function r(t,e){return function(i){if(g[t]&&g[t][e])for(var r=g[t][e],n=0,s=r.length;n<s;n++)r[n].call(this,i||fabric.window.event)}}function n(t,e,i){var r="touchend"===t.type?"changedTouches":"touches";return t[r]&&t[r][0]?t[r][0][e]-(t[r][0][e]-t[r][0][i])||t[i]:t[i]}var s,o,a="unknown",h=function(){var t=0;return function(e){return e.__uniqueID||(e.__uniqueID="uniqueID__"+t++)}}();!function(){var t={};s=function(e){return t[e]},o=function(e,i){t[e]=i}}();var c,l,u=t(fabric.document.documentElement,"addEventListener","removeEventListener")&&t(fabric.window,"addEventListener","removeEventListener"),f=t(fabric.document.documentElement,"attachEvent","detachEvent")&&t(fabric.window,"attachEvent","detachEvent"),d={},g={};u?(c=function(t,e,i,r){t&&t.addEventListener(e,i,!f&&r)},l=function(t,e,i,r){t&&t.removeEventListener(e,i,!f&&r)}):f?(c=function(t,i,r){if(t){var n=h(t);o(n,t),d[n]||(d[n]={}),d[n][i]||(d[n][i]=[]);var s=e(n,r);d[n][i].push(s),t.attachEvent("on"+i,s.wrappedHandler)}},l=function(t,e,i){if(t){var r,n=h(t);if(d[n]&&d[n][e])for(var s=0,o=d[n][e].length;s<o;s++)(r=d[n][e][s])&&r.handler===i&&(t.detachEvent("on"+e,r.wrappedHandler),d[n][e][s]=null)}}):(c=function(t,e,i){if(t){var n=h(t);if(g[n]||(g[n]={}),!g[n][e]){g[n][e]=[];var s=t["on"+e];s&&g[n][e].push(s),t["on"+e]=r(n,e)}g[n][e].push(i)}},l=function(t,e,i){if(t){var r=h(t);if(g[r]&&g[r][e])for(var n=g[r][e],s=0,o=n.length;s<o;s++)n[s]===i&&n.splice(s,1)}}),fabric.util.addListener=c,fabric.util.removeListener=l;var p=function(t){return typeof t.clientX!==a?t.clientX:0},v=function(t){return typeof t.clientY!==a?t.clientY:0};fabric.isTouchSupported&&(p=function(t){return n(t,"pageX","clientX")},v=function(t){return n(t,"pageY","clientY")}),fabric.util.getPointer=function(t){t||(t=fabric.window.event);var e=t.target||(typeof t.srcElement!==a?t.srcElement:null),i=fabric.util.getScrollLeftTop(e);return{x:p(t)+i.left,y:v(t)+i.top}},fabric.util.object.extend(fabric.util,fabric.Observable)}(),function(){var t=fabric.document.createElement("div"),e="string"==typeof t.style.opacity,i="string"==typeof t.style.filter,r=/alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,n=function(t){return t};e?n=function(t,e){return t.style.opacity=e,t}:i&&(n=function(t,e){var i=t.style;return t.currentStyle&&!t.currentStyle.hasLayout&&(i.zoom=1),r.test(i.filter)?(e=e>=.9999?"":"alpha(opacity="+100*e+")",i.filter=i.filter.replace(r,e)):i.filter+=" alpha(opacity="+100*e+")",t}),fabric.util.setStyle=function(t,e){var i=t.style;if(!i)return t;if("string"==typeof e)return t.style.cssText+=";"+e,e.indexOf("opacity")>-1?n(t,e.match(/opacity:\s*(\d?\.?\d*)/)[1]):t;for(var r in e)"opacity"===r?n(t,e[r]):i["float"===r||"cssFloat"===r?void 0===i.styleFloat?"cssFloat":"styleFloat":r]=e[r];return t}}(),function(){function t(t,e){var i=fabric.document.createElement(t);for(var r in e)"class"===r?i.className=e[r]:"for"===r?i.htmlFor=e[r]:i.setAttribute(r,e[r]);return i}function e(t){for(var e=0,i=0,r=fabric.document.documentElement,n=fabric.document.body||{scrollLeft:0,scrollTop:0};t&&(t.parentNode||t.host)&&((t=t.parentNode||t.host)===fabric.document?(e=n.scrollLeft||r.scrollLeft||0,i=n.scrollTop||r.scrollTop||0):(e+=t.scrollLeft||0,i+=t.scrollTop||0),1!==t.nodeType||"fixed"!==fabric.util.getElementStyle(t,"position")););return{left:e,top:i}}var i,r=Array.prototype.slice,n=function(t){return r.call(t,0)};try{i=n(fabric.document.childNodes)instanceof Array}catch(t){}i||(n=function(t){for(var e=new Array(t.length),i=t.length;i--;)e[i]=t[i];return e});var s;s=fabric.document.defaultView&&fabric.document.defaultView.getComputedStyle?function(t,e){var i=fabric.document.defaultView.getComputedStyle(t,null);return i?i[e]:void 0}:function(t,e){var i=t.style[e];return!i&&t.currentStyle&&(i=t.currentStyle[e]),i},function(){var t=fabric.document.documentElement.style,e="userSelect"in t?"userSelect":"MozUserSelect"in t?"MozUserSelect":"WebkitUserSelect"in t?"WebkitUserSelect":"KhtmlUserSelect"in t?"KhtmlUserSelect":"";fabric.util.makeElementUnselectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=fabric.util.falseFunction),e?t.style[e]="none":"string"==typeof t.unselectable&&(t.unselectable="on"),t},fabric.util.makeElementSelectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=null),e?t.style[e]="":"string"==typeof t.unselectable&&(t.unselectable=""),t}}(),function(){fabric.util.getScript=function(t,e){var i=fabric.document.getElementsByTagName("head")[0],r=fabric.document.createElement("script"),n=!0;r.onload=r.onreadystatechange=function(t){if(n){if("string"==typeof this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)return;n=!1,e(t||fabric.window.event),r=r.onload=r.onreadystatechange=null}},r.src=t,i.appendChild(r)}}(),fabric.util.getById=function(t){return"string"==typeof t?fabric.document.getElementById(t):t},fabric.util.toArray=n,fabric.util.makeElement=t,fabric.util.addClass=function(t,e){t&&-1===(" "+t.className+" ").indexOf(" "+e+" ")&&(t.className+=(t.className?" ":"")+e)},fabric.util.wrapElement=function(e,i,r){return"string"==typeof i&&(i=t(i,r)),e.parentNode&&e.parentNode.replaceChild(i,e),i.appendChild(e),i},fabric.util.getScrollLeftTop=e,fabric.util.getElementOffset=function(t){var i,r,n=t&&t.ownerDocument,o={left:0,top:0},a={left:0,top:0},h={borderLeftWidth:"left",borderTopWidth:"top",paddingLeft:"left",paddingTop:"top"};if(!n)return a;for(var c in h)a[h[c]]+=parseInt(s(t,c),10)||0;return i=n.documentElement,void 0!==t.getBoundingClientRect&&(o=t.getBoundingClientRect()),r=e(t),{left:o.left+r.left-(i.clientLeft||0)+a.left,top:o.top+r.top-(i.clientTop||0)+a.top}},fabric.util.getElementStyle=s}(),function(){function t(t,e){return t+(/\?/.test(t)?"&":"?")+e}function e(){}var i=function(){for(var t=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new XMLHttpRequest}],e=t.length;e--;)try{if(t[e]())return t[e]}catch(t){}}();fabric.util.request=function(r,n){n||(n={});var s=n.method?n.method.toUpperCase():"GET",o=n.onComplete||function(){},a=i(),h=n.body||n.parameters;return a.onreadystatechange=function(){4===a.readyState&&(o(a),a.onreadystatechange=e)},"GET"===s&&(h=null,"string"==typeof n.parameters&&(r=t(r,n.parameters))),a.open(s,r,!0),"POST"!==s&&"PUT"!==s||a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(h),a}}(),fabric.log=function(){},fabric.warn=function(){},"undefined"!=typeof console&&["log","warn"].forEach(function(t){void 0!==console[t]&&"function"==typeof console[t].apply&&(fabric[t]=function(){return console[t].apply(console,arguments)})}),function(){function t(){return!1}function e(){return i.apply(fabric.window,arguments)}var i=fabric.window.requestAnimationFrame||fabric.window.webkitRequestAnimationFrame||fabric.window.mozRequestAnimationFrame||fabric.window.oRequestAnimationFrame||fabric.window.msRequestAnimationFrame||function(t){fabric.window.setTimeout(t,1e3/60)};fabric.util.animate=function(i){e(function(r){i||(i={});var n,s=r||+new Date,o=i.duration||500,a=s+o,h=i.onChange||t,c=i.abort||t,l=i.onComplete||t,u=i.easing||function(t,e,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+e},f="startValue"in i?i.startValue:0,d="endValue"in i?i.endValue:100,g=i.byValue||d-f;i.onStart&&i.onStart(),function t(r){if(c())l(d,1,1);else{var p=(n=r||+new Date)>a?o:n-s,v=p/o,b=u(p,f,g,o),m=Math.abs((b-f)/g);h(b,m,v),n>a?i.onComplete&&i.onComplete():e(t)}}(s)})},fabric.util.requestAnimFrame=e}(),function(){function t(t,e,i){var r="rgba("+parseInt(t[0]+i*(e[0]-t[0]),10)+","+parseInt(t[1]+i*(e[1]-t[1]),10)+","+parseInt(t[2]+i*(e[2]-t[2]),10);return r+=","+(t&&e?parseFloat(t[3]+i*(e[3]-t[3])):1),r+=")"}fabric.util.animateColor=function(e,i,r,n){var s=new fabric.Color(e).getSource(),o=new fabric.Color(i).getSource();n=n||{},fabric.util.animate(fabric.util.object.extend(n,{duration:r||500,startValue:s,endValue:o,byValue:o,easing:function(e,i,r,s){return t(i,r,n.colorEasing?n.colorEasing(e,s):1-Math.cos(e/s*(Math.PI/2)))}}))}}(),function(){function t(t,e,i,r){return t<Math.abs(e)?(t=e,r=i/4):r=0===e&&0===t?i/(2*Math.PI)*Math.asin(1):i/(2*Math.PI)*Math.asin(e/t),{a:t,c:e,p:i,s:r}}function e(t,e,i){return t.a*Math.pow(2,10*(e-=1))*Math.sin((e*i-t.s)*(2*Math.PI)/t.p)}function i(t,e,i,n){return i-r(n-t,0,i,n)+e}function r(t,e,i,r){return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e}fabric.util.ease={easeInQuad:function(t,e,i,r){return i*(t/=r)*t+e},easeOutQuad:function(t,e,i,r){return-i*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,i,r){return i*(t/=r)*t*t+e},easeOutCubic:function(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,r){return i*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,i,r){return-i*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,r){return i*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,i,r){return i*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,i,r){return i*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,i,r){return-i/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,i,r){return 0===t?e:i*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,i,r){return t===r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,i,r){return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,i,r){return-i*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,i,r){return i*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,i,r){return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(i,r,n,s){var o=0,a=n;return 0===i?r:1==(i/=s)?r+n:(o||(o=.3*s),-e(t(a,n,o,1.70158),i,s)+r)},easeOutElastic:function(e,i,r,n){var s=0,o=r;if(0===e)return i;if(1==(e/=n))return i+r;s||(s=.3*n);var a=t(o,r,s,1.70158);return a.a*Math.pow(2,-10*e)*Math.sin((e*n-a.s)*(2*Math.PI)/a.p)+a.c+i},easeInOutElastic:function(i,r,n,s){var o=0,a=n;if(0===i)return r;if(2==(i/=s/2))return r+n;o||(o=s*(.3*1.5));var h=t(a,n,o,1.70158);return i<1?-.5*e(h,i,s)+r:h.a*Math.pow(2,-10*(i-=1))*Math.sin((i*s-h.s)*(2*Math.PI)/h.p)*.5+h.c+r},easeInBack:function(t,e,i,r,n){return void 0===n&&(n=1.70158),i*(t/=r)*t*((n+1)*t-n)+e},easeOutBack:function(t,e,i,r,n){return void 0===n&&(n=1.70158),i*((t=t/r-1)*t*((n+1)*t+n)+1)+e},easeInOutBack:function(t,e,i,r,n){return void 0===n&&(n=1.70158),(t/=r/2)<1?i/2*(t*t*((1+(n*=1.525))*t-n))+e:i/2*((t-=2)*t*((1+(n*=1.525))*t+n)+2)+e},easeInBounce:i,easeOutBounce:r,easeInOutBounce:function(t,e,n,s){return t<s/2?.5*i(2*t,0,n,s)+e:.5*r(2*t-s,0,n,s)+.5*n+e}}}(),function(t){"use strict";function e(t){return t in O?O[t]:t}function i(t,e,i,r){var n,s="[object Array]"===Object.prototype.toString.call(e);return"fill"!==t&&"stroke"!==t||"none"!==e?"strokeDashArray"===t?e="none"===e?null:e.replace(/,/g," ").split(/\s+/).map(function(t){return parseFloat(t)}):"transformMatrix"===t?e=i&&i.transformMatrix?y(i.transformMatrix,p.parseTransformAttribute(e)):p.parseTransformAttribute(e):"visible"===t?(e="none"!==e&&"hidden"!==e,i&&!1===i.visible&&(e=!1)):"opacity"===t?(e=parseFloat(e),i&&void 0!==i.opacity&&(e*=i.opacity)):"originX"===t?e="start"===e?"left":"end"===e?"right":"center":n=s?e.map(_):_(e,r):e="",!s&&isNaN(n)?e:n}function r(t){for(var e in T)if(void 0!==t[T[e]]&&""!==t[e]){if(void 0===t[e]){if(!p.Object.prototype[e])continue;t[e]=p.Object.prototype[e]}if(0!==t[e].indexOf("url(")){var i=new p.Color(t[e]);t[e]=i.setAlpha(m(i.getAlpha()*t[T[e]],2)).toRgba()}}return t}function n(t,e){for(var i,r,n=[],s=0;s<e.length;s++)i=e[s],r=t.getElementsByTagName(i),n=n.concat(Array.prototype.slice.call(r));return n}function s(t,e){var i,r;t.replace(/;\s*$/,"").split(";").forEach(function(t){var n=t.split(":");i=n[0].trim().toLowerCase(),r=n[1].trim(),e[i]=r})}function o(t,e){var i,r;for(var n in t)void 0!==t[n]&&(i=n.toLowerCase(),r=t[n],e[i]=r)}function a(t,e){var i={};for(var r in p.cssRules[e])if(h(t,r.split(" ")))for(var n in p.cssRules[e][r])i[n]=p.cssRules[e][r][n];return i}function h(t,e){var i,r=!0;return(i=l(t,e.pop()))&&e.length&&(r=c(t,e)),i&&r&&0===e.length}function c(t,e){for(var i,r=!0;t.parentNode&&1===t.parentNode.nodeType&&e.length;)r&&(i=e.pop()),r=l(t=t.parentNode,i);return 0===e.length}function l(t,e){var i,r=t.nodeName,n=t.getAttribute("class"),s=t.getAttribute("id");if(i=new RegExp("^"+r,"i"),e=e.replace(i,""),s&&e.length&&(i=new RegExp("#"+s+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"")),n&&e.length)for(var o=(n=n.split(" ")).length;o--;)i=new RegExp("\\."+n[o]+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"");return 0===e.length}function u(t,e){var i;if(t.getElementById&&(i=t.getElementById(e)),i)return i;var r,n,s=t.getElementsByTagName("*");for(n=0;n<s.length;n++)if(r=s[n],e===r.getAttribute("id"))return r}function f(t){for(var e=n(t,["use","svg:use"]),i=0;e.length&&i<e.length;){var r,s,o,a,h=e[i],c=h.getAttribute("xlink:href").substr(1),l=h.getAttribute("x")||0,f=h.getAttribute("y")||0,g=u(t,c).cloneNode(!0),p=(g.getAttribute("transform")||"")+" translate("+l+", "+f+")",v=e.length;if(d(g),/^svg$/i.test(g.nodeName)){var b=g.ownerDocument.createElement("g");for(s=0,a=(o=g.attributes).length;s<a;s++)r=o.item(s),b.setAttribute(r.nodeName,r.nodeValue);for(;g.firstChild;)b.appendChild(g.firstChild);g=b}for(s=0,a=(o=h.attributes).length;s<a;s++)"x"!==(r=o.item(s)).nodeName&&"y"!==r.nodeName&&"xlink:href"!==r.nodeName&&("transform"===r.nodeName?p=r.nodeValue+" "+p:g.setAttribute(r.nodeName,r.nodeValue));g.setAttribute("transform",p),g.setAttribute("instantiated_by_use","1"),g.removeAttribute("id"),h.parentNode.replaceChild(g,h),e.length===v&&i++}}function d(t){var e,i,r,n,s=t.getAttribute("viewBox"),o=1,a=1,h=0,c=0,l=t.getAttribute("width"),u=t.getAttribute("height"),f=t.getAttribute("x")||0,d=t.getAttribute("y")||0,g=t.getAttribute("preserveAspectRatio")||"",v=!s||!C.test(t.nodeName)||!(s=s.match(j)),b=!l||!u||"100%"===l||"100%"===u,m=v&&b,y={},x="";if(y.width=0,y.height=0,y.toBeParsed=m,m)return y;if(v)return y.width=_(l),y.height=_(u),y;if(h=-parseFloat(s[1]),c=-parseFloat(s[2]),e=parseFloat(s[3]),i=parseFloat(s[4]),b?(y.width=e,y.height=i):(y.width=_(l),y.height=_(u),o=y.width/e,a=y.height/i),"none"!==(g=p.util.parsePreserveAspectRatioAttribute(g)).alignX&&(a=o=o>a?a:o),1===o&&1===a&&0===h&&0===c&&0===f&&0===d)return y;if((f||d)&&(x=" translate("+_(f)+" "+_(d)+") "),r=x+" matrix("+o+" 0 0 "+a+" "+h*o+" "+c*a+") ","svg"===t.nodeName){for(n=t.ownerDocument.createElement("g");t.firstChild;)n.appendChild(t.firstChild);t.appendChild(n)}else r=(n=t).getAttribute("transform")+r;return n.setAttribute("transform",r),y}function g(t,e){for(;t&&(t=t.parentNode);)if(t.nodeName&&e.test(t.nodeName.replace("svg:",""))&&!t.getAttribute("instantiated_by_use"))return!0;return!1}var p=t.fabric||(t.fabric={}),v=p.util.object.extend,b=p.util.object.clone,m=p.util.toFixed,_=p.util.parseUnit,y=p.util.multiplyTransformMatrices,x=/^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/i,C=/^(symbol|image|marker|pattern|view|svg)$/i,S=/^(?:pattern|defs|symbol|metadata|clipPath|mask)$/i,w=/^(symbol|g|a|svg)$/i,O={cx:"left",x:"left",r:"radius",cy:"top",y:"top",display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","stroke-dasharray":"strokeDashArray","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"originX",opacity:"opacity"},T={stroke:"strokeOpacity",fill:"fillOpacity"};p.cssRules={},p.gradientDefs={},p.parseTransformAttribute=function(){function t(t,e){var i=Math.cos(e[0]),r=Math.sin(e[0]),n=0,s=0;3===e.length&&(n=e[1],s=e[2]),t[0]=i,t[1]=r,t[2]=-r,t[3]=i,t[4]=n-(i*n-r*s),t[5]=s-(r*n+i*s)}function e(t,e){var i=e[0],r=2===e.length?e[1]:e[0];t[0]=i,t[3]=r}function i(t,e,i){t[i]=Math.tan(p.util.degreesToRadians(e[0]))}function r(t,e){t[4]=e[0],2===e.length&&(t[5]=e[1])}var n=[1,0,0,1,0,0],s=p.reNum,o="(?:\\s+,?\\s*|,\\s*)",a="(?:"+("(?:(matrix)\\s*\\(\\s*("+s+")"+o+"("+s+")"+o+"("+s+")"+o+"("+s+")"+o+"("+s+")"+o+"("+s+")\\s*\\))")+"|"+("(?:(translate)\\s*\\(\\s*("+s+")(?:"+o+"("+s+"))?\\s*\\))")+"|"+("(?:(scale)\\s*\\(\\s*("+s+")(?:"+o+"("+s+"))?\\s*\\))")+"|"+("(?:(rotate)\\s*\\(\\s*("+s+")(?:"+o+"("+s+")"+o+"("+s+"))?\\s*\\))")+"|"+("(?:(skewX)\\s*\\(\\s*("+s+")\\s*\\))")+"|"+("(?:(skewY)\\s*\\(\\s*("+s+")\\s*\\))")+")",h="^\\s*(?:"+("(?:"+a+"(?:"+o+"*"+a+")*)")+"?)\\s*$",c=new RegExp(h),l=new RegExp(a,"g");return function(s){var o=n.concat(),h=[];if(!s||s&&!c.test(s))return o;s.replace(l,function(s){var c=new RegExp(a).exec(s).filter(function(t){return!!t}),l=c[1],u=c.slice(2).map(parseFloat);switch(l){case"translate":r(o,u);break;case"rotate":u[0]=p.util.degreesToRadians(u[0]),t(o,u);break;case"scale":e(o,u);break;case"skewX":i(o,u,2);break;case"skewY":i(o,u,1);break;case"matrix":o=u}h.push(o.concat()),o=n.concat()});for(var u=h[0];h.length>1;)h.shift(),u=p.util.multiplyTransformMatrices(u,h[0]);return u}}();var j=new RegExp("^\\s*("+p.reNum+"+)\\s*,?\\s*("+p.reNum+"+)\\s*,?\\s*("+p.reNum+"+)\\s*,?\\s*("+p.reNum+"+)\\s*$");p.parseSVGDocument=function(t,e,i,r){if(t){f(t);var n=p.Object.__uid++,s=d(t),o=p.util.toArray(t.getElementsByTagName("*"));if(s.crossOrigin=r&&r.crossOrigin,s.svgUid=n,0===o.length&&p.isLikelyNode){for(var a=[],h=0,c=(o=t.selectNodes('//*[name(.)!="svg"]')).length;h<c;h++)a[h]=o[h];o=a}var l=o.filter(function(t){return d(t),x.test(t.nodeName.replace("svg:",""))&&!g(t,S)});!l||l&&!l.length?e&&e([],{}):(p.gradientDefs[n]=p.getGradientDefs(t),p.cssRules[n]=p.getCSSRules(t),p.parseElements(l,function(t){e&&e(t,s)},b(s),i,r))}};var k=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+p.reNum+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+p.reNum+"))?\\s+(.*)");v(p,{parseFontDeclaration:function(t,e){var i=t.match(k);if(i){var r=i[1],n=i[3],s=i[4],o=i[5],a=i[6];r&&(e.fontStyle=r),n&&(e.fontWeight=isNaN(parseFloat(n))?n:parseFloat(n)),s&&(e.fontSize=_(s)),a&&(e.fontFamily=a),o&&(e.lineHeight="normal"===o?1:o)}},getGradientDefs:function(t){var e,i,r,s=n(t,["linearGradient","radialGradient","svg:linearGradient","svg:radialGradient"]),o=0,a={},h={};for(o=s.length;o--;)r=(e=s[o]).getAttribute("xlink:href"),i=e.getAttribute("id"),r&&(h[i]=r.substr(1)),a[i]=e;for(i in h){var c=a[h[i]].cloneNode(!0);for(e=a[i];c.firstChild;)e.appendChild(c.firstChild)}return a},parseAttributes:function(t,n,s){if(t){var o,h,c={};void 0===s&&(s=t.getAttribute("svgUid")),t.parentNode&&w.test(t.parentNode.nodeName)&&(c=p.parseAttributes(t.parentNode,n,s)),h=c&&c.fontSize||t.getAttribute("font-size")||p.Text.DEFAULT_SVG_FONT_SIZE;var l=n.reduce(function(e,i){return(o=t.getAttribute(i))&&(e[i]=o),e},{});l=v(l,v(a(t,s),p.parseStyleAttribute(t)));var u,f,d={};for(var g in l)f=i(u=e(g),l[g],c,h),d[u]=f;d&&d.font&&p.parseFontDeclaration(d.font,d);var b=v(c,d);return w.test(t.nodeName)?b:r(b)}},parseElements:function(t,e,i,r,n){new p.ElementsParser(t,e,i,r,n).parse()},parseStyleAttribute:function(t){var e={},i=t.getAttribute("style");return i?("string"==typeof i?s(i,e):o(i,e),e):e},parsePointsAttribute:function(t){if(!t)return null;var e,i,r=[];for(e=0,i=(t=(t=t.replace(/,/g," ").trim()).split(/\s+/)).length;e<i;e+=2)r.push({x:parseFloat(t[e]),y:parseFloat(t[e+1])});return r},getCSSRules:function(t){for(var e=t.getElementsByTagName("style"),i={},r=0,n=e.length;r<n;r++){var s=e[r].textContent||e[r].text;""!==(s=s.replace(/\/\*[\s\S]*?\*\//g,"")).trim()&&s.match(/[^{]*\{[\s\S]*?\}/g).map(function(t){return t.trim()}).forEach(function(t){for(var e=t.match(/([\s\S]*?)\s*\{([^}]*)\}/),r={},n=e[2].trim().replace(/;$/,"").split(/\s*;\s*/),s=0,o=n.length;s<o;s++){var a=n[s].split(/\s*:\s*/),h=a[0],c=a[1];r[h]=c}(t=e[1]).split(",").forEach(function(t){""!==(t=t.replace(/^svg/i,"").trim())&&(i[t]?p.util.object.extend(i[t],r):i[t]=p.util.object.clone(r))})})}return i},loadSVGFromURL:function(t,e,i,r){t=t.replace(/^\n\s*/,"").trim(),new p.util.request(t,{method:"get",onComplete:function(t){var n=t.responseXML;n&&!n.documentElement&&p.window.ActiveXObject&&t.responseText&&((n=new ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,""))),n&&n.documentElement||e&&e(null),p.parseSVGDocument(n.documentElement,function(t,i){e&&e(t,i)},i,r)}})},loadSVGFromString:function(t,e,i,r){t=t.trim();var n;if("undefined"!=typeof DOMParser){var s=new DOMParser;s&&s.parseFromString&&(n=s.parseFromString(t,"text/xml"))}else p.window.ActiveXObject&&((n=new ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,"")));p.parseSVGDocument(n.documentElement,function(t,i){e(t,i)},i,r)}})}("undefined"!=typeof exports?exports:this),fabric.ElementsParser=function(t,e,i,r,n){this.elements=t,this.callback=e,this.options=i,this.reviver=r,this.svgUid=i&&i.svgUid||0,this.parsingOptions=n},fabric.ElementsParser.prototype.parse=function(){this.instances=new Array(this.elements.length),this.numElements=this.elements.length,this.createObjects()},fabric.ElementsParser.prototype.createObjects=function(){for(var t=0,e=this.elements.length;t<e;t++)this.elements[t].setAttribute("svgUid",this.svgUid),function(t,e){setTimeout(function(){t.createObject(t.elements[e],e)},0)}(this,t)},fabric.ElementsParser.prototype.createObject=function(t,e){var i=fabric[fabric.util.string.capitalize(t.tagName.replace("svg:",""))];if(i&&i.fromElement)try{this._createObject(i,t,e)}catch(t){fabric.log(t)}else this.checkIfDone()},fabric.ElementsParser.prototype._createObject=function(t,e,i){if(t.async)t.fromElement(e,this.createCallback(i,e),this.options);else{var r=t.fromElement(e,this.options);this.resolveGradient(r,"fill"),this.resolveGradient(r,"stroke"),this.reviver&&this.reviver(e,r),this.instances[i]=r,this.checkIfDone()}},fabric.ElementsParser.prototype.createCallback=function(t,e){var i=this;return function(r){i.resolveGradient(r,"fill"),i.resolveGradient(r,"stroke"),i.reviver&&i.reviver(e,r),i.instances[t]=r,i.checkIfDone()}},fabric.ElementsParser.prototype.resolveGradient=function(t,e){var i=t.get(e);if(/^url\(/.test(i)){var r=i.slice(5,i.length-1);fabric.gradientDefs[this.svgUid][r]&&t.set(e,fabric.Gradient.fromElement(fabric.gradientDefs[this.svgUid][r],t))}},fabric.ElementsParser.prototype.checkIfDone=function(){0==--this.numElements&&(this.instances=this.instances.filter(function(t){return null!=t}),this.callback(this.instances))},function(t){"use strict";function e(t,e){this.x=t,this.y=e}var i=t.fabric||(t.fabric={});i.Point?i.warn("fabric.Point is already defined"):(i.Point=e,e.prototype={type:"point",constructor:e,add:function(t){return new e(this.x+t.x,this.y+t.y)},addEquals:function(t){return this.x+=t.x,this.y+=t.y,this},scalarAdd:function(t){return new e(this.x+t,this.y+t)},scalarAddEquals:function(t){return this.x+=t,this.y+=t,this},subtract:function(t){return new e(this.x-t.x,this.y-t.y)},subtractEquals:function(t){return this.x-=t.x,this.y-=t.y,this},scalarSubtract:function(t){return new e(this.x-t,this.y-t)},scalarSubtractEquals:function(t){return this.x-=t,this.y-=t,this},multiply:function(t){return new e(this.x*t,this.y*t)},multiplyEquals:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return new e(this.x/t,this.y/t)},divideEquals:function(t){return this.x/=t,this.y/=t,this},eq:function(t){return this.x===t.x&&this.y===t.y},lt:function(t){return this.x<t.x&&this.y<t.y},lte:function(t){return this.x<=t.x&&this.y<=t.y},gt:function(t){return this.x>t.x&&this.y>t.y},gte:function(t){return this.x>=t.x&&this.y>=t.y},lerp:function(t,i){return void 0===i&&(i=.5),i=Math.max(Math.min(1,i),0),new e(this.x+(t.x-this.x)*i,this.y+(t.y-this.y)*i)},distanceFrom:function(t){var e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)},midPointFrom:function(t){return this.lerp(t)},min:function(t){return new e(Math.min(this.x,t.x),Math.min(this.y,t.y))},max:function(t){return new e(Math.max(this.x,t.x),Math.max(this.y,t.y))},toString:function(){return this.x+","+this.y},setXY:function(t,e){return this.x=t,this.y=e,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setFromPoint:function(t){return this.x=t.x,this.y=t.y,this},swap:function(t){var e=this.x,i=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=i},clone:function(){return new e(this.x,this.y)}})}("undefined"!=typeof exports?exports:this),function(t){"use strict";function e(t){this.status=t,this.points=[]}var i=t.fabric||(t.fabric={});i.Intersection?i.warn("fabric.Intersection is already defined"):(i.Intersection=e,i.Intersection.prototype={constructor:e,appendPoint:function(t){return this.points.push(t),this},appendPoints:function(t){return this.points=this.points.concat(t),this}},i.Intersection.intersectLineLine=function(t,r,n,s){var o,a=(s.x-n.x)*(t.y-n.y)-(s.y-n.y)*(t.x-n.x),h=(r.x-t.x)*(t.y-n.y)-(r.y-t.y)*(t.x-n.x),c=(s.y-n.y)*(r.x-t.x)-(s.x-n.x)*(r.y-t.y);if(0!==c){var l=a/c,u=h/c;0<=l&&l<=1&&0<=u&&u<=1?(o=new e("Intersection")).appendPoint(new i.Point(t.x+l*(r.x-t.x),t.y+l*(r.y-t.y))):o=new e}else o=new e(0===a||0===h?"Coincident":"Parallel");return o},i.Intersection.intersectLinePolygon=function(t,i,r){for(var n,s,o,a=new e,h=r.length,c=0;c<h;c++)n=r[c],s=r[(c+1)%h],o=e.intersectLineLine(t,i,n,s),a.appendPoints(o.points);return a.points.length>0&&(a.status="Intersection"),a},i.Intersection.intersectPolygonPolygon=function(t,i){for(var r=new e,n=t.length,s=0;s<n;s++){var o=t[s],a=t[(s+1)%n],h=e.intersectLinePolygon(o,a,i);r.appendPoints(h.points)}return r.points.length>0&&(r.status="Intersection"),r},i.Intersection.intersectPolygonRectangle=function(t,r,n){var s=r.min(n),o=r.max(n),a=new i.Point(o.x,s.y),h=new i.Point(s.x,o.y),c=e.intersectLinePolygon(s,a,t),l=e.intersectLinePolygon(a,o,t),u=e.intersectLinePolygon(o,h,t),f=e.intersectLinePolygon(h,s,t),d=new e;return d.appendPoints(c.points),d.appendPoints(l.points),d.appendPoints(u.points),d.appendPoints(f.points),d.points.length>0&&(d.status="Intersection"),d})}("undefined"!=typeof exports?exports:this),function(t){"use strict";function e(t){t?this._tryParsingColor(t):this.setSource([0,0,0,1])}function i(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}var r=t.fabric||(t.fabric={});r.Color?r.warn("fabric.Color is already defined."):(r.Color=e,r.Color.prototype={_tryParsingColor:function(t){var i;t in e.colorNameMap&&(t=e.colorNameMap[t]),"transparent"===t&&(i=[255,255,255,0]),i||(i=e.sourceFromHex(t)),i||(i=e.sourceFromRgb(t)),i||(i=e.sourceFromHsl(t)),i||(i=[0,0,0,1]),i&&this.setSource(i)},_rgbToHsl:function(t,e,i){t/=255,e/=255,i/=255;var n,s,o,a=r.util.array.max([t,e,i]),h=r.util.array.min([t,e,i]);if(o=(a+h)/2,a===h)n=s=0;else{var c=a-h;switch(s=o>.5?c/(2-a-h):c/(a+h),a){case t:n=(e-i)/c+(e<i?6:0);break;case e:n=(i-t)/c+2;break;case i:n=(t-e)/c+4}n/=6}return[Math.round(360*n),Math.round(100*s),Math.round(100*o)]},getSource:function(){return this._source},setSource:function(t){this._source=t},toRgb:function(){var t=this.getSource();return"rgb("+t[0]+","+t[1]+","+t[2]+")"},toRgba:function(){var t=this.getSource();return"rgba("+t[0]+","+t[1]+","+t[2]+","+t[3]+")"},toHsl:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2]);return"hsl("+e[0]+","+e[1]+"%,"+e[2]+"%)"},toHsla:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2]);return"hsla("+e[0]+","+e[1]+"%,"+e[2]+"%,"+t[3]+")"},toHex:function(){var t,e,i,r=this.getSource();return t=r[0].toString(16),t=1===t.length?"0"+t:t,e=r[1].toString(16),e=1===e.length?"0"+e:e,i=r[2].toString(16),i=1===i.length?"0"+i:i,t.toUpperCase()+e.toUpperCase()+i.toUpperCase()},toHexa:function(){var t;return t=255*this.getSource()[3],t=t.toString(16),t=1===t.length?"0"+t:t,this.toHex()+t.toUpperCase()},getAlpha:function(){return this.getSource()[3]},setAlpha:function(t){var e=this.getSource();return e[3]=t,this.setSource(e),this},toGrayscale:function(){var t=this.getSource(),e=parseInt((.3*t[0]+.59*t[1]+.11*t[2]).toFixed(0),10),i=t[3];return this.setSource([e,e,e,i]),this},toBlackWhite:function(t){var e=this.getSource(),i=(.3*e[0]+.59*e[1]+.11*e[2]).toFixed(0),r=e[3];return t=t||127,i=Number(i)<Number(t)?0:255,this.setSource([i,i,i,r]),this},overlayWith:function(t){t instanceof e||(t=new e(t));for(var i=[],r=this.getAlpha(),n=this.getSource(),s=t.getSource(),o=0;o<3;o++)i.push(Math.round(.5*n[o]+.5*s[o]));return i[3]=r,this.setSource(i),this}},r.Color.reRGBa=/^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/,r.Color.reHSLa=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,r.Color.reHex=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,r.Color.colorNameMap={aqua:"#00FFFF",black:"#000000",blue:"#0000FF",fuchsia:"#FF00FF",gray:"#808080",grey:"#808080",green:"#008000",lime:"#00FF00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#FFA500",purple:"#800080",red:"#FF0000",silver:"#C0C0C0",teal:"#008080",white:"#FFFFFF",yellow:"#FFFF00"},r.Color.fromRgb=function(t){return e.fromSource(e.sourceFromRgb(t))},r.Color.sourceFromRgb=function(t){var i=t.match(e.reRGBa);if(i){var r=parseInt(i[1],10)/(/%$/.test(i[1])?100:1)*(/%$/.test(i[1])?255:1),n=parseInt(i[2],10)/(/%$/.test(i[2])?100:1)*(/%$/.test(i[2])?255:1),s=parseInt(i[3],10)/(/%$/.test(i[3])?100:1)*(/%$/.test(i[3])?255:1);return[parseInt(r,10),parseInt(n,10),parseInt(s,10),i[4]?parseFloat(i[4]):1]}},r.Color.fromRgba=e.fromRgb,r.Color.fromHsl=function(t){return e.fromSource(e.sourceFromHsl(t))},r.Color.sourceFromHsl=function(t){var r=t.match(e.reHSLa);if(r){var n,s,o,a=(parseFloat(r[1])%360+360)%360/360,h=parseFloat(r[2])/(/%$/.test(r[2])?100:1),c=parseFloat(r[3])/(/%$/.test(r[3])?100:1);if(0===h)n=s=o=c;else{var l=c<=.5?c*(h+1):c+h-c*h,u=2*c-l;n=i(u,l,a+1/3),s=i(u,l,a),o=i(u,l,a-1/3)}return[Math.round(255*n),Math.round(255*s),Math.round(255*o),r[4]?parseFloat(r[4]):1]}},r.Color.fromHsla=e.fromHsl,r.Color.fromHex=function(t){return e.fromSource(e.sourceFromHex(t))},r.Color.sourceFromHex=function(t){if(t.match(e.reHex)){var i=t.slice(t.indexOf("#")+1),r=3===i.length||4===i.length,n=8===i.length||4===i.length,s=r?i.charAt(0)+i.charAt(0):i.substring(0,2),o=r?i.charAt(1)+i.charAt(1):i.substring(2,4),a=r?i.charAt(2)+i.charAt(2):i.substring(4,6),h=n?r?i.charAt(3)+i.charAt(3):i.substring(6,8):"FF";return[parseInt(s,16),parseInt(o,16),parseInt(a,16),parseFloat((parseInt(h,16)/255).toFixed(2))]}},r.Color.fromSource=function(t){var i=new e;return i.setSource(t),i})}("undefined"!=typeof exports?exports:this),function(){function t(t){var e,i,r,n=t.getAttribute("style"),s=t.getAttribute("offset")||0;if(s=parseFloat(s)/(/%$/.test(s)?100:1),s=s<0?0:s>1?1:s,n){var o=n.split(/\s*;\s*/);""===o[o.length-1]&&o.pop();for(var a=o.length;a--;){var h=o[a].split(/\s*:\s*/),c=h[0].trim(),l=h[1].trim();"stop-color"===c?e=l:"stop-opacity"===c&&(r=l)}}return e||(e=t.getAttribute("stop-color")||"rgb(0,0,0)"),r||(r=t.getAttribute("stop-opacity")),e=new fabric.Color(e),i=e.getAlpha(),r=isNaN(parseFloat(r))?1:parseFloat(r),r*=i,{offset:s,color:e.toRgb(),opacity:r}}function e(t){return{x1:t.getAttribute("x1")||0,y1:t.getAttribute("y1")||0,x2:t.getAttribute("x2")||"100%",y2:t.getAttribute("y2")||0}}function i(t){return{x1:t.getAttribute("fx")||t.getAttribute("cx")||"50%",y1:t.getAttribute("fy")||t.getAttribute("cy")||"50%",r1:0,x2:t.getAttribute("cx")||"50%",y2:t.getAttribute("cy")||"50%",r2:t.getAttribute("r")||"50%"}}function r(t,e,i){var r,n=0,s=1,o="";for(var a in e)"Infinity"===e[a]?e[a]=1:"-Infinity"===e[a]&&(e[a]=0),r=parseFloat(e[a],10),s="string"==typeof e[a]&&/^\d+%$/.test(e[a])?.01:1,"x1"===a||"x2"===a||"r2"===a?(s*="objectBoundingBox"===i?t.width:1,n="objectBoundingBox"===i?t.left||0:0):"y1"!==a&&"y2"!==a||(s*="objectBoundingBox"===i?t.height:1,n="objectBoundingBox"===i?t.top||0:0),e[a]=r*s+n;if("ellipse"===t.type&&null!==e.r2&&"objectBoundingBox"===i&&t.rx!==t.ry){var h=t.ry/t.rx;o=" scale(1, "+h+")",e.y1&&(e.y1/=h),e.y2&&(e.y2/=h)}return o}var n=fabric.util.object.clone;fabric.Gradient=fabric.util.createClass({offsetX:0,offsetY:0,initialize:function(t){t||(t={});var e={};this.id=fabric.Object.__uid++,this.type=t.type||"linear",e={x1:t.coords.x1||0,y1:t.coords.y1||0,x2:t.coords.x2||0,y2:t.coords.y2||0},"radial"===this.type&&(e.r1=t.coords.r1||0,e.r2=t.coords.r2||0),this.coords=e,this.colorStops=t.colorStops.slice(),t.gradientTransform&&(this.gradientTransform=t.gradientTransform),this.offsetX=t.offsetX||this.offsetX,this.offsetY=t.offsetY||this.offsetY},addColorStop:function(t){for(var e in t){var i=new fabric.Color(t[e]);this.colorStops.push({offset:parseFloat(e),color:i.toRgb(),opacity:i.getAlpha()})}return this},toObject:function(t){var e={type:this.type,coords:this.coords,colorStops:this.colorStops,offsetX:this.offsetX,offsetY:this.offsetY,gradientTransform:this.gradientTransform?this.gradientTransform.concat():this.gradientTransform};return fabric.util.populateWithProperties(this,e,t),e},toSVG:function(t){var e,i,r=n(this.coords,!0),s=n(this.colorStops,!0),o=r.r1>r.r2;if(s.sort(function(t,e){return t.offset-e.offset}),!t.group||"path-group"!==t.group.type)for(var a in r)"x1"===a||"x2"===a?r[a]+=this.offsetX-t.width/2:"y1"!==a&&"y2"!==a||(r[a]+=this.offsetY-t.height/2);if(i='id="SVGID_'+this.id+'" gradientUnits="userSpaceOnUse"',this.gradientTransform&&(i+=' gradientTransform="matrix('+this.gradientTransform.join(" ")+')" '),"linear"===this.type?e=["<linearGradient ",i,' x1="',r.x1,'" y1="',r.y1,'" x2="',r.x2,'" y2="',r.y2,'">\n']:"radial"===this.type&&(e=["<radialGradient ",i,' cx="',o?r.x1:r.x2,'" cy="',o?r.y1:r.y2,'" r="',o?r.r1:r.r2,'" fx="',o?r.x2:r.x1,'" fy="',o?r.y2:r.y1,'">\n']),"radial"===this.type){if(o){(s=s.concat()).reverse();for(l=0;l<s.length;l++)s[l].offset=1-s[l].offset}var h=Math.min(r.r1,r.r2);if(h>0)for(var c=h/Math.max(r.r1,r.r2),l=0;l<s.length;l++)s[l].offset+=c*(1-s[l].offset)}for(l=0;l<s.length;l++){var u=s[l];e.push("<stop ",'offset="',100*u.offset+"%",'" style="stop-color:',u.color,null!==u.opacity?";stop-opacity: "+u.opacity:";",'"/>\n')}return e.push("linear"===this.type?"</linearGradient>\n":"</radialGradient>\n"),e.join("")},toLive:function(t,e){var i,r,n=fabric.util.object.clone(this.coords);if(this.type){if(e.group&&"path-group"===e.group.type)for(r in n)"x1"===r||"x2"===r?n[r]+=-this.offsetX+e.width/2:"y1"!==r&&"y2"!==r||(n[r]+=-this.offsetY+e.height/2);"linear"===this.type?i=t.createLinearGradient(n.x1,n.y1,n.x2,n.y2):"radial"===this.type&&(i=t.createRadialGradient(n.x1,n.y1,n.r1,n.x2,n.y2,n.r2));for(var s=0,o=this.colorStops.length;s<o;s++){var a=this.colorStops[s].color,h=this.colorStops[s].opacity,c=this.colorStops[s].offset;void 0!==h&&(a=new fabric.Color(a).setAlpha(h).toRgba()),i.addColorStop(c,a)}return i}}}),fabric.util.object.extend(fabric.Gradient,{fromElement:function(n,s){var o,a,h,c=n.getElementsByTagName("stop"),l=n.getAttribute("gradientUnits")||"objectBoundingBox",u=n.getAttribute("gradientTransform"),f=[];"linear"===(o="linearGradient"===n.nodeName||"LINEARGRADIENT"===n.nodeName?"linear":"radial")?a=e(n):"radial"===o&&(a=i(n));for(var d=c.length;d--;)f.push(t(c[d]));h=r(s,a,l);var g=new fabric.Gradient({type:o,coords:a,colorStops:f,offsetX:-s.left,offsetY:-s.top});return(u||""!==h)&&(g.gradientTransform=fabric.parseTransformAttribute((u||"")+h)),g},forObject:function(t,e){return e||(e={}),r(t,e.coords,"userSpaceOnUse"),new fabric.Gradient(e)}})}(),function(){"use strict";var t=fabric.util.toFixed;fabric.Pattern=fabric.util.createClass({repeat:"repeat",offsetX:0,offsetY:0,initialize:function(t,e){if(t||(t={}),this.id=fabric.Object.__uid++,this.setOptions(t),!t.source||t.source&&"string"!=typeof t.source)e&&e(this);else if(void 0!==fabric.util.getFunctionBody(t.source))this.source=new Function(fabric.util.getFunctionBody(t.source)),e&&e(this);else{var i=this;this.source=fabric.util.createImage(),fabric.util.loadImage(t.source,function(t){i.source=t,e&&e(i)})}},toObject:function(e){var i,r,n=fabric.Object.NUM_FRACTION_DIGITS;return"function"==typeof this.source?i=String(this.source):"string"==typeof this.source.src?i=this.source.src:"object"==typeof this.source&&this.source.toDataURL&&(i=this.source.toDataURL()),r={type:"pattern",source:i,repeat:this.repeat,offsetX:t(this.offsetX,n),offsetY:t(this.offsetY,n)},fabric.util.populateWithProperties(this,r,e),r},toSVG:function(t){var e="function"==typeof this.source?this.source():this.source,i=e.width/t.width,r=e.height/t.height,n=this.offsetX/t.width,s=this.offsetY/t.height,o="";return"repeat-x"!==this.repeat&&"no-repeat"!==this.repeat||(r=1),"repeat-y"!==this.repeat&&"no-repeat"!==this.repeat||(i=1),e.src?o=e.src:e.toDataURL&&(o=e.toDataURL()),'<pattern id="SVGID_'+this.id+'" x="'+n+'" y="'+s+'" width="'+i+'" height="'+r+'">\n<image x="0" y="0" width="'+e.width+'" height="'+e.height+'" xlink:href="'+o+'"></image>\n</pattern>\n'},setOptions:function(t){for(var e in t)this[e]=t[e]},toLive:function(t){var e="function"==typeof this.source?this.source():this.source;if(!e)return"";if(void 0!==e.src){if(!e.complete)return"";if(0===e.naturalWidth||0===e.naturalHeight)return""}return t.createPattern(e,this.repeat)}})}(),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.toFixed;e.Shadow?e.warn("fabric.Shadow is already defined."):(e.Shadow=e.util.createClass({color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,initialize:function(t){"string"==typeof t&&(t=this._parseShadow(t));for(var i in t)this[i]=t[i];this.id=e.Object.__uid++},_parseShadow:function(t){var i=t.trim(),r=e.Shadow.reOffsetsAndBlur.exec(i)||[];return{color:(i.replace(e.Shadow.reOffsetsAndBlur,"")||"rgb(0,0,0)").trim(),offsetX:parseInt(r[1],10)||0,offsetY:parseInt(r[2],10)||0,blur:parseInt(r[3],10)||0}},toString:function(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")},toSVG:function(t){var r=40,n=40,s=e.Object.NUM_FRACTION_DIGITS,o=e.util.rotateVector({x:this.offsetX,y:this.offsetY},e.util.degreesToRadians(-t.angle));return t.width&&t.height&&(r=100*i((Math.abs(o.x)+this.blur)/t.width,s)+20,n=100*i((Math.abs(o.y)+this.blur)/t.height,s)+20),t.flipX&&(o.x*=-1),t.flipY&&(o.y*=-1),'<filter id="SVGID_'+this.id+'" y="-'+n+'%" height="'+(100+2*n)+'%" x="-'+r+'%" width="'+(100+2*r)+'%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="'+i(this.blur?this.blur/2:0,s)+'"></feGaussianBlur>\n\t<feOffset dx="'+i(o.x,s)+'" dy="'+i(o.y,s)+'" result="oBlur" ></feOffset>\n\t<feFlood flood-color="'+this.color+'"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'},toObject:function(){if(this.includeDefaultValues)return{color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke};var t={},i=e.Shadow.prototype;return["color","blur","offsetX","offsetY","affectStroke"].forEach(function(e){this[e]!==i[e]&&(t[e]=this[e])},this),t}}),e.Shadow.reOffsetsAndBlur=/(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/)}("undefined"!=typeof exports?exports:this),function(){"use strict";if(fabric.StaticCanvas)fabric.warn("fabric.StaticCanvas is already defined.");else{var t=fabric.util.object.extend,e=fabric.util.getElementOffset,i=fabric.util.removeFromArray,r=fabric.util.toFixed,n=fabric.util.transformPoint,s=fabric.util.invertTransform,o=new Error("Could not initialize `canvas` element");fabric.StaticCanvas=fabric.util.createClass(fabric.CommonMethods,{initialize:function(t,e){e||(e={}),this._initStatic(t,e)},backgroundColor:"",backgroundImage:null,overlayColor:"",overlayImage:null,includeDefaultValues:!0,stateful:!1,renderOnAddRemove:!0,clipTo:null,controlsAboveOverlay:!1,allowTouchScrolling:!1,imageSmoothingEnabled:!0,viewportTransform:fabric.iMatrix.concat(),backgroundVpt:!0,overlayVpt:!0,onBeforeScaleRotate:function(){},enableRetinaScaling:!0,vptCoords:{},skipOffscreen:!1,_initStatic:function(t,e){var i=fabric.StaticCanvas.prototype.renderAll.bind(this);this._objects=[],this._createLowerCanvas(t),this._initOptions(e),this._setImageSmoothing(),this.interactive||this._initRetinaScaling(),e.overlayImage&&this.setOverlayImage(e.overlayImage,i),e.backgroundImage&&this.setBackgroundImage(e.backgroundImage,i),e.backgroundColor&&this.setBackgroundColor(e.backgroundColor,i),e.overlayColor&&this.setOverlayColor(e.overlayColor,i),this.calcOffset()},_isRetinaScaling:function(){return 1!==fabric.devicePixelRatio&&this.enableRetinaScaling},getRetinaScaling:function(){return this._isRetinaScaling()?fabric.devicePixelRatio:1},_initRetinaScaling:function(){this._isRetinaScaling()&&(this.lowerCanvasEl.setAttribute("width",this.width*fabric.devicePixelRatio),this.lowerCanvasEl.setAttribute("height",this.height*fabric.devicePixelRatio),this.contextContainer.scale(fabric.devicePixelRatio,fabric.devicePixelRatio))},calcOffset:function(){return this._offset=e(this.lowerCanvasEl),this},setOverlayImage:function(t,e,i){return this.__setBgOverlayImage("overlayImage",t,e,i)},setBackgroundImage:function(t,e,i){return this.__setBgOverlayImage("backgroundImage",t,e,i)},setOverlayColor:function(t,e){return this.__setBgOverlayColor("overlayColor",t,e)},setBackgroundColor:function(t,e){return this.__setBgOverlayColor("backgroundColor",t,e)},_setImageSmoothing:function(){var t=this.getContext();t.imageSmoothingEnabled=t.imageSmoothingEnabled||t.webkitImageSmoothingEnabled||t.mozImageSmoothingEnabled||t.msImageSmoothingEnabled||t.oImageSmoothingEnabled,t.imageSmoothingEnabled=this.imageSmoothingEnabled},__setBgOverlayImage:function(t,e,i,r){return"string"==typeof e?fabric.util.loadImage(e,function(e){e&&(this[t]=new fabric.Image(e,r)),i&&i(e)},this,r&&r.crossOrigin):(r&&e.setOptions(r),this[t]=e,i&&i(e)),this},__setBgOverlayColor:function(t,e,i){return this[t]=e,this._initGradient(e,t),this._initPattern(e,t,i),this},_createCanvasElement:function(t){var e=fabric.util.createCanvasElement(t);if(e.style||(e.style={}),!e)throw o;if(void 0===e.getContext)throw o;return e},_initOptions:function(t){this._setOptions(t),this.width=this.width||parseInt(this.lowerCanvasEl.width,10)||0,this.height=this.height||parseInt(this.lowerCanvasEl.height,10)||0,this.lowerCanvasEl.style&&(this.lowerCanvasEl.width=this.width,this.lowerCanvasEl.height=this.height,this.lowerCanvasEl.style.width=this.width+"px",this.lowerCanvasEl.style.height=this.height+"px",this.viewportTransform=this.viewportTransform.slice())},_createLowerCanvas:function(t){this.lowerCanvasEl=fabric.util.getById(t)||this._createCanvasElement(t),fabric.util.addClass(this.lowerCanvasEl,"lower-canvas"),this.interactive&&this._applyCanvasStyle(this.lowerCanvasEl),this.contextContainer=this.lowerCanvasEl.getContext("2d")},getWidth:function(){return this.width},getHeight:function(){return this.height},setWidth:function(t,e){return this.setDimensions({width:t},e)},setHeight:function(t,e){return this.setDimensions({height:t},e)},setDimensions:function(t,e){var i;e=e||{};for(var r in t)i=t[r],e.cssOnly||(this._setBackstoreDimension(r,t[r]),i+="px"),e.backstoreOnly||this._setCssDimension(r,i);return this._initRetinaScaling(),this._setImageSmoothing(),this.calcOffset(),e.cssOnly||this.renderAll(),this},_setBackstoreDimension:function(t,e){return this.lowerCanvasEl[t]=e,this.upperCanvasEl&&(this.upperCanvasEl[t]=e),this.cacheCanvasEl&&(this.cacheCanvasEl[t]=e),this[t]=e,this},_setCssDimension:function(t,e){return this.lowerCanvasEl.style[t]=e,this.upperCanvasEl&&(this.upperCanvasEl.style[t]=e),this.wrapperEl&&(this.wrapperEl.style[t]=e),this},getZoom:function(){return this.viewportTransform[0]},setViewportTransform:function(t){var e,i=this._activeGroup;this.viewportTransform=t;for(var r=0,n=this._objects.length;r<n;r++)(e=this._objects[r]).group||e.setCoords(!1,!0);return i&&i.setCoords(!1,!0),this.calcViewportBoundaries(),this.renderAll(),this},zoomToPoint:function(t,e){var i=t,r=this.viewportTransform.slice(0);t=n(t,s(this.viewportTransform)),r[0]=e,r[3]=e;var o=n(t,r);return r[4]+=i.x-o.x,r[5]+=i.y-o.y,this.setViewportTransform(r)},setZoom:function(t){return this.zoomToPoint(new fabric.Point(0,0),t),this},absolutePan:function(t){var e=this.viewportTransform.slice(0);return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)},relativePan:function(t){return this.absolutePan(new fabric.Point(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))},getElement:function(){return this.lowerCanvasEl},_onObjectAdded:function(t){this.stateful&&t.setupState(),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added")},_onObjectRemoved:function(t){this.fire("object:removed",{target:t}),t.fire("removed"),delete t.canvas},clearContext:function(t){return t.clearRect(0,0,this.width,this.height),this},getContext:function(){return this.contextContainer},clear:function(){return this._objects.length=0,this.backgroundImage=null,this.overlayImage=null,this.backgroundColor="",this.overlayColor="",this._hasITextHandlers&&(this.off("mouse:up",this._mouseUpITextHandler),this._iTextInstances=null,this._hasITextHandlers=!1),this.clearContext(this.contextContainer),this.fire("canvas:cleared"),this.renderAll(),this},renderAll:function(){var t=this.contextContainer;return this.renderCanvas(t,this._objects),this},calcViewportBoundaries:function(){var t={},e=this.getWidth(),i=this.getHeight(),r=s(this.viewportTransform);return t.tl=n({x:0,y:0},r),t.br=n({x:e,y:i},r),t.tr=new fabric.Point(t.br.x,t.tl.y),t.bl=new fabric.Point(t.tl.x,t.br.y),this.vptCoords=t,t},renderCanvas:function(t,e){this.calcViewportBoundaries(),this.clearContext(t),this.fire("before:render"),this.clipTo&&fabric.util.clipContext(this,t),this._renderBackground(t),t.save(),t.transform.apply(t,this.viewportTransform),this._renderObjects(t,e),t.restore(),!this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.clipTo&&t.restore(),this._renderOverlay(t),this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.fire("after:render")},_renderObjects:function(t,e){for(var i=0,r=e.length;i<r;++i)e[i]&&e[i].render(t)},_renderBackgroundOrOverlay:function(t,e){var i=this[e+"Color"];i&&(t.fillStyle=i.toLive?i.toLive(t,this):i,t.fillRect(i.offsetX||0,i.offsetY||0,this.width,this.height)),(i=this[e+"Image"])&&(this[e+"Vpt"]&&(t.save(),t.transform.apply(t,this.viewportTransform)),i.render(t),this[e+"Vpt"]&&t.restore())},_renderBackground:function(t){this._renderBackgroundOrOverlay(t,"background")},_renderOverlay:function(t){this._renderBackgroundOrOverlay(t,"overlay")},getCenter:function(){return{top:this.getHeight()/2,left:this.getWidth()/2}},centerObjectH:function(t){return this._centerObject(t,new fabric.Point(this.getCenter().left,t.getCenterPoint().y))},centerObjectV:function(t){return this._centerObject(t,new fabric.Point(t.getCenterPoint().x,this.getCenter().top))},centerObject:function(t){var e=this.getCenter();return this._centerObject(t,new fabric.Point(e.left,e.top))},viewportCenterObject:function(t){var e=this.getVpCenter();return this._centerObject(t,e)},viewportCenterObjectH:function(t){var e=this.getVpCenter();return this._centerObject(t,new fabric.Point(e.x,t.getCenterPoint().y)),this},viewportCenterObjectV:function(t){var e=this.getVpCenter();return this._centerObject(t,new fabric.Point(t.getCenterPoint().x,e.y))},getVpCenter:function(){var t=this.getCenter(),e=s(this.viewportTransform);return n({x:t.left,y:t.top},e)},_centerObject:function(t,e){return t.setPositionByOrigin(e,"center","center"),this.renderAll(),this},toDatalessJSON:function(t){return this.toDatalessObject(t)},toObject:function(t){return this._toObjectMethod("toObject",t)},toDatalessObject:function(t){return this._toObjectMethod("toDatalessObject",t)},_toObjectMethod:function(e,i){var r={objects:this._toObjects(e,i)};return t(r,this.__serializeBgOverlay(e,i)),fabric.util.populateWithProperties(this,r,i),r},_toObjects:function(t,e){return this.getObjects().filter(function(t){return!t.excludeFromExport}).map(function(i){return this._toObject(i,t,e)},this)},_toObject:function(t,e,i){var r;this.includeDefaultValues||(r=t.includeDefaultValues,t.includeDefaultValues=!1);var n=t[e](i);return this.includeDefaultValues||(t.includeDefaultValues=r),n},__serializeBgOverlay:function(t,e){var i={},r=this.backgroundImage,n=this.overlayImage;return this.backgroundColor&&(i.background=this.backgroundColor.toObject?this.backgroundColor.toObject(e):this.backgroundColor),this.overlayColor&&(i.overlay=this.overlayColor.toObject?this.overlayColor.toObject(e):this.overlayColor),r&&!r.excludeFromExport&&(i.backgroundImage=this._toObject(r,t,e)),n&&!n.excludeFromExport&&(i.overlayImage=this._toObject(n,t,e)),i},svgViewportTransformation:!0,toSVG:function(t,e){t||(t={});var i=[];return this._setSVGPreamble(i,t),this._setSVGHeader(i,t),this._setSVGBgOverlayColor(i,"backgroundColor"),this._setSVGBgOverlayImage(i,"backgroundImage",e),this._setSVGObjects(i,e),this._setSVGBgOverlayColor(i,"overlayColor"),this._setSVGBgOverlayImage(i,"overlayImage",e),i.push("</svg>"),i.join("")},_setSVGPreamble:function(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",'" standalone="no" ?>\n','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')},_setSVGHeader:function(t,e){var i,n=e.width||this.width,s=e.height||this.height,o='viewBox="0 0 '+this.width+" "+this.height+'" ',a=fabric.Object.NUM_FRACTION_DIGITS;e.viewBox?o='viewBox="'+e.viewBox.x+" "+e.viewBox.y+" "+e.viewBox.width+" "+e.viewBox.height+'" ':this.svgViewportTransformation&&(i=this.viewportTransform,o='viewBox="'+r(-i[4]/i[0],a)+" "+r(-i[5]/i[3],a)+" "+r(this.width/i[0],a)+" "+r(this.height/i[3],a)+'" '),t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',s,'" ',o,'xml:space="preserve">\n',"<desc>Created with Fabric.js ",fabric.version,"</desc>\n","<defs>\n",this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),"</defs>\n")},createSVGRefElementsMarkup:function(){var t=this;return["backgroundColor","overlayColor"].map(function(e){var i=t[e];if(i&&i.toLive)return i.toSVG(t,!1)}).join("")},createSVGFontFacesMarkup:function(){for(var t,e,i,r,n,s,o="",a={},h=fabric.fontPaths,c=this.getObjects(),l=0,u=c.length;l<u;l++)if(t=c[l],e=t.fontFamily,-1!==t.type.indexOf("text")&&!a[e]&&h[e]&&(a[e]=!0,t.styles)){i=t.styles;for(n in i){r=i[n];for(s in r)!a[e=r[s].fontFamily]&&h[e]&&(a[e]=!0)}}for(var f in a)o+=["\t\t@font-face {\n","\t\t\tfont-family: '",f,"';\n","\t\t\tsrc: url('",h[f],"');\n","\t\t}\n"].join("");return o&&(o=['\t<style type="text/css">',"<![CDATA[\n",o,"]]>","</style>\n"].join("")),o},_setSVGObjects:function(t,e){for(var i,r=0,n=this.getObjects(),s=n.length;r<s;r++)(i=n[r]).excludeFromExport||this._setSVGObject(t,i,e)},_setSVGObject:function(t,e,i){t.push(e.toSVG(i))},_setSVGBgOverlayImage:function(t,e,i){this[e]&&this[e].toSVG&&t.push(this[e].toSVG(i))},_setSVGBgOverlayColor:function(t,e){var i=this[e];if(i)if(i.toLive){var r=i.repeat;t.push('<rect transform="translate(',this.width/2,",",this.height/2,')"',' x="',i.offsetX-this.width/2,'" y="',i.offsetY-this.height/2,'" ','width="',"repeat-y"===r||"no-repeat"===r?i.source.width:this.width,'" height="',"repeat-x"===r||"no-repeat"===r?i.source.height:this.height,'" fill="url(#SVGID_'+i.id+')"',"></rect>\n")}else t.push('<rect x="0" y="0" ','width="',this.width,'" height="',this.height,'" fill="',this[e],'"',"></rect>\n")},sendToBack:function(t){if(!t)return this;var e,r,n,s=this._activeGroup;if(t===s)for(e=(n=s._objects).length;e--;)r=n[e],i(this._objects,r),this._objects.unshift(r);else i(this._objects,t),this._objects.unshift(t);return this.renderAll&&this.renderAll()},bringToFront:function(t){if(!t)return this;var e,r,n,s=this._activeGroup;if(t===s)for(n=s._objects,e=0;e<n.length;e++)r=n[e],i(this._objects,r),this._objects.push(r);else i(this._objects,t),this._objects.push(t);return this.renderAll&&this.renderAll()},sendBackwards:function(t,e){if(!t)return this;var r,n,s,o,a,h=this._activeGroup,c=0;if(t===h)for(a=h._objects,r=0;r<a.length;r++)n=a[r],(s=this._objects.indexOf(n))>0+c&&(o=s-1,i(this._objects,n),this._objects.splice(o,0,n)),c++;else 0!==(s=this._objects.indexOf(t))&&(o=this._findNewLowerIndex(t,s,e),i(this._objects,t),this._objects.splice(o,0,t));return this.renderAll&&this.renderAll(),this},_findNewLowerIndex:function(t,e,i){var r;if(i){r=e;for(var n=e-1;n>=0;--n)if(t.intersectsWithObject(this._objects[n])||t.isContainedWithinObject(this._objects[n])||this._objects[n].isContainedWithinObject(t)){r=n;break}}else r=e-1;return r},bringForward:function(t,e){if(!t)return this;var r,n,s,o,a,h=this._activeGroup,c=0;if(t===h)for(r=(a=h._objects).length;r--;)n=a[r],(s=this._objects.indexOf(n))<this._objects.length-1-c&&(o=s+1,i(this._objects,n),this._objects.splice(o,0,n)),c++;else(s=this._objects.indexOf(t))!==this._objects.length-1&&(o=this._findNewUpperIndex(t,s,e),i(this._objects,t),this._objects.splice(o,0,t));return this.renderAll&&this.renderAll(),this},_findNewUpperIndex:function(t,e,i){var r;if(i){r=e;for(var n=e+1;n<this._objects.length;++n)if(t.intersectsWithObject(this._objects[n])||t.isContainedWithinObject(this._objects[n])||this._objects[n].isContainedWithinObject(t)){r=n;break}}else r=e+1;return r},moveTo:function(t,e){return i(this._objects,t),this._objects.splice(e,0,t),this.renderAll&&this.renderAll()},dispose:function(){return this.clear(),this},toString:function(){return"#<fabric.Canvas ("+this.complexity()+"): { objects: "+this.getObjects().length+" }>"}}),t(fabric.StaticCanvas.prototype,fabric.Observable),t(fabric.StaticCanvas.prototype,fabric.Collection),t(fabric.StaticCanvas.prototype,fabric.DataURLExporter),t(fabric.StaticCanvas,{EMPTY_JSON:'{"objects": [], "background": "white"}',supports:function(t){var e=fabric.util.createCanvasElement();if(!e||!e.getContext)return null;var i=e.getContext("2d");if(!i)return null;switch(t){case"getImageData":return void 0!==i.getImageData;case"setLineDash":return void 0!==i.setLineDash;case"toDataURL":return void 0!==e.toDataURL;case"toDataURLWithQuality":try{return e.toDataURL("image/jpeg",0),!0}catch(t){}return!1;default:return null}}}),fabric.StaticCanvas.prototype.toJSON=fabric.StaticCanvas.prototype.toObject}}(),fabric.BaseBrush=fabric.util.createClass({color:"rgb(0, 0, 0)",width:1,shadow:null,strokeLineCap:"round",strokeLineJoin:"round",strokeDashArray:null,setShadow:function(t){return this.shadow=new fabric.Shadow(t),this},_setBrushStyles:function(){var t=this.canvas.contextTop;t.strokeStyle=this.color,t.lineWidth=this.width,t.lineCap=this.strokeLineCap,t.lineJoin=this.strokeLineJoin,this.strokeDashArray&&fabric.StaticCanvas.supports("setLineDash")&&t.setLineDash(this.strokeDashArray)},_setShadow:function(){if(this.shadow){var t=this.canvas.contextTop,e=this.canvas.getZoom();t.shadowColor=this.shadow.color,t.shadowBlur=this.shadow.blur*e,t.shadowOffsetX=this.shadow.offsetX*e,t.shadowOffsetY=this.shadow.offsetY*e}},_resetShadow:function(){var t=this.canvas.contextTop;t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0}}),fabric.PencilBrush=fabric.util.createClass(fabric.BaseBrush,{initialize:function(t){this.canvas=t,this._points=[]},onMouseDown:function(t){this._prepareForDrawing(t),this._captureDrawingPath(t),this._render()},onMouseMove:function(t){this._captureDrawingPath(t),this.canvas.clearContext(this.canvas.contextTop),this._render()},onMouseUp:function(){this._finalizeAndAddPath()},_prepareForDrawing:function(t){var e=new fabric.Point(t.x,t.y);this._reset(),this._addPoint(e),this.canvas.contextTop.moveTo(e.x,e.y)},_addPoint:function(t){this._points.push(t)},_reset:function(){this._points.length=0,this._setBrushStyles(),this._setShadow()},_captureDrawingPath:function(t){var e=new fabric.Point(t.x,t.y);this._addPoint(e)},_render:function(){var t,e,i=this.canvas.contextTop,r=this.canvas.viewportTransform,n=this._points[0],s=this._points[1];if(i.save(),i.transform(r[0],r[1],r[2],r[3],r[4],r[5]),i.beginPath(),2===this._points.length&&n.x===s.x&&n.y===s.y){var o=this.width/1e3;n=new fabric.Point(n.x,n.y),s=new fabric.Point(s.x,s.y),n.x-=o,s.x+=o}for(i.moveTo(n.x,n.y),t=1,e=this._points.length;t<e;t++){var a=n.midPointFrom(s);i.quadraticCurveTo(n.x,n.y,a.x,a.y),n=this._points[t],s=this._points[t+1]}i.lineTo(n.x,n.y),i.stroke(),i.restore()},convertPointsToSVGPath:function(t){var e,i=[],r=this.width/1e3,n=new fabric.Point(t[0].x,t[0].y),s=new fabric.Point(t[1].x,t[1].y),o=t.length;for(i.push("M ",n.x-r," ",n.y," "),e=1;e<o;e++){if(!n.eq(s)){var a=n.midPointFrom(s);i.push("Q ",n.x," ",n.y," ",a.x," ",a.y," ")}n=t[e],e+1<t.length&&(s=t[e+1])}return i.push("L ",n.x+r," ",n.y," "),i},createPath:function(t){var e=new fabric.Path(t,{fill:null,stroke:this.color,strokeWidth:this.width,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeDashArray:this.strokeDashArray}),i=new fabric.Point(e.left+e.width/2,e.top+e.height/2);return i=e.translateToGivenOrigin(i,"center","center",e.originX,e.originY),e.top=i.y,e.left=i.x,this.shadow&&(this.shadow.affectStroke=!0,e.setShadow(this.shadow)),e},_finalizeAndAddPath:function(){this.canvas.contextTop.closePath();var t=this.convertPointsToSVGPath(this._points).join("");if("M 0 0 Q 0 0 0 0 L 0 0"!==t){var e=this.createPath(t);this.canvas.add(e),e.setCoords(),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderAll(),this.canvas.fire("path:created",{path:e})}else this.canvas.renderAll()}}),fabric.CircleBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,initialize:function(t){this.canvas=t,this.points=[]},drawDot:function(t){var e=this.addPoint(t),i=this.canvas.contextTop,r=this.canvas.viewportTransform;i.save(),i.transform(r[0],r[1],r[2],r[3],r[4],r[5]),i.fillStyle=e.fill,i.beginPath(),i.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),i.closePath(),i.fill(),i.restore()},onMouseDown:function(t){this.points.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.drawDot(t)},onMouseMove:function(t){this.drawDot(t)},onMouseUp:function(){var t=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;for(var e=[],i=0,r=this.points.length;i<r;i++){var n=this.points[i],s=new fabric.Circle({radius:n.radius,left:n.x,top:n.y,originX:"center",originY:"center",fill:n.fill});this.shadow&&s.setShadow(this.shadow),e.push(s)}var o=new fabric.Group(e,{originX:"center",originY:"center"});o.canvas=this.canvas,this.canvas.add(o),this.canvas.fire("path:created",{path:o}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=t,this.canvas.renderAll()},addPoint:function(t){var e=new fabric.Point(t.x,t.y),i=fabric.util.getRandomInt(Math.max(0,this.width-20),this.width+20)/2,r=new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0,100)/100).toRgba();return e.radius=i,e.fill=r,this.points.push(e),e}}),fabric.SprayBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,density:20,dotWidth:1,dotWidthVariance:1,randomOpacity:!1,optimizeOverlapping:!0,initialize:function(t){this.canvas=t,this.sprayChunks=[]},onMouseDown:function(t){this.sprayChunks.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.addSprayChunk(t),this.render()},onMouseMove:function(t){this.addSprayChunk(t),this.render()},onMouseUp:function(){var t=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;for(var e=[],i=0,r=this.sprayChunks.length;i<r;i++)for(var n=this.sprayChunks[i],s=0,o=n.length;s<o;s++){var a=new fabric.Rect({width:n[s].width,height:n[s].width,left:n[s].x+1,top:n[s].y+1,originX:"center",originY:"center",fill:this.color});this.shadow&&a.setShadow(this.shadow),e.push(a)}this.optimizeOverlapping&&(e=this._getOptimizedRects(e));var h=new fabric.Group(e,{originX:"center",originY:"center"});h.canvas=this.canvas,this.canvas.add(h),this.canvas.fire("path:created",{path:h}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=t,this.canvas.renderAll()},_getOptimizedRects:function(t){for(var e,i={},r=0,n=t.length;r<n;r++)i[e=t[r].left+""+t[r].top]||(i[e]=t[r]);var s=[];for(e in i)s.push(i[e]);return s},render:function(){var t=this.canvas.contextTop;t.fillStyle=this.color;var e=this.canvas.viewportTransform;t.save(),t.transform(e[0],e[1],e[2],e[3],e[4],e[5]);for(var i=0,r=this.sprayChunkPoints.length;i<r;i++){var n=this.sprayChunkPoints[i];void 0!==n.opacity&&(t.globalAlpha=n.opacity),t.fillRect(n.x,n.y,n.width,n.width)}t.restore()},addSprayChunk:function(t){this.sprayChunkPoints=[];for(var e,i,r,n=this.width/2,s=0;s<this.density;s++){e=fabric.util.getRandomInt(t.x-n,t.x+n),i=fabric.util.getRandomInt(t.y-n,t.y+n),r=this.dotWidthVariance?fabric.util.getRandomInt(Math.max(1,this.dotWidth-this.dotWidthVariance),this.dotWidth+this.dotWidthVariance):this.dotWidth;var o=new fabric.Point(e,i);o.width=r,this.randomOpacity&&(o.opacity=fabric.util.getRandomInt(0,100)/100),this.sprayChunkPoints.push(o)}this.sprayChunks.push(this.sprayChunkPoints)}}),fabric.PatternBrush=fabric.util.createClass(fabric.PencilBrush,{getPatternSrc:function(){var t=fabric.document.createElement("canvas"),e=t.getContext("2d");return t.width=t.height=25,e.fillStyle=this.color,e.beginPath(),e.arc(10,10,10,0,2*Math.PI,!1),e.closePath(),e.fill(),t},getPatternSrcFunction:function(){return String(this.getPatternSrc).replace("this.color",'"'+this.color+'"')},getPattern:function(){return this.canvas.contextTop.createPattern(this.source||this.getPatternSrc(),"repeat")},_setBrushStyles:function(){this.callSuper("_setBrushStyles"),this.canvas.contextTop.strokeStyle=this.getPattern()},createPath:function(t){var e=this.callSuper("createPath",t),i=e._getLeftTopCoords().scalarAdd(e.strokeWidth/2);return e.stroke=new fabric.Pattern({source:this.source||this.getPatternSrcFunction(),offsetX:-i.x,offsetY:-i.y}),e}}),function(){var t=fabric.util.getPointer,e=fabric.util.degreesToRadians,i=fabric.util.radiansToDegrees,r=Math.atan2,n=Math.abs,s=fabric.StaticCanvas.supports("setLineDash");fabric.Canvas=fabric.util.createClass(fabric.StaticCanvas,{initialize:function(t,e){e||(e={}),this._initStatic(t,e),this._initInteractive(),this._createCacheCanvas()},uniScaleTransform:!1,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",interactive:!0,selection:!0,selectionKey:"shiftKey",altSelectionKey:null,selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",rotationCursor:"crosshair",containerClass:"canvas-container",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,isDrawingMode:!1,preserveObjectStacking:!1,snapAngle:0,snapThreshold:null,stopContextMenu:!1,fireRightClick:!1,fireMiddleClick:!1,_initInteractive:function(){this._currentTransform=null,this._groupSelector=null,this._initWrapperElement(),this._createUpperCanvas(),this._initEventListeners(),this._initRetinaScaling(),this.freeDrawingBrush=fabric.PencilBrush&&new fabric.PencilBrush(this),this.calcOffset()},_chooseObjectsToRender:function(){var t,e=this.getActiveGroup(),i=this.getActiveObject(),r=[],n=[];if(!e&&!i||this.preserveObjectStacking)r=this._objects;else{for(var s=0,o=this._objects.length;s<o;s++)t=this._objects[s],e&&e.contains(t)||t===i?n.push(t):r.push(t);e&&(e._set("_objects",n),r.push(e)),i&&r.push(i)}return r},renderAll:function(){!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1);var t=this.contextContainer;return this.renderCanvas(t,this._chooseObjectsToRender()),this},renderTop:function(){var t=this.contextTop;return this.clearContext(t),this.selection&&this._groupSelector&&this._drawSelection(t),this.fire("after:render"),this.contextTopDirty=!0,this},_resetCurrentTransform:function(){var t=this._currentTransform;t.target.set({scaleX:t.original.scaleX,scaleY:t.original.scaleY,skewX:t.original.skewX,skewY:t.original.skewY,left:t.original.left,top:t.original.top}),this._shouldCenterTransform(t.target)?"rotate"===t.action?this._setOriginToCenter(t.target):("center"!==t.originX&&("right"===t.originX?t.mouseXSign=-1:t.mouseXSign=1),"center"!==t.originY&&("bottom"===t.originY?t.mouseYSign=-1:t.mouseYSign=1),t.originX="center",t.originY="center"):(t.originX=t.original.originX,t.originY=t.original.originY)},containsPoint:function(t,e,i){var r,n=i||this.getPointer(t,!0);return r=e.group&&e.group===this.getActiveGroup()?this._normalizePointer(e.group,n):{x:n.x,y:n.y},e.containsPoint(r)||e._findTargetCorner(n)},_normalizePointer:function(t,e){var i=t.calcTransformMatrix(),r=fabric.util.invertTransform(i),n=this.restorePointerVpt(e);return fabric.util.transformPoint(n,r)},isTargetTransparent:function(t,e,i){var r=t.hasBorders,n=t.transparentCorners,s=this.contextCache,o=t.selectionBackgroundColor;t.hasBorders=t.transparentCorners=!1,t.selectionBackgroundColor="",s.save(),s.transform.apply(s,this.viewportTransform),t.render(s),s.restore(),t.active&&t._renderControls(s),t.hasBorders=r,t.transparentCorners=n,t.selectionBackgroundColor=o;var a=fabric.util.isTransparent(s,e,i,this.targetFindTolerance);return this.clearContext(s),a},_shouldClearSelection:function(t,e){var i=this.getActiveGroup(),r=this.getActiveObject();return!e||e&&i&&!i.contains(e)&&i!==e&&!t[this.selectionKey]||e&&!e.evented||e&&!e.selectable&&r&&r!==e},_shouldCenterTransform:function(t){if(t){var e,i=this._currentTransform;return"scale"===i.action||"scaleX"===i.action||"scaleY"===i.action?e=this.centeredScaling||t.centeredScaling:"rotate"===i.action&&(e=this.centeredRotation||t.centeredRotation),e?!i.altKey:i.altKey}},_getOriginFromCorner:function(t,e){var i={x:t.originX,y:t.originY};return"ml"===e||"tl"===e||"bl"===e?i.x="right":"mr"!==e&&"tr"!==e&&"br"!==e||(i.x="left"),"tl"===e||"mt"===e||"tr"===e?i.y="bottom":"bl"!==e&&"mb"!==e&&"br"!==e||(i.y="top"),i},_getActionFromCorner:function(t,e,i){if(!e)return"drag";switch(e){case"mtr":return"rotate";case"ml":case"mr":return i[this.altActionKey]?"skewY":"scaleX";case"mt":case"mb":return i[this.altActionKey]?"skewX":"scaleY";default:return"scale"}},_setupCurrentTransform:function(t,i){if(i){var r=this.getPointer(t),n=i._findTargetCorner(this.getPointer(t,!0)),s=this._getActionFromCorner(i,n,t),o=this._getOriginFromCorner(i,n);this._currentTransform={target:i,action:s,corner:n,scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,offsetX:r.x-i.left,offsetY:r.y-i.top,originX:o.x,originY:o.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,left:i.left,top:i.top,theta:e(i.angle),width:i.width*i.scaleX,mouseXSign:1,mouseYSign:1,shiftKey:t.shiftKey,altKey:t[this.centeredKey]},this._currentTransform.original={left:i.left,top:i.top,scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,originX:o.x,originY:o.y},this._resetCurrentTransform()}},_translateObject:function(t,e){var i=this._currentTransform,r=i.target,n=t-i.offsetX,s=e-i.offsetY,o=!r.get("lockMovementX")&&r.left!==n,a=!r.get("lockMovementY")&&r.top!==s;return o&&r.set("left",n),a&&r.set("top",s),o||a},_changeSkewTransformOrigin:function(t,e,i){var r="originX",n={0:"center"},s=e.target.skewX,o="left",a="right",h="mt"===e.corner||"ml"===e.corner?1:-1,c=1;t=t>0?1:-1,"y"===i&&(s=e.target.skewY,o="top",a="bottom",r="originY"),n[-1]=o,n[1]=a,e.target.flipX&&(c*=-1),e.target.flipY&&(c*=-1),0===s?(e.skewSign=-h*t*c,e[r]=n[-t]):(s=s>0?1:-1,e.skewSign=s,e[r]=n[s*h*c])},_skewObject:function(t,e,i){var r=this._currentTransform,n=r.target,s=!1,o=n.get("lockSkewingX"),a=n.get("lockSkewingY");if(o&&"x"===i||a&&"y"===i)return!1;var h,c,l=n.getCenterPoint(),u=n.toLocalPoint(new fabric.Point(t,e),"center","center")[i],f=n.toLocalPoint(new fabric.Point(r.lastX,r.lastY),"center","center")[i],d=n._getTransformedDimensions();return this._changeSkewTransformOrigin(u-f,r,i),h=n.toLocalPoint(new fabric.Point(t,e),r.originX,r.originY)[i],c=n.translateToOriginPoint(l,r.originX,r.originY),s=this._setObjectSkew(h,r,i,d),r.lastX=t,r.lastY=e,n.setPositionByOrigin(c,r.originX,r.originY),s},_setObjectSkew:function(t,e,i,r){var n,s,o,a,h,c,l,u,f,d=e.target,g=!1,p=e.skewSign;return"x"===i?(a="y",h="Y",c="X",u=0,f=d.skewY):(a="x",h="X",c="Y",u=d.skewX,f=0),o=d._getTransformedDimensions(u,f),(l=2*Math.abs(t)-o[i])<=2?n=0:(n=p*Math.atan(l/d["scale"+c]/(o[a]/d["scale"+h])),n=fabric.util.radiansToDegrees(n)),g=d["skew"+c]!==n,d.set("skew"+c,n),0!==d["skew"+h]&&(s=d._getTransformedDimensions(),n=r[a]/s[a]*d["scale"+h],d.set("scale"+h,n)),g},_scaleObject:function(t,e,i){var r=this._currentTransform,n=r.target,s=n.get("lockScalingX"),o=n.get("lockScalingY"),a=n.get("lockScalingFlip");if(s&&o)return!1;var h=n.translateToOriginPoint(n.getCenterPoint(),r.originX,r.originY),c=n.toLocalPoint(new fabric.Point(t,e),r.originX,r.originY),l=n._getTransformedDimensions(),u=!1;return this._setLocalMouse(c,r),u=this._setObjectScale(c,r,s,o,i,a,l),n.setPositionByOrigin(h,r.originX,r.originY),u},_setObjectScale:function(t,e,i,r,n,s,o){var a,h,c,l,u=e.target,f=!1,d=!1,g=!1;return c=t.x*u.scaleX/o.x,l=t.y*u.scaleY/o.y,a=u.scaleX!==c,h=u.scaleY!==l,s&&c<=0&&c<u.scaleX&&(f=!0),s&&l<=0&&l<u.scaleY&&(d=!0),"equally"!==n||i||r?n?"x"!==n||u.get("lockUniScaling")?"y"!==n||u.get("lockUniScaling")||d||r||u.set("scaleY",l)&&(g=g||h):f||i||u.set("scaleX",c)&&(g=g||a):(f||i||u.set("scaleX",c)&&(g=g||a),d||r||u.set("scaleY",l)&&(g=g||h)):f||d||(g=this._scaleObjectEqually(t,u,e,o)),e.newScaleX=c,e.newScaleY=l,f||d||this._flipObject(e,n),g},_scaleObjectEqually:function(t,e,i,r){var n,s=t.y+t.x,o=r.y*i.original.scaleY/e.scaleY+r.x*i.original.scaleX/e.scaleX,a=t.x/Math.abs(t.x),h=t.y/Math.abs(t.y);return i.newScaleX=a*Math.abs(i.original.scaleX*s/o),i.newScaleY=h*Math.abs(i.original.scaleY*s/o),n=i.newScaleX!==e.scaleX||i.newScaleY!==e.scaleY,e.set("scaleX",i.newScaleX),e.set("scaleY",i.newScaleY),n},_flipObject:function(t,e){t.newScaleX<0&&"y"!==e&&("left"===t.originX?t.originX="right":"right"===t.originX&&(t.originX="left")),t.newScaleY<0&&"x"!==e&&("top"===t.originY?t.originY="bottom":"bottom"===t.originY&&(t.originY="top"))},_setLocalMouse:function(t,e){var i=e.target,r=this.getZoom(),s=i.padding/r;"right"===e.originX?t.x*=-1:"center"===e.originX&&(t.x*=2*e.mouseXSign,t.x<0&&(e.mouseXSign=-e.mouseXSign)),"bottom"===e.originY?t.y*=-1:"center"===e.originY&&(t.y*=2*e.mouseYSign,t.y<0&&(e.mouseYSign=-e.mouseYSign)),n(t.x)>s?t.x<0?t.x+=s:t.x-=s:t.x=0,n(t.y)>s?t.y<0?t.y+=s:t.y-=s:t.y=0},_rotateObject:function(t,e){var n=this._currentTransform;if(n.target.get("lockRotation"))return!1;var s=r(n.ey-n.top,n.ex-n.left),o=r(e-n.top,t-n.left),a=i(o-s+n.theta),h=!0;if(n.target.snapAngle>0){var c=n.target.snapAngle,l=n.target.snapThreshold||c,u=Math.ceil(a/c)*c,f=Math.floor(a/c)*c;Math.abs(a-f)<l?a=f:Math.abs(a-u)<l&&(a=u)}return a<0&&(a=360+a),a%=360,n.target.angle===a?h=!1:n.target.angle=a,h},setCursor:function(t){this.upperCanvasEl.style.cursor=t},_resetObjectTransform:function(t){t.scaleX=1,t.scaleY=1,t.skewX=0,t.skewY=0,t.setAngle(0)},_drawSelection:function(t){var e=this._groupSelector,i=e.left,r=e.top,o=n(i),a=n(r);if(this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(e.ex-(i>0?0:-i),e.ey-(r>0?0:-r),o,a)),this.selectionLineWidth&&this.selectionBorderColor)if(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,this.selectionDashArray.length>1&&!s){var h=e.ex+.5-(i>0?0:o),c=e.ey+.5-(r>0?0:a);t.beginPath(),fabric.util.drawDashedLine(t,h,c,h+o,c,this.selectionDashArray),fabric.util.drawDashedLine(t,h,c+a-1,h+o,c+a-1,this.selectionDashArray),fabric.util.drawDashedLine(t,h,c,h,c+a,this.selectionDashArray),fabric.util.drawDashedLine(t,h+o-1,c,h+o-1,c+a,this.selectionDashArray),t.closePath(),t.stroke()}else fabric.Object.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(e.ex+.5-(i>0?0:o),e.ey+.5-(r>0?0:a),o,a)},findTarget:function(t,e){if(!this.skipTargetFind){var i,r,n=this.getPointer(t,!0),s=this.getActiveGroup(),o=this.getActiveObject();if(this.targets=[],s&&!e&&s===this._searchPossibleTargets([s],n))return this._fireOverOutEvents(s,t),s;if(o&&o._findTargetCorner(n))return this._fireOverOutEvents(o,t),o;if(o&&o===this._searchPossibleTargets([o],n)){if(!this.preserveObjectStacking)return this._fireOverOutEvents(o,t),o;i=o,r=this.targets,this.targets=[]}var a=this._searchPossibleTargets(this._objects,n);return t[this.altSelectionKey]&&a&&i&&a!==i&&(a=i,this.targets=r),this._fireOverOutEvents(a,t),a}},_fireOverOutEvents:function(t,e){var i,r,n=this._hoveredTarget;n!==t&&(i={e:e,target:t,previousTarget:this._hoveredTarget},r={e:e,target:this._hoveredTarget,nextTarget:t},this._hoveredTarget=t),t?n!==t&&(n&&(this.fire("mouse:out",r),n.fire("mouseout",r)),this.fire("mouse:over",i),t.fire("mouseover",i)):n&&(this.fire("mouse:out",r),n.fire("mouseout",r))},_checkTarget:function(t,e){if(e&&e.visible&&e.evented&&this.containsPoint(null,e,t)){if(!this.perPixelTargetFind&&!e.perPixelTargetFind||e.isEditing)return!0;if(!this.isTargetTransparent(e,t.x,t.y))return!0}},_searchPossibleTargets:function(t,e){for(var i,r,n,s=t.length;s--;)if(this._checkTarget(e,t[s])){"group"===(i=t[s]).type&&i.subTargetCheck&&(r=this._normalizePointer(i,e),(n=this._searchPossibleTargets(i._objects,r))&&this.targets.push(n));break}return i},restorePointerVpt:function(t){return fabric.util.transformPoint(t,fabric.util.invertTransform(this.viewportTransform))},getPointer:function(e,i,r){r||(r=this.upperCanvasEl);var n,s=t(e),o=r.getBoundingClientRect(),a=o.width||0,h=o.height||0;return a&&h||("top"in o&&"bottom"in o&&(h=Math.abs(o.top-o.bottom)),"right"in o&&"left"in o&&(a=Math.abs(o.right-o.left))),this.calcOffset(),s.x=s.x-this._offset.left,s.y=s.y-this._offset.top,i||(s=this.restorePointerVpt(s)),n=0===a||0===h?{width:1,height:1}:{width:r.width/a,height:r.height/h},{x:s.x*n.width,y:s.y*n.height}},_createUpperCanvas:function(){var t=this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/,"");this.upperCanvasEl?this.upperCanvasEl.className="":this.upperCanvasEl=this._createCanvasElement(),fabric.util.addClass(this.upperCanvasEl,"upper-canvas "+t),this.wrapperEl.appendChild(this.upperCanvasEl),this._copyCanvasStyle(this.lowerCanvasEl,this.upperCanvasEl),this._applyCanvasStyle(this.upperCanvasEl),this.contextTop=this.upperCanvasEl.getContext("2d")},_createCacheCanvas:function(){this.cacheCanvasEl=this._createCanvasElement(),this.cacheCanvasEl.setAttribute("width",this.width),this.cacheCanvasEl.setAttribute("height",this.height),this.contextCache=this.cacheCanvasEl.getContext("2d")},_initWrapperElement:function(){this.wrapperEl=fabric.util.wrapElement(this.lowerCanvasEl,"div",{class:this.containerClass}),fabric.util.setStyle(this.wrapperEl,{width:this.getWidth()+"px",height:this.getHeight()+"px",position:"relative"}),fabric.util.makeElementUnselectable(this.wrapperEl)},_applyCanvasStyle:function(t){var e=this.getWidth()||t.width,i=this.getHeight()||t.height;fabric.util.setStyle(t,{position:"absolute",width:e+"px",height:i+"px",left:0,top:0,"touch-action":"none"}),t.width=e,t.height=i,fabric.util.makeElementUnselectable(t)},_copyCanvasStyle:function(t,e){e.style.cssText=t.style.cssText},getSelectionContext:function(){return this.contextTop},getSelectionElement:function(){return this.upperCanvasEl},_setActiveObject:function(t){var e=this._activeObject;e&&(e.set("active",!1),t!==e&&e.onDeselect&&"function"==typeof e.onDeselect&&e.onDeselect()),this._activeObject=t,t.set("active",!0)},setActiveObject:function(t,e){var i=this.getActiveObject();return i&&i!==t&&i.fire("deselected",{e:e}),this._setActiveObject(t),this.fire("object:selected",{target:t,e:e}),t.fire("selected",{e:e}),this.renderAll(),this},getActiveObject:function(){return this._activeObject},_onObjectRemoved:function(t){this.getActiveObject()===t&&(this.fire("before:selection:cleared",{target:t}),this._discardActiveObject(),this.fire("selection:cleared",{target:t}),t.fire("deselected")),this._hoveredTarget===t&&(this._hoveredTarget=null),this.callSuper("_onObjectRemoved",t)},_discardActiveObject:function(){var t=this._activeObject;t&&(t.set("active",!1),t.onDeselect&&"function"==typeof t.onDeselect&&t.onDeselect()),this._activeObject=null},discardActiveObject:function(t){var e=this._activeObject;return e&&(this.fire("before:selection:cleared",{target:e,e:t}),this._discardActiveObject(),this.fire("selection:cleared",{e:t}),e.fire("deselected",{e:t})),this},_setActiveGroup:function(t){this._activeGroup=t,t&&t.set("active",!0)},setActiveGroup:function(t,e){return this._setActiveGroup(t),t&&(this.fire("object:selected",{target:t,e:e}),t.fire("selected",{e:e})),this},getActiveGroup:function(){return this._activeGroup},_discardActiveGroup:function(){var t=this.getActiveGroup();t&&t.destroy(),this.setActiveGroup(null)},discardActiveGroup:function(t){var e=this.getActiveGroup();return e&&(this.fire("before:selection:cleared",{e:t,target:e}),this._discardActiveGroup(),this.fire("selection:cleared",{e:t})),this},deactivateAll:function(){for(var t,e=this.getObjects(),i=0,r=e.length;i<r;i++)(t=e[i])&&t.set("active",!1);return this._discardActiveGroup(),this._discardActiveObject(),this},deactivateAllWithDispatch:function(t){for(var e,i=this.getObjects(),r=0,n=i.length;r<n;r++)(e=i[r])&&e.set("active",!1);return this.discardActiveGroup(t),this.discardActiveObject(t),this},dispose:function(){fabric.StaticCanvas.prototype.dispose.call(this);var t=this.wrapperEl;return this.removeListeners(),t.removeChild(this.upperCanvasEl),t.removeChild(this.lowerCanvasEl),delete this.upperCanvasEl,t.parentNode&&t.parentNode.replaceChild(this.lowerCanvasEl,this.wrapperEl),delete this.wrapperEl,this},clear:function(){return this.discardActiveGroup(),this.discardActiveObject(),this.clearContext(this.contextTop),this.callSuper("clear")},drawControls:function(t){var e=this.getActiveGroup();e?e._renderControls(t):this._drawObjectsControls(t)},_drawObjectsControls:function(t){for(var e=0,i=this._objects.length;e<i;++e)this._objects[e]&&this._objects[e].active&&this._objects[e]._renderControls(t)},_toObject:function(t,e,i){var r=this._realizeGroupTransformOnObject(t),n=this.callSuper("_toObject",t,e,i);return this._unwindGroupTransformOnObject(t,r),n},_realizeGroupTransformOnObject:function(t){if(t.group&&t.group===this.getActiveGroup()){var e={};return["angle","flipX","flipY","left","scaleX","scaleY","skewX","skewY","top"].forEach(function(i){e[i]=t[i]}),this.getActiveGroup().realizeTransform(t),e}return null},_unwindGroupTransformOnObject:function(t,e){e&&t.set(e)},_setSVGObject:function(t,e,i){var r;r=this._realizeGroupTransformOnObject(e),this.callSuper("_setSVGObject",t,e,i),this._unwindGroupTransformOnObject(e,r)}});for(var o in fabric.StaticCanvas)"prototype"!==o&&(fabric.Canvas[o]=fabric.StaticCanvas[o]);fabric.isTouchSupported&&(fabric.Canvas.prototype._setCursorFromEvent=function(){}),fabric.Element=fabric.Canvas}(),function(){function t(t,e){return"which"in t?t.which===e:t.button===e-1}var e={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7},i=fabric.util.addListener,r=fabric.util.removeListener;fabric.util.object.extend(fabric.Canvas.prototype,{cursorMap:["n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize","nw-resize"],_initEventListeners:function(){this.removeListeners(),this._bindEvents(),i(fabric.window,"resize",this._onResize),i(this.upperCanvasEl,"mousedown",this._onMouseDown),i(this.upperCanvasEl,"mousemove",this._onMouseMove),i(this.upperCanvasEl,"mouseout",this._onMouseOut),i(this.upperCanvasEl,"mouseenter",this._onMouseEnter),i(this.upperCanvasEl,"wheel",this._onMouseWheel),i(this.upperCanvasEl,"contextmenu",this._onContextMenu),i(this.upperCanvasEl,"touchstart",this._onMouseDown,{passive:!1}),i(this.upperCanvasEl,"touchmove",this._onMouseMove,{passive:!1}),"undefined"!=typeof eventjs&&"add"in eventjs&&(eventjs.add(this.upperCanvasEl,"gesture",this._onGesture),eventjs.add(this.upperCanvasEl,"drag",this._onDrag),eventjs.add(this.upperCanvasEl,"orientation",this._onOrientationChange),eventjs.add(this.upperCanvasEl,"shake",this._onShake),eventjs.add(this.upperCanvasEl,"longpress",this._onLongPress))},_bindEvents:function(){this.eventsBinded||(this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onResize=this._onResize.bind(this),this._onGesture=this._onGesture.bind(this),this._onDrag=this._onDrag.bind(this),this._onShake=this._onShake.bind(this),this._onLongPress=this._onLongPress.bind(this),this._onOrientationChange=this._onOrientationChange.bind(this),this._onMouseWheel=this._onMouseWheel.bind(this),this._onMouseOut=this._onMouseOut.bind(this),this._onMouseEnter=this._onMouseEnter.bind(this),this._onContextMenu=this._onContextMenu.bind(this),this.eventsBinded=!0)},removeListeners:function(){r(fabric.window,"resize",this._onResize),r(this.upperCanvasEl,"mousedown",this._onMouseDown),r(this.upperCanvasEl,"mousemove",this._onMouseMove),r(this.upperCanvasEl,"mouseout",this._onMouseOut),r(this.upperCanvasEl,"mouseenter",this._onMouseEnter),r(this.upperCanvasEl,"wheel",this._onMouseWheel),r(this.upperCanvasEl,"contextmenu",this._onContextMenu),r(this.upperCanvasEl,"touchstart",this._onMouseDown),r(this.upperCanvasEl,"touchmove",this._onMouseMove),"undefined"!=typeof eventjs&&"remove"in eventjs&&(eventjs.remove(this.upperCanvasEl,"gesture",this._onGesture),eventjs.remove(this.upperCanvasEl,"drag",this._onDrag),eventjs.remove(this.upperCanvasEl,"orientation",this._onOrientationChange),eventjs.remove(this.upperCanvasEl,"shake",this._onShake),eventjs.remove(this.upperCanvasEl,"longpress",this._onLongPress))},_onGesture:function(t,e){this.__onTransformGesture&&this.__onTransformGesture(t,e)},_onDrag:function(t,e){this.__onDrag&&this.__onDrag(t,e)},_onMouseWheel:function(t){this.__onMouseWheel(t)},_onMouseOut:function(t){var e=this._hoveredTarget;this.fire("mouse:out",{target:e,e:t}),this._hoveredTarget=null,e&&e.fire("mouseout",{e:t}),this._iTextInstances&&this._iTextInstances.forEach(function(t){t.isEditing&&t.hiddenTextarea.focus()})},_onMouseEnter:function(t){this.findTarget(t)||(this.fire("mouse:over",{target:null,e:t}),this._hoveredTarget=null)},_onOrientationChange:function(t,e){this.__onOrientationChange&&this.__onOrientationChange(t,e)},_onShake:function(t,e){this.__onShake&&this.__onShake(t,e)},_onLongPress:function(t,e){this.__onLongPress&&this.__onLongPress(t,e)},_onContextMenu:function(t){return this.stopContextMenu&&(t.stopPropagation(),t.preventDefault()),!1},_onMouseDown:function(t){this.__onMouseDown(t),i(fabric.document,"touchend",this._onMouseUp,{passive:!1}),i(fabric.document,"touchmove",this._onMouseMove,{passive:!1}),r(this.upperCanvasEl,"mousemove",this._onMouseMove),r(this.upperCanvasEl,"touchmove",this._onMouseMove),"touchstart"===t.type?r(this.upperCanvasEl,"mousedown",this._onMouseDown):(i(fabric.document,"mouseup",this._onMouseUp),i(fabric.document,"mousemove",this._onMouseMove))},_onMouseUp:function(t){if(this.__onMouseUp(t),r(fabric.document,"mouseup",this._onMouseUp),r(fabric.document,"touchend",this._onMouseUp),r(fabric.document,"mousemove",this._onMouseMove),r(fabric.document,"touchmove",this._onMouseMove),i(this.upperCanvasEl,"mousemove",this._onMouseMove),i(this.upperCanvasEl,"touchmove",this._onMouseMove,{passive:!1}),"touchend"===t.type){var e=this;setTimeout(function(){i(e.upperCanvasEl,"mousedown",e._onMouseDown)},400)}},_onMouseMove:function(t){!this.allowTouchScrolling&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)},_onResize:function(){this.calcOffset()},_shouldRender:function(t,e){var i=this.getActiveGroup()||this.getActiveObject();return(!i||!i.isEditing||t!==i)&&!!(t&&(t.isMoving||t!==i)||!t&&i||!t&&!i&&!this._groupSelector||e&&this._previousPointer&&this.selection&&(e.x!==this._previousPointer.x||e.y!==this._previousPointer.y))},__onMouseUp:function(e){var i;if(t(e,3))this.fireRightClick&&this._handleEvent(e,"up",i,3);else if(t(e,2))this.fireMiddleClick&&this._handleEvent(e,"up",i,2);else if(this.isDrawingMode&&this._isCurrentlyDrawing)this._onMouseUpInDrawingMode(e);else{var r=!0,n=this._currentTransform,s=this._groupSelector,o=!s||0===s.left&&0===s.top;n&&(this._finalizeCurrentTransform(e),r=!n.actionPerformed),i=r?this.findTarget(e,!0):n.target;var a=this._shouldRender(i,this.getPointer(e));i||!o?this._maybeGroupObjects(e):(this._groupSelector=null,this._currentTransform=null),i&&(i.isMoving=!1),this._setCursorFromEvent(e,i),this._handleEvent(e,"up",i||null,1,o),i&&(i.__corner=0),a&&this.renderAll()}},_handleEvent:function(t,e,i,r,n){var s=void 0===i?this.findTarget(t):i,o=this.targets||[],a={e:t,target:s,subTargets:o,button:r||1,isClick:n||!1};this.fire("mouse:"+e,a),s&&s.fire("mouse"+e,a);for(var h=0;h<o.length;h++)o[h].fire("mouse"+e,a)},_finalizeCurrentTransform:function(t){var e=this._currentTransform,i=e.target;i._scaling&&(i._scaling=!1),i.setCoords(),this._restoreOriginXY(i),(e.actionPerformed||this.stateful&&i.hasStateChanged())&&(this.fire("object:modified",{target:i,e:t}),i.fire("modified",{e:t}))},_restoreOriginXY:function(t){if(this._previousOriginX&&this._previousOriginY){var e=t.translateToOriginPoint(t.getCenterPoint(),this._previousOriginX,this._previousOriginY);t.originX=this._previousOriginX,t.originY=this._previousOriginY,t.left=e.x,t.top=e.y,this._previousOriginX=null,this._previousOriginY=null}},_onMouseDownInDrawingMode:function(t){this._isCurrentlyDrawing=!0,this.discardActiveObject(t).renderAll(),this.clipTo&&fabric.util.clipContext(this,this.contextTop);var e=this.getPointer(t);this.freeDrawingBrush.onMouseDown(e),this._handleEvent(t,"down")},_onMouseMoveInDrawingMode:function(t){if(this._isCurrentlyDrawing){var e=this.getPointer(t);this.freeDrawingBrush.onMouseMove(e)}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")},_onMouseUpInDrawingMode:function(t){this._isCurrentlyDrawing=!1,this.clipTo&&this.contextTop.restore(),this.freeDrawingBrush.onMouseUp(),this._handleEvent(t,"up")},__onMouseDown:function(e){var i=this.findTarget(e);if(t(e,3))this.fireRightClick&&this._handleEvent(e,"down",i||null,3);else if(t(e,2))this.fireMiddleClick&&this._handleEvent(e,"down",i||null,2);else if(this.isDrawingMode)this._onMouseDownInDrawingMode(e);else if(!this._currentTransform){var r=this.getPointer(e,!0);this._previousPointer=r;var n=this._shouldRender(i,r),s=this._shouldGroup(e,i);if(this._shouldClearSelection(e,i)?this.deactivateAllWithDispatch(e):s&&(this._handleGrouping(e,i),i=this.getActiveGroup()),!this.selection||i&&(i.selectable||i.isEditing)||(this._groupSelector={ex:r.x,ey:r.y,top:0,left:0}),i){!i.selectable||!i.__corner&&s||(this._beforeTransform(e,i),this._setupCurrentTransform(e,i));var o=this.getActiveObject();i!==this.getActiveGroup()&&i!==o&&(this.deactivateAll(),i.selectable&&(o&&o.fire("deselected",{e:e}),this.setActiveObject(i,e)))}this._handleEvent(e,"down",i||null),n&&this.renderAll()}},_beforeTransform:function(t,e){this.stateful&&e.saveState(),e._findTargetCorner(this.getPointer(t))&&this.onBeforeScaleRotate(e)},_setOriginToCenter:function(t){this._previousOriginX=this._currentTransform.target.originX,this._previousOriginY=this._currentTransform.target.originY;var e=t.getCenterPoint();t.originX="center",t.originY="center",t.left=e.x,t.top=e.y,this._currentTransform.left=t.left,this._currentTransform.top=t.top},_setCenterToOrigin:function(t){var e=t.translateToOriginPoint(t.getCenterPoint(),this._previousOriginX,this._previousOriginY);t.originX=this._previousOriginX,t.originY=this._previousOriginY,t.left=e.x,t.top=e.y,this._previousOriginX=null,this._previousOriginY=null},__onMouseMove:function(t){var e,i;if(this.isDrawingMode)this._onMouseMoveInDrawingMode(t);else if(!(void 0!==t.touches&&t.touches.length>1)){var r=this._groupSelector;r?(i=this.getPointer(t,!0),r.left=i.x-r.ex,r.top=i.y-r.ey,this.renderTop()):this._currentTransform?this._transformObject(t):(e=this.findTarget(t),this._setCursorFromEvent(t,e)),this._handleEvent(t,"move",e||null)}},__onMouseWheel:function(t){this._handleEvent(t,"wheel")},_transformObject:function(t){var e=this.getPointer(t),i=this._currentTransform;i.reset=!1,i.target.isMoving=!0,i.shiftKey=t.shiftKey,i.altKey=t[this.centeredKey],this._beforeScaleTransform(t,i),this._performTransformAction(t,i,e),i.actionPerformed&&this.renderAll()},_performTransformAction:function(t,e,i){var r=i.x,n=i.y,s=e.target,o=e.action,a=!1;"rotate"===o?(a=this._rotateObject(r,n))&&this._fire("rotating",s,t):"scale"===o?(a=this._onScale(t,e,r,n))&&this._fire("scaling",s,t):"scaleX"===o?(a=this._scaleObject(r,n,"x"))&&this._fire("scaling",s,t):"scaleY"===o?(a=this._scaleObject(r,n,"y"))&&this._fire("scaling",s,t):"skewX"===o?(a=this._skewObject(r,n,"x"))&&this._fire("skewing",s,t):"skewY"===o?(a=this._skewObject(r,n,"y"))&&this._fire("skewing",s,t):(a=this._translateObject(r,n))&&(this._fire("moving",s,t),this.setCursor(s.moveCursor||this.moveCursor)),e.actionPerformed=e.actionPerformed||a},_fire:function(t,e,i){this.fire("object:"+t,{target:e,e:i}),e.fire(t,{e:i})},_beforeScaleTransform:function(t,e){if("scale"===e.action||"scaleX"===e.action||"scaleY"===e.action){var i=this._shouldCenterTransform(e.target);(i&&("center"!==e.originX||"center"!==e.originY)||!i&&"center"===e.originX&&"center"===e.originY)&&(this._resetCurrentTransform(),e.reset=!0)}},_onScale:function(t,e,i,r){return!t[this.uniScaleKey]&&!this.uniScaleTransform||e.target.get("lockUniScaling")?(e.reset||"scale"!==e.currentAction||this._resetCurrentTransform(),e.currentAction="scaleEqually",this._scaleObject(i,r,"equally")):(e.currentAction="scale",this._scaleObject(i,r))},_setCursorFromEvent:function(t,e){if(!e)return this.setCursor(this.defaultCursor),!1;var i=e.hoverCursor||this.hoverCursor,r=this.getActiveGroup(),n=e._findTargetCorner&&(!r||!r.contains(e))&&e._findTargetCorner(this.getPointer(t,!0));return n?this._setCornerCursor(n,e,t):this.setCursor(i),!0},_setCornerCursor:function(t,i,r){if(t in e)this.setCursor(this._getRotatedCornerCursor(t,i,r));else{if("mtr"!==t||!i.hasRotatingPoint)return this.setCursor(this.defaultCursor),!1;this.setCursor(this.rotationCursor)}},_getRotatedCornerCursor:function(t,i,r){var n=Math.round(i.getAngle()%360/45);return n<0&&(n+=8),n+=e[t],r[this.altActionKey]&&e[t]%2==0&&(n+=2),n%=8,this.cursorMap[n]}})}(),function(){var t=Math.min,e=Math.max;fabric.util.object.extend(fabric.Canvas.prototype,{_shouldGroup:function(t,e){var i=this.getActiveObject();return t[this.selectionKey]&&e&&e.selectable&&(this.getActiveGroup()||i&&i!==e)&&this.selection},_handleGrouping:function(t,e){var i=this.getActiveGroup();(e!==i||(e=this.findTarget(t,!0)))&&(i?this._updateActiveGroup(e,t):this._createActiveGroup(e,t),this._activeGroup&&this._activeGroup.saveCoords())},_updateActiveGroup:function(t,e){var i=this.getActiveGroup();if(i.contains(t)){if(i.removeWithUpdate(t),t.set("active",!1),1===i.size())return this.discardActiveGroup(e),void this.setActiveObject(i.item(0),e)}else i.addWithUpdate(t);this.fire("selection:created",{target:i,e:e}),i.set("active",!0)},_createActiveGroup:function(t,e){if(this._activeObject&&t!==this._activeObject){var i=this._createGroup(t);i.addWithUpdate(),this.setActiveGroup(i,e),this._activeObject=null,this.fire("selection:created",{target:i,e:e})}t.set("active",!0)},_createGroup:function(t){var e=this.getObjects(),i=e.indexOf(this._activeObject)<e.indexOf(t)?[this._activeObject,t]:[t,this._activeObject];return this._activeObject.isEditing&&this._activeObject.exitEditing(),new fabric.Group(i,{canvas:this})},_groupSelectedObjects:function(t){var e=this._collectObjects();1===e.length?this.setActiveObject(e[0],t):e.length>1&&((e=new fabric.Group(e.reverse(),{canvas:this})).addWithUpdate(),this.setActiveGroup(e,t),e.saveCoords(),this.fire("selection:created",{target:e,e:t}),this.renderAll())},_collectObjects:function(){for(var i,r=[],n=this._groupSelector.ex,s=this._groupSelector.ey,o=n+this._groupSelector.left,a=s+this._groupSelector.top,h=new fabric.Point(t(n,o),t(s,a)),c=new fabric.Point(e(n,o),e(s,a)),l=n===o&&s===a,u=this._objects.length;u--&&!((i=this._objects[u])&&i.selectable&&i.visible&&(i.intersectsWithRect(h,c)||i.isContainedWithinRect(h,c)||i.containsPoint(h)||i.containsPoint(c))&&(i.set("active",!0),r.push(i),l)););return r},_maybeGroupObjects:function(t){this.selection&&this._groupSelector&&this._groupSelectedObjects(t);var e=this.getActiveGroup();e&&(e.setObjectsCoords().setCoords(),e.isMoving=!1,this.setCursor(this.defaultCursor)),this._groupSelector=null,this._currentTransform=null}})}(),function(){var t=fabric.StaticCanvas.supports("toDataURLWithQuality");fabric.util.object.extend(fabric.StaticCanvas.prototype,{toDataURL:function(t){t||(t={});var e=t.format||"png",i=t.quality||1,r=t.multiplier||1,n={left:t.left||0,top:t.top||0,width:t.width||0,height:t.height||0};return this.__toDataURLWithMultiplier(e,i,n,r)},__toDataURLWithMultiplier:function(t,e,i,r){var n=this.getWidth(),s=this.getHeight(),o=(i.width||this.getWidth())*r,a=(i.height||this.getHeight())*r,h=this.getZoom()*r,c=this.viewportTransform,l=[h,0,0,h,(c[4]-i.left)*r,(c[5]-i.top)*r],u=this.interactive;this.viewportTransform=l,this.interactive&&(this.interactive=!1),n!==o||s!==a?this.setDimensions({width:o,height:a}):this.renderAll();var f=this.__toDataURL(t,e,i);return u&&(this.interactive=u),this.viewportTransform=c,this.setDimensions({width:n,height:s}),f},__toDataURL:function(e,i){var r=this.contextContainer.canvas;return"jpg"===e&&(e="jpeg"),t?r.toDataURL("image/"+e,i):r.toDataURL("image/"+e)},toDataURLWithMultiplier:function(t,e,i){return this.toDataURL({format:t,multiplier:e,quality:i})}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{loadFromDatalessJSON:function(t,e,i){return this.loadFromJSON(t,e,i)},loadFromJSON:function(t,e,i){if(t){var r="string"==typeof t?JSON.parse(t):fabric.util.object.clone(t),n=this,s=this.renderOnAddRemove;return this.renderOnAddRemove=!1,this._enlivenObjects(r.objects,function(t){n.clear(),n._setBgOverlay(r,function(){t.forEach(function(t,e){n.insertAt(t,e)}),n.renderOnAddRemove=s,delete r.objects,delete r.backgroundImage,delete r.overlayImage,delete r.background,delete r.overlay,n._setOptions(r),n.renderAll(),e&&e()})},i),this}},_setBgOverlay:function(t,e){var i={backgroundColor:!1,overlayColor:!1,backgroundImage:!1,overlayImage:!1};if(t.backgroundImage||t.overlayImage||t.background||t.overlay){var r=function(){i.backgroundImage&&i.overlayImage&&i.backgroundColor&&i.overlayColor&&e&&e()};this.__setBgOverlay("backgroundImage",t.backgroundImage,i,r),this.__setBgOverlay("overlayImage",t.overlayImage,i,r),this.__setBgOverlay("backgroundColor",t.background,i,r),this.__setBgOverlay("overlayColor",t.overlay,i,r)}else e&&e()},__setBgOverlay:function(t,e,i,r){var n=this;if(!e)return i[t]=!0,void(r&&r());"backgroundImage"===t||"overlayImage"===t?fabric.util.enlivenObjects([e],function(e){n[t]=e[0],i[t]=!0,r&&r()}):this["set"+fabric.util.string.capitalize(t,!0)](e,function(){i[t]=!0,r&&r()})},_enlivenObjects:function(t,e,i){t&&0!==t.length?fabric.util.enlivenObjects(t,function(t){e&&e(t)},null,i):e&&e([])},_toDataURL:function(t,e){this.clone(function(i){e(i.toDataURL(t))})},_toDataURLWithMultiplier:function(t,e,i){this.clone(function(r){i(r.toDataURLWithMultiplier(t,e))})},clone:function(t,e){var i=JSON.stringify(this.toJSON(e));this.cloneWithoutData(function(e){e.loadFromJSON(i,function(){t&&t(e)})})},cloneWithoutData:function(t){var e=fabric.document.createElement("canvas");e.width=this.getWidth(),e.height=this.getHeight();var i=new fabric.Canvas(e);i.clipTo=this.clipTo,this.backgroundImage?(i.setBackgroundImage(this.backgroundImage.src,function(){i.renderAll(),t&&t(i)}),i.backgroundImageOpacity=this.backgroundImageOpacity,i.backgroundImageStretch=this.backgroundImageStretch):t&&t(i)}}),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.object.clone,n=e.util.toFixed,s=e.util.string.capitalize,o=e.util.degreesToRadians,a=e.StaticCanvas.supports("setLineDash"),h=!e.isLikelyNode;e.Object||(e.Object=e.util.createClass(e.CommonMethods,{type:"object",originX:"left",originY:"top",top:0,left:0,width:0,height:0,scaleX:1,scaleY:1,flipX:!1,flipY:!1,opacity:1,angle:0,skewX:0,skewY:0,cornerSize:13,transparentCorners:!0,hoverCursor:null,moveCursor:null,padding:0,borderColor:"rgba(102,153,255,0.75)",borderDashArray:null,cornerColor:"rgba(102,153,255,0.5)",cornerStrokeColor:null,cornerStyle:"rect",cornerDashArray:null,centeredScaling:!1,centeredRotation:!0,fill:"rgb(0,0,0)",fillRule:"nonzero",globalCompositeOperation:"source-over",backgroundColor:"",selectionBackgroundColor:"",stroke:null,strokeWidth:1,strokeDashArray:null,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:10,shadow:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,transformMatrix:null,minScaleLimit:.01,selectable:!0,evented:!0,visible:!0,hasControls:!0,hasBorders:!0,hasRotatingPoint:!0,rotatingPointOffset:40,perPixelTargetFind:!1,includeDefaultValues:!0,clipTo:null,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockUniScaling:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,excludeFromExport:!1,objectCaching:h,statefullCache:!1,noScaleCache:!0,dirty:!0,stateProperties:"top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow clipTo visible backgroundColor skewX skewY fillRule".split(" "),cacheProperties:"fill stroke strokeWidth strokeDashArray width height strokeLineCap strokeLineJoin strokeMiterLimit backgroundColor".split(" "),initialize:function(t){(t=t||{})&&this.setOptions(t)},_createCacheCanvas:function(){this._cacheProperties={},this._cacheCanvas=e.document.createElement("canvas"),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas()},_limitCacheSize:function(t){var i=e.perfLimitSizeTotal,r=e.cacheSideLimit,n=t.width,s=t.height,o=n/s,a=e.util.limitDimsByArea(o,i,r),h=e.util.capValue,c=e.maxCacheSideLimit,l=e.minCacheSideLimit,u=h(l,a.x,c),f=h(l,a.y,c);return n>u?(t.zoomX/=n/u,t.width=u):n<l&&(t.width=l),s>f?(t.zoomY/=s/f,t.height=f):s<l&&(t.height=l),t},_getCacheCanvasDimensions:function(){var t=this.canvas&&this.canvas.getZoom()||1,i=this.getObjectScaling(),r=this._getNonTransformedDimensions(),n=this.canvas&&this.canvas._isRetinaScaling()?e.devicePixelRatio:1,s=i.scaleX*t*n,o=i.scaleY*t*n;return{width:r.x*s+2,height:r.y*o+2,zoomX:s,zoomY:o}},_updateCacheCanvas:function(){if(this.noScaleCache&&this.canvas&&this.canvas._currentTransform){var t=this.canvas._currentTransform.action;if(t.slice&&"scale"===t.slice(0,5))return!1}var i=this._limitCacheSize(this._getCacheCanvasDimensions()),r=e.minCacheSideLimit,n=i.width,s=i.height,o=i.zoomX,a=i.zoomY,h=n!==this.cacheWidth||s!==this.cacheHeight,c=this.zoomX!==o||this.zoomY!==a,l=h||c,u=0,f=0,d=!1;if(h){var g=this._cacheCanvas.width,p=this._cacheCanvas.height,v=n>g||s>p,b=(n<.9*g||s<.9*p)&&g>r&&p>r;d=v||b,v&&(u=.1*n&-2,f=.1*s&-2)}return!!l&&(d?(this._cacheCanvas.width=Math.max(Math.ceil(n)+u,r),this._cacheCanvas.height=Math.max(Math.ceil(s)+f,r),this.cacheTranslationX=(n+u)/2,this.cacheTranslationY=(s+f)/2):(this._cacheContext.setTransform(1,0,0,1,0,0),this._cacheContext.clearRect(0,0,this._cacheCanvas.width,this._cacheCanvas.height)),this.cacheWidth=n,this.cacheHeight=s,this._cacheContext.translate(this.cacheTranslationX,this.cacheTranslationY),this._cacheContext.scale(o,a),this.zoomX=o,this.zoomY=a,!0)},setOptions:function(t){this._setOptions(t),this._initGradient(t.fill,"fill"),this._initGradient(t.stroke,"stroke"),this._initClipping(t),this._initPattern(t.fill,"fill"),this._initPattern(t.stroke,"stroke")},transform:function(t,e){this.group&&!this.group._transformDone&&this.group===this.canvas._activeGroup&&this.group.transform(t);var i=e?this._getLeftTopCoords():this.getCenterPoint();t.translate(i.x,i.y),this.angle&&t.rotate(o(this.angle)),t.scale(this.scaleX*(this.flipX?-1:1),this.scaleY*(this.flipY?-1:1)),this.skewX&&t.transform(1,0,Math.tan(o(this.skewX)),1,0,0),this.skewY&&t.transform(1,Math.tan(o(this.skewY)),0,1,0,0)},toObject:function(t){var i=e.Object.NUM_FRACTION_DIGITS,r={type:this.type,originX:this.originX,originY:this.originY,left:n(this.left,i),top:n(this.top,i),width:n(this.width,i),height:n(this.height,i),fill:this.fill&&this.fill.toObject?this.fill.toObject():this.fill,stroke:this.stroke&&this.stroke.toObject?this.stroke.toObject():this.stroke,strokeWidth:n(this.strokeWidth,i),strokeDashArray:this.strokeDashArray?this.strokeDashArray.concat():this.strokeDashArray,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:n(this.strokeMiterLimit,i),scaleX:n(this.scaleX,i),scaleY:n(this.scaleY,i),angle:n(this.getAngle(),i),flipX:this.flipX,flipY:this.flipY,opacity:n(this.opacity,i),shadow:this.shadow&&this.shadow.toObject?this.shadow.toObject():this.shadow,visible:this.visible,clipTo:this.clipTo&&String(this.clipTo),backgroundColor:this.backgroundColor,fillRule:this.fillRule,globalCompositeOperation:this.globalCompositeOperation,transformMatrix:this.transformMatrix?this.transformMatrix.concat():null,skewX:n(this.skewX,i),skewY:n(this.skewY,i)};return e.util.populateWithProperties(this,r,t),this.includeDefaultValues||(r=this._removeDefaultValues(r)),r},toDatalessObject:function(t){return this.toObject(t)},_removeDefaultValues:function(t){var i=e.util.getKlass(t.type).prototype;return i.stateProperties.forEach(function(e){t[e]===i[e]&&delete t[e],"[object Array]"===Object.prototype.toString.call(t[e])&&"[object Array]"===Object.prototype.toString.call(i[e])&&0===t[e].length&&0===i[e].length&&delete t[e]}),t},toString:function(){return"#<fabric."+s(this.type)+">"},getObjectScaling:function(){var t=this.scaleX,e=this.scaleY;if(this.group){var i=this.group.getObjectScaling();t*=i.scaleX,e*=i.scaleY}return{scaleX:t,scaleY:e}},_set:function(t,i){return("scaleX"===t||"scaleY"===t)&&(i=this._constrainScale(i)),"scaleX"===t&&i<0?(this.flipX=!this.flipX,i*=-1):"scaleY"===t&&i<0?(this.flipY=!this.flipY,i*=-1):"shadow"!==t||!i||i instanceof e.Shadow?"dirty"===t&&this.group&&this.group.set("dirty",i):i=new e.Shadow(i),this[t]=i,this.cacheProperties.indexOf(t)>-1&&(this.group&&this.group.set("dirty",!0),this.dirty=!0),this.group&&this.stateProperties.indexOf(t)>-1&&this.group.set("dirty",!0),"width"!==t&&"height"!==t||(this.minScaleLimit=Math.min(.1,1/Math.max(this.width,this.height))),this},setOnGroup:function(){},setSourcePath:function(t){return this.sourcePath=t,this},getViewportTransform:function(){return this.canvas&&this.canvas.viewportTransform?this.canvas.viewportTransform:e.iMatrix.concat()},isNotVisible:function(){return 0===this.opacity||0===this.width&&0===this.height||!this.visible},render:function(t,i){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),i||this.transform(t),this._setOpacity(t),this._setShadow(t),this.transformMatrix&&t.transform.apply(t,this.transformMatrix),this.clipTo&&e.util.clipContext(this,t),this.shouldCache(i)?(this._cacheCanvas||this._createCacheCanvas(),this.isCacheDirty(i)&&(this.statefullCache&&this.saveState({propertySet:"cacheProperties"}),this.drawObject(this._cacheContext,i),this.dirty=!1),this.drawCacheOnCanvas(t)):(this.dirty=!1,this.drawObject(t,i),i&&this.objectCaching&&this.statefullCache&&this.saveState({propertySet:"cacheProperties"})),this.clipTo&&t.restore(),t.restore())},needsItsOwnCache:function(){return!1},shouldCache:function(t){return!t&&this.objectCaching&&(!this.group||this.needsItsOwnCache()||!this.group.isCaching())},willDrawShadow:function(){return!!this.shadow&&(0!==this.shadow.offsetX||0!==this.shadow.offsetY)},drawObject:function(t,e){this._renderBackground(t),this._setStrokeStyles(t),this._setFillStyles(t),this._render(t,e)},drawCacheOnCanvas:function(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)},isCacheDirty:function(t){if(this.isNotVisible())return!1;if(this._cacheCanvas&&!t&&this._updateCacheCanvas())return!0;if(this.dirty||this.statefullCache&&this.hasStateChanged("cacheProperties")){if(this._cacheCanvas&&!t){var e=this.cacheWidth/this.zoomX,i=this.cacheHeight/this.zoomY;this._cacheContext.clearRect(-e/2,-i/2,e,i)}return!0}return!1},_renderBackground:function(t){if(this.backgroundColor){var e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}},_setOpacity:function(t){t.globalAlpha*=this.opacity},_setStrokeStyles:function(t){this.stroke&&(t.lineWidth=this.strokeWidth,t.lineCap=this.strokeLineCap,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,t.strokeStyle=this.stroke.toLive?this.stroke.toLive(t,this):this.stroke)},_setFillStyles:function(t){this.fill&&(t.fillStyle=this.fill.toLive?this.fill.toLive(t,this):this.fill)},_setLineDash:function(t,e,i){e&&(1&e.length&&e.push.apply(e,e),a?t.setLineDash(e):i&&i(t))},_renderControls:function(t){if(this.active&&(!this.group||this.group===this.canvas.getActiveGroup())){var i,r=this.getViewportTransform(),n=this.calcTransformMatrix();n=e.util.multiplyTransformMatrices(r,n),i=e.util.qrDecompose(n),t.save(),t.translate(i.translateX,i.translateY),t.lineWidth=1*this.borderScaleFactor,this.group||(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.group&&this.group===this.canvas.getActiveGroup()?(t.rotate(o(i.angle)),this.drawBordersInGroup(t,i)):(t.rotate(o(this.angle)),this.drawBorders(t)),this.drawControls(t),t.restore()}},_setShadow:function(t){if(this.shadow){var i=this.canvas&&this.canvas.viewportTransform[0]||1,r=this.canvas&&this.canvas.viewportTransform[3]||1,n=this.getObjectScaling();this.canvas&&this.canvas._isRetinaScaling()&&(i*=e.devicePixelRatio,r*=e.devicePixelRatio),t.shadowColor=this.shadow.color,t.shadowBlur=this.shadow.blur*(i+r)*(n.scaleX+n.scaleY)/4,t.shadowOffsetX=this.shadow.offsetX*i*n.scaleX,t.shadowOffsetY=this.shadow.offsetY*r*n.scaleY}},_removeShadow:function(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)},_applyPatternGradientTransform:function(t,e){if(e.toLive){var i=e.gradientTransform||e.patternTransform;i&&t.transform.apply(t,i);var r=-this.width/2+e.offsetX||0,n=-this.height/2+e.offsetY||0;t.translate(r,n)}},_renderFill:function(t){this.fill&&(t.save(),this._applyPatternGradientTransform(t,this.fill),"evenodd"===this.fillRule?t.fill("evenodd"):t.fill(),t.restore())},_renderStroke:function(t){this.stroke&&0!==this.strokeWidth&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray,this._renderDashedStroke),this._applyPatternGradientTransform(t,this.stroke),t.stroke(),t.restore())},clone:function(t,i){return this.constructor.fromObject?this.constructor.fromObject(this.toObject(i),t):new e.Object(this.toObject(i))},cloneAsImage:function(t,i){var r=this.toDataURL(i);return e.util.loadImage(r,function(i){t&&t(new e.Image(i))}),this},toDataURL:function(t){t||(t={});var i=e.util.createCanvasElement(),r=this.getBoundingRect();i.width=r.width,i.height=r.height,e.util.wrapElement(i,"div");var n=new e.StaticCanvas(i,{enableRetinaScaling:t.enableRetinaScaling});"jpg"===t.format&&(t.format="jpeg"),"jpeg"===t.format&&(n.backgroundColor="#fff");var s={active:this.get("active"),left:this.getLeft(),top:this.getTop()};this.set("active",!1),this.setPositionByOrigin(new e.Point(n.getWidth()/2,n.getHeight()/2),"center","center");var o=this.canvas;n.add(this);var a=n.toDataURL(t);return this.set(s).setCoords(),this.canvas=o,n.dispose(),n=null,a},isType:function(t){return this.type===t},complexity:function(){return 1},toJSON:function(t){return this.toObject(t)},setGradient:function(t,i){i||(i={});var r={colorStops:[]};return r.type=i.type||(i.r1||i.r2?"radial":"linear"),r.coords={x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2},(i.r1||i.r2)&&(r.coords.r1=i.r1,r.coords.r2=i.r2),r.gradientTransform=i.gradientTransform,e.Gradient.prototype.addColorStop.call(r,i.colorStops),this.set(t,e.Gradient.forObject(this,r))},setPatternFill:function(t){return this.set("fill",new e.Pattern(t))},setShadow:function(t){return this.set("shadow",t?new e.Shadow(t):null)},setColor:function(t){return this.set("fill",t),this},setAngle:function(t){var e=("center"!==this.originX||"center"!==this.originY)&&this.centeredRotation;return e&&this._setOriginToCenter(),this.set("angle",t),e&&this._resetOrigin(),this},centerH:function(){return this.canvas&&this.canvas.centerObjectH(this),this},viewportCenterH:function(){return this.canvas&&this.canvas.viewportCenterObjectH(this),this},centerV:function(){return this.canvas&&this.canvas.centerObjectV(this),this},viewportCenterV:function(){return this.canvas&&this.canvas.viewportCenterObjectV(this),this},center:function(){return this.canvas&&this.canvas.centerObject(this),this},viewportCenter:function(){return this.canvas&&this.canvas.viewportCenterObject(this),this},remove:function(){return this.canvas&&(this.group&&this.group===this.canvas._activeGroup&&this.group.remove(this),this.canvas.remove(this)),this},getLocalPointer:function(t,i){i=i||this.canvas.getPointer(t);var r=new e.Point(i.x,i.y),n=this._getLeftTopCoords();return this.angle&&(r=e.util.rotatePoint(r,n,o(-this.angle))),{x:r.x-n.x,y:r.y-n.y}},_setupCompositeOperation:function(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}}),e.util.createAccessors(e.Object),e.Object.prototype.rotate=e.Object.prototype.setAngle,i(e.Object.prototype,e.Observable),e.Object.NUM_FRACTION_DIGITS=2,e.Object._fromObject=function(t,i,n,s,o){var a=e[t];if(i=r(i,!0),!s){var h=o?new a(i[o],i):new a(i);return n&&n(h),h}e.util.enlivenPatterns([i.fill,i.stroke],function(t){void 0!==t[0]&&(i.fill=t[0]),void 0!==t[1]&&(i.stroke=t[1]);var e=o?new a(i[o],i):new a(i);n&&n(e)})},e.Object.__uid=0)}("undefined"!=typeof exports?exports:this),function(){var t=fabric.util.degreesToRadians,e={left:-.5,center:0,right:.5},i={top:-.5,center:0,bottom:.5};fabric.util.object.extend(fabric.Object.prototype,{translateToGivenOrigin:function(t,r,n,s,o){var a,h,c,l=t.x,u=t.y;return"string"==typeof r?r=e[r]:r-=.5,"string"==typeof s?s=e[s]:s-=.5,a=s-r,"string"==typeof n?n=i[n]:n-=.5,"string"==typeof o?o=i[o]:o-=.5,h=o-n,(a||h)&&(c=this._getTransformedDimensions(),l=t.x+a*c.x,u=t.y+h*c.y),new fabric.Point(l,u)},translateToCenterPoint:function(e,i,r){var n=this.translateToGivenOrigin(e,i,r,"center","center");return this.angle?fabric.util.rotatePoint(n,e,t(this.angle)):n},translateToOriginPoint:function(e,i,r){var n=this.translateToGivenOrigin(e,"center","center",i,r);return this.angle?fabric.util.rotatePoint(n,e,t(this.angle)):n},getCenterPoint:function(){var t=new fabric.Point(this.left,this.top);return this.translateToCenterPoint(t,this.originX,this.originY)},getPointByOrigin:function(t,e){var i=this.getCenterPoint();return this.translateToOriginPoint(i,t,e)},toLocalPoint:function(e,i,r){var n,s,o=this.getCenterPoint();return n=void 0!==i&&void 0!==r?this.translateToGivenOrigin(o,"center","center",i,r):new fabric.Point(this.left,this.top),s=new fabric.Point(e.x,e.y),this.angle&&(s=fabric.util.rotatePoint(s,o,-t(this.angle))),s.subtractEquals(n)},setPositionByOrigin:function(t,e,i){var r=this.translateToCenterPoint(t,e,i),n=this.translateToOriginPoint(r,this.originX,this.originY);this.set("left",n.x),this.set("top",n.y)},adjustPosition:function(i){var r,n,s=t(this.angle),o=this.getWidth(),a=Math.cos(s)*o,h=Math.sin(s)*o;r="string"==typeof this.originX?e[this.originX]:this.originX-.5,n="string"==typeof i?e[i]:i-.5,this.left+=a*(n-r),this.top+=h*(n-r),this.setCoords(),this.originX=i},_setOriginToCenter:function(){this._originalOriginX=this.originX,this._originalOriginY=this.originY;var t=this.getCenterPoint();this.originX="center",this.originY="center",this.left=t.x,this.top=t.y},_resetOrigin:function(){var t=this.translateToOriginPoint(this.getCenterPoint(),this._originalOriginX,this._originalOriginY);this.originX=this._originalOriginX,this.originY=this._originalOriginY,this.left=t.x,this.top=t.y,this._originalOriginX=null,this._originalOriginY=null},_getLeftTopCoords:function(){return this.translateToOriginPoint(this.getCenterPoint(),"left","top")},onDeselect:function(){}})}(),function(){function t(t){return[new fabric.Point(t.tl.x,t.tl.y),new fabric.Point(t.tr.x,t.tr.y),new fabric.Point(t.br.x,t.br.y),new fabric.Point(t.bl.x,t.bl.y)]}var e=fabric.util.degreesToRadians,i=fabric.util.multiplyTransformMatrices;fabric.util.object.extend(fabric.Object.prototype,{oCoords:null,aCoords:null,getCoords:function(e,i){this.oCoords||this.setCoords();var r=e?this.aCoords:this.oCoords;return t(i?this.calcCoords(e):r)},intersectsWithRect:function(t,e,i,r){var n=this.getCoords(i,r);return"Intersection"===fabric.Intersection.intersectPolygonRectangle(n,t,e).status},intersectsWithObject:function(t,e,i){return"Intersection"===fabric.Intersection.intersectPolygonPolygon(this.getCoords(e,i),t.getCoords(e,i)).status||t.isContainedWithinObject(this,e,i)||this.isContainedWithinObject(t,e,i)},isContainedWithinObject:function(t,e,i){for(var r=this.getCoords(e,i),n=0,s=t._getImageLines(i?t.calcCoords(e):e?t.aCoords:t.oCoords);n<4;n++)if(!t.containsPoint(r[n],s))return!1;return!0},isContainedWithinRect:function(t,e,i,r){var n=this.getBoundingRect(i,r);return n.left>=t.x&&n.left+n.width<=e.x&&n.top>=t.y&&n.top+n.height<=e.y},containsPoint:function(t,e,i,r){var e=e||this._getImageLines(r?this.calcCoords(i):i?this.aCoords:this.oCoords),n=this._findCrossPoints(t,e);return 0!==n&&n%2==1},isOnScreen:function(t){if(!this.canvas)return!1;for(var e,i=this.canvas.vptCoords.tl,r=this.canvas.vptCoords.br,n=this.getCoords(!0,t),s=0;s<4;s++)if((e=n[s]).x<=r.x&&e.x>=i.x&&e.y<=r.y&&e.y>=i.y)return!0;if(this.intersectsWithRect(i,r,!0))return!0;var o={x:(i.x+r.x)/2,y:(i.y+r.y)/2};return!!this.containsPoint(o,null,!0)},_getImageLines:function(t){return{topline:{o:t.tl,d:t.tr},rightline:{o:t.tr,d:t.br},bottomline:{o:t.br,d:t.bl},leftline:{o:t.bl,d:t.tl}}},_findCrossPoints:function(t,e){var i,r,n,s,o=0;for(var a in e)if(!((s=e[a]).o.y<t.y&&s.d.y<t.y||s.o.y>=t.y&&s.d.y>=t.y||(s.o.x===s.d.x&&s.o.x>=t.x?n=s.o.x:(i=0,r=(s.d.y-s.o.y)/(s.d.x-s.o.x),n=-(t.y-i*t.x-(s.o.y-r*s.o.x))/(i-r)),n>=t.x&&(o+=1),2!==o)))break;return o},getBoundingRectWidth:function(){return this.getBoundingRect().width},getBoundingRectHeight:function(){return this.getBoundingRect().height},getBoundingRect:function(t,e){var i=this.getCoords(t,e);return fabric.util.makeBoundingBoxFromPoints(i)},getWidth:function(){return this._getTransformedDimensions().x},getHeight:function(){return this._getTransformedDimensions().y},_constrainScale:function(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t},scale:function(t){return(t=this._constrainScale(t))<0&&(this.flipX=!this.flipX,this.flipY=!this.flipY,t*=-1),this.scaleX=t,this.scaleY=t,this.setCoords()},scaleToWidth:function(t){var e=this.getBoundingRect().width/this.getWidth();return this.scale(t/this.width/e)},scaleToHeight:function(t){var e=this.getBoundingRect().height/this.getHeight();return this.scale(t/this.height/e)},calcCoords:function(t){var i=e(this.angle),r=this.getViewportTransform(),n=t?this._getTransformedDimensions():this._calculateCurrentDimensions(),s=n.x,o=n.y,a=Math.sin(i),h=Math.cos(i),c=s>0?Math.atan(o/s):0,l=s/Math.cos(c)/2,u=Math.cos(c+i)*l,f=Math.sin(c+i)*l,d=this.getCenterPoint(),g=t?d:fabric.util.transformPoint(d,r),p=new fabric.Point(g.x-u,g.y-f),v=new fabric.Point(p.x+s*h,p.y+s*a),b=new fabric.Point(p.x-o*a,p.y+o*h),m=new fabric.Point(g.x+u,g.y+f);if(!t)var _=new fabric.Point((p.x+b.x)/2,(p.y+b.y)/2),y=new fabric.Point((v.x+p.x)/2,(v.y+p.y)/2),x=new fabric.Point((m.x+v.x)/2,(m.y+v.y)/2),C=new fabric.Point((m.x+b.x)/2,(m.y+b.y)/2),S=new fabric.Point(y.x+a*this.rotatingPointOffset,y.y-h*this.rotatingPointOffset);g={tl:p,tr:v,br:m,bl:b};return t||(g.ml=_,g.mt=y,g.mr=x,g.mb=C,g.mtr=S),g},setCoords:function(t,e){return this.oCoords=this.calcCoords(t),e||(this.aCoords=this.calcCoords(!0)),t||this._setCornerCoords&&this._setCornerCoords(),this},_calcRotateMatrix:function(){if(this.angle){var t=e(this.angle),i=Math.cos(t),r=Math.sin(t);return 6.123233995736766e-17!==i&&-1.8369701987210297e-16!==i||(i=0),[i,r,-r,i,0,0]}return fabric.iMatrix.concat()},calcTransformMatrix:function(t){var e,r,n=this.getCenterPoint(),s=[1,0,0,1,n.x,n.y],o=this._calcDimensionsTransformMatrix(this.skewX,this.skewY,!0);return r=this.group&&!t?i(this.group.calcTransformMatrix(),s):s,this.angle&&(e=this._calcRotateMatrix(),r=i(r,e)),r=i(r,o)},_calcDimensionsTransformMatrix:function(t,r,n){var s,o=[this.scaleX*(n&&this.flipX?-1:1),0,0,this.scaleY*(n&&this.flipY?-1:1),0,0];return t&&(s=[1,0,Math.tan(e(t)),1],o=i(o,s,!0)),r&&(s=[1,Math.tan(e(r)),0,1],o=i(o,s,!0)),o},_getNonTransformedDimensions:function(){var t=this.strokeWidth;return{x:this.width+t,y:this.height+t}},_getTransformedDimensions:function(t,e){void 0===t&&(t=this.skewX),void 0===e&&(e=this.skewY);var i,r,n=this._getNonTransformedDimensions(),s=n.x/2,o=n.y/2,a=[{x:-s,y:-o},{x:s,y:-o},{x:-s,y:o},{x:s,y:o}],h=this._calcDimensionsTransformMatrix(t,e,!1);for(i=0;i<a.length;i++)a[i]=fabric.util.transformPoint(a[i],h);return r=fabric.util.makeBoundingBoxFromPoints(a),{x:r.width,y:r.height}},_calculateCurrentDimensions:function(){var t=this.getViewportTransform(),e=this._getTransformedDimensions();return fabric.util.transformPoint(e,t,!0).scalarAdd(2*this.padding)}})}(),fabric.util.object.extend(fabric.Object.prototype,{sendToBack:function(){return this.group?fabric.StaticCanvas.prototype.sendToBack.call(this.group,this):this.canvas.sendToBack(this),this},bringToFront:function(){return this.group?fabric.StaticCanvas.prototype.bringToFront.call(this.group,this):this.canvas.bringToFront(this),this},sendBackwards:function(t){return this.group?fabric.StaticCanvas.prototype.sendBackwards.call(this.group,this,t):this.canvas.sendBackwards(this,t),this},bringForward:function(t){return this.group?fabric.StaticCanvas.prototype.bringForward.call(this.group,this,t):this.canvas.bringForward(this,t),this},moveTo:function(t){return this.group?fabric.StaticCanvas.prototype.moveTo.call(this.group,this,t):this.canvas.moveTo(this,t),this}}),function(){function t(t,e){if(e){if(e.toLive)return t+": url(#SVGID_"+e.id+"); ";var i=new fabric.Color(e),r=t+": "+i.toRgb()+"; ",n=i.getAlpha();return 1!==n&&(r+=t+"-opacity: "+n.toString()+"; "),r}return t+": none; "}fabric.util.object.extend(fabric.Object.prototype,{getSvgStyles:function(e){var i=this.fillRule,r=this.strokeWidth?this.strokeWidth:"0",n=this.strokeDashArray?this.strokeDashArray.join(" "):"none",s=this.strokeLineCap?this.strokeLineCap:"butt",o=this.strokeLineJoin?this.strokeLineJoin:"miter",a=this.strokeMiterLimit?this.strokeMiterLimit:"4",h=void 0!==this.opacity?this.opacity:"1",c=this.visible?"":" visibility: hidden;",l=e?"":this.getSvgFilter(),u=t("fill",this.fill);return[t("stroke",this.stroke),"stroke-width: ",r,"; ","stroke-dasharray: ",n,"; ","stroke-linecap: ",s,"; ","stroke-linejoin: ",o,"; ","stroke-miterlimit: ",a,"; ",u,"fill-rule: ",i,"; ","opacity: ",h,";",l,c].join("")},getSvgFilter:function(){return this.shadow?"filter: url(#SVGID_"+this.shadow.id+");":""},getSvgId:function(){return this.id?'id="'+this.id+'" ':""},getSvgTransform:function(){if(this.group&&"path-group"===this.group.type)return"";var t=fabric.util.toFixed,e=this.getAngle(),i=this.getSkewX()%360,r=this.getSkewY()%360,n=this.getCenterPoint(),s=fabric.Object.NUM_FRACTION_DIGITS,o="path-group"===this.type?"":"translate("+t(n.x,s)+" "+t(n.y,s)+")",a=0!==e?" rotate("+t(e,s)+")":"",h=1===this.scaleX&&1===this.scaleY?"":" scale("+t(this.scaleX,s)+" "+t(this.scaleY,s)+")",c=0!==i?" skewX("+t(i,s)+")":"",l=0!==r?" skewY("+t(r,s)+")":"",u="path-group"===this.type?this.width:0,f=this.flipX?" matrix(-1 0 0 1 "+u+" 0) ":"",d="path-group"===this.type?this.height:0;return[o,a,h,f,this.flipY?" matrix(1 0 0 -1 0 "+d+")":"",c,l].join("")},getSvgTransformMatrix:function(){return this.transformMatrix?" matrix("+this.transformMatrix.join(" ")+") ":""},_createBaseSVGMarkup:function(){var t=[];return this.fill&&this.fill.toLive&&t.push(this.fill.toSVG(this,!1)),this.stroke&&this.stroke.toLive&&t.push(this.stroke.toSVG(this,!1)),this.shadow&&t.push(this.shadow.toSVG(this)),t}})}(),function(){function t(t,e,r){var n={};r.forEach(function(e){n[e]=t[e]}),i(t[e],n,!0)}function e(t,i,r){if(t===i)return!0;if(Array.isArray(t)){if(t.length!==i.length)return!1;for(var n=0,s=t.length;n<s;n++)if(!e(t[n],i[n]))return!1;return!0}if(t&&"object"==typeof t){var o,a=Object.keys(t);if(!r&&a.length!==Object.keys(i).length)return!1;for(var n=0,s=a.length;n<s;n++)if(o=a[n],!e(t[o],i[o]))return!1;return!0}}var i=fabric.util.object.extend;fabric.util.object.extend(fabric.Object.prototype,{hasStateChanged:function(t){var i="_"+(t=t||"stateProperties");return Object.keys(this[i]).length<this[t].length||!e(this[i],this,!0)},saveState:function(e){var i=e&&e.propertySet||"stateProperties",r="_"+i;return this[r]?(t(this,r,this[i]),e&&e.stateProperties&&t(this,r,e.stateProperties),this):this.setupState(e)},setupState:function(t){var e=(t=t||{}).propertySet||"stateProperties";return t.propertySet=e,this["_"+e]={},this.saveState(t),this}})}(),function(){var t=fabric.util.degreesToRadians,e=function(){return"undefined"!=typeof G_vmlCanvasManager};fabric.util.object.extend(fabric.Object.prototype,{_controlsVisibility:null,_findTargetCorner:function(t){if(!this.hasControls||!this.active)return!1;var e,i,r=t.x,n=t.y;this.__corner=0;for(var s in this.oCoords)if(this.isControlVisible(s)&&("mtr"!==s||this.hasRotatingPoint)&&(!this.get("lockUniScaling")||"mt"!==s&&"mr"!==s&&"mb"!==s&&"ml"!==s)&&(i=this._getImageLines(this.oCoords[s].corner),0!==(e=this._findCrossPoints({x:r,y:n},i))&&e%2==1))return this.__corner=s,s;return!1},_setCornerCoords:function(){var e,i,r=this.oCoords,n=t(45-this.angle),s=.707106*this.cornerSize,o=s*Math.cos(n),a=s*Math.sin(n);for(var h in r)e=r[h].x,i=r[h].y,r[h].corner={tl:{x:e-a,y:i-o},tr:{x:e+o,y:i-a},bl:{x:e-o,y:i+a},br:{x:e+a,y:i+o}}},drawSelectionBackground:function(e){if(!this.selectionBackgroundColor||this.group||!this.active||this.canvas&&!this.canvas.interactive)return this;e.save();var i=this.getCenterPoint(),r=this._calculateCurrentDimensions(),n=this.canvas.viewportTransform;return e.translate(i.x,i.y),e.scale(1/n[0],1/n[3]),e.rotate(t(this.angle)),e.fillStyle=this.selectionBackgroundColor,e.fillRect(-r.x/2,-r.y/2,r.x,r.y),e.restore(),this},drawBorders:function(t){if(!this.hasBorders)return this;var e=this._calculateCurrentDimensions(),i=1/this.borderScaleFactor,r=e.x+i,n=e.y+i;if(t.save(),t.strokeStyle=this.borderColor,this._setLineDash(t,this.borderDashArray,null),t.strokeRect(-r/2,-n/2,r,n),this.hasRotatingPoint&&this.isControlVisible("mtr")&&!this.get("lockRotation")&&this.hasControls){var s=-n/2;t.beginPath(),t.moveTo(0,s),t.lineTo(0,s-this.rotatingPointOffset),t.closePath(),t.stroke()}return t.restore(),this},drawBordersInGroup:function(t,e){if(!this.hasBorders)return this;var i=this._getNonTransformedDimensions(),r=fabric.util.customTransformMatrix(e.scaleX,e.scaleY,e.skewX),n=fabric.util.transformPoint(i,r),s=1/this.borderScaleFactor,o=n.x+s,a=n.y+s;return t.save(),this._setLineDash(t,this.borderDashArray,null),t.strokeStyle=this.borderColor,t.strokeRect(-o/2,-a/2,o,a),t.restore(),this},drawControls:function(t){if(!this.hasControls)return this;var e=this._calculateCurrentDimensions(),i=e.x,r=e.y,n=this.cornerSize,s=-(i+n)/2,o=-(r+n)/2,a=this.transparentCorners?"stroke":"fill";return t.save(),t.strokeStyle=t.fillStyle=this.cornerColor,this.transparentCorners||(t.strokeStyle=this.cornerStrokeColor),this._setLineDash(t,this.cornerDashArray,null),this._drawControl("tl",t,a,s,o),this._drawControl("tr",t,a,s+i,o),this._drawControl("bl",t,a,s,o+r),this._drawControl("br",t,a,s+i,o+r),this.get("lockUniScaling")||(this._drawControl("mt",t,a,s+i/2,o),this._drawControl("mb",t,a,s+i/2,o+r),this._drawControl("mr",t,a,s+i,o+r/2),this._drawControl("ml",t,a,s,o+r/2)),this.hasRotatingPoint&&this._drawControl("mtr",t,a,s+i/2,o-this.rotatingPointOffset),t.restore(),this},_drawControl:function(t,i,r,n,s){if(this.isControlVisible(t)){var o=this.cornerSize,a=!this.transparentCorners&&this.cornerStrokeColor;switch(this.cornerStyle){case"circle":i.beginPath(),i.arc(n+o/2,s+o/2,o/2,0,2*Math.PI,!1),i[r](),a&&i.stroke();break;default:e()||this.transparentCorners||i.clearRect(n,s,o,o),i[r+"Rect"](n,s,o,o),a&&i.strokeRect(n,s,o,o)}}},isControlVisible:function(t){return this._getControlsVisibility()[t]},setControlVisible:function(t,e){return this._getControlsVisibility()[t]=e,this},setControlsVisibility:function(t){t||(t={});for(var e in t)this.setControlVisible(e,t[e]);return this},_getControlsVisibility:function(){return this._controlsVisibility||(this._controlsVisibility={tl:!0,tr:!0,br:!0,bl:!0,ml:!0,mt:!0,mr:!0,mb:!0,mtr:!0}),this._controlsVisibility}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{FX_DURATION:500,fxCenterObjectH:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,n=e.onChange||i,s=this;return fabric.util.animate({startValue:t.get("left"),endValue:this.getCenter().left,duration:this.FX_DURATION,onChange:function(e){t.set("left",e),s.renderAll(),n()},onComplete:function(){t.setCoords(),r()}}),this},fxCenterObjectV:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,n=e.onChange||i,s=this;return fabric.util.animate({startValue:t.get("top"),endValue:this.getCenter().top,duration:this.FX_DURATION,onChange:function(e){t.set("top",e),s.renderAll(),n()},onComplete:function(){t.setCoords(),r()}}),this},fxRemove:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,n=e.onChange||i,s=this;return fabric.util.animate({startValue:t.get("opacity"),endValue:0,duration:this.FX_DURATION,onStart:function(){t.set("active",!1)},onChange:function(e){t.set("opacity",e),s.renderAll(),n()},onComplete:function(){s.remove(t),r()}}),this}}),fabric.util.object.extend(fabric.Object.prototype,{animate:function(){if(arguments[0]&&"object"==typeof arguments[0]){var t,e,i=[];for(t in arguments[0])i.push(t);for(var r=0,n=i.length;r<n;r++)t=i[r],e=r!==n-1,this._animate(t,arguments[0][t],arguments[1],e)}else this._animate.apply(this,arguments);return this},_animate:function(t,e,i,r){var n,s=this;e=e.toString(),i=i?fabric.util.object.clone(i):{},~t.indexOf(".")&&(n=t.split("."));var o=n?this.get(n[0])[n[1]]:this.get(t);"from"in i||(i.from=o),e=~e.indexOf("=")?o+parseFloat(e.replace("=","")):parseFloat(e),fabric.util.animate({startValue:i.from,endValue:e,byValue:i.by,easing:i.easing,duration:i.duration,abort:i.abort&&function(){return i.abort.call(s)},onChange:function(e,o,a){n?s[n[0]][n[1]]=e:s.set(t,e),r||i.onChange&&i.onChange(e,o,a)},onComplete:function(t,e,n){r||(s.setCoords(),i.onComplete&&i.onComplete(t,e,n))}})}}),function(t){"use strict";function e(t,e){var i=t.origin,r=t.axis1,n=t.axis2,s=t.dimension,o=e.nearest,a=e.center,h=e.farthest;return function(){switch(this.get(i)){case o:return Math.min(this.get(r),this.get(n));case a:return Math.min(this.get(r),this.get(n))+.5*this.get(s);case h:return Math.max(this.get(r),this.get(n))}}}var i=t.fabric||(t.fabric={}),r=i.util.object.extend,n=i.util.object.clone,s={x1:1,x2:1,y1:1,y2:1},o=i.StaticCanvas.supports("setLineDash");if(i.Line)i.warn("fabric.Line is already defined");else{var a=i.Object.prototype.cacheProperties.concat();a.push("x1","x2","y1","y2"),i.Line=i.util.createClass(i.Object,{type:"line",x1:0,y1:0,x2:0,y2:0,cacheProperties:a,initialize:function(t,e){t||(t=[0,0,0,0]),this.callSuper("initialize",e),this.set("x1",t[0]),this.set("y1",t[1]),this.set("x2",t[2]),this.set("y2",t[3]),this._setWidthHeight(e)},_setWidthHeight:function(t){t||(t={}),this.width=Math.abs(this.x2-this.x1),this.height=Math.abs(this.y2-this.y1),this.left="left"in t?t.left:this._getLeftToOriginX(),this.top="top"in t?t.top:this._getTopToOriginY()},_set:function(t,e){return this.callSuper("_set",t,e),void 0!==s[t]&&this._setWidthHeight(),this},_getLeftToOriginX:e({origin:"originX",axis1:"x1",axis2:"x2",dimension:"width"},{nearest:"left",center:"center",farthest:"right"}),_getTopToOriginY:e({origin:"originY",axis1:"y1",axis2:"y2",dimension:"height"},{nearest:"top",center:"center",farthest:"bottom"}),_render:function(t,e){if(t.beginPath(),e){var i=this.getCenterPoint(),r=this.strokeWidth/2;t.translate(i.x-("butt"===this.strokeLineCap&&0===this.height?0:r),i.y-("butt"===this.strokeLineCap&&0===this.width?0:r))}if(!this.strokeDashArray||this.strokeDashArray&&o){var n=this.calcLinePoints();t.moveTo(n.x1,n.y1),t.lineTo(n.x2,n.y2)}t.lineWidth=this.strokeWidth;var s=t.strokeStyle;t.strokeStyle=this.stroke||t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=s},_renderDashedStroke:function(t){var e=this.calcLinePoints();t.beginPath(),i.util.drawDashedLine(t,e.x1,e.y1,e.x2,e.y2,this.strokeDashArray),t.closePath()},toObject:function(t){return r(this.callSuper("toObject",t),this.calcLinePoints())},_getNonTransformedDimensions:function(){var t=this.callSuper("_getNonTransformedDimensions");return"butt"===this.strokeLineCap&&(0===this.width&&(t.y-=this.strokeWidth),0===this.height&&(t.x-=this.strokeWidth)),t},calcLinePoints:function(){var t=this.x1<=this.x2?-1:1,e=this.y1<=this.y2?-1:1,i=t*this.width*.5,r=e*this.height*.5;return{x1:i,x2:t*this.width*-.5,y1:r,y2:e*this.height*-.5}},toSVG:function(t){var e=this._createBaseSVGMarkup(),i={x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2};return this.group&&"path-group"===this.group.type||(i=this.calcLinePoints()),e.push("<line ",this.getSvgId(),'x1="',i.x1,'" y1="',i.y1,'" x2="',i.x2,'" y2="',i.y2,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")}}),i.Line.ATTRIBUTE_NAMES=i.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),i.Line.fromElement=function(t,e){e=e||{};var n=i.parseAttributes(t,i.Line.ATTRIBUTE_NAMES),s=[n.x1||0,n.y1||0,n.x2||0,n.y2||0];return e.originX="left",e.originY="top",new i.Line(s,r(n,e))},i.Line.fromObject=function(t,e,r){var s=n(t,!0);s.points=[t.x1,t.y1,t.x2,t.y2];var o=i.Object._fromObject("Line",s,function(t){delete t.points,e&&e(t)},r,"points");return o&&delete o.points,o}}}("undefined"!=typeof exports?exports:this),function(t){"use strict";function e(t){return"radius"in t&&t.radius>=0}var i=t.fabric||(t.fabric={}),r=Math.PI,n=i.util.object.extend;if(i.Circle)i.warn("fabric.Circle is already defined.");else{var s=i.Object.prototype.cacheProperties.concat();s.push("radius"),i.Circle=i.util.createClass(i.Object,{type:"circle",radius:0,startAngle:0,endAngle:2*r,cacheProperties:s,initialize:function(t){this.callSuper("initialize",t),this.set("radius",t&&t.radius||0)},_set:function(t,e){return this.callSuper("_set",t,e),"radius"===t&&this.setRadius(e),this},toObject:function(t){return this.callSuper("toObject",["radius","startAngle","endAngle"].concat(t))},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=0,n=0,s=(this.endAngle-this.startAngle)%(2*r);if(0===s)this.group&&"path-group"===this.group.type&&(i=this.left+this.radius,n=this.top+this.radius),e.push("<circle ",this.getSvgId(),'cx="'+i+'" cy="'+n+'" ','r="',this.radius,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n');else{var o=Math.cos(this.startAngle)*this.radius,a=Math.sin(this.startAngle)*this.radius,h=Math.cos(this.endAngle)*this.radius,c=Math.sin(this.endAngle)*this.radius,l=s>r?"1":"0";e.push('<path d="M '+o+" "+a," A "+this.radius+" "+this.radius," 0 ",+l+" 1"," "+h+" "+c,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n')}return t?t(e.join("")):e.join("")},_render:function(t,e){t.beginPath(),t.arc(e?this.left+this.radius:0,e?this.top+this.radius:0,this.radius,this.startAngle,this.endAngle,!1),this._renderFill(t),this._renderStroke(t)},getRadiusX:function(){return this.get("radius")*this.get("scaleX")},getRadiusY:function(){return this.get("radius")*this.get("scaleY")},setRadius:function(t){return this.radius=t,this.set("width",2*t).set("height",2*t)}}),i.Circle.ATTRIBUTE_NAMES=i.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),i.Circle.fromElement=function(t,r){r||(r={});var s=i.parseAttributes(t,i.Circle.ATTRIBUTE_NAMES);if(!e(s))throw new Error("value of `r` attribute is required and can not be negative");s.left=s.left||0,s.top=s.top||0;var o=new i.Circle(n(s,r));return o.left-=o.radius,o.top-=o.radius,o},i.Circle.fromObject=function(t,e,r){return i.Object._fromObject("Circle",t,e,r)}}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});e.Triangle?e.warn("fabric.Triangle is already defined"):(e.Triangle=e.util.createClass(e.Object,{type:"triangle",initialize:function(t){this.callSuper("initialize",t),this.set("width",t&&t.width||100).set("height",t&&t.height||100)},_render:function(t){var e=this.width/2,i=this.height/2;t.beginPath(),t.moveTo(-e,i),t.lineTo(0,-i),t.lineTo(e,i),t.closePath(),this._renderFill(t),this._renderStroke(t)},_renderDashedStroke:function(t){var i=this.width/2,r=this.height/2;t.beginPath(),e.util.drawDashedLine(t,-i,r,0,-r,this.strokeDashArray),e.util.drawDashedLine(t,0,-r,i,r,this.strokeDashArray),e.util.drawDashedLine(t,i,r,-i,r,this.strokeDashArray),t.closePath()},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=this.width/2,r=this.height/2,n=[-i+" "+r,"0 "+-r,i+" "+r].join(",");return e.push("<polygon ",this.getSvgId(),'points="',n,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),t?t(e.join("")):e.join("")}}),e.Triangle.fromObject=function(t,i,r){return e.Object._fromObject("Triangle",t,i,r)})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=2*Math.PI,r=e.util.object.extend;if(e.Ellipse)e.warn("fabric.Ellipse is already defined.");else{var n=e.Object.prototype.cacheProperties.concat();n.push("rx","ry"),e.Ellipse=e.util.createClass(e.Object,{type:"ellipse",rx:0,ry:0,cacheProperties:n,initialize:function(t){this.callSuper("initialize",t),this.set("rx",t&&t.rx||0),this.set("ry",t&&t.ry||0)},_set:function(t,e){switch(this.callSuper("_set",t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this},getRx:function(){return this.get("rx")*this.get("scaleX")},getRy:function(){return this.get("ry")*this.get("scaleY")},toObject:function(t){return this.callSuper("toObject",["rx","ry"].concat(t))},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=0,r=0;return this.group&&"path-group"===this.group.type&&(i=this.left+this.rx,r=this.top+this.ry),e.push("<ellipse ",this.getSvgId(),'cx="',i,'" cy="',r,'" ','rx="',this.rx,'" ry="',this.ry,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")},_render:function(t,e){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(e?this.left+this.rx:0,e?(this.top+this.ry)*this.rx/this.ry:0,this.rx,0,i,!1),t.restore(),this._renderFill(t),this._renderStroke(t)}}),e.Ellipse.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),e.Ellipse.fromElement=function(t,i){i||(i={});var n=e.parseAttributes(t,e.Ellipse.ATTRIBUTE_NAMES);n.left=n.left||0,n.top=n.top||0;var s=new e.Ellipse(r(n,i));return s.top-=s.ry,s.left-=s.rx,s},e.Ellipse.fromObject=function(t,i,r){return e.Object._fromObject("Ellipse",t,i,r)}}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;if(e.Rect)e.warn("fabric.Rect is already defined");else{var r=e.Object.prototype.stateProperties.concat();r.push("rx","ry");var n=e.Object.prototype.cacheProperties.concat();n.push("rx","ry"),e.Rect=e.util.createClass(e.Object,{stateProperties:r,type:"rect",rx:0,ry:0,cacheProperties:n,initialize:function(t){this.callSuper("initialize",t),this._initRxRy()},_initRxRy:function(){this.rx&&!this.ry?this.ry=this.rx:this.ry&&!this.rx&&(this.rx=this.ry)},_render:function(t,e){if(1!==this.width||1!==this.height){var i=this.rx?Math.min(this.rx,this.width/2):0,r=this.ry?Math.min(this.ry,this.height/2):0,n=this.width,s=this.height,o=e?this.left:-this.width/2,a=e?this.top:-this.height/2,h=0!==i||0!==r,c=.4477152502;t.beginPath(),t.moveTo(o+i,a),t.lineTo(o+n-i,a),h&&t.bezierCurveTo(o+n-c*i,a,o+n,a+c*r,o+n,a+r),t.lineTo(o+n,a+s-r),h&&t.bezierCurveTo(o+n,a+s-c*r,o+n-c*i,a+s,o+n-i,a+s),t.lineTo(o+i,a+s),h&&t.bezierCurveTo(o+c*i,a+s,o,a+s-c*r,o,a+s-r),t.lineTo(o,a+r),h&&t.bezierCurveTo(o,a+c*r,o+c*i,a,o+i,a),t.closePath(),this._renderFill(t),this._renderStroke(t)}else t.fillRect(-.5,-.5,1,1)},_renderDashedStroke:function(t){var i=-this.width/2,r=-this.height/2,n=this.width,s=this.height;t.beginPath(),e.util.drawDashedLine(t,i,r,i+n,r,this.strokeDashArray),e.util.drawDashedLine(t,i+n,r,i+n,r+s,this.strokeDashArray),e.util.drawDashedLine(t,i+n,r+s,i,r+s,this.strokeDashArray),e.util.drawDashedLine(t,i,r+s,i,r,this.strokeDashArray),t.closePath()},toObject:function(t){return this.callSuper("toObject",["rx","ry"].concat(t))},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=this.left,r=this.top;return this.group&&"path-group"===this.group.type||(i=-this.width/2,r=-this.height/2),e.push("<rect ",this.getSvgId(),'x="',i,'" y="',r,'" rx="',this.get("rx"),'" ry="',this.get("ry"),'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")}}),e.Rect.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),e.Rect.fromElement=function(t,r){if(!t)return null;r=r||{};var n=e.parseAttributes(t,e.Rect.ATTRIBUTE_NAMES);n.left=n.left||0,n.top=n.top||0;var s=new e.Rect(i(r?e.util.object.clone(r):{},n));return s.visible=s.visible&&s.width>0&&s.height>0,s},e.Rect.fromObject=function(t,i,r){return e.Object._fromObject("Rect",t,i,r)}}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.array.min,n=e.util.array.max,s=e.util.toFixed,o=e.Object.NUM_FRACTION_DIGITS;if(e.Polyline)e.warn("fabric.Polyline is already defined");else{var a=e.Object.prototype.cacheProperties.concat();a.push("points"),e.Polyline=e.util.createClass(e.Object,{type:"polyline",points:null,minX:0,minY:0,cacheProperties:a,initialize:function(t,e){e=e||{},this.points=t||[],this.callSuper("initialize",e),this._calcDimensions(),"top"in e||(this.top=this.minY),"left"in e||(this.left=this.minX),this.pathOffset={x:this.minX+this.width/2,y:this.minY+this.height/2}},_calcDimensions:function(){var t=this.points,e=r(t,"x"),i=r(t,"y"),s=n(t,"x"),o=n(t,"y");this.width=s-e||0,this.height=o-i||0,this.minX=e||0,this.minY=i||0},toObject:function(t){return i(this.callSuper("toObject",t),{points:this.points.concat()})},toSVG:function(t){var e=[],i=0,r=0,n=this._createBaseSVGMarkup();this.group&&"path-group"===this.group.type||(i=this.pathOffset.x,r=this.pathOffset.y);for(var a=0,h=this.points.length;a<h;a++)e.push(s(this.points[a].x-i,o),",",s(this.points[a].y-r,o)," ");return n.push("<",this.type," ",this.getSvgId(),'points="',e.join(""),'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n'),t?t(n.join("")):n.join("")},commonRender:function(t,e){var i,r=this.points.length,n=e?0:this.pathOffset.x,s=e?0:this.pathOffset.y;if(!r||isNaN(this.points[r-1].y))return!1;t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-s);for(var o=0;o<r;o++)i=this.points[o],t.lineTo(i.x-n,i.y-s);return!0},_render:function(t,e){this.commonRender(t,e)&&(this._renderFill(t),this._renderStroke(t))},_renderDashedStroke:function(t){var i,r;t.beginPath();for(var n=0,s=this.points.length;n<s;n++)i=this.points[n],r=this.points[n+1]||i,e.util.drawDashedLine(t,i.x,i.y,r.x,r.y,this.strokeDashArray)},complexity:function(){return this.get("points").length}}),e.Polyline.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(),e.Polyline.fromElement=function(t,i){if(!t)return null;i||(i={});var r=e.parsePointsAttribute(t.getAttribute("points")),n=e.parseAttributes(t,e.Polyline.ATTRIBUTE_NAMES);return new e.Polyline(r,e.util.object.extend(n,i))},e.Polyline.fromObject=function(t,i,r){return e.Object._fromObject("Polyline",t,i,r,"points")}}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Polygon?e.warn("fabric.Polygon is already defined"):(e.Polygon=e.util.createClass(e.Polyline,{type:"polygon",_render:function(t,e){this.commonRender(t,e)&&(t.closePath(),this._renderFill(t),this._renderStroke(t))},_renderDashedStroke:function(t){this.callSuper("_renderDashedStroke",t),t.closePath()}}),e.Polygon.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(),e.Polygon.fromElement=function(t,r){if(!t)return null;r||(r={});var n=e.parsePointsAttribute(t.getAttribute("points")),s=e.parseAttributes(t,e.Polygon.ATTRIBUTE_NAMES);return new e.Polygon(n,i(s,r))},e.Polygon.fromObject=function(t,i,r){return e.Object._fromObject("Polygon",t,i,r,"points")})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.array.min,r=e.util.array.max,n=e.util.object.extend,s=Object.prototype.toString,o=e.util.drawArc,a={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},h={m:"l",M:"L"};if(e.Path)e.warn("fabric.Path is already defined");else{var c=e.Object.prototype.stateProperties.concat();c.push("path");var l=e.Object.prototype.cacheProperties.concat();l.push("path","fillRule"),e.Path=e.util.createClass(e.Object,{type:"path",path:null,minX:0,minY:0,cacheProperties:l,stateProperties:c,initialize:function(t,e){e=e||{},this.callSuper("initialize",e),t||(t=[]);var i="[object Array]"===s.call(t);this.path=i?t:t.match&&t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi),this.path&&(i||(this.path=this._parsePath()),this._setPositionDimensions(e))},_setPositionDimensions:function(t){var e=this._parseDimensions();this.minX=e.left,this.minY=e.top,this.width=e.width,this.height=e.height,void 0===t.left&&(this.left=e.left+("center"===this.originX?this.width/2:"right"===this.originX?this.width:0)),void 0===t.top&&(this.top=e.top+("center"===this.originY?this.height/2:"bottom"===this.originY?this.height:0)),this.pathOffset=this.pathOffset||{x:this.minX+this.width/2,y:this.minY+this.height/2}},_renderPathCommands:function(t){var e,i,r,n=null,s=0,a=0,h=0,c=0,l=0,u=0,f=-this.pathOffset.x,d=-this.pathOffset.y;this.group&&"path-group"===this.group.type&&(f=0,d=0),t.beginPath();for(var g=0,p=this.path.length;g<p;++g){switch((e=this.path[g])[0]){case"l":h+=e[1],c+=e[2],t.lineTo(h+f,c+d);break;case"L":h=e[1],c=e[2],t.lineTo(h+f,c+d);break;case"h":h+=e[1],t.lineTo(h+f,c+d);break;case"H":h=e[1],t.lineTo(h+f,c+d);break;case"v":c+=e[1],t.lineTo(h+f,c+d);break;case"V":c=e[1],t.lineTo(h+f,c+d);break;case"m":s=h+=e[1],a=c+=e[2],t.moveTo(h+f,c+d);break;case"M":s=h=e[1],a=c=e[2],t.moveTo(h+f,c+d);break;case"c":i=h+e[5],r=c+e[6],l=h+e[3],u=c+e[4],t.bezierCurveTo(h+e[1]+f,c+e[2]+d,l+f,u+d,i+f,r+d),h=i,c=r;break;case"C":h=e[5],c=e[6],l=e[3],u=e[4],t.bezierCurveTo(e[1]+f,e[2]+d,l+f,u+d,h+f,c+d);break;case"s":i=h+e[3],r=c+e[4],null===n[0].match(/[CcSs]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.bezierCurveTo(l+f,u+d,h+e[1]+f,c+e[2]+d,i+f,r+d),l=h+e[1],u=c+e[2],h=i,c=r;break;case"S":i=e[3],r=e[4],null===n[0].match(/[CcSs]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.bezierCurveTo(l+f,u+d,e[1]+f,e[2]+d,i+f,r+d),h=i,c=r,l=e[1],u=e[2];break;case"q":i=h+e[3],r=c+e[4],l=h+e[1],u=c+e[2],t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r;break;case"Q":i=e[3],r=e[4],t.quadraticCurveTo(e[1]+f,e[2]+d,i+f,r+d),h=i,c=r,l=e[1],u=e[2];break;case"t":i=h+e[1],r=c+e[2],null===n[0].match(/[QqTt]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r;break;case"T":i=e[1],r=e[2],null===n[0].match(/[QqTt]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r;break;case"a":o(t,h+f,c+d,[e[1],e[2],e[3],e[4],e[5],e[6]+h+f,e[7]+c+d]),h+=e[6],c+=e[7];break;case"A":o(t,h+f,c+d,[e[1],e[2],e[3],e[4],e[5],e[6]+f,e[7]+d]),h=e[6],c=e[7];break;case"z":case"Z":h=s,c=a,t.closePath()}n=e}},_render:function(t){this._renderPathCommands(t),this._renderFill(t),this._renderStroke(t)},toString:function(){return"#<fabric.Path ("+this.complexity()+'): { "top": '+this.top+', "left": '+this.left+" }>"},toObject:function(t){return n(this.callSuper("toObject",["sourcePath","pathOffset"].concat(t)),{path:this.path.map(function(t){return t.slice()}),top:this.top,left:this.left})},toDatalessObject:function(t){var e=this.toObject(t);return this.sourcePath&&(e.path=this.sourcePath),delete e.sourcePath,e},toSVG:function(t){for(var e=[],i=this._createBaseSVGMarkup(),r="",n=0,s=this.path.length;n<s;n++)e.push(this.path[n].join(" "));var o=e.join(" ");return this.group&&"path-group"===this.group.type||(r=" translate("+-this.pathOffset.x+", "+-this.pathOffset.y+") "),i.push("<path ",this.getSvgId(),'d="',o,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),r,this.getSvgTransformMatrix(),'" stroke-linecap="round" ',"/>\n"),t?t(i.join("")):i.join("")},complexity:function(){return this.path.length},_parsePath:function(){for(var t,e,i,r,n,s=[],o=[],c=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi,l=0,u=this.path.length;l<u;l++){for(r=(t=this.path[l]).slice(1).trim(),o.length=0;i=c.exec(r);)o.push(i[0]);n=[t.charAt(0)];for(var f=0,d=o.length;f<d;f++)e=parseFloat(o[f]),isNaN(e)||n.push(e);var g=n[0],p=a[g.toLowerCase()],v=h[g]||g;if(n.length-1>p)for(var b=1,m=n.length;b<m;b+=p)s.push([g].concat(n.slice(b,b+p))),g=v;else s.push(n)}return s},_parseDimensions:function(){for(var t,n,s,o,a=[],h=[],c=null,l=0,u=0,f=0,d=0,g=0,p=0,v=0,b=this.path.length;v<b;++v){switch((t=this.path[v])[0]){case"l":f+=t[1],d+=t[2],o=[];break;case"L":f=t[1],d=t[2],o=[];break;case"h":f+=t[1],o=[];break;case"H":f=t[1],o=[];break;case"v":d+=t[1],o=[];break;case"V":d=t[1],o=[];break;case"m":l=f+=t[1],u=d+=t[2],o=[];break;case"M":l=f=t[1],u=d=t[2],o=[];break;case"c":n=f+t[5],s=d+t[6],g=f+t[3],p=d+t[4],o=e.util.getBoundsOfCurve(f,d,f+t[1],d+t[2],g,p,n,s),f=n,d=s;break;case"C":g=t[3],p=t[4],o=e.util.getBoundsOfCurve(f,d,t[1],t[2],g,p,t[5],t[6]),f=t[5],d=t[6];break;case"s":n=f+t[3],s=d+t[4],null===c[0].match(/[CcSs]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,f+t[1],d+t[2],n,s),g=f+t[1],p=d+t[2],f=n,d=s;break;case"S":n=t[3],s=t[4],null===c[0].match(/[CcSs]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,t[1],t[2],n,s),f=n,d=s,g=t[1],p=t[2];break;case"q":n=f+t[3],s=d+t[4],g=f+t[1],p=d+t[2],o=e.util.getBoundsOfCurve(f,d,g,p,g,p,n,s),f=n,d=s;break;case"Q":g=t[1],p=t[2],o=e.util.getBoundsOfCurve(f,d,g,p,g,p,t[3],t[4]),f=t[3],d=t[4];break;case"t":n=f+t[1],s=d+t[2],null===c[0].match(/[QqTt]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,g,p,n,s),f=n,d=s;break;case"T":n=t[1],s=t[2],null===c[0].match(/[QqTt]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,g,p,n,s),f=n,d=s;break;case"a":o=e.util.getBoundsOfArc(f,d,t[1],t[2],t[3],t[4],t[5],t[6]+f,t[7]+d),f+=t[6],d+=t[7];break;case"A":o=e.util.getBoundsOfArc(f,d,t[1],t[2],t[3],t[4],t[5],t[6],t[7]),f=t[6],d=t[7];break;case"z":case"Z":f=l,d=u}c=t,o.forEach(function(t){a.push(t.x),h.push(t.y)}),a.push(f),h.push(d)}var m=i(a)||0,_=i(h)||0;return{left:m,top:_,width:(r(a)||0)-m,height:(r(h)||0)-_}}}),e.Path.fromObject=function(t,i,r){var n;if("string"!=typeof t.path)return e.Object._fromObject("Path",t,i,r,"path");e.loadSVGFromURL(t.path,function(e){var r=t.path;n=e[0],delete t.path,n.setOptions(t),n.setSourcePath(r),i&&i(n)})},e.Path.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(["d"]),e.Path.fromElement=function(t,i,r){var s=e.parseAttributes(t,e.Path.ATTRIBUTE_NAMES);i&&i(new e.Path(s.d,n(s,r)))},e.Path.async=!0}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.PathGroup?e.warn("fabric.PathGroup is already defined"):(e.PathGroup=e.util.createClass(e.Object,{type:"path-group",fill:"",cacheProperties:[],initialize:function(t,e){e=e||{},this.paths=t||[];for(var i=this.paths.length;i--;)this.paths[i].group=this;e.toBeParsed&&(this.parseDimensionsFromPaths(e),delete e.toBeParsed),this.setOptions(e),this.setCoords()},parseDimensionsFromPaths:function(t){for(var i,r,n,s,o,a,h=[],c=[],l=this.paths.length;l--;){s=(n=this.paths[l]).height+n.strokeWidth,o=n.width+n.strokeWidth,i=[{x:n.left,y:n.top},{x:n.left+o,y:n.top},{x:n.left,y:n.top+s},{x:n.left+o,y:n.top+s}],a=this.paths[l].transformMatrix;for(var u=0;u<i.length;u++)r=i[u],a&&(r=e.util.transformPoint(r,a,!1)),h.push(r.x),c.push(r.y)}t.width=Math.max.apply(null,h),t.height=Math.max.apply(null,c)},drawObject:function(t){t.save(),t.translate(-this.width/2,-this.height/2);for(var e=0,i=this.paths.length;e<i;++e)this.paths[e].render(t,!0);t.restore()},shouldCache:function(){var t=this.objectCaching&&(!this.group||this.needsItsOwnCache()||!this.group.isCaching());if(this.caching=t,t)for(var e=0,i=this.paths.length;e<i;e++)if(this.paths[e].willDrawShadow())return this.caching=!1,!1;return t},willDrawShadow:function(){if(this.shadow)return!0;for(var t=0,e=this.paths.length;t<e;t++)if(this.paths[t].willDrawShadow())return!0;return!1},isCaching:function(){return this.caching||this.group&&this.group.isCaching()},isCacheDirty:function(){if(this.callSuper("isCacheDirty"))return!0;if(!this.statefullCache)return!1;for(var t=0,e=this.paths.length;t<e;t++)if(this.paths[t].isCacheDirty(!0)){if(this._cacheCanvas){var i=this.cacheWidth/this.zoomX,r=this.cacheHeight/this.zoomY;this._cacheContext.clearRect(-i/2,-r/2,i,r)}return!0}return!1},_set:function(t,e){if("fill"===t&&e&&this.isSameColor())for(var i=this.paths.length;i--;)this.paths[i]._set(t,e);return this.callSuper("_set",t,e)},toObject:function(t){var e=this.paths.map(function(e){var i=e.includeDefaultValues;e.includeDefaultValues=e.group.includeDefaultValues;var r=e.toObject(t);return e.includeDefaultValues=i,r});return i(this.callSuper("toObject",["sourcePath"].concat(t)),{paths:e})},toDatalessObject:function(t){var e=this.toObject(t);return this.sourcePath&&(e.paths=this.sourcePath),e},toSVG:function(t){var e=this.getObjects(),i=this.getPointByOrigin("left","top"),r="translate("+i.x+" "+i.y+")",n=this._createBaseSVGMarkup();n.push("<g ",this.getSvgId(),'style="',this.getSvgStyles(),'" ','transform="',this.getSvgTransformMatrix(),r,this.getSvgTransform(),'" ',">\n");for(var s=0,o=e.length;s<o;s++)n.push("\t",e[s].toSVG(t));return n.push("</g>\n"),t?t(n.join("")):n.join("")},toString:function(){return"#<fabric.PathGroup ("+this.complexity()+"): { top: "+this.top+", left: "+this.left+" }>"},isSameColor:function(){var t=this.getObjects()[0].get("fill")||"";return"string"==typeof t&&(t=t.toLowerCase(),this.getObjects().every(function(e){var i=e.get("fill")||"";return"string"==typeof i&&i.toLowerCase()===t}))},complexity:function(){return this.paths.reduce(function(t,e){return t+(e&&e.complexity?e.complexity():0)},0)},getObjects:function(){return this.paths}}),e.PathGroup.fromObject=function(t,i){var r=t.paths;delete t.paths,"string"==typeof r?e.loadSVGFromURL(r,function(n){var s=r,o=e.util.groupSVGElements(n,t,s);t.paths=r,i(o)}):e.util.enlivenObjects(r,function(n){var s=new e.PathGroup(n,t);t.paths=r,i(s)})},e.PathGroup.async=!0)}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.array.min,n=e.util.array.max;if(!e.Group){var s={lockMovementX:!0,lockMovementY:!0,lockRotation:!0,lockScalingX:!0,lockScalingY:!0,lockUniScaling:!0};e.Group=e.util.createClass(e.Object,e.Collection,{type:"group",strokeWidth:0,subTargetCheck:!1,cacheProperties:[],initialize:function(t,e,i){e=e||{},this._objects=[],i&&this.callSuper("initialize",e),this._objects=t||[];for(var r=this._objects.length;r--;)this._objects[r].group=this;e.originX&&(this.originX=e.originX),e.originY&&(this.originY=e.originY),i?this._updateObjectsCoords(!0):(this._calcBounds(),this._updateObjectsCoords(),this.callSuper("initialize",e)),this.setCoords(),this.saveCoords()},_updateObjectsCoords:function(t){for(var e=this.getCenterPoint(),i=this._objects.length;i--;)this._updateObjectCoords(this._objects[i],e,t)},_updateObjectCoords:function(t,e,i){if(t.__origHasControls=t.hasControls,t.hasControls=!1,!i){var r=t.getLeft(),n=t.getTop();t.set({left:r-e.x,top:n-e.y}),t.setCoords(!0,!0)}},toString:function(){return"#<fabric.Group: ("+this.complexity()+")>"},addWithUpdate:function(t){return this._restoreObjectsState(),e.util.resetObjectTransform(this),t&&(this._objects.push(t),t.group=this,t._set("canvas",this.canvas)),this.forEachObject(this._setObjectActive,this),this._calcBounds(),this._updateObjectsCoords(),this.setCoords(),this.dirty=!0,this},_setObjectActive:function(t){t.set("active",!0),t.group=this},removeWithUpdate:function(t){return this._restoreObjectsState(),e.util.resetObjectTransform(this),this.forEachObject(this._setObjectActive,this),this.remove(t),this._calcBounds(),this._updateObjectsCoords(),this.setCoords(),this.dirty=!0,this},_onObjectAdded:function(t){this.dirty=!0,t.group=this,t._set("canvas",this.canvas)},_onObjectRemoved:function(t){this.dirty=!0,delete t.group,t.set("active",!1)},delegatedProperties:{fill:!0,stroke:!0,strokeWidth:!0,fontFamily:!0,fontWeight:!0,fontSize:!0,fontStyle:!0,lineHeight:!0,textDecoration:!0,textAlign:!0,backgroundColor:!0},_set:function(t,e){var i=this._objects.length;if(this.delegatedProperties[t]||"canvas"===t)for(;i--;)this._objects[i].set(t,e);else for(;i--;)this._objects[i].setOnGroup(t,e);this.callSuper("_set",t,e)},toObject:function(t){var e=this.getObjects().map(function(e){var i=e.includeDefaultValues;e.includeDefaultValues=e.group.includeDefaultValues;var r=e.toObject(t);return e.includeDefaultValues=i,r});return i(this.callSuper("toObject",t),{objects:e})},toDatalessObject:function(t){var e=this.getObjects().map(function(e){var i=e.includeDefaultValues;e.includeDefaultValues=e.group.includeDefaultValues;var r=e.toDatalessObject(t);return e.includeDefaultValues=i,r});return i(this.callSuper("toDatalessObject",t),{objects:e})},render:function(t){this._transformDone=!0,this.callSuper("render",t),this._transformDone=!1},shouldCache:function(){var t=this.objectCaching&&(!this.group||this.needsItsOwnCache()||!this.group.isCaching());if(this.caching=t,t)for(var e=0,i=this._objects.length;e<i;e++)if(this._objects[e].willDrawShadow())return this.caching=!1,!1;return t},willDrawShadow:function(){if(this.callSuper("willDrawShadow"))return!0;for(var t=0,e=this._objects.length;t<e;t++)if(this._objects[t].willDrawShadow())return!0;return!1},isCaching:function(){return this.caching||this.group&&this.group.isCaching()},drawObject:function(t){for(var e=0,i=this._objects.length;e<i;e++)this._renderObject(this._objects[e],t)},isCacheDirty:function(){if(this.callSuper("isCacheDirty"))return!0;if(!this.statefullCache)return!1;for(var t=0,e=this._objects.length;t<e;t++)if(this._objects[t].isCacheDirty(!0)){if(this._cacheCanvas){var i=this.cacheWidth/this.zoomX,r=this.cacheHeight/this.zoomY;this._cacheContext.clearRect(-i/2,-r/2,i,r)}return!0}return!1},_renderControls:function(t,e){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,this.callSuper("_renderControls",t,e);for(var i=0,r=this._objects.length;i<r;i++)this._objects[i]._renderControls(t);t.restore()},_renderObject:function(t,e){if(t.visible){var i=t.hasRotatingPoint;t.hasRotatingPoint=!1,t.render(e),t.hasRotatingPoint=i}},_restoreObjectsState:function(){return this._objects.forEach(this._restoreObjectState,this),this},realizeTransform:function(t){var i=t.calcTransformMatrix(),r=e.util.qrDecompose(i),n=new e.Point(r.translateX,r.translateY);return t.flipX=!1,t.flipY=!1,t.set("scaleX",r.scaleX),t.set("scaleY",r.scaleY),t.skewX=r.skewX,t.skewY=r.skewY,t.angle=r.angle,t.setPositionByOrigin(n,"center","center"),t},_restoreObjectState:function(t){return this.realizeTransform(t),t.setCoords(),t.hasControls=t.__origHasControls,delete t.__origHasControls,t.set("active",!1),delete t.group,this},destroy:function(){return this._objects.forEach(function(t){t.set("dirty",!0)}),this._restoreObjectsState()},saveCoords:function(){return this._originalLeft=this.get("left"),this._originalTop=this.get("top"),this},hasMoved:function(){return this._originalLeft!==this.get("left")||this._originalTop!==this.get("top")},setObjectsCoords:function(){return this.forEachObject(function(t){t.setCoords(!0,!0)}),this},_calcBounds:function(t){for(var e,i,r,n=[],s=[],o=["tr","br","bl","tl"],a=0,h=this._objects.length,c=o.length;a<h;++a)for((e=this._objects[a]).setCoords(!0),r=0;r<c;r++)i=o[r],n.push(e.oCoords[i].x),s.push(e.oCoords[i].y);this.set(this._getBounds(n,s,t))},_getBounds:function(t,i,s){var o=new e.Point(r(t),r(i)),a=new e.Point(n(t),n(i)),h={width:a.x-o.x||0,height:a.y-o.y||0};return s||(h.left=o.x||0,h.top=o.y||0,"center"===this.originX&&(h.left+=h.width/2),"right"===this.originX&&(h.left+=h.width),"center"===this.originY&&(h.top+=h.height/2),"bottom"===this.originY&&(h.top+=h.height)),h},toSVG:function(t){var e=this._createBaseSVGMarkup();e.push("<g ",this.getSvgId(),'transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'" style="',this.getSvgFilter(),'">\n');for(var i=0,r=this._objects.length;i<r;i++)e.push("\t",this._objects[i].toSVG(t));return e.push("</g>\n"),t?t(e.join("")):e.join("")},get:function(t){if(t in s){if(this[t])return this[t];for(var e=0,i=this._objects.length;e<i;e++)if(this._objects[e][t])return!0;return!1}return t in this.delegatedProperties?this._objects[0]&&this._objects[0].get(t):this[t]}}),e.Group.fromObject=function(t,i){e.util.enlivenObjects(t.objects,function(r){var n=e.util.object.clone(t,!0);delete n.objects,i&&i(new e.Group(r,n,!0))})},e.Group.async=!0}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=fabric.util.object.extend;if(t.fabric||(t.fabric={}),t.fabric.Image)fabric.warn("fabric.Image is already defined.");else{var i=fabric.Object.prototype.stateProperties.concat();i.push("alignX","alignY","meetOrSlice"),fabric.Image=fabric.util.createClass(fabric.Object,{type:"image",crossOrigin:"",alignX:"none",alignY:"none",meetOrSlice:"meet",strokeWidth:0,_lastScaleX:1,_lastScaleY:1,minimumScaleTrigger:.5,stateProperties:i,objectCaching:!1,initialize:function(t,e,i){e||(e={}),this.filters=[],this.resizeFilters=[],this.callSuper("initialize",e),this._initElement(t,e,i)},getElement:function(){return this._element},setElement:function(t,e,i){var r,n;return this._element=t,this._originalElement=t,this._initConfig(i),0===this.resizeFilters.length?r=e:(n=this,r=function(){n.applyFilters(e,n.resizeFilters,n._filteredEl||n._originalElement,!0)}),0!==this.filters.length?this.applyFilters(r):r&&r(this),this},setCrossOrigin:function(t){return this.crossOrigin=t,this._element.crossOrigin=t,this},getOriginalSize:function(){var t=this.getElement();return{width:t.width,height:t.height}},_stroke:function(t){if(this.stroke&&0!==this.strokeWidth){var e=this.width/2,i=this.height/2;t.beginPath(),t.moveTo(-e,-i),t.lineTo(e,-i),t.lineTo(e,i),t.lineTo(-e,i),t.lineTo(-e,-i),t.closePath()}},_renderDashedStroke:function(t){var e=-this.width/2,i=-this.height/2,r=this.width,n=this.height;t.save(),this._setStrokeStyles(t),t.beginPath(),fabric.util.drawDashedLine(t,e,i,e+r,i,this.strokeDashArray),fabric.util.drawDashedLine(t,e+r,i,e+r,i+n,this.strokeDashArray),fabric.util.drawDashedLine(t,e+r,i+n,e,i+n,this.strokeDashArray),fabric.util.drawDashedLine(t,e,i+n,e,i,this.strokeDashArray),t.closePath(),t.restore()},toObject:function(t){var i=[],r=[],n=1,s=1;this.filters.forEach(function(t){t&&("Resize"===t.type&&(n*=t.scaleX,s*=t.scaleY),i.push(t.toObject()))}),this.resizeFilters.forEach(function(t){t&&r.push(t.toObject())});var o=e(this.callSuper("toObject",["crossOrigin","alignX","alignY","meetOrSlice"].concat(t)),{src:this.getSrc(),filters:i,resizeFilters:r});return o.width/=n,o.height/=s,o},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=-this.width/2,r=-this.height/2,n="none";if(this.group&&"path-group"===this.group.type&&(i=this.left,r=this.top),"none"!==this.alignX&&"none"!==this.alignY&&(n="x"+this.alignX+"Y"+this.alignY+" "+this.meetOrSlice),e.push('<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'">\n',"<image ",this.getSvgId(),'xlink:href="',this.getSvgSrc(!0),'" x="',i,'" y="',r,'" style="',this.getSvgStyles(),'" width="',this.width,'" height="',this.height,'" preserveAspectRatio="',n,'"',"></image>\n"),this.stroke||this.strokeDashArray){var s=this.fill;this.fill=null,e.push("<rect ",'x="',i,'" y="',r,'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'"/>\n'),this.fill=s}return e.push("</g>\n"),t?t(e.join("")):e.join("")},getSrc:function(t){var e=t?this._element:this._originalElement;return e?fabric.isLikelyNode?e._src:e.src:this.src||""},setSrc:function(t,e,i){fabric.util.loadImage(t,function(t){return this.setElement(t,e,i)},this,i&&i.crossOrigin)},toString:function(){return'#<fabric.Image: { src: "'+this.getSrc()+'" }>'},applyFilters:function(t,e,i,r){if(e=e||this.filters,i=i||this._originalElement){var n,s,o=fabric.util.createImage(),a=this.canvas?this.canvas.getRetinaScaling():fabric.devicePixelRatio,h=this.minimumScaleTrigger/a,c=this;if(0===e.length)return this._element=i,t&&t(this),i;var l=fabric.util.createCanvasElement();return l.width=i.width,l.height=i.height,l.getContext("2d").drawImage(i,0,0,i.width,i.height),e.forEach(function(t){t&&(r?(n=c.scaleX<h?c.scaleX:1,s=c.scaleY<h?c.scaleY:1,n*a<1&&(n*=a),s*a<1&&(s*=a)):(n=t.scaleX,s=t.scaleY),t.applyTo(l,n,s),r||"Resize"!==t.type||(c.width*=t.scaleX,c.height*=t.scaleY))}),o.width=l.width,o.height=l.height,fabric.isLikelyNode?(o.src=l.toBuffer(void 0,fabric.Image.pngCompression),c._element=o,!r&&(c._filteredEl=o),t&&t(c)):(o.onload=function(){c._element=o,!r&&(c._filteredEl=o),t&&t(c),o.onload=l=null},o.src=l.toDataURL("image/png")),l}},_render:function(t,e){var i,r,n,s=this._findMargins();i=e?this.left:-this.width/2,r=e?this.top:-this.height/2,"slice"===this.meetOrSlice&&(t.beginPath(),t.rect(i,r,this.width,this.height),t.clip()),!1===this.isMoving&&this.resizeFilters.length&&this._needsResize()?(this._lastScaleX=this.scaleX,this._lastScaleY=this.scaleY,n=this.applyFilters(null,this.resizeFilters,this._filteredEl||this._originalElement,!0)):n=this._element,n&&t.drawImage(n,i+s.marginX,r+s.marginY,s.width,s.height),this._stroke(t),this._renderStroke(t)},_needsResize:function(){return this.scaleX!==this._lastScaleX||this.scaleY!==this._lastScaleY},_findMargins:function(){var t,e,i=this.width,r=this.height,n=0,s=0;return"none"===this.alignX&&"none"===this.alignY||(t=[this.width/this._element.width,this.height/this._element.height],e="meet"===this.meetOrSlice?Math.min.apply(null,t):Math.max.apply(null,t),i=this._element.width*e,r=this._element.height*e,"Mid"===this.alignX&&(n=(this.width-i)/2),"Max"===this.alignX&&(n=this.width-i),"Mid"===this.alignY&&(s=(this.height-r)/2),"Max"===this.alignY&&(s=this.height-r)),{width:i,height:r,marginX:n,marginY:s}},_resetWidthHeight:function(){var t=this.getElement();this.set("width",t.width),this.set("height",t.height)},_initElement:function(t,e,i){this.setElement(fabric.util.getById(t),i,e),fabric.util.addClass(this.getElement(),fabric.Image.CSS_CANVAS)},_initConfig:function(t){t||(t={}),this.setOptions(t),this._setWidthHeight(t),this._element&&this.crossOrigin&&(this._element.crossOrigin=this.crossOrigin)},_initFilters:function(t,e){t&&t.length?fabric.util.enlivenObjects(t,function(t){e&&e(t)},"fabric.Image.filters"):e&&e()},_setWidthHeight:function(t){this.width="width"in t?t.width:this.getElement()?this.getElement().width||0:0,this.height="height"in t?t.height:this.getElement()?this.getElement().height||0:0}}),fabric.Image.CSS_CANVAS="canvas-img",fabric.Image.prototype.getSvgSrc=fabric.Image.prototype.getSrc,fabric.Image.fromObject=function(t,e){fabric.util.loadImage(t.src,function(i,r){r?e&&e(null,r):fabric.Image.prototype._initFilters.call(t,t.filters,function(r){t.filters=r||[],fabric.Image.prototype._initFilters.call(t,t.resizeFilters,function(r){return t.resizeFilters=r||[],new fabric.Image(i,t,e)})})},null,t.crossOrigin)},fabric.Image.fromURL=function(t,e,i){fabric.util.loadImage(t,function(t){e&&e(new fabric.Image(t,i))},null,i&&i.crossOrigin)},fabric.Image.ATTRIBUTE_NAMES=fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin".split(" ")),fabric.Image.fromElement=function(t,i,r){var n,s=fabric.parseAttributes(t,fabric.Image.ATTRIBUTE_NAMES);s.preserveAspectRatio&&(n=fabric.util.parsePreserveAspectRatioAttribute(s.preserveAspectRatio),e(s,n)),fabric.Image.fromURL(s["xlink:href"],i,e(r?fabric.util.object.clone(r):{},s))},fabric.Image.async=!0,fabric.Image.pngCompression=1}}("undefined"!=typeof exports?exports:this),fabric.util.object.extend(fabric.Object.prototype,{_getAngleValueForStraighten:function(){var t=this.getAngle()%360;return t>0?90*Math.round((t-1)/90):90*Math.round(t/90)},straighten:function(){return this.setAngle(this._getAngleValueForStraighten()),this},fxStraighten:function(t){var e=function(){},i=(t=t||{}).onComplete||e,r=t.onChange||e,n=this;return fabric.util.animate({startValue:this.get("angle"),endValue:this._getAngleValueForStraighten(),duration:this.FX_DURATION,onChange:function(t){n.setAngle(t),r()},onComplete:function(){n.setCoords(),i()},onStart:function(){n.set("active",!1)}}),this}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{straightenObject:function(t){return t.straighten(),this.renderAll(),this},fxStraightenObject:function(t){return t.fxStraighten({onChange:this.renderAll.bind(this)}),this}}),fabric.Image.filters=fabric.Image.filters||{},fabric.Image.filters.BaseFilter=fabric.util.createClass({type:"BaseFilter",initialize:function(t){t&&this.setOptions(t)},setOptions:function(t){for(var e in t)this[e]=t[e]},toObject:function(){return{type:this.type}},toJSON:function(){return this.toObject()}}),fabric.Image.filters.BaseFilter.fromObject=function(t,e){var i=new fabric.Image.filters[t.type](t);return e&&e(i),i},function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Brightness=n(r.BaseFilter,{type:"Brightness",initialize:function(t){t=t||{},this.brightness=t.brightness||0},applyTo:function(t){for(var e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height),r=i.data,n=this.brightness,s=0,o=r.length;s<o;s+=4)r[s]+=n,r[s+1]+=n,r[s+2]+=n;e.putImageData(i,0,0)},toObject:function(){return i(this.callSuper("toObject"),{brightness:this.brightness})}}),e.Image.filters.Brightness.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Convolute=n(r.BaseFilter,{type:"Convolute",initialize:function(t){t=t||{},this.opaque=t.opaque,this.matrix=t.matrix||[0,0,0,0,1,0,0,0,0]},applyTo:function(t){for(var e,i,r,n,s,o,a,h,c,l=this.matrix,u=t.getContext("2d"),f=u.getImageData(0,0,t.width,t.height),d=Math.round(Math.sqrt(l.length)),g=Math.floor(d/2),p=f.data,v=f.width,b=f.height,m=u.createImageData(v,b),_=m.data,y=this.opaque?1:0,x=0;x<b;x++)for(var C=0;C<v;C++){s=4*(x*v+C),e=0,i=0,r=0,n=0;for(var S=0;S<d;S++)for(var w=0;w<d;w++)o=C+w-g,(a=x+S-g)<0||a>b||o<0||o>v||(h=4*(a*v+o),c=l[S*d+w],e+=p[h]*c,i+=p[h+1]*c,r+=p[h+2]*c,n+=p[h+3]*c);_[s]=e,_[s+1]=i,_[s+2]=r,_[s+3]=n+y*(255-n)}u.putImageData(m,0,0)},toObject:function(){return i(this.callSuper("toObject"),{opaque:this.opaque,matrix:this.matrix})}}),e.Image.filters.Convolute.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.GradientTransparency=n(r.BaseFilter,{type:"GradientTransparency",initialize:function(t){t=t||{},this.threshold=t.threshold||100},applyTo:function(t){for(var e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height),r=i.data,n=this.threshold,s=r.length,o=0,a=r.length;o<a;o+=4)r[o+3]=n+255*(s-o)/s;e.putImageData(i,0,0)},toObject:function(){return i(this.callSuper("toObject"),{threshold:this.threshold})}}),e.Image.filters.GradientTransparency.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Grayscale=r(i.BaseFilter,{type:"Grayscale",applyTo:function(t){for(var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),n=r.data,s=r.width*r.height*4,o=0;o<s;)e=(n[o]+n[o+1]+n[o+2])/3,n[o]=e,n[o+1]=e,n[o+2]=e,o+=4;i.putImageData(r,0,0)}}),e.Image.filters.Grayscale.fromObject=function(t,i){return t=t||{},t.type="Grayscale",e.Image.filters.BaseFilter.fromObject(t,i)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Invert=r(i.BaseFilter,{type:"Invert",applyTo:function(t){var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),n=r.data,s=n.length;for(e=0;e<s;e+=4)n[e]=255-n[e],n[e+1]=255-n[e+1],n[e+2]=255-n[e+2];i.putImageData(r,0,0)}}),e.Image.filters.Invert.fromObject=function(t,i){return t=t||{},t.type="Invert",e.Image.filters.BaseFilter.fromObject(t,i)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Mask=n(r.BaseFilter,{type:"Mask",initialize:function(t){t=t||{},this.mask=t.mask,this.channel=[0,1,2,3].indexOf(t.channel)>-1?t.channel:0},applyTo:function(t){if(this.mask){var i,r=t.getContext("2d"),n=r.getImageData(0,0,t.width,t.height),s=n.data,o=this.mask.getElement(),a=e.util.createCanvasElement(),h=this.channel,c=n.width*n.height*4;a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(o,0,0,t.width,t.height);var l=a.getContext("2d").getImageData(0,0,t.width,t.height).data;for(i=0;i<c;i+=4)s[i+3]=l[i+h];r.putImageData(n,0,0)}},toObject:function(){return i(this.callSuper("toObject"),{mask:this.mask.toObject(),channel:this.channel})}}),e.Image.filters.Mask.fromObject=function(t,i){e.util.loadImage(t.mask.src,function(r){return t.mask=new e.Image(r,t.mask),e.Image.filters.BaseFilter.fromObject(t,i)})},e.Image.filters.Mask.async=!0}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Noise=n(r.BaseFilter,{type:"Noise",initialize:function(t){t=t||{},this.noise=t.noise||0},applyTo:function(t){for(var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),n=r.data,s=this.noise,o=0,a=n.length;o<a;o+=4)e=(.5-Math.random())*s,n[o]+=e,n[o+1]+=e,n[o+2]+=e;i.putImageData(r,0,0)},toObject:function(){return i(this.callSuper("toObject"),{noise:this.noise})}}),e.Image.filters.Noise.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Pixelate=n(r.BaseFilter,{type:"Pixelate",initialize:function(t){t=t||{},this.blocksize=t.blocksize||4},applyTo:function(t){var e,i,r,n,s,o,a,h=t.getContext("2d"),c=h.getImageData(0,0,t.width,t.height),l=c.data,u=c.height,f=c.width;for(i=0;i<u;i+=this.blocksize)for(r=0;r<f;r+=this.blocksize){n=l[e=4*i*f+4*r],s=l[e+1],o=l[e+2],a=l[e+3];for(var d=i,g=i+this.blocksize;d<g;d++)for(var p=r,v=r+this.blocksize;p<v;p++)l[e=4*d*f+4*p]=n,l[e+1]=s,l[e+2]=o,l[e+3]=a}h.putImageData(c,0,0)},toObject:function(){return i(this.callSuper("toObject"),{blocksize:this.blocksize})}}),e.Image.filters.Pixelate.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.RemoveWhite=n(r.BaseFilter,{type:"RemoveWhite",initialize:function(t){t=t||{},this.threshold=t.threshold||30,this.distance=t.distance||20},applyTo:function(t){for(var e,i,r,n=t.getContext("2d"),s=n.getImageData(0,0,t.width,t.height),o=s.data,a=this.threshold,h=this.distance,c=255-a,l=Math.abs,u=0,f=o.length;u<f;u+=4)e=o[u],i=o[u+1],r=o[u+2],e>c&&i>c&&r>c&&l(e-i)<h&&l(e-r)<h&&l(i-r)<h&&(o[u+3]=0);n.putImageData(s,0,0)},toObject:function(){return i(this.callSuper("toObject"),{threshold:this.threshold,distance:this.distance})}}),e.Image.filters.RemoveWhite.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Sepia=r(i.BaseFilter,{type:"Sepia",applyTo:function(t){var e,i,r=t.getContext("2d"),n=r.getImageData(0,0,t.width,t.height),s=n.data,o=s.length;for(e=0;e<o;e+=4)i=.3*s[e]+.59*s[e+1]+.11*s[e+2],s[e]=i+100,s[e+1]=i+50,s[e+2]=i+255;r.putImageData(n,0,0)}}),e.Image.filters.Sepia.fromObject=function(t,i){return t=t||{},t.type="Sepia",new e.Image.filters.BaseFilter.fromObject(t,i)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.Image.filters,r=e.util.createClass;i.Sepia2=r(i.BaseFilter,{type:"Sepia2",applyTo:function(t){var e,i,r,n,s=t.getContext("2d"),o=s.getImageData(0,0,t.width,t.height),a=o.data,h=a.length;for(e=0;e<h;e+=4)i=a[e],r=a[e+1],n=a[e+2],a[e]=(.393*i+.769*r+.189*n)/1.351,a[e+1]=(.349*i+.686*r+.168*n)/1.203,a[e+2]=(.272*i+.534*r+.131*n)/2.14;s.putImageData(o,0,0)}}),e.Image.filters.Sepia2.fromObject=function(t,i){return t=t||{},t.type="Sepia2",new e.Image.filters.BaseFilter.fromObject(t,i)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Tint=n(r.BaseFilter,{type:"Tint",initialize:function(t){t=t||{},this.color=t.color||"#000000",this.opacity=void 0!==t.opacity?t.opacity:new e.Color(this.color).getAlpha()},applyTo:function(t){var i,r,n,s,o,a,h,c,l,u=t.getContext("2d"),f=u.getImageData(0,0,t.width,t.height),d=f.data,g=d.length;for(r=(l=new e.Color(this.color).getSource())[0]*this.opacity,n=l[1]*this.opacity,s=l[2]*this.opacity,c=1-this.opacity,i=0;i<g;i+=4)o=d[i],a=d[i+1],h=d[i+2],d[i]=r+o*c,d[i+1]=n+a*c,d[i+2]=s+h*c;u.putImageData(f,0,0)},toObject:function(){return i(this.callSuper("toObject"),{color:this.color,opacity:this.opacity})}}),e.Image.filters.Tint.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Multiply=n(r.BaseFilter,{type:"Multiply",initialize:function(t){t=t||{},this.color=t.color||"#000000"},applyTo:function(t){var i,r,n=t.getContext("2d"),s=n.getImageData(0,0,t.width,t.height),o=s.data,a=o.length;for(r=new e.Color(this.color).getSource(),i=0;i<a;i+=4)o[i]*=r[0]/255,o[i+1]*=r[1]/255,o[i+2]*=r[2]/255;n.putImageData(s,0,0)},toObject:function(){return i(this.callSuper("toObject"),{color:this.color})}}),e.Image.filters.Multiply.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric,i=e.Image.filters,r=e.util.createClass;i.Blend=r(i.BaseFilter,{type:"Blend",initialize:function(t){t=t||{},this.color=t.color||"#000",this.image=t.image||!1,this.mode=t.mode||"multiply",this.alpha=t.alpha||1},applyTo:function(t){var i,r,n,s,o,a,h,c,l,u,f=t.getContext("2d"),d=f.getImageData(0,0,t.width,t.height),g=d.data,p=!1;if(this.image){p=!0;var v=e.util.createCanvasElement();v.width=this.image.width,v.height=this.image.height;var b=new e.StaticCanvas(v);b.add(this.image),u=b.getContext("2d").getImageData(0,0,b.width,b.height).data}else i=(u=new e.Color(this.color).getSource())[0]*this.alpha,r=u[1]*this.alpha,n=u[2]*this.alpha;for(var m=0,_=g.length;m<_;m+=4)switch(s=g[m],o=g[m+1],a=g[m+2],p&&(i=u[m]*this.alpha,r=u[m+1]*this.alpha,n=u[m+2]*this.alpha),this.mode){case"multiply":g[m]=s*i/255,g[m+1]=o*r/255,g[m+2]=a*n/255;break;case"screen":g[m]=1-(1-s)*(1-i),g[m+1]=1-(1-o)*(1-r),g[m+2]=1-(1-a)*(1-n);break;case"add":g[m]=Math.min(255,s+i),g[m+1]=Math.min(255,o+r),g[m+2]=Math.min(255,a+n);break;case"diff":case"difference":g[m]=Math.abs(s-i),g[m+1]=Math.abs(o-r),g[m+2]=Math.abs(a-n);break;case"subtract":h=s-i,c=o-r,l=a-n,g[m]=h<0?0:h,g[m+1]=c<0?0:c,g[m+2]=l<0?0:l;break;case"darken":g[m]=Math.min(s,i),g[m+1]=Math.min(o,r),g[m+2]=Math.min(a,n);break;case"lighten":g[m]=Math.max(s,i),g[m+1]=Math.max(o,r),g[m+2]=Math.max(a,n)}f.putImageData(d,0,0)},toObject:function(){return{color:this.color,image:this.image,mode:this.mode,alpha:this.alpha}}}),e.Image.filters.Blend.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=Math.pow,r=Math.floor,n=Math.sqrt,s=Math.abs,o=Math.max,a=Math.round,h=Math.sin,c=Math.ceil,l=e.Image.filters,u=e.util.createClass;l.Resize=u(l.BaseFilter,{type:"Resize",resizeType:"hermite",scaleX:0,scaleY:0,lanczosLobes:3,applyTo:function(t,e,i){if(1!==e||1!==i){this.rcpScaleX=1/e,this.rcpScaleY=1/i;var r,n=t.width,s=t.height,o=a(n*e),h=a(s*i);"sliceHack"===this.resizeType&&(r=this.sliceByTwo(t,n,s,o,h)),"hermite"===this.resizeType&&(r=this.hermiteFastResize(t,n,s,o,h)),"bilinear"===this.resizeType&&(r=this.bilinearFiltering(t,n,s,o,h)),"lanczos"===this.resizeType&&(r=this.lanczosResize(t,n,s,o,h)),t.width=o,t.height=h,t.getContext("2d").putImageData(r,0,0)}},sliceByTwo:function(t,i,n,s,a){var h,c=t.getContext("2d"),l=.5,u=.5,f=1,d=1,g=!1,p=!1,v=i,b=n,m=e.util.createCanvasElement(),_=m.getContext("2d");for(s=r(s),a=r(a),m.width=o(s,i),m.height=o(a,n),s>i&&(l=2,f=-1),a>n&&(u=2,d=-1),h=c.getImageData(0,0,i,n),t.width=o(s,i),t.height=o(a,n),c.putImageData(h,0,0);!g||!p;)i=v,n=b,s*f<r(v*l*f)?v=r(v*l):(v=s,g=!0),a*d<r(b*u*d)?b=r(b*u):(b=a,p=!0),h=c.getImageData(0,0,i,n),_.putImageData(h,0,0),c.clearRect(0,0,v,b),c.drawImage(m,0,0,i,n,0,0,v,b);return c.getImageData(0,0,s,a)},lanczosResize:function(t,e,o,a,l){function u(t){var h,c,f,d,j,k,M,D,P,A,E;for(O.x=(t+.5)*m,T.x=r(O.x),h=0;h<l;h++){for(O.y=(h+.5)*_,T.y=r(O.y),j=0,k=0,M=0,D=0,P=0,c=T.x-C;c<=T.x+C;c++)if(!(c<0||c>=e)){A=r(1e3*s(c-O.x)),w[A]||(w[A]={});for(var I=T.y-S;I<=T.y+S;I++)I<0||I>=o||(E=r(1e3*s(I-O.y)),w[A][E]||(w[A][E]=b(n(i(A*y,2)+i(E*x,2))/1e3)),(f=w[A][E])>0&&(j+=f,k+=f*p[d=4*(I*e+c)],M+=f*p[d+1],D+=f*p[d+2],P+=f*p[d+3]))}v[d=4*(h*a+t)]=k/j,v[d+1]=M/j,v[d+2]=D/j,v[d+3]=P/j}return++t<a?u(t):g}var f=t.getContext("2d"),d=f.getImageData(0,0,e,o),g=f.getImageData(0,0,a,l),p=d.data,v=g.data,b=function(t){return function(e){if(e>t)return 0;if(e*=Math.PI,s(e)<1e-16)return 1;var i=e/t;return h(e)*h(i)/e/i}}(this.lanczosLobes),m=this.rcpScaleX,_=this.rcpScaleY,y=2/this.rcpScaleX,x=2/this.rcpScaleY,C=c(m*this.lanczosLobes/2),S=c(_*this.lanczosLobes/2),w={},O={},T={};return u(0)},bilinearFiltering:function(t,e,i,n,s){var o,a,h,c,l,u,f,d,g,p=0,v=this.rcpScaleX,b=this.rcpScaleY,m=t.getContext("2d"),_=4*(e-1),y=m.getImageData(0,0,e,i).data,x=m.getImageData(0,0,n,s),C=x.data;for(h=0;h<s;h++)for(c=0;c<n;c++)for(l=v*c-(o=r(v*c)),u=b*h-(a=r(b*h)),g=4*(a*e+o),f=0;f<4;f++)d=y[g+f]*(1-l)*(1-u)+y[g+4+f]*l*(1-u)+y[g+_+f]*u*(1-l)+y[g+_+4+f]*l*u,C[p++]=d;return x},hermiteFastResize:function(t,e,i,o,a){for(var h=this.rcpScaleX,l=this.rcpScaleY,u=c(h/2),f=c(l/2),d=t.getContext("2d"),g=d.getImageData(0,0,e,i).data,p=d.getImageData(0,0,o,a),v=p.data,b=0;b<a;b++)for(var m=0;m<o;m++){for(var _=4*(m+b*o),y=0,x=0,C=0,S=0,w=0,O=0,T=0,j=(b+.5)*l,k=r(b*l);k<(b+1)*l;k++)for(var M=s(j-(k+.5))/f,D=(m+.5)*h,P=M*M,A=r(m*h);A<(m+1)*h;A++){var E=s(D-(A+.5))/u,I=n(P+E*E);I>1&&I<-1||(y=2*I*I*I-3*I*I+1)>0&&(T+=y*g[(E=4*(A+k*e))+3],C+=y,g[E+3]<255&&(y=y*g[E+3]/250),S+=y*g[E],w+=y*g[E+1],O+=y*g[E+2],x+=y)}v[_]=S/x,v[_+1]=w/x,v[_+2]=O/x,v[_+3]=T/C}return p},toObject:function(){return{type:this.type,scaleX:this.scaleX,scaleY:this.scaleY,resizeType:this.resizeType,lanczosLobes:this.lanczosLobes}}}),e.Image.filters.Resize.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.ColorMatrix=n(r.BaseFilter,{type:"ColorMatrix",initialize:function(t){t||(t={}),this.matrix=t.matrix||[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]},applyTo:function(t){var e,i,r,n,s,o=t.getContext("2d"),a=o.getImageData(0,0,t.width,t.height),h=a.data,c=h.length,l=this.matrix;for(e=0;e<c;e+=4)i=h[e],r=h[e+1],n=h[e+2],s=h[e+3],h[e]=i*l[0]+r*l[1]+n*l[2]+s*l[3]+l[4],h[e+1]=i*l[5]+r*l[6]+n*l[7]+s*l[8]+l[9],h[e+2]=i*l[10]+r*l[11]+n*l[12]+s*l[13]+l[14],h[e+3]=i*l[15]+r*l[16]+n*l[17]+s*l[18]+l[19];o.putImageData(a,0,0)},toObject:function(){return i(this.callSuper("toObject"),{type:this.type,matrix:this.matrix})}}),e.Image.filters.ColorMatrix.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Contrast=n(r.BaseFilter,{type:"Contrast",initialize:function(t){t=t||{},this.contrast=t.contrast||0},applyTo:function(t){for(var e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height),r=i.data,n=259*(this.contrast+255)/(255*(259-this.contrast)),s=0,o=r.length;s<o;s+=4)r[s]=n*(r[s]-128)+128,r[s+1]=n*(r[s+1]-128)+128,r[s+2]=n*(r[s+2]-128)+128;e.putImageData(i,0,0)},toObject:function(){return i(this.callSuper("toObject"),{contrast:this.contrast})}}),e.Image.filters.Contrast.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.Image.filters,n=e.util.createClass;r.Saturate=n(r.BaseFilter,{type:"Saturate",initialize:function(t){t=t||{},this.saturate=t.saturate||0},applyTo:function(t){for(var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),n=r.data,s=.01*-this.saturate,o=0,a=n.length;o<a;o+=4)e=Math.max(n[o],n[o+1],n[o+2]),n[o]+=e!==n[o]?(e-n[o])*s:0,n[o+1]+=e!==n[o+1]?(e-n[o+1])*s:0,n[o+2]+=e!==n[o+2]?(e-n[o+2])*s:0;i.putImageData(r,0,0)},toObject:function(){return i(this.callSuper("toObject"),{saturate:this.saturate})}}),e.Image.filters.Saturate.fromObject=e.Image.filters.BaseFilter.fromObject}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.toFixed,r=e.Object.NUM_FRACTION_DIGITS;if(e.Text)e.warn("fabric.Text is already defined");else{var n=e.Object.prototype.stateProperties.concat();n.push("fontFamily","fontWeight","fontSize","text","textDecoration","textAlign","fontStyle","lineHeight","textBackgroundColor","charSpacing");var s=e.Object.prototype.cacheProperties.concat();s.push("fontFamily","fontWeight","fontSize","text","textDecoration","textAlign","fontStyle","lineHeight","textBackgroundColor","charSpacing","styles"),e.Text=e.util.createClass(e.Object,{_dimensionAffectingProps:["fontSize","fontWeight","fontFamily","fontStyle","lineHeight","text","charSpacing","textAlign"],_reNewline:/\r?\n/,_reSpacesAndTabs:/[ \t\r]+/g,type:"text",fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",textDecoration:"",textAlign:"left",fontStyle:"",lineHeight:1.16,textBackgroundColor:"",stateProperties:n,cacheProperties:s,stroke:null,shadow:null,_fontSizeFraction:.25,_fontSizeMult:1.13,charSpacing:0,initialize:function(t,e){e=e||{},this.text=t,this.__skipDimension=!0,this.callSuper("initialize",e),this.__skipDimension=!1,this._initDimensions(),this.setCoords(),this.setupState({propertySet:"_dimensionAffectingProps"})},_initDimensions:function(t){this.__skipDimension||(t||(t=e.util.createCanvasElement().getContext("2d"),this._setTextStyles(t)),this._textLines=this._splitTextIntoLines(),this._clearCache(),this.width=this._getTextWidth(t)||this.cursorWidth||2,this.height=this._getTextHeight(t))},toString:function(){return"#<fabric.Text ("+this.complexity()+'): { "text": "'+this.text+'", "fontFamily": "'+this.fontFamily+'" }>'},_getCacheCanvasDimensions:function(){var t=this.callSuper("_getCacheCanvasDimensions"),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t},_render:function(t){this._setTextStyles(t),this.group&&"path-group"===this.group.type&&t.translate(this.left,this.top),this._renderTextLinesBackground(t),this._renderText(t),this._renderTextDecoration(t)},_renderText:function(t){this._renderTextFill(t),this._renderTextStroke(t)},_setTextStyles:function(t){t.textBaseline="alphabetic",t.font=this._getFontDeclaration()},_getTextHeight:function(){return this._getHeightOfSingleLine()+(this._textLines.length-1)*this._getHeightOfLine()},_getTextWidth:function(t){for(var e=this._getLineWidth(t,0),i=1,r=this._textLines.length;i<r;i++){var n=this._getLineWidth(t,i);n>e&&(e=n)}return e},_renderChars:function(t,e,i,r,n){var s,o,a=t.slice(0,-4);if(this[a].toLive){var h=-this.width/2+this[a].offsetX||0,c=-this.height/2+this[a].offsetY||0;e.save(),e.translate(h,c),r-=h,n-=c}if(0!==this.charSpacing)for(var l=this._getWidthOfCharSpacing(),u=0,f=(i=i.split("")).length;u<f;u++)s=i[u],o=e.measureText(s).width+l,e[t](s,r,n),r+=o>0?o:0;else e[t](i,r,n);this[a].toLive&&e.restore()},_renderTextLine:function(t,e,i,r,n,s){n-=this.fontSize*this._fontSizeFraction;var o=this._getLineWidth(e,s);if("justify"!==this.textAlign||this.width<o)this._renderChars(t,e,i,r,n,s);else for(var a,h=i.split(/\s+/),c=0,l=this._getWidthOfWords(e,h.join(" "),s,0),u=this.width-l,f=h.length-1,d=f>0?u/f:0,g=0,p=0,v=h.length;p<v;p++){for(;" "===i[c]&&c<i.length;)c++;a=h[p],this._renderChars(t,e,a,r+g,n,s,c),g+=this._getWidthOfWords(e,a,s,c)+d,c+=a.length}},_getWidthOfWords:function(t,e){var i=t.measureText(e).width;return 0!==this.charSpacing&&(i+=e.split("").length*this._getWidthOfCharSpacing()),i>0?i:0},_getLeftOffset:function(){return-this.width/2},_getTopOffset:function(){return-this.height/2},isEmptyStyles:function(){return!0},_renderTextCommon:function(t,e){for(var i=0,r=this._getLeftOffset(),n=this._getTopOffset(),s=0,o=this._textLines.length;s<o;s++){var a=this._getHeightOfLine(t,s),h=a/this.lineHeight,c=this._getLineWidth(t,s),l=this._getLineLeftOffset(c);this._renderTextLine(e,t,this._textLines[s],r+l,n+i+h,s),i+=a}},_renderTextFill:function(t){!this.fill&&this.isEmptyStyles()||this._renderTextCommon(t,"fillText")},_renderTextStroke:function(t){(this.stroke&&0!==this.strokeWidth||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())},_getHeightOfLine:function(){return this._getHeightOfSingleLine()*this.lineHeight},_getHeightOfSingleLine:function(){return this.fontSize*this._fontSizeMult},_renderTextLinesBackground:function(t){if(this.textBackgroundColor){var e,i,r,n=0,s=t.fillStyle;t.fillStyle=this.textBackgroundColor;for(var o=0,a=this._textLines.length;o<a;o++)e=this._getHeightOfLine(t,o),(i=this._getLineWidth(t,o))>0&&(r=this._getLineLeftOffset(i),t.fillRect(this._getLeftOffset()+r,this._getTopOffset()+n,i,e/this.lineHeight)),n+=e;t.fillStyle=s,this._removeShadow(t)}},_getLineLeftOffset:function(t){return"center"===this.textAlign?(this.width-t)/2:"right"===this.textAlign?this.width-t:0},_clearCache:function(){this.__lineWidths=[],this.__lineHeights=[]},_shouldClearDimensionCache:function(){var t=this._forceClearCache;return t||(t=this.hasStateChanged("_dimensionAffectingProps")),t&&(this.saveState({propertySet:"_dimensionAffectingProps"}),this.dirty=!0),t},_getLineWidth:function(t,e){if(this.__lineWidths[e])return-1===this.__lineWidths[e]?this.width:this.__lineWidths[e];var i,r=this._textLines[e];return i=""===r?0:this._measureLine(t,e),this.__lineWidths[e]=i,i&&"justify"===this.textAlign&&r.split(/\s+/).length>1&&(this.__lineWidths[e]=-1),i},_getWidthOfCharSpacing:function(){return 0!==this.charSpacing?this.fontSize*this.charSpacing/1e3:0},_measureLine:function(t,e){var i,r=this._textLines[e],n=t.measureText(r).width,s=0;return 0!==this.charSpacing&&(s=(r.split("").length-1)*this._getWidthOfCharSpacing()),(i=n+s)>0?i:0},_renderTextDecoration:function(t){if(this.textDecoration){var e=this.height/2,i=this,r=[];this.textDecoration.indexOf("underline")>-1&&r.push(.85),this.textDecoration.indexOf("line-through")>-1&&r.push(.43),this.textDecoration.indexOf("overline")>-1&&r.push(-.12),r.length>0&&function(r){var n,s,o,a,h,c,l,u=0;for(n=0,s=i._textLines.length;n<s;n++){for(h=i._getLineWidth(t,n),c=i._getLineLeftOffset(h),l=i._getHeightOfLine(t,n),o=0,a=r.length;o<a;o++)t.fillRect(i._getLeftOffset()+c,u+(i._fontSizeMult-1+r[o])*i.fontSize-e,h,i.fontSize/15);u+=l}}(r)}},_getFontDeclaration:function(){return[e.isLikelyNode?this.fontWeight:this.fontStyle,e.isLikelyNode?this.fontStyle:this.fontWeight,this.fontSize+"px",e.isLikelyNode?'"'+this.fontFamily+'"':this.fontFamily].join(" ")},render:function(t,e){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._shouldClearDimensionCache()&&(this._setTextStyles(t),this._initDimensions(t)),this.callSuper("render",t,e)))},_splitTextIntoLines:function(){return this.text.split(this._reNewline)},toObject:function(t){var e=["text","fontSize","fontWeight","fontFamily","fontStyle","lineHeight","textDecoration","textAlign","textBackgroundColor","charSpacing"].concat(t);return this.callSuper("toObject",e)},toSVG:function(t){this.ctx||(this.ctx=e.util.createCanvasElement().getContext("2d"));var i=this._createBaseSVGMarkup(),r=this._getSVGLeftTopOffsets(this.ctx),n=this._getSVGTextAndBg(r.textTop,r.textLeft);return this._wrapSVGTextAndBg(i,n),t?t(i.join("")):i.join("")},_getSVGLeftTopOffsets:function(t){var e=this._getHeightOfLine(t,0);return{textLeft:-this.width/2+(this.group&&"path-group"===this.group.type?this.left:0),textTop:0+(this.group&&"path-group"===this.group.type?-this.top:0),lineTop:e}},_wrapSVGTextAndBg:function(t,e){var i=this.getSvgFilter(),r=""===i?"":' style="'+i+'"';t.push("\t<g ",this.getSvgId(),'transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"',r,">\n",e.textBgRects.join(""),'\t\t<text xml:space="preserve" ',this.fontFamily?'font-family="'+this.fontFamily.replace(/"/g,"'")+'" ':"",this.fontSize?'font-size="'+this.fontSize+'" ':"",this.fontStyle?'font-style="'+this.fontStyle+'" ':"",this.fontWeight?'font-weight="'+this.fontWeight+'" ':"",this.textDecoration?'text-decoration="'+this.textDecoration+'" ':"",'style="',this.getSvgStyles(!0),'" >\n',e.textSpans.join(""),"\t\t</text>\n","\t</g>\n")},getSvgStyles:function(t){return e.Object.prototype.getSvgStyles.call(this,t)+" white-space: pre;"},_getSVGTextAndBg:function(t,e){var i=[],r=[],n=0;this._setSVGBg(r);for(var s=0,o=this._textLines.length;s<o;s++)this.textBackgroundColor&&this._setSVGTextLineBg(r,s,e,t,n),this._setSVGTextLineText(s,i,n,e,t,r),n+=this._getHeightOfLine(this.ctx,s);return{textSpans:i,textBgRects:r}},_setSVGTextLineText:function(t,n,s,o,a){var h=this.fontSize*(this._fontSizeMult-this._fontSizeFraction)-a+s-this.height/2;"justify"!==this.textAlign?n.push('\t\t\t<tspan x="',i(o+this._getLineLeftOffset(this._getLineWidth(this.ctx,t)),r),'" ','y="',i(h,r),'" ',this._getFillAttributes(this.fill),">",e.util.string.escapeXml(this._textLines[t]),"</tspan>\n"):this._setSVGTextLineJustifed(t,n,h,o)},_setSVGTextLineJustifed:function(t,n,s,o){var a=e.util.createCanvasElement().getContext("2d");this._setTextStyles(a);var h,c,l=this._textLines[t].split(/\s+/),u=this._getWidthOfWords(a,l.join("")),f=this.width-u,d=l.length-1,g=d>0?f/d:0,p=this._getFillAttributes(this.fill);for(o+=this._getLineLeftOffset(this._getLineWidth(a,t)),t=0,c=l.length;t<c;t++)h=l[t],n.push('\t\t\t<tspan x="',i(o,r),'" ','y="',i(s,r),'" ',p,">",e.util.string.escapeXml(h),"</tspan>\n"),o+=this._getWidthOfWords(a,h)+g},_setSVGTextLineBg:function(t,e,n,s,o){t.push("\t\t<rect ",this._getFillAttributes(this.textBackgroundColor),' x="',i(n+this._getLineLeftOffset(this._getLineWidth(this.ctx,e)),r),'" y="',i(o-this.height/2,r),'" width="',i(this._getLineWidth(this.ctx,e),r),'" height="',i(this._getHeightOfLine(this.ctx,e)/this.lineHeight,r),'"></rect>\n')},_setSVGBg:function(t){this.backgroundColor&&t.push("\t\t<rect ",this._getFillAttributes(this.backgroundColor),' x="',i(-this.width/2,r),'" y="',i(-this.height/2,r),'" width="',i(this.width,r),'" height="',i(this.height,r),'"></rect>\n')},_getFillAttributes:function(t){var i=t&&"string"==typeof t?new e.Color(t):"";return i&&i.getSource()&&1!==i.getAlpha()?'opacity="'+i.getAlpha()+'" fill="'+i.setAlpha(1).toRgb()+'"':'fill="'+t+'"'},_set:function(t,e){this.callSuper("_set",t,e),this._dimensionAffectingProps.indexOf(t)>-1&&(this._initDimensions(),this.setCoords())},complexity:function(){return 1}}),e.Text.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size text-decoration text-anchor".split(" ")),e.Text.DEFAULT_SVG_FONT_SIZE=16,e.Text.fromElement=function(t,i){if(!t)return null;var r=e.parseAttributes(t,e.Text.ATTRIBUTE_NAMES);(i=e.util.object.extend(i?e.util.object.clone(i):{},r)).top=i.top||0,i.left=i.left||0,"dx"in r&&(i.left+=r.dx),"dy"in r&&(i.top+=r.dy),"fontSize"in i||(i.fontSize=e.Text.DEFAULT_SVG_FONT_SIZE),i.originX||(i.originX="left");var n="";"textContent"in t?n=t.textContent:"firstChild"in t&&null!==t.firstChild&&"data"in t.firstChild&&null!==t.firstChild.data&&(n=t.firstChild.data),n=n.replace(/^\s+|\s+$|\n+/g,"").replace(/\s+/g," ");var s=new e.Text(n,i),o=s.getHeight()/s.height,a=((s.height+s.strokeWidth)*s.lineHeight-s.height)*o,h=s.getHeight()+a,c=0;return"left"===s.originX&&(c=s.getWidth()/2),"right"===s.originX&&(c=-s.getWidth()/2),s.set({left:s.getLeft()+c,top:s.getTop()-h/2+s.fontSize*(.18+s._fontSizeFraction)/s.lineHeight}),s},e.Text.fromObject=function(t,i,r){return e.Object._fromObject("Text",t,i,r,"text")},e.util.createAccessors(e.Text)}}("undefined"!=typeof exports?exports:this),function(){var t=fabric.util.object.clone;fabric.IText=fabric.util.createClass(fabric.Text,fabric.Observable,{type:"i-text",selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"#333",cursorDelay:1e3,cursorDuration:600,styles:null,caching:!0,_reSpace:/\s|\n/,_currentCursorOpacity:0,_selectionDirection:null,_abortCursorAnimation:!1,__widthOfSpace:[],initialize:function(t,e){this.styles=e?e.styles||{}:{},this.callSuper("initialize",t,e),this.initBehavior()},_clearCache:function(){this.callSuper("_clearCache"),this.__widthOfSpace=[]},isEmptyStyles:function(){if(!this.styles)return!0;var t=this.styles;for(var e in t)for(var i in t[e])for(var r in t[e][i])return!1;return!0},setSelectionStart:function(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)},setSelectionEnd:function(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)},_updateAndFire:function(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()},_fireSelectionChanged:function(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},getSelectionStyles:function(t,e){if(2===arguments.length){for(var i=[],r=t;r<e;r++)i.push(this.getSelectionStyles(r));return i}var n=this.get2DCursorLocation(t);return this._getStyleDeclaration(n.lineIndex,n.charIndex)||{}},setSelectionStyles:function(t){if(this.selectionStart===this.selectionEnd)this._extendStyles(this.selectionStart,t);else for(var e=this.selectionStart;e<this.selectionEnd;e++)this._extendStyles(e,t);return this._forceClearCache=!0,this},_extendStyles:function(t,e){var i=this.get2DCursorLocation(t);this._getLineStyle(i.lineIndex)||this._setLineStyle(i.lineIndex,{}),this._getStyleDeclaration(i.lineIndex,i.charIndex)||this._setStyleDeclaration(i.lineIndex,i.charIndex,{}),fabric.util.object.extend(this._getStyleDeclaration(i.lineIndex,i.charIndex),e)},_initDimensions:function(t){t||this.clearContextTop(),this.callSuper("_initDimensions",t)},render:function(t,e){this.clearContextTop(),this.callSuper("render",t,e),this.cursorOffsetCache={},this.renderCursorOrSelection()},_render:function(t){this.callSuper("_render",t),this.ctx=t},clearContextTop:function(){if(this.active&&this.isEditing&&this.canvas&&this.canvas.contextTop){var t=this.canvas.contextTop;t.save(),t.transform.apply(t,this.canvas.viewportTransform),this.transform(t),this.transformMatrix&&t.transform.apply(t,this.transformMatrix),this._clearTextArea(t),t.restore()}},renderCursorOrSelection:function(){if(this.active&&this.isEditing){var t,e,i=this.text.split("");this.canvas&&this.canvas.contextTop?((e=this.canvas.contextTop).save(),e.transform.apply(e,this.canvas.viewportTransform),this.transform(e),this.transformMatrix&&e.transform.apply(e,this.transformMatrix),this._clearTextArea(e)):(e=this.ctx).save(),this.selectionStart===this.selectionEnd?(t=this._getCursorBoundaries(i,"cursor"),this.renderCursor(t,e)):(t=this._getCursorBoundaries(i,"selection"),this.renderSelection(i,t,e)),e.restore()}},_clearTextArea:function(t){var e=this.width+4,i=this.height+4;t.clearRect(-e/2,-i/2,e,i)},get2DCursorLocation:function(t){void 0===t&&(t=this.selectionStart);for(var e=this._textLines.length,i=0;i<e;i++){if(t<=this._textLines[i].length)return{lineIndex:i,charIndex:t};t-=this._textLines[i].length+1}return{lineIndex:i-1,charIndex:this._textLines[i-1].length<t?this._textLines[i-1].length:t}},getCurrentCharStyle:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1);return{fontSize:i&&i.fontSize||this.fontSize,fill:i&&i.fill||this.fill,textBackgroundColor:i&&i.textBackgroundColor||this.textBackgroundColor,textDecoration:i&&i.textDecoration||this.textDecoration,fontFamily:i&&i.fontFamily||this.fontFamily,fontWeight:i&&i.fontWeight||this.fontWeight,fontStyle:i&&i.fontStyle||this.fontStyle,stroke:i&&i.stroke||this.stroke,strokeWidth:i&&i.strokeWidth||this.strokeWidth}},getCurrentCharFontSize:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1);return i&&i.fontSize?i.fontSize:this.fontSize},getCurrentCharColor:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1);return i&&i.fill?i.fill:this.cursorColor},_getCursorBoundaries:function(t,e){var i=Math.round(this._getLeftOffset()),r=this._getTopOffset(),n=this._getCursorBoundariesOffsets(t,e);return{left:i,top:r,leftOffset:n.left+n.lineLeft,topOffset:n.top}},_getCursorBoundariesOffsets:function(t,e){if(this.cursorOffsetCache&&"top"in this.cursorOffsetCache)return this.cursorOffsetCache;for(var i,r=0,n=0,s=0,o=0,a=0,h=0;h<this.selectionStart;h++)"\n"===t[h]?(a=0,o+=this._getHeightOfLine(this.ctx,n),n++,s=0):(a+=this._getWidthOfChar(this.ctx,t[h],n,s),s++),r=this._getLineLeftOffset(this._getLineWidth(this.ctx,n));return"cursor"===e&&(o+=(1-this._fontSizeFraction)*this._getHeightOfLine(this.ctx,n)/this.lineHeight-this.getCurrentCharFontSize(n,s)*(1-this._fontSizeFraction)),0!==this.charSpacing&&s===this._textLines[n].length&&(a-=this._getWidthOfCharSpacing()),i={top:o,left:a>0?a:0,lineLeft:r},this.cursorOffsetCache=i,this.cursorOffsetCache},renderCursor:function(t,e){var i=this.get2DCursorLocation(),r=i.lineIndex,n=i.charIndex,s=this.getCurrentCharFontSize(r,n),o=t.leftOffset,a=this.scaleX*this.canvas.getZoom(),h=this.cursorWidth/a;e.fillStyle=this.getCurrentCharColor(r,n),e.globalAlpha=this.__isMousedown?1:this._currentCursorOpacity,e.fillRect(t.left+o-h/2,t.top+t.topOffset,h,s)},renderSelection:function(t,e,i){i.fillStyle=this.selectionColor;for(var r=this.get2DCursorLocation(this.selectionStart),n=this.get2DCursorLocation(this.selectionEnd),s=r.lineIndex,o=n.lineIndex,a=s;a<=o;a++){var h=this._getLineLeftOffset(this._getLineWidth(i,a))||0,c=this._getHeightOfLine(this.ctx,a),l=0,u=0,f=this._textLines[a];if(a===s){for(var d=0,g=f.length;d<g;d++)d>=r.charIndex&&(a!==o||d<n.charIndex)&&(u+=this._getWidthOfChar(i,f[d],a,d)),d<r.charIndex&&(h+=this._getWidthOfChar(i,f[d],a,d));d===f.length&&(u-=this._getWidthOfCharSpacing())}else if(a>s&&a<o)u+=this._getLineWidth(i,a)||5;else if(a===o){for(var p=0,v=n.charIndex;p<v;p++)u+=this._getWidthOfChar(i,f[p],a,p);n.charIndex===f.length&&(u-=this._getWidthOfCharSpacing())}l=c,(this.lineHeight<1||a===o&&this.lineHeight>1)&&(c/=this.lineHeight),i.fillRect(e.left+h,e.top+e.topOffset,u>0?u:0,c),e.topOffset+=l}},_renderChars:function(t,e,i,r,n,s,o){if(this.isEmptyStyles())return this._renderCharsFast(t,e,i,r,n);o=o||0;var a,h,c=this._getHeightOfLine(e,s),l="";e.save(),n-=c/this.lineHeight*this._fontSizeFraction;for(var u=o,f=i.length+o;u<=f;u++)a=a||this.getCurrentCharStyle(s,u),h=this.getCurrentCharStyle(s,u+1),(this._hasStyleChanged(a,h)||u===f)&&(this._renderChar(t,e,s,u-1,l,r,n,c),l="",a=h),l+=i[u-o];e.restore()},_renderCharsFast:function(t,e,i,r,n){"fillText"===t&&this.fill&&this.callSuper("_renderChars",t,e,i,r,n),"strokeText"===t&&(this.stroke&&this.strokeWidth>0||this.skipFillStrokeCheck)&&this.callSuper("_renderChars",t,e,i,r,n)},_renderChar:function(t,e,i,r,n,s,o,a){var h,c,l,u,f,d,g,p,v,b=this._getStyleDeclaration(i,r);if(b?(c=this._getHeightOfChar(e,n,i,r),u=b.stroke,l=b.fill,d=b.textDecoration):c=this.fontSize,u=(u||this.stroke)&&"strokeText"===t,l=(l||this.fill)&&"fillText"===t,b&&e.save(),h=this._applyCharStylesGetWidth(e,n,i,r,b||null),d=d||this.textDecoration,b&&b.textBackgroundColor&&this._removeShadow(e),0!==this.charSpacing){p=this._getWidthOfCharSpacing(),h=0;for(var m,_=0,y=(g=n.split("")).length;_<y;_++)m=g[_],l&&e.fillText(m,s+h,o),u&&e.strokeText(m,s+h,o),h+=(v=e.measureText(m).width+p)>0?v:0}else l&&e.fillText(n,s,o),u&&e.strokeText(n,s,o);(d||""!==d)&&(f=this._fontSizeFraction*a/this.lineHeight,this._renderCharDecoration(e,d,s,o,f,h,c)),b&&e.restore(),e.translate(h,0)},_hasStyleChanged:function(t,e){return t.fill!==e.fill||t.fontSize!==e.fontSize||t.textBackgroundColor!==e.textBackgroundColor||t.textDecoration!==e.textDecoration||t.fontFamily!==e.fontFamily||t.fontWeight!==e.fontWeight||t.fontStyle!==e.fontStyle||t.stroke!==e.stroke||t.strokeWidth!==e.strokeWidth},_renderCharDecoration:function(t,e,i,r,n,s,o){if(e){var a,h,c=o/15,l={underline:r+o/10,"line-through":r-o*(this._fontSizeFraction+this._fontSizeMult-1)+c,overline:r-(this._fontSizeMult-this._fontSizeFraction)*o},u=["underline","line-through","overline"];for(a=0;a<u.length;a++)h=u[a],e.indexOf(h)>-1&&t.fillRect(i,l[h],s,c)}},_renderTextLine:function(t,e,i,r,n,s){this.isEmptyStyles()||(n+=this.fontSize*(this._fontSizeFraction+.03)),this.callSuper("_renderTextLine",t,e,i,r,n,s)},_renderTextDecoration:function(t){if(this.isEmptyStyles())return this.callSuper("_renderTextDecoration",t)},_renderTextLinesBackground:function(t){this.callSuper("_renderTextLinesBackground",t);var e,i,r,n,s,o,a,h,c,l,u=0,f=this._getLeftOffset(),d=this._getTopOffset(),g="";t.save();for(var p=0,v=this._textLines.length;p<v;p++)if(e=this._getHeightOfLine(t,p),""!==(n=this._textLines[p])&&this.styles&&this._getLineStyle(p)){i=this._getLineWidth(t,p),r=this._getLineLeftOffset(i),a=h=c=l=0;for(var b=0,m=n.length;b<m;b++)g!==(o=this._getStyleDeclaration(p,b)||{}).textBackgroundColor&&(l&&c&&(t.fillStyle=g,t.fillRect(a,h,c,l)),a=h=c=l=0,g=o.textBackgroundColor||""),o.textBackgroundColor?(s=n[b],g===o.textBackgroundColor&&(g=o.textBackgroundColor,a||(a=f+r+this._getWidthOfCharsAt(t,p,b)),h=d+u,c+=this._getWidthOfChar(t,s,p,b),l=e/this.lineHeight)):g="";l&&c&&(t.fillStyle=g,t.fillRect(a,h,c,l),a=h=c=l=0),u+=e}else u+=e;t.restore()},_getCacheProp:function(t,e){return t+e.fontSize+e.fontWeight+e.fontStyle},_getFontCache:function(t){return fabric.charWidthsCache[t]||(fabric.charWidthsCache[t]={}),fabric.charWidthsCache[t]},_applyCharStylesGetWidth:function(e,i,r,n,s){var o,a,h,c=s||this._getStyleDeclaration(r,n),l=t(c);if(this._applyFontStyles(l),h=this._getFontCache(l.fontFamily),a=this._getCacheProp(i,l),!c&&h[a]&&this.caching)return h[a];"string"==typeof l.shadow&&(l.shadow=new fabric.Shadow(l.shadow));var u=l.fill||this.fill;return e.fillStyle=u.toLive?u.toLive(e,this):u,l.stroke&&(e.strokeStyle=l.stroke&&l.stroke.toLive?l.stroke.toLive(e,this):l.stroke),e.lineWidth=l.strokeWidth||this.strokeWidth,e.font=this._getFontDeclaration.call(l),l.shadow&&(l.scaleX=this.scaleX,l.scaleY=this.scaleY,l.canvas=this.canvas,l.getObjectScaling=this.getObjectScaling,this._setShadow.call(l,e)),this.caching&&h[a]?h[a]:(o=e.measureText(i).width,this.caching&&(h[a]=o),o)},_applyFontStyles:function(t){t.fontFamily||(t.fontFamily=this.fontFamily),t.fontSize||(t.fontSize=this.fontSize),t.fontWeight||(t.fontWeight=this.fontWeight),t.fontStyle||(t.fontStyle=this.fontStyle)},_getStyleDeclaration:function(e,i,r){return r?this.styles[e]&&this.styles[e][i]?t(this.styles[e][i]):{}:this.styles[e]&&this.styles[e][i]?this.styles[e][i]:null},_setStyleDeclaration:function(t,e,i){this.styles[t][e]=i},_deleteStyleDeclaration:function(t,e){delete this.styles[t][e]},_getLineStyle:function(t){return this.styles[t]},_setLineStyle:function(t,e){this.styles[t]=e},_deleteLineStyle:function(t){delete this.styles[t]},_getWidthOfChar:function(t,e,i,r){if(!this._isMeasuring&&"justify"===this.textAlign&&this._reSpacesAndTabs.test(e))return this._getWidthOfSpace(t,i);t.save();var n=this._applyCharStylesGetWidth(t,e,i,r);return 0!==this.charSpacing&&(n+=this._getWidthOfCharSpacing()),t.restore(),n>0?n:0},_getHeightOfChar:function(t,e,i){var r=this._getStyleDeclaration(e,i);return r&&r.fontSize?r.fontSize:this.fontSize},_getWidthOfCharsAt:function(t,e,i){var r,n,s=0;for(r=0;r<i;r++)n=this._textLines[e][r],s+=this._getWidthOfChar(t,n,e,r);return s},_measureLine:function(t,e){this._isMeasuring=!0;var i=this._getWidthOfCharsAt(t,e,this._textLines[e].length);return 0!==this.charSpacing&&(i-=this._getWidthOfCharSpacing()),this._isMeasuring=!1,i>0?i:0},_getWidthOfSpace:function(t,e){if(this.__widthOfSpace[e])return this.__widthOfSpace[e];var i=this._textLines[e],r=this._getWidthOfWords(t,i,e,0),n=this.width-r,s=i.length-i.replace(this._reSpacesAndTabs,"").length,o=Math.max(n/s,t.measureText(" ").width);return this.__widthOfSpace[e]=o,o},_getWidthOfWords:function(t,e,i,r){for(var n=0,s=0;s<e.length;s++){var o=e[s];o.match(/\s/)||(n+=this._getWidthOfChar(t,o,i,s+r))}return n},_getHeightOfLine:function(t,e){if(this.__lineHeights[e])return this.__lineHeights[e];for(var i=this._textLines[e],r=this._getHeightOfChar(t,e,0),n=1,s=i.length;n<s;n++){var o=this._getHeightOfChar(t,e,n);o>r&&(r=o)}return this.__lineHeights[e]=r*this.lineHeight*this._fontSizeMult,this.__lineHeights[e]},_getTextHeight:function(t){for(var e,i=0,r=0,n=this._textLines.length;r<n;r++)e=this._getHeightOfLine(t,r),i+=r===n-1?e/this.lineHeight:e;return i},toObject:function(e){return fabric.util.object.extend(this.callSuper("toObject",e),{styles:t(this.styles,!0)})}}),fabric.IText.fromObject=function(t,e,i){return fabric.Object._fromObject("IText",t,e,i,"text")}}(),function(){var t=fabric.util.object.clone;fabric.util.object.extend(fabric.IText.prototype,{initBehavior:function(){this.initAddedHandler(),this.initRemovedHandler(),this.initCursorSelectionHandlers(),this.initDoubleClickSimulation(),this.mouseMoveHandler=this.mouseMoveHandler.bind(this)},onDeselect:function(){this.isEditing&&this.exitEditing(),this.selected=!1,this.callSuper("onDeselect")},initAddedHandler:function(){var t=this;this.on("added",function(){var e=t.canvas;e&&(e._hasITextHandlers||(e._hasITextHandlers=!0,t._initCanvasHandlers(e)),e._iTextInstances=e._iTextInstances||[],e._iTextInstances.push(t))})},initRemovedHandler:function(){var t=this;this.on("removed",function(){var e=t.canvas;e&&(e._iTextInstances=e._iTextInstances||[],fabric.util.removeFromArray(e._iTextInstances,t),0===e._iTextInstances.length&&(e._hasITextHandlers=!1,t._removeCanvasHandlers(e)))})},_initCanvasHandlers:function(t){t._mouseUpITextHandler=function(){t._iTextInstances&&t._iTextInstances.forEach(function(t){t.__isMousedown=!1})}.bind(this),t.on("mouse:up",t._mouseUpITextHandler)},_removeCanvasHandlers:function(t){t.off("mouse:up",t._mouseUpITextHandler)},_tick:function(){this._currentTickState=this._animateCursor(this,1,this.cursorDuration,"_onTickComplete")},_animateCursor:function(t,e,i,r){var n;return n={isAborted:!1,abort:function(){this.isAborted=!0}},t.animate("_currentCursorOpacity",e,{duration:i,onComplete:function(){n.isAborted||t[r]()},onChange:function(){t.canvas&&t.selectionStart===t.selectionEnd&&t.renderCursorOrSelection()},abort:function(){return n.isAborted}}),n},_onTickComplete:function(){var t=this;this._cursorTimeout1&&clearTimeout(this._cursorTimeout1),this._cursorTimeout1=setTimeout(function(){t._currentTickCompleteState=t._animateCursor(t,0,this.cursorDuration/2,"_tick")},100)},initDelayedCursor:function(t){var e=this,i=t?0:this.cursorDelay;this.abortCursorAnimation(),this._currentCursorOpacity=1,this._cursorTimeout2=setTimeout(function(){e._tick()},i)},abortCursorAnimation:function(){var t=this._currentTickState||this._currentTickCompleteState;this._currentTickState&&this._currentTickState.abort(),this._currentTickCompleteState&&this._currentTickCompleteState.abort(),clearTimeout(this._cursorTimeout1),clearTimeout(this._cursorTimeout2),this._currentCursorOpacity=0,t&&this.canvas&&this.canvas.clearContext(this.canvas.contextTop||this.ctx)},selectAll:function(){this.selectionStart=0,this.selectionEnd=this.text.length,this._fireSelectionChanged(),this._updateTextarea()},getSelectedText:function(){return this.text.slice(this.selectionStart,this.selectionEnd)},findWordBoundaryLeft:function(t){var e=0,i=t-1;if(this._reSpace.test(this.text.charAt(i)))for(;this._reSpace.test(this.text.charAt(i));)e++,i--;for(;/\S/.test(this.text.charAt(i))&&i>-1;)e++,i--;return t-e},findWordBoundaryRight:function(t){var e=0,i=t;if(this._reSpace.test(this.text.charAt(i)))for(;this._reSpace.test(this.text.charAt(i));)e++,i++;for(;/\S/.test(this.text.charAt(i))&&i<this.text.length;)e++,i++;return t+e},findLineBoundaryLeft:function(t){for(var e=0,i=t-1;!/\n/.test(this.text.charAt(i))&&i>-1;)e++,i--;return t-e},findLineBoundaryRight:function(t){for(var e=0,i=t;!/\n/.test(this.text.charAt(i))&&i<this.text.length;)e++,i++;return t+e},getNumNewLinesInSelectedText:function(){for(var t=this.getSelectedText(),e=0,i=0,r=t.length;i<r;i++)"\n"===t[i]&&e++;return e},searchWordBoundary:function(t,e){for(var i=this._reSpace.test(this.text.charAt(t))?t-1:t,r=this.text.charAt(i),n=/[ \n\.,;!\?\-]/;!n.test(r)&&i>0&&i<this.text.length;)i+=e,r=this.text.charAt(i);return n.test(r)&&"\n"!==r&&(i+=1===e?0:1),i},selectWord:function(t){t=t||this.selectionStart;var e=this.searchWordBoundary(t,-1),i=this.searchWordBoundary(t,1);this.selectionStart=e,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()},selectLine:function(t){t=t||this.selectionStart;var e=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);this.selectionStart=e,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea()},enterEditing:function(t){if(!this.isEditing&&this.editable)return this.canvas&&this.exitEditingOnOthers(this.canvas),this.isEditing=!0,this.selected=!0,this.initHiddenTextarea(t),this.hiddenTextarea.focus(),this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick(),this.fire("editing:entered"),this._fireSelectionChanged(),this.canvas?(this.canvas.fire("text:editing:entered",{target:this}),this.initMouseMoveHandler(),this.canvas.renderAll(),this):this},exitEditingOnOthers:function(t){t._iTextInstances&&t._iTextInstances.forEach(function(t){t.selected=!1,t.isEditing&&t.exitEditing()})},initMouseMoveHandler:function(){this.canvas.on("mouse:move",this.mouseMoveHandler)},mouseMoveHandler:function(t){if(this.__isMousedown&&this.isEditing){var e=this.getSelectionStartFromPointer(t.e),i=this.selectionStart,r=this.selectionEnd;(e===this.__selectionStartOnMouseDown&&i!==r||i!==e&&r!==e)&&(e>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=e):(this.selectionStart=e,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===r||(this.restartCursorIfNeeded(),this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}},_setEditingProps:function(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0},_updateTextarea:function(){if(this.hiddenTextarea&&!this.inCompositionMode&&(this.cursorOffsetCache={},this.hiddenTextarea.value=this.text,this.hiddenTextarea.selectionStart=this.selectionStart,this.hiddenTextarea.selectionEnd=this.selectionEnd,this.selectionStart===this.selectionEnd)){var t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top,this.hiddenTextarea.style.fontSize=t.fontSize}},_calcTextareaPosition:function(){if(!this.canvas)return{x:1,y:1};var t=this.text.split(""),e=this._getCursorBoundaries(t,"cursor"),i=this.get2DCursorLocation(),r=i.lineIndex,n=i.charIndex,s=this.getCurrentCharFontSize(r,n),o=e.leftOffset,a=this.calcTransformMatrix(),h={x:e.left+o,y:e.top+e.topOffset+s},c=this.canvas.upperCanvasEl,l=c.width-s,u=c.height-s;return h=fabric.util.transformPoint(h,a),(h=fabric.util.transformPoint(h,this.canvas.viewportTransform)).x<0&&(h.x=0),h.x>l&&(h.x=l),h.y<0&&(h.y=0),h.y>u&&(h.y=u),h.x+=this.canvas._offset.left,h.y+=this.canvas._offset.top,{left:h.x+"px",top:h.y+"px",fontSize:s}},_saveEditingProps:function(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}},_restoreEditingProps:function(){this._savedProps&&(this.hoverCursor=this._savedProps.overCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor))},exitEditing:function(){var t=this._textBeforeEdit!==this.text;return this.selected=!1,this.isEditing=!1,this.selectable=!0,this.selectionEnd=this.selectionStart,this.hiddenTextarea&&(this.hiddenTextarea.blur&&this.hiddenTextarea.blur(),this.canvas&&this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea),this.hiddenTextarea=null),this.abortCursorAnimation(),this._restoreEditingProps(),this._currentCursorOpacity=0,this.fire("editing:exited"),t&&this.fire("modified"),this.canvas&&(this.canvas.off("mouse:move",this.mouseMoveHandler),this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this},_removeExtraneousStyles:function(){for(var t in this.styles)this._textLines[t]||delete this.styles[t]},_removeCharsFromTo:function(t,e){for(;e!==t;)this._removeSingleCharAndStyle(t+1),e--;this.selectionStart=t,this.selectionEnd=t},_removeSingleCharAndStyle:function(t){var e="\n"===this.text[t-1],i=e?t:t-1;this.removeStyleObject(e,i),this.text=this.text.slice(0,t-1)+this.text.slice(t),this._textLines=this._splitTextIntoLines()},insertChars:function(t,e){var i;if(this.selectionEnd-this.selectionStart>1&&this._removeCharsFromTo(this.selectionStart,this.selectionEnd),e||!this.isEmptyStyles())for(var r=0,n=t.length;r<n;r++)e&&(i=fabric.util.object.clone(fabric.copiedTextStyle[r],!0)),this.insertChar(t[r],r<n-1,i);else this.insertChar(t,!1)},insertChar:function(t,e,i){var r="\n"===this.text[this.selectionStart];this.text=this.text.slice(0,this.selectionStart)+t+this.text.slice(this.selectionEnd),this._textLines=this._splitTextIntoLines(),this.insertStyleObjects(t,r,i),this.selectionStart+=t.length,this.selectionEnd=this.selectionStart,e||(this._updateTextarea(),this.setCoords(),this._fireSelectionChanged(),this.fire("changed"),this.restartCursorIfNeeded(),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.renderAll()))},restartCursorIfNeeded:function(){this._currentTickState&&!this._currentTickState.isAborted&&this._currentTickCompleteState&&!this._currentTickCompleteState.isAborted||this.initDelayedCursor()},insertNewlineStyleObject:function(e,i,r){this.shiftLineStyles(e,1);var n={},s={};if(this.styles[e]&&this.styles[e][i-1]&&(n=this.styles[e][i-1]),r&&n)s[0]=t(n),this.styles[e+1]=s;else{var o=!1;for(var a in this.styles[e]){var h=parseInt(a,10);h>=i&&(o=!0,s[h-i]=this.styles[e][a],delete this.styles[e][a])}o&&(this.styles[e+1]=s)}this._forceClearCache=!0},insertCharStyleObject:function(e,i,r){var n=this.styles[e],s=t(n);0!==i||r||(i=1);for(var o in s){var a=parseInt(o,10);a>=i&&(n[a+1]=s[a],s[a-1]||delete n[a])}var h=r||t(n[i-1]);h&&(this.styles[e][i]=h),this._forceClearCache=!0},insertStyleObjects:function(t,e,i){var r=this.get2DCursorLocation(),n=r.lineIndex,s=r.charIndex;this._getLineStyle(n)||this._setLineStyle(n,{}),"\n"===t?this.insertNewlineStyleObject(n,s,e):this.insertCharStyleObject(n,s,i)},shiftLineStyles:function(e,i){var r=t(this.styles);for(var n in r)(s=parseInt(n,10))<=e&&delete r[s];for(var n in this.styles){var s=parseInt(n,10);s>e&&(this.styles[s+i]=r[s],r[s-i]||delete this.styles[s])}},removeStyleObject:function(t,e){var i=this.get2DCursorLocation(e),r=i.lineIndex,n=i.charIndex;this._removeStyleObject(t,i,r,n)},_getTextOnPreviousLine:function(t){return this._textLines[t-1]},_removeStyleObject:function(e,i,r,n){if(e){var s=this._getTextOnPreviousLine(i.lineIndex),o=s?s.length:0;this.styles[r-1]||(this.styles[r-1]={});for(n in this.styles[r])this.styles[r-1][parseInt(n,10)+o]=this.styles[r][n];this.shiftLineStyles(i.lineIndex,-1)}else{var a=this.styles[r];a&&delete a[n];var h=t(a);for(var c in h){var l=parseInt(c,10);l>=n&&0!==l&&(a[l-1]=h[l],delete a[l])}}},insertNewline:function(){this.insertChars("\n")},setSelectionStartEndWithShift:function(t,e,i){i<=t?(e===t?this._selectionDirection="left":"right"===this._selectionDirection&&(this._selectionDirection="left",this.selectionEnd=t),this.selectionStart=i):i>t&&i<e?"right"===this._selectionDirection?this.selectionEnd=i:this.selectionStart=i:(e===t?this._selectionDirection="right":"left"===this._selectionDirection&&(this._selectionDirection="right",this.selectionStart=e),this.selectionEnd=i)},setSelectionInBoundaries:function(){var t=this.text.length;this.selectionStart>t?this.selectionStart=t:this.selectionStart<0&&(this.selectionStart=0),this.selectionEnd>t?this.selectionEnd=t:this.selectionEnd<0&&(this.selectionEnd=0)}})}(),fabric.util.object.extend(fabric.IText.prototype,{initDoubleClickSimulation:function(){this.__lastClickTime=+new Date,this.__lastLastClickTime=+new Date,this.__lastPointer={},this.on("mousedown",this.onMouseDown.bind(this))},onMouseDown:function(t){this.__newClickTime=+new Date;var e=this.canvas.getPointer(t.e);this.isTripleClick(e,t.e)?(this.fire("tripleclick",t),this._stopEvent(t.e)):this.isDoubleClick(e)&&(this.fire("dblclick",t),this._stopEvent(t.e)),this.__lastLastClickTime=this.__lastClickTime,this.__lastClickTime=this.__newClickTime,this.__lastPointer=e,this.__lastIsEditing=this.isEditing,this.__lastSelected=this.selected},isDoubleClick:function(t){return this.__newClickTime-this.__lastClickTime<500&&this.__lastPointer.x===t.x&&this.__lastPointer.y===t.y&&this.__lastIsEditing},isTripleClick:function(t){return this.__newClickTime-this.__lastClickTime<500&&this.__lastClickTime-this.__lastLastClickTime<500&&this.__lastPointer.x===t.x&&this.__lastPointer.y===t.y},_stopEvent:function(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},initCursorSelectionHandlers:function(){this.initMousedownHandler(),this.initMouseupHandler(),this.initClicks()},initClicks:function(){this.on("dblclick",function(t){this.selectWord(this.getSelectionStartFromPointer(t.e))}),this.on("tripleclick",function(t){this.selectLine(this.getSelectionStartFromPointer(t.e))})},initMousedownHandler:function(){this.on("mousedown",function(t){if(this.editable&&(!t.e.button||1===t.e.button)){var e=this.canvas.getPointer(t.e);this.__mousedownX=e.x,this.__mousedownY=e.y,this.__isMousedown=!0,this.selected&&this.setCursorByClick(t.e),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection())}})},_isObjectMoved:function(t){var e=this.canvas.getPointer(t);return this.__mousedownX!==e.x||this.__mousedownY!==e.y},initMouseupHandler:function(){this.on("mouseup",function(t){this.__isMousedown=!1,!this.editable||this._isObjectMoved(t.e)||t.e.button&&1!==t.e.button||(this.__lastSelected&&!this.__corner&&(this.enterEditing(t.e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection()),this.selected=!0)})},setCursorByClick:function(t){var e=this.getSelectionStartFromPointer(t),i=this.selectionStart,r=this.selectionEnd;t.shiftKey?this.setSelectionStartEndWithShift(i,r,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())},getSelectionStartFromPointer:function(t){for(var e,i=this.getLocalPointer(t),r=0,n=0,s=0,o=0,a=0,h=this._textLines.length;a<h;a++){e=this._textLines[a],s+=this._getHeightOfLine(this.ctx,a)*this.scaleY;var c=this._getLineWidth(this.ctx,a);n=this._getLineLeftOffset(c)*this.scaleX;for(var l=0,u=e.length;l<u;l++){if(r=n,n+=this._getWidthOfChar(this.ctx,e[l],a,this.flipX?u-l:l)*this.scaleX,!(s<=i.y||n<=i.x))return this._getNewSelectionStartFromOffset(i,r,n,o+a,u);o++}if(i.y<s)return this._getNewSelectionStartFromOffset(i,r,n,o+a-1,u)}return this.text.length},_getNewSelectionStartFromOffset:function(t,e,i,r,n){var s=t.x-e,o=r+(i-t.x>s?0:1);return this.flipX&&(o=n-o),o>this.text.length&&(o=this.text.length),o}}),fabric.util.object.extend(fabric.IText.prototype,{initHiddenTextarea:function(){this.hiddenTextarea=fabric.document.createElement("textarea"),this.hiddenTextarea.setAttribute("autocapitalize","off"),this.hiddenTextarea.setAttribute("autocorrect","off"),this.hiddenTextarea.setAttribute("autocomplete","off"),this.hiddenTextarea.setAttribute("spellcheck","false"),this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea",""),this.hiddenTextarea.setAttribute("wrap","off");var t=this._calcTextareaPosition();this.hiddenTextarea.style.cssText="position: absolute; top: "+t.top+"; left: "+t.left+"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; line-height: 1px; paddingｰtop: "+t.fontSize+";",fabric.document.body.appendChild(this.hiddenTextarea),fabric.util.addListener(this.hiddenTextarea,"keydown",this.onKeyDown.bind(this)),fabric.util.addListener(this.hiddenTextarea,"keyup",this.onKeyUp.bind(this)),fabric.util.addListener(this.hiddenTextarea,"input",this.onInput.bind(this)),fabric.util.addListener(this.hiddenTextarea,"copy",this.copy.bind(this)),fabric.util.addListener(this.hiddenTextarea,"cut",this.cut.bind(this)),fabric.util.addListener(this.hiddenTextarea,"paste",this.paste.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionstart",this.onCompositionStart.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionupdate",this.onCompositionUpdate.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionend",this.onCompositionEnd.bind(this)),!this._clickHandlerInitialized&&this.canvas&&(fabric.util.addListener(this.canvas.upperCanvasEl,"click",this.onClick.bind(this)),this._clickHandlerInitialized=!0)},keysMap:{8:"removeChars",9:"exitEditing",27:"exitEditing",13:"insertNewline",33:"moveCursorUp",34:"moveCursorDown",35:"moveCursorRight",36:"moveCursorLeft",37:"moveCursorLeft",38:"moveCursorUp",39:"moveCursorRight",40:"moveCursorDown",46:"forwardDelete"},ctrlKeysMapUp:{67:"copy",88:"cut"},ctrlKeysMapDown:{65:"selectAll"},onClick:function(){this.hiddenTextarea&&this.hiddenTextarea.focus()},onKeyDown:function(t){if(this.isEditing){if(t.keyCode in this.keysMap)this[this.keysMap[t.keyCode]](t);else{if(!(t.keyCode in this.ctrlKeysMapDown&&(t.ctrlKey||t.metaKey)))return;this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),t.keyCode>=33&&t.keyCode<=40?(this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.renderAll()}},onKeyUp:function(t){this.isEditing&&!this._copyDone?t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.renderAll()):this._copyDone=!1},onInput:function(t){if(this.isEditing&&!this.inCompositionMode){var e,i,r,n=this.selectionStart||0,s=this.selectionEnd||0,o=this.text.length,a=this.hiddenTextarea.value.length;a>o?(r="left"===this._selectionDirection?s:n,e=a-o,i=this.hiddenTextarea.value.slice(r,r+e)):(e=a-o+s-n,i=this.hiddenTextarea.value.slice(n,n+e)),this.insertChars(i),t.stopPropagation()}},onCompositionStart:function(){this.inCompositionMode=!0,this.prevCompositionLength=0,this.compositionStart=this.selectionStart},onCompositionEnd:function(){this.inCompositionMode=!1},onCompositionUpdate:function(t){var e=t.data;this.selectionStart=this.compositionStart,this.selectionEnd=this.selectionEnd===this.selectionStart?this.compositionStart+this.prevCompositionLength:this.selectionEnd,this.insertChars(e,!1),this.prevCompositionLength=e.length},forwardDelete:function(t){if(this.selectionStart===this.selectionEnd){if(this.selectionStart===this.text.length)return;this.moveCursorRight(t)}this.removeChars(t)},copy:function(t){if(this.selectionStart!==this.selectionEnd){var e=this.getSelectedText(),i=this._getClipboardData(t);i&&i.setData("text",e),fabric.copiedText=e,fabric.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd),t.stopImmediatePropagation(),t.preventDefault(),this._copyDone=!0}},paste:function(t){var e=null,i=this._getClipboardData(t),r=!0;i?(e=i.getData("text").replace(/\r/g,""),fabric.copiedTextStyle&&fabric.copiedText===e||(r=!1)):e=fabric.copiedText,e&&this.insertChars(e,r),t.stopImmediatePropagation(),t.preventDefault()},cut:function(t){this.selectionStart!==this.selectionEnd&&(this.copy(t),this.removeChars(t))},_getClipboardData:function(t){return t&&t.clipboardData||fabric.window.clipboardData},_getWidthBeforeCursor:function(t,e){for(var i,r=this._textLines[t].slice(0,e),n=this._getLineWidth(this.ctx,t),s=this._getLineLeftOffset(n),o=0,a=r.length;o<a;o++)i=r[o],s+=this._getWidthOfChar(this.ctx,i,t,o);return s},getDownCursorOffset:function(t,e){var i=this._getSelectionForOffset(t,e),r=this.get2DCursorLocation(i),n=r.lineIndex;if(n===this._textLines.length-1||t.metaKey||34===t.keyCode)return this.text.length-i;var s=r.charIndex,o=this._getWidthBeforeCursor(n,s),a=this._getIndexOnLine(n+1,o);return this._textLines[n].slice(s).length+a+2},_getSelectionForOffset:function(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart},getUpCursorOffset:function(t,e){var i=this._getSelectionForOffset(t,e),r=this.get2DCursorLocation(i),n=r.lineIndex;if(0===n||t.metaKey||33===t.keyCode)return-i;var s=r.charIndex,o=this._getWidthBeforeCursor(n,s),a=this._getIndexOnLine(n-1,o),h=this._textLines[n].slice(0,s);return-this._textLines[n-1].length+a-h.length},_getIndexOnLine:function(t,e){for(var i,r=this._getLineWidth(this.ctx,t),n=this._textLines[t],s=this._getLineLeftOffset(r),o=0,a=0,h=n.length;a<h;a++){var c=n[a],l=this._getWidthOfChar(this.ctx,c,t,a);if((s+=l)>e){i=!0;var u=s-l,f=s,d=Math.abs(u-e);o=Math.abs(f-e)<d?a:a-1;break}}return i||(o=n.length-1),o},moveCursorDown:function(t){this.selectionStart>=this.text.length&&this.selectionEnd>=this.text.length||this._moveCursorUpOrDown("Down",t)},moveCursorUp:function(t){0===this.selectionStart&&0===this.selectionEnd||this._moveCursorUpOrDown("Up",t)},_moveCursorUpOrDown:function(t,e){var i=this["get"+t+"CursorOffset"](e,"right"===this._selectionDirection);e.shiftKey?this.moveCursorWithShift(i):this.moveCursorWithoutShift(i),0!==i&&(this.setSelectionInBoundaries(),this.abortCursorAnimation(),this._currentCursorOpacity=1,this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())},moveCursorWithShift:function(t){var e="left"===this._selectionDirection?this.selectionStart+t:this.selectionEnd+t;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),0!==t},moveCursorWithoutShift:function(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),0!==t},moveCursorLeft:function(t){0===this.selectionStart&&0===this.selectionEnd||this._moveCursorLeftOrRight("Left",t)},_move:function(t,e,i){var r;if(t.altKey)r=this["findWordBoundary"+i](this[e]);else{if(!t.metaKey&&35!==t.keyCode&&36!==t.keyCode)return this[e]+="Left"===i?-1:1,!0;r=this["findLineBoundary"+i](this[e])}if(void 0!==typeof r&&this[e]!==r)return this[e]=r,!0},_moveLeft:function(t,e){return this._move(t,e,"Left")},_moveRight:function(t,e){return this._move(t,e,"Right")},moveCursorLeftWithoutShift:function(t){var e=!0;return this._selectionDirection="left",this.selectionEnd===this.selectionStart&&0!==this.selectionStart&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e},moveCursorLeftWithShift:function(t){return"right"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):0!==this.selectionStart?(this._selectionDirection="left",this._moveLeft(t,"selectionStart")):void 0},moveCursorRight:function(t){this.selectionStart>=this.text.length&&this.selectionEnd>=this.text.length||this._moveCursorLeftOrRight("Right",t)},_moveCursorLeftOrRight:function(t,e){var i="moveCursor"+t+"With";this._currentCursorOpacity=1,e.shiftKey?i+="Shift":i+="outShift",this[i](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())},moveCursorRightWithShift:function(t){return"left"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this.text.length?(this._selectionDirection="right",this._moveRight(t,"selectionEnd")):void 0},moveCursorRightWithoutShift:function(t){var e=!0;return this._selectionDirection="right",this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e},removeChars:function(t){this.selectionStart===this.selectionEnd?this._removeCharsNearCursor(t):this._removeCharsFromTo(this.selectionStart,this.selectionEnd),this.set("dirty",!0),this.setSelectionEnd(this.selectionStart),this._removeExtraneousStyles(),this.canvas&&this.canvas.renderAll(),this.setCoords(),this.fire("changed"),this.canvas&&this.canvas.fire("text:changed",{target:this})},_removeCharsNearCursor:function(t){if(0!==this.selectionStart)if(t.metaKey){var e=this.findLineBoundaryLeft(this.selectionStart);this._removeCharsFromTo(e,this.selectionStart),this.setSelectionStart(e)}else if(t.altKey){var i=this.findWordBoundaryLeft(this.selectionStart);this._removeCharsFromTo(i,this.selectionStart),this.setSelectionStart(i)}else this._removeSingleCharAndStyle(this.selectionStart),this.setSelectionStart(this.selectionStart-1)}}),function(){var t=fabric.util.toFixed,e=fabric.Object.NUM_FRACTION_DIGITS;fabric.util.object.extend(fabric.IText.prototype,{_setSVGTextLineText:function(t,e,i,r,n,s){this._getLineStyle(t)?this._setSVGTextLineChars(t,e,i,r,s):fabric.Text.prototype._setSVGTextLineText.call(this,t,e,i,r,n)},_setSVGTextLineChars:function(t,e,i,r,n){for(var s=this._textLines[t],o=0,a=this._getLineLeftOffset(this._getLineWidth(this.ctx,t))-this.width/2,h=this._getSVGLineTopOffset(t),c=this._getHeightOfLine(this.ctx,t),l=0,u=s.length;l<u;l++){var f=this._getStyleDeclaration(t,l)||{};e.push(this._createTextCharSpan(s[l],f,a,h.lineTop+h.offset,o));var d=this._getWidthOfChar(this.ctx,s[l],t,l);f.textBackgroundColor&&n.push(this._createTextCharBg(f,a,h.lineTop,c,d,o)),o+=d}},_getSVGLineTopOffset:function(t){for(var e=0,i=0,r=0;r<t;r++)e+=this._getHeightOfLine(this.ctx,r);return i=this._getHeightOfLine(this.ctx,r),{lineTop:e,offset:(this._fontSizeMult-this._fontSizeFraction)*i/(this.lineHeight*this._fontSizeMult)}},_createTextCharBg:function(i,r,n,s,o,a){return['\t\t<rect fill="',i.textBackgroundColor,'" x="',t(r+a,e),'" y="',t(n-this.height/2,e),'" width="',t(o,e),'" height="',t(s/this.lineHeight,e),'"></rect>\n'].join("")},_createTextCharSpan:function(i,r,n,s,o){var a=this.getSvgStyles.call(fabric.util.object.extend({visible:!0,fill:this.fill,stroke:this.stroke,type:"text",getSvgFilter:fabric.Object.prototype.getSvgFilter},r));return['\t\t\t<tspan x="',t(n+o,e),'" y="',t(s-this.height/2,e),'" ',r.fontFamily?'font-family="'+r.fontFamily.replace(/"/g,"'")+'" ':"",r.fontSize?'font-size="'+r.fontSize+'" ':"",r.fontStyle?'font-style="'+r.fontStyle+'" ':"",r.fontWeight?'font-weight="'+r.fontWeight+'" ':"",r.textDecoration?'text-decoration="'+r.textDecoration+'" ':"",'style="',a,'">',fabric.util.string.escapeXml(i),"</tspan>\n"].join("")}})}(),function(t){"use strict";var e=t.fabric||(t.fabric={});e.Textbox=e.util.createClass(e.IText,e.Observable,{type:"textbox",minWidth:20,dynamicMinWidth:2,__cachedLines:null,lockScalingY:!0,lockScalingFlip:!0,noScaleCache:!1,initialize:function(t,i){this.callSuper("initialize",t,i),this.setControlsVisibility(e.Textbox.getTextboxControlVisibility()),this.ctx=this.objectCaching?this._cacheContext:e.util.createCanvasElement().getContext("2d"),this._dimensionAffectingProps.push("width")},_initDimensions:function(t){this.__skipDimension||(t||(t=e.util.createCanvasElement().getContext("2d"),this._setTextStyles(t),this.clearContextTop()),this.dynamicMinWidth=0,this._textLines=this._splitTextIntoLines(t),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this._clearCache(),this.height=this._getTextHeight(t))},_generateStyleMap:function(){for(var t=0,e=0,i=0,r={},n=0;n<this._textLines.length;n++)"\n"===this.text[i]&&n>0?(e=0,i++,t++):" "===this.text[i]&&n>0&&(e++,i++),r[n]={line:t,offset:e},i+=this._textLines[n].length,e+=this._textLines[n].length;return r},_getStyleDeclaration:function(t,e,i){if(this._styleMap){var r=this._styleMap[t];if(!r)return i?{}:null;t=r.line,e=r.offset+e}return this.callSuper("_getStyleDeclaration",t,e,i)},_setStyleDeclaration:function(t,e,i){var r=this._styleMap[t];t=r.line,e=r.offset+e,this.styles[t][e]=i},_deleteStyleDeclaration:function(t,e){var i=this._styleMap[t];t=i.line,e=i.offset+e,delete this.styles[t][e]},_getLineStyle:function(t){var e=this._styleMap[t];return this.styles[e.line]},_setLineStyle:function(t,e){var i=this._styleMap[t];this.styles[i.line]=e},_deleteLineStyle:function(t){var e=this._styleMap[t];delete this.styles[e.line]},_wrapText:function(t,e){var i,r=e.split(this._reNewline),n=[];for(i=0;i<r.length;i++)n=n.concat(this._wrapLine(t,r[i],i));return n},_measureText:function(t,e,i,r){var n=0;r=r||0;for(var s=0,o=e.length;s<o;s++)n+=this._getWidthOfChar(t,e[s],i,s+r);return n},_wrapLine:function(t,e,i){for(var r=0,n=[],s="",o=e.split(" "),a="",h=0,c=0,l=0,u=0,f=!0,d=this._getWidthOfCharSpacing(),g=0;g<o.length;g++)a=o[g],c=this._measureText(t,a,i,h),h+=a.length,(r+=l+c-d)>=this.width&&!f?(n.push(s),s="",r=c,f=!0):r+=d,f||(s+=" "),s+=a,l=this._measureText(t," ",i,h),h++,f=!1,c>u&&(u=c);return g&&n.push(s),u>this.dynamicMinWidth&&(this.dynamicMinWidth=u-d),n},_splitTextIntoLines:function(t){t=t||this.ctx;var e=this.textAlign;this._styleMap=null,t.save(),this._setTextStyles(t),this.textAlign="left";var i=this._wrapText(t,this.text);return this.textAlign=e,t.restore(),this._textLines=i,this._styleMap=this._generateStyleMap(),i},setOnGroup:function(t,e){"scaleX"===t&&(this.set("scaleX",Math.abs(1/e)),this.set("width",this.get("width")*e/(void 0===this.__oldScaleX?1:this.__oldScaleX)),this.__oldScaleX=e)},get2DCursorLocation:function(t){void 0===t&&(t=this.selectionStart);for(var e=this._textLines.length,i=0,r=0;r<e;r++){var n=this._textLines[r].length;if(t<=i+n)return{lineIndex:r,charIndex:t-i};i+=n,"\n"!==this.text[i]&&" "!==this.text[i]||i++}return{lineIndex:e-1,charIndex:this._textLines[e-1].length}},_getCursorBoundariesOffsets:function(t,e){for(var i=0,r=0,n=this.get2DCursorLocation(),s=this._textLines[n.lineIndex].split(""),o=this._getLineLeftOffset(this._getLineWidth(this.ctx,n.lineIndex)),a=0;a<n.charIndex;a++)r+=this._getWidthOfChar(this.ctx,s[a],n.lineIndex,a);for(a=0;a<n.lineIndex;a++)i+=this._getHeightOfLine(this.ctx,a);return"cursor"===e&&(i+=(1-this._fontSizeFraction)*this._getHeightOfLine(this.ctx,n.lineIndex)/this.lineHeight-this.getCurrentCharFontSize(n.lineIndex,n.charIndex)*(1-this._fontSizeFraction)),{top:i,left:r,lineLeft:o}},getMinWidth:function(){return Math.max(this.minWidth,this.dynamicMinWidth)},toObject:function(t){return this.callSuper("toObject",["minWidth"].concat(t))}}),e.Textbox.fromObject=function(t,i,r){return e.Object._fromObject("Textbox",t,i,r,"text")},e.Textbox.getTextboxControlVisibility=function(){return{tl:!1,tr:!1,br:!1,bl:!1,ml:!0,mt:!1,mr:!0,mb:!1,mtr:!0}}}("undefined"!=typeof exports?exports:this),function(){var t=fabric.Canvas.prototype._setObjectScale;fabric.Canvas.prototype._setObjectScale=function(e,i,r,n,s,o,a){var h=i.target;if(!(h instanceof fabric.Textbox))return t.call(fabric.Canvas.prototype,e,i,r,n,s,o,a);var c=h.width*(e.x/i.scaleX/(h.width+h.strokeWidth));return c>=h.getMinWidth()?(h.set("width",c),!0):void 0},fabric.Group.prototype._refreshControlsVisibility=function(){if(void 0!==fabric.Textbox)for(var t=this._objects.length;t--;)if(this._objects[t]instanceof fabric.Textbox)return void this.setControlsVisibility(fabric.Textbox.getTextboxControlVisibility())},fabric.util.object.extend(fabric.Textbox.prototype,{_removeExtraneousStyles:function(){for(var t in this._styleMap)this._textLines[t]||delete this.styles[this._styleMap[t].line]},insertCharStyleObject:function(t,e,i){var r=this._styleMap[t];t=r.line,e=r.offset+e,fabric.IText.prototype.insertCharStyleObject.apply(this,[t,e,i])},insertNewlineStyleObject:function(t,e,i){var r=this._styleMap[t];t=r.line,e=r.offset+e,fabric.IText.prototype.insertNewlineStyleObject.apply(this,[t,e,i])},shiftLineStyles:function(t,e){t=this._styleMap[t].line,fabric.IText.prototype.shiftLineStyles.call(this,t,e)},_getTextOnPreviousLine:function(t){for(var e=this._textLines[t-1];this._styleMap[t-2]&&this._styleMap[t-2].line===this._styleMap[t-1].line;)e=this._textLines[t-2]+e,t--;return e},removeStyleObject:function(t,e){var i=this.get2DCursorLocation(e),r=this._styleMap[i.lineIndex],n=r.line,s=r.offset+i.charIndex;this._removeStyleObject(t,i,n,s)}})}(),function(){var t=fabric.IText.prototype._getNewSelectionStartFromOffset;fabric.IText.prototype._getNewSelectionStartFromOffset=function(e,i,r,n,s){n=t.call(this,e,i,r,n,s);for(var o=0,a=0,h=0;h<this._textLines.length&&!((o+=this._textLines[h].length)+a>=n);h++)"\n"!==this.text[o+a]&&" "!==this.text[o+a]||a++;return n-h+a}}(),function(){function request(t,e,i){var r=URL.parse(t);r.port||(r.port=0===r.protocol.indexOf("https:")?443:80);var n=(0===r.protocol.indexOf("https:")?HTTPS:HTTP).request({hostname:r.hostname,port:r.port,path:r.path,method:"GET"},function(t){var r="";e&&t.setEncoding(e),t.on("end",function(){i(r)}),t.on("data",function(e){200===t.statusCode&&(r+=e)})});n.on("error",function(t){t.errno===process.ECONNREFUSED?fabric.log("ECONNREFUSED: connection refused to "+r.hostname+":"+r.port):fabric.log(t.message),i(null)}),n.end()}function requestFs(t,e){require("fs").readFile(t,function(t,i){if(t)throw fabric.log(t),t;e(i)})}if("undefined"==typeof document||"undefined"==typeof window){var DOMParser=require("xmldom").DOMParser,URL=require("url"),HTTP=require("http"),HTTPS=require("https"),Canvas=require("canvas"),Image=require("canvas").Image;fabric.util.loadImage=function(t,e,i){function r(r){r?(n.src=new Buffer(r,"binary"),n._src=t,e&&e.call(i,n)):(n=null,e&&e.call(i,null,!0))}var n=new Image;t&&(t instanceof Buffer||0===t.indexOf("data"))?(n.src=n._src=t,e&&e.call(i,n)):t&&0!==t.indexOf("http")?requestFs(t,r):t?request(t,"binary",r):e&&e.call(i,t)},fabric.loadSVGFromURL=function(t,e,i){0!==(t=t.replace(/^\n\s*/,"").replace(/\?.*$/,"").trim()).indexOf("http")?requestFs(t,function(t){fabric.loadSVGFromString(t.toString(),e,i)}):request(t,"",function(t){fabric.loadSVGFromString(t,e,i)})},fabric.loadSVGFromString=function(t,e,i){var r=(new DOMParser).parseFromString(t);fabric.parseSVGDocument(r.documentElement,function(t,i){e&&e(t,i)},i)},fabric.util.getScript=function(url,callback){request(url,"",function(body){eval(body),callback&&callback()})},fabric.createCanvasForNode=function(t,e,i,r){r=r||i;var n=fabric.document.createElement("canvas"),s=new Canvas(t||600,e||600,r),o=new Canvas(t||600,e||600,r);n.style={},n.width=s.width,n.height=s.height,(i=i||{}).nodeCanvas=s,i.nodeCacheCanvas=o;var a=new(fabric.Canvas||fabric.StaticCanvas)(n,i);return a.nodeCanvas=s,a.nodeCacheCanvas=o,a.contextContainer=s.getContext("2d"),a.contextCache=o.getContext("2d"),a.Font=Canvas.Font,a};var originaInitStatic=fabric.StaticCanvas.prototype._initStatic;fabric.StaticCanvas.prototype._initStatic=function(t,e){t=t||fabric.document.createElement("canvas"),this.nodeCanvas=new Canvas(t.width,t.height),this.nodeCacheCanvas=new Canvas(t.width,t.height),originaInitStatic.call(this,t,e),this.contextContainer=this.nodeCanvas.getContext("2d"),this.contextCache=this.nodeCacheCanvas.getContext("2d"),this.Font=Canvas.Font},fabric.StaticCanvas.prototype.createPNGStream=function(){return this.nodeCanvas.createPNGStream()},fabric.StaticCanvas.prototype.createJPEGStream=function(t){return this.nodeCanvas.createJPEGStream(t)},fabric.StaticCanvas.prototype._initRetinaScaling=function(){if(this._isRetinaScaling())return this.lowerCanvasEl.setAttribute("width",this.width*fabric.devicePixelRatio),this.lowerCanvasEl.setAttribute("height",this.height*fabric.devicePixelRatio),this.nodeCanvas.width=this.width*fabric.devicePixelRatio,this.nodeCanvas.height=this.height*fabric.devicePixelRatio,this.contextContainer.scale(fabric.devicePixelRatio,fabric.devicePixelRatio),this},fabric.Canvas&&(fabric.Canvas.prototype._initRetinaScaling=fabric.StaticCanvas.prototype._initRetinaScaling);var origSetBackstoreDimension=fabric.StaticCanvas.prototype._setBackstoreDimension;fabric.StaticCanvas.prototype._setBackstoreDimension=function(t,e){return origSetBackstoreDimension.call(this,t,e),this.nodeCanvas[t]=e,this},fabric.Canvas&&(fabric.Canvas.prototype._setBackstoreDimension=fabric.StaticCanvas.prototype._setBackstoreDimension)}}();
"use strict";!function(a){var b=a.fabric||(a.fabric={}),c="1.6.0",d=function(){return"undefined"!=typeof G_vmlCanvasManager},e=b.util.degreesToRadians,f={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7};c.localeCompare(a.fabric.version)>-1&&console.warn("this extension might not be fully compatible with your version of fabric.js ("+a.fabric.version+").Consider using the latest compatible build of fabric.js (> "+c+")"),b.util.object.extend(b.Object.prototype,{useCustomIcons:!1,cornerBackgroundColor:"transparent",cornerShape:"",cornerPadding:0,customiseCornerIcons:function(a,b){var c,d;for(c in a)a.hasOwnProperty(c)&&(d={},void 0!==a[c].cornerShape&&(this.cornerShape=a[c].cornerShape),void 0!==a[c].cornerBackgroundColor&&(this.cornerBackgroundColor=a[c].cornerBackgroundColor),void 0!==a[c].borderColor&&(this.borderColor=a[c].borderColor),void 0!==a[c].cornerSize&&(this.cornerSize=a[c].cornerSize),void 0!==a[c].cornerPadding&&(this.cornerPadding=a[c].cornerPadding),void 0===a[c].icon&&"settings"!==Object.keys(a)[0]||(this.useCustomIcons=!0,void 0!==a[c].settings&&(d.settings=a[c].settings),void 0!==a[c].icon&&(d.icon=a[c].icon,this.loadIcon(c,d,function(){b&&"function"==typeof b&&b()}))))},loadIcon:function(a,c,d){var e=this,f=new Image;f.onload=function(){e[a+"Icon"]=this,c.settings&&(e[a+"Settings"]=c.settings),d&&"function"==typeof d&&d()},f.onerror=function(){b.warn(this.src+" icon is not an image")},(c.icon.match(/^http[s]?:\/\//)||"//"===c.icon.substring(0,2))&&(f.crossOrigin="Anonymous"),f.src=c.icon},customizeCornerIcons:function(a){this.customiseCornerIcons(a)},drawControls:function(a){if(!this.hasControls)return this;var b,c=this._calculateCurrentDimensions(),d=c.x,e=c.y,f=this.cornerSize,g=-(d+f)/2,h=-(e+f)/2;return this.useCustomIcons?b="drawImage":(a.lineWidth=1,a.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,a.strokeStyle=a.fillStyle=this.cornerColor,this.transparentCorners||(a.strokeStyle=this.cornerStrokeColor),b=this.transparentCorners?"stroke":"fill"),a.save(),this._setLineDash(a,this.cornerDashArray,null),this._drawControl("tl",a,b,g,h,this.tlIcon,this.tlSettings),this._drawControl("tr",a,b,g+d,h,this.trIcon,this.trSettings),this._drawControl("bl",a,b,g,h+e,this.blIcon,this.blSettings),this._drawControl("br",a,b,g+d,h+e,this.brIcon,this.brSettings),this.get("lockUniScaling")||(this._drawControl("mt",a,b,g+d/2,h,this.mtIcon,this.mtSettings),this._drawControl("mb",a,b,g+d/2,h+e,this.mbIcon,this.mbSettings),this._drawControl("mr",a,b,g+d,h+e/2,this.mrIcon,this.mrSettings),this._drawControl("ml",a,b,g,h+e/2,this.mlIcon,this.mlSettings)),this.hasRotatingPoint&&this._drawControl("mtr",a,b,g+d/2,h-this.rotatingPointOffset,this.mtrIcon,this.mtrSettings),a.restore(),this},_drawControl:function(a,b,c,e,f,g,h){if(this.isControlVisible(a)){var i=this.cornerSize,j=this.cornerStrokeColor||"transparent",k=this.cornerBackgroundColor||"black",l=this.cornerShape||"rect",m=this.cornerPadding||10;if(h&&(h.cornerSize&&(e=e+i/2-h.cornerSize/2,f=f+i/2-h.cornerSize/2,i=h.cornerSize),l=h.cornerShape||l,k=h.cornerBackgroundColor||k,m=h.cornerPadding||m,j=h.cornerStrokeColor||j),this.useCustomIcons)if(l){switch(b.globalAlpha=1,b.fillStyle=k,b.lineWidth=1,b.strokeStyle=j,l){case"rect":b.fillRect(e,f,i,i),j&&b.strokeRect(e,f,i,i);break;case"circle":b.beginPath(),b.arc(e+i/2,f+i/2,i/2,0,2*Math.PI),b.fill(),j&&b.stroke(),b.closePath()}void 0!==g&&b[c](g,e+m/2,f+m/2,i-m,i-m)}else void 0!==g&&b[c](g,e,f,i,i);else d()||this.transparentCorners||b.clearRect(e,f,i,i),b[c+"Rect"](e,f,i,i),!this.transparentCorners&&j&&b.strokeRect(e,f,i,i)}}}),b.util.object.extend(b.Canvas.prototype,{overwriteActions:!1,fixedCursors:!1,customiseControls:function(a){var b;for(b in a)a.hasOwnProperty(b)&&(void 0!==a[b].action&&(this.overwriteActions=!0,this.setCustomAction(b,a[b].action)),void 0!==a[b].cursor&&(this.fixedCursors=!0,this.setCustomCursor(b,a[b].cursor)))},setCustomAction:function(a,b){this[a+"Action"]=b},setCustomCursor:function(a,b){this[a+"cursorIcon"]=b},customizeControls:function(a){this.customiseControls(a)},_getActionFromCorner:function(a,b,c){if(!b)return"drag";if(b)if(this[b+"Action"]&&this.overwriteActions)switch(b){case"mtr":return this[b+"Action"]||"rotate";case"ml":case"mr":return c[this.altActionKey]?c[this.altActionKey]?"skewY":"scaleX":this[b+"Action"];case"mt":case"mb":return c[this.altActionKey]?c[this.altActionKey]?"skewY":"scaleY":this[b+"Action"];default:return this[b+"Action"]||"scale"}else switch(b){case"mtr":return"rotate";case"ml":case"mr":return c[this.altActionKey]?"skewY":"scaleX";case"mt":case"mb":return c[this.altActionKey]?"skewX":"scaleY";default:return"scale"}return!1},_setupCurrentTransform:function(a,b){if(b){var c=this.getPointer(a),d=b._findTargetCorner(this.getPointer(a,!0)),f=this._getActionFromCorner(b,d,a),g=this._getOriginFromCorner(b,d);"function"==typeof f&&(f.call(this,a,b),f="void"),this._currentTransform={target:b,action:f,corner:d,scaleX:b.scaleX,scaleY:b.scaleY,skewX:b.skewX,skewY:b.skewY,offsetX:c.x-b.left,offsetY:c.y-b.top,originX:g.x,originY:g.y,ex:c.x,ey:c.y,lastX:c.x,lastY:c.y,left:b.left,top:b.top,theta:e(b.angle),width:b.width*b.scaleX,mouseXSign:1,mouseYSign:1,shiftKey:a.shiftKey,altKey:a[this.centeredKey]},this._currentTransform.original={left:b.left,top:b.top,scaleX:b.scaleX,scaleY:b.scaleY,skewX:b.skewX,skewY:b.skewY,originX:g.x,originY:g.y},"remove"===f&&this._removeAction(a,b),"moveUp"===f&&this._moveLayerUpAction(a,b),"moveDown"===f&&this._moveLayerDownAction(a,b),"object"==typeof f&&"rotateByDegrees"===Object.keys(f)[0]&&this._rotateByDegrees(a,b,f.rotateByDegrees),this._resetCurrentTransform()}},_removeAction:function(a,b){var c=this;this.getActiveGroup()&&"undefined"!==this.getActiveGroup()?(this.getActiveGroup().forEachObject(function(a){a.off(),a.remove()}),this.discardActiveGroup(),setTimeout(function(){c.deactivateAll()},0)):(b.off(),b.remove(),setTimeout(function(){c.deactivateAll()},0))},_moveLayerUpAction:function(a,b){this.getActiveGroup()&&"undefined"!==this.getActiveGroup()?this.getActiveGroup().forEachObject(function(a){a.bringForward()}):b.bringForward()},_moveLayerDownAction:function(a,b){this.getActiveGroup()&&"undefined"!==this.getActiveGroup()?this.getActiveGroup().forEachObject(function(a){a.sendBackwards()}):b.sendBackwards()},_rotateByDegrees:function(a,b,c){var d=parseInt(b.getAngle())+c,e=!1;"center"===b.originX&&"center"===b.originY||!b.centeredRotation||(this._setOriginToCenter(b),e=!0),d=d>360?d-360:d,this.getActiveGroup()&&"undefined"!==this.getActiveGroup()?this.getActiveGroup().forEachObject(function(a){a.setAngle(d).setCoords()}):b.setAngle(d).setCoords(),e&&this._setCenterToOrigin(b),this.renderAll()},_setCornerCursor:function(a,b,c){if(this.fixedCursors&&this[a+"cursorIcon"])this[a+"cursorIcon"].match(/\.(?:jpe?g|png|gif|jpg|jpeg|svg)$/)?this.setCursor("url("+this[a+"cursorIcon"]+"), auto"):"resize"===this[a+"cursorIcon"]?this.setCursor(this._getRotatedCornerCursor(a,b,c)):this.setCursor(this[a+"cursorIcon"]);else if(a in f)this.setCursor(this._getRotatedCornerCursor(a,b,c));else{if("mtr"!==a||!b.hasRotatingPoint)return this.setCursor(this.defaultCursor),!1;this.setCursor(this.rotationCursor)}return!1}}),"undefined"!=typeof exports&&(module.exports=this)}(window);
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.jspdf=e()}(this,function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=(function(){function t(t){this.value=t}function e(e){function n(i,o){try{var a=e[i](o),s=a.value;s instanceof t?Promise.resolve(s.value).then(function(t){n("next",t)},function(t){n("throw",t)}):r(a.done?"return":"normal",a.value)}catch(t){r("throw",t)}}function r(t,e){switch(t){case"return":i.resolve({value:e,done:!0});break;case"throw":i.reject(e);break;default:i.resolve({value:e,done:!1})}(i=i.next)?n(i.key,i.arg):o=null}var i,o;this._invoke=function(t,e){return new Promise(function(r,a){var s={key:t,arg:e,resolve:r,reject:a,next:null};o?o=o.next=s:(i=o=s,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(e){function n(t){var n={};this.subscribe=function(t,e,r){if("function"!=typeof e)return!1;n.hasOwnProperty(t)||(n[t]={});var i=Math.random().toString(35);return n[t][i]=[e,!!r],i},this.unsubscribe=function(t){for(var e in n)if(n[e][t])return delete n[e][t],!0;return!1},this.publish=function(r){if(n.hasOwnProperty(r)){var i=Array.prototype.slice.call(arguments,1),o=[];for(var a in n[r]){var s=n[r][a];try{s[0].apply(t,i)}catch(t){e.console&&console.error("jsPDF PubSub Error",t.message,t)}s[1]&&o.push(a)}o.length&&o.forEach(this.unsubscribe)}}}function i(c,l,u,h){var f={};"object"===(void 0===c?"undefined":t(c))&&(c=(f=c).orientation,l=f.unit||l,u=f.format||u,h=f.compress||f.compressPdf||h),l=l||"mm",u=u||"a4",c=(""+(c||"P")).toLowerCase();(""+u).toLowerCase();var d,p,m,g,w,y,v,b,x,k=!!h&&"function"==typeof Uint8Array,_=f.textColor||"0 g",C=f.drawColor||"0 G",A=f.fontSize||16,S=f.lineHeight||1.15,q=f.lineWidth||.200025,T=2,P=!1,I=[],E={},O={},F=0,B=[],R=[],D=[],j=[],z=[],N=0,L=0,M=0,U={title:"",subject:"",author:"",keywords:"",creator:""},H={},W=new n(H),X=f.hotfixes||[],V=function(t){return t.toFixed(2)},G=function(t){return t.toFixed(3)},Y=function(t){return("0"+parseInt(t)).slice(-2)},J=function(t){P?B[g].push(t):(M+=t.length+1,j.push(t))},Q=function(){return T++,I[T]=M,J(T+" 0 obj"),T},K=function(t){J("stream"),J(t),J("endstream")},$=function(){var t,n,r,a,s,c,l,u,h,f=[];for(l=e.adler32cs||i.adler32cs,k&&void 0===l&&(k=!1),t=1;t<=F;t++){if(f.push(Q()),u=(w=D[t].width)*p,h=(y=D[t].height)*p,J("<</Type /Page"),J("/Parent 1 0 R"),J("/Resources 2 0 R"),J("/MediaBox [0 0 "+V(u)+" "+V(h)+"]"),W.publish("putPage",{pageNumber:t,page:B[t]}),J("/Contents "+(T+1)+" 0 R"),J(">>"),J("endobj"),n=B[t].join("\n"),Q(),k){for(r=[],a=n.length;a--;)r[a]=n.charCodeAt(a);c=l.from(n),(s=new o(6)).append(new Uint8Array(r)),n=s.flush(),(r=new Uint8Array(n.length+6)).set(new Uint8Array([120,156])),r.set(n,2),r.set(new Uint8Array([255&c,c>>8&255,c>>16&255,c>>24&255]),n.length+2),n=String.fromCharCode.apply(null,r),J("<</Length "+n.length+" /Filter [/FlateDecode]>>")}else J("<</Length "+n.length+">>");K(n),J("endobj")}I[1]=M,J("1 0 obj"),J("<</Type /Pages");var d="/Kids [";for(a=0;a<F;a++)d+=f[a]+" 0 R ";J(d+"]"),J("/Count "+F),J(">>"),J("endobj"),W.publish("postPutPages")},Z=function(t){t.objectNumber=Q(),J("<</BaseFont/"+t.PostScriptName+"/Type/Font"),"string"==typeof t.encoding&&J("/Encoding/"+t.encoding),J("/Subtype/Type1>>"),J("endobj")},tt=function(){for(var t in E)E.hasOwnProperty(t)&&Z(E[t])},et=function(){W.publish("putXobjectDict")},nt=function(){J("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),J("/Font <<");for(var t in E)E.hasOwnProperty(t)&&J("/"+t+" "+E[t].objectNumber+" 0 R");J(">>"),J("/XObject <<"),et(),J(">>")},rt=function(){tt(),W.publish("putResources"),I[2]=M,J("2 0 obj"),J("<<"),nt(),J(">>"),J("endobj"),W.publish("postPutResources")},it=function(){W.publish("putAdditionalObjects");for(var t=0;t<z.length;t++){var e=z[t];I[e.objId]=M,J(e.objId+" 0 obj"),J(e.content),J("endobj")}T+=z.length,W.publish("postPutAdditionalObjects")},ot=function(t,e,n){O.hasOwnProperty(e)||(O[e]={}),O[e][n]=t},at=function(t,e,n,r){var i="F"+(Object.keys(E).length+1).toString(10),o=E[i]={id:i,PostScriptName:t,fontName:e,fontStyle:n,encoding:r,metadata:{}};return ot(i,e,n),W.publish("addFont",o),i},st=function(t,e){var n,r,i,o,a,s,c,l,u;if(e=e||{},i=e.sourceEncoding||"Unicode",a=e.outputEncoding,(e.autoencode||a)&&E[d].metadata&&E[d].metadata[i]&&E[d].metadata[i].encoding&&(o=E[d].metadata[i].encoding,!a&&E[d].encoding&&(a=E[d].encoding),!a&&o.codePages&&(a=o.codePages[0]),"string"==typeof a&&(a=o[a]),a)){for(c=!1,s=[],n=0,r=t.length;n<r;n++)(l=a[t.charCodeAt(n)])?s.push(String.fromCharCode(l)):s.push(t[n]),s[n].charCodeAt(0)>>8&&(c=!0);t=s.join("")}for(n=t.length;void 0===c&&0!==n;)t.charCodeAt(n-1)>>8&&(c=!0),n--;if(!c)return t;for(s=e.noBOM?[]:[254,255],n=0,r=t.length;n<r;n++){if(l=t.charCodeAt(n),(u=l>>8)>>8)throw new Error("Character at position "+n+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(u),s.push(l-(u<<8))}return String.fromCharCode.apply(void 0,s)},ct=function(t,e){return st(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},lt=function(){J("/Producer (jsPDF "+i.version+")");for(var t in U)U.hasOwnProperty(t)&&U[t]&&J("/"+t.substr(0,1).toUpperCase()+t.substr(1)+" ("+ct(U[t])+")");var e=new Date,n=e.getTimezoneOffset(),r=n<0?"+":"-",o=Math.floor(Math.abs(n/60)),a=Math.abs(n%60),s=[r,Y(o),"'",Y(a),"'"].join("");J(["/CreationDate (D:",e.getFullYear(),Y(e.getMonth()+1),Y(e.getDate()),Y(e.getHours()),Y(e.getMinutes()),Y(e.getSeconds()),s,")"].join(""))},ut=function(){switch(J("/Type /Catalog"),J("/Pages 1 0 R"),b||(b="fullwidth"),b){case"fullwidth":J("/OpenAction [3 0 R /FitH null]");break;case"fullheight":J("/OpenAction [3 0 R /FitV null]");break;case"fullpage":J("/OpenAction [3 0 R /Fit]");break;case"original":J("/OpenAction [3 0 R /XYZ null null 1]");break;default:var t=""+b;"%"===t.substr(t.length-1)&&(b=parseInt(b)/100),"number"==typeof b&&J("/OpenAction [3 0 R /XYZ null null "+V(b)+"]")}switch(x||(x="continuous"),x){case"continuous":J("/PageLayout /OneColumn");break;case"single":J("/PageLayout /SinglePage");break;case"two":case"twoleft":J("/PageLayout /TwoColumnLeft");break;case"tworight":J("/PageLayout /TwoColumnRight")}v&&J("/PageMode /"+v),W.publish("putCatalog")},ht=function(){J("/Size "+(T+1)),J("/Root "+T+" 0 R"),J("/Info "+(T-1)+" 0 R")},ft=function(t,e){var n="string"==typeof e&&e.toLowerCase();if("string"==typeof t){var r=t.toLowerCase();s.hasOwnProperty(r)&&(t=s[r][0]/p,e=s[r][1]/p)}if(Array.isArray(t)&&(e=t[1],t=t[0]),n){switch(n.substr(0,1)){case"l":e>t&&(n="s");break;case"p":t>e&&(n="s")}"s"===n&&(m=t,t=e,e=m)}P=!0,B[++F]=[],D[F]={width:Number(t)||w,height:Number(e)||y},R[F]={},mt(F)},dt=function(){ft.apply(this,arguments),J(V(q*p)+" w"),J(C),0!==N&&J(N+" J"),0!==L&&J(L+" j"),W.publish("addPage",{pageNumber:F})},pt=function(t){t>0&&t<=F&&(B.splice(t,1),D.splice(t,1),g>--F&&(g=F),this.setPage(g))},mt=function(t){t>0&&t<=F&&(g=t,w=D[t].width,y=D[t].height)},gt=function(t,e){var n;switch(t=void 0!==t?t:E[d].fontName,e=void 0!==e?e:E[d].fontStyle,void 0!==t&&(t=t.toLowerCase()),t){case"sans-serif":case"verdana":case"arial":case"helvetica":t="helvetica";break;case"fixed":case"monospace":case"terminal":case"courier":t="courier";break;case"serif":case"cursive":case"fantasy":default:t="times"}try{n=O[t][e]}catch(t){}return n||null==(n=O.times[e])&&(n=O.times.normal),n},wt=function(){P=!1,T=2,M=0,j=[],I=[],z=[],W.publish("buildDocument"),J("%PDF-"+a),$(),it(),rt(),Q(),J("<<"),lt(),J(">>"),J("endobj"),Q(),J("<<"),ut(),J(">>"),J("endobj");var t,e=M,n="0000000000";for(J("xref"),J("0 "+(T+1)),J(n+" 65535 f "),t=1;t<=T;t++){var r=I[t];J("function"==typeof r?(n+I[t]()).slice(-10)+" 00000 n ":(n+I[t]).slice(-10)+" 00000 n ")}return J("trailer"),J("<<"),ht(),J(">>"),J("startxref"),J(""+e),J("%%EOF"),P=!0,j.join("\n")},yt=function(t){var e="S";return"F"===t?e="f":"FD"===t||"DF"===t?e="B":"f"!==t&&"f*"!==t&&"B"!==t&&"B*"!==t||(e=t),e},vt=function(){for(var t=wt(),e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n);e--;)r[e]=t.charCodeAt(e);return n},bt=function(){return new Blob([vt()],{type:"application/pdf"})},xt=function(t){return t.foo=function(){try{return t.apply(this,arguments)}catch(t){var n=t.stack||"";~n.indexOf(" at ")&&(n=n.split(" at ")[1]);var r="Error in function "+n.split("\n")[0].split("<")[0]+": "+t.message;if(!e.console)throw new Error(r);e.console.error(r,t),e.alert&&alert(r)}},t.foo.bar=t,t.foo}(function(t,n){var i="dataur"===(""+t).substr(0,6)?"data:application/pdf;base64,"+btoa(wt()):0;switch(t){case void 0:return wt();case"save":if(navigator.getUserMedia&&(void 0===e.URL||void 0===e.URL.createObjectURL))return H.output("dataurlnewwindow");r(bt(),n),"function"==typeof r.unload&&e.setTimeout&&setTimeout(r.unload,911);break;case"arraybuffer":return vt();case"blob":return bt();case"bloburi":case"bloburl":return e.URL&&e.URL.createObjectURL(bt())||void 0;case"datauristring":case"dataurlstring":return i;case"dataurlnewwindow":var o=e.open(i);if(o||"undefined"==typeof safari)return o;case"datauri":case"dataurl":return e.document.location.href=i;default:throw new Error('Output type "'+t+'" is not supported.')}}),kt=function(t){return!0===Array.isArray(X)&&X.indexOf(t)>-1};switch(l){case"pt":p=1;break;case"mm":p=72/25.4000508;break;case"cm":p=72/2.54000508;break;case"in":p=72;break;case"px":p=1==kt("px_scaling")?.75:96/72;break;case"pc":case"em":p=12;break;case"ex":p=6;break;default:throw"Invalid unit: "+l}H.internal={pdfEscape:ct,getStyle:yt,getFont:function(){return E[gt.apply(H,arguments)]},getFontSize:function(){return A},getLineHeight:function(){return A*S},write:function(t){J(1===arguments.length?t:Array.prototype.join.call(arguments," "))},getCoordinateString:function(t){return V(t*p)},getVerticalCoordinateString:function(t){return V((y-t)*p)},collections:{},newObject:Q,newAdditionalObject:function(){var t=2*B.length+1,e={objId:t+=z.length,content:""};return z.push(e),e},newObjectDeferred:function(){return T++,I[T]=function(){return M},T},newObjectDeferredBegin:function(t){I[t]=M},putStream:K,events:W,scaleFactor:p,pageSize:{get width(){return w},get height(){return y}},output:function(t,e){return xt(t,e)},getNumberOfPages:function(){return B.length-1},pages:B,out:J,f2:V,getPageInfo:function(t){return{objId:2*(t-1)+3,pageNumber:t,pageContext:R[t]}},getCurrentPageInfo:function(){return{objId:2*(g-1)+3,pageNumber:g,pageContext:R[g]}},getPDFVersion:function(){return a},hasHotfix:kt},H.addPage=function(){return dt.apply(this,arguments),this},H.setPage=function(){return mt.apply(this,arguments),this},H.insertPage=function(t){return this.addPage(),this.movePage(g,t),this},H.movePage=function(t,e){if(t>e){for(var n=B[t],r=D[t],i=R[t],o=t;o>e;o--)B[o]=B[o-1],D[o]=D[o-1],R[o]=R[o-1];B[e]=n,D[e]=r,R[e]=i,this.setPage(e)}else if(t<e){for(var n=B[t],r=D[t],i=R[t],o=t;o<e;o++)B[o]=B[o+1],D[o]=D[o+1],R[o]=R[o+1];B[e]=n,D[e]=r,R[e]=i,this.setPage(e)}return this},H.deletePage=function(){return pt.apply(this,arguments),this},H.setDisplayMode=function(t,e,n){if(b=t,x=e,v=n,-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(n))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+n+'" is not recognized.');return this},H.text=function(t,e,n,r,i,o){function a(t){return t=t.split("\t").join(Array(f.TabLen||9).join(" ")),ct(t,r)}"number"==typeof t&&(m=n,n=e,e=t,t=m),"string"==typeof t&&(t=t.match(/[\n\r]/)?t.split(/\r\n|\r|\n/g):[t]),"string"==typeof i&&(o=i,i=null),"string"==typeof r&&(o=r,r=null),"number"==typeof r&&(i=r,r=null);var s="",c="Td";if(i){i*=Math.PI/180;var l=Math.cos(i),u=Math.sin(i);s=[V(l),V(u),V(-1*u),V(l),""].join(" "),c="Tm"}"noBOM"in(r=r||{})||(r.noBOM=!0),"autoencode"in r||(r.autoencode=!0);var h="",g=this.internal.getCurrentPageInfo().pageContext;if(!0===r.stroke?!0!==g.lastTextWasStroke&&(h="1 Tr\n",g.lastTextWasStroke=!0):(g.lastTextWasStroke&&(h="0 Tr\n"),g.lastTextWasStroke=!1),void 0===this._runningPageHeight&&(this._runningPageHeight=0),"string"==typeof t)t=a(t);else{if("[object Array]"!==Object.prototype.toString.call(t))throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');for(var w=t.concat(),v=[],b=w.length;b--;)v.push(a(w.shift()));if(o){var x,k,C,q=A*S,T=t.map(function(t){return this.getStringUnitWidth(t)*A/p},this);if(C=Math.max.apply(Math,T),"center"===o)x=e-C/2,e-=T[0]/2;else{if("right"!==o)throw new Error('Unrecognized alignment option, use "center" or "right".');x=e-C,e-=T[0]}k=e,t=v[0];for(var P=1,b=v.length;P<b;P++){var I=C-T[P];"center"===o&&(I/=2),t+=") Tj\n"+(x-k+I)+" -"+q+" Td ("+v[P],k=x+I}}else t=v.join(") Tj\nT* (")}var E;return E=V((y-n)*p),J("BT\n/"+d+" "+A+" Tf\n"+A*S+" TL\n"+h+_+"\n"+s+V(e*p)+" "+E+" "+c+"\n("+t+") Tj\nET"),this},H.lstext=function(t,e,n,r){console.warn("jsPDF.lstext is deprecated");for(var i=0,o=t.length;i<o;i++,e+=r)this.text(t[i],e,n);return this},H.line=function(t,e,n,r){return this.lines([[n-t,r-e]],t,e)},H.clip=function(){J("W"),J("S")},H.clip_fixed=function(t){J("evenodd"===t?"W*":"W"),J("n")},H.lines=function(t,e,n,r,i,o){var a,s,c,l,u,h,f,d,g,w,v;for("number"==typeof t&&(m=n,n=e,e=t,t=m),r=r||[1,1],J(G(e*p)+" "+G((y-n)*p)+" m "),a=r[0],s=r[1],l=t.length,w=e,v=n,c=0;c<l;c++)2===(u=t[c]).length?(w=u[0]*a+w,v=u[1]*s+v,J(G(w*p)+" "+G((y-v)*p)+" l")):(h=u[0]*a+w,f=u[1]*s+v,d=u[2]*a+w,g=u[3]*s+v,w=u[4]*a+w,v=u[5]*s+v,J(G(h*p)+" "+G((y-f)*p)+" "+G(d*p)+" "+G((y-g)*p)+" "+G(w*p)+" "+G((y-v)*p)+" c"));return o&&J(" h"),null!==i&&J(yt(i)),this},H.rect=function(t,e,n,r,i){yt(i);return J([V(t*p),V((y-e)*p),V(n*p),V(-r*p),"re"].join(" ")),null!==i&&J(yt(i)),this},H.triangle=function(t,e,n,r,i,o,a){return this.lines([[n-t,r-e],[i-n,o-r],[t-i,e-o]],t,e,[1,1],a,!0),this},H.roundedRect=function(t,e,n,r,i,o,a){var s=4/3*(Math.SQRT2-1);return this.lines([[n-2*i,0],[i*s,0,i,o-o*s,i,o],[0,r-2*o],[0,o*s,-i*s,o,-i,o],[2*i-n,0],[-i*s,0,-i,-o*s,-i,-o],[0,2*o-r],[0,-o*s,i*s,-o,i,-o]],t+i,e,[1,1],a),this},H.ellipse=function(t,e,n,r,i){var o=4/3*(Math.SQRT2-1)*n,a=4/3*(Math.SQRT2-1)*r;return J([V((t+n)*p),V((y-e)*p),"m",V((t+n)*p),V((y-(e-a))*p),V((t+o)*p),V((y-(e-r))*p),V(t*p),V((y-(e-r))*p),"c"].join(" ")),J([V((t-o)*p),V((y-(e-r))*p),V((t-n)*p),V((y-(e-a))*p),V((t-n)*p),V((y-e)*p),"c"].join(" ")),J([V((t-n)*p),V((y-(e+a))*p),V((t-o)*p),V((y-(e+r))*p),V(t*p),V((y-(e+r))*p),"c"].join(" ")),J([V((t+o)*p),V((y-(e+r))*p),V((t+n)*p),V((y-(e+a))*p),V((t+n)*p),V((y-e)*p),"c"].join(" ")),null!==i&&J(yt(i)),this},H.circle=function(t,e,n,r){return this.ellipse(t,e,n,n,r)},H.setProperties=function(t){for(var e in U)U.hasOwnProperty(e)&&t[e]&&(U[e]=t[e]);return this},H.setFontSize=function(t){return A=t,this},H.setFont=function(t,e){return d=gt(t,e),this},H.setFontStyle=H.setFontType=function(t){return d=gt(void 0,t),this},H.getFontList=function(){var t,e,n,r={};for(t in O)if(O.hasOwnProperty(t)){r[t]=n=[];for(e in O[t])O[t].hasOwnProperty(e)&&n.push(e)}return r},H.addFont=function(t,e,n){at(t,e,n,"StandardEncoding")},H.setLineWidth=function(t){return J((t*p).toFixed(2)+" w"),this},H.setDrawColor=function(t,e,n,r){var i;return i=void 0===e||void 0===r&&t===e===n?"string"==typeof t?t+" G":V(t/255)+" G":void 0===r?"string"==typeof t?[t,e,n,"RG"].join(" "):[V(t/255),V(e/255),V(n/255),"RG"].join(" "):"string"==typeof t?[t,e,n,r,"K"].join(" "):[V(t),V(e),V(n),V(r),"K"].join(" "),J(i),this},H.setFillColor=function(e,n,r,i){var o;return void 0===n||void 0===i&&e===n===r?o="string"==typeof e?e+" g":V(e/255)+" g":void 0===i||"object"===(void 0===i?"undefined":t(i))?(o="string"==typeof e?[e,n,r,"rg"].join(" "):[V(e/255),V(n/255),V(r/255),"rg"].join(" "),i&&0===i.a&&(o=["255","255","255","rg"].join(" "))):o="string"==typeof e?[e,n,r,i,"k"].join(" "):[V(e),V(n),V(r),V(i),"k"].join(" "),J(o),this},H.setTextColor=function(t,e,n){if("string"==typeof t&&/^#[0-9A-Fa-f]{6}$/.test(t)){var r=parseInt(t.substr(1),16);t=r>>16&255,e=r>>8&255,n=255&r}return _=0===t&&0===e&&0===n||void 0===e?G(t/255)+" g":[G(t/255),G(e/255),G(n/255),"rg"].join(" "),this},H.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},H.setLineCap=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return N=e,J(e+" J"),this},H.setLineJoin=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return L=e,J(e+" j"),this},H.output=xt,H.save=function(t){H.output("save",t)};for(var _t in i.API)i.API.hasOwnProperty(_t)&&("events"===_t&&i.API.events.length?function(t,e){var n,r,i;for(i=e.length-1;-1!==i;i--)n=e[i][0],r=e[i][1],t.subscribe.apply(t,[n].concat("function"==typeof r?[r]:r))}(W,i.API.events):H[_t]=i.API[_t]);return function(){for(var t=[["Helvetica","helvetica","normal"],["Helvetica-Bold","helvetica","bold"],["Helvetica-Oblique","helvetica","italic"],["Helvetica-BoldOblique","helvetica","bolditalic"],["Courier","courier","normal"],["Courier-Bold","courier","bold"],["Courier-Oblique","courier","italic"],["Courier-BoldOblique","courier","bolditalic"],["Times-Roman","times","normal"],["Times-Bold","times","bold"],["Times-Italic","times","italic"],["Times-BoldItalic","times","bolditalic"],["ZapfDingbats","zapfdingbats"]],e=0,n=t.length;e<n;e++){var r=at(t[e][0],t[e][1],t[e][2],"StandardEncoding"),i=t[e][0].split("-");ot(r,i[0],i[1]||"")}W.publish("addFonts",{fonts:E,dictionary:O})}(),d="F1",dt(u,c),W.publish("initialized"),H}var a="1.3",s={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};return i.API={events:[]},i.version="1.x-master","function"==typeof define&&define.amd?define("jsPDF",function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.jsPDF=i,i}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||void 0));/**
 * jsPDF AcroForm Plugin
 * Copyright (c) 2016 Alexander Weidt, https://github.com/BiggA94
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(window.AcroForm=function(t){var n=window.AcroForm;n.scale=function(t){return t*(r.internal.scaleFactor/1)},n.antiScale=function(t){return 1/r.internal.scaleFactor*t};var r={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null};e.API.acroformPlugin=r;var i=function(){for(var t in this.acroformPlugin.acroFormDictionaryRoot.Fields){var e=this.acroformPlugin.acroFormDictionaryRoot.Fields[t];e.hasAnnotation&&a.call(this,e)}},o=function(){if(this.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");this.acroformPlugin.acroFormDictionaryRoot=new n.AcroFormDictionary,this.acroformPlugin.internal=this.internal,this.acroformPlugin.acroFormDictionaryRoot._eventID=this.internal.events.subscribe("postPutResources",l),this.internal.events.subscribe("buildDocument",i),this.internal.events.subscribe("putCatalog",c),this.internal.events.subscribe("postPutPages",u)},a=function(t){var n={type:"reference",object:t};e.API.annotationPlugin.annotations[this.internal.getPageInfo(t.page).pageNumber].push(n)},s=function(t){this.acroformPlugin.printedOut&&(this.acroformPlugin.printedOut=!1,this.acroformPlugin.acroFormDictionaryRoot=null),this.acroformPlugin.acroFormDictionaryRoot||o.call(this),this.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)},c=function(){void 0!==this.acroformPlugin.acroFormDictionaryRoot?this.internal.write("/AcroForm "+this.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R"):console.log("Root missing...")},l=function(){this.internal.events.unsubscribe(this.acroformPlugin.acroFormDictionaryRoot._eventID),delete this.acroformPlugin.acroFormDictionaryRoot._eventID,this.acroformPlugin.printedOut=!0},u=function(t){var e=!t;t||(this.internal.newObjectDeferredBegin(this.acroformPlugin.acroFormDictionaryRoot.objId),this.internal.out(this.acroformPlugin.acroFormDictionaryRoot.getString()));var t=t||this.acroformPlugin.acroFormDictionaryRoot.Kids;for(var r in t){var i=t[r],o=i.Rect;i.Rect&&(i.Rect=n.internal.calculateCoordinates.call(this,i.Rect)),this.internal.newObjectDeferredBegin(i.objId);var a="";if(a+=i.objId+" 0 obj\n",a+="<<\n"+i.getContent(),i.Rect=o,i.hasAppearanceStream&&!i.appearanceStreamContent){var s=n.internal.calculateAppearanceStream.call(this,i);a+="/AP << /N "+s+" >>\n",this.acroformPlugin.xForms.push(s)}if(i.appearanceStreamContent){a+="/AP << ";for(var c in i.appearanceStreamContent){var l=i.appearanceStreamContent[c];if(a+="/"+c+" ",a+="<< ",Object.keys(l).length>=1||Array.isArray(l))for(var r in l)"function"==typeof(u=l[r])&&(u=u.call(this,i)),a+="/"+r+" "+u+" ",this.acroformPlugin.xForms.indexOf(u)>=0||this.acroformPlugin.xForms.push(u);else{var u=l;"function"==typeof u&&(u=u.call(this,i)),a+="/"+r+" "+u+" \n",this.acroformPlugin.xForms.indexOf(u)>=0||this.acroformPlugin.xForms.push(u)}a+=" >>\n"}a+=">>\n"}a+=">>\nendobj\n",this.internal.out(a)}e&&h.call(this,this.acroformPlugin.xForms)},h=function(t){for(var e in t){var n=e,r=t[e];this.internal.newObjectDeferredBegin(r&&r.objId);var i="";i+=r?r.getString():"",this.internal.out(i),delete t[n]}};t.addField=function(t){return t instanceof n.TextField?d.call(this,t):t instanceof n.ChoiceField?p.call(this,t):t instanceof n.Button?f.call(this,t):t instanceof n.ChildClass?s.call(this,t):t&&s.call(this,t),t.page=this.acroformPlugin.internal.getCurrentPageInfo().pageNumber,this};var f=function(t){(t=t||new n.Field).FT="/Btn";var e=t.Ff||0;t.pushbutton&&(e=n.internal.setBitPosition(e,17),delete t.pushbutton),t.radio&&(e=n.internal.setBitPosition(e,16),delete t.radio),t.noToggleToOff&&(e=n.internal.setBitPosition(e,15)),t.Ff=e,s.call(this,t)},d=function(t){(t=t||new n.Field).FT="/Tx";var e=t.Ff||0;t.multiline&&(e|=4096),t.password&&(e|=8192),t.fileSelect&&(e|=1<<20),t.doNotSpellCheck&&(e|=1<<22),t.doNotScroll&&(e|=1<<23),t.Ff=t.Ff||e,s.call(this,t)},p=function(t){var e=t||new n.Field;e.FT="/Ch";var r=e.Ff||0;e.combo&&(r=n.internal.setBitPosition(r,18),delete e.combo),e.edit&&(r=n.internal.setBitPosition(r,19),delete e.edit),e.sort&&(r=n.internal.setBitPosition(r,20),delete e.sort),e.multiSelect&&this.internal.getPDFVersion()>=1.4&&(r=n.internal.setBitPosition(r,22),delete e.multiSelect),e.doNotSpellCheck&&this.internal.getPDFVersion()>=1.4&&(r=n.internal.setBitPosition(r,23),delete e.doNotSpellCheck),e.Ff=r,s.call(this,e)}})(e.API);var n=window.AcroForm;n.internal={},n.createFormXObject=function(t){var e=new n.FormXObject,r=n.Appearance.internal.getHeight(t)||0,i=n.Appearance.internal.getWidth(t)||0;return e.BBox=[0,0,i,r],e},n.Appearance={CheckBox:{createAppearanceStream:function(){return{N:{On:n.Appearance.CheckBox.YesNormal},D:{On:n.Appearance.CheckBox.YesPushDown,Off:n.Appearance.CheckBox.OffPushDown}}},createMK:function(){return"<< /CA (3)>>"},YesPushDown:function(t){var e=n.createFormXObject(t),r="";t.Q=1;var i=n.internal.calculateX(t,"3","ZapfDingbats",50);return r+="0.749023 g\n             0 0 "+n.Appearance.internal.getWidth(t)+" "+n.Appearance.internal.getHeight(t)+" re\n             f\n             BMC\n             q\n             0 0 1 rg\n             /F13 "+i.fontSize+" Tf 0 g\n             BT\n",r+=i.text,r+="ET\n             Q\n             EMC\n",e.stream=r,e},YesNormal:function(t){var e=n.createFormXObject(t),r="";t.Q=1;var i=n.internal.calculateX(t,"3","ZapfDingbats",.9*n.Appearance.internal.getHeight(t));return r+="1 g\n0 0 "+n.Appearance.internal.getWidth(t)+" "+n.Appearance.internal.getHeight(t)+" re\nf\nq\n0 0 1 rg\n0 0 "+(n.Appearance.internal.getWidth(t)-1)+" "+(n.Appearance.internal.getHeight(t)-1)+" re\nW\nn\n0 g\nBT\n/F13 "+i.fontSize+" Tf 0 g\n",r+=i.text,r+="ET\n             Q\n",e.stream=r,e},OffPushDown:function(t){var e=n.createFormXObject(t),r="";return r+="0.749023 g\n            0 0 "+n.Appearance.internal.getWidth(t)+" "+n.Appearance.internal.getHeight(t)+" re\n            f\n",e.stream=r,e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:n.Appearance.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=n.Appearance.RadioButton.Circle.YesNormal,e.D[t]=n.Appearance.RadioButton.Circle.YesPushDown,e},createMK:function(){return"<< /CA (l)>>"},YesNormal:function(t){var e=n.createFormXObject(t),r="",i=n.Appearance.internal.getWidth(t)<=n.Appearance.internal.getHeight(t)?n.Appearance.internal.getWidth(t)/4:n.Appearance.internal.getHeight(t)/4;i*=.9;var o=n.Appearance.internal.Bezier_C;return r+="q\n1 0 0 1 "+n.Appearance.internal.getWidth(t)/2+" "+n.Appearance.internal.getHeight(t)/2+" cm\n"+i+" 0 m\n"+i+" "+i*o+" "+i*o+" "+i+" 0 "+i+" c\n-"+i*o+" "+i+" -"+i+" "+i*o+" -"+i+" 0 c\n-"+i+" -"+i*o+" -"+i*o+" -"+i+" 0 -"+i+" c\n"+i*o+" -"+i+" "+i+" -"+i*o+" "+i+" 0 c\nf\nQ\n",e.stream=r,e},YesPushDown:function(t){var e=n.createFormXObject(t),r="",i=n.Appearance.internal.getWidth(t)<=n.Appearance.internal.getHeight(t)?n.Appearance.internal.getWidth(t)/4:n.Appearance.internal.getHeight(t)/4,o=2*(i*=.9),a=o*n.Appearance.internal.Bezier_C,s=i*n.Appearance.internal.Bezier_C;return r+="0.749023 g\n            q\n           1 0 0 1 "+n.Appearance.internal.getWidth(t)/2+" "+n.Appearance.internal.getHeight(t)/2+" cm\n"+o+" 0 m\n"+o+" "+a+" "+a+" "+o+" 0 "+o+" c\n-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c\n-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c\n"+a+" -"+o+" "+o+" -"+a+" "+o+" 0 c\n            f\n            Q\n            0 g\n            q\n            1 0 0 1 "+n.Appearance.internal.getWidth(t)/2+" "+n.Appearance.internal.getHeight(t)/2+" cm\n"+i+" 0 m\n"+i+" "+s+" "+s+" "+i+" 0 "+i+" c\n-"+s+" "+i+" -"+i+" "+s+" -"+i+" 0 c\n-"+i+" -"+s+" -"+s+" -"+i+" 0 -"+i+" c\n"+s+" -"+i+" "+i+" -"+s+" "+i+" 0 c\n            f\n            Q\n",e.stream=r,e},OffPushDown:function(t){var e=n.createFormXObject(t),r="",i=n.Appearance.internal.getWidth(t)<=n.Appearance.internal.getHeight(t)?n.Appearance.internal.getWidth(t)/4:n.Appearance.internal.getHeight(t)/4,o=2*(i*=.9),a=o*n.Appearance.internal.Bezier_C;return r+="0.749023 g\n            q\n 1 0 0 1 "+n.Appearance.internal.getWidth(t)/2+" "+n.Appearance.internal.getHeight(t)/2+" cm\n"+o+" 0 m\n"+o+" "+a+" "+a+" "+o+" 0 "+o+" c\n-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c\n-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c\n"+a+" -"+o+" "+o+" -"+a+" "+o+" 0 c\n            f\n            Q\n",e.stream=r,e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:n.Appearance.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=n.Appearance.RadioButton.Cross.YesNormal,e.D[t]=n.Appearance.RadioButton.Cross.YesPushDown,e},createMK:function(){return"<< /CA (8)>>"},YesNormal:function(t){var e=n.createFormXObject(t),r="",i=n.Appearance.internal.calculateCross(t);return r+="q\n            1 1 "+(n.Appearance.internal.getWidth(t)-2)+" "+(n.Appearance.internal.getHeight(t)-2)+" re\n            W\n            n\n            "+i.x1.x+" "+i.x1.y+" m\n            "+i.x2.x+" "+i.x2.y+" l\n            "+i.x4.x+" "+i.x4.y+" m\n            "+i.x3.x+" "+i.x3.y+" l\n            s\n            Q\n",e.stream=r,e},YesPushDown:function(t){var e=n.createFormXObject(t),r=n.Appearance.internal.calculateCross(t),i="";return i+="0.749023 g\n            0 0 "+n.Appearance.internal.getWidth(t)+" "+n.Appearance.internal.getHeight(t)+" re\n            f\n            q\n            1 1 "+(n.Appearance.internal.getWidth(t)-2)+" "+(n.Appearance.internal.getHeight(t)-2)+" re\n            W\n            n\n            "+r.x1.x+" "+r.x1.y+" m\n            "+r.x2.x+" "+r.x2.y+" l\n            "+r.x4.x+" "+r.x4.y+" m\n            "+r.x3.x+" "+r.x3.y+" l\n            s\n            Q\n",e.stream=i,e},OffPushDown:function(t){var e=n.createFormXObject(t),r="";return r+="0.749023 g\n            0 0 "+n.Appearance.internal.getWidth(t)+" "+n.Appearance.internal.getHeight(t)+" re\n            f\n",e.stream=r,e}}},createDefaultAppearanceStream:function(t){var e="";return e+="/Helv 0 Tf 0 g"}},n.Appearance.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=n.Appearance.internal.getWidth(t),r=n.Appearance.internal.getHeight(t),i=function(t,e){return t>e?e:t}(e,r);return{x1:{x:(e-i)/2,y:(r-i)/2+i},x2:{x:(e-i)/2+i,y:(r-i)/2},x3:{x:(e-i)/2,y:(r-i)/2},x4:{x:(e-i)/2+i,y:(r-i)/2+i}}}},n.Appearance.internal.getWidth=function(t){return t.Rect[2]},n.Appearance.internal.getHeight=function(t){return t.Rect[3]},n.internal.inherit=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},n.internal.arrayToPdfArray=function(t){if(Array.isArray(t)){var e=" [";for(var n in t)e+=t[n].toString(),e+=n<t.length-1?" ":"";return e+="]"}},n.internal.toPdfString=function(t){return 0!==(t=t||"").indexOf("(")&&(t="("+t),")"!=t.substring(t.length-1)&&(t+="("),t},n.PDFObject=function(){var t;Object.defineProperty(this,"objId",{get:function(){return t||(this.internal?t=this.internal.newObjectDeferred():e.API.acroformPlugin.internal&&(t=e.API.acroformPlugin.internal.newObjectDeferred())),t||console.log("Couldn't create Object ID"),t},configurable:!1})},n.PDFObject.prototype.toString=function(){return this.objId+" 0 R"},n.PDFObject.prototype.getString=function(){var t=this.objId+" 0 obj\n<<";return t+=this.getContent()+">>\n",this.stream&&(t+="stream\n",t+=this.stream,t+="endstream\n"),t+="endobj\n"},n.PDFObject.prototype.getContent=function(){var t="";return t+=function(t){var e="",r=Object.keys(t).filter(function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"_"!=t.substring(0,1)});for(var i in r){var o=r[i],a=t[o];a&&(Array.isArray(a)?e+="/"+o+" "+n.internal.arrayToPdfArray(a)+"\n":a instanceof n.PDFObject?e+="/"+o+" "+a.objId+" 0 R\n":e+="/"+o+" "+a+"\n")}return e}(this)},n.FormXObject=function(){n.PDFObject.call(this),this.Type="/XObject",this.Subtype="/Form",this.FormType=1,this.BBox,this.Matrix,this.Resources="2 0 R",this.PieceInfo;var t;Object.defineProperty(this,"Length",{enumerable:!0,get:function(){return void 0!==t?t.length:0}}),Object.defineProperty(this,"stream",{enumerable:!1,set:function(e){t=e},get:function(){return t||null}})},n.internal.inherit(n.FormXObject,n.PDFObject),n.AcroFormDictionary=function(){n.PDFObject.call(this);var t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!0,configurable:!0,get:function(){return t}}),this.DA},n.internal.inherit(n.AcroFormDictionary,n.PDFObject),n.Field=function(){n.PDFObject.call(this);var t;Object.defineProperty(this,"Rect",{enumerable:!0,configurable:!1,get:function(){if(t)return t},set:function(e){t=e}});var e="";Object.defineProperty(this,"FT",{enumerable:!0,set:function(t){e=t},get:function(){return e}});var r;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,set:function(t){r=t},get:function(){if(!r||r.length<1){if(this instanceof n.ChildClass)return;return"(FieldObject"+n.Field.FieldNum+++")"}return"("==r.substring(0,1)&&r.substring(r.length-1)?r:"("+r+")"}});var i;Object.defineProperty(this,"DA",{enumerable:!0,get:function(){if(i)return"("+i+")"},set:function(t){i=t}});var o;Object.defineProperty(this,"DV",{enumerable:!0,configurable:!0,get:function(){if(o)return o},set:function(t){o=t}}),Object.defineProperty(this,"Type",{enumerable:!0,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,get:function(){return this.hasAnnotation?"/Widget":null}}),this.BG,Object.defineProperty(this,"hasAnnotation",{enumerable:!1,get:function(){return!!(this.Rect||this.BC||this.BG)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(this,"page",{enumerable:!1,configurable:!0,writable:!0})},n.Field.FieldNum=0,n.internal.inherit(n.Field,n.PDFObject),n.ChoiceField=function(){n.Field.call(this),this.FT="/Ch",this.Opt=[],this.V="()",this.TI=0,this.combo=!1,Object.defineProperty(this,"edit",{enumerable:!0,set:function(t){1==t?(this._edit=!0,this.combo=!0):this._edit=!1},get:function(){return!!this._edit&&this._edit},configurable:!1}),this.hasAppearanceStream=!0,Object.defineProperty(this,"V",{get:function(){n.internal.toPdfString()}})},n.internal.inherit(n.ChoiceField,n.Field),window.ChoiceField=n.ChoiceField,n.ListBox=function(){n.ChoiceField.call(this)},n.internal.inherit(n.ListBox,n.ChoiceField),window.ListBox=n.ListBox,n.ComboBox=function(){n.ListBox.call(this),this.combo=!0},n.internal.inherit(n.ComboBox,n.ListBox),window.ComboBox=n.ComboBox,n.EditBox=function(){n.ComboBox.call(this),this.edit=!0},n.internal.inherit(n.EditBox,n.ComboBox),window.EditBox=n.EditBox,n.Button=function(){n.Field.call(this),this.FT="/Btn"},n.internal.inherit(n.Button,n.Field),window.Button=n.Button,n.PushButton=function(){n.Button.call(this),this.pushbutton=!0},n.internal.inherit(n.PushButton,n.Button),window.PushButton=n.PushButton,n.RadioButton=function(){n.Button.call(this),this.radio=!0;var t=[];Object.defineProperty(this,"Kids",{enumerable:!0,get:function(){if(t.length>0)return t}}),Object.defineProperty(this,"__Kids",{get:function(){return t}});var e;Object.defineProperty(this,"noToggleToOff",{enumerable:!1,get:function(){return e},set:function(t){e=t}})},n.internal.inherit(n.RadioButton,n.Button),window.RadioButton=n.RadioButton,n.ChildClass=function(t,e){n.Field.call(this),this.Parent=t,this._AppearanceType=n.Appearance.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(e),this.F=n.internal.setBitPosition(this.F,3,1),this.MK=this._AppearanceType.createMK(),this.AS="/Off",this._Name=e},n.internal.inherit(n.ChildClass,n.Field),n.RadioButton.prototype.setAppearance=function(t){if("createAppearanceStream"in t&&"createMK"in t)for(var e in this.__Kids){var n=this.__Kids[e];n.appearanceStreamContent=t.createAppearanceStream(n._Name),n.MK=t.createMK()}else console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!")},n.RadioButton.prototype.createOption=function(t){var r=this,i=new n.ChildClass(r,t);return this.__Kids.push(i),e.API.addField(i),i},n.CheckBox=function(){Button.call(this),this.appearanceStreamContent=n.Appearance.CheckBox.createAppearanceStream(),this.MK=n.Appearance.CheckBox.createMK(),this.AS="/On",this.V="/On"},n.internal.inherit(n.CheckBox,n.Button),window.CheckBox=n.CheckBox,n.TextField=function(){n.Field.call(this),this.DA=n.Appearance.createDefaultAppearanceStream(),this.F=4;var t;Object.defineProperty(this,"V",{get:function(){return t?"("+t+")":t},enumerable:!0,set:function(e){t=e}});var e;Object.defineProperty(this,"DV",{get:function(){return e?"("+e+")":e},enumerable:!0,set:function(t){e=t}});var r=!1;Object.defineProperty(this,"multiline",{enumerable:!1,get:function(){return r},set:function(t){r=t}});var i=!1;Object.defineProperty(this,"MaxLen",{enumerable:!0,get:function(){return i},set:function(t){i=t}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!1,get:function(){return this.V||this.DV}})},n.internal.inherit(n.TextField,n.Field),window.TextField=n.TextField,n.PasswordField=function(){TextField.call(this),Object.defineProperty(this,"password",{value:!0,enumerable:!1,configurable:!1,writable:!1})},n.internal.inherit(n.PasswordField,n.TextField),window.PasswordField=n.PasswordField,n.internal.calculateFontSpace=function(t,e,r){var r=r||"helvetica",i=n.internal.calculateFontSpace.canvas||(n.internal.calculateFontSpace.canvas=document.createElement("canvas"));(s=i.getContext("2d")).save();var o=e+" "+r;s.font=o;var a=s.measureText(t);s.fontcolor="black";var s=i.getContext("2d");return a.height=1.5*s.measureText("3").width,s.restore(),a},n.internal.calculateX=function(t,e,r,i){var i=i||12,r=r||"helvetica",o={text:"",fontSize:""},a=(e=")"==(e="("==e.substr(0,1)?e.substr(1):e).substr(e.length-1)?e.substr(0,e.length-1):e).split(" "),s=i,c=n.Appearance.internal.getHeight(t)||0;c=c<0?-c:c;var l=n.Appearance.internal.getWidth(t)||0;l=l<0?-l:l;s++;t:for(;;){var e="";s--;var u=n.internal.calculateFontSpace("3",s+"px",r).height,h=t.multiline?c-s:(c-u)/2,f=-2,d=h+=2,p=0,m=0,g=0;if(0==s){s=12,e="(...) Tj\n",e+="% Width of Text: "+n.internal.calculateFontSpace(e,"1px").width+", FieldWidth:"+l+"\n";break}g=n.internal.calculateFontSpace(a[0]+" ",s+"px",r).width;var w="",y=0;for(var v in a){w=" "==(w+=a[v]+" ").substr(w.length-1)?w.substr(0,w.length-1):w;var b=parseInt(v);g=n.internal.calculateFontSpace(w+" ",s+"px",r).width;var x=function(t,e,i){if(t+1<a.length){var o=e+" "+a[t+1];return n.internal.calculateFontSpace(o,i+"px",r).width<=l-4}return!1}(b,w,s),k=v>=a.length-1;if(!x||k){if(x||k){if(k)m=b;else if(t.multiline&&(u+2)*(y+2)+2>c)continue t}else{if(!t.multiline)continue t;if((u+2)*(y+2)+2>c)continue t;m=b}for(var _="",C=p;C<=m;C++)_+=a[C]+" ";switch(_=" "==_.substr(_.length-1)?_.substr(0,_.length-1):_,g=n.internal.calculateFontSpace(_,s+"px",r).width,t.Q){case 2:f=l-g-2;break;case 1:f=(l-g)/2;break;case 0:default:f=2}e+=f+" "+d+" Td\n",e+="("+_+") Tj\n",e+=-f+" 0 Td\n",d=-(s+2),g=0,p=m+1,y++,w=""}else w+=" "}break}return o.text=e,o.fontSize=s,o},n.internal.calculateAppearanceStream=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e="",r=t.V||t.DV,i=n.internal.calculateX(t,r);e+="/Tx BMC\nq\n/F1 "+i.fontSize+" Tf\n1 0 0 1 0 0 Tm\n",e+="BT\n",e+=i.text,e+="ET\n",e+="Q\nEMC\n";var o=new n.createFormXObject(t);return o.stream=e,o}},n.internal.calculateCoordinates=function(t,e,r,i){var o={};if(this.internal){var a=function(t){return t*this.internal.scaleFactor};Array.isArray(t)?(t[0]=n.scale(t[0]),t[1]=n.scale(t[1]),t[2]=n.scale(t[2]),t[3]=n.scale(t[3]),o.lowerLeft_X=t[0]||0,o.lowerLeft_Y=a.call(this,this.internal.pageSize.height)-t[3]-t[1]||0,o.upperRight_X=t[0]+t[2]||0,o.upperRight_Y=a.call(this,this.internal.pageSize.height)-t[1]||0):(t=n.scale(t),e=n.scale(e),r=n.scale(r),i=n.scale(i),o.lowerLeft_X=t||0,o.lowerLeft_Y=this.internal.pageSize.height-e||0,o.upperRight_X=t+r||0,o.upperRight_Y=this.internal.pageSize.height-e+i||0)}else Array.isArray(t)?(o.lowerLeft_X=t[0]||0,o.lowerLeft_Y=t[1]||0,o.upperRight_X=t[0]+t[2]||0,o.upperRight_Y=t[1]+t[3]||0):(o.lowerLeft_X=t||0,o.lowerLeft_Y=e||0,o.upperRight_X=t+r||0,o.upperRight_Y=e+i||0);return[o.lowerLeft_X,o.lowerLeft_Y,o.upperRight_X,o.upperRight_Y]},n.internal.calculateColor=function(t,e,n){var r=new Array(3);return r.r=0|t,r.g=0|e,r.b=0|n,r},n.internal.getBitPosition=function(t,e){var n=1;return n<<=e-1,(t=t||0)|n},n.internal.setBitPosition=function(t,e,n){t=t||0;var r=1;if(r<<=e-1,1==(n=n||1))t=t|r;else var t=t&~r;return t},e.API.addHTML=function(t,e,n,r,i){if("undefined"==typeof html2canvas&&"undefined"==typeof rasterizeHTML)throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");"number"!=typeof e&&(r=e,i=n),"function"==typeof r&&(i=r,r=null);var o=this.internal,a=o.scaleFactor,s=o.pageSize.width,c=o.pageSize.height;if(r=r||{},r.onrendered=function(t){e=parseInt(e)||0,n=parseInt(n)||0;var o=r.dim||{},l=o.h||0,u=o.w||Math.min(s,t.width/a)-e,h="JPEG";if(r.format&&(h=r.format),t.height>c&&r.pagesplit){var f=function(){for(var r=0;;){var o=document.createElement("canvas");o.width=Math.min(s*a,t.width),o.height=Math.min(c*a,t.height-r),o.getContext("2d").drawImage(t,0,r,t.width,o.height,0,0,o.width,o.height);var l=[o,e,r?0:n,o.width/a,o.height/a,h,null,"SLOW"];if(this.addImage.apply(this,l),(r+=o.height)>=t.height)break;this.addPage()}i(u,r,null,l)}.bind(this);if("CANVAS"===t.nodeName){var d=new Image;d.onload=f,d.src=t.toDataURL("image/png"),t=d}else f()}else{var p=Math.random().toString(35),m=[t,e,n,u,l,h,p,"SLOW"];this.addImage.apply(this,m),i(u,l,p,m)}}.bind(this),"undefined"!=typeof html2canvas&&!r.rstz)return html2canvas(t,r);if("undefined"!=typeof rasterizeHTML){var l="drawDocument";return"string"==typeof t&&(l=/^http/.test(t)?"drawURL":"drawHTML"),r.width=r.width||s*a,rasterizeHTML[l](t,void 0,r).then(function(t){r.onrendered(t.image)},function(t){i(null,t)})}return null},/** @preserve
 * jsPDF addImage plugin
 * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
 *               2013 Chris Dowling, https://github.com/gingerchris
 *               2013 Trinh Ho, https://github.com/ineedfat
 *               2013 Edwin Alejandro Perez, https://github.com/eaparango
 *               2013 Norah Smith, https://github.com/burnburnrocket
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 James Robb, https://github.com/jamesbrobb
 *
 * 
 */
function(e){var n=["jpeg","jpg","png"],r=function t(e){var n=this.internal.newObject(),r=this.internal.write,i=this.internal.putStream;if(e.n=n,r("<</Type /XObject"),r("/Subtype /Image"),r("/Width "+e.w),r("/Height "+e.h),e.cs===this.color_spaces.INDEXED?r("/ColorSpace [/Indexed /DeviceRGB "+(e.pal.length/3-1)+" "+("smask"in e?n+2:n+1)+" 0 R]"):(r("/ColorSpace /"+e.cs),e.cs===this.color_spaces.DEVICE_CMYK&&r("/Decode [1 0 1 0 1 0 1 0]")),r("/BitsPerComponent "+e.bpc),"f"in e&&r("/Filter /"+e.f),"dp"in e&&r("/DecodeParms <<"+e.dp+">>"),"trns"in e&&e.trns.constructor==Array){for(var o="",a=0,s=e.trns.length;a<s;a++)o+=e.trns[a]+" "+e.trns[a]+" ";r("/Mask ["+o+"]")}if("smask"in e&&r("/SMask "+(n+1)+" 0 R"),r("/Length "+e.data.length+">>"),i(e.data),r("endobj"),"smask"in e){var c="/Predictor "+e.p+" /Colors 1 /BitsPerComponent "+e.bpc+" /Columns "+e.w,l={w:e.w,h:e.h,cs:"DeviceGray",bpc:e.bpc,dp:c,data:e.smask};"f"in e&&(l.f=e.f),t.call(this,l)}e.cs===this.color_spaces.INDEXED&&(this.internal.newObject(),r("<< /Length "+e.pal.length+">>"),i(this.arrayBufferToBinaryString(new Uint8Array(e.pal))),r("endobj"))},i=function(){var t=this.internal.collections.addImage_images;for(var e in t)r.call(this,t[e])},o=function(){var t,e=this.internal.collections.addImage_images,n=this.internal.write;for(var r in e)n("/I"+(t=e[r]).i,t.n,"0","R")},a=function(t){return t&&"string"==typeof t&&(t=t.toUpperCase()),t in e.image_compression?t:e.image_compression.NONE},s=function(){var t=this.internal.collections.addImage_images;return t||(this.internal.collections.addImage_images=t={},this.internal.events.subscribe("putResources",i),this.internal.events.subscribe("putXobjectDict",o)),t},c=function(t){var e=0;return t&&(e=Object.keys?Object.keys(t).length:function(t){var e=0;for(var n in t)t.hasOwnProperty(n)&&e++;return e}(t)),e},l=function(t){return void 0===t||null===t},u=function(t){return"string"==typeof t&&e.sHashCode(t)},h=function(t){return-1===n.indexOf(t)},f=function(t){return"function"!=typeof e["process"+t.toUpperCase()]},d=function(e){return"object"===(void 0===e?"undefined":t(e))&&1===e.nodeType},p=function(e,n,r){if("IMG"===e.nodeName&&e.hasAttribute("src")){var i=""+e.getAttribute("src");if(!r&&0===i.indexOf("data:image/"))return i;!n&&/\.png(?:[?#].*)?$/i.test(i)&&(n="png")}if("CANVAS"===e.nodeName)var o=e;else{(o=document.createElement("canvas")).width=e.clientWidth||e.width,o.height=e.clientHeight||e.height;var a=o.getContext("2d");if(!a)throw"addImage requires canvas to be supported by browser.";if(r){var s,c,l,u,h,f,d,p,m=Math.PI/180;"object"===(void 0===r?"undefined":t(r))&&(s=r.x,c=r.y,l=r.bg,r=r.angle),p=r*m,u=Math.abs(Math.cos(p)),h=Math.abs(Math.sin(p)),f=o.width,d=o.height,o.width=d*h+f*u,o.height=d*u+f*h,isNaN(s)&&(s=o.width/2),isNaN(c)&&(c=o.height/2),a.clearRect(0,0,o.width,o.height),a.fillStyle=l||"white",a.fillRect(0,0,o.width,o.height),a.save(),a.translate(s,c),a.rotate(p),a.drawImage(e,-f/2,-d/2),a.rotate(-p),a.translate(-s,-c),a.restore()}else a.drawImage(e,0,0,o.width,o.height)}return o.toDataURL("png"==(""+n).toLowerCase()?"image/png":"image/jpeg")},m=function(t,e){var n;if(e)for(var r in e)if(t===e[r].alias){n=e[r];break}return n},g=function(t,e,n){return t||e||(t=-96,e=-96),t<0&&(t=-1*n.w*72/t/this.internal.scaleFactor),e<0&&(e=-1*n.h*72/e/this.internal.scaleFactor),0===t&&(t=e*n.w/n.h),0===e&&(e=t*n.h/n.w),[t,e]},w=function(t,e,n,r,i,o,a){var s=g.call(this,n,r,i),c=this.internal.getCoordinateString,l=this.internal.getVerticalCoordinateString;n=s[0],r=s[1],a[o]=i,this.internal.write("q",c(n),"0 0",c(r),c(t),l(e+r),"cm /I"+i.i,"Do Q")};e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"},e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"},e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},e.sHashCode=function(t){return Array.prototype.reduce&&t.split("").reduce(function(t,e){return(t=(t<<5)-t+e.charCodeAt(0))&t},0)},e.isString=function(t){return"string"==typeof t},e.extractInfoFromBase64DataURI=function(t){return/^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(t)},e.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array},e.isArrayBuffer=function(t){return!!this.supportsArrayBuffer()&&t instanceof ArrayBuffer},e.isArrayBufferView=function(t){return!!this.supportsArrayBuffer()&&("undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array))},e.binaryStringToUint8Array=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r);return n},e.arrayBufferToBinaryString=function(t){if("function"==typeof window.atob)return atob(this.arrayBufferToBase64(t));for(var e=this.isArrayBuffer(t)?t:new Uint8Array(t),n="",r=Math.round(e.byteLength/20480),i=0;i<r;i++)n+=String.fromCharCode.apply(null,e.slice(20480*i,20480*i+20480));return n},e.arrayBufferToBase64=function(t){for(var e,n,r,i,o="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=new Uint8Array(t),c=s.byteLength,l=c%3,u=c-l,h=0;h<u;h+=3)e=(258048&(i=s[h]<<16|s[h+1]<<8|s[h+2]))>>12,n=(4032&i)>>6,r=63&i,o+=a[(16515072&i)>>18]+a[e]+a[n]+a[r];return 1==l?(e=(3&(i=s[u]))<<4,o+=a[(252&i)>>2]+a[e]+"=="):2==l&&(e=(1008&(i=s[u]<<8|s[u+1]))>>4,n=(15&i)<<2,o+=a[(64512&i)>>10]+a[e]+a[n]+"="),o},e.createImageInfo=function(t,e,n,r,i,o,a,s,c,l,u,h,f){var d={alias:s,w:e,h:n,cs:r,bpc:i,i:a,data:t};return o&&(d.f=o),c&&(d.dp=c),l&&(d.trns=l),u&&(d.pal=u),h&&(d.smask=h),f&&(d.p=f),d},e.addImage=function(e,r,i,o,g,y,v,b,x){if("string"!=typeof r){var k=y;y=g,g=o,o=i,i=r,r=k}if("object"===(void 0===e?"undefined":t(e))&&!d(e)&&"imageData"in e){var _=e;e=_.imageData,r=_.format||r,i=_.x||i||0,o=_.y||o||0,g=_.w||g,y=_.h||y,v=_.alias||v,b=_.compression||b,x=_.rotation||_.angle||x}if(isNaN(i)||isNaN(o))throw console.error("jsPDF.addImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addImage");var C,A=s.call(this);if(!(C=m(e,A))){var S;if(d(e)&&(e=p(e,r,x)),l(v)&&(v=u(e)),!(C=m(v,A))){if(this.isString(e)){var q=this.extractInfoFromBase64DataURI(e);q?(r=q[2],e=atob(q[3])):137===e.charCodeAt(0)&&80===e.charCodeAt(1)&&78===e.charCodeAt(2)&&71===e.charCodeAt(3)&&(r="png")}if(r=(r||"JPEG").toLowerCase(),h(r))throw new Error("addImage currently only supports formats "+n+", not '"+r+"'");if(f(r))throw new Error("please ensure that the plugin for '"+r+"' support is added");if(this.supportsArrayBuffer()&&(e instanceof Uint8Array||(S=e,e=this.binaryStringToUint8Array(e))),!(C=this["process"+r.toUpperCase()](e,c(A),v,a(b),S)))throw new Error("An unkwown error occurred whilst processing the image")}}return w.call(this,i,o,g,y,C,C.i,A),this};var y=function(t){var e,n,r;if(255===!t.charCodeAt(0)||216===!t.charCodeAt(1)||255===!t.charCodeAt(2)||224===!t.charCodeAt(3)||!t.charCodeAt(6)==="J".charCodeAt(0)||!t.charCodeAt(7)==="F".charCodeAt(0)||!t.charCodeAt(8)==="I".charCodeAt(0)||!t.charCodeAt(9)==="F".charCodeAt(0)||0===!t.charCodeAt(10))throw new Error("getJpegSize requires a binary string jpeg file");for(var i=256*t.charCodeAt(4)+t.charCodeAt(5),o=4,a=t.length;o<a;){if(o+=i,255!==t.charCodeAt(o))throw new Error("getJpegSize could not find the size of the image");if(192===t.charCodeAt(o+1)||193===t.charCodeAt(o+1)||194===t.charCodeAt(o+1)||195===t.charCodeAt(o+1)||196===t.charCodeAt(o+1)||197===t.charCodeAt(o+1)||198===t.charCodeAt(o+1)||199===t.charCodeAt(o+1))return n=256*t.charCodeAt(o+5)+t.charCodeAt(o+6),e=256*t.charCodeAt(o+7)+t.charCodeAt(o+8),r=t.charCodeAt(o+9),[e,n,r];o+=2,i=256*t.charCodeAt(o)+t.charCodeAt(o+1)}},v=function(t){if(65496!==(t[0]<<8|t[1]))throw new Error("Supplied data is not a JPEG");for(var e,n,r,i,o=t.length,a=(t[4]<<8)+t[5],s=4;s<o;){if(s+=a,e=b(t,s),a=(e[2]<<8)+e[3],(192===e[1]||194===e[1])&&255===e[0]&&a>7)return e=b(t,s+5),n=(e[2]<<8)+e[3],r=(e[0]<<8)+e[1],i=e[4],{width:n,height:r,numcomponents:i};s+=2}throw new Error("getJpegSizeFromBytes could not find the size of the image")},b=function(t,e){return t.subarray(e,e+5)};e.processJPEG=function(t,e,n,r,i){var o,a=this.color_spaces.DEVICE_RGB,s=this.decode.DCT_DECODE;return this.isString(t)?(o=y(t),this.createImageInfo(t,o[0],o[1],1==o[3]?this.color_spaces.DEVICE_GRAY:a,8,s,e,n)):(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)?(o=v(t),t=i||this.arrayBufferToBinaryString(t),this.createImageInfo(t,o.width,o.height,1==o.numcomponents?this.color_spaces.DEVICE_GRAY:a,8,s,e,n)):null)},e.processJPG=function(){return this.processJPEG.apply(this,arguments)}}(e.API),/**
 * jsPDF Annotations PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var n={annotations:[],f2:function(t){return t.toFixed(2)},notEmpty:function(t){if(void 0!==t&&""!=t)return!0}};e.API.annotationPlugin=n,e.API.events.push(["addPage",function(t){this.annotationPlugin.annotations[t.pageNumber]=[]}]),t.events.push(["putPage",function(t){for(var e=this.annotationPlugin.annotations[t.pageNumber],r=!1,i=0;i<e.length&&!r;i++)switch((l=e[i]).type){case"link":if(n.notEmpty(l.options.url)||n.notEmpty(l.options.pageNumber)){r=!0;break}case"reference":case"text":case"freetext":r=!0}if(0!=r){this.internal.write("/Annots [");for(var o=this.annotationPlugin.f2,a=this.internal.scaleFactor,s=this.internal.pageSize.height,c=this.internal.getPageInfo(t.pageNumber),i=0;i<e.length;i++){var l=e[i];switch(l.type){case"reference":this.internal.write(" "+l.object.objId+" 0 R ");break;case"text":var u=this.internal.newAdditionalObject(),h=this.internal.newAdditionalObject(),f=l.title||"Note";w="<</Type /Annot /Subtype /Text "+(p="/Rect ["+o(l.bounds.x*a)+" "+o(s-(l.bounds.y+l.bounds.h)*a)+" "+o((l.bounds.x+l.bounds.w)*a)+" "+o((s-l.bounds.y)*a)+"] ")+"/Contents ("+l.contents+")",w+=" /Popup "+h.objId+" 0 R",w+=" /P "+c.objId+" 0 R",w+=" /T ("+f+") >>",u.content=w;var d=u.objId+" 0 R";w="<</Type /Annot /Subtype /Popup "+(p="/Rect ["+o((l.bounds.x+30)*a)+" "+o(s-(l.bounds.y+l.bounds.h)*a)+" "+o((l.bounds.x+l.bounds.w+30)*a)+" "+o((s-l.bounds.y)*a)+"] ")+" /Parent "+d,l.open&&(w+=" /Open true"),w+=" >>",h.content=w,this.internal.write(u.objId,"0 R",h.objId,"0 R");break;case"freetext":var p="/Rect ["+o(l.bounds.x*a)+" "+o((s-l.bounds.y)*a)+" "+o(l.bounds.x+l.bounds.w*a)+" "+o(s-(l.bounds.y+l.bounds.h)*a)+"] ",m=l.color||"#000000";w="<</Type /Annot /Subtype /FreeText "+p+"/Contents ("+l.contents+")",w+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+m+")",w+=" /Border [0 0 0]",w+=" >>",this.internal.write(w);break;case"link":if(l.options.name){var g=this.annotations._nameMap[l.options.name];l.options.pageNumber=g.page,l.options.top=g.y}else l.options.top||(l.options.top=0);var p="/Rect ["+o(l.x*a)+" "+o((s-l.y)*a)+" "+o((l.x+l.w)*a)+" "+o((s-(l.y+l.h))*a)+"] ",w="";if(l.options.url)w="<</Type /Annot /Subtype /Link "+p+"/Border [0 0 0] /A <</S /URI /URI ("+l.options.url+") >>";else if(l.options.pageNumber)switch(w="<</Type /Annot /Subtype /Link "+p+"/Border [0 0 0] /Dest ["+(t=this.internal.getPageInfo(l.options.pageNumber)).objId+" 0 R",l.options.magFactor=l.options.magFactor||"XYZ",l.options.magFactor){case"Fit":w+=" /Fit]";break;case"FitH":w+=" /FitH "+l.options.top+"]";break;case"FitV":l.options.left=l.options.left||0,w+=" /FitV "+l.options.left+"]";break;case"XYZ":default:var y=o((s-l.options.top)*a);l.options.left=l.options.left||0,void 0===l.options.zoom&&(l.options.zoom=0),w+=" /XYZ "+l.options.left+" "+y+" "+l.options.zoom+"]"}""!=w&&(w+=" >>",this.internal.write(w))}}this.internal.write("]")}}]),t.createAnnotation=function(t){switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(t)}},t.link=function(t,e,n,r,i){this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({x:t,y:e,w:n,h:r,options:i,type:"link"})},t.textWithLink=function(t,e,n,r){var i=this.getTextWidth(t),o=this.internal.getLineHeight()/this.internal.scaleFactor;return this.text(t,e,n),n+=.2*o,this.link(e,n-o,i,o,r),i},t.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor},t.getLineHeight=function(){return this.internal.getLineHeight()}}(e.API),e.API.autoPrint=function(){var t;return this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.write("<< /S/Named /Type/Action /N/Print >>","endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.write("/OpenAction "+t+" 0 R")}),this},/**
 * jsPDF Canvas PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.events.push(["initialized",function(){this.canvas.pdf=this}]),t.canvas={getContext:function(t){return this.pdf.context2d._canvas=this,this.pdf.context2d},style:{}},Object.defineProperty(t.canvas,"width",{get:function(){return this._width},set:function(t){this._width=t,this.getContext("2d").pageWrapX=t+1}}),Object.defineProperty(t.canvas,"height",{get:function(){return this._height},set:function(t){this._height=t,this.getContext("2d").pageWrapY=t+1}})}(e.API),/** ====================================================================
 * jsPDF Cell plugin
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Hall, james@parall.ax
 *               2014 Diego Casorran, https://github.com/diegocr
 *
 * 
 * ====================================================================
 */
function(t){var e,n,r,i,o={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},a=1,s=function(t,e,n,r,i){o={x:t,y:e,w:n,h:r,ln:i}},c=function(){return o},l={left:0,top:0,bottom:0};t.setHeaderFunction=function(t){i=t},t.getTextDimensions=function(t){e=this.internal.getFont().fontName,n=this.table_font_size||this.internal.getFontSize(),r=this.internal.getFont().fontStyle;var i,o;(o=document.createElement("font")).id="jsPDFCell";try{o.style.fontStyle=r}catch(t){o.style.fontWeight=r}o.style.fontName=e,o.style.fontSize=n+"pt";try{o.textContent=t}catch(e){o.innerText=t}return document.body.appendChild(o),i={w:(o.offsetWidth+1)*(19.049976/25.4),h:(o.offsetHeight+1)*(19.049976/25.4)},document.body.removeChild(o),i},t.cellAddPage=function(){var t=this.margins||l;this.addPage(),s(t.left,t.top,void 0,void 0),a+=1},t.cellInitialize=function(){o={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},a=1},t.cell=function(t,e,n,r,i,o,a){var u=c(),h=!1;if(void 0!==u.ln)if(u.ln===o)t=u.x+u.w,e=u.y;else{var f=this.margins||l;u.y+u.h+r+13>=this.internal.pageSize.height-f.bottom&&(this.cellAddPage(),h=!0,this.printHeaders&&this.tableHeaderRow&&this.printHeaderRow(o,!0)),e=c().y+c().h,h&&(e=23)}if(void 0!==i[0])if(this.printingHeaderRow?this.rect(t,e,n,r,"FD"):this.rect(t,e,n,r),"right"===a){i instanceof Array||(i=[i]);for(var d=0;d<i.length;d++){var p=i[d],m=this.getStringUnitWidth(p)*this.internal.getFontSize();this.text(p,t+n-m-3,e+this.internal.getLineHeight()*(d+1))}}else this.text(i,t+3,e+this.internal.getLineHeight());return s(t,e,n,r,o),this},t.arrayMax=function(t,e){var n,r,i,o=t[0];for(n=0,r=t.length;n<r;n+=1)i=t[n],e?-1===e(o,i)&&(o=i):i>o&&(o=i);return o},t.table=function(e,n,r,i,s){if(!r)throw"No data for PDF table";var c,u,h,f,d,p,m,g,w,y,v=[],b=[],x={},k={},_=[],C=[],A=!1,S=!0,q=12,T=l;if(T.width=this.internal.pageSize.width,s&&(!0===s.autoSize&&(A=!0),!1===s.printHeaders&&(S=!1),s.fontSize&&(q=s.fontSize),s.css&&void 0!==s.css["font-size"]&&(q=16*s.css["font-size"]),s.margins&&(T=s.margins)),this.lnMod=0,o={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},a=1,this.printHeaders=S,this.margins=T,this.setFontSize(q),this.table_font_size=q,void 0===i||null===i)v=Object.keys(r[0]);else if(i[0]&&"string"!=typeof i[0]){for(u=0,h=i.length;u<h;u+=1)c=i[u],v.push(c.name),b.push(c.prompt),k[c.name]=c.width*(19.049976/25.4)}else v=i;if(A)for(y=function(t){return t[c]},u=0,h=v.length;u<h;u+=1){for(x[c=v[u]]=r.map(y),_.push(this.getTextDimensions(b[u]||c).w),m=0,f=(p=x[c]).length;m<f;m+=1)d=p[m],_.push(this.getTextDimensions(d).w);k[c]=t.arrayMax(_),_=[]}if(S){P=this.calculateLineHeight(v,k,b.length?b:v);for(u=0,h=v.length;u<h;u+=1)c=v[u],C.push([e,n,k[c],P,String(b.length?b[u]:c)]);this.setTableHeaderRow(C),this.printHeaderRow(1,!1)}for(u=0,h=r.length;u<h;u+=1){var P;for(g=r[u],P=this.calculateLineHeight(v,k,g),m=0,w=v.length;m<w;m+=1)c=v[m],this.cell(e,n,k[c],P,g[c],u+2,c.align)}return this.lastCellPos=o,this.table_x=e,this.table_y=n,this},t.calculateLineHeight=function(t,e,n){for(var r,i=0,o=0;o<t.length;o++){n[r=t[o]]=this.splitTextToSize(String(n[r]),e[r]-3);var a=this.internal.getLineHeight()*n[r].length+3;a>i&&(i=a)}return i},t.setTableHeaderRow=function(t){this.tableHeaderRow=t},t.printHeaderRow=function(t,e){if(!this.tableHeaderRow)throw"Property tableHeaderRow does not exist.";var n,r,o,c;if(this.printingHeaderRow=!0,void 0!==i){var l=i(this,a);s(l[0],l[1],l[2],l[3],-1)}this.setFontStyle("bold");var u=[];for(o=0,c=this.tableHeaderRow.length;o<c;o+=1)this.setFillColor(200,200,200),n=this.tableHeaderRow[o],e&&(this.margins.top=13,n[1]=this.margins&&this.margins.top||0,u.push(n)),r=[].concat(n),this.cell.apply(this,r.concat(t));u.length>0&&this.setTableHeaderRow(u),this.setFontStyle("normal"),this.printingHeaderRow=!1}}(e.API),/**
 * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
 *
 * Licensed under the MIT License. http://opensource.org/licenses/mit-license
 */
function(t){function e(){this._isStrokeTransparent=!1,this._strokeOpacity=1,this.strokeStyle="#000000",this.fillStyle="#000000",this._isFillTransparent=!1,this._fillOpacity=1,this.font="12pt times",this.textBaseline="alphabetic",this.textAlign="start",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this._transform=[1,0,0,1,0,0],this.globalCompositeOperation="normal",this.globalAlpha=1,this._clip_path=[],this.ignoreClearRect=!1,this.copy=function(t){this._isStrokeTransparent=t._isStrokeTransparent,this._strokeOpacity=t._strokeOpacity,this.strokeStyle=t.strokeStyle,this._isFillTransparent=t._isFillTransparent,this._fillOpacity=t._fillOpacity,this.fillStyle=t.fillStyle,this.font=t.font,this.lineWidth=t.lineWidth,this.lineJoin=t.lineJoin,this.lineCap=t.lineCap,this.textBaseline=t.textBaseline,this.textAlign=t.textAlign,this._fontSize=t._fontSize,this._transform=t._transform.slice(0),this.globalCompositeOperation=t.globalCompositeOperation,this.globalAlpha=t.globalAlpha,this._clip_path=t._clip_path.slice(0),this.ignoreClearRect=t.ignoreClearRect}}t.events.push(["initialized",function(){this.context2d.pdf=this,this.context2d.internal.pdf=this,this.context2d.ctx=new e,this.context2d.ctxStack=[],this.context2d.path=[]}]),t.context2d={pageWrapXEnabled:!1,pageWrapYEnabled:!1,pageWrapX:9999999,pageWrapY:9999999,ctx:new e,f2:function(t){return t.toFixed(2)},fillRect:function(t,e,n,r){if(!this._isFillTransparent()){t=this._wrapX(t),e=this._wrapY(e);var i=this._matrix_map_rect(this.ctx._transform,{x:t,y:e,w:n,h:r});this.pdf.rect(i.x,i.y,i.w,i.h,"f")}},strokeRect:function(t,e,n,r){if(!this._isStrokeTransparent()){t=this._wrapX(t),e=this._wrapY(e);var i=this._matrix_map_rect(this.ctx._transform,{x:t,y:e,w:n,h:r});this.pdf.rect(i.x,i.y,i.w,i.h,"s")}},clearRect:function(t,e,n,r){if(!this.ctx.ignoreClearRect){t=this._wrapX(t),e=this._wrapY(e);var i=this._matrix_map_rect(this.ctx._transform,{x:t,y:e,w:n,h:r});this.save(),this.setFillStyle("#ffffff"),this.pdf.rect(i.x,i.y,i.w,i.h,"f"),this.restore()}},save:function(){this.ctx._fontSize=this.pdf.internal.getFontSize();var t=new e;t.copy(this.ctx),this.ctxStack.push(this.ctx),this.ctx=t},restore:function(){this.ctx=this.ctxStack.pop(),this.setFillStyle(this.ctx.fillStyle),this.setStrokeStyle(this.ctx.strokeStyle),this.setFont(this.ctx.font),this.pdf.setFontSize(this.ctx._fontSize),this.setLineCap(this.ctx.lineCap),this.setLineWidth(this.ctx.lineWidth),this.setLineJoin(this.ctx.lineJoin)},rect:function(t,e,n,r){this.moveTo(t,e),this.lineTo(t+n,e),this.lineTo(t+n,e+r),this.lineTo(t,e+r),this.lineTo(t,e),this.closePath()},beginPath:function(){this.path=[]},closePath:function(){this.path.push({type:"close"})},_getRGBA:function(t){var e,n,r,o;if(!t)return{r:0,g:0,b:0,a:0,style:t};if(this.internal.rxTransparent.test(t))e=0,n=0,r=0,o=0;else{var a=this.internal.rxRgb.exec(t);null!=a?(e=parseInt(a[1]),n=parseInt(a[2]),r=parseInt(a[3]),o=1):null!=(a=this.internal.rxRgba.exec(t))?(e=parseInt(a[1]),n=parseInt(a[2]),r=parseInt(a[3]),o=parseFloat(a[4])):(o=1,"#"!=t.charAt(0)&&((t=i.colorNameToHex(t))||(t="#000000")),4===t.length?(e=t.substring(1,2),e+=e,n=t.substring(2,3),n+=n,r=t.substring(3,4),r+=r):(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7)),e=parseInt(e,16),n=parseInt(n,16),r=parseInt(r,16))}return{r:e,g:n,b:r,a:o,style:t}},setFillStyle:function(t){var e=this._getRGBA(t);this.ctx.fillStyle=t,this.ctx._isFillTransparent=0===e.a,this.ctx._fillOpacity=e.a,this.pdf.setFillColor(e.r,e.g,e.b,{a:e.a}),this.pdf.setTextColor(e.r,e.g,e.b,{a:e.a})},setStrokeStyle:function(t){var e=this._getRGBA(t);this.ctx.strokeStyle=e.style,this.ctx._isStrokeTransparent=0===e.a,this.ctx._strokeOpacity=e.a,0===e.a?this.pdf.setDrawColor(255,255,255):(e.a,this.pdf.setDrawColor(e.r,e.g,e.b))},fillText:function(t,e,n,r){if(!this._isFillTransparent()){e=this._wrapX(e),n=this._wrapY(n);var i=this._matrix_map_point(this.ctx._transform,[e,n]);e=i[0],n=i[1];var o=57.2958*this._matrix_rotation(this.ctx._transform);if(this.ctx._clip_path.length>0){var a;(a=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage()).push("q");var s=this.path;this.path=this.ctx._clip_path,this.ctx._clip_path=[],this._fill(null,!0),this.ctx._clip_path=this.path,this.path=s}var c=1;try{c=this._matrix_decompose(this._getTransform()).scale[0]}catch(t){console.warn(t)}if(c<.01)this.pdf.text(t,e,this._getBaseline(n),null,o);else{var l=this.pdf.internal.getFontSize();this.pdf.setFontSize(l*c),this.pdf.text(t,e,this._getBaseline(n),null,o),this.pdf.setFontSize(l)}this.ctx._clip_path.length>0&&a.push("Q")}},strokeText:function(t,e,n,r){if(!this._isStrokeTransparent()){e=this._wrapX(e),n=this._wrapY(n);var i=this._matrix_map_point(this.ctx._transform,[e,n]);e=i[0],n=i[1];var o=57.2958*this._matrix_rotation(this.ctx._transform);if(this.ctx._clip_path.length>0){var a;(a=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage()).push("q");var s=this.path;this.path=this.ctx._clip_path,this.ctx._clip_path=[],this._fill(null,!0),this.ctx._clip_path=this.path,this.path=s}var c=1;try{c=this._matrix_decompose(this._getTransform()).scale[0]}catch(t){console.warn(t)}if(1===c)this.pdf.text(t,e,this._getBaseline(n),{stroke:!0},o);else{var l=this.pdf.internal.getFontSize();this.pdf.setFontSize(l*c),this.pdf.text(t,e,this._getBaseline(n),{stroke:!0},o),this.pdf.setFontSize(l)}this.ctx._clip_path.length>0&&a.push("Q")}},setFont:function(t){this.ctx.font=t;var e=/\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/;if(null!=(u=e.exec(t))){var n=u[1],r=u[3],i=u[4],o=u[5],a=u[6];i="px"===o?Math.floor(parseFloat(i)):"em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(i)),this.pdf.setFontSize(i),"bold"===r||"700"===r?this.pdf.setFontStyle("bold"):"italic"===n?this.pdf.setFontStyle("italic"):this.pdf.setFontStyle("normal");var s,c=(f=a).toLowerCase().split(/\s*,\s*/);s=-1!=c.indexOf("arial")?"Arial":-1!=c.indexOf("verdana")?"Verdana":-1!=c.indexOf("helvetica")?"Helvetica":-1!=c.indexOf("sans-serif")?"sans-serif":-1!=c.indexOf("fixed")?"Fixed":-1!=c.indexOf("monospace")?"Monospace":-1!=c.indexOf("terminal")?"Terminal":-1!=c.indexOf("courier")?"Courier":-1!=c.indexOf("times")?"Times":-1!=c.indexOf("cursive")?"Cursive":-1!=c.indexOf("fantasy")?"Fantasy":(c.indexOf("serif"),"Serif");var l;l="bold"===r?"bold":"normal",this.pdf.setFont(s,l)}else{var u=(e=/\s*(\d+)(pt|px|em)\s+([\w "]+)\s*([\w "]+)?/).exec(t);if(null!=u){var h=u[1],f=u[3];(l=u[4])||(l="normal"),h="em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(h)),this.pdf.setFontSize(h),this.pdf.setFont(f,l)}}},setTextBaseline:function(t){this.ctx.textBaseline=t},getTextBaseline:function(){return this.ctx.textBaseline},setTextAlign:function(t){this.ctx.textAlign=t},getTextAlign:function(){return this.ctx.textAlign},setLineWidth:function(t){this.ctx.lineWidth=t,this.pdf.setLineWidth(t)},setLineCap:function(t){this.ctx.lineCap=t,this.pdf.setLineCap(t)},setLineJoin:function(t){this.ctx.lineJoin=t,this.pdf.setLineJoin(t)},moveTo:function(t,e){t=this._wrapX(t),e=this._wrapY(e);var n=this._matrix_map_point(this.ctx._transform,[t,e]),r={type:"mt",x:t=n[0],y:e=n[1]};this.path.push(r)},_wrapX:function(t){return this.pageWrapXEnabled?t%this.pageWrapX:t},_wrapY:function(t){return this.pageWrapYEnabled?(this._gotoPage(this._page(t)),(t-this.lastBreak)%this.pageWrapY):t},transform:function(t,e,n,r,i,o){this.ctx._transform=[t,e,n,r,i,o]},setTransform:function(t,e,n,r,i,o){this.ctx._transform=[t,e,n,r,i,o]},_getTransform:function(){return this.ctx._transform},lastBreak:0,pageBreaks:[],_page:function(t){if(this.pageWrapYEnabled){this.lastBreak=0;for(var e=0,n=0,r=0;r<this.pageBreaks.length;r++)if(t>=this.pageBreaks[r]){e++,0===this.lastBreak&&n++;var i=this.pageBreaks[r]-this.lastBreak;this.lastBreak=this.pageBreaks[r],n+=o=Math.floor(i/this.pageWrapY)}if(0===this.lastBreak){var o=Math.floor(t/this.pageWrapY)+1;n+=o}return n+e}return this.pdf.internal.getCurrentPageInfo().pageNumber},_gotoPage:function(t){},lineTo:function(t,e){t=this._wrapX(t),e=this._wrapY(e);var n=this._matrix_map_point(this.ctx._transform,[t,e]),r={type:"lt",x:t=n[0],y:e=n[1]};this.path.push(r)},bezierCurveTo:function(t,e,n,r,i,o){t=this._wrapX(t),e=this._wrapY(e),n=this._wrapX(n),r=this._wrapY(r),i=this._wrapX(i),o=this._wrapY(o);var a;i=(a=this._matrix_map_point(this.ctx._transform,[i,o]))[0],o=a[1];var s={type:"bct",x1:t=(a=this._matrix_map_point(this.ctx._transform,[t,e]))[0],y1:e=a[1],x2:n=(a=this._matrix_map_point(this.ctx._transform,[n,r]))[0],y2:r=a[1],x:i,y:o};this.path.push(s)},quadraticCurveTo:function(t,e,n,r){t=this._wrapX(t),e=this._wrapY(e),n=this._wrapX(n),r=this._wrapY(r);var i;n=(i=this._matrix_map_point(this.ctx._transform,[n,r]))[0],r=i[1];var o={type:"qct",x1:t=(i=this._matrix_map_point(this.ctx._transform,[t,e]))[0],y1:e=i[1],x:n,y:r};this.path.push(o)},arc:function(t,e,n,r,i,o){if(t=this._wrapX(t),e=this._wrapY(e),!this._matrix_is_identity(this.ctx._transform)){var a=this._matrix_map_point(this.ctx._transform,[t,e]);t=a[0],e=a[1];var s=this._matrix_map_point(this.ctx._transform,[0,0]),c=this._matrix_map_point(this.ctx._transform,[0,n]);n=Math.sqrt(Math.pow(c[0]-s[0],2)+Math.pow(c[1]-s[1],2))}var l={type:"arc",x:t,y:e,radius:n,startAngle:r,endAngle:i,anticlockwise:o};this.path.push(l)},drawImage:function(t,e,n,r,i,o,a,s,c){void 0!==o&&(e=o,n=a,r=s,i=c),e=this._wrapX(e),n=this._wrapY(n);var l,u=this._matrix_map_rect(this.ctx._transform,{x:e,y:n,w:r,h:i}),h=(this._matrix_map_rect(this.ctx._transform,{x:o,y:a,w:s,h:c}),/data:image\/(\w+).*/i.exec(t));l=null!=h?h[1]:"png",this.pdf.addImage(t,l,u.x,u.y,u.w,u.h)},_matrix_multiply:function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],c=n*t[0]+r*t[2],l=i*t[0]+o*t[2],u=a*t[0]+s*t[2]+t[4];return r=n*t[1]+r*t[3],o=i*t[1]+o*t[3],s=a*t[1]+s*t[3]+t[5],n=c,i=l,a=u,[n,r,i,o,a,s]},_matrix_rotation:function(t){return Math.atan2(t[2],t[0])},_matrix_decompose:function(t){var e=t[0],n=t[1],r=t[2],i=t[3],o=Math.sqrt(e*e+n*n),a=(e/=o)*r+(n/=o)*i;r-=e*a,i-=n*a;var s=Math.sqrt(r*r+i*i);return r/=s,i/=s,a/=s,e*i<n*r&&(e=-e,n=-n,a=-a,o=-o),{scale:[o,0,0,s,0,0],translate:[1,0,0,1,t[4],t[5]],rotate:[e,n,-n,e,0,0],skew:[1,0,a,1,0,0]}},_matrix_map_point:function(t,e){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],c=e[0],l=e[1];return[c*n+l*i+a,c*r+l*o+s]},_matrix_map_point_obj:function(t,e){var n=this._matrix_map_point(t,[e.x,e.y]);return{x:n[0],y:n[1]}},_matrix_map_rect:function(t,e){var n=this._matrix_map_point(t,[e.x,e.y]),r=this._matrix_map_point(t,[e.x+e.w,e.y+e.h]);return{x:n[0],y:n[1],w:r[0]-n[0],h:r[1]-n[1]}},_matrix_is_identity:function(t){return 1==t[0]&&(0==t[1]&&(0==t[2]&&(1==t[3]&&(0==t[4]&&0==t[5]))))},rotate:function(t){var e=[Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0];this.ctx._transform=this._matrix_multiply(this.ctx._transform,e)},scale:function(t,e){var n=[t,0,0,e,0,0];this.ctx._transform=this._matrix_multiply(this.ctx._transform,n)},translate:function(t,e){var n=[1,0,0,1,t,e];this.ctx._transform=this._matrix_multiply(this.ctx._transform,n)},stroke:function(){if(this.ctx._clip_path.length>0){var t;(t=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage()).push("q");var e=this.path;this.path=this.ctx._clip_path,this.ctx._clip_path=[],this._stroke(!0),this.ctx._clip_path=this.path,this.path=e,this._stroke(!1),t.push("Q")}else this._stroke(!1)},_stroke:function(t){if(t||!this._isStrokeTransparent()){for(var e=[],n=this.path,r=0;r<n.length;r++){var i=n[r];switch(i.type){case"mt":e.push({start:i,deltas:[],abs:[]});break;case"lt":h=[i.x-n[r-1].x,i.y-n[r-1].y];e[e.length-1].deltas.push(h),e[e.length-1].abs.push(i);break;case"bct":h=[i.x1-n[r-1].x,i.y1-n[r-1].y,i.x2-n[r-1].x,i.y2-n[r-1].y,i.x-n[r-1].x,i.y-n[r-1].y];e[e.length-1].deltas.push(h);break;case"qct":var o=n[r-1].x+2/3*(i.x1-n[r-1].x),a=n[r-1].y+2/3*(i.y1-n[r-1].y),s=i.x+2/3*(i.x1-i.x),c=i.y+2/3*(i.y1-i.y),l=i.x,u=i.y,h=[o-n[r-1].x,a-n[r-1].y,s-n[r-1].x,c-n[r-1].y,l-n[r-1].x,u-n[r-1].y];e[e.length-1].deltas.push(h);break;case"arc":0==e.length&&e.push({start:{x:0,y:0},deltas:[],abs:[]}),e[e.length-1].arc=!0,e[e.length-1].abs.push(i)}}for(r=0;r<e.length;r++){var f;if(f=r==e.length-1?"s":null,e[r].arc)for(var d=e[r].abs,p=0;p<d.length;p++){var m=d[p],g=360*m.startAngle/(2*Math.PI),w=360*m.endAngle/(2*Math.PI),y=m.x,v=m.y;this.internal.arc2(this,y,v,m.radius,g,w,m.anticlockwise,f,t)}else{var y=e[r].start.x,v=e[r].start.y;t?(this.pdf.lines(e[r].deltas,y,v,null,null),this.pdf.clip_fixed()):this.pdf.lines(e[r].deltas,y,v,null,f)}}}},_isFillTransparent:function(){return this.ctx._isFillTransparent||0==this.globalAlpha},_isStrokeTransparent:function(){return this.ctx._isStrokeTransparent||0==this.globalAlpha},fill:function(t){if(this.ctx._clip_path.length>0){var e;(e=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage()).push("q");var n=this.path;this.path=this.ctx._clip_path,this.ctx._clip_path=[],this._fill(t,!0),this.ctx._clip_path=this.path,this.path=n,this._fill(t,!1),e.push("Q")}else this._fill(t,!1)},_fill:function(t,e){if(!this._isFillTransparent()){var r,i="function"==typeof this.pdf.internal.newObject2;r=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage();var o=[],a=window.outIntercept;if(i)switch(this.ctx.globalCompositeOperation){case"normal":case"source-over":break;case"destination-in":case"destination-out":var s=this.pdf.internal.newStreamObject(),c=this.pdf.internal.newObject2();c.push("<</Type /ExtGState"),c.push("/SMask <</S /Alpha /G "+s.objId+" 0 R>>"),c.push(">>");d="MASK"+c.objId;this.pdf.internal.addGraphicsState(d,c.objId);var l="/"+d+" gs";r.splice(0,0,"q"),r.splice(1,0,l),r.push("Q"),window.outIntercept=s;break;default:var u="/"+this.pdf.internal.blendModeMap[this.ctx.globalCompositeOperation.toUpperCase()];u&&this.pdf.internal.out(u+" gs")}var h=this.ctx.globalAlpha;if(this.ctx._fillOpacity<1&&(h=this.ctx._fillOpacity),i){var f=this.pdf.internal.newObject2();f.push("<</Type /ExtGState"),f.push("/CA "+h),f.push("/ca "+h),f.push(">>");var d="GS_O_"+f.objId;this.pdf.internal.addGraphicsState(d,f.objId),this.pdf.internal.out("/"+d+" gs")}for(var p=this.path,m=0;m<p.length;m++){var g=p[m];switch(g.type){case"mt":o.push({start:g,deltas:[],abs:[]});break;case"lt":_=[g.x-p[m-1].x,g.y-p[m-1].y];o[o.length-1].deltas.push(_),o[o.length-1].abs.push(g);break;case"bct":_=[g.x1-p[m-1].x,g.y1-p[m-1].y,g.x2-p[m-1].x,g.y2-p[m-1].y,g.x-p[m-1].x,g.y-p[m-1].y];o[o.length-1].deltas.push(_);break;case"qct":var w=p[m-1].x+2/3*(g.x1-p[m-1].x),y=p[m-1].y+2/3*(g.y1-p[m-1].y),v=g.x+2/3*(g.x1-g.x),b=g.y+2/3*(g.y1-g.y),x=g.x,k=g.y,_=[w-p[m-1].x,y-p[m-1].y,v-p[m-1].x,b-p[m-1].y,x-p[m-1].x,k-p[m-1].y];o[o.length-1].deltas.push(_);break;case"arc":0===o.length&&o.push({deltas:[],abs:[]}),o[o.length-1].arc=!0,o[o.length-1].abs.push(g);break;case"close":o.push({close:!0})}}for(m=0;m<o.length;m++){var C;if(m==o.length-1?(C="f","evenodd"===t&&(C+="*")):C=null,o[m].close)this.pdf.internal.out("h"),this.pdf.internal.out("f");else if(o[m].arc){o[m].start&&this.internal.move2(this,o[m].start.x,o[m].start.y);for(var A=o[m].abs,S=0;S<A.length;S++){var q=A[S];if(void 0!==q.startAngle){var T=360*q.startAngle/(2*Math.PI),P=360*q.endAngle/(2*Math.PI),I=q.x,E=q.y;if(0===S&&this.internal.move2(this,I,E),this.internal.arc2(this,I,E,q.radius,T,P,q.anticlockwise,null,e),S===A.length-1&&o[m].start){var I=o[m].start.x,E=o[m].start.y;this.internal.line2(n,I,E)}}else this.internal.line2(n,q.x,q.y)}}else{var I=o[m].start.x,E=o[m].start.y;e?(this.pdf.lines(o[m].deltas,I,E,null,null),this.pdf.clip_fixed()):this.pdf.lines(o[m].deltas,I,E,null,C)}}window.outIntercept=a}},pushMask:function(){if("function"==typeof this.pdf.internal.newObject2){var t=this.pdf.internal.newStreamObject(),e=this.pdf.internal.newObject2();e.push("<</Type /ExtGState"),e.push("/SMask <</S /Alpha /G "+t.objId+" 0 R>>"),e.push(">>");var n="MASK"+e.objId;this.pdf.internal.addGraphicsState(n,e.objId);var r="/"+n+" gs";this.pdf.internal.out(r)}else console.log("jsPDF v2 not enabled")},clip:function(){if(this.ctx._clip_path.length>0)for(var t=0;t<this.path.length;t++)this.ctx._clip_path.push(this.path[t]);else this.ctx._clip_path=this.path;this.path=[]},measureText:function(t){var e=this.pdf;return{getWidth:function(){var n=e.internal.getFontSize(),r=e.getStringUnitWidth(t)*n/e.internal.scaleFactor;return r*=1.3333},get width(){return this.getWidth(t)}}},_getBaseline:function(t){var e=parseInt(this.pdf.internal.getFontSize()),n=.25*e;switch(this.ctx.textBaseline){case"bottom":return t-n;case"top":return t+e;case"hanging":return t+e-n;case"middle":return t+e/2-n;case"ideographic":return t;case"alphabetic":default:return t}}};var n=t.context2d;Object.defineProperty(n,"fillStyle",{set:function(t){this.setFillStyle(t)},get:function(){return this.ctx.fillStyle}}),Object.defineProperty(n,"strokeStyle",{set:function(t){this.setStrokeStyle(t)},get:function(){return this.ctx.strokeStyle}}),Object.defineProperty(n,"lineWidth",{set:function(t){this.setLineWidth(t)},get:function(){return this.ctx.lineWidth}}),Object.defineProperty(n,"lineCap",{set:function(t){this.setLineCap(t)},get:function(){return this.ctx.lineCap}}),Object.defineProperty(n,"lineJoin",{set:function(t){this.setLineJoin(t)},get:function(){return this.ctx.lineJoin}}),Object.defineProperty(n,"miterLimit",{set:function(t){this.ctx.miterLimit=t},get:function(){return this.ctx.miterLimit}}),Object.defineProperty(n,"textBaseline",{set:function(t){this.setTextBaseline(t)},get:function(){return this.getTextBaseline()}}),Object.defineProperty(n,"textAlign",{set:function(t){this.setTextAlign(t)},get:function(){return this.getTextAlign()}}),Object.defineProperty(n,"font",{set:function(t){this.setFont(t)},get:function(){return this.ctx.font}}),Object.defineProperty(n,"globalCompositeOperation",{set:function(t){this.ctx.globalCompositeOperation=t},get:function(){return this.ctx.globalCompositeOperation}}),Object.defineProperty(n,"globalAlpha",{set:function(t){this.ctx.globalAlpha=t},get:function(){return this.ctx.globalAlpha}}),Object.defineProperty(n,"ignoreClearRect",{set:function(t){this.ctx.ignoreClearRect=t},get:function(){return this.ctx.ignoreClearRect}}),n.internal={},n.internal.rxRgb=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,n.internal.rxRgba=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/,n.internal.rxTransparent=/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/,n.internal.arc=function(t,e,n,r,i,o,a,s){for(var c=this.pdf.internal.scaleFactor,l=this.pdf.internal.pageSize.height,u=this.pdf.internal.f2,h=i*(Math.PI/180),f=o*(Math.PI/180),d=this.createArc(r,h,f,a),p=0;p<d.length;p++){var m=d[p];0===p?this.pdf.internal.out([u((m.x1+e)*c),u((l-(m.y1+n))*c),"m",u((m.x2+e)*c),u((l-(m.y2+n))*c),u((m.x3+e)*c),u((l-(m.y3+n))*c),u((m.x4+e)*c),u((l-(m.y4+n))*c),"c"].join(" ")):this.pdf.internal.out([u((m.x2+e)*c),u((l-(m.y2+n))*c),u((m.x3+e)*c),u((l-(m.y3+n))*c),u((m.x4+e)*c),u((l-(m.y4+n))*c),"c"].join(" ")),t._lastPoint={x:e,y:n}}null!==s&&this.pdf.internal.out(this.pdf.internal.getStyle(s))},n.internal.arc2=function(t,e,n,r,i,o,a,s,c){var l=e,u=n;c?(this.arc(t,l,u,r,i,o,a,null),this.pdf.clip_fixed()):this.arc(t,l,u,r,i,o,a,s)},n.internal.move2=function(t,e,n){var r=this.pdf.internal.scaleFactor,i=this.pdf.internal.pageSize.height,o=this.pdf.internal.f2;this.pdf.internal.out([o(e*r),o((i-n)*r),"m"].join(" ")),t._lastPoint={x:e,y:n}},n.internal.line2=function(t,e,n){var r=this.pdf.internal.scaleFactor,i=this.pdf.internal.pageSize.height,o=this.pdf.internal.f2,a={x:e,y:n};this.pdf.internal.out([o(a.x*r),o((i-a.y)*r),"l"].join(" ")),t._lastPoint=a},n.internal.createArc=function(t,e,n,r){var i=2*Math.PI,o=Math.PI/2,a=e;for((a<i||a>i)&&(a%=i),a<0&&(a=i+a);e>n;)e-=i;var s=Math.abs(n-e);s<i&&r&&(s=i-s);for(var c=[],l=r?-1:1,u=a;s>1e-5;){var h=u+l*Math.min(s,o);c.push(this.createSmallArc(t,u,h)),s-=Math.abs(h-u),u=h}return c},n.internal.getCurrentPage=function(){return this.pdf.internal.pages[this.pdf.internal.getCurrentPageInfo().pageNumber]},n.internal.createSmallArc=function(t,e,n){var r=(n-e)/2,i=t*Math.cos(r),o=t*Math.sin(r),a=i,s=-o,c=a*a+s*s,l=c+a*i+s*o,u=4/3*(Math.sqrt(2*c*l)-l)/(a*o-s*i),h=a-u*s,f=s+u*a,d=h,p=-f,m=r+e,g=Math.cos(m),w=Math.sin(m);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:h*g-f*w,y2:h*w+f*g,x3:d*g-p*w,y3:d*w+p*g,x4:t*Math.cos(n),y4:t*Math.sin(n)}}}(e.API),/** @preserve
 * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Daniel Husar, https://github.com/danielhusar
 *               2014 Wolfgang Gassler, https://github.com/woolfg
 *               2014 Steven Spungin, https://github.com/flamenco
 *
 * 
 * ====================================================================
 */
function(e){var n,r,o,a,s,c,l,u,h,f,d,p,m,g,w,y,v,b,x,k;n=function(){function t(){}return function(e){return t.prototype=e,new t}}(),f=function(t){var e,n,r,i,o,a,s;for(n=0,r=t.length,e=void 0,i=!1,a=!1;!i&&n!==r;)(e=t[n]=t[n].trimLeft())&&(i=!0),n++;for(n=r-1;r&&!a&&-1!==n;)(e=t[n]=t[n].trimRight())&&(a=!0),n--;for(o=/\s+$/g,s=!0,n=0;n!==r;)"\u2028"!=t[n]&&(e=t[n].replace(/\s+/g," "),s&&(e=e.trimLeft()),e&&(s=o.test(e)),t[n]=e),n++;return t},p=function(t){var e,n,r;for(e=void 0,n=(r=t.split(",")).shift();!e&&n;)e=o[n.trim().toLowerCase()],n=r.shift();return e},m=function(t){(t="auto"===t?"0px":t).indexOf("em")>-1&&!isNaN(Number(t.replace("em","")))&&(t=18.719*Number(t.replace("em",""))+"px"),t.indexOf("pt")>-1&&!isNaN(Number(t.replace("pt","")))&&(t=1.333*Number(t.replace("pt",""))+"px");var e;return void 0,16,(e=g[t])?e:void 0!==(e={"xx-small":9,"x-small":11,small:13,medium:16,large:19,"x-large":23,"xx-large":28,auto:0}[{css_line_height_string:t}])?g[t]=e/16:(e=parseFloat(t))?g[t]=e/16:3===(e=t.match(/([\d\.]+)(px)/)).length?g[t]=parseFloat(e[1])/16:g[t]=1},h=function(t){var e,n,r;return r=function(e){var n;return n=function(t){return document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle?t.currentStyle:t.style}(t),function(t){return t=t.replace(/-\D/g,function(t){return t.charAt(1).toUpperCase()}),n[t]}}(),e={},n=void 0,e["font-family"]=p(r("font-family"))||"times",e["font-style"]=a[r("font-style")]||"normal",e["text-align"]=s[r("text-align")]||"left","bold"===(n=c[r("font-weight")]||"normal")&&("normal"===e["font-style"]?e["font-style"]=n:e["font-style"]=n+e["font-style"]),e["font-size"]=m(r("font-size"))||1,e["line-height"]=m(r("line-height"))||1,e.display="inline"===r("display")?"inline":"block",n="block"===e.display,e["margin-top"]=n&&m(r("margin-top"))||0,e["margin-bottom"]=n&&m(r("margin-bottom"))||0,e["padding-top"]=n&&m(r("padding-top"))||0,e["padding-bottom"]=n&&m(r("padding-bottom"))||0,e["margin-left"]=n&&m(r("margin-left"))||0,e["margin-right"]=n&&m(r("margin-right"))||0,e["padding-left"]=n&&m(r("padding-left"))||0,e["padding-right"]=n&&m(r("padding-right"))||0,e["page-break-before"]=r("page-break-before")||"auto",e.float=l[r("cssFloat")]||"none",e.clear=u[r("clear")]||"none",e.color=r("color"),e},w=function(t,e,n){var r,i,o,a,s;if(o=!1,i=void 0,a=void 0,r=n["#"+t.id])if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;if(r=n[t.nodeName],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;for(s=t.className?t.className.split(" "):[],i=0;i<s.length;i++)if(r=n["."+s[i]],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;return o},k=function(t,e){var n,r,i,o,a,s,c,l,u;for(n=[],r=[],i=0,u=t.rows[0].cells.length,c=t.clientWidth;i<u;)l=t.rows[0].cells[i],r[i]={name:l.textContent.toLowerCase().replace(/\s+/g,""),prompt:l.textContent.replace(/\r?\n/g,""),width:l.clientWidth/c*e.pdf.internal.pageSize.width},i++;for(i=1;i<t.rows.length;){for(s=t.rows[i],a={},o=0;o<s.cells.length;)a[r[o].name]=s.cells[o].textContent.replace(/\r?\n/g,""),o++;n.push(a),i++}return{rows:n,headers:r}};var _={SCRIPT:1,STYLE:1,NOSCRIPT:1,OBJECT:1,EMBED:1,SELECT:1},C=1;r=function(e,i,o){var a,s,c,l,u,f,d,p;for(s=e.childNodes,a=void 0,(u="block"===(c=h(e)).display)&&(i.setBlockBoundary(),i.setBlockStyle(c)),l=0,f=s.length;l<f;){if("object"===(void 0===(a=s[l])?"undefined":t(a))){if(i.executeWatchFunctions(a),1===a.nodeType&&"HEADER"===a.nodeName){var m=a,g=i.pdf.margins_doc.top;i.pdf.internal.events.subscribe("addPage",function(t){i.y=g,r(m,i,o),i.pdf.margins_doc.top=i.y+10,i.y+=10},!1)}if(8===a.nodeType&&"#comment"===a.nodeName)~a.textContent.indexOf("ADD_PAGE")&&(i.pdf.addPage(),i.y=i.pdf.margins_doc.top);else if(1!==a.nodeType||_[a.nodeName])if(3===a.nodeType){var v=a.nodeValue;if(a.nodeValue&&"LI"===a.parentNode.nodeName)if("OL"===a.parentNode.parentNode.nodeName)v=C+++". "+v;else{var b=c["font-size"],x=(3-.75*b)*i.pdf.internal.scaleFactor,A=.75*b*i.pdf.internal.scaleFactor,S=1.74*b/i.pdf.internal.scaleFactor;p=function(t,e){this.pdf.circle(t+x,e+A,S,"FD")}}16&a.ownerDocument.body.compareDocumentPosition(a)&&i.addText(v,c)}else"string"==typeof a&&i.addText(a,c);else{var q;if("IMG"===a.nodeName){var T=a.getAttribute("src");q=y[i.pdf.sHashCode(T)||T]}if(q){i.pdf.internal.pageSize.height-i.pdf.margins_doc.bottom<i.y+a.height&&i.y>i.pdf.margins_doc.top&&(i.pdf.addPage(),i.y=i.pdf.margins_doc.top,i.executeWatchFunctions(a));var P=h(a),I=i.x,E=12/i.pdf.internal.scaleFactor,O=(P["margin-left"]+P["padding-left"])*E,F=(P["margin-right"]+P["padding-right"])*E,B=(P["margin-top"]+P["padding-top"])*E,R=(P["margin-bottom"]+P["padding-bottom"])*E;void 0!==P.float&&"right"===P.float?I+=i.settings.width-a.width-F:I+=O,i.pdf.addImage(q,I,i.y+B,a.width,a.height),q=void 0,"right"===P.float||"left"===P.float?(i.watchFunctions.push(function(t,e,n,r){return i.y>=e?(i.x+=t,i.settings.width+=n,!0):!!(r&&1===r.nodeType&&!_[r.nodeName]&&i.x+r.width>i.pdf.margins_doc.left+i.pdf.margins_doc.width)&&(i.x+=t,i.y=e,i.settings.width+=n,!0)}.bind(this,"left"===P.float?-a.width-O-F:0,i.y+a.height+B+R,a.width)),i.watchFunctions.push(function(t,e,n){return!(i.y<t&&e===i.pdf.internal.getNumberOfPages())||1===n.nodeType&&"both"===h(n).clear&&(i.y=t,!0)}.bind(this,i.y+a.height,i.pdf.internal.getNumberOfPages())),i.settings.width-=a.width+O+F,"left"===P.float&&(i.x+=a.width+O+F)):i.y+=a.height+B+R}else if("TABLE"===a.nodeName)d=k(a,i),i.y+=10,i.pdf.table(i.x,i.y,d.rows,d.headers,{autoSize:!1,printHeaders:o.printHeaders,margins:i.pdf.margins_doc,css:h(a)}),i.y=i.pdf.lastCellPos.y+i.pdf.lastCellPos.h+20;else if("OL"===a.nodeName||"UL"===a.nodeName)C=1,w(a,i,o)||r(a,i,o),i.y+=10;else if("LI"===a.nodeName){var D=i.x;i.x+=20/i.pdf.internal.scaleFactor,i.y+=3,w(a,i,o)||r(a,i,o),i.x=D}else"BR"===a.nodeName?(i.y+=c["font-size"]*i.pdf.internal.scaleFactor,i.addText("\u2028",n(c))):w(a,i,o)||r(a,i,o)}}l++}if(o.outY=i.y,u)return i.setBlockBoundary(p)},y={},v=function(t,e,n,r){function i(){e.pdf.internal.events.publish("imagesLoaded"),r(o)}for(var o,a=t.getElementsByTagName("img"),s=a.length,c=0;s--;)!function(t,n,r){if(t){var a=new Image;o=++c,a.crossOrigin="",a.onerror=a.onload=function(){if(a.complete&&(0===a.src.indexOf("data:image/")&&(a.width=n||a.width||0,a.height=r||a.height||0),a.width+a.height)){var o=e.pdf.sHashCode(t)||t;y[o]=y[o]||a}--c||i()},a.src=t}}(a[s].getAttribute("src"),a[s].width,a[s].height);return c||i()},b=function(t,e,n){var i=t.getElementsByTagName("footer");if(i.length>0){i=i[0];var o=e.pdf.internal.write,a=e.y;e.pdf.internal.write=function(){},r(i,e,n);var s=Math.ceil(e.y-a)+5;e.y=a,e.pdf.internal.write=o,e.pdf.margins_doc.bottom+=s;for(var c=function(t){var o=void 0!==t?t.pageNumber:1,a=e.y;e.y=e.pdf.internal.pageSize.height-e.pdf.margins_doc.bottom,e.pdf.margins_doc.bottom-=s;for(var c=i.getElementsByTagName("span"),l=0;l<c.length;++l)(" "+c[l].className+" ").replace(/[\n\t]/g," ").indexOf(" pageCounter ")>-1&&(c[l].innerHTML=o),(" "+c[l].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")>-1&&(c[l].innerHTML="###jsPDFVarTotalPages###");r(i,e,n),e.pdf.margins_doc.bottom+=s,e.y=a},l=i.getElementsByTagName("span"),u=0;u<l.length;++u)(" "+l[u].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")>-1&&e.pdf.internal.events.subscribe("htmlRenderingFinished",e.pdf.putTotalPages.bind(e.pdf,"###jsPDFVarTotalPages###"),!0);e.pdf.internal.events.subscribe("addPage",c,!1),c(),_.FOOTER=1}},x=function(t,e,n,i,o,a){if(!e)return!1;"string"==typeof e||e.parentNode||(e=""+e.innerHTML),"string"==typeof e&&(e=function(t){var e,n,r,i;return r="jsPDFhtmlText"+Date.now().toString()+(1e3*Math.random()).toFixed(0),i="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",n=document.createElement("div"),n.style.cssText=i,n.innerHTML='<iframe style="height:1px;width:1px" name="'+r+'" />',document.body.appendChild(n),(e=window.frames[r]).document.open(),e.document.writeln(t),e.document.close(),e.document.body}(e.replace(/<\/?script[^>]*?>/gi,"")));var s,c=new d(t,n,i,o);return v.call(this,e,c,o.elementHandlers,function(t){b(e,c,o.elementHandlers),r(e,c,o.elementHandlers),c.pdf.internal.events.publish("htmlRenderingFinished"),s=c.dispose(),"function"==typeof a?a(s):t&&console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!")}),s||{x:c.x,y:c.y}},(d=function(t,e,n,r){return this.pdf=t,this.x=e,this.y=n,this.settings=r,this.watchFunctions=[],this.init(),this}).prototype.init=function(){return this.paragraph={text:[],style:[]},this.pdf.internal.write("q")},d.prototype.dispose=function(){return this.pdf.internal.write("Q"),{x:this.x,y:this.y,ready:!0}},d.prototype.executeWatchFunctions=function(t){var e=!1,n=[];if(this.watchFunctions.length>0){for(var r=0;r<this.watchFunctions.length;++r)!0===this.watchFunctions[r](t)?e=!0:n.push(this.watchFunctions[r]);this.watchFunctions=n}return e},d.prototype.splitFragmentsIntoLines=function(t,e){var r,i,o,a,s,c,l,u,h,f,d,p,m,g;for(12,f=this.pdf.internal.scaleFactor,a={},i=void 0,h=void 0,o=void 0,s=void 0,g=void 0,u=void 0,l=void 0,c=void 0,p=[d=[]],r=0,m=this.settings.width;t.length;)if(s=t.shift(),g=e.shift(),s)if(i=g["font-family"],h=g["font-style"],(o=a[i+h])||(o=this.pdf.internal.getFont(i,h).metadata.Unicode,a[i+h]=o),u={widths:o.widths,kerning:o.kerning,fontSize:12*g["font-size"],textIndent:r},l=this.pdf.getStringUnitWidth(s,u)*u.fontSize/f,"\u2028"==s)d=[],p.push(d);else if(r+l>m){for(c=this.pdf.splitTextToSize(s,m,u),d.push([c.shift(),g]);c.length;)d=[[c.shift(),g]],p.push(d);r=this.pdf.getStringUnitWidth(d[0][0],u)*u.fontSize/f}else d.push([s,g]),r+=l;if(void 0!==g["text-align"]&&("center"===g["text-align"]||"right"===g["text-align"]||"justify"===g["text-align"]))for(var w=0;w<p.length;++w){var y=this.pdf.getStringUnitWidth(p[w][0][0],u)*u.fontSize/f;w>0&&(p[w][0][1]=n(p[w][0][1]));var v=m-y;if("right"===g["text-align"])p[w][0][1]["margin-left"]=v;else if("center"===g["text-align"])p[w][0][1]["margin-left"]=v/2;else if("justify"===g["text-align"]){var b=p[w][0][0].split(" ").length-1;p[w][0][1]["word-spacing"]=v/b,w===p.length-1&&(p[w][0][1]["word-spacing"]=0)}}return p},d.prototype.RenderTextFragment=function(t,e){var n,r;r=0,this.pdf.internal.pageSize.height-this.pdf.margins_doc.bottom<this.y+this.pdf.internal.getFontSize()&&(this.pdf.internal.write("ET","Q"),this.pdf.addPage(),this.y=this.pdf.margins_doc.top,this.pdf.internal.write("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),e.color,"Td"),r=Math.max(r,e["line-height"],e["font-size"]),this.pdf.internal.write(0,(-12*r).toFixed(2),"Td")),n=this.pdf.internal.getFont(e["font-family"],e["font-style"]);var i=this.getPdfColor(e.color);i!==this.lastTextColor&&(this.pdf.internal.write(i),this.lastTextColor=i),void 0!==e["word-spacing"]&&e["word-spacing"]>0&&this.pdf.internal.write(e["word-spacing"].toFixed(2),"Tw"),this.pdf.internal.write("/"+n.id,(12*e["font-size"]).toFixed(2),"Tf","("+this.pdf.internal.pdfEscape(t)+") Tj"),void 0!==e["word-spacing"]&&this.pdf.internal.write(0,"Tw")},d.prototype.getPdfColor=function(t){var e,n,r,o=/rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);if(null!=o?(e=parseInt(o[1]),n=parseInt(o[2]),r=parseInt(o[3])):("#"!=t.charAt(0)&&((t=i.colorNameToHex(t))||(t="#000000")),e=t.substring(1,3),e=parseInt(e,16),n=t.substring(3,5),n=parseInt(n,16),r=t.substring(5,7),r=parseInt(r,16)),"string"==typeof e&&/^#[0-9A-Fa-f]{6}$/.test(e)){var a=parseInt(e.substr(1),16);e=a>>16&255,n=a>>8&255,r=255&a}var s=this.f3;return 0===e&&0===n&&0===r||void 0===n?s(e/255)+" g":[s(e/255),s(n/255),s(r/255),"rg"].join(" ")},d.prototype.f3=function(t){return t.toFixed(3)},d.prototype.renderParagraph=function(t){var e,n,r,i,o,a,s,c,l,u,h,d,p;if(r=f(this.paragraph.text),d=this.paragraph.style,e=this.paragraph.blockstyle,this.paragraph={text:[],style:[],blockstyle:{},priorblockstyle:e},r.join("").trim()){s=this.splitFragmentsIntoLines(r,d),a=void 0,c=void 0,12,n=12/this.pdf.internal.scaleFactor,this.priorMarginBottom=this.priorMarginBottom||0,h=(Math.max((e["margin-top"]||0)-this.priorMarginBottom,0)+(e["padding-top"]||0))*n,u=((e["margin-bottom"]||0)+(e["padding-bottom"]||0))*n,this.priorMarginBottom=e["margin-bottom"]||0,"always"===e["page-break-before"]&&(this.pdf.addPage(),this.y=0,h=((e["margin-top"]||0)+(e["padding-top"]||0))*n),l=this.pdf.internal.write,i=void 0,o=void 0,this.y+=h,l("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td");for(var m=0;s.length;){for(c=0,i=0,o=(a=s.shift()).length;i!==o;)a[i][0].trim()&&(c=Math.max(c,a[i][1]["line-height"],a[i][1]["font-size"]),p=7*a[i][1]["font-size"]),i++;var g=0,w=0;for(void 0!==a[0][1]["margin-left"]&&a[0][1]["margin-left"]>0&&(g=(w=this.pdf.internal.getCoordinateString(a[0][1]["margin-left"]))-m,m=w),l(g+Math.max(e["margin-left"]||0,0)*n,(-12*c).toFixed(2),"Td"),i=0,o=a.length;i!==o;)a[i][0]&&this.RenderTextFragment(a[i][0],a[i][1]),i++;if(this.y+=c*n,this.executeWatchFunctions(a[0][1])&&s.length>0){var y=[],v=[];s.forEach(function(t){for(var e=0,n=t.length;e!==n;)t[e][0]&&(y.push(t[e][0]+" "),v.push(t[e][1])),++e}),s=this.splitFragmentsIntoLines(f(y),v),l("ET","Q"),l("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td")}}return t&&"function"==typeof t&&t.call(this,this.x-9,this.y-p/2),l("ET","Q"),this.y+=u}},d.prototype.setBlockBoundary=function(t){return this.renderParagraph(t)},d.prototype.setBlockStyle=function(t){return this.paragraph.blockstyle=t},d.prototype.addText=function(t,e){return this.paragraph.text.push(t),this.paragraph.style.push(e)},o={helvetica:"helvetica","sans-serif":"helvetica","times new roman":"times",serif:"times",times:"times",monospace:"courier",courier:"courier"},c={100:"normal",200:"normal",300:"normal",400:"normal",500:"bold",600:"bold",700:"bold",800:"bold",900:"bold",normal:"normal",bold:"bold",bolder:"bold",lighter:"normal"},a={normal:"normal",italic:"italic",oblique:"italic"},s={left:"left",right:"right",center:"center",justify:"justify"},l={none:"none",right:"right",left:"left"},u={none:"none",both:"both"},g={normal:1},e.fromHTML=function(t,e,n,r,i,o){return this.margins_doc=o||{top:0,bottom:0},r||(r={}),r.elementHandlers||(r.elementHandlers={}),x(this,t,isNaN(e)?4:e,isNaN(n)?4:n,r,i)}}(e.API),/** ==================================================================== 
 * jsPDF JavaScript plugin
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 * 
 * 
 * ====================================================================
 */
function(t){var n,r,i;e.API.addJS=function(t){return i=t,this.internal.events.subscribe("postPutResources",function(t){n=this.internal.newObject(),this.internal.write("<< /Names [(EmbeddedJS) "+(n+1)+" 0 R] >>","endobj"),r=this.internal.newObject(),this.internal.write("<< /S /JavaScript /JS (",i,") >>","endobj")}),this.internal.events.subscribe("putCatalog",function(){void 0!==n&&void 0!==r&&this.internal.write("/Names <</JavaScript "+n+" 0 R>>")}),this}}(),/**
 * jsPDF Outline PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.events.push(["postPutResources",function(){var t=this,e=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var n=t.outline.render().split(/\r\n/),r=0;r<n.length;r++){var i=n[r],o=e.exec(i);if(null!=o){var a=o[1];t.internal.newObjectDeferredBegin(a)}t.internal.write(i)}if(this.outline.createNamedDestinations){for(var s=this.internal.pages.length,c=[],r=0;r<s;r++){var l=t.internal.newObject();c.push(l);var u=t.internal.getPageInfo(r+1);t.internal.write("<< /D["+u.objId+" 0 R /XYZ null null null]>> endobj")}var h=t.internal.newObject();t.internal.write("<< /Names [ ");for(r=0;r<c.length;r++)t.internal.write("(page_"+(r+1)+")"+c[r]+" 0 R");t.internal.write(" ] >>","endobj");t.internal.newObject();t.internal.write("<< /Dests "+h+" 0 R"),t.internal.write(">>","endobj")}}]),t.events.push(["putCatalog",function(){var t=this;t.outline.root.children.length>0&&(t.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&t.internal.write("/Names "+namesOid+" 0 R"))}]),t.events.push(["initialized",function(){var t=this;t.outline={createNamedDestinations:!1,root:{children:[]}},t.outline.add=function(t,e,n){var r={title:e,options:n,children:[]};return null==t&&(t=this.root),t.children.push(r),r},t.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=t,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},t.outline.genIds_r=function(e){e.id=t.internal.newObjectDeferred();for(var n=0;n<e.children.length;n++)this.genIds_r(e.children[n])},t.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),t.children.length>0&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},t.outline.renderItems=function(e){for(i=0;i<e.children.length;i++){o=e.children[i];this.objStart(o),this.line("/Title "+this.makeString(o.title)),this.line("/Parent "+this.makeRef(e)),i>0&&this.line("/Prev "+this.makeRef(e.children[i-1])),i<e.children.length-1&&this.line("/Next "+this.makeRef(e.children[i+1])),o.children.length>0&&(this.line("/First "+this.makeRef(o.children[0])),this.line("/Last "+this.makeRef(o.children[o.children.length-1])));var n=this.count=this.count_r({count:0},o);if(n>0&&this.line("/Count "+n),o.options&&o.options.pageNumber){var r=t.internal.getPageInfo(o.options.pageNumber);this.line("/Dest ["+r.objId+" 0 R /XYZ 0 "+this.ctx.pdf.internal.pageSize.height+" 0]")}this.objEnd()}for(var i=0;i<e.children.length;i++){var o=e.children[i];this.renderItems(o)}},t.outline.line=function(t){this.ctx.val+=t+"\r\n"},t.outline.makeRef=function(t){return t.id+" 0 R"},t.outline.makeString=function(e){return"("+t.internal.pdfEscape(e)+")"},t.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},t.outline.objEnd=function(t){this.ctx.val+=">> \r\nendobj\r\n"},t.outline.count_r=function(t,e){for(var n=0;n<e.children.length;n++)t.count++,this.count_r(t,e.children[n]);return t.count}}])}(e.API),/**@preserve
 *  ====================================================================
 * jsPDF PNG PlugIn
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * 
 * ====================================================================
 */
function(t){var e=function(){return"function"!=typeof PNG||"function"!=typeof s},n=function(e){return e!==t.image_compression.NONE&&r()},r=function(){var t="function"==typeof o;if(!t)throw new Error("requires deflate.js for compression");return t},i=function(e,n,r,i){var s=5,u=f;switch(i){case t.image_compression.FAST:s=3,u=h;break;case t.image_compression.MEDIUM:s=6,u=d;break;case t.image_compression.SLOW:s=9,u=p}e=l(e,n,r,u);var m=new Uint8Array(a(s)),g=c(e),w=new o(s),y=w.append(e),v=w.flush(),b=m.length+y.length+v.length,x=new Uint8Array(b+4);return x.set(m),x.set(y,m.length),x.set(v,m.length+y.length),x[b++]=g>>>24&255,x[b++]=g>>>16&255,x[b++]=g>>>8&255,x[b++]=255&g,t.arrayBufferToBinaryString(x)},a=function(t,e){var n=Math.LOG2E*Math.log(32768)-8<<4|8,r=n<<8;return r|=Math.min(3,(e-1&255)>>1)<<6,r|=0,r+=31-r%31,[n,255&r]},c=function(t,e){for(var n,r=1,i=0,o=t.length,a=0;o>0;){o-=n=o>e?e:o;do{i+=r+=t[a++]}while(--n);r%=65521,i%=65521}return(i<<16|r)>>>0},l=function(t,e,n,r){for(var i,o,a,s=t.length/e,c=new Uint8Array(t.length+s),l=g(),u=0;u<s;u++){if(a=u*e,i=t.subarray(a,a+e),r)c.set(r(i,n,o),a+u);else{for(var h=0,f=l.length,d=[];h<f;h++)d[h]=l[h](i,n,o);var p=w(d.concat());c.set(d[p],a+u)}o=i}return c},u=function(t,e,n){var r=Array.apply([],t);return r.unshift(0),r},h=function(t,e,n){var r,i=[],o=0,a=t.length;for(i[0]=1;o<a;o++)r=t[o-e]||0,i[o+1]=t[o]-r+256&255;return i},f=function(t,e,n){var r,i=[],o=0,a=t.length;for(i[0]=2;o<a;o++)r=n&&n[o]||0,i[o+1]=t[o]-r+256&255;return i},d=function(t,e,n){var r,i,o=[],a=0,s=t.length;for(o[0]=3;a<s;a++)r=t[a-e]||0,i=n&&n[a]||0,o[a+1]=t[a]+256-(r+i>>>1)&255;return o},p=function(t,e,n){var r,i,o,a,s=[],c=0,l=t.length;for(s[0]=4;c<l;c++)r=t[c-e]||0,i=n&&n[c]||0,o=n&&n[c-e]||0,a=m(r,i,o),s[c+1]=t[c]-a+256&255;return s},m=function(t,e,n){var r=t+e-n,i=Math.abs(r-t),o=Math.abs(r-e),a=Math.abs(r-n);return i<=o&&i<=a?t:o<=a?e:n},g=function(){return[u,h,f,d,p]},w=function(t){for(var e,n,r,i=0,o=t.length;i<o;)((e=y(t[i].slice(1)))<n||!n)&&(n=e,r=i),i++;return r},y=function(t){for(var e=0,n=t.length,r=0;e<n;)r+=Math.abs(t[e++]);return r},v=function(e){var n;switch(e){case t.image_compression.FAST:n=11;break;case t.image_compression.MEDIUM:n=13;break;case t.image_compression.SLOW:n=14;break;default:n=12}return n};t.processPNG=function(t,r,o,a,s){var c,l,u,h,f,d,p=this.color_spaces.DEVICE_RGB,m=this.decode.FLATE_DECODE,g=8;if(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)){if(e())throw new Error("PNG support requires png.js and zlib.js");if(c=new PNG(t),t=c.imgData,g=c.bits,p=c.colorSpace,h=c.colors,-1!==[4,6].indexOf(c.colorType)){if(8===c.bits)for(var w,y=(I=32==c.pixelBitlength?new Uint32Array(c.decodePixels().buffer):16==c.pixelBitlength?new Uint16Array(c.decodePixels().buffer):new Uint8Array(c.decodePixels().buffer)).length,b=new Uint8Array(y*c.colors),x=new Uint8Array(y),k=c.pixelBitlength-c.bits,_=0,C=0;_<y;_++){for(A=I[_],w=0;w<k;)b[C++]=A>>>w&255,w+=c.bits;x[_]=A>>>w&255}if(16===c.bits){for(var A,y=(I=new Uint32Array(c.decodePixels().buffer)).length,b=new Uint8Array(y*(32/c.pixelBitlength)*c.colors),x=new Uint8Array(y*(32/c.pixelBitlength)),S=c.colors>1,_=0,C=0,q=0;_<y;)A=I[_++],b[C++]=A>>>0&255,S&&(b[C++]=A>>>16&255,A=I[_++],b[C++]=A>>>0&255),x[q++]=A>>>16&255;g=8}n(a)?(t=i(b,c.width*c.colors,c.colors,a),d=i(x,c.width,1,a)):(t=b,d=x,m=null)}if(3===c.colorType&&(p=this.color_spaces.INDEXED,f=c.palette,c.transparency.indexed)){for(var T=c.transparency.indexed,P=0,_=0,y=T.length;_<y;++_)P+=T[_];if((P/=255)===y-1&&-1!==T.indexOf(0))u=[T.indexOf(0)];else if(P!==y){for(var I=c.decodePixels(),x=new Uint8Array(I.length),_=0,y=I.length;_<y;_++)x[_]=T[I[_]];d=i(x,c.width,1)}}var E=v(a);return l=m===this.decode.FLATE_DECODE?"/Predictor "+E+" /Colors "+h+" /BitsPerComponent "+g+" /Columns "+c.width:"/Colors "+h+" /BitsPerComponent "+g+" /Columns "+c.width,(this.isArrayBuffer(t)||this.isArrayBufferView(t))&&(t=this.arrayBufferToBinaryString(t)),(d&&this.isArrayBuffer(d)||this.isArrayBufferView(d))&&(d=this.arrayBufferToBinaryString(d)),this.createImageInfo(t,c.width,c.height,p,g,m,r,o,l,u,f,d,E)}throw new Error("Unsupported PNG image data, try using JPEG instead.")}}(e.API),e.API.autoPrint=function(){var t;return this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.write("<< /S/Named /Type/Action /N/Print >>","endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.write("/OpenAction "+t+" 0 R")}),this},/** @preserve
 * jsPDF split_text_to_size plugin - MIT license.
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Diego Casorran, https://github.com/diegocr
 */
function(t){var e=t.getCharWidthsArray=function(t,e){e||(e={});var n,r,i,o=e.widths?e.widths:this.internal.getFont().metadata.Unicode.widths,a=o.fof?o.fof:1,s=e.kerning?e.kerning:this.internal.getFont().metadata.Unicode.kerning,c=s.fof?s.fof:1,l=0,u=o[0]||a,h=[];for(n=0,r=t.length;n<r;n++)i=t.charCodeAt(n),h.push((o[i]||u)/a+(s[i]&&s[i][l]||0)/c),l=i;return h},n=function(t){for(var e=t.length,n=0;e;)n+=t[--e];return n},r=t.getStringUnitWidth=function(t,r){return n(e.call(this,t,r))},i=function(t,e,n,r){for(var i=[],o=0,a=t.length,s=0;o!==a&&s+e[o]<n;)s+=e[o],o++;i.push(t.slice(0,o));var c=o;for(s=0;o!==a;)s+e[o]>r&&(i.push(t.slice(c,o)),s=0,c=o),s+=e[o],o++;return c!==o&&i.push(t.slice(c,o)),i},o=function(t,o,a){a||(a={});var s,c,l,u,h,f,d=[],p=[d],m=a.textIndent||0,g=0,w=0,y=t.split(" "),v=e(" ",a)[0];if(f=-1===a.lineIndent?y[0].length+2:a.lineIndent||0){var b=Array(f).join(" "),x=[];y.map(function(t){(t=t.split(/\s*\n/)).length>1?x=x.concat(t.map(function(t,e){return(e&&t.length?"\n":"")+t})):x.push(t[0])}),y=x,f=r(b,a)}for(l=0,u=y.length;l<u;l++){var k=0;if(s=y[l],f&&"\n"==s[0]&&(s=s.substr(1),k=1),c=e(s,a),w=n(c),m+g+w>o||k){if(w>o){for(h=i(s,c,o-(m+g),o),d.push(h.shift()),d=[h.pop()];h.length;)p.push([h.shift()]);w=n(c.slice(s.length-d[0].length))}else d=[s];p.push(d),m=w+f,g=v}else d.push(s),m+=g+w,g=v}if(f)_=function(t,e){return(e?b:"")+t.join(" ")};else var _=function(t){return t.join(" ")};return p.map(_)};t.splitTextToSize=function(t,e,n){n||(n={});var r,i=n.fontSize||this.internal.getFontSize(),a=function(t){var e={0:1},n={};if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var r=this.internal.getFont(t.fontName,t.fontStyle);return r.metadata.Unicode?{widths:r.metadata.Unicode.widths||e,kerning:r.metadata.Unicode.kerning||n}:{widths:e,kerning:n}}.call(this,n);r=Array.isArray(t)?t:t.split(/\r?\n/);var s=1*this.internal.scaleFactor*e/i;a.textIndent=n.textIndent?1*n.textIndent*this.internal.scaleFactor/i:0,a.lineIndent=n.lineIndent;var c,l,u=[];for(c=0,l=r.length;c<l;c++)u=u.concat(o(r[c],s,a));return u}}(e.API),/** @preserve 
jsPDF standard_fonts_metrics plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.
*/
function(t){var e=function(t){for(var e={},n=0;n<"klmnopqrstuvwxyz".length;n++)e["klmnopqrstuvwxyz"[n]]="0123456789abcdef"[n];var r,i,o,a,s={},c=1,l=s,u=[],h="",f="",d=t.length-1;for(n=1;n!=d;)a=t[n],n+=1,"'"==a?r?(o=r.join(""),r=void 0):r=[]:r?r.push(a):"{"==a?(u.push([l,o]),l={},o=void 0):"}"==a?((i=u.pop())[0][i[1]]=l,o=void 0,l=i[0]):"-"==a?c=-1:void 0===o?e.hasOwnProperty(a)?(h+=e[a],o=parseInt(h,16)*c,c=1,h=""):h+=a:e.hasOwnProperty(a)?(f+=e[a],l[o]=parseInt(f,16)*c,c=1,o=void 0,f=""):f+=a;return s},n={codePages:["WinAnsiEncoding"],WinAnsiEncoding:e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},r={Unicode:{Courier:n,"Courier-Bold":n,"Courier-BoldOblique":n,"Courier-Oblique":n,Helvetica:n,"Helvetica-Bold":n,"Helvetica-BoldOblique":n,"Helvetica-Oblique":n,"Times-Roman":n,"Times-Bold":n,"Times-BoldItalic":n,"Times-Italic":n}},i={Unicode:{"Courier-Oblique":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":e("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":e("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Helvetica:e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),"Courier-Bold":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":e("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":e("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};t.events.push(["addFont",function(t){var e,n,o;(e=i.Unicode[t.PostScriptName])&&((n=t.metadata.Unicode?t.metadata.Unicode:t.metadata.Unicode={}).widths=e.widths,n.kerning=e.kerning),(o=r.Unicode[t.PostScriptName])&&((n=t.metadata.Unicode?t.metadata.Unicode:t.metadata.Unicode={}).encoding=o,o.codePages&&o.codePages.length&&(t.encoding=o.codePages[0]))}])}(e.API),e.API.addSVG=function(t,e,n,r,i){function o(t,e){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(n)}if(void 0===e||void 0===n)throw new Error("addSVG needs values for 'x' and 'y'");var a=function(t,e){var n=(e.contentWindow||e.contentDocument).document;return n.write(t),n.close(),n.getElementsByTagName("svg")[0]}(t,function(t){var e=t.createElement("iframe");return o(".jsPDF_sillysvg_iframe {display:none;position:absolute;}",t),e.name="childframe",e.setAttribute("width",0),e.setAttribute("height",0),e.setAttribute("frameborder","0"),e.setAttribute("scrolling","no"),e.setAttribute("seamless","seamless"),e.setAttribute("class","jsPDF_sillysvg_iframe"),t.body.appendChild(e),e}(document)),s=[1,1],c=parseFloat(a.getAttribute("width")),l=parseFloat(a.getAttribute("height"));c&&l&&(r&&i?s=[r/c,i/l]:r?s=[r/c,r/c]:i&&(s=[i/l,i/l]));var u,h,f,d,p=a.childNodes;for(u=0,h=p.length;u<h;u++)(f=p[u]).tagName&&"PATH"===f.tagName.toUpperCase()&&((d=function(t){for(var e=parseFloat(t[1]),n=parseFloat(t[2]),r=[],i=3,o=t.length;i<o;)"c"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2]),parseFloat(t[i+3]),parseFloat(t[i+4]),parseFloat(t[i+5]),parseFloat(t[i+6])]),i+=7):"l"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2])]),i+=3):i+=1;return[e,n,r]}(f.getAttribute("d").split(" ")))[0]=d[0]*s[0]+e,d[1]=d[1]*s[1]+n,this.lines.call(this,d[2],d[0],d[1],s));return this},e.API.putTotalPages=function(t){for(var e=new RegExp(t,"g"),n=1;n<=this.internal.getNumberOfPages();n++)for(var r=0;r<this.internal.pages[n].length;r++)this.internal.pages[n][r]=this.internal.pages[n][r].replace(e,this.internal.getNumberOfPages());return this},/** ==================================================================== 
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 * 
 * 
 * ====================================================================
 */
function(t){var n="",r="",i="";e.API.addMetadata=function(t,e){return r=e||"http://jspdf.default.namespaceuri/",n=t,this.internal.events.subscribe("postPutResources",function(){if(n){var t='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+r+'"><jspdf:metadata>',e=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),o=unescape(encodeURIComponent(t)),a=unescape(encodeURIComponent(n)),s=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),c=unescape(encodeURIComponent("</x:xmpmeta>")),l=o.length+a.length+s.length+e.length+c.length;i=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+l+" >>"),this.internal.write("stream"),this.internal.write(e+o+a+s+c),this.internal.write("endstream"),this.internal.write("endobj")}else i=""}),this.internal.events.subscribe("putCatalog",function(){i&&this.internal.write("/Metadata "+i+" 0 R")}),this}}(),function(t){if(t.URL=t.URL||t.webkitURL,t.Blob&&t.URL)try{return void new Blob}catch(t){}var e=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var e=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},r=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},i=n.prototype,o=r.prototype,a=t.FileReaderSync,s=function(t){this.code=this[this.name=t]},c="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),l=c.length,u=t.URL||t.webkitURL||t,h=u.createObjectURL,f=u.revokeObjectURL,d=u,p=t.btoa,m=t.atob,g=t.ArrayBuffer,w=t.Uint8Array,y=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(r.fake=o.fake=!0;l--;)s.prototype[c[l]]=l+1;return u.createObjectURL||(d=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(y),n.origin=e&&e[1])),n}),d.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof r?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):p?e+";base64,"+p(t.data):e+","+encodeURIComponent(t.data)):h?h.call(u,t):void 0},d.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&f&&f.call(u,t)},i.append=function(t){var n=this.data;if(w&&(t instanceof g||t instanceof w)){for(var i="",o=new w(t),c=0,l=o.length;c<l;c++)i+=String.fromCharCode(o[c]);n.push(i)}else if("Blob"===e(t)||"File"===e(t)){if(!a)throw new s("NOT_READABLE_ERR");var u=new a;n.push(u.readAsBinaryString(t))}else t instanceof r?"base64"===t.encoding&&m?n.push(m(t.data)):"URI"===t.encoding?n.push(decodeURIComponent(t.data)):"raw"===t.encoding&&n.push(t.data):("string"!=typeof t&&(t+=""),n.push(unescape(encodeURIComponent(t))))},i.getBlob=function(t){return arguments.length||(t=null),new r(this.data.join(""),t,"raw")},i.toString=function(){return"[object BlobBuilder]"},o.slice=function(t,e,n){var i=arguments.length;return i<3&&(n=null),new r(this.data.slice(t,i>1?e:this.data.length),n,this.encoding)},o.toString=function(){return"[object Blob]"},o.close=function(){this.size=0,delete this.data},n}(t);t.Blob=function(t,n){var r=n?n.type||"":"",i=new e;if(t)for(var o=0,a=t.length;o<a;o++)Uint8Array&&t[o]instanceof Uint8Array?i.append(t[o].buffer):i.append(t[o]);var s=i.getBlob(r);return!s.slice&&s.webkitSlice&&(s.slice=s.webkitSlice),s};var n=Object.getPrototypeOf||function(t){return t.__proto__};t.Blob.prototype=n(new t.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content||void 0);var r=r||function(t){if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=function(){return t.URL||t.webkitURL||t},n=t.document.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in n,i=function(t){var e=new MouseEvent("click");t.dispatchEvent(e)},o=/constructor/i.test(t.HTMLElement)||t.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},c=function(t){setTimeout(function(){"string"==typeof t?e().revokeObjectURL(t):t.remove()},4e4)},l=function(t,e,n){for(var r=(e=[].concat(e)).length;r--;){var i=t["on"+e[r]];if("function"==typeof i)try{i.call(t,n||t)}catch(t){s(t)}}},u=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},h=function(s,h,f){f||(s=u(s));var d,p=this,m="application/octet-stream"===s.type,g=function(){l(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,r)return d=e().createObjectURL(s),void setTimeout(function(){n.href=d,n.download=h,i(n),g(),c(d),p.readyState=p.DONE});!function(){if((a||m&&o)&&t.FileReader){var n=new FileReader;return n.onloadend=function(){var e=a?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=void 0,p.readyState=p.DONE,g()},n.readAsDataURL(s),void(p.readyState=p.INIT)}d||(d=e().createObjectURL(s)),m?t.location.href=d:t.open(d,"_blank")||(t.location.href=d),p.readyState=p.DONE,g(),c(d)}()},f=h.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=u(t)),navigator.msSaveOrOpenBlob(t,e)}:(f.abort=function(){},f.readyState=f.INIT=0,f.WRITING=1,f.DONE=2,f.error=f.onwritestart=f.onprogress=f.onwrite=f.onabort=f.onerror=f.onwriteend=null,function(t,e,n){return new h(t,e||t.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=r:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define("FileSaver.js",function(){return r}),function(t,e){"object"==typeof module?module.exports=e():"function"==typeof define?define(e):t.adler32cs=e()}(e,function(){var t="function"==typeof ArrayBuffer&&"function"==typeof Uint8Array,e=null,n=function(){if(!t)return function(){return!1};try{var n={};"function"==typeof n.Buffer&&(e=n.Buffer)}catch(t){}return function(t){return t instanceof ArrayBuffer||null!==e&&t instanceof e}}(),r=null!==e?function(t){return new e(t,"utf8").toString("binary")}:function(t){return unescape(encodeURIComponent(t))},i=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;i<o;i++)r=(r+(n=(n+(255&e.charCodeAt(i)))%65521))%65521;return(r<<16|n)>>>0},o=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;i<o;i++)r=(r+(n=(n+e[i])%65521))%65521;return(r<<16|n)>>>0},a={},s=a.Adler32=function(){var e=function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(!isFinite(t=null==t?1:+t))throw new Error("First arguments needs to be a finite number.");this.checksum=t>>>0},a=e.prototype={};return a.constructor=e,e.from=function(t){return t.prototype=a,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");this.checksum=i(1,t.toString())}),e.fromUtf8=function(t){return t.prototype=a,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");var n=r(t.toString());this.checksum=i(1,n)}),t&&(e.fromBuffer=function(t){return t.prototype=a,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.");if(!n(t))throw new Error("First argument needs to be ArrayBuffer.");var r=new Uint8Array(t);return this.checksum=o(1,r)})),a.update=function(t){if(null==t)throw new Error("First argument needs to be a string.");return t=t.toString(),this.checksum=i(this.checksum,t)},a.updateUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=r(t.toString());return this.checksum=i(this.checksum,e)},t&&(a.updateBuffer=function(t){if(!n(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=o(this.checksum,e)}),a.clone=function(){return new s(this.checksum)},e}();return a.from=function(t){if(null==t)throw new Error("First argument needs to be a string.");return i(1,t.toString())},a.fromUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=r(t.toString());return i(1,e)},t&&(a.fromBuffer=function(t){if(!n(t))throw new Error("First argument need to be ArrayBuffer.");var e=new Uint8Array(t);return o(1,e)}),a});/**
 * CssColors
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
var i={};i._colorsTable={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},i.colorNameToHex=function(t){return t=t.toLowerCase(),void 0!==this._colorsTable[t]&&this._colorsTable[t]};/*
 Deflate.js - https://github.com/gildas-lormeau/zip.js
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var o=function(t){function e(){function t(t){var e,n,i,o,a,c,l=r.dyn_tree,u=r.stat_desc.static_tree,h=r.stat_desc.extra_bits,d=r.stat_desc.extra_base,p=r.stat_desc.max_length,m=0;for(o=0;o<=s;o++)t.bl_count[o]=0;for(l[2*t.heap[t.heap_max]+1]=0,e=t.heap_max+1;e<f;e++)(o=l[2*l[2*(n=t.heap[e])+1]+1]+1)>p&&(o=p,m++),l[2*n+1]=o,n>r.max_code||(t.bl_count[o]++,a=0,n>=d&&(a=h[n-d]),c=l[2*n],t.opt_len+=c*(o+a),u&&(t.static_len+=c*(u[2*n+1]+a)));if(0!==m){do{for(o=p-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[p]--,m-=2}while(m>0);for(o=p;0!==o;o--)for(n=t.bl_count[o];0!==n;)(i=t.heap[--e])>r.max_code||(l[2*i+1]!=o&&(t.opt_len+=(o-l[2*i+1])*l[2*i],l[2*i+1]=o),n--)}}function e(t,e){var n=0;do{n|=1&t,t>>>=1,n<<=1}while(--e>0);return n>>>1}function n(t,n,r){var i,o,a,c=[],l=0;for(i=1;i<=s;i++)c[i]=l=l+r[i-1]<<1;for(o=0;o<=n;o++)0!==(a=t[2*o+1])&&(t[2*o]=e(c[a]++,a))}var r=this;r.build_tree=function(e){var i,o,a,s=r.dyn_tree,c=r.stat_desc.static_tree,l=r.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=f,i=0;i<l;i++)0!==s[2*i]?(e.heap[++e.heap_len]=u=i,e.depth[i]=0):s[2*i+1]=0;for(;e.heap_len<2;)s[2*(a=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[a]=0,e.opt_len--,c&&(e.static_len-=c[2*a+1]);for(r.max_code=u,i=Math.floor(e.heap_len/2);i>=1;i--)e.pqdownheap(s,i);a=l;do{i=e.heap[1],e.heap[1]=e.heap[e.heap_len--],e.pqdownheap(s,1),o=e.heap[1],e.heap[--e.heap_max]=i,e.heap[--e.heap_max]=o,s[2*a]=s[2*i]+s[2*o],e.depth[a]=Math.max(e.depth[i],e.depth[o])+1,s[2*i+1]=s[2*o+1]=a,e.heap[1]=a++,e.pqdownheap(s,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],t(e),n(s,r.max_code,e.bl_count)}}function n(t,e,n,r,i){var o=this;o.static_tree=t,o.extra_bits=e,o.extra_base=n,o.elems=r,o.max_length=i}function r(t,e,n,r,i){var o=this;o.good_length=t,o.max_lazy=e,o.nice_length=n,o.max_chain=r,o.func=i}function i(t,e,n,r){var i=t[2*e],o=t[2*n];return i<o||i==o&&r[e]<=r[n]}function o(){function t(){var t;for(Pt=2*At,Et[Ft-1]=0,t=0;t<Ft-1;t++)Et[t]=0;Vt=z[Gt].max_lazy,Jt=z[Gt].good_length,Qt=z[Gt].nice_length,Xt=z[Gt].max_chain,Mt=0,jt=0,Ht=0,zt=Wt=$-1,Lt=0,Ot=0}function r(){var t;for(t=0;t<h;t++)Kt[2*t]=0;for(t=0;t<c;t++)$t[2*t]=0;for(t=0;t<l;t++)Zt[2*t]=0;Kt[2*d]=1,te.opt_len=te.static_len=0,ae=ce=0}function o(){ee.dyn_tree=Kt,ee.stat_desc=n.static_l_desc,ne.dyn_tree=$t,ne.stat_desc=n.static_d_desc,re.dyn_tree=Zt,re.stat_desc=n.static_bl_desc,ue=0,he=0,le=8,r()}function a(t,e){var n,r,i=-1,o=t[1],a=0,s=7,c=4;for(0===o&&(s=138,c=3),t[2*(e+1)+1]=65535,n=0;n<=e;n++)r=o,o=t[2*(n+1)+1],++a<s&&r==o||(a<c?Zt[2*r]+=a:0!==r?(r!=i&&Zt[2*r]++,Zt[2*p]++):a<=10?Zt[2*m]++:Zt[2*g]++,a=0,i=r,0===o?(s=138,c=3):r==o?(s=6,c=3):(s=7,c=4))}function s(){var t;for(a(Kt,ee.max_code),a($t,ne.max_code),re.build_tree(te),t=l-1;t>=3&&0===Zt[2*e.bl_order[t]+1];t--);return te.opt_len+=3*(t+1)+5+5+4,t}function f(t){te.pending_buf[te.pending++]=t}function O(t){f(255&t),f(t>>>8&255)}function et(t){f(t>>8&255),f(255&t)}function nt(t,e){var n,r=e;he>w-r?(O(ue|=(n=t)<<he&65535),ue=n>>>w-he,he+=r-w):(ue|=t<<he&65535,he+=r)}function rt(t,e){var n=2*t;nt(65535&e[n],65535&e[n+1])}function it(t,e){var n,r,i=-1,o=t[1],a=0,s=7,c=4;for(0===o&&(s=138,c=3),n=0;n<=e;n++)if(r=o,o=t[2*(n+1)+1],!(++a<s&&r==o)){if(a<c)do{rt(r,Zt)}while(0!=--a);else 0!==r?(r!=i&&(rt(r,Zt),a--),rt(p,Zt),nt(a-3,2)):a<=10?(rt(m,Zt),nt(a-3,3)):(rt(g,Zt),nt(a-11,7));a=0,i=r,0===o?(s=138,c=3):r==o?(s=6,c=3):(s=7,c=4)}}function ot(t,n,r){var i;for(nt(t-257,5),nt(n-1,5),nt(r-4,4),i=0;i<r;i++)nt(Zt[2*e.bl_order[i]+1],3);it(Kt,t-1),it($t,n-1)}function at(){16==he?(O(ue),ue=0,he=0):he>=8&&(f(255&ue),ue>>>=8,he-=8)}function st(){nt(Q<<1,3),rt(d,n.static_ltree),at(),1+le+10-he<9&&(nt(Q<<1,3),rt(d,n.static_ltree),at()),le=7}function ct(t,n){var r,i,o;if(te.pending_buf[se+2*ae]=t>>>8&255,te.pending_buf[se+2*ae+1]=255&t,te.pending_buf[ie+ae]=255&n,ae++,0===t?Kt[2*n]++:(ce++,t--,Kt[2*(e._length_code[n]+u+1)]++,$t[2*e.d_code(t)]++),0==(8191&ae)&&Gt>2){for(r=8*ae,i=Mt-jt,o=0;o<c;o++)r+=$t[2*o]*(5+e.extra_dbits[o]);if(r>>>=3,ce<Math.floor(ae/2)&&r<Math.floor(i/2))return!0}return ae==oe-1}function lt(t,n){var r,i,o,a,s=0;if(0!==ae)do{r=te.pending_buf[se+2*s]<<8&65280|255&te.pending_buf[se+2*s+1],i=255&te.pending_buf[ie+s],s++,0===r?rt(i,t):(rt((o=e._length_code[i])+u+1,t),0!==(a=e.extra_lbits[o])&&nt(i-=e.base_length[o],a),r--,rt(o=e.d_code(r),n),0!==(a=e.extra_dbits[o])&&nt(r-=e.base_dist[o],a))}while(s<ae);rt(d,t),le=t[2*d+1]}function ut(){he>8?O(ue):he>0&&f(255&ue),ue=0,he=0}function ht(t,e,n){ut(),le=8,n&&(O(e),O(~e)),te.pending_buf.set(Tt.subarray(t,t+e),te.pending),te.pending+=e}function ft(t,e,n){nt((J<<1)+(n?1:0),3),ht(t,e,!0)}function dt(t,e,i){var o,a,c=0;Gt>0?(ee.build_tree(te),ne.build_tree(te),c=s(),o=te.opt_len+3+7>>>3,(a=te.static_len+3+7>>>3)<=o&&(o=a)):o=a=e+5,e+4<=o&&-1!=t?ft(t,e,i):a==o?(nt((Q<<1)+(i?1:0),3),lt(n.static_ltree,n.static_dtree)):(nt((K<<1)+(i?1:0),3),ot(ee.max_code+1,ne.max_code+1,c+1),lt(Kt,$t)),r(),i&&ut()}function pt(t){dt(jt>=0?jt:-1,Mt-jt,t),jt=Mt,xt.flush_pending()}function mt(){var t,e,n,r;do{if(0===(r=Pt-Ht-Mt)&&0===Mt&&0===Ht)r=At;else if(-1==r)r--;else if(Mt>=At+At-tt){Tt.set(Tt.subarray(At,At+At),0),Ut-=At,Mt-=At,jt-=At,n=t=Ft;do{e=65535&Et[--n],Et[n]=e>=At?e-At:0}while(0!=--t);n=t=At;do{e=65535&It[--n],It[n]=e>=At?e-At:0}while(0!=--t);r+=At}if(0===xt.avail_in)return;t=xt.read_buf(Tt,Mt+Ht,r),(Ht+=t)>=$&&(Ot=255&Tt[Mt],Ot=(Ot<<Dt^255&Tt[Mt+1])&Rt)}while(Ht<tt&&0!==xt.avail_in)}function gt(t){var e,n=65535;for(n>_t-5&&(n=_t-5);;){if(Ht<=1){if(mt(),0===Ht&&t==k)return L;if(0===Ht)break}if(Mt+=Ht,Ht=0,e=jt+n,(0===Mt||Mt>=e)&&(Ht=Mt-e,Mt=e,pt(!1),0===xt.avail_out))return L;if(Mt-jt>=At-tt&&(pt(!1),0===xt.avail_out))return L}return pt(t==A),0===xt.avail_out?t==A?U:L:t==A?H:M}function wt(t){var e,n,r=Xt,i=Mt,o=Wt,a=Mt>At-tt?Mt-(At-tt):0,s=Qt,c=qt,l=Mt+Z,u=Tt[i+o-1],h=Tt[i+o];Wt>=Jt&&(r>>=2),s>Ht&&(s=Ht);do{if(e=t,Tt[e+o]==h&&Tt[e+o-1]==u&&Tt[e]==Tt[i]&&Tt[++e]==Tt[i+1]){i+=2,e++;do{}while(Tt[++i]==Tt[++e]&&Tt[++i]==Tt[++e]&&Tt[++i]==Tt[++e]&&Tt[++i]==Tt[++e]&&Tt[++i]==Tt[++e]&&Tt[++i]==Tt[++e]&&Tt[++i]==Tt[++e]&&Tt[++i]==Tt[++e]&&i<l);if(n=Z-(l-i),i=l-Z,n>o){if(Ut=t,o=n,n>=s)break;u=Tt[i+o-1],h=Tt[i+o]}}}while((t=65535&It[t&c])>a&&0!=--r);return o<=Ht?o:Ht}function yt(t){for(var e,n=0;;){if(Ht<tt){if(mt(),Ht<tt&&t==k)return L;if(0===Ht)break}if(Ht>=$&&(Ot=(Ot<<Dt^255&Tt[Mt+($-1)])&Rt,n=65535&Et[Ot],It[Mt&qt]=Et[Ot],Et[Ot]=Mt),0!==n&&(Mt-n&65535)<=At-tt&&Yt!=b&&(zt=wt(n)),zt>=$)if(e=ct(Mt-Ut,zt-$),Ht-=zt,zt<=Vt&&Ht>=$){zt--;do{Ot=(Ot<<Dt^255&Tt[++Mt+($-1)])&Rt,n=65535&Et[Ot],It[Mt&qt]=Et[Ot],Et[Ot]=Mt}while(0!=--zt);Mt++}else Mt+=zt,zt=0,Ot=255&Tt[Mt],Ot=(Ot<<Dt^255&Tt[Mt+1])&Rt;else e=ct(0,255&Tt[Mt]),Ht--,Mt++;if(e&&(pt(!1),0===xt.avail_out))return L}return pt(t==A),0===xt.avail_out?t==A?U:L:t==A?H:M}function vt(t){for(var e,n,r=0;;){if(Ht<tt){if(mt(),Ht<tt&&t==k)return L;if(0===Ht)break}if(Ht>=$&&(Ot=(Ot<<Dt^255&Tt[Mt+($-1)])&Rt,r=65535&Et[Ot],It[Mt&qt]=Et[Ot],Et[Ot]=Mt),Wt=zt,Nt=Ut,zt=$-1,0!==r&&Wt<Vt&&(Mt-r&65535)<=At-tt&&(Yt!=b&&(zt=wt(r)),zt<=5&&(Yt==v||zt==$&&Mt-Ut>4096)&&(zt=$-1)),Wt>=$&&zt<=Wt){n=Mt+Ht-$,e=ct(Mt-1-Nt,Wt-$),Ht-=Wt-1,Wt-=2;do{++Mt<=n&&(Ot=(Ot<<Dt^255&Tt[Mt+($-1)])&Rt,r=65535&Et[Ot],It[Mt&qt]=Et[Ot],Et[Ot]=Mt)}while(0!=--Wt);if(Lt=0,zt=$-1,Mt++,e&&(pt(!1),0===xt.avail_out))return L}else if(0!==Lt){if((e=ct(0,255&Tt[Mt-1]))&&pt(!1),Mt++,Ht--,0===xt.avail_out)return L}else Lt=1,Mt++,Ht--}return 0!==Lt&&(e=ct(0,255&Tt[Mt-1]),Lt=0),pt(t==A),0===xt.avail_out?t==A?U:L:t==A?H:M}function bt(e){return e.total_in=e.total_out=0,e.msg=null,te.pending=0,te.pending_out=0,kt=V,Ct=k,o(),t(),S}var xt,kt,_t,Ct,At,St,qt,Tt,Pt,It,Et,Ot,Ft,Bt,Rt,Dt,jt,zt,Nt,Lt,Mt,Ut,Ht,Wt,Xt,Vt,Gt,Yt,Jt,Qt,Kt,$t,Zt,te=this,ee=new e,ne=new e,re=new e;te.depth=[];var ie,oe,ae,se,ce,le,ue,he;te.bl_count=[],te.heap=[],Kt=[],$t=[],Zt=[],te.pqdownheap=function(t,e){for(var n=te.heap,r=n[e],o=e<<1;o<=te.heap_len&&(o<te.heap_len&&i(t,n[o+1],n[o],te.depth)&&o++,!i(t,r,n[o],te.depth));)n[e]=n[o],e=o,o<<=1;n[e]=r},te.deflateInit=function(t,e,n,r,i,o){return r||(r=Y),i||(i=B),o||(o=x),t.msg=null,e==y&&(e=6),i<1||i>F||r!=Y||n<9||n>15||e<0||e>9||o<0||o>b?P:(t.dstate=te,St=n,At=1<<St,qt=At-1,Bt=i+7,Ft=1<<Bt,Rt=Ft-1,Dt=Math.floor((Bt+$-1)/$),Tt=new Uint8Array(2*At),It=[],Et=[],oe=1<<i+6,te.pending_buf=new Uint8Array(4*oe),_t=4*oe,se=Math.floor(oe/2),ie=3*oe,Gt=e,Yt=o,bt(t))},te.deflateEnd=function(){return kt!=X&&kt!=V&&kt!=G?P:(te.pending_buf=null,Et=null,It=null,Tt=null,te.dstate=null,kt==V?I:S)},te.deflateParams=function(t,e,n){var r=S;return e==y&&(e=6),e<0||e>9||n<0||n>b?P:(z[Gt].func!=z[e].func&&0!==t.total_in&&(r=t.deflate(_)),Gt!=e&&(Vt=z[Gt=e].max_lazy,Jt=z[Gt].good_length,Qt=z[Gt].nice_length,Xt=z[Gt].max_chain),Yt=n,r)},te.deflateSetDictionary=function(t,e,n){var r,i=n,o=0;if(!e||kt!=X)return P;if(i<$)return S;for(i>At-tt&&(o=n-(i=At-tt)),Tt.set(e.subarray(o,o+i),0),Mt=i,jt=i,Ot=255&Tt[0],Ot=(Ot<<Dt^255&Tt[1])&Rt,r=0;r<=i-$;r++)Ot=(Ot<<Dt^255&Tt[r+($-1)])&Rt,It[r&qt]=Et[Ot],Et[Ot]=r;return S},te.deflate=function(t,e){var n,r,i,o,a;if(e>A||e<0)return P;if(!t.next_out||!t.next_in&&0!==t.avail_in||kt==G&&e!=A)return t.msg=N[T-P],P;if(0===t.avail_out)return t.msg=N[T-E],E;if(xt=t,o=Ct,Ct=e,kt==X&&(r=Y+(St-8<<4)<<8,(i=(Gt-1&255)>>1)>3&&(i=3),r|=i<<6,0!==Mt&&(r|=W),kt=V,et(r+=31-r%31)),0!==te.pending){if(xt.flush_pending(),0===xt.avail_out)return Ct=-1,S}else if(0===xt.avail_in&&e<=o&&e!=A)return xt.msg=N[T-E],E;if(kt==G&&0!==xt.avail_in)return t.msg=N[T-E],E;if(0!==xt.avail_in||0!==Ht||e!=k&&kt!=G){switch(a=-1,z[Gt].func){case R:a=gt(e);break;case D:a=yt(e);break;case j:a=vt(e)}if(a!=U&&a!=H||(kt=G),a==L||a==U)return 0===xt.avail_out&&(Ct=-1),S;if(a==M){if(e==_)st();else if(ft(0,0,!1),e==C)for(n=0;n<Ft;n++)Et[n]=0;if(xt.flush_pending(),0===xt.avail_out)return Ct=-1,S}}return e!=A?S:q}}function a(){var t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}var s=15,c=30,l=19,u=256,h=u+1+29,f=2*h+1,d=256,p=16,m=17,g=18,w=16,y=-1,v=1,b=2,x=0,k=0,_=1,C=3,A=4,S=0,q=1,T=2,P=-2,I=-3,E=-5,O=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];e._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],e.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],e.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],e.d_code=function(t){return t<256?O[t]:O[256+(t>>>7)]},e.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],e.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],e.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],e.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],n.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],n.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],n.static_l_desc=new n(n.static_ltree,e.extra_lbits,u+1,h,s),n.static_d_desc=new n(n.static_dtree,e.extra_dbits,0,c,s),n.static_bl_desc=new n(null,e.extra_blbits,0,l,7);var F=9,B=8,R=0,D=1,j=2,z=[new r(0,0,0,0,R),new r(4,4,8,4,D),new r(4,5,16,8,D),new r(4,6,32,32,D),new r(4,4,16,16,j),new r(8,16,32,32,j),new r(8,16,128,128,j),new r(8,32,128,256,j),new r(32,128,258,1024,j),new r(32,258,258,4096,j)],N=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],L=0,M=1,U=2,H=3,W=32,X=42,V=113,G=666,Y=8,J=0,Q=1,K=2,$=3,Z=258,tt=Z+$+1;return a.prototype={deflateInit:function(t,e){var n=this;return n.dstate=new o,e||(e=s),n.dstate.deflateInit(n,t,e)},deflate:function(t){var e=this;return e.dstate?e.dstate.deflate(e,t):P},deflateEnd:function(){var t=this;if(!t.dstate)return P;var e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams:function(t,e){var n=this;return n.dstate?n.dstate.deflateParams(n,t,e):P},deflateSetDictionary:function(t,e){var n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):P},read_buf:function(t,e,n){var r=this,i=r.avail_in;return i>n&&(i=n),0===i?0:(r.avail_in-=i,t.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),e),r.next_in_index+=i,r.total_in+=i,i)},flush_pending:function(){var t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}},function(t){var e=this,n=new a,r=k,i=new Uint8Array(512);void 0===t&&(t=y),n.deflateInit(t),n.next_out=i,e.append=function(t,e){var o,a=[],s=0,c=0,l=0;if(t.length){n.next_in_index=0,n.next_in=t,n.avail_in=t.length;do{if(n.next_out_index=0,n.avail_out=512,n.deflate(r)!=S)throw"deflating: "+n.msg;n.next_out_index&&(512==n.next_out_index?a.push(new Uint8Array(i)):a.push(new Uint8Array(i.subarray(0,n.next_out_index)))),l+=n.next_out_index,e&&n.next_in_index>0&&n.next_in_index!=s&&(e(n.next_in_index),s=n.next_in_index)}while(n.avail_in>0||0===n.avail_out);return o=new Uint8Array(l),a.forEach(function(t){o.set(t,c),c+=t.length}),o}},e.flush=function(){var t,e,r=[],o=0,a=0;do{if(n.next_out_index=0,n.avail_out=512,(t=n.deflate(A))!=q&&t!=S)throw"deflating: "+n.msg;512-n.avail_out>0&&r.push(new Uint8Array(i.subarray(0,n.next_out_index))),a+=n.next_out_index}while(n.avail_in>0||0===n.avail_out);return n.deflateEnd(),e=new Uint8Array(a),r.forEach(function(t){e.set(t,o),o+=t.length}),e}}}();/*
  html2canvas 0.5.0-beta3 <http://html2canvas.hertzen.com>
  Copyright (c) 2016 Niklas von Hertzen

  Released under  License
*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.html2canvas=t()}}(function(){return function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n||t)},u,u.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){(function(t){!function(r){function i(t){throw RangeError(E[t])}function o(t,e){for(var n=t.length;n--;)t[n]=e(t[n]);return t}function a(t,e){return o(t.split(I),e).join(".")}function s(t){for(var e,n,r=[],i=0,o=t.length;i<o;)(e=t.charCodeAt(i++))>=55296&&e<=56319&&i<o?56320==(64512&(n=t.charCodeAt(i++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--):r.push(e);return r}function c(t){return o(t,function(t){var e="";return t>65535&&(e+=B((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=B(t)}).join("")}function l(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:b}function u(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function h(t,e,n){var r=0;for(t=n?F(t/C):t>>1,t+=F(t/e);t>O*k>>1;r+=b)t=F(t/O);return F(r+(O+1)*t/(t+_))}function f(t){var e,n,r,o,a,s,u,f,d,p,m=[],g=t.length,w=0,y=S,_=A;for((n=t.lastIndexOf(q))<0&&(n=0),r=0;r<n;++r)t.charCodeAt(r)>=128&&i("not-basic"),m.push(t.charCodeAt(r));for(o=n>0?n+1:0;o<g;){for(a=w,s=1,u=b;o>=g&&i("invalid-input"),((f=l(t.charCodeAt(o++)))>=b||f>F((v-w)/s))&&i("overflow"),w+=f*s,d=u<=_?x:u>=_+k?k:u-_,!(f<d);u+=b)s>F(v/(p=b-d))&&i("overflow"),s*=p;_=h(w-a,e=m.length+1,0==a),F(w/e)>v-y&&i("overflow"),y+=F(w/e),w%=e,m.splice(w++,0,y)}return c(m)}function d(t){var e,n,r,o,a,c,l,f,d,p,m,g,w,y,_,C=[];for(g=(t=s(t)).length,e=S,n=0,a=A,c=0;c<g;++c)(m=t[c])<128&&C.push(B(m));for(r=o=C.length,o&&C.push(q);r<g;){for(l=v,c=0;c<g;++c)(m=t[c])>=e&&m<l&&(l=m);for(l-e>F((v-n)/(w=r+1))&&i("overflow"),n+=(l-e)*w,e=l,c=0;c<g;++c)if((m=t[c])<e&&++n>v&&i("overflow"),m==e){for(f=n,d=b;p=d<=a?x:d>=a+k?k:d-a,!(f<p);d+=b)_=f-p,y=b-p,C.push(B(u(p+_%y,0))),f=F(_/y);C.push(B(u(f,0))),a=h(n,w,r==o),n=0,++r}++n,++e}return C.join("")}var p="object"==typeof n&&n,m="object"==typeof e&&e&&e.exports==p&&e,g="object"==typeof t&&t;g.global!==g&&g.window!==g||(r=g);var w,y,v=2147483647,b=36,x=1,k=26,_=38,C=700,A=72,S=128,q="-",T=/^xn--/,P=/[^ -~]/,I=/\x2E|\u3002|\uFF0E|\uFF61/g,E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},O=b-x,F=Math.floor,B=String.fromCharCode;if(w={version:"1.2.4",ucs2:{decode:s,encode:c},decode:f,encode:d,toASCII:function(t){return a(t,function(t){return P.test(t)?"xn--"+d(t):t})},toUnicode:function(t){return a(t,function(t){return T.test(t)?f(t.slice(4).toLowerCase()):t})}},p&&!p.nodeType)if(m)m.exports=w;else for(y in w)w.hasOwnProperty(y)&&(p[y]=w[y]);else r.punycode=w}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,e,n){function r(t,e,n){!t.defaultView||e===t.defaultView.pageXOffset&&n===t.defaultView.pageYOffset||t.defaultView.scrollTo(e,n)}function i(t,e){try{e&&(e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(t.getContext("2d").getImageData(0,0,t.width,t.height),0,0))}catch(e){s("Unable to copy canvas content from",t,e)}}function o(t,e){for(var n=3===t.nodeType?document.createTextNode(t.nodeValue):t.cloneNode(!1),r=t.firstChild;r;)!0!==e&&1===r.nodeType&&"SCRIPT"===r.nodeName||n.appendChild(o(r,e)),r=r.nextSibling;return 1===t.nodeType&&(n._scrollTop=t.scrollTop,n._scrollLeft=t.scrollLeft,"CANVAS"===t.nodeName?i(t,n):"TEXTAREA"!==t.nodeName&&"SELECT"!==t.nodeName||(n.value=t.value)),n}function a(t){if(1===t.nodeType){t.scrollTop=t._scrollTop,t.scrollLeft=t._scrollLeft;for(var e=t.firstChild;e;)a(e),e=e.nextSibling}}var s=t("./log");e.exports=function(t,e,n,i,s,c,l){var u=o(t.documentElement,s.javascriptEnabled),h=e.createElement("iframe");return h.className="html2canvas-container",h.style.visibility="hidden",h.style.position="fixed",h.style.left="-10000px",h.style.top="0px",h.style.border="0",h.width=n,h.height=i,h.scrolling="no",e.body.appendChild(h),new Promise(function(e){var n=h.contentWindow.document;h.contentWindow.onload=h.onload=function(){var t=setInterval(function(){n.body.childNodes.length>0&&(a(n.documentElement),clearInterval(t),"view"===s.type&&(h.contentWindow.scrollTo(c,l),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||h.contentWindow.scrollY===l&&h.contentWindow.scrollX===c||(n.documentElement.style.top=-l+"px",n.documentElement.style.left=-c+"px",n.documentElement.style.position="absolute")),e(h))},50)},n.open(),n.write("<!DOCTYPE html><html></html>"),r(t,c,l),n.replaceChild(n.adoptNode(u),n.documentElement),n.close()})}},{"./log":13}],3:[function(t,e,n){function r(t){this.r=0,this.g=0,this.b=0,this.a=null;this.fromArray(t)||this.namedColor(t)||this.rgb(t)||this.rgba(t)||this.hex6(t)||this.hex3(t)}r.prototype.darken=function(t){var e=1-t;return new r([Math.round(this.r*e),Math.round(this.g*e),Math.round(this.b*e),this.a])},r.prototype.isTransparent=function(){return 0===this.a},r.prototype.isBlack=function(){return 0===this.r&&0===this.g&&0===this.b},r.prototype.fromArray=function(t){return Array.isArray(t)&&(this.r=Math.min(t[0],255),this.g=Math.min(t[1],255),this.b=Math.min(t[2],255),t.length>3&&(this.a=t[3])),Array.isArray(t)};var i=/^#([a-f0-9]{3})$/i;r.prototype.hex3=function(t){var e=null;return null!==(e=t.match(i))&&(this.r=parseInt(e[1][0]+e[1][0],16),this.g=parseInt(e[1][1]+e[1][1],16),this.b=parseInt(e[1][2]+e[1][2],16)),null!==e};var o=/^#([a-f0-9]{6})$/i;r.prototype.hex6=function(t){var e=null;return null!==(e=t.match(o))&&(this.r=parseInt(e[1].substring(0,2),16),this.g=parseInt(e[1].substring(2,4),16),this.b=parseInt(e[1].substring(4,6),16)),null!==e};var a=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;r.prototype.rgb=function(t){var e=null;return null!==(e=t.match(a))&&(this.r=Number(e[1]),this.g=Number(e[2]),this.b=Number(e[3])),null!==e};var s=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;r.prototype.rgba=function(t){var e=null;return null!==(e=t.match(s))&&(this.r=Number(e[1]),this.g=Number(e[2]),this.b=Number(e[3]),this.a=Number(e[4])),null!==e},r.prototype.toString=function(){return null!==this.a&&1!==this.a?"rgba("+[this.r,this.g,this.b,this.a].join(",")+")":"rgb("+[this.r,this.g,this.b].join(",")+")"},r.prototype.namedColor=function(t){t=t.toLowerCase();var e=c[t];if(e)this.r=e[0],this.g=e[1],this.b=e[2];else if("transparent"===t)return this.r=this.g=this.b=this.a=0,!0;return!!e},r.prototype.isColor=!0;var c={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};e.exports=r},{}],4:[function(t,e,n){function r(t,e){var n=k++;if((e=e||{}).logging&&(g.options.logging=!0,g.options.start=Date.now()),e.async=void 0===e.async||e.async,e.allowTaint=void 0!==e.allowTaint&&e.allowTaint,e.removeContainer=void 0===e.removeContainer||e.removeContainer,e.javascriptEnabled=void 0!==e.javascriptEnabled&&e.javascriptEnabled,e.imageTimeout=void 0===e.imageTimeout?1e4:e.imageTimeout,e.renderer="function"==typeof e.renderer?e.renderer:f,e.strict=!!e.strict,"string"==typeof t){if("string"!=typeof e.proxy)return Promise.reject("Proxy must be used when rendering url");var r=null!=e.width?e.width:window.innerWidth,a=null!=e.height?e.height:window.innerHeight;return v(u(t),e.proxy,document,r,a,e).then(function(t){return o(t.contentWindow.document.documentElement,t,e,r,a)})}var s=(void 0===t?[document.documentElement]:t.length?t:[t])[0];return s.setAttribute(x+n,n),i(s.ownerDocument,e,s.ownerDocument.defaultView.innerWidth,s.ownerDocument.defaultView.innerHeight,n).then(function(t){return"function"==typeof e.onrendered&&(g("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"),e.onrendered(t)),t})}function i(t,e,n,r,i){return y(t,t,n,r,e,t.defaultView.pageXOffset,t.defaultView.pageYOffset).then(function(a){g("Document cloned");var s=x+i,c="["+s+"='"+i+"']";t.querySelector(c).removeAttribute(s);var l=a.contentWindow,u=l.document.querySelector(c);return("function"==typeof e.onclone?Promise.resolve(e.onclone(l.document)):Promise.resolve(!0)).then(function(){return o(u,a,e,n,r)})})}function o(t,e,n,r,i){var o=e.contentWindow,u=new h(o.document),f=new d(n,u),m=b(t),w="view"===n.type?r:c(o.document),y="view"===n.type?i:l(o.document),v=new n.renderer(w,y,f,n,document);return new p(t,v,u,f,n).ready.then(function(){g("Finished rendering");var r;return r="view"===n.type?s(v.canvas,{width:v.canvas.width,height:v.canvas.height,top:0,left:0,x:0,y:0}):t===o.document.body||t===o.document.documentElement||null!=n.canvas?v.canvas:s(v.canvas,{width:null!=n.width?n.width:m.width,height:null!=n.height?n.height:m.height,top:m.top,left:m.left,x:0,y:0}),a(e,n),r})}function a(t,e){e.removeContainer&&(t.parentNode.removeChild(t),g("Cleaned up container"))}function s(t,e){var n=document.createElement("canvas"),r=Math.min(t.width-1,Math.max(0,e.left)),i=Math.min(t.width,Math.max(1,e.left+e.width)),o=Math.min(t.height-1,Math.max(0,e.top)),a=Math.min(t.height,Math.max(1,e.top+e.height));n.width=e.width,n.height=e.height;var s=i-r,c=a-o;return g("Cropping canvas at:","left:",e.left,"top:",e.top,"width:",s,"height:",c),g("Resulting crop with width",e.width,"and height",e.height,"with x",r,"and y",o),n.getContext("2d").drawImage(t,r,o,s,c,e.x,e.y,s,c),n}function c(t){return Math.max(Math.max(t.body.scrollWidth,t.documentElement.scrollWidth),Math.max(t.body.offsetWidth,t.documentElement.offsetWidth),Math.max(t.body.clientWidth,t.documentElement.clientWidth))}function l(t){return Math.max(Math.max(t.body.scrollHeight,t.documentElement.scrollHeight),Math.max(t.body.offsetHeight,t.documentElement.offsetHeight),Math.max(t.body.clientHeight,t.documentElement.clientHeight))}function u(t){var e=document.createElement("a");return e.href=t,e.href=e.href,e}var h=t("./support"),f=t("./renderers/canvas"),d=t("./imageloader"),p=t("./nodeparser"),m=t("./nodecontainer"),g=t("./log"),w=t("./utils"),y=t("./clone"),v=t("./proxy").loadUrlDocument,b=w.getBounds,x="data-html2canvas-node",k=0;r.CanvasRenderer=f,r.NodeContainer=m,r.log=g,r.utils=w;var _="undefined"==typeof document||"function"!=typeof Object.create||"function"!=typeof document.createElement("canvas").getContext?function(){return Promise.reject("No canvas support")}:r;e.exports=_},{"./clone":2,"./imageloader":11,"./log":13,"./nodecontainer":14,"./nodeparser":15,"./proxy":16,"./renderers/canvas":20,"./support":22,"./utils":26}],5:[function(t,e,n){function r(t){if(this.src=t,i("DummyImageContainer for",t),!this.promise||!this.image){i("Initiating DummyImageContainer"),r.prototype.image=new Image;var e=this.image;r.prototype.promise=new Promise(function(t,n){e.onload=t,e.onerror=n,e.src=o(),!0===e.complete&&t(e)})}}var i=t("./log"),o=t("./utils").smallImage;e.exports=r},{"./log":13,"./utils":26}],6:[function(t,e,n){var r=t("./utils").smallImage;e.exports=function(t,e){var n,i,o=document.createElement("div"),a=document.createElement("img"),s=document.createElement("span");o.style.visibility="hidden",o.style.fontFamily=t,o.style.fontSize=e,o.style.margin=0,o.style.padding=0,document.body.appendChild(o),a.src=r(),a.width=1,a.height=1,a.style.margin=0,a.style.padding=0,a.style.verticalAlign="baseline",s.style.fontFamily=t,s.style.fontSize=e,s.style.margin=0,s.style.padding=0,s.appendChild(document.createTextNode("Hidden Text")),o.appendChild(s),o.appendChild(a),n=a.offsetTop-s.offsetTop+1,o.removeChild(s),o.appendChild(document.createTextNode("Hidden Text")),o.style.lineHeight="normal",a.style.verticalAlign="super",i=a.offsetTop-o.offsetTop+1,document.body.removeChild(o),this.baseline=n,this.lineWidth=1,this.middle=i}},{"./utils":26}],7:[function(t,e,n){function r(){this.data={}}var i=t("./font");r.prototype.getMetrics=function(t,e){return void 0===this.data[t+"-"+e]&&(this.data[t+"-"+e]=new i(t,e)),this.data[t+"-"+e]},e.exports=r},{"./font":6}],8:[function(t,e,n){function r(e,n,r){this.image=null,this.src=e;var o=this,a=i(e);this.promise=(n?new Promise(function(t){"about:blank"===e.contentWindow.document.URL||null==e.contentWindow.document.documentElement?e.contentWindow.onload=e.onload=function(){t(e)}:t(e)}):this.proxyLoad(r.proxy,a,r)).then(function(e){return t("./core")(e.contentWindow.document.documentElement,{type:"view",width:e.width,height:e.height,proxy:r.proxy,javascriptEnabled:r.javascriptEnabled,removeContainer:r.removeContainer,allowTaint:r.allowTaint,imageTimeout:r.imageTimeout/2})}).then(function(t){return o.image=t})}var i=t("./utils").getBounds,o=t("./proxy").loadUrlDocument;r.prototype.proxyLoad=function(t,e,n){var r=this.src;return o(r.src,t,r.ownerDocument,e.width,e.height,n)},e.exports=r},{"./core":4,"./proxy":16,"./utils":26}],9:[function(t,e,n){function r(t){this.src=t.value,this.colorStops=[],this.type=null,this.x0=.5,this.y0=.5,this.x1=.5,this.y1=.5,this.promise=Promise.resolve(!0)}r.TYPES={LINEAR:1,RADIAL:2},r.REGEXP_COLORSTOP=/^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i,e.exports=r},{}],10:[function(t,e,n){e.exports=function(t,e){this.src=t,this.image=new Image;var n=this;this.tainted=null,this.promise=new Promise(function(r,i){n.image.onload=r,n.image.onerror=i,e&&(n.image.crossOrigin="anonymous"),n.image.src=t,!0===n.image.complete&&r(n.image)})}},{}],11:[function(t,e,n){function r(t,e){this.link=null,this.options=t,this.support=e,this.origin=this.getOrigin(window.location.href)}var i=t("./log"),o=t("./imagecontainer"),a=t("./dummyimagecontainer"),s=t("./proxyimagecontainer"),c=t("./framecontainer"),l=t("./svgcontainer"),u=t("./svgnodecontainer"),h=t("./lineargradientcontainer"),f=t("./webkitgradientcontainer"),d=t("./utils").bind;r.prototype.findImages=function(t){var e=[];return t.reduce(function(t,e){switch(e.node.nodeName){case"IMG":return t.concat([{args:[e.node.src],method:"url"}]);case"svg":case"IFRAME":return t.concat([{args:[e.node],method:e.node.nodeName}])}return t},[]).forEach(this.addImage(e,this.loadImage),this),e},r.prototype.findBackgroundImage=function(t,e){return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t,this.loadImage),this),t},r.prototype.addImage=function(t,e){return function(n){n.args.forEach(function(r){this.imageExists(t,r)||(t.splice(0,0,e.call(this,n)),i("Added image #"+t.length,"string"==typeof r?r.substring(0,100):r))},this)}},r.prototype.hasImageBackground=function(t){return"none"!==t.method},r.prototype.loadImage=function(t){if("url"===t.method){var e=t.args[0];return!this.isSVG(e)||this.support.svg||this.options.allowTaint?e.match(/data:image\/.*;base64,/i)?new o(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi,""),!1):this.isSameOrigin(e)||!0===this.options.allowTaint||this.isSVG(e)?new o(e,!1):this.support.cors&&!this.options.allowTaint&&this.options.useCORS?new o(e,!0):this.options.proxy?new s(e,this.options.proxy):new a(e):new l(e)}return"linear-gradient"===t.method?new h(t):"gradient"===t.method?new f(t):"svg"===t.method?new u(t.args[0],this.support.svg):"IFRAME"===t.method?new c(t.args[0],this.isSameOrigin(t.args[0].src),this.options):new a(t)},r.prototype.isSVG=function(t){return"svg"===t.substring(t.length-3).toLowerCase()||l.prototype.isInline(t)},r.prototype.imageExists=function(t,e){return t.some(function(t){return t.src===e})},r.prototype.isSameOrigin=function(t){return this.getOrigin(t)===this.origin},r.prototype.getOrigin=function(t){var e=this.link||(this.link=document.createElement("a"));return e.href=t,e.href=e.href,e.protocol+e.hostname+e.port},r.prototype.getPromise=function(t){return this.timeout(t,this.options.imageTimeout).catch(function(){return new a(t.src).promise.then(function(e){t.image=e})})},r.prototype.get=function(t){var e=null;return this.images.some(function(n){return(e=n).src===t})?e:null},r.prototype.fetch=function(t){return this.images=t.reduce(d(this.findBackgroundImage,this),this.findImages(t)),this.images.forEach(function(t,e){t.promise.then(function(){i("Succesfully loaded image #"+(e+1),t)},function(n){i("Failed loading image #"+(e+1),t,n)})}),this.ready=Promise.all(this.images.map(this.getPromise,this)),i("Finished searching images"),this},r.prototype.timeout=function(t,e){var n,r=Promise.race([t.promise,new Promise(function(r,o){n=setTimeout(function(){i("Timed out loading image",t),o(t)},e)})]).then(function(t){return clearTimeout(n),t});return r.catch(function(){clearTimeout(n)}),r},e.exports=r},{"./dummyimagecontainer":5,"./framecontainer":8,"./imagecontainer":10,"./lineargradientcontainer":12,"./log":13,"./proxyimagecontainer":17,"./svgcontainer":23,"./svgnodecontainer":24,"./utils":26,"./webkitgradientcontainer":27}],12:[function(t,e,n){function r(t){i.apply(this,arguments),this.type=i.TYPES.LINEAR;var e=r.REGEXP_DIRECTION.test(t.args[0])||!i.REGEXP_COLORSTOP.test(t.args[0]);e?t.args[0].split(/\s+/).reverse().forEach(function(t,e){switch(t){case"left":this.x0=0,this.x1=1;break;case"top":this.y0=0,this.y1=1;break;case"right":this.x0=1,this.x1=0;break;case"bottom":this.y0=1,this.y1=0;break;case"to":var n=this.y0,r=this.x0;this.y0=this.y1,this.x0=this.x1,this.x1=r,this.y1=n;break;case"center":break;default:var i=.01*parseFloat(t,10);if(isNaN(i))break;0===e?(this.y0=i,this.y1=1-this.y0):(this.x0=i,this.x1=1-this.x0)}},this):(this.y0=0,this.y1=1),this.colorStops=t.args.slice(e?1:0).map(function(t){var e=t.match(i.REGEXP_COLORSTOP),n=+e[2],r=0===n?"%":e[3];return{color:new o(e[1]),stop:"%"===r?n/100:null}}),null===this.colorStops[0].stop&&(this.colorStops[0].stop=0),null===this.colorStops[this.colorStops.length-1].stop&&(this.colorStops[this.colorStops.length-1].stop=1),this.colorStops.forEach(function(t,e){null===t.stop&&this.colorStops.slice(e).some(function(n,r){return null!==n.stop&&(t.stop=(n.stop-this.colorStops[e-1].stop)/(r+1)+this.colorStops[e-1].stop,!0)},this)},this)}var i=t("./gradientcontainer"),o=t("./color");r.prototype=Object.create(i.prototype),r.REGEXP_DIRECTION=/^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i,e.exports=r},{"./color":3,"./gradientcontainer":9}],13:[function(t,e,n){var r=function(){r.options.logging&&window.console&&window.console.log&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,[Date.now()-r.options.start+"ms","html2canvas:"].concat([].slice.call(arguments,0)))};r.options={logging:!1},e.exports=r},{}],14:[function(t,e,n){function r(t,e){this.node=t,this.parent=e,this.stack=null,this.bounds=null,this.borders=null,this.clip=[],this.backgroundClip=[],this.offsetBounds=null,this.visible=null,this.computedStyles=null,this.colors={},this.styles={},this.backgroundImages=null,this.transformData=null,this.transformMatrix=null,this.isPseudoElement=!1,this.opacity=null}function i(t){var e=t.options[t.selectedIndex||0];return e?e.text||"":""}function o(t){if(t&&"matrix"===t[1])return t[2].split(",").map(function(t){return parseFloat(t.trim())});if(t&&"matrix3d"===t[1]){var e=t[2].split(",").map(function(t){return parseFloat(t.trim())});return[e[0],e[1],e[4],e[5],e[12],e[13]]}}function a(t){return-1!==t.toString().indexOf("%")}function s(t){return t.replace("px","")}function c(t){return parseFloat(t)}var l=t("./color"),u=t("./utils"),h=u.getBounds,f=u.parseBackgrounds,d=u.offsetBounds;r.prototype.cloneTo=function(t){t.visible=this.visible,t.borders=this.borders,t.bounds=this.bounds,t.clip=this.clip,t.backgroundClip=this.backgroundClip,t.computedStyles=this.computedStyles,t.styles=this.styles,t.backgroundImages=this.backgroundImages,t.opacity=this.opacity},r.prototype.getOpacity=function(){return null===this.opacity?this.opacity=this.cssFloat("opacity"):this.opacity},r.prototype.assignStack=function(t){this.stack=t,t.children.push(this)},r.prototype.isElementVisible=function(){return this.node.nodeType===Node.TEXT_NODE?this.parent.visible:"none"!==this.css("display")&&"hidden"!==this.css("visibility")&&!this.node.hasAttribute("data-html2canvas-ignore")&&("INPUT"!==this.node.nodeName||"hidden"!==this.node.getAttribute("type"))},r.prototype.css=function(t){return this.computedStyles||(this.computedStyles=this.isPseudoElement?this.parent.computedStyle(this.before?":before":":after"):this.computedStyle(null)),this.styles[t]||(this.styles[t]=this.computedStyles[t])},r.prototype.prefixedCss=function(t){var e=["webkit","moz","ms","o"],n=this.css(t);return void 0===n&&e.some(function(e){return void 0!==(n=this.css(e+t.substr(0,1).toUpperCase()+t.substr(1)))},this),void 0===n?null:n},r.prototype.computedStyle=function(t){return this.node.ownerDocument.defaultView.getComputedStyle(this.node,t)},r.prototype.cssInt=function(t){var e=parseInt(this.css(t),10);return isNaN(e)?0:e},r.prototype.color=function(t){return this.colors[t]||(this.colors[t]=new l(this.css(t)))},r.prototype.cssFloat=function(t){var e=parseFloat(this.css(t));return isNaN(e)?0:e},r.prototype.fontWeight=function(){var t=this.css("fontWeight");switch(parseInt(t,10)){case 401:t="bold";break;case 400:t="normal"}return t},r.prototype.parseClip=function(){var t=this.css("clip").match(this.CLIP);return t?{top:parseInt(t[1],10),right:parseInt(t[2],10),bottom:parseInt(t[3],10),left:parseInt(t[4],10)}:null},r.prototype.parseBackgroundImages=function(){return this.backgroundImages||(this.backgroundImages=f(this.css("backgroundImage")))},r.prototype.cssList=function(t,e){var n=(this.css(t)||"").split(",");return n=n[e||0]||n[0]||"auto",1===(n=n.trim().split(" ")).length&&(n=[n[0],a(n[0])?"auto":n[0]]),n},r.prototype.parseBackgroundSize=function(t,e,n){var r,i,o=this.cssList("backgroundSize",n);if(a(o[0]))r=t.width*parseFloat(o[0])/100;else{if(/contain|cover/.test(o[0])){var s=t.width/t.height,c=e.width/e.height;return s<c^"contain"===o[0]?{width:t.height*c,height:t.height}:{width:t.width,height:t.width/c}}r=parseInt(o[0],10)}return i="auto"===o[0]&&"auto"===o[1]?e.height:"auto"===o[1]?r/e.width*e.height:a(o[1])?t.height*parseFloat(o[1])/100:parseInt(o[1],10),"auto"===o[0]&&(r=i/e.height*e.width),{width:r,height:i}},r.prototype.parseBackgroundPosition=function(t,e,n,r){var i,o,s=this.cssList("backgroundPosition",n);return i=a(s[0])?(t.width-(r||e).width)*(parseFloat(s[0])/100):parseInt(s[0],10),o="auto"===s[1]?i/e.width*e.height:a(s[1])?(t.height-(r||e).height)*parseFloat(s[1])/100:parseInt(s[1],10),"auto"===s[0]&&(i=o/e.height*e.width),{left:i,top:o}},r.prototype.parseBackgroundRepeat=function(t){return this.cssList("backgroundRepeat",t)[0]},r.prototype.parseTextShadows=function(){var t=this.css("textShadow"),e=[];if(t&&"none"!==t)for(var n=t.match(this.TEXT_SHADOW_PROPERTY),r=0;n&&r<n.length;r++){var i=n[r].match(this.TEXT_SHADOW_VALUES);e.push({color:new l(i[0]),offsetX:i[1]?parseFloat(i[1].replace("px","")):0,offsetY:i[2]?parseFloat(i[2].replace("px","")):0,blur:i[3]?i[3].replace("px",""):0})}return e},r.prototype.parseTransform=function(){if(!this.transformData)if(this.hasTransform()){var t=this.parseBounds(),e=this.prefixedCss("transformOrigin").split(" ").map(s).map(c);e[0]+=t.left,e[1]+=t.top,this.transformData={origin:e,matrix:this.parseTransformMatrix()}}else this.transformData={origin:[0,0],matrix:[1,0,0,1,0,0]};return this.transformData},r.prototype.parseTransformMatrix=function(){if(!this.transformMatrix){var t=this.prefixedCss("transform"),e=t?o(t.match(this.MATRIX_PROPERTY)):null;this.transformMatrix=e||[1,0,0,1,0,0]}return this.transformMatrix},r.prototype.parseBounds=function(){return this.bounds||(this.bounds=this.hasTransform()?d(this.node):h(this.node))},r.prototype.hasTransform=function(){return"1,0,0,1,0,0"!==this.parseTransformMatrix().join(",")||this.parent&&this.parent.hasTransform()},r.prototype.getValue=function(){var t=this.node.value||"";return"SELECT"===this.node.tagName?t=i(this.node):"password"===this.node.type&&(t=Array(t.length+1).join("•")),0===t.length?this.node.placeholder||"":t},r.prototype.MATRIX_PROPERTY=/(matrix|matrix3d)\((.+)\)/,r.prototype.TEXT_SHADOW_PROPERTY=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,r.prototype.TEXT_SHADOW_VALUES=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,r.prototype.CLIP=/^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,e.exports=r},{"./color":3,"./utils":26}],15:[function(t,e,n){function r(t,e,n,r,i){L("Starting NodeParser"),this.renderer=e,this.options=i,this.range=null,this.support=n,this.renderQueue=[],this.stack=new G(!0,1,t.ownerDocument,null);var o=new U(t,null);if(i.background&&e.rectangle(0,0,e.width,e.height,new V(i.background)),t===t.ownerDocument.documentElement){var a=new U(o.color("backgroundColor").isTransparent()?t.ownerDocument.body:t.ownerDocument.documentElement,null);e.rectangle(0,0,e.width,e.height,a.color("backgroundColor"))}o.visibile=o.isElementVisible(),this.createPseudoHideStyles(t.ownerDocument),this.disableAnimations(t.ownerDocument),this.nodes=R([o].concat(this.getChildren(o)).filter(function(t){return t.visible=t.isElementVisible()}).map(this.getPseudoElements,this)),this.fontMetrics=new X,L("Fetched nodes, total:",this.nodes.length),L("Calculate overflow clips"),this.calculateOverflowClips(),L("Start fetching images"),this.images=r.fetch(this.nodes.filter(q)),this.ready=this.images.ready.then(J(function(){return L("Images loaded, starting parsing"),L("Creating stacking contexts"),this.createStackingContexts(),L("Sorting stacking contexts"),this.sortStackingContexts(this.stack),this.parse(this.stack),L("Render queue created with "+this.renderQueue.length+" items"),new Promise(J(function(t){i.async?"function"==typeof i.async?i.async.call(this,this.renderQueue,t):this.renderQueue.length>0?(this.renderIndex=0,this.asyncRenderer(this.renderQueue,t)):t():(this.renderQueue.forEach(this.paint,this),t())},this))},this))}function i(t){return t.parent&&t.parent.clip.length}function o(t){return t.replace(/(\-[a-z])/g,function(t){return t.toUpperCase().replace("-","")})}function a(){}function s(t,e,n,r){return t.map(function(i,o){if(i.width>0){var a=e.left,s=e.top,c=e.width,l=e.height-t[2].width;switch(o){case 0:l=t[0].width,i.args=h({c1:[a,s],c2:[a+c,s],c3:[a+c-t[1].width,s+l],c4:[a+t[3].width,s+l]},r[0],r[1],n.topLeftOuter,n.topLeftInner,n.topRightOuter,n.topRightInner);break;case 1:a=e.left+e.width-t[1].width,c=t[1].width,i.args=h({c1:[a+c,s],c2:[a+c,s+l+t[2].width],c3:[a,s+l],c4:[a,s+t[0].width]},r[1],r[2],n.topRightOuter,n.topRightInner,n.bottomRightOuter,n.bottomRightInner);break;case 2:s=s+e.height-t[2].width,l=t[2].width,i.args=h({c1:[a+c,s+l],c2:[a,s+l],c3:[a+t[3].width,s],c4:[a+c-t[3].width,s]},r[2],r[3],n.bottomRightOuter,n.bottomRightInner,n.bottomLeftOuter,n.bottomLeftInner);break;case 3:c=t[3].width,i.args=h({c1:[a,s+l+t[2].width],c2:[a,s],c3:[a+c,s+t[0].width],c4:[a+c,s+l]},r[3],r[0],n.bottomLeftOuter,n.bottomLeftInner,n.topLeftOuter,n.topLeftInner)}}return i})}function c(t,e,n,r){var i=(Math.sqrt(2)-1)/3*4,o=n*i,a=r*i,s=t+n,c=e+r;return{topLeft:u({x:t,y:c},{x:t,y:c-a},{x:s-o,y:e},{x:s,y:e}),topRight:u({x:t,y:e},{x:t+o,y:e},{x:s,y:c-a},{x:s,y:c}),bottomRight:u({x:s,y:e},{x:s,y:e+a},{x:t+o,y:c},{x:t,y:c}),bottomLeft:u({x:s,y:c},{x:s-o,y:c},{x:t,y:e+a},{x:t,y:e})}}function l(t,e,n){var r=t.left,i=t.top,o=t.width,a=t.height,s=e[0][0]<o/2?e[0][0]:o/2,l=e[0][1]<a/2?e[0][1]:a/2,u=e[1][0]<o/2?e[1][0]:o/2,h=e[1][1]<a/2?e[1][1]:a/2,f=e[2][0]<o/2?e[2][0]:o/2,d=e[2][1]<a/2?e[2][1]:a/2,p=e[3][0]<o/2?e[3][0]:o/2,m=e[3][1]<a/2?e[3][1]:a/2,g=o-u,w=a-d,y=o-f,v=a-m;return{topLeftOuter:c(r,i,s,l).topLeft.subdivide(.5),topLeftInner:c(r+n[3].width,i+n[0].width,Math.max(0,s-n[3].width),Math.max(0,l-n[0].width)).topLeft.subdivide(.5),topRightOuter:c(r+g,i,u,h).topRight.subdivide(.5),topRightInner:c(r+Math.min(g,o+n[3].width),i+n[0].width,g>o+n[3].width?0:u-n[3].width,h-n[0].width).topRight.subdivide(.5),bottomRightOuter:c(r+y,i+w,f,d).bottomRight.subdivide(.5),bottomRightInner:c(r+Math.min(y,o-n[3].width),i+Math.min(w,a+n[0].width),Math.max(0,f-n[1].width),d-n[2].width).bottomRight.subdivide(.5),bottomLeftOuter:c(r,i+v,p,m).bottomLeft.subdivide(.5),bottomLeftInner:c(r+n[3].width,i+v,Math.max(0,p-n[3].width),m-n[2].width).bottomLeft.subdivide(.5)}}function u(t,e,n,r){var i=function(t,e,n){return{x:t.x+(e.x-t.x)*n,y:t.y+(e.y-t.y)*n}};return{start:t,startControl:e,endControl:n,end:r,subdivide:function(o){var a=i(t,e,o),s=i(e,n,o),c=i(n,r,o),l=i(a,s,o),h=i(s,c,o),f=i(l,h,o);return[u(t,a,l,f),u(f,h,c,r)]},curveTo:function(t){t.push(["bezierCurve",e.x,e.y,n.x,n.y,r.x,r.y])},curveToReversed:function(r){r.push(["bezierCurve",n.x,n.y,e.x,e.y,t.x,t.y])}}}function h(t,e,n,r,i,o,a){var s=[];return e[0]>0||e[1]>0?(s.push(["line",r[1].start.x,r[1].start.y]),r[1].curveTo(s)):s.push(["line",t.c1[0],t.c1[1]]),n[0]>0||n[1]>0?(s.push(["line",o[0].start.x,o[0].start.y]),o[0].curveTo(s),s.push(["line",a[0].end.x,a[0].end.y]),a[0].curveToReversed(s)):(s.push(["line",t.c2[0],t.c2[1]]),s.push(["line",t.c3[0],t.c3[1]])),e[0]>0||e[1]>0?(s.push(["line",i[1].end.x,i[1].end.y]),i[1].curveToReversed(s)):s.push(["line",t.c4[0],t.c4[1]]),s}function f(t,e,n,r,i,o,a){e[0]>0||e[1]>0?(t.push(["line",r[0].start.x,r[0].start.y]),r[0].curveTo(t),r[1].curveTo(t)):t.push(["line",o,a]),(n[0]>0||n[1]>0)&&t.push(["line",i[0].start.x,i[0].start.y])}function d(t){return t.cssInt("zIndex")<0}function p(t){return t.cssInt("zIndex")>0}function m(t){return 0===t.cssInt("zIndex")}function g(t){return-1!==["inline","inline-block","inline-table"].indexOf(t.css("display"))}function w(t){return t instanceof G}function y(t){return t.node.data.trim().length>0}function v(t){return/^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))}function b(t){return["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(e){var n=t.css("border"+e+"Radius").split(" ");return n.length<=1&&(n[1]=n[0]),n.map(O)})}function x(t){return t.nodeType===Node.TEXT_NODE||t.nodeType===Node.ELEMENT_NODE}function k(t){var e=t.css("position");return"auto"!==(-1!==["absolute","relative","fixed"].indexOf(e)?t.css("zIndex"):"auto")}function _(t){return"static"!==t.css("position")}function C(t){return"none"!==t.css("float")}function A(t){return-1!==["inline-block","inline-table"].indexOf(t.css("display"))}function S(t){var e=this;return function(){return!t.apply(e,arguments)}}function q(t){return t.node.nodeType===Node.ELEMENT_NODE}function T(t){return!0===t.isPseudoElement}function P(t){return t.node.nodeType===Node.TEXT_NODE}function I(t){return function(e,n){return e.cssInt("zIndex")+t.indexOf(e)/t.length-(n.cssInt("zIndex")+t.indexOf(n)/t.length)}}function E(t){return t.getOpacity()<1}function O(t){return parseInt(t,10)}function F(t){return t.width}function B(t){return t.node.nodeType!==Node.ELEMENT_NODE||-1===["SCRIPT","HEAD","TITLE","OBJECT","BR","OPTION"].indexOf(t.node.nodeName)}function R(t){return[].concat.apply([],t)}function D(t){var e=t.substr(0,1);return e===t.substr(t.length-1)&&e.match(/'|"/)?t.substr(1,t.length-2):t}function j(t){for(var e,n=[],r=0,i=!1;t.length;)z(t[r])===i?((e=t.splice(0,r)).length&&n.push(M.ucs2.encode(e)),i=!i,r=0):r++,r>=t.length&&(e=t.splice(0,r)).length&&n.push(M.ucs2.encode(e));return n}function z(t){return-1!==[32,13,10,9,45].indexOf(t)}function N(t){return/[^\u0000-\u00ff]/.test(t)}var L=t("./log"),M=t("punycode"),U=t("./nodecontainer"),H=t("./textcontainer"),W=t("./pseudoelementcontainer"),X=t("./fontmetrics"),V=t("./color"),G=t("./stackingcontext"),Y=t("./utils"),J=Y.bind,Q=Y.getBounds,K=Y.parseBackgrounds,$=Y.offsetBounds;r.prototype.calculateOverflowClips=function(){this.nodes.forEach(function(t){if(q(t)){T(t)&&t.appendToDOM(),t.borders=this.parseBorders(t);var e="hidden"===t.css("overflow")?[t.borders.clip]:[],n=t.parseClip();n&&-1!==["absolute","fixed"].indexOf(t.css("position"))&&e.push([["rect",t.bounds.left+n.left,t.bounds.top+n.top,n.right-n.left,n.bottom-n.top]]),t.clip=i(t)?t.parent.clip.concat(e):e,t.backgroundClip="hidden"!==t.css("overflow")?t.clip.concat([t.borders.clip]):t.clip,T(t)&&t.cleanDOM()}else P(t)&&(t.clip=i(t)?t.parent.clip:[]);T(t)||(t.bounds=null)},this)},r.prototype.asyncRenderer=function(t,e,n){n=n||Date.now(),this.paint(t[this.renderIndex++]),t.length===this.renderIndex?e():n+20>Date.now()?this.asyncRenderer(t,e,n):setTimeout(J(function(){this.asyncRenderer(t,e)},this),0)},r.prototype.createPseudoHideStyles=function(t){this.createStyles(t,"."+W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+':before { content: "" !important; display: none !important; }.'+W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER+':after { content: "" !important; display: none !important; }')},r.prototype.disableAnimations=function(t){this.createStyles(t,"* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")},r.prototype.createStyles=function(t,e){var n=t.createElement("style");n.innerHTML=e,t.body.appendChild(n)},r.prototype.getPseudoElements=function(t){var e=[[t]];if(t.node.nodeType===Node.ELEMENT_NODE){var n=this.getPseudoElement(t,":before"),r=this.getPseudoElement(t,":after");n&&e.push(n),r&&e.push(r)}return R(e)},r.prototype.getPseudoElement=function(t,e){var n=t.computedStyle(e);if(!n||!n.content||"none"===n.content||"-moz-alt-content"===n.content||"none"===n.display)return null;for(var r=D(n.content),i="url"===r.substr(0,3),a=document.createElement(i?"img":"html2canvaspseudoelement"),s=new W(a,t,e),c=n.length-1;c>=0;c--){var l=o(n.item(c));a.style[l]=n[l]}if(a.className=W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+" "+W.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,i)return a.src=K(r)[0].args[0],[s];var u=document.createTextNode(r);return a.appendChild(u),[s,new H(u,s)]},r.prototype.getChildren=function(t){return R([].filter.call(t.node.childNodes,x).map(function(e){var n=[e.nodeType===Node.TEXT_NODE?new H(e,t):new U(e,t)].filter(B);return e.nodeType===Node.ELEMENT_NODE&&n.length&&"TEXTAREA"!==e.tagName?n[0].isElementVisible()?n.concat(this.getChildren(n[0])):[]:n},this))},r.prototype.newStackingContext=function(t,e){var n=new G(e,t.getOpacity(),t.node,t.parent);t.cloneTo(n),(e?n.getParentStack(this):n.parent.stack).contexts.push(n),t.stack=n},r.prototype.createStackingContexts=function(){this.nodes.forEach(function(t){q(t)&&(this.isRootElement(t)||E(t)||k(t)||this.isBodyWithTransparentRoot(t)||t.hasTransform())?this.newStackingContext(t,!0):q(t)&&(_(t)&&m(t)||A(t)||C(t))?this.newStackingContext(t,!1):t.assignStack(t.parent.stack)},this)},r.prototype.isBodyWithTransparentRoot=function(t){return"BODY"===t.node.nodeName&&t.parent.color("backgroundColor").isTransparent()},r.prototype.isRootElement=function(t){return null===t.parent},r.prototype.sortStackingContexts=function(t){t.contexts.sort(I(t.contexts.slice(0))),t.contexts.forEach(this.sortStackingContexts,this)},r.prototype.parseTextBounds=function(t){return function(e,n,r){if("none"!==t.parent.css("textDecoration").substr(0,4)||0!==e.trim().length){if(this.support.rangeBounds&&!t.parent.hasTransform()){var i=r.slice(0,n).join("").length;return this.getRangeBounds(t.node,i,e.length)}if(t.node&&"string"==typeof t.node.data){var o=t.node.splitText(e.length),a=this.getWrapperBounds(t.node,t.parent.hasTransform());return t.node=o,a}}else this.support.rangeBounds&&!t.parent.hasTransform()||(t.node=t.node.splitText(e.length));return{}}},r.prototype.getWrapperBounds=function(t,e){var n=t.ownerDocument.createElement("html2canvaswrapper"),r=t.parentNode,i=t.cloneNode(!0);n.appendChild(t.cloneNode(!0)),r.replaceChild(n,t);var o=e?$(n):Q(n);return r.replaceChild(i,n),o},r.prototype.getRangeBounds=function(t,e,n){var r=this.range||(this.range=t.ownerDocument.createRange());return r.setStart(t,e),r.setEnd(t,e+n),r.getBoundingClientRect()},r.prototype.parse=function(t){var e=t.contexts.filter(d),n=t.children.filter(q),r=n.filter(S(C)),i=r.filter(S(_)).filter(S(g)),o=n.filter(S(_)).filter(C),s=r.filter(S(_)).filter(g),c=t.contexts.concat(r.filter(_)).filter(m),l=t.children.filter(P).filter(y),u=t.contexts.filter(p);e.concat(i).concat(o).concat(s).concat(c).concat(l).concat(u).forEach(function(t){this.renderQueue.push(t),w(t)&&(this.parse(t),this.renderQueue.push(new a))},this)},r.prototype.paint=function(t){try{t instanceof a?this.renderer.ctx.restore():P(t)?(T(t.parent)&&t.parent.appendToDOM(),this.paintText(t),T(t.parent)&&t.parent.cleanDOM()):this.paintNode(t)}catch(t){if(L(t),this.options.strict)throw t}},r.prototype.paintNode=function(t){w(t)&&(this.renderer.setOpacity(t.opacity),this.renderer.ctx.save(),t.hasTransform()&&this.renderer.setTransform(t.parseTransform())),"INPUT"===t.node.nodeName&&"checkbox"===t.node.type?this.paintCheckbox(t):"INPUT"===t.node.nodeName&&"radio"===t.node.type?this.paintRadio(t):this.paintElement(t)},r.prototype.paintElement=function(t){var e=t.parseBounds();this.renderer.clip(t.backgroundClip,function(){this.renderer.renderBackground(t,e,t.borders.borders.map(F))},this),this.renderer.clip(t.clip,function(){this.renderer.renderBorders(t.borders.borders)},this),this.renderer.clip(t.backgroundClip,function(){switch(t.node.nodeName){case"svg":case"IFRAME":var n=this.images.get(t.node);n?this.renderer.renderImage(t,e,t.borders,n):L("Error loading <"+t.node.nodeName+">",t.node);break;case"IMG":var r=this.images.get(t.node.src);r?this.renderer.renderImage(t,e,t.borders,r):L("Error loading <img>",t.node.src);break;case"CANVAS":this.renderer.renderImage(t,e,t.borders,{image:t.node});break;case"SELECT":case"INPUT":case"TEXTAREA":this.paintFormValue(t)}},this)},r.prototype.paintCheckbox=function(t){var e=t.parseBounds(),n=Math.min(e.width,e.height),r={width:n-1,height:n-1,top:e.top,left:e.left},i=[3,3],o=[i,i,i,i],a=[1,1,1,1].map(function(t){return{color:new V("#A5A5A5"),width:t}}),c=l(r,o,a);this.renderer.clip(t.backgroundClip,function(){this.renderer.rectangle(r.left+1,r.top+1,r.width-2,r.height-2,new V("#DEDEDE")),this.renderer.renderBorders(s(a,r,c,o)),t.node.checked&&(this.renderer.font(new V("#424242"),"normal","normal","bold",n-3+"px","arial"),this.renderer.text("✔",r.left+n/6,r.top+n-1))},this)},r.prototype.paintRadio=function(t){var e=t.parseBounds(),n=Math.min(e.width,e.height)-2;this.renderer.clip(t.backgroundClip,function(){this.renderer.circleStroke(e.left+1,e.top+1,n,new V("#DEDEDE"),1,new V("#A5A5A5")),t.node.checked&&this.renderer.circle(Math.ceil(e.left+n/4)+1,Math.ceil(e.top+n/4)+1,Math.floor(n/2),new V("#424242"))},this)},r.prototype.paintFormValue=function(t){var e=t.getValue();if(e.length>0){var n=t.node.ownerDocument,r=n.createElement("html2canvaswrapper");["lineHeight","textAlign","fontFamily","fontWeight","fontSize","color","paddingLeft","paddingTop","paddingRight","paddingBottom","width","height","borderLeftStyle","borderTopStyle","borderLeftWidth","borderTopWidth","boxSizing","whiteSpace","wordWrap"].forEach(function(e){try{r.style[e]=t.css(e)}catch(t){L("html2canvas: Parse: Exception caught in renderFormValue: "+t.message)}});var i=t.parseBounds();r.style.position="fixed",r.style.left=i.left+"px",r.style.top=i.top+"px",r.textContent=e,n.body.appendChild(r),this.paintText(new H(r.firstChild,t)),n.body.removeChild(r)}},r.prototype.paintText=function(t){t.applyTextTransform();var e=M.ucs2.decode(t.node.data),n=this.options.letterRendering&&!v(t)||N(t.node.data)?e.map(function(t){return M.ucs2.encode([t])}):j(e),r=t.parent.fontWeight(),i=t.parent.css("fontSize"),o=t.parent.css("fontFamily"),a=t.parent.parseTextShadows();this.renderer.font(t.parent.color("color"),t.parent.css("fontStyle"),t.parent.css("fontVariant"),r,i,o),a.length?this.renderer.fontShadow(a[0].color,a[0].offsetX,a[0].offsetY,a[0].blur):this.renderer.clearShadow(),this.renderer.clip(t.parent.clip,function(){n.map(this.parseTextBounds(t),this).forEach(function(e,r){e&&(this.renderer.text(n[r],e.left,e.bottom),this.renderTextDecoration(t.parent,e,this.fontMetrics.getMetrics(o,i)))},this)},this)},r.prototype.renderTextDecoration=function(t,e,n){switch(t.css("textDecoration").split(" ")[0]){case"underline":this.renderer.rectangle(e.left,Math.round(e.top+n.baseline+n.lineWidth),e.width,1,t.color("color"));break;case"overline":this.renderer.rectangle(e.left,Math.round(e.top),e.width,1,t.color("color"));break;case"line-through":this.renderer.rectangle(e.left,Math.ceil(e.top+n.middle+n.lineWidth),e.width,1,t.color("color"))}};var Z={inset:[["darken",.6],["darken",.1],["darken",.1],["darken",.6]]};r.prototype.parseBorders=function(t){var e=t.parseBounds(),n=b(t),r=["Top","Right","Bottom","Left"].map(function(e,n){var r=t.css("border"+e+"Style"),i=t.color("border"+e+"Color");"inset"===r&&i.isBlack()&&(i=new V([255,255,255,i.a]));var o=Z[r]?Z[r][n]:null;return{width:t.cssInt("border"+e+"Width"),color:o?i[o[0]](o[1]):i,args:null}}),i=l(e,n,r);return{clip:this.parseBackgroundClip(t,i,r,n,e),borders:s(r,e,i,n)}},r.prototype.parseBackgroundClip=function(t,e,n,r,i){var o=[];switch(t.css("backgroundClip")){case"content-box":case"padding-box":f(o,r[0],r[1],e.topLeftInner,e.topRightInner,i.left+n[3].width,i.top+n[0].width),f(o,r[1],r[2],e.topRightInner,e.bottomRightInner,i.left+i.width-n[1].width,i.top+n[0].width),f(o,r[2],r[3],e.bottomRightInner,e.bottomLeftInner,i.left+i.width-n[1].width,i.top+i.height-n[2].width),f(o,r[3],r[0],e.bottomLeftInner,e.topLeftInner,i.left+n[3].width,i.top+i.height-n[2].width);break;default:f(o,r[0],r[1],e.topLeftOuter,e.topRightOuter,i.left,i.top),f(o,r[1],r[2],e.topRightOuter,e.bottomRightOuter,i.left+i.width,i.top),f(o,r[2],r[3],e.bottomRightOuter,e.bottomLeftOuter,i.left+i.width,i.top+i.height),f(o,r[3],r[0],e.bottomLeftOuter,e.topLeftOuter,i.left,i.top+i.height)}return o},e.exports=r},{"./color":3,"./fontmetrics":7,"./log":13,"./nodecontainer":14,"./pseudoelementcontainer":18,"./stackingcontext":21,"./textcontainer":25,"./utils":26,punycode:1}],16:[function(t,e,n){function r(t,e,n){var r="withCredentials"in new XMLHttpRequest;if(!e)return Promise.reject("No proxy configured");var s=o(r),l=a(e,t,s);return r?c(l):i(n,l,s).then(function(t){return f(t.content)})}function i(t,e,n){return new Promise(function(r,i){var o=t.createElement("script"),a=function(){delete window.html2canvas.proxy[n],t.body.removeChild(o)};window.html2canvas.proxy[n]=function(t){a(),r(t)},o.src=e,o.onerror=function(t){a(),i(t)},t.body.appendChild(o)})}function o(t){return t?"":"html2canvas_"+Date.now()+"_"+ ++d+"_"+Math.round(1e5*Math.random())}function a(t,e,n){return t+"?url="+encodeURIComponent(e)+(n.length?"&callback=html2canvas.proxy."+n:"")}function s(t){return function(e){var n,r=new DOMParser;try{n=r.parseFromString(e,"text/html")}catch(t){u("DOMParser not supported, falling back to createHTMLDocument"),n=document.implementation.createHTMLDocument("");try{n.open(),n.write(e),n.close()}catch(t){u("createHTMLDocument write not supported, falling back to document.body.innerHTML"),n.body.innerHTML=e}}var i=n.querySelector("base");if(!i||!i.href.host){var o=n.createElement("base");o.href=t,n.head.insertBefore(o,n.head.firstChild)}return n}}var c=t("./xhr"),l=t("./utils"),u=t("./log"),h=t("./clone"),f=l.decode64,d=0;n.Proxy=r,n.ProxyURL=function(t,e,n){var r="crossOrigin"in new Image,s=o(r),c=a(e,t,s);return r?Promise.resolve(c):i(n,c,s).then(function(t){return"data:"+t.type+";base64,"+t.content})},n.loadUrlDocument=function(t,e,n,i,o,a){return new r(t,e,window.document).then(s(t)).then(function(t){return h(t,n,i,o,a,0,0)})}},{"./clone":2,"./log":13,"./utils":26,"./xhr":28}],17:[function(t,e,n){var r=t("./proxy").ProxyURL;e.exports=function(t,e){var n=document.createElement("a");n.href=t,t=n.href,this.src=t,this.image=new Image;var i=this;this.promise=new Promise(function(n,o){i.image.crossOrigin="Anonymous",i.image.onload=n,i.image.onerror=o,new r(t,e,document).then(function(t){i.image.src=t}).catch(o)})}},{"./proxy":16}],18:[function(t,e,n){function r(t,e,n){i.call(this,t,e),this.isPseudoElement=!0,this.before=":before"===n}var i=t("./nodecontainer");r.prototype.cloneTo=function(t){r.prototype.cloneTo.call(this,t),t.isPseudoElement=!0,t.before=this.before},(r.prototype=Object.create(i.prototype)).appendToDOM=function(){this.before?this.parent.node.insertBefore(this.node,this.parent.node.firstChild):this.parent.node.appendChild(this.node),this.parent.node.className+=" "+this.getHideClass()},r.prototype.cleanDOM=function(){this.node.parentNode.removeChild(this.node),this.parent.node.className=this.parent.node.className.replace(this.getHideClass(),"")},r.prototype.getHideClass=function(){return this["PSEUDO_HIDE_ELEMENT_CLASS_"+(this.before?"BEFORE":"AFTER")]},r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE="___html2canvas___pseudoelement_before",r.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER="___html2canvas___pseudoelement_after",e.exports=r},{"./nodecontainer":14}],19:[function(t,e,n){function r(t,e,n,r,i){this.width=t,this.height=e,this.images=n,this.options=r,this.document=i}var i=t("./log");r.prototype.renderImage=function(t,e,n,r){var i=t.cssInt("paddingLeft"),o=t.cssInt("paddingTop"),a=t.cssInt("paddingRight"),s=t.cssInt("paddingBottom"),c=n.borders,l=e.width-(c[1].width+c[3].width+i+a),u=e.height-(c[0].width+c[2].width+o+s);this.drawImage(r,0,0,r.image.width||l,r.image.height||u,e.left+i+c[3].width,e.top+o+c[0].width,l,u)},r.prototype.renderBackground=function(t,e,n){e.height>0&&e.width>0&&(this.renderBackgroundColor(t,e),this.renderBackgroundImage(t,e,n))},r.prototype.renderBackgroundColor=function(t,e){var n=t.color("backgroundColor");n.isTransparent()||this.rectangle(e.left,e.top,e.width,e.height,n)},r.prototype.renderBorders=function(t){t.forEach(this.renderBorder,this)},r.prototype.renderBorder=function(t){t.color.isTransparent()||null===t.args||this.drawShape(t.args,t.color)},r.prototype.renderBackgroundImage=function(t,e,n){t.parseBackgroundImages().reverse().forEach(function(r,o,a){switch(r.method){case"url":var s=this.images.get(r.args[0]);s?this.renderBackgroundRepeating(t,e,s,a.length-(o+1),n):i("Error loading background-image",r.args[0]);break;case"linear-gradient":case"gradient":var c=this.images.get(r.value);c?this.renderBackgroundGradient(c,e,n):i("Error loading background-image",r.args[0]);break;case"none":break;default:i("Unknown background-image type",r.args[0])}},this)},r.prototype.renderBackgroundRepeating=function(t,e,n,r,i){var o=t.parseBackgroundSize(e,n.image,r),a=t.parseBackgroundPosition(e,n.image,r,o);switch(t.parseBackgroundRepeat(r)){case"repeat-x":case"repeat no-repeat":this.backgroundRepeatShape(n,a,o,e,e.left+i[3],e.top+a.top+i[0],99999,o.height,i);break;case"repeat-y":case"no-repeat repeat":this.backgroundRepeatShape(n,a,o,e,e.left+a.left+i[3],e.top+i[0],o.width,99999,i);break;case"no-repeat":this.backgroundRepeatShape(n,a,o,e,e.left+a.left+i[3],e.top+a.top+i[0],o.width,o.height,i);break;default:this.renderBackgroundRepeat(n,a,o,{top:e.top,left:e.left},i[3],i[0])}},e.exports=r},{"./log":13}],20:[function(t,e,n){function r(t,e){o.apply(this,arguments),this.canvas=this.options.canvas||this.document.createElement("canvas"),this.options.canvas||(this.canvas.width=t,this.canvas.height=e),this.ctx=this.canvas.getContext("2d"),this.taintCtx=this.document.createElement("canvas").getContext("2d"),this.ctx.textBaseline="bottom",this.variables={},s("Initialized CanvasRenderer with size",t,"x",e)}function i(t){return t.length>0}var o=t("../renderer"),a=t("../lineargradientcontainer"),s=t("../log");(r.prototype=Object.create(o.prototype)).setFillStyle=function(t){return this.ctx.fillStyle="object"==typeof t&&t.isColor?t.toString():t,this.ctx},r.prototype.rectangle=function(t,e,n,r,i){this.setFillStyle(i).fillRect(t,e,n,r)},r.prototype.circle=function(t,e,n,r){this.setFillStyle(r),this.ctx.beginPath(),this.ctx.arc(t+n/2,e+n/2,n/2,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()},r.prototype.circleStroke=function(t,e,n,r,i,o){this.circle(t,e,n,r),this.ctx.strokeStyle=o.toString(),this.ctx.stroke()},r.prototype.drawShape=function(t,e){this.shape(t),this.setFillStyle(e).fill()},r.prototype.taints=function(t){if(null===t.tainted){this.taintCtx.drawImage(t.image,0,0);try{this.taintCtx.getImageData(0,0,1,1),t.tainted=!1}catch(e){this.taintCtx=document.createElement("canvas").getContext("2d"),t.tainted=!0}}return t.tainted},r.prototype.drawImage=function(t,e,n,r,i,o,a,s,c){this.taints(t)&&!this.options.allowTaint||this.ctx.drawImage(t.image,e,n,r,i,o,a,s,c)},r.prototype.clip=function(t,e,n){this.ctx.save(),t.filter(i).forEach(function(t){this.shape(t).clip()},this),e.call(n),this.ctx.restore()},r.prototype.shape=function(t){return this.ctx.beginPath(),t.forEach(function(t,e){"rect"===t[0]?this.ctx.rect.apply(this.ctx,t.slice(1)):this.ctx[0===e?"moveTo":t[0]+"To"].apply(this.ctx,t.slice(1))},this),this.ctx.closePath(),this.ctx},r.prototype.font=function(t,e,n,r,i,o){this.setFillStyle(t).font=[e,n,r,i,o].join(" ").split(",")[0]},r.prototype.fontShadow=function(t,e,n,r){this.setVariable("shadowColor",t.toString()).setVariable("shadowOffsetY",e).setVariable("shadowOffsetX",n).setVariable("shadowBlur",r)},r.prototype.clearShadow=function(){this.setVariable("shadowColor","rgba(0,0,0,0)")},r.prototype.setOpacity=function(t){this.ctx.globalAlpha=t},r.prototype.setTransform=function(t){this.ctx.translate(t.origin[0],t.origin[1]),this.ctx.transform.apply(this.ctx,t.matrix),this.ctx.translate(-t.origin[0],-t.origin[1])},r.prototype.setVariable=function(t,e){return this.variables[t]!==e&&(this.variables[t]=this.ctx[t]=e),this},r.prototype.text=function(t,e,n){this.ctx.fillText(t,e,n)},r.prototype.backgroundRepeatShape=function(t,e,n,r,i,o,a,s,c){var l=[["line",Math.round(i),Math.round(o)],["line",Math.round(i+a),Math.round(o)],["line",Math.round(i+a),Math.round(s+o)],["line",Math.round(i),Math.round(s+o)]];this.clip([l],function(){this.renderBackgroundRepeat(t,e,n,r,c[3],c[0])},this)},r.prototype.renderBackgroundRepeat=function(t,e,n,r,i,o){var a=Math.round(r.left+e.left+i),s=Math.round(r.top+e.top+o);this.setFillStyle(this.ctx.createPattern(this.resizeImage(t,n),"repeat")),this.ctx.translate(a,s),this.ctx.fill(),this.ctx.translate(-a,-s)},r.prototype.renderBackgroundGradient=function(t,e){if(t instanceof a){var n=this.ctx.createLinearGradient(e.left+e.width*t.x0,e.top+e.height*t.y0,e.left+e.width*t.x1,e.top+e.height*t.y1);t.colorStops.forEach(function(t){n.addColorStop(t.stop,t.color.toString())}),this.rectangle(e.left,e.top,e.width,e.height,n)}},r.prototype.resizeImage=function(t,e){var n=t.image;if(n.width===e.width&&n.height===e.height)return n;var r=document.createElement("canvas");return r.width=e.width,r.height=e.height,r.getContext("2d").drawImage(n,0,0,n.width,n.height,0,0,e.width,e.height),r},e.exports=r},{"../lineargradientcontainer":12,"../log":13,"../renderer":19}],21:[function(t,e,n){function r(t,e,n,r){i.call(this,n,r),this.ownStacking=t,this.contexts=[],this.children=[],this.opacity=(this.parent?this.parent.stack.opacity:1)*e}var i=t("./nodecontainer");(r.prototype=Object.create(i.prototype)).getParentStack=function(t){var e=this.parent?this.parent.stack:null;return e?e.ownStacking?e:e.getParentStack(t):t.stack},e.exports=r},{"./nodecontainer":14}],22:[function(t,e,n){function r(t){this.rangeBounds=this.testRangeBounds(t),this.cors=this.testCORS(),this.svg=this.testSVG()}r.prototype.testRangeBounds=function(t){var e,n,r=!1;return t.createRange&&(e=t.createRange()).getBoundingClientRect&&((n=t.createElement("boundtest")).style.height="123px",n.style.display="block",t.body.appendChild(n),e.selectNode(n),123===e.getBoundingClientRect().height&&(r=!0),t.body.removeChild(n)),r},r.prototype.testCORS=function(){return void 0!==(new Image).crossOrigin},r.prototype.testSVG=function(){var t=new Image,e=document.createElement("canvas"),n=e.getContext("2d");t.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(t,0,0),e.toDataURL()}catch(t){return!1}return!0},e.exports=r},{}],23:[function(t,e,n){function r(t){this.src=t,this.image=null;var e=this;this.promise=this.hasFabric().then(function(){return e.isInline(t)?Promise.resolve(e.inlineFormatting(t)):i(t)}).then(function(t){return new Promise(function(n){window.html2canvas.svg.fabric.loadSVGFromString(t,e.createCanvas.call(e,n))})})}var i=t("./xhr"),o=t("./utils").decode64;r.prototype.hasFabric=function(){return window.html2canvas.svg&&window.html2canvas.svg.fabric?Promise.resolve():Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))},r.prototype.inlineFormatting=function(t){return/^data:image\/svg\+xml;base64,/.test(t)?this.decode64(this.removeContentType(t)):this.removeContentType(t)},r.prototype.removeContentType=function(t){return t.replace(/^data:image\/svg\+xml(;base64)?,/,"")},r.prototype.isInline=function(t){return/^data:image\/svg\+xml/i.test(t)},r.prototype.createCanvas=function(t){var e=this;return function(n,r){var i=new window.html2canvas.svg.fabric.StaticCanvas("c");e.image=i.lowerCanvasEl,i.setWidth(r.width).setHeight(r.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n,r)).renderAll(),t(i.lowerCanvasEl)}},r.prototype.decode64=function(t){return"function"==typeof window.atob?window.atob(t):o(t)},e.exports=r},{"./utils":26,"./xhr":28}],24:[function(t,e,n){function r(t,e){this.src=t,this.image=null;var n=this;this.promise=e?new Promise(function(e,r){n.image=new Image,n.image.onload=e,n.image.onerror=r,n.image.src="data:image/svg+xml,"+(new XMLSerializer).serializeToString(t),!0===n.image.complete&&e(n.image)}):this.hasFabric().then(function(){return new Promise(function(e){window.html2canvas.svg.fabric.parseSVGDocument(t,n.createCanvas.call(n,e))})})}var i=t("./svgcontainer");r.prototype=Object.create(i.prototype),e.exports=r},{"./svgcontainer":23}],25:[function(t,e,n){function r(t,e){o.call(this,t,e)}function i(t,e,n){if(t.length>0)return e+n.toUpperCase()}var o=t("./nodecontainer");(r.prototype=Object.create(o.prototype)).applyTextTransform=function(){this.node.data=this.transform(this.parent.css("textTransform"))},r.prototype.transform=function(t){var e=this.node.data;switch(t){case"lowercase":return e.toLowerCase();case"capitalize":return e.replace(/(^|\s|:|-|\(|\))([a-z])/g,i);case"uppercase":return e.toUpperCase();default:return e}},e.exports=r},{"./nodecontainer":14}],26:[function(t,e,n){n.smallImage=function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},n.bind=function(t,e){return function(){return t.apply(e,arguments)}},/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
n.decode64=function(t){var e,n,r,i,o,a,s,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=t.length,u="";for(e=0;e<l;e+=4)o=c.indexOf(t[e])<<2|(n=c.indexOf(t[e+1]))>>4,a=(15&n)<<4|(r=c.indexOf(t[e+2]))>>2,s=(3&r)<<6|(i=c.indexOf(t[e+3])),u+=64===r?String.fromCharCode(o):64===i||-1===i?String.fromCharCode(o,a):String.fromCharCode(o,a,s);return u},n.getBounds=function(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect(),n=null==t.offsetWidth?e.width:t.offsetWidth;return{top:e.top,bottom:e.bottom||e.top+e.height,right:e.left+n,left:e.left,width:n,height:null==t.offsetHeight?e.height:t.offsetHeight}}return{}},n.offsetBounds=function(t){var e=t.offsetParent?n.offsetBounds(t.offsetParent):{top:0,left:0};return{top:t.offsetTop+e.top,bottom:t.offsetTop+t.offsetHeight+e.top,right:t.offsetLeft+e.left+t.offsetWidth,left:t.offsetLeft+e.left,width:t.offsetWidth,height:t.offsetHeight}},n.parseBackgrounds=function(t){var e,n,r,i,o,a,s,c=[],l=0,u=0,h=function(){e&&('"'===n.substr(0,1)&&(n=n.substr(1,n.length-2)),n&&s.push(n),"-"===e.substr(0,1)&&(i=e.indexOf("-",1)+1)>0&&(r=e.substr(0,i),e=e.substr(i)),c.push({prefix:r,method:e.toLowerCase(),value:o,args:s,image:null})),s=[],e=r=n=o=""};return s=[],e=r=n=o="",t.split("").forEach(function(t){if(!(0===l&&" \r\n\t".indexOf(t)>-1)){switch(t){case'"':a?a===t&&(a=null):a=t;break;case"(":if(a)break;if(0===l)return l=1,void(o+=t);u++;break;case")":if(a)break;if(1===l){if(0===u)return l=0,o+=t,void h();u--}break;case",":if(a)break;if(0===l)return void h();if(1===l&&0===u&&!e.match(/^url$/i))return s.push(n),n="",void(o+=t)}o+=t,0===l?e+=t:n+=t}}),h(),c}},{}],27:[function(t,e,n){function r(t){i.apply(this,arguments),this.type="linear"===t.args[0]?i.TYPES.LINEAR:i.TYPES.RADIAL}var i=t("./gradientcontainer");r.prototype=Object.create(i.prototype),e.exports=r},{"./gradientcontainer":9}],28:[function(t,e,n){e.exports=function(t){return new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.onload=function(){200===r.status?e(r.responseText):n(new Error(r.statusText))},r.onerror=function(){n(new Error("Network Error"))},r.send()})}},{}]},{},[4])(4)}),/*
# PNG.js
# Copyright (c) 2011 Devon Govett
# MIT LICENSE
# 
# 
*/
function(t){var e;e=function(){function e(t){var e,n,r,i,o,a,s,c,l,u,h,f,d,p,m;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},a=null;;){switch(e=this.readUInt32(),u=function(){var t,e;for(e=[],s=t=0;t<4;s=++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":a&&this.animation.frames.push(a),this.pos+=4,a={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},o=this.readUInt16(),i=this.readUInt16()||100,a.delay=1e3*o/i,a.disposeOp=this.data[this.pos++],a.blendOp=this.data[this.pos++],a.data=[];break;case"IDAT":case"fdAT":for("fdAT"===u&&(this.pos+=4,e-=4),t=(null!=a?a.data:void 0)||this.imgData,s=d=0;0<=e?d<e:d>e;s=0<=e?++d:--d)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(r=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>r)throw new Error("More transparent colors than palette size");if((h=r-this.transparency.indexed.length)>0)for(s=p=0;0<=h?p<h:p>h;s=0<=h?++p:--p)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":c=(f=this.read(e)).indexOf(0),l=String.fromCharCode.apply(String,f.slice(0,c)),this.text[l]=String.fromCharCode.apply(String,f.slice(c+1));break;case"IEND":return a&&this.animation.frames.push(a),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(m=this.colorType)||6===m,n=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*n,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}var n,r,i;e.load=function(t,n,r){var i;return"function"==typeof n&&(r=n),(i=new XMLHttpRequest).open("GET",t,!0),i.responseType="arraybuffer",i.onload=function(){var t,o;return t=new Uint8Array(i.response||i.mozResponseArrayBuffer),o=new e(t),"function"==typeof(null!=n?n.getContext:void 0)&&o.render(n),"function"==typeof r?r(o):void 0},i.send(null)},e.prototype.read=function(t){var e,n;for(n=[],e=0;0<=t?e<t:e>t;0<=t?++e:--e)n.push(this.data[this.pos++]);return n},e.prototype.readUInt32=function(){var t,e,n,r;return t=this.data[this.pos++]<<24,e=this.data[this.pos++]<<16,n=this.data[this.pos++]<<8,r=this.data[this.pos++],t|e|n|r},e.prototype.readUInt16=function(){var t,e;return t=this.data[this.pos++]<<8,e=this.data[this.pos++],t|e},e.prototype.decodePixels=function(t){var e,n,r,i,o,a,c,l,u,h,f,d,p,m,g,w,y,v,b,x,k,_,C;if(null==t&&(t=this.imgData),0===t.length)return new Uint8Array(0);for(t=(t=new s(t)).getBytes(),w=(d=this.pixelBitlength/8)*this.width,p=new Uint8Array(w*this.height),a=t.length,g=0,m=0,n=0;m<a;){switch(t[m++]){case 0:for(i=b=0;b<w;i=b+=1)p[n++]=t[m++];break;case 1:for(i=x=0;x<w;i=x+=1)e=t[m++],o=i<d?0:p[n-d],p[n++]=(e+o)%256;break;case 2:for(i=k=0;k<w;i=k+=1)e=t[m++],r=(i-i%d)/d,y=g&&p[(g-1)*w+r*d+i%d],p[n++]=(y+e)%256;break;case 3:for(i=_=0;_<w;i=_+=1)e=t[m++],r=(i-i%d)/d,o=i<d?0:p[n-d],y=g&&p[(g-1)*w+r*d+i%d],p[n++]=(e+Math.floor((o+y)/2))%256;break;case 4:for(i=C=0;C<w;i=C+=1)e=t[m++],r=(i-i%d)/d,o=i<d?0:p[n-d],0===g?y=v=0:(y=p[(g-1)*w+r*d+i%d],v=r&&p[(g-1)*w+(r-1)*d+i%d]),c=o+y-v,l=Math.abs(c-o),h=Math.abs(c-y),f=Math.abs(c-v),u=l<=h&&l<=f?o:h<=f?y:v,p[n++]=(e+u)%256;break;default:throw new Error("Invalid filter algorithm: "+t[m-1])}g++}return p},e.prototype.decodePalette=function(){var t,e,n,r,i,o,a,s,c;for(n=this.palette,o=this.transparency.indexed||[],i=new Uint8Array((o.length||0)+n.length),r=0,t=0,e=a=0,s=n.length;a<s;e=a+=3)i[r++]=n[e],i[r++]=n[e+1],i[r++]=n[e+2],i[r++]=null!=(c=o[t++])?c:255;return i},e.prototype.copyToImageData=function(t,e){var n,r,i,o,a,s,c,l,u,h,f;if(r=this.colors,u=null,n=this.hasAlphaChannel,this.palette.length&&(u=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),r=4,n=!0),i=t.data||t,l=i.length,a=u||e,o=s=0,1===r)for(;o<l;)c=u?4*e[o/4]:s,h=a[c++],i[o++]=h,i[o++]=h,i[o++]=h,i[o++]=n?a[c++]:255,s=c;else for(;o<l;)c=u?4*e[o/4]:s,i[o++]=a[c++],i[o++]=a[c++],i[o++]=a[c++],i[o++]=n?a[c++]:255,s=c},e.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};try{r=t.document.createElement("canvas"),i=r.getContext("2d")}catch(t){return-1}return n=function(t){var e;return i.width=t.width,i.height=t.height,i.clearRect(0,0,t.width,t.height),i.putImageData(t,0,0),e=new Image,e.src=r.toDataURL(),e},e.prototype.decodeFrames=function(t){var e,r,i,o,a,s,c,l;if(this.animation){for(l=[],r=a=0,s=(c=this.animation.frames).length;a<s;r=++a)e=c[r],i=t.createImageData(e.width,e.height),o=this.decodePixels(new Uint8Array(e.data)),this.copyToImageData(i,o),e.imageData=i,l.push(e.image=n(i));return l}},e.prototype.renderFrame=function(t,e){var n,r,i;return r=this.animation.frames,n=r[e],i=r[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=i?i.disposeOp:void 0)?t.clearRect(i.xOffset,i.yOffset,i.width,i.height):2===(null!=i?i.disposeOp:void 0)&&t.putImageData(i.imageData,i.xOffset,i.yOffset),0===n.blendOp&&t.clearRect(n.xOffset,n.yOffset,n.width,n.height),t.drawImage(n.image,n.xOffset,n.yOffset)},e.prototype.animate=function(t){var e,n,r,i,o,a,s=this;return n=0,a=this.animation,i=a.numFrames,r=a.frames,o=a.numPlays,(e=function(){var a,c;if(a=n++%i,c=r[a],s.renderFrame(t,a),i>1&&n/i<o)return s.animation._timeout=setTimeout(e,c.delay)})()},e.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},e.prototype.render=function(t){var e,n;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(n=e.createImageData(this.width,this.height),this.copyToImageData(n,this.decodePixels()),e.putImageData(n,0,0))},e}(),t.PNG=e}("undefined"!=typeof window&&window||void 0);/*
 * Extracted from pdf.js
 * https://github.com/andreasgal/pdf.js
 *
 * Copyright (c) 2011 Mozilla Foundation
 *
 * Contributors: Andreas Gal <gal@mozilla.com>
 *               Chris G Jones <cjones@mozilla.com>
 *               Shaon Barman <shaon.barman@gmail.com>
 *               Vivien Nicolas <21@vingtetun.org>
 *               Justin D'Arcangelo <justindarc@gmail.com>
 *               Yury Delendik
 *
 * 
 */
var a=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,n=e?e.byteLength:0;if(t<n)return e;for(var r=512;r<t;)r<<=1;for(var i=new Uint8Array(r),o=0;o<n;++o)i[o]=e[o];return this.buffer=i},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(r=e+t;!this.eof&&this.bufferLength<r;)this.readBlock();var n=this.bufferLength;r>n&&(r=n)}else{for(;!this.eof;)this.readBlock();var r=this.bufferLength}return this.pos=r,this.buffer.subarray(e,r)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,n){for(var r=t+e;this.bufferLength<=r&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,n)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}(),s=function(){function t(t){throw new Error(t)}function e(e){var n=0,r=e[n++],i=e[n++];-1!=r&&-1!=i||t("Invalid header in flate stream"),8!=(15&r)&&t("Unknown compression method in flate stream"),((r<<8)+i)%31!=0&&t("Bad FCHECK in flate stream"),32&i&&t("FDICT bit set in flate stream"),this.bytes=e,this.bytesPos=n,this.codeSize=0,this.codeBuf=0,a.call(this)}if("undefined"!=typeof Uint32Array){var n=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),r=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),i=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),o=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],s=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return e.prototype=Object.create(a.prototype),e.prototype.getBits=function(e){for(var n,r=this.codeSize,i=this.codeBuf,o=this.bytes,a=this.bytesPos;r<e;)void 0===(n=o[a++])&&t("Bad encoding in flate stream"),i|=n<<r,r+=8;return n=i&(1<<e)-1,this.codeBuf=i>>e,this.codeSize=r-=e,this.bytesPos=a,n},e.prototype.getCode=function(e){for(var n=e[0],r=e[1],i=this.codeSize,o=this.codeBuf,a=this.bytes,s=this.bytesPos;i<r;){var c;void 0===(c=a[s++])&&t("Bad encoding in flate stream"),o|=c<<i,i+=8}var l=n[o&(1<<r)-1],u=l>>16,h=65535&l;return(0==i||i<u||0==u)&&t("Bad encoding in flate stream"),this.codeBuf=o>>u,this.codeSize=i-u,this.bytesPos=s,h},e.prototype.generateHuffmanTable=function(t){for(var e=t.length,n=0,r=0;r<e;++r)t[r]>n&&(n=t[r]);for(var i=1<<n,o=new Uint32Array(i),a=1,s=0,c=2;a<=n;++a,s<<=1,c<<=1)for(var l=0;l<e;++l)if(t[l]==a){for(var u=0,h=s,r=0;r<a;++r)u=u<<1|1&h,h>>=1;for(r=u;r<i;r+=c)o[r]=a<<16|l;++s}return[o,n]},e.prototype.readBlock=function(){function e(t,e,n,r,i){for(var o=t.getBits(n)+r;o-- >0;)e[p++]=i}var a=this.getBits(3);if(1&a&&(this.eof=!0),0!=(a>>=1)){var c,l;if(1==a)c=o,l=s;else if(2==a){for(var u=this.getBits(5)+257,h=this.getBits(5)+1,f=this.getBits(4)+4,d=Array(n.length),p=0;p<f;)d[n[p++]]=this.getBits(3);for(var m=this.generateHuffmanTable(d),g=0,p=0,w=u+h,y=new Array(w);p<w;){var v=this.getCode(m);16==v?e(this,y,2,3,g):17==v?e(this,y,3,3,g=0):18==v?e(this,y,7,11,g=0):y[p++]=g=v}c=this.generateHuffmanTable(y.slice(0,u)),l=this.generateHuffmanTable(y.slice(u,w))}else t("Unknown block type in flate stream");for(var b=(O=this.buffer)?O.length:0,x=this.bufferLength;;){var k=this.getCode(c);if(k<256)x+1>=b&&(b=(O=this.ensureBuffer(x+1)).length),O[x++]=k;else{if(256==k)return void(this.bufferLength=x);var _=(k=r[k-=257])>>16;_>0&&(_=this.getBits(_));g=(65535&k)+_;k=this.getCode(l),(_=(k=i[k])>>16)>0&&(_=this.getBits(_));var C=(65535&k)+_;x+g>=b&&(b=(O=this.ensureBuffer(x+g)).length);for(var A=0;A<g;++A,++x)O[x]=O[x-C]}}}else{var S,q=this.bytes,T=this.bytesPos;void 0===(S=q[T++])&&t("Bad block header in flate stream");var P=S;void 0===(S=q[T++])&&t("Bad block header in flate stream"),P|=S<<8,void 0===(S=q[T++])&&t("Bad block header in flate stream");var I=S;void 0===(S=q[T++])&&t("Bad block header in flate stream"),(I|=S<<8)!=(65535&~P)&&t("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var E=this.bufferLength,O=this.ensureBuffer(E+P),F=E+P;this.bufferLength=F;for(var B=E;B<F;++B){if(void 0===(S=q[T++])){this.eof=!0;break}O[B]=S}this.bytesPos=T}},e}}();return function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";void 0===t.btoa&&(t.btoa=function(t){var n,r,i,o,a,s=0,c=0,l="",u=[];if(!t)return t;do{n=(a=t.charCodeAt(s++)<<16|t.charCodeAt(s++)<<8|t.charCodeAt(s++))>>18&63,r=a>>12&63,i=a>>6&63,o=63&a,u[c++]=e.charAt(n)+e.charAt(r)+e.charAt(i)+e.charAt(o)}while(s<t.length);l=u.join("");var h=t.length%3;return(h?l.slice(0,h-3):l)+"===".slice(h||3)}),void 0===t.atob&&(t.atob=function(t){var n,r,i,o,a,s,c=0,l=0,u=[];if(!t)return t;t+="";do{n=(s=e.indexOf(t.charAt(c++))<<18|e.indexOf(t.charAt(c++))<<12|(o=e.indexOf(t.charAt(c++)))<<6|(a=e.indexOf(t.charAt(c++))))>>16&255,r=s>>8&255,i=255&s,u[l++]=64==o?String.fromCharCode(n):64==a?String.fromCharCode(n,r):String.fromCharCode(n,r,i)}while(c<t.length);return u.join("")}),Array.prototype.map||(Array.prototype.map=function(t){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;for(var e=Object(this),n=e.length>>>0,r=new Array(n),i=arguments.length>1?arguments[1]:void 0,o=0;o<n;o++)o in e&&(r[o]=t.call(i,e[o],o,e));return r}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;for(var n=Object(this),r=n.length>>>0,i=0;i<r;i++)i in n&&t.call(e,n[i],i,n)}),Object.keys||(Object.keys=function(){var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=n.length;return function(i){if("object"!=typeof i&&("function"!=typeof i||null===i))throw new TypeError;var o,a,s=[];for(o in i)t.call(i,o)&&s.push(o);if(e)for(a=0;a<r;a++)t.call(i,n[a])&&s.push(n[a]);return s}}()),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),String.prototype.trimLeft||(String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")}),String.prototype.trimRight||(String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")})}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||void 0),e});
/* Web Font Loader v1.6.6 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return n.apply(null,arguments)}var p=Date.now||function(){return+new Date};function r(a,b){this.D=a;this.m=b||a;this.F=this.m.document}r.prototype.createElement=function(a,b,c){a=this.F.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.F.createTextNode(c));return a};function s(a,b,c){a=a.F.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}
function t(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),f=0;f<b.length;f+=1){for(var e=!1,g=0;g<d.length;g+=1)if(b[f]===d[g]){e=!0;break}e||d.push(b[f])}b=[];for(f=0;f<d.length;f+=1){e=!1;for(g=0;g<c.length;g+=1)if(d[f]===c[g]){e=!0;break}e||b.push(d[f])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(a,b){for(var c=a.className.split(/\s+/),d=0,f=c.length;d<f;d++)if(c[d]==b)return!0;return!1}
function v(a){if("string"===typeof a.da)return a.da;var b=a.m.location.protocol;"about:"==b&&(b=a.D.location.protocol);return"https:"==b?"https:":"http:"}function w(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b,media:"all"}),d=!1;c.onload=function(){d||(d=!0)};c.onerror=function(){d||(d=!0)};s(a,"head",c)}
function x(a,b,c,d){var f=a.F.getElementsByTagName("head")[0];if(f){var e=a.createElement("script",{src:b}),g=!1;e.onload=e.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&f.removeChild(e))};f.appendChild(e);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return e}return null};function y(a){this.ca=a||"-"}y.prototype.d=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ca)};function A(a,b){this.V=a;this.N=4;this.H="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.H=c[1],this.N=parseInt(c[2],10))}A.prototype.getName=function(){return this.V};function B(a){return a.H+a.N}function ca(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function da(a,b){this.a=a;this.h=a.m.document.documentElement;this.J=b;this.f="wf";this.e=new y("-");this.Z=!1!==b.events;this.u=!1!==b.classes}function ea(a){a.u&&t(a.h,[a.e.d(a.f,"loading")]);C(a,"loading")}function D(a){if(a.u){var b=u(a.h,a.e.d(a.f,"active")),c=[],d=[a.e.d(a.f,"loading")];b||c.push(a.e.d(a.f,"inactive"));t(a.h,c,d)}C(a,"inactive")}function C(a,b,c){if(a.Z&&a.J[b])if(c)a.J[b](c.getName(),B(c));else a.J[b]()};function fa(){this.t={}}function ga(a,b,c){var d=[],f;for(f in b)if(b.hasOwnProperty(f)){var e=a.t[f];e&&d.push(e(b[f],c))}return d};function E(a,b){this.a=a;this.q=b;this.j=this.a.createElement("span",{"aria-hidden":"true"},this.q)}
function G(a,b){var c=a.j,d;d=[];for(var f=b.V.split(/,\s*/),e=0;e<f.length;e++){var g=f[e].replace(/['"]/g,"");-1==g.indexOf(" ")?d.push(g):d.push("'"+g+"'")}d=d.join(",");f="normal";"o"===b.H?f="oblique":"i"===b.H&&(f="italic");c.style.cssText="display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+d+";"+("font-style:"+f+";font-weight:"+(b.N+"00")+";")}
function H(a){s(a.a,"body",a.j)}E.prototype.remove=function(){var a=this.j;a.parentNode&&a.parentNode.removeChild(a)};function I(a,b,c,d,f,e,g){this.O=a;this.ba=b;this.a=c;this.g=d;this.q=g||"BESbswy";this.s={};this.M=f||3E3;this.T=e||null;this.C=this.B=this.w=this.v=null;this.v=new E(this.a,this.q);this.w=new E(this.a,this.q);this.B=new E(this.a,this.q);this.C=new E(this.a,this.q);G(this.v,new A(this.g.getName()+",serif",B(this.g)));G(this.w,new A(this.g.getName()+",sans-serif",B(this.g)));G(this.B,new A("serif",B(this.g)));G(this.C,new A("sans-serif",B(this.g)));H(this.v);H(this.w);H(this.B);H(this.C)}
var J={ga:"serif",fa:"sans-serif"},K=null;function L(){if(null===K){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);K=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return K}I.prototype.start=function(){this.s.serif=this.B.j.offsetWidth;this.s["sans-serif"]=this.C.j.offsetWidth;this.ea=p();M(this)};function N(a,b,c){for(var d in J)if(J.hasOwnProperty(d)&&b===a.s[J[d]]&&c===a.s[J[d]])return!0;return!1}
function M(a){var b=a.v.j.offsetWidth,c=a.w.j.offsetWidth,d;(d=b===a.s.serif&&c===a.s["sans-serif"])||(d=L()&&N(a,b,c));d?p()-a.ea>=a.M?L()&&N(a,b,c)&&(null===a.T||a.T.hasOwnProperty(a.g.getName()))?O(a,a.O):O(a,a.ba):ha(a):O(a,a.O)}function ha(a){setTimeout(n(function(){M(this)},a),50)}function O(a,b){setTimeout(n(function(){this.v.remove();this.w.remove();this.B.remove();this.C.remove();b(this.g)},a),0)};function P(a,b,c){this.a=a;this.o=b;this.K=0;this.X=this.S=!1;this.M=c}P.prototype.$=function(a){var b=this.o;b.u&&t(b.h,[b.e.d(b.f,a.getName(),B(a).toString(),"active")],[b.e.d(b.f,a.getName(),B(a).toString(),"loading"),b.e.d(b.f,a.getName(),B(a).toString(),"inactive")]);C(b,"fontactive",a);this.X=!0;Q(this)};
P.prototype.aa=function(a){var b=this.o;if(b.u){var c=u(b.h,b.e.d(b.f,a.getName(),B(a).toString(),"active")),d=[],f=[b.e.d(b.f,a.getName(),B(a).toString(),"loading")];c||d.push(b.e.d(b.f,a.getName(),B(a).toString(),"inactive"));t(b.h,d,f)}C(b,"fontinactive",a);Q(this)};function Q(a){0==--a.K&&a.S&&(a.X?(a=a.o,a.u&&t(a.h,[a.e.d(a.f,"active")],[a.e.d(a.f,"loading"),a.e.d(a.f,"inactive")]),C(a,"active")):D(a.o))};function R(a){this.D=a;this.p=new fa;this.U=0;this.P=this.Q=!0}R.prototype.load=function(a){this.a=new r(this.D,a.context||this.D);this.Q=!1!==a.events;this.P=!1!==a.classes;ia(this,new da(this.a,a),a)};
function ja(a,b,c,d,f){var e=0==--a.U;(a.P||a.Q)&&setTimeout(function(){var a=f||null,l=d||null||{};if(0===c.length&&e)D(b.o);else{b.K+=c.length;e&&(b.S=e);var h,k=[];for(h=0;h<c.length;h++){var m=c[h],z=l[m.getName()],q=b.o,F=m;q.u&&t(q.h,[q.e.d(q.f,F.getName(),B(F).toString(),"loading")]);C(q,"fontloading",F);q=null;q=new I(n(b.$,b),n(b.aa,b),b.a,m,b.M,a,z);k.push(q)}for(h=0;h<k.length;h++)k[h].start()}},0)}
function ia(a,b,c){var d=[],f=c.timeout;ea(b);var d=ga(a.p,c,a.a),e=new P(a.a,b,f);a.U=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,c,d){ja(a,e,b,c,d)})};function S(a,b,c){this.I=a?a:b+ka;this.k=[];this.L=[];this.Y=c||""}var ka="//fonts.googleapis.com/css";S.prototype.d=function(){if(0==this.k.length)throw Error("No fonts to load!");if(-1!=this.I.indexOf("kit="))return this.I;for(var a=this.k.length,b=[],c=0;c<a;c++)b.push(this.k[c].replace(/ /g,"+"));a=this.I+"?family="+b.join("%7C");0<this.L.length&&(a+="&subset="+this.L.join(","));0<this.Y.length&&(a+="&text="+encodeURIComponent(this.Y));return a};function T(a){this.k=a;this.W=[];this.G={}}
var U={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},la={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ma={i:"i",italic:"i",n:"n",normal:"n"},na=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
T.prototype.parse=function(){for(var a=this.k.length,b=0;b<a;b++){var c=this.k[b].split(":"),d=c[0].replace(/\+/g," "),f=["n4"];if(2<=c.length){var e;var g=c[1];e=[];if(g)for(var g=g.split(","),l=g.length,h=0;h<l;h++){var k;k=g[h];if(k.match(/^[\w-]+$/))if(k=na.exec(k.toLowerCase()),null==k)k="";else{var m;m=k[1];if(null==m||""==m)m="4";else{var z=la[m];m=z?z:isNaN(m)?"4":m.substr(0,1)}k=k[2];k=[null==k||""==k?"n":ma[k],m].join("")}else k="";k&&e.push(k)}0<e.length&&(f=e);3==c.length&&(c=c[2],e=[],
c=c?c.split(","):e,0<c.length&&(c=U[c[0]])&&(this.G[d]=c))}this.G[d]||(c=U[d])&&(this.G[d]=c);for(c=0;c<f.length;c+=1)this.W.push(new A(d,f[c]))}};function V(a,b){this.a=a;this.c=b}var oa={Arimo:!0,Cousine:!0,Tinos:!0};V.prototype.load=function(a){for(var b=this.a,c=new S(this.c.api,v(b),this.c.text),d=this.c.families,f=d.length,e=0;e<f;e++){var g=d[e].split(":");3==g.length&&c.L.push(g.pop());var l="";2==g.length&&""!=g[1]&&(l=":");c.k.push(g.join(l))}d=new T(d);d.parse();w(b,c.d());a(d.W,d.G,oa)};function W(a,b){this.a=a;this.c=b;this.R=[]}W.prototype.A=function(a){var b=this.a;return v(this.a)+(this.c.api||"//f.fontdeck.com/s/css/js/")+(b.m.location.hostname||b.D.location.hostname)+"/"+a+".js"};
W.prototype.load=function(a){var b=this.c.id,c=this.a.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,l=c.fonts.length;g<l;++g){var h=c.fonts[g];d.R.push(new A(h.name,ca("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.R)},x(this.a,this.A(b),function(b){b&&a([])})):a([])};function X(a,b){this.a=a;this.c=b}X.prototype.A=function(a){return(this.c.api||"https://use.typekit.net")+"/"+a+".js"};X.prototype.load=function(a){var b=this.c.id,c=this.a.m;b?x(this.a,this.A(b),function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var f=[],e=0;e<b.length;e+=2)for(var g=b[e],l=b[e+1],h=0;h<l.length;h++)f.push(new A(g,l[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(k){}a(f)}},2E3):a([])};function Y(a,b){this.a=a;this.c=b}Y.prototype.A=function(a,b){var c=v(this.a),d=(this.c.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};Y.prototype.load=function(a){var b=this.c.projectId,c=this.c.version;if(b){var d=this.a.m;x(this.a,this.A(b,c),function(c){if(c)a([]);else if(d["__mti_fntLst"+b]){c=d["__mti_fntLst"+b]();var e=[];if(c)for(var g=0;g<c.length;g++)e.push(new A(c[g].fontfamily));a(e)}else a([])}).id="__MonotypeAPIScript__"+b}else a([])};function pa(a,b){this.a=a;this.c=b}pa.prototype.load=function(a){var b,c,d=this.c.urls||[],f=this.c.families||[],e=this.c.testStrings||{};b=0;for(c=d.length;b<c;b++)w(this.a,d[b]);d=[];b=0;for(c=f.length;b<c;b++){var g=f[b].split(":");if(g[1])for(var l=g[1].split(","),h=0;h<l.length;h+=1)d.push(new A(g[0],l[h]));else d.push(new A(g[0]))}a(d,e)};var Z=new R(window);Z.p.t.custom=function(a,b){return new pa(b,a)};Z.p.t.fontdeck=function(a,b){return new W(b,a)};Z.p.t.monotype=function(a,b){return new Y(b,a)};Z.p.t.typekit=function(a,b){return new X(b,a)};Z.p.t.google=function(a,b){return new V(b,a)};var $={load:n(Z.load,Z)};"function"===typeof define&&define.amd?define(function(){return $}):"undefined"!==typeof module&&module.exports?module.exports=$:(window.WebFont=$,window.WebFontConfig&&Z.load(window.WebFontConfig));}());

!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("object"==typeof exports&&"string"!=typeof exports.nodeName?exports:e.commonJsStrict={})}(this,function(e){function t(e){if(e in q)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=T.length;n--;)if((e=T[n]+t)in q)return e}function n(e,t){e=e||{};for(var i in t)t[i]&&t[i].constructor&&t[i].constructor===Object?(e[i]=e[i]||{},n(e[i],t[i])):e[i]=t[i];return e}function i(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function o(e,t,n){if("string"==typeof t){var i=t;(t={})[i]=n}for(var o in t)e.style[o]=t[o]}function r(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function a(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}function l(e,t){for(var n in t)e.setAttribute(n,t[n])}function s(e){return parseInt(e,10)}function u(e,t,n){var i=t||new Image;return i.style.opacity=0,new Promise(function(t){function o(){setTimeout(function(){t(i)},1)}i.src!==e?(i.exifdata=null,i.removeAttribute("crossOrigin"),e.match(/^https?:\/\/|^\/\//)&&i.setAttribute("crossOrigin","anonymous"),i.onload=function(){n?EXIF.getData(i,function(){o()}):o()},i.src=e):o()})}function c(e){var t=e.naturalWidth,n=e.naturalHeight;if(e.exifdata&&e.exifdata.Orientation>=5){var i=t;t=n,n=i}return{width:t,height:n}}function h(e){return e.exifdata.Orientation}function p(e,t,n){var i=t.width,o=t.height,r=e.getContext("2d");switch(e.width=t.width,e.height=t.height,r.save(),n){case 2:r.translate(i,0),r.scale(-1,1);break;case 3:r.translate(i,o),r.rotate(180*Math.PI/180);break;case 4:r.translate(0,o),r.scale(1,-1);break;case 5:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.scale(1,-1);break;case 6:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.translate(0,-o);break;case 7:e.width=o,e.height=i,r.rotate(-90*Math.PI/180),r.translate(-i,o),r.scale(1,-1);break;case 8:e.width=o,e.height=i,r.translate(0,i),r.rotate(-90*Math.PI/180)}r.drawImage(t,0,0,i,o),r.restore()}function d(){var e,t,n,i,a,s=this,u=s.options.viewport.type?"cr-vp-"+s.options.viewport.type:null;s.options.useCanvas=s.options.enableOrientation||m.call(s),s.data={},s.elements={},e=s.elements.boundary=document.createElement("div"),t=s.elements.viewport=document.createElement("div"),s.elements.img=document.createElement("img"),n=s.elements.overlay=document.createElement("div"),s.options.useCanvas?(s.elements.canvas=document.createElement("canvas"),s.elements.preview=s.elements.canvas):s.elements.preview=s.elements.img,r(e,"cr-boundary"),e.setAttribute("aria-dropeffect","none"),i=s.options.boundary.width,a=s.options.boundary.height,o(e,{width:i+(isNaN(i)?"":"px"),height:a+(isNaN(a)?"":"px")}),r(t,"cr-viewport"),u&&r(t,u),o(t,{width:s.options.viewport.width+"px",height:s.options.viewport.height+"px"}),t.setAttribute("tabindex",0),r(s.elements.preview,"cr-image"),l(s.elements.preview,{alt:"preview","aria-grabbed":"false"}),r(n,"cr-overlay"),s.element.appendChild(e),e.appendChild(s.elements.preview),e.appendChild(t),e.appendChild(n),r(s.element,"croppie-container"),s.options.customClass&&r(s.element,s.options.customClass),x.call(this),s.options.enableZoom&&g.call(s),s.options.enableResize&&f.call(s)}function m(){return this.options.enableExif&&window.EXIF}function f(){function e(e){if((void 0===e.button||0===e.button)&&(e.preventDefault(),!m)){var o=p.elements.overlay.getBoundingClientRect();if(m=!0,a=e.pageX,l=e.pageY,i=-1!==e.currentTarget.className.indexOf("vertical")?"v":"h",s=o.width,u=o.height,e.touches){var r=e.touches[0];a=r.pageX,l=r.pageY}window.addEventListener("mousemove",t),window.addEventListener("touchmove",t),window.addEventListener("mouseup",n),window.addEventListener("touchend",n),document.body.style[D]="none"}}function t(e){var t=e.pageX,n=e.pageY;if(e.preventDefault(),e.touches){var r=e.touches[0];t=r.pageX,n=r.pageY}var c=t-a,h=n-l,m=p.options.viewport.height+h,v=p.options.viewport.width+c;"v"===i&&m>=f&&m<=u?(o(d,{height:m+"px"}),p.options.boundary.height+=h,o(p.elements.boundary,{height:p.options.boundary.height+"px"}),p.options.viewport.height+=h,o(p.elements.viewport,{height:p.options.viewport.height+"px"})):"h"===i&&v>=f&&v<=s&&(o(d,{width:v+"px"}),p.options.boundary.width+=c,o(p.elements.boundary,{width:p.options.boundary.width+"px"}),p.options.viewport.width+=c,o(p.elements.viewport,{width:p.options.viewport.width+"px"})),C.call(p),B.call(p),b.call(p),E.call(p),l=n,a=t}function n(){m=!1,window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t),window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),document.body.style[D]=""}var i,a,l,s,u,c,h,p=this,d=document.createElement("div"),m=!1,f=50;r(d,"cr-resizer"),o(d,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(r(c=document.createElement("div"),"cr-resizer-vertical"),d.appendChild(c)),this.options.resizeControls.width&&(r(h=document.createElement("div"),"cr-resizer-horisontal"),d.appendChild(h)),c&&c.addEventListener("mousedown",e),h&&h.addEventListener("mousedown",e),this.elements.boundary.appendChild(d)}function v(e){if(this.options.enableZoom){var t=this.elements.zoomer,n=F(e,4);t.value=Math.max(t.min,Math.min(t.max,n))}}function g(){function e(){w.call(n,{value:parseFloat(o.value),origin:new $(n.elements.preview),viewportRect:n.elements.viewport.getBoundingClientRect(),transform:K.parse(n.elements.preview)})}function t(t){var i,o;i=t.wheelDelta?t.wheelDelta/1200:t.deltaY?t.deltaY/1060:t.detail?t.detail/-60:0,o=n._currentZoom+i*n._currentZoom,t.preventDefault(),v.call(n,o),e.call(n)}var n=this,i=n.elements.zoomerWrap=document.createElement("div"),o=n.elements.zoomer=document.createElement("input");r(i,"cr-slider-wrap"),r(o,"cr-slider"),o.type="range",o.step="0.0001",o.value=1,o.style.display=n.options.showZoomer?"":"none",o.setAttribute("aria-label","zoom"),n.element.appendChild(i),i.appendChild(o),n._currentZoom=1,n.elements.zoomer.addEventListener("input",e),n.elements.zoomer.addEventListener("change",e),n.options.mouseWheelZoom&&(n.elements.boundary.addEventListener("mousewheel",t),n.elements.boundary.addEventListener("DOMMouseScroll",t))}function w(e){function t(){var e={};e[P]=i.toString(),e[N]=a.toString(),o(n.elements.preview,e)}var n=this,i=e?e.transform:K.parse(n.elements.preview),r=e?e.viewportRect:n.elements.viewport.getBoundingClientRect(),a=e?e.origin:new $(n.elements.preview);if(n._currentZoom=e?e.value:n._currentZoom,i.scale=n._currentZoom,n.elements.zoomer.setAttribute("aria-valuenow",n._currentZoom),t(),n.options.enforceBoundary){var l=y.call(n,r),s=l.translate,u=l.origin;i.x>=s.maxX&&(a.x=u.minX,i.x=s.maxX),i.x<=s.minX&&(a.x=u.maxX,i.x=s.minX),i.y>=s.maxY&&(a.y=u.minY,i.y=s.maxY),i.y<=s.minY&&(a.y=u.maxY,i.y=s.minY)}t(),Q.call(n),E.call(n)}function y(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.elements.boundary.clientWidth/2,a=t.elements.boundary.clientHeight/2,l=t.elements.preview.getBoundingClientRect(),s=l.width,u=l.height,c=i/2,h=o/2,p=-1*(c/n-r),d=-1*(h/n-a),m=1/n*c,f=1/n*h;return{translate:{maxX:p,minX:p-(s*(1/n)-i*(1/n)),maxY:d,minY:d-(u*(1/n)-o*(1/n))},origin:{maxX:s*(1/n)-m,minX:m,maxY:u*(1/n)-f,minY:f}}}function b(){var e=this,t=e._currentZoom,n=e.elements.preview.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),r=K.parse(e.elements.preview.style[P]),a=new $(e.elements.preview),l=i.top-n.top+i.height/2,s=i.left-n.left+i.width/2,u={},c={};u.y=l/t,u.x=s/t,c.y=(u.y-a.y)*(1-t),c.x=(u.x-a.x)*(1-t),r.x-=c.x,r.y-=c.y;var h={};h[N]=u.x+"px "+u.y+"px",h[P]=r.toString(),o(e.elements.preview,h)}function x(){function e(e,t){var n=d.elements.preview.getBoundingClientRect(),i=p.y+t,o=p.x+e;d.options.enforceBoundary?(h.top>n.top+t&&h.bottom<n.bottom+t&&(p.y=i),h.left>n.left+e&&h.right<n.right+e&&(p.x=o)):(p.y=i,p.x=o)}function t(e){d.elements.preview.setAttribute("aria-grabbed",e),d.elements.boundary.setAttribute("aria-dropeffect",e?"move":"none")}function n(t){var n={};e(t[0],t[1]),n[P]=p.toString(),o(d.elements.preview,n),C.call(d),document.body.style[D]="",b.call(d),E.call(d),c=0}function r(e){if((void 0===e.button||0===e.button)&&(e.preventDefault(),!m)){if(m=!0,s=e.pageX,u=e.pageY,e.touches){var n=e.touches[0];s=n.pageX,u=n.pageY}t(m),p=K.parse(d.elements.preview),window.addEventListener("mousemove",a),window.addEventListener("touchmove",a),window.addEventListener("mouseup",l),window.addEventListener("touchend",l),document.body.style[D]="none",h=d.elements.viewport.getBoundingClientRect()}}function a(t){t.preventDefault();var n=t.pageX,r=t.pageY;if(t.touches){var a=t.touches[0];n=a.pageX,r=a.pageY}var l=n-s,h=r-u,m={};if("touchmove"==t.type&&t.touches.length>1){var f=t.touches[0],g=t.touches[1],w=Math.sqrt((f.pageX-g.pageX)*(f.pageX-g.pageX)+(f.pageY-g.pageY)*(f.pageY-g.pageY));c||(c=w/d._currentZoom);var y=w/c;return v.call(d,y),void i(d.elements.zoomer)}e(l,h),m[P]=p.toString(),o(d.elements.preview,m),C.call(d),u=r,s=n}function l(){t(m=!1),window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",l),window.removeEventListener("touchend",l),document.body.style[D]="",b.call(d),E.call(d),c=0}var s,u,c,h,p,d=this,m=!1;d.elements.overlay.addEventListener("mousedown",r),d.elements.viewport.addEventListener("keydown",function(e){var t=37,i=38,o=39,r=40;if(!e.shiftKey||e.keyCode!=i&&e.keyCode!=r){if(d.options.enableKeyMovement&&e.keyCode>=37&&e.keyCode<=40){e.preventDefault();var a=function(n){switch(e.keyCode){case t:return[1,0];case i:return[0,1];case o:return[-1,0];case r:return[0,-1]}}();p=K.parse(d.elements.preview),document.body.style[D]="none",h=d.elements.viewport.getBoundingClientRect(),n(a)}}else{var l=0;l=e.keyCode==i?parseFloat(d.elements.zoomer.value,10)+parseFloat(d.elements.zoomer.step,10):parseFloat(d.elements.zoomer.value,10)-parseFloat(d.elements.zoomer.step,10),d.setZoom(l)}}),d.elements.overlay.addEventListener("touchstart",r)}function C(){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.preview.getBoundingClientRect();o(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}function E(){var e=this,t=e.get();if(_.call(e))if(e.options.update.call(e,t),e.$&&"undefined"==typeof Prototype)e.$(e.element).trigger("update",t);else{var n;window.CustomEvent?n=new CustomEvent("update",{detail:t}):(n=document.createEvent("CustomEvent")).initCustomEvent("update",!0,!0,t),e.element.dispatchEvent(n)}}function _(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function L(){var e=this,t={},n=e.elements.preview,i=e.elements.preview.getBoundingClientRect(),r=new K(0,0,1),a=new $;_.call(e)&&!e.data.bound&&(e.data.bound=!0,t[P]=r.toString(),t[N]=a.toString(),t.opacity=1,o(n,t),e._originalImageWidth=i.width,e._originalImageHeight=i.height,e.options.enableZoom?B.call(e,!0):e._currentZoom=1,r.scale=e._currentZoom,t[P]=r.toString(),o(n,t),e.data.points.length?R.call(e,e.data.points):I.call(e),b.call(e),C.call(e))}function B(e){var t,n,o,r,a=this,l=0,s=1.5,u=a.elements.zoomer,c=parseFloat(u.value),h=a.elements.boundary.getBoundingClientRect(),p=a.elements.preview.getBoundingClientRect(),d=a.elements.viewport.getBoundingClientRect();a.options.enforceBoundary&&(o=d.width/(e?p.width:p.width/c),r=d.height/(e?p.height:p.height/c),l=Math.max(o,r)),l>=s&&(s=l+1),u.min=F(l,4),u.max=F(s,4),e&&(n=Math.max(h.width/p.width,h.height/p.height),t=null!==a.data.boundZoom?a.data.boundZoom:n,v.call(a,t)),i(u)}function R(e){if(4!=e.length)throw"Croppie - Invalid number of points supplied: "+e;var t=this,n=e[2]-e[0],i=t.elements.viewport.getBoundingClientRect(),r=t.elements.boundary.getBoundingClientRect(),a={left:i.left-r.left,top:i.top-r.top},l=i.width/n,s=e[1],u=e[0],c=-1*e[1]+a.top,h=-1*e[0]+a.left,p={};p[N]=u+"px "+s+"px",p[P]=new K(h,c,l).toString(),o(t.elements.preview,p),v.call(t,l),t._currentZoom=l}function I(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=e.elements.boundary.getBoundingClientRect(),r=n.left-i.left,a=n.top-i.top,l=r-(t.width-n.width)/2,s=a-(t.height-n.height)/2,u=new K(l,s,e._currentZoom);o(e.elements.preview,P,u.toString())}function M(e){var t=this,n=t.elements.canvas,i=t.elements.img,o=n.getContext("2d"),r=m.call(t),e=t.options.enableOrientation&&e;o.clearRect(0,0,n.width,n.height),n.width=i.width,n.height=i.height,r&&!e?p(n,i,s(h(i)||0,10)):e&&p(n,i,e)}function Z(e){var t=this,n=e.points,i=s(n[0]),o=s(n[1]),r=s(n[2]),a=s(n[3]),l=r-i,u=a-o,c=e.circle,h=document.createElement("canvas"),p=h.getContext("2d"),d=l,m=u,f=0,v=0,g=d,w=m,y=1;return e.outputWidth&&e.outputHeight&&(g=e.outputWidth,w=e.outputHeight,y=g/d),h.width=g,h.height=w,e.backgroundColor&&(p.fillStyle=e.backgroundColor,p.fillRect(0,0,d,m)),t.options.enforceBoundary||(i<0&&(f=Math.abs(i),i=0),o<0&&(v=Math.abs(o),o=0),r>t._originalImageWidth&&(d=l=t._originalImageWidth-i),a>t._originalImageHeight&&(m=u=t._originalImageHeight-o)),1!==y&&(f*=y,v*=y,d*=y,m*=y),p.drawImage(this.elements.preview,i,o,Math.min(l,t._originalImageWidth),Math.min(u,t._originalImageHeight),f,v,d,m),c&&(p.fillStyle="#fff",p.globalCompositeOperation="destination-in",p.beginPath(),p.arc(d/2,m/2,d/2,0,2*Math.PI,!0),p.closePath(),p.fill()),h}function z(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),a=t[2]-t[0],l=t[3]-t[1];return r(n,"croppie-result"),n.appendChild(i),o(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,o(n,{width:a+"px",height:l+"px"}),n}function Y(e){return Z.call(this,e).toDataURL(e.format,e.quality)}function W(e){var t=this;return new Promise(function(n,i){Z.call(t,e).toBlob(function(e){n(e)},e.format,e.quality)})}function X(e,t){var n,i=this,o=[],r=null,a=m.call(i);if("string"==typeof e)n=e,e={};else if(Array.isArray(e))o=e.slice();else{if(void 0===e&&i.data.url)return L.call(i),E.call(i),null;n=e.url,o=e.points||[],r=void 0===e.zoom?null:e.zoom}return i.data.bound=!1,i.data.url=n||i.data.url,i.data.boundZoom=r,u(n,i.elements.img,a).then(function(n){if(o.length)i.options.relative&&(o=[o[0]*n.naturalWidth/100,o[1]*n.naturalHeight/100,o[2]*n.naturalWidth/100,o[3]*n.naturalHeight/100]);else{var r,a,l=c(n),s=i.elements.viewport.getBoundingClientRect(),u=s.width/s.height;l.width/l.height>u?r=(a=l.height)*u:a=(r=l.width)/u;var h=(l.width-r)/2,p=(l.height-a)/2,d=h+r,m=p+a;i.data.points=[h,p,d,m]}i.data.points=o.map(function(e){return parseFloat(e)}),i.options.useCanvas&&M.call(i,e.orientation||1),L.call(i),E.call(i),t&&t()})}function F(e,t){return parseFloat(e).toFixed(t||0)}function H(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=(n.width-e.elements.viewport.offsetWidth)/2,a=(n.height-e.elements.viewport.offsetHeight)/2,l=i+e.elements.viewport.offsetWidth+r,s=o+e.elements.viewport.offsetHeight+a,u=e._currentZoom;(u===1/0||isNaN(u))&&(u=1);var c=e.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(c,i/u),o=Math.max(c,o/u),l=Math.max(c,l/u),s=Math.max(c,s/u),{points:[F(i),F(o),F(l),F(s)],zoom:u}}function k(e){var t=this,i=H.call(t),o=n(G,n({},e)),r="string"==typeof e?e:o.type||"base64",a=o.size||"viewport",l=o.format,s=o.quality,u=o.backgroundColor,c="boolean"==typeof o.circle?o.circle:"circle"===t.options.viewport.type,h=t.elements.viewport.getBoundingClientRect(),p=h.width/h.height;return"viewport"===a?(i.outputWidth=h.width,i.outputHeight=h.height):"object"==typeof a&&(a.width&&a.height?(i.outputWidth=a.width,i.outputHeight=a.height):a.width?(i.outputWidth=a.width,i.outputHeight=a.width/p):a.height&&(i.outputWidth=a.height*p,i.outputHeight=a.height)),J.indexOf(l)>-1&&(i.format="image/"+l,i.quality=s),i.circle=c,i.url=t.data.url,i.backgroundColor=u,new Promise(function(e,n){switch(r.toLowerCase()){case"rawcanvas":e(Z.call(t,i));break;case"canvas":case"base64":e(Y.call(t,i));break;case"blob":W.call(t,i).then(e);break;default:e(z.call(t,i))}})}function j(){L.call(this)}function A(e){if(!this.options.useCanvas)throw"Croppie: Cannot rotate without enableOrientation";var t=this,n=t.elements.canvas,i=document.createElement("canvas"),o=1;i.width=n.width,i.height=n.height,i.getContext("2d").drawImage(n,0,0),90!==e&&-270!==e||(o=6),-90!==e&&270!==e||(o=8),180!==e&&-180!==e||(o=3),p(n,i,o),w.call(t),i=null}function S(){var e=this;e.element.removeChild(e.elements.boundary),a(e.element,"croppie-container"),e.options.enableZoom&&e.element.removeChild(e.elements.zoomerWrap),delete e.elements}function O(e,t){if(this.element=e,this.options=n(n({},O.defaults),t),"img"===this.element.tagName.toLowerCase()){var i=this.element;r(i,"cr-original-image"),l(i,{"aria-hidden":"true",alt:""});var o=document.createElement("div");this.element.parentNode.appendChild(o),o.appendChild(i),this.element=o,this.options.url=this.options.url||i.src}if(d.call(this),this.options.url){var a={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,X.call(this,a)}}"function"!=typeof Promise&&function(e){function t(e,t){return function(){e.apply(t,arguments)}}function n(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(e,t(o,this),t(r,this))}function i(e){var t=this;return null===this._state?void this._deferreds.push(e):void c(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null!==n){var i;try{i=n(t._value)}catch(t){return void e.reject(t)}e.resolve(i)}else(t._state?e.resolve:e.reject)(t._value)})}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void s(t(n,e),t(o,this),t(r,this))}this._state=!0,this._value=e,a.call(this)}catch(e){r.call(this,e)}}function r(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;t>e;e++)i.call(this,this._deferreds[e]);this._deferreds=null}function l(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function s(e,t,n){var i=!1;try{e(function(e){i||(i=!0,t(e))},function(e){i||(i=!0,n(e))})}catch(e){if(i)return;i=!0,n(e)}}var u=setTimeout,c="function"==typeof setImmediate&&setImmediate||function(e){u(e,1)},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var o=this;return new n(function(n,r){i.call(o,new l(e,t,n,r))})},n.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&h(arguments[0])?arguments[0]:arguments);return new n(function(t,n){function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var l=a.then;if("function"==typeof l)return void l.call(a,function(e){i(r,e)},n)}e[r]=a,0==--o&&t(e)}catch(e){n(e)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])})},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n(function(t){t(e)})},n.reject=function(e){return new n(function(t,n){n(e)})},n.race=function(e){return new n(function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)})},n._setImmediateFn=function(e){c=e},"undefined"!=typeof module&&module.exports?module.exports=n:e.Promise||(e.Promise=n)}(this),"function"!=typeof window.CustomEvent&&function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var i=atob(this.toDataURL(t,n).split(",")[1]),o=i.length,r=new Uint8Array(o),a=0;a<o;a++)r[a]=i.charCodeAt(a);e(new Blob([r],{type:t||"image/png"}))}});var N,P,D,T=["Webkit","Moz","ms"],q=document.createElement("div").style;P=t("transform"),N=t("transformOrigin"),D=t("userSelect");var U={translate3d:{suffix:", 0px"},translate:{suffix:""}},K=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};K.parse=function(e){return e.style?K.parse(e.style[P]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?K.fromMatrix(e):K.fromString(e)},K.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new K(s(t[4]),s(t[5]),parseFloat(t[0]))},K.fromString=function(e){var t=e.split(") "),n=t[0].substring(O.globals.translate.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new K(o,r,i)},K.prototype.toString=function(){var e=U[O.globals.translate].suffix||"";return O.globals.translate+"("+this.x+"px, "+this.y+"px"+e+") scale("+this.scale+")"};var $=function(e){if(!e||!e.style[N])return this.x=0,void(this.y=0);var t=e.style[N].split(" ");this.x=parseFloat(t[0]),this.y=parseFloat(t[1])};$.prototype.toString=function(){return this.x+"px "+this.y+"px"};var Q=function(e,t,n){var i;return function(){var o=this,r=arguments,a=n&&!i;clearTimeout(i),i=setTimeout(function(){i=null,n||e.apply(o,r)},t),a&&e.apply(o,r)}}(C,500),G={type:"canvas",format:"png",quality:1},J=["jpeg","webp","png"];if(window.jQuery){var V=window.jQuery;V.fn.croppie=function(e){if("string"===typeof e){var t=Array.prototype.slice.call(arguments,1),n=V(this).data("croppie");return"get"===e?n.get():"result"===e?n.result.apply(n,t):"bind"===e?n.bind.apply(n,t):this.each(function(){var n=V(this).data("croppie");if(n){var i=n[e];if(!V.isFunction(i))throw"Croppie "+e+" method not found";i.apply(n,t),"destroy"===e&&V(this).removeData("croppie")}})}return this.each(function(){var t=new O(this,e);t.$=V,V(this).data("croppie",t)})}}O.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},O.globals={translate:"translate3d"},n(O.prototype,{bind:function(e,t){return X.call(this,e,t)},get:function(){var e=H.call(this),t=e.points;return this.options.relative&&(t[0]/=this.elements.img.naturalWidth/100,t[1]/=this.elements.img.naturalHeight/100,t[2]/=this.elements.img.naturalWidth/100,t[3]/=this.elements.img.naturalHeight/100),e},result:function(e){return k.call(this,e)},refresh:function(){return j.call(this)},setZoom:function(e){v.call(this,e),i(this.elements.zoomer)},rotate:function(e){A.call(this,e)},destroy:function(){return S.call(this)}}),e.Croppie=window.Croppie=O,"object"==typeof module&&module.exports&&(module.exports=O)});
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function($,e,t,n){var o="simpleSocialShare",i="plugin_"+o,r={init:function(e,t){var n=this;return n.options=$.extend(!0,{},$.fn[o].options,e),n.namespace="."+o+"."+(new Date).getTime(),n.element=t,n.$element=$(t),n.allowedNetworks=["facebook","twitter","linkedin","googleplus","pinterest","reddit"],n.bind(),n},bind:function(){var e=this;e.bindProxied(e.$element,"click",e.openSocialSharePopup)},bindProxied:function(e,t,n){var o=this;e.on(t+o.namespace,$.proxy(function(e){return n.call(o,e)},o))},destroy:function(){var e=this;e.$element.off(e.namespace),e.$element.removeData(i)},openSocialSharePopup:function(e){e.preventDefault();var t=this,n=!1,o=t.$element.data("share-url"),i=t.$element.data("share-network"),r=t.$element.data("share-text"),a=t.$element.data("share-title"),d=t.$element.data("share-via"),c=t.$element.data("share-tags"),s=t.$element.data("share-media"),p="";if("undefined"!=typeof o&&"undefined"!=typeof i&&t.allowedNetworks.indexOf(i)>-1&&(n=!0),n===!0)switch(i){case"facebook":p="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(o);break;case"googleplus":p="https://plus.google.com/share?url="+encodeURIComponent(o);break;case"linkedin":p="https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(o)+"&source="+encodeURIComponent(o),"undefined"!=typeof a&&""!==a&&(p+="&title="+encodeURIComponent(a)),"undefined"!=typeof r&&""!==r&&(p+="&summary="+encodeURIComponent(r));break;case"pinterest":p="https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(o),"undefined"!=typeof s&&""!==s&&(p+="&media="+encodeURIComponent(s)),"undefined"!=typeof r&&""!==r&&(p+="&description="+encodeURIComponent(r)),"undefined"!=typeof c&&""!==c&&(p+="&hashtags="+c);break;case"reddit":p="http://www.reddit.com/submit/?url="+encodeURIComponent(o);break;case"twitter":p="https://twitter.com/intent/tweet?&url="+encodeURIComponent(o),"undefined"!=typeof r&&""!==r&&(p+="&text="+encodeURIComponent(r)),"undefined"!=typeof d&&""!==d&&(p+="&via="+encodeURIComponent(d)),"undefined"!=typeof c&&""!==c&&(p+="&hashtags="+c);break;default:return!1}n&&t.popupwindow(p,"",500,300)},popupwindow:function(t,n,o,i){var r=screen.width/2-o/2,a=screen.height/2-i/2;return e.open(t,n,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+o+", height="+i+", top="+a+", left="+r)}};$.fn[o]=function(e){var t=Array.prototype.slice.call(arguments);return this.each(function(){var n=$.data(this,i);if("object"!=typeof e&&"init"!==e&&e){if(!n)return void $.error("Simple Social Share is not initialized for this object yet.");if(!n[e])return void $.error("Method "+e+" does not exist on jQuery."+o+".");var a=e;e=t.slice(1),n[a].apply(n,e)}else{if(n)return void $.error("Simple Social Share is already initialized for this object.");"init"===e&&(e=t[1]||{}),n=Object.create(r).init(e,this),$.data(this,i,n)}})}}(jQuery,window,document);
//# sourceMappingURL=./jquery.simpleSocialShare.min.js.map
/* Zepto v1.0rc1 - polyfill zepto event detect fx ajax form touch - zeptojs.com/license */
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function A(a){return v.call(a)=="[object Function]"}function B(a){return a instanceof Object}function C(b){var c,d;if(v.call(b)!=="[object Object]")return!1;d=A(b.constructor)&&b.constructor.prototype;if(!d||!hasOwnProperty.call(d,"isPrototypeOf"))return!1;for(c in b);return c===a||hasOwnProperty.call(b,c)}function D(a){return a instanceof Array}function E(a){return typeof a.length=="number"}function F(b){return b.filter(function(b){return b!==a&&b!==null})}function G(a){return a.length>0?[].concat.apply([],a):a}function H(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(a){return a in i?i[a]:i[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function J(a,b){return typeof b=="number"&&!k[H(a)]?b+"px":b}function K(a){var b,c;return h[a]||(b=g.createElement(a),g.body.appendChild(b),c=j(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),h[a]=c),h[a]}function L(b,d){return d===a?c(b):c(b).filter(d)}function M(a,b,c,d){return A(b)?b.call(a,c,d):b}function N(a,b,d){var e=a%2?b:b.parentNode;e?e.insertBefore(d,a?a==1?e.firstChild:a==2?b:null:b.nextSibling):c(d).remove()}function O(a,b){b(a);for(var c in a.childNodes)O(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=window.document,h={},i={},j=g.defaultView.getComputedStyle,k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,m=[1,3,8,9,11],n=["after","prepend","before","append"],o=g.createElement("table"),p=g.createElement("tr"),q={tr:g.createElement("tbody"),tbody:o,thead:o,tfoot:o,td:p,th:p,"*":g.createElement("div")},r=/complete|loaded|interactive/,s=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,u=/^[\w-]+$/,v={}.toString,w={},x,y,z=g.createElement("div");return w.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=z).appendChild(a),d=~w.qsa(e,b).indexOf(a),f&&z.removeChild(a),d},x=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},y=function(a){return a.filter(function(b,c){return a.indexOf(b)==c})},w.fragment=function(b,d){d===a&&(d=l.test(b)&&RegExp.$1),d in q||(d="*");var e=q[d];return e.innerHTML=""+b,c.each(f.call(e.childNodes),function(){e.removeChild(this)})},w.Z=function(a,b){return a=a||[],a.__proto__=arguments.callee.prototype,a.selector=b||"",a},w.isZ=function(a){return a instanceof w.Z},w.init=function(b,d){if(!b)return w.Z();if(A(b))return c(g).ready(b);if(w.isZ(b))return b;var e;if(D(b))e=F(b);else if(C(b))e=[c.extend({},b)],b=null;else if(m.indexOf(b.nodeType)>=0||b===window)e=[b],b=null;else if(l.test(b))e=w.fragment(b.trim(),RegExp.$1),b=null;else{if(d!==a)return c(d).find(b);e=w.qsa(g,b)}return w.Z(e,b)},c=function(a,b){return w.init(a,b)},c.extend=function(c){return f.call(arguments,1).forEach(function(d){for(b in d)d[b]!==a&&(c[b]=d[b])}),c},w.qsa=function(a,b){var c;return a===g&&t.test(b)?(c=a.getElementById(RegExp.$1))?[c]:e:a.nodeType!==1&&a.nodeType!==9?e:f.call(s.test(b)?a.getElementsByClassName(RegExp.$1):u.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.isFunction=A,c.isObject=B,c.isArray=D,c.isPlainObject=C,c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.trim=function(a){return a.trim()},c.uuid=0,c.map=function(a,b){var c,d=[],e,f;if(E(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return G(d)},c.each=function(a,b){var c,d;if(E(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,indexOf:e.indexOf,concat:e.concat,map:function(a){return c.map(this,function(b,c){return a.call(b,c,b)})},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return r.test(g.readyState)?a(c):g.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return this.forEach(function(b,c){a.call(b,c,b)}),this},filter:function(a){return c([].filter.call(this,function(b){return w.matches(b,a)}))},add:function(a,b){return c(y(this.concat(c(a,b))))},is:function(a){return this.length>0&&w.matches(this[0],a)},not:function(b){var d=[];if(A(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):E(b)&&A(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!B(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!B(a)?a:c(a)},find:function(a){var b;return this.length==1?b=w.qsa(this[0],a):b=this.map(function(){return w.qsa(this,a)}),c(b)},closest:function(a,b){var d=this[0];while(d&&!w.matches(d,a))d=d!==b&&d!==g&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&a!==g&&b.indexOf(a)<0)return b.push(a),a});return L(b,a)},parent:function(a){return L(y(this.pluck("parentNode")),a)},children:function(a){return L(this.map(function(){return f.call(this.children)}),a)},siblings:function(a){return L(this.map(function(a,b){return f.call(b.parentNode.children).filter(function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return this.map(function(){return this[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),j(this,"").getPropertyValue("display")=="none"&&(this.style.display=K(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){return this.each(function(){c(this).wrapAll(c(a)[0].cloneNode(!1))})},wrapAll:function(a){return this[0]&&(c(this[0]).before(a=c(a)),a.append(this)),this},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return c(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(b){return(b===a?this.css("display")=="none":b)?this.show():this.hide()},prev:function(){return c(this.pluck("previousElementSibling"))},next:function(){return c(this.pluck("nextElementSibling"))},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(M(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(B(c))for(b in c)this.setAttribute(b,c[b]);else this.setAttribute(c,M(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&this.removeAttribute(a)})},prop:function(b,c){return c===a?this[0]?this[0][b]:a:this.each(function(a){this[b]=M(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+H(b),c);return d!==null?d:a},val:function(b){return b===a?this.length>0?this[0].value:a:this.each(function(a){this.value=M(this,b,a,this.value)})},offset:function(){if(this.length==0)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(c,d){if(d===a&&typeof c=="string")return this.length==0?a:this[0].style[x(c)]||j(this[0],"").getPropertyValue(c);var e="";for(b in c)typeof c[b]=="string"&&c[b]==""?this.each(function(){this.style.removeProperty(H(b))}):e+=H(b)+":"+J(b,c[b])+";";return typeof c=="string"&&(d==""?this.each(function(){this.style.removeProperty(H(c))}):e=H(c)+":"+J(c,d)),this.each(function(){this.style.cssText+=";"+e})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return this.length<1?!1:I(a).test(this[0].className)},addClass:function(a){return this.each(function(b){d=[];var e=this.className,f=M(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&(this.className+=(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return this.className="";d=this.className,M(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(I(a)," ")}),this.className=d.trim()})},toggleClass:function(b,d){return this.each(function(e){var f=M(this,b,e,this.className);(d===a?!c(this).hasClass(f):d)?c(this).addClass(f):c(this).removeClass(f)})}},["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?this[0]==window?window["inner"+f]:this[0]==g?g.documentElement["offset"+f]:(e=this.offset())&&e[b]:this.each(function(a){var e=c(this);e.css(b,M(this,d,a,e[b]()))})}}),n.forEach(function(a,b){c.fn[a]=function(){var a=c.map(arguments,function(a){return B(a)?a:w.fragment(a)});if(a.length<1)return this;var d=this.length,e=d>1,f=b<2;return this.each(function(c,g){for(var h=0;h<a.length;h++){var i=a[f?a.length-h-1:h];O(i,function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&window.eval.call(window,a.innerHTML)}),e&&c<d-1&&(i=i.cloneNode(!0)),N(b,g,i)}})},c.fn[b%2?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),w.Z.prototype=c.fn,w.camelize=x,w.uniq=y,c.zepto=w,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function f(a){return a._zid||(a._zid=d++)}function g(a,b,d,e){b=h(b);if(b.ns)var g=i(b.ns);return(c[f(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||g.test(a.ns))&&(!d||f(a.fn)===f(d))&&(!e||a.sel==e)})}function h(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function i(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function j(b,c,d){a.isObject(b)?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function k(b,d,e,g,i,k){k=!!k;var l=f(b),m=c[l]||(c[l]=[]);j(d,e,function(c,d){var e=i&&i(d,c),f=e||d,j=function(a){var c=f.apply(b,[a].concat(a.data));return c===!1&&a.preventDefault(),c},l=a.extend(h(c),{fn:d,proxy:j,sel:g,del:e,i:m.length});m.push(l),b.addEventListener(l.e,j,k)})}function l(a,b,d,e){var h=f(a);j(b||"",d,function(b,d){g(a,b,d,e).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.proxy,!1)})})}function p(b){var c=a.extend({originalEvent:b},b);return a.each(o,function(a,d){c[a]=function(){return this[d]=m,b[a].apply(b,arguments)},c[d]=n}),c}function q(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:k,remove:l},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=f(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){k(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){l(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){k(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return l(d,b,a),c}})})};var m=function(){return!0},n=function(){return!1},o={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){var e=!1;if(c=="blur"||c=="focus")a.iswebkit?c=c=="blur"?"focusout":c=="focus"?"focusin":c:e=!0;return this.each(function(f,g){k(g,c,d,b,function(c){return function(d){var e,f=a(d.target).closest(b,g).get(0);if(f)return e=a.extend(p(d),{currentTarget:f,liveFired:g}),c.apply(f,[e].concat([].slice.call(arguments,1)))}},e)})},a.fn.undelegate=function(a,b,c){return this.each(function(){l(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return c==undefined||a.isFunction(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return c==undefined||a.isFunction(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){return typeof b=="string"&&(b=a.Event(b)),q(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,h){d=p(typeof b=="string"?a.Event(b):b),d.data=c,d.target=h,a.each(g(h,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){if(a)this.bind(b,a);else if(this.length)try{this.get(0)[b]()}catch(c){}return this}}),a.Event=function(a,b){var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c}}(Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0)}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a,b){function l(a){return a.toLowerCase()}function m(a){return d?d+a:l(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+l(a)+"-",d=e,!1}),k[c+"transition-property"]=k[c+"transition-duration"]=k[c+"transition-timing-function"]=k[c+"animation-name"]=k[c+"animation-duration"]="",a.fx={off:d===b&&i.style.transitionProperty===b,cssPrefix:c,transitionEnd:m("TransitionEnd"),animationEnd:m("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c/=1e3),this.anim(b,c,d,e)},a.fn.anim=function(d,e,f,g){var h,i={},l,m=this,n,o=a.fx.transitionEnd;e===b&&(e=.4),a.fx.off&&(e=0);if(typeof d=="string")i[c+"animation-name"]=d,i[c+"animation-duration"]=e+"s",o=a.fx.animationEnd;else{for(l in d)j.test(l)?(h||(h=[]),h.push(l+"("+d[l]+")")):i[l]=d[l];h&&(i[c+"transform"]=h.join(" ")),!a.fx.off&&typeof d=="object"&&(i[c+"transition-property"]=Object.keys(d).join(", "),i[c+"transition-duration"]=e+"s",i[c+"transition-timing-function"]=f||"linear")}return n=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(o,arguments.callee)}a(this).css(k),g&&g.call(this)},e>0&&this.bind(o,n),setTimeout(function(){m.css(i),e<=0&&setTimeout(function(){m.each(function(){n.call(this)})},0)},0),this},i=null}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){isObject(a.data)&&(a.data=$.param(a.data)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function serialize(a,b,c,d){var e=$.isArray(b);$.each(b,function(b,f){d&&(b=c?d:d+"["+(e?"":b)+"]"),!d&&e?a.add(f.name,f.value):(c?$.isArray(f):isObject(f))?serialize(a,f,c,b):a.add(b,f)})}var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){$(c).remove(),b in window&&(window[b]=empty),ajaxComplete("abort",e,a)},e={abort:d},f;return a.error&&(c.onerror=function(){e.abort(),a.error()}),window[b]=function(d){clearTimeout(f),$(c).remove(),delete window[b],ajaxSuccess(d,e,a)},serializeData(a),c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(f=setTimeout(function(){e.abort(),ajaxComplete("timeout",e,a)},a.timeout)),e},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host);var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);settings.url||(settings.url=window.location.toString()),serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:JSON.parse(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,"error",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b){return $.ajax({url:a,success:b})},$.post=function(a,b,c,d){return $.isFunction(b)&&(d=d||c,c=b,b=null),$.ajax({type:"POST",url:a,data:b,success:c,dataType:d})},$.getJSON=function(a,b){return $.ajax({url:a,success:b,dataType:"json"})},$.fn.load=function(a,b){if(!this.length)return this;var c=this,d=a.split(/\s/),e;return d.length>1&&(a=d[0],e=d[1]),$.get(a,function(a){c.html(e?$(document.createElement("div")).html(a.replace(rscript,"")).find(e).html():a),b&&b.call(c)}),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace("%20","+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a){function d(a){return"tagName"in a?a:a.parentNode}function e(a,b,c,d){var e=Math.abs(a-b),f=Math.abs(c-d);return e>=f?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function h(){g=null,b.last&&(b.el.trigger("longTap"),b={})}function i(){g&&clearTimeout(g),g=null}var b={},c,f=750,g;a(document).ready(function(){var j,k;a(document.body).bind("touchstart",function(e){j=Date.now(),k=j-(b.last||j),b.el=a(d(e.touches[0].target)),c&&clearTimeout(c),b.x1=e.touches[0].pageX,b.y1=e.touches[0].pageY,k>0&&k<=250&&(b.isDoubleTap=!0),b.last=j,g=setTimeout(h,f)}).bind("touchmove",function(a){i(),b.x2=a.touches[0].pageX,b.y2=a.touches[0].pageY}).bind("touchend",function(a){i(),b.isDoubleTap?(b.el.trigger("doubleTap"),b={}):b.x2&&Math.abs(b.x1-b.x2)>30||b.y2&&Math.abs(b.y1-b.y2)>30?(b.el.trigger("swipe")&&b.el.trigger("swipe"+e(b.x1,b.x2,b.y1,b.y2)),b={}):"last"in b&&(b.el.trigger("tap"),c=setTimeout(function(){c=null,b.el.trigger("singleTap"),b={}},250))}).bind("touchcancel",function(){c&&clearTimeout(c),g&&clearTimeout(g),g=c=null,b={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto);
/*
 * Binary Ajax 0.1.10
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */

var BinaryFile = function(strData, iDataOffset, iDataLength) {
    var data = strData;
    var dataOffset = iDataOffset || 0;
    var dataLength = 0;

    this.getRawData = function() {
        return data;
    }

    if (typeof strData == "string") {
        dataLength = iDataLength || data.length;

        this.getByteAt = function(iOffset) {
            return data.charCodeAt(iOffset + dataOffset) & 0xFF;
        }

        this.getBytesAt = function(iOffset, iLength) {
            var aBytes = [];

            for (var i = 0; i < iLength; i++) {
                aBytes[i] = data.charCodeAt((iOffset + i) + dataOffset) & 0xFF
            }
            ;

            return aBytes;
        }
    } else if (typeof strData == "unknown") {
        dataLength = iDataLength || IEBinary_getLength(data);

        this.getByteAt = function(iOffset) {
            return IEBinary_getByteAt(data, iOffset + dataOffset);
        }

        this.getBytesAt = function(iOffset, iLength) {
            return new VBArray(IEBinary_getBytesAt(data, iOffset + dataOffset, iLength)).toArray();
        }
    }

    this.getLength = function() {
        return dataLength;
    }

    this.getSByteAt = function(iOffset) {
        var iByte = this.getByteAt(iOffset);
        if (iByte > 127)
            return iByte - 256;
        else
            return iByte;
    }

    this.getShortAt = function(iOffset, bBigEndian) {
        var iShort = bBigEndian ?
                (this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1)
                : (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset)
        if (iShort < 0)
            iShort += 65536;
        return iShort;
    }
    this.getSShortAt = function(iOffset, bBigEndian) {
        var iUShort = this.getShortAt(iOffset, bBigEndian);
        if (iUShort > 32767)
            return iUShort - 65536;
        else
            return iUShort;
    }
    this.getLongAt = function(iOffset, bBigEndian) {
        var iByte1 = this.getByteAt(iOffset),
                iByte2 = this.getByteAt(iOffset + 1),
                iByte3 = this.getByteAt(iOffset + 2),
                iByte4 = this.getByteAt(iOffset + 3);

        var iLong = bBigEndian ?
                (((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4
                : (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
        if (iLong < 0)
            iLong += 4294967296;
        return iLong;
    }
    this.getSLongAt = function(iOffset, bBigEndian) {
        var iULong = this.getLongAt(iOffset, bBigEndian);
        if (iULong > 2147483647)
            return iULong - 4294967296;
        else
            return iULong;
    }

    this.getStringAt = function(iOffset, iLength) {
        var aStr = [];

        var aBytes = this.getBytesAt(iOffset, iLength);
        for (var j = 0; j < iLength; j++) {
            aStr[j] = String.fromCharCode(aBytes[j]);
        }
        return aStr.join("");
    }

    this.getCharAt = function(iOffset) {
        return String.fromCharCode(this.getByteAt(iOffset));
    }
    this.toBase64 = function() {
        return window.btoa(data);
    }
    this.fromBase64 = function(strBase64) {
        data = window.atob(strBase64);
    }
}


var BinaryAjax = (function() {

    function createRequest() {
        var oHTTP = null;
        if (window.ActiveXObject) {
            oHTTP = new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            oHTTP = new XMLHttpRequest();
        }
        return oHTTP;
    }

    function getHead(strURL, fncCallback, fncError) {
        var oHTTP = createRequest();
        if (oHTTP) {
            if (fncCallback) {
                if (typeof(oHTTP.onload) != "undefined") {
                    oHTTP.onload = function() {
                        if (oHTTP.status == "200") {
                            fncCallback(this);
                        } else {
                            if (fncError)
                                fncError();
                        }
                        oHTTP = null;
                    };
                } else {
                    oHTTP.onreadystatechange = function() {
                        if (oHTTP.readyState == 4) {
                            if (oHTTP.status == "200") {
                                fncCallback(this);
                            } else {
                                if (fncError)
                                    fncError();
                            }
                            oHTTP = null;
                        }
                    };
                }
            }
            oHTTP.open("HEAD", strURL, true);
            oHTTP.send(null);
        } else {
            if (fncError)
                fncError();
        }
    }

    function sendRequest(strURL, fncCallback, fncError, aRange, bAcceptRanges, iFileSize) {
        var oHTTP = createRequest();
        if (oHTTP) {

            var iDataOffset = 0;
            if (aRange && !bAcceptRanges) {
                iDataOffset = aRange[0];
            }
            var iDataLen = 0;
            if (aRange) {
                iDataLen = aRange[1] - aRange[0] + 1;
            }

            if (fncCallback) {
                if (typeof(oHTTP.onload) != "undefined") {
                    oHTTP.onload = function() {
                        if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
                            oHTTP.binaryResponse = new BinaryFile(oHTTP.responseText, iDataOffset, iDataLen);
                            oHTTP.fileSize = iFileSize || oHTTP.getResponseHeader("Content-Length");
                            fncCallback(oHTTP);
                        } else {
                            if (fncError)
                                fncError();
                        }
                        oHTTP = null;
                    };
                } else {
                    oHTTP.onreadystatechange = function() {
                        if (oHTTP.readyState == 4) {
                            if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
                                // IE6 craps if we try to extend the XHR object
                                var oRes = {
                                    status: oHTTP.status,
                                    // IE needs responseBody, Chrome/Safari needs responseText
                                    binaryResponse: new BinaryFile(
                                            typeof oHTTP.responseBody == "unknown" ? oHTTP.responseBody : oHTTP.responseText, iDataOffset, iDataLen
                                            ),
                                    fileSize: iFileSize || oHTTP.getResponseHeader("Content-Length")
                                };
                                fncCallback(oRes);
                            } else {
                                if (fncError)
                                    fncError();
                            }
                            oHTTP = null;
                        }
                    };
                }
            }
            oHTTP.open("GET", strURL, true);

            if (oHTTP.overrideMimeType)
                oHTTP.overrideMimeType('text/plain; charset=x-user-defined');

            if (aRange && bAcceptRanges) {
                oHTTP.setRequestHeader("Range", "bytes=" + aRange[0] + "-" + aRange[1]);
            }

            oHTTP.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT");

            oHTTP.send(null);
        } else {
            if (fncError)
                fncError();
        }
    }

    return function(strURL, fncCallback, fncError, aRange) {

        if (aRange) {
            getHead(
                    strURL,
                    function(oHTTP) {
                        var iLength = parseInt(oHTTP.getResponseHeader("Content-Length"), 10);
                        var strAcceptRanges = oHTTP.getResponseHeader("Accept-Ranges");

                        var iStart, iEnd;
                        iStart = aRange[0];
                        if (aRange[0] < 0)
                            iStart += iLength;
                        iEnd = iStart + aRange[1] - 1;

                        sendRequest(strURL, fncCallback, fncError, [iStart, iEnd], (strAcceptRanges == "bytes"), iLength);
                    }
            );

        } else {
            sendRequest(strURL, fncCallback, fncError);
        }
    }

}());

/*
 document.write(
 "<script type='text/vbscript'>\r\n"
 + "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
 + "    IEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\n"
 + "End Function\r\n"
 + "Function IEBinary_getLength(strBinary)\r\n"
 + "    IEBinary_getLength = LenB(strBinary)\r\n"
 + "End Function\r\n"
 + "</script>\r\n"
 );
 */

document.write(
        "<script type='text/vbscript'>\r\n"
        + "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
        + " IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\n"
        + "End Function\r\n"
        + "Function IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n"
        + "  Dim aBytes()\r\n"
        + "  ReDim aBytes(iLength - 1)\r\n"
        + "  For i = 0 To iLength - 1\r\n"
        + "   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n"
        + "  Next\r\n"
        + "  IEBinary_getBytesAt = aBytes\r\n"
        + "End Function\r\n"
        + "Function IEBinary_getLength(strBinary)\r\n"
        + " IEBinary_getLength = LenB(strBinary)\r\n"
        + "End Function\r\n"
        + "</script>\r\n"
        );



/*
 * Javascript EXIF Reader 0.1.6
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */


var EXIF = (function() {

    var debug = false;

    var ExifTags = {

        // version tags
        0x9000: "ExifVersion", // EXIF version
        0xA000: "FlashpixVersion", // Flashpix format version

        // colorspace tags
        0xA001: "ColorSpace", // Color space information tag

        // image configuration
        0xA002: "PixelXDimension", // Valid width of meaningful image
        0xA003: "PixelYDimension", // Valid height of meaningful image
        0x9101: "ComponentsConfiguration", // Information about channels
        0x9102: "CompressedBitsPerPixel", // Compressed bits per pixel

        // user information
        0x927C: "MakerNote", // Any desired information written by the manufacturer
        0x9286: "UserComment", // Comments by user

        // related file
        0xA004: "RelatedSoundFile", // Name of related sound file

        // date and time
        0x9003: "DateTimeOriginal", // Date and time when the original image was generated
        0x9004: "DateTimeDigitized", // Date and time when the image was stored digitally
        0x9290: "SubsecTime", // Fractions of seconds for DateTime
        0x9291: "SubsecTimeOriginal", // Fractions of seconds for DateTimeOriginal
        0x9292: "SubsecTimeDigitized", // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A: "ExposureTime", // Exposure time (in seconds)
        0x829D: "FNumber", // F number
        0x8822: "ExposureProgram", // Exposure program
        0x8824: "SpectralSensitivity", // Spectral sensitivity
        0x8827: "ISOSpeedRatings", // ISO speed rating
        0x8828: "OECF", // Optoelectric conversion factor
        0x9201: "ShutterSpeedValue", // Shutter speed
        0x9202: "ApertureValue", // Lens aperture
        0x9203: "BrightnessValue", // Value of brightness
        0x9204: "ExposureBias", // Exposure bias
        0x9205: "MaxApertureValue", // Smallest F number of lens
        0x9206: "SubjectDistance", // Distance to subject in meters
        0x9207: "MeteringMode", // Metering mode
        0x9208: "LightSource", // Kind of light source
        0x9209: "Flash", // Flash status
        0x9214: "SubjectArea", // Location and area of main subject
        0x920A: "FocalLength", // Focal length of the lens in mm
        0xA20B: "FlashEnergy", // Strobe energy in BCPS
        0xA20C: "SpatialFrequencyResponse", // 
        0xA20E: "FocalPlaneXResolution", // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F: "FocalPlaneYResolution", // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210: "FocalPlaneResolutionUnit", // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214: "SubjectLocation", // Location of subject in image
        0xA215: "ExposureIndex", // Exposure index selected on camera
        0xA217: "SensingMethod", // Image sensor type
        0xA300: "FileSource", // Image source (3 == DSC)
        0xA301: "SceneType", // Scene type (1 == directly photographed)
        0xA302: "CFAPattern", // Color filter array geometric pattern
        0xA401: "CustomRendered", // Special processing
        0xA402: "ExposureMode", // Exposure mode
        0xA403: "WhiteBalance", // 1 = auto white balance, 2 = manual
        0xA404: "DigitalZoomRation", // Digital zoom ratio
        0xA405: "FocalLengthIn35mmFilm", // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406: "SceneCaptureType", // Type of scene
        0xA407: "GainControl", // Degree of overall image gain adjustment
        0xA408: "Contrast", // Direction of contrast processing applied by camera
        0xA409: "Saturation", // Direction of saturation processing applied by camera
        0xA40A: "Sharpness", // Direction of sharpness processing applied by camera
        0xA40B: "DeviceSettingDescription", // 
        0xA40C: "SubjectDistanceRange", // Distance to subject

        // other tags
        0xA005: "InteroperabilityIFDPointer",
        0xA420: "ImageUniqueID"     // Identifier assigned uniquely to each image
    };

    var TiffTags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x8769: "ExifIFDPointer",
        0x8825: "GPSInfoIFDPointer",
        0xA005: "InteroperabilityIFDPointer",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x011C: "PlanarConfiguration",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x0128: "ResolutionUnit",
        0x0111: "StripOffsets",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x0201: "JPEGInterchangeFormat",
        0x0202: "JPEGInterchangeFormatLength",
        0x012D: "TransferFunction",
        0x013E: "WhitePoint",
        0x013F: "PrimaryChromaticities",
        0x0211: "YCbCrCoefficients",
        0x0214: "ReferenceBlackWhite",
        0x0132: "DateTime",
        0x010E: "ImageDescription",
        0x010F: "Make",
        0x0110: "Model",
        0x0131: "Software",
        0x013B: "Artist",
        0x8298: "Copyright"
    };

    var GPSTags = {
        0x0000: "GPSVersionID",
        0x0001: "GPSLatitudeRef",
        0x0002: "GPSLatitude",
        0x0003: "GPSLongitudeRef",
        0x0004: "GPSLongitude",
        0x0005: "GPSAltitudeRef",
        0x0006: "GPSAltitude",
        0x0007: "GPSTimeStamp",
        0x0008: "GPSSatellites",
        0x0009: "GPSStatus",
        0x000A: "GPSMeasureMode",
        0x000B: "GPSDOP",
        0x000C: "GPSSpeedRef",
        0x000D: "GPSSpeed",
        0x000E: "GPSTrackRef",
        0x000F: "GPSTrack",
        0x0010: "GPSImgDirectionRef",
        0x0011: "GPSImgDirection",
        0x0012: "GPSMapDatum",
        0x0013: "GPSDestLatitudeRef",
        0x0014: "GPSDestLatitude",
        0x0015: "GPSDestLongitudeRef",
        0x0016: "GPSDestLongitude",
        0x0017: "GPSDestBearingRef",
        0x0018: "GPSDestBearing",
        0x0019: "GPSDestDistanceRef",
        0x001A: "GPSDestDistance",
        0x001B: "GPSProcessingMethod",
        0x001C: "GPSAreaInformation",
        0x001D: "GPSDateStamp",
        0x001E: "GPSDifferential"
    };

    var StringValues = {
        ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0x0000: "Flash did not fire",
            0x0001: "Flash fired",
            0x0005: "Strobe return light not detected",
            0x0007: "Strobe return light detected",
            0x0009: "Flash fired, compulsory flash mode",
            0x000D: "Flash fired, compulsory flash mode, return light not detected",
            0x000F: "Flash fired, compulsory flash mode, return light detected",
            0x0010: "Flash did not fire, compulsory flash mode",
            0x0018: "Flash did not fire, auto mode",
            0x0019: "Flash fired, auto mode",
            0x001D: "Flash fired, auto mode, return light not detected",
            0x001F: "Flash fired, auto mode, return light detected",
            0x0020: "No flash function",
            0x0041: "Flash fired, red-eye reduction mode",
            0x0045: "Flash fired, red-eye reduction mode, return light not detected",
            0x0047: "Flash fired, red-eye reduction mode, return light detected",
            0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059: "Flash fired, auto mode, red-eye reduction mode",
            0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene"
        },
        SceneType: {
            1: "Directly photographed"
        },
        CustomRendered: {
            0: "Normal process",
            1: "Custom process"
        },
        WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance"
        },
        GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        },
        Contrast: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        Saturation: {
            0: "Normal",
            1: "Low saturation",
            2: "High saturation"
        },
        Sharpness: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view"
        },
        FileSource: {
            3: "DSC"
        },
        Components: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }

    function getImageData(img, callback) {
        BinaryAjax(img.src, function(http) {
            var data = findEXIFinJPEG(http.binaryResponse);
            img.exifdata = data || {};
            if (callback) {
                callback.call(img)
            }
        });
    }

    function findEXIFinJPEG(file) {
        if (file.getByteAt(0) != 0xFF || file.getByteAt(1) != 0xD8) {
            return false; // not a valid jpeg
        }

        var offset = 2,
                length = file.getLength(),
                marker;

        while (offset < length) {
            if (file.getByteAt(offset) != 0xFF) {
                if (debug)
                    console.log("Not a valid marker at offset " + offset + ", found: " + file.getByteAt(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = file.getByteAt(offset + 1);

            // we could implement handling for other markers here, 
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 22400) {
                if (debug)
                    console.log("Found 0xFFE1 marker");

                return readEXIFData(file, offset + 4, file.getShortAt(offset + 2, true) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else if (marker == 225) {
                // 0xE1 = Application-specific 1 (for EXIF)
                if (debug)
                    console.log("Found 0xFFE1 marker");

                return readEXIFData(file, offset + 4, file.getShortAt(offset + 2, true) - 2);

            } else {
                offset += 2 + file.getShortAt(offset + 2, true);
            }

        }

    }


    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getShortAt(dirStart, bigEnd),
                tags = {},
                entryOffset, tag,
                i;

        for (i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getShortAt(entryOffset, bigEnd)];
            if (!tag && debug)
                console.log("Unknown tag: " + file.getShortAt(entryOffset, bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getShortAt(entryOffset + 2, bigEnd),
                numValues = file.getLongAt(entryOffset + 4, bigEnd),
                valueOffset = file.getLongAt(entryOffset + 8, bigEnd) + tiffStart,
                offset,
                vals, val, n,
                numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getByteAt(entryOffset + 8, bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getByteAt(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return file.getStringAt(offset, numValues - 1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getShortAt(entryOffset + 8, bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getShortAt(offset + 2 * n, bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getLongAt(entryOffset + 8, bigEnd);
                } else {
                    vals = [];
                    for (var n = 0; n < numValues; n++) {
                        vals[n] = file.getLongAt(valueOffset + 4 * n, bigEnd);
                    }
                    return vals;
                }

            case 5: // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getLongAt(valueOffset, bigEnd);
                    denominator = file.getLongAt(valueOffset + 4, bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getLongAt(valueOffset + 8 * n, bigEnd);
                        denominator = file.getLongAt(valueOffset + 4 + 8 * n, bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getSLongAt(entryOffset + 8, bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getSLongAt(valueOffset + 4 * n, bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getSLongAt(valueOffset, bigEnd) / file.getSLongAt(valueOffset + 4, bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getSLongAt(valueOffset + 8 * n, bigEnd) / file.getSLongAt(valueOffset + 4 + 8 * n, bigEnd);
                    }
                    return vals;
                }
        }
    }


    function readEXIFData(file, start) {
        if (file.getStringAt(start, 4) != "Exif") {
            if (debug)
                console.log("Not valid EXIF data! " + file.getStringAt(start, 4));
            return false;
        }

        var bigEnd,
                tags, tag,
                exifData, gpsData,
                tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getShortAt(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getShortAt(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug)
                console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getShortAt(tiffOffset + 2, bigEnd) != 0x002A) {
            if (debug)
                console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        if (file.getLongAt(tiffOffset + 4, bigEnd) != 0x00000008) {
            if (debug)
                console.log("Not valid TIFF data! (First offset not 8)", file.getShortAt(tiffOffset + 4, bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + 8, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                                StringValues.Components[exifData[tag][0]]
                                + StringValues.Components[exifData[tag][1]]
                                + StringValues.Components[exifData[tag][2]]
                                + StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0]
                                + "." + gpsData[tag][1]
                                + "." + gpsData[tag][2]
                                + "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        return tags;
    }


    function getData(img, callback) {
        if (!img.complete)
            return false;
        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    function getTag(img, tag) {
        if (!imageHasData(img))
            return;
        return img.exifdata[tag];
    }

    function getAllTags(img) {
        if (!imageHasData(img))
            return {};
        var a,
                data = img.exifdata,
                tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    function pretty(img) {
        if (!imageHasData(img))
            return "";
        var a,
                data = img.exifdata,
                strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    function readFromBinaryFile(file) {
        return findEXIFinJPEG(file);
    }


    return {
        readFromBinaryFile: readFromBinaryFile,
        pretty: pretty,
        getTag: getTag,
        getAllTags: getAllTags,
        getData: getData,
        Tags: ExifTags,
        TiffTags: TiffTags,
        GPSTags: GPSTags,
        StringValues: StringValues
    };

})();



/*
 * 
 * canvasResize
 * 
 * Version: 1.2.0 
 * Date (d/m/y): 02/10/12
 * Update (d/m/y): 14/05/13
 * Original author: @gokercebeci 
 * Licensed under the MIT license
 * - This plugin working with binaryajax.js and exif.js 
 *   (It's under the MPL License http://www.nihilogic.dk/licenses/mpl-license.txt)
 * Demo: http://canvasResize.gokercebeci.com/
 * 
 * - I fixed iOS6 Safari's image file rendering issue for large size image (over mega-pixel)
 *   using few functions from https://github.com/stomita/ios-imagefile-megapixel
 *   (detectSubsampling, )
 *   And fixed orientation issue by using https://github.com/jseidelin/exif-js
 *   Thanks, Shinichi Tomita and Jacob Seidelin
 */

(function($) {
    var pluginName = 'canvasResize',
            methods = {
        newsize: function(w, h, W, H, C) {
            var c = C ? 'h' : '';
            if ((W && w > W) || (H && h > H)) {
                var r = w / h;
                if ((r >= 1 || H === 0) && W && !C) {
                    w = W;
                    h = (W / r) >> 0;
                } else if (C && r <= (W / H)) {
                    w = W;
                    h = (W / r) >> 0;
                    c = 'w';
                } else {
                    w = (H * r) >> 0;
                    h = H;
                }
            }
            return {
                'width': w,
                'height': h,
                'cropped': c
            };
        },
        dataURLtoBlob: function(data) {
            var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
            var byteString = atob(data.split(',')[1]);
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var bb = (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
            if (bb) {
                //    console.log('BlobBuilder');        
                bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
                bb.append(ab);
                return bb.getBlob(mimeString);
            } else {
                //    console.log('Blob');  
                bb = new Blob([ab], {
                    'type': (mimeString)
                });
                return bb;
            }
        },
        /**
         * Detect subsampling in loaded image.
         * In iOS, larger images than 2M pixels may be subsampled in rendering.
         */
        detectSubsampling: function(img) {
            var iw = img.width, ih = img.height;
            if (iw * ih > 1048576) { // subsampling may happen over megapixel image
                var canvas = document.createElement('canvas');
                canvas.width = canvas.height = 1;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, -iw + 1, 0);
                // subsampled image becomes half smaller in rendering size.
                // check alpha channel value to confirm image is covering edge pixel or not.
                // if alpha value is 0 image is not covering, hence subsampled.
                return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
            } else {
                return false;
            }
        },
        /**
         * Update the orientation according to the specified rotation angle
         */
        rotate: function(orientation, angle) {
            var o = {
                // nothing
                1: {90: 6, 180: 3, 270: 8},
                // horizontal flip
                2: {90: 7, 180: 4, 270: 5},
                // 180 rotate left
                3: {90: 8, 180: 1, 270: 6},
                // vertical flip
                4: {90: 5, 180: 2, 270: 7},
                // vertical flip + 90 rotate right
                5: {90: 2, 180: 7, 270: 4},
                // 90 rotate right
                6: {90: 3, 180: 8, 270: 1},
                // horizontal flip + 90 rotate right
                7: {90: 4, 180: 5, 270: 2},
                // 90 rotate left
                8: {90: 1, 180: 6, 270: 3}
            };
            return o[orientation][angle] ? o[orientation][angle] : orientation;
        },
        /**
         * Transform canvas coordination according to specified frame size and orientation
         * Orientation value is from EXIF tag
         */
        transformCoordinate: function(canvas, width, height, orientation) {
            switch (orientation) {
                case 5:
                case 6:
                case 7:
                case 8:
                    canvas.width = height;
                    canvas.height = width;
                    break;
                default:
                    canvas.width = width;
                    canvas.height = height;
            }
            var ctx = canvas.getContext('2d');
            switch (orientation) {
                case 1:
                    // nothing
                    break;
                case 2:
                    // horizontal flip
                    ctx.translate(width, 0);
                    ctx.scale(-1, 1);
                    break;
                case 3:
                    // 180 rotate left
                    ctx.translate(width, height);
                    ctx.rotate(Math.PI);
                    break;
                case 4:
                    // vertical flip
                    ctx.translate(0, height);
                    ctx.scale(1, -1);
                    break;
                case 5:
                    // vertical flip + 90 rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.scale(1, -1);
                    break;
                case 6:
                    // 90 rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.translate(0, -height);
                    break;
                case 7:
                    // horizontal flip + 90 rotate right
                    ctx.rotate(0.5 * Math.PI);
                    ctx.translate(width, -height);
                    ctx.scale(-1, 1);
                    break;
                case 8:
                    // 90 rotate left
                    ctx.rotate(-0.5 * Math.PI);
                    ctx.translate(-width, 0);
                    break;
                default:
                    break;
            }
        },
        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         */
        detectVerticalSquash: function(img, iw, ih) {
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, 1, ih).data;
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        },
        callback: function(d) {
            return d;
        },
        extend: function() {
            var target = arguments[0] || {}, a = 1, al = arguments.length, deep = false;
            if (target.constructor === Boolean) {
                deep = target;
                target = arguments[1] || {};
            }
            if (al === 1) {
                target = this;
                a = 0;
            }
            var prop;
            for (; a < al; a++)
                if ((prop = arguments[a]) !== null)
                    for (var i in prop) {
                        if (target === prop[i])
                            continue;
                        if (deep && typeof prop[i] === 'object' && target[i])
                            methods.extend(target[i], prop[i]);
                        else if (prop[i] !== undefined)
                            target[i] = prop[i];
                    }
            return target;
        }
    },
    defaults = {
        width: 300,
        height: 0,
        crop: false,
        quality: 80,
        rotate: 0,
        'callback': methods.callback
    };
    function Plugin(file, options) {
        this.file = file;
        // EXTEND
        this.options = methods.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            //this.options.init(this);
            var $this = this;
            var file = this.file;

            var reader = new FileReader();
            reader.onloadend = function(e) {

                var dataURL = e.target.result;
                var byteString = atob(dataURL.split(',')[1]);
                var binary = new BinaryFile(byteString, 0, byteString.length);
                var exif = EXIF.readFromBinaryFile(binary);

                var img = new Image();
                img.onload = function(e) {

                    var orientation = exif['Orientation'] || 1;
                    orientation = methods.rotate(orientation, $this.options.rotate);

                    // CW or CCW ? replace width and height
                    var size = (orientation >= 5 && orientation <= 8)
                            ? methods.newsize(img.height, img.width, $this.options.width, $this.options.height, $this.options.crop)
                            : methods.newsize(img.width, img.height, $this.options.width, $this.options.height, $this.options.crop);

                    var iw = img.width, ih = img.height;
                    var width = size.width, height = size.height;

                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    ctx.save();
                    methods.transformCoordinate(canvas, width, height, orientation);

                    // over image size
                    if (methods.detectSubsampling(img)) {
                        iw /= 2;
                        ih /= 2;
                    }
                    var d = 1024; // size of tiling canvas
                    var tmpCanvas = document.createElement('canvas');
                    tmpCanvas.width = tmpCanvas.height = d;
                    var tmpCtx = tmpCanvas.getContext('2d');
                    var vertSquashRatio = methods.detectVerticalSquash(img, iw, ih);
                    var sy = 0;
                    while (sy < ih) {
                        var sh = sy + d > ih ? ih - sy : d;
                        var sx = 0;
                        while (sx < iw) {
                            var sw = sx + d > iw ? iw - sx : d;
                            tmpCtx.clearRect(0, 0, d, d);
                            tmpCtx.drawImage(img, -sx, -sy);
                            var dx = Math.floor(sx * width / iw);
                            var dw = Math.ceil(sw * width / iw);
                            var dy = Math.floor(sy * height / ih / vertSquashRatio);
                            var dh = Math.ceil(sh * height / ih / vertSquashRatio);
                            ctx.drawImage(tmpCanvas, 0, 0, sw, sh, dx, dy, dw, dh);
                            sx += d;
                        }
                        sy += d;
                    }
                    ctx.restore();
                    tmpCanvas = tmpCtx = null;

                    // if rotated width and height data replacing issue 
                    var newcanvas = document.createElement('canvas');
                    newcanvas.width = size.cropped === 'h' ? height : width;
                    newcanvas.height = size.cropped === 'w' ? width : height;
                    var x = size.cropped === 'h' ? (height - width) * .5 : 0;
                    var y = size.cropped === 'w' ? (width - height) * .5 : 0;
                    newctx = newcanvas.getContext('2d');
                    newctx.drawImage(canvas, x, y, width, height);

                    console.log(file, file.type);
                    if (file.type === "image/png") {
                        var data = newcanvas.toDataURL(file.type);
                    } else {
                        var data = newcanvas.toDataURL("image/jpeg", ($this.options.quality * .01));
                    }

                    // CALLBACK
                    $this.options.callback(data, newcanvas.width, newcanvas.height);

                    // });
                };
                img.src = dataURL;
                // =====================================================

            };
            reader.readAsDataURL(file);
            //reader.readAsBinaryString(file);

        }
    };
    $[pluginName] = function(file, options) {
        if (typeof file === 'string')
            return methods[file](options);
        else
            new Plugin(file, options);
    };

})(window);