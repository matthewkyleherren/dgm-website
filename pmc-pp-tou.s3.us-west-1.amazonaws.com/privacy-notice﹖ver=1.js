!(function () {
  "use strict";
  const e = {
    pmc: {
      default: {
        arbitrationURL:
          "https://pmc.com/terms-of-use#arbitration-clause-and-class-waiver",
        classActionWaiverURL:
          "https://pmc.com/terms-of-use#arbitration-clause-and-class-waiver",
        date: "",
        privacyPolicyURL: "https://pmc.com/privacy-policy",
        termsOfUseURL: "https://pmc.com/terms-of-use",
        text: "Our [privacy-policy] has been revised as of [date]. This policy outlines how we use your information. By using our site and products, you are agreeing to the policy.",
      },
      US: {
        date: "April 18, 2023",
        text: "Penske Media Corporation (PMC) uses first and third-party cookies, pixels, scripts and similar technologies to enable PMC and third-party service providers and partners to collect information about you and your interactions with our sites and services (including clicks, cursor movement and screen recordings). Learn more about our practices and your choices in our [privacy-policy]. By continuing to use our sites or services, you agree to our [terms-of-use] (including the class action [class-action-waiver] and [arbitration] provisions) and Privacy Policy, which have recently changed.",
      },
    },
  };
  new (class {
    constructor() {
      (this.type = this.getType()),
        (this.privacyNoticeDefinition = e[this.type]),
        (this.countryCode =
          "object" == typeof pmc_fastly_geo_data &&
          pmc_fastly_geo_data?.country),
        (this.hasCountryOverrides =
          this.countryCode &&
          "object" == typeof this.privacyNoticeDefinition[this.countryCode]),
        (this.privacyNoticeDefinition = {
          ...this.privacyNoticeDefinition.default,
          ...(this.hasCountryOverrides
            ? this.privacyNoticeDefinition[this.countryCode]
            : {}),
        }),
        (this.cookieName =
          "pmc-tou-pp" +
          (this.hasCountryOverrides ? `--${this.countryCode}` : "")),
        (this.domObserver = null),
        (this.noticeSelector = "pmc-pp-tou--notice"),
        (this.shifted = []);
    }
    getType() {
      return "pmc";
    }
    setCookie(e, t) {
      const i = new Date();
      i.setTime(i.getTime() + 31536e6),
        (document.cookie =
          e +
          "=" +
          encodeURIComponent(t) +
          ";expires=" +
          i.toUTCString() +
          ";path=/");
    }
    getCookie(e) {
      const t = document.cookie.split(";");
      e += "=";
      for (let i = 0; i < t.length; i++) {
        let o = t[i].trim();
        if (0 === o.indexOf(e))
          return decodeURIComponent(o.substring(e.length, o.length));
      }
      return "";
    }
    hasOneTrustCookieGroupConsent(e) {
      const t = new URLSearchParams(this.getCookie("OptanonConsent"))
        .get("groups")
        ?.split(",");
      if (!Boolean(t)) return !1;
      for (let i of t)
        if (((i = i.split(":")), e === i[0])) return Boolean(parseInt(i[1]));
      return !1;
    }
    hasOneTrustFunctionalCookieConsent() {
      return this.hasOneTrustCookieGroupConsent("C0003");
    }
    close() {
      this.domObserver && this.domObserver.disconnect();
      const e = document.getElementById(this.noticeSelector);
      e.parentNode.removeChild(e),
        this.hasOneTrustFunctionalCookieConsent() &&
          this.setCookie(this.cookieName, this.privacyNoticeDefinition.date),
        "undefined" != typeof ga &&
          ga("send", "event", "global-privacy-banner", "close-button", "click"),
        "undefined" != typeof gtag &&
          gtag("event", "category-action", {
            eventCategory: "global-privacy-banner",
            eventAction: "close-button",
            eventLabel: "click",
          }),
        this.shifted.forEach((e) => {
          e.style.bottom = 0;
        });
    }
    getText() {
      const {
        date: e,
        termsOfUseURL: t,
        privacyPolicyURL: i,
        classActionWaiverURL: o,
        arbitrationURL: n,
      } = this.privacyNoticeDefinition;
      let s = this.privacyNoticeDefinition.text;
      for (const [r, c] of Object.entries({
        date: e,
        "terms-of-use": `<a href="${t}" target="_blank">Terms of Use</a>`,
        "privacy-policy": `<a href="${i}" target="_blank">Privacy Policy</a>`,
        "class-action-waiver": `<a href="${o}" target="_blank">waiver</a>`,
        arbitration: `<a href="${n}" target="_blank">arbitration</a>`,
      }))
        s = s.replace(`[${r}]`, c);
      return s;
    }
    render() {
      var e;
      const t =
        null !== (e = window?.skipBannerRequirements) && void 0 !== e && e;
      if (!this.privacyNoticeDefinition.date && !t) return;
      if (
        document.cookie &&
        this.getCookie(this.cookieName) === this.privacyNoticeDefinition.date
      )
        return;
      const i = document.createElement("link");
      i.setAttribute("rel", "stylesheet"),
        i.setAttribute("type", "text/css"),
        i.setAttribute(
          "href",
          document.currentScript.src.replace(".js", ".css"),
        ),
        document.getElementsByTagName("head")[0].appendChild(i);
      const o = document.createElement("span"),
        n = document.createElement("div"),
        s = document.createElement("div"),
        r = document.createElement("div"),
        c = document.createElement("div");
      o.classList.add("pmc-pp-tou--notice-close-btn"),
        o.setAttribute("role", "button"),
        o.setAttribute("tabindex", "0"),
        (o.innerHTML =
          '<span class="pmc-pp-tou--screen-reader-text">Close privacy/terms of use policy</span><svg xmlns="http://www.w3.org/2000/svg" width="14.092" height="14.092" viewBox="0 0 14.092 14.092"><path fill="currentColor" fill-rule="evenodd" d="M0 1.319 1.319 0l5.718 5.718L12.772 0l1.321 1.319-5.735 5.718 5.735 5.735-1.321 1.321-5.735-5.735-5.718 5.735L0 12.774l5.718-5.735Z" /></svg>'),
        n.classList.add("pmc-pp-tou--notice-text"),
        (n.innerHTML = this.getText()),
        s.classList.add("pmc-pp-tou--notice-heading"),
        (s.innerHTML = "Your Privacy Rights"),
        r.classList.add("pmc-pp-tou--notice-header"),
        r.appendChild(s),
        r.appendChild(o),
        (c.id = this.noticeSelector),
        c.classList.add("pmc-pp-tou--notice"),
        c.appendChild(r),
        c.appendChild(n),
        document.body.appendChild(c),
        o.addEventListener("click", () => this.close()),
        o.addEventListener("keydown", (e) => {
          (" " !== e.key && "Enter" !== e.key) || this.close();
        }),
        setTimeout(() => {
          this.shiftOverlappingElements(),
            (this.domObserver = new MutationObserver(
              this.shiftOverlappingElements.bind(this),
            )),
            this.domObserver.observe(document, { childList: !0, subtree: !0 });
        }, 1e3);
    }
    shiftOverlappingElements() {
      let e;
      const t = document.getElementById(this.noticeSelector);
      if (!t) return;
      const i = t.offsetHeight + 20,
        o = document.body.getElementsByTagName("*");
      for (let t = 0; t < o.length; t++)
        if (
          ((e = window.getComputedStyle(o[t], null)),
          "fixed" === e.getPropertyValue("position") &&
            "0px" === e.getPropertyValue("bottom"))
        ) {
          if (o[t].id === this.noticeSelector) continue;
          (o[t].style.bottom = i + "px"), this.shifted.push(o[t]);
        }
    }
  })().render();
})();
