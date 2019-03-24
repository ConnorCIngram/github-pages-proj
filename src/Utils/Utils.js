function convertHex(hex, opacity) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  let result = "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
  return result;
}

function darkenColor(hex, opacity, factor = 0.8) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);
  let result = "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
  return result;
}

// route in form: '/example' or '/#example'
function getActiveItemFromRoute(route) {
  if (route === "/") return "";
  let r = route.substr(1);
  if (r[0] === "#") {
    r = r.substr(1);
  }
  return r;
}

module.exports = {
  convertHex: convertHex,
  darkenColor: darkenColor,
  getActiveItemFromRoute: getActiveItemFromRoute
};
