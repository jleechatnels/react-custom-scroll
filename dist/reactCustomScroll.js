!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(function(){try{return require("prop-types")}catch(e){}}(),require("react-dom"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react-dom","react"],t):"object"==typeof exports?exports.ReactCustomScroll=t(function(){try{return require("prop-types")}catch(e){}}(),require("react-dom"),require("react")):e.ReactCustomScroll=t(e["prop-types"],e["react-dom"],e.react)}("undefined"!=typeof self?self:this,function(e,t,o){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(t,o){if(void 0===e){var r=new Error('Cannot find module "prop-types"');throw r.code="MODULE_NOT_FOUND",r}t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t,o){"use strict";var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),n=o(2),l=c(n),i=c(o(1)),s=c(o(9));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t){var o=void 0;return function(){clearTimeout(o),o=setTimeout(function(){e()},t)}},u=function(e,t,o){return(t=t||0===t?t:e)>(o=o||0===o?o:e)?(console.error("min limit is greater than max limit"),e):e<t?t:e>o?o:e};function d(e,t){return e.clientX>t.left&&e.clientX<t.right&&e.clientY>t.top&&e.clientY<t.top+t.height}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.adjustFreezePosition=function(e){var t=o.getScrolledElement(),r=o.contentWrapper;o.props.freezePosition&&(r.scrollTop=o.state.scrollPos),e.freezePosition&&(t.scrollTop=o.state.scrollPos)},o.toggleScrollIfNeeded=function(){var e=o.contentHeight-o.visibleHeight>1;o.hasScroll!==e&&(o.hasScroll=e,o.forceUpdate())},o.getScrollTop=function(){return o.getScrolledElement().scrollTop},o.updateScrollPosition=function(e){var t=o.getScrolledElement(),r=u(e,0,o.contentHeight-o.visibleHeight);t.scrollTop=r,o.setState({scrollPos:r})},o.onClick=function(e){if(o.hasScroll&&o.isMouseEventOnCustomScrollbar(e)&&!o.isMouseEventOnScrollHandle(e)){var t=o.calculateNewScrollHandleTop(e),r=o.getScrollValueFromHandlePosition(t);o.updateScrollPosition(r)}},o.isMouseEventOnCustomScrollbar=function(e){if(!o.customScrollbarRef)return!1;var t=i.default.findDOMNode(o).getBoundingClientRect(),r=o.customScrollbarRef.getBoundingClientRect(),n=o.props.rtl?{left:t.left,right:r.right}:{left:r.left,width:t.right};return d(e,Object.assign({},{left:t.left,right:t.right,top:t.top,height:t.height},n))},o.isMouseEventOnScrollHandle=function(e){return!!o.scrollHandle&&function(e,t){return d(e,t.getBoundingClientRect())}(e,i.default.findDOMNode(o.scrollHandle))},o.calculateNewScrollHandleTop=function(e){var t=i.default.findDOMNode(o).getBoundingClientRect().top+window.pageYOffset,r=e.pageY-t,n=o.getScrollHandleStyle().top;return r>n+o.scrollHandleHeight?n+Math.min(o.scrollHandleHeight,o.visibleHeight-o.scrollHandleHeight):n-Math.max(o.scrollHandleHeight,0)},o.getScrollValueFromHandlePosition=function(e){return e/o.scrollRatio},o.getScrollHandleStyle=function(){var e=o.state.scrollPos*o.scrollRatio;return o.scrollHandleHeight=o.visibleHeight*o.scrollRatio,{height:o.scrollHandleHeight,top:e}},o.adjustCustomScrollPosToContentPos=function(e){o.setState({scrollPos:e})},o.onScroll=function(e){o.props.freezePosition||(o.hideScrollThumb(),o.adjustCustomScrollPosToContentPos(e.currentTarget.scrollTop),o.props.onScroll&&o.props.onScroll(e))},o.getScrolledElement=function(){return o.innerContainer},o.onMouseDown=function(e){o.hasScroll&&o.isMouseEventOnScrollHandle(e)&&(o.startDragHandlePos=o.getScrollHandleStyle().top,o.startDragMousePos=e.pageY,o.setState({onDrag:!0}),document.addEventListener("mousemove",o.onHandleDrag,{passive:!1}),document.addEventListener("mouseup",o.onHandleDragEnd,{passive:!1}))},o.onTouchStart=function(){o.setState({onDrag:!0})},o.onHandleDrag=function(e){e.preventDefault();var t=e.pageY-o.startDragMousePos,r=u(o.startDragHandlePos+t,0,o.visibleHeight-o.scrollHandleHeight),n=o.getScrollValueFromHandlePosition(r);o.updateScrollPosition(n)},o.onHandleDragEnd=function(e){o.setState({onDrag:!1}),e.preventDefault(),document.removeEventListener("mousemove",o.onHandleDrag),document.removeEventListener("mouseup",o.onHandleDragEnd)},o.blockOuterScroll=function(e){if(!o.props.allowOuterScroll){var t=e.currentTarget,r=e.currentTarget.scrollHeight-e.currentTarget.offsetHeight,n=e.deltaY%3?e.deltaY:10*e.deltaY;t.scrollTop+n<=0?(t.scrollTop=0,e.preventDefault()):t.scrollTop+n>=r&&(t.scrollTop=r,e.preventDefault()),e.stopPropagation()}},o.getInnerContainerClasses=function(){return o.state.scrollPos&&o.props.addScrolledClass?s.default.innerContainer+" "+s.default.contentScrolled:s.default.innerContainer},o.getScrollStyles=function(){var e=o.scrollbarYWidth||20,t=o.props.rtl?"marginLeft":"marginRight",r={height:o.props.heightRelativeToParent||o.props.flex?"100%":""};r[t]=-1*e;var n={height:o.props.heightRelativeToParent||o.props.flex?"100%":"",overflowY:o.props.freezePosition?"hidden":"visible"};return n[t]=o.scrollbarYWidth?0:e,{innerContainer:r,contentWrapper:n}},o.getOuterContainerStyle=function(){return{height:o.props.heightRelativeToParent||o.props.flex?"100%":""}},o.getRootStyles=function(){var e={};return o.props.heightRelativeToParent?e.height=o.props.heightRelativeToParent:o.props.flex&&(e.flex=o.props.flex),e},o.enforceMinHandleHeight=function(e){var t=o.props.minScrollHandleHeight;if(e.height>=t)return e;var r=(t-e.height)*(o.state.scrollPos/(o.contentHeight-o.visibleHeight));return{height:t,top:e.top-r}},o.setCustomScrollbarRef=function(e){o.customScrollbarRef=e},o.scrollbarYWidth=0,o.state={scrollPos:0,onDrag:!1},o.setRefElement=function(e){return function(t){o[e]=t}},o.hideScrollThumb=a(function(){o.setState({onDrag:!1})},500),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r(t,[{key:"componentDidMount",value:function(){void 0!==this.props.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.forceUpdate()}},{key:"componentDidUpdate",value:function(e,t){var o=this.contentHeight,r=this.visibleHeight,n=this.getScrolledElement(),l=t.scrollPos>=o-r;this.contentHeight=n.scrollHeight,this.scrollbarYWidth=n.offsetWidth-n.clientWidth,this.visibleHeight=n.clientHeight,this.scrollRatio=this.contentHeight?this.visibleHeight/this.contentHeight:1,this.toggleScrollIfNeeded();var i=this.state===t;(this.props.freezePosition||e.freezePosition)&&this.adjustFreezePosition(e),void 0!==this.props.scrollTo&&this.props.scrollTo!==e.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.props.keepAtBottom&&i&&l&&this.updateScrollPosition(this.contentHeight-this.visibleHeight)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.onHandleDrag),document.removeEventListener("mouseup",this.onHandleDragEnd)}},{key:"render",value:function(){var e=this.getScrollStyles(),t=this.getRootStyles(),o=this.enforceMinHandleHeight(this.getScrollHandleStyle());return l.default.createElement("div",{className:s.default.customScroll+" "+(this.state.onDrag?s.default.scrollHandleDragged:""),style:t},l.default.createElement("div",{className:s.default.outerContainer,style:this.getOuterContainerStyle(),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onClick:this.onClick},this.hasScroll?l.default.createElement("div",{className:s.default.positioning},l.default.createElement("div",{ref:this.setCustomScrollbarRef,className:s.default.customScrollbar+" "+(this.props.rtl?s.default.customScrollbarRtl:""),key:"scrollbar"},l.default.createElement("div",{ref:this.setRefElement("scrollHandle"),className:s.default.customScrollHandle,style:o},l.default.createElement("div",{className:this.props.handleClass})))):null,l.default.createElement("div",{ref:this.setRefElement("innerContainer"),className:this.getInnerContainerClasses(),style:e.innerContainer,onScroll:this.onScroll,onWheel:this.blockOuterScroll},l.default.createElement("div",{className:s.default.contentWrapper,ref:this.setRefElement("contentWrapper"),style:e.contentWrapper},this.props.children))))}}]),t}();try{var f=o(0);p.propTypes={children:f.any,allowOuterScroll:f.bool,heightRelativeToParent:f.string,onScroll:f.func,addScrolledClass:f.bool,freezePosition:f.bool,handleClass:f.string,minScrollHandleHeight:f.number,flex:f.string,rtl:f.bool,scrollTo:f.number,keepAtBottom:f.bool}}catch(e){}p.defaultProps={handleClass:s.default.innerHandle,minScrollHandleHeight:38},e.exports=p},function(e,t,o){e.exports=o(3)},,,,,function(e,t){e.exports={"custom-scroll":"rcs-custom-scroll",customScroll:"rcs-custom-scroll","outer-container":"rcs-outer-container",outerContainer:"rcs-outer-container",positioning:"rcs-positioning","custom-scrollbar":"rcs-custom-scrollbar",customScrollbar:"rcs-custom-scrollbar","inner-container":"rcs-inner-container",innerContainer:"rcs-inner-container","content-scrolled":"rcs-content-scrolled",contentScrolled:"rcs-content-scrolled","scroll-handle-dragged":"rcs-scroll-handle-dragged",scrollHandleDragged:"rcs-scroll-handle-dragged","custom-scrollbar-rtl":"rcs-custom-scrollbar-rtl",customScrollbarRtl:"rcs-custom-scrollbar-rtl","custom-scroll-handle":"rcs-custom-scroll-handle",customScrollHandle:"rcs-custom-scroll-handle","inner-handle":"rcs-inner-handle",innerHandle:"rcs-inner-handle"}}])});