!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var r=o();for(var t in r)("object"==typeof exports?exports:e)[t]=r[t]}}(this,(()=>(()=>{"use strict";var e={d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{DatadogLoggingConnector:()=>t});const r=require("@datadog/browser-logs");class t{constructor(e,o,t,n){r.datadogLogs.init({clientToken:e,site:o,service:"crewdle-sdk",env:t,version:n})}log(e,o){r.datadogLogs.logger.info(e,o)}warn(e,o){r.datadogLogs.logger.warn(e,o)}error(e,o){r.datadogLogs.logger.error(e,o)}}return o})()));