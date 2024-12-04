!(function () {
  "use strict";
  const e =
    "undefined" != typeof window
      ? window
      : {
          assertive: {},
          benji: {},
          googletag: { cmd: [] },
          pbjs: { que: [] },
          YAHOO: {},
        };
  Promise.allSettled =
    Promise.allSettled ||
    ((e) =>
      Promise.all(
        e.map((e) =>
          e
            .then((e) => ({ status: "fulfilled", value: e }))
            .catch((e) => ({ reason: e, status: "rejected" })),
        ),
      ));
  const t = [
      "localhost",
      "aol.com",
      "aol.co.uk",
      "aol.de",
      "autoblog.com",
      "cricket.yahoo.sportz.io",
      "engadget.com",
      "yahoo.com",
      "yahoo.com.hk",
      "yahoo.com.tw",
    ].map((e) => `([\\.\\w\\-]+\\.)?${e.replace(/\./g, "\\.")}`),
    n = ["cricket.yahoo.net"].map((e) => e.replace(/\./g, "\\.")),
    i = new RegExp(`^https?://(${t.concat(n).join("|")})(:\\d+)?$`);
  const s = "initialize",
    o = "initialize_ack",
    r = "initialize_i13n",
    a = "intersect",
    c = "render",
    d = "resize_ad",
    l = "start_ads",
    h = "tab_focus",
    u = "block",
    g = "index",
    p = !0,
    f = "DOMContentLoaded",
    m = "0",
    b = "testid",
    y = "ncid",
    E = "fr",
    _ = "pg_name",
    I = "type",
    v = "auto",
    A = "VERSION",
    C = "benji-disableYahooPrebid",
    S = !0,
    T = { ATS_DIRECT: "_lr_atsDirect" };
  var R, L;
  !(function (e) {
    (e.DynamicAllocation = "Dynamic Allocation"),
      (e.DirectSold = "Direct Sold");
  })(R || (R = {})),
    (function (e) {
      (e.House = "House"),
        (e.YahooPrebid = "YahooPrebid"),
        (e.AdX = "AdX"),
        (e.Unknown = "Unknown");
    })(L || (L = {}));
  const w = {
      BankRateWidget: { size: [970, 350] },
      BankRateWidgetLarge: { size: [750, 600] },
      FeaturedBroker: { size: [758, 198] },
      FeaturedBrokerMweb: { size: [343, 310] },
      Horizon: {
        breakpoints: {
          "0,480": [16, 9],
          "1331,Infinity": [16, 3],
          "481,1330": [40, 9],
        },
        size: [3, 1],
      },
      Lighthouse: { breakpoints: { "0,Infinity": [9, 16] }, size: [2, 2] },
      SmartAssetWidgetLarge: { size: [800, 635] },
      Spotlight: { breakpoints: { "0,480": [8, 9] }, size: [3, 2] },
      TradeNow: { size: [280, 55] },
    },
    P = {
      "[1440,1024]": "Login",
      "[2,2]": "Lighthouse",
      "[280,55]": "TradeNow",
      "[3,1]": "Horizon",
      "[3,2]": "Spotlight",
      "[343,310]": "FeaturedBrokerMweb",
      "[758,198]": "FeaturedBroker",
    },
    k = "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
    D = "https://pagead2.googlesyndication.com/tag/js/gpt.js",
    B = "2.0",
    O = `https://s.yimg.com/aaq/prebid/prebid-${A}.js`,
    N = "https://opus.analytics.yahoo.com/tag/opus.js",
    j = "TABOOLA_PUBLISHERID_MACRO",
    M = `https://cdn.taboola.com/libtrc/${j}/loader.js`,
    U = "script",
    z = "f10d509c-script",
    F = "gpt-tag",
    x = "yPrebid-script",
    G = "opus-script",
    Y = "text/javascript",
    $ = 1,
    V = "none",
    H = "identityLink",
    q = {
      adsFinishParse: "ads:finish:parse",
      caasArticle: "caas:article:init",
      caasSidekick: "caas:sidekick:init",
      darlaComplete: "darla:complete",
      waferFetch: "fetch:success",
      waferReady: "wafer:ready",
    },
    W = ["enableCtrldSRABatch", "enableRefreshDebounce", "enableYahooPrebid"],
    K = {
      impressionViewable: "impressionViewable",
      slotOnload: "slotOnload",
      slotRenderEnded: "slotRenderEnded",
      slotRequested: "slotRequested",
      slotResponseReceived: "slotResponseReceived",
      slotVisibilityChanged: "slotVisibilityChanged",
    },
    Q = { click: "click", nocontent: "nocontent", render: "render" },
    J = "auctionEnd",
    X = "auctionInit",
    Z = "bidWon",
    ee = {
      e0: "-e0",
      e1: "-e1",
      EIDS_URL: "idx.liadm.com",
      HB_UI_MOD: "hb_uid_mod",
      LI_OFF: "liveIntentId_off",
      LI_ON_ENRICHED: "liveintentid_on_enriched",
      LI_ON_NOT_ENRICHED: "liveintentid_on_not_enriched",
      LI_REPORTING_KEY: "li-module-enabled",
      LIVEINTENT_ID: "liveIntentId",
      LOCAL_STORAGE_KEY: "_li_pbid",
      NO_ID_SOLUTION: "no_id_solution",
      t0: "t0",
      t1: "t1",
    },
    te = { limitedAds: !0, restrictDataProcessing: !0 },
    ne = !0,
    ie = !0,
    se = { nonPersonalizedAds: !0 },
    oe = {
      AdX: [5285812218],
      House: [5286843762, 5335252228],
      YahooPrebid: [5462617191],
    },
    re = { render: "benji:render" },
    ae = {
      benjiMounted: "benji:mounted",
      benjiReady: "benji:ready",
      tabFocus: "tabFocus",
      userAction: "userAction",
    },
    ce = {
      aol: "aol",
      att: "att",
      bizmail: "bizmail",
      frontier: "frontier",
      ftr: "frontier",
      rogers: "rogers",
      sbc: "att",
      sky: "sky",
      smallbiz: "bizmail",
      verizon: "verizon",
      ycorp: "ycorp",
    },
    de = [
      "abk",
      "axid",
      "cobrand",
      "colo",
      "device",
      "fr",
      "frtype",
      "lang",
      "lmsid",
      "lu",
      "ncid",
      "pct",
      "pd",
      _,
      "pstaid",
      "pt",
      "region",
      "site",
      "ubid",
      "ver",
    ];
  var le, he;
  !(function (e) {
    (e.att = "att"),
      (e.attarticles = "attarticles"),
      (e.aol = "aol"),
      (e.autoblog = "autoblog"),
      (e.autos = "autos"),
      (e.engadget = "engadget"),
      (e.entertainment = "entertainment"),
      (e.finance = "finance"),
      (e.fp = "fp"),
      (e.frontpage = "frontpage"),
      (e.gma = "gma"),
      (e.intheknow = "intheknow"),
      (e.lifestyle = "lifestyle"),
      (e.money = "money"),
      (e.movies = "movies"),
      (e.music = "music"),
      (e.news = "news"),
      (e.rivals = "rivals"),
      (e.sports = "sports"),
      (e.style = "style"),
      (e.tech = "tech"),
      (e.techcrunch = "techcrunch");
  })(le || (le = {})),
    (function (e) {
      (e.yahoo_mail = "yahoo_mail"),
        (e.aol_webmail = "aol_webmail"),
        (e.yahoo_rogers_mail = "yahoo_rogers_mail"),
        (e.yahoo_bizmail_mail = "yahoo_bizmail_mail"),
        (e.yahoo_att_mail = "yahoo_att_mail"),
        (e.yahoo_frontier_mail = "yahoo_frontier_mail"),
        (e.yahoo_verizon_mail = "yahoo_verizon_mail"),
        (e.yahoo_login = "yahoo_login"),
        (e.aol_login = "aol_login");
    })(he || (he = {}));
  const ue = { ...he, ...le },
    ge = new Set([le.aol, le.engadget, le.techcrunch, le.rivals, le.autoblog]);
  var pe;
  !(function (e) {
    e.validSite = "validSite";
  })(pe || (pe = {}));
  const fe = "scriptId",
    me = `https://cadmus.script.ac/${fe}/script.js`,
    be = `https://s.yimg.com/aaq/f10d509c/${fe}.js`,
    ye = !0,
    Ee = !0,
    _e = {
      [le.aol]: "d3decajspqn3ue",
      [le.autoblog]: "dy348zlstbwc5",
      [le.autos]: "dy348zlstbwc5",
      [le.engadget]: "dnt3mrnrwwk1",
      [le.entertainment]: "d25harazjdfhwp",
      [le.finance]: "d3lm64ch1c76ug",
      [le.fp]: "d1ccw66oyq8ex2",
      [le.frontpage]: "d1ccw66oyq8ex2",
      [le.intheknow]: "dlt600z2q25zi",
      [le.lifestyle]: "d12h8q03mwvikl",
      [le.news]: "d1irmdsmbztlvx",
      [le.rivals]: "d24s7e71jngyhb",
      [le.sports]: "d2ftq0ol13ke77",
      [le.style]: "d12h8q03mwvikl",
      [le.techcrunch]: "d2wmmfwby4fr6i",
      [he.yahoo_mail]: "d49ph8jz3wewg",
      [he.yahoo_rogers_mail]: "d49ph8jz3wewg",
      [he.yahoo_bizmail_mail]: "d49ph8jz3wewg",
      [he.yahoo_att_mail]: "d49ph8jz3wewg",
      [he.yahoo_frontier_mail]: "d49ph8jz3wewg",
      [he.yahoo_verizon_mail]: "d49ph8jz3wewg",
      [he.aol_webmail]: "d2uev3i365z5q8",
      [he.yahoo_login]: "d1tqrs7vz94d9k",
      [he.aol_login]: "d3axh5emg5ece0",
      default: "d9pmsg6mvxzz6",
      sandbox: "d22u7q1sccu6up",
    },
    Ie = [
      1183335650, 980787690, 1183336089, 959522530, 959524012, 980751813,
      980751814, 980751815, 1197806876, 959522366, 959524013, 1197808162,
      1197808163, 1197808164, 1183336116, 959523426, 1183336115, 959523395,
      1183336116, 959523426, 1197809770, 1197809715, 980751846, 980751848,
      980751850, 980751822, 980751847, 980751926, 980751927, 980751928,
      1197809825, 1197809826, 1197809827, 1197809822, 959523854, 959523856,
      1197809837, 1197809838, 1197809839, 1197809828, 1197809829, 1197809830,
      1197809832, 959523853, 959523839, 1197810892, 964048854, 964048856,
      1197810152, 1197810153, 1197810154, 1197803691, 1197806445, 1197806450,
      1197806455, 1197808880, 1197808881, 1197808882, 1197811195, 964049433,
      1197811201, 1197811194, 964049432, 1197811200, 1197811197, 1197811205,
      1197811203, 1197811196, 1197811204, 1197811202, 1197811191, 1197811192,
      1197811193, 1197811555, 1197811556, 1197811557, 1197811558, 1197811559,
      1197811560, 1197811613, 1197811614, 1197811615, 1184336193, 964024914,
      964023856, 1184336194, 964024915, 964024916, 1197812077, 963974959,
      963974961, 1197812080, 1197812078, 1197812079, 1197812081, 1197812082,
      1197812083, 963998854, 1183836193, 1197812150, 1197812146, 1197812128,
      1197812125, 1197812126, 1197812127, 1197812133, 1197812132, 1197812134,
      1197812129, 1197812130, 1197812131, 1187336201, 964298854, 1187336202,
      1197812153, 1197812154, 1197812155, 1197812156, 1197812157, 1197812158,
      1197812159, 1197812160, 1197812161, 1197812162, 1197812163, 1197812164,
    ];
  var ve;
  !(function (e) {
    (e.aol_webtest = "aol-webtest"),
      (e.validPublisherId = "validPublisher"),
      (e.yahooweb_network = "yahooweb-network"),
      (e.yahoo_aol_network = "yahoo-aol-network"),
      (e.yahoo_engadget_network = "yahoo-engadget-network"),
      (e.yahootwhk_network = "yahootwhk-network"),
      (e.yahoo_hp_att = "yahoo-hp-att");
  })(ve || (ve = {}));
  const Ae = { default: ve.aol_webtest, [pe.validSite]: ve.validPublisherId },
    Ce = { _rid: "yrid", lpstaid: "pstaid", partner: "cobrand" },
    Se = ["att", "frontier", "rogers", "sky"],
    Te = [b, y, E, I],
    Re = { bucket: "bucket", hashtag: "hashtag" },
    Le = [
      "abk",
      "axid",
      "bucket",
      "partner",
      "colo",
      "device",
      "lang",
      "lu",
      "region",
      "site",
      "ver",
      "axidDv360",
      "usercountry",
    ],
    we = [b, y, E, I, _];
  var Pe;
  !(function (e) {
    (e.content = "content"),
      (e.home = "home"),
      (e.minihome = "minihome"),
      (e.utility = "utility");
  })(Pe || (Pe = {}));
  const ke = {
      [Pe.content]: "article",
      [Pe.home]: "homepage",
      [Pe.minihome]: "category",
      [Pe.utility]: "category",
    },
    De = {
      [le.att]: "yhp",
      [le.attarticles]: "ynews",
      [le.autos]: "yautos",
      [le.engadget]: "eng",
      [le.entertainment]: "yent",
      [le.finance]: "yfin",
      [le.fp]: "yhp",
      [le.gma]: "ynews",
      [le.lifestyle]: "ylife",
      [le.money]: "yfin",
      [le.movies]: "ymov",
      [le.music]: "yent",
      [le.news]: "ynews",
      [le.sports]: "ysports",
      [le.style]: "ylife",
      [le.tech]: "ytech",
    },
    Be = [
      "commerceArticleType",
      "extractedKeyWords",
      "abk",
      "hashtag",
      "pct",
      "pd",
      _,
      "pt",
      "pubid",
      "spaceid",
      "lmsid",
      "pstaid",
      "lpstaid",
      "mchnm",
      "_rid",
      "ticker",
      "site",
      "sck",
      "url",
      "expn",
      "p_cpos",
      "senderdomain",
      "senderkaminolevel1",
      "senderkaminolevel2",
      "commercesiteid",
    ],
    Oe = ["ticker"],
    Ne = { fetchMarginPercent: -1, mobileScaling: -1, renderMarginPercent: 50 },
    je = "RENDER_SUCCEEDED",
    Me = "RENDER_FAILED",
    Ue = "SLOT_REQUESTED",
    ze = "GAM_AD_PAGE_LOAD_COMPLETE",
    Fe = "SLOT_RESPONSE_RECEIVED",
    xe = "IMPRESSION_VIEWABLE",
    Ge = "YPB_AD_STACK_RESOLVED",
    Ye = { allowOverlayExpansion: !1, allowPushExpansion: !1, sandbox: !0 };
  var $e;
  !(function (e) {
    (e.RESERVED = "RESERVED"), (e.STANDARD = "STANDARD");
  })($e || ($e = {}));
  const Ve = [
      "sellPersonalInformation",
      "accountMatching",
      "crossDeviceMapping",
    ],
    He = ["firstPartyAds"],
    qe = [
      "firstPartyAds",
      "sellPersonalInformation",
      "accountMatching",
      "crossDeviceMapping",
    ],
    We = [
      "firstPartyAds",
      "sellPersonalInformation",
      "accountMatching",
      "crossDeviceMapping",
    ],
    Ke = [
      "firstPartyAds",
      "sellPersonalInformation",
      "accountMatching",
      "crossDeviceMapping",
    ],
    Qe = { flush: !0 },
    Je = ["newPageLoad"],
    Xe = {
      "ads-combo-col2Bottom": ["LREC", "MON"],
      col2Bottom: ["LREC", "MON"],
      mid_right_stack: ["LREC", "MON"],
      top_right: ["300_250", "300_600"],
      top_right_stack: ["LREC", "MON"],
    },
    Ze = [
      "ay_floor",
      "ay_floor_m",
      "ay_floor_g",
      "ay_hash",
      "hb_adomain",
      "hb_adid",
      "hb_bidder",
      "hb_bidder_seatid",
      "hb_cache_host",
      "hb_cache_id",
      "hb_cache_path",
      "hb_cache_region",
      "hb_crid",
      "hb_deal",
      "hb_dsp",
      "hb_dt",
      "hb_format",
      "hb_pb",
      "hb_pb100",
      "hb_responsive",
      "hb_size",
      "hb_source",
      "hb_uid_mod",
      "hb_uuid",
      "expn",
      "p_cpos",
      "contentcategorypath",
    ],
    et = {
      analytics: {
        override: {
          normalizeSlotId: function (e) {
            return e.replace(
              /-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
              "",
            );
          },
        },
        useHistoryChangeTrigger: !0,
      },
      entityId: "wnsrvBJmEPrTfrnFX",
      floor: {
        addToHashKey: !1,
        currency: "USD",
        enabled: !1,
        limit: { percentage: 0.95 },
        prebid: !0,
        priceBuckets: { increment: 0.01, max: 100, min: 0 },
      },
    },
    tt = [
      "aol",
      "att",
      "autoblog",
      "engadget",
      "intheknow",
      "makers",
      "oath",
      "rivals",
      "techcrunch",
      "yahoo",
      "yahoosandbox",
      "compuserve",
      "github",
      "localhost",
      "netscape",
      "rivals-acceptance",
      "rivals-local",
      "rivals-staging",
      "wmconnect",
      "betterme-magazine",
      "olo-magazine",
    ],
    nt = "google_ads_iframe_/22888152279/",
    it = { DV360: "dv360", GAM: "gam", TBLA: "tbla", YDSP: "ydsp" },
    st = "BENJI_START",
    ot = "GPT_READY",
    rt = "PREBID_START",
    at = "PREBID_AUCTION_READY",
    ct = "PREBID_AUCTION_START",
    dt = "PREBID_AUCTION_END",
    lt = "GAM_FETCH",
    ht = "GAM_RENDER_START",
    ut = "GAM_RENDER_END",
    gt = "playing",
    pt = "ended",
    ft = {
      api: [1, 2],
      linearity: 1,
      maxduration: 30,
      mimes: ["video/mp4", "application/x-mpegURL", "application/javascript"],
      placement: 4,
      playbackmethod: [6],
      protocols: [1, 2, 3, 4, 5, 6, 7, 8],
      skip: 0,
    },
    mt = [st, ot, rt, at, ct, dt, lt, ht, ut];
  function bt(t) {
    const n = 1e3 * t,
      i = new CustomEvent(ae.tabFocus);
    let s = !0,
      o = null;
    e.addEventListener("focus", () => {
      !s && o && Date.now() - o > n && e.dispatchEvent(i), (s = !0);
    }),
      e.addEventListener("blur", () => {
        (s = !1), (o = Date.now());
      });
  }
  const yt = "default";
  function Et(e, t, n) {
    let i,
      s,
      o,
      r,
      a = -1;
    if ("up" === n)
      for (i = e.top, s = e.bottom; i <= s; )
        (a = Math.floor((i + s) / 2)),
          (o = document.elementFromPoint(e.left, a)),
          o === t ? (s = a - 1) : (i = a + 1);
    else if ("down" === n)
      for (i = e.top, s = e.bottom; i <= s; )
        (a = Math.floor((i + s) / 2)),
          (o = document.elementFromPoint(e.left, a)),
          o === t ? (i = a + 1) : (s = a - 1);
    else if ("left" === n)
      for (i = e.left, s = e.right; i <= s; )
        (a = Math.floor((i + s) / 2)),
          (o = document.elementFromPoint(a, e.top)),
          o === t ? (s = a - 1) : (i = a + 1);
    else
      for (i = e.left, s = e.right; i <= s; )
        (a = Math.floor((i + s) / 2)),
          (o = document.elementFromPoint(a, e.top)),
          o === t ? (i = a + 1) : (s = a - 1);
    const c = "up" === n || "left" === n ? i : s;
    if (
      ((r =
        "up" === n || "down" === n
          ? document.elementFromPoint(e.left, c)
          : document.elementFromPoint(c, e.top)),
      r !== t)
    )
      throw new Error("Element is completely obstructed " + n);
    return c;
  }
  const _t = (t) => {
    if (!t) return !1;
    if (!((n = t).offsetWidth || n.offsetHeight || n.getClientRects().length))
      return !1;
    var n;
    const i = t.getBoundingClientRect(),
      s = e.innerWidth,
      o = e.innerHeight;
    if (i.top > o || i.bottom < 0 || i.right < 0 || i.left > s) return !1;
    const r = i.left < 0 ? 1 : i.left + 1,
      a = i.right > s ? s - 1 : i.right - 1,
      c = i.top > 0 ? i.top + 1 : 1,
      d = i.bottom > o ? o - 1 : i.bottom - 1,
      l = i.height * i.width;
    if (((d - c) * (a - r)) / l < 0.5) return !1;
    if (
      (function (e, t) {
        const { left: n, top: i, bottom: s, right: o } = e,
          r = [
            [n, i],
            [n, s],
            [o, i],
            [o, s],
          ];
        for (const [e, n] of r) {
          const i = document.elementFromPoint(e, n);
          if (i !== t && !t.contains(i)) return !0;
        }
        return !1;
      })({ bottom: d, left: r, right: a, top: c }, t)
    ) {
      const e = (function (e, t, n) {
        const { top: i, bottom: s, left: o, right: r } = e;
        try {
          const e = Et({ bottom: s, left: o, right: r, top: i }, t, "up"),
            a = Et({ bottom: s, left: o, right: r, top: e }, t, "down"),
            c = Et({ bottom: a, left: o, right: r, top: e }, t, "left");
          return (
            ((a - e) *
              (Et({ bottom: a, left: c, right: r, top: e }, t, "right") - c)) /
            n
          );
        } catch (e) {
          return 0;
        }
      })({ bottom: d, left: r, right: a, top: c }, t, l);
      return e >= 0.5;
    }
    return !0;
  };
  function It(t) {
    const n = e.document.getElementById(t);
    if (!n) return !1;
    const i = n?.querySelector("iframe"),
      s = n?.querySelector(".evp-player iframe"),
      o = s || i;
    return o instanceof HTMLElement && _t(o);
  }
  function vt(e, t) {
    let n = [];
    return (
      "string" == typeof t
        ? (n = e.store.getRegionAdComponents(t))
        : t?.forEach((t) => {
            const i = t.split(":"),
              s = i[0],
              o = i[1],
              r = s?.length,
              a = 2 === i.length && r && o?.length > 0;
            r && void 0 === o
              ? n.push(e.store.getAdComponentById(s))
              : a && n.push(e.store.getAdComponent(s, o));
          }),
      n
    );
  }
  const At = (e = "") =>
      ("string" == typeof e
        ? Array.from(e)
            .map((e) => e.charCodeAt(0).toString(16))
            .join("")
        : ""
      ).substring(0, 150),
    Ct = (e, t) => {
      let n, i;
      t || (t = 4), (i = e);
      for (let e = 0; e <= t; e++)
        ((i?.id &&
          "string" == typeof i.id &&
          (i.id.startsWith("sda-") ||
            i.id.toLowerCase().startsWith("taboola-") ||
            i.id.toLowerCase().startsWith("ad-") ||
            i.id.toLowerCase().includes("-ad-") ||
            i.id.toLowerCase().endsWith("-ad"))) ||
          i?.className?.startsWith("ad-") ||
          i?.classList?.contains("native-ad")) &&
          (n = i),
          (i = i && i.parentElement);
      return n;
    };
  function St(e) {
    if (e < 0 || e > 100) return !1;
    return Math.floor(100 * Math.random()) < e;
  }
  function Tt(e, t) {
    const n = {};
    return (
      Object.keys(e).forEach((i) => {
        let s = e[i];
        t.includes(i) && (s = Array.isArray(s) ? s.map((e) => Rt(e)) : Rt(s)),
          (n[i] = s);
      }),
      n
    );
  }
  function Rt(e) {
    let t = (function (e) {
      const t = /%[0-9A-Fa-f]{2}/g,
        n = e.replace(t, (e) => {
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        });
      return n;
    })(e);
    return (
      [/(<([^>]+)>)/gm, /[\r\n]+/gm].forEach((e) => {
        t = t.replace(e, "");
      }),
      t
    );
  }
  function Lt(e) {
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        void 0 !== e[n] && (t[n] = e[n]);
      }),
      t
    );
  }
  function wt(e) {
    return !!(
      e &&
      "object" == typeof e &&
      e.hasOwnProperty("path") &&
      e.hasOwnProperty("size")
    );
  }
  function Pt(e) {
    return "placement" in e && "mode" in e;
  }
  function kt(e, t) {
    if (e && ((n = e), Object.values(ve).includes(n))) return e;
    {
      const e = void 0 === t || !Ae.hasOwnProperty(t);
      return Ae[e ? yt : t];
    }
    var n;
  }
  function Dt(e, t) {
    const n = {};
    for (const i of de)
      "axid" === i && t
        ? (n[i] = t)
        : void 0 !== e[i] && "" !== e[i] && (n[i] = e[i]);
    return [
      Object.entries(n)
        .map((e) => e.join(":"))
        .join(";"),
      "",
      e.spaceid,
      "",
      "",
      "",
      e.bucket,
      "",
    ].join("|");
  }
  function Bt(e) {
    e.features?.enableYahooPrebid ? Ot(e) : e.gptComponent.refresh([e.slot]);
  }
  function Ot(e) {
    const t = e._getInfoForPrebid();
    e.ypbComponent.startPrebid(t, () => {
      e.gptComponent.refresh([e.slot]);
    });
  }
  function Nt(e) {
    return (
      "string" == typeof e ||
      (Array.isArray(e) && 1 === e.length && "string" == typeof e[0]) ||
      (Array.isArray(e) &&
        2 === e.length &&
        "number" == typeof e[0] &&
        "number" == typeof e[1])
    );
  }
  function jt(e, t) {
    const n = Nt(e) ? [e] : e,
      i = Nt(t) ? [t] : t,
      s = n.filter((e) =>
        (function (e, t) {
          const n = JSON.stringify(t);
          return e.some((e) => JSON.stringify(e) === n);
        })(i, e),
      );
    return 1 === s.length ? s[0] : s;
  }
  function Mt(e, t) {
    const n = t && Xe[t];
    if (n) {
      const t = n[1];
      return e.includes(t);
    }
    return !1;
  }
  function Ut(e) {
    try {
      const t = performance
        .getEntriesByType("resource")
        .find((t) => t.name.includes(e));
      if (!t) return null;
      const { startTime: n, responseEnd: i } = t;
      return { responseEnd: i, startTime: n };
    } catch (e) {}
    return null;
  }
  function zt(t) {
    let n = "";
    if (t)
      try {
        const i = JSON.parse(e.atob?.("string" == typeof t ? t : ""));
        n = Array.isArray(i?.envelope) ? i.envelope.join() : "";
      } catch (e) {}
    return n;
  }
  function Ft() {
    let t;
    try {
      t = e.crypto.randomUUID();
    } catch (e) {
      t = Math.floor(1e15 * Math.random()).toString();
    }
    return t;
  }
  class xt {
    _googletag;
    features;
    refreshQueue;
    debounceTimer;
    constructor() {
      return (
        (this.features = {}),
        (this.refreshQueue = []),
        (this.debounceTimer = null),
        (this._googletag = {}),
        (this._googletag.cmd = []),
        void 0 !== e &&
          (e.googletag
            ? (this._googletag = e.googletag)
            : (e.googletag = this._googletag),
          this.addCallbackToCmdQueue(() => {
            e.benji.logger.updateDatastore({
              [ot]: Math.round(e.performance.now()),
            });
          })),
        this
      );
    }
    addCallbackToCmdQueue(e) {
      this._googletag.cmd.push(() => {
        e();
      });
    }
    addEventListener(e, t) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().addEventListener(e, t);
      });
    }
    create(...e) {
      const [t, n] = e,
        { path: i, size: s, id: o, gptSetting: r } = t,
        { safeFrameConfig: a = {} } = r || {};
      this._googletag.cmd.push(() => {
        const e = this._googletag
          .defineSlot(i, s, o)
          .setSafeFrameConfig(Lt(a))
          .addService(this._googletag.pubads());
        n.slot = e;
      });
    }
    clearTargeting(e) {
      this._googletag.cmd.push(() => {
        0 !== this._googletag.pubads().getTargeting(e).length &&
          this._googletag.pubads().clearTargeting(e);
      });
    }
    destroy(e) {
      this._googletag.cmd.push(() => {
        this._googletag.destroySlots(e);
      });
    }
    enableLazyLoad(e) {
      this._googletag.cmd.push(() => {
        const t = { ...Ne, ...e };
        this._googletag.pubads().enableLazyLoad({
          fetchMarginPercent: t.fetchMarginPercent,
          mobileScaling: t.mobileScaling,
          renderMarginPercent: t.renderMarginPercent,
        });
      });
    }
    enableSizeMappingForSlot(e, t, n) {
      this._googletag.cmd.push(() => {
        const i = this._googletag.sizeMapping().addSize(t, n).build();
        e.slot?.defineSizeMapping(i);
      });
    }
    refresh(e) {
      this.features.enableRefreshDebounce
        ? this._refreshWithDebounce(e)
        : this._refresh(e);
    }
    render(...e) {
      const [t, n] = e;
      this._googletag.cmd.push(() => {
        const e = this.features.enableYahooPrebid;
        (this.features.enableCtrldSRABatch || e) && n && n.slot
          ? this.refresh([n.slot])
          : this._display(t);
      });
    }
    setInitialPageUrl(t) {
      this._googletag.cmd.push(() => {
        const n = t || e.location.href;
        this._googletag.pubads().set("page_url", n);
      });
    }
    setPrivacySettings(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().setPrivacySettings(e);
      });
    }
    setPublisherProvidedId(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().setPublisherProvidedId(e);
      });
    }
    setupService(...e) {
      const [t, n] = e;
      (this.features = t),
        this._googletag.cmd.push(() => {
          const e = this.features.enableYahooPrebid;
          (this.features.enableCtrldSRABatch || e) &&
            this._googletag.pubads().disableInitialLoad(),
            this._googletag.pubads().enableSingleRequest(),
            this._googletag.pubads().setForceSafeFrame(!0);
          const { safeFrameConfig: t = {} } = n ?? {},
            i = { ...Ye, ...Lt(t) };
          this._googletag.pubads().setSafeFrameConfig(i),
            this._googletag.enableServices();
        });
    }
    setTargeting(e) {
      this._googletag.cmd.push(() => {
        Object.keys(e).forEach((t) => {
          this._googletag.pubads().setTargeting(t, e[t]);
        });
      });
    }
    setPageUrl(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().get("page_url") !== e &&
          this._googletag.pubads().set("page_url", e);
      });
    }
    getTargetings(e, t) {
      this._googletag.cmd.push(() => {
        const n = {};
        e.forEach((e) => {
          n[e] = this._googletag.pubads().getTargeting(e).join(",");
        }),
          t && t(n);
      });
    }
    setTargetingForSlot(e, t) {
      this._googletag.cmd.push(() => {
        Object.keys(t).forEach((n) => {
          const i = t[n];
          e.slot.setTargeting(n, i),
            void 0 === e.kvs && (e.kvs = {}),
            (e.kvs[n] = i);
        });
      });
    }
    collapseEmptyDivs(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().collapseEmptyDivs(e);
      });
    }
    _display(e) {
      this._googletag.cmd.push(() => {
        this._googletag.display(e);
      });
    }
    _refresh(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().refresh(e);
      });
    }
    _refreshWithDebounce(e) {
      this.refreshQueue.push(...e),
        this.debounceTimer && clearTimeout(this.debounceTimer),
        (this.debounceTimer = setTimeout(() => {
          this._refresh(this.refreshQueue),
            (this.refreshQueue = []),
            (this.debounceTimer = null);
        }, 20));
    }
  }
  const Gt = {};
  function Yt(e, t) {
    return t &&
      (function (e) {
        return Object.values(he).includes(e);
      })(t)
      ? { gptEvent: e }
      : {};
  }
  class $t {
    nextHandler = null;
    handle(e) {
      const { positionId: t, positionConfig: n, context: i } = e,
        s = Pt(n);
      if (!(wt(n) || s)) return null;
      const { id: o, region: r } = n;
      t !== o &&
        i.logger.sendDebugBeacon({
          id: o,
          outcm: "gamSchemaCheck",
          positionId: t,
          type: "positionKeyIdMismatch",
        });
      if (void 0 !== i.store.getAdComponent(r, o)) {
        const { taboola: e } = i;
        if (!s || (s && !e.isNewPageLoad())) return null;
      }
      return this.nextHandler ? this.nextHandler.handle(e) : void 0;
    }
    setNext(e) {
      this.nextHandler = e;
    }
  }
  const Vt = "pointerup",
    Ht = "scroll",
    qt = "pointermove",
    Wt = "keydown";
  const Kt = (function (e, t) {
    let n = 0;
    return (...i) => {
      const s = performance.now();
      if (!(s - n < t)) return (n = s), e(...i);
    };
  })(function () {
    const t = new CustomEvent(ae.userAction);
    e.dispatchEvent(t);
  }, 200);
  const Qt = {},
    Jt = {},
    Xt = {},
    Zt = {},
    en = [];
  function tn() {
    this.gpt.addEventListener(K.impressionViewable, (e) => {
      const t = e.slot.getSlotElementId(),
        n = Jt[t];
      n && n();
    }),
      this.gpt.addEventListener(K.slotVisibilityChanged, (e) => {
        const t = e.slot.getSlotElementId(),
          n = Qt[t];
        n && n(e.inViewPercentage);
      });
  }
  function nn() {
    [qt, Vt, Ht, Wt].forEach((t) => {
      e.addEventListener(t, Kt);
    }),
      e.addEventListener(ae.userAction, () => {
        for (; en.length > 0; ) {
          const e = en.pop();
          e && e();
        }
      });
  }
  class sn {
    action;
    duration;
    timerId;
    elapsedTime;
    constructor(e) {
      const { action: t, duration: n } = e;
      (this.action = t),
        (this.duration = n),
        (this.timerId = void 0),
        (this.elapsedTime = 0),
        this._resetElapsedTime();
    }
    getElapsedTime() {
      return this.elapsedTime;
    }
    pause() {
      this._cancelElapse();
    }
    resume() {
      void 0 === this.timerId && 0 !== this.elapsedTime && this._elapse();
    }
    start() {
      this._resetElapsedTime(), this._cancelElapse(), this._elapse();
    }
    stop() {
      this._resetElapsedTime(), this._cancelElapse();
    }
    _resetElapsedTime() {
      this.elapsedTime = 0;
    }
    _elapse() {
      this.timerId = e.setInterval(() => {
        (this.elapsedTime += 1),
          this.elapsedTime >= this.duration && (this.stop(), this.action());
      }, 1e3);
    }
    _cancelElapse() {
      clearInterval(this.timerId), (this.timerId = void 0);
    }
  }
  const on = {},
    rn = 100;
  function an(e, t) {
    const n = e?.config.setting?.lazyLoad;
    if (!0 === n) return;
    let i, s;
    const o = t?.id;
    Pt(t) ? (i = n?.lazyFetch?.taboola) : wt(t) && (i = n?.lazyFetch?.gam),
      i?.positions ? i?.positions[o] && (s = i?.positions[o]) : (s = i);
    const r = t.lazyFetch || s;
    return r || void 0;
  }
  function cn() {
    Object.keys(on).forEach((t) => {
      const { offset: n = 0, callback: i } = on[t];
      (function (t, n) {
        const i = document.getElementById(t);
        if (!i) return;
        const s = Ct(i) || i,
          o = e.innerHeight,
          r = s.getBoundingClientRect(),
          a = Math.min(r.bottom, o) - Math.abs(r.top);
        return a && Math.abs(a) < n;
      })(t, n) && (delete on[t], i());
    });
  }
  function dn() {
    e.addEventListener(
      "scroll",
      (function (e, t) {
        let n = Date.now();
        return function () {
          n + t - Date.now() < 0 && (e(), (n = Date.now()));
        };
      })(cn, rn),
    );
  }
  const ln = "ERROR",
    hn = "INFO",
    un = "PREBID",
    gn = "LIVEINTENT",
    pn = "AUCTION_EVENTS_NOT_FIRED",
    fn = "AY_JS_DISABLED",
    mn = "AY_JS_FAILURE",
    bn = "AY_JS_SUCCESS",
    yn = "BP_CONFIG_FAILURE",
    En = "CACHED_EIDS_NOT_SENT",
    _n = "ERROR_AY_SETUP",
    In = "ERROR_PREBID_SETUP",
    vn = "LI_MODULE_LOADED",
    An = "LI_MODULE_NOT_LOADED",
    Cn = "LIVEINTENT_FINISHED_IN_TIME",
    Sn = "LIVEINTENT_FINISHED_LATE",
    Tn = "LIVEINTENT_PRESENT_IN_CONFIG",
    Rn = "NO_BIDS",
    Ln = "PBJS_FAILURE",
    wn = "PBJS_SUCCESS",
    Pn = "PREBID_SESSION_START",
    kn = "USER_ID_MODULE_BUCKET_CREATED",
    Dn = "USER_ID_MODULE_NOT_ELIGIBLE_IP",
    Bn = "CONFIG_FAILURE",
    On = "IN_BANNER_VIDEO_PLAYER",
    Nn = "AD_CONTAINER_MISSING",
    jn = "PLAYER_ALREADY_EXISTS",
    Mn = "PLAYER_RENDER_ERROR",
    Un = "https://noa.yahoo.com/p",
    zn = "unknown",
    Fn = (e) => {
      "function" != typeof window.navigator?.sendBeacon
        ? (document.createElement("img").src = e)
        : window.navigator.sendBeacon(e);
    },
    xn = (e, t) => {
      const { spaceid: n, ...i } = t,
        s = Object.keys(i)
          .map((e) => `${e}=${encodeURIComponent(i[e])}`)
          .join("&");
      return `${e}?s=${n}&t=${Date.now()}&_I=&_AO=0&_NOL=0&${s}`;
    };
  function Gn(e, t) {
    const {
        currentI13n: { pd: n = zn, pt: i = zn },
      } = t,
      {
        test: s = zn,
        colo: o = zn,
        device: r = zn,
        lang: a = zn,
        site: c = zn,
        s: d = zn,
        ver: l = zn,
        partner: h = zn,
        pl1: u = zn,
        pl2: g = zn,
        pl3: p = zn,
        region: f = zn,
        src: m = zn,
        rid: b = zn,
        usercountry: y = zn,
      } = e.page;
    return {
      s: d,
      src: m,
      site: c,
      partner: h,
      lang: a,
      region: f,
      device: r,
      colo: o,
      test: s,
      rid: b,
      pd: n,
      pt: i,
      ver: l,
      pl1: u,
      pl2: g,
      pl3: p,
      usercountry: y,
    };
  }
  function Yn(e, t) {
    const {
        currentI13n: { pd: n = zn, pt: i = zn },
      } = t,
      {
        test: s = zn,
        colo: o = zn,
        device: r = zn,
        lang: a = zn,
        partner: c = zn,
        region: d = zn,
        site: l = zn,
        src: h = zn,
        s: u = zn,
        rid: g = zn,
        usercountry: p = zn,
        limitedAds: f = zn,
        NPA: m = zn,
        pl1: b = zn,
        pl2: y = zn,
        pl3: E = zn,
      } = e.page;
    return {
      spaceid: u,
      src: h,
      site: l,
      partner: c,
      lang: a,
      region: d,
      device: r,
      colo: o,
      bucket: s,
      rid: g,
      limitedAds: f,
      NPA: m,
      pd: n,
      pt: i,
      usercountry: p,
      benjiVersion: b,
      prebidVersion: y,
      yahooPrebidVersion: E,
    };
  }
  const $n = "BENJI:LOGGER",
    Vn = "beforeunload",
    Hn = "visibilitychange";
  const qn = (e) => {
    const t = new CustomEvent($n, { detail: e });
    window.dispatchEvent(t);
  };
  const Wn = {},
    {
      AD_START: Kn,
      AD_PAUSE: Qn,
      AD_RESUME: Jn,
      AD_ERROR: Xn,
      AD_COMPLETE: Zn,
      AD_END: ei,
      PLAYER_ERROR: ti,
      PLAYBACK_START: ni,
    } = {
      AD_COMPLETE: "AD_COMPLETE",
      AD_END: "AD_END",
      AD_ERROR: "AD_ERROR",
      AD_PAUSE: "AD_PAUSE",
      AD_PROGRESS: "AD_PROGRESS",
      AD_RESUME: "AD_RESUME",
      AD_START: "AD_START",
      DATERANGE_ENDED: "DATERANGE_ENDED",
      DATERANGE_STARTED: "DATERANGE_STARTED",
      DIMENSIONS_CHANGE: "DIMENSIONS_CHANGE",
      DOCK_CHANGE: "DOCK_CHANGE",
      FULLSCREEN_CHANGE: "FULLSCREEN_CHANGE",
      ITEM_END: "ITEM_END",
      ITEM_REQUEST: "ITEM_REQUEST",
      ITEM_START: "ITEM_START",
      MUTE_CHANGE: "MUTE_CHANGE",
      PLAYBACK_COMPLETE: "PLAYBACK_COMPLETE",
      PLAYBACK_END: "PLAYBACK_END",
      PLAYBACK_ERROR: "PLAYBACK_ERROR",
      PLAYBACK_PAUSE: "PLAYBACK_PAUSE",
      PLAYBACK_PROGRESS: "PLAYBACK_PROGRESS",
      PLAYBACK_RESUME: "PLAYBACK_RESUME",
      PLAYBACK_SEEKING: "PLAYBACK_SEEKING",
      PLAYBACK_START: "PLAYBACK_START",
      PLAYER_ERROR: "PLAYER_ERROR",
      PLAYER_READY: "PLAYER_READY",
      PLAYLIST_END: "PLAYLIST_END",
      PLAYLIST_ITEM_ADD: "PLAYLIST_ITEM_ADD",
      PLAYLIST_ITEM_REMOVE: "PLAYLIST_ITEM_REMOVE",
      PLAYLIST_POSITION_CHANGE: "PLAYLIST_POSITION_CHANGE",
      RENDER_FAIL: "RENDER_FAIL",
      TIMED_METADATA: "TIMED_METADATA",
      UI_INTERACT: "UI_INTERACT",
      VOLUME_CHANGE: "VOLUME_CHANGE",
    },
    ii = (e) => {
      const [t, n] = e.size.split("x");
      return {
        height: e.playerHeight || e.height || n,
        width: e.playerWidth || e.width || t,
      };
    },
    si = (e) => {
      const {
          adId: t,
          adUnitCode: n,
          bidder: i,
          creativeId: s,
          mediaType: o,
          source: r,
          statusMessage: a,
        } = e,
        c = ii(e);
      return {
        adId: t,
        adSize: `${c.width}x${c.height}`,
        adUnitCode: n,
        auctionSource: r,
        bidder: i,
        creativeId: s,
        mediaType: o,
        statusMessage: a,
      };
    },
    oi = (e) => {
      if (!Wn[e]) return;
      const t = Wn[e].playerInstance;
      t && t.destroy(), delete Wn[e];
    },
    ri = (e, t) => {
      const n = si(t);
      qn({
        logType: ln,
        message: e,
        messageDetails: JSON.stringify({ ...n }),
        source: On,
      });
    },
    ai = (e, t) => {
      qn({
        logType: hn,
        message: e,
        messageDetails: `adUnitCode: ${t}`,
        source: On,
      });
    },
    ci = {
      [Zn]: (e) => {
        Wn[e].status = pt;
      },
      [ei]: (e) => {
        Wn[e].status = pt;
      },
      [Xn]: (e) => {
        oi(e);
      },
      [Qn]: (e) => {
        Wn[e].status = "paused";
      },
      [Jn]: (e) => {
        Wn[e].status = gt;
      },
      [Kn]: (e) => {
        Wn[e].status = gt;
      },
      [ti]: (e) => {
        oi(e);
      },
    },
    di = {
      [Zn]: ({ adUnitCode: e }) => {
        ai(Zn, e);
      },
      [Xn]: (e) => {
        ri(Xn, e);
      },
      [Kn]: ({ adUnitCode: e }) => {
        ai(Kn, e);
      },
      [ni]: (e) => {
        ri(ni, e);
      },
      [ti]: (e) => {
        ri(ti, e);
      },
    },
    li = (t, n) => ({
      render: function (i) {
        try {
          Wn[i.adUnitCode] &&
            (qn({
              logType: hn,
              message: jn,
              messageDetails: `adUnitCode: ${i.adUnitCode}`,
              source: On,
            }),
            oi(i.adUnitCode));
          const s = ((e, t, n) => {
              const {
                  site: i,
                  region: s,
                  lang: o,
                  bucket: r,
                  ver: a,
                  pt: c,
                  pd: d,
                  pct: l,
                } = t,
                { adComponentPath: h } = n,
                { bidder: u } = e,
                g = e.vastXml,
                p = e.vastUrl,
                f = Array.isArray(r) ? r.join(",") : r,
                m = {
                  trackingParams: {
                    ad_sys: u,
                    pct: l,
                    pd: d,
                    plcid: h,
                    pt: c,
                    ver: a,
                  },
                };
              return (
                Object.keys(m.trackingParams).forEach((e) => {
                  const t = e;
                  void 0 === m.trackingParams[t] && delete m.trackingParams[t];
                }),
                {
                  autoplay: !0,
                  expBucket: f,
                  expName: "outstream",
                  lang: o,
                  monetization: m,
                  mute: !0,
                  outstream: {
                    ...((p && { adUrl: p }) || (g && { adXml: g })),
                  },
                  region: s,
                  site: i,
                }
              );
            })(i, t, n),
            o = ((e) => {
              const t = document.querySelector(`#${e.adUnitCode}`);
              if (!t)
                return (
                  qn({
                    logType: hn,
                    message: Nn,
                    messageDetails: `adUnitCode: ${e.adUnitCode}`,
                    source: On,
                  }),
                  null
                );
              const n = document.createElement("div"),
                { height: i, width: s } = ii(e);
              return (
                (n.id = `player-${e.adUnitCode}`),
                (n.style.width = `${s}px`),
                (n.style.height = `${i}px`),
                t.appendChild(n),
                n
              );
            })(i);
          if (!o) return;
          const r = new e.YAHOO.VideoPlatform.AdOnly.VideoPlayer(s);
          ((t, n) => {
            const i = e.YAHOO.VideoPlatform.AdOnly.VideoPlayer.Events;
            for (const e in i)
              i.hasOwnProperty(e) &&
                t.on?.(i[e], () => {
                  ci[e] && ci[e](n.adUnitCode), di[e] && di[e](n);
                });
          })(r, i),
            ((e, t, n) => {
              e.render(`#${t.id}`),
                (Wn[n.adUnitCode] = {
                  playerInstance: e,
                  status: "initializing",
                });
            })(r, o, i);
        } catch (e) {
          qn({
            logType: ln,
            message: Mn,
            messageDetails: `adUnitCode: ${i.adUnitCode}`,
            source: On,
          });
        }
      },
      url: "https://s.yimg.com/rx/ev/prod/evplayer-adonly.js",
    });
  function hi() {
    function e(e) {
      e.timer?.stop(),
        e.creativeInteractionConfig &&
          (e.creativeInteractionConfig.refreshPauseTS = Date.now()),
        e.creativeInteractionConfig?.isYahooCreative &&
          (e.creativeInteractionConfig.ycInteractionActive = !0),
        e.creativeInteractionConfig &&
          (e.creativeInteractionConfig.interactionActive = !0);
    }
    if (this.stackGroup && this.features?.enableAdStacking) {
      this.store
        .getSameSideStackAdComponents(this.id, this.stackGroup)
        .forEach((t) => {
          e(t);
        });
    } else e(this);
  }
  function ui() {
    function t(t) {
      t.creativeInteractionConfig?.interactionActive &&
        (t.creativeInteractionConfig &&
          (t.creativeInteractionConfig.interactionActive = !1),
        t.timer?.start(),
        t.creativeInteractionConfig?.isYahooCreative &&
          (t.creativeInteractionConfig.ycInteractionActive = !1),
        St(10) &&
          t.creativeInteractionConfig?.refreshPauseTS &&
          e.benji.logger.sendDebugBeacon({
            ad_type: t.creativeInteractionConfig?.isYahooCreative ? "yc" : "3p",
            id: t.id,
            refresh_delay:
              (Date.now() - t.creativeInteractionConfig?.refreshPauseTS) / 1e3,
            type: "ad_hover",
          }));
    }
    if (this.stackGroup && this.features?.enableAdStacking) {
      this.store
        .getSameSideStackAdComponents(this.id, this.stackGroup)
        .forEach((e) => {
          t(e);
        });
    } else t(this);
  }
  function gi() {
    if (this.stackGroup && this.features?.enableAdStacking) {
      this.store.getStackAdComponents(this.stackGroup).forEach((e) => {
        e.timer?.stop();
      });
      this.store
        .getSameSideStackAdComponents(this.id, this.stackGroup)
        .forEach((e) => {
          e.timer?.start();
        });
    } else this.timer?.start();
  }
  function pi(e) {
    this.viewPercentage = e;
    !0 === this.eligibleForTimedRefresh && this.isInView() && this.refresh();
  }
  function fi() {
    this.isInView() && (this.timer?.start(), this.refresh());
  }
  class mi {
    containerMap;
    eligibleForTimedRefresh;
    features;
    gptComponent;
    ypbComponent;
    gptSetting;
    path;
    size;
    i13n;
    id;
    isEdgeToEdge;
    inBannerVideoAdEnabled;
    kvs;
    metrics;
    ntsFallBack;
    refreshConfig;
    region;
    renderInfo;
    slot;
    stackGroup;
    stickyConfig;
    store;
    timer;
    useSecure;
    viewPercentage;
    customSizeConfig;
    disableRefresh;
    adBlockPlusEnabled;
    _fetchCount;
    _failureCount;
    _isIntersecting;
    _stackAdLastRefreshedAt;
    lazyFetch;
    creativeInteractionConfig;
    constructor(t) {
      const {
        containerMap: n,
        disableRefresh: i,
        adBlockPlusEnabled: s,
        features: o,
        gptComponent: r,
        ypbComponent: a,
        gptSetting: c,
        kvs: d,
        ntsFallBack: l,
        refreshConfig: h,
        region: u,
        i13n: g,
        id: p,
        path: f,
        customSizeConfig: m,
        size: b,
        stackGroup: y,
        stickyConfig: E,
        store: _,
        useSecure: I,
        lazyFetch: v,
      } = t;
      (this.containerMap = n),
        (this.features = o),
        (this.id = p),
        (this.path = f),
        (this.size = b),
        (this.gptComponent = r),
        (this.ypbComponent = a),
        (this.metrics = {}),
        (this.ntsFallBack = l),
        (this.refreshConfig = h),
        (this.region = u),
        (this.renderInfo = {}),
        (this.stackGroup = y),
        (this.store = _),
        (this.useSecure = I),
        (this.viewPercentage = 0),
        (this._isIntersecting = !1),
        (this._stackAdLastRefreshedAt = 0),
        (this.gptSetting = c),
        (this._failureCount = 0),
        (this._fetchCount = 0),
        (this.i13n = g),
        (this.lazyFetch = v),
        (this.inBannerVideoAdEnabled = g?.feature?.includes(
          "prebid-inBannerVideo",
        ));
      const A = { gptSetting: this.gptSetting, id: p, path: f, size: b };
      if (o?.enableLazyFetch && this.lazyFetch) {
        const e = () => {
          this._createSlot(A), this.render();
        };
        on[p] = { callback: e, offset: this.lazyFetch.offset };
      } else this._createSlot(A);
      if (
        (d &&
          ((this.kvs = d),
          e.benji.logger.updateDatastore(p, { sec: d.loc }),
          this.gptComponent.setTargetingForSlot(this, d)),
        m && (this.customSizeConfig = m),
        E && (this.stickyConfig = E),
        !i && this.refreshConfig?.duration && !s)
      ) {
        this.eligibleForTimedRefresh = !1;
        const e = () => {
            this.isInView()
              ? this.refreshConfig.requireUserAction
                ? en.push(() => this.refresh())
                : this.refresh()
              : (this.eligibleForTimedRefresh = !0);
          },
          { duration: t } = this.refreshConfig;
        this.timer = new sn({ action: e.bind(this), duration: t });
      }
      (this.disableRefresh = i),
        (this.adBlockPlusEnabled = s),
        this.store.add(u, p, this),
        this.features?.enableAdInteractionBasedRefresh &&
          (this.creativeInteractionConfig = {
            hoverTimerId: null,
            iframeContainer: null,
            interactionActive: !1,
            interactionEndHandler: ui.bind(this),
            interactionStartHandler: hi.bind(this),
            isYahooCreative: !1,
            scrollOffset: 150,
            ycInteractionActive: !1,
          });
    }
    disableAllRefresh() {
      this.disableRefresh = !0;
    }
    destroy() {
      this._unloadHandler(),
        this.timer && (this.timer.stop(), delete this.timer),
        this.gptComponent.destroy([this.slot]),
        this.store.delete(this.region, this.id);
    }
    increaseFailureCount() {
      this._failureCount += 1;
    }
    increaseFetchCount() {
      this._fetchCount += 1;
    }
    isInitiallyLoaded() {
      return 1 === this._fetchCount;
    }
    isInView() {
      return this.useSecure
        ? this._isIntersecting
        : It(this.id) && this.viewPercentage >= 50;
    }
    getRenderCount() {
      return this._fetchCount - this._failureCount;
    }
    refresh() {
      if (
        this.refreshConfig.limit &&
        this.refreshConfig.limit <= this.getRenderCount()
      )
        return;
      const e = this.stackGroup && this.features?.enableAdStacking;
      var t;
      this.inBannerVideoAdEnabled && ((t = this.id), Wn[t]) && oi(this.id),
        (this.viewPercentage = 0);
      const n =
        this.refreshConfig.sameSizeRefresh &&
        !(function (e) {
          const t = e?.getSizes();
          if (!t) return !1;
          for (let e = 0; e < t.length; e++) if ("fluid" === t[e]) return !0;
          return !1;
        })(this.slot) &&
        this.slot?.getSizes().length > 1 &&
        1 === this._fetchCount;
      if (e) {
        if (!(Date.now() - this._stackAdLastRefreshedAt <= 150)) {
          const e = this.store
            .getStackAdComponents(this.stackGroup)
            .map(
              (e) => (
                e.id !== this.id && (e.eligibleForTimedRefresh = !1),
                (e._stackAdLastRefreshedAt = Date.now()),
                e
              ),
            );
          if (this.features?.enableYahooPrebid)
            e.forEach((e) => {
              Ot(e);
            });
          else {
            const t = e.map((e) => e.slot);
            this.gptComponent.refresh(t);
          }
        }
      } else
        n
          ? (function (e) {
              try {
                const { slot: t, features: n, renderInfo: i } = e,
                  s = t.getSlotElementId(),
                  o = document.getElementById(s);
                if (o instanceof HTMLElement) {
                  if (!i.size) return void Bt(e);
                  const { height: s, width: r } = i.size,
                    a = [r, s],
                    c = t.getSizes();
                  let d = !1;
                  for (let e = 0; e < c.length; e++) {
                    const t = c[e];
                    t.height === s && t.width === r && (d = !0);
                  }
                  if (!d) return void Bt(e);
                  if (
                    ((e.size = a),
                    e.isEdgeToEdge || (o.style.minHeight = `${s}px`),
                    n?.enableSizeMapping)
                  )
                    return (
                      e.gptComponent.enableSizeMappingForSlot(e, [0, 0], a),
                      void Bt(e)
                    );
                  if (e.features?.enableYahooPrebid) {
                    const t = e.ypbComponent.removeAdUnit(e.id);
                    t &&
                      t.mediaTypes.banner &&
                      ((t.mediaTypes.banner.sizes = a),
                      e.ypbComponent.addAdUnit(t));
                  }
                  e.gptComponent.destroy([e.slot]);
                  const l = {
                    gptSetting: e.gptSetting,
                    id: e.id,
                    path: e.slot.getAdUnitPath(),
                    size: a,
                  };
                  e.gptComponent.create(l, e),
                    e.kvs && e.gptComponent.setTargetingForSlot(e, e.kvs),
                    (function (e) {
                      if (e.features?.enableYahooPrebid) {
                        const t = e._getInfoForPrebid();
                        e.ypbComponent.startPrebid(t, () => {
                          e.renderSlot();
                        });
                      } else e.renderSlot();
                    })(e);
                }
              } catch (t) {
                Bt(e);
              }
            })(this)
          : Bt(this);
      this.eligibleForTimedRefresh = !1;
    }
    _getInfoForPrebid() {
      return {
        adComponentId: this.id,
        adComponentPath: this.path,
        size: this.size,
        ...(this.kvs?.loc && { loc: this.kvs.loc }),
        ...(this.stackGroup && { stackGroup: this.stackGroup }),
      };
    }
    render() {
      if ((this._loadHandler(), on && on[this.id])) return;
      const t = () => {
        const t = document?.getElementById(this.id);
        "index" !== this.region || t
          ? this.renderSlot()
          : e.addEventListener(f, () => {
              this.renderSlot();
            });
      };
      if (!this.features?.enableYahooPrebid) return void t();
      const n = this._getInfoForPrebid();
      this.ypbComponent.startPrebid(n, t);
    }
    renderSlot() {
      this.gptComponent.render(
        this.useSecure && this.containerMap?.[this.id]
          ? this.containerMap[this.id]
          : this.id,
        this,
      );
    }
    renewTimer(e) {
      if (void 0 === this.timer) return;
      const t = this.timer.action;
      this.timer.stop(), (this.timer = new sn({ action: t, duration: e }));
    }
    _createSlot(e) {
      this.gptComponent.create(e, this);
    }
    _loadHandler() {
      this.disableRefresh ||
        this.useSecure ||
        ((Qt[this.id] = pi.bind(this)),
        (Jt[this.id] = gi.bind(this)),
        (Xt[this.id] = fi.bind(this)));
    }
    _unloadHandler() {
      delete Qt[this.id], delete Jt[this.id], delete Xt[this.id];
    }
    loadResizeHandler(e) {
      this.useSecure || (Zt[this.id] = e);
    }
    unloadResizeHandler() {
      this.useSecure || delete Zt[this.id];
    }
    setRenderInfo(e) {
      this.renderInfo = { ...this.renderInfo, ...e };
    }
  }
  function bi(e) {
    return e instanceof mi;
  }
  class yi {
    nextHandler = null;
    handle(t) {
      const { positionConfig: n, context: i } = t,
        {
          duration: s,
          limit: o,
          requireUserAction: r,
          sameSizeRefresh: a,
          reserved: c,
        } = i.config.setting?.refresh || {},
        { disableRefresh: d } = i.config.setting?.refresh || {},
        l = {
          disableRefresh: d,
          duration: s,
          limit: o,
          requireUserAction: r,
          reserved: c,
          sameSizeRefresh: a,
        },
        h = i.config.setting?.useSecure ?? !1;
      if (wt(n)) {
        const t = i.i13nStore.currentI13n || {},
          s = "abp" === t.abk,
          {
            id: o,
            customSizeConfig: r,
            size: a,
            kvs: c,
            disableRefresh: d,
            ntsFallBack: u,
            stackGroup: g,
            stickyConfig: p,
            gptSetting: m,
            region: b,
          } = n,
          y = ((e, t) => {
            if (e && e.includes("${")) {
              const n = "yhp",
                i = t.region,
                s = t.site,
                o = De[s] || n;
              return e
                .replace(/\${REGION}/g, i.toLowerCase())
                .replace(/\${SITE}/g, o);
            }
            return e;
          })(n.path, t),
          E = n.refresh,
          _ =
            E?.requireUserAction ?? n.requireUserAction ?? l?.requireUserAction,
          I = E?.sameSizeRefresh ?? n.sameSizeRefresh ?? l?.sameSizeRefresh,
          v = { ...l, ...E, requireUserAction: _, sameSizeRefresh: I },
          { feature: A } = i.config,
          C = {
            enableAdInteractionBasedRefresh:
              A?.enableAdInteractionBasedRefresh || !1,
            enableAdStacking: A?.enableAdStacking || !1,
            enableLazyFetch: A?.enableLazyFetch || !1,
            enableSizeMapping: A?.enableSizeMapping || !1,
            enableYahooPrebid: A?.enableYahooPrebid || !1,
          },
          S = an(i, n),
          T = {
            adBlockPlusEnabled: s,
            containerMap: i.containerMap,
            customSizeConfig: r,
            disableRefresh: l.disableRefresh ? l.disableRefresh : d,
            features: C,
            gptComponent: i.gpt,
            gptSetting: m,
            i13n: t,
            id: o,
            kvs: c,
            lazyFetch: S,
            ntsFallBack: u,
            path: y,
            refreshConfig: v,
            region: b,
            size: a,
            stackGroup: g,
            stickyConfig: p,
            store: i.store,
            useSecure: h,
            ypbComponent: i.ypb,
          },
          { allowOnlyNonPersonalizedAds: R, allowOnlyLimitedAds: L } =
            i.config.setting?.consent || {},
          w = L || R;
        if (
          i.config.feature?.enableYahooPrebid &&
          (!i.config.feature?.enableAdStacking || w) &&
          n.stackGroup &&
          Mt(o, n.stackGroup)
        )
          return (
            document.getElementById(o)?.remove(),
            void e.addEventListener(f, () => {
              document.getElementById(o)?.remove();
            })
          );
        return new mi(T);
      }
      if (this.nextHandler) return this.nextHandler.handle(t);
    }
    setNext(e) {
      this.nextHandler = e;
    }
  }
  class Ei {
    cseg;
    features;
    id;
    mode;
    placement;
    region;
    store;
    taboolaComponent;
    targetType;
    lazyFetch;
    constructor(e) {
      const {
        cseg: t,
        features: n,
        id: i,
        mode: s,
        placement: o,
        region: r,
        store: a,
        taboolaComponent: c,
        targetType: d,
        lazyFetch: l,
      } = e;
      (this.features = n),
        (this.id = i),
        (this.mode = s),
        (this.placement = o),
        (this.region = r),
        (this.store = a),
        (this.taboolaComponent = c),
        (this.targetType = d),
        (this.lazyFetch = l),
        void 0 !== t && (this.cseg = t);
      const h = {
        container: this.id,
        mode: this.mode,
        placement: this.placement,
        region: r,
        target_type: this.targetType,
        ...(void 0 !== this.cseg ? { cseg: t } : {}),
      };
      if (n?.enableLazyFetch && this.lazyFetch) {
        const e = () => {
          this.taboolaComponent.create(h), this.taboolaComponent.render();
        };
        on[i] = { callback: e, offset: this.lazyFetch.offset };
      } else this.taboolaComponent.create(h);
      this.store.add(r, i, this);
    }
    destroy() {
      this.store.delete(this.region, this.id);
    }
    refresh() {}
    render() {
      this.taboolaComponent.render();
    }
  }
  class _i {
    nextHandler = null;
    handle(e) {
      const { positionConfig: t, context: n } = e,
        { feature: i } = n?.config,
        s = an(n, t),
        o = { enableLazyFetch: i?.enableLazyFetch || !1 },
        { cseg: r, mode: a, placement: c, targetType: d, region: l, id: h } = t,
        u = {
          cseg: r,
          features: o,
          id: h,
          lazyFetch: s,
          mode: a,
          placement: c,
          region: l,
          store: n.store,
          taboolaComponent: n.taboola,
          targetType: d,
        };
      return new Ei(u);
    }
    setNext() {}
  }
  function Ii(e) {
    const t = [],
      n = new $t(),
      i = new yi(),
      s = new _i();
    return (
      n.setNext(i),
      i.setNext(s),
      Object.entries(e).forEach(([e, i]) => {
        const s = n.handle({ context: this, positionConfig: i, positionId: e });
        s && t.push(s);
      }),
      t
    );
  }
  function vi(e) {
    e?.forEach((e) => {
      e.render();
    });
  }
  const Ai = "INITIAL_RENDER_FAILURE",
    Ci = "REFRESH_RENDER_FAILURE",
    Si = "REFRESH_RENDER",
    Ti = "INITIAL_RENDER",
    Ri = {
      ads_failure_total: 0,
      ads_fetch_total: 0,
      ads_refresh_total: 0,
      ads_slot_right_failure: 0,
      ads_slot_right_total: 0,
      ads_slot_top_failure: 0,
      ads_slot_top_total: 0,
    };
  function Li(e, t) {
    if (void 0 === t.kvs || void 0 === t.kvs.loc) return;
    const n = (function (e) {
      switch (e) {
        case "top_right":
          return "right";
        case "top_center":
          return "top";
        default:
          return;
      }
    })(t.kvs.loc);
    if (void 0 === n) return;
    let i;
    return (
      (i =
        !0 === e.isEmpty
          ? t.isInitiallyLoaded()
            ? Ai
            : Ci
          : t.isInitiallyLoaded()
            ? Ti
            : Si),
      (function (e, t) {
        const n = { ...Ri };
        switch (((n[`ads_slot_${t}_total`] = 1), e)) {
          case Ti:
            return (n.ads_fetch_total = 1), n;
          case Si:
            return (n.ads_refresh_total = 1), n;
          case Ai:
            return (
              (n[`ads_slot_${t}_failure`] = 1),
              (n.ads_failure_total = 1),
              (n.ads_fetch_total = 1),
              n
            );
          case Ci:
            return (
              (n[`ads_slot_${t}_failure`] = 1),
              (n.ads_failure_total = 1),
              (n.ads_refresh_total = 1),
              n
            );
        }
      })(i, n)
    );
  }
  const wi = {};
  function Pi(e) {
    const t = e.slot.getSlotElementId(),
      n = this.store.getAdComponentById(t);
    void 0 !== n &&
      bi(n) &&
      n &&
      n.isInitiallyLoaded() &&
      "index" === n.region &&
      (this.store.isBeaconFiredForSlot(t) ||
        this.logger.sendPositionPerfBeacon(t));
  }
  function ki() {
    const t = e.performance?.now;
    t &&
      (this.gpt.addEventListener(K.slotRequested, (t) => {
        const n = t.slot.getSlotElementId();
        this.logger.updateDatastore(n, {
          [lt]: Math.round(e.performance.now()),
        });
      }),
      this.gpt.addEventListener(K.slotRenderEnded, (t) => {
        const n = t.slot.getSlotElementId();
        this.logger.updateDatastore(n, {
          [ht]: Math.round(e.performance.now()),
        });
      }),
      this.gpt.addEventListener(K.slotOnload, (t) => {
        const n = t.slot.getSlotElementId();
        this.logger.updateDatastore(n, {
          [ut]: Math.round(e.performance.now()),
        }),
          Pi.call(this, t);
      }));
  }
  function Di(e, t) {
    const n = Math.round(window.performance.now());
    (wi[e] = n),
      "TABOOLA_RENDER_TIME" === e &&
        wi.TABOOLA_FETCH_START_TIME &&
        wi.TABOOLA_READY &&
        ((wi.TABOOLA_RENDER_TIME = n),
        this.logger.sendPerfBeacon(wi, { sec: t }));
  }
  function Bi() {
    this.gpt.addEventListener(K.slotRenderEnded, (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.store.getAdComponentById(t);
      if (void 0 === n || !bi(n)) return;
      const i = (function (e, t) {
        const { id: n } = t,
          i = t.getRenderCount(),
          s = i > 1 ? "true" : "false",
          o = t.kvs?.loc ? t.kvs.loc : "undefined",
          r = e.isEmpty ? "failed" : "succeeded";
        return {
          id: n,
          isRefresh: s,
          loc: Array.isArray(o) ? o[0] : o,
          renderCount: i,
          status: r,
        };
      })(e, n);
      this.logger.sendDebugBeacon(i);
    });
  }
  function Oi() {
    let e = !0;
    const t = (t) => {
      this.taboola.addEventListener(t, (n) => {
        const i = n.detail,
          { container: s, mode: o, placement: r, reason: a } = i,
          c = this.store.getAdComponentById(s?.id);
        if (
          (void 0 === c ||
            !(function (e) {
              return e instanceof Ei;
            })(c)) &&
          t !== Q.nocontent
        )
          return;
        const d = {
          container: s?.id,
          mode: o,
          outcm: "taboolaDebug",
          placement: r,
          type: t,
          url: window.location.href,
        };
        a && (d.reason = a),
          e && (Di.call(this, "TABOOLA_RENDER_TIME", r), (e = !1)),
          this.logger.sendDebugBeacon(d);
      });
    };
    t(Q.render), t(Q.nocontent);
  }
  function Ni(e, t) {
    e.logger.sendDebugBeacon({ id: t, type: "ID_MISMATCH" });
  }
  function ji(e) {
    if ("object" != typeof e) {
      const t = "string" == typeof e ? e : g;
      return void vi(this.store.getRegionAdComponents(t));
    }
    const t = e;
    Object.entries(t).forEach(([e, t]) => {
      if (!wt(t)) return;
      if (t.region === g) return;
      const n = document?.getElementById(e);
      null === n && Ni(this, e);
    }),
      this.config.feature?.enableYahooPrebid && this.ypb.updateStackGroupMap(t);
    vi(Ii.call(this, t));
  }
  function Mi(e, t) {
    if (e) {
      const n = e.benjiAd?.slot,
        i =
          t && n.id
            ? (function (e) {
                return e + "-" + new Date().getUTCMilliseconds() + "-benji-ad";
              })(n.id)
            : n.id,
        s = { id: i, path: n.path, region: n.region, size: n.size };
      return t && t.elem && (t.elem.id = i), s;
    }
  }
  function Ui(t) {
    const n = {};
    t && ((n[t.id] = t), ji.call(e.benji, n));
  }
  const zi = {
    [q.caasArticle]: function (e) {
      const t = Mi(e && e.meta && e.meta.darlaConfig);
      t && Ui(t);
    },
  };
  const Fi = {
    [q.darlaComplete]: function (e) {
      const t = Mi(e && e.meta && e.meta.darlaConfig, e);
      t && Ui(t);
    },
  };
  function xi() {
    const t = zi[q.caasArticle],
      n = Fi[q.darlaComplete];
    e.wafer.ready(() => {
      e.wafer.on(q.caasArticle, t), e.wafer.on(q.darlaComplete, n);
    });
  }
  function Gi(e, t) {
    const n = (function (e) {
      const t = void 0 !== e && _e.hasOwnProperty(e) ? e : yt,
        n = _e[t];
      let i = !1;
      return (
        t in he ? (i = !0) : t !== ue.finance && (i = St($)),
        i ? me.replace(fe, n) : be.replace(fe, n)
      );
    })(t);
    Yi({ async: !0, id: z, tagSrc: n, WIN: e });
  }
  function Yi({
    tagSrc: e,
    id: t,
    WIN: n,
    async: i = !1,
    onloadCb: s,
    onerrorCb: o,
  }) {
    const r = n.document.createElement(U);
    i && (r.async = !0),
      s && "function" == typeof s && (r.onload = s),
      o && "function" == typeof o && (r.onerror = o),
      (r.type = Y),
      (r.src = e),
      (r.id = t),
      n.document.head.append(r);
  }
  function $i(e, t, n) {
    const i = O.replace(A, B);
    Yi({ id: x, onerrorCb: n, onloadCb: t, tagSrc: i, WIN: e });
  }
  function Vi(e, t) {
    let n = t;
    return (
      "object" == typeof e &&
        e.target instanceof HTMLScriptElement &&
        (n = e.target.src || t),
      n || "Unknown"
    );
  }
  const Hi = (e, t, n) => {
    const i = e.document.createElement("meta");
    (i.name = t), (i.content = n), e.document?.head.append(i);
  };
  const qi = (e, t) => {
    try {
      return e?.localStorage?.getItem && Object.values(T).includes(t)
        ? e.localStorage.getItem(t)
        : null;
    } catch (e) {
      return null;
    }
  };
  function Wi(e, t) {
    e.config.i13n?.axids &&
      e.i13nStore.updateCurrent({ axids: e.config.i13n?.axids });
    let n = e.getAxid(it.GAM);
    const i = qi(t, T.ATS_DIRECT),
      s = Zi(t, b),
      { allowOnlyNonPersonalizedAds: o, allowOnlyLimitedAds: r } =
        e.config.setting?.consent || {},
      a = !o && !r;
    (o || r) && (n = "");
    const { age: c = 0, gender: d = "" } =
        (a && e.config.setting?.userInfo) || {},
      l = (function (e) {
        const t = {},
          n = Zi(e, y);
        n && (t.ncid = n);
        const i = Zi(e, E);
        if (i) {
          t.fr = i;
          const n = Zi(e, I);
          n && (t.frtype = n);
        }
        return t;
      })(t),
      h = Ki(e.gpt, {
        age: c,
        atsd: zt(i),
        axid: n,
        gender: d,
        i13n: e.config.i13n,
        queryI13n: l,
        testid: s,
      });
    if (e.taboola) {
      const t = e.config.i13n?.pt;
      e.taboola.updateTaboolaPageConfig(t, v);
    }
    e.i13nStore.updateCurrent(h);
  }
  function Ki(
    e,
    { age: t, atsd: n, axid: i, gender: s, i13n: o, queryI13n: r, testid: a },
  ) {
    const c = {};
    Qi(Le, o, c),
      Qi(Be, o, c),
      i && (c.axid = Ji(i)),
      n && (c.atsd = Ji(n)),
      a && (c.testid = Ji(a)),
      t &&
        (c.bka = (function (e) {
          const t = [18, 21, 25, 35, 45, 50, 55, 65, 101].findIndex(
            (t) => e < t,
          );
          return -1 === t ? m : `${t}`;
        })(t)),
      s && "f" === s && (c.bkg = "1"),
      s && "m" === s && (c.bkg = "2"),
      o?.bka && (c.bka = o?.bka),
      o?.bkg && (c.bkg = o?.bkg),
      r && Object.assign(c, r);
    const d = Tt(c, we);
    if (d && Object.keys(d).length) {
      const t = (function (e) {
        if ("" === e || null == e) return;
        if (Array.isArray(e)) {
          if (0 === e.length) return;
          e = e.join("");
        }
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        let n = "",
          i = 0,
          s = 0;
        for (let r = 0; r < e.length; )
          r +=
            ("string" == typeof (o = e[r]) && (o = o.charCodeAt(0)),
            i < 0 ? (s |= o >> -i) : (s = (o << i) & 248),
            i > 3 ? ((i -= 8), 1) : (i < 4 && ((n += t[s >> 3]), (i += 5)), 0));
        var o;
        return n + (i < 0 ? t[s >> 3] : "");
      })(d.axid);
      e.setTargeting({ ...d, ...(t ? { axid: t } : {}) });
    }
    const l = {};
    return Qi((o && Object.keys(o)) || [], o, l), { ...l, ...d };
  }
  function Qi(e, t, n) {
    t &&
      "object" == typeof t &&
      !Array.isArray(t) &&
      0 !== Object.keys(t).length &&
      e.forEach((e) => {
        if (t[e]) {
          let i = e,
            s = Ji(t[e]);
          Ce.hasOwnProperty(e) && (i = Ce[e]),
            "site" === e &&
              t.partner &&
              Se.includes(t.partner) &&
              "fp" === s &&
              ((n.originalSiteValue = s), (s = `${s}_${t.partner}`)),
            Oe.includes(e) &&
              "string" == typeof s &&
              (s = encodeURIComponent(s)),
            (n[i] = s),
            Re.hasOwnProperty(e) && (n[i] = Xi(n[i]));
        }
      });
  }
  function Ji(e) {
    return "number" == typeof e ? `${e}` : e;
  }
  function Xi(e) {
    return "string" == typeof e ? e.split(/[;,]+/) : e;
  }
  function Zi(e, t) {
    if (!Te.includes(t)) return null;
    return new URLSearchParams(e.location?.search).get(t);
  }
  const es = (e) => {
    const t = document.getElementById(e);
    t?.style.setProperty("display", "none");
    const n = t?.parentElement && Ct(t.parentElement);
    n?.style?.setProperty("display", "none");
  };
  const ts = {
    [K.slotRenderEnded]: function (e) {
      if (e && e.isEmpty) {
        const t = e?.slot?.getSlotElementId(),
          n = this.store.getAdComponentById(t);
        if (n && bi(n)) {
          if (
            (this.nts.activated && n.ntsFallBack?.position) ||
            (this.config?.feature?.enableAdStacking && n.stackGroup)
          )
            return;
          n.destroy();
        }
        es(t);
      }
    },
  };
  function ns() {
    const e = ts[K.slotRenderEnded];
    this.gpt.addEventListener(K.slotRenderEnded, e.bind(this));
  }
  const is = (e, t) => {
      e.dispatchEvent(
        new CustomEvent(q.adsFinishParse, { detail: { positions: t } }),
      );
    },
    ss = { BTN: "BTNA", "BTN-1": "BTNB", "BTN-2": "BTNC", "BTN-3": "BTND" },
    os = {
      BTN: {},
      "BTN-1": {},
      "BTN-2": {},
      "BTN-3": {},
      BTNA: {},
      BTNB: {},
      BTNC: {},
      BTND: {},
      FB2A: {},
      FB2B: {},
      FB2C: {},
      FB2D: {},
    };
  let rs = 0,
    as = 0;
  function cs(t) {
    if (t) {
      let n = t?.slot?.getSlotElementId();
      (n = n.replace(/default|sda-|-sizer/gi, "")),
        (n = ss[n] || n),
        os[n] &&
          (rs++,
          t.isEmpty ? t.isEmpty && (os[n].validAd = !1) : (os[n].validAd = !0)),
        rs === as && (is(e, os), (rs = 0));
    }
  }
  function ds() {
    Object.keys(this.config.positions).forEach((e) => {
      (e.includes("BTN") || e.includes("FB2")) && as++;
    }),
      this.gpt.addEventListener(K.slotRenderEnded, (e) => {
        cs.call(this, e);
      });
  }
  class ls {
    constructor() {
      return (this.supplyTelemetrySent = []), this;
    }
    add(e, t, n) {
      return void 0 === this[e]
        ? ((this[e] = { [t]: n }), n)
        : void 0 === this[e][t]
          ? ((this[e][t] = n), n)
          : void 0;
    }
    delete(e, t) {
      this[e] && this[e][t] && delete this[e][t];
    }
    getAdComponent(e, t) {
      if (void 0 !== this[e]) return this[e][t];
    }
    getAdComponentById(e) {
      const t = Object.entries(this);
      for (let n = 0; n < t.length; n++) {
        const [, i] = t[n];
        if (void 0 !== i[e]) return i[e];
      }
    }
    getAdComponentByLoc(e) {
      const t = Object.entries(this);
      for (let n = 0; n < t.length; n++) {
        const [, i] = t[n],
          s = Object.values(i).find((t) => t?.kvs?.loc === e);
        if (s) return s;
      }
    }
    getRegionAdComponents(e) {
      return "object" == typeof this[e] ? Object.values(this[e]) : [];
    }
    getSameSideStackAdComponents(e, t) {
      const n = [],
        i = this.getStackAdComponents(t),
        s = Xe[t];
      if (void 0 === s) return n;
      const o = e.includes(s[0]) ? s[0] : s[1];
      return (
        i.forEach((e) => {
          e.id.includes(o) && n.push(e);
        }),
        n
      );
    }
    getStackAdComponents(e) {
      const t = [],
        n = Object.entries(this);
      for (let i = 0; i < n.length; i++) {
        const [, s] = n[i];
        Object.values(s).forEach((n) => {
          bi(n) && n?.stackGroup === e && t.push(n);
        });
      }
      return t;
    }
    isBeaconFiredForSlot(e) {
      return Array.isArray(this.supplyTelemetrySent)
        ? !!this.supplyTelemetrySent.includes(e) ||
            (this.supplyTelemetrySent.push(e), !1)
        : ((this.supplyTelemetrySent = [e]), !1);
    }
  }
  class hs {
    currentI13n = {};
    regions = {};
    constructor() {
      return this;
    }
    updateCurrent(e) {
      this.currentI13n = { ...this.currentI13n, ...e };
      const t = e.pstaid ?? e.lpstaid;
      t && this.putRegion(t, e);
    }
    clearKeysFromCurrent(e) {
      e.forEach((e) => {
        this.currentI13n[e] && delete this.currentI13n[e];
      });
    }
    putRegion(e, t) {
      this.regions[e]
        ? (this.regions[e] = { ...this.regions[e], ...t })
        : (this.regions[e] = t);
    }
    getRegion(e) {
      return this.regions[e];
    }
    getCurrent() {
      return this.currentI13n;
    }
    getKeyDifferences(e) {
      return Object.keys(e).reduce((t, n) => {
        let i = e[n],
          s = this.currentI13n[n];
        return (
          Re.hasOwnProperty(n) &&
            ((i = Xi(i).join(",")), (s = Array.isArray(s) ? s.join(",") : s)),
          this.currentI13n.hasOwnProperty(n)
            ? i !== s && (t[n] = e[n])
            : (t[n] = e[n]),
          t
        );
      }, {});
    }
    createRSObject(e = this.currentI13n, t) {
      const n = {};
      for (const i of de)
        "axid" === i && t
          ? (n[i] = t)
          : void 0 !== e[i] && "" !== e[i] && (n[i] = e[i]);
      return n;
    }
    createPublisherBlob(e = this.currentI13n, t) {
      const n = this.createRSObject(e, t);
      return [
        Object.entries(n)
          .map((e) => e.join(":"))
          .join(";"),
        "",
        e.spaceid,
        "",
        "",
        "",
        e.bucket,
        "",
      ].join("|");
    }
  }
  const us = "liveintent.com";
  function gs(e) {
    return (
      e.source === us ||
      (e.uids && e.uids.some((e) => e.ext && e.ext.provider === us))
    );
  }
  function ps(e) {
    return e.userIdAsEids && e.userIdAsEids.some(gs);
  }
  function fs(e) {
    return e.userSync?.userIds?.find((e) => e.name === ee.LIVEINTENT_ID);
  }
  function ms({
    areBidsEnrichedByLiveIntent: e,
    liveIntentEnabled: t,
    instrumentation: n,
  }) {
    const { LI_OFF: i, LI_ON_ENRICHED: s, LI_ON_NOT_ENRICHED: o } = n;
    return t ? (e ? s : o) : i;
  }
  var bs = {
    applyLiveIntentSampling: function (t) {
      const n = St(98);
      return (
        void 0 === e.liModuleEnabled &&
          ((e.liModuleEnabled = n), (e.liTreatmentRate = 100 / 98)),
        e.liModuleEnabled ? t : t.filter((e) => e.name !== ee.LIVEINTENT_ID)
      );
    },
    areBidsEnrichedByLiveIntent: !1,
    getLiveIntentInstrumentationKeys: function (e) {
      const t = fs(e);
      if (!t) return ee;
      let n = ee;
      const { overrides: i } = t;
      return i && (n = { ...ee, ...i }), n;
    },
    getLiveIntentTargeting: ms,
    hasLiveIntentAdUnit: function (e) {
      return e.bids && e.bids.some(ps);
    },
    hasLiveIntentBid: ps,
    instrumentation: ee,
    isLiveIntentEnabled: function (e) {
      return !!fs(e);
    },
    isLiveIntentSource: gs,
    liveIntentEnabled: !1,
    liveIntentInOriginalConfig: !1,
    logCachedEidsNotSent: function (t) {
      !t &&
        (function () {
          try {
            const t = e.localStorage?.getItem?.(ee.LOCAL_STORAGE_KEY);
            return !!t;
          } catch (e) {
            return !1;
          }
        })() &&
        qn({ logType: ln, message: En, source: `${un}:${gn}` });
    },
    logIfLiveIntentRequestFinishedInTime: function (e) {
      const t = Ut(ee.EIDS_URL),
        n = Ut("https://pbs.yahoo.com/openrtb2/auction");
      if (!t || !n) return;
      const i = t.responseEnd <= n.startTime ? Cn : Sn;
      e.sendDebugBeacon({
        message: `timeDifference:${Math.round(Math.abs(t.responseEnd - n.startTime))}ms`,
        type: i,
      });
    },
    logLiModuleLoadStatus: function (t) {
      const n = e.liQ_instances?.length > 0 ? vn : An;
      t.sendDebugBeacon({ logType: hn, message: n, source: `${un}:${gn}` });
    },
    sendLiveIntentBeacon: function ({
      instrumentation: e,
      areBidsEnrichedByLiveIntent: t,
      liveIntentEnabled: n,
      logger: i,
    }) {
      i.sendDebugBeacon({
        type: "YAHOO_PREBID_LIVEINTENT_TARGETING",
        [e.HB_UI_MOD]: ms({
          areBidsEnrichedByLiveIntent: t,
          instrumentation: e,
          liveIntentEnabled: n,
        }),
      });
    },
  };
  const ys = [
    "auctionEnd",
    "auctionInit",
    "beforeBidderHttp",
    "bidAccepted",
    "bidAdjustment",
    "bidderDone",
    "bidderError",
    "bidRejected",
    "bidRequested",
    "bidResponse",
    "bidTimeout",
    "bidWon",
  ];
  var Es = {
    addNewAuctionToTracker: function (e, t) {
      const n = {
        auctionId: e,
        events: {
          auctionEnd: !1,
          auctionInit: !1,
          beforeBidderHttp: !1,
          bidAccepted: !1,
          bidAdjustment: !1,
          bidderDone: !1,
          bidderError: !1,
          bidRejected: !1,
          bidRequested: !1,
          bidResponse: !1,
          bidTimeout: !1,
          bidWon: !1,
        },
      };
      t[e] = n;
    },
    auctionEventsTrackerList: {},
    completedAuctions: 0,
    logAuctionEvents: function (e) {
      const { events: t, auctionId: n } = e,
        i = [];
      for (const e in t) t[e] || i.push(e);
      i.length &&
        ((e, t, n) => {
          qn({
            logType: hn,
            message: n,
            messageDetails: `auctionId:${e}|events:${t.join(",")}`,
            source: `${un}:AUCTION`,
          });
        })(n, i, pn);
    },
    startAuctionEventsTracker: function (e, t) {
      ys.forEach((n) => {
        e.onEvent(n, (e) => {
          const i = t[e.auctionId];
          i && (i.events[n] = !0);
        });
      });
    },
  };
  const _s = "fast",
    Is = "normal";
  function vs(e, t) {
    const n =
      e.config?.setConfig?.userSync?.auctionDelay ??
      t.setConfig.userSync?.auctionDelay ??
      300;
    return {
      setConfig: {
        bidderTimeout:
          e.config?.setConfig?.bidderTimeout ??
          t.setConfig.bidderTimeout ??
          2e3,
        s2sConfig: {
          timeout:
            e.config?.setConfig?.s2sConfig?.timeout ??
            t.setConfig.s2sConfig?.timeout ??
            2e3,
        },
        userSync: { auctionDelay: n },
      },
    };
  }
  const As = {
    _batchPipeline(e, t) {
      if (!e.length || !this.requestBids || !this.pbjs) return;
      t && this.pbjs.mergeConfig(t.setConfig);
      const n = Ft();
      this.requestBids({ auctionId: n, auctionItems: e });
    },
    _process(e) {
      const t = { [_s]: [], [Is]: [] };
      e.forEach((e) => {
        const { stackGroup: n, loc: i } = e,
          { stackGroups: s, locs: o } = this.batchRule[_s]?.identifier;
        (n && s && s.includes(n)) || (i && o && o.includes(i))
          ? t[_s].push(e)
          : t[Is].push(e);
      }),
        Object.entries(t).forEach(([e, n]) => {
          if (!n.length) return;
          const i =
              this.features.enablePrebidBatchingDelay &&
              !!t[_s].length &&
              !!this.batchRule[e].delay,
            s = this.features.enablePrebidBatchingConfigs
              ? this.batchConfigMap[e]
              : void 0;
          setTimeout(
            () => {
              this._batchPipeline(n, s);
            },
            i ? this.batchRule[e].delay : 0,
          );
        });
    },
    add(e) {
      this.auctionQueue.push(e),
        this.debounceTimer && clearTimeout(this.debounceTimer),
        (this.debounceTimer = setTimeout(() => {
          const e = Ft();
          this.features.enablePrebidBatching
            ? this._process(this.auctionQueue)
            : null !== this.requestBids &&
              this.requestBids({
                auctionId: e,
                auctionItems: [...this.auctionQueue],
              }),
            (this.auctionQueue = []),
            (this.debounceTimer = null);
        }, 20));
    },
    auctionQueue: [],
    batchConfigMap: {},
    batchRule: {
      [_s]: {
        config: {
          setConfig: {
            bidderTimeout: 500,
            s2sConfig: { timeout: 500 },
            userSync: { auctionDelay: 0 },
          },
        },
        identifier: { locs: ["top_center"] },
      },
      [Is]: { delay: 200 },
    },
    debounceTimer: null,
    features: {},
    pbjs: null,
    requestBids: null,
    start(e) {
      const { pbjs: t, requestBids: n, prebidConfig: i, features: s } = e;
      (this.requestBids = n),
        (this.pbjs = t),
        (this.features = s || {}),
        this.features.enablePrebidBatching &&
          ((this.batchConfigMap[_s] = vs(this.batchRule[_s], i)),
          (this.batchConfigMap[Is] = vs(this.batchRule[Is], i)));
    },
  };
  function Cs(e) {
    e.onEvent(Z, (e) => {
      const t = (function (e) {
        const { adUnitCode: t, width: n, height: i } = e;
        return { data: { height: i, id: t, size: [n, i], width: n }, name: je };
      })(e);
      Gt[je] &&
        Gt[je].forEach((e) => {
          e(t);
        });
    });
  }
  const Ss = "pbjs",
    Ts = "https://s.yimg.com/eh/prebid-config",
    Rs = "Network error",
    Ls = "fulfilled",
    ws = "rejected";
  var Ps;
  !(function (e) {
    (e.READY = "READY"),
      (e.LOADING = "LOADING"),
      (e.ERROR = "ERROR"),
      (e.INIT = "INIT"),
      (e.DISABLED = "DISABLED");
  })(Ps || (Ps = {}));
  class ks {
    _pbjs;
    gptComponent;
    i13nStore;
    inBannerVideoAdEnabled;
    initialConfig;
    status;
    preSetupRequestsQueue;
    stackGroupAuctionState;
    auctionItemManager;
    stackGroupMap;
    logger;
    userModuleStatus;
    liveIntentUtils = bs;
    auctionEventsTracking = Es;
    constructor() {
      return (
        (this.status = Ps.INIT),
        (this.preSetupRequestsQueue = []),
        (this.initialConfig = {
          prebid: {
            adUnits: {},
            bidders: {},
            filters: {},
            regionCountries: {},
            setConfig: {},
          },
        }),
        (this._pbjs = {}),
        (this._pbjs.que = []),
        void 0 !== e &&
          (e.pbjs ? (this._pbjs = e.pbjs) : (e.pbjs = this._pbjs)),
        (this.stackGroupMap = {}),
        (this.stackGroupAuctionState = {}),
        (this.auctionItemManager = As),
        this._pbjs.que.push(() => {
          e.benji.logger.updateDatastore({
            [rt]: Math.round(e.performance.now()),
          });
        }),
        (this.userModuleStatus = {}),
        this
      );
    }
    start(t) {
      const { consent: n, gptComponent: i, benjiConfig: s, logger: o } = t;
      (this.gptComponent = i), (this.i13nStore = t.i13nStore);
      const {
        feature: r,
        i13n: a,
        positions: c,
        prebidSetting: { pbjs: d, pbConfig: l = {} },
      } = s;
      (this.inBannerVideoAdEnabled = a?.feature?.includes(
        "prebid-inBannerVideo",
      )),
        (this.logger = o),
        (this.status = Ps.LOADING);
      const { allowOnlyLimitedAds: h, allowOnlyNonPersonalizedAds: u } = n;
      if (h || u) return void (this.status = Ps.DISABLED);
      this._sendSessionStartBeacon(), (this.stackGroupMap = Ds(c));
      const g = !r.disableAssertiveYield;
      Promise.allSettled([
        this._fetchAYClientJS(e, g),
        this._fetchPBJS(e, d?.version),
        this._fetchConfig(a, l),
        this._fetchBPConfig(a),
      ])
        .then(([, e, t, n]) => {
          if (e.status === Ls && t.status === Ls && n.status === Ls) {
            const e = t.value,
              {
                prebid: { setConfig: i },
              } = e;
            i.floors &&
              (i.floors.additionalSchemaFields = {
                gamPath: (e, t) => {
                  try {
                    const t = e?.ortb2Imp?.ext?.prebid?.storedrequest?.id;
                    return t || null;
                  } catch (e) {
                    return null;
                  }
                },
              }),
              (this.initialConfig = e);
            const s = this._filterUserIdModulesFromConfig(i);
            this.auctionItemManager.start({
              features: {
                enablePrebidBatching: a?.feature?.includes(
                  "enablePrebidBatching",
                ),
                enablePrebidBatchingConfigs: a?.feature?.includes(
                  "enablePrebidBatchingConfigs",
                ),
                enablePrebidBatchingDelay: a?.feature?.includes(
                  "enablePrebidBatchingDelay",
                ),
              },
              pbjs: this._pbjs,
              prebidConfig: e.prebid,
              requestBids: this._requestBids.bind(this),
            }),
              (this.liveIntentUtils.liveIntentInOriginalConfig =
                this.liveIntentUtils.isLiveIntentEnabled(s)),
              this.liveIntentUtils.liveIntentInOriginalConfig &&
                (this.logger.sendDebugBeacon({
                  logType: hn,
                  message: Tn,
                  messageDetails: gn,
                  source: Ss,
                }),
                (s.userSync.userIds =
                  this.liveIntentUtils.applyLiveIntentSampling(
                    s.userSync.userIds,
                  ))),
              (this.liveIntentUtils.liveIntentEnabled =
                this.liveIntentUtils.isLiveIntentEnabled(s)),
              (this.liveIntentUtils.instrumentation =
                this.liveIntentUtils.getLiveIntentInstrumentationKeys(s));
            const o = n?.value;
            return (
              o &&
                (s.yahooRtdProvider = Object.assign({}, s.yahooRtdProvider, o)),
              this._setConfig(s),
              this._startObservables(),
              this._enableAnalytics(),
              this._enableSecureSignals(),
              void (this.status = Ps.READY)
            );
          }
          throw new Error(In);
        })
        .catch(() => {
          this.status = Ps.ERROR;
        })
        .finally(() => {
          this.preSetupRequestsQueue.forEach((e) => {
            e();
          }),
            (this.preSetupRequestsQueue = []);
        }),
        Cs(this);
    }
    startPrebid(e, t) {
      switch (this.status) {
        case Ps.INIT:
        case Ps.LOADING:
          this.preSetupRequestsQueue.push(() => {
            this.startPrebid(e, t);
          });
          break;
        case Ps.ERROR:
        case Ps.DISABLED:
          const { adComponentId: n, stackGroup: i } = e;
          if (i && Mt(n, i)) return;
          t();
          break;
        case Ps.READY:
          try {
            const n = this._getAdUnitFromAdInfo(e);
            if (
              !(function (e) {
                return (
                  !!e && e.mediaTypes && Object.keys(e.mediaTypes).length > 0
                );
              })(n)
            ) {
              const { adComponentId: n, stackGroup: i } = e;
              if (i && Mt(n, i)) return;
              return void t();
            }
            this._splitAdUnitByMediaTypes(n).forEach((e) => {
              this.addAdUnit(e);
            });
            const { adComponentId: i, stackGroup: s, loc: o } = e,
              r = { adCode: i, callback: t, loc: o, stackGroup: s };
            this.auctionItemManager.add(r);
          } catch (e) {
            (this.status = Ps.ERROR), t();
          }
      }
    }
    onEvent(e, t) {
      this._pbjs.que.push(() => {
        this._pbjs.onEvent(e, t);
      });
    }
    updateStackGroupMap(e) {
      this.stackGroupMap = { ...this.stackGroupMap, ...Ds(e) };
    }
    _enableAnalytics() {
      this._pbjs.que.push(() => {
        this._pbjs.enableAnalytics({ provider: "yahooAnalytics" });
      });
    }
    _enableSecureSignals() {
      const e = new Promise((e) => this._pbjs.que.push(e)),
        t = new Promise((e) => this.gptComponent.addCallbackToCmdQueue(e));
      return Promise.all([e, t]).then(() => {
        this._pbjs.registerSignalSources();
      });
    }
    _filterUserIdModulesFromConfig(e) {
      const t = e.userSync?.userIds;
      if (!t) return e;
      const n = t.filter((e) => {
        const t = e.name,
          n = this.isUserCountryEligible(t, "userIdModules");
        n ||
          this.logger.sendDebugBeacon({
            logType: hn,
            message: Dn,
            messageDetails: `${t}`,
            source: Ss,
          });
        const i = this._isItemToBeDisabledUnderBucket(t, "userIdModules");
        this.userModuleStatus[t] = !i;
        return n && !i;
      });
      return { ...e, userSync: { ...e.userSync, userIds: n } };
    }
    _preAuction(e, t) {
      return t?.split("/").slice(-1)[0] || "";
    }
    _setConfig(t) {
      const {
          cobrand: n,
          site: i,
          region: s,
          originalSiteValue: o,
        } = this.i13nStore.getCurrent(),
        r = this._getPrebidConfigPartnerKey(n);
      this._pbjs.que.push(() => {
        const { prebidVersion: n, yahooPrebidVersion: a } = e.benji;
        this.logger.updateDatastore({ pl2: n, pl3: a }),
          this._pbjs.setConfig({
            ...t,
            gptPreAuction: { customPreAuction: this._preAuction },
            realTimeData: {
              ...t.realTimeData,
              dataProviders: [
                ...(t.realTimeData?.dataProviders || []),
                {
                  name: "yahooRTDModule",
                  params: { cobrand: r, region: s, site: o || i },
                  waitForIt: !0,
                },
              ],
            },
          }),
          this._setBidderSettings();
      });
    }
    _setBidderSettings() {
      if (!this.initialConfig?.prebid?.bidderSettings) return;
      const e = this.initialConfig.prebid.bidderSettings;
      this._pbjs.bidderSettings || (this._pbjs.bidderSettings = {});
      for (const t of Object.keys(e)) this._pbjs.bidderSettings[t] = e[t];
    }
    _decideWinningAndLosingStackGroupSides(e, t) {
      let n = [];
      const i = [],
        s = [],
        o = {};
      return (
        new Set(e.map((e) => e.stackGroup).filter((e) => void 0 !== e)).forEach(
          (e) => {
            if (!this.stackGroupMap[e]) return;
            const [i, s] = this.stackGroupMap[e],
              o = Bs(i, t) < Bs(s, t) ? i : s;
            n = [...n, ...o];
          },
        ),
        e.forEach((e) => {
          n.includes(e.adCode)
            ? s.push(e)
            : (i.push(e), (o[e.adCode] = t[e.adCode]));
        }),
        [i, o, s]
      );
    }
    _completePostAuctionSteps(e, t) {
      this._pbjs.que.push(() => {
        this._updateAdServerTargeting(t),
          this._pbjs.setTargetingForGPTAsync(Object.keys(t)),
          e.forEach((e) => {
            e.callback();
          }),
          this.inBannerVideoAdEnabled &&
            ((e) => {
              Object.keys(e).forEach((t) => {
                e[t].bids.forEach((e) => {
                  const t = si(e);
                  qn({
                    logType: hn,
                    message: "BID_WON",
                    messageDetails: JSON.stringify({ ...t }),
                    source: On,
                  });
                });
              });
            })(t);
      });
    }
    _logLiveIntentRequestTiming() {
      !this.liveIntentUtils.liveIntentEnabled ||
        this.auctionEventsTracking.completedAuctions > 1 ||
        (this.liveIntentUtils.logLiModuleLoadStatus(this.logger),
        this.liveIntentUtils.logIfLiveIntentRequestFinishedInTime(this.logger));
    }
    _requestBids(t) {
      const { auctionId: n, auctionItems: i } = t,
        s = i.map((e) => e.adCode);
      this._pbjs.que.push(() => {
        this.auctionEventsTracking.addNewAuctionToTracker(
          n,
          this.auctionEventsTracking.auctionEventsTrackerList,
        ),
          s.forEach((t) => {
            e.benji.logger.updateDatastore(t, {
              [at]: Math.round(e.performance.now()),
            });
          }),
          this._pbjs.requestBids({
            adUnitCodes: s,
            auctionId: n,
            bidsBackHandler: (e = {}) => {
              this.auctionEventsTracking.completedAuctions++,
                0 === Object.keys(e).length &&
                  qn({
                    logType: hn,
                    message: Rn,
                    messageDetails: `auctionId: ${n}`,
                    source: Ss,
                  }),
                this._logLiveIntentRequestTiming(),
                this.gptComponent.addCallbackToCmdQueue(() => {
                  const t = [],
                    s = {},
                    o = [],
                    r = {};
                  i.forEach((n) => {
                    const { adCode: i, stackGroup: a } = n;
                    a ? (o.push(n), (r[i] = e[i])) : (t.push(n), (s[i] = e[i]));
                  }),
                    this._completePostAuctionSteps(t, s);
                  const [a, c, d] = this._decideWinningAndLosingStackGroupSides(
                      o,
                      r,
                    ),
                    l = (function (e, t) {
                      const n = { data: {}, name: Ge },
                        i = {
                          losingSide: { adIds: [] },
                          winningSide: { adIds: [] },
                        };
                      return (
                        [...e, ...t].forEach((e) => {
                          const { stackGroup: t } = e;
                          void 0 !== t &&
                            void 0 === n.data[t] &&
                            (n.data[t] = i);
                        }),
                        e.forEach((e) => {
                          const { stackGroup: t, adCode: i } = e;
                          void 0 !== t && n.data[t].winningSide.adIds.push(i);
                        }),
                        t.forEach((e) => {
                          const { stackGroup: t, adCode: i } = e;
                          void 0 !== t && n.data[t].losingSide.adIds.push(i);
                        }),
                        n
                      );
                    })(a, d);
                  Gt[Ge] &&
                    Gt[Ge].forEach((e) => {
                      e(l);
                    });
                  const h = l.data;
                  if (
                    (Object.entries(h).forEach(([e, t]) => {
                      this.stackGroupAuctionState[e] = t;
                    }),
                    this._completePostAuctionSteps(a, c),
                    this._sendUserSyncModuleStatusToGAM(),
                    this.auctionEventsTracking.auctionEventsTrackerList.hasOwnProperty(
                      n,
                    ))
                  ) {
                    const e =
                      this.auctionEventsTracking.auctionEventsTrackerList[n];
                    this.auctionEventsTracking.logAuctionEvents(e);
                  }
                });
            },
          });
      });
    }
    _updateAdServerTargeting(e) {
      Object.keys(e).forEach((t) => {
        const n = e[t];
        n?.bids?.forEach((e) => {
          const t = e?.adserverTargeting?.hb_pb;
          if (t) {
            const n = parseFloat(t);
            !isNaN(n) && n > 100
              ? (e.adserverTargeting.hb_pb100 = !0)
              : (e.adserverTargeting.hb_pb100 = !1);
          }
          "380x100" === e?.adserverTargeting?.hb_size &&
            (e.adserverTargeting.hb_responsive = 1),
            Object.keys(e.adserverTargeting).forEach((t) => {
              Ze.includes(t) || delete e.adserverTargeting[t];
            });
        });
      });
    }
    _getPrebidConfigPartnerKey(e) {
      return (e && ce[e]) || V;
    }
    _fetchConfig(e, t) {
      if (
        (function (e) {
          return void 0 !== e.prebid;
        })(t)
      )
        return new Promise((e) => {
          e(t);
        });
      const { partner: n, device: i, region: s, site: o, feature: r } = e,
        a = this._getPrebidConfigPartnerKey(n),
        c =
          r && Array.isArray(r) ? r.find((e) => e.includes("prebid-")) : void 0,
        d = [],
        l = `${o}-${s}-${i}`.toLowerCase();
      let h = "",
        u = "";
      const g = `${Ts}/${l}.json`;
      let p;
      d.push(fetch(g)),
        a && a !== V && ((h = `${Ts}/${a}-${l}.json`), d.push(fetch(h))),
        c && ((u = `${Ts}/${l}-${c}.json`), d.push(fetch(u)));
      const f = { error: Bn, type: In };
      return Promise.allSettled(d)
        .then(([e, t, n]) => {
          if (n) {
            if (!(n.status === ws || (n.value && 403 === n.value.status)))
              return (p = n.value.url), n.value.json();
            this.logger.sendDebugBeacon({ ...f, errorMessage: `${Rs}: ${u}` });
          }
          if (t) {
            if (!(t.status === ws || (t.value && 403 === t.value.status)))
              return (p = t.value.url), t.value.json();
            {
              const e = a && a !== V ? h : u;
              this.logger.sendDebugBeacon({
                ...f,
                errorMessage: `${Rs}: ${e}`,
              });
            }
          }
          if (e.status === ws || (e.value && 403 === e.value.status))
            throw (
              (this.logger.sendDebugBeacon({
                ...f,
                errorMessage: `${Rs}: ${g}`,
              }),
              new Error(Bn))
            );
          return (p = g), e.value.json();
        })
        .then((e) => {
          if (!e || !e.prebid)
            throw (
              (this.logger.sendDebugBeacon({
                ...f,
                errorMessage: `Parsing error: ${p}`,
              }),
              new Error(Bn))
            );
          return e;
        });
    }
    _fetchPBJS(e, t) {
      return new Promise((n, i) => {
        !(function (e, t, n, i) {
          if (t) {
            const s = O.replace(A, t);
            Yi({
              id: x,
              onerrorCb: () => {
                document.getElementById(x)?.remove(), $i(e, n, i);
              },
              onloadCb: n,
              tagSrc: s,
              WIN: e,
            });
          } else $i(e, n, i);
        })(
          e,
          t,
          () => {
            n(wn);
          },
          (e, t) => {
            this.logger.sendDebugBeacon({
              error: Ln,
              errorMessage: `${Rs}: ${Vi(e, t)}`,
              type: In,
            }),
              i(new Error(Ln));
          },
        );
      });
    }
    _fetchAYClientJS(e, t) {
      return t
        ? ((e.assertive = et),
          new Promise((t, n) => {
            !(function (e, t, n) {
              Yi({
                async: !0,
                id: "ay-script",
                onerrorCb: n,
                onloadCb: t,
                tagSrc: "https://s.yimg.com/du/ay/wnsrvbjmeprtfrnfx.js",
                WIN: e,
              });
            })(
              e,
              () => {
                t(bn);
              },
              (e, t) => {
                this.logger.sendDebugBeacon({
                  error: mn,
                  errorMessage: `${Rs}: ${Vi(e, t)}`,
                  type: _n,
                }),
                  n(new Error(mn));
              },
            );
          }))
        : new Promise((e) => {
            e(fn);
          });
    }
    _fetchBPConfig(e) {
      const { partner: t, site: n } = e;
      let i = `${Ts}/bp-${n}`;
      return (
        t && "none" !== t && (i += `-${t}`),
        new Promise((t, n) => {
          const s = e?.feature?.includes("benji-bpConfigInBenji");
          (i += ".json"),
            s
              ? fetch(i)
                  .then((e) => {
                    if (!e.ok) throw new Error(yn);
                    t(e.json());
                  })
                  .catch(() => {
                    this.logger.sendDebugBeacon({
                      error: yn,
                      errorMessage: `${Rs}: ${i}`,
                      type: In,
                    }),
                      n(new Error(yn));
                  })
              : t();
        })
      );
    }
    _getMediaTypes(e) {
      const t = {},
        { adComponentPath: n, size: i } = e,
        s = n.split("/").slice(-1)[0],
        o = this.initialConfig.prebid.adUnits[s];
      if (!o) return t;
      if (o.formats?.banner) {
        const e = jt(o.formats.banner.sizes, i);
        e.length && (t.banner = { pos: o.pos, sizes: e });
      }
      if (this.inBannerVideoAdEnabled && o.formats?.video) {
        const e = jt(o.formats.video.sizes, i);
        e.length &&
          (t.video = {
            context: o.formats.video.context,
            playerSize: e,
            ...ft,
          });
      }
      return t;
    }
    _isItemToBeDisabledUnderBucket(e, t) {
      const n = this.initialConfig.prebid.filters?.[t]?.[e]?.disabledBucketRate;
      let i = !1;
      return n && "number" == typeof n && (i = St(100 * n)), i;
    }
    isUserCountryEligible(e, t) {
      const n = this.initialConfig.prebid.filters?.[t];
      if (!n) return !0;
      const i = (this.i13nStore.getCurrent()?.usercountry ?? "").toString(),
        s = (this.i13nStore.getCurrent()?.toscountry ?? "").toString();
      if (!i && !s) return !0;
      const o = n[e] || n.DEFAULT,
        { allowList: r, blockList: a } = o,
        c = !i || this._isUserLocationEligible(i, r, a),
        d = !s || this._isUserLocationEligible(s, r, a);
      return c && d;
    }
    _isUserLocationEligible(e, t, n) {
      const i = this.initialConfig.prebid.regionCountries,
        s = n && this._isUserLocationInList(n, i, e),
        o = t && this._isUserLocationInList(t, i, e),
        r = !("*" === t?.userCountry || t?.userCountry?.includes(e)) && !o,
        a = n?.userCountry?.includes(e);
      let c = !0;
      return ((t && r) || a || s) && (c = !1), c;
    }
    _isUserLocationInList(e, t, n) {
      return t && e.userRegion?.some((e) => t[e]?.includes(n));
    }
    _getBids(e) {
      const { adComponentPath: t } = e,
        n = t.split("/"),
        i = n[n.length - 1],
        s = this.initialConfig.prebid.adUnits[i];
      if (void 0 === s) return;
      const { bidders: o } = s;
      return Object.keys(o)
        .filter((e) => this.isUserCountryEligible(e, "bidders"))
        .map((e) => ({
          bidder: e,
          params: { ...this.initialConfig.prebid.bidders[e], ...o[e] },
        }));
    }
    _getAdUnitFromAdInfo(e) {
      const t = this._getBids(e);
      if (!t) return;
      const n = this._getOrtb2Imp(e, t),
        i = this._getMediaTypes(e);
      return {
        bids: t,
        code: e.adComponentId,
        mediaTypes: i,
        ...(n && { ortb2Imp: n }),
        ...(i.video && { renderer: li(this.i13nStore.getCurrent(), e) }),
      };
    }
    _splitAdUnitByMediaTypes(e) {
      const { mediaTypes: t, renderer: n, ...i } = e,
        s = [];
      return (
        t.banner && s.push({ ...i, mediaTypes: { banner: t.banner } }),
        this.inBannerVideoAdEnabled &&
          t.video &&
          s.push({ ...i, mediaTypes: { video: t.video }, renderer: n }),
        s
      );
    }
    _getOrtb2Imp(e, t) {
      const n = e.adComponentPath.split("/").slice(-1)[0],
        i = t.find((e) => "yahooPrebidServer" === e.bidder);
      if (i && !1 !== i.params?.enabled) {
        const t = this.i13nStore.createRSObject(),
          { axid: i, ...s } = t,
          o = this.i13nStore.getCurrent().bucket,
          r = Array.isArray(o) ? o.join(",") : o;
        return {
          ext: {
            prebid: {
              passthrough: {
                ...(r && { bucket: r }),
                client: Ss,
                gamAdCode: n,
                liveintentenabled: this.liveIntentUtils.liveIntentEnabled,
                liveRampEnabled: this.userModuleStatus[H],
                pairIdEnabled: this.userModuleStatus.pairId,
                ...(e.loc && { gamLoc: e.loc }),
                ...s,
              },
              storedrequest: { id: n },
            },
          },
        };
      }
      return null;
    }
    addAdUnit(e) {
      this._adUnits().filter((t) => {
        const { code: n, mediaTypes: i } = t;
        if (n !== e.code) return !1;
        return (
          (i.banner && e.mediaTypes.banner) ||
          (this.inBannerVideoAdEnabled && i.video && e.mediaTypes.video)
        );
      }).length > 0 ||
        this._pbjs.que.push(() => {
          this._pbjs.addAdUnits(e);
        });
    }
    removeAdUnit(e) {
      const t = this._adUnits().filter((t) => t.code === e)[0];
      return t
        ? (this._pbjs.que.push(() => {
            this._pbjs.removeAdUnit(e);
          }),
          t)
        : null;
    }
    _adUnits() {
      return this._pbjs.adUnits || [];
    }
    _sendSessionStartBeacon() {
      this.logger.sendDebugBeacon({ type: Pn });
    }
    _sendUserSyncModuleStatusToGAM() {
      this._userSyncSetTargetingHelper("liveramp.com", H, "lr_env");
    }
    _userSyncSetTargetingHelper(e, t, n) {
      let i = "off";
      if (this.userModuleStatus[t]) {
        i = this._pbjs.getUserIdsAsEids().find((t) => t.source === e)
          ? "id"
          : "no-id";
      }
      this.gptComponent.setTargeting({ [n]: i });
    }
    _startObservables() {
      this.onEvent(X, (t) => {
        const { adUnitCodes: n } = t;
        n?.forEach((t) => {
          e.benji.logger.updateDatastore(t, {
            [ct]: Math.round(e.performance.now()),
          });
        });
      }),
        this.onEvent(J, (t) => {
          const { adUnitCodes: n } = t;
          n?.forEach((t) => {
            e.benji.logger.updateDatastore(t, {
              [dt]: Math.round(e.performance.now()),
            });
          });
        });
      const { liveIntentEnabled: t, liveIntentInOriginalConfig: n } =
        this.liveIntentUtils;
      n &&
        (t
          ? this._activateLiveIntentObservable()
          : this._setLiveIntentTargeting(),
        this.onEvent(X, () => {
          this.liveIntentUtils.sendLiveIntentBeacon({
            ...this.liveIntentUtils,
            logger: this.logger,
          });
        }),
        this.logger.sendDebugBeacon({
          logType: hn,
          message: kn,
          messageDetails: `${gn}-${t ? 98 : 2}`,
          source: Ss,
        })),
        this._pbjs.que.push(() => {
          this.auctionEventsTracking.startAuctionEventsTracker(
            this._pbjs,
            this.auctionEventsTracking.auctionEventsTrackerList,
          );
        });
    }
    _setLiveIntentTargeting(e) {
      const { liveIntentEnabled: t, instrumentation: n } = this.liveIntentUtils,
        { t0: i, t1: s, e0: o, e1: r, LI_REPORTING_KEY: a, HB_UI_MOD: c } = n;
      this.gptComponent.addCallbackToCmdQueue(() => {
        let d = t ? s : i;
        const l = this.liveIntentUtils.getLiveIntentTargeting({
          areBidsEnrichedByLiveIntent: !!e,
          instrumentation: n,
          liveIntentEnabled: t,
        });
        void 0 !== e && (d += e ? r : o),
          this.gptComponent.setTargeting({ [c]: l, [a]: d });
      });
    }
    _activateLiveIntentObservable() {
      this.onEvent(X, (e) => {
        this._setBidsEnriched(e),
          this._setLiveIntentTargeting(
            this.liveIntentUtils.areBidsEnrichedByLiveIntent,
          ),
          this.liveIntentUtils.logCachedEidsNotSent(
            this.liveIntentUtils.areBidsEnrichedByLiveIntent,
          );
      });
    }
    _setBidsEnriched(e) {
      const { adUnits: t } = e;
      this.liveIntentUtils.areBidsEnrichedByLiveIntent = !!t?.some(
        this.liveIntentUtils.hasLiveIntentAdUnit,
      );
    }
  }
  function Ds(e) {
    const t = (function (e) {
        const t = {};
        for (const [n, i] of Object.entries(e)) {
          const e = wt(i) && i?.stackGroup;
          e && (t[e] || (t[e] = []), t[e].push(n));
        }
        return t;
      })(e),
      n = {};
    for (const [e, i] of Object.entries(t)) {
      if (void 0 === Xe[e]) continue;
      const [t, s] = Xe[e],
        o = [[], []];
      i.forEach((e) => {
        e.includes(t) ? o[0].push(e) : e.includes(s) && o[1].push(e);
      }),
        (n[e] = o);
    }
    return n;
  }
  function Bs(e, t) {
    return e.reduce((e, n) => {
      const i = t[n]
        ? (function (e) {
            return 0 === e.length ? 0 : Math.max(...e.map((e) => e.cpm));
          })(t[n].bids)
        : 0;
      return e + i;
    }, 0);
  }
  class Os {
    gpt;
    ypb;
    config;
    targetOrigin;
    containerMap;
    store;
    i13nStore;
    constructor() {
      (this.i13nStore = new hs()),
        (this.config = {}),
        (this.store = new ls()),
        (this.containerMap = {}),
        (this.targetOrigin = ""),
        (this.gpt = new xt()),
        (this.ypb = new ks());
    }
    getAdComponent = (e, t = g) => this.store.getAdComponent(t, e);
    handleSlotRenderEnded = (e) => {
      const { size: t } = e;
      this.postMessageToParent({
        payload: {
          id: e.slot.getSlotElementId(),
          size: t,
          sizes: e.slot.getSizes(),
        },
        type: d,
      });
    };
    handleIntersect = (e) => {
      e.forEach((e) => {
        const { id: t, isIntersecting: n } = e,
          i = this.getAdComponent(t);
        i &&
          bi(i) &&
          (i._isIntersecting !== n &&
            n &&
            i?.eligibleForTimedRefresh &&
            i?.refresh(),
          (i._isIntersecting = n));
      });
    };
    handleImpressionViewable = (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.getAdComponent(t);
      n && bi(n) && n.timer?.start();
    };
    initialize() {
      const e = location.origin;
      this.containerMap = {};
      const t = window.parent.frames,
        n = Object.keys(this.config.positions);
      for (let i = 0; i < t.length; i++)
        try {
          const { location: s } = t[i];
          if (s.origin === e && s.href !== location.href)
            for (let e = 0; e < n.length; e++) {
              if (this.containerMap[n[e]]) continue;
              const s = t[i].window.document.getElementById(n[e]);
              if (s) {
                this.containerMap[n[e]] = s;
                break;
              }
            }
        } catch (e) {}
    }
    handleInit = ({ config: e, origin: t }) => {
      (this.config = e), (this.targetOrigin = t), this.initialize();
    };
    handleStart = () => {
      this.config?.positions && (this.fetch(), this.render());
    };
    handlePostMessage = (e) => {
      if (((t = e.origin), !i.test(t))) return;
      var t;
      const { payload: n, type: d } = e.data;
      switch (d) {
        case s:
          this.handleInit({ config: n.config, origin: e.origin }),
            this.postMessageToParent({ type: o });
          break;
        case l:
          this.handleStart();
          break;
        case c:
          this.render(n.config);
          break;
        case r: {
          const { age: e, atsd: t, axid: i, gender: s } = n;
          Ki(this.gpt, {
            age: e,
            atsd: zt(t),
            axid: i,
            gender: s,
            i13n: this.config.i13n,
            queryI13n: null,
            testid: null,
          });
          break;
        }
        case a:
          this.handleIntersect(n);
          break;
        case h:
          this.store.getRegionAdComponents(g).forEach((e) => {
            bi(e) && e?._isIntersecting && (e.refresh(), e.timer?.start());
          });
      }
    };
    init() {
      const e = new URL(window.location.href);
      (this.targetOrigin = decodeURIComponent(e.searchParams.get("o") || "")),
        window.addEventListener("message", this.handlePostMessage),
        this.gpt.addEventListener(
          K.slotRenderEnded,
          this.handleSlotRenderEnded,
        ),
        this.gpt.addEventListener(
          K.impressionViewable,
          this.handleImpressionViewable,
        );
    }
    postMessageToParent(e) {
      window.parent.postMessage(e, this.targetOrigin);
    }
    fetch(e) {
      return Ns.call(this, e ?? this.config.positions);
    }
    render(e) {
      (e ? this.fetch(e) : this.store.getRegionAdComponents(g)).forEach((e) => {
        e.render();
      });
    }
  }
  function Ns(e) {
    const t = [],
      n = new $t(),
      i = new yi();
    return (
      n.setNext(i),
      Object.entries(e).forEach(([e, i]) => {
        const s = n.handle({ context: this, positionConfig: i, positionId: e });
        s && t.push(s);
      }),
      t
    );
  }
  function js() {
    this instanceof Os ||
      this.on(je, (e) => {
        !(function (e) {
          const { data: t } = e,
            { id: n, height: i } = t,
            s = document.getElementById(n),
            o = s?.clientHeight;
          null !== i && i !== o && s?.style.setProperty("min-height", i + "px");
        })(e);
      });
  }
  function Ms() {
    this.gpt.addEventListener(K.slotRenderEnded, (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.store.getAdComponentById(t);
      if (void 0 === n || !bi(n)) return;
      const i = Li(e, n);
      void 0 !== i && this.logger.sendMetricsBeacon(i);
    });
  }
  function Us(e, t) {
    (Array.isArray(e) ? e : [e]).forEach((e) => {
      e.renewTimer(t);
    });
  }
  function zs(e) {
    const t = (function (e) {
        return e.advertiserId && e.campaignId && e.creativeId && e.lineItemId
          ? R.DirectSold
          : R.DynamicAllocation;
      })(e),
      n = (function (e) {
        const { advertiserId: t } = e;
        return t
          ? oe.House.includes(t)
            ? L.House
            : oe.AdX.includes(t)
              ? L.AdX
              : oe.YahooPrebid.includes(t)
                ? L.YahooPrebid
                : L.Unknown
          : L.Unknown;
      })(e);
    return t === R.DirectSold && n === L.Unknown;
  }
  function Fs(e, t, n, i = !1) {
    const s = e.config.setting?.refresh?.reserved,
      o = (function (e, t, n) {
        if (!n) return 0;
        const i = t && n.sponsorship ? n.sponsorship : n?.duration || 0,
          s = e.size;
        if (!Array.isArray(s)) return i;
        const o = JSON.stringify(s),
          r = n[P[o]];
        return r ? (t && r?.sponsorship ? r?.sponsorship : r?.duration) : i;
      })(t, i, s),
      r = n?.refreshConfig?.reserved;
    return (i && r?.sponsorship ? r?.sponsorship : r?.duration) || o;
  }
  function xs(e, t) {
    const n = document.getElementById(e),
      i = Ct(n);
    i &&
      (i.classList.add("gam-sticky-ad"),
      t.height && i.style.setProperty("min-height", t.height + "px"));
  }
  const Gs = "benji-premium-ad",
    Ys = "D(n)--landscape";
  function $s(e, t, n) {
    let i;
    const s = document.getElementById(e);
    if (!s) return;
    const o = s?.children[0],
      r = o?.children[0];
    if (t) {
      const e = Object.keys(t).find((e) => {
        const n = e && t[e];
        return !!n && !0 === n.isEligibleForResize;
      });
      i = e && t[e];
    }
    if (!i) return;
    const a = window.innerWidth,
      c = i?.breakpoints;
    let d,
      l = !0;
    for (const e in c)
      if (r && e) {
        const t = e.split(","),
          i = Number(t[0]),
          h = Number(t[1]);
        if (a >= i && a <= h) {
          const t = c[e];
          (d = (a * t[1]) / t[0]),
            l &&
              (n
                ? s.setAttribute("style", `all: revert; min-height: ${d}px;`)
                : s.setAttribute("style", `min-height: ${d}px;`),
              (l = !1)),
            (o.style.display = "block"),
            (r.height = d.toString()),
            (r.width = a.toString());
        }
      }
  }
  function Vs(e, t, n) {
    const i = [],
      s = document.getElementById(e);
    if (s) {
      if (!n) {
        for (const e of s.classList) {
          const t = e;
          t.toLowerCase().startsWith("sda") || i.push(t);
        }
        s.classList.remove(...i);
      }
      s.classList.add(`${Gs}`),
        t &&
          (function (e) {
            e.classList?.add(Ys);
            const t = e.parentElement && Ct(e.parentElement);
            t?.classList?.add(Ys);
          })(s);
    }
  }
  function Hs(e) {
    const t = e.slot.getSlotElementId(),
      n = this.store.getAdComponentById(t),
      i = this.config,
      s = this.config.feature?.enableNewPremiumAdLogic;
    if (void 0 === n || !bi(n)) return;
    const o = n.customSizeConfig,
      r = n.stickyConfig;
    if (zs(e)) {
      const t = Fs(this, e, n, !1);
      t && Us(n, t);
    }
    if (
      ((n.isEdgeToEdge = !1),
      o &&
        (function (e, t, n) {
          n &&
            Object.keys(n).forEach((i) => {
              let s;
              s = i && !0 === n[i] ? {} : i && n[i];
              const o = w[i];
              if (
                ((s = Object.assign({}, o, s)),
                t &&
                  s?.size &&
                  e?.size &&
                  s.size[0] === e.size[0] &&
                  s.size[1] === e.size[1])
              ) {
                s.breakpoints &&
                  ((s.isEligibleForResize = !0), (t.isEdgeToEdge = !0));
                const n = t.refreshConfig,
                  o = n?.reserved && n.reserved[i],
                  r = o?.duration,
                  a = o?.disableRefresh;
                a ? t.disableAllRefresh() : r && Us(t, r),
                  s.stickyConfig &&
                    xs(e.slot.getSlotElementId(), s.stickyConfig);
              } else s.isEligibleForResize = !1;
              n[i] = s;
            });
        })(e, n, o),
      n.isEdgeToEdge && o)
    ) {
      $s(n.id, o, s);
      Vs(t, "smartphone" === i.i13n?.device, s),
        (function (e, t) {
          e.loadResizeHandler(() => {
            e.isEdgeToEdge &&
              e.customSizeConfig &&
              $s(e.id, e.customSizeConfig, t);
          });
        })(n, s);
    } else {
      const e = document.getElementById(t);
      if (e) {
        e?.classList?.remove(Ys, Gs);
        const t = e?.parentElement && Ct(e.parentElement);
        t?.classList?.remove(Ys), s && (e.style.all = "");
      }
    }
    r?.enabled && xs(t, r);
  }
  function qs() {
    this.gpt.addEventListener(K.slotRenderEnded, (e) => {
      Hs.call(this, e);
    });
  }
  function Ws() {
    this.gpt.addEventListener(K.slotRequested, (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.store.getAdComponentById(t);
      if (!n) return;
      bi(n) && n.increaseFetchCount();
      const i = this.i13nStore.currentI13n?.site,
        s = (function (e, t) {
          return {
            data: { id: e.slot.getSlotElementId() },
            name: Ue,
            ...Yt(e, t),
          };
        })(e, i);
      Gt[Ue] &&
        Gt[Ue].forEach((e) => {
          e(s);
        }),
        bi(n) && n.getRenderCount() >= 1 && n.unloadResizeHandler();
    }),
      this.gpt.addEventListener(K.slotRenderEnded, (e) => {
        const t = e.slot.getSlotElementId(),
          n = this.store.getAdComponentById(t);
        if (n)
          if (
            (bi(n) &&
              (function (e) {
                if (void 0 === e) return;
                const t = `${e.getRenderCount()}`;
                e.gptComponent.setTargetingForSlot(e, { ri: t });
              })(n),
            e.isEmpty)
          ) {
            bi(n) && n?.increaseFailureCount();
            const t = this.i13nStore.currentI13n?.site,
              i = (function (e, t) {
                return {
                  data: { id: e.slot.getSlotElementId() },
                  name: Me,
                  ...Yt(e, t),
                };
              })(e, t);
            Gt[Me] &&
              Gt[Me].forEach((e) => {
                e(i);
              });
          } else {
            if (
              !(
                null !== e.advertiserId &&
                oe.YahooPrebid.includes(e.advertiserId)
              )
            ) {
              const t = this.i13nStore.currentI13n?.site,
                n = (function (e, t) {
                  const { slot: n, size: i } = e;
                  let s = null,
                    o = null,
                    r = null;
                  return (
                    Array.isArray(i) && ((s = i[0]), (o = i[1]), (r = [s, o])),
                    {
                      data: {
                        height: o,
                        id: n.getSlotElementId(),
                        size: r,
                        width: s,
                      },
                      name: je,
                      ...Yt(e, t),
                    }
                  );
                })(e, t);
              Gt[je] &&
                Gt[je].forEach((e) => {
                  e(n);
                });
            }
          }
      }),
      this.gpt.addEventListener(K.slotResponseReceived, (e) => {
        const t = this.i13nStore.currentI13n?.site,
          n = (function (e, t) {
            return {
              data: { id: e.slot.getSlotElementId() },
              name: Fe,
              ...Yt(e, t),
            };
          })(e, t);
        Gt[Fe] &&
          Gt[Fe].forEach((e) => {
            e(n);
          });
      }),
      this.gpt.addEventListener(K.impressionViewable, (e) => {
        const t = this.i13nStore.currentI13n?.site,
          n = (function (e, t) {
            return {
              data: { id: e.slot.getSlotElementId() },
              name: xe,
              ...Yt(e, t),
            };
          })(e, t);
        Gt[xe] &&
          Gt[xe].forEach((e) => {
            e(n);
          });
      });
  }
  const Ks = (e) => {
    const t = new CustomEvent(ae.benjiReady);
    e.dispatchEvent(t);
  };
  function Qs(e) {
    let t = !1;
    const n = (e || []).filter((e) => !!document?.getElementById(e)),
      i = new Set(n),
      s = { positions: {} },
      o = () => {
        (Gt[ze] || []).forEach((e) => {
          e(s);
        }),
          (t = !0);
      };
    0 !== i.size
      ? this.gpt.addEventListener(K.slotRenderEnded, (e) => {
          if (t) return;
          const n = e.slot.getSlotElementId(),
            r = this.config.positions[n];
          if (i.has(n) && wt(r)) {
            i.delete(n);
            const t = zs(e);
            s.positions[n] = {
              adType: t ? $e.RESERVED : $e.STANDARD,
              id: n,
              loc: r.kvs?.loc,
              renderStatus: e.isEmpty ? Me : je,
            };
          }
          0 === i.size && o();
        })
      : o();
  }
  function Js() {
    this.on(je, (e) => {
      const { id: t, width: n, height: i } = e.data,
        s = this.store.getAdComponentById(t);
      if (void 0 !== s && bi(s)) {
        if (void 0 === s.renderInfo.originalDisplayVal) {
          const e = document?.getElementById(s.id),
            t = e?.style.display || u;
          s.setRenderInfo({ originalDisplayVal: t });
        }
        n && i && s.setRenderInfo({ size: { height: i, width: n } });
      }
    });
  }
  function Xs() {
    this.on(Ge, (e) => {
      const { data: t } = e,
        n = [],
        i = [];
      Object.entries(t).forEach(([e, t]) => {
        const { winningSide: s, losingSide: o } = t;
        n.push(...s.adIds), i.push(...o.adIds);
      }),
        [...n, ...i].forEach((e) => {
          const t = document.getElementById(e);
          t?.style.setProperty("display", "none");
        });
    }),
      this.gpt.addEventListener(K.slotRenderEnded, (e) => {
        const t = e.slot.getSlotElementId(),
          n = this.ypb.stackGroupAuctionState;
        Object.values(n).forEach((e) => {
          if (e.winningSide.adIds.includes(t)) {
            const e = this.store.getAdComponentById(t);
            if (void 0 !== e && bi(e)) {
              const n = document.getElementById(t);
              n?.style.setProperty(
                "display",
                e.renderInfo.originalDisplayVal || u,
              );
            }
          }
        });
      });
  }
  function Zs() {
    this.taboola.addEventListener(Q.render, (e) => {
      const t = (function (e) {
        if (!e || 0 === Object.keys(e).length) return;
        const { container: t, mode: n, placement: i, items: s } = e;
        return { data: { container: t, items: s, mode: n, placement: i } };
      })(e.detail);
      Gt[je] &&
        Gt[je].forEach((e) => {
          e(t);
        });
    });
  }
  function eo() {
    let t;
    t = e.benji.isInTopLevelWindow
      ? e.location.hostname
      : document.referrer.replace(/^https?:\/\//, "");
    const n = (function (e) {
      for (const t of e) if (tt.includes(t)) return !0;
      return !1;
    })(t.split("."));
    return (
      n ||
        e.benji.logger.sendDebugBeacon({ domain: t, type: "INVALID_DOMAIN" }),
      n
    );
  }
  const to = /;\s/g,
    no = /([^=]+)=/i,
    io = (e, t) => {
      let n = null;
      return (
        (t = t.trim()),
        e.document?.cookie.split(to).some((e) => {
          let i, s;
          const o = e.match(no);
          if (Array.isArray(o))
            try {
              (i = decodeURIComponent(o[1])),
                (s = decodeURIComponent(e.substring(i.length + 1)));
            } catch (e) {}
          return !(i !== t || !s) && ((n = s.trim()), !0);
        }),
        n
      );
    },
    so = (e) => io(e, "tbla_id") || "",
    oo = 1e3,
    ro = "mouseenter",
    ao = "mouseleave";
  const co = "yahoomedia";
  function lo() {
    window.addEventListener("message", (e) => {
      const t = e?.data?.creativeOrigin;
      if (!t || !t.includes(co) || !e.data?.loc) return;
      const n = e.data?.loc,
        i = this.store.getAdComponentByLoc(n);
      i &&
        (i.creativeInteractionConfig = {
          ...i.creativeInteractionConfig,
          isYahooCreative: !0,
        });
    });
  }
  function ho() {
    this.gpt.addEventListener(K.impressionViewable, (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.store.getAdComponentById(t);
      if (n && this.config.feature.enableAdInteractionBasedRefresh && bi(n)) {
        const e = document.getElementById(t)?.querySelector(`div[id^='${nt}']`);
        e &&
          ((n.creativeInteractionConfig = {
            ...n.creativeInteractionConfig,
            iframeContainer: e,
          }),
          (function (e) {
            const t = e.creativeInteractionConfig,
              {
                iframeContainer: n,
                isYahooCreative: i,
                scrollOffset: s,
                interactionStartHandler: o,
                interactionEndHandler: r,
              } = t;
            n &&
              (n.addEventListener(ro, () => {
                i
                  ? (t.hoverTimerId = setTimeout(() => {
                      if (t.ycInteractionActive) return;
                      o();
                      const e =
                          window.scrollY || document.documentElement.scrollTop,
                        n = () => {
                          const t =
                              window.scrollY ||
                              document.documentElement.scrollTop,
                            i = Math.abs(t - e);
                          s &&
                            i > s &&
                            (r(), window.removeEventListener("scroll", n));
                        };
                      window.addEventListener("scroll", n);
                    }, oo))
                  : o();
              }),
              n.addEventListener(ao, () => {
                i ? clearTimeout(t.hoverTimerId) : r();
              }));
          })(n));
      }
    });
  }
  function uo() {
    const t = e.YahooCJS?.getConsentInfo();
    if (!t || t.errorMessage)
      return (
        console.warn("no consent map"),
        qn({
          logType: "error",
          message: "CONSENT_MAP_NOT_FOUND",
          messageDetails: "No consent map found",
          source: "DIDOMI_UTILS",
        }),
        {}
      );
    const { consentTypes: n } = t;
    return (function (e) {
      const t = {};
      return e instanceof Map
        ? (e.forEach((e, n) => {
            const i = n
              .toLowerCase()
              .replace(/_([a-z])/g, (e, t) => t.toUpperCase());
            t[i] = e;
          }),
          t)
        : t;
    })(n);
  }
  const go = "BENJI_SESSION_START";
  function po(t) {
    if (
      ((this.config = {
        ...t,
        event: t.event || {},
        feature: t.feature || {},
        i13n: t.i13n || {},
        prebidSetting: t.prebidSetting || {},
        setting: t.setting || {},
      }),
      (this.isInTopLevelWindow = e.self === e.top),
      this.logger.start(this),
      this.logger.updateDatastore({ [st]: Math.round(e.performance.now()) }),
      !eo())
    )
      return;
    this.config.setting.tracking = {
      ...this.config.setting.tracking,
      metrics: this.config.setting.tracking?.metrics ?? ie,
      performance: this.config.setting.tracking?.performance ?? ne,
    };
    let n = "configFeature";
    if (!1 !== this.config.feature.enableYahooPrebid) {
      const e = Boolean(this.config.i13n.feature?.includes(C));
      (this.config.feature.enableYahooPrebid = !e && Ee),
        e && (n = "i13nFeature");
    }
    !1 !== this.config.feature.enableRefreshDebounce &&
      (this.config.feature.enableRefreshDebounce = S),
      Ws.call(this),
      this.config.feature.enableAdInteractionBasedRefresh &&
        (lo.call(this), ho.call(this)),
      !0 === this.config.setting.tracking?.performance && ki.call(this),
      !0 === this.config.setting.tracking?.metrics && Ms.call(this),
      !0 === this.config.setting.tracking?.debug &&
        (Bi.call(this),
        e.addEventListener(f, () => {
          Object.entries(this.config.positions).forEach(([e, t]) => {
            if (!wt(t)) return;
            if (t.region !== g) return;
            const n = document?.getElementById(e);
            null === n && Ni(this, e);
          });
        }));
    const {
      feature: {
        enablef10d509c: i = ye,
        enableNTSFallback: s,
        enableYahooPrebid: o,
      },
      setting: { gptSetting: r, taboolaSetting: a },
    } = this.config;
    o || this.logger.sendDebugBeacon({ reason: n, type: "PREBID_DISABLED" }),
      i && Gi(e, this.config.i13n.site);
    const {
      allowFirstPartyAds: c,
      allowOnlyNonPersonalizedAds: d,
      allowOnlyLimitedAds: l,
    } = this.config.setting?.consent || {};
    !(function (e, t = !1) {
      const n = t ? D : k;
      (function (e) {
        return !(!e.googletag || !e.googletag.apiReady);
      })(e) || Yi({ id: F, tagSrc: n, WIN: e });
    })(e, !!l),
      o &&
        this.ypb.start({
          benjiConfig: this.config,
          consent: {
            allowFirstPartyAds: !!c,
            allowOnlyLimitedAds: !!l,
            allowOnlyNonPersonalizedAds: !!d,
          },
          gptComponent: this.gpt,
          i13nStore: this.i13nStore,
          logger: this.logger,
        }),
      s && this.nts.start({ benji: this });
    const h = {};
    this.config.feature &&
      W.forEach((e) => {
        this.config.feature[e] && (h[e] = this.config.feature[e]);
      }),
      this.gpt.setupService(h, r),
      this.gpt.setInitialPageUrl(t.i13n?.url);
    const { useSecure: u = !1 } = this.config.setting;
    if (!u) {
      if ((Wi(this, e), this.config.setting.refresh)) {
        tn.call(this);
        const { tabFocus: t, requireUserAction: n } =
          this.config.setting.refresh;
        if (t) {
          const { outOfFocusDuration: n } = t;
          bt(n),
            e.addEventListener(ae.tabFocus, () => {
              Object.keys(Xt).forEach((e) => {
                (0, Xt[e])();
              }),
                (en.length = 0);
            });
        }
        n && nn();
      }
      e.addEventListener("resize", () => {
        Object.keys(Zt).forEach((e) => {
          (0, Zt[e])();
        });
      });
    }
    this.i13nStore.getCurrent().tbla_id ||
      this.i13nStore.updateCurrent({ tbla_id: so(e) });
    const m = this.getAxid(it.GAM),
      b = At(m);
    a &&
      (this.taboola.setupService(this.config.feature, a, this.config.i13n.site),
      Oi.call(this),
      Zs.call(this)),
      !b || d || l || this.gpt.setPublisherProvidedId(b),
      d
        ? this.gpt.setPrivacySettings(se)
        : l && this.gpt.setPrivacySettings(te);
    const y =
      this.config.setting.lazyLoad &&
      (function (e) {
        if (e) {
          if (!0 === e || !0 === e.gptLazyLoad) return Ne;
          for (const t in Ne) {
            if (e[t] && !e.gptLazyLoad) return e;
            if (e.gptLazyLoad && e.gptLazyLoad[t]) return e.gptLazyLoad;
          }
        }
      })(this.config.setting.lazyLoad);
    y && this.gpt?.enableLazyLoad(y);
    const { positions: E } = this.config;
    u ? this.secureController.start(this.config) : Ii.call(this, E);
    const _ = Object.keys(this.store.index || {});
    Qs.call(this, _);
    const {
      setting: { renderOnStart: I = p },
    } = this.config;
    !0 === I && (u ? this.secureController.render() : ji.call(this)),
      e.addEventListener(re.render, (e) => {
        const t = e.detail;
        u
          ? this.secureController.render(t.positions)
          : ji.call(this, t.positions);
      }),
      e.wafer
        ? xi()
        : e.addEventListener(q.waferReady, function () {
            xi();
          }),
      this.config.feature?.enableLazyFetch && dn(),
      !1 !== this.config.feature?.collapseWhenNoFill && ns.call(this),
      !1 !== this.config.feature?.adjustMinHeight && js.call(this),
      !1 !== this.config.feature?.enablePremiumAds && qs.call(this),
      this.config.feature?.fireBrokerButtonEvent && ds.call(this),
      this.config.feature?.enableGooglePrivacySandboxPAIGTest &&
        (function (e) {
          Hi(e, "opus:gps-paig-test", "true");
        })(e),
      this.config.feature?.enableGooglePrivacySandboxARTest &&
        (function (e) {
          Hi(e, "opus:gps-ar-test", "true");
        })(e),
      (function (e) {
        Yi({ id: G, tagSrc: N, WIN: e });
      })(e),
      Ks(e),
      (this.isReady = !0),
      this.logger.sendDebugBeacon({ type: go }),
      Js.call(this),
      Xs.call(this);
  }
  const fo = (e, t) => {
    const { firstPartyAds: n } = e,
      i = ((e, t) => {
        const n = ((e) => e.region || e.usercountry || "")(t);
        let i = Ke;
        return (
          t.gdpr ? (i = qe) : "us" === n.toLocaleLowerCase() && (i = We),
          i.some((t) => !1 === e[t])
        );
      })(e, t),
      s = ((e) => {
        let t = !1;
        const n = He.every((t) => !e[t]),
          i = Ve.every((t) => e[t]);
        return (t = n && i), t;
      })(e);
    return {
      allowFirstPartyAds: n,
      allowOnlyLimitedAds: i,
      allowOnlyNonPersonalizedAds: s,
    };
  };
  function mo() {
    this.gpt.addEventListener(K.slotRequested, (e) => {
      const t = e.slot.getSlotElementId();
      this.nts.unmonitorPosition(t);
    }),
      this.gpt.addEventListener(K.slotRenderEnded, (e) => {
        const t = e.slot.getSlotElementId(),
          n = this.store.getAdComponentById(t);
        if (!e.isEmpty || !n || !bi(n)) return;
        const i = n.ntsFallBack?.position;
        i
          ? this.nts.getFallbackPosition(n)
          : this.nts.loggerUtils.adFailedWithNoFallback(n, this.logger);
      });
  }
  function bo(e, t) {
    const { id: n } = t,
      i = t.getRenderCount(),
      s = t.kvs?.loc ? t.kvs.loc : "undefined",
      o = e.isEmpty ? "failed" : "succeeded";
    return {
      errorMessage: e.errorMessage || "",
      id: n,
      loc: Array.isArray(s) ? s[0] : s,
      renderCount: i,
      sourceType: "native",
      status: o,
    };
  }
  var yo = {
    __proto__: null,
    adFailedWithNoFallback: function (e, t) {
      const n = bo(
        { errorMessage: "Failed ad with no fallback", isEmpty: !0 },
        e,
      );
      t.sendDebugBeacon(n);
    },
    fallbackEmptyTemplateError: function (e, t, n) {
      const i = this.getDebugContext({ errorMessage: e, isEmpty: !0 }, t);
      n.sendDebugBeacon(i);
    },
    fallbackRendered: function (e, t) {
      const n = this.getDebugContext({ isEmpty: !1 }, e);
      t.sendDebugBeacon(n);
    },
    getDebugContext: bo,
  };
  const Eo = [
    "bucket",
    "hashtag",
    "lmsid",
    "lpstaid",
    "lu",
    "pct",
    "pd",
    "pt",
    "site",
  ];
  const _o = "2.2.12";
  _o.split(".")[0];
  const Io = new hs(),
    vo = new xt(),
    Ao = new (class {
      benjiConfig = {};
      unLoggedEvents = [];
      loggedEvents = {};
      maxBatchSize = 10;
      datastore = { page: {}, positions: {} };
      i13nStore;
      sampling = 10;
      loggerActive = !1;
      perfOffset = 0;
      isInTopLevelWindow;
      constructor(e) {
        this.i13nStore = e;
      }
      start(e) {
        (this.isInTopLevelWindow = e.isInTopLevelWindow),
          (this.benjiConfig = e.config),
          this.benjiConfig.setting.logger?.sampling &&
            (this.sampling = this.benjiConfig.setting.logger.sampling),
          this.benjiConfig.setting.logger?.perfOffset &&
            (this.perfOffset = Math.round(
              this.benjiConfig.setting.logger.perfOffset,
            )),
          this.addWindowEventListeners(),
          (this.loggerActive = St(this.sampling));
        const {
            setting: {
              consent: {
                allowOnlyNonPersonalizedAds: t,
                allowOnlyLimitedAds: n,
              } = { allowOnlyLimitedAds: !1, allowOnlyNonPersonalizedAds: !1 },
            },
            i13n: {
              colo: i,
              device: s,
              region: o,
              lang: r,
              site: a,
              spaceid: c,
              bucket: d,
              ver: l,
              src: h,
              _rid: u,
              usercountry: g,
              partner: p,
            },
          } = this.benjiConfig,
          f = e.version;
        this.updateDatastore({
          colo: i,
          device: s,
          lang: r,
          limitedAds: n,
          NPA: t,
          partner: p,
          pl1: f,
          region: o,
          rid: u,
          s: c,
          site: a,
          src: h,
          test: Array.isArray(d) ? d.join(",") : d,
          usercountry: g,
          ver: l,
        });
      }
      isValidEvent(e) {
        return !!(e && e.logType && e.message && e.source);
      }
      addWindowEventListeners() {
        window.addEventListener($n, (e) => this.handleWindowEvents(e)),
          window.addEventListener(Hn, () => this.handleVisibilityChange()),
          window.addEventListener(Vn, () => this.handleBeforeUnload());
      }
      handleWindowEvents(e) {
        this.isValidEvent(e.detail) &&
          ("error" !== e.detail?.logType
            ? this.loggerActive && this.sendDebugBeacon(e.detail)
            : this.sendDebugBeacon(e.detail));
      }
      handleBeforeUnload() {
        this.sendBatchLogs(!0);
      }
      handleVisibilityChange() {
        this.sendBatchLogs();
      }
      log({ logType: e, message: t, source: n, messageDetails: i }) {
        this.unLoggedEvents.push({
          logType: e,
          message: t,
          messageDetails: i,
          source: n,
        }),
          this.sendBatchLogs();
      }
      sendDebugBeacon(e) {
        const t = Yn(this.datastore, this.i13nStore),
          n = xn(Un, { etrg: "backgroundPost", outcm: "gamDebug", ...t, ...e });
        Fn(n);
      }
      sendPerfBeacon(e, t) {
        if (!this.isInTopLevelWindow && 0 === this.perfOffset) return;
        const n = {
            etag: "performance",
            etrg: "backgroundPost",
            outcm: "performance",
            usergenf: m,
          },
          i = { ...Gn(this.datastore, this.i13nStore), ...t };
        var s;
        const o = ((e, t) => {
          const { s: n, ...i } = t,
            s = Object.keys(i)
              .map((e) => `${e}=${encodeURIComponent(i[e])}`)
              .join("&");
          return `${e}?s=${n}&t=${Date.now()}&_I=&_AO=0&_NOL=0&${s}`;
        })(
          ((s = i.site),
          ge.has(s) ? "https://3p-geo.yahoo.com/p" : "https://geo.yahoo.com/p"),
          { ...n, ...i, A_utm: JSON.stringify(e) },
        );
        Fn(o);
      }
      sendPositionPerfBeacon(e) {
        const { sec: t, ...n } = this.datastore.positions[e],
          {
            BENJI_START: i,
            GPT_READY: s,
            PREBID_START: o,
          } = this.datastore.page,
          r = { BENJI_START: i, GPT_READY: s, PREBID_START: o };
        this.sendPerfBeacon({ ...r, ...n }, { sec: t });
      }
      sendMetricsBeacon(e) {
        const t = Yn(this.datastore, this.i13nStore),
          n = xn(Un, {
            etrg: "backgroundPost",
            outcm: "gamMetric",
            ...t,
            ...e,
          });
        return Fn(n);
      }
      sendBatchLogs(e = !1) {
        if (this.unLoggedEvents.length >= this.maxBatchSize || e) {
          const e = this.unLoggedEvents;
          (this.unLoggedEvents = []),
            e.forEach((e) => {
              this.sendDebugBeacon(e);
            });
        }
      }
      removeListeners() {
        window.removeEventListener($n, this.handleWindowEvents),
          window.removeEventListener(Hn, this.handleVisibilityChange),
          window.removeEventListener(Vn, this.handleBeforeUnload);
      }
      updateDatastore(e, t) {
        let n, i;
        "string" == typeof e
          ? (void 0 === this.datastore.positions[e] &&
              (this.datastore.positions[e] = {}),
            (n = this.datastore.positions[e]),
            (i = t))
          : ((n = this.datastore.page), (i = e)),
          Object.entries(i).forEach(([e, t]) => {
            void 0 === n[e] &&
              ((function (e) {
                return mt.includes(e);
              })(e) &&
                "number" == typeof t &&
                (t += this.perfOffset),
              (n[e] = t));
          });
      }
    })(Io),
    Co = new (class {
      activated = !1;
      activePositions = [];
      activeScriptSrcs = [];
      _intersectionObserver = {};
      _impressionObserver = {};
      logger;
      loggerUtils = yo;
      constructor() {}
      start({ benji: e }) {
        (this.activated = !0),
          (this._intersectionObserver = new IntersectionObserver(
            this.handleIntersection,
            { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
          )),
          (this._impressionObserver = new IntersectionObserver(
            this.handleImpressionIntersection,
            { threshold: [0.5] },
          )),
          (this.logger = e.logger),
          mo.call(e);
      }
      destroyAndCollapsePosition(e) {
        this.unmonitorPosition(e.id), es(e.id), e.destroy();
      }
      encodePblob(e) {
        const t = JSON.stringify(e);
        return encodeURIComponent(t);
      }
      getTemplateUrl(e) {
        const t = this.logger.i13nStore.currentI13n?.spaceid,
          n =
            ((i = this.logger.i13nStore.currentI13n),
            Eo.reduce(
              (e, t) => (i && i.hasOwnProperty(t) && (e[t] = i[t]), e),
              {},
            ));
        var i;
        return `https://nts.media.yahoo.com/api/v2/template?spaceid=${t}&adPositions=${e}&pageContext=${this.encodePblob(n)}`;
      }
      handleIntersection = (e) => {
        e.forEach((e) => {
          const { target: t, intersectionRatio: n } = e,
            i = t.id,
            s = Qt[i];
          s && s(100 * n);
        });
      };
      handleImpressionIntersection = (e) => {
        e.forEach((e) => {
          const { target: t, intersectionRatio: n } = e;
          n > 0.5 &&
            (this.triggerAdImpressionViewable(t),
            this._impressionObserver.unobserve(t));
        });
      };
      triggerAdImpressionViewable(e) {
        const t = e.id,
          n = Jt[t];
        n && n();
      }
      fetchTemplate(e) {
        return fetch(e)
          .then((e) => {
            if (e.ok) return e.json();
            throw new Error("Network error");
          })
          .then((e) => {
            if (!e.ads || !e.ads.length) throw new Error("No ads found");
            const { template: t, adSize: n } = e.ads[0],
              [i, s] = n.split("x");
            return { height: s, template: t, width: i };
          });
      }
      unmonitorPosition(e) {
        const t = document.getElementById(e);
        t &&
          (this._intersectionObserver.unobserve(t),
          this._impressionObserver.unobserve(t));
      }
      monitorPosition(e) {
        e &&
          (this._intersectionObserver.observe(e),
          this._impressionObserver.observe(e));
      }
      getBlobURL(e) {
        const t = new Blob([e], { type: "text/html" });
        return URL.createObjectURL(t);
      }
      addTemplateToAdContainer(e, t) {
        const { template: n, width: i, height: s } = t,
          o = this.getBlobURL(n),
          r = document.createElement("iframe");
        (r.width = (Number(i) + 10).toString()),
          (r.height = (Number(s) + 10).toString()),
          (r.style.border = "none"),
          (r.sandbox = "allow-scripts allow-popups"),
          (r.src = o),
          (r.scrolling = "no"),
          (e.style.display = "flex"),
          (e.style.flexDirection = "column"),
          (e.style.alignItems = "center"),
          (e.innerHTML = ""),
          e.appendChild(r),
          URL.revokeObjectURL(o);
      }
      getFallbackPosition(e) {
        const t = document.getElementById(e.id);
        if (!t) return Promise.reject();
        const n = this.getTemplateUrl(e.ntsFallBack.position);
        return this.fetchTemplate(n)
          .then((n) => {
            this.addTemplateToAdContainer(t, n),
              this.monitorPosition(t),
              this.loggerUtils.fallbackRendered(e, this.logger);
          })
          .catch((t) => {
            this.destroyAndCollapsePosition(e),
              this.loggerUtils.fallbackEmptyTemplateError(t, e, this.logger);
          });
      }
    })(),
    So = new (class {
      config;
      _iframe;
      _iframeReady;
      _observer;
      _commandQueue;
      targetOrigin;
      constructor() {
        (this.config = {}),
          (this._iframeReady = !1),
          (this._commandQueue = []),
          (this.targetOrigin = "https://s.yimg.com");
      }
      handlePostMessage = (e) => {
        if (e.origin !== this.targetOrigin) return;
        const { type: t } = e.data;
        switch (t) {
          case o:
            this._iframeReady = !0;
            for (let e = 0; e < this._commandQueue.length; e++)
              this.postMessageToIframe({
                payload: this._commandQueue[e][1],
                type: this._commandQueue[e][0],
              });
            this._commandQueue = [];
            break;
          case d:
            const { id: t, size: n } = e.data.payload;
            if (n && Array.isArray(n)) {
              const e = document.getElementById(t);
              e?.querySelector("iframe")?.setAttribute(
                "style",
                `width:${n[0]}px;height:${n[1]}px;border:0px;margin:0;`,
              );
            }
        }
      };
      handleIntersection = (e) => {
        const t = e.map((e) => ({
          id: e.target.id,
          intersectionRatio: e.intersectionRatio,
          isIntersecting: e.isIntersecting,
          isVisible: e.isVisible,
          time: e.time,
        }));
        this._iframeReady
          ? this.postMessageToIframe({ payload: t, type: a })
          : this._commandQueue.push([a, t]);
      };
      handleTabFocus = () => {
        this.postMessageToIframe({ payload: !0, type: h });
      };
      createGPTIframe() {
        (this._iframe = document.createElement("iframe")),
          this._iframe.setAttribute(
            "src",
            `https://s.yimg.com/aaq/benji-safe/2.2.12/gpt.html?o=${encodeURIComponent(e.location.origin)}`,
          ),
          (this._iframe.onload = () => {
            this.initIframe(), this.initPagei13n();
          }),
          (this._iframe.style.display = "none"),
          document.body.appendChild(this._iframe);
      }
      createIframes(e) {
        const { positions: t } = e;
        Object.keys(t).forEach((e) => {
          const t = document.getElementById(e);
          if (!t?.querySelector("iframe")) {
            this._observer?.observe(t);
            const n = document.createElement("iframe");
            n.setAttribute(
              "src",
              `https://s.yimg.com/aaq/benji-safe/2.2.12/sda.html?p=${e}`,
            ),
              n.setAttribute("scrolling", "no"),
              n.setAttribute("style", "border:0px;margin:0px;");
            (document.createElement("div").id = e), t?.appendChild(n);
          }
        });
      }
      init(t) {
        if ("undefined" != typeof window) {
          if (((this.config = t), !this._iframe)) {
            window.addEventListener("message", this.handlePostMessage),
              (this._observer = new IntersectionObserver(
                this.handleIntersection,
                { threshold: 0.5 },
              ));
            const { tabFocus: t } = this.config.setting.refresh;
            if (t) {
              const { outOfFocusDuration: n } = t;
              e.addEventListener(ae.tabFocus, this.handleTabFocus), bt(n);
            }
            this.createGPTIframe();
          }
          this.createIframes(t);
        }
      }
      initIframe() {
        this.postMessageToIframe({ payload: { config: this.config }, type: s });
      }
      initPagei13n() {
        this.postMessageToIframe({ payload: {}, type: r });
      }
      render(e) {
        this._iframeReady
          ? this.postMessageToIframe({ payload: { config: e }, type: c })
          : this._commandQueue.push([c, { config: e }]);
      }
      start(e) {
        this.init(e),
          this._iframeReady
            ? this.postMessageToIframe({ type: l })
            : this._commandQueue.push([l, { config: e }]);
      }
      postMessageToIframe(e) {
        this._iframe?.contentWindow?.postMessage(e, this.targetOrigin);
      }
    })(),
    To = new ls(),
    Ro = new (class {
      _taboola;
      axid;
      features;
      pageType;
      pageTypeValue;
      fetchCount;
      url;
      debounceTimer;
      collapseAds;
      newPageLoad;
      pageConfig;
      region;
      constructor() {
        return (
          (this.axid = void 0),
          (this.features = {}),
          (this.fetchCount = 0),
          (this._taboola = []),
          (this.pageType = void 0),
          (this.pageTypeValue = ""),
          (this.debounceTimer = null),
          (this.collapseAds = !1),
          (this.newPageLoad = !1),
          (this.pageConfig = {}),
          (this.region = ""),
          (this._onFailure = this._onFailure.bind(this)),
          void 0 !== e &&
            (e._taboola
              ? (this._taboola = e._taboola)
              : (e._taboola = this._taboola)),
          this
        );
      }
      create(...t) {
        this.fetchCount++;
        const [n] = t;
        if (!n) return;
        const {
            container: i,
            mode: s,
            placement: o,
            target_type: r,
            cseg: a,
            region: c,
          } = n,
          d = e.benji,
          l = d?.i13nStore?.currentI13n || {},
          { spaceid: h, pt: u } = l;
        if (((this.region = c), "viewer" === c)) {
          const e = window.location.href;
          this.sendPublisherURL(e);
          const t = Dt(l);
          this.sendPublisherBlob(t),
            u && this.updateTaboolaPageConfig(u.toString(), v);
        }
        const g = {
          container: i,
          mode: s,
          placement: o,
          target_type: r,
          ...(a && { cseg: a }),
        };
        if (this.collapseAds) {
          const e = document.getElementById(i);
          e && (e.style.display = "none");
        } else if (Ie.includes(Number(h))) {
          const e = document.getElementById(i),
            t = e && Ct(e);
          t && (t.style.display = "none");
        } else
          this._taboola.push(g),
            d.logger.sendDebugBeacon({
              container: i,
              mode: s,
              outcm: "taboolaDebug",
              placement: o,
              type: "init",
            }),
            1 === this.fetchCount && Di.call(d, "TABOOLA_FETCH_START_TIME");
      }
      destroy(e) {}
      render() {
        this.debounceTimer && clearTimeout(this.debounceTimer),
          (this.debounceTimer = setTimeout(() => {
            this._taboola.push(Qe);
          }, 100));
      }
      setupService(...t) {
        const [n, i, s] = t,
          { publisherId: o, pageType: r, pageTypeValue: a, url: c } = i;
        if (((this.features = n), !e || !r)) return;
        (this.pageType = r), (this.pageTypeValue = a ?? v), (this.url = c);
        const d = ((e) => {
          const t = encodeURIComponent(e);
          return M.replace(j, t);
        })(kt(o, s));
        Yi({
          async: !0,
          id: "taboola-script",
          onerrorCb: this._onFailure,
          onloadCb: this._onReady,
          tagSrc: d,
          WIN: e,
        });
        const l = e.benji,
          h = l?.i13nStore?.currentI13n,
          u = l?.config?.setting?.consent,
          g = u?.allowOnlyLimitedAds || u?.allowOnlyNonPersonalizedAds;
        this.axid = g ? this.axid : l.getAxid(it.TBLA);
        const p = h && Dt(h, this.axid),
          f = {
            cex: JSON.stringify(!!g),
            [this.pageType]: this.pageTypeValue,
            pblob: p,
          };
        this.axid && (f.unified_id = this.axid);
        const m =
          this.url &&
          ((e) => {
            try {
              const t = new URL(e);
              return t.origin + t.pathname;
            } catch (e) {
              return null;
            }
          })(this.url);
        if (m) {
          const e = { ...f, url: m };
          this._taboola.push(e), (this.pageConfig = e);
        } else this._taboola.push(f), (this.pageConfig = f);
      }
      addEventListener(e, t) {
        const n = { handler: t, listenTo: e };
        this._taboola.push(n);
      }
      sendPublisherBlob(e) {
        this._taboola.push({ pblob: e });
      }
      sendPublisherURL(e) {
        this._taboola.push({ pageType: this.pageTypeValue, url: e });
      }
      notify(e) {
        const t = { ...this.pageConfig, ...e };
        this._taboola.push(t), (this.newPageLoad = !0);
      }
      isNewPageLoad() {
        return this.newPageLoad;
      }
      updateTaboolaPageConfig(e, t) {
        if (e && ke.hasOwnProperty(e)) {
          const n = ke[e];
          this.pageType &&
            this.pageType !== n &&
            ((this.pageType = n),
            (this.pageTypeValue = t ?? v),
            this._taboola.push({ [n]: this.pageTypeValue }));
        }
      }
      _onFailure() {
        this.collapseAds = !0;
      }
      _onReady() {
        const t = e.benji;
        Di.call(t, "TABOOLA_READY");
      }
    })(),
    Lo = {
      gpt: vo,
      i13nStore: Io,
      logger: Ao,
      nts: Co,
      secureController: So,
      store: To,
      taboola: Ro,
      ypb: new ks(),
      on: function (e, t) {
        (function (e) {
          return (
            e === je ||
            e === Me ||
            e === Ue ||
            e === ze ||
            e === Fe ||
            e === xe ||
            e === Ge
          );
        })(e) && (Gt[e] || (Gt[e] = []), Gt[e].push(t));
      },
      start: function (t) {
        if (!t || !t.positions || !t.setting || 0 === Object.keys(t).length)
          return void console.warn(
            "Invalid config, config object should have positions and setting attributes",
          );
        if (!(e.YahooCJS?.didomiActive && e.YahooCJS?.isDidomiFlow()))
          return void po.call(this, t);
        const n = (e) => {
          const { region: n, usercountry: i } = t.i13n ?? {},
            s = this.getConsent({ region: n, usercountry: i }, e);
          (t.setting = { ...t.setting, consent: { ...s } }), po.call(this, t);
        };
        if (!!!e.YCJSDmi?.isConsented)
          return void document.addEventListener("cjsUserConsented", (e) => {
            const { consentData: t } = e.detail;
            n(t);
          });
        const i = uo();
        n(i);
      },
    };
  (Lo.render = ji),
    (Lo.refresh = function (e, t) {
      const n = vt(this, e);
      n?.forEach((e) => {
        (!t?.checkViewport || (t?.checkViewport && It(e?.id))) && e?.refresh();
      });
    }),
    (Lo.destroy = function (e) {
      const t = vt(this, e);
      t?.forEach((e) => {
        e?.destroy();
      });
    }),
    (Lo.getI13N = function (e) {
      const { axid: t, ...n } = this.i13nStore.getCurrent();
      if (void 0 === e) return n;
      if (!Array.isArray(e) || 0 === e.length) return;
      const i = {};
      return (
        e.forEach((e) => {
          "string" == typeof e && void 0 !== n[e] && (i[e] = n[e]);
        }),
        i
      );
    }),
    (Lo.updateI13N = function (e, t = []) {
      if (!e || "object" != typeof e) return;
      const n = this.i13nStore.getKeyDifferences(e);
      (Object.keys(n).length || t.length) &&
        (function (e, t, n) {
          const { gpt: i, taboola: s } = e,
            o = {};
          let r;
          t && t.url && ((r = t.url), i.setPageUrl(r)),
            Qi(Be, t, o),
            n &&
              n.length &&
              "string" != typeof n &&
              (n?.forEach((e) => {
                i.clearTargeting(e);
              }),
              e.i13nStore.clearKeysFromCurrent(n));
          const a = Tt(o, we);
          if (Object.keys(a).length > 0) {
            i.setTargeting(a);
            const n = e.i13nStore.currentI13n;
            e.i13nStore.updateCurrent(a);
            const o = e.i13nStore.currentI13n;
            if (s && "modal" === o.pd && "home" === n.pt) {
              let t = window.location.origin;
              const n = e.config.i13n.site;
              "https://www.yahoo.com" === t && "fp" !== n && (t = `${t}/${n}`),
                s.sendPublisherURL(t);
            }
            if (s && s.pageType && "modal" !== o.pd) {
              const e = Dt(o, s.axid);
              s.sendPublisherBlob(e), s.updateTaboolaPageConfig(t.pt, v);
            }
          }
        })(this, n, t);
    }),
    (Lo.getConsent = function (t, n) {
      const i = e.YahooCJS?.getJurisdictionInfo().isEU;
      return fo(n, { gdpr: i, ...t });
    }),
    (Lo.isReady = !1),
    (Lo.version = _o),
    (Lo.getAxid = function (t) {
      var n;
      this.i13nStore.getCurrent().axids ||
        this.i13nStore.updateCurrent({
          axids: ((n = e), io(n, "axids") || ""),
        });
      const i = this.i13nStore.getCurrent().axids,
        s = new URLSearchParams(i).get(t);
      return (
        s ||
        (t === it.GAM
          ? this.i13nStore.currentI13n.axid || ""
          : (t === it.DV360 && this.i13nStore.currentI13n.axidDv360) || "")
      );
    }),
    (Lo.notify = function (e) {
      const { taboola: t } = this;
      t && e && Je.includes(e.notify) && t.notify(e);
    });
  const wo = Lo;
  !(function () {
    if (e) {
      const t = e.benji?.config && Object.assign({}, e.benji?.config);
      (e.benji = wo),
        t && e.benji.start(t),
        ((e) => {
          const t = new CustomEvent(ae.benjiMounted);
          e.dispatchEvent(t);
        })(e);
    }
  })();
})();
//# sourceMappingURL=benji-2.2.12.js.map
