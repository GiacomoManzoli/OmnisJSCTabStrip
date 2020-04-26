(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".my-tabstrip-container {\n    --my-active-color: #ff8a00;\n    --my-bkg-color: #ffffff;\n    --my-bkg-tab-active-color: #fff;\n    --my-bkg-tab-color: #f0f0f0;\n    --my-border-color: #333333;\n    --my-text-color: inherit;\n    --my-text-active-color: inherit;\n}\n\n.my-tabstrip-ul {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    height: 100%;\n    display: flex;\n    color: var(--my-text-color);\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: stretch;\n    background-color: var(--my-bgk-color);\n    line-height: initial;\n    text-align: initial;\n}\n\n.my-tabstrip-li {\n    cursor: default;\n    font-size: 12px;\n    width: 160px;\n    padding: 8px;\n    border: 1px solid var(--my-border-color);\n    border-left: 0px;\n    display: flex;\n    align-items: center;\n    background-color: var(--my-bkg-tab-color);\n    /* margin-bottom: -1px; */\n    display: flex;\n    min-width: 0; /* Serve per far andare overflow ellipsis */\n}\n\n.my-tabstrip-li:hover {\n    /* background-color: #fafafa; */\n    filter: brightness(1.05);\n}\n\n.my-tabstrip-li-a {\n    flex: 1;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.my-tabstrip-li-icon {\n    /* cursor: pointer; */\n    padding: 2px 4px;\n    background-color: var(--my-bkg-tab-color);\n}\n.my-tabstrip-li-icon:hover {\n    filter: brightness(1.05);\n    color: var(--my-active-color);\n}\n\n.my-tabstrip:first-child {\n    border-left: 1px solid var(--my-border-color) !important;\n}\n\n.active {\n    background-color: var(--my-bkg-tab-active-color) !important;\n    border-bottom-color: var(--my-bkg-tab-active-color) !important;\n    box-shadow: inset 0px 3px var(--my-active-color);\n    border-top: var(--my-active-color) !important;\n    color: var(--my-text-active-color);\n}\n\n.active:hover {\n    filter: none !important;\n}\n\n.active-icon {\n    background-color: var(--my-bkg-tab-active-color) !important;\n}\n\n.action-add {\n    width: initial !important;\n    background-color: var(--my-bgk-color);\n    border: 0;\n    align-items: center;\n}\n.action-add a {\n    font-size: 20px;\n    height: 16px;\n    line-height: 16px;\n    padding: 2px;\n    border-radius: 4px;\n}\n.action-add a:hover {\n    color: var(--my-active-color);\n}\n\n.my-border-filler {\n    border-bottom: 1px solid var(--my-border-color);\n    background-color: var(--my-bkg-color);\n    filter: none !important;\n    flex: 1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/TabStrip.ts":
/*!*************************!*\
  !*** ./src/TabStrip.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
    return Tab;
}());
exports.Tab = Tab;
__webpack_require__(/*! ./style.css */ "./src/style.css");
var CssVar;
(function (CssVar) {
    CssVar["activeColor"] = "--my-active-color";
    CssVar["backgroundColor"] = "--my-bkg-color";
    CssVar["backgroundTabActiveColor"] = "--my-bkg-tab-active-color";
    CssVar["backgroundTabColor"] = "--my-bkg-tab-color";
    CssVar["borderColor"] = "--my-border-color";
    CssVar["textColor"] = "--my-text-color";
    CssVar["textActiveColor"] = "--my-text-active-color";
})(CssVar = exports.CssVar || (exports.CssVar = {}));
var ADD_TAB = {
    id: -1,
    title: "",
    action: "add",
    active: false,
};
var FILLER_TAB = {
    id: -2,
    title: "",
    action: "none",
    active: false,
};
var TabStrip = /** @class */ (function () {
    function TabStrip(container) {
        this.activeColor = "#FF3333";
        this.canAddTab = true;
        this.canCloseTab = true;
        this.tabs = [];
        this.container = container;
        container.classList.add("my-tabstrip");
        this.handlers = new Map();
    }
    TabStrip.prototype.setTabs = function (tabs) {
        this.tabs = __spreadArrays(tabs);
        if (this.canAddTab) {
            this.tabs.push(ADD_TAB);
        }
        else {
            this.tabs.push(FILLER_TAB);
        }
    };
    TabStrip.prototype.setCssVar = function (cssVar, value) {
        console.log(CssVar.activeColor, value);
        this.container.style.setProperty(cssVar, value);
    };
    TabStrip.prototype.getCssVar = function (cssVar) {
        return getComputedStyle(this.container).getPropertyValue(cssVar);
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
    TabStrip.prototype.closeTab = function (id) {
        this.tabs = this.tabs.filter(function (tab) { return tab.id !== id; });
        var activeTab = this.tabs.find(function (tab) { return tab.active; });
        if (!activeTab) {
            this.tabs[0].active = true;
        }
        this.render();
    };
    TabStrip.prototype.addTab = function () {
        var id = this.tabs.reduce(function (a, b) { return Math.max(a, b.id); }, 0) + 1;
        var newTab = {
            id: id,
            title: "Nuovo tab",
            active: false,
        };
        this.tabs = this.tabs.filter(function (tab) { return tab.id > 0; }).concat([newTab, this.addTab ? ADD_TAB : undefined]);
        this.setActive(id);
        this.render();
        return newTab;
    };
    TabStrip.prototype.onTabClick = function (event, tabId, index, tab) {
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
        console.log(this);
        this.container.innerHTML = "";
        var ul = document.createElement("ul");
        ul.classList.add("my-tabstrip-ul");
        this.tabs.map(function (tab, index) { return _this.createItem(tab, index); }).forEach(function (li) { return ul.appendChild(li); });
        this.container.appendChild(ul);
    };
    TabStrip.prototype.createItem = function (tab, index) {
        var li;
        if (tab.action === "add") {
            li = this.createAddTab(tab, index);
        }
        else if (tab.action == "none") {
            li = this.createFillerTab();
        }
        else {
            li = this.createTab(tab, index);
        }
        return li;
    };
    TabStrip.prototype.createAddTab = function (tab, index) {
        var _this = this;
        var li = document.createElement("li");
        li.classList.add("my-tabstrip-li");
        li.classList.add("action-add");
        li.classList.add("my-border-filler");
        var a = document.createElement("a");
        a.innerHTML = "+"; //+ "&#10006;" + "&#x2715;"
        a.addEventListener("click", function () {
            _this.onTabAddClick(event, tab.id, index, tab);
        });
        li.append(a);
        return li;
    };
    TabStrip.prototype.createFillerTab = function () {
        var li = document.createElement("li");
        li.classList.add("my-tabstrip-li");
        li.classList.add("my-border-filler");
        var a = document.createElement("a");
        a.innerHTML = "&nbsp;"; //+ "&#10006;" + "&#x2715;"
        li.append(a);
        return li;
    };
    TabStrip.prototype.createTab = function (tab, index) {
        var _this = this;
        var li = document.createElement("li");
        li.classList.add("my-tabstrip-li");
        if (tab.active) {
            li.classList.add("active");
            if (tab.activeColor && (tab === null || tab === void 0 ? void 0 : tab.activeColor) != "") {
                li.style.setProperty(CssVar.activeColor, tab.activeColor);
            }
        }
        li.addEventListener("click", function () {
            _this.onTabClick(event, tab.id, index, tab);
        });
        var a = document.createElement("a");
        a.classList.add("my-tabstrip-li-a");
        a.innerText = tab.title; //+ "&times;" + "&#10006;" + "&#x2715;"
        li.append(a);
        if (this.canCloseTab && tab.canClose) {
            li.append(this.createCloseIcon(tab, index));
        }
        return li;
    };
    TabStrip.prototype.createCloseIcon = function (tab, index) {
        var _this = this;
        var closeIcon = document.createElement("span");
        closeIcon.classList.add("my-tabstrip-li-icon");
        closeIcon.innerHTML = "&#x2715;";
        if (tab.active) {
            closeIcon.classList.add("active-icon");
        }
        closeIcon.addEventListener("click", function () {
            _this.onTabCloseClick(event, tab.id, index, tab);
        });
        return closeIcon;
    };
    return TabStrip;
}());
exports.TabStrip = TabStrip;


/***/ }),

