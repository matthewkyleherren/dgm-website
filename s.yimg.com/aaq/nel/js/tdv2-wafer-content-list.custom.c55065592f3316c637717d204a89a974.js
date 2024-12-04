"use strict";
function _typeof(t) {
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _typeof(t)
  );
}
function _toConsumableArray(t) {
  return (
    _arrayWithoutHoles(t) ||
    _iterableToArray(t) ||
    _unsupportedIterableToArray(t) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return (
      "Object" === r && t.constructor && (r = t.constructor.name),
      "Map" === r || "Set" === r
        ? Array.from(t)
        : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? _arrayLikeToArray(t, e)
          : void 0
    );
  }
}
function _iterableToArray(t) {
  if (
    ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
    null != t["@@iterator"]
  )
    return Array.from(t);
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) return _arrayLikeToArray(t);
}
function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, o = Array(e); r < e; r++) o[r] = t[r];
  return o;
}
function _defineProperty(t, e, r) {
  return (
    (e = _toPropertyKey(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function _toPropertyKey(t) {
  var e = _toPrimitive(t, "string");
  return "symbol" == _typeof(e) ? e : e + "";
}
function _toPrimitive(t, e) {
  if ("object" != _typeof(t) || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (void 0 !== r) {
    var o = r.call(t, e || "default");
    if ("object" != _typeof(o)) return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
!(function () {
  function t(t) {
    t && (window.wafer.base.destroy(t), t.parentNode.removeChild(t));
  }
  function e() {
    document.addEventListener("animationend", function (e) {
      if (e && e.target && "fadeOutGeminiConfirm" === e.animationName) {
        var r = e && e.target;
        r.classList.contains("feedback-screen")
          ? (r = window.wafer.utils.findAncestor(r, "gemini-item"))
              .parentNode &&
            (window.wafer.base.destroy(r), r.parentNode.removeChild(r))
          : t(e.target),
          (function () {
            var e = document.getElementById("wafer-sponsored-strip");
            if (e) {
              var r = e.querySelector(".simple-list");
              r && !r.hasChildNodes() && t(e);
            }
          })();
      }
    });
  }
  window.wafer.ready(function () {
    var t;
    document.getElementById("content-list-video-player") &&
      ((t = "video:playlistpositionchange"),
      window.wafer.on(t, function (e) {
        var r = window.wafer.utils.get(e, ["meta", "videoData", "item", "id"]);
        if (!r)
          throw new Error(
            '"' + t + '" event has no id in "data.meta.videoData.id"',
          );
        var o = "tdv2-wafer-content-list-video-currentPlayingVideo",
          n = e.elem;
        n &&
          n.parentNode &&
          n.parentNode.getAttribute("data-state") &&
          (o = n.parentNode.getAttribute("data-state")),
          (window.wafer.state = _defineProperty({}, o, r));
      })),
      document.getElementById("product-drawer") &&
        (function () {
          var t = 0,
            e = window.wafer.utils.throttle(function (t) {
              var e = t.currentTarget;
              0 === e.scrollTop
                ? e.removeAttribute("data-scrolled")
                : e.setAttribute("data-scrolled", !0);
            }, 16);
          window.wafer.on("toggle:change", function (r) {
            var o = window.wafer.utils.get(r, ["meta", "action"]),
              n = window.wafer.utils.get(r, ["meta", "className"]),
              i = window.wafer.utils
                .get(r, ["meta", "target"])
                .querySelector(".drawer-card");
            i &&
              "drawer-show" === n &&
              ("addWithDelay" === o
                ? ((t =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0),
                  (document.body.style.position = "fixed"),
                  (document.body.style.overflow = "hidden"),
                  (document.body.style.top = "-" + t + "px"),
                  window.wafer.utils.bindEvent(i, "scroll", e))
                : "removeWithDelay" === o &&
                  ((document.body.style.position = ""),
                  (document.body.style.overflow = ""),
                  (document.body.style.top = ""),
                  window.scrollTo(0, t),
                  (i.scrollTop = 0),
                  i.removeAttribute("data-scrolled"),
                  window.wafer.utils.unbindEvent(i, "scroll", e)));
          });
          var r = document.getElementById("product-drawer-fab"),
            o = Number(r.dataset.fabStickyOffset) || 0,
            n = document.querySelector(r.dataset.fabStickyTarget || null);
          window.wafer.on("scroll", function (t) {
            if (
              "fixed" !== document.body.style.position &&
              (r.setAttribute("data-fab-show", t.scrollY > 0), n)
            ) {
              var e = window.wafer.utils.elementInView(
                n,
                { offsetY: o },
                window.wafer.base.viewport,
              );
              r.setAttribute("data-fab-sticky", e);
            }
          });
        })();
    var r = document.getElementById("author-twitter-timeline");
    r &&
      ((window.twttr = function (t, e, r) {
        var o,
          n = t.getElementsByTagName(e)[0],
          i = window.twttr || {};
        return (
          t.getElementById(r) ||
            (((o = t.createElement(e)).id = r),
            (o.src = "https://platform.twitter.com/widgets.js"),
            n.parentNode.insertBefore(o, n),
            (i._e = []),
            (i.ready = function (t) {
              i._e.push(t);
            })),
          i
        );
      }),
      (function (t) {
        window.twttr(document, "script", "twitter-wjs");
        var e = window.navigator.userAgent.indexOf("MSIE ");
        if ("undefined" != typeof window && window.twttr && e <= 0) {
          var r = t || {},
            o = r.children && r.children[0];
          o &&
            -1 === o.className.indexOf("twitter-tweet-rendered") &&
            window.twttr.widgets.load(r);
        }
      })(r)),
      e(),
      (function () {
        function t(t) {
          _toConsumableArray(
            t.querySelectorAll(".simple-list .pub-date-text[data-pub-date]"),
          ).forEach(function (t) {
            var e = t.getAttribute("data-pub-date") || "";
            t.textContent !== e && (t.textContent = e);
          });
        }
        t(document),
          window.wafer.on("fetch:success", function (e) {
            var r = window.wafer.utils.get(e, ["meta", "targetElem"]),
              o = r && r.querySelector(".simple-list");
            o && t(o);
          });
      })(),
      (function () {
        var t = window.location.search;
        if (t && -1 !== t.indexOf("tsrc=home")) {
          var e = document.querySelector(".stream-list");
          if (e) {
            var r = document.getElementById("ybar"),
              o = (r && r.offsetHeight) || 0;
            e.scrollIntoView(!0), window.scrollBy(0, -o);
          }
        }
      })();
  });
})();
