(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [713],
  {
    51770: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function ({
          html: e,
          height: t = null,
          width: n = null,
          children: o,
          dataNtpc: a = "",
        }) {
          return (
            (0, i.useEffect)(() => {
              a &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: `next-third-parties-${a}` },
                });
            }, [a]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                o,
                e
                  ? (0, r.jsx)("div", {
                      style: {
                        height: null != t ? `${t}px` : "auto",
                        width: null != n ? `${n}px` : "auto",
                      },
                      "data-ntpc": a,
                      dangerouslySetInnerHTML: { __html: e },
                    })
                  : null,
              ],
            })
          );
        });
      let r = n(57437),
        i = n(2265);
    },
    58325: function (e, t, n) {
      "use strict";
      let r;
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: n,
            dataLayerName: i = "dataLayer",
            nonce: c,
          } = e;
          return (
            void 0 === r && (r = i),
            (0, a.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(s.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: `
          window['${i}'] = window['${i}'] || [];
          function gtag(){window['${i}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${n ? ",{ 'debug_mode': true }" : ""});`,
                  },
                  nonce: c,
                }),
                (0, o.jsx)(s.default, {
                  id: "_next-ga",
                  src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                  nonce: c,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function (...e) {
          if (void 0 === r) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[r]
            ? window[r].push(arguments)
            : console.warn(
                `@next/third-parties: GA dataLayer ${r} does not exist`
              );
        });
      let o = n(57437),
        a = n(2265),
        s = i(n(48475));
    },
    66927: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: r = "dataLayer",
            auth: c,
            preview: u,
            dataLayer: l,
            nonce: f,
          } = e;
          s = r;
          let h = "dataLayer" !== r ? `&l=${r}` : "",
            d = c ? `&gtm_auth=${c}` : "",
            p = u ? `&gtm_preview=${u}&gtm_cookies_win=x` : "";
          return (
            (0, o.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(a.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${l ? `w[l].push(${JSON.stringify(l)})` : ""}
      })(window,'${r}');`,
                  },
                  nonce: f,
                }),
                (0, i.jsx)(a.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: `${n}?id=${t}${h}${d}${p}`,
                }),
              ],
            })
          );
        });
      let i = n(57437),
        o = n(2265),
        a = r(n(48475)),
        s = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let n = t || s;
        (window[n] = window[n] || []), window[n].push(e);
      };
    },
    28729: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function i(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, r, o, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new i(r, o || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (e = this._events))
            t.call(e, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(e))
            : i;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = Array(o); i < o; i++)
            a[i] = r[i].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, i, o, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            u,
            l = this._events[s],
            f = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), f)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, r), !0;
              case 4:
                return l.fn.call(l.context, t, r, i), !0;
              case 5:
                return l.fn.call(l.context, t, r, i, o), !0;
              case 6:
                return l.fn.call(l.context, t, r, i, o, a), !0;
            }
            for (u = 1, c = Array(f - 1); u < f; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            var h,
              d = l.length;
            for (u = 0; u < d; u++)
              switch (
                (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), f)
              ) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, t);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, t, r);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, t, r, i);
                  break;
                default:
                  if (!c)
                    for (h = 1, c = Array(f - 1); h < f; h++)
                      c[h - 1] = arguments[h];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, i) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return a(this, o), this;
          var s = this._events[o];
          if (s.fn)
            s.fn !== t ||
              (i && !s.once) ||
              (r && s.context !== r) ||
              a(this, o);
          else {
            for (var c = 0, u = [], l = s.length; c < l; c++)
              (s[c].fn !== t ||
                (i && !s[c].once) ||
                (r && s[c].context !== r)) &&
                u.push(s[c]);
            u.length
              ? (this._events[o] = 1 === u.length ? u[0] : u)
              : a(this, o);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    12956: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(82139);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    66406: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(82139),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    25250: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      let r = n(21024)._(n(2265)),
        i = n(14542),
        o = n(17434),
        a = n(11030),
        s = n(36874),
        c = n(12956),
        u = n(46993),
        l = n(38599),
        f = n(45291),
        h = n(66406),
        d = n(45786),
        p = n(91414),
        y = new Set();
      function m(e, t, n, r, i, a) {
        if (a || (0, o.isLocalURL)(t)) {
          if (!r.bypassPrefetchedCheck) {
            let i =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (y.has(i)) return;
            y.add(i);
          }
          Promise.resolve(a ? e.prefetch(t, i) : e.prefetch(t, n, r)).catch(
            (e) => {}
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      let g = r.default.forwardRef(function (e, t) {
        let n, a;
        let {
          href: y,
          as: g,
          children: b,
          prefetch: w = null,
          passHref: A,
          replace: C,
          shallow: E,
          scroll: k,
          locale: O,
          onClick: I,
          onMouseEnter: S,
          onTouchStart: D,
          legacyBehavior: N = !1,
          ...T
        } = e;
        (n = b),
          N &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = r.default.createElement("a", null, n));
        let x = r.default.useContext(u.RouterContext),
          R = r.default.useContext(l.AppRouterContext),
          P = null != x ? x : R,
          _ = !x,
          Q = !1 !== w,
          M = null === w ? p.PrefetchKind.AUTO : p.PrefetchKind.FULL,
          { href: F, as: j } = r.default.useMemo(() => {
            if (!x) {
              let e = v(y);
              return { href: e, as: g ? v(g) : e };
            }
            let [e, t] = (0, i.resolveHref)(x, y, !0);
            return { href: e, as: g ? (0, i.resolveHref)(x, g) : t || e };
          }, [x, y, g]),
          L = r.default.useRef(F),
          q = r.default.useRef(j);
        N && (a = r.default.Children.only(n));
        let B = N ? a && "object" == typeof a && a.ref : t,
          [U, K, V] = (0, f.useIntersection)({ rootMargin: "200px" }),
          G = r.default.useCallback(
            (e) => {
              (q.current !== j || L.current !== F) &&
                (V(), (q.current = j), (L.current = F)),
                U(e),
                B &&
                  ("function" == typeof B
                    ? B(e)
                    : "object" == typeof B && (B.current = e));
            },
            [j, B, F, V, U]
          );
        r.default.useEffect(() => {
          P && K && Q && m(P, F, j, { locale: O }, { kind: M }, _);
        }, [j, F, K, O, Q, null == x ? void 0 : x.locale, P, _, M]);
        let z = {
          ref: G,
          onClick(e) {
            N || "function" != typeof I || I(e),
              N &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(e),
              P &&
                !e.defaultPrevented &&
                (function (e, t, n, i, a, s, c, u, l) {
                  let { nodeName: f } = e.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!l && !(0, o.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    let e = null == c || c;
                    "beforePopState" in t
                      ? t[a ? "replace" : "push"](n, i, {
                          shallow: s,
                          locale: u,
                          scroll: e,
                        })
                      : t[a ? "replace" : "push"](i || n, { scroll: e });
                  };
                  l ? r.default.startTransition(h) : h();
                })(e, P, F, j, C, E, k, O, _);
          },
          onMouseEnter(e) {
            N || "function" != typeof S || S(e),
              N &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              P &&
                (Q || !_) &&
                m(
                  P,
                  F,
                  j,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: M },
                  _
                );
          },
          onTouchStart(e) {
            N || "function" != typeof D || D(e),
              N &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              P &&
                (Q || !_) &&
                m(
                  P,
                  F,
                  j,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: M },
                  _
                );
          },
        };
        if ((0, s.isAbsoluteUrl)(j)) z.href = j;
        else if (!N || A || ("a" === a.type && !("href" in a.props))) {
          let e = void 0 !== O ? O : null == x ? void 0 : x.locale,
            t =
              (null == x ? void 0 : x.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                j,
                e,
                null == x ? void 0 : x.locales,
                null == x ? void 0 : x.domainLocales
              );
          z.href =
            t ||
            (0, d.addBasePath)(
              (0, c.addLocale)(j, e, null == x ? void 0 : x.defaultLocale)
            );
        }
        return N
          ? r.default.cloneElement(a, z)
          : r.default.createElement("a", { ...T, ...z }, n);
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    14542: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let r = n(95770),
        i = n(11030),
        o = n(24544),
        a = n(36874),
        s = n(82139),
        c = n(17434),
        u = n(22360),
        l = n(96735);
      function f(e, t, n) {
        let f;
        let h = "string" == typeof t ? t : (0, i.formatWithValidation)(t),
          d = h.match(/^[a-zA-Z]{1,}:\/\//),
          p = d ? h.slice(d[0].length) : h;
        if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              h +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, a.normalizeRepeatedSlashes)(p);
          h = (d ? d[0] : "") + t;
        }
        if (!(0, c.isLocalURL)(h)) return n ? [h] : h;
        try {
          f = new URL(h.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          f = new URL("/", "http://n");
        }
        try {
          let e = new URL(h, f);
          e.pathname = (0, s.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: a, params: s } = (0, l.interpolateAs)(
                e.pathname,
                e.pathname,
                n
              );
            a &&
              (t = (0, i.formatWithValidation)({
                pathname: a,
                hash: e.hash,
                query: (0, o.omit)(n, s),
              }));
          }
          let a =
            e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [a, t || a] : a;
        } catch (e) {
          return n ? [h] : h;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    45291: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = n(2265),
        i = n(52185),
        o = "function" == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function c(e) {
        let { rootRef: t, rootMargin: n, disabled: c } = e,
          u = c || !o,
          [l, f] = (0, r.useState)(!1),
          h = (0, r.useRef)(null),
          d = (0, r.useCallback)((e) => {
            h.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (o) {
              if (u || l) return;
              let e = h.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: i,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = s.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = a.get(r))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: i,
                      }),
                      s.push(n),
                      a.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    o.set(e, t),
                    i.observe(e),
                    function () {
                      if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                        i.disconnect(), a.delete(r);
                        let e = s.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!l) {
              let e = (0, i.requestIdleCallback)(() => f(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [u, n, t, l, h.current]),
          [
            d,
            l,
            (0, r.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    22202: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function i(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    11030: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return o;
          },
          urlObjectKeys: function () {
            return a;
          },
          formatWithValidation: function () {
            return s;
          },
        });
      let r = n(68533)._(n(95770)),
        i = /https?|ftp|gopher|file/;
      function o(e) {
        let { auth: t, hostname: n } = e,
          o = e.protocol || "",
          a = e.pathname || "",
          s = e.hash || "",
          c = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : n &&
              ((u = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (u += ":" + e.port)),
          c &&
            "object" == typeof c &&
            (c = String(r.urlQueryToSearchParams(c)));
        let l = e.search || (c && "?" + c) || "";
        return (
          o && !o.endsWith(":") && (o += ":"),
          e.slashes || ((!o || i.test(o)) && !1 !== u)
            ? ((u = "//" + (u || "")), a && "/" !== a[0] && (a = "/" + a))
            : u || (u = ""),
          s && "#" !== s[0] && (s = "#" + s),
          l && "?" !== l[0] && (l = "?" + l),
          "" +
            o +
            u +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (l = l.replace("#", "%23")) +
            s
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function s(e) {
        return o(e);
      }
    },
    22360: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return i.isDynamicRoute;
          },
        });
      let r = n(97409),
        i = n(11305);
    },
    96735: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(2395),
        i = n(19935);
      function o(e, t, n) {
        let o = "",
          a = (0, i.getRouteRegex)(e),
          s = a.groups,
          c = (t !== e ? (0, r.getRouteMatcher)(a)(t) : "") || n;
        o = e;
        let u = Object.keys(s);
        return (
          u.every((e) => {
            let t = c[e] || "",
              { repeat: n, optional: r } = s[e],
              i = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (i = (t ? "" : "/") + "[" + i + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in c) &&
                (o =
                  o.replace(
                    i,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (o = ""),
          { params: u, result: o }
        );
      }
    },
    11305: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(84507),
        i = /\/\[[^/]+?\](?=\/|$)/;
      function o(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          i.test(e)
        );
      }
    },
    17434: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(36874),
        i = n(87379);
      function o(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, i.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    24544: function (e, t) {
      "use strict";
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    95770: function (e, t) {
      "use strict";
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
              ? t[n].push(e)
              : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, i] = e;
            Array.isArray(i)
              ? i.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(i));
          }),
          t
        );
      }
      function o(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
          assign: function () {
            return o;
          },
        });
    },
    2395: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(36874);
      function i(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let i = t.exec(e);
          if (!i) return !1;
          let o = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            a = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = i[t.pos];
              void 0 !== r &&
                (a[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => o(e))
                  : t.repeat
                  ? [o(r)]
                  : o(r));
            }),
            a
          );
        };
      }
    },
    19935: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getRouteRegex: function () {
            return c;
          },
          getNamedRouteRegex: function () {
            return f;
          },
          getNamedMiddlewareRegex: function () {
            return h;
          },
        });
      let r = n(84507),
        i = n(22202),
        o = n(95868);
      function a(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function s(e) {
        let t = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          s = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && o) {
                let { key: e, optional: r, repeat: c } = a(o[1]);
                return (
                  (n[e] = { pos: s++, repeat: c, optional: r }),
                  "/" + (0, i.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!o) return "/" + (0, i.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = a(o[1]);
                return (
                  (n[e] = { pos: s++, repeat: t, optional: r }),
                  t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function c(e) {
        let { parameterizedRoute: t, groups: n } = s(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function u(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: o,
            keyPrefix: s,
          } = e,
          { key: c, optional: u, repeat: l } = a(r),
          f = c.replace(/\W/g, "");
        s && (f = "" + s + f);
        let h = !1;
        (0 === f.length || f.length > 30) && (h = !0),
          isNaN(parseInt(f.slice(0, 1))) || (h = !0),
          h && (f = n()),
          s ? (o[f] = "" + s + c) : (o[f] = c);
        let d = t ? (0, i.escapeStringRegexp)(t) : "";
        return l
          ? u
            ? "(?:/" + d + "(?<" + f + ">.+?))?"
            : "/" + d + "(?<" + f + ">.+?)"
          : "/" + d + "(?<" + f + ">[^/]+?)";
      }
      function l(e, t) {
        let n;
        let a = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          s =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          c = {};
        return {
          namedParameterizedRoute: a
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && o) {
                let [n] = e.split(o[0]);
                return u({
                  getSafeRouteKey: s,
                  interceptionMarker: n,
                  segment: o[1],
                  routeKeys: c,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return o
                ? u({
                    getSafeRouteKey: s,
                    segment: o[1],
                    routeKeys: c,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, i.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: c,
        };
      }
      function f(e, t) {
        let n = l(e, t);
        return {
          ...c(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function h(e, t) {
        let { parameterizedRoute: n } = s(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: i } = l(e, !1);
        return { namedRegex: "^" + i + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    97409: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let i = e[0];
          if (i.startsWith("[") && i.endsWith("]")) {
            let n = i.slice(1, -1),
              a = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (a = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function o(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "')."
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === i.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (a) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                o(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (i = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                o(this.restSlugName, n), (this.restSlugName = n), (i = "[...]");
              }
            } else {
              if (a)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              o(this.slugName, n), (this.slugName = n), (i = "[]");
            }
          }
          this.children.has(i) || this.children.set(i, new n()),
            this.children.get(i)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    36874: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return s;
          },
          getDisplayName: function () {
            return c;
          },
          isResSent: function () {
            return u;
          },
          normalizeRepeatedSlashes: function () {
            return l;
          },
          loadGetInitialProps: function () {
            return f;
          },
          SP: function () {
            return h;
          },
          ST: function () {
            return d;
          },
          DecodeError: function () {
            return p;
          },
          NormalizeError: function () {
            return y;
          },
          PageNotFoundError: function () {
            return m;
          },
          MissingStaticPage: function () {
            return v;
          },
          MiddlewareNotFoundError: function () {
            return g;
          },
          stringifyError: function () {
            return b;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return n || ((n = !0), (t = e(...i))), t;
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (e) => i.test(e);
      function a() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function s() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function c(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function l(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function f(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await f(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && u(n)) return r;
        if (!r)
          throw Error(
            '"' +
              c(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          );
        return r;
      }
      let h = "undefined" != typeof performance,
        d =
          h &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class p extends Error {}
      class y extends Error {}
      class m extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class g extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    61396: function (e, t, n) {
      e.exports = n(25250);
    },
    33018: function (e, t, n) {
      "use strict";
      var r = n(61289);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, o, a) {
            if (a !== r) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    74275: function (e, t, n) {
      e.exports = n(33018)();
    },
    61289: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    70130: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var r,
        i,
        o = n(2265),
        a = n(74275),
        s = n.n(a),
        c = [
          "sitekey",
          "onChange",
          "theme",
          "type",
          "tabindex",
          "onExpired",
          "onErrored",
          "size",
          "stoken",
          "grecaptcha",
          "badge",
          "hl",
          "isolated",
        ];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e, t) {
        return (f = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      var h = (function (e) {
        function t() {
          var t;
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(
              l(t)
            )),
            (t.handleErrored = t.handleErrored.bind(l(t))),
            (t.handleChange = t.handleChange.bind(l(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(l(t))),
            t
          );
        }
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          f(t, e);
        var n = t.prototype;
        return (
          (n.getCaptchaFunction = function (e) {
            return this.props.grecaptcha
              ? this.props.grecaptcha.enterprise
                ? this.props.grecaptcha.enterprise[e]
                : this.props.grecaptcha[e]
              : null;
          }),
          (n.getValue = function () {
            var e = this.getCaptchaFunction("getResponse");
            return e && void 0 !== this._widgetId ? e(this._widgetId) : null;
          }),
          (n.getWidgetId = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this._widgetId
              : null;
          }),
          (n.execute = function () {
            var e = this.getCaptchaFunction("execute");
            if (e && void 0 !== this._widgetId) return e(this._widgetId);
            this._executeRequested = !0;
          }),
          (n.executeAsync = function () {
            var e = this;
            return new Promise(function (t, n) {
              (e.executionResolve = t), (e.executionReject = n), e.execute();
            });
          }),
          (n.reset = function () {
            var e = this.getCaptchaFunction("reset");
            e && void 0 !== this._widgetId && e(this._widgetId);
          }),
          (n.forceReset = function () {
            var e = this.getCaptchaFunction("reset");
            e && e();
          }),
          (n.handleExpired = function () {
            this.props.onExpired
              ? this.props.onExpired()
              : this.handleChange(null);
          }),
          (n.handleErrored = function () {
            this.props.onErrored && this.props.onErrored(),
              this.executionReject &&
                (this.executionReject(),
                delete this.executionResolve,
                delete this.executionReject);
          }),
          (n.handleChange = function (e) {
            this.props.onChange && this.props.onChange(e),
              this.executionResolve &&
                (this.executionResolve(e),
                delete this.executionReject,
                delete this.executionResolve);
          }),
          (n.explicitRender = function () {
            var e = this.getCaptchaFunction("render");
            if (e && void 0 === this._widgetId) {
              var t = document.createElement("div");
              (this._widgetId = e(t, {
                sitekey: this.props.sitekey,
                callback: this.handleChange,
                theme: this.props.theme,
                type: this.props.type,
                tabindex: this.props.tabindex,
                "expired-callback": this.handleExpired,
                "error-callback": this.handleErrored,
                size: this.props.size,
                stoken: this.props.stoken,
                hl: this.props.hl,
                badge: this.props.badge,
                isolated: this.props.isolated,
              })),
                this.captcha.appendChild(t);
            }
            this._executeRequested &&
              this.props.grecaptcha &&
              void 0 !== this._widgetId &&
              ((this._executeRequested = !1), this.execute());
          }),
          (n.componentDidMount = function () {
            this.explicitRender();
          }),
          (n.componentDidUpdate = function () {
            this.explicitRender();
          }),
          (n.handleRecaptchaRef = function (e) {
            this.captcha = e;
          }),
          (n.render = function () {
            var e = this.props,
              t =
                (e.sitekey,
                e.onChange,
                e.theme,
                e.type,
                e.tabindex,
                e.onExpired,
                e.onErrored,
                e.size,
                e.stoken,
                e.grecaptcha,
                e.badge,
                e.hl,
                e.isolated,
                (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    i = {},
                    o = Object.keys(e);
                  for (r = 0; r < o.length; r++)
                    (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                  return i;
                })(e, c));
            return o.createElement(
              "div",
              u({}, t, { ref: this.handleRecaptchaRef })
            );
          }),
          t
        );
      })(o.Component);
      (h.displayName = "ReCAPTCHA"),
        (h.propTypes = {
          sitekey: s().string.isRequired,
          onChange: s().func,
          grecaptcha: s().object,
          theme: s().oneOf(["dark", "light"]),
          type: s().oneOf(["image", "audio"]),
          tabindex: s().number,
          onExpired: s().func,
          onErrored: s().func,
          size: s().oneOf(["compact", "normal", "invisible"]),
          stoken: s().string,
          hl: s().string,
          badge: s().oneOf(["bottomright", "bottomleft", "inline"]),
          isolated: s().bool,
        }),
        (h.defaultProps = {
          onChange: function () {},
          theme: "light",
          type: "image",
          tabindex: 0,
          size: "normal",
          badge: "bottomright",
        });
      var d = n(55487),
        p = n.n(d);
      function y() {
        return (y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var m = {},
        v = 0,
        g = "onloadcallback";
      function b() {
        return ("undefined" != typeof window && window.recaptchaOptions) || {};
      }
      var w = ((r = function () {
        var e = b(),
          t = e.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
        return e.enterprise
          ? "https://" +
              t +
              "/recaptcha/enterprise.js?onload=" +
              g +
              "&render=explicit"
          : "https://" +
              t +
              "/recaptcha/api.js?onload=" +
              g +
              "&render=explicit";
      }),
      (i =
        (i = {
          callbackName: g,
          globalName: "grecaptcha",
          attributes: b().nonce ? { nonce: b().nonce } : {},
        }) || {}),
      function (e) {
        var t = e.displayName || e.name || "Component",
          n = (function (t) {
            function n(e, n) {
              var r;
              return (
                ((r = t.call(this, e, n) || this).state = {}),
                (r.__scriptURL = ""),
                r
              );
            }
            (n.prototype = Object.create(t.prototype)),
              (n.prototype.constructor = n),
              (n.__proto__ = t);
            var a = n.prototype;
            return (
              (a.asyncScriptLoaderGetScriptLoaderID = function () {
                return (
                  this.__scriptLoaderID ||
                    (this.__scriptLoaderID = "async-script-loader-" + v++),
                  this.__scriptLoaderID
                );
              }),
              (a.setupScriptURL = function () {
                return (
                  (this.__scriptURL = "function" == typeof r ? r() : r),
                  this.__scriptURL
                );
              }),
              (a.asyncScriptLoaderHandleLoad = function (e) {
                var t = this;
                this.setState(e, function () {
                  return (
                    t.props.asyncScriptOnLoad &&
                    t.props.asyncScriptOnLoad(t.state)
                  );
                });
              }),
              (a.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                var e = m[this.__scriptURL];
                if (!e || !e.loaded) throw Error("Script is not loaded.");
                for (var t in e.observers) e.observers[t](e);
                delete window[i.callbackName];
              }),
              (a.componentDidMount = function () {
                var e = this,
                  t = this.setupScriptURL(),
                  n = this.asyncScriptLoaderGetScriptLoaderID(),
                  r = i,
                  o = r.globalName,
                  a = r.callbackName,
                  s = r.scriptId;
                if (
                  (o &&
                    void 0 !== window[o] &&
                    (m[t] = { loaded: !0, observers: {} }),
                  m[t])
                ) {
                  var c = m[t];
                  if (c && (c.loaded || c.errored)) {
                    this.asyncScriptLoaderHandleLoad(c);
                    return;
                  }
                  c.observers[n] = function (t) {
                    return e.asyncScriptLoaderHandleLoad(t);
                  };
                  return;
                }
                var u = {};
                (u[n] = function (t) {
                  return e.asyncScriptLoaderHandleLoad(t);
                }),
                  (m[t] = { loaded: !1, observers: u });
                var l = document.createElement("script");
                for (var f in ((l.src = t), (l.async = !0), i.attributes))
                  l.setAttribute(f, i.attributes[f]);
                s && (l.id = s);
                var h = function (e) {
                  if (m[t]) {
                    var n = m[t].observers;
                    for (var r in n) e(n[r]) && delete n[r];
                  }
                };
                a &&
                  "undefined" != typeof window &&
                  (window[a] = function () {
                    return e.asyncScriptLoaderTriggerOnScriptLoaded();
                  }),
                  (l.onload = function () {
                    var e = m[t];
                    e &&
                      ((e.loaded = !0),
                      h(function (t) {
                        return !a && (t(e), !0);
                      }));
                  }),
                  (l.onerror = function () {
                    var e = m[t];
                    e &&
                      ((e.errored = !0),
                      h(function (t) {
                        return t(e), !0;
                      }));
                  }),
                  document.body.appendChild(l);
              }),
              (a.componentWillUnmount = function () {
                var e = this.__scriptURL;
                if (!0 === i.removeOnUnmount)
                  for (
                    var t = document.getElementsByTagName("script"), n = 0;
                    n < t.length;
                    n += 1
                  )
                    t[n].src.indexOf(e) > -1 &&
                      t[n].parentNode &&
                      t[n].parentNode.removeChild(t[n]);
                var r = m[e];
                r &&
                  (delete r.observers[
                    this.asyncScriptLoaderGetScriptLoaderID()
                  ],
                  !0 === i.removeOnUnmount && delete m[e]);
              }),
              (a.render = function () {
                var t = i.globalName,
                  n = this.props,
                  r = (n.asyncScriptOnLoad, n.forwardedRef),
                  a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      i = {},
                      o = Object.keys(e);
                    for (r = 0; r < o.length; r++)
                      t.indexOf((n = o[r])) >= 0 || (i[n] = e[n]);
                    return i;
                  })(n, ["asyncScriptOnLoad", "forwardedRef"]);
                return (
                  t &&
                    "undefined" != typeof window &&
                    (a[t] = void 0 !== window[t] ? window[t] : void 0),
                  (a.ref = r),
                  (0, o.createElement)(e, a)
                );
              }),
              n
            );
          })(o.Component),
          a = (0, o.forwardRef)(function (e, t) {
            return (0, o.createElement)(n, y({}, e, { forwardedRef: t }));
          });
        return (
          (a.displayName = "AsyncScriptLoader(" + t + ")"),
          (a.propTypes = { asyncScriptOnLoad: s().func }),
          p()(a, e)
        );
      })(h);
    },
    87637: function (e, t, n) {
      "use strict";
      (e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0),
        (e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
          void 0),
        (e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
          void 0),
        Object.assign(e.exports, n(2265));
    },
    34655: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return eI;
        },
      });
      var r,
        i,
        o = n(31974),
        a = n(79930),
        s = n(4722),
        c = n(36510),
        u = n(86275),
        l = n(6431),
        f = n(38681),
        h = n(93592),
        d = n(72074),
        p = n(89660),
        y = n(3987),
        m = (function () {
          function e() {
            (this.assumeImmutableResults = !1),
              (this.getFragmentDoc = (0, s.re)(u.Yk, {
                max: l.Q["cache.fragmentQueryDocuments"] || 1e3,
                cache: d.k,
              }));
          }
          return (
            (e.prototype.batch = function (e) {
              var t,
                n = this,
                r =
                  "string" == typeof e.optimistic
                    ? e.optimistic
                    : !1 === e.optimistic
                    ? null
                    : void 0;
              return (
                this.performTransaction(function () {
                  return (t = e.update(n));
                }, r),
                t
              );
            }),
            (e.prototype.recordOptimisticTransaction = function (e, t) {
              this.performTransaction(e, t);
            }),
            (e.prototype.transformDocument = function (e) {
              return e;
            }),
            (e.prototype.transformForLink = function (e) {
              return e;
            }),
            (e.prototype.identify = function (e) {}),
            (e.prototype.gc = function () {
              return [];
            }),
            (e.prototype.modify = function (e) {
              return !1;
            }),
            (e.prototype.readQuery = function (e, t) {
              return (
                void 0 === t && (t = !!e.optimistic),
                this.read(
                  (0, o.pi)((0, o.pi)({}, e), {
                    rootId: e.id || "ROOT_QUERY",
                    optimistic: t,
                  })
                )
              );
            }),
            (e.prototype.watchFragment = function (e) {
              var t,
                n = this,
                r = e.fragment,
                i = e.fragmentName,
                a = e.from,
                s = e.optimistic,
                c = (0, o._T)(e, [
                  "fragment",
                  "fragmentName",
                  "from",
                  "optimistic",
                ]),
                u = this.getFragmentDoc(r, i),
                l = (0, o.pi)((0, o.pi)({}, c), {
                  returnPartialData: !0,
                  id:
                    void 0 === a || "string" == typeof a ? a : this.identify(a),
                  query: u,
                  optimistic: void 0 === s || s,
                });
              return new f.y(function (e) {
                return n.watch(
                  (0, o.pi)((0, o.pi)({}, l), {
                    immediate: !0,
                    callback: function (n) {
                      if (
                        !(
                          t &&
                          (0, y.W)(
                            u,
                            { data: null == t ? void 0 : t.result },
                            { data: n.result }
                          )
                        )
                      ) {
                        var r = { data: n.result, complete: !!n.complete };
                        n.missing &&
                          (r.missing = (0, h.bw)(
                            n.missing.map(function (e) {
                              return e.missing;
                            })
                          )),
                          (t = n),
                          e.next(r);
                      }
                    },
                  })
                );
              });
            }),
            (e.prototype.readFragment = function (e, t) {
              return (
                void 0 === t && (t = !!e.optimistic),
                this.read(
                  (0, o.pi)((0, o.pi)({}, e), {
                    query: this.getFragmentDoc(e.fragment, e.fragmentName),
                    rootId: e.id,
                    optimistic: t,
                  })
                )
              );
            }),
            (e.prototype.writeQuery = function (e) {
              var t = e.id,
                n = e.data,
                r = (0, o._T)(e, ["id", "data"]);
              return this.write(
                Object.assign(r, { dataId: t || "ROOT_QUERY", result: n })
              );
            }),
            (e.prototype.writeFragment = function (e) {
              var t = e.id,
                n = e.data,
                r = e.fragment,
                i = e.fragmentName,
                a = (0, o._T)(e, ["id", "data", "fragment", "fragmentName"]);
              return this.write(
                Object.assign(a, {
                  query: this.getFragmentDoc(r, i),
                  dataId: t,
                  result: n,
                })
              );
            }),
            (e.prototype.updateQuery = function (e, t) {
              return this.batch({
                update: function (n) {
                  var r = n.readQuery(e),
                    i = t(r);
                  return null == i
                    ? r
                    : (n.writeQuery((0, o.pi)((0, o.pi)({}, e), { data: i })),
                      i);
                },
              });
            }),
            (e.prototype.updateFragment = function (e, t) {
              return this.batch({
                update: function (n) {
                  var r = n.readFragment(e),
                    i = t(r);
                  return null == i
                    ? r
                    : (n.writeFragment(
                        (0, o.pi)((0, o.pi)({}, e), { data: i })
                      ),
                      i);
                },
              });
            }),
            e
          );
        })();
      !1 !== globalThis.__DEV__ && (m.prototype.getMemoryInternals = p.Kb);
      var v = (function (e) {
          function t(n, r, i, o) {
            var a,
              s = e.call(this, n) || this;
            if (
              ((s.message = n),
              (s.path = r),
              (s.query = i),
              (s.variables = o),
              Array.isArray(s.path))
            ) {
              s.missing = s.message;
              for (var c = s.path.length - 1; c >= 0; --c)
                s.missing = (((a = {})[s.path[c]] = s.missing), a);
            } else s.missing = s.path;
            return (s.__proto__ = t.prototype), s;
          }
          return (0, o.ZT)(t, e), t;
        })(Error),
        g = n(65647),
        b = n(90535),
        w = n(97440),
        A = n(55873),
        C = n(44339),
        E = n(55459),
        k = n(38191),
        O = n(18865),
        I = n(11739),
        S = n(85812),
        D = n(88550);
      function N(e) {
        if (!1 !== globalThis.__DEV__) {
          var t;
          (t = new Set([e])).forEach(function (e) {
            (0, D.s)(e) &&
              (function (e) {
                if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e))
                  try {
                    Object.freeze(e);
                  } catch (e) {
                    if (e instanceof TypeError) return null;
                    throw e;
                  }
                return e;
              })(e) === e &&
              Object.getOwnPropertyNames(e).forEach(function (n) {
                (0, D.s)(e[n]) && t.add(e[n]);
              });
          });
        }
        return e;
      }
      var T = n(12913),
        x = n(28607),
        R = Object.prototype.hasOwnProperty;
      function P(e) {
        return null == e;
      }
      function _(e, t) {
        var n = e.__typename,
          r = e.id,
          i = e._id;
        if (
          "string" == typeof n &&
          (t && (t.keyObject = P(r) ? (P(i) ? void 0 : { _id: i }) : { id: r }),
          P(r) && !P(i) && (r = i),
          !P(r))
        )
          return ""
            .concat(n, ":")
            .concat(
              "number" == typeof r || "string" == typeof r
                ? r
                : JSON.stringify(r)
            );
      }
      var Q = {
        dataIdFromObject: _,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1,
      };
      function M(e) {
        var t = e.canonizeResults;
        return void 0 === t ? Q.canonizeResults : t;
      }
      var F = /^[_a-z][_0-9a-z]*/i;
      function j(e) {
        var t = e.match(F);
        return t ? t[0] : e;
      }
      function L(e) {
        return (0, D.s)(e) && !(0, C.Yk)(e) && !(0, x.k)(e);
      }
      function q(e, t) {
        var n = (0, u.F)((0, I.kU)(e));
        return {
          fragmentMap: n,
          lookupFragment: function (e) {
            var r = n[e];
            return !r && t && (r = t.lookup(e)), r || null;
          },
        };
      }
      var B = Object.create(null),
        U = function () {
          return B;
        },
        K = Object.create(null),
        V = (function () {
          function e(e, t) {
            var n = this;
            (this.policies = e),
              (this.group = t),
              (this.data = Object.create(null)),
              (this.rootIds = Object.create(null)),
              (this.refs = Object.create(null)),
              (this.getFieldValue = function (e, t) {
                return N((0, C.Yk)(e) ? n.get(e.__ref, t) : e && e[t]);
              }),
              (this.canRead = function (e) {
                return (0, C.Yk)(e) ? n.has(e.__ref) : "object" == typeof e;
              }),
              (this.toReference = function (e, t) {
                if ("string" == typeof e) return (0, C.kQ)(e);
                if ((0, C.Yk)(e)) return e;
                var r = n.policies.identify(e)[0];
                if (r) {
                  var i = (0, C.kQ)(r);
                  return t && n.merge(r, e), i;
                }
              });
          }
          return (
            (e.prototype.toObject = function () {
              return (0, o.pi)({}, this.data);
            }),
            (e.prototype.has = function (e) {
              return void 0 !== this.lookup(e, !0);
            }),
            (e.prototype.get = function (e, t) {
              if ((this.group.depend(e, t), R.call(this.data, e))) {
                var n = this.data[e];
                if (n && R.call(n, t)) return n[t];
              }
              return "__typename" === t &&
                R.call(this.policies.rootTypenamesById, e)
                ? this.policies.rootTypenamesById[e]
                : this instanceof W
                ? this.parent.get(e, t)
                : void 0;
            }),
            (e.prototype.lookup = function (e, t) {
              return (t && this.group.depend(e, "__exists"),
              R.call(this.data, e))
                ? this.data[e]
                : this instanceof W
                ? this.parent.lookup(e, t)
                : this.policies.rootTypenamesById[e]
                ? Object.create(null)
                : void 0;
            }),
            (e.prototype.merge = function (e, t) {
              var n,
                r = this;
              (0, C.Yk)(e) && (e = e.__ref), (0, C.Yk)(t) && (t = t.__ref);
              var i = "string" == typeof e ? this.lookup((n = e)) : e,
                o = "string" == typeof t ? this.lookup((n = t)) : t;
              if (o) {
                (0, a.kG)("string" == typeof n, 1);
                var s = new h.w0(H).merge(i, o);
                if (
                  ((this.data[n] = s),
                  s !== i && (delete this.refs[n], this.group.caching))
                ) {
                  var c = Object.create(null);
                  i || (c.__exists = 1),
                    Object.keys(o).forEach(function (e) {
                      if (!i || i[e] !== s[e]) {
                        c[e] = 1;
                        var t = j(e);
                        t === e ||
                          r.policies.hasKeyArgs(s.__typename, t) ||
                          (c[t] = 1),
                          void 0 !== s[e] || r instanceof W || delete s[e];
                      }
                    }),
                    c.__typename &&
                      !(i && i.__typename) &&
                      this.policies.rootTypenamesById[n] === s.__typename &&
                      delete c.__typename,
                    Object.keys(c).forEach(function (e) {
                      return r.group.dirty(n, e);
                    });
                }
              }
            }),
            (e.prototype.modify = function (e, t) {
              var n = this,
                r = this.lookup(e);
              if (r) {
                var i = Object.create(null),
                  s = !1,
                  c = !0,
                  u = {
                    DELETE: B,
                    INVALIDATE: K,
                    isReference: C.Yk,
                    toReference: this.toReference,
                    canRead: this.canRead,
                    readField: function (t, r) {
                      return n.policies.readField(
                        "string" == typeof t
                          ? { fieldName: t, from: r || (0, C.kQ)(e) }
                          : t,
                        { store: n }
                      );
                    },
                  };
                if (
                  (Object.keys(r).forEach(function (l) {
                    var f = j(l),
                      h = r[l];
                    if (void 0 !== h) {
                      var d = "function" == typeof t ? t : t[l] || t[f];
                      if (d) {
                        var p =
                          d === U
                            ? B
                            : d(
                                N(h),
                                (0, o.pi)((0, o.pi)({}, u), {
                                  fieldName: f,
                                  storeFieldName: l,
                                  storage: n.getStorage(e, l),
                                })
                              );
                        if (p === K) n.group.dirty(e, l);
                        else if (
                          (p === B && (p = void 0),
                          p !== h &&
                            ((i[l] = p),
                            (s = !0),
                            (h = p),
                            !1 !== globalThis.__DEV__))
                        ) {
                          var y = function (e) {
                            if (void 0 === n.lookup(e.__ref))
                              return (
                                !1 !== globalThis.__DEV__ && a.kG.warn(2, e), !0
                              );
                          };
                          if ((0, C.Yk)(p)) y(p);
                          else if (Array.isArray(p))
                            for (
                              var m = !1, v = void 0, g = 0, b = p;
                              g < b.length;
                              g++
                            ) {
                              var w = b[g];
                              if ((0, C.Yk)(w)) {
                                if (((m = !0), y(w))) break;
                              } else
                                "object" == typeof w &&
                                  w &&
                                  n.policies.identify(w)[0] &&
                                  (v = w);
                              if (m && void 0 !== v) {
                                !1 !== globalThis.__DEV__ && a.kG.warn(3, v);
                                break;
                              }
                            }
                        }
                      }
                      void 0 !== h && (c = !1);
                    }
                  }),
                  s)
                )
                  return (
                    this.merge(e, i),
                    c &&
                      (this instanceof W
                        ? (this.data[e] = void 0)
                        : delete this.data[e],
                      this.group.dirty(e, "__exists")),
                    !0
                  );
              }
              return !1;
            }),
            (e.prototype.delete = function (e, t, n) {
              var r,
                i = this.lookup(e);
              if (i) {
                var o = this.getFieldValue(i, "__typename"),
                  a =
                    t && n
                      ? this.policies.getStoreFieldName({
                          typename: o,
                          fieldName: t,
                          args: n,
                        })
                      : t;
                return this.modify(e, a ? (((r = {})[a] = U), r) : U);
              }
              return !1;
            }),
            (e.prototype.evict = function (e, t) {
              var n = !1;
              return (
                e.id &&
                  (R.call(this.data, e.id) &&
                    (n = this.delete(e.id, e.fieldName, e.args)),
                  this instanceof W &&
                    this !== t &&
                    (n = this.parent.evict(e, t) || n),
                  (e.fieldName || n) &&
                    this.group.dirty(e.id, e.fieldName || "__exists")),
                n
              );
            }),
            (e.prototype.clear = function () {
              this.replace(null);
            }),
            (e.prototype.extract = function () {
              var e = this,
                t = this.toObject(),
                n = [];
              return (
                this.getRootIdSet().forEach(function (t) {
                  R.call(e.policies.rootTypenamesById, t) || n.push(t);
                }),
                n.length && (t.__META = { extraRootIds: n.sort() }),
                t
              );
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              if (
                (Object.keys(this.data).forEach(function (n) {
                  (e && R.call(e, n)) || t.delete(n);
                }),
                e)
              ) {
                var n = e.__META,
                  r = (0, o._T)(e, ["__META"]);
                Object.keys(r).forEach(function (e) {
                  t.merge(e, r[e]);
                }),
                  n && n.extraRootIds.forEach(this.retain, this);
              }
            }),
            (e.prototype.retain = function (e) {
              return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
            }),
            (e.prototype.release = function (e) {
              if (this.rootIds[e] > 0) {
                var t = --this.rootIds[e];
                return t || delete this.rootIds[e], t;
              }
              return 0;
            }),
            (e.prototype.getRootIdSet = function (e) {
              return (
                void 0 === e && (e = new Set()),
                Object.keys(this.rootIds).forEach(e.add, e),
                this instanceof W
                  ? this.parent.getRootIdSet(e)
                  : Object.keys(this.policies.rootTypenamesById).forEach(
                      e.add,
                      e
                    ),
                e
              );
            }),
            (e.prototype.gc = function () {
              var e = this,
                t = this.getRootIdSet(),
                n = this.toObject();
              t.forEach(function (r) {
                R.call(n, r) &&
                  (Object.keys(e.findChildRefIds(r)).forEach(t.add, t),
                  delete n[r]);
              });
              var r = Object.keys(n);
              if (r.length) {
                for (var i = this; i instanceof W; ) i = i.parent;
                r.forEach(function (e) {
                  return i.delete(e);
                });
              }
              return r;
            }),
            (e.prototype.findChildRefIds = function (e) {
              if (!R.call(this.refs, e)) {
                var t = (this.refs[e] = Object.create(null)),
                  n = this.data[e];
                if (!n) return t;
                var r = new Set([n]);
                r.forEach(function (e) {
                  (0, C.Yk)(e) && (t[e.__ref] = !0),
                    (0, D.s)(e) &&
                      Object.keys(e).forEach(function (t) {
                        var n = e[t];
                        (0, D.s)(n) && r.add(n);
                      });
                });
              }
              return this.refs[e];
            }),
            (e.prototype.makeCacheKey = function () {
              return this.group.keyMaker.lookupArray(arguments);
            }),
            e
          );
        })(),
        G = (function () {
          function e(e, t) {
            void 0 === t && (t = null),
              (this.caching = e),
              (this.parent = t),
              (this.d = null),
              this.resetCaching();
          }
          return (
            (e.prototype.resetCaching = function () {
              (this.d = this.caching ? (0, s.dP)() : null),
                (this.keyMaker = new T.B(k.mr));
            }),
            (e.prototype.depend = function (e, t) {
              if (this.d) {
                this.d(t + "#" + e);
                var n = j(t);
                n !== t && this.d(n + "#" + e),
                  this.parent && this.parent.depend(e, t);
              }
            }),
            (e.prototype.dirty = function (e, t) {
              this.d &&
                this.d.dirty(
                  t + "#" + e,
                  "__exists" === t ? "forget" : "setDirty"
                );
            }),
            e
          );
        })();
      function z(e, t) {
        Y(e) && e.group.depend(t, "__exists");
      }
      (i = (function (e) {
        function t(t) {
          var n = t.policies,
            r = t.resultCaching,
            i = t.seed,
            o = e.call(this, n, new G(void 0 === r || r)) || this;
          return (
            (o.stump = new J(o)),
            (o.storageTrie = new T.B(k.mr)),
            i && o.replace(i),
            o
          );
        }
        return (
          (0, o.ZT)(t, e),
          (t.prototype.addLayer = function (e, t) {
            return this.stump.addLayer(e, t);
          }),
          (t.prototype.removeLayer = function () {
            return this;
          }),
          (t.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
          }),
          t
        );
      })((r = V || (V = {})))),
        (r.Root = i);
      var W = (function (e) {
          function t(t, n, r, i) {
            var o = e.call(this, n.policies, i) || this;
            return (
              (o.id = t), (o.parent = n), (o.replay = r), (o.group = i), r(o), o
            );
          }
          return (
            (0, o.ZT)(t, e),
            (t.prototype.addLayer = function (e, n) {
              return new t(e, this, n, this.group);
            }),
            (t.prototype.removeLayer = function (e) {
              var t = this,
                n = this.parent.removeLayer(e);
              return e === this.id
                ? (this.group.caching &&
                    Object.keys(this.data).forEach(function (e) {
                      var r = t.data[e],
                        i = n.lookup(e);
                      i
                        ? r
                          ? r !== i &&
                            Object.keys(r).forEach(function (n) {
                              (0, c.D)(r[n], i[n]) || t.group.dirty(e, n);
                            })
                          : (t.group.dirty(e, "__exists"),
                            Object.keys(i).forEach(function (n) {
                              t.group.dirty(e, n);
                            }))
                        : t.delete(e);
                    }),
                  n)
                : n === this.parent
                ? this
                : n.addLayer(this.id, this.replay);
            }),
            (t.prototype.toObject = function () {
              return (0, o.pi)(
                (0, o.pi)({}, this.parent.toObject()),
                this.data
              );
            }),
            (t.prototype.findChildRefIds = function (t) {
              var n = this.parent.findChildRefIds(t);
              return R.call(this.data, t)
                ? (0, o.pi)(
                    (0, o.pi)({}, n),
                    e.prototype.findChildRefIds.call(this, t)
                  )
                : n;
            }),
            (t.prototype.getStorage = function () {
              for (var e = this.parent; e.parent; ) e = e.parent;
              return e.getStorage.apply(e, arguments);
            }),
            t
          );
        })(V),
        J = (function (e) {
          function t(t) {
            return (
              e.call(
                this,
                "EntityStore.Stump",
                t,
                function () {},
                new G(t.group.caching, t.group)
              ) || this
            );
          }
          return (
            (0, o.ZT)(t, e),
            (t.prototype.removeLayer = function () {
              return this;
            }),
            (t.prototype.merge = function (e, t) {
              return this.parent.merge(e, t);
            }),
            t
          );
        })(W);
      function H(e, t, n) {
        var r = e[n],
          i = t[n];
        return (0, c.D)(r, i) ? r : i;
      }
      function Y(e) {
        return !!(e instanceof V && e.group.caching);
      }
      var Z = (function () {
        function e() {
          (this.known = new (k.sy ? WeakSet : Set)()),
            (this.pool = new T.B(k.mr)),
            (this.passes = new WeakMap()),
            (this.keysByJSON = new Map()),
            (this.empty = this.admit({}));
        }
        return (
          (e.prototype.isKnown = function (e) {
            return (0, D.s)(e) && this.known.has(e);
          }),
          (e.prototype.pass = function (e) {
            if ((0, D.s)(e)) {
              var t = (0, D.s)(e)
                ? (0, x.k)(e)
                  ? e.slice(0)
                  : (0, o.pi)({ __proto__: Object.getPrototypeOf(e) }, e)
                : e;
              return this.passes.set(t, e), t;
            }
            return e;
          }),
          (e.prototype.admit = function (e) {
            var t = this;
            if ((0, D.s)(e)) {
              var n = this.passes.get(e);
              if (n) return n;
              switch (Object.getPrototypeOf(e)) {
                case Array.prototype:
                  if (this.known.has(e)) break;
                  var r = e.map(this.admit, this),
                    i = this.pool.lookupArray(r);
                  return (
                    i.array ||
                      (this.known.add((i.array = r)),
                      !1 !== globalThis.__DEV__ && Object.freeze(r)),
                    i.array
                  );
                case null:
                case Object.prototype:
                  if (this.known.has(e)) break;
                  var o = Object.getPrototypeOf(e),
                    a = [o],
                    s = this.sortedKeys(e);
                  a.push(s.json);
                  var c = a.length;
                  s.sorted.forEach(function (n) {
                    a.push(t.admit(e[n]));
                  });
                  var i = this.pool.lookupArray(a);
                  if (!i.object) {
                    var u = (i.object = Object.create(o));
                    this.known.add(u),
                      s.sorted.forEach(function (e, t) {
                        u[e] = a[c + t];
                      }),
                      !1 !== globalThis.__DEV__ && Object.freeze(u);
                  }
                  return i.object;
              }
            }
            return e;
          }),
          (e.prototype.sortedKeys = function (e) {
            var t = Object.keys(e),
              n = this.pool.lookupArray(t);
            if (!n.keys) {
              t.sort();
              var r = JSON.stringify(t);
              (n.keys = this.keysByJSON.get(r)) ||
                this.keysByJSON.set(r, (n.keys = { sorted: t, json: r }));
            }
            return n.keys;
          }),
          e
        );
      })();
      function X(e) {
        return [
          e.selectionSet,
          e.objectOrReference,
          e.context,
          e.context.canonizeResults,
        ];
      }
      var $ = (function () {
          function e(e) {
            var t = this;
            (this.knownResults = new (k.mr ? WeakMap : Map)()),
              (this.config = (0, O.o)(e, {
                addTypename: !1 !== e.addTypename,
                canonizeResults: M(e),
              })),
              (this.canon = e.canon || new Z()),
              (this.executeSelectionSet = (0, s.re)(
                function (e) {
                  var n,
                    r = e.context.canonizeResults,
                    i = X(e);
                  i[3] = !r;
                  var a = (n = t.executeSelectionSet).peek.apply(n, i);
                  return a
                    ? r
                      ? (0, o.pi)((0, o.pi)({}, a), {
                          result: t.canon.admit(a.result),
                        })
                      : a
                    : (z(e.context.store, e.enclosingRef.__ref),
                      t.execSelectionSetImpl(e));
                },
                {
                  max:
                    this.config.resultCacheMaxSize ||
                    l.Q["inMemoryCache.executeSelectionSet"] ||
                    5e4,
                  keyArgs: X,
                  makeCacheKey: function (e, t, n, r) {
                    if (Y(n.store))
                      return n.store.makeCacheKey(
                        e,
                        (0, C.Yk)(t) ? t.__ref : t,
                        n.varString,
                        r
                      );
                  },
                }
              )),
              (this.executeSubSelectedArray = (0, s.re)(
                function (e) {
                  return (
                    z(e.context.store, e.enclosingRef.__ref),
                    t.execSubSelectedArrayImpl(e)
                  );
                },
                {
                  max:
                    this.config.resultCacheMaxSize ||
                    l.Q["inMemoryCache.executeSubSelectedArray"] ||
                    1e4,
                  makeCacheKey: function (e) {
                    var t = e.field,
                      n = e.array,
                      r = e.context;
                    if (Y(r.store))
                      return r.store.makeCacheKey(t, n, r.varString);
                  },
                }
              ));
          }
          return (
            (e.prototype.resetCanon = function () {
              this.canon = new Z();
            }),
            (e.prototype.diffQueryAgainstStore = function (e) {
              var t,
                n = e.store,
                r = e.query,
                i = e.rootId,
                a = e.variables,
                s = e.returnPartialData,
                c = e.canonizeResults,
                u = void 0 === c ? this.config.canonizeResults : c,
                l = this.config.cache.policies;
              a = (0, o.pi)((0, o.pi)({}, (0, I.O4)((0, I.iW)(r))), a);
              var f = (0, C.kQ)(void 0 === i ? "ROOT_QUERY" : i),
                h = this.executeSelectionSet({
                  selectionSet: (0, I.p$)(r).selectionSet,
                  objectOrReference: f,
                  enclosingRef: f,
                  context: (0, o.pi)(
                    {
                      store: n,
                      query: r,
                      policies: l,
                      variables: a,
                      varString: (0, w.B)(a),
                      canonizeResults: u,
                    },
                    q(r, this.config.fragments)
                  ),
                });
              if (
                h.missing &&
                ((t = [
                  new v(
                    (function (e) {
                      try {
                        JSON.stringify(e, function (e, t) {
                          if ("string" == typeof t) throw t;
                          return t;
                        });
                      } catch (e) {
                        return e;
                      }
                    })(h.missing),
                    h.missing,
                    r,
                    a
                  ),
                ]),
                !(void 0 === s || s))
              )
                throw t[0];
              return { result: h.result, complete: !t, missing: t };
            }),
            (e.prototype.isFresh = function (e, t, n, r) {
              if (Y(r.store) && this.knownResults.get(e) === n) {
                var i = this.executeSelectionSet.peek(
                  n,
                  t,
                  r,
                  this.canon.isKnown(e)
                );
                if (i && e === i.result) return !0;
              }
              return !1;
            }),
            (e.prototype.execSelectionSetImpl = function (e) {
              var t,
                n = this,
                r = e.selectionSet,
                i = e.objectOrReference,
                o = e.enclosingRef,
                s = e.context;
              if (
                (0, C.Yk)(i) &&
                !s.policies.rootTypenamesById[i.__ref] &&
                !s.store.has(i.__ref)
              )
                return {
                  result: this.canon.empty,
                  missing: "Dangling reference to missing ".concat(
                    i.__ref,
                    " object"
                  ),
                };
              var c = s.variables,
                l = s.policies,
                f = s.store.getFieldValue(i, "__typename"),
                d = [],
                p = new h.w0();
              function y(e, n) {
                var r;
                return (
                  e.missing && (t = p.merge(t, (((r = {})[n] = e.missing), r))),
                  e.result
                );
              }
              this.config.addTypename &&
                "string" == typeof f &&
                !l.rootIdsByTypename[f] &&
                d.push({ __typename: f });
              var m = new Set(r.selections);
              m.forEach(function (e) {
                var r, h;
                if ((0, S.LZ)(e, c)) {
                  if ((0, C.My)(e)) {
                    var v = l.readField(
                        {
                          fieldName: e.name.value,
                          field: e,
                          variables: s.variables,
                          from: i,
                        },
                        s
                      ),
                      g = (0, C.u2)(e);
                    void 0 === v
                      ? b.Gw.added(e) ||
                        (t = p.merge(
                          t,
                          (((r = {})[g] = "Can't find field '"
                            .concat(e.name.value, "' on ")
                            .concat(
                              (0, C.Yk)(i)
                                ? i.__ref + " object"
                                : "object " + JSON.stringify(i, null, 2)
                            )),
                          r)
                        ))
                      : (0, x.k)(v)
                      ? v.length > 0 &&
                        (v = y(
                          n.executeSubSelectedArray({
                            field: e,
                            array: v,
                            enclosingRef: o,
                            context: s,
                          }),
                          g
                        ))
                      : e.selectionSet
                      ? null != v &&
                        (v = y(
                          n.executeSelectionSet({
                            selectionSet: e.selectionSet,
                            objectOrReference: v,
                            enclosingRef: (0, C.Yk)(v) ? v : o,
                            context: s,
                          }),
                          g
                        ))
                      : s.canonizeResults && (v = n.canon.pass(v)),
                      void 0 !== v && d.push((((h = {})[g] = v), h));
                  } else {
                    var w = (0, u.hi)(e, s.lookupFragment);
                    if (!w && e.kind === E.h.FRAGMENT_SPREAD)
                      throw (0, a._K)(9, e.name.value);
                    w &&
                      l.fragmentMatches(w, f) &&
                      w.selectionSet.selections.forEach(m.add, m);
                  }
                }
              });
              var v = { result: (0, h.bw)(d), missing: t },
                g = s.canonizeResults ? this.canon.admit(v) : N(v);
              return g.result && this.knownResults.set(g.result, r), g;
            }),
            (e.prototype.execSubSelectedArrayImpl = function (e) {
              var t,
                n = this,
                r = e.field,
                i = e.array,
                o = e.enclosingRef,
                s = e.context,
                c = new h.w0();
              function u(e, n) {
                var r;
                return (
                  e.missing && (t = c.merge(t, (((r = {})[n] = e.missing), r))),
                  e.result
                );
              }
              return (
                r.selectionSet && (i = i.filter(s.store.canRead)),
                (i = i.map(function (e, t) {
                  return null === e
                    ? null
                    : (0, x.k)(e)
                    ? u(
                        n.executeSubSelectedArray({
                          field: r,
                          array: e,
                          enclosingRef: o,
                          context: s,
                        }),
                        t
                      )
                    : r.selectionSet
                    ? u(
                        n.executeSelectionSet({
                          selectionSet: r.selectionSet,
                          objectOrReference: e,
                          enclosingRef: (0, C.Yk)(e) ? e : o,
                          context: s,
                        }),
                        t
                      )
                    : (!1 !== globalThis.__DEV__ &&
                        (function (e, t, n) {
                          if (!t.selectionSet) {
                            var r = new Set([n]);
                            r.forEach(function (n) {
                              (0, D.s)(n) &&
                                ((0, a.kG)(
                                  !(0, C.Yk)(n),
                                  10,
                                  (0, C.Yk)(n)
                                    ? e.get(n.__ref, "__typename")
                                    : n && n.__typename,
                                  t.name.value
                                ),
                                Object.values(n).forEach(r.add, r));
                            });
                          }
                        })(s.store, r, e),
                      e);
                })),
                {
                  result: s.canonizeResults ? this.canon.admit(i) : i,
                  missing: t,
                }
              );
            }),
            e
          );
        })(),
        ee = n(62566),
        et = n(91286),
        en = n(86048),
        er = Object.create(null);
      function ei(e) {
        var t = JSON.stringify(e);
        return er[t] || (er[t] = Object.create(null));
      }
      function eo(e) {
        var t = ei(e);
        return (
          t.keyFieldsFn ||
          (t.keyFieldsFn = function (t, n) {
            var r = function (e, t) {
                return n.readField(t, e);
              },
              i = (n.keyObject = es(e, function (e) {
                var i = eu(n.storeObject, e, r);
                return (
                  void 0 === i &&
                    t !== n.storeObject &&
                    R.call(t, e[0]) &&
                    (i = eu(t, e, ec)),
                  (0, a.kG)(void 0 !== i, 4, e.join("."), t),
                  i
                );
              }));
            return "".concat(n.typename, ":").concat(JSON.stringify(i));
          })
        );
      }
      function ea(e) {
        var t = ei(e);
        return (
          t.keyArgsFn ||
          (t.keyArgsFn = function (t, n) {
            var r = n.field,
              i = n.variables,
              o = n.fieldName,
              a = JSON.stringify(
                es(e, function (e) {
                  var n = e[0],
                    o = n.charAt(0);
                  if ("@" === o) {
                    if (r && (0, x.O)(r.directives)) {
                      var a = n.slice(1),
                        s = r.directives.find(function (e) {
                          return e.name.value === a;
                        }),
                        c = s && (0, C.NC)(s, i);
                      return c && eu(c, e.slice(1));
                    }
                    return;
                  }
                  if ("$" === o) {
                    var u = n.slice(1);
                    if (i && R.call(i, u)) {
                      var l = e.slice(0);
                      return (l[0] = u), eu(i, l);
                    }
                    return;
                  }
                  if (t) return eu(t, e);
                })
              );
            return (t || "{}" !== a) && (o += ":" + a), o;
          })
        );
      }
      function es(e, t) {
        var n = new h.w0();
        return (function e(t) {
          var n = ei(t);
          if (!n.paths) {
            var r = (n.paths = []),
              i = [];
            t.forEach(function (n, o) {
              (0, x.k)(n)
                ? (e(n).forEach(function (e) {
                    return r.push(i.concat(e));
                  }),
                  (i.length = 0))
                : (i.push(n),
                  (0, x.k)(t[o + 1]) || (r.push(i.slice(0)), (i.length = 0)));
            });
          }
          return n.paths;
        })(e).reduce(function (e, r) {
          var i,
            o = t(r);
          if (void 0 !== o) {
            for (var a = r.length - 1; a >= 0; --a)
              ((i = {})[r[a]] = o), (o = i);
            e = n.merge(e, o);
          }
          return e;
        }, Object.create(null));
      }
      function ec(e, t) {
        return e[t];
      }
      function eu(e, t, n) {
        return (
          (n = n || ec),
          (function e(t) {
            return (0, D.s)(t)
              ? (0, x.k)(t)
                ? t.map(e)
                : es(Object.keys(t).sort(), function (e) {
                    return eu(t, e);
                  })
              : t;
          })(
            t.reduce(function e(t, r) {
              return (0, x.k)(t)
                ? t.map(function (t) {
                    return e(t, r);
                  })
                : t && n(t, r);
            }, e)
          )
        );
      }
      function el(e) {
        return void 0 !== e.args
          ? e.args
          : e.field
          ? (0, C.NC)(e.field, e.variables)
          : null;
      }
      var ef = function () {},
        eh = function (e, t) {
          return t.fieldName;
        },
        ed = function (e, t, n) {
          return (0, n.mergeObjects)(e, t);
        },
        ep = function (e, t) {
          return t;
        },
        ey = (function () {
          function e(e) {
            (this.config = e),
              (this.typePolicies = Object.create(null)),
              (this.toBeAdded = Object.create(null)),
              (this.supertypeMap = new Map()),
              (this.fuzzySubtypes = new Map()),
              (this.rootIdsByTypename = Object.create(null)),
              (this.rootTypenamesById = Object.create(null)),
              (this.usingPossibleTypes = !1),
              (this.config = (0, o.pi)({ dataIdFromObject: _ }, e)),
              (this.cache = this.config.cache),
              this.setRootTypename("Query"),
              this.setRootTypename("Mutation"),
              this.setRootTypename("Subscription"),
              e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
              e.typePolicies && this.addTypePolicies(e.typePolicies);
          }
          return (
            (e.prototype.identify = function (e, t) {
              var n,
                r,
                i = this,
                a =
                  (t &&
                    (t.typename ||
                      (null === (n = t.storeObject) || void 0 === n
                        ? void 0
                        : n.__typename))) ||
                  e.__typename;
              if (a === this.rootTypenamesById.ROOT_QUERY)
                return ["ROOT_QUERY"];
              for (
                var s = (t && t.storeObject) || e,
                  c = (0, o.pi)((0, o.pi)({}, t), {
                    typename: a,
                    storeObject: s,
                    readField:
                      (t && t.readField) ||
                      function () {
                        var e = ev(arguments, s);
                        return i.readField(e, {
                          store: i.cache.data,
                          variables: e.variables,
                        });
                      },
                  }),
                  u = a && this.getTypePolicy(a),
                  l = (u && u.keyFn) || this.config.dataIdFromObject;
                l;

              ) {
                var f = l((0, o.pi)((0, o.pi)({}, e), s), c);
                if ((0, x.k)(f)) l = eo(f);
                else {
                  r = f;
                  break;
                }
              }
              return (
                (r = r ? String(r) : void 0),
                c.keyObject ? [r, c.keyObject] : [r]
              );
            }),
            (e.prototype.addTypePolicies = function (e) {
              var t = this;
              Object.keys(e).forEach(function (n) {
                var r = e[n],
                  i = r.queryType,
                  a = r.mutationType,
                  s = r.subscriptionType,
                  c = (0, o._T)(r, [
                    "queryType",
                    "mutationType",
                    "subscriptionType",
                  ]);
                i && t.setRootTypename("Query", n),
                  a && t.setRootTypename("Mutation", n),
                  s && t.setRootTypename("Subscription", n),
                  R.call(t.toBeAdded, n)
                    ? t.toBeAdded[n].push(c)
                    : (t.toBeAdded[n] = [c]);
              });
            }),
            (e.prototype.updateTypePolicy = function (e, t) {
              var n = this,
                r = this.getTypePolicy(e),
                i = t.keyFields,
                o = t.fields;
              function a(e, t) {
                e.merge =
                  "function" == typeof t
                    ? t
                    : !0 === t
                    ? ed
                    : !1 === t
                    ? ep
                    : e.merge;
              }
              a(r, t.merge),
                (r.keyFn =
                  !1 === i
                    ? ef
                    : (0, x.k)(i)
                    ? eo(i)
                    : "function" == typeof i
                    ? i
                    : r.keyFn),
                o &&
                  Object.keys(o).forEach(function (t) {
                    var r = n.getFieldPolicy(e, t, !0),
                      i = o[t];
                    if ("function" == typeof i) r.read = i;
                    else {
                      var s = i.keyArgs,
                        c = i.read,
                        u = i.merge;
                      (r.keyFn =
                        !1 === s
                          ? eh
                          : (0, x.k)(s)
                          ? ea(s)
                          : "function" == typeof s
                          ? s
                          : r.keyFn),
                        "function" == typeof c && (r.read = c),
                        a(r, u);
                    }
                    r.read && r.merge && (r.keyFn = r.keyFn || eh);
                  });
            }),
            (e.prototype.setRootTypename = function (e, t) {
              void 0 === t && (t = e);
              var n = "ROOT_" + e.toUpperCase(),
                r = this.rootTypenamesById[n];
              t !== r &&
                ((0, a.kG)(!r || r === e, 5, e),
                r && delete this.rootIdsByTypename[r],
                (this.rootIdsByTypename[t] = n),
                (this.rootTypenamesById[n] = t));
            }),
            (e.prototype.addPossibleTypes = function (e) {
              var t = this;
              (this.usingPossibleTypes = !0),
                Object.keys(e).forEach(function (n) {
                  t.getSupertypeSet(n, !0),
                    e[n].forEach(function (e) {
                      t.getSupertypeSet(e, !0).add(n);
                      var r = e.match(F);
                      (r && r[0] === e) ||
                        t.fuzzySubtypes.set(e, new RegExp(e));
                    });
                });
            }),
            (e.prototype.getTypePolicy = function (e) {
              var t = this;
              if (!R.call(this.typePolicies, e)) {
                var n = (this.typePolicies[e] = Object.create(null));
                n.fields = Object.create(null);
                var r = this.supertypeMap.get(e);
                !r &&
                  this.fuzzySubtypes.size &&
                  ((r = this.getSupertypeSet(e, !0)),
                  this.fuzzySubtypes.forEach(function (n, i) {
                    if (n.test(e)) {
                      var o = t.supertypeMap.get(i);
                      o &&
                        o.forEach(function (e) {
                          return r.add(e);
                        });
                    }
                  })),
                  r &&
                    r.size &&
                    r.forEach(function (e) {
                      var r = t.getTypePolicy(e),
                        i = r.fields;
                      Object.assign(n, (0, o._T)(r, ["fields"])),
                        Object.assign(n.fields, i);
                    });
              }
              var i = this.toBeAdded[e];
              return (
                i &&
                  i.length &&
                  i.splice(0).forEach(function (n) {
                    t.updateTypePolicy(e, n);
                  }),
                this.typePolicies[e]
              );
            }),
            (e.prototype.getFieldPolicy = function (e, t, n) {
              if (e) {
                var r = this.getTypePolicy(e).fields;
                return r[t] || (n && (r[t] = Object.create(null)));
              }
            }),
            (e.prototype.getSupertypeSet = function (e, t) {
              var n = this.supertypeMap.get(e);
              return !n && t && this.supertypeMap.set(e, (n = new Set())), n;
            }),
            (e.prototype.fragmentMatches = function (e, t, n, r) {
              var i = this;
              if (!e.typeCondition) return !0;
              if (!t) return !1;
              var o = e.typeCondition.name.value;
              if (t === o) return !0;
              if (this.usingPossibleTypes && this.supertypeMap.has(o))
                for (
                  var s = this.getSupertypeSet(t, !0),
                    c = [s],
                    u = function (e) {
                      var t = i.getSupertypeSet(e, !1);
                      t && t.size && 0 > c.indexOf(t) && c.push(t);
                    },
                    l = !!(n && this.fuzzySubtypes.size),
                    f = !1,
                    h = 0;
                  h < c.length;
                  ++h
                ) {
                  var d = c[h];
                  if (d.has(o))
                    return (
                      s.has(o) ||
                        (f && !1 !== globalThis.__DEV__ && a.kG.warn(6, t, o),
                        s.add(o)),
                      !0
                    );
                  d.forEach(u),
                    l &&
                      h === c.length - 1 &&
                      (function e(t, n, r) {
                        return (
                          !!(0, D.s)(n) &&
                          ((0, x.k)(n)
                            ? n.every(function (n) {
                                return e(t, n, r);
                              })
                            : t.selections.every(function (t) {
                                if ((0, C.My)(t) && (0, S.LZ)(t, r)) {
                                  var i = (0, C.u2)(t);
                                  return (
                                    R.call(n, i) &&
                                    (!t.selectionSet ||
                                      e(t.selectionSet, n[i], r))
                                  );
                                }
                                return !0;
                              }))
                        );
                      })(e.selectionSet, n, r) &&
                      ((l = !1),
                      (f = !0),
                      this.fuzzySubtypes.forEach(function (e, n) {
                        var r = t.match(e);
                        r && r[0] === t && u(n);
                      }));
                }
              return !1;
            }),
            (e.prototype.hasKeyArgs = function (e, t) {
              var n = this.getFieldPolicy(e, t, !1);
              return !!(n && n.keyFn);
            }),
            (e.prototype.getStoreFieldName = function (e) {
              var t,
                n = e.typename,
                r = e.fieldName,
                i = this.getFieldPolicy(n, r, !1),
                o = i && i.keyFn;
              if (o && n)
                for (
                  var a = {
                      typename: n,
                      fieldName: r,
                      field: e.field || null,
                      variables: e.variables,
                    },
                    s = el(e);
                  o;

                ) {
                  var c = o(s, a);
                  if ((0, x.k)(c)) o = ea(c);
                  else {
                    t = c || r;
                    break;
                  }
                }
              return (void 0 === t &&
                (t = e.field
                  ? (0, C.vf)(e.field, e.variables)
                  : (0, C.PT)(r, el(e))),
              !1 === t)
                ? r
                : r === j(t)
                ? t
                : r + ":" + t;
            }),
            (e.prototype.readField = function (e, t) {
              var n = e.from;
              if (n && (e.field || e.fieldName)) {
                if (void 0 === e.typename) {
                  var r = t.store.getFieldValue(n, "__typename");
                  r && (e.typename = r);
                }
                var i = this.getStoreFieldName(e),
                  o = j(i),
                  a = t.store.getFieldValue(n, i),
                  s = this.getFieldPolicy(e.typename, o, !1),
                  c = s && s.read;
                if (c) {
                  var u = em(
                    this,
                    n,
                    e,
                    t,
                    t.store.getStorage((0, C.Yk)(n) ? n.__ref : n, i)
                  );
                  return en.ab.withValue(this.cache, c, [a, u]);
                }
                return a;
              }
            }),
            (e.prototype.getReadFunction = function (e, t) {
              var n = this.getFieldPolicy(e, t, !1);
              return n && n.read;
            }),
            (e.prototype.getMergeFunction = function (e, t, n) {
              var r = this.getFieldPolicy(e, t, !1),
                i = r && r.merge;
              return !i && n && (i = (r = this.getTypePolicy(n)) && r.merge), i;
            }),
            (e.prototype.runMergeFunction = function (e, t, n, r, i) {
              var o = n.field,
                a = n.typename,
                s = n.merge;
              return s === ed
                ? eg(r.store)(e, t)
                : s === ep
                ? t
                : (r.overwrite && (e = void 0),
                  s(
                    e,
                    t,
                    em(
                      this,
                      void 0,
                      {
                        typename: a,
                        fieldName: o.name.value,
                        field: o,
                        variables: r.variables,
                      },
                      r,
                      i || Object.create(null)
                    )
                  ));
            }),
            e
          );
        })();
      function em(e, t, n, r, i) {
        var o = e.getStoreFieldName(n),
          a = j(o),
          s = n.variables || r.variables,
          c = r.store,
          u = c.toReference,
          l = c.canRead;
        return {
          args: el(n),
          field: n.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: C.Yk,
          toReference: u,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function () {
            return e.readField(ev(arguments, t, s), r);
          },
          mergeObjects: eg(r.store),
        };
      }
      function ev(e, t, n) {
        var r,
          i = e[0],
          s = e[1],
          c = e.length;
        return (
          "string" == typeof i
            ? (r = { fieldName: i, from: c > 1 ? s : t })
            : ((r = (0, o.pi)({}, i)), R.call(r, "from") || (r.from = t)),
          !1 !== globalThis.__DEV__ &&
            void 0 === r.from &&
            !1 !== globalThis.__DEV__ &&
            a.kG.warn(7, (0, et.v)(Array.from(e))),
          void 0 === r.variables && (r.variables = n),
          r
        );
      }
      function eg(e) {
        return function (t, n) {
          if ((0, x.k)(t) || (0, x.k)(n)) throw (0, a._K)(8);
          if ((0, D.s)(t) && (0, D.s)(n)) {
            var r = e.getFieldValue(t, "__typename"),
              i = e.getFieldValue(n, "__typename");
            if (r && i && r !== i) return n;
            if ((0, C.Yk)(t) && L(n)) return e.merge(t.__ref, n), t;
            if (L(t) && (0, C.Yk)(n)) return e.merge(t, n.__ref), n;
            if (L(t) && L(n)) return (0, o.pi)((0, o.pi)({}, t), n);
          }
          return n;
        };
      }
      function eb(e, t, n) {
        var r = "".concat(t).concat(n),
          i = e.flavors.get(r);
        return (
          i ||
            e.flavors.set(
              r,
              (i =
                e.clientOnly === t && e.deferred === n
                  ? e
                  : (0, o.pi)((0, o.pi)({}, e), { clientOnly: t, deferred: n }))
            ),
          i
        );
      }
      var ew = (function () {
          function e(e, t, n) {
            (this.cache = e), (this.reader = t), (this.fragments = n);
          }
          return (
            (e.prototype.writeToStore = function (e, t) {
              var n = this,
                r = t.query,
                i = t.result,
                s = t.dataId,
                u = t.variables,
                l = t.overwrite,
                f = (0, I.$H)(r),
                d = new h.w0();
              u = (0, o.pi)((0, o.pi)({}, (0, I.O4)(f)), u);
              var p = (0, o.pi)(
                  (0, o.pi)(
                    {
                      store: e,
                      written: Object.create(null),
                      merge: function (e, t) {
                        return d.merge(e, t);
                      },
                      variables: u,
                      varString: (0, w.B)(u),
                    },
                    q(r, this.fragments)
                  ),
                  {
                    overwrite: !!l,
                    incomingById: new Map(),
                    clientOnly: !1,
                    deferred: !1,
                    flavors: new Map(),
                  }
                ),
                y = this.processSelectionSet({
                  result: i || Object.create(null),
                  dataId: s,
                  selectionSet: f.selectionSet,
                  mergeTree: { map: new Map() },
                  context: p,
                });
              if (!(0, C.Yk)(y)) throw (0, a._K)(11, i);
              return (
                p.incomingById.forEach(function (t, r) {
                  var i = t.storeObject,
                    s = t.mergeTree,
                    u = t.fieldNodeSet,
                    l = (0, C.kQ)(r);
                  if (s && s.map.size) {
                    var f = n.applyMerges(s, l, i, p);
                    if ((0, C.Yk)(f)) return;
                    i = f;
                  }
                  if (!1 !== globalThis.__DEV__ && !p.overwrite) {
                    var h = Object.create(null);
                    u.forEach(function (e) {
                      e.selectionSet && (h[e.name.value] = !0);
                    });
                    var d = function (e) {
                      var t = s && s.map.get(e);
                      return !!(t && t.info && t.info.merge);
                    };
                    Object.keys(i).forEach(function (e) {
                      !0 !== h[j(e)] ||
                        d(e) ||
                        (function (e, t, n, r) {
                          var i = function (e) {
                              var t = r.getFieldValue(e, n);
                              return "object" == typeof t && t;
                            },
                            s = i(e);
                          if (s) {
                            var u = i(t);
                            if (
                              !(
                                !u ||
                                (0, C.Yk)(s) ||
                                (0, c.D)(s, u) ||
                                Object.keys(s).every(function (e) {
                                  return void 0 !== r.getFieldValue(u, e);
                                })
                              )
                            ) {
                              var l =
                                  r.getFieldValue(e, "__typename") ||
                                  r.getFieldValue(t, "__typename"),
                                f = j(n),
                                h = "".concat(l, ".").concat(f);
                              if (!eO.has(h)) {
                                eO.add(h);
                                var d = [];
                                (0, x.k)(s) ||
                                  (0, x.k)(u) ||
                                  [s, u].forEach(function (e) {
                                    var t = r.getFieldValue(e, "__typename");
                                    "string" != typeof t ||
                                      d.includes(t) ||
                                      d.push(t);
                                  }),
                                  !1 !== globalThis.__DEV__ &&
                                    a.kG.warn(
                                      14,
                                      f,
                                      l,
                                      d.length
                                        ? "either ensure all objects of type " +
                                            d.join(" and ") +
                                            " have an ID or a custom merge function, or "
                                        : "",
                                      h,
                                      (0, o.pi)({}, s),
                                      (0, o.pi)({}, u)
                                    );
                              }
                            }
                          }
                        })(l, i, e, p.store);
                    });
                  }
                  e.merge(r, i);
                }),
                e.retain(y.__ref),
                y
              );
            }),
            (e.prototype.processSelectionSet = function (e) {
              var t = this,
                n = e.dataId,
                r = e.result,
                i = e.selectionSet,
                s = e.context,
                c = e.mergeTree,
                u = this.cache.policies,
                l = Object.create(null),
                f =
                  (n && u.rootTypenamesById[n]) ||
                  (0, C.qw)(r, i, s.fragmentMap) ||
                  (n && s.store.get(n, "__typename"));
              "string" == typeof f && (l.__typename = f);
              var h = function () {
                  var e = ev(arguments, l, s.variables);
                  if ((0, C.Yk)(e.from)) {
                    var t = s.incomingById.get(e.from.__ref);
                    if (t) {
                      var n = u.readField(
                        (0, o.pi)((0, o.pi)({}, e), { from: t.storeObject }),
                        s
                      );
                      if (void 0 !== n) return n;
                    }
                  }
                  return u.readField(e, s);
                },
                d = new Set();
              this.flattenFields(i, r, s, f).forEach(function (e, n) {
                var i,
                  o = r[(0, C.u2)(n)];
                if ((d.add(n), void 0 !== o)) {
                  var s = u.getStoreFieldName({
                      typename: f,
                      fieldName: n.name.value,
                      field: n,
                      variables: e.variables,
                    }),
                    p = eC(c, s),
                    y = t.processFieldValue(
                      o,
                      n,
                      n.selectionSet ? eb(e, !1, !1) : e,
                      p
                    ),
                    m = void 0;
                  n.selectionSet &&
                    ((0, C.Yk)(y) || L(y)) &&
                    (m = h("__typename", y));
                  var v = u.getMergeFunction(f, n.name.value, m);
                  v ? (p.info = { field: n, typename: f, merge: v }) : ek(c, s),
                    (l = e.merge(l, (((i = {})[s] = y), i)));
                } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || b.Gw.added(n) || u.getReadFunction(f, n.name.value) || !1 === globalThis.__DEV__ || a.kG.error(12, (0, C.u2)(n), r);
              });
              try {
                var p = u.identify(r, {
                    typename: f,
                    selectionSet: i,
                    fragmentMap: s.fragmentMap,
                    storeObject: l,
                    readField: h,
                  }),
                  y = p[0],
                  m = p[1];
                (n = n || y), m && (l = s.merge(l, m));
              } catch (e) {
                if (!n) throw e;
              }
              if ("string" == typeof n) {
                var v = (0, C.kQ)(n),
                  g = s.written[n] || (s.written[n] = []);
                if (
                  g.indexOf(i) >= 0 ||
                  (g.push(i), this.reader && this.reader.isFresh(r, v, i, s))
                )
                  return v;
                var w = s.incomingById.get(n);
                return (
                  w
                    ? ((w.storeObject = s.merge(w.storeObject, l)),
                      (w.mergeTree = (function e(t, n) {
                        if (t === n || !n || eE(n)) return t;
                        if (!t || eE(t)) return n;
                        var r =
                            t.info && n.info
                              ? (0, o.pi)((0, o.pi)({}, t.info), n.info)
                              : t.info || n.info,
                          i = t.map.size && n.map.size,
                          a = {
                            info: r,
                            map: i ? new Map() : t.map.size ? t.map : n.map,
                          };
                        if (i) {
                          var s = new Set(n.map.keys());
                          t.map.forEach(function (t, r) {
                            a.map.set(r, e(t, n.map.get(r))), s.delete(r);
                          }),
                            s.forEach(function (r) {
                              a.map.set(r, e(n.map.get(r), t.map.get(r)));
                            });
                        }
                        return a;
                      })(w.mergeTree, c)),
                      d.forEach(function (e) {
                        return w.fieldNodeSet.add(e);
                      }))
                    : s.incomingById.set(n, {
                        storeObject: l,
                        mergeTree: eE(c) ? void 0 : c,
                        fieldNodeSet: d,
                      }),
                  v
                );
              }
              return l;
            }),
            (e.prototype.processFieldValue = function (e, t, n, r) {
              var i = this;
              return t.selectionSet && null !== e
                ? (0, x.k)(e)
                  ? e.map(function (e, o) {
                      var a = i.processFieldValue(e, t, n, eC(r, o));
                      return ek(r, o), a;
                    })
                  : this.processSelectionSet({
                      result: e,
                      selectionSet: t.selectionSet,
                      context: n,
                      mergeTree: r,
                    })
                : !1 !== globalThis.__DEV__
                ? (0, ee.X)(e)
                : e;
            }),
            (e.prototype.flattenFields = function (e, t, n, r) {
              void 0 === r && (r = (0, C.qw)(t, e, n.fragmentMap));
              var i = new Map(),
                o = this.cache.policies,
                s = new T.B(!1);
              return (
                (function e(c, l) {
                  var f = s.lookup(c, l.clientOnly, l.deferred);
                  f.visited ||
                    ((f.visited = !0),
                    c.selections.forEach(function (s) {
                      if ((0, S.LZ)(s, n.variables)) {
                        var c = l.clientOnly,
                          f = l.deferred;
                        if (
                          (!(c && f) &&
                            (0, x.O)(s.directives) &&
                            s.directives.forEach(function (e) {
                              var t = e.name.value;
                              if (("client" === t && (c = !0), "defer" === t)) {
                                var r = (0, C.NC)(e, n.variables);
                                (r && !1 === r.if) || (f = !0);
                              }
                            }),
                          (0, C.My)(s))
                        ) {
                          var h = i.get(s);
                          h && ((c = c && h.clientOnly), (f = f && h.deferred)),
                            i.set(s, eb(n, c, f));
                        } else {
                          var d = (0, u.hi)(s, n.lookupFragment);
                          if (!d && s.kind === E.h.FRAGMENT_SPREAD)
                            throw (0, a._K)(13, s.name.value);
                          d &&
                            o.fragmentMatches(d, r, t, n.variables) &&
                            e(d.selectionSet, eb(n, c, f));
                        }
                      }
                    }));
                })(e, n),
                i
              );
            }),
            (e.prototype.applyMerges = function (e, t, n, r, i) {
              var s = this;
              if (e.map.size && !(0, C.Yk)(n)) {
                var c,
                  u,
                  l = !(0, x.k)(n) && ((0, C.Yk)(t) || L(t)) ? t : void 0,
                  f = n;
                l && !i && (i = [(0, C.Yk)(l) ? l.__ref : l]);
                var h = function (e, t) {
                  return (0, x.k)(e)
                    ? "number" == typeof t
                      ? e[t]
                      : void 0
                    : r.store.getFieldValue(e, String(t));
                };
                e.map.forEach(function (e, t) {
                  var n = h(l, t),
                    o = h(f, t);
                  if (void 0 !== o) {
                    i && i.push(t);
                    var c = s.applyMerges(e, n, o, r, i);
                    c !== o && (u = u || new Map()).set(t, c),
                      i && (0, a.kG)(i.pop() === t);
                  }
                }),
                  u &&
                    ((n = (0, x.k)(f) ? f.slice(0) : (0, o.pi)({}, f)),
                    u.forEach(function (e, t) {
                      n[t] = e;
                    }));
              }
              return e.info
                ? this.cache.policies.runMergeFunction(
                    t,
                    n,
                    e.info,
                    r,
                    i && (c = r.store).getStorage.apply(c, i)
                  )
                : n;
            }),
            e
          );
        })(),
        eA = [];
      function eC(e, t) {
        var n = e.map;
        return n.has(t) || n.set(t, eA.pop() || { map: new Map() }), n.get(t);
      }
      function eE(e) {
        return !e || !(e.info || e.map.size);
      }
      function ek(e, t) {
        var n = e.map,
          r = n.get(t);
        r && eE(r) && (eA.push(r), n.delete(t));
      }
      var eO = new Set(),
        eI = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var n,
              r = e.call(this) || this;
            return (
              (r.watches = new Set()),
              (r.addTypenameTransform = new g.A(b.Gw)),
              (r.assumeImmutableResults = !0),
              (r.makeVar = en.QS),
              (r.txCount = 0),
              (r.config = ((n = t), (0, O.o)(Q, n))),
              (r.addTypename = !!r.config.addTypename),
              (r.policies = new ey({
                cache: r,
                dataIdFromObject: r.config.dataIdFromObject,
                possibleTypes: r.config.possibleTypes,
                typePolicies: r.config.typePolicies,
              })),
              r.init(),
              r
            );
          }
          return (
            (0, o.ZT)(t, e),
            (t.prototype.init = function () {
              var e = (this.data = new V.Root({
                policies: this.policies,
                resultCaching: this.config.resultCaching,
              }));
              (this.optimisticData = e.stump), this.resetResultCache();
            }),
            (t.prototype.resetResultCache = function (e) {
              var t = this,
                n = this.storeReader,
                r = this.config.fragments;
              (this.storeWriter = new ew(
                this,
                (this.storeReader = new $({
                  cache: this,
                  addTypename: this.addTypename,
                  resultCacheMaxSize: this.config.resultCacheMaxSize,
                  canonizeResults: M(this.config),
                  canon: e ? void 0 : n && n.canon,
                  fragments: r,
                })),
                r
              )),
                (this.maybeBroadcastWatch = (0, s.re)(
                  function (e, n) {
                    return t.broadcastWatch(e, n);
                  },
                  {
                    max:
                      this.config.resultCacheMaxSize ||
                      l.Q["inMemoryCache.maybeBroadcastWatch"] ||
                      5e3,
                    makeCacheKey: function (e) {
                      var n = e.optimistic ? t.optimisticData : t.data;
                      if (Y(n)) {
                        var r = e.optimistic,
                          i = e.id,
                          o = e.variables;
                        return n.makeCacheKey(
                          e.query,
                          e.callback,
                          (0, w.B)({ optimistic: r, id: i, variables: o })
                        );
                      }
                    },
                  }
                )),
                new Set([this.data.group, this.optimisticData.group]).forEach(
                  function (e) {
                    return e.resetCaching();
                  }
                );
            }),
            (t.prototype.restore = function (e) {
              return this.init(), e && this.data.replace(e), this;
            }),
            (t.prototype.extract = function (e) {
              return (
                void 0 === e && (e = !1),
                (e ? this.optimisticData : this.data).extract()
              );
            }),
            (t.prototype.read = function (e) {
              var t = e.returnPartialData;
              try {
                return (
                  this.storeReader.diffQueryAgainstStore(
                    (0, o.pi)((0, o.pi)({}, e), {
                      store: e.optimistic ? this.optimisticData : this.data,
                      config: this.config,
                      returnPartialData: void 0 !== t && t,
                    })
                  ).result || null
                );
              } catch (e) {
                if (e instanceof v) return null;
                throw e;
              }
            }),
            (t.prototype.write = function (e) {
              try {
                return (
                  ++this.txCount, this.storeWriter.writeToStore(this.data, e)
                );
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.modify = function (e) {
              if (R.call(e, "id") && !e.id) return !1;
              var t = e.optimistic ? this.optimisticData : this.data;
              try {
                return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.diff = function (e) {
              return this.storeReader.diffQueryAgainstStore(
                (0, o.pi)((0, o.pi)({}, e), {
                  store: e.optimistic ? this.optimisticData : this.data,
                  rootId: e.id || "ROOT_QUERY",
                  config: this.config,
                })
              );
            }),
            (t.prototype.watch = function (e) {
              var t = this;
              return (
                this.watches.size || (0, en._v)(this),
                this.watches.add(e),
                e.immediate && this.maybeBroadcastWatch(e),
                function () {
                  t.watches.delete(e) && !t.watches.size && (0, en.li)(t),
                    t.maybeBroadcastWatch.forget(e);
                }
              );
            }),
            (t.prototype.gc = function (e) {
              w.B.reset(),
                A.S.reset(),
                this.addTypenameTransform.resetCache(),
                null === (t = this.config.fragments) ||
                  void 0 === t ||
                  t.resetCaches();
              var t,
                n = this.optimisticData.gc();
              return (
                e &&
                  !this.txCount &&
                  (e.resetResultCache
                    ? this.resetResultCache(e.resetResultIdentities)
                    : e.resetResultIdentities && this.storeReader.resetCanon()),
                n
              );
            }),
            (t.prototype.retain = function (e, t) {
              return (t ? this.optimisticData : this.data).retain(e);
            }),
            (t.prototype.release = function (e, t) {
              return (t ? this.optimisticData : this.data).release(e);
            }),
            (t.prototype.identify = function (e) {
              if ((0, C.Yk)(e)) return e.__ref;
              try {
                return this.policies.identify(e)[0];
              } catch (e) {
                !1 !== globalThis.__DEV__ && a.kG.warn(e);
              }
            }),
            (t.prototype.evict = function (e) {
              if (!e.id) {
                if (R.call(e, "id")) return !1;
                e = (0, o.pi)((0, o.pi)({}, e), { id: "ROOT_QUERY" });
              }
              try {
                return ++this.txCount, this.optimisticData.evict(e, this.data);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.reset = function (e) {
              var t = this;
              return (
                this.init(),
                w.B.reset(),
                e && e.discardWatches
                  ? (this.watches.forEach(function (e) {
                      return t.maybeBroadcastWatch.forget(e);
                    }),
                    this.watches.clear(),
                    (0, en.li)(this))
                  : this.broadcastWatches(),
                Promise.resolve()
              );
            }),
            (t.prototype.removeOptimistic = function (e) {
              var t = this.optimisticData.removeLayer(e);
              t !== this.optimisticData &&
                ((this.optimisticData = t), this.broadcastWatches());
            }),
            (t.prototype.batch = function (e) {
              var t,
                n = this,
                r = e.update,
                i = e.optimistic,
                a = void 0 === i || i,
                s = e.removeOptimistic,
                c = e.onWatchUpdated,
                u = function (e) {
                  var i = n.data,
                    o = n.optimisticData;
                  ++n.txCount, e && (n.data = n.optimisticData = e);
                  try {
                    return (t = r(n));
                  } finally {
                    --n.txCount, (n.data = i), (n.optimisticData = o);
                  }
                },
                l = new Set();
              return (
                c &&
                  !this.txCount &&
                  this.broadcastWatches(
                    (0, o.pi)((0, o.pi)({}, e), {
                      onWatchUpdated: function (e) {
                        return l.add(e), !1;
                      },
                    })
                  ),
                "string" == typeof a
                  ? (this.optimisticData = this.optimisticData.addLayer(a, u))
                  : !1 === a
                  ? u(this.data)
                  : u(),
                "string" == typeof s &&
                  (this.optimisticData = this.optimisticData.removeLayer(s)),
                c && l.size
                  ? (this.broadcastWatches(
                      (0, o.pi)((0, o.pi)({}, e), {
                        onWatchUpdated: function (e, t) {
                          var n = c.call(this, e, t);
                          return !1 !== n && l.delete(e), n;
                        },
                      })
                    ),
                    l.size &&
                      l.forEach(function (e) {
                        return n.maybeBroadcastWatch.dirty(e);
                      }))
                  : this.broadcastWatches(e),
                t
              );
            }),
            (t.prototype.performTransaction = function (e, t) {
              return this.batch({ update: e, optimistic: t || null !== t });
            }),
            (t.prototype.transformDocument = function (e) {
              return this.addTypenameToDocument(this.addFragmentsToDocument(e));
            }),
            (t.prototype.broadcastWatches = function (e) {
              var t = this;
              this.txCount ||
                this.watches.forEach(function (n) {
                  return t.maybeBroadcastWatch(n, e);
                });
            }),
            (t.prototype.addFragmentsToDocument = function (e) {
              var t = this.config.fragments;
              return t ? t.transform(e) : e;
            }),
            (t.prototype.addTypenameToDocument = function (e) {
              return this.addTypename
                ? this.addTypenameTransform.transformDocument(e)
                : e;
            }),
            (t.prototype.broadcastWatch = function (e, t) {
              var n = e.lastDiff,
                r = this.diff(e);
              (!t ||
                (e.optimistic &&
                  "string" == typeof t.optimistic &&
                  (r.fromOptimisticTransaction = !0),
                !t.onWatchUpdated ||
                  !1 !== t.onWatchUpdated.call(this, e, r, n))) &&
                ((n && (0, c.D)(n.result, r.result)) ||
                  e.callback((e.lastDiff = r), n));
            }),
            t
          );
        })(m);
      !1 !== globalThis.__DEV__ && (eI.prototype.getMemoryInternals = p.q4);
    },
    86048: function (e, t, n) {
      "use strict";
      n.d(t, {
        QS: function () {
          return u;
        },
        _v: function () {
          return c;
        },
        ab: function () {
          return i;
        },
        li: function () {
          return s;
        },
      });
      var r = n(4722),
        i = new r.g7(),
        o = new WeakMap();
      function a(e) {
        var t = o.get(e);
        return t || o.set(e, (t = { vars: new Set(), dep: (0, r.dP)() })), t;
      }
      function s(e) {
        a(e).vars.forEach(function (t) {
          return t.forgetCache(e);
        });
      }
      function c(e) {
        a(e).vars.forEach(function (t) {
          return t.attachCache(e);
        });
      }
      function u(e) {
        var t = new Set(),
          n = new Set(),
          r = function (s) {
            if (arguments.length > 0) {
              if (e !== s) {
                (e = s),
                  t.forEach(function (e) {
                    a(e).dep.dirty(r),
                      e.broadcastWatches && e.broadcastWatches();
                  });
                var c = Array.from(n);
                n.clear(),
                  c.forEach(function (t) {
                    return t(e);
                  });
              }
            } else {
              var u = i.getValue();
              u && (o(u), a(u).dep(r));
            }
            return e;
          };
        r.onNextChange = function (e) {
          return (
            n.add(e),
            function () {
              n.delete(e);
            }
          );
        };
        var o = (r.attachCache = function (e) {
          return t.add(e), a(e).vars.add(r), r;
        });
        return (
          (r.forgetCache = function (e) {
            return t.delete(e);
          }),
          r
        );
      }
    },
    61291: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return eN;
        },
      });
      var r,
        i,
        o = n(31974),
        a = n(79930),
        s = n(38681),
        c = n(11739);
      function u(e, t) {
        return t ? t(e) : s.y.of();
      }
      function l(e) {
        return "function" == typeof e ? new h(e) : e;
      }
      function f(e) {
        return e.request.length <= 1;
      }
      var h = (function () {
          function e(e) {
            e && (this.request = e);
          }
          return (
            (e.empty = function () {
              return new e(function () {
                return s.y.of();
              });
            }),
            (e.from = function (t) {
              return 0 === t.length
                ? e.empty()
                : t.map(l).reduce(function (e, t) {
                    return e.concat(t);
                  });
            }),
            (e.split = function (t, n, r) {
              var i = l(n),
                o = l(r || new e(u));
              return Object.assign(
                new e(
                  f(i) && f(o)
                    ? function (e) {
                        return t(e)
                          ? i.request(e) || s.y.of()
                          : o.request(e) || s.y.of();
                      }
                    : function (e, n) {
                        return t(e)
                          ? i.request(e, n) || s.y.of()
                          : o.request(e, n) || s.y.of();
                      }
                ),
                { left: i, right: o }
              );
            }),
            (e.execute = function (e, t) {
              var n, r, i, u;
              return (
                e.request(
                  ((i = t.context),
                  (r = {
                    variables:
                      (n = (function (e) {
                        for (
                          var t = [
                              "query",
                              "operationName",
                              "variables",
                              "extensions",
                              "context",
                            ],
                            n = 0,
                            r = Object.keys(e);
                          n < r.length;
                          n++
                        ) {
                          var i = r[n];
                          if (0 > t.indexOf(i)) throw (0, a._K)(44, i);
                        }
                        return e;
                      })(t)).variables || {},
                    extensions: n.extensions || {},
                    operationName: n.operationName,
                    query: n.query,
                  }).operationName ||
                    (r.operationName =
                      "string" != typeof r.query
                        ? (0, c.rY)(r.query) || void 0
                        : ""),
                  (u = (0, o.pi)({}, i)),
                  Object.defineProperty(r, "setContext", {
                    enumerable: !1,
                    value: function (e) {
                      u =
                        "function" == typeof e
                          ? (0, o.pi)((0, o.pi)({}, u), e(u))
                          : (0, o.pi)((0, o.pi)({}, u), e);
                    },
                  }),
                  Object.defineProperty(r, "getContext", {
                    enumerable: !1,
                    value: function () {
                      return (0, o.pi)({}, u);
                    },
                  }),
                  r)
                ) || s.y.of()
              );
            }),
            (e.concat = function (t, n) {
              var r = l(t);
              if (f(r)) return !1 !== globalThis.__DEV__ && a.kG.warn(36, r), r;
              var i = l(n);
              return Object.assign(
                new e(
                  f(i)
                    ? function (e) {
                        return (
                          r.request(e, function (e) {
                            return i.request(e) || s.y.of();
                          }) || s.y.of()
                        );
                      }
                    : function (e, t) {
                        return (
                          r.request(e, function (e) {
                            return i.request(e, t) || s.y.of();
                          }) || s.y.of()
                        );
                      }
                ),
                { left: r, right: i }
              );
            }),
            (e.prototype.split = function (t, n, r) {
              return this.concat(e.split(t, n, r || new e(u)));
            }),
            (e.prototype.concat = function (t) {
              return e.concat(this, t);
            }),
            (e.prototype.request = function (e, t) {
              throw (0, a._K)(37);
            }),
            (e.prototype.onError = function (e, t) {
              if (t && t.error) return t.error(e), !1;
              throw e;
            }),
            (e.prototype.setOnError = function (e) {
              return (this.onError = e), this;
            }),
            e
          );
        })(),
        d = h.execute,
        p = n(88776),
        y = n(85812),
        m = function (e, t) {
          var n;
          try {
            n = JSON.stringify(e);
          } catch (e) {
            var r = (0, a._K)(40, t, e.message);
            throw ((r.parseError = e), r);
          }
          return n;
        },
        v = n(38191);
      function g(e) {
        var t = {
          next: function () {
            return e.read();
          },
        };
        return (
          v.DN &&
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
          t
        );
      }
      var b = function (e, t, n) {
          var r = Error(n);
          throw (
            ((r.name = "ServerError"),
            (r.response = e),
            (r.statusCode = e.status),
            (r.result = t),
            r)
          );
        },
        w = n(88550),
        A = Symbol();
      function C(e) {
        return e.hasOwnProperty("graphQLErrors");
      }
      var E = function (e) {
          var t = (0, o.ev)(
            (0, o.ev)((0, o.ev)([], e.graphQLErrors, !0), e.clientErrors, !0),
            e.protocolErrors,
            !0
          );
          return (
            e.networkError && t.push(e.networkError),
            t
              .map(function (e) {
                return ((0, w.s)(e) && e.message) || "Error message not found.";
              })
              .join("\n")
          );
        },
        k = (function (e) {
          function t(n) {
            var r = n.graphQLErrors,
              i = n.protocolErrors,
              a = n.clientErrors,
              s = n.networkError,
              c = n.errorMessage,
              u = n.extraInfo,
              l = e.call(this, c) || this;
            return (
              (l.name = "ApolloError"),
              (l.graphQLErrors = r || []),
              (l.protocolErrors = i || []),
              (l.clientErrors = a || []),
              (l.networkError = s || null),
              (l.message = c || E(l)),
              (l.extraInfo = u),
              (l.cause =
                (0, o.ev)(
                  (0, o.ev)((0, o.ev)([s], r || [], !0), i || [], !0),
                  a || [],
                  !0
                ).find(function (e) {
                  return !!e;
                }) || null),
              (l.__proto__ = t.prototype),
              l
            );
          }
          return (0, o.ZT)(t, e), t;
        })(Error),
        O = n(28607),
        I = n(93592);
      function S(e) {
        return "incremental" in e;
      }
      function D(e, t) {
        var n = e,
          r = new I.w0();
        return (
          S(t) &&
            (0, O.O)(t.incremental) &&
            t.incremental.forEach(function (e) {
              for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
                var a = i[o],
                  s = isNaN(+a) ? {} : [];
                (s[a] = t), (t = s);
              }
              n = r.merge(n, t);
            }),
          n
        );
      }
      var N = Object.prototype.hasOwnProperty;
      function T(e, t) {
        e.status >= 300 &&
          b(
            e,
            (function () {
              try {
                return JSON.parse(t);
              } catch (e) {
                return t;
              }
            })(),
            "Response not successful: Received status code ".concat(e.status)
          );
        try {
          return JSON.parse(t);
        } catch (n) {
          throw (
            ((n.name = "ServerParseError"),
            (n.response = e),
            (n.statusCode = e.status),
            (n.bodyText = t),
            n)
          );
        }
      }
      var x = function (e) {
          if (!e && "undefined" == typeof fetch) throw (0, a._K)(38);
        },
        R = n(55873),
        P = {
          http: {
            includeQuery: !0,
            includeExtensions: !1,
            preserveHeaderCase: !1,
          },
          headers: { accept: "*/*", "content-type": "application/json" },
          options: { method: "POST" },
        },
        _ = function (e, t) {
          return t(e);
        };
      function Q(e) {
        return new s.y(function (t) {
          t.error(e);
        });
      }
      var M = n(29417),
        F = n(90535),
        j = (0, a.wY)(function () {
          return fetch;
        }),
        L = function (e) {
          void 0 === e && (e = {});
          var t = e.uri,
            n = void 0 === t ? "/graphql" : t,
            r = e.fetch,
            i = e.print,
            u = void 0 === i ? _ : i,
            l = e.includeExtensions,
            f = e.preserveHeaderCase,
            d = e.useGETForQueries,
            p = e.includeUnusedVariables,
            C = void 0 !== p && p,
            E = (0, o._T)(e, [
              "uri",
              "fetch",
              "print",
              "includeExtensions",
              "preserveHeaderCase",
              "useGETForQueries",
              "includeUnusedVariables",
            ]);
          !1 !== globalThis.__DEV__ && x(r || j);
          var k = {
            http: { includeExtensions: l, preserveHeaderCase: f },
            options: E.fetchOptions,
            credentials: E.credentials,
            headers: E.headers,
          };
          return new h(function (e) {
            var t,
              i,
              l,
              f,
              h,
              p,
              E,
              O,
              I =
                ((t = e),
                (i = n),
                t.getContext().uri ||
                  ("function" == typeof i ? i(t) : i || "/graphql")),
              S = e.getContext(),
              D = {};
            if (S.clientAwareness) {
              var x = S.clientAwareness,
                _ = x.name,
                L = x.version;
              _ && (D["apollographql-client-name"] = _),
                L && (D["apollographql-client-version"] = L);
            }
            var q = (0, o.pi)((0, o.pi)({}, D), S.headers),
              B = {
                http: S.http,
                options: S.fetchOptions,
                credentials: S.credentials,
                headers: q,
              };
            if ((0, y.FS)(["client"], e.query)) {
              var U = (0, F.ob)(e.query);
              if (!U)
                return Q(
                  Error(
                    "HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."
                  )
                );
              e.query = U;
            }
            var K = (function (e, t) {
                for (var n = [], r = 2; r < arguments.length; r++)
                  n[r - 2] = arguments[r];
                var i = {},
                  a = {};
                n.forEach(function (e) {
                  (i = (0, o.pi)((0, o.pi)((0, o.pi)({}, i), e.options), {
                    headers: (0, o.pi)((0, o.pi)({}, i.headers), e.headers),
                  })),
                    e.credentials && (i.credentials = e.credentials),
                    (a = (0, o.pi)((0, o.pi)({}, a), e.http));
                }),
                  i.headers &&
                    (i.headers = (function (e, t) {
                      if (!t) {
                        var n = {};
                        return (
                          Object.keys(Object(e)).forEach(function (t) {
                            n[t.toLowerCase()] = e[t];
                          }),
                          n
                        );
                      }
                      var r = {};
                      Object.keys(Object(e)).forEach(function (t) {
                        r[t.toLowerCase()] = { originalName: t, value: e[t] };
                      });
                      var i = {};
                      return (
                        Object.keys(r).forEach(function (e) {
                          i[r[e].originalName] = r[e].value;
                        }),
                        i
                      );
                    })(i.headers, a.preserveHeaderCase));
                var s = e.operationName,
                  c = e.extensions,
                  u = e.variables,
                  l = e.query,
                  f = { operationName: s, variables: u };
                return (
                  a.includeExtensions && (f.extensions = c),
                  a.includeQuery && (f.query = t(l, R.S)),
                  { options: i, body: f }
                );
              })(e, u, P, k, B),
              V = K.options,
              G = K.body;
            G.variables &&
              !C &&
              (G.variables =
                ((l = G.variables),
                (f = e.query),
                (h = (0, o.pi)({}, l)),
                (p = new Set(Object.keys(l))),
                (0, M.Vn)(f, {
                  Variable: function (e, t, n) {
                    n &&
                      "VariableDefinition" !== n.kind &&
                      p.delete(e.name.value);
                  },
                }),
                p.forEach(function (e) {
                  delete h[e];
                }),
                h)),
              V.signal ||
                "undefined" == typeof AbortController ||
                ((O = new AbortController()), (V.signal = O.signal));
            var z =
                "OperationDefinition" === (E = (0, c.p$)(e.query)).kind &&
                "subscription" === E.operation,
              W = (0, y.FS)(["defer"], e.query);
            if (
              (d &&
                !e.query.definitions.some(function (e) {
                  return (
                    "OperationDefinition" === e.kind &&
                    "mutation" === e.operation
                  );
                }) &&
                (V.method = "GET"),
              W || z)
            ) {
              V.headers = V.headers || {};
              var J = "multipart/mixed;";
              z && W && !1 !== globalThis.__DEV__ && a.kG.warn(39),
                z
                  ? (J +=
                      "boundary=graphql;subscriptionSpec=1.0,application/json")
                  : W && (J += "deferSpec=20220824,application/json"),
                (V.headers.accept = J);
            }
            if ("GET" === V.method) {
              var H = (function (e, t) {
                  var n = [],
                    r = function (e, t) {
                      n.push("".concat(e, "=").concat(encodeURIComponent(t)));
                    };
                  if (
                    ("query" in t && r("query", t.query),
                    t.operationName && r("operationName", t.operationName),
                    t.variables)
                  ) {
                    var i = void 0;
                    try {
                      i = m(t.variables, "Variables map");
                    } catch (e) {
                      return { parseError: e };
                    }
                    r("variables", i);
                  }
                  if (t.extensions) {
                    var o = void 0;
                    try {
                      o = m(t.extensions, "Extensions map");
                    } catch (e) {
                      return { parseError: e };
                    }
                    r("extensions", o);
                  }
                  var a = "",
                    s = e,
                    c = e.indexOf("#");
                  -1 !== c && ((a = e.substr(c)), (s = e.substr(0, c)));
                  var u = -1 === s.indexOf("?") ? "?" : "&";
                  return { newURI: s + u + n.join("&") + a };
                })(I, G),
                Y = H.newURI,
                Z = H.parseError;
              if (Z) return Q(Z);
              I = Y;
            } else
              try {
                V.body = m(G, "Payload");
              } catch (e) {
                return Q(e);
              }
            return new s.y(function (t) {
              var n =
                  r ||
                  (0, a.wY)(function () {
                    return fetch;
                  }) ||
                  j,
                i = t.next.bind(t);
              return (
                n(I, V)
                  .then(function (t) {
                    e.setContext({ response: t });
                    var n,
                      r =
                        null === (n = t.headers) || void 0 === n
                          ? void 0
                          : n.get("content-type");
                    return null !== r && /^multipart\/mixed/i.test(r)
                      ? (function (e, t) {
                          return (0, o.mG)(this, void 0, void 0, function () {
                            var n,
                              r,
                              i,
                              a,
                              s,
                              c,
                              u,
                              l,
                              f,
                              h,
                              d,
                              p,
                              y,
                              m,
                              b,
                              C,
                              E,
                              k,
                              O,
                              I,
                              S,
                              D,
                              N;
                            return (0, o.Jh)(this, function (x) {
                              switch (x.label) {
                                case 0:
                                  if (void 0 === TextDecoder)
                                    throw Error(
                                      "TextDecoder must be defined in the environment: please import a polyfill."
                                    );
                                  (n = new TextDecoder("utf-8")),
                                    (r =
                                      null === (N = e.headers) || void 0 === N
                                        ? void 0
                                        : N.get("content-type")),
                                    (i = "boundary="),
                                    (a = (null == r ? void 0 : r.includes(i))
                                      ? null == r
                                        ? void 0
                                        : r
                                            .substring(
                                              (null == r
                                                ? void 0
                                                : r.indexOf(i)) + i.length
                                            )
                                            .replace(/['"]/g, "")
                                            .replace(/\;(.*)/gm, "")
                                            .trim()
                                      : "-"),
                                    (s = "\r\n--".concat(a)),
                                    (c = ""),
                                    (u = (function (e) {
                                      var t,
                                        n,
                                        r,
                                        i,
                                        o,
                                        a,
                                        s = e;
                                      if (
                                        (e.body && (s = e.body),
                                        (t = s),
                                        v.DN && t[Symbol.asyncIterator])
                                      )
                                        return (
                                          (r = s[Symbol.asyncIterator]()),
                                          ((n = {
                                            next: function () {
                                              return r.next();
                                            },
                                          })[Symbol.asyncIterator] =
                                            function () {
                                              return this;
                                            }),
                                          n
                                        );
                                      if (s.getReader) return g(s.getReader());
                                      if (s.stream)
                                        return g(s.stream().getReader());
                                      if (s.arrayBuffer)
                                        return (
                                          (i = s.arrayBuffer()),
                                          (o = !1),
                                          (a = {
                                            next: function () {
                                              return o
                                                ? Promise.resolve({
                                                    value: void 0,
                                                    done: !0,
                                                  })
                                                : ((o = !0),
                                                  new Promise(function (e, t) {
                                                    i.then(function (t) {
                                                      e({ value: t, done: !1 });
                                                    }).catch(t);
                                                  }));
                                            },
                                          }),
                                          v.DN &&
                                            (a[Symbol.asyncIterator] =
                                              function () {
                                                return this;
                                              }),
                                          a
                                        );
                                      if (s.pipe)
                                        return (function (e) {
                                          var t = null,
                                            n = null,
                                            r = !1,
                                            i = [],
                                            o = [];
                                          function a(e) {
                                            if (!n) {
                                              if (o.length) {
                                                var t = o.shift();
                                                if (Array.isArray(t) && t[0])
                                                  return t[0]({
                                                    value: e,
                                                    done: !1,
                                                  });
                                              }
                                              i.push(e);
                                            }
                                          }
                                          function s(e) {
                                            (n = e),
                                              o.slice().forEach(function (t) {
                                                t[1](e);
                                              }),
                                              t && t();
                                          }
                                          function c() {
                                            (r = !0),
                                              o.slice().forEach(function (e) {
                                                e[0]({
                                                  value: void 0,
                                                  done: !0,
                                                });
                                              }),
                                              t && t();
                                          }
                                          (t = function () {
                                            (t = null),
                                              e.removeListener("data", a),
                                              e.removeListener("error", s),
                                              e.removeListener("end", c),
                                              e.removeListener("finish", c),
                                              e.removeListener("close", c);
                                          }),
                                            e.on("data", a),
                                            e.on("error", s),
                                            e.on("end", c),
                                            e.on("finish", c),
                                            e.on("close", c);
                                          var u = {
                                            next: function () {
                                              return new Promise(function (
                                                e,
                                                t
                                              ) {
                                                return n
                                                  ? t(n)
                                                  : i.length
                                                  ? e({
                                                      value: i.shift(),
                                                      done: !1,
                                                    })
                                                  : r
                                                  ? e({
                                                      value: void 0,
                                                      done: !0,
                                                    })
                                                  : void o.push([e, t]);
                                              });
                                            },
                                          };
                                          return (
                                            v.DN &&
                                              (u[Symbol.asyncIterator] =
                                                function () {
                                                  return this;
                                                }),
                                            u
                                          );
                                        })(s);
                                      throw Error(
                                        "Unknown body type for responseIterator. Please pass a streamable response."
                                      );
                                    })(e)),
                                    (l = !0),
                                    (x.label = 1);
                                case 1:
                                  if (!l) return [3, 3];
                                  return [4, u.next()];
                                case 2:
                                  for (
                                    h = (f = x.sent()).value,
                                      d = f.done,
                                      p =
                                        "string" == typeof h ? h : n.decode(h),
                                      y = c.length - s.length + 1,
                                      l = !d,
                                      c += p,
                                      m = c.indexOf(s, y);
                                    m > -1;

                                  ) {
                                    if (
                                      ((b = void 0),
                                      (b = (S = [
                                        c.slice(0, m),
                                        c.slice(m + s.length),
                                      ])[0]),
                                      (c = S[1]),
                                      (C = b.indexOf("\r\n\r\n")),
                                      (E = (function (e) {
                                        var t = {};
                                        return (
                                          e.split("\n").forEach(function (e) {
                                            var n = e.indexOf(":");
                                            if (n > -1) {
                                              var r = e
                                                  .slice(0, n)
                                                  .trim()
                                                  .toLowerCase(),
                                                i = e.slice(n + 1).trim();
                                              t[r] = i;
                                            }
                                          }),
                                          t
                                        );
                                      })(b.slice(0, C))["content-type"]) &&
                                        -1 ===
                                          E.toLowerCase().indexOf(
                                            "application/json"
                                          ))
                                    )
                                      throw Error(
                                        "Unsupported patch content type: application/json is required."
                                      );
                                    if ((k = b.slice(C))) {
                                      if (
                                        Object.keys((O = T(e, k))).length > 1 ||
                                        "data" in O ||
                                        "incremental" in O ||
                                        "errors" in O ||
                                        "payload" in O
                                      ) {
                                        if ((0, w.s)(O) && "payload" in O) {
                                          if (((I = {}), "payload" in O)) {
                                            if (
                                              1 === Object.keys(O).length &&
                                              null === O.payload
                                            )
                                              return [2];
                                            I = (0, o.pi)({}, O.payload);
                                          }
                                          "errors" in O &&
                                            (I = (0, o.pi)((0, o.pi)({}, I), {
                                              extensions: (0, o.pi)(
                                                (0, o.pi)(
                                                  {},
                                                  "extensions" in I
                                                    ? I.extensions
                                                    : null
                                                ),
                                                (((D = {})[A] = O.errors), D)
                                              ),
                                            })),
                                            t(I);
                                        } else t(O);
                                      } else if (
                                        1 === Object.keys(O).length &&
                                        "hasNext" in O &&
                                        !O.hasNext
                                      )
                                        return [2];
                                    }
                                    m = c.indexOf(s);
                                  }
                                  return [3, 1];
                                case 3:
                                  return [2];
                              }
                            });
                          });
                        })(t, i)
                      : t
                          .text()
                          .then(function (e) {
                            return T(t, e);
                          })
                          .then(function (n) {
                            return (
                              Array.isArray(n) ||
                                N.call(n, "data") ||
                                N.call(n, "errors") ||
                                b(
                                  t,
                                  n,
                                  "Server response was missing for query '".concat(
                                    Array.isArray(e)
                                      ? e.map(function (e) {
                                          return e.operationName;
                                        })
                                      : e.operationName,
                                    "'."
                                  )
                                ),
                              n
                            );
                          })
                          .then(i);
                  })
                  .then(function () {
                    (O = void 0), t.complete();
                  })
                  .catch(function (e) {
                    (O = void 0),
                      e.result &&
                        e.result.errors &&
                        e.result.data &&
                        t.next(e.result),
                      t.error(e);
                  }),
                function () {
                  O && O.abort();
                }
              );
            });
          });
        },
        q = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this, L(t).request) || this;
            return (n.options = t), n;
          }
          return (0, o.ZT)(t, e), t;
        })(h),
        B = n(36510),
        U = n(97440),
        K = n(65647);
      function V(e, t, n) {
        return new s.y(function (r) {
          var i = {
            then: function (e) {
              return new Promise(function (t) {
                return t(e());
              });
            },
          };
          function o(e, t) {
            return function (n) {
              if (e) {
                var o = function () {
                  return r.closed ? 0 : e(n);
                };
                i = i.then(o, o).then(
                  function (e) {
                    return r.next(e);
                  },
                  function (e) {
                    return r.error(e);
                  }
                );
              } else r[t](n);
            };
          }
          var a = {
              next: o(t, "next"),
              error: o(n, "error"),
              complete: function () {
                i.then(function () {
                  return r.complete();
                });
              },
            },
            s = e.subscribe(a);
          return function () {
            return s.unsubscribe();
          };
        });
      }
      function G(e) {
        var t = z(e);
        return (0, O.O)(t);
      }
      function z(e) {
        var t = (0, O.O)(e.errors) ? e.errors.slice(0) : [];
        return (
          S(e) &&
            (0, O.O)(e.incremental) &&
            e.incremental.forEach(function (e) {
              e.errors && t.push.apply(t, e.errors);
            }),
          t
        );
      }
      var W = n(44339),
        J = n(18333);
      function H(e, t, n) {
        var r = [];
        e.forEach(function (e) {
          return e[t] && r.push(e);
        }),
          r.forEach(function (e) {
            return e[t](n);
          });
      }
      function Y(e) {
        function t(t) {
          Object.defineProperty(e, t, { value: s.y });
        }
        return v.aS && Symbol.species && t(Symbol.species), t("@@species"), e;
      }
      function Z(e) {
        return e && "function" == typeof e.then;
      }
      var X = (function (e) {
        function t(t) {
          var n =
            e.call(this, function (e) {
              return (
                n.addObserver(e),
                function () {
                  return n.removeObserver(e);
                }
              );
            }) || this;
          return (
            (n.observers = new Set()),
            (n.promise = new Promise(function (e, t) {
              (n.resolve = e), (n.reject = t);
            })),
            (n.handlers = {
              next: function (e) {
                null !== n.sub &&
                  ((n.latest = ["next", e]),
                  n.notify("next", e),
                  H(n.observers, "next", e));
              },
              error: function (e) {
                var t = n.sub;
                null !== t &&
                  (t &&
                    setTimeout(function () {
                      return t.unsubscribe();
                    }),
                  (n.sub = null),
                  (n.latest = ["error", e]),
                  n.reject(e),
                  n.notify("error", e),
                  H(n.observers, "error", e));
              },
              complete: function () {
                var e = n.sub,
                  t = n.sources;
                if (null !== e) {
                  var r = (void 0 === t ? [] : t).shift();
                  r
                    ? Z(r)
                      ? r.then(function (e) {
                          return (n.sub = e.subscribe(n.handlers));
                        }, n.handlers.error)
                      : (n.sub = r.subscribe(n.handlers))
                    : (e &&
                        setTimeout(function () {
                          return e.unsubscribe();
                        }),
                      (n.sub = null),
                      n.latest && "next" === n.latest[0]
                        ? n.resolve(n.latest[1])
                        : n.resolve(),
                      n.notify("complete"),
                      H(n.observers, "complete"));
                }
              },
            }),
            (n.nextResultListeners = new Set()),
            (n.cancel = function (e) {
              n.reject(e), (n.sources = []), n.handlers.error(e);
            }),
            n.promise.catch(function (e) {}),
            "function" == typeof t && (t = [new s.y(t)]),
            Z(t)
              ? t.then(function (e) {
                  return n.start(e);
                }, n.handlers.error)
              : n.start(t),
            n
          );
        }
        return (
          (0, o.ZT)(t, e),
          (t.prototype.start = function (e) {
            void 0 === this.sub &&
              ((this.sources = Array.from(e)), this.handlers.complete());
          }),
          (t.prototype.deliverLastMessage = function (e) {
            if (this.latest) {
              var t = this.latest[0],
                n = e[t];
              n && n.call(e, this.latest[1]),
                null === this.sub && "next" === t && e.complete && e.complete();
            }
          }),
          (t.prototype.addObserver = function (e) {
            this.observers.has(e) ||
              (this.deliverLastMessage(e), this.observers.add(e));
          }),
          (t.prototype.removeObserver = function (e) {
            this.observers.delete(e) &&
              this.observers.size < 1 &&
              this.handlers.complete();
          }),
          (t.prototype.notify = function (e, t) {
            var n = this.nextResultListeners;
            n.size &&
              ((this.nextResultListeners = new Set()),
              n.forEach(function (n) {
                return n(e, t);
              }));
          }),
          (t.prototype.beforeNext = function (e) {
            var t = !1;
            this.nextResultListeners.add(function (n, r) {
              t || ((t = !0), e(n, r));
            });
          }),
          t
        );
      })(s.y);
      function $(e) {
        return !!e && e < 7;
      }
      Y(X),
        ((r = i || (i = {}))[(r.loading = 1)] = "loading"),
        (r[(r.setVariables = 2)] = "setVariables"),
        (r[(r.fetchMore = 3)] = "fetchMore"),
        (r[(r.refetch = 4)] = "refetch"),
        (r[(r.poll = 6)] = "poll"),
        (r[(r.ready = 7)] = "ready"),
        (r[(r.error = 8)] = "error");
      var ee = n(18865),
        et = n(62566),
        en = n(3987),
        er = Object.assign,
        ei = Object.hasOwnProperty,
        eo = (function (e) {
          function t(t) {
            var n = t.queryManager,
              r = t.queryInfo,
              i = t.options,
              a =
                e.call(this, function (e) {
                  try {
                    var t = e._subscription._observer;
                    t && !t.error && (t.error = es);
                  } catch (e) {}
                  var n = !a.observers.size;
                  a.observers.add(e);
                  var r = a.last;
                  return (
                    r && r.error
                      ? e.error && e.error(r.error)
                      : r && r.result && e.next && e.next(r.result),
                    n && a.reobserve().catch(function () {}),
                    function () {
                      a.observers.delete(e) &&
                        !a.observers.size &&
                        a.tearDownQuery();
                    }
                  );
                }) || this;
            (a.observers = new Set()),
              (a.subscriptions = new Set()),
              (a.queryInfo = r),
              (a.queryManager = n),
              (a.waitForOwnResult = eu(i.fetchPolicy)),
              (a.isTornDown = !1),
              (a.subscribeToMore = a.subscribeToMore.bind(a));
            var s = n.defaultOptions.watchQuery,
              u = (void 0 === s ? {} : s).fetchPolicy,
              l = void 0 === u ? "cache-first" : u,
              f = i.fetchPolicy,
              h = void 0 === f ? l : f,
              d = i.initialFetchPolicy,
              p = void 0 === d ? ("standby" === h ? l : h) : d;
            (a.options = (0, o.pi)((0, o.pi)({}, i), {
              initialFetchPolicy: p,
              fetchPolicy: h,
            })),
              (a.queryId = r.queryId || n.generateQueryId());
            var y = (0, c.$H)(a.query);
            return (a.queryName = y && y.name && y.name.value), a;
          }
          return (
            (0, o.ZT)(t, e),
            Object.defineProperty(t.prototype, "query", {
              get: function () {
                return this.lastQuery || this.options.query;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "variables", {
              get: function () {
                return this.options.variables;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.result = function () {
              var e = this;
              return new Promise(function (t, n) {
                var r = {
                    next: function (n) {
                      t(n),
                        e.observers.delete(r),
                        e.observers.size ||
                          e.queryManager.removeQuery(e.queryId),
                        setTimeout(function () {
                          i.unsubscribe();
                        }, 0);
                    },
                    error: n,
                  },
                  i = e.subscribe(r);
              });
            }),
            (t.prototype.resetDiff = function () {
              this.queryInfo.resetDiff();
            }),
            (t.prototype.getCurrentResult = function (e) {
              void 0 === e && (e = !0);
              var t = this.getLastResult(!0),
                n =
                  this.queryInfo.networkStatus ||
                  (t && t.networkStatus) ||
                  i.ready,
                r = (0, o.pi)((0, o.pi)({}, t), {
                  loading: $(n),
                  networkStatus: n,
                }),
                a = this.options.fetchPolicy,
                s = void 0 === a ? "cache-first" : a;
              if (
                eu(s) ||
                this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
              );
              else if (this.waitForOwnResult) this.queryInfo.updateWatch();
              else {
                var c = this.queryInfo.getDiff();
                (c.complete || this.options.returnPartialData) &&
                  (r.data = c.result),
                  (0, B.D)(r.data, {}) && (r.data = void 0),
                  c.complete
                    ? (delete r.partial,
                      c.complete &&
                        r.networkStatus === i.loading &&
                        ("cache-first" === s || "cache-only" === s) &&
                        ((r.networkStatus = i.ready), (r.loading = !1)))
                    : (r.partial = !0),
                  !1 === globalThis.__DEV__ ||
                    c.complete ||
                    this.options.partialRefetch ||
                    r.loading ||
                    r.data ||
                    r.error ||
                    ec(c.missing);
              }
              return e && this.updateLastResult(r), r;
            }),
            (t.prototype.isDifferentFromLastResult = function (e, t) {
              return (
                !this.last ||
                (this.queryManager.getDocumentInfo(this.query)
                  .hasNonreactiveDirective
                  ? !(0, en.W)(this.query, this.last.result, e, this.variables)
                  : !(0, B.D)(this.last.result, e)) ||
                (t && !(0, B.D)(this.last.variables, t))
              );
            }),
            (t.prototype.getLast = function (e, t) {
              var n = this.last;
              if (n && n[e] && (!t || (0, B.D)(n.variables, this.variables)))
                return n[e];
            }),
            (t.prototype.getLastResult = function (e) {
              return this.getLast("result", e);
            }),
            (t.prototype.getLastError = function (e) {
              return this.getLast("error", e);
            }),
            (t.prototype.resetLastResults = function () {
              delete this.last, (this.isTornDown = !1);
            }),
            (t.prototype.resetQueryStoreErrors = function () {
              this.queryManager.resetErrors(this.queryId);
            }),
            (t.prototype.refetch = function (e) {
              var t,
                n = { pollInterval: 0 },
                r = this.options.fetchPolicy;
              if (
                ("cache-and-network" === r
                  ? (n.fetchPolicy = r)
                  : "no-cache" === r
                  ? (n.fetchPolicy = "no-cache")
                  : (n.fetchPolicy = "network-only"),
                !1 !== globalThis.__DEV__ && e && ei.call(e, "variables"))
              ) {
                var s = (0, c.iW)(this.query),
                  u = s.variableDefinitions;
                (u &&
                  u.some(function (e) {
                    return "variables" === e.variable.name.value;
                  })) ||
                  !1 === globalThis.__DEV__ ||
                  a.kG.warn(
                    20,
                    e,
                    (null === (t = s.name) || void 0 === t
                      ? void 0
                      : t.value) || s
                  );
              }
              return (
                e &&
                  !(0, B.D)(this.options.variables, e) &&
                  (n.variables = this.options.variables =
                    (0, o.pi)((0, o.pi)({}, this.options.variables), e)),
                this.queryInfo.resetLastWrite(),
                this.reobserve(n, i.refetch)
              );
            }),
            (t.prototype.fetchMore = function (e) {
              var t = this,
                n = (0, o.pi)(
                  (0, o.pi)(
                    {},
                    e.query
                      ? e
                      : (0, o.pi)(
                          (0, o.pi)(
                            (0, o.pi)((0, o.pi)({}, this.options), {
                              query: this.options.query,
                            }),
                            e
                          ),
                          {
                            variables: (0, o.pi)(
                              (0, o.pi)({}, this.options.variables),
                              e.variables
                            ),
                          }
                        )
                  ),
                  { fetchPolicy: "no-cache" }
                );
              n.query = this.transformDocument(n.query);
              var r = this.queryManager.generateQueryId();
              this.lastQuery = e.query
                ? this.transformDocument(this.options.query)
                : n.query;
              var s = this.queryInfo,
                c = s.networkStatus;
              (s.networkStatus = i.fetchMore),
                n.notifyOnNetworkStatusChange && this.observe();
              var u = new Set(),
                l = null == e ? void 0 : e.updateQuery,
                f = "no-cache" !== this.options.fetchPolicy;
              return (
                f || (0, a.kG)(l, 21),
                this.queryManager
                  .fetchQuery(r, n, i.fetchMore)
                  .then(function (a) {
                    if (
                      (t.queryManager.removeQuery(r),
                      s.networkStatus === i.fetchMore && (s.networkStatus = c),
                      f)
                    )
                      t.queryManager.cache.batch({
                        update: function (r) {
                          var i = e.updateQuery;
                          i
                            ? r.updateQuery(
                                {
                                  query: t.query,
                                  variables: t.variables,
                                  returnPartialData: !0,
                                  optimistic: !1,
                                },
                                function (e) {
                                  return i(e, {
                                    fetchMoreResult: a.data,
                                    variables: n.variables,
                                  });
                                }
                              )
                            : r.writeQuery({
                                query: n.query,
                                variables: n.variables,
                                data: a.data,
                              });
                        },
                        onWatchUpdated: function (e) {
                          u.add(e.query);
                        },
                      });
                    else {
                      var h = t.getLast("result"),
                        d = l(h.data, {
                          fetchMoreResult: a.data,
                          variables: n.variables,
                        });
                      t.reportResult(
                        (0, o.pi)((0, o.pi)({}, h), { data: d }),
                        t.variables
                      );
                    }
                    return a;
                  })
                  .finally(function () {
                    f && !u.has(t.query) && ea(t);
                  })
              );
            }),
            (t.prototype.subscribeToMore = function (e) {
              var t = this,
                n = this.queryManager
                  .startGraphQLSubscription({
                    query: e.document,
                    variables: e.variables,
                    context: e.context,
                  })
                  .subscribe({
                    next: function (n) {
                      var r = e.updateQuery;
                      r &&
                        t.updateQuery(function (e, t) {
                          return r(e, {
                            subscriptionData: n,
                            variables: t.variables,
                          });
                        });
                    },
                    error: function (t) {
                      if (e.onError) {
                        e.onError(t);
                        return;
                      }
                      !1 !== globalThis.__DEV__ && a.kG.error(22, t);
                    },
                  });
              return (
                this.subscriptions.add(n),
                function () {
                  t.subscriptions.delete(n) && n.unsubscribe();
                }
              );
            }),
            (t.prototype.setOptions = function (e) {
              return this.reobserve(e);
            }),
            (t.prototype.silentSetOptions = function (e) {
              var t = (0, ee.o)(this.options, e || {});
              er(this.options, t);
            }),
            (t.prototype.setVariables = function (e) {
              return (0, B.D)(this.variables, e)
                ? this.observers.size
                  ? this.result()
                  : Promise.resolve()
                : ((this.options.variables = e), this.observers.size)
                ? this.reobserve(
                    {
                      fetchPolicy: this.options.initialFetchPolicy,
                      variables: e,
                    },
                    i.setVariables
                  )
                : Promise.resolve();
            }),
            (t.prototype.updateQuery = function (e) {
              var t = this.queryManager,
                n = e(
                  t.cache.diff({
                    query: this.options.query,
                    variables: this.variables,
                    returnPartialData: !0,
                    optimistic: !1,
                  }).result,
                  { variables: this.variables }
                );
              n &&
                (t.cache.writeQuery({
                  query: this.options.query,
                  data: n,
                  variables: this.variables,
                }),
                t.broadcastQueries());
            }),
            (t.prototype.startPolling = function (e) {
              (this.options.pollInterval = e), this.updatePolling();
            }),
            (t.prototype.stopPolling = function () {
              (this.options.pollInterval = 0), this.updatePolling();
            }),
            (t.prototype.applyNextFetchPolicy = function (e, t) {
              if (t.nextFetchPolicy) {
                var n = t.fetchPolicy,
                  r = void 0 === n ? "cache-first" : n,
                  i = t.initialFetchPolicy,
                  o = void 0 === i ? r : i;
                "standby" === r ||
                  ("function" == typeof t.nextFetchPolicy
                    ? (t.fetchPolicy = t.nextFetchPolicy(r, {
                        reason: e,
                        options: t,
                        observable: this,
                        initialFetchPolicy: o,
                      }))
                    : "variables-changed" === e
                    ? (t.fetchPolicy = o)
                    : (t.fetchPolicy = t.nextFetchPolicy));
              }
              return t.fetchPolicy;
            }),
            (t.prototype.fetch = function (e, t, n) {
              return (
                this.queryManager.setObservableQuery(this),
                this.queryManager.fetchConcastWithInfo(this.queryId, e, t, n)
              );
            }),
            (t.prototype.updatePolling = function () {
              var e = this;
              if (!this.queryManager.ssrMode) {
                var t = this.pollingInfo,
                  n = this.options.pollInterval;
                if (!n || !this.hasObservers()) {
                  t && (clearTimeout(t.timeout), delete this.pollingInfo);
                  return;
                }
                if (!t || t.interval !== n) {
                  (0, a.kG)(n, 23),
                    ((t || (this.pollingInfo = {})).interval = n);
                  var r = function () {
                      var t, n;
                      e.pollingInfo &&
                        ($(e.queryInfo.networkStatus) ||
                        (null === (n = (t = e.options).skipPollAttempt) ||
                        void 0 === n
                          ? void 0
                          : n.call(t))
                          ? o()
                          : e
                              .reobserve(
                                {
                                  fetchPolicy:
                                    "no-cache" === e.options.initialFetchPolicy
                                      ? "no-cache"
                                      : "network-only",
                                },
                                i.poll
                              )
                              .then(o, o));
                    },
                    o = function () {
                      var t = e.pollingInfo;
                      t &&
                        (clearTimeout(t.timeout),
                        (t.timeout = setTimeout(r, t.interval)));
                    };
                  o();
                }
              }
            }),
            (t.prototype.updateLastResult = function (e, t) {
              void 0 === t && (t = this.variables);
              var n = this.getLastError();
              return (
                n &&
                  this.last &&
                  !(0, B.D)(t, this.last.variables) &&
                  (n = void 0),
                (this.last = (0, o.pi)(
                  {
                    result: this.queryManager.assumeImmutableResults
                      ? e
                      : (0, et.X)(e),
                    variables: t,
                  },
                  n ? { error: n } : null
                ))
              );
            }),
            (t.prototype.reobserveAsConcast = function (e, t) {
              var n = this;
              this.isTornDown = !1;
              var r = t === i.refetch || t === i.fetchMore || t === i.poll,
                a = this.options.variables,
                s = this.options.fetchPolicy,
                c = (0, ee.o)(this.options, e || {}),
                u = r ? c : er(this.options, c),
                l = this.transformDocument(u.query);
              (this.lastQuery = l),
                !r &&
                  (this.updatePolling(),
                  e &&
                    e.variables &&
                    !(0, B.D)(e.variables, a) &&
                    "standby" !== u.fetchPolicy &&
                    (u.fetchPolicy === s ||
                      "function" == typeof u.nextFetchPolicy) &&
                    (this.applyNextFetchPolicy("variables-changed", u),
                    void 0 === t && (t = i.setVariables))),
                this.waitForOwnResult &&
                  (this.waitForOwnResult = eu(u.fetchPolicy));
              var f = function () {
                  n.concast === p && (n.waitForOwnResult = !1);
                },
                h = u.variables && (0, o.pi)({}, u.variables),
                d = this.fetch(u, t, l),
                p = d.concast,
                y = d.fromLink,
                m = {
                  next: function (e) {
                    (0, B.D)(n.variables, h) && (f(), n.reportResult(e, h));
                  },
                  error: function (e) {
                    (0, B.D)(n.variables, h) &&
                      (C(e) || (e = new k({ networkError: e })),
                      f(),
                      n.reportError(e, h));
                  },
                };
              return (
                r ||
                  (!y && this.concast) ||
                  (this.concast &&
                    this.observer &&
                    this.concast.removeObserver(this.observer),
                  (this.concast = p),
                  (this.observer = m)),
                p.addObserver(m),
                p
              );
            }),
            (t.prototype.reobserve = function (e, t) {
              return this.reobserveAsConcast(e, t).promise;
            }),
            (t.prototype.resubscribeAfterError = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = this.last;
              this.resetLastResults();
              var r = this.subscribe.apply(this, e);
              return (this.last = n), r;
            }),
            (t.prototype.observe = function () {
              this.reportResult(this.getCurrentResult(!1), this.variables);
            }),
            (t.prototype.reportResult = function (e, t) {
              var n = this.getLastError(),
                r = this.isDifferentFromLastResult(e, t);
              (n || !e.partial || this.options.returnPartialData) &&
                this.updateLastResult(e, t),
                (n || r) && H(this.observers, "next", e);
            }),
            (t.prototype.reportError = function (e, t) {
              var n = (0, o.pi)((0, o.pi)({}, this.getLastResult()), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: i.error,
                loading: !1,
              });
              this.updateLastResult(n, t),
                H(this.observers, "error", (this.last.error = e));
            }),
            (t.prototype.hasObservers = function () {
              return this.observers.size > 0;
            }),
            (t.prototype.tearDownQuery = function () {
              this.isTornDown ||
                (this.concast &&
                  this.observer &&
                  (this.concast.removeObserver(this.observer),
                  delete this.concast,
                  delete this.observer),
                this.stopPolling(),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.subscriptions.clear(),
                this.queryManager.stopQuery(this.queryId),
                this.observers.clear(),
                (this.isTornDown = !0));
            }),
            (t.prototype.transformDocument = function (e) {
              return this.queryManager.transform(e);
            }),
            t
          );
        })(s.y);
      function ea(e) {
        var t = e.options,
          n = t.fetchPolicy,
          r = t.nextFetchPolicy;
        return "cache-and-network" === n || "network-only" === n
          ? e.reobserve({
              fetchPolicy: "cache-first",
              nextFetchPolicy: function (e, t) {
                return ((this.nextFetchPolicy = r),
                "function" == typeof this.nextFetchPolicy)
                  ? this.nextFetchPolicy(e, t)
                  : n;
              },
            })
          : e.reobserve();
      }
      function es(e) {
        !1 !== globalThis.__DEV__ && a.kG.error(24, e.message, e.stack);
      }
      function ec(e) {
        !1 !== globalThis.__DEV__ &&
          e &&
          !1 !== globalThis.__DEV__ &&
          a.kG.debug(25, e);
      }
      function eu(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e;
      }
      Y(eo);
      var el = new (v.mr ? WeakMap : Map)();
      function ef(e, t) {
        var n = e[t];
        "function" == typeof n &&
          (e[t] = function () {
            return el.set(e, (el.get(e) + 1) % 1e15), n.apply(this, arguments);
          });
      }
      function eh(e) {
        e.notifyTimeout &&
          (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
      }
      var ed = (function () {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()),
            (this.queryId = t),
            (this.listeners = new Set()),
            (this.document = null),
            (this.lastRequestId = 1),
            (this.stopped = !1),
            (this.dirty = !1),
            (this.observableQuery = null);
          var n = (this.cache = e.cache);
          el.has(n) ||
            (el.set(n, 0), ef(n, "evict"), ef(n, "modify"), ef(n, "reset"));
        }
        return (
          (e.prototype.init = function (e) {
            var t = e.networkStatus || i.loading;
            return (
              this.variables &&
                this.networkStatus !== i.loading &&
                !(0, B.D)(this.variables, e.variables) &&
                (t = i.setVariables),
              (0, B.D)(e.variables, this.variables) || (this.lastDiff = void 0),
              Object.assign(this, {
                document: e.document,
                variables: e.variables,
                networkError: null,
                graphQLErrors: this.graphQLErrors || [],
                networkStatus: t,
              }),
              e.observableQuery && this.setObservableQuery(e.observableQuery),
              e.lastRequestId && (this.lastRequestId = e.lastRequestId),
              this
            );
          }),
          (e.prototype.reset = function () {
            eh(this), (this.dirty = !1);
          }),
          (e.prototype.resetDiff = function () {
            this.lastDiff = void 0;
          }),
          (e.prototype.getDiff = function () {
            var e = this.getDiffOptions();
            if (this.lastDiff && (0, B.D)(e, this.lastDiff.options))
              return this.lastDiff.diff;
            this.updateWatch(this.variables);
            var t = this.observableQuery;
            if (t && "no-cache" === t.options.fetchPolicy)
              return { complete: !1 };
            var n = this.cache.diff(e);
            return this.updateLastDiff(n, e), n;
          }),
          (e.prototype.updateLastDiff = function (e, t) {
            this.lastDiff = e
              ? { diff: e, options: t || this.getDiffOptions() }
              : void 0;
          }),
          (e.prototype.getDiffOptions = function (e) {
            var t;
            return (
              void 0 === e && (e = this.variables),
              {
                query: this.document,
                variables: e,
                returnPartialData: !0,
                optimistic: !0,
                canonizeResults:
                  null === (t = this.observableQuery) || void 0 === t
                    ? void 0
                    : t.options.canonizeResults,
              }
            );
          }),
          (e.prototype.setDiff = function (e) {
            var t,
              n = this,
              r = this.lastDiff && this.lastDiff.diff;
            !(
              e &&
              !e.complete &&
              (null === (t = this.observableQuery) || void 0 === t
                ? void 0
                : t.getLastError())
            ) &&
              (this.updateLastDiff(e),
              this.dirty ||
                (0, B.D)(r && r.result, e && e.result) ||
                ((this.dirty = !0),
                this.notifyTimeout ||
                  (this.notifyTimeout = setTimeout(function () {
                    return n.notify();
                  }, 0))));
          }),
          (e.prototype.setObservableQuery = function (e) {
            var t = this;
            e !== this.observableQuery &&
              (this.oqListener && this.listeners.delete(this.oqListener),
              (this.observableQuery = e),
              e
                ? ((e.queryInfo = this),
                  this.listeners.add(
                    (this.oqListener = function () {
                      t.getDiff().fromOptimisticTransaction
                        ? e.observe()
                        : ea(e);
                    })
                  ))
                : delete this.oqListener);
          }),
          (e.prototype.notify = function () {
            var e = this;
            eh(this),
              this.shouldNotify() &&
                this.listeners.forEach(function (t) {
                  return t(e);
                }),
              (this.dirty = !1);
          }),
          (e.prototype.shouldNotify = function () {
            if (!this.dirty || !this.listeners.size) return !1;
            if ($(this.networkStatus) && this.observableQuery) {
              var e = this.observableQuery.options.fetchPolicy;
              if ("cache-only" !== e && "cache-and-network" !== e) return !1;
            }
            return !0;
          }),
          (e.prototype.stop = function () {
            if (!this.stopped) {
              (this.stopped = !0),
                this.reset(),
                this.cancel(),
                (this.cancel = e.prototype.cancel);
              var t = this.observableQuery;
              t && t.stopPolling();
            }
          }),
          (e.prototype.cancel = function () {}),
          (e.prototype.updateWatch = function (e) {
            var t = this;
            void 0 === e && (e = this.variables);
            var n = this.observableQuery;
            if (!n || "no-cache" !== n.options.fetchPolicy) {
              var r = (0, o.pi)((0, o.pi)({}, this.getDiffOptions(e)), {
                watcher: this,
                callback: function (e) {
                  return t.setDiff(e);
                },
              });
              (this.lastWatch && (0, B.D)(r, this.lastWatch)) ||
                (this.cancel(),
                (this.cancel = this.cache.watch((this.lastWatch = r))));
            }
          }),
          (e.prototype.resetLastWrite = function () {
            this.lastWrite = void 0;
          }),
          (e.prototype.shouldWrite = function (e, t) {
            var n = this.lastWrite;
            return !(
              n &&
              n.dmCount === el.get(this.cache) &&
              (0, B.D)(t, n.variables) &&
              (0, B.D)(e.data, n.result.data)
            );
          }),
          (e.prototype.markResult = function (e, t, n, r) {
            var i = this,
              o = new I.w0(),
              a = (0, O.O)(e.errors) ? e.errors.slice(0) : [];
            if ((this.reset(), "incremental" in e && (0, O.O)(e.incremental))) {
              var s = D(this.getDiff().result, e);
              e.data = s;
            } else if ("hasNext" in e && e.hasNext) {
              var c = this.getDiff();
              e.data = o.merge(c.result, e.data);
            }
            (this.graphQLErrors = a),
              "no-cache" === n.fetchPolicy
                ? this.updateLastDiff(
                    { result: e.data, complete: !0 },
                    this.getDiffOptions(n.variables)
                  )
                : 0 !== r &&
                  (ep(e, n.errorPolicy)
                    ? this.cache.performTransaction(function (o) {
                        if (i.shouldWrite(e, n.variables))
                          o.writeQuery({
                            query: t,
                            data: e.data,
                            variables: n.variables,
                            overwrite: 1 === r,
                          }),
                            (i.lastWrite = {
                              result: e,
                              variables: n.variables,
                              dmCount: el.get(i.cache),
                            });
                        else if (i.lastDiff && i.lastDiff.diff.complete) {
                          e.data = i.lastDiff.diff.result;
                          return;
                        }
                        var a = i.getDiffOptions(n.variables),
                          s = o.diff(a);
                        !i.stopped &&
                          (0, B.D)(i.variables, n.variables) &&
                          i.updateWatch(n.variables),
                          i.updateLastDiff(s, a),
                          s.complete && (e.data = s.result);
                      })
                    : (this.lastWrite = void 0));
          }),
          (e.prototype.markReady = function () {
            return (this.networkError = null), (this.networkStatus = i.ready);
          }),
          (e.prototype.markError = function (e) {
            return (
              (this.networkStatus = i.error),
              (this.lastWrite = void 0),
              this.reset(),
              e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
              e.networkError && (this.networkError = e.networkError),
              e
            );
          }),
          e
        );
      })();
      function ep(e, t) {
        void 0 === t && (t = "none");
        var n = "ignore" === t || "all" === t,
          r = !G(e);
        return !r && n && e.data && (r = !0), r;
      }
      var ey = n(12913),
        em = n(50040),
        ev = n(6431),
        eg = Object.prototype.hasOwnProperty,
        eb = Object.create(null),
        ew = (function () {
          function e(e) {
            var t = this;
            (this.clientAwareness = {}),
              (this.queries = new Map()),
              (this.fetchCancelFns = new Map()),
              (this.transformCache = new em.s(
                ev.Q["queryManager.getDocumentInfo"] || 2e3
              )),
              (this.queryIdCounter = 1),
              (this.requestIdCounter = 1),
              (this.mutationIdCounter = 1),
              (this.inFlightLinkObservables = new ey.B(!1));
            var n = new K.A(
              function (e) {
                return t.cache.transformDocument(e);
              },
              { cache: !1 }
            );
            (this.cache = e.cache),
              (this.link = e.link),
              (this.defaultOptions = e.defaultOptions),
              (this.queryDeduplication = e.queryDeduplication),
              (this.clientAwareness = e.clientAwareness),
              (this.localState = e.localState),
              (this.ssrMode = e.ssrMode),
              (this.assumeImmutableResults = e.assumeImmutableResults);
            var r = e.documentTransform;
            (this.documentTransform = r ? n.concat(r).concat(n) : n),
              (this.defaultContext = e.defaultContext || Object.create(null)),
              (this.onBroadcast = e.onBroadcast) &&
                (this.mutationStore = Object.create(null));
          }
          return (
            (e.prototype.stop = function () {
              var e = this;
              this.queries.forEach(function (t, n) {
                e.stopQueryNoBroadcast(n);
              }),
                this.cancelPendingFetches((0, a._K)(26));
            }),
            (e.prototype.cancelPendingFetches = function (e) {
              this.fetchCancelFns.forEach(function (t) {
                return t(e);
              }),
                this.fetchCancelFns.clear();
            }),
            (e.prototype.mutate = function (e) {
              return (0, o.mG)(this, arguments, void 0, function (e) {
                var t,
                  n,
                  r,
                  i,
                  s,
                  c,
                  u,
                  l = e.mutation,
                  f = e.variables,
                  h = e.optimisticResponse,
                  d = e.updateQueries,
                  p = e.refetchQueries,
                  y = void 0 === p ? [] : p,
                  m = e.awaitRefetchQueries,
                  v = void 0 !== m && m,
                  g = e.update,
                  b = e.onQueryUpdated,
                  w = e.fetchPolicy,
                  A =
                    void 0 === w
                      ? (null === (c = this.defaultOptions.mutate) ||
                        void 0 === c
                          ? void 0
                          : c.fetchPolicy) || "network-only"
                      : w,
                  C = e.errorPolicy,
                  E =
                    void 0 === C
                      ? (null === (u = this.defaultOptions.mutate) ||
                        void 0 === u
                          ? void 0
                          : u.errorPolicy) || "none"
                      : C,
                  O = e.keepRootFields,
                  I = e.context;
                return (0, o.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (
                        ((0, a.kG)(l, 27),
                        (0, a.kG)("network-only" === A || "no-cache" === A, 28),
                        (t = this.generateMutationId()),
                        (l = this.cache.transformForLink(this.transform(l))),
                        (n = this.getDocumentInfo(l).hasClientExports),
                        (f = this.getVariables(l, f)),
                        !n)
                      )
                        return [3, 2];
                      return [4, this.localState.addExportedVariables(l, f, I)];
                    case 1:
                      (f = e.sent()), (e.label = 2);
                    case 2:
                      return (
                        (r =
                          this.mutationStore &&
                          (this.mutationStore[t] = {
                            mutation: l,
                            variables: f,
                            loading: !0,
                            error: null,
                          })),
                        (i =
                          h &&
                          this.markMutationOptimistic(h, {
                            mutationId: t,
                            document: l,
                            variables: f,
                            fetchPolicy: A,
                            errorPolicy: E,
                            context: I,
                            updateQueries: d,
                            update: g,
                            keepRootFields: O,
                          })),
                        this.broadcastQueries(),
                        (s = this),
                        [
                          2,
                          new Promise(function (e, n) {
                            return V(
                              s.getObservableFromLink(
                                l,
                                (0, o.pi)((0, o.pi)({}, I), {
                                  optimisticResponse: i ? h : void 0,
                                }),
                                f,
                                {},
                                !1
                              ),
                              function (e) {
                                if (G(e) && "none" === E)
                                  throw new k({ graphQLErrors: z(e) });
                                r && ((r.loading = !1), (r.error = null));
                                var n = (0, o.pi)({}, e);
                                return (
                                  "function" == typeof y && (y = y(n)),
                                  "ignore" === E && G(n) && delete n.errors,
                                  s.markMutationResult({
                                    mutationId: t,
                                    result: n,
                                    document: l,
                                    variables: f,
                                    fetchPolicy: A,
                                    errorPolicy: E,
                                    context: I,
                                    update: g,
                                    updateQueries: d,
                                    awaitRefetchQueries: v,
                                    refetchQueries: y,
                                    removeOptimistic: i ? t : void 0,
                                    onQueryUpdated: b,
                                    keepRootFields: O,
                                  })
                                );
                              }
                            ).subscribe({
                              next: function (t) {
                                s.broadcastQueries(),
                                  ("hasNext" in t && !1 !== t.hasNext) || e(t);
                              },
                              error: function (e) {
                                r && ((r.loading = !1), (r.error = e)),
                                  i && s.cache.removeOptimistic(t),
                                  s.broadcastQueries(),
                                  n(
                                    e instanceof k
                                      ? e
                                      : new k({ networkError: e })
                                  );
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.markMutationResult = function (e, t) {
              var n = this;
              void 0 === t && (t = this.cache);
              var r = e.result,
                i = [],
                a = "no-cache" === e.fetchPolicy;
              if (!a && ep(r, e.errorPolicy)) {
                if (
                  (S(r) ||
                    i.push({
                      result: r.data,
                      dataId: "ROOT_MUTATION",
                      query: e.document,
                      variables: e.variables,
                    }),
                  S(r) && (0, O.O)(r.incremental))
                ) {
                  var s = t.diff({
                      id: "ROOT_MUTATION",
                      query: this.getDocumentInfo(e.document).asQuery,
                      variables: e.variables,
                      optimistic: !1,
                      returnPartialData: !0,
                    }),
                    u = void 0;
                  s.result && (u = D(s.result, r)),
                    void 0 !== u &&
                      ((r.data = u),
                      i.push({
                        result: u,
                        dataId: "ROOT_MUTATION",
                        query: e.document,
                        variables: e.variables,
                      }));
                }
                var l = e.updateQueries;
                l &&
                  this.queries.forEach(function (e, o) {
                    var a = e.observableQuery,
                      s = a && a.queryName;
                    if (s && eg.call(l, s)) {
                      var u = l[s],
                        f = n.queries.get(o),
                        h = f.document,
                        d = f.variables,
                        p = t.diff({
                          query: h,
                          variables: d,
                          returnPartialData: !0,
                          optimistic: !1,
                        }),
                        y = p.result;
                      if (p.complete && y) {
                        var m = u(y, {
                          mutationResult: r,
                          queryName: (h && (0, c.rY)(h)) || void 0,
                          queryVariables: d,
                        });
                        m &&
                          i.push({
                            result: m,
                            dataId: "ROOT_QUERY",
                            query: h,
                            variables: d,
                          });
                      }
                    }
                  });
              }
              if (
                i.length > 0 ||
                (e.refetchQueries || "").length > 0 ||
                e.update ||
                e.onQueryUpdated ||
                e.removeOptimistic
              ) {
                var f = [];
                if (
                  (this.refetchQueries({
                    updateCache: function (t) {
                      a ||
                        i.forEach(function (e) {
                          return t.write(e);
                        });
                      var s,
                        c = e.update,
                        u =
                          !(S((s = r)) || ("hasNext" in s && "data" in s)) ||
                          (S(r) && !r.hasNext);
                      if (c) {
                        if (!a) {
                          var l = t.diff({
                            id: "ROOT_MUTATION",
                            query: n.getDocumentInfo(e.document).asQuery,
                            variables: e.variables,
                            optimistic: !1,
                            returnPartialData: !0,
                          });
                          l.complete &&
                            ("incremental" in
                              (r = (0, o.pi)((0, o.pi)({}, r), {
                                data: l.result,
                              })) && delete r.incremental,
                            "hasNext" in r && delete r.hasNext);
                        }
                        u &&
                          c(t, r, {
                            context: e.context,
                            variables: e.variables,
                          });
                      }
                      a ||
                        e.keepRootFields ||
                        !u ||
                        t.modify({
                          id: "ROOT_MUTATION",
                          fields: function (e, t) {
                            var n = t.fieldName,
                              r = t.DELETE;
                            return "__typename" === n ? e : r;
                          },
                        });
                    },
                    include: e.refetchQueries,
                    optimistic: !1,
                    removeOptimistic: e.removeOptimistic,
                    onQueryUpdated: e.onQueryUpdated || null,
                  }).forEach(function (e) {
                    return f.push(e);
                  }),
                  e.awaitRefetchQueries || e.onQueryUpdated)
                )
                  return Promise.all(f).then(function () {
                    return r;
                  });
              }
              return Promise.resolve(r);
            }),
            (e.prototype.markMutationOptimistic = function (e, t) {
              var n = this,
                r = "function" == typeof e ? e(t.variables, { IGNORE: eb }) : e;
              return (
                r !== eb &&
                (this.cache.recordOptimisticTransaction(function (e) {
                  try {
                    n.markMutationResult(
                      (0, o.pi)((0, o.pi)({}, t), { result: { data: r } }),
                      e
                    );
                  } catch (e) {
                    !1 !== globalThis.__DEV__ && a.kG.error(e);
                  }
                }, t.mutationId),
                !0)
              );
            }),
            (e.prototype.fetchQuery = function (e, t, n) {
              return this.fetchConcastWithInfo(e, t, n).concast.promise;
            }),
            (e.prototype.getQueryStore = function () {
              var e = Object.create(null);
              return (
                this.queries.forEach(function (t, n) {
                  e[n] = {
                    variables: t.variables,
                    networkStatus: t.networkStatus,
                    networkError: t.networkError,
                    graphQLErrors: t.graphQLErrors,
                  };
                }),
                e
              );
            }),
            (e.prototype.resetErrors = function (e) {
              var t = this.queries.get(e);
              t && ((t.networkError = void 0), (t.graphQLErrors = []));
            }),
            (e.prototype.transform = function (e) {
              return this.documentTransform.transformDocument(e);
            }),
            (e.prototype.getDocumentInfo = function (e) {
              var t = this.transformCache;
              if (!t.has(e)) {
                var n = {
                  hasClientExports: (0, y.mj)(e),
                  hasForcedResolvers: this.localState.shouldForceResolvers(e),
                  hasNonreactiveDirective: (0, y.FS)(["nonreactive"], e),
                  clientQuery: this.localState.clientQuery(e),
                  serverQuery: (0, F.bi)(
                    [
                      { name: "client", remove: !0 },
                      { name: "connection" },
                      { name: "nonreactive" },
                    ],
                    e
                  ),
                  defaultVars: (0, c.O4)((0, c.$H)(e)),
                  asQuery: (0, o.pi)((0, o.pi)({}, e), {
                    definitions: e.definitions.map(function (e) {
                      return "OperationDefinition" === e.kind &&
                        "query" !== e.operation
                        ? (0, o.pi)((0, o.pi)({}, e), { operation: "query" })
                        : e;
                    }),
                  }),
                };
                t.set(e, n);
              }
              return t.get(e);
            }),
            (e.prototype.getVariables = function (e, t) {
              return (0, o.pi)(
                (0, o.pi)({}, this.getDocumentInfo(e).defaultVars),
                t
              );
            }),
            (e.prototype.watchQuery = function (e) {
              var t = this.transform(e.query);
              void 0 ===
                (e = (0, o.pi)((0, o.pi)({}, e), {
                  variables: this.getVariables(t, e.variables),
                })).notifyOnNetworkStatusChange &&
                (e.notifyOnNetworkStatusChange = !1);
              var n = new ed(this),
                r = new eo({ queryManager: this, queryInfo: n, options: e });
              return (
                (r.lastQuery = t),
                this.queries.set(r.queryId, n),
                n.init({
                  document: t,
                  observableQuery: r,
                  variables: r.variables,
                }),
                r
              );
            }),
            (e.prototype.query = function (e, t) {
              var n = this;
              return (
                void 0 === t && (t = this.generateQueryId()),
                (0, a.kG)(e.query, 29),
                (0, a.kG)("Document" === e.query.kind, 30),
                (0, a.kG)(!e.returnPartialData, 31),
                (0, a.kG)(!e.pollInterval, 32),
                this.fetchQuery(
                  t,
                  (0, o.pi)((0, o.pi)({}, e), {
                    query: this.transform(e.query),
                  })
                ).finally(function () {
                  return n.stopQuery(t);
                })
              );
            }),
            (e.prototype.generateQueryId = function () {
              return String(this.queryIdCounter++);
            }),
            (e.prototype.generateRequestId = function () {
              return this.requestIdCounter++;
            }),
            (e.prototype.generateMutationId = function () {
              return String(this.mutationIdCounter++);
            }),
            (e.prototype.stopQueryInStore = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
              var t = this.queries.get(e);
              t && t.stop();
            }),
            (e.prototype.clearStore = function (e) {
              return (
                void 0 === e && (e = { discardWatches: !0 }),
                this.cancelPendingFetches((0, a._K)(33)),
                this.queries.forEach(function (e) {
                  e.observableQuery ? (e.networkStatus = i.loading) : e.stop();
                }),
                this.mutationStore &&
                  (this.mutationStore = Object.create(null)),
                this.cache.reset(e)
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = "active");
              var n = new Map(),
                r = new Map(),
                i = new Set();
              return (
                Array.isArray(e) &&
                  e.forEach(function (e) {
                    "string" == typeof e
                      ? r.set(e, !1)
                      : (0, W.JW)(e)
                      ? r.set(t.transform(e), !1)
                      : (0, w.s)(e) && e.query && i.add(e);
                  }),
                this.queries.forEach(function (t, i) {
                  var o = t.observableQuery,
                    a = t.document;
                  if (o) {
                    if ("all" === e) {
                      n.set(i, o);
                      return;
                    }
                    var s = o.queryName;
                    if (
                      "standby" === o.options.fetchPolicy ||
                      ("active" === e && !o.hasObservers())
                    )
                      return;
                    ("active" === e || (s && r.has(s)) || (a && r.has(a))) &&
                      (n.set(i, o), s && r.set(s, !0), a && r.set(a, !0));
                  }
                }),
                i.size &&
                  i.forEach(function (e) {
                    var r = (0, J.X)("legacyOneTimeQuery"),
                      i = t
                        .getQuery(r)
                        .init({ document: e.query, variables: e.variables }),
                      s = new eo({
                        queryManager: t,
                        queryInfo: i,
                        options: (0, o.pi)((0, o.pi)({}, e), {
                          fetchPolicy: "network-only",
                        }),
                      });
                    (0, a.kG)(s.queryId === r),
                      i.setObservableQuery(s),
                      n.set(r, s);
                  }),
                !1 !== globalThis.__DEV__ &&
                  r.size &&
                  r.forEach(function (e, t) {
                    e ||
                      !1 === globalThis.__DEV__ ||
                      a.kG.warn("string" == typeof t ? 34 : 35, t);
                  }),
                n
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = !1);
              var n = [];
              return (
                this.getObservableQueries(e ? "all" : "active").forEach(
                  function (r, i) {
                    var o = r.options.fetchPolicy;
                    r.resetLastResults(),
                      (e || ("standby" !== o && "cache-only" !== o)) &&
                        n.push(r.refetch()),
                      t.getQuery(i).setDiff(null);
                  }
                ),
                this.broadcastQueries(),
                Promise.all(n)
              );
            }),
            (e.prototype.setObservableQuery = function (e) {
              this.getQuery(e.queryId).setObservableQuery(e);
            }),
            (e.prototype.startGraphQLSubscription = function (e) {
              var t = this,
                n = e.query,
                r = e.fetchPolicy,
                i = e.errorPolicy,
                o = void 0 === i ? "none" : i,
                a = e.variables,
                c = e.context,
                u = void 0 === c ? {} : c,
                l = e.extensions,
                f = void 0 === l ? {} : l;
              (n = this.transform(n)), (a = this.getVariables(n, a));
              var h = function (e) {
                return t.getObservableFromLink(n, u, e, f).map(function (i) {
                  "no-cache" !== r &&
                    (ep(i, o) &&
                      t.cache.write({
                        query: n,
                        result: i.data,
                        dataId: "ROOT_SUBSCRIPTION",
                        variables: e,
                      }),
                    t.broadcastQueries());
                  var a = G(i),
                    s = !!i.extensions && Array.isArray(i.extensions[A]);
                  if (a || s) {
                    var c = {};
                    if (
                      (a && (c.graphQLErrors = i.errors),
                      s && (c.protocolErrors = i.extensions[A]),
                      "none" === o || s)
                    )
                      throw new k(c);
                  }
                  return "ignore" === o && delete i.errors, i;
                });
              };
              if (this.getDocumentInfo(n).hasClientExports) {
                var d = this.localState.addExportedVariables(n, a, u).then(h);
                return new s.y(function (e) {
                  var t = null;
                  return (
                    d.then(function (n) {
                      return (t = n.subscribe(e));
                    }, e.error),
                    function () {
                      return t && t.unsubscribe();
                    }
                  );
                });
              }
              return h(a);
            }),
            (e.prototype.stopQuery = function (e) {
              this.stopQueryNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryNoBroadcast = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
            }),
            (e.prototype.removeQuery = function (e) {
              this.fetchCancelFns.delete(e),
                this.queries.has(e) &&
                  (this.getQuery(e).stop(), this.queries.delete(e));
            }),
            (e.prototype.broadcastQueries = function () {
              this.onBroadcast && this.onBroadcast(),
                this.queries.forEach(function (e) {
                  return e.notify();
                });
            }),
            (e.prototype.getLocalState = function () {
              return this.localState;
            }),
            (e.prototype.getObservableFromLink = function (e, t, n, r, i) {
              var a,
                u,
                l = this;
              void 0 === i &&
                (i =
                  null !== (a = null == t ? void 0 : t.queryDeduplication) &&
                  void 0 !== a
                    ? a
                    : this.queryDeduplication);
              var f = this.getDocumentInfo(e),
                h = f.serverQuery,
                p = f.clientQuery;
              if (h) {
                var y = this.inFlightLinkObservables,
                  m = this.link,
                  v = {
                    query: h,
                    variables: n,
                    operationName: (0, c.rY)(h) || void 0,
                    context: this.prepareContext(
                      (0, o.pi)((0, o.pi)({}, t), { forceFetch: !i })
                    ),
                    extensions: r,
                  };
                if (((t = v.context), i)) {
                  var g = (0, R.S)(h),
                    b = (0, U.B)(n),
                    w = y.lookup(g, b);
                  if (!(u = w.observable)) {
                    var A = new X([d(m, v)]);
                    (u = w.observable = A),
                      A.beforeNext(function () {
                        y.remove(g, b);
                      });
                  }
                } else u = new X([d(m, v)]);
              } else
                (u = new X([s.y.of({ data: {} })])),
                  (t = this.prepareContext(t));
              return (
                p &&
                  (u = V(u, function (e) {
                    return l.localState.runResolvers({
                      document: p,
                      remoteResult: e,
                      context: t,
                      variables: n,
                    });
                  })),
                u
              );
            }),
            (e.prototype.getResultsFromLink = function (e, t, n) {
              var r = (e.lastRequestId = this.generateRequestId()),
                o = this.cache.transformForLink(n.query);
              return V(
                this.getObservableFromLink(o, n.context, n.variables),
                function (a) {
                  var s = z(a),
                    c = s.length > 0,
                    u = n.errorPolicy;
                  if (r >= e.lastRequestId) {
                    if (c && "none" === u)
                      throw e.markError(new k({ graphQLErrors: s }));
                    e.markResult(a, o, n, t), e.markReady();
                  }
                  var l = { data: a.data, loading: !1, networkStatus: i.ready };
                  return (
                    c && "none" === u && (l.data = void 0),
                    c &&
                      "ignore" !== u &&
                      ((l.errors = s), (l.networkStatus = i.error)),
                    l
                  );
                },
                function (t) {
                  var n = C(t) ? t : new k({ networkError: t });
                  throw (r >= e.lastRequestId && e.markError(n), n);
                }
              );
            }),
            (e.prototype.fetchConcastWithInfo = function (e, t, n, r) {
              var o,
                a,
                s = this;
              void 0 === n && (n = i.loading), void 0 === r && (r = t.query);
              var c = this.getVariables(r, t.variables),
                u = this.getQuery(e),
                l = this.defaultOptions.watchQuery,
                f = t.fetchPolicy,
                h = void 0 === f ? (l && l.fetchPolicy) || "cache-first" : f,
                d = t.errorPolicy,
                p = void 0 === d ? (l && l.errorPolicy) || "none" : d,
                y = t.returnPartialData,
                m = t.notifyOnNetworkStatusChange,
                v = t.context,
                g = Object.assign({}, t, {
                  query: r,
                  variables: c,
                  fetchPolicy: h,
                  errorPolicy: p,
                  returnPartialData: void 0 !== y && y,
                  notifyOnNetworkStatusChange: void 0 !== m && m,
                  context: void 0 === v ? {} : v,
                }),
                b = function (e) {
                  g.variables = e;
                  var r = s.fetchQueryByPolicy(u, g, n);
                  return (
                    "standby" !== g.fetchPolicy &&
                      r.sources.length > 0 &&
                      u.observableQuery &&
                      u.observableQuery.applyNextFetchPolicy("after-fetch", t),
                    r
                  );
                },
                w = function () {
                  return s.fetchCancelFns.delete(e);
                };
              if (
                (this.fetchCancelFns.set(e, function (e) {
                  w(),
                    setTimeout(function () {
                      return o.cancel(e);
                    });
                }),
                this.getDocumentInfo(g.query).hasClientExports)
              )
                (o = new X(
                  this.localState
                    .addExportedVariables(g.query, g.variables, g.context)
                    .then(b)
                    .then(function (e) {
                      return e.sources;
                    })
                )),
                  (a = !0);
              else {
                var A = b(g.variables);
                (a = A.fromLink), (o = new X(A.sources));
              }
              return o.promise.then(w, w), { concast: o, fromLink: a };
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this,
                n = e.updateCache,
                r = e.include,
                i = e.optimistic,
                o = void 0 !== i && i,
                a = e.removeOptimistic,
                s =
                  void 0 === a ? (o ? (0, J.X)("refetchQueries") : void 0) : a,
                c = e.onQueryUpdated,
                u = new Map();
              r &&
                this.getObservableQueries(r).forEach(function (e, n) {
                  u.set(n, { oq: e, lastDiff: t.getQuery(n).getDiff() });
                });
              var l = new Map();
              return (
                n &&
                  this.cache.batch({
                    update: n,
                    optimistic: (o && s) || !1,
                    removeOptimistic: s,
                    onWatchUpdated: function (e, t, n) {
                      var r =
                        e.watcher instanceof ed && e.watcher.observableQuery;
                      if (r) {
                        if (c) {
                          u.delete(r.queryId);
                          var i = c(r, t, n);
                          return (
                            !0 === i && (i = r.refetch()),
                            !1 !== i && l.set(r, i),
                            i
                          );
                        }
                        null !== c &&
                          u.set(r.queryId, { oq: r, lastDiff: n, diff: t });
                      }
                    },
                  }),
                u.size &&
                  u.forEach(function (e, n) {
                    var r,
                      i = e.oq,
                      o = e.lastDiff,
                      a = e.diff;
                    if (c) {
                      if (!a) {
                        var s = i.queryInfo;
                        s.reset(), (a = s.getDiff());
                      }
                      r = c(i, a, o);
                    }
                    (c && !0 !== r) || (r = i.refetch()),
                      !1 !== r && l.set(i, r),
                      n.indexOf("legacyOneTimeQuery") >= 0 &&
                        t.stopQueryNoBroadcast(n);
                  }),
                s && this.cache.removeOptimistic(s),
                l
              );
            }),
            (e.prototype.fetchQueryByPolicy = function (e, t, n) {
              var r = this,
                a = t.query,
                c = t.variables,
                u = t.fetchPolicy,
                l = t.refetchWritePolicy,
                f = t.errorPolicy,
                h = t.returnPartialData,
                d = t.context,
                p = t.notifyOnNetworkStatusChange,
                y = e.networkStatus;
              e.init({ document: a, variables: c, networkStatus: n });
              var m = function () {
                  return e.getDiff();
                },
                v = function (t, n) {
                  void 0 === n && (n = e.networkStatus || i.loading);
                  var u = t.result;
                  !1 === globalThis.__DEV__ ||
                    h ||
                    (0, B.D)(u, {}) ||
                    ec(t.missing);
                  var l = function (e) {
                    return s.y.of(
                      (0, o.pi)(
                        { data: e, loading: $(n), networkStatus: n },
                        t.complete ? null : { partial: !0 }
                      )
                    );
                  };
                  return u && r.getDocumentInfo(a).hasForcedResolvers
                    ? r.localState
                        .runResolvers({
                          document: a,
                          remoteResult: { data: u },
                          context: d,
                          variables: c,
                          onlyRunForcedResolvers: !0,
                        })
                        .then(function (e) {
                          return l(e.data || void 0);
                        })
                    : "none" === f &&
                      n === i.refetch &&
                      Array.isArray(t.missing)
                    ? l(void 0)
                    : l(u);
                },
                g =
                  "no-cache" === u
                    ? 0
                    : n === i.refetch && "merge" !== l
                    ? 1
                    : 2,
                b = function () {
                  return r.getResultsFromLink(e, g, {
                    query: a,
                    variables: c,
                    context: d,
                    fetchPolicy: u,
                    errorPolicy: f,
                  });
                },
                w = p && "number" == typeof y && y !== n && $(n);
              switch (u) {
                default:
                case "cache-first":
                  var A = m();
                  if (A.complete)
                    return { fromLink: !1, sources: [v(A, e.markReady())] };
                  if (h || w) return { fromLink: !0, sources: [v(A), b()] };
                  return { fromLink: !0, sources: [b()] };
                case "cache-and-network":
                  var A = m();
                  if (A.complete || h || w)
                    return { fromLink: !0, sources: [v(A), b()] };
                  return { fromLink: !0, sources: [b()] };
                case "cache-only":
                  return { fromLink: !1, sources: [v(m(), e.markReady())] };
                case "network-only":
                  if (w) return { fromLink: !0, sources: [v(m()), b()] };
                  return { fromLink: !0, sources: [b()] };
                case "no-cache":
                  if (w)
                    return { fromLink: !0, sources: [v(e.getDiff()), b()] };
                  return { fromLink: !0, sources: [b()] };
                case "standby":
                  return { fromLink: !1, sources: [] };
              }
            }),
            (e.prototype.getQuery = function (e) {
              return (
                e &&
                  !this.queries.has(e) &&
                  this.queries.set(e, new ed(this, e)),
                this.queries.get(e)
              );
            }),
            (e.prototype.prepareContext = function (e) {
              void 0 === e && (e = {});
              var t = this.localState.prepareContext(e);
              return (0, o.pi)(
                (0, o.pi)((0, o.pi)({}, this.defaultContext), t),
                { clientAwareness: this.clientAwareness }
              );
            }),
            e
          );
        })(),
        eA = n(55459);
      function eC(e) {
        return (
          e.kind === eA.h.FIELD ||
          e.kind === eA.h.FRAGMENT_SPREAD ||
          e.kind === eA.h.INLINE_FRAGMENT
        );
      }
      var eE = n(86275),
        ek = n(86048),
        eO = (function () {
          function e(e) {
            var t = e.cache,
              n = e.client,
              r = e.resolvers,
              i = e.fragmentMatcher;
            (this.selectionsToResolveCache = new WeakMap()),
              (this.cache = t),
              n && (this.client = n),
              r && this.addResolvers(r),
              i && this.setFragmentMatcher(i);
          }
          return (
            (e.prototype.addResolvers = function (e) {
              var t = this;
              (this.resolvers = this.resolvers || {}),
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      t.resolvers = (0, I.Ee)(t.resolvers, e);
                    })
                  : (this.resolvers = (0, I.Ee)(this.resolvers, e));
            }),
            (e.prototype.setResolvers = function (e) {
              (this.resolvers = {}), this.addResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.resolvers || {};
            }),
            (e.prototype.runResolvers = function (e) {
              return (0, o.mG)(this, arguments, void 0, function (e) {
                var t = e.document,
                  n = e.remoteResult,
                  r = e.context,
                  i = e.variables,
                  a = e.onlyRunForcedResolvers,
                  s = void 0 !== a && a;
                return (0, o.Jh)(this, function (e) {
                  return t
                    ? [
                        2,
                        this.resolveDocument(
                          t,
                          n.data,
                          r,
                          i,
                          this.fragmentMatcher,
                          s
                        ).then(function (e) {
                          return (0,
                          o.pi)((0, o.pi)({}, n), { data: e.result });
                        }),
                      ]
                    : [2, n];
                });
              });
            }),
            (e.prototype.setFragmentMatcher = function (e) {
              this.fragmentMatcher = e;
            }),
            (e.prototype.getFragmentMatcher = function () {
              return this.fragmentMatcher;
            }),
            (e.prototype.clientQuery = function (e) {
              return (0, y.FS)(["client"], e) && this.resolvers ? e : null;
            }),
            (e.prototype.serverQuery = function (e) {
              return (0, F.ob)(e);
            }),
            (e.prototype.prepareContext = function (e) {
              var t = this.cache;
              return (0, o.pi)((0, o.pi)({}, e), {
                cache: t,
                getCacheKey: function (e) {
                  return t.identify(e);
                },
              });
            }),
            (e.prototype.addExportedVariables = function (e) {
              return (0, o.mG)(this, arguments, void 0, function (e, t, n) {
                return (
                  void 0 === t && (t = {}),
                  void 0 === n && (n = {}),
                  (0, o.Jh)(this, function (r) {
                    return e
                      ? [
                          2,
                          this.resolveDocument(
                            e,
                            this.buildRootValueFromCache(e, t) || {},
                            this.prepareContext(n),
                            t
                          ).then(function (e) {
                            return (0,
                            o.pi)((0, o.pi)({}, t), e.exportedVariables);
                          }),
                        ]
                      : [2, (0, o.pi)({}, t)];
                  })
                );
              });
            }),
            (e.prototype.shouldForceResolvers = function (e) {
              var t = !1;
              return (
                (0, M.Vn)(e, {
                  Directive: {
                    enter: function (e) {
                      if (
                        "client" === e.name.value &&
                        e.arguments &&
                        (t = e.arguments.some(function (e) {
                          return (
                            "always" === e.name.value &&
                            "BooleanValue" === e.value.kind &&
                            !0 === e.value.value
                          );
                        }))
                      )
                        return M.$_;
                    },
                  },
                }),
                t
              );
            }),
            (e.prototype.buildRootValueFromCache = function (e, t) {
              return this.cache.diff({
                query: (0, F.aL)(e),
                variables: t,
                returnPartialData: !0,
                optimistic: !1,
              }).result;
            }),
            (e.prototype.resolveDocument = function (e, t) {
              return (0, o.mG)(
                this,
                arguments,
                void 0,
                function (e, t, n, r, i, a) {
                  var s, u, l, f, h, d, p, y, m, v;
                  return (
                    void 0 === n && (n = {}),
                    void 0 === r && (r = {}),
                    void 0 === i &&
                      (i = function () {
                        return !0;
                      }),
                    void 0 === a && (a = !1),
                    (0, o.Jh)(this, function (g) {
                      return (
                        (s = (0, c.p$)(e)),
                        (u = (0, c.kU)(e)),
                        (l = (0, eE.F)(u)),
                        (f = this.collectSelectionsToResolve(s, l)),
                        (d = (h = s.operation)
                          ? h.charAt(0).toUpperCase() + h.slice(1)
                          : "Query"),
                        (p = this),
                        (y = p.cache),
                        (m = p.client),
                        (v = {
                          fragmentMap: l,
                          context: (0, o.pi)((0, o.pi)({}, n), {
                            cache: y,
                            client: m,
                          }),
                          variables: r,
                          fragmentMatcher: i,
                          defaultOperationType: d,
                          exportedVariables: {},
                          selectionsToResolve: f,
                          onlyRunForcedResolvers: a,
                        }),
                        [
                          2,
                          this.resolveSelectionSet(
                            s.selectionSet,
                            !1,
                            t,
                            v
                          ).then(function (e) {
                            return {
                              result: e,
                              exportedVariables: v.exportedVariables,
                            };
                          }),
                        ]
                      );
                    })
                  );
                }
              );
            }),
            (e.prototype.resolveSelectionSet = function (e, t, n, r) {
              return (0, o.mG)(this, void 0, void 0, function () {
                var i,
                  s,
                  c,
                  u,
                  l,
                  f = this;
                return (0, o.Jh)(this, function (h) {
                  return (
                    (i = r.fragmentMap),
                    (s = r.context),
                    (c = r.variables),
                    (u = [n]),
                    (l = function (e) {
                      return (0, o.mG)(f, void 0, void 0, function () {
                        var l, f;
                        return (0, o.Jh)(this, function (o) {
                          return (t || r.selectionsToResolve.has(e)) &&
                            (0, y.LZ)(e, c)
                            ? (0, W.My)(e)
                              ? [
                                  2,
                                  this.resolveField(e, t, n, r).then(function (
                                    t
                                  ) {
                                    var n;
                                    void 0 !== t &&
                                      u.push((((n = {})[(0, W.u2)(e)] = t), n));
                                  }),
                                ]
                              : ((0, W.Ao)(e)
                                  ? (l = e)
                                  : ((l = i[e.name.value]),
                                    (0, a.kG)(l, 18, e.name.value)),
                                l &&
                                  l.typeCondition &&
                                  ((f = l.typeCondition.name.value),
                                  r.fragmentMatcher(n, f, s)))
                              ? [
                                  2,
                                  this.resolveSelectionSet(
                                    l.selectionSet,
                                    t,
                                    n,
                                    r
                                  ).then(function (e) {
                                    u.push(e);
                                  }),
                                ]
                              : [2]
                            : [2];
                        });
                      });
                    }),
                    [
                      2,
                      Promise.all(e.selections.map(l)).then(function () {
                        return (0, I.bw)(u);
                      }),
                    ]
                  );
                });
              });
            }),
            (e.prototype.resolveField = function (e, t, n, r) {
              return (0, o.mG)(this, void 0, void 0, function () {
                var i,
                  a,
                  s,
                  c,
                  u,
                  l,
                  f,
                  h,
                  d,
                  p = this;
                return (0, o.Jh)(this, function (o) {
                  return n
                    ? ((i = r.variables),
                      (c = (a = e.name.value) !== (s = (0, W.u2)(e))),
                      (l = Promise.resolve((u = n[s] || n[a]))),
                      (!r.onlyRunForcedResolvers ||
                        this.shouldForceResolvers(e)) &&
                        ((f = n.__typename || r.defaultOperationType),
                        (h = this.resolvers && this.resolvers[f]) &&
                          (d = h[c ? a : s]) &&
                          (l = Promise.resolve(
                            ek.ab.withValue(this.cache, d, [
                              n,
                              (0, W.NC)(e, i),
                              r.context,
                              { field: e, fragmentMap: r.fragmentMap },
                            ])
                          ))),
                      [
                        2,
                        l.then(function (n) {
                          if (
                            (void 0 === n && (n = u),
                            e.directives &&
                              e.directives.forEach(function (e) {
                                "export" === e.name.value &&
                                  e.arguments &&
                                  e.arguments.forEach(function (e) {
                                    "as" === e.name.value &&
                                      "StringValue" === e.value.kind &&
                                      (r.exportedVariables[e.value.value] = n);
                                  });
                              }),
                            !e.selectionSet || null == n)
                          )
                            return n;
                          var i,
                            o,
                            a =
                              null !==
                                (o =
                                  null === (i = e.directives) || void 0 === i
                                    ? void 0
                                    : i.some(function (e) {
                                        return "client" === e.name.value;
                                      })) &&
                              void 0 !== o &&
                              o;
                          return Array.isArray(n)
                            ? p.resolveSubSelectedArray(e, t || a, n, r)
                            : e.selectionSet
                            ? p.resolveSelectionSet(
                                e.selectionSet,
                                t || a,
                                n,
                                r
                              )
                            : void 0;
                        }),
                      ])
                    : [2, null];
                });
              });
            }),
            (e.prototype.resolveSubSelectedArray = function (e, t, n, r) {
              var i = this;
              return Promise.all(
                n.map(function (n) {
                  return null === n
                    ? null
                    : Array.isArray(n)
                    ? i.resolveSubSelectedArray(e, t, n, r)
                    : e.selectionSet
                    ? i.resolveSelectionSet(e.selectionSet, t, n, r)
                    : void 0;
                })
              );
            }),
            (e.prototype.collectSelectionsToResolve = function (e, t) {
              var n = function (e) {
                  return !Array.isArray(e);
                },
                r = this.selectionsToResolveCache;
              return (function e(i) {
                if (!r.has(i)) {
                  var o = new Set();
                  r.set(i, o),
                    (0, M.Vn)(i, {
                      Directive: function (e, t, r, i, a) {
                        "client" === e.name.value &&
                          a.forEach(function (e) {
                            n(e) && eC(e) && o.add(e);
                          });
                      },
                      FragmentSpread: function (r, i, s, c, u) {
                        var l = t[r.name.value];
                        (0, a.kG)(l, 19, r.name.value);
                        var f = e(l);
                        f.size > 0 &&
                          (u.forEach(function (e) {
                            n(e) && eC(e) && o.add(e);
                          }),
                          o.add(r),
                          f.forEach(function (e) {
                            o.add(e);
                          }));
                      },
                    });
                }
                return r.get(i);
              })(e);
            }),
            e
          );
        })();
      function eI(e, t) {
        return (0, ee.o)(
          e,
          t,
          t.variables && {
            variables: (0, ee.o)(
              (0, o.pi)((0, o.pi)({}, e && e.variables), t.variables)
            ),
          }
        );
      }
      var eS = n(89660),
        eD = !1,
        eN = (function () {
          function e(e) {
            var t = this;
            if (
              ((this.resetStoreCallbacks = []),
              (this.clearStoreCallbacks = []),
              !e.cache)
            )
              throw (0, a._K)(15);
            var n = e.uri,
              r = e.credentials,
              i = e.headers,
              s = e.cache,
              c = e.documentTransform,
              u = e.ssrMode,
              l = void 0 !== u && u,
              f = e.ssrForceFetchDelay,
              d = void 0 === f ? 0 : f,
              y = e.connectToDevTools,
              m = e.queryDeduplication,
              v = void 0 === m || m,
              g = e.defaultOptions,
              b = e.defaultContext,
              w = e.assumeImmutableResults,
              A = void 0 === w ? s.assumeImmutableResults : w,
              C = e.resolvers,
              E = e.typeDefs,
              k = e.fragmentMatcher,
              O = e.name,
              I = e.version,
              S = e.devtools,
              D = e.link;
            D ||
              (D = n
                ? new q({ uri: n, credentials: r, headers: i })
                : h.empty()),
              (this.link = D),
              (this.cache = s),
              (this.disableNetworkFetches = l || d > 0),
              (this.queryDeduplication = v),
              (this.defaultOptions = g || Object.create(null)),
              (this.typeDefs = E),
              (this.devtoolsConfig = (0, o.pi)((0, o.pi)({}, S), {
                enabled: (null == S ? void 0 : S.enabled) || y,
              })),
              void 0 === this.devtoolsConfig.enabled &&
                (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__),
              d &&
                setTimeout(function () {
                  return (t.disableNetworkFetches = !1);
                }, d),
              (this.watchQuery = this.watchQuery.bind(this)),
              (this.query = this.query.bind(this)),
              (this.mutate = this.mutate.bind(this)),
              (this.watchFragment = this.watchFragment.bind(this)),
              (this.resetStore = this.resetStore.bind(this)),
              (this.reFetchObservableQueries =
                this.reFetchObservableQueries.bind(this)),
              (this.version = p.i),
              (this.localState = new eO({
                cache: s,
                client: this,
                resolvers: C,
                fragmentMatcher: k,
              })),
              (this.queryManager = new ew({
                cache: this.cache,
                link: this.link,
                defaultOptions: this.defaultOptions,
                defaultContext: b,
                documentTransform: c,
                queryDeduplication: v,
                ssrMode: l,
                clientAwareness: { name: O, version: I },
                localState: this.localState,
                assumeImmutableResults: A,
                onBroadcast: this.devtoolsConfig.enabled
                  ? function () {
                      t.devToolsHookCb &&
                        t.devToolsHookCb({
                          action: {},
                          state: {
                            queries: t.queryManager.getQueryStore(),
                            mutations: t.queryManager.mutationStore || {},
                          },
                          dataWithOptimisticResults: t.cache.extract(!0),
                        });
                    }
                  : void 0,
              })),
              this.devtoolsConfig.enabled && this.connectToDevTools();
          }
          return (
            (e.prototype.connectToDevTools = function () {
              if ("undefined" != typeof window) {
                var e = window,
                  t = Symbol.for("apollo.devtools");
                (e[t] = e[t] || []).push(this),
                  (e.__APOLLO_CLIENT__ = this),
                  !eD &&
                    !1 !== globalThis.__DEV__ &&
                    ((eD = !0),
                    window.document &&
                      window.top === window.self &&
                      /^(https?|file):$/.test(window.location.protocol) &&
                      setTimeout(function () {
                        if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                          var e = window.navigator,
                            t = e && e.userAgent,
                            n = void 0;
                          "string" == typeof t &&
                            (t.indexOf("Chrome/") > -1
                              ? (n =
                                  "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                              : t.indexOf("Firefox/") > -1 &&
                                (n =
                                  "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                            n &&
                              !1 !== globalThis.__DEV__ &&
                              a.kG.log(
                                "Download the Apollo DevTools for a better development experience: %s",
                                n
                              );
                        }
                      }, 1e4));
              }
            }),
            Object.defineProperty(e.prototype, "documentTransform", {
              get: function () {
                return this.queryManager.documentTransform;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.stop = function () {
              this.queryManager.stop();
            }),
            (e.prototype.watchQuery = function (e) {
              return (
                this.defaultOptions.watchQuery &&
                  (e = eI(this.defaultOptions.watchQuery, e)),
                this.disableNetworkFetches &&
                  ("network-only" === e.fetchPolicy ||
                    "cache-and-network" === e.fetchPolicy) &&
                  (e = (0, o.pi)((0, o.pi)({}, e), {
                    fetchPolicy: "cache-first",
                  })),
                this.queryManager.watchQuery(e)
              );
            }),
            (e.prototype.query = function (e) {
              return (
                this.defaultOptions.query &&
                  (e = eI(this.defaultOptions.query, e)),
                (0, a.kG)("cache-and-network" !== e.fetchPolicy, 16),
                this.disableNetworkFetches &&
                  "network-only" === e.fetchPolicy &&
                  (e = (0, o.pi)((0, o.pi)({}, e), {
                    fetchPolicy: "cache-first",
                  })),
                this.queryManager.query(e)
              );
            }),
            (e.prototype.mutate = function (e) {
              return (
                this.defaultOptions.mutate &&
                  (e = eI(this.defaultOptions.mutate, e)),
                this.queryManager.mutate(e)
              );
            }),
            (e.prototype.subscribe = function (e) {
              return this.queryManager.startGraphQLSubscription(e);
            }),
            (e.prototype.readQuery = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readQuery(e, t);
            }),
            (e.prototype.watchFragment = function (e) {
              return this.cache.watchFragment(e);
            }),
            (e.prototype.readFragment = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readFragment(e, t);
            }),
            (e.prototype.writeQuery = function (e) {
              var t = this.cache.writeQuery(e);
              return (
                !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
              );
            }),
            (e.prototype.writeFragment = function (e) {
              var t = this.cache.writeFragment(e);
              return (
                !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
              );
            }),
            (e.prototype.__actionHookForDevTools = function (e) {
              this.devToolsHookCb = e;
            }),
            (e.prototype.__requestRaw = function (e) {
              return d(this.link, e);
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !1 });
                })
                .then(function () {
                  return Promise.all(
                    e.resetStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                })
                .then(function () {
                  return e.reFetchObservableQueries();
                });
            }),
            (e.prototype.clearStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !0 });
                })
                .then(function () {
                  return Promise.all(
                    e.clearStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                });
            }),
            (e.prototype.onResetStore = function (e) {
              var t = this;
              return (
                this.resetStoreCallbacks.push(e),
                function () {
                  t.resetStoreCallbacks = t.resetStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.onClearStore = function (e) {
              var t = this;
              return (
                this.clearStoreCallbacks.push(e),
                function () {
                  t.clearStoreCallbacks = t.clearStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              return this.queryManager.reFetchObservableQueries(e);
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this.queryManager.refetchQueries(e),
                n = [],
                r = [];
              t.forEach(function (e, t) {
                n.push(t), r.push(e);
              });
              var i = Promise.all(r);
              return (
                (i.queries = n),
                (i.results = r),
                i.catch(function (e) {
                  !1 !== globalThis.__DEV__ && a.kG.debug(17, e);
                }),
                i
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              return (
                void 0 === e && (e = "active"),
                this.queryManager.getObservableQueries(e)
              );
            }),
            (e.prototype.extract = function (e) {
              return this.cache.extract(e);
            }),
            (e.prototype.restore = function (e) {
              return this.cache.restore(e);
            }),
            (e.prototype.addResolvers = function (e) {
              this.localState.addResolvers(e);
            }),
            (e.prototype.setResolvers = function (e) {
              this.localState.setResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.localState.getResolvers();
            }),
            (e.prototype.setLocalStateFragmentMatcher = function (e) {
              this.localState.setFragmentMatcher(e);
            }),
            (e.prototype.setLink = function (e) {
              this.link = this.queryManager.link = e;
            }),
            Object.defineProperty(e.prototype, "defaultContext", {
              get: function () {
                return this.queryManager.defaultContext;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
      !1 !== globalThis.__DEV__ && (eN.prototype.getMemoryInternals = eS.su);
    },
    3987: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return u;
        },
      });
      var r = n(31974),
        i = n(36510),
        o = n(11739),
        a = n(86275),
        s = n(85812),
        c = n(44339);
      function u(e, t, n, u) {
        var f = t.data,
          h = (0, r._T)(t, ["data"]),
          d = n.data,
          p = (0, r._T)(n, ["data"]);
        return (
          (0, i.Z)(h, p) &&
          (function e(t, n, r, o) {
            if (n === r) return !0;
            var u = new Set();
            return t.selections.every(function (t) {
              if (u.has(t) || (u.add(t), !(0, s.LZ)(t, o.variables) || l(t)))
                return !0;
              if ((0, c.My)(t)) {
                var f = (0, c.u2)(t),
                  h = n && n[f],
                  d = r && r[f],
                  p = t.selectionSet;
                if (!p) return (0, i.Z)(h, d);
                var y = Array.isArray(h),
                  m = Array.isArray(d);
                if (y !== m) return !1;
                if (y && m) {
                  var v = h.length;
                  if (d.length !== v) return !1;
                  for (var g = 0; g < v; ++g)
                    if (!e(p, h[g], d[g], o)) return !1;
                  return !0;
                }
                return e(p, h, d, o);
              }
              var b = (0, a.hi)(t, o.fragmentMap);
              if (b) return !!l(b) || e(b.selectionSet, n, r, o);
            });
          })((0, o.p$)(e).selectionSet, f, d, {
            fragmentMap: (0, a.F)((0, o.kU)(e)),
            variables: u,
          })
        );
      }
      function l(e) {
        return !!e.directives && e.directives.some(f);
      }
      function f(e) {
        return "nonreactive" === e.name.value;
      }
    },
    31974: function (e, t, n) {
      "use strict";
      n.d(t, {
        Jh: function () {
          return c;
        },
        ZT: function () {
          return i;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return u;
        },
        mG: function () {
          return s;
        },
        pi: function () {
          return o;
        },
      });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      function s(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function c(e, t) {
        var n,
          r,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = s(0)),
          (a.throw = s(1)),
          (a.return = s(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(s) {
          return function (c) {
            return (function (s) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), s[0] && (o = 0)), o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & s[0]
                          ? r.return
                          : s[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, s[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (r = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, c]);
          };
        }
      }
      function u(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
    66247: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return c;
        },
      });
      var r = n(31974),
        i = n(79930),
        o = n(87637),
        a = n.t(o, 2),
        s = n(38191).aS
          ? Symbol.for("__APOLLO_CONTEXT__")
          : "__APOLLO_CONTEXT__",
        c = function (e) {
          var t,
            n = e.client,
            c = e.children,
            u =
              ((0, i.kG)("createContext" in a, 46),
              (t = o.createContext[s]) ||
                (Object.defineProperty(o.createContext, s, {
                  value: (t = o.createContext({})),
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                }),
                (t.displayName = "ApolloContext")),
              t),
            l = o.useContext(u),
            f = o.useMemo(
              function () {
                return (0, r.pi)((0, r.pi)({}, l), { client: n || l.client });
              },
              [l, n]
            );
          return (
            (0, i.kG)(f.client, 47),
            o.createElement(u.Provider, { value: f }, c)
          );
        };
    },
    50040: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return c;
        },
        s: function () {
          return s;
        },
      });
      var r = n(72074),
        i = n(64565),
        o = new WeakSet();
      function a(e) {
        !(e.size <= (e.max || -1)) &&
          (o.has(e) ||
            (o.add(e),
            setTimeout(function () {
              e.clean(), o.delete(e);
            }, 100)));
      }
      var s = function (e, t) {
          var n = new r.k(e, t);
          return (
            (n.set = function (e, t) {
              var n = r.k.prototype.set.call(this, e, t);
              return a(this), n;
            }),
            n
          );
        },
        c = function (e, t) {
          var n = new i.e(e, t);
          return (
            (n.set = function (e, t) {
              var n = i.e.prototype.set.call(this, e, t);
              return a(this), n;
            }),
            n
          );
        };
    },
    89660: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kb: function () {
          return u;
        },
        q4: function () {
          return c;
        },
        su: function () {
          return s;
        },
        zP: function () {
          return a;
        },
      });
      var r = n(31974),
        i = n(6431),
        o = {};
      function a(e, t) {
        o[e] = t;
      }
      var s =
          !1 !== globalThis.__DEV__
            ? function () {
                var e, t, n, a, s;
                if (!(!1 !== globalThis.__DEV__))
                  throw Error("only supported in development mode");
                return {
                  limits: Object.fromEntries(
                    Object.entries({
                      parser: 1e3,
                      canonicalStringify: 1e3,
                      print: 2e3,
                      "documentTransform.cache": 2e3,
                      "queryManager.getDocumentInfo": 2e3,
                      "PersistedQueryLink.persistedQueryHashes": 2e3,
                      "fragmentRegistry.transform": 2e3,
                      "fragmentRegistry.lookup": 1e3,
                      "fragmentRegistry.findFragmentSpreads": 4e3,
                      "cache.fragmentQueryDocuments": 1e3,
                      "removeTypenameFromVariables.getVariableDefinitions": 2e3,
                      "inMemoryCache.maybeBroadcastWatch": 5e3,
                      "inMemoryCache.executeSelectionSet": 5e4,
                      "inMemoryCache.executeSubSelectedArray": 1e4,
                    }).map(function (e) {
                      var t = e[0],
                        n = e[1];
                      return [t, i.Q[t] || n];
                    })
                  ),
                  sizes: (0, r.pi)(
                    {
                      print:
                        null === (e = o.print) || void 0 === e
                          ? void 0
                          : e.call(o),
                      parser:
                        null === (t = o.parser) || void 0 === t
                          ? void 0
                          : t.call(o),
                      canonicalStringify:
                        null === (n = o.canonicalStringify) || void 0 === n
                          ? void 0
                          : n.call(o),
                      links: (function e(t) {
                        var n;
                        return t
                          ? (0, r.ev)(
                              (0, r.ev)(
                                [
                                  null ===
                                    (n =
                                      null == t
                                        ? void 0
                                        : t.getMemoryInternals) || void 0 === n
                                    ? void 0
                                    : n.call(t),
                                ],
                                e(null == t ? void 0 : t.left),
                                !0
                              ),
                              e(null == t ? void 0 : t.right),
                              !0
                            ).filter(h)
                          : [];
                      })(this.link),
                      queryManager: {
                        getDocumentInfo: this.queryManager.transformCache.size,
                        documentTransforms: d(
                          this.queryManager.documentTransform
                        ),
                      },
                    },
                    null === (s = (a = this.cache).getMemoryInternals) ||
                      void 0 === s
                      ? void 0
                      : s.call(a)
                  ),
                };
              }
            : void 0,
        c =
          !1 !== globalThis.__DEV__
            ? function () {
                var e = this.config.fragments;
                return (0, r.pi)((0, r.pi)({}, l.apply(this)), {
                  addTypenameDocumentTransform: d(this.addTypenameTransform),
                  inMemoryCache: {
                    executeSelectionSet: f(
                      this.storeReader.executeSelectionSet
                    ),
                    executeSubSelectedArray: f(
                      this.storeReader.executeSubSelectedArray
                    ),
                    maybeBroadcastWatch: f(this.maybeBroadcastWatch),
                  },
                  fragmentRegistry: {
                    findFragmentSpreads: f(
                      null == e ? void 0 : e.findFragmentSpreads
                    ),
                    lookup: f(null == e ? void 0 : e.lookup),
                    transform: f(null == e ? void 0 : e.transform),
                  },
                });
              }
            : void 0,
        u = !1 !== globalThis.__DEV__ ? l : void 0;
      function l() {
        return { cache: { fragmentQueryDocuments: f(this.getFragmentDoc) } };
      }
      function f(e) {
        return e && "dirtyKey" in e ? e.size : void 0;
      }
      function h(e) {
        return null != e;
      }
      function d(e) {
        return (function e(t) {
          return t
            ? (0, r.ev)(
                (0, r.ev)(
                  [f(null == t ? void 0 : t.performWork)],
                  e(null == t ? void 0 : t.left),
                  !0
                ),
                e(null == t ? void 0 : t.right),
                !0
              ).filter(h)
            : [];
        })(e).map(function (e) {
          return { cache: e };
        });
      }
    },
    6431: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return a;
        },
      });
      var r = n(31974),
        i = n(79930),
        o = Symbol.for("apollo.cacheSize"),
        a = (0, r.pi)({}, i.CO[o]);
    },
    28607: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return i;
        },
        k: function () {
          return r;
        },
      });
      var r = Array.isArray;
      function i(e) {
        return Array.isArray(e) && e.length > 0;
      }
    },
    38191: function (e, t, n) {
      "use strict";
      n.d(t, {
        DN: function () {
          return c;
        },
        aS: function () {
          return s;
        },
        mr: function () {
          return o;
        },
        sy: function () {
          return a;
        },
      });
      var r = n(79930),
        i =
          "ReactNative" ==
          (0, r.wY)(function () {
            return navigator.product;
          }),
        o = "function" == typeof WeakMap && !(i && !global.HermesInternal),
        a = "function" == typeof WeakSet,
        s = "function" == typeof Symbol && "function" == typeof Symbol.for,
        c = s && Symbol.asyncIterator;
      (0, r.wY)(function () {
        return window.document.createElement;
      }),
        (0, r.wY)(function () {
          return navigator.userAgent.indexOf("jsdom") >= 0;
        });
    },
    97440: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return s;
        },
      });
      var r,
        i = n(50040),
        o = n(6431),
        a = n(89660),
        s = Object.assign(
          function (e) {
            return JSON.stringify(e, c);
          },
          {
            reset: function () {
              r = new i.L(o.Q.canonicalStringify || 1e3);
            },
          }
        );
      function c(e, t) {
        if (t && "object" == typeof t) {
          var n = Object.getPrototypeOf(t);
          if (n === Object.prototype || null === n) {
            var i = Object.keys(t);
            if (i.every(u)) return t;
            var o = JSON.stringify(i),
              a = r.get(o);
            if (!a) {
              i.sort();
              var s = JSON.stringify(i);
              (a = r.get(s) || i), r.set(o, a), r.set(s, a);
            }
            var c = Object.create(n);
            return (
              a.forEach(function (e) {
                c[e] = t[e];
              }),
              c
            );
          }
        }
        return t;
      }
      function u(e, t, n) {
        return 0 === t || n[t - 1] <= e;
      }
      !1 !== globalThis.__DEV__ &&
        (0, a.zP)("canonicalStringify", function () {
          return r.size;
        }),
        s.reset();
    },
    62566: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return i;
        },
      });
      var r = Object.prototype.toString;
      function i(e) {
        return (function e(t, n) {
          switch (r.call(t)) {
            case "[object Array]":
              if ((n = n || new Map()).has(t)) return n.get(t);
              var i = t.slice(0);
              return (
                n.set(t, i),
                i.forEach(function (t, r) {
                  i[r] = e(t, n);
                }),
                i
              );
            case "[object Object]":
              if ((n = n || new Map()).has(t)) return n.get(t);
              var o = Object.create(Object.getPrototypeOf(t));
              return (
                n.set(t, o),
                Object.keys(t).forEach(function (r) {
                  o[r] = e(t[r], n);
                }),
                o
              );
            default:
              return t;
          }
        })(e);
      }
    },
    18865: function (e, t, n) {
      "use strict";
      function r() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = Object.create(null);
        return (
          e.forEach(function (e) {
            e &&
              Object.keys(e).forEach(function (t) {
                var r = e[t];
                void 0 !== r && (n[t] = r);
              });
          }),
          n
        );
      }
      n.d(t, {
        o: function () {
          return r;
        },
      });
    },
    18333: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return i;
        },
      });
      var r = new Map();
      function i(e) {
        var t = r.get(e) || 1;
        return (
          r.set(e, t + 1),
          ""
            .concat(e, ":")
            .concat(t, ":")
            .concat(Math.random().toString(36).slice(2))
        );
      }
    },
    93592: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ee: function () {
          return a;
        },
        bw: function () {
          return s;
        },
        w0: function () {
          return u;
        },
      });
      var r = n(31974),
        i = n(88550),
        o = Object.prototype.hasOwnProperty;
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return s(e);
      }
      function s(e) {
        var t = e[0] || {},
          n = e.length;
        if (n > 1)
          for (var r = new u(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
        return t;
      }
      var c = function (e, t, n) {
          return this.merge(e[n], t[n]);
        },
        u = (function () {
          function e(e) {
            void 0 === e && (e = c),
              (this.reconciler = e),
              (this.isObject = i.s),
              (this.pastCopies = new Set());
          }
          return (
            (e.prototype.merge = function (e, t) {
              for (var n = this, a = [], s = 2; s < arguments.length; s++)
                a[s - 2] = arguments[s];
              return (0, i.s)(t) && (0, i.s)(e)
                ? (Object.keys(t).forEach(function (i) {
                    if (o.call(e, i)) {
                      var s = e[i];
                      if (t[i] !== s) {
                        var c = n.reconciler.apply(
                          n,
                          (0, r.ev)([e, t, i], a, !1)
                        );
                        c !== s && ((e = n.shallowCopyForMerge(e))[i] = c);
                      }
                    } else (e = n.shallowCopyForMerge(e))[i] = t[i];
                  }),
                  e)
                : t;
            }),
            (e.prototype.shallowCopyForMerge = function (e) {
              return (
                (0, i.s)(e) &&
                  !this.pastCopies.has(e) &&
                  ((e = Array.isArray(e)
                    ? e.slice(0)
                    : (0, r.pi)({ __proto__: Object.getPrototypeOf(e) }, e)),
                  this.pastCopies.add(e)),
                e
              );
            }),
            e
          );
        })();
    },
    88550: function (e, t, n) {
      "use strict";
      function r(e) {
        return null !== e && "object" == typeof e;
      }
      n.d(t, {
        s: function () {
          return r;
        },
      });
    },
    91286: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var r = n(18333);
      function i(e, t) {
        void 0 === t && (t = 0);
        var n = (0, r.X)("stringifyForDisplay");
        return JSON.stringify(
          e,
          function (e, t) {
            return void 0 === t ? n : t;
          },
          t
        )
          .split(JSON.stringify(n))
          .join("<undefined>");
      }
    },
    79930: function (e, t, n) {
      "use strict";
      n.d(t, {
        CO: function () {
          return y;
        },
        kG: function () {
          return g;
        },
        wY: function () {
          return p;
        },
        _K: function () {
          return b;
        },
      });
      var r,
        i = function (e, t) {
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
        };
      "function" == typeof SuppressedError && SuppressedError;
      var o = "Invariant Violation",
        a = Object.setPrototypeOf,
        s =
          void 0 === a
            ? function (e, t) {
                return (e.__proto__ = t), e;
              }
            : a,
        c = (function (e) {
          function t(n) {
            void 0 === n && (n = o);
            var r =
              e.call(
                this,
                "number" == typeof n
                  ? o +
                      ": " +
                      n +
                      " (see https://github.com/apollographql/invariant-packages)"
                  : n
              ) || this;
            return (r.framesToPop = 1), (r.name = o), s(r, t.prototype), r;
          }
          return (
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            })(t, e),
            t
          );
        })(Error);
      function u(e, t) {
        if (!e) throw new c(t);
      }
      var l = ["debug", "log", "warn", "error", "silent"],
        f = l.indexOf("log");
      function h(e) {
        return function () {
          if (l.indexOf(e) >= f)
            return (console[e] || console.log).apply(console, arguments);
        };
      }
      ((r = u || (u = {})).debug = h("debug")),
        (r.log = h("log")),
        (r.warn = h("warn")),
        (r.error = h("error"));
      var d = n(88776);
      function p(e) {
        try {
          return e();
        } catch (e) {}
      }
      var y =
          p(function () {
            return globalThis;
          }) ||
          p(function () {
            return window;
          }) ||
          p(function () {
            return self;
          }) ||
          p(function () {
            return global;
          }) ||
          p(function () {
            return p.constructor("return this")();
          }),
        m = n(91286);
      function v(e) {
        return function (t) {
          for (var n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          if ("number" == typeof t) {
            var i = t;
            (t = C(i)) || ((t = E(i, n)), (n = []));
          }
          e.apply(void 0, [t].concat(n));
        };
      }
      var g = Object.assign(
        function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          e || u(e, C(t, n) || E(t, n));
        },
        { debug: v(u.debug), log: v(u.log), warn: v(u.warn), error: v(u.error) }
      );
      function b(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return new c(C(e, t) || E(e, t));
      }
      var w = Symbol.for("ApolloErrorMessageHandler_" + d.i);
      function A(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, m.v)(e, 2).slice(0, 1e3);
        } catch (e) {
          return "<non-serializable>";
        }
      }
      function C(e, t) {
        if ((void 0 === t && (t = []), e)) return y[w] && y[w](e, t.map(A));
      }
      function E(e, t) {
        if ((void 0 === t && (t = []), e))
          return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(
            encodeURIComponent(
              JSON.stringify({ version: d.i, message: e, args: t.map(A) })
            )
          );
      }
    },
    65647: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return f;
        },
      });
      var r = n(12913),
        i = n(38191),
        o = n(11739),
        a = n(79930),
        s = n(72074),
        c = n(4722),
        u = n(6431);
      function l(e) {
        return e;
      }
      var f = (function () {
        function e(e, t) {
          void 0 === t && (t = Object.create(null)),
            (this.resultCache = i.sy ? new WeakSet() : new Set()),
            (this.transform = e),
            t.getCacheKey && (this.getCacheKey = t.getCacheKey),
            (this.cached = !1 !== t.cache),
            this.resetCache();
        }
        return (
          (e.prototype.getCacheKey = function (e) {
            return [e];
          }),
          (e.identity = function () {
            return new e(l, { cache: !1 });
          }),
          (e.split = function (t, n, r) {
            return (
              void 0 === r && (r = e.identity()),
              Object.assign(
                new e(
                  function (e) {
                    return (t(e) ? n : r).transformDocument(e);
                  },
                  { cache: !1 }
                ),
                { left: n, right: r }
              )
            );
          }),
          (e.prototype.resetCache = function () {
            var t = this;
            if (this.cached) {
              var n = new r.B(i.mr);
              this.performWork = (0, c.re)(e.prototype.performWork.bind(this), {
                makeCacheKey: function (e) {
                  var r = t.getCacheKey(e);
                  if (r)
                    return (0, a.kG)(Array.isArray(r), 69), n.lookupArray(r);
                },
                max: u.Q["documentTransform.cache"],
                cache: s.k,
              });
            }
          }),
          (e.prototype.performWork = function (e) {
            return (0, o.A$)(e), this.transform(e);
          }),
          (e.prototype.transformDocument = function (e) {
            if (this.resultCache.has(e)) return e;
            var t = this.performWork(e);
            return this.resultCache.add(t), t;
          }),
          (e.prototype.concat = function (t) {
            var n = this;
            return Object.assign(
              new e(
                function (e) {
                  return t.transformDocument(n.transformDocument(e));
                },
                { cache: !1 }
              ),
              { left: this, right: t }
            );
          }),
          e
        );
      })();
    },
    85812: function (e, t, n) {
      "use strict";
      n.d(t, {
        FS: function () {
          return a;
        },
        LZ: function () {
          return o;
        },
        mj: function () {
          return s;
        },
      });
      var r = n(79930),
        i = n(29417);
      function o(e, t) {
        var n,
          i = e.directives;
        return (
          !i ||
          !i.length ||
          ((n = []),
          i &&
            i.length &&
            i.forEach(function (e) {
              var t;
              if (!("skip" !== (t = e.name.value) && "include" !== t)) {
                var i = e.arguments,
                  o = e.name.value;
                (0, r.kG)(i && 1 === i.length, 71, o);
                var a = i[0];
                (0, r.kG)(a.name && "if" === a.name.value, 72, o);
                var s = a.value;
                (0, r.kG)(
                  s && ("Variable" === s.kind || "BooleanValue" === s.kind),
                  73,
                  o
                ),
                  n.push({ directive: e, ifArgument: a });
              }
            }),
          n).every(function (e) {
            var n = e.directive,
              i = e.ifArgument,
              o = !1;
            return (
              "Variable" === i.value.kind
                ? ((o = t && t[i.value.name.value]),
                  (0, r.kG)(void 0 !== o, 70, n.name.value))
                : (o = i.value.value),
              "skip" === n.name.value ? !o : o
            );
          })
        );
      }
      function a(e, t, n) {
        var r = new Set(e),
          o = r.size;
        return (
          (0, i.Vn)(t, {
            Directive: function (e) {
              if (r.delete(e.name.value) && (!n || !r.size)) return i.$_;
            },
          }),
          n ? !r.size : r.size < o
        );
      }
      function s(e) {
        return e && a(["client", "export"], e, !0);
      }
    },
    86275: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return a;
        },
        Yk: function () {
          return o;
        },
        hi: function () {
          return s;
        },
      });
      var r = n(31974),
        i = n(79930);
      function o(e, t) {
        var n = t,
          o = [];
        return (
          e.definitions.forEach(function (e) {
            if ("OperationDefinition" === e.kind)
              throw (0, i._K)(
                74,
                e.operation,
                e.name ? " named '".concat(e.name.value, "'") : ""
              );
            "FragmentDefinition" === e.kind && o.push(e);
          }),
          void 0 === n &&
            ((0, i.kG)(1 === o.length, 75, o.length), (n = o[0].name.value)),
          (0, r.pi)((0, r.pi)({}, e), {
            definitions: (0, r.ev)(
              [
                {
                  kind: "OperationDefinition",
                  operation: "query",
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: n },
                      },
                    ],
                  },
                },
              ],
              e.definitions,
              !0
            ),
          })
        );
      }
      function a(e) {
        void 0 === e && (e = []);
        var t = {};
        return (
          e.forEach(function (e) {
            t[e.name.value] = e;
          }),
          t
        );
      }
      function s(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var n = e.name.value;
            if ("function" == typeof t) return t(n);
            var r = t && t[n];
            return (0, i.kG)(r, 76, n), r || null;
          default:
            return null;
        }
      }
    },
    11739: function (e, t, n) {
      "use strict";
      n.d(t, {
        $H: function () {
          return a;
        },
        A$: function () {
          return o;
        },
        O4: function () {
          return h;
        },
        iW: function () {
          return u;
        },
        kU: function () {
          return c;
        },
        p$: function () {
          return f;
        },
        pD: function () {
          return l;
        },
        rY: function () {
          return s;
        },
      });
      var r = n(79930),
        i = n(44339);
      function o(e) {
        (0, r.kG)(e && "Document" === e.kind, 77);
        var t = e.definitions
          .filter(function (e) {
            return "FragmentDefinition" !== e.kind;
          })
          .map(function (e) {
            if ("OperationDefinition" !== e.kind) throw (0, r._K)(78, e.kind);
            return e;
          });
        return (0, r.kG)(t.length <= 1, 79, t.length), e;
      }
      function a(e) {
        return (
          o(e),
          e.definitions.filter(function (e) {
            return "OperationDefinition" === e.kind;
          })[0]
        );
      }
      function s(e) {
        return (
          e.definitions
            .filter(function (e) {
              return "OperationDefinition" === e.kind && !!e.name;
            })
            .map(function (e) {
              return e.name.value;
            })[0] || null
        );
      }
      function c(e) {
        return e.definitions.filter(function (e) {
          return "FragmentDefinition" === e.kind;
        });
      }
      function u(e) {
        var t = a(e);
        return (0, r.kG)(t && "query" === t.operation, 80), t;
      }
      function l(e) {
        (0, r.kG)("Document" === e.kind, 81),
          (0, r.kG)(e.definitions.length <= 1, 82);
        var t = e.definitions[0];
        return (0, r.kG)("FragmentDefinition" === t.kind, 83), t;
      }
      function f(e) {
        o(e);
        for (var t, n = 0, i = e.definitions; n < i.length; n++) {
          var a = i[n];
          if ("OperationDefinition" === a.kind) {
            var s = a.operation;
            if ("query" === s || "mutation" === s || "subscription" === s)
              return a;
          }
          "FragmentDefinition" !== a.kind || t || (t = a);
        }
        if (t) return t;
        throw (0, r._K)(84);
      }
      function h(e) {
        var t = Object.create(null),
          n = e && e.variableDefinitions;
        return (
          n &&
            n.length &&
            n.forEach(function (e) {
              e.defaultValue && (0, i.vb)(t, e.variable.name, e.defaultValue);
            }),
          t
        );
      }
    },
    55873: function (e, t, n) {
      "use strict";
      function r(e) {
        return 9 === e || 32 === e;
      }
      n.d(t, {
        S: function () {
          return g;
        },
      });
      let i = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
      function o(e) {
        return a[e.charCodeAt(0)];
      }
      let a = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000B",
        "\\f",
        "\\r",
        "\\u000E",
        "\\u000F",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001A",
        "\\u001B",
        "\\u001C",
        "\\u001D",
        "\\u001E",
        "\\u001F",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\u007F",
        "\\u0080",
        "\\u0081",
        "\\u0082",
        "\\u0083",
        "\\u0084",
        "\\u0085",
        "\\u0086",
        "\\u0087",
        "\\u0088",
        "\\u0089",
        "\\u008A",
        "\\u008B",
        "\\u008C",
        "\\u008D",
        "\\u008E",
        "\\u008F",
        "\\u0090",
        "\\u0091",
        "\\u0092",
        "\\u0093",
        "\\u0094",
        "\\u0095",
        "\\u0096",
        "\\u0097",
        "\\u0098",
        "\\u0099",
        "\\u009A",
        "\\u009B",
        "\\u009C",
        "\\u009D",
        "\\u009E",
        "\\u009F",
      ];
      var s,
        c = n(29417);
      let u = {
        Name: { leave: (e) => e.value },
        Variable: { leave: (e) => "$" + e.name },
        Document: { leave: (e) => l(e.definitions, "\n\n") },
        OperationDefinition: {
          leave(e) {
            let t = h("(", l(e.variableDefinitions, ", "), ")"),
              n = l([e.operation, l([e.name, t]), l(e.directives, " ")], " ");
            return ("query" === n ? "" : n + " ") + e.selectionSet;
          },
        },
        VariableDefinition: {
          leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
            e + ": " + t + h(" = ", n) + h(" ", l(r, " ")),
        },
        SelectionSet: { leave: ({ selections: e }) => f(e) },
        Field: {
          leave({
            alias: e,
            name: t,
            arguments: n,
            directives: r,
            selectionSet: i,
          }) {
            let o = h("", e, ": ") + t,
              a = o + h("(", l(n, ", "), ")");
            return (
              a.length > 80 && (a = o + h("(\n", d(l(n, "\n")), "\n)")),
              l([a, l(r, " "), i], " ")
            );
          },
        },
        Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
        FragmentSpread: {
          leave: ({ name: e, directives: t }) => "..." + e + h(" ", l(t, " ")),
        },
        InlineFragment: {
          leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
            l(["...", h("on ", e), l(t, " "), n], " "),
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: n,
            directives: r,
            selectionSet: i,
          }) =>
            `fragment ${e}${h("(", l(n, ", "), ")")} on ${t} ${h(
              "",
              l(r, " "),
              " "
            )}` + i,
        },
        IntValue: { leave: ({ value: e }) => e },
        FloatValue: { leave: ({ value: e }) => e },
        StringValue: {
          leave: ({ value: e, block: t }) =>
            t
              ? (function (e, t) {
                  let n = e.replace(/"""/g, '\\"""'),
                    i = n.split(/\r\n|[\n\r]/g),
                    o = 1 === i.length,
                    a =
                      i.length > 1 &&
                      i
                        .slice(1)
                        .every((e) => 0 === e.length || r(e.charCodeAt(0))),
                    s = n.endsWith('\\"""'),
                    c = e.endsWith('"') && !s,
                    u = e.endsWith("\\"),
                    l = c || u,
                    f =
                      !(null != t && t.minimize) &&
                      (!o || e.length > 70 || l || a || s),
                    h = "",
                    d = o && r(e.charCodeAt(0));
                  return (
                    ((f && !d) || a) && (h += "\n"),
                    (h += n),
                    (f || l) && (h += "\n"),
                    '"""' + h + '"""'
                  );
                })(e)
              : `"${e.replace(i, o)}"`,
        },
        BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
        NullValue: { leave: () => "null" },
        EnumValue: { leave: ({ value: e }) => e },
        ListValue: { leave: ({ values: e }) => "[" + l(e, ", ") + "]" },
        ObjectValue: { leave: ({ fields: e }) => "{" + l(e, ", ") + "}" },
        ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
        Directive: {
          leave: ({ name: e, arguments: t }) =>
            "@" + e + h("(", l(t, ", "), ")"),
        },
        NamedType: { leave: ({ name: e }) => e },
        ListType: { leave: ({ type: e }) => "[" + e + "]" },
        NonNullType: { leave: ({ type: e }) => e + "!" },
        SchemaDefinition: {
          leave: ({ description: e, directives: t, operationTypes: n }) =>
            h("", e, "\n") + l(["schema", l(t, " "), f(n)], " "),
        },
        OperationTypeDefinition: {
          leave: ({ operation: e, type: t }) => e + ": " + t,
        },
        ScalarTypeDefinition: {
          leave: ({ description: e, name: t, directives: n }) =>
            h("", e, "\n") + l(["scalar", t, l(n, " ")], " "),
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: r,
            fields: i,
          }) =>
            h("", e, "\n") +
            l(["type", t, h("implements ", l(n, " & ")), l(r, " "), f(i)], " "),
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            type: r,
            directives: i,
          }) =>
            h("", e, "\n") +
            t +
            (p(n) ? h("(\n", d(l(n, "\n")), "\n)") : h("(", l(n, ", "), ")")) +
            ": " +
            r +
            h(" ", l(i, " ")),
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: n,
            defaultValue: r,
            directives: i,
          }) => h("", e, "\n") + l([t + ": " + n, h("= ", r), l(i, " ")], " "),
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: r,
            fields: i,
          }) =>
            h("", e, "\n") +
            l(
              ["interface", t, h("implements ", l(n, " & ")), l(r, " "), f(i)],
              " "
            ),
        },
        UnionTypeDefinition: {
          leave: ({ description: e, name: t, directives: n, types: r }) =>
            h("", e, "\n") +
            l(["union", t, l(n, " "), h("= ", l(r, " | "))], " "),
        },
        EnumTypeDefinition: {
          leave: ({ description: e, name: t, directives: n, values: r }) =>
            h("", e, "\n") + l(["enum", t, l(n, " "), f(r)], " "),
        },
        EnumValueDefinition: {
          leave: ({ description: e, name: t, directives: n }) =>
            h("", e, "\n") + l([t, l(n, " ")], " "),
        },
        InputObjectTypeDefinition: {
          leave: ({ description: e, name: t, directives: n, fields: r }) =>
            h("", e, "\n") + l(["input", t, l(n, " "), f(r)], " "),
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            repeatable: r,
            locations: i,
          }) =>
            h("", e, "\n") +
            "directive @" +
            t +
            (p(n) ? h("(\n", d(l(n, "\n")), "\n)") : h("(", l(n, ", "), ")")) +
            (r ? " repeatable" : "") +
            " on " +
            l(i, " | "),
        },
        SchemaExtension: {
          leave: ({ directives: e, operationTypes: t }) =>
            l(["extend schema", l(e, " "), f(t)], " "),
        },
        ScalarTypeExtension: {
          leave: ({ name: e, directives: t }) =>
            l(["extend scalar", e, l(t, " ")], " "),
        },
        ObjectTypeExtension: {
          leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
            l(
              [
                "extend type",
                e,
                h("implements ", l(t, " & ")),
                l(n, " "),
                f(r),
              ],
              " "
            ),
        },
        InterfaceTypeExtension: {
          leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
            l(
              [
                "extend interface",
                e,
                h("implements ", l(t, " & ")),
                l(n, " "),
                f(r),
              ],
              " "
            ),
        },
        UnionTypeExtension: {
          leave: ({ name: e, directives: t, types: n }) =>
            l(["extend union", e, l(t, " "), h("= ", l(n, " | "))], " "),
        },
        EnumTypeExtension: {
          leave: ({ name: e, directives: t, values: n }) =>
            l(["extend enum", e, l(t, " "), f(n)], " "),
        },
        InputObjectTypeExtension: {
          leave: ({ name: e, directives: t, fields: n }) =>
            l(["extend input", e, l(t, " "), f(n)], " "),
        },
      };
      function l(e, t = "") {
        var n;
        return null !== (n = null == e ? void 0 : e.filter((e) => e).join(t)) &&
          void 0 !== n
          ? n
          : "";
      }
      function f(e) {
        return h("{\n", d(l(e, "\n")), "\n}");
      }
      function h(e, t, n = "") {
        return null != t && "" !== t ? e + t + n : "";
      }
      function d(e) {
        return h("  ", e.replace(/\n/g, "\n  "));
      }
      function p(e) {
        var t;
        return (
          null !== (t = null == e ? void 0 : e.some((e) => e.includes("\n"))) &&
          void 0 !== t &&
          t
        );
      }
      var y = n(50040),
        m = n(6431),
        v = n(89660),
        g = Object.assign(
          function (e) {
            var t = s.get(e);
            return t || ((t = (0, c.Vn)(e, u)), s.set(e, t)), t;
          },
          {
            reset: function () {
              s = new y.s(m.Q.print || 2e3);
            },
          }
        );
      g.reset(),
        !1 !== globalThis.__DEV__ &&
          (0, v.zP)("print", function () {
            return s ? s.size : 0;
          });
    },
    44339: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ao: function () {
          return g;
        },
        JW: function () {
          return u;
        },
        My: function () {
          return v;
        },
        NC: function () {
          return y;
        },
        PT: function () {
          return p;
        },
        Yk: function () {
          return c;
        },
        kQ: function () {
          return s;
        },
        qw: function () {
          return function e(t, n, r) {
            for (var i, a = 0, s = n.selections; a < s.length; a++) {
              var c = s[a];
              if (v(c)) {
                if ("__typename" === c.name.value) return t[m(c)];
              } else i ? i.push(c) : (i = [c]);
            }
            if ("string" == typeof t.__typename) return t.__typename;
            if (i)
              for (var u = 0, l = i; u < l.length; u++) {
                var c = l[u],
                  f = e(t, (0, o.hi)(c, r).selectionSet, r);
                if ("string" == typeof f) return f;
              }
          };
        },
        u2: function () {
          return m;
        },
        vb: function () {
          return l;
        },
        vf: function () {
          return f;
        },
      });
      var r = n(79930),
        i = n(88550),
        o = n(86275),
        a = n(97440);
      function s(e) {
        return { __ref: String(e) };
      }
      function c(e) {
        return !!(e && "object" == typeof e && "string" == typeof e.__ref);
      }
      function u(e) {
        return (
          (0, i.s)(e) && "Document" === e.kind && Array.isArray(e.definitions)
        );
      }
      function l(e, t, n, i) {
        if ("IntValue" === n.kind || "FloatValue" === n.kind)
          e[t.value] = Number(n.value);
        else if ("BooleanValue" === n.kind || "StringValue" === n.kind)
          e[t.value] = n.value;
        else if ("ObjectValue" === n.kind) {
          var o = {};
          n.fields.map(function (e) {
            return l(o, e.name, e.value, i);
          }),
            (e[t.value] = o);
        } else if ("Variable" === n.kind) {
          var a = (i || {})[n.name.value];
          e[t.value] = a;
        } else if ("ListValue" === n.kind)
          e[t.value] = n.values.map(function (e) {
            var n = {};
            return l(n, t, e, i), n[t.value];
          });
        else if ("EnumValue" === n.kind) e[t.value] = n.value;
        else if ("NullValue" === n.kind) e[t.value] = null;
        else throw (0, r._K)(85, t.value, n.kind);
      }
      function f(e, t) {
        var n = null;
        e.directives &&
          ((n = {}),
          e.directives.forEach(function (e) {
            (n[e.name.value] = {}),
              e.arguments &&
                e.arguments.forEach(function (r) {
                  var i = r.name,
                    o = r.value;
                  return l(n[e.name.value], i, o, t);
                });
          }));
        var r = null;
        return (
          e.arguments &&
            e.arguments.length &&
            ((r = {}),
            e.arguments.forEach(function (e) {
              var n = e.name,
                i = e.value;
              return l(r, n, i, t);
            })),
          p(e.name.value, r, n)
        );
      }
      var h = [
          "connection",
          "include",
          "skip",
          "client",
          "rest",
          "export",
          "nonreactive",
        ],
        d = a.B,
        p = Object.assign(
          function (e, t, n) {
            if (t && n && n.connection && n.connection.key) {
              if (!n.connection.filter || !(n.connection.filter.length > 0))
                return n.connection.key;
              var r = n.connection.filter ? n.connection.filter : [];
              r.sort();
              var i = {};
              return (
                r.forEach(function (e) {
                  i[e] = t[e];
                }),
                "".concat(n.connection.key, "(").concat(d(i), ")")
              );
            }
            var o = e;
            if (t) {
              var a = d(t);
              o += "(".concat(a, ")");
            }
            return (
              n &&
                Object.keys(n).forEach(function (e) {
                  -1 === h.indexOf(e) &&
                    (n[e] && Object.keys(n[e]).length
                      ? (o += "@".concat(e, "(").concat(d(n[e]), ")"))
                      : (o += "@".concat(e)));
                }),
              o
            );
          },
          {
            setStringify: function (e) {
              var t = d;
              return (d = e), t;
            },
          }
        );
      function y(e, t) {
        if (e.arguments && e.arguments.length) {
          var n = {};
          return (
            e.arguments.forEach(function (e) {
              return l(n, e.name, e.value, t);
            }),
            n
          );
        }
        return null;
      }
      function m(e) {
        return e.alias ? e.alias.value : e.name.value;
      }
      function v(e) {
        return "Field" === e.kind;
      }
      function g(e) {
        return "InlineFragment" === e.kind;
      }
    },
    90535: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gw: function () {
          return p;
        },
        aL: function () {
          return y;
        },
        bi: function () {
          return d;
        },
        ob: function () {
          return m;
        },
      });
      var r = n(31974),
        i = n(79930),
        o = n(55459),
        a = n(29417),
        s = n(11739),
        c = n(44339),
        u = n(86275),
        l = n(28607),
        f = { kind: o.h.FIELD, name: { kind: o.h.NAME, value: "__typename" } };
      function h(e) {
        var t = new Map();
        return function (n) {
          void 0 === n && (n = e);
          var r = t.get(n);
          return (
            r ||
              t.set(
                n,
                (r = { variables: new Set(), fragmentSpreads: new Set() })
              ),
            r
          );
        };
      }
      function d(e, t) {
        (0, s.A$)(t);
        for (
          var n,
            c,
            f,
            d = h(""),
            p = h(""),
            y = function (e) {
              for (var t = 0, n = void 0; t < e.length && (n = e[t]); ++t)
                if (!(0, l.k)(n)) {
                  if (n.kind === o.h.OPERATION_DEFINITION)
                    return d(n.name && n.name.value);
                  if (n.kind === o.h.FRAGMENT_DEFINITION)
                    return p(n.name.value);
                }
              return !1 !== globalThis.__DEV__ && i.kG.error(86), null;
            },
            m = 0,
            v = t.definitions.length - 1;
          v >= 0;
          --v
        )
          t.definitions[v].kind === o.h.OPERATION_DEFINITION && ++m;
        var g =
            ((n = new Map()),
            (c = new Map()),
            e.forEach(function (e) {
              e && (e.name ? n.set(e.name, e) : e.test && c.set(e.test, e));
            }),
            function (e) {
              var t = n.get(e.name.value);
              return (
                !t &&
                  c.size &&
                  c.forEach(function (n, r) {
                    r(e) && (t = n);
                  }),
                t
              );
            }),
          b = function (e) {
            return (
              (0, l.O)(e) &&
              e.map(g).some(function (e) {
                return e && e.remove;
              })
            );
          },
          w = new Map(),
          A = !1,
          C = {
            enter: function (e) {
              if (b(e.directives)) return (A = !0), null;
            },
          },
          E = (0, a.Vn)(t, {
            Field: C,
            InlineFragment: C,
            VariableDefinition: {
              enter: function () {
                return !1;
              },
            },
            Variable: {
              enter: function (e, t, n, r, i) {
                var o = y(i);
                o && o.variables.add(e.name.value);
              },
            },
            FragmentSpread: {
              enter: function (e, t, n, r, i) {
                if (b(e.directives)) return (A = !0), null;
                var o = y(i);
                o && o.fragmentSpreads.add(e.name.value);
              },
            },
            FragmentDefinition: {
              enter: function (e, t, n, r) {
                w.set(JSON.stringify(r), e);
              },
              leave: function (e, t, n, r) {
                return e === w.get(JSON.stringify(r))
                  ? e
                  : m > 0 &&
                    e.selectionSet.selections.every(function (e) {
                      return (
                        e.kind === o.h.FIELD && "__typename" === e.name.value
                      );
                    })
                  ? ((p(e.name.value).removed = !0), (A = !0), null)
                  : void 0;
              },
            },
            Directive: {
              leave: function (e) {
                if (g(e)) return (A = !0), null;
              },
            },
          });
        if (!A) return t;
        var k = function (e) {
            return (
              e.transitiveVars ||
                ((e.transitiveVars = new Set(e.variables)),
                e.removed ||
                  e.fragmentSpreads.forEach(function (t) {
                    k(p(t)).transitiveVars.forEach(function (t) {
                      e.transitiveVars.add(t);
                    });
                  })),
              e
            );
          },
          O = new Set();
        E.definitions.forEach(function (e) {
          e.kind === o.h.OPERATION_DEFINITION
            ? k(d(e.name && e.name.value)).fragmentSpreads.forEach(function (
                e
              ) {
                O.add(e);
              })
            : e.kind !== o.h.FRAGMENT_DEFINITION ||
              0 !== m ||
              p(e.name.value).removed ||
              O.add(e.name.value);
        }),
          O.forEach(function (e) {
            k(p(e)).fragmentSpreads.forEach(function (e) {
              O.add(e);
            });
          });
        var I = {
          enter: function (e) {
            var t;
            if (((t = e.name.value), !O.has(t) || p(t).removed)) return null;
          },
        };
        return (
          (f = (0, a.Vn)(E, {
            FragmentSpread: I,
            FragmentDefinition: I,
            OperationDefinition: {
              leave: function (e) {
                if (e.variableDefinitions) {
                  var t = k(d(e.name && e.name.value)).transitiveVars;
                  if (t.size < e.variableDefinitions.length)
                    return (0, r.pi)((0, r.pi)({}, e), {
                      variableDefinitions: e.variableDefinitions.filter(
                        function (e) {
                          return t.has(e.variable.name.value);
                        }
                      ),
                    });
                }
              },
            },
          })),
          !(function e(t, n) {
            return (
              !t ||
              t.selectionSet.selections.every(function (t) {
                return t.kind === o.h.FRAGMENT_SPREAD && e(n[t.name.value], n);
              })
            );
          })((0, s.$H)(f) || (0, s.pD)(f), (0, u.F)((0, s.kU)(f)))
            ? f
            : null
        );
      }
      var p = Object.assign(
        function (e) {
          return (0, a.Vn)(e, {
            SelectionSet: {
              enter: function (e, t, n) {
                if (!n || n.kind !== o.h.OPERATION_DEFINITION) {
                  var i = e.selections;
                  if (
                    !(
                      !i ||
                      i.some(function (e) {
                        return (
                          (0, c.My)(e) &&
                          ("__typename" === e.name.value ||
                            0 === e.name.value.lastIndexOf("__", 0))
                        );
                      })
                    ) &&
                    !(
                      (0, c.My)(n) &&
                      n.directives &&
                      n.directives.some(function (e) {
                        return "export" === e.name.value;
                      })
                    )
                  )
                    return (0, r.pi)((0, r.pi)({}, e), {
                      selections: (0, r.ev)((0, r.ev)([], i, !0), [f], !1),
                    });
                }
              },
            },
          });
        },
        {
          added: function (e) {
            return e === f;
          },
        }
      );
      function y(e) {
        return "query" === (0, s.p$)(e).operation
          ? e
          : (0, a.Vn)(e, {
              OperationDefinition: {
                enter: function (e) {
                  return (0, r.pi)((0, r.pi)({}, e), { operation: "query" });
                },
              },
            });
      }
      function m(e) {
        return (
          (0, s.A$)(e),
          d(
            [
              {
                test: function (e) {
                  return "client" === e.name.value;
                },
                remove: !0,
              },
            ],
            e
          )
        );
      }
    },
    88776: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return r;
        },
      });
      var r = "3.11.9";
    },
    12862: function (e, t, n) {
      "use strict";
      let r, i, o, a, s, c, u, l, f, h, d, p, y, m, v, g;
      n.d(t, {
        K: function () {
          return tT;
        },
      }),
        n(62773);
      var b = n(45583);
      let w = (e) => (t, n, r) => {
          let i = r.subscribe;
          return (
            (r.subscribe = (e, t, n) => {
              let o = e;
              if (t) {
                let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                  a = e(r.getState());
                (o = (n) => {
                  let r = e(n);
                  if (!i(a, r)) {
                    let e = a;
                    t((a = r), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(a, a);
              }
              return i(o);
            }),
            e(t, n, r)
          );
        },
        A = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => A(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => A(t)(e),
            };
          }
        },
        C = (e, t) => (n, r, i) => {
          let o,
            a = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var r;
                    let i = (e) =>
                        null === e
                          ? null
                          : JSON.parse(e, null == t ? void 0 : t.reviver),
                      o = null != (r = n.getItem(e)) ? r : null;
                    return o instanceof Promise ? o.then(i) : i(o);
                  },
                  setItem: (e, r) =>
                    n.setItem(
                      e,
                      JSON.stringify(r, null == t ? void 0 : t.replacer)
                    ),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            s = !1,
            c = new Set(),
            u = new Set(),
            l = a.storage;
          if (!l)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              r,
              i
            );
          let f = () => {
              let e = a.partialize({ ...r() });
              return l.setItem(a.name, { state: e, version: a.version });
            },
            h = i.setState;
          i.setState = (e, t) => {
            h(e, t), f();
          };
          let d = e(
            (...e) => {
              n(...e), f();
            },
            r,
            i
          );
          i.getInitialState = () => d;
          let p = () => {
            var e, t;
            if (!l) return;
            (s = !1),
              c.forEach((e) => {
                var t;
                return e(null != (t = r()) ? t : d);
              });
            let i =
              (null == (t = a.onRehydrateStorage)
                ? void 0
                : t.call(a, null != (e = r()) ? e : d)) || void 0;
            return A(l.getItem.bind(l))(a.name)
              .then((e) => {
                if (e) {
                  if ("number" != typeof e.version || e.version === a.version)
                    return [!1, e.state];
                  if (a.migrate) return [!0, a.migrate(e.state, e.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [i, s] = e;
                if ((n((o = a.merge(s, null != (t = r()) ? t : d)), !0), i))
                  return f();
              })
              .then(() => {
                null == i || i(o, void 0),
                  (o = r()),
                  (s = !0),
                  u.forEach((e) => e(o));
              })
              .catch((e) => {
                null == i || i(void 0, e);
              });
          };
          return (
            (i.persist = {
              setOptions: (e) => {
                (a = { ...a, ...e }), e.storage && (l = e.storage);
              },
              clearStorage: () => {
                null == l || l.removeItem(a.name);
              },
              getOptions: () => a,
              rehydrate: () => p(),
              hasHydrated: () => s,
              onHydrate: (e) => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
            }),
            a.skipHydration || p(),
            o || d
          );
        },
        E = (e) => {
          let t;
          let n = new Set(),
            r = (e, r) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  n.forEach((n) => n(t, e));
              }
            },
            i = () => t,
            o = {
              setState: r,
              getState: i,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            a = (t = e(r, i, o));
          return o;
        },
        k = (e) => (e ? E(e) : E);
      var O = n(39803),
        I = n(48519),
        S = n(33679),
        D = n(36063),
        N = n(21693),
        T = n(76026),
        x = n(29358);
      let R = /(rabby|trustwallet)/;
      function P(e = {}) {
        let t, n, r, i;
        let { shimDisconnect: o = !0, unstable_shimAsyncInject: a } = e;
        function s() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(_[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (c) => ({
          get icon() {
            return s().icon;
          },
          get id() {
            return s().id;
          },
          get name() {
            return s().name;
          },
          get supportsSimulation() {
            return R.test(this.id.toLowerCase());
          },
          type: P.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (r || ((r = this.onConnect.bind(this)), n.on("connect", r)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: a, isReconnecting: s } = {}) {
            let u = await this.getProvider();
            if (!u) throw new x.M();
            let l = [];
            if (s) l = await this.getAccounts().catch(() => []);
            else if (o)
              try {
                let e = await u.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (l = e[0]?.caveats?.[0]?.value?.map((e) => O.K(e))).length >
                  0 && (l = await this.getAccounts());
              } catch (e) {
                if (e.code === I.ab.code) throw new I.ab(e);
                if (e.code === I.pT.code) throw e;
              }
            try {
              l?.length ||
                s ||
                (l = (await u.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, O.K)(e)
                )),
                r && (u.removeListener("connect", r), (r = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  u.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  u.on("chainChanged", n)),
                i ||
                  ((i = this.onDisconnect.bind(this)), u.on("disconnect", i));
              let f = await this.getChainId();
              if (a && f !== a) {
                let e = await this.switchChain({ chainId: a }).catch((e) => {
                  if (e.code === I.ab.code) throw e;
                  return { id: f };
                });
                f = e?.id ?? f;
              }
              return (
                o && (await c.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await c.storage?.setItem("injected.connected", !0)),
                { accounts: l, chainId: f }
              );
            } catch (e) {
              if (e.code === I.ab.code) throw new I.ab(e);
              if (e.code === I.pT.code) throw new I.pT(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new x.M();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              i && (t.removeListener("disconnect", i), (i = void 0)),
              r || ((r = this.onConnect.bind(this)), t.on("connect", r));
            try {
              await (0, S.F)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            o && (await c.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await c.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new x.M();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, O.K)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new x.M();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = s();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? Q(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (o && (await c.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await c.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== a && !1 !== a) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof a ? a : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new x.M();
              }
              return !!(await (0, D.J)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new x.M();
            let r = c.chains.find((e) => e.id === t);
            if (!r) throw new I.x3(new T.X4());
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, N.eC)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        c.emitter.emit("change", { chainId: t });
                    }),
                  new Promise((e) => {
                    let n = (r) => {
                      "chainId" in r &&
                        r.chainId === t &&
                        (c.emitter.off("change", n), e());
                    };
                    c.emitter.on("change", n);
                  }),
                ]),
                r
              );
            } catch (i) {
              if (4902 === i.code || i?.data?.originalError?.code === 4902)
                try {
                  let i, o;
                  let { default: a, ...s } = r.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (i = e.blockExplorerUrls)
                    : a && (i = [a.url, ...Object.values(s).map((e) => e.url)]),
                    (o = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [r.rpcUrls.default?.http[0] ?? ""]);
                  let c = {
                    blockExplorerUrls: i,
                    chainId: (0, N.eC)(t),
                    chainName: e?.chainName ?? r.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                    rpcUrls: o,
                  };
                  if (
                    (await n.request({
                      method: "wallet_addEthereumChain",
                      params: [c],
                    }),
                    (await this.getChainId()) !== t)
                  )
                    throw new I.ab(
                      Error("User rejected switch after adding network.")
                    );
                  return r;
                } catch (e) {
                  throw new I.ab(e);
                }
              if (i.code === I.ab.code) throw new I.ab(i);
              throw new I.x3(i);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (c.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                o && (await c.storage?.removeItem(`${this.id}.disconnected`));
            } else
              c.emitter.emit("change", { accounts: e.map((e) => (0, O.K)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            c.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let o = await this.getAccounts();
            if (0 === o.length) return;
            let a = Number(e.chainId);
            c.emitter.emit("connect", { accounts: o, chainId: a });
            let s = await this.getProvider();
            s &&
              (r && (s.removeListener("connect", r), (r = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                s.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), s.on("chainChanged", n)),
              i || ((i = this.onDisconnect.bind(this)), s.on("disconnect", i)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (c.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                i && (t.removeListener("disconnect", i), (i = void 0)),
                r || ((r = this.onConnect.bind(this)), t.on("connect", r))));
          },
        });
      }
      P.type = "injected";
      let _ = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : Q(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            Q(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : Q(e, "isPhantom"),
        },
      };
      function Q(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let r = e.ethereum;
        return r?.providers
          ? r.providers.find((e) => n(e))
          : r && n(r)
          ? r
          : void 0;
      }
      var M = n(28729);
      class F {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new M(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      var j = n(98094);
      let L = 256;
      var q = n(81784),
        B = n(26569);
      async function U(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new T.wi();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let r = await n.connect({ chainId: t.chainId }),
            i = r.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: i,
                chainId: r.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: i, chainId: r.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var K = n(64028),
        V = n(4832),
        G = n(67333);
      async function z(e, { account: t = e.account, message: n }) {
        if (!t) throw new G.o({ docsPath: "/docs/actions/wallet/signMessage" });
        let r = (0, V.T)(t);
        if (r.signMessage) return r.signMessage({ message: n });
        let i =
          "string" == typeof n
            ? (0, N.$G)(n)
            : n.raw instanceof Uint8Array
            ? (0, N.NC)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [i, r.address] },
          { retryCount: 0 }
        );
      }
      var W = n(46981),
        J = n(71660);
      async function H(e, t) {
        let n;
        let { account: r, connector: i, ...o } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, J.e)(e, { account: r, connector: i })),
          (0, W.s)(n, z, "signMessage")({ ...o, ...(r ? { account: r } : {}) })
        );
      }
      var Y = n(89412);
      async function Z(e, t) {
        let n;
        let { chainId: r, connector: i, ...o } = t;
        n = t.account
          ? t.account
          : (
              await (0, J.e)(e, {
                account: t.account,
                chainId: r,
                connector: i,
              })
            ).account;
        let a = e.getClient({ chainId: r });
        return (0, W.s)(a, Y.Q, "estimateGas")({ ...o, account: n });
      }
      var X = n(26905),
        $ = n(23437),
        ee = n(45057),
        et = n(7869),
        en = n(42980),
        er = n(3458),
        ei = n(76384),
        eo = n(94540),
        ea = n(94973),
        es = n(28483),
        ec = n(39230),
        eu = n(98458);
      function el(e, t) {
        if (!(e instanceof ec.G)) return !1;
        let n = e.walk((e) => e instanceof eu.Lu);
        return (
          n instanceof eu.Lu &&
          (!!(
            n.data?.errorName === "ResolverNotFound" ||
            n.data?.errorName === "ResolverWildcardNotSupported" ||
            n.data?.errorName === "ResolverNotContract" ||
            n.data?.errorName === "ResolverError" ||
            n.data?.errorName === "HttpError" ||
            n.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && n.reason === es.$[50]))
        );
      }
      var ef = n(69809),
        eh = n(56728),
        ed = n(79917),
        ep = n(45008);
      function ey(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, ep.v)(t) ? t : null;
      }
      function em(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, N.ci)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let r = ey(n[e]),
            i = r ? (0, eh.O0)(r) : (0, ed.w)((0, eh.qX)(n[e]), "bytes");
          t = (0, ed.w)((0, ef.zo)([t, i]), "bytes");
        }
        return (0, N.ci)(t);
      }
      function ev(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, eh.qX)(t).byteLength + 2),
          r = 0,
          i = t.split(".");
        for (let e = 0; e < i.length; e++) {
          let t = (0, eh.qX)(i[e]);
          if (t.byteLength > 255) {
            var o;
            t = (0, eh.qX)(
              ((o = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? ey(e) || (0, ed.w)((0, eh.qX)(e)) : (0, N.ci)(t);
              })(i[e])),
              `[${o.slice(2)}]`)
            );
          }
          (n[r] = t.length), n.set(t, r + 1), (r += t.length + 1);
        }
        return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
      }
      var eg = n(82600),
        eb = n(65459);
      async function ew(
        e,
        {
          blockNumber: t,
          blockTag: n,
          coinType: r,
          name: i,
          gatewayUrls: o,
          strict: a,
          universalResolverAddress: s,
        }
      ) {
        let c = s;
        if (!c) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          c = (0, eo.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let a = (0, ei.R)({
              abi: en.X$,
              functionName: "addr",
              ...(null != r ? { args: [em(i), BigInt(r)] } : { args: [em(i)] }),
            }),
            s = {
              address: c,
              abi: en.k3,
              functionName: "resolve",
              args: [(0, N.NC)(ev(i)), a],
              blockNumber: t,
              blockTag: n,
            },
            u = (0, eg.s)(e, eb.L, "readContract"),
            l = o ? await u({ ...s, args: [...s.args, o] }) : await u(s);
          if ("0x" === l[0]) return null;
          let f = (0, er.k)({
            abi: en.X$,
            args: null != r ? [em(i), BigInt(r)] : void 0,
            functionName: "addr",
            data: l[0],
          });
          if ("0x" === f || "0x00" === (0, ea.f)(f)) return null;
          return f;
        } catch (e) {
          if (a) throw e;
          if (el(e, "resolve")) return null;
          throw e;
        }
      }
      class eA extends ec.G {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class eC extends ec.G {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class eE extends ec.G {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class ek extends ec.G {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      let eO =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        eI =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        eS = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        eD = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function eN(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((t) => {
            let n = new Image();
            (n.onload = () => {
              t(!0);
            }),
              (n.onerror = () => {
                t(!1);
              }),
              (n.src = e);
          });
        }
      }
      function eT(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function ex({ uri: e, gatewayUrls: t }) {
        let n = eS.test(e);
        if (n) return { uri: e, isOnChain: !0, isEncoded: n };
        let r = eT(t?.ipfs, "https://ipfs.io"),
          i = eT(t?.arweave, "https://arweave.net"),
          o = e.match(eO),
          {
            protocol: a,
            subpath: s,
            target: c,
            subtarget: u = "",
          } = o?.groups || {},
          l = "ipns:/" === a || "ipns/" === s,
          f = "ipfs:/" === a || "ipfs/" === s || eI.test(e);
        if (e.startsWith("http") && !l && !f) {
          let n = e;
          return (
            t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: n, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((l || f) && c)
          return {
            uri: `${r}/${l ? "ipns" : "ipfs"}/${c}${u}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === a && c)
          return { uri: `${i}/${c}${u || ""}`, isOnChain: !1, isEncoded: !1 };
        let h = e.replace(eD, "");
        if (
          (h.startsWith("<svg") && (h = `data:image/svg+xml;base64,${btoa(h)}`),
          h.startsWith("data:") || h.startsWith("{"))
        )
          return { uri: h, isOnChain: !0, isEncoded: !1 };
        throw new eE({ uri: e });
      }
      function eR(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new eA({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function eP({ gatewayUrls: e, uri: t }) {
        try {
          let n = await fetch(t).then((e) => e.json());
          return await e_({ gatewayUrls: e, uri: eR(n) });
        } catch {
          throw new eE({ uri: t });
        }
      }
      async function e_({ gatewayUrls: e, uri: t }) {
        let { uri: n, isOnChain: r } = ex({ uri: t, gatewayUrls: e });
        if (r || (await eN(n))) return n;
        throw new eE({ uri: t });
      }
      async function eQ(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, eb.L)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, eb.L)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new ek({ namespace: t.namespace });
      }
      async function eM(e, { gatewayUrls: t, record: n }) {
        return /eip155:/i.test(n)
          ? eF(e, { gatewayUrls: t, record: n })
          : e_({ uri: n, gatewayUrls: t });
      }
      async function eF(e, { gatewayUrls: t, record: n }) {
        let r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, r, i] = t.split("/"),
              [o, a] = n.split(":"),
              [s, c] = r.split(":");
            if (!o || "eip155" !== o.toLowerCase())
              throw new eC({ reason: "Only EIP-155 supported" });
            if (!a) throw new eC({ reason: "Chain ID not found" });
            if (!c) throw new eC({ reason: "Contract address not found" });
            if (!i) throw new eC({ reason: "Token ID not found" });
            if (!s) throw new eC({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(a),
              namespace: s.toLowerCase(),
              contractAddress: c,
              tokenID: i,
            };
          })(n),
          {
            uri: i,
            isOnChain: o,
            isEncoded: a,
          } = ex({ uri: await eQ(e, { nft: r }), gatewayUrls: t });
        if (
          o &&
          (i.includes("data:application/json;base64,") || i.startsWith("{"))
        )
          return e_({
            uri: eR(
              JSON.parse(
                a ? atob(i.replace("data:application/json;base64,", "")) : i
              )
            ),
            gatewayUrls: t,
          });
        let s = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (s = s.replace("0x", "").padStart(64, "0")),
          eP({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, s) })
        );
      }
      async function ej(
        e,
        {
          blockNumber: t,
          blockTag: n,
          name: r,
          key: i,
          gatewayUrls: o,
          strict: a,
          universalResolverAddress: s,
        }
      ) {
        let c = s;
        if (!c) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          c = (0, eo.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let a = {
              address: c,
              abi: en.k3,
              functionName: "resolve",
              args: [
                (0, N.NC)(ev(r)),
                (0, ei.R)({
                  abi: en.nZ,
                  functionName: "text",
                  args: [em(r), i],
                }),
              ],
              blockNumber: t,
              blockTag: n,
            },
            s = (0, eg.s)(e, eb.L, "readContract"),
            u = o ? await s({ ...a, args: [...a.args, o] }) : await s(a);
          if ("0x" === u[0]) return null;
          let l = (0, er.k)({ abi: en.nZ, functionName: "text", data: u[0] });
          return "" === l ? null : l;
        } catch (e) {
          if (a) throw e;
          if (el(e, "resolve")) return null;
          throw e;
        }
      }
      async function eL(
        e,
        {
          blockNumber: t,
          blockTag: n,
          assetGatewayUrls: r,
          name: i,
          gatewayUrls: o,
          strict: a,
          universalResolverAddress: s,
        }
      ) {
        let c = await (0, eg.s)(
          e,
          ej,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: n,
          key: "avatar",
          name: i,
          universalResolverAddress: s,
          gatewayUrls: o,
          strict: a,
        });
        if (!c) return null;
        try {
          return await eM(e, { record: c, gatewayUrls: r });
        } catch {
          return null;
        }
      }
      function eq(e, t) {
        let { chainId: n, ...r } = t,
          i = e.getClient({ chainId: n });
        return (0, W.s)(i, eL, "getEnsAvatar")(r);
      }
      var eB = n(10815);
      async function eU(e, t) {
        let { connector: n } = t,
          r = e.state.connections.get(n.uid);
        if (!r) throw new T.aH();
        return (
          await e.storage?.setItem("recentConnectorId", n.id),
          e.setState((e) => ({ ...e, current: n.uid })),
          { accounts: r.accounts, chainId: r.chainId }
        );
      }
      async function eK(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: r,
          gatewayUrls: i,
          strict: o,
          universalResolverAddress: a,
        }
      ) {
        let s = a;
        if (!s) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          s = (0, eo.L)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let c = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let o = {
              address: s,
              abi: en.du,
              functionName: "reverse",
              args: [(0, N.NC)(ev(c))],
              blockNumber: n,
              blockTag: r,
            },
            a = (0, eg.s)(e, eb.L, "readContract"),
            [u, l] = i ? await a({ ...o, args: [...o.args, i] }) : await a(o);
          if (t.toLowerCase() !== l.toLowerCase()) return null;
          return u;
        } catch (e) {
          if (o) throw e;
          if (el(e, "reverse")) return null;
          throw e;
        }
      }
      var eV = n(62338),
        eG = n(70996),
        ez = n(25137),
        eW = n(27308);
      async function eJ(e, t) {
        let { account: n, chainId: r, ...i } = t,
          o = n ?? (0, $.D)(e).address,
          a = e.getClient({ chainId: r });
        return (0, W.s)(
          a,
          eW.Z,
          "prepareTransactionRequest"
        )({ ...i, ...(o ? { account: o } : {}) });
      }
      var eH = n(59958);
      async function eY(e, t) {
        let n;
        let { account: r, chainId: i, connector: o, gas: a, ...s } = t;
        n =
          "object" == typeof r && r?.type === "local"
            ? e.getClient({ chainId: i })
            : await (0, J.e)(e, {
                account: r ?? void 0,
                chainId: i,
                connector: o,
              });
        let { connector: c } = (0, $.D)(e),
          u = await (async () => {
            if (
              !(!("data" in t) || !t.data || (o ?? c)?.supportsSimulation) &&
              null !== a
            )
              return void 0 === a
                ? (0, W.s)(
                    n,
                    Y.Q,
                    "estimateGas"
                  )({ ...s, account: r, chain: i ? { id: i } : null })
                : a;
          })(),
          l = (0, W.s)(n, eH.T, "sendTransaction");
        return await l({
          ...s,
          ...(r ? { account: r } : {}),
          gas: u,
          chain: i ? { id: i } : null,
        });
      }
      var eZ = n(75404);
      class eX extends ec.G {
        constructor({ value: e }) {
          super(`Number \`${e}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError",
          });
        }
      }
      function e$(e, t) {
        if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new eX({ value: e });
        let [n, r = "0"] = e.split("."),
          i = n.startsWith("-");
        if ((i && (n = n.slice(1)), (r = r.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(`.${r}`)) && (n = `${BigInt(n) + 1n}`),
            (r = "");
        else if (r.length > t) {
          let [e, i, o] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
            a = Math.round(Number(`${i}.${o}`));
          (r =
            a > 9
              ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
              : `${e}${a}`).length > t &&
            ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
            (r = r.slice(0, t));
        } else r = r.padEnd(t, "0");
        return BigInt(`${i ? "-" : ""}${n}${r}`);
      }
      var e0 = n(16775),
        e1 = n(56882),
        e3 = n(66059);
      n(21669), n(23209), n(97486);
      var e2 = n(39501);
      async function e4(e) {
        if (!e)
          throw Error(
            "networkControllerClient:getApprovedCaipNetworks - connector is undefined"
          );
        let t = await e?.getProvider();
        return {
          supportsAllNetworks: !1,
          approvedCaipNetworkIds: e2.s.getChainsFromNamespaces(
            t?.session?.namespaces
          ),
        };
      }
      function e8(e) {
        if (!e) throw Error("No CAIP address provided");
        let t = e.split(":")[2];
        if (!t) throw Error("Invalid CAIP address");
        return t;
      }
      var e5 = n(70175);
      let e9 = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function e7(e) {
        var t;
        let n;
        return (
          (t = (function (e) {
            let t = 0;
            function n() {
              return (e[t++] << 8) | e[t++];
            }
            let r = n(),
              i = 1,
              o = [0, 1];
            for (let e = 1; e < r; e++) o.push((i += n()));
            let a = n(),
              s = t;
            t += a;
            let c = 0,
              u = 0;
            function l() {
              return (
                0 == c && ((u = (u << 8) | e[t++]), (c = 8)), (u >> --c) & 1
              );
            }
            let f = 2147483648 - 1,
              h = 0;
            for (let e = 0; e < 31; e++) h = (h << 1) | l();
            let d = [],
              p = 0,
              y = 2147483648;
            for (;;) {
              let e = Math.floor(((h - p + 1) * i - 1) / y),
                t = 0,
                n = r;
              for (; n - t > 1; ) {
                let r = (t + n) >>> 1;
                e < o[r] ? (n = r) : (t = r);
              }
              if (0 == t) break;
              d.push(t);
              let a = p + Math.floor((y * o[t]) / i),
                s = p + Math.floor((y * o[t + 1]) / i) - 1;
              for (; ((a ^ s) & 1073741824) == 0; )
                (h = ((h << 1) & f) | l()),
                  (a = (a << 1) & f),
                  (s = ((s << 1) & f) | 1);
              for (; a & ~s & 536870912; )
                (h = (1073741824 & h) | ((h << 1) & (f >>> 1)) | l()),
                  (a = (a << 1) ^ 1073741824),
                  (s = ((1073741824 ^ s) << 1) | 1073741825);
              (p = a), (y = 1 + s - a);
            }
            let m = r - 4;
            return d.map((t) => {
              switch (t - m) {
                case 3:
                  return m + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return m + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return m + e[s++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, n) => (t[e.charCodeAt(0)] = n));
              let n = e.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let i = 0, o = 0, a = 0, s = 0; i < n; i++)
                (s = (s << 6) | t[e.charCodeAt(i)]),
                  (a += 6) >= 8 && (r[o++] = s >> (a -= 8));
              return r;
            })(e)
          )),
          (n = 0),
          () => t[n++]
        );
      }
      function e6(e, t = 0) {
        let n = [];
        for (;;) {
          let r = e(),
            i = e();
          if (!i) break;
          t += r;
          for (let e = 0; e < i; e++) n.push(t + e);
          t += i + 1;
        }
        return n;
      }
      function te(e) {
        return tn(() => {
          let t = e6(e);
          if (t.length) return t;
        });
      }
      function tt(e) {
        let t = [];
        for (;;) {
          let n = e();
          if (0 == n) break;
          t.push(
            (function (e, t) {
              let n = 1 + t(),
                r = t(),
                i = tn(t);
              return tr(i.length, 1 + e, t).flatMap((e, t) => {
                let [o, ...a] = e;
                return Array(i[t])
                  .fill()
                  .map((e, t) => {
                    let i = t * r;
                    return [o + t * n, a.map((e) => e + i)];
                  });
              });
            })(n, e)
          );
        }
        for (;;) {
          let n = e() - 1;
          if (n < 0) break;
          t.push(tr(1 + e(), 1 + n, e).map((e) => [e[0], e.slice(1)]));
        }
        return t.flat();
      }
      function tn(e) {
        let t = [];
        for (;;) {
          let n = e(t.length);
          if (!n) break;
          t.push(n);
        }
        return t;
      }
      function tr(e, t, n) {
        let r = Array(e)
          .fill()
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let n = Array(e);
            for (let i = 0, o = 0; i < e; i++) {
              var r;
              n[i] = o += 1 & (r = t()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(e, n).forEach((e, t) => r[t].push(e));
        return r;
      }
      function ti(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function to(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let n = [];
        for (let r = 0; r < t; )
          n.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
        return n.join("");
      }
      function ta(e, t) {
        let n = e.length,
          r = n - t.length;
        for (let i = 0; 0 == r && i < n; i++) r = e[i] - t[i];
        return r;
      }
      function ts(e) {
        return (e >> 24) & 255;
      }
      function tc(e) {
        return 16777215 & e;
      }
      function tu(e) {
        return e >= 44032 && e < 55204;
      }
      function tl(e) {
        i ||
          (function () {
            let e = e7(
              "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"
            );
            for (let [t, n] of ((i = new Map(
              te(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (o = new Set(e6(e))),
            (a = new Map()),
            (s = new Map()),
            tt(e))) {
              if (!o.has(t) && 2 == n.length) {
                let [e, r] = n,
                  i = s.get(e);
                i || ((i = new Map()), s.set(e, i)), i.set(r, t);
              }
              a.set(t, n.reverse());
            }
          })();
        let t = [],
          n = [],
          r = !1;
        function c(e) {
          let n = i.get(e);
          n && ((r = !0), (e |= n)), t.push(e);
        }
        for (let r of e)
          for (;;) {
            if (r < 128) t.push(r);
            else if (tu(r)) {
              let e = r - 44032,
                t = (e / 588) | 0,
                n = ((e % 588) / 28) | 0,
                i = e % 28;
              c(4352 + t), c(4449 + n), i > 0 && c(4519 + i);
            } else {
              let e = a.get(r);
              e ? n.push(...e) : c(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (r && t.length > 1) {
          let e = ts(t[0]);
          for (let n = 1; n < t.length; n++) {
            let r = ts(t[n]);
            if (0 == r || e <= r) {
              e = r;
              continue;
            }
            let i = n - 1;
            for (;;) {
              let n = t[i + 1];
              if (((t[i + 1] = t[i]), (t[i] = n), !i || (e = ts(t[--i])) <= r))
                break;
            }
            e = ts(t[n]);
          }
        }
        return t;
      }
      function tf(e) {
        return (function (e) {
          let t = [],
            n = [],
            r = -1,
            i = 0;
          for (let o of e) {
            let e = ts(o),
              a = tc(o);
            if (-1 == r) 0 == e ? (r = a) : t.push(a);
            else if (i > 0 && i >= e)
              0 == e ? (t.push(r, ...n), (n.length = 0), (r = a)) : n.push(a),
                (i = e);
            else {
              let o = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                if (tu(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                  return e + (t - 4519);
                {
                  let n = s.get(e);
                  return n && (n = n.get(t)) ? n : -1;
                }
              })(r, a);
              o >= 0
                ? (r = o)
                : 0 == i && 0 == e
                ? (t.push(r), (r = a))
                : (n.push(a), (i = e));
            }
          }
          return r >= 0 && t.push(r, ...n), t;
        })(tl(e));
      }
      let th = (e) => Array.from(e);
      function td(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class tp extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function ty() {
        let e, t;
        if (c) return;
        let n = e7(
            "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"
          ),
          r = () => e6(n),
          i = () => new Set(r()),
          o = (e, t) => t.forEach((t) => e.add(t));
        (c = new Map(tt(n))),
          (u = i()),
          (l = r()),
          (f = new Set(r().map((e) => l[e]))),
          (l = new Set(l)),
          (h = i()),
          i();
        let a = te(n),
          s = n(),
          b = () => {
            let e = new Set();
            return r().forEach((t) => o(e, a[t])), o(e, r()), e;
          };
        (d = tn((e) => {
          let t = tn(n).map((e) => e + 96);
          if (t.length) {
            let r = e >= s;
            return (
              (t[0] -= 32),
              (t = to(t)),
              r && (t = `Restricted[${t}]`),
              { N: t, P: b(), Q: b(), M: !n(), R: r }
            );
          }
        })),
          (p = i()),
          (y = new Map());
        let w = r()
          .concat(th(p))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (w.forEach((e, t) => {
          let r = n(),
            i = (w[t] = r ? w[t - r] : { V: [], M: new Map() });
          i.V.push(e), p.has(e) || y.set(e, i);
        }),
        new Set(y.values()))) {
          let n = [];
          for (let t of e) {
            let e = d.filter((e) => td(e, t)),
              r = n.find(({ G: t }) => e.some((e) => t.has(e)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(t),
              o(r.G, e);
          }
          let r = n.flatMap((e) => th(e.G));
          for (let { G: e, V: i } of n) {
            let n = new Set(r.filter((t) => !e.has(t)));
            for (let e of i) t.set(e, n);
          }
        }
        m = new Set();
        let A = new Set(),
          C = (e) => (m.has(e) ? A.add(e) : m.add(e));
        for (let e of d) {
          for (let t of e.P) C(t);
          for (let t of e.Q) C(t);
        }
        for (let e of m) y.has(e) || A.has(e) || y.set(e, 1);
        for (let r of (o(m, tl(m).map(tc)),
        (v = ((e = []),
        (t = e6(n)),
        (function t({ S: n, B: r }, i, o) {
          if (!(4 & n) || o !== i[i.length - 1])
            for (let a of (2 & n && (o = i[i.length - 1]),
            1 & n && e.push(i),
            r))
              for (let e of a.Q) t(a, [...i, e], o);
        })(
          (function e(r) {
            return {
              S: n(),
              B: tn(() => {
                let r = e6(n).map((e) => t[e]);
                if (r.length) return e(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        e)
          .map((e) => tp.from(e))
          .sort(ta)),
        (g = new Map()),
        v)) {
          let e = [g];
          for (let t of r) {
            let n = e.map((e) => {
              let n = e.get(t);
              return n || ((n = new Map()), e.set(t, n)), n;
            });
            65039 === t ? e.push(...n) : (e = n);
          }
          for (let t of e) t.V = r;
        }
      }
      function tm(e) {
        return (tb(e) ? "" : `${tv(tg([e]))} `) + ti(e);
      }
      function tv(e) {
        return `"${e}"\u200E`;
      }
      function tg(e, t = 1 / 0, n = ti) {
        var r;
        let i = [];
        (r = e[0]),
          ty(),
          l.has(r) && i.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let o = 0,
          a = e.length;
        for (let t = 0; t < a; t++) {
          let r = e[t];
          tb(r) && (i.push(to(e.slice(o, t))), i.push(n(r)), (o = t + 1));
        }
        return i.push(to(e.slice(o, a))), i.join("");
      }
      function tb(e) {
        return ty(), h.has(e);
      }
      function tw(e) {
        return Error(`disallowed character: ${tm(e)}`);
      }
      function tA(e, t) {
        let n = tm(t),
          r = d.find((e) => e.P.has(t));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
        );
      }
      function tC(e) {
        return Error(`illegal placement: ${e}`);
      }
      function tE(e) {
        return e.filter((e) => 65039 != e);
      }
      function tk(e) {
        var t;
        return (t = (function (e, t, n) {
          if (!e) return [];
          ty();
          let r = 0;
          return e.split(".").map((e) => {
            let i = (function (e) {
                let t = [];
                for (let n = 0, r = e.length; n < r; ) {
                  let r = e.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), t.push(r);
                }
                return t;
              })(e),
              o = { input: i, offset: r };
            r += i.length + 1;
            try {
              let e,
                r = (o.tokens = (function (e, t, n) {
                  let r = [],
                    i = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let o = (function (e, t) {
                      let n,
                        r = g,
                        i = e.length;
                      for (; i && (r = r.get(e[--i])); ) {
                        let { V: o } = r;
                        o &&
                          ((n = o),
                          t && t.push(...e.slice(i).reverse()),
                          (e.length = i));
                      }
                      return n;
                    })(e);
                    if (o) i.length && (r.push(t(i)), (i = [])), r.push(n(o));
                    else {
                      let t = e.pop();
                      if (m.has(t)) i.push(t);
                      else {
                        let e = c.get(t);
                        if (e) i.push(...e);
                        else if (!u.has(t)) throw tw(t);
                      }
                    }
                  }
                  return i.length && r.push(t(i)), r;
                })(i, t, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let s = (o.output = r.flat());
              if (
                (!(function (e) {
                  for (let t = e.lastIndexOf(95); t > 0; )
                    if (95 !== e[--t])
                      throw Error("underscore allowed only at start");
                })(s),
                !(o.emoji = a > 1 || r[0].is_emoji) && s.every((e) => e < 128))
              )
                !(function (e) {
                  if (e.length >= 4 && 45 == e[2] && 45 == e[3])
                    throw Error(
                      `invalid label extension: "${to(e.slice(0, 4))}"`
                    );
                })(s),
                  (e = "ASCII");
              else {
                let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (l.has(s[0])) throw tC("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = r[e];
                    if (!t.is_emoji && l.has(t[0]))
                      throw tC(
                        `emoji + combining mark: "${to(r[e - 1])} + ${tg([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      n = e9.get(t);
                    if (n) throw tC(`leading ${n}`);
                    let r = e.length,
                      i = -1;
                    for (let o = 1; o < r; o++) {
                      t = e[o];
                      let r = e9.get(t);
                      if (r) {
                        if (i == o) throw tC(`${n} + ${r}`);
                        (i = o + 1), (n = r);
                      }
                    }
                    if (i == r) throw tC(`trailing ${n}`);
                  })(s);
                  let n = th(new Set(t)),
                    [i] = (function (e) {
                      let t = d;
                      for (let n of e) {
                        let e = t.filter((e) => td(e, n));
                        if (!e.length) {
                          if (d.some((e) => td(e, n))) throw tA(t[0], n);
                          throw tw(n);
                        }
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(n);
                  (function (e, t) {
                    for (let n of t) if (!td(e, n)) throw tA(e, n);
                    if (e.M) {
                      let e = tl(t).map(tc);
                      for (let t = 1, n = e.length; t < n; t++)
                        if (f.has(e[t])) {
                          let r = t + 1;
                          for (let i; r < n && f.has((i = e[r])); r++)
                            for (let n = t; n < r; n++)
                              if (e[n] == i)
                                throw Error(
                                  `duplicate non-spacing marks: ${tm(i)}`
                                );
                          if (r - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${tv(
                                tg(e.slice(t - 1, r))
                              )} (${r - t}/4)`
                            );
                          t = r;
                        }
                    }
                  })(i, t),
                    (function (e, t) {
                      let n;
                      let r = [];
                      for (let e of t) {
                        let t = y.get(e);
                        if (1 === t) return;
                        if (t) {
                          let r = t.M.get(e);
                          if (
                            !(n = n ? n.filter((e) => r.has(e)) : th(r)).length
                          )
                            return;
                        } else r.push(e);
                      }
                      if (n) {
                        for (let t of n)
                          if (r.every((e) => td(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(i, n),
                    (e = i.N);
                } else e = "Emoji";
              }
              o.type = e;
            } catch (e) {
              o.error = e;
            }
            return o;
          });
        })(e, tf, tE))
          .map(({ input: e, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(
                1 == t.length ? r : `Invalid label ${tv(tg(e, 63))}: ${r}`
              );
            }
            return to(r);
          })
          .join(".");
      }
      function tO(e, t, n) {
        let r, i, o, a, s, c, u, l;
        let f = e.isNewChainsStale ?? !0;
        return (e) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: tO.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (s || ((s = this.onConnect.bind(this)), e.on("connect", s)),
              u ||
                ((u = this.onSessionDelete.bind(this)),
                e.on("session_delete", u)));
          },
          async connect({ ...e } = {}) {
            try {
              let t = await this.getProvider();
              if (!t) throw new x.M();
              c || ((c = this.onDisplayUri), t.on("display_uri", c));
              let r = await this.isChainsStale();
              if ((t.session && r && (await t.disconnect()), !t.session || r)) {
                let r = e2.s.createNamespaces(n);
                await t.connect({
                  optionalNamespaces: r,
                  ...("pairingTopic" in e
                    ? { pairingTopic: e.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(n.map((e) => Number(e.id)));
              }
              let i = (await t.enable()).map((e) => (0, O.K)(e)),
                f = await this.getChainId();
              return (
                c && (t.removeListener("display_uri", c), (c = void 0)),
                s && (t.removeListener("connect", s), (s = void 0)),
                o ||
                  ((o = this.onAccountsChanged.bind(this)),
                  t.on("accountsChanged", o)),
                a ||
                  ((a = this.onChainChanged.bind(this)),
                  t.on("chainChanged", a)),
                l ||
                  ((l = this.onDisconnect.bind(this)), t.on("disconnect", l)),
                u ||
                  ((u = this.onSessionDelete.bind(this)),
                  t.on("session_delete", u)),
                { accounts: i, chainId: f }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new I.ab(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              a && (e?.removeListener("chainChanged", a), (a = void 0)),
                l && (e?.removeListener("disconnect", l), (l = void 0)),
                s || ((s = this.onConnect.bind(this)), e?.on("connect", s)),
                o && (e?.removeListener("accountsChanged", o), (o = void 0)),
                u && (e?.removeListener("session_delete", u), (u = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e?.session?.namespaces) return [];
            let t = e?.session?.namespaces.eip155?.accounts;
            return t?.map((e) => e.split(":")[2]) ?? [];
          },
          async getProvider({ chainId: e } = {}) {
            async function o() {
              if (!n.map((e) => Number(e.id)).length) return;
              let e = t.universalAdapter?.getWalletConnectProvider();
              if (!e) throw Error("Provider not found");
              return e;
            }
            r ||
              (i || (i = o()),
              (r = await i),
              r?.events.setMaxListeners(Number.POSITIVE_INFINITY));
            let a = t.getCaipNetwork()?.id;
            if (e && a !== e) {
              let t = ez.MO.getStoredActiveCaipNetwork();
              t && t.chainNamespace === e3.bq.CHAIN.EVM
                ? await this.switchChain?.({ chainId: Number(t.id) })
                : await this.switchChain?.({ chainId: e });
            }
            return r;
          },
          async getChainId() {
            let e = t.getCaipNetwork()?.id;
            if (e) return e;
            let r = await this.getProvider(),
              i = r.session?.namespaces.eip155?.chains?.[0],
              o = n.find((e) => e.id === i);
            return o?.id;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: t, chainId: r }) {
            let i = await this.getProvider();
            if (!i) throw new x.M();
            let o = n.find((e) => e.id === r);
            if (!o) throw new I.x3(new T.X4());
            try {
              o?.caipNetworkId && i.setDefaultChain(o?.caipNetworkId),
                await i.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, N.eC)(r) }],
                }),
                e.emitter.emit("change", { chainId: Number(r) });
              let t = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...t, r]), { ...o, id: o.id };
            } catch (e) {
              if (/(?:user rejected)/iu.test(e.message)) throw new I.ab(e);
              try {
                let e = {
                  blockExplorerUrls: t?.blockExplorerUrls
                    ? t.blockExplorerUrls
                    : o.blockExplorers?.default.url
                    ? [o.blockExplorers?.default.url]
                    : [],
                  chainId: (0, N.eC)(r),
                  chainName: o.name,
                  iconUrls: t?.iconUrls,
                  nativeCurrency: o.nativeCurrency,
                  rpcUrls: o.rpcUrls.default.http,
                };
                await i.request({
                  method: "wallet_addEthereumChain",
                  params: [e],
                });
                let n = await this.getRequestedChainsIds();
                return (
                  this.setRequestedChainsIds([...n, r]), { ...o, id: o.id }
                );
              } catch (e) {
                throw new I.ab(e);
              }
            }
          },
          onAccountsChanged(t) {
            0 === t.length
              ? this.onDisconnect()
              : e.emitter.emit("change", {
                  accounts: t.map((e) => (0, O.K)(e)),
                });
          },
          onChainChanged(t) {
            let n = Number(t);
            e.emitter.emit("change", { chainId: n });
          },
          async onConnect(t) {
            let n = Number(t.chainId),
              r = await this.getAccounts();
            e.emitter.emit("connect", { accounts: r, chainId: n });
          },
          async onDisconnect(t) {
            this.setRequestedChainsIds([]), e.emitter.emit("disconnect");
            let n = await this.getProvider();
            o && (n.removeListener("accountsChanged", o), (o = void 0)),
              a && (n.removeListener("chainChanged", a), (a = void 0)),
              l && (n.removeListener("disconnect", l), (l = void 0)),
              u && (n.removeListener("session_delete", u), (u = void 0)),
              s || ((s = this.onConnect.bind(this)), n.on("connect", s));
          },
          onDisplayUri(t) {
            e.emitter.emit("message", { type: "display_uri", data: t });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds() {
            if (!r?.session?.namespaces) return [];
            let e = r?.session?.namespaces.eip155?.accounts;
            return e?.map((e) => Number.parseInt(e.split(":")[1] ?? "")) ?? [];
          },
          async getRequestedChainsIds() {
            let t =
              (await e.storage?.getItem(this.requestedChainsStorageKey)) ?? [];
            return [...new Set(t)];
          },
          async isChainsStale() {
            if (!f) return !1;
            let t = e.chains.map((e) => e.id),
              n = this.getNamespaceChainsIds();
            if (n.length && !n.some((e) => t.includes(e))) return !1;
            let r = await this.getRequestedChainsIds();
            return !t.every((e) => r.includes(Number(e)));
          },
          async setRequestedChainsIds(t) {
            await e.storage?.setItem(this.requestedChainsStorageKey, t);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        });
      }
      function tI(e = {}) {
        let t, r, i, o, a, s, c, u, l;
        return "3" === e.version || e.headlessMode
          ? (s) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              supportsSimulation: !0,
              type: tI.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, O.K)(e));
                  i ||
                    ((i = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", i)),
                    o ||
                      ((o = this.onChainChanged.bind(this)),
                      t.on("chainChanged", o)),
                    a ||
                      ((a = this.onDisconnect.bind(this)),
                      t.on("disconnect", a));
                  let r = await this.getChainId();
                  if (e && r !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === I.ab.code) throw e;
                        return { id: r };
                      }
                    );
                    r = t?.id ?? r;
                  }
                  return { accounts: n, chainId: r };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new I.ab(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                i && (e.removeListener("accountsChanged", i), (i = void 0)),
                  o && (e.removeListener("chainChanged", o), (o = void 0)),
                  a && (e.removeListener("disconnect", a), (a = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, O.K)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!r) {
                  t = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(684),
                      n.e(493),
                      n.e(753),
                    ]).then(n.t.bind(n, 51493, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...e, reloadOnDisconnect: !1 });
                  let i = t.walletExtension?.getChainId(),
                    o =
                      s.chains.find((t) =>
                        e.chainId ? t.id === e.chainId : t.id === i
                      ) || s.chains[0],
                    a = e.chainId || o?.id,
                    c = e.jsonRpcUrl || o?.rpcUrls.default.http[0];
                  r = t.makeWeb3Provider(c, a);
                }
                return r;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: e, chainId: t }) {
                let n = s.chains.find((e) => e.id === t);
                if (!n) throw new I.x3(new T.X4());
                let r = await this.getProvider();
                try {
                  return (
                    await r.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, N.eC)(n.id) }],
                    }),
                    n
                  );
                } catch (i) {
                  if (4902 === i.code)
                    try {
                      let i, o;
                      (i = e?.blockExplorerUrls
                        ? e.blockExplorerUrls
                        : n.blockExplorers?.default.url
                        ? [n.blockExplorers?.default.url]
                        : []),
                        (o = e?.rpcUrls?.length
                          ? e.rpcUrls
                          : [n.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: i,
                        chainId: (0, N.eC)(t),
                        chainName: e?.chainName ?? n.name,
                        iconUrls: e?.iconUrls,
                        nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                        rpcUrls: o,
                      };
                      return (
                        await r.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        n
                      );
                    } catch (e) {
                      throw new I.ab(e);
                    }
                  throw new I.x3(i);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : s.emitter.emit("change", {
                      accounts: e.map((e) => (0, O.K)(e)),
                    });
              },
              onChainChanged(e) {
                let t = Number(e);
                s.emitter.emit("change", { chainId: t });
              },
              async onDisconnect(e) {
                s.emitter.emit("disconnect");
                let t = await this.getProvider();
                i && (t.removeListener("accountsChanged", i), (i = void 0)),
                  o && (t.removeListener("chainChanged", o), (o = void 0)),
                  a && (t.removeListener("disconnect", a), (a = void 0));
              },
            })
          : (t) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              supportsSimulation: !0,
              type: tI.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, O.K)(e));
                  c ||
                    ((c = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", c)),
                    u ||
                      ((u = this.onChainChanged.bind(this)),
                      t.on("chainChanged", u)),
                    l ||
                      ((l = this.onDisconnect.bind(this)),
                      t.on("disconnect", l));
                  let r = await this.getChainId();
                  if (e && r !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === I.ab.code) throw e;
                        return { id: r };
                      }
                    );
                    r = t?.id ?? r;
                  }
                  return { accounts: n, chainId: r };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new I.ab(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                c && (e.removeListener("accountsChanged", c), (c = void 0)),
                  u && (e.removeListener("chainChanged", u), (u = void 0)),
                  l && (e.removeListener("disconnect", l), (l = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, O.K)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              getProvider: async () => (
                s ||
                  (s = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(684),
                      n.e(304),
                      n.e(726),
                    ]).then(n.t.bind(n, 4304, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({
                    ...e,
                    appChainIds: t.chains.map((e) => e.id),
                  }).makeWeb3Provider({
                    ...e,
                    options: e.preference ?? "all",
                  })),
                s
              ),
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: e, chainId: n }) {
                let r = t.chains.find((e) => e.id === n);
                if (!r) throw new I.x3(new T.X4());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, N.eC)(r.id) }],
                    }),
                    r
                  );
                } catch (t) {
                  if (4902 === t.code)
                    try {
                      let t, o;
                      (t = e?.blockExplorerUrls
                        ? e.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (o = e?.rpcUrls?.length
                          ? e.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: t,
                        chainId: (0, N.eC)(n),
                        chainName: e?.chainName ?? r.name,
                        iconUrls: e?.iconUrls,
                        nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: o,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new I.ab(e);
                    }
                  throw new I.x3(t);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : t.emitter.emit("change", {
                      accounts: e.map((e) => (0, O.K)(e)),
                    });
              },
              onChainChanged(e) {
                let n = Number(e);
                t.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(e) {
                t.emitter.emit("disconnect");
                let n = await this.getProvider();
                c && (n.removeListener("accountsChanged", c), (c = void 0)),
                  u && (n.removeListener("chainChanged", u), (u = void 0)),
                  l && (n.removeListener("disconnect", l), (l = void 0));
              },
            });
      }
      (tO.type = "walletConnect"), (tI.type = "coinbaseWallet");
      class tS {
        constructor() {}
        static getInstance({ projectId: e, chainId: t, onTimeout: n }) {
          return (
            tS.instance ||
              (tS.instance = new e5.Sd({
                projectId: e,
                chainId: t,
                onTimeout: n,
              })),
            tS.instance
          );
        }
      }
      var tD = n(61499);
      let tN = [
        "eth_accounts",
        "eth_requestAccounts",
        "eth_sendRawTransaction",
        "eth_sign",
        "eth_signTransaction",
        "eth_signTypedData",
        "eth_signTypedData_v3",
        "eth_signTypedData_v4",
        "eth_sendTransaction",
        "personal_sign",
        "wallet_switchEthereumChain",
        "wallet_addEthereumChain",
        "wallet_getPermissions",
        "wallet_requestPermissions",
        "wallet_registerOnboarding",
        "wallet_watchAsset",
        "wallet_scanQRCode",
        "wallet_getCallsStatus",
        "wallet_sendCalls",
        "wallet_getCapabilities",
        "wallet_grantPermissions",
      ];
      class tT {
        constructor(e) {
          if (
            ((this.appKit = void 0),
            (this.options = void 0),
            (this.chainNamespace = e3.bq.CHAIN.EVM),
            (this.defaultCaipNetwork = void 0),
            (this.tokens = e1.gk.getCaipTokens(this.options?.tokens)),
            (this.siweControllerClient = this.options?.siweConfig),
            (this.adapterType = "wagmi"),
            !e.projectId)
          )
            throw Error(
              e1.jD.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED.shortMessage
            );
          (this.caipNetworks = e1.fZ.extendCaipNetworks(e.networks, {
            projectId: e.projectId,
            customNetworkImageUrls: {},
          })),
            (this.wagmiChains = this.caipNetworks.filter(
              (e) => e.chainNamespace === e3.bq.CHAIN.EVM
            ));
          let t = this.wagmiChains.map((e) => [
            e.id,
            e1.fZ.getViemTransport(e),
          ]);
          Object.entries(e.transports ?? {}).forEach(([e, n]) => {
            let r = t.findIndex(([t]) => t === Number(e));
            -1 === r ? t.push([Number(e), n]) : (t[r] = [Number(e), n]);
          });
          let n = Object.fromEntries(t),
            i = [...(e.connectors ?? [])];
          (this.wagmiConfig = (function (e) {
            let t;
            let {
                multiInjectedProviderDiscovery: n = !0,
                storage: i = (0, j.o)({
                  storage:
                    "undefined" != typeof window && window.localStorage
                      ? window.localStorage
                      : j.w,
                }),
                syncConnectedChain: o = !0,
                ssr: a = !1,
                ...s
              } = e,
              c =
                "undefined" != typeof window && n
                  ? (function () {
                      let e = new Set(),
                        t = [],
                        n = () =>
                          (function (e) {
                            if ("undefined" == typeof window) return;
                            let t = (t) => e(t.detail);
                            return (
                              window.addEventListener(
                                "eip6963:announceProvider",
                                t
                              ),
                              window.dispatchEvent(
                                new CustomEvent("eip6963:requestProvider")
                              ),
                              () =>
                                window.removeEventListener(
                                  "eip6963:announceProvider",
                                  t
                                )
                            );
                          })((n) => {
                            t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                              ((t = [...t, n]),
                              e.forEach((e) => e(t, { added: [n] })));
                          }),
                        r = n();
                      return {
                        _listeners: () => e,
                        clear() {
                          e.forEach((e) => e([], { removed: [...t] })),
                            (t = []);
                        },
                        destroy() {
                          this.clear(), e.clear(), r?.();
                        },
                        findProvider: ({ rdns: e }) =>
                          t.find((t) => t.info.rdns === e),
                        getProviders: () => t,
                        reset() {
                          this.clear(), r?.(), (r = n());
                        },
                        subscribe: (n, { emitImmediately: r } = {}) => (
                          e.add(n), r && n(t, { added: t }), () => e.delete(n)
                        ),
                      };
                    })()
                  : void 0,
              u = k(() => s.chains),
              l = k(() => {
                let e = [],
                  t = new Set();
                for (let n of s.connectors ?? []) {
                  let r = f(n);
                  e.push(r), !a && r.rdns && t.add(r.rdns);
                }
                if (!a && c)
                  for (let n of c.getProviders())
                    t.has(n.info.rdns) || e.push(f(h(n)));
                return e;
              });
            function f(e) {
              let t = new F(
                  (function (e = 11) {
                    if (!r || L + e > 512) {
                      (r = ""), (L = 0);
                      for (let e = 0; e < 256; e++)
                        r += ((256 + 256 * Math.random()) | 0)
                          .toString(16)
                          .substring(1);
                    }
                    return r.substring(L, L++ + e);
                  })()
                ),
                n = {
                  ...e({
                    emitter: t,
                    chains: u.getState(),
                    storage: i,
                    transports: s.transports,
                  }),
                  emitter: t,
                  uid: t.uid,
                };
              return t.on("connect", A), n.setup?.(), n;
            }
            function h(e) {
              let { info: t } = e,
                n = e.provider;
              return P({ target: { ...t, id: t.rdns, provider: n } });
            }
            let d = new Map();
            function p() {
              return {
                chainId: u.getState()[0].id,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            }
            let y = "0.0.0-canary-";
            t = q.i.startsWith(y)
              ? Number.parseInt(q.i.replace(y, ""))
              : Number.parseInt(q.i.split(".")[0] ?? "0");
            let m = k(
              w(
                i
                  ? C(p, {
                      migrate(e, n) {
                        if (n === t) return e;
                        let r = p(),
                          i = v(e, r.chainId);
                        return { ...r, chainId: i };
                      },
                      name: "store",
                      partialize: (e) => ({
                        connections: {
                          __type: "Map",
                          value: Array.from(e.connections.entries()).map(
                            ([e, t]) => {
                              let {
                                id: n,
                                name: r,
                                type: i,
                                uid: o,
                              } = t.connector;
                              return [
                                e,
                                {
                                  ...t,
                                  connector: {
                                    id: n,
                                    name: r,
                                    type: i,
                                    uid: o,
                                  },
                                },
                              ];
                            }
                          ),
                        },
                        chainId: e.chainId,
                        current: e.current,
                      }),
                      merge(e, t) {
                        "object" == typeof e &&
                          e &&
                          "status" in e &&
                          delete e.status;
                        let n = v(e, t.chainId);
                        return { ...t, ...e, chainId: n };
                      },
                      skipHydration: a,
                      storage: i,
                      version: t,
                    })
                  : p
              )
            );
            function v(e, t) {
              return e &&
                "object" == typeof e &&
                "chainId" in e &&
                "number" == typeof e.chainId &&
                u.getState().some((t) => t.id === e.chainId)
                ? e.chainId
                : t;
            }
            function g(e) {
              m.setState((t) => {
                let n = t.connections.get(e.uid);
                return n
                  ? {
                      ...t,
                      connections: new Map(t.connections).set(e.uid, {
                        accounts: e.accounts ?? n.accounts,
                        chainId: e.chainId ?? n.chainId,
                        connector: n.connector,
                      }),
                    }
                  : t;
              });
            }
            function A(e) {
              "connecting" !== m.getState().status &&
                "reconnecting" !== m.getState().status &&
                m.setState((t) => {
                  let n = l.getState().find((t) => t.uid === e.uid);
                  return n
                    ? (n.emitter.listenerCount("connect") &&
                        n.emitter.off("connect", g),
                      n.emitter.listenerCount("change") ||
                        n.emitter.on("change", g),
                      n.emitter.listenerCount("disconnect") ||
                        n.emitter.on("disconnect", E),
                      {
                        ...t,
                        connections: new Map(t.connections).set(e.uid, {
                          accounts: e.accounts,
                          chainId: e.chainId,
                          connector: n,
                        }),
                        current: e.uid,
                        status: "connected",
                      })
                    : t;
                });
            }
            function E(e) {
              m.setState((t) => {
                let n = t.connections.get(e.uid);
                if (n) {
                  let e = n.connector;
                  e.emitter.listenerCount("change") &&
                    n.connector.emitter.off("change", g),
                    e.emitter.listenerCount("disconnect") &&
                      n.connector.emitter.off("disconnect", E),
                    e.emitter.listenerCount("connect") ||
                      n.connector.emitter.on("connect", A);
                }
                if ((t.connections.delete(e.uid), 0 === t.connections.size))
                  return {
                    ...t,
                    connections: new Map(),
                    current: null,
                    status: "disconnected",
                  };
                let r = t.connections.values().next().value;
                return {
                  ...t,
                  connections: new Map(t.connections),
                  current: r.connector.uid,
                };
              });
            }
            return (
              m.setState(p()),
              o &&
                m.subscribe(
                  ({ connections: e, current: t }) =>
                    t ? e.get(t)?.chainId : void 0,
                  (e) => {
                    if (u.getState().some((t) => t.id === e))
                      return m.setState((t) => ({
                        ...t,
                        chainId: e ?? t.chainId,
                      }));
                  }
                ),
              c?.subscribe((e) => {
                let t = new Set(),
                  n = new Set();
                for (let e of l.getState())
                  t.add(e.id), e.rdns && n.add(e.rdns);
                let r = [];
                for (let i of e) {
                  if (n.has(i.info.rdns)) continue;
                  let e = f(h(i));
                  t.has(e.id) || r.push(e);
                }
                (!i || m.persist.hasHydrated()) &&
                  l.setState((e) => [...e, ...r], !0);
              }),
              {
                get chains() {
                  return u.getState();
                },
                get connectors() {
                  return l.getState();
                },
                storage: i,
                getClient: function (e = {}) {
                  let t;
                  let n = e.chainId ?? m.getState().chainId,
                    r = u.getState().find((e) => e.id === n);
                  if (e.chainId && !r) throw new T.X4();
                  {
                    let e = d.get(m.getState().chainId);
                    if (e && !r) return e;
                    if (!r) throw new T.X4();
                  }
                  {
                    let e = d.get(n);
                    if (e) return e;
                  }
                  if (s.client) t = s.client({ chain: r });
                  else {
                    let e = r.id,
                      n = u.getState().map((e) => e.id),
                      i = {};
                    for (let [t, r] of Object.entries(s))
                      if (
                        "chains" !== t &&
                        "client" !== t &&
                        "connectors" !== t &&
                        "transports" !== t
                      ) {
                        if ("object" == typeof r) {
                          if (e in r) i[t] = r[e];
                          else {
                            if (n.some((e) => e in r)) continue;
                            i[t] = r;
                          }
                        } else i[t] = r;
                      }
                    t = (0, b.e)({
                      ...i,
                      chain: r,
                      batch: i.batch ?? { multicall: !0 },
                      transport: (t) =>
                        s.transports[e]({ ...t, connectors: l }),
                    });
                  }
                  return d.set(n, t), t;
                },
                get state() {
                  return m.getState();
                },
                setState(e) {
                  let t;
                  t = "function" == typeof e ? e(m.getState()) : e;
                  let n = p();
                  "object" != typeof t && (t = n),
                    Object.keys(n).some((e) => !(e in t)) && (t = n),
                    m.setState(t, !0);
                },
                subscribe: (e, t, n) =>
                  m.subscribe(
                    e,
                    t,
                    n ? { ...n, fireImmediately: n.emitImmediately } : void 0
                  ),
                _internal: {
                  mipd: c,
                  store: m,
                  ssr: !!a,
                  syncConnectedChain: o,
                  transports: s.transports,
                  chains: {
                    setState(e) {
                      let t = "function" == typeof e ? e(u.getState()) : e;
                      if (0 !== t.length) return u.setState(t, !0);
                    },
                    subscribe: (e) => u.subscribe(e),
                  },
                  connectors: {
                    providerDetailToConnector: h,
                    setup: f,
                    setState: (e) =>
                      l.setState(
                        "function" == typeof e ? e(l.getState()) : e,
                        !0
                      ),
                    subscribe: (e) => l.subscribe(e),
                  },
                  events: { change: g, connect: A, disconnect: E },
                },
              }
            );
          })({ ...e, chains: this.wagmiChains, transports: n, connectors: i })),
            ez.ChainController.subscribeKey("activeCaipAddress", (e) => {
              let t = e?.startsWith("eip155:"),
                n = ez.ChainController.state.activeCaipNetwork,
                r = n?.chainNamespace === this.chainNamespace;
              n &&
                t &&
                r &&
                this.setProfileAndBalance(
                  ez.j1.getPlainAddress(e),
                  Number(n.id)
                );
            });
        }
        setCustomConnectors(e, t) {
          let n = [];
          !1 !== e.enableWalletConnect && n.push(tO(e, t, this.caipNetworks)),
            !1 !== e.enableInjected && n.push(P({ shimDisconnect: !0 })),
            !1 !== e.enableCoinbase &&
              n.push(
                tI({
                  version: "4",
                  appName: e.metadata?.name ?? "Unknown",
                  appLogoUrl: e.metadata?.icons[0] ?? "Unknown",
                  preference: e.coinbasePreference ?? "all",
                })
              );
          let r =
              e.features?.email === void 0
                ? ez.bq.DEFAULT_FEATURES.email
                : e.features?.email,
            i = e.features?.socials
              ? e.features?.socials?.length > 0
              : ez.bq.DEFAULT_FEATURES.socials;
          (r || i) &&
            n.push(
              (function (e) {
                let t = null;
                function n(e) {
                  return e3.p1.parseEvmChainId(e) || 1;
                }
                return (r) => ({
                  id: e1.bq.AUTH_CONNECTOR_ID,
                  name: "AppKit Auth",
                  type: "w3mAuth",
                  chain: e3.bq.CHAIN.EVM,
                  async connect(e = {}) {
                    let r = await this.getProvider(),
                      i = e.chainId;
                    if (e.isReconnecting && !(i = r.getLastUsedChainId()))
                      throw Error("ChainId not found in provider");
                    let { address: o, chainId: a } = await r.connect({
                      chainId: i,
                    });
                    (t = o), await r.getSmartAccountEnabledNetworks();
                    let s = n(a);
                    return {
                      accounts: [t],
                      account: t,
                      chainId: s,
                      chain: { id: s, unsuported: !1 },
                    };
                  },
                  async disconnect() {
                    let e = await this.getProvider();
                    await e.disconnect();
                  },
                  getAccounts: () =>
                    t
                      ? (r.emitter.emit("change", { accounts: [t] }),
                        Promise.resolve([t]))
                      : Promise.resolve([]),
                  async getProvider() {
                    return (
                      this.provider ||
                        (this.provider = tS.getInstance({
                          projectId: e.options.projectId,
                          onTimeout: () => {
                            ez.AlertController.open(
                              e1.jD.ALERT_ERRORS
                                .INVALID_APP_CONFIGURATION_SOCIALS,
                              "error"
                            );
                          },
                        })),
                      Promise.resolve(this.provider)
                    );
                  },
                  async getChainId() {
                    let e = await this.getProvider(),
                      { chainId: t } = await e.getChainId();
                    return n(t);
                  },
                  async isAuthorized() {
                    let e = await this.getProvider(),
                      { isConnected: t } = await e.isConnected();
                    return t;
                  },
                  async switchChain({ chainId: e }) {
                    try {
                      let t = r.chains.find((t) => t.id === e);
                      if (!t)
                        throw new I.x3(Error("chain not found on connector."));
                      let n = await this.getProvider(),
                        i = await n.connect({ chainId: e });
                      return (
                        r.emitter.emit("change", {
                          chainId: Number(e),
                          accounts: [i.address],
                        }),
                        t
                      );
                    } catch (e) {
                      if (e instanceof Error) throw new I.x3(e);
                      throw e;
                    }
                  },
                  onAccountsChanged(e) {
                    0 === e.length
                      ? this.onDisconnect()
                      : r.emitter.emit("change", { accounts: e.map(O.K) });
                  },
                  onChainChanged(e) {
                    let t = Number(e);
                    r.emitter.emit("change", { chainId: t });
                  },
                  async onDisconnect(e) {
                    let t = await this.getProvider();
                    await t.disconnect();
                  },
                });
              })({
                chains: this.wagmiChains,
                options: { projectId: e.projectId },
              })
            ),
            n.forEach((e) => {
              let t = this.wagmiConfig._internal.connectors.setup(e);
              this.wagmiConfig._internal.connectors.setState((e) => [...e, t]);
            });
        }
        construct(e, t) {
          if (
            ((this.appKit = e),
            (this.options = t),
            (this.defaultCaipNetwork = t.defaultNetwork || t.networks?.[0]),
            (this.tokens = e1.gk.getCaipTokens(t.tokens)),
            this.setCustomConnectors(t, e),
            !this.wagmiConfig)
          )
            throw Error("appkit:wagmiConfig - is undefined");
          (this.networkControllerClient = {
            switchCaipNetwork: async (e) => {
              let t = e?.id;
              t &&
                this.wagmiConfig &&
                (await (0, B.c)(this.wagmiConfig, { chainId: t }));
            },
            getApprovedCaipNetworksData: async () => {
              if (!this.wagmiConfig)
                throw Error(
                  "networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined"
                );
              return new Promise((e) => {
                let t = new Map(this.wagmiConfig.state.connections).get(
                  this.wagmiConfig.state.current || ""
                );
                t?.connector?.id === e1.bq.AUTH_CONNECTOR_ID
                  ? e({
                      supportsAllNetworks: !0,
                      approvedCaipNetworkIds:
                        e1.CK.WalletConnectRpcChainIds.map(
                          (e) => `${e1.bq.EIP155}:${e}`
                        ),
                    })
                  : t?.connector?.id === e1.bq.WALLET_CONNECT_CONNECTOR_ID &&
                    e(
                      e4(
                        this.wagmiConfig.connectors.find(
                          (e) => e.id === e1.bq.WALLET_CONNECT_CONNECTOR_ID
                        )
                      )
                    ),
                  e({ approvedCaipNetworkIds: [], supportsAllNetworks: !0 });
              });
            },
          }),
            (this.connectionControllerClient = {
              connectWalletConnect: async () => {
                if (!this.wagmiConfig)
                  throw Error(
                    "connectionControllerClient:getWalletConnectUri - wagmiConfig is undefined"
                  );
                let e = this.wagmiConfig.connectors.find(
                  (e) => e.id === e1.bq.WALLET_CONNECT_CONNECTOR_ID
                );
                if (!e)
                  throw Error(
                    "connectionControllerClient:getWalletConnectUri - connector is undefined"
                  );
                let t = await e.getProvider(),
                  r = await this.options?.siweConfig?.getMessageParams?.(),
                  i = this.options?.siweConfig?.options?.enabled,
                  o = "function" == typeof t?.authenticate,
                  a = r && Object.keys(r || {}).length > 0,
                  s = this.options?.siweConfig;
                if (i && o && a && s) {
                  await e.setRequestedChainsIds(r.chains);
                  let {
                      SIWEController: i,
                      getDidChainId: o,
                      getDidAddress: a,
                    } = await n.e(906).then(n.bind(n, 45906)),
                    c = this.caipNetworks
                      ?.filter((e) => "eip155" === e.chainNamespace)
                      .map((e) => e.caipNetworkId);
                  r.chains = this.caipNetworks
                    ?.filter((e) => "eip155" === e.chainNamespace)
                    .map((e) => e.id);
                  let u = await t.authenticate({
                      nonce: await s.getNonce(),
                      methods: [...tN],
                      ...r,
                      chains: c,
                    }),
                    l = u?.auths?.[0];
                  if (l) {
                    let { p: e, s: n } = l,
                      r = o(e.iss),
                      s = a(e.iss);
                    s &&
                      r &&
                      i.setSession({ address: s, chainId: parseInt(r, 10) });
                    try {
                      let r = t.client.formatAuthMessage({
                        request: e,
                        iss: e.iss,
                      });
                      await i.verifyMessage({
                        message: r,
                        signature: n.s,
                        cacao: l,
                      });
                    } catch (e) {
                      throw (
                        (console.error("Error verifying message", e),
                        await t.disconnect().catch(console.error),
                        await i.signOut().catch(console.error),
                        e)
                      );
                    }
                  }
                }
                let c = this.appKit?.getCaipNetworkId();
                await U(this.wagmiConfig, { connector: e, chainId: c });
              },
              connectExternal: async ({ id: e, provider: t, info: n }) => {
                if (!this.wagmiConfig)
                  throw Error(
                    "networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined"
                  );
                let r = this.wagmiConfig.connectors.find((t) => t.id === e);
                if (!r)
                  throw Error(
                    "connectionControllerClient:connectExternal - connector is undefined"
                  );
                this.appKit?.setClientId(null),
                  t &&
                    n &&
                    r.id === e1.bq.EIP6963_CONNECTOR_ID &&
                    r.setEip6963Wallet?.({ provider: t, info: n });
                let i = this.appKit?.getCaipNetworkId();
                await U(this.wagmiConfig, { connector: r, chainId: i });
              },
              checkInstalled: (e) => {
                let t = this.appKit
                  ?.getConnectors()
                  .find((e) => "INJECTED" === e.type);
                return e
                  ? !!t &&
                      !!window?.ethereum &&
                      e.some((e) => !!window.ethereum?.[String(e)])
                  : !!window.ethereum;
              },
              disconnect: async () => {
                if (
                  (await (0, K.z)(this.wagmiConfig),
                  this.options?.siweConfig?.options?.signOutOnDisconnect)
                ) {
                  let { SIWEController: e } = await n
                    .e(906)
                    .then(n.bind(n, 45906));
                  await e.signOut();
                }
                e3.mr.removeItem(e3.uJ.WALLET_ID),
                  e3.mr.removeItem(e3.uJ.CONNECTED_CONNECTOR),
                  e3.mr.removeItem(e3.uJ.WALLET_NAME),
                  this.appKit?.setClientId(null),
                  this.syncAccount({
                    address: void 0,
                    chainId: void 0,
                    connector: void 0,
                    addresses: void 0,
                    status: "disconnected",
                  }),
                  this.appKit?.resetAccount("solana");
              },
              signMessage: async (e) => {
                let t = e8(this.appKit?.getCaipAddress() || "");
                return H(this.wagmiConfig, { message: e, account: t });
              },
              estimateGas: async (e) => {
                if (e.chainNamespace && "eip155" !== e.chainNamespace)
                  throw Error(
                    `Invalid chain namespace - Expected eip155, got ${e.chainNamespace}`
                  );
                try {
                  return await Z(this.wagmiConfig, {
                    account: e.address,
                    to: e.to,
                    data: e.data,
                    type: "legacy",
                  });
                } catch (e) {
                  return BigInt(0);
                }
              },
              getCapabilities: async (e) => {
                if (!this.wagmiConfig)
                  throw Error(
                    "connectionControllerClient:getCapabilities - wagmiConfig is undefined"
                  );
                let t = (0, X.E)(this.wagmiConfig)[0];
                if (!t?.connector)
                  throw Error(
                    "connectionControllerClient:getCapabilities - connector is undefined"
                  );
                let n = await t.connector.getProvider();
                if (!n)
                  throw Error(
                    "connectionControllerClient:getCapabilities - provider is undefined"
                  );
                let r = n.session?.sessionProperties?.capabilities;
                if (r) {
                  let t = (function (e) {
                    try {
                      return JSON.parse(e);
                    } catch (e) {
                      throw Error("Error parsing wallet capabilities");
                    }
                  })(r)[e];
                  if (t) return t;
                }
                return await n.request({
                  method: "wallet_getCapabilities",
                  params: [e],
                });
              },
              grantPermissions: async (e) => {
                if (!this.wagmiConfig)
                  throw Error(
                    "connectionControllerClient:grantPermissions - wagmiConfig is undefined"
                  );
                let t = (0, X.E)(this.wagmiConfig)[0];
                if (!t?.connector)
                  throw Error(
                    "connectionControllerClient:grantPermissions - connector is undefined"
                  );
                let n = await t.connector.getProvider();
                if (!n)
                  throw Error(
                    "connectionControllerClient:grantPermissions - provider is undefined"
                  );
                return n.request({
                  method: "wallet_grantPermissions",
                  params: e,
                });
              },
              revokePermissions: async (e) => {
                if (!this.wagmiConfig)
                  throw Error(
                    "connectionControllerClient:revokePermissions - wagmiConfig is undefined"
                  );
                let t = (0, X.E)(this.wagmiConfig)[0];
                if (!t?.connector)
                  throw Error(
                    "connectionControllerClient:revokePermissions - connector is undefined"
                  );
                let n = await t.connector.getProvider();
                if (!n)
                  throw Error(
                    "connectionControllerClient:revokePermissions - provider is undefined"
                  );
                return n.request({
                  method: "wallet_revokePermissions",
                  params: [e],
                });
              },
              sendTransaction: async (e) => {
                if (e.chainNamespace && "eip155" !== e.chainNamespace)
                  throw Error(
                    `Invalid chain namespace - Expected eip155, got ${e.chainNamespace}`
                  );
                let { chainId: t } = (0, $.D)(this.wagmiConfig),
                  n = {
                    account: e.address,
                    to: e.to,
                    value: e.value,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    data: e.data,
                    chainId: t,
                    type: "legacy",
                  };
                await eJ(this.wagmiConfig, n);
                let r = await eY(this.wagmiConfig, n);
                return (
                  await (0, ee.e)(this.wagmiConfig, { hash: r, timeout: 25e3 }),
                  r
                );
              },
              writeContract: async (e) => {
                let t = e8(this.appKit?.getCaipAddress() || ""),
                  n = this.appKit?.getCaipNetworkId();
                if (!n)
                  throw Error(
                    "networkControllerClient:writeContract - chainId is undefined"
                  );
                return await (0, et.n)(this.wagmiConfig, {
                  chain: this.wagmiChains?.[n],
                  chainId: n,
                  address: e.tokenAddress,
                  account: t,
                  abi: e.abi,
                  functionName: e.method,
                  args: [e.receiverAddress, e.tokenAmount],
                });
              },
              getEnsAddress: async (e) => {
                try {
                  if (!this.wagmiConfig)
                    throw Error(
                      "networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined"
                    );
                  let t = this.appKit?.getCaipNetworkId(),
                    n = !1,
                    r = !1;
                  return (
                    (0, e3.oL)(e) &&
                      (r = (await this.appKit?.resolveReownName(e)) || !1),
                    1 === t &&
                      (n = await (function (e, t) {
                        let { chainId: n, ...r } = t,
                          i = e.getClient({ chainId: n });
                        return (0, W.s)(i, ew, "getEnsAddress")(r);
                      })(this.wagmiConfig, { name: tk(e), chainId: t })),
                    n || r || !1
                  );
                } catch {
                  return !1;
                }
              },
              getEnsAvatar: async (e) => {
                let t = this.appKit?.getCaipNetworkId();
                return (
                  t === eZ.R.id &&
                  ((await eq(this.wagmiConfig, { name: tk(e), chainId: t })) ||
                    !1)
                );
              },
              parseUnits: e$,
              formatUnits: e0.b,
            }),
            ez.ChainController.state.chains.set(this.chainNamespace, {
              chainNamespace: this.chainNamespace,
              connectionControllerClient: this.connectionControllerClient,
              networkControllerClient: this.networkControllerClient,
              adapterType: this.adapterType,
              caipNetworks: this.caipNetworks,
            }),
            this.syncConnectors(this.wagmiConfig.connectors),
            this.syncAuthConnector(
              this.wagmiConfig?.connectors.find(
                (e) => e.id === e1.bq.AUTH_CONNECTOR_ID
              )
            ),
            this.syncRequestedNetworks(this.caipNetworks),
            (function (e, t) {
              let { onChange: n } = t;
              e._internal.connectors.subscribe((e, t) => {
                n(Object.values(e), t);
              });
            })(this.wagmiConfig, {
              onChange: (e) => {
                this.syncConnectors(e),
                  this.syncAuthConnector(
                    e.find((e) => e.id === e1.bq.AUTH_CONNECTOR_ID)
                  );
              },
            }),
            (0, eB.u)(this.wagmiConfig, {
              onChange: (e) => {
                this.syncAccount(e);
              },
            }),
            this.appKit?.setEIP6963Enabled(!1 !== t.enableEIP6963),
            this.appKit?.subscribeShouldUpdateToAddress((e) => {
              if (e) {
                let t = X.E(this.wagmiConfig),
                  n = t[0]?.connector;
                n &&
                  eU(this.wagmiConfig, { connector: n }).then((t) =>
                    this.syncAccount({
                      address: e,
                      isConnected: !0,
                      addresses: t.accounts,
                      connector: n,
                      chainId: t.chainId,
                      status: "connected",
                    })
                  );
              }
            });
        }
        subscribeState(e) {
          return this.appKit?.subscribeState((t) =>
            e({
              ...t,
              selectedNetworkId: t.selectedNetworkId
                ? Number(e3.p1.caipNetworkIdToNumber(t.selectedNetworkId))
                : void 0,
            })
          );
        }
        syncRequestedNetworks(e) {
          Array.from(new Set(e.map((e) => e.chainNamespace)))
            .filter((e) => !!e)
            .forEach((t) => {
              this.appKit?.setRequestedCaipNetworks(
                e.filter((e) => e.chainNamespace === t),
                t
              );
            });
        }
        async setProfileAndBalance(e, t) {
          await Promise.all([this.syncProfile(e, t), this.syncBalance(e, t)]);
        }
        async syncAccount({
          address: e,
          chainId: t,
          connector: n,
          addresses: r,
          status: i,
        }) {
          let o = n?.id === e1.bq.AUTH_CONNECTOR_ID;
          if ("disconnected" === i) {
            this.appKit?.resetAccount(this.chainNamespace),
              this.appKit?.resetWcConnection(),
              this.appKit?.resetNetwork(this.chainNamespace),
              this.appKit?.setAllAccounts([], this.chainNamespace),
              this.appKit?.setStatus(i, this.chainNamespace),
              this.appKit?.setLoading(!1),
              e3.mr.removeItem(e3.uJ.WALLET_ID),
              o && (await n.disconnect());
            return;
          }
          if (this.wagmiConfig && n) {
            if ("WalletConnect" === n.name && n.getProvider && e) {
              let r = this.appKit?.getCaipNetwork(),
                o = t || r?.id,
                a = await n.getProvider(),
                s = a?.session?.namespaces || {},
                c = s ? Object.keys(s) : [],
                u = this.appKit?.getPreferredAccountType();
              c.forEach((e) => {
                let t = s?.[e]?.accounts[0];
                tD.h.setProvider(e, a),
                  tD.h.setProviderId(e, "walletConnect"),
                  this.appKit?.setPreferredAccountType(u, e),
                  this.appKit?.setCaipAddress(t, e),
                  this.appKit?.setStatus(i, e);
              }),
                this.appKit?.getCaipNetwork()?.chainNamespace !==
                  e3.bq.CHAIN.SOLANA &&
                  o &&
                  (this.syncNetwork(e, o, !0),
                  await Promise.all([
                    this.syncConnectedWalletInfo(n),
                    this.appKit?.setApprovedCaipNetworksData(
                      this.chainNamespace
                    ),
                  ]));
            } else if ("connected" === i && e && t) {
              tD.h.setProvider(this.chainNamespace, await n.getProvider()),
                tD.h.setProviderId(this.chainNamespace, n.id);
              let i = `eip155:${t}:${e}`;
              this.syncNetwork(e, t, !0),
                await Promise.all([
                  this.syncConnectedWalletInfo(n),
                  this.appKit?.setApprovedCaipNetworksData(this.chainNamespace),
                ]),
                this.appKit?.setLoading(!1),
                this.appKit?.setCaipAddress(i, this.chainNamespace),
                this.appKit?.setStatus("connected", this.chainNamespace),
                !o &&
                  r?.length &&
                  this.appKit?.setAllAccounts(
                    r.map((e) => ({ address: e, type: "eoa" })),
                    this.chainNamespace
                  );
            } else "reconnecting" === i && this.appKit?.setLoading(!0);
          }
        }
        syncNetwork(e, t, n) {
          let r = this.caipNetworks.find((e) => e.id === t);
          if (r && t && (this.appKit?.setCaipNetwork(r), n && e && t)) {
            let n = `eip155:${t}:${e}`;
            if (
              (this.appKit?.setCaipAddress(n, this.chainNamespace),
              r?.blockExplorers?.default.url)
            ) {
              let t = `${r.blockExplorers.default.url}/address/${e}`;
              this.appKit?.setAddressExplorerUrl(t, this.chainNamespace);
            } else
              this.appKit?.setAddressExplorerUrl(void 0, this.chainNamespace);
          }
        }
        async syncReownName(e) {
          if (!this.appKit) throw Error("syncReownName - appKit is undefined");
          try {
            let t = await this.appKit.getReownName(e);
            if (t[0]) {
              let e = t[0];
              this.appKit?.setProfileName(e.name, this.chainNamespace);
            } else this.appKit?.setProfileName(null, this.chainNamespace);
          } catch {
            this.appKit?.setProfileName(null, this.chainNamespace);
          }
        }
        async syncProfile(e, t) {
          if (!this.appKit) throw Error("syncProfile - appKit is undefined");
          try {
            let { name: t, avatar: n } = await this.appKit.fetchIdentity({
              address: e,
            });
            this.appKit?.setProfileName(t, this.chainNamespace),
              this.appKit?.setProfileImage(n, this.chainNamespace),
              t || (await this.syncReownName(e));
          } catch {
            if (t === eZ.R.id) {
              let n = await (function (e, t) {
                let { chainId: n, ...r } = t,
                  i = e.getClient({ chainId: n });
                return (0, W.s)(i, eK, "getEnsName")(r);
              })(this.wagmiConfig, { address: e, chainId: t });
              if (n) {
                this.appKit?.setProfileName(n, this.chainNamespace);
                let e = await eq(this.wagmiConfig, { name: n, chainId: t });
                e && this.appKit?.setProfileImage(e, this.chainNamespace);
              } else
                await this.syncReownName(e),
                  this.appKit?.setProfileImage(null, this.chainNamespace);
            } else
              await this.syncReownName(e),
                this.appKit?.setProfileImage(null, this.chainNamespace);
          }
        }
        async syncBalance(e, t) {
          let n = this.caipNetworks.find((e) => e.id === t);
          if (n && this.wagmiConfig) {
            let r = await (0, eV.s)(this.wagmiConfig, {
              address: e,
              chainId: t,
              token: this.options?.tokens?.[n.caipNetworkId]?.address,
            });
            this.appKit?.setBalance(r.formatted, r.symbol, this.chainNamespace);
            return;
          }
          this.appKit?.setBalance(void 0, void 0, this.chainNamespace);
        }
        async syncConnectedWalletInfo(e) {
          if (!e)
            throw Error("syncConnectedWalletInfo - connector is undefined");
          if (e.id === e1.bq.WALLET_CONNECT_CONNECTOR_ID && e.getProvider) {
            let t = await e.getProvider();
            t.session &&
              this.appKit?.setConnectedWalletInfo(
                {
                  ...t.session.peer.metadata,
                  name: t.session.peer.metadata.name,
                  icon: t.session.peer.metadata.icons?.[0],
                },
                this.chainNamespace
              );
          } else {
            let t = this.appKit?.getConnectors().find((t) => t.id === e.id);
            this.appKit?.setConnectedWalletInfo(
              {
                name: e.name,
                icon: e.icon || this.appKit.getConnectorImage(t),
              },
              this.chainNamespace
            );
          }
        }
        syncConnectors(e) {
          let t = e.map((e) => ({ ...e, chain: this.chainNamespace })),
            n = new Set(),
            r = t.filter((e) => {
              let t = n.has(e.id);
              return n.add(e.id), !t;
            }),
            i = [];
          r.forEach(({ id: e, name: t, type: n, icon: r }) => {
            e1.bq.AUTH_CONNECTOR_ID !== e &&
              i.push({
                id: e,
                explorerId: e1.CK.ConnectorExplorerIds[e],
                imageUrl: this.options?.connectorImages?.[e] ?? r,
                name: e1.CK.ConnectorNamesMap[e] ?? t,
                imageId: e1.CK.ConnectorImageIds[e],
                type: e1.CK.ConnectorTypesMap[n] ?? "EXTERNAL",
                info: { rdns: e },
                chain: this.chainNamespace,
              });
          }),
            this.appKit?.setConnectors(i);
        }
        async syncAuthConnector(e) {
          if (e) {
            let t = await e.getProvider();
            this.appKit?.addConnector({
              id: e1.bq.AUTH_CONNECTOR_ID,
              type: "AUTH",
              name: "w3mAuth",
              provider: t,
              chain: this.chainNamespace,
            }),
              this.initAuthConnectorListeners(e);
          }
        }
        async initAuthConnectorListeners(e) {
          e && (await this.listenAuthConnector(e), await this.listenModal(e));
        }
        async listenAuthConnector(e, t = !1) {
          if (t || ("undefined" != typeof window && e)) {
            this.appKit?.setLoading(!0);
            let t = await e.getProvider(),
              n = t.getLoginEmailUsed();
            this.appKit?.setLoading(n),
              t.onRpcRequest((e) => {
                e5.$D.checkIfRequestExists(e)
                  ? e5.$D.checkIfRequestIsSafe(e) ||
                    this.appKit?.handleUnsafeRPCRequest()
                  : (this.appKit?.open(),
                    console.error(e5.y_.RPC_METHOD_NOT_ALLOWED_MESSAGE, {
                      method: e.method,
                    }),
                    setTimeout(() => {
                      this.appKit?.showErrorMessage(
                        e5.y_.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE
                      );
                    }, 300),
                    t.rejectRpcRequests());
              }),
              t.onRpcError(() => {
                this.appKit?.isOpen() &&
                  (this.appKit?.isTransactionStackEmpty()
                    ? this.appKit?.close()
                    : this.appKit?.popTransactionStack(!0));
              }),
              t.onRpcSuccess((e, t) => {
                e5.$D.checkIfRequestIsSafe(t) ||
                  (this.appKit?.isTransactionStackEmpty()
                    ? this.appKit?.close()
                    : this.appKit?.popTransactionStack());
              }),
              t.onNotConnected(() => {
                let e = this.appKit?.getIsConnectedState(),
                  t = e3.mr.getItem(e3.uJ.CONNECTED_CONNECTOR);
                e ||
                  "AUTH" !== t ||
                  (this.appKit?.setCaipAddress(void 0, this.chainNamespace),
                  this.appKit?.setLoading(!1));
              }),
              t.onConnect((e) => {
                let t = `eip155:${e.chainId}:${e.address}`;
                this.appKit?.setCaipAddress(t, this.chainNamespace),
                  this.appKit?.setSmartAccountDeployed(
                    !!e.smartAccountDeployed,
                    this.chainNamespace
                  ),
                  this.appKit?.setPreferredAccountType(
                    e.preferredAccountType,
                    this.chainNamespace
                  ),
                  this.appKit?.setAllAccounts(
                    e.accounts || [
                      {
                        address: e.address,
                        type: e.preferredAccountType || "eoa",
                      },
                    ],
                    this.chainNamespace
                  ),
                  ez.MO.setConnectedConnector("AUTH"),
                  this.appKit?.setLoading(!1);
              }),
              t.onGetSmartAccountEnabledNetworks((e) => {
                this.appKit?.setSmartAccountEnabledNetworks(
                  e,
                  this.chainNamespace
                );
              }),
              t.onSetPreferredAccount(({ address: t, type: n }) => {
                t &&
                  (this.appKit?.setPreferredAccountType(n, this.chainNamespace),
                  this.wagmiConfig &&
                    (0, eG.G)(this.wagmiConfig, { connectors: [e] }));
              });
          }
        }
        async listenModal(e) {
          let t = await e.getProvider();
          this.subscribeState((e) => {
            e.open || t.rejectRpcRequests();
          });
        }
      }
    },
    4479: function (e, t, n) {
      "use strict";
      n.d(t, {
        JnV: function () {
          return i;
        },
        axR: function () {
          return b;
        },
        PZg: function () {
          return y;
        },
        RJ0: function () {
          return m.R;
        },
        yue: function () {
          return v;
        },
        Fox: function () {
          return g;
        },
      });
      var r = n(71186);
      let i = (0, r.a)({
        id: 421613,
        name: "Arbitrum Goerli",
        nativeCurrency: {
          name: "Arbitrum Goerli Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: {
          default: { http: ["https://goerli-rollup.arbitrum.io/rpc"] },
        },
        blockExplorers: {
          default: { name: "Arbiscan", url: "https://goerli.arbiscan.io" },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 88114,
          },
        },
        testnet: !0,
      });
      var o = n(4832),
        a = n(27308),
        s = n(67333),
        c = n(21693),
        u = n(99632),
        l = n(21028),
        f = n(86868),
        h = n(97895);
      async function d(e, t) {
        let { account: n = e.account } = t;
        if (!n) throw new s.o();
        let r = (0, o.T)(n);
        try {
          let {
              accessList: n,
              blockNumber: i,
              blockTag: o,
              data: s,
              gas: u,
              gasPrice: d,
              maxFeePerGas: p,
              maxPriorityFeePerGas: y,
              nonce: m,
              to: v,
              value: g,
              ...b
            } = r?.type === "local" ? await (0, a.Z)(e, t) : t,
            w = (i ? (0, c.eC)(i) : void 0) || o;
          (0, h.F)(t);
          let A = e.chain?.formatters?.transactionRequest?.format,
            C = (A || f.tG)({
              ...(0, l.K)(b, { format: A }),
              from: r?.address,
              accessList: n,
              data: s,
              gas: u,
              gasPrice: d,
              maxFeePerGas: p,
              maxPriorityFeePerGas: y,
              nonce: m,
              to: v,
              value: g,
            }),
            {
              baseFeePerGas: E,
              gasLimit: k,
              priorityFeePerGas: O,
            } = await e.request({
              method: "linea_estimateGas",
              params: w ? [C, w] : [C],
            });
          return {
            baseFeePerGas: BigInt(E),
            gasLimit: BigInt(k),
            priorityFeePerGas: BigInt(O),
          };
        } catch (n) {
          throw (0, u.P)(n, { ...t, account: r, chain: e.chain });
        }
      }
      async function p({ client: e, multiply: t, request: n, type: r }) {
        try {
          let i = await d(e, { ...n, account: n?.account }),
            { priorityFeePerGas: o } = i,
            a = t(BigInt(i.baseFeePerGas)) + o;
          if ("legacy" === r) return { gasPrice: a };
          return { maxFeePerGas: a, maxPriorityFeePerGas: o };
        } catch {
          return null;
        }
      }
      let y = (0, r.a)({
        fees: {
          estimateFeesPerGas: p,
          async maxPriorityFeePerGas({ block: e, client: t, request: n }) {
            let r = await p({
              block: e,
              client: t,
              multiply: (e) => e,
              request: n,
              type: "eip1559",
            });
            return r?.maxPriorityFeePerGas ? r.maxPriorityFeePerGas : null;
          },
        },
        id: 59144,
        name: "Linea Mainnet",
        nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: {
          default: {
            http: ["https://rpc.linea.build"],
            webSocket: ["wss://rpc.linea.build"],
          },
        },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://lineascan.build",
            apiUrl: "https://api.lineascan.build/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            blockCreated: 42,
          },
        },
        testnet: !1,
      });
      var m = n(75404);
      let v = (0, r.a)({
          id: 137,
          name: "Polygon",
          nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
          rpcUrls: { default: { http: ["https://polygon-rpc.com"] } },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://polygonscan.com",
              apiUrl: "https://api.polygonscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 25770160,
            },
          },
        }),
        g = (0, r.a)({
          id: 11155111,
          name: "Sepolia",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://rpc2.sepolia.org"] } },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://sepolia.etherscan.io",
              apiUrl: "https://api-sepolia.etherscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 751532,
            },
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            ensUniversalResolver: {
              address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
              blockCreated: 5317080,
            },
          },
          testnet: !0,
        });
      function b(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      b({
        id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
        name: "Solana",
        network: "solana-mainnet",
        nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
        rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
        blockExplorers: {
          default: { name: "Solscan", url: "https://solscan.io" },
        },
        testnet: !1,
        chainNamespace: "solana",
        caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      }),
        b({
          id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          name: "Solana Ethereum",
          network: "solana-devnet",
          nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !0,
          chainNamespace: "solana",
          caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
        }),
        b({
          id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
          name: "Solana Testnet",
          network: "solana-testnet",
          nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !0,
          chainNamespace: "solana",
          caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
        });
    },
    78908: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return y;
        },
      });
      var r = n(40300),
        i = n(33002),
        o = n(17987),
        a = n(42996),
        s = class extends a.l {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, n) {
            let o = t.queryKey,
              a = t.queryHash ?? (0, r.Rm)(o, t),
              s = this.get(a);
            return (
              s ||
                ((s = new i.A({
                  cache: this,
                  queryKey: o,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: n,
                  defaultOptions: e.getQueryDefaults(o),
                })),
                this.add(s)),
              s
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            o.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, r._x)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, r._x)(e, t))
              : t;
          }
          notify(e) {
            o.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            o.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            o.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        c = n(77470),
        u = class extends a.l {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Map()),
              (this.#n = Date.now());
          }
          #t;
          #n;
          build(e, t, n) {
            let r = new c.m({
              mutationCache: this,
              mutationId: ++this.#n,
              options: e.defaultMutationOptions(t),
              state: n,
            });
            return this.add(r), r;
          }
          add(e) {
            let t = l(e),
              n = this.#t.get(t) ?? [];
            n.push(e),
              this.#t.set(t, n),
              this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            let t = l(e);
            if (this.#t.has(t)) {
              let n = this.#t.get(t)?.filter((t) => t !== e);
              n && (0 === n.length ? this.#t.delete(t) : this.#t.set(t, n));
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = this.#t
              .get(l(e))
              ?.find((e) => "pending" === e.state.status);
            return !t || t === e;
          }
          runNext(e) {
            let t = this.#t.get(l(e))?.find((t) => t !== e && t.state.isPaused);
            return t?.continue() ?? Promise.resolve();
          }
          clear() {
            o.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          getAll() {
            return [...this.#t.values()].flat();
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, r.X7)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, r.X7)(e, t));
          }
          notify(e) {
            o.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return o.V.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(r.ZT)))
            );
          }
        };
      function l(e) {
        return e.options.scope?.id ?? String(e.mutationId);
      }
      var f = n(79198),
        h = n(20436);
      function d(e) {
        return {
          onFetch: (t, n) => {
            let i = t.options,
              o = t.fetchOptions?.meta?.fetchMore?.direction,
              a = t.state.data?.pages || [],
              s = t.state.data?.pageParams || [],
              c = { pages: [], pageParams: [] },
              u = 0,
              l = async () => {
                let n = !1,
                  l = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (n = !0)
                          : t.signal.addEventListener("abort", () => {
                              n = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  f = (0, r.cG)(t.options, t.fetchOptions),
                  h = async (e, i, o) => {
                    if (n) return Promise.reject();
                    if (null == i && e.pages.length) return Promise.resolve(e);
                    let a = {
                      queryKey: t.queryKey,
                      pageParam: i,
                      direction: o ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    l(a);
                    let s = await f(a),
                      { maxPages: c } = t.options,
                      u = o ? r.Ht : r.VX;
                    return {
                      pages: u(e.pages, s, c),
                      pageParams: u(e.pageParams, i, c),
                    };
                  };
                if (o && a.length) {
                  let e = "backward" === o,
                    t = { pages: a, pageParams: s },
                    n = (
                      e
                        ? function (e, { pages: t, pageParams: n }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, n[0], n)
                              : void 0;
                          }
                        : p
                    )(i, t);
                  c = await h(t, n, e);
                } else {
                  let t = e ?? a.length;
                  do {
                    let e = 0 === u ? s[0] ?? i.initialPageParam : p(i, c);
                    if (u > 0 && null == e) break;
                    (c = await h(c, e)), u++;
                  } while (u < t);
                }
                return c;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    l,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n
                  ))
              : (t.fetchFn = l);
          },
        };
      }
      function p(e, { pages: t, pageParams: n }) {
        let r = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
      }
      var y = class {
        #r;
        #i;
        #o;
        #a;
        #s;
        #c;
        #u;
        #l;
        constructor(e = {}) {
          (this.#r = e.queryCache || new s()),
            (this.#i = e.mutationCache || new u()),
            (this.#o = e.defaultOptions || {}),
            (this.#a = new Map()),
            (this.#s = new Map()),
            (this.#c = 0);
        }
        mount() {
          this.#c++,
            1 === this.#c &&
              ((this.#u = f.j.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#r.onFocus());
              })),
              (this.#l = h.N.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#r.onOnline());
              })));
        }
        unmount() {
          this.#c--,
            0 === this.#c &&
              (this.#u?.(),
              (this.#u = void 0),
              this.#l?.(),
              (this.#l = void 0));
        }
        isFetching(e) {
          return this.#r.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#i.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#r.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.getQueryData(e.queryKey);
          if (void 0 === t) return this.fetchQuery(e);
          {
            let n = this.defaultQueryOptions(e),
              i = this.#r.build(this, n);
            return (
              e.revalidateIfStale &&
                i.isStaleByTime((0, r.KC)(n.staleTime, i)) &&
                this.prefetchQuery(n),
              Promise.resolve(t)
            );
          }
        }
        getQueriesData(e) {
          return this.#r
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, n) {
          let i = this.defaultQueryOptions({ queryKey: e }),
            o = this.#r.get(i.queryHash),
            a = o?.state.data,
            s = (0, r.SE)(t, a);
          if (void 0 !== s)
            return this.#r.build(this, i).setData(s, { ...n, manual: !0 });
        }
        setQueriesData(e, t, n) {
          return o.V.batch(() =>
            this.#r
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#r.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#r;
          o.V.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let n = this.#r,
            r = { type: "active", ...e };
          return o.V.batch(
            () => (
              n.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(r, t)
            )
          );
        }
        cancelQueries(e = {}, t = {}) {
          let n = { revert: !0, ...t };
          return Promise.all(
            o.V.batch(() => this.#r.findAll(e).map((e) => e.cancel(n)))
          )
            .then(r.ZT)
            .catch(r.ZT);
        }
        invalidateQueries(e = {}, t = {}) {
          return o.V.batch(() => {
            if (
              (this.#r.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              "none" === e.refetchType)
            )
              return Promise.resolve();
            let n = { ...e, type: e.refetchType ?? e.type ?? "active" };
            return this.refetchQueries(n, t);
          });
        }
        refetchQueries(e = {}, t) {
          let n = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 };
          return Promise.all(
            o.V.batch(() =>
              this.#r
                .findAll(e)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  let t = e.fetch(void 0, n);
                  return (
                    n.throwOnError || (t = t.catch(r.ZT)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(r.ZT);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let n = this.#r.build(this, t);
          return n.isStaleByTime((0, r.KC)(t.staleTime, n))
            ? n.fetch(t)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(r.ZT).catch(r.ZT);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = d(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(r.ZT).catch(r.ZT);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = d(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return h.N.isOnline()
            ? this.#i.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#r;
        }
        getMutationCache() {
          return this.#i;
        }
        getDefaultOptions() {
          return this.#o;
        }
        setDefaultOptions(e) {
          this.#o = e;
        }
        setQueryDefaults(e, t) {
          this.#a.set((0, r.Ym)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#a.values()],
            n = {};
          return (
            t.forEach((t) => {
              (0, r.to)(e, t.queryKey) && (n = { ...n, ...t.defaultOptions });
            }),
            n
          );
        }
        setMutationDefaults(e, t) {
          this.#s.set((0, r.Ym)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#s.values()],
            n = {};
          return (
            t.forEach((t) => {
              (0, r.to)(e, t.mutationKey) &&
                (n = { ...n, ...t.defaultOptions });
            }),
            n
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#o.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = (0, r.Rm)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            !0 !== t.enabled && t.queryFn === r.CN && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#o.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#r.clear(), this.#i.clear();
        }
      };
    },
    64028: function (e, t, n) {
      "use strict";
      async function r(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            i = t.get(r);
          n = i?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      n.d(t, {
        z: function () {
          return r;
        },
      });
    },
    26905: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return o;
        },
      });
      var r = n(48369);
      let i = [];
      function o(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, r.v)(i, t)
          ? i
          : ((i = t), t);
      }
    },
    98094: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return s;
        },
        w: function () {
          return c;
        },
      });
      var r = n(45502);
      function i(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function o(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function a(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              a = [],
              s = [];
            return function (c, u) {
              if ("object" == typeof u) {
                if (a.length) {
                  let e = o(a, this);
                  0 === e ? (a[a.length] = this) : (a.splice(e), s.splice(e)),
                    (s[s.length] = c);
                  let n = o(a, u);
                  if (0 !== n)
                    return r ? t.call(this, c, u, i(s, n)) : `[ref=${i(s, n)}]`;
                } else (a[0] = u), (s[0] = c);
              }
              return n ? e.call(this, c, u) : u;
            };
          })((e, n) => {
            let r = n;
            return (
              "bigint" == typeof r &&
                (r = { __type: "bigint", value: n.toString() }),
              r instanceof Map &&
                (r = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      function s(e) {
        let {
          deserialize: t = r.v,
          key: n = "wagmi",
          serialize: i = a,
          storage: o = c,
        } = e;
        function s(e) {
          return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
        }
        return {
          ...o,
          key: n,
          async getItem(e, r) {
            let i = o.getItem(`${n}.${e}`),
              a = await s(i);
            return a ? t(a) ?? null : r ?? null;
          },
          async setItem(e, t) {
            let r = `${n}.${e}`;
            null === t ? await s(o.removeItem(r)) : await s(o.setItem(r, i(t)));
          },
          async removeItem(e) {
            await s(o.removeItem(`${n}.${e}`));
          },
        };
      }
      let c = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
    },
    48799: function (e, t, n) {
      "use strict";
      n.d(t, {
        jx: function () {
          return i;
        },
      });
      var r = n(45502);
      function i(e, t) {
        if (!t) return;
        let n = (function (e, t) {
          let n = e.split("; ").find((e) => e.startsWith(`${t}=`));
          if (n) return n.substring(t.length + 1);
        })(t, `${e.storage?.key}.store`);
        if (n) return (0, r.v)(n).state;
      }
    },
    45502: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      n.d(t, {
        v: function () {
          return r;
        },
      });
    },
    64565: function (e, t, n) {
      "use strict";
      function r() {}
      n.d(t, {
        e: function () {
          return i;
        },
      });
      class i {
        constructor(e = 1 / 0, t = r) {
          (this.max = e),
            (this.dispose = t),
            (this.map = new Map()),
            (this.newest = null),
            (this.oldest = null);
        }
        has(e) {
          return this.map.has(e);
        }
        get(e) {
          let t = this.getNode(e);
          return t && t.value;
        }
        get size() {
          return this.map.size;
        }
        getNode(e) {
          let t = this.map.get(e);
          if (t && t !== this.newest) {
            let { older: e, newer: n } = t;
            n && (n.older = e),
              e && (e.newer = n),
              (t.older = this.newest),
              (t.older.newer = t),
              (t.newer = null),
              (this.newest = t),
              t === this.oldest && (this.oldest = n);
          }
          return t;
        }
        set(e, t) {
          let n = this.getNode(e);
          return n
            ? (n.value = t)
            : ((n = { key: e, value: t, newer: null, older: this.newest }),
              this.newest && (this.newest.newer = n),
              (this.newest = n),
              (this.oldest = this.oldest || n),
              this.map.set(e, n),
              n.value);
        }
        clean() {
          for (; this.oldest && this.map.size > this.max; )
            this.delete(this.oldest.key);
        }
        delete(e) {
          let t = this.map.get(e);
          return (
            !!t &&
            (t === this.newest && (this.newest = t.older),
            t === this.oldest && (this.oldest = t.newer),
            t.newer && (t.newer.older = t.older),
            t.older && (t.older.newer = t.newer),
            this.map.delete(e),
            this.dispose(t.value, e),
            !0)
          );
        }
      }
    },
    72074: function (e, t, n) {
      "use strict";
      function r() {}
      n.d(t, {
        k: function () {
          return s;
        },
      });
      let i =
          "undefined" != typeof WeakRef
            ? WeakRef
            : function (e) {
                return { deref: () => e };
              },
        o = "undefined" != typeof WeakMap ? WeakMap : Map,
        a =
          "undefined" != typeof FinalizationRegistry
            ? FinalizationRegistry
            : function () {
                return { register: r, unregister: r };
              };
      class s {
        constructor(e = 1 / 0, t = r) {
          (this.max = e),
            (this.dispose = t),
            (this.map = new o()),
            (this.newest = null),
            (this.oldest = null),
            (this.unfinalizedNodes = new Set()),
            (this.finalizationScheduled = !1),
            (this.size = 0),
            (this.finalize = () => {
              let e = this.unfinalizedNodes.values();
              for (let t = 0; t < 10024; t++) {
                let t = e.next().value;
                if (!t) break;
                this.unfinalizedNodes.delete(t);
                let n = t.key;
                delete t.key,
                  (t.keyRef = new i(n)),
                  this.registry.register(n, t, t);
              }
              this.unfinalizedNodes.size > 0
                ? queueMicrotask(this.finalize)
                : (this.finalizationScheduled = !1);
            }),
            (this.registry = new a(this.deleteNode.bind(this)));
        }
        has(e) {
          return this.map.has(e);
        }
        get(e) {
          let t = this.getNode(e);
          return t && t.value;
        }
        getNode(e) {
          let t = this.map.get(e);
          if (t && t !== this.newest) {
            let { older: e, newer: n } = t;
            n && (n.older = e),
              e && (e.newer = n),
              (t.older = this.newest),
              (t.older.newer = t),
              (t.newer = null),
              (this.newest = t),
              t === this.oldest && (this.oldest = n);
          }
          return t;
        }
        set(e, t) {
          let n = this.getNode(e);
          return n
            ? (n.value = t)
            : ((n = { key: e, value: t, newer: null, older: this.newest }),
              this.newest && (this.newest.newer = n),
              (this.newest = n),
              (this.oldest = this.oldest || n),
              this.scheduleFinalization(n),
              this.map.set(e, n),
              this.size++,
              n.value);
        }
        clean() {
          for (; this.oldest && this.size > this.max; )
            this.deleteNode(this.oldest);
        }
        deleteNode(e) {
          e === this.newest && (this.newest = e.older),
            e === this.oldest && (this.oldest = e.newer),
            e.newer && (e.newer.older = e.older),
            e.older && (e.older.newer = e.newer),
            this.size--;
          let t = e.key || (e.keyRef && e.keyRef.deref());
          this.dispose(e.value, t),
            e.keyRef
              ? this.registry.unregister(e)
              : this.unfinalizedNodes.delete(e),
            t && this.map.delete(t);
        }
        delete(e) {
          let t = this.map.get(e);
          return !!t && (this.deleteNode(t), !0);
        }
        scheduleFinalization(e) {
          this.unfinalizedNodes.add(e),
            this.finalizationScheduled ||
              ((this.finalizationScheduled = !0),
              queueMicrotask(this.finalize));
        }
      }
    },
    36510: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return s;
        },
      });
      let { toString: r, hasOwnProperty: i } = Object.prototype,
        o = Function.prototype.toString,
        a = new Map();
      function s(e, t) {
        try {
          return (function e(t, n) {
            if (t === n) return !0;
            let a = r.call(t);
            if (a !== r.call(n)) return !1;
            switch (a) {
              case "[object Array]":
                if (t.length !== n.length) break;
              case "[object Object]": {
                if (f(t, n)) return !0;
                let r = c(t),
                  o = c(n),
                  a = r.length;
                if (a !== o.length) return !1;
                for (let e = 0; e < a; ++e) if (!i.call(n, r[e])) return !1;
                for (let i = 0; i < a; ++i) {
                  let o = r[i];
                  if (!e(t[o], n[o])) return !1;
                }
                return !0;
              }
              case "[object Error]":
                return t.name === n.name && t.message === n.message;
              case "[object Number]":
                if (t != t) return n != n;
              case "[object Boolean]":
              case "[object Date]":
                return +t == +n;
              case "[object RegExp]":
              case "[object String]":
                return t == `${n}`;
              case "[object Map]":
              case "[object Set]": {
                if (t.size !== n.size) return !1;
                if (f(t, n)) return !0;
                let r = t.entries(),
                  i = "[object Map]" === a;
                for (;;) {
                  let t = r.next();
                  if (t.done) break;
                  let [o, a] = t.value;
                  if (!n.has(o) || (i && !e(a, n.get(o)))) return !1;
                }
                return !0;
              }
              case "[object Uint16Array]":
              case "[object Uint8Array]":
              case "[object Uint32Array]":
              case "[object Int32Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object ArrayBuffer]":
                (t = new Uint8Array(t)), (n = new Uint8Array(n));
              case "[object DataView]": {
                let e = t.byteLength;
                if (e === n.byteLength) for (; e-- && t[e] === n[e]; );
                return -1 === e;
              }
              case "[object AsyncFunction]":
              case "[object GeneratorFunction]":
              case "[object AsyncGeneratorFunction]":
              case "[object Function]": {
                let e = o.call(t);
                if (e !== o.call(n)) return !1;
                return !(function (e, t) {
                  let n = e.length - t.length;
                  return n >= 0 && e.indexOf(t, n) === n;
                })(e, l);
              }
            }
            return !1;
          })(e, t);
        } finally {
          a.clear();
        }
      }
      function c(e) {
        return Object.keys(e).filter(u, e);
      }
      function u(e) {
        return void 0 !== this[e];
      }
      t.Z = s;
      let l = "{ [native code] }";
      function f(e, t) {
        let n = a.get(e);
        if (n) {
          if (n.has(t)) return !0;
        } else a.set(e, (n = new Set()));
        return n.add(t), !1;
      }
    },
    12913: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return s;
        },
      });
      let r = () => Object.create(null),
        { forEach: i, slice: o } = Array.prototype,
        { hasOwnProperty: a } = Object.prototype;
      class s {
        constructor(e = !0, t = r) {
          (this.weakness = e), (this.makeData = t);
        }
        lookup() {
          return this.lookupArray(arguments);
        }
        lookupArray(e) {
          let t = this;
          return (
            i.call(e, (e) => (t = t.getChildTrie(e))),
            a.call(t, "data") ? t.data : (t.data = this.makeData(o.call(e)))
          );
        }
        peek() {
          return this.peekArray(arguments);
        }
        peekArray(e) {
          let t = this;
          for (let n = 0, r = e.length; t && n < r; ++n) {
            let r = t.mapFor(e[n], !1);
            t = r && r.get(e[n]);
          }
          return t && t.data;
        }
        remove() {
          return this.removeArray(arguments);
        }
        removeArray(e) {
          let t;
          if (e.length) {
            let n = e[0],
              r = this.mapFor(n, !1),
              i = r && r.get(n);
            !i ||
              ((t = i.removeArray(o.call(e, 1))),
              i.data || i.weak || (i.strong && i.strong.size) || r.delete(n));
          } else (t = this.data), delete this.data;
          return t;
        }
        getChildTrie(e) {
          let t = this.mapFor(e, !0),
            n = t.get(e);
          return n || t.set(e, (n = new s(this.weakness, this.makeData))), n;
        }
        mapFor(e, t) {
          return this.weakness &&
            (function (e) {
              switch (typeof e) {
                case "object":
                  if (null === e) break;
                case "function":
                  return !0;
              }
              return !1;
            })(e)
            ? this.weak || (t ? (this.weak = new WeakMap()) : void 0)
            : this.strong || (t ? (this.strong = new Map()) : void 0);
        }
      }
    },
    55459: function (e, t, n) {
      "use strict";
      var r, i;
      n.d(t, {
        h: function () {
          return r;
        },
      }),
        ((i = r || (r = {})).NAME = "Name"),
        (i.DOCUMENT = "Document"),
        (i.OPERATION_DEFINITION = "OperationDefinition"),
        (i.VARIABLE_DEFINITION = "VariableDefinition"),
        (i.SELECTION_SET = "SelectionSet"),
        (i.FIELD = "Field"),
        (i.ARGUMENT = "Argument"),
        (i.FRAGMENT_SPREAD = "FragmentSpread"),
        (i.INLINE_FRAGMENT = "InlineFragment"),
        (i.FRAGMENT_DEFINITION = "FragmentDefinition"),
        (i.VARIABLE = "Variable"),
        (i.INT = "IntValue"),
        (i.FLOAT = "FloatValue"),
        (i.STRING = "StringValue"),
        (i.BOOLEAN = "BooleanValue"),
        (i.NULL = "NullValue"),
        (i.ENUM = "EnumValue"),
        (i.LIST = "ListValue"),
        (i.OBJECT = "ObjectValue"),
        (i.OBJECT_FIELD = "ObjectField"),
        (i.DIRECTIVE = "Directive"),
        (i.NAMED_TYPE = "NamedType"),
        (i.LIST_TYPE = "ListType"),
        (i.NON_NULL_TYPE = "NonNullType"),
        (i.SCHEMA_DEFINITION = "SchemaDefinition"),
        (i.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
        (i.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
        (i.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
        (i.FIELD_DEFINITION = "FieldDefinition"),
        (i.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
        (i.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
        (i.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
        (i.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
        (i.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
        (i.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
        (i.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
        (i.SCHEMA_EXTENSION = "SchemaExtension"),
        (i.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
        (i.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
        (i.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
        (i.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
        (i.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
        (i.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
    },
    29417: function (e, t, n) {
      "use strict";
      n.d(t, {
        $_: function () {
          return u;
        },
        Vn: function () {
          return l;
        },
      });
      let r = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: [
            "name",
            "variableDefinitions",
            "directives",
            "selectionSet",
          ],
          VariableDefinition: [
            "variable",
            "type",
            "defaultValue",
            "directives",
          ],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: [
            "name",
            "variableDefinitions",
            "typeCondition",
            "directives",
            "selectionSet",
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ["values"],
          ObjectValue: ["fields"],
          ObjectField: ["name", "value"],
          Directive: ["name", "arguments"],
          NamedType: ["name"],
          ListType: ["type"],
          NonNullType: ["type"],
          SchemaDefinition: ["description", "directives", "operationTypes"],
          OperationTypeDefinition: ["type"],
          ScalarTypeDefinition: ["description", "name", "directives"],
          ObjectTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          FieldDefinition: [
            "description",
            "name",
            "arguments",
            "type",
            "directives",
          ],
          InputValueDefinition: [
            "description",
            "name",
            "type",
            "defaultValue",
            "directives",
          ],
          InterfaceTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeDefinition: ["description", "name", "directives", "types"],
          EnumTypeDefinition: ["description", "name", "directives", "values"],
          EnumValueDefinition: ["description", "name", "directives"],
          InputObjectTypeDefinition: [
            "description",
            "name",
            "directives",
            "fields",
          ],
          DirectiveDefinition: [
            "description",
            "name",
            "arguments",
            "locations",
          ],
          SchemaExtension: ["directives", "operationTypes"],
          ScalarTypeExtension: ["name", "directives"],
          ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
          InterfaceTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeExtension: ["name", "directives", "types"],
          EnumTypeExtension: ["name", "directives", "values"],
          InputObjectTypeExtension: ["name", "directives", "fields"],
        },
        i = new Set(Object.keys(r));
      function o(e) {
        let t = null == e ? void 0 : e.kind;
        return "string" == typeof t && i.has(t);
      }
      ((a = s || (s = {})).QUERY = "query"),
        (a.MUTATION = "mutation"),
        (a.SUBSCRIPTION = "subscription");
      var a,
        s,
        c = n(55459);
      let u = Object.freeze({});
      function l(e, t, n = r) {
        let i, a, s;
        let l = new Map();
        for (let e of Object.values(c.h))
          l.set(
            e,
            (function (e, t) {
              let n = e[t];
              return "object" == typeof n
                ? n
                : "function" == typeof n
                ? { enter: n, leave: void 0 }
                : { enter: e.enter, leave: e.leave };
            })(t, e)
          );
        let f = Array.isArray(e),
          h = [e],
          d = -1,
          p = [],
          y = e,
          m = [],
          v = [];
        do {
          var g, b, w;
          let e;
          let r = ++d === h.length,
            c = r && 0 !== p.length;
          if (r) {
            if (
              ((a = 0 === v.length ? void 0 : m[m.length - 1]),
              (y = s),
              (s = v.pop()),
              c)
            ) {
              if (f) {
                y = y.slice();
                let e = 0;
                for (let [t, n] of p) {
                  let r = t - e;
                  null === n ? (y.splice(r, 1), e++) : (y[r] = n);
                }
              } else
                for (let [e, t] of ((y = Object.defineProperties(
                  {},
                  Object.getOwnPropertyDescriptors(y)
                )),
                p))
                  y[e] = t;
            }
            (d = i.index),
              (h = i.keys),
              (p = i.edits),
              (f = i.inArray),
              (i = i.prev);
          } else if (s) {
            if (null == (y = s[(a = f ? d : h[d])])) continue;
            m.push(a);
          }
          if (!Array.isArray(y)) {
            o(y) ||
              (function (e, t) {
                if (!e) throw Error(t);
              })(
                !1,
                `Invalid AST Node: ${(function e(t, n) {
                  switch (typeof t) {
                    case "string":
                      return JSON.stringify(t);
                    case "function":
                      return t.name ? `[function ${t.name}]` : "[function]";
                    case "object":
                      return (function (t, n) {
                        if (null === t) return "null";
                        if (n.includes(t)) return "[Circular]";
                        let r = [...n, t];
                        if ("function" == typeof t.toJSON) {
                          let n = t.toJSON();
                          if (n !== t)
                            return "string" == typeof n ? n : e(n, r);
                        } else if (Array.isArray(t))
                          return (function (t, n) {
                            if (0 === t.length) return "[]";
                            if (n.length > 2) return "[Array]";
                            let r = Math.min(10, t.length),
                              i = t.length - r,
                              o = [];
                            for (let i = 0; i < r; ++i) o.push(e(t[i], n));
                            return (
                              1 === i
                                ? o.push("... 1 more item")
                                : i > 1 && o.push(`... ${i} more items`),
                              "[" + o.join(", ") + "]"
                            );
                          })(t, r);
                        return (function (t, n) {
                          let r = Object.entries(t);
                          return 0 === r.length
                            ? "{}"
                            : n.length > 2
                            ? "[" +
                              (function (e) {
                                let t = Object.prototype.toString
                                  .call(e)
                                  .replace(/^\[object /, "")
                                  .replace(/]$/, "");
                                if (
                                  "Object" === t &&
                                  "function" == typeof e.constructor
                                ) {
                                  let t = e.constructor.name;
                                  if ("string" == typeof t && "" !== t)
                                    return t;
                                }
                                return t;
                              })(t) +
                              "]"
                            : "{ " +
                              r.map(([t, r]) => t + ": " + e(r, n)).join(", ") +
                              " }";
                        })(t, r);
                      })(t, n);
                    default:
                      return String(t);
                  }
                })(y, [])}.`
              );
            let n = r
              ? null === (g = l.get(y.kind)) || void 0 === g
                ? void 0
                : g.leave
              : null === (b = l.get(y.kind)) || void 0 === b
              ? void 0
              : b.enter;
            if ((e = null == n ? void 0 : n.call(t, y, a, s, m, v)) === u)
              break;
            if (!1 === e) {
              if (!r) {
                m.pop();
                continue;
              }
            } else if (void 0 !== e && (p.push([a, e]), !r)) {
              if (o(e)) y = e;
              else {
                m.pop();
                continue;
              }
            }
          }
          void 0 === e && c && p.push([a, y]),
            r
              ? m.pop()
              : ((i = { inArray: f, index: d, keys: h, edits: p, prev: i }),
                (h = (f = Array.isArray(y))
                  ? y
                  : null !== (w = n[y.kind]) && void 0 !== w
                  ? w
                  : []),
                (d = -1),
                (p = []),
                s && v.push(s),
                (s = y));
        } while (void 0 !== i);
        return 0 !== p.length ? p[p.length - 1][1] : e;
      }
    },
    4722: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        g7: function () {
          return v;
        },
        dP: function () {
          return L;
        },
        re: function () {
          return U;
        },
      });
      let i = () => Object.create(null),
        { forEach: o, slice: a } = Array.prototype,
        { hasOwnProperty: s } = Object.prototype;
      class c {
        constructor(e = !0, t = i) {
          (this.weakness = e), (this.makeData = t);
        }
        lookup(...e) {
          return this.lookupArray(e);
        }
        lookupArray(e) {
          let t = this;
          return (
            o.call(e, (e) => (t = t.getChildTrie(e))),
            s.call(t, "data") ? t.data : (t.data = this.makeData(a.call(e)))
          );
        }
        peek(...e) {
          return this.peekArray(e);
        }
        peekArray(e) {
          let t = this;
          for (let n = 0, r = e.length; t && n < r; ++n) {
            let r = this.weakness && u(e[n]) ? t.weak : t.strong;
            t = r && r.get(e[n]);
          }
          return t && t.data;
        }
        getChildTrie(e) {
          let t =
              this.weakness && u(e)
                ? this.weak || (this.weak = new WeakMap())
                : this.strong || (this.strong = new Map()),
            n = t.get(e);
          return n || t.set(e, (n = new c(this.weakness, this.makeData))), n;
        }
      }
      function u(e) {
        switch (typeof e) {
          case "object":
            if (null === e) break;
          case "function":
            return !0;
        }
        return !1;
      }
      var l = n(64565);
      let f = null,
        h = {},
        d = 1;
      function p(e) {
        try {
          return e();
        } catch (e) {}
      }
      let y = "@wry/context:Slot",
        m = p(() => globalThis) || p(() => global) || Object.create(null),
        v =
          m[y] ||
          Array[y] ||
          (function (e) {
            try {
              Object.defineProperty(m, y, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            } finally {
              return e;
            }
          })(
            class {
              constructor() {
                this.id = [
                  "slot",
                  d++,
                  Date.now(),
                  Math.random().toString(36).slice(2),
                ].join(":");
              }
              hasValue() {
                for (let e = f; e; e = e.parent)
                  if (this.id in e.slots) {
                    let t = e.slots[this.id];
                    if (t === h) break;
                    return e !== f && (f.slots[this.id] = t), !0;
                  }
                return f && (f.slots[this.id] = h), !1;
              }
              getValue() {
                if (this.hasValue()) return f.slots[this.id];
              }
              withValue(e, t, n, r) {
                let i = { __proto__: null, [this.id]: e },
                  o = f;
                f = { parent: o, slots: i };
                try {
                  return t.apply(r, n);
                } finally {
                  f = o;
                }
              }
              static bind(e) {
                let t = f;
                return function () {
                  let n = f;
                  try {
                    return (f = t), e.apply(this, arguments);
                  } finally {
                    f = n;
                  }
                };
              }
              static noContext(e, t, n) {
                if (!f) return e.apply(n, t);
                {
                  let r = f;
                  try {
                    return (f = null), e.apply(n, t);
                  } finally {
                    f = r;
                  }
                }
              }
            }
          ),
        { bind: g, noContext: b } = v,
        w = new v(),
        { hasOwnProperty: A } = Object.prototype,
        C =
          Array.from ||
          function (e) {
            let t = [];
            return e.forEach((e) => t.push(e)), t;
          };
      function E(e) {
        let { unsubscribe: t } = e;
        "function" == typeof t && ((e.unsubscribe = void 0), t());
      }
      let k = [];
      function O(e, t) {
        if (!e) throw Error(t || "assertion failure");
      }
      function I(e, t) {
        let n = e.length;
        return n > 0 && n === t.length && e[n - 1] === t[n - 1];
      }
      function S(e) {
        switch (e.length) {
          case 0:
            throw Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1];
        }
      }
      class D {
        constructor(e) {
          (this.fn = e),
            (this.parents = new Set()),
            (this.childValues = new Map()),
            (this.dirtyChildren = null),
            (this.dirty = !0),
            (this.recomputing = !1),
            (this.value = []),
            (this.deps = null),
            ++D.count;
        }
        peek() {
          if (1 === this.value.length && !x(this))
            return N(this), this.value[0];
        }
        recompute(e) {
          var t;
          return (
            O(!this.recomputing, "already recomputing"),
            N(this),
            x(this) &&
              (M(this),
              w.withValue(this, T, [this, e]),
              (function (e, t) {
                if ("function" == typeof e.subscribe)
                  try {
                    E(e), (e.unsubscribe = e.subscribe.apply(null, t));
                  } catch (t) {
                    return e.setDirty(), !1;
                  }
                return !0;
              })(this, e) &&
                ((this.dirty = !1), x(this) || ((t = this), R(t, _)))),
            S(this.value)
          );
        }
        setDirty() {
          this.dirty || ((this.dirty = !0), R(this, P), E(this));
        }
        dispose() {
          this.setDirty(),
            M(this),
            R(this, (e, t) => {
              e.setDirty(), F(e, this);
            });
        }
        forget() {
          this.dispose();
        }
        dependOn(e) {
          e.add(this),
            this.deps || (this.deps = k.pop() || new Set()),
            this.deps.add(e);
        }
        forgetDeps() {
          this.deps &&
            (C(this.deps).forEach((e) => e.delete(this)),
            this.deps.clear(),
            k.push(this.deps),
            (this.deps = null));
        }
      }
      function N(e) {
        let t = w.getValue();
        if (t)
          return (
            e.parents.add(t),
            t.childValues.has(e) || t.childValues.set(e, []),
            x(e) ? P(t, e) : _(t, e),
            t
          );
      }
      function T(e, t) {
        let n;
        e.recomputing = !0;
        let { normalizeResult: r } = e;
        r && 1 === e.value.length && (n = e.value.slice(0)),
          (e.value.length = 0);
        try {
          if (((e.value[0] = e.fn.apply(null, t)), r && n && !I(n, e.value)))
            try {
              e.value[0] = r(e.value[0], n[0]);
            } catch (e) {}
        } catch (t) {
          e.value[1] = t;
        }
        e.recomputing = !1;
      }
      function x(e) {
        return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
      }
      function R(e, t) {
        let n = e.parents.size;
        if (n) {
          let r = C(e.parents);
          for (let i = 0; i < n; ++i) t(r[i], e);
        }
      }
      function P(e, t) {
        O(e.childValues.has(t)), O(x(t));
        let n = !x(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return;
        } else e.dirtyChildren = k.pop() || new Set();
        e.dirtyChildren.add(t), n && R(e, P);
      }
      function _(e, t) {
        O(e.childValues.has(t)), O(!x(t));
        let n = e.childValues.get(t);
        0 === n.length
          ? e.childValues.set(t, t.value.slice(0))
          : I(n, t.value) || e.setDirty(),
          Q(e, t),
          x(e) || R(e, _);
      }
      function Q(e, t) {
        let n = e.dirtyChildren;
        n &&
          (n.delete(t),
          0 === n.size &&
            (k.length < 100 && k.push(n), (e.dirtyChildren = null)));
      }
      function M(e) {
        e.childValues.size > 0 &&
          e.childValues.forEach((t, n) => {
            F(e, n);
          }),
          e.forgetDeps(),
          O(null === e.dirtyChildren);
      }
      function F(e, t) {
        t.parents.delete(e), e.childValues.delete(t), Q(e, t);
      }
      D.count = 0;
      let j = { setDirty: !0, dispose: !0, forget: !0 };
      function L(e) {
        let t = new Map(),
          n = e && e.subscribe;
        function r(e) {
          let r = w.getValue();
          if (r) {
            let i = t.get(e);
            i || t.set(e, (i = new Set())),
              r.dependOn(i),
              "function" == typeof n && (E(i), (i.unsubscribe = n(e)));
          }
        }
        return (
          (r.dirty = function (e, n) {
            let r = t.get(e);
            if (r) {
              let i = n && A.call(j, n) ? n : "setDirty";
              C(r).forEach((e) => e[i]()), t.delete(e), E(r);
            }
          }),
          r
        );
      }
      function q(...e) {
        return (r || (r = new c("function" == typeof WeakMap))).lookupArray(e);
      }
      let B = new Set();
      function U(
        e,
        {
          max: t = 65536,
          keyArgs: n,
          makeCacheKey: r = q,
          normalizeResult: i,
          subscribe: o,
          cache: a = l.e,
        } = Object.create(null)
      ) {
        let s = "function" == typeof a ? new a(t, (e) => e.dispose()) : a,
          c = function () {
            let t = r.apply(null, n ? n.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let a = s.get(t);
            a ||
              (s.set(t, (a = new D(e))),
              (a.normalizeResult = i),
              (a.subscribe = o),
              (a.forget = () => s.delete(t)));
            let c = a.recompute(Array.prototype.slice.call(arguments));
            return (
              s.set(t, a),
              B.add(s),
              w.hasValue() || (B.forEach((e) => e.clean()), B.clear()),
              c
            );
          };
        function u(e) {
          let t = e && s.get(e);
          t && t.setDirty();
        }
        function f(e) {
          let t = e && s.get(e);
          if (t) return t.peek();
        }
        function h(e) {
          return !!e && s.delete(e);
        }
        return (
          Object.defineProperty(c, "size", {
            get: () => s.size,
            configurable: !1,
            enumerable: !1,
          }),
          Object.freeze(
            (c.options = {
              max: t,
              keyArgs: n,
              makeCacheKey: r,
              normalizeResult: i,
              subscribe: o,
              cache: s,
            })
          ),
          (c.dirtyKey = u),
          (c.dirty = function () {
            u(r.apply(null, arguments));
          }),
          (c.peekKey = f),
          (c.peek = function () {
            return f(r.apply(null, arguments));
          }),
          (c.forgetKey = h),
          (c.forget = function () {
            return h(r.apply(null, arguments));
          }),
          (c.makeCacheKey = r),
          (c.getKey = n
            ? function () {
                return r.apply(null, n.apply(null, arguments));
              }
            : r),
          Object.freeze(c)
        );
      }
    },
    75404: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return r;
        },
      });
      let r = (0, n(71186).a)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://cloudflare-eth.com"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 19258213,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 14353601,
          },
        },
      });
    },
    71186: function (e, t, n) {
      "use strict";
      function r(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      n.d(t, {
        a: function () {
          return r;
        },
      });
    },
    59803: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return u;
        },
      });
      var r = n(23588),
        i = n(64028),
        o = n(41012),
        a = n(48369),
        s = n(26905),
        c = n(2265);
      function u(e = {}) {
        let { mutation: t } = e,
          n = (0, o.Z)(e),
          {
            mutate: u,
            mutateAsync: l,
            ...f
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.z)(n, e),
            mutationKey: ["disconnect"],
          });
        return {
          ...f,
          connectors: (function (e = {}) {
            let t = (0, o.Z)(e);
            return (0, c.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => (0, s.E)(e), n, { equalityFn: a.v });
                })(t, { onChange: e }),
              () => (0, s.E)(t),
              () => (0, s.E)(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: u,
          disconnectAsync: l,
        };
      }
    },
    38681: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return (
          t && i(e.prototype, t),
          n && i(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      n.d(t, {
        y: function () {
          return C;
        },
      });
      var a = function () {
          return "function" == typeof Symbol;
        },
        s = function (e) {
          return a() && !!Symbol[e];
        },
        c = function (e) {
          return s(e) ? Symbol[e] : "@@" + e;
        };
      a() && !s("observable") && (Symbol.observable = Symbol("observable"));
      var u = c("iterator"),
        l = c("observable"),
        f = c("species");
      function h(e, t) {
        var n = e[t];
        if (null != n) {
          if ("function" != typeof n) throw TypeError(n + " is not a function");
          return n;
        }
      }
      function d(e) {
        var t = e.constructor;
        return (
          void 0 !== t && null === (t = t[f]) && (t = void 0),
          void 0 !== t ? t : C
        );
      }
      function p(e) {
        p.log
          ? p.log(e)
          : setTimeout(function () {
              throw e;
            });
      }
      function y(e) {
        Promise.resolve().then(function () {
          try {
            e();
          } catch (e) {
            p(e);
          }
        });
      }
      function m(e) {
        var t = e._cleanup;
        if (void 0 !== t) {
          if (((e._cleanup = void 0), !t)) return;
          try {
            if ("function" == typeof t) t();
            else {
              var n = h(t, "unsubscribe");
              n && n.call(t);
            }
          } catch (e) {
            p(e);
          }
        }
      }
      function v(e) {
        (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
      }
      function g(e, t, n) {
        e._state = "running";
        var r = e._observer;
        try {
          var i = h(r, t);
          switch (t) {
            case "next":
              i && i.call(r, n);
              break;
            case "error":
              if ((v(e), i)) i.call(r, n);
              else throw n;
              break;
            case "complete":
              v(e), i && i.call(r);
          }
        } catch (e) {
          p(e);
        }
        "closed" === e._state
          ? m(e)
          : "running" === e._state && (e._state = "ready");
      }
      function b(e, t, n) {
        if ("closed" !== e._state) {
          if ("buffering" === e._state) {
            e._queue.push({ type: t, value: n });
            return;
          }
          if ("ready" !== e._state) {
            (e._state = "buffering"),
              (e._queue = [{ type: t, value: n }]),
              y(function () {
                return (function (e) {
                  var t = e._queue;
                  if (t) {
                    (e._queue = void 0), (e._state = "ready");
                    for (
                      var n = 0;
                      n < t.length &&
                      (g(e, t[n].type, t[n].value), "closed" !== e._state);
                      ++n
                    );
                  }
                })(e);
              });
            return;
          }
          g(e, t, n);
        }
      }
      var w = (function () {
          function e(e, t) {
            (this._cleanup = void 0),
              (this._observer = e),
              (this._queue = void 0),
              (this._state = "initializing");
            var n = new A(this);
            try {
              this._cleanup = t.call(void 0, n);
            } catch (e) {
              n.error(e);
            }
            "initializing" === this._state && (this._state = "ready");
          }
          return (
            (e.prototype.unsubscribe = function () {
              "closed" !== this._state && (v(this), m(this));
            }),
            o(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._state;
                },
              },
            ]),
            e
          );
        })(),
        A = (function () {
          function e(e) {
            this._subscription = e;
          }
          var t = e.prototype;
          return (
            (t.next = function (e) {
              b(this._subscription, "next", e);
            }),
            (t.error = function (e) {
              b(this._subscription, "error", e);
            }),
            (t.complete = function () {
              b(this._subscription, "complete");
            }),
            o(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._subscription._state;
                },
              },
            ]),
            e
          );
        })(),
        C = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw TypeError("Observable cannot be called as a function");
            if ("function" != typeof t)
              throw TypeError("Observable initializer must be a function");
            this._subscriber = t;
          }
          var t = e.prototype;
          return (
            (t.subscribe = function (e) {
              return (
                ("object" != typeof e || null === e) &&
                  (e = {
                    next: e,
                    error: arguments[1],
                    complete: arguments[2],
                  }),
                new w(e, this._subscriber)
              );
            }),
            (t.forEach = function (e) {
              var t = this;
              return new Promise(function (n, r) {
                if ("function" != typeof e) {
                  r(TypeError(e + " is not a function"));
                  return;
                }
                function i() {
                  o.unsubscribe(), n();
                }
                var o = t.subscribe({
                  next: function (t) {
                    try {
                      e(t, i);
                    } catch (e) {
                      r(e), o.unsubscribe();
                    }
                  },
                  error: r,
                  complete: n,
                });
              });
            }),
            (t.map = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              return new (d(this))(function (n) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      t = e(t);
                    } catch (e) {
                      return n.error(e);
                    }
                    n.next(t);
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    n.complete();
                  },
                });
              });
            }),
            (t.filter = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              return new (d(this))(function (n) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      if (!e(t)) return;
                    } catch (e) {
                      return n.error(e);
                    }
                    n.next(t);
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    n.complete();
                  },
                });
              });
            }),
            (t.reduce = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              var n = d(this),
                r = arguments.length > 1,
                i = !1,
                o = arguments[1],
                a = o;
              return new n(function (n) {
                return t.subscribe({
                  next: function (t) {
                    var o = !i;
                    if (((i = !0), !o || r))
                      try {
                        a = e(a, t);
                      } catch (e) {
                        return n.error(e);
                      }
                    else a = t;
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    if (!i && !r)
                      return n.error(
                        TypeError("Cannot reduce an empty sequence")
                      );
                    n.next(a), n.complete();
                  },
                });
              });
            }),
            (t.concat = function () {
              for (
                var e = this, t = arguments.length, n = Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              var i = d(this);
              return new i(function (t) {
                var r,
                  o = 0;
                return (
                  (function e(a) {
                    r = a.subscribe({
                      next: function (e) {
                        t.next(e);
                      },
                      error: function (e) {
                        t.error(e);
                      },
                      complete: function () {
                        o === n.length
                          ? ((r = void 0), t.complete())
                          : e(i.from(n[o++]));
                      },
                    });
                  })(e),
                  function () {
                    r && (r.unsubscribe(), (r = void 0));
                  }
                );
              });
            }),
            (t.flatMap = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              var n = d(this);
              return new n(function (r) {
                var i = [],
                  o = t.subscribe({
                    next: function (t) {
                      if (e)
                        try {
                          t = e(t);
                        } catch (e) {
                          return r.error(e);
                        }
                      var o = n.from(t).subscribe({
                        next: function (e) {
                          r.next(e);
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          var e = i.indexOf(o);
                          e >= 0 && i.splice(e, 1), a();
                        },
                      });
                      i.push(o);
                    },
                    error: function (e) {
                      r.error(e);
                    },
                    complete: function () {
                      a();
                    },
                  });
                function a() {
                  o.closed && 0 === i.length && r.complete();
                }
                return function () {
                  i.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    o.unsubscribe();
                };
              });
            }),
            (t[l] = function () {
              return this;
            }),
            (e.from = function (t) {
              var n = "function" == typeof this ? this : e;
              if (null == t) throw TypeError(t + " is not an object");
              var i = h(t, l);
              if (i) {
                var o = i.call(t);
                if (Object(o) !== o) throw TypeError(o + " is not an object");
                return o instanceof C && o.constructor === n
                  ? o
                  : new n(function (e) {
                      return o.subscribe(e);
                    });
              }
              if (s("iterator") && (i = h(t, u)))
                return new n(function (e) {
                  y(function () {
                    if (!e.closed) {
                      for (
                        var n,
                          o = (function (e, t) {
                            var n =
                              ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                            if (n) return (n = n.call(e)).next.bind(n);
                            if (
                              Array.isArray(e) ||
                              (n = (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return r(e, t);
                                  var n = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === n &&
                                      e.constructor &&
                                      (n = e.constructor.name),
                                    "Map" === n || "Set" === n)
                                  )
                                    return Array.from(e);
                                  if (
                                    "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n
                                    )
                                  )
                                    return r(e, t);
                                }
                              })(e))
                            ) {
                              n && (e = n);
                              var i = 0;
                              return function () {
                                return i >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[i++] };
                              };
                            }
                            throw TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })(i.call(t));
                        !(n = o()).done;

                      ) {
                        var a = n.value;
                        if ((e.next(a), e.closed)) return;
                      }
                      e.complete();
                    }
                  });
                });
              if (Array.isArray(t))
                return new n(function (e) {
                  y(function () {
                    if (!e.closed) {
                      for (var n = 0; n < t.length; ++n)
                        if ((e.next(t[n]), e.closed)) return;
                      e.complete();
                    }
                  });
                });
              throw TypeError(t + " is not observable");
            }),
            (e.of = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              return new ("function" == typeof this ? this : e)(function (e) {
                y(function () {
                  if (!e.closed) {
                    for (var t = 0; t < n.length; ++t)
                      if ((e.next(n[t]), e.closed)) return;
                    e.complete();
                  }
                });
              });
            }),
            o(e, null, [
              {
                key: f,
                get: function () {
                  return this;
                },
              },
            ]),
            e
          );
        })();
      a() &&
        Object.defineProperty(C, Symbol("extensions"), {
          value: { symbol: l, hostReportError: p },
          configurable: !0,
        });
    },
  },
]);
