!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-scrollview", [], t)
      : "object" == typeof exports
        ? (exports["wafer-scrollview"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-scrollview"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(s) {
      if (i[s]) return i[s].exports;
      var r = (i[s] = { i: s, l: !1, exports: {} });
      return e[s].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    var i = {};
    return (
      (t.m = e),
      (t.c = i),
      (t.d = function (e, i, s) {
        t.o(e, i) ||
          Object.defineProperty(e, i, {
            configurable: !1,
            enumerable: !0,
            get: s,
          });
      }),
      (t.n = function (e) {
        var i =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(i, "a", i), i;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "https://s.yimg.com/aaq/wf/"),
      t((t.s = "./src/entry.js"))
    );
  })({
    "./src/entry.js": function (e, t, i) {
      "use strict";
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e) {
        if (Array.isArray(e)) {
          for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
          return i;
        }
        return Array.from(e);
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var s = t[i];
              (s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s);
            }
          }
          return function (t, i, s) {
            return i && e(t.prototype, i), s && e(t, s), t;
          };
        })(),
        h = "next",
        v = "prev",
        f = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = t.windowLimit,
              r = void 0 === i ? 5 : i;
            s(this, e),
              (this.active = null),
              (this.elemMapping = new Map()),
              (this.tail = null),
              (this.cycle = !1),
              (this.head = null),
              (this.scrollItemsLimit = Math.floor(r / 2));
          }
          return (
            d(e, [
              {
                key: "add",
                value: function (e) {
                  var t = this.tail,
                    i = this.elemMapping.size;
                  if (t) {
                    var s = this.elemMapping.get(t);
                    this.elemMapping.set(
                      e,
                      new Map([
                        ["index", i],
                        [h, s.get(h)],
                        [v, t],
                      ]),
                    ),
                      this.elemMapping.get(this.tail).set(h, e),
                      this.elemMapping.get(this.head).set(v, e),
                      (this.tail = e);
                  } else
                    this.elemMapping.set(
                      e,
                      new Map([
                        ["index", i],
                        [h, e],
                        [v, e],
                      ]),
                    ),
                      (this.head = this.tail = e);
                  this.active || (this.active = e);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.elemMapping.get(e),
                    i = t.get(v),
                    s = t.get(h),
                    r = this.elemMapping.get(i),
                    a = this.elemMapping.get(s);
                  r.set(h, s),
                    a.set(v, i),
                    e === this.active && (this.active = r),
                    e === this.tail && (this.tail = i),
                    e === this.head && (this.head = s),
                    this.elemMapping.delete(e);
                },
              },
              {
                key: "getActive",
                value: function () {
                  return this.active;
                },
              },
              {
                key: "setNextAsActive",
                value: function () {
                  this.active = this.elemMapping.get(this.active).get(h);
                },
              },
              {
                key: "setPreviousAsActive",
                value: function () {
                  this.active = this.elemMapping.get(this.active).get(v);
                },
              },
              {
                key: "getElementToAppend",
                value: function () {
                  var e = this.elemMapping.get(this.active),
                    t = e.get("index"),
                    i = this.elemMapping.size,
                    s = this.scrollItemsLimit;
                  if (this.cycle) {
                    i <= 2 ? (s = 0) : i <= 3 && (s = 1);
                    return this.getForward(s + 1);
                  }
                  return t < s
                    ? null
                    : i > t + s - 1
                      ? this.getForward(s + 1)
                      : null;
                },
              },
              {
                key: "getElementToPrepend",
                value: function () {
                  var e = this.elemMapping.get(this.active),
                    t = e.get("index"),
                    i = this.elemMapping.size,
                    s = this.scrollItemsLimit;
                  return this.cycle
                    ? this.getBackward(s)
                    : t >= i - s
                      ? null
                      : t - s - 1 >= 0
                        ? this.getBackward(s + 1)
                        : null;
                },
              },
              {
                key: "getForward",
                value: function (e) {
                  for (var t = 0, i = this.active; t++ < e; ) {
                    if (
                      ((i = this.elemMapping.get(i).get(h)),
                      !this.cycle && i === this.head)
                    )
                      return null;
                  }
                  return i;
                },
              },
              {
                key: "getBackward",
                value: function (e) {
                  for (var t = 0, i = this.active; t++ < e; ) {
                    if (
                      ((i = this.elemMapping.get(i).get(v)),
                      !this.cycle && this.tail === i)
                    )
                      return null;
                  }
                  return i;
                },
              },
              {
                key: "appendWithReplace",
                value: function (e, t) {
                  e = e || this.active;
                  var i = this.elemMapping.get(e),
                    s = i.get(v),
                    r = i.get(h),
                    a = t[0],
                    n = a,
                    l = s;
                  this.elemMapping.get(s).set(h, n);
                  for (var o = 1; o < t.length; o++) {
                    var u = t[o];
                    this.elemMapping.set(
                      n,
                      new Map([
                        [h, u],
                        [v, l],
                      ]),
                    ),
                      (l = n),
                      (n = u);
                  }
                  this.elemMapping.set(n).set(
                    n,
                    new Map([
                      [h, r],
                      [v, l],
                    ]),
                  ),
                    this.elemMapping.get(r).set(v, n),
                    e === this.head
                      ? (this.head = a)
                      : e === this.tail && (this.tail = n),
                    e === this.active && (this.active = a),
                    this.elemMapping.delete(e);
                  for (
                    var c = this.elemMapping.get(s), d = c.get("index");
                    c;

                  ) {
                    var f = c.get(h);
                    (c = this.elemMapping.get(f)),
                      c.set("index", ++d),
                      f === this.tail && (c = null);
                  }
                },
              },
              {
                key: "size",
                get: function () {
                  return this.elemMapping.size;
                },
              },
            ]),
            e
          );
        })(),
        p = f,
        m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
            }
            return e;
          },
        g = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var s = t[i];
              (s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s);
            }
          }
          return function (t, i, s) {
            return i && e(t.prototype, i), s && e(t, s), t;
          };
        })(),
        w = function e(t, i, s) {
          null === t && (t = Function.prototype);
          var r = Object.getOwnPropertyDescriptor(t, i);
          if (void 0 === r) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, i, s);
          }
          if ("value" in r) return r.value;
          var n = r.get;
          if (void 0 !== n) return n.call(s);
        },
        y = window.wafer,
        b = y.base,
        _ = y.constants,
        E = y.features,
        A = y.utils,
        k = y.WaferBaseClass,
        S = E.smoothScroll,
        C = E.transformProperty,
        L = _.ATTR_PREFIX,
        x = A.bindEvent,
        T = A.clearAndSetInnerHTML,
        O = A.clearTimeout,
        M = A.convertNodeListToArray,
        P = A.debounce,
        B = A.elementInView,
        D = A.fetchWithCache,
        W = A.findAncestor,
        I = A.getConfigFromJSONScriptNode,
        N = A.getFocusableElems,
        V = A.isVisible,
        j = A.removeTransition,
        F = A.setTimeout,
        X = A.setTransition,
        U = A.unbindEvent,
        z = 5,
        Y = 250,
        R = "ease-out",
        H = "active",
        q = "visited",
        J = [
          "indicatorClick",
          "indicatorMouseLeave",
          "indicatorMouseover",
          "next",
          "pause",
          "prev",
          "resume",
          "stateDidUpdate",
          "tabClick",
        ],
        G = ["index"],
        K = "ontouchstart" in window,
        Q = function (e, t) {
          K && (e.style.cursor = t);
        },
        Z = (function () {
          var e = [],
            t = !1;
          return {
            add: function (t, i) {
              e.push(
                (function (e) {
                  return function () {
                    return t.call(e);
                  };
                })(i),
              ),
                this.exec(i._util.transitionDuration);
            },
            exec: function (i) {
              var s = this;
              t ||
                ((t = !0),
                F(function () {
                  var r = e.shift();
                  switch (((t = !1), r.call(), e.length)) {
                    case 0:
                      return;
                    case 1:
                      s.exec(i);
                    case 2:
                      s.exec(i + 50);
                    default:
                      s.exec(0);
                  }
                }, i));
            },
          };
        })(),
        $ = (function (e) {
          function t(e) {
            var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              s = i.counter,
              r = void 0 === s ? 0 : s,
              l = i.syncDelay,
              o = void 0 === l ? 25 : l;
            a(this, t);
            var u = n(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  {},
                  { STATE_ATTRS: G },
                ),
              ),
              c = e.getAttribute(L + "behavior"),
              d = e.getAttribute(L + "snap-behavior"),
              h = e.getElementsByClassName("wafer-indicators-counts")[0],
              v = I(h).counts,
              f = e.getAttribute(L + "pagination-target"),
              g =
                parseInt(e.getAttribute(L + "has-indicator-pagination"), 10) ||
                0,
              w =
                (f && M(document.body.querySelectorAll(f))) ||
                M(e.getElementsByClassName("indicators")),
              y = e.getAttribute(L + "cycle"),
              _ = void 0,
              E = void 0,
              A = void 0,
              k = void 0,
              S = void 0;
            if (
              (w.some(function (e) {
                (_ = e.getAttribute(L + "pagination-type") || "default"),
                  "count" === _
                    ? ((E = M(e.getElementsByClassName("current-page"))[0]),
                      (k = e))
                    : ((S = e), (A = e ? M(e.children) : null));
              }),
              (u._util = m({}, u._util, {
                elem: e,
                indicatorCountElem: E,
                indicatorElems: w,
                indicatorItems: A,
                indicatorPagination: g,
                indicatorsCustomCount: v,
                indicatorType: _,
                indicatorWithCountElem: k,
                indicatorWithoutCountElem: S,
                snapBehavior: d,
                sliderElem: M(e.getElementsByClassName("slides"))[0] || e,
                behavior: c,
                nextBtn: M(e.getElementsByClassName("next-btn"))[0],
                prevBtn: M(e.getElementsByClassName("prev-btn"))[0],
              })),
              J.forEach(function (e) {
                u[e] = u[e].bind(u);
              }),
              "native" === c)
            ) {
              var C = e.getAttribute(L + "scroll-snap"),
                x = e.getAttribute(L + "scroll-snap-increment-by");
              (u._state = u._state || {}),
                (u._util.isUsingScrollSnap =
                  null === C || void 0 === C ? 0 : Number(C)),
                (u._util.scrollSnapIncrementBy =
                  null === x || void 0 === x ? 1 : Number(x));
              var T = u._util.sliderElem;
              (u._state.activeElem = null),
                (u._syncWithDebounce = P(u.scrollViewWithNativeSync, o, u));
              var O = M(T.children);
              return (
                O.some(function (e) {
                  return (
                    !!e.classList.contains(H) && ((u._state.activeElem = e), !0)
                  );
                }),
                C &&
                  O.some(function (e) {
                    return (
                      !e.classList.contains("tab") ||
                      (e.classList.add("has-scrollsnap-click", "has-click"), !1)
                    );
                  }),
                (u._state.activeElem = u._state.activeElem || O[0]),
                u._state.activeElem.classList.add("active"),
                u.snapNativeScrollViewToActiveElement({
                  calledOnLoad: !0,
                  source: "onLoad",
                }),
                u.checkAndAddActiveClassForNativeOverflow(),
                u.addEventListeners(),
                n(u)
              );
            }
            var B = e.getAttribute(L + "edge-padding") || "",
              D = parseInt(B, 10) || 0,
              N = parseInt(e.getAttribute(L + "right-padding"), 10) || 0,
              V = e.getAttribute(L + "resize-end"),
              j = e.getAttribute(L + "boundary"),
              U = e.getAttribute(L + "trigger-wf-during-transition"),
              K = e.getAttribute(L + "scrollview-td"),
              Z = Number(e.getAttribute(L + "auto-switch")) || 0,
              $ = Number(e.getAttribute(L + "auto-switch-disable-hover")) || 0,
              ee = Number(e.getAttribute(L + "disable-touch")) || 0,
              te = Number(e.getAttribute(L + "disable-click-navigation")) || 0,
              ie = Number(e.getAttribute(L + "auto-switch-timeout")) || 2e3,
              se = e.getAttribute(L + "scrollview-ttf"),
              re = new p({ windowLimit: z }),
              ae = j && W(e, j);
            (y = null === y || void 0 === y ? 0 : Number(y)), (re.cycle = y);
            var ne = (u._util = m({}, u._util, {
              autoSwitchDisableHover: $,
              autoSwitchTimeout: ie,
              _switchScrollTimeout: null,
              boundaryElem: ae,
              counter: r,
              cycle: y,
              dataList: re,
              disableClickNavigation: te,
              disableTouch: ee,
              drag: {
                endX: 0,
                endY: 0,
                isVerticalDirection: !1,
                startX: 0,
                startY: 0,
              },
              edgePadding: D,
              elem: e,
              index: null,
              resizeEnd: null === V || void 0 === V ? 0 : Number(V),
              rightPadding: N,
              shouldAutoSwitch: Z,
              sliderItemsDataMapping: new Map(),
              transitionDuration: null === K || void 0 === K ? Y : Number(K),
              transitionTimingFunction: null === se || void 0 === se ? R : se,
              triggerWafersDuringTransition: "1" === U ? 1 : 0,
            }));
            B &&
              -1 !== B.indexOf("%") &&
              ((ne.edgePaddingPercentage = parseInt(B.replace("%", ""), 10)),
              (ne.edgePadding = 0)),
              (u._state = {
                autoSwitchInProgress: !1,
                autoSwitchPausedByUser: !1,
                hasBeenThreadmilled: !1,
                mouseOnElement: !1,
                slideWidth: null,
                triggerNodeMap: new Map(),
                virtualCounter: null,
              }),
              (ne.sliderItems = M(ne.sliderElem.children));
            var le = ne.sliderItems.length;
            if (
              ((u._state.slideWidth = 100 / le),
              u.updateWidth(),
              X(
                ne.sliderElem,
                "transform",
                ne.transitionDuration,
                ne.transitionTimingFunction,
              ),
              Q(ne.sliderElem, "-webkit-grab"),
              ne.edgePaddingPercentage)
            ) {
              var oe = (ne.itemWidth * ne.edgePaddingPercentage) / 100;
              ne.sliderElem.style["padding-left"] = oe + "px";
            } else ne.sliderElem.style["padding-left"] = ne.edgePadding + "px";
            for (
              var ue = document.createDocumentFragment(),
                ce = void 0,
                de = !1,
                he = 0;
              he < le;
              he++
            ) {
              var ve = ne.sliderItems[he];
              re.add(ve),
                (ve.style.width = u._state.slideWidth + "%"),
                !de &&
                  he > 0 &&
                  ve.classList.contains(H) &&
                  ((ce = he), (de = !0)),
                ue.appendChild(ve);
            }
            if ((ne.sliderElem.appendChild(ue), ce))
              for (var fe = 0; fe < ce; fe++) u.showCurrent(1);
            return (
              u.addEventListeners(),
              u.addAriaAttributes(),
              0 !== r ||
                ce ||
                (u.preFetch(),
                u.updateIndicators(r),
                u.updateButtons(!0),
                re.getActive().classList.add(H, q)),
              e.classList.add("wafer-scrollview-rendered"),
              window.wafer.ready(function () {
                F(function () {
                  u._util.index && u.scrollToIndex(u._util.index),
                    u.setTimeoutForAutoSwitch(),
                    b.emitWaferEvent("scrollview:ready", { elem: e, meta: {} });
                }, 40);
              }),
              u
            );
          }
          return (
            l(t, e),
            g(t, [
              {
                key: "addAriaAttributes",
                value: function (e) {
                  var t = this._util;
                  (t.sliderItems = M(t.sliderElem.children)),
                    (e = e || t.dataList.getActive());
                  for (
                    var i = t.sliderItems.length, s = !1, r = 0;
                    r < i;
                    r++
                  ) {
                    var a = t.sliderItems[r];
                    (s = e !== a), a.setAttribute("aria-hidden", s + "");
                    var n = N(a);
                    s
                      ? n.forEach(function (e) {
                          e.setAttribute("tabindex", "-1");
                        })
                      : n.forEach(function (e) {
                          e.removeAttribute("tabindex");
                        });
                  }
                },
              },
              {
                key: "scrollViewWithNativeSync",
                value: function () {
                  if (!this._state.locked) {
                    var e = this._util,
                      t = e.sliderElem,
                      i = e.indicatorItems,
                      s = e.prevBtn,
                      r = e.nextBtn;
                    if (i || s || r) {
                      var a = this._state.activeElem,
                        n = a,
                        l = M(t.children),
                        o = l.indexOf(n),
                        u = window.getComputedStyle(t),
                        c = 0,
                        d = -100;
                      if (u) {
                        var h = u.getPropertyValue("padding-left");
                        h &&
                          ((d = parseInt(h.replace("px", ""), 10)),
                          (d = 0 === d ? -100 : -1 * d));
                      }
                      a && a.classList.remove("active");
                      for (var v = 0; v < l.length; v++) {
                        c = v;
                        var f = l[v];
                        if (
                          B(
                            f,
                            { offsetX: d, offsetY: 0 },
                            t.getBoundingClientRect(),
                          )
                        ) {
                          (this._state.activeElem = f),
                            this._state.activeElem.classList.add("active");
                          break;
                        }
                      }
                      var p = this._state.activeElem;
                      this.updateButtons(!0),
                        n !== p &&
                          ((this._state.scrollLeft = t.scrollLeft),
                          this.updateIndicators(l.indexOf(p) || 0),
                          b.emitWaferEvent("scrollview:change", {
                            elem: t,
                            meta: {
                              source: "scroll",
                              index: c + 1,
                              prevIndex: o + 1,
                            },
                          }));
                    }
                    b.sync(t);
                  }
                },
              },
              {
                key: "slidesHasBeenUpdated",
                value: function () {
                  var e = this._util;
                  e.sliderItems = M(e.sliderElem.children);
                  var t = e.sliderItems.length;
                  this._state.slideWidth = 100 / t;
                  for (var i = 0; i < t; i++) {
                    e.sliderItems[i].style.width = this._state.slideWidth + "%";
                  }
                  this.updateWidth();
                },
              },
              {
                key: "updateWidth",
                value: function () {
                  var e = this._util,
                    t = this._state.virtualCounter,
                    i = e.edgePadding,
                    s = e.edgePaddingPercentage,
                    r = e.rightPadding,
                    a = e.sliderElem,
                    n = e.sliderItems;
                  a.style.width = "";
                  var l = a.clientWidth;
                  if (s) {
                    var o = (l * e.edgePaddingPercentage) / 100;
                    (e.sliderElem.style["padding-left"] = o + "px"),
                      (e.itemWidth = l - 2 * o);
                  } else e.itemWidth = i ? l - 2 * i : r ? l - r : l;
                  (a.style.width = e.itemWidth * n.length + "px"),
                    (a.style[C] =
                      "translateX(-" +
                      (t * e.itemWidth + this.negativeWidthCoefficient) +
                      "px)");
                },
              },
              {
                key: "removeSlide",
                value: function (e) {
                  var t = this._util,
                    i = t.sliderItems.indexOf(e);
                  if (-1 !== i) {
                    var s = t.indicatorItems[i],
                      r = t.dataList;
                    e.parentNode.removeChild(e),
                      this.slidesHasBeenUpdated(),
                      s.parentNode.removeChild(s),
                      t.indicatorItems.splice(i, 1),
                      r.remove(e);
                  }
                },
              },
              {
                key: "addEventListeners",
                value: function () {
                  var e = this,
                    i = this._util,
                    s = i.behavior,
                    r = i.elem,
                    a = i.sliderElem,
                    n = "native" === s;
                  n &&
                    (window.wafer.ready(function () {
                      window.wafer.on(
                        "video:playlistpositionchange",
                        function () {
                          var t = a.getElementsByClassName("active")[0],
                            i = a.getElementsByClassName(
                              "wafer-playlist-active",
                            )[0],
                            s = M(a.children).indexOf(i);
                          if (t !== i && -1 !== s) {
                            var r = i.getBoundingClientRect(),
                              n = r.width,
                              l = s * n;
                            t.classList.remove("active"),
                              i.classList.add("active"),
                              (e._state.activeElem = i),
                              S
                                ? a.scrollTo({
                                    behavior: "smooth",
                                    left: l,
                                    top: 0,
                                  })
                                : a.scrollTo(l, 0),
                              e.updateButtons(!0);
                          }
                        },
                      );
                    }),
                    x(a || r, "scroll", this._syncWithDebounce));
                  var l = this._util.indicatorItems;
                  if (l) {
                    var o = this._util.indicatorWithoutCountElem;
                    o &&
                      (l.forEach(function (e, t) {
                        e.setAttribute("data-index", t);
                      }),
                      x(o, "click", this.indicatorClick));
                    this._util.shouldAutoSwitch &&
                      o &&
                      (x(o, "mouseover", this.indicatorMouseover),
                      x(o, "mouseleave", this.indicatorMouseLeave));
                  }
                  n ||
                    w(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "addEventListeners",
                      this,
                    ).call(this);
                },
              },
              {
                key: "scrollToIndex",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = t.source,
                    s = this._util,
                    r = s.behavior,
                    a = s.counter;
                  if ("native" === r) {
                    var n = this._state.activeElem,
                      l = M(n.parentNode.children),
                      o = l[e];
                    if (o === n) return;
                    n.classList.remove("active"),
                      (this._state.activeElem = o),
                      this._state.activeElem.classList.add("active"),
                      this.snapNativeScrollViewToActiveElement({
                        calledOnLoad: !1,
                        source: "indexChange",
                      });
                  } else if (a > e)
                    for (var u = 0; u < a - e; u++)
                      this.showCurrent(-1, { source: i });
                  else if (a < e)
                    for (var c = 0; c < e - a; c++)
                      this.showCurrent(1, { source: i });
                },
              },
              {
                key: "pauseAutoSwitch",
                value: function () {
                  if (this._util.shouldAutoSwitch) {
                    var e = this._util.sliderElem.parentNode;
                    (this._state.autoSwitchInProgress = !1),
                      this._util._switchScrollTimeout &&
                        O(this._util._switchScrollTimeout, this),
                      e && e.setAttribute("aria-busy", "false");
                  }
                },
              },
              {
                key: "setTimeoutForAutoSwitch",
                value: function () {
                  var e = this;
                  if (
                    this._util.shouldAutoSwitch &&
                    !this._state.autoSwitchPausedByUser &&
                    !this._state.autoSwitchInProgress &&
                    !this._state.mouseOnElement
                  ) {
                    this._state.autoSwitchInProgress = !0;
                    var t = this._util.autoSwitchTimeout;
                    this.pauseAutoSwitch(),
                      (this._util._switchScrollTimeout = F(
                        function () {
                          e.showCurrent(1, {
                            source: "autoscroll",
                            type: "next",
                          });
                        },
                        t,
                        this,
                      ));
                  }
                },
              },
              {
                key: "removeEventListeners",
                value: function () {
                  var e = this._util,
                    i = e.behavior,
                    s = e.elem,
                    r = e.indicatorWithCountElem,
                    a = e.shouldAutoSwitch,
                    n = e.sliderElem;
                  if ("native" === i)
                    return void U(n || s, "scroll", this._syncWithThrottle);
                  r && U(r, "click", this.indicatorClick),
                    a &&
                      r &&
                      (x(r, "mouseover", this.indicatorMouseover),
                      x(r, "mouseleave", this.indicatorMouseLeave)),
                    this.pauseAutoSwitch(),
                    w(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "removeEventListeners",
                      this,
                    ).call(this);
                },
              },
              {
                key: "preFetch",
                value: function () {
                  if (!window.wafer.base.isBot)
                    for (var e = this._util.dataList, t = 0; t < 3; t++) {
                      var i = e.getForward(t),
                        s = e.getBackward(t);
                      i && this.renderSlide(i, { prefetch: !0 }),
                        s && this.renderSlide(s, { prefetch: !0 });
                    }
                },
              },
              {
                key: "snapNativeScrollViewToActiveElement",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.calledOnLoad,
                    i = void 0 !== t && t,
                    s = e.source,
                    r = e.triggerEvent,
                    a = void 0 === r || r,
                    n = this._util,
                    l = n.sliderElem,
                    o = n.indicatorItems,
                    u = this._state.activeElem;
                  if (!u || (i && 0 === l.scrollLeft))
                    return void this.updateButtons(!0);
                  var c = this._util.isUsingScrollSnap,
                    d =
                      parseInt(
                        window
                          .getComputedStyle(l)
                          .scrollPaddingLeft.replace("px", ""),
                        10,
                      ) || 0,
                    h = u.offsetLeft - l.scrollLeft - l.offsetLeft;
                  a &&
                    (h -=
                      "click" === s
                        ? l.clientWidth / 2 - u.offsetWidth / 2 + d
                        : u.offsetWidth / 2),
                    c
                      ? S
                        ? l.scrollBy({ behavior: "smooth", left: h, top: 0 })
                        : l.scrollBy(h, 0)
                      : (l.scrollLeft += h),
                    a &&
                      (o || this.updateButtons(!0),
                      b.emitWaferEvent("scrollview:change", {
                        elem: u,
                        meta: { source: s },
                      }));
                },
              },
              {
                key: "handleResize",
                value: function () {
                  if ("native" === this._util.behavior)
                    return void this.checkAndAddActiveClassForNativeOverflow();
                  var e = this._util.sliderElem;
                  if (V(e)) {
                    j(e);
                    var t = this._util,
                      i = t.cycle,
                      s = t.transitionDuration,
                      r = t.transitionTimingFunction;
                    i ? this.slidesHasBeenUpdated() : this.updateWidth(),
                      F(function () {
                        X(e, "transform", s, r);
                      }, 0);
                  }
                },
              },
              {
                key: "handleFetch",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    s = i.fetchBody,
                    r = i.fetchUrl,
                    a = i.prefetch,
                    n = void 0 !== a && a,
                    l = i.replace,
                    o = void 0 !== l && l,
                    u = i.resultSelector;
                  if (!n || e.parentNode) {
                    var c = this._util,
                      d = c.dataList,
                      h = c.sliderItemsDataMapping;
                    h.has(e) || h.set(e, {});
                    var v = h.get(e);
                    !r || (void 0 !== v.fetchStatus && 2 !== v.fetchStatus)
                      ? (n ? b.prefetch(e) : b.sync(e),
                        o && this.slidesHasBeenUpdated())
                      : ((v.fetchStatus = 0),
                        D(r, { body: s })
                          .then(function () {
                            var i =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              s = i.assets,
                              r = void 0 === s ? {} : s,
                              a = i.html;
                            if (!t._destroyed && a) {
                              var l = void 0,
                                c = !1;
                              if ((b.destroy(e), o)) {
                                var h = document.createElement("div"),
                                  f = e.parentNode,
                                  p = M(f.children);
                                h.innerHTML = a;
                                var m = u && h.querySelector(u),
                                  g = M((m || h || {}).children),
                                  w = p.indexOf(e),
                                  y = e === d.tail;
                                d.appendWithReplace(e, g),
                                  -1 !== w &&
                                    (g.forEach(function (t) {
                                      f.insertBefore(t, e);
                                    }),
                                    y &&
                                      (f.removeChild(p[0]),
                                      (t._state.virtualCounter = Math.floor(
                                        z / 2,
                                      )),
                                      (c = e !== d.tail)),
                                    f.removeChild(e)),
                                  (l = f),
                                  (t._state.hasBeenThreadmilled = !1);
                              } else T(e, a), (l = e);
                              (v.fetchStatus = 1),
                                b.syncAssets(r),
                                n ? b.prefetch(e) : b.sync(l),
                                c && j(t._util.sliderElem),
                                o && t.slidesHasBeenUpdated();
                            }
                          })
                          .catch(function (i) {
                            t._destroyed ||
                              (b.emitError({
                                name: "WaferScrollview",
                                elem: e,
                                meta: { fetchUrl: r },
                                stack: i.stack || i.message,
                              }),
                              (v.fetchStatus = 2));
                          }));
                  }
                },
              },
              {
                key: "renderSlide",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = t.prefetch,
                    s = void 0 !== i && i,
                    r = this._util.sliderElem;
                  if (!s || B(r, { offsetX: 0, offsetY: 0 }, b.viewport)) {
                    var a = void 0,
                      n = void 0,
                      l = void 0,
                      o = void 0,
                      u = e.getAttribute(L + "url");
                    switch (
                      (u &&
                        ((a = "fetch"),
                        (l = !!Number(e.getAttribute(L + "replace"))),
                        (n = e.getAttribute(L + "result-selector")),
                        (o = e.getAttribute(L + "body"))),
                      a)
                    ) {
                      case "fetch":
                        this.handleFetch(e, {
                          fetchBody: o,
                          fetchUrl: u,
                          prefetch: s,
                          replace: l,
                          resultSelector: n,
                        });
                        break;
                      default:
                        s
                          ? b.prefetch(e)
                          : F(function () {
                              b.sync(e);
                            }, this._util.transitionDuration);
                    }
                  }
                },
              },
              {
                key: "updateElemsUsingVirtualElements",
                value: function (e, t) {
                  var i = this,
                    s = this._util,
                    r = this._state,
                    a = s.cycle,
                    n = s.dataList,
                    l = s.itemWidth,
                    o = s.sliderElem,
                    u = s.transitionTimingFunction,
                    c = s.transitionDuration,
                    d = n.size,
                    h = r.slideWidth,
                    v = r.virtualCounter;
                  if (1 === e) {
                    var f = t + 1 > d;
                    if (a || !f) {
                      var p = n.getElementToAppend();
                      if (
                        (p && (p.style.width = h + "%"),
                        X(o, "transform", c, u),
                        (o.style[C] =
                          "translateX(-" +
                          (((v || 0) + 1) * l + this.negativeWidthCoefficient) +
                          "px)"),
                        null === v)
                      )
                        return (
                          (r.virtualCounter = 1),
                          (this._util.counter = t),
                          n.setNextAsActive(),
                          void this.scrollViewTransformAnimationDidComplete()
                        );
                      if ((r.virtualCounter++, n.setNextAsActive(), !p)) return;
                      Z.add(function () {
                        var e = s.itemWidth,
                          t = s.sliderElem,
                          a = M(t.children);
                        t.removeChild(a[0]),
                          t.appendChild(p),
                          (s.sliderItems = M(t.children)),
                          r.virtualCounter--,
                          j(t),
                          (t.style[C] =
                            "translateX(-" + r.virtualCounter * e + "px)"),
                          i.scrollViewTransformAnimationDidComplete();
                      }, this);
                    }
                  } else if (-1 === e) {
                    var m = t < 0;
                    if (a || !m) {
                      var g = n.getElementToPrepend();
                      if (
                        (g && (g.style.width = h + "%"),
                        X(o, "transform", c, u),
                        (o.style[C] = "translateX(-" + (v - 1) * l + "px)"),
                        r.virtualCounter--,
                        n.setPreviousAsActive(),
                        !g)
                      )
                        return;
                      Z.add(function () {
                        var e = s.itemWidth,
                          t = s.sliderElem,
                          a = M(t.children);
                        t.removeChild(a[a.length - 1]),
                          t.prepend(g),
                          (s.sliderItems = M(t.children)),
                          r.virtualCounter++,
                          j(t),
                          (t.style[C] =
                            "translateX(-" + r.virtualCounter * e + "px)"),
                          i.scrollViewTransformAnimationDidComplete();
                      }, this);
                    }
                  }
                },
              },
              {
                key: "showCurrent",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = t.source,
                    s = this._util,
                    a = s.boundaryElem,
                    n = s.counter,
                    l = s.cycle,
                    o = s.dataList,
                    u = s.elem,
                    c = s.itemWidth,
                    d = s.sliderElem,
                    h = o.size,
                    v = n;
                  if (
                    (d.parentNode.setAttribute("aria-busy", "true"),
                    this.isValidMove(e))
                  ) {
                    if (l) {
                      if (1 === e) {
                        var f = v + 1 >= h;
                        v = f ? 0 : n + e;
                      } else if (-1 === e) {
                        var p = v <= 0;
                        v = p ? h - 1 : n + e;
                      }
                    } else v = n + e;
                    if ((o.getActive().classList.remove(H), v !== n)) {
                      if (!this._state.hasBeenThreadmilled) {
                        for (; [].concat(r(d.children)).length > z; )
                          d.removeChild(d.children[z]);
                        (s.sliderItems = M(d.children)),
                          this.slidesHasBeenUpdated(),
                          (this._state.hasBeenThreadmilled = !0);
                      }
                      this.updateElemsUsingVirtualElements(e, v),
                        (this._util.counter = v);
                      var m = o.getActive();
                      m.classList.add(H, q),
                        this.renderSlide(m),
                        this.updateIndicators(v, n),
                        this.updateButtons(),
                        this.triggerOnChange(),
                        this.preFetch(),
                        v + 1 === h
                          ? (u.classList.add("wafer-scrollview-reached-end"),
                            a &&
                              a.classList.add(
                                "wafer-scrollview-boundary-reached-end",
                              ))
                          : (u.classList.remove("wafer-scrollview-reached-end"),
                            a &&
                              a.classList.remove(
                                "wafer-scrollview-boundary-reached-end",
                              )),
                        b.emitWaferEvent("scrollview:change", {
                          elem: u,
                          meta: { source: i, index: v + 1, prevIndex: n + 1 },
                        });
                    } else {
                      o.getActive().classList.add(H, q);
                      var g = this._state.virtualCounter,
                        w =
                          "translateX(-" +
                          (g * c + this.negativeWidthCoefficient) +
                          "px)";
                      w !== this._util.transformValue &&
                        ((d.style[C] = w), (this._util.transformValue = w));
                    }
                    (this._util.index = v), this.didComplete(null, v);
                  }
                },
              },
              {
                key: "triggerOnChange",
                value: function () {
                  var e = this._state.triggerNodeMap,
                    t = this._util,
                    i = t.dataList,
                    s = i.getActive(),
                    r = [];
                  e.has(s)
                    ? (r = e.get(s))
                    : ((r = M(
                        s.getElementsByClassName(
                          "wafer-scrollview-trigger-on-active",
                        ),
                      )),
                      e.set(s, r)),
                    r.forEach(function (e) {
                      b.trigger(e);
                    });
                },
              },
              {
                key: "updateIndicators",
                value: function (e, t) {
                  var i = this._util,
                    s = i.indicatorElems,
                    r = i.indicatorCountElem,
                    a = i.indicatorsCustomCount,
                    n = i.indicatorItems;
                  if (n) {
                    if (this._util.shouldAutoSwitch)
                      for (var l = 0; l < n.length; l++) {
                        var o = n[l],
                          u = l < e;
                        u ? o.classList.add(q) : o.classList.remove(q);
                      }
                    var c = void 0;
                    if (void 0 === t) {
                      var d = s[0];
                      d && (c = d.getElementsByClassName(H)[0]);
                    } else c = n[t];
                    var h = n[e];
                    c &&
                      (c.classList.remove(H),
                      c.removeAttribute("aria-current")),
                      h &&
                        (h.classList.add(H, q),
                        h.setAttribute("aria-current", !0));
                  }
                  r && (r.innerHTML = (a && a[e]) || e + 1);
                },
              },
              {
                key: "updateButtons",
                value: function (e) {
                  var t = this._util,
                    i = t.behavior,
                    s = t.elem,
                    r = t.sliderElem,
                    a = t.nextBtn,
                    n = t.prevBtn;
                  if ("native" !== i) {
                    var l = t.counter,
                      o = t.cycle,
                      u = t.dataList,
                      c = u.size;
                    a &&
                      ((o && !e) || l !== c - 1
                        ? (s.classList.remove("wafer-scrollview-next-disabled"),
                          a.removeAttribute("disabled"))
                        : (s.classList.add("wafer-scrollview-next-disabled"),
                          a.setAttribute("disabled", !0))),
                      n &&
                        ((o && !e) || 0 !== l
                          ? (s.classList.remove(
                              "wafer-scrollview-prev-disabled",
                            ),
                            n.removeAttribute("disabled"))
                          : (s.classList.add("wafer-scrollview-prev-disabled"),
                            n.setAttribute("disabled", !0)));
                  } else if (a || n) {
                    var d = 0 === r.scrollLeft,
                      h =
                        Math.abs(r.scrollLeft) >= r.scrollWidth - r.clientWidth;
                    a &&
                      (h
                        ? (s.classList.add("wafer-scrollview-next-disabled"),
                          a.setAttribute("disabled", !0))
                        : (s.classList.remove("wafer-scrollview-next-disabled"),
                          a.removeAttribute("disabled"))),
                      n &&
                        (d
                          ? (s.classList.add("wafer-scrollview-prev-disabled"),
                            n.setAttribute("disabled", !0))
                          : (s.classList.remove(
                              "wafer-scrollview-prev-disabled",
                            ),
                            n.removeAttribute("disabled")));
                  }
                },
              },
              {
                key: "updateAfterDrag",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = this._util.drag,
                    i = t.currentDirection,
                    s = t.endX,
                    r = t.horizontalDirection,
                    a = t.startX,
                    n = s - a,
                    l = i === r;
                  l && n > 0 && Math.abs(n) > 30
                    ? this.showCurrent(-1, e)
                    : l && n < 0 && Math.abs(n) > 30
                      ? this.showCurrent(1, e)
                      : this.showCurrent();
                },
              },
              {
                key: "handlePause",
                value: function () {
                  var e = this._util,
                    t = e.elem,
                    i = e.shouldAutoSwitch,
                    s = e.sliderElem;
                  i &&
                    t.classList.add(
                      "wafer-scrollview-autoswitch-paused-by-user",
                      "wafer-scrollview-autoswitch-paused",
                    ),
                    (this._state.autoSwitchPausedByUser = !0),
                    this.pauseAutoSwitch();
                  var r = s.parentNode;
                  r && r.setAttribute("aria-live", "polite");
                },
              },
              {
                key: "handleResume",
                value: function () {
                  var e = this._util.sliderElem;
                  this.resetAutoSwitchState(), this.setTimeoutForAutoSwitch();
                  var t = e.parentNode;
                  t && t.setAttribute("aria-live", "off");
                },
              },
              {
                key: "didLock",
                value: function () {
                  this.pauseAutoSwitch();
                },
              },
              {
                key: "didUnLock",
                value: function () {
                  this.setTimeoutForAutoSwitch();
                },
              },
              {
                key: "isValidMove",
                value: function (e) {
                  var t = this._util,
                    i = t.counter,
                    s = t.cycle,
                    r = t.dataList,
                    a = r.size;
                  return s
                    ? (1 === e && i <= a - 1) || (-1 === e && i >= 0) || 0 === e
                    : (1 === e && i < a - 1) || (-1 === e && i > 0) || 0 === e;
                },
              },
              {
                key: "grab",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = this._util.drag;
                  (this._util.pointerDown = !1),
                    t.endX && this.updateAfterDrag(e),
                    this.clearDrag();
                },
              },
              {
                key: "grabbing",
                value: function () {
                  var e = this._util,
                    t = e.drag,
                    i = e.elem,
                    s = e.itemWidth,
                    r = e.sliderElem,
                    a = e.triggerWafersDuringTransition,
                    n = this._state.virtualCounter,
                    l = t.startX,
                    o = t.endX,
                    u = -1 * (n * s + (l - o)),
                    c = "translateX(" + u + "px)";
                  a && 2 * Math.abs(u) >= s && b.sync(i),
                    c !== this._util.transformValue &&
                      ((this._util.drag.grabbing = !0),
                      (r.style[C] = c),
                      (this._util.transformValue = c));
                },
              },
              {
                key: "clearDrag",
                value: function () {
                  var e = this;
                  (this._util.drag = {
                    currentDirection: null,
                    endX: 0,
                    endY: 0,
                    grabbing: !1,
                    horizontalDirection: 0,
                    last: 0,
                    startX: 0,
                    startY: 0,
                  }),
                    this._util.grabTimeout && O(this._grabTimeout),
                    (this._util.grabTimeout = F(function () {
                      e._util.drag && (e._util.drag.isVerticalDirection = !1);
                    }, 50));
                },
              },
              {
                key: "indicatorClick",
                value: function (e) {
                  var t = e.target,
                    i = t.getAttribute("data-index");
                  i &&
                    this.scrollToIndex(parseInt(i, 10), {
                      source: "indicator",
                    });
                },
              },
              {
                key: "scrollViewTransformAnimationDidComplete",
                value: function () {
                  var e = this._util,
                    t = e.sliderElem;
                  (this._state.autoSwitchInProgress = !1),
                    this.setTimeoutForAutoSwitch();
                  var i = e.dataList;
                  t.parentNode.setAttribute("aria-busy", "false");
                  var s = i.getActive();
                  this.addAriaAttributes(s);
                },
              },
              {
                key: "indicatorMouseover",
                value: function (e) {
                  this._util.autoSwitchDisableHover ||
                    ((this._state.mouseOnElement = !0), this.pauseAutoSwitch());
                },
              },
              {
                key: "indicatorMouseLeave",
                value: function (e) {
                  this._util.autoSwitchDisableHover ||
                    ((this._state.mouseOnElement = !1),
                    this.setTimeoutForAutoSwitch());
                },
              },
              {
                key: "getSnapSlideScrollToNode",
                value: function (e, t) {
                  var i = this._util.sliderElem,
                    s = i.clientWidth,
                    r = !1,
                    a = 200,
                    n = !0;
                  for (
                    "nextElementSibling" === t &&
                    i.scrollLeft + i.clientWidth + i.clientWidth / 2 >=
                      i.scrollWidth
                      ? (r = !0)
                      : "previousElementSibling" === t &&
                        i.scrollLeft < i.clientWidth &&
                        (r = !0);
                    e && e[t] && n;

                  )
                    (a += e.offsetWidth), !r && a >= s ? (n = !1) : (e = e[t]);
                  return e;
                },
              },
              {
                key: "checkAndAddActiveClassForNativeOverflow",
                value: function () {
                  var e = this._util,
                    t = e.elem,
                    i = e.sliderElem;
                  i.scrollWidth <= i.clientWidth
                    ? t.classList.add("wf-scrollview-inactive")
                    : t.classList.remove("wf-scrollview-inactive");
                },
              },
              {
                key: "next",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1;
                  if (!this._util.disableClickNavigation)
                    if (
                      (e.preventDefault(),
                      e.stopPropagation(),
                      "native" !== this._util.behavior)
                    )
                      this.showCurrent(1, {
                        source: "button",
                        type: "next",
                        sourceEvent: e,
                      });
                    else {
                      var s = this._state.activeElem;
                      if (s) {
                        var r = s.nextElementSibling,
                          a = this._util,
                          n = a.snapBehavior,
                          l = a.scrollSnapIncrementBy,
                          o = r;
                        r &&
                          ("snapSlide" === n &&
                            (o = this.getSnapSlideScrollToNode(
                              o,
                              "nextElementSibling",
                            )),
                          s.classList.remove("active"),
                          (this._state.activeElem = o),
                          this._state.activeElem.classList.add("active"),
                          this.snapNativeScrollViewToActiveElement({
                            calledOnLoad: !1,
                            source: "next",
                            triggerEvent: 1 === i,
                          }),
                          (this._state.locked = !0),
                          i !== l
                            ? this.next(e, i + 1)
                            : (O(this._state.buttonClickTimeoutInstance),
                              (this._state.buttonClickTimeoutInstance = F(
                                function () {
                                  (t._state.locked = !1), t.updateButtons(!0);
                                },
                                1e3,
                              ))));
                      }
                    }
                },
              },
              {
                key: "resetAutoSwitchState",
                value: function () {
                  var e = this._util,
                    t = e.elem;
                  e.shouldAutoSwitch &&
                    t.classList.remove(
                      "wafer-scrollview-autoswitch-paused-by-user",
                      "wafer-scrollview-autoswitch-paused",
                    ),
                    (this._state.autoSwitchPausedByUser = !1),
                    (this._state.mouseOnElement = !1);
                },
              },
              {
                key: "pause",
                value: function (e) {
                  e.preventDefault(), e.stopPropagation(), this.handlePause();
                },
              },
              {
                key: "prev",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1;
                  if (!this._util.disableClickNavigation)
                    if (
                      (e.preventDefault(),
                      e.stopPropagation(),
                      "native" !== this._util.behavior)
                    )
                      this.showCurrent(-1, {
                        source: "button",
                        type: "prev",
                        sourceEvent: e,
                      });
                    else {
                      var s = this._state.activeElem;
                      if (s) {
                        var r = s.previousElementSibling,
                          a = this._util,
                          n = a.snapBehavior,
                          l = a.scrollSnapIncrementBy,
                          o = r;
                        r &&
                          ("snapSlide" === n &&
                            (o = this.getSnapSlideScrollToNode(
                              o,
                              "previousElementSibling",
                            )),
                          s.classList.remove("active"),
                          (this._state.activeElem = o),
                          this._state.activeElem.classList.add("active"),
                          this.snapNativeScrollViewToActiveElement({
                            calledOnLoad: !1,
                            source: "prev",
                            triggerEvent: 1 === i,
                          }),
                          (this._state.locked = !0),
                          i !== l
                            ? this.prev(e, i + 1)
                            : (O(this._state.buttonClickTimeoutInstance),
                              (this._state.buttonClickTimeoutInstance = F(
                                function () {
                                  (t._state.locked = !1), t.updateButtons(!0);
                                },
                                1e3,
                              ))));
                      }
                    }
                },
              },
              {
                key: "resume",
                value: function (e) {
                  e.preventDefault(), e.stopPropagation(), this.handleResume();
                },
              },
              {
                key: "keydown",
                value: function (e) {
                  (e = e || window.event),
                    37 === e.keyCode
                      ? this.showCurrent(-1, { source: "key", type: "prev" })
                      : 39 === e.keyCode &&
                        this.showCurrent(1, { source: "key", type: "next" });
                },
              },
              {
                key: "touchstart",
                value: function (e) {
                  if (!this._util.disableTouch) {
                    this.pauseAutoSwitch();
                    var t = this._util,
                      i = e.touches[0],
                      s = i.pageX,
                      r = i.pageY;
                    (t.pointerDown = !0),
                      (t.drag.isVerticalDirection = !1),
                      (t.drag.startX = s),
                      (t.drag.startY = r);
                  }
                },
              },
              {
                key: "touchend",
                value: function () {
                  this._util.disableTouch ||
                    ((this._util.pointerDown = !1),
                    this.grab({ source: "touch" }));
                },
              },
              {
                key: "touchmove",
                value: function (e) {
                  if (!this._util.disableTouch) {
                    var t = this._util,
                      i = t.drag,
                      s = i.startX,
                      r = i.startY,
                      a = e.touches[0],
                      n = a.pageX,
                      l = a.pageY,
                      o = 0;
                    i.isVerticalDirection ||
                      (Math.abs(r - l) > 8 &&
                        (i.isVerticalDirection = r > l ? 1 : -1),
                      s !== n && (o = s > n ? 1 : -1),
                      (i.horizontalDirection = o),
                      i.last !== n &&
                        ((i.currentDirection = i.last > n ? 1 : -1),
                        (i.last = n)),
                      t.pointerDown &&
                        ((i.endX = n),
                        (i.endY = l),
                        this.isValidMove(o) &&
                          (t.drag.grabbing &&
                            e.cancelable &&
                            e.preventDefault(),
                          Math.abs(r - l) > 8 &&
                            (i.isVerticalDirection = r > l ? 1 : -1),
                          o && !i.isVerticalDirection && this.grabbing())));
                  }
                },
              },
              {
                key: "mousedown",
                value: function (e) {
                  if (!this._util.disableTouch) {
                    e.preventDefault && e.preventDefault();
                    var t = this._util,
                      i = e.pageX,
                      s = e.pageY;
                    (t.pointerDown = !0),
                      (t.drag.isVerticalDirection = !1),
                      (t.drag.startX = i),
                      (t.drag.startY = s);
                  }
                },
              },
              {
                key: "mouseover",
                value: function () {
                  var e = this._util,
                    t = e.autoSwitchDisableHover,
                    i = e.disableTouch;
                  if (!t && !i) {
                    this._state.mouseOnElement = !0;
                    var s = this._util,
                      r = s.elem;
                    s.shouldAutoSwitch &&
                      r.classList.add("wafer-scrollview-autoswitch-paused"),
                      this.pauseAutoSwitch();
                  }
                },
              },
              {
                key: "mouseup",
                value: function () {
                  if (!this._util.disableTouch) {
                    var e = this._util.sliderElem;
                    Q(e, "-webkit-grab"), this.grab({ source: "mouse" });
                  }
                },
              },
              {
                key: "mouseleave",
                value: function (e) {
                  if (!this._util.disableTouch) {
                    var t = this._util.autoSwitchDisableHover;
                    if ((e.preventDefault(), !t)) {
                      this._state.mouseOnElement = !1;
                      var i = this._util,
                        s = i.elem,
                        r = i.shouldAutoSwitch;
                      this._state.autoSwitchPausedByUser ||
                        (r &&
                          s.classList.remove(
                            "wafer-scrollview-autoswitch-paused",
                          ),
                        this.setTimeoutForAutoSwitch());
                    }
                    var a = this._util,
                      n = a.drag,
                      l = a.pointerDown,
                      o = a.sliderElem;
                    if (l) {
                      var u = e.pageX,
                        c = e.pageY;
                      (n.endX = u),
                        (n.endY = c),
                        Q(o, "-webkit-grabbing"),
                        this.grabbing();
                    }
                  }
                },
              },
              {
                key: "mousemove",
                value: function (e) {
                  if (!this._util.disableTouch) {
                    var t = this._util,
                      i = t.pointerDown,
                      s = t.sliderElem,
                      r = t.drag;
                    if (i) {
                      var a = e.pageX,
                        n = e.pageY;
                      (this._util.pointerDown = !1),
                        Q(s, "-webkit-grab"),
                        (r.endX = a),
                        (r.endY = n),
                        this.updateAfterDrag(),
                        this.clearDrag();
                    }
                  }
                },
              },
              {
                key: "tabClick",
                value: function (e) {
                  "native" === this._util.behavior &&
                    this._util.isUsingScrollSnap &&
                    ((this._state.activeElem = e.target),
                    this.snapNativeScrollViewToActiveElement({
                      calledOnLoad: !1,
                      source: "click",
                    }));
                },
              },
              {
                key: "remove",
                value: function () {
                  this._util.elem.remove();
                },
              },
              {
                key: "stateDidUpdate",
                value: function () {
                  "index" ===
                    (arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                    ).stateAttr &&
                    this.scrollToIndex(parseInt(this._util.index, 10));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.removeEventListeners(),
                    w(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "destroy",
                      this,
                    ).call(this);
                },
              },
              {
                key: "negativeWidthCoefficient",
                get: function () {
                  if (!this.isReady()) return 0;
                  var e = this._util,
                    t = e.counter,
                    i = e.dataList,
                    s = e.resizeEnd,
                    r = e.rightPadding;
                  if (t >= i.size - 2) {
                    if (r) return -r;
                    if (s) {
                      var a = i.tail;
                      if (!a) return 0;
                      var n = a.style.width,
                        l = a.getBoundingClientRect().width;
                      a.style.width = "";
                      var o = a.getBoundingClientRect(),
                        u = o.width;
                      return (a.style.width = n), -(l - Math.min(u, l));
                    }
                  }
                  return 0;
                },
              },
            ]),
            t
          );
        })(k);
      $.events = {
        click: [
          ["has-scrollsnap-click", "tabClick"],
          ["next-btn", "next"],
          ["pause-btn", "pause"],
          ["prev-btn", "prev"],
          ["resume-btn", "resume"],
        ],
        keydown: [["_self", "keydown"]],
        mousedown: [["slides", "mousedown"]],
        mouseleave: [
          ["next-btn", "mouseleave"],
          ["prev-btn", "mouseleave"],
          ["_self", "mouseleave"],
        ],
        mousemove: [["slides", "mousemove"]],
        mouseover: [
          ["next-btn", "mouseover"],
          ["prev-btn", "mouseover"],
          ["_self", "mouseover"],
        ],
        mouseup: [["slides", "mouseup"]],
        touchend: [["slides", "touchend"]],
        touchmove: [["slides", "touchmove"]],
        touchstart: [["slides", "touchstart"]],
      };
      var ee = $,
        te = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var s = t[i];
              (s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s);
            }
          }
          return function (t, i, s) {
            return i && e(t.prototype, i), s && e(t, s), t;
          };
        })(),
        ie = function e(t, i, s) {
          null === t && (t = Function.prototype);
          var r = Object.getOwnPropertyDescriptor(t, i);
          if (void 0 === r) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, i, s);
          }
          if ("value" in r) return r.value;
          var n = r.get;
          if (void 0 !== n) return n.call(s);
        },
        se = window.wafer,
        re = se.base,
        ae = se.controllers,
        ne = se.utils,
        le = ne.elementInView,
        oe = ne.throttle,
        ue = ae.WaferBaseController,
        ce = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = e.root,
              s = void 0 === i ? document : i,
              r = e.selector,
              a = void 0 === r ? ".wafer-scrollview" : r;
            o(this, t);
            var n = u(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: s,
                selector: a,
                WaferClass: ee,
              }),
            );
            return (
              n.sync(),
              (n._validateWithThrottle = oe(
                function () {
                  n.validate();
                },
                25,
                n,
              )),
              n
            );
          }
          return (
            c(t, e),
            te(t, [
              {
                key: "handleVisibilityChange",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = this._state.elementInstances,
                    i = !0,
                    s = !1,
                    r = void 0;
                  try {
                    for (
                      var a, n = t.values()[Symbol.iterator]();
                      !(i = (a = n.next()).done);
                      i = !0
                    ) {
                      var l = a.value,
                        o = l.instance;
                      if (o._util.shouldAutoSwitch)
                        if (e) {
                          var u = o._state.autoSwitchPausedByUser;
                          if (u) return;
                          o.resetAutoSwitchState(),
                            o.setTimeoutForAutoSwitch({ force: !0 });
                        } else o.pauseAutoSwitch();
                    }
                  } catch (e) {
                    (s = !0), (r = e);
                  } finally {
                    try {
                      !i && n.return && n.return();
                    } finally {
                      if (s) throw r;
                    }
                  }
                },
              },
              {
                key: "handleScroll",
                value: function () {
                  this._validateWithThrottle();
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this._validateWithThrottle(),
                    ie(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "handleResize",
                      this,
                    ).call(this);
                },
              },
              {
                key: "willValidate",
                value: function (e) {
                  var t = this._state.elementInstances;
                  e.forEach(function (e) {
                    var i = t.get(e),
                      s = i.instance;
                    s._util.shouldAutoSwitch &&
                      (le(e, { offsetX: 0, offsetY: 0 }, re.viewport)
                        ? s.setTimeoutForAutoSwitch()
                        : s.pauseAutoSwitch());
                  });
                },
              },
            ]),
            t
          );
        })(ue),
        de = ce;
      t.default = new de({});
    },
  });
});
