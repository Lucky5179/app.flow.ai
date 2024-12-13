(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    35883: function () {},
    89214: function () {},
    85568: function () {},
    25286: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 91420));
    },
    91420: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return ts;
          },
        });
      var r = a(57437),
        l = a(2265),
        s = a(94629),
        i = a(54986),
        d = a(53126),
        n = a(64111),
        o = a(18960),
        c = a(16691),
        x = a.n(c),
        u = a(82367),
        m = a(55198),
        h = a(56598),
        p = a(56314),
        g = {
          src: "/_next/static/media/chartUnselectedLight.fd02f902.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = {
          src: "/_next/static/media/chartUnselectedDark.1ce3d766.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/chartSelected.212db867.svg",
          height: 34,
          width: 34,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = {
          src: "/_next/static/media/arrowDownLight.c5818c80.svg",
          height: 6,
          width: 8,
          blurWidth: 0,
          blurHeight: 0,
        },
        j = {
          src: "/_next/static/media/arrowDownDark.7ef210c4.svg",
          height: 8,
          width: 13,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = a(69034),
        y = {
          src: "/_next/static/media/loader.fbf2799d.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = a(30666),
        N = a(15795),
        _ = a(29872),
        G = a(73701),
        B = a(66988),
        F = a(98489),
        S = a(39279),
        C = {
          src: "/_next/static/media/searchLight.b670c2d2.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: "/_next/static/media/unselectedFavouriteBackgroundLight.96f99fc1.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        Z = {
          src: "/_next/static/media/unselectedFavouriteBackgroundDark.a7c3c422.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: "/_next/static/media/selectedFavouriteBackground.cdc0bae3.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        O = {
          src: "/_next/static/media/unselectedFavourite.3f047c28.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        L = {
          src: "/_next/static/media/informationLight.49b27747.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = {
          src: "/_next/static/media/informationDark.5524ce01.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = a(64160),
        P = a(20086),
        R = (e) => {
          var t;
          let { setIsModalOpen: a } = e,
            [s, d] = (0, l.useState)(!1),
            [n, o] = (0, l.useState)(""),
            {
              tokenPairList: c,
              setTradeData: m,
              darkMode: h,
            } = (0, u.useGlobalContext)(),
            [p, g] = (0, l.useState)(c),
            [b, f] = (0, l.useState)(
              null === (t = c[0]) || void 0 === t ? void 0 : t.pair_id
            );
          (0, l.useEffect)(() => {
            c.length > 0 && f(c[0].pair_id);
          }, [c]),
            (0, l.useEffect)(() => {
              g(
                c.filter((e) =>
                  e.token_pair_name.toLowerCase().includes(n.toLowerCase())
                )
              );
            }, [n]),
            (0, l.useEffect)(() => {
              g(c);
            }, [c]);
          let k = (e, t, a, l) =>
            (0, r.jsx)(w.Z, {
              align: "left" === l ? "left" : "right",
              sx: {
                color: "#AAB9D0",
                fontSize: "14px",
                paddingLeft: t,
                paddingRight: a,
                paddingTop: "12px",
                paddingBottom: "12px",
                backgroundColor: h ? "#242931" : "#FFFFFF",
                borderBottom: h ? "1px solid rgb(50, 59, 72)" : "",
              },
              children: e,
            });
          return (0, r.jsxs)("div", {
            className:
              "max-h-full w-full 2xl:w-1 min-w-fit md:max-w-[308px] overflow-y-hidden flex flex-col grow justify-start rounded-t-2xl base:rounded-b-2xl py-4 bg-white dark:bg-darkCardBackground",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "hidden md:flex 2xl:hidden justify-between items-center px-4 pb-3.5",
                children: [
                  (0, r.jsx)(x(), { src: h ? E : L, alt: "information" }),
                  (0, r.jsx)("p", {
                    className: "dark:text-white",
                    children: "Trading Pairs",
                  }),
                  (0, r.jsx)(x(), {
                    src: h ? P.Z : M.Z,
                    alt: "cross",
                    width: 22,
                    height: 22,
                    className: "cursor-pointer",
                    onClick: () => a && a(!1),
                  }),
                ],
              }),
              (0, r.jsx)(i.Z, {
                className:
                  "hidden md:flex 2xl:hidden bg-drawer dark:bg-darkDrawer",
                style: { marginBottom: 16 },
              }),
              (0, r.jsxs)("div", {
                className: "flex gap-2 px-4 mb-4",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-grow gap-2 justify-start items-center py-1.5 px-4 rounded-lg bg-backgroundGray dark:bg-darkBackgroundGray",
                    children: [
                      (0, r.jsx)(x(), {
                        src: C,
                        alt: "search",
                        width: 18,
                        height: 18,
                      }),
                      (0, r.jsx)("input", {
                        value: n,
                        placeholder: "Search",
                        className:
                          "w-full text-textGray dark:text-darkTextGray text-sm bg-backgroundGray dark:bg-darkBackgroundGray uppercase placeholder:normal-case focus:outline-none",
                        type: "text",
                        onChange: (e) => o(e.target.value),
                      }),
                    ],
                  }),
                  (0, r.jsx)(x(), {
                    className: "cursor-pointer hidden",
                    src: s ? D : h ? Z : T,
                    alt: "favourite",
                    onClick: () => d((e) => !e),
                  }),
                ],
              }),
              (0, r.jsx)(i.Z, { className: "bg-drawer dark:bg-darkDrawer" }),
              (0, r.jsx)(N.Z, {
                component: _.Z,
                style: {
                  boxShadow: "none",
                  backgroundColor: h ? "#242931" : "#FFFFFF",
                },
                children: (0, r.jsxs)(G.Z, {
                  stickyHeader: !0,
                  children: [
                    (0, r.jsx)(B.Z, {
                      children: (0, r.jsxs)(F.Z, {
                        children: [
                          k("Market", "16px", "0px", "left"),
                          k("Price", "0px", "10px", "right"),
                          k("24h Volume", "0px", "16px", "right"),
                        ],
                      }),
                    }),
                    (0, r.jsx)(S.Z, {
                      children: p.map((e, t) =>
                        (0, r.jsxs)(
                          F.Z,
                          {
                            style: { cursor: "pointer" },
                            className: "".concat(
                              b === e.pair_id
                                ? "bg-backgroundGray dark:bg-darkBackground"
                                : "",
                              " hover:bg-backgroundGray dark:hover:bg-darkBackground"
                            ),
                            onClick: () => {
                              var t;
                              e.pair_id ===
                                (null === (t = c[0]) || void 0 === t
                                  ? void 0
                                  : t.pair_id) &&
                                (m((t) => ({ ...t, ...e })),
                                a && a(!1),
                                f(e.pair_id));
                            },
                            children: [
                              (0, r.jsx)(w.Z, {
                                sx: {
                                  paddingY: "9px",
                                  borderBottom: h
                                    ? "1px solid rgb(50, 59, 72)"
                                    : "",
                                },
                                children: (0, r.jsxs)("div", {
                                  className: "flex gap-3",
                                  children: [
                                    (0, r.jsx)(x(), {
                                      src: O,
                                      alt: "favourite",
                                      className: "hidden",
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-sm dark:text-white",
                                      children: e.token_pair_name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)(w.Z, {
                                align: "right",
                                sx: {
                                  paddingRight: "0px",
                                  paddingY: "9px",
                                  borderBottom: h
                                    ? "1px solid rgb(50, 59, 72)"
                                    : "",
                                },
                                children: (0, r.jsx)("p", {
                                  className:
                                    "text-sm text-right pr-2.5 \n                    ".concat(
                                      Number(e["24h_difference"] || 0) > 0
                                        ? "text-textGreen"
                                        : "text-textRed",
                                      "\n                    "
                                    ),
                                  children: e.price,
                                }),
                              }),
                              (0, r.jsx)(w.Z, {
                                sx: {
                                  paddingY: "9px",
                                  borderBottom: h
                                    ? "1px solid rgb(50, 59, 72)"
                                    : "",
                                },
                                children: (0, r.jsxs)("p", {
                                  className:
                                    "text-sm text-right text-textGray dark:text-darkTextGray",
                                  children: [e.quoteTokenVolume_24h, " "],
                                }),
                              }),
                            ],
                          },
                          e.token_pair_name + t
                        )
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        I = a(70051),
        A = a(79037),
        q = a(24930),
        H = a.n(q),
        W = a(48475),
        U = a.n(W);
      let z = H()(
        () =>
          a
            .e(615)
            .then(a.bind(a, 59615))
            .then((e) => e.TVChartContainer),
        { loadableGenerated: { webpack: () => [59615] }, ssr: !1 }
      );
      var V = () => {
        let { darkMode: e } = (0, u.useGlobalContext)(),
          [t, a] = (0, l.useState)(!1),
          { address: s } = (0, A.m)(),
          [i, d] = (0, l.useState)({
            symbol: "ETHUSD",
            interval: "1D",
            library_path: "/static/charting_library/",
            locale: "en",
            charts_storage_url: "https://saveload.tradingview.com",
            charts_storage_api_version: "1.0",
            client_id: "https://devnet.multipool.finance/",
            user_id: s,
            fullscreen: !1,
            autosize: !0,
            theme: e ? "dark" : "light",
            custom_css_url: "/static/charting_library/css/style.css",
          });
        return (
          (0, l.useEffect)(() => {
            let t = e ? "dark" : "light";
            i.theme !== t && d((e) => ({ ...e, theme: t }));
          }, [e]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(U(), {
                src: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.4/socket.io.js",
                onReady: () => a(!0),
              }),
              t && (0, r.jsx)(z, { ...i }),
            ],
          })
        );
      };
      let J = (e, t) =>
        (0, r.jsx)("p", {
          className:
            "text-xs py-1.5 px-2 ml-1 rounded-md font-medium bg-opacity-20 ".concat(
              t ? "text-textGreen bg-textGreen" : "text-textRed bg-textRed"
            ),
          children: e,
        });
      var Q = (e) => {
          let { isDesktop: t } = e,
            [a, s] = (0, l.useState)(!1),
            [o, c] = (0, l.useState)(!1),
            [m, h] = (0, l.useState)(!1),
            { windowWidth: w } = (0, I.Z)(),
            { tradeData: N, darkMode: _ } = (0, u.useGlobalContext)(),
            G = () =>
              (0, r.jsxs)(r.Fragment, {
                children: [
                  N["24h_difference"]
                    ? (0, r.jsxs)("div", {
                        className: "flex flex-col gap-1.5 items-start",
                        children: [
                          (0, r.jsx)("p", {
                            className:
                              "text-xs font-normal leading-3 text-textGray dark:text-darkTextGray",
                            children: "24h Change",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xs font-normal leading-4 ".concat(
                              N.isPriceIncrease
                                ? "text-textGreen"
                                : "text-textRed"
                            ),
                            children: N["24h_difference"],
                          }),
                        ],
                      })
                    : (0, r.jsx)(x(), {
                        className: "animate-spin",
                        src: y,
                        alt: "Loader",
                        width: 28,
                        height: 28,
                      }),
                  N.high_24h
                    ? (0, r.jsxs)("div", {
                        className: "flex flex-col gap-1.5 items-start",
                        children: [
                          (0, r.jsx)("p", {
                            className:
                              "text-xs font-normal leading-3 text-textGray dark:text-darkTextGray",
                            children: "24h High",
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-xs font-normal leading-4 text-textBlack dark:text-white",
                            children: Number(N.high_24h).toLocaleString(
                              "en-US"
                            ),
                          }),
                        ],
                      })
                    : (0, r.jsx)(x(), {
                        className: "animate-spin",
                        src: y,
                        alt: "Loader",
                        width: 28,
                        height: 28,
                      }),
                  N.low_24h
                    ? (0, r.jsxs)("div", {
                        className: "flex flex-col gap-1.5 items-start",
                        children: [
                          (0, r.jsx)("p", {
                            className:
                              "text-xs font-normal leading-3 text-textGray dark:text-darkTextGray",
                            children: "24h Low",
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-xs font-normal leading-4 text-textBlack dark:text-white",
                            children: Number(N.low_24h).toLocaleString("en-US"),
                          }),
                        ],
                      })
                    : (0, r.jsx)(x(), {
                        className: "animate-spin",
                        src: y,
                        alt: "Loader",
                        width: 28,
                        height: 28,
                      }),
                  N.baseTokenVolume_24h
                    ? (0, r.jsxs)("div", {
                        className: "flex flex-col gap-1.5 items-start",
                        children: [
                          (0, r.jsxs)("p", {
                            className:
                              "text-xs font-normal leading-3 text-textGray dark:text-darkTextGray",
                            children: ["24h Volume(", N.base_token.symbol, ")"],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-xs font-normal leading-4 text-textBlack dark:text-white",
                            children: Number(
                              N.baseTokenVolume_24h
                            ).toLocaleString("en-US"),
                          }),
                        ],
                      })
                    : (0, r.jsx)(x(), {
                        className: "animate-spin",
                        src: y,
                        alt: "Loader",
                        width: 28,
                        height: 28,
                      }),
                  N.quoteTokenVolume_24h
                    ? (0, r.jsxs)("div", {
                        className: "flex flex-col gap-1.5 items-start",
                        children: [
                          (0, r.jsxs)("p", {
                            className:
                              "text-xs font-normal leading-3 text-textGray dark:text-darkTextGray",
                            children: [
                              "24h Volume(",
                              N.quote_token.symbol,
                              ")",
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-xs font-normal leading-4 text-textBlack dark:text-white",
                            children: Number(
                              N.quoteTokenVolume_24h
                            ).toLocaleString("en-US"),
                          }),
                        ],
                      })
                    : (0, r.jsx)(x(), {
                        className: "animate-spin",
                        src: y,
                        alt: "Loader",
                        width: 28,
                        height: 28,
                      }),
                ],
              });
          return (0, r.jsxs)("div", {
            className:
              "w-full h-full flex flex-col justify-start items-start pt-4 pb-0 md:py-4 rounded-none md:rounded-2xl bg-white dark:bg-darkCardBackground",
            children: [
              (0, r.jsxs)("div", {
                className: "w-full flex justify-between items-center px-4",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex justify-center items-center gap-2",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "hidden md:flex",
                        children: [
                          (0, r.jsx)(x(), {
                            className: "z-20 ".concat(
                              N.base_token.icon_link ? "" : "animate-spin"
                            ),
                            src: N.base_token.icon_link || v.Z,
                            alt: "token icons",
                            width: 32,
                            height: 32,
                          }),
                          (0, r.jsx)(x(), {
                            className: "-translate-x-2 z-10 ".concat(
                              N.quote_token.icon_link ? "flex" : "hidden"
                            ),
                            src: N.quote_token.icon_link,
                            alt: "token icons",
                            width: 32,
                            height: 32,
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex gap-1.5 mr-1 ".concat(
                          w && w < 1645 ? "cursor-pointer" : "cursor-default"
                        ),
                        onClick: () => {
                          t ? h((e) => !1) : c((e) => !1);
                        },
                        children: [
                          (0, r.jsx)("p", {
                            className:
                              "text-base md:text-xl font-medium md:font-semibold dark:text-white cursor-default",
                            children: N.token_pair_name,
                          }),
                          (0, r.jsx)(x(), {
                            className: "".concat(o && "rotate-180", " hidden"),
                            src: _ ? j : k,
                            alt: "Arrow Down",
                          }),
                        ],
                      }),
                      !a || (t && J(N["24h_difference"], N.isPriceIncrease)),
                    ],
                  }),
                  t
                    ? (0, r.jsxs)("div", {
                        className: "grow h-full flex gap-6 pl-6 items-cente",
                        children: [
                          (0, r.jsx)(i.Z, {
                            className:
                              "w-[1px] h-full bg-drawer dark:bg-darkDrawer",
                          }),
                          N.marketPrice
                            ? (0, r.jsxs)("div", {
                                className:
                                  "min-w-14 flex flex-col gap-1.5 items-start",
                                children: [
                                  (0, r.jsx)("p", {
                                    className:
                                      "text-base font-medium leading-4 ".concat(
                                        N.isPriceIncrease
                                          ? "text-textGreen"
                                          : "text-textRed"
                                      ),
                                    children:
                                      N.marketPrice.toLocaleString("en-US"),
                                  }),
                                  (0, r.jsxs)("p", {
                                    className:
                                      "text-xs font-normal leading-3 dark:text-white",
                                    children: [
                                      "$",
                                      N.marketPrice.toLocaleString("en-US"),
                                    ],
                                  }),
                                ],
                              })
                            : (0, r.jsx)(x(), {
                                className: "animate-spin",
                                src: y,
                                alt: "Loader",
                                width: 28,
                                height: 28,
                              }),
                          (0, r.jsx)(i.Z, {
                            className:
                              "hidden xl:flex w-[1px] h-full bg-drawer dark:bg-darkDrawer",
                          }),
                          w && w >= 1280 && G(),
                        ],
                      })
                    : (0, r.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          N.marketPrice
                            ? (0, r.jsx)("p", {
                                className:
                                  "text-base font-medium dark:text-white",
                                children: N.marketPrice.toLocaleString("en-US"),
                              })
                            : (0, r.jsx)(x(), {
                                className: "animate-spin",
                                src: y,
                                alt: "Loader",
                                width: 28,
                                height: 28,
                              }),
                          (0, r.jsx)("p", {
                            className: "".concat(
                              N.quote_token.symbol ? "flex" : "hidden",
                              " text-xs text-textGray dark:text-darkTextGray"
                            ),
                            children: N.quote_token.symbol,
                          }),
                          (null == N ? void 0 : N["24h_difference"]) &&
                          N.isPriceIncrease
                            ? J(N["24h_difference"], N.isPriceIncrease)
                            : "",
                          t
                            ? (0, r.jsx)(r.Fragment, {})
                            : (0, r.jsx)(x(), {
                                src: a ? f : _ ? b : g,
                                alt: "chart icons",
                                onClick: () => s((e) => !e),
                              }),
                        ],
                      }),
                ],
              }),
              (0, r.jsx)(i.Z, {
                className: "w-full bg-drawer dark:bg-darkDrawer",
                style: { marginTop: "16px", marginBottom: "16px" },
              }),
              (0, r.jsx)("div", {
                className: "hidden md:flex xl:hidden gap-6 px-4",
                children: G(),
              }),
              w && w < 1280 && w >= 768
                ? (0, r.jsx)(i.Z, {
                    className: "w-full bg-drawer dark:bg-darkDrawer",
                    style: { marginTop: "16px", marginBottom: "16px" },
                  })
                : (0, r.jsx)(r.Fragment, {}),
              (0, r.jsxs)(p.Z, {
                className: "w-full h-full flex flex-col grow",
                in: t || a,
                timeout: "auto",
                unmountOnExit: !0,
                children: [
                  (0, r.jsx)("div", {
                    className: "h-fit md:h-[435px] xl:h-[501px] flex flex-col",
                    children: (0, r.jsx)(V, {}),
                  }),
                  t
                    ? (0, r.jsx)(r.Fragment, {})
                    : (0, r.jsx)(i.Z, {
                        className: "bg-drawer dark:bg-darkDrawer",
                      }),
                ],
              }),
              (0, r.jsx)(n.ZP, {
                anchor: "bottom",
                open: o,
                onClose: () => c(!1),
                PaperProps: {
                  elevation: 0,
                  style: {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    height: "calc(100% - 150px)",
                    top: 150,
                    background: "transparent",
                  },
                  square: !1,
                },
                children: (0, r.jsx)(R, {}),
              }),
              (0, r.jsx)(d.Z, {
                open: m,
                onClose: () => h(!1),
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: (0, r.jsx)("div", {
                  className:
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[516px] w-[390px] rounded-2xl focus:outline-none",
                  children: (0, r.jsx)(R, { setIsModalOpen: h }),
                }),
              }),
            ],
          });
        },
        $ = a(11277),
        X = a(40204),
        Y = a(45233),
        K = a(76072),
        ee = a(77243),
        et = a(22169);
      let ea = l.forwardRef((e, t) => {
        let {
          className: a,
          disabled: l,
          value: s,
          onValueChange: i,
          darkMode: d,
          ...n
        } = e;
        return (0, r.jsxs)(K.fC, {
          ref: t,
          className: (0, et.cn)(
            "relative flex w-full touch-none select-none items-center",
            a
          ),
          onValueChange: i,
          value: s,
          disabled: l,
          ...n,
          children: [
            (0, r.jsx)(K.fQ, {
              className:
                "relative h-0.5 w-full grow overflow-hidden rounded-full bg-secondary",
              children: (0, r.jsx)(K.e6, {
                className: "absolute h-full bg-textGray dark:bg-darkTextGray",
              }),
            }),
            [
              { value: 0, class: "" },
              { value: 25, class: "left-1/4 -translate-x-1/4" },
              { value: 50, class: "right-1/2 translate-x-1/2" },
              { value: 75, class: "right-1/4 translate-x-1/4" },
              { value: 100, class: "right-0" },
            ].map((e) =>
              (0, r.jsx)(
                "div",
                {
                  className:
                    "absolute h-2 w-2 rounded-full border-2 border-textGray dark:border-darkTextGray "
                      .concat(
                        ((null == s ? void 0 : s[0]) || 0) >= e.value &&
                          "bg-textGray dark:bg-darkTextGray",
                        " "
                      )
                      .concat(e.class),
                  onClick: () => {
                    !l && i && i([e.value]);
                  },
                  style: { cursor: l ? "default" : "pointer" },
                },
                e.value
              )
            ),
            (0, r.jsx)(ee.Z, {
              title: "".concat((null == s ? void 0 : s[0]) || 0, "%"),
              arrow: !0,
              componentsProps: {
                tooltip: {
                  sx: {
                    bgcolor: d ? "#768398" : "#aab9d0",
                    "& .MuiTooltip-arrow": { color: d ? "#768398" : "#aab9d0" },
                  },
                },
              },
              children: (0, r.jsx)(K.bU, {
                className:
                  "block h-[12px] w-[12px] rounded-full bg-textGray dark:bg-darkTextGray outline-none border-none",
              }),
            }),
          ],
        });
      });
      ea.displayName = K.fC.displayName;
      var er = a(43469),
        el = a(9224),
        es = a(83523),
        ei = a(62442);
      let ed = er.fC;
      er.ZA;
      let en = er.B4,
        eo = l.forwardRef((e, t) => {
          let { className: a, children: l, darkMode: s, ...i } = e;
          return (0, r.jsxs)(er.xz, {
            ref: t,
            className: (0, et.cn)(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              a
            ),
            ...i,
            children: [
              l,
              (0, r.jsx)(er.JO, {
                asChild: !0,
                children: (0, r.jsx)(x(), {
                  src: s ? j : k,
                  alt: "Arrow Down",
                  className: "w-[11px] h-1.5",
                }),
              }),
            ],
          });
        });
      eo.displayName = er.xz.displayName;
      let ec = l.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(er.u_, {
          ref: t,
          className: (0, et.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...l,
          children: (0, r.jsx)(el.Z, { className: "h-4 w-4" }),
        });
      });
      ec.displayName = er.u_.displayName;
      let ex = l.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(er.$G, {
          ref: t,
          className: (0, et.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...l,
          children: (0, r.jsx)(es.Z, { className: "h-4 w-4" }),
        });
      });
      ex.displayName = er.$G.displayName;
      let eu = l.forwardRef((e, t) => {
        let { className: a, children: l, position: s = "popper", ...i } = e;
        return (0, r.jsx)(er.h_, {
          children: (0, r.jsxs)(er.VY, {
            ref: t,
            className: (0, et.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === s &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              a
            ),
            position: s,
            ...i,
            children: [
              (0, r.jsx)(ec, {}),
              (0, r.jsx)(er.l_, {
                className: (0, et.cn)(
                  "p-1",
                  "popper" === s &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: l,
              }),
              (0, r.jsx)(ex, {}),
            ],
          }),
        });
      });
      (eu.displayName = er.VY.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(er.__, {
            ref: t,
            className: (0, et.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
            ...l,
          });
        }).displayName = er.__.displayName);
      let em = l.forwardRef((e, t) => {
        let { className: a, children: l, ...s } = e;
        return (0, r.jsxs)(er.ck, {
          ref: t,
          className: (0, et.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            a
          ),
          ...s,
          children: [
            (0, r.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, r.jsx)(er.wU, {
                children: (0, r.jsx)(ei.Z, { className: "h-4 w-4" }),
              }),
            }),
            (0, r.jsx)(er.eT, { children: l }),
          ],
        });
      });
      (em.displayName = er.ck.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(er.Z0, {
            ref: t,
            className: (0, et.cn)("-mx-1 my-1 h-px bg-muted", a),
            ...l,
          });
        }).displayName = er.Z0.displayName);
      var eh = a(2916),
        ep = a(11749),
        eg = a(24795);
      function eb() {
        let { open: e } = (0, $.Ig)(),
          { chain: t, isConnected: a } = (0, A.m)(),
          { chains: s, switchChain: d } = (0, X.o)(),
          [n, o] = (0, l.useState)(),
          [c, h] = (0, l.useState)([0]),
          [p, g] = (0, l.useState)(m.i8.limit),
          { windowWidth: b } = (0, I.Z)(),
          {
            quoteTokenBalance: f,
            baseTokenBalance: v,
            isTradeTokenPending: w,
          } = (0, eg.Z)(),
          {
            tradeData: N,
            setTradeData: _,
            calculateReceiveAmount: G,
            darkMode: B,
          } = (0, u.useGlobalContext)(),
          { data: F } = (0, Y.u)({
            address: "0x709638A19Fe81F972c18ac08191f96aFB7182Ecd",
            abi: eh,
            functionName: "priceStep",
          }),
          S = () =>
            N.quote_token.isSell
              ? Number(f || "0") >= Number(N.sell)
              : N.base_token.isSell
              ? Number(v || "0") >= Number(N.sell)
              : void 0,
          C =
            !(
              N.sell &&
              N.receive &&
              S() &&
              (N.type === m.i8.market ||
                (N.base_token.isSell && N.price > N.marketPrice - 50) ||
                (N.quote_token.isSell && N.price > 0))
            ) &&
            !!a &&
            (null == t ? void 0 : t.name) === m.Ei;
        return (
          (0, l.useEffect)(() => {
            let e = (e) => {
              if (e.detail) {
                let {
                  price: t,
                  totalBaseToken: a,
                  totalQuoteToken: r,
                } = e.detail;
                h([0]),
                  (a = a ? Number(a).toFixed(N.base_token.decimals) : ""),
                  (r = r ? Number(r).toFixed(N.quote_token.decimals) : "");
                let l = N.base_token.isSell ? a : r,
                  s = N.base_token.isSell ? r : a;
                _((e) => ({
                  ...e,
                  ...("" !== l && { sell: l }),
                  ...("" !== s && { receive: s }),
                  price: Number(t.toString().replaceAll(",", "")),
                })),
                  G(l || N.sell, Number(t.toString().replaceAll(",", "")));
              }
            };
            return (
              document.addEventListener("orderbookTapped", e),
              () => {
                document.removeEventListener("orderbookTapped", e);
              }
            );
          }, [N.token_pair_name, N.base_token.isSell, N.sell]),
          (0, l.useEffect)(() => {
            N.type === m.i8.limit
              ? G(N.sell, N.price)
              : N.type === m.i8.market && G(N.sell, N.marketPrice);
          }, [N.type]),
          (0, l.useEffect)(() => {
            F &&
              N.quote_token.decimals > 0 &&
              o(Number(F) / (1 * 10 ** N.quote_token.decimals));
          }, [F, N.quote_token.decimals]),
          (0, r.jsxs)("div", {
            className:
              "w-full h-full flex flex-col justify-between px-0 py-4 md:p-4 rounded-b-xl md:rounded-xl md:bg-white md:dark:bg-darkCardBackground",
            children: [
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "w-full flex relative mb-4 rounded-lg bg-backgroundGray dark:bg-darkBackgroundGray",
                    children: [
                      Object.keys(m.JT).map((e) => {
                        let t = m.JT[e];
                        return (0, r.jsx)(
                          "p",
                          {
                            className:
                              "flex-1 py-[10px] rounded-[8px] text-center font-medium text-xs cursor-pointer text-textBlack dark:text-white transition-all duration-300 bg-transparent z-10",
                            onClick: () => {
                              h([0]),
                                _((e) => ({
                                  ...e,
                                  quote_token: {
                                    ...e.quote_token,
                                    isSell: t === m.JT.buy,
                                  },
                                  base_token: {
                                    ...e.base_token,
                                    isSell: t === m.JT.sell,
                                  },
                                  sell: "",
                                  receive: "",
                                }));
                            },
                            children: t,
                          },
                          e
                        );
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "w-1/2 h-9 absolute top-1/2 -translate-y-1/2 rounded-lg z-0 ".concat(
                            N.base_token.isSell
                              ? "bg-buttonBackgroundRed translate-x-full w-[calc(50%)]"
                              : "bg-buttonBackgroundGreen",
                            " transition-all duration-300"
                          ),
                      }),
                    ],
                  }),
                  b && b > 768
                    ? (0, r.jsx)(i.Z, {
                        className: "bg-drawer dark:bg-darkDrawer",
                      })
                    : (0, r.jsx)(r.Fragment, {}),
                  (w && a) ||
                  (0 === N.quote_token.contract_addr.length &&
                    0 === N.base_token.contract_addr.length)
                    ? (0, r.jsx)(x(), {
                        src: y,
                        alt: "Loader icons",
                        className: "w-4 h-4 animate-spin my-3",
                      })
                    : N.quote_token.contract_addr.length > 0 &&
                      N.base_token.contract_addr.length > 0
                    ? (0, r.jsxs)("p", {
                        className:
                          "text-xs my-3 text-textGray dark:text-darkTextGray",
                        children: [
                          "Available:",
                          " ",
                          (0, r.jsxs)("span", {
                            className: "text-white",
                            children: [
                              Number(
                                Number(
                                  (N.quote_token.isSell ? f : v) || 0
                                ).toFixed(2)
                              ).toLocaleString("en-US"),
                              " ",
                              N.quote_token.isSell
                                ? N.quote_token.symbol
                                : N.base_token.symbol,
                            ],
                          }),
                        ],
                      })
                    : void 0,
                  (0, r.jsxs)(ed, {
                    value: p,
                    onValueChange: (e) => {
                      _((t) => ({ ...t, type: e })), g(e);
                    },
                    children: [
                      (0, r.jsxs)(eo, {
                        className:
                          "w-full h-fit relative rounded-lg pl-4 pr-[11px] py-[10px] mb-3 text-xs leading-3 text-textBlack dark:text-white border-none outline-none bg-backgroundGray dark:bg-darkBackgroundGray",
                        darkMode: B,
                        children: [
                          (0, r.jsx)(en, { placeholder: "Select order type" }),
                          (0, r.jsx)(i.Z, {
                            orientation: "vertical",
                            className:
                              "absolute w-[1px] right-8 border border-drawer dark:border-darkDrawer",
                          }),
                        ],
                      }),
                      (0, r.jsx)(eu, {
                        className:
                          "bg-backgroundGray dark:bg-darkBackgroundGray",
                        children: Object.keys(m.i8).map((e) => {
                          let t = m.i8[e];
                          return (0, r.jsx)(
                            em,
                            {
                              value: t,
                              className: "focus:bg-[#3A3F4A] focus:text-white",
                              children: t,
                            },
                            e
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "w-full flex justify-between items-center pl-4 mb-3 rounded-lg bg-backgroundGray dark:bg-darkBackgroundGray ".concat(
                        p === m.i8.market && "cursor-not-allowed"
                      ),
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "w-fit text-xs leading-3 pr-1 text-textGray dark:text-darkTextGray",
                        children: "Price",
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-grow items-center",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "w-full h-8 flex justify-center items-center mr-4 md:mr-[10px]",
                            children: [
                              (0, r.jsx)("input", {
                                className:
                                  "w-full h-3.5 bg-transparent  text-base text-right text-ellipsis py-[9px] outline-none border-none focus:outline-none focus:border-none ".concat(
                                    p === m.i8.limit
                                      ? "text-textBlack dark:text-white"
                                      : "text-textGray dark:text-darkTextGray cursor-not-allowed"
                                  ),
                                disabled: p === m.i8.market,
                                type: "tel",
                                value:
                                  p === m.i8.limit ? N.price || "" : "Market",
                                onChange: (e) => {
                                  let t = Number(e.target.value);
                                  !isNaN(t) &&
                                    t >= 0 &&
                                    (G(N.sell, t),
                                    _((e) => ({ ...e, price: t || NaN })));
                                },
                                onKeyDown: (e) => {
                                  ("." === e.key ||
                                    "e" === e.key ||
                                    "-" === e.key) &&
                                    e.preventDefault();
                                },
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-xs ml-1 leading-3 text-textGray dark:text-darkTextGray",
                                children: N.quote_token.symbol,
                              }),
                            ],
                          }),
                          (0, r.jsx)(i.Z, {
                            orientation: "vertical",
                            className: "".concat(
                              p === m.i8.limit ? "hidden md:flex" : "hidden",
                              " h-8 w-[1px] border border-drawer dark:border-darkDrawer"
                            ),
                            style: { height: 32 },
                          }),
                          (0, r.jsxs)("div", {
                            className: "".concat(
                              p === m.i8.limit ? "hidden md:flex" : "hidden",
                              " h-8 flex-col justify-around items-center"
                            ),
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "h-full w-full flex justify-center items-center cursor-pointer",
                                onClick: () => {
                                  void 0 !== n &&
                                    (G(N.sell, N.price + n),
                                    _((e) => ({ ...e, price: e.price + n })));
                                },
                                children: (0, r.jsx)(x(), {
                                  src: B ? j : k,
                                  alt: "Increase",
                                  className: "w-[11px] h-1.5 rotate-180",
                                }),
                              }),
                              (0, r.jsx)(i.Z, {
                                orientation: "horizontal",
                                className:
                                  "h-[1px] w-8 border border-drawer dark:border-darkDrawer",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "h-full w-full flex justify-center items-center cursor-pointer",
                                onClick: () => {
                                  void 0 !== n &&
                                    N.price - n > 0 &&
                                    (G(N.sell, N.price - n),
                                    _((e) => ({ ...e, price: e.price - n })));
                                },
                                children: (0, r.jsx)(x(), {
                                  src: B ? j : k,
                                  alt: "Decrease",
                                  className: "w-[11px] h-1.5",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "w-full flex justify-between items-center pl-4 mb-4 gap-1 rounded-lg bg-backgroundGray dark:bg-darkBackgroundGray",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "w-fit text-xs leading-3 pr-1 text-textGray dark:text-darkTextGray",
                        children: "Quantity",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-grow justify-center items-center py-[9px] pr-4",
                        children: [
                          (0, r.jsx)("input", {
                            className:
                              "w-full h-3.5 bg-transparent text-textBlack dark:text-white text-base text-right outline-none border-none focus:outline-none focus:border-none",
                            type: "tel",
                            inputMode: "decimal",
                            value: N.sell,
                            onChange: (e) => {
                              let t = !isNaN(Number(e.target.value)),
                                a = Number(e.target.value);
                              if (t && a >= 0) {
                                var r, l;
                                let t =
                                    null === (r = e.target.value.split(".")) ||
                                    void 0 === r
                                      ? void 0
                                      : r[0],
                                  a =
                                    null === (l = e.target.value.split(".")) ||
                                    void 0 === l
                                      ? void 0
                                      : l[1],
                                  s = N.quote_token.isSell
                                    ? N.quote_token.decimals
                                    : N.base_token.decimals;
                                (a || "").length <= s &&
                                  G(
                                    void 0 !== a
                                      ? ""
                                          .concat(t, ".")
                                          .concat(
                                            null == a ? void 0 : a.slice(0, s)
                                          )
                                      : e.target.value,
                                    N.type === m.i8.market
                                      ? N.marketPrice
                                      : N.price
                                  );
                              }
                            },
                            onKeyDown: (e) => {
                              ("-" === e.key || "e" === e.key) &&
                                e.preventDefault();
                            },
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "text-xs ml-1 leading-3 text-textGray dark:text-darkTextGray",
                            children: N.quote_token.isSell
                              ? N.quote_token.symbol
                              : N.base_token.symbol,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(ea, {
                    disabled: !a || (null == t ? void 0 : t.name) !== m.Ei,
                    value: c,
                    onValueChange: (e) => {
                      h(e);
                      let t = (
                        (e[0] / 100) *
                        (N.quote_token.isSell ? Number(f) : Number(v))
                      ).toFixed(
                        (null == N ? void 0 : N.quote_token.isSell)
                          ? N.quote_token.decimals
                          : N.base_token.decimals
                      );
                      _((e) => ({ ...e, sell: t })),
                        G(t, N.type === m.i8.market ? N.marketPrice : N.price);
                    },
                    max: 100,
                    step: 1,
                    className: "mb-4",
                    darkMode: B || !0,
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "w-full flex justify-between items-center pl-4 rounded-lg mb-4 gap-1 bg-backgroundGray dark:bg-darkBackgroundGray",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "w-fit text-xs leading-3 pr-1 whitespace-pre text-textGray dark:text-darkTextGray",
                        children: "Total ≈",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-grow justify-center items-center py-[9px] pr-4",
                        children: [
                          (0, r.jsx)("input", {
                            className:
                              "w-full h-3.5 bg-transparent text-textBlack dark:text-white text-sm text-right outline-none border-none focus:outline-none focus:border-none",
                            type: "number",
                            value: N.receive,
                            disabled: !0,
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "text-xs ml-1 leading-3 text-textGray dark:text-darkTextGray",
                            children: N.quote_token.isSell
                              ? N.base_token.symbol
                              : N.quote_token.symbol,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(i.Z, {
                    orientation: "horizontal",
                    className:
                      "w-full h-[1px] border border-drawer dark:border-darkDrawer",
                    style: { marginBottom: 16 },
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex justify-between text-xs mb-3",
                    children: [
                      (0, r.jsx)("span", {
                        children: N.quote_token.isSell ? "Max Buy" : "Max Sell",
                      }),
                      (0, r.jsxs)("span", {
                        className: "text-textBlack dark:text-white",
                        children: [
                          (() => {
                            let e = Number(
                              N.quote_token.isSell
                                ? (Number(f || 0) / N.price).toFixed(6)
                                : (Number(v || 0) * N.price).toFixed(6)
                            ).toLocaleString("en-US");
                            return "NaN" === e ? "" : e;
                          })(),
                          " ",
                          N.quote_token.isSell
                            ? N.base_token.symbol
                            : N.quote_token.symbol,
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex justify-between text-xs mb-4",
                    children: [
                      (0, r.jsx)("span", { children: "Est. Fee" }),
                      (0, r.jsxs)("span", {
                        className: "text-textBlack dark:text-white",
                        children: [
                          (0.002 * Number(N.receive)).toFixed(6),
                          " ",
                          N.quote_token.isSell
                            ? N.base_token.symbol
                            : N.quote_token.symbol,
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(i.Z, {
                    orientation: "horizontal",
                    className:
                      "w-full h-[1px] border border-drawer dark:border-darkDrawer",
                  }),
                ],
              }),
              (0, r.jsx)(ep.Z, {
                label: a
                  ? (null == t ? void 0 : t.name) === m.Ei
                    ? N.type === m.i8.market ||
                      (N.base_token.isSell && N.price > N.marketPrice - 50) ||
                      (N.quote_token.isSell && N.price > 0)
                      ? S()
                        ? ""
                            .concat(N.quote_token.isSell ? "Buy" : "Sell", " ")
                            .concat(N.base_token.symbol)
                        : "Insufficient ".concat(
                            N.quote_token.isSell
                              ? N.quote_token.symbol
                              : N.base_token.symbol,
                            " Balance"
                          )
                      : "Price too low"
                    : "Switch Chain"
                  : "Connect Wallet",
                handleClick: a
                  ? (null == t ? void 0 : t.name) === m.Ei
                    ? () => {
                        document.dispatchEvent(
                          new CustomEvent("toggleDrawer", {
                            detail: { openDrawer: !0, isOrderNew: !0 },
                          })
                        );
                      }
                    : () => {
                        d && d({ chainId: null == s ? void 0 : s[0].id });
                      }
                  : e,
                theme: "".concat(
                  C
                    ? "bg-textGray dark:bg-darkTextGray text-white"
                    : a &&
                      (null == t ? void 0 : t.name) === m.Ei &&
                      N.quote_token.isSell
                    ? "bg-buttonBackgroundGreen text-white hover:bg-buttonBackgroundGreenHover"
                    : a && (null == t ? void 0 : t.name) === m.Ei
                    ? "bg-buttonBackgroundRed text-white hover:bg-buttonBackgroundRedHover"
                    : "bg-buttonBackground hover:bg-buttonBackgroundHover",
                  " mt-4"
                ),
                isDisabled: C,
              }),
            ],
          })
        );
      }
      var ef = a(8492),
        ek = (e) => {
          let { isDesktop: t } = e,
            [a, s] = (0, l.useState)(!1),
            [i, o] = (0, l.useState)(!1),
            { tradeData: c, setTradeData: x } = (0, u.useGlobalContext)(),
            [h, p] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              let e = (e) => {
                !0 === e.detail.isOrderNew &&
                  (window.innerWidth > 768
                    ? p(e.detail.openDrawer)
                    : s(e.detail.openDrawer),
                  o(e.detail.isOrderNew));
              };
              return (
                document.addEventListener("toggleDrawer", e),
                () => {
                  document.removeEventListener("toggleDrawer", e);
                }
              );
            }, []),
            (0, r.jsxs)("div", {
              className: "w-full h-full",
              children: [
                (0, r.jsxs)("div", {
                  className: "w-full flex relative hidden ".concat(
                    t ? "mt-0" : "mt-6",
                    " mb-3 p-1 rounded-lg bg-white dark:bg-darkCardBackground"
                  ),
                  children: [
                    Object.keys(m.i8).map((e) => {
                      let t = m.i8[e];
                      return (0, r.jsx)(
                        "p",
                        {
                          className:
                            "flex-1 py-2.5 rounded-lg text-center font-medium text-xs cursor-pointer ".concat(
                              t === c.type
                                ? "text-white dark:text-buttonBackground"
                                : "text-textGray dark:text-darkTextGray hover:text-textBlack hover:text-opacity-70 dark:hover:text-opacity-70 transition-all duration-300",
                              " bg-transparent z-10"
                            ),
                          onClick: () =>
                            x((e) => ({
                              ...e,
                              type: t,
                              sell: "",
                              receive: "",
                            })),
                          children: t,
                        },
                        e
                      );
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "w-1/2 h-9 absolute top-1/2 -translate-y-1/2 rounded-lg bg-textBlack dark:bg-buttonBackground dark:bg-opacity-30 z-0 ".concat(
                          c.type === m.i8.limit
                            ? "translate-x-full w-[calc(50%-4px)]"
                            : "",
                          " transition-all duration-300"
                        ),
                    }),
                  ],
                }),
                (0, r.jsx)(eb, {}),
                (0, r.jsx)(n.ZP, {
                  anchor: "bottom",
                  open: a && i,
                  onClose: () => s(!1),
                  PaperProps: {
                    elevation: 0,
                    style: {
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                    square: !1,
                  },
                  children: (0, r.jsx)(ef.Z, {
                    setIsOpen: s,
                    isOrderNew: i,
                    isCancel: !1,
                  }),
                }),
                (0, r.jsx)(d.Z, {
                  open: h,
                  onClose: (e, t) => {
                    "backdropClick" !== t && p(!1);
                  },
                  "aria-labelledby": "modal-modal-title",
                  "aria-describedby": "modal-modal-description",
                  children: (0, r.jsx)("div", {
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit rounded-2xl bg-white  dark:bg-darkCardBackground focus:outline-none",
                    children: (0, r.jsx)(ef.Z, {
                      setIsOpen: p,
                      isOrderNew: i,
                      isCancel: !1,
                    }),
                  }),
                }),
              ],
            })
          );
        },
        ej = {
          src: "/_next/static/media/mulXGalxe.509387e9.svg",
          height: 48,
          width: 162,
          blurWidth: 0,
          blurHeight: 0,
        },
        ev = (e) => {
          let { setIsOpen: t } = e;
          return (0, r.jsx)("div", {
            className:
              "w-full overflow-hidden rounded-t-2xl md:rounded-2xl bg-white  dark:bg-darkCardBackground",
            children: (0, r.jsx)("div", {
              className:
                "w-full md:w-[390px] py-4 flex flex-col justify-center items-center",
              children: (0, r.jsxs)("div", {
                className:
                  "w-full flex flex-col px-4 justify-center items-center text-center translate-",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "w-full flex justify-center items-center py-16 rounded-[8px] bg-backgroundGray dark:bg-darkBackgroundGray",
                    children: (0, r.jsx)(x(), {
                      className: "cursor-pointer",
                      src: ej,
                      alt: "MulxGalxe",
                      onClick: () => t(!1),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col px-8 pt-6",
                    children: [
                      (0, r.jsx)("h1", {
                        className:
                          "font-medium text-xl mb-4  text-black dark:text-white",
                        children: "Welcome to FlowAI Ethereum",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "font-normal mb-3 text-sm text-center text-black dark:text-white",
                        children:
                          "Start trading today and earn $FlowAI through our Galxe campaign.",
                      }),
                      (0, r.jsxs)("p", {
                        className:
                          "font-normal mb-6 text-sm text-center text-black dark:text-white",
                        children: [
                          "You're previewing",
                          " ",
                          (0, r.jsx)("span", {
                            className:
                              "px-2 py-1 rounded-[4px] bg-backgroundGray dark:bg-darkBackgroundGray text-[11px] text-buttonBackground",
                            children: m.lD,
                          }),
                          " ",
                          "of FlowAI. Dip in at your own risk!",
                        ],
                      }),
                      (0, r.jsx)(ep.Z, {
                        label: "I Understand, Let’s Go",
                        handleClick: () => t(!1),
                        theme: "bg-buttonBackground",
                      }),
                      (0, r.jsxs)("p", {
                        className:
                          "font-normal mt-3 text-xs text-center text-textGray dark:text-darkTextGray",
                        children: [
                          "Not connected to Galxe?",
                          " ",
                          (0, r.jsx)("a", {
                            className: "cursor-pointer text-buttonBackground",
                            href: "https://app.galxe.com/quest/multipool",
                            children: "Click here",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ey = {
          src: "/_next/static/media/crossGray.823cd3e6.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        ew = a(58022),
        eN = a(62300),
        e_ = a(60284),
        eG = a(84142),
        eB = {
          src: "/_next/static/media/unselectedSetting.387464d8.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        eF = {
          src: "/_next/static/media/selectedSetting.4941666d.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        eS = (e) => {
          let { setIsOpen: t } = e,
            [a, s] = (0, l.useState)(m.y9.horizontal),
            [d, n] = (0, l.useState)(m.I7.cumulative);
          return (0, r.jsxs)("div", {
            className: "flex flex-col justify-center items-center",
            children: [
              (0, r.jsxs)("div", {
                className: "w-full flex justify-between items-center p-4",
                children: [
                  (0, r.jsx)("h1", {
                    className: "text-base font-medium",
                    children: "Order Book Settings",
                  }),
                  (0, r.jsx)(x(), {
                    className: "cursor-pointer",
                    src: M.Z,
                    alt: "Cross",
                    onClick: () => t(!1),
                  }),
                ],
              }),
              (0, r.jsx)(i.Z, { className: "w-full bg-drawer" }),
              (0, r.jsxs)("div", {
                className: "w-full flex flex-col items-start my-6 px-4",
                children: [
                  (0, r.jsx)("p", {
                    className: "text-sm text-textGray",
                    children: "Display Mode",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "w-full flex mt-1.5 p-1 rounded-lg bg-backgroundGray",
                    children: Object.keys(m.y9).map((e) => {
                      let t = m.y9[e];
                      return (0, r.jsx)(
                        "p",
                        {
                          className:
                            "flex-1 py-2.5 rounded-lg text-center text-xs ".concat(
                              t === a
                                ? "bg-textBlack font-medium text-white"
                                : "bg-backgroundGray text-textGray"
                            ),
                          onClick: () => s(t),
                          children: t,
                        },
                        e
                      );
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "w-full flex flex-col items-start my-6 px-4",
                children: [
                  (0, r.jsx)("p", {
                    className: "text-sm text-textGray",
                    children: "Depth Mode",
                  }),
                  (0, r.jsx)("div", {
                    className: "w-full flex mt-1.5 p-1 rounded-lg bg-white",
                    children: Object.keys(m.I7).map((e) => {
                      let t = m.I7[e];
                      return (0, r.jsx)(
                        "p",
                        {
                          className:
                            "flex-1 py-2.5 rounded-lg text-center text-xs ".concat(
                              t === d
                                ? "bg-textBlack font-medium text-white"
                                : "bg-backgroundGray text-textGray"
                            ),
                          onClick: () => n(t),
                          children: t,
                        },
                        e
                      );
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        eC = {
          src: "/_next/static/media/arrowUpGreen.35f2b9d5.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        eT = {
          src: "/_next/static/media/arrowDownRed.e5fa2d33.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        eZ = (e) => {
          let {
              orders: t,
              currentOrderType: a,
              orderBookStyle: s,
              orderLength: i = 0,
              stackedStyle: d,
            } = e,
            n = (0, l.useRef)(null),
            [o, c] = (0, l.useState)([]),
            [x, p] = (0, l.useState)(null),
            { windowWidth: g } = (0, I.Z)(),
            { darkMode: b, tradeData: f } = (0, u.useGlobalContext)(),
            k = a === m.ZO.bid;
          m.GI.bidsOnly,
            (0, l.useEffect)(() => {
              var e, r;
              if (
                (null !==
                  (r =
                    null === (e = n.current) || void 0 === e
                      ? void 0
                      : e.offsetWidth) && void 0 !== r
                  ? r
                  : 0) > 0
              ) {
                if ((null == t ? void 0 : t.length) === 0) c([]);
                else {
                  let e = t.map((e, r) => {
                    let l = a === m.ZO.ask ? t.length - r : r + 1;
                    return {
                      ...e,
                      width: j(e),
                      height: "".concat(16 * l + 4 * l, "px"),
                    };
                  });
                  for (; i > e.length; )
                    (s === m.Qb.stacked && a === m.ZO.ask
                      ? e.unshift
                      : e.push
                    ).call(e, {
                      price: -1,
                      quantity: -1,
                      total: -1,
                      width: "",
                      height: "",
                    });
                  c(e);
                }
              }
            }, [t]);
          let j = (e) => {
              let r = s === m.Qb.stacked && a === m.ZO.ask ? 0 : t.length - 1;
              return (100 * e.total) / t[r].total + "%";
            },
            v = (e, t, a) =>
              (0, r.jsxs)("div", {
                className: ""
                  .concat(
                    k && s === m.Qb.stacked ? "h-0" : "h-fit",
                    " flex flex-col justify-center items-"
                  )
                  .concat(a),
                children: [
                  (0, r.jsx)("p", {
                    className: "text-xs font-normal text-"
                      .concat(a, " ")
                      .concat(
                        s === m.Qb.simple
                          ? "mr-1.5 text-textGray dark:text-darkTextGray"
                          : k
                          ? "text-transparent"
                          : "text-textGray dark:text-darkTextGray"
                      ),
                    children: e,
                  }),
                  (0, r.jsx)("p", {
                    className: "".concat(
                      s === m.Qb.simple ? "flex" : "hidden",
                      " text-xs font-normal text-textGray dark:text-darkTextGray mr-1.5 text-end"
                    ),
                    children: t,
                  }),
                ],
              }),
            y = (e, t, a) =>
              (0, r.jsx)(w.Z, {
                width: g && g > 768 ? "33.33%" : "50%",
                sx: {
                  paddingTop: t,
                  paddingBottom: a,
                  border: "none",
                  overflowY: "auto",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  backgroundColor: b ? "#242931" : "#FFFFFF",
                },
                children: e,
              }),
            N = function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "";
              document.dispatchEvent(
                new CustomEvent("orderbookTapped", {
                  detail: { price: e, totalBaseToken: t, totalQuoteToken: a },
                })
              );
            },
            _ = (e, t) => {
              let r = [...o],
                l = a === m.ZO.ask,
                s = t.price.toString(),
                i = t.total,
                d = t.price * t.total;
              if (!f.base_token.isSell && l) {
                d = 0;
                let t = l ? r.length - 1 - e : e;
                l && r.reverse();
                for (let e = 0; e <= t; e++) d += r[e].price * r[e].quantity;
              } else if (f.base_token.isSell && !l) {
                d = 0;
                for (let t = 0; t <= e; t++) d += r[t].price * r[t].quantity;
              }
              N(s, i.toString(), d.toString());
            };
          return (0, r.jsxs)(G.Z, {
            ref: n,
            stickyHeader: !0,
            "aria-label": "simple table",
            sx: {
              ".MuiTableCell-head": { lineHeight: "12px", minHeight: "200px" },
              position: "relative",
              backgroundColor: b ? "#242931" : "#FFFFFF",
            },
            children: [
              (0, r.jsx)(B.Z, {
                children: (0, r.jsx)(F.Z, {
                  children:
                    s === m.Qb.simple
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            y(
                              v(
                                k ? "Bid Qty." : "Ask Price",
                                k ? "ETH" : "USDT",
                                k ? "end" : "start"
                              ),
                              "16px",
                              "9px"
                            ),
                            y(
                              v(
                                k ? "Bid Price" : "Ask Qty.",
                                k ? "USDT" : "ETH",
                                k ? "end" : "start"
                              ),
                              "16px",
                              "9px"
                            ),
                          ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            y(
                              v("Price (USDT)", "", "start"),
                              k ? "0px" : "16px",
                              k ? "0px" : "9px"
                            ),
                            y(
                              v("Amount (ETH)", "", "end"),
                              k ? "0px" : "16px",
                              k ? "0px" : "9px"
                            ),
                            " ",
                            g && g > 768
                              ? y(
                                  v("Total", "", "end"),
                                  k ? "0px" : "16px",
                                  k ? "0px" : "9px"
                                )
                              : (0, r.jsx)(r.Fragment, {}),
                          ],
                        }),
                }),
              }),
              (0, r.jsx)(S.Z, {
                children:
                  d !== m.GI.bidsOnly || k
                    ? null == o
                      ? void 0
                      : o.map((e, t) =>
                          (0, r.jsx)(
                            l.Fragment,
                            {
                              children: (0, r.jsx)(F.Z, {
                                sx: {
                                  border: 0,
                                  position: "relative",
                                  cursor: "default",
                                },
                                onMouseEnter: () => p(t),
                                onMouseLeave: () => p(null),
                                children:
                                  s === m.Qb.simple
                                    ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          y(
                                            (0, r.jsx)("p", {
                                              className: "text-sm "
                                                .concat(
                                                  k
                                                    ? b
                                                      ? "text-white  text-end"
                                                      : "text-textBlack text-end"
                                                    : "text-textRed text-start",
                                                  " bg-transparent "
                                                )
                                                .concat(
                                                  -1 === e.price
                                                    ? "opacity-0"
                                                    : ""
                                                ),
                                              children: k
                                                ? e.quantity
                                                : e.price,
                                            }),
                                            "6px",
                                            "6px"
                                          ),
                                          y(
                                            (0, r.jsx)("p", {
                                              className: "text-sm "
                                                .concat(
                                                  k
                                                    ? "text-textGreen text-end"
                                                    : b
                                                    ? "text-white  text-start"
                                                    : "text-textBlack text-start",
                                                  " bg-transparent "
                                                )
                                                .concat(
                                                  -1 === e.price
                                                    ? "opacity-0"
                                                    : ""
                                                ),
                                              children: k
                                                ? e.price
                                                : e.quantity,
                                            }),
                                            "6px",
                                            "6px"
                                          ),
                                          (0, r.jsx)("div", {
                                            className: "absolute ".concat(
                                              k
                                                ? "right-0 bg-textGreen rounded-l-md"
                                                : "left-0 bg-textRed rounded-r-md",
                                              " h-[32px] bg-opacity-20"
                                            ),
                                            style: { width: e.width },
                                          }),
                                        ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          y(
                                            (0, r.jsx)("p", {
                                              className: "text-xs ".concat(
                                                k
                                                  ? "text-textGreen"
                                                  : "text-textRed",
                                                " text-start bg-transparent cursor-pointer"
                                              ),
                                              onClick: () => {
                                                -1 !== e.price &&
                                                  N(e.price.toString());
                                              },
                                              children:
                                                -1 === e.price ? "" : e.price,
                                            }),
                                            "2px",
                                            "2px"
                                          ),
                                          y(
                                            (0, r.jsx)("p", {
                                              className: "text-xs ".concat(
                                                b
                                                  ? "text-white"
                                                  : "text-textBlack",
                                                " text-end bg-transparent"
                                              ),
                                              children:
                                                -1 === e.price
                                                  ? ""
                                                  : e.quantity < 1e-6 &&
                                                    0 !== e.quantity
                                                  ? "0.00000..."
                                                  : (0, h.uf)(e.quantity, 4),
                                            }),
                                            "2px",
                                            "2px"
                                          ),
                                          g && g > 768
                                            ? y(
                                                (0, r.jsx)("p", {
                                                  className: "text-xs ".concat(
                                                    b
                                                      ? "text-white"
                                                      : "text-textBlack",
                                                    " text-end bg-transparent cursor-pointer"
                                                  ),
                                                  onClick: () => {
                                                    -1 !== e.price && _(t, e);
                                                  },
                                                  children:
                                                    -1 === e.price
                                                      ? ""
                                                      : e.total < 1e-6
                                                      ? "0.00000..."
                                                      : (0, h.uf)(e.total, 4),
                                                }),
                                                "2px",
                                                "2px"
                                              )
                                            : (0, r.jsx)(r.Fragment, {}),
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute pointer-events-none ".concat(
                                                k
                                                  ? "bg-textGreen"
                                                  : "bg-textRed",
                                                " right-0 rounded-l-sm h-[19px] bg-opacity-20"
                                              ),
                                            style: { width: e.width },
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "w-full hidden md:flex absolute pointer-events-none right-0 rounded-l-md bg-opacity-20 z-50 "
                                                .concat(
                                                  a === m.ZO.ask
                                                    ? "top-0"
                                                    : "bottom-0",
                                                  " "
                                                )
                                                .concat(
                                                  x === t && a === m.ZO.ask
                                                    ? "bg-black dark:bg-gray-50 dark:bg-opacity-10"
                                                    : x === t && k
                                                    ? " bg-black dark:bg-gray-50 dark:bg-opacity-10"
                                                    : ""
                                                ),
                                            style: { height: e.height },
                                          }),
                                        ],
                                      }),
                              }),
                            },
                            t
                          )
                        )
                    : [],
              }),
            ],
          });
        },
        eD = (e) => {
          let { orderBook: t, orderBookStyle: a, stackedStyle: s } = e,
            { tradeData: i } = (0, u.useGlobalContext)(),
            { windowWidth: d } = (0, I.Z)(),
            n = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(() => {
              n.current &&
                setTimeout(() => {
                  n.current.scrollTop = n.current.scrollHeight;
                }, 0);
            }, [s]),
            (0, r.jsxs)("div", {
              className:
                "h-full w-full grow max-h-[385px] md:max-h-[490px] flex flex-col ".concat(
                  s === m.GI.bidsAndAsks
                    ? "justify-between"
                    : s === m.GI.asksOnly
                    ? "justify-end"
                    : "justify-start",
                  " pb-0"
                ),
              children: [
                (0, r.jsx)(N.Z, {
                  ref: n,
                  component: _.Z,
                  className: "flex "
                    .concat(
                      s === m.GI.bidsOnly
                        ? "min-h-fit"
                        : "min-h-[182px] md:min-h-[235px] lg:min-h-[242px] xl:min-h-[235px]",
                      " flex-col "
                    )
                    .concat(
                      s === m.GI.bidsAndAsks
                        ? "overflow-y-hidden"
                        : "overflow-y-scroll",
                      " px-0 md:px-2 xl:px-4 dark:bg-transparent md:dark:bg-darkCardBackground"
                    ),
                  style: { boxShadow: "none" },
                  children: (0, r.jsx)(eZ, {
                    orders:
                      s === m.GI.asksOnly
                        ? t.ask
                        : t.ask.slice(d && d > 768 ? -10 : -7),
                    currentOrderType: m.ZO.ask,
                    orderLength:
                      s === m.GI.asksOnly ? 25 : d && d > 768 ? 10 : 7,
                    stackedStyle: s,
                    orderBookStyle: a,
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "w-full flex justify-between items-center px-0 md:px-4 py-1",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, r.jsx)("div", {
                          className: "flex gap-[2px]",
                          children: i.marketPrice
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)("h1", {
                                    className: "font-medium text-base ".concat(
                                      i.isPriceIncrease
                                        ? "text-textGreen"
                                        : "text-textRed"
                                    ),
                                    children:
                                      i.marketPrice.toLocaleString("en-US"),
                                  }),
                                  (0, r.jsx)(x(), {
                                    src: i.isPriceIncrease ? eC : eT,
                                    alt: "Arrow",
                                  }),
                                ],
                              })
                            : (0, r.jsx)(x(), {
                                className: "animate-spin",
                                src: y,
                                alt: "Loader",
                                width: 24,
                                height: 24,
                              }),
                        }),
                        (0, r.jsxs)("h1", {
                          className:
                            "font-medium text-sm dark:text-white ".concat(
                              i.marketPrice ? "" : "hidden"
                            ),
                          children: [
                            "$",
                            i.marketPrice.toLocaleString("en-US"),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("p", {
                      className: "text-xs text-textGray hidden",
                      children: "More",
                    }),
                  ],
                }),
                (0, r.jsx)(N.Z, {
                  component: _.Z,
                  className:
                    "min-h-[131px] md:min-h-[187px] lg:min-h-[201px] xl:min-h-[187px] "
                      .concat(
                        s === m.GI.asksOnly ? "hidden" : "flex",
                        " flex-col "
                      )
                      .concat(
                        s === m.GI.bidsAndAsks
                          ? "overflow-y-hidden"
                          : "overflow-y-scroll",
                        " px-0  md:px-2 xl:px-4 mb-4 md:mb-0 xl:mb-0 dark:bg-darkCardBackground"
                      ),
                  style: { boxShadow: "none" },
                  children: (0, r.jsx)(eZ, {
                    orders:
                      s === m.GI.bidsOnly
                        ? t.bid
                        : t.bid.slice(0, d && d > 768 ? 10 : 7),
                    currentOrderType: m.ZO.bid,
                    orderLength:
                      s === m.GI.bidsOnly ? 25 : d && d > 768 ? 10 : 7,
                    orderBookStyle: a,
                    stackedStyle: s,
                  }),
                }),
              ],
            })
          );
        },
        eO = {
          src: "/_next/static/media/bidsAndAsks.bfbf97ba.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        eL = {
          src: "/_next/static/media/bidsOnly.e2854e2f.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        eE = {
          src: "/_next/static/media/asksOnly.c4422e9f.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        eM = () => {
          let {
              tradeData: { orderBook: e },
              orderBookStyle: t,
              setOrderBookStyle: a,
            } = (0, u.useGlobalContext)(),
            [s, d] = (0, l.useState)(1),
            [o, c] = (0, l.useState)(!1),
            [h, p] = (0, l.useState)(m.GI.bidsAndAsks),
            { tradeData: g, darkMode: b } = (0, u.useGlobalContext)(),
            { windowWidth: f } = (0, I.Z)();
          return (0, r.jsxs)("div", {
            className: "h-full grow flex flex-col overflow-y-scroll",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "h-fit flex justify-between items-start md:items-center md:px-4 py-4 md:py-2",
                children: [
                  (0, r.jsxs)("div", {
                    className: "w-full flex justify-between items-center",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex gap-2 items-center",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "flex justify-center items-center rounded-sm p-1 outline outline-[1px] cursor-pointer outline-backgroundGray dark:outline-darkBackgroundGray ".concat(
                                h === m.GI.bidsAndAsks &&
                                  "bg-backgroundGray dark:bg-darkBackgroundGray"
                              ),
                            onClick: () => {
                              f && f > 768
                                ? p(m.GI.bidsAndAsks)
                                : h === m.GI.bidsAndAsks
                                ? p(m.GI.bidsOnly)
                                : h === m.GI.bidsOnly
                                ? p(m.GI.asksOnly)
                                : h === m.GI.asksOnly && p(m.GI.bidsAndAsks);
                            },
                            children: (0, r.jsx)(x(), {
                              src:
                                f && f > 768
                                  ? eO
                                  : h === m.GI.bidsAndAsks
                                  ? eO
                                  : h === m.GI.bidsOnly
                                  ? eL
                                  : h === m.GI.asksOnly
                                  ? eE
                                  : void 0,
                              alt: "Bids And Asks",
                              className: "md:w-4 md:h-4",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "hidden md:flex justify-center items-center rounded-sm p-1 outline outline-[1px] cursor-pointer outline-backgroundGray dark:outline-darkBackgroundGray ".concat(
                                h === m.GI.bidsOnly &&
                                  "bg-backgroundGray dark:bg-darkBackgroundGray"
                              ),
                            onClick: () => p(m.GI.bidsOnly),
                            children: (0, r.jsx)(x(), {
                              src: eL,
                              alt: "Bids Only",
                              className: "w-4 h-4",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "hidden md:flex justify-center items-center rounded-sm p-1 outline outline-[1px] cursor-pointer outline-backgroundGray dark:outline-darkBackgroundGray ".concat(
                                h === m.GI.asksOnly &&
                                  "bg-backgroundGray dark:bg-darkBackgroundGray"
                              ),
                            onClick: () => p(m.GI.asksOnly),
                            children: (0, r.jsx)(x(), {
                              src: eE,
                              alt: "Asks Only",
                              className: "w-4 h-4",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [
                          (0, r.jsx)(e_.Z, {
                            id: "step-select",
                            value: s,
                            style: {
                              height: f && f > 768 ? 24 : 32,
                              width: 50,
                              borderRadius: "8px",
                              fontSize: "12px",
                              fontWeight: "500",
                              fontFamily: "Outfit",
                              minWidth: "62px",
                              color: b ? "#FFFFFF" : "",
                            },
                            sx: {
                              ".MuiSelect-select": { padding: "10px" },
                              ".MuiOutlinedInput-notchedOutline": {
                                borderColor: b ? "#323B48" : "#E8EBF5",
                              },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: b ? "#323B48" : "#E8EBF5",
                                opacity: "70%",
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: b ? "#323B48" : "#E8EBF5",
                                  opacity: "70%",
                                  borderWidth: 1,
                                },
                              ".MuiSvgIcon-root": {
                                fill: b ? "#FFFFFF !important" : "",
                              },
                              ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                                { backgroundColor: b ? "#1F242C" : "#ffffff" },
                            },
                            inputProps: {
                              MenuProps: {
                                MenuListProps: {
                                  sx: {
                                    backgroundColor: b ? "#1F242C" : "white",
                                    color: b ? "#FFFFFF" : "",
                                  },
                                },
                              },
                            },
                            onChange: (e) => d(Number(e.target.value)),
                            children: (0, r.jsx)(eG.Z, {
                              value: 1,
                              children: "1",
                            }),
                          }),
                          g.marketPrice
                            ? (0, r.jsx)("h1", {
                                className:
                                  "hidden md:static font-medium text-base dark:text-white",
                                children: g.marketPrice.toLocaleString("en-US"),
                              })
                            : (0, r.jsx)(x(), {
                                className: "hidden md:static animate-spin",
                                src: y,
                                alt: "Loader",
                                width: 24,
                                height: 24,
                              }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "hidden relative p-1 rounded-lg  bg-backgroundGray dark:bg-darkBackgroundGray",
                        children: [
                          Object.keys(m.Qb).map((e) => {
                            let l = m.Qb[e];
                            return (0, r.jsx)(
                              "p",
                              {
                                className:
                                  "py-1.5 px-2 rounded-md font-medium text-xs ".concat(
                                    l === t
                                      ? "text-white dark:text-buttonBackground"
                                      : "text-textGray dark:text-darkTextGray hover:text-textBlack hover:text-opacity-70 dark:hover:text-opacity-70 transition-all duration-300",
                                    " cursor-pointer z-10"
                                  ),
                                onClick: () => a(l),
                                children: l,
                              },
                              e
                            );
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "w-1/2 h-7 absolute top-1/2 -translate-y-1/2 rounded-lg bg-textBlack dark:bg-buttonBackground dark:bg-opacity-30 z-0 ".concat(
                                t === m.Qb.simple
                                  ? "translate-x-full w-[calc(50%-4px)]"
                                  : "",
                                " transition-all duration-300"
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(x(), {
                    className: "hidden",
                    src: o ? eF : eB,
                    alt: "settings",
                    onClick: () => c((e) => !e),
                  }),
                ],
              }),
              (0, r.jsx)(i.Z, {
                className: "w-full h-[1px] bg-drawer dark:bg-darkDrawer",
              }),
              t === m.Qb.stacked
                ? (0, r.jsx)(eD, {
                    orderBook: e,
                    orderBookStyle: t,
                    stackedStyle: h,
                  })
                : (0, r.jsxs)(N.Z, {
                    component: _.Z,
                    className:
                      "h-full grow flex overflow-y-scroll px-4 mb-4 max-h-96 md:max-h-[477px] gap-[2px] dark:bg-darkCardBackground",
                    style: { boxShadow: "none" },
                    children: [
                      (0, r.jsx)(eZ, {
                        orderBookStyle: t,
                        orders: e.bid,
                        currentOrderType: m.ZO.bid,
                        orderLength:
                          e.ask.length > e.bid.length
                            ? e.ask.length
                            : e.bid.length,
                      }),
                      (0, r.jsx)(eZ, {
                        orderBookStyle: t,
                        orders: e.ask,
                        currentOrderType: m.ZO.ask,
                        orderLength:
                          e.ask.length > e.bid.length
                            ? e.ask.length
                            : e.bid.length,
                      }),
                    ],
                  }),
              (0, r.jsx)(n.ZP, {
                anchor: "bottom",
                open: o,
                onClose: () => c(!1),
                PaperProps: {
                  elevation: 0,
                  style: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
                  square: !1,
                },
                children:
                  t === m.Qb.stacked
                    ? (0, r.jsx)(eS, { setIsOpen: c })
                    : (0, r.jsxs)(N.Z, {
                        component: _.Z,
                        className:
                          "h-full grow flex overflow-y-scroll px-4 mb-4 max-h-48 md:max-h-[477px] gap-[2px] min-h-44 dark:bg-darkCardBackground",
                        style: { boxShadow: "none" },
                        children: [
                          (0, r.jsx)(eZ, {
                            orderBookStyle: t,
                            orders: e.bid,
                            currentOrderType: m.ZO.bid,
                            orderLength:
                              e.ask.length > e.bid.length
                                ? e.ask.length
                                : e.bid.length,
                          }),
                          (0, r.jsx)(eZ, {
                            orderBookStyle: t,
                            orders: e.ask,
                            currentOrderType: m.ZO.ask,
                            orderLength:
                              e.ask.length > e.bid.length
                                ? e.ask.length
                                : e.bid.length,
                          }),
                        ],
                      }),
              }),
            ],
          });
        },
        eP = () => {
          let {
              darkMode: e,
              tradeData: { tradeHistory: t },
            } = (0, u.useGlobalContext)(),
            a = (t, a, l, s) =>
              (0, r.jsx)(w.Z, {
                align: "left" === a ? "left" : "right",
                sx: {
                  paddingTop: l,
                  paddingBottom: s,
                  border: "none",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  backgroundColor: e ? "#242931" : "",
                },
                children: t,
              });
          return (0, r.jsx)(N.Z, {
            component: _.Z,
            className:
              "mb-4 lg:mb-0 xl:mb-4 max-h-[304px] md:max-h-[510px] lg:max-h-[526px] xl:max-h-[510px]",
            style: { boxShadow: "none", backgroundColor: e ? "#242931" : "" },
            children: (0, r.jsxs)(G.Z, {
              stickyHeader: !0,
              "aria-label": "simple table",
              sx: { ".MuiTableCell-head": { lineHeight: "12px" } },
              children: [
                (0, r.jsx)(B.Z, {
                  children: (0, r.jsxs)(F.Z, {
                    children: [
                      a(
                        (0, r.jsx)("p", {
                          className:
                            "text-xs font-normal text-textGray dark:text-darkTextGray",
                          children: "Price (USDT)",
                        }),
                        "left",
                        "16px",
                        "9px"
                      ),
                      a(
                        (0, r.jsx)("p", {
                          className:
                            "text-xs font-normal text-textGray dark:text-darkTextGray",
                          children: "Amount (ETH)",
                        }),
                        "left",
                        "16px",
                        "9px"
                      ),
                      a(
                        (0, r.jsx)("p", {
                          className:
                            "text-xs font-normal text-textGray dark:text-darkTextGray",
                          children: "Time",
                        }),
                        "right",
                        "16px",
                        "9px"
                      ),
                    ],
                  }),
                }),
                (0, r.jsx)(S.Z, {
                  children:
                    null == t
                      ? void 0
                      : t.map((e, t) =>
                          (0, r.jsxs)(
                            F.Z,
                            {
                              sx: { border: 0 },
                              children: [
                                a(
                                  (0, r.jsx)("p", {
                                    className: "text-xs text-text".concat(
                                      e.isBuy ? "Green" : "Red"
                                    ),
                                    children: Number(e.price).toLocaleString(
                                      "en-US"
                                    ),
                                  }),
                                  "left",
                                  "4px",
                                  "4px"
                                ),
                                a(
                                  (0, r.jsx)("p", {
                                    className:
                                      "text-xs text-textBlack dark:text-white",
                                    children: Number(e.amount).toLocaleString(
                                      "en-US"
                                    ),
                                  }),
                                  "left",
                                  "6px",
                                  "6px"
                                ),
                                a(
                                  (0, r.jsx)("p", {
                                    className:
                                      "text-xs text-textBlack dark:text-white",
                                    children: (0, h.p6)(
                                      Number(e.timestamp)
                                    ).split(" ")[1],
                                  }),
                                  "right",
                                  "4px",
                                  "4px"
                                ),
                              ],
                            },
                            ""
                              .concat(e.order_id, "-")
                              .concat(e.timestamp, "-")
                              .concat(t)
                          )
                        ),
                }),
              ],
            }),
          });
        },
        eR = a(78024),
        eI = a(92277),
        eA = a(1297),
        eq = {
          src: "/_next/static/media/galxeLogo.61d95698.svg",
          height: 16,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        eH = a(27760),
        eW = a(92173),
        eU = a(12367);
      a(58328);
      var ez = a(9091),
        eV = a(88059),
        eJ = {
          src: "/_next/static/media/graphImage.e015ed37.svg",
          height: 204,
          width: 358,
          blurWidth: 0,
          blurHeight: 0,
        };
      let eQ = "https://api.multipool.finance";
      var e$ = (e) => {
        let { order: t, setIsOpen: a } = e,
          { darkMode: s } = (0, u.useGlobalContext)(),
          { address: d } = (0, A.m)(),
          [n, o] = (0, l.useState)(),
          [c, p] = (0, l.useState)(0),
          g = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            (async () => {
              try {
                var e;
                let t = await eW.Z.get(
                  "".concat(eQ, "/get-top-leaderboard?userAddress=").concat(d)
                );
                o(
                  null === (e = t.data[0].pnl) || void 0 === e
                    ? void 0
                    : e.toString()
                );
              } catch (e) {
                console.log("Error fetching user's pnl: ", e);
              }
            })();
          }, [d]),
          (0, l.useEffect)(() => {
            let e = async () => {
              try {
                let e = await eW.Z.get(
                  ""
                    .concat(eQ, "/get-order-fills?orderId=")
                    .concat(null == t ? void 0 : t.order_id)
                );
                p(e.data.length);
              } catch (e) {
                e instanceof Error && console.log("Error: ", e.message);
              }
            };
            t && e();
          }, [t]),
          (0, r.jsx)("div", {
            className:
              "w-full overflow-hidden rounded-t-2xl md:rounded-2xl bg-white  dark:bg-darkCardBackground",
            ref: g,
            id: "share-modal",
            children: (0, r.jsxs)("div", {
              className:
                "w-full md:min-w-[780px] flex flex-col justify-center items-center",
              children: [
                (0, r.jsxs)("div", {
                  className: "w-full flex justify-between items-center p-4",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "font-medium text-base text-textBlack dark:text-white",
                      children: "Share Trade, Get Rewards",
                    }),
                    (0, r.jsx)(x(), {
                      className: "cursor-pointer",
                      src: s ? P.Z : M.Z,
                      alt: "Cross",
                      onClick: () => a(!1),
                    }),
                  ],
                }),
                (0, r.jsx)(i.Z, {
                  className: "w-full bg-drawer dark:bg-darkDrawer",
                }),
                n || c
                  ? (0, r.jsxs)("div", {
                      className: "w-full flex flex-col items-center p-4 pt-6",
                      children: [
                        (0, r.jsx)("h1", {
                          className:
                            "font-medium text-4xl text-textBlack dark:text-white mb-4",
                          children: "I Got Filled! \uD83C\uDF89",
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "w-full flex justify-center items-center my-4 gap-4",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "w-1/2 flex flex-col gap-3",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "w-full flex justify-between items-center px-4 py-3 rounded-[12px] bg-backgroundGray dark:bg-darkBackgroundGray",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex flex-col items-start gap-2",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className:
                                            "font-normal text-xs leading-[100%] text-textBlack dark:text-white",
                                          children: "Pair",
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "font-medium text-base leading-[100%] text-textBlack dark:text-white",
                                          children:
                                            null == t
                                              ? void 0
                                              : t.token_pair_name,
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex flex-col items-start gap-2",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className:
                                            "font-normal text-xs leading-[100%] text-textBlack dark:text-white",
                                          children: "Type",
                                        }),
                                        (0, r.jsxs)("p", {
                                          className:
                                            "font-medium text-base leading-[100%] text-textBlack dark:text-white",
                                          children: [
                                            null == t ? void 0 : t.order_type,
                                            " ",
                                            (null == t ? void 0 : t.is_buy)
                                              ? "Buy"
                                              : "Sell",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex flex-col items-start gap-2",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className:
                                            "font-normal text-xs leading-[100%] text-textBlack dark:text-white",
                                          children: "Price",
                                        }),
                                        (0, r.jsxs)("p", {
                                          className:
                                            "font-medium text-base leading-[100%] text-textBlack dark:text-white",
                                          children: [
                                            "$",
                                            (0, h.uf)(
                                              Number(
                                                null == t ? void 0 : t.price
                                              )
                                            ),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "w-full flex justify-between items-center px-4 pt-3 pb-[11px] rounded-[12px] bg-backgroundGray dark:bg-darkBackgroundGray",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex flex-col items-start gap-2",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className:
                                            "font-normal text-xs leading-[100%] text-textBlack dark:text-white",
                                          children: "Amount",
                                        }),
                                        (0, r.jsxs)("p", {
                                          className:
                                            "font-medium text-base leading-[100%] text-textBlack dark:text-white",
                                          children: [
                                            (null == t ? void 0 : t.is_buy)
                                              ? (0, h.uf)(
                                                  Number(
                                                    null == t
                                                      ? void 0
                                                      : t.amount_eth
                                                  ),
                                                  2
                                                )
                                              : (0, h.uf)(
                                                  Number(
                                                    null == t
                                                      ? void 0
                                                      : t.amount
                                                  ),
                                                  2
                                                ),
                                            " ",
                                            null == t
                                              ? void 0
                                              : t.token_pair_name.split("/")[
                                                  (
                                                    null == t
                                                      ? void 0
                                                      : t.is_buy
                                                  )
                                                    ? 0
                                                    : 1
                                                ],
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex flex-col items-start gap-2",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className:
                                            "font-normal text-xs leading-[100%] text-textBlack dark:text-white",
                                          children: "Fills",
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "font-medium text-base leading-[100%] text-textBlack dark:text-white",
                                          children: c,
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex flex-col items-start gap-[7px]",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className:
                                            "font-normal text-xs leading-[100%] text-textBlack dark:text-white",
                                          children: "Status",
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "w-fit text-[10px] leading-[100%] font-medium uppercase rounded py-1 px-1.5 bg-opacity-20 ".concat(
                                              (((null == t
                                                ? void 0
                                                : t.order_status) ===
                                                m.iM.claimed ||
                                                (null == t
                                                  ? void 0
                                                  : t.order_status) ===
                                                  m.iM.pending) &&
                                                "text-textBlue bg-textBlue") ||
                                                (((null == t
                                                  ? void 0
                                                  : t.order_status) ===
                                                  m.iM.open ||
                                                  (null == t
                                                    ? void 0
                                                    : t.order_status) ===
                                                    m.iM.filled) &&
                                                  "text-textGreen bg-textGreen") ||
                                                (((null == t
                                                  ? void 0
                                                  : t.order_status) ===
                                                  m.iM.partiallyFilled ||
                                                  (null == t
                                                    ? void 0
                                                    : t.order_status) ===
                                                    m.iM.partiallyClaimed) &&
                                                  "text-textOrange bg-textOrange") ||
                                                ((null == t
                                                  ? void 0
                                                  : t.order_status) ===
                                                  m.iM.cancelled &&
                                                  "text-textRed bg-textRed")
                                            ),
                                          children:
                                            null == t ? void 0 : t.order_status,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "w-full flex justify-between items-center rounded-[12px] pl-4 pr-2 py-2 bg-backgroundGray dark:bg-darkBackgroundGray",
                                  children: [
                                    (0, r.jsx)("p", {
                                      className:
                                        "font-medium text-base leading-[100%] text-textBlack dark:text-white",
                                      children: "Wallet PnL",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex gap-1 justify-center items-center py-[14px] px-4 rounded-[4px] ".concat(
                                          (null == n
                                            ? void 0
                                            : n.slice(0, 1)) === "-"
                                            ? "bg-textRed/20"
                                            : "bg-textGreen/20"
                                        ),
                                      children: [
                                        (0, r.jsx)(x(), {
                                          src:
                                            (null == n
                                              ? void 0
                                              : n.slice(0, 1)) === "-"
                                              ? eT
                                              : eC,
                                          alt: "Arrow",
                                        }),
                                        (0, r.jsxs)("p", {
                                          className:
                                            "font-medium text-base leading-[100%] ".concat(
                                              (null == n
                                                ? void 0
                                                : n.slice(0, 1)) === "-"
                                                ? "text-textRed"
                                                : "text-textGreen"
                                            ),
                                          children: [
                                            (null == n
                                              ? void 0
                                              : n.slice(0, 1)) === "-"
                                              ? n
                                              : "+".concat(n),
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)(i.Z, {
                              className:
                                "w-[1px] h-[203px] bg-drawer dark:bg-darkDrawer",
                            }),
                            (0, r.jsx)(x(), {
                              src: eJ,
                              alt: "Graph",
                              className: "w-1/2",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "w-full rounded-[12px] p-2 flex gap-8 justify-center items-center bg-white dark:bg-textBlack",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "w-1/2 flex flex-col items-center justify-center gap-3 py-8 rounded-[4px] bg-cardBackground dark:bg-darkCardBackground",
                              children: [
                                (0, r.jsx)(x(), {
                                  priority: !0,
                                  src: s ? ez.Z : eV.Z,
                                  alt: "Logo",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "font-normal text-xs text-textBlack dark:text-white",
                                  children: "the DEX with CEX appeal",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "w-1/2 flex gap-4 justify-start items-center",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "w-[72px] h-[72px] rounded-[12px] bg-cardBackground dark:bg-darkCardBackground",
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "max-w-[250px] flex flex-col gap-2 justify-center items-start",
                                  children: [
                                    (0, r.jsx)("p", {
                                      className:
                                        "text-base leading-[100%] font-medium text-textBlack dark:text-white",
                                      children: "Referral Code: 1ceFF",
                                    }),
                                    (0, r.jsxs)("p", {
                                      className:
                                        "text-xs leading-[150%] font-normal text-textBlack dark:text-white",
                                      children: [
                                        "Start Trading on Ethereum & Earn $FlowAI Rewards Today.",
                                        " ",
                                        (0, r.jsx)("span", {
                                          className: "text-buttonBackground",
                                          children: "Sign up Today!",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, r.jsx)("div", {
                      className: "h-[492px] flex justify-center items-center",
                      children: (0, r.jsx)(x(), {
                        src: v.Z,
                        alt: "loader",
                        className: "w-8 h-8 animate-spin",
                      }),
                    }),
              ],
            }),
          })
        );
      };
      let eX = (e) => {
          let { fill: t } = e;
          return (0, r.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("rect", {
              width: "16",
              height: "16",
              rx: "4",
              fill: t,
            }),
          });
        },
        eY = () =>
          (0, r.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("rect", {
                width: "16",
                height: "16",
                rx: "4",
                fill: "#4FDFFF",
              }),
              (0, r.jsx)("g", {
                "clip-path": "url(#clip0_2002_16448)",
                children: (0, r.jsx)("path", {
                  d: "M11.3337 5.70825L6.75033 10.2916L4.66699 8.20825",
                  stroke: "#1F242C",
                  "stroke-width": "1.1",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
              }),
              (0, r.jsx)("defs", {
                children: (0, r.jsx)("clipPath", {
                  id: "clip0_2002_16448",
                  children: (0, r.jsx)("rect", {
                    width: "10",
                    height: "10",
                    fill: "white",
                    transform: "translate(3 3)",
                  }),
                }),
              }),
            ],
          }),
        eK = () =>
          (0, r.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("rect", {
                width: "16",
                height: "16",
                rx: "4",
                fill: "#4FDFFF",
              }),
              (0, r.jsx)("path", {
                d: "M4 8.5C4 8.22386 4.22386 8 4.5 8H11.5C11.7761 8 12 8.22386 12 8.5V8.5C12 8.77614 11.7761 9 11.5 9H8H4.5C4.22386 9 4 8.77614 4 8.5V8.5Z",
                fill: "#1F242C",
              }),
            ],
          }),
        e0 = {
          "&.MuiCheckbox-root:hover": { background: "transparent" },
          "&.Mui-checked": { color: "#4FDFFF" },
          "&.MuiCheckbox-indeterminate": { color: "#4FDFFF" },
          "&:not($checked) .MuiIconButton-label:after": {
            backgroundColor: "white",
          },
        };
      var e1 = (e) => {
          let { orderHistory: t } = e,
            { darkMode: a, tradeData: s } = (0, u.useGlobalContext)(),
            [i, n] = (0, l.useState)(!1),
            [o, c] = (0, l.useState)(),
            [g, b] = (0, l.useState)([]),
            [f, y] = (0, l.useState)([]),
            C = (0, l.useRef)([]),
            [T, Z] = (0, l.useState)({}),
            { windowWidth: D } = (0, I.Z)(),
            [O, L] = (0, l.useState)({}),
            { processingOrders: E } = (0, eU.Z)(t),
            [M, P] = (0, l.useState)(
              a ? "1px solid rgb(50, 59, 72)" : "1px solid rgb(232, 235, 245)"
            ),
            R = { paddingLeft: "0px", paddingTop: "9px", paddingBottom: "9px" },
            A = { ...R, color: a ? "#FFFFFF" : "#000000", borderBottom: 0 },
            q = (e, t) => ({
              ...R,
              color: a ? "#FFFFFF" : "#000000",
              borderBottom: J(e, t) ? M : 0,
              borderTop: M,
            });
          (0, l.useEffect)(() => {
            let e = async (e) => {
                L((t) => ({ ...t, [e]: !0 }));
                try {
                  let t = await eW.Z.get(
                    ""
                      .concat(
                        "https://api.multipool.finance",
                        "/get-order-fills?orderId="
                      )
                      .concat(e)
                  );
                  Z((a) => ({ ...a, [e]: t.data }));
                } catch (e) {
                  e instanceof Error && console.log("Error: ", e.message);
                } finally {
                  L((t) => ({ ...t, [e]: !1 }));
                }
              },
              t = f.find((e) => !C.current.includes(e)),
              a = C.current.find((e) => !f.includes(e));
            t && e(t),
              a &&
                Z((e) => {
                  let t = { ...e };
                  return delete t[a], t;
                }),
              (C.current = f);
          }, [f]),
            (0, l.useEffect)(() => {
              P(
                a ? "1px solid rgb(50, 59, 72)" : "1px solid rgb(232, 235, 245)"
              );
            }, [a]);
          let H = (e, t) => {
              document.dispatchEvent(
                new CustomEvent("toggleDrawer", {
                  detail: {
                    openDrawer: !0,
                    isOrderNew: !1,
                    isCancel: t || "Cancel" === e.buttonLabel,
                    order: e,
                  },
                })
              );
            },
            W = (e, t, l) =>
              (0, r.jsx)(w.Z, {
                align: "left" === t ? "left" : "right",
                sx: {
                  color: a ? "#768398" : "#AAB9D0",
                  fontSize: "14px",
                  paddingLeft: l || "4px",
                  paddingRight: "4px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  backgroundColor: a ? "#242931" : "#FFFFFF",
                  borderBottom: 0,
                },
                children: e,
              }),
            U = (e) => -1 !== g.indexOf(e),
            z = (e, t) => {
              let a = g.indexOf(t),
                r = [];
              -1 === a
                ? (r = r.concat(g, t))
                : 0 === a
                ? (r = r.concat(g.slice(1)))
                : a === g.length - 1
                ? (r = r.concat(g.slice(0, -1)))
                : a > 0 && (r = r.concat(g.slice(0, a), g.slice(a + 1))),
                b(r);
            },
            V = (e) =>
              e.order_status !== m.iM.open && e.order_status !== m.iM.pending,
            J = (e, a) => e === t.length - 1 && !f.includes(Number(a.order_id));
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(N.Z, {
                className: "h-full",
                component: _.Z,
                style: {
                  boxShadow: "none",
                  background: "transparent",
                  overflowX: "auto",
                },
                children: (0, r.jsxs)(G.Z, {
                  stickyHeader: !0,
                  className: "overflow-x-scroll",
                  children: [
                    (0, r.jsx)(B.Z, {
                      className: "overflow-x-scroll",
                      children: (0, r.jsxs)(F.Z, {
                        children: [
                          (0, r.jsx)(w.Z, {
                            padding: "checkbox",
                            style: {
                              backgroundColor: a ? "#242931" : "#FFFFFF",
                              borderBottom: 0,
                              borderTop: "",
                            },
                            children: (0, r.jsx)(eH.Z, {
                              disableRipple: !0,
                              indeterminate:
                                g.length > 0 && g.length < t.length,
                              checked: t.length > 0 && g.length === t.length,
                              onChange: (e) => {
                                if (e.target.checked) {
                                  b(
                                    t.map((e) =>
                                      null == e ? void 0 : e.order_id
                                    )
                                  );
                                  return;
                                }
                                b([]);
                              },
                              inputProps: {
                                "aria-label": "select all desserts",
                              },
                              sx: e0,
                              icon: (0, r.jsx)(eX, {
                                fill: a ? "#2C323B" : "#F2F5F8",
                              }),
                              checkedIcon: (0, r.jsx)(eY, {}),
                              indeterminateIcon: (0, r.jsx)(eK, {}),
                            }),
                          }),
                          (0, r.jsx)(w.Z, {
                            style: {
                              backgroundColor: a ? "#242931" : "#FFFFFF",
                              borderBottom: 0,
                              borderTop: "",
                              borderLeft: M,
                            },
                          }),
                          W("ID", "left"),
                          W("Time", "left"),
                          W("Pair", "left"),
                          D && D < 1576
                            ? W("Type/Side", "left")
                            : W("Type", "left"),
                          D && D > 1576 && W("Side", "left"),
                          W("Price", "left"),
                          D && D < 1576
                            ? W("Filled/Amount", "left")
                            : W("Filled", "left"),
                          D && D > 1576 && W("Amount", "left"),
                          D && D < 1576
                            ? W("Claimed/Claimable", "left")
                            : W("Claimed", "left"),
                          D && D > 1576 && W("Claimable", "left"),
                          W("Status", "left"),
                          W("", "right"),
                        ],
                      }),
                    }),
                    (0, r.jsx)(S.Z, {
                      className: "overflow-x-scroll",
                      children: t.map((e, i) => {
                        var d, n, o, c, u, g, b, N, _;
                        let C = U(null == e ? void 0 : e.order_id),
                          Z = "enhanced-table-checkbox-".concat(i);
                        return (0, r.jsxs)(
                          l.Fragment,
                          {
                            children: [
                              (0, r.jsxs)(F.Z, {
                                hover: !0,
                                onClick: (t) =>
                                  z(t, null == e ? void 0 : e.order_id),
                                role: "checkbox",
                                "aria-checked": C,
                                tabIndex: -1,
                                selected: C,
                                className: "cursor-pointer ".concat(
                                  a ? "bg-darkCardBackground" : "bg-white",
                                  " hover:bg-backgroundGray dark:hover:bg-darkBackgroundGray"
                                ),
                                children: [
                                  (0, r.jsx)(w.Z, {
                                    padding: "checkbox",
                                    sx: {
                                      color: a ? "#FFFFFF" : "#000000",
                                      borderBottom: J(i, e) ? M : 0,
                                      borderTop: M,
                                    },
                                    children: (0, r.jsx)(eH.Z, {
                                      disableRipple: !0,
                                      checked: C,
                                      inputProps: { "aria-labelledby": Z },
                                      icon: (0, r.jsx)(eX, {
                                        fill: a ? "#2C323B" : "#F2F5F8",
                                      }),
                                      checkedIcon: (0, r.jsx)(eY, {}),
                                      sx: e0,
                                    }),
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    sx: {
                                      color: a ? "#FFFFFF" : "#000000",
                                      borderBottom: J(i, e) ? M : 0,
                                      borderTop: M,
                                      borderLeft: M,
                                    },
                                    children: (0, r.jsx)("div", {
                                      className:
                                        "w-5 h-5 flex items-center justify-center rounded-full",
                                      onClick: (t) => {
                                        if (V(e)) {
                                          t.stopPropagation();
                                          let a = [...f],
                                            r = a.indexOf(Number(e.order_id));
                                          -1 !== r
                                            ? a.splice(r, 1)
                                            : a.push(Number(e.order_id)),
                                            y(a);
                                        }
                                      },
                                      children: (0, r.jsx)(x(), {
                                        className: ""
                                          .concat(
                                            (
                                              null == f
                                                ? void 0
                                                : f.includes(Number(e.order_id))
                                            )
                                              ? "rotate-180"
                                              : "",
                                            " "
                                          )
                                          .concat(V(e) ? "flex" : "hidden", " ")
                                          .concat(
                                            void 0 !== O[e.order_id] &&
                                              O[e.order_id]
                                              ? "animate-spin w-3.5 h-3.5"
                                              : ""
                                          ),
                                        src:
                                          void 0 !== O[e.order_id] &&
                                          O[e.order_id]
                                            ? v.Z
                                            : a
                                            ? j
                                            : k,
                                        alt: "Arrow Up",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    sx: q(i, e),
                                    children:
                                      e.order_status === m.iM.pending ||
                                      E.includes(
                                        null == e
                                          ? void 0
                                          : null === (d = e.tx_hashes) ||
                                            void 0 === d
                                          ? void 0
                                          : d[0]
                                      )
                                        ? (0, r.jsx)(x(), {
                                            src: v.Z,
                                            alt: "Loader",
                                            className:
                                              "animate-spin w-3.5 h-3.5",
                                          })
                                        : (0, r.jsx)("p", {
                                            className:
                                              "text-xs hover:underline",
                                            onClick: (t) => {
                                              t.stopPropagation(),
                                                window.open(
                                                  ""
                                                    .concat(m.ZM, "/tx/")
                                                    .concat(e.tx_hashes[0]),
                                                  "_blank"
                                                );
                                            },
                                            children:
                                              null == e ? void 0 : e.order_id,
                                          }),
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    sx: q(i, e),
                                    children:
                                      D && D > 1576
                                        ? (0, r.jsx)("p", {
                                            className: "text-xs",
                                            children: e.time_stamp,
                                          })
                                        : (0, r.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                              (0, r.jsx)("p", {
                                                className: "text-xs",
                                                children:
                                                  e.time_stamp.split(" ")[0],
                                              }),
                                              (0, r.jsx)("p", {
                                                className: "text-xs",
                                                children:
                                                  e.time_stamp.split(" ")[1],
                                              }),
                                            ],
                                          }),
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    sx: q(i, e),
                                    children:
                                      D && D > 1576
                                        ? (0, r.jsx)("p", {
                                            className: "text-xs",
                                            children: e.token_pair_name,
                                          })
                                        : (0, r.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                              (0, r.jsxs)("p", {
                                                className: "text-xs",
                                                children: [
                                                  e.token_pair_name.split(
                                                    "/"
                                                  )[0],
                                                  "/",
                                                ],
                                              }),
                                              (0, r.jsx)("p", {
                                                className: "text-xs",
                                                children:
                                                  e.token_pair_name.split(
                                                    "/"
                                                  )[1],
                                              }),
                                            ],
                                          }),
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    sx: q(i, e),
                                    children:
                                      D && D > 1576
                                        ? (0, r.jsx)("p", {
                                            className: "text-xs",
                                            children: e.order_type,
                                          })
                                        : (0, r.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                              (0, r.jsxs)("p", {
                                                className: "text-xs",
                                                children: [e.order_type, "/"],
                                              }),
                                              (0, r.jsx)("p", {
                                                className: "text-xs",
                                                children: e.is_buy
                                                  ? "Buy"
                                                  : "Sell",
                                              }),
                                            ],
                                          }),
                                  }),
                                  D &&
                                    D > 1576 &&
                                    (0, r.jsx)(w.Z, {
                                      sx: q(i, e),
                                      children: (0, r.jsx)("p", {
                                        className: "text-xs",
                                        children: e.is_buy ? "Buy" : "Sell",
                                      }),
                                    }),
                                  (0, r.jsx)(w.Z, {
                                    sx: q(i, e),
                                    children: (0, r.jsx)("p", {
                                      className: "text-xs",
                                      children:
                                        e.order_type === m.i8.limit
                                          ? Number(
                                              (0, h.uf)(Number(e.price))
                                            ).toLocaleString("en-US")
                                          : m.i8.market,
                                    }),
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    sx: q(i, e),
                                    children:
                                      D && D < 1576
                                        ? (0, r.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                  (0, r.jsxs)("p", {
                                                    className: "text-xs",
                                                    children: [
                                                      (
                                                        null == e
                                                          ? void 0
                                                          : e.is_buy
                                                      )
                                                        ? Number(
                                                            (0, h.uf)(
                                                              null == e
                                                                ? void 0
                                                                : e.filled_amount
                                                            )
                                                          ).toLocaleString(
                                                            "en-US"
                                                          )
                                                        : Number(
                                                            (0, h.uf)(
                                                              (null == e
                                                                ? void 0
                                                                : e.filled_amount_eth) ||
                                                                0
                                                            )
                                                          ).toLocaleString(
                                                            "en-US"
                                                          ),
                                                      "/",
                                                    ],
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    className: "text-xs",
                                                    children: Number(
                                                      (0, h.uf)(
                                                        Number(
                                                          e.is_buy
                                                            ? e.amount
                                                            : e.amount_eth
                                                        )
                                                      )
                                                    ).toLocaleString("en-US"),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("p", {
                                                className:
                                                  "text-[10px] font-normal text-textGray dark:text-darkTextGray",
                                                children: e.is_buy
                                                  ? s.quote_token.symbol
                                                  : s.base_token.symbol,
                                              }),
                                            ],
                                          })
                                        : (0, r.jsxs)("p", {
                                            className: "text-xs",
                                            children: [
                                              (null == e ? void 0 : e.is_buy)
                                                ? Number(
                                                    (0, h.uf)(
                                                      null == e
                                                        ? void 0
                                                        : e.filled_amount
                                                    )
                                                  ).toLocaleString("en-US")
                                                : Number(
                                                    (0, h.uf)(
                                                      (null == e
                                                        ? void 0
                                                        : e.filled_amount_eth) ||
                                                        0
                                                    )
                                                  ).toLocaleString("en-US"),
                                              " ",
                                              (0, r.jsx)("span", {
                                                className:
                                                  "text-[10px] font-normal text-textGray dark:text-darkTextGray",
                                                children: e.is_buy
                                                  ? s.quote_token.symbol
                                                  : s.base_token.symbol,
                                              }),
                                            ],
                                          }),
                                  }),
                                  D &&
                                    D > 1576 &&
                                    (0, r.jsx)(w.Z, {
                                      sx: q(i, e),
                                      children: (0, r.jsxs)("p", {
                                        className: "text-xs",
                                        children: [
                                          Number(
                                            (0, h.uf)(
                                              Number(
                                                e.is_buy
                                                  ? e.amount
                                                  : e.amount_eth
                                              )
                                            )
                                          ).toLocaleString("en-US"),
                                          " ",
                                          (0, r.jsx)("span", {
                                            className:
                                              "text-[10px] font-normal text-textGray dark:text-darkTextGray",
                                            children: e.is_buy
                                              ? s.quote_token.symbol
                                              : s.base_token.symbol,
                                          }),
                                        ],
                                      }),
                                    }),
                                  (0, r.jsx)(w.Z, {
                                    sx: q(i, e),
                                    children:
                                      D && D < 1576
                                        ? (0, r.jsxs)("div", {
                                            className:
                                              "flex gap-1 items-center",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                  (0, r.jsxs)("p", {
                                                    className: "text-xs",
                                                    children: [
                                                      (
                                                        null == e
                                                          ? void 0
                                                          : e.is_buy
                                                      )
                                                        ? Number(
                                                            (0, h.uf)(
                                                              (null == e
                                                                ? void 0
                                                                : e.claimed_amount_eth) ||
                                                                0
                                                            )
                                                          ).toFixed(6)
                                                        : Number(
                                                            (0, h.uf)(
                                                              (null == e
                                                                ? void 0
                                                                : e.claimed_amount) ||
                                                                0
                                                            )
                                                          ).toFixed(6),
                                                      "/",
                                                    ],
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    className: "text-xs",
                                                    children: (
                                                      null == e
                                                        ? void 0
                                                        : e.is_buy
                                                    )
                                                      ? (0, h.uf)(
                                                          (null == e
                                                            ? void 0
                                                            : e.claimable_amount_eth) ||
                                                            0
                                                        )
                                                      : (0, h.uf)(
                                                          (null == e
                                                            ? void 0
                                                            : e.claimable_amount) ||
                                                            0
                                                        ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("p", {
                                                className:
                                                  "text-[10px] font-normal text-textGray dark:text-darkTextGray",
                                                children: e.is_buy
                                                  ? s.base_token.symbol
                                                  : s.quote_token.symbol,
                                              }),
                                            ],
                                          })
                                        : (0, r.jsxs)("p", {
                                            className: "text-xs",
                                            children: [
                                              (null == e ? void 0 : e.is_buy)
                                                ? (0, h.uf)(
                                                    (null == e
                                                      ? void 0
                                                      : e.claimed_amount_eth) ||
                                                      0
                                                  )
                                                : (0, h.uf)(
                                                    (null == e
                                                      ? void 0
                                                      : e.claimed_amount) || 0
                                                  ),
                                              " ",
                                              (0, r.jsx)("span", {
                                                className:
                                                  "text-[10px] font-normal text-textGray dark:text-darkTextGray",
                                                children: e.is_buy
                                                  ? s.base_token.symbol
                                                  : s.quote_token.symbol,
                                              }),
                                            ],
                                          }),
                                  }),
                                  D &&
                                    D > 1576 &&
                                    (0, r.jsx)(w.Z, {
                                      sx: q(i, e),
                                      children: (0, r.jsxs)("p", {
                                        className: "text-xs",
                                        children: [
                                          (null == e ? void 0 : e.is_buy)
                                            ? (0, h.uf)(
                                                (null == e
                                                  ? void 0
                                                  : e.claimable_amount_eth) || 0
                                              )
                                            : (0, h.uf)(
                                                (null == e
                                                  ? void 0
                                                  : e.claimable_amount) || 0
                                              ),
                                          " ",
                                          (0, r.jsx)("span", {
                                            className:
                                              "text-[10px] font-normal text-textGray dark:text-darkTextGray",
                                            children: e.is_buy
                                              ? s.base_token.symbol
                                              : s.quote_token.symbol,
                                          }),
                                        ],
                                      }),
                                    }),
                                  (0, r.jsx)(w.Z, {
                                    sx: q(i, e),
                                    children: (0, r.jsx)("p", {
                                      className:
                                        "w-fit text-[10px] font-medium rounded py-1 px-1.5 bg-opacity-20 ".concat(
                                          ((e.order_status === m.iM.claimed ||
                                            e.order_status === m.iM.pending ||
                                            E.includes(
                                              null == e
                                                ? void 0
                                                : null === (n = e.tx_hashes) ||
                                                  void 0 === n
                                                ? void 0
                                                : n[0]
                                            )) &&
                                            "text-textBlue bg-textBlue") ||
                                            ((e.order_status === m.iM.open ||
                                              e.order_status === m.iM.filled) &&
                                              "text-textGreen bg-textGreen") ||
                                            ((e.order_status ===
                                              m.iM.partiallyFilled ||
                                              e.order_status ===
                                                m.iM.partiallyClaimed) &&
                                              "text-textOrange bg-textOrange") ||
                                            (e.order_status ===
                                              m.iM.cancelled &&
                                              "text-textRed bg-textRed")
                                        ),
                                      children: E.includes(
                                        null == e
                                          ? void 0
                                          : null === (o = e.tx_hashes) ||
                                            void 0 === o
                                          ? void 0
                                          : o[0]
                                      )
                                        ? "Processing"
                                        : e.order_status,
                                    }),
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    align: "right",
                                    sx: q(i, e),
                                    children: (0, r.jsxs)("div", {
                                      className:
                                        "w-full flex justify-between items-center gap-1.5",
                                      children: [
                                        (0, r.jsx)("button", {
                                          className:
                                            "w-fit items-center py-2 px-2 rounded-lg text-xs font-medium text-nowrap bg-textBlack border border-transparent hover:border-textBlack hover:bg-white dark:bg-buttonBackground dark:bg-opacity-30 dark:hover:bg-buttonBackground dark:hover:text-textBlack dark:hover:bg-opacity-100 text-white hover:text-textBlack dark:text-buttonBackground transition-all duration-300",
                                          onClick: (t) => {
                                            t.stopPropagation(),
                                              e.order_status ===
                                                m.iM.cancelled ||
                                              e.order_status === m.iM.claimed ||
                                              e.order_status === m.iM.pending ||
                                              E.includes(e.order_id)
                                                ? window.open(
                                                    ""
                                                      .concat(m.ZM, "/tx/")
                                                      .concat(e.tx_hashes[0]),
                                                    "_blank"
                                                  )
                                                : H(e, !1);
                                          },
                                          children: E.includes(e.order_id)
                                            ? "View Transaction"
                                            : e.buttonLabel,
                                        }),
                                        e.order_status === m.iM.partiallyFilled
                                          ? (0, r.jsx)("button", {
                                              className:
                                                "w-fit items-center py-2 px-2 rounded-lg text-xs font-medium border hover:border-transparent text-textBlack hover:text-white dark:text-white dark:hover:text-buttonBackground border-black hover:border-opacity-50 dark:border-buttonBackground hover:dark:border-transparent bg-white hover:bg-textBlack dark:bg-darkCardBackground dark:hover:bg-buttonBackground dark:hover:bg-opacity-30 transition-all duration-300",
                                              onClick: (t) => {
                                                t.stopPropagation(), H(e, !0);
                                              },
                                              children: "Cancel",
                                            })
                                          : (0, r.jsx)(r.Fragment, {}),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)(F.Z, {
                                children: [
                                  (0, r.jsx)(w.Z, {
                                    style: {
                                      paddingBottom: 0,
                                      paddingTop: 0,
                                      borderBottom:
                                        i === t.length - 1 &&
                                        f.includes(Number(e.order_id))
                                          ? M
                                          : 0,
                                    },
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    style: {
                                      paddingBottom: 0,
                                      paddingTop: 0,
                                      borderBottom:
                                        i === t.length - 1 &&
                                        f.includes(Number(e.order_id))
                                          ? M
                                          : 0,
                                      borderLeft: M,
                                    },
                                  }),
                                  (0, r.jsx)(w.Z, {
                                    style: {
                                      padding: 0,
                                      borderBottom:
                                        i === t.length - 1 &&
                                        f.includes(Number(e.order_id))
                                          ? M
                                          : 0,
                                    },
                                    colSpan: 12,
                                    children: (0, r.jsx)(p.Z, {
                                      in:
                                        f.includes(Number(e.order_id)) &&
                                        !O[e.order_id],
                                      timeout: "auto",
                                      unmountOnExit: !0,
                                      children: (0, r.jsxs)("div", {
                                        children: [
                                          (0, r.jsxs)("div", {
                                            className: "flex mt-4 gap-6",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                  (0, r.jsx)("p", {
                                                    className:
                                                      "text-sm mr-1 text-textBlack dark:text-white",
                                                    children: "Fills:",
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    className:
                                                      "text-sm font-medium text-textBlack dark:text-white",
                                                    children:
                                                      null ===
                                                        (c = T[e.order_id]) ||
                                                      void 0 === c
                                                        ? void 0
                                                        : c.length,
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                  (0, r.jsx)("p", {
                                                    className:
                                                      "text-sm mr-1 text-textBlack dark:text-white",
                                                    children: "Order ID:",
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    className:
                                                      "text-sm font-medium text-textBlack dark:text-white",
                                                    children: e.order_id,
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                  (0, r.jsx)("p", {
                                                    className:
                                                      "text-sm mr-1 text-textBlack dark:text-white",
                                                    children: "Time Updated:",
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    className:
                                                      "text-sm font-medium text-textBlack dark:text-white",
                                                    children: (
                                                      null ===
                                                        (g = T[e.order_id]) ||
                                                      void 0 === g
                                                        ? void 0
                                                        : null === (u = g[0]) ||
                                                          void 0 === u
                                                        ? void 0
                                                        : u.time
                                                    )
                                                      ? (0, h.p6)(
                                                          Number(
                                                            null ===
                                                              (b =
                                                                T[
                                                                  e.order_id
                                                                ]) ||
                                                              void 0 === b
                                                              ? void 0
                                                              : b[0].time
                                                          )
                                                        )
                                                      : "-",
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)("div", {
                                                className: "flex hidden",
                                                children: [
                                                  (0, r.jsxs)("p", {
                                                    className:
                                                      "text-sm mr-1 text-textBlack dark:text-white",
                                                    children: [
                                                      "Total Transaction Fee:",
                                                      " ",
                                                    ],
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    className:
                                                      "text-sm font-medium text-textBlack dark:text-white",
                                                    children: "0.679 FTM",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)(G.Z, {
                                            className: "mb-[7px]",
                                            children: [
                                              (0, r.jsx)(B.Z, {
                                                children: (0, r.jsxs)(F.Z, {
                                                  children: [
                                                    W("Time", "left", "0px"),
                                                    W("Amount", "left"),
                                                    W("Price", "left"),
                                                    W("Role", "left"),
                                                  ],
                                                }),
                                              }),
                                              (null === (N = T[e.order_id]) ||
                                              void 0 === N
                                                ? void 0
                                                : N.length) > 0
                                                ? (0, r.jsx)(S.Z, {
                                                    children:
                                                      null ===
                                                        (_ = T[e.order_id]) ||
                                                      void 0 === _
                                                        ? void 0
                                                        : _.map((e, t) =>
                                                            (0, r.jsxs)(
                                                              F.Z,
                                                              {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    w.Z,
                                                                    {
                                                                      component:
                                                                        "th",
                                                                      scope:
                                                                        "row",
                                                                      sx: A,
                                                                      children:
                                                                        e.time
                                                                          ? (0,
                                                                            h.p6)(
                                                                              Number(
                                                                                e.time
                                                                              )
                                                                            )
                                                                          : "-",
                                                                    }
                                                                  ),
                                                                  (0, r.jsxs)(
                                                                    w.Z,
                                                                    {
                                                                      sx: A,
                                                                      children:
                                                                        [
                                                                          Number(
                                                                            (0,
                                                                            h.uf)(
                                                                              Number(
                                                                                e.amount
                                                                              )
                                                                            )
                                                                          ).toLocaleString(
                                                                            "en-US"
                                                                          ),
                                                                          " ",
                                                                          (0,
                                                                          r.jsx)(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "text-[10px] font-normal text-textGray dark:text-darkTextGray",
                                                                              children:
                                                                                "USDT",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                    w.Z,
                                                                    {
                                                                      sx: A,
                                                                      children:
                                                                        Number(
                                                                          (0,
                                                                          h.uf)(
                                                                            Number(
                                                                              e.price
                                                                            )
                                                                          )
                                                                        ).toLocaleString(
                                                                          "en-US"
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                    w.Z,
                                                                    {
                                                                      sx: A,
                                                                      children:
                                                                        e.role ||
                                                                        "Taker",
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              t
                                                            )
                                                          ),
                                                  })
                                                : (0, r.jsxs)("div", {
                                                    className:
                                                      "w-full h-full flex flex-col justify-center items-center",
                                                    children: [
                                                      (0, r.jsx)(x(), {
                                                        className:
                                                          "cursor-pointer",
                                                        src: eA.Z,
                                                        alt: "Open Box",
                                                      }),
                                                      (0, r.jsx)("p", {
                                                        className:
                                                          "text-sm text-textGray dark:text-darkTextGray mt-1",
                                                        children:
                                                          "No Records Found",
                                                      }),
                                                    ],
                                                  }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          null == e ? void 0 : e.order_id
                        );
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(d.Z, {
                open: !1,
                onClose: () => n(!1),
                children: (0, r.jsx)("div", {
                  className:
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit rounded-2xl bg-white  dark:bg-darkCardBackground focus:outline-none",
                  children: (0, r.jsx)(e$, { order: o, setIsOpen: n }),
                }),
              }),
            ],
          });
        },
        e2 = a(24033),
        e4 = (e) => {
          let { orderHistory: t } = e,
            { processingOrders: a } = (0, eU.Z)(t),
            l = (0, e2.useRouter)(),
            s = (e, t) => {
              document.dispatchEvent(
                new CustomEvent("toggleDrawer", {
                  detail: {
                    openDrawer: !0,
                    isOrderNew: !1,
                    isCancel: t || "Cancel" === e.buttonLabel,
                    order: e,
                  },
                })
              );
            };
          return (0, r.jsx)("div", {
            className: "flex flex-col gap-3 overflow-y-scroll rounded-lg",
            children: t.map((e) => {
              var t;
              return (0, r.jsxs)(
                "div",
                {
                  className:
                    "flex flex-col justify-center items-center p-3 rounded-lg border border-drawer dark:border-darkDrawer bg-white dark:bg-darkCardBackground",
                  onClick: () => {
                    l.push("order-details/".concat(e.order_id));
                  },
                  children: [
                    (0, r.jsxs)("div", {
                      className: "w-full flex justify-between items-center",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex gap-[6px]",
                          children: [
                            (0, r.jsx)("p", {
                              className:
                                "text-xs font-medium text-textBlack dark:text-white",
                              children: e.token_pair_name,
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-xs font-normal text-textGray dark:text-darkTextGray",
                              children: [
                                e.order_type,
                                " ",
                                "•",
                                " ",
                                e.is_buy ? "Buy" : "Sell",
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className:
                            "text-xs font-medium text-textBlack dark:text-white",
                          children: [
                            Number((0, h.uf)(Number(e.price))).toLocaleString(
                              "en-US"
                            ),
                            " ",
                            "USDT",
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "w-full flex justify-between items-center mt-[6px] mb-[10px]",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center gap-[6px]",
                          children: [
                            e.order_status === m.iM.pending ||
                            a.includes(
                              null == e
                                ? void 0
                                : null === (t = e.tx_hashes) || void 0 === t
                                ? void 0
                                : t[0]
                            )
                              ? (0, r.jsx)(x(), {
                                  src: v.Z,
                                  alt: "Loader",
                                  className: "animate-spin w-4 h-4",
                                })
                              : (0, r.jsx)("p", {
                                  className:
                                    "text-[10px] font-medium rounded py-1 px-1.5 bg-opacity-20 ".concat(
                                      ((e.order_status === m.iM.open ||
                                        e.order_status === m.iM.filled) &&
                                        "text-textGreen bg-textGreen") ||
                                        ((e.order_status ===
                                          m.iM.partiallyFilled ||
                                          e.order_status ===
                                            m.iM.partiallyClaimed) &&
                                          "text-textOrange bg-textOrange") ||
                                        (e.order_status === m.iM.cancelled &&
                                          "text-textRed bg-textRed") ||
                                        (e.order_status === m.iM.claimed &&
                                          "text-textBlue bg-textBlue")
                                    ),
                                  children: e.order_status,
                                }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-sm font-medium text-textBlack dark:text-white",
                              children: [
                                new Date(e.time_stamp.split(" ")[0]).getDate(),
                                "/",
                                new Date(
                                  e.time_stamp.split(" ")[0]
                                ).getMonth() + 1,
                                "/",
                                new Date(
                                  e.time_stamp.split(" ")[0]
                                ).getFullYear(),
                                " ",
                                e.time_stamp.split(" ")[1],
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className:
                            "text-xs font-normal text-textGray dark:text-darkTextGray",
                          children: [
                            Number(
                              (0, h.uf)(Number(e.amount_eth), 4)
                            ).toLocaleString("en-US"),
                            " ",
                            "ETH",
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "w-full flex gap-2",
                      children: [
                        (0, r.jsx)("button", {
                          className: "".concat(
                            e.order_status === m.iM.partiallyFilled
                              ? "flex"
                              : "hidden",
                            " w-full justify-center items-center py-[7px] rounded-lg text-[10px] font-medium text-textBlack dark:text-white bg-white dark:bg-transparent border border-textBlack dark:border-buttonBackground"
                          ),
                          onClick: (t) => {
                            t.stopPropagation(), s(e, !0);
                          },
                          children: "Cancel",
                        }),
                        (0, r.jsx)("button", {
                          className:
                            "w-full items-center py-[7px] rounded-lg text-[10px] font-medium text-white dark:text-buttonBackground bg-black dark:bg-buttonBackground dark:bg-opacity-30",
                          onClick: (t) => {
                            t.stopPropagation(),
                              e.order_status === m.iM.cancelled ||
                              e.order_status === m.iM.claimed ||
                              e.order_status === m.iM.pending ||
                              a.includes(e.order_id)
                                ? window.open(
                                    ""
                                      .concat(m.ZM, "/tx/")
                                      .concat(e.tx_hashes[0]),
                                    "_blank"
                                  )
                                : s(e, !1);
                          },
                          children: a.includes(e.order_id)
                            ? "View Transaction"
                            : e.buttonLabel,
                        }),
                      ],
                    }),
                  ],
                },
                null == e ? void 0 : e.order_id
              );
            }),
          });
        },
        e3 = {
          src: "/_next/static/media/assetsWallet.69b26c00.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        e6 = () => {
          let { isConnected: e } = (0, A.m)(),
            {
              tradeData: t,
              allTokens: a,
              darkMode: s,
            } = (0, u.useGlobalContext)(),
            {
              nativeTokenBalance: d,
              quoteTokenBalance: n,
              baseTokenBalance: o,
            } = (0, eg.Z)(),
            [c, m] = (0, l.useState)(a.slice(0, 2)),
            [p, g] = (0, l.useState)(0),
            [b, f] = (0, l.useState)([]);
          return (
            (0, l.useEffect)(() => {
              0 === c.length && m(a.slice(0, 2));
            }, [a]),
            (0, l.useEffect)(() => {
              if (n && o && d) {
                let e = [
                  {
                    name: t.quote_token.token_name,
                    symbol: t.quote_token.symbol,
                    balance: Number(n),
                    icon_link: t.quote_token.icon_link,
                    price: Number(n),
                  },
                  {
                    name: t.base_token.token_name,
                    symbol: t.base_token.symbol,
                    balance: Number(o),
                    icon_link: t.base_token.icon_link,
                    price: Number(o) * Number(t.price),
                  },
                  {
                    name: "FlowAI",
                    symbol: "dMUL",
                    balance: Number(d),
                    icon_link: s
                      ? "https://i.imgur.com/BQjJary.png"
                      : "https://i.imgur.com/v48VmEe.png",
                    price: 0.01684 * Number(d),
                  },
                ];
                g(e.reduce((e, t) => Number(t.price) + e, 0)), f(e);
              }
            }, [n, o, d, s]),
            (0, r.jsx)(r.Fragment, {
              children: e
                ? (0, r.jsx)("div", {
                    className: "h-full md:h-96 flex flex-col p-0 pt-4 md:p-4",
                    children: (0, r.jsxs)("div", {
                      className:
                        "h-full rounded-lg overflow-y-scroll bg-transparent dark:bg-transparent",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center mb-3 px-0",
                          children: [
                            (0, r.jsx)(x(), {
                              src: e3,
                              alt: "Wallet",
                              className: "mr-2",
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "font-medium text-sm mr-3 dark:text-white",
                              children: "Wallet",
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "font-semibold text-[10px] py-1 px-1.5 rounded bg-textGray dark:bg-darkTextGray text-white",
                              children: "100.00%",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className: "text-[32px] mb-4 px-0 dark:text-white",
                          children: [
                            "$",
                            p.toLocaleString("en-US").split(".")[0],
                            (0, r.jsxs)("span", {
                              className:
                                "text-sm text-textGray dark:text-darkTextGray",
                              children: [
                                ".",
                                p.toFixed(2).split(".")[1] || "00",
                              ],
                            }),
                          ],
                        }),
                        null == b
                          ? void 0
                          : b.map((e) =>
                              (0, r.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, r.jsx)(i.Z, {
                                      className: "bg-drawer dark:bg-darkDrawer",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex items-center gap-1 my-3 px-4 md:px-0",
                                      children: [
                                        (0, r.jsx)(x(), {
                                          className: "w-8 h-8",
                                          src: e.icon_link,
                                          alt: "token icons",
                                          width: 32,
                                          height: 32,
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "w-full flex gap-0.5 justify-between",
                                          children: [
                                            (0, r.jsxs)("div", {
                                              className: "w-1/2 text-wrap",
                                              children: [
                                                (0, r.jsx)("p", {
                                                  className:
                                                    "font-medium text-sm text-wrap dark:text-white",
                                                  children: e.name,
                                                }),
                                                (0, r.jsxs)("p", {
                                                  className:
                                                    "text-xs break-all text-wrap text-textGray dark:text-darkTextGray",
                                                  children: [
                                                    Number(
                                                      e.balance.toFixed(2)
                                                    ).toLocaleString("en-US"),
                                                    (0, r.jsxs)("span", {
                                                      className:
                                                        "text-[10px] break-normal",
                                                      children: [" ", e.symbol],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("div", {
                                              className:
                                                "w-1/2 flex flex-col items-end dark:text-white",
                                              children: [
                                                (0, r.jsxs)("p", {
                                                  className:
                                                    "text-sm text-end break-all",
                                                  children: [
                                                    "$",
                                                    Number(
                                                      (0, h.uf)(
                                                        e.price &&
                                                          e.price > 1e-6
                                                          ? e.price
                                                          : 0,
                                                        2
                                                      )
                                                    ).toLocaleString("en-US"),
                                                  ],
                                                }),
                                                (0, r.jsx)("p", {
                                                  className:
                                                    "hidden text-xs text-textRed",
                                                  children: "-0.22% ($33.78)",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.symbol
                              )
                            ),
                      ],
                    }),
                  })
                : (0, r.jsxs)("div", {
                    className:
                      "h-full flex flex-col justify-center items-center",
                    children: [
                      (0, r.jsx)(x(), {
                        className: "cursor-pointer",
                        src: eA.Z,
                        alt: "Open Box",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "text-sm text-textGray dark:text-darkTextGray mt-1",
                        children: "No Assets Found",
                      }),
                    ],
                  }),
            })
          );
        },
        e5 = a(68034),
        e8 = {
          src: "/_next/static/media/arrowRightDarkGray.7f2a277e.svg",
          height: 12,
          width: 6,
          blurWidth: 0,
          blurHeight: 0,
        },
        e7 = {
          src: "/_next/static/media/arrowRightLightGray.5e632524.svg",
          height: 12,
          width: 6,
          blurWidth: 0,
          blurHeight: 0,
        },
        e9 = {
          src: "/_next/static/media/taskDone.8ea5c53f.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        te = {
          src: "/_next/static/media/taskNotDoneDark.9894ca24.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        tt = {
          src: "/_next/static/media/taskNotDoneLight.d3864c3d.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        ta = () => {
          let { isConnected: e, address: t } = (0, A.m)(),
            { darkMode: a } = (0, u.useGlobalContext)(),
            [s, i] = (0, l.useState)(!1),
            [d, n] = (0, l.useState)(!1),
            [c, m] = (0, l.useState)([]),
            [h, p] = (0, l.useState)(!1),
            g = (0, l.useRef)(c);
          (0, l.useEffect)(() => {
            m([]);
          }, [t]),
            (0, l.useEffect)(() => {
              g.current = c;
            }, [c]),
            (0, l.useEffect)(() => {
              let e;
              let a = async (e) => {
                  n(!0), i(!1);
                  try {
                    let a = await eW.Z.get(
                      "https://galxe.multipool.finance/api/user-task-status?userAddress=".concat(
                        t
                      ),
                      { signal: e }
                    );
                    a.data &&
                      (a.data.filter(
                        (e) =>
                          !0 === e.done &&
                          g.current.some(
                            (t) => t.task === e.task && !1 === t.done
                          )
                      ).length > 0 &&
                        g.current.length > 0 &&
                        (p(!0), b()),
                      m(a.data));
                  } catch (e) {
                    i(!0),
                      eW.Z.isCancel(e)
                        ? console.log("Previous API call cancelled")
                        : e instanceof Error &&
                          console.log("Error: ", e.message);
                  } finally {
                    n(!1);
                  }
                },
                r = new AbortController(),
                { signal: l } = r;
              return (
                a(l),
                (e = setInterval(() => {
                  a(l);
                }, 5e3)),
                () => {
                  r.abort(), clearInterval(e);
                }
              );
            }, [t]);
          let b = () => {
            let e = Date.now() + 3e3,
              t = ["#4FDFFF", "#fd8bbc", "#2BB48A"],
              a = () => {
                Date.now() > e ||
                  ((0, e5.Z)({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    startVelocity: 60,
                    origin: { x: 0, y: 0.5 },
                    colors: t,
                  }),
                  (0, e5.Z)({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    startVelocity: 60,
                    origin: { x: 1, y: 0.5 },
                    colors: t,
                  }),
                  (0, e5.Z)({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    startVelocity: 60,
                    origin: { x: 1, y: 0.5 },
                    colors: t,
                  }),
                  requestAnimationFrame(a));
              };
            a();
          };
          return (0, r.jsxs)("div", {
            className: "relative overflow-y-scroll",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "w-full flex flex-col gap-2 px-0 md:px-4 mb-0 mt-4 md:my-4",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex justify-between items-start py-4 px-3 rounded-[8px] cursor-pointer bg-backgroundGray dark:bg-darkBackgroundGray",
                    onClick: () =>
                      window.open(
                        "https://app.galxe.com/quest/multipool",
                        "_blank"
                      ),
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col justify-start items-start gap-[10px] hover:translate-x-2 transition-all duration-300",
                        children: [
                          (0, r.jsx)("h1", {
                            className:
                              "font-medium text-sm leading-[100%] text-textBlack dark:text-white",
                            children: "Connect Galxe Account",
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "w-[90%] font-light text-xs leading-[140%] text-textBlack dark:text-white",
                            children:
                              "To be eligible for Galxe rewards, please ensure you’ve created a Galxe account with your connected wallet.",
                          }),
                        ],
                      }),
                      (0, r.jsx)(x(), { src: a ? E : L, alt: "Tick" }),
                    ],
                  }),
                  c.map((t, l) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className:
                          "flex justify-between items-center py-4 px-3 gap-2 rounded-[8px] bg-backgroundGray dark:bg-darkBackgroundGray",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex justify-start items-center gap-2",
                            children: [
                              (0, r.jsx)(x(), {
                                src: a ? e8 : e7,
                                alt: "Arrow",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "font-medium text-sm leading-[100%] ".concat(
                                    e
                                      ? "text-textBlack dark:text-white"
                                      : "text-textGray dark:text-darkTextGray"
                                  ),
                                children: t.task,
                              }),
                            ],
                          }),
                          (0, r.jsx)(x(), {
                            src: t.done ? e9 : a ? te : tt,
                            alt: "Tick",
                          }),
                        ],
                      },
                      l
                    )
                  ),
                ],
              }),
              (0, r.jsx)(o.Z, {
                open: h,
                autoHideDuration: 5e3,
                anchorOrigin: { vertical: "bottom", horizontal: "left" },
                onClose: (e, t) => {
                  "clickaway" !== t && p(!1);
                },
                disableWindowBlurListener: !0,
                children: (0, r.jsxs)("div", {
                  className:
                    "w-fit sm:w-full mt-6 sm:mt-0 flex items-center p-2 rounded-xl bg-white dark:bg-darkCardBackground dark:border dark:border-darkDrawer",
                  children: [
                    (0, r.jsx)(x(), {
                      className: "z-20 mr-2",
                      src: eq,
                      alt: "token icons",
                      width: 32,
                      height: 32,
                    }),
                    (0, r.jsx)("div", {
                      className: "flex flex-col",
                      children: (0, r.jsx)("p", {
                        className:
                          "font-medium text-xs text-textBlack dark:text-white",
                        children: "Galxe task completed",
                      }),
                    }),
                    (0, r.jsx)(x(), {
                      className: "cursor-pointer ml-2",
                      src: ey,
                      alt: "Cross",
                      width: 32,
                      height: 32,
                      onClick: () => p(!1),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        tr = (e) => {
          var t, a;
          let { isDesktop: s } = e,
            { isConnected: o } = (0, A.m)(),
            {
              orderHistory: c,
              darkMode: h,
              ordersPerPage: p,
              setOrdersPerPage: g,
              orderPageNumber: b,
              setOrderPageNumber: f,
              totalOrders: k,
            } = (0, u.useGlobalContext)(),
            [j, v] = (0, l.useState)(c),
            [y, w] = (0, l.useState)(!1),
            [N, _] = (0, l.useState)(!1),
            [G, B] = (0, l.useState)(!1),
            [F, S] = (0, l.useState)(!1),
            [C, T] = (0, l.useState)(!1),
            [Z, D] = (0, l.useState)([]),
            [O, L] = (0, l.useState)(),
            [E, M] = (0, l.useState)(!0),
            [P, R] = (0, l.useState)(m.EA.openOrders),
            [q, H] = (0, l.useState)(m.Pv.orders),
            [W, U] = (0, l.useState)(null),
            { windowWidth: z } = (0, I.Z)();
          return (
            (0, l.useEffect)(() => {
              let e = (e) => {
                if (e.detail.hash) {
                  let t = JSON.parse(
                    localStorage.getItem("processingOrders") || "[]"
                  ).filter((t) => {
                    var a;
                    return (
                      (null == t
                        ? void 0
                        : null === (a = t.tx_hashes) || void 0 === a
                        ? void 0
                        : a[0]) !== e.detail.hash
                    );
                  });
                  localStorage.setItem(
                    "processingOrders",
                    JSON.stringify(t || [])
                  );
                }
              };
              return (
                document.addEventListener("orderProcessingCancelled", e),
                () => {
                  document.removeEventListener("orderProcessingCancelled", e);
                }
              );
            }, []),
            (0, l.useEffect)(() => {
              let e = (e) => {
                M(!0);
              };
              return (
                document.addEventListener("pendingOrderAdded", e),
                () => {
                  document.removeEventListener("pendingOrderAdded", e);
                }
              );
            }, []),
            (0, l.useEffect)(() => {
              var e;
              let t = JSON.parse(localStorage.getItem("latestOrderId") || "-1");
              c.length > 0 &&
                (null === (e = c[0]) || void 0 === e ? void 0 : e.order_id) >
                  t &&
                M(!0);
            }, [c]),
            (0, l.useEffect)(() => {
              let e = JSON.parse(localStorage.getItem("latestOrderId") || "-1"),
                t = JSON.parse(localStorage.getItem("pendingOrders") || "[]"),
                a = JSON.parse(
                  localStorage.getItem("processingOrders") || "[]"
                );
              for (let a of null == c
                ? void 0
                : c.filter((t) => (null == t ? void 0 : t.order_id) > e))
                for (let e = t.length - 1; e >= 0; e--) {
                  let r = t[e];
                  if (a.tx_hashes[0] === r.tx_hashes[0]) {
                    t.splice(e, 1);
                    break;
                  }
                }
              localStorage.setItem("pendingOrders", JSON.stringify(t || []));
              let r = [...t, ...c];
              for (let e of r)
                for (let t = a.length - 1; t >= 0; t--) {
                  var l, s;
                  let r = a[t];
                  if (
                    (null == e
                      ? void 0
                      : null === (l = e.tx_hashes) || void 0 === l
                      ? void 0
                      : l[0]) ===
                      (null == r
                        ? void 0
                        : null === (s = r.tx_hashes) || void 0 === s
                        ? void 0
                        : s[0]) &&
                    ((null == e ? void 0 : e.order_status) === m.iM.cancelled ||
                      (null == e ? void 0 : e.order_status) === m.iM.claimed ||
                      (null == e ? void 0 : e.order_status) ===
                        m.iM.partiallyClaimed)
                  ) {
                    a.splice(t, 1);
                    break;
                  }
                }
              localStorage.setItem("processingOrders", JSON.stringify(a || [])),
                v(
                  r.map((e) =>
                    e.order_status === m.iM.filled
                      ? "Market" === e.order_type
                        ? {
                            ...e,
                            order_status: m.iM.claimed,
                            buttonLabel: "View Transaction",
                          }
                        : { ...e, buttonLabel: "Claim" }
                      : e.order_status === m.iM.partiallyFilled
                      ? { ...e, buttonLabel: "Partial Claim" }
                      : e.order_status === m.iM.open ||
                        e.order_status === m.iM.partiallyClaimed
                      ? { ...e, buttonLabel: "Cancel" }
                      : { ...e, buttonLabel: "View Transaction" }
                  )
                ),
                M(!1);
            }, [c, E]),
            (0, l.useEffect)(() => {
              j.length > 0 &&
                D(
                  j.filter(
                    (e) =>
                      (P === m.EA.history &&
                        (e.order_status === m.iM.cancelled ||
                          e.order_status === m.iM.claimed ||
                          (e.order_status === m.iM.filled &&
                            "Market" === e.order_type))) ||
                      (P === m.EA.openOrders &&
                        (e.order_status === m.iM.open ||
                          e.order_status === m.iM.filled ||
                          e.order_status === m.iM.partiallyFilled ||
                          e.order_status === m.iM.partiallyClaimed ||
                          e.order_status === m.iM.pending))
                  )
                );
            }, [j, P]),
            (0, l.useEffect)(() => {
              let e = (e) => {
                !1 === e.detail.isOrderNew &&
                  (window.innerWidth > 768
                    ? T(e.detail.openDrawer)
                    : _(e.detail.openDrawer),
                  B(e.detail.isOrderNew),
                  S(e.detail.isCancel),
                  L(e.detail.order));
              };
              return (
                document.addEventListener("toggleDrawer", e),
                () => {
                  document.removeEventListener("toggleDrawer", e);
                }
              );
            }, []),
            (0, l.useEffect)(() => {
              w(!0);
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className:
                    "w-full h-full  flex flex-col mb-3 md:mb-0 rounded-2xl bg-white dark:bg-darkCardBackground",
                  children:
                    z && z >= 768
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(eR.Z, {
                              value: P,
                              onChange: (e, t) => R(t),
                              sx: {
                                ".css-1aquho2-MuiTabs-indicator": {
                                  backgroundColor: h ? "#4FDFFF" : "#1F242C",
                                },
                                ".MuiTabs-indicator": {
                                  width: "30px !important",
                                  marginLeft: "16px",
                                  borderTopLeftRadius: "4px !important",
                                  borderTopRightRadius: "4px !important",
                                  backgroundColor: h
                                    ? "#4FDFFF !important"
                                    : "#1F242C !important",
                                },
                                ".css-ttwr4n": {
                                  width: "30px !important",
                                  marginLeft: "16px",
                                  borderTopLeftRadius: "4px !important",
                                  borderTopRightRadius: "4px !important",
                                  backgroundColor: h
                                    ? "#4FDFFF !important"
                                    : "#1F242C !important",
                                },
                              },
                              children: Object.keys(m.EA).map((e) => {
                                let t = m.EA[e];
                                return (0, r.jsx)(
                                  eI.Z,
                                  {
                                    value: t,
                                    label: (0, r.jsxs)("div", {
                                      className:
                                        "flex justify-center items-center",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className: "".concat(
                                            t === W && t !== P
                                              ? "opacity-70"
                                              : "opacity-100",
                                            " transition-all duration-300"
                                          ),
                                          children: t,
                                        }),
                                        t === m.EA.openOrders &&
                                          (0, r.jsx)("p", {
                                            className:
                                              "hidden ml-1 px-1.5 py-0.5 bg-black dark:bg-darkBackgroundGray text-white rounded",
                                            children: o ? k : 0,
                                          }),
                                      ],
                                    }),
                                    disableRipple: !0,
                                    style: {
                                      minWidth: "0px",
                                      fontFamily: "Outfit",
                                      fontSize: "14px",
                                      fontWeight: 400,
                                      textAlign: "start",
                                      textTransform: "none",
                                      color:
                                        t === P
                                          ? h
                                            ? "#FFFFFF"
                                            : "#1F242C"
                                          : t === W
                                          ? h
                                            ? "#768398"
                                            : "#1F242C"
                                          : h
                                          ? "#768398"
                                          : "#AAB9D0",
                                      paddingLeft: "16px",
                                      paddingRight: "0px",
                                      paddingTop: "16px",
                                      paddingBottom: "14px",
                                    },
                                    onMouseEnter: () => U(t),
                                    onMouseLeave: () => U(null),
                                  },
                                  e
                                );
                              }),
                            }),
                            (0, r.jsx)(i.Z, {
                              className: "bg-drawer dark:bg-darkDrawer",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "h-[540px] flex flex-col gap-1 p-4 overflow-y-scroll",
                              children:
                                y && o && Z.length > 0
                                  ? (0, r.jsx)("div", {
                                      className:
                                        "h-full flex flex-col items-stretch",
                                      children: (0, r.jsx)(e1, {
                                        orderHistory:
                                          c.length > 0 ||
                                          (0 === c.length &&
                                            (null ===
                                              (t = JSON.parse(
                                                localStorage.getItem(
                                                  "pendingOrders"
                                                ) || "[]"
                                              )) || void 0 === t
                                              ? void 0
                                              : t.length) > 0)
                                            ? Z
                                            : [],
                                      }),
                                    })
                                  : (0, r.jsxs)("div", {
                                      className:
                                        "h-full flex flex-col justify-center items-center",
                                      children: [
                                        (0, r.jsx)(x(), {
                                          className: "cursor-pointer",
                                          src: eA.Z,
                                          alt: "Open Box",
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "text-sm text-textGray dark:text-darkTextGray mt-1",
                                          children: "No Orders Found",
                                        }),
                                      ],
                                    }),
                            }),
                          ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(eR.Z, {
                              value: q,
                              onChange: (e, t) => H(t),
                              sx: {
                                ".css-1aquho2-MuiTabs-indicator": {
                                  backgroundColor: h ? "#4FDFFF" : "#1F242C",
                                },
                                ".MuiTabs-indicator": {
                                  width: "30px !important",
                                  marginLeft: "16px",
                                  borderTopLeftRadius: "4px !important",
                                  borderTopRightRadius: "4px !important",
                                },
                              },
                              children: Object.keys(m.Pv).map((e) => {
                                let t = m.Pv[e];
                                return (0, r.jsx)(
                                  eI.Z,
                                  {
                                    value: t,
                                    label: (0, r.jsxs)("div", {
                                      className:
                                        "flex justify-center items-center",
                                      children: [
                                        t === m.Pv.galaxe
                                          ? (0, r.jsx)(x(), {
                                              src: eq,
                                              alt: "GalxeLogo",
                                              className: "mr-1",
                                            })
                                          : (0, r.jsx)(r.Fragment, {}),
                                        (0, r.jsx)("p", {
                                          className: "".concat(
                                            t === m.Pv.galaxe &&
                                              "text-buttonBackground"
                                          ),
                                          children: t,
                                        }),
                                        t === m.Pv.orders &&
                                          (0, r.jsx)("p", {
                                            className:
                                              "ml-1 px-1.5 py-0.5 bg-black dark:bg-darkBackgroundGray text-white rounded",
                                            children: o ? k : 0,
                                          }),
                                      ],
                                    }),
                                    disableRipple: !0,
                                    style: {
                                      minWidth: "0px",
                                      fontFamily: "Outfit",
                                      fontSize: "14px",
                                      fontWeight: 400,
                                      textAlign: "start",
                                      textTransform: "none",
                                      color:
                                        t === q
                                          ? h
                                            ? "#FFFFFF"
                                            : "#1F242C"
                                          : h
                                          ? "#768398"
                                          : "#AAB9D0",
                                      paddingLeft: "16px",
                                      paddingRight: "0px",
                                      paddingTop: "16px",
                                      paddingBottom: "14px",
                                    },
                                  },
                                  e
                                );
                              }),
                            }),
                            (0, r.jsx)(i.Z, {
                              className: "bg-drawer dark:bg-darkDrawer",
                            }),
                            (0, r.jsxs)("div", {
                              className: "h-80 flex flex-col ".concat(
                                q === m.Pv.assets
                                  ? "justify-center"
                                  : "justify-start",
                                " gap-4 sm:gap-1 px-4 py-0 overflow-y-scroll"
                              ),
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "relative ".concat(
                                    q === m.Pv.orders ? "flex" : "hidden",
                                    " w-fit p-1 my-4 gap-2 rounded-lg bg-backgroundGray dark:bg-darkBackgroundGray"
                                  ),
                                  children: [
                                    Object.keys(m.EA).map((e) => {
                                      let t = m.EA[e];
                                      return (0, r.jsx)(
                                        "p",
                                        {
                                          className:
                                            "flex-1 py-[10px] px-2 rounded-[8px] text-center font-medium text-xs text-nowrap cursor-pointer text-textBlack dark:text-white transition-all duration-300 bg-transparent z-10",
                                          onClick: () => {
                                            R(t);
                                          },
                                          children: t,
                                        },
                                        e
                                      );
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "w-1/2 h-9 absolute top-1/2 -translate-y-1/2 rounded-lg z-0 ".concat(
                                          P === m.EA.history
                                            ? "bg-buttonBackground/30 translate-x-[93px] w-[calc(45%-16px)]"
                                            : "bg-buttonBackground/30 w-[calc(50%+8px)]",
                                          " transition-all duration-300"
                                        ),
                                    }),
                                  ],
                                }),
                                y &&
                                  q === m.Pv.orders &&
                                  o &&
                                  Z.length > 0 &&
                                  (0, r.jsx)(e4, {
                                    orderHistory:
                                      c.length > 0 ||
                                      (0 === c.length &&
                                        (null ===
                                          (a = JSON.parse(
                                            localStorage.getItem(
                                              "pendingOrders"
                                            ) || "[]"
                                          )) || void 0 === a
                                          ? void 0
                                          : a.length) > 0)
                                        ? Z
                                        : [],
                                  }),
                                y &&
                                  q === m.Pv.orders &&
                                  (!o || 0 === Z.length) &&
                                  (0, r.jsxs)("div", {
                                    className:
                                      "h-full flex flex-col justify-center items-center",
                                    children: [
                                      (0, r.jsx)(x(), {
                                        className: "cursor-pointer",
                                        src: eA.Z,
                                        alt: "Open Box",
                                      }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "text-sm text-textGray dark:text-darkTextGray mt-1",
                                        children: "No Orders Found",
                                      }),
                                    ],
                                  }),
                                y && q === m.Pv.trades && (0, r.jsx)(eP, {}),
                                y && q === m.Pv.assets && (0, r.jsx)(e6, {}),
                                y && q === m.Pv.galaxe && (0, r.jsx)(ta, {}),
                              ],
                            }),
                          ],
                        }),
                }),
                (0, r.jsx)(n.ZP, {
                  anchor: "bottom",
                  open: N && !G,
                  onClose: () => _(!1),
                  PaperProps: {
                    elevation: 0,
                    style: {
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                    square: !1,
                  },
                  children: (0, r.jsx)(ef.Z, {
                    setIsOpen: _,
                    isOrderNew: G,
                    isCancel: F,
                    order: O,
                  }),
                }),
                (0, r.jsx)(d.Z, {
                  open: C,
                  onClose: () => T(!1),
                  "aria-labelledby": "modal-modal-title",
                  "aria-describedby": "modal-modal-description",
                  children: (0, r.jsx)("div", {
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit rounded-2xl bg-white  dark:bg-darkCardBackground focus:outline-none",
                    children: (0, r.jsx)(ef.Z, {
                      setIsOpen: T,
                      isOrderNew: G,
                      isCancel: F,
                      order: O,
                    }),
                  }),
                }),
              ],
            })
          );
        },
        tl = () => {
          let { darkMode: e } = (0, u.useGlobalContext)(),
            [t, a] = (0, l.useState)(m.rX.galaxe),
            [s, d] = (0, l.useState)(null);
          return (0, r.jsxs)("div", {
            className:
              "w-full h-full  flex flex-col mb-3 md:mb-0 rounded-xl overflow-y-hidden bg-white dark:bg-darkCardBackground",
            children: [
              (0, r.jsx)(eR.Z, {
                value: t,
                onChange: (e, t) => a(t),
                sx: {
                  ".css-1aquho2-MuiTabs-indicator": {
                    backgroundColor: e ? "#4FDFFF" : "#1F242C",
                  },
                  ".MuiTabs-indicator": {
                    width: "30px !important",
                    marginLeft: "16px",
                    borderTopLeftRadius: "4px !important",
                    borderTopRightRadius: "4px !important",
                    backgroundColor: e
                      ? "#4FDFFF !important"
                      : "#1F242C !important",
                  },
                  ".css-ttwr4n": {
                    width: "30px !important",
                    marginLeft: "16px",
                    borderTopLeftRadius: "4px !important",
                    borderTopRightRadius: "4px !important",
                    backgroundColor: e
                      ? "#4FDFFF !important"
                      : "#1F242C !important",
                  },
                },
                className: "hidden md:flex",
                children: Object.keys(m.rX).map((a) => {
                  let l = m.rX[a];
                  return (0, r.jsx)(
                    eI.Z,
                    {
                      value: l,
                      label: (0, r.jsxs)("div", {
                        className: "flex justify-center items-center",
                        children: [
                          l === m.rX.galaxe
                            ? (0, r.jsx)(x(), {
                                src: eq,
                                alt: "GalxeLogo",
                                className: "mr-1",
                              })
                            : (0, r.jsx)(r.Fragment, {}),
                          (0, r.jsx)("p", {
                            className: ""
                              .concat(
                                l === s && l !== t
                                  ? "opacity-70"
                                  : "opacity-100",
                                " "
                              )
                              .concat(
                                l === m.rX.galaxe && "text-buttonBackground",
                                " transition-all duration-300"
                              ),
                            children: l,
                          }),
                        ],
                      }),
                      disableRipple: !0,
                      style: {
                        minWidth: "0px",
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        fontWeight: 400,
                        textAlign: "start",
                        textTransform: "none",
                        color:
                          l === t
                            ? e
                              ? "#FFFFFF"
                              : "#1F242C"
                            : l === s
                            ? e
                              ? "#768398"
                              : "#1F242C"
                            : e
                            ? "#768398"
                            : "#AAB9D0",
                        paddingLeft: "16px",
                        paddingRight: "0px",
                        paddingTop: "16px",
                        paddingBottom: "14px",
                      },
                      onMouseEnter: () => d(l),
                      onMouseLeave: () => d(null),
                    },
                    a
                  );
                }),
              }),
              (0, r.jsx)(i.Z, {
                className: "hidden md:flex bg-drawer dark:bg-darkDrawer",
              }),
              t === m.rX.assets
                ? (0, r.jsx)(e6, {})
                : (0, r.jsx)(r.Fragment, {}),
              t === m.rX.galaxe
                ? (0, r.jsx)(ta, {})
                : (0, r.jsx)(r.Fragment, {}),
            ],
          });
        };
      function ts() {
        var e, t, a;
        let { darkMode: c } = (0, u.useGlobalContext)(),
          [p, g] = (0, l.useState)(!1),
          [b, f] = (0, l.useState)(!1),
          [k, j] = (0, l.useState)(!1),
          [v, y] = (0, l.useState)({
            snackbarType: m.Go.orderPlaced,
            message: "",
            orderDetails: {},
            vertical: "bottom",
            horizontal: "left",
          }),
          [w, N] = (0, l.useState)(),
          { tradeData: _ } = (0, u.useGlobalContext)(),
          { windowWidth: G } = (0, I.Z)(),
          { data: B, isSuccess: F } = (0, s.A)({
            hash: w,
            query: { enabled: !!w },
          });
        function S() {
          localStorage.setItem("timeStamp", Date.now().toString());
        }
        (0, l.useEffect)(() => {
          let e;
          return (
            k ||
              (e = setTimeout(
                () => y((e) => ({ ...e, message: "", orderDetails: {} })),
                500
              )),
            () => {
              e && clearTimeout(e);
            }
          );
        }, [k]),
          (0, l.useEffect)(() => {
            let e = localStorage.getItem("timeStamp")
                ? parseInt(localStorage.getItem("timeStamp"))
                : null,
              t =
                parseInt(Date.now().toString()) -
                (e || parseInt(Date.now().toString()));
            e && t > 500
              ? (Date.now() - e) / 36e5 >= 24
                ? (g(!0), S())
                : g(!1)
              : !e && t < 500 && (g(!0), S());
          }, []),
          (0, l.useEffect)(() => {
            if (F) {
              for (let a of JSON.parse(
                localStorage.getItem(
                  (null == v ? void 0 : v.snackbarType) === m.Go.orderPlaced ||
                    (null == v ? void 0 : v.snackbarType) === m.Go.orderRejected
                    ? "pendingOrders"
                    : "processingOrders"
                ) || "[]"
              )) {
                var e, t;
                ((null == a
                  ? void 0
                  : null === (e = a.tx_hashes) || void 0 === e
                  ? void 0
                  : e[0]) === w ||
                  (null == a ? void 0 : a.order_id) ===
                    (null == v
                      ? void 0
                      : null === (t = v.orderDetails) || void 0 === t
                      ? void 0
                      : t.order_id)) &&
                  y((e) => {
                    var t, r;
                    return {
                      snackbarType: null == e ? void 0 : e.snackbarType,
                      message: "",
                      vertical: "bottom",
                      horizontal: "left",
                      orderDetails: {
                        order_id: a.order_id,
                        order_type: a.order_type,
                        amount: a.amount,
                        amount_eth: a.amount_eth,
                        claimable_amount:
                          null === (t = a.claimable_amount) || void 0 === t
                            ? void 0
                            : t.toString(),
                        claimable_amount_eth:
                          null === (r = a.claimable_amount_eth) || void 0 === r
                            ? void 0
                            : r.toString(),
                        order_status: a.order_status,
                        price: a.price,
                        is_buy: a.is_buy,
                        token_pair_name: a.token_pair_name,
                        sell: a.sell || "",
                        receive: a.receive || "",
                      },
                    };
                  });
              }
              j(!0), T();
            }
          }, [F, B]),
          (0, l.useEffect)(() => {
            let e = (e) => {
              e.detail.vertical &&
                e.detail.horizontal &&
                y((t) => ({
                  ...t,
                  vertical: e.detail.vertical,
                  horizontal: e.detail.horizontal,
                })),
                e.detail.type === m.Go.completeCaptcha
                  ? (y((t) => ({
                      ...t,
                      snackbarType: e.detail.type,
                      message: "Please complete the CAPTCHA before claiming",
                    })),
                    j(!0),
                    C())
                  : e.detail.type === m.Go.captchaFailed
                  ? (y((t) => ({
                      ...t,
                      snackbarType: e.detail.type,
                      message: "CAPTCHA verification failed. Please try again",
                    })),
                    j(!0),
                    C())
                  : e.detail.type === m.Go.gasTokenClaimSuccess
                  ? (y((t) => ({
                      ...t,
                      snackbarType: e.detail.type,
                      message: "Successfully claimed 1 $dMUL",
                    })),
                    j(!0),
                    C())
                  : e.detail.type === m.Go.gasTokenClaimFailure
                  ? (y((t) => ({
                      ...t,
                      snackbarType: e.detail.type,
                      message: "Unable to claim Gas Token",
                    })),
                    j(!0))
                  : e.detail.type === m.Go.testTokenClaimSuccess
                  ? (y((t) => ({
                      ...t,
                      snackbarType: e.detail.type,
                      message: "Successfully claimed 10 WETH & 10,000 USDT",
                    })),
                    j(!0),
                    T())
                  : e.detail.type === m.Go.testTokenClaimFailure
                  ? (y((t) => ({
                      ...t,
                      snackbarType: e.detail.type,
                      message: "Unable to claim Test Tokens",
                    })),
                    j(!0))
                  : e.detail.type === m.Go.orderRejected
                  ? (y((t) => ({
                      ...t,
                      snackbarType: e.detail.type,
                      message: "User rejected the request",
                    })),
                    j(!0))
                  : e.detail.type !== m.Go.orderRejected &&
                    e.detail.hash &&
                    (y((t) => ({
                      ...t,
                      snackbarType: e.detail.type,
                      message: "",
                      orderDetails: { order_id: e.detail.order_id },
                    })),
                    N(e.detail.hash));
            };
            return (
              document.addEventListener("snackbarToggle", e),
              () => {
                document.removeEventListener("snackbarToggle", e);
              }
            );
          }, []);
        let C = () => {
            document.dispatchEvent(
              new CustomEvent("refetchNativeTokenBalance")
            );
          },
          T = () => {
            document.dispatchEvent(new CustomEvent("refetchTradeTokenBalance"));
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            G
              ? G >= 768
                ? (0, r.jsxs)("div", {
                    className: "".concat(
                      void 0 === c ? "hidden" : "flex",
                      " flex-col mt-20 base:mt-3 md:mb-[60px]"
                    ),
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "max-h-full xl:max-h-fit flex flex-col grow gap-3 3xl:gap-4",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "w-full flex gap-3 3xl:gap-4",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "h-[597px] w-[70%] xl:w-[65%] 2xl:w-[70%]",
                                children: (0, r.jsx)(Q, { isDesktop: !0 }),
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "h-[597px] w-[30%] xl:w-[35%] 2xl:w-[30%] flex gap-3 3xl:gap-4",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "xl:w-[48%] 4xl:w-[52%] hidden xl:flex flex-col",
                                    children: [
                                      (0, r.jsx)("p", {
                                        className:
                                          "w-full p-4 rounded-t-xl text-base font-medium leading-4 text-textBlack dark:text-white bg-white dark:bg-darkCardBackground",
                                        children: "Order Book",
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "h-full grow w-full rounded-b-xl bg-white dark:bg-darkCardBackground",
                                        children: [
                                          (0, r.jsx)(i.Z, {
                                            className:
                                              "bg-drawer dark:bg-darkDrawer",
                                          }),
                                          (0, r.jsx)(eM, {}),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "w-full xl:w-[52%] 4xl:w-[48%]",
                                    children: (0, r.jsx)(ek, { isDesktop: !0 }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "w-full h-full flex gap-3 3xl:gap-4",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "h-[597px] w-[70%] xl:w-[65%] 2xl:w-[70%] flex flex-col mb-3 md:mb-0 xl:rounded-2xl xl:bg-white xl:dark:bg-darkCardBackground",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "h-full w-full hidden xl:flex",
                                    children: (0, r.jsx)(tr, { isDesktop: !0 }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "h-full w-full flex gap-3 xl:hidden",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className: "w-full flex flex-col",
                                        children: [
                                          (0, r.jsx)("p", {
                                            className:
                                              "w-full p-4 rounded-t-xl text-base font-medium leading-4 text-textBlack dark:text-white bg-white dark:bg-darkCardBackground",
                                            children: "Market Trades",
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "h-full grow w-full rounded-b-xl px-4 bg-white dark:bg-darkCardBackground",
                                            children: [
                                              (0, r.jsx)(i.Z, {
                                                className:
                                                  "bg-drawer dark:bg-darkDrawer",
                                              }),
                                              (0, r.jsx)(eP, {}),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "w-full flex flex-col",
                                        children: [
                                          (0, r.jsx)("p", {
                                            className:
                                              "w-full p-4 rounded-t-xl text-base font-medium leading-4 text-textBlack dark:text-white bg-white dark:bg-darkCardBackground",
                                            children: "Order Book",
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "h-full grow w-full rounded-b-xl bg-white dark:bg-darkCardBackground",
                                            children: [
                                              (0, r.jsx)(i.Z, {
                                                className:
                                                  "bg-drawer dark:bg-darkDrawer",
                                              }),
                                              (0, r.jsx)(eM, {}),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "h-[597px] w-[30%] xl:w-[35%] 2xl:w-[30%] flex gap-3 3xl:gap-4",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "xl:w-[48%] 4xl:w-[52%] hidden xl:flex flex-col",
                                    children: [
                                      (0, r.jsx)("p", {
                                        className:
                                          "w-full p-4 rounded-t-xl text-base font-medium leading-4 text-textBlack dark:text-white bg-white dark:bg-darkCardBackground",
                                        children: "Market Trades",
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "h-full grow w-full rounded-b-xl bg-white dark:bg-darkCardBackground",
                                        children: [
                                          (0, r.jsx)(i.Z, {
                                            className:
                                              "bg-drawer dark:bg-darkDrawer",
                                          }),
                                          (0, r.jsx)("div", {
                                            className: "h-full w-full px-4",
                                            children: (0, r.jsx)(eP, {}),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "w-full xl:w-[52%] 4xl:w-[48%] overflow-x-hidden",
                                    children: (0, r.jsx)(tl, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          G && G < 1280
                            ? (0, r.jsx)(tr, { isDesktop: !0 })
                            : (0, r.jsx)(r.Fragment, {}),
                        ],
                      }),
                      (0, r.jsx)(d.Z, {
                        open: p,
                        onClose: (e, t) => {
                          (t && "backdropClick" === t) || g(!1);
                        },
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        children: (0, r.jsx)("div", {
                          className:
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit rounded-2xl bg-white  dark:bg-darkCardBackground focus:outline-none",
                          children: (0, r.jsx)(ev, { setIsOpen: g }),
                        }),
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    className: "w-full ".concat(
                      void 0 === c ? "hidden" : "flex",
                      " flex-col items-center mt-20 mb-4 rounded-2xl overflow-x-hidden bg-white dark:bg-darkCardBackground"
                    ),
                    children: [
                      (0, r.jsx)(Q, { isDesktop: !1 }),
                      (0, r.jsxs)("div", {
                        className: "w-full flex gap-6 px-4",
                        children: [
                          (0, r.jsx)("div", {
                            className: "w-[36%]",
                            children: (0, r.jsx)(eM, {}),
                          }),
                          (0, r.jsx)("div", {
                            className: "w-[64%]",
                            children: (0, r.jsx)(ek, { isDesktop: !1 }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(i.Z, {
                        className: "w-full bg-drawer dark:bg-darkDrawer",
                      }),
                      (0, r.jsx)(tr, { isDesktop: !1 }),
                      (0, r.jsx)(n.ZP, {
                        anchor: "bottom",
                        open: b,
                        onClose: () => f(!1),
                        PaperProps: {
                          elevation: 0,
                          style: {
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            backgroundColor: c ? "#242931" : "white",
                          },
                          square: !1,
                        },
                        children: (0, r.jsx)(ev, { setIsOpen: f }),
                      }),
                    ],
                  })
              : (0, r.jsx)(r.Fragment, {}),
            (0, r.jsx)(o.Z, {
              open: k,
              autoHideDuration: 5e3,
              anchorOrigin: { vertical: v.vertical, horizontal: v.horizontal },
              onClose: (e, t) => {
                "clickaway" !== t && j(!1);
              },
              disableWindowBlurListener: !0,
              children: (0, r.jsxs)("div", {
                className:
                  "w-fit sm:w-full mt-6 sm:mt-0 flex items-center p-2 rounded-xl bg-white dark:bg-darkCardBackground dark:border dark:border-darkDrawer",
                children: [
                  v.snackbarType === m.Go.gasTokenClaimFailure ||
                  v.snackbarType === m.Go.gasTokenClaimSuccess ||
                  v.snackbarType === m.Go.completeCaptcha ||
                  v.snackbarType === m.Go.captchaFailed
                    ? (0, r.jsx)(x(), {
                        className: "z-20 mr-2",
                        src: c ? ew.Z : eN.Z,
                        alt: "token icons",
                        width: 32,
                        height: 32,
                      })
                    : (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsx)(x(), {
                            className: "z-20",
                            src: _.base_token.icon_link,
                            alt: "token icons",
                            width: 32,
                            height: 32,
                          }),
                          (0, r.jsx)(x(), {
                            className: "-translate-x-2 z-10 ".concat(
                              _.quote_token.icon_link ? "flex" : "hidden"
                            ),
                            src: _.quote_token.icon_link,
                            alt: "token icons",
                            width: 32,
                            height: 32,
                          }),
                        ],
                      }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "font-medium text-xs text-textBlack dark:text-white",
                        children:
                          (null == v
                            ? void 0
                            : null === (e = v.message) || void 0 === e
                            ? void 0
                            : e.length) > 0
                            ? null == v
                              ? void 0
                              : v.message
                            : (null == v ? void 0 : v.snackbarType) ===
                              m.Go.orderCancelled
                            ? "Cancelled Limit Order"
                            : (null == v ? void 0 : v.snackbarType) ===
                              m.Go.orderClaimed
                            ? "Claimed"
                            : (null == v ? void 0 : v.snackbarType) ===
                              m.Go.orderPartiallyClaimed
                            ? "Partially Claimed"
                            : (null == v
                                ? void 0
                                : null === (t = v.orderDetails) || void 0 === t
                                ? void 0
                                : t.order_type) === "Limit"
                            ? "Placed Limit Order"
                            : "Executed Market Order",
                      }),
                      (0, r.jsx)("p", {
                        className: "font-normal text-[10px] text-darkTextGray",
                        children:
                          (null == v
                            ? void 0
                            : null === (a = v.message) || void 0 === a
                            ? void 0
                            : a.length) > 0
                            ? ""
                            : (() => {
                                var e,
                                  t,
                                  a,
                                  r,
                                  l,
                                  s,
                                  i,
                                  d,
                                  n,
                                  o,
                                  c,
                                  x,
                                  u,
                                  p,
                                  g,
                                  b,
                                  f,
                                  k,
                                  j,
                                  y,
                                  w;
                                let N =
                                    null == v
                                      ? void 0
                                      : null === (t = v.orderDetails) ||
                                        void 0 === t
                                      ? void 0
                                      : null === (e = t.token_pair_name) ||
                                        void 0 === e
                                      ? void 0
                                      : e.split("/"),
                                  _ = null == N ? void 0 : N[0],
                                  G = null == N ? void 0 : N[1];
                                return (null == v ? void 0 : v.snackbarType) ===
                                  m.Go.orderClaimed
                                  ? "".concat(
                                      (
                                        null == v
                                          ? void 0
                                          : null === (u = v.orderDetails) ||
                                            void 0 === u
                                          ? void 0
                                          : u.is_buy
                                      )
                                        ? (0, h.uf)(
                                            Number(
                                              null == v
                                                ? void 0
                                                : null ===
                                                    (p = v.orderDetails) ||
                                                  void 0 === p
                                                ? void 0
                                                : p.amount_eth
                                            ) || 0
                                          ) +
                                            " " +
                                            _
                                        : (0, h.uf)(
                                            Number(
                                              (null == v
                                                ? void 0
                                                : null ===
                                                    (g = v.orderDetails) ||
                                                  void 0 === g
                                                ? void 0
                                                : g.amount) || ""
                                            )
                                          ) +
                                            " " +
                                            G
                                    )
                                  : (null == v ? void 0 : v.snackbarType) ===
                                    m.Go.orderPartiallyClaimed
                                  ? ""
                                      .concat(
                                        (
                                          null == v
                                            ? void 0
                                            : null === (b = v.orderDetails) ||
                                              void 0 === b
                                            ? void 0
                                            : b.is_buy
                                        )
                                          ? (0, h.uf)(
                                              Number(
                                                null == v
                                                  ? void 0
                                                  : null ===
                                                      (f = v.orderDetails) ||
                                                    void 0 === f
                                                  ? void 0
                                                  : f.claimable_amount_eth
                                              ) || 0
                                            ) +
                                              " " +
                                              _
                                          : (0, h.uf)(
                                              Number(
                                                (null == v
                                                  ? void 0
                                                  : null ===
                                                      (k = v.orderDetails) ||
                                                    void 0 === k
                                                  ? void 0
                                                  : k.claimable_amount) || ""
                                              )
                                            ) +
                                              " " +
                                              G,
                                        " of total "
                                      )
                                      .concat(
                                        (
                                          null == v
                                            ? void 0
                                            : null === (j = v.orderDetails) ||
                                              void 0 === j
                                            ? void 0
                                            : j.is_buy
                                        )
                                          ? (0, h.uf)(
                                              Number(
                                                null == v
                                                  ? void 0
                                                  : null ===
                                                      (y = v.orderDetails) ||
                                                    void 0 === y
                                                  ? void 0
                                                  : y.amount_eth
                                              ) || 0
                                            ) +
                                              " " +
                                              _
                                          : (0, h.uf)(
                                              Number(
                                                (null == v
                                                  ? void 0
                                                  : null ===
                                                      (w = v.orderDetails) ||
                                                    void 0 === w
                                                  ? void 0
                                                  : w.amount) || ""
                                              )
                                            ) +
                                              " " +
                                              G
                                      )
                                  : (null == v ? void 0 : v.snackbarType) ===
                                      m.Go.orderCancelled ||
                                    (null == v
                                      ? void 0
                                      : null === (a = v.orderDetails) ||
                                        void 0 === a
                                      ? void 0
                                      : a.order_type) === "Limit"
                                  ? ""
                                      .concat(
                                        (
                                          null == v
                                            ? void 0
                                            : null === (r = v.orderDetails) ||
                                              void 0 === r
                                            ? void 0
                                            : r.is_buy
                                        )
                                          ? (0, h.uf)(
                                              Number(
                                                (null == v
                                                  ? void 0
                                                  : null ===
                                                      (l = v.orderDetails) ||
                                                    void 0 === l
                                                  ? void 0
                                                  : l.amount) || ""
                                              )
                                            ) +
                                              " " +
                                              G
                                          : (0, h.uf)(
                                              Number(
                                                null == v
                                                  ? void 0
                                                  : null ===
                                                      (s = v.orderDetails) ||
                                                    void 0 === s
                                                  ? void 0
                                                  : s.amount_eth
                                              ) || 0
                                            ) +
                                              " " +
                                              _,
                                        " at "
                                      )
                                      .concat(
                                        Number(
                                          (null == v
                                            ? void 0
                                            : null === (i = v.orderDetails) ||
                                              void 0 === i
                                            ? void 0
                                            : i.price) || ""
                                        ).toLocaleString("en-US"),
                                        " "
                                      )
                                      .concat(
                                        (
                                          null == v
                                            ? void 0
                                            : null === (d = v.orderDetails) ||
                                              void 0 === d
                                            ? void 0
                                            : d.is_buy
                                        )
                                          ? _
                                          : G
                                      )
                                  : ""
                                      .concat(
                                        Number(
                                          (0, h.uf)(
                                            Number(
                                              null == v
                                                ? void 0
                                                : null ===
                                                    (n = v.orderDetails) ||
                                                  void 0 === n
                                                ? void 0
                                                : n.sell
                                            ) || 0
                                          ) || ""
                                        ).toLocaleString("en-US"),
                                        " "
                                      )
                                      .concat(
                                        (
                                          null == v
                                            ? void 0
                                            : null === (o = v.orderDetails) ||
                                              void 0 === o
                                            ? void 0
                                            : o.is_buy
                                        )
                                          ? G
                                          : _,
                                        " for "
                                      )
                                      .concat(
                                        Number(
                                          (0, h.uf)(
                                            Number(
                                              null == v
                                                ? void 0
                                                : null ===
                                                    (c = v.orderDetails) ||
                                                  void 0 === c
                                                ? void 0
                                                : c.receive
                                            ) || 0
                                          ) || ""
                                        ).toLocaleString("en-US"),
                                        " "
                                      )
                                      .concat(
                                        (
                                          null == v
                                            ? void 0
                                            : null === (x = v.orderDetails) ||
                                              void 0 === x
                                            ? void 0
                                            : x.is_buy
                                        )
                                          ? _
                                          : G
                                      );
                              })(),
                      }),
                    ],
                  }),
                  (0, r.jsx)(x(), {
                    className: "cursor-pointer ml-2",
                    src: ey,
                    alt: "Cross",
                    width: 32,
                    height: 32,
                    onClick: () => j(!1),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    24795: function (e, t, a) {
      "use strict";
      var r = a(2265),
        l = a(42980),
        s = a(16775),
        i = a(79037),
        d = a(65613),
        n = a(83447),
        o = a(82367),
        c = a(55198);
      t.Z = function () {
        let { address: e, isConnected: t, chain: a } = (0, i.m)(),
          { tradeData: x } = (0, o.useGlobalContext)(),
          [u, m] = (0, r.useState)(""),
          [h, p] = (0, r.useState)(""),
          [g, b] = (0, r.useState)(""),
          [f, k] = (0, r.useState)(!0),
          { data: j, refetch: v } = (0, d.K)({
            address: e,
            query: {
              refetchInterval: 1e4,
              enabled: t && (null == a ? void 0 : a.name) === c.Ei,
            },
          }),
          {
            data: y,
            isPending: w,
            refetch: N,
          } = (0, n.N)({
            contracts: [
              {
                address: x.quote_token.contract_addr,
                abi: l.Wo,
                functionName: "balanceOf",
                args: [e],
              },
              {
                address: x.base_token.contract_addr,
                abi: l.Wo,
                functionName: "balanceOf",
                args: [e],
              },
            ],
            query: {
              refetchInterval: 1e4,
              enabled:
                t &&
                (null == a ? void 0 : a.name) === c.Ei &&
                x.quote_token.contract_addr.length > 0 &&
                x.base_token.contract_addr.length > 0,
            },
          });
        return (
          (0, r.useEffect)(() => {
            let e = (e) => {
              v();
            };
            return (
              document.addEventListener("refetchNativeTokenBalance", e),
              () => {
                document.removeEventListener("refetchNativeTokenBalance", e);
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            let e = (e) => {
              N();
            };
            return (
              document.addEventListener("refetchTradeTokenBalance", e),
              () => {
                document.removeEventListener("refetchTradeTokenBalance", e);
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            k(w);
          }, [w]),
          (0, r.useEffect)(() => {
            if (y && void 0 !== y[0].result && void 0 !== y[1].result) {
              let e = (0, s.b)(y[0].result, x.quote_token.decimals),
                t = (0, s.b)(y[1].result, x.base_token.decimals);
              e !== u && m(e), t !== h && p(t);
            }
          }, [y]),
          (0, r.useEffect)(() => {
            j && j.formatted !== g && b(j.formatted);
          }, [j]),
          {
            quoteTokenBalance: u,
            baseTokenBalance: h,
            isTradeTokenPending: f,
            nativeTokenBalance: g,
          }
        );
      };
    },
    22169: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return s;
        },
      });
      var r = a(57042),
        l = a(74769);
      function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, l.m6)((0, r.W)(t));
      }
    },
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
    1297: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/openBox.c413a7dc.svg",
        height: 48,
        width: 48,
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
    e.O(
      0,
      [764, 462, 837, 91, 55, 979, 347, 15, 367, 718, 971, 938, 744],
      function () {
        return e((e.s = 25286));
      }
    ),
      (_N_E = e.O());
  },
]);
