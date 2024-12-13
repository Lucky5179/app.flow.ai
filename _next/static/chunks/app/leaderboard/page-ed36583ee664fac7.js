(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [173],
  {
    30851: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 32188));
    },
    32188: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var r = a(57437),
        n = a(2265),
        s = a(79037),
        d = a(78024),
        o = a(92277),
        l = a(54986),
        c = a(22169);
      let i = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("table", {
          ref: t,
          className: (0, c.cn)("w-full caption-bottom text-sm", a),
          ...n,
        });
      });
      i.displayName = "Table";
      let x = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("thead", {
          ref: t,
          className: (0, c.cn)("[&_tr]:border-b", a),
          ...n,
        });
      });
      x.displayName = "TableHeader";
      let m = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("tbody", {
          ref: t,
          className: (0, c.cn)("[&_tr:last-child]:border-0", a),
          ...n,
        });
      });
      (m.displayName = "TableBody"),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)("tfoot", {
            ref: t,
            className: (0, c.cn)(
              "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
              a
            ),
            ...n,
          });
        }).displayName = "TableFooter");
      let u = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("tr", {
          ref: t,
          className: (0, c.cn)(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            a
          ),
          ...n,
        });
      });
      u.displayName = "TableRow";
      let p = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("th", {
          ref: t,
          className: (0, c.cn)(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            a
          ),
          ...n,
        });
      });
      p.displayName = "TableHead";
      let f = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("td", {
          ref: t,
          className: (0, c.cn)(
            "p-4 align-middle [&:has([role=checkbox])]:pr-0",
            a
          ),
          ...n,
        });
      });
      (f.displayName = "TableCell"),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)("caption", {
            ref: t,
            className: (0, c.cn)("mt-4 text-sm text-muted-foreground", a),
            ...n,
          });
        }).displayName = "TableCaption");
      var g = a(16691),
        h = a.n(g),
        b = a(92173),
        k = a(82367),
        w = a(55198),
        y = a(70051),
        N = a(1297),
        j = a(69034),
        v = () => {
          let { windowWidth: e } = (0, y.Z)(),
            { darkMode: t } = (0, k.useGlobalContext)(),
            { address: a, isConnected: c } = (0, s.m)(),
            [g, v] = (0, n.useState)("PnL Leaderboard"),
            [T, F] = (0, n.useState)([]),
            [B, C] = (0, n.useState)(!1),
            [R, G] = (0, n.useState)({ startTime: "", endTime: "" }),
            [S, L] = (0, n.useState)(!1),
            [Z, I] = (0, n.useState)(w.Ir.week),
            [_, D] = (0, n.useState)(null);
          function E(e) {
            let t = new Date(1e3 * e),
              a = new Intl.DateTimeFormat("en-US", {
                month: "long",
                day: "2-digit",
              }).format(t),
              r = t.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: !1,
                timeZone: "UTC",
              });
            return "".concat(a, ", ").concat(r, " UTC");
          }
          return (
            (0, n.useEffect)(() => {
              (async () => {
                try {
                  C(!0), L(!1);
                  let e = Object.keys(w.Ir).find((e) => w.Ir[e] === Z),
                    t = await b.Z.get(
                      ""
                        .concat(
                          "https://api.multipool.finance",
                          "/get-top-leaderboard"
                        )
                        .concat(
                          c
                            ? "?userAddress=".concat(a, "&period=").concat(e)
                            : "?period=".concat(e)
                        )
                    ),
                    r = t.data.leaderboard;
                  G({
                    startTime: E(t.data.startTime),
                    endTime: E(t.data.endTime),
                  }),
                    r.length > 0 && F(c ? r : r.slice(1, r.length));
                } catch (e) {
                  L(!0), console.log("Error fetching leaderboard stats: ", e);
                } finally {
                  C(!1);
                }
              })();
            }, [a, c, Z]),
            (0, r.jsxs)("div", {
              className:
                "w-full rounded-2xl bg-white dark:bg-darkCardBackground",
              children: [
                (0, r.jsx)(d.Z, {
                  value: g,
                  onChange: (e, t) => v(t),
                  sx: {
                    ".css-1aquho2-MuiTabs-indicator": {
                      backgroundColor: t ? "#4FDFFF" : "#1F242C",
                    },
                    ".MuiTabs-indicator": {
                      width: "30px !important",
                      marginLeft: "16px",
                      borderTopLeftRadius: "4px !important",
                      borderTopRightRadius: "4px !important",
                      backgroundColor: t
                        ? "#4FDFFF !important"
                        : "#1F242C !important",
                    },
                    ".css-ttwr4n": {
                      width: "30px !important",
                      marginLeft: "16px",
                      borderTopLeftRadius: "4px !important",
                      borderTopRightRadius: "4px !important",
                      backgroundColor: t
                        ? "#4FDFFF !important"
                        : "#1F242C !important",
                    },
                  },
                  children: Object.keys(w.QJ).map((e) => {
                    let a = w.QJ[e];
                    return (0, r.jsx)(
                      o.Z,
                      {
                        value: a,
                        label: (0, r.jsx)("div", {
                          className: "flex justify-center items-center",
                          children: (0, r.jsx)("p", {
                            className: "".concat(
                              a === _ && a !== g ? "opacity-70" : "opacity-100",
                              " transition-all duration-300"
                            ),
                            children: a,
                          }),
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
                            a === g
                              ? t
                                ? "#FFFFFF"
                                : "#1F242C"
                              : a === _
                              ? t
                                ? "#768398"
                                : "#1F242C"
                              : t
                              ? "#768398"
                              : "#AAB9D0",
                          paddingLeft: "16px",
                          paddingRight: "0px",
                          paddingTop: "16px",
                          paddingBottom: "14px",
                        },
                        onMouseEnter: () => D(a),
                        onMouseLeave: () => D(null),
                      },
                      e
                    );
                  }),
                }),
                (0, r.jsx)(l.Z, { className: "bg-drawer dark:bg-darkDrawer" }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row justify-between items-center px-4 py-4 md:py-3 gap-3 md:gap-0",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "relative flex w-full md:w-fit p-1 gap-2 rounded-lg bg-backgroundGray dark:bg-darkBackgroundGray",
                      children: [
                        Object.keys(w.Ir).map((e) => {
                          let t = w.Ir[e];
                          return (0, r.jsx)(
                            "p",
                            {
                              className:
                                "flex-1 py-[10px] px-1 sm:px-2 rounded-[8px] text-center font-normal sm:font-medium text-[10px] sm:text-xs text-nowrap cursor-pointer text-textBlack dark:text-white transition-all duration-300 bg-transparent z-10",
                              onClick: () => {
                                I(t);
                              },
                              children: t,
                            },
                            e
                          );
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "w-1/2 h-9 absolute top-1/2 -translate-y-1/2 rounded-lg z-0 ".concat(
                              Z === w.Ir.all
                                ? "bg-buttonBackground/30 w-[calc(25%-8px)] md:w-[calc(21%-0.73px)]"
                                : Z === w.Ir.month
                                ? "bg-buttonBackground/30 translate-x-[calc(100%+8px)] md:translate-x-[67.81px] w-[calc(25%-8px)] md:w-[calc(26%+0.79px)]"
                                : Z === w.Ir.week
                                ? "bg-buttonBackground/30 translate-x-[calc(200%+16px)] md:translate-x-[150.14px] w-[calc(25%-8px)] md:w-[calc(25%-1.02px)]"
                                : Z === w.Ir.today
                                ? "bg-buttonBackground/30 translate-x-[calc(300%+24px)] md:translate-x-[228.44px] w-[calc(25%-8px)] md:w-[calc(17%+0.35px)]"
                                : void 0,
                              " transition-all duration-300"
                            ),
                        }),
                      ],
                    }),
                    (0, r.jsx)("p", {
                      className: "".concat(
                        Z === w.Ir.all ? "hidden" : "flex",
                        "  font-normal text-xs text-center leading-[150%] tracking-[0%] text-textGray dark:text-darkTextGray"
                      ),
                      children: "Time Period: "
                        .concat(R.startTime, " — ")
                        .concat(R.endTime),
                    }),
                  ],
                }),
                (0, r.jsx)(l.Z, { className: "bg-drawer dark:bg-darkDrawer" }),
                (0, r.jsx)("div", {
                  className:
                    "relative h-[400px] md:h-[600px] flex flex-col gap-1 px-4 pb-2 md:pb-4 overflow-auto",
                  children:
                    !(T.length > 0) || B || S
                      ? (0, r.jsxs)("div", {
                          className:
                            "h-full flex flex-col justify-center items-center",
                          children: [
                            (0, r.jsx)(h(), {
                              className: "".concat(B && "w-8 h-8 animate-spin"),
                              src: B ? j.Z : N.Z,
                              alt: "Open Box",
                            }),
                            (0, r.jsx)("p", {
                              className: "".concat(
                                B ? "hidden" : "flex",
                                " text-sm text-textGray dark:text-darkTextGray mt-1"
                              ),
                              children: S
                                ? "Something's up with the server"
                                : "No Data",
                            }),
                          ],
                        })
                      : (0, r.jsxs)(i, {
                          className: "border-separate border-spacing-y-2",
                          children: [
                            (0, r.jsx)(x, {
                              className:
                                "sticky top-0 -translate-y-2 md:translate-y-0 z-10 bg-white border-spacing-y-2 dark:bg-darkCardBackground",
                              children: (0, r.jsxs)(u, {
                                className:
                                  "hover:bg-white hover:dark:bg-darkCardBackground",
                                children: [
                                  (0, r.jsx)(p, {
                                    className:
                                      "pl-0 font-normal text-sm text-textGray dark:text-darkTextGray",
                                    children: "Rank",
                                  }),
                                  (0, r.jsx)(p, {
                                    className:
                                      "font-normal text-sm text-textGray dark:text-darkTextGray",
                                    children: "Address",
                                  }),
                                  (0, r.jsx)(p, {
                                    className:
                                      "font-normal text-right text-sm text-textGray dark:text-darkTextGray",
                                    children: "Realized PnL (%)",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsx)(m, {
                              children: T.map((t, n) =>
                                (0, r.jsxs)(
                                  u,
                                  {
                                    className: ""
                                      .concat(
                                        1 === t.rank &&
                                          0 === n &&
                                          t.address === a &&
                                          "hidden",
                                        " rounded-[8px] bg-backgroundGray dark:bg-darkBackgroundGray sm:hover:bg-backgroundGray sm:dark:hover:bg-darkBackgroundGray/60 "
                                      )
                                      .concat(
                                        t.address === a &&
                                          "outline outline-buttonBackground bg-transparent dark:bg-transparent",
                                        " -translate-y-2 md:translate-y-0"
                                      ),
                                    children: [
                                      (0, r.jsx)(f, {
                                        className:
                                          "rounded-l-[8px] py-0 pl-0 font-medium text-sm text-textBlack dark:text-white ",
                                        children: (0, r.jsx)("div", {
                                          className:
                                            "w-[38px] h-[38px] flex justify-center items-center rounded-[8px] font-medium text-sm ".concat(
                                              3 >= Number(t.rank)
                                                ? "text-textBlack bg-buttonBackground"
                                                : "text-textBlack dark:text-white"
                                            ),
                                          children:
                                            -1 === t.rank ? "50+" : t.rank,
                                        }),
                                      }),
                                      (0, r.jsx)(f, {
                                        className: "py-0",
                                        children: (0, r.jsx)("p", {
                                          className:
                                            "w-fit sm:font-medium text-sm text-textBlack dark:text-white hover:text-buttonBackground dark:hover:text-buttonBackground cursor-pointer",
                                          onClick: () => {
                                            window.open(
                                              ""
                                                .concat(w.ZM, "/address/")
                                                .concat(t.address),
                                              "_blank"
                                            );
                                          },
                                          children:
                                            a === t.address
                                              ? "You"
                                              : e && e > 640
                                              ? t.address
                                              : ""
                                                  .concat(
                                                    t.address.slice(0, 4),
                                                    "..."
                                                  )
                                                  .concat(t.address.slice(-4)),
                                        }),
                                      }),
                                      (0, r.jsxs)(f, {
                                        className:
                                          "rounded-r-[8px] py-0 font-medium text-sm text-right ".concat(
                                            "-" === t.pnl.toString().slice(0, 1)
                                              ? "text-textRed"
                                              : "text-textGreen"
                                          ),
                                        children: [
                                          "-" === t.pnl.toString().slice(0, 1)
                                            ? t.pnl
                                            : "+".concat(t.pnl),
                                          "%",
                                        ],
                                      }),
                                    ],
                                  },
                                  n
                                )
                              ),
                            }),
                          ],
                        }),
                }),
              ],
            })
          );
        };
    },
    70051: function (e, t, a) {
      "use strict";
      var r = a(2265);
      t.Z = function () {
        let [e, t] = (0, r.useState)();
        return (
          (0, r.useEffect)(() => {
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
    22169: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return s;
        },
      });
      var r = a(57042),
        n = a(74769);
      function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, n.m6)((0, r.W)(t));
      }
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
  },
  function (e) {
    e.O(0, [462, 837, 979, 367, 971, 938, 744], function () {
      return e((e.s = 30851));
    }),
      (_N_E = e.O());
  },
]);
