/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes tab-ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes tab-slide-in {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0%);
        opacity: 1;
    }

    /* from {
		transform: scale(0);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;	
	} */
}

span.tab-ripple {
    position: absolute;
    /* The absolute position we mentioned earlier */
    border-radius: 50%;
    transform: scale(0);
    animation: tab-ripple 400ms linear;
    background-color: rgba(255, 255, 255, 0.5);
}

.my-tabstrip-ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    line-height: initial;
    text-align: initial;
}

.my-tabstrip-ul-horizontal {
    width: 100%;
    flex-direction: row;
}

.my-tabstrip-ul-vertical {
    width: 100%;
    flex-direction: column;
}


.my-tabstrip-li {
    cursor: pointer;
    display: flex;
    align-items: center;
    min-width: 0;
    /* Serve per far andare overflow ellipsis */
    animation: tab-slide-in 0.3s linear;
    overflow: hidden;
}

.my-tabstrip-li:hover {
    filter: brightness(1.05);
}

.my-tabstrip-li-content {
    display: flex;
    flex-direction: column;
    flex: 1;
}


.my-tabstrip-li-subtitle {
    font-size: 10px;
    /* color: rgba(0, 0, 0, 0.6); */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
}

.my-tabstrip-li-a {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.my-tabstrip-li-icon {
    padding: 2px 4px;
    margin-left: 8px;
    margin-right: -8px;
}

.my-tabstrip-li-icon:hover {
    filter: brightness(1.05);
}

.active:hover {
    filter: none !important;
}

.action-add {
    width: initial !important;
    border: 0;
    align-items: center;
}

.action-add a {
    font-size: 20px;
    height: 16px;
    line-height: 16px;
    padding: 2px;
    border-radius: 4px;
}

/* Vertical add button styling */
.my-tabstrip-ul-vertical .action-add {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-top: 8px;
    padding-left: 16px;
}

.my-tabstrip-add-label {
    margin-left: 8px;
    white-space: nowrap;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;QACI,mBAAmB;QACnB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,4BAA4B;QAC5B,UAAU;IACd;;IAEA;QACI,yBAAyB;QACzB,UAAU;IACd;;IAEA;;;;;;;IAOA;AACJ;;AAEA;IACI,kBAAkB;IAClB,+CAA+C;IAC/C,kBAAkB;IAClB,mBAAmB;IACnB,kCAAkC;IAClC,0CAA0C;AAC9C;;AAEA;IACI,UAAU;IACV,SAAS;IACT,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,sBAAsB;AAC1B;;;AAGA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,2CAA2C;IAC3C,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;AACX;;;AAGA;IACI,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,OAAO;IACP,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA,gCAAgC;AAChC;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB","sourcesContent":["@keyframes tab-ripple {\n    to {\n        transform: scale(4);\n        opacity: 0;\n    }\n}\n\n@keyframes tab-slide-in {\n    from {\n        transform: translateX(-100%);\n        opacity: 0;\n    }\n\n    to {\n        transform: translateX(0%);\n        opacity: 1;\n    }\n\n    /* from {\n\t\ttransform: scale(0);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scale(1);\n\t\topacity: 1;\t\n\t} */\n}\n\nspan.tab-ripple {\n    position: absolute;\n    /* The absolute position we mentioned earlier */\n    border-radius: 50%;\n    transform: scale(0);\n    animation: tab-ripple 400ms linear;\n    background-color: rgba(255, 255, 255, 0.5);\n}\n\n.my-tabstrip-ul {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    height: 100%;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: stretch;\n    line-height: initial;\n    text-align: initial;\n}\n\n.my-tabstrip-ul-horizontal {\n    width: 100%;\n    flex-direction: row;\n}\n\n.my-tabstrip-ul-vertical {\n    width: 100%;\n    flex-direction: column;\n}\n\n\n.my-tabstrip-li {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    min-width: 0;\n    /* Serve per far andare overflow ellipsis */\n    animation: tab-slide-in 0.3s linear;\n    overflow: hidden;\n}\n\n.my-tabstrip-li:hover {\n    filter: brightness(1.05);\n}\n\n.my-tabstrip-li-content {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n\n.my-tabstrip-li-subtitle {\n    font-size: 10px;\n    /* color: rgba(0, 0, 0, 0.6); */\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 2px;\n}\n\n.my-tabstrip-li-a {\n    flex: 1;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.my-tabstrip-li-icon {\n    padding: 2px 4px;\n    margin-left: 8px;\n    margin-right: -8px;\n}\n\n.my-tabstrip-li-icon:hover {\n    filter: brightness(1.05);\n}\n\n.active:hover {\n    filter: none !important;\n}\n\n.action-add {\n    width: initial !important;\n    border: 0;\n    align-items: center;\n}\n\n.action-add a {\n    font-size: 20px;\n    height: 16px;\n    line-height: 16px;\n    padding: 2px;\n    border-radius: 4px;\n}\n\n/* Vertical add button styling */\n.my-tabstrip-ul-vertical .action-add {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    padding-top: 8px;\n    padding-left: 16px;\n}\n\n.my-tabstrip-add-label {\n    margin-left: 8px;\n    white-space: nowrap;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/TabStrip.ts"
/*!*************************!*\
  !*** ./src/TabStrip.ts ***!
  \*************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TabStrip = exports.Tab = void 0;
var Tab = /** @class */ (function () {
    function Tab(data) {
        this.id = 0;
        this.title = "";
        this.active = false;
        this.canClose = true;
        if (data.id) {
            this.id = data.id;
        }
        if (data.title) {
            this.title = data.title;
        }
        if (data.subtitle) {
            this.subtitle = data.subtitle;
        }
    }
    Tab.prototype.hasBackcolorOverride = function (activeState) {
        if (activeState) {
            return this.backcolorOverrideActive && this.backcolorOverrideActive != "";
        }
        else {
            return this.backcolorOverride && this.backcolorOverride != "";
        }
    };
    Tab.prototype.hasBordercolorOverride = function (activeState) {
        if (activeState) {
            return this.bordercolorOverrideActive && this.bordercolorOverrideActive != "";
        }
        else {
            return this.bordercolorOverride && this.bordercolorOverride != "";
        }
    };
    Tab.prototype.hasTextcolorOverride = function (activeState) {
        if (activeState) {
            return this.textcolorOverrideActive && this.textcolorOverrideActive != "";
        }
        else {
            return this.textcolorOverride && this.textcolorOverride != "";
        }
    };
    return Tab;
}());
exports.Tab = Tab;
__webpack_require__(/*! ./style.css */ "./src/style.css");
var ADD_TAB = (function () {
    var t = new Tab({ id: -1, title: "" });
    t.action = "add";
    t.active = false;
    return t;
})();
// const FILLER_TAB: Tab = {
//     id: -2,
//     title: "",
//     action: "none",
//     active: false,
// }
var TabStrip = /** @class */ (function () {
    function TabStrip(container) {
        this.renderedTabs = new Map();
        this.activeColor = "#FF3333";
        this.canAddTab = true;
        this.canCloseTab = true;
        this.isVertical = true;
        this.tabBorderRadius = 8;
        this.tabSpacing = 8;
        this.tabSize = 160;
        this.tabMinSize = 0;
        this.tabMaxSize = 0;
        this.tabPaddingHorz = 8;
        this.tabPaddingVert = 8;
        this.tabBorderColor = "rgb(0,0,0)";
        this.tabBorderSize = 0;
        this.tabs = [];
        this.container = container;
        container.classList.add("my-tabstrip");
        this.handlers = new Map();
    }
    TabStrip.prototype.setTabs = function (tabs) {
        this.tabs = __spreadArray([], tabs, true);
        if (this.canAddTab) {
            this.tabs.push(ADD_TAB);
        }
        // else {
        //     this.tabs.push(FILLER_TAB)
        // }
    };
    TabStrip.prototype.addEventListener = function (evName, callback) {
        this.handlers.set(evName, callback);
    };
    TabStrip.prototype.setActive = function (id) {
        var activeTab = this.tabs.find(function (tab) { return tab.active; });
        activeTab.active = false;
        var newActiveTab = this.tabs.find(function (tab) { return tab.id == id; });
        newActiveTab.active = true;
        this.render();
    };
    TabStrip.prototype.setCanAddTab = function (val) {
        var tabs = this.tabs.filter(function (t) { return t.id != ADD_TAB.id; });
        this.canAddTab = val;
        this.setTabs(tabs);
        this.render();
    };
    TabStrip.prototype.closeTab = function (id) {
        this.tabs = this.tabs.filter(function (tab) { return tab.id !== id; });
        var activeTab = this.tabs.find(function (tab) { return tab.active; });
        if (!activeTab) {
            this.tabs[0].active = true;
        }
        this.render();
    };
    TabStrip.prototype.addTab = function () {
        debugger;
        var id = this.tabs.reduce(function (a, b) { return Math.max(a, b.id); }, 0) + 1;
        var newTab = new Tab({ id: id, title: "Nuovo tab" });
        newTab.active = false;
        this.tabs = this.tabs.filter(function (tab) { return tab.id > 0; }).concat([newTab, this.addTab ? ADD_TAB : undefined]);
        this.setActive(id);
        this.render();
        return newTab;
    };
    TabStrip.prototype.onTabClick = function (event, tabId, index, tab) {
        var button = event.currentTarget;
        var circle = document.createElement("span");
        var diameter = Math.max(button.clientWidth, button.clientHeight);
        var radius = diameter / 2;
        circle.style.width = circle.style.height = "".concat(diameter, "px");
        circle.style.left = "".concat(event.clientX - (button.offsetLeft + radius), "px");
        circle.style.top = "".concat(event.clientY - (button.offsetTop + radius), "px");
        circle.classList.add("tab-ripple");
        var ripple = button.getElementsByClassName("tab-ripple")[0];
        if (ripple) {
            ripple.remove();
        }
        button.appendChild(circle);
        event.preventDefault();
        event.stopPropagation();
        var handler = this.handlers.get("tabclick");
        if (handler) {
            handler(event, tabId, index, tab);
        }
    };
    TabStrip.prototype.onTabCloseClick = function (event, tabId, index, tab) {
        event.preventDefault();
        event.stopPropagation();
        var handler = this.handlers.get("tabclose");
        if (handler) {
            handler(event, tabId, index, tab);
        }
    };
    TabStrip.prototype.onTabAddClick = function (event, tabId, index, tab) {
        event.preventDefault();
        event.stopPropagation();
        var handler = this.handlers.get("tabadd");
        if (handler) {
            handler(event, tabId, index, tab);
        }
    };
    TabStrip.prototype.render = function () {
        var _this = this;
        var ul = this.container.querySelector("ul");
        if (!ul) {
            ul = document.createElement("ul");
            ul.classList.add("my-tabstrip-ul");
            this.container.appendChild(ul);
        }
        ul.style.backgroundColor = this.backgroundColor;
        ul.style.color = this.textColor;
        if (this.isVertical) {
            ul.classList.add("my-tabstrip-ul-vertical");
            ul.classList.remove("my-tabstrip-ul-horizontal");
        }
        else {
            ul.classList.add("my-tabstrip-ul-horizontal");
            ul.classList.remove("my-tabstrip-ul-vertical");
        }
        console.log("render", this.tabs);
        // Inserts/updates
        for (var index = this.tabs.length - 1; index >= 0; index--) {
            var currTab = this.tabs[index];
            if (this.renderedTabs.has(currTab.id)) {
                var _a = this.renderedTabs.get(currTab.id), tab = _a.tab, li = _a.li;
                if (tab.id != ADD_TAB.id) {
                    this.updateItem(li, currTab, index);
                }
                else {
                    this.updateAddTab(li, currTab, index);
                }
                this.renderedTabs.set(currTab.id, { tab: currTab, li: li });
            }
            else {
                var li = this.createItem(currTab, index);
                this.renderedTabs.set(currTab.id, { tab: currTab, li: li });
                if (index == 0) {
                    // First item
                    ul.insertBefore(li, ul.firstChild);
                }
                else if (index == this.tabs.length - 1) {
                    // Last item
                    ul.appendChild(li);
                }
                else {
                    var nextTabId = this.tabs[index + 1].id;
                    var nextTabLi = this.renderedTabs.get(nextTabId).li;
                    ul.insertBefore(li, nextTabLi);
                }
            }
        }
        // Deletes
        var realTabsId = new Set(this.tabs.map(function (t) { return t.id; }));
        this.renderedTabs.forEach(function (v) {
            if (!realTabsId.has(v.tab.id)) {
                ul.removeChild(v.li);
                _this.renderedTabs.delete(v.tab.id);
            }
        });
        // this.tabs.map((tab, index) => this.createItem(tab, index)).forEach((li) => ul.appendChild(li))
    };
    TabStrip.prototype.createItem = function (tab, index) {
        var li;
        if (tab.action === "add") {
            li = this.createAddTab(tab, index);
            // } else if (tab.action == "none") {
            //     li = this.createFillerTab()
        }
        else {
            li = this.createTab(tab, index);
        }
        return li;
    };
    TabStrip.prototype.createAddTab = function (tab, index) {
        console.log("createAddtab");
        var li = document.createElement("li");
        li.classList.add("my-tabstrip-li");
        li.classList.add("action-add");
        this.updateAddTab(li, tab, index);
        return li;
    };
    TabStrip.prototype.updateAddTab = function (li, tab, index) {
        var _this = this;
        li.style.backgroundColor = this.addTabBackgroundColor;
        li.style.color = this.addTabSymbolColor;
        // Apply spacing based on orientation
        if (this.isVertical) {
            li.style.marginTop = "".concat(this.tabSpacing, "px");
            li.style.marginLeft = "0px";
        }
        else {
            li.style.marginTop = "0px";
            li.style.marginLeft = "".concat(this.tabSpacing, "px");
        }
        li.innerHTML = "";
        var a = document.createElement("a");
        a.innerHTML = "+"; //+ "&#10006;" + "&#x2715;"
        a.addEventListener("click", function (event) {
            _this.onTabAddClick(event, tab.id, index, tab);
        });
        li.append(a);
        if (this.isVertical) {
            // Label visible only in the vertical layout
            var labelSpan = document.createElement("span");
            labelSpan.classList.add("my-tabstrip-add-label");
            labelSpan.innerText = "Add Tab";
            li.append(labelSpan);
        }
        else {
            var labelSpan = li.getElementsByClassName("my-tabstrip-add-label")[0];
            if (labelSpan) {
                li.removeChild(labelSpan);
            }
        }
    };
    // private createFillerTab() {
    //     const li = document.createElement("li")
    //     li.classList.add("my-tabstrip-li")
    //     li.classList.add("my-border-filler")
    //     const a = document.createElement("a")
    //     a.innerHTML = "&nbsp;" //+ "&#10006;" + "&#x2715;"
    //     li.append(a)
    //     return li
    // }
    TabStrip.prototype.createTab = function (tab, index) {
        var li = document.createElement("li");
        li.classList.add("my-tabstrip-li");
        // CSS ripple
        li.style.position = "relative";
        li.style.overflow = "hidden";
        // Tab size
        li.style.padding = "".concat(this.tabPaddingVert, "px ").concat(this.tabPaddingHorz, "px");
        if (this.tabSize > 0) {
            li.style[this.isVertical ? 'height' : 'width'] = "".concat(this.tabSize, "px");
        }
        else {
            li.style[this.isVertical ? 'minHeight' : 'minWidth'] = "".concat(this.tabMinSize, "px");
            li.style[this.isVertical ? 'maxHeight' : 'maxWidth'] = "".concat(this.tabMaxSize, "px");
        }
        li.style.backgroundColor = this.tabBackgroundColor;
        // Tab border
        li.style.borderRadius = "".concat(this.tabBorderRadius, "px");
        li.style.borderWidth = "".concat(this.tabBorderSize, "px");
        if (this.tabBorderSize > 0) {
            li.style.borderStyle = "solid";
            li.style.borderColor = this.tabBorderColor;
        }
        var contentDiv = document.createElement("div");
        contentDiv.classList.add("my-tabstrip-li-content");
        var a = document.createElement("a");
        a.classList.add("my-tabstrip-li-a");
        contentDiv.append(a);
        li.append(contentDiv);
        this.updateItem(li, tab, index);
        return li;
    };
    TabStrip.prototype.updateItem = function (li, tab, index) {
        var _this = this;
        if (index > 0) {
            if (this.isVertical) {
                li.style.marginTop = "".concat(this.tabSpacing, "px");
            }
            else {
                li.style.marginLeft = "".concat(this.tabSpacing, "px");
            }
        }
        var contentDiv = li.querySelector(".my-tabstrip-li-content");
        var a = contentDiv.querySelector("a");
        // Add subtitle above title
        if (tab.subtitle) {
            var subtitleSpan = li.getElementsByClassName("my-tabstrip-li-subtitle")[0];
            if (!subtitleSpan) {
                subtitleSpan = document.createElement("span");
                subtitleSpan.classList.add("my-tabstrip-li-subtitle");
                contentDiv.insertBefore(subtitleSpan, a);
            }
            subtitleSpan.innerText = tab.subtitle;
        }
        else {
            // Remove subtitle if it exists
            var subtitleSpan = li.getElementsByClassName("my-tabstrip-li-subtitle")[0];
            if (subtitleSpan) {
                contentDiv.removeChild(subtitleSpan);
            }
        }
        a.innerText = tab.title;
        if (tab.active) {
            this.updateItemActive(li, tab, index);
        }
        else {
            this.updateItemInactive(li, tab, index);
        }
        li.onclick = function (event) {
            _this.onTabClick(event, tab.id, index, tab);
        };
        var closeIcon = li.getElementsByClassName("my-tabstrip-li-close-icon")[0];
        if (closeIcon) {
            li.removeChild(closeIcon);
        }
        if (this.canCloseTab && tab.canClose) {
            li.append(this.createCloseIcon(tab, index));
        }
    };
    TabStrip.prototype.updateItemActive = function (li, tab, index) {
        li.classList.add("active");
        li.style.backgroundColor = this.activeTabBackgroundColor;
        li.style.color = this.activeTabTextColor;
        li.style.borderColor = this.tabBorderColor;
        if (tab.hasBackcolorOverride(true)) {
            li.style.backgroundColor = tab.backcolorOverrideActive;
        }
        if (tab.hasBordercolorOverride(true)) {
            li.style.borderColor = tab.bordercolorOverrideActive;
        }
        if (tab.hasTextcolorOverride(true)) {
            li.style.color = tab.textcolorOverrideActive;
        }
        if (tab.activeColor && tab.activeColor != "") {
            li.style.boxShadow = "inset 0px 3px ".concat(tab.activeColor);
        }
        // Update subtitle color for active state
        var subtitleSpan = li.getElementsByClassName("my-tabstrip-li-subtitle")[0];
        if (subtitleSpan) {
            subtitleSpan.classList.add("active");
        }
    };
    TabStrip.prototype.updateItemInactive = function (li, tab, index) {
        li.classList.remove("active");
        li.style.color = this.textColor;
        li.style.borderColor = this.tabBorderColor;
        li.style.backgroundColor = this.tabBackgroundColor;
        if (tab.hasBackcolorOverride(false)) {
            li.style.backgroundColor = tab.backcolorOverride;
        }
        if (tab.hasBordercolorOverride(false)) {
            li.style.borderColor = tab.bordercolorOverride;
        }
        if (tab.hasTextcolorOverride(false)) {
            li.style.color = tab.textcolorOverride;
        }
        li.style.boxShadow = "";
        // Remove active class from subtitle
        var subtitleSpan = li.getElementsByClassName("my-tabstrip-li-subtitle")[0];
        if (subtitleSpan) {
            subtitleSpan.classList.remove("active");
        }
    };
    TabStrip.prototype.createCloseIcon = function (tab, index) {
        var _this = this;
        var closeIcon = document.createElement("span");
        closeIcon.classList.add("my-tabstrip-li-icon");
        closeIcon.classList.add("my-tabstrip-li-close-icon");
        closeIcon.classList.add("active-icon");
        closeIcon.style.backgroundColor = this.tabBackgroundColor;
        closeIcon.style.color = this.tabBackgroundColor; // somehow hidden
        closeIcon.innerHTML = "&#x2715;";
        if (tab.active) {
            closeIcon.style.color = this.activeTabTextColor;
            closeIcon.style.backgroundColor = this.activeTabBackgroundColor;
            if (tab.hasBackcolorOverride(true)) {
                closeIcon.style.backgroundColor = tab.backcolorOverrideActive;
            }
            if (tab.hasTextcolorOverride(true)) {
                closeIcon.style.color = tab.textcolorOverrideActive;
            }
            closeIcon.addEventListener("click", function (event) {
                _this.onTabCloseClick(event, tab.id, index, tab);
            });
        }
        return closeIcon;
    };
    return TabStrip;
}());
exports.TabStrip = TabStrip;


/***/ },

/***/ "./src/ctl_com_888sp_tabstrip.ts"
/*!***************************************!*\
  !*** ./src/ctl_com_888sp_tabstrip.ts ***!
  \***************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ctrl_com_888sp_tabstrip = void 0;
var TabStrip_1 = __webpack_require__(/*! ./TabStrip */ "./src/TabStrip.ts");
// import "./style.css"
/****** CONSTANTS ******/
var PROPERTIES = {
    // <OmnisUpdateMarker_PropertyConstants_Begin>
    autoupdate: "$autoupdate",
    canclosetab: "$canclosetab",
    canaddtab: "$canaddtab",
    backgroundcolor: "$backgroundcolor",
    activetabbackgroundcolor: "$activetabbackgroundcolor",
    tabbackgroundcolor: "$tabbackgroundcolor",
    tabbordercolor: "$tabbordercolor",
    tabtextcolor: "$tabtextcolor",
    activetabtextcolor: "$activetabtextcolor",
    tabborderradius: "$tabborderradius",
    tabspacing: "$tabspacing",
    tabbordersize: "$tabbordersize",
    tabminsize: "$tabminsize",
    tabmaxsize: "$tabmaxsize",
    tabsize: "$tabsize",
    tabpaddinghorz: "$tabpaddinghorz",
    tabpaddingvert: "$tabpaddingvert",
    addtabsymbolcolor: "$addtabsymbolcolor",
    addtabbackgroundcolor: "$addtabbackgroundcolor",
    isvertical: "$isvertical",
    // <OmnisUpdateMarker_PropertyConstants_End>
};
var EVENTS = {
    evTabClose: 1,
    evTabAdd: 2,
    evTabClick: 3,
};
var ctrl_com_888sp_tabstrip = /** @class */ (function (_super) {
    __extends(ctrl_com_888sp_tabstrip, _super);
    function ctrl_com_888sp_tabstrip() {
        var _this = _super.call(this) || this;
        _this.autoUpdate = false;
        _this.init_class_inst(); // initialize our class
        return _this;
    }
    ctrl_com_888sp_tabstrip.prototype.init_ctrl_inst = function (form, elem, rowCtrl, rowNumber) {
        _super.prototype.init_ctrl_inst.call(this, form, elem, rowCtrl, rowNumber);
        var client_elem = this.getClientElem();
        var datapropsobj = JSON.parse(client_elem.getAttribute("data-props"));
        this.initTabStrip(client_elem);
        console.log("init_ctrl_inst");
        for (var propName in PROPERTIES) {
            console.log("set prop: ", propName);
            var propValue = datapropsobj[propName]; // L'oggetto è indicizzato per il nome senza $
            this.setProperty(PROPERTIES[propName], propValue);
        }
        console.log("this.update()");
        this.update();
        return false;
    };
    ctrl_com_888sp_tabstrip.prototype.updateCtrl = function (what, row, col, mustUpdate) {
        var elem = this.getClientElem();
        // center the text vertically:
        elem.style.lineHeight = elem.style.height;
        elem.style.textAlign = "center";
        // read $dataname value and display in control
        var dataname = this.getData();
        var datanameList = new omnis_list(dataname);
        console.log("updateCtrl");
        this.mData = dataname;
        if (dataname) {
            var tabs = [];
            var currentLine = datanameList.getCurrentRow();
            var activeLine = currentLine > 0 ? currentLine : 1;
            for (var index = 1; index <= datanameList.getRowCount(); index++) {
                var t = new TabStrip_1.Tab({
                    id: datanameList.getData("id", index),
                    title: datanameList.getData("title", index),
                    subtitle: datanameList.getData("subtitle", index)
                });
                t.active = index == activeLine;
                t.activeColor = datanameList.getData("activeColor", index);
                t.canClose = datanameList.getData("canClose", index);
                t.backcolorOverride = datanameList.getData("backcolorOverride", index);
                t.backcolorOverrideActive = datanameList.getData("backcolorOverrideActive", index);
                t.bordercolorOverride = datanameList.getData("bordercolorOverride", index);
                t.bordercolorOverrideActive = datanameList.getData("bordercolorOverrideActive", index);
                t.textcolorOverride = datanameList.getData("textcolorOverride", index);
                t.textcolorOverrideActive = datanameList.getData("textcolorOverrideActive", index);
                tabs.push(t);
            }
            this.tabStrip.setTabs(tabs);
            this.tabStrip.render();
        }
        else {
            elem.innerHTML = "TABSTRIP";
        }
    };
    /**
     * This is called when an event registered using this.mEventFunction() is triggered.
     *
     * @param event The event object
     */
    ctrl_com_888sp_tabstrip.prototype.handleEvent = function (event) {
        if (!this.isEnabled())
            return true; // If the control is disabled, don't process the event.
        switch (event.type) {
            case "click":
                return true;
            // case "touchstart":
            //     this.lastTouch = new Date().getTime() // Note the time of the touch start.
            //     this.touchStartPos = {
            //         x: event.changedTouches0.clientX,
            //         y: event.changedTouches0.clientY,
            //     } // Note the starting position of the touch.
            //     break
            // case "touchend":
            //     var time = new Date().getTime()
            //     if (time - this.lastTouch < 500) {
            //         //Treat as a click if less than 500ms have elapsed since touchstart
            //         if (touchWithinRange(this.touchStartPos, event.changedTouches0, 20)) {
            //             //Only treat as a click if less than 20 pixels have been scrolled.
            //             return this.handleClick(event.changedTouches0.offsetX, event.changedTouches0.offsetY)
            //         }
            //     }
            //     break
        }
        _super.prototype.handleEvent.call(this, event);
    };
    ctrl_com_888sp_tabstrip.prototype.getCanAssign = function (propNumber) {
        return Object.values(PROPERTIES).includes(propNumber.toString()) || _super.prototype.getCanAssign.call(this, propNumber);
    };
    ctrl_com_888sp_tabstrip.prototype.setProperty = function (propNumber, propValue) {
        if (!this.getCanAssign(propNumber)) {
            return false;
        }
        if (propNumber) {
            switch (propNumber) {
                // Main control
                case PROPERTIES.backgroundcolor:
                    this.tabStrip.backgroundColor = this.getTheme().getColorString(propValue);
                    return true;
                // ADD TAB
                case PROPERTIES.addtabbackgroundcolor:
                    this.tabStrip.addTabBackgroundColor = this.getTheme().getColorString(propValue);
                    return true;
                case PROPERTIES.addtabsymbolcolor:
                    this.tabStrip.addTabSymbolColor = this.getTheme().getColorString(propValue);
                    return true;
                // Active TAB
                case PROPERTIES.activetabbackgroundcolor:
                    this.tabStrip.activeTabBackgroundColor = this.getTheme().getColorString(propValue);
                    return true;
                case PROPERTIES.activetabtextcolor:
                    this.tabStrip.activeTabTextColor = this.getTheme().getColorString(propValue);
                    return true;
                // TAB
                case PROPERTIES.isvertical:
                    console.log("Imposto isvetical ".concat(propValue));
                    this.tabStrip.isVertical = propValue;
                    return true;
                case PROPERTIES.tabbackgroundcolor:
                    this.tabStrip.tabBackgroundColor = this.getTheme().getColorString(propValue);
                    return true;
                case PROPERTIES.tabtextcolor:
                    this.tabStrip.textColor = this.getTheme().getColorString(propValue);
                    return true;
                case PROPERTIES.tabbordercolor:
                    this.tabStrip.tabBorderColor = this.getTheme().getColorString(propValue);
                    return true;
                case PROPERTIES.tabbordersize:
                    this.tabStrip.tabBorderSize = propValue;
                    return true;
                case PROPERTIES.tabborderradius:
                    this.tabStrip.tabBorderRadius = propValue;
                    return true;
                case PROPERTIES.tabspacing:
                    this.tabStrip.tabSpacing = propValue;
                    return true;
                case PROPERTIES.tabsize:
                    this.tabStrip.tabSize = propValue;
                    return true;
                case PROPERTIES.tabmaxsize:
                    this.tabStrip.tabMaxSize = propValue;
                    return true;
                case PROPERTIES.tabminsize:
                    this.tabStrip.tabMinSize = propValue;
                    return true;
                case PROPERTIES.tabpaddinghorz:
                    this.tabStrip.tabPaddingHorz = propValue;
                    return true;
                case PROPERTIES.tabpaddingvert:
                    this.tabStrip.tabPaddingVert = propValue;
                    return true;
                // BEHAVIOR
                case PROPERTIES.canaddtab:
                    // Forzo il rerendering del componente al cambio della proprietà
                    this.tabStrip.setCanAddTab(propValue);
                    return true;
                case PROPERTIES.canclosetab:
                    this.tabStrip.canCloseTab = propValue;
                    return true;
                case PROPERTIES.autoupdate:
                    this.autoUpdate = propValue;
                    return true;
            }
        }
        return _super.prototype.setProperty.call(this, propNumber, propValue);
    };
    ctrl_com_888sp_tabstrip.prototype.getProperty = function (propNumber) {
        switch (propNumber) {
            // Main control
            case PROPERTIES.backgroundcolor:
                return this.tabStrip.backgroundColor;
            // ADD TAB
            case PROPERTIES.addtabbackgroundcolor:
                return this.tabStrip.addTabBackgroundColor;
            case PROPERTIES.addtabsymbolcolor:
                return this.tabStrip.addTabSymbolColor;
            // Active TAB
            case PROPERTIES.activetabbackgroundcolor:
                return this.tabStrip.activeTabBackgroundColor;
            case PROPERTIES.activetabtextcolor:
                return this.tabStrip.activeTabTextColor;
            // TAB
            case PROPERTIES.isvertical:
                return this.tabStrip.isVertical;
            case PROPERTIES.tabbackgroundcolor:
                return this.tabStrip.tabBackgroundColor;
            case PROPERTIES.tabtextcolor:
                return this.tabStrip.textColor;
            case PROPERTIES.tabbordercolor:
                return this.tabStrip.tabBorderColor;
            case PROPERTIES.tabbordersize:
                return this.tabStrip.tabBorderSize;
            case PROPERTIES.tabborderradius:
                return this.tabStrip.tabBorderRadius;
            case PROPERTIES.tabspacing:
                return this.tabStrip.tabSpacing;
            case PROPERTIES.tabsize:
                return this.tabStrip.tabSize;
            case PROPERTIES.tabmaxsize:
                return this.tabStrip.tabMaxSize;
            case PROPERTIES.tabminsize:
                return this.tabStrip.tabMinSize;
            case PROPERTIES.tabpaddinghorz:
                return this.tabStrip.tabPaddingHorz;
            case PROPERTIES.tabpaddingvert:
                return this.tabStrip.tabPaddingVert;
            // BEHAVIOR
            case PROPERTIES.canaddtab:
                return this.tabStrip.canAddTab;
            case PROPERTIES.canclosetab:
                return this.tabStrip.canCloseTab;
            case PROPERTIES.autoupdate:
                return this.autoUpdate;
        }
        return _super.prototype.getProperty.call(this, propNumber);
    };
    ctrl_com_888sp_tabstrip.prototype.initTabStrip = function (client_elem) {
        var _this = this;
        this.tabStrip = new TabStrip_1.TabStrip(client_elem);
        // this.tabStrip.setJOmnisEffects(jOmnisEffects)
        // this.tabStrip.setOmnisTheme(this.getTheme())
        this.tabStrip.addEventListener("tabclick", function (event, id, index, tab) {
            if (_this.autoUpdate) {
                _this.tabStrip.setActive(id);
            }
            if (_this.canSendEvent(EVENTS.evTabClick)) {
                _this.eventParamsAdd("pTabNum", index + 1);
                _this.sendEvent("evTabClick");
            }
        });
        this.tabStrip.addEventListener("tabclose", function (event, id, index, tab) {
            if (_this.autoUpdate) {
                _this.tabStrip.closeTab(id);
            }
            if (_this.canSendEvent(EVENTS.evTabClose)) {
                _this.eventParamsAdd("pTabNum", index + 1);
                _this.sendEvent("evTabClose");
            }
        });
        this.tabStrip.addEventListener("tabadd", function (event) {
            if (_this.autoUpdate) {
                var tab = _this.tabStrip.addTab();
                var datanameList = new omnis_list(_this.mData);
                var rowIndex = datanameList.addRow(0, datanameList.getColumnCount());
                datanameList.setData("id", rowIndex, tab.id);
                datanameList.setData("title", rowIndex, tab.title);
                datanameList.setCurrentRow(rowIndex);
            }
            if (_this.canSendEvent(EVENTS.evTabAdd)) {
                _this.sendEvent("evTabAdd");
            }
        });
    };
    return ctrl_com_888sp_tabstrip;
}(ctrl_base));
exports.ctrl_com_888sp_tabstrip = ctrl_com_888sp_tabstrip;
//  // send event to Omnis
//  if (this.canSendEvent(eBaseEvent.evClick)) {
//     this.eventParamsAdd("pXPos", pX)
//     this.eventParamsAdd("pYPos", pY)
//     this.sendEvent(eBaseEvent.evClick)
// }


/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./ctl_com_888sp_tabstrip */ "./src/ctl_com_888sp_tabstrip.ts"), exports);


/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	var __webpack_export_target__ = window;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=ctl_com_888sp_tabstrip.bundle.js.map