/***/ "./src/ctl_com_888sp_tabstrip.ts":
/*!***************************************!*\
  !*** ./src/ctl_com_888sp_tabstrip.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function foo() {
    console.log("Foo");
}
exports.foo = foo;
var TabStrip_1 = __webpack_require__(/*! ./TabStrip */ "./src/TabStrip.ts");
// import "./style.css"
/****** CONSTANTS ******/
var PROPERTIES = {
    autoupdate: "$autoupdate",
    canclosetab: "$canclosetab",
    canaddtab: "$canaddtab",
    activecolor: "$activecolor",
    backgroundcolor: "$backgroundcolor",
    backgroundtabactivecolor: "$backgroundtabactivecolor",
    backgroundtabcolor: "$backgroundtabcolor",
    bordercolor: "$bordercolor",
    textcolor: "$textcolor",
    textactivecolor: "$textactivecolor",
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
        var _this = this;
        _super.prototype.init_ctrl_inst.call(this, form, elem, rowCtrl, rowNumber);
        //Control-specific initialization:
        var client_elem = this.getClientElem();
        var datapropsobj = JSON.parse(client_elem.getAttribute("data-props"));
        this.tabStrip = new TabStrip_1.TabStrip(client_elem);
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
                // const tab = this.tabStrip.addTab()
                // const datanameList = new omnis_list(this.mData)
                // const rowIndex = datanameList.addRow(0, datanameList.getColumnCount())
                // datanameList.setData("id", rowIndex, tab.id)
                // datanameList.setData("title", rowIndex, tab.title)
                // datanameList.setCurrentRow(rowIndex)
            }
            if (_this.canSendEvent(EVENTS.evTabAdd)) {
                _this.sendEvent("evTabAdd");
            }
        });
        for (var propName in PROPERTIES) {
            var propValue = datapropsobj[propName]; // L'oggetto è indicizzato per il nome senza $
            this.setProperty(PROPERTIES[propName], propValue);
        }
        this.update();
        return false;
    };
    ctrl_com_888sp_tabstrip.prototype.updateCtrl = function (what, row, col, mustUpdate) {
        var elem = this.getClientElem();
        console.log("update", arguments);
        // center the text vertically:
        elem.style.lineHeight = elem.style.height;
        elem.style.textAlign = "center";
        // read $dataname value and display in control
        var dataname = this.getData();
        var datanameList = new omnis_list(dataname);
        this.mData = dataname;
        elem.innerHTML = "";
        if (dataname) {
            var tabs = [];
            var currentLine = datanameList.getCurrentRow();
            var activeLine = currentLine > 0 ? currentLine : 1;
            console.log(currentLine, activeLine);
            for (var index = 1; index <= datanameList.getRowCount(); index++) {
                tabs.push({
                    id: datanameList.getData("id", index),
                    title: datanameList.getData("title", index),
                    active: index == activeLine,
                    activeColor: datanameList.getData("activeColor", index),
                    canClose: datanameList.getData("canClose", index),
                });
            }
            console.table(tabs);
            this.tabStrip.setTabs(tabs);
            this.tabStrip.render();
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
                case PROPERTIES.activecolor:
                    this.tabStrip.setCssVar(TabStrip_1.CssVar.activeColor, propValue);
                    return true;
                case PROPERTIES.backgroundcolor:
                    this.tabStrip.setCssVar(TabStrip_1.CssVar.backgroundColor, propValue);
                    return true;
                case PROPERTIES.backgroundtabactivecolor:
                    this.tabStrip.setCssVar(TabStrip_1.CssVar.backgroundTabActiveColor, propValue);
                    return true;
                case PROPERTIES.backgroundtabcolor:
                    this.tabStrip.setCssVar(TabStrip_1.CssVar.backgroundTabColor, propValue);
                    return true;
                case PROPERTIES.textactivecolor:
                    this.tabStrip.setCssVar(TabStrip_1.CssVar.textActiveColor, propValue);
                    return true;
                case PROPERTIES.textcolor:
                    this.tabStrip.setCssVar(TabStrip_1.CssVar.textColor, propValue);
                    return true;
                case PROPERTIES.bordercolor:
                    this.tabStrip.setCssVar(TabStrip_1.CssVar.borderColor, propValue);
                    return true;
                case PROPERTIES.canaddtab:
                    this.tabStrip.canAddTab = propValue;
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
            // stile
            case PROPERTIES.activecolor:
                return this.tabStrip.getCssVar(TabStrip_1.CssVar.activeColor);
            case PROPERTIES.backgroundcolor:
                return this.tabStrip.getCssVar(TabStrip_1.CssVar.backgroundColor);
            case PROPERTIES.backgroundtabactivecolor:
                return this.tabStrip.getCssVar(TabStrip_1.CssVar.backgroundTabActiveColor);
            case PROPERTIES.backgroundtabcolor:
                return this.tabStrip.getCssVar(TabStrip_1.CssVar.backgroundTabColor);
            case PROPERTIES.textactivecolor:
                return this.tabStrip.getCssVar(TabStrip_1.CssVar.textActiveColor);
            case PROPERTIES.textcolor:
                return this.tabStrip.getCssVar(TabStrip_1.CssVar.textColor);
            case PROPERTIES.bordercolor:
                return this.tabStrip.getCssVar(TabStrip_1.CssVar.borderColor);
            // props comportamentali
            case PROPERTIES.canaddtab:
                return this.tabStrip.canAddTab;
            case PROPERTIES.canclosetab:
                return this.tabStrip.canCloseTab;
            // props di questo oggetto
            case PROPERTIES.autoupdate:
                return this.autoUpdate;
        }
        return _super.prototype.getProperty.call(this, propNumber);
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


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ctl_com_888sp_tabstrip */ "./src/ctl_com_888sp_tabstrip.ts"));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ })));
//# sourceMappingURL=ctl_com_888sp_tabstrip.bundle.js.map