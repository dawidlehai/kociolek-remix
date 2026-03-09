import {
  Link,
  Outlet,
  useOutletContext
} from "/build/_shared/chunk-7FLSDLMP.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/_layout.tsx
var import_react23 = __toESM(require_react());

// node_modules/phosphor-react/dist/lib/index.esm.js
var import_react = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react.createContext)({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight2(weight, color, pathsByWeight14) {
  var path = pathsByWeight14.get(weight);
  if (!!path)
    return path(color);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};

// node_modules/phosphor-react/dist/lib/IconBase.esm.js
var import_react2 = __toESM(require_react());

// node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/phosphor-react/dist/lib/IconBase.esm.js
var IconBase = /* @__PURE__ */ (0, import_react2.forwardRef)(function(props, ref) {
  var alt = props.alt, color = props.color, size = props.size, weight = props.weight, mirrored = props.mirrored, children = props.children, renderPath27 = props.renderPath, restProps = _objectWithoutPropertiesLoose(props, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]);
  var _useContext = (0, import_react2.useContext)(IconContext), _useContext$color = _useContext.color, contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color, contextSize = _useContext.size, _useContext$weight = _useContext.weight, contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight, _useContext$mirrored = _useContext.mirrored, contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored, restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);
  return import_react2.default.createElement("svg", Object.assign({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : void 0
  }, restContext, restProps), !!alt && import_react2.default.createElement("title", null, alt), children, import_react2.default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath27(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";
var IconBase_esm_default = IconBase;

// node_modules/phosphor-react/dist/icons/ArrowDown.esm.js
var import_react3 = __toESM(require_react());
var pathsByWeight = /* @__PURE__ */ new Map();
pathsByWeight.set("bold", function(color) {
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react3.default.createElement("polyline", {
    points: "56 144 128 216 200 144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function(color) {
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react3.default.createElement("polyline", {
    points: "56 144 128 216 200 144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function() {
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement("path", {
    d: "M205.7,149.7l-72,72a8.2,8.2,0,0,1-11.4,0l-72-72a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,205.7,149.7Z"
  }));
});
pathsByWeight.set("light", function(color) {
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react3.default.createElement("polyline", {
    points: "56 144 128 216 200 144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function(color) {
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react3.default.createElement("polyline", {
    points: "56 144 128 216 200 144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function(color) {
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react3.default.createElement("polyline", {
    points: "56 144 128 216 200 144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath = function renderPath2(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};
var ArrowDown = /* @__PURE__ */ (0, import_react3.forwardRef)(function(props, ref) {
  return import_react3.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath
  }));
});
ArrowDown.displayName = "ArrowDown";
var ArrowDown_esm_default = ArrowDown;

// node_modules/phosphor-react/dist/icons/ArrowUp.esm.js
var import_react4 = __toESM(require_react());
var pathsByWeight2 = /* @__PURE__ */ new Map();
pathsByWeight2.set("bold", function(color) {
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement("line", {
    x1: "128",
    y1: "216",
    x2: "128",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react4.default.createElement("polyline", {
    points: "56 112 128 40 200 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight2.set("duotone", function(color) {
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement("line", {
    x1: "128",
    y1: "216",
    x2: "128",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react4.default.createElement("polyline", {
    points: "56 112 128 40 200 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight2.set("fill", function() {
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement("path", {
    d: "M207.4,115.1A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l72-72a8.1,8.1,0,0,1,11.4,0l72,72A8.4,8.4,0,0,1,207.4,115.1Z"
  }));
});
pathsByWeight2.set("light", function(color) {
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement("line", {
    x1: "128",
    y1: "216",
    x2: "128",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react4.default.createElement("polyline", {
    points: "56 112 128 40 200 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight2.set("thin", function(color) {
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement("line", {
    x1: "128",
    y1: "216",
    x2: "128",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react4.default.createElement("polyline", {
    points: "56 112 128 40 200 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight2.set("regular", function(color) {
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement("line", {
    x1: "128",
    y1: "216",
    x2: "128",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react4.default.createElement("polyline", {
    points: "56 112 128 40 200 112",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath3 = function renderPath4(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight2);
};
var ArrowUp = /* @__PURE__ */ (0, import_react4.forwardRef)(function(props, ref) {
  return import_react4.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath3
  }));
});
ArrowUp.displayName = "ArrowUp";
var ArrowUp_esm_default = ArrowUp;

// node_modules/phosphor-react/dist/icons/Baby.esm.js
var import_react5 = __toESM(require_react());
var pathsByWeight3 = /* @__PURE__ */ new Map();
pathsByWeight3.set("bold", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react5.default.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "16"
  }), import_react5.default.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "16"
  }), import_react5.default.createElement("path", {
    d: "M154.5,168a47.9,47.9,0,0,1-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react5.default.createElement("path", {
    d: "M128,32c-16,20-16,40-16,40a16,16,0,0,0,16,16,16.7,16.7,0,0,0,8-2.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight3.set("duotone", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), import_react5.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react5.default.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "12"
  }), import_react5.default.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "12"
  }), import_react5.default.createElement("path", {
    d: "M154.5,168a47.9,47.9,0,0,1-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react5.default.createElement("path", {
    d: "M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight3.set("fill", function() {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("path", {
    d: "M134.2,24.2a3.9,3.9,0,0,0-3.6,1.8C120.3,41.6,120,55.9,120,56a7.9,7.9,0,0,0,9.7,7.8c3.7-.7,6.2-4.2,6.3-8a8.1,8.1,0,0,1,8.8-7.8,8.2,8.2,0,0,1,7.2,8.3,24,24,0,0,1-48-.3c0-.6.1-10.8,5.4-24a4,4,0,0,0-4.6-5.4A104.1,104.1,0,0,0,24.1,131.7C26,186.8,71.2,231.1,126.3,232a104,104,0,0,0,7.9-207.8ZM80,128a12,12,0,1,1,12,12A12,12,0,0,1,80,128Zm79,46.7a56.3,56.3,0,0,1-62,0,8.1,8.1,0,0,1-2.2-11.1,8,8,0,0,1,11.1-2.3,39.8,39.8,0,0,0,44.2,0,8,8,0,0,1,11.1,2.3A8.1,8.1,0,0,1,159,174.7Zm5-34.7a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z"
  }));
});
pathsByWeight3.set("light", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react5.default.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "10"
  }), import_react5.default.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "10"
  }), import_react5.default.createElement("path", {
    d: "M154.5,168a47.9,47.9,0,0,1-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react5.default.createElement("path", {
    d: "M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight3.set("thin", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react5.default.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "8"
  }), import_react5.default.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "8"
  }), import_react5.default.createElement("path", {
    d: "M154.5,168a47.9,47.9,0,0,1-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react5.default.createElement("path", {
    d: "M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight3.set("regular", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react5.default.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "12"
  }), import_react5.default.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "12"
  }), import_react5.default.createElement("path", {
    d: "M154.5,168a47.9,47.9,0,0,1-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react5.default.createElement("path", {
    d: "M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath5 = function renderPath6(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight3);
};
var Baby = /* @__PURE__ */ (0, import_react5.forwardRef)(function(props, ref) {
  return import_react5.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath5
  }));
});
Baby.displayName = "Baby";
var Baby_esm_default = Baby;

// node_modules/phosphor-react/dist/icons/Cake.esm.js
var import_react6 = __toESM(require_react());
var pathsByWeight4 = /* @__PURE__ */ new Map();
pathsByWeight4.set("bold", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("path", {
    d: "M128,88c56-24,0-76,0-76S72,64,128,88Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react6.default.createElement("path", {
    d: "M162,126a34,34,0,0,1-68,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react6.default.createElement("path", {
    d: "M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react6.default.createElement("path", {
    d: "M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight4.set("duotone", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("path", {
    d: "M162,126a34,34,0,0,1-68,0,34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126Z",
    opacity: "0.2"
  }), import_react6.default.createElement("path", {
    d: "M128,64c46.2-16,0-56,0-56S80,48,128,64Z",
    opacity: "0.2"
  }), import_react6.default.createElement("line", {
    x1: "128",
    y1: "88",
    x2: "128",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M128,64c46.2-16,0-56,0-56S80,48,128,64Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M162,126a34,34,0,0,1-68,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight4.set("fill", function() {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("path", {
    d: "M206,80H136V69.4c11.5-5.1,18.2-12.5,20.1-22C160.2,26,136,4.3,133.2,2a7.8,7.8,0,0,0-10.3-.1C120,4.2,95.1,25.7,99.1,47.2c1.8,9.7,8.9,17.2,20.9,22.3V80H50a32.1,32.1,0,0,0-32,32v13.3A43.3,43.3,0,0,0,30.9,156l1.1,1v51a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V157l1.1-1A43.3,43.3,0,0,0,238,125.3V112A32.1,32.1,0,0,0,206,80Zm2,128H48V166.2A39.3,39.3,0,0,0,60.8,168,42.2,42.2,0,0,0,94,150.6a41.9,41.9,0,0,0,68,0A42.2,42.2,0,0,0,195.2,168h.8a40.6,40.6,0,0,0,12-1.8Z"
  }));
});
pathsByWeight4.set("light", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("line", {
    x1: "128",
    y1: "88",
    x2: "128",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react6.default.createElement("path", {
    d: "M128,64c46.2-16,0-56,0-56S80,48,128,64Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react6.default.createElement("path", {
    d: "M162,126a34,34,0,0,1-68,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react6.default.createElement("path", {
    d: "M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react6.default.createElement("path", {
    d: "M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight4.set("thin", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("line", {
    x1: "128",
    y1: "88",
    x2: "128",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react6.default.createElement("path", {
    d: "M128,64c46.2-16,0-56,0-56S80,48,128,64Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react6.default.createElement("path", {
    d: "M162,126a34,34,0,0,1-68,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react6.default.createElement("path", {
    d: "M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react6.default.createElement("path", {
    d: "M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight4.set("regular", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("line", {
    x1: "128",
    y1: "88",
    x2: "128",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M128,64c46.2-16,0-56,0-56S80,48,128,64Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M162,126a34,34,0,0,1-68,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath7 = function renderPath8(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight4);
};
var Cake = /* @__PURE__ */ (0, import_react6.forwardRef)(function(props, ref) {
  return import_react6.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath7
  }));
});
Cake.displayName = "Cake";
var Cake_esm_default = Cake;

// node_modules/phosphor-react/dist/icons/CloudRain.esm.js
var import_react7 = __toESM(require_react());
var pathsByWeight5 = /* @__PURE__ */ new Map();
pathsByWeight5.set("bold", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("line", {
    x1: "128",
    y1: "240",
    x2: "154.3",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react7.default.createElement("line", {
    x1: "98.7",
    y1: "208",
    x2: "130.3",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react7.default.createElement("path", {
    d: "M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight5.set("duotone", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("path", {
    d: "M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4",
    opacity: "0.2"
  }), import_react7.default.createElement("line", {
    x1: "128",
    y1: "240",
    x2: "154.3",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "98.7",
    y1: "208",
    x2: "130.3",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("path", {
    d: "M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight5.set("fill", function() {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("path", {
    d: "M160.9,204.4l-26.2,40A8.2,8.2,0,0,1,128,248a8,8,0,0,1-6.7-12.4l26.3-40a8,8,0,1,1,13.3,8.8ZM159.3,16.1A76.1,76.1,0,0,0,85,64.8h0a74.8,74.8,0,0,0-5,26.9,8.3,8.3,0,0,1-7.4,8.3A8,8,0,0,1,64,92a91.6,91.6,0,0,1,2.4-21.1,4,4,0,0,0-5-4.8A52.1,52.1,0,0,0,24,116.3C24.2,145,48.1,168,76.8,168h38.6L92.2,203.4A8,8,0,0,0,98.7,216a8,8,0,0,0,6.7-3.6L134.6,168H156a76,76,0,0,0,3.3-151.9Z"
  }));
});
pathsByWeight5.set("light", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("line", {
    x1: "128",
    y1: "240",
    x2: "154.3",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react7.default.createElement("line", {
    x1: "98.7",
    y1: "208",
    x2: "130.3",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react7.default.createElement("path", {
    d: "M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight5.set("thin", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("line", {
    x1: "128",
    y1: "240",
    x2: "154.3",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react7.default.createElement("line", {
    x1: "98.7",
    y1: "208",
    x2: "130.3",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react7.default.createElement("path", {
    d: "M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight5.set("regular", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("line", {
    x1: "128",
    y1: "240",
    x2: "154.3",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "98.7",
    y1: "208",
    x2: "130.3",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("path", {
    d: "M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath9 = function renderPath10(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight5);
};
var CloudRain = /* @__PURE__ */ (0, import_react7.forwardRef)(function(props, ref) {
  return import_react7.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath9
  }));
});
CloudRain.displayName = "CloudRain";
var CloudRain_esm_default = CloudRain;

// node_modules/phosphor-react/dist/icons/Coffee.esm.js
var import_react8 = __toESM(require_react());
var pathsByWeight6 = /* @__PURE__ */ new Map();
pathsByWeight6.set("bold", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "32",
    y1: "216",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react8.default.createElement("path", {
    d: "M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react8.default.createElement("path", {
    d: "M208,88h4a32,32,0,0,1,32,32v8a32,32,0,0,1-32,32h-7.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react8.default.createElement("line", {
    x1: "80",
    y1: "24",
    x2: "80",
    y2: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react8.default.createElement("line", {
    x1: "120",
    y1: "24",
    x2: "120",
    y2: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react8.default.createElement("line", {
    x1: "160",
    y1: "24",
    x2: "160",
    y2: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight6.set("duotone", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("path", {
    d: "M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80Z",
    opacity: "0.2"
  }), import_react8.default.createElement("line", {
    x1: "88",
    y1: "24",
    x2: "88",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("line", {
    x1: "120",
    y1: "24",
    x2: "120",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("line", {
    x1: "152",
    y1: "24",
    x2: "152",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("line", {
    x1: "32",
    y1: "216",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("path", {
    d: "M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("path", {
    d: "M208,88h0a32,32,0,0,1,32,32v8a32,32,0,0,1-32,32h-3.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight6.set("fill", function() {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("path", {
    d: "M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.5,39.9,98,98,0,0,1-27,40.1H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.5A96.4,96.4,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120Zm-16,0a24,24,0,0,0-16-22.6V136a92.9,92.9,0,0,1-1.2,15A24,24,0,0,0,232,128Z"
  }));
});
pathsByWeight6.set("light", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "88",
    y1: "24",
    x2: "88",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react8.default.createElement("line", {
    x1: "120",
    y1: "24",
    x2: "120",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react8.default.createElement("line", {
    x1: "152",
    y1: "24",
    x2: "152",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react8.default.createElement("line", {
    x1: "32",
    y1: "216",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react8.default.createElement("path", {
    d: "M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react8.default.createElement("path", {
    d: "M208,88h0a32,32,0,0,1,32,32v8a32,32,0,0,1-32,32h-3.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight6.set("thin", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "88",
    y1: "24",
    x2: "88",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react8.default.createElement("line", {
    x1: "120",
    y1: "24",
    x2: "120",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react8.default.createElement("line", {
    x1: "152",
    y1: "24",
    x2: "152",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react8.default.createElement("line", {
    x1: "32",
    y1: "216",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react8.default.createElement("path", {
    d: "M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react8.default.createElement("path", {
    d: "M208,88h0a32,32,0,0,1,32,32v8a32,32,0,0,1-32,32h-3.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight6.set("regular", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "88",
    y1: "24",
    x2: "88",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("line", {
    x1: "120",
    y1: "24",
    x2: "120",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("line", {
    x1: "152",
    y1: "24",
    x2: "152",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("line", {
    x1: "32",
    y1: "216",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("path", {
    d: "M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("path", {
    d: "M208,88h0a32,32,0,0,1,32,32v8a32,32,0,0,1-32,32h-3.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath11 = function renderPath12(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight6);
};
var Coffee = /* @__PURE__ */ (0, import_react8.forwardRef)(function(props, ref) {
  return import_react8.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath11
  }));
});
Coffee.displayName = "Coffee";
var Coffee_esm_default = Coffee;

// node_modules/phosphor-react/dist/icons/Confetti.esm.js
var import_react9 = __toESM(require_react());
var pathsByWeight7 = /* @__PURE__ */ new Map();
pathsByWeight7.set("bold", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M184.5,168.6,48.1,218.1a7.9,7.9,0,0,1-10.2-10.2L87.4,71.5a8,8,0,0,1,13.2-2.9l86.8,86.8A8,8,0,0,1,184.5,168.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("path", {
    d: "M164,76s0-24,24-24,24-24,24-24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("line", {
    x1: "102.4",
    y1: "198.4",
    x2: "57.6",
    y2: "153.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("line", {
    x1: "136",
    y1: "16",
    x2: "136",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "120",
    x2: "232",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "84",
    x2: "240",
    y2: "76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react9.default.createElement("line", {
    x1: "74.7",
    y1: "106.7",
    x2: "149.3",
    y2: "181.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight7.set("duotone", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("g", {
    opacity: "0.2"
  }, import_react9.default.createElement("path", {
    d: "M102.4,198.4,57.6,153.6,37.9,207.9a7.9,7.9,0,0,0,10.2,10.2Z"
  })), import_react9.default.createElement("path", {
    d: "M76.8,100.8l78.4,78.4,41-14.9a8,8,0,0,0,2.9-13.2L104.9,56.9a8,8,0,0,0-13.2,2.9Z",
    opacity: "0.2"
  }), import_react9.default.createElement("path", {
    d: "M37.9,207.9,91.7,59.8a8,8,0,0,1,13.2-2.9l94.2,94.2a8,8,0,0,1-2.9,13.2L48.1,218.1A7.9,7.9,0,0,1,37.9,207.9Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M168,72s0-24,24-24,24-24,24-24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "102.4",
    y1: "198.4",
    x2: "57.6",
    y2: "153.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "144",
    y1: "16",
    x2: "144",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "112",
    x2: "232",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "80",
    x2: "240",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "76.8",
    y1: "100.8",
    x2: "155.2",
    y2: "179.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight7.set("fill", function() {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M110.5,51.2a15.7,15.7,0,0,0-14.7-4.3A16,16,0,0,0,84.2,57.1L30.3,205.2h0a16.1,16.1,0,0,0,15,21.4,17.1,17.1,0,0,0,5.5-.9l148.1-53.9a16,16,0,0,0,10.2-11.6,15.7,15.7,0,0,0-4.3-14.7ZM63.8,159.8,83,107l66,66L96.2,192.2ZM160,72a38.2,38.2,0,0,1,3.8-15.6C169.1,45.8,179.1,40,192,40c6.7,0,11-2.3,13.7-7.2a22.3,22.3,0,0,0,2.3-8.9,7.9,7.9,0,0,1,8-7.9,8,8,0,0,1,8,8c0,12.9-8.5,32-32,32-6.7,0-11,2.3-13.7,7.2a22.3,22.3,0,0,0-2.3,8.9,7.9,7.9,0,0,1-8,7.9A8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.7,82.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0l-16-16a8.1,8.1,0,0,1,11.4-11.4Zm4.8-42.7-24,8a7.3,7.3,0,0,1-2.5.4,8,8,0,0,1-2.5-15.6l24-8a8,8,0,0,1,5,15.2Z"
  }));
});
pathsByWeight7.set("light", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M37.9,207.9,91.7,59.8a8,8,0,0,1,13.2-2.9l94.2,94.2a8,8,0,0,1-2.9,13.2L48.1,218.1A7.9,7.9,0,0,1,37.9,207.9Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("path", {
    d: "M168,72s0-24,24-24,24-24,24-24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("line", {
    x1: "102.4",
    y1: "198.4",
    x2: "57.6",
    y2: "153.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("line", {
    x1: "144",
    y1: "16",
    x2: "144",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "112",
    x2: "232",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "80",
    x2: "240",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react9.default.createElement("line", {
    x1: "76.8",
    y1: "100.8",
    x2: "155.2",
    y2: "179.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight7.set("thin", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M37.9,207.9,91.7,59.8a8,8,0,0,1,13.2-2.9l94.2,94.2a8,8,0,0,1-2.9,13.2L48.1,218.1A7.9,7.9,0,0,1,37.9,207.9Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("path", {
    d: "M168,72s0-24,24-24,24-24,24-24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("line", {
    x1: "102.4",
    y1: "198.4",
    x2: "57.6",
    y2: "153.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("line", {
    x1: "144",
    y1: "16",
    x2: "144",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "112",
    x2: "232",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "80",
    x2: "240",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react9.default.createElement("line", {
    x1: "76.8",
    y1: "100.8",
    x2: "155.2",
    y2: "179.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight7.set("regular", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M37.9,207.9,91.7,59.8a8,8,0,0,1,13.2-2.9l94.2,94.2a8,8,0,0,1-2.9,13.2L48.1,218.1A7.9,7.9,0,0,1,37.9,207.9Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("path", {
    d: "M168,72s0-24,24-24,24-24,24-24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "102.4",
    y1: "198.4",
    x2: "57.6",
    y2: "153.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "144",
    y1: "16",
    x2: "144",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "112",
    x2: "232",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "216",
    y1: "80",
    x2: "240",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react9.default.createElement("line", {
    x1: "76.8",
    y1: "100.8",
    x2: "155.2",
    y2: "179.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath13 = function renderPath14(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight7);
};
var Confetti = /* @__PURE__ */ (0, import_react9.forwardRef)(function(props, ref) {
  return import_react9.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath13
  }));
});
Confetti.displayName = "Confetti";
var Confetti_esm_default = Confetti;

// node_modules/phosphor-react/dist/icons/FacebookLogo.esm.js
var import_react10 = __toESM(require_react());
var pathsByWeight8 = /* @__PURE__ */ new Map();
pathsByWeight8.set("bold", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react10.default.createElement("path", {
    d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react10.default.createElement("line", {
    x1: "96",
    y1: "144",
    x2: "160",
    y2: "144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight8.set("duotone", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), import_react10.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("path", {
    d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("line", {
    x1: "96",
    y1: "144",
    x2: "160",
    y2: "144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight8.set("fill", function() {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M232,128a104.3,104.3,0,0,1-91.5,103.3,4.1,4.1,0,0,1-4.5-4V152h24a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.5,8.2,8.2,0,0,0,8.3,7.5H120v75.3a4,4,0,0,1-4.4,4C62.8,224.9,22,179,24.1,124.1A104,104,0,0,1,232,128Z"
  }));
});
pathsByWeight8.set("light", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react10.default.createElement("path", {
    d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react10.default.createElement("line", {
    x1: "96",
    y1: "144",
    x2: "160",
    y2: "144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight8.set("thin", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react10.default.createElement("path", {
    d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react10.default.createElement("line", {
    x1: "96",
    y1: "144",
    x2: "160",
    y2: "144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight8.set("regular", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("path", {
    d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react10.default.createElement("line", {
    x1: "96",
    y1: "144",
    x2: "160",
    y2: "144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath15 = function renderPath16(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight8);
};
var FacebookLogo = /* @__PURE__ */ (0, import_react10.forwardRef)(function(props, ref) {
  return import_react10.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath15
  }));
});
FacebookLogo.displayName = "FacebookLogo";
var FacebookLogo_esm_default = FacebookLogo;

// node_modules/phosphor-react/dist/icons/Gift.esm.js
var import_react11 = __toESM(require_react());
var pathsByWeight9 = /* @__PURE__ */ new Map();
pathsByWeight9.set("bold", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "32",
    y: "80",
    width: "192",
    height: "48",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("path", {
    d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("path", {
    d: "M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("path", {
    d: "M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight9.set("duotone", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "32",
    y: "80",
    width: "192",
    height: "48",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z",
    opacity: "0.2"
  }));
});
pathsByWeight9.set("fill", function() {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M216,72H181a32,32,0,0,0-47.3-42.9,29.2,29.2,0,0,0-5.7,8.2,29.2,29.2,0,0,0-5.7-8.2A32,32,0,0,0,75,72H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM145,40.4A16,16,0,1,1,167.6,63c-4.9,5-19.2,7.7-31.3,8.7C137.3,59.6,140,45.3,145,40.4Zm-56.6,0a16.1,16.1,0,0,1,22.6,0c5,4.9,7.7,19.2,8.7,31.3-12.1-1-26.4-3.7-31.3-8.7A16.1,16.1,0,0,1,88.4,40.4ZM216,120H136v72a8,8,0,0,1-16,0V120H40V88h80v32h16V88h80v32Z"
  }));
});
pathsByWeight9.set("light", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "32",
    y: "80",
    width: "192",
    height: "48",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("path", {
    d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("path", {
    d: "M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("path", {
    d: "M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight9.set("thin", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "32",
    y: "80",
    width: "192",
    height: "48",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("path", {
    d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("path", {
    d: "M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("path", {
    d: "M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight9.set("regular", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("rect", {
    x: "32",
    y: "80",
    width: "192",
    height: "48",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("path", {
    d: "M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath17 = function renderPath18(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight9);
};
var Gift = /* @__PURE__ */ (0, import_react11.forwardRef)(function(props, ref) {
  return import_react11.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath17
  }));
});
Gift.displayName = "Gift";
var Gift_esm_default = Gift;

// node_modules/phosphor-react/dist/icons/GoogleLogo.esm.js
var import_react12 = __toESM(require_react());
var pathsByWeight10 = /* @__PURE__ */ new Map();
pathsByWeight10.set("bold", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M128,128h88a88.1,88.1,0,1,1-25.8-62.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight10.set("duotone", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M128,128h88a88.1,88.1,0,1,1-25.8-62.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight10.set("fill", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,184A80,80,0,1,1,184.6,71.4a8,8,0,0,1,0,11.3,7.9,7.9,0,0,1-11.3,0A64.1,64.1,0,1,0,191.5,136H128a8,8,0,0,1,0-16h72a8,8,0,0,1,8,8A80.1,80.1,0,0,1,128,208Z"
  }));
});
pathsByWeight10.set("light", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M128,128h88a88.1,88.1,0,1,1-25.8-62.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight10.set("thin", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M128,128h88a88.1,88.1,0,1,1-25.8-62.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight10.set("regular", function(color) {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M128,128h88a88.1,88.1,0,1,1-25.8-62.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath19 = function renderPath20(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight10);
};
var GoogleLogo = /* @__PURE__ */ (0, import_react12.forwardRef)(function(props, ref) {
  return import_react12.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath19
  }));
});
GoogleLogo.displayName = "GoogleLogo";
var GoogleLogo_esm_default = GoogleLogo;

// node_modules/phosphor-react/dist/icons/List.esm.js
var import_react13 = __toESM(require_react());
var pathsByWeight11 = /* @__PURE__ */ new Map();
pathsByWeight11.set("bold", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "64",
    x2: "216",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "192",
    x2: "216",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight11.set("duotone", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "64",
    x2: "216",
    y2: "64",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "192",
    x2: "216",
    y2: "192",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight11.set("fill", function() {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
  }), import_react13.default.createElement("path", {
    d: "M40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"
  }), import_react13.default.createElement("path", {
    d: "M216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
  }));
});
pathsByWeight11.set("light", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "64",
    x2: "216",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "192",
    x2: "216",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight11.set("thin", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "64",
    x2: "216",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "192",
    x2: "216",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight11.set("regular", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("line", {
    x1: "40",
    y1: "128",
    x2: "216",
    y2: "128",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "64",
    x2: "216",
    y2: "64",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "40",
    y1: "192",
    x2: "216",
    y2: "192",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath21 = function renderPath22(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight11);
};
var List = /* @__PURE__ */ (0, import_react13.forwardRef)(function(props, ref) {
  return import_react13.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath21
  }));
});
List.displayName = "List";
var List_esm_default = List;

// node_modules/phosphor-react/dist/icons/Martini.esm.js
var import_react14 = __toESM(require_react());
var pathsByWeight12 = /* @__PURE__ */ new Map();
pathsByWeight12.set("bold", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("polygon", {
    points: "24 40 232 40 128 144 24 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "144",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "88",
    y1: "216",
    x2: "168",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "60",
    y1: "76",
    x2: "196",
    y2: "76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight12.set("duotone", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("polygon", {
    points: "56 72 200 72 128 144 56 72",
    opacity: "0.2"
  }), import_react14.default.createElement("polygon", {
    points: "24 40 232 40 128 144 24 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "144",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "88",
    y1: "216",
    x2: "168",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "56",
    y1: "72",
    x2: "200",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight12.set("fill", function() {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
    d: "M237.7,45.7a8.4,8.4,0,0,0,1.7-8.8A8,8,0,0,0,232,32H24a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8L120,147.3V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.3Zm-25,2.3-16,16H59.3l-16-16Z"
  }));
});
pathsByWeight12.set("light", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("polygon", {
    points: "24 40 232 40 128 144 24 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "144",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "88",
    y1: "216",
    x2: "168",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "56",
    y1: "72",
    x2: "200",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight12.set("thin", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("polygon", {
    points: "24 40 232 40 128 144 24 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "144",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "88",
    y1: "216",
    x2: "168",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "56",
    y1: "72",
    x2: "200",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight12.set("regular", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("polygon", {
    points: "24 40 232 40 128 144 24 40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "128",
    y1: "144",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "88",
    y1: "216",
    x2: "168",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "56",
    y1: "72",
    x2: "200",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath23 = function renderPath24(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight12);
};
var Martini = /* @__PURE__ */ (0, import_react14.forwardRef)(function(props, ref) {
  return import_react14.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath23
  }));
});
Martini.displayName = "Martini";
var Martini_esm_default = Martini;

// node_modules/phosphor-react/dist/icons/X.esm.js
var import_react15 = __toESM(require_react());
var pathsByWeight13 = /* @__PURE__ */ new Map();
pathsByWeight13.set("bold", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight13.set("duotone", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight13.set("fill", function() {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"
  }));
});
pathsByWeight13.set("light", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight13.set("thin", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight13.set("regular", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath25 = function renderPath26(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight13);
};
var X = /* @__PURE__ */ (0, import_react15.forwardRef)(function(props, ref) {
  return import_react15.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath25
  }));
});
X.displayName = "X";
var X_esm_default = X;

// app/components/navigation/BottomNavigation.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BottomNavigation({ navigationLinks: navigationLinks2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "footer-navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "footer-navigation__ul", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "#top",
        className: "footer-navigation__link footer-navigation__to-top",
        children: [
          "Na g\xF3r\u0119 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUp_esm_default, { weight: "bold" }, void 0, false, {
            fileName: "app/components/navigation/BottomNavigation.tsx",
            lineNumber: 14,
            columnNumber: 21
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/navigation/BottomNavigation.tsx",
        lineNumber: 11,
        columnNumber: 11
      },
      this
    ) }, "top", false, {
      fileName: "app/components/navigation/BottomNavigation.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    navigationLinks2.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: link.href, className: "footer-navigation__link", children: link.label }, void 0, false, {
      fileName: "app/components/navigation/BottomNavigation.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, link.label, false, {
      fileName: "app/components/navigation/BottomNavigation.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/navigation/BottomNavigation.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/navigation/BottomNavigation.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/navigation/SocialMedia.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SocialMedia() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("address", { className: "social", children: [
    "Znajd\u017A nas na",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "a",
      {
        href: "https://www.facebook.com/kociolekbydgoszcz",
        className: "social__link",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FacebookLogo_esm_default, { weight: "fill", size: "2rem" }, void 0, false, {
            fileName: "app/components/navigation/SocialMedia.tsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          " Facebooku"
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/navigation/SocialMedia.tsx",
        lineNumber: 7,
        columnNumber: 7
      },
      this
    ),
    " ",
    "oraz",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "a",
      {
        href: "https://www.google.com/maps/place/Kocio%C5%82ek+-+Agnieszka+Tomaszewska-Le/@53.1122481,18.0315353,17z/data=!3m1!4b1!4m6!3m5!1s0x470313031b9c823f:0x4841d8b74f0165b0!8m2!3d53.1122449!4d18.033724!16s%2Fg%2F11jt268vy2",
        className: "social__link",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GoogleLogo_esm_default, { weight: "fill", size: "2rem" }, void 0, false, {
            fileName: "app/components/navigation/SocialMedia.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          " Google"
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/navigation/SocialMedia.tsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/navigation/SocialMedia.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/layout/Footer.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Footer({ navigationLinks: navigationLinks2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "footer background--main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer__container container container--default", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BottomNavigation, { navigationLinks: navigationLinks2 }, void 0, false, {
      fileName: "app/components/layout/Footer.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SocialMedia, {}, void 0, false, {
      fileName: "app/components/layout/Footer.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "footer__credits" }, void 0, false, {
      fileName: "app/components/layout/Footer.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Footer.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/Footer.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/layout/Header.tsx
var import_react20 = __toESM(require_react());

// app/components/navigation/TopNavigation.tsx
var import_react18 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function TopNavigation({
  navigationLinks: navigationLinks2,
  showMobileMenu,
  onLinkClick
}) {
  const [isHidden, setIsHidden] = (0, import_react18.useState)(true);
  (0, import_react18.useEffect)(() => {
    if (!showMobileMenu)
      setTimeout(() => {
        setIsHidden(true);
      }, 300);
    if (showMobileMenu)
      setIsHidden(false);
  }, [showMobileMenu]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "top-navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "ul",
    {
      className: `${!showMobileMenu && "hide-menu"} ${!isHidden && "display-menu"}`,
      children: navigationLinks2.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        Link,
        {
          to: link.href,
          className: `top-navigation__link ${link.highlight && "button button--white"}`,
          onClick: onLinkClick,
          children: link.label
        },
        void 0,
        false,
        {
          fileName: "app/components/navigation/TopNavigation.tsx",
          lineNumber: 34,
          columnNumber: 13
        },
        this
      ) }, link.label, false, {
        fileName: "app/components/navigation/TopNavigation.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this))
    },
    void 0,
    false,
    {
      fileName: "app/components/navigation/TopNavigation.tsx",
      lineNumber: 28,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/navigation/TopNavigation.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/utils/MenuButton.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function MenuButton({
  ariaLabel,
  className,
  type,
  onClick
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { "aria-label": ariaLabel, className, onClick, children: type === "open" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(List_esm_default, { weight: "bold" }, void 0, false, {
    fileName: "app/components/utils/MenuButton.tsx",
    lineNumber: 19,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(X_esm_default, { weight: "bold" }, void 0, false, {
    fileName: "app/components/utils/MenuButton.tsx",
    lineNumber: 19,
    columnNumber: 51
  }, this) }, void 0, false, {
    fileName: "app/components/utils/MenuButton.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/layout/Header.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Header({ navigationLinks: navigationLinks2, sticky, headerRef }) {
  const [showMenu, setShowMenu] = (0, import_react20.useState)(false);
  const toggleMenuHandler = () => setShowMenu((prevState) => !prevState);
  const hideMenuHandler = () => setShowMenu(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "header",
    {
      className: `header background--main ${sticky ? "header--sticky" : ""}`,
      ref: headerRef,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header__container container container--max", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          Link,
          {
            to: "/#top",
            className: "header__logo-link",
            title: "Powr\xF3t do strony g\u0142\xF3wnej",
            onClick: hideMenuHandler,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "img",
              {
                src: "/img/logo.svg",
                style: { width: "100%", aspectRatio: "617/171" },
                fetchPriority: "high",
                alt: "Logo Kocio\u0142ek"
              },
              void 0,
              false,
              {
                fileName: "app/components/layout/Header.tsx",
                lineNumber: 28,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 23,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          TopNavigation,
          {
            navigationLinks: navigationLinks2,
            showMobileMenu: showMenu,
            onLinkClick: toggleMenuHandler
          },
          void 0,
          false,
          {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 35,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          MenuButton,
          {
            ariaLabel: showMenu ? "Zamknij menu" : "Otw\xF3rz menu",
            className: `menu-button ${showMenu ? "menu-button--close" : "menu-button--open"}`,
            type: showMenu ? "close" : "open",
            onClick: toggleMenuHandler
          },
          void 0,
          false,
          {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 40,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/hooks/useObserver.ts
var import_react21 = __toESM(require_react());
var useObserver = (options2) => {
  const containerRef = (0, import_react21.useRef)(null);
  const [isVisible, setIsVisible] = (0, import_react21.useState)(true);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  (0, import_react21.useEffect)(() => {
    const observer = new IntersectionObserver(callbackFunction, options2);
    if (containerRef.current)
      observer.observe(containerRef.current);
    const containerRefClone = containerRef.current;
    return () => {
      if (containerRefClone)
        observer.unobserve(containerRefClone);
    };
  }, [containerRef, options2]);
  return [containerRef, isVisible];
};
var useObserver_default = useObserver;

// app/routes/_layout.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var navigationLinks = [
  { label: "Na miejscu", href: "/#na-miejscu" },
  { label: "Na wynos", href: "/#na-wynos" },
  { label: "Menu", href: "/#menu" },
  { label: "O nas", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt", highlight: true }
];
var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};
function Layout() {
  const [containerRef, isVisible] = useObserver_default(options);
  const headerRef = (0, import_react23.useRef)(null);
  let headerHeight = 0;
  if (headerRef.current)
    headerHeight = headerRef.current.getBoundingClientRect().height;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Header,
      {
        navigationLinks,
        sticky: !isVisible,
        headerRef
      },
      void 0,
      false,
      {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "main",
      {
        className: "main",
        style: { marginTop: !isVisible ? `${headerHeight}px` : "0" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Outlet, { context: { observeRef: containerRef } }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Footer, { navigationLinks }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
var useObserveRef = () => useOutletContext();

export {
  ArrowDown_esm_default,
  Baby_esm_default,
  Cake_esm_default,
  CloudRain_esm_default,
  Coffee_esm_default,
  Confetti_esm_default,
  Gift_esm_default,
  Martini_esm_default,
  Layout,
  useObserveRef
};
//# sourceMappingURL=/build/_shared/chunk-PKTLSZAJ.js.map
