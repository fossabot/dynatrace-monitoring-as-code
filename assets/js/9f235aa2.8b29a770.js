"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[5613],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6138:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:5},l={unversionedId:"commands/Logging",id:"version-1.7.0/commands/Logging",isDocsHomePage:!1,title:"Logging",description:"Use the MONACOREQUESTLOG and MONACORESPONSELOG environment variables to specify a file that logs the HTTP traffic between Monaco and the Dynatrace API.",source:"@site/versioned_docs/version-1.7.0/commands/Logging.md",sourceDirName:"commands",slug:"/commands/Logging",permalink:"/dynatrace-monitoring-as-code/commands/Logging",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.7.0/commands/Logging.md",version:"1.7.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-1.7.0/tutorialSidebar",previous:{title:"Download configuration",permalink:"/dynatrace-monitoring-as-code/commands/downloading-configuration"},next:{title:"Deploy configuration",permalink:"/dynatrace-monitoring-as-code/configuration/deploy_configuration"}},s=[],u={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MONACO_REQUEST_LOG")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MONACO_RESPONSE_LOG")," environment variables to specify a file that logs the HTTP traffic between Monaco and the Dynatrace API.\nThis is useful when debugging your implementation."),(0,i.kt)("p",null,"The path for the specified file can be absolute or relative to the current working directory."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If the file already exists, it will get ",(0,i.kt)("strong",{parentName:"p"},"truncated!"),".")),(0,i.kt)("p",null,"To specify the log file, set the environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," MONACO_REQUEST_LOG=request.log MONACO_RESPONSE_LOG=response.log monaco -e environment project\n")),(0,i.kt)("p",null,"Monaco immediately starts writing all send requests to the specified file(s)."),(0,i.kt)("p",null,"The content of multipart post requests is currently not logged. This is a known limitation."))}p.isMDXComponent=!0}}]);