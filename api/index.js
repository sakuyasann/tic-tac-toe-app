var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_remix = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), server = (0, import_remix.createStylesServer)();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${(0, import_remix.injectStyles)(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_core4 = require("@mantine/core"), import_remix2 = require("@mantine/remix");

// app/share/lib/mantine.ts
var FONT_FAMILY = "'Audiowide', 'Stick', cursive", LibMantineTheme = {
  fontFamily: FONT_FAMILY,
  headings: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400
  },
  globalStyles(theme) {
    return {
      body: {
        background: theme.colors.dark[7],
        color: theme.colors.gray[0],
        backgroundImage: `
        radial-gradient(at 79% 3%, hsla(222,7%,18%,1) 0px, transparent 50%),
        radial-gradient(at 44% 66%, hsla(222,7%,18%,1) 0px, transparent 50%),
        radial-gradient(at 36% 30%, hsla(222,7%,18%,1) 0px, transparent 50%),
        radial-gradient(at 15% 30%, hsla(222,7%,18%,1) 0px, transparent 50%),
        radial-gradient(at 84% 53%, hsla(221,5%,38%,1) 0px, transparent 50%),
        radial-gradient(at 58% 84%, hsla(221,5%,38%,1) 0px, transparent 50%),
        radial-gradient(at 32% 98%, hsla(255,53%,50%,1) 0px, transparent 50%),
        radial-gradient(at 90% 10%, hsla(255,66%,55%,1) 0px, transparent 50%)
      `
      }
    };
  }
};

// app/share/config/icons.tsx
var import_ri = require("react-icons/ri"), import_fa = require("react-icons/fa"), import_im = require("react-icons/im"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), ThemeIcons = {
  close: import_ri.RiCloseFill,
  circle: import_ri.RiCheckboxBlankCircleLine,
  changeLog: import_fa.FaInfo,
  rule: import_im.ImBook,
  setting: import_ri.RiSettingsLine
}, GetThemeIcons = (name, props) => {
  let Icon = ThemeIcons[name];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, {
    ...props
  }, void 0, !1, {
    fileName: "app/share/config/icons.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};

// app/share/config/env.tsx
var ENV = {
  VERSION: "0.1.0"
};

// app/share/components/icon-button/index.tsx
var import_core = require("@mantine/core"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), useStyles = (0, import_core.createStyles)((theme) => ({
  a: {
    padding: "1em",
    boxShadow: `0 4px 0 ${theme.colors.violet[8]}`,
    backgroundColor: theme.colors.violet[5],
    color: "white",
    borderRadius: "50%",
    aspectRatio: "1/1"
  }
})), index = ({ children, onClick }) => {
  let { classes } = useStyles();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core.UnstyledButton, {
    onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core.Center, {
      className: classes.a,
      children
    }, void 0, !1, {
      fileName: "app/share/components/icon-button/index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/share/components/icon-button/index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}, icon_button_default = index;

// app/share/components/modal/index.tsx
var import_core2 = require("@mantine/core"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), index2 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core2.Modal, {
  centered: !0,
  ...props,
  title: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core2.Text, {
    size: "xl",
    children: props.title
  }, void 0, !1, {
    fileName: "app/share/components/modal/index.tsx",
    lineNumber: 9,
    columnNumber: 14
  }, this),
  styles: (theme) => ({
    modal: {
      backgroundColor: theme.colors.dark[6],
      color: theme.colors.violet[0]
    }
  })
}, void 0, !1, {
  fileName: "app/share/components/modal/index.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), modal_default = index2;

// app/share/components/dialog/index.tsx
var import_core3 = require("@mantine/core");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), index3 = ({
  opened,
  onCancel,
  onSubmit,
  submitLabel,
  children,
  title
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(modal_default, {
  title,
  opened,
  onClose: onCancel,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Box, {
      children
    }, void 0, !1, {
      fileName: "app/share/components/dialog/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Group, {
      position: "center",
      mt: "lg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Button, {
          onClick: onCancel,
          color: "red",
          variant: "subtle",
          children: "\u30AD\u30E3\u30F3\u30BB\u30EB"
        }, void 0, !1, {
          fileName: "app/share/components/dialog/index.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Button, {
          onClick: onSubmit,
          color: "violet",
          children: submitLabel ?? "\u78BA\u5B9A"
        }, void 0, !1, {
          fileName: "app/share/components/dialog/index.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/share/components/dialog/index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/share/components/dialog/index.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this), dialog_default = index3;

// app/root.tsx
var import_recoil = require("recoil");

// public/manifest.webmanifest
var manifest_default = "/build/_assets/manifest-AJKDH7IZ.webmanifest";

// app/root.tsx
var import_framer_motion = require("framer-motion"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1,user-scalable=no"
}), links = () => [
  { rel: "manifest", href: manifest_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Audiowide&family=Stick&display=swap"
  }
];
(0, import_core4.createEmotionCache)({ key: "mantine" });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_core4.MantineProvider, {
    theme: LibMantineTheme,
    withGlobalStyles: !0,
    withNormalizeCSS: !0,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_recoil.RecoilRoot, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_framer_motion.AnimatePresence, {
                mode: "wait",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_framer_motion.motion.div, {
                  exit: { opacity: 0 },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 49,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 48,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/__base.tsx
var base_exports = {};
__export(base_exports, {
  default: () => base_default
});
var import_core5 = require("@mantine/core"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), __base = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Center, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core5.Box, {
    w: "100%",
    maw: 480,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__base.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__base.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/routes/__base.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), base_default = __base;

// app/routes/__base/play/index.tsx
var play_exports = {};
__export(play_exports, {
  default: () => play_default
});

// app/modules/tic-tac-toe/index.tsx
var import_core15 = require("@mantine/core");

// app/modules/tic-tac-toe/components/board/index.tsx
var import_core8 = require("@mantine/core");

// app/modules/tic-tac-toe/components/board/cell.tsx
var import_core7 = require("@mantine/core");

// app/modules/tic-tac-toe/components/common/mark.tsx
var import_core6 = require("@mantine/core"), import_react4 = require("react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), ICON_SIZE = 64, mark = ({ value, size: size3 }) => {
  let theme = (0, import_core6.useMantineTheme)(), Components = (0, import_react4.useMemo)(() => value === "0" ? GetThemeIcons("circle", {
    color: theme.colors.violet[7],
    size: size3 ?? ICON_SIZE
  }) : value === "X" ? GetThemeIcons("close", {
    color: theme.colors.violet[0],
    size: size3 ?? ICON_SIZE
  }) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, {}, void 0, !1, {
    fileName: "app/modules/tic-tac-toe/components/common/mark.tsx",
    lineNumber: 26,
    columnNumber: 12
  }, this), [value, size3]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, {
    children: Components
  }, void 0, !1, {
    fileName: "app/modules/tic-tac-toe/components/common/mark.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}, mark_default = mark;

// app/modules/tic-tac-toe/hooks/tic-tac-toc.tsx
var import_react5 = require("react");
var DEFAULT_HAND = 4, useTicTacToc = (options) => {
  let [started, setStarted] = (0, import_react5.useState)(!1), { board: boardState, setBoard } = (0, import_react5.useContext)(BoardContext), { isNextX, setIsNextX } = (0, import_react5.useContext)(IsNextXContext), [boardStrength, setBoardStrength] = (0, import_react5.useState)([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]), player1 = usePlayer(), player2 = usePlayer();
  (0, import_react5.useEffect)(() => (player1.handleDraw(DEFAULT_HAND), player2.handleDraw(DEFAULT_HAND), setStarted(!0)), []), (0, import_react5.useEffect)(() => {
    !started || (console.log("player1", player1.hand), console.log("player2", player2.hand));
  }, [player1.hand, player2.hand]);
  let [winnerPlayer, setWinnerPlayer] = (0, import_react5.useState)(null);
  return (0, import_react5.useEffect)(() => {
    let winner = calculateWinner(boardState);
    if (!!winner)
      return setWinnerPlayer(winner);
  }, [isNextX]), {
    boardState,
    boardStrength,
    handleClick: (target) => {
      if (winnerPlayer)
        return;
      let player = isNextX ? player1 : player2, power = player.hand[player.selectedHand];
      if (boardStrength[target] >= power)
        return;
      let newPawer = boardStrength.slice(), newState = boardState.slice();
      newState[target] = isNextX ? "X" : "0", newPawer[target] = power, player.handleUseHand(), setBoard(newState), setBoardStrength(newPawer), setIsNextX(!isNextX);
    },
    winnerPlayer,
    isNextX,
    player1,
    player2
  };
}, calculateWinner = (squares) => {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
};

// app/modules/tic-tac-toe/hooks/board.ts
var import_react6 = require("react"), DEFAULT_VALUE = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
], defaultBoardContext = {
  board: DEFAULT_VALUE,
  setBoard: () => {
  }
}, BoardContext = (0, import_react6.createContext)(defaultBoardContext), useBoard = () => {
  let [board, setValue] = (0, import_react6.useState)(DEFAULT_VALUE), setBoard = (0, import_react6.useCallback)((current) => {
    setValue(current);
  }, []);
  return { board, setBoard };
};

// app/modules/tic-tac-toe/hooks/is-next-x.ts
var import_react7 = require("react"), DEFAULT_VALUE2 = !1, defaultIsNextContext = {
  isNextX: DEFAULT_VALUE2,
  setIsNextX: () => {
  }
}, IsNextXContext = (0, import_react7.createContext)(defaultIsNextContext), useIsNextX = () => {
  let [isNextX, setValue] = (0, import_react7.useState)(DEFAULT_VALUE2), setIsNextX = (0, import_react7.useCallback)((current) => {
    setValue(current);
  }, []);
  return { isNextX, setIsNextX };
};

// app/modules/tic-tac-toe/hooks/player.ts
var import_react8 = require("react"), DEFAULT_DECK = {
  1: 5,
  2: 5,
  3: 5
}, DeckToArray = (obj) => Object.keys(obj).flatMap(
  (key) => [...Array(obj[key])].map(() => parseInt(key))
), usePlayer = () => {
  let [deck, setDeck] = (0, import_react8.useState)(handleShuffle(DeckToArray(DEFAULT_DECK))), [hand, setHand] = (0, import_react8.useState)([]), [selectedHand, setSelectedHand] = (0, import_react8.useState)(0), handleDraw = (i = 1) => {
    deck.length !== 0 && setDeck((deck2) => {
      let after = deck2.slice();
      for (; i; ) {
        let item = after.shift();
        setHand((hand2) => [...hand2, item ?? 1]), i--;
      }
      return after;
    });
  };
  return {
    deck,
    hand,
    handleDraw,
    selectedHand,
    handleChangeSelectedHand: (i) => {
      hand.length < i || i < 0 || setSelectedHand(i);
    },
    handleUseHand: (i = selectedHand) => {
      if (hand.length < i || i < 0)
        return;
      let after = hand.slice();
      after.splice(i, 1), setHand(after), setSelectedHand(0), handleDraw();
    }
  };
}, handleShuffle = (array) => {
  let newArr = array.slice(), length = array.length;
  for (; length; ) {
    let i = Math.floor(Math.random() * length), item = newArr[--length];
    newArr[length] = newArr[i], newArr[i] = item;
  }
  return newArr;
};

// app/modules/tic-tac-toe/components/common/provider.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), provider = ({ children }) => {
  let board = useBoard(), isNextX = useIsNextX();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BoardContext.Provider, {
    value: board,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(IsNextXContext.Provider, {
      value: isNextX,
      children
    }, void 0, !1, {
      fileName: "app/modules/tic-tac-toe/components/common/provider.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/modules/tic-tac-toe/components/common/provider.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}, provider_default = provider;

// app/modules/tic-tac-toe/components/board/cell.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), size = [36, 56, 80], Cell = ({ children, onClick, value, power = 1 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core7.UnstyledButton, {
  onClick,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core7.Center, {
    bg: "dark.8",
    sx: (theme) => ({
      borderRadius: theme.radius.lg,
      aspectRatio: "1/1",
      position: "relative"
    }),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core7.Box, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(mark_default, {
            value,
            size: size[power - 1]
          }, void 0, !1, {
            fileName: "app/modules/tic-tac-toe/components/board/cell.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          children
        ]
      }, void 0, !0, {
        fileName: "app/modules/tic-tac-toe/components/board/cell.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      power > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core7.Text, {
        pos: "absolute",
        bottom: 8,
        right: 8,
        color: "dark.1",
        children: power
      }, void 0, !1, {
        fileName: "app/modules/tic-tac-toe/components/board/cell.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/tic-tac-toe/components/board/cell.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/modules/tic-tac-toe/components/board/cell.tsx",
  lineNumber: 17,
  columnNumber: 5
}, this), cell_default = Cell;

// app/modules/tic-tac-toe/components/board/index.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), index4 = ({ boardState, handleClick, boardStrength }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core8.SimpleGrid, {
  cols: 3,
  bg: "dark.3",
  p: "sm",
  sx: (theme) => ({ borderRadius: theme.radius.lg }),
  spacing: "sm",
  children: boardState.map((state, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(cell_default, {
    power: boardStrength[i],
    value: state,
    onClick: () => handleClick(i)
  }, i, !1, {
    fileName: "app/modules/tic-tac-toe/components/board/index.tsx",
    lineNumber: 22,
    columnNumber: 11
  }, this))
}, void 0, !1, {
  fileName: "app/modules/tic-tac-toe/components/board/index.tsx",
  lineNumber: 13,
  columnNumber: 5
}, this), board_default = index4;

// app/modules/tic-tac-toe/components/player/index.tsx
var import_core10 = require("@mantine/core");

// app/modules/tic-tac-toe/components/player/user.tsx
var import_core9 = require("@mantine/core");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), User = ({ mark: mark2, counts, isActive }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core9.Box, {
  bg: "dark.3",
  sx: (theme) => ({
    borderRadius: theme.radius.lg,
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineColor: isActive ? theme.colors.violet[2] : "transparent"
  }),
  p: "xl",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core9.Box, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(mark_default, {
        value: mark2,
        size: 40
      }, void 0, !1, {
        fileName: "app/modules/tic-tac-toe/components/player/user.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/modules/tic-tac-toe/components/player/user.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core9.Text, {
      align: "center",
      weight: 700,
      size: "xl",
      children: counts ?? 0
    }, void 0, !1, {
      fileName: "app/modules/tic-tac-toe/components/player/user.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/modules/tic-tac-toe/components/player/user.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this), user_default = User;

// app/modules/tic-tac-toe/components/player/index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), index5 = ({ isNextX, boardState, winnerPlayer }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core10.Group, {
  position: "center",
  children: ["0", "X"].map((v) => {
    let active = winnerPlayer ? void 0 : v === "X" ? isNextX : !isNextX, count = boardState.filter((f) => f === v).length;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(user_default, {
      mark: v,
      isActive: active,
      counts: count
    }, v, !1, {
      fileName: "app/modules/tic-tac-toe/components/player/index.tsx",
      lineNumber: 22,
      columnNumber: 16
    }, this);
  })
}, void 0, !1, {
  fileName: "app/modules/tic-tac-toe/components/player/index.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this), player_default = index5;

// app/modules/tic-tac-toe/components/timer/index.tsx
var import_core11 = require("@mantine/core"), import_hooks2 = require("@mantine/hooks"), import_react9 = require("react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), index6 = ({ winnerPlayer }) => {
  let [seconds, setSeconds] = (0, import_react9.useState)(0), interval = (0, import_hooks2.useInterval)(() => setSeconds((s) => s + 1), 1e3);
  (0, import_react9.useEffect)(() => (interval.start(), interval.stop), []), (0, import_react9.useEffect)(() => {
    !winnerPlayer || interval.stop();
  }, [winnerPlayer]);
  let time = (0, import_react9.useMemo)(() => {
    let minute = String(Math.floor(seconds / 60)).padStart(2, "0"), second = String(seconds % 60).padStart(2, "0");
    return `${minute}:${second}`;
  }, [seconds]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core11.Text, {
    align: "center",
    size: "sm",
    py: "xl",
    children: time
  }, void 0, !1, {
    fileName: "app/modules/tic-tac-toe/components/timer/index.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}, timer_default = index6;

// app/modules/tic-tac-toe/components/hand/index.tsx
var import_core12 = require("@mantine/core"), import_react10 = require("react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), size2 = [32, 40, 48], index7 = ({ player1, player2, isNextX }) => {
  let [data, setData] = (0, import_react10.useState)({
    hand: isNextX ? player1.hand : player2.hand,
    deck: isNextX ? player1.deck : player2.deck,
    select: isNextX ? player1.selectedHand : player2.selectedHand,
    change: isNextX ? player1.handleChangeSelectedHand : player2.handleChangeSelectedHand
  });
  return (0, import_react10.useEffect)(() => {
    let hand = isNextX ? player1.hand : player2.hand, deck = isNextX ? player1.deck : player2.deck, select = isNextX ? player1.selectedHand : player2.selectedHand, change = isNextX ? player1.handleChangeSelectedHand : player2.handleChangeSelectedHand;
    return setData({ hand, deck, select, change });
  }, [isNextX, player1, player2]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core12.Box, {
    bg: "dark.3",
    py: "md",
    px: "md",
    sx: (theme) => ({
      borderTopLeftRadius: theme.radius.lg,
      borderTopRightRadius: theme.radius.lg
    }),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core12.SimpleGrid, {
      cols: 4,
      spacing: "xs",
      children: data.hand.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core12.Center, {
        bg: "dark.8",
        py: "lg",
        sx: (theme) => ({
          borderRadius: theme.radius.lg,
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineColor: data.select === i ? theme.colors.violet[2] : "transparent"
        }),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core12.UnstyledButton, {
          w: "100%",
          h: "100%",
          onClick: () => data.change(i),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core12.Stack, {
            spacing: "sm",
            h: "100%",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core12.Box, {
                h: size2[2],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core12.Center, {
                  h: "100%",
                  sx: { flex: 1 },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(mark_default, {
                    value: isNextX ? "X" : "0",
                    size: size2[v - 1]
                  }, void 0, !1, {
                    fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
                    lineNumber: 83,
                    columnNumber: 23
                  }, this)
                }, void 0, !1, {
                  fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
                  lineNumber: 82,
                  columnNumber: 21
                }, this)
              }, void 0, !1, {
                fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
                lineNumber: 81,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core12.Text, {
                align: "center",
                size: "xl",
                weight: 700,
                color: "violet.0",
                children: v
              }, void 0, !1, {
                fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
                lineNumber: 86,
                columnNumber: 19
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        }, void 0, !1, {
          fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this)
      }, i, !1, {
        fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this))
    }, void 0, !1, {
      fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/modules/tic-tac-toe/components/hand/index.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}, hand_default = index7;

// app/modules/tic-tac-toe/components/game-end/index.tsx
var import_core13 = require("@mantine/core"), import_hooks3 = require("@mantine/hooks"), import_react11 = require("react"), import_lottie_react = __toESM(require("lottie-react"));

// app/assets/lottie/winner.json
var winner_default = {
  v: "5.9.6",
  fr: 30,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "Pre-comp 1",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "WINNER! Outlines 2",
      parent: 4,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [92.197, 188.747, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.037, 0],
                    [0, 0],
                    [0.373, 0],
                    [0.672, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.29, -0.302],
                    [0, -0.521],
                    [0.224, -0.537],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [-1.251, 0],
                    [0, 0.101],
                    [0.037, 0],
                    [0, 0],
                    [0.317, 0],
                    [0.177, 0.025],
                    [0.149, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [0, -0.487],
                    [0.41, -0.958],
                    [0, 0],
                    [0, 0],
                    [0, 0.286],
                    [-0.122, 0.059],
                    [-0.262, 0],
                    [0, 0.101],
                    [0.056, 0],
                    [0.186, -0.017],
                    [1.064, 0],
                    [0.252, 0.025],
                    [0.186, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.28, -0.294],
                    [-0.318, -0.605],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0.286],
                    [-0.196, 0.084],
                    [-0.467, 0],
                    [0, 0.101],
                    [0.056, 0],
                    [0.242, -0.017],
                    [1.25, 0],
                    [0.373, 0.034],
                    [0.28, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.215, -0.092],
                    [-0.178, -0.235],
                    [-0.28, -0.537],
                    [0, 0],
                    [-0.187, 0],
                    [-0.019, 0.067],
                    [0, 0],
                    [0, 0],
                    [-0.187, 0],
                    [-0.019, 0.067],
                    [0, 0],
                    [-0.607, 0.529],
                    [-0.691, 0],
                    [0, 0.101]
                  ],
                  o: [
                    [0, 0],
                    [-0.486, 0.034],
                    [-0.56, 0],
                    [0, 0],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.485, 0],
                    [0.289, 0.302],
                    [0, 0.437],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0.821, -1.982],
                    [0.037, 0],
                    [0, -0.101],
                    [0, 0],
                    [-0.448, 0.034],
                    [-0.71, 0],
                    [-0.178, -0.025],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.466, 0],
                    [0, 0.487],
                    [0, 0],
                    [0, 0],
                    [-0.504, -0.941],
                    [0, -0.151],
                    [0.121, -0.059],
                    [0.056, 0],
                    [0, -0.101],
                    [-0.299, 0],
                    [-0.71, 0.034],
                    [-0.467, 0],
                    [-0.252, -0.025],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.317, 0],
                    [0.28, 0.294],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [-0.43, -0.823],
                    [0, -0.218],
                    [0.196, -0.084],
                    [0.056, 0],
                    [0, -0.101],
                    [-0.355, 0],
                    [-0.859, 0.034],
                    [-0.598, 0],
                    [-0.112, -0.017],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.354, 0],
                    [0.214, 0.093],
                    [0.177, 0.235],
                    [0, 0],
                    [0.018, 0.067],
                    [0.186, 0],
                    [0, 0],
                    [0, 0],
                    [0.018, 0.067],
                    [0.186, 0],
                    [0, 0],
                    [0.392, -0.924],
                    [0.606, -0.529],
                    [0.037, 0],
                    [0, -0.101]
                  ],
                  v: [
                    [23.43, -2.999],
                    [22.226, -2.974],
                    [20.938, -2.924],
                    [19.09, -2.974],
                    [17.802, -2.999],
                    [17.718, -2.848],
                    [17.802, -2.697],
                    [18.964, -2.243],
                    [19.398, -1.009],
                    [19.062, 0.453],
                    [15.45, 9.147],
                    [12.09, 2.771],
                    [13.126, 0.277],
                    [16.234, -2.697],
                    [16.29, -2.848],
                    [16.234, -2.999],
                    [15.198, -2.974],
                    [14.05, -2.924],
                    [12.72, -2.962],
                    [12.23, -2.999],
                    [12.146, -2.848],
                    [12.23, -2.697],
                    [12.93, -1.966],
                    [12.314, 0.201],
                    [11.614, 1.889],
                    [10.382, -0.454],
                    [9.626, -2.294],
                    [9.808, -2.609],
                    [10.382, -2.697],
                    [10.466, -2.848],
                    [10.382, -2.999],
                    [9.654, -2.974],
                    [6.994, -2.924],
                    [5.916, -2.962],
                    [5.258, -2.999],
                    [5.174, -2.848],
                    [5.258, -2.697],
                    [6.154, -2.256],
                    [7.05, -0.908],
                    [10.158, 5.014],
                    [8.394, 9.172],
                    [3.354, -0.454],
                    [2.71, -2.117],
                    [3.004, -2.571],
                    [3.998, -2.697],
                    [4.082, -2.848],
                    [3.998, -2.999],
                    [3.102, -2.974],
                    [-0.062, -2.924],
                    [-1.518, -2.974],
                    [-2.106, -2.999],
                    [-2.19, -2.848],
                    [-2.106, -2.697],
                    [-1.252, -2.558],
                    [-0.664, -2.067],
                    [0.022, -0.908],
                    [7.162, 12.725],
                    [7.47, 12.826],
                    [7.778, 12.725],
                    [10.606, 5.896],
                    [14.19, 12.725],
                    [14.498, 12.826],
                    [14.806, 12.725],
                    [19.986, 0.277],
                    [21.484, -1.903],
                    [23.43, -2.697],
                    [23.486, -2.848]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 1.2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.547, -6.981], ix: 2 },
              a: { a: 0, k: [54.584, 12.438], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 20,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 30,
                    s: [109.311, 109.311]
                  },
                  { t: 40, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: -20, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 20,
                    s: [0]
                  },
                  { t: 22, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "W",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0.521],
                    [0, 0],
                    [-0.094, 0.244],
                    [-0.28, 0.101],
                    [-0.579, 0],
                    [0, 0.101],
                    [0.056, 0],
                    [0, 0],
                    [0.578, 0],
                    [0.858, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.28, -0.092],
                    [-0.103, -0.235],
                    [0, -0.504],
                    [0, 0],
                    [0.102, -0.243],
                    [0.28, -0.084],
                    [0.597, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.374, 0.017],
                    [0, 0],
                    [0, 0],
                    [-0.616, 0],
                    [0, 0.101],
                    [0.056, 0],
                    [0.27, 0.084],
                    [0.093, 0.235]
                  ],
                  o: [
                    [0, 0],
                    [0, -0.504],
                    [0.093, -0.243],
                    [0.28, -0.101],
                    [0.056, 0],
                    [0, -0.101],
                    [0, 0],
                    [-0.859, 0.034],
                    [-0.523, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.597, 0],
                    [0.28, 0.093],
                    [0.102, 0.235],
                    [0, 0],
                    [0, 0.504],
                    [-0.103, 0.244],
                    [-0.28, 0.084],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.634, 0],
                    [0, 0],
                    [0, 0],
                    [0.354, 0.017],
                    [0.056, 0],
                    [0, -0.101],
                    [-0.598, 0],
                    [-0.271, -0.084],
                    [-0.094, -0.235]
                  ],
                  v: [
                    [30.578, 9.52],
                    [30.578, -2.097],
                    [30.718, -3.219],
                    [31.278, -3.735],
                    [32.566, -3.887],
                    [32.65, -4.038],
                    [32.566, -4.189],
                    [31.138, -4.164],
                    [28.982, -4.113],
                    [26.91, -4.164],
                    [25.398, -4.189],
                    [25.342, -4.038],
                    [25.398, -3.887],
                    [26.714, -3.748],
                    [27.288, -3.257],
                    [27.442, -2.148],
                    [27.442, 9.52],
                    [27.288, 10.641],
                    [26.714, 11.133],
                    [25.398, 11.259],
                    [25.342, 11.41],
                    [25.398, 11.561],
                    [26.91, 11.536],
                    [28.982, 11.511],
                    [31.11, 11.536],
                    [32.566, 11.561],
                    [32.65, 11.41],
                    [32.566, 11.259],
                    [31.264, 11.133],
                    [30.718, 10.654]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 1.2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.391, -8.077], ix: 2 },
              a: { a: 0, k: [55.594, 6.535], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 25,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 35,
                    s: [109.311, 109.311]
                  },
                  { t: 45, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: -15, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 25,
                    s: [0]
                  },
                  { t: 27, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "I",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.037, 0],
                    [0, 0],
                    [0.373, 0],
                    [0.597, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.411, -0.521],
                    [0, -0.907],
                    [0, 0],
                    [0, 0],
                    [0.317, 0.387],
                    [0.074, 0.067],
                    [0.149, 0],
                    [0.261, -0.017],
                    [0, 0],
                    [0.242, 0.017],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.439, -0.227],
                    [-0.616, -0.605],
                    [0, 0],
                    [0.476, -0.521],
                    [0.821, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.318, 0.017],
                    [0, 0],
                    [0, 0],
                    [-0.523, 0],
                    [0, 0.101],
                    [0.037, 0],
                    [0.41, 0.521],
                    [0, 0.891],
                    [0, 0],
                    [0, 0],
                    [-0.084, 0.017],
                    [0, 0.05],
                    [0, 0],
                    [-0.43, 0.529],
                    [-0.747, 0],
                    [0, 0.101]
                  ],
                  o: [
                    [0, 0],
                    [-0.672, 0.034],
                    [-0.411, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.728, 0],
                    [0.41, 0.521],
                    [0, 0],
                    [0, 0],
                    [-0.131, -0.134],
                    [-0.187, -0.218],
                    [-0.075, -0.067],
                    [-0.374, 0],
                    [0, 0],
                    [-0.467, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.466, 0],
                    [0.438, 0.227],
                    [0, 0],
                    [0, 0.891],
                    [-0.476, 0.521],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.597, 0],
                    [0, 0],
                    [0, 0],
                    [0.28, 0.017],
                    [0.037, 0],
                    [0, -0.101],
                    [-0.728, 0],
                    [-0.411, -0.521],
                    [0, 0],
                    [0, 0],
                    [0.037, 0.033],
                    [0.084, -0.017],
                    [0, 0],
                    [0, -0.89],
                    [0.429, -0.529],
                    [0.037, 0],
                    [0, -0.101]
                  ],
                  v: [
                    [55.381, -8.417],
                    [54.121, -8.392],
                    [52.553, -8.342],
                    [51.041, -8.392],
                    [49.837, -8.417],
                    [49.781, -8.266],
                    [49.837, -8.115],
                    [51.545, -7.334],
                    [52.161, -5.192],
                    [52.161, 2.948],
                    [42.473, -7.107],
                    [41.801, -7.888],
                    [41.409, -8.316],
                    [41.073, -8.417],
                    [40.121, -8.392],
                    [37.993, -8.367],
                    [36.929, -8.392],
                    [35.753, -8.417],
                    [35.697, -8.266],
                    [35.753, -8.115],
                    [37.111, -7.775],
                    [38.693, -6.527],
                    [38.693, 4.132],
                    [37.979, 6.249],
                    [36.033, 7.03],
                    [35.949, 7.182],
                    [36.033, 7.333],
                    [37.405, 7.308],
                    [39.141, 7.282],
                    [40.653, 7.308],
                    [41.857, 7.333],
                    [41.913, 7.182],
                    [41.857, 7.03],
                    [40.149, 6.249],
                    [39.533, 4.132],
                    [39.533, -5.67],
                    [52.665, 7.786],
                    [52.847, 7.812],
                    [52.973, 7.711],
                    [52.973, -5.192],
                    [53.617, -7.321],
                    [55.381, -8.115],
                    [55.437, -8.266]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 1.2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [54.701, -7.49], ix: 2 },
              a: { a: 0, k: [55.211, 0.196], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 30,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 40,
                    s: [109.311, 109.311]
                  },
                  { t: 50, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: -8, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 30,
                    s: [0]
                  },
                  { t: 32, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "N",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.037, 0],
                    [0, 0],
                    [0.373, 0],
                    [0.597, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.411, -0.521],
                    [0, -0.907],
                    [0, 0],
                    [0, 0],
                    [0.317, 0.387],
                    [0.074, 0.067],
                    [0.149, 0],
                    [0.261, -0.017],
                    [0, 0],
                    [0.242, 0.017],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.439, -0.227],
                    [-0.616, -0.605],
                    [0, 0],
                    [0.476, -0.521],
                    [0.821, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.318, 0.017],
                    [0, 0],
                    [0, 0],
                    [-0.523, 0],
                    [0, 0.101],
                    [0.037, 0],
                    [0.41, 0.521],
                    [0, 0.891],
                    [0, 0],
                    [0, 0],
                    [-0.084, 0.017],
                    [0, 0.05],
                    [0, 0],
                    [-0.43, 0.529],
                    [-0.747, 0],
                    [0, 0.101]
                  ],
                  o: [
                    [0, 0],
                    [-0.672, 0.034],
                    [-0.411, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.728, 0],
                    [0.41, 0.521],
                    [0, 0],
                    [0, 0],
                    [-0.131, -0.134],
                    [-0.187, -0.218],
                    [-0.075, -0.067],
                    [-0.374, 0],
                    [0, 0],
                    [-0.467, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.466, 0],
                    [0.438, 0.227],
                    [0, 0],
                    [0, 0.891],
                    [-0.476, 0.521],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.597, 0],
                    [0, 0],
                    [0, 0],
                    [0.28, 0.017],
                    [0.037, 0],
                    [0, -0.101],
                    [-0.728, 0],
                    [-0.411, -0.521],
                    [0, 0],
                    [0, 0],
                    [0.037, 0.033],
                    [0.084, -0.017],
                    [0, 0],
                    [0, -0.89],
                    [0.429, -0.529],
                    [0.037, 0],
                    [0, -0.101]
                  ],
                  v: [
                    [74.811, -19.868],
                    [73.551, -19.843],
                    [71.983, -19.792],
                    [70.471, -19.843],
                    [69.267, -19.868],
                    [69.211, -19.717],
                    [69.267, -19.565],
                    [70.975, -18.784],
                    [71.591, -16.642],
                    [71.591, -8.503],
                    [61.903, -18.557],
                    [61.231, -19.339],
                    [60.839, -19.767],
                    [60.503, -19.868],
                    [59.551, -19.843],
                    [57.423, -19.817],
                    [56.359, -19.843],
                    [55.183, -19.868],
                    [55.127, -19.717],
                    [55.183, -19.565],
                    [56.541, -19.225],
                    [58.123, -17.978],
                    [58.123, -7.318],
                    [57.409, -5.201],
                    [55.463, -4.42],
                    [55.379, -4.269],
                    [55.463, -4.118],
                    [56.835, -4.143],
                    [58.571, -4.168],
                    [60.083, -4.143],
                    [61.287, -4.118],
                    [61.343, -4.269],
                    [61.287, -4.42],
                    [59.579, -5.201],
                    [58.963, -7.318],
                    [58.963, -17.121],
                    [72.095, -3.664],
                    [72.277, -3.639],
                    [72.403, -3.74],
                    [72.403, -16.642],
                    [73.047, -18.772],
                    [74.811, -19.565],
                    [74.867, -19.717]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 1.2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.472, -7.578], ix: 2 },
              a: { a: 0, k: [54.808, -11.429], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 33,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 43,
                    s: [109.311, 109.311]
                  },
                  { t: 53, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: 4, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 33,
                    s: [0]
                  },
                  { t: 35, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "N",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 4,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, -0.033],
                    [0.877, -0.537],
                    [1.456, 0],
                    [0, 0],
                    [0.205, 0.235],
                    [0, 0.487],
                    [0, 0],
                    [0, 0],
                    [-0.588, -0.395],
                    [0, -0.689],
                    [-0.112, 0],
                    [0, 0.034],
                    [0.037, 0.571],
                    [0, 0],
                    [0, 0],
                    [0.102, 0],
                    [0, -0.05],
                    [0.578, -0.336],
                    [1.082, 0],
                    [0, 0],
                    [0, 0],
                    [-0.262, 0.219],
                    [-0.56, 0],
                    [0, 0],
                    [-0.71, -0.47],
                    [-0.299, -0.974],
                    [-0.103, 0.017],
                    [0, 0.034],
                    [0, 0],
                    [0.186, 0],
                    [0, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.28, -0.092],
                    [-0.094, -0.235],
                    [0, -0.504],
                    [0, 0],
                    [0.093, -0.243],
                    [0.27, -0.084],
                    [0.597, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [0, 0],
                    [-0.056, 0.059],
                    [0, 0.135],
                    [-0.187, 1.31],
                    [0.046, 0.025],
                    [0.056, 0]
                  ],
                  o: [
                    [-0.411, 1.126],
                    [-0.878, 0.538],
                    [0, 0],
                    [-0.448, 0],
                    [-0.206, -0.235],
                    [0, 0],
                    [0, 0],
                    [1.101, 0],
                    [0.588, 0.395],
                    [0, 0.034],
                    [0.112, 0],
                    [0, -0.336],
                    [0, 0],
                    [0, 0],
                    [0, -0.05],
                    [-0.103, 0],
                    [0, 0.605],
                    [-0.579, 0.336],
                    [0, 0],
                    [0, 0],
                    [0, -0.454],
                    [0.261, -0.218],
                    [0, 0],
                    [1.157, 0],
                    [0.709, 0.471],
                    [0.018, 0.05],
                    [0.102, -0.017],
                    [0, 0],
                    [0, -0.151],
                    [0, 0],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.578, 0],
                    [0.28, 0.093],
                    [0.093, 0.235],
                    [0, 0],
                    [0, 0.504],
                    [-0.094, 0.244],
                    [-0.271, 0.084],
                    [-0.056, 0],
                    [0, 0.101],
                    [0, 0],
                    [0.168, 0],
                    [0.056, -0.059],
                    [0, -1.075],
                    [0, -0.017],
                    [-0.047, -0.025],
                    [-0.075, 0]
                  ],
                  v: [
                    [86.426, -16.404],
                    [84.494, -13.909],
                    [80.994, -13.103],
                    [80.07, -13.103],
                    [79.09, -13.455],
                    [78.782, -14.539],
                    [78.782, -20.234],
                    [81.078, -20.234],
                    [83.612, -19.642],
                    [84.494, -18.017],
                    [84.662, -17.966],
                    [84.83, -18.017],
                    [84.774, -19.377],
                    [84.746, -20.587],
                    [84.774, -22.855],
                    [84.62, -22.931],
                    [84.466, -22.855],
                    [83.598, -21.444],
                    [81.106, -20.94],
                    [78.782, -20.94],
                    [78.782, -26.081],
                    [79.174, -27.089],
                    [80.406, -27.416],
                    [81.246, -27.416],
                    [84.046, -26.711],
                    [85.558, -24.543],
                    [85.74, -24.493],
                    [85.894, -24.569],
                    [85.838, -27.92],
                    [85.558, -28.147],
                    [73.686, -28.147],
                    [73.602, -27.996],
                    [73.686, -27.845],
                    [74.974, -27.706],
                    [75.534, -27.215],
                    [75.674, -26.106],
                    [75.674, -14.438],
                    [75.534, -13.317],
                    [74.988, -12.825],
                    [73.686, -12.699],
                    [73.602, -12.548],
                    [73.686, -12.397],
                    [86.062, -12.397],
                    [86.398, -12.485],
                    [86.482, -12.775],
                    [86.762, -16.353],
                    [86.692, -16.416],
                    [86.538, -16.454]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 1.2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.435, -7.781], ix: 2 },
              a: { a: 0, k: [53.242, -17.289], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 30,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 40,
                    s: [109.311, 109.311]
                  },
                  { t: 50, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: 10, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 30,
                    s: [0]
                  },
                  { t: 32, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "E",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 5,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.037, 0],
                    [0.793, 0.546],
                    [1.017, 1.193],
                    [1.493, 2.117],
                    [-0.523, 0.706],
                    [0, 0.773],
                    [0.942, 0.563],
                    [1.717, 0],
                    [0.326, -0.017],
                    [0.205, -0.017],
                    [0.541, 0],
                    [0.858, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.28, -0.092],
                    [-0.094, -0.235],
                    [0, -0.504],
                    [0, 0],
                    [0.102, -0.243],
                    [0.27, -0.084],
                    [0.597, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.374, 0.017],
                    [0, 0],
                    [0, 0],
                    [-0.616, 0],
                    [0, 0.101],
                    [0.037, 0],
                    [0.27, 0.084],
                    [0.093, 0.235],
                    [0, 0.521],
                    [0, 0],
                    [-0.728, 0],
                    [-0.15, 0.017],
                    [-1.12, -1.386],
                    [-0.411, 0],
                    [0, 0],
                    [0, 0.101]
                  ],
                  o: [
                    [-0.747, 0],
                    [-0.794, -0.546],
                    [-1.018, -1.193],
                    [0.84, -0.437],
                    [0.522, -0.706],
                    [0, -1.008],
                    [-0.943, -0.563],
                    [-0.448, 0],
                    [-0.327, 0.017],
                    [-0.654, 0.05],
                    [-0.504, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.578, 0],
                    [0.28, 0.093],
                    [0.093, 0.235],
                    [0, 0],
                    [0, 0.504],
                    [-0.103, 0.244],
                    [-0.271, 0.084],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.634, 0],
                    [0, 0],
                    [0, 0],
                    [0.354, 0.017],
                    [0.037, 0],
                    [0, -0.101],
                    [-0.598, 0],
                    [-0.271, -0.084],
                    [-0.094, -0.235],
                    [0, 0],
                    [0.298, 0.017],
                    [0.28, 0],
                    [1.586, 2.487],
                    [1.12, 1.386],
                    [0, 0],
                    [0.037, 0],
                    [0, -0.101]
                  ],
                  v: [
                    [105.523, -20.058],
                    [103.213, -20.877],
                    [100.497, -23.485],
                    [96.731, -28.45],
                    [98.775, -30.163],
                    [99.559, -32.381],
                    [98.145, -34.737],
                    [94.155, -35.581],
                    [92.993, -35.556],
                    [92.195, -35.506],
                    [90.403, -35.43],
                    [88.359, -35.48],
                    [86.875, -35.506],
                    [86.819, -35.354],
                    [86.875, -35.203],
                    [88.163, -35.065],
                    [88.723, -34.573],
                    [88.863, -33.464],
                    [88.863, -21.797],
                    [88.709, -20.675],
                    [88.149, -20.184],
                    [86.847, -20.058],
                    [86.763, -19.907],
                    [86.847, -19.756],
                    [88.359, -19.781],
                    [90.403, -19.806],
                    [92.531, -19.781],
                    [93.987, -19.756],
                    [94.043, -19.907],
                    [93.987, -20.058],
                    [92.685, -20.184],
                    [92.139, -20.663],
                    [91.999, -21.797],
                    [91.999, -27.643],
                    [93.539, -27.618],
                    [94.183, -27.643],
                    [98.243, -21.835],
                    [100.539, -19.756],
                    [105.523, -19.756],
                    [105.579, -19.907]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ind: 1,
              ty: "sh",
              ix: 2,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.448, 0.067],
                    [0, 0],
                    [-0.262, 0.252],
                    [-0.635, 0],
                    [-0.448, -0.521],
                    [0, -1.377],
                    [0.177, -0.454],
                    [0.392, -0.185],
                    [0.672, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, -0.588],
                    [0.261, -0.252],
                    [0.84, 0],
                    [0.448, 0.521],
                    [0, 0.823],
                    [-0.178, 0.454],
                    [-0.392, 0.185],
                    [-0.635, 0]
                  ],
                  v: [
                    [91.999, -28.374],
                    [91.999, -33.414],
                    [92.391, -34.674],
                    [93.735, -35.052],
                    [95.667, -34.271],
                    [96.339, -31.423],
                    [96.073, -29.508],
                    [95.219, -28.55],
                    [93.623, -28.273]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 2",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 1.2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.173, -7.629], ix: 2 },
              a: { a: 0, k: [51.319, -21.649], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 25,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 35,
                    s: [109.311, 109.311]
                  },
                  { t: 45, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: 15, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 25,
                    s: [0]
                  },
                  { t: 27, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "R",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 6,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-0.038, -0.117],
                    [-0.187, -1.638],
                    [-0.168, -2.486],
                    [-0.103, -0.025],
                    [-0.112, 0],
                    [-0.103, 0.025],
                    [0, 0.034],
                    [0, 0.168],
                    [-0.196, 1.512],
                    [-0.411, 1.277],
                    [0.438, 0.059],
                    [0.485, 0],
                    [0.429, -0.059]
                  ],
                  o: [
                    [0.41, 1.395],
                    [0.186, 1.638],
                    [0, 0.034],
                    [0.102, 0.025],
                    [0.112, 0],
                    [0.102, -0.025],
                    [0.037, -0.369],
                    [0.205, -2.318],
                    [0.196, -1.512],
                    [0.037, -0.117],
                    [-0.439, -0.059],
                    [-0.486, 0],
                    [-0.43, 0.059]
                  ],
                  v: [
                    [102.595, -43.654],
                    [103.491, -39.106],
                    [104.023, -32.919],
                    [104.177, -32.831],
                    [104.499, -32.793],
                    [104.821, -32.831],
                    [104.975, -32.919],
                    [105.031, -33.725],
                    [105.633, -39.471],
                    [106.543, -43.654],
                    [105.941, -43.919],
                    [104.555, -44.007],
                    [103.183, -43.919]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ind: 1,
              ty: "sh",
              ix: 2,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-0.523, 0],
                    [-0.29, 0.269],
                    [0, 0.487],
                    [0.289, 0.261],
                    [0.522, 0],
                    [0.308, -0.269],
                    [0, -0.437],
                    [-0.308, -0.277]
                  ],
                  o: [
                    [0.522, 0],
                    [0.289, -0.269],
                    [0, -0.454],
                    [-0.29, -0.26],
                    [-0.523, 0],
                    [-0.308, 0.269],
                    [0, 0.471],
                    [0.308, 0.277]
                  ],
                  v: [
                    [104.387, -27.879],
                    [105.605, -28.282],
                    [106.039, -29.416],
                    [105.605, -30.487],
                    [104.387, -30.878],
                    [103.141, -30.475],
                    [102.679, -29.416],
                    [103.141, -28.295]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 2",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 1.2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.476, -7.157], ix: 2 },
              a: { a: 0, k: [49.683, -25.7], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 20,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 30,
                    s: [109.311, 109.311]
                  },
                  { t: 40, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: 20, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 20,
                    s: [0]
                  },
                  { t: 22, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "!",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 7,
          mn: "ADBE Vector Group",
          hd: !1
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      ct: 1,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "WINNER! Outlines",
      parent: 4,
      sr: 1,
      ks: {
        o: { a: 0, k: 75, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [93.781, 188.999, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.037, 0],
                    [0, 0],
                    [0.373, 0],
                    [0.672, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.29, -0.302],
                    [0, -0.521],
                    [0.224, -0.537],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [-1.251, 0],
                    [0, 0.101],
                    [0.037, 0],
                    [0, 0],
                    [0.317, 0],
                    [0.177, 0.025],
                    [0.149, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [0, -0.487],
                    [0.41, -0.958],
                    [0, 0],
                    [0, 0],
                    [0, 0.286],
                    [-0.122, 0.059],
                    [-0.262, 0],
                    [0, 0.101],
                    [0.056, 0],
                    [0.186, -0.017],
                    [1.064, 0],
                    [0.252, 0.025],
                    [0.186, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.28, -0.294],
                    [-0.318, -0.605],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0.286],
                    [-0.196, 0.084],
                    [-0.467, 0],
                    [0, 0.101],
                    [0.056, 0],
                    [0.242, -0.017],
                    [1.25, 0],
                    [0.373, 0.034],
                    [0.28, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.215, -0.092],
                    [-0.178, -0.235],
                    [-0.28, -0.537],
                    [0, 0],
                    [-0.187, 0],
                    [-0.019, 0.067],
                    [0, 0],
                    [0, 0],
                    [-0.187, 0],
                    [-0.019, 0.067],
                    [0, 0],
                    [-0.607, 0.529],
                    [-0.691, 0],
                    [0, 0.101]
                  ],
                  o: [
                    [0, 0],
                    [-0.486, 0.034],
                    [-0.56, 0],
                    [0, 0],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.485, 0],
                    [0.289, 0.302],
                    [0, 0.437],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0.821, -1.982],
                    [0.037, 0],
                    [0, -0.101],
                    [0, 0],
                    [-0.448, 0.034],
                    [-0.71, 0],
                    [-0.178, -0.025],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.466, 0],
                    [0, 0.487],
                    [0, 0],
                    [0, 0],
                    [-0.504, -0.941],
                    [0, -0.151],
                    [0.121, -0.059],
                    [0.056, 0],
                    [0, -0.101],
                    [-0.299, 0],
                    [-0.71, 0.034],
                    [-0.467, 0],
                    [-0.252, -0.025],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.317, 0],
                    [0.28, 0.294],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [-0.43, -0.823],
                    [0, -0.218],
                    [0.196, -0.084],
                    [0.056, 0],
                    [0, -0.101],
                    [-0.355, 0],
                    [-0.859, 0.034],
                    [-0.598, 0],
                    [-0.112, -0.017],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.354, 0],
                    [0.214, 0.093],
                    [0.177, 0.235],
                    [0, 0],
                    [0.018, 0.067],
                    [0.186, 0],
                    [0, 0],
                    [0, 0],
                    [0.018, 0.067],
                    [0.186, 0],
                    [0, 0],
                    [0.392, -0.924],
                    [0.606, -0.529],
                    [0.037, 0],
                    [0, -0.101]
                  ],
                  v: [
                    [23.43, -2.999],
                    [22.226, -2.974],
                    [20.938, -2.924],
                    [19.09, -2.974],
                    [17.802, -2.999],
                    [17.718, -2.848],
                    [17.802, -2.697],
                    [18.964, -2.243],
                    [19.398, -1.009],
                    [19.062, 0.453],
                    [15.45, 9.147],
                    [12.09, 2.771],
                    [13.126, 0.277],
                    [16.234, -2.697],
                    [16.29, -2.848],
                    [16.234, -2.999],
                    [15.198, -2.974],
                    [14.05, -2.924],
                    [12.72, -2.962],
                    [12.23, -2.999],
                    [12.146, -2.848],
                    [12.23, -2.697],
                    [12.93, -1.966],
                    [12.314, 0.201],
                    [11.614, 1.889],
                    [10.382, -0.454],
                    [9.626, -2.294],
                    [9.808, -2.609],
                    [10.382, -2.697],
                    [10.466, -2.848],
                    [10.382, -2.999],
                    [9.654, -2.974],
                    [6.994, -2.924],
                    [5.916, -2.962],
                    [5.258, -2.999],
                    [5.174, -2.848],
                    [5.258, -2.697],
                    [6.154, -2.256],
                    [7.05, -0.908],
                    [10.158, 5.014],
                    [8.394, 9.172],
                    [3.354, -0.454],
                    [2.71, -2.117],
                    [3.004, -2.571],
                    [3.998, -2.697],
                    [4.082, -2.848],
                    [3.998, -2.999],
                    [3.102, -2.974],
                    [-0.062, -2.924],
                    [-1.518, -2.974],
                    [-2.106, -2.999],
                    [-2.19, -2.848],
                    [-2.106, -2.697],
                    [-1.252, -2.558],
                    [-0.664, -2.067],
                    [0.022, -0.908],
                    [7.162, 12.725],
                    [7.47, 12.826],
                    [7.778, 12.725],
                    [10.606, 5.896],
                    [14.19, 12.725],
                    [14.498, 12.826],
                    [14.806, 12.725],
                    [19.986, 0.277],
                    [21.484, -1.903],
                    [23.43, -2.697],
                    [23.486, -2.848]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 3
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 4
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.547, -6.981], ix: 2 },
              a: { a: 0, k: [54.584, 12.438], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 20,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 30,
                    s: [109.311, 109.311]
                  },
                  { t: 40, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: -20, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 20,
                    s: [0]
                  },
                  { t: 40, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "W",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0.521],
                    [0, 0],
                    [-0.094, 0.244],
                    [-0.28, 0.101],
                    [-0.579, 0],
                    [0, 0.101],
                    [0.056, 0],
                    [0, 0],
                    [0.578, 0],
                    [0.858, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.28, -0.092],
                    [-0.103, -0.235],
                    [0, -0.504],
                    [0, 0],
                    [0.102, -0.243],
                    [0.28, -0.084],
                    [0.597, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.374, 0.017],
                    [0, 0],
                    [0, 0],
                    [-0.616, 0],
                    [0, 0.101],
                    [0.056, 0],
                    [0.27, 0.084],
                    [0.093, 0.235]
                  ],
                  o: [
                    [0, 0],
                    [0, -0.504],
                    [0.093, -0.243],
                    [0.28, -0.101],
                    [0.056, 0],
                    [0, -0.101],
                    [0, 0],
                    [-0.859, 0.034],
                    [-0.523, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.597, 0],
                    [0.28, 0.093],
                    [0.102, 0.235],
                    [0, 0],
                    [0, 0.504],
                    [-0.103, 0.244],
                    [-0.28, 0.084],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.634, 0],
                    [0, 0],
                    [0, 0],
                    [0.354, 0.017],
                    [0.056, 0],
                    [0, -0.101],
                    [-0.598, 0],
                    [-0.271, -0.084],
                    [-0.094, -0.235]
                  ],
                  v: [
                    [30.578, 9.52],
                    [30.578, -2.097],
                    [30.718, -3.219],
                    [31.278, -3.735],
                    [32.566, -3.887],
                    [32.65, -4.038],
                    [32.566, -4.189],
                    [31.138, -4.164],
                    [28.982, -4.113],
                    [26.91, -4.164],
                    [25.398, -4.189],
                    [25.342, -4.038],
                    [25.398, -3.887],
                    [26.714, -3.748],
                    [27.288, -3.257],
                    [27.442, -2.148],
                    [27.442, 9.52],
                    [27.288, 10.641],
                    [26.714, 11.133],
                    [25.398, 11.259],
                    [25.342, 11.41],
                    [25.398, 11.561],
                    [26.91, 11.536],
                    [28.982, 11.511],
                    [31.11, 11.536],
                    [32.566, 11.561],
                    [32.65, 11.41],
                    [32.566, 11.259],
                    [31.264, 11.133],
                    [30.718, 10.654]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 3
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 4
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.391, -8.077], ix: 2 },
              a: { a: 0, k: [55.594, 6.535], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 25,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 35,
                    s: [109.311, 109.311]
                  },
                  { t: 45, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: -15, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 25,
                    s: [0]
                  },
                  { t: 45, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "I",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.037, 0],
                    [0, 0],
                    [0.373, 0],
                    [0.597, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.411, -0.521],
                    [0, -0.907],
                    [0, 0],
                    [0, 0],
                    [0.317, 0.387],
                    [0.074, 0.067],
                    [0.149, 0],
                    [0.261, -0.017],
                    [0, 0],
                    [0.242, 0.017],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.439, -0.227],
                    [-0.616, -0.605],
                    [0, 0],
                    [0.476, -0.521],
                    [0.821, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.318, 0.017],
                    [0, 0],
                    [0, 0],
                    [-0.523, 0],
                    [0, 0.101],
                    [0.037, 0],
                    [0.41, 0.521],
                    [0, 0.891],
                    [0, 0],
                    [0, 0],
                    [-0.084, 0.017],
                    [0, 0.05],
                    [0, 0],
                    [-0.43, 0.529],
                    [-0.747, 0],
                    [0, 0.101]
                  ],
                  o: [
                    [0, 0],
                    [-0.672, 0.034],
                    [-0.411, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.728, 0],
                    [0.41, 0.521],
                    [0, 0],
                    [0, 0],
                    [-0.131, -0.134],
                    [-0.187, -0.218],
                    [-0.075, -0.067],
                    [-0.374, 0],
                    [0, 0],
                    [-0.467, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.466, 0],
                    [0.438, 0.227],
                    [0, 0],
                    [0, 0.891],
                    [-0.476, 0.521],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.597, 0],
                    [0, 0],
                    [0, 0],
                    [0.28, 0.017],
                    [0.037, 0],
                    [0, -0.101],
                    [-0.728, 0],
                    [-0.411, -0.521],
                    [0, 0],
                    [0, 0],
                    [0.037, 0.033],
                    [0.084, -0.017],
                    [0, 0],
                    [0, -0.89],
                    [0.429, -0.529],
                    [0.037, 0],
                    [0, -0.101]
                  ],
                  v: [
                    [55.381, -8.417],
                    [54.121, -8.392],
                    [52.553, -8.342],
                    [51.041, -8.392],
                    [49.837, -8.417],
                    [49.781, -8.266],
                    [49.837, -8.115],
                    [51.545, -7.334],
                    [52.161, -5.192],
                    [52.161, 2.948],
                    [42.473, -7.107],
                    [41.801, -7.888],
                    [41.409, -8.316],
                    [41.073, -8.417],
                    [40.121, -8.392],
                    [37.993, -8.367],
                    [36.929, -8.392],
                    [35.753, -8.417],
                    [35.697, -8.266],
                    [35.753, -8.115],
                    [37.111, -7.775],
                    [38.693, -6.527],
                    [38.693, 4.132],
                    [37.979, 6.249],
                    [36.033, 7.03],
                    [35.949, 7.182],
                    [36.033, 7.333],
                    [37.405, 7.308],
                    [39.141, 7.282],
                    [40.653, 7.308],
                    [41.857, 7.333],
                    [41.913, 7.182],
                    [41.857, 7.03],
                    [40.149, 6.249],
                    [39.533, 4.132],
                    [39.533, -5.67],
                    [52.665, 7.786],
                    [52.847, 7.812],
                    [52.973, 7.711],
                    [52.973, -5.192],
                    [53.617, -7.321],
                    [55.381, -8.115],
                    [55.437, -8.266]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 3
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 4
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [54.701, -7.49], ix: 2 },
              a: { a: 0, k: [55.211, 0.196], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 30,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 40,
                    s: [109.311, 109.311]
                  },
                  { t: 50, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: -8, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 30,
                    s: [0]
                  },
                  { t: 50, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "N",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.037, 0],
                    [0, 0],
                    [0.373, 0],
                    [0.597, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.411, -0.521],
                    [0, -0.907],
                    [0, 0],
                    [0, 0],
                    [0.317, 0.387],
                    [0.074, 0.067],
                    [0.149, 0],
                    [0.261, -0.017],
                    [0, 0],
                    [0.242, 0.017],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.439, -0.227],
                    [-0.616, -0.605],
                    [0, 0],
                    [0.476, -0.521],
                    [0.821, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.318, 0.017],
                    [0, 0],
                    [0, 0],
                    [-0.523, 0],
                    [0, 0.101],
                    [0.037, 0],
                    [0.41, 0.521],
                    [0, 0.891],
                    [0, 0],
                    [0, 0],
                    [-0.084, 0.017],
                    [0, 0.05],
                    [0, 0],
                    [-0.43, 0.529],
                    [-0.747, 0],
                    [0, 0.101]
                  ],
                  o: [
                    [0, 0],
                    [-0.672, 0.034],
                    [-0.411, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.728, 0],
                    [0.41, 0.521],
                    [0, 0],
                    [0, 0],
                    [-0.131, -0.134],
                    [-0.187, -0.218],
                    [-0.075, -0.067],
                    [-0.374, 0],
                    [0, 0],
                    [-0.467, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.466, 0],
                    [0.438, 0.227],
                    [0, 0],
                    [0, 0.891],
                    [-0.476, 0.521],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.597, 0],
                    [0, 0],
                    [0, 0],
                    [0.28, 0.017],
                    [0.037, 0],
                    [0, -0.101],
                    [-0.728, 0],
                    [-0.411, -0.521],
                    [0, 0],
                    [0, 0],
                    [0.037, 0.033],
                    [0.084, -0.017],
                    [0, 0],
                    [0, -0.89],
                    [0.429, -0.529],
                    [0.037, 0],
                    [0, -0.101]
                  ],
                  v: [
                    [74.811, -19.868],
                    [73.551, -19.843],
                    [71.983, -19.792],
                    [70.471, -19.843],
                    [69.267, -19.868],
                    [69.211, -19.717],
                    [69.267, -19.565],
                    [70.975, -18.784],
                    [71.591, -16.642],
                    [71.591, -8.503],
                    [61.903, -18.557],
                    [61.231, -19.339],
                    [60.839, -19.767],
                    [60.503, -19.868],
                    [59.551, -19.843],
                    [57.423, -19.817],
                    [56.359, -19.843],
                    [55.183, -19.868],
                    [55.127, -19.717],
                    [55.183, -19.565],
                    [56.541, -19.225],
                    [58.123, -17.978],
                    [58.123, -7.318],
                    [57.409, -5.201],
                    [55.463, -4.42],
                    [55.379, -4.269],
                    [55.463, -4.118],
                    [56.835, -4.143],
                    [58.571, -4.168],
                    [60.083, -4.143],
                    [61.287, -4.118],
                    [61.343, -4.269],
                    [61.287, -4.42],
                    [59.579, -5.201],
                    [58.963, -7.318],
                    [58.963, -17.121],
                    [72.095, -3.664],
                    [72.277, -3.639],
                    [72.403, -3.74],
                    [72.403, -16.642],
                    [73.047, -18.772],
                    [74.811, -19.565],
                    [74.867, -19.717]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 3
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 4
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.472, -7.578], ix: 2 },
              a: { a: 0, k: [54.808, -11.429], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 33,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 43,
                    s: [109.311, 109.311]
                  },
                  { t: 53, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: 4, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 33,
                    s: [0]
                  },
                  { t: 53, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "N",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 4,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, -0.033],
                    [0.877, -0.537],
                    [1.456, 0],
                    [0, 0],
                    [0.205, 0.235],
                    [0, 0.487],
                    [0, 0],
                    [0, 0],
                    [-0.588, -0.395],
                    [0, -0.689],
                    [-0.112, 0],
                    [0, 0.034],
                    [0.037, 0.571],
                    [0, 0],
                    [0, 0],
                    [0.102, 0],
                    [0, -0.05],
                    [0.578, -0.336],
                    [1.082, 0],
                    [0, 0],
                    [0, 0],
                    [-0.262, 0.219],
                    [-0.56, 0],
                    [0, 0],
                    [-0.71, -0.47],
                    [-0.299, -0.974],
                    [-0.103, 0.017],
                    [0, 0.034],
                    [0, 0],
                    [0.186, 0],
                    [0, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.28, -0.092],
                    [-0.094, -0.235],
                    [0, -0.504],
                    [0, 0],
                    [0.093, -0.243],
                    [0.27, -0.084],
                    [0.597, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [0, 0],
                    [-0.056, 0.059],
                    [0, 0.135],
                    [-0.187, 1.31],
                    [0.046, 0.025],
                    [0.056, 0]
                  ],
                  o: [
                    [-0.411, 1.126],
                    [-0.878, 0.538],
                    [0, 0],
                    [-0.448, 0],
                    [-0.206, -0.235],
                    [0, 0],
                    [0, 0],
                    [1.101, 0],
                    [0.588, 0.395],
                    [0, 0.034],
                    [0.112, 0],
                    [0, -0.336],
                    [0, 0],
                    [0, 0],
                    [0, -0.05],
                    [-0.103, 0],
                    [0, 0.605],
                    [-0.579, 0.336],
                    [0, 0],
                    [0, 0],
                    [0, -0.454],
                    [0.261, -0.218],
                    [0, 0],
                    [1.157, 0],
                    [0.709, 0.471],
                    [0.018, 0.05],
                    [0.102, -0.017],
                    [0, 0],
                    [0, -0.151],
                    [0, 0],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.578, 0],
                    [0.28, 0.093],
                    [0.093, 0.235],
                    [0, 0],
                    [0, 0.504],
                    [-0.094, 0.244],
                    [-0.271, 0.084],
                    [-0.056, 0],
                    [0, 0.101],
                    [0, 0],
                    [0.168, 0],
                    [0.056, -0.059],
                    [0, -1.075],
                    [0, -0.017],
                    [-0.047, -0.025],
                    [-0.075, 0]
                  ],
                  v: [
                    [86.426, -16.404],
                    [84.494, -13.909],
                    [80.994, -13.103],
                    [80.07, -13.103],
                    [79.09, -13.455],
                    [78.782, -14.539],
                    [78.782, -20.234],
                    [81.078, -20.234],
                    [83.612, -19.642],
                    [84.494, -18.017],
                    [84.662, -17.966],
                    [84.83, -18.017],
                    [84.774, -19.377],
                    [84.746, -20.587],
                    [84.774, -22.855],
                    [84.62, -22.931],
                    [84.466, -22.855],
                    [83.598, -21.444],
                    [81.106, -20.94],
                    [78.782, -20.94],
                    [78.782, -26.081],
                    [79.174, -27.089],
                    [80.406, -27.416],
                    [81.246, -27.416],
                    [84.046, -26.711],
                    [85.558, -24.543],
                    [85.74, -24.493],
                    [85.894, -24.569],
                    [85.838, -27.92],
                    [85.558, -28.147],
                    [73.686, -28.147],
                    [73.602, -27.996],
                    [73.686, -27.845],
                    [74.974, -27.706],
                    [75.534, -27.215],
                    [75.674, -26.106],
                    [75.674, -14.438],
                    [75.534, -13.317],
                    [74.988, -12.825],
                    [73.686, -12.699],
                    [73.602, -12.548],
                    [73.686, -12.397],
                    [86.062, -12.397],
                    [86.398, -12.485],
                    [86.482, -12.775],
                    [86.762, -16.353],
                    [86.692, -16.416],
                    [86.538, -16.454]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 3
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 4
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.435, -7.781], ix: 2 },
              a: { a: 0, k: [53.242, -17.289], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 30,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 40,
                    s: [109.311, 109.311]
                  },
                  { t: 50, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: 10, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 30,
                    s: [0]
                  },
                  { t: 50, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "E",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 5,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.037, 0],
                    [0.793, 0.546],
                    [1.017, 1.193],
                    [1.493, 2.117],
                    [-0.523, 0.706],
                    [0, 0.773],
                    [0.942, 0.563],
                    [1.717, 0],
                    [0.326, -0.017],
                    [0.205, -0.017],
                    [0.541, 0],
                    [0.858, 0.034],
                    [0, 0],
                    [0, -0.101],
                    [-0.038, 0],
                    [-0.28, -0.092],
                    [-0.094, -0.235],
                    [0, -0.504],
                    [0, 0],
                    [0.102, -0.243],
                    [0.27, -0.084],
                    [0.597, 0],
                    [0, -0.101],
                    [-0.056, 0],
                    [-0.374, 0.017],
                    [0, 0],
                    [0, 0],
                    [-0.616, 0],
                    [0, 0.101],
                    [0.037, 0],
                    [0.27, 0.084],
                    [0.093, 0.235],
                    [0, 0.521],
                    [0, 0],
                    [-0.728, 0],
                    [-0.15, 0.017],
                    [-1.12, -1.386],
                    [-0.411, 0],
                    [0, 0],
                    [0, 0.101]
                  ],
                  o: [
                    [-0.747, 0],
                    [-0.794, -0.546],
                    [-1.018, -1.193],
                    [0.84, -0.437],
                    [0.522, -0.706],
                    [0, -1.008],
                    [-0.943, -0.563],
                    [-0.448, 0],
                    [-0.327, 0.017],
                    [-0.654, 0.05],
                    [-0.504, 0],
                    [0, 0],
                    [-0.038, 0],
                    [0, 0.101],
                    [0.578, 0],
                    [0.28, 0.093],
                    [0.093, 0.235],
                    [0, 0],
                    [0, 0.504],
                    [-0.103, 0.244],
                    [-0.271, 0.084],
                    [-0.056, 0],
                    [0, 0.101],
                    [0.634, 0],
                    [0, 0],
                    [0, 0],
                    [0.354, 0.017],
                    [0.037, 0],
                    [0, -0.101],
                    [-0.598, 0],
                    [-0.271, -0.084],
                    [-0.094, -0.235],
                    [0, 0],
                    [0.298, 0.017],
                    [0.28, 0],
                    [1.586, 2.487],
                    [1.12, 1.386],
                    [0, 0],
                    [0.037, 0],
                    [0, -0.101]
                  ],
                  v: [
                    [105.523, -20.058],
                    [103.213, -20.877],
                    [100.497, -23.485],
                    [96.731, -28.45],
                    [98.775, -30.163],
                    [99.559, -32.381],
                    [98.145, -34.737],
                    [94.155, -35.581],
                    [92.993, -35.556],
                    [92.195, -35.506],
                    [90.403, -35.43],
                    [88.359, -35.48],
                    [86.875, -35.506],
                    [86.819, -35.354],
                    [86.875, -35.203],
                    [88.163, -35.065],
                    [88.723, -34.573],
                    [88.863, -33.464],
                    [88.863, -21.797],
                    [88.709, -20.675],
                    [88.149, -20.184],
                    [86.847, -20.058],
                    [86.763, -19.907],
                    [86.847, -19.756],
                    [88.359, -19.781],
                    [90.403, -19.806],
                    [92.531, -19.781],
                    [93.987, -19.756],
                    [94.043, -19.907],
                    [93.987, -20.058],
                    [92.685, -20.184],
                    [92.139, -20.663],
                    [91.999, -21.797],
                    [91.999, -27.643],
                    [93.539, -27.618],
                    [94.183, -27.643],
                    [98.243, -21.835],
                    [100.539, -19.756],
                    [105.523, -19.756],
                    [105.579, -19.907]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ind: 1,
              ty: "sh",
              ix: 2,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.448, 0.067],
                    [0, 0],
                    [-0.262, 0.252],
                    [-0.635, 0],
                    [-0.448, -0.521],
                    [0, -1.377],
                    [0.177, -0.454],
                    [0.392, -0.185],
                    [0.672, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, -0.588],
                    [0.261, -0.252],
                    [0.84, 0],
                    [0.448, 0.521],
                    [0, 0.823],
                    [-0.178, 0.454],
                    [-0.392, 0.185],
                    [-0.635, 0]
                  ],
                  v: [
                    [91.999, -28.374],
                    [91.999, -33.414],
                    [92.391, -34.674],
                    [93.735, -35.052],
                    [95.667, -34.271],
                    [96.339, -31.423],
                    [96.073, -29.508],
                    [95.219, -28.55],
                    [93.623, -28.273]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 2",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 3
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 4
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.173, -7.629], ix: 2 },
              a: { a: 0, k: [51.319, -21.649], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 25,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 35,
                    s: [109.311, 109.311]
                  },
                  { t: 45, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: 15, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 25,
                    s: [0]
                  },
                  { t: 45, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "R",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 6,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-0.038, -0.117],
                    [-0.187, -1.638],
                    [-0.168, -2.486],
                    [-0.103, -0.025],
                    [-0.112, 0],
                    [-0.103, 0.025],
                    [0, 0.034],
                    [0, 0.168],
                    [-0.196, 1.512],
                    [-0.411, 1.277],
                    [0.438, 0.059],
                    [0.485, 0],
                    [0.429, -0.059]
                  ],
                  o: [
                    [0.41, 1.395],
                    [0.186, 1.638],
                    [0, 0.034],
                    [0.102, 0.025],
                    [0.112, 0],
                    [0.102, -0.025],
                    [0.037, -0.369],
                    [0.205, -2.318],
                    [0.196, -1.512],
                    [0.037, -0.117],
                    [-0.439, -0.059],
                    [-0.486, 0],
                    [-0.43, 0.059]
                  ],
                  v: [
                    [102.595, -43.654],
                    [103.491, -39.106],
                    [104.023, -32.919],
                    [104.177, -32.831],
                    [104.499, -32.793],
                    [104.821, -32.831],
                    [104.975, -32.919],
                    [105.031, -33.725],
                    [105.633, -39.471],
                    [106.543, -43.654],
                    [105.941, -43.919],
                    [104.555, -44.007],
                    [103.183, -43.919]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ind: 1,
              ty: "sh",
              ix: 2,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-0.523, 0],
                    [-0.29, 0.269],
                    [0, 0.487],
                    [0.289, 0.261],
                    [0.522, 0],
                    [0.308, -0.269],
                    [0, -0.437],
                    [-0.308, -0.277]
                  ],
                  o: [
                    [0.522, 0],
                    [0.289, -0.269],
                    [0, -0.454],
                    [-0.29, -0.26],
                    [-0.523, 0],
                    [-0.308, 0.269],
                    [0, 0.471],
                    [0.308, 0.277]
                  ],
                  v: [
                    [104.387, -27.879],
                    [105.605, -28.282],
                    [106.039, -29.416],
                    [105.605, -30.487],
                    [104.387, -30.878],
                    [103.141, -30.475],
                    [102.679, -29.416],
                    [103.141, -28.295]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 2",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 3
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.313725501299, 0.196078434587, 0.078431375325, 1],
                ix: 4
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [55.476, -7.157], ix: 2 },
              a: { a: 0, k: [49.683, -25.7], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.593, 0.593], y: [0.929, 0.929] },
                    o: { x: [0.175, 0.175], y: [0.032, 0.032] },
                    t: 20,
                    s: [200, 200]
                  },
                  {
                    i: { x: [0.698, 0.698], y: [1, 1] },
                    o: { x: [0.351, 0.351], y: [0.593, 0.593] },
                    t: 30,
                    s: [109.311, 109.311]
                  },
                  { t: 40, s: [100, 100] }
                ],
                ix: 3
              },
              r: { a: 0, k: 20, ix: 6 },
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 20,
                    s: [0]
                  },
                  { t: 40, s: [100] }
                ],
                ix: 7
              },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "!",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 7,
          mn: "ADBE Vector Group",
          hd: !1
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      ct: 1,
      bm: 0
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "stars",
      parent: 4,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [150, 125.393, 0], ix: 2, l: 2 },
        a: { a: 0, k: [150, 150, 0], ix: 1, l: 2 },
        s: { a: 0, k: [109.365, 109.365, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [1.341, -1.397],
                    [0.328, 1.891],
                    [1.721, 0.919],
                    [-1.693, 0.852],
                    [-0.306, 1.879],
                    [-1.32, -1.296],
                    [-1.743, 0.502],
                    [0.755, -1.752],
                    [-1.102, -1.585],
                    [1.953, 0.222]
                  ],
                  o: [
                    [-0.408, -1.894],
                    [-1.78, -0.835],
                    [1.769, -0.772],
                    [0.275, -1.887],
                    [1.222, 1.342],
                    [1.802, -0.412],
                    [-0.724, 1.763],
                    [0.996, 1.612],
                    [-1.948, -0.12],
                    [-1.271, 1.439]
                  ],
                  v: [
                    [-1.706, 8.198],
                    [-2.811, 2.521],
                    [-8.064, -0.11],
                    [-2.87, -2.548],
                    [-1.998, -8.198],
                    [1.815, -4.239],
                    [7.136, -5.612],
                    [4.918, -0.343],
                    [8.064, 4.456],
                    [2.211, 3.943]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "gf",
              o: { a: 0, k: 100, ix: 10 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0,
                    1,
                    1,
                    1,
                    0.5,
                    0.975,
                    0.975,
                    0.667,
                    1,
                    0.949,
                    0.949,
                    0.333
                  ],
                  ix: 9
                }
              },
              s: { a: 0, k: [0.833, -0.04], ix: 5 },
              e: { a: 0, k: [-5.002, -5.662], ix: 6 },
              t: 2,
              h: { a: 0, k: 0, ix: 7 },
              a: { a: 0, k: 0, ix: 8 },
              nm: "Gradient Fill 1",
              mn: "ADBE Vector Graphic - G-Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [120.198, 237.905], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    t: 10,
                    s: [0, 0]
                  },
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.333, 0.333], y: [0, 0] },
                    t: 20,
                    s: [200, 200]
                  },
                  { t: 40, s: [100, 100] }
                ],
                ix: 3
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.167], y: [0.167] },
                    t: 10,
                    s: [0]
                  },
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 40,
                    s: [720]
                  },
                  { t: 179, s: [1080] }
                ],
                ix: 6
              },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [1.076, -1.609],
                    [0.653, 1.804],
                    [1.856, 0.603],
                    [-1.519, 1.136],
                    [0.027, 1.904],
                    [-1.526, -1.047],
                    [-1.632, 0.796],
                    [0.439, -1.856],
                    [-1.36, -1.37],
                    [1.961, -0.121]
                  ],
                  o: [
                    [-0.732, -1.793],
                    [-1.897, -0.511],
                    [1.606, -1.07],
                    [-0.06, -1.904],
                    [1.438, 1.108],
                    [1.705, -0.72],
                    [-0.408, 1.86],
                    [1.26, 1.415],
                    [-1.939, 0.219],
                    [-1.002, 1.638]
                  ],
                  v: [
                    [-0.628, 8.046],
                    [-2.706, 2.65],
                    [-8.337, 0.978],
                    [-3.648, -2.332],
                    [-3.777, -8.046],
                    [0.67, -4.813],
                    [5.676, -7.091],
                    [4.407, -1.517],
                    [8.337, 2.663],
                    [2.487, 3.174]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "gf",
              o: { a: 0, k: 100, ix: 10 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0,
                    1,
                    1,
                    1,
                    0.5,
                    0.975,
                    0.975,
                    0.667,
                    1,
                    0.949,
                    0.949,
                    0.333
                  ],
                  ix: 9
                }
              },
              s: { a: 0, k: [-0.113, -0.62], ix: 5 },
              e: { a: 0, k: [-4.485, -5.922], ix: 6 },
              t: 2,
              h: { a: 0, k: 0, ix: 7 },
              a: { a: 0, k: 0, ix: 8 },
              nm: "Gradient Fill 1",
              mn: "ADBE Vector Graphic - G-Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [139.894, 242.01], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    t: 20,
                    s: [0, 0]
                  },
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.333, 0.333], y: [0, 0] },
                    t: 30,
                    s: [200, 200]
                  },
                  { t: 50, s: [100, 100] }
                ],
                ix: 3
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.167], y: [0.167] },
                    t: 20,
                    s: [0]
                  },
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 50,
                    s: [720]
                  },
                  { t: 179, s: [1080] }
                ],
                ix: 6
              },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 2",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.782, -1.771],
                    [0.953, 1.665],
                    [1.931, 0.275],
                    [-1.302, 1.379],
                    [0.354, 1.872],
                    [-1.683, -0.768],
                    [-1.47, 1.065],
                    [0.115, -1.905],
                    [-1.574, -1.116],
                    [1.911, -0.455]
                  ],
                  o: [
                    [-1.028, -1.641],
                    [-1.956, -0.178],
                    [1.397, -1.332],
                    [-0.386, -1.867],
                    [1.608, 0.845],
                    [1.557, -1],
                    [-0.082, 1.903],
                    [1.486, 1.178],
                    [-1.872, 0.55],
                    [-0.706, 1.785]
                  ],
                  v: [
                    [0.448, 7.997],
                    [-2.525, 3.037],
                    [-8.357, 2.358],
                    [-4.308, -1.708],
                    [-5.417, -7.316],
                    [-0.479, -4.896],
                    [4.062, -7.997],
                    [3.767, -2.288],
                    [8.357, 1.155],
                    [2.681, 2.663]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "gf",
              o: { a: 0, k: 100, ix: 10 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0,
                    1,
                    1,
                    1,
                    0.5,
                    0.975,
                    0.975,
                    0.667,
                    1,
                    0.949,
                    0.949,
                    0.333
                  ],
                  ix: 9
                }
              },
              s: { a: 0, k: [-0.285, -0.578], ix: 5 },
              e: { a: 0, k: [-5.002, -5.662], ix: 6 },
              t: 2,
              h: { a: 0, k: 0, ix: 7 },
              a: { a: 0, k: 0, ix: 8 },
              nm: "Gradient Fill 1",
              mn: "ADBE Vector Graphic - G-Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [159.942, 242.362], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    t: 30,
                    s: [0, 0]
                  },
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.333, 0.333], y: [0, 0] },
                    t: 40,
                    s: [200, 200]
                  },
                  { t: 60, s: [100, 100] }
                ],
                ix: 3
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.167], y: [0.167] },
                    t: 30,
                    s: [0]
                  },
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 60,
                    s: [720]
                  },
                  { t: 179, s: [1080] }
                ],
                ix: 6
              },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 3",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.465, -1.881],
                    [1.227, 1.474],
                    [1.951, -0.064],
                    [-1.043, 1.583],
                    [0.671, 1.781],
                    [-1.79, -0.466],
                    [-1.261, 1.305],
                    [-0.219, -1.895],
                    [-1.746, -0.825],
                    [1.803, -0.781]
                  ],
                  o: [
                    [-1.299, -1.437],
                    [-1.958, 0.165],
                    [1.148, -1.552],
                    [-0.703, -1.772],
                    [1.728, 0.552],
                    [1.357, -1.256],
                    [0.251, 1.889],
                    [1.667, 0.901],
                    [-1.748, 0.867],
                    [-0.383, 1.881]
                  ],
                  v: [
                    [1.528, 8.19],
                    [-2.262, 3.821],
                    [-8.128, 4.163],
                    [-4.841, -0.542],
                    [-6.906, -5.873],
                    [-1.626, -4.345],
                    [2.301, -8.19],
                    [3.007, -2.518],
                    [8.128, 0.073],
                    [2.799, 2.547]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "gf",
              o: { a: 0, k: 100, ix: 10 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0,
                    1,
                    1,
                    1,
                    0.5,
                    0.975,
                    0.975,
                    0.667,
                    1,
                    0.949,
                    0.949,
                    0.333
                  ],
                  ix: 9
                }
              },
              s: { a: 0, k: [-0.817, 0.032], ix: 5 },
              e: { a: 0, k: [-5.002, -5.662], ix: 6 },
              t: 2,
              h: { a: 0, k: 0, ix: 7 },
              a: { a: 0, k: 0, ix: 8 },
              nm: "Gradient Fill 1",
              mn: "ADBE Vector Graphic - G-Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [179.739, 238.825], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    t: 40,
                    s: [0, 0]
                  },
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.333, 0.333], y: [0, 0] },
                    t: 50,
                    s: [200, 200]
                  },
                  { t: 70, s: [100, 100] }
                ],
                ix: 3
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.167], y: [0.167] },
                    t: 40,
                    s: [0]
                  },
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 70,
                    s: [720]
                  },
                  { t: 179, s: [1080] }
                ],
                ix: 6
              },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 4",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 4,
          mn: "ADBE Vector Group",
          hd: !1
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      ct: 1,
      bm: 0
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "badge",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.667], y: [1] },
              o: { x: [0.167], y: [0.167] },
              t: 5,
              s: [-4]
            },
            { t: 30, s: [0] }
          ],
          ix: 10
        },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.667, y: 1 },
              o: { x: 0.167, y: 0 },
              t: 5,
              s: [150, 294, 0],
              to: [0, -5.47, 0],
              ti: [0, 0, 0]
            },
            {
              i: { x: 0.833, y: 1 },
              o: { x: 0.167, y: 0 },
              t: 10,
              s: [150, 170, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0]
            },
            {
              i: { x: 0.833, y: 1 },
              o: { x: 0.167, y: 0 },
              t: 15,
              s: [150, 210, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0]
            },
            {
              i: { x: 0.833, y: 1 },
              o: { x: 0.167, y: 0 },
              t: 20,
              s: [150, 180, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0]
            },
            {
              i: { x: 0.696, y: 1 },
              o: { x: 0.167, y: 0 },
              t: 25,
              s: [150, 200, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0]
            },
            {
              i: { x: 0.833, y: 1 },
              o: { x: 0.167, y: 0 },
              t: 30,
              s: [150, 190, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0]
            },
            { t: 179, s: [150, 200, 0] }
          ],
          ix: 2,
          l: 2
        },
        a: { a: 0, k: [150, 150, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 1] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0] },
              t: 5,
              s: [90, 90, 100]
            },
            { t: 179, s: [100, 100, 100] }
          ],
          ix: 6,
          l: 2
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-4.614, -0.824],
                        [-8.155, -2.569],
                        [-1.511, 1.884],
                        [-5.986, 6.028],
                        [17.02, 7.589],
                        [15.731, 2.355],
                        [5.106, 0.215]
                      ],
                      o: [
                        [5.468, 0.381],
                        [16.695, 2.982],
                        [11.242, 4.208],
                        [5.454, -6.492],
                        [-1.839, 1.784],
                        [-11.638, -5.342],
                        [-4.946, -0.739],
                        [0, 0]
                      ],
                      v: [
                        [-86.909, 3.772],
                        [-71.801, 5.628],
                        [-35.573, 16.388],
                        [-17.167, 18.804],
                        [0, 0.011],
                        [-29.812, -13.964],
                        [-71.801, -26.398],
                        [-86.909, -27.855]
                      ],
                      c: !0
                    },
                    ix: 2
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: !1
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [8e-3, -7e-3],
                        [-7e-3, 7e-3]
                      ],
                      o: [
                        [8e-3, -7e-3],
                        [-8e-3, 7e-3]
                      ],
                      v: [
                        [0, 0.011],
                        [0.023, -0.011]
                      ],
                      c: !0
                    },
                    ix: 2
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: !1
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform"
                }
              ],
              nm: "Group 1",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: !1
            },
            {
              ty: "gf",
              o: { a: 0, k: 100, ix: 10 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0,
                    0.961,
                    0.91,
                    0.584,
                    0.5,
                    0.724,
                    0.612,
                    0.378,
                    1,
                    0.486,
                    0.314,
                    0.173
                  ],
                  ix: 9
                }
              },
              s: { a: 0, k: [-73.241, -20.234], ix: 5 },
              e: { a: 0, k: [-23.074, 24.68], ix: 6 },
              t: 1,
              nm: "Gradient Fill 1",
              mn: "ADBE Vector Graphic - G-Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [244.049, 193.833], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.585, -8e-3],
                        [17.01, -7.863],
                        [1.845, 1.777],
                        [-5.467, -6.476],
                        [-11.235, 4.243],
                        [-29.565, 0.74],
                        [-2.329, -0.162],
                        [0, 0],
                        [1.84, 0]
                      ],
                      o: [
                        [-23.93, -0.275],
                        [-17.005, 7.636],
                        [6.001, 6.011],
                        [1.516, 1.878],
                        [11.361, -3.61],
                        [2.495, 0.056],
                        [0, 0],
                        [-1.829, -0.076],
                        [-0.584, 0]
                      ],
                      v: [
                        [94.121, -28.225],
                        [29.791, -14.049],
                        [0, 0.012],
                        [17.206, 18.756],
                        [35.611, 16.284],
                        [94.152, 3.171],
                        [101.379, 3.506],
                        [101.379, -28.121],
                        [95.875, -28.237]
                      ],
                      c: !0
                    },
                    ix: 2
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: !1
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-8e-3, -7e-3],
                        [8e-3, 8e-3]
                      ],
                      o: [
                        [-8e-3, -7e-3],
                        [7e-3, 8e-3]
                      ],
                      v: [
                        [0, 0.012],
                        [-0.023, -0.011]
                      ],
                      c: !0
                    },
                    ix: 2
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: !1
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0.25, 0.25], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform"
                }
              ],
              nm: "Group 1",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: !1
            },
            {
              ty: "gf",
              o: { a: 0, k: 100, ix: 10 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0,
                    0.961,
                    0.91,
                    0.584,
                    0.5,
                    0.724,
                    0.612,
                    0.378,
                    1,
                    0.486,
                    0.314,
                    0.173
                  ],
                  ix: 9
                }
              },
              s: { a: 0, k: [85.568, -22.328], ix: 5 },
              e: { a: 0, k: [12.564, 14.838], ix: 6 },
              t: 1,
              nm: "Gradient Fill 1",
              mn: "ADBE Vector Graphic - G-Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [56.011, 194.099], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 2",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [6.032, -10.258],
                    [0.091, -0.225],
                    [-5.916, -2.068],
                    [1.695, -5.874],
                    [-6.535, 11.9],
                    [-1.324, -3.712],
                    [2.445, 8.619],
                    [1.491, 0]
                  ],
                  o: [
                    [-7.603, 12.488],
                    [6.275, 1.424],
                    [-2.13, 5.832],
                    [0.097, -0.213],
                    [6.655, -12.473],
                    [-2.445, -8.621],
                    [-0.299, -0.807],
                    [-5.358, 0]
                  ],
                  v: [
                    [-4.572, -13.56],
                    [-28.417, 6.192],
                    [-10.122, 11.442],
                    [-15.859, 29.01],
                    [5.415, 11.001],
                    [28.417, -1.942],
                    [21.081, -27.802],
                    [18.273, -29.01]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "gf",
              o: { a: 0, k: 100, ix: 10 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0,
                    0.961,
                    0.91,
                    0.584,
                    0.5,
                    0.724,
                    0.612,
                    0.378,
                    1,
                    0.486,
                    0.314,
                    0.173
                  ],
                  ix: 9
                }
              },
              s: { a: 0, k: [-40.726, 34.656], ix: 5 },
              e: { a: 0, k: [27.229, -14.855], ix: 6 },
              t: 1,
              nm: "Gradient Fill 1",
              mn: "ADBE Vector Graphic - G-Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [56.518, 203.477], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 3",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0.298, -0.808],
                    [2.445, -8.619],
                    [-6.633, -12.46],
                    [-0.096, -0.212],
                    [1.958, 5.958],
                    [-6.087, 1.324],
                    [7.583, 12.477],
                    [5.35, 1e-3]
                  ],
                  o: [
                    [-2.445, 8.62],
                    [1.322, -3.712],
                    [6.509, 11.888],
                    [-1.515, -5.977],
                    [5.751, -1.935],
                    [-0.091, -0.226],
                    [-6.01, -10.241],
                    [-1.492, 0]
                  ],
                  v: [
                    [-21.021, -27.766],
                    [-28.356, -1.906],
                    [-5.414, 11.008],
                    [15.798, 28.977],
                    [10.592, 11.064],
                    [28.357, 6.16],
                    [4.572, -13.553],
                    [-18.214, -28.977]
                  ],
                  c: !0
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1
            },
            {
              ty: "gf",
              o: { a: 0, k: 100, ix: 10 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0,
                    0.961,
                    0.91,
                    0.584,
                    0.5,
                    0.724,
                    0.612,
                    0.378,
                    1,
                    0.486,
                    0.314,
                    0.173
                  ],
                  ix: 9
                }
              },
              s: { a: 0, k: [56.302, 24.061], ix: 5 },
              e: { a: 0, k: [-26.787, -18.469], ix: 6 },
              t: 1,
              nm: "Gradient Fill 1",
              mn: "ADBE Vector Graphic - G-Fill",
              hd: !1
            },
            {
              ty: "tr",
              p: { a: 0, k: [243.54, 204.023], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Group 4",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 4,
          mn: "ADBE Vector Group",
          hd: !1
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      ct: 1,
      bm: 0
    }
  ],
  markers: []
};

