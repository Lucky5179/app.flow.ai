"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [718],
  {
    11749: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(57437),
        a = n(2265),
        r = n(16691),
        l = n.n(r),
        s = n(82367),
        u = {
          src: "/_next/static/media/loaderDark.3fb31291.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = n(69034),
        o = (e) => {
          let {
              label: t,
              handleClick: n,
              theme: r,
              isDisabled: o = !1,
              isNavbar: p = !1,
              isLoading: m = !1,
              isLoaderDark: c = !1,
              loaderDimensions: y = 18,
            } = e,
            [x, b] = (0, a.useState)(!1),
            { darkMode: f } = (0, s.useGlobalContext)();
          return (
            (0, a.useEffect)(() => {
              b(!0);
            }, []),
            (0, i.jsx)("button", {
              className: "min-w-6 h-12 "
                .concat(
                  x && p
                    ? "rounded-lg text-xs py-2.5"
                    : "w-full rounded-[10px] text-base",
                  " "
                )
                .concat(
                  m ? "py-3" : "py-4",
                  " flex justify-center items-center px-4 leading-[100%] font-medium text-textBlack transition-all duration-300 "
                )
                .concat(r),
              onClick: () => n(),
              disabled: !!x && o,
              children:
                x && !m
                  ? t
                  : (0, i.jsx)(l(), {
                      src: c ? u : f ? d.Z : u,
                      alt: "Loader icon",
                      className: "animate-spin",
                      width: y,
                      height: y,
                    }),
            })
          );
        };
    },
    47757: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(57437),
        a = n(16691),
        r = n.n(a),
        l = n(82367),
        s = {
          src: "/_next/static/media/arrowSmallRightDark.5cdb4e3d.svg",
          height: 10,
          width: 6,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = {
          src: "/_next/static/media/arrowSmallRightLight.3d6c508f.svg",
          height: 10,
          width: 6,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            { darkMode: a } = (0, l.useGlobalContext)();
          return (0, i.jsxs)("div", {
            className: "w-full flex justify-between items-center",
            children: [
              (0, i.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: [
                  (0, i.jsx)("p", {
                    className: "text-sm ".concat(
                      "Fills" === e && "0" !== t
                        ? "text-textBlack dark:text-white"
                        : "text-textGray dark:text-darkTextGray"
                    ),
                    children: e,
                  }),
                  (0, i.jsx)(r(), {
                    className: "".concat(
                      "Fills" === e && "0" !== t ? "static" : "hidden",
                      " "
                    ),
                    src: a ? s : u,
                    alt: "Right Arrow",
                  }),
                ],
              }),
              (0, i.jsxs)("p", {
                className: "text-sm font-medium text-textBlack dark:text-white",
                children: [
                  t,
                  " ",
                  (0, i.jsx)("span", {
                    className:
                      "text-[10px] font-normal text-textGray dark:text-darkTextGray",
                    children: n,
                  }),
                ],
              }),
            ],
          });
        };
    },
    8492: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      });
      var i = n(57437),
        a = n(2265),
        r = n(79037),
        l = n(94629),
        s = n(45233),
        u = n(5119),
        d = n(54986),
        o = n(16691),
        p = n.n(o),
        m = n(55198),
        c = n(82367),
        y = n(56598),
        x = n(11749),
        b = n(64160),
        f = n(20086),
        h = {
          src: "/_next/static/media/usdt.1997fbab.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = {
          src: "/_next/static/media/ethToken.66d1dae5.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = n(2916),
        g = n(69034),
        k = {
          src: "/_next/static/media/statusSuccess.4d683da3.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: "/_next/static/media/statusFailed.8fc5923a.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/arrowRightLight.9d9504a8.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        N = {
          src: "/_next/static/media/arrowRightDark.47aa7b8a.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        j = n(70051),
        S = n(47757);
      let P = n(27691),
        C = "0x709638A19Fe81F972c18ac08191f96aFB7182Ecd";
      var O = (e) => {
        var t, n, o, O, M, I, F;
        let { setIsOpen: L, isOrderNew: E, isCancel: B, order: q } = e,
          [G, A] = (0, a.useState)("Review"),
          [Z, R] = (0, a.useState)(),
          { address: D } = (0, r.m)(),
          { windowWidth: W } = (0, j.Z)(),
          {
            tradeData: H,
            darkMode: U,
            orderHistory: J,
          } = (0, c.useGlobalContext)(),
          Y = H.quote_token.isSell ? H.quote_token : H.base_token,
          z = H.quote_token.isSell ? H.base_token : H.quote_token,
          {
            data: V,
            status: K,
            isLoading: Q,
          } = (0, l.A)({ hash: Z, query: { enabled: !!Z } }),
          { data: X } = (0, s.u)({
            address: Y.contract_addr,
            abi: Y.abi,
            functionName: "allowance",
            args: [D, C],
          }),
          {
            writeContract: $,
            status: ee,
            isPending: et,
            isError: en,
            error: ei,
            data: ea,
          } = (0, u.S)(),
          {
            writeContract: er,
            data: el,
            isPending: es,
            isSuccess: eu,
            isError: ed,
            error: eo,
          } = (0, u.S)(),
          {
            writeContract: ep,
            isPending: em,
            isSuccess: ec,
            isError: ey,
            data: ex,
            error: eb,
          } = (0, u.S)(),
          ef = () => {
            document.dispatchEvent(
              new CustomEvent("orderProcessing", {
                detail: { hash: null == q ? void 0 : q.tx_hashes[0] },
              })
            );
          },
          eh = (e) => {
            e.length > 0 &&
              document.dispatchEvent(
                new CustomEvent("orderProcessingCancelled", {
                  detail: { hash: e },
                })
              );
          },
          ev = () => {
            document.dispatchEvent(new CustomEvent("pendingOrderAdded"));
          },
          e_ = (e, t, n) => {
            document.dispatchEvent(
              new CustomEvent("snackbarToggle", {
                detail: { type: e, hash: t, order_id: n },
              })
            );
          },
          eg = () => {
            var e;
            let t = {
                order_id: "-",
                time_stamp: Date.now().toString(),
                token_pair_name: H.token_pair_name,
                order_type: H.type,
                is_buy: !H.base_token.isSell,
                price: H.price.toString(),
                filled_amount: 0,
                amount: H.base_token.isSell ? H.receive : H.sell,
                amount_eth: H.base_token.isSell ? H.sell : H.receive,
                claimed_amount: 0,
                claimable_amount: 0,
                order_status: m.iM.pending,
                user_address: D,
                isFullyFilled: !1,
                totalAmount: 0,
                tx_hashes: [ex],
                sell: H.sell,
                receive: H.receive,
              },
              n = JSON.parse(localStorage.getItem("pendingOrders") || "[]");
            n.unshift(t),
              localStorage.setItem("pendingOrders", JSON.stringify(n || [])),
              localStorage.setItem(
                "latestOrderId",
                (null === (e = J[0]) || void 0 === e ? void 0 : e.order_id) ||
                  "-1"
              ),
              ev();
          },
          ek = () => {
            var e;
            let t = JSON.parse(
              localStorage.getItem("processingOrders") || "[]"
            );
            t.unshift(q),
              localStorage.setItem("processingOrders", JSON.stringify(t || [])),
              localStorage.setItem(
                "latestOrderId",
                (null === (e = J[0]) || void 0 === e ? void 0 : e.order_id) ||
                  "-1"
              ),
              ef();
          };
        (0, a.useEffect)(() => {
          ((em &&
            (null == q ? void 0 : q.order_status) !== m.iM.pending &&
            q) ||
            (es && q)) &&
            ek();
        }, [q, em, es]),
          (0, a.useEffect)(() => {
            ((ey && (null == q ? void 0 : q.order_status) !== m.iM.pending) ||
              ed) &&
              q &&
              eh(null == q ? void 0 : q.tx_hashes[0]);
          }, [q, ey, ed]),
          (0, a.useEffect)(() => {
            if (
              ((em || Q || es || et) && A("Loading"),
              ec && (A("Success"), E && eg()),
              eu && A("Success"),
              ey || ed || en)
            ) {
              var e;
              "User rejected the request" ===
              (null === (e = eb || eo || ei) || void 0 === e
                ? void 0
                : e.message.split(".")[0])
                ? (e_(m.Go.orderRejected), A("Review"))
                : A("Faliure");
            }
          }, [em, et, Q, es, ec, ey, en, eu, ed]),
          (0, a.useEffect)(() => {
            "success" === ee && void 0 !== ea && R(ea);
          }, [ee, ea]),
          (0, a.useEffect)(() => {
            ec &&
              void 0 !== ex &&
              ((null == q ? void 0 : q.order_status) === m.iM.filled
                ? e_(m.Go.orderClaimed, ex, q.order_id)
                : (null == q ? void 0 : q.order_status) === m.iM.partiallyFilled
                ? e_(m.Go.orderPartiallyClaimed, ex, q.order_id)
                : e_(m.Go.orderPlaced, ex));
          }, [ec, ex]),
          (0, a.useEffect)(() => {
            eu &&
              void 0 !== el &&
              e_(m.Go.orderCancelled, el, null == q ? void 0 : q.order_id);
          }, [eu, el]),
          (0, a.useEffect)(() => {
            "success" === K && void 0 !== V && eT();
          }, [V, K]);
        let eT = () => {
          if (
            E ||
            ((null == q ? void 0 : q.buttonLabel) !== "Claim" &&
              (null == q ? void 0 : q.buttonLabel) !== "Partial Claim")
          ) {
            if (H.type === m.i8.market)
              ep({
                address: C,
                abi: _,
                functionName: "insertMarketOrder",
                args: [
                  !H.base_token.isSell,
                  Number(H.sell) * 10 ** Y.decimals,
                  H.base_token.isSell
                    ? H.marketPrice - 50 > 1
                      ? (H.marketPrice - 50) * 1e6
                      : 1e6
                    : 0xffffffffffff,
                ],
              });
            else if (H.type === m.i8.limit) {
              let e =
                BigInt(
                  new P(
                    Number(H.sell) *
                      (H.base_token.isSell
                        ? 10 ** H.base_token.decimals
                        : 10 ** H.quote_token.decimals)
                  )
                    .times(100)
                    .toFixed(0)
                ) / BigInt(100);
              ep({
                address: C,
                abi: _,
                functionName: "insertLimitOrder",
                args: [
                  !H.base_token.isSell,
                  BigInt(Number(H.price) * 10 ** H.quote_token.decimals),
                  e,
                ],
              });
            }
          } else
            ep({
              address: C,
              abi: _,
              functionName: "claimOrder",
              args: [null == q ? void 0 : q.order_id],
            });
        };
        return (0, i.jsx)("div", {
          className:
            "w-full md:w-fit overflow-hidden rounded-t-2xl md:rounded-2xl overflow-y-scroll",
          children:
            "Review" !== G
              ? (0, i.jsxs)("div", {
                  className:
                    "w-full md:w-[390px] flex flex-col justify-center items-center dark:bg-darkCardBackground",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "w-full flex justify-between items-center p-4",
                      children: [
                        (0, i.jsx)("h1", {
                          className:
                            "text-base font-medium text-textBlack dark:text-white",
                          children: "Review Order",
                        }),
                        (0, i.jsx)(p(), {
                          className: "cursor-pointer",
                          src: U ? f.Z : b.Z,
                          alt: "Cross",
                          onClick: () => L(!1),
                        }),
                      ],
                    }),
                    (0, i.jsx)(d.Z, {
                      className: "w-full bg-drawer dark:bg-darkDrawer",
                    }),
                    (0, i.jsx)(p(), {
                      className: ""
                        .concat("Loading" === G ? "animate-spin" : "", " my-6 ")
                        .concat(
                          U && "Loading" !== G ? "bg-white rounded-full" : ""
                        ),
                      src: "Loading" === G ? g.Z : "Success" === G ? k : T,
                      alt: "Loader",
                      width: 64,
                      height: 64,
                    }),
                    (0, i.jsx)("p", {
                      className: "font-medium text-sm ".concat(
                        en || et ? "mb-8" : "mb-3",
                        " dark:text-white"
                      ),
                      children:
                        "Loading" === G
                          ? em || es
                            ? "Confirm Order"
                            : "Approve allowance"
                          : "Success" === G
                          ? "Order Submitted"
                          : "Faliure" === G && !0 === en
                          ? "Approval Failed"
                          : "Order Failed",
                    }),
                    (0, i.jsxs)("div", {
                      className: "".concat(
                        en || et ? "hidden" : "flex",
                        " justify-between items-center rounded-lg p-[10px] mb-8 gap-2.5 bg-backgroundGray dark:bg-darkBackgroundGray"
                      ),
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex gap-1.5",
                          children: [
                            (0, i.jsx)(p(), {
                              src: (null == q ? void 0 : q.is_buy)
                                ? H.quote_token.icon_link
                                : (
                                    null == H
                                      ? void 0
                                      : null === (t = H.base_token) ||
                                        void 0 === t
                                      ? void 0
                                      : t.isSell
                                  )
                                ? H.base_token.icon_link
                                : H.quote_token.icon_link,
                              alt: H.base_token.name || "",
                              width: 16,
                              height: 16,
                            }),
                            (0, i.jsxs)("p", {
                              className: "text-xs dark:text-white",
                              children: [
                                (null == q ? void 0 : q.is_buy)
                                  ? Number(q.amount).toLocaleString("en-US")
                                  : H.sell,
                                " ",
                                (null == q ? void 0 : q.is_buy)
                                  ? null == q
                                    ? void 0
                                    : null === (n = q.token_pair_name) ||
                                      void 0 === n
                                    ? void 0
                                    : n.split("/")[1]
                                  : H.base_token.isSell
                                  ? H.base_token.symbol
                                  : H.quote_token.symbol,
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)(p(), { src: U ? N : w, alt: "Arrow" }),
                        (0, i.jsxs)("div", {
                          className: "flex gap-1.5",
                          children: [
                            (0, i.jsx)(p(), {
                              src: (null == q ? void 0 : q.is_buy)
                                ? H.base_token.icon_link
                                : (
                                    null == H
                                      ? void 0
                                      : null === (o = H.base_token) ||
                                        void 0 === o
                                      ? void 0
                                      : o.isSell
                                  )
                                ? H.quote_token.icon_link
                                : H.base_token.icon_link,
                              alt: H.quote_token.name || "",
                              width: 16,
                              height: 16,
                            }),
                            (0, i.jsxs)("p", {
                              className: "text-xs dark:text-white",
                              children: [
                                (null == q ? void 0 : q.is_buy)
                                  ? (0, y.uf)(
                                      Number(null == q ? void 0 : q.amount_eth)
                                    )
                                  : H.receive,
                                " ",
                                H.base_token.isSell
                                  ? H.quote_token.symbol
                                  : H.base_token.symbol,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("p", {
                      className: "text-xs text-center mb-6 px-4 ".concat(
                        ey || ed || en
                          ? "text-textRed dark:text-textRed cursor-default"
                          : ex || el
                          ? "text-textBlack dark:text-buttonBackground cursor-pointer"
                          : "text-textGray dark:text-darkTextGray cursor-default"
                      ),
                      onClick: () => {
                        "Loading" !== G &&
                          (ex || el) &&
                          window.open(
                            "".concat(m.ZM, "/tx/").concat(ex || el),
                            "_blank"
                          );
                      },
                      children:
                        ey || ed || en
                          ? null === (O = eb || eo) || void 0 === O
                            ? void 0
                            : O.message.split(".")[0]
                          : ex || el
                          ? "View on Explorer"
                          : "Proceed in Your Wallet",
                    }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className:
                    "flex flex-col justify-center items-center dark:bg-darkCardBackground",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "w-full flex justify-between items-center p-4",
                      children: [
                        (0, i.jsx)("h1", {
                          className: "text-base font-medium dark:text-white",
                          children: "Review Order",
                        }),
                        (0, i.jsx)(p(), {
                          className: "cursor-pointer",
                          src: U ? f.Z : b.Z,
                          alt: "Cross",
                          onClick: () => L(!1),
                        }),
                      ],
                    }),
                    (0, i.jsx)(d.Z, {
                      className: "w-full bg-drawer dark:bg-darkDrawer",
                    }),
                    (0, i.jsxs)("div", {
                      className: "w-full flex flex-col md:flex-row",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "w-full md:w-[390px] flex flex-col items-center justify-center py-6 px-4",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "w-full flex flex-col items-start p-4 gap-3 rounded-2xl bg-backgroundGray dark:bg-darkBackgroundGray",
                              children: [
                                (0, i.jsx)("p", {
                                  className: "font-medium dark:text-white",
                                  children: E
                                    ? H.base_token.isSell
                                      ? "You Sell"
                                      : "You Pay"
                                    : "Filled",
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "w-full flex justify-between items-center",
                                  children: [
                                    (0, i.jsxs)("p", {
                                      className: "text-lg dark:text-white",
                                      children: [
                                        E
                                          ? H.sell
                                          : (null == q ? void 0 : q.is_buy)
                                          ? (0, y.uf)(
                                              (null == q
                                                ? void 0
                                                : q.claimable_amount) || 0
                                            )
                                          : (0, y.uf)(
                                              (null == q
                                                ? void 0
                                                : q.claimable_amount_eth) || 0,
                                              18
                                            ),
                                        (0, i.jsx)("span", {
                                          className:
                                            "ml-1 text-xs text-textGray dark:text-darkTextGray",
                                          children: E
                                            ? Y.symbol
                                            : null == q
                                            ? void 0
                                            : null ===
                                                (M = q.token_pair_name) ||
                                              void 0 === M
                                            ? void 0
                                            : M.split("/")[
                                                (null == q ? void 0 : q.is_buy)
                                                  ? 1
                                                  : 0
                                              ],
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)(p(), {
                                      className: "cursor-pointer",
                                      src: E
                                        ? Y.icon_link
                                        : (null == q ? void 0 : q.is_buy)
                                        ? h
                                        : v,
                                      alt: Y.name || "USDT",
                                      width: 32,
                                      height: 32,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "w-full ".concat(
                                E ? "hidden" : "flex flex-col",
                                " items-start p-4 gap-3 rounded-2xl mt-3 bg-backgroundGray dark:bg-darkBackgroundGray"
                              ),
                              children: [
                                (0, i.jsx)("p", {
                                  className: "font-medium dark:text-white",
                                  children: "Remaining",
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "w-full flex justify-between items-center",
                                  children: [
                                    (0, i.jsxs)("p", {
                                      className: "text-lg dark:text-white",
                                      children: [
                                        (null == q ? void 0 : q.is_buy)
                                          ? Number(
                                              (null == q ? void 0 : q.amount) ||
                                                0
                                            ) -
                                            ((null == q
                                              ? void 0
                                              : q.filled_amount) || 0)
                                          : ((null == q
                                              ? void 0
                                              : q.totalAmountEth) || 0) -
                                            ((null == q
                                              ? void 0
                                              : q.filled_amount_eth) || 0),
                                        " ",
                                        (0, i.jsx)("span", {
                                          className:
                                            "ml-1 text-xs text-textGray dark:text-darkTextGray",
                                          children:
                                            null == q
                                              ? void 0
                                              : null ===
                                                  (I = q.token_pair_name) ||
                                                void 0 === I
                                              ? void 0
                                              : I.split("/")[
                                                  (
                                                    null == q
                                                      ? void 0
                                                      : q.is_buy
                                                  )
                                                    ? 1
                                                    : 0
                                                ],
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)(p(), {
                                      className: "cursor-pointer",
                                      src: (null == q ? void 0 : q.is_buy)
                                        ? h
                                        : v,
                                      alt: "WETH Or USDT",
                                      width: 32,
                                      height: 32,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "w-full flex flex-col items-start p-4 gap-3 rounded-2xl mt-3 bg-backgroundGray dark:bg-darkBackgroundGray",
                              children: [
                                (0, i.jsx)("p", {
                                  className: "font-medium dark:text-white",
                                  children: "You Receive",
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "w-full flex justify-between items-center",
                                  children: [
                                    (0, i.jsxs)("p", {
                                      className: "text-lg dark:text-white",
                                      children: [
                                        H.type === m.i8.market ? "~" : "",
                                        E
                                          ? H.receive
                                          : (null == q ? void 0 : q.is_buy)
                                          ? (0, y.uf)(
                                              (null == q
                                                ? void 0
                                                : q.claimable_amount_eth) || 0,
                                              18
                                            )
                                          : (0, y.uf)(
                                              (null == q
                                                ? void 0
                                                : q.claimable_amount) || 0
                                            ),
                                        (0, i.jsx)("span", {
                                          className:
                                            "ml-1 text-xs text-textGray dark:text-darkTextGray",
                                          children: E
                                            ? z.symbol
                                            : null == q
                                            ? void 0
                                            : null ===
                                                (F = q.token_pair_name) ||
                                              void 0 === F
                                            ? void 0
                                            : F.split("/")[
                                                (null == q ? void 0 : q.is_buy)
                                                  ? 0
                                                  : 1
                                              ],
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)(p(), {
                                      className: "cursor-pointer",
                                      src: E
                                        ? z.icon_link
                                        : (null == q ? void 0 : q.is_buy)
                                        ? v
                                        : h,
                                      alt: z.name || "USDT",
                                      width: 32,
                                      height: 32,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)(d.Z, {
                          className: "bg-drawer dark:bg-darkDrawer",
                          orientation: W && W > 768 ? "vertical" : "horizontal",
                          flexItem: !0,
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "w-full md:w-[390px] flex flex-col py-0 md:py-6 px-4",
                          children: (0, i.jsxs)("div", {
                            className:
                              "flex flex-col gap-2 py-6 h-full w-full overflow-y-auto",
                            children: [
                              E
                                ? (0, S.Z)(
                                    "Fee",
                                    ""
                                      .concat(
                                        (0.002 * Number(H.receive)).toFixed(6),
                                        " "
                                      )
                                      .concat(z.symbol)
                                  )
                                : (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                      (0, S.Z)(
                                        "Order ID",
                                        (null == q ? void 0 : q.order_id) || ""
                                      ),
                                      (0, S.Z)(
                                        "Time Placed",
                                        ""
                                          .concat(
                                            new Date(
                                              (null == q
                                                ? void 0
                                                : q.time_stamp.split(" ")[0]) ||
                                                ""
                                            ).getDate(),
                                            "."
                                          )
                                          .concat(
                                            new Date(
                                              (null == q
                                                ? void 0
                                                : q.time_stamp.split(" ")[0]) ||
                                                ""
                                            ).getMonth() + 1,
                                            "."
                                          )
                                          .concat(
                                            new Date(
                                              (null == q
                                                ? void 0
                                                : q.time_stamp.split(" ")[0]) ||
                                                ""
                                            ).getFullYear(),
                                            " "
                                          )
                                          .concat(
                                            (null == q
                                              ? void 0
                                              : q.time_stamp.split(" ")[1]) ||
                                              ""
                                          )
                                      ),
                                    ],
                                  }),
                              (0, S.Z)("Pair", "WETH/USDT"),
                              (0, S.Z)(
                                "Order Type",
                                E
                                  ? H.type
                                  : (null == q ? void 0 : q.order_type) || ""
                              ),
                              (0, S.Z)(
                                "Side",
                                E
                                  ? H.base_token.isSell
                                    ? "Sell"
                                    : "Buy"
                                  : (null == q ? void 0 : q.is_buy)
                                  ? "Buy"
                                  : "Sell"
                              ),
                              (0, S.Z)(
                                "Price",
                                E
                                  ? (0, y.uf)(H.price)
                                  : (0, y.uf)(
                                      Number(null == q ? void 0 : q.price)
                                    ) || ""
                              ),
                              E
                                ? (0, i.jsx)(i.Fragment, {})
                                : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className:
                                          "w-full flex justify-between items-center mb-3 hidden",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-sm text-textGray dark:text-darkTextGray",
                                            children: "Fills",
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-sm font-medium  dark:text-white",
                                            children: "1",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "w-full flex justify-between items-center mb-3 hidden",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-sm text-textGray dark:text-darkTextGray",
                                            children: "% Filled",
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-sm font-medium dark:text-white",
                                            children: "N/A",
                                          }),
                                        ],
                                      }),
                                      (0, S.Z)(
                                        "Filled",
                                        (0, y.uf)(
                                          (null == q
                                            ? void 0
                                            : q.filled_amount) || 0
                                        ),
                                        (null == q ? void 0 : q.is_buy)
                                          ? H.quote_token.symbol
                                          : H.base_token.symbol
                                      ),
                                      (0, S.Z)(
                                        "Amount",
                                        (0, y.uf)(
                                          Number(
                                            (null == q ? void 0 : q.is_buy)
                                              ? null == q
                                                ? void 0
                                                : q.amount
                                              : null == q
                                              ? void 0
                                              : q.amount_eth
                                          )
                                        ),
                                        (null == q ? void 0 : q.is_buy)
                                          ? H.quote_token.symbol
                                          : H.base_token.symbol
                                      ),
                                      (0, S.Z)(
                                        "Claimed",
                                        (null == q ? void 0 : q.is_buy)
                                          ? (0, y.uf)(
                                              (null == q
                                                ? void 0
                                                : q.claimed_amount_eth) || 0,
                                              18
                                            )
                                          : (0, y.uf)(
                                              (null == q
                                                ? void 0
                                                : q.claimed_amount) || 0
                                            ),
                                        (null == q ? void 0 : q.is_buy)
                                          ? H.base_token.symbol
                                          : H.quote_token.symbol
                                      ),
                                      (0, S.Z)(
                                        "Claimable",
                                        (null == q ? void 0 : q.is_buy)
                                          ? (0, y.uf)(
                                              (null == q
                                                ? void 0
                                                : q.claimable_amount_eth) || 0,
                                              18
                                            )
                                          : (0, y.uf)(
                                              (null == q
                                                ? void 0
                                                : q.claimable_amount) || 0
                                            ),
                                        (null == q ? void 0 : q.is_buy)
                                          ? H.base_token.symbol
                                          : H.quote_token.symbol
                                      ),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "w-full flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-sm text-textGray dark:text-darkTextGray",
                                            children: "Status",
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "w-fit text-[10px] font-medium rounded py-1 px-1.5 bg-opacity-20 ".concat(
                                                (((null == q
                                                  ? void 0
                                                  : q.order_status) ===
                                                  m.iM.open ||
                                                  (null == q
                                                    ? void 0
                                                    : q.order_status) ===
                                                    m.iM.filled) &&
                                                  "text-textGreen bg-textGreen") ||
                                                  (((null == q
                                                    ? void 0
                                                    : q.order_status) ===
                                                    m.iM.partiallyFilled ||
                                                    (null == q
                                                      ? void 0
                                                      : q.order_status) ===
                                                      m.iM.partiallyClaimed) &&
                                                    "text-textOrange bg-textOrange") ||
                                                  ((null == q
                                                    ? void 0
                                                    : q.order_status) ===
                                                    m.iM.cancelled &&
                                                    "text-textRed bg-textRed") ||
                                                  ((null == q
                                                    ? void 0
                                                    : q.order_status) ===
                                                    m.iM.claimed &&
                                                    "text-textBlue bg-textBlue")
                                              ),
                                            children:
                                              null == q
                                                ? void 0
                                                : q.order_status,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(d.Z, {
                      className: "w-full bg-drawer dark:bg-darkDrawer",
                    }),
                    (0, i.jsx)("div", {
                      className: "w-full px-4 py-6",
                      children: (0, i.jsx)(x.Z, {
                        isLoading: void 0 === X,
                        label: "".concat(
                          B
                            ? "Cancel "
                            : Number(X) >= 1e18 * Number(H.sell)
                            ? "Confirm "
                            : "Approve & Confirm ",
                          "Order"
                        ),
                        theme: "".concat(
                          B
                            ? "bg-buttonBackgroundRed text-white hover:bg-buttonBackgroundRedHover"
                            : "bg-buttonBackground hover:bg-buttonBackgroundHover"
                        ),
                        handleClick: () => {
                          E
                            ? Number(X) >=
                              Number(H.sell) *
                                10 **
                                  (H.base_token.isSell
                                    ? H.base_token.decimals
                                    : H.quote_token.decimals)
                              ? eT()
                              : $({
                                  address: Y.contract_addr,
                                  abi: Y.abi,
                                  functionName: "approve",
                                  args: [C, m.n1],
                                })
                            : B
                            ? er({
                                address: C,
                                abi: _,
                                functionName: "cancelOrder",
                                args: [null == q ? void 0 : q.order_id],
                              })
                            : eT();
                        },
                      }),
                    }),
                  ],
                }),
        });
      };
    },
    12367: function (e, t, n) {
      var i = n(2265);
      t.Z = function (e) {
        let [t, n] = (0, i.useState)([]);
        return (
          (0, i.useEffect)(() => {
            n(
              JSON.parse(localStorage.getItem("processingOrders") || "[]").map(
                (e) => (null == e ? void 0 : e.tx_hashes[0])
              )
            );
          }, [e]),
          (0, i.useEffect)(() => {
            let e = (e) => {
                e.detail.hash && n((t) => [...t, e.detail.hash]);
              },
              t = (e) => {
                if (e.detail.hash) {
                  let t = JSON.parse(
                    localStorage.getItem("processingOrders") || "[]"
                  ).filter((t) => {
                    var n;
                    return (
                      (null == t
                        ? void 0
                        : null === (n = t.tx_hashes) || void 0 === n
                        ? void 0
                        : n[0]) !== e.detail.hash
                    );
                  });
                  localStorage.setItem(
                    "processingOrders",
                    JSON.stringify(t || [])
                  ),
                    n(
                      t.map((e) => {
                        var t;
                        return null == e
                          ? void 0
                          : null === (t = e.tx_hashes) || void 0 === t
                          ? void 0
                          : t[0];
                      })
                    );
                }
              };
            return (
              document.addEventListener("orderProcessing", e),
              document.addEventListener("orderProcessingCancelled", t),
              () => {
                document.removeEventListener("orderProcessing", e),
                  document.removeEventListener("orderProcessingCancelled", t);
              }
            );
          }, []),
          { processingOrders: t }
        );
      };
    },
    70051: function (e, t, n) {
      var i = n(2265);
      t.Z = function () {
        let [e, t] = (0, i.useState)();
        return (
          (0, i.useEffect)(() => {
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
    69034: function (e, t) {
      t.Z = {
        src: "/_next/static/media/blueLoader.48dedace.svg",
        height: 64,
        width: 64,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    20086: function (e, t) {
      t.Z = {
        src: "/_next/static/media/crossDark.7c78e323.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    64160: function (e, t) {
      t.Z = {
        src: "/_next/static/media/crossLight.338fc026.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    2916: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"baseTokenAddress_","type":"address"},{"internalType":"address","name":"quoteTokenAddress_","type":"address"},{"internalType":"uint48","name":"priceStep_","type":"uint48"},{"internalType":"uint24","name":"makerFee_","type":"uint24"},{"internalType":"uint24","name":"takerFee_","type":"uint24"},{"internalType":"address","name":"governanceTreasury_","type":"address"},{"internalType":"uint48","name":"initialPrice_","type":"uint48"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[{"internalType":"uint256","name":"errorCode","type":"uint256"}],"name":"CompactUint256Error","type":"error"},{"inputs":[{"internalType":"uint256","name":"worstPrice","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"ExceedWorstPrice","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"InvalidAmount","type":"error"},{"inputs":[{"internalType":"address","name":"caller","type":"address"}],"name":"InvalidCaller","type":"error"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"},{"internalType":"enum Pair.OrderStatus","name":"status","type":"uint8"}],"name":"InvalidOrderStatus","type":"error"},{"inputs":[{"internalType":"uint48","name":"price","type":"uint48"},{"internalType":"uint48","name":"priceStep","type":"uint48"}],"name":"InvalidPriceStep","type":"error"},{"inputs":[],"name":"IsNotFullyClaimable","type":"error"},{"inputs":[{"internalType":"uint256","name":"errorCode","type":"uint256"}],"name":"FlowAISegmentTreeError","type":"error"},{"inputs":[],"name":"NotEnoughLiquidity","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[{"internalType":"uint256","name":"errorCode","type":"uint256"}],"name":"SafeMathFixError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint24","name":"makerFee","type":"uint24"},{"indexed":false,"internalType":"uint24","name":"takerFee","type":"uint24"},{"indexed":false,"internalType":"uint256","name":"newPriceStep","type":"uint256"}],"name":"FeePolicyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newThreshold","type":"uint256"}],"name":"FeeThresholdUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"pricePoint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"receiveBackAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"filledAmountFee","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isBuy","type":"bool"}],"name":"LimitMakerOrderCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"pricePoint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isBuy","type":"bool"},{"indexed":false,"internalType":"enum Pair.OrderStatus","name":"updatedStatus","type":"uint8"}],"name":"LimitMakerOrderClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"preOrderLiquidityPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"requestedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pricePoint","type":"uint256"},{"indexed":false,"internalType":"enum Pair.OrderStatus","name":"status","type":"uint8"},{"indexed":false,"internalType":"bool","name":"isBuy","type":"bool"}],"name":"LimitOrderInserted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint48","name":"matchedPricePoints","type":"uint48"},{"indexed":false,"internalType":"uint48","name":"worstPrice","type":"uint48"},{"indexed":false,"internalType":"bool","name":"isBuy","type":"bool"}],"name":"MarketOrderInserted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"matchedAmount","type":"uint256"},{"indexed":false,"internalType":"uint48","name":"matchedPricePoints","type":"uint48"},{"indexed":false,"internalType":"bool","name":"isBuy","type":"bool"}],"name":"MatchingOrderInserted","type":"event"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"_claimStatus","outputs":[{"internalType":"bool","name":"isFullyClaimable","type":"bool"},{"internalType":"uint256","name":"claimableAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"isBuy","type":"bool"},{"internalType":"uint48","name":"pricePoint","type":"uint48"},{"internalType":"uint256","name":"orderIndexInPricePoint","type":"uint256"}],"name":"_getCancellationAmountInRange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_quotePrecisionComplement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ethAmount","type":"uint256"},{"internalType":"uint256","name":"usdtPrice","type":"uint256"}],"name":"adjustAmount","outputs":[{"internalType":"uint256","name":"adjustedAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"cancelOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"claimOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_a","type":"uint256"}],"name":"convert","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdAmountin18decimals","type":"uint256"}],"name":"convertUsdToEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deleteMax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deleteMin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"getOrder","outputs":[{"internalType":"uint32","name":"_orderIndexInPricePoint","type":"uint32"},{"internalType":"uint256","name":"_preOrderLiquidityPosition","type":"uint256"},{"internalType":"uint128","name":"_tokenAmount","type":"uint128"},{"internalType":"uint128","name":"_claimedAmount","type":"uint128"},{"internalType":"uint48","name":"_price","type":"uint48"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"bool","name":"_isBuy","type":"bool"},{"internalType":"uint8","name":"_status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint48","name":"price","type":"uint48"}],"name":"getPricePoint","outputs":[{"internalType":"uint256","name":"_totalBuyLiquidity","type":"uint256"},{"internalType":"uint256","name":"_totalSellLiquidity","type":"uint256"},{"internalType":"uint256","name":"_usedBuyLiquidity","type":"uint256"},{"internalType":"uint256","name":"_usedSellLiquidity","type":"uint256"},{"internalType":"uint256","name":"_buyOrderCount","type":"uint256"},{"internalType":"uint256","name":"_sellOrderCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governanceTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"isBuy","type":"bool"},{"internalType":"uint48","name":"price","type":"uint48"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"insertLimitOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isBuy","type":"bool"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint48","name":"worstPrice","type":"uint48"}],"name":"insertMarketOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"latestTradePrice","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"makerFee","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"orderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"orders","outputs":[{"internalType":"uint256","name":"preOrderLiquidityPosition","type":"uint256"},{"internalType":"uint128","name":"tokenAmount","type":"uint128"},{"internalType":"uint128","name":"claimedAmount","type":"uint128"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint48","name":"price","type":"uint48"},{"internalType":"uint32","name":"orderIndexInPricePoint","type":"uint32"},{"internalType":"bool","name":"isBuy","type":"bool"},{"internalType":"enum Pair.OrderStatus","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePointLiquidity","outputs":[{"internalType":"contract PricePointLiquidity","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint48","name":"","type":"uint48"}],"name":"pricePoints","outputs":[{"components":[{"internalType":"uint256","name":"totalLiquidity","type":"uint256"},{"internalType":"uint256","name":"usedLiquidity","type":"uint256"},{"internalType":"uint256","name":"orderCount","type":"uint256"}],"internalType":"struct Pair.LiquidityInfo","name":"buy","type":"tuple"},{"components":[{"internalType":"uint256","name":"totalLiquidity","type":"uint256"},{"internalType":"uint256","name":"usedLiquidity","type":"uint256"},{"internalType":"uint256","name":"orderCount","type":"uint256"}],"internalType":"struct Pair.LiquidityInfo","name":"sell","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceStep","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"setFeeThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapBaseTokenFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takerFee","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint24","name":"makerFee_","type":"uint24"},{"internalType":"uint24","name":"takerFee_","type":"uint24"},{"internalType":"uint48","name":"priceStep_","type":"uint48"}],"name":"updateMarketPolicy","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
  },
]);
