// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "#html{\n    height:100%;\n    background-color: rgb(97, 141, 100);\n}\n\n.panda * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.panda *::before, *::after {\n    box-sizing: border-box;\n}\n\n.panda {\n    box-shadow: inset 0px 0px 50px -5px rgba(83, 78, 78, 0.45);\n    background-color: rgb(29, 88, 69);\n    border-radius: 50%;\n    margin: auto auto;\n    align-items: center;\n    width: 90vh;\n    height: 80vh;\n    display:flex;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.head {\n    border-radius: 50%;\n    margin: 1em auto;\n    align-items: center;\n    width: 55vh;\n    height: 40vh;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    background-color: rgb(253, 253, 253);\n    border: rgb(20, 20, 20) 1px solid;\n    z-index: 1;\n}\n\n.nose {\n    position: absolute;\n    margin-left: 1vh;\n    top: 22vh;\n    width: 4vh;\n    height: 3vh;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n}\n\n.circle {\n    position: absolute;\n    top: 10vh;\n    margin-left: 1.5vh;\n    border-left: 11vh solid transparent;\n    border-right: 2vh solid transparent;\n    border-bottom: 15vh solid;\n    border-radius: 50%;\n}\n\n.circleLeft {\n    transform: translateX(-15vh) rotate(30deg);\n}\n\n.circleRight {\n    transform: translateX(14vh) rotate(-30deg);\n}\n\n.eye {\n    position: absolute;\n    width: 5vh;\n    height: 6vh;\n    background-color: white;\n    border-radius: 50%;\n    border: 1px solid rgb(253, 253, 253);\n}\n\n.eyeLeft {\n    transform: translateX(-5vh) translateY(5vh);\n}\n\n.eyeRight {\n    transform: translateX(-9.3vh) translateY(5vh);\n}\n\n.eyeball {\n    position: absolute;\n    width: 3vh;\n    height: 3vh;\n    background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n    border: 1px solid rgb(253, 253, 253);\n}\n\n.eyeballLeft {\n    transform: translateX(0.2vh) translateY(0.6vh);\n}\n\n.eyeballRight {\n    transform: translateX(0.6vh) translateY(0.2vh);\n} \n\n.mouth {\n    position: absolute;\n    margin-left: 1vh;\n    top: 32vh;\n    width: 4vh;\n    background-color: rgb(0, 0, 0);\n    height:1vh;\n    border: solid 1px;\n    border-radius: 50%;\n}\n\n.ear {\n    position: absolute;\n    margin-left: 1vh;\n    top: 25vh;\n    width: 11vh;\n    height: 9vh;\n   background-color: rgb(0, 0, 0);\n    border-radius: 50%;\n}\n\n.earLeft {\n    transform: translateX(-21vh) translateY(-3vh);\n}\n\n.earRight {\n    transform: translateX(20vh) translateY(-3vh);\n}\n\n.torso {\n    position: absolute;\n    width: 95%;\n    height: 50%;\n    background: black;\n    border-radius: 50%;\n    pointer-events: none;\n    top: 65%;\n}\n\n.chest {\n    position: absolute;\n    width: 70%;\n    height: 80%;\n    background: white;\n    border-radius: 50%;\n    pointer-events: none;\n    top: 30%;\n    left: 12.8vh;\n}\n\n.nose:hover {\n    animation: wave 0.3s infinite linear; \n}\n\n.mouth:hover {\n    animation: mouth 1s linear;\n}\n\n.panda:hover .earLeft {\n    animation: earsLeft  0.4s infinite ease-in-out; \n}\n\n.panda:hover .earRight {\n    animation: earsRight  0.4s infinite ease-in-out ; \n}\n\n.panda:hover .eyeballLeft {\n    animation: eyeballLeft 4s ease-in-out infinite alternate;\n  }\n\n.panda:hover  .eyeballRight {\n    animation: eyeballRight 4s ease-in-out infinite alternate;\n  }\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(8deg);\n    }\n    66% {\n        transform: rotate(-8deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n@keyframes mouth {\n    20% {\n        transform:  scaleY(3);\n    }\n    60% {\n        transform: scaleY(2);\n    }\n    100% {\n        transform: scaleY(1);\n    }\n}\n\n@keyframes earsRight {\n    0% {\n        transform: translateX(20vh) translateY(-3vh) ;\n    }\n    33% {\n        transform:translateX(19vh) translateY(-4vh) ;\n    }\n    66%{\n        transform: translateX(19vh) translateY(-4vh)\n    }\n    100%{\n        transform:translateX(20vh) translateY(-3vh)\n    }\n    \n}\n\n@keyframes earsLeft {\n    0% {\n        transform: translateX(-21vh) translateY(-3vh) ;\n    }\n    33% {\n        transform:translateX(-20vh) translateY(-4vh) ;\n    }\n    66%{\n        transform: translateX(-20vh) translateY(-4vh)\n    }\n    100%{\n        transform:translateX(-21vh) translateY(-3vh)\n    }\n}\n\n@keyframes eyeballLeft{\n    0% {\n        transform: translateX(0.2vh) translateY(0.6vh) ;\n    }\n    20% {\n        transform:translateX(0.8vh) translateY(0.2vh) ;\n    }\n    40% {\n        transform:translateX(1.5vh) translateY(1vh) ;\n    }\n    60%{\n        transform: translateX(1.5vh) translateY(2vh);\n    }\n    80%{\n        transform:translateX(0.8vh) translateY(2.5vh)\n    }\n    100%{\n        transform: translateX(0.2vh) translateY(0.6vh) ;\n    }\n}\n\n@keyframes eyeballRight{\n    0% {\n        transform: translateX(0.6vh) translateY(0.2vh) ;\n    }\n    20% {\n        transform:translateX(1.2vh) translateY(0.4vh) ;\n    }\n    40% {\n        transform:translateX(1.5vh) translateY(1.5vh) ;\n    }\n    60%{\n        transform: translateX(1.2vh) translateY(2.5vh);\n    }\n    80%{\n        transform:translateX(0.3vh) translateY(2.2vh)\n    }\n    100%{\n        transform: translateX(0.6vh) translateY(0.2vh) ;\n    }\n}\n";
exports.default = string;
},{}],"main.js":[function(require,module,exports) {
'use strict';

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    html: document.querySelector('#html'),
    demo: document.querySelector('#demo'),
    demoStyle: document.querySelector('#demoStyle'),
    button: document.querySelectorAll('.button1'),
    fold1: document.querySelector('#btnFold')

  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnRefresh': 'refresh',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnCode': 'code',
    '#btnPicture': 'picture',
    '#btnSplit': 'split',
    '#btnFold': 'fold'
  },
  init: function init() {
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demoStyle.innerHTML = _css2.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      var value = player.events[key]; // play/pause/slow...
      document.querySelector(key).onclick = player[value];
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demoStyle.innerHTML = _css2.default.substr(0, player.n);
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  refresh: function refresh() {
    location.reload();
  },
  update: function update() {
    player.pause();
    player.play();
  },
  slow: function slow() {
    player.time = 100;
    player.update();
  },
  normal: function normal() {
    player.time = 50;
    player.update();
  },
  fast: function fast() {
    player.time = 0;
    player.update();
  },
  code: function code() {
    player.ui.demo.style.height = '100vh';
    player.ui.html.style.height = '0vh';
  },
  picture: function picture() {
    player.ui.demo.style.height = '0vh';
    player.ui.html.style.height = '100vh';
  },
  split: function split() {
    player.ui.demo.style.height = '20vh';
    player.ui.html.style.height = '80vh';
  },
  fold: function fold() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = player.ui.button[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var buttonItem = _step.value;

        if (buttonItem.className === 'button1') {
          if (buttonItem.style.visibility === 'hidden') {
            buttonItem.style.visibility = 'visible';
            player.ui.fold1.innerText = '折叠按钮';
          } else {
            buttonItem.style.visibility = "hidden";
            player.ui.fold1.innerText = '展开按钮';
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

player.init();
},{"./css":"css.js"}],"..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '10295' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.89cc4146.map