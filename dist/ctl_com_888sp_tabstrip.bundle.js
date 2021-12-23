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
exports.push([module.i, "@keyframes tab-ripple {\r\n    to {\r\n        transform: scale(4);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\nspan.tab-ripple {\r\n    position: absolute; /* The absolute position we mentioned earlier */\r\n    border-radius: 50%;\r\n    transform: scale(0);\r\n    animation: tab-ripple 400ms linear;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.my-tabstrip-ul {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style-type: none;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    align-items: stretch;\r\n    line-height: initial;\r\n    text-align: initial;\r\n}\r\n\r\n.my-tabstrip-li {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    min-width: 0; /* Serve per far andare overflow ellipsis */\r\n}\r\n\r\n.my-tabstrip-li:hover {\r\n    filter: brightness(1.05);\r\n}\r\n\r\n.my-tabstrip-li-a {\r\n    flex: 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.my-tabstrip-li-icon {\r\n    padding: 2px 4px;\r\n    margin-left: 8px;\r\n    margin-right: -8px;\r\n}\r\n.my-tabstrip-li-icon:hover {\r\n    filter: brightness(1.05);\r\n}\r\n\r\n.active:hover {\r\n    filter: none !important;\r\n}\r\n\r\n.action-add {\r\n    width: initial !important;\r\n    border: 0;\r\n    align-items: center;\r\n}\r\n\r\n.action-add a {\r\n    font-size: 20px;\r\n    height: 16px;\r\n    line-height: 16px;\r\n    padding: 2px;\r\n    border-radius: 4px;\r\n}\r\n", ""]);
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

  if (sourceMap && typeof btoa !== 'undefined') {
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
    }
    return Tab;
}());
exports.Tab = Tab;
__webpack_require__(/*! ./style.css */ "./src/style.css");
var ADD_TAB = {
    id: -1,
    title: "",
    action: "add",
    active: false,
};
// const FILLER_TAB: Tab = {
//     id: -2,
//     title: "",
//     action: "none",
//     active: false,
// }
var TabStrip = /** @class */ (function () {
    function TabStrip(container) {
        // jOmnisEffects?: any
        // omnisTheme?: any
        this.activeColor = "#FF3333";
        this.canAddTab = true;
        this.canCloseTab = true;
        this.tabBorderRadius = 8;
        this.tabSpacing = 8;
        this.tabWidth = 160;
        this.tabMinWidth = 0;
        this.tabMaxWidth = 0;
        this.tabPaddingHorz = 8;
        this.tabPaddingVert = 8;
        this.tabBorderColor = "rgb(0,0,0)";
        this.tabBorderSize = 0;
        this.renderedTabs = new Map();
        this.tabs = [];
        this.container = container;
        container.classList.add("my-tabstrip");
        this.handlers = new Map();
    }
    // setJOmnisEffects(jOmnisEffects) {
    //     this.jOmnisEffects = jOmnisEffects
    // }
    // setOmnisTheme(omnisTheme: any) {
    //     this.omnisTheme = omnisTheme
    // }
    TabStrip.prototype.setTabs = function (tabs) {
        this.tabs = __spreadArrays(tabs);
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
        var button = event.currentTarget;
        var circle = document.createElement("span");
        var diameter = Math.max(button.clientWidth, button.clientHeight);
        var radius = diameter / 2;
        circle.style.width = circle.style.height = diameter + "px";
        circle.style.left = event.clientX - (button.offsetLeft + radius) + "px";
        circle.style.top = event.clientY - (button.offsetTop + radius) + "px";
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
        var ul;
        if (this.container.innerHTML == "") {
            ul = document.createElement("ul");
            ul.classList.add("my-tabstrip-ul");
            ul.style.backgroundColor = this.backgroundColor;
            ul.style.color = this.textColor;
            this.container.appendChild(ul);
        }
        else {
            ul = this.container.querySelector("ul");
        }
        // Inserts/updates
        for (var index = this.tabs.length - 1; index >= 0; index--) {
            var currTab = this.tabs[index];
            if (this.renderedTabs.has(currTab.id)) {
                var _a = this.renderedTabs.get(currTab.id), tab = _a.tab, li = _a.li;
                if (tab.id != ADD_TAB.id) {
                    this.updateItem(li, currTab, index);
                    this.renderedTabs.set(currTab.id, { tab: currTab, li: li });
                }
            }
            else {
                var li = this.createItem(currTab, index);
                this.renderedTabs.set(currTab.id, { tab: currTab, li: li });
                if (index == 0) { // First item
                    ul.insertBefore(li, ul.firstChild);
                }
                else if (index == this.tabs.length - 1) { // Last item
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
        var _this = this;
        var li = document.createElement("li");
        li.classList.add("my-tabstrip-li");
        li.classList.add("action-add");
        li.style.backgroundColor = this.backgroundColor;
        li.style.color = this.tabBackgroundColor;
        li.style.marginLeft = this.tabSpacing + "px";
        var a = document.createElement("a");
        a.innerHTML = "+"; //+ "&#10006;" + "&#x2715;"
        a.addEventListener("click", function (event) {
            _this.onTabAddClick(event, tab.id, index, tab);
        });
        li.append(a);
        return li;
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
        li.style.padding = this.tabPaddingVert + "px " + this.tabPaddingHorz + "px";
        if (this.tabWidth > 0) {
            li.style.width = this.tabWidth + "px";
        }
        else {
            li.style.minWidth = this.tabMinWidth + "px";
            li.style.maxWidth = this.tabMaxWidth + "px";
        }
        li.style.backgroundColor = this.tabBackgroundColor;
        // Tab border
        li.style.borderRadius = this.tabBorderRadius + "px";
        li.style.borderWidth = this.tabBorderSize + "px";
        if (this.tabBorderSize > 0) {
            li.style.borderStyle = "solid";
            li.style.borderColor = this.tabBorderColor;
        }
        var a = document.createElement("a");
        a.classList.add("my-tabstrip-li-a");
        a.innerText = tab.title; //+ "&times;" + "&#10006;" + "&#x2715;"
        li.append(a);
        this.updateItem(li, tab, index);
        return li;
    };
    TabStrip.prototype.updateItem = function (li, tab, index) {
        var _this = this;
        // Spacing between tabs
        if (index > 0) {
            li.style.marginLeft = this.tabSpacing + "px";
        }
        if (tab.active) {
            li.classList.add("active");
            li.style.backgroundColor = this.activeTabBackgroundColor;
            li.style.color = this.activeTabTextColor;
            if (tab.activeColor && tab.activeColor != "") {
                li.style.boxShadow = "inset 0px 3px " + tab.activeColor;
            }
        }
        else {
            li.classList.remove("active");
            li.style.backgroundColor = this.tabBackgroundColor;
            li.style.color = this.textColor;
            li.style.boxShadow = "";
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
            closeIcon.addEventListener("click", function (event) {
                _this.onTabCloseClick(event, tab.id, index, tab);
            });
        }
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
    tabminwidth: "$tabminwidth",
    tabmaxwidth: "$tabmaxwidth",
    tabwidth: "$tabwidth",
    tabpaddinghorz: "$tabpaddinghorz",
    tabpaddingvert: "$tabpaddingvert",
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
        for (var propName in PROPERTIES) {
            var propValue = datapropsobj[propName]; // L'oggetto è indicizzato per il nome senza $
            this.setProperty(PROPERTIES[propName], propValue);
        }
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
        this.mData = dataname;
        if (dataname) {
            var tabs = [];
            var currentLine = datanameList.getCurrentRow();
            var activeLine = currentLine > 0 ? currentLine : 1;
            for (var index = 1; index <= datanameList.getRowCount(); index++) {
                tabs.push({
                    id: datanameList.getData("id", index),
                    title: datanameList.getData("title", index),
                    active: index == activeLine,
                    activeColor: datanameList.getData("activeColor", index),
                    canClose: datanameList.getData("canClose", index),
                });
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
                    this.tabStrip.backgroundColor = propValue;
                    return true;
                // Active TAB
                case PROPERTIES.activetabbackgroundcolor:
                    this.tabStrip.activeTabBackgroundColor = propValue;
                    return true;
                case PROPERTIES.activetabtextcolor:
                    this.tabStrip.activeTabTextColor = propValue;
                    return true;
                // TAB
                case PROPERTIES.tabbackgroundcolor:
                    this.tabStrip.tabBackgroundColor = propValue;
                    return true;
                case PROPERTIES.tabtextcolor:
                    this.tabStrip.textColor = propValue;
                    return true;
                case PROPERTIES.tabbordercolor:
                    this.tabStrip.tabBorderColor = propValue;
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
                case PROPERTIES.tabwidth:
                    this.tabStrip.tabWidth = propValue;
                    return true;
                case PROPERTIES.tabmaxwidth:
                    this.tabStrip.tabMaxWidth = propValue;
                    return true;
                case PROPERTIES.tabminwidth:
                    this.tabStrip.tabMinWidth = propValue;
                    return true;
                case PROPERTIES.tabpaddinghorz:
                    this.tabStrip.tabPaddingHorz = propValue;
                    return true;
                case PROPERTIES.tabpaddingvert:
                    this.tabStrip.tabPaddingVert = propValue;
                    return true;
                // BEHAVIOR
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
            // Main control
            case PROPERTIES.backgroundcolor:
                return this.tabStrip.backgroundColor;
            // Active TAB
            case PROPERTIES.activetabbackgroundcolor:
                return this.tabStrip.activeTabBackgroundColor;
            case PROPERTIES.activetabtextcolor:
                return this.tabStrip.activeTabTextColor;
            // TAB
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
            case PROPERTIES.tabwidth:
                return this.tabStrip.tabWidth;
            case PROPERTIES.tabmaxwidth:
                return this.tabStrip.tabMaxWidth;
            case PROPERTIES.tabminwidth:
                return this.tabStrip.tabMinWidth;
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


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./ctl_com_888sp_tabstrip */ "./src/ctl_com_888sp_tabstrip.ts"), exports);


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



module.exports = content.locals || {};

/***/ })

/******/ })));
//# sourceMappingURL=ctl_com_888sp_tabstrip.bundle.js.map