// app/assets/lottie/star-burst-animation.json
var star_burst_animation_default = { v: "5.5.7", meta: { g: "LottieFiles AE 0.1.20", a: "", k: "", d: "", tc: "" }, fr: 29.9700012207031, ip: 0, op: 22.0000008960784, w: 200, h: 200, nm: "Comp 1", ddd: 0, assets: [], layers: [{ ddd: 0, ind: 1, ty: 4, nm: "Shape Layer 9", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.105, y: 0 }, t: 5.388, s: [100, 100.5, 0], to: [-5.25, -9.083, 0], ti: [5.25, 9.083, 0] }, { t: 14.2762505814836, s: [68.5, 46, 0] }], ix: 2 }, a: { a: 0, k: [12, 47, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 3.173, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 8.641, s: [100, 100, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 16.846, s: [100, 100, 100] }, { t: 23.0000009368092, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "sr", sy: 1, d: 1, pt: { a: 0, k: 4, ix: 3 }, p: { a: 0, k: [0, 0], ix: 4 }, r: { a: 0, k: 0, ix: 5 }, ir: { a: 0, k: 3.93, ix: 6 }, is: { a: 0, k: 0, ix: 8 }, or: { a: 0, k: 9.552, ix: 7 }, os: { a: 0, k: 0, ix: 9 }, ix: 1, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.827450980392, 0.101960784314, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [12, 46.5], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Polystar 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30.0000012219251, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Shape Layer 8", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.166, y: 0 }, t: 3.173, s: [99.5, 100.25, 0], to: [6.667, 10.167, 0], ti: [-6.667, -10.167, 0] }, { t: 11.8962504845442, s: [139.5, 161.25, 0] }], ix: 2 }, a: { a: 0, k: [-0.5, 17.25, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 3.173, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 6.345, s: [100, 100, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 11.896, s: [100, 100, 100] }, { t: 19.8275008075906, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "sr", sy: 1, d: 1, pt: { a: 0, k: 4, ix: 3 }, p: { a: 0, k: [0, 0], ix: 4 }, r: { a: 0, k: 0, ix: 5 }, ir: { a: 0, k: 4.241, ix: 6 }, is: { a: 0, k: 0, ix: 8 }, or: { a: 0, k: 10.308, ix: 7 }, os: { a: 0, k: 0, ix: 9 }, ix: 1, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.827450980392, 0.101960784314, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 17], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Polystar 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30.0000012219251, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "Shape Layer 7", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.086, y: 0 }, t: 1.586, s: [100, 100, 0], to: [-2.625, 9.708, 0], ti: [2.625, -9.708, 0] }, { t: 9.51750038765572, s: [84.25, 158.25, 0] }], ix: 2 }, a: { a: 0, k: [-2, 1.5, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 4.759, s: [100, 100, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 9.518, s: [100, 100, 100] }, { t: 19.8275008075906, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "sr", sy: 1, d: 1, pt: { a: 0, k: 4, ix: 3 }, p: { a: 0, k: [0, 0], ix: 4 }, r: { a: 0, k: 0, ix: 5 }, ir: { a: 0, k: 3.782, ix: 6 }, is: { a: 0, k: 0, ix: 8 }, or: { a: 0, k: 9.192, ix: 7 }, os: { a: 0, k: 0, ix: 9 }, ix: 1, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.827450980392, 0.101960784314, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-2, 1.5], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Polystar 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30.0000012219251, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "Shape Layer 6", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.166, y: 0 }, t: 0.793, s: [100, 100.188, 0], to: [-10.25, -3.5, 0], ti: [10.25, 3.5, 0] }, { t: 10.3100004199349, s: [38.5, 79.188, 0] }], ix: 2 }, a: { a: 0, k: [0, 24.188, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 3.173, s: [100, 100, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 17.449, s: [100, 100, 100] }, { t: 23.0000009368092, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "sr", sy: 1, d: 1, pt: { a: 0, k: 4, ix: 3 }, p: { a: 0, k: [0, 0], ix: 4 }, r: { a: 0, k: 0, ix: 5 }, ir: { a: 0, k: 3.793, ix: 6 }, is: { a: 0, k: 0, ix: 8 }, or: { a: 0, k: 9.22, ix: 7 }, os: { a: 0, k: 0, ix: 9 }, ix: 1, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.827450980392, 0.101960784314, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 24], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Polystar 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30.0000012219251, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 4, nm: "Shape Layer 5", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 1.586, s: [0] }, { t: 15.8625006460929, s: [90] }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.159, y: 0 }, t: 1.586, s: [99, 99.5, 0], to: [-9.417, 2.25, 0], ti: [9.417, -2.25, 0] }, { t: 12.6900005168743, s: [42.5, 113, 0] }], ix: 2 }, a: { a: 0, k: [-6.5, 10, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 12.69, s: [100, 100, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 15.863, s: [100, 100, 100] }, { t: 23.0000009368092, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "sr", sy: 1, d: 1, pt: { a: 0, k: 4, ix: 3 }, p: { a: 0, k: [0, 0], ix: 4 }, r: { a: 0, k: 0, ix: 5 }, ir: { a: 0, k: 8.105, ix: 6 }, is: { a: 0, k: 0, ix: 8 }, or: { a: 0, k: 19.698, ix: 7 }, os: { a: 0, k: 0, ix: 9 }, ix: 1, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.827450980392, 0.101960784314, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-6, 10.5], ix: 2 }, a: { a: 0, k: [-0.5, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Polystar 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30.0000012219251, st: 0, bm: 0 }, { ddd: 0, ind: 6, ty: 4, nm: "Shape Layer 4", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.176, y: 0 }, t: 1.586, s: [99.94, 100.157, 0], to: [11.083, 1.167, 0], ti: [-11.083, -1.167, 0] }, { t: 6.34500025843715, s: [166.44, 107.157, 0] }], ix: 2 }, a: { a: 0, k: [1.389, 32.292, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 3.173, s: [50, 50, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 12.69, s: [50, 50, 100] }, { t: 19.8275008075906, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "sr", sy: 1, d: 1, pt: { a: 0, k: 4, ix: 3 }, p: { a: 0, k: [0, 0], ix: 4 }, r: { a: 0, k: 0, ix: 5 }, ir: { a: 0, k: 6.43, ix: 6 }, is: { a: 0, k: 0, ix: 8 }, or: { a: 0, k: 15.628, ix: 7 }, os: { a: 0, k: 0, ix: 9 }, ix: 1, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.827450980392, 0.101960784314, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [1.5, 32.5], ix: 2 }, a: { a: 0, k: [0, 0.5], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Polystar 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30.0000012219251, st: 0, bm: 0 }, { ddd: 0, ind: 7, ty: 4, nm: "Shape Layer 2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.165, y: 0 }, t: 1.586, s: [100.5, 99, 0], to: [3.167, -5.333, 0], ti: [-3.167, 5.333, 0] }, { t: 4.75875019382786, s: [119.5, 67, 0] }], ix: 2 }, a: { a: 0, k: [-1, 33, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 2.379, s: [75, 75, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 18.241, s: [75, 75, 100] }, { t: 23.0000009368092, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "sr", sy: 1, d: 1, pt: { a: 0, k: 4, ix: 3 }, p: { a: 0, k: [0, 0], ix: 4 }, r: { a: 0, k: 0, ix: 5 }, ir: { a: 0, k: 4.803, ix: 6 }, is: { a: 0, k: 0, ix: 8 }, or: { a: 0, k: 11.673, ix: 7 }, os: { a: 0, k: 0, ix: 9 }, ix: 1, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.827450980392, 0.101960784314, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-1, 33.5], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Polystar 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30.0000012219251, st: 0, bm: 0 }, { ddd: 0, ind: 8, ty: 4, nm: "Shape Layer 1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] }, { t: 9.51750038765572, s: [90] }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.138, y: 0 }, t: 0, s: [100, 100, 0], to: [8, -6.583, 0], ti: [-8, 6.583, 0] }, { t: 9.51750038765572, s: [148, 60.5, 0] }], ix: 2 }, a: { a: 0, k: [-41.5, -21, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 9.518, s: [100, 100, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 15.863, s: [100, 100, 100] }, { t: 23.0000009368092, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "sr", sy: 1, d: 1, pt: { a: 0, k: 4, ix: 3 }, p: { a: 0, k: [0, 0], ix: 4 }, r: { a: 0, k: 0, ix: 5 }, ir: { a: 0, k: 18.608, ix: 6 }, is: { a: 0, k: 0, ix: 8 }, or: { a: 0, k: 45.224, ix: 7 }, os: { a: 0, k: 0, ix: 9 }, ix: 1, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.827450980392, 0.101960784314, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-41.5, -21], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [46.154, 46.154], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Polystar 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30.0000012219251, st: 0, bm: 0 }], markers: [] };

// app/modules/tic-tac-toe/components/game-end/index.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), index8 = ({ winnerPlayer }) => {
  let [opened, handle] = (0, import_hooks3.useDisclosure)(winnerPlayer !== null);
  return (0, import_react11.useEffect)(() => {
    !winnerPlayer || handle.open();
  }, [winnerPlayer]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core13.Modal, {
    opened,
    onClose: handle.close,
    centered: !0,
    styles: (theme) => ({
      modal: {
        backgroundColor: theme.colors.dark[6]
      }
    }),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core13.Box, {
      pos: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core13.Center, {
          opacity: 0.5,
          w: "100%",
          h: "100%",
          pos: "absolute",
          bottom: 72,
          left: 0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_lottie_react.default, {
            animationData: star_burst_animation_default
          }, void 0, !1, {
            fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core13.Center, {
          w: "100%",
          h: "100%",
          pos: "absolute",
          bottom: 40,
          left: 0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core13.Stack, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core13.Center, {
                w: "100%",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(mark_default, {
                  value: winnerPlayer ?? "0",
                  size: 96
                }, void 0, !1, {
                  fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
                  lineNumber: 48,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
                lineNumber: 47,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core13.Text, {
                size: 32,
                weight: 700,
                color: "violet.0",
                children: winnerPlayer === "0" ? "Player1" : "Player 2"
              }, void 0, !1, {
                fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_lottie_react.default, {
          animationData: winner_default,
          loop: !1
        }, void 0, !1, {
          fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/modules/tic-tac-toe/components/game-end/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}, game_end_default = index8;

// app/modules/tic-tac-toe/components/header/index.tsx
var import_core14 = require("@mantine/core");
var import_hooks4 = require("@mantine/hooks"), import_react12 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), index9 = (props) => {
  let [opened, handle] = (0, import_hooks4.useDisclosure)(!1), [dialogOpened, dialogHandle] = (0, import_hooks4.useDisclosure)(!1), navigate = (0, import_react12.useNavigate)(), handleGameEnd = () => {
    navigate("../", { replace: !1 });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core14.Group, {
        w: "100%",
        px: "md",
        position: "apart",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core14.Box, {
            w: 44
          }, void 0, !1, {
            fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(timer_default, {
            ...props
          }, void 0, !1, {
            fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core14.Box, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core14.ActionIcon, {
              onClick: handle.open,
              size: "xl",
              color: "violet",
              variant: "transparent",
              children: GetThemeIcons("setting", { size: 32 })
            }, void 0, !1, {
              fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(modal_default, {
        opened,
        onClose: handle.close,
        title: "\u8A2D\u5B9A",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core14.Group, {
          position: "center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core14.Button, {
              color: "violet",
              disabled: !0,
              children: "\u306F\u3058\u3081\u304B\u3089"
            }, void 0, !1, {
              fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core14.Button, {
              color: "red",
              onClick: dialogHandle.open,
              children: "\u30B2\u30FC\u30E0\u7D42\u4E86"
            }, void 0, !1, {
              fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(dialog_default, {
        title: "\u30B2\u30FC\u30E0\u7D42\u4E86",
        onSubmit: handleGameEnd,
        submitLabel: "\u7D42\u4E86",
        onCancel: dialogHandle.close,
        opened: dialogOpened,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core14.Text, {
          children: "\u672C\u5F53\u306B\u30B2\u30FC\u30E0\u3092\u7D42\u4E86\u3057\u307E\u3059\u304B\uFF1F"
        }, void 0, !1, {
          fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/tic-tac-toe/components/header/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}, header_default = index9;

// app/modules/tic-tac-toe/index.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), index10 = () => {
  let engin = useTicTacToc();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core15.Stack, {
        spacing: "xl",
        mih: "100vh",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(header_default, {
            ...engin
          }, void 0, !1, {
            fileName: "app/modules/tic-tac-toe/index.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core15.Stack, {
            py: "md",
            px: "md",
            spacing: "xl",
            sx: { flex: 1 },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(player_default, {
                ...engin
              }, void 0, !1, {
                fileName: "app/modules/tic-tac-toe/index.tsx",
                lineNumber: 15,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(board_default, {
                ...engin
              }, void 0, !1, {
                fileName: "app/modules/tic-tac-toe/index.tsx",
                lineNumber: 16,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/modules/tic-tac-toe/index.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(hand_default, {
            ...engin
          }, void 0, !1, {
            fileName: "app/modules/tic-tac-toe/index.tsx",
            lineNumber: 18,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/modules/tic-tac-toe/index.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(game_end_default, {
        ...engin
      }, void 0, !1, {
        fileName: "app/modules/tic-tac-toe/index.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/tic-tac-toe/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}, tic_tac_toe_default = index10;

// app/modules/welcome/index.tsx
var import_core18 = require("@mantine/core"), import_lottie_react2 = __toESM(require("lottie-react"));

// app/assets/lottie/welcome.json
var welcome_default = { v: "5.2.1", fr: 60, ip: 0, op: 240, w: 1080, h: 1080, nm: "High quality products", ddd: 1, assets: [], layers: [{ ddd: 0, ind: 1, ty: 4, nm: "Shape Layer 20", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-38.938, -161.688], [-38.875, -220.188]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 180, s: [0], e: [100] }, { t: 240 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 120, s: [0], e: [100] }, { t: 180 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Shape Layer 19", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-38.938, -161.688], [-38.875, -220.188]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [0], e: [100] }, { t: 120 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { t: 60 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "Shape Layer 18", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[9.75, -200.5], [9.75, -276.25]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 180, s: [0], e: [100] }, { t: 240 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 120, s: [0], e: [100] }, { t: 180 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "Shape Layer 17", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[9.75, -200.5], [9.75, -276.25]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [0], e: [100] }, { t: 120 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { t: 60 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 4, nm: "Shape Layer 16", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-61.5, -239.5], [-61.5, -330]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 180, s: [0], e: [100] }, { t: 240 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 120, s: [0], e: [100] }, { t: 180 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 6, ty: 4, nm: "Shape Layer 15", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-61.5, -239.5], [-61.5, -330]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [0], e: [100] }, { t: 120 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { t: 60 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 7, ty: 4, nm: "Shape Layer 14", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-61.5, -247.5], [-61.5, -322.25]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 180, s: [0], e: [100] }, { t: 240 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 120, s: [0], e: [100] }, { t: 180 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 8, ty: 4, nm: "Shape Layer 13", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-61.5, -247.5], [-61.5, -322.25]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [0], e: [100] }, { t: 120 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { t: 60 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 9, ty: 4, nm: "Shape Layer 12", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-82.5, -296.25], [-82.5, -392.75]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 180, s: [0], e: [100] }, { t: 240 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 120, s: [0], e: [100] }, { t: 180 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 10, ty: 4, nm: "Shape Layer 11", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-82.5, -296.25], [-82.5, -392.75]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [0], e: [100] }, { t: 120 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { t: 60 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 11, ty: 4, nm: "Shape Layer 10", parent: 19, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [480, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[-0.063, -222.5], [0, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[23.188, -222.5], [0, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 200, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[23.188, -222.5], [0, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[31.438, -222.5], [23.313, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 210, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[31.438, -222.5], [23.313, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[41.688, -222.5], [34.563, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 219, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[41.688, -222.5], [34.563, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [43.625, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 226.5, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [43.625, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [46.188, -222.5], [0, -191]], c: !0 }] }, { t: 240 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 12, ty: 4, nm: "Shape Layer 6", parent: 19, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [480, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[-0.063, -222.5], [0, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[23.188, -222.5], [0, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 80, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[23.188, -222.5], [0, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[31.438, -222.5], [23.313, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 90, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[31.438, -222.5], [23.313, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[41.688, -222.5], [34.563, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 99, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[41.688, -222.5], [34.563, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [43.625, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 106.5, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [43.625, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [46.188, -222.5], [0, -191]], c: !0 }] }, { t: 120 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 1, ind: 13, ty: 4, nm: "Shape Layer 9", parent: 19, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, rx: { a: 0, k: 0, ix: 8 }, ry: { a: 0, k: 180, ix: 9 }, rz: { a: 0, k: 0, ix: 10 }, or: { a: 0, k: [0, 0, 0], ix: 7 }, p: { a: 0, k: [480, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [46.188, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [43.625, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 140, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [43.625, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[41.688, -222.5], [34.563, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 150, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[41.688, -222.5], [34.563, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[31.438, -222.5], [23.313, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 159, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[31.438, -222.5], [23.313, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[23.188, -222.5], [0, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 166.5, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[23.188, -222.5], [0, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[-0.063, -222.5], [0, -222.5], [0, -191]], c: !0 }] }, { t: 180 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 1, ind: 14, ty: 4, nm: "Shape Layer 5", parent: 19, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, rx: { a: 0, k: 0, ix: 8 }, ry: { a: 0, k: 180, ix: 9 }, rz: { a: 0, k: 0, ix: 10 }, or: { a: 0, k: [0, 0, 0], ix: 7 }, p: { a: 0, k: [480, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [46.188, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [43.625, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 20, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[46.188, -222.5], [43.625, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[41.688, -222.5], [34.563, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 30, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[41.688, -222.5], [34.563, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[31.438, -222.5], [23.313, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 39, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[31.438, -222.5], [23.313, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[23.188, -222.5], [0, -222.5], [0, -191]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 46.5, s: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[23.188, -222.5], [0, -222.5], [0, -191]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[-0.063, -222.5], [0, -222.5], [0, -191]], c: !0 }] }, { t: 60 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 1, ind: 15, ty: 4, nm: "Shape Layer 8", parent: 19, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, rx: { a: 0, k: 0, ix: 8 }, ry: { a: 0, k: 180, ix: 9 }, rz: { a: 0, k: 0, ix: 10 }, or: { a: 0, k: [0, 0, 0], ix: 7 }, p: { a: 0, k: [480, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [50.188, -229], [50.188, -228.875], [50.156, -228.969]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [44.771, -222.486], [49.354, -224.569], [50.392, -228.372]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 140, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [44.771, -222.486], [49.354, -224.569], [50.392, -228.372]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [34.929, -222.493], [41.367, -222.521], [41.989, -225.699]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 150, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [34.929, -222.493], [41.367, -222.521], [41.989, -225.699]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [23.375, -222.5], [32, -222.563], [32.125, -222.563]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 159, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [23.375, -222.5], [32, -222.563], [32.125, -222.563]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [-0.042, -222.5], [23.208, -222.542], [23.333, -222.542]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 166.668, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [-0.042, -222.5], [23.208, -222.542], [23.333, -222.542]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [0, -222.5], [0, -222.625], [0.125, -222.625]], c: !0 }] }, { t: 180 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 1, ind: 16, ty: 4, nm: "Shape Layer 2", parent: 19, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, rx: { a: 0, k: 0, ix: 8 }, ry: { a: 0, k: 180, ix: 9 }, rz: { a: 0, k: 0, ix: 10 }, or: { a: 0, k: [0, 0, 0], ix: 7 }, p: { a: 0, k: [480, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [50.188, -229], [50.188, -228.875], [50.156, -228.969]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [44.771, -222.486], [49.354, -224.569], [50.392, -228.372]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 20, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [44.771, -222.486], [49.354, -224.569], [50.392, -228.372]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [34.929, -222.493], [41.367, -222.521], [41.989, -225.699]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 30, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [34.929, -222.493], [41.367, -222.521], [41.989, -225.699]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [23.375, -222.5], [32, -222.563], [32.125, -222.563]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 39, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [23.375, -222.5], [32, -222.563], [32.125, -222.563]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [-0.042, -222.5], [23.208, -222.542], [23.333, -222.542]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 46.668, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [-0.042, -222.5], [23.208, -222.542], [23.333, -222.542]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [0, -222.5], [0, -222.625], [0.125, -222.625]], c: !0 }] }, { t: 60 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 17, ty: 4, nm: "Shape Layer 7", parent: 19, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [480, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [0, -222.5], [0, -222.625], [0.125, -222.625]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [-0.042, -222.5], [23.208, -222.542], [23.333, -222.542]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 200, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [-0.042, -222.5], [23.208, -222.542], [23.333, -222.542]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [23.375, -222.5], [32, -222.563], [32.125, -222.563]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 210, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [23.375, -222.5], [32, -222.563], [32.125, -222.563]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [34.929, -222.493], [41.367, -222.521], [41.989, -225.699]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 219, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [34.929, -222.493], [41.367, -222.521], [41.989, -225.699]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [44.771, -222.486], [49.354, -224.569], [50.392, -228.372]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 226.668, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [44.771, -222.486], [49.354, -224.569], [50.392, -228.372]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [50.188, -229], [50.188, -228.875], [50.156, -228.969]], c: !0 }] }, { t: 240 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 18, ty: 4, nm: "Shape Layer 1", parent: 19, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [480, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [0, -222.5], [0, -222.625], [0.125, -222.625]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [-0.042, -222.5], [23.208, -222.542], [23.333, -222.542]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 80, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [-0.042, -222.5], [23.208, -222.542], [23.333, -222.542]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [23.375, -222.5], [32, -222.563], [32.125, -222.563]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 90, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [23.375, -222.5], [32, -222.563], [32.125, -222.563]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [34.929, -222.493], [41.367, -222.521], [41.989, -225.699]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 99, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [34.929, -222.493], [41.367, -222.521], [41.989, -225.699]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [44.771, -222.486], [49.354, -224.569], [50.392, -228.372]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 106.668, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [44.771, -222.486], [49.354, -224.569], [50.392, -228.372]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, -270.125], [50.188, -229], [50.188, -228.875], [50.156, -228.969]], c: !0 }] }, { t: 120 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 19, ty: 4, nm: "stone Outlines 2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [540, 317.5, 0], e: [540, 324, 0], to: [0, 1.08333337306976, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [540, 324, 0], e: [540, 317.5, 0], to: [0, 0, 0], ti: [0, 1.08333337306976, 0] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [480, 317.5, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.264, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-25.12, -39.561], [25.384, 1.847], [24.593, 5.803], [-25.12, 39.561]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2307, 0.5566, 0.7893, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [504.999, 309.352], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.264, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[25.121, -39.561], [-25.384, 1.847], [-24.594, 5.803], [25.121, 39.561]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2307, 0.5566, 0.7893, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [454.758, 309.352], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 532, st: 0, bm: 0 }, { ddd: 0, ind: 20, ty: 4, nm: "stone Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [480, 540, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -55.496], [55.496, 0], [0, 55.496], [-55.495, 0]], o: [[0, 55.496], [-55.495, 0], [0, -55.496], [55.496, 0]], v: [[100.484, 0], [0, 100.483], [-100.483, 0], [0, -100.483]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [479.847, 308.022], e: [479.847, 316.022], to: [0, 1.33333277702332], ti: [0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 120, s: [479.847, 316.022], e: [479.847, 308.022], to: [0, 0], ti: [0, 1.33333277702332] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 50, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.382, -16.533], [0.328, 0.403], [0.382, 16.533], [0.297, 0.403]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.382, -16.533], [-6.359, 0.382], [0.382, 16.533], [6.359, 0.382]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.382, -16.533], [-6.359, 0.382], [0.382, 16.533], [6.359, 0.382]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.382, -16.533], [0.328, 0.403], [0.382, 16.533], [0.297, 0.403]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.382, -16.533], [0.328, 0.403], [0.382, 16.533], [0.297, 0.403]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.382, -16.533], [-6.359, 0.382], [0.382, 16.533], [6.359, 0.382]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.382, -16.533], [-6.359, 0.382], [0.382, 16.533], [6.359, 0.382]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.382, -16.533], [0.328, 0.403], [0.382, 16.533], [0.297, 0.403]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [413.102, 92.973], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 2, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.427, -18.495], [0.386, 0.478], [0.427, 18.495], [0.363, 0.478]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.427, -18.495], [-7.114, 0.427], [0.427, 18.495], [7.113, 0.427]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.427, -18.495], [-7.114, 0.427], [0.427, 18.495], [7.113, 0.427]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.427, -18.495], [0.386, 0.478], [0.427, 18.495], [0.363, 0.478]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.427, -18.495], [0.386, 0.478], [0.427, 18.495], [0.363, 0.478]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.427, -18.495], [-7.114, 0.427], [0.427, 18.495], [7.113, 0.427]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.427, -18.495], [-7.114, 0.427], [0.427, 18.495], [7.113, 0.427]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.427, -18.495], [0.386, 0.478], [0.427, 18.495], [0.363, 0.478]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [568.406, 247.143], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 2, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.464, -12.857], [0.536, 0.344], [0.464, 12.857], [0.464, 0.344]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.464, -12.857], [-7.714, 0.297], [0.464, 12.857], [7.714, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.464, -12.857], [-7.714, 0.297], [0.464, 12.857], [7.714, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.464, -12.857], [0.536, 0.344], [0.464, 12.857], [0.464, 0.344]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.464, -12.857], [0.536, 0.344], [0.464, 12.857], [0.464, 0.344]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.464, -12.857], [-7.714, 0.297], [0.464, 12.857], [7.714, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.464, -12.857], [-7.714, 0.297], [0.464, 12.857], [7.714, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.464, -12.857], [0.536, 0.344], [0.464, 12.857], [0.464, 0.344]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [510.252, 132.418], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 2, cix: 2, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.243, 0.282], [0.297, 12.857], [0.257, 0.282]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.944, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.944, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.243, 0.282], [0.297, 12.857], [0.257, 0.282]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.243, 0.282], [0.297, 12.857], [0.257, 0.282]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.944, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.944, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.243, 0.282], [0.297, 12.857], [0.257, 0.282]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [601.637, 306.088], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 13", np: 2, cix: 2, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.242, 0.282], [0.297, 12.857], [0.257, 0.282]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.242, 0.282], [0.297, 12.857], [0.257, 0.282]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.242, 0.282], [0.297, 12.857], [0.257, 0.282]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.242, 0.282], [0.297, 12.857], [0.257, 0.282]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [473.461, 211.143], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 14", np: 2, cix: 2, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.305, 0.344], [0.297, 12.857], [0.195, 0.344]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.305, 0.344], [0.297, 12.857], [0.195, 0.344]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.305, 0.344], [0.297, 12.857], [0.195, 0.344]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.305, 0.344], [0.297, 12.857], [0.195, 0.344]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [369.945, 354.22], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 15", np: 2, cix: 2, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 0, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.367, 0.282], [0.297, 12.857], [0.382, 0.282]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 60, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.367, 0.282], [0.297, 12.857], [0.382, 0.282]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 120, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.367, 0.282], [0.297, 12.857], [0.382, 0.282]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, n: "0p667_1_0p333_0", t: 180, s: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [-4.945, 0.297], [0.297, 12.857], [4.945, 0.297]], c: !0 }], e: [{ i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.297, -12.857], [0.367, 0.282], [0.297, 12.857], [0.382, 0.282]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [358.34, 220.242], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 16", np: 2, cix: 2, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "st", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 10, ml2: { a: 0, k: 10, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 17", np: 1, cix: 2, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "st", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 10, ml2: { a: 0, k: 10, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 18", np: 1, cix: 2, ix: 10, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[2.967, 56.939], [2.967, -64.061], [-2.967, -49.874], [-2.967, 64.061]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [434.692, 160.5], e: [434.692, 172.5], to: [0, 2], ti: [0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 120, s: [434.692, 172.5], e: [434.692, 160.5], to: [0, 0], ti: [0, 2] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 19", np: 2, cix: 2, ix: 11, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "st", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 10, ml2: { a: 0, k: 10, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 20", np: 1, cix: 2, ix: 12, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "st", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 10, ml2: { a: 0, k: 10, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 21", np: 1, cix: 2, ix: 13, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "st", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 10, ml2: { a: 0, k: 10, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 22", np: 1, cix: 2, ix: 14, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[3.421, 27.178], [3.421, -40.234], [-3.42, -27.414], [-3.42, 40.234]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [521.783, 382.657], e: [521.783, 392.657], to: [0, 1.66666662693024], ti: [0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 120, s: [521.783, 392.657], e: [521.783, 382.657], to: [0, 0], ti: [0, 1.66666662693024] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 23", np: 2, cix: 2, ix: 15, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "st", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 10, ml2: { a: 0, k: 10, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 24", np: 1, cix: 2, ix: 16, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [{ i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-1, 49.566], [-1, 49.434]], c: !1 }], e: [{ i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-0.875, -47.809], [-1, 49.434]], c: !1 }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 60, s: [{ i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-0.875, -47.809], [-1, 49.434]], c: !1 }], e: [{ i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-0.875, -47.809], [-1, -47.566]], c: !1 }] }, { t: 120 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 10, ml2: { a: 0, k: 10, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [398.5, 195.434], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 25", np: 2, cix: 2, ix: 17, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 532, st: 0, bm: 0 }, { ddd: 0, ind: 21, ty: 4, nm: "Shape Layer 22", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[13.125, 20.375], [13, -92.875]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [0], e: [100] }, { t: 120 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { t: 60 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 22, ty: 4, nm: "Shape Layer 21", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[13.125, 20.375], [13, -92.875]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 180, s: [0], e: [100] }, { t: 240 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 120, s: [0], e: [100] }, { t: 180 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 23, ty: 4, nm: "Shape Layer 24", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-92.875, 7.125], [-92.75, -67.625]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [0], e: [100] }, { t: 120 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { t: 60 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 24, ty: 4, nm: "Shape Layer 23", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-92.875, 7.125], [-92.75, -67.625]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 180, s: [0], e: [100] }, { t: 240 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 120, s: [0], e: [100] }, { t: 180 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 2, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [58.5, -129], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 120, op: 240, st: 120, bm: 0 }, { ddd: 0, ind: 25, ty: 4, nm: "bg Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [480, 540, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0.206, -1.824]], o: [[0, 0], [0, 0]], v: [[0.988, -0.988], [-0.989, 0.988]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.1536, 0.2314, 0.3264, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 0.75, ix: 5 }, lc: 1, lj: 1, ml: 10, ml2: { a: 0, k: 10, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [261.471, 666.537], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.433, -1.529], [0.665, -0.188], [0.433, 1.529], [-0.665, 0.188]], o: [[0.433, 1.528], [-0.664, 0.189], [-0.432, -1.53], [0.665, -0.188]], v: [[1.204, -0.341], [0.784, 2.768], [-1.204, 0.341], [-0.784, -2.769]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1536, 0.2314, 0.3264, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [265.703, 671.626], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0.405, 4.454], [0.729, -1.862], [7.45, 2.915], [1.053, -8.179]], o: [[0, 0], [-0.405, -4.454], [0, 0], [-7.45, -2.915], [-1.053, 8.179]], v: [[0.417, 14.712], [10.304, 2.651], [-0.102, 1.801], [3.503, -12.896], [-9.9, 7.631]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.0902, 0.1529, 0.2275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [241.154, 648.317], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 2, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0.405, 4.454], [0.728, -1.862], [7.45, 2.915], [1.052, -8.179]], o: [[0, 0], [-0.405, -4.454], [0, 0], [-7.45, -2.915], [-1.053, 8.179]], v: [[0.416, 14.712], [10.304, 2.651], [-0.101, 1.801], [3.502, -12.896], [-9.899, 7.631]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1536, 0.2314, 0.3264, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [244.319, 648.317], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 2, cix: 2, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [5, -4], [-7, 0]], o: [[0, 0], [-5, 4], [7, 0]], v: [[4, -2], [-4, -4], [2, 8]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2416, 0.5664, 0.7984, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [249, 683], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 2, cix: 2, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [10, -3], [-4, -8], [0, 0], [4, -10], [0, 0], [-10, -4], [0, 0], [2.385, 17.395], [0, 0], [2.769, 6.065]], o: [[0, 0], [-10, 3], [4, 8], [0, 0], [-4, 10], [0, 0], [10, 4], [0, 0], [-2.384, -17.396], [0, 0], [-2.769, -6.067]], v: [[7.616, -34.5], [-11.384, -32.5], [-28.384, -9.5], [-20.384, -0.5], [-31.384, 5.5], [-22.384, 19.5], [-16.384, 31.5], [7.616, 28.5], [32.999, 13.896], [15.594, 2.027], [18.23, -27.906]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.0902, 0.1529, 0.2275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [228.747, 688.027], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 2, cix: 2, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [10, -3], [-4, -8], [0, 0], [4, -10], [0, 0], [-10, -4], [0, 0], [2.384, 17.395], [0, 0], [2.77, 6.065]], o: [[0, 0], [-10, 3], [4, 8], [0, 0], [-4, 10], [0, 0], [10, 4], [0, 0], [-2.385, -17.396], [0, 0], [-2.769, -6.067]], v: [[7.616, -34.5], [-11.384, -32.5], [-28.384, -9.5], [-20.384, -0.5], [-31.384, 5.5], [-22.384, 19.5], [-16.384, 31.5], [7.616, 28.5], [33, 13.896], [15.594, 2.027], [18.23, -27.906]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1536, 0.2314, 0.3264, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [231.384, 687.5], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 2, cix: 2, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[6.254, 9.843], [-2.101, -3.948], [9.766, -9.252]], o: [[0, 0], [2.102, 3.948], [0, 0]], v: [[-6.293, -15.904], [0.807, -12.085], [-3.473, 16.033]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [252.258, 671.234], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 2, cix: 2, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-2, 6], [-10.929, -9.41], [4, -9], [11, 2]], o: [[2, -6], [9.495, 8.176], [-4, 9], [-11, -2]], v: [[-19.593, -17.603], [8.363, -18.844], [17.593, 19.133], [-10.098, 26.255]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2416, 0.5664, 0.7984, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [252.593, 681.603], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 2, cix: 2, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-2, 6], [-10.929, -9.41], [4, -9], [11, 2]], o: [[2, -6], [9.495, 8.176], [-4, 9], [-11, -2]], v: [[-19.593, -17.603], [8.363, -18.844], [17.593, 19.133], [-10.098, 26.255]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3007, 0.652, 0.9593, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [255.231, 681.603], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 2, cix: 2, ix: 10, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [4.515, -3.769], [1.679, -2.699], [-4.879, 0.362]], o: [[0, 0], [-4.514, 3.768], [-1.678, 2.701], [4.88, -0.363]], v: [[26.4, -11.661], [-13.676, -7.904], [-24.721, 8.366], [-2.893, 11.31]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.247, 0.4022, 0.513, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [225.079, 725.893], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 2, cix: 2, ix: 11, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-27.749, -5.985], [0, 0], [0.964, 2.473], [0, 0]], o: [[0, 0], [0, 0], [-0.964, -2.473], [0, 0]], v: [[29.229, -10.83], [-0.643, 15.241], [-28.265, 14.342], [-18.308, -3.414]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.0314, 0.3412, 0.6275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [226.883, 720.916], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 2, cix: 2, ix: 12, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-27.749, -5.985], [-1.028, -5.986], [5.139, -3.42], [5.138, 5.131], [-5.139, 6.84]], o: [[0, 0], [1.028, 5.985], [-5.139, 3.42], [-5.139, -5.13], [5.138, -6.84]], v: [[28.262, -26.38], [39.567, -14.408], [4.555, 28.945], [-35.456, 0.982], [-25.262, -17.068]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1552, 0.5322, 0.8848, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [225.808, 736.143], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 13", np: 2, cix: 2, ix: 13, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [0, 0], [0, 0], [0, 0], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [0, 0], [0, 0], [14.767, -25.263], [2.84, -16.231], [-0.792, -10.682]], v: [[28.479, -88.88], [54.324, -83.605], [42.984, -66.462], [7.38, -17.406], [-37.977, 69.208], [-64.917, 86.738], [-32.768, 7.911], [-14.773, -65.671]], c: !0 }], e: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [0, 0], [0, 0], [0, 0], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [0, 0], [0, 0], [0, -26.901], [2.84, -16.231], [-0.792, -10.682]], v: [[28.479, -88.88], [54.324, -83.605], [42.984, -66.462], [7.38, -17.406], [-23.477, 71.208], [-55.917, 90.988], [-24.268, 7.911], [-14.773, -65.671]], c: !0 }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 60, s: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [0, 0], [0, 0], [0, 0], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [0, 0], [0, 0], [0, -26.901], [2.84, -16.231], [-0.792, -10.682]], v: [[28.479, -88.88], [54.324, -83.605], [42.984, -66.462], [7.38, -17.406], [-23.477, 71.208], [-55.917, 90.988], [-24.268, 7.911], [-14.773, -65.671]], c: !0 }], e: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [0, 0], [0, 0], [0, 0], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [0, 0], [0, 0], [14.767, -25.263], [2.84, -16.231], [-0.792, -10.682]], v: [[28.479, -88.88], [54.324, -83.605], [42.984, -66.462], [7.38, -17.406], [-37.977, 69.208], [-64.917, 86.738], [-32.768, 7.911], [-14.773, -65.671]], c: !0 }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 120, s: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [0, 0], [0, 0], [0, 0], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [0, 0], [0, 0], [14.767, -25.263], [2.84, -16.231], [-0.792, -10.682]], v: [[28.479, -88.88], [54.324, -83.605], [42.984, -66.462], [7.38, -17.406], [-37.977, 69.208], [-64.917, 86.738], [-32.768, 7.911], [-14.773, -65.671]], c: !0 }], e: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [0, 0], [0, 0], [0, 0], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [0, 0], [0, 0], [0, -26.901], [2.84, -16.231], [-0.792, -10.682]], v: [[28.479, -88.88], [54.324, -83.605], [42.984, -66.462], [7.38, -17.406], [-23.477, 71.208], [-55.917, 90.988], [-24.268, 7.911], [-14.773, -65.671]], c: !0 }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 180, s: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [0, 0], [0, 0], [0, 0], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [0, 0], [0, 0], [0, -26.901], [2.84, -16.231], [-0.792, -10.682]], v: [[28.479, -88.88], [54.324, -83.605], [42.984, -66.462], [7.38, -17.406], [-23.477, 71.208], [-55.917, 90.988], [-24.268, 7.911], [-14.773, -65.671]], c: !0 }], e: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [0, 0], [0, 0], [0, 0], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [0, 0], [0, 0], [14.767, -25.263], [2.84, -16.231], [-0.792, -10.682]], v: [[28.479, -88.88], [54.324, -83.605], [42.984, -66.462], [7.38, -17.406], [-37.977, 69.208], [-64.917, 86.738], [-32.768, 7.911], [-14.773, -65.671]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.0314, 0.3412, 0.6275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [221.4, 802.275], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 14", np: 2, cix: 2, ix: 14, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [1.228, -2.912], [-0.978, -12.952], [4.068, -13.672], [27, -8], [25, 8], [-10.483, 22.237], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [-3.755, 8.897], [4.219, 55.912], [-4.681, 15.73], [0, 0], [0, 0], [11.471, -24.333], [2.84, -16.231], [-0.792, -10.682]], v: [[44.896, -124.88], [70.741, -119.605], [59.401, -102.462], [57.027, -82.154], [50.555, -38.011], [39.197, 45.495], [-14.956, 128.488], [-89.335, 112.807], [-47.5, 49.988], [-16.352, -28.589], [1.644, -101.671]], c: !0 }], e: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [1.228, -2.912], [-0.978, -12.952], [0.792, -14.242], [27, -8], [25, 8], [0, 26.902], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [-3.755, 8.897], [4.219, 55.912], [-0.791, 14.241], [0, 0], [0, 0], [0, -26.901], [2.84, -16.231], [-0.792, -10.682]], v: [[44.896, -124.88], [70.741, -119.605], [59.401, -102.462], [57.027, -82.154], [57.555, -41.011], [50.697, 45.495], [28.544, 126.988], [-72.335, 116.307], [-39.501, 54.988], [-7.852, -28.089], [1.644, -101.671]], c: !0 }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 60, s: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [1.228, -2.912], [-0.978, -12.952], [0.792, -14.242], [27, -8], [25, 8], [0, 26.902], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [-3.755, 8.897], [4.219, 55.912], [-0.791, 14.241], [0, 0], [0, 0], [0, -26.901], [2.84, -16.231], [-0.792, -10.682]], v: [[44.896, -124.88], [70.741, -119.605], [59.401, -102.462], [57.027, -82.154], [57.555, -41.011], [50.697, 45.495], [28.544, 126.988], [-72.335, 116.307], [-39.501, 54.988], [-7.852, -28.089], [1.644, -101.671]], c: !0 }], e: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [1.228, -2.912], [-0.978, -12.952], [4.068, -13.672], [27, -8], [25, 8], [-10.483, 22.237], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [-3.755, 8.897], [4.219, 55.912], [-4.681, 15.73], [0, 0], [0, 0], [11.471, -24.333], [2.84, -16.231], [-0.792, -10.682]], v: [[44.896, -124.88], [70.741, -119.605], [59.401, -102.462], [57.027, -82.154], [50.555, -38.011], [39.197, 45.495], [-14.956, 128.488], [-89.335, 112.807], [-47.5, 49.988], [-16.352, -28.589], [1.644, -101.671]], c: !0 }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 120, s: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [1.228, -2.912], [-0.978, -12.952], [4.068, -13.672], [27, -8], [25, 8], [-10.483, 22.237], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [-3.755, 8.897], [4.219, 55.912], [-4.681, 15.73], [0, 0], [0, 0], [11.471, -24.333], [2.84, -16.231], [-0.792, -10.682]], v: [[44.896, -124.88], [70.741, -119.605], [59.401, -102.462], [57.027, -82.154], [50.555, -38.011], [39.197, 45.495], [-14.956, 128.488], [-89.335, 112.807], [-47.5, 49.988], [-16.352, -28.589], [1.644, -101.671]], c: !0 }], e: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [1.228, -2.912], [-0.978, -12.952], [0.792, -14.242], [27, -8], [25, 8], [0, 26.902], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [-3.755, 8.897], [4.219, 55.912], [-0.791, 14.241], [0, 0], [0, 0], [0, -26.901], [2.84, -16.231], [-0.792, -10.682]], v: [[44.896, -124.88], [70.741, -119.605], [59.401, -102.462], [57.027, -82.154], [57.555, -41.011], [50.697, 45.495], [28.544, 126.988], [-72.335, 116.307], [-39.501, 54.988], [-7.852, -28.089], [1.644, -101.671]], c: !0 }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 180, s: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [1.228, -2.912], [-0.978, -12.952], [0.792, -14.242], [27, -8], [25, 8], [0, 26.902], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [-3.755, 8.897], [4.219, 55.912], [-0.791, 14.241], [0, 0], [0, 0], [0, -26.901], [2.84, -16.231], [-0.792, -10.682]], v: [[44.896, -124.88], [70.741, -119.605], [59.401, -102.462], [57.027, -82.154], [57.555, -41.011], [50.697, 45.495], [28.544, 126.988], [-72.335, 116.307], [-39.501, 54.988], [-7.852, -28.089], [1.644, -101.671]], c: !0 }], e: [{ i: [[-17.934, 2.11], [0, 0], [4.042, -9.163], [1.228, -2.912], [-0.978, -12.952], [4.068, -13.672], [27, -8], [25, 8], [-10.483, 22.237], [-7, 40], [0.791, 10.682]], o: [[17.934, -2.109], [1.593, 2.125], [-3.063, 6.942], [-3.755, 8.897], [4.219, 55.912], [-4.681, 15.73], [0, 0], [0, 0], [11.471, -24.333], [2.84, -16.231], [-0.792, -10.682]], v: [[44.896, -124.88], [70.741, -119.605], [59.401, -102.462], [57.027, -82.154], [50.555, -38.011], [39.197, 45.495], [-14.956, 128.488], [-89.335, 112.807], [-47.5, 49.988], [-16.352, -28.589], [1.644, -101.671]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1552, 0.5322, 0.8848, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [204.983, 838.275], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 15", np: 2, cix: 2, ix: 15, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-6, 1], [0, 0], [0, 0], [0, 0], [0, 10]], o: [[6, -1], [0, 0], [0, 0], [0, 0], [0, -10]], v: [[1.116, -22.5], [4.983, 0.236], [7.884, 21.6], [-5.884, 23.5], [-7.884, -2.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2307, 0.5566, 0.7893, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [265.994, 738.214], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 16", np: 2, cix: 2, ix: 16, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-6, 1], [-1.519, -12.91], [0, 0], [0, 0], [0, 10]], o: [[6, -1], [2, 17], [0, 0], [0, 0], [0, -10]], v: [[-2, -22.5], [9, -7.5], [11, 20.5], [-9, 23.5], [-11, -2.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3084, 0.6408, 0.9316, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [269.11, 738.214], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 17", np: 2, cix: 2, ix: 17, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-2.799, -16.494], [-0.27, -11.601], [2.211, 0.03], [1.082, 35.427]], o: [[0, 0], [0.132, 5.67], [-1.153, -0.017], [-0.399, -13.046]], v: [[5.531, -10.939], [8.498, 21.764], [2.96, 26.116], [-8.231, -10.511]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2416, 0.5664, 0.7984, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [268.348, 770.226], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 18", np: 2, cix: 2, ix: 18, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-2.799, -16.494], [7.716, -4], [1.103, 35.176]], o: [[5.013, 29.538], [-7.714, 4], [-0.409, -13.045]], v: [[7.612, -11.423], [3.657, 23.917], [-12.215, -10.732]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3007, 0.652, 0.9593, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [272.332, 770.446], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 19", np: 2, cix: 2, ix: 19, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [7, 11], [-4, 4], [0, 0]], o: [[0, 0], [-7, -11], [1.187, 0.659], [0, 0]], v: [[16.374, 28.747], [-9.23, -8.33], [-12.374, -28.747], [2.264, -4.747]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2416, 0.5664, 0.7984, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [279.923, 807.813], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 20", np: 2, cix: 2, ix: 20, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[7, 4], [7, 11], [-4, 4], [-4.291, -8.16], [-1.846, -10.285]], o: [[-2.746, -1.568], [-7, -11], [4, -4], [12.066, 22.945], [1.237, 6.891]], v: [[15.953, 33.97], [-16.047, -12.03], [-19.19, -32.447], [-1.256, -29.81], [21.953, 22.673]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3007, 0.652, 0.9593, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [286.739, 811.513], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 21", np: 2, cix: 2, ix: 21, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.66, -5.143], [-6.066, -0.263], [-1.778, -0.445], [0, 0], [0.396, 2.241], [0, 0], [0, 0], [4.154, 0.132]], o: [[0, 0], [6.066, 0.264], [7.978, 1.999], [0, 0], [-0.396, -2.242], [0, 0], [0, 0], [-6.331, -0.201]], v: [[-15.363, -4.911], [-6.923, 2.078], [1.78, 1.288], [13.121, 9.332], [14.967, 8.541], [14.439, 3.134], [12.527, -1.547], [-1.517, -10.581]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3007, 0.652, 0.9593, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [315.352, 847.141], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 22", np: 2, cix: 2, ix: 22, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.792, -4.483], [-0.593, -1.318], [-1.538, 1.537], [0.527, 2.374], [0, 0]], o: [[0, 0], [0.594, 1.32], [0.659, -0.659], [0, 0], [0, 0]], v: [[-3.823, -2.417], [-0.263, 2.396], [3.957, 5.628], [3.297, 0.221], [1.715, -7.164]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2416, 0.5664, 0.7984, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [309.879, 846.098], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 23", np: 2, cix: 2, ix: 23, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[5.38, -3.267], [0, 0], [-0.577, -3.843], [0.385, 4.804], [-0.192, -1.153], [-0.769, 5.38]], o: [[0, 0], [0, 0], [0.576, 3.843], [0, 0], [0.192, 1.152], [0.768, -5.379]], v: [[-6.628, -5.86], [-3.555, -0.288], [-2.401, 4.131], [1.249, 2.018], [2.979, 4.516], [5.861, 3.747]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2416, 0.5664, 0.7984, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [322.189, 850.865], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 24", np: 2, cix: 2, ix: 24, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-4.748, -11.077], [0, 0], [0, 0], [-0.629, -3.566], [0, 0], [30.066, 6.33], [0, 0], [-8.704, 29.67]], o: [[2.312, 5.394], [0, 0], [0, 0], [0, 0], [0, 0], [-30.066, -6.33], [0, 0], [8.703, -29.671]], v: [[27.626, -46.088], [43.186, 4.813], [37.912, 8.241], [38.439, 26.439], [42.065, 61.714], [-10.352, 58.352], [-43.187, 48.065], [-12.33, -35.01]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2111, 0.5299, 0.8089, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [230.429, 826.209], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 25", np: 2, cix: 2, ix: 25, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-4.747, -11.077], [-2.374, -13.452], [0, 0], [30.066, 6.329], [0, 0], [-8.704, 29.67]], o: [[4.747, 11.077], [2.374, 13.45], [0, 0], [-30.066, -6.33], [0, 0], [8.703, -29.671]], v: [[21.033, -52.813], [47.934, 21.166], [54.528, 60.725], [-21.692, 58.352], [-54.528, 48.066], [-23.67, -35.01]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [241.769, 826.208], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 26", np: 2, cix: 2, ix: 26, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-11.868, -6.857], [-0.527, -3.693], [13.451, -16.747], [-6.33, 60.923]], o: [[11.868, 6.856], [0.527, 3.692], [-9.75, 12.14], [2.013, -19.377]], v: [[15.099, -34.879], [30.396, -10.483], [16.154, 22.747], [-24.593, -19.187]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [250.604, 754.605], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 27", np: 2, cix: 2, ix: 27, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.132, 7.648]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.131, -7.648]], v: [[-19.912, -10.879], [-14.11, 16.55], [-15.164, 29.736], [17.407, 29.736], [18.989, 5.473], [19.78, -22.088]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.0902, 0.1529, 0.2275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [267.549, 888.055], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 28", np: 2, cix: 2, ix: 28, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-22.154, 0.527], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[13.978, -22.681], [9.758, 21.099], [-13.978, 22.681]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.0902, 0.1529, 0.2275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [230.89, 891.417], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 29", np: 2, cix: 2, ix: 29, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-1.92, -1.265], [1.92, 1.265]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.0902, 0.1529, 0.2275, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 2, lj: 2, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [726.022, 571.583], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 30", np: 2, cix: 2, ix: 30, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.623, -1.682], [0.815, 0.307], [-0.598, 1.667], [-0.833, -0.313]], o: [[-0.615, 1.662], [-0.814, -0.306], [0.604, -1.688], [0.833, 0.311]], v: [[1.479, 0.595], [-1.107, 3.035], [-1.504, -0.523], [1.104, -3.029]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.0902, 0.1529, 0.2275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [722.925, 578.968], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 31", np: 2, cix: 2, ix: 31, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.307], [1.285, 0], [0, 1.306], [-1.286, 0]], o: [[0, 1.306], [-1.286, 0], [0, -1.307], [1.285, 0]], v: [[2.328, 0], [0, 2.365], [-2.328, 0], [0, -2.365]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [739.656, 597.888], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 32", np: 2, cix: 2, ix: 32, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-6.348, -3.01], [8.039, 0.86]], o: [[0, 0], [6.347, 3.01], [-8.04, -0.86]], v: [[-5.924, -0.216], [4.654, -9.247], [-2.962, 11.397]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [742.618, 587.566], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 33", np: 2, cix: 2, ix: 33, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-11.473, -1.407], [0, 0], [-0.403, -3.143], [0, 0], [-2.286, 6.834], [2.286, 11.345], [3.956, 0]], o: [[0, 0], [0, 0], [0, 0], [0.404, 3.144], [0, 0], [2.287, -6.834], [-2.286, -11.343], [-7.318, 0]], v: [[-26.815, -26.714], [-12.877, -23.297], [-6.834, 1.068], [-8.526, 10.477], [-1.009, 30.624], [19.562, 26.404], [24.528, -21.895], [-19.101, -32.343]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1536, 0.2314, 0.3264, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [751.195, 589.146], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 34", np: 2, cix: 2, ix: 34, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[10.249, 7.812], [9.224, -15.103], [-0.792, -5.768], [-6.025, -0.505], [-2.562, 9.374]], o: [[0, 0], [-9.224, 15.103], [0.852, 6.198], [5.824, 0.487], [2.563, -9.375]], v: [[19.838, -23.023], [-20.862, -20.419], [-25.768, 21.766], [-10.182, 30.704], [17.247, 26.147]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [747.708, 586.342], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 35", np: 2, cix: 2, ix: 35, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[10.759, 8.201], [7.569, -18.941], [-0.832, -6.054], [-6.325, -0.53], [-2.691, 9.841]], o: [[0, 0], [-6.909, 17.288], [0.895, 6.507], [6.114, 0.512], [2.689, -9.841]], v: [[19.381, -20.053], [-23.231, -17.319], [-28.495, 26.966], [-14.509, 34.62], [18.844, 26.419]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2898, 0.4884, 0.6302, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [746.767, 583.614], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 36", np: 2, cix: 2, ix: 36, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [4.352, -3.561], [7.516, -15.429], [0, 0]], o: [[0, 0], [-4.353, 3.56], [-4.901, 10.059], [0, 0]], v: [[19.725, -33.448], [9.308, -28.435], [-14.824, 23.388], [6.538, -17.755]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2898, 0.4884, 0.6302, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [689.846, 751.986], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 37", np: 2, cix: 2, ix: 37, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[10.285, -3.561], [4.352, -3.561], [7.515, -15.429], [-11.076, 11.473], [-1.979, 9.099]], o: [[0, 0], [-4.352, 3.56], [-4.902, 10.058], [11.077, -11.472], [1.977, -9.098]], v: [[9.177, -35.01], [0.868, -30.659], [-23.263, 21.166], [-7.836, 27.099], [26.188, -24.726]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [698.285, 754.209], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 38", np: 2, cix: 2, ix: 38, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [1.582, -4.351], [0, -3.165], [3.56, 0], [0, 0], [0, 0], [0, 0], [0.395, 2.77], [-0.791, 6.726], [-4.747, 2.373]], o: [[0, 0], [-1.582, 4.352], [0, 3.165], [-3.561, 0], [0, 0], [0, 0], [0, 0], [-0.396, -2.769], [0.791, -6.725], [4.747, -2.374]], v: [[13.253, -15.231], [7.714, -0.198], [7.714, 15.231], [6.923, 23.934], [1.384, 21.56], [-3.759, 20.769], [-6.132, 14.835], [-9.692, 11.67], [-12.462, -0.989], [0.988, -21.56]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [673.242, 797.33], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 39", np: 2, cix: 2, ix: 39, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-1.615, -4.533], [5.171, 15.418]], o: [[0, 0], [1.616, 4.534], [-5.057, -15.077]], v: [[1.155, -11.576], [6.14, 2.803], [-2.698, -0.17]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2898, 0.4884, 0.6302, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [680.005, 801.014], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 40", np: 2, cix: 2, ix: 40, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.527, 5.011], [8.703, -1.846], [0.264, -7.385], [1.939, -20.772], [-3.956, -3.956], [0, 0]], o: [[0.527, -5.011], [-8.703, 1.847], [-0.263, 7.385], [-1.845, 19.78], [3.956, 3.956], [0, 0]], v: [[-5.406, -18.857], [3.693, -46.154], [-12.133, -26.769], [-8.968, 14.242], [-6.462, 44.044], [1.714, 16.352]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2898, 0.4884, 0.6302, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [710.099, 688.604], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 41", np: 2, cix: 2, ix: 41, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.528, 5.011], [8.703, -1.846], [0.263, -7.385], [1.938, -20.772], [-3.957, -3.956], [-3.693, 12.923]], o: [[0.527, -5.011], [-8.703, 1.847], [-0.264, 7.385], [-1.846, 19.78], [3.956, 3.956], [3.692, -12.923]], v: [[13.517, -28.219], [0.066, -46.681], [-15.758, -27.297], [-12.593, 13.715], [-10.087, 43.517], [12.33, 35.604]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [713.725, 689.132], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 42", np: 2, cix: 2, ix: 42, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -17.151], [8.412, 0], [0, 17.151], [-8.412, 0]], o: [[0, 17.151], [-8.412, 0], [0, -17.151], [8.412, 0]], v: [[15.231, 0], [0, 31.055], [-15.231, 0], [0, -31.055]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [716.363, 674.297], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 43", np: 2, cix: 2, ix: 43, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-10.55, 12.396], [-23.209, 0.527], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[10.549, -12.396], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-17.406, -49.12], [27.956, -67.583], [2.374, -56.241], [13.847, 25.648], [2.374, 48.989], [-6.725, 61.253], [-3.56, 67.583], [-14.769, 66.923]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1552, 0.5322, 0.8848, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [721.703, 696.319], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 44", np: 2, cix: 2, ix: 44, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-10.55, 12.396], [-23.209, 0.527], [-3.165, -1.318], [6.33, -56.966], [0, 0], [0, 0], [0, 0]], o: [[10.549, -12.396], [23.209, -0.527], [3.164, 1.319], [-3.657, 32.916], [0, 0], [0, 0], [0, 0]], v: [[-40.615, -49.055], [4.747, -67.517], [38.506, -62.77], [44.835, 4.219], [42.462, 60.923], [-4.747, 68.044], [-37.978, 66.989]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.0314, 0.3412, 0.6275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [744.912, 696.253], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 45", np: 2, cix: 2, ix: 45, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-15.01, -13.578], [-12.859, 13.11], [15.01, 14.604], [12.02, -14.604]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [752.435, 625.182], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 46", np: 2, cix: 2, ix: 46, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-16.948, -14.077], [-14.113, 12.711], [16.948, 14.663], [13.141, -14.663]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2898, 0.4884, 0.6302, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [750.497, 625.123], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 47", np: 2, cix: 2, ix: 47, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[27.429, -5.274], [1.055, -12.659], [-8.439, 3.165]], o: [[0, 0], [-1.054, 12.659], [8.44, -3.164]], v: [[-2.638, -13.715], [-23.737, 6.33], [11.604, 4.22]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [788.165, 722.099], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 48", np: 2, cix: 2, ix: 48, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-1.583, 10.55], [-8.44, -13.714], [-2.865, -5.443], [-0.791, -7.858], [3.332, -6.331], [5.803, 18.989]], o: [[1.582, -10.549], [8.439, 13.714], [2.185, 4.153], [1.273, 12.639], [-5.275, 10.021], [-5.449, -17.835]], v: [[-18.281, -31.912], [0.18, -37.187], [8.488, -12.594], [13.828, 9.759], [16.532, 40.88], [-7.732, 21.363]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.1255, 0.1529, 0.1725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [789.567, 678.582], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 49", np: 2, cix: 2, ix: 49, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.638, -5.274], [-11.077, 1.582]], o: [[0, 0], [0, 0]], v: [[-14.44, 3.428], [14.44, -3.428]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2111, 0.5299, 0.8089, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [768.583, 798.978], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 50", np: 2, cix: 2, ix: 50, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[1e-3, -33.626], [2.638, -56.044], [-7.12, -25.714], [-0.526, 44.11], [1.385, 55.517], [7.121, 56.044], [-2.373, -12.527]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [751.769, 858.055], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 51", np: 2, cix: 2, ix: 51, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-2.11, -35.341], [-0.527, -9.495], [0, 0], [0, 0], [0, 0], [1.582, 14.241], [11.868, 10.68]], o: [[0, 0], [0.528, 9.495], [0, 0], [0, 0], [0, 0], [-1.583, -14.242], [-11.867, -10.682]], v: [[-26.571, -17.868], [-19.715, 51.231], [-17.077, 70.22], [-1.78, 70.747], [21.956, 70.484], [17.209, 11.935], [16.813, -60.065]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [770.165, 843.351], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 52", np: 2, cix: 2, ix: 52, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [-0.46, 31.754], [0, 0], [0, 0], [0, 0]], v: [[-5.934, -51.033], [-6.198, -40.219], [-6.99, 50.241], [1.187, 51.032], [6.99, 5.143]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.505, 0.7663, 0.995, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [708.648, 863.593], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 53", np: 2, cix: 2, ix: 53, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.791, -8.967], [0.527, -36.396], [0, 0], [-12.131, -1.056], [0, 0], [0.264, 26.902], [1.056, 20.572]], o: [[-0.791, 8.968], [-0.46, 31.754], [0, 0], [12.132, 1.055], [0, 0], [-0.108, -11.088], [-1.055, -20.571]], v: [[-22.945, -62.835], [-24.396, -21.56], [-25.187, 68.901], [-8.045, 70.747], [12.791, 68.901], [13.582, 3.231], [24.131, -44.769]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [726.846, 844.934], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 54", np: 2, cix: 2, ix: 54, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[38.638, -7.715], [41.802, 7.715], [32.308, 0.988], [-7.648, 6.924], [-41.802, -1.648], [-0.923, -4.154]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2111, 0.5299, 0.8089, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [748.736, 764.89], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 55", np: 2, cix: 2, ix: 55, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.789, -9.55], [-5.954, -11.797], [-18.539, 32.583], [6.741, 9.551]], o: [[-3.79, 9.55], [5.955, 11.797], [7.8, -13.709], [-6.741, -9.55]], v: [[-36.857, -36.897], [-41.605, 8.597], [39.758, 17.168], [33.811, -40.201]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2896, 0.6527, 0.9704, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [747.879, 785.37], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 56", np: 2, cix: 2, ix: 56, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-10.682, 5.144], [0, 0], [-7.516, -1.978]], o: [[0, 0], [10.681, -5.142], [0, 0], [7.517, 1.978]], v: [[30.066, 3.56], [-19.384, -1e-3], [1.583, -4.352], [-8.308, 0.791]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [151.637, 918.583], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 57", np: 2, cix: 2, ix: 57, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-2.902, -1.846], [0, 0], [10.604, 3.743]], o: [[0, 0], [2.901, 1.847], [0, 0], [-8.967, -3.165]], v: [[-20.335, -1.846], [2.347, -0.264], [-2.137, 3.956], [9.731, -0.791]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [291.663, 920.721], e: [310.038, 918.846], to: [3.0625, -0.3125], ti: [-3.0625, 0.3125] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 211, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 58", np: 2, cix: 2, ix: 58, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [9.451, -0.573], [0, 0], [-27.305, 4.275]], o: [[0, 0], [-9.451, 0.572], [0, 0], [27.305, -4.275]], v: [[1.324, -5.253], [-14.358, -1.151], [-32.159, -0.716], [4.854, 0.978]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [283.23, 938.165], e: [312.73, 939.915], to: [4.91666650772095, 0.29166665673256], ti: [-4.91666650772095, -0.29166665673256] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 60", np: 2, cix: 2, ix: 59, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[25.374, -5.586], [12.876, 6.06], [-7.669, 3.124], [0, 0]], o: [[0, 0], [0, 0], [7.669, -3.124], [0, 0]], v: [[8.9, 0.947], [-34.273, 0.189], [5.68, -0.852], [6.816, -6.248]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [291.141, 989.116], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 61", np: 2, cix: 2, ix: 60, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-34.083, 10.604], [-3.85, -1.701], [-12.688, -0.153]], o: [[0, 0], [2.68, 1.184], [-11.014, 1.582]], v: [[2.602, -5.302], [3.196, -2.335], [31.481, -0.555]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [245.035, 956.258], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 62", np: 2, cix: 2, ix: 61, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-13.451, 1.847], [-19.909, -1.593], [0, 0], [12.699, 3.704]], o: [[0, 0], [9.89, 0.791], [0, 0], [-9.494, -2.769]], v: [[-6.66, -5.94], [-0.99, 1.445], [26.307, 2.631], [-16.814, 2.236]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [141.022, 968.039], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 63", np: 2, cix: 2, ix: 62, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-39.561, 11.077], [6.33, 7.912]], o: [[0, 0], [0, 0]], v: [[31.649, -2.374], [-31.648, -8.703]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [697.176, 936.78], e: [686.926, 944.405], to: [-1.70833337306976, 1.27083337306976], ti: [1.70833337306976, -1.27083337306976] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 64", np: 2, cix: 2, ix: 63, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[30.692, 13.655], [-51.153, 1.775]], o: [[0, 0], [0, 0]], v: [[-50.615, -23.078], [54.615, -17.334]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [735.673, 968.23], e: [735.673, 985.23], to: [0, 2.83333325386047], ti: [0, -2.83333325386047] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 65", np: 2, cix: 2, ix: 64, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-14.77, 22.154], [54.542, 4.483]], o: [[-0.923, -0.404], [0, 0]], v: [[40.326, -10.875], [-40.326, -4.281]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [776.82, 931.075], e: [797.57, 951.575], to: [3.45833325386047, 3.41666674613953], ti: [-3.45833325386047, -3.41666674613953] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 66", np: 2, cix: 2, ix: 65, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-3.956, -1.582], [0, 0], [-14.705, 7.785]], o: [[0, 0], [3.956, 1.583], [0, 0], [6.725, -3.561]], v: [[-17.802, -7.651], [-0.791, -1.717], [-11.077, 3.03], [11.077, -0.134]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [801.484, 915.052], e: [865.484, 917.552], to: [10.6666669845581, 0.41666665673256], ti: [-10.6666669845581, -0.41666665673256] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 67", np: 2, cix: 2, ix: 66, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-24.527, 2.374], [-2.374, -3.428], [-11.078, 1.846], [16.879, 1.582]], o: [[0.83, -0.08], [2.373, 3.429], [0, 0], [-16.879, -1.583]], v: [[-7.121, -6.026], [-13.186, -1.543], [31.648, 1.622], [-1.055, 4.524]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: -5, s: [700.341, 923.29], e: [687.216, 929.415], to: [-2.1875, 1.02083337306976], ti: [2.1875, -1.02083337306976] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 68", np: 2, cix: 2, ix: 67, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-16.72, 11.902], [-30.089, 2.646], [-17.383, -2.645], [0, 0], [32.405, 3.968], [0, 0]], o: [[0, 0], [0, 0], [17.383, 2.645], [0, 0], [-32.404, -3.967], [0, 0]], v: [[-35.948, -14.331], [-5.882, -7.211], [0.448, 5.449], [52.668, 0.701], [-1.634, 10.362], [-17.134, -1.613]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [123.401, 855.955], e: [91.901, 868.705], to: [-5.25, 2.125], ti: [5.25, -2.125] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 69", np: 2, cix: 2, ix: 68, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -5.934], [0, -3.561], [0, -7.912], [0.792, 5.933], [-0.976, 1.061], [0, 0], [-8.877, 2.824], [6.33, 3.165]], o: [[0, 0], [0, 5.935], [0, 3.56], [0, 7.912], [-0.27, -2.026], [1.882, -2.047], [0, 0], [8.704, -2.77], [-5.354, -2.677]], v: [[-44.242, -19.714], [41.209, -18.132], [17.868, -1.12], [44.242, 13.385], [13.516, 18.133], [31.319, 12.594], [22.22, 8.242], [-12.33, -0.329], [14.703, -15.626]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [190.209, 997.109], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 70", np: 2, cix: 2, ix: 69, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-4.395, 25.488], [21.094, 7.031], [19.042, 14.062], [-33.397, 3.515]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[40.429, -12.744], [0, -3.955], [-40.428, -10.107], [0, 1.319]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [364.863, 979.255], e: [364.863, 1000.755], to: [0, 3.58333325386047], ti: [0, -3.58333325386047] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 71", np: 2, cix: 2, ix: 70, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-14.241, 23.735], [37.978, 1.186]], o: [[0, 0], [0, 0]], v: [[43.168, 5.633], [-25.667, 18.688]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [627.684, 973.434], e: [646.934, 994.934], to: [3.20833325386047, 3.58333325386047], ti: [-3.20833325386047, -3.58333325386047] }, { t: 240 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 72", np: 2, cix: 2, ix: 71, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[17.318, 22.514], [-13.854, -0.865], [0, 0], [-36.368, 4.329], [0, 0], [45.893, -8.659], [0, 0]], o: [[0, 0], [13.855, 0.866], [0, 0], [36.368, -4.33], [0, 0], [-45.894, 8.659], [0, 0]], v: [[-66.675, -5.629], [-52.821, -1.299], [-32.038, -6.495], [13.854, 3.031], [21.647, -18.617], [20.782, 9.958], [-32.038, 2.164]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [883.012, 833.213], e: [897.762, 866.213], to: [2.45833325386047, 5.5], ti: [-2.45833325386047, -5.5] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 210, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 73", np: 2, cix: 2, ix: 72, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[31.886, 24.265], [21.788, -2.807], [0, 0], [31.054, -9e-3], [0, 0], [-48.471, 0.631], [0, 0]], o: [[0, 0], [-21.788, 2.805], [0, 0], [-31.055, 0.01], [0, 0], [48.47, -0.63], [0, 0]], v: [[57.773, -21.313], [45.965, -4.049], [-5.684, -3.141], [-43.214, 12.77], [-89.659, 7.806], [-31.082, 20.682], [2.253, 3.378]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [572.39, 845.944], e: [578.39, 864.944], to: [1, 3.16666674613953], ti: [-1, -3.16666674613953] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 209, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 74", np: 2, cix: 2, ix: 73, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [20.876, -0.749], [-22.268, -0.749], [-21.34, -2.995], [0, 0], [-44.835, 3.505], [0, 0], [37.577, 0], [0, 0], [25.051, 2.246], [0, 0], [-22.268, 3.744]], o: [[0, 0], [-20.877, 0.749], [0, 0], [21.34, 2.994], [0, 0], [30.109, -2.354], [0, 0], [-37.578, 0], [0, 0], [-25.052, -2.247], [0, 0], [22.268, -3.743]], v: [[-57.602, -18.126], [-91.111, -13.878], [-70.236, -5.642], [-69.47, 3.195], [8.288, -0.422], [78.485, 13.417], [121.73, 4.393], [71.629, 18.869], [4.112, 4.071], [-92.503, 14.575], [-91.111, -3.396], [-99.462, -15.126]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [447.229, 866.428], e: [409.229, 898.428], to: [-6.33333349227905, 5.33333349227905], ti: [6.33333349227905, -5.33333349227905] }, { t: 239 }], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [0], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 30, s: [100], e: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 209, s: [100], e: [0] }, { t: 239 }], ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 75", np: 2, cix: 2, ix: 74, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [5.555, -6.251], [-10.159, 0.194]], o: [[0, 0], [5.305, -6.162], [-3.535, 3.976], [0, 0]], v: [[-1.236, 1.139], [15.035, 2.423], [-16.805, -0.156], [0.715, 6.212]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [635.379, 799.553], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 80", np: 2, cix: 2, ix: 75, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [4.452, -5.009], [-8.854, 5.3]], o: [[0, 0], [-7.049, -3.342], [-5.602, 6.301], [0, 0]], v: [[10.028, -1.409], [18.613, -3.39], [-13.208, -2.144], [18.81, 1.853]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [832.652, 809.492], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 81", np: 2, cix: 2, ix: 76, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 0, s: [{ i: [[7.142, -8.034], [-12.832, 0.204], [0, 0], [0, 0], [-1.133, 1.133]], o: [[-4.46, 5.018], [0, 0], [0, 0], [2.159, -0.691], [8.034, -8.034]], v: [[-21.872, -0.13], [0.146, 7.96], [-0.332, 1.274], [13.238, 6.159], [18.298, 3.44]], c: !0 }], e: [{ i: [[6.996, -8.162], [-12.832, 0.204], [0, 0], [0, 0], [-1.133, 1.133]], o: [[-2.9, 3.384], [0, 0], [0, 0], [3.302, -0.593], [8.034, -8.034]], v: [[-21.872, -0.13], [-8.229, 7.335], [-5.082, 1.837], [1.301, 7.784], [18.298, 3.44]], c: !0 }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, n: "0p833_0p833_0p167_0p167", t: 119, s: [{ i: [[6.996, -8.162], [-12.832, 0.204], [0, 0], [0, 0], [-1.133, 1.133]], o: [[-2.9, 3.384], [0, 0], [0, 0], [3.302, -0.593], [8.034, -8.034]], v: [[-21.872, -0.13], [-8.229, 7.335], [-5.082, 1.837], [1.301, 7.784], [18.298, 3.44]], c: !0 }], e: [{ i: [[7.142, -8.034], [-12.832, 0.204], [0, 0], [0, 0], [-1.133, 1.133]], o: [[-4.46, 5.018], [0, 0], [0, 0], [2.159, -0.691], [8.034, -8.034]], v: [[-21.872, -0.13], [0.146, 7.96], [-0.332, 1.274], [13.238, 6.159], [18.298, 3.44]], c: !0 }] }, { t: 239 }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [875.272, 816.371], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 82", np: 2, cix: 2, ix: 77, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [24.569, -1.173], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [-24.569, 1.172], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[22.039, -12.933], [0.914, 23.669], [-25.482, -13.551], [-10.951, -7.099], [-2.952, -24.841], [10.1, -6.015]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.68, 0.8507, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [601.865, 931.622], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 83", np: 2, cix: 2, ix: 78, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[7.112, -8.001], [-0.532, -0.9], [0, 0], [0, 0], [-4.334, 4.334]], o: [[-0.959, 1.079], [0, 0], [0, 0], [10.302, 1.318], [8.001, -8.001]], v: [[-23.467, -0.416], [-24.007, 2.561], [-13.683, 1.915], [-11.563, 7.099], [16.537, 3.141]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [171.254, 832.403], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 84", np: 2, cix: 2, ix: 79, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [6.394, -7.192], [-11.983, -0.221]], o: [[0, 0], [-0.933, -6.319], [-4.156, 4.676], [0, 0]], v: [[-1.126, 2.691], [22.583, 0.844], [-18.428, -0.431], [1.031, 7.622]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [134.169, 844.286], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 85", np: 2, cix: 2, ix: 80, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [4.44, -4.994], [-10.49, 10.491], [0.599, 1.16]], o: [[0, 0], [-12.821, -0.868], [-9.324, 10.491], [1.384, -1.383], [0, 0]], v: [[4.145, -4.164], [9.353, -9.984], [-22.384, -4.301], [30.066, 0.361], [31.11, -3.464]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [402.658, 924.724], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 86", np: 2, cix: 2, ix: 81, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[25.577, 0.072], [0, 0], [7.64, 1.992], [2.772, -3.118], [-16.242, 16.241]], o: [[0, 0], [0, 0], [-6.64, 1.491], [-14.436, 16.242], [9.789, -9.789]], v: [[0.87, -16.305], [-5.54, -8.979], [-23.562, -14.014], [-38.279, -7.155], [42.927, 0.064]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2482, 0.3431, 0.4318, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [359.728, 957.627], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 87", np: 2, cix: 2, ix: 82, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[5.539, -4.747], [-7.912, 7.12]], o: [[-5.538, 4.747], [7.912, -7.121]], v: [[-6.725, -4.352], [4.352, 1.979]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [450.714, 797.132], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 88", np: 2, cix: 2, ix: 83, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[9.494, 2.374], [-15.824, -3.956]], o: [[-9.495, -2.374], [15.825, 3.956]], v: [[0.792, -7.911], [0, 6.33]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [437.659, 808.604], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 89", np: 2, cix: 2, ix: 84, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.692, 1.978], [2.381, -0.152], [-6.33, -3.164]], o: [[0.788, -2.252], [-6.24, 0.397], [6.33, 3.165]], v: [[8.161, -3.759], [4.609, -8.155], [-2.619, 5.141]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [438.696, 829.572], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 90", np: 2, cix: 2, ix: 85, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[9.495, -5.941], [-10.286, 4.456]], o: [[-9.495, 5.942], [10.286, -4.457]], v: [[-5.538, -0.991], [4.747, 2.476]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [390.978, 723.713], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 91", np: 2, cix: 2, ix: 86, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[9.495, 3.956], [-9.494, -2.374]], o: [[-9.494, -3.956], [9.495, 2.373]], v: [[1.186, -5.933], [-1.188, 7.517]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [406.407, 737], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 92", np: 2, cix: 2, ix: 87, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[8.222, -4.11], [-9.396, 6.46]], o: [[-8.222, 4.11], [9.396, -6.46]], v: [[-2.936, -5.579], [1.762, 3.229]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [443.742, 779.158], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 93", np: 2, cix: 2, ix: 88, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[14.242, 1.583], [-7.121, -1.583]], o: [[-14.242, -1.582], [7.12, 1.582]], v: [[0.396, -6.726], [-7.516, 6.725]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2482, 0.3431, 0.4318, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [397.704, 740.956], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 94", np: 2, cix: 2, ix: 89, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -11.868], [-3.125, 15.012]], o: [[4.361, 2.069], [3.059, -14.697]], v: [[-8.65, 0.633], [5.591, -0.158]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [406.75, 763.663], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 95", np: 2, cix: 2, ix: 90, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-4.747, 10.286], [0, 0], [-2.374, 0], [0, 0], [0, -5.538]], o: [[0, 0], [4.747, -10.286], [0, 0], [2.374, 0], [0, 0], [0, 5.539]], v: [[0, 9.099], [-10.285, -0.396], [-0.791, 5.143], [6.33, -7.516], [7.121, 1.187], [15.033, 5.143]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2482, 0.3431, 0.4318, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [558.714, 829.571], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 96", np: 2, cix: 2, ix: 91, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0.731], [22.286, 0], [0, -5.244], [-22.285, 0], [-3.742, 0.271]], o: [[0, 0], [0.666, -0.684], [0, -5.244], [-22.285, 0], [0, 5.243], [4.119, 0], [0, 0]], v: [[8.704, 0], [39.323, 2.126], [40.352, 0], [0, -9.495], [-40.352, 0], [0, 9.495], [11.834, 9.078]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [622.802, 876.121], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 97", np: 2, cix: 2, ix: 92, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[23.111, -0.943], [-23.084, 1.215]], o: [[-23.111, 0.943], [26.884, -1.415]], v: [[-5.188, -5.089], [1.415, 4.816]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [524.86, 848.095], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 98", np: 2, cix: 2, ix: 93, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[23.111, -0.943], [-23.084, 1.215]], o: [[-23.111, 0.943], [26.885, -1.415]], v: [[-5.188, -5.088], [1.415, 4.816]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [479.761, 840.975], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 99", np: 2, cix: 2, ix: 94, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[23.111, -0.943], [-23.084, 1.215]], o: [[-23.111, 0.943], [26.885, -1.415]], v: [[-5.188, -5.088], [1.415, 4.816]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2482, 0.3431, 0.4318, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [458.249, 848.635], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 100", np: 2, cix: 2, ix: 95, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -9.476], [-45.663, 0], [0, 15.949], [43.516, -4.747]], o: [[0, 0], [-20.18, 5.265], [0, 15.949], [45.664, 0], [0, 0], [0, 0]], v: [[-48.264, 0.3], [-49.437, -26.015], [-82.681, -2.865], [0, 26.014], [82.681, -2.865], [24.132, 21.267]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.2482, 0.3431, 0.4318, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [593.923, 959.03], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 101", np: 2, cix: 2, ix: 96, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.885, -0.923], [0, 0], [2.911, 0.69], [0, 0], [2.135, -0.619], [0, -8.941], [-45.663, 0], [0, 15.95], [41.562, 1.523]], o: [[0, 0], [-2.686, 1.316], [0, 0], [-2.163, -0.513], [-18.269, 5.298], [0, 15.95], [45.664, 0], [0, -14.92], [-2.098, -0.076]], v: [[2.654, -27.447], [-16.021, -18.3], [-24.678, -17.331], [-46.213, -22.431], [-52.777, -22.276], [-82.681, -0.045], [0, 28.834], [82.681, -0.045], [8.72, -28.758]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [593.923, 956.21], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 102", np: 2, cix: 2, ix: 97, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[27.01, -0.673], [3.893, -0.821], [0, 0], [0, 0], [-25.439, 0.533]], o: [[-4.446, 0.11], [0, 0], [0, 0], [-7.706, 4.78], [42.783, -0.897]], v: [[-1.459, -8.06], [-14.096, -6.589], [-11.679, -1.242], [-27.732, -1.657], [-7.345, 8.201]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [422.43, 859.45], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 103", np: 2, cix: 2, ix: 98, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[10.286, 1.582], [-11.868, 5.538], [0, 0], [15.034, -11.077]], o: [[0, 0], [11.868, -5.54], [0, 0], [-15.032, 11.076]], v: [[-23.737, 16.616], [-5.539, -16.614], [-4.748, 1.583], [8.702, 11.078]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [413.132, 820.472], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 104", np: 2, cix: 2, ix: 99, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [9.495, 0], [0, 0], [6.33, -5.538], [0, 0], [-13.451, -3.956]], o: [[0, 0], [-9.494, 0], [0, 0], [-6.33, 5.538], [0, 0], [13.45, 3.956]], v: [[28.088, 15.032], [6.725, -19.781], [9.099, -1.583], [-6.725, -6.329], [11.473, 11.077], [-14.637, 15.825]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [373.176, 819.681], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 105", np: 2, cix: 2, ix: 100, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-10.951, 0.02], [0, 0], [0.698, -4.77], [0, 0], [1.491, -6.378], [0, 0], [36.209, -1.101], [15.161, -0.272], [3.41, 6.093], [0, 0], [-6.193, 8.393]], o: [[0, 0], [10.951, -0.02], [0, 0], [-0.698, 4.771], [0, 0], [-1.493, 6.378], [0, 0], [-36.208, 1.101], [-15.162, 0.272], [-3.41, -6.093], [0, 0], [6.193, -8.394]], v: [[-27.698, -8.863], [-18.4, -24.706], [-12.533, -9.682], [3.857, -5.7], [-3.386, 5.602], [13.529, 7.464], [-8.101, 16.828], [13.958, 22.721], [-20.615, 24.453], [-43.752, 15.695], [-30.928, 11.977], [-43.975, -13.112]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258, 0.4357, 0.602, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [578.772, 815.062], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 106", np: 2, cix: 2, ix: 101, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[6.33, -20.572], [15.825, 39.561], [-9.494, 36.396], [-15.824, -39.56]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3154, 0.3735, 0.4446, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [465.352, 648.781], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 107", np: 2, cix: 2, ix: 102, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-17.208, -50.539], [-17.208, 1.682], [4.154, 14.737], [5.34, 70.516], [17.208, 21.858], [-10.484, -10.384], [-5.736, -70.516]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.514, 0.6484, 0.766, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [436.274, 519.912], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 108", np: 2, cix: 2, ix: 103, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[8.857, -32.563], [-8.857, -0.667], [8.857, 32.563]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.514, 0.6484, 0.766, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [552.143, 481.711], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 109", np: 2, cix: 2, ix: 104, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[-18.252, -19.099], [-8.758, 24.813], [18.253, -24.813]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.514, 0.6484, 0.766, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [513.275, 475.22], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 110", np: 2, cix: 2, ix: 105, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[-0.593, -54], [7.714, 52.813], [-7.714, 54]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3154, 0.3735, 0.4446, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [507.88, 786.253], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 111", np: 2, cix: 2, ix: 106, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0.579, 35.927], [6.389, -2.535], [4.228, -28.854], [-6.39, -35.927]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3154, 0.3735, 0.4446, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [497.938, 711.983], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 112", np: 2, cix: 2, ix: 107, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-4.126, -48.461], [-9.665, -2.571], [4.665, 23.462], [7.665, 48.462], [9.665, 25.462], [-0.17, -0.988]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4067, 0.4928, 0.5733, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [428.335, 760.539], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 113", np: 2, cix: 2, ix: 108, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[4.396, -58.088], [-9.396, 58.044], [2.758, 58.088], [6.758, 58.088], [9.396, -37.212]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3154, 0.3735, 0.4446, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [477.626, 780.055], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 114", np: 2, cix: 2, ix: 109, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[1.203, -71.275], [-15.709, -15.984], [1.697, 3.005], [10.565, 71.274], [15.709, 5.107], [8.027, -15.984]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.514, 0.6484, 0.766, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [502.929, 596.15], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 115", np: 2, cix: 2, ix: 110, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-4, -11], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 17], [0, 0]], o: [[0, 0], [0, 0], [4, 11], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -17], [0, 0]], v: [[-11.758, -137.904], [-15, -86.54], [5, -69.54], [-1, 66.46], [7, 104.46], [8.813, 136.646], [12.395, 137.904], [15, 107.46], [6, 65.46], [12, -64.54], [-10, -92.54]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.514, 0.6484, 0.766, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [535.659, 671.959], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 116", np: 2, cix: 2, ix: 111, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-42.335, 156.429], [-42.83, -169.879], [4.346, -69.066], [11.467, 17.967], [42.83, 43.505], [23.335, 169.879], [-22.555, 166.714]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.3154, 0.3735, 0.4446, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [434.895, 671.165], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 117", np: 2, cix: 2, ix: 112, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [64.088, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-64.088, 0]], v: [[-84.5, 191.923], [-84.5, -138.989], [-83.939, -192.264], [-25.588, -200.572], [-25.676, -134.286], [48.983, -182.768], [84.5, -125.802], [84.5, 190.868], [0.324, 200.571]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4067, 0.4928, 0.5733, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [476.5, 640.077], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 118", np: 2, cix: 2, ix: 113, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-33.23, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [33.231, 0], [0, 0], [0, 0]], v: [[-84.5, 196.84], [-84.5, -186.012], [3.093, -196.841], [84.5, -186.012], [84.5, 195.785]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.514, 0.6484, 0.766, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [476.5, 635.16], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 119", np: 2, cix: 2, ix: 114, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[22, 3], [-13.78, -1.739], [0, -11.875], [0, 0], [5, 10]], o: [[0, 0], [7.654, 4.807], [0, 0], [0, 0], [-5, -10]], v: [[-27.5, -36.13], [7.5, -35.13], [27.5, -12.13], [27.5, 36.87], [17.5, -18.13]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [156.5, 661.13], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 120", np: 2, cix: 2, ix: 115, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [30.887, -17.278], [1.196, -1.329], [0, 0], [-5, 6]], o: [[0, 0], [-2.133, 1.193], [-9, 10], [0, 0], [9.233, -11.08]], v: [[20.5, -22.5], [-8.387, -14.222], [-13.5, -10.5], [-17.5, 31.5], [-8.5, -8.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [235.5, 474.5], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 121", np: 2, cix: 2, ix: 116, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [5, -6], [-1, -21], [-17, 12]], o: [[0, 0], [-5, 6], [0.579, 12.152], [7.307, -5.158]], v: [[33, -41.076], [-18, -29.076], [-32, 28.924], [-12, -27.076]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [285, 421.076], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 122", np: 2, cix: 2, ix: 117, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-15, -2], [8, -1], [2, -17], [-4, -11], [-1, -10], [0, 0], [0, 0], [-6, 24], [-6, 33]], o: [[0, 0], [-8, 1], [-2, 17], [0, 0], [1, 10], [0, 0], [0, 0], [0, 0], [6, -33]], v: [[16, -79], [4, -83], [-14, -50], [-9, 13], [-9, 53], [-4, 84], [-2, 82], [-4, 12], [-9, -49]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [349, 733], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 123", np: 2, cix: 2, ix: 118, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-13, -7], [0, 0], [12.244, 3.175]], o: [[0, 0], [14.654, 7.891], [0, 0], [-27, -7]], v: [[-27, -18], [3, -14], [27, 25], [7, -18]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [354, 635], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 124", np: 2, cix: 2, ix: 119, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[18, -3], [-8, -6], [-11, -3], [-1, -25], [0, 0], [6, 9], [7, 6]], o: [[0, 0], [8, 6], [11, 3], [1, 25], [0, 0], [-6, -9], [-7, -6]], v: [[-33, -46], [-8, -46], [13, -31], [32, 18], [32, 52], [22, -17], [-5, -39]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [314, 561], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 125", np: 2, cix: 2, ix: 120, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [45, 2], [-5, 56], [-28, 30], [-21, 30], [0, 0], [-7, -2], [-9, 37], [-66, -21], [-26, -4], [-8, -48], [0, 0]], o: [[0, 0], [-45, -2], [5, -56], [0, 0], [21, -30], [0, 0], [0, 0], [9, -37], [0, 0], [26, 4], [8, 48], [0, 0]], v: [[67, 266], [-153, 264], [-200.5, 217.5], [-160.5, 71.5], [-130.5, -34.5], [-84.5, -68.5], [-71.5, -75.5], [-73.5, -127.5], [23.5, -240.5], [102.5, -269.5], [197.5, -113.5], [191.5, 260]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [272, 561], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 126", np: 2, cix: 2, ix: 121, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [5, 3], [26, 2], [-9.489, -6.778]], o: [[0, 0], [-7.55, -4.53], [0, 0], [7, 5]], v: [[22, 17.389], [13, -7.611], [-22, -15.611], [15, -10.611]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [617, 343.611], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 127", np: 2, cix: 2, ix: 122, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-16, -8], [15, -4]], o: [[0, 0], [0, 0]], v: [[18, 7.5], [-18, -3.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [794, 585.5], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 128", np: 2, cix: 2, ix: 123, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-11, -4], [22, -6]], o: [[0, 0], [0, 0]], v: [[16.5, 3], [-16.5, 3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [706.786, 411.583], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 129", np: 2, cix: 2, ix: 124, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [10, -9], [0, 0], [0, 0], [0, 4], [-13, 5]], o: [[0, 0], [-3.717, 3.345], [0, 0], [0, 0], [0, -4], [13, -5]], v: [[16.859, -56], [-13.141, -43], [-13.141, 55], [-9.141, 56], [-10.141, -36], [-0.141, -48]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [618.141, 719], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 130", np: 2, cix: 2, ix: 125, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-36, -4], [2, -12], [0, 0], [-1, 18], [-1, 7]], o: [[0, 0], [-2, 12], [0, 0], [1, -18], [1, -7]], v: [[26, -60.5], [-18, -44.5], [-24, 64.5], [-25, 34.5], [-23, -44.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [638, 605.5], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 131", np: 2, cix: 2, ix: 126, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-9.863, -4.269], [0, -25], [18.269, 10.302]], o: [[0, 0], [9.863, 4.269], [0, 0], [-18.269, -10.302]], v: [[-38.741, -28.237], [17.237, -23.104], [32.259, 35.763], [20.473, -25.461]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96, 0.9813, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [646.241, 503.737], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 132", np: 2, cix: 2, ix: 127, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-23, -1], [7, 3], [0, 0], [-87, -2], [-7, -3], [-1, 6], [20, 2], [11, 27], [18, 12], [0, 0], [42.257, 69.422], [0, 0], [10.559, 35.476], [7, 9], [4, -31], [0, 0], [0, -95]], o: [[0, 0], [23, 1], [-7, -3], [0, 0], [87, 2], [7, 3], [1, -6], [0, 0], [-11, -27], [-18, -12], [0, 0], [-28, -46], [0, 0], [-15.11, -50.769], [-7, -9], [-4, 31], [0, 0], [0, 95]], v: [[-172, 258], [-126, 268], [-100, 262], [-101, 258], [-17, 262], [123, 264], [188, 262], [169, 240], [159, 137], [123, 71], [100, 57], [64, -70], [11.286, -121.417], [-10, -183], [-79, -255], [-142, -238], [-149, -150], [-189, -60]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.848, 0.9035, 0.952, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [712, 536], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 133", np: 2, cix: 2, ix: 128, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 240, st: 0, bm: 0 }, { ddd: 0, ind: 26, ty: 4, nm: "Shape Layer 25", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [540, 540, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-279.25, 380], [-273.25, 445], [-246.75, 445.5], [-245.75, 385.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.851, 0.8784, 0.902, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 4", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-1.75, -11.25], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [1.75, 11.25], [0, 0], [0, 0]], v: [[-195.063, 381.375], [-233.188, 382.125], [-229.625, 436.625], [-223.5, 458.625], [-200.625, 457]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.851, 0.8784, 0.902, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [5.188, 3.875], [0, 0], [0, 0]], o: [[0, 0], [0, -0.25], [0, 0], [0, 0]], v: [[258, 378.938], [223.5, 379.25], [227.75, 457.5], [256, 455]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.851, 0.8784, 0.902, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[273.25, 378.5], [273.75, 395.25], [283.75, 454.25], [310.75, 454.75], [312, 379.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.34, 0.692, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 1, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.851, 0.8784, 0.902, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 4, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 240, st: 0, bm: 0 }], markers: [] };

// app/assets/lottie/start-button.json
var start_button_default = { v: "5.9.6", fr: 24, ip: 0, op: 25, w: 500, h: 200, nm: "26 button - start - pressing 02", ddd: 0, assets: [], fonts: { list: [{ fName: "Supercell-Magic", fFamily: "Supercell-Magic", fStyle: "Regular", ascent: 96.3409423828125 }] }, layers: [{ ddd: 0, ind: 1, ty: 5, nm: "Start", parent: 3, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { s: !0, x: { a: 0, k: 249.753, ix: 3 }, y: { a: 0, k: 94.374, ix: 4 } }, a: { a: 0, k: [0.257, 0.89, 0], ix: 1, l: 2 }, s: { a: 1, k: [{ i: { x: [0.24, 0.24, 0.24], y: [1, 1, 1] }, o: { x: [0.76, 0.76, 0.76], y: [0, 0, 0] }, t: 0, s: [100, 100, 100] }, { i: { x: [0.24, 0.24, 0.24], y: [1, 1, 1] }, o: { x: [0.76, 0.76, 0.76], y: [0, 0, 0] }, t: 6, s: [90, 90, 100] }, { t: 12, s: [100, 100, 100] }], ix: 6, l: 2 } }, ao: 0, t: { d: { k: [{ s: { sz: [249.968826293945, 36.8988418579102], ps: [-124.984413146973, -18.4494209289551], s: 39, f: "Supercell-Magic", t: "Start", ca: 0, j: 2, tr: 0, lh: 45.8054695129395, ls: 0, fc: [0.973, 0.976, 0.98] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 120, st: 0, ct: 1, bm: 0 }, { ddd: 0, ind: 2, ty: 5, nm: "Start - DROP SHADOW", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { s: !0, x: { a: 0, k: 0.257, ix: 3 }, y: { a: 0, k: 2, ix: 4 } }, a: { a: 0, k: [0.257, 0.89, 0], ix: 1, l: 2 }, s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 } }, ao: 0, t: { d: { k: [{ s: { sz: [249.968826293945, 36.8988418579102], ps: [-124.984413146973, -18.4494209289551], s: 39, f: "Supercell-Magic", t: "Start", ca: 0, j: 2, tr: 0, lh: 45.8054695129395, ls: 0, fc: [0.039, 0.294, 0.8] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 120, st: 0, ct: 1, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "front", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { s: !0, x: { a: 0, k: 249.496, ix: 3 }, y: { a: 0, k: 93.484, ix: 4 } }, a: { a: 0, k: [249.496, 93.484, 0], ix: 1, l: 2 }, s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.993, -2.615], [4.634, -1.759], [0.993, 2.615], [-4.634, 1.759]], o: [[0.993, 2.615], [-4.634, 1.759], [-0.993, -2.615], [4.634, -1.759]], v: [[8.39, -3.184], [1.797, 4.735], [-8.39, 3.184], [-1.797, -4.735]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.78823530674, 0.858823537827, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [403.292, 132.498], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 40, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.252], [1.252, 0], [0, 1.252], [-1.252, 0]], o: [[0, 1.252], [-1.252, 0], [0, -1.252], [1.252, 0]], v: [[2.266, 0], [0, 2.266], [-2.266, 0], [0, -2.266]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.78823530674, 0.858823537827, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [398.181, 126.185], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 40, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -2.379], [2.379, 0], [0, 2.379], [-2.379, 0]], o: [[0, 2.379], [-2.379, 0], [0, -2.379], [2.379, 0]], v: [[4.307, 0], [0, 4.307], [-4.307, 0], [0, -4.307]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.78823530674, 0.858823537827, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [91.543, 69.387], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 40, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 2, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.46, 10.97], [4.807, 0.112], [109.553, -2.451], [1.09, -4.823], [-1.518, -19.196], [-3.735, 17.088], [-4.197, 0], [0, 4.602], [4.602, 0], [5e-3, 0], [-0.975, 0.023], [-109.538, -2.452], [-1.09, -4.823], [-0.716, -9.225]], o: [[-1.09, -4.823], [-109.538, -2.451], [-4.807, 0.112], [-4.309, 19.196], [-0.882, -17.088], [0.579, 4.037], [4.602, 0], [0, -4.603], [-5e-3, 0], [0.956, -0.317], [109.554, -2.452], [4.807, 0.112], [2.07, 9.231], [-0.55, -10.959]], v: [[175.344, -23.404], [164.448, -32.346], [-164.181, -32.346], [-175.077, -23.404], [-179.256, 34.184], [-174.984, -17.08], [-166.745, -9.938], [-158.412, -18.271], [-166.745, -26.604], [-166.76, -26.604], [-163.848, -27.133], [164.781, -27.133], [175.677, -18.192], [179.85, 9.495]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.78823530674, 0.858823537827, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [249.373, 74.345], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 50, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 2, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.557, -15.928], [4.807, -0.112], [109.554, 2.452], [1.09, 4.823], [0.785, 7.804], [-4.615, 20.558], [-4.807, 0.112], [-109.538, -2.452], [-1.09, -4.823], [-0.336, -12.418]], o: [[-1.09, 4.823], [-109.538, 2.452], [-4.807, -0.112], [-1.747, -7.804], [-2.067, -20.558], [1.09, -4.823], [109.554, -2.452], [4.807, 0.112], [2.788, 12.434], [0.449, 15.928]], v: [[175.221, 42.527], [164.325, 51.484], [-164.304, 51.484], [-175.216, 42.527], [-179.014, 19.132], [-175.2, -42.543], [-164.304, -51.484], [164.325, -51.484], [175.221, -42.543], [179.9, -5.256]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.027450980619, 0.658823549747, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "tr", p: { a: 0, k: [249.496, 93.484], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 1, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, ct: 1, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "back", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [249.501, 105.512, 0], ix: 2, l: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 }, s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-1.088, -4.819], [6.35, -28.357], [4.808, -0.112], [109.543, 2.465], [1.088, 4.819], [-6.352, 28.357], [-4.808, 0.112], [-109.543, -2.466]], o: [[6.352, 28.357], [-1.088, 4.819], [-109.543, 2.466], [-4.807, -0.112], [-6.35, -28.357], [1.089, -4.819], [109.543, -2.465], [4.807, 0.112]], v: [[175.212, -42.543], [175.216, 42.527], [164.322, 51.477], [-164.306, 51.478], [-175.216, 42.527], [-175.212, -42.543], [-164.306, -51.478], [164.322, -51.477]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.039215687662, 0.29411765933, 0.800000011921, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, ct: 1, bm: 0 }], markers: [], chars: [{ ch: "S", size: 39, style: "Regular", w: 82.96, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-1.95, -0.569], [-2.322, -0.439], [-2.522, -0.358], [-2.235, -0.374], [-1.721, -0.439], [-0.755, -0.585], [0, -0.748], [0.066, -0.78], [0.331, -1.009], [1.875, -0.732], [3.232, -0.51], [3.328, -0.525], [3.056, -0.13], [0, -0.519], [-0.14, -1.459], [-0.315, -2.448], [-0.542, -2.107], [-0.63, -0.455], [-5.383, 0.786], [-4.88, 1.234], [-4.745, 1.754], [-4.414, 2.469], [-0.945, 3.232], [-0.293, 3.41], [0, 1.527], [0.195, 1.852], [1.204, 2.892], [6.114, 1.007], [6.13, 1.202], [-0.331, 2.242], [-1.16, 1.917], [-6.211, 0.488], [-6.158, 0.877], [0, 0.887], [0.218, 2.924], [1.357, 3.22], [2.976, 0], [2.934, -0.163], [5.103, -0.804], [4.994, -1.281], [4.588, -1.872], [1.191, -7.625], [0, -6.093], [-0.06, -1.529]], o: [[1.95, 0.569], [2.322, 0.439], [2.521, 0.358], [2.234, 0.374], [1.721, 0.439], [0.06, 0.684], [0, 0.748], [-0.133, 1.562], [-0.983, 0.716], [-1.875, 0.732], [-3.232, 0.51], [-3.329, 0.525], [-0.035, 0.357], [-0.035, 0.908], [0.21, 2.271], [0.315, 2.448], [0.542, 2.106], [5.124, -0.748], [5.382, -0.786], [4.88, -1.234], [4.744, -1.754], [1.399, -2.663], [0.944, -3.232], [0.13, -1.527], [0, -1.884], [-0.359, -3.378], [-6.218, -1.137], [-6.114, -1.007], [0.066, -2.306], [0.331, -2.242], [6.157, -1.137], [6.21, -0.487], [0.035, -0.854], [0, -2.66], [-0.263, -3.909], [-2.933, -0.098], [-2.84, 0], [-5.119, 0.263], [-5.103, 0.805], [-4.994, 1.282], [-2.74, 6.81], [-0.953, 6.126], [0, 1.529], [1.161, 0.846]], v: [[8.662, -38.136], [15.072, -36.623], [22.338, -35.427], [29.472, -34.329], [35.404, -33.109], [39.118, -31.573], [39.209, -29.426], [39.11, -27.132], [38.414, -23.277], [34.126, -21.106], [26.466, -19.243], [16.626, -17.69], [7.048, -16.708], [6.995, -15.395], [7.153, -11.845], [7.941, -4.768], [9.227, 2.066], [10.986, 5.908], [26.746, 3.607], [42.138, 0.577], [56.574, -3.905], [70.312, -10.24], [73.828, -19.083], [75.684, -29.047], [75.879, -33.628], [75.586, -39.231], [73.242, -48.635], [54.744, -51.851], [36.377, -55.164], [36.973, -61.985], [39.209, -68.222], [57.761, -70.659], [76.314, -72.705], [76.367, -75.317], [76.039, -83.693], [73.61, -94.385], [64.746, -94.531], [56.084, -94.286], [40.751, -92.685], [25.605, -89.556], [11.231, -84.826], [5.335, -63.174], [3.906, -44.845], [3.996, -40.258]], c: !0 }, ix: 2 }, nm: "S", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "S", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Supercell-Magic" }, { ch: "t", size: 39, style: "Regular", w: 78.56, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-3.679, 0.293], [-1.693, 0], [-1.749, -0.163], [0.023, -3.58], [0, -1.79], [-0.033, -1.725], [-0.138, -3.809], [-0.316, -5.469], [-1.657, 0], [-2.983, 0.455], [-4.605, 0.586], [0.032, 4.688], [0, 1.172], [-0.047, 3.451], [-0.139, 3.906], [-0.324, 1.986], [-1.965, 0.064], [-1.997, 0.127], [-1.965, 0.127], [-1.591, 0.191], [-0.211, 1.399], [-0.098, 1.558], [0, 1.558], [0.13, 1.176], [1.55, 0.079], [2.104, 0.032], [2.544, 0], [2.674, 0], [-0.033, 2.203], [-0.049, 2.368], [0, 2.253], [0, 1.624], [2.448, 0], [2.667, -0.116], [2.618, -0.198], [1.955, -0.397], [0.081, -2.136], [0.032, -2.269], [0.032, -2.213], [0, -1.618], [2.051, -0.858], [0.293, -3.371], [0, -1.844], [-0.066, -1.204]], o: [[1.725, -0.13], [1.855, 0], [0, 4.818], [-0.033, 1.758], [0, 1.758], [0.04, 3.451], [0.157, 3.841], [1.657, 0.13], [2.916, 0.032], [4.639, -0.716], [-0.066, -3.58], [0, -1.172], [0, -3.516], [0.069, -4.622], [0.139, -3.906], [1.591, -0.163], [1.965, -0.063], [1.997, -0.127], [1.965, -0.127], [0.195, -0.922], [0.211, -1.399], [0.098, -1.558], [0, -1.558], [-0.652, -0.191], [-1.55, -0.079], [-2.104, -0.032], [-2.544, 0], [0, -1.623], [0.032, -2.203], [0.049, -2.368], [0, -2.252], [-1.883, 0], [-2.448, 0], [-2.667, 0.116], [-2.618, 0.198], [-0.066, 1.425], [-0.082, 2.136], [-0.033, 2.269], [-0.033, 2.213], [-10.71, 0.572], [-0.945, 3.149], [-0.163, 2.036], [0, 1.266], [3.19, -0.325]], v: [[12.109, -46.533], [17.236, -46.729], [22.642, -46.484], [22.607, -33.887], [22.559, -28.564], [22.607, -23.34], [22.874, -12.451], [23.584, 1.514], [28.555, 1.709], [37.403, 1.074], [51.27, -0.879], [51.123, -13.281], [51.123, -16.797], [51.192, -27.246], [51.505, -40.039], [52.199, -48.877], [57.534, -49.216], [63.478, -49.503], [69.423, -49.884], [74.758, -50.362], [75.368, -53.843], [75.83, -58.279], [75.977, -62.953], [75.78, -67.056], [72.478, -67.461], [66.998, -67.628], [60.025, -67.676], [52.197, -67.676], [52.246, -73.415], [52.368, -80.272], [52.441, -87.204], [52.441, -93.018], [45.946, -93.018], [38.273, -92.844], [30.345, -92.371], [23.486, -91.477], [23.267, -86.135], [23.096, -79.527], [22.998, -72.803], [22.949, -67.056], [3.809, -64.909], [1.953, -55.131], [1.709, -49.312], [1.807, -45.605]], c: !0 }, ix: 2 }, nm: "t", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "t", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Supercell-Magic" }, { ch: "a", size: 39, style: "Regular", w: 83.4, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.863, -1.547], [-1.042, -1.596], [-1.091, -1.498], [-0.879, -1.205], [-3.386, -0.163], [-2.344, 0], [-1.498, 0.032], [-4.297, 0.293], [-4.004, 0.439], [-3.467, 0.602], [-2.344, 0.652], [-0.13, 4.223], [0, 3.667], [0, 0.912], [0.244, 4.802], [0.52, 4.2], [0.83, 3.239], [1.27, 1.595], [4.639, 0.632], [4.817, 0.127], [1.692, 0], [3.125, -0.189], [4.557, -0.441], [0.423, -1.262], [0.309, -1.672], [0.13, -1.767], [0, -1.073], [-0.033, -0.474], [-3.32, 0.033], [-0.684, 0], [-2.572, -0.099], [-2.751, -0.462], [-1.53, -0.957], [-0.195, -1.039], [-0.195, -0.825], [3.922, -0.742], [3.596, -0.874], [2.979, -0.908], [1.595, -1.022], [1.074, -4.34], [0.13, -4.389]], o: [[0.862, 1.547], [1.041, 1.596], [1.09, 1.498], [2.18, 0.391], [2.083, 0.098], [1.399, 0], [3.971, -0.098], [4.297, -0.293], [4.004, -0.439], [3.467, -0.602], [0.195, -2.946], [0.098, -3.371], [0, -0.944], [-0.033, -4.623], [-0.244, -4.802], [-0.521, -4.199], [-0.83, -3.239], [-4.362, -1.167], [-4.639, -0.631], [-1.628, -0.063], [-3.125, 0], [-4.753, 0.253], [-0.619, 0.568], [-0.423, 1.262], [-0.31, 1.672], [-0.098, 1.199], [0, 0.568], [2.669, 0], [0.651, 0], [2.669, 0], [3.223, 0.132], [2.75, 0.462], [0.195, 0.396], [0.195, 1.04], [-3.613, 0.627], [-3.923, 0.743], [-3.597, 0.874], [-2.979, 0.908], [-1.53, 2.971], [-1.074, 4.34], [0.488, 1.173]], v: [[5.103, -11.41], [7.959, -6.695], [11.157, -2.053], [14.111, 2.001], [22.461, 2.832], [29.102, 2.979], [33.447, 2.93], [45.85, 2.344], [58.301, 1.245], [69.507, -0.317], [78.223, -2.197], [78.711, -12.951], [78.857, -23.508], [78.857, -26.292], [78.442, -40.429], [77.295, -53.931], [75.269, -65.089], [72.119, -72.341], [58.618, -75.039], [44.434, -76.175], [39.453, -76.27], [30.078, -75.986], [16.113, -74.944], [14.551, -72.198], [13.452, -67.796], [12.793, -62.637], [12.646, -59.229], [12.695, -57.666], [21.68, -57.715], [23.682, -57.715], [31.543, -57.566], [40.503, -56.675], [46.924, -54.546], [47.51, -52.393], [48.096, -49.596], [36.792, -47.542], [25.513, -45.116], [15.649, -42.443], [8.789, -39.548], [4.883, -28.583], [3.076, -15.489]], c: !0 }, ix: 2 }, nm: "a", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0.298], [-0.163, 0.891], [-0.488, 0.858], [-2.441, 0.314], [-2.67, 0.528], [-0.033, -2.789], [-0.066, -3.036], [2.539, -0.165], [0.455, 0], [1.237, 0.528], [0.244, 1.221], [0.065, 1.254]], o: [[-0.033, -0.957], [0.195, -1.188], [2.441, -1.221], [2.441, -0.314], [0.13, 2.905], [0.032, 2.789], [-3.581, 0.33], [-0.521, 0.034], [-1.855, 0], [-0.326, -0.957], [-0.244, -1.221], [0, -0.297]], v: [[33.594, -23.36], [33.789, -26.132], [34.814, -29.202], [42.139, -31.503], [49.805, -32.766], [50.049, -24.226], [50.195, -15.489], [41.016, -14.747], [39.551, -14.697], [34.912, -15.489], [34.058, -18.756], [33.594, -22.469]], c: !0 }, ix: 2 }, nm: "a", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "a", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Supercell-Magic" }, { ch: "r", size: 39, style: "Regular", w: 87.79, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.052, -5.172], [-0.072, -4.242], [-0.2, -2.219], [-2.744, 0], [-2.394, 0.195], [-1.962, 0.277], [-1.23, 0.326], [0, 2.594], [0, 2.545], [-0.179, 0.995], [-0.879, 0.327], [-0.635, -0.278], [-0.603, -0.505], [-0.57, -0.636], [-0.456, -0.652], [-1.054, -1.436], [-1.103, -1.403], [-1.135, -1.37], [-1.395, -1.534], [-2.579, 0.359], [-2.485, 0.538], [-2.1, 0.604], [-1.009, 0.522], [1.172, 2.235], [1.432, 2.611], [1.35, 2.431], [0.813, 1.208], [-2.337, 2.448], [-1.321, 1.599], [0, 1.071], [0.516, 2.305], [1.385, 2.888], [1.788, 2.255], [1.708, 1.46], [3.572, 0.259], [4.047, 0.195], [4.227, 0.098], [1.999, 0.017], [1.9, -0.065], [3.048, -0.259], [1.671, -0.453], [0.066, -3.714], [0.028, -4.865], [0, -3.178], [-0.033, -2.251]], o: [[0.052, 5.172], [0.072, 4.242], [2.793, 0.261], [2.744, 0], [2.394, -0.196], [1.962, -0.278], [0.133, -2.611], [0, -2.594], [-0.033, -0.881], [0.179, -0.995], [0.748, -0.293], [0.635, 0.278], [0.602, 0.506], [0.569, 0.636], [1.334, 1.665], [1.054, 1.436], [1.103, 1.404], [1.135, 1.37], [2.031, -0.066], [2.579, -0.359], [2.484, -0.539], [2.1, -0.603], [-0.326, -0.751], [-1.172, -2.235], [-1.433, -2.611], [-1.351, -2.431], [2.643, -2.349], [2.337, -2.448], [0.096, -1.071], [0.032, -2.369], [-0.71, -3.31], [-1.354, -2.856], [-1.789, -2.255], [-2.393, -0.422], [-3.572, -0.259], [-4.048, -0.195], [-2.098, -0.032], [-1.999, -0.016], [-3.769, 0.098], [-3.048, 0.259], [-0.433, 1.46], [-0.066, 3.714], [-0.066, 2.92], [0, 2.121], [0.046, 5.613]], v: [[6.348, -21.616], [6.533, -7.495], [6.94, 2.197], [15.244, 2.588], [22.951, 2.294], [29.485, 1.585], [34.273, 0.679], [34.473, -7.128], [34.473, -14.837], [34.692, -17.651], [36.279, -19.634], [38.354, -19.658], [40.21, -18.484], [41.968, -16.77], [43.506, -14.837], [47.089, -10.187], [50.325, -5.929], [53.683, -1.768], [57.479, 2.588], [64.394, 1.952], [71.989, 0.606], [78.865, -1.108], [83.528, -2.796], [81.282, -7.275], [77.376, -14.543], [73.201, -22.105], [69.954, -27.563], [77.424, -34.758], [82.912, -40.828], [83.057, -44.041], [82.331, -51.051], [79.189, -60.349], [74.474, -68.016], [69.228, -73.59], [60.281, -74.612], [48.852, -75.294], [36.439, -75.732], [30.293, -75.806], [24.444, -75.732], [14.218, -75.197], [7.14, -74.127], [6.392, -66.367], [6.25, -53.499], [6.152, -44.352], [6.201, -37.793]], c: !0 }, ix: 2 }, nm: "r", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[-0.13, 1.469], [-1.595, 0.131], [-0.749, 0], [-0.977, -0.098], [-1.579, -0.424], [-0.652, -0.652], [-0.228, -0.93], [-0.244, -1.273], [-0.13, -1.305], [0, -0.62], [0.065, -0.522], [1.562, -0.587], [1.774, -0.343], [1.692, -0.163], [1.27, 0], [0.114, 1.566], [0, 1.714], [-0.082, 1.762]], o: [[0.781, -0.489], [0.716, -0.065], [0.944, 0], [1.758, 0.163], [1.579, 0.424], [0.065, 0.327], [0.227, 0.93], [0.244, 1.273], [0.065, 0.685], [0, 0.555], [-1.009, 0.947], [-1.562, 0.587], [-1.775, 0.343], [-1.693, 0.163], [-0.195, -1.077], [-0.114, -1.566], [0, -1.713], [0.081, -1.762]], v: [[34.619, -56.834], [38.184, -57.764], [40.381, -57.861], [43.262, -57.715], [48.267, -56.834], [51.611, -55.219], [52.051, -53.333], [52.759, -50.03], [53.32, -46.163], [53.418, -44.205], [53.32, -42.59], [49.463, -40.289], [44.458, -38.895], [39.258, -38.136], [34.814, -37.891], [34.351, -41.856], [34.18, -46.775], [34.302, -51.987]], c: !0 }, ix: 2 }, nm: "r", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "r", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Supercell-Magic" }] };

// app/modules/welcome/index.tsx
var import_react14 = require("@remix-run/react");

// app/modules/welcome/components/change-log/index.tsx
var import_core16 = require("@mantine/core"), import_hooks6 = require("@mantine/hooks"), import_react13 = require("react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), DUMMY = [
  {
    title: "FEATURES",
    message: [
      {
        type: "update",
        message: "\u30AA\u30F3\u30E9\u30A4\u30F3\u5BFE\u6226\u6A5F\u80FD"
      },
      {
        type: "update",
        message: "\u5BFE\u6226\u8A18\u9332\u306E\u4FDD\u5B58"
      }
    ]
  },
  {
    title: "2022.12.15_0.1.0",
    message: [
      {
        type: "update",
        message: "\u30D9\u30FC\u30BF\u516C\u958B"
      }
    ]
  }
], index11 = () => {
  let [opened, handle] = (0, import_hooks6.useDisclosure)(!1), [data, setData] = (0, import_react13.useState)(DUMMY);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(icon_button_default, {
        onClick: handle.open,
        children: GetThemeIcons("changeLog")
      }, void 0, !1, {
        fileName: "app/modules/welcome/components/change-log/index.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(modal_default, {
        opened,
        onClose: handle.close,
        centered: !0,
        title: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core16.Title, {
          size: "h3",
          children: "\u5909\u66F4\u5C65\u6B74"
        }, void 0, !1, {
          fileName: "app/modules/welcome/components/change-log/index.tsx",
          lineNumber: 44,
          columnNumber: 16
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core16.Timeline, {
          color: "violet",
          active: 0,
          reverseActive: !0,
          bulletSize: 12,
          styles: (theme) => ({
            itemTitle: {
              fontSize: theme.fontSizes.md
            },
            itemBody: {
              color: theme.colors.violet[0]
            }
          }),
          children: data.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core16.Timeline.Item, {
            title: item.title,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core16.List, {
              styles: (theme) => ({
                item: {
                  color: theme.colors.violet[0],
                  fontSize: theme.fontSizes.sm
                }
              }),
              children: item.message.map((mess, i2) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core16.List.Item, {
                children: mess.message
              }, i2, !1, {
                fileName: "app/modules/welcome/components/change-log/index.tsx",
                lineNumber: 72,
                columnNumber: 28
              }, this))
            }, void 0, !1, {
              fileName: "app/modules/welcome/components/change-log/index.tsx",
              lineNumber: 63,
              columnNumber: 17
            }, this)
          }, i, !1, {
            fileName: "app/modules/welcome/components/change-log/index.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this))
        }, void 0, !1, {
          fileName: "app/modules/welcome/components/change-log/index.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/modules/welcome/components/change-log/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/welcome/components/change-log/index.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}, change_log_default = index11;

// app/modules/welcome/components/rule-book/index.tsx
var import_core17 = require("@mantine/core"), import_hooks7 = require("@mantine/hooks");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), index12 = () => {
  let [opened, handle] = (0, import_hooks7.useDisclosure)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(icon_button_default, {
        onClick: handle.open,
        children: GetThemeIcons("rule", {})
      }, void 0, !1, {
        fileName: "app/modules/welcome/components/rule-book/index.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(modal_default, {
        opened,
        onClose: handle.close,
        centered: !0,
        title: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core17.Title, {
          size: "h3",
          children: "\u30EB\u30FC\u30EB\u30D6\u30C3\u30AF"
        }, void 0, !1, {
          fileName: "app/modules/welcome/components/rule-book/index.tsx",
          lineNumber: 15,
          columnNumber: 16
        }, this),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core17.Text, {
            children: "\u3053\u306E\u30B2\u30FC\u30E0\u306F\u4E09\u76EE\u4E26\u3079\u3092\u30D9\u30FC\u30B9\u306B\u3001\u904B\u8981\u7D20\u3068\u6226\u7565\u3092\u8FFD\u52A0\u3057\u305F\u30B2\u30FC\u30E0\u3067\u3059"
          }, void 0, !1, {
            fileName: "app/modules/welcome/components/rule-book/index.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core17.List, {
            type: "ordered",
            mt: "xl",
            spacing: "md",
            styles: (theme) => ({
              item: {
                color: theme.colors.violet[0]
              }
            }),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core17.List.Item, {
                children: "\u304A\u4E92\u3044\u306E\u30D7\u30EC\u30A4\u30E4\u30FC\u306F\u6700\u521D\u306B\u624B\u672D\u30924\u679A\u6301\u3063\u3066\u3044\u307E\u3059"
              }, void 0, !1, {
                fileName: "app/modules/welcome/components/rule-book/index.tsx",
                lineNumber: 30,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core17.List.Item, {
                children: "\u5404\u30DE\u30FC\u30AF\u306B\u306F\u305D\u308C\u305E\u308C\u6570\u5B57\u3092\u6301\u3063\u3066\u304A\u308A\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u65E2\u306B\u57CB\u307E\u3063\u3066\u3044\u308B\u30DE\u30B9\u3067\u3082\u6570\u5B57\u304C\u5927\u304D\u3051\u308C\u3070\u4E0A\u66F8\u304D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059"
              }, void 0, !1, {
                fileName: "app/modules/welcome/components/rule-book/index.tsx",
                lineNumber: 31,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core17.List.Item, {
                children: "\u4EA4\u4E92\u306B\u30DE\u30B9\u3092\u57CB\u3081\u3066\u3044\u304D\u3001\u5148\u306B\u7E26\u3001\u6A2A\u3001\u659C\u3081 \u3044\u305A\u308C\u304B\u306B\u540C\u3058\u30DE\u30FC\u30AF\u304C\u63C3\u3063\u305F\u65B9\u304C\u52DD\u3061\u3067\u3059"
              }, void 0, !1, {
                fileName: "app/modules/welcome/components/rule-book/index.tsx",
                lineNumber: 34,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/modules/welcome/components/rule-book/index.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core17.Group, {
            position: "center",
            mt: "lg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(icon_button_default, {
              onClick: handle.close,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core17.Text, {
                size: "xs",
                children: "Close"
              }, void 0, !1, {
                fileName: "app/modules/welcome/components/rule-book/index.tsx",
                lineNumber: 41,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/modules/welcome/components/rule-book/index.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/modules/welcome/components/rule-book/index.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/modules/welcome/components/rule-book/index.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/welcome/components/rule-book/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, rule_book_default = index12;

// app/modules/welcome/index.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), index13 = () => {
  let navigate = (0, import_react14.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.Stack, {
    mih: "100vh",
    pos: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.Center, {
        sx: { flex: 1 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.Box, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.Title, {
              align: "center",
              children: [
                "TIC TAC TOE",
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/modules/welcome/index.tsx",
                  lineNumber: 29,
                  columnNumber: 13
                }, this),
                "GAME"
              ]
            }, void 0, !0, {
              fileName: "app/modules/welcome/index.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_lottie_react2.default, {
              animationData: welcome_default,
              loop: !1
            }, void 0, !1, {
              fileName: "app/modules/welcome/index.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.Group, {
              position: "center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.Box, {
                w: 280,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.UnstyledButton, {
                  onClick: () => {
                    navigate("/play", { replace: !0 });
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_lottie_react2.default, {
                    animationData: start_button_default
                  }, void 0, !1, {
                    fileName: "app/modules/welcome/index.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/modules/welcome/index.tsx",
                  lineNumber: 35,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/modules/welcome/index.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/modules/welcome/index.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/modules/welcome/index.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/modules/welcome/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.Group, {
        py: "xl",
        px: "md",
        position: "apart",
        w: "100%",
        pos: "absolute",
        left: 0,
        bottom: 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(change_log_default, {}, void 0, !1, {
            fileName: "app/modules/welcome/index.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core18.Text, {
            size: "xs",
            children: ENV.VERSION
          }, void 0, !1, {
            fileName: "app/modules/welcome/index.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(rule_book_default, {}, void 0, !1, {
            fileName: "app/modules/welcome/index.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/modules/welcome/index.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/welcome/index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}, welcome_default2 = index13;

// app/routes/__base/play/index.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), index14 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(provider_default, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(tic_tac_toe_default, {}, void 0, !1, {
    fileName: "app/routes/__base/play/index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/routes/__base/play/index.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), play_default = index14;

// app/routes/__base/index.tsx
var base_exports2 = {};
__export(base_exports2, {
  default: () => Index
});
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(welcome_default2, {}, void 0, !1, {
    fileName: "app/routes/__base/index.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default
});
var import_react15 = require("@remix-run/react"), import_react16 = require("react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), $id = () => {
  let navigate = (0, import_react15.useNavigate)();
  return (0, import_react16.useEffect)(() => {
    navigate("/play", { replace: !0 });
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, {}, void 0, !1, {
    fileName: "app/routes/$id.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}, id_default = $id;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "968a1ec8", entry: { module: "/build/entry.client-22ME5PP2.js", imports: ["/build/_shared/chunk-4QOFAB5B.js", "/build/_shared/chunk-5WWYGPCX.js", "/build/_shared/chunk-GAFITTCZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MNKXMFOQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$id": { id: "routes/$id", parentId: "root", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/$id-XAN7LWPR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__base": { id: "routes/__base", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__base-BJFEHTIC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__base/index": { id: "routes/__base/index", parentId: "routes/__base", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__base/index-FJMWUAXE.js", imports: ["/build/_shared/chunk-OSNK7OOR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__base/play/index": { id: "routes/__base/play/index", parentId: "routes/__base", path: "play", index: !0, caseSensitive: void 0, module: "/build/routes/__base/play/index-KVNPY3OJ.js", imports: ["/build/_shared/chunk-OSNK7OOR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-968A1EC8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/__base": {
    id: "routes/__base",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: base_exports
  },
  "routes/__base/play/index": {
    id: "routes/__base/play/index",
    parentId: "routes/__base",
    path: "play",
    index: !0,
    caseSensitive: void 0,
    module: play_exports
  },
  "routes/__base/index": {
    id: "routes/__base/index",
    parentId: "routes/__base",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: base_exports2
  },
  "routes/$id": {
    id: "routes/$id",
    parentId: "root",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
