"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [367],
  {
    55198: function (e, t, a) {
      a.d(t, {
        ZM: function () {
          return B;
        },
        Ei: function () {
          return N;
        },
        lD: function () {
          return F;
        },
        n1: function () {
          return R;
        },
        rX: function () {
          return s;
        },
        B9: function () {
          return Z;
        },
        Ir: function () {
          return u;
        },
        QJ: function () {
          return d;
        },
        KW: function () {
          return h;
        },
        I7: function () {
          return b;
        },
        y9: function () {
          return m;
        },
        Qb: function () {
          return n;
        },
        Pv: function () {
          return l;
        },
        EA: function () {
          return o;
        },
        JT: function () {
          return y;
        },
        iM: function () {
          return p;
        },
        ZO: function () {
          return g;
        },
        cP: function () {
          return U;
        },
        Go: function () {
          return c;
        },
        GI: function () {
          return i;
        },
        i8: function () {
          return r;
        },
      });
      var n,
        i,
        r,
        l,
        s,
        o,
        d,
        u,
        c,
        h,
        p,
        m,
        b,
        g,
        y,
        k,
        v,
        f,
        _,
        T,
        w,
        S,
        I,
        x,
        C,
        O,
        L,
        H,
        D,
        P = {
          src: "/_next/static/media/auctionUnselectedLight.28144133.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        W = {
          src: "/_next/static/media/auctionUnselectedDark.34a8d5ca.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: "/_next/static/media/usersUnselectedLight.80ab96d9.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = {
          src: "/_next/static/media/usersUnselectedDark.eeabd76c.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = {
          src: "/_next/static/media/calculatorUnselectedLight.05e4adfd.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        q = {
          src: "/_next/static/media/calculatorUnselectedDark.4bc5d329.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        };
      let N = "Ethereum",
        F = "v0.1.0-alpha.1",
        B = "https://multipool-devnet.cloud.blockscout.com",
        R =
          "115792089237316195423570985008687907853269984665640564039457584007913129639935";
      ((k = n || (n = {})).stacked = "Stacked"),
        (k.simple = "Simple"),
        ((v = i || (i = {})).bidsAndAsks = "Bids And Asks"),
        (v.bidsOnly = "Bids Only"),
        (v.asksOnly = "Asks Only");
      let U = [
          {
            availableIconLight: {
              src: "/_next/static/media/barChartSelectedLight.6c9929d7.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            availableIconDark: {
              src: "/_next/static/media/barChartSelectedDark.fcccd909.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            unavailableIconLight: {
              src: "/_next/static/media/barChartUnselectedLight.aa0b92c2.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            unavailableIconDark: {
              src: "/_next/static/media/barChartUnselectedDark.76887d4e.svg",
              height: 16,
              width: 18,
              blurWidth: 0,
              blurHeight: 0,
            },
            label: "Trade",
            path: "/",
            isFeatureAvailable: !0,
          },
          {
            availableIconLight: {
              src: "/_next/static/media/leaderboardSelectedLight.0682399e.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            availableIconDark: {
              src: "/_next/static/media/leaderboardSelectedDark.19757ab6.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            unavailableIconLight: {
              src: "/_next/static/media/leaderboardUnSelectedLight.4c2a31d9.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            unavailableIconDark: {
              src: "/_next/static/media/leaderboardUnSelectedDark.a30c965c.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            label: "Leaderboard",
            path: "/leaderboard",
            isFeatureAvailable: !0,
          },
          {
            availableIconLight: {
              src: "/_next/static/media/transferSelectedLight.817133c4.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            availableIconDark: {
              src: "/_next/static/media/transferSelectedDark.015181f5.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            unavailableIconLight: {
              src: "/_next/static/media/transferUnselectedLight.17b5146c.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            unavailableIconDark: {
              src: "/_next/static/media/transferUnselectedDark.feb2d9fc.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            label: "Buy",
            path: "/buy",
            isFeatureAvailable: !1,
          },
          {
            availableIconLight: P,
            availableIconDark: W,
            unavailableIconLight: P,
            unavailableIconDark: W,
            label: "Auctions",
            path: "/auction",
            isFeatureAvailable: !1,
          },
          {
            availableIconLight: A,
            availableIconDark: E,
            unavailableIconLight: A,
            unavailableIconDark: E,
            label: "P2P Lending",
            path: "/lending",
            isFeatureAvailable: !1,
          },
          {
            availableIconLight: M,
            availableIconDark: q,
            unavailableIconLight: M,
            unavailableIconDark: q,
            label: "RFQs",
            path: "/rfq",
            isFeatureAvailable: !1,
          },
        ],
        Z = [
          //   {
          //     light: {
          //       src: "/_next/static/media/youtubeLight.991cc791.svg",
          //       height: 16,
          //       width: 20,
          //       blurWidth: 0,
          //       blurHeight: 0,
          //     },
          //     dark: {
          //       src: "/_next/static/media/youtubeDark.f4e39a1d.svg",
          //       height: 20,
          //       width: 20,
          //       blurWidth: 0,
          //       blurHeight: 0,
          //     },
          //     url: "https://www.youtube.com/channel/UCo_kKXD7H_l6ohdDmy82ApQ",
          //   },
          {
            light: {
              src: "/_next/static/media/xLight.5ed80adb.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            dark: {
              src: "/_next/static/media/xDark.5b219a1a.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            url: "https://x.com/FlowAI_eth",
          },
          //   {
          //     light: {
          //       src: "/_next/static/media/cmcLight.b00dfdf3.svg",
          //       height: 24,
          //       width: 24,
          //       blurWidth: 0,
          //       blurHeight: 0,
          //     },
          //     dark: {
          //       src: "/_next/static/media/cmcDark.4fc69f8a.svg",
          //       height: 24,
          //       width: 24,
          //       blurWidth: 0,
          //       blurHeight: 0,
          //     },
          //     url: "https://coinmarketcap.com/community/profile/multipool/",
          //   },
          //   {
          //     light: {
          //       src: "/_next/static/media/discordLight.49947999.svg",
          //       height: 20,
          //       width: 20,
          //       blurWidth: 0,
          //       blurHeight: 0,
          //     },
          //     dark: {
          //       src: "/_next/static/media/discordDark.3fde73db.svg",
          //       height: 20,
          //       width: 20,
          //       blurWidth: 0,
          //       blurHeight: 0,
          //     },
          //     url: "",
          //   },
          {
            light: {
              src: "/_next/static/media/telegramLight.176103e3.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            dark: {
              src: "/_next/static/media/telegramDark.f93c249f.svg",
              height: 20,
              width: 20,
              blurWidth: 0,
              blurHeight: 0,
            },
            url: "https://t.me/FlowAI_eth",
          },
        ];
      ((f = r || (r = {})).limit = "Limit"),
        (f.market = "Market"),
        ((_ = l || (l = {})).orders = "Orders"),
        (_.trades = "Trades"),
        (_.assets = "Assets"),
        (_.galaxe = "Galxe Tasks"),
        ((T = s || (s = {})).assets = "Assets"),
        (T.galaxe = "Galxe Tasks"),
        ((w = o || (o = {})).openOrders = "Open Orders"),
        (w.history = "History"),
        ((d || (d = {})).pnl = "PnL Leaderboard"),
        ((S = u || (u = {})).all = "All Time"),
        (S.month = "This Month"),
        (S.week = "This Week"),
        (S.today = "Today"),
        ((I = c || (c = {})).orderPlaced = "Order Placed"),
        (I.orderRejected = "Order Rejected"),
        (I.orderCancelled = "Order Cancelled"),
        (I.orderClaimed = "Order Claimed"),
        (I.orderPartiallyClaimed = "Order Partially Claimed"),
        (I.gasTokenClaimSuccess = "Gas Token Claimed Successfully"),
        (I.gasTokenClaimFailure = "Failed to Claim Gas Token"),
        (I.testTokenClaimSuccess = "Test Tokens Claimed Successfully"),
        (I.testTokenClaimFailure = "Failed to Claim Test Tokens"),
        (I.completeCaptcha = "Captcha Required"),
        (I.captchaFailed = "Captcha Failed"),
        ((x = h || (h = {})).claimGas = "Claim Gas Tokens"),
        (x.claimTest = "Claim Test Tokens"),
        (x.none = "None"),
        ((C = p || (p = {})).open = "Open"),
        (C.partiallyFilled = "Partially Filled"),
        (C.cancelled = "Cancelled"),
        (C.filled = "Filled"),
        (C.claimed = "Claimed"),
        (C.partiallyClaimed = "Partially Claimed"),
        (C.pending = "Pending"),
        ((O = m || (m = {})).vertical = "Vertical"),
        (O.horizontal = "Horizontal"),
        ((L = b || (b = {})).separate = "Separate"),
        (L.cumulative = "Cumulative"),
        ((H = g || (g = {})).bid = "Bid"),
        (H.ask = "Ask"),
        ((D = y || (y = {})).buy = "Buy"),
        (D.sell = "Sell");
    },
    82367: function (e, t, a) {
      a.r(t),
        a.d(t, {
          GlobalContextProvider: function () {
            return v;
          },
          useGlobalContext: function () {
            return f;
          },
        });
      var n,
        i,
        r = a(57437),
        l = a(2265),
        s = a(79037),
        o = a(92173),
        d = a(55198),
        u = a(56598),
        c = JSON.parse(
          '[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"address","name":"tokenReceiver","type":"address"},{"internalType":"uint8","name":"_decimal","type":"uint8"},{"internalType":"uint256","name":"initialValue","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
        ),
        h = a(87884);
      let p = "https://ws.multipool.finance/ws";
      ((n = i || (i = {})).orderBook = "Order Book"),
        (n.tradeHistory = "Trade History");
      var m = function () {
        let [e, t] = (0, l.useState)({ ask: [], bid: [], numLevels: 0 }),
          [a, n] = (0, l.useState)({
            price: "",
            isPriceIncrease: !0,
            "24h_difference": "",
          }),
          [i, r] = (0, l.useState)({
            high_24h: 0,
            low_24h: 0,
            baseTokenVolume_24h: 0,
            quoteTokenVolume_24h: 0,
          }),
          [s, o] = (0, l.useState)([]),
          [u, c] = (0, l.useState)(d.Qb.stacked),
          { sendJsonMessage: m, getWebSocket: b } = (0, h.ZP)(p, {
            onOpen: () =>
              console.log("Order Book webSocket connection opened."),
            onClose: () => {
              console.log("Order Book webSocket connection closed."), v();
            },
            shouldReconnect: () => !0,
            onMessage: (e) => x(e, "Order Book"),
          }),
          { sendJsonMessage: g, getWebSocket: y } = (0, h.ZP)(p, {
            onOpen: () =>
              console.log("Trade history webSocket connection opened."),
            onClose: () => {
              console.log("Trade history webSocket connection closed."), f();
            },
            shouldReconnect: () => !0,
            onMessage: (e) => x(e, "Trade History"),
          });
        (0, l.useEffect)(
          () => (
            v(),
            f(),
            () => {
              var e, t;
              null === (e = b()) || void 0 === e || e.close(),
                null === (t = y()) || void 0 === t || t.close();
            }
          ),
          []
        ),
          (0, l.useEffect)(() => {
            let a = k(e.ask);
            t((e) => ({ bid: e.bid, numLevels: e.numLevels, ask: a }));
          }, [u]);
        let k = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = e.map((e) => [e.price, e.quantity]);
            return t && (a = a.reverse()), _(a, d.ZO.ask, !0) || [];
          },
          v = () => {
            m({ pairName: "WETH/USDT" });
          },
          f = () => {
            g({ tradeHistory: "All" });
          },
          _ = function (e, t) {
            let a =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a && u === d.Qb.simple && e.reverse();
            let n =
              null == e
                ? void 0
                : e.reduce((e, t) => {
                    var n;
                    let [i, r] = t;
                    return (
                      a || ((i /= 1e6), (r = Number(r / 1e18 / i))),
                      [
                        ...e,
                        {
                          price: i,
                          quantity: r,
                          total: Number(
                            ((null === (n = e[e.length - 1]) || void 0 === n
                              ? void 0
                              : n.total) || 0) + r
                          ),
                        },
                      ]
                    );
                  }, []);
            return (
              t === d.ZO.ask &&
                u === d.Qb.stacked &&
                (n = null == n ? void 0 : n.sort((e, t) => t.price - e.price)),
              n
            );
          },
          T = (e) => {
            t({
              bid: _(e.bids, d.ZO.bid) || [],
              ask: _(e.asks, d.ZO.ask) || [],
              numLevels: e.numLevels,
            });
          },
          w = (e, t, a) => {
            let n = 0;
            for (let n of e) {
              let [e, i] = n;
              (e /= 1e6), (i = Number(i / 1e18 / e));
              let r = null == t ? void 0 : t.findIndex((t) => t.price === e);
              if (-1 !== r)
                i <= 0
                  ? t.splice(r, 1)
                  : (t[r] = { ...(null == t ? void 0 : t[r]), quantity: i });
              else if (-1 === r && i > 0) {
                25 === t.length && (a === d.ZO.bid ? t.pop() : t.shift());
                let n =
                  null == t
                    ? void 0
                    : t.findIndex((t) =>
                        a === d.ZO.ask && u === d.Qb.simple
                          ? t.price > e
                          : t.price < e
                      );
                -1 === n && (n = t.length),
                  t.splice(n, 0, { price: e, quantity: i, total: 0 });
              }
            }
            return a === d.ZO.ask && u === d.Qb.stacked
              ? k(t, !0)
              : t.map(
                  (e) => (
                    (n += e.quantity), { ...e, total: Number(n.toFixed(6)) }
                  )
                );
          },
          S = (a, n) => {
            let i = (null == a ? void 0 : a.length)
                ? w(a, e.bid, d.ZO.bid)
                : e.bid,
              r = (null == n ? void 0 : n.length)
                ? w(n, e.ask, d.ZO.ask)
                : e.ask;
            t((e) => ({ ...e, bid: i, ask: r }));
          },
          I = (e) => {
            (null == s ? void 0 : s.length) === 25
              ? (s.unshift(e), s.pop())
              : null == s || s.unshift(e),
              o(s);
          },
          x = (e, t) => {
            var a, i;
            let l = JSON.parse(e.data);
            "Order Book" === t &&
              (r({
                high_24h: l.high24h,
                low_24h: l.low24h,
                baseTokenVolume_24h: l.baseTokenVolume24h,
                quoteTokenVolume_24h: l.quoteTokenVolume24h,
              }),
              n({
                price: l.marketPrice,
                isPriceIncrease: l.isPriceIncrease,
                "24h_difference": l.percentageChangeInPrice,
              })),
              l.numLevels
                ? "Order Book" === t
                  ? T(l)
                  : o(l.orders)
                : ((null === (a = l.bids) || void 0 === a ? void 0 : a.length) >
                    0 ||
                    (null === (i = l.asks) || void 0 === i
                      ? void 0
                      : i.length) > 0 ||
                    l.update) &&
                  ("Order Book" === t ? S(l.bids, l.asks) : I(l.update));
          };
        return {
          priceDetails: a,
          pairInfo: i,
          orderBook: e,
          orderBookStyle: u,
          setOrderBookStyle: c,
          tradeHistory: s,
        };
      };
      let b = {
          name: "",
          icon_link: "",
          symbol: "",
          contract_addr: "",
          isSell: !1,
          abi: null,
          decimals: 0,
          token_description: "",
          token_id: 0,
          token_name: "",
        },
        g = {
          type: d.i8.limit,
          quote_token: { ...b, isSell: !0 },
          quote_token_id: 0,
          base_token: b,
          base_token_id: 0,
          sell: "",
          receive: "",
          price: 0,
          "24h_difference": "0",
          high_24h: 0,
          low_24h: 0,
          pair_id: 0,
          token_pair_name: "",
          quoteTokenVolume_24h: 0,
          baseTokenVolume_24h: 0,
          baseTokenSellAmount: "",
          orderBook: { ask: [], bid: [], numLevels: 0 },
          marketPrice: 0,
          tradeHistory: [],
          isPriceIncrease: !0,
        },
        y = (0, l.createContext)({
          tradeData: g,
          setTradeData: () => g,
          tokenPairList: [],
          setTokenPairList: () => [],
          orderHistory: [],
          setOrderHistory: () => [],
          allTokens: [],
          calculateReceiveAmount: () => {},
          calculatePayAmount: () => {},
          darkMode: void 0,
          setDarkMode: () => !1,
          orderBookStyle: d.Qb.stacked,
          setOrderBookStyle: () => d.Qb.stacked,
          totalOrders: 0,
          setTotalOrders: () => 0,
          ordersPerPage: 0,
          setOrdersPerPage: () => 0,
          orderPageNumber: 0,
          setOrderPageNumber: () => 0,
        }),
        k = "https://api.multipool.finance",
        v = (e) => {
          let { children: t } = e,
            { address: a, isConnected: n } = (0, s.m)(),
            [i, d] = (0, l.useState)(g),
            [h, p] = (0, l.useState)([]),
            [b, v] = (0, l.useState)([]),
            [f, _] = (0, l.useState)(),
            [T, w] = (0, l.useState)([]),
            [S, I] = (0, l.useState)(0),
            [x, C] = (0, l.useState)(100),
            [O, L] = (0, l.useState)(1),
            {
              priceDetails: H,
              pairInfo: D,
              orderBook: P,
              tradeHistory: W,
              orderBookStyle: A,
              setOrderBookStyle: E,
            } = m();
          (0, l.useEffect)(() => {
            H &&
              d((e) => ({
                ...e,
                "24h_difference": H["24h_difference"],
                marketPrice: Number(H.price),
                isPriceIncrease: H.isPriceIncrease,
              }));
          }, [H]),
            (0, l.useEffect)(() => {
              D &&
                d((e) => ({
                  ...e,
                  high_24h: D.high_24h,
                  low_24h: D.low_24h,
                  quoteTokenVolume_24h: D.quoteTokenVolume_24h,
                  baseTokenVolume_24h: D.baseTokenVolume_24h,
                }));
            }, [D]),
            (0, l.useEffect)(() => {
              P && d((e) => ({ ...e, orderBook: P }));
            }, [P]),
            (0, l.useEffect)(() => {
              W && d((e) => ({ ...e, tradeHistory: W }));
            }, [W]),
            (0, l.useEffect)(() => {
              (async () => {
                try {
                  let e = await o.Z.get("".concat(k, "/get-market-data")),
                    t = e.data.find((e) => 1 === e.pair_id),
                    a = new Map();
                  e.data.forEach((e) => {
                    a.has(e.base_token.token_id) ||
                      a.set(e.base_token.token_id, {
                        ...e.base_token,
                        price: e.price,
                      }),
                      a.has(e.quote_token.token_id) ||
                        a.set(e.quote_token.token_id, {
                          ...e.quote_token,
                          price: e.price,
                        });
                  });
                  let n = [...a.values()];
                  delete t["24h_difference"],
                    delete t.high_24h,
                    delete t.low_24h,
                    w(n),
                    p(e.data),
                    d((e) => ({
                      ...g,
                      ...e,
                      ...t,
                      quote_token: { ...t.quote_token, isSell: !0, abi: c },
                      base_token: { ...t.base_token, isSell: !1, abi: c },
                    }));
                } catch (e) {
                  e instanceof Error && console.log("Error: ", e.message);
                }
              })();
            }, []),
            (0, l.useEffect)(() => {
              let e,
                t = null,
                i = async () => {
                  t && t.abort();
                  let e = new AbortController();
                  t = e;
                  let { signal: i } = e;
                  try {
                    let e = await o.Z.get(
                        ""
                          .concat(k, "/get-user-orders-list?userAddress=")
                          .concat(a, "&page=")
                          .concat(O, "&limit=")
                          .concat(x),
                        { signal: i }
                      ),
                      t = e.data.data.map((e) => ({
                        ...e,
                        time_stamp: (0, u.p6)(e.time_stamp),
                      }));
                    I(e.data.pagination.total), v(n ? t : []);
                  } catch (e) {
                    o.Z.isCancel(e)
                      ? console.log("Request aborted")
                      : (v([]),
                        e instanceof Error &&
                          console.log("Error: ", e.message));
                  }
                };
              return (
                n
                  ? (i(),
                    (e = setInterval(() => {
                      i();
                    }, 1500)))
                  : v([]),
                () => {
                  t && t.abort(), clearInterval(e);
                }
              );
            }, [n, a, x, O]),
            (0, l.useEffect)(() => {
              localStorage.setItem("processingOrders", "[]"),
                localStorage.setItem("pendingOrders", "[]"),
                localStorage.setItem("latestOrderId", "-1");
            }, [a]);
          let M = () => {
              let e = window.matchMedia("(prefers-color-scheme: dark)");
              if ("boolean" == typeof e.matches)
                return e.matches ? "dark" : "light";
            },
            q = (e) => {
              localStorage.setItem("theme", e);
            },
            N = () => localStorage.getItem("theme");
          return (
            (0, l.useEffect)(() => {
              let e = N();
              e ? _("dark" === e) : _("dark" === M());
            }, []),
            (0, l.useEffect)(() => {
              void 0 !== f &&
                (f
                  ? (q("dark"), document.documentElement.classList.add("dark"))
                  : (q("light"),
                    document.documentElement.classList.remove("dark")));
            }, [f]),
            (0, r.jsx)(y.Provider, {
              value: {
                tradeData: i,
                setTradeData: d,
                tokenPairList: h,
                setTokenPairList: p,
                orderHistory: b,
                setOrderHistory: v,
                allTokens: T,
                calculateReceiveAmount: (e, t) => {
                  e
                    ? d((a) => ({
                        ...a,
                        sell: e,
                        receive: (0, u.uf)(
                          Number(e) *
                            (i.quote_token.isSell ? 1 / Number(t) : Number(t))
                        ),
                      }))
                    : d((e) => ({ ...e, sell: "", receive: "" }));
                },
                calculatePayAmount: (e, t) => {
                  e
                    ? d((a) => ({
                        ...a,
                        receive: e,
                        sell: (0, u.uf)(
                          Number(e) *
                            (i.quote_token.isSell
                              ? Number(t || i.marketPrice)
                              : 1 / Number(t || i.marketPrice))
                        ),
                        price: t ? Number(t) : a.price,
                      }))
                    : d((e) => ({ ...e, sell: "", receive: "" }));
                },
                darkMode: f,
                setDarkMode: _,
                orderBookStyle: A,
                setOrderBookStyle: E,
                ordersPerPage: x,
                setOrdersPerPage: C,
                orderPageNumber: O,
                setOrderPageNumber: L,
                totalOrders: S,
              },
              children: t,
            })
          );
        },
        f = () => (0, l.useContext)(y);
    },
    56598: function (e, t, a) {
      a.d(t, {
        p6: function () {
          return i;
        },
        uf: function () {
          return n;
        },
      }),
        a(57437),
        a(55198);
      let n = function (e) {
          var t;
          let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
          if (e > 0 && e < 1e-6) return "0.00000...";
          let n =
            null === (t = Number(e || 0)) || void 0 === t
              ? void 0
              : t.toFixed(a);
          return null == n ? void 0 : n.replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
        },
        i = (e) => {
          let t = new Date(1e3 * e);
          return ""
            .concat(new Date(t).toLocaleDateString("en-US"), " ")
            .concat(new Date(t).toLocaleTimeString("en-US"));
        };
    },
  },
]);
