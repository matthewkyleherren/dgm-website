/*! CMP 7.0.0 Copyright 2018 Oath Holdings, Inc. */
!(function () {
  var e = {
      1040: function (e) {
        "use strict";
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        e.exports = function () {
          for (var e, n, i = [], r = window, o = r; o; ) {
            try {
              if (o.frames.__tcfapiLocator) {
                e = o;
                break;
              }
            } catch (e) {}
            if (o === r.top) break;
            o = o.parent;
          }
          e ||
            ((function e() {
              var t = r.document,
                n = !!r.frames.__tcfapiLocator;
              if (!n)
                if (t.body) {
                  var i = t.createElement("iframe");
                  (i.style.cssText = "display:none"),
                    (i.name = "__tcfapiLocator"),
                    t.body.appendChild(i);
                } else setTimeout(e, 5);
              return !n;
            })(),
            (r.__tcfapi = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              if (!t.length) return i;
              "setGdprApplies" === t[0]
                ? t.length > 3 &&
                  2 === parseInt(t[1], 10) &&
                  "boolean" == typeof t[3] &&
                  ((n = t[3]), "function" == typeof t[2] && t[2]("set", !0))
                : "ping" === t[0]
                  ? "function" == typeof t[2] &&
                    t[2]({ gdprApplies: n, cmpLoaded: !1, cmpStatus: "stub" })
                  : i.push(t);
            }),
            r.addEventListener(
              "message",
              function (e) {
                var n = "string" == typeof e.data,
                  i = {};
                if (n)
                  try {
                    i = JSON.parse(e.data);
                  } catch (e) {}
                else i = e.data;
                var r = "object" === t(i) && null !== i ? i.__tcfapiCall : null;
                r &&
                  window.__tcfapi(
                    r.command,
                    r.version,
                    function (t, i) {
                      var o = {
                        __tcfapiReturn: {
                          returnValue: t,
                          success: i,
                          callId: r.callId,
                        },
                      };
                      e &&
                        e.source &&
                        e.source.postMessage &&
                        e.source.postMessage(n ? JSON.stringify(o) : o, "*");
                    },
                    r.parameter,
                  );
              },
              !1,
            ));
        };
      },
      6033: function (e, t, n) {
        "use strict";
        n(9476);
        !window.document.documentMode && (n(1007), n(5385));
      },
      5385: function () {
        "use strict";
        (window.__gpp_addFrame = function (e) {
          if (!window.frames[e])
            if (document.body) {
              var t = document.createElement("iframe");
              (t.style.cssText = "display:none"),
                (t.name = e),
                document.body.appendChild(t);
            } else window.setTimeout(window.__gpp_addFrame, 10, e);
        }),
          (window.__gpp_stub = function () {
            var e = arguments;
            if (
              ((__gpp.queue = __gpp.queue || []),
              (__gpp.events = __gpp.events || []),
              !e.length || (1 == e.length && "queue" == e[0]))
            )
              return __gpp.queue;
            if (1 == e.length && "events" == e[0]) return __gpp.events;
            var t = e[0],
              n = e.length > 1 ? e[1] : null,
              i = e.length > 2 ? e[2] : null;
            if ("ping" === t)
              n(
                {
                  gppVersion: "1.1",
                  cmpStatus: "stub",
                  cmpDisplayStatus: "hidden",
                  signalStatus: "not ready",
                  supportedAPIs: [
                    "2:tcfeuv2",
                    "5:tcfcav1",
                    "6:uspv1",
                    "7:usnat",
                    "8:usca",
                    "9:usva",
                    "10:usco",
                    "11:usut",
                    "12:usct",
                  ],
                  cmpId: 0,
                  sectionList: [],
                  applicableSections: [],
                  gppString: "",
                  parsedSections: {},
                },
                !0,
              );
            else if ("addEventListener" === t) {
              "lastId" in __gpp || (__gpp.lastId = 0), __gpp.lastId++;
              var r = __gpp.lastId;
              __gpp.events.push({ id: r, callback: n, parameter: i }),
                n(
                  {
                    eventName: "listenerRegistered",
                    listenerId: r,
                    data: !0,
                    pingData: {
                      gppVersion: "1.1",
                      cmpStatus: "stub",
                      cmpDisplayStatus: "hidden",
                      signalStatus: "not ready",
                      supportedAPIs: [
                        "2:tcfeuv2",
                        "5:tcfcav1",
                        "6:uspv1",
                        "7:usnat",
                        "8:usca",
                        "9:usva",
                        "10:usco",
                        "11:usut",
                        "12:usct",
                      ],
                      cmpId: 0,
                      sectionList: [],
                      applicableSections: [],
                      gppString: "",
                      parsedSections: {},
                    },
                  },
                  !0,
                );
            } else if ("removeEventListener" === t) {
              for (var o = !1, s = 0; s < __gpp.events.length; s++)
                if (__gpp.events[s].id == i) {
                  __gpp.events.splice(s, 1), (o = !0);
                  break;
                }
              n(
                {
                  eventName: "listenerRemoved",
                  listenerId: i,
                  data: o,
                  pingData: {
                    gppVersion: "1.1",
                    cmpStatus: "stub",
                    cmpDisplayStatus: "hidden",
                    signalStatus: "not ready",
                    supportedAPIs: [
                      "2:tcfeuv2",
                      "5:tcfcav1",
                      "6:uspv1",
                      "7:usnat",
                      "8:usca",
                      "9:usva",
                      "10:usco",
                      "11:usut",
                      "12:usct",
                    ],
                    cmpId: 0,
                    sectionList: [],
                    applicableSections: [],
                    gppString: "",
                    parsedSections: {},
                  },
                },
                !0,
              );
            } else
              "hasSection" === t
                ? n(!1, !0)
                : "getSection" === t || "getField" === t
                  ? n(null, !0)
                  : __gpp.queue.push([].slice.apply(e));
          }),
          (window.__gpp_msghandler = function (e) {
            var t = "string" == typeof e.data;
            try {
              var n = t ? JSON.parse(e.data) : e.data;
            } catch (e) {
              n = null;
            }
            if ("object" == typeof n && null !== n && "__gppCall" in n) {
              var i = n.__gppCall;
              window.__gpp(
                i.command,
                function (n, r) {
                  var o = {
                    __gppReturn: {
                      returnValue: n,
                      success: r,
                      callId: i.callId,
                    },
                  };
                  e.source.postMessage(t ? JSON.stringify(o) : o, "*");
                },
                "parameter" in i ? i.parameter : null,
                "version" in i ? i.version : "1.1",
              );
            }
          }),
          ("__gpp" in window && "function" == typeof window.__gpp) ||
            ((window.__gpp = window.__gpp_stub),
            window.addEventListener("message", window.__gpp_msghandler, !1),
            window.__gpp_addFrame("__gppLocator"));
      },
      1007: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(1040);
        n.n(i)()();
      },
      9476: function () {
        !(function () {
          for (
            var e,
              t = "__uspapiLocator",
              n = [],
              i = function () {
                var e = window.document;
                if (!window.frames[t])
                  if (e.body) {
                    var n = e.createElement("iframe");
                    (n.style.cssText = "display:none"),
                      (n.name = t),
                      e.body.appendChild(n);
                  } else setTimeout(i, 5);
              },
              r = window;
            r;

          ) {
            try {
              if (r.frames[t]) {
                e = r;
                break;
              }
            } catch (e) {}
            if (r === window.top) break;
            r = r.parent;
          }
          e ||
            (i(),
            (window.__uspapi = function () {
              for (
                var e = arguments.length, t = new Array(e), i = 0;
                i < e;
                i++
              )
                t[i] = arguments[i];
              if (!t.length) return n;
              n.push(t);
            }),
            window.addEventListener(
              "message",
              function (e) {
                var t = "string" == typeof e.data,
                  n = {};
                try {
                  n = t ? JSON.parse(e.data) : e.data;
                } catch (e) {}
                var i = n.__uspapiCall;
                i &&
                  window.__uspapi(
                    i.command,
                    i.version,
                    function (n, r) {
                      var o = {
                        __uspapiReturn: {
                          returnValue: n,
                          success: r,
                          callId: i.callId,
                        },
                      };
                      t && (o = JSON.stringify(o)),
                        e && e.source && e.source.postMessage(o, "*");
                    },
                    i.parameter,
                  );
              },
              !1,
            ));
        })();
      },
      6961: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function s(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CmpApi = void 0);
        const r = n(5993),
          o = n(8444),
          s = n(3130),
          a = n(2552);
        t.CmpApi = class {
          constructor(e, t, n) {
            (this.cmpApiContext = new r.CmpApiContext()),
              (this.cmpApiContext.cmpId = e),
              (this.cmpApiContext.cmpVersion = t),
              (this.callResponder = new o.CallResponder(this.cmpApiContext, n));
          }
          fireEvent(e, t) {
            this.cmpApiContext.eventQueue.exec(e, t);
          }
          fireErrorEvent(e) {
            this.cmpApiContext.eventQueue.exec("error", e);
          }
          fireSectionChange(e) {
            this.cmpApiContext.eventQueue.exec("sectionChange", e);
          }
          getEventStatus() {
            return this.cmpApiContext.eventStatus;
          }
          setEventStatus(e) {
            this.cmpApiContext.eventStatus = e;
          }
          getCmpStatus() {
            return this.cmpApiContext.cmpStatus;
          }
          setCmpStatus(e) {
            (this.cmpApiContext.cmpStatus = e),
              this.cmpApiContext.eventQueue.exec("cmpStatus", e);
          }
          getCmpDisplayStatus() {
            return this.cmpApiContext.cmpDisplayStatus;
          }
          setCmpDisplayStatus(e) {
            (this.cmpApiContext.cmpDisplayStatus = e),
              this.cmpApiContext.eventQueue.exec("cmpDisplayStatus", e);
          }
          getSignalStatus() {
            return this.cmpApiContext.signalStatus;
          }
          setSignalStatus(e) {
            (this.cmpApiContext.signalStatus = e),
              this.cmpApiContext.eventQueue.exec("signalStatus", e);
          }
          getApplicableSections() {
            return this.cmpApiContext.applicableSections;
          }
          setApplicableSections(e) {
            this.cmpApiContext.applicableSections = e;
          }
          getSupportedAPIs() {
            return this.cmpApiContext.supportedAPIs;
          }
          setSupportedAPIs(e) {
            this.cmpApiContext.supportedAPIs = e;
          }
          setGppString(e) {
            this.cmpApiContext.gppModel.decode(e);
          }
          getGppString() {
            return this.cmpApiContext.gppModel.encode();
          }
          setSectionString(e, t) {
            this.cmpApiContext.gppModel.decodeSection(e, t);
          }
          setSectionStringById(e, t) {
            this.setSectionString(a.Sections.SECTION_ID_NAME_MAP.get(e), t);
          }
          getSectionString(e) {
            return this.cmpApiContext.gppModel.encodeSection(e);
          }
          getSectionStringById(e) {
            return this.getSectionString(a.Sections.SECTION_ID_NAME_MAP.get(e));
          }
          setFieldValue(e, t, n) {
            this.cmpApiContext.gppModel.setFieldValue(e, t, n);
          }
          setFieldValueBySectionId(e, t, n) {
            this.setFieldValue(a.Sections.SECTION_ID_NAME_MAP.get(e), t, n);
          }
          getFieldValue(e, t) {
            return this.cmpApiContext.gppModel.getFieldValue(e, t);
          }
          getFieldValueBySectionId(e, t) {
            return this.getFieldValue(a.Sections.SECTION_ID_NAME_MAP.get(e), t);
          }
          getSection(e) {
            return this.cmpApiContext.gppModel.getSection(e);
          }
          getSectionById(e) {
            return this.getSection(a.Sections.SECTION_ID_NAME_MAP.get(e));
          }
          hasSection(e) {
            return this.cmpApiContext.gppModel.hasSection(e);
          }
          hasSectionId(e) {
            return this.hasSection(a.Sections.SECTION_ID_NAME_MAP.get(e));
          }
          deleteSection(e) {
            this.cmpApiContext.gppModel.deleteSection(e);
          }
          deleteSectionById(e) {
            this.deleteSection(a.Sections.SECTION_ID_NAME_MAP.get(e));
          }
          clear() {
            this.cmpApiContext.gppModel.clear();
          }
          getObject() {
            return this.cmpApiContext.gppModel.toObject();
          }
          getGvlFromVendorList(e) {
            return s.GVL.fromVendorList(e);
          }
          getGvlFromUrl(e) {
            return i(this, void 0, void 0, function* () {
              return s.GVL.fromUrl(e);
            });
          }
        };
      },
      3130: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function s(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GVL = t.GVLUrlConfig = void 0);
        const r = n(5056),
          o = n(3497),
          s = n(7737);
        t.GVLUrlConfig = class {};
        class a {
          constructor() {
            (this.consentLanguages = new s.ConsentLanguages()),
              (this.language = a.DEFAULT_LANGUAGE),
              (this.ready = !1),
              (this.languageFilename = "purposes-[LANG].json");
          }
          static fromVendorList(e) {
            let t = new a();
            return t.populate(e), t;
          }
          static fromUrl(e) {
            return i(this, void 0, void 0, function* () {
              let t = e.baseUrl;
              if (!t || 0 === t.length)
                throw new o.GVLError("Invalid baseUrl: '" + t + "'");
              if (/^https?:\/\/vendorlist\.consensu\.org\//.test(t))
                throw new o.GVLError(
                  "Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache",
                );
              t.length > 0 && "/" !== t[t.length - 1] && (t += "/");
              let n = new a();
              if (
                ((n.baseUrl = t),
                e.languageFilename
                  ? (n.languageFilename = e.languageFilename)
                  : (n.languageFilename = "purposes-[LANG].json"),
                e.version > 0)
              ) {
                let i = e.versionedFilename;
                i || (i = "archives/vendor-list-v[VERSION].json");
                let o = t + i.replace("[VERSION]", String(e.version));
                n.populate(yield r.JsonHttpClient.fetch(o));
              } else {
                let i = e.latestFilename;
                i || (i = "vendor-list.json");
                let o = t + i;
                n.populate(yield r.JsonHttpClient.fetch(o));
              }
              return n;
            });
          }
          changeLanguage(e) {
            return i(this, void 0, void 0, function* () {
              const t = e.toUpperCase();
              if (!this.consentLanguages.has(t))
                throw new o.GVLError(`unsupported language ${e}`);
              if (t !== this.language) {
                this.language = t;
                const n =
                  this.baseUrl + this.languageFilename.replace("[LANG]", e);
                try {
                  this.populate(yield r.JsonHttpClient.fetch(n));
                } catch (e) {
                  throw new o.GVLError("unable to load language: " + e.message);
                }
              }
            });
          }
          getJson() {
            return JSON.parse(
              JSON.stringify({
                gvlSpecificationVersion: this.gvlSpecificationVersion,
                vendorListVersion: this.vendorListVersion,
                tcfPolicyVersion: this.tcfPolicyVersion,
                lastUpdated: this.lastUpdated,
                purposes: this.purposes,
                specialPurposes: this.specialPurposes,
                features: this.features,
                specialFeatures: this.specialFeatures,
                stacks: this.stacks,
                dataCategories: this.dataCategories,
                vendors: this.fullVendorList,
              }),
            );
          }
          isVendorList(e) {
            return void 0 !== e && void 0 !== e.vendors;
          }
          populate(e) {
            (this.purposes = e.purposes),
              (this.specialPurposes = e.specialPurposes),
              (this.features = e.features),
              (this.specialFeatures = e.specialFeatures),
              (this.stacks = e.stacks),
              (this.dataCategories = e.dataCategories),
              this.isVendorList(e) &&
                ((this.gvlSpecificationVersion = e.gvlSpecificationVersion),
                (this.tcfPolicyVersion = e.tcfPolicyVersion),
                (this.vendorListVersion = e.vendorListVersion),
                (this.lastUpdated = e.lastUpdated),
                "string" == typeof this.lastUpdated &&
                  (this.lastUpdated = new Date(this.lastUpdated)),
                (this.vendors = e.vendors),
                (this.fullVendorList = e.vendors),
                this.mapVendors(),
                (this.ready = !0));
          }
          mapVendors(e) {
            (this.byPurposeVendorMap = {}),
              (this.bySpecialPurposeVendorMap = {}),
              (this.byFeatureVendorMap = {}),
              (this.bySpecialFeatureVendorMap = {}),
              Object.keys(this.purposes).forEach((e) => {
                this.byPurposeVendorMap[e] = {
                  legInt: new Set(),
                  impCons: new Set(),
                  consent: new Set(),
                  flexible: new Set(),
                };
              }),
              Object.keys(this.specialPurposes).forEach((e) => {
                this.bySpecialPurposeVendorMap[e] = new Set();
              }),
              Object.keys(this.features).forEach((e) => {
                this.byFeatureVendorMap[e] = new Set();
              }),
              Object.keys(this.specialFeatures).forEach((e) => {
                this.bySpecialFeatureVendorMap[e] = new Set();
              }),
              Array.isArray(e) ||
                (e = Object.keys(this.fullVendorList).map((e) => +e)),
              (this.vendorIds = new Set(e)),
              (this.vendors = e.reduce((e, t) => {
                const n = this.vendors[String(t)];
                return (
                  n &&
                    void 0 === n.deletedDate &&
                    (n.purposes.forEach((e) => {
                      this.byPurposeVendorMap[String(e)].consent.add(t);
                    }),
                    n.specialPurposes.forEach((e) => {
                      this.bySpecialPurposeVendorMap[String(e)].add(t);
                    }),
                    n.legIntPurposes &&
                      n.legIntPurposes.forEach((e) => {
                        this.byPurposeVendorMap[String(e)].legInt.add(t);
                      }),
                    n.impConsPurposes &&
                      n.impConsPurposes.forEach((e) => {
                        this.byPurposeVendorMap[String(e)].impCons.add(t);
                      }),
                    n.flexiblePurposes &&
                      n.flexiblePurposes.forEach((e) => {
                        this.byPurposeVendorMap[String(e)].flexible.add(t);
                      }),
                    n.features.forEach((e) => {
                      this.byFeatureVendorMap[String(e)].add(t);
                    }),
                    n.specialFeatures.forEach((e) => {
                      this.bySpecialFeatureVendorMap[String(e)].add(t);
                    }),
                    (e[t] = n)),
                  e
                );
              }, {}));
          }
          getFilteredVendors(e, t, n, i) {
            const r = e.charAt(0).toUpperCase() + e.slice(1);
            let o;
            const s = {};
            return (
              (o =
                "purpose" === e && n
                  ? this["by" + r + "VendorMap"][String(t)][n]
                  : this["by" + (i ? "Special" : "") + r + "VendorMap"][
                      String(t)
                    ]),
              o.forEach((e) => {
                s[String(e)] = this.vendors[String(e)];
              }),
              s
            );
          }
          getVendorsWithConsentPurpose(e) {
            return this.getFilteredVendors("purpose", e, "consent");
          }
          getVendorsWithLegIntPurpose(e) {
            return this.getFilteredVendors("purpose", e, "legInt");
          }
          getVendorsWithFlexiblePurpose(e) {
            return this.getFilteredVendors("purpose", e, "flexible");
          }
          getVendorsWithSpecialPurpose(e) {
            return this.getFilteredVendors("purpose", e, void 0, !0);
          }
          getVendorsWithFeature(e) {
            return this.getFilteredVendors("feature", e);
          }
          getVendorsWithSpecialFeature(e) {
            return this.getFilteredVendors("feature", e, void 0, !0);
          }
          narrowVendorsTo(e) {
            this.mapVendors(e);
          }
          get isReady() {
            return this.ready;
          }
          static isInstanceOf(e) {
            return (
              "object" == typeof e && "function" == typeof e.narrowVendorsTo
            );
          }
        }
        (t.GVL = a), (a.DEFAULT_LANGUAGE = "EN");
      },
      8444: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CallResponder = void 0);
        const i = n(2580),
          r = n(5827);
        t.CallResponder = class {
          constructor(e, t) {
            if (((this.cmpApiContext = e), t)) {
              let e = i.GppCommand.ADD_EVENT_LISTENER;
              if (null == t ? void 0 : t[e])
                throw new Error(
                  `Built-In Custom Commmand for ${e} not allowed`,
                );
              if (
                ((e = i.GppCommand.REMOVE_EVENT_LISTENER),
                null == t ? void 0 : t[e])
              )
                throw new Error(
                  `Built-In Custom Commmand for ${e} not allowed`,
                );
              this.customCommands = t;
            }
            try {
              this.callQueue = window.__gpp() || [];
            } catch (e) {
              this.callQueue = [];
            } finally {
              (window.__gpp = this.apiCall.bind(this)), this.purgeQueuedCalls();
            }
          }
          apiCall(e, t, n, i) {
            if ("string" != typeof e) t(null, !1);
            else {
              if (t && "function" != typeof t)
                throw new Error("invalid callback function");
              this.isCustomCommand(e)
                ? this.customCommands[e](t, n)
                : this.isBuiltInCommand(e)
                  ? new r.CommandMap[e](this.cmpApiContext, t, n).execute()
                  : t && t(null, !1);
            }
          }
          purgeQueuedCalls() {
            const e = this.callQueue;
            (this.callQueue = []),
              e.forEach((e) => {
                window.__gpp(...e);
              });
          }
          isCustomCommand(e) {
            return (
              this.customCommands && "function" == typeof this.customCommands[e]
            );
          }
          isBuiltInCommand(e) {
            return void 0 !== r.CommandMap[e];
          }
        };
      },
      5993: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CmpApiContext = void 0);
        const i = n(8947),
          r = n(1237),
          o = n(4175),
          s = n(4694),
          a = n(119);
        t.CmpApiContext = class {
          constructor() {
            (this.gppVersion = "1.1"),
              (this.supportedAPIs = []),
              (this.eventQueue = new o.EventListenerQueue(this)),
              (this.cmpStatus = i.CmpStatus.LOADING),
              (this.cmpDisplayStatus = r.CmpDisplayStatus.HIDDEN),
              (this.signalStatus = a.SignalStatus.NOT_READY),
              (this.applicableSections = []),
              (this.gppModel = new s.GppModel());
          }
          reset() {
            this.eventQueue.clear(),
              (this.cmpStatus = i.CmpStatus.LOADING),
              (this.cmpDisplayStatus = r.CmpDisplayStatus.HIDDEN),
              (this.signalStatus = a.SignalStatus.NOT_READY),
              (this.applicableSections = []),
              (this.supportedAPIs = []),
              (this.gppModel = new s.GppModel()),
              delete this.cmpId,
              delete this.cmpVersion,
              delete this.eventStatus;
          }
        };
      },
      73: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4175: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EventListenerQueue = void 0);
        const i = n(100),
          r = n(3202);
        t.EventListenerQueue = class {
          constructor(e) {
            (this.eventQueue = new Map()),
              (this.queueNumber = 1e3),
              (this.cmpApiContext = e);
            try {
              let e = window.__gpp("events") || [];
              for (var t = 0; t < e.length; t++) {
                let n = e[t];
                this.eventQueue.set(n.id, {
                  callback: n.callback,
                  parameter: n.parameter,
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
          add(e) {
            return this.eventQueue.set(this.queueNumber, e), this.queueNumber++;
          }
          get(e) {
            return this.eventQueue.get(e);
          }
          remove(e) {
            return this.eventQueue.delete(e);
          }
          exec(e, t) {
            this.eventQueue.forEach((n, o) => {
              let s = new i.EventData(
                e,
                o,
                t,
                new r.PingData(this.cmpApiContext),
              );
              n.callback(s, !0);
            });
          }
          clear() {
            (this.queueNumber = 1e3), this.eventQueue.clear();
          }
          get size() {
            return this.eventQueue.size;
          }
        };
      },
      7526: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AddEventListenerCommand = void 0);
        const i = n(100),
          r = n(3202),
          o = n(3717);
        class s extends o.Command {
          respond() {
            let e = this.cmpApiContext.eventQueue.add({
                callback: this.callback,
                parameter: this.parameter,
              }),
              t = new i.EventData(
                "listenerRegistered",
                e,
                !0,
                new r.PingData(this.cmpApiContext),
              );
            this.invokeCallback(t);
          }
        }
        t.AddEventListenerCommand = s;
      },
      3717: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Command = void 0);
        t.Command = class {
          constructor(e, t, n) {
            (this.success = !0),
              (this.cmpApiContext = e),
              Object.assign(this, { callback: t, parameter: n });
          }
          execute() {
            try {
              return this.respond();
            } catch (e) {
              return this.invokeCallback(null), null;
            }
          }
          invokeCallback(e) {
            const t = null !== e;
            this.callback && this.callback(e, t);
          }
        };
      },
      4134: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5827: function (e, t, n) {
        "use strict";
        var i, r, o, s, a, c;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CommandMap = void 0);
        const d = n(4257),
          l = n(937),
          u = n(48),
          E = n(9524),
          p = n(2580),
          g = n(7526),
          _ = n(6587);
        class S {}
        (t.CommandMap = S),
          (i = p.GppCommand.ADD_EVENT_LISTENER),
          (r = p.GppCommand.GET_FIELD),
          (o = p.GppCommand.GET_SECTION),
          (s = p.GppCommand.HAS_SECTION),
          (a = p.GppCommand.PING),
          (c = p.GppCommand.REMOVE_EVENT_LISTENER),
          (S[i] = g.AddEventListenerCommand),
          (S[r] = l.GetFieldCommand),
          (S[o] = u.GetSectionCommand),
          (S[s] = E.HasSectionCommand),
          (S[a] = d.PingCommand),
          (S[c] = _.RemoveEventListenerCommand);
      },
      937: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GetFieldCommand = void 0);
        const i = n(3717);
        class r extends i.Command {
          respond() {
            if (!this.parameter || 0 === this.parameter.length)
              throw new Error("<section>.<field> parameter required");
            let e = this.parameter.split(".");
            if (2 != e.length)
              throw new Error(
                "Field name must be in the format <section>.<fieldName>",
              );
            let t = e[0],
              n = e[1],
              i = this.cmpApiContext.gppModel.getFieldValue(t, n);
            this.invokeCallback(i);
          }
        }
        t.GetFieldCommand = r;
      },
      48: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GetSectionCommand = void 0);
        const i = n(3717);
        class r extends i.Command {
          respond() {
            if (!this.parameter || 0 === this.parameter.length)
              throw new Error("<section> parameter required");
            let e = null;
            this.cmpApiContext.gppModel.hasSection(this.parameter) &&
              (e = this.cmpApiContext.gppModel.getSection(this.parameter)),
              this.invokeCallback(e);
          }
        }
        t.GetSectionCommand = r;
      },
      2580: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GppCommand = void 0),
          ((n = t.GppCommand || (t.GppCommand = {})).ADD_EVENT_LISTENER =
            "addEventListener"),
          (n.GET_FIELD = "getField"),
          (n.GET_SECTION = "getSection"),
          (n.HAS_SECTION = "hasSection"),
          (n.PING = "ping"),
          (n.REMOVE_EVENT_LISTENER = "removeEventListener");
      },
      9524: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HasSectionCommand = void 0);
        const i = n(3717);
        class r extends i.Command {
          respond() {
            if (!this.parameter || 0 === this.parameter.length)
              throw new Error("<section>[.version] parameter required");
            let e = this.cmpApiContext.gppModel.hasSection(this.parameter);
            this.invokeCallback(e);
          }
        }
        t.HasSectionCommand = r;
      },
      4257: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PingCommand = void 0);
        const i = n(3202),
          r = n(3717);
        class o extends r.Command {
          respond() {
            let e = new i.PingData(this.cmpApiContext);
            this.invokeCallback(e);
          }
        }
        t.PingCommand = o;
      },
      6587: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RemoveEventListenerCommand = void 0);
        const i = n(100),
          r = n(3202),
          o = n(3717);
        class s extends o.Command {
          respond() {
            let e = this.parameter,
              t = this.cmpApiContext.eventQueue.remove(e),
              n = new i.EventData(
                "listenerRemoved",
                e,
                t,
                new r.PingData(this.cmpApiContext),
              );
            this.invokeCallback(n);
          }
        }
        t.RemoveEventListenerCommand = s;
      },
      2480: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(7526), t),
          r(n(3717), t),
          r(n(4134), t),
          r(n(5827), t),
          r(n(937), t),
          r(n(48), t),
          r(n(2580), t),
          r(n(9524), t),
          r(n(4257), t),
          r(n(6587), t);
      },
      6106: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(2480), t),
          r(n(2048), t),
          r(n(3365), t),
          r(n(8444), t),
          r(n(5993), t),
          r(n(73), t),
          r(n(4175), t);
      },
      100: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EventData = void 0);
        t.EventData = class {
          constructor(e, t, n, i) {
            (this.eventName = e),
              (this.listenerId = t),
              (this.data = n),
              (this.pingData = i);
          }
        };
      },
      3202: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PingData = void 0);
        t.PingData = class {
          constructor(e) {
            (this.gppVersion = e.gppVersion),
              (this.cmpStatus = e.cmpStatus),
              (this.cmpDisplayStatus = e.cmpDisplayStatus),
              (this.signalStatus = e.signalStatus),
              (this.supportedAPIs = e.supportedAPIs),
              (this.cmpId = e.cmpId),
              (this.sectionList = e.gppModel.getSectionIds()),
              (this.applicableSections = e.applicableSections),
              (this.gppString = e.gppModel.encode()),
              (this.parsedSections = e.gppModel.toObject());
          }
        };
      },
      2048: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(100), t),
          r(n(3202), t);
      },
      1237: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CmpDisplayStatus = void 0),
          ((n = t.CmpDisplayStatus || (t.CmpDisplayStatus = {})).VISIBLE =
            "visible"),
          (n.HIDDEN = "hidden"),
          (n.DISABLED = "disabled");
      },
      8947: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CmpStatus = void 0),
          ((n = t.CmpStatus || (t.CmpStatus = {})).STUB = "stub"),
          (n.LOADING = "loading"),
          (n.LOADED = "loaded"),
          (n.ERROR = "error");
      },
      2403: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EventStatus = void 0),
          ((n = t.EventStatus || (t.EventStatus = {})).GPP_LOADED =
            "gpploaded"),
          (n.CMP_UI_SHOWN = "cmpuishown"),
          (n.USER_ACTION_COMPLETE = "useractioncomplete");
      },
      119: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SignalStatus = void 0),
          ((n = t.SignalStatus || (t.SignalStatus = {})).NOT_READY =
            "not ready"),
          (n.READY = "ready");
      },
      3365: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(8947), t),
          r(n(1237), t),
          r(n(2403), t),
          r(n(119), t);
      },
      4694: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GppModel = void 0);
        const i = n(4288),
          r = n(2552),
          o = n(5570),
          s = n(7249),
          a = n(3047),
          c = n(4161),
          d = n(8420),
          l = n(5977),
          u = n(1690),
          E = n(8913),
          p = n(863),
          g = n(4526),
          _ = n(7017),
          S = n(2849),
          h = n(9088),
          f = n(7370),
          O = n(7642),
          T = n(4617);
        t.GppModel = class {
          constructor(e) {
            (this.sections = new Map()),
              (this.encodedString = null),
              (this.decoded = !0),
              (this.dirty = !1),
              e && this.decode(e);
          }
          setFieldValue(e, t, n) {
            this.decoded ||
              ((this.sections = this.decodeModel(this.encodedString)),
              (this.dirty = !1),
              (this.decoded = !0));
            let i = null;
            if (
              (this.sections.has(e)
                ? (i = this.sections.get(e))
                : e === o.TcfCaV1.NAME
                  ? ((i = new o.TcfCaV1()),
                    this.sections.set(o.TcfCaV1.NAME, i))
                  : e === s.TcfEuV2.NAME
                    ? ((i = new s.TcfEuV2()),
                      this.sections.set(s.TcfEuV2.NAME, i))
                    : e === a.UspV1.NAME
                      ? ((i = new a.UspV1()),
                        this.sections.set(a.UspV1.NAME, i))
                      : e === c.UsNat.NAME
                        ? ((i = new c.UsNat()),
                          this.sections.set(c.UsNat.NAME, i))
                        : e === d.UsCa.NAME
                          ? ((i = new d.UsCa()),
                            this.sections.set(d.UsCa.NAME, i))
                          : e === l.UsVa.NAME
                            ? ((i = new l.UsVa()),
                              this.sections.set(l.UsVa.NAME, i))
                            : e === u.UsCo.NAME
                              ? ((i = new u.UsCo()),
                                this.sections.set(u.UsCo.NAME, i))
                              : e === E.UsUt.NAME
                                ? ((i = new E.UsUt()),
                                  this.sections.set(E.UsUt.NAME, i))
                                : e === p.UsCt.NAME
                                  ? ((i = new p.UsCt()),
                                    this.sections.set(p.UsCt.NAME, i))
                                  : e === g.UsFl.NAME
                                    ? ((i = new g.UsFl()),
                                      this.sections.set(g.UsFl.NAME, i))
                                    : e === _.UsMt.NAME
                                      ? ((i = new _.UsMt()),
                                        this.sections.set(_.UsMt.NAME, i))
                                      : e === S.UsOr.NAME
                                        ? ((i = new S.UsOr()),
                                          this.sections.set(S.UsOr.NAME, i))
                                        : e === h.UsTx.NAME &&
                                          ((i = new h.UsTx()),
                                          this.sections.set(h.UsTx.NAME, i)),
              !i)
            )
              throw new f.InvalidFieldError(e + "." + t + " not found");
            i.setFieldValue(t, n), (this.dirty = !0);
          }
          setFieldValueBySectionId(e, t, n) {
            this.setFieldValue(r.Sections.SECTION_ID_NAME_MAP.get(e), t, n);
          }
          getFieldValue(e, t) {
            return (
              this.decoded ||
                ((this.sections = this.decodeModel(this.encodedString)),
                (this.dirty = !1),
                (this.decoded = !0)),
              this.sections.has(e)
                ? this.sections.get(e).getFieldValue(t)
                : null
            );
          }
          getFieldValueBySectionId(e, t) {
            return this.getFieldValue(r.Sections.SECTION_ID_NAME_MAP.get(e), t);
          }
          hasField(e, t) {
            return (
              this.decoded ||
                ((this.sections = this.decodeModel(this.encodedString)),
                (this.dirty = !1),
                (this.decoded = !0)),
              !!this.sections.has(e) && this.sections.get(e).hasField(t)
            );
          }
          hasFieldBySectionId(e, t) {
            return this.hasField(r.Sections.SECTION_ID_NAME_MAP.get(e), t);
          }
          hasSection(e) {
            return (
              this.decoded ||
                ((this.sections = this.decodeModel(this.encodedString)),
                (this.dirty = !1),
                (this.decoded = !0)),
              this.sections.has(e)
            );
          }
          hasSectionId(e) {
            return this.hasSection(r.Sections.SECTION_ID_NAME_MAP.get(e));
          }
          deleteSection(e) {
            !this.decoded &&
              null != this.encodedString &&
              this.encodedString.length > 0 &&
              this.decode(this.encodedString),
              this.sections.delete(e),
              (this.dirty = !0);
          }
          deleteSectionById(e) {
            this.deleteSection(r.Sections.SECTION_ID_NAME_MAP.get(e));
          }
          clear() {
            this.sections.clear(),
              (this.encodedString = "DBAA"),
              (this.decoded = !1),
              (this.dirty = !1);
          }
          getHeader() {
            this.decoded ||
              ((this.sections = this.decodeModel(this.encodedString)),
              (this.dirty = !1),
              (this.decoded = !0));
            let e = new i.HeaderV1();
            return (
              e.setFieldValue("SectionIds", this.getSectionIds()), e.toObj()
            );
          }
          getSection(e) {
            return (
              this.decoded ||
                ((this.sections = this.decodeModel(this.encodedString)),
                (this.dirty = !1),
                (this.decoded = !0)),
              this.sections.has(e) ? this.sections.get(e).toObj() : null
            );
          }
          getSectionIds() {
            this.decoded ||
              ((this.sections = this.decodeModel(this.encodedString)),
              (this.dirty = !1),
              (this.decoded = !0));
            let e = [];
            for (let t = 0; t < r.Sections.SECTION_ORDER.length; t++) {
              let n = r.Sections.SECTION_ORDER[t];
              if (this.sections.has(n)) {
                let t = this.sections.get(n);
                e.push(t.getId());
              }
            }
            return e;
          }
          encodeModel(e) {
            let t = [],
              n = [];
            for (let i = 0; i < r.Sections.SECTION_ORDER.length; i++) {
              let o = r.Sections.SECTION_ORDER[i];
              if (e.has(o)) {
                let i = e.get(o);
                t.push(i.encode()), n.push(i.getId());
              }
            }
            let o = new i.HeaderV1();
            return (
              o.setFieldValue("SectionIds", n),
              t.unshift(o.encode()),
              t.join("~")
            );
          }
          decodeModel(e) {
            if (!e || 0 == e.length || e.startsWith("DB")) {
              let t = e.split("~"),
                n = new Map();
              if (t[0].startsWith("D")) {
                let r = new i.HeaderV1(t[0]).getFieldValue("SectionIds");
                if (r.length !== t.length - 1)
                  throw new O.DecodingError(
                    "Unable to decode '" +
                      e +
                      "'. The number of sections does not match the number of sections defined in the header.",
                  );
                for (let i = 0; i < r.length; i++) {
                  if ("" === t[i + 1].trim())
                    throw new O.DecodingError(
                      "Unable to decode '" +
                        e +
                        "'. Section " +
                        (i + 1) +
                        " is blank.",
                    );
                  if (r[i] === o.TcfCaV1.ID) {
                    let e = new o.TcfCaV1(t[i + 1]);
                    n.set(o.TcfCaV1.NAME, e);
                  } else if (r[i] === s.TcfEuV2.ID) {
                    let e = new s.TcfEuV2(t[i + 1]);
                    n.set(s.TcfEuV2.NAME, e);
                  } else if (r[i] === a.UspV1.ID) {
                    let e = new a.UspV1(t[i + 1]);
                    n.set(a.UspV1.NAME, e);
                  } else if (r[i] === c.UsNat.ID) {
                    let e = new c.UsNat(t[i + 1]);
                    n.set(c.UsNat.NAME, e);
                  } else if (r[i] === d.UsCa.ID) {
                    let e = new d.UsCa(t[i + 1]);
                    n.set(d.UsCa.NAME, e);
                  } else if (r[i] === l.UsVa.ID) {
                    let e = new l.UsVa(t[i + 1]);
                    n.set(l.UsVa.NAME, e);
                  } else if (r[i] === u.UsCo.ID) {
                    let e = new u.UsCo(t[i + 1]);
                    n.set(u.UsCo.NAME, e);
                  } else if (r[i] === E.UsUt.ID) {
                    let e = new E.UsUt(t[i + 1]);
                    n.set(E.UsUt.NAME, e);
                  } else if (r[i] === p.UsCt.ID) {
                    let e = new p.UsCt(t[i + 1]);
                    n.set(p.UsCt.NAME, e);
                  } else if (r[i] === g.UsFl.ID) {
                    let e = new g.UsFl(t[i + 1]);
                    n.set(g.UsFl.NAME, e);
                  } else if (r[i] === _.UsMt.ID) {
                    let e = new _.UsMt(t[i + 1]);
                    n.set(_.UsMt.NAME, e);
                  } else if (r[i] === S.UsOr.ID) {
                    let e = new S.UsOr(t[i + 1]);
                    n.set(S.UsOr.NAME, e);
                  } else if (r[i] === h.UsTx.ID) {
                    let e = new h.UsTx(t[i + 1]);
                    n.set(h.UsTx.NAME, e);
                  }
                }
              }
              return n;
            }
            if (e.startsWith("C")) {
              let t = new Map(),
                n = new s.TcfEuV2(e);
              return (
                t.set(s.TcfEuV2.NAME, n),
                new i.HeaderV1().setFieldValue(T.HeaderV1Field.SECTION_IDS, [
                  2,
                ]),
                t.set(i.HeaderV1.NAME, n),
                t
              );
            }
            throw new O.DecodingError("Unable to decode '" + e + "'");
          }
          encodeSection(e) {
            return (
              this.decoded ||
                ((this.sections = this.decodeModel(this.encodedString)),
                (this.dirty = !1),
                (this.decoded = !0)),
              this.sections.has(e) ? this.sections.get(e).encode() : null
            );
          }
          encodeSectionById(e) {
            return this.encodeSection(r.Sections.SECTION_ID_NAME_MAP.get(e));
          }
          decodeSection(e, t) {
            let n = null;
            this.sections.has(e)
              ? (n = this.sections.get(e))
              : e === o.TcfCaV1.NAME
                ? ((n = new o.TcfCaV1()), this.sections.set(o.TcfCaV1.NAME, n))
                : e === s.TcfEuV2.NAME
                  ? ((n = new s.TcfEuV2()),
                    this.sections.set(s.TcfEuV2.NAME, n))
                  : e === a.UspV1.NAME
                    ? ((n = new a.UspV1()), this.sections.set(a.UspV1.NAME, n))
                    : e === c.UsNat.NAME
                      ? ((n = new c.UsNat()),
                        this.sections.set(c.UsNat.NAME, n))
                      : e === d.UsCa.NAME
                        ? ((n = new d.UsCa()),
                          this.sections.set(d.UsCa.NAME, n))
                        : e === l.UsVa.NAME
                          ? ((n = new l.UsVa()),
                            this.sections.set(l.UsVa.NAME, n))
                          : e === u.UsCo.NAME
                            ? ((n = new u.UsCo()),
                              this.sections.set(u.UsCo.NAME, n))
                            : e === E.UsUt.NAME
                              ? ((n = new E.UsUt()),
                                this.sections.set(E.UsUt.NAME, n))
                              : e === p.UsCt.NAME
                                ? ((n = new p.UsCt()),
                                  this.sections.set(p.UsCt.NAME, n))
                                : e === g.UsFl.NAME
                                  ? ((n = new g.UsFl()),
                                    this.sections.set(g.UsFl.NAME, n))
                                  : e === _.UsMt.NAME
                                    ? ((n = new _.UsMt()),
                                      this.sections.set(_.UsMt.NAME, n))
                                    : e === S.UsOr.NAME
                                      ? ((n = new S.UsOr()),
                                        this.sections.set(S.UsOr.NAME, n))
                                      : e === h.UsTx.NAME &&
                                        ((n = new h.UsTx()),
                                        this.sections.set(h.UsTx.NAME, n)),
              n && n.decode(t);
          }
          decodeSectionById(e, t) {
            this.decodeSection(r.Sections.SECTION_ID_NAME_MAP.get(e), t);
          }
          toObject() {
            this.decoded ||
              ((this.sections = this.decodeModel(this.encodedString)),
              (this.dirty = !1),
              (this.decoded = !0));
            let e = {};
            for (let t = 0; t < r.Sections.SECTION_ORDER.length; t++) {
              let n = r.Sections.SECTION_ORDER[t];
              this.sections.has(n) && (e[n] = this.sections.get(n).toObj());
            }
            return e;
          }
          encode() {
            return (
              (null == this.encodedString ||
                0 === this.encodedString.length ||
                this.dirty) &&
                ((this.encodedString = this.encodeModel(this.sections)),
                (this.dirty = !1),
                (this.decoded = !0)),
              this.encodedString
            );
          }
          decode(e) {
            (this.encodedString = e), (this.dirty = !1), (this.decoded = !1);
          }
        };
      },
      8700: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbstractBase64UrlEncoder = void 0);
        const i = n(5259),
          r = n(7642),
          o = n(3634);
        class s {
          encode(e) {
            if (!/^[0-1]*$/.test(e))
              throw new o.EncodingError("Unencodable Base64Url '" + e + "'");
            e = this.pad(e);
            let t = "",
              n = 0;
            for (; n <= e.length - 6; ) {
              let r = e.substring(n, n + 6);
              try {
                let e = i.FixedIntegerEncoder.decode(r);
                (t += s.DICT.charAt(e)), (n += 6);
              } catch (t) {
                throw new o.EncodingError("Unencodable Base64Url '" + e + "'");
              }
            }
            return t;
          }
          decode(e) {
            if (!/^[A-Za-z0-9\-_]*$/.test(e))
              throw new r.DecodingError(
                "Undecodable Base64URL string '" + e + "'",
              );
            let t = "";
            for (let n = 0; n < e.length; n++) {
              let r = e.charAt(n),
                o = s.REVERSE_DICT.get(r);
              t += i.FixedIntegerEncoder.encode(o, 6);
            }
            return t;
          }
        }
        (t.AbstractBase64UrlEncoder = s),
          (s.DICT =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),
          (s.REVERSE_DICT = new Map([
            ["A", 0],
            ["B", 1],
            ["C", 2],
            ["D", 3],
            ["E", 4],
            ["F", 5],
            ["G", 6],
            ["H", 7],
            ["I", 8],
            ["J", 9],
            ["K", 10],
            ["L", 11],
            ["M", 12],
            ["N", 13],
            ["O", 14],
            ["P", 15],
            ["Q", 16],
            ["R", 17],
            ["S", 18],
            ["T", 19],
            ["U", 20],
            ["V", 21],
            ["W", 22],
            ["X", 23],
            ["Y", 24],
            ["Z", 25],
            ["a", 26],
            ["b", 27],
            ["c", 28],
            ["d", 29],
            ["e", 30],
            ["f", 31],
            ["g", 32],
            ["h", 33],
            ["i", 34],
            ["j", 35],
            ["k", 36],
            ["l", 37],
            ["m", 38],
            ["n", 39],
            ["o", 40],
            ["p", 41],
            ["q", 42],
            ["r", 43],
            ["s", 44],
            ["t", 45],
            ["u", 46],
            ["v", 47],
            ["w", 48],
            ["x", 49],
            ["y", 50],
            ["z", 51],
            ["0", 52],
            ["1", 53],
            ["2", 54],
            ["3", 55],
            ["4", 56],
            ["5", 57],
            ["6", 58],
            ["7", 59],
            ["8", 60],
            ["9", 61],
            ["-", 62],
            ["_", 63],
          ]));
      },
      7683: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CompressedBase64UrlEncoder = void 0);
        const i = n(8700);
        class r extends i.AbstractBase64UrlEncoder {
          constructor() {
            super();
          }
          static getInstance() {
            return this.instance;
          }
          pad(e) {
            for (; e.length % 8 > 0; ) e += "0";
            for (; e.length % 6 > 0; ) e += "0";
            return e;
          }
        }
        (t.CompressedBase64UrlEncoder = r), (r.instance = new r());
      },
      2277: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TraditionalBase64UrlEncoder = void 0);
        const i = n(8700);
        class r extends i.AbstractBase64UrlEncoder {
          constructor() {
            super();
          }
          static getInstance() {
            return this.instance;
          }
          pad(e) {
            for (; e.length % 24 > 0; ) e += "0";
            return e;
          }
        }
        (t.TraditionalBase64UrlEncoder = r), (r.instance = new r());
      },
      2456: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(8700), t),
          r(n(7683), t),
          r(n(2277), t);
      },
      3905: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BitStringEncoder = void 0);
        const i = n(7642);
        class r {
          constructor() {}
          static getInstance() {
            return this.instance;
          }
          encode(e, t) {
            let n = "";
            for (let i = 0; i < t.length; i++) {
              let r = t[i];
              if (!e.containsKey(r))
                throw new Error("Field not found: '" + r + "'");
              n += e.get(r).encode();
            }
            return n;
          }
          decode(e, t, n) {
            let r = 0;
            for (let o = 0; o < t.length; o++) {
              let s = t[o];
              if (!n.containsKey(s))
                throw new Error("Field not found: '" + s + "'");
              {
                let t = n.get(s);
                try {
                  let n = t.substring(e, r);
                  t.decode(n), (r += n.length);
                } catch (e) {
                  if ("SubstringError" !== e.name || t.getHardFailIfMissing())
                    throw new i.DecodingError(
                      "Unable to decode field '" + s + "'",
                    );
                  return;
                }
              }
            }
          }
        }
        (t.BitStringEncoder = r), (r.instance = new r());
      },
      1031: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), r(n(3905), t);
      },
      94: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbstractEncodableBitStringDataType = void 0);
        const i = n(1392);
        t.AbstractEncodableBitStringDataType = class {
          constructor(e = !0) {
            this.hardFailIfMissing = e;
          }
          withValidator(e) {
            return (this.validator = e), this;
          }
          hasValue() {
            return void 0 !== this.value && null !== this.value;
          }
          getValue() {
            return this.value;
          }
          setValue(e) {
            if (this.validator && !this.validator.test(e))
              throw new i.ValidationError("Invalid value '" + e + "'");
            this.value = e;
          }
          getHardFailIfMissing() {
            return this.hardFailIfMissing;
          }
        };
      },
      6847: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      244: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableArrayOfFixedIntegerRanges = void 0);
        const i = n(7642),
          r = n(3634),
          o = n(1570),
          s = n(94),
          a = n(5007),
          c = n(4072),
          d = n(9112),
          l = n(5259),
          u = n(9365);
        class E extends s.AbstractEncodableBitStringDataType {
          constructor(e, t, n, i = !0) {
            super(i),
              (this.keyBitStringLength = e),
              (this.typeBitStringLength = t),
              this.setValue(n);
          }
          encode() {
            try {
              let e = this.value,
                t = "";
              t += l.FixedIntegerEncoder.encode(e.length, 12);
              for (let n = 0; n < e.length; n++) {
                let i = e[n];
                (t += l.FixedIntegerEncoder.encode(
                  i.getKey(),
                  this.keyBitStringLength,
                )),
                  (t += l.FixedIntegerEncoder.encode(
                    i.getType(),
                    this.typeBitStringLength,
                  )),
                  (t += u.FixedIntegerRangeEncoder.encode(i.getIds()));
              }
              return t;
            } catch (e) {
              throw new r.EncodingError(e);
            }
          }
          decode(e) {
            try {
              let t = [],
                n = l.FixedIntegerEncoder.decode(
                  o.StringUtil.substring(e, 0, 12),
                ),
                i = 12;
              for (let r = 0; r < n; r++) {
                let n = l.FixedIntegerEncoder.decode(
                  o.StringUtil.substring(e, i, i + this.keyBitStringLength),
                );
                i += this.keyBitStringLength;
                let r = l.FixedIntegerEncoder.decode(
                  o.StringUtil.substring(e, i, i + this.typeBitStringLength),
                );
                i += this.typeBitStringLength;
                let s = new a.EncodableFixedIntegerRange([]).substring(e, i),
                  d = u.FixedIntegerRangeEncoder.decode(s);
                (i += s.length), t.push(new c.RangeEntry(n, r, d));
              }
              this.value = t;
            } catch (e) {
              throw new i.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              let n = "";
              n += o.StringUtil.substring(e, t, t + 12);
              let i = l.FixedIntegerEncoder.decode(n.toString()),
                r = t + n.length;
              for (let t = 0; t < i; t++) {
                let t = o.StringUtil.substring(
                  e,
                  r,
                  r + this.keyBitStringLength,
                );
                (r += t.length), (n += t);
                let i = o.StringUtil.substring(
                  e,
                  r,
                  r + this.typeBitStringLength,
                );
                (r += i.length), (n += i);
                let s = new a.EncodableFixedIntegerRange([]).substring(e, r);
                (r += s.length), (n += s);
              }
              return n;
            } catch (e) {
              throw new d.SubstringError(e);
            }
          }
        }
        t.EncodableArrayOfFixedIntegerRanges = E;
      },
      5662: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableBoolean = void 0);
        const i = n(7206),
          r = n(94),
          o = n(3634),
          s = n(7642),
          a = n(9112),
          c = n(1570);
        class d extends r.AbstractEncodableBitStringDataType {
          constructor(e, t = !0) {
            super(t), this.setValue(e);
          }
          encode() {
            try {
              return i.BooleanEncoder.encode(this.value);
            } catch (e) {
              throw new o.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.BooleanEncoder.decode(e);
            } catch (e) {
              throw new s.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              return c.StringUtil.substring(e, t, t + 1);
            } catch (e) {
              throw new a.SubstringError(e);
            }
          }
        }
        t.EncodableBoolean = d;
      },
      348: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8933: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableDatetime = void 0);
        const i = n(1447),
          r = n(94),
          o = n(3634),
          s = n(7642),
          a = n(9112),
          c = n(5679);
        class d extends r.AbstractEncodableBitStringDataType {
          constructor(e, t = !0) {
            super(t), this.setValue(e);
          }
          encode() {
            try {
              return i.DatetimeEncoder.encode(this.value);
            } catch (e) {
              throw new o.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.DatetimeEncoder.decode(e);
            } catch (e) {
              throw new s.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              return c.StringUtil.substring(e, t, t + 36);
            } catch (e) {
              throw new a.SubstringError(e);
            }
          }
        }
        t.EncodableDatetime = d;
      },
      1906: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableFibonacciInteger = void 0);
        const i = n(2146),
          r = n(94),
          o = n(3634),
          s = n(7642),
          a = n(9112),
          c = n(5679);
        class d extends r.AbstractEncodableBitStringDataType {
          constructor(e, t = !0) {
            super(t), this.setValue(e);
          }
          encode() {
            try {
              return i.FibonacciIntegerEncoder.encode(this.value);
            } catch (e) {
              throw new o.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.FibonacciIntegerEncoder.decode(e);
            } catch (e) {
              throw new s.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              let n = e.indexOf("11", t);
              return n > 0 ? c.StringUtil.substring(e, t, n + 2) : e;
            } catch (e) {
              throw new a.SubstringError(e);
            }
          }
        }
        t.EncodableFibonacciInteger = d;
      },
      3425: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableFibonacciIntegerRange = void 0);
        const i = n(5935),
          r = n(5259),
          o = n(94),
          s = n(3634),
          a = n(7642),
          c = n(9112),
          d = n(5679);
        class l extends o.AbstractEncodableBitStringDataType {
          constructor(e, t = !0) {
            super(t), this.setValue(e);
          }
          encode() {
            try {
              return i.FibonacciIntegerRangeEncoder.encode(this.value);
            } catch (e) {
              throw new s.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.FibonacciIntegerRangeEncoder.decode(e);
            } catch (e) {
              throw new a.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              let n = r.FixedIntegerEncoder.decode(
                  d.StringUtil.substring(e, t, t + 12),
                ),
                i = t + 12;
              for (let t = 0; t < n; t++)
                i =
                  "1" === e.charAt(i)
                    ? e.indexOf("11", e.indexOf("11", i + 1) + 2) + 2
                    : e.indexOf("11", i + 1) + 2;
              return d.StringUtil.substring(e, t, i);
            } catch (e) {
              throw new c.SubstringError(e);
            }
          }
          getValue() {
            return [...super.getValue()];
          }
          setValue(e) {
            super.setValue(Array.from(new Set(e)).sort((e, t) => e - t));
          }
        }
        t.EncodableFibonacciIntegerRange = l;
      },
      6653: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableFixedBitfield = void 0);
        const i = n(3911),
          r = n(94),
          o = n(3634),
          s = n(7642),
          a = n(9112),
          c = n(1570);
        class d extends r.AbstractEncodableBitStringDataType {
          constructor(e, t = !0) {
            super(t), (this.numElements = e.length), this.setValue(e);
          }
          encode() {
            try {
              return i.FixedBitfieldEncoder.encode(
                this.value,
                this.numElements,
              );
            } catch (e) {
              throw new o.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.FixedBitfieldEncoder.decode(e);
            } catch (e) {
              throw new s.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              return c.StringUtil.substring(e, t, t + this.numElements);
            } catch (e) {
              throw new a.SubstringError(e);
            }
          }
          getValue() {
            return [...super.getValue()];
          }
          setValue(e) {
            let t = [...e];
            for (let e = t.length; e < this.numElements; e++) t.push(!1);
            t.length > this.numElements && (t = t.slice(0, this.numElements)),
              super.setValue(t);
          }
        }
        t.EncodableFixedBitfield = d;
      },
      7568: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableFixedInteger = void 0);
        const i = n(5259),
          r = n(94),
          o = n(3634),
          s = n(7642),
          a = n(9112),
          c = n(1570);
        class d extends r.AbstractEncodableBitStringDataType {
          constructor(e, t, n = !0) {
            super(n), (this.bitStringLength = e), this.setValue(t);
          }
          encode() {
            try {
              return i.FixedIntegerEncoder.encode(
                this.value,
                this.bitStringLength,
              );
            } catch (e) {
              throw new o.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.FixedIntegerEncoder.decode(e);
            } catch (e) {
              throw new s.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              return c.StringUtil.substring(e, t, t + this.bitStringLength);
            } catch (e) {
              throw new a.SubstringError(e);
            }
          }
        }
        t.EncodableFixedInteger = d;
      },
      1672: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableFixedIntegerList = void 0);
        const i = n(4444),
          r = n(94),
          o = n(3634),
          s = n(7642),
          a = n(9112),
          c = n(1570);
        class d extends r.AbstractEncodableBitStringDataType {
          constructor(e, t, n = !0) {
            super(n),
              (this.elementBitStringLength = e),
              (this.numElements = t.length),
              this.setValue(t);
          }
          encode() {
            try {
              return i.FixedIntegerListEncoder.encode(
                this.value,
                this.elementBitStringLength,
                this.numElements,
              );
            } catch (e) {
              throw new o.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.FixedIntegerListEncoder.decode(
                e,
                this.elementBitStringLength,
                this.numElements,
              );
            } catch (e) {
              throw new s.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              return c.StringUtil.substring(
                e,
                t,
                t + this.elementBitStringLength * this.numElements,
              );
            } catch (e) {
              throw new a.SubstringError(e);
            }
          }
          getValue() {
            return [...super.getValue()];
          }
          setValue(e) {
            let t = [...e];
            for (let e = t.length; e < this.numElements; e++) t.push(0);
            t.length > this.numElements && (t = t.slice(0, this.numElements)),
              super.setValue(t);
          }
        }
        t.EncodableFixedIntegerList = d;
      },
      5007: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableFixedIntegerRange = void 0);
        const i = n(5259),
          r = n(9365),
          o = n(94),
          s = n(3634),
          a = n(7642),
          c = n(9112),
          d = n(1570);
        class l extends o.AbstractEncodableBitStringDataType {
          constructor(e, t = !0) {
            super(t), this.setValue(e);
          }
          encode() {
            try {
              return r.FixedIntegerRangeEncoder.encode(this.value);
            } catch (e) {
              throw new s.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = r.FixedIntegerRangeEncoder.decode(e);
            } catch (e) {
              throw new a.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              let n = i.FixedIntegerEncoder.decode(
                  d.StringUtil.substring(e, t, t + 12),
                ),
                r = t + 12;
              for (let t = 0; t < n; t++)
                "1" === e.charAt(r) ? (r += 33) : (r += 17);
              return d.StringUtil.substring(e, t, r);
            } catch (e) {
              throw new c.SubstringError(e);
            }
          }
          getValue() {
            return [...super.getValue()];
          }
          setValue(e) {
            super.setValue(Array.from(new Set(e)).sort((e, t) => e - t));
          }
        }
        t.EncodableFixedIntegerRange = l;
      },
      65: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableFixedString = void 0);
        const i = n(9259),
          r = n(94),
          o = n(3634),
          s = n(7642),
          a = n(9112),
          c = n(1570);
        class d extends r.AbstractEncodableBitStringDataType {
          constructor(e, t, n = !0) {
            super(n), (this.stringLength = e), this.setValue(t);
          }
          encode() {
            try {
              return i.FixedStringEncoder.encode(this.value, this.stringLength);
            } catch (e) {
              throw new o.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.FixedStringEncoder.decode(e);
            } catch (e) {
              throw new s.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              return c.StringUtil.substring(e, t, t + 6 * this.stringLength);
            } catch (e) {
              throw new a.SubstringError(e);
            }
          }
        }
        t.EncodableFixedString = d;
      },
      1342: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableFlexibleBitfield = void 0);
        const i = n(3911),
          r = n(94),
          o = n(3634),
          s = n(7642),
          a = n(9112),
          c = n(1570);
        class d extends r.AbstractEncodableBitStringDataType {
          constructor(e, t, n = !0) {
            super(n), (this.getLength = e), this.setValue(t);
          }
          encode() {
            try {
              return i.FixedBitfieldEncoder.encode(
                this.value,
                this.getLength(),
              );
            } catch (e) {
              throw new o.EncodingError(e);
            }
          }
          decode(e) {
            try {
              this.value = i.FixedBitfieldEncoder.decode(e);
            } catch (e) {
              throw new s.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              return c.StringUtil.substring(e, t, t + this.getLength());
            } catch (e) {
              throw new a.SubstringError(e);
            }
          }
          getValue() {
            return [...super.getValue()];
          }
          setValue(e) {
            let t = this.getLength(),
              n = [...e];
            for (let e = n.length; e < t; e++) n.push(!1);
            n.length > t && (n = n.slice(0, t)), super.setValue([...n]);
          }
        }
        t.EncodableFlexibleBitfield = d;
      },
      8854: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableOptimizedFibonacciRange = void 0);
        const i = n(5935),
          r = n(3911),
          o = n(5259),
          s = n(94),
          a = n(3425),
          c = n(7642),
          d = n(3634),
          l = n(9112),
          u = n(1570);
        class E extends s.AbstractEncodableBitStringDataType {
          constructor(e, t = !0) {
            super(t), this.setValue(e);
          }
          encode() {
            try {
              let e =
                  this.value.length > 0 ? this.value[this.value.length - 1] : 0,
                t = i.FibonacciIntegerRangeEncoder.encode(this.value),
                n = t.length,
                s = e;
              if (n <= s) return o.FixedIntegerEncoder.encode(e, 16) + "1" + t;
              {
                let t = [],
                  n = 0;
                for (let i = 0; i < e; i++)
                  i == this.value[n] - 1 ? ((t[i] = !0), n++) : (t[i] = !1);
                return (
                  o.FixedIntegerEncoder.encode(e, 16) +
                  "0" +
                  r.FixedBitfieldEncoder.encode(t, s)
                );
              }
            } catch (e) {
              throw new d.EncodingError(e);
            }
          }
          decode(e) {
            try {
              if ("1" === e.charAt(16))
                this.value = i.FibonacciIntegerRangeEncoder.decode(
                  e.substring(17),
                );
              else {
                let t = [],
                  n = r.FixedBitfieldEncoder.decode(e.substring(17));
                for (let e = 0; e < n.length; e++) !0 === n[e] && t.push(e + 1);
                this.value = t;
              }
            } catch (e) {
              throw new c.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              let n = o.FixedIntegerEncoder.decode(
                u.StringUtil.substring(e, t, t + 16),
              );
              return "1" === e.charAt(t + 16)
                ? u.StringUtil.substring(e, t, t + 17) +
                    new a.EncodableFibonacciIntegerRange([]).substring(
                      e,
                      t + 17,
                    )
                : u.StringUtil.substring(e, t, t + 17 + n);
            } catch (e) {
              throw new l.SubstringError(e);
            }
          }
          getValue() {
            return [...super.getValue()];
          }
          setValue(e) {
            super.setValue(Array.from(new Set(e)).sort((e, t) => e - t));
          }
        }
        t.EncodableOptimizedFibonacciRange = E;
      },
      4360: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableOptimizedFixedRange = void 0);
        const i = n(3911),
          r = n(5259),
          o = n(9365),
          s = n(94),
          a = n(5007),
          c = n(3634),
          d = n(7642),
          l = n(9112),
          u = n(1570);
        class E extends s.AbstractEncodableBitStringDataType {
          constructor(e, t = !0) {
            super(t), this.setValue(e);
          }
          encode() {
            try {
              let e =
                  this.value.length > 0 ? this.value[this.value.length - 1] : 0,
                t = o.FixedIntegerRangeEncoder.encode(this.value),
                n = t.length,
                s = e;
              if (n <= s) return r.FixedIntegerEncoder.encode(e, 16) + "1" + t;
              {
                let t = [],
                  n = 0;
                for (let i = 0; i < e; i++)
                  i === this.value[n] - 1 ? ((t[i] = !0), n++) : (t[i] = !1);
                return (
                  r.FixedIntegerEncoder.encode(e, 16) +
                  "0" +
                  i.FixedBitfieldEncoder.encode(t, s)
                );
              }
            } catch (e) {
              throw new c.EncodingError(e);
            }
          }
          decode(e) {
            try {
              if ("1" === e.charAt(16))
                this.value = o.FixedIntegerRangeEncoder.decode(e.substring(17));
              else {
                let t = [],
                  n = i.FixedBitfieldEncoder.decode(e.substring(17));
                for (let e = 0; e < n.length; e++) !0 === n[e] && t.push(e + 1);
                this.value = t;
              }
            } catch (e) {
              throw new d.DecodingError(e);
            }
          }
          substring(e, t) {
            try {
              let n = r.FixedIntegerEncoder.decode(
                u.StringUtil.substring(e, t, t + 16),
              );
              return "1" === e.charAt(t + 16)
                ? u.StringUtil.substring(e, t, t + 17) +
                    new a.EncodableFixedIntegerRange([]).substring(e, t + 17)
                : u.StringUtil.substring(e, t, t + 17 + n);
            } catch (e) {
              throw new l.SubstringError(e);
            }
          }
          getValue() {
            return [...super.getValue()];
          }
          setValue(e) {
            super.setValue(Array.from(new Set(e)).sort((e, t) => e - t));
          }
        }
        t.EncodableOptimizedFixedRange = E;
      },
      4072: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RangeEntry = void 0);
        t.RangeEntry = class {
          constructor(e, t, n) {
            (this.key = e), (this.type = t), (this.ids = n);
          }
          getKey() {
            return this.key;
          }
          setKey(e) {
            this.key = e;
          }
          getType() {
            return this.type;
          }
          setType(e) {
            this.type = e;
          }
          getIds() {
            return this.ids;
          }
          setIds(e) {
            this.ids = e;
          }
        };
      },
      9112: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SubstringError = void 0);
        const i = n(7642);
        class r extends i.DecodingError {
          constructor(e) {
            super(e), (this.name = "SubstringError");
          }
        }
        t.SubstringError = r;
      },
      8678: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UnencodableCharacter = void 0);
        t.UnencodableCharacter = class {
          constructor(e, t) {
            (this.value = null),
              (this.validator =
                t ||
                new (class {
                  test(e) {
                    return !0;
                  }
                })()),
              this.setValue(e);
          }
          hasValue() {
            return null != this.value;
          }
          getValue() {
            return this.value;
          }
          setValue(e) {
            e ? (this.value = e.charAt(0)) : (e = null);
          }
        };
      },
      4939: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UnencodableInteger = void 0);
        t.UnencodableInteger = class {
          constructor(e, t) {
            (this.value = null),
              (this.validator =
                t ||
                new (class {
                  test(e) {
                    return !0;
                  }
                })()),
              this.setValue(e);
          }
          hasValue() {
            return null != this.value;
          }
          getValue() {
            return this.value;
          }
          setValue(e) {
            this.value = e;
          }
        };
      },
      7206: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BooleanEncoder = void 0);
        const i = n(7642),
          r = n(3634);
        t.BooleanEncoder = class {
          static encode(e) {
            if (!0 === e) return "1";
            if (!1 === e) return "0";
            throw new r.EncodingError("Unencodable Boolean '" + e + "'");
          }
          static decode(e) {
            if ("1" === e) return !0;
            if ("0" === e) return !1;
            throw new i.DecodingError("Undecodable Boolean '" + e + "'");
          }
        };
      },
      1447: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DatetimeEncoder = void 0);
        const i = n(7642),
          r = n(5259);
        t.DatetimeEncoder = class {
          static encode(e) {
            return e
              ? r.FixedIntegerEncoder.encode(Math.round(e.getTime() / 100), 36)
              : r.FixedIntegerEncoder.encode(0, 36);
          }
          static decode(e) {
            if (!/^[0-1]*$/.test(e) || 36 !== e.length)
              throw new i.DecodingError("Undecodable Datetime '" + e + "'");
            return new Date(100 * r.FixedIntegerEncoder.decode(e));
          }
        };
      },
      2146: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FibonacciIntegerEncoder = void 0);
        const i = n(7642);
        t.FibonacciIntegerEncoder = class {
          static encode(e) {
            let t = [];
            if (e >= 1 && (t.push(1), e >= 2)) {
              t.push(2);
              let n = 2;
              for (; e >= t[n - 1] + t[n - 2]; )
                t.push(t[n - 1] + t[n - 2]), n++;
            }
            let n = "1";
            for (let i = t.length - 1; i >= 0; i--) {
              let r = t[i];
              e >= r ? ((n = "1" + n), (e -= r)) : (n = "0" + n);
            }
            return n;
          }
          static decode(e) {
            if (
              !/^[0-1]*$/.test(e) ||
              e.length < 2 ||
              e.indexOf("11") !== e.length - 2
            )
              throw new i.DecodingError(
                "Undecodable FibonacciInteger '" + e + "'",
              );
            let t = 0,
              n = [];
            for (let t = 0; t < e.length - 1; t++)
              0 === t
                ? n.push(1)
                : 1 === t
                  ? n.push(2)
                  : n.push(n[t - 1] + n[t - 2]);
            for (let i = 0; i < e.length - 1; i++)
              "1" === e.charAt(i) && (t += n[i]);
            return t;
          }
        };
      },
      5935: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FibonacciIntegerRangeEncoder = void 0);
        const i = n(2146),
          r = n(7206),
          o = n(5259),
          s = n(7642);
        t.FibonacciIntegerRangeEncoder = class {
          static encode(e) {
            e = e.sort((e, t) => e - t);
            let t = [],
              n = 0,
              r = 0;
            for (; r < e.length; ) {
              let n = r;
              for (; n < e.length - 1 && e[n] + 1 === e[n + 1]; ) n++;
              t.push(e.slice(r, n + 1)), (r = n + 1);
            }
            let s = o.FixedIntegerEncoder.encode(t.length, 12);
            for (let e = 0; e < t.length; e++)
              if (1 == t[e].length) {
                let r = t[e][0] - n;
                (n = t[e][0]), (s += "0" + i.FibonacciIntegerEncoder.encode(r));
              } else {
                let r = t[e][0] - n;
                n = t[e][0];
                let o = t[e][t[e].length - 1] - n;
                (n = t[e][t[e].length - 1]),
                  (s +=
                    "1" +
                    i.FibonacciIntegerEncoder.encode(r) +
                    i.FibonacciIntegerEncoder.encode(o));
              }
            return s;
          }
          static decode(e) {
            if (!/^[0-1]*$/.test(e) || e.length < 12)
              throw new s.DecodingError(
                "Undecodable FibonacciIntegerRange '" + e + "'",
              );
            let t = [],
              n = o.FixedIntegerEncoder.decode(e.substring(0, 12)),
              a = 0,
              c = 12;
            for (let o = 0; o < n; o++) {
              let n = r.BooleanEncoder.decode(e.substring(c, c + 1));
              if ((c++, !0 === n)) {
                let n = e.indexOf("11", c),
                  r =
                    i.FibonacciIntegerEncoder.decode(e.substring(c, n + 2)) + a;
                (a = r), (c = n + 2), (n = e.indexOf("11", c));
                let o =
                  i.FibonacciIntegerEncoder.decode(e.substring(c, n + 2)) + a;
                (a = o), (c = n + 2);
                for (let e = r; e <= o; e++) t.push(e);
              } else {
                let n = e.indexOf("11", c),
                  r =
                    i.FibonacciIntegerEncoder.decode(e.substring(c, n + 2)) + a;
                (a = r), t.push(r), (c = n + 2);
              }
            }
            return t;
          }
        };
      },
      3911: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FixedBitfieldEncoder = void 0);
        const i = n(7642),
          r = n(3634),
          o = n(7206);
        t.FixedBitfieldEncoder = class {
          static encode(e, t) {
            if (e.length > t)
              throw new r.EncodingError("Too many values '" + e.length + "'");
            let n = "";
            for (let t = 0; t < e.length; t++)
              n += o.BooleanEncoder.encode(e[t]);
            for (; n.length < t; ) n += "0";
            return n;
          }
          static decode(e) {
            if (!/^[0-1]*$/.test(e))
              throw new i.DecodingError(
                "Undecodable FixedBitfield '" + e + "'",
              );
            let t = [];
            for (let n = 0; n < e.length; n++)
              t.push(o.BooleanEncoder.decode(e.substring(n, n + 1)));
            return t;
          }
        };
      },
      5259: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FixedIntegerEncoder = void 0);
        const i = n(7642),
          r = n(3634);
        t.FixedIntegerEncoder = class {
          static encode(e, t) {
            let n = [];
            if (e >= 1) for (n.push(1); e >= 2 * n[0]; ) n.unshift(2 * n[0]);
            let i = "";
            for (let t = 0; t < n.length; t++) {
              let r = n[t];
              e >= r ? ((i += "1"), (e -= r)) : (i += "0");
            }
            if (i.length > t)
              throw new r.EncodingError(
                "Numeric value '" +
                  e +
                  "' is too large for a bit string length of '" +
                  t +
                  "'",
              );
            for (; i.length < t; ) i = "0" + i;
            return i;
          }
          static decode(e) {
            if (!/^[0-1]*$/.test(e))
              throw new i.DecodingError("Undecodable FixedInteger '" + e + "'");
            let t = 0,
              n = [];
            for (let t = 0; t < e.length; t++)
              n[e.length - (t + 1)] = 0 === t ? 1 : 2 * n[e.length - t];
            for (let i = 0; i < e.length; i++)
              "1" === e.charAt(i) && (t += n[i]);
            return t;
          }
        };
      },
      4444: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FixedIntegerListEncoder = void 0);
        const i = n(7642),
          r = n(3634),
          o = n(5259);
        t.FixedIntegerListEncoder = class {
          static encode(e, t, n) {
            if (e.length > n)
              throw new r.EncodingError("Too many values '" + e.length + "'");
            let i = "";
            for (let n = 0; n < e.length; n++)
              i += o.FixedIntegerEncoder.encode(e[n], t);
            for (; i.length < t * n; ) i += "0";
            return i;
          }
          static decode(e, t, n) {
            if (!/^[0-1]*$/.test(e))
              throw new i.DecodingError("Undecodable FixedInteger '" + e + "'");
            if (e.length > t * n)
              throw new i.DecodingError(
                "Undecodable FixedIntegerList '" + e + "'",
              );
            if (e.length % t != 0)
              throw new i.DecodingError(
                "Undecodable FixedIntegerList '" + e + "'",
              );
            for (; e.length < t * n; ) e += "0";
            e.length > t * n && (e = e.substring(0, t * n));
            let r = [];
            for (let n = 0; n < e.length; n += t)
              r.push(o.FixedIntegerEncoder.decode(e.substring(n, n + t)));
            for (; r.length < n; ) r.push(0);
            return r;
          }
        };
      },
      9365: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FixedIntegerRangeEncoder = void 0);
        const i = n(7642),
          r = n(7206),
          o = n(5259);
        t.FixedIntegerRangeEncoder = class {
          static encode(e) {
            e.sort((e, t) => e - t);
            let t = [],
              n = 0;
            for (; n < e.length; ) {
              let i = n;
              for (; i < e.length - 1 && e[i] + 1 === e[i + 1]; ) i++;
              t.push(e.slice(n, i + 1)), (n = i + 1);
            }
            let i = o.FixedIntegerEncoder.encode(t.length, 12);
            for (let e = 0; e < t.length; e++)
              1 === t[e].length
                ? (i += "0" + o.FixedIntegerEncoder.encode(t[e][0], 16))
                : (i +=
                    "1" +
                    o.FixedIntegerEncoder.encode(t[e][0], 16) +
                    o.FixedIntegerEncoder.encode(t[e][t[e].length - 1], 16));
            return i;
          }
          static decode(e) {
            if (!/^[0-1]*$/.test(e) || e.length < 12)
              throw new i.DecodingError(
                "Undecodable FixedIntegerRange '" + e + "'",
              );
            let t = [],
              n = o.FixedIntegerEncoder.decode(e.substring(0, 12)),
              s = 12;
            for (let i = 0; i < n; i++) {
              let n = r.BooleanEncoder.decode(e.substring(s, s + 1));
              if ((s++, !0 === n)) {
                let n = o.FixedIntegerEncoder.decode(e.substring(s, s + 16));
                s += 16;
                let i = o.FixedIntegerEncoder.decode(e.substring(s, s + 16));
                s += 16;
                for (let e = n; e <= i; e++) t.push(e);
              } else {
                let n = o.FixedIntegerEncoder.decode(e.substring(s, s + 16));
                t.push(n), (s += 16);
              }
            }
            return t;
          }
        };
      },
      9259: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FixedStringEncoder = void 0);
        const i = n(7642),
          r = n(3634),
          o = n(5259);
        t.FixedStringEncoder = class {
          static encode(e, t) {
            for (; e.length < t; ) e += " ";
            let n = "";
            for (let t = 0; t < e.length; t++) {
              let i = e.charCodeAt(t);
              if (32 === i) n += o.FixedIntegerEncoder.encode(63, 6);
              else {
                if (!(i >= 65))
                  throw new r.EncodingError(
                    "Unencodable FixedString '" + e + "'",
                  );
                n += o.FixedIntegerEncoder.encode(e.charCodeAt(t) - 65, 6);
              }
            }
            return n;
          }
          static decode(e) {
            if (!/^[0-1]*$/.test(e) || e.length % 6 != 0)
              throw new i.DecodingError("Undecodable FixedString '" + e + "'");
            let t = "";
            for (let n = 0; n < e.length; n += 6) {
              let i = o.FixedIntegerEncoder.decode(e.substring(n, n + 6));
              t += 63 === i ? " " : String.fromCharCode(i + 65);
            }
            return t.trim();
          }
        };
      },
      8498: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OptimizedFibonacciRangeEncoder = void 0);
        const i = n(7642),
          r = n(5935),
          o = n(3911),
          s = n(5259);
        t.OptimizedFibonacciRangeEncoder = class {
          static encode(e) {
            let t = e.length > 0 ? e[e.length - 1] : 0,
              n = r.FibonacciIntegerRangeEncoder.encode(e),
              i = t;
            if (n.length <= i)
              return s.FixedIntegerEncoder.encode(t, 16) + "1" + n;
            {
              let n = [],
                r = 0;
              for (let i = 0; i < t; i++)
                i == e[r] - 1 ? ((n[i] = !0), r++) : (n[i] = !1);
              return (
                s.FixedIntegerEncoder.encode(t, 16) +
                "0" +
                o.FixedBitfieldEncoder.encode(n, i)
              );
            }
          }
          static decode(e) {
            if (
              !/^[0-1]*$/.test(e) ||
              e.length < 2 ||
              e.indexOf("11") !== e.length - 2
            )
              throw new i.DecodingError(
                "Undecodable FibonacciInteger '" + e + "'",
              );
            if ("1" === e.charAt(16))
              return r.FibonacciIntegerRangeEncoder.decode(e.substring(17));
            {
              let t = [],
                n = o.FixedBitfieldEncoder.decode(e.substring(17));
              for (let e = 0; e < n.length; e++) !0 === n[e] && t.push(e + 1);
              return t;
            }
          }
        };
      },
      1012: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OptimizedFixedRangeEncoder = void 0);
        const i = n(7642),
          r = n(3911),
          o = n(5259),
          s = n(9365);
        t.OptimizedFixedRangeEncoder = class {
          static encode(e) {
            let t = e.length > 0 ? e[e.length - 1] : 0,
              n = s.FixedIntegerRangeEncoder.encode(e),
              i = t;
            if (n.length <= i)
              return o.FixedIntegerEncoder.encode(t, 16) + "1" + n;
            {
              let n = [],
                s = 0;
              for (let i = 0; i < t; i++)
                i === e[s] - 1 ? ((n[i] = !0), s++) : (n[i] = !1);
              return (
                o.FixedIntegerEncoder.encode(t, 16) +
                "0" +
                r.FixedBitfieldEncoder.encode(n, i)
              );
            }
          }
          static decode(e) {
            if (
              !/^[0-1]*$/.test(e) ||
              e.length < 2 ||
              e.indexOf("11") !== e.length - 2
            )
              throw new i.DecodingError(
                "Undecodable FibonacciInteger '" + e + "'",
              );
            if ("1" === e.charAt(16))
              return s.FixedIntegerRangeEncoder.decode(e.substring(17));
            {
              let t = [],
                n = r.FixedBitfieldEncoder.decode(e.substring(17));
              for (let e = 0; e < n.length; e++) !0 === n[e] && t.push(e + 1);
              return t;
            }
          }
        };
      },
      1184: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(7206), t),
          r(n(1447), t),
          r(n(2146), t),
          r(n(5935), t),
          r(n(3911), t),
          r(n(5259), t),
          r(n(4444), t),
          r(n(9365), t),
          r(n(9259), t),
          r(n(8498), t),
          r(n(1012), t);
      },
      1091: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(1184), t),
          r(n(8130), t),
          r(n(94), t),
          r(n(6847), t),
          r(n(244), t),
          r(n(5662), t),
          r(n(348), t),
          r(n(8933), t),
          r(n(1906), t),
          r(n(3425), t),
          r(n(6653), t),
          r(n(7568), t),
          r(n(1672), t),
          r(n(5007), t),
          r(n(65), t),
          r(n(1342), t),
          r(n(8854), t),
          r(n(4360), t),
          r(n(8678), t),
          r(n(4939), t),
          r(n(4072), t),
          r(n(9112), t);
      },
      5415: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8130: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), r(n(5415), t);
      },
      7642: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DecodingError = void 0);
        class n extends Error {
          constructor(e) {
            super(e), (this.name = "DecodingError");
          }
        }
        t.DecodingError = n;
      },
      3634: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodingError = void 0);
        class n extends Error {
          constructor(e) {
            super(e), (this.name = "EncodingError");
          }
        }
        t.EncodingError = n;
      },
      7370: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.InvalidFieldError = void 0);
        class n extends Error {
          constructor(e) {
            super(e), (this.name = "InvalidFieldError");
          }
        }
        t.InvalidFieldError = n;
      },
      1392: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ValidationError = void 0);
        class n extends Error {
          constructor(e) {
            super(e), (this.name = "ValidationError");
          }
        }
        t.ValidationError = n;
      },
      8152: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(7642), t),
          r(n(3634), t),
          r(n(7370), t),
          r(n(1392), t);
      },
      7943: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodableBitStringFields = void 0);
        t.EncodableBitStringFields = class {
          constructor() {
            this.fields = new Map();
          }
          containsKey(e) {
            return this.fields.has(e);
          }
          put(e, t) {
            this.fields.set(e, t);
          }
          get(e) {
            return this.fields.get(e);
          }
          getAll() {
            return new Map(this.fields);
          }
          reset(e) {
            this.fields.clear(),
              e.getAll().forEach((e, t) => {
                this.fields.set(t, e);
              });
          }
        };
      },
      7596: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6781: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GenericFields = void 0);
        t.GenericFields = class {
          constructor() {
            this.fields = new Map();
          }
          containsKey(e) {
            return this.fields.has(e);
          }
          put(e, t) {
            this.fields.set(e, t);
          }
          get(e) {
            return this.fields.get(e);
          }
          getAll() {
            return new Map(this.fields);
          }
          reset(e) {
            this.fields.clear(),
              e.getAll().forEach((e, t) => {
                this.fields.set(t, e);
              });
          }
        };
      },
      4617: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HEADER_CORE_SEGMENT_FIELD_NAMES = t.HeaderV1Field = void 0),
          ((i = n = t.HeaderV1Field || (t.HeaderV1Field = {})).ID = "Id"),
          (i.VERSION = "Version"),
          (i.SECTION_IDS = "SectionIds"),
          (t.HEADER_CORE_SEGMENT_FIELD_NAMES = [
            n.ID,
            n.VERSION,
            n.SECTION_IDS,
          ]);
      },
      4149: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TCFCAV1_DISCLOSED_VENDORS_SEGMENT_FIELD_NAMES =
            t.TCFCAV1_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES =
            t.TCFCAV1_CORE_SEGMENT_FIELD_NAMES =
            t.TcfCaV1Field =
              void 0),
          ((i = n = t.TcfCaV1Field || (t.TcfCaV1Field = {})).VERSION =
            "Version"),
          (i.CREATED = "Created"),
          (i.LAST_UPDATED = "LastUpdated"),
          (i.CMP_ID = "CmpId"),
          (i.CMP_VERSION = "CmpVersion"),
          (i.CONSENT_SCREEN = "ConsentScreen"),
          (i.CONSENT_LANGUAGE = "ConsentLanguage"),
          (i.VENDOR_LIST_VERSION = "VendorListVersion"),
          (i.TCF_POLICY_VERSION = "TcfPolicyVersion"),
          (i.USE_NON_STANDARD_STACKS = "UseNonStandardStacks"),
          (i.SPECIAL_FEATURE_EXPRESS_CONSENT = "SpecialFeatureExpressConsent"),
          (i.PUB_PURPOSES_SEGMENT_TYPE = "PubPurposesSegmentType"),
          (i.PURPOSES_EXPRESS_CONSENT = "PurposesExpressConsent"),
          (i.PURPOSES_IMPLIED_CONSENT = "PurposesImpliedConsent"),
          (i.VENDOR_EXPRESS_CONSENT = "VendorExpressConsent"),
          (i.VENDOR_IMPLIED_CONSENT = "VendorImpliedConsent"),
          (i.PUB_RESTRICTIONS = "PubRestrictions"),
          (i.PUB_PURPOSES_EXPRESS_CONSENT = "PubPurposesExpressConsent"),
          (i.PUB_PURPOSES_IMPLIED_CONSENT = "PubPurposesImpliedConsent"),
          (i.NUM_CUSTOM_PURPOSES = "NumCustomPurposes"),
          (i.CUSTOM_PURPOSES_EXPRESS_CONSENT = "CustomPurposesExpressConsent"),
          (i.CUSTOM_PURPOSES_IMPLIED_CONSENT = "CustomPurposesImpliedConsent"),
          (i.DISCLOSED_VENDORS_SEGMENT_TYPE = "DisclosedVendorsSegmentType"),
          (i.DISCLOSED_VENDORS = "DisclosedVendors"),
          (t.TCFCAV1_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.CREATED,
            n.LAST_UPDATED,
            n.CMP_ID,
            n.CMP_VERSION,
            n.CONSENT_SCREEN,
            n.CONSENT_LANGUAGE,
            n.VENDOR_LIST_VERSION,
            n.TCF_POLICY_VERSION,
            n.USE_NON_STANDARD_STACKS,
            n.SPECIAL_FEATURE_EXPRESS_CONSENT,
            n.PURPOSES_EXPRESS_CONSENT,
            n.PURPOSES_IMPLIED_CONSENT,
            n.VENDOR_EXPRESS_CONSENT,
            n.VENDOR_IMPLIED_CONSENT,
            n.PUB_RESTRICTIONS,
          ]),
          (t.TCFCAV1_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES = [
            n.PUB_PURPOSES_SEGMENT_TYPE,
            n.PUB_PURPOSES_EXPRESS_CONSENT,
            n.PUB_PURPOSES_IMPLIED_CONSENT,
            n.NUM_CUSTOM_PURPOSES,
            n.CUSTOM_PURPOSES_EXPRESS_CONSENT,
            n.CUSTOM_PURPOSES_IMPLIED_CONSENT,
          ]),
          (t.TCFCAV1_DISCLOSED_VENDORS_SEGMENT_FIELD_NAMES = [
            n.DISCLOSED_VENDORS_SEGMENT_TYPE,
            n.DISCLOSED_VENDORS,
          ]);
      },
      6316: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TCFEUV2_VENDORS_DISCLOSED_SEGMENT_FIELD_NAMES =
            t.TCFEUV2_VENDORS_ALLOWED_SEGMENT_FIELD_NAMES =
            t.TCFEUV2_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES =
            t.TCFEUV2_CORE_SEGMENT_FIELD_NAMES =
            t.TcfEuV2Field =
              void 0),
          ((i = n = t.TcfEuV2Field || (t.TcfEuV2Field = {})).VERSION =
            "Version"),
          (i.CREATED = "Created"),
          (i.LAST_UPDATED = "LastUpdated"),
          (i.CMP_ID = "CmpId"),
          (i.CMP_VERSION = "CmpVersion"),
          (i.CONSENT_SCREEN = "ConsentScreen"),
          (i.CONSENT_LANGUAGE = "ConsentLanguage"),
          (i.VENDOR_LIST_VERSION = "VendorListVersion"),
          (i.POLICY_VERSION = "PolicyVersion"),
          (i.IS_SERVICE_SPECIFIC = "IsServiceSpecific"),
          (i.USE_NON_STANDARD_STACKS = "UseNonStandardStacks"),
          (i.SPECIAL_FEATURE_OPTINS = "SpecialFeatureOptins"),
          (i.PURPOSE_CONSENTS = "PurposeConsents"),
          (i.PURPOSE_LEGITIMATE_INTERESTS = "PurposeLegitimateInterests"),
          (i.PURPOSE_ONE_TREATMENT = "PurposeOneTreatment"),
          (i.PUBLISHER_COUNTRY_CODE = "PublisherCountryCode"),
          (i.VENDOR_CONSENTS = "VendorConsents"),
          (i.VENDOR_LEGITIMATE_INTERESTS = "VendorLegitimateInterests"),
          (i.PUBLISHER_RESTRICTIONS = "PublisherRestrictions"),
          (i.PUBLISHER_PURPOSES_SEGMENT_TYPE = "PublisherPurposesSegmentType"),
          (i.PUBLISHER_CONSENTS = "PublisherConsents"),
          (i.PUBLISHER_LEGITIMATE_INTERESTS = "PublisherLegitimateInterests"),
          (i.NUM_CUSTOM_PURPOSES = "NumCustomPurposes"),
          (i.PUBLISHER_CUSTOM_CONSENTS = "PublisherCustomConsents"),
          (i.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS =
            "PublisherCustomLegitimateInterests"),
          (i.VENDORS_ALLOWED_SEGMENT_TYPE = "VendorsAllowedSegmentType"),
          (i.VENDORS_ALLOWED = "VendorsAllowed"),
          (i.VENDORS_DISCLOSED_SEGMENT_TYPE = "VendorsDisclosedSegmentType"),
          (i.VENDORS_DISCLOSED = "VendorsDisclosed"),
          (t.TCFEUV2_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.CREATED,
            n.LAST_UPDATED,
            n.CMP_ID,
            n.CMP_VERSION,
            n.CONSENT_SCREEN,
            n.CONSENT_LANGUAGE,
            n.VENDOR_LIST_VERSION,
            n.POLICY_VERSION,
            n.IS_SERVICE_SPECIFIC,
            n.USE_NON_STANDARD_STACKS,
            n.SPECIAL_FEATURE_OPTINS,
            n.PURPOSE_CONSENTS,
            n.PURPOSE_LEGITIMATE_INTERESTS,
            n.PURPOSE_ONE_TREATMENT,
            n.PUBLISHER_COUNTRY_CODE,
            n.VENDOR_CONSENTS,
            n.VENDOR_LEGITIMATE_INTERESTS,
            n.PUBLISHER_RESTRICTIONS,
          ]),
          (t.TCFEUV2_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES = [
            n.PUBLISHER_PURPOSES_SEGMENT_TYPE,
            n.PUBLISHER_CONSENTS,
            n.PUBLISHER_LEGITIMATE_INTERESTS,
            n.NUM_CUSTOM_PURPOSES,
            n.PUBLISHER_CUSTOM_CONSENTS,
            n.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS,
          ]),
          (t.TCFEUV2_VENDORS_ALLOWED_SEGMENT_FIELD_NAMES = [
            n.VENDORS_ALLOWED_SEGMENT_TYPE,
            n.VENDORS_ALLOWED,
          ]),
          (t.TCFEUV2_VENDORS_DISCLOSED_SEGMENT_FIELD_NAMES = [
            n.VENDORS_DISCLOSED_SEGMENT_TYPE,
            n.VENDORS_DISCLOSED,
          ]);
      },
      1877: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USCA_GPC_SEGMENT_FIELD_NAMES =
            t.USCA_CORE_SEGMENT_FIELD_NAMES =
            t.UsCaField =
              void 0),
          ((i = n = t.UsCaField || (t.UsCaField = {})).VERSION = "Version"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.SHARING_OPT_OUT_NOTICE = "SharingOptOutNotice"),
          (i.SENSITIVE_DATA_LIMIT_USE_NOTICE = "SensitiveDataLimitUseNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.SHARING_OPT_OUT = "SharingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.PERSONAL_DATA_CONSENTS = "PersonalDataConsents"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (i.GPC_SEGMENT_TYPE = "GpcSegmentType"),
          (i.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded"),
          (i.GPC = "Gpc"),
          (t.USCA_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.SALE_OPT_OUT_NOTICE,
            n.SHARING_OPT_OUT_NOTICE,
            n.SENSITIVE_DATA_LIMIT_USE_NOTICE,
            n.SALE_OPT_OUT,
            n.SHARING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.PERSONAL_DATA_CONSENTS,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]),
          (t.USCA_GPC_SEGMENT_FIELD_NAMES = [n.GPC_SEGMENT_TYPE, n.GPC]);
      },
      5599: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USCO_GPC_SEGMENT_FIELD_NAMES =
            t.USCO_CORE_SEGMENT_FIELD_NAMES =
            t.UsCoField =
              void 0),
          ((i = n = t.UsCoField || (t.UsCoField = {})).VERSION = "Version"),
          (i.SHARING_NOTICE = "SharingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (i.GPC_SEGMENT_TYPE = "GpcSegmentType"),
          (i.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded"),
          (i.GPC = "Gpc"),
          (t.USCO_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.SHARING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SALE_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]),
          (t.USCO_GPC_SEGMENT_FIELD_NAMES = [n.GPC_SEGMENT_TYPE, n.GPC]);
      },
      5404: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USCT_GPC_SEGMENT_FIELD_NAMES =
            t.USCT_CORE_SEGMENT_FIELD_NAMES =
            t.UsCtField =
              void 0),
          ((i = n = t.UsCtField || (t.UsCtField = {})).VERSION = "Version"),
          (i.SHARING_NOTICE = "SharingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (i.GPC_SEGMENT_TYPE = "GpcSegmentType"),
          (i.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded"),
          (i.GPC = "Gpc"),
          (t.USCT_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.SHARING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SALE_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]),
          (t.USCT_GPC_SEGMENT_FIELD_NAMES = [n.GPC_SEGMENT_TYPE, n.GPC]);
      },
      7392: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USFL_CORE_SEGMENT_FIELD_NAMES = t.UsFlField = void 0),
          ((i = n = t.UsFlField || (t.UsFlField = {})).VERSION = "Version"),
          (i.PROCESSING_NOTICE = "ProcessingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.ADDITIONAL_DATA_PROCESSING_CONSENT =
            "AdditionalDataProcessingConsent"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (t.USFL_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.PROCESSING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SALE_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.ADDITIONAL_DATA_PROCESSING_CONSENT,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]);
      },
      7094: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USMT_GPC_SEGMENT_FIELD_NAMES =
            t.USMT_CORE_SEGMENT_FIELD_NAMES =
            t.UsMtField =
              void 0),
          ((i = n = t.UsMtField || (t.UsMtField = {})).VERSION = "Version"),
          (i.SHARING_NOTICE = "SharingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.ADDITIONAL_DATA_PROCESSING_CONSENT =
            "AdditionalDataProcessingConsent"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (i.GPC_SEGMENT_TYPE = "GpcSegmentType"),
          (i.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded"),
          (i.GPC = "Gpc"),
          (t.USMT_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.SHARING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SALE_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.ADDITIONAL_DATA_PROCESSING_CONSENT,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]),
          (t.USMT_GPC_SEGMENT_FIELD_NAMES = [n.GPC_SEGMENT_TYPE, n.GPC]);
      },
      8776: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USNAT_GPC_SEGMENT_FIELD_NAMES =
            t.USNAT_CORE_SEGMENT_FIELD_NAMES =
            t.UsNatField =
              void 0),
          ((i = n = t.UsNatField || (t.UsNatField = {})).VERSION = "Version"),
          (i.SHARING_NOTICE = "SharingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.SHARING_OPT_OUT_NOTICE = "SharingOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE =
            "SensitiveDataProcessingOptOutNotice"),
          (i.SENSITIVE_DATA_LIMIT_USE_NOTICE = "SensitiveDataLimitUseNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.SHARING_OPT_OUT = "SharingOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.PERSONAL_DATA_CONSENTS = "PersonalDataConsents"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (i.GPC_SEGMENT_TYPE = "GpcSegmentType"),
          (i.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded"),
          (i.GPC = "Gpc"),
          (t.USNAT_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.SHARING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.SHARING_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE,
            n.SENSITIVE_DATA_LIMIT_USE_NOTICE,
            n.SALE_OPT_OUT,
            n.SHARING_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.PERSONAL_DATA_CONSENTS,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]),
          (t.USNAT_GPC_SEGMENT_FIELD_NAMES = [n.GPC_SEGMENT_TYPE, n.GPC]);
      },
      8354: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USOR_GPC_SEGMENT_FIELD_NAMES =
            t.USOR_CORE_SEGMENT_FIELD_NAMES =
            t.UsOrField =
              void 0),
          ((i = n = t.UsOrField || (t.UsOrField = {})).VERSION = "Version"),
          (i.PROCESSING_NOTICE = "ProcessingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.ADDITIONAL_DATA_PROCESSING_CONSENT =
            "AdditionalDataProcessingConsent"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (i.GPC_SEGMENT_TYPE = "GpcSegmentType"),
          (i.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded"),
          (i.GPC = "Gpc"),
          (t.USOR_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.PROCESSING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SALE_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.ADDITIONAL_DATA_PROCESSING_CONSENT,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]),
          (t.USOR_GPC_SEGMENT_FIELD_NAMES = [n.GPC_SEGMENT_TYPE, n.GPC]);
      },
      8053: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USTX_GPC_SEGMENT_FIELD_NAMES =
            t.USTX_CORE_SEGMENT_FIELD_NAMES =
            t.UsTxField =
              void 0),
          ((i = n = t.UsTxField || (t.UsTxField = {})).VERSION = "Version"),
          (i.PROCESSING_NOTICE = "ProcessingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.ADDITIONAL_DATA_PROCESSING_CONSENT =
            "AdditionalDataProcessingConsent"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (i.GPC_SEGMENT_TYPE = "GpcSegmentType"),
          (i.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded"),
          (i.GPC = "Gpc"),
          (t.USTX_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.PROCESSING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SALE_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.ADDITIONAL_DATA_PROCESSING_CONSENT,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]),
          (t.USTX_GPC_SEGMENT_FIELD_NAMES = [n.GPC_SEGMENT_TYPE, n.GPC]);
      },
      1806: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USUT_CORE_SEGMENT_FIELD_NAMES = t.UsUtField = void 0),
          ((i = n = t.UsUtField || (t.UsUtField = {})).VERSION = "Version"),
          (i.SHARING_NOTICE = "SharingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE =
            "SensitiveDataProcessingOptOutNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (t.USUT_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.SHARING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE,
            n.SALE_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]);
      },
      5722: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USVA_CORE_SEGMENT_FIELD_NAMES = t.UsVaField = void 0),
          ((i = n = t.UsVaField || (t.UsVaField = {})).VERSION = "Version"),
          (i.SHARING_NOTICE = "SharingNotice"),
          (i.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice"),
          (i.TARGETED_ADVERTISING_OPT_OUT_NOTICE =
            "TargetedAdvertisingOptOutNotice"),
          (i.SALE_OPT_OUT = "SaleOptOut"),
          (i.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut"),
          (i.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing"),
          (i.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS =
            "KnownChildSensitiveDataConsents"),
          (i.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction"),
          (i.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode"),
          (i.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode"),
          (t.USVA_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.SHARING_NOTICE,
            n.SALE_OPT_OUT_NOTICE,
            n.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
            n.SALE_OPT_OUT,
            n.TARGETED_ADVERTISING_OPT_OUT,
            n.SENSITIVE_DATA_PROCESSING,
            n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
            n.MSPA_COVERED_TRANSACTION,
            n.MSPA_OPT_OUT_OPTION_MODE,
            n.MSPA_SERVICE_PROVIDER_MODE,
          ]);
      },
      4078: function (e, t) {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.USPV1_CORE_SEGMENT_FIELD_NAMES = t.UspV1Field = void 0),
          ((i = n = t.UspV1Field || (t.UspV1Field = {})).VERSION = "Version"),
          (i.NOTICE = "Notice"),
          (i.OPT_OUT_SALE = "OptOutSale"),
          (i.LSPA_COVERED = "LspaCovered"),
          (t.USPV1_CORE_SEGMENT_FIELD_NAMES = [
            n.VERSION,
            n.NOTICE,
            n.OPT_OUT_SALE,
            n.LSPA_COVERED,
          ]);
      },
      4689: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(7943), t),
          r(n(7596), t),
          r(n(6781), t),
          r(n(4617), t),
          r(n(4149), t),
          r(n(6316), t),
          r(n(1877), t),
          r(n(5599), t),
          r(n(5404), t),
          r(n(7392), t),
          r(n(7094), t),
          r(n(8776), t),
          r(n(8354), t),
          r(n(8053), t),
          r(n(1806), t),
          r(n(4078), t),
          r(n(5722), t);
      },
      1862: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(2456), t),
          r(n(1031), t),
          r(n(1091), t),
          r(n(8152), t),
          r(n(4689), t),
          r(n(8878), t),
          r(n(8288), t),
          r(n(5679), t),
          r(n(4694), t);
      },
      509: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbstractLazilyEncodableSection = void 0);
        const i = n(7370);
        t.AbstractLazilyEncodableSection = class {
          constructor() {
            (this.encodedString = null),
              (this.dirty = !1),
              (this.decoded = !0),
              (this.segments = this.initializeSegments());
          }
          hasField(e) {
            this.decoded ||
              ((this.segments = this.decodeSection(this.encodedString)),
              (this.dirty = !1),
              (this.decoded = !0));
            for (let t = 0; t < this.segments.length; t++) {
              let n = this.segments[t];
              if (n.getFieldNames().includes(e)) return n.hasField(e);
            }
            return !1;
          }
          getFieldValue(e) {
            this.decoded ||
              ((this.segments = this.decodeSection(this.encodedString)),
              (this.dirty = !1),
              (this.decoded = !0));
            for (let t = 0; t < this.segments.length; t++) {
              let n = this.segments[t];
              if (n.hasField(e)) return n.getFieldValue(e);
            }
            throw new i.InvalidFieldError("Invalid field: '" + e + "'");
          }
          setFieldValue(e, t) {
            this.decoded ||
              ((this.segments = this.decodeSection(this.encodedString)),
              (this.dirty = !1),
              (this.decoded = !0));
            for (let n = 0; n < this.segments.length; n++) {
              let i = this.segments[n];
              if (i.hasField(e)) return void i.setFieldValue(e, t);
            }
            throw new i.InvalidFieldError("Invalid field: '" + e + "'");
          }
          toObj() {
            let e = {};
            for (let t = 0; t < this.segments.length; t++) {
              let n = this.segments[t].toObj();
              for (const [t, i] of Object.entries(n)) e[t] = i;
            }
            return e;
          }
          encode() {
            return (
              (null == this.encodedString ||
                0 === this.encodedString.length ||
                this.dirty) &&
                ((this.encodedString = this.encodeSection(this.segments)),
                (this.dirty = !1),
                (this.decoded = !0)),
              this.encodedString
            );
          }
          decode(e) {
            (this.encodedString = e), (this.dirty = !1), (this.decoded = !1);
          }
        };
      },
      7866: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4288: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HeaderV1 = void 0);
        const i = n(509),
          r = n(224);
        class o extends i.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return o.ID;
          }
          getName() {
            return o.NAME;
          }
          getVersion() {
            return o.VERSION;
          }
          initializeSegments() {
            let e = [];
            return e.push(new r.HeaderV1CoreSegment()), e;
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              for (let e = 0; e < t.length; e++)
                n.length > e && t[e].decode(n[e]);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            for (let n = 0; n < e.length; n++) {
              let i = e[n];
              t.push(i.encode());
            }
            return t.join(".");
          }
        }
        (t.HeaderV1 = o), (o.ID = 3), (o.VERSION = 1), (o.NAME = "header");
      },
      2552: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Sections = void 0);
        const i = n(7249),
          r = n(5570),
          o = n(3047),
          s = n(4161),
          a = n(8420),
          c = n(5977),
          d = n(1690),
          l = n(8913),
          u = n(863),
          E = n(4526),
          p = n(7017),
          g = n(2849),
          _ = n(9088);
        class S {}
        (t.Sections = S),
          (S.SECTION_ID_NAME_MAP = new Map([
            [i.TcfEuV2.ID, i.TcfEuV2.NAME],
            [r.TcfCaV1.ID, r.TcfCaV1.NAME],
            [o.UspV1.ID, o.UspV1.NAME],
            [s.UsNat.ID, s.UsNat.NAME],
            [a.UsCa.ID, a.UsCa.NAME],
            [c.UsVa.ID, c.UsVa.NAME],
            [d.UsCo.ID, d.UsCo.NAME],
            [l.UsUt.ID, l.UsUt.NAME],
            [u.UsCt.ID, u.UsCt.NAME],
            [E.UsFl.ID, E.UsFl.NAME],
            [p.UsMt.ID, p.UsMt.NAME],
            [g.UsOr.ID, g.UsOr.NAME],
            [_.UsTx.ID, _.UsTx.NAME],
          ])),
          (S.SECTION_ORDER = [
            i.TcfEuV2.NAME,
            r.TcfCaV1.NAME,
            o.UspV1.NAME,
            s.UsNat.NAME,
            a.UsCa.NAME,
            c.UsVa.NAME,
            d.UsCo.NAME,
            l.UsUt.NAME,
            u.UsCt.NAME,
            E.UsFl.NAME,
            p.UsMt.NAME,
            g.UsOr.NAME,
            _.UsTx.NAME,
          ]);
      },
      5570: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfCaV1 = void 0);
        const i = n(4149),
          r = n(6698),
          o = n(2028),
          s = n(2418),
          a = n(509),
          c = n(7642);
        class d extends a.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return d.ID;
          }
          getName() {
            return d.NAME;
          }
          getVersion() {
            return d.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new r.TcfCaV1CoreSegment()),
              e.push(new o.TcfCaV1PublisherPurposesSegment()),
              e.push(new s.TcfCaV1DisclosedVendorsSegment()),
              e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              for (let e = 0; e < n.length; e++) {
                let i = n[e];
                if (0 !== i.length) {
                  let r = i.charAt(0);
                  if (r >= "A" && r <= "H") t[0].decode(n[e]);
                  else if (r >= "I" && r <= "P") t[2].decode(n[e]);
                  else {
                    if (!((r >= "Y" && r <= "Z") || (r >= "a" && r <= "f")))
                      throw new c.DecodingError(
                        "Unable to decode TcfCaV1 segment '" + i + "'",
                      );
                    t[1].decode(n[e]);
                  }
                }
              }
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              t.push(e[0].encode()),
              t.push(e[1].encode()),
              this.getFieldValue(i.TcfCaV1Field.DISCLOSED_VENDORS).length > 0 &&
                t.push(e[2].encode()),
              t.join(".")
            );
          }
          setFieldValue(e, t) {
            if (
              (super.setFieldValue(e, t),
              e !== i.TcfCaV1Field.CREATED && e !== i.TcfCaV1Field.LAST_UPDATED)
            ) {
              let e = new Date();
              super.setFieldValue(i.TcfCaV1Field.CREATED, e),
                super.setFieldValue(i.TcfCaV1Field.LAST_UPDATED, e);
            }
          }
        }
        (t.TcfCaV1 = d), (d.ID = 5), (d.VERSION = 1), (d.NAME = "tcfcav1");
      },
      7249: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfEuV2 = void 0);
        const i = n(7642),
          r = n(6316),
          o = n(5815),
          s = n(7399),
          a = n(3509),
          c = n(1381),
          d = n(509);
        class l extends d.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return l.ID;
          }
          getName() {
            return l.NAME;
          }
          getVersion() {
            return l.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new o.TcfEuV2CoreSegment()),
              e.push(new s.TcfEuV2PublisherPurposesSegment()),
              e.push(new a.TcfEuV2VendorsAllowedSegment()),
              e.push(new c.TcfEuV2VendorsDisclosedSegment()),
              e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              for (let e = 0; e < n.length; e++) {
                let r = n[e];
                if (0 !== r.length) {
                  let o = r.charAt(0);
                  if (o >= "A" && o <= "H") t[0].decode(n[e]);
                  else if (o >= "I" && o <= "P") t[3].decode(n[e]);
                  else if (o >= "Q" && o <= "X") t[2].decode(n[e]);
                  else {
                    if (!((o >= "Y" && o <= "Z") || (o >= "a" && o <= "f")))
                      throw new i.DecodingError(
                        "Unable to decode TcfEuV2 segment '" + r + "'",
                      );
                    t[1].decode(n[e]);
                  }
                }
              }
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              e.length >= 1 &&
                (t.push(e[0].encode()),
                this.getFieldValue(r.TcfEuV2Field.IS_SERVICE_SPECIFIC)
                  ? e.length >= 2 && t.push(e[1].encode())
                  : e.length >= 2 &&
                    (t.push(e[2].encode()),
                    e.length >= 3 && t.push(e[3].encode()))),
              t.join(".")
            );
          }
          setFieldValue(e, t) {
            if (
              (super.setFieldValue(e, t),
              e !== r.TcfEuV2Field.CREATED && e !== r.TcfEuV2Field.LAST_UPDATED)
            ) {
              let e = new Date();
              super.setFieldValue(r.TcfEuV2Field.CREATED, e),
                super.setFieldValue(r.TcfEuV2Field.LAST_UPDATED, e);
            }
          }
        }
        (t.TcfEuV2 = l), (l.ID = 2), (l.VERSION = 2), (l.NAME = "tcfeuv2");
      },
      8420: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCa = void 0);
        const i = n(1877),
          r = n(3852),
          o = n(8683),
          s = n(509);
        class a extends s.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return a.ID;
          }
          getName() {
            return a.NAME;
          }
          getVersion() {
            return a.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new r.UsCaCoreSegment()), e.push(new o.UsCaGpcSegment()), e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              n.length > 0 && t[0].decode(n[0]),
                n.length > 1
                  ? (t[1].setFieldValue(i.UsCaField.GPC_SEGMENT_INCLUDED, !0),
                    t[1].decode(n[1]))
                  : t[1].setFieldValue(i.UsCaField.GPC_SEGMENT_INCLUDED, !1);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              e.length >= 1 &&
                (t.push(e[0].encode()),
                e.length >= 2 &&
                  !0 === e[1].getFieldValue(i.UsCaField.GPC_SEGMENT_INCLUDED) &&
                  t.push(e[1].encode())),
              t.join(".")
            );
          }
        }
        (t.UsCa = a), (a.ID = 8), (a.VERSION = 1), (a.NAME = "usca");
      },
      1690: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCo = void 0);
        const i = n(509),
          r = n(5599),
          o = n(4314),
          s = n(8393);
        class a extends i.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return a.ID;
          }
          getName() {
            return a.NAME;
          }
          getVersion() {
            return a.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new o.UsCoCoreSegment()), e.push(new s.UsCoGpcSegment()), e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              n.length > 0 && t[0].decode(n[0]),
                n.length > 1
                  ? (t[1].setFieldValue(r.UsCoField.GPC_SEGMENT_INCLUDED, !0),
                    t[1].decode(n[1]))
                  : t[1].setFieldValue(r.UsCoField.GPC_SEGMENT_INCLUDED, !1);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              e.length >= 1 &&
                (t.push(e[0].encode()),
                e.length >= 2 &&
                  !0 === e[1].getFieldValue(r.UsCoField.GPC_SEGMENT_INCLUDED) &&
                  t.push(e[1].encode())),
              t.join(".")
            );
          }
        }
        (t.UsCo = a), (a.ID = 10), (a.VERSION = 1), (a.NAME = "usco");
      },
      863: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCt = void 0);
        const i = n(5404),
          r = n(5173),
          o = n(6452),
          s = n(509);
        class a extends s.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return a.ID;
          }
          getName() {
            return a.NAME;
          }
          getVersion() {
            return a.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new r.UsCtCoreSegment()), e.push(new o.UsCtGpcSegment()), e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              n.length > 0 && t[0].decode(n[0]),
                n.length > 1
                  ? (t[1].setFieldValue(i.UsCtField.GPC_SEGMENT_INCLUDED, !0),
                    t[1].decode(n[1]))
                  : t[1].setFieldValue(i.UsCtField.GPC_SEGMENT_INCLUDED, !1);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              e.length >= 1 &&
                (t.push(e[0].encode()),
                e.length >= 2 &&
                  !0 === e[1].getFieldValue(i.UsCtField.GPC_SEGMENT_INCLUDED) &&
                  t.push(e[1].encode())),
              t.join(".")
            );
          }
        }
        (t.UsCt = a), (a.ID = 12), (a.VERSION = 1), (a.NAME = "usct");
      },
      4526: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsFl = void 0);
        const i = n(66),
          r = n(509);
        class o extends r.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return o.ID;
          }
          getName() {
            return o.NAME;
          }
          getVersion() {
            return o.VERSION;
          }
          initializeSegments() {
            let e = [];
            return e.push(new i.UsFlCoreSegment()), e;
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              for (let e = 0; e < t.length; e++)
                n.length > e && t[e].decode(n[e]);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            for (let n = 0; n < e.length; n++) {
              let i = e[n];
              t.push(i.encode());
            }
            return t.join(".");
          }
        }
        (t.UsFl = o), (o.ID = 13), (o.VERSION = 1), (o.NAME = "usfl");
      },
      7017: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsMt = void 0);
        const i = n(7094),
          r = n(3175),
          o = n(1302),
          s = n(509);
        class a extends s.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return a.ID;
          }
          getName() {
            return a.NAME;
          }
          getVersion() {
            return a.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new r.UsMtCoreSegment()), e.push(new o.UsMtGpcSegment()), e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              n.length > 0 && t[0].decode(n[0]),
                n.length > 1
                  ? (t[1].setFieldValue(i.UsMtField.GPC_SEGMENT_INCLUDED, !0),
                    t[1].decode(n[1]))
                  : t[1].setFieldValue(i.UsMtField.GPC_SEGMENT_INCLUDED, !1);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              e.length >= 1 &&
                (t.push(e[0].encode()),
                e.length >= 2 &&
                  !0 === e[1].getFieldValue(i.UsMtField.GPC_SEGMENT_INCLUDED) &&
                  t.push(e[1].encode())),
              t.join(".")
            );
          }
        }
        (t.UsMt = a), (a.ID = 14), (a.VERSION = 1), (a.NAME = "usmt");
      },
      4161: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsNat = void 0);
        const i = n(509),
          r = n(8776),
          o = n(719),
          s = n(5502);
        class a extends i.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return a.ID;
          }
          getName() {
            return a.NAME;
          }
          getVersion() {
            return a.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new o.UsNatCoreSegment()),
              e.push(new s.UsNatGpcSegment()),
              e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              n.length > 0 && t[0].decode(n[0]),
                n.length > 1
                  ? (t[1].setFieldValue(r.UsNatField.GPC_SEGMENT_INCLUDED, !0),
                    t[1].decode(n[1]))
                  : t[1].setFieldValue(r.UsNatField.GPC_SEGMENT_INCLUDED, !1);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              e.length >= 1 &&
                (t.push(e[0].encode()),
                e.length >= 2 &&
                  !0 ===
                    e[1].getFieldValue(r.UsNatField.GPC_SEGMENT_INCLUDED) &&
                  t.push(e[1].encode())),
              t.join(".")
            );
          }
        }
        (t.UsNat = a), (a.ID = 7), (a.VERSION = 1), (a.NAME = "usnat");
      },
      2849: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsOr = void 0);
        const i = n(8354),
          r = n(8135),
          o = n(166),
          s = n(509);
        class a extends s.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return a.ID;
          }
          getName() {
            return a.NAME;
          }
          getVersion() {
            return a.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new r.UsOrCoreSegment()), e.push(new o.UsOrGpcSegment()), e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              n.length > 0 && t[0].decode(n[0]),
                n.length > 1
                  ? (t[1].setFieldValue(i.UsOrField.GPC_SEGMENT_INCLUDED, !0),
                    t[1].decode(n[1]))
                  : t[1].setFieldValue(i.UsOrField.GPC_SEGMENT_INCLUDED, !1);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              e.length >= 1 &&
                (t.push(e[0].encode()),
                e.length >= 2 &&
                  !0 === e[1].getFieldValue(i.UsOrField.GPC_SEGMENT_INCLUDED) &&
                  t.push(e[1].encode())),
              t.join(".")
            );
          }
        }
        (t.UsOr = a), (a.ID = 15), (a.VERSION = 1), (a.NAME = "usor");
      },
      9088: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsTx = void 0);
        const i = n(8053),
          r = n(6164),
          o = n(1011),
          s = n(509);
        class a extends s.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return a.ID;
          }
          getName() {
            return a.NAME;
          }
          getVersion() {
            return a.VERSION;
          }
          initializeSegments() {
            let e = [];
            return (
              e.push(new r.UsTxCoreSegment()), e.push(new o.UsTxGpcSegment()), e
            );
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              n.length > 0 && t[0].decode(n[0]),
                n.length > 1
                  ? (t[1].setFieldValue(i.UsTxField.GPC_SEGMENT_INCLUDED, !0),
                    t[1].decode(n[1]))
                  : t[1].setFieldValue(i.UsTxField.GPC_SEGMENT_INCLUDED, !1);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            return (
              e.length >= 1 &&
                (t.push(e[0].encode()),
                e.length >= 2 &&
                  !0 === e[1].getFieldValue(i.UsTxField.GPC_SEGMENT_INCLUDED) &&
                  t.push(e[1].encode())),
              t.join(".")
            );
          }
        }
        (t.UsTx = a), (a.ID = 16), (a.VERSION = 1), (a.NAME = "ustx");
      },
      8913: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsUt = void 0);
        const i = n(8767),
          r = n(509);
        class o extends r.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return o.ID;
          }
          getName() {
            return o.NAME;
          }
          getVersion() {
            return o.VERSION;
          }
          initializeSegments() {
            let e = [];
            return e.push(new i.UsUtCoreSegment()), e;
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              for (let e = 0; e < t.length; e++)
                n.length > e && t[e].decode(n[e]);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            for (let n = 0; n < e.length; n++) {
              let i = e[n];
              t.push(i.encode());
            }
            return t.join(".");
          }
        }
        (t.UsUt = o), (o.ID = 11), (o.VERSION = 1), (o.NAME = "usut");
      },
      5977: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsVa = void 0);
        const i = n(203),
          r = n(509);
        class o extends r.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return o.ID;
          }
          getName() {
            return o.NAME;
          }
          getVersion() {
            return o.VERSION;
          }
          initializeSegments() {
            let e = [];
            return e.push(new i.UsVaCoreSegment()), e;
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              for (let e = 0; e < t.length; e++)
                n.length > e && t[e].decode(n[e]);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            for (let n = 0; n < e.length; n++) {
              let i = e[n];
              t.push(i.encode());
            }
            return t.join(".");
          }
        }
        (t.UsVa = o), (o.ID = 9), (o.VERSION = 1), (o.NAME = "usva");
      },
      3047: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UspV1 = void 0);
        const i = n(1905),
          r = n(509);
        class o extends r.AbstractLazilyEncodableSection {
          constructor(e) {
            super(), e && e.length > 0 && this.decode(e);
          }
          getId() {
            return o.ID;
          }
          getName() {
            return o.NAME;
          }
          getVersion() {
            return o.VERSION;
          }
          initializeSegments() {
            let e = [];
            return e.push(new i.UspV1CoreSegment()), e;
          }
          decodeSection(e) {
            let t = this.initializeSegments();
            if (null != e && 0 !== e.length) {
              let n = e.split(".");
              for (let e = 0; e < t.length; e++)
                n.length > e && t[e].decode(n[e]);
            }
            return t;
          }
          encodeSection(e) {
            let t = [];
            for (let n = 0; n < e.length; n++) {
              let i = e[n];
              t.push(i.encode());
            }
            return t.join(".");
          }
        }
        (t.UspV1 = o), (o.ID = 6), (o.VERSION = 1), (o.NAME = "uspv1");
      },
      8878: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(509), t),
          r(n(7866), t),
          r(n(4288), t),
          r(n(2552), t),
          r(n(5570), t),
          r(n(7249), t),
          r(n(8420), t),
          r(n(1690), t),
          r(n(863), t),
          r(n(4526), t),
          r(n(7017), t),
          r(n(4161), t),
          r(n(7017), t),
          r(n(9088), t),
          r(n(8913), t),
          r(n(3047), t),
          r(n(5977), t);
      },
      7577: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbstractLazilyEncodableSegment = void 0);
        const i = n(7370);
        t.AbstractLazilyEncodableSegment = class {
          constructor() {
            (this.encodedString = null),
              (this.dirty = !1),
              (this.decoded = !0),
              (this.fields = this.initializeFields());
          }
          validate() {}
          hasField(e) {
            return this.fields.containsKey(e);
          }
          getFieldValue(e) {
            if (
              (this.decoded ||
                (this.decodeSegment(this.encodedString, this.fields),
                (this.dirty = !1),
                (this.decoded = !0)),
              this.fields.containsKey(e))
            )
              return this.fields.get(e).getValue();
            throw new i.InvalidFieldError("Invalid field: '" + e + "'");
          }
          setFieldValue(e, t) {
            if (
              (this.decoded ||
                (this.decodeSegment(this.encodedString, this.fields),
                (this.dirty = !1),
                (this.decoded = !0)),
              !this.fields.containsKey(e))
            )
              throw new i.InvalidFieldError(e + " not found");
            this.fields.get(e).setValue(t), (this.dirty = !0);
          }
          toObj() {
            let e = {},
              t = this.getFieldNames();
            for (let n = 0; n < t.length; n++) {
              let i = t[n],
                r = this.getFieldValue(i);
              e[i] = r;
            }
            return e;
          }
          encode() {
            return (
              (null == this.encodedString ||
                0 === this.encodedString.length ||
                this.dirty) &&
                (this.validate(),
                (this.encodedString = this.encodeSegment(this.fields)),
                (this.dirty = !1),
                (this.decoded = !0)),
              this.encodedString
            );
          }
          decode(e) {
            (this.encodedString = e), (this.dirty = !1), (this.decoded = !1);
          }
        };
      },
      3626: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      224: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HeaderV1CoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(3425),
          s = n(7568),
          a = n(7642),
          c = n(7943),
          d = n(4617),
          l = n(4617),
          u = n(4288),
          E = n(7577);
        class p extends E.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.HEADER_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.HeaderV1Field.ID.toString(),
                new s.EncodableFixedInteger(6, u.HeaderV1.ID),
              ),
              e.put(
                l.HeaderV1Field.VERSION.toString(),
                new s.EncodableFixedInteger(6, u.HeaderV1.VERSION),
              ),
              e.put(
                l.HeaderV1Field.SECTION_IDS.toString(),
                new o.EncodableFibonacciIntegerRange([]),
              ),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode HeaderV1CoreSegment '" + e + "'",
              );
            }
          }
        }
        t.HeaderV1CoreSegment = p;
      },
      6698: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfCaV1CoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(244),
          s = n(5662),
          a = n(8933),
          c = n(6653),
          d = n(7568),
          l = n(65),
          u = n(4360),
          E = n(7642),
          p = n(7943),
          g = n(4149),
          _ = n(4149),
          S = n(5570),
          h = n(7577);
        class f extends h.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return g.TCFCAV1_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new Date(),
              t = new p.EncodableBitStringFields();
            return (
              t.put(
                _.TcfCaV1Field.VERSION.toString(),
                new d.EncodableFixedInteger(6, S.TcfCaV1.VERSION),
              ),
              t.put(
                _.TcfCaV1Field.CREATED.toString(),
                new a.EncodableDatetime(e),
              ),
              t.put(
                _.TcfCaV1Field.LAST_UPDATED.toString(),
                new a.EncodableDatetime(e),
              ),
              t.put(
                _.TcfCaV1Field.CMP_ID.toString(),
                new d.EncodableFixedInteger(12, 0),
              ),
              t.put(
                _.TcfCaV1Field.CMP_VERSION.toString(),
                new d.EncodableFixedInteger(12, 0),
              ),
              t.put(
                _.TcfCaV1Field.CONSENT_SCREEN.toString(),
                new d.EncodableFixedInteger(6, 0),
              ),
              t.put(
                _.TcfCaV1Field.CONSENT_LANGUAGE.toString(),
                new l.EncodableFixedString(2, "EN"),
              ),
              t.put(
                _.TcfCaV1Field.VENDOR_LIST_VERSION.toString(),
                new d.EncodableFixedInteger(12, 0),
              ),
              t.put(
                _.TcfCaV1Field.TCF_POLICY_VERSION.toString(),
                new d.EncodableFixedInteger(6, 2),
              ),
              t.put(
                _.TcfCaV1Field.USE_NON_STANDARD_STACKS.toString(),
                new s.EncodableBoolean(!1),
              ),
              t.put(
                _.TcfCaV1Field.SPECIAL_FEATURE_EXPRESS_CONSENT.toString(),
                new c.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              ),
              t.put(
                _.TcfCaV1Field.PURPOSES_EXPRESS_CONSENT.toString(),
                new c.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              ),
              t.put(
                _.TcfCaV1Field.PURPOSES_IMPLIED_CONSENT.toString(),
                new c.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              ),
              t.put(
                _.TcfCaV1Field.VENDOR_EXPRESS_CONSENT.toString(),
                new u.EncodableOptimizedFixedRange([]),
              ),
              t.put(
                _.TcfCaV1Field.VENDOR_IMPLIED_CONSENT.toString(),
                new u.EncodableOptimizedFixedRange([]),
              ),
              t.put(
                _.TcfCaV1Field.PUB_RESTRICTIONS.toString(),
                new o.EncodableArrayOfFixedIntegerRanges(6, 2, [], !1),
              ),
              t
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new E.DecodingError(
                "Unable to decode TcfCaV1CoreSegment '" + e + "'",
              );
            }
          }
        }
        t.TcfCaV1CoreSegment = f;
      },
      2418: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfCaV1DisclosedVendorsSegment = void 0);
        const i = n(2277),
          r = n(3905),
          o = n(7568),
          s = n(4360),
          a = n(7642),
          c = n(7943),
          d = n(4149),
          l = n(4149),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.TraditionalBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.TCFCAV1_DISCLOSED_VENDORS_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.TcfCaV1Field.DISCLOSED_VENDORS_SEGMENT_TYPE.toString(),
                new o.EncodableFixedInteger(3, 1),
              ),
              e.put(
                l.TcfCaV1Field.DISCLOSED_VENDORS.toString(),
                new s.EncodableOptimizedFixedRange([]),
              ),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode HeaderV1CoreSegment '" + e + "'",
              );
            }
          }
        }
        t.TcfCaV1DisclosedVendorsSegment = E;
      },
      2028: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfCaV1PublisherPurposesSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(6653),
          s = n(7568),
          a = n(1342),
          c = n(7642),
          d = n(7943),
          l = n(4149),
          u = n(4149),
          E = n(7577);
        class p extends E.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.TCFCAV1_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new d.EncodableBitStringFields();
            e.put(
              u.TcfCaV1Field.PUB_PURPOSES_SEGMENT_TYPE.toString(),
              new s.EncodableFixedInteger(3, 3),
            ),
              e.put(
                u.TcfCaV1Field.PUB_PURPOSES_EXPRESS_CONSENT.toString(),
                new o.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              ),
              e.put(
                u.TcfCaV1Field.PUB_PURPOSES_IMPLIED_CONSENT.toString(),
                new o.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              );
            let t = new s.EncodableFixedInteger(6, 0);
            return (
              e.put(u.TcfCaV1Field.NUM_CUSTOM_PURPOSES.toString(), t),
              e.put(
                u.TcfCaV1Field.CUSTOM_PURPOSES_EXPRESS_CONSENT.toString(),
                new a.EncodableFlexibleBitfield(() => t.getValue(), []),
              ),
              e.put(
                u.TcfCaV1Field.CUSTOM_PURPOSES_IMPLIED_CONSENT.toString(),
                new a.EncodableFlexibleBitfield(() => t.getValue(), []),
              ),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new c.DecodingError(
                "Unable to decode TcfCaV1PublisherPurposesSegment '" + e + "'",
              );
            }
          }
        }
        t.TcfCaV1PublisherPurposesSegment = p;
      },
      5815: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfEuV2CoreSegment = void 0);
        const i = n(2277),
          r = n(3905),
          o = n(244),
          s = n(5662),
          a = n(8933),
          c = n(6653),
          d = n(7568),
          l = n(65),
          u = n(4360),
          E = n(7642),
          p = n(7943),
          g = n(6316),
          _ = n(6316),
          S = n(7249),
          h = n(7577);
        class f extends h.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.TraditionalBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return g.TCFEUV2_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new Date(),
              t = new p.EncodableBitStringFields();
            return (
              t.put(
                _.TcfEuV2Field.VERSION.toString(),
                new d.EncodableFixedInteger(6, S.TcfEuV2.VERSION),
              ),
              t.put(
                _.TcfEuV2Field.CREATED.toString(),
                new a.EncodableDatetime(e),
              ),
              t.put(
                _.TcfEuV2Field.LAST_UPDATED.toString(),
                new a.EncodableDatetime(e),
              ),
              t.put(
                _.TcfEuV2Field.CMP_ID.toString(),
                new d.EncodableFixedInteger(12, 0),
              ),
              t.put(
                _.TcfEuV2Field.CMP_VERSION.toString(),
                new d.EncodableFixedInteger(12, 0),
              ),
              t.put(
                _.TcfEuV2Field.CONSENT_SCREEN.toString(),
                new d.EncodableFixedInteger(6, 0),
              ),
              t.put(
                _.TcfEuV2Field.CONSENT_LANGUAGE.toString(),
                new l.EncodableFixedString(2, "EN"),
              ),
              t.put(
                _.TcfEuV2Field.VENDOR_LIST_VERSION.toString(),
                new d.EncodableFixedInteger(12, 0),
              ),
              t.put(
                _.TcfEuV2Field.POLICY_VERSION.toString(),
                new d.EncodableFixedInteger(6, 2),
              ),
              t.put(
                _.TcfEuV2Field.IS_SERVICE_SPECIFIC.toString(),
                new s.EncodableBoolean(!1),
              ),
              t.put(
                _.TcfEuV2Field.USE_NON_STANDARD_STACKS.toString(),
                new s.EncodableBoolean(!1),
              ),
              t.put(
                _.TcfEuV2Field.SPECIAL_FEATURE_OPTINS.toString(),
                new c.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              ),
              t.put(
                _.TcfEuV2Field.PURPOSE_CONSENTS.toString(),
                new c.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              ),
              t.put(
                _.TcfEuV2Field.PURPOSE_LEGITIMATE_INTERESTS.toString(),
                new c.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              ),
              t.put(
                _.TcfEuV2Field.PURPOSE_ONE_TREATMENT.toString(),
                new s.EncodableBoolean(!1),
              ),
              t.put(
                _.TcfEuV2Field.PUBLISHER_COUNTRY_CODE.toString(),
                new l.EncodableFixedString(2, "AA"),
              ),
              t.put(
                _.TcfEuV2Field.VENDOR_CONSENTS.toString(),
                new u.EncodableOptimizedFixedRange([]),
              ),
              t.put(
                _.TcfEuV2Field.VENDOR_LEGITIMATE_INTERESTS.toString(),
                new u.EncodableOptimizedFixedRange([]),
              ),
              t.put(
                _.TcfEuV2Field.PUBLISHER_RESTRICTIONS.toString(),
                new o.EncodableArrayOfFixedIntegerRanges(6, 2, [], !1),
              ),
              t
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new E.DecodingError(
                "Unable to decode TcfEuV2CoreSegment '" + e + "'",
              );
            }
          }
        }
        t.TcfEuV2CoreSegment = f;
      },
      7399: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfEuV2PublisherPurposesSegment = void 0);
        const i = n(2277),
          r = n(3905),
          o = n(6653),
          s = n(7568),
          a = n(1342),
          c = n(7642),
          d = n(7943),
          l = n(6316),
          u = n(6316),
          E = n(7577);
        class p extends E.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.TraditionalBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.TCFEUV2_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new d.EncodableBitStringFields();
            e.put(
              u.TcfEuV2Field.PUBLISHER_PURPOSES_SEGMENT_TYPE.toString(),
              new s.EncodableFixedInteger(3, 3),
            ),
              e.put(
                u.TcfEuV2Field.PUBLISHER_CONSENTS.toString(),
                new o.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              ),
              e.put(
                u.TcfEuV2Field.PUBLISHER_LEGITIMATE_INTERESTS.toString(),
                new o.EncodableFixedBitfield([
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                  !1,
                ]),
              );
            let t = new s.EncodableFixedInteger(6, 0);
            return (
              e.put(u.TcfEuV2Field.NUM_CUSTOM_PURPOSES.toString(), t),
              e.put(
                u.TcfEuV2Field.PUBLISHER_CUSTOM_CONSENTS.toString(),
                new a.EncodableFlexibleBitfield(() => t.getValue(), []),
              ),
              e.put(
                u.TcfEuV2Field.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS.toString(),
                new a.EncodableFlexibleBitfield(() => t.getValue(), []),
              ),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new c.DecodingError(
                "Unable to decode TcfEuV2PublisherPurposesSegment '" + e + "'",
              );
            }
          }
        }
        t.TcfEuV2PublisherPurposesSegment = p;
      },
      3509: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfEuV2VendorsAllowedSegment = void 0);
        const i = n(2277),
          r = n(3905),
          o = n(7568),
          s = n(4360),
          a = n(7642),
          c = n(7943),
          d = n(6316),
          l = n(6316),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.TraditionalBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.TCFEUV2_VENDORS_ALLOWED_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.TcfEuV2Field.VENDORS_ALLOWED_SEGMENT_TYPE.toString(),
                new o.EncodableFixedInteger(3, 2),
              ),
              e.put(
                l.TcfEuV2Field.VENDORS_ALLOWED.toString(),
                new s.EncodableOptimizedFixedRange([]),
              ),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode TcfEuV2VendorsAllowedSegment '" + e + "'",
              );
            }
          }
        }
        t.TcfEuV2VendorsAllowedSegment = E;
      },
      1381: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TcfEuV2VendorsDisclosedSegment = void 0);
        const i = n(2277),
          r = n(3905),
          o = n(7568),
          s = n(4360),
          a = n(7642),
          c = n(7943),
          d = n(6316),
          l = n(6316),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.TraditionalBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.TCFEUV2_VENDORS_DISCLOSED_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.TcfEuV2Field.VENDORS_DISCLOSED_SEGMENT_TYPE.toString(),
                new o.EncodableFixedInteger(3, 1),
              ),
              e.put(
                l.TcfEuV2Field.VENDORS_DISCLOSED.toString(),
                new s.EncodableOptimizedFixedRange([]),
              ),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode TcfEuV2VendorsDisclosedSegment '" + e + "'",
              );
            }
          }
        }
        t.TcfEuV2VendorsDisclosedSegment = E;
      },
      3852: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCaCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(1877),
          u = n(1877),
          E = n(8420),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USCA_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsCaField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsCa.VERSION),
              ),
              i.put(
                u.UsCaField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCaField.SHARING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCaField.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCaField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCaField.SHARING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCaField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsCaField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new s.EncodableFixedIntegerList(2, [0, 0]).withValidator(n),
              ),
              i.put(
                u.UsCaField.PERSONAL_DATA_CONSENTS.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCaField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsCaField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCaField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsCaCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields
                .get(u.UsCaField.SHARING_OPT_OUT_NOTICE)
                .getValue(),
              t = this.fields.get(u.UsCaField.SHARING_OPT_OUT).getValue(),
              n = this.fields.get(u.UsCaField.SALE_OPT_OUT_NOTICE).getValue(),
              i = this.fields.get(u.UsCaField.SALE_OPT_OUT).getValue(),
              r = this.fields
                .get(u.UsCaField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsCaField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue(),
              s = this.fields
                .get(u.UsCaField.SENSITIVE_DATA_LIMIT_USE_NOTICE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usca sharing notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usca sharing notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usca sharing notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usca sale notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != i && 2 != i)
                throw new c.ValidationError(
                  "Invalid usca sale notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != i)
              throw new c.ValidationError(
                "Invalid usca sale notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != n)
                throw new c.ValidationError(
                  "Invalid usca mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    n +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usca mspa service provider mode / sharing opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
              if (0 != s)
                throw new c.ValidationError(
                  "Invalid usca mspa service provider mode / sensitive data limit use notice combination: {" +
                    r +
                    " / " +
                    s +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usca mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != n)
                throw new c.ValidationError(
                  "Invalid usca mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    n +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usca mspa service provider mode / sharing opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
              if (0 != s)
                throw new c.ValidationError(
                  "Invalid usca mspa service provider mode / sensitive data limit use notice combination: {" +
                    r +
                    " / " +
                    s +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usca mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsCaCoreSegment = g;
      },
      8683: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCaGpcSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(5662),
          s = n(7568),
          a = n(7642),
          c = n(7943),
          d = n(1877),
          l = n(1877),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.USCA_GPC_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.UsCaField.GPC_SEGMENT_TYPE.toString(),
                new s.EncodableFixedInteger(2, 1),
              ),
              e.put(
                l.UsCaField.GPC_SEGMENT_INCLUDED.toString(),
                new o.EncodableBoolean(!0),
              ),
              e.put(l.UsCaField.GPC.toString(), new o.EncodableBoolean(!1)),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsCaGpcSegment '" + e + "'",
              );
            }
          }
        }
        t.UsCaGpcSegment = E;
      },
      4314: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCoCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(5599),
          u = n(5599),
          E = n(1690),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USCO_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsCoField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsCo.VERSION),
              ),
              i.put(
                u.UsCoField.SHARING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCoField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCoField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCoField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCoField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCoField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsCoField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCoField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsCoField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCoField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsCoCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsCoField.SALE_OPT_OUT_NOTICE).getValue(),
              t = this.fields.get(u.UsCoField.SALE_OPT_OUT).getValue(),
              n = this.fields
                .get(u.UsCoField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              i = this.fields
                .get(u.UsCoField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              r = this.fields
                .get(u.UsCoField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsCoField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usco sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usco sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usco sale notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usco targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usco targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != t)
              throw new c.ValidationError(
                "Invalid usco targeted advertising notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usco mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usco mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usco mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usco mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsCoCoreSegment = g;
      },
      8393: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCoGpcSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(5662),
          s = n(7568),
          a = n(7642),
          c = n(7943),
          d = n(5599),
          l = n(5599),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.USCO_GPC_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.UsCoField.GPC_SEGMENT_TYPE.toString(),
                new s.EncodableFixedInteger(2, 1),
              ),
              e.put(
                l.UsCoField.GPC_SEGMENT_INCLUDED.toString(),
                new o.EncodableBoolean(!0),
              ),
              e.put(l.UsCoField.GPC.toString(), new o.EncodableBoolean(!1)),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsCoGpcSegment '" + e + "'",
              );
            }
          }
        }
        t.UsCoGpcSegment = E;
      },
      5173: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCtCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(5404),
          u = n(5404),
          E = n(863),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USCT_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsCtField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsCt.VERSION),
              ),
              i.put(
                u.UsCtField.SHARING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCtField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCtField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCtField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCtField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsCtField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new s.EncodableFixedIntegerList(2, [0, 0, 0]).withValidator(n),
              ),
              i.put(
                u.UsCtField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsCtField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsCtField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsCtCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsCtField.SALE_OPT_OUT_NOTICE).getValue(),
              t = this.fields.get(u.UsCtField.SALE_OPT_OUT).getValue(),
              n = this.fields
                .get(u.UsCtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              i = this.fields
                .get(u.UsCtField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              r = this.fields
                .get(u.UsCtField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsCtField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usct sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usct sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usct sale notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usct targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usct targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != t)
              throw new c.ValidationError(
                "Invalid usct targeted advertising notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usct mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsCtCoreSegment = g;
      },
      6452: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsCtGpcSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(5662),
          s = n(7568),
          a = n(7642),
          c = n(7943),
          d = n(5404),
          l = n(5404),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.USCT_GPC_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.UsCtField.GPC_SEGMENT_TYPE.toString(),
                new s.EncodableFixedInteger(2, 1),
              ),
              e.put(
                l.UsCtField.GPC_SEGMENT_INCLUDED.toString(),
                new o.EncodableBoolean(!0),
              ),
              e.put(l.UsCtField.GPC.toString(), new o.EncodableBoolean(!1)),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsCtGpcSegment '" + e + "'",
              );
            }
          }
        }
        t.UsCtGpcSegment = E;
      },
      66: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsFlCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(7392),
          u = n(7392),
          E = n(4526),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USFL_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsFlField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsFl.VERSION),
              ),
              i.put(
                u.UsFlField.PROCESSING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsFlField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsFlField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsFlField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsFlField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsFlField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsFlField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new s.EncodableFixedIntegerList(2, [0, 0, 0]).withValidator(n),
              ),
              i.put(
                u.UsFlField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsFlField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsFlField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsFlField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsFlCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsFlField.SALE_OPT_OUT_NOTICE).getValue(),
              t = this.fields.get(u.UsFlField.SALE_OPT_OUT).getValue(),
              n = this.fields
                .get(u.UsFlField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              i = this.fields
                .get(u.UsFlField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              r = this.fields
                .get(u.UsFlField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsFlField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usva sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usva sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usva sale notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usva targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usva targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != t)
              throw new c.ValidationError(
                "Invalid usva targeted advertising notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usva mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usva mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usva mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usva mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsFlCoreSegment = g;
      },
      3175: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsMtCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(7094),
          u = n(7094),
          E = n(7017),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USMT_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsMtField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsMt.VERSION),
              ),
              i.put(
                u.UsMtField.SHARING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsMtField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsMtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsMtField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsMtField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsMtField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsMtField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new s.EncodableFixedIntegerList(2, [0, 0, 0]).withValidator(n),
              ),
              i.put(
                u.UsMtField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsMtField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsMtField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsMtField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsMtCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsMtField.SALE_OPT_OUT_NOTICE).getValue(),
              t = this.fields.get(u.UsMtField.SALE_OPT_OUT).getValue(),
              n = this.fields
                .get(u.UsMtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              i = this.fields
                .get(u.UsMtField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              r = this.fields
                .get(u.UsMtField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsMtField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usct sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usct sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usct sale notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usct targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usct targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != t)
              throw new c.ValidationError(
                "Invalid usct targeted advertising notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usct mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsMtCoreSegment = g;
      },
      1302: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsMtGpcSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(5662),
          s = n(7568),
          a = n(7642),
          c = n(7943),
          d = n(7094),
          l = n(7094),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.USMT_GPC_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.UsMtField.GPC_SEGMENT_TYPE.toString(),
                new s.EncodableFixedInteger(2, 1),
              ),
              e.put(
                l.UsMtField.GPC_SEGMENT_INCLUDED.toString(),
                new o.EncodableBoolean(!0),
              ),
              e.put(l.UsMtField.GPC.toString(), new o.EncodableBoolean(!1)),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsMtGpcSegment '" + e + "'",
              );
            }
          }
        }
        t.UsMtGpcSegment = E;
      },
      719: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsNatCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(8776),
          u = n(8776),
          E = n(4161),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USNAT_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsNatField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsNat.VERSION),
              ),
              i.put(
                u.UsNatField.SHARING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.SHARING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.SHARING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsNatField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new s.EncodableFixedIntegerList(2, [0, 0]).withValidator(n),
              ),
              i.put(
                u.UsNatField.PERSONAL_DATA_CONSENTS.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsNatField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsNatField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsNatCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsNatField.SHARING_NOTICE).getValue(),
              t = this.fields
                .get(u.UsNatField.SHARING_OPT_OUT_NOTICE)
                .getValue(),
              n = this.fields.get(u.UsNatField.SHARING_OPT_OUT).getValue(),
              i = this.fields.get(u.UsNatField.SALE_OPT_OUT_NOTICE).getValue(),
              r = this.fields.get(u.UsNatField.SALE_OPT_OUT).getValue(),
              o = this.fields
                .get(u.UsNatField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              s = this.fields
                .get(u.UsNatField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              a = this.fields
                .get(u.UsNatField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              d = this.fields
                .get(u.UsNatField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue(),
              l = this.fields
                .get(u.UsNatField.SENSITIVE_DATA_LIMIT_USE_NOTICE)
                .getValue();
            if (0 == e) {
              if (0 != n)
                throw new c.ValidationError(
                  "Invalid usnat sharing notice / opt out combination: {" +
                    e +
                    " / " +
                    n +
                    "}",
                );
            } else if (1 == e) {
              if (1 != n && 2 != n)
                throw new c.ValidationError(
                  "Invalid usnat sharing notice / opt out combination: {" +
                    e +
                    " / " +
                    n +
                    "}",
                );
            } else if (2 == e && 1 != n)
              throw new c.ValidationError(
                "Invalid usnat sharing notice / opt out combination: {" +
                  e +
                  " / " +
                  n +
                  "}",
              );
            if (0 == t) {
              if (0 != n)
                throw new c.ValidationError(
                  "Invalid usnat sharing notice / opt out combination: {" +
                    t +
                    " / " +
                    n +
                    "}",
                );
            } else if (1 == t) {
              if (1 != n && 2 != n)
                throw new c.ValidationError(
                  "Invalid usnat sharing notice / opt out combination: {" +
                    t +
                    " / " +
                    n +
                    "}",
                );
            } else if (2 == t && 1 != n)
              throw new c.ValidationError(
                "Invalid usnat sharing notice / opt out combination: {" +
                  t +
                  " / " +
                  n +
                  "}",
              );
            if (0 == i) {
              if (0 != r)
                throw new c.ValidationError(
                  "Invalid usnat sale notice / opt out combination: {" +
                    i +
                    " / " +
                    r +
                    "}",
                );
            } else if (1 == i) {
              if (1 != r && 2 != r)
                throw new c.ValidationError(
                  "Invalid usnat sale notice / opt out combination: {" +
                    i +
                    " / " +
                    r +
                    "}",
                );
            } else if (2 == i && 1 != r)
              throw new c.ValidationError(
                "Invalid usnat sale notice / opt out combination: {" +
                  i +
                  " / " +
                  r +
                  "}",
              );
            if (0 == o) {
              if (0 != s)
                throw new c.ValidationError(
                  "Invalid usnat targeted advertising notice / opt out combination: {" +
                    o +
                    " / " +
                    s +
                    "}",
                );
            } else if (1 == o) {
              if (1 != r && 2 != r)
                throw new c.ValidationError(
                  "Invalid usnat targeted advertising notice / opt out combination: {" +
                    o +
                    " / " +
                    s +
                    "}",
                );
            } else if (2 == o && 1 != r)
              throw new c.ValidationError(
                "Invalid usnat targeted advertising notice / opt out combination: {" +
                  o +
                  " / " +
                  s +
                  "}",
              );
            if (0 == a) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usnat mspa service provider mode / sale opt out notice combination: {" +
                    a +
                    " / " +
                    i +
                    "}",
                );
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usnat mspa service provider mode / sharing opt out notice combination: {" +
                    a +
                    " / " +
                    t +
                    "}",
                );
              if (0 != l)
                throw new c.ValidationError(
                  "Invalid usnat mspa service provider mode / sensitive data limit use notice combination: {" +
                    a +
                    " / " +
                    l +
                    "}",
                );
            } else if (1 == a) {
              if (2 != d)
                throw new c.ValidationError(
                  "Invalid usnat mspa service provider / opt out option modes combination: {" +
                    a +
                    " / " +
                    a +
                    "}",
                );
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usnat mspa service provider mode / sale opt out notice combination: {" +
                    a +
                    " / " +
                    i +
                    "}",
                );
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usnat mspa service provider mode / sharing opt out notice combination: {" +
                    a +
                    " / " +
                    t +
                    "}",
                );
              if (0 != l)
                throw new c.ValidationError(
                  "Invalid usnat mspa service provider mode / sensitive data limit use notice combination: {" +
                    a +
                    " / " +
                    l +
                    "}",
                );
            } else if (2 == a && 1 != d)
              throw new c.ValidationError(
                "Invalid usnat mspa service provider / opt out option modes combination: {" +
                  a +
                  " / " +
                  d +
                  "}",
              );
          }
        }
        t.UsNatCoreSegment = g;
      },
      5502: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsNatGpcSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(5662),
          s = n(7568),
          a = n(7642),
          c = n(7943),
          d = n(8776),
          l = n(8776),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.USNAT_GPC_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.UsNatField.GPC_SEGMENT_TYPE.toString(),
                new s.EncodableFixedInteger(2, 1),
              ),
              e.put(
                l.UsNatField.GPC_SEGMENT_INCLUDED.toString(),
                new o.EncodableBoolean(!0),
              ),
              e.put(l.UsNatField.GPC.toString(), new o.EncodableBoolean(!1)),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsNatGpcSegment '" + e + "'",
              );
            }
          }
        }
        t.UsNatGpcSegment = E;
      },
      8135: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsOrCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(8354),
          u = n(8354),
          E = n(2849),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USOR_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsOrField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsOr.VERSION),
              ),
              i.put(
                u.UsOrField.PROCESSING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsOrField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsOrField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsOrField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsOrField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsOrField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsOrField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new s.EncodableFixedIntegerList(2, [0, 0, 0]).withValidator(n),
              ),
              i.put(
                u.UsOrField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsOrField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsOrField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsOrField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsOrCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsOrField.SALE_OPT_OUT_NOTICE).getValue(),
              t = this.fields.get(u.UsOrField.SALE_OPT_OUT).getValue(),
              n = this.fields
                .get(u.UsOrField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              i = this.fields
                .get(u.UsOrField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              r = this.fields
                .get(u.UsOrField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsOrField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usct sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usct sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usct sale notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usct targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usct targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != t)
              throw new c.ValidationError(
                "Invalid usct targeted advertising notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usct mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsOrCoreSegment = g;
      },
      166: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsOrGpcSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(5662),
          s = n(7568),
          a = n(7642),
          c = n(7943),
          d = n(8354),
          l = n(8354),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.USOR_GPC_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.UsOrField.GPC_SEGMENT_TYPE.toString(),
                new s.EncodableFixedInteger(2, 1),
              ),
              e.put(
                l.UsOrField.GPC_SEGMENT_INCLUDED.toString(),
                new o.EncodableBoolean(!0),
              ),
              e.put(l.UsOrField.GPC.toString(), new o.EncodableBoolean(!1)),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsOrGpcSegment '" + e + "'",
              );
            }
          }
        }
        t.UsOrGpcSegment = E;
      },
      6164: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsTxCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(8053),
          u = n(8053),
          E = n(9088),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USTX_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsTxField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsTx.VERSION),
              ),
              i.put(
                u.UsTxField.PROCESSING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsTxField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsTxField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsTxField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsTxField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsTxField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsTxField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsTxField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsTxField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsTxField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsTxField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsTxCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsTxField.SALE_OPT_OUT_NOTICE).getValue(),
              t = this.fields.get(u.UsTxField.SALE_OPT_OUT).getValue(),
              n = this.fields
                .get(u.UsTxField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              i = this.fields
                .get(u.UsTxField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              r = this.fields
                .get(u.UsTxField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsTxField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usct sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usct sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usct sale notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usct targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usct targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != t)
              throw new c.ValidationError(
                "Invalid usct targeted advertising notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usct mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usct mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsTxCoreSegment = g;
      },
      1011: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsTxGpcSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(5662),
          s = n(7568),
          a = n(7642),
          c = n(7943),
          d = n(8053),
          l = n(8053),
          u = n(7577);
        class E extends u.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return d.USTX_GPC_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            let e = new c.EncodableBitStringFields();
            return (
              e.put(
                l.UsTxField.GPC_SEGMENT_TYPE.toString(),
                new s.EncodableFixedInteger(2, 1),
              ),
              e.put(
                l.UsTxField.GPC_SEGMENT_INCLUDED.toString(),
                new o.EncodableBoolean(!0),
              ),
              e.put(l.UsTxField.GPC.toString(), new o.EncodableBoolean(!1)),
              e
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsTxGpcSegment '" + e + "'",
              );
            }
          }
        }
        t.UsTxGpcSegment = E;
      },
      8767: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsUtCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(1806),
          u = n(1806),
          E = n(8913),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USUT_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsUtField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsUt.VERSION),
              ),
              i.put(
                u.UsUtField.SHARING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsUtField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsUtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsUtField.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsUtField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsUtField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsUtField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsUtField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsUtField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsUtField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsUtField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsUtCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsUtField.SALE_OPT_OUT_NOTICE).getValue(),
              t = this.fields.get(u.UsUtField.SALE_OPT_OUT).getValue(),
              n = this.fields
                .get(u.UsUtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              i = this.fields
                .get(u.UsUtField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              r = this.fields
                .get(u.UsUtField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsUtField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usut sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usut sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usut sale notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usut targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usut targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != t)
              throw new c.ValidationError(
                "Invalid usut targeted advertising notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usut mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usut mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usut mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usut mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsUtCoreSegment = g;
      },
      203: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UsVaCoreSegment = void 0);
        const i = n(7683),
          r = n(3905),
          o = n(7568),
          s = n(1672),
          a = n(7642),
          c = n(1392),
          d = n(7943),
          l = n(5722),
          u = n(5722),
          E = n(5977),
          p = n(7577);
        class g extends p.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(),
              (this.base64UrlEncoder =
                i.CompressedBase64UrlEncoder.getInstance()),
              (this.bitStringEncoder = r.BitStringEncoder.getInstance()),
              e && this.decode(e);
          }
          getFieldNames() {
            return l.USVA_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
                test(e) {
                  return e >= 0 && e <= 2;
                }
              })(),
              t = new (class {
                test(e) {
                  return e >= 1 && e <= 2;
                }
              })(),
              n = new (class {
                test(e) {
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (n < 0 || n > 2) return !1;
                  }
                  return !0;
                }
              })();
            let i = new d.EncodableBitStringFields();
            return (
              i.put(
                u.UsVaField.VERSION.toString(),
                new o.EncodableFixedInteger(6, E.UsVa.VERSION),
              ),
              i.put(
                u.UsVaField.SHARING_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsVaField.SALE_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsVaField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsVaField.SALE_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsVaField.TARGETED_ADVERTISING_OPT_OUT.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsVaField.SENSITIVE_DATA_PROCESSING.toString(),
                new s.EncodableFixedIntegerList(
                  2,
                  [0, 0, 0, 0, 0, 0, 0, 0],
                ).withValidator(n),
              ),
              i.put(
                u.UsVaField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsVaField.MSPA_COVERED_TRANSACTION.toString(),
                new o.EncodableFixedInteger(2, 1).withValidator(t),
              ),
              i.put(
                u.UsVaField.MSPA_OPT_OUT_OPTION_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i.put(
                u.UsVaField.MSPA_SERVICE_PROVIDER_MODE.toString(),
                new o.EncodableFixedInteger(2, 0).withValidator(e),
              ),
              i
            );
          }
          encodeSegment(e) {
            let t = this.bitStringEncoder.encode(e, this.getFieldNames());
            return this.base64UrlEncoder.encode(t);
          }
          decodeSegment(e, t) {
            (null != e && 0 !== e.length) || this.fields.reset(t);
            try {
              let n = this.base64UrlEncoder.decode(e);
              this.bitStringEncoder.decode(n, this.getFieldNames(), t);
            } catch (t) {
              throw new a.DecodingError(
                "Unable to decode UsVaCoreSegment '" + e + "'",
              );
            }
          }
          validate() {
            let e = this.fields.get(u.UsVaField.SALE_OPT_OUT_NOTICE).getValue(),
              t = this.fields.get(u.UsVaField.SALE_OPT_OUT).getValue(),
              n = this.fields
                .get(u.UsVaField.TARGETED_ADVERTISING_OPT_OUT_NOTICE)
                .getValue(),
              i = this.fields
                .get(u.UsVaField.TARGETED_ADVERTISING_OPT_OUT)
                .getValue(),
              r = this.fields
                .get(u.UsVaField.MSPA_SERVICE_PROVIDER_MODE)
                .getValue(),
              o = this.fields
                .get(u.UsVaField.MSPA_OPT_OUT_OPTION_MODE)
                .getValue();
            if (0 == e) {
              if (0 != t)
                throw new c.ValidationError(
                  "Invalid usva sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (1 == e) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usva sale notice / opt out combination: {" +
                    e +
                    " / " +
                    t +
                    "}",
                );
            } else if (2 == e && 1 != t)
              throw new c.ValidationError(
                "Invalid usva sale notice / opt out combination: {" +
                  e +
                  " / " +
                  t +
                  "}",
              );
            if (0 == n) {
              if (0 != i)
                throw new c.ValidationError(
                  "Invalid usva targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (1 == n) {
              if (1 != t && 2 != t)
                throw new c.ValidationError(
                  "Invalid usva targeted advertising notice / opt out combination: {" +
                    n +
                    " / " +
                    i +
                    "}",
                );
            } else if (2 == n && 1 != t)
              throw new c.ValidationError(
                "Invalid usva targeted advertising notice / opt out combination: {" +
                  n +
                  " / " +
                  i +
                  "}",
              );
            if (0 == r) {
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usva mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (1 == r) {
              if (2 != o)
                throw new c.ValidationError(
                  "Invalid usva mspa service provider / opt out option modes combination: {" +
                    r +
                    " / " +
                    r +
                    "}",
                );
              if (0 != e)
                throw new c.ValidationError(
                  "Invalid usva mspa service provider mode / sale opt out notice combination: {" +
                    r +
                    " / " +
                    e +
                    "}",
                );
            } else if (2 == r && 1 != o)
              throw new c.ValidationError(
                "Invalid usva mspa service provider / opt out option modes combination: {" +
                  r +
                  " / " +
                  o +
                  "}",
              );
          }
        }
        t.UsVaCoreSegment = g;
      },
      1905: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UspV1CoreSegment = void 0);
        const i = n(8678),
          r = n(4939),
          o = n(7642),
          s = n(6781),
          a = n(4078),
          c = n(4078),
          d = n(3047),
          l = n(7577);
        class u extends l.AbstractLazilyEncodableSegment {
          constructor(e) {
            super(), e && this.decode(e);
          }
          getFieldNames() {
            return a.USPV1_CORE_SEGMENT_FIELD_NAMES;
          }
          initializeFields() {
            const e = new (class {
              test(e) {
                return "-" === e || "Y" === e || "N" === e;
              }
            })();
            let t = new s.GenericFields();
            return (
              t.put(
                c.UspV1Field.VERSION,
                new r.UnencodableInteger(d.UspV1.VERSION),
              ),
              t.put(c.UspV1Field.NOTICE, new i.UnencodableCharacter("-", e)),
              t.put(
                c.UspV1Field.OPT_OUT_SALE,
                new i.UnencodableCharacter("-", e),
              ),
              t.put(
                c.UspV1Field.LSPA_COVERED,
                new i.UnencodableCharacter("-", e),
              ),
              t
            );
          }
          encodeSegment(e) {
            let t = "";
            return (
              (t += e.get(c.UspV1Field.VERSION).getValue()),
              (t += e.get(c.UspV1Field.NOTICE).getValue()),
              (t += e.get(c.UspV1Field.OPT_OUT_SALE).getValue()),
              (t += e.get(c.UspV1Field.LSPA_COVERED).getValue()),
              t
            );
          }
          decodeSegment(e, t) {
            if (null == e || 4 != e.length)
              throw new o.DecodingError(
                "Unable to decode UspV1CoreSegment '" + e + "'",
              );
            try {
              t.get(c.UspV1Field.VERSION).setValue(parseInt(e.substring(0, 1))),
                t.get(c.UspV1Field.NOTICE).setValue(e.charAt(1)),
                t.get(c.UspV1Field.OPT_OUT_SALE).setValue(e.charAt(2)),
                t.get(c.UspV1Field.LSPA_COVERED).setValue(e.charAt(3));
            } catch (t) {
              throw new o.DecodingError(
                "Unable to decode UspV1CoreSegment '" + e + "'",
              );
            }
          }
        }
        t.UspV1CoreSegment = u;
      },
      8288: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(7577), t),
          r(n(3626), t),
          r(n(224), t),
          r(n(6698), t),
          r(n(2028), t),
          r(n(2418), t),
          r(n(5815), t),
          r(n(7399), t),
          r(n(3509), t),
          r(n(2418), t),
          r(n(3852), t),
          r(n(8683), t),
          r(n(4314), t),
          r(n(8393), t),
          r(n(5173), t),
          r(n(6452), t),
          r(n(66), t),
          r(n(3175), t),
          r(n(1302), t),
          r(n(719), t),
          r(n(5502), t),
          r(n(1905), t),
          r(n(8135), t),
          r(n(166), t),
          r(n(6164), t),
          r(n(1011), t),
          r(n(8767), t),
          r(n(203), t);
      },
      1570: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StringUtil = void 0);
        const i = n(9112);
        t.StringUtil = class {
          static substring(e, t, n) {
            if (n > e.length || t < 0 || t > n)
              throw new i.SubstringError(
                "Invalid substring indexes " +
                  t +
                  ":" +
                  n +
                  " for string of length " +
                  e.length,
              );
            return e.substring(t, n);
          }
        };
      },
      5679: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), r(n(1570), t);
      },
      5056: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.JsonHttpClient = void 0);
        t.JsonHttpClient = class {
          static absCall(e, t, n, i) {
            return new Promise((r, o) => {
              const s = new XMLHttpRequest();
              (s.withCredentials = n),
                s.addEventListener("load", () => {
                  if (s.readyState == XMLHttpRequest.DONE)
                    if (s.status >= 200 && s.status < 300) {
                      let e = s.response;
                      if ("string" == typeof e)
                        try {
                          e = JSON.parse(e);
                        } catch (e) {}
                      r(e);
                    } else
                      o(
                        new Error(
                          `HTTP Status: ${s.status} response type: ${s.responseType}`,
                        ),
                      );
                }),
                s.addEventListener("error", () => {
                  o(new Error("error"));
                }),
                s.addEventListener("abort", () => {
                  o(new Error("aborted"));
                }),
                null === t ? s.open("GET", e, !0) : s.open("POST", e, !0),
                (s.responseType = "json"),
                (s.timeout = i),
                (s.ontimeout = () => {
                  o(new Error("Timeout " + i + "ms " + e));
                }),
                s.send(t);
            });
          }
          static post(e, t, n = !1, i = 0) {
            return this.absCall(e, JSON.stringify(t), n, i);
          }
          static fetch(e, t = !1, n = 0) {
            return this.absCall(e, null, t, n);
          }
        };
      },
      1809: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), r(n(5056), t);
      },
      3497: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GVLError = void 0);
        class n extends Error {
          constructor(e) {
            super(e), (this.name = "GVLError");
          }
        }
        t.GVLError = n;
      },
      2740: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), r(n(3497), t);
      },
      5847: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7737: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ConsentLanguages = void 0);
        class n {
          has(e) {
            return n.langSet.has(e);
          }
          forEach(e) {
            n.langSet.forEach(e);
          }
          get size() {
            return n.langSet.size;
          }
        }
        (t.ConsentLanguages = n),
          (n.langSet = new Set([
            "BG",
            "CA",
            "CS",
            "DA",
            "DE",
            "EL",
            "EN",
            "ES",
            "ET",
            "FI",
            "FR",
            "HR",
            "HU",
            "IT",
            "JA",
            "LT",
            "LV",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "RO",
            "RU",
            "SK",
            "SL",
            "SV",
            "TR",
            "ZH",
          ]));
      },
      9656: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      833: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7840: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6408: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      299: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9825: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6128: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3298: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2550: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4074: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      945: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(5847), t),
          r(n(7737), t),
          r(n(833), t),
          r(n(7840), t),
          r(n(6408), t),
          r(n(299), t),
          r(n(9825), t),
          r(n(6128), t),
          r(n(3298), t),
          r(n(2550), t),
          r(n(4074), t),
          r(n(9656), t);
      },
      3977: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(1809), t),
          r(n(2740), t),
          r(n(945), t);
      },
      9877: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(6106), t),
          r(n(1862), t),
          r(n(3977), t),
          r(n(6961), t),
          r(n(3130), t);
      },
      3076: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__read) ||
            function (e, t) {
              var n = "function" == typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var i,
                r,
                o = n.call(e),
                s = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
                  s.push(i.value);
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
              return s;
            },
          r =
            (this && this.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var i, r = 0, o = t.length; r < o; r++)
                  (!i && r in t) ||
                    (i || (i = Array.prototype.slice.call(t, 0, r)),
                    (i[r] = t[r]));
              return e.concat(i || Array.prototype.slice.call(t));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CallResponder = t.API_KEY = void 0);
        var o = n(3016),
          s = n(6987),
          a = n(5011),
          c = n(4414),
          d = n(7121);
        t.API_KEY = "__tcfapi";
        var l = (function () {
          function e(e) {
            if (e) {
              var n = o.TCFCommand.ADD_EVENT_LISTENER;
              if (null == e ? void 0 : e[n])
                throw new Error(
                  "Built-In Custom Commmand for "
                    .concat(n, " not allowed: Use ")
                    .concat(o.TCFCommand.GET_TC_DATA, " instead"),
                );
              if (
                ((n = o.TCFCommand.REMOVE_EVENT_LISTENER),
                null == e ? void 0 : e[n])
              )
                throw new Error(
                  "Built-In Custom Commmand for ".concat(n, " not allowed"),
                );
              (null == e ? void 0 : e[o.TCFCommand.GET_TC_DATA]) &&
                ((e[o.TCFCommand.ADD_EVENT_LISTENER] =
                  e[o.TCFCommand.GET_TC_DATA]),
                (e[o.TCFCommand.REMOVE_EVENT_LISTENER] =
                  e[o.TCFCommand.GET_TC_DATA])),
                (this.customCommands = e);
            }
            try {
              this.callQueue = window[t.API_KEY]() || [];
            } catch (e) {
              this.callQueue = [];
            } finally {
              (window[t.API_KEY] = this.apiCall.bind(this)),
                this.purgeQueuedCalls();
            }
          }
          return (
            (e.prototype.apiCall = function (e, t, n) {
              for (var l, u = [], E = 3; E < arguments.length; E++)
                u[E - 3] = arguments[E];
              if ("string" != typeof e) n(null, !1);
              else if (d.SupportedVersions.has(t)) {
                if ("function" != typeof n)
                  throw new Error("invalid callback function");
                a.CmpApiModel.disabled
                  ? n(new c.Disabled(), !1)
                  : this.isCustomCommand(e) || this.isBuiltInCommand(e)
                    ? this.isCustomCommand(e) && !this.isBuiltInCommand(e)
                      ? (l = this.customCommands)[e].apply(l, r([n], i(u), !1))
                      : e === o.TCFCommand.PING
                        ? this.isCustomCommand(e)
                          ? new s.CommandMap[e](
                              this.customCommands[e],
                              u[0],
                              null,
                              n,
                            )
                          : new s.CommandMap[e](n, u[0])
                        : void 0 === a.CmpApiModel.tcModel
                          ? this.callQueue.push(r([e, t, n], i(u), !1))
                          : this.isCustomCommand(e) && this.isBuiltInCommand(e)
                            ? new s.CommandMap[e](
                                this.customCommands[e],
                                u[0],
                                null,
                                n,
                              )
                            : new s.CommandMap[e](n, u[0])
                    : n(null, !1);
              } else n(null, !1);
            }),
            (e.prototype.purgeQueuedCalls = function () {
              var e = this.callQueue;
              (this.callQueue = []),
                e.forEach(function (e) {
                  window[t.API_KEY].apply(window, r([], i(e), !1));
                });
            }),
            (e.prototype.isCustomCommand = function (e) {
              return (
                this.customCommands &&
                "function" == typeof this.customCommands[e]
              );
            }),
            (e.prototype.isBuiltInCommand = function (e) {
              return void 0 !== s.CommandMap[e];
            }),
            e
          );
        })();
        t.CallResponder = l;
      },
      3388: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CmpApi = void 0);
        var i = n(5011),
          r = n(7517),
          o = n(3076),
          s = n(1229),
          a = (function () {
            function e(e, t, n, r) {
              void 0 === n && (n = !1),
                (this.numUpdates = 0),
                this.throwIfInvalidInt(e, "cmpId", 2),
                this.throwIfInvalidInt(t, "cmpVersion", 0),
                (i.CmpApiModel.cmpId = e),
                (i.CmpApiModel.cmpVersion = t),
                (i.CmpApiModel.tcfPolicyVersion = 4),
                (this.isServiceSpecific = !!n),
                (this.callResponder = new o.CallResponder(r));
            }
            return (
              (e.prototype.throwIfInvalidInt = function (e, t, n) {
                if (!("number" == typeof e && Number.isInteger(e) && e >= n))
                  throw new Error("Invalid ".concat(t, ": ").concat(e));
              }),
              (e.prototype.update = function (e, t) {
                if ((void 0 === t && (t = !1), i.CmpApiModel.disabled))
                  throw new Error("CmpApi Disabled");
                (i.CmpApiModel.cmpStatus = r.CmpStatus.LOADED),
                  t
                    ? ((i.CmpApiModel.displayStatus = r.DisplayStatus.VISIBLE),
                      (i.CmpApiModel.eventStatus = r.EventStatus.CMP_UI_SHOWN))
                    : void 0 === i.CmpApiModel.tcModel
                      ? ((i.CmpApiModel.displayStatus =
                          r.DisplayStatus.DISABLED),
                        (i.CmpApiModel.eventStatus = r.EventStatus.TC_LOADED))
                      : ((i.CmpApiModel.displayStatus = r.DisplayStatus.HIDDEN),
                        (i.CmpApiModel.eventStatus =
                          r.EventStatus.USER_ACTION_COMPLETE)),
                  (i.CmpApiModel.gdprApplies = null !== e),
                  i.CmpApiModel.gdprApplies
                    ? ("" === e
                        ? ((i.CmpApiModel.tcModel = new s.TCModel()),
                          (i.CmpApiModel.tcModel.cmpId = i.CmpApiModel.cmpId),
                          (i.CmpApiModel.tcModel.cmpVersion =
                            i.CmpApiModel.cmpVersion))
                        : (i.CmpApiModel.tcModel = s.TCString.decode(e)),
                      (i.CmpApiModel.tcModel.isServiceSpecific =
                        this.isServiceSpecific),
                      (i.CmpApiModel.tcfPolicyVersion = Number(
                        i.CmpApiModel.tcModel.policyVersion,
                      )),
                      (i.CmpApiModel.tcString = e))
                    : (i.CmpApiModel.tcModel = null),
                  0 === this.numUpdates
                    ? this.callResponder.purgeQueuedCalls()
                    : i.CmpApiModel.eventQueue.exec(),
                  this.numUpdates++;
              }),
              (e.prototype.disable = function () {
                (i.CmpApiModel.disabled = !0),
                  (i.CmpApiModel.cmpStatus = r.CmpStatus.ERROR);
              }),
              e
            );
          })();
        t.CmpApi = a;
      },
      5011: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CmpApiModel = void 0);
        var i = n(7517),
          r = n(6903),
          o = (function () {
            function e() {}
            return (
              (e.reset = function () {
                delete this.cmpId,
                  delete this.cmpVersion,
                  delete this.eventStatus,
                  delete this.gdprApplies,
                  delete this.tcModel,
                  delete this.tcString,
                  delete this.tcfPolicyVersion,
                  (this.cmpStatus = i.CmpStatus.LOADING),
                  (this.disabled = !1),
                  (this.displayStatus = i.DisplayStatus.HIDDEN),
                  this.eventQueue.clear();
              }),
              (e.apiVersion = "2"),
              (e.eventQueue = new r.EventListenerQueue()),
              (e.cmpStatus = i.CmpStatus.LOADING),
              (e.disabled = !1),
              (e.displayStatus = i.DisplayStatus.HIDDEN),
              e
            );
          })();
        t.CmpApiModel = o;
      },
      849: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6903: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EventListenerQueue = void 0);
        var i = n(2044),
          r = (function () {
            function e() {
              (this.eventQueue = new Map()), (this.queueNumber = 0);
            }
            return (
              (e.prototype.add = function (e) {
                return (
                  this.eventQueue.set(this.queueNumber, e), this.queueNumber++
                );
              }),
              (e.prototype.remove = function (e) {
                return this.eventQueue.delete(e);
              }),
              (e.prototype.exec = function () {
                this.eventQueue.forEach(function (e, t) {
                  new i.GetTCDataCommand(e.callback, e.param, t, e.next);
                });
              }),
              (e.prototype.clear = function () {
                (this.queueNumber = 0), this.eventQueue.clear();
              }),
              Object.defineProperty(e.prototype, "size", {
                get: function () {
                  return this.eventQueue.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        t.EventListenerQueue = r;
      },
      7121: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SupportedVersions = void 0);
        var n = (function () {
          function e() {}
          return (
            (e.has = function (e) {
              return "string" == typeof e && (e = Number(e)), this.set_.has(e);
            }),
            (e.set_ = new Set([0, 2, void 0, null])),
            e
          );
        })();
        t.SupportedVersions = n;
      },
      1166: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AddEventListenerCommand = void 0);
        var o = n(5011),
          s = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r(t, e),
              (t.prototype.respond = function () {
                (this.listenerId = o.CmpApiModel.eventQueue.add({
                  callback: this.callback,
                  param: this.param,
                  next: this.next,
                })),
                  e.prototype.respond.call(this);
              }),
              t
            );
          })(n(2044).GetTCDataCommand);
        t.AddEventListenerCommand = s;
      },
      8605: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Command = void 0);
        var n = (function () {
          function e(e, t, n, i) {
            (this.success = !0),
              Object.assign(this, {
                callback: e,
                listenerId: n,
                param: t,
                next: i,
              });
            try {
              this.respond();
            } catch (e) {
              this.invokeCallback(null);
            }
          }
          return (
            (e.prototype.invokeCallback = function (e) {
              var t = null !== e;
              "function" == typeof this.next
                ? this.callback(this.next, e, t)
                : this.callback(e, t);
            }),
            e
          );
        })();
        t.Command = n;
      },
      3326: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6987: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CommandMap = void 0);
        var i = n(8777),
          r = n(2044),
          o = n(7892),
          s = n(6497),
          a = n(1166),
          c = n(4291),
          d = n(5752),
          l = (function () {
            function e() {}
            var t, n, l, u, E, p;
            return (
              (t = d.TCFCommand.PING),
              (n = d.TCFCommand.GET_TC_DATA),
              (l = d.TCFCommand.GET_IN_APP_TC_DATA),
              (u = d.TCFCommand.GET_VENDOR_LIST),
              (E = d.TCFCommand.ADD_EVENT_LISTENER),
              (p = d.TCFCommand.REMOVE_EVENT_LISTENER),
              (e[t] = i.PingCommand),
              (e[n] = r.GetTCDataCommand),
              (e[l] = o.GetInAppTCDataCommand),
              (e[u] = s.GetVendorListCommand),
              (e[E] = a.AddEventListenerCommand),
              (e[p] = c.RemoveEventListenerCommand),
              e
            );
          })();
        t.CommandMap = l;
      },
      7892: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GetInAppTCDataCommand = void 0);
        var o = n(2044),
          s = n(4392),
          a = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r(t, e),
              (t.prototype.respond = function () {
                this.throwIfParamInvalid(),
                  this.invokeCallback(new s.InAppTCData(this.param));
              }),
              t
            );
          })(o.GetTCDataCommand);
        t.GetInAppTCDataCommand = a;
      },
      2044: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GetTCDataCommand = void 0);
        var o = n(8605),
          s = n(4392),
          a = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r(t, e),
              (t.prototype.respond = function () {
                this.throwIfParamInvalid(),
                  this.invokeCallback(
                    new s.TCData(this.param, this.listenerId),
                  );
              }),
              (t.prototype.throwIfParamInvalid = function () {
                if (
                  !(
                    void 0 === this.param ||
                    (Array.isArray(this.param) &&
                      this.param.every(Number.isInteger))
                  )
                )
                  throw new Error("Invalid Parameter");
              }),
              t
            );
          })(o.Command);
        t.GetTCDataCommand = a;
      },
      6497: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GetVendorListCommand = void 0);
        var o = n(5011),
          s = n(8605),
          a = n(1229),
          c = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r(t, e),
              (t.prototype.respond = function () {
                var e,
                  t = this,
                  n = o.CmpApiModel.tcModel,
                  i = n.vendorListVersion;
                void 0 === this.param && (this.param = i),
                  (e =
                    this.param === i && n.gvl
                      ? n.gvl
                      : new a.GVL(this.param)).readyPromise.then(function () {
                    t.invokeCallback(e.getJson());
                  });
              }),
              t
            );
          })(s.Command);
        t.GetVendorListCommand = c;
      },
      8777: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PingCommand = void 0);
        var o = n(4392),
          s = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r(t, e),
              (t.prototype.respond = function () {
                this.invokeCallback(new o.Ping());
              }),
              t
            );
          })(n(8605).Command);
        t.PingCommand = s;
      },
      4291: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RemoveEventListenerCommand = void 0);
        var o = n(5011),
          s = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r(t, e),
              (t.prototype.respond = function () {
                this.invokeCallback(
                  o.CmpApiModel.eventQueue.remove(this.param),
                );
              }),
              t
            );
          })(n(8605).Command);
        t.RemoveEventListenerCommand = s;
      },
      5752: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TCFCommand = void 0),
          ((n = t.TCFCommand || (t.TCFCommand = {})).PING = "ping"),
          (n.GET_TC_DATA = "getTCData"),
          (n.GET_IN_APP_TC_DATA = "getInAppTCData"),
          (n.GET_VENDOR_LIST = "getVendorList"),
          (n.ADD_EVENT_LISTENER = "addEventListener"),
          (n.REMOVE_EVENT_LISTENER = "removeEventListener");
      },
      3016: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(5752), t),
          r(n(3326), t);
      },
      4178: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.API_KEY = void 0),
          r(n(3016), t),
          r(n(4392), t),
          r(n(7517), t),
          r(n(3388), t),
          r(n(5011), t),
          r(n(849), t);
        var o = n(3076);
        Object.defineProperty(t, "API_KEY", {
          enumerable: !0,
          get: function () {
            return o.API_KEY;
          },
        });
      },
      4414: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Disabled = void 0);
        var o = n(4625),
          s = n(7517),
          a = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.cmpStatus = s.CmpStatus.ERROR), t;
            }
            return r(t, e), t;
          })(o.Response);
        t.Disabled = a;
      },
      8503: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          o =
            (this && this.__read) ||
            function (e, t) {
              var n = "function" == typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var i,
                r,
                o = n.call(e),
                s = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
                  s.push(i.value);
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
              return s;
            },
          s =
            (this && this.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var i, r = 0, o = t.length; r < o; r++)
                  (!i && r in t) ||
                    (i || (i = Array.prototype.slice.call(t, 0, r)),
                    (i[r] = t[r]));
              return e.concat(i || Array.prototype.slice.call(t));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.InAppTCData = void 0);
        var a = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return delete n.outOfBand, n;
          }
          return (
            r(t, e),
            (t.prototype.createVectorField = function (e) {
              return s([], o(e), !1).reduce(function (e, t) {
                return e + (t[1] ? "1" : "0");
              }, "");
            }),
            (t.prototype.createRestrictions = function (e) {
              var t = {};
              if (e.numRestrictions > 0) {
                var n = e.getMaxVendorId();
                e.getRestrictions().forEach(function (e) {
                  t[e.purposeId.toString()] = "_".repeat(n);
                });
                for (
                  var i = function (n) {
                      var i = n + 1;
                      e.getRestrictions(i).forEach(function (e) {
                        var i = e.restrictionType.toString(),
                          r = e.purposeId.toString(),
                          o = t[r].substr(0, n),
                          s = t[r].substr(n + 1);
                        t[r] = o + i + s;
                      });
                    },
                    r = 0;
                  r < n;
                  r++
                )
                  i(r);
              }
              return t;
            }),
            t
          );
        })(n(1543).TCData);
        t.InAppTCData = a;
      },
      7834: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Ping = void 0);
        var o = n(5011),
          s = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.cmpLoaded = !0),
                (t.cmpStatus = o.CmpApiModel.cmpStatus),
                (t.displayStatus = o.CmpApiModel.displayStatus),
                (t.apiVersion = String(o.CmpApiModel.apiVersion)),
                o.CmpApiModel.tcModel &&
                  o.CmpApiModel.tcModel.vendorListVersion &&
                  (t.gvlVersion = +o.CmpApiModel.tcModel.vendorListVersion),
                t
              );
            }
            return r(t, e), t;
          })(n(4625).Response);
        t.Ping = s;
      },
      4625: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Response = void 0);
        var i = n(5011);
        t.Response = function () {
          (this.cmpId = i.CmpApiModel.cmpId),
            (this.cmpVersion = i.CmpApiModel.cmpVersion),
            (this.gdprApplies = i.CmpApiModel.gdprApplies),
            (this.tcfPolicyVersion = i.CmpApiModel.tcfPolicyVersion);
        };
      },
      1543: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          o =
            (this && this.__read) ||
            function (e, t) {
              var n = "function" == typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var i,
                r,
                o = n.call(e),
                s = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
                  s.push(i.value);
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
              return s;
            },
          s =
            (this && this.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var i, r = 0, o = t.length; r < o; r++)
                  (!i && r in t) ||
                    (i || (i = Array.prototype.slice.call(t, 0, r)),
                    (i[r] = t[r]));
              return e.concat(i || Array.prototype.slice.call(t));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TCData = void 0);
        var a = n(5011),
          c = (function (e) {
            function t(t, n) {
              var i = e.call(this) || this;
              if (
                ((i.eventStatus = a.CmpApiModel.eventStatus),
                (i.cmpStatus = a.CmpApiModel.cmpStatus),
                (i.listenerId = n),
                a.CmpApiModel.gdprApplies)
              ) {
                var r = a.CmpApiModel.tcModel;
                (i.tcString = a.CmpApiModel.tcString),
                  (i.isServiceSpecific = r.isServiceSpecific),
                  (i.useNonStandardTexts = r.useNonStandardTexts),
                  (i.purposeOneTreatment = r.purposeOneTreatment),
                  (i.publisherCC = r.publisherCountryCode),
                  (i.outOfBand = {
                    allowedVendors: i.createVectorField(r.vendorsAllowed, t),
                    disclosedVendors: i.createVectorField(
                      r.vendorsDisclosed,
                      t,
                    ),
                  }),
                  (i.purpose = {
                    consents: i.createVectorField(r.purposeConsents),
                    legitimateInterests: i.createVectorField(
                      r.purposeLegitimateInterests,
                    ),
                  }),
                  (i.vendor = {
                    consents: i.createVectorField(r.vendorConsents, t),
                    legitimateInterests: i.createVectorField(
                      r.vendorLegitimateInterests,
                      t,
                    ),
                  }),
                  (i.specialFeatureOptins = i.createVectorField(
                    r.specialFeatureOptins,
                  )),
                  (i.publisher = {
                    consents: i.createVectorField(r.publisherConsents),
                    legitimateInterests: i.createVectorField(
                      r.publisherLegitimateInterests,
                    ),
                    customPurpose: {
                      consents: i.createVectorField(r.publisherCustomConsents),
                      legitimateInterests: i.createVectorField(
                        r.publisherCustomLegitimateInterests,
                      ),
                    },
                    restrictions: i.createRestrictions(r.publisherRestrictions),
                  });
              }
              return i;
            }
            return (
              r(t, e),
              (t.prototype.createRestrictions = function (e) {
                var t = {};
                if (e.numRestrictions > 0)
                  for (
                    var n = e.getMaxVendorId(),
                      i = function (n) {
                        var i = n.toString();
                        e.getRestrictions(n).forEach(function (e) {
                          var n = e.purposeId.toString();
                          t[n] || (t[n] = {}), (t[n][i] = e.restrictionType);
                        });
                      },
                      r = 1;
                    r <= n;
                    r++
                  )
                    i(r);
                return t;
              }),
              (t.prototype.createVectorField = function (e, t) {
                return t
                  ? t.reduce(function (t, n) {
                      return (t[String(n)] = e.has(Number(n))), t;
                    }, {})
                  : s([], o(e), !1).reduce(function (e, t) {
                      return (e[t[0].toString(10)] = t[1]), e;
                    }, {});
              }),
              t
            );
          })(n(4625).Response);
        t.TCData = c;
      },
      4392: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(4414), t),
          r(n(8503), t),
          r(n(7834), t),
          r(n(4625), t),
          r(n(1543), t);
      },
      1867: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CmpStatus = void 0),
          ((n = t.CmpStatus || (t.CmpStatus = {})).STUB = "stub"),
          (n.LOADING = "loading"),
          (n.LOADED = "loaded"),
          (n.ERROR = "error");
      },
      489: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DisplayStatus = void 0),
          ((n = t.DisplayStatus || (t.DisplayStatus = {})).VISIBLE = "visible"),
          (n.HIDDEN = "hidden"),
          (n.DISABLED = "disabled");
      },
      1995: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EventStatus = void 0),
          ((n = t.EventStatus || (t.EventStatus = {})).TC_LOADED = "tcloaded"),
          (n.CMP_UI_SHOWN = "cmpuishown"),
          (n.USER_ACTION_COMPLETE = "useractioncomplete");
      },
      7517: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(1867), t),
          r(n(489), t),
          r(n(1995), t);
      },
      2388: function (e, t) {
        "use strict";
        var n =
          (this && this.__values) ||
          function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              n = t && e[t],
              i = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return (
                    e && i >= e.length && (e = void 0),
                    { value: e && e[i++], done: !e }
                  );
                },
              };
            throw new TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Cloneable = void 0);
        var i = (function () {
          function e() {}
          return (
            (e.prototype.clone = function () {
              var e = this,
                t = new this.constructor();
              return (
                Object.keys(this).forEach(function (n) {
                  var i = e.deepClone(e[n]);
                  void 0 !== i && (t[n] = i);
                }),
                t
              );
            }),
            (e.prototype.deepClone = function (e) {
              var t,
                i,
                r = typeof e;
              if ("number" === r || "string" === r || "boolean" === r) return e;
              if (null !== e && "object" === r) {
                if ("function" == typeof e.clone) return e.clone();
                if (e instanceof Date) return new Date(e.getTime());
                if (void 0 !== e[Symbol.iterator]) {
                  var o = [];
                  try {
                    for (var s = n(e), a = s.next(); !a.done; a = s.next()) {
                      var c = a.value;
                      o.push(this.deepClone(c));
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      a && !a.done && (i = s.return) && i.call(s);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return e instanceof Array ? o : new e.constructor(o);
                }
                var d = {};
                for (var l in e)
                  e.hasOwnProperty(l) && (d[l] = this.deepClone(e[l]));
                return d;
              }
            }),
            e
          );
        })();
        t.Cloneable = i;
      },
      834: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }).apply(this, arguments);
            },
          s =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    c(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    c(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                c((i = i.apply(e, t || [])).next());
              });
            },
          a =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                o,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                  ? i.throw || ((r = i.return) && r.call(i), 0)
                                  : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = s.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < r[1]) {
                              (s.label = r[1]), (r = a);
                              break;
                            }
                            if (r && s.label < r[2]) {
                              (s.label = r[2]), s.ops.push(a);
                              break;
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = t.call(e, s);
                      } catch (e) {
                        (a = [6, e]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          c =
            (this && this.__values) ||
            function (e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                i = 0;
              if (n) return n.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && i >= e.length && (e = void 0),
                      { value: e && e[i++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined.",
              );
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.GVL = void 0);
        var d = n(2388),
          l = n(8177),
          u = n(8223),
          E = n(8495),
          p = (function (e) {
            function t(n, i) {
              var r = e.call(this) || this;
              (r.isReady_ = !1), (r.isLatest = !1);
              var o = t.baseUrl,
                s = null == i ? void 0 : i.language;
              if (s)
                try {
                  s = t.consentLanguages.parseLanguage(s);
                } catch (e) {
                  throw new l.GVLError(
                    "Error during parsing the language: " + e.message,
                  );
                }
              if (
                ((r.lang_ = s || t.DEFAULT_LANGUAGE),
                (r.cacheLang_ = s || t.DEFAULT_LANGUAGE),
                r.isVendorList(n))
              )
                r.populate(n), (r.readyPromise = Promise.resolve());
              else {
                if (!o)
                  throw new l.GVLError(
                    "must specify GVL.baseUrl before loading GVL json",
                  );
                if (n > 0) {
                  var a = n;
                  t.CACHE.has(a)
                    ? (r.populate(t.CACHE.get(a)),
                      (r.readyPromise = Promise.resolve()))
                    : ((o += t.versionedFilename.replace(
                        "[VERSION]",
                        String(a),
                      )),
                      (r.readyPromise = r.fetchJson(o)));
                } else
                  t.CACHE.has(t.LATEST_CACHE_KEY)
                    ? (r.populate(t.CACHE.get(t.LATEST_CACHE_KEY)),
                      (r.readyPromise = Promise.resolve()))
                    : ((r.isLatest = !0),
                      (r.readyPromise = r.fetchJson(o + t.latestFilename)));
              }
              return r;
            }
            return (
              r(t, e),
              Object.defineProperty(t, "baseUrl", {
                get: function () {
                  return this.baseUrl_;
                },
                set: function (e) {
                  if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e))
                    throw new l.GVLError(
                      "Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache",
                    );
                  e.length > 0 && "/" !== e[e.length - 1] && (e += "/"),
                    (this.baseUrl_ = e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.emptyLanguageCache = function (e) {
                var n = !1;
                return (
                  null == e && t.LANGUAGE_CACHE.size > 0
                    ? ((t.LANGUAGE_CACHE = new Map()), (n = !0))
                    : "string" == typeof e &&
                      this.consentLanguages.has(e.toUpperCase()) &&
                      (t.LANGUAGE_CACHE.delete(e.toUpperCase()), (n = !0)),
                  n
                );
              }),
              (t.emptyCache = function (e) {
                var n = !1;
                return (
                  Number.isInteger(e) && e >= 0
                    ? (t.CACHE.delete(e), (n = !0))
                    : void 0 === e && ((t.CACHE = new Map()), (n = !0)),
                  n
                );
              }),
              (t.prototype.cacheLanguage = function () {
                t.LANGUAGE_CACHE.has(this.cacheLang_) ||
                  t.LANGUAGE_CACHE.set(this.cacheLang_, {
                    purposes: this.purposes,
                    specialPurposes: this.specialPurposes,
                    features: this.features,
                    specialFeatures: this.specialFeatures,
                    stacks: this.stacks,
                    dataCategories: this.dataCategories,
                  });
              }),
              (t.prototype.fetchJson = function (e) {
                return s(this, void 0, void 0, function () {
                  var t, n;
                  return a(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          i.trys.push([0, 2, , 3]),
                          (t = this.populate),
                          [4, u.Json.fetch(e)]
                        );
                      case 1:
                        return t.apply(this, [i.sent()]), [3, 3];
                      case 2:
                        throw ((n = i.sent()), new l.GVLError(n.message));
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.getJson = function () {
                return o(
                  o(
                    {
                      gvlSpecificationVersion: this.gvlSpecificationVersion,
                      vendorListVersion: this.vendorListVersion,
                      tcfPolicyVersion: this.tcfPolicyVersion,
                      lastUpdated: this.lastUpdated,
                      purposes: this.clonePurposes(),
                      specialPurposes: this.cloneSpecialPurposes(),
                      features: this.cloneFeatures(),
                      specialFeatures: this.cloneSpecialFeatures(),
                      stacks: this.cloneStacks(),
                    },
                    this.dataCategories
                      ? { dataCategories: this.cloneDataCategories() }
                      : {},
                  ),
                  { vendors: this.cloneVendors() },
                );
              }),
              (t.prototype.cloneSpecialFeatures = function () {
                var e,
                  n,
                  i = {};
                try {
                  for (
                    var r = c(Object.keys(this.specialFeatures)), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    i[s] = t.cloneFeature(this.specialFeatures[s]);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (t.prototype.cloneFeatures = function () {
                var e,
                  n,
                  i = {};
                try {
                  for (
                    var r = c(Object.keys(this.features)), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    i[s] = t.cloneFeature(this.features[s]);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (t.prototype.cloneStacks = function () {
                var e,
                  n,
                  i = {};
                try {
                  for (
                    var r = c(Object.keys(this.stacks)), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    i[s] = t.cloneStack(this.stacks[s]);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (t.prototype.cloneDataCategories = function () {
                var e,
                  n,
                  i = {};
                try {
                  for (
                    var r = c(Object.keys(this.dataCategories)), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    i[s] = t.cloneDataCategory(this.dataCategories[s]);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (t.prototype.cloneSpecialPurposes = function () {
                var e,
                  n,
                  i = {};
                try {
                  for (
                    var r = c(Object.keys(this.specialPurposes)), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    i[s] = t.clonePurpose(this.specialPurposes[s]);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (t.prototype.clonePurposes = function () {
                var e,
                  n,
                  i = {};
                try {
                  for (
                    var r = c(Object.keys(this.purposes)), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    i[s] = t.clonePurpose(this.purposes[s]);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (t.clonePurpose = function (e) {
                return o(
                  o(
                    { id: e.id, name: e.name, description: e.description },
                    e.descriptionLegal
                      ? { descriptionLegal: e.descriptionLegal }
                      : {},
                  ),
                  e.illustrations
                    ? { illustrations: Array.from(e.illustrations) }
                    : {},
                );
              }),
              (t.cloneFeature = function (e) {
                return o(
                  o(
                    { id: e.id, name: e.name, description: e.description },
                    e.descriptionLegal
                      ? { descriptionLegal: e.descriptionLegal }
                      : {},
                  ),
                  e.illustrations
                    ? { illustrations: Array.from(e.illustrations) }
                    : {},
                );
              }),
              (t.cloneDataCategory = function (e) {
                return { id: e.id, name: e.name, description: e.description };
              }),
              (t.cloneStack = function (e) {
                return {
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  purposes: Array.from(e.purposes),
                  specialFeatures: Array.from(e.specialFeatures),
                };
              }),
              (t.cloneDataRetention = function (e) {
                return o(
                  o(
                    {},
                    "number" == typeof e.stdRetention
                      ? { stdRetention: e.stdRetention }
                      : {},
                  ),
                  {
                    purposes: o({}, e.purposes),
                    specialPurposes: o({}, e.specialPurposes),
                  },
                );
              }),
              (t.cloneVendorUrls = function (e) {
                return e.map(function (e) {
                  return o(
                    { langId: e.langId, privacy: e.privacy },
                    e.legIntClaim ? { legIntClaim: e.legIntClaim } : {},
                  );
                });
              }),
              (t.cloneVendor = function (e) {
                return o(
                  o(
                    o(
                      o(
                        o(
                          o(
                            o(
                              o(
                                o(
                                  o(
                                    o(
                                      {
                                        id: e.id,
                                        name: e.name,
                                        purposes: Array.from(e.purposes),
                                        legIntPurposes: Array.from(
                                          e.legIntPurposes,
                                        ),
                                        flexiblePurposes: Array.from(
                                          e.flexiblePurposes,
                                        ),
                                        specialPurposes: Array.from(
                                          e.specialPurposes,
                                        ),
                                        features: Array.from(e.features),
                                        specialFeatures: Array.from(
                                          e.specialFeatures,
                                        ),
                                      },
                                      e.overflow
                                        ? {
                                            overflow: {
                                              httpGetLimit:
                                                e.overflow.httpGetLimit,
                                            },
                                          }
                                        : {},
                                    ),
                                    "number" == typeof e.cookieMaxAgeSeconds ||
                                      null === e.cookieMaxAgeSeconds
                                      ? {
                                          cookieMaxAgeSeconds:
                                            e.cookieMaxAgeSeconds,
                                        }
                                      : {},
                                  ),
                                  void 0 !== e.usesCookies
                                    ? { usesCookies: e.usesCookies }
                                    : {},
                                ),
                                e.policyUrl ? { policyUrl: e.policyUrl } : {},
                              ),
                              void 0 !== e.cookieRefresh
                                ? { cookieRefresh: e.cookieRefresh }
                                : {},
                            ),
                            void 0 !== e.usesNonCookieAccess
                              ? { usesNonCookieAccess: e.usesNonCookieAccess }
                              : {},
                          ),
                          e.dataRetention
                            ? {
                                dataRetention: this.cloneDataRetention(
                                  e.dataRetention,
                                ),
                              }
                            : {},
                        ),
                        e.urls ? { urls: this.cloneVendorUrls(e.urls) } : {},
                      ),
                      e.dataDeclaration
                        ? { dataDeclaration: Array.from(e.dataDeclaration) }
                        : {},
                    ),
                    e.deviceStorageDisclosureUrl
                      ? {
                          deviceStorageDisclosureUrl:
                            e.deviceStorageDisclosureUrl,
                        }
                      : {},
                  ),
                  e.deletedDate ? { deletedDate: e.deletedDate } : {},
                );
              }),
              (t.prototype.cloneVendors = function () {
                var e,
                  n,
                  i = {};
                try {
                  for (
                    var r = c(Object.keys(this.fullVendorList)), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    i[s] = t.cloneVendor(this.fullVendorList[s]);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (t.prototype.changeLanguage = function (e) {
                return s(this, void 0, void 0, function () {
                  var n, i, r, o, s, c;
                  return a(this, function (a) {
                    switch (a.label) {
                      case 0:
                        n = e;
                        try {
                          n = t.consentLanguages.parseLanguage(e);
                        } catch (e) {
                          throw new l.GVLError(
                            "Error during parsing the language: " + e.message,
                          );
                        }
                        if (
                          ((i = e.toUpperCase()),
                          n.toLowerCase() ===
                            t.DEFAULT_LANGUAGE.toLowerCase() &&
                            !t.LANGUAGE_CACHE.has(i))
                        )
                          return [2];
                        if (n === this.lang_) return [3, 5];
                        if (((this.lang_ = n), !t.LANGUAGE_CACHE.has(i)))
                          return [3, 1];
                        for (o in (r = t.LANGUAGE_CACHE.get(i)))
                          r.hasOwnProperty(o) && (this[o] = r[o]);
                        return [3, 5];
                      case 1:
                        (s =
                          t.baseUrl +
                          t.languageFilename.replace(
                            "[LANG]",
                            this.lang_.toLowerCase(),
                          )),
                          (a.label = 2);
                      case 2:
                        return a.trys.push([2, 4, , 5]), [4, this.fetchJson(s)];
                      case 3:
                        return (
                          a.sent(),
                          (this.cacheLang_ = i),
                          this.cacheLanguage(),
                          [3, 5]
                        );
                      case 4:
                        throw (
                          ((c = a.sent()),
                          new l.GVLError(
                            "unable to load language: " + c.message,
                          ))
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              Object.defineProperty(t.prototype, "language", {
                get: function () {
                  return this.lang_;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isVendorList = function (e) {
                return void 0 !== e && void 0 !== e.vendors;
              }),
              (t.prototype.populate = function (e) {
                (this.purposes = e.purposes),
                  (this.specialPurposes = e.specialPurposes),
                  (this.features = e.features),
                  (this.specialFeatures = e.specialFeatures),
                  (this.stacks = e.stacks),
                  (this.dataCategories = e.dataCategories),
                  this.isVendorList(e) &&
                    ((this.gvlSpecificationVersion = e.gvlSpecificationVersion),
                    (this.tcfPolicyVersion = e.tcfPolicyVersion),
                    (this.vendorListVersion = e.vendorListVersion),
                    (this.lastUpdated = e.lastUpdated),
                    "string" == typeof this.lastUpdated &&
                      (this.lastUpdated = new Date(this.lastUpdated)),
                    (this.vendors_ = e.vendors),
                    (this.fullVendorList = e.vendors),
                    this.mapVendors(),
                    (this.isReady_ = !0),
                    this.isLatest &&
                      t.CACHE.set(t.LATEST_CACHE_KEY, this.getJson()),
                    t.CACHE.has(this.vendorListVersion) ||
                      t.CACHE.set(this.vendorListVersion, this.getJson())),
                  this.cacheLanguage();
              }),
              (t.prototype.mapVendors = function (e) {
                var t = this;
                (this.byPurposeVendorMap = {}),
                  (this.bySpecialPurposeVendorMap = {}),
                  (this.byFeatureVendorMap = {}),
                  (this.bySpecialFeatureVendorMap = {}),
                  Object.keys(this.purposes).forEach(function (e) {
                    t.byPurposeVendorMap[e] = {
                      legInt: new Set(),
                      consent: new Set(),
                      flexible: new Set(),
                    };
                  }),
                  Object.keys(this.specialPurposes).forEach(function (e) {
                    t.bySpecialPurposeVendorMap[e] = new Set();
                  }),
                  Object.keys(this.features).forEach(function (e) {
                    t.byFeatureVendorMap[e] = new Set();
                  }),
                  Object.keys(this.specialFeatures).forEach(function (e) {
                    t.bySpecialFeatureVendorMap[e] = new Set();
                  }),
                  Array.isArray(e) ||
                    (e = Object.keys(this.fullVendorList).map(function (e) {
                      return +e;
                    })),
                  (this.vendorIds = new Set(e)),
                  (this.vendors_ = e.reduce(function (e, n) {
                    var i = t.vendors_[String(n)];
                    return (
                      i &&
                        void 0 === i.deletedDate &&
                        (i.purposes.forEach(function (e) {
                          t.byPurposeVendorMap[String(e)].consent.add(n);
                        }),
                        i.specialPurposes.forEach(function (e) {
                          t.bySpecialPurposeVendorMap[String(e)].add(n);
                        }),
                        i.legIntPurposes.forEach(function (e) {
                          t.byPurposeVendorMap[String(e)].legInt.add(n);
                        }),
                        i.flexiblePurposes &&
                          i.flexiblePurposes.forEach(function (e) {
                            t.byPurposeVendorMap[String(e)].flexible.add(n);
                          }),
                        i.features.forEach(function (e) {
                          t.byFeatureVendorMap[String(e)].add(n);
                        }),
                        i.specialFeatures.forEach(function (e) {
                          t.bySpecialFeatureVendorMap[String(e)].add(n);
                        }),
                        (e[n] = i)),
                      e
                    );
                  }, {}));
              }),
              (t.prototype.getFilteredVendors = function (e, t, n, i) {
                var r = this,
                  o = e.charAt(0).toUpperCase() + e.slice(1),
                  s = {};
                return (
                  ("purpose" === e && n
                    ? this["by" + o + "VendorMap"][String(t)][n]
                    : this["by" + (i ? "Special" : "") + o + "VendorMap"][
                        String(t)
                      ]
                  ).forEach(function (e) {
                    s[String(e)] = r.vendors[String(e)];
                  }),
                  s
                );
              }),
              (t.prototype.getVendorsWithConsentPurpose = function (e) {
                return this.getFilteredVendors("purpose", e, "consent");
              }),
              (t.prototype.getVendorsWithLegIntPurpose = function (e) {
                return this.getFilteredVendors("purpose", e, "legInt");
              }),
              (t.prototype.getVendorsWithFlexiblePurpose = function (e) {
                return this.getFilteredVendors("purpose", e, "flexible");
              }),
              (t.prototype.getVendorsWithSpecialPurpose = function (e) {
                return this.getFilteredVendors("purpose", e, void 0, !0);
              }),
              (t.prototype.getVendorsWithFeature = function (e) {
                return this.getFilteredVendors("feature", e);
              }),
              (t.prototype.getVendorsWithSpecialFeature = function (e) {
                return this.getFilteredVendors("feature", e, void 0, !0);
              }),
              Object.defineProperty(t.prototype, "vendors", {
                get: function () {
                  return this.vendors_;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.narrowVendorsTo = function (e) {
                this.mapVendors(e);
              }),
              Object.defineProperty(t.prototype, "isReady", {
                get: function () {
                  return this.isReady_;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.clone = function () {
                var e = new t(this.getJson());
                return (
                  this.lang_ !== t.DEFAULT_LANGUAGE &&
                    e.changeLanguage(this.lang_),
                  e
                );
              }),
              (t.isInstanceOf = function (e) {
                return (
                  "object" == typeof e && "function" == typeof e.narrowVendorsTo
                );
              }),
              (t.LANGUAGE_CACHE = new Map()),
              (t.CACHE = new Map()),
              (t.LATEST_CACHE_KEY = 0),
              (t.DEFAULT_LANGUAGE = "EN"),
              (t.consentLanguages = new E.ConsentLanguages()),
              (t.latestFilename = "vendor-list.json"),
              (t.versionedFilename = "archives/vendor-list-v[VERSION].json"),
              (t.languageFilename = "purposes-[LANG].json"),
              t
            );
          })(d.Cloneable);
        t.GVL = p;
      },
      8223: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Json = void 0);
        var n = (function () {
          function e() {}
          return (
            (e.absCall = function (e, t, n, i) {
              return new Promise(function (r, o) {
                var s = new XMLHttpRequest();
                (s.withCredentials = n),
                  s.addEventListener("load", function () {
                    if (s.readyState == XMLHttpRequest.DONE)
                      if (s.status >= 200 && s.status < 300) {
                        var e = s.response;
                        if ("string" == typeof e)
                          try {
                            e = JSON.parse(e);
                          } catch (e) {}
                        r(e);
                      } else
                        o(
                          new Error(
                            "HTTP Status: "
                              .concat(s.status, " response type: ")
                              .concat(s.responseType),
                          ),
                        );
                  }),
                  s.addEventListener("error", function () {
                    o(new Error("error"));
                  }),
                  s.addEventListener("abort", function () {
                    o(new Error("aborted"));
                  }),
                  null === t ? s.open("GET", e, !0) : s.open("POST", e, !0),
                  (s.responseType = "json"),
                  (s.timeout = i),
                  (s.ontimeout = function () {
                    o(new Error("Timeout " + i + "ms " + e));
                  }),
                  s.send(t);
              });
            }),
            (e.post = function (e, t, n, i) {
              return (
                void 0 === n && (n = !1),
                void 0 === i && (i = 0),
                this.absCall(e, JSON.stringify(t), n, i)
              );
            }),
            (e.fetch = function (e, t, n) {
              return (
                void 0 === t && (t = !1),
                void 0 === n && (n = 0),
                this.absCall(e, null, t, n)
              );
            }),
            e
          );
        })();
        t.Json = n;
      },
      5771: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TCModel = void 0);
        var o = n(2388),
          s = n(8177),
          a = n(834),
          c = n(8495),
          d = (function (e) {
            function t(t) {
              var n = e.call(this) || this;
              return (
                (n.isServiceSpecific_ = !1),
                (n.supportOOB_ = !0),
                (n.useNonStandardTexts_ = !1),
                (n.purposeOneTreatment_ = !1),
                (n.publisherCountryCode_ = "AA"),
                (n.version_ = 2),
                (n.consentScreen_ = 0),
                (n.policyVersion_ = 4),
                (n.consentLanguage_ = "EN"),
                (n.cmpId_ = 0),
                (n.cmpVersion_ = 0),
                (n.vendorListVersion_ = 0),
                (n.numCustomPurposes_ = 0),
                (n.specialFeatureOptins = new c.Vector()),
                (n.purposeConsents = new c.Vector()),
                (n.purposeLegitimateInterests = new c.Vector()),
                (n.publisherConsents = new c.Vector()),
                (n.publisherLegitimateInterests = new c.Vector()),
                (n.publisherCustomConsents = new c.Vector()),
                (n.publisherCustomLegitimateInterests = new c.Vector()),
                (n.vendorConsents = new c.Vector()),
                (n.vendorLegitimateInterests = new c.Vector()),
                (n.vendorsDisclosed = new c.Vector()),
                (n.vendorsAllowed = new c.Vector()),
                (n.publisherRestrictions = new c.PurposeRestrictionVector()),
                t && (n.gvl = t),
                n.updated(),
                n
              );
            }
            return (
              r(t, e),
              Object.defineProperty(t.prototype, "gvl", {
                get: function () {
                  return this.gvl_;
                },
                set: function (e) {
                  a.GVL.isInstanceOf(e) || (e = new a.GVL(e)),
                    (this.gvl_ = e),
                    (this.publisherRestrictions.gvl = e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "cmpId", {
                get: function () {
                  return this.cmpId_;
                },
                set: function (e) {
                  if (((e = Number(e)), !(Number.isInteger(e) && e > 1)))
                    throw new s.TCModelError("cmpId", e);
                  this.cmpId_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "cmpVersion", {
                get: function () {
                  return this.cmpVersion_;
                },
                set: function (e) {
                  if (((e = Number(e)), !(Number.isInteger(e) && e > -1)))
                    throw new s.TCModelError("cmpVersion", e);
                  this.cmpVersion_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "consentScreen", {
                get: function () {
                  return this.consentScreen_;
                },
                set: function (e) {
                  if (((e = Number(e)), !(Number.isInteger(e) && e > -1)))
                    throw new s.TCModelError("consentScreen", e);
                  this.consentScreen_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "consentLanguage", {
                get: function () {
                  return this.consentLanguage_;
                },
                set: function (e) {
                  this.consentLanguage_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "publisherCountryCode", {
                get: function () {
                  return this.publisherCountryCode_;
                },
                set: function (e) {
                  if (!/^([A-z]){2}$/.test(e))
                    throw new s.TCModelError("publisherCountryCode", e);
                  this.publisherCountryCode_ = e.toUpperCase();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "vendorListVersion", {
                get: function () {
                  return this.gvl
                    ? this.gvl.vendorListVersion
                    : this.vendorListVersion_;
                },
                set: function (e) {
                  if ((e = Number(e) | 0) < 0)
                    throw new s.TCModelError("vendorListVersion", e);
                  this.vendorListVersion_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "policyVersion", {
                get: function () {
                  return this.gvl
                    ? this.gvl.tcfPolicyVersion
                    : this.policyVersion_;
                },
                set: function (e) {
                  if (
                    ((this.policyVersion_ = parseInt(e, 10)),
                    this.policyVersion_ < 0)
                  )
                    throw new s.TCModelError("policyVersion", e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "version", {
                get: function () {
                  return this.version_;
                },
                set: function (e) {
                  this.version_ = parseInt(e, 10);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isServiceSpecific", {
                get: function () {
                  return this.isServiceSpecific_;
                },
                set: function (e) {
                  this.isServiceSpecific_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "useNonStandardTexts", {
                get: function () {
                  return this.useNonStandardTexts_;
                },
                set: function (e) {
                  this.useNonStandardTexts_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "supportOOB", {
                get: function () {
                  return this.supportOOB_;
                },
                set: function (e) {
                  this.supportOOB_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "purposeOneTreatment", {
                get: function () {
                  return this.purposeOneTreatment_;
                },
                set: function (e) {
                  this.purposeOneTreatment_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.setAllVendorConsents = function () {
                this.vendorConsents.set(this.gvl.vendors);
              }),
              (t.prototype.unsetAllVendorConsents = function () {
                this.vendorConsents.empty();
              }),
              (t.prototype.setAllVendorsDisclosed = function () {
                this.vendorsDisclosed.set(this.gvl.vendors);
              }),
              (t.prototype.unsetAllVendorsDisclosed = function () {
                this.vendorsDisclosed.empty();
              }),
              (t.prototype.setAllVendorsAllowed = function () {
                this.vendorsAllowed.set(this.gvl.vendors);
              }),
              (t.prototype.unsetAllVendorsAllowed = function () {
                this.vendorsAllowed.empty();
              }),
              (t.prototype.setAllVendorLegitimateInterests = function () {
                this.vendorLegitimateInterests.set(this.gvl.vendors);
              }),
              (t.prototype.unsetAllVendorLegitimateInterests = function () {
                this.vendorLegitimateInterests.empty();
              }),
              (t.prototype.setAllPurposeConsents = function () {
                this.purposeConsents.set(this.gvl.purposes);
              }),
              (t.prototype.unsetAllPurposeConsents = function () {
                this.purposeConsents.empty();
              }),
              (t.prototype.setAllPurposeLegitimateInterests = function () {
                this.purposeLegitimateInterests.set(this.gvl.purposes);
              }),
              (t.prototype.unsetAllPurposeLegitimateInterests = function () {
                this.purposeLegitimateInterests.empty();
              }),
              (t.prototype.setAllSpecialFeatureOptins = function () {
                this.specialFeatureOptins.set(this.gvl.specialFeatures);
              }),
              (t.prototype.unsetAllSpecialFeatureOptins = function () {
                this.specialFeatureOptins.empty();
              }),
              (t.prototype.setAll = function () {
                this.setAllVendorConsents(),
                  this.setAllPurposeLegitimateInterests(),
                  this.setAllSpecialFeatureOptins(),
                  this.setAllPurposeConsents(),
                  this.setAllVendorLegitimateInterests();
              }),
              (t.prototype.unsetAll = function () {
                this.unsetAllVendorConsents(),
                  this.unsetAllPurposeLegitimateInterests(),
                  this.unsetAllSpecialFeatureOptins(),
                  this.unsetAllPurposeConsents(),
                  this.unsetAllVendorLegitimateInterests();
              }),
              Object.defineProperty(t.prototype, "numCustomPurposes", {
                get: function () {
                  var e = this.numCustomPurposes_;
                  if ("object" == typeof this.customPurposes) {
                    var t = Object.keys(this.customPurposes).sort(
                      function (e, t) {
                        return Number(e) - Number(t);
                      },
                    );
                    e = parseInt(t.pop(), 10);
                  }
                  return e;
                },
                set: function (e) {
                  if (
                    ((this.numCustomPurposes_ = parseInt(e, 10)),
                    this.numCustomPurposes_ < 0)
                  )
                    throw new s.TCModelError("numCustomPurposes", e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.updated = function () {
                var e = new Date(),
                  t = new Date(
                    Date.UTC(
                      e.getUTCFullYear(),
                      e.getUTCMonth(),
                      e.getUTCDate(),
                    ),
                  );
                (this.created = t), (this.lastUpdated = t);
              }),
              (t.consentLanguages = a.GVL.consentLanguages),
              t
            );
          })(o.Cloneable);
        t.TCModel = d;
      },
      8029: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TCString = void 0);
        var i = n(8270),
          r = n(8495),
          o = n(7034),
          s = n(5771),
          a = (function () {
            function e() {}
            return (
              (e.encode = function (e, t) {
                var n,
                  r = "";
                return (
                  (e = i.SemanticPreEncoder.process(e, t)),
                  (n = Array.isArray(null == t ? void 0 : t.segments)
                    ? t.segments
                    : new i.SegmentSequence(e, t)["" + e.version]).forEach(
                    function (t, o) {
                      var s = "";
                      o < n.length - 1 && (s = "."),
                        (r += i.SegmentEncoder.encode(e, t) + s);
                    },
                  ),
                  r
                );
              }),
              (e.decode = function (e, t) {
                var n = e.split("."),
                  a = n.length;
                t || (t = new s.TCModel());
                for (var c = 0; c < a; c++) {
                  var d = n[c],
                    l = i.Base64Url.decode(d.charAt(0)).substr(
                      0,
                      i.BitLength.segmentType,
                    ),
                    u =
                      r.SegmentIDs.ID_TO_KEY[
                        o.IntEncoder.decode(
                          l,
                          i.BitLength.segmentType,
                        ).toString()
                      ];
                  i.SegmentEncoder.decode(d, t, u);
                }
                return t;
              }),
              e
            );
          })();
        t.TCString = a;
      },
      7418: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Base64Url = void 0);
        var i = n(8177),
          r = (function () {
            function e() {}
            return (
              (e.encode = function (e) {
                if (!/^[0-1]+$/.test(e))
                  throw new i.EncodingError("Invalid bitField");
                var t = e.length % this.LCM;
                e += t ? "0".repeat(this.LCM - t) : "";
                for (var n = "", r = 0; r < e.length; r += this.BASIS)
                  n += this.DICT[parseInt(e.substr(r, this.BASIS), 2)];
                return n;
              }),
              (e.decode = function (e) {
                if (!/^[A-Za-z0-9\-_]+$/.test(e))
                  throw new i.DecodingError(
                    "Invalidly encoded Base64URL string",
                  );
                for (var t = "", n = 0; n < e.length; n++) {
                  var r = this.REVERSE_DICT.get(e[n]).toString(2);
                  t += "0".repeat(this.BASIS - r.length) + r;
                }
                return t;
              }),
              (e.DICT =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),
              (e.REVERSE_DICT = new Map([
                ["A", 0],
                ["B", 1],
                ["C", 2],
                ["D", 3],
                ["E", 4],
                ["F", 5],
                ["G", 6],
                ["H", 7],
                ["I", 8],
                ["J", 9],
                ["K", 10],
                ["L", 11],
                ["M", 12],
                ["N", 13],
                ["O", 14],
                ["P", 15],
                ["Q", 16],
                ["R", 17],
                ["S", 18],
                ["T", 19],
                ["U", 20],
                ["V", 21],
                ["W", 22],
                ["X", 23],
                ["Y", 24],
                ["Z", 25],
                ["a", 26],
                ["b", 27],
                ["c", 28],
                ["d", 29],
                ["e", 30],
                ["f", 31],
                ["g", 32],
                ["h", 33],
                ["i", 34],
                ["j", 35],
                ["k", 36],
                ["l", 37],
                ["m", 38],
                ["n", 39],
                ["o", 40],
                ["p", 41],
                ["q", 42],
                ["r", 43],
                ["s", 44],
                ["t", 45],
                ["u", 46],
                ["v", 47],
                ["w", 48],
                ["x", 49],
                ["y", 50],
                ["z", 51],
                ["0", 52],
                ["1", 53],
                ["2", 54],
                ["3", 55],
                ["4", 56],
                ["5", 57],
                ["6", 58],
                ["7", 59],
                ["8", 60],
                ["9", 61],
                ["-", 62],
                ["_", 63],
              ])),
              (e.BASIS = 6),
              (e.LCM = 24),
              e
            );
          })();
        t.Base64Url = r;
      },
      8937: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BitLength = void 0);
        var i = n(8495),
          r = (function () {
            function e() {}
            var t, n, r, o, s, a, c, d, l, u, E, p, g, _, S, h, f, O;
            return (
              (t = i.Fields.cmpId),
              (n = i.Fields.cmpVersion),
              (r = i.Fields.consentLanguage),
              (o = i.Fields.consentScreen),
              (s = i.Fields.created),
              (a = i.Fields.isServiceSpecific),
              (c = i.Fields.lastUpdated),
              (d = i.Fields.policyVersion),
              (l = i.Fields.publisherCountryCode),
              (u = i.Fields.publisherLegitimateInterests),
              (E = i.Fields.publisherConsents),
              (p = i.Fields.purposeConsents),
              (g = i.Fields.purposeLegitimateInterests),
              (_ = i.Fields.purposeOneTreatment),
              (S = i.Fields.specialFeatureOptins),
              (h = i.Fields.useNonStandardTexts),
              (f = i.Fields.vendorListVersion),
              (O = i.Fields.version),
              (e[t] = 12),
              (e[n] = 12),
              (e[r] = 12),
              (e[o] = 6),
              (e[s] = 36),
              (e[a] = 1),
              (e[c] = 36),
              (e[d] = 6),
              (e[l] = 12),
              (e[u] = 24),
              (e[E] = 24),
              (e[p] = 24),
              (e[g] = 24),
              (e[_] = 1),
              (e[S] = 12),
              (e[h] = 1),
              (e[f] = 12),
              (e[O] = 6),
              (e.anyBoolean = 1),
              (e.encodingType = 1),
              (e.maxId = 16),
              (e.numCustomPurposes = 6),
              (e.numEntries = 12),
              (e.numRestrictions = 12),
              (e.purposeId = 6),
              (e.restrictionType = 2),
              (e.segmentType = 3),
              (e.singleOrRange = 1),
              (e.vendorId = 16),
              e
            );
          })();
        t.BitLength = r;
      },
      5743: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8343: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SegmentEncoder = void 0);
        var i = n(7418),
          r = n(8937),
          o = n(1049),
          s = n(1130),
          a = n(8177),
          c = n(4122),
          d = n(8495),
          l = (function () {
            function e() {}
            return (
              (e.encode = function (e, t) {
                var n,
                  s = this;
                try {
                  n = this.fieldSequence[String(e.version)][t];
                } catch (n) {
                  throw new a.EncodingError(
                    "Unable to encode version: "
                      .concat(e.version, ", segment: ")
                      .concat(t),
                  );
                }
                var l = "";
                t !== d.Segment.CORE &&
                  (l = o.IntEncoder.encode(
                    d.SegmentIDs.KEY_TO_ID[t],
                    r.BitLength.segmentType,
                  ));
                var u = (0, o.FieldEncoderMap)();
                return (
                  n.forEach(function (n) {
                    var i = e[n],
                      o = u[n],
                      d = r.BitLength[n];
                    void 0 === d &&
                      s.isPublisherCustom(n) &&
                      (d = Number(e[c.Fields.numCustomPurposes]));
                    try {
                      l += o.encode(i, d);
                    } catch (e) {
                      throw new a.EncodingError(
                        "Error encoding "
                          .concat(t, "->")
                          .concat(n, ": ")
                          .concat(e.message),
                      );
                    }
                  }),
                  i.Base64Url.encode(l)
                );
              }),
              (e.decode = function (e, t, n) {
                var s = this,
                  l = i.Base64Url.decode(e),
                  u = 0;
                n === d.Segment.CORE &&
                  (t.version = o.IntEncoder.decode(
                    l.substr(u, r.BitLength[c.Fields.version]),
                    r.BitLength[c.Fields.version],
                  )),
                  n !== d.Segment.CORE && (u += r.BitLength.segmentType);
                var E = this.fieldSequence[String(t.version)][n],
                  p = (0, o.FieldEncoderMap)();
                return (
                  E.forEach(function (e) {
                    var n = p[e],
                      i = r.BitLength[e];
                    if (
                      (void 0 === i &&
                        s.isPublisherCustom(e) &&
                        (i = Number(t[c.Fields.numCustomPurposes])),
                      0 !== i)
                    ) {
                      var d = l.substr(u, i);
                      if (
                        (n === o.VendorVectorEncoder
                          ? (t[e] = n.decode(d, t.version))
                          : (t[e] = n.decode(d, i)),
                        Number.isInteger(i))
                      )
                        u += i;
                      else {
                        if (!Number.isInteger(t[e].bitLength))
                          throw new a.DecodingError(e);
                        u += t[e].bitLength;
                      }
                    }
                  }),
                  t
                );
              }),
              (e.isPublisherCustom = function (e) {
                return 0 === e.indexOf("publisherCustom");
              }),
              (e.fieldSequence = new s.FieldSequence()),
              e
            );
          })();
        t.SegmentEncoder = l;
      },
      5543: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SemanticPreEncoder = void 0);
        var i = n(8177),
          r = n(8495),
          o = (function () {
            function e() {}
            return (
              (e.process = function (e, t) {
                var n = e.gvl;
                if (!n)
                  throw new i.EncodingError(
                    "Unable to encode TCModel without a GVL",
                  );
                if (!n.isReady)
                  throw new i.EncodingError(
                    "Unable to encode TCModel tcModel.gvl.readyPromise is not resolved",
                  );
                ((e = e.clone()).consentLanguage = n.language
                  .slice(0, 2)
                  .toUpperCase()),
                  (null == t ? void 0 : t.version) > 0 &&
                  (null == t ? void 0 : t.version) <= this.processor.length
                    ? (e.version = t.version)
                    : (e.version = this.processor.length);
                var r = e.version - 1;
                if (!this.processor[r])
                  throw new i.EncodingError(
                    "Invalid version: ".concat(e.version),
                  );
                return this.processor[r](e, n);
              }),
              (e.processor = [
                function (e) {
                  return e;
                },
                function (e, t) {
                  (e.publisherRestrictions.gvl = t),
                    e.purposeLegitimateInterests.unset([1, 3, 4, 5, 6]);
                  var n = new Map();
                  return (
                    n.set("legIntPurposes", e.vendorLegitimateInterests),
                    n.set("purposes", e.vendorConsents),
                    n.forEach(function (n, i) {
                      n.forEach(function (o, s) {
                        if (o) {
                          var a = t.vendors[s];
                          if (!a || a.deletedDate) n.unset(s);
                          else if (0 === a[i].length)
                            if (
                              "legIntPurposes" === i &&
                              0 === a.purposes.length &&
                              0 === a.legIntPurposes.length &&
                              a.specialPurposes.length > 0
                            );
                            else if (e.isServiceSpecific)
                              if (0 === a.flexiblePurposes.length) n.unset(s);
                              else {
                                for (
                                  var c =
                                      e.publisherRestrictions.getRestrictions(
                                        s,
                                      ),
                                    d = !1,
                                    l = 0,
                                    u = c.length;
                                  l < u && !d;
                                  l++
                                )
                                  d =
                                    (c[l].restrictionType ===
                                      r.RestrictionType.REQUIRE_CONSENT &&
                                      "purposes" === i) ||
                                    (c[l].restrictionType ===
                                      r.RestrictionType.REQUIRE_LI &&
                                      "legIntPurposes" === i);
                                d || n.unset(s);
                              }
                            else n.unset(s);
                        }
                      });
                    }),
                    e.vendorsDisclosed.set(t.vendors),
                    e
                  );
                },
              ]),
              e
            );
          })();
        t.SemanticPreEncoder = o;
      },
      9561: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BooleanEncoder = void 0);
        var n = (function () {
          function e() {}
          return (
            (e.encode = function (e) {
              return String(Number(e));
            }),
            (e.decode = function (e) {
              return "1" === e;
            }),
            e
          );
        })();
        t.BooleanEncoder = n;
      },
      8117: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DateEncoder = void 0);
        var i = n(7034),
          r = n(8177),
          o = (function () {
            function e() {}
            return (
              (e.encode = function (e, t) {
                return i.IntEncoder.encode(Math.round(e.getTime() / 100), t);
              }),
              (e.decode = function (e, t) {
                if (t !== e.length)
                  throw new r.DecodingError("invalid bit length");
                var n = new Date();
                return n.setTime(100 * i.IntEncoder.decode(e, t)), n;
              }),
              e
            );
          })();
        t.DateEncoder = o;
      },
      8499: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FieldEncoderMap = void 0);
        var i = n(8495),
          r = n(9561),
          o = n(8117),
          s = n(6274),
          a = n(7034),
          c = n(5981),
          d = n(1716),
          l = n(6558);
        t.FieldEncoderMap = function () {
          var e;
          return (
            ((e = {})[i.Fields.version] = a.IntEncoder),
            (e[i.Fields.created] = o.DateEncoder),
            (e[i.Fields.lastUpdated] = o.DateEncoder),
            (e[i.Fields.cmpId] = a.IntEncoder),
            (e[i.Fields.cmpVersion] = a.IntEncoder),
            (e[i.Fields.consentScreen] = a.IntEncoder),
            (e[i.Fields.consentLanguage] = c.LangEncoder),
            (e[i.Fields.vendorListVersion] = a.IntEncoder),
            (e[i.Fields.policyVersion] = a.IntEncoder),
            (e[i.Fields.isServiceSpecific] = r.BooleanEncoder),
            (e[i.Fields.useNonStandardTexts] = r.BooleanEncoder),
            (e[i.Fields.specialFeatureOptins] = s.FixedVectorEncoder),
            (e[i.Fields.purposeConsents] = s.FixedVectorEncoder),
            (e[i.Fields.purposeLegitimateInterests] = s.FixedVectorEncoder),
            (e[i.Fields.purposeOneTreatment] = r.BooleanEncoder),
            (e[i.Fields.publisherCountryCode] = c.LangEncoder),
            (e[i.Fields.vendorConsents] = l.VendorVectorEncoder),
            (e[i.Fields.vendorLegitimateInterests] = l.VendorVectorEncoder),
            (e[i.Fields.publisherRestrictions] =
              d.PurposeRestrictionVectorEncoder),
            (e.segmentType = a.IntEncoder),
            (e[i.Fields.vendorsDisclosed] = l.VendorVectorEncoder),
            (e[i.Fields.vendorsAllowed] = l.VendorVectorEncoder),
            (e[i.Fields.publisherConsents] = s.FixedVectorEncoder),
            (e[i.Fields.publisherLegitimateInterests] = s.FixedVectorEncoder),
            (e[i.Fields.numCustomPurposes] = a.IntEncoder),
            (e[i.Fields.publisherCustomConsents] = s.FixedVectorEncoder),
            (e[i.Fields.publisherCustomLegitimateInterests] =
              s.FixedVectorEncoder),
            e
          );
        };
      },
      6274: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FixedVectorEncoder = void 0);
        var i = n(9561),
          r = n(8177),
          o = n(8495),
          s = (function () {
            function e() {}
            return (
              (e.encode = function (e, t) {
                for (var n = "", r = 1; r <= t; r++)
                  n += i.BooleanEncoder.encode(e.has(r));
                return n;
              }),
              (e.decode = function (e, t) {
                if (e.length !== t)
                  throw new r.DecodingError(
                    "bitfield encoding length mismatch",
                  );
                for (var n = new o.Vector(), s = 1; s <= t; s++)
                  i.BooleanEncoder.decode(e[s - 1]) && n.set(s);
                return (n.bitLength = e.length), n;
              }),
              e
            );
          })();
        t.FixedVectorEncoder = s;
      },
      7034: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.IntEncoder = void 0);
        var i = n(8177),
          r = (function () {
            function e() {}
            return (
              (e.encode = function (e, t) {
                var n;
                if (
                  ("string" == typeof e && (e = parseInt(e, 10)),
                  (n = e.toString(2)).length > t || e < 0)
                )
                  throw new i.EncodingError(
                    "".concat(e, " too large to encode into ").concat(t),
                  );
                return n.length < t && (n = "0".repeat(t - n.length) + n), n;
              }),
              (e.decode = function (e, t) {
                if (t !== e.length)
                  throw new i.DecodingError("invalid bit length");
                return parseInt(e, 2);
              }),
              e
            );
          })();
        t.IntEncoder = r;
      },
      5981: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LangEncoder = void 0);
        var i = n(7034),
          r = n(8177),
          o = (function () {
            function e() {}
            return (
              (e.encode = function (e, t) {
                var n = (e = e.toUpperCase()).charCodeAt(0) - 65,
                  o = e.charCodeAt(1) - 65;
                if (n < 0 || n > 25 || o < 0 || o > 25)
                  throw new r.EncodingError(
                    "invalid language code: ".concat(e),
                  );
                if (t % 2 == 1)
                  throw new r.EncodingError(
                    "numBits must be even, ".concat(t, " is not valid"),
                  );
                return (
                  (t /= 2),
                  i.IntEncoder.encode(n, t) + i.IntEncoder.encode(o, t)
                );
              }),
              (e.decode = function (e, t) {
                if (t !== e.length || e.length % 2)
                  throw new r.DecodingError("invalid bit length for language");
                var n = e.length / 2,
                  o = i.IntEncoder.decode(e.slice(0, n), n) + 65,
                  s = i.IntEncoder.decode(e.slice(n), n) + 65;
                return String.fromCharCode(o) + String.fromCharCode(s);
              }),
              e
            );
          })();
        t.LangEncoder = o;
      },
      1716: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PurposeRestrictionVectorEncoder = void 0);
        var i = n(8937),
          r = n(9561),
          o = n(8177),
          s = n(7034),
          a = n(8495),
          c = (function () {
            function e() {}
            return (
              (e.encode = function (e) {
                var t = s.IntEncoder.encode(
                  e.numRestrictions,
                  i.BitLength.numRestrictions,
                );
                if (!e.isEmpty()) {
                  var n = function (t, n) {
                    for (var i = t + 1; i <= n; i++)
                      if (e.gvl.vendorIds.has(i)) return i;
                    return t;
                  };
                  e.getRestrictions().forEach(function (o) {
                    (t += s.IntEncoder.encode(
                      o.purposeId,
                      i.BitLength.purposeId,
                    )),
                      (t += s.IntEncoder.encode(
                        o.restrictionType,
                        i.BitLength.restrictionType,
                      ));
                    for (
                      var a = e.getVendors(o),
                        c = a.length,
                        d = 0,
                        l = 0,
                        u = "",
                        E = 0;
                      E < c;
                      E++
                    ) {
                      var p = a[E];
                      if (
                        (0 === l && (d++, (l = p)),
                        E === c - 1 || a[E + 1] > n(p, a[c - 1]))
                      ) {
                        var g = !(p === l);
                        (u += r.BooleanEncoder.encode(g)),
                          (u += s.IntEncoder.encode(l, i.BitLength.vendorId)),
                          g &&
                            (u += s.IntEncoder.encode(p, i.BitLength.vendorId)),
                          (l = 0);
                      }
                    }
                    (t += s.IntEncoder.encode(d, i.BitLength.numEntries)),
                      (t += u);
                  });
                }
                return t;
              }),
              (e.decode = function (e) {
                var t = 0,
                  n = new a.PurposeRestrictionVector(),
                  c = s.IntEncoder.decode(
                    e.substr(t, i.BitLength.numRestrictions),
                    i.BitLength.numRestrictions,
                  );
                t += i.BitLength.numRestrictions;
                for (var d = 0; d < c; d++) {
                  var l = s.IntEncoder.decode(
                    e.substr(t, i.BitLength.purposeId),
                    i.BitLength.purposeId,
                  );
                  t += i.BitLength.purposeId;
                  var u = s.IntEncoder.decode(
                    e.substr(t, i.BitLength.restrictionType),
                    i.BitLength.restrictionType,
                  );
                  t += i.BitLength.restrictionType;
                  var E = new a.PurposeRestriction(l, u),
                    p = s.IntEncoder.decode(
                      e.substr(t, i.BitLength.numEntries),
                      i.BitLength.numEntries,
                    );
                  t += i.BitLength.numEntries;
                  for (var g = 0; g < p; g++) {
                    var _ = r.BooleanEncoder.decode(
                      e.substr(t, i.BitLength.anyBoolean),
                    );
                    t += i.BitLength.anyBoolean;
                    var S = s.IntEncoder.decode(
                      e.substr(t, i.BitLength.vendorId),
                      i.BitLength.vendorId,
                    );
                    if (((t += i.BitLength.vendorId), _)) {
                      var h = s.IntEncoder.decode(
                        e.substr(t, i.BitLength.vendorId),
                        i.BitLength.vendorId,
                      );
                      if (((t += i.BitLength.vendorId), h < S))
                        throw new o.DecodingError(
                          "Invalid RangeEntry: endVendorId "
                            .concat(h, " is less than ")
                            .concat(S),
                        );
                      for (var f = S; f <= h; f++) n.add(f, E);
                    } else n.add(S, E);
                  }
                }
                return (n.bitLength = t), n;
              }),
              e
            );
          })();
        t.PurposeRestrictionVectorEncoder = c;
      },
      8219: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.VectorEncodingType = void 0),
          ((n = t.VectorEncodingType || (t.VectorEncodingType = {}))[
            (n.FIELD = 0)
          ] = "FIELD"),
          (n[(n.RANGE = 1)] = "RANGE");
      },
      6558: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.VendorVectorEncoder = void 0);
        var i = n(8495),
          r = n(8270),
          o = n(7034),
          s = n(9561),
          a = n(6274),
          c = n(8219),
          d = n(8177),
          l = (function () {
            function e() {}
            return (
              (e.encode = function (e) {
                var t,
                  n = [],
                  i = [],
                  a = o.IntEncoder.encode(e.maxId, r.BitLength.maxId),
                  d = "",
                  l = r.BitLength.maxId + r.BitLength.encodingType,
                  u = l + e.maxId,
                  E =
                    2 * r.BitLength.vendorId +
                    r.BitLength.singleOrRange +
                    r.BitLength.numEntries,
                  p = l + r.BitLength.numEntries;
                return (
                  e.forEach(function (o, a) {
                    (d += s.BooleanEncoder.encode(o)),
                      (t = e.maxId > E && p < u) &&
                        o &&
                        (e.has(a + 1)
                          ? 0 === i.length &&
                            (i.push(a),
                            (p += r.BitLength.singleOrRange),
                            (p += r.BitLength.vendorId))
                          : (i.push(a),
                            (p += r.BitLength.vendorId),
                            n.push(i),
                            (i = [])));
                  }),
                  t
                    ? ((a += String(c.VectorEncodingType.RANGE)),
                      (a += this.buildRangeEncoding(n)))
                    : ((a += String(c.VectorEncodingType.FIELD)), (a += d)),
                  a
                );
              }),
              (e.decode = function (e, t) {
                var n,
                  l = 0,
                  u = o.IntEncoder.decode(
                    e.substr(l, r.BitLength.maxId),
                    r.BitLength.maxId,
                  );
                l += r.BitLength.maxId;
                var E = o.IntEncoder.decode(
                  e.charAt(l),
                  r.BitLength.encodingType,
                );
                if (
                  ((l += r.BitLength.encodingType),
                  E === c.VectorEncodingType.RANGE)
                ) {
                  if (((n = new i.Vector()), 1 === t)) {
                    if ("1" === e.substr(l, 1))
                      throw new d.DecodingError(
                        "Unable to decode default consent=1",
                      );
                    l++;
                  }
                  var p = o.IntEncoder.decode(
                    e.substr(l, r.BitLength.numEntries),
                    r.BitLength.numEntries,
                  );
                  l += r.BitLength.numEntries;
                  for (var g = 0; g < p; g++) {
                    var _ = s.BooleanEncoder.decode(e.charAt(l));
                    l += r.BitLength.singleOrRange;
                    var S = o.IntEncoder.decode(
                      e.substr(l, r.BitLength.vendorId),
                      r.BitLength.vendorId,
                    );
                    if (((l += r.BitLength.vendorId), _)) {
                      var h = o.IntEncoder.decode(
                        e.substr(l, r.BitLength.vendorId),
                        r.BitLength.vendorId,
                      );
                      l += r.BitLength.vendorId;
                      for (var f = S; f <= h; f++) n.set(f);
                    } else n.set(S);
                  }
                } else {
                  var O = e.substr(l, u);
                  (l += u), (n = a.FixedVectorEncoder.decode(O, u));
                }
                return (n.bitLength = l), n;
              }),
              (e.buildRangeEncoding = function (e) {
                var t = e.length,
                  n = o.IntEncoder.encode(t, r.BitLength.numEntries);
                return (
                  e.forEach(function (e) {
                    var t = 1 === e.length;
                    (n += s.BooleanEncoder.encode(!t)),
                      (n += o.IntEncoder.encode(e[0], r.BitLength.vendorId)),
                      t ||
                        (n += o.IntEncoder.encode(e[1], r.BitLength.vendorId));
                  }),
                  n
                );
              }),
              e
            );
          })();
        t.VendorVectorEncoder = l;
      },
      1049: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(9561), t),
          r(n(8117), t),
          r(n(8499), t),
          r(n(6274), t),
          r(n(7034), t),
          r(n(5981), t),
          r(n(1716), t),
          r(n(8219), t),
          r(n(6558), t);
      },
      8270: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(7418), t),
          r(n(8937), t),
          r(n(5743), t),
          r(n(8343), t),
          r(n(5543), t),
          r(n(1049), t),
          r(n(1130), t);
      },
      5575: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FieldSequence = void 0);
        var i = n(8495);
        t.FieldSequence = function () {
          var e, t;
          (this[1] =
            (((e = {})[i.Segment.CORE] = [
              i.Fields.version,
              i.Fields.created,
              i.Fields.lastUpdated,
              i.Fields.cmpId,
              i.Fields.cmpVersion,
              i.Fields.consentScreen,
              i.Fields.consentLanguage,
              i.Fields.vendorListVersion,
              i.Fields.purposeConsents,
              i.Fields.vendorConsents,
            ]),
            e)),
            (this[2] =
              (((t = {})[i.Segment.CORE] = [
                i.Fields.version,
                i.Fields.created,
                i.Fields.lastUpdated,
                i.Fields.cmpId,
                i.Fields.cmpVersion,
                i.Fields.consentScreen,
                i.Fields.consentLanguage,
                i.Fields.vendorListVersion,
                i.Fields.policyVersion,
                i.Fields.isServiceSpecific,
                i.Fields.useNonStandardTexts,
                i.Fields.specialFeatureOptins,
                i.Fields.purposeConsents,
                i.Fields.purposeLegitimateInterests,
                i.Fields.purposeOneTreatment,
                i.Fields.publisherCountryCode,
                i.Fields.vendorConsents,
                i.Fields.vendorLegitimateInterests,
                i.Fields.publisherRestrictions,
              ]),
              (t[i.Segment.PUBLISHER_TC] = [
                i.Fields.publisherConsents,
                i.Fields.publisherLegitimateInterests,
                i.Fields.numCustomPurposes,
                i.Fields.publisherCustomConsents,
                i.Fields.publisherCustomLegitimateInterests,
              ]),
              (t[i.Segment.VENDORS_ALLOWED] = [i.Fields.vendorsAllowed]),
              (t[i.Segment.VENDORS_DISCLOSED] = [i.Fields.vendorsDisclosed]),
              t));
        };
      },
      6834: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SegmentSequence = void 0);
        var i = n(8495);
        t.SegmentSequence = function (e, t) {
          if (
            ((this[1] = [i.Segment.CORE]),
            (this[2] = [i.Segment.CORE]),
            2 === e.version)
          )
            if (e.isServiceSpecific) this[2].push(i.Segment.PUBLISHER_TC);
            else {
              var n = !(!t || !t.isForVendors);
              (n && !0 !== e[i.Fields.supportOOB]) ||
                this[2].push(i.Segment.VENDORS_DISCLOSED),
                n &&
                  (e[i.Fields.supportOOB] &&
                    e[i.Fields.vendorsAllowed].size > 0 &&
                    this[2].push(i.Segment.VENDORS_ALLOWED),
                  this[2].push(i.Segment.PUBLISHER_TC));
            }
        };
      },
      5279: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1130: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(5575), t),
          r(n(6834), t),
          r(n(5279), t);
      },
      9244: function (e, t) {
        "use strict";
        var n,
          i =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function i() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((i.prototype = t.prototype), new i()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DecodingError = void 0);
        var r = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.name = "DecodingError"), n;
          }
          return i(t, e), t;
        })(Error);
        t.DecodingError = r;
      },
      6344: function (e, t) {
        "use strict";
        var n,
          i =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function i() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((i.prototype = t.prototype), new i()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncodingError = void 0);
        var r = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.name = "EncodingError"), n;
          }
          return i(t, e), t;
        })(Error);
        t.EncodingError = r;
      },
      7650: function (e, t) {
        "use strict";
        var n,
          i =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function i() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((i.prototype = t.prototype), new i()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GVLError = void 0);
        var r = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.name = "GVLError"), n;
          }
          return i(t, e), t;
        })(Error);
        t.GVLError = r;
      },
      5969: function (e, t) {
        "use strict";
        var n,
          i =
            (this && this.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function i() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((i.prototype = t.prototype), new i()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TCModelError = void 0);
        var r = (function (e) {
          function t(t, n, i) {
            void 0 === i && (i = "");
            var r =
              e.call(
                this,
                "invalid value "
                  .concat(n, " passed for ")
                  .concat(t, " ")
                  .concat(i),
              ) || this;
            return (r.name = "TCModelError"), r;
          }
          return i(t, e), t;
        })(Error);
        t.TCModelError = r;
      },
      8177: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(9244), t),
          r(n(6344), t),
          r(n(7650), t),
          r(n(5969), t);
      },
      1229: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(8270), t),
          r(n(8177), t),
          r(n(8495), t),
          r(n(2388), t),
          r(n(834), t),
          r(n(8223), t),
          r(n(5771), t),
          r(n(8029), t);
      },
      8614: function (e, t) {
        "use strict";
        var n =
          (this && this.__values) ||
          function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              n = t && e[t],
              i = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return (
                    e && i >= e.length && (e = void 0),
                    { value: e && e[i++], done: !e }
                  );
                },
              };
            throw new TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ConsentLanguages = void 0);
        var i = (function () {
          function e() {}
          return (
            (e.prototype.has = function (t) {
              return e.langSet.has(t);
            }),
            (e.prototype.parseLanguage = function (t) {
              var i,
                r,
                o = (t = t.toUpperCase()).split("-")[0];
              if (t.length >= 2 && 2 == o.length) {
                if (e.langSet.has(t)) return t;
                if (e.langSet.has(o)) return o;
                var s = o + "-" + o;
                if (e.langSet.has(s)) return s;
                try {
                  for (
                    var a = n(e.langSet), c = a.next();
                    !c.done;
                    c = a.next()
                  ) {
                    var d = c.value;
                    if (-1 !== d.indexOf(t) || -1 !== d.indexOf(o)) return d;
                  }
                } catch (e) {
                  i = { error: e };
                } finally {
                  try {
                    c && !c.done && (r = a.return) && r.call(a);
                  } finally {
                    if (i) throw i.error;
                  }
                }
              }
              throw new Error("unsupported language ".concat(t));
            }),
            (e.prototype.forEach = function (t) {
              e.langSet.forEach(t);
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function () {
                return e.langSet.size;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.langSet = new Set([
              "AR",
              "BG",
              "BS",
              "CA",
              "CS",
              "CY",
              "DA",
              "DE",
              "EL",
              "EN",
              "ES",
              "ET",
              "EU",
              "FI",
              "FR",
              "GL",
              "HE",
              "HR",
              "HU",
              "ID",
              "IT",
              "JA",
              "KO",
              "LT",
              "LV",
              "MK",
              "MS",
              "MT",
              "NL",
              "NO",
              "PL",
              "PT-BR",
              "PT-PT",
              "RO",
              "RU",
              "SK",
              "SL",
              "SR-LATN",
              "SR-CYRL",
              "SV",
              "TL",
              "TR",
              "UK",
              "ZH",
            ])),
            e
          );
        })();
        t.ConsentLanguages = i;
      },
      3280: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4109: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DeviceDisclosureStorageAccessType = void 0),
          ((n =
            t.DeviceDisclosureStorageAccessType ||
            (t.DeviceDisclosureStorageAccessType = {})).COOKIE = "cookie"),
          (n.WEB = "web"),
          (n.APP = "app");
      },
      4122: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Fields = void 0);
        var n = (function () {
          function e() {}
          return (
            (e.cmpId = "cmpId"),
            (e.cmpVersion = "cmpVersion"),
            (e.consentLanguage = "consentLanguage"),
            (e.consentScreen = "consentScreen"),
            (e.created = "created"),
            (e.supportOOB = "supportOOB"),
            (e.isServiceSpecific = "isServiceSpecific"),
            (e.lastUpdated = "lastUpdated"),
            (e.numCustomPurposes = "numCustomPurposes"),
            (e.policyVersion = "policyVersion"),
            (e.publisherCountryCode = "publisherCountryCode"),
            (e.publisherCustomConsents = "publisherCustomConsents"),
            (e.publisherCustomLegitimateInterests =
              "publisherCustomLegitimateInterests"),
            (e.publisherLegitimateInterests = "publisherLegitimateInterests"),
            (e.publisherConsents = "publisherConsents"),
            (e.publisherRestrictions = "publisherRestrictions"),
            (e.purposeConsents = "purposeConsents"),
            (e.purposeLegitimateInterests = "purposeLegitimateInterests"),
            (e.purposeOneTreatment = "purposeOneTreatment"),
            (e.specialFeatureOptins = "specialFeatureOptins"),
            (e.useNonStandardTexts = "useNonStandardTexts"),
            (e.vendorConsents = "vendorConsents"),
            (e.vendorLegitimateInterests = "vendorLegitimateInterests"),
            (e.vendorListVersion = "vendorListVersion"),
            (e.vendorsAllowed = "vendorsAllowed"),
            (e.vendorsDisclosed = "vendorsDisclosed"),
            (e.version = "version"),
            e
          );
        })();
        t.Fields = n;
      },
      3082: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2920: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      179: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PurposeRestriction = void 0);
        var o = n(2388),
          s = n(8177),
          a = n(8725),
          c = (function (e) {
            function t(t, n) {
              var i = e.call(this) || this;
              return (
                void 0 !== t && (i.purposeId = t),
                void 0 !== n && (i.restrictionType = n),
                i
              );
            }
            return (
              r(t, e),
              (t.unHash = function (e) {
                var n = e.split(this.hashSeparator),
                  i = new t();
                if (2 !== n.length) throw new s.TCModelError("hash", e);
                return (
                  (i.purposeId = parseInt(n[0], 10)),
                  (i.restrictionType = parseInt(n[1], 10)),
                  i
                );
              }),
              Object.defineProperty(t.prototype, "hash", {
                get: function () {
                  if (!this.isValid())
                    throw new Error("cannot hash invalid PurposeRestriction");
                  return ""
                    .concat(this.purposeId)
                    .concat(t.hashSeparator)
                    .concat(this.restrictionType);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "purposeId", {
                get: function () {
                  return this.purposeId_;
                },
                set: function (e) {
                  this.purposeId_ = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isValid = function () {
                return (
                  Number.isInteger(this.purposeId) &&
                  this.purposeId > 0 &&
                  (this.restrictionType === a.RestrictionType.NOT_ALLOWED ||
                    this.restrictionType ===
                      a.RestrictionType.REQUIRE_CONSENT ||
                    this.restrictionType === a.RestrictionType.REQUIRE_LI)
                );
              }),
              (t.prototype.isSameAs = function (e) {
                return (
                  this.purposeId === e.purposeId &&
                  this.restrictionType === e.restrictionType
                );
              }),
              (t.hashSeparator = "-"),
              t
            );
          })(o.Cloneable);
        t.PurposeRestriction = c;
      },
      1824: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          o =
            (this && this.__read) ||
            function (e, t) {
              var n = "function" == typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var i,
                r,
                o = n.call(e),
                s = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
                  s.push(i.value);
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
              return s;
            },
          s =
            (this && this.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var i, r = 0, o = t.length; r < o; r++)
                  (!i && r in t) ||
                    (i || (i = Array.prototype.slice.call(t, 0, r)),
                    (i[r] = t[r]));
              return e.concat(i || Array.prototype.slice.call(t));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PurposeRestrictionVector = void 0);
        var a = n(179),
          c = n(8725),
          d = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.bitLength = 0), (t.map = new Map()), t;
            }
            return (
              r(t, e),
              (t.prototype.has = function (e) {
                return this.map.has(e);
              }),
              (t.prototype.isOkToHave = function (e, t, n) {
                var i,
                  r = !0;
                if (
                  null === (i = this.gvl) || void 0 === i ? void 0 : i.vendors
                ) {
                  var o = this.gvl.vendors[n];
                  if (o)
                    if (e === c.RestrictionType.NOT_ALLOWED)
                      r =
                        o.legIntPurposes.includes(t) || o.purposes.includes(t);
                    else if (o.flexiblePurposes.length)
                      switch (e) {
                        case c.RestrictionType.REQUIRE_CONSENT:
                          r =
                            o.flexiblePurposes.includes(t) &&
                            o.legIntPurposes.includes(t);
                          break;
                        case c.RestrictionType.REQUIRE_LI:
                          r =
                            o.flexiblePurposes.includes(t) &&
                            o.purposes.includes(t);
                      }
                    else r = !1;
                  else r = !1;
                }
                return r;
              }),
              (t.prototype.add = function (e, t) {
                if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
                  var n = t.hash;
                  this.has(n) ||
                    (this.map.set(n, new Set()), (this.bitLength = 0)),
                    this.map.get(n).add(e);
                }
              }),
              (t.prototype.restrictPurposeToLegalBasis = function (e) {
                var t = Array.from(this.gvl.vendorIds),
                  n = e.hash,
                  i = t[t.length - 1],
                  r = s([], o(Array(i).keys()), !1).map(function (e) {
                    return e + 1;
                  });
                if (this.has(n))
                  for (var a = 1; a <= i; a++) this.map.get(n).add(a);
                else this.map.set(n, new Set(r)), (this.bitLength = 0);
              }),
              (t.prototype.getVendors = function (e) {
                var t = [];
                if (e) {
                  var n = e.hash;
                  this.has(n) && (t = Array.from(this.map.get(n)));
                } else {
                  var i = new Set();
                  this.map.forEach(function (e) {
                    e.forEach(function (e) {
                      i.add(e);
                    });
                  }),
                    (t = Array.from(i));
                }
                return t.sort(function (e, t) {
                  return e - t;
                });
              }),
              (t.prototype.getRestrictionType = function (e, t) {
                var n;
                return (
                  this.getRestrictions(e).forEach(function (e) {
                    e.purposeId === t &&
                      (void 0 === n || n > e.restrictionType) &&
                      (n = e.restrictionType);
                  }),
                  n
                );
              }),
              (t.prototype.vendorHasRestriction = function (e, t) {
                for (
                  var n = !1, i = this.getRestrictions(e), r = 0;
                  r < i.length && !n;
                  r++
                )
                  n = t.isSameAs(i[r]);
                return n;
              }),
              (t.prototype.getMaxVendorId = function () {
                var e = 0;
                return (
                  this.map.forEach(function (t) {
                    e = Math.max(Array.from(t)[t.size - 1], e);
                  }),
                  e
                );
              }),
              (t.prototype.getRestrictions = function (e) {
                var t = [];
                return (
                  this.map.forEach(function (n, i) {
                    e
                      ? n.has(e) && t.push(a.PurposeRestriction.unHash(i))
                      : t.push(a.PurposeRestriction.unHash(i));
                  }),
                  t
                );
              }),
              (t.prototype.getPurposes = function () {
                var e = new Set();
                return (
                  this.map.forEach(function (t, n) {
                    e.add(a.PurposeRestriction.unHash(n).purposeId);
                  }),
                  Array.from(e)
                );
              }),
              (t.prototype.remove = function (e, t) {
                var n = t.hash,
                  i = this.map.get(n);
                i &&
                  (i.delete(e),
                  0 == i.size && (this.map.delete(n), (this.bitLength = 0)));
              }),
              Object.defineProperty(t.prototype, "gvl", {
                get: function () {
                  return this.gvl_;
                },
                set: function (e) {
                  var t = this;
                  this.gvl_ ||
                    ((this.gvl_ = e),
                    this.map.forEach(function (e, n) {
                      var i = a.PurposeRestriction.unHash(n);
                      Array.from(e).forEach(function (n) {
                        t.isOkToHave(i.restrictionType, i.purposeId, n) ||
                          e.delete(n);
                      });
                    }));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isEmpty = function () {
                return 0 === this.map.size;
              }),
              Object.defineProperty(t.prototype, "numRestrictions", {
                get: function () {
                  return this.map.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })(n(2388).Cloneable);
        t.PurposeRestrictionVector = d;
      },
      8725: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RestrictionType = void 0),
          ((n = t.RestrictionType || (t.RestrictionType = {}))[
            (n.NOT_ALLOWED = 0)
          ] = "NOT_ALLOWED"),
          (n[(n.REQUIRE_CONSENT = 1)] = "REQUIRE_CONSENT"),
          (n[(n.REQUIRE_LI = 2)] = "REQUIRE_LI");
      },
      8966: function (e, t) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Segment = void 0),
          ((n = t.Segment || (t.Segment = {})).CORE = "core"),
          (n.VENDORS_DISCLOSED = "vendorsDisclosed"),
          (n.VENDORS_ALLOWED = "vendorsAllowed"),
          (n.PUBLISHER_TC = "publisherTC");
      },
      1746: function (e, t, n) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SegmentIDs = void 0);
        var r = n(8966),
          o = (function () {
            function e() {}
            return (
              (e.ID_TO_KEY = [
                r.Segment.CORE,
                r.Segment.VENDORS_DISCLOSED,
                r.Segment.VENDORS_ALLOWED,
                r.Segment.PUBLISHER_TC,
              ]),
              (e.KEY_TO_ID =
                (((i = {})[r.Segment.CORE] = 0),
                (i[r.Segment.VENDORS_DISCLOSED] = 1),
                (i[r.Segment.VENDORS_ALLOWED] = 2),
                (i[r.Segment.PUBLISHER_TC] = 3),
                i)),
              e
            );
          })();
        t.SegmentIDs = o;
      },
      4984: function (e, t, n) {
        "use strict";
        var i,
          r =
            (this && this.__extends) ||
            ((i = function (e, t) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                o,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                  ? i.throw || ((r = i.return) && r.call(i), 0)
                                  : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = s.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < r[1]) {
                              (s.label = r[1]), (r = a);
                              break;
                            }
                            if (r && s.label < r[2]) {
                              (s.label = r[2]), s.ops.push(a);
                              break;
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = t.call(e, s);
                      } catch (e) {
                        (a = [6, e]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Vector = void 0);
        var s = n(2388),
          a = n(8177),
          c = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.bitLength = 0), (t.maxId_ = 0), (t.set_ = new Set()), t;
            }
            return (
              r(t, e),
              (t.prototype[Symbol.iterator] = function () {
                var e;
                return o(this, function (t) {
                  switch (t.label) {
                    case 0:
                      (e = 1), (t.label = 1);
                    case 1:
                      return e <= this.maxId ? [4, [e, this.has(e)]] : [3, 4];
                    case 2:
                      t.sent(), (t.label = 3);
                    case 3:
                      return e++, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              }),
              (t.prototype.values = function () {
                return this.set_.values();
              }),
              Object.defineProperty(t.prototype, "maxId", {
                get: function () {
                  return this.maxId_;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.has = function (e) {
                return this.set_.has(e);
              }),
              (t.prototype.unset = function (e) {
                var t = this;
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      return t.unset(e);
                    })
                  : "object" == typeof e
                    ? this.unset(
                        Object.keys(e).map(function (e) {
                          return Number(e);
                        }),
                      )
                    : (this.set_.delete(Number(e)),
                      (this.bitLength = 0),
                      e === this.maxId &&
                        ((this.maxId_ = 0),
                        this.set_.forEach(function (e) {
                          t.maxId_ = Math.max(t.maxId, e);
                        })));
              }),
              (t.prototype.isIntMap = function (e) {
                var t = this,
                  n = "object" == typeof e;
                return (
                  n &&
                  Object.keys(e).every(function (n) {
                    var i = Number.isInteger(parseInt(n, 10));
                    return (
                      (i = i && t.isValidNumber(e[n].id)) &&
                      void 0 !== e[n].name
                    );
                  })
                );
              }),
              (t.prototype.isValidNumber = function (e) {
                return parseInt(e, 10) > 0;
              }),
              (t.prototype.isSet = function (e) {
                var t = !1;
                return (
                  e instanceof Set &&
                    (t = Array.from(e).every(this.isValidNumber)),
                  t
                );
              }),
              (t.prototype.set = function (e) {
                var t = this;
                if (Array.isArray(e))
                  e.forEach(function (e) {
                    return t.set(e);
                  });
                else if (this.isSet(e)) this.set(Array.from(e));
                else if (this.isIntMap(e))
                  this.set(
                    Object.keys(e).map(function (e) {
                      return Number(e);
                    }),
                  );
                else {
                  if (!this.isValidNumber(e))
                    throw new a.TCModelError(
                      "set()",
                      e,
                      "must be positive integer array, positive integer, Set<number>, or IntMap",
                    );
                  this.set_.add(e),
                    (this.maxId_ = Math.max(this.maxId, e)),
                    (this.bitLength = 0);
                }
              }),
              (t.prototype.empty = function () {
                this.set_ = new Set();
              }),
              (t.prototype.forEach = function (e) {
                for (var t = 1; t <= this.maxId; t++) e(this.has(t), t);
              }),
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.set_.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.setAll = function (e) {
                this.set(e);
              }),
              t
            );
          })(s.Cloneable);
        t.Vector = c;
      },
      7640: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1723: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3362: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2629: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3715: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8955: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5308: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4621: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5987: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1965: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3297: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9183: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(7640), t),
          r(n(3362), t),
          r(n(2629), t),
          r(n(3715), t),
          r(n(5308), t),
          r(n(4621), t),
          r(n(5987), t),
          r(n(1965), t),
          r(n(3297), t),
          r(n(1723), t),
          r(n(8955), t);
      },
      8495: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(8614), t),
          r(n(4122), t),
          r(n(3082), t),
          r(n(2920), t),
          r(n(179), t),
          r(n(1824), t),
          r(n(4109), t),
          r(n(3280), t),
          r(n(8725), t),
          r(n(8966), t),
          r(n(1746), t),
          r(n(4984), t),
          r(n(9183), t);
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      n(6033);
      var e = ["j", "t", "v", "u"],
        t = {
          parseQuery: function (e) {
            var t = {};
            if (e) {
              "?" === e[0] && (e = e.substring(1));
              for (var n = e.split("&"), i = 0; i < n.length; i++) {
                var r = n[i].split("=");
                r[0] &&
                  (t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]));
              }
            }
            return t;
          },
          stringifyQuery: function (t) {
            var n = [];
            for (var i in t)
              -1 !== e.indexOf(i) &&
                n.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
            return n.join("&");
          },
          isUndefined: function (e) {
            return "undefined" !== e && void 0 === e;
          },
          toBoolean: function (e) {
            return "string" == typeof e ? "true" === e || "1" === e : !!e;
          },
          logMessage: function (e, t) {
            window.console &&
              "function" == typeof console[e] &&
              window.console[e](t);
          },
          addWindowMessageListener: function (e, t) {
            (e = e || window).addEventListener
              ? e.addEventListener("message", t, !1)
              : e.attachEvent("onmessage", t);
          },
          parsePostMessageData: function (e) {
            var t = e || "";
            if ("string" == typeof e)
              try {
                t = JSON.parse(e);
              } catch (e) {}
            else
              try {
                t = JSON.parse(JSON.stringify(e));
              } catch (e) {}
            return t;
          },
          ajax: function (e, t, n) {
            var i = new XMLHttpRequest();
            i.onreadystatechange = function (e) {
              if (4 === i.readyState)
                if (200 === i.status)
                  try {
                    n(JSON.parse(i.responseText));
                  } catch (e) {
                    n();
                  }
                else n();
            };
            var r = Object.keys(t || {})
              .map(function (e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
              })
              .join("&");
            try {
              (i.withCredentials = !0),
                i.open("GET", "".concat(e, "?").concat(r), !0),
                i.send(null);
            } catch (e) {}
          },
          getMetaTagContent: function (e) {
            var t = new RegExp(":", "g"),
              n = e.replace(t, "\\:"),
              i = document.head.querySelector("[name=" + n + "]");
            return i ? i.content : void 0;
          },
          documentReady: function (e) {
            "loading" !== document.readyState
              ? e()
              : document.addEventListener
                ? document.addEventListener("DOMContentLoaded", e)
                : document.attachEvent("onreadystatechange", function () {
                    "complete" === document.readyState && e();
                  });
          },
        };
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      function r(e) {
        var t = (function (e, t) {
          if ("object" != i(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == i(t) ? t : t + "";
      }
      function o(e, t, n) {
        return (
          (t = r(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var c,
        d,
        l,
        u =
          ((c = (t.getMetaTagContent("oath:guce:consent-host") || "").slice(5)),
          (l = function (e, n, i) {
            var r = new Date(),
              o = 24 * (i ? 365 : 1) * 60 * 60 * 1e3;
            r.setTime(r.getTime() + o);
            var s = c ? "domain=" + c + "; " : "",
              a = "path=/; ";
            document.cookie = t.isUndefined(n)
              ? e + "=; " + s + a + "Max-Age=0"
              : e +
                "=" +
                n +
                "; " +
                s +
                a +
                "expires=" +
                r.toGMTString() +
                "; SameSite=None; Secure";
          }),
          {
            setCachedData: function (e) {
              var n = a(
                a(
                  a(
                    { t: Math.round(Date.now() / 1e3) },
                    t.isUndefined(e.gdprApplies)
                      ? {}
                      : { j: e.gdprApplies ? "1" : "0" },
                  ),
                  t.isUndefined(e.uspString) ? {} : { u: e.uspString },
                ),
                t.isUndefined(e.pubVendorListVersion)
                  ? {}
                  : { v: e.pubVendorListVersion },
              );
              l("cmp", t.stringifyQuery(n), !0),
                l("EuConsent", e.consentString),
                l("gpp", e.gpp),
                l("gpp_sid", e.gppSid);
            },
            getCachedData: function () {
              var e = t.parseQuery(d("cmp")),
                n = d("EuConsent"),
                i = d("gpp"),
                r = d("gpp_sid");
              return Math.round(Date.now() / 1e3) - (e.t || 0) > 21600
                ? a(
                    {},
                    t.isUndefined(e.v)
                      ? {}
                      : { pubVendorListVersion: e.v && parseInt(e.v) },
                  )
                : a(
                    a(
                      a(
                        a(
                          a(
                            {},
                            t.isUndefined(e.j)
                              ? {}
                              : { gdprApplies: t.toBoolean(e.j) },
                          ),
                          t.isUndefined(n) ? {} : { consentString: n },
                        ),
                        {},
                        { uspString: e.u || "1---" },
                        t.isUndefined(e.v)
                          ? {}
                          : { pubVendorListVersion: e.v && parseInt(e.v) },
                      ),
                      t.isUndefined(i) ? {} : { gpp: i },
                    ),
                    t.isUndefined(r) ? {} : { gppSid: r },
                  );
            },
            getCookieValue: (d = function (e) {
              var t,
                n,
                i,
                r,
                o,
                s = document.cookie;
              if (((t = {}), s))
                for (n = 0, i = (o = s.split(";")).length; n < i; n++)
                  t[(r = o[n].split(/=(.+)/))[0].trim()] = (r[1] || "").trim();
              return t[e];
            }),
          }),
        E = u,
        p = (function () {
          var e,
            n = "",
            i = t.getMetaTagContent("oath:guce:consent-host");
          i
            ? (n = "https://{{domain}}/".replace("{{domain}}", i))
            : t.logMessage(
                "error",
                "CMP Error: Required oath:guce:consent-host meta tag is not present on the page",
              );
          var r = [],
            o = !1;
          return {
            getConsentData: function (i) {
              if (o) i(e, !1);
              else if (e) i(e, !0);
              else if (r.length) r.push(i);
              else {
                r.push(i);
                var s = { consentTypes: "iab,iabCCPA,gpp,gppSid" },
                  a = E.getCachedData().pubVendorListVersion;
                a && (s.pubVendorListVersion = a),
                  (function (e, i, r) {
                    n
                      ? t.ajax(n + e, i, function (e) {
                          r(e, !!e);
                        })
                      : r(void 0, !1);
                  })("v1/consentRecord", s, function (n, i) {
                    if (i) {
                      var s = (n && n.tosRecords) || {},
                        a = s.eu,
                        c = s.nonEu,
                        d = (a || c || {}).consentEvents || {},
                        l = d.iab || {},
                        u = l.status,
                        E = l.pubVendorListVersion,
                        p = d.iabCCPA,
                        g = d.gpp,
                        _ = d.gppSid;
                      e = {
                        consentString: u || void 0,
                        gdprApplies: !!a,
                        pubVendorListVersion: E,
                        uspString: p,
                        gpp: g,
                        gppSid: _,
                      };
                    } else
                      (o = !0),
                        t.logMessage(
                          "info",
                          "CMP: Received error response retrieving GDPR consent from GUCE",
                        );
                    for (; r.length; ) r.shift()(e, i);
                  });
              }
            },
          };
        })(),
        g = function (e, i) {
          if (
            !e ||
            !(function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : window,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : location,
                i = e.forceYahooCmpTcf,
                r = "dmi" === t.getMetaTagContent("conf:cjs:consent-flow"),
                o = !!E.getCookieValue("_ebd"),
                s = !!n.hostname.match(/techcrunch\.com/),
                a = !!n.hostname.match(/aol\.com/),
                c = !!n.pathname.match(/^\/products(\/|$)/);
              return !i && (r || (o && (s || (a && c))));
            })()
          ) {
            var r = new (0, n(4178).CmpApi)(14, 2, !0),
              o = !i || "C" === i.charAt(0);
            void 0 !== e && o
              ? e
                ? r.update(i)
                : r.update(null)
              : (r.update(null), r.disable());
          }
        },
        _ = function (e) {
          window.__tcfapi("addEventListener", 2, function (t, n) {
            (!1 !== n &&
              "tcloaded" !== t.eventStatus &&
              "useractioncomplete" !== t.eventStatus) ||
              window.__gpp("addEventListener", function (i, r) {
                var o = (i && i.pingData) || {};
                (!1 !== r &&
                  "error" !== o.cmpStatus &&
                  "ready" !== o.signalStatus) ||
                  window.__uspapi("getUSPData", 1, function (i, s) {
                    e(
                      {
                        gpp: {
                          success: r,
                          raw: {
                            gppString: o.gppString,
                            applicableSections:
                              o.applicableSections.join(",") || "-1",
                          },
                          expanded: o,
                        },
                        tcf: {
                          success: n,
                          raw: {
                            tcString: t.tcString,
                            gdprApplies: t.gdprApplies,
                          },
                          expanded: t,
                        },
                        usp: {
                          success: s,
                          raw: { uspString: i.uspString },
                          expanded: i,
                        },
                      },
                      n && r && s,
                    );
                  });
              });
          });
        },
        S = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "DBAA",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "-1",
            i = new (0, n(9877).CmpApi)(14, 3, { getAllPrivacyData: _ });
          i.setGppString(e),
            i.setApplicableSections(t.split(",").map(Number)),
            i.setSupportedAPIs([
              "5:tcfcav1",
              "7:usnatv1",
              "8:uscav1",
              "9:usvav1",
              "10:uscov1",
              "11:usutv1",
              "12:usctv1",
            ]),
            i.setCmpStatus("loaded"),
            i.setSignalStatus("ready");
        },
        h = function (e) {
          var t = e.uspString,
            n = e.gpp,
            i = e.gppSid,
            r = e.consentString,
            o = e.gdprApplies,
            s = (window.__uspapi && window.__uspapi()) || [];
          for (
            window.__uspapi = function (e, s, a) {
              a &&
                ("getUSPData" === e
                  ? a(
                      {
                        version: 1,
                        uspString: t,
                        isOathFirstParty: !0,
                        gpp: n,
                        gppSid: i,
                        tcString: r,
                        gdprApplies: o,
                      },
                      !!t,
                    )
                  : "getDoNotSell" === e &&
                    a(
                      { doNotSell: !t || "Y" === t[2], isOathFirstParty: !0 },
                      !!t,
                    ));
            };
            s.length;

          )
            try {
              window.__uspapi.apply(null, s.shift());
            } catch (e) {}
        },
        f = !1;
      !(function (e, t) {
        if (!window.document.documentMode && (!f || t)) {
          f = !0;
          var n = function () {
              p.getConsentData(function (e, t) {
                (e = e || {}),
                  t && E.setCachedData(e),
                  g(e.gdprApplies, e.consentString),
                  S(e.gpp, e.gppSid),
                  h(e);
              });
            },
            i = E.getCachedData();
          !1 === i.gdprApplies || i.consentString
            ? (g(i.gdprApplies, i.consentString), S(i.gpp, i.gppSid), h(i))
            : n(),
            setInterval(n, 216e5);
        }
      })(window);
    })();
})();
