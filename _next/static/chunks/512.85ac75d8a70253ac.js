(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [512],
    {
        4319: function (e, r) {
            !(function (e) {
                "use strict";
                /*!
                 * EasePack 3.12.2
                 * https://greensock.com
                 *
                 * @license Copyright 2008-2023, GreenSock. All rights reserved.
                 * Subject to the terms at https://greensock.com/standard-license or for
                 * Club GreenSock members, the agreement issued with that membership.
                 * @author: Jack Doyle, jack@greensock.com
                 */ var r,
                    t,
                    n = function () {
                        return (
                            r ||
                            ("undefined" != typeof window &&
                                (r = window.gsap) &&
                                r.registerPlugin &&
                                r)
                        );
                    },
                    l = function (e, r) {
                        return !!(void 0 === e
                            ? r
                            : e && !~(e + "").indexOf("false"));
                    },
                    s = function (e) {
                        if ((r = e || n())) {
                            t = r.registerEase;
                            var l,
                                s = r.parseEase(),
                                i = function (e) {
                                    return function (r) {
                                        var t = 0.5 + r / 2;
                                        e.config = function (r) {
                                            return e(
                                                2 * (1 - r) * r * t + r * r,
                                            );
                                        };
                                    };
                                };
                            for (l in s) s[l].config || i(s[l]);
                            for (l in (t("slow", u),
                            t("expoScale", d),
                            t("rough", p),
                            m))
                                "version" !== l && r.core.globals(l, m[l]);
                        }
                    },
                    i = function (e, r, t) {
                        var n =
                                (e = Math.min(1, e || 0.7)) < 1
                                    ? r || 0 === r
                                        ? r
                                        : 0.7
                                    : 0,
                            s = (1 - e) / 2,
                            i = s + e,
                            o = l(t);
                        return function (e) {
                            var r = e + (0.5 - e) * n;
                            return e < s
                                ? o
                                    ? 1 - (e = 1 - e / s) * e
                                    : r - (e = 1 - e / s) * e * e * e * r
                                : e > i
                                  ? o
                                      ? 1 === e
                                          ? 0
                                          : 1 - (e = (e - i) / s) * e
                                      : r +
                                        (e - r) * (e = (e - i) / s) * e * e * e
                                  : o
                                    ? 1
                                    : r;
                        };
                    },
                    o = function (e, t, n) {
                        var l = Math.log(t / e),
                            s = t - e;
                        return (
                            n && (n = r.parseEase(n)),
                            function (r) {
                                return (
                                    (e * Math.exp(l * (n ? n(r) : r)) - e) / s
                                );
                            }
                        );
                    },
                    a = function (e, r, t) {
                        (this.t = e),
                            (this.v = r),
                            t &&
                                ((this.next = t),
                                (t.prev = this),
                                (this.c = t.v - r),
                                (this.gap = t.t - e));
                    },
                    c = function (e) {
                        "object" != typeof e && (e = { points: +e || 20 });
                        for (
                            var t,
                                n,
                                s,
                                i,
                                o,
                                c,
                                u,
                                d = e.taper || "none",
                                p = [],
                                m = 0,
                                f = 0 | (+e.points || 20),
                                h = f,
                                x = l(e.randomize, !0),
                                w = l(e.clamp),
                                v = r ? r.parseEase(e.template) : 0,
                                g = 0.4 * (+e.strength || 1);
                            --h > -1;

                        )
                            (t = x ? Math.random() : (1 / f) * h),
                                (n = v ? v(t) : t),
                                (s =
                                    "none" === d
                                        ? g
                                        : "out" === d
                                          ? (i = 1 - t) * i * g
                                          : "in" === d
                                            ? t * t * g
                                            : t < 0.5
                                              ? (i = 2 * t) * i * 0.5 * g
                                              : (i = (1 - t) * 2) *
                                                i *
                                                0.5 *
                                                g),
                                x
                                    ? (n += Math.random() * s - 0.5 * s)
                                    : h % 2
                                      ? (n += 0.5 * s)
                                      : (n -= 0.5 * s),
                                w && (n > 1 ? (n = 1) : n < 0 && (n = 0)),
                                (p[m++] = { x: t, y: n });
                        for (
                            p.sort(function (e, r) {
                                return e.x - r.x;
                            }),
                                c = new a(1, 1, null),
                                h = f;
                            h--;

                        )
                            (o = p[h]), (c = new a(o.x, o.y, c));
                        return (
                            (u = new a(0, 0, c.t ? c : c.next)),
                            function (e) {
                                var r = u;
                                if (e > r.t) {
                                    for (; r.next && e >= r.t; ) r = r.next;
                                    r = r.prev;
                                } else for (; r.prev && e <= r.t; ) r = r.prev;
                                return (u = r), r.v + ((e - r.t) / r.gap) * r.c;
                            }
                        );
                    },
                    u = i(0.7);
                (u.ease = u), (u.config = i);
                var d = o(1, 2);
                d.config = o;
                var p = c();
                (p.ease = p), (p.config = c);
                var m = { SlowMo: u, RoughEase: p, ExpoScaleEase: d };
                for (var f in m) (m[f].register = s), (m[f].version = "3.12.2");
                n() && r.registerPlugin(u),
                    (e.EasePack = m),
                    (e.ExpoScaleEase = d),
                    (e.RoughEase = p),
                    (e.SlowMo = u),
                    (e.default = m),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            })(r);
        },
        6009: function (e, r, t) {
            "use strict";
            t.d(r, {
                Z: function () {
                    return f;
                },
            });
            var n = t(5893),
                l = t(8266),
                s = t(7294),
                i = t(6038),
                o = t(4347),
                a = t.n(o),
                c = t(1831),
                u = () =>
                    (0, n.jsxs)("svg", {
                        width: "286",
                        height: "286",
                        viewBox: "0 0 286 286",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, n.jsxs)("g", {
                                clipPath: "url(#clip0_4489_62323)",
                                children: [
                                    (0, n.jsxs)("mask", {
                                        id: "mask0_4489_62323",
                                        style: { maskType: "alpha" },
                                        maskUnits: "userSpaceOnUse",
                                        x: "18",
                                        y: "-49",
                                        width: "271",
                                        height: "203",
                                        children: [
                                            (0, n.jsx)("rect", {
                                                x: "224",
                                                y: "14.5488",
                                                width: "194.476",
                                                height: "73.7032",
                                                transform:
                                                    "rotate(149.564 224 14.5488)",
                                                fill: "url(#paint0_linear_4489_62323)",
                                            }),
                                            (0, n.jsx)("rect", {
                                                x: "167",
                                                y: "-19",
                                                width: "122",
                                                height: "173",
                                                fill: "#D9D9D9",
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("g", {
                                        mask: "url(#mask0_4489_62323)",
                                        children: (0, n.jsx)("path", {
                                            opacity: "0.15",
                                            d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                                            stroke: "#575349",
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("defs", {
                                children: [
                                    (0, n.jsxs)("linearGradient", {
                                        id: "paint0_linear_4489_62323",
                                        x1: "418.476",
                                        y1: "88.252",
                                        x2: "224",
                                        y2: "88.252",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                            (0, n.jsx)("stop", {
                                                stopColor: "#F2EFE9",
                                                stopOpacity: "0",
                                            }),
                                            (0, n.jsx)("stop", {
                                                offset: "1",
                                                stopColor: "#F2EFE9",
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("clipPath", {
                                        id: "clip0_4489_62323",
                                        children: (0, n.jsx)("rect", {
                                            width: "286",
                                            height: "286",
                                            fill: "white",
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                d = t(4319),
                p = t(6546),
                m = t(4508),
                f = (e) => {
                    let {
                            index: r,
                            slicesLength: t = 1,
                            simple: o = !1,
                            children: f,
                        } = e,
                        h = (0, s.useRef)(),
                        x = (0, s.useRef)(),
                        w = (0, s.useRef)(),
                        v = (0, s.useRef)(),
                        g = (0, s.useRef)(),
                        j = (0, s.useRef)(),
                        y = (0, s.useRef)(),
                        b = (0, s.useRef)(),
                        N = (0, s.useRef)(),
                        E = (0, s.useRef)(),
                        R = (0, s.useRef)(0),
                        C = (0, m.LZ)(),
                        L = (0, l.o)((e) => e.startTransition),
                        k = (0, l.o)((e) => e.setIsAppear),
                        _ = (0, l.o)((e) => e.isLoaded),
                        S = (0, l.o)((e) => e.isFirstLoaded),
                        F = (0, l.o)((e) => e.setCursorHidden),
                        M = () => {
                            b.current &&
                                i.p8.set(b.current, {
                                    x: window.innerWidth / 2 - 42 - 5,
                                    y: window.innerHeight / 2 - 40.5,
                                    transformOrigin: "center",
                                    rotate: -90,
                                    scale: 0,
                                });
                        },
                        P = function () {
                            let e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0],
                                r = document.querySelector(".fade");
                            r.classList.remove("opacity-0");
                            let t = i.p8.timeline({
                                delay: e ? 0.5 : 0.2,
                                onStart: () => {
                                    if (e) {
                                        let e =
                                            document.querySelector(".loader");
                                        e && i.p8.set(e, { autoAlpha: 0 });
                                    }
                                },
                                onComplete: () => {
                                    window.dispatchEvent(
                                        new CustomEvent("is-appeared"),
                                    ),
                                        C && C.start(),
                                        p.ScrollTrigger.refresh();
                                },
                            });
                            t.fromTo(
                                r,
                                { autoAlpha: 1 },
                                {
                                    autoAlpha: 0,
                                    duration: 0.4,
                                    ease: "power2.out",
                                },
                                0,
                            ).call(
                                () => {
                                    k(!0);
                                },
                                [],
                                0,
                            );
                        },
                        T = function () {
                            let e =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0];
                            M();
                            let r = document.querySelector(".fade"),
                                t = document.querySelector(".loader");
                            y.current && y.current.classList.remove("hidden");
                            let n = window.innerWidth / 83,
                                l = window.innerHeight / 80,
                                s = w.current.querySelectorAll("path"),
                                o = i.p8.timeline({
                                    delay: 0.1,
                                    onStart: () => {
                                        i.p8.set([r, t], { autoAlpha: 0 }),
                                            F(!0);
                                    },
                                    onComplete: () => {
                                        window.dispatchEvent(
                                            new CustomEvent("is-appeared"),
                                        ),
                                            C && C.start(),
                                            p.ScrollTrigger.refresh(),
                                            e &&
                                                window.dispatchEvent(
                                                    new CustomEvent(
                                                        "introduction-complete",
                                                    ),
                                                ),
                                            x.current &&
                                                (x.current.style.clipPath =
                                                    null),
                                            y.current &&
                                                y.current.classList.add(
                                                    "hidden",
                                                ),
                                            N.current &&
                                                N.current.classList.add(
                                                    "hidden",
                                                );
                                    },
                                });
                            o.addLabel("start", 0),
                                e &&
                                    o.fromTo(
                                        R,
                                        { current: 0 },
                                        {
                                            current: 100,
                                            ease: "linear",
                                            duration: 2.5,
                                            onUpdate: () => {
                                                E.current.innerHTML =
                                                    R.current < 100
                                                        ? "0" +
                                                          Math.round(R.current)
                                                        : Math.round(R.current);
                                            },
                                        },
                                        0,
                                    ),
                                o
                                    .fromTo(
                                        w.current,
                                        {
                                            rotate: 120,
                                            autoAlpha: 0,
                                            scale: 0.2,
                                        },
                                        {
                                            rotate: 0,
                                            scale: 1,
                                            autoAlpha: 1,
                                            ease: "expo.out",
                                            duration: 1.9,
                                        },
                                        "start",
                                    )
                                    .fromTo(
                                        s,
                                        { scale: 0.1 },
                                        {
                                            scale: 1,
                                            ease: "expo.out",
                                            duration: 0.95,
                                        },
                                        "start+=0.12",
                                    )
                                    .fromTo(
                                        v.current,
                                        { scale: 0.45, autoAlpha: 0 },
                                        {
                                            scale: 1,
                                            autoAlpha: 1,
                                            ease: "power2.out",
                                            duration: 2,
                                        },
                                        "start",
                                    )
                                    .fromTo(
                                        v.current,
                                        { autoAlpha: 0 },
                                        {
                                            autoAlpha: 1,
                                            ease: "power2.out",
                                            duration: 1.2,
                                        },
                                        "start",
                                    ),
                                o
                                    .fromTo(
                                        b.current,
                                        { rotate: -90, scale: 0 },
                                        {
                                            scale: (n > l ? n : l) + 8,
                                            rotate: "+=70",
                                            duration: 2,
                                            ease: "beaucoup.intro",
                                        },
                                        e ? "start+=2.7" : "start+=1.5",
                                    )
                                    .to(
                                        [v.current, w.current],
                                        {
                                            autoAlpha: 0,
                                            ease: "power2.out",
                                            duration: 0.4,
                                        },
                                        "<30%",
                                    )
                                    .call(
                                        () => {
                                            k(!0);
                                        },
                                        [],
                                        e ? "start+=3.1" : "start+=1.9",
                                    );
                            let a = i.p8.timeline({ delay: 0.1 });
                            e
                                ? a
                                      .to(
                                          g.current,
                                          {
                                              rotate: "+=360",
                                              repeat: 2,
                                              ease: "slow(0.2, 0.67)",
                                              repeatRefresh: !0,
                                              duration: 2.2,
                                          },
                                          0,
                                      )
                                      .fromTo(
                                          j.current,
                                          { rotate: -80 },
                                          {
                                              rotate: "+=360",
                                              repeatRefresh: !0,
                                              ease: "slow(0.05, 0.6)",
                                              repeat: 2,
                                              duration: 2.4,
                                          },
                                          0.12,
                                      )
                                : a
                                      .to(
                                          g.current,
                                          {
                                              rotate: "+=360",
                                              repeat: 2,
                                              ease: "slow(0.2, 0.67)",
                                              repeatRefresh: !0,
                                              duration: 1.9,
                                          },
                                          0,
                                      )
                                      .fromTo(
                                          j.current,
                                          { rotate: -80 },
                                          {
                                              rotate: "+=360",
                                              repeatRefresh: !0,
                                              ease: "slow(0.05, 0.6)",
                                              repeat: 2,
                                              duration: 2.1,
                                          },
                                          0.12,
                                      );
                        };
                    return (
                        (0, s.useEffect)(() => {
                            i.p8.registerPlugin(d.SlowMo),
                                i.p8.registerPlugin(a()),
                                a().create(
                                    "beaucoup.intro",
                                    "0.89, 0.12, 0.21, 1.00",
                                ),
                                S &&
                                    N.current &&
                                    N.current.classList.add("hidden");
                        }, []),
                        (0, s.useEffect)(() => {
                            _ && !S
                                ? (C && C.stop(), h.current ? P(!0) : T(!0))
                                : _ || M();
                        }, [_, S]),
                        (0, s.useEffect)(() => {
                            if (h.current) {
                                P();
                                return;
                            }
                            L && T();
                        }, [L]),
                        0 !== r || o
                            ? (0, n.jsx)("div", {
                                  ref: h,
                                  className: "simple-transition-path",
                                  children: f,
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)("div", {
                                          className:
                                              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                                          children: (0, n.jsx)("div", {
                                              ref: w,
                                              className:
                                                  "svg-wrapper w-[4.267rem]",
                                              children: (0, n.jsxs)("svg", {
                                                  width: "56",
                                                  height: "50",
                                                  viewBox: "0 0 56 50",
                                                  fill: "none",
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  children: [
                                                      (0, n.jsx)("path", {
                                                          d: "M40.565 15.0573C36.9268 17.6142 32.6423 19.102 28.1985 19.3514H27.9062C23.4275 19.0849 19.1111 17.5827 15.4385 15.0125C12.5943 13.1513 8.90682 10.3484 9.23285 6.43554C9.45769 3.74473 12.3919 2.42176 14.5842 1.74906C15.506 1.46877 16.4391 1.23332 17.3722 1.04272C24.0175 -0.257846 30.8455 -0.333841 37.5183 0.818491H37.6082C38.6313 1.00909 39.6543 1.23332 40.6886 1.5024L41.543 1.74906C43.7353 2.42176 46.6695 3.74473 46.8943 6.43554C47.2316 10.3484 43.3305 13.1626 40.4862 15.0573H40.565Z",
                                                          fill: "#D7D1C6",
                                                      }),
                                                      (0, n.jsx)("path", {
                                                          d: "M12.5493 17.6362C16.7717 19.4085 20.4376 22.2821 23.162 25.9552L23.2407 26.0674L23.3306 26.2019C25.6353 29.8457 26.2311 34.4761 26.2536 38.8263C26.2536 42.2458 25.6353 47.1453 22.5661 48.7822C20.194 50.0267 17.5071 48.3113 15.7533 46.8202C15.0226 46.2035 14.3143 45.5421 13.6398 44.8581C8.91013 39.9371 5.10259 34.2109 2.39755 27.9509V27.8724C1.99283 26.9082 1.61059 25.9216 1.27333 24.9013C1.18339 24.621 1.09347 24.3296 1.01478 24.0381C0.362728 21.7957 -0.109461 18.6228 1.94787 16.9523C5.00576 14.5193 9.50266 16.2571 12.6055 17.6362H12.5493Z",
                                                          fill: "#D7D1C6",
                                                      }),
                                                      (0, n.jsx)("path", {
                                                          d: "M43.6228 17.6362C39.3954 19.4053 35.725 22.2794 32.9988 25.9552L32.9202 26.0674L32.8302 26.2019C30.5256 29.8457 29.9297 34.4761 29.9072 38.8263C29.9072 42.2458 30.5255 47.1453 33.5947 48.7822C35.9668 50.0267 38.6537 48.3113 40.4075 46.8202C41.1382 46.2035 41.8465 45.5421 42.521 44.8581C47.2549 39.9404 51.0629 34.2135 53.7633 27.9509V27.8724C54.168 26.9082 54.5502 25.9216 54.8875 24.9013L55.1573 24.0381C55.8094 21.7957 56.2815 18.6228 54.213 16.9523C51.1551 14.5193 46.6582 16.2571 43.5666 17.6362H43.6228Z",
                                                          fill: "#D7D1C6",
                                                      }),
                                                  ],
                                              }),
                                          }),
                                      }),
                                      (0, n.jsxs)("div", {
                                          ref: v,
                                          className:
                                              "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className:
                                                      "absolute w-full h-full",
                                                  ref: g,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className:
                                                              "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                                                          children: (0, n.jsx)(
                                                              c.Z,
                                                              {
                                                                  color: "#A39B8B",
                                                              },
                                                          ),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className:
                                                              "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                                                          children: (0, n.jsx)(
                                                              u,
                                                              {},
                                                          ),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsxs)("div", {
                                                  className:
                                                      "absolute w-full h-full rounded-full",
                                                  ref: j,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className:
                                                              "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                                                          children: (0, n.jsx)(
                                                              c.Z,
                                                              {
                                                                  color: "#A39B8B",
                                                              },
                                                          ),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className:
                                                              "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                                                          children: (0, n.jsx)(
                                                              u,
                                                              {},
                                                          ),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, n.jsxs)("div", {
                                          ref: N,
                                          className:
                                              "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-dark_grey",
                                          children: [
                                              (0, n.jsx)("span", {
                                                  ref: E,
                                                  children: "000",
                                              }),
                                              (0, n.jsx)("span", {
                                                  children: "/",
                                              }),
                                              (0, n.jsx)("span", {
                                                  children: "100",
                                              }),
                                          ],
                                      }),
                                      (0, n.jsxs)("div", {
                                          style: {
                                              clipPath: "url(#svgPath)",
                                              backfaceVisibility: "hidden",
                                              transform: "translate3d(0, 0, 0)",
                                              zIndex: t - r,
                                          },
                                          ref: x,
                                          className: "transition-path relative",
                                          children: [
                                              (0, n.jsx)("div", {
                                                  className:
                                                      "absolute top-0 left-0 w-full h-screen pointer-events-none",
                                                  children: (0, n.jsx)("div", {
                                                      ref: y,
                                                      className:
                                                          "absolute top-0 left-0 w-full h-full hidden z-1",
                                                      children: (0, n.jsx)(
                                                          "svg",
                                                          {
                                                              width: "84",
                                                              height: "81",
                                                              className:
                                                                  "w-full h-full",
                                                              children: (0,
                                                              n.jsx)("defs", {
                                                                  children: (0,
                                                                  n.jsx)(
                                                                      "clipPath",
                                                                      {
                                                                          id: "svgPath",
                                                                          children:
                                                                              (0,
                                                                              n.jsx)(
                                                                                  "path",
                                                                                  {
                                                                                      ref: b,
                                                                                      d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z",
                                                                                  },
                                                                              ),
                                                                      },
                                                                  ),
                                                              }),
                                                          },
                                                      ),
                                                  }),
                                              }),
                                              f,
                                          ],
                                      }),
                                  ],
                              })
                    );
                };
        },
        1167: function (e, r, t) {
            "use strict";
            var n = t(5893);
            r.Z = () =>
                (0, n.jsxs)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, n.jsx)("circle", {
                            cx: "6",
                            cy: "6",
                            r: "2",
                            fill: "#FE814B",
                        }),
                        (0, n.jsx)("circle", {
                            cx: "6",
                            cy: "6",
                            r: "5",
                            stroke: "#FE814B",
                            strokeDasharray: "1 1",
                        }),
                    ],
                });
        },
        4936: function (e, r, t) {
            "use strict";
            var n = t(5893);
            r.Z = (e) =>
                (0, n.jsx)("svg", {
                    width: "4",
                    height: "5",
                    viewBox: "0 0 4 5",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M0 5V0L4 2.69231L0 5Z",
                        fill: e.fill || "#575349",
                    }),
                });
        },
        2512: function (e, r, t) {
            "use strict";
            t.r(r),
                t.d(r, {
                    default: function () {
                        return E;
                    },
                });
            var n = t(5893),
                l = t(6038),
                s = t(6546),
                i = t(7294),
                o = t(7771),
                a = t(4508),
                c = t(8266),
                u = t(8430),
                d = t(9010),
                p = t(4936),
                m = (e) => {
                    let { fill: r = "#F2EFE9" } = e;
                    return (0, n.jsx)("svg", {
                        width: "48",
                        height: "46",
                        viewBox: "0 0 48 46",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d: "M39.1332 42.3703C26.6704 50.793 0.0514704 38.5932 0.982129 24.005C1.77076 11.6431 14.3345 -3.39248 34.894 1.46762C50.4349 5.14135 50.8273 34.4672 39.1332 42.3703Z",
                            fill: r,
                        }),
                    });
                },
                f = () =>
                    (0, n.jsxs)("svg", {
                        width: "5",
                        height: "7",
                        viewBox: "0 0 5 7",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M1 0.501953C1.27614 0.501953 1.5 0.725811 1.5 1.00195L1.5 6.00195C1.5 6.2781 1.27614 6.50195 1 6.50195C0.723857 6.50195 0.5 6.2781 0.5 6.00195L0.5 1.00195C0.5 0.725811 0.723858 0.501953 1 0.501953Z",
                                fill: "#575349",
                            }),
                            (0, n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M4 0.501953C4.27614 0.501953 4.5 0.725811 4.5 1.00195L4.5 6.00195C4.5 6.2781 4.27614 6.50195 4 6.50195C3.72386 6.50195 3.5 6.2781 3.5 6.00195L3.5 1.00195C3.5 0.725811 3.72386 0.501953 4 0.501953Z",
                                fill: "#575349",
                            }),
                        ],
                    }),
                h = () =>
                    (0, n.jsxs)("svg", {
                        width: "13",
                        height: "13",
                        viewBox: "0 0 13 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, n.jsx)("line", {
                                x1: "12.5",
                                y1: "2.18557e-08",
                                x2: "12.5",
                                y2: "13",
                                stroke: "#F2EFE9",
                            }),
                            (0, n.jsx)("line", {
                                x1: "8.5",
                                y1: "6",
                                x2: "8.5",
                                y2: "13",
                                stroke: "#F2EFE9",
                            }),
                            (0, n.jsx)("line", {
                                x1: "4.5",
                                y1: "3",
                                x2: "4.5",
                                y2: "13",
                                stroke: "#F2EFE9",
                            }),
                            (0, n.jsx)("line", {
                                x1: "0.5",
                                y1: "8",
                                x2: "0.5",
                                y2: "13",
                                stroke: "#F2EFE9",
                            }),
                        ],
                    }),
                x = () =>
                    (0, n.jsxs)("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, n.jsx)("path", {
                                d: "M8.5 1H13V5.5",
                                stroke: "#F2EFE9",
                            }),
                            (0, n.jsx)("path", {
                                d: "M5.5 1H1V5.5",
                                stroke: "#F2EFE9",
                            }),
                            (0, n.jsx)("path", {
                                d: "M8.5 13H13V8.5",
                                stroke: "#F2EFE9",
                            }),
                            (0, n.jsx)("path", {
                                d: "M5.5 13H1V8.5",
                                stroke: "#F2EFE9",
                            }),
                        ],
                    }),
                w = t(2099),
                v = t(9362),
                g = (e) => {
                    let { loop: r, src: t } = e,
                        s = (0, i.useRef)(null),
                        o = (0, i.useRef)(null),
                        g = (0, i.useRef)(),
                        j = (0, i.useRef)(),
                        y = (0, i.useRef)(),
                        b = (0, i.useRef)(),
                        N = (0, i.useRef)(),
                        E = (0, i.useRef)(),
                        R = (0, i.useRef)(),
                        C = (0, i.useRef)(),
                        L = (0, i.useRef)(),
                        k = (0, i.useRef)(!1),
                        _ = (0, i.useRef)(),
                        S = (0, i.useRef)(!1),
                        F = (0, i.useRef)(),
                        M = (0, i.useRef)(),
                        P = (0, i.useRef)(),
                        T = (0, i.useRef)(),
                        z = (0, i.useRef)(!1),
                        H = (0, i.useRef)(!1),
                        A = (0, i.useRef)(!1),
                        Z = (0, i.useRef)(!1),
                        B = (0, i.useRef)(!1),
                        W = (0, i.useRef)(!1),
                        q = (0, i.useRef)(!1),
                        O = (0, i.useRef)(!1),
                        D = (0, a.LZ)(),
                        V = (0, v.a)("(max-width: 1024px)"),
                        I = (0, c.o)((e) => e.isPopupOpen),
                        X = (0, c.o)((e) => e.setPopupOpen),
                        U = (0, c.o)((e) => e.setHeaderVisible),
                        Y = (0, c.o)((e) => e.isAppear);
                    S.current = I;
                    let G = () => {
                            S.current
                                ? (l.p8.set([A.current, Z.current], {
                                      width: "calc(".concat(
                                          document.documentElement.offsetWidth,
                                          "px - 2rem)",
                                      ),
                                      height: "calc(".concat(
                                          window.innerHeight,
                                          "px - 2rem)",
                                      ),
                                      x: "1rem",
                                      y: "1rem",
                                  }),
                                  setTimeout(() => {
                                      l.p8.set(N.current, {
                                          x: -(
                                              window.innerWidth / 2 -
                                              N.current.offsetWidth / 2 -
                                              b.current.getBoundingClientRect()
                                                  .left
                                          ),
                                          y:
                                              window.innerHeight / 2 +
                                              N.current.offsetHeight / 2 -
                                              (window.innerHeight -
                                                  b.current.getBoundingClientRect()
                                                      .top -
                                                  window.scrollY),
                                      });
                                  }, 0))
                                : ((O.current =
                                      q.current.getBoundingClientRect().top -
                                      z.current.getBoundingClientRect().top +
                                      q.current.offsetHeight),
                                  l.p8.set(W.current, { y: O.current }));
                        },
                        K = () => {
                            !document.fullscreenElement &&
                                o.current &&
                                o.current.pause();
                        };
                    (0, i.useEffect)(
                        () => (
                            (O.current =
                                q.current.getBoundingClientRect().top -
                                z.current.getBoundingClientRect().top +
                                q.current.offsetHeight),
                            l.p8.set(W.current, { y: O.current }),
                            J(),
                            window.addEventListener("keydown", es),
                            window.addEventListener("resize", G),
                            o.current.addEventListener("waiting", () => {
                                (_.current = !0),
                                    j.current.classList.remove("opacity-0");
                            }),
                            o.current.addEventListener("playing", () => {
                                _.current &&
                                    ((_.current = !1),
                                    j.current.classList.add("opacity-0"));
                            }),
                            o.current.addEventListener("seeked", () => {
                                j.current.classList.add("opacity-0");
                            }),
                            o.current.addEventListener("seeking", () => {
                                j.current.classList.remove("opacity-0");
                            }),
                            () => {
                                window.removeEventListener("resize", G),
                                    window.removeEventListener("keydown", es),
                                    o.current &&
                                        o.current.removeEventListener(
                                            "fullscreenchange",
                                            K,
                                        );
                            }
                        ),
                        [],
                    ),
                        (0, i.useEffect)(
                            () => (
                                I
                                    ? ((T.current = u.Z.add(eo, 0)),
                                      k.current
                                          ? en()
                                          : ((k.current = !0),
                                            Q().then(() => en())))
                                    : el(),
                                () => {
                                    I && T.current && T.current();
                                }
                            ),
                            [I],
                        );
                    let J = () => {
                            (P.current = l.p8.timeline({ paused: !0 })),
                                P.current.fromTo(
                                    L.current,
                                    { scaleX: 0 },
                                    { scaleX: 1, ease: "linear" },
                                );
                        },
                        Q = () =>
                            new Promise((e) => {
                                (o.current.src = t),
                                    o.current.load(),
                                    o.current.addEventListener(
                                        "loadeddata",
                                        () => {
                                            e();
                                        },
                                    ),
                                    o.current.addEventListener(
                                        "fullscreenchange",
                                        K,
                                    );
                            }),
                        $ = () => {
                            V || (o.current.paused ? er() : et());
                        },
                        ee = () => {
                            let e =
                                o.current.requestFullscreen ||
                                o.current.msRequestFullscreen ||
                                o.current.mozRequestFullScreen ||
                                o.current.webkitRequestFullscreen;
                            e && e.call(o.current);
                        },
                        er = () => {
                            N.current.classList.add("a"), o.current.play();
                        },
                        et = () => {
                            N.current.classList.remove("a"), o.current.pause();
                        },
                        en = () => {
                            if (V) {
                                ee(), o.current.play();
                                return;
                            }
                            D && D.stop(),
                                D && D.scrollTo(0, { force: !0 }),
                                U(!1),
                                (o.current.currentTime = 0),
                                s.current.classList.add("a"),
                                z.current.classList.remove("group"),
                                z.current.classList.add("pointer-events-none"),
                                y.current.classList.remove(
                                    "pointer-events-none",
                                ),
                                er(),
                                (0, w.RE)(M.current),
                                (F.current = l.p8.timeline({
                                    defaults: {
                                        ease: "expo.out",
                                        duration: 1.2,
                                    },
                                })),
                                F.current.addLabel("start", 0),
                                F.current
                                    .to(
                                        [A.current, Z.current],
                                        {
                                            width: "calc(".concat(
                                                document.documentElement
                                                    .offsetWidth,
                                                "px - 2rem)",
                                            ),
                                            height: "calc(".concat(
                                                window.innerHeight,
                                                "px - 2rem)",
                                            ),
                                            x: "1rem",
                                            y: "1rem",
                                            stagger: 0.03,
                                        },
                                        "start",
                                    )
                                    .to(
                                        H.current,
                                        {
                                            opacity: 1,
                                            ease: "power2.out",
                                            duration: 0.9,
                                        },
                                        "start",
                                    )
                                    .to(
                                        N.current,
                                        {
                                            x: -(
                                                window.innerWidth / 2 -
                                                N.current.offsetWidth / 2 -
                                                b.current.getBoundingClientRect()
                                                    .left
                                            ),
                                            y:
                                                window.innerHeight / 2 +
                                                N.current.offsetHeight / 2 -
                                                (window.innerHeight -
                                                    b.current.getBoundingClientRect()
                                                        .top -
                                                    window.scrollY),
                                            duration: 1.4,
                                        },
                                        "start",
                                    )
                                    .to(
                                        y.current,
                                        { opacity: 1, ease: "power2.out" },
                                        "start",
                                    )
                                    .fromTo(
                                        C.current,
                                        { scaleX: 0 },
                                        { scaleX: 1 },
                                        "start+=0.12",
                                    )
                                    .to(W.current, { y: 0 }, "start+=0.1")
                                    .to(
                                        o.current,
                                        {
                                            opacity: 1,
                                            ease: "power2.out",
                                            duration: 0.4,
                                        },
                                        0.6,
                                    );
                        },
                        el = () => {
                            V ||
                                (U(!0),
                                D && D.start(),
                                s.current.classList.remove("a"),
                                z.current.classList.add("group"),
                                z.current.classList.remove(
                                    "pointer-events-none",
                                ),
                                y.current.classList.add("pointer-events-none"),
                                et(),
                                (0, w.RE)(F.current),
                                (M.current = l.p8.timeline({
                                    defaults: {
                                        ease: "expo.out",
                                        duration: 0.9,
                                    },
                                })),
                                M.current
                                    .to(
                                        [A.current, Z.current],
                                        {
                                            width: "100%",
                                            height: "100%",
                                            x: "0",
                                            y: "0",
                                            stagger: -0.03,
                                        },
                                        0,
                                    )
                                    .to(
                                        H.current,
                                        {
                                            opacity: 0,
                                            ease: "power2.out",
                                            duration: 0.8,
                                        },
                                        0,
                                    )
                                    .to(N.current, { x: 0, y: 0 }, 0)
                                    .to(
                                        y.current,
                                        {
                                            opacity: 0,
                                            ease: "power2.out",
                                            duration: 0.3,
                                        },
                                        0,
                                    )
                                    .to(C.current, { scaleX: 0 }, 0)
                                    .to(W.current, { y: O.current }, 0)
                                    .to(
                                        o.current,
                                        {
                                            opacity: 0,
                                            ease: "power2.out",
                                            duration: 0.4,
                                        },
                                        0,
                                    ));
                        },
                        es = (e) => {
                            "Escape" === e.key && S.current && X(!1);
                        },
                        ei = () => {
                            S.current && !V && $();
                        },
                        eo = () => {
                            o.current &&
                                !o.current.paused &&
                                P.current.progress(
                                    o.current.currentTime / o.current.duration,
                                );
                        };
                    return (
                        (0, i.useEffect)(() => {
                            if (!Y) {
                                l.p8.set([A.current, Z.current], {
                                    yPercent: 120,
                                });
                                return;
                            }
                            let e = l.p8.timeline({ delay: 1.25 });
                            e.to([A.current, Z.current], {
                                yPercent: 0,
                                ease: "power3.out",
                                duration: 1.25,
                                stagger: 0.07,
                            });
                        }, [Y]),
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: z,
                                    onClick: () => {
                                        V
                                            ? k.current
                                                ? en()
                                                : ((k.current = !0),
                                                  Q().then(() => en()))
                                            : I || X(!0);
                                    },
                                    className:
                                        "group relative w-full h-0 pt-[71.51%] md:pt-[67.46%] cursor-pointer",
                                    children: [
                                        (0, n.jsx)("div", {
                                            ref: H,
                                            className:
                                                "fixed top-0 left-0 w-full h-full pointer-events-none bg-light_beige opacity-0",
                                        }),
                                        (0, n.jsx)("div", {
                                            ref: A,
                                            className:
                                                "absolute bottom-0 right-0 w-full h-full bg-white rounded-12",
                                        }),
                                        (0, n.jsx)("div", {
                                            ref: Z,
                                            className:
                                                "absolute bottom-0 right-0 w-full h-full bg-white rounded-12 overflow-hidden",
                                            children: (0, n.jsx)("div", {
                                                ref: B,
                                                className:
                                                    "absolute bottom-0 right-0 w-full h-full bg-white rounded-10 p-[0.2rem] overflow-hidden",
                                                children: (0, n.jsxs)("div", {
                                                    className:
                                                        "relative w-full h-full rounded-10 overflow-hidden",
                                                    children: [
                                                        (0, n.jsx)("video", {
                                                            loop: !0,
                                                            muted: !0,
                                                            playsInline: !0,
                                                            autoPlay: !0,
                                                            className:
                                                                "relative w-full h-full object-cover rounded-10 xl:rounded-none",
                                                            children: (0,
                                                            n.jsx)("source", {
                                                                type: "video/mp4",
                                                                src: r,
                                                            }),
                                                        }),
                                                        (0, n.jsx)("video", {
                                                            ref: o,
                                                            onClick: $,
                                                            onEnded: () => {
                                                                N.current.classList.remove(
                                                                    "a",
                                                                );
                                                            },
                                                            disablePictureInPicture:
                                                                !0,
                                                            controlsList:
                                                                "nodownload noplaybackrate",
                                                            className:
                                                                "absolute top-0 left-0 w-full h-full object-contain rounded-10 bg-black opacity-0 pointer-events-auto xl:object-cover",
                                                        }),
                                                        (0, n.jsx)("div", {
                                                            className:
                                                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3.6rem] h-[3.6rem] md:w-[6.5rem] md:h-[6.5rem] lg:w-[9.5rem] lg:h-[9.5rem] xl:w-[5.5rem] xl:h-[5.5rem] pointer-events-none",
                                                            children: (0,
                                                            n.jsx)("div", {
                                                                ref: N,
                                                                onClick: () =>
                                                                    ei(),
                                                                className:
                                                                    "group w-full h-full pointer-events-auto",
                                                                children: (0,
                                                                n.jsxs)("div", {
                                                                    className:
                                                                        "relative w-full h-full transition-transform ease-out duration-500 xl:group-hover:scale-[1.2] xl:hover:scale-[1.2]",
                                                                    children: [
                                                                        (0,
                                                                        n.jsx)(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3.6rem] h-[3.6rem] md:w-[5.5rem] md:h-[5.5rem] lg:w-[8.5rem] lg:h-[8.5rem] xl:w-[4.5rem] xl:h-[4.5rem] svg-wrapper",
                                                                                children:
                                                                                    (0,
                                                                                    n.jsx)(
                                                                                        m,
                                                                                        {},
                                                                                    ),
                                                                            },
                                                                        ),
                                                                        (0,
                                                                        n.jsx)(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.415rem] h-[0.5rem] md:w-[0.6rem] md:h-[0.7rem] lg:w-[1rem] lg:h-[1.1rem] xl:w-[0.6rem] xl:h-[0.7rem] svg-wrapper group-[.a]:opacity-0",
                                                                                children:
                                                                                    (0,
                                                                                    n.jsx)(
                                                                                        p.Z,
                                                                                        {},
                                                                                    ),
                                                                            },
                                                                        ),
                                                                        (0,
                                                                        n.jsx)(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.415rem] h-[0.5rem] md:w-[0.6rem] md:h-[0.7rem] lg:w-[1rem] lg:h-[1.1rem] xl:w-[0.6rem] xl:h-[0.7rem] svg-wrapper opacity-0 group-[.a]:opacity-100",
                                                                                children:
                                                                                    (0,
                                                                                    n.jsx)(
                                                                                        f,
                                                                                        {},
                                                                                    ),
                                                                            },
                                                                        ),
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                        (0, n.jsx)("div", {
                                                            ref: q,
                                                            className:
                                                                "pointer-events-none absolute top-[7rem] right-[0.8rem] md:top-1/2 md:-translate-y-1/2 md:right-[0.8rem]",
                                                            children: (0,
                                                            n.jsx)("div", {
                                                                ref: W,
                                                                onClick: () => {
                                                                    X(!1);
                                                                },
                                                                className:
                                                                    "pointer-events-auto",
                                                                children: (0,
                                                                n.jsx)("div", {
                                                                    className:
                                                                        "flex items-center justify-center w-[6.6rem] h-[6.6rem] bg-white rounded-12 cursor-pointer transition-transform ease-out duration-500 xl:hover:scale-[1.05]",
                                                                    children:
                                                                        (0,
                                                                        n.jsx)(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "w-[1rem] h-[1rem] svg-wrapper text-dark_grey",
                                                                                children:
                                                                                    (0,
                                                                                    n.jsx)(
                                                                                        d.Z,
                                                                                        {},
                                                                                    ),
                                                                            },
                                                                        ),
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    ref: s,
                                    className:
                                        "group fixed top-0 left-0 w-full h-screen-mobile px-[1rem] py-[1.3rem] z-popup pointer-events-none",
                                    children: (0, n.jsxs)("div", {
                                        className: "relative w-full h-full",
                                        children: [
                                            (0, n.jsx)("div", {
                                                ref: j,
                                                className:
                                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase opacity-0",
                                                children: "Loading",
                                            }),
                                            (0, n.jsxs)("div", {
                                                ref: y,
                                                className:
                                                    "absolute left-0 bottom-0 w-full flex items-center px-25 md:px-36 pb-30 text-white cursor-pointer pointer-events-none opacity-0",
                                                children: [
                                                    (0, n.jsx)("div", {
                                                        ref: g,
                                                        onClick: $,
                                                        className:
                                                            "relative mr-16 w-[6.5rem] h-[6.5rem] lg:w-[9.5rem] lg:h-[9.5rem] xl:w-[5.5rem] xl:h-[5.5rem]",
                                                        children: (0, n.jsx)(
                                                            "div",
                                                            {
                                                                ref: b,
                                                                className:
                                                                    "play-button-w absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full",
                                                            },
                                                        ),
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        ref: C,
                                                        onClick: (e) => {
                                                            let r =
                                                                    C.current.getBoundingClientRect(),
                                                                t =
                                                                    Math.round(
                                                                        100 *
                                                                            l.p8.utils.clamp(
                                                                                0,
                                                                                1,
                                                                                l.p8.utils.mapRange(
                                                                                    r.left,
                                                                                    r.right,
                                                                                    0,
                                                                                    1,
                                                                                    e.clientX,
                                                                                ),
                                                                            ),
                                                                    ) / 100;
                                                            (o.current.currentTime =
                                                                o.current
                                                                    .duration *
                                                                t),
                                                                o.current
                                                                    .paused &&
                                                                    l.p8.to(
                                                                        P.current,
                                                                        {
                                                                            progress:
                                                                                t,
                                                                            duration: 0.9,
                                                                            ease: "expo.out",
                                                                        },
                                                                    );
                                                        },
                                                        className:
                                                            "group-[.a]:pointer-events-auto relative flex-1 py-10 origin-right",
                                                        children: (0, n.jsxs)(
                                                            "div",
                                                            {
                                                                className:
                                                                    "relative w-full",
                                                                children: [
                                                                    (0, n.jsx)(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "w-full h-px bg-white opacity-25",
                                                                        },
                                                                    ),
                                                                    (0, n.jsx)(
                                                                        "div",
                                                                        {
                                                                            ref: L,
                                                                            className:
                                                                                "absolute left-0 top-0 w-full h-px bg-white origin-left",
                                                                        },
                                                                    ),
                                                                ],
                                                            },
                                                        ),
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                        className:
                                                            "relative flex items-center gap-x-container ml-16 uppercase group-[.a]:pointer-events-auto",
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className:
                                                                    "w-[1.3rem] h-[1.3rem] svg-wrapper",
                                                                onClick: () => {
                                                                    o.current
                                                                        .muted
                                                                        ? (l.p8.to(
                                                                              E.current.querySelectorAll(
                                                                                  "svg > line",
                                                                              )[0],
                                                                              {
                                                                                  attr: {
                                                                                      y1: 218557e-13,
                                                                                  },
                                                                                  ease: "expo.out",
                                                                              },
                                                                          ),
                                                                          l.p8.to(
                                                                              E.current.querySelectorAll(
                                                                                  "svg > line",
                                                                              )[1],
                                                                              {
                                                                                  attr: {
                                                                                      y1: 6,
                                                                                  },
                                                                                  ease: "expo.out",
                                                                              },
                                                                          ),
                                                                          l.p8.to(
                                                                              E.current.querySelectorAll(
                                                                                  "svg > line",
                                                                              )[2],
                                                                              {
                                                                                  attr: {
                                                                                      y1: 3,
                                                                                  },
                                                                                  ease: "expo.out",
                                                                              },
                                                                          ),
                                                                          l.p8.to(
                                                                              E.current.querySelectorAll(
                                                                                  "svg > line",
                                                                              )[3],
                                                                              {
                                                                                  attr: {
                                                                                      y1: 8,
                                                                                  },
                                                                                  ease: "expo.out",
                                                                              },
                                                                          ))
                                                                        : l.p8.to(
                                                                              E.current.querySelectorAll(
                                                                                  "svg > line",
                                                                              ),
                                                                              {
                                                                                  attr: {
                                                                                      y1: 11,
                                                                                  },
                                                                                  ease: "expo.out",
                                                                              },
                                                                          ),
                                                                        (o.current.muted =
                                                                            !o
                                                                                .current
                                                                                .muted);
                                                                },
                                                                ref: E,
                                                                children: (0,
                                                                n.jsx)(h, {}),
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                className:
                                                                    "w-[1.2rem] h-[1.2rem] origin-center hover:scale-125 transition-transform ease-out duration-300 svg-wrapper",
                                                                onClick: ee,
                                                                ref: R,
                                                                children: (0,
                                                                n.jsx)(x, {}),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        })
                    );
                },
                j = t(1167),
                y = t(4179),
                b = t(6009),
                N = t(6494),
                E = (e) => {
                    let { slice: r, slices: t, index: a } = e,
                        u = (0, i.useRef)(null),
                        d = (0, i.useRef)(null),
                        p = (0, i.useRef)(!1),
                        m = (0, i.useRef)(!1),
                        f = (0, i.useRef)([]),
                        h = (0, i.useRef)([]),
                        x = (0, i.useRef)([]),
                        w = (0, i.useRef)([]),
                        E = (0, i.useRef)(!1),
                        R = (0, i.useRef)(!1),
                        C = (0, i.useRef)(!1),
                        L = (0, i.useRef)(!1),
                        k = (0, i.useRef)(!1),
                        _ = (0, i.useRef)(null),
                        S = (0, i.useRef)(!1),
                        F = (0, v.a)("(max-width: 1024px)", !0),
                        [M, P] = (0, i.useState)(0),
                        [T, z] = (0, i.useState)(0),
                        [H, A] = (0, i.useState)(1),
                        Z = (0, c.o)((e) => e.isPopupOpen),
                        B = (0, c.o)((e) => e.isLoaded),
                        W = (0, c.o)((e) => e.isFirstLoaded),
                        q = (0, c.o)((e) => e.isAppear),
                        O = (0, c.o)((e) => e.animationContext),
                        D = (0, c.o)((e) => e.setCursorHidden),
                        V = () => {
                            R && R.current.classList.add("hidden");
                        },
                        I = () => {
                            P(window.innerWidth), z(window.innerHeight);
                        },
                        X = (e) => {
                            A(e);
                        },
                        U = () => {
                            let e =
                                    window.innerWidth >= 1024
                                        ? f.current[0]
                                        : h.current[0],
                                r =
                                    window.innerWidth >= 1024
                                        ? x.current[0]
                                        : w.current[0],
                                t =
                                    window.innerWidth >= 1024
                                        ? f.current[1]
                                        : h.current[1],
                                n =
                                    window.innerWidth >= 1024
                                        ? x.current[1]
                                        : w.current[1],
                                s = l.p8.timeline();
                            return (
                                s
                                    .fromTo(
                                        e,
                                        { yPercent: 200 },
                                        {
                                            yPercent: 100,
                                            duration: 1.2,
                                            ease: "power4.inOut",
                                        },
                                        0,
                                    )
                                    .fromTo(
                                        r,
                                        { letterSpacing: "-0.15em" },
                                        {
                                            duration: 1.2,
                                            letterSpacing: "-0.04em",
                                            ease: "power4.inOut",
                                        },
                                        "<",
                                    )
                                    .fromTo(
                                        r,
                                        { yPercent: 0 },
                                        {
                                            yPercent: -100,
                                            duration: 1.4,
                                            ease: "power4.inOut",
                                        },
                                        "-=0.6",
                                    )
                                    .fromTo(
                                        t,
                                        { yPercent: 100 },
                                        {
                                            yPercent: 0,
                                            duration: 1.4,
                                            ease: "power4.inOut",
                                        },
                                        "<",
                                    )
                                    .fromTo(
                                        n,
                                        { letterSpacing: "-0.15em" },
                                        {
                                            duration: 1.4,
                                            letterSpacing: "-0.04em",
                                            ease: "power4.inOut",
                                        },
                                        "-=1.4",
                                    ),
                                (_.current = s),
                                s
                            );
                        },
                        Y = () => {
                            E.current && E.current.play();
                            let e = l.p8.timeline(),
                                r = U();
                            e.add(r, "-=0.7");
                        },
                        G = () => {
                            let e =
                                    window.innerWidth >= 1024
                                        ? f.current[0]
                                        : h.current[0],
                                r =
                                    window.innerWidth >= 1024
                                        ? f.current[1]
                                        : h.current[1],
                                t =
                                    window.innerWidth >= 1024
                                        ? x.current
                                        : w.current;
                            l.p8.set(e, { yPercent: 200 }),
                                l.p8.set(r, { yPercent: 100 }),
                                l.p8.set(t, { letterSpacing: "-0.15em" });
                        },
                        K = () => {
                            u.current && (u.current.kill(), (u.current = null)),
                                d.current &&
                                    (d.current.kill(), (d.current = null)),
                                O.add(() => {
                                    let e = l.p8.fromTo(
                                            [C.current, L.current, k.current],
                                            { y: 0 },
                                            {
                                                y: window.innerWidth / 15,
                                                ease: "none",
                                            },
                                            0,
                                        ),
                                        r = l.p8.fromTo(
                                            m.current,
                                            { scale: 1, borderRadius: 0 },
                                            {
                                                scale:
                                                    window.innerWidth < 768
                                                        ? 0.965
                                                        : 0.972,
                                                borderRadius: 30,
                                            },
                                            0,
                                        );
                                    s.ScrollTrigger.create({
                                        trigger: m.current,
                                        start: "top top-=5px",
                                        animation: e,
                                        scrub: !0,
                                        onEnter: () => {
                                            E.current && E.current.play();
                                        },
                                        onEnterBack: () => {
                                            E.current && E.current.play();
                                        },
                                        onLeave: () => {
                                            E.current && E.current.pause();
                                        },
                                    }),
                                        s.ScrollTrigger.create({
                                            trigger: m.current,
                                            start: "top top-=5px",
                                            end: "+=".concat(
                                                0.5 * m.current.clientHeight,
                                            ),
                                            animation: r,
                                            scrub: !0,
                                        });
                                });
                        },
                        J = () => {
                            let e = l.p8.timeline();
                            e.fromTo(
                                [C.current, k.current, L.current],
                                { scale: 1.2 },
                                {
                                    scale: 1,
                                    ease: "expo.out",
                                    duration: 1.6,
                                    delay: 0.4,
                                },
                                0,
                            );
                        };
                    return (
                        (0, i.useEffect)(() => {
                            m.current.style.height = "".concat(
                                window.innerHeight,
                                "px",
                            );
                        }, [M]),
                        (0, i.useEffect)(() => {
                            window.innerWidth >= 1200 &&
                                (m.current.style.height = "".concat(
                                    window.innerHeight,
                                    "px",
                                ));
                        }, [T]),
                        (0, i.useEffect)(() => {
                            q && (G(), U(), J());
                        }, [q]),
                        (0, i.useEffect)(
                            () => (
                                P(window.innerWidth),
                                K(),
                                G(),
                                E.current &&
                                    E.current.addEventListener("play", V),
                                (p.current.style.zIndex = 10),
                                window.addEventListener("resize", I),
                                () => {
                                    _.current &&
                                        (_.current.kill(), (_.current = null)),
                                        window.removeEventListener("resize", I);
                                }
                            ),
                            [],
                        ),
                        (0, i.useEffect)(() => {
                            X(!Z);
                        }, [Z]),
                        (0, i.useEffect)(() => {
                            B && !W && Y();
                        }, [B, W]),
                        (0, n.jsx)(b.Z, {
                            index: a,
                            slicesLength: t.length,
                            children: (0, n.jsxs)("section", {
                                ref: p,
                                className: "relative bg-white",
                                onMouseEnter: () => {
                                    A(1), D(!0);
                                },
                                onMouseLeave: () => {
                                    A(0), D(!1);
                                },
                                "data-slice-type": r.slice_type,
                                "data-slice-variation": r.variation,
                                style: { zIndex: t.length - a },
                                children: [
                                    (0, n.jsx)("div", {
                                        className:
                                            "absolute left-0 top-0 w-full h-full bg-dots bg-size-dots bg-repeat z-0 opacity-40",
                                    }),
                                    (0, n.jsx)("div", {
                                        className:
                                            "relative bg-light_beige z-1",
                                        children: (0, n.jsxs)("div", {
                                            ref: m,
                                            className:
                                                "relative overflow-hidden h-screen min-h-[600px] landscape:min-h-[800px] lg:!min-h-[600px]",
                                            children: [
                                                (0, n.jsx)("div", {
                                                    className: "".concat(
                                                        r.primary.live_event &&
                                                            "hidden md:block",
                                                        " absolute left-[2rem] bottom-[1.2rem] md:left-[2.5rem] md:bottom-[2.5rem] lg:left-[2rem] lg:bottom-[2rem] xl:mobile:left-[2rem] xl:mobile:bottom-[2rem] xl:mobile:w-auto xl:mobile:top-[initial] xl:mobile:h-[8rem] xl:fixed xl:left-0 xl:top-0 xl:w-full xl:h-full pointer-events-none z-5",
                                                    ),
                                                    children: (0, n.jsx)(o.Z, {
                                                        showBlogFromParent: H,
                                                        text: "Keep going \xb7 Scroll down \xb7",
                                                        addScroll: !0,
                                                    }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    ref: C,
                                                    className:
                                                        "absolute left-0 top-0 w-full h-full z-1 pointer-events-none",
                                                    children:
                                                        r.primary
                                                            .background_image
                                                            .url &&
                                                        (0, n.jsx)("div", {
                                                            className:
                                                                "absolute left-0 top-0 w-full h-full z-1 pointer-events-none",
                                                            children: F
                                                                ? (0, n.jsx)(
                                                                      N.Z,
                                                                      {
                                                                          loading:
                                                                              "eager",
                                                                          priority:
                                                                              !0,
                                                                          sizes: "100vw",
                                                                          fallbackAlt:
                                                                              "",
                                                                          field: r
                                                                              .primary
                                                                              .background_image_mobile,
                                                                          className:
                                                                              "w-full h-full object-cover",
                                                                      },
                                                                  )
                                                                : (0, n.jsx)(
                                                                      N.Z,
                                                                      {
                                                                          loading:
                                                                              "eager",
                                                                          priority:
                                                                              !0,
                                                                          sizes: "100vw",
                                                                          fallbackAlt:
                                                                              "",
                                                                          field: r
                                                                              .primary
                                                                              .background_image,
                                                                          className:
                                                                              "w-full h-full object-cover",
                                                                      },
                                                                  ),
                                                        }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    ref: L,
                                                    className:
                                                        "absolute left-0 top-0 w-full h-full z-3 pointer-events-none",
                                                    children:
                                                        r.primary.middle_image
                                                            .url &&
                                                        (0, n.jsx)("div", {
                                                            className:
                                                                "absolute left-0 top-0 w-full h-full z-3 pointer-events-none",
                                                            children: F
                                                                ? (0, n.jsx)(
                                                                      N.Z,
                                                                      {
                                                                          loading:
                                                                              "eager",
                                                                          priority:
                                                                              !0,
                                                                          sizes: "100vw",
                                                                          fallbackAlt:
                                                                              "",
                                                                          field: r
                                                                              .primary
                                                                              .middle_image_mobile,
                                                                          className:
                                                                              "w-full h-full object-cover object-[80%_center] xl:object-center",
                                                                      },
                                                                  )
                                                                : (0, n.jsx)(
                                                                      N.Z,
                                                                      {
                                                                          loading:
                                                                              "eager",
                                                                          priority:
                                                                              !0,
                                                                          sizes: "100vw",
                                                                          fallbackAlt:
                                                                              "",
                                                                          field: r
                                                                              .primary
                                                                              .middle_image,
                                                                          className:
                                                                              "w-full h-full object-cover object-[80%_center] xl:object-center",
                                                                      },
                                                                  ),
                                                        }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    className:
                                                        "absolute px-container top-container w-full grid grid-cols-6 lg:grid-cols-12 mt-[6rem] xl:mt-0 z-2",
                                                    children: (0, n.jsxs)(
                                                        "div",
                                                        {
                                                            className:
                                                                "col-start-1 col-end-7 lg:col-start-2 lg:col-end-12",
                                                            children: [
                                                                (0, n.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "lg:hidden text-white text-center overflow-hidden w-[110%] -ml-[5%] pb-[10px]",
                                                                        children:
                                                                            r.primary.title.map(
                                                                                (
                                                                                    e,
                                                                                    r,
                                                                                ) =>
                                                                                    (0,
                                                                                    n.jsx)(
                                                                                        "span",
                                                                                        {
                                                                                            className:
                                                                                                "block " +
                                                                                                (r >
                                                                                                0
                                                                                                    ? "-mt-[1.9rem] lg:-mt-8"
                                                                                                    : ""),
                                                                                            ref: (
                                                                                                e,
                                                                                            ) =>
                                                                                                (h.current[
                                                                                                    r
                                                                                                ] =
                                                                                                    e),
                                                                                            children:
                                                                                                (0,
                                                                                                n.jsx)(
                                                                                                    "span",
                                                                                                    {
                                                                                                        className:
                                                                                                            "block heading-223",
                                                                                                        ref: (
                                                                                                            e,
                                                                                                        ) =>
                                                                                                            (w.current[
                                                                                                                r
                                                                                                            ] =
                                                                                                                e),
                                                                                                        children:
                                                                                                            e.text,
                                                                                                    },
                                                                                                ),
                                                                                        },
                                                                                        r,
                                                                                    ),
                                                                            ),
                                                                    },
                                                                ),
                                                                (0, n.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "hidden lg:block text-white text-center overflow-hidden",
                                                                        children:
                                                                            r.primary.title.map(
                                                                                (
                                                                                    e,
                                                                                    r,
                                                                                ) =>
                                                                                    (0,
                                                                                    n.jsx)(
                                                                                        "span",
                                                                                        {
                                                                                            className:
                                                                                                "block " +
                                                                                                (r >
                                                                                                0
                                                                                                    ? "-mt-[1.9rem] lg:-mt-8 pb-[2rem]"
                                                                                                    : ""),
                                                                                            ref: (
                                                                                                e,
                                                                                            ) =>
                                                                                                (f.current[
                                                                                                    r
                                                                                                ] =
                                                                                                    e),
                                                                                            children:
                                                                                                (0,
                                                                                                n.jsx)(
                                                                                                    "span",
                                                                                                    {
                                                                                                        className:
                                                                                                            "block heading-223",
                                                                                                        ref: (
                                                                                                            e,
                                                                                                        ) =>
                                                                                                            (x.current[
                                                                                                                r
                                                                                                            ] =
                                                                                                                e),
                                                                                                        children:
                                                                                                            e.text,
                                                                                                    },
                                                                                                ),
                                                                                        },
                                                                                        r,
                                                                                    ),
                                                                            ),
                                                                    },
                                                                ),
                                                            ],
                                                        },
                                                    ),
                                                }),
                                                (0, n.jsxs)("div", {
                                                    ref: k,
                                                    className:
                                                        "absolute left-0 top-0 w-full h-full z-4 pointer-events-none flex items-end",
                                                    children: [
                                                        (0, n.jsxs)("video", {
                                                            ref: E,
                                                            className:
                                                                "w-full h-[70%] xl:h-full z-3 pointer-events-none object-cover object-[90%_center] xl:object-[bottom_center]",
                                                            loop: !0,
                                                            muted: !0,
                                                            playsInline: !0,
                                                            children: [
                                                                r.primary
                                                                    .foreground_video_mov &&
                                                                    (0, n.jsx)(
                                                                        "source",
                                                                        {
                                                                            type: "video/mp4;codecs=hvc1",
                                                                            src: r
                                                                                .primary
                                                                                .foreground_video_mov
                                                                                .url,
                                                                        },
                                                                    ),
                                                                r.primary
                                                                    .foreground_video_webm &&
                                                                    (0, n.jsx)(
                                                                        "source",
                                                                        {
                                                                            type: "video/webm",
                                                                            src: r
                                                                                .primary
                                                                                .foreground_video_webm
                                                                                .url,
                                                                        },
                                                                    ),
                                                            ],
                                                        }),
                                                        r.primary
                                                            .foreground_image
                                                            .url &&
                                                            (0, n.jsx)("div", {
                                                                ref: R,
                                                                className:
                                                                    "absolute left-0 bottom-0 w-full h-[70%] xl:h-full",
                                                                children: (0,
                                                                n.jsx)(N.Z, {
                                                                    loading:
                                                                        "eager",
                                                                    priority:
                                                                        !0,
                                                                    sizes: "100vw",
                                                                    className:
                                                                        "w-full h-full object-cover object-[90%_center] xl:object-center",
                                                                    field: r
                                                                        .primary
                                                                        .foreground_image,
                                                                    fallbackAlt:
                                                                        "",
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                // (0, n.jsxs)("div", {
                                                //   className:
                                                //     "absolute left-0 bottom-[1.3rem] md:bottom-[2rem] w-full px-container flex justify-end grid-cols-12 z-5",
                                                //   children: [
                                                //     r.primary.live_event &&
                                                //       (0, n.jsx)("div", {
                                                //         className:
                                                //           "flex justify-end col-start-1 col-end-5 md:col-start-5 md:col-end-7 lg:col-start-6 lg:col-end-8 xl:col-start-8 xl:col-end-10 ".concat(
                                                //             r.primary.video.url &&
                                                //               r.primary.video_preview.url
                                                //               ? "mr-[0.3rem] md:mr-[0.4rem]"
                                                //               : "h-[14rem] md:h-[22.8rem] lg:h-[35rem] xl:h-[22.8rem]",
                                                //           ),
                                                //         children: (0, n.jsxs)(y.Z, {
                                                //           field: r.primary.live_event_link,
                                                //           className:
                                                //             "group flex flex-col w-[9.8rem] md:w-[11rem] lg:w-[20rem] xl:w-[12rem] h-full bg-white rounded-12 p-[0.2rem]",
                                                //           onMouseEnter: () => X(!1),
                                                //           onMouseLeave: () => X(!0),
                                                //           children: [
                                                //             (0, n.jsx)("div", {
                                                //               className:
                                                //                 "relative w-full h-0 pt-[77.69%] md:pt-[100%] rounded-10 overflow-hidden",
                                                //               children: (0, n.jsx)("div", {
                                                //                 className:
                                                //                   "absolute w-full h-full top-0 left-0 transition-transform ease-out duration-500 xl:group-hover:scale-[1.1]",
                                                //                 children: (0, n.jsx)(N.Z, {
                                                //                   loading: "eager",
                                                //                   priority: !0,
                                                //                   fallbackAlt: "",
                                                //                   field: r.primary.live_event_image,
                                                //                   sizes: "12rem",
                                                //                   className:
                                                //                     "w-full h-full object-cover",
                                                //                 }),
                                                //               }),
                                                //             }),
                                                //             (0, n.jsx)("div", {
                                                //               className:
                                                //                 "flex-1 flex justify-center items-center",
                                                //               children: (0, n.jsxs)("div", {
                                                //                 className:
                                                //                   "flex items-center body-mono-10 text-orange uppercase",
                                                //                 children: [
                                                //                   (0, n.jsx)("span", {
                                                //                     className:
                                                //                       "mt-[0.1rem] mr-[0.6rem] md:mr-[0.8rem]",
                                                //                     children: (0, n.jsx)(j.Z, {}),
                                                //                   }),
                                                //                   (0, n.jsx)("span", {
                                                //                     className: "tracking-[0.05rem]",
                                                //                     children: "Live event",
                                                //                   }),
                                                //                 ],
                                                //               }),
                                                //             }),
                                                //           ],
                                                //         }),
                                                //       }),
                                                //     r.primary.video.url &&
                                                //       r.primary.video_preview.url &&
                                                //       (0, n.jsx)("div", {
                                                //         className:
                                                //           "relative w-[15.8rem] md:w-[28rem] lg:w-[45rem] xl:w-[33.6rem]",
                                                //         onMouseEnter: () => X(!1),
                                                //         onMouseLeave: () => !Z && X(!0),
                                                //         children: (0, n.jsx)(g, {
                                                //           loop: r.primary.video_preview.url,
                                                //           src: r.primary.video.url,
                                                //         }),
                                                //       }),
                                                //   ],
                                                // }),
                                            ],
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        ref: S,
                                        className: "hidden",
                                    }),
                                ],
                            }),
                        })
                    );
                };
        },
    },
]);
