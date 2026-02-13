var e={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],o=s<e.length?n[e.charAt(s)]:0;++s;const a=s<e.length?n[e.charAt(s)]:64;++s;const c=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==a||null==c)throw new r;const u=t<<2|o>>4;if(i.push(u),64!==a){const e=o<<4&240|a>>2;if(i.push(e),64!==c){const e=a<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(e){return function(e){const r=t(e);return n.encodeByteArray(r,!0)}(e).replace(/\./g,"")};function s(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&o(n)&&(e[n]=s(e[n],t[n]));return e}function o(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(r){return}const t=e&&function(e){try{return n.decodeString(e,!0)}catch(r){}return null}(e[1]);return t&&JSON.parse(t)},u=()=>{try{return a().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process)return;const t=e.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||c()}catch(t){return}},l=()=>{var e;return null===(e=u())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function f(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function m(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function g(){return!function(){var e;const t=null===(e=u())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function p(){try{return"object"==typeof indexedDB}catch(e){return!1}}function y(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function w(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(_,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new v(r,o,n)}}const _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function E(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(T(n)&&T(s)){if(!E(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T(e){return null!==e&&"object"==typeof e}function S(e,t){const n=new C(e,t);return n.subscribe.bind(n)}class C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return e&&e._delegate?e._delegate:e}class N{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new h;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:k})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=k){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=k){return this.instances.has(e)}getOptions(e=k){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===k?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=k){return this.component?this.component.multipleInstances?e:k:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class R{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new O(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=[];var P,L;(L=P||(P={}))[L.DEBUG=0]="DEBUG",L[L.VERBOSE=1]="VERBOSE",L[L.INFO=2]="INFO",L[L.WARN=3]="WARN",L[L.ERROR=4]="ERROR",L[L.SILENT=5]="SILENT";const F={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},V=P.INFO,U={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},B=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!U[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class q{constructor(e){this.name=e,this._logLevel=V,this._logHandler=B,this._userLogHandler=null,M.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?F[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}let j,z;const $=new WeakMap,K=new WeakMap,G=new WeakMap,Q=new WeakMap,H=new WeakMap;let W={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return K.get(e);if("objectStoreNames"===t)return e.objectStoreNames||G.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return X(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function J(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(z||(z=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Z(this),t),X($.get(this))}:function(...t){return X(e.apply(Z(this),t))}:function(t,...n){const r=e.call(Z(this),t,...n);return G.set(r,t.sort?t.sort():[t]),X(r)}}function Y(e){return"function"==typeof e?J(e):(e instanceof IDBTransaction&&function(e){if(K.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});K.set(e,t)}(e),t=e,(j||(j=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,W):e);var t}function X(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(X(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&$.set(t,e)}).catch(()=>{}),H.set(t,e),t}(e);if(Q.has(e))return Q.get(e);const t=Y(e);return t!==e&&(Q.set(e,t),H.set(t,e)),t}const Z=e=>H.get(e);function ee(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=X(o);return r&&o.addEventListener("upgradeneeded",e=>{r(X(o.result),e.oldVersion,e.newVersion,X(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const te=["get","getKey","getAll","getAllKeys","count"],ne=["put","add","delete","clear"],re=new Map;function ie(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(re.get(t))return re.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ne.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!te.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return re.set(t,s),s}W=(e=>({...e,get:(t,n,r)=>ie(t,n)||e.get(t,n,r),has:(t,n)=>!!ie(t,n)||e.has(t,n)}))(W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const oe="@firebase/app",ae="0.10.13",ce=new q("@firebase/app"),ue="@firebase/app-compat",le="@firebase/analytics-compat",he="@firebase/analytics",de="@firebase/app-check-compat",fe="@firebase/app-check",me="@firebase/auth",ge="@firebase/auth-compat",pe="@firebase/database",ye="@firebase/data-connect",we="@firebase/database-compat",ve="@firebase/functions",be="@firebase/functions-compat",_e="@firebase/installations",Ie="@firebase/installations-compat",Ee="@firebase/messaging",Te="@firebase/messaging-compat",Se="@firebase/performance",Ce="@firebase/performance-compat",De="@firebase/remote-config",xe="@firebase/remote-config-compat",Ae="@firebase/storage",Ne="@firebase/storage-compat",ke="@firebase/firestore",Oe="@firebase/vertexai-preview",Re="@firebase/firestore-compat",Me="firebase",Pe="[DEFAULT]",Le={[oe]:"fire-core",[ue]:"fire-core-compat",[he]:"fire-analytics",[le]:"fire-analytics-compat",[fe]:"fire-app-check",[de]:"fire-app-check-compat",[me]:"fire-auth",[ge]:"fire-auth-compat",[pe]:"fire-rtdb",[ye]:"fire-data-connect",[we]:"fire-rtdb-compat",[ve]:"fire-fn",[be]:"fire-fn-compat",[_e]:"fire-iid",[Ie]:"fire-iid-compat",[Ee]:"fire-fcm",[Te]:"fire-fcm-compat",[Se]:"fire-perf",[Ce]:"fire-perf-compat",[De]:"fire-rc",[xe]:"fire-rc-compat",[Ae]:"fire-gcs",[Ne]:"fire-gcs-compat",[ke]:"fire-fst",[Re]:"fire-fst-compat",[Oe]:"fire-vertex","fire-js":"fire-js",[Me]:"fire-js-all"},Fe=new Map,Ve=new Map,Ue=new Map;function Be(e,t){try{e.container.addComponent(t)}catch(n){ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qe(e,t){e.container.addOrOverwriteComponent(t)}function je(e){const t=e.name;if(Ue.has(t))return ce.debug(`There were multiple attempts to register component ${t}.`),!1;Ue.set(t,e);for(const n of Fe.values())Be(n,e);for(const n of Ve.values())Be(n,e);return!0}function ze(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function $e(e){return void 0!==e.options}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ke=new b("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ge=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new N("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}};
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ge{constructor(e,t,n,r){const i=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,s={name:n,automaticDataCollectionEnabled:i};if(void 0!==e.apiKey)super(e,s,r);else{super(e.options,s,r)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Ye(oe,ae,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Je(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ke.create("server-app-deleted")}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="10.14.1";function We(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Pe,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Ke.create("bad-app-name",{appName:String(i)});if(n||(n=l()),!n)throw Ke.create("no-options");const s=Fe.get(i);if(s){if(E(n,s.options)&&E(r,s.config))return s;throw Ke.create("duplicate-app",{appName:i})}const o=new R(i);for(const c of Ue.values())o.addComponent(c);const a=new Ge(n,r,o);return Fe.set(i,a),a}async function Je(e){let t=!1;const n=e.name;if(Fe.has(n))t=!0,Fe.delete(n);else if(Ve.has(n)){e.decRefCount()<=0&&(Ve.delete(n),t=!0)}t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Ye(e,t,n){var r;let i=null!==(r=Le[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ce.warn(e.join(" "))}je(new N(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function Xe(e,t){if(null!==e&&"function"!=typeof e)throw Ke.create("invalid-log-argument");!function(e,t){for(const n of M){let r=null;t&&t.level&&(r=F[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:P[n].toLowerCase(),message:s,args:i,type:t.name})}}}(e,t)}function Ze(e){var t;t=e,M.forEach(e=>{e.setLogLevel(t)})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="firebase-heartbeat-store";let tt=null;function nt(){return tt||(tt=ee("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(et)}catch(n){}}}).catch(e=>{throw Ke.create("idb-open",{originalErrorMessage:e.message})})),tt}async function rt(e,t){try{const n=(await nt()).transaction(et,"readwrite"),r=n.objectStore(et);await r.put(t,it(e)),await n.done}catch(n){if(n instanceof v)ce.warn(n.message);else{const e=Ke.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});ce.warn(e.message)}}}function it(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new at(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ot();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(n){ce.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ot(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ct(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ct(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ce.warn(t),""}}}function ot(){return(new Date).toISOString().substring(0,10)}class at{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!p()&&y().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await nt()).transaction(et),n=await t.objectStore(et).get(it(e));return await t.done,n}catch(t){if(t instanceof v)ce.warn(t.message);else{const e=Ke.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ce.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ct(e){return i(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;ut="",je(new N("platform-logger",e=>new se(e),"PRIVATE")),je(new N("heartbeat",e=>new st(e),"PRIVATE")),Ye(oe,ae,ut),Ye(oe,ae,"esm2017"),Ye("fire-js","");const lt=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:v,SDK_VERSION:He,_DEFAULT_ENTRY_NAME:Pe,_addComponent:Be,_addOrOverwriteComponent:qe,_apps:Fe,_clearComponents:function(){Ue.clear()},_components:Ue,_getProvider:ze,_isFirebaseApp:$e,_isFirebaseServerApp:function(e){return void 0!==e.settings},_registerComponent:je,_removeServiceInstance:function(e,t,n=Pe){ze(e,t).clearInstance(n)},_serverApps:Ve,deleteApp:Je,getApp:function(e=Pe){const t=Fe.get(e);if(!t&&e===Pe&&l())return We();if(!t)throw Ke.create("no-app",{appName:e});return t},getApps:function(){return Array.from(Fe.values())},initializeApp:We,initializeServerApp:function(e,t){if(("undefined"!=typeof window||f())&&!f())throw Ke.create("invalid-server-app-environment");let n;void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),n=$e(e)?e.options:e;const r=Object.assign(Object.assign({},t),n);if(void 0!==r.releaseOnDeref&&delete r.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw Ke.create("finalization-registry-not-supported",{});const i=""+(s=JSON.stringify(r),[...s].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0));var s;const o=Ve.get(i);if(o)return o.incRefCount(t.releaseOnDeref),o;const a=new R(i);for(const u of Ue.values())a.addComponent(u);const c=new Qe(n,t,i,a);return Ve.set(i,c),c},onLog:Xe,registerVersion:Ye,setLogLevel:Ze},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this._delegate=e,this.firebase=t,Be(e,new N("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Je(this._delegate)))}_getService(e,t=Pe){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Pe){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Be(this._delegate,e)}_addOrOverwriteComponent(e){qe(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new b("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const ft=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,i={}){const s=We(r,i);if(I(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o},app:r,registerVersion:Ye,setLogLevel:Ze,onLog:Xe,apps:null,SDK_VERSION:He,INTERNAL:{registerComponent:function(t){const i=t.name,o=i.replace("-compat","");if(je(t)&&"PUBLIC"===t.type){const a=(e=r())=>{if("function"!=typeof e[o])throw dt.create("invalid-app-argument",{appName:i});return e[o]()};void 0!==t.serviceProps&&s(a,t.serviceProps),n[o]=a,e.prototype[o]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:lt}};function r(e){if(!I(t,e=e||Pe))throw dt.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),r.App=e,n}(ht);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){s(t,e)},createSubscribe:S,ErrorFactory:b,deepExtend:s}),t}(),mt=new q("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
try{const e=a();if(void 0!==e.firebase){mt.warn("\n      Warning: Firebase is already defined in the global scope. Please make sure\n      Firebase library is only loaded once.\n    ");const t=e.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&mt.warn("\n        Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n        ")}}catch(Tg){}const gt=ft;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Ye("@firebase/app-compat","0.2.43",e)}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
gt.registerVersion("firebase","10.14.1","app-compat");const pt="@firebase/installations",yt="0.6.9",wt=1e4,vt=`w:${yt}`,bt="FIS_v2",_t=36e5,It=new b("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Et(e){return e instanceof v&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function St(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Ct(e,t){const n=(await t.json()).error;return It.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Dt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function xt(e,{refreshToken:t}){const n=Dt(e);return n.append("Authorization",function(e){return`${bt} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function At(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kt=/^[cdef][\w-]{21}$/;function Ot(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return kt.test(t)?t:""}catch(Tg){return""}}function Rt(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Map;function Pt(e,t){const n=Rt(e);Lt(n,t),function(e,t){const n=function(){!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=e=>{Lt(e.data.key,e.data.fid)});return Ft}();n&&n.postMessage({key:e,fid:t});0===Mt.size&&Ft&&(Ft.close(),Ft=null)}(n,t)}function Lt(e,t){const n=Mt.get(e);if(n)for(const r of n)r(t)}let Ft=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt="firebase-installations-store";let Ut=null;function Bt(){return Ut||(Ut=ee("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Vt)}})),Ut}async function qt(e,t){const n=Rt(e),r=(await Bt()).transaction(Vt,"readwrite"),i=r.objectStore(Vt),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||Pt(e,t.fid),t}async function jt(e){const t=Rt(e),n=(await Bt()).transaction(Vt,"readwrite");await n.objectStore(Vt).delete(t),await n.done}async function zt(e,t){const n=Rt(e),r=(await Bt()).transaction(Vt,"readwrite"),i=r.objectStore(Vt),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||Pt(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e){let t;const n=await zt(e.appConfig,n=>{const r=function(e){const t=e||{fid:Ot(),registrationStatus:0};return Qt(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(It.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Tt(e),i=Dt(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:bt,appId:e.appId,sdkVersion:vt},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await At(()=>fetch(r,a));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:St(e.authToken)}}throw await Ct("Create Installation",c)}(e,t);return qt(e.appConfig,n)}catch(n){throw Et(n)&&409===n.customData.serverCode?await jt(e.appConfig):await qt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Kt(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Kt(e){let t=await Gt(e.appConfig);for(;1===t.registrationStatus;)await Nt(100),t=await Gt(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await $t(e);return n||t}return t}function Gt(e){return zt(e,e=>{if(!e)throw It.create("installation-not-found");return Qt(e)})}function Qt(e){return 1===(t=e).registrationStatus&&t.registrationTime+wt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Ht({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Tt(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=xt(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:vt,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await At(()=>fetch(r,a));if(c.ok){return St(await c.json())}throw await Ct("Generate Auth Token",c)}async function Wt(e,t=!1){let n;const r=await zt(e.appConfig,r=>{if(!Yt(r))throw It.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+_t}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Jt(e.appConfig);for(;1===n.authToken.requestStatus;)await Nt(100),n=await Jt(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Wt(e,t):r}(e,t),r;{if(!navigator.onLine)throw It.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Ht(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await qt(e.appConfig,r),n}catch(n){if(!Et(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await qt(e.appConfig,n)}else await jt(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function Jt(e){return zt(e,e=>{if(!Yt(e))throw It.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+wt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function Yt(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await $t(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await Wt(n,t)).token}function Zt(e){return It.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="installations",tn=e=>{const t=ze(e.getProvider("app").getImmediate(),en).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await $t(t);return r?r.catch(console.error):Wt(t).catch(console.error),n.fid}(t),getToken:e=>Xt(t,e)}};je(new N(en,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Zt("App Configuration");if(!e.name)throw Zt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Zt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:ze(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),je(new N("installations-internal",tn,"PRIVATE")),Ye(pt,yt),Ye(pt,yt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nn="analytics",rn="https://www.googletagmanager.com/gtag/js",sn=new q("@firebase/analytics"),on=new b("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(e){if(!e.startsWith(rn)){const t=on.create("invalid-gtag-resource",{gtagURL:e});return sn.warn(t.message),""}return e}function cn(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function un(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:an}),r=document.createElement("script"),i=`${rn}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ln(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await cn(n);for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){sn.error(s)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await cn(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(a){sn.error(a)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t,n]=s;e("consent",t,n)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){sn.error(o)}}}const hn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function dn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function fn(e,t=hn,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw on.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw on.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gn;return setTimeout(async()=>{a.abort()},6e4),mn({appId:r,apiKey:i,measurementId:s},o,a,t)}async function mn(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=hn){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(on.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(c){if(a)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:dn(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw on.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(o),t}catch(c){const t=c;if(!function(e){if(!(e instanceof v&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(o),a)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw c}const u=503===Number(null===(s=null==t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?x(n,i.intervalMillis,30):x(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,l),sn.debug(`Calling attemptFetch again in ${u} millis`),mn(e,l,r,i)}}class gn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pn(e,t,n,r,i,s,o){var a;const c=fn(e);c.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>sn.error(e)),t.push(c);const u=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(){if(!p())return sn.warn(on.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await y()}catch(e){return sn.warn(on.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[l,h]=await Promise.all([c,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(rn)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(s)||un(s,l.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn=class{constructor(e){this.app=e}_delete(){return delete wn[this.app.options.appId],Promise.resolve()}},wn={},vn=[];const bn={};let _n,In,En="dataLayer",Tn="gtag",Sn=!1;function Cn(e){if(Sn)throw on.create("already-initialized");e.dataLayerName&&(En=e.dataLayerName),e.gtagName&&(Tn=e.gtagName)}function Dn(e,t,n){!function(){const e=[];if(m()&&e.push("This is a browser extension environment."),w()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=on.create("invalid-analytics-context",{errorInfo:t});sn.warn(n.message)}}();const r=e.options.appId;if(!r)throw on.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw on.create("no-api-key");sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=wn[r])throw on.create("already-exists",{id:r});if(!Sn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(En);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=ln(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(wn,vn,bn,En,Tn);In=e,_n=t,Sn=!0}wn[r]=pn(e,vn,bn,t,_n,En,n);return new yn(e)}async function xn(){if(m())return!1;if(!w())return!1;if(!p())return!1;try{return await y()}catch(e){return!1}}function An(e,t,n){e=A(e),async function(e,t,n,r){if(r&&r.global)return e("set",{screen_name:n}),Promise.resolve();e("config",await t,{update:!0,screen_name:n})}(In,wn[e.app.options.appId],t,n).catch(e=>sn.error(e))}function Nn(e,t,n){e=A(e),async function(e,t,n,r){if(r&&r.global)return e("set",{user_id:n}),Promise.resolve();e("config",await t,{update:!0,user_id:n})}(In,wn[e.app.options.appId],t,n).catch(e=>sn.error(e))}function kn(e,t,n){e=A(e),async function(e,t,n,r){if(r&&r.global){const t={};for(const e of Object.keys(n))t[`user_properties.${e}`]=n[e];return e("set",t),Promise.resolve()}e("config",await t,{update:!0,user_properties:n})}(In,wn[e.app.options.appId],t,n).catch(e=>sn.error(e))}function On(e,t){e=A(e),async function(e,t){const n=await e;window[`ga-disable-${n}`]=!t}(wn[e.app.options.appId],t).catch(e=>sn.error(e))}function Rn(e,t,n,r){e=A(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(In,wn[e.app.options.appId],t,n,r).catch(e=>sn.error(e))}const Mn="@firebase/analytics",Pn="0.10.8";je(new N(nn,(e,{options:t})=>Dn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),je(new N("analytics-internal",function(e){try{const t=e.getProvider(nn).getImmediate();return{logEvent:(e,n,r)=>Rn(t,e,n,r)}}catch(t){throw on.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),Ye(Mn,Pn),Ye(Mn,Pn,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln{constructor(e,t){this.app=e,this._delegate=t}logEvent(e,t,n){Rn(this._delegate,e,t,n)}setCurrentScreen(e,t){An(this._delegate,e,t)}setUserId(e,t){Nn(this._delegate,e,t)}setUserProperties(e,t){kn(this._delegate,e,t)}setAnalyticsCollectionEnabled(e){On(this._delegate,e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn,Vn;(Vn=Fn||(Fn={})).ADD_SHIPPING_INFO="add_shipping_info",Vn.ADD_PAYMENT_INFO="add_payment_info",Vn.ADD_TO_CART="add_to_cart",Vn.ADD_TO_WISHLIST="add_to_wishlist",Vn.BEGIN_CHECKOUT="begin_checkout",Vn.CHECKOUT_PROGRESS="checkout_progress",Vn.EXCEPTION="exception",Vn.GENERATE_LEAD="generate_lead",Vn.LOGIN="login",Vn.PAGE_VIEW="page_view",Vn.PURCHASE="purchase",Vn.REFUND="refund",Vn.REMOVE_FROM_CART="remove_from_cart",Vn.SCREEN_VIEW="screen_view",Vn.SEARCH="search",Vn.SELECT_CONTENT="select_content",Vn.SELECT_ITEM="select_item",Vn.SELECT_PROMOTION="select_promotion",Vn.SET_CHECKOUT_OPTION="set_checkout_option",Vn.SHARE="share",Vn.SIGN_UP="sign_up",Vn.TIMING_COMPLETE="timing_complete",Vn.VIEW_CART="view_cart",Vn.VIEW_ITEM="view_item",Vn.VIEW_ITEM_LIST="view_item_list",Vn.VIEW_PROMOTION="view_promotion",Vn.VIEW_SEARCH_RESULTS="view_search_results";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un=e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("analytics").getImmediate();return new Ln(t,n)};!function(){const e={Analytics:Ln,settings:Cn,isSupported:xn,EventName:Fn};gt.INTERNAL.registerComponent(new N("analytics-compat",Un,"PUBLIC").setServiceProps(e).setMultipleInstances(!0))}(),gt.registerVersion("@firebase/analytics-compat","0.2.14");var Bn,qn,jn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],0>e?-1:0)}):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),c=s(1),u=s(16777216);function l(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(c)}function f(e,t){return e.add(d(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function p(e,t){if(l(t))throw Error("division by zero");if(l(e))return new g(a,a);if(h(e))return t=p(d(e),t),new g(d(t.g),d(t.h));if(h(t))return t=p(e,d(t)),new g(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=w(n,1),s=w(r,1);for(r=w(r,2),n=w(n,2);!l(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=w(r,1),n=w(n,1)}return t=f(e,i.j(t)),new g(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(t);h(u)||0<u.l(e);)u=(s=o(n-=r)).j(t);l(s)&&(s=c),i=i.add(s),e=f(e,u)}return new g(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function w(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(l(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=p(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(l(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:l(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(l(this)||l(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),g=e.i(s)>>>16,p=65535&e.i(s);n[2*i+2*s]+=f*p,m(n,2*i+2*s),n[2*i+2*s+1]+=c*p,m(n,2*i+2*s+1),n[2*i+2*s+1]+=f*g,m(n,2*i+2*s+1),n[2*i+2*s+2]+=c*g,m(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return p(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,qn=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var c=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},Bn=r}).apply(void 0!==jn?jn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var zn,$n,Kn,Gn,Qn,Hn,Wn,Jn,Yn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Yn&&Yn];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,function(e,t){return t})}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function l(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function m(e){return/^[\s\xa0]*$/.test(e)}function g(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function p(e){return p[" "](e),e}p[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function w(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function v(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function I(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function E(e){i.setTimeout(()=>{throw e},0)}function T(){var e=A;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var S=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new C,e=>e.reset());class C{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let D,x=!1,A=new class{constructor(){this.h=this.g=null}add(e,t){const n=S.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},N=()=>{const e=i.Promise.resolve(void 0);D=()=>{e.then(k)}};var k=()=>{for(var e;e=T();){try{e.h.call(e.g)}catch(n){E(n)}var t=S;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}x=!1};function O(){this.s=this.s,this.C=this.C}function R(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.s=!1,O.prototype.ma=function(){this.s||(this.s=!0,this.N())},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},R.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function P(e,t){if(R.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{p(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:L[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&P.aa.h.call(this)}}h(P,R);var L={2:"touch",3:"pen",4:"mouse"};P.prototype.h=function(){P.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++V,this.da=this.fa=!1}function B(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function q(e){this.src=e,this.g={},this.h=0}function j(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(B(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function z(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}q.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=z(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new U(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var $="closure_lm_"+(1e6*Math.random()|0),K={};function G(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)G(e,t[s],n,r,i);return null}return n=Z(n),e&&e[F]?e.K(t,n,!!o(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=Y(e);if(c||(e[$]=c=new q(e)),n=c.add(t,n,r,a,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=J;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)M||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(W(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function Q(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Q(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[F]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=z(s=e.g[t],n,r,i))&&(B(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Y(e))&&(t=e.g[t.toString()],e=-1,t&&(e=z(t,n,r,i)),(n=-1<e?t[e]:null)&&H(n))}function H(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[F])j(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(W(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Y(t))?(j(n,e),0==n.h&&(n.src=null,t[$]=null)):B(e)}}}function W(e){return e in K?K[e]:K[e]="on"+e}function J(e,t){if(e.da)e=!0;else{t=new P(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&H(e),e=n.call(r,t)}return e}function Y(e){return(e=e[$])instanceof q?e:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[X]||(e[X]=function(t){return e.handleEvent(t)}),e[X])}function ee(){O.call(this),this.i=new q(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new R(t,e);else if(t instanceof R)t.target=t.target||e;else{var i=t;_(t=new R(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ne(o,r,!0,t)&&i}if(i=ne(o=t.g=e,r,!0,t)&&i,i=ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(o=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&j(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re(()=>{e.g=null,e.i&&(e.i=!1,ie(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,O),ee.prototype[F]=!0,ee.prototype.removeEventListener=function(e,t,n,r){Q(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)B(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends O{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){O.call(this),this.h=e,this.g={}}h(oe,O);var ae=[];function ce(e){w(e.g,function(e,t){this.g.hasOwnProperty(t)&&H(e)},e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),ce(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,le=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function me(){}de.prototype.h=null;var ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pe(){R.call(this,"d")}function ye(){R.call(this,"c")}h(pe,R),h(ye,R);var we={},ve=null;function be(){return ve=ve||new ee}function _e(e){R.call(this,we.La,e)}function Ie(e){const t=be();te(t,new _e(t))}function Ee(e,t){R.call(this,we.STAT_EVENT,e),this.stat=t}function Te(e){const t=be();te(t,new Ee(t,e))}function Se(e,t){R.call(this,we.Ma,e),this.size=t}function Ce(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function De(){this.g=!0}function xe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ue(n)}catch(a){return t}}(e,n)+(r?" "+r:"")})}we.La="serverreachability",h(_e,R),we.STAT_EVENT="statevent",h(Ee,R),we.Ma="timingevent",h(Se,R),De.prototype.xa=function(){this.g=!1},De.prototype.info=function(){};var Ae,Ne={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ke={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Oe(){}function Re(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Me}function Me(){this.i=null,this.g="",this.h=!1}h(Oe,de),Oe.prototype.g=function(){return new XMLHttpRequest},Oe.prototype.i=function(){return{}},Ae=new Oe;var Pe={},Le={};function Fe(e,t,n){e.L=1,e.v=ut(it(t)),e.m=n,e.P=!0,Ve(e,null)}function Ve(e,t){e.F=Date.now(),qe(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),It(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Me,e.g=ln(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=G(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?v(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ie(),function(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ue(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Be(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Le:(n=Number(t.substring(n,r)),isNaN(n)?Pe:(r+=1)+n>t.length?Le:(t=t.slice(r,r+n),e.C=r+n,t))}function qe(e){e.S=Date.now()+e.I,je(e,e.I)}function je(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ce(u(e.ba,e),t)}function ze(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function $e(e){0==e.j.G||e.J||sn(e.j,e)}function Ke(e){ze(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ce(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ge(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Ye(n.h,e)))if(!e.K&&Ye(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;rn(n),Qt(n)}en(n),Te(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ce(u(n.Za,n),6e3));if(1>=Je(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else an(n,11)}else if((e.K||n.g==e)&&rn(n),!m(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Xe(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ct(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=un(r,r.J?r.ia:null,r.W),o.K){Ze(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(ze(a),qe(a)),r.g=o}else Zt(r);0<n.i.length&&Wt(n)}else"stop"!=u[0]&&"close"!=u[0]||an(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?an(n,7):Gt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ie()}catch(l){}}Re.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==jt(e)?t.j():this.Y(e)},Re.prototype.Y=function(e){try{if(e==this.g)e:{const d=jt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||zt(this.g)))){this.J||4!=d||7==t||Ie(),ze(this);var n=this.g.Z();this.X=n;t:if(Ue(this)){var r=zt(this.g);e="";var s=r.length,o=4==jt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ke(this),$e(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(c)){var l=c;break t}}l=null}if(!(n=l)){this.o=!1,this.s=3,Te(12),Ke(this),$e(this);break e}xe(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ge(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=Be(this,a),e==Le){4==d&&(this.s=4,Te(14),n=!1),xe(this.i,this.l,null,"[Incomplete Response]");break}if(e==Pe){this.s=4,Te(15),xe(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}xe(this.i,this.l,e,null),Ge(this,e)}if(Ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Te(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tn(h),h.M=!0,Te(11))}}else xe(this.i,this.l,a,"[Invalid Chunked Response]"),Ke(this),$e(this)}else xe(this.i,this.l,a,null),Ge(this,a);4==d&&Ke(this),this.o&&!this.J&&(4==d?sn(this.j,this):(this.o=!1,qe(this)))}else(function(e){const t={};e=(e.g&&2<=jt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(m(e[r]))continue;var n=I(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),Ke(this),$e(this)}}}catch(d){}},Re.prototype.cancel=function(){this.J=!0,Ke(this)},Re.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(Ie(),Te(17)),Ke(this),this.s=2,$e(this)):je(this,this.S-e)};var Qe=class{constructor(e,t){this.g=e,this.map=t}};function He(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function We(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Je(e){return e.h?1:e.g?e.g.size:0}function Ye(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Xe(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}He.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.s),this.l=e.l;var t=e.i,n=new wt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),at(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=lt(t[2]||""),this.g=lt(t[3]||"",!0),ot(this,t[4]),this.l=lt(t[5]||"",!0),at(this,t[6]||"",!0),this.m=lt(t[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?lt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function at(e,t,n){t instanceof wt?(e.i=t,function(e,t){t&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(bt(this,t),It(this,n,e))},e)),e.j=t}(e.i,e.h)):(n||(t=ht(t,pt)),e.i=new wt(t,e.h))}function ct(e,t,n){e.i.set(t,n)}function ut(e){return ct(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function lt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ht(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,dt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ht(t,ft,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ht(t,ft,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ht(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ht(n,yt)),e.join("")};var ft=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,pt=/[#\?@]/g,yt=/#/g;function wt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function bt(e,t){vt(e),t=Et(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _t(e,t){return vt(e),t=Et(e,t),e.g.has(t)}function It(e,t,n){bt(e,t),0<n.length&&(e.i=null,e.g.set(Et(e,t),d(n)),e.h+=n.length)}function Et(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Tt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function St(){this.g=new he}function Ct(e,t,n){const r=n||"";try{tt(e,function(e,n){let i=e;o(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Dt(e){this.l=e.Ub||null,this.j=e.eb||!1}function xt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Nt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,kt(e)}function kt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Ot(e){let t="";return w(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Rt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ot(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ct(e,t,n))}function Mt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=wt.prototype).add=function(e,t){vt(this),this.i=null,e=Et(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){vt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.na=function(){vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){vt(this);let t=[];if("string"==typeof e)_t(this,e)&&(t=t.concat(this.g.get(Et(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return vt(this),this.i=null,_t(this,e=Et(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},h(Dt,de),Dt.prototype.g=function(){return new xt(this.l,this.j)},Dt.prototype.i=function(e){return function(){return e}}({}),h(xt,ee),(e=xt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,kt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Nt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kt(this)),this.g&&(this.readyState=3,kt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Nt(this):kt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Nt(this))},e.Qa=function(e){this.g&&(this.response=e,Nt(this))},e.ga=function(){this.g&&Nt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Mt,ee);var Pt=/^https?$/i,Lt=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Vt(e),Bt(e)}function Vt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Ut(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=jt(e)||2!=e.Z()))if(e.u&&4==jt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==jt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var o=String(e.D).match(nt)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Pt.test(o?o.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<jt(e)?e.g.statusText:""}catch(c){a=""}e.l=a+" ["+e.Z()+"]",Vt(e)}}finally{Bt(e)}}}function Bt(e,t){if(e.g){qt(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function qt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function jt(e){return e.g?e.g.readyState:0}function zt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function $t(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kt(e){this.Aa=0,this.i=[],this.j=new De,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$t("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$t("baseRetryDelayMs",5e3,e),this.cb=$t("retryDelaySeedMs",1e4,e),this.Wa=$t("forwardChannelMaxRetries",2,e),this.wa=$t("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new He(e&&e.concurrentRequestLimit),this.Da=new St,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Gt(e){if(Ht(e),3==e.G){var t=e.U++,n=it(e.I);if(ct(n,"SID",e.K),ct(n,"RID",t),ct(n,"TYPE","terminate"),Yt(e,n),(t=new Re(e,e.j,t)).L=2,t.v=ut(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=ln(t.j,null),t.g.ea(t.v)),t.F=Date.now(),qe(t)}cn(e)}function Qt(e){e.g&&(tn(e),e.g.cancel(),e.g=null)}function Ht(e){Qt(e),e.u&&(i.clearTimeout(e.u),e.u=null),rn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Wt(e){if(!We(e.h)&&!e.s){e.s=!0;var t=e.Ga;D||N(),x||(D(),x=!0),A.add(t,e),e.B=0}}function Jt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);ct(r,"SID",e.K),ct(r,"RID",n),ct(r,"AID",e.T),Yt(e,r),e.m&&e.o&&Rt(r,e.m,e.o),n=new Re(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Xt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Xe(e.h,n),Fe(n,r,t)}function Yt(e,t){e.H&&w(e.H,function(e,n){ct(t,n,e)}),e.l&&tt({},function(e,n){ct(t,n,e)})}function Xt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Ct(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Zt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;D||N(),x||(D(),x=!0),A.add(t,e),e.v=0}}function en(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ce(u(e.Fa,e),on(e,e.v)),e.v++,!0)}function tn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function nn(e){e.g=new Re(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);ct(t,"RID","rpc"),ct(t,"SID",e.K),ct(t,"AID",e.T),ct(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ct(t,"TO",e.ja),ct(t,"TYPE","xmlhttp"),Yt(e,t),e.m&&e.o&&Rt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ut(it(t)),n.m=null,n.P=!0,Ve(n,e)}function rn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function sn(e,t){var n=null;if(e.g==t){rn(e),tn(e),e.g=null;var r=2}else{if(!Ye(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=be(),new Se(r,n)),Wt(e)}else Zt(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Je(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ce(u(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&en(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function an(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ut(r),t?function(e,t){const n=new De;if(i.Image){const r=new Image;r.onload=l(Tt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=l(Tt,n,"TestLoadImage: error",!1,t,r),r.onabort=l(Tt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=l(Tt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new De;const n=new AbortController,r=setTimeout(()=>{n.abort(),Tt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Tt(0,0,!0,t):Tt(0,0,!1,t)}).catch(()=>{clearTimeout(r),Tt(0,0,!1,t)})}(r.toString(),n)}else Te(2);e.G=0,e.l&&e.l.sa(t),cn(e),Ht(e)}function cn(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function un(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ot(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new rt(null);r&&st(o,r),t&&(o.g=t),s&&ot(o,s),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&ct(r,n,t),ct(r,"VER",e.la),Yt(e,r),r}function ln(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Mt(new Dt({eb:n})):new Mt(e.pa)).Ha(e.J),t}function hn(){}function dn(){}function fn(e,t){ee.call(this),this.g=new Kt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!m(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!m(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new pn(this)}function mn(e){pe.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function pn(e){this.g=e}(e=Mt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ae.g(),this.v=this.o?fe(this.o):fe(Ae),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Ft(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Lt,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Ft(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Bt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bt(this,!0)),Mt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ut(this):this.bb())},e.bb=function(){Ut(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),le(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Kt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Te(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=un(this,null,this.W),Wt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Re(this,this.j,e);let s=this.o;if(this.S&&(s?(s=v(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xt(this,i,t),ct(n=it(this.I),"RID",e),ct(n,"CVER",22),this.D&&ct(n,"X-HTTP-Session-Id",this.D),Yt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Ot(s)))+"&"+t:this.m&&Rt(n,this.m,s)),Xe(this.h,i),this.Ua&&ct(n,"TYPE","init"),this.P?(ct(n,"$req",t),ct(n,"SID","null"),i.T=!0,Fe(i,n,null)):Fe(i,n,t),this.G=2}}else 3==this.G&&(e?Jt(this,e):0==this.i.length||We(this.h)||Jt(this))},e.Fa=function(){if(this.u=null,nn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ce(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),Qt(this),nn(this))},e.Za=function(){null!=this.C&&(this.C=null,Qt(this),en(this),Te(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=hn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},dn.prototype.g=function(e,t){return new fn(e,t)},h(fn,ee),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Gt(this.g)},fn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new Qe(t.Ya++,e)),3==t.G&&Wt(t)},fn.prototype.N=function(){this.g.l=null,delete this.j,Gt(this.g),delete this.g,fn.aa.N.call(this)},h(mn,pe),h(gn,ye),h(pn,hn),pn.prototype.ua=function(){te(this.g,"a")},pn.prototype.ta=function(e){te(this.g,new mn(e))},pn.prototype.sa=function(e){te(this.g,new gn)},pn.prototype.ra=function(){te(this.g,"b")},dn.prototype.createWebChannel=dn.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,Jn=function(){return new dn},Wn=function(){return be()},Hn=we,Qn={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ne.NO_ERROR=0,Ne.TIMEOUT=8,Ne.HTTP_ERROR=6,Gn=Ne,ke.COMPLETE="complete",Kn=ke,me.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",ee.prototype.listen=ee.prototype.K,$n=me,Mt.prototype.listenOnce=Mt.prototype.L,Mt.prototype.getLastError=Mt.prototype.Ka,Mt.prototype.getLastErrorCode=Mt.prototype.Ba,Mt.prototype.getStatus=Mt.prototype.Z,Mt.prototype.getResponseJson=Mt.prototype.Oa,Mt.prototype.getResponseText=Mt.prototype.oa,Mt.prototype.send=Mt.prototype.ea,Mt.prototype.setWithCredentials=Mt.prototype.Ha,zn=Mt}).apply(void 0!==Yn?Yn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Xn="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zn.UNAUTHENTICATED=new Zn(null),Zn.GOOGLE_CREDENTIALS=new Zn("google-credentials-uid"),Zn.FIRST_PARTY=new Zn("first-party-uid"),Zn.MOCK_USER=new Zn("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let er="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new q("@firebase/firestore");function nr(){return tr.logLevel}function rr(e,...t){if(tr.logLevel<=P.DEBUG){const n=t.map(or);tr.debug(`Firestore (${er}): ${e}`,...n)}}function ir(e,...t){if(tr.logLevel<=P.ERROR){const n=t.map(or);tr.error(`Firestore (${er}): ${e}`,...n)}}function sr(e,...t){if(tr.logLevel<=P.WARN){const n=t.map(or);tr.warn(`Firestore (${er}): ${e}`,...n)}}function or(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e="Unexpected state"){const t=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: `+e;throw ir(t),new Error(t)}function cr(e,t){e||ar()}function ur(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hr extends v{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Zn.UNAUTHENTICATED))}shutdown(){}}class gr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class pr{constructor(e){this.t=e,this.currentUser=Zn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){cr(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dr,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{rr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(rr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dr)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(rr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(cr("string"==typeof t.accessToken),new fr(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return cr(null===e||"string"==typeof e),new Zn(e)}}class yr{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Zn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wr{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new yr(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Zn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class br{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){cr(void 0===this.o);const n=e=>{null!=e.error&&rr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,rr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{rr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):rr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(cr("string"==typeof e.token),this.R=e.token,new vr(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=_r(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function Er(e,t){return e<t?-1:e>t?1:0}function Tr(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function Sr(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new hr(lr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new hr(lr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new hr(lr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new hr(lr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Cr.fromMillis(Date.now())}static fromDate(e){return Cr.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Cr(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Er(this.nanoseconds,e.nanoseconds):Er(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Dr(e)}static min(){return new Dr(new Cr(0,0))}static max(){return new Dr(new Cr(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,n){void 0===t?t=0:t>e.length&&ar(),void 0===n?n=e.length-t:n>e.length-t&&ar(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===xr.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ar extends xr{construct(e,t,n){return new Ar(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new hr(lr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Ar(t)}static emptyPath(){return new Ar([])}}const Nr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kr extends xr{construct(e,t,n){return new kr(e,t,n)}static isValidIdentifier(e){return Nr.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new kr(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new hr(lr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new hr(lr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new hr(lr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new hr(lr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kr(t)}static emptyPath(){return new kr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.path=e}static fromPath(e){return new Or(Ar.fromString(e))}static fromName(e){return new Or(Ar.fromString(e).popFirst(5))}static empty(){return new Or(Ar.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ar.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ar.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Or(new Ar(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Mr(e){return e.fields.find(e=>2===e.kind)}function Pr(e){return e.fields.filter(e=>2!==e.kind)}Rr.UNKNOWN_ID=-1;class Lr{constructor(e,t){this.fieldPath=e,this.kind=t}}class Fr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Fr(0,Br.min())}}function Vr(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Dr.fromTimestamp(1e9===r?new Cr(n+1,0):new Cr(n,r));return new Br(i,Or.empty(),t)}function Ur(e){return new Br(e.readTime,e.key,-1)}class Br{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Br(Dr.min(),Or.empty(),-1)}static max(){return new Br(Dr.max(),Or.empty(),-1)}}function qr(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Or.comparator(e.documentKey,t.documentKey),0!==n?n:Er(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const jr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(e){if(e.code!==lr.FAILED_PRECONDITION||e.message!==jr)throw e;rr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ar(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Kr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Kr?t:Kr.resolve(t)}catch(t){return Kr.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Kr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Kr.reject(t)}static resolve(e){return new Kr((t,n)=>{t(e)})}static reject(e){return new Kr((t,n)=>{n(e)})}static waitFor(e){return new Kr((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Kr.resolve(!1);for(const n of e)t=t.next(e=>e?Kr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Kr((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next(e=>{s[c]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new Kr((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new dr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Jr(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=ti(t.target.error);this.V.reject(new Jr(e,n))}}static open(e,t,n,r){try{return new Gr(t,e.transaction(r,n))}catch(i){throw new Jr(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(rr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Xr(t)}}class Qr{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===Qr.S(d())&&ir("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return rr("SimpleDb","Removing database:",e),Zr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!p())return!1;if(Qr.v())return!0;const e=d(),t=Qr.S(e),n=0<t&&t<10,r=Hr(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.C)}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(rr("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Jr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new hr(lr.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new hr(lr.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Jr(e,r))},r.onupgradeneeded=e=>{rr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.O(t,r.transaction,e.oldVersion,this.version).next(()=>{rr("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.M(e);const t=Gr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),Kr.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(o){const e=o,t="FirebaseError"!==e.name&&s<3;if(rr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Hr(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Wr{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Zr(this.B.delete())}}class Jr extends hr{constructor(e,t){super(lr.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Yr(e){return"IndexedDbTransactionError"===e.name}class Xr{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(rr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(rr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Zr(n)}add(e){return rr("SimpleDb","ADD",this.store.name,e,e),Zr(this.store.add(e))}get(e){return Zr(this.store.get(e)).next(t=>(void 0===t&&(t=null),rr("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return rr("SimpleDb","DELETE",this.store.name,e),Zr(this.store.delete(e))}count(){return rr("SimpleDb","COUNT",this.store.name),Zr(this.store.count())}U(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new Kr((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{const e=this.cursor(n),t=[];return this.W(e,(e,n)=>{t.push(n)}).next(()=>t)}}G(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Kr((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}j(e,t){rr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.W(r,(e,t,n)=>n.delete())}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Y(e){const t=this.cursor({});return new Kr((n,r)=>{t.onerror=e=>{const t=ti(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}W(e,t){const n=[];return new Kr((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Wr(i),o=t(i.primaryKey,i.value,s);if(o instanceof Kr){const e=o.catch(e=>(s.done(),Kr.reject(e)));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}}).next(()=>Kr.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zr(e){return new Kr((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ti(e.target.error);n(t)}})}let ei=!1;function ti(e){const t=Qr.S(d());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new hr("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ei||(ei=!0,setTimeout(()=>{throw e},0)),e}}return e}class ni{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}X(e){rr("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{rr("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){Yr(e)?rr("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await $r(e)}await this.X(6e4)})}}class ri{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let r=t,i=!0;return Kr.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return rr("IndexBackfiller",`Processing collection: ${t}`),this.ne(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.re(r,n)).next(n=>(rr("IndexBackfiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}re(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=Ur(t);qr(r,n)>0&&(n=r)}),new Br(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function si(e){return null==e}function oi(e){return 0===e&&1/e==-1/0}function ai(e){return"number"==typeof e&&Number.isInteger(e)&&!oi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=li(t)),t=ui(e.get(n),t);return li(t)}function ui(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function li(e){return e+""}function hi(e){const t=e.length;if(cr(t>=2),2===t)return cr(""===e.charAt(0)&&""===e.charAt(1)),Ar.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&ar(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:ar()}s=t+2}return new Ar(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.oe=-1;const di=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e,t){return[e,ci(t)]}function mi(e,t,n){return[e,ci(t),n]}const gi={},pi=["prefixPath","collectionGroup","readTime","documentId"],yi=["prefixPath","collectionGroup","documentId"],wi=["collectionGroup","readTime","prefixPath","documentId"],vi=["canonicalId","targetId"],bi=["targetId","path"],_i=["path","targetId"],Ii=["collectionId","parent"],Ei=["indexId","uid"],Ti=["uid","sequenceNumber"],Si=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ci=["indexId","uid","orderedDocumentKey"],Di=["userId","collectionPath","documentId"],xi=["userId","collectionPath","largestBatchId"],Ai=["userId","collectionGroup","largestBatchId"],Ni=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ki=[...Ni,"documentOverlays"],Oi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ri=Oi,Mi=[...Ri,"indexConfiguration","indexState","indexEntries"],Pi=Mi,Li=[...Mi,"globals"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends zr{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Vi(e,t){const n=ur(e);return Qr.F(n._e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Bi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function qi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.comparator=e,this.root=t||$i.EMPTY}insert(e,t){return new ji(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$i.BLACK,null,null))}remove(e){return new ji(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$i.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zi(this.root,e,this.comparator,!0)}}class zi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $i{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:$i.RED,this.left=null!=r?r:$i.EMPTY,this.right=null!=i?i:$i.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new $i(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $i.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return $i.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$i.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$i.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ar();if(this.right.isRed())throw ar();const e=this.left.check();if(e!==this.right.check())throw ar();return e+(this.isRed()?0:1)}}$i.EMPTY=null,$i.RED=!0,$i.BLACK=!1,$i.EMPTY=new class{constructor(){this.size=0}get key(){throw ar()}get value(){throw ar()}get color(){throw ar()}get left(){throw ar()}get right(){throw ar()}copy(e,t,n,r,i){return this}insert(e,t,n){return new $i(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(e){this.comparator=e,this.data=new ji(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gi(this.data.getIterator())}getIteratorFrom(e){return new Gi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ki))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ki(this.comparator);return t.data=e,t}}class Gi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qi(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.fields=e,e.sort(kr.comparator)}static empty(){return new Hi([])}unionWith(e){let t=new Ki(kr.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Hi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Wi("Invalid base64 string: "+t):t}}(e);return new Ji(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ji(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Er(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ji.EMPTY_BYTE_STRING=new Ji("");const Yi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(e){if(cr(!!e),"string"==typeof e){let t=0;const n=Yi.exec(e);if(cr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Zi(e.seconds),nanos:Zi(e.nanos)}}function Zi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function es(e){return"string"==typeof e?Ji.fromBase64String(e):Ji.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ns(e){const t=e.mapValue.fields.__previous_value__;return ts(t)?ns(t):t}function rs(e){const t=Xi(e.mapValue.fields.__local_write_time__.timestampValue);return new Cr(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ss{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ss("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ss&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},as={nullValue:"NULL_VALUE"};function cs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ts(e)?4:Ts(e)?9007199254740991:Is(e)?10:11:ar()}function us(e,t){if(e===t)return!0;const n=cs(e);if(n!==cs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rs(e).isEqual(rs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Xi(e.timestampValue),r=Xi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,es(e.bytesValue).isEqual(es(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Zi(e.geoPointValue.latitude)===Zi(t.geoPointValue.latitude)&&Zi(e.geoPointValue.longitude)===Zi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Zi(e.integerValue)===Zi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Zi(e.doubleValue),r=Zi(t.doubleValue);return n===r?oi(n)===oi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Tr(e.arrayValue.values||[],t.arrayValue.values||[],us);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ui(n)!==Ui(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!us(n[i],r[i])))return!1;return!0}(e,t);default:return ar()}var r}function ls(e,t){return void 0!==(e.values||[]).find(e=>us(e,t))}function hs(e,t){if(e===t)return 0;const n=cs(e),r=cs(t);if(n!==r)return Er(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Er(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Zi(e.integerValue||e.doubleValue),r=Zi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ds(e.timestampValue,t.timestampValue);case 4:return ds(rs(e),rs(t));case 5:return Er(e.stringValue,t.stringValue);case 6:return function(e,t){const n=es(e),r=es(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Er(n[i],r[i]);if(0!==e)return e}return Er(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Er(Zi(e.latitude),Zi(t.latitude));return 0!==n?n:Er(Zi(e.longitude),Zi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return fs(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=Er((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:fs(c,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===os.mapValue&&t===os.mapValue)return 0;if(e===os.mapValue)return 1;if(t===os.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Er(r[o],s[o]);if(0!==e)return e;const t=hs(n[r[o]],i[s[o]]);if(0!==t)return t}return Er(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ar()}}function ds(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Er(e,t);const n=Xi(e),r=Xi(t),i=Er(n.seconds,r.seconds);return 0!==i?i:Er(n.nanos,r.nanos)}function fs(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=hs(n[i],r[i]);if(e)return e}return Er(n.length,r.length)}function ms(e){return gs(e)}function gs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Xi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?es(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Or.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=gs(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${gs(e.fields[i])}`;return n+"}"}(e.mapValue):ar()}function ps(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ys(e){return!!e&&"integerValue"in e}function ws(e){return!!e&&"arrayValue"in e}function vs(e){return!!e&&"nullValue"in e}function bs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _s(e){return!!e&&"mapValue"in e}function Is(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Es(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Bi(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Es(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Es(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ts(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}const Ss={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Cs(e){return"nullValue"in e?as:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?ps(ss.empty(),Or.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?Is(e)?Ss:{mapValue:{}}:ar()}function Ds(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?ps(ss.empty(),Or.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?Ss:"mapValue"in e?Is(e)?{mapValue:{}}:os:ar()}function xs(e,t){const n=hs(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function As(e,t){const n=hs(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.value=e}static empty(){return new Ns({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!_s(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=kr.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Es(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());_s(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return us(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];_s(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Bi(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Ns(Es(this.value))}}function ks(e){const t=[];return Bi(e.fields,(e,n)=>{const r=new kr([e]);if(_s(n)){const e=ks(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Hi(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Os{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Os(e,0,Dr.min(),Dr.min(),Dr.min(),Ns.empty(),0)}static newFoundDocument(e,t,n,r){return new Os(e,1,t,Dr.min(),n,r,0)}static newNoDocument(e,t){return new Os(e,2,t,Dr.min(),Dr.min(),Ns.empty(),0)}static newUnknownDocument(e,t){return new Os(e,3,t,Dr.min(),Dr.min(),Ns.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Dr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ns.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ns.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Dr.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Os&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Os(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.position=e,this.inclusive=t}}function Ms(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Or.comparator(Or.fromName(o.referenceValue),n.key):hs(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ps(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!us(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{}class Us extends Vs{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ws(e,t,n):"array-contains"===t?new Zs(e,n):"in"===t?new eo(e,n):"not-in"===t?new to(e,n):"array-contains-any"===t?new no(e,n):new Us(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Js(e,n):new Ys(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(hs(t,this.value)):null!==t&&cs(this.value)===cs(t)&&this.matchesComparison(hs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ar()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bs extends Vs{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Bs(e,t)}matches(e){return qs(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qs(e){return"and"===e.op}function js(e){return"or"===e.op}function zs(e){return $s(e)&&qs(e)}function $s(e){for(const t of e.filters)if(t instanceof Bs)return!1;return!0}function Ks(e){if(e instanceof Us)return e.field.canonicalString()+e.op.toString()+ms(e.value);if(zs(e))return e.filters.map(e=>Ks(e)).join(",");{const t=e.filters.map(e=>Ks(e)).join(",");return`${e.op}(${t})`}}function Gs(e,t){return e instanceof Us?(n=e,(r=t)instanceof Us&&n.op===r.op&&n.field.isEqual(r.field)&&us(n.value,r.value)):e instanceof Bs?function(e,t){return t instanceof Bs&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Gs(n,t.filters[r]),!0)}(e,t):void ar();var n,r}function Qs(e,t){const n=e.filters.concat(t);return Bs.create(n,e.op)}function Hs(e){return e instanceof Us?`${(t=e).field.canonicalString()} ${t.op} ${ms(t.value)}`:e instanceof Bs?function(e){return e.op.toString()+" {"+e.getFilters().map(Hs).join(" ,")+"}"}(e):"Filter";var t}class Ws extends Us{constructor(e,t,n){super(e,t,n),this.key=Or.fromName(n.referenceValue)}matches(e){const t=Or.comparator(e.key,this.key);return this.matchesComparison(t)}}class Js extends Us{constructor(e,t){super(e,"in",t),this.keys=Xs("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ys extends Us{constructor(e,t){super(e,"not-in",t),this.keys=Xs("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>Or.fromName(e.referenceValue))}class Zs extends Us{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ws(t)&&ls(t.arrayValue,this.value)}}class eo extends Us{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ls(this.value.arrayValue,t)}}class to extends Us{constructor(e,t){super(e,"not-in",t)}matches(e){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ls(this.value.arrayValue,t)}}class no extends Us{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ws(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ls(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function io(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ro(e,t,n,r,i,s,o)}function so(e){const t=ur(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Ks(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),si(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>ms(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>ms(e)).join(",")),t.ue=e}return t.ue}function oo(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Fs(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Gs(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ps(e.startAt,t.startAt)&&Ps(e.endAt,t.endAt)}function ao(e){return Or.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function co(e,t){return e.filters.filter(e=>e instanceof Us&&e.field.isEqual(t))}function uo(e,t,n){let r=as,i=!0;for(const s of co(e,t)){let e=as,t=!0;switch(s.op){case"<":case"<=":e=Cs(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=as}xs({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];xs({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function lo(e,t,n){let r=os,i=!0;for(const s of co(e,t)){let e=os,t=!0;switch(s.op){case">=":case">":e=Ds(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=os}As({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];As({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fo(e,t,n,r,i,s,o,a){return new ho(e,t,n,r,i,s,o,a)}function mo(e){return new ho(e)}function go(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function po(e){return null!==e.collectionGroup}function yo(e){const t=ur(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Ki(kr.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new Ls(r,n))}),e.has(kr.keyField().canonicalString())||t.ce.push(new Ls(kr.keyField(),n))}return t.ce}function wo(e){const t=ur(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return io(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Ls(e.field,t)});const n=e.endAt?new Rs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Rs(e.startAt.position,e.startAt.inclusive):null;return io(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,yo(e))),t.le}function vo(e,t){const n=e.filters.concat([t]);return new ho(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function bo(e,t,n){return new ho(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function _o(e,t){return oo(wo(e),wo(t))&&e.limitType===t.limitType}function Io(e){return`${so(wo(e))}|lt:${e.limitType}`}function Eo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Hs(e)).join(", ")}]`),si(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>ms(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>ms(e)).join(",")),`Target(${t})`}(wo(e))}; limitType=${e.limitType})`}function To(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Or.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of yo(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Ms(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,yo(n),r)||n.endAt&&!function(e,t,n){const r=Ms(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,yo(n),r)));var n,r}function So(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Co(e){return(t,n)=>{let r=!1;for(const i of yo(e)){const e=Do(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Do(e,t,n){const r=e.field.isKeyField()?Or.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?hs(r,i):ar()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ar()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Bi(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return qi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new ji(Or.comparator);function No(){return Ao}const ko=new ji(Or.comparator);function Oo(...e){let t=ko;for(const n of e)t=t.insert(n.key,n);return t}function Ro(e){let t=ko;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Mo(){return Lo()}function Po(){return Lo()}function Lo(){return new xo(e=>e.toString(),(e,t)=>e.isEqual(t))}const Fo=new ji(Or.comparator),Vo=new Ki(Or.comparator);function Uo(...e){let t=Vo;for(const n of e)t=t.add(n);return t}const Bo=new Ki(Er);function qo(){return Bo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oi(t)?"-0":t}}function zo(e){return{integerValue:""+e}}function $o(e,t){return ai(t)?zo(t):jo(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this._=void 0}}function Go(e,t,n){return e instanceof Wo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ts(t)&&(t=ns(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Jo?Yo(e,t):e instanceof Xo?Zo(e,t):function(e,t){const n=Ho(e,t),r=ta(n)+ta(e.Pe);return ys(n)&&ys(e.Pe)?zo(r):jo(e.serializer,r)}(e,t)}function Qo(e,t,n){return e instanceof Jo?Yo(e,t):e instanceof Xo?Zo(e,t):n}function Ho(e,t){return e instanceof ea?ys(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Wo extends Ko{}class Jo extends Ko{constructor(e){super(),this.elements=e}}function Yo(e,t){const n=na(t);for(const r of e.elements)n.some(e=>us(e,r))||n.push(r);return{arrayValue:{values:n}}}class Xo extends Ko{constructor(e){super(),this.elements=e}}function Zo(e,t){let n=na(t);for(const r of e.elements)n=n.filter(e=>!us(e,r));return{arrayValue:{values:n}}}class ea extends Ko{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ta(e){return Zi(e.integerValue||e.doubleValue)}function na(e){return ws(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.field=e,this.transform=t}}class ia{constructor(e,t){this.version=e,this.transformResults=t}}class sa{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sa}static exists(e){return new sa(void 0,e)}static updateTime(e){return new sa(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oa(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class aa{}function ca(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new wa(e.key,sa.none()):new fa(e.key,e.data,sa.none());{const n=e.data,r=Ns.empty();let i=new Ki(kr.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ma(e.key,r,new Hi(i.toArray()),sa.none())}}function ua(e,t,n){var r;e instanceof fa?function(e,t,n){const r=e.value.clone(),i=pa(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ma?function(e,t,n){if(!oa(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=pa(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ga(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function la(e,t,n,r){return e instanceof fa?function(e,t,n,r){if(!oa(e.precondition,t))return n;const i=e.value.clone(),s=ya(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ma?function(e,t,n,r){if(!oa(e.precondition,t))return n;const i=ya(e.fieldTransforms,r,t),s=t.data;return s.setAll(ga(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(i=t,s=n,oa(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function ha(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ho(r.transform,e||null);null!=i&&(null===n&&(n=Ns.empty()),n.set(r.field,i))}return n||null}function da(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Tr(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Jo&&r instanceof Jo||n instanceof Xo&&r instanceof Xo?Tr(n.elements,r.elements,us):n instanceof ea&&r instanceof ea?us(n.Pe,r.Pe):n instanceof Wo&&r instanceof Wo);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class fa extends aa{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ma extends aa{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ga(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function pa(e,t,n){const r=new Map;cr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Qo(o,a,n[i]))}return r}function ya(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Go(e,s,t))}return r}class wa extends aa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class va extends aa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ua(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=la(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=la(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Po();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=ca(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Dr.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Uo())}isEqual(e){return this.batchId===e.batchId&&Tr(this.mutations,e.mutations,(e,t)=>da(e,t))&&Tr(this.baseMutations,e.baseMutations,(e,t)=>da(e,t))}}class _a{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){cr(e.mutations.length===n.length);let r=function(){return Fo}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new _a(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ta,Sa;function Ca(e){switch(e){default:return ar();case lr.CANCELLED:case lr.UNKNOWN:case lr.DEADLINE_EXCEEDED:case lr.RESOURCE_EXHAUSTED:case lr.INTERNAL:case lr.UNAVAILABLE:case lr.UNAUTHENTICATED:return!1;case lr.INVALID_ARGUMENT:case lr.NOT_FOUND:case lr.ALREADY_EXISTS:case lr.PERMISSION_DENIED:case lr.FAILED_PRECONDITION:case lr.ABORTED:case lr.OUT_OF_RANGE:case lr.UNIMPLEMENTED:case lr.DATA_LOSS:return!0}}function Da(e){if(void 0===e)return ir("GRPC error has no .code"),lr.UNKNOWN;switch(e){case Ta.OK:return lr.OK;case Ta.CANCELLED:return lr.CANCELLED;case Ta.UNKNOWN:return lr.UNKNOWN;case Ta.DEADLINE_EXCEEDED:return lr.DEADLINE_EXCEEDED;case Ta.RESOURCE_EXHAUSTED:return lr.RESOURCE_EXHAUSTED;case Ta.INTERNAL:return lr.INTERNAL;case Ta.UNAVAILABLE:return lr.UNAVAILABLE;case Ta.UNAUTHENTICATED:return lr.UNAUTHENTICATED;case Ta.INVALID_ARGUMENT:return lr.INVALID_ARGUMENT;case Ta.NOT_FOUND:return lr.NOT_FOUND;case Ta.ALREADY_EXISTS:return lr.ALREADY_EXISTS;case Ta.PERMISSION_DENIED:return lr.PERMISSION_DENIED;case Ta.FAILED_PRECONDITION:return lr.FAILED_PRECONDITION;case Ta.ABORTED:return lr.ABORTED;case Ta.OUT_OF_RANGE:return lr.OUT_OF_RANGE;case Ta.UNIMPLEMENTED:return lr.UNIMPLEMENTED;case Ta.DATA_LOSS:return lr.DATA_LOSS;default:return ar()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xa(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Sa=Ta||(Ta={}))[Sa.OK=0]="OK",Sa[Sa.CANCELLED=1]="CANCELLED",Sa[Sa.UNKNOWN=2]="UNKNOWN",Sa[Sa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sa[Sa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sa[Sa.NOT_FOUND=5]="NOT_FOUND",Sa[Sa.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sa[Sa.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sa[Sa.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sa[Sa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sa[Sa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sa[Sa.ABORTED=10]="ABORTED",Sa[Sa.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sa[Sa.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sa[Sa.INTERNAL=13]="INTERNAL",Sa[Sa.UNAVAILABLE=14]="UNAVAILABLE",Sa[Sa.DATA_LOSS=15]="DATA_LOSS";const Aa=new Bn([4294967295,4294967295],0);function Na(e){const t=xa().encode(e),n=new qn;return n.update(t),new Uint8Array(n.digest())}function ka(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Bn([n,r],0),new Bn([i,s],0)]}class Oa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ra(`Invalid padding: ${t}`);if(n<0)throw new Ra(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Ra(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Ra(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Bn.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Bn.fromNumber(n)));return 1===r.compare(Aa)&&(r=new Bn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Na(e),[n,r]=ka(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Oa(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.Ie)return;const t=Na(e),[n,r]=ka(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Pa.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ma(Dr.min(),r,new ji(Er),No(),Uo())}}class Pa{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Pa(n,t,Uo(),Uo(),Uo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class Fa{constructor(e,t){this.targetId=e,this.me=t}}class Va{constructor(e,t,n=Ji.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ua{constructor(){this.fe=0,this.ge=ja(),this.pe=Ji.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Uo(),t=Uo(),n=Uo();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ar()}}),new Pa(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=ja()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,cr(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ba{constructor(e){this.Le=e,this.Be=new Map,this.ke=No(),this.qe=qa(),this.Qe=new ji(Er)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:ar()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(ao(i))if(0===n){const e=new Or(i.path);this.Ue(t,e,Os.newNoDocument(e,Dr.min()))}else cr(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=es(n).toUint8Array()}catch(a){if(a instanceof Wi)return sr("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new Oa(s,r,i)}catch(a){return sr(a instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)}),r}rt(e){const t=new Map;this.Be.forEach((n,r)=>{const i=this.Je(r);if(i){if(n.current&&ao(i.target)){const t=new Or(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,Os.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}});let n=Uo();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));const r=new Ma(e,t,this.Qe,this.ke,n);return this.ke=No(),this.qe=qa(),this.Qe=new ji(Er),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ua,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ki(Er),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||rr("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ua),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function qa(){return new ji(Or.comparator)}function ja(){return new ji(Or.comparator)}const za=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$a=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ka=(()=>({and:"AND",or:"OR"}))();class Ga{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qa(e,t){return e.useProto3Json||si(t)?t:{value:t}}function Ha(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wa(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ja(e,t){return Ha(e,t.toTimestamp())}function Ya(e){return cr(!!e),Dr.fromTimestamp(function(e){const t=Xi(e);return new Cr(t.seconds,t.nanos)}(e))}function Xa(e,t){return Za(e,t).canonicalString()}function Za(e,t){const n=(r=e,new Ar(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function ec(e){const t=Ar.fromString(e);return cr(Ic(t)),t}function tc(e,t){return Xa(e.databaseId,t.path)}function nc(e,t){const n=ec(t);if(n.get(1)!==e.databaseId.projectId)throw new hr(lr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new hr(lr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Or(oc(n))}function rc(e,t){return Xa(e.databaseId,t)}function ic(e){const t=ec(e);return 4===t.length?Ar.emptyPath():oc(t)}function sc(e){return new Ar(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function oc(e){return cr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ac(e,t,n){return{name:tc(e,t),fields:n.value.mapValue.fields}}function cc(e,t,n){const r=nc(e,t.name),i=Ya(t.updateTime),s=t.createTime?Ya(t.createTime):Dr.min(),o=new Ns({mapValue:{fields:t.fields}}),a=Os.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function uc(e,t){let n;if(t instanceof fa)n={update:ac(e,t.key,t.value)};else if(t instanceof wa)n={delete:tc(e,t.key)};else if(t instanceof ma)n={update:ac(e,t.key,t.data),updateMask:_c(t.fieldMask)};else{if(!(t instanceof va))return ar();n={verify:tc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Wo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Jo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ea)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw ar()}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Ja(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:ar())),n;var r,i}function lc(e,t){const n=t.currentDocument?void 0!==(i=t.currentDocument).updateTime?sa.updateTime(Ya(i.updateTime)):void 0!==i.exists?sa.exists(i.exists):sa.none():sa.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)cr("REQUEST_TIME"===t.setToServerValue),n=new Wo;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Jo(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Xo(e)}else"increment"in t?n=new ea(e,t.increment):ar();const r=kr.fromServerFormat(t.fieldPath);return new ra(r,n)}(e,t)):[];var i;if(t.update){t.update.name;const i=nc(e,t.update.name),s=new Ns({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Hi(t.map(e=>kr.fromServerFormat(e)))}(t.updateMask);return new ma(i,s,e,n,r)}return new fa(i,s,n,r)}if(t.delete){const r=nc(e,t.delete);return new wa(r,n)}if(t.verify){const r=nc(e,t.verify);return new va(r,n)}return ar()}function hc(e,t){return{documents:[rc(e,t.path)]}}function dc(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rc(e,i);const s=function(e){if(0!==e.length)return bc(Bs.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map(e=>{return{field:wc((t=e).field),direction:gc(t.dir)};var t})}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qa(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i};var c}function fc(e){let t=ic(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){cr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=mc(e);return t instanceof Bs&&zs(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>{return new Ls(vc((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,si(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Rs(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Rs(n,t)}(n.endAt)),fo(t,i,o,s,a,"F",c,u)}function mc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=vc(e.unaryFilter.field);return Us.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=vc(e.unaryFilter.field);return Us.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vc(e.unaryFilter.field);return Us.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=vc(e.unaryFilter.field);return Us.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ar()}}(e):void 0!==e.fieldFilter?(t=e,Us.create(vc(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ar()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Bs.create(e.compositeFilter.filters.map(e=>mc(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ar()}}(e.compositeFilter.op))}(e):ar();var t}function gc(e){return za[e]}function pc(e){return $a[e]}function yc(e){return Ka[e]}function wc(e){return{fieldPath:e.canonicalString()}}function vc(e){return kr.fromServerFormat(e.fieldPath)}function bc(e){return e instanceof Us?function(e){if("=="===e.op){if(bs(e.value))return{unaryFilter:{field:wc(e.field),op:"IS_NAN"}};if(vs(e.value))return{unaryFilter:{field:wc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(bs(e.value))return{unaryFilter:{field:wc(e.field),op:"IS_NOT_NAN"}};if(vs(e.value))return{unaryFilter:{field:wc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wc(e.field),op:pc(e.op),value:e.value}}}(e):e instanceof Bs?function(e){const t=e.getFilters().map(e=>bc(e));return 1===t.length?t[0]:{compositeFilter:{op:yc(e.op),filters:t}}}(e):ar()}function _c(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ic(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t,n,r,i=Dr.min(),s=Dr.min(),o=Ji.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Ec(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ec(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ec(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ec(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.ct=e}}function Sc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Cc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document={name:tc(i=e.ct,(s=t).key),fields:s.data.value.mapValue.fields,updateTime:Ha(i,s.version.toTimestamp()),createTime:Ha(i,s.createTime.toTimestamp())};else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Dc(t.version)};else{if(!t.isUnknownDocument())return ar();r.unknownDocument={path:n.path.toArray(),version:Dc(t.version)}}var i,s;return r}function Cc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Dc(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function xc(e){const t=new Cr(e.seconds,e.nanoseconds);return Dr.fromTimestamp(t)}function Ac(e,t){const n=(t.baseMutations||[]).map(t=>lc(e.ct,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>lc(e.ct,t)),i=Cr.fromMillis(t.localWriteTimeMs);return new ba(t.batchId,i,n,r)}function Nc(e){const t=xc(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?xc(e.lastLimboFreeSnapshotVersion):Dr.min();let r;return r=void 0!==e.query.documents?function(e){return cr(1===e.documents.length),wo(mo(ic(e.documents[0])))}(e.query):function(e){return wo(fc(e))}(e.query),new Ec(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ji.fromBase64String(e.resumeToken))}function kc(e,t){const n=Dc(t.snapshotVersion),r=Dc(t.lastLimboFreeSnapshotVersion);let i;i=ao(t.target)?hc(e.ct,t.target):dc(e.ct,t.target)._t;const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:so(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Oc(e){const t=fc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?bo(t,t.limit,"L"):t}function Rc(e,t){return new Ia(t.largestBatchId,lc(e.ct,t.overlayMutation))}function Mc(e,t){const n=t.path.lastSegment();return[e,ci(t.path.popLast()),n]}function Pc(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:Dc(r.readTime),documentKey:ci(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{getBundleMetadata(e,t){return Fc(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:xc(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Fc(e).put({bundleId:(n=t).id,createTime:Dc(Ya(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Vc(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Oc(t.bundledQuery),readTime:xc(t.readTime)};var t})}saveNamedQuery(e,t){return Vc(e).put({name:(n=t).name,readTime:Dc(Ya(n.readTime)),bundledQuery:n.bundledQuery});var n}}function Fc(e){return Vi(e,"bundles")}function Vc(e){return Vi(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Uc(e,n)}getOverlay(e,t){return Bc(e).get(Mc(this.userId,t)).next(e=>e?Rc(this.serializer,e):null)}getOverlays(e,t){const n=Mo();return Kr.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new Ia(t,i);r.push(this.ht(e,s))}),Kr.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(ci(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Bc(e).j("collectionPathOverlayIndex",r))}),Kr.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Mo(),i=ci(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Bc(e).U("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=Rc(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=Mo();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Bc(e).J({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=Rc(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}ht(e,t){return Bc(e).put(function(e,t,n){const[r,i,s]=Mc(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:uc(e.ct,n.mutation)}}(this.serializer,this.userId,t))}}function Bc(e){return Vi(e,"documentOverlays")}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{Pt(e){return Vi(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(e=>{const t=null==e?void 0:e.value;return t?Ji.fromUint8Array(t):Ji.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Zi(e.integerValue));else if("doubleValue"in e){const n=Zi(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),oi(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=Xi(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(es(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Ts(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Is(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):ar()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const r of Object.keys(n))this.Vt(r,t),this.Tt(n[r],t)}wt(e,t){var n,r;const i=e.fields||{};this.dt(t,53);const s="value",o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(t,15),t.At(Zi(o)),this.Vt(s,t),this.Tt(i[s],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const r of n)this.Tt(r,t)}yt(e,t){this.dt(t,37),Or.fromName(e).path.forEach(e=>{this.dt(t,60),this.Dt(e,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}function zc(e){if(0===e)return 8;let t=0;return!(e>>4)&&(t+=4,e<<=4),!(e>>6)&&(t+=2,e<<=2),!(e>>7)&&(t+=1),t}function $c(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=zc(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}jc.vt=new jc;class Kc{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{const e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Bt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ot(e);else if(e<2048)this.Ot(960|e>>>6),this.Ot(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ot(480|e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e);else{const e=t.codePointAt(0);this.Ot(240|e>>>18),this.Ot(128|63&e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e)}}this.Nt()}kt(e){const t=this.qt(e),n=$c(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Kt(e){const t=this.qt(e),n=$c(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ft(e){const t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;0===t?(this.Gt(0),this.Gt(255)):255===t?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Gc{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Qc{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Hc{constructor(){this.jt=new Kc,this.Ht=new Gc(this.jt),this.Jt=new Qc(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return 0===e?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Zt(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Wc(this.indexId,this.documentKey,this.arrayValue,n)}}function Jc(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Yc(e.arrayValue,t.arrayValue),0!==n?n:(n=Yc(e.directionalValue,t.directionalValue),0!==n?n:Or.comparator(e.documentKey,t.documentKey)))}function Yc(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.Xt=new Ki((e,t)=>kr.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const e=t;e.isInequality()?this.Xt=this.Xt.add(e):this.tn.push(e)}}get nn(){return this.Xt.size>1}rn(e){if(cr(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Mr(e);if(void 0!==t&&!this.sn(t))return!1;const n=Pr(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.sn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const e=this.Xt.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[i];if(!this.on(e,t)||!this._n(this.en[s++],t))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.en.length||!this._n(this.en[s++],e))return!1}return!0}an(){if(this.nn)return null;let e=new Ki(kr.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Lr(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Lr(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Lr(n.field,"asc"===n.dir?0:1)));return new Rr(Rr.UNKNOWN_ID,this.collectionId,t,Fr.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(e){var t,n;if(cr(e instanceof Us||e instanceof Bs),e instanceof Us){if(e instanceof eo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map(t=>Us.create(e.field,"==",t)))||[];return Bs.create(r,"or")}return e}const r=e.filters.map(e=>Zc(e));return Bs.create(r,e.op)}function eu(e){if(0===e.getFilters().length)return[];const t=iu(Zc(e));return cr(ru(t)),tu(t)||nu(t)?[t]:t.getFilters()}function tu(e){return e instanceof Us}function nu(e){return e instanceof Bs&&zs(e)}function ru(e){return tu(e)||nu(e)||function(e){if(e instanceof Bs&&js(e)){for(const t of e.getFilters())if(!tu(t)&&!nu(t))return!1;return!0}return!1}(e)}function iu(e){if(cr(e instanceof Us||e instanceof Bs),e instanceof Us)return e;if(1===e.filters.length)return iu(e.filters[0]);const t=e.filters.map(e=>iu(e));let n=Bs.create(t,e.op);return n=au(n),ru(n)?n:(cr(n instanceof Bs),cr(qs(n)),cr(n.filters.length>1),n.filters.reduce((e,t)=>su(e,t)))}function su(e,t){let n;return cr(e instanceof Us||e instanceof Bs),cr(t instanceof Us||t instanceof Bs),n=e instanceof Us?t instanceof Us?(r=e,i=t,Bs.create([r,i],"and")):ou(e,t):t instanceof Us?ou(t,e):function(e,t){if(cr(e.filters.length>0&&t.filters.length>0),qs(e)&&qs(t))return Qs(e,t.getFilters());const n=js(e)?e:t,r=js(e)?t:e,i=n.filters.map(e=>su(e,r));return Bs.create(i,"or")}(e,t),au(n);var r,i}function ou(e,t){if(qs(t))return Qs(t,e.getFilters());{const n=t.filters.map(t=>su(e,t));return Bs.create(n,"or")}}function au(e){if(cr(e instanceof Us||e instanceof Bs),e instanceof Us)return e;const t=e.getFilters();if(1===t.length)return au(t[0]);if($s(e))return e;const n=t.map(e=>au(e)),r=[];return n.forEach(t=>{t instanceof Us?r.push(t):t instanceof Bs&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Bs.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cu{constructor(){this.un=new uu}addToCollectionParentIndex(e,t){return this.un.add(t),Kr.resolve()}getCollectionParents(e,t){return Kr.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Kr.resolve()}deleteFieldIndex(e,t){return Kr.resolve()}deleteAllFieldIndexes(e){return Kr.resolve()}createTargetIndexes(e,t){return Kr.resolve()}getDocumentsMatchingTarget(e,t){return Kr.resolve(null)}getIndexType(e,t){return Kr.resolve(0)}getFieldIndexes(e,t){return Kr.resolve([])}getNextCollectionGroupToUpdate(e){return Kr.resolve(null)}getMinOffset(e,t){return Kr.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,t){return Kr.resolve(Br.min())}updateCollectionGroup(e,t,n){return Kr.resolve()}updateIndexEntries(e,t){return Kr.resolve()}}class uu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ki(Ar.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ki(Ar.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new Uint8Array(0);class hu{constructor(e,t){this.databaseId=t,this.cn=new uu,this.ln=new xo(e=>so(e),(e,t)=>oo(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:ci(r)};return du(e).put(i)}return Kr.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Sr(t),""],!1,!0);return du(e).U(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(hi(r.parent))}return n})}addFieldIndex(e,t){const n=mu(e),r={indexId:(i=t).indexId,collectionGroup:i.collectionGroup,fields:i.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};var i;delete r.indexId;const s=n.add(r);if(t.indexState){const n=gu(e);return s.next(e=>{n.put(Pc(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=mu(e),r=gu(e),i=fu(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=mu(e),n=fu(e),r=gu(e);return t.j().next(()=>n.j()).next(()=>r.j())}createTargetIndexes(e,t){return Kr.forEach(this.hn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){const n=new Xc(t).an();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){const n=fu(e);let r=!0;const i=new Map;return Kr.forEach(this.hn(t),t=>this.Pn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=Uo();const r=[];return Kr.forEach(i,(i,s)=>{var o;rr("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${so(t)}`);const a=function(e,t){const n=Mr(t);if(void 0===n)return null;for(const r of co(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Pr(t))for(const t of co(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Pr(t)){const t=0===i.kind?uo(e,i.fieldPath,e.startAt):lo(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Rs(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Pr(t)){const t=0===i.kind?lo(e,i.fieldPath,e.endAt):uo(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Rs(n,r)}(s,i),h=this.In(i,s,u),d=this.In(i,s,l),f=this.Tn(i,s,c),m=this.En(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Kr.forEach(m,i=>n.G(i,t.limit).next(t=>{t.forEach(t=>{const n=Or.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return Kr.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(t=0===e.filters.length?[e]:eu(Bs.create(e.filters,"and")).map(t=>io(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):lu,h=this.An(e,a,n[l%c],r),d=this.Rn(e,a,i[l%c],s),f=o.map(t=>this.An(e,a,t,!0));u.push(...this.createRange(h,d,f))}return u}An(e,t,n,r){const i=new Wc(e,Or.empty(),t,n);return r?i:i.Zt()}Rn(e,t,n,r){const i=new Wc(e,Or.empty(),t,n);return r?i.Zt():i}Pn(e,t){const n=new Xc(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.rn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.hn(t);return Kr.forEach(r,t=>this.Pn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new Ki(kr.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}Vn(e,t){const n=new Hc;for(const r of Pr(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Yt(r.kind);jc.vt.It(e,i)}return n.zt()}dn(e){const t=new Hc;return jc.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Hc;return jc.vt.It(ps(this.databaseId,t),n.Yt(function(e){const t=Pr(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(null===n)return[];let r=[];r.push(new Hc);let i=0;for(const s of Pr(e)){const e=n[i++];for(const n of r)if(this.fn(t,s.fieldPath)&&ws(e))r=this.gn(r,s,e);else{const t=n.Yt(s.kind);jc.vt.It(e,t)}}return this.pn(r)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Hc;n.seed(e.zt()),jc.vt.It(s,n.Yt(t.kind)),i.push(n)}return i}fn(e,t){return!!e.filters.find(e=>e instanceof Us&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=mu(e),r=gu(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(e=>{const t=[];return Kr.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Fr(t.sequenceNumber,new Br(xc(t.readTime),new Or(hi(t.documentKey)),t.largestBatchId)):Fr.empty(),r=e.fields.map(([e,t])=>new Lr(kr.fromServerFormat(e),t));return new Rr(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Er(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=mu(e),i=gu(e);return this.yn(e).next(e=>r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>Kr.forEach(t,t=>i.put(Pc(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){const n=new Map;return Kr.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?Kr.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),Kr.forEach(i,n=>this.wn(e,t,n).next(t=>{const i=this.Sn(r,n);return t.isEqual(i)?Kr.resolve():this.bn(e,r,n,t,i)}))))})}Dn(e,t,n,r){return fu(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,r){return fu(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const r=fu(e);let i=new Ki(Jc);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(e,r)=>{i=i.add(new Wc(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}Sn(e,t){let n=new Ki(Jc);const r=this.Vn(t,e);if(null==r)return n;const i=Mr(t);if(null!=i){const s=e.data.field(i.fieldPath);if(ws(s))for(const i of s.arrayValue.values||[])n=n.add(new Wc(t.indexId,e.key,this.dn(i),r))}else n=n.add(new Wc(t.indexId,e.key,lu,r));return n}bn(e,t,n,r,i){rr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Qi(s),c=Qi(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Qi(o)):t?(i(a),a=Qi(s)):(a=Qi(s),c=Qi(o))}}(r,i,Jc,r=>{s.push(this.Dn(e,t,n,r))},r=>{s.push(this.vn(e,t,n,r))}),Kr.waitFor(s)}yn(e){let t=1;return gu(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Jc(e,t)).filter((e,t,n)=>!t||0!==Jc(e,n[t-1]));const r=[];r.push(e);for(const s of n){const n=Jc(s,e),i=Jc(s,t);if(0===n)r[0]=e.Zt();else if(n>0&&i<0)r.push(s),r.push(s.Zt());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.Cn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,lu,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,lu,[]];i.push(IDBKeyRange.bound(e,t))}return i}Cn(e,t){return Jc(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(pu)}getMinOffset(e,t){return Kr.mapArray(this.hn(t),t=>this.Pn(e,t).next(e=>e||ar())).next(pu)}}function du(e){return Vi(e,"collectionParents")}function fu(e){return Vi(e,"indexEntries")}function mu(e){return Vi(e,"indexConfiguration")}function gu(e){return Vi(e,"indexState")}function pu(e){cr(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;qr(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Br(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new wu(e,wu.DEFAULT_COLLECTION_PERCENTILE,wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{cr(1===a)}));const u=[];for(const l of n.mutations){const e=mi(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Kr.waitFor(s).next(()=>u)}function bu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw ar();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wu.DEFAULT_COLLECTION_PERCENTILE=10,wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wu.DEFAULT=new wu(41943040,wu.DEFAULT_COLLECTION_PERCENTILE,wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wu.DISABLED=new wu(-1,0,0);class _u{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Fn={}}static lt(e,t,n,r){cr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new _u(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Eu(e).J({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=Tu(e),s=Eu(e);return s.add({}).next(o=>{cr("number"==typeof o);const a=new ba(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>uc(e.ct,t)),i=n.mutations.map(t=>uc(e.ct,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new Ki((e,t)=>Er(e.canonicalString(),t.canonicalString()));for(const e of r){const t=mi(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,gi))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Fn[o]=a.keys()}),Kr.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return Eu(e).get(t).next(e=>e?(cr(e.userId===this.userId),Ac(this.serializer,e)):null)}Mn(e,t){return this.Fn[t]?Kr.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Fn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Eu(e).J({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(cr(t.batchId>=n),i=Ac(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Eu(e).J({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Eu(e).U("userMutationsIndex",t).next(e=>e.map(e=>Ac(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=fi(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Tu(e).J({range:r},(n,r,s)=>{const[o,a,c]=n,u=hi(a);if(o===this.userId&&t.path.isEqual(u))return Eu(e).get(c).next(e=>{if(!e)throw ar();cr(e.userId===this.userId),i.push(Ac(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ki(Er);const r=[];return t.forEach(t=>{const i=fi(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Tu(e).J({range:s},(e,r,i)=>{const[s,o,a]=e,c=hi(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Kr.waitFor(r).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=fi(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Ki(Er);return Tu(e).J({range:s},(e,t,i)=>{const[s,a,c]=e,u=hi(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.xn(e,o))}xn(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Eu(e).get(t).next(e=>{if(null===e)throw ar();cr(e.userId===this.userId),n.push(Ac(this.serializer,e))}))}),Kr.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return vu(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),Kr.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Kr.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return Tu(e).J({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=hi(e[1]);r.push(t)}else n.done()}).next(()=>{cr(0===r.length)})})}containsKey(e,t){return Iu(e,this.userId,t)}Nn(e){return Su(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Iu(e,t,n){const r=fi(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Tu(e).J({range:s,H:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function Eu(e){return Vi(e,"mutations")}function Tu(e){return Vi(e,"documentMutations")}function Su(e){return Vi(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Cu(0)}static kn(){return new Cu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new Cu(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(e=>Dr.fromTimestamp(new Cr(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Qn(e,r)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>xu(e).delete(t.targetId)).next(()=>this.qn(e)).next(t=>(cr(t.targetCount>0),t.targetCount-=1,this.Qn(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return xu(e).J((s,o)=>{const a=Nc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>Kr.waitFor(i)).next(()=>r)}forEachTarget(e,t){return xu(e).J((e,n)=>{const r=Nc(n);t(r)})}qn(e){return Au(e).get("targetGlobalKey").next(e=>(cr(null!==e),e))}Qn(e,t){return Au(e).put("targetGlobalKey",t)}Kn(e,t){return xu(e).put(kc(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(e=>e.targetCount)}getTargetData(e,t){const n=so(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return xu(e).J({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const s=Nc(n);oo(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=Nu(e);return t.forEach(t=>{const s=ci(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),Kr.waitFor(r)}removeMatchingKeys(e,t,n){const r=Nu(e);return Kr.forEach(t,t=>{const i=ci(t.path);return Kr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=Nu(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Nu(e);let i=Uo();return r.J({range:n,H:!0},(e,t,n)=>{const r=hi(e[1]),s=new Or(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=ci(t.path),r=IDBKeyRange.bound([n],[Sr(n)],!1,!0);let i=0;return Nu(e).J({index:"documentTargetsIndex",H:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}ot(e,t){return xu(e).get(t).next(e=>e?Nc(e):null)}}function xu(e){return Vi(e,"targets")}function Au(e){return Vi(e,"targetGlobal")}function Nu(e){return Vi(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku([e,t],[n,r]){const i=Er(e,n);return 0===i?Er(t,r):i}class Ou{constructor(e){this.Un=e,this.buffer=new Ki(ku),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ku(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ru{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return null!==this.jn}Hn(e){rr("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Yr(e)?rr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await $r(e)}await this.Hn(3e5)})}}class Mu{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Kr.resolve(ii.oe);const n=new Ou(t);return this.Jn.forEachTarget(e,e=>n.zn(e.sequenceNumber)).next(()=>this.Jn.Zn(e,e=>n.zn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(rr("LruGarbageCollector","Garbage collection skipped; disabled"),Kr.resolve(yu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(rr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yu):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(rr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),nr()<=P.DEBUG&&rr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),Kr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pu{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Mu(e,t)}(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}er(e){let t=0;return this.Zn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(e,n)=>t(n))}addReference(e,t,n){return Lu(e,n)}removeReference(e,t,n){return Lu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Lu(e,t)}nr(e,t){return function(e,t){let n=!1;return Su(e).Y(r=>Iu(e,r,t).next(e=>(e&&(n=!0),Kr.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.tr(e,(s,o)=>{if(o<=t){const t=this.nr(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,Dr.min()),Nu(e).delete([0,ci(s.path)])))});r.push(t)}}).next(()=>Kr.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Lu(e,t)}tr(e,t){const n=Nu(e);let r,i=ii.oe;return n.J({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ii.oe&&t(new Or(hi(r)),i),i=o,r=s):i=ii.oe}).next(()=>{i!==ii.oe&&t(new Or(hi(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Lu(e,t){return Nu(e).put((n=t,r=e.currentSequenceNumber,{targetId:0,path:ci(n.path),sequenceNumber:r}));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.changes=new xo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Os.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Kr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ju(e).put(n)}removeEntry(e,t,n){return ju(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Cc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=Os.newInvalidDocument(t);return ju(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(zu(t))},(e,r)=>{n=this.ir(t,r)}).next(()=>n)}sr(e,t){let n={size:0,document:Os.newInvalidDocument(t)};return ju(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(zu(t))},(e,r)=>{n={document:this.ir(t,r),size:bu(r)}}).next(()=>n)}getEntries(e,t){let n=No();return this._r(e,t,(e,t)=>{const r=this.ir(e,t);n=n.insert(e,r)}).next(()=>n)}ar(e,t){let n=No(),r=new ji(Or.comparator);return this._r(e,t,(e,t)=>{const i=this.ir(e,t);n=n.insert(e,i),r=r.insert(e,bu(t))}).next(()=>({documents:n,ur:r}))}_r(e,t,n){if(t.isEmpty())return Kr.resolve();let r=new Ki(Ku);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(zu(r.first()),zu(r.last())),s=r.getIterator();let o=s.getNext();return ju(e).J({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=Or.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Ku(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.$(zu(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Cc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ju(e).U(IDBKeyRange.bound(o,a,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let n=No();for(const i of e){const e=this.ir(Or.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(To(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=No();const s=$u(t,n),o=$u(t,Br.max());return ju(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.ir(Or.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new Bu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return qu(e).get("remoteDocumentGlobalKey").next(e=>(cr(!!e),e))}rr(e,t){return qu(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const e=function(e,t){let n;if(t.document)n=cc(e.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Or.fromSegments(t.noDocument.path),r=xc(t.noDocument.readTime);n=Os.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return ar();{const e=Or.fromSegments(t.unknownDocument.path),r=xc(t.unknownDocument.version);n=Os.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Cr(e[0],e[1]);return Dr.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Dr.min()))return e}return Os.newInvalidDocument(e)}}function Uu(e){return new Vu(e)}class Bu extends Fu{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new xo(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new Ki((e,t)=>Er(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Sc(this.cr.serializer,s);r=r.add(i.path.popLast());const c=bu(a);n+=c-o.size,t.push(this.cr.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Sc(this.cr.serializer,s.convertToNoDocument(Dr.min()));t.push(this.cr.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.cr.updateMetadata(e,n)),Kr.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(e=>(this.lr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:e,ur:t})=>(t.forEach((t,n)=>{this.lr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function qu(e){return Vi(e,"remoteDocumentGlobal")}function ju(e){return Vi(e,"remoteDocumentsV14")}function zu(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function $u(e,t){const n=t.documentKey.path.toArray();return[e,Cc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Ku(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Er(n[s],r[s]),i)return i;return i=Er(n.length,r.length),i||(i=Er(n[n.length-2],r[r.length-2]),i||Er(n[n.length-1],r[r.length-1])
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Gu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&la(n.mutation,e,Hi.empty(),Cr.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Uo()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Uo()){const r=Mo();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Oo();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Mo();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Uo()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=No();const s=Lo(),o=Lo();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ma)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),la(o.mutation,t,o.mutation.getFieldMask(),Cr.now())):s.set(t.key,Hi.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new Gu(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=Lo();let r=new ji((e,t)=>e-t),i=Uo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Hi.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Uo()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Po();c.forEach(e=>{if(!i.has(e)){const r=ca(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Kr.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Or.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):po(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Kr.resolve(Mo());let o=-1,a=i;return s.next(t=>Kr.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Kr.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,Uo())).next(e=>({batchId:o,changes:Ro(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Or(t)).next(e=>{let t=Oo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Oo();return this.indexManager.getCollectionParents(e,i).next(o=>Kr.forEach(o,o=>{const a=(c=t,u=o.child(i),new ho(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Os.newInvalidDocument(r)))});let n=Oo();return e.forEach((e,r)=>{const s=i.get(e);void 0!==s&&la(s.mutation,r,Hi.empty(),Cr.now()),To(t,r)&&(n=n.insert(e,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Kr.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:Ya(n.createTime)}),Kr.resolve();var n}getNamedQuery(e,t){return Kr.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:Oc(n.bundledQuery),readTime:Ya(n.readTime)}),Kr.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.overlays=new ji(Or.comparator),this.Ir=new Map}getOverlay(e,t){return Kr.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Mo();return Kr.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),Kr.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Ir.delete(n)),Kr.resolve()}getOverlaysForCollection(e,t,n){const r=Mo(),i=t.length+1,s=new Or(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Kr.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ji((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Mo(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Mo(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Kr.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Ia(t,n));let i=this.Ir.get(t);void 0===i&&(i=Uo(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.sessionToken=Ji.EMPTY_BYTE_STRING}getSessionToken(e){return Kr.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Kr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.Tr=new Ki(Xu.Er),this.dr=new Ki(Xu.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Xu(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Vr(new Xu(e,t))}mr(e,t){e.forEach(e=>this.removeReference(e,t))}gr(e){const t=new Or(new Ar([])),n=new Xu(t,e),r=new Xu(t,e+1),i=[];return this.dr.forEachInRange([n,r],e=>{this.Vr(e),i.push(e.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Or(new Ar([])),n=new Xu(t,e),r=new Xu(t,e+1);let i=Uo();return this.dr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Xu(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Xu{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Or.comparator(e.key,t.key)||Er(e.wr,t.wr)}static Ar(e,t){return Er(e.wr,t.wr)||Or.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ki(Xu.Er)}checkEmpty(e){return Kr.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ba(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.br=this.br.add(new Xu(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Kr.resolve(s)}lookupMutationBatch(e,t){return Kr.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return Kr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Kr.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Kr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xu(t,0),r=new Xu(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],e=>{const t=this.Dr(e.wr);i.push(t)}),Kr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ki(Er);return t.forEach(e=>{const t=new Xu(e,0),r=new Xu(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],e=>{n=n.add(e.wr)})}),Kr.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Or.isDocumentKey(i)||(i=i.child(""));const s=new Xu(new Or(i),0);let o=new Ki(Er);return this.br.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.wr)),!0)},s),Kr.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach(e=>{const n=this.Dr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){cr(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Kr.forEach(t.mutations,r=>{const i=new Xu(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Xu(t,0),r=this.br.firstAfterOrEqual(n);return Kr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Kr.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.Mr=e,this.docs=new ji(Or.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Kr.resolve(n?n.document.mutableCopy():Os.newInvalidDocument(t))}getEntries(e,t){let n=No();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Os.newInvalidDocument(e))}),Kr.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=No();const s=t.path,o=new Or(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||qr(Ur(o),n)<=0||(r.has(o.key)||To(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Kr.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ar()}Or(e,t){return Kr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new tl(this)}getSize(e){return Kr.resolve(this.size)}}class tl extends Fu{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)}),Kr.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.persistence=e,this.Nr=new xo(e=>so(e),oo),this.lastRemoteSnapshotVersion=Dr.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Yu,this.targetCount=0,this.kr=Cu.Bn()}forEachTarget(e,t){return this.Nr.forEach((e,n)=>t(n)),Kr.resolve()}getLastRemoteSnapshotVersion(e){return Kr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Kr.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Kr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Kr.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Cu(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Kr.resolve()}updateTargetData(e,t){return this.Kn(t),Kr.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Kr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Kr.waitFor(i).next(()=>r)}getTargetCount(e){return Kr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Kr.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Kr.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Kr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Kr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Kr.resolve(n)}containsKey(e,t){return Kr.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ii(0),this.Kr=!1,this.Kr=!0,this.$r=new Ju,this.referenceDelegate=e(this),this.Ur=new nl(this),this.indexManager=new cu,this.remoteDocumentCache=new el(e=>this.referenceDelegate.Wr(e)),this.serializer=new Tc(t),this.Gr=new Hu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Wu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Zu(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){rr("MemoryPersistence","Starting transaction:",e);const r=new il(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(e=>this.referenceDelegate.jr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Hr(e,t){return Kr.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class il extends zr{constructor(e){super(),this.currentSequenceNumber=e}}class sl{constructor(e){this.persistence=e,this.Jr=new Yu,this.Yr=null}static Zr(e){return new sl(e)}get Xr(){if(this.Yr)return this.Yr;throw ar()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Kr.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Kr.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Kr.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(e=>this.Xr.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Xr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Kr.forEach(this.Xr,n=>{const r=Or.fromPath(n);return this.ei(e,r).next(e=>{e||t.removeEntry(r,Dr.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Kr.or([()=>Kr.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.serializer=e}O(e,t,n,r){const i=new Gr("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore("owner"),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",di,{unique:!0}),e.createObjectStore("documentMutations")}(e),al(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Kr.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),al(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Dr.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").U().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",di,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return Kr.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.ni(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&r>=7&&(s=s.next(()=>this.ii(i))),n<8&&r>=8&&(s=s.next(()=>this.si(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.oi(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Di});t.createIndex("collectionPathOverlayIndex",xi,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Ai,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:pi});t.createIndex("documentKeyIndex",yi),t.createIndex("collectionGroupIndex",wi)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.ai(e,i))),n<15&&r>=15&&(s=s.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Ei}).createIndex("sequenceNumberIndex",Ti,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Si}).createIndex("documentKeyIndex",Ci,{unique:!1})}(e))),n<16&&r>=16&&(s=s.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&r>=17&&(s=s.next(()=>{!function(e){e.createObjectStore("globals",{keyPath:"name"})}(e)})),s}ri(e){let t=0;return e.store("remoteDocuments").J((e,n)=>{t+=bu(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(t=>Kr.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",r).next(n=>Kr.forEach(n,n=>{cr(n.userId===t.userId);const r=Ac(this.serializer,n);return vu(e,t.userId,r).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.J((n,i)=>{const s=new Ar(n),o=[0,ci(s)];r.push(t.get(o).next(n=>{return n?Kr.resolve():(r=s,t.put({targetId:0,path:ci(r),sequenceNumber:e.highestListenSequenceNumber}));var r}))}).next(()=>Kr.waitFor(r))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:Ii});const n=t.store("collectionParents"),r=new uu,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ci(r)})}};return t.store("remoteDocuments").J({H:!0},(e,t)=>{const n=new Ar(e);return i(n.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([e,t,n],r)=>{const s=hi(t);return i(s.popLast())}))}oi(e){const t=e.store("targets");return t.J((e,n)=>{const r=Nc(n),i=kc(this.serializer,r);return t.put(i)})}_i(e,t){const n=t.store("remoteDocuments"),r=[];return n.J((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(a=n,a.document?new Or(Ar.fromString(a.document.name).popFirst(5)):a.noDocument?Or.fromSegments(a.noDocument.path):a.unknownDocument?Or.fromSegments(a.unknownDocument.path):ar()).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};var a;r.push(i.put(o))}).next(()=>Kr.waitFor(r))}ai(e,t){const n=t.store("mutations"),r=Uu(this.serializer),i=new rl(sl.Zr,this.serializer.ct);return n.U().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Uo();Ac(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),Kr.forEach(n,(e,n)=>{const s=new Zn(n),o=Uc.lt(this.serializer,s),a=i.getIndexManager(s),c=_u.lt(s,this.serializer,a,i.referenceDelegate);return new Qu(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Fi(t,ii.oe),e).next()})})}}function al(e){e.createObjectStore("targetDocuments",{keyPath:bi}).createIndex("documentTargetsIndex",_i,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",vi,{unique:!0}),e.createObjectStore("targetGlobal")}const cl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ul{constructor(e,t,n,r,i,s,o,a,c,u,l=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=s,this.document=o,this.ci=c,this.li=u,this.hi=l,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=e=>Promise.resolve(),!ul.D())throw new hr(lr.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Pu(this,r),this.Ai=t+"main",this.serializer=new Tc(a),this.Ri=new Qr(this.Ai,this.hi,new ol(this.serializer)),this.$r=new qc,this.Ur=new Du(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Uu(this.serializer),this.Gr=new Lc,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,!1===u&&ir("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new hr(lr.FAILED_PRECONDITION,cl);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new ii(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>hl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(e=>{e||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Yr(e))return rr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return rr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ll(e).get("owner").next(e=>Kr.resolve(this.vi(e)))}Ci(e){return hl(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Vi(e,"clientMetadata");return t.U().next(e=>{const n=this.xi(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return Kr.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?Kr.resolve(!0):ll(e).get("owner").next(t=>{if(null!==t&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new hr(lr.FAILED_PRECONDITION,cl);return!1}}return!(!this.networkEnabled||!this.inForeground)||hl(e).U().next(e=>void 0===this.xi(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&rr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Fi(e,ii.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(e=>this.Mi(e.updateTimeMs,t)&&!this.Ni(e.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>hl(e).U().next(e=>this.xi(e,18e5).map(e=>e.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return _u.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new hu(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Uc.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){rr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=17===(s=this.hi)?Li:16===s?Pi:15===s?Mi:14===s?Ri:13===s?Oi:12===s?ki:11===s?Ni:void ar();var s;let o;return this.Ri.runTransaction(e,r,i,r=>(o=new Fi(r,this.Qr?this.Qr.next():ii.oe),"readwrite-primary"===t?this.wi(o).next(e=>!!e||this.Si(o)).next(t=>{if(!t)throw ir(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new hr(lr.FAILED_PRECONDITION,jr);return n(o)}).next(e=>this.Di(o).next(()=>e)):this.Ki(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Ki(e){return ll(e).get("owner").next(e=>{if(null!==e&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)&&!this.vi(e)&&!(this.li||this.allowTabSynchronization&&e.allowTabSynchronization))throw new hr(lr.FAILED_PRECONDITION,cl)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ll(e).put("owner",t)}static D(){return Qr.D()}bi(e){const t=ll(e);return t.get("owner").next(e=>this.vi(e)?(rr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Kr.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t||e>n&&(ir(`Detected an update time that is in the future: ${e} > ${n}`),1))}fi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground="visible"===this.document.visibilityState)}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Pi=()=>{this.Li();const e=/(?:Version|Mobile)\/1[456]/;g()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=null!==(null===(t=this.Vi)||void 0===t?void 0:t.getItem(this.Oi(e)));return rr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ir("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ir("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch(e){}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ll(e){return Vi(e,"owner")}function hl(e){return Vi(e,"clientMetadata")}function dl(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=Uo(),r=Uo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new fl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=g()?8:Hr(d())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Zi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new ml;return this.Xi(e,t,n).next(r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)})}).next(()=>i.result)}es(e,t,n,r){return n.documentReadCount<this.ji?(nr()<=P.DEBUG&&rr("QueryEngine","SDK will not create cache indexes for query:",Eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Kr.resolve()):(nr()<=P.DEBUG&&rr("QueryEngine","Query:",Eo(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(nr()<=P.DEBUG&&rr("QueryEngine","The SDK decides to create cache indexes for query:",Eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wo(t))):Kr.resolve())}Yi(e,t){if(go(t))return Kr.resolve(null);let n=wo(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=bo(t,null,"F"),n=wo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=Uo(...r);return this.Ji.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,bo(t,null,"F")):this.rs(e,s,t,n)}))})))}Zi(e,t,n,r){return go(t)||r.isEqual(Dr.min())?Kr.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const s=this.ts(t,i);return this.ns(t,s,n,r)?Kr.resolve(null):(nr()<=P.DEBUG&&rr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Eo(t)),this.rs(e,s,t,Vr(r,-1)).next(e=>e))})}ts(e,t){let n=new Ki(Co(e));return t.forEach((t,r)=>{To(e,r)&&(n=n.add(r))}),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return nr()<=P.DEBUG&&rr("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Br.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new ji(Er),this._s=new xo(e=>so(e),oo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qu(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function yl(e,t,n,r){return new pl(e,t,n,r)}async function wl(e,t){const n=ur(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=Uo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({hs:e,removedBatchIds:i,addedBatchIds:s}))})})}function vl(e){const t=ur(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function bl(e,t,n){let r=Uo(),i=Uo();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=No();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Dr.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):rr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Ps:r,Is:i}})}function _l(e,t){const n=ur(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Il(e,t){const n=ur(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Ur.getTargetData(e,t).next(i=>i?(r=i,Kr.resolve(r)):n.Ur.allocateTargetId(e).next(i=>(r=new Ec(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e})}async function El(e,t,n){const r=ur(e),i=r.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(o){if(!Yr(o))throw o;rr("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Tl(e,t,n){const r=ur(e);let i=Dr.min(),s=Uo();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=ur(e),i=r._s.get(n);return void 0!==i?Kr.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,wo(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:Dr.min(),n?s:Uo())).next(e=>(Dl(r,So(t),e),{documents:e,Ts:s})))}function Sl(e,t){const n=ur(e),r=ur(n.Ur),i=n.os.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.ot(e,t).next(e=>e?e.target:null))}function Cl(e,t){const n=ur(e),r=n.us.get(t)||Dr.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.cs.getAllFromCollectionGroup(e,t,Vr(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(Dl(n,t,e),e))}function Dl(e,t,n){let r=e.us.get(t)||Dr.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.us.set(t,r)}async function xl(e,t,n=Uo()){const r=await Il(e,wo(Oc(t.bundledQuery))),i=ur(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=Ya(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Gr.saveNamedQuery(e,t);const o=r.withResumeToken(Ji.EMPTY_BYTE_STRING,s);return i.os=i.os.insert(o.targetId,o),i.Ur.updateTargetData(e,o).next(()=>i.Ur.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Ur.addMatchingKeys(e,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(e,t))})}function Al(e,t){return`firestore_clients_${e}_${t}`}function Nl(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function kl(e,t){return`firestore_targets_${e}_${t}`}class Ol{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Rs(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new hr(r.error.code,r.error.message))),s?new Ol(e,t,r.state,i):(ir("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new hr(n.error.code,n.error.message))),i?new Rl(e,n.state,r):(ir("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ml{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=qo();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ai(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Ml(e,i):(ir("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Pl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Pl(t.clientId,t.onlineState):(ir("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ll{constructor(){this.activeTargetIds=qo()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fl{constructor(e,t,n,r,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ji(Er),this.started=!1,this.bs=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Al(this.persistenceKey,this.ps),this.vs=`firestore_sequence_number_${this.persistenceKey}`,this.Ss=this.Ss.insert(this.ps,new Ll),this.Cs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.xs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Os=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const e=this.getItem(Al(this.persistenceKey,n));if(e){const t=Ml.Rs(n,e);t&&(this.Ss=this.Ss.insert(t.clientId,t))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const e=this.Ls(t);e&&this.Bs(e)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const t=this.storage.getItem(kl(this.persistenceKey,e));if(t){const r=Rl.Rs(e,t);r&&(n=r.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(kl(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Qs(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return rr("SharedClientState","READ",e,t),t}setItem(e,t){rr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){rr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(rr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void ir("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Cs.test(t.key)){if(null==t.newValue){const e=this.Gs(t.key);return this.zs(e,null)}{const e=this.js(t.key,t.newValue);if(e)return this.zs(e.clientId,e)}}else if(this.Fs.test(t.key)){if(null!==t.newValue){const e=this.Hs(t.key,t.newValue);if(e)return this.Js(e)}}else if(this.Ms.test(t.key)){if(null!==t.newValue){const e=this.Ys(t.key,t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.xs){if(null!==t.newValue){const e=this.Ls(t.newValue);if(e)return this.Bs(e)}}else if(t.key===this.vs){const e=function(e){let t=ii.oe;if(null!=e)try{const n=JSON.parse(e);cr("number"==typeof n),t=n}catch(n){ir("SharedClientState","Failed to read sequence number from WebStorage",n)}return t}(t.newValue);e!==ii.oe&&this.sequenceNumberHandler(e)}else if(t.key===this.Os){const e=this.Xs(t.newValue);await Promise.all(e.map(e=>this.syncEngine.eo(e)))}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const r=new Ol(this.currentUser,e,t,n),i=Nl(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Vs())}Qs(e){const t=Nl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const r=kl(this.persistenceKey,e),i=new Rl(e,t,n);this.setItem(r,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Ml.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Ol.Rs(new Zn(i),r,t)}Ys(e,t){const n=this.Ms.exec(e),r=Number(n[1]);return Rl.Rs(r,t)}Ls(e){return Pl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);rr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),r=this.ks(this.Ss),i=this.ks(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.io(s,o).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=qo();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Vl{constructor(){this.so=new Ll,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ll,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){rr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){rr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql=null;function jl(){return null===ql?ql=268435456+Math.round(2147483648*Math.random()):ql++,"0x"+ql.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const zl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="WebChannelConnection";class Gl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const s=jl(),o=this.xo(e,t.toUriEncodedString());rr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,i),this.No(e,o,a,n).then(t=>(rr("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw sr("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+er,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}xo(e,t){const n=zl[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=jl();return new Promise((s,o)=>{const a=new zn;a.setWithCredentials(!0),a.listenOnce(Kn.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Gn.NO_ERROR:const t=a.getResponseJson();rr(Kl,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Gn.TIMEOUT:rr(Kl,`RPC '${e}' ${i} timed out`),o(new hr(lr.DEADLINE_EXCEEDED,"Request time out"));break;case Gn.HTTP_ERROR:const n=a.getStatus();if(rr(Kl,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(lr).indexOf(t)>=0?t:lr.UNKNOWN}(t.status);o(new hr(e,t.message))}else o(new hr(lr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new hr(lr.UNAVAILABLE,"Connection failed."));break;default:ar()}}finally{rr(Kl,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);rr(Kl,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)})}Bo(e,t,n){const r=jl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Jn(),o=Wn(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");rr(Kl,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new $l({Io:t=>{d?rr(Kl,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(rr(Kl,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),rr(Kl,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},To:()=>l.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,$n.EventType.OPEN,()=>{d||(rr(Kl,`RPC '${e}' stream ${r} transport opened.`),f.yo())}),m(l,$n.EventType.CLOSE,()=>{d||(d=!0,rr(Kl,`RPC '${e}' stream ${r} transport closed`),f.So())}),m(l,$n.EventType.ERROR,t=>{d||(d=!0,sr(Kl,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new hr(lr.UNAVAILABLE,"The operation could not be completed")))}),m(l,$n.EventType.MESSAGE,t=>{var n;if(!d){const i=t.data[0];cr(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){rr(Kl,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Ta[e];if(void 0!==t)return Da(t)}(t),i=o.message;void 0===n&&(n=lr.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.So(new hr(n,i)),l.close()}else rr(Kl,`RPC '${e}' stream ${r} received:`,i),f.bo(i)}}),m(o,Hn.STAT_EVENT,t=>{t.stat===Qn.PROXY?rr(Kl,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Qn.NOPROXY&&rr(Kl,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.wo()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){return"undefined"!=typeof window?window:null}function Hl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(e){return new Ga(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&rr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,n,r,i,s,o,a){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Jl(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===lr.RESOURCE_EXHAUSTED?(ir(t.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===lr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Yo===t&&this.P_(e,n)},t=>{e(()=>{const e=new hr(lr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(e=>{n(()=>this.I_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.e_?this.E_(e):this.onNext(e))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return rr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(rr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xl extends Yl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:ar(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(cr(void 0===t||"string"==typeof t),Ji.fromBase64String(t||"")):(cr(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Ji.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?lr.UNKNOWN:Da(e.code);return new hr(t,e.message||"")}(a);n=new Va(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=nc(e,r.document.name),s=Ya(r.document.updateTime),o=r.document.createTime?Ya(r.document.createTime):Dr.min(),a=new Ns({mapValue:{fields:r.document.fields}}),c=Os.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new La(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=nc(e,r.document),s=r.readTime?Ya(r.readTime):Dr.min(),o=Os.newNoDocument(i,s),a=r.removedTargetIds||[];n=new La([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=nc(e,r.document),s=r.removedTargetIds||[];n=new La([],s,i,null)}else{if(!("filter"in t))return ar();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Ea(r,i),o=e.targetId;n=new Fa(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Dr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Dr.min():t.readTime?Ya(t.readTime):Dr.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=sc(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ao(r)?{documents:hc(e,r)}:{query:dc(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Wa(e,t.resumeToken);const r=Qa(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Dr.min())>0){n.readTime=Ha(e,t.snapshotVersion.toTimestamp());const r=Qa(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ar()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=sc(this.serializer),t.removeTarget=e,this.a_(t)}}class Zl extends Yl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return cr(!!e.streamToken),this.lastStreamToken=e.streamToken,cr(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){cr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(cr(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?Ya(e.updateTime):Ya(t);return n.isEqual(Dr.min())&&(n=Ya(t)),new ia(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Ya(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=sc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>uc(this.serializer,e))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new hr(lr.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Mo(e,Za(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===lr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new hr(lr.UNKNOWN,e.toString())})}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Lo(e,Za(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===lr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new hr(lr.UNKNOWN,e.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class th{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ir(t),this.D_=!1):rr("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(e=>{n.enqueueAndForget(async()=>{hh(this)&&(rr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ur(e);t.L_.add(4),await ih(t),t.q_.set("Unknown"),t.L_.delete(4),await rh(t)}(this))})}),this.q_=new th(n,r)}}async function rh(e){if(hh(e))for(const t of e.B_)await t(!0)}async function ih(e){for(const t of e.B_)await t(!1)}function sh(e,t){const n=ur(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),lh(n)?uh(n):Nh(n).r_()&&ah(n,t))}function oh(e,t){const n=ur(e),r=Nh(n);n.N_.delete(t),r.r_()&&ch(n,t),0===n.N_.size&&(r.r_()?r.o_():hh(n)&&n.q_.set("Unknown"))}function ah(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Dr.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Nh(e).A_(t)}function ch(e,t){e.Q_.xe(t),Nh(e).R_(t)}function uh(e){e.Q_=new Ba({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Nh(e).start(),e.q_.v_()}function lh(e){return hh(e)&&!Nh(e).n_()&&e.N_.size>0}function hh(e){return 0===ur(e).L_.size}function dh(e){e.Q_=void 0}async function fh(e){e.q_.set("Online")}async function mh(e){e.N_.forEach((t,n)=>{ah(e,t)})}async function gh(e,t){dh(e),lh(e)?(e.q_.M_(t),uh(e)):e.q_.set("Unknown")}async function ph(e,t,n){if(e.q_.set("Online"),t instanceof Va&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){rr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yh(e,r)}else if(t instanceof La?e.Q_.Ke(t):t instanceof Fa?e.Q_.He(t):e.Q_.We(t),!n.isEqual(Dr.min()))try{const t=await vl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(Ji.EMPTY_BYTE_STRING,r.snapshotVersion)),ch(e,t);const i=new Ec(r.target,t,n,r.sequenceNumber);ah(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){rr("RemoteStore","Failed to raise snapshot:",i),await yh(e,i)}}async function yh(e,t,n){if(!Yr(t))throw t;e.L_.add(1),await ih(e),e.q_.set("Offline"),n||(n=()=>vl(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{rr("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await rh(e)})}function wh(e,t){return t().catch(n=>yh(e,n,t))}async function vh(e){const t=ur(e),n=kh(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;bh(t);)try{const e=await _l(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,_h(t,e)}catch(i){await yh(t,i)}Ih(t)&&Eh(t)}function bh(e){return hh(e)&&e.O_.length<10}function _h(e,t){e.O_.push(t);const n=kh(e);n.r_()&&n.V_&&n.m_(t.mutations)}function Ih(e){return hh(e)&&!kh(e).n_()&&e.O_.length>0}function Eh(e){kh(e).start()}async function Th(e){kh(e).p_()}async function Sh(e){const t=kh(e);for(const n of e.O_)t.m_(n.mutations)}async function Ch(e,t,n){const r=e.O_.shift(),i=_a.from(r,t,n);await wh(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await vh(e)}async function Dh(e,t){t&&kh(e).V_&&await async function(e,t){if(Ca(n=t.code)&&n!==lr.ABORTED){const n=e.O_.shift();kh(e).s_(),await wh(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await vh(e)}var n}(e,t),Ih(e)&&Eh(e)}async function xh(e,t){const n=ur(e);n.asyncQueue.verifyOperationInProgress(),rr("RemoteStore","RemoteStore received new credentials");const r=hh(n);n.L_.add(3),await ih(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await rh(n)}async function Ah(e,t){const n=ur(e);t?(n.L_.delete(2),await rh(n)):t||(n.L_.add(2),await ih(n),n.q_.set("Unknown"))}function Nh(e){return e.K_||(e.K_=function(e,t,n){const r=ur(e);return r.w_(),new Xl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:fh.bind(null,e),Ro:mh.bind(null,e),mo:gh.bind(null,e),d_:ph.bind(null,e)}),e.B_.push(async t=>{t?(e.K_.s_(),lh(e)?uh(e):e.q_.set("Unknown")):(await e.K_.stop(),dh(e))})),e.K_}function kh(e){return e.U_||(e.U_=function(e,t,n){const r=ur(e);return r.w_(),new Zl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Th.bind(null,e),mo:Dh.bind(null,e),f_:Sh.bind(null,e),g_:Ch.bind(null,e)}),e.B_.push(async t=>{t?(e.U_.s_(),await vh(e)):(await e.U_.stop(),e.O_.length>0&&(rr("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Oh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Oh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hr(lr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rh(e,t){if(ir("AsyncQueue",`${t}: ${e}`),Yr(e))return new hr(lr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Or.comparator(t.key,n.key):(e,t)=>Or.comparator(e.key,t.key),this.keyedMap=Oo(),this.sortedSet=new ji(this.comparator)}static emptySet(e){return new Mh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Mh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.W_=new ji(Or.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ar():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Lh{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new Lh(e,t,Mh.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Vh{constructor(){this.queries=Uh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=ur(e),r=n.queries;n.queries=Uh(),r.forEach((e,n)=>{for(const r of n.j_)r.onError(t)})}(this,new hr(lr.ABORTED,"Firestore shutting down"))}}function Uh(){return new xo(e=>Io(e),_o)}async function Bh(e,t){const n=ur(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new Fh,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const e=Rh(o,`Initialization of query '${Eo(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&$h(n)}async function qh(e,t){const n=ur(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jh(e,t){const n=ur(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&$h(n)}function zh(e,t,n){const r=ur(e),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(t)}function $h(e){e.Y_.forEach(e=>{e.next()})}var Kh,Gh;(Gh=Kh||(Kh={})).ea="default",Gh.Cache="cache";class Qh{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Lh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=Lh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Kh.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.serializer=e}Es(e){return nc(this.serializer,e)}ds(e){return e.metadata.exists?cc(this.serializer,e.document,!1):Os.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return Ya(e)}}class Jh{constructor(e,t,n){this.ca=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Yh(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const n=Ar.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,n=new Wh(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.Es(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Uo()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=ur(e);let s=Uo(),o=No();for(const l of n){const e=t.Es(l.metadata.name);l.document&&(s=s.add(e));const n=t.ds(l);n.setReadTime(t.As(l.metadata.readTime)),o=o.insert(e,n)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),c=await Il(i,(u=r,wo(mo(Ar.fromString(`__bundle__/docs/${u}`)))));var u;return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>bl(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.Ur.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.Ur.addMatchingKeys(e,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(e,t.Ps,t.Is)).next(()=>t.Ps)))}(this.localStore,new Wh(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const n of this.queries)await xl(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function Yh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.key=e}}class Zh{constructor(e){this.key=e}}class ed{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Uo(),this.mutatedKeys=Uo(),this.Aa=Co(e),this.Ra=new Mh(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Ph,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=To(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ga(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Aa(l,a)>0||c&&this.Aa(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:o,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ar()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc)),this.pa(n),r=null!=r&&r;const o=t&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,c=a!==this.Ea;return this.Ea=a,0!==s.length||c?{snapshot:new Lh(this.query,e.Ra,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ph,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Uo(),this.Ra.forEach(e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))});const t=[];return e.forEach(e=>{this.da.has(e)||t.push(new Zh(e))}),this.da.forEach(n=>{e.has(n)||t.push(new Xh(n))}),t}ba(e){this.Ta=e.Ts,this.da=Uo();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Lh.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class td{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class nd{constructor(e){this.key=e,this.va=!1}}class rd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new xo(e=>Io(e),_o),this.Ma=new Map,this.xa=new Set,this.Oa=new ji(Or.comparator),this.Na=new Map,this.La=new Yu,this.Ba={},this.ka=new Map,this.qa=Cu.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function id(e,t,n=!0){const r=Rd(e);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await od(r,t,n,!0),i}async function sd(e,t){const n=Rd(e);await od(n,t,!0,!1)}async function od(e,t,n,r){const i=await Il(e.localStore,wo(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await ad(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&sh(e.remoteStore,i),a}async function ad(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await Tl(e.localStore,t.query,!1).then(({documents:e})=>t.view.ma(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return vd(e,t.targetId,a.wa),a.snapshot}(e,t,n,r);const s=await Tl(e.localStore,t,!0),o=new ed(t,s.Ts),a=o.ma(s.documents),c=Pa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);vd(e,n,u.wa);const l=new td(t,n,o);return e.Fa.set(t,l),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function cd(e,t,n){const r=ur(e),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(e=>!_o(e,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await El(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&oh(r.remoteStore,i.targetId),yd(r,i.targetId)}).catch($r)):(yd(r,i.targetId),await El(r.localStore,i.targetId,!0))}async function ud(e,t){const n=ur(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),oh(n.remoteStore,r.targetId))}async function ld(e,t){const n=ur(e);try{const e=await function(e,t){const n=ur(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Ur.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);var l,h,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(Ji.EMPTY_BYTE_STRING,Dr.min()).withLastLimboFreeSnapshotVersion(Dr.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ur.updateTargetData(e,u))});let a=No(),c=Uo();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(bl(e,s,t.documentUpdates).next(e=>{a=e.Ps,c=e.Is})),!r.isEqual(Dr.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next(t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Kr.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.os=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Na.get(t);r&&(cr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?cr(r.va):e.removedDocuments.size>0&&(cr(r.va),r.va=!1))}),await Id(n,e,t)}catch(r){await $r(r)}}function hd(e,t,n){const r=ur(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=ur(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)}),r&&$h(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dd(e,t,n){const r=ur(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),s=i&&i.key;if(s){let e=new ji(Or.comparator);e=e.insert(s,Os.newNoDocument(s,Dr.min()));const n=Uo().add(s),i=new Ma(Dr.min(),new Map,new ji(Er),e,n);await ld(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(t),_d(r)}else await El(r.localStore,t,!1).then(()=>yd(r,t,n)).catch($r)}async function fd(e,t){const n=ur(e),r=t.batch.batchId;try{const e=await function(e,t){const n=ur(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Kr.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);cr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Uo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);pd(n,r,null),gd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Id(n,e)}catch(i){await $r(i)}}async function md(e,t,n){const r=ur(e);try{const e=await function(e,t){const n=ur(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(cr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);pd(r,t,n),gd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Id(r,e)}catch(i){await $r(i)}}function gd(e,t){(e.ka.get(t)||[]).forEach(e=>{e.resolve()}),e.ka.delete(t)}function pd(e,t,n){const r=ur(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function yd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(t=>{e.La.containsKey(t)||wd(e,t)})}function wd(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(oh(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),_d(e))}function vd(e,t,n){for(const r of n)r instanceof Xh?(e.La.addReference(r.key,t),bd(e,r)):r instanceof Zh?(rr("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||wd(e,r.key)):ar()}function bd(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(rr("SyncEngine","New document in limbo: "+n),e.xa.add(r),_d(e))}function _d(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Or(Ar.fromString(t)),r=e.qa.next();e.Na.set(r,new nd(n)),e.Oa=e.Oa.insert(n,r),sh(e.remoteStore,new Ec(wo(mo(n.path)),r,"TargetPurposeLimboResolution",ii.oe))}}async function Id(e,t,n){const r=ur(e),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((e,a)=>{o.push(r.Ka(a,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=fl.Wi(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(e,t){const n=ur(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Kr.forEach(t,t=>Kr.forEach(t.$i,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Kr.forEach(t.Ui,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!Yr(r))throw r;rr("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,s))}async function Ed(e,t){const n=ur(e);if(!n.currentUser.isEqual(t)){rr("SyncEngine","User change. New user:",t.toKey());const e=await wl(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach(e=>{e.forEach(e=>{e.reject(new hr(lr.CANCELLED,i))})}),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Id(n,e.hs)}var r,i}function Td(e,t){const n=ur(e),r=n.Na.get(t);if(r&&r.va)return Uo().add(r.key);{let e=Uo();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}async function Sd(e,t){const n=ur(e),r=await Tl(n.localStore,t.query,!0),i=t.view.ba(r);return n.isPrimaryClient&&vd(n,t.targetId,i.wa),i}async function Cd(e,t){const n=ur(e);return Cl(n.localStore,t).then(e=>Id(n,e))}async function Dd(e,t,n,r){const i=ur(e),s=await function(e,t){const n=ur(e),r=ur(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Mn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):Kr.resolve(null)))}(i.localStore,t);var o,a;null!==s?("pending"===n?await vh(i.remoteStore):"acknowledged"===n||"rejected"===n?(pd(i,t,r||null),gd(i,t),o=i.localStore,a=t,ur(ur(o).mutationQueue).On(a)):ar(),await Id(i,s)):rr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function xd(e,t,n){const r=ur(e),i=[],s=[];for(const o of t){let e;const t=r.Ma.get(o);if(t&&0!==t.length){e=await Il(r.localStore,wo(t[0]));for(const e of t){const t=r.Fa.get(e),n=await Sd(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Sl(r.localStore,o);e=await Il(r.localStore,t),await ad(r,Ad(t),o,!1,e.resumeToken)}i.push(e)}return r.Ca.d_(s),i}function Ad(e){return fo(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Nd(e){return t=ur(e).localStore,ur(ur(t).persistence).Qi();var t}async function kd(e,t,n,r){const i=ur(e);if(i.Qa)return void rr("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Cl(i.localStore,So(s[0])),r=Ma.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Ji.EMPTY_BYTE_STRING);await Id(i,e,r);break}case"rejected":await El(i.localStore,t,!0),yd(i,t,r);break;default:ar()}}async function Od(e,t,n){const r=Rd(e);if(r.Qa){for(const e of t){if(r.Ma.has(e)&&r.sharedClientState.isActiveQueryTarget(e)){rr("SyncEngine","Adding an already active target "+e);continue}const t=await Sl(r.localStore,e),n=await Il(r.localStore,t);await ad(r,Ad(t),n.targetId,!1,n.resumeToken),sh(r.remoteStore,n)}for(const e of n)r.Ma.has(e)&&await El(r.localStore,e,!1).then(()=>{oh(r.remoteStore,e),yd(r,e)}).catch($r)}}function Rd(e){const t=ur(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ld.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Td.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dd.bind(null,t),t.Ca.d_=jh.bind(null,t.eventManager),t.Ca.$a=zh.bind(null,t.eventManager),t}function Md(e){const t=ur(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=md.bind(null,t),t}class Pd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return yl(this.persistence,new gl,e.initialUser,this.serializer)}Ga(e){return new rl(sl.Zr,this.serializer)}Wa(e){return new Vl}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pd.provider={build:()=>new Pd};class Ld extends Pd{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Md(this.Ja.syncEngine),await vh(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return yl(this.persistence,new gl,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ru(n,e.asyncQueue,t)}Ha(e,t){const n=new ri(t,this.persistence);return new ni(e.asyncQueue,n)}Ga(e){const t=dl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?wu.withCacheSize(this.cacheSizeBytes):wu.DEFAULT;return new ul(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ql(),Hl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Vl}}class Fd extends Ld{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Fl&&(this.sharedClientState.syncEngine={no:Dd.bind(null,t),ro:kd.bind(null,t),io:Od.bind(null,t),Qi:Nd.bind(null,t),eo:Cd.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async e=>{await async function(e,t){const n=ur(e);if(Rd(n),Md(n),!0===t&&!0!==n.Qa){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await xd(n,e.toArray());n.Qa=!0,await Ah(n.remoteStore,!0);for(const r of t)sh(n.remoteStore,r)}else if(!1===t&&!1!==n.Qa){const e=[];let t=Promise.resolve();n.Ma.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(yd(n,i),El(n.localStore,i,!0))),oh(n.remoteStore,i)}),await t,await xd(n,e),function(e){const t=ur(e);t.Na.forEach((e,n)=>{oh(t.remoteStore,n)}),t.La.pr(),t.Na=new Map,t.Oa=new ji(Or.comparator)}(n),n.Qa=!1,await Ah(n.remoteStore,!1)}}(this.Ja.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Ql();if(!Fl.D(t))throw new hr(lr.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=dl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Fl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Vd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>hd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ed.bind(null,this.syncEngine),await Ah(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Vh}createDatastore(e){const t=Wl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Gl(r));var r;return function(e,t,n,r){return new eh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>hd(this.syncEngine,e,0),s=Bl.D()?new Bl:new Ul,new nh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new rd(e,t,n,r,i,s);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=ur(e);rr("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await ih(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}function Ud(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vd.provider={build:()=>new Vd};class Bd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new dr,this.buffer=new Uint8Array,this.eu=new TextDecoder("utf-8"),this.tu().then(e=>{e&&e.ua()?this.metadata.resolve(e.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.aa)}`))},e=>this.metadata.reject(e))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(null===e)return null;const t=this.eu.decode(e),n=Number(t);isNaN(n)&&this.ru(`length string (${t}) is not valid number`);const r=await this.iu(n);return new Hh(JSON.parse(r),e.length+n)}su(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async nu(){for(;this.su()<0&&!(await this.ou()););if(0===this.buffer.length)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new hr(lr.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(e,t){const n=ur(e),r={documents:t.map(e=>tc(n.serializer,e))},i=await n.Lo("BatchGetDocuments",n.serializer.databaseId,Ar.emptyPath(),r,t.length),s=new Map;i.forEach(e=>{const t=function(e,t){return"found"in t?function(e,t){cr(!!t.found),t.found.name,t.found.updateTime;const n=nc(e,t.found.name),r=Ya(t.found.updateTime),i=t.found.createTime?Ya(t.found.createTime):Dr.min(),s=new Ns({mapValue:{fields:t.found.fields}});return Os.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){cr(!!t.missing),cr(!!t.readTime);const n=nc(e,t.missing),r=Ya(t.readTime);return Os.newNoDocument(n,r)}(e,t):ar()}(n.serializer,e);s.set(t.key.toString(),t)});const o=[];return t.forEach(e=>{const t=s.get(e.toString());cr(!!t),o.push(t)}),o}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new wa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=Or.fromPath(t);this.mutations.push(new va(n,this.precondition(n)))}),await async function(e,t){const n=ur(e),r={writes:t.map(e=>uc(n.serializer,e))};await n.Mo("Commit",n.serializer.databaseId,Ar.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ar();t=Dr.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new hr(lr.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Dr.min())?sa.exists(!1):sa.updateTime(t):sa.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Dr.min()))throw new hr(lr.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return sa.updateTime(t)}return sa.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this._u=n.maxAttempts,this.t_=new Jl(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new jd(this.datastore),t=this.cu(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.lu(e)}))}).catch(e=>{this.lu(e)})})}cu(e){try{const t=this.updateFunction(e);return!si(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Ca(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Zn.UNAUTHENTICATED,this.clientId=Ir.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{rr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(rr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Rh(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Kd(e,t){e.asyncQueue.verifyOperationInProgress(),rr("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await wl(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Gd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Qd(e);rr("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>xh(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>xh(t.remoteStore,n)),e._onlineComponents=t}async function Qd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){rr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kd(e,e._uninitializedComponentsProvider._offline)}catch(n){const r=n;if(!("FirebaseError"===(t=r).name?t.code===lr.FAILED_PRECONDITION||t.code===lr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw r;sr("Error using user provided cache. Falling back to memory cache: "+r),await Kd(e,new Pd)}}else rr("FirestoreClient","Using default OfflineComponentProvider"),await Kd(e,new Pd);var t;return e._offlineComponents}async function Hd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(rr("FirestoreClient","Using user provided OnlineComponentProvider"),await Gd(e,e._uninitializedComponentsProvider._online)):(rr("FirestoreClient","Using default OnlineComponentProvider"),await Gd(e,new Vd))),e._onlineComponents}function Wd(e){return Qd(e).then(e=>e.persistence)}function Jd(e){return Qd(e).then(e=>e.localStore)}function Yd(e){return Hd(e).then(e=>e.remoteStore)}function Xd(e){return Hd(e).then(e=>e.syncEngine)}async function Zd(e){const t=await Hd(e),n=t.eventManager;return n.onListen=id.bind(null,t.syncEngine),n.onUnlisten=cd.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=sd.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=ud.bind(null,t.syncEngine),n}function ef(e,t,n={}){const r=new dr;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Bd({next:a=>{s.Za(),t.enqueueAndForget(()=>qh(e,o));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new hr(lr.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new hr(lr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new Qh(mo(n.path),s,{includeMetadataChanges:!0,_a:!0});return Bh(e,o)}(await Zd(e),e.asyncQueue,t,n,r)),r.promise}function tf(e,t,n={}){const r=new dr;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Bd({next:n=>{s.Za(),t.enqueueAndForget(()=>qh(e,o)),n.fromCache&&"server"===r.source?i.reject(new hr(lr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Qh(n,s,{includeMetadataChanges:!0,_a:!0});return Bh(e,o)}(await Zd(e),e.asyncQueue,t,n,r)),r.promise}function nf(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?xa().encode(e):e,r=function(e,t){if(e instanceof Uint8Array)return Ud(e,t);if(e instanceof ArrayBuffer)return Ud(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new qd(r,t);var r}(n,Wl(t));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){const r=ur(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=ur(e),r=Ya(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Gr.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:(r=i).totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}),Promise.resolve(new Set);n._updateProgress(Yh(i));const s=new Jh(i,e.localStore,t.serializer);let o=await t.Ua();for(;o;){const e=await s.la(o);e&&n._updateProgress(e),o=await t.Ua()}const a=await s.complete();return await Id(e,a.Ia,void 0),await function(e,t){const n=ur(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Gr.saveBundleMetadata(e,t))}(e.localStore,i),n._completeWith(a.progress),Promise.resolve(a.Pa)}catch(r){return sr("SyncEngine",`Loading bundle failed with ${r}`),n._failWith(r),Promise.resolve(new Set)}var r})(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}(await Xd(e),i,r)})}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rf(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const sf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(e,t,n){if(!n)throw new hr(lr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function af(e,t,n,r){if(!0===t&&!0===r)throw new hr(lr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function cf(e){if(!Or.isDocumentKey(e))throw new hr(lr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function uf(e){if(Or.isDocumentKey(e))throw new hr(lr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":ar()}function hf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new hr(lr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lf(e);throw new hr(lr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function df(e,t){if(t<=0)throw new hr(lr.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new hr(lr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new hr(lr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}af("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rf(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new hr(lr.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new hr(lr.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new hr(lr.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class mf{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new hr(lr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new hr(lr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new mr;switch(e.type){case"firstParty":return new wr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new hr(lr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=sf.get(e);t&&(rr("ComponentProvider","Removing Datastore"),sf.delete(e),t.terminate())}(this),Promise.resolve()}}function gf(e,t,n,r={}){var s;const o=(e=hf(e,mf))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Zn.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new hr(lr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Zn(o)}e._authCredentials=new gr(new fr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pf=class e{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(t){return new e(this.firestore,t,this._query)}},yf=class e{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}},wf=class e extends pf{constructor(e,t,n){super(e,t,mo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yf(this.firestore,null,new Or(e))}withConverter(t){return new e(this.firestore,t,this._path)}};function vf(e,t,...n){if(e=A(e),of("collection","path",t),e instanceof mf){const r=Ar.fromString(t,...n);return uf(r),new wf(e,null,r)}{if(!(e instanceof yf||e instanceof wf))throw new hr(lr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ar.fromString(t,...n));return uf(r),new wf(e.firestore,null,r)}}function bf(e,t,...n){if(e=A(e),1===arguments.length&&(t=Ir.newId()),of("doc","path",t),e instanceof mf){const r=Ar.fromString(t,...n);return cf(r),new yf(e,null,new Or(r))}{if(!(e instanceof yf||e instanceof wf))throw new hr(lr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ar.fromString(t,...n));return cf(r),new yf(e.firestore,e instanceof wf?e.converter:null,new Or(r))}}function _f(e,t){return e=A(e),t=A(t),(e instanceof yf||e instanceof wf)&&(t instanceof yf||t instanceof wf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function If(e,t){return e=A(e),t=A(t),e instanceof pf&&t instanceof pf&&e.firestore===t.firestore&&_o(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ef{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Jl(this,"async_queue_retry"),this.Vu=()=>{const e=Hl();e&&rr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=Hl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Hl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new dr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Yr(e))throw e;rr("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(e=>{this.Eu=e,this.du=!1;throw ir("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e}).then(e=>(this.du=!1,e))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=Oh.createAndSchedule(this,e,t,n,e=>this.yu(e));return this.Tu.push(r),r}fu(){this.Eu&&ar()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Tf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}class Sf{constructor(){this._progressObserver={},this._taskCompletionResolver=new dr,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cf=class extends mf{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Ef,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ef(e),this._firestoreClient=void 0,await e}}};function Df(e){if(e._terminated)throw new hr(lr.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||xf(e),e._firestoreClient}function xf(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new is(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,rf(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new $d(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}function Af(e,t,n){if((e=hf(e,Cf))._firestoreClient||e._terminated)throw new hr(lr.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new hr(lr.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:n},xf(e)}function Nf(e){return function(e){const t=new dr;return e.asyncQueue.enqueueAndForget(async()=>async function(t,n){const r=ur(t);hh(r.remoteStore)||rr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=ur(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(r.localStore);if(-1===e)return void n.resolve();const t=r.ka.get(e)||[];t.push(n),r.ka.set(e,t)}catch(e){const r=Rh(e,"Initialization of waitForPendingWrites() operation failed");n.reject(r)}}(await Xd(e),t)),t.promise}(Df(e=hf(e,Cf)))}function kf(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Wd(e),n=await Yd(e);return t.setNetworkEnabled(!0),function(e){const t=ur(e);return t.L_.delete(0),rh(t)}(n)})}(Df(e=hf(e,Cf)))}function Of(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Wd(e),n=await Yd(e);return t.setNetworkEnabled(!1),async function(e){const t=ur(e);t.L_.add(0),await ih(t),t.q_.set("Offline")}(n)})}(Df(e=hf(e,Cf)))}function Rf(e,t){return function(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=ur(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Gr.getNamedQuery(e,t))}(await Jd(e),t))}(Df(e=hf(e,Cf)),t).then(t=>t?new pf(e,null,t.query):null)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mf(Ji.fromBase64String(e))}catch(t){throw new hr(lr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mf(Ji.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf=class{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new hr(lr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}},Lf=class{constructor(e){this._methodName=e}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ff{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new hr(lr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new hr(lr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Er(this._lat,e._lat)||Er(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=/^__.*__$/;class Bf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ma(e,this.data,this.fieldMask,t,this.fieldTransforms):new fa(e,this.data,t,this.fieldTransforms)}}class qf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ma(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ar()}}class zf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new zf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return um(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(jf(this.Cu)&&Uf.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class $f{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Wl(e)}Qu(e,t,n,r=!1){return new zf({Cu:e,methodName:t,qu:n,path:kr.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kf(e){const t=e._freezeSettings(),n=Wl(e._databaseId);return new $f(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Gf(e,t,n,r,i,s={}){const o=e.Qu(s.merge||s.mergeFields?2:0,t,n,i);sm("Data must be an object, but it was:",o,r);const a=rm(r,o);let c,u;if(s.merge)c=new Hi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=om(t,r,n);if(!o.contains(i))throw new hr(lr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lm(e,i)||e.push(i)}c=new Hi(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Bf(new Ns(a),c,u)}class Qf extends Lf{_toFieldTransform(e){if(2!==e.Cu)throw 1===e.Cu?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qf}}function Hf(e,t,n){return new zf({Cu:3,qu:t.settings.qu,methodName:e._methodName,xu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Wf extends Lf{_toFieldTransform(e){return new ra(e.path,new Wo)}isEqual(e){return e instanceof Wf}}class Jf extends Lf{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Hf(this,e,!0),n=this.Ku.map(e=>nm(e,t)),r=new Jo(n);return new ra(e.path,r)}isEqual(e){return e instanceof Jf&&E(this.Ku,e.Ku)}}class Yf extends Lf{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Hf(this,e,!0),n=this.Ku.map(e=>nm(e,t)),r=new Xo(n);return new ra(e.path,r)}isEqual(e){return e instanceof Yf&&E(this.Ku,e.Ku)}}class Xf extends Lf{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new ea(e.serializer,$o(e.serializer,this.$u));return new ra(e.path,t)}isEqual(e){return e instanceof Xf&&this.$u===e.$u}}function Zf(e,t,n,r){const i=e.Qu(1,t,n);sm("Data must be an object, but it was:",i,r);const s=[],o=Ns.empty();Bi(r,(e,r)=>{const a=cm(t,e,n);r=A(r);const c=i.Nu(a);if(r instanceof Qf)s.push(a);else{const e=nm(r,c);null!=e&&(s.push(a),o.set(a,e))}});const a=new Hi(s);return new qf(o,a,i.fieldTransforms)}function em(e,t,n,r,i,s){const o=e.Qu(1,t,n),a=[om(t,r,n)],c=[i];if(s.length%2!=0)throw new hr(lr.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(om(t,s[d])),c.push(s[d+1]);const u=[],l=Ns.empty();for(let d=a.length-1;d>=0;--d)if(!lm(u,a[d])){const e=a[d];let t=c[d];t=A(t);const n=o.Nu(e);if(t instanceof Qf)u.push(e);else{const r=nm(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new Hi(u);return new qf(l,h,o.fieldTransforms)}function tm(e,t,n,r=!1){return nm(n,e.Qu(r?4:3,t))}function nm(e,t){if(im(e=A(e)))return sm("Unsupported field value:",t,e),rm(e,t);if(e instanceof Lf)return function(e,t){if(!jf(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=nm(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=A(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return $o(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Cr.fromDate(e);return{timestampValue:Ha(t.serializer,n)}}if(e instanceof Cr){const n=new Cr(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ha(t.serializer,n)}}if(e instanceof Ff)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Mf)return{bytesValue:Wa(t.serializer,e._byteString)};if(e instanceof yf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xa(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Vf)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return jo(n.serializer,e)})}}}}};var n;throw t.Bu(`Unsupported field value: ${lf(e)}`)}(e,t)}function rm(e,t){const n={};return qi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Bi(e,(e,r)=>{const i=nm(r,t.Mu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function im(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Cr||e instanceof Ff||e instanceof Mf||e instanceof yf||e instanceof Lf||e instanceof Vf)}function sm(e,t,n){if(!im(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=lf(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function om(e,t,n){if((t=A(t))instanceof Pf)return t._internalPath;if("string"==typeof t)return cm(e,t);throw um("Field path arguments must be of type string or ",e,!1,void 0,n)}const am=new RegExp("[~\\*/\\[\\]]");function cm(e,t,n){if(t.search(am)>=0)throw um(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Pf(...t.split("."))._internalPath}catch(r){throw um(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function um(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new hr(lr.INVALID_ARGUMENT,a+e+c)}function lm(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new dm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class dm extends hm{data(){return super.data()}}function fm(e,t){return"string"==typeof t?cm(e,t):t instanceof Pf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new hr(lr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gm{}class pm extends gm{}function ym(e,t,...n){let r=[];t instanceof gm&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof vm).length,n=e.filter(e=>e instanceof wm).length;if(t>1||t>0&&n>0)throw new hr(lr.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class wm extends pm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new wm(e,t,n)}_apply(e){const t=this._parse(e);return Dm(e._query,t),new pf(e.firestore,e.converter,vo(e._query,t))}_parse(e){const t=Kf(e.firestore);return function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new hr(lr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Cm(o,s);const t=[];for(const n of o)t.push(Sm(r,e,n));a={arrayValue:{values:t}}}else a=Sm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Cm(o,s),a=tm(n,t,o,"in"===s||"not-in"===s);return Us.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class vm extends gm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vm(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Bs.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Dm(n,i),n=vo(n,i)}(e._query,t),new pf(e.firestore,e.converter,vo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class bm extends pm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new bm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new hr(lr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new hr(lr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ls(t,n)}(e._query,this._field,this._direction);return new pf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ho(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class _m extends pm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new _m(e,t,n)}_apply(e){return new pf(e.firestore,e.converter,bo(e._query,this._limit,this._limitType))}}class Im extends pm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Im(e,t,n)}_apply(e){const t=Tm(e,this.type,this._docOrFields,this._inclusive);return new pf(e.firestore,e.converter,(n=e._query,r=t,new ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}class Em extends pm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Em(e,t,n)}_apply(e){const t=Tm(e,this.type,this._docOrFields,this._inclusive);return new pf(e.firestore,e.converter,(n=e._query,r=t,new ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,r)));var n,r}}function Tm(e,t,n,r){if(n[0]=A(n[0]),n[0]instanceof hm)return function(e,t,n,r,i){if(!r)throw new hr(lr.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of yo(e))if(o.field.isKeyField())s.push(ps(t,r.key));else{const e=r.data.field(o.field);if(ts(e))throw new hr(lr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new hr(lr.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Rs(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Kf(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new hr(lr.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new hr(lr.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!po(e)&&-1!==s.indexOf("/"))throw new hr(lr.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ar.fromString(s));if(!Or.isDocumentKey(n))throw new hr(lr.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Or(n);a.push(ps(t,i))}else{const e=tm(n,r,s);a.push(e)}}return new Rs(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Sm(e,t,n){if("string"==typeof(n=A(n))){if(""===n)throw new hr(lr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!po(t)&&-1!==n.indexOf("/"))throw new hr(lr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ar.fromString(n));if(!Or.isDocumentKey(r))throw new hr(lr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ps(e,new Or(r))}if(n instanceof yf)return ps(e,n._key);throw new hr(lr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lf(n)}.`)}function Cm(e,t){if(!Array.isArray(e)||0===e.length)throw new hr(lr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Dm(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new hr(lr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new hr(lr.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class xm{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Zi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ar()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bi(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>Zi(e.doubleValue));return new Vf(i)}convertGeoPoint(e){return new Ff(Zi(e.latitude),Zi(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ns(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rs(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new Cr(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ar.fromString(e);cr(Ic(n));const r=new ss(n.get(1),n.get(3)),i=new Or(n.popFirst(5));return r.isEqual(t)||ir(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Nm extends xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yf(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Om=class extends hm{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(fm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},Rm=class extends Om{data(e={}){return super.data(e)}},Mm=class{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new km(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Rm(this._firestore,this._userDataWriter,n.key,n,new km(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new hr(lr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Rm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new km(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Rm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new km(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Pm(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Pm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ar()}}function Lm(e,t){return e instanceof Om&&t instanceof Om?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Mm&&t instanceof Mm&&e._firestore===t._firestore&&If(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm extends xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yf(this.firestore,null,t)}}function Vm(e){e=hf(e,yf);const t=hf(e.firestore,Cf),n=Df(t),r=new Fm(t);return function(e,t){const n=new dr;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=ur(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new hr(lr.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){const e=Rh(r,`Failed to get document '${t} from cache`);n.reject(e)}}(await Jd(e),t,n)),n.promise}(n,e._key).then(n=>new Om(t,r,e._key,n,new km(null!==n&&n.hasLocalMutations,!0),e.converter))}function Um(e){e=hf(e,pf);const t=hf(e.firestore,Cf),n=Df(t),r=new Fm(t);return function(e,t){const n=new dr;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Tl(e,t,!0),i=new ed(t,r.Ts),s=i.ma(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(r){const e=Rh(r,`Failed to execute query '${t} against cache`);n.reject(e)}}(await Jd(e),t,n)),n.promise}(n,e._query).then(n=>new Mm(t,r,e,n))}function Bm(e,t,n){e=hf(e,yf);const r=hf(e.firestore,Cf),i=Am(e.converter,t,n);return $m(r,[Gf(Kf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,sa.none())])}function qm(e,t,n,...r){e=hf(e,yf);const i=hf(e.firestore,Cf),s=Kf(i);let o;return o="string"==typeof(t=A(t))||t instanceof Pf?em(s,"updateDoc",e._key,t,n,r):Zf(s,"updateDoc",e._key,t),$m(i,[o.toMutation(e._key,sa.exists(!0))])}function jm(e,...t){var n,r,i;e=A(e);let s={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof t[o]||Tf(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Tf(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof yf)u=hf(e.firestore,Cf),l=mo(e._key.path),c={next:n=>{t[o]&&t[o](Km(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=hf(e,pf);u=hf(n.firestore,Cf),l=n._query;const r=new Fm(u);c={next:e=>{t[o]&&t[o](new Mm(u,r,n,e))},error:t[o+1],complete:t[o+2]},mm(e._query)}return function(e,t,n,r){const i=new Bd(r),s=new Qh(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>Bh(await Zd(e),s)),()=>{i.Za(),e.asyncQueue.enqueueAndForget(async()=>qh(await Zd(e),s))}}(Df(u),l,a,c)}function zm(e,t){return function(e,t){const n=new Bd(t);return e.asyncQueue.enqueueAndForget(async()=>{return t=await Zd(e),r=n,ur(t).Y_.add(r),void r.next();var t,r}),()=>{n.Za(),e.asyncQueue.enqueueAndForget(async()=>{return t=await Zd(e),r=n,void ur(t).Y_.delete(r);var t,r})}}(Df(e=hf(e,Cf)),Tf(t)?t:{next:t})}function $m(e,t){return function(e,t){const n=new dr;return e.asyncQueue.enqueueAndForget(async()=>async function(t,n,r){const i=Md(t);try{const e=await function(e,t){const n=ur(e),r=Cr.now(),i=t.reduce((e,t)=>e.add(t.key),Uo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=No(),c=Uo();return n.cs.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=ha(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new ma(e.key,t,ks(t.value.mapValue),sa.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Ro(s)}))}(i.localStore,n);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new ji(Er)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(i,e.batchId,r),await Id(i,e.changes),await vh(i.remoteStore)}catch(e){const n=Rh(e,"Failed to persist write");r.reject(n)}}(await Xd(e),t,n)),n.promise}(Df(e),t)}function Km(e,t,n){const r=n.docs.get(t._key),i=new Fm(e);return new Om(e,i,t._key,r,new km(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qm=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Kf(e)}set(e,t,n){this._verifyNotCommitted();const r=Hm(e,this._firestore),i=Am(r.converter,t,n),s=Gf(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,sa.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Hm(e,this._firestore);let s;return s="string"==typeof(t=A(t))||t instanceof Pf?em(this._dataReader,"WriteBatch.update",i._key,t,n,r):Zf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,sa.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Hm(e,this._firestore);return this._mutations=this._mutations.concat(new wa(t._key,sa.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new hr(lr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Hm(e,t){if((e=A(e)).firestore!==t)throw new hr(lr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wm=class extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Kf(e)}get(e){const t=Hm(e,this._firestore),n=new Nm(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return ar();const r=e[0];if(r.isFoundDocument())return new hm(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new hm(this._firestore,n,t._key,null,t.converter);throw ar()})}set(e,t,n){const r=Hm(e,this._firestore),i=Am(r.converter,t,n),s=Gf(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Hm(e,this._firestore);let s;return s="string"==typeof(t=A(t))||t instanceof Pf?em(this._dataReader,"Transaction.update",i._key,t,n,r):Zf(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Hm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Hm(e,this._firestore),n=new Fm(this._firestore);return super.get(e).then(e=>new Om(this._firestore,n,t._key,e._document,new km(!1,!1),t.converter))}};function Jm(e,t,n){e=hf(e,Cf);const r=Object.assign(Object.assign({},Gm),n);return function(e){if(e.maxAttempts<1)throw new hr(lr.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new dr;return e.asyncQueue.enqueueAndForget(async()=>{const i=await function(e){return Hd(e).then(e=>e.datastore)}(e);new zd(e.asyncQueue,i,n,t,r).au()}),r.promise}(Df(e),n=>t(new Wm(e,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){er=He,je(new N("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Cf(new pr(e.getProvider("auth-internal")),new br(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new hr(lr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ss(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Ye(Xn,"4.7.3",e),Ye(Xn,"4.7.3","esm2017")}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ym(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new hr("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){if("undefined"==typeof Uint8Array)throw new hr("unimplemented","Uint8Arrays are not available in this environment.")}function Zm(){if("undefined"==typeof atob)throw new hr("unimplemented","Blobs are unavailable in Firestore in this environment.")}class eg{constructor(e){this._delegate=e}static fromBase64String(e){return Zm(),new eg(Mf.fromBase64String(e))}static fromUint8Array(e){return Xm(),new eg(Mf.fromUint8Array(e))}toBase64(){return Zm(),this._delegate.toBase64()}toUint8Array(){return Xm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class ng{enableIndexedDbPersistence(e,t){return function(e,t){sr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings();return Af(e,Vd.provider,{build:e=>new Ld(e,n.cacheSizeBytes,null==t?void 0:t.forceOwnership)}),Promise.resolve()}(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return async function(e){sr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=e._freezeSettings();Af(e,Vd.provider,{build:e=>new Fd(e,t.cacheSizeBytes)})}(e._delegate)}clearIndexedDbPersistence(e){return function(e){if(e._initialized&&!e._terminated)throw new hr(lr.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new dr;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Qr.D())return Promise.resolve();const t=e+"main";await Qr.delete(t)}(dl(e._databaseId,e._persistenceKey)),t.resolve()}catch(n){t.reject(n)}}),t.promise}(e._delegate)}}class rg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof ss||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||sr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){gf(this._delegate,e,t,n)}enableNetwork(){return kf(this._delegate)}disableNetwork(){return Of(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,af("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Nf(this._delegate)}onSnapshotsInSync(e){return zm(this._delegate,e)}get app(){if(!this._appCompat)throw new hr("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new yg(this,vf(this._delegate,e))}catch(t){throw ug(t,"collection()","Firestore.collection()")}}doc(e){try{return new cg(this,bf(this._delegate,e))}catch(t){throw ug(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new mg(this,function(e,t){if(e=hf(e,mf),of("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new hr(lr.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new pf(e,null,(n=t,new ho(Ar.emptyPath(),n)));var n}(this._delegate,e))}catch(t){throw ug(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Jm(this._delegate,t=>e(new sg(this,t)))}batch(){return Df(this._delegate),new og(new Qm(this._delegate,e=>$m(this._delegate,e)))}loadBundle(e){return function(e,t){const n=Df(e=hf(e,Cf)),r=new Sf;return nf(n,e._databaseId,t,r),r}(this._delegate,e)}namedQuery(e){return Rf(this._delegate,e).then(e=>e?new mg(this,e):null)}}class ig extends xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new eg(new Mf(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return cg.forKey(t,this.firestore,null)}}class sg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ig(e)}get(e){const t=wg(e);return this._delegate.get(t).then(e=>new dg(this._firestore,new Om(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=wg(e);return n?(Ym("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=wg(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=wg(e);return this._delegate.delete(t),this}}class og{constructor(e){this._delegate=e}set(e,t,n){const r=wg(e);return n?(Ym("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=wg(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=wg(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ag{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Rm(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new fg(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=ag.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new ag(e,new ig(e),t),r.set(t,i)),i}}ag.INSTANCES=new WeakMap;class cg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ig(e)}static forPath(e,t,n){if(e.length%2!=0)throw new hr("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new cg(t,new yf(t._delegate,n,new Or(e)))}static forKey(e,t,n){return new cg(t,new yf(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new yg(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new yg(this.firestore,vf(this._delegate,e))}catch(t){throw ug(t,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=A(e))instanceof yf&&_f(this._delegate,e)}set(e,t){t=Ym("DocumentReference.set",t);try{return t?Bm(this._delegate,e,t):Bm(this._delegate,e)}catch(n){throw ug(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?qm(this._delegate,e):qm(this._delegate,e,t,...n)}catch(r){throw ug(r,"updateDoc()","DocumentReference.update()")}}delete(){return $m(hf((e=this._delegate).firestore,Cf),[new wa(e._key,sa.none())]);var e}onSnapshot(...e){const t=lg(e),n=hg(e,e=>new dg(this.firestore,new Om(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return jm(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Vm(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=hf(e,yf);const t=hf(e.firestore,Cf);return ef(Df(t),e._key,{source:"server"}).then(n=>Km(t,e,n))}(this._delegate):function(e){e=hf(e,yf);const t=hf(e.firestore,Cf);return ef(Df(t),e._key).then(n=>Km(t,e,n))}(this._delegate),t.then(e=>new dg(this.firestore,new Om(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new cg(this.firestore,e?this._delegate.withConverter(ag.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ug(e,t,n){return e.message=e.message.replace(t,n),e}function lg(e){for(const t of e)if("object"==typeof t&&!tg(t))return t;return{}}function hg(e,t){var n,r;let i;return i=tg(e[0])?e[0]:tg(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class dg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new cg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Lm(this._delegate,e._delegate)}}class fg extends dg{data(e){const t=this._delegate.data(e);return this._delegate._converter||void 0!==t||ar(),t}}class mg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ig(e)}where(e,t,n){try{return new mg(this.firestore,ym(this._delegate,function(e,t,n){const r=t,i=fm("where",e);return wm._create(i,r,n)}(e,t,n)))}catch(r){throw ug(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new mg(this.firestore,ym(this._delegate,function(e,t="asc"){const n=t,r=fm("orderBy",e);return bm._create(r,n)}(e,t)))}catch(n){throw ug(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new mg(this.firestore,ym(this._delegate,(df("limit",t=e),_m._create("limit",t,"F"))))}catch(t){throw ug(t,"limit()","Query.limit()")}var t}limitToLast(e){try{return new mg(this.firestore,ym(this._delegate,(df("limitToLast",t=e),_m._create("limitToLast",t,"L"))))}catch(t){throw ug(t,"limitToLast()","Query.limitToLast()")}var t}startAt(...e){try{return new mg(this.firestore,ym(this._delegate,function(...e){return Im._create("startAt",e,!0)}(...e)))}catch(t){throw ug(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new mg(this.firestore,ym(this._delegate,function(...e){return Im._create("startAfter",e,!1)}(...e)))}catch(t){throw ug(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new mg(this.firestore,ym(this._delegate,function(...e){return Em._create("endBefore",e,!1)}(...e)))}catch(t){throw ug(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new mg(this.firestore,ym(this._delegate,function(...e){return Em._create("endAt",e,!0)}(...e)))}catch(t){throw ug(t,"endAt()","Query.endAt()")}}isEqual(e){return If(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Um(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=hf(e,pf);const t=hf(e.firestore,Cf),n=Df(t),r=new Fm(t);return tf(n,e._query,{source:"server"}).then(n=>new Mm(t,r,e,n))}(this._delegate):function(e){e=hf(e,pf);const t=hf(e.firestore,Cf),n=Df(t),r=new Fm(t);return mm(e._query),tf(n,e._query).then(n=>new Mm(t,r,e,n))}(this._delegate),t.then(e=>new pg(this.firestore,new Mm(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=lg(e),n=hg(e,e=>new pg(this.firestore,new Mm(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return jm(this._delegate,t,n)}withConverter(e){return new mg(this.firestore,e?this._delegate.withConverter(ag.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class gg{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new fg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class pg{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new mg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new fg(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new gg(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new fg(this._firestore,n))})}isEqual(e){return Lm(this._delegate,e._delegate)}}class yg extends mg{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new cg(this.firestore,e):null}doc(e){try{return new cg(this.firestore,void 0===e?bf(this._delegate):bf(this._delegate,e))}catch(t){throw ug(t,"doc()","CollectionReference.doc()")}}add(e){return function(e,t){const n=hf(e.firestore,Cf),r=bf(e),i=Am(e.converter,t);return $m(n,[Gf(Kf(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,sa.exists(!1))]).then(()=>r)}(this._delegate,e).then(e=>new cg(this.firestore,e))}isEqual(e){return _f(this._delegate,e._delegate)}withConverter(e){return new yg(this.firestore,e?this._delegate.withConverter(ag.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function wg(e){return hf(e,yf)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(...e){this._delegate=new Pf(...e)}static documentId(){return new vg(kr.keyField().canonicalString())}isEqual(e){return(e=A(e))instanceof Pf&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this._delegate=e}static serverTimestamp(){const e=new Wf("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new bg(e)}static delete(){const e=new Qf("deleteField");return e._methodName="FieldValue.delete",new bg(e)}static arrayUnion(...e){const t=function(...e){return new Jf("arrayUnion",e)}(...e);return t._methodName="FieldValue.arrayUnion",new bg(t)}static arrayRemove(...e){const t=function(...e){return new Yf("arrayRemove",e)}(...e);return t._methodName="FieldValue.arrayRemove",new bg(t)}static increment(e){const t=new Xf("increment",e);return t._methodName="FieldValue.increment",new bg(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g={Firestore:rg,GeoPoint:Ff,Timestamp:Cr,Blob:eg,Transaction:sg,WriteBatch:og,DocumentReference:cg,DocumentSnapshot:dg,Query:mg,QueryDocumentSnapshot:fg,QuerySnapshot:pg,CollectionReference:yg,FieldPath:vg,FieldValue:bg,setLogLevel:function(e){var t;t=e,tr.setLogLevel(t)},CACHE_SIZE_UNLIMITED:-1};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ig,Eg;Eg=(e,t)=>new rg(e,t,new ng),(Ig=gt).INTERNAL.registerComponent(new N("firestore-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return Eg(t,n)},"PUBLIC").setServiceProps(Object.assign({},_g))),Ig.registerVersion("@firebase/firestore-compat","0.3.38");export{gt as f};
