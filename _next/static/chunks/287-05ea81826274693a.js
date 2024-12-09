"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [287],
  {
    6132: function (e, t, r) {
      var a = r(5893),
        s = r(9008),
        n = r.n(s);
      t.Z = (e) => {
        let { data: t } = e,
          r = t.meta_title
            ? t.meta_title
            : t.title
              ? "DGM | ".concat(t.title)
              : "Pebble Mobility";
        return (0, a.jsxs)(n(), {
          children: [
            (0, a.jsx)("title", { children: r }),
            (0, a.jsx)("meta", { property: "og:title", content: r }, "title"),
            (0, a.jsx)("meta", { property: "og:site_name", content: "Pebble" }),
            t.meta_description &&
              (0, a.jsx)("meta", {
                name: "description",
                content: t.meta_description,
              }),
            t.meta_image &&
              t.meta_image.url &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("meta", {
                    property: "og:image",
                    content: t.meta_image.url,
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:image:type",
                    content: "image/jpg",
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:image:width",
                    content: t.meta_image.dimensions.width,
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:image:height",
                    content: t.meta_image.dimensions.height,
                  }),
                ],
              }),
            (0, a.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, a.jsx)("meta", { name: "theme-color", content: "#d7d1c6" }),
            (0, a.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, maximum-scale=1",
            }),
          ],
        });
      };
    },
    6009: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = r(5893),
        s = r(8266),
        n = r(7294),
        l = r(6038),
        i = r(4347),
        o = r.n(i),
        c = r(1831),
        d = () =>
          (0, a.jsxs)("svg", {
            width: "286",
            height: "286",
            viewBox: "0 0 286 286",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_4489_62323)",
                children: [
                  (0, a.jsxs)("mask", {
                    id: "mask0_4489_62323",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: "18",
                    y: "-49",
                    width: "271",
                    height: "203",
                    children: [
                      (0, a.jsx)("rect", {
                        x: "224",
                        y: "14.5488",
                        width: "194.476",
                        height: "73.7032",
                        transform: "rotate(149.564 224 14.5488)",
                        fill: "url(#paint0_linear_4489_62323)",
                      }),
                      (0, a.jsx)("rect", {
                        x: "167",
                        y: "-19",
                        width: "122",
                        height: "173",
                        fill: "#D9D9D9",
                      }),
                    ],
                  }),
                  (0, a.jsx)("g", {
                    mask: "url(#mask0_4489_62323)",
                    children: (0, a.jsx)("path", {
                      opacity: "0.15",
                      d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                      stroke: "#575349",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("defs", {
                children: [
                  (0, a.jsxs)("linearGradient", {
                    id: "paint0_linear_4489_62323",
                    x1: "418.476",
                    y1: "88.252",
                    x2: "224",
                    y2: "88.252",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, a.jsx)("stop", {
                        stopColor: "#F2EFE9",
                        stopOpacity: "0",
                      }),
                      (0, a.jsx)("stop", { offset: "1", stopColor: "#F2EFE9" }),
                    ],
                  }),
                  (0, a.jsx)("clipPath", {
                    id: "clip0_4489_62323",
                    children: (0, a.jsx)("rect", {
                      width: "286",
                      height: "286",
                      fill: "white",
                    }),
                  }),
                ],
              }),
            ],
          }),
        u = r(4319),
        h = r(6546),
        p = r(4508),
        m = (e) => {
          let {
              index: t,
              slicesLength: r = 1,
              simple: i = !1,
              children: m,
            } = e,
            f = (0, n.useRef)(),
            x = (0, n.useRef)(),
            w = (0, n.useRef)(),
            g = (0, n.useRef)(),
            j = (0, n.useRef)(),
            C = (0, n.useRef)(),
            v = (0, n.useRef)(),
            y = (0, n.useRef)(),
            _ = (0, n.useRef)(),
            b = (0, n.useRef)(),
            N = (0, n.useRef)(0),
            L = (0, p.LZ)(),
            A = (0, s.o)((e) => e.startTransition),
            E = (0, s.o)((e) => e.setIsAppear),
            R = (0, s.o)((e) => e.isLoaded),
            k = (0, s.o)((e) => e.isFirstLoaded),
            T = (0, s.o)((e) => e.setCursorHidden),
            P = () => {
              y.current &&
                l.p8.set(y.current, {
                  x: window.innerWidth / 2 - 42 - 5,
                  y: window.innerHeight / 2 - 40.5,
                  transformOrigin: "center",
                  rotate: -90,
                  scale: 0,
                });
            },
            S = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = document.querySelector(".fade");
              t.classList.remove("opacity-0");
              let r = l.p8.timeline({
                delay: e ? 0.5 : 0.2,
                onStart: () => {
                  if (e) {
                    let e = document.querySelector(".loader");
                    e && l.p8.set(e, { autoAlpha: 0 });
                  }
                },
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("is-appeared")),
                    L && L.start(),
                    h.ScrollTrigger.refresh();
                },
              });
              r.fromTo(
                t,
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0.4, ease: "power2.out" },
                0,
              ).call(
                () => {
                  E(!0);
                },
                [],
                0,
              );
            },
            M = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              P();
              let t = document.querySelector(".fade"),
                r = document.querySelector(".loader");
              v.current && v.current.classList.remove("hidden");
              let a = window.innerWidth / 83,
                s = window.innerHeight / 80,
                n = w.current.querySelectorAll("path"),
                i = l.p8.timeline({
                  delay: 0.1,
                  onStart: () => {
                    l.p8.set([t, r], { autoAlpha: 0 }), T(!0);
                  },
                  onComplete: () => {
                    window.dispatchEvent(new CustomEvent("is-appeared")),
                      L && L.start(),
                      h.ScrollTrigger.refresh(),
                      e &&
                        window.dispatchEvent(
                          new CustomEvent("introduction-complete"),
                        ),
                      x.current && (x.current.style.clipPath = null),
                      v.current && v.current.classList.add("hidden"),
                      _.current && _.current.classList.add("hidden");
                  },
                });
              i.addLabel("start", 0),
                e &&
                  i.fromTo(
                    N,
                    { current: 0 },
                    {
                      current: 100,
                      ease: "linear",
                      duration: 2.5,
                      onUpdate: () => {
                        b.current.innerHTML =
                          N.current < 100
                            ? "0" + Math.round(N.current)
                            : Math.round(N.current);
                      },
                    },
                    0,
                  ),
                i
                  .fromTo(
                    w.current,
                    { rotate: 120, autoAlpha: 0, scale: 0.2 },
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
                    n,
                    { scale: 0.1 },
                    { scale: 1, ease: "expo.out", duration: 0.95 },
                    "start+=0.12",
                  )
                  .fromTo(
                    g.current,
                    { scale: 0.45, autoAlpha: 0 },
                    { scale: 1, autoAlpha: 1, ease: "power2.out", duration: 2 },
                    "start",
                  )
                  .fromTo(
                    g.current,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, ease: "power2.out", duration: 1.2 },
                    "start",
                  ),
                i
                  .fromTo(
                    y.current,
                    { rotate: -90, scale: 0 },
                    {
                      scale: (a > s ? a : s) + 8,
                      rotate: "+=70",
                      duration: 2,
                      ease: "beaucoup.intro",
                    },
                    e ? "start+=2.7" : "start+=1.5",
                  )
                  .to(
                    [g.current, w.current],
                    { autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                    "<30%",
                  )
                  .call(
                    () => {
                      E(!0);
                    },
                    [],
                    e ? "start+=3.1" : "start+=1.9",
                  );
              let o = l.p8.timeline({ delay: 0.1 });
              e
                ? o
                    .to(
                      j.current,
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
                      C.current,
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
                : o
                    .to(
                      j.current,
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
                      C.current,
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
            (0, n.useEffect)(() => {
              l.p8.registerPlugin(u.SlowMo),
                l.p8.registerPlugin(o()),
                o().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"),
                k && _.current && _.current.classList.add("hidden");
            }, []),
            (0, n.useEffect)(() => {
              R && !k ? (L && L.stop(), f.current ? S(!0) : M(!0)) : R || P();
            }, [R, k]),
            (0, n.useEffect)(() => {
              if (f.current) {
                S();
                return;
              }
              A && M();
            }, [A]),
            0 !== t || i
              ? (0, a.jsx)("div", {
                  ref: f,
                  className: "simple-transition-path",
                  children: m,
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: (0, a.jsx)("div", {
                        ref: w,
                        className: "svg-wrapper w-[4.267rem]",
                        children: (0, a.jsxs)("svg", {
                          width: "60",
                          height: "61",
                          viewBox: "0 0 60 61",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, n.jsx)("path", {
                            d: "M19.6024 28.4979H0.399505C0.178864 28.4979 0 28.6768 0 28.8975V31.1081C0 31.3287 0.178864 31.5075 0.399505 31.5075H19.6024C19.823 31.5075 20.0019 31.3287 20.0019 31.1081V28.8975C20.0019 28.6768 19.823 28.4979 19.6024 28.4979Z M59.6065 28.4979H40.4037C40.1829 28.4979 40.0042 28.6768 40.0042 28.8975V31.1081C40.0042 31.3287 40.1829 31.5075 40.4037 31.5075H59.6065C59.8273 31.5075 60.006 31.3287 60.006 31.1081V28.8975C60.006 28.6768 59.8273 28.4979 59.6065 28.4979Z M28.4981 0.399507V19.6023C28.4981 19.823 28.677 20.0019 28.8976 20.0019H31.1082C31.3289 20.0019 31.5077 19.823 31.5077 19.6023V0.399507C31.5077 0.178865 31.3289 0 31.1082 0H28.8976C28.677 0 28.4981 0.178865 28.4981 0.399507Z M28.5259 40.4297V59.6325C28.5259 59.8533 28.7048 60.0323 28.9254 60.0323H31.136C31.3566 60.0323 31.5355 59.8533 31.5355 59.6325V40.4297C31.5355 40.2093 31.3566 40.0302 31.136 40.0302H28.9254C28.7048 40.0302 28.5259 40.2093 28.5259 40.4297Z M25.5013 23.3978C25.5086 23.3904 25.5086 23.3785 25.5012 23.3712L10.0138 7.91031C9.85399 7.75052 9.61427 7.75052 9.45448 7.91031L7.90974 9.45508C7.74995 9.61487 7.74995 9.85459 7.90974 10.0144L24.9608 27.0654C25.205 27.3096 25.5146 27.5669 25.5146 27.9122V32.1203C25.5146 32.3067 25.4347 32.4664 25.3281 32.5997L7.90974 50.018C7.74995 50.1778 7.74995 50.4175 7.90974 50.5773L9.45448 52.1221C9.61427 52.2819 9.85399 52.2819 10.0138 52.1221L26.3668 35.769C27.7252 34.4108 28.4975 32.5732 28.4975 30.6555V29.4037C28.4975 27.486 27.7252 25.6483 26.3668 24.29L25.5013 23.4244C25.4939 23.4171 25.4939 23.4051 25.5013 23.3978Z M34.7053 27.4206L34.7138 27.4241L52.1236 10.0144C52.2834 9.85456 52.2834 9.61487 52.1236 9.45508L50.5787 7.91031C50.4189 7.75052 50.1793 7.75052 50.0195 7.91031L33.6663 24.2634C32.3081 25.6217 31.5358 27.4594 31.5358 29.377V30.6288C31.5358 32.5463 32.3081 34.3842 33.6663 35.7424L50.0195 52.0956C50.1793 52.2554 50.4189 52.2554 50.5787 52.0956L52.1236 50.5508C52.2834 50.391 52.2834 50.1513 52.1236 49.9915L35.0725 32.9404C34.8284 32.6963 34.5186 32.439 34.5186 32.0938V27.8855C34.5186 27.7044 34.5941 27.5483 34.6961 27.4175L34.7053 27.4206Z",
                            fill: "#FF6B00",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      ref: g,
                      className:
                        "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "absolute w-full h-full",
                          ref: j,
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, a.jsx)(c.Z, { color: "#A39B8B" }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, a.jsx)(d, {}),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "absolute w-full h-full rounded-full",
                          ref: C,
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, a.jsx)(c.Z, { color: "#A39B8B" }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, a.jsx)(d, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      ref: _,
                      className:
                        "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-dark_grey",
                      children: [
                        (0, a.jsx)("span", { ref: b, children: "000" }),
                        (0, a.jsx)("span", { children: "/" }),
                        (0, a.jsx)("span", { children: "100" }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      style: {
                        clipPath: "url(#svgPath)",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                        zIndex: r - t,
                      },
                      ref: x,
                      className: "transition-path relative",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-full h-screen pointer-events-none",
                          children: (0, a.jsx)("div", {
                            ref: v,
                            className:
                              "absolute top-0 left-0 w-full h-full hidden z-1",
                            children: (0, a.jsx)("svg", {
                              width: "84",
                              height: "81",
                              className: "w-full h-full",
                              children: (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                  id: "svgPath",
                                  children: (0, a.jsx)("path", {
                                    ref: y,
                                    d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        m,
                      ],
                    }),
                  ],
                })
          );
        };
    },
  },
]);
