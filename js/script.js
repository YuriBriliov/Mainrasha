const mainScreen = document.querySelector('.main_screen');

mainScreen.addEventListener('click', (event)=>{
  event.preventDefault()
  const bloggers = document.querySelector('.main__section')
    bloggers.style.display = 'block'
})




$(function ($) {
  $("#gooey-h").gooeymenu({
    bgColor: "#47AAD5",
    contentColor: "white",
    style: "vertical",
    vertical: {
      menuItemPosition: "glue",
      direction: "down"
    },
    circle: {
      radius: 0
    },
    margin: "small",
    size: 65,
    bounce: true,
    bounceLength: "small",
    transitionStep: 100,
    hover: "#2884AB"
  });
});




/* jquery gooey menu pluggins
 * gooey menu v1.0.0 (http://http://dominicdomu.blogspot.in/p/gooy.html)
 * source: //dreamidea.in
 * Created on : Apr 6, 2016, 1:30:02 PM
    Author     : Dominic George
    site       : //dominicdomu.blospot.in
 *   */
(function (g) {
  g.gooeymenu = function (h, q) {
    var k = g(h); k.addClass("navimenu"); var b = this, a = b.options = g.extend({}, g.gooeymenu.defaults, q); b.els = { item: k.find(".gooey-menu-item"), checkbox: k.find(".menu-open"), button: k.find(".open-button") }; b.methods = {
      setup: function () {
        var d = { small: 0, medium: 0, large: 0 }, f = { small: 0, medium: 0, large: 0 }, c; for (c in d) a.margin === c ? a.margin = d[c] : null; for (var e in f) a.bounceLength === e ? a.bounceLength = f[e] : null; b.methods.responsiveStyles(); b.els.item.hover(function () {
        a.currentBg =
          b.els.item.css("background-color"); g(this).css("background-color", a.hover)
        }, function () { g(this).css("background-color", a.currentBg) }); !0 === a.bounce && b.methods.bounce()
      }, setEvents: function () { ["open", "close"].forEach(function (d, b) { k.on(d, function () { a[d] && a[d].apply(this, arguments) }) }) }, bounce: function () {
        if (!0 === a.bounce) {
          var d = b.els.item.css("transition-timing-function"); b.els.checkbox.on("change", function () {
            g(this).is(":checked") ? b.els.item.css({
              "transition-timing-function": "cubic-bezier(0, 0, 0,  " +
                a.bounceLength + ")", "-o-transition-timing-function": "cubic-bezier(0, 0, 0,  " + a.bounceLength + ")", "-moz-transition-timing-function": "cubic-bezier(0, 0, 0,  " + a.bounceLength + ")", "-webkit-transition-timing-function": "cubic-bezier(0, 0, 0,  " + a.bounceLength + ")", "-ms-transition-timing-function": "cubic-bezier(0, 0, 0,  " + a.bounceLength + ")"
            }) : b.els.item.css({ "transition-timing-function": d, "-moz-transition-timing-function": d, "-o-transition-timing-function": d, "-webkit-transition-timing-function": d })
          })
        }
      }, circle: function () {
        k.trigger("open"); var d, f, c, e, m, h, n, r = b.els.item.length, l = a.transitionStep, q = Math.PI, t = 360 / r, p = t = 360 / r; f = a.circle.radius; b.els.item.each(function () {
          b.els.checkbox.is(":checked") ? (d = q * p / 180, c = Math.abs(Math.cos(d)), e = f * c, m = Math.sqrt(f * f - e * e), h = b.methods.periodCalc(p).x, n = b.methods.periodCalc(p).y, g(this).css({
            transform: "translate3d(" + h + e + "px," + n + m + "px,0)", "-o-transform": "translate3d(" + h + e + "px," + n + m + "px,0)", "-webkit-transform": "translate3d(" + h + e + "px," + n + m + "px,0)", "-moz-transform": "translate3d(" +
              h + e + "px," + n + m + "px,0)", "-ms-transform": "translate3d(" + h + e + "px," + n + m + "px,0)", "transition-duration": l + "ms", "-o-transition-duration": l + "ms", "-webkit-transition-duration": l + "ms", "-moz-transition-duration": l + "ms"
          }), p += t, l += a.transitionStep) : (b.els.item.css({ transform: "translate3d(0, 0, 0)", "-moz-transform": "translate3d(0, 0, 0)", "-webkit-transform": "translate3d(0, 0, 0)", "-ms-transform": "translate3d(0, 0, 0)", "-o-transform": "translate3d(0, 0, 0)" }), p = 360 / r, l = a.transitionStep, k.trigger("close"))
        })
      }, periodCalc: function (a) {
        return {
          x: 90 >
            a || 220 < a ? "" : "-", y: 180 < a ? "" : "-"
        }
      }, linear: function (d) {
        k.trigger("open"); var f = "horizontal" === a.style ? a.horizontal.menuItemPosition : a.vertical.menuItemPosition, c = d[f].init, e = a.transitionStep; b.els.item.each(function () {
          b.els.checkbox.is(":checked") ? "horizontal" === a.style ? (g(this).css({
            transform: "translate3d(" + c + "px, 0, 0)", "-ms-transform": "translate3d(" + c + "px, 0, 0)", "-o-transform": "translate3d(" + c + "px, 0, 0)", "-moz-transform": "translate3d(" + c + "px, 0, 0)", "-webkit-transform": "translate3d(" + c + "px, 0, 0)",
            "transition-duration": e + "ms", "-o-transition-duration": e + "ms", "-webkit-transition-duration": e + "ms", "-moz-transition-duration": e + "ms"
          }), c += d[f].init, e += a.transitionStep) : "vertical" === a.style && (g(this).css({ "transition-duration": e + "ms", "-moz-transition-duration": e + "ms", "-o-transition-duration": e + "ms", "-webkit-transition-duration": e + "ms" }), "down" === a.vertical.direction ? g(this).css({
            transform: "translate3d(0, " + c + "px, 0)", "-moz-transform": "translate3d(0, " + c + "px, 0)", "-o-transform": "translate3d(0, " + c +
              "px, 0)", "-webkit-transform": "translate3d(0, " + c + "px, 0)", "-ms-transform": "translate3d(0, " + c + "px, 0)"
          }) : "up" === a.vertical.direction && g(this).css({ transform: "translate3d(0,-" + c + "px, 0)", "-moz-transform": "translate3d(0,-" + c + "px, 0)", "-webkit-transform": "translate3d(0,-" + c + "px, 0)", "-o-transform": "translate3d(0,-" + c + "px, 0)", "-ms-transform": "translate3d(0,-" + c + "px, 0)" }), c += d[f].init, e += a.transitionStep) : (b.els.item.css({
            transform: "translate3d(0, 0, 0)", "-moz-transform": "translate3d(0, 0, 0)", "-webkit-transform": "translate3d(0, 0, 0)",
            "-ms-transform": "translate3d(0, 0, 0)", "-o-transform": "translate3d(0, 0, 0)"
          }), c = d[f].init, e = a.transitionStep, k.trigger("close"))
        })
      }, translate: function () { var d = { glue: { init: a.size }, spaced: { init: a.size * a.margin } }; b.els.checkbox.on("change", function () { b._callbacks[a.style](d) }) }, createOn: function (a, b, c, e) { b = document.createElementNS("http://www.w3.org/2000/svg", b); for (var g in c) c.hasOwnProperty(g) && b.setAttribute(g, c[g]); e && b.appendChild(document.createTextNode(e)); return a.appendChild(b) }, responsiveStyles: function () {
        var d =
          0 < window.innerWidth ? window.innerWidth : screen.width; 320 <= d && 480 >= d ? (a.size /= 1.4, a.circle.radius /= 1.2) : 480 < d && 768 >= d ? a.size /= 1.2 : 780 < d && 1024 >= d && (a.circle.radius /= 1.2, a.size /= 1.1); b.els.item.css({ width: a.size + "px", height: a.size + "px", color: a.contentColor, "background-color": a.bgColor, "line-height": a.size + "px" }); b.els.button.css({ width: a.size + "px", height: a.size + "px", "background-color": a.bgColor, "line-height": a.size + "px" }); k.find(".burger").css({
            "font-size": ".8em", width: a.size / 2 + "px", height: "2px", left: a.size /
              4 + "px"
          })
      }
    }; b._callbacks = { vertical: b.methods.linear, horizontal: b.methods.linear, circle: b.methods.circle }; b.init = function () {
      var a = document.createElementNS("http://www.w3.org/2000/svg", "svg"), f = g(".navimenu").index(k); a.setAttribute("id", "gooeySVG" + f); a.setAttribute("class", "gooeySVG"); k.append(a); a = document.getElementById("gooeySVG" + f); b.methods.createOn(a, "defs", { id: "defs" + f }); a = document.getElementById("defs" + f); b.methods.createOn(a, "filter", { id: "goo-shadow" + f, overflow: "hidden" }); var c = document.getElementById("goo-shadow" +
        f); b.methods.createOn(c, "feGaussianBlur", { "in": "SourceGraphic", result: "blur", stdDeviation: "10" }); b.methods.createOn(c, "feColorMatrix", { "in": "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8", result: "goo" }); b.methods.createOn(c, "feGaussianBlur", { "in": "goo", stdDeviation: "2", result: "shadow" }); b.methods.createOn(c, "feColorMatrix", { "in": "shadow", mode: "matrix", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 0", result: "shadow" }); b.methods.createOn(c, "feOffset", {
          "in": "shadow", dx: "1",
          dy: "1", result: "shadow"
        }); b.methods.createOn(c, "feComposite", { in2: "shadow", "in": "goo", result: "goo" }); b.methods.createOn(c, "feComposite", { in2: "goo", "in": "SourceGraphic", result: "mix" }); b.methods.createOn(a, "filter", { id: "goo" + f }); a = document.getElementById("goo" + f); b.methods.createOn(a, "feGaussianBlur", { "in": "SourceGraphic", result: "blur", stdDeviation: "10" }); b.methods.createOn(a, "feColorMatrix", { "in": "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 7", result: "goo" }); b.methods.createOn(a,
          "feComposite", { in2: "goo", "in": "SourceGraphic", result: "mix" }); k.css({ "-webkit-filter": "url('#goo-shadow" + f + "')", filter: "url('#goo-shadow" + f + "')", "-ms-filter": "url('#goo-shadow" + f + "')", "-o-filter": "url('#goo-shadow" + f + "')" }); b.methods.setEvents(); b.methods.setup(); b.methods.translate.apply(this, arguments)
    }; b.init()
  };
  g.fn.gooeymenu = function (h) { void 0 === h && (h = {}); if (h && "object" === typeof h) return this.each(function () { new g.gooeymenu(this, h) }) }
})(jQuery);