!(function () {
  "use strict";
  var i = function () {
    return (
      (i =
        Object.assign ||
        function (i) {
          for (var n, t = 1, e = arguments.length; t < e; t++)
            for (var o in (n = arguments[t]))
              Object.prototype.hasOwnProperty.call(n, o) && (i[o] = n[o]);
          return i;
        }),
      i.apply(this, arguments)
    );
  };
  "function" == typeof SuppressedError && SuppressedError;
  var n = window.adsConfig,
    t = window.location,
    e = window.rapidInstance,
    o = window.rapidPageConfig,
    a = window.YAHOO,
    r = window.wafer,
    d = a.context,
    l = d.meta,
    c = void 0 === l ? {} : l;
  d.site, c.siteAttribute, c.url;
  var v = r.utils.getUrlParameterValueByName,
    s = (o || {}).rapidConfig;
  s && s.keys;
  var u,
    f = a.i13n && a.i13n.SPACEID,
    p = new RegExp(/rs="([^"]*)"/),
    m = [];
  var w = function (i, o, a, r) {
      var l,
        c,
        s = window.DARLA;
      if (s) {
        var u =
            null === (l = null == i ? void 0 : i.meta) || void 0 === l
              ? void 0
              : l.data,
          m = null == u ? void 0 : u.adMeta,
          w = "",
          h = s.evtSettings("AUTO") || { ps: {} },
          g = { autoIV: 1, autoMax: 25, autoRT: "10000" },
          A = n.clusterPositionMeta,
          E = void 0 === A ? {} : A,
          O = E.siteAttributes,
          b = void 0 === O ? "" : O,
          y = E.addAutoEvent,
          P = void 0 !== y && y,
          R = "",
          C = d.ynet,
          L = d.bucket,
          x = d.device,
          M = d.intl,
          S = d.site,
          j = d.rid;
        "1" === C &&
          (-1 !==
            (null === (c = null == t ? void 0 : t.search) || void 0 === c
              ? void 0
              : c.indexOf("_spaceid")) && (w = h.sp),
          (R = (v && v("atwKV", window.location.href)) || R));
        var D = { pg: { device: x, intl: M, property: S, rid: j, test: L } },
          I = (null == m ? void 0 : m.site_attribute) || "";
        if ((L && (I += ' Y-BUCKET="'.concat(L, '"')), r && b)) {
          var k = I.match(p);
          if (2 === (null == k ? void 0 : k.length) && e) {
            var T = e.getRapidAttribute("keys"),
              U = T.pd,
              B = void 0 === U ? "" : U,
              _ = T.pt,
              q = void 0 === _ ? "" : _,
              V = T.site,
              Y = void 0 === V ? "" : V,
              z = T.ver,
              F = void 0 === z ? "" : z;
            I = I.replace(
              k[1],
              ""
                .concat(k[1], ";pt:")
                .concat(q, ";site:")
                .concat(Y, ";ver:")
                .concat(F, ";pd:")
                .concat(B),
            );
          }
          I += " " + b;
        } else I = (null == h ? void 0 : h.sa) || "";
        R && (I += " ".concat(R)),
          -1 === I.indexOf("ctout") && (I += " ctout=380");
        var H,
          K = (function (i, t) {
            var e, o;
            if (t)
              return null ===
                (e = null == n ? void 0 : n.clusterPositionMeta) || void 0 === e
                ? void 0
                : e.positions.filter(function (n) {
                    return -1 !== i.indexOf(n.id);
                  });
            var a =
              null === (o = null == n ? void 0 : n.clientPositionMeta) ||
              void 0 === o
                ? void 0
                : o.positions;
            return a
              ? a.filter(function (n) {
                  return -1 !== i.indexOf(n.id);
                })
              : i.map(function (i) {
                  var t;
                  return null === (t = null == n ? void 0 : n.positions[i]) ||
                    void 0 === t
                    ? void 0
                    : t.meta;
                });
          })(o, r),
          N = [],
          W =
            ((H = t.protocol + "//" + t.host),
            t.pathname && (H += t.pathname),
            H);
        if (null == K ? void 0 : K.length) {
          for (var G = 0, J = K; G < J.length; G++) {
            var Q = J[G];
            N.push(Q.id),
              Q.meta || (Q.meta = {}),
              (Q.meta.hostURL = W),
              P &&
                !h.ps[Q.id] &&
                (h.ps[Q.id] = Object.assign({}, { id: Q.id }, g)),
              s.addPos(Q);
          }
          P && s.add(h),
            s.add(a, {
              name: a,
              ps: o,
              ref: t.href,
              sa: I,
              sp: (null == m ? void 0 : m.spaceid) || w || f,
              ult: D,
            }),
            s.event(a);
        }
      }
    },
    h = function (i, t, e, o) {
      if ((void 0 === o && (o = !1), n)) {
        var a = window.DARLA;
        !a || a.inProgress()
          ? (function (i, n, t, e) {
              m.push([i, n, t, e]),
                clearInterval(u),
                (u = setInterval(function () {
                  var i = window.DARLA;
                  i &&
                    (0 !== m.length
                      ? ("AUTO" === i.inProgress() && i.abort(),
                        i.inProgress() || w.apply(null, m.shift()))
                      : clearInterval(u));
                }, 500));
            })(i, t, e, o)
          : w(i, t, e, o);
      }
    };
  !(function (n) {
    var t,
      e = n.adsConfig,
      o = n.wafer,
      a = n.YAHOO,
      r = a.context,
      d = r.device,
      l = r.feature,
      c = void 0 === l ? [] : l,
      v = r.meta;
    (void 0 === v ? {} : v).spaceId =
      null === (t = null == a ? void 0 : a.i13n) || void 0 === t
        ? void 0
        : t.SPACEID;
    var s = "smartphone" === d,
      u = s
        ? ["LREC", "LREC2", "LREC3", "WFPAD", "WFPAD2"]
        : ["LREC", "LREC2", "LREC3", "LDRB", "LDRB2", "MAST", "MAST2", "MON"];
    function f(t) {
      var o = (t || {}).elem,
        a = (function (i) {
          if (!i) return 0;
          var n = document.querySelectorAll(
            "div.wafer-caas,div.wafer-caas-complete",
          );
          return (
            Array.from(n).findIndex(function (n) {
              return n === i;
            }) + 1
          );
        })(o);
      if (a > 1) {
        var r = [],
          d = a - 1;
        -1 !== c.indexOf("enableGAMAds") &&
          (function (i, t) {
            var e,
              o,
              a,
              r = {},
              d =
                null ===
                  (o =
                    null === (e = n.benji) || void 0 === e
                      ? void 0
                      : e.config) || void 0 === o
                  ? void 0
                  : o.positions,
              l = {};
            if (s && d) {
              var c = Object.keys(d),
                v = {};
              c.forEach(function (i) {
                var n, t, e;
                v[i] = d[i];
                var o =
                  null ===
                    (t =
                      null === (n = v[i]) || void 0 === n ? void 0 : n.kvs) ||
                  void 0 === t
                    ? void 0
                    : t.loc;
                "top_center" === o
                  ? (l.size =
                      null === (e = v[i]) || void 0 === e ? void 0 : e.size)
                  : "btm_center" === o && (l = Object.assign({}, v[i], l));
              });
            }
            u.forEach(function (n) {
              var e = "sda-".concat(n, "-iframe"),
                o = i.parentElement.querySelector("#".concat(e)),
                a = s ? l : null == d ? void 0 : d[e];
              if (o && a) {
                var c = "".concat(n, "-").concat(t);
                o.parentElement.id = "cluster-".concat(c);
                var v = "cluster-".concat(c, "-iframe");
                (o.id = v), (r[v] = Object.assign({}, a, { id: v }));
              }
            }),
              Object.keys(r).length > 0 &&
                (null === (a = n.benji) || void 0 === a || a.render(r));
          })(o, d),
          (function (n, t, o) {
            var a,
              r =
                (null === (a = null == e ? void 0 : e.clusterPositionMeta) ||
                void 0 === a
                  ? void 0
                  : a.positions) || [];
            u.forEach(function (a) {
              var d,
                l,
                c = n.parentElement.querySelector("#sda-".concat(a, "-iframe")),
                v =
                  null ===
                    (l =
                      null === (d = null == e ? void 0 : e.positions) ||
                      void 0 === d
                        ? void 0
                        : d[a]) || void 0 === l
                    ? void 0
                    : l.meta;
              if (c && v) {
                var s = "".concat(a, "-").concat(t);
                (c.parentElement.id = "cluster-".concat(s)),
                  (c.id = "cluster-".concat(s, "-iframe")),
                  o.push(s),
                  r.push(
                    i(i({}, v), {
                      clean: c.parentElement.id,
                      dest: c.id,
                      id: s,
                      pos: s,
                    }),
                  );
              }
            });
          })(o, d, r),
          r.length > 0 && h(t, r, "clusterAds", !0);
      }
    }
    o &&
      o.ready(function () {
        o.on("caas:article:pre:inview", f);
      }, n);
  })(window);
})();
//# sourceMappingURL=clusterSda.js.map
