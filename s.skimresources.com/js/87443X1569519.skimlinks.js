/*
 (c) Skimlinks 2009-2024
 Build time: Mon, 03 Jun 2024 10:04:52 GMT
 Version: "15.7.1"
*/
(function () {
  function hd(a) {
    function b(a, b) {
      if (!(!a.parentNode || ta(a, e) || (a.meta && a.meta.ReadOnly))) {
        var c = id(a, b)[0];
        v(c, function (a) {
          !f[a] && kd(a) && ((f[a] = !0), r.domain_data.domains.push(a));
        });
      }
    }
    var c = x.get_as_hash_node_dict(),
      d = Object.keys(c).length;
    if (d) {
      var e = Ta(ld.concat(Kb())),
        f = {},
        l = Ua(function (a) {
          ea(a);
        }),
        h = 0;
      v(c, function (c, e) {
        window.setTimeout(function () {
          try {
            b(c, e);
          } catch (Jb) {
            l(Jb);
          } finally {
            (h += 1), h === d && a(Object.keys(f));
          }
        }, 0);
      });
    } else a([]);
  }
  function md(a) {
    var b;
    var c = (b = null);
    var d = 5;
    a.Limit && (d = a.Limit);
    var e = function () {
      return a.Priority || 0;
    };
    return {
      group_id: function () {
        return b ? b.id() : 0;
      },
      dec_limit: function () {
        return d - 1;
      },
      limit: function () {
        return d;
      },
      action_type: function () {
        return a.ActionType;
      },
      text: function () {
        return a.OriginalPhrase;
      },
      start_byte: function () {
        return a.StartByte;
      },
      url: function () {
        return a.Url;
      },
      multi: function () {
        return a.Mt ? !0 : !1;
      },
      group_priority: function () {
        return b ? b.group_priority() : e();
      },
      id: function () {
        return c ? c : a.PhraseId;
      },
      groups: function () {
        var b;
        return (b = a.Groups) ? b : [];
      },
      title: function () {
        return a.Unlinked
          ? ""
          : null != a.ActionTitle
            ? a.ActionTitle
            : "Shopping link provided by SkimWords";
      },
      set_title: function (b) {
        a.Title = a.Unlinked ? "" : b;
      },
      occurrence: function () {
        return a.PhraseOccurrence;
      },
      set_group: function (a) {
        return (b = a);
      },
      set_id: function (a) {
        return (c = a);
      },
    };
  }
  function nd() {
    var a = u.linksImpressions;
    a = {
      phr: a.skimwords.urls,
      unl: a.unlinked.urls,
      slc: a.skimlinks.count,
      swc: a.skimwords.count,
      ulc: a.unlinked.count,
      jsl: new Date().getTime() - u.loading_started,
      pref: n.referrer,
      uc: ua,
      t: 1,
      jsf: "",
      jv: fa,
    };
    ha && (a.xrf = 1);
    return Lb(a);
  }
  function Mb(a, b) {
    var c = a.style.cssText;
    "" !== c && (c += " ");
    var d = g("link_background");
    d &&
      (-1 === d.indexOf("#") && (d = "#".concat(d)),
      (c += "background-color: ".concat(d, " !important; ")));
    null !== g("link_tooltip", null) && (a.title = g("link_tooltip"));
    b &&
      (Va &&
        ((d = Va),
        -1 === d.indexOf("#") && (d = "#".concat(d)),
        (c += "color: ".concat(d, " !important; "))),
      Wa && (c += "font-weight: ".concat(Wa, " !important; ")),
      ia &&
        (c =
          "double" === ia
            ? c + "border-bottom: 1px double !important; "
            : "dashed" === ia
              ? c + "border-bottom: 1px dashed !important; "
              : c + "text-decoration: ".concat(ia, " !important; ")),
      Xa && (c += "font-style: ".concat(Xa, " !important; ")),
      g("skimwords_link_style") &&
        ((d = g("skimwords_link_style")), (c += "".concat(d, "; "))),
      g("skimwords_link_class") &&
        (a.className = D(
          "".concat(a.className, " ").concat(g("skimwords_link_class")),
        )),
      Ya && (a.title = Ya),
      null === a.getAttribute("title") &&
        (a.title = "Shopping link added by SkimWords"),
      a.getAttribute("data-skim-creative") &&
        ((d = parseInt(a.getAttribute("data-skim-creative"), 10) % 10),
        1 === d || 2 === d)) &&
      (a.title = "");
    a.style.cssText = c;
    return !0;
  }
  function Za(a, b) {
    b = b || Nb(a);
    if (!b) return !0;
    Ob(b);
    var c = g("skimlinks_keywee_pixel", null);
    var d = q(p.location.href, "utm_campaign=fbkw");
    c && d && Pb(c);
    g("vglnk") &&
      V(b, "skimwords-link") &&
      (a && a.stopPropagation
        ? a.stopPropagation()
        : ((c = p.event), (c.cancelBubble = !0)));
    return !0;
  }
  function Ob(a, b) {
    a &&
      a.nodeName &&
      "A" !== a.nodeName.toUpperCase() &&
      "AREA" !== a.nodeName.toUpperCase() &&
      (a = Qb(a));
    if (a) {
      var c = od(a);
      var d = r.waypointDomain;
      if (c.length >= d.length && c.substr(0, d.length) === d) return !0;
      if (-1 !== c.indexOf(d)) d = c;
      else {
        d = a;
        var e = V(d, "skimwords-link"),
          f = C(d, "data-skim-creative"),
          l = C(d, "data-skimlinks-tracking") || ua,
          h = $a ? "&".concat($a) : "";
        c = z(va(), {
          id: ab,
          isjs: 1,
          jv: fa,
          sref: p.location,
          url: c,
          xs: 1,
          xtz: Rb(),
          xuuid: n.uuid,
        });
        f && (c.xcreo = f);
        n.isAdblockUser && (c.abp = 1);
        n.cookie && (c.xguid = n.cookie);
        W && (c.site = W);
        l && (c.xcust = l);
        e &&
          ((c.xs = 2),
          (c.xword = C(d, "data-skimwords-word") || ""),
          P.version && (c.sv = P.version));
        e = F(d);
        e.icust && (c.xjsf = e.icust);
        e.sourceApp && (c.xs = e.sourceApp);
        e.clientClickId &&
          ((c.cci = e.clientClickId), delete F(d).clientClickId);
        e.linkSwappingMatchId && (c.ls = e.linkSwappingMatchId);
        d = "".concat(r.waypointDomain, "/?").concat(Q(c)) + h;
      }
      Sb(a, d, b);
    }
    return !0;
  }
  function Qb(a) {
    for (; a.parentNode; ) {
      a = a.parentNode;
      var b = a.nodeName.toUpperCase();
      if ("A" === b || "AREA" === b) return a;
    }
    return null;
  }
  function pd() {
    for (
      var a =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
        b = 1 < arguments.length ? arguments[1] : void 0,
        c = 2 < arguments.length ? arguments[2] : void 0,
        d = 0;
      d < a.length;
      d++
    ) {
      var e = Tb(a[d]);
      if (!E(e)) return t(c) ? c(e, b) : e;
    }
    return b;
  }
  function Tb(a, b, c) {
    a = X(p, ["skimlinks_settings", a], p[a]);
    return E(a) ? b : t(c) ? c(a, b) : a;
  }
  function g(a, b, c) {
    return Y(a) ? pd(a, b, c) : Tb(a, b, c);
  }
  function Ub() {
    return X(wa(), ["runTimeInfo", "isAdblockUser"]);
  }
  function ja(a) {
    try {
      var b = a["skimlinksOriginal".concat(qd("href"))] || a.href;
      return D(Vb(b) ? b.baseVal : b);
    } catch (c) {
      return console.error("Unexpected href format"), console.error(c), "";
    }
  }
  function bb(a) {
    var b = document.createElement("a"),
      c = {};
    b.href = a;
    if ((a = b.search.substring(1)))
      for (a = a.replace(/&amp;/g, "&").split("&"), b = 0; b < a.length; b++) {
        var d = a[b].split("=");
        d = cb(d, 2);
        var e = d[1];
        c[d[0]] = e ? decodeURIComponent(e) : null;
      }
    return c;
  }
  function xa(a) {
    return a ? a.replace(/^www\./i, "") : "";
  }
  function db() {
    for (var a = "", b = 0; 8 > b; b++)
      a += Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
    return a;
  }
  function t(a) {
    return "[object Function]" === Object.prototype.toString.call(a);
  }
  function I(a, b, c) {
    for (var d = 0, e = null === a ? 0 : a.length; d < e; )
      (c = b(c, a[d], d, a)), (d += 1);
    return c;
  }
  function ya(a) {
    return "console" in window && t(window.console[a])
      ? window.console[a]
      : function () {};
  }
  function za(a, b) {
    return I(
      b,
      function (b, d) {
        return b && t(a[d]);
      },
      !0,
    );
  }
  function rd() {
    try {
      var a = JSON.stringify({ a: 1 });
      return 1 === JSON.parse(a).a;
    } catch (b) {
      return !1;
    }
  }
  function A(a, b) {
    var c = Error(b);
    c.name = a;
    Wb(
      c,
      "getPrototypeOf" in Object ? Object.getPrototypeOf(this) : this.__proto__,
    );
    Error.captureStackTrace && Error.captureStackTrace(c, A);
    return c;
  }
  function Wb(a, b) {
    "setPrototypeOf" in Object
      ? Object.setPrototypeOf(a, b)
      : (a.__proto__ = b);
  }
  function sd(a, b, c) {
    b = Aa(b);
    b = Xb() ? Reflect.construct(b, c || [], Aa(a).constructor) : b.apply(a, c);
    if (!b || ("object" !== typeof b && "function" !== typeof b)) {
      if (void 0 !== b)
        throw new TypeError(
          "Derived constructors may only return object or undefined",
        );
      if (void 0 === a)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
    } else a = b;
    return a;
  }
  function Xb() {
    try {
      var a = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (b) {}
    return (Xb = function () {
      return !!a;
    })();
  }
  function Yb(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      b &&
        (d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        }));
      c.push.apply(c, d);
    }
    return c;
  }
  function Ba(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = null != arguments[b] ? arguments[b] : {};
      b % 2
        ? Yb(Object(c), !0).forEach(function (b) {
            m(a, b, c[b]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
          : Yb(Object(c)).forEach(function (b) {
              Object.defineProperty(
                a,
                b,
                Object.getOwnPropertyDescriptor(c, b),
              );
            });
    }
    return a;
  }
  function Zb(a) {
    a: if ("object" == typeof a && a) {
      var b = a[Symbol.toPrimitive];
      if (void 0 !== b) {
        a = b.call(a, "string");
        if ("object" != typeof a) break a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      a = String(a);
    }
    return "symbol" == typeof a ? a : a + "";
  }
  function Z(a) {
    "@babel/helpers - typeof";
    return (
      (Z =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (a) {
              return typeof a;
            }
          : function (a) {
              return a &&
                "function" == typeof Symbol &&
                a.constructor === Symbol &&
                a !== Symbol.prototype
                ? "symbol"
                : typeof a;
            }),
      Z(a)
    );
  }
  function R(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function $b(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      d.enumerable = d.enumerable || !1;
      d.configurable = !0;
      "value" in d && (d.writable = !0);
      Object.defineProperty(a, Zb(d.key), d);
    }
  }
  function S(a, b, c) {
    b && $b(a.prototype, b);
    c && $b(a, c);
    Object.defineProperty(a, "prototype", { writable: !1 });
    return a;
  }
  function m(a, b, c) {
    b = Zb(b);
    b in a
      ? Object.defineProperty(a, b, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[b] = c);
    return a;
  }
  function td(a, b) {
    if ("function" !== typeof b && null !== b)
      throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(b && b.prototype, {
      constructor: { value: a, writable: !0, configurable: !0 },
    });
    Object.defineProperty(a, "prototype", { writable: !1 });
    b && eb(a, b);
  }
  function Aa(a) {
    Aa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        };
    return Aa(a);
  }
  function eb(a, b) {
    eb = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (a, b) {
          a.__proto__ = b;
          return a;
        };
    return eb(a, b);
  }
  function cb(a, b) {
    var c = Array.isArray(a) ? a : void 0;
    if (!c)
      a: {
        var d =
          null == a
            ? null
            : ("undefined" != typeof Symbol && a[Symbol.iterator]) ||
              a["@@iterator"];
        if (null != d) {
          var e,
            f,
            l,
            h = [],
            k = !0,
            g = !1;
          try {
            if (((f = (d = d.call(a)).next), 0 === b)) {
              if (Object(d) !== d) {
                c = void 0;
                break a;
              }
              k = !1;
            } else
              for (
                ;
                !(k = (e = f.call(d)).done) &&
                (h.push(e.value), h.length !== b);
                k = !0
              );
          } catch (jd) {
            g = !0;
            var n = jd;
          } finally {
            try {
              if (
                !k &&
                null != d["return"] &&
                ((l = d["return"]()), Object(l) !== l)
              ) {
                c = void 0;
                break a;
              }
            } finally {
              if (g) throw n;
            }
          }
          c = h;
        } else c = void 0;
      }
    if (!(e = c))
      a: {
        if (a) {
          if ("string" === typeof a) {
            e = ac(a, b);
            break a;
          }
          e = Object.prototype.toString.call(a).slice(8, -1);
          "Object" === e && a.constructor && (e = a.constructor.name);
          if ("Map" === e || "Set" === e) {
            e = Array.from(a);
            break a;
          }
          if (
            "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          ) {
            e = ac(a, b);
            break a;
          }
        }
        e = void 0;
      }
    if (!e)
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    return e;
  }
  function ac(a, b) {
    if (null == b || b > a.length) b = a.length;
    for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
    return d;
  }
  function E(a) {
    return "undefined" === typeof a || null === a;
  }
  function Y(a) {
    return Array.isArray
      ? Array.isArray(a)
      : "[object Array]" === Object.prototype.toString.call(a);
  }
  function J(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function v(a, b) {
    if (Y(a)) for (var c = 0; c < a.length; c++) b(a[c], c, a);
    else for (c in a) J(a, c) && b(a[c], c, a);
  }
  function z() {
    var a = arguments[0],
      b = Array.prototype.slice.call(arguments, 1);
    E(a) && (a = {});
    v(b, function (b) {
      E(b) && (b = {});
      v(Object.keys(b), function (c) {
        a[c] = b[c];
      });
    });
    return a;
  }
  function ka(a, b) {
    var c = [];
    v(a, function (d, e) {
      b(d, e, a) && c.push(d);
    });
    return c;
  }
  function bc() {
    return ka(
      0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
      function (a) {
        return !!a;
      },
    );
  }
  function fb(a, b) {
    if (!a) return [];
    if (!b) return [].concat(a);
    var c = [];
    v(a, function (d, e) {
      c.push(b(d, e, a));
    });
    return c;
  }
  function D(a) {
    return E(a) ? "" : a.toString().replace(/^[\s\xA0]+|[\s\xA0]+$/g, "");
  }
  function Ca(a) {
    return "boolean" === typeof a;
  }
  function T(a, b) {
    return "undefined" === typeof a ? b : a;
  }
  function gb(a, b, c) {
    a = T(a, "");
    b = T(b, "");
    c = T(c, 0);
    return 0 === a.slice(c).indexOf(b);
  }
  function Da(a, b, c) {
    a = T(a, "");
    b = T(b, "");
    c = T(c, 0);
    c = c < a.length ? c | 0 : a.length;
    return a.substr(c - b.length, b.length) === b;
  }
  function Vb(a) {
    var b = Z(a);
    return null !== a && ("object" === b || "function" === b);
  }
  function qd(a) {
    return a ? a.charAt(0).toUpperCase() + a.slice(1) : "";
  }
  function cc(a) {
    return encodeURIComponent(a).replace(/[!'()*~]/g, function (a) {
      return "%".concat(a.charCodeAt(0).toString(16).toUpperCase());
    });
  }
  function B(a) {
    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0,
      c = document.createElement("a");
    c.href = b ? a : ud(a);
    try {
      return xa(c.hostname);
    } catch (d) {
      return "";
    }
  }
  function ud(a) {
    var b =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "http",
      c = "";
    /^https?:\/\//.test(a) ||
      /^\/[^/]+/.test(a) ||
      (c = /^\/\//.test(a) ? "".concat(b, ":") : "".concat(b, "://"));
    return "".concat(c).concat(a);
  }
  function Q(a, b) {
    var c = [];
    b = b || cc;
    v(a, function (a, e) {
      c.push("".concat(e, "=").concat(b(a)));
    });
    return c.join("&");
  }
  function hb(a, b, c, d) {
    function e() {
      if (t(d.onError)) {
        var b = 400 <= k.status && 500 > k.status,
          c = 500 <= k.status && 600 > k.status;
        d.onError(
          new (0 === k.status ? vd : b ? wd : c ? xd : yd)(
            "".concat(h, " ").concat(a, " ").concat(k.status),
          ),
        );
      }
    }
    b = b || {};
    d = d || {};
    var f = d.data,
      l = d.headers || {},
      h = d.method || "GET",
      k = new XMLHttpRequest();
    d.withCredentials && (k.withCredentials = !0);
    b = Q(b);
    b.length && (a = "".concat(a, "?").concat(b));
    k.open(h, a);
    v(l, function (a, b) {
      k.setRequestHeader(b, a);
    });
    k.onload = function () {
      if (t(c))
        if (200 <= k.status && 300 > k.status) {
          try {
            var a = JSON.parse(k.responseText);
          } catch (Jb) {
            a = k.responseText;
          }
          c(a);
        } else e();
    };
    k.onerror = e;
    k.send(f);
    return k;
  }
  function X(a, b, c) {
    if (!a || !b || !b.length) return c;
    for (var d = b.length, e = 0; e < d; e++) {
      var f = b[e];
      if (a && f in a) a = a[f];
      else return c;
    }
    return a;
  }
  function wa() {
    return window.__SKIM_JS_GLOBAL__ &&
      t(window.__SKIM_JS_GLOBAL__.getDebugInfo)
      ? window.__SKIM_JS_GLOBAL__.getDebugInfo()
      : {};
  }
  function zd(a) {
    var b = /(?::(\d+))?:(\d+)$/,
      c = /^([^ ]+)\s\((.*)\)$/,
      d = { filename: a, function: "?", lineno: null, colno: null, in_app: !0 };
    c.test(a) &&
      ((a = a.match(c).slice(1)),
      (a = cb(a, 2)),
      (c = a[1]),
      (d["function"] = a[0]),
      (d.filename = c));
    b.test(d.filename) &&
      ((a = d.filename.match(b).slice(1)),
      (c = cb(a, 2)),
      (a = c[0]),
      (c = c[1]),
      a && c
        ? ((d.lineno = parseInt(a, 10)), (d.colno = parseInt(c, 10)))
        : !a && c && (d.lineno = parseInt(c, 10)),
      (d.filename = d.filename.replace(b, "")));
    return d;
  }
  function Ad(a) {
    a = a.stack
      .replace(a.toString(), "")
      .replace(/^\s+at\s+/gm, "")
      .split("\n");
    a = fb(a, function (a) {
      return D(a);
    });
    a = bc(a);
    a.reverse();
    return fb(a, zd);
  }
  function ea(a, b) {
    if (a && dc) {
      ec.push(a);
      try {
        Bd.sendError(a, b);
      } catch (d) {
        if (d === a) fc.error(a);
        else {
          var c = new Cd();
          c.__sentryExtraData__ = {
            logger_error_message: d.message,
            logger_error_stack: d.stack,
            initial_error_message: a.message,
            intial_error_stack: a.stack,
          };
          throw c;
        }
      }
    }
  }
  function G(a) {
    return t(a)
      ? function () {
          try {
            a.apply(this, arguments);
          } catch (b) {
            ea(b);
          }
        }
      : a;
  }
  function Ua(a) {
    var b = !1,
      c;
    return function () {
      if (b) return c;
      c = a.apply(this, arguments);
      b = !0;
      return c;
    };
  }
  function gc(a, b) {
    return Ca(a) ? a : b;
  }
  function hc(a, b) {
    return Y(a) ? a : b;
  }
  function C(a, b, c) {
    3 <= arguments.length &&
      ("undefined" !== typeof a.setAttribute
        ? a.setAttribute(b, c)
        : (a[b] = c));
    try {
      var d = a[b];
      d || (d = a.getAttribute(b));
      return d;
    } catch (e) {
      return null;
    }
  }
  function K(a, b) {
    var c = Array.prototype.slice.call(arguments, 2),
      d = G(a);
    return window.setTimeout.apply(window, [d, b].concat(c));
  }
  function Dd(a, b) {
    function c() {
      "object" === Z(a.skimlinksOriginalHref)
        ? ((a.href.baseVal = a.skimlinksOriginalHref.baseVal),
          (a.href.animVal = a.skimlinksOriginalHref.animVal))
        : (a.href = a.skimlinksOriginalHref);
      delete a.skimlinksOriginalHostname;
      delete a.skimlinksOriginalHref;
      delete a.skimlinksRestoreSwappedLink;
    }
    b = b || ic;
    var d = K(c, b);
    a.skimlinksOriginalHostname = a.hostname;
    "object" === Z(a.href)
      ? (a.skimlinksOriginalHref = {
          animVal: a.href.animVal,
          baseVal: a.href.baseVal,
        })
      : (a.skimlinksOriginalHref = a.href);
    a.skimlinksRestoreSwappedLink = function () {
      clearTimeout(d);
      c();
    };
  }
  function Sb(a, b, c) {
    if (a) {
      "string" === typeof a.skimlinksOriginalHref || Dd(a, c);
      c = null;
      var d = a.childNodes.length && 3 === a.childNodes[0].nodeType;
      "msie" === n.detect.browser && d && (c = a.innerHTML);
      "object" === Z(a.href)
        ? ((a.href.baseVal = b), (a.href.animVal = b))
        : (a.href = b);
      c && c !== a.innerHTML && (a.innerHTML = c);
    }
  }
  function jc(a) {
    var b = a.href;
    b = n.cookie
      ? b.replace(/([&?])xguid=([a-fA-F0-9]{32})/, "$1xguid=".concat(n.cookie))
      : b.replace(/([&?]xguid=[a-fA-F0-9]{32})/, "");
    var c = p.location.href || "";
    "string" !== typeof c
      ? (c = !1)
      : ((c = c.split(/[?#]/)[0]),
        "/" === c[c.length - 1] && (c = c.slice(0, -1)),
        (c = kc[c] || !1));
    c &&
      (c = C(a, "data-skim-creative")) &&
      ((extendedUrl = new URL(b)),
      extendedUrl.searchParams.append("xcreo", c),
      (b = extendedUrl.toString()));
    c = b;
    var d = p.location.href;
    try {
      var e = c,
        f = bb(c),
        l = Ed.exec(c);
      if (d) {
        if (f.sref) f.xcreo = "500008";
        else {
          f.sref = d;
          var h = f.xcreo;
          h && 6 === h.length
            ? "5" === h[0] && (h = h.substring(0, 3) + "4" + h.substring(4))
            : (h = "500408");
          f.xcreo = h;
        }
        e = "".concat(l, "?").concat(Q(f));
      }
      b = e;
    } catch (k) {
      b = c;
    }
    b !== a.href && Sb(a, b);
    return b;
  }
  function lc(a) {
    a = a || document;
    a = a.body || a.getElementsByTagName("body")[0];
    if (!a) throw new mc();
    return a;
  }
  function Pb(a, b, c) {
    if (!L) {
      L = document.createElement("iframe");
      L.id = "skimlinks-pixels-iframe";
      try {
        lc().appendChild(L);
      } catch (f) {
        f instanceof mc && document.documentElement.appendChild(L);
      }
      var d = L;
      d.width = 0;
      d.height = 0;
      d.style.display = "none";
    }
    var e = L.contentDocument || L.contentWindow.document;
    d = lc(e);
    d || ((d = document.createElement("body")), e.appendChild(d));
    e = e.createElement("img");
    e.src = a;
    e.width = 1;
    e.height = 1;
    t(b) && (e.onload = G(b));
    t(c) && (e.onerror = G(c));
    d.appendChild(e);
  }
  function va() {
    var a = {};
    ib && (a.dnt = ib);
    nc && (a.fdnt = 1);
    return a;
  }
  function Ea(a, b, c, d) {
    var e = d || {};
    d = e.usePixel || !1;
    var f = e.useSendBeacon || !1;
    e = e.callback || function () {};
    c = z({}, c, va());
    f ? oc(a, b, c, e) : d ? pc(a, b, c, e) : jb(a, b, c, e);
  }
  function oc(a, b, c, d) {
    b = JSON.stringify(b);
    return navigator.sendBeacon && ((a = kb(a, c)), navigator.sendBeacon(a, b))
      ? (d && d(), !0)
      : !1;
  }
  function pc(a, b, c, d) {
    c = z({}, c);
    c.rnd = Math.random();
    b && (c.data = JSON.stringify(b));
    Pb(kb(a, c), d, d);
  }
  function jb(a, b, c, d) {
    b = JSON.stringify(b);
    lb.post(kb(a, c), {}, d, {
      headers: { "Content-type": "text/plain" },
      data: b,
      withCredentials: !0,
    });
  }
  function kb(a, b) {
    var c = Q(b),
      d = "".concat(Fd).concat(a);
    return c ? "".concat(d, "?").concat(c) : d;
  }
  function q(a, b) {
    return t(a.indexOf) ? -1 < a.indexOf(b) : !1;
  }
  function M(a) {
    var b = xa(aa);
    return q(a, mb) || q(a, "go.redirectingat.com") || (!!b && q(a, b));
  }
  function qc(a) {
    a = B(a);
    return M(a);
  }
  function Gd(a, b) {
    if (!a)
      throw Error(
        "[matchSelector] First argument needs to be an html element.",
      );
    var c = window.Element.prototype;
    c =
      c.matches ||
      c.msMatchesSelector ||
      c.mozMatchesSelector ||
      c.webkitMatchesSelector;
    if (t(c))
      try {
        return c.call(a, b);
      } catch (e) {
        return !1;
      }
    c = (a.document || a.ownerDocument).querySelectorAll(b);
    for (var d = 0; c[d] && c[d] !== a; ) d += 1;
    return !!c[d];
  }
  function ta(a, b) {
    var c = Hd(a);
    if (!c || !Y(b) || 0 === b.length) return !1;
    var d = b
      .map(function (a) {
        return "".concat(a, " *");
      })
      .concat(b)
      .join(",");
    return Gd(c, d);
  }
  function Hd(a) {
    for (; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.parentNode;
    return a;
  }
  function rc(a, b) {
    for (var c = 0; c < a.length; c++) if (b(a[c])) return a[c];
  }
  function ba(a, b) {
    if ("function" != typeof a || (null != b && "function" != typeof b))
      throw new TypeError("Expected a function");
    if (!ba.Cache) return a;
    var c = function e() {
      for (var c = arguments.length, l = Array(c), h = 0; h < c; h++)
        l[h] = arguments[h];
      c = b ? b.apply(this, l) : l[0];
      h = e.cache;
      if (h.has(c)) return h.get(c);
      l = a.apply(this, l);
      e.cache = h.set(c, l) || h;
      return l;
    };
    c.cache = new ba.Cache();
    return c;
  }
  function sc(a, b) {
    return !!rc(b, function (b) {
      var c = gb("*"),
        e = Da("*"),
        f = b.replace(/\*/g, "");
      return c && e ? q(a, f) : c ? Da(a, f) : e ? gb(a, f) : a === b;
    });
  }
  function nb(a, b) {
    return a && a.length && b ? "undefined" !== typeof rc(a, b) : !1;
  }
  function Id(a) {
    return g("_merchantSettings")
      ? nb(Jd, function (b) {
          return q(a, b);
        })
      : !1;
  }
  function ob(a) {
    if (!a || !a.href) return !0;
    var b = ja(a);
    (b = !tc(b)) ||
      ((b = [].concat(Kd(), Kb(), uc)),
      (b = b.length && ta(a, b) ? !0 : pb.length ? !ta(a, pb) : !1));
    return b;
  }
  function tc(a) {
    if (!a || Id(a)) return !1;
    var b = r.hostname;
    var c = T(void 0, !0);
    c = B(a, c);
    var d = Da(c, ".".concat(b)) || Da(b, ".".concat(c));
    if ((b = c !== b && !d))
      (a = B(a)), (a = Fa.length ? !sc(a, Fa) : sc(a, Ld())), (b = !a);
    return b;
  }
  function Md(a) {
    var b;
    if ((b = vc))
      null === a.offsetParent
        ? (b = !0)
        : ((b = p.getComputedStyle),
          (b = t(b) ? "hidden" === b(a).visibility : !1));
    if (b) return w.IGNORE;
    var c = ja(a);
    b = xa(B(c));
    c = c ? /^https?:\/\//.test(c) || /^\/\//.test(c) : !1;
    if (c && !ob(a)) {
      if (ha) return w.TRACK;
      if (!0 === r.aff_domains[b] || J(qb, b)) return w.AFFILIATE;
      if (M(b)) return w.PRE_AFFILIATED;
      if ((a = rb)) a = !J(r.aff_domains, b) || E(r.aff_domains[b]);
      return a ? w.UNKNOWN : "" === n.cookie && wc ? w.AFFILIATE : w.TRACK;
    }
    return w.IGNORE;
  }
  function V(a, b) {
    if (!a || !a.className || !b) return !1;
    var c = a && a.className ? D(a.className).split(/\s+/) : [];
    return q(c, b);
  }
  function Ga(a) {
    if ("string" !== typeof a.skimlinksOriginalHref) return !1;
    var b = F(a);
    var c = bb(a.href);
    b.icust && b.icust !== c.xjsf && (c.xjsf = b.icust);
    b.sourceApp && b.sourceApp !== c.xs && (c.xs = b.sourceApp);
    b = Q(c);
    b = "".concat(r.waypointDomain, "?").concat(b);
    a.href = b;
    return !0;
  }
  function F(a) {
    if (!a)
      throw Error(
        "getAnchorMetaData takes an anchor HTML element as an argument",
      );
    var b = X(a, [xc]);
    if (!b) {
      b = { icust: null, sourceApp: null };
      var c = [xc],
        d = b;
      if (a && c && c.length)
        for (var e = c.length, f = a, l = null, h = 0; h < e; h++) {
          var k = c[h];
          if (h === e - 1) {
            try {
              a[k] = d;
            } catch (mf) {
              (f[l] = {}), (f[l][k] = d);
            }
            break;
          }
          (k in a && Vb(a[k])) || (a[k] = {});
          f = a;
          l = k;
          a = a[k];
        }
    }
    return b;
  }
  function yc(a, b, c) {
    b = z({}, b, {
      domain_id: la,
      publisher_id: ma,
      page_url: p.location.href,
      impression_id: n.uuid,
      jv: fa,
    });
    var d = {};
    navigator.sendBeacon ? (d.useSendBeacon = !!c) : (d.usePixel = !!c);
    Ea("/generic_tracking/".concat(a), b, {}, d);
  }
  function Nb(a) {
    a = a.target || a.srcElement || a.originalTarget;
    if (!a) return null;
    var b = (a.nodeName || "").toLowerCase();
    return q(["a", "area"], b) ? a : Qb(a);
  }
  function Ha(a) {
    try {
      return a();
    } catch (b) {}
  }
  function Nd(a) {
    var b = g("gtag");
    Ha(function () {
      b("event", ca, { event_category: "click", event_label: a });
    });
  }
  function Od(a) {
    var b = g("ga");
    Ha(function () {
      b("send", "event", "click", ca, a);
    });
  }
  function Pd(a) {
    var b = g("_gaq");
    Ha(function () {
      b.push(["_trackEvent", "click", ca, a]);
    });
  }
  function Qd(a) {
    var b = g("pageTracker");
    b._trackPageview &&
      Ha(function () {
        b._trackPageview("/".concat(ca, "/").concat(a));
      });
  }
  function Rd(a, b) {
    return I(
      Object.keys(b),
      function (c, d) {
        var e = a[d] === b[d];
        return c && e;
      },
      !0,
    );
  }
  function zc(a) {
    return I(
      a,
      function (a, c) {
        return a.concat(c);
      },
      [],
    );
  }
  function na(a) {
    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0,
      c = a ? ".".concat(a) : "";
    b = b ? "a[href]".concat(c, ", area[href]").concat(c) : "a[href]".concat(c);
    return zc(N.querySelectorAll(b));
  }
  function Sd(a, b) {
    v(a, function (a) {
      var c = q(b, a) && !M(a);
      r.aff_domains[a] = c;
    });
  }
  function Td(a, b) {
    return !nb(a, function (a) {
      return !b(a);
    });
  }
  function Ud() {
    for (var a = new H(), b = arguments.length, c = Array(b), d = 0; d < b; d++)
      c[d] = arguments[d];
    a.waitFor(c);
    return a;
  }
  function Ta(a) {
    return I(
      a,
      function (a, c) {
        return q(a, c) ? a : a.concat(c);
      },
      [],
    );
  }
  function sb(a) {
    var b = Ac[a];
    if (!b) throw Error("Unknown service ".concat(a));
    return b;
  }
  function Bc(a, b) {
    if (a) {
      var c = [].concat(a.split(" "), b);
      c = Ta(c);
    } else c = b;
    return c;
  }
  function Vd() {
    if (tb || Ia) {
      var a = [];
      tb && a.push("nofollow");
      Ia && (a = Bc(Ia, a));
      v(na(), function (b) {
        var c = a,
          d = C(b, "rel"),
          e = xa(b.hostname);
        e && !0 === r.aff_domains[e] && C(b, "rel", Bc(d, c).join(" "));
      });
    }
  }
  function Wd(a) {
    if (a.affiliationType === w.IGNORE) return !1;
    var b = a.anchor,
      c = a.affiliationType,
      d = a.nativeEvent;
    if (a.type === Ja.LEFT_CLICK)
      if (
        ((b = a.anchor),
        (c = a.affiliationType),
        c === w.AFFILIATE || c === w.UNKNOWN)
      ) {
        b = a.anchor;
        c = a.nativeEvent;
        d = a.clientClickId;
        var e, f;
        if ((f = g("skimlinks_strip_attribute", !1)))
          for (h in f)
            if (J(f, h)) {
              var l = f[h];
              (e = C(b, h)) &&
                0 === e.indexOf(l) &&
                ((e = e.substr(l.length)), C(b, h, e));
            }
        oa && C(b, "target", oa);
        var h = a.anchor;
        a.affiliationType;
        F(h);
        F(b).clientClickId = d;
        Ga(b);
        ca &&
          ((a = b.href),
          g("gtag")
            ? Nd(a)
            : g("ga")
              ? Od(a)
              : g("_gaq")
                ? Pd(a)
                : g("pageTracker") && Qd(a));
        a = Cc
          ? (a = C(b, "onclick")) && q(a.toString(), "return false")
            ? !0
            : (a = b.onclick) && t(a) && q(a.toString(), ".preventDefault()")
              ? !0
              : !1
          : !1;
        a
          ? (Za(c, b),
            (oa ? p.open(b.href, oa) : p.open(b.href, "_blank")).focus())
          : Za(c, b);
      } else
        c === w.PRE_AFFILIATED
          ? jc(b)
          : c === w.TRACK &&
            ((a = b.href),
            (a = {
              publisher_id: ma,
              publisher_domain_id: la,
              referrer: p.location.toString(),
              pref: n.referrer,
              site: "".concat(W),
              url: a,
              custom: C(b, "data-skimlinks-tracking") || ua || "",
              xtz: n.timezone,
              uuid: n.uuid,
              product: "1",
            }),
            ha && (a.xrf = 1),
            Ea("/naclicks", a, null, { usePixel: !0 }));
    else {
      try {
        if (((f = F(b)), !f.icust || -1 !== f.icust.indexOf("other_click__"))) {
          e = void 0 != d.button ? d.button : "";
          l = "other_click__".concat(d.type, " [").concat(e, "]");
          if (32 < String(l).length)
            throw Error(
              "".concat(
                l,
                " is not a valid icust value. The value should be less than 33 chars",
              ),
            );
          F(b).icust = l;
          Ga(b);
        }
      } catch (k) {}
      c === w.AFFILIATE || c === w.UNKNOWN
        ? Ob(b, 200)
        : c === w.PRE_AFFILIATED && jc(b);
    }
    return !0;
  }
  function Xd() {
    sb(Ka.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(Wd, ub.SKIMLINKS);
  }
  function Yd() {
    n.skimlinksEnabled &&
      (y.on("skim_js_start", Xd), U.whenBeaconFullyReady(Vd));
  }
  function Dc(a) {
    var b;
    return a &&
      -1 !== a.indexOf("class=") &&
      (b = a.match(/([^[]+)\[class=([^\]]+)\]/i)) &&
      3 === b.length
      ? "".concat(b[1], ".").concat(b[2])
      : a;
  }
  function Zd() {
    var a = na();
    return I(
      a,
      function (a, c) {
        var b = La;
        var e = ja(c);
        e = B(e);
        b &&
          M(e) &&
          (b = Ma.createFromUrl(c.href)) &&
          (e = b.getTargetDomain());
        e = (b = e) && !ob(c) && !M(b);
        var f = J(r.aff_domains, b);
        e &&
          !f &&
          (a.push(b), (r.aff_domains[b] = null), r.domain_data.domains.push(b));
        return a;
      },
      [],
    );
  }
  function Ec(a) {
    var b = Zd();
    return U.sendBeaconRequest(b, a);
  }
  function Fc(a, b) {
    v(a, function (a) {
      void 0 === r.aff_domains[a] && (r.aff_domains[a] = null);
    });
    U.sendBeaconRequest(a, Na.AUX).readyState.whenReady(b);
  }
  function Lb(a) {
    return z(
      {
        pag: p.location.href,
        guid: n.cookie,
        uuid: n.uuid,
        tz: n.timezone,
        publisher_id: ma,
        publisher_domain_id: la,
      },
      a,
    );
  }
  function Gc(a) {
    if (
      0 !== u.awaitedModules.length &&
      ((u.awaitedModules = ka(u.awaitedModules, function (b) {
        return b !== a;
      })),
      0 === u.awaitedModules.length)
    ) {
      var b = nd();
      Ea("/page", b);
    }
  }
  function $d(a) {
    a = a.match.phrase;
    return { w: a.text(), lp: a.url(), t: Oa.creative };
  }
  function ae(a) {
    a = a || [];
    var b = I(
      a,
      function (a, b, e) {
        a[e] = b;
        return a;
      },
      {},
    );
    u.linksImpressions.unlinked = { count: a.length, urls: b };
    Gc("unlinked");
  }
  function vb(a) {
    return String(a)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function wb(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
    if (a && (a.nodeName || a === p))
      if (N.addEventListener) {
        var e = G(c.bind(a));
        a.addEventListener(b, e, d);
      } else
        a.attachEvent("on".concat(b), function () {
          return 7 > n.detect.version && !p.event
            ? (K(c.bind(a, p.event), 100), !0)
            : c.call(a, p.event);
        });
  }
  function Hc(a, b) {
    Za(a, b);
  }
  function be() {
    p.__SKIM_JS_GLOBAL__.bundledEntries.unlinked = !0;
    if (n.unlinkedEnabled) {
      if (n.skimwordsEnabled) y.on("instant_api_callback_settings", ce);
      else U.whenPostPageLoadBeaconCallCompleted(Ic);
      y.on("dom_changed", Jc);
    }
  }
  function xb(a) {
    de.setReady();
    ae(a);
  }
  function ce() {
    var a = P.settings;
    2 === a.nc
      ? n.unlinkedEnabled && Fc(r.domain_data.domains, Kc)
      : n.unlinkedEnabled &&
        (a.includes
          ? (O && O.length && (a.excludes = a.excludes.concat(O)),
            x.traverse(a.includes, a.excludes, a.read_onlys))
          : O && O.length
            ? x.traverse(["body"], O, [])
            : x.traverse(["body"], [], []));
    Ic();
  }
  function Ic() {
    a: {
      var a = N.getElementsByTagName("body");
      if (a.length) {
        a = a[0].textContent || a[0].innerText;
        var b;
        if ((b = a))
          (a =
            /$|\b(?:https?:\/\/)?(?:[-_a-zA-Z]+\.)*(?:[-_a-zA-Z]{2,}\.[-_\w]{2,5}\b)[^[\]\s]*\b|$/gi.exec(
              a,
            )),
            (b = a.length && "" !== a[0] ? !0 : !1);
        if (b) {
          a = !0;
          break a;
        }
      }
      a = !1;
    }
    a ? (n.skimwordsEnabled || x.traverse([], O, []), Jc()) : xb();
  }
  function Jc() {
    hd(function (a) {
      a.length ? Fc(a, Kc) : xb();
    });
  }
  function Kc() {
    var a = [];
    Object.keys(r.aff_domains).length &&
      (v(Oa.url_spans, function (b) {
        r.aff_domains[b.match.domain] &&
          (ee(b.node, b.match, !0), a.push($d(b)));
      }),
      K(function () {
        var a;
        var c = na("skimlinks-unlinked");
        var d = [];
        var e = 0;
        for (a = c.length; e < a; e++) {
          var f = c[e];
          d.push(fe(f));
        }
        return d;
      }, 10));
    xb(a);
  }
  function ge() {
    return I(
      na(),
      function (a, b) {
        var c = ja(b),
          d = B(c),
          e;
        (e = !d) ||
          (e = !(!V(b, "skimwords-link") && !V(b, "skimlinks-unlinked")));
        (e = e || !tc(c)) ||
          (e = b && Y(Pa) && 0 !== Pa.length ? ta(b, Pa) : !1);
        if (e) return a;
        (e = a.urls[c]) ||
          (e = {
            count: 0,
            ae:
              !0 === r.aff_domains[d] ||
              ((null === r.aff_domains[d] || void 0 === r.aff_domains[d]) &&
                rb &&
                !M(d))
                ? 1
                : 0,
          });
        e.count++;
        a: {
          if (
            -1 !== c.indexOf("#slm-") &&
            ((d = c.split("#slm-")),
            2 === d.length &&
              !isNaN(d[1]) &&
              10 * parseInt(d[1], 10) === 10 * d[1])
          ) {
            d = parseInt(d[1], 10);
            break a;
          }
          d = null;
        }
        d && (e.slmcid = d);
        d = e;
        1 === d.ae && a.count++;
        d.slmcid &&
          ((e = d.slmcid), q(u.campaign_ids, e) || u.campaign_ids.push(e));
        if (!Lc && 0 === d.ae) return a;
        a.urls[c] = d;
        return a;
      },
      { urls: {}, count: 0 },
    );
  }
  function he() {
    v(ie, function (a) {
      var b = p;
      "skimlinks_context_window" === a && (b = window);
      J(b, a) &&
        ((a = { page_var: a, value: JSON.stringify(b[a]) }),
        yc("page_variable_tracking", a));
    });
  }
  function je() {
    var a = Ua(function () {
      u.linksImpressions.skimlinks = ge();
      Gc("main-tracking");
      if (Object.keys(u.linksImpressions.skimlinks.urls).length) {
        var a = Lb({
          dl: u.linksImpressions.skimlinks.urls,
          hae: u.linksImpressions.skimlinks.count ? 1 : 0,
          typ: "l",
        });
        Ea("/link", a);
      }
    });
    U.whenNoRequestsPending(a);
    K(a, 2e3);
  }
  function ke() {
    u.awaitedModules.push("main-tracking");
    n.skimwordsEnabled && u.awaitedModules.push("skimwords");
    n.unlinkedEnabled && u.awaitedModules.push("unlinked");
    Mc && U.whenPostPageLoadBeaconCallCompleted(je);
    if (navigator.sendBeacon && 1 > 1e4 * Math.random()) {
      var a = {
          domain_id: la,
          publisher_id: ma,
          page_url: p.location.href,
          impression_id: n.uuid,
          jv: fa,
        },
        b = oc(
          "/generic_tracking/trackingMethodExperiment",
          z({ trackingMethod: "sendBeacon" }, a),
        );
      jb(
        "/generic_tracking/trackingMethodExperiment",
        z({ trackingMethod: "xhr" }, a),
      );
      b ||
        jb(
          "/generic_tracking/trackingMethodExperiment",
          z({ trackingMethod: "sendBeaconFailed" }, a),
        );
    }
  }
  function le() {
    he();
  }
  function me(a, b) {
    var c = {
        headers: { "Content-type": "application/json" },
        data: JSON.stringify({
          publisher_id: ma,
          publisher_domain_id: la,
          page_url: p.location.href,
          urls: a,
        }),
        withCredentials: !0,
      },
      d = va();
    lb.post("".concat(ne), d, b, c);
  }
  function Nc(a) {
    var b = a.href;
    qc(b) && (a = Ma.createFromUrl(a.href)) && (b = a.getTargetUrl());
    return b;
  }
  function Oc(a, b) {
    da || 1e3 < b
      ? t(a) && (da ? (yb ? a(!0) : a(!1)) : a(!1))
      : K(Oc, (b *= 2), a, b);
  }
  function Pc() {
    da ||
      (pa.complete && qa.complete && (da = !0),
      da && "0" != pa.width && "0" == qa.width && (yb = !0));
  }
  function oe(a) {
    function b(a) {
      return a.toLowerCase().replace(/^\/\/|^https?:\/\//, "");
    }
    var c = fb(Qc, b);
    return q(c, b(a));
  }
  function pe() {
    return {
      skimOptions: qe,
      runTimeInfo: z(
        {},
        { aff_domains: r.aff_domains },
        { consentState: re },
        { loggedErrors: ec },
        n,
      ),
    };
  }
  function se(a, b) {
    var c = !1,
      d;
    return function () {
      if (c) return d;
      K(function () {
        c = !1;
      }, b);
      c = !0;
      return (d = a.apply(this, arguments));
    };
  }
  function Rc(a) {
    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
      c = 3 < arguments.length ? arguments[3] : void 0;
    if (a) {
      var d = se(2 < arguments.length ? arguments[2] : void 0, 200);
      v(b, function (b) {
        try {
          wb(a, b, d, c);
        } catch (f) {}
      });
    }
  }
  function te() {
    var a = new ue();
    Ac[Ka.ANCHOR_CLICK_INTERCEPTOR] = a;
  }
  function ve() {
    p.__SKIM_JS_GLOBAL__ || (p.__SKIM_JS_GLOBAL__ = {});
    if (!p.__SKIM_JS_GLOBAL__.init) {
      p.skimlinksAPI = {};
      p.__SKIM_JS_GLOBAL__.init = !0;
      p.__SKIM_JS_GLOBAL__.getDebugInfo = pe;
      p.__SKIM_JS_GLOBAL__.bundledEntries = we;
      if (oe(r.hostname) || (zb && N.querySelector(zb)))
        (n.skimlinksEnabled = !1),
          (n.skimwordsEnabled = !1),
          (n.unlinkedEnabled = !1);
      "msie" === n.detect.browser &&
        8 >= n.detect.version &&
        (n.skimwordsEnabled = !1);
      try {
        pc("/robots.txt", void 0, { __skimjs_preflight__please_ignore__: !0 });
      } catch (a) {
        ea(new xe(), !0);
      }
      ye.detect(function (a) {
        n.isAdblockUser = a;
      });
      y.publish("skim_js_init");
      q(["interactive", "complete"], N.readyState)
        ? K(ra, 0)
        : (Ec(Na.PRE_PAGE_LOAD),
          document.addEventListener("DOMContentLoaded", ra),
          document.addEventListener("load", ra));
      te();
      y.publish("skim_js_start");
    }
  }
  var fc = {
      log: ya("log"),
      info: ya("info"),
      warn: ya("warn"),
      error: ya("error"),
    },
    dc = (function () {
      var a = !0;
      try {
        var b = [
          rd(),
          !!(
            window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()
          ),
          za(document, ["querySelector", "querySelectorAll"]),
          za(Object, ["keys"]),
          za([], ["indexOf"]),
          za("", ["indexOf"]),
        ];
        a = I(
          b,
          function (a, b) {
            return a && b;
          },
          !0,
        );
      } catch (c) {
        a = !1;
      }
      !1 === a &&
        fc.info(
          "[Skimlinks] Your browser doesn't support the base features necessary to run our javascript.",
        );
      return a;
    })();
  A.prototype = Object.create(Error.prototype, {
    constructor: {
      value: Error,
      enumerable: !1,
      writable: !0,
      configurable: !0,
    },
  });
  Wb(A, Error);
  var mc = A.bind(null, "DocumentBodyNotFound"),
    ze = A.bind(null, "PixelDropFailed");
  A.bind(null, "ScriptDropFailed");
  var yd = A.bind(null, "XhrError"),
    wd = A.bind(null, "XhrError4xx"),
    xd = A.bind(null, "XhrError5xx"),
    vd = A.bind(null, "XhrErrorZero"),
    Cd = A.bind(null, "SentryLoggerError");
  A.bind(null, "SendBeaconFailedError");
  var xe = A.bind(null, "ResolveSslCertificateError");
  A.bind(null, "DisclosureReadyStateTimeout");
  var Ed = /^[^?]+/,
    fa = "15.7.1",
    Ae = "https://r.skimresources.com/api/",
    qb = { "t.umblr.com": { name: "z" } },
    ab = "87443X1569519",
    ma = 87443,
    la = 1569519,
    Fd = "https://t.skimresources.com/api/v2",
    ne = "https://ls.skimresources.com/api",
    mb = "go.skimresources.com",
    Be = "https://sl-sentry.skimlinks.com",
    Sc = "f648b8dfc7284fad8af093653eafd6ca",
    Ce = "production",
    De = 1 > 1e3 * Math.random(),
    Bd = {
      sendError: function (a, b) {
        if (!Sc) throw a;
        var c = b;
        c =
          (c = Ca(c) ? c : !1) || De ? (a instanceof ze && Ub() ? !1 : !0) : !1;
        if (c) {
          c = "".concat(Be, "/api/").concat("46", "/store/");
          var d = {
            sentry_version: "7",
            sentry_client: "raven-js/3.26.4",
            sentry_key: Sc,
          };
          var e = {
            country: X(wa(), ["runTimeInfo", "country"]),
            beacon_consent: X(wa(), ["runTimeInfo", "consent"]),
            iab_consent: X(wa(), [
              "runTimeInfo",
              "consentState",
              "skimlinks_consent",
            ]),
            is_adblock_user: Ub(),
            is_top_frame: window.top === window,
          };
          e = {
            event_id: db(),
            project: "46",
            platform: "javascript",
            logger: "javascript",
            release: fa,
            exception: {
              values: [
                {
                  type: a.name,
                  value: a.message,
                  stacktrace: { frames: Ad(a) },
                },
              ],
            },
            request: {
              headers: { "User-Agent": navigator.userAgent },
              url: location.href,
            },
            extra: z(
              { original_stacktrace: a.stack },
              a.__sentryExtraData__,
              e,
            ),
          };
          hb(c, d, null, { method: "POST", data: JSON.stringify(e) });
        }
      },
    },
    ec = [],
    Rb = Ua(function () {
      return new Date().getTimezoneOffset();
    }),
    Tc = window.skimlinks_context_window || null,
    p = Tc ? window[Tc] : window,
    N = p.document,
    Ee = {
      getItem: function (a) {
        try {
          return JSON.parse(localStorage.getItem(a));
        } catch (b) {
          return null;
        }
      },
      setItem: function (a, b) {
        try {
          localStorage.setItem(a, JSON.stringify(b));
        } catch (c) {}
      },
    },
    Ab = g("noskim", !1),
    Fe = g("noskimlinks", !1),
    Ge = g("noskimwords", !0),
    He = g("nounlinked", !1),
    Ie = g("skimwords_standard", false),
    Je = g("skimwords_lite", false),
    Ke = g("skimwords_diy", false),
    Le = g("skimwords_diy_filter", false),
    Uc = !Ab && !Fe,
    Vc = !Ab && !Ge,
    Wc = !Ab && !He,
    ib = g("skimlinks_dnt", 0, function (a) {
      return a && "0" !== a && "false" !== a ? 1 : 0;
    }),
    nc = g("skimlinks_nocookie", !1),
    Bb = g("skimlinks_excluded_classes", []),
    uc = g("custom_excluded_selectors", [], hc),
    pb = g("custom_included_selectors", [], hc),
    Cb = g("skimlinks_exclude", ["amazon.com", "smile.amazon.com"]),
    Fa = g("skimlinks_include", []),
    vc = g("skimlinks_ignore_hidden_links", false),
    Pa = g("skimlinks_link_impression_exclude_selector", []),
    tb = g("skimlinks_add_nofollow", false),
    Ia = g("skimlinks_custom_rel", ""),
    Xc = g("skimlinks_before_click_handler", false, gc),
    wc = g("skimlinks_first_party_na", !1),
    Mc = !g("noimpressions", !1),
    Lc = false,
    ic = g("skimlinks_replace_timeout", 300, function (a, b) {
      var c = parseFloat(a);
      return isNaN(c) ? b : c;
    }),
    rb = g("skimlinks_affiliate_unknown_links", true),
    oa = g("skimlinks_target", null),
    Me = g("skimlinks_ajax_rerun", false),
    O = [],
    ha = g("skimlinks_revenue_forecast", false),
    Yc = g("skimlinks_noright", false),
    Zc = g("skimlinks_url_extraction_rules", !1) || false,
    $a = g("skimlinks_extra_redir_params", []).join("&"),
    ua = g(["affiliate_tracking", "skimlinks_tracking"], !1),
    Qa = g("force_location"),
    W = g(["skimlinks_site", "skimlinks_sitename"], !1),
    aa = g("skimlinks_domain", ""),
    ca = g("skimlinks_google", false, function (a, b) {
      return a ? (Ca(a) ? (a ? "skimout" : "") : D(a)) : b ? "skimout" : "";
    }),
    Qc = g("noskim_domains", []),
    Ne = g("skimwords_horizontal_distance", 80),
    Oe = g("skimwords_vertical_distance", 80),
    Pe = false,
    Va = g("skimwords_color", null),
    Wa = g("skimwords_weight", null),
    ia = g("skimwords_decoration", null),
    Xa = g("skimwords_style", null),
    Ya = g("skimwords_title", null),
    zb = g("no_skim_selector", ""),
    Qe = g("skimlinks_force_consent", !1),
    Re = null,
    Se = false,
    Cc = true,
    Db = g("link_swapping_404", !0),
    Eb = g("link_swapping_product_match", !0),
    La = (Db || Eb) && g("link_swapping", !0),
    $c = true,
    kc = g("taboola_bo_active_pages", {}),
    Te = g("taboola_cr_active", !1, gc),
    qe = {
      __proto__: null,
      AE_CLICK_TRACKING: !1,
      AJAX_SUPPORT: Me,
      BEACON_RETRY_TIMER: -1,
      CUSTOM_EXCLUDED_SELECTORS: uc,
      CUSTOM_INCLUDED_SELECTORS: pb,
      CUSTOM_TRACKING_VAR: ua,
      CUSTOM_WAYPOINT_DOMAIN: aa,
      DO_NOT_TRACK: ib,
      EXTRA_REDIR_PARAMS: $a,
      FORCE_CONSENT: Qe,
      FORCE_LOCATION: Qa,
      FORCE_PREVENTED_CLICKS_MONETIZATION: Cc,
      GOOGLE_TRACKING_ACTION_NAME: ca,
      HAS_SKIMLINKS: Uc,
      HAS_SKIMWORDS: Vc,
      HAS_TABOOLA_TRACKING: !1,
      HAS_UNLINKED: Wc,
      INCENTIVE_ENABLED: !1,
      IS_CONTENT_RECIRCULATION_ENABLED: Te,
      IS_MINIMALISTIC_JS: !1,
      LINK_SWAPPING: La,
      LINK_SWAPPING_404: Db,
      LINK_SWAPPING_MERCHANT_NAME_DETECTION: $c,
      LINK_SWAPPING_OUT_OF_STOCK: !1,
      LINK_SWAPPING_PRODUCT_MATCH: Eb,
      M101_CUSTOM_DOM_DETECTION: Se,
      M101_TRACKING_ID: Re,
      NO_COOKIE: nc,
      NO_RIGHT_CLICK: Yc,
      NO_SKIM_DOMAINS: Qc,
      NO_SKIM_SELECTOR: zb,
      SITE_NAME: W,
      SL_ADD_NOFOLLOW: tb,
      SL_AFFILIATE_UNKNOWN_LINKS: rb,
      SL_BEFORE_CLICK_HANDLER: Xc,
      SL_CONSENT: !1,
      SL_CUSTOM_REL: Ia,
      SL_EXCLUDED_CLASSES: Bb,
      SL_EXCLUDED_DOMAINS: Cb,
      SL_FIRST_PARTY_NA: wc,
      SL_FORECAST: ha,
      SL_IGNORE_HIDDEN_LINKS: vc,
      SL_IMPRESSION_EXCLUDED_SELECTORS: Pa,
      SL_INCLUDED_DOMAINS: Fa,
      SL_PROFILING: !1,
      SL_REPLACE_TIMEOUT: ic,
      SL_TARGET: oa,
      SL_TRACK_IMPRESSION: Mc,
      SW_DIY: Ke,
      SW_DIY_FILTER: Le,
      SW_HORIZONTAL_DISTANCE: Ne,
      SW_LINK_COLOR: Va,
      SW_LINK_DECORATION: ia,
      SW_LINK_STYLE: Xa,
      SW_LINK_TITLE: Ya,
      SW_LINK_WEIGHT: Wa,
      SW_LITE: Je,
      SW_STANDARD: Ie,
      SW_VERTICAL_DISTANCE: Oe,
      TABOOLA_BO_ACTIVE_PAGES_HASHMAP: kc,
      TRACK_COOKIE_SYNCS: Pe,
      UNLINKED_EXCLUDES: O,
      USE_MERCHANT_URL_EXTRACTION_RULES: Zc,
      WITH_NA_LINK_IMPRESSIONS: Lc,
    },
    n = (function () {
      var a = N.referrer || document.referrer || "",
        b = Qa || p.location.href;
      var c =
        "aspsession-id aspsessionid cftoken j-sessionid jsessid jsession_id jsessionid phpsessid phpsession-id phpsessionid seskey sessid session-id session-key session_id sessionid sessionkey uniqueid utm_campaign utm_medium utm_source utm_term".split(
          " ",
        );
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        var f = b.split("?");
        if (2 <= f.length) {
          b = f.shift();
          f = f.join("?");
          e = "".concat(encodeURIComponent(e), "=");
          f = f.split(/[&;]/gi);
          for (var l = f.length - 1; 0 <= l; l--) gb(f[l], e) && f.splice(l, 1);
          b = "".concat(b, "?").concat(f.join("&"));
        }
      }
      "?" === b[b.length - 1] && (b = b.substr(0, b.length - 1));
      c = b;
      d = Ee.getItem("skimCONSENT");
      b = navigator.userAgent.toLowerCase();
      b =
        /(webkit)[ /]([\w.]+)/.exec(b) ||
        /(opera)(?:.*version)?[ /]([\w.]+)/.exec(b) ||
        /(msie) ([\w.]+)/.exec(b) ||
        (0 > b.indexOf("compatible") &&
          /(mozilla)(?:.*? rv:([\w.]+))?/.exec(b)) ||
        [];
      b = { browser: b[1] || "", version: parseFloat(b[2]) || 0 };
      return {
        cookieSyncString: "",
        lastBeaconTimestamp: null,
        cookie: "",
        country: "",
        locale: "",
        consent: d,
        detect: b,
        isAdblockUser: !1,
        pageLocation: c,
        referrer: a,
        timezone: Rb(),
        uuid: db(),
        skimwordsEnabled: Vc,
        skimlinksEnabled: Uc,
        unlinkedEnabled: Wc,
      };
    })(),
    r = (function () {
      var a = document.getElementsByTagName("html")
          ? document.getElementsByTagName("html")[0]
          : null,
        b = Qa ? B(Qa, !1) : p.location.hostname;
      return {
        aff_domains: {},
        beacon: [],
        domain_data: { domains: [] },
        exclude: Cb,
        exclude_lookup: null,
        excluded_classes: ["noskimlinks", "noskim"].concat(Bb),
        has_been_called: !1,
        hostname: b,
        html_root: a,
        include: Fa,
        include_lookup: null,
        links: [],
        links_tracked: !1,
        target: null,
        waypointDomain: aa ? "http://".concat(aa) : "https://".concat(mb),
      };
    })();
  var P = {};
  var Oa = { creative: "500005", url_spans: [] };
  var ad = function (a, b, c) {
    if (0 === b) return c;
    try {
      return a();
    } catch (d) {
      return ad(a, b - 1, c);
    }
  };
  get_real_link = function (a) {
    if (null == a) return null;
    for (; "A" !== a.nodeName.toUpperCase(); )
      if (
        ((a = ad(
          function () {
            return a.parentNode;
          },
          3,
          null,
        )),
        null == a)
      )
        return null;
    return a;
  };
  var L,
    lb = {
      get: function (a, b, c, d) {
        d = z({ onError: ea }, d, { method: "GET" });
        hb(a, b, G(c), d);
      },
      post: function (a, b, c, d) {
        d = z({ onError: ea }, d, { method: "POST" });
        hb(a, b, G(c), d);
      },
    },
    Ue = { waypointDomain: aa || mb },
    Ma = (function () {
      function a(b) {
        var c = this,
          d =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ue;
        R(this, a);
        m(this, "waypointDomain", void 0);
        m(this, "waypointParams", void 0);
        m(this, "updateWaypointParams", function (a) {
          if (J(a, "url") && E(a.url))
            throw Error(
              "[WaypointUrlObject][updateWaypointParams] 'url' param can not be null nor undefined",
            );
          c.waypointParams = Ba(Ba({}, c.waypointParams), a);
          c.cleanUpWaypointParamsAfterUpdate();
        });
        m(this, "getWaypointUrl", function () {
          var a = Q(c.waypointParams),
            b = c.getWaypointDomainProtocol();
          return "".concat(b).concat(c.waypointDomain, "/?").concat(a);
        });
        m(this, "getTargetUrl", function () {
          return c.waypointParams.url;
        });
        m(this, "getTargetDomain", function () {
          return B(c.getTargetUrl());
        });
        m(this, "getWaypointDomainProtocol", function () {
          return c.waypointDomain === aa ? "http://" : "https://";
        });
        m(this, "cleanUpWaypointParamsAfterUpdate", function () {
          v(c.waypointParams, function (a, b) {
            E(a) && delete c.waypointParams[b];
          });
          c.waypointParams = Ba(
            Ba({}, c.getDefaultWaypointParams()),
            c.waypointParams,
          );
        });
        if (null === b || void 0 === b || !b.url)
          throw Error("[WaypointUrlObject][constructor] 'url' is mandatory");
        this.waypointDomain = d.waypointDomain;
        this.updateWaypointParams(b);
      }
      return S(
        a,
        [
          {
            key: "getDefaultWaypointParams",
            value: function () {
              var a = { id: ab, sref: p.location.href, xs: 1 };
              n.cookie && (a.xguid = n.cookie);
              return a;
            },
          },
        ],
        [
          {
            key: "createFromUrl",
            value: function (b) {
              var c = B(b);
              if (!M(c)) return null;
              try {
                var d = bb(b);
                return d.url ? new a(d, { waypointDomain: c }) : null;
              } catch (e) {
                return null;
              }
            },
          },
        ],
      );
    })();
  "undefined" !== typeof window.Map && (ba.Cache = Map);
  var Ve = ["noskim", "norewrite"],
    We = ["noskimlinks", "noskim"].concat([
      "taboola",
      "advert--taboola",
      "trc_rbox",
      "trc_related_container",
    ]),
    Xe =
      "*.criteo.com *.g.doubleclick.net *mjxads.internet.com *overture.com *pgpartner.co.uk *pgpartner.com *pricegrabber.co.uk *pricegrabber.com *youtube.com m.skimresources.com paid.outbrain.com track.celtra.com traffic.outbrain.com trc.taboola.com zergnet.com ad.doubleclick.net".split(
        " ",
      ),
    Jd = ["itunes.apple.com", "itunes.com", "phobos.apple.com"],
    Ld = ba(function () {
      var a = [].concat(Cb, Xe);
      W && a.push(W);
      return a;
    }),
    Kb = ba(function () {
      return We.concat(Bb).map(function (a) {
        return ".".concat(a);
      });
    }),
    Kd = ba(function () {
      return Ve.map(function (a) {
        return "a[rel~='".concat(a, "']");
      });
    }),
    Ye = (function () {
      var a = /[-[\]{}()*+?.,\\^$|#]/g,
        b = /\s+/g;
      return function (c) {
        return c.replace(a, "\\$&").replace(b, "\\s+");
      };
    })(),
    w = (function (a) {
      a.AFFILIATE = "AFFILIATE";
      a.PRE_AFFILIATED = "PRE_AFFILIATED";
      a.UNKNOWN = "UNKNOWN";
      a.TRACK = "TRACK";
      a.IGNORE = "IGNORE";
      return a;
    })({}),
    xc = "__skimlinks__";
  var od = function (a) {
    a = ja(a);
    if (Zc) {
      var b = B(a);
      if (b in qb)
        return (
          (b = "[&?]" + qb[b].name + "=(http[^&]+)"),
          (b = new RegExp(b)),
          decodeURIComponent(null != a ? a.match(b).pop() : void 0) || a
        );
    }
    return a;
  };
  var Ze = (function (a) {
    a.STARTING = "STARTING";
    a.CANCELLED = "CANCELLED";
    a.PENDING_API = "PENDING_API";
    a.API_ERROR = "API_ERROR";
    a.NO_OFFERS = "NO_OFFERS";
    a.PENDING_MODULE = "PENDING_MODULE";
    a.READY = "READY";
    return a;
  })({});
  Ze.STARTING;
  var y = {
      topics: {},
      on: function (a, b, c) {
        Y(this.topics[a]) || (this.topics[a] = []);
        var d;
        c &&
          (d = function (a) {
            Rd(a, c) && b(a);
          });
        this.topics[a].push(d || b);
      },
      publish: function (a, b) {
        v(this.topics[a] || [], function (a) {
          t(a) && a(b);
        });
      },
    },
    H = (function () {
      function a() {
        var b = this;
        R(this, a);
        m(this, "ready", void 0);
        m(this, "pendingCallbacks", void 0);
        m(this, "subReadyStateList", void 0);
        m(this, "isReady", function () {
          return b.dependsOnSubReadyState()
            ? Td(b.subReadyStateList, function (a) {
                return a.isReady();
              })
            : b.ready;
        });
        m(this, "setReady", function () {
          b.dependsOnSubReadyState() ||
            b.ready ||
            ((b.ready = !0), b.callPendingCallbacks());
        });
        m(this, "waitFor", function (a) {
          a = ka(a, function (a) {
            return !!a;
          });
          b.subReadyStateList = b.subReadyStateList.concat(a);
          b.isReady()
            ? b.callPendingCallbacks()
            : a.forEach(function (a) {
                a.whenReady(b.whenSubReadyStateIsReady);
              });
        });
        m(this, "whenSubReadyStateIsReady", function () {
          b.isReady() && b.callPendingCallbacks();
        });
        this.ready = !1;
        this.pendingCallbacks = [];
        this.subReadyStateList = [];
      }
      return S(a, [
        {
          key: "whenReady",
          value: function (a) {
            this.isReady() ? a() : this.pendingCallbacks.push(a);
          },
        },
        {
          key: "dependsOnSubReadyState",
          value: function () {
            return 0 !== this.subReadyStateList.length;
          },
        },
        {
          key: "callPendingCallbacks",
          value: function () {
            this.pendingCallbacks.forEach(function (a) {
              setTimeout(a, 0);
            });
            this.pendingCallbacks = [];
          },
        },
      ]);
    })(),
    Na = (function (a) {
      a.PRE_PAGE_LOAD = "PRE_PAGE_LOAD";
      a.POST_PAGE_LOAD = "POST_PAGE_LOAD";
      a.AUX = "AUX";
      return a;
    })({}),
    U = new ((function () {
      function a(b, c) {
        var d = this;
        R(this, a);
        m(this, "requestBeaconAPI", void 0);
        m(this, "beaconRequestHandler", void 0);
        m(this, "requestsHistory", void 0);
        m(this, "noRequestPendingReadyState", void 0);
        m(this, "beaconApiResponseReadyState", void 0);
        m(this, "postPageLoadCallReadyState", void 0);
        m(this, "beaconFullyReadyState", void 0);
        m(this, "whenNoRequestsPending", function (a) {
          d.noRequestPendingReadyState.whenReady(a);
        });
        m(this, "whenBeaconApiRequestCompleted", function (a) {
          d.beaconApiResponseReadyState.whenReady(a);
        });
        m(this, "whenPostPageLoadBeaconCallCompleted", function (a) {
          d.postPageLoadCallReadyState.whenReady(a);
        });
        m(this, "whenBeaconFullyReady", function (a) {
          d.beaconFullyReadyState.whenReady(a);
        });
        m(this, "sendBeaconRequest", function (a, b) {
          var c = 0 === a.length,
            e = {
              readyState: new H(),
              requestedDomains: a,
              response: null,
              beaconCallType: b,
            };
          d.hasFetchedAtLeastOnce() && c
            ? (d.requestsHistory.push(e), e.readyState.setReady())
            : d.requestBeaconAPI(a, b, function (b) {
                b = z({ requestedDomains: a }, b);
                d.beaconRequestHandler(b);
                e.response = b;
                e.readyState.setReady();
              });
          d.updateRequestsHistory(e);
          e.readyState.whenReady(function () {
            e.response && y.publish("EVENTS__BEACON__REQUEST_COMPLETED", e);
            d.resolveReadyStatesOnRequestCompleted(e);
          });
          return e;
        });
        this.requestBeaconAPI = b;
        this.beaconRequestHandler = c;
        this.requestsHistory = [];
        this.noRequestPendingReadyState = new H();
        this.noRequestPendingReadyState.setReady();
        this.beaconApiResponseReadyState = new H();
        this.postPageLoadCallReadyState = new H();
        this.beaconFullyReadyState = Ud(
          this.beaconApiResponseReadyState,
          this.postPageLoadCallReadyState,
        );
      }
      return S(a, [
        {
          key: "updateRequestsHistory",
          value: function (a) {
            this.requestsHistory.push(a);
            this.noRequestPendingReadyState.waitFor([a.readyState]);
          },
        },
        {
          key: "resolveReadyStatesOnRequestCompleted",
          value: function (a) {
            a.response &&
              !this.beaconApiResponseReadyState.isReady() &&
              this.beaconApiResponseReadyState.setReady();
            a.beaconCallType === Na.POST_PAGE_LOAD &&
              this.postPageLoadCallReadyState.setReady();
          },
        },
        {
          key: "hasFetchedAtLeastOnce",
          value: function () {
            return 0 !== this.requestsHistory.length;
          },
        },
      ]);
    })())(
      function (a, b, c) {
        a = JSON.stringify({
          pubcode: ab,
          page: p.location.href,
          domains: a,
          link_swapping: La,
        });
        a = {
          headers: { "Content-type": "application/x-www-form-urlencoded" },
          data: Q({ data: a }),
          withCredentials: !0,
        };
        var d = va();
        "production" !== Ce && (d._ = b);
        lb.post("".concat(Ae), d, c, a);
      },
      function (a) {
        var b = {};
        a.country && (b.country = a.country.toUpperCase());
        a.country_state && (b.countryState = a.country_state);
        a.guid && "" === n.cookie && (b.cookie = a.guid);
        Ca(a.consent) && (b.consent = a.consent);
        a.csp && (b.cookieSyncString = a.csp);
        a.ts && (b.lastBeaconTimestamp = a.ts);
        z(n, b);
        Sd(a.requestedDomains, a.merchant_domains);
      },
    ),
    Ka = (function (a) {
      a.ANCHOR_CLICK_INTERCEPTOR = "ANCHOR_CLICK_INTERCEPTOR";
      return a;
    })({}),
    Ac = {},
    Ja = (function (a) {
      a.LEFT_CLICK = "LEFT_CLICK";
      a.MIDDLE_CLICK = "MIDDLE_CLICK";
      a.OTHER_CLICK = "OTHER_CLICK";
      return a;
    })({}),
    ub = (function (a) {
      a[(a.LINK_SWAPPING = 0)] = "LINK_SWAPPING";
      a[(a.CONSENT = 1)] = "CONSENT";
      a[(a.INCENTIVE = 2)] = "INCENTIVE";
      a[(a.SKIMLINKS = 3)] = "SKIMLINKS";
      return a;
    })({}),
    bd = {}.hasOwnProperty;
  var Fb = 0;
  var Gb = null;
  var Hb = 0;
  var Ra = !1;
  var Sa = {};
  var $e = function (a) {
    Sa[a] = Sa[a] || 0;
    Sa[a]++;
    return "".concat(a, "_").concat(Sa[a]);
  };
  var af = function (a) {
    var b;
    var c = (b = null);
    if (-1 !== a.indexOf(".")) {
      a = a.split(".");
      var d = a[0];
      c = a[1];
    } else
      -1 !== a.indexOf("[class=")
        ? ((a = a.split("[class=")),
          (d = a[0]),
          (c = a[1].split("]")),
          (c = c[0]))
        : -1 !== a.indexOf("[class^=")
          ? ((a = a.split("[class^=")),
            (d = a[0]),
            (c = a[1].split("]")),
            (c = c[0]))
          : -1 !== a.indexOf("[id*=")
            ? ((a = a.split("[id*=")),
              (d = a[0]),
              (b = a[1].split("]")),
              (b = b[0]))
            : (d = a);
    return { tag: d, id: b, class: c };
  };
  var sa = function (a, b) {
    var c;
    var d = b.split(",");
    var e = 0;
    for (c = d.length; e < c; e++) {
      b = d[e];
      b = D(b);
      b = af(b);
      var f = !0;
      var l =
        (l = "string" === typeof a.className ? a.className : "") ||
        ("function" === typeof a.getAttribute
          ? a.getAttribute("class")
          : void 0) ||
        "";
      var h =
        ("function" === typeof a.getAttribute
          ? a.getAttribute("id")
          : void 0) || "";
      !b.tag || (a.nodeName && a.nodeName.toLowerCase() === b.tag) || (f = !1);
      b["class"] &&
        (!l || (l !== b["class"] && 0 !== l.indexOf(b["class"]))) &&
        (f = !1);
      b.id && (!h || (h !== b.id && -1 === h.indexOf(b.id))) && (f = !1);
      if (f) return !0;
    }
    return !1;
  };
  var cd = function (a, b) {
    return sa(a, b) ? [a] : zc(a.querySelectorAll(b));
  };
  var bf = function (a, b) {
    return 0 < a.querySelectorAll(b).length;
  };
  var Ib = function (a, b) {
    return 0 === b.length || sa(a, b.join(","))
      ? !0
      : a.parentNode
        ? Ib(a.parentNode, b)
        : !1;
  };
  var dd = function d(b, c) {
    return 0 === c.length
      ? !1
      : sa(b, c.join(","))
        ? !0
        : b.parentNode
          ? d(b.parentNode, c)
          : !1;
  };
  var cf = function (b) {
    var c = b.offsetWidth;
    b = b.offsetHeight;
    return (468 === c && 60 === b) ||
      (234 === c && 60 === b) ||
      (728 === c && 90 === b) ||
      (300 === c && 250 === b) ||
      (250 === c && 250 === b) ||
      (336 === c && 280 === b) ||
      (160 === c && 600 === b) ||
      (120 === c && 600 === b)
      ? !0
      : !1;
  };
  var df = function () {
    var b = [];
    b.push("div.widget-content");
    b.push("div.googleAdText");
    b.push("div[id=ad]");
    b.push("div[id=banner]");
    b.push("div[id=advertisement]");
    b.push("div[id=adv_container]");
    b.push("div.ad");
    b.push("div.banner");
    b.push("div.advertisement");
    b.push("div.ad_container");
    b.push("span.IL_AD");
    b.push("div[id=fave-ext-container]");
    b.push("span.skimlinks-unlinked");
    -1 !== p.location.href.indexOf(".google.")
      ? (b.push("td.gac_c"),
        b.push("table[id=mbEnd]"),
        b.push("div[id=mbEnd]"),
        b.push("span[id=taw]"),
        b.push("td.std"),
        b.push("div.std"),
        b.push("table.gssb_e"),
        b.push("div.c"),
        b.push("div[id=tads]"))
      : -1 !== p.location.href.indexOf(".yahoo.")
        ? (b.push("ul.spns,ul.reducepx-spnslist"),
          b.push("ul[class*=reducepx-spnslist]"),
          b.push("ul[id=east]"))
        : -1 !== p.location.href.indexOf(".aol.")
          ? (b.push("div.sllLink"), b.push("div.n"))
          : -1 !== p.location.href.indexOf(".bing.") &&
            (b.push("div.sb_adsW"),
            b.push("div[id=sidebar]"),
            b.push("div.sb_adsWv2"),
            b.push("div.sb_adsNv2"),
            b.push("div[class*=sb_ads]"));
    return b;
  };
  var ef = function (b) {
    var c;
    var d = {};
    var e = 0;
    for (c = b.length; e < c; e++) {
      var f = b[e];
      d[f] = !0;
    }
    return d;
  };
  var ff = function () {
    Fb = 0;
    y.publish("dom_changed");
  };
  var gf = function (b, c, d, e) {
    var f, l, h;
    if (
      (f =
        b.className ||
        ("function" === typeof b.getAttribute
          ? b.getAttribute("class")
          : void 0) ||
        "") &&
      ("skimlinks-unlinked" === f || "skimwords-link" === f)
    )
      return !1;
    if (0 === d.length && 0 === c.length)
      return x.traverse_node(b, !1, "", "", e);
    if (0 !== d.length) {
      if (!dd(b, d)) {
        f = x.get_exclude_selector(d);
        d = x.get_exclude_selector([]);
        var k = f.selector;
        var g = f.needed;
        var n = d.selector;
        if (0 === c.length || Ib(b, c)) return x.traverse_node(b, g, n, k, e);
        f = [];
        var m = 0;
        for (h = c.length; m < h; m++) {
          d = c[m];
          var p = cd(b, d);
          p.length
            ? f.push(
                (function () {
                  var b;
                  var c = [];
                  var d = 0;
                  for (b = p.length; d < b; d++)
                    (l = p[d]), c.push(x.traverse_node(l, g, n, k, e));
                  return c;
                })(),
              )
            : f.push(void 0);
        }
        return f;
      }
    } else if (0 !== c.length) {
      if (Ib(b, c)) return x.traverse_node(b, !1, "", "", e);
      h = [];
      f = 0;
      for (m = c.length; f < m; f++)
        (d = c[f]),
          (p = cd(b, d)),
          p.length
            ? h.push(
                (function () {
                  var b;
                  var c = [];
                  var d = 0;
                  for (b = p.length; d < b; d++)
                    (l = p[d]), c.push(x.traverse_node(l, !1, "", "", e));
                  return c;
                })(),
              )
            : h.push(void 0);
      return h;
    }
  };
  G(function (b) {
    b = b.relatedNode || !1;
    if (!b || P.send_in_progress || g("stop_skimwords_ajax")) return !1;
    Gb && clearTimeout(Gb);
    Fb++;
    1 === Fb && x.reset();
    gf(
      b,
      P.settings.includes || [],
      P.settings.excludes || [],
      P.settings.read_onlys || [],
    );
    if (x.get_non_colliding_nodes() && 1 <= Hb)
      return (Gb = K(function () {
        ff();
      }, 1e3));
  });
  var x = (function () {
    var b = {};
    return {
      traverse: function (c, d, e, f) {
        c = c || [];
        d = d || [];
        e = e || [];
        return b && b.length && !f ? b : this.traverse_dom(c, d, e);
      },
      traverse_dom: function (c, d, e) {
        var f, l;
        if (Ra) return b;
        Ra = !0;
        var h = this.get_exclude_selector(d);
        var k = this.get_exclude_selector([]);
        d = h.selector;
        h = h.needed;
        k = k.selector;
        0 === c.length && c.push("body");
        c = c.concat(e);
        for (var g = 0, m = c.length; g < m; g++) {
          var n = c[g];
          n = Dc(n);
          n = document.querySelectorAll(n);
          var p = (f = 0);
          for (l = n.length; f < l; p = ++f)
            (p = n[p]), this.traverse_node(p, h, k, d, e);
        }
        return b;
      },
      traverse_node: function (c, d, e, f, l) {
        var h = [];
        var k = 0;
        for (
          h.push({ node: c, tagName: "", readOnly: !1, parent_id: null });
          k < h.length;

        )
          !(c = h[k].node) ||
            cf(c) ||
            V(c, "noskimwords") ||
            V(c, "noskim") ||
            (d && "" !== e && sa(c, e)) ||
            ((h[k].readOnly = !1),
            c.nodeName && "#text" !== c.nodeName
              ? ((h[k].tagName = c.nodeName),
                null !== h[k].parent_id &&
                  (h[k].readOnly = h[h[k].parent_id].readOnly),
                h[k].readOnly ||
                  (d && sa(c, f)
                    ? (h[k].readOnly = !0)
                    : q(l, c.nodeName.toLowerCase()) && (h[k].readOnly = !0)),
                q(l, c.nodeName.toLowerCase()) && (h[k].readOnly = !0))
              : null !== h[k].parent_id &&
                ((h[k].tagName = h[h[k].parent_id].tagName),
                (h[k].readOnly = h[h[k].parent_id].readOnly)),
            ("msie" === n.detect.browser &&
              9 > n.detect.version &&
              h[k].readOnly) ||
              (c.hasChildNodes()
                ? (h = this.add_child_nodes(h[k], k, h))
                : this._add(c, !1, h[k].tagName, h[k].readOnly))),
            k++;
        return b;
      },
      is_traversed: function () {
        return Ra;
      },
      is_good_tag: function (b) {
        return ef(
          "p body div span ul ol li table tbody td tr th tfoot col colgroup em strong big small blockquote cite b dl dfn dd dt ins form legend noframes pre noscript center font i article section main".split(
            " ",
          ),
        )[b.nodeName.toLowerCase()]
          ? !0
          : !1;
      },
      is_html: function (b) {
        return (b = D(b)) && "<" === b[0];
      },
      get_non_colliding_nodes: function () {
        var c;
        var d = b;
        var e = {};
        Hb = 0;
        for (c in d) bd.call(d, c) && ((e[c] = d[c]), Hb++);
        return e;
      },
      get_as_hash_node_dict: function () {
        var c;
        var d = {};
        for (c in b) {
          var e = b[c];
          J(b, c) && (d[c] = e);
        }
        return d;
      },
      get_as_pair_array: function () {
        var c;
        var d = [];
        for (c in b) bd.call(b, c) && d.push([c, b[c]]);
        return d;
      },
      get_exclude_selector: function (b, d) {
        var c, f, l;
        var h = [];
        if (!d) {
          d = document.getElementsByTagName("body");
          if (!d.length) return { needed: !1, selector: "" };
          d = d[0];
        }
        b = b.concat(df());
        var k = (c = 0);
        for (f = b.length; c < f; k = ++c) b[k] = Dc(b[k]);
        c = !1;
        f = "";
        var g = 0;
        for (l = b.length; g < l; g++) (k = b[g]), bf(d, k) && h.push(k);
        h.length && ((c = !0), (f = h.join(",").replace("class=", "class^=")));
        return { needed: c, selector: f };
      },
      length: function () {
        return Object.keys(b).length;
      },
      reset: function () {
        b = [];
        return (Ra = !1);
      },
      add_child_nodes: function (b, d, e) {
        var c, l;
        var h = b.node.childNodes;
        var k = 0;
        for (l = h.length; k < l; k++)
          (c = h[k]) &&
            c.nodeName &&
            !this._add(c, !1, b.tagName, b.readOnly) &&
            this.is_good_tag(c) &&
            e.push({
              node: c,
              tagName: b.tagName,
              readOnly: b.readOnly,
              parent_id: d,
            });
        return e;
      },
      add_node: function (b, d) {
        return this._add(b, d);
      },
      _add: function (c, d, e, f) {
        var l = null;
        "#text" === c.nodeName && (l = D(c.nodeValue));
        d = d || !1;
        if ("msie" === n.detect.browser && 9 > n.detect.version && f) return !1;
        if ("msie" !== n.detect.browser || 9 <= n.detect.version)
          try {
            c.meta = { ElementTag: e, ReadOnly: f };
          } catch (h) {}
        if (l && !this.is_html(l) && 3 <= l.length) {
          if (d && "-1" === d) return !1;
          d = this._skim_id_hash(l, d);
          if (!d) return !1;
          b[d] = c;
        }
        return l ? !0 : !1;
      },
      _skim_id_hash: function (b) {
        if (!b) return "";
        var c = D(b.replace(/\s+/g, " ")).length;
        b = b.replace(/[:\s]*/g, "");
        c = "".concat(c, ":").concat(b.substring(0, 20));
        return (c = $e(c));
      },
    };
  })();
  var ee = function (b, c, d) {
    if (ha) return !1;
    var e = (b.data ? b.data : b.childNodes[0].data).replace(
      c.repl_regex,
      c.replacement,
    );
    var f = document.createElement("span");
    c = document.createDocumentFragment();
    f.innerHTML = e;
    if ("msie" === n.detect.browser && 9 > n.detect.version) {
      e = b.previousSibling;
      var l = /^\s/;
      e &&
        e.nodeValue &&
        e.nodeValue.length &&
        l.test(e.nodeValue[e.nodeValue.length - 1]) &&
        (e.nodeValue += " ");
      (e = b.nextSibling) &&
        e.nodeValue &&
        e.nodeValue.length &&
        l.test(e.nodeValue[0]) &&
        (e.nodeValue = " ".concat(e.nodeValue));
    }
    for (; f.firstChild; )
      "#text" === f.firstChild.nodeName
        ? ((e = c.appendChild(f.firstChild)), x.add_node(e))
        : ((e = c.appendChild(f.firstChild)), null === e || d || Mb(e, !0));
    if ((d = b.parentNode)) return d.replaceChild(c, b);
  };
  var u = {
      campaign_ids: [],
      loading_started: new Date().getTime(),
      linksImpressions: {
        skimlinks: { count: 0, urls: {} },
        skimwords: { count: 0, urls: {} },
        unlinked: { count: 0, urls: {} },
      },
      awaitedModules: [],
    },
    de = new H(),
    ld = [".noskim", ".noskimwords", ".noskimw"];
  var fe = function (b) {
    wb(b, "click", Hc);
    Yc || wb(b, "contextmenu", Hc);
    return Mb(b, !1);
  };
  var hf = function (b, c, d, e) {
    var f = Ye(b);
    c = vb(c);
    f = "(?:^|[\\s]+)(?:\\\\;\\.|,\\'\\\"\\(\\)\\/:\\?])?(".concat(
      f,
      ")(?:\\'s)?(?:[\\\\;,\\.\\'\\\"|\\(\\)\\/:\\?])*(?:[\\s]+|$)",
    );
    b = cc(vb(b));
    c = '$1$2<a href="'
      .concat(c, '" class="')
      .concat(e, '" ')
      .concat("", ' data-skimwords-word="')
      .concat(b, '"  data-skim-creative="')
      .concat(d, '" title="">$3$4</a>$5$6');
    d = f.replace(/\?:/g, "");
    return {
      search_regex: new RegExp(f, "i"),
      repl_regex: new RegExp(d, "i"),
      repl_text: c,
    };
  };
  var id = function (b, c) {
    var d, e, f;
    if (!b || dd(b, ["span.skimlinks-unlinked"])) return [[], []];
    var l = b.data;
    var h = [];
    var k = [];
    for (
      e =
        /$|\b(?:https?:\/\/)?(?:[-_a-zA-Z]+\.)*(?:[-_a-zA-Z]{2,}\.[-_\w]{2,5}\b)[^[\]\s]*\b|$/gi;
      (d = e.exec(l));

    ) {
      var g = d[0];
      if ("link.phrase" !== g) {
        var m = d.index;
        if (
          0 < D(g).length &&
          -1 === g.indexOf("/.") &&
          -1 === g.indexOf("...")
        ) {
          var p = g;
          0 !== g.indexOf("http") &&
            0 !== g.indexOf("//") &&
            (p =
              "msie" === n.detect.browser && 6 >= n.detect.version
                ? "http://".concat(g)
                : "//".concat(g));
          d = B(p);
          var r = md({
            OriginalPhrase: "".concat(g),
            Url: p,
            Title: "",
            ActionType: 2,
            GroupId: 0,
            Unlinked: !0,
          });
          (f = hf("".concat(g), p, Oa.creative, "skimlinks-unlinked")) &&
            k.push({
              start: m,
              text: "".concat(vb(g)),
              domain: d,
              repl_regex: f.repl_regex,
              replacement: f.repl_text,
              regex: f.search_regex,
              phrase: r,
              link: p,
            });
          h.push(d);
        } else break;
      }
    }
    if (k.length) {
      var q = c;
      p = "skimlinks-unlinked";
      var v;
      g = document.createDocumentFragment();
      var t = 0;
      d = [];
      m = b.nodeValue;
      e = [];
      l = b.parentNode;
      p || (p = "skimwords-potential");
      q || (q = "-1");
      if (l) {
        r = 0;
        for (v = k.length; r < v; r++) {
          var u = k[r];
          var w = document.createElement("span");
          w.className = p;
          f = document.createTextNode(m.substring(t, u.start));
          g.appendChild(f);
          w.innerHTML = u.text;
          g.appendChild(w);
          t = {};
          t.node = w;
          t.match = u;
          C(t, "occurrence", u.target_occurrence);
          d.push(t);
          t = u.start + u.text.length;
          e.push(f);
          x.add_node(f, q);
        }
        k = document.createTextNode(m.substring(t));
        e.push(k);
        g.appendChild(k);
        x.add_node(k, q);
        l.replaceChild(g, b);
      }
      q = [d, e];
      k = q[0];
      q = q[1];
      g = 0;
      for (e = k.length; g < e; g++) (l = k[g]), Oa.url_spans.push(l);
    }
    q || (q = []);
    return [h, q];
  };
  var kd = function (b) {
    var c;
    if (r.exclude.length) {
      var d = r.exclude;
      var e = 0;
      for (c = d.length; e < c; e++) {
        var f = d[e];
        if (f === b) return !1;
      }
    }
    if (r.include.length) {
      d = r.include;
      e = 0;
      for (c = d.length; e < c; e++) if (((f = d[e]), f === b)) return !0;
      return !1;
    }
    return !0;
  };
  var ie = [
      "skimlinks_included_ids",
      "skimlinks_byrel",
      "skimlinks_exrel",
      "skimlinks_included_classes",
    ],
    ed = (function () {
      function b() {
        R(this, b);
        m(this, "SERVICES", b.SERVICES);
        m(this, "getService", sb);
        m(this, "trackEvent", yc);
        y.on("skim_js_init", this.onInit.bind(this));
        y.on("skim_js_start", this.onStart.bind(this));
        U.whenBeaconFullyReady(this.whenBeaconFullyReady.bind(this));
      }
      return S(b, [
        { key: "onInit", value: function () {} },
        { key: "onStart", value: function () {} },
        { key: "whenBeaconFullyReady", value: function () {} },
        {
          key: "publishEvent",
          value: function (b, d) {
            y.publish(b, d);
          },
        },
        {
          key: "onEvent",
          value: function (b, d) {
            y.on(b, d);
          },
        },
        {
          key: "registerClickInterceptor",
          value: function (b, d) {
            sb(Ka.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(b, d);
          },
        },
      ]);
    })();
  m(ed, "SERVICES", Ka);
  var fd = new H(),
    jf = (function (b) {
      function c() {
        R(this, c);
        var b = arguments.length;
        for (var e = Array(b), f = 0; f < b; f++) e[f] = arguments[f];
        b = sd(this, c, [].concat(e));
        m(b, "excludedDomains", void 0);
        m(b, "linkSwappingDomains", []);
        m(b, "otherMerchantDomains", []);
        m(b, "swappedAnchorsInfo", []);
        m(b, "nonSwappedAnchorsInfo", []);
        m(b, "onAnchorClick", function (b) {
          var c = b.anchor.getAttribute(
            "data-skimlinks-link-swapping-match-id",
          );
          if (!c) return !1;
          b.setAnchorClickInterceptorTarget(ub.SKIMLINKS);
          b.setSourceApp(15);
          b.setLinkSwappingMatchId(c);
          return !1;
        });
        return b;
      }
      td(c, b);
      return S(c, [
        {
          key: "onInit",
          value: function () {
            this.excludedDomains = g(
              "skimlinks_excluded_link_swapping_domains",
              [],
            );
            this.onEvent(
              "EVENTS__BEACON__REQUEST_COMPLETED",
              this.onBeaconRequestCompleted.bind(this),
            );
          },
        },
        {
          key: "onStart",
          value: function () {
            this.registerClickInterceptor(this.onAnchorClick, ub.LINK_SWAPPING);
          },
        },
        {
          key: "onBeaconRequestCompleted",
          value: function (b) {
            var c = this;
            b = b.response;
            b.link_swapping_domains.forEach(function (b) {
              q(c.linkSwappingDomains, b) || c.linkSwappingDomains.push(b);
            });
            b.merchant_domains.forEach(function (b) {
              q(c.linkSwappingDomains, b) ||
                q(c.otherMerchantDomains, b) ||
                c.otherMerchantDomains.push(b);
            });
          },
        },
        {
          key: "whenBeaconFullyReady",
          value: function () {
            var b = this,
              c = this.getSwappableAnchors();
            if (c.length) {
              var f = this.sendLinkSwappingApiRequest(c);
              f.readyState.whenReady(function () {
                var d = f.response;
                d &&
                  0 !== Object.keys(d).length &&
                  (b.registerLinkSwappingDomainsAsAffiliate(d),
                  b.applyLinkSwapping(c, d),
                  b.sendLinkSwappingTracking(),
                  b.sendLinkNonSwappedTracking());
                b.onLinkSwappingProcessDone();
              });
            } else this.onLinkSwappingProcessDone();
          },
        },
        {
          key: "registerLinkSwappingDomainsAsAffiliate",
          value: function (b) {
            v(b, function (b) {
              v(b, function (b) {
                b = b.matching_domain;
                !1 !== r.aff_domains[b] && (r.aff_domains[b] = !0);
              });
            });
          },
        },
        {
          key: "getSwappableAnchors",
          value: function () {
            var b = this,
              c = na();
            return ka(c, function (c) {
              if (
                "false" ===
                (null === c || void 0 === c
                  ? void 0
                  : c.getAttribute("data-skimlinks-link-swapping"))
              )
                return !1;
              var d = B(c.href);
              if (M(d)) {
                var e = Ma.createFromUrl(c.href);
                e && (d = e.getTargetDomain());
              }
              return q(b.excludedDomains, d) ||
                (!q(b.linkSwappingDomains, d) &&
                  !q(b.otherMerchantDomains, d)) ||
                ob(c)
                ? !1
                : !0;
            });
          },
        },
        {
          key: "sendLinkSwappingApiRequest",
          value: function (b) {
            b = Ta(b.map(Nc));
            var c = { readyState: new H(), response: null };
            me(b, function (b) {
              c.response = b;
              c.readyState.setReady();
            });
            return c;
          },
        },
        {
          key: "applyLinkSwapping",
          value: function (b, c) {
            var d = this;
            v(b, function (b) {
              var e = Nc(b),
                f = d.getBestLinkSwappingMatch(c[e]);
              e = d.isBlockedByMerchantNameOnPage(f, e);
              f && !e
                ? d.swapAnchorLink(b, f)
                : e &&
                  d.nonSwappedAnchorsInfo.push({
                    originalHref: b.href,
                    anchor: b,
                    match: f,
                    reason: "merchant_name_on_page",
                  });
            });
          },
        },
        {
          key: "getBestLinkSwappingMatch",
          value: function (b) {
            return b
              ? b.filter(function (b) {
                  return (
                    ("404" === b.reason && Db) ||
                    ("product_match" === b.reason && Eb)
                  );
                })[0]
              : null;
          },
        },
        {
          key: "isBlockedByMerchantNameOnPage",
          value: function (b, c) {
            return $c && b && B(c) !== b.matching_domain
              ? nb(b.original_merchant_names, function (b) {
                  var c;
                  return (
                    -1 !==
                    (null === (c = document.body) || void 0 === c
                      ? void 0
                      : c.innerText.toLowerCase().indexOf(b.toLowerCase()))
                  );
                })
              : !1;
          },
        },
        {
          key: "swapAnchorLink",
          value: function (b, c) {
            var d = b.href;
            b.setAttribute("data-skimlinks-link-swapping-original", d);
            b.setAttribute(
              "data-skimlinks-link-swapping-match-id",
              c.id.toString(),
            );
            if (qc(d)) {
              var e = Ma.createFromUrl(b.href);
              e.updateWaypointParams({
                url: encodeURIComponent(c.matching_link),
                xs: 15,
                ls: c.id,
              });
              b.href = e.getWaypointUrl();
            } else b.href = c.matching_link;
            this.swappedAnchorsInfo.push({
              originalHref: d,
              anchor: b,
              match: c,
            });
          },
        },
        {
          key: "sendLinkSwappingTracking",
          value: function () {
            var b = this.swappedAnchorsInfo.map(function (b) {
              return { match: b.match, originalHref: b.originalHref };
            });
            this.trackEvent("link_swapping__swapped_links", {
              number_of_links_swapped: this.swappedAnchorsInfo.length,
              swappedAnchorsInfo: JSON.stringify(b),
            });
          },
        },
        {
          key: "sendLinkNonSwappedTracking",
          value: function () {
            var b = this.nonSwappedAnchorsInfo.map(function (b) {
              return {
                match: b.match,
                originalHref: b.originalHref,
                reason: b.reason,
              };
            });
            0 < this.nonSwappedAnchorsInfo.length &&
              this.trackEvent("link_swapping__not_swapped", {
                number_of_links_non_swapped: this.nonSwappedAnchorsInfo.length,
                nonSwappedAnchorsInfo: JSON.stringify(b),
              });
          },
        },
        {
          key: "onLinkSwappingProcessDone",
          value: function () {
            fd.isReady() || fd.setReady();
          },
        },
      ]);
    })(ed),
    yb = !1,
    da = !1,
    pa = null,
    qa = null,
    ye = {
      detect: function (b) {
        a: {
          try {
            var c = navigator.userAgent.toLowerCase();
            if (-1 === c.indexOf("firefox") && -1 === c.indexOf("chrome")) {
              da = !0;
              yb = !1;
              break a;
            }
          } catch (d) {}
          c = "".concat(11 * Math.random());
          pa = new Image();
          pa.onload = Pc;
          pa.src = "//p.skimresources.com/px.gif?ch=*&rn=*"
            .replace(/\*/, "1")
            .replace(/\*/, c);
          qa = new Image();
          qa.onload = Pc;
          qa.src = "//p.skimresources.com/px.gif?ch=*&rn=*"
            .replace(/\*/, "2")
            .replace(/\*/, c);
        }
        Oc(b, 250);
      },
    };
  new H();
  var re = {},
    gd = bc([!!Xc && "mouseup", "click"]),
    kf = ["auxclick", "contextmenu", "touchstart"],
    lf = (function () {
      function b(c, d) {
        R(this, b);
        m(this, "type", void 0);
        m(this, "anchor", void 0);
        m(this, "affiliationType", void 0);
        m(this, "nativeEvent", void 0);
        m(this, "clientClickId", void 0);
        m(this, "targetedInterceptor", void 0);
        var e = Md(c);
        this.type = this.getInternalClickType(d);
        this.anchor = c;
        this.affiliationType = e;
        this.nativeEvent = d;
        this.clientClickId = db();
        this.targetedInterceptor = null;
      }
      return S(b, [
        {
          key: "setAnchorClickInterceptorTarget",
          value: function (b) {
            this.targetedInterceptor = b;
          },
        },
        {
          key: "setSourceApp",
          value: function (b) {
            var c = this.anchor;
            F(c).sourceApp = b;
            Ga(c);
          },
        },
        {
          key: "setLinkSwappingMatchId",
          value: function (b) {
            var c = this.anchor;
            F(c).linkSwappingMatchId = b;
            Ga(c);
          },
        },
        {
          key: "getInternalClickType",
          value: function (b) {
            return q(gd, b.type) && 0 === b.button
              ? Ja.LEFT_CLICK
              : ("auxclick" !== b.type && "click" !== b.type) || 1 !== b.button
                ? Ja.OTHER_CLICK
                : Ja.MIDDLE_CLICK;
          },
        },
      ]);
    })(),
    ue = (function () {
      function b() {
        var c = this;
        R(this, b);
        m(this, "interceptors", void 0);
        m(this, "onClick", function (b, e) {
          var d = Nb(b);
          d &&
            (d.skimlinksOriginalHref && d.skimlinksRestoreSwappedLink(),
            (d = new lf(d, b)),
            c.dispatchAnchorClick(d, e));
        });
        m(this, "registerInterceptor", function (b, e) {
          if (!t(b)) throw Error("InterceptorHandler should be a function");
          if (E(e)) throw Error("Missing priority for click interceptor");
          c.interceptors.push({ handler: b, priority: e });
          c.interceptors.sort(function (b, c) {
            return b.priority - c.priority;
          });
        });
        m(this, "triggerLeftClickFromMouseEvent", function (b, e) {
          var d = c.findInterceptorsWithPriority(e);
          if (E(e)) c.onClick(b);
          else if (d.length) c.onClick(b, d);
        });
        this.interceptors = [];
        this.initGlobalClickHandler();
      }
      return S(b, [
        {
          key: "initGlobalClickHandler",
          value: function () {
            Rc(N, gd, this.onClick, !0);
            Rc(N, kf, this.onClick, !0);
          },
        },
        {
          key: "dispatchAnchorClick",
          value: function (b, d) {
            var c = this;
            (d || this.interceptors).some(function (d) {
              var e = d.handler;
              return c.isTargetedInterceptor(d, b) ? e(b) : !1;
            });
          },
        },
        {
          key: "findInterceptorsWithPriority",
          value: function (b) {
            return ka(this.interceptors, function (c) {
              return c.priority === b;
            });
          },
        },
        {
          key: "isTargetedInterceptor",
          value: function (b, d) {
            var c = d.targetedInterceptor === b.priority;
            return !d.targetedInterceptor || c;
          },
        },
      ]);
    })(),
    ra = G(function () {
      Ec(Na.POST_PAGE_LOAD);
      document.removeEventListener("DOMContentLoaded", ra);
      document.removeEventListener("load", ra);
    }),
    we = {
      skimlinks: !1,
      skimwords: !1,
      unlinked: !1,
      audience: !1,
      GDPRConsent: !1,
      incentivePopup: !1,
    };
  dc &&
    G(function () {
      y.on("skim_js_init", Yd);
      y.on("skim_js_init", be);
      y.on("skim_js_init", ke);
      y.on("skim_js_start", le);
      La && new jf();
      ve();
    })();
})();
