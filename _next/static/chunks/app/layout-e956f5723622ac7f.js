(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    35883: function () {},
    89214: function () {},
    85568: function () {},
    38: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 58325, 23)),
        Promise.resolve().then(a.t.bind(a, 66927, 23)),
        Promise.resolve().then(a.bind(a, 51770)),
        Promise.resolve().then(a.t.bind(a, 85935, 23)),
        Promise.resolve().then(a.bind(a, 62365)),
        Promise.resolve().then(a.t.bind(a, 63385, 23)),
        Promise.resolve().then(a.bind(a, 28722)),
        Promise.resolve().then(a.bind(a, 71415)),
        Promise.resolve().then(a.bind(a, 87160)),
        Promise.resolve().then(a.bind(a, 82367));
    },
    62365: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var n = a(57437),
        i = a(2265),
        s = a(66247),
        r = a(61291),
        l = a(34655);
      let c = new r.f({
        uri: "https://graphigo.prd.galaxy.eco/query",
        cache: new l.h(),
      });
      var o = (e) => {
        let { children: t } = e,
          [a, r] = (0, i.useState)(!1);
        return ((0, i.useEffect)(() => {
          r(!0);
        }, []),
        a)
          ? (0, n.jsx)(s.e, { client: c, children: t })
          : null;
      };
    },
    11749: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = a(57437),
        i = a(2265),
        s = a(16691),
        r = a.n(s),
        l = a(82367),
        c = {
          src: "/_next/static/media/loaderDark.3fb31291.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = a(69034),
        d = (e) => {
          let {
              label: t,
              handleClick: a,
              theme: s,
              isDisabled: d = !1,
              isNavbar: u = !1,
              isLoading: b = !1,
              isLoaderDark: h = !1,
              loaderDimensions: f = 18,
            } = e,
            [m, p] = (0, i.useState)(!1),
            { darkMode: x } = (0, l.useGlobalContext)();
          return (
            (0, i.useEffect)(() => {
              p(!0);
            }, []),
            (0, n.jsx)("button", {
              className: "min-w-6 h-12 "
                .concat(
                  m && u
                    ? "rounded-lg text-xs py-2.5"
                    : "w-full rounded-[10px] text-base",
                  " "
                )
                .concat(
                  b ? "py-3" : "py-4",
                  " flex justify-center items-center px-4 leading-[100%] font-medium text-textBlack transition-all duration-300 "
                )
                .concat(s),
              onClick: () => a(),
              disabled: !!m && d,
              children:
                m && !b
                  ? t
                  : (0, n.jsx)(r(), {
                      src: h ? c : x ? o.Z : c,
                      alt: "Loader icon",
                      className: "animate-spin",
                      width: f,
                      height: f,
                    }),
            })
          );
        };
    },
    28722: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(57437),
        i = a(16691),
        s = a.n(i),
        r = a(82367),
        l = a(55198);
      t.default = () => {
        let { darkMode: e } = (0, r.useGlobalContext)();
        return (0, n.jsxs)("div", {
          className: "".concat(
            void 0 === e ? "hidden" : "hidden md:flex",
            " w-full absolute left-0 bottom-0 justify-between items-center py-1.5 px-4 bg-white dark:bg-darkCardBackground"
          ),
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, n.jsx)("p", {
                  className:
                    "ml-4 text-xs text-textGray dark:text-darkTextGray",
                  children: "\xa9 FlowAI",
                }),
                // (0, n.jsx)("p", {
                //   className: "text-xs text-textGray dark:text-darkTextGray",
                //   children: l.lD,
                // }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "flex gap-4",
              children: l.B9.map((t, a) =>
                (0, n.jsx)(
                  "button",
                  {
                    onClick: () => {
                      t.url.length > 0 && window.open(t.url, "_blank");
                    },
                    className: "".concat(
                      t.url.length > 0 ? "cursor-pointer" : "cursor-default",
                      " hover:scale-110 transition-all duration-150"
                    ),
                    children: (0, n.jsx)(s(), {
                      src: e ? t.dark : t.light,
                      alt: t.light,
                    }),
                  },
                  t.light + a
                )
              ),
            }),
          ],
        });
      };
    },
    71415: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return z;
          },
        });
      var n = a(57437),
        i = a(2265),
        s = a(11277),
        r = a(24033),
        l = a(59803),
        c = a(40204),
        o = a(79037),
        d = a(65613),
        u = a(5119),
        b = a(54986),
        h = a(64111),
        f = a(53126),
        m = a(61396),
        p = a.n(m),
        x = a(16691),
        g = a.n(x),
        v = a(92173);
      let k = (e) => {
          let { fill: t } = e;
          return (0, n.jsx)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.00028 1.5C9.31094 1.5 9.56278 1.75184 9.56278 2.0625V2.8125C9.56278 3.12316 9.31094 3.375 9.00028 3.375C8.68962 3.375 8.43778 3.12316 8.43778 2.8125V2.0625C8.43778 1.75184 8.68962 1.5 9.00028 1.5ZM13.5003 9C13.5003 11.4853 11.4856 13.5 9.00028 13.5C6.515 13.5 4.50028 11.4853 4.50028 9C4.50028 6.51472 6.515 4.5 9.00028 4.5C11.4856 4.5 13.5003 6.51472 13.5003 9ZM9.56278 15.1875C9.56278 14.8768 9.31094 14.625 9.00028 14.625C8.68962 14.625 8.43778 14.8768 8.43778 15.1875V15.9375C8.43778 16.2482 8.68962 16.5 9.00028 16.5C9.31094 16.5 9.56278 16.2482 9.56278 15.9375V15.1875ZM2.50516 5.25001C2.66049 4.98097 3.00451 4.88879 3.27355 5.04412L3.92307 5.41912C4.19211 5.57445 4.28429 5.91847 4.12896 6.18751C3.97363 6.45655 3.62961 6.54873 3.36057 6.3934L2.71105 6.0184C2.44201 5.86307 2.34983 5.51905 2.50516 5.25001ZM14.64 11.6066C14.371 11.4513 14.0269 11.5435 13.8716 11.8125C13.7163 12.0816 13.8085 12.4256 14.0775 12.5809L14.727 12.9559C14.9961 13.1112 15.3401 13.0191 15.4954 12.75C15.6507 12.481 15.5586 12.137 15.2895 11.9816L14.64 11.6066ZM15.4954 5.24999C15.6507 5.51903 15.5585 5.86305 15.2895 6.01838L14.64 6.39338C14.3709 6.54871 14.0269 6.45653 13.8716 6.18749C13.7163 5.91845 13.8084 5.57443 14.0775 5.4191L14.727 5.0441C14.996 4.88877 15.3401 4.98095 15.4954 5.24999ZM3.92305 12.5809C4.19209 12.4255 4.28427 12.0815 4.12894 11.8125C3.97361 11.5434 3.62959 11.4513 3.36055 11.6066L2.71103 11.9816C2.44199 12.1369 2.34981 12.4809 2.50514 12.75C2.66047 13.019 3.00449 13.1112 3.27353 12.9559L3.92305 12.5809Z",
              fill: t,
            }),
          });
        },
        y = (e) => {
          let { fill: t } = e;
          return (0, n.jsx)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M4.25407 11.1515C8.0636 11.1515 11.1518 8.0633 11.1518 4.25376C11.1518 3.80111 11.1082 3.35863 11.025 2.93031C10.9678 2.6362 11.2396 2.37171 11.5159 2.48748C14.0031 3.52947 15.7503 5.98683 15.7503 8.85228C15.7503 12.6618 12.6621 15.75 8.85258 15.75C5.98713 15.75 3.52977 14.0028 2.48778 11.5156C2.37201 11.2393 2.63651 10.9675 2.93061 11.0247C3.35894 11.1079 3.80141 11.1515 4.25407 11.1515Z",
              fill: t,
            }),
          });
        };
      var w = a(55198),
        j = a(82367),
        C = a(62300),
        N = a(58022),
        T = a(88059),
        _ = a(9091),
        L = a(11749),
        E = {
          src: "/_next/static/media/hamburgerLight.875c1eba.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = {
          src: "/_next/static/media/hamburgerDark.6f5e27e3.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        G = a(64160),
        Z = a(20086),
        W = {
          src: "/_next/static/media/settingsLight.5c00d5f2.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: "/_next/static/media/settingsDark.a8228fbb.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        S = {
          src: "/_next/static/media/worldLight.540a91eb.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = {
          src: "/_next/static/media/worldDark.4e7af7d3.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        F = (e) => {
          let { setIsOpen: t } = e,
            a = (0, r.usePathname)(),
            { darkMode: i, setDarkMode: s } = (0, j.useGlobalContext)(),
            l = () => s((e) => !e);
          return (0, n.jsxs)("div", {
            className:
              "flex flex-col justify-between w-screen h-full dark:bg-darkBackground",
            children: [
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex justify-between py-5 px-6 items-center",
                    children: [
                      (0, n.jsx)(g(), { src: i ? _.Z : T.Z, alt: "Logo" }),
                      (0, n.jsx)(g(), {
                        className: "cursor-pointer",
                        src: i ? Z.Z : G.Z,
                        alt: "Cross",
                        onClick: () => t(!1),
                      }),
                    ],
                  }),
                  (0, n.jsx)(b.Z, {
                    sx: { marginBottom: "32px" },
                    className: "bg-drawer dark:bg-darkDrawer",
                  }),
                  (0, n.jsx)(n.Fragment, {
                    children: w.cP.map((e) =>
                      (0, n.jsxs)(
                        p(),
                        {
                          className: "flex mb-3",
                          href: e.isFeatureAvailable ? e.path : a,
                          onClick: () => e.isFeatureAvailable && t(!1),
                          children: [
                            (0, n.jsx)("div", {
                              className: "w-1 mr-5 rounded-r-2xl ".concat(
                                a === e.path
                                  ? "bg-buttonBackground"
                                  : "bg-transparent"
                              ),
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "flex justify-center items-center gap-2 py-2",
                              children: [
                                (0, n.jsx)(g(), {
                                  src: e.isFeatureAvailable
                                    ? i
                                      ? e.availableIconDark
                                      : e.availableIconLight
                                    : i
                                    ? e.unavailableIconDark
                                    : e.unavailableIconLight,
                                  alt: e.label,
                                }),
                                (0, n.jsx)("p", {
                                  className: "".concat(
                                    e.isFeatureAvailable
                                      ? "text-textBlack dark:text-white"
                                      : "text-textGray dark:text-darkTextGray"
                                  ),
                                  children: e.label,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.label
                      )
                    ),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "px-6 mb-6",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "h-8 flex justify-center items-center relative p-1 rounded-lg bg-backgroundGray dark:bg-darkBackgroundGray",
                        children: [
                          (0, n.jsx)("div", {
                            className: "".concat(
                              i ? "cursor-pointer" : "cursor-default",
                              " py-2 px-[3px] z-10"
                            ),
                            onClick: l,
                            children: (0, n.jsx)(k, {
                              fill: i ? "#768398" : "#FFFFFF",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "".concat(
                              i ? "cursor-default" : "cursor-pointer",
                              " py-2 px-[3px] z-10"
                            ),
                            onClick: l,
                            children: (0, n.jsx)(y, {
                              fill: i ? "#1F242C" : "#AAB9D0",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "w-6 h-6 absolute top-1/2 -translate-y-1/2 left-1 rounded-lg bg-textBlack dark:bg-buttonBackground z-0 ".concat(
                                i ? "translate-x-full" : "",
                                " transition-all duration-300"
                              ),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, n.jsx)(g(), {
                            // onClick: () => {
                            //   window.open("https://t.me/FlowAI_eth", "_blank");
                            // },
                            className:
                              "hover:outline outline-1 rounded-lg outline-gray-300 dark:outline-darkDrawer",
                            src: i ? D : W,
                            alt: "Telegram",
                          }),
                          (0, n.jsx)(g(), {
                            // onClick: () => {
                            //   window.open("https://x.com/FlowAI_eth", "_blank");
                            // },
                            className:
                              "hover:outline outline-1 rounded-lg outline-gray-300 dark:outline-darkDrawer",
                            src: i ? M : S,
                            alt: "Twitter",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "text-xs text-textGray dark:text-darkTextGray",
                        children: w.lD,
                      }),
                      (0, n.jsx)("div", {
                        className: "flex gap-4",
                        children: w.B9.map((e, t) =>
                          (0, n.jsx)(
                            p(),
                            {
                              href: e.url,
                              target: "_blank",
                              children: (0, n.jsx)(g(), {
                                src: i ? e.dark : e.light,
                                alt: e.light,
                              }),
                            },
                            e.light + t
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        P = () => {
          let [e, t] = (0, i.useState)(!1),
            { darkMode: a } = (0, j.useGlobalContext)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(g(), {
                className: "cursor-pointer",
                src: a ? B : E,
                alt: "Hamburger",
                onClick: () => t(!0),
              }),
              (0, n.jsx)(h.ZP, {
                anchor: "right",
                open: e,
                onClose: () => t(!1),
                children: (0, n.jsx)(F, { setIsOpen: t }),
              }),
            ],
          });
        },
        A = a(70051),
        I = a(70130),
        H = JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"_testWeth","type":"address"},{"internalType":"address","name":"_testUSD","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldownPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"testUSD","outputs":[{"internalType":"contract IMintableERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"testUSDAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"testWeth","outputs":[{"internalType":"contract IMintableERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"testWethAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_testWethAmount","type":"uint256"},{"internalType":"uint256","name":"_testUSDAmount","type":"uint256"}],"name":"updateClaimAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cooldownPeriod","type":"uint256"}],"name":"updateCooldownPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
        ),
        U = (e) => {
          let {
              setIsOpen: t,
              modalType: a,
              claimGasTokens: s,
              claimTestTokens: r,
              isClaimingGasToken: l,
              isClaimTestLoading: c,
              emitSnackbarToggle: o,
            } = e,
            [d, u] = (0, i.useState)(null),
            [b, h] = (0, i.useState)(!1),
            { darkMode: f, tradeData: m } = (0, j.useGlobalContext)();
          return (0, n.jsxs)("div", {
            className:
              "w-full flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-darkCardBackground",
            children: [
              (0, n.jsx)("div", {
                className: "w-full flex justify-end",
                children: (0, n.jsx)(g(), {
                  className: "cursor-pointer",
                  src: f ? Z.Z : G.Z,
                  alt: "Cross",
                  onClick: () => t(!0),
                }),
              }),
              a === w.KW.claimGas
                ? (0, n.jsx)(g(), {
                    src: f ? N.Z : C.Z,
                    alt: "token icons",
                    width: 72,
                    height: 72,
                  })
                : (0, n.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, n.jsx)(g(), {
                        className: "z-20 ",
                        src: m.base_token.icon_link,
                        alt: "token icons",
                        width: 72,
                        height: 72,
                      }),
                      (0, n.jsx)(g(), {
                        className: "-translate-x-2 z-10 ".concat(
                          m.quote_token.icon_link ? "flex" : "hidden"
                        ),
                        src: m.quote_token.icon_link,
                        alt: "token icons",
                        width: 72,
                        height: 72,
                      }),
                    ],
                  }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center my-6 px-4",
                children: [
                  (0, n.jsx)("h1", {
                    className:
                      "font-medium text-xl text-textBlack dark:text-white",
                    children:
                      a === w.KW.claimGas ? "Claim $dMUL" : "Claim Test Tokens",
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "font-normal mt-4 text-center text-textBlack dark:text-white",
                    children:
                      a === w.KW.claimGas
                        ? "To use the FlowAI Ethereum, you'll need $dMUL in your wallet to pay for gas fees while trading. Click below to claim your free gas tokens."
                        : "To use the FlowAI Ethereum, you’ll need test tokens in your wallet to begin trading. Click below to claim your free Test WETH and Test USDT in one transaction.",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "w-full ".concat(
                  a === w.KW.claimGas ? "flex" : "hidden",
                  " justify-center mb-6"
                ),
                children: (0, n.jsx)(I.Z, {
                  sitekey: "6LdqoIUqAAAAAE6kxXKL7aSRBneFBrFGLCjn7D2M",
                  onChange: (e) => {
                    u(e), h(!0);
                  },
                  onExpired: () => {
                    u(null), h(!1);
                  },
                  theme: f ? "dark" : "light",
                }),
              }),
              (0, n.jsx)("div", {
                className: "w-full px-4",
                children: (0, n.jsx)(L.Z, {
                  label: a === w.KW.claimGas ? "Claim $dMUL" : "Claim Tokens",
                  theme: "bg-buttonBackground hover:bg-buttonBackgroundHover",
                  isNavbar: !1,
                  handleClick: () => {
                    if (!b && a === w.KW.claimGas) {
                      o(w.Go.completeCaptcha);
                      return;
                    }
                    a === w.KW.claimGas
                      ? s(d)
                      : r({
                          address: "0xd8C75966e032B49Ac8142e93a59B86A04668908E",
                          abi: H,
                          functionName: "claimTokens",
                        });
                  },
                  isLoaderDark: !0,
                  loaderDimensions: 24,
                  isLoading: l || c,
                }),
              }),
            ],
          });
        },
        R = {
          src: "/_next/static/media/bugLight.fbbed699.svg",
          height: 24,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        K = {
          src: "/_next/static/media/bugDark.f2080f35.svg",
          height: 24,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        O = a(24795),
        z = () => {
          var e, t, a;
          let { open: m } = (0, s.Ig)(),
            x = (0, r.usePathname)(),
            { disconnect: E } = (0, l.q)(),
            { chains: B, switchChain: G } = (0, c.o)(),
            { chain: Z, address: F, isConnected: I } = (0, o.m)(),
            [H, z] = (0, i.useState)(!1),
            [q, J] = (0, i.useState)(!1),
            [V, $] = (0, i.useState)(Z),
            [X, Y] = (0, i.useState)(w.KW.none),
            [Q, ee] = (0, i.useState)(!1),
            [et, ea] = (0, i.useState)(!1),
            [en, ei] = (0, i.useState)(!1),
            [es, er] = (0, i.useState)(!1),
            { windowWidth: el } = (0, A.Z)(),
            {
              darkMode: ec,
              setDarkMode: eo,
              tradeData: ed,
            } = (0, j.useGlobalContext)(),
            { quoteTokenBalance: eu, baseTokenBalance: eb } = (0, O.Z)(),
            { data: eh } = (0, d.K)({ address: F }),
            {
              writeContract: ef,
              isPending: em,
              isSuccess: ep,
              isError: ex,
              error: eg,
            } = (0, u.S)(),
            ev = () => eo((e) => !e),
            ek = () => {
              G && G({ chainId: null == B ? void 0 : B[3].id });
            };
          (0, i.useEffect)(() => {
            H || z(!0);
          }, []),
            (0, i.useEffect)(() => {
              Z && $(Z);
            }, [Z]),
            (0, i.useEffect)(() => {
              ee(!1), ea(!1);
            }, [F]),
            (0, i.useEffect)(() => {
              eh &&
                (null == Z ? void 0 : Z.name) === w.Ei &&
                (Number(eh.formatted) > 1e-5
                  ? (ea(!0), Y(w.KW.none))
                  : (ea(!1), Y(w.KW.claimGas), er(!0)));
            }, [eh, Z]),
            (0, i.useEffect)(() => {
              if (
                ed.quote_token.contract_addr.length > 0 &&
                ed.base_token.contract_addr.length > 0 &&
                (null == Z ? void 0 : Z.name) === w.Ei &&
                et &&
                eu.length > 0 &&
                eb.length > 0
              ) {
                let e = Number(eu),
                  t = Number(eb);
                (e > 10 && t > 0.001) || e >= 1e4 || t >= 10
                  ? (ee(!0), Y(w.KW.none))
                  : (ee(!1), Y(w.KW.claimTest), er(!0));
              }
            }, [
              Z,
              et,
              eu,
              eb,
              ed.quote_token.contract_addr,
              ed.base_token.contract_addr,
            ]),
            (0, i.useEffect)(() => {
              ex
                ? "User rejected the request" ===
                    (null == eg ? void 0 : eg.message.split(".")[0]) &&
                  (ew(w.Go.orderRejected), er(!1))
                : ep
                ? (ew(w.Go.testTokenClaimSuccess), ee(!0), er(!1), Y(w.KW.none))
                : ep || em || ew(w.Go.testTokenClaimFailure);
            }, [null == eg ? void 0 : eg.message, ex, em, ep]);
          let ey = async (e) => {
              try {
                let t = await fetch("/api/verify-recaptcha", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ token: e || "" }),
                });
                if (!(await t.json()).success) {
                  ew(w.Go.captchaFailed);
                  return;
                }
                ei(!0),
                  (
                    await v.Z.post(
                      "https://faucet.multipool.finance/sendTransaction",
                      { to_address: F }
                    )
                  ).data.success
                    ? (ew(w.Go.gasTokenClaimSuccess),
                      ea(!0),
                      er(!1),
                      Y(w.KW.none))
                    : ew(w.Go.gasTokenClaimFailure);
              } catch (e) {
                e instanceof Error && console.log("Error: ", e.message);
              } finally {
                ei(!1);
              }
            },
            ew = (e) => {
              document.dispatchEvent(
                new CustomEvent("snackbarToggle", {
                  detail: {
                    type: e,
                    vertical: el && el < 990 ? "top" : "bottom",
                    horizontal: el && el < 990 ? "center" : "left",
                  },
                })
              );
            };
          return (0, n.jsxs)("div", {
            className: "".concat(
              void 0 === ec ? "hidden" : "flex",
              " fixed base:relative top-0 left-0 w-full flex-row justify-between items-center p-4 base:py-3 z-50 rounded-b-2xl bg-white dark:bg-darkCardBackground"
            ),
            children: [
              (0, n.jsxs)("div", {
                className: "flex gap-4 1.5xl:gap-6 items-center",
                children: [
                  (0, n.jsx)(g(), {
                    className: "cursor-pointer",
                    onClick: () =>
                      window.open("https://flow-ai-jade.vercel.app/", "_blank"),
                    priority: !0,
                    src: el && el >= 1140 ? (ec ? _.Z : T.Z) : ec ? N.Z : C.Z,
                    alt: "Logo",
                  }),
                  H && el && el >= 990
                    ? (0, n.jsxs)("div", {
                        className:
                          "relative w-full flex gap-4 1.5xl:gap-6 items-center",
                        children: [
                          (0, n.jsx)(b.Z, {
                            className: "bg-drawer dark:bg-darkDrawer",
                            orientation: "vertical",
                            style: { width: 1, height: 40 },
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "absolute h-1 top-0 left-4 1.5xl:left-6 rounded-b-2xl -translate-y-3 bg-buttonBackground transition-all duration-200 ".concat(
                                "/" === x
                                  ? "w-[calc(11%)]"
                                  : "/leaderboard" === x
                                  ? "translate-x-[calc(82%)] w-[calc(18%)]"
                                  : void 0
                              ),
                          }),
                          w.cP.map((e) =>
                            (0, n.jsx)(
                              p(),
                              {
                                className: "flex flex-col  ".concat(
                                  e.isFeatureAvailable
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed"
                                ),
                                href: e.isFeatureAvailable ? e.path : x,
                                onClick: () => e.isFeatureAvailable,
                                children: (0, n.jsxs)("div", {
                                  className:
                                    "flex justify-center items-center gap-0.5 lg:gap-1 1.5xl:gap-2",
                                  children: [
                                    (0, n.jsx)(g(), {
                                      src:
                                        e.path === x
                                          ? ec
                                            ? e.availableIconDark
                                            : e.availableIconLight
                                          : ec
                                          ? e.unavailableIconDark
                                          : e.unavailableIconLight,
                                      className: "w-4 lg:w-5 h-4 lg:h-5",
                                      alt: e.label,
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "\n                      "
                                        .concat(
                                          e.isFeatureAvailable &&
                                            "hover:text-textBlack/75 dark:hover:text-white/75",
                                          " \n                      "
                                        )
                                        .concat(
                                          e.path === x
                                            ? "text-textBlack dark:text-white hover:text-textBlack dark:hover:text-white"
                                            : "text-textGray dark:text-darkTextGray",
                                          " text-sm"
                                        ),
                                      children: e.label,
                                    }),
                                  ],
                                }),
                              },
                              e.label
                            )
                          ),
                        ],
                      })
                    : (0, n.jsx)(n.Fragment, {}),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "h-8 flex gap-2 1.5xl:gap-4 items-center",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex gap-1.5 justify-center items-center py-1 px-4 rounded-[8px] cursor-pointer bg-backgroundGray dark:bg-darkBackgroundGray",
                    onClick: () => {
                      window.open(
                        "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x9b1CE99fbE73EEE28918bDA4d27Bb5f6f60ca769",
                        "_blank"
                      );
                    },
                    children: [
                      //   (0, n.jsx)(g(), { src: ec ? K : R, alt: "Bug" }),
                      (0, n.jsx)("p", {
                        className:
                          "font-medium text-xs text-textBlack dark:text-white",
                        children: "BUY $FlowAI",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "h-8 ".concat(
                      H &&
                        V &&
                        (null == V
                          ? void 0
                          : null === (e = V.name) || void 0 === e
                          ? void 0
                          : e.length) > 0 &&
                        I
                        ? "flex"
                        : "hidden",
                      " justify-center items-center p-2 base:px-4 base:gap-[6px] rounded-lg bg-backgroundGray dark:bg-darkBackgroundGray"
                    ),
                    children: [
                      H &&
                      (null == V
                        ? void 0
                        : null === (t = V.iconURL) || void 0 === t
                        ? void 0
                        : t.length) > 0
                        ? (0, n.jsx)(g(), {
                            src: null == V ? void 0 : V.iconURL,
                            alt: "logo",
                            className: "rounded-full",
                            width: 16,
                            height: 16,
                          })
                        : (0, n.jsx)("div", {
                            className:
                              "flex justify-center items-center rounded-full px-1.5 text-[12px] text-white ".concat(
                                (null == V ? void 0 : V.name) === w.Ei
                                  ? "bg-purple-300"
                                  : "bg-black"
                              ),
                            children:
                              H &&
                              (null == V
                                ? void 0
                                : null === (a = V.name) || void 0 === a
                                ? void 0
                                : a.slice(0, 1).toUpperCase()),
                          }),
                      H && el && el > 1170
                        ? (0, n.jsx)("p", {
                            className: "text-xs dark:text-white cursor-default",
                            children: null == V ? void 0 : V.name,
                          })
                        : (0, n.jsx)(n.Fragment, {}),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    onMouseEnter: () => J(!0),
                    onMouseLeave: () => J(!1),
                    children: (0, n.jsx)(L.Z, {
                      label: I
                        ? (null == Z ? void 0 : Z.name) === w.Ei
                          ? et
                            ? "Disconnect"
                            : ""
                                .concat(
                                  null == F ? void 0 : F.substring(0, 4),
                                  "..."
                                )
                                .concat(null == F ? void 0 : F.slice(-3))
                          : "Switch Chain"
                        : "Connect",
                      theme: "\n              ".concat(
                        I && et && Q && (null == Z ? void 0 : Z.name) === w.Ei
                          ? "bg-backgroundGray dark:bg-darkBackgroundGray dark:text-white min-w-[92px]"
                          : I && (null == Z ? void 0 : Z.name) === w.Ei
                          ? "min-w-[120px] bg-buttonBackground hover:bg-buttonBackgroundHover"
                          : "bg-buttonBackground hover:bg-buttonBackgroundHover",
                        " h-8\n            "
                      ),
                      isLoaderDark: !0,
                      isLoading:
                        0 === ed.base_token.contract_addr.length ||
                        0 === ed.quote_token.contract_addr.length ||
                        en ||
                        em,
                      isNavbar: !0,
                      handleClick: () => {
                        I && (null == Z ? void 0 : Z.name) !== w.Ei
                          ? ek()
                          : I && (null == Z ? void 0 : Z.name) === w.Ei && !et
                          ? er(!0)
                          : I && (null == Z ? void 0 : Z.name) === w.Ei && !Q
                          ? er(!0)
                          : I
                          ? E()
                          : m();
                      },
                    }),
                  }),
                  (0, n.jsx)(b.Z, {
                    className:
                      "hidden md:flex h-full w-[1px] bg-drawer dark:bg-darkDrawer",
                  }),
                  (0, n.jsxs)("div", {
                    className: "hidden md:flex items-center gap-2",
                    children: [
                      (0, n.jsx)(g(), {
                        // onClick: () => {
                        //   window.open("https://t.me/FlowAI_eth", "_blank");
                        // },
                        className:
                          "hover:outline outline-1 rounded-lg outline-gray-300 dark:outline-darkDrawer",
                        src: ec ? D : W,
                        alt: "Telegram",
                      }),
                      (0, n.jsx)(g(), {
                        // onClick: () => {
                        //   window.open("https://x.com/FlowAI_eth", "_blank");
                        // },
                        className:
                          "hover:outline outline-1 rounded-lg outline-gray-300 dark:outline-darkDrawer",
                        src: ec ? M : S,
                        alt: "Twitter",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "h-8 flex justify-center items-center relative p-1 rounded-lg hover:outline outline-1 outline-gray-300 dark:outline-darkDrawer bg-backgroundGray dark:bg-darkBackgroundGray",
                        children: [
                          (0, n.jsx)("div", {
                            className: "".concat(
                              ec ? "cursor-pointer" : "cursor-default",
                              " py-2 px-[3px] z-10"
                            ),
                            onClick: ev,
                            children: (0, n.jsx)(k, {
                              fill: ec ? "#768398" : "#FFFFFF",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "".concat(
                              ec ? "cursor-default" : "cursor-pointer",
                              " py-2 px-[3px] z-10"
                            ),
                            onClick: ev,
                            children: (0, n.jsx)(y, {
                              fill: ec ? "#1F242C" : "#AAB9D0",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "w-6 h-6 absolute top-1/2 -translate-y-1/2 left-1 rounded-lg bg-textBlack dark:bg-buttonBackground z-0 ".concat(
                                ec ? "translate-x-full" : "",
                                " transition-all duration-300"
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  el && el < 990
                    ? (0, n.jsx)(P, {})
                    : (0, n.jsx)(n.Fragment, {}),
                ],
              }),
              //   0
              //     ? (0, n.jsx)(h.ZP, {
              //         anchor: "bottom",
              //         open: es,
              //         onClose: () => er(!1),
              //         PaperProps: {
              //           elevation: 0,
              //           style: {
              //             borderTopLeftRadius: 16,
              //             borderTopRightRadius: 16,
              //             backgroundColor: ec ? "#242931" : "white",
              //           },
              //           square: !1,
              //         },
              //         children: (0, n.jsx)(U, {
              //           setIsOpen: er,
              //           modalType: X,
              //           claimGasTokens: ey,
              //           claimTestTokens: ef,
              //           isClaimingGasToken: en,
              //           isClaimTestLoading: em,
              //           emitSnackbarToggle: ew,
              //         }),
              //       })
              //     : (0, n.jsx)(f.Z, {
              //         open: es,
              //         onClose: (e, t) => {
              //           (t && "backdropClick" === t) || er(!1);
              //         },
              //         children: (0, n.jsx)("div", {
              //           className:
              //             "w-[390px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              //           children: (0, n.jsx)(U, {
              //             setIsOpen: er,
              //             modalType: X,
              //             claimGasTokens: ey,
              //             claimTestTokens: ef,
              //             isClaimingGasToken: en,
              //             isClaimTestLoading: em,
              //             emitSnackbarToggle: ew,
              //           }),
              //         }),
              //       }),
            ],
          });
        };
    },
    87160: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        });
      var n = a(57437),
        i = a(98094),
        s = a(12862),
        r = a(4479);
      let l = "3e9f19401261723069e996e88a046fd4";
      if (!l) throw Error("Project ID is not defined");
      let c = (0, r.axR)({
          id: 123420000824,
          caipNetworkId: "eip155:123420000824",
          chainNamespace: "eip155",
          name: "FlowAI Ethereum",
          nativeCurrency: {
            decimals: 18,
            name: "FlowAI Token",
            symbol: "dMUL",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.multipool-devnet.t.raas.gelato.cloud"],
            },
            public: {
              http: ["https://rpc.multipool-devnet.t.raas.gelato.cloud"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://multipool-devnet.cloud.blockscout.com/",
            },
          },
        }),
        o = [
          { ...c, iconURL: "https://i.imgur.com/2ZPYsAw.png" },
          { ...r.Fox, iconURL: "" },
          { ...r.JnV, iconURL: "" },
          {
            ...r.RJ0,
            iconURL: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
          },
          {
            ...r.PZg,
            iconURL: "https://icons.llamao.fi/icons/chains/rsz_linea.jpg",
          },
          {
            ...r.yue,
            iconURL: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
          },
        ],
        d = new s.K({
          storage: (0, i.o)({ storage: void 0 }),
          ssr: !0,
          projectId: l,
          networks: o,
        });
      d.wagmiConfig;
      var u = a(78908),
        b = a(38038),
        h = a(11277);
      a(2265);
      var f = a(48799),
        m = a(58576);
      let p = new u.S();
      if (!l) throw Error("Project ID is not defined");
      (0, h.cz)({
        adapters: [d],
        projectId: l,
        networks: [c, r.Fox, r.JnV, r.RJ0, r.PZg, r.yue],
        defaultNetwork: c,
        metadata: {
          name: "appkit-example",
          description: "AppKit Example",
          url: "https://appkitexampleapp.com",
          icons: ["https://avatars.githubusercontent.com/u/179229932"],
        },
        includeWalletIds: [
          "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
          "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
          "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
          "18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1",
          "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
          "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",
          "c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",
          "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150",
          "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
          "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
          "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",
          "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",
        ],
        featuredWalletIds: [
          "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
          "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
          "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
          "18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1",
          "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
          "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",
          "c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",
          "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150",
          "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
          "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
          "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",
          "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",
        ],
        features: { analytics: !0, email: !1, socials: !1 },
      });
      var x = function (e) {
        let { children: t, cookies: a } = e,
          i = (0, f.jx)(d.wagmiConfig, a);
        return (0, n.jsx)(m.F, {
          config: d.wagmiConfig,
          initialState: i,
          children: (0, n.jsx)(b.aH, { client: p, children: t }),
        });
      };
    },
    24795: function (e, t, a) {
      "use strict";
      var n = a(2265),
        i = a(42980),
        s = a(16775),
        r = a(79037),
        l = a(65613),
        c = a(83447),
        o = a(82367),
        d = a(55198);
      t.Z = function () {
        let { address: e, isConnected: t, chain: a } = (0, r.m)(),
          { tradeData: u } = (0, o.useGlobalContext)(),
          [b, h] = (0, n.useState)(""),
          [f, m] = (0, n.useState)(""),
          [p, x] = (0, n.useState)(""),
          [g, v] = (0, n.useState)(!0),
          { data: k, refetch: y } = (0, l.K)({
            address: e,
            query: {
              refetchInterval: 1e4,
              enabled: t && (null == a ? void 0 : a.name) === d.Ei,
            },
          }),
          {
            data: w,
            isPending: j,
            refetch: C,
          } = (0, c.N)({
            contracts: [
              {
                address: u.quote_token.contract_addr,
                abi: i.Wo,
                functionName: "balanceOf",
                args: [e],
              },
              {
                address: u.base_token.contract_addr,
                abi: i.Wo,
                functionName: "balanceOf",
                args: [e],
              },
            ],
            query: {
              refetchInterval: 1e4,
              enabled:
                t &&
                (null == a ? void 0 : a.name) === d.Ei &&
                u.quote_token.contract_addr.length > 0 &&
                u.base_token.contract_addr.length > 0,
            },
          });
        return (
          (0, n.useEffect)(() => {
            let e = (e) => {
              y();
            };
            return (
              document.addEventListener("refetchNativeTokenBalance", e),
              () => {
                document.removeEventListener("refetchNativeTokenBalance", e);
              }
            );
          }, []),
          (0, n.useEffect)(() => {
            let e = (e) => {
              C();
            };
            return (
              document.addEventListener("refetchTradeTokenBalance", e),
              () => {
                document.removeEventListener("refetchTradeTokenBalance", e);
              }
            );
          }, []),
          (0, n.useEffect)(() => {
            v(j);
          }, [j]),
          (0, n.useEffect)(() => {
            if (w && void 0 !== w[0].result && void 0 !== w[1].result) {
              let e = (0, s.b)(w[0].result, u.quote_token.decimals),
                t = (0, s.b)(w[1].result, u.base_token.decimals);
              e !== b && h(e), t !== f && m(t);
            }
          }, [w]),
          (0, n.useEffect)(() => {
            k && k.formatted !== p && x(k.formatted);
          }, [k]),
          {
            quoteTokenBalance: b,
            baseTokenBalance: f,
            isTradeTokenPending: g,
            nativeTokenBalance: p,
          }
        );
      };
    },
    70051: function (e, t, a) {
      "use strict";
      var n = a(2265);
      t.Z = function () {
        let [e, t] = (0, n.useState)();
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              t(window.innerWidth);
            };
            return (
              t(window.innerWidth),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          { windowWidth: e }
        );
      };
    },
    63385: function () {},
    9091: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/fullLogoDark.41bfd70f.svg",
        height: 24,
        width: 139,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    88059: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/fullLogoLight.db2b7621.svg",
        height: 24,
        width: 139,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    69034: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/blueLoader.48dedace.svg",
        height: 64,
        width: 64,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    20086: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/crossDark.7c78e323.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    64160: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/crossLight.338fc026.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    58022: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logoDark.3d99b33e.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    62300: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logoLight.17a8ce3a.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(0, [764, 462, 837, 91, 55, 713, 367, 971, 938, 744], function () {
      return e((e.s = 38));
    }),
      (_N_E = e.O());
  },
]);
