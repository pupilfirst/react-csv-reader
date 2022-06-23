/*! For license information please see react-csv-reader.js.LICENSE.txt */
var e={428:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,s){for(var o,a,u=i(e),f=1;f<arguments.length;f++){for(var c in o=Object(arguments[f]))r.call(o,c)&&(u[c]=o[c]);if(t){a=t(o);for(var l=0;l<a.length;l++)n.call(o,a[l])&&(u[a[l]]=o[a[l]])}}return u}},470:function(e,t){var r,n;r=function e(){var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=r&&/blob:/i.test((t.location||{}).protocol),i={},s=0,o={parse:function(r,n){var a=(n=n||{}).dynamicTyping||!1;if(k(a)&&(n.dynamicTypingFunction=a,a={}),n.dynamicTyping=a,n.transform=!!k(n.transform)&&n.transform,n.worker&&o.WORKERS_SUPPORTED){var u=function(){if(!o.WORKERS_SUPPORTED)return!1;var r,n,a=(r=t.URL||t.webkitURL||null,n=e.toString(),o.BLOB_URL||(o.BLOB_URL=r.createObjectURL(new Blob(["(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(a);return u.onmessage=g,u.id=s++,i[u.id]=u}();return u.userStep=n.step,u.userChunk=n.chunk,u.userComplete=n.complete,u.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,void u.postMessage({input:r,config:n,workerId:u.id})}var d=null;return o.NODE_STREAM_INPUT,"string"==typeof r?d=n.download?new f(n):new l(n):!0===r.readable&&k(r.read)&&k(r.on)?d=new h(n):(t.File&&r instanceof File||r instanceof Object)&&(d=new c(n)),d.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",s="\r\n",a='"',u=a+a,f=!1,c=null,l=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(f=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a),"boolean"==typeof t.escapeFormulae&&(l=t.escapeFormulae)}}();var h=new RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return m(null,e,f);if("object"==typeof e[0])return m(c||d(e[0]),e,f)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:d(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),m(e.fields||[],e.data||[],f);throw new Error("Unable to serialize unrecognized input");function d(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function m(e,t,r){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(a&&n){for(var f=0;f<e.length;f++)0<f&&(o+=i),o+=g(e[f],f);0<t.length&&(o+=s)}for(var c=0;c<t.length;c++){var l=a?e.length:t[c].length,h=!1,d=a?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!a&&(h="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&a){for(var p=[],m=0;m<l;m++){var y=u?e[m]:m;p.push(t[c][y])}h=""===p.join("").trim()}if(!h){for(var _=0;_<l;_++){0<_&&!d&&(o+=i);var v=a&&u?e[_]:_;o+=g(t[c][v],_)}c<t.length-1&&(!r||0<l&&!d)&&(o+=s)}}return o}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===l&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var n=e.toString().replace(h,u),s="boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(n,o.BAD_DELIMITERS)||-1<n.indexOf(i)||" "===n.charAt(0)||" "===n.charAt(n.length-1);return s?a+n+a:n}}};if(o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\ufeff",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!r&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=m,o.ParserHandle=d,o.NetworkStreamer=f,o.FileStreamer=c,o.StringStreamer=l,o.ReadableStreamStreamer=h,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var r=e.config||{},n=[];return this.each((function(e){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},r)})})),i(),this;function i(){if(0!==n.length){var t,r,i,u=n[0];if(k(e.before)){var f=e.before(u.file,u.inputElem);if("object"==typeof f){if("abort"===f.action)return"AbortError",t=u.file,r=u.inputElem,i=f.reason,void(k(e.error)&&e.error({name:"AbortError"},t,r,i));if("skip"===f.action)return void s();"object"==typeof f.config&&(u.instanceConfig=a.extend(u.instanceConfig,f.config))}else if("skip"===f)return void s()}var c=u.instanceConfig.complete;u.instanceConfig.complete=function(e){k(c)&&c(e,u.file,u.inputElem),s()},o.parse(u.file,u.instanceConfig)}else k(e.complete)&&e.complete()}function s(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var a=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var f=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:a,workerId:o.WORKER_ID,finished:f});else if(k(this._config.chunk)&&!r){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!f||!k(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),f||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function f(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function c(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),u.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){u.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(e){var t,r,n,i=Math.pow(2,53),s=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,f=this,c=0,l=0,h=!1,d=!1,g=[],y={data:[],errors:[],meta:{}};if(k(e.step)){var _=e.step;e.step=function(t){if(y=t,w())E();else{if(E(),0===y.data.length)return;c+=t.data.length,e.preview&&c>e.preview?r.abort():(y.data=y.data[0],_(y,f))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function E(){if(y&&n&&(S("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<y.data.length;t++)b(y.data[t])&&y.data.splice(t--,1);return w()&&function(){if(y)if(Array.isArray(y.data[0])){for(var t=0;w()&&t<y.data.length;t++)y.data[t].forEach(r);y.data.splice(0,1)}else y.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),g.push(t)}}(),function(){if(!y||!e.header&&!e.dynamicTyping&&!e.transform)return y;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var s=n,o=t[n];e.header&&(s=n>=g.length?"__parsed_extra":g[n]),e.transform&&(o=e.transform(o,s)),o=C(s,o),"__parsed_extra"===s?(i[s]=i[s]||[],i[s].push(o)):i[s]=o}return e.header&&(n>g.length?S("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+n,l+r):n<g.length&&S("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+n,l+r)),i}var r=1;return!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(t),r=y.data.length):y.data=t(y.data,0),e.header&&y.meta&&(y.meta.fields=g),l+=r,y}()}function w(){return e.header&&0===g.length}function C(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(a.test(e)){var t=parseFloat(e);if(s<t&&t<i)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var n}function S(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),y.errors.push(i)}this.parse=function(i,s,a){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<n[0].length;if(1===n.length||s)return"\n";for(var o=0,a=0;a<n.length;a++)"\n"===n[a][0]&&o++;return o>=n.length/2?"\r\n":"\r"}(i,u)),n=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(i),y.meta.delimiter=e.delimiter);else{var f=function(t,r,n,i,s){var a,u,f,c;s=s||[",","\t","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var l=0;l<s.length;l++){var h=s[l],d=0,p=0,g=0;f=void 0;for(var y=new m({comments:i,delimiter:h,newline:r,preview:10}).parse(t),_=0;_<y.data.length;_++)if(n&&b(y.data[_]))g++;else{var v=y.data[_].length;p+=v,void 0!==f?0<v&&(d+=Math.abs(v-f),f=v):f=v}0<y.data.length&&(p/=y.data.length-g),(void 0===u||d<=u)&&(void 0===c||c<p)&&1.99<p&&(u=d,a=h,c=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);f.successful?e.delimiter=f.bestDelimiter:(n=!0,e.delimiter=o.DefaultDelimiter),y.meta.delimiter=e.delimiter}var c=v(e);return e.preview&&e.header&&c.preview++,t=i,r=new m(c),y=r.parse(t,s,a),E(),h?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){f.streamer._halted?(h=!1,f.streamer.parseChunk(t,!0)):setTimeout(f.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,r.abort(),y.meta.aborted=!0,k(e.complete)&&e.complete(y),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,s=e.step,a=e.preview,u=e.fastMode,f=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(f=e.escapeChar),("string"!=typeof r||-1<o.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var c=0,l=!1;this.parse=function(e,o,h){if("string"!=typeof e)throw new Error("Input must be a string");var d=e.length,m=r.length,g=n.length,y=i.length,_=k(s),v=[],b=[],E=[],w=c=0;if(!e)return M();if(u||!1!==u&&-1===e.indexOf(t)){for(var C=e.split(n),S=0;S<C.length;S++){if(E=C[S],c+=E.length,S!==C.length-1)c+=n.length;else if(h)return M();if(!i||E.substring(0,y)!==i){if(_){if(v=[],D(E.split(r)),U(),l)return M()}else D(E.split(r));if(a&&a<=S)return v=v.slice(0,a),M(!0)}}return M()}for(var O=e.indexOf(r,c),R=e.indexOf(n,c),x=new RegExp(p(f)+p(t),"g"),T=e.indexOf(t,c);;)if(e[c]!==t)if(i&&0===E.length&&e.substring(c,c+y)===i){if(-1===R)return M();c=R+g,R=e.indexOf(n,c),O=e.indexOf(r,c)}else{if(-1!==O&&(O<R||-1===R)){if(!(O<T)){E.push(e.substring(c,O)),c=O+m,O=e.indexOf(r,c);continue}var I=q(O,T,R);if(I&&void 0!==I.nextDelim){O=I.nextDelim,T=I.quoteSearch,E.push(e.substring(c,O)),c=O+m,O=e.indexOf(r,c);continue}}if(-1===R)break;if(E.push(e.substring(c,R)),F(R+g),_&&(U(),l))return M();if(a&&v.length>=a)return M(!0)}else for(T=c,c++;;){if(-1===(T=e.indexOf(t,T+1)))return h||b.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:v.length,index:c}),P();if(T===d-1)return P(e.substring(c,T).replace(x,t));if(t!==f||e[T+1]!==f){if(t===f||0===T||e[T-1]!==f){-1!==O&&O<T+1&&(O=e.indexOf(r,T+1)),-1!==R&&R<T+1&&(R=e.indexOf(n,T+1));var j=L(-1===R?O:Math.min(O,R));if(e[T+1+j]===r){E.push(e.substring(c,T).replace(x,t)),e[c=T+1+j+m]!==t&&(T=e.indexOf(t,c)),O=e.indexOf(r,c),R=e.indexOf(n,c);break}var A=L(R);if(e.substring(T+1+A,T+1+A+g)===n){if(E.push(e.substring(c,T).replace(x,t)),F(T+1+A+g),O=e.indexOf(r,c),T=e.indexOf(t,c),_&&(U(),l))return M();if(a&&v.length>=a)return M(!0);break}b.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:v.length,index:c}),T++}}else T++}return P();function D(e){v.push(e),w=c}function L(t){var r=0;if(-1!==t){var n=e.substring(T+1,t);n&&""===n.trim()&&(r=n.length)}return r}function P(t){return h||(void 0===t&&(t=e.substring(c)),E.push(t),c=d,D(E),_&&U()),M()}function F(t){c=t,D(E),E=[],R=e.indexOf(n,c)}function M(e){return{data:v,errors:b,meta:{delimiter:r,linebreak:n,aborted:l,truncated:!!e,cursor:w+(o||0)}}}function U(){s(M()),v=[],b=[]}function q(n,i,s){var o={nextDelim:void 0,quoteSearch:void 0},a=e.indexOf(t,i+1);if(i<n&&n<a&&(a<s||-1===s)){var u=e.indexOf(r,a);if(-1===u)return o;a<u&&(a=e.indexOf(t,a+1)),o=q(u,a,s)}else o={nextDelim:n,quoteSearch:i};return o}},this.abort=function(){l=!0},this.getCharIndex=function(){return c}}function g(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){n=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(k(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},s),!n);o++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!n&&y(t.workerId,t.results)}function y(e,t){var r=i[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function _(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=v(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===o.WORKER_ID&&r&&(o.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=o.parse(r.input,r.config);n&&t.postMessage({workerId:o.WORKER_ID,results:n,finished:!0})}}),(f.prototype=Object.create(u.prototype)).constructor=f,(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(l.prototype)).constructor=l,(h.prototype=Object.create(u.prototype)).constructor=h,o},void 0===(n=r.apply(t,[]))||(e.exports=n)},783:(e,t,r)=>{var n=r(306);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,s,o){if(o!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return r.PropTypes=r,r}},914:(e,t,r)=>{e.exports=r(783)()},306:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},187:(e,t,r)=>{var n=r(428),i="function"==typeof Symbol&&Symbol.for,s=i?Symbol.for("react.element"):60103,o=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,u=i?Symbol.for("react.strict_mode"):60108,f=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,l=i?Symbol.for("react.context"):60110,h=i?Symbol.for("react.forward_ref"):60112,d=i?Symbol.for("react.suspense"):60113,p=i?Symbol.for("react.memo"):60115,m=i?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||_}function k(){}function E(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||_}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var w=E.prototype=new k;w.constructor=E,n(w,b.prototype),w.isPureReactComponent=!0;var C={current:null},S=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var n,i={},o=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,n)&&!O.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var f=Array(u),c=0;c<u;c++)f[c]=arguments[c+2];i.children=f}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:C.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var T=/\/+/g,I=[];function j(e,t,r,n){if(I.length){var i=I.pop();return i.result=e,i.keyPrefix=t,i.func=r,i.context=n,i.count=0,i}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function D(e,t,r,n){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case s:case o:a=!0}}if(a)return r(n,e,""===t?"."+P(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=t+P(i=e[u],u);a+=D(i,f,r,n)}else if("function"==typeof(f=null===e||"object"!=typeof e?null:"function"==typeof(f=g&&e[g]||e["@@iterator"])?f:null))for(e=f.call(e),u=0;!(i=e.next()).done;)a+=D(i=i.value,f=t+P(i,u++),r,n);else if("object"===i)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return a}function L(e,t,r){return null==e?0:D(e,"",t,r)}function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,i){var s="";null!=r&&(s=(""+r).replace(T,"$&/")+"/"),L(e,M,t=j(t,s,n,i)),A(t)}var q={current:null};function z(){var e=q.current;if(null===e)throw Error(y(321));return e}var $={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;L(e,F,t=j(null,null,t,r)),A(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(y(143));return e}},t.Component=b,t.Fragment=a,t.Profiler=f,t.PureComponent=E,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var i=n({},e.props),o=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=C.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(c in t)S.call(t,c)&&!O.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==f?f[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){f=Array(c);for(var l=0;l<c;l++)f[l]=arguments[l+2];i.children=f}return{$$typeof:s,type:e.type,key:o,ref:a,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return z().useCallback(e,t)},t.useContext=function(e,t){return z().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return z().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return z().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return z().useLayoutEffect(e,t)},t.useMemo=function(e,t){return z().useMemo(e,t)},t.useReducer=function(e,t,r){return z().useReducer(e,t,r)},t.useRef=function(e){return z().useRef(e)},t.useState=function(e){return z().useState(e)},t.version="16.13.0"},255:(e,t,r)=>{e.exports=r(187)}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"X",{value:!0});const t=r(255),i=r(914),s=r(470),o=({accept:e=".csv, text/csv",cssClass:r="csv-reader-input",cssInputClass:n="csv-input",cssLabelClass:i="csv-label",fileEncoding:o="UTF-8",inputId:a="react-csv-reader-input",inputName:u="react-csv-reader-input",inputStyle:f={},inputRef:c,label:l,onError:h=(()=>{}),onFileLoaded:d,parserOptions:p={},disabled:m=!1,strict:g=!1})=>t.createElement("div",{className:r},l&&t.createElement("label",{className:i,htmlFor:a},l),t.createElement("input",{className:n,type:"file",id:a,name:u,style:f,accept:e,onChange:t=>{let r=new FileReader;const n=t.target.files;if(n.length>0){const t={name:n[0].name,size:n[0].size,type:n[0].type};if(g&&e.indexOf(t.type)<=0)return void h(new Error(`[strict mode] Accept type not respected: got '${t.type}' but not in '${e}'`));r.onload=e=>{var i;const a=s.parse(r.result,Object.assign(p,{error:h,encoding:o}));d(null!==(i=null==a?void 0:a.data)&&void 0!==i?i:[],t,n[0])},r.readAsText(n[0],o)}},disabled:m,ref:c}));o.propTypes={accept:i.string,cssClass:i.string,cssInputClass:i.string,cssLabelClass:i.string,fileEncoding:i.string,inputId:i.string,inputName:i.string,inputStyle:i.object,inputRef:i.func,label:i.oneOfType([i.string,i.element]),onError:i.func,onFileLoaded:i.func.isRequired,parserOptions:i.object,disabled:i.bool,strict:i.bool},e.Z=o})();var i=n.X,s=n.Z;export{i as __esModule,s as default};
//# sourceMappingURL=react-csv-reader.js.map