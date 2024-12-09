"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [658],
  {
    6892: function (e, r, t) {
      var n = t(5893),
        l = t(7294),
        a = t(6546),
        s = t(8266),
        i = t(2099);
      r.Z = (e) => {
        let { children: r, sticky: t = !1, zIndex: o = 0 } = e,
          c = (0, l.useRef)(null),
          u = (0, l.useRef)(null),
          d = (0, s.o)((e) => e.headerLoaded),
          f = (0, s.o)((e) => e.setHeaderDark);
        return (
          (0, l.useEffect)(() => {
            if (!d) return;
            let e = document.querySelector(".header");
            return (
              t
                ? (u.current = a.ScrollTrigger.create({
                    trigger: c.current,
                    start: () =>
                      "top+="
                        .concat(window.innerHeight, " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom-="
                        .concat((0, i.z6)(10), " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      f(!0);
                    },
                    onLeave: () => {
                      f(!1);
                    },
                    onEnterBack: () => {
                      f(!0);
                    },
                    onLeaveBack: () => {
                      f(!1);
                    },
                  }))
                : (u.current = a.ScrollTrigger.create({
                    trigger: c.current,
                    start: () =>
                      "top top+=".concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom top+=".concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      f(!0);
                    },
                    onLeave: () => {
                      f(!1);
                    },
                    onEnterBack: () => {
                      f(!0);
                    },
                    onLeaveBack: () => {
                      f(!1);
                    },
                  })),
              () => {
                u.current && (u.current.kill(), (u.current = null)), f(!1);
              }
            );
          }, [d]),
          (0, n.jsx)("div", {
            ref: c,
            style: { zIndex: o },
            className: "relative w-full",
            children: r,
          })
        );
      };
    },
    6009: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return p;
        },
      });
      var n = t(5893),
        l = t(8266),
        a = t(7294),
        s = t(6038),
        i = t(4347),
        o = t.n(i),
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
                        transform: "rotate(149.564 224 14.5488)",
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
                      (0, n.jsx)("stop", { offset: "1", stopColor: "#F2EFE9" }),
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
        f = t(6546),
        h = t(4508),
        p = (e) => {
          let {
              index: r,
              slicesLength: t = 1,
              simple: i = !1,
              children: p,
            } = e,
            m = (0, a.useRef)(),
            g = (0, a.useRef)(),
            w = (0, a.useRef)(),
            x = (0, a.useRef)(),
            v = (0, a.useRef)(),
            b = (0, a.useRef)(),
            y = (0, a.useRef)(),
            j = (0, a.useRef)(),
            R = (0, a.useRef)(),
            C = (0, a.useRef)(),
            k = (0, a.useRef)(0),
            N = (0, h.LZ)(),
            E = (0, l.o)((e) => e.startTransition),
            T = (0, l.o)((e) => e.setIsAppear),
            S = (0, l.o)((e) => e.isLoaded),
            L = (0, l.o)((e) => e.isFirstLoaded),
            _ = (0, l.o)((e) => e.setCursorHidden),
            H = () => {
              j.current &&
                s.p8.set(j.current, {
                  x: window.innerWidth / 2 - 42 - 5,
                  y: window.innerHeight / 2 - 40.5,
                  transformOrigin: "center",
                  rotate: -90,
                  scale: 0,
                });
            },
            B = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                r = document.querySelector(".fade");
              r.classList.remove("opacity-0");
              let t = s.p8.timeline({
                delay: e ? 0.5 : 0.2,
                onStart: () => {
                  if (e) {
                    let e = document.querySelector(".loader");
                    e && s.p8.set(e, { autoAlpha: 0 });
                  }
                },
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("is-appeared")),
                    N && N.start(),
                    f.ScrollTrigger.refresh();
                },
              });
              t.fromTo(
                r,
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0.4, ease: "power2.out" },
                0,
              ).call(
                () => {
                  T(!0);
                },
                [],
                0,
              );
            },
            A = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              H();
              let r = document.querySelector(".fade"),
                t = document.querySelector(".loader");
              y.current && y.current.classList.remove("hidden");
              let n = window.innerWidth / 83,
                l = window.innerHeight / 80,
                a = w.current.querySelectorAll("path"),
                i = s.p8.timeline({
                  delay: 0.1,
                  onStart: () => {
                    s.p8.set([r, t], { autoAlpha: 0 }), _(!0);
                  },
                  onComplete: () => {
                    window.dispatchEvent(new CustomEvent("is-appeared")),
                      N && N.start(),
                      f.ScrollTrigger.refresh(),
                      e &&
                        window.dispatchEvent(
                          new CustomEvent("introduction-complete"),
                        ),
                      g.current && (g.current.style.clipPath = null),
                      y.current && y.current.classList.add("hidden"),
                      R.current && R.current.classList.add("hidden");
                  },
                });
              i.addLabel("start", 0),
                e &&
                  i.fromTo(
                    k,
                    { current: 0 },
                    {
                      current: 100,
                      ease: "linear",
                      duration: 2.5,
                      onUpdate: () => {
                        C.current.innerHTML =
                          k.current < 100
                            ? "0" + Math.round(k.current)
                            : Math.round(k.current);
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
                    a,
                    { scale: 0.1 },
                    { scale: 1, ease: "expo.out", duration: 0.95 },
                    "start+=0.12",
                  )
                  .fromTo(
                    x.current,
                    { scale: 0.45, autoAlpha: 0 },
                    { scale: 1, autoAlpha: 1, ease: "power2.out", duration: 2 },
                    "start",
                  )
                  .fromTo(
                    x.current,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, ease: "power2.out", duration: 1.2 },
                    "start",
                  ),
                i
                  .fromTo(
                    j.current,
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
                    [x.current, w.current],
                    { autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                    "<30%",
                  )
                  .call(
                    () => {
                      T(!0);
                    },
                    [],
                    e ? "start+=3.1" : "start+=1.9",
                  );
              let o = s.p8.timeline({ delay: 0.1 });
              e
                ? o
                    .to(
                      v.current,
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
                      b.current,
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
                      v.current,
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
                      b.current,
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
            (0, a.useEffect)(() => {
              s.p8.registerPlugin(d.SlowMo),
                s.p8.registerPlugin(o()),
                o().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"),
                L && R.current && R.current.classList.add("hidden");
            }, []),
            (0, a.useEffect)(() => {
              S && !L ? (N && N.stop(), m.current ? B(!0) : A(!0)) : S || H();
            }, [S, L]),
            (0, a.useEffect)(() => {
              if (m.current) {
                B();
                return;
              }
              E && A();
            }, [E]),
            0 !== r || i
              ? (0, n.jsx)("div", {
                  ref: m,
                  className: "simple-transition-path",
                  children: p,
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: (0, n.jsx)("div", {
                        ref: w,
                        className: "svg-wrapper w-[4.267rem]",
                        children: (0, n.jsxs)("svg", {
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
                    (0, n.jsxs)("div", {
                      ref: x,
                      className:
                        "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "absolute w-full h-full",
                          ref: v,
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, n.jsx)(c.Z, { color: "#A39B8B" }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, n.jsx)(u, {}),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "absolute w-full h-full rounded-full",
                          ref: b,
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, n.jsx)(c.Z, { color: "#A39B8B" }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, n.jsx)(u, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      ref: R,
                      className:
                        "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-dark_grey",
                      children: [
                        (0, n.jsx)("span", { ref: C, children: "000" }),
                        (0, n.jsx)("span", { children: "/" }),
                        (0, n.jsx)("span", { children: "100" }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      style: {
                        clipPath: "url(#svgPath)",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                        zIndex: t - r,
                      },
                      ref: g,
                      className: "transition-path relative",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-full h-screen pointer-events-none",
                          children: (0, n.jsx)("div", {
                            ref: y,
                            className:
                              "absolute top-0 left-0 w-full h-full hidden z-1",
                            children: (0, n.jsx)("svg", {
                              width: "84",
                              height: "81",
                              className: "w-full h-full",
                              children: (0, n.jsx)("defs", {
                                children: (0, n.jsx)("clipPath", {
                                  id: "svgPath",
                                  children: (0, n.jsx)("path", {
                                    ref: j,
                                    d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        p,
                      ],
                    }),
                  ],
                })
          );
        };
    },
    8658: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return b;
          },
        });
      var n = t(5893),
        l = t(7771),
        a = t(2099),
        s = t(187),
        i = t(6038),
        o = t(6546),
        c = t(7294),
        u = t(9362),
        d = t(6009),
        f = t(8266),
        h = t(6494);
      let p = (e) => {
          let { slice: r, slices: t, index: l } = e,
            s = (0, c.useRef)(!1),
            u = (0, c.useRef)(!1),
            h = (0, c.useRef)(!1),
            p = (0, c.useRef)(!1),
            w = (0, c.useRef)(!1),
            x = (0, c.useRef)(!1),
            v = (0, c.useRef)(0),
            b = (0, c.useRef)(0),
            y = (0, c.useRef)(!1),
            j = (0, c.useRef)(null),
            R = (0, c.useRef)(null),
            C = (0, c.useRef)(null),
            k = (0, c.useRef)(null),
            N = (0, f.o)((e) => e.isAppear),
            E = (0, c.useMemo)(() => (0, n.jsx)(m, { ref: y, slice: r }), []),
            T = () => {
              for (let e = 0; e < w.current.length; e++)
                (v.current +=
                  w.current[e][0].parentElement.getBoundingClientRect().height),
                  e >= 2 &&
                    (b.current +=
                      w.current[
                        e
                      ][0].parentElement.getBoundingClientRect().height);
              i.p8.set(x.current, { y: x.current.offsetHeight });
            },
            S = () => {
              let e = i.p8.timeline({
                  defaults: { duration: 1.4, ease: "power4.inOut" },
                }),
                r = window.innerWidth < 768 ? "-1rem" : "-2.5rem",
                t = window.innerWidth < 768 ? "-0.5rem" : "-0.96rem",
                n = [w.current[0], w.current[1]];
              e.fromTo(
                x.current,
                { y: x.current.offsetHeight },
                { y: b.current },
                0,
              ).fromTo(n, { letterSpacing: r }, { letterSpacing: t }, 0);
            };
          return (
            (0, c.useEffect)(() => {
              window.innerWidth <= 1024 &&
                (h.current.style.height = window.innerHeight + "px"),
                (w.current = y.current.getSplittedText()),
                (u.current = y.current.getRef()),
                T();
              let e = window.innerWidth < 768 ? "-0.5rem" : "-0.96rem",
                r = w.current.slice(2);
              (j.current = i.p8.timeline({
                defaults: { duration: 1.4, ease: "power4.inOut" },
                paused: !0,
              })),
                j.current
                  .to(
                    u.current,
                    { y: r.length > 1 ? -b.current - 20 : -b.current },
                    0,
                  )
                  .to(r, { y: r.length > 1 ? 20 : 0, letterSpacing: e }, 0),
                (R.current = i.p8.timeline({
                  defaults: { duration: 1.4, ease: "power4.inOut" },
                  paused: !0,
                })),
                R.current
                  .to(u.current, { y: 0 }, 0)
                  .to(r, { y: (0, a.z6)(30), letterSpacing: "-2.5rem" }, 0);
              let t = window.innerWidth < 768 ? "-1.5rem" : "-2.5rem";
              i.p8.set(r, { y: (0, a.z6)(30), letterSpacing: t });
              let n = i.p8.fromTo(
                p.current,
                { scale: 1, borderRadius: 0 },
                {
                  scale: window.innerWidth < 768 ? 0.965 : 0.972,
                  borderRadius: 30,
                  ease: "none",
                },
              );
              return (
                (k.current = o.ScrollTrigger.create({
                  trigger: s.current,
                  animation: n,
                  start: "bottom bottom",
                  end: () => "+=".concat(0.5 * window.innerHeight),
                  scrub: !0,
                })),
                (C.current = o.ScrollTrigger.create({
                  trigger: s.current,
                  start: "top top-=10px",
                  onEnter: () => {
                    (0, a.RE)(R.current), j.current.restart();
                  },
                  onLeaveBack: () => {
                    (0, a.RE)(j.current), R.current.restart();
                  },
                })),
                () => {
                  C.current.kill(),
                    (C.current = null),
                    k.current.kill(),
                    (k.current = null);
                }
              );
            }, []),
            (0, c.useEffect)(() => {
              S();
            }, [N]),
            (0, n.jsx)(d.Z, {
              index: l,
              slicesLength: t.length,
              children: (0, n.jsxs)("section", {
                "data-slice-type": r.slice_type,
                "data-slice-variation": r.variation,
                ref: s,
                style: { zIndex: t.length - l },
                className: "relative h-[175vh] ".concat(
                  "White" === r.primary.background
                    ? "bg-white"
                    : "Beige light" === r.primary.background
                      ? "bg-light_beige"
                      : "Beige dark" === r.primary.background
                        ? "bg-dark_beige"
                        : "Grey dark" === r.primary.background
                          ? "bg-dark_grey"
                          : "bg-green",
                ),
                children: [
                  (0, n.jsx)(g, { slice: r }),
                  (0, n.jsx)("div", {
                    className:
                      "absolute top-0 left-0 w-full h-full pointer-events-none",
                    children: (0, n.jsx)("div", {
                      ref: h,
                      className: "sticky top-0 h-screen",
                      children: (0, n.jsx)("div", {
                        ref: p,
                        className:
                          "absolute top-0 left-0 w-full h-full overflow-hidden",
                        children: (0, n.jsx)("div", {
                          ref: x,
                          className:
                            "absolute bottom-0 left-0 w-full px-container overflow-hidden pb-[2.4rem]",
                          children: E,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        m = (0, c.forwardRef)((e, r) => {
          let { slice: l } = e,
            a = (0, c.useRef)(null),
            i = (0, c.useRef)(!1);
          (0, c.useImperativeHandle)(r, () => ({
            getRef: u,
            getSplittedText: o,
          }));
          let o = () => i.current,
            u = () => a.current;
          return (
            (0, c.useEffect)(() => {
              let e = t(8041);
              i.current = new e({ target: a.current, by: "lines" })[0].lines;
            }, []),
            (0, n.jsx)("h1", {
              ref: a,
              className:
                "text-center z-1 font-headings text-[6rem] -tracking-[0.5rem] md:text-[12rem] lg:text-[16rem] md:-tracking-[0.96rem] lowercase text-[#f2f0ec] leading-[75%]",
              children: (0, n.jsx)(s.v, { field: l.primary.title }),
            })
          );
        }),
        g = (e) => {
          let { slice: r } = e,
            t = (0, c.useRef)(null),
            a = (0, c.useRef)(null),
            s = (0, c.useRef)(null),
            d = (0, c.useRef)(null),
            p = (0, c.useRef)(null),
            m = (0, c.useRef)(null),
            [g, w] = (0, c.useState)(0),
            x = (0, u.a)(),
            v = (0, f.o)((e) => e.isAppear),
            b = (0, f.o)((e) => e.setCursorHidden),
            y = (0, c.useRef)(null),
            j = (0, c.useRef)(null),
            R = (0, c.useRef)(null),
            C = () => {
              let e = i.p8.fromTo(
                  a.current,
                  { y: 0 },
                  { y: window.innerWidth / 15, ease: "none" },
                ),
                r = i.p8.fromTo(
                  s.current,
                  { scale: 1, borderRadius: 0 },
                  {
                    scale: window.innerWidth < 768 ? 0.965 : 0.972,
                    borderRadius: 30,
                    ease: "none",
                  },
                );
              (y.current = o.ScrollTrigger.create({
                trigger: t.current,
                animation: e,
                start: "bottom bottom",
                scrub: !0,
              })),
                (j.current = o.ScrollTrigger.create({
                  trigger: t.current,
                  animation: r,
                  start: "bottom bottom",
                  end: () => "+=".concat(0.5 * window.innerHeight),
                  scrub: !0,
                }));
            },
            k = () => {
              m.current = 0.75 * window.innerHeight;
            };
          return (
            (0, c.useEffect)(
              () => (
                C(),
                window.addEventListener("resize", k),
                () => {
                  window.removeEventListener("resize", k),
                    j.current.kill(),
                    (j.current = null),
                    y.current && (y.current.kill(), (y.current = null));
                }
              ),
              [],
            ),
            (0, c.useEffect)(() => {
              v &&
                i.p8.fromTo(
                  d.current,
                  { scale: 1.2 },
                  { scale: 1, duration: 1.6, ease: "expo.out", delay: 0.4 },
                );
            }, [v]),
            (0, c.useEffect)(
              () => (
                (m.current = 0.75 * window.innerHeight),
                i.p8.set(d.current, { scale: 1.2 }),
                x ||
                  (R.current = o.ScrollTrigger.create({
                    trigger: t.current,
                    start: "bottom bottom",
                    end: () => "+=".concat(t.current.clientHeight),
                    scrub: !0,
                    onUpdate: () => {
                      p.current.addScrollValue(m.current);
                    },
                  })),
                () => {
                  R.current && (R.current.kill(), (R.current = null));
                }
              ),
              [x],
            ),
            (0, n.jsx)("div", {
              ref: t,
              className: "w-full h-full",
              onMouseEnter: () => {
                w(1), b(!0);
              },
              onMouseLeave: () => {
                w(0), b(!1);
              },
              children: (0, n.jsx)("div", {
                className: "sticky top-0 h-screen",
                children: (0, n.jsxs)("div", {
                  ref: s,
                  className: "w-full h-full overflow-hidden",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-0 left-0 w-full h-full pointer-events-none z-1 block mobile:hidden",
                      children: (0, n.jsx)(l.Z, {
                        ref: p,
                        showBlogFromParent: g,
                        text: "Keep going \xb7 Scroll down \xb7",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: a,
                      className: "w-full h-screen relative",
                      children: (0, n.jsx)("div", {
                        ref: d,
                        className: "w-full h-full",
                        children: (0, n.jsx)(h.Z, {
                          loading: "eager",
                          priority: !0,
                          field: r.primary.image,
                          sizes: "100vw",
                          className: "w-full h-full object-cover",
                          fallbackAlt: "",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
      (m.displayName = "TitleSplitted"),
        (g.displayName = "CoverImage"),
        (p.displayName = "CoverDefault");
      var w = t(4508),
        x = t(6892),
        v = (e) => {
          let { slice: r, slices: t, index: p } = e,
            m = (0, c.useRef)(!1),
            g = (0, c.useRef)(!1),
            v = (0, c.useRef)(!1),
            b = (0, c.useRef)(!1),
            y = (0, c.useRef)(!1),
            j = (0, c.useRef)(!1),
            R = (0, c.useRef)(!1),
            C = (0, c.useRef)(!1),
            k = (0, c.useRef)(!1),
            N = (0, c.useRef)(!1),
            E = (0, w.LZ)(),
            [T, S] = (0, c.useState)(0),
            [L, _] = (0, c.useState)(!1),
            H = (0, u.a)("(max-width: 1024px)", !0),
            B = (0, f.o)((e) => e.currentTransition),
            A = (0, f.o)((e) => e.isAppear),
            z = (0, f.o)((e) => e.setCursorHidden);
          (0, c.useEffect)(() => {
            E && "popup-reverse" !== B && L && Z();
          }, [E, L]);
          let Z = () => {
              let e = window.innerWidth <= 768 ? 0.75 : 0.4,
                r = j.current.offsetHeight,
                t = window.innerWidth <= 768 ? r * e * 1.35 : r * e,
                n = H ? (0, a.z6)(73) : (0, a.z6)(96),
                l = v.current.offsetHeight - n,
                s = i.p8.timeline({ defaults: { ease: "none" } });
              s.fromTo(
                j.current,
                {
                  borderRadius: H ? "".concat(1.3 * (1 + e), "rem") : "4rem",
                  y: 0.45 * t,
                },
                { scale: 1, borderRadius: H ? "1rem" : "1.2rem", y: 0 },
              ),
                s.fromTo(y.current, { scale: 1.3 }, { scale: 1 }, "<"),
                s.to(g.current, { y: -l / 3 }, "<"),
                (R.current = o.ScrollTrigger.create({
                  trigger: v.current,
                  animation: s,
                  start: () => "bottom-=".concat(n, " bottom"),
                  end: () => "+=".concat(l),
                  scrub: !0,
                  invalidateOnRefresh: !0,
                })),
                (C.current = o.ScrollTrigger.create({
                  trigger: m.current,
                  start: "bottom bottom",
                  end: () => "+=".concat(window.innerHeight),
                  scrub: !0,
                  invalidateOnRefresh: !0,
                  animation: i.p8.to(v.current, { scale: H ? 1.0325 : 1.0145 }),
                }));
            },
            W = () => {
              let e = window.innerWidth <= 768 ? 0.75 : 0.4,
                r = j.current.offsetHeight,
                t = window.innerWidth <= 768 ? r * e * 1.35 : r * e,
                n = i.p8.timeline({
                  delay: 0.3,
                  onComplete: () => {
                    _(!0);
                  },
                });
              n.set(j.current, { y: t, scale: 0 }),
                n.fromTo(
                  v.current,
                  { yPercent: 100 },
                  { yPercent: 0, duration: 1, ease: "expo.out" },
                ),
                n.fromTo(
                  g.current,
                  { y: r / 2 },
                  { delay: 0.1, y: 0, duration: 1, ease: "expo.out" },
                  "<",
                ),
                n.to(
                  j.current,
                  {
                    y: 0.45 * t,
                    delay: 0.05,
                    borderRadius: H ? "".concat(1.3 * (1 + e), "rem") : "4rem",
                    scale: e,
                    duration: 1,
                    ease: "expo.out",
                  },
                  "<",
                );
            };
          return (
            (0, c.useEffect)(() => {
              A && W();
            }, [A]),
            (0, c.useEffect)(
              () => (
                i.p8.set(y.current, { scale: 1.3 }),
                () => {
                  R.current && R.current.kill(), C.current && C.current.kill();
                }
              ),
              [],
            ),
            (0, c.useEffect)(
              () => (
                (k.current = window.innerHeight - (0, a.z6)(96)),
                H ||
                  (N.current = o.ScrollTrigger.create({
                    trigger: m.current,
                    start: "bottom bottom",
                    end: () => "+=".concat(window.innerHeight),
                    scrub: !0,
                    onUpdate: () => {
                      b.current && b.current.addScrollValue(k.current);
                    },
                  })),
                () => {
                  N.current && (N.current.kill(), (N.current = null));
                }
              ),
              [H],
            ),
            (0, n.jsx)(d.Z, {
              index: p,
              slicesLength: t.length,
              children: (0, n.jsx)(x.Z, {
                children: (0, n.jsx)("section", {
                  "data-slice-type": r.slice_type,
                  "data-slice-variation": r.variation,
                  style: { zIndex: t.length - p },
                  onMouseEnter: () => {
                    S(1), z(!0);
                  },
                  onMouseLeave: () => {
                    S(0), z(!1);
                  },
                  ref: m,
                  className:
                    "relative h-[200vh] p-container-mobile md:p-container\n            ".concat(
                      "White" === r.primary.background
                        ? "bg-white"
                        : "Beige light" === r.primary.background
                          ? "bg-light_beige"
                          : "Beige dark" === r.primary.background
                            ? "bg-dark_beige"
                            : "Grey dark" === r.primary.background
                              ? "bg-dark_grey"
                              : "bg-green",
                      "\n            ",
                    ),
                  children: (0, n.jsxs)("div", {
                    ref: v,
                    className:
                      "rounded-12 h-screen flex items-center justify-center sticky top-[7.6rem] md:top-[9.6rem]",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-full h-[calc(100%+9.6rem)] -translate-y-[9.6rem] pointer-events-none z-1 hidden xl:block",
                        children: (0, n.jsx)(l.Z, {
                          ref: b,
                          showBlogFromParent: T,
                          text: "Keep going \xb7 Scroll down \xb7",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-full h-full bg-black rounded-12",
                      }),
                      (0, n.jsx)("h1", {
                        ref: g,
                        className:
                          "w-[80%] md:w-full text-center font-headings text-[5.6rem] -tracking-[0.252rem] leading-[89%] md:text-[8rem] lg:text-160 lg:-tracking-[0.96rem] lg:leading-[75%] lowercase text-orange",
                        children: (0, n.jsx)(s.v, { field: r.primary.title }),
                      }),
                      (0, n.jsx)("div", {
                        ref: j,
                        className:
                          "absolute left-0 top-0 w-full h-full origin-bottom rounded-12 overflow-hidden will-change-transform",
                        children: (0, n.jsx)("div", {
                          ref: y,
                          className:
                            "w-full h-full relative will-change-transform",
                          children: (0, n.jsx)(h.Z, {
                            loading: "eager",
                            priority: !0,
                            field: r.primary.image,
                            sizes: "100vw",
                            className: "object-cover",
                            fallbackAlt: "",
                            fill: !0,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        },
        b = (e) =>
          (0, n.jsxs)(n.Fragment, {
            children: [
              "default" === e.slice.variation && (0, n.jsx)(p, { ...e }),
              "scrollRevealCover" === e.slice.variation &&
                (0, n.jsx)(v, { ...e }),
            ],
          });
    },
  },
]);
