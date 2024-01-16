var createModule = (function () {
  var e =
    "undefined" != typeof document && document.currentScript
      ? document.currentScript.src
      : void 0;
  return (
    "undefined" != typeof __filename && (e = e || __filename),
    function (r) {
      function n() {
        return j.buffer != ue && he(j.buffer), se;
      }
      function t() {
        return j.buffer != ue && he(j.buffer), ce;
      }
      function o() {
        return j.buffer != ue && he(j.buffer), le;
      }
      function i() {
        return j.buffer != ue && he(j.buffer), fe;
      }
      function a() {
        return j.buffer != ue && he(j.buffer), de;
      }
      function u() {
        return j.buffer != ue && he(j.buffer), me;
      }
      function s() {
        return j.buffer != ue && he(j.buffer), pe;
      }
      function c() {
        return j.buffer != ue && he(j.buffer), ve;
      }
      var l = void 0 !== (r = r || {}) ? r : {},
        f = function () {};
      (l.setLogger = function (e) {
        f = e;
      }),
        (l.print = function (e) {
          f({ message: e, type: "ffmpeg-stdout" });
        }),
        (l.printErr = function (e) {
          f({ message: e, type: "ffmpeg-stderr" });
        });
      var d,
        m = {};
      for (d in l) l.hasOwnProperty(d) && (m[d] = l[d]);
      var p,
        v = [],
        h = "./this.program",
        g = function (e, r) {
          throw r;
        },
        y = !1,
        E = !1,
        _ = !1;
      (y = "object" == typeof window),
        (E = "function" == typeof importScripts),
        (_ =
          "object" == typeof process &&
          "object" == typeof process.versions &&
          "string" == typeof process.versions.node),
        (p = !y && !_ && !E);
      var w = l.ENVIRONMENT_IS_PTHREAD || !1;
      w && ((ue = l.buffer), (ge = l.DYNAMIC_BASE), (ye = l.DYNAMICTOP_PTR));
      var b,
        k,
        C,
        S,
        x,
        T,
        A = "";
      function D(e) {
        return l.locateFile ? l.locateFile(e, A) : A + e;
      }
      if (_) {
        var L;
        (A = E ? require("path").dirname(A) + "/" : __dirname + "/"),
          (b = function (e, r) {
            return (
              x || (x = require("fs")),
              T || (T = require("path")),
              (e = T.normalize(e)),
              x.readFileSync(e, r ? null : "utf8")
            );
          }),
          (C = function (e) {
            var r = b(e, !0);
            return r.buffer || (r = new Uint8Array(r)), Q(r.buffer), r;
          }),
          process.argv.length > 1 && (h = process.argv[1].replace(/\\/g, "/")),
          (v = process.argv.slice(2)),
          process.on("uncaughtException", function (e) {
            if (!(e instanceof $o)) throw e;
          }),
          process.on("unhandledRejection", Ne),
          (g = function (e) {
            process.exit(e);
          }),
          (l.inspect = function () {
            return "[Emscripten Module object]";
          });
        try {
          L = require("worker_threads");
        } catch (e) {
          throw (
            (console.error(
              'The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'
            ),
            e)
          );
        }
        Worker = L.Worker;
      } else
        p
          ? ("undefined" != typeof read &&
              (b = function (e) {
                return read(e);
              }),
            (C = function (e) {
              var r;
              return "function" == typeof readbuffer
                ? new Uint8Array(readbuffer(e))
                : (Q("object" == typeof (r = read(e, "binary"))), r);
            }),
            "undefined" != typeof scriptArgs
              ? (v = scriptArgs)
              : void 0 !== arguments && (v = arguments),
            "function" == typeof quit &&
              (g = function (e) {
                quit(e);
              }),
            "undefined" != typeof print &&
              ("undefined" == typeof console && (console = {}),
              (console.log = print),
              (console.warn = console.error =
                "undefined" != typeof printErr ? printErr : print)))
          : (y || E) &&
            (E
              ? (A = self.location.href)
              : document.currentScript && (A = document.currentScript.src),
            e && (A = e),
            (A =
              0 !== A.indexOf("blob:")
                ? A.substr(0, A.lastIndexOf("/") + 1)
                : ""),
            _
              ? ((b = function (e, r) {
                  return (
                    x || (x = require("fs")),
                    T || (T = require("path")),
                    (e = T.normalize(e)),
                    x.readFileSync(e, r ? null : "utf8")
                  );
                }),
                (C = function (e) {
                  var r = b(e, !0);
                  return r.buffer || (r = new Uint8Array(r)), Q(r.buffer), r;
                }))
              : ((b = function (e) {
                  var r = new XMLHttpRequest();
                  return r.open("GET", e, !1), r.send(null), r.responseText;
                }),
                E &&
                  (C = function (e) {
                    var r = new XMLHttpRequest();
                    return (
                      r.open("GET", e, !1),
                      (r.responseType = "arraybuffer"),
                      r.send(null),
                      new Uint8Array(r.response)
                    );
                  }),
                (k = function (e, r, n) {
                  var t = new XMLHttpRequest();
                  t.open("GET", e, !0),
                    (t.responseType = "arraybuffer"),
                    (t.onload = function () {
                      200 == t.status || (0 == t.status && t.response)
                        ? r(t.response)
                        : n();
                    }),
                    (t.onerror = n),
                    t.send(null);
                })),
            (S = function (e) {
              document.title = e;
            }));
      var P = l.print || console.log.bind(console),
        F = l.printErr || console.warn.bind(console);
      for (d in m) m.hasOwnProperty(d) && (l[d] = m[d]);
      function M(e) {
        var r = a()[ye >> 2],
          n = (r + e + 15) & -16;
        return n > Bn() && Ne(), (a()[ye >> 2] = n), r;
      }
      function R(e) {
        switch (e) {
          case "i1":
          case "i8":
            return 1;
          case "i16":
            return 2;
          case "i32":
            return 4;
          case "i64":
            return 8;
          case "float":
            return 4;
          case "double":
            return 8;
          default:
            if ("*" === e[e.length - 1]) return 4;
            if ("i" === e[0]) {
              var r = Number(e.substr(1));
              return (
                Q(
                  r % 8 == 0,
                  "getNativeTypeSize invalid bits " + r + ", type " + e
                ),
                r / 8
              );
            }
            return 0;
        }
      }
      function O(e) {
        O.shown || (O.shown = {}), O.shown[e] || ((O.shown[e] = 1), F(e));
      }
      function N(e, r, n) {
        return n && n.length
          ? l["dynCall_" + e].apply(null, [r].concat(n))
          : l["dynCall_" + e].call(null, r);
      }
      (m = null),
        l.arguments && (v = l.arguments),
        l.thisProgram && (h = l.thisProgram),
        l.quit && (g = l.quit),
        (l.setWindowTitle = S);
      var I,
        B,
        j,
        U = 0,
        z = function (e) {
          U = e;
        },
        H = function () {
          return U;
        };
      Atomics.load, Atomics.store, Atomics.compareExchange;
      function q(e, r, t, i) {
        switch (
          ("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"), t)
        ) {
          case "i1":
          case "i8":
            n()[e >> 0] = r;
            break;
          case "i16":
            o()[e >> 1] = r;
            break;
          case "i32":
            a()[e >> 2] = r;
            break;
          case "i64":
            (Ue = [
              r >>> 0,
              ((je = r),
              +xe(je) >= 1
                ? je > 0
                  ? (0 | De(+Ae(je / 4294967296), 4294967295)) >>> 0
                  : ~~+Te((je - +(~~je >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
              (a()[e >> 2] = Ue[0]),
              (a()[(e + 4) >> 2] = Ue[1]);
            break;
          case "float":
            s()[e >> 2] = r;
            break;
          case "double":
            c()[e >> 3] = r;
            break;
          default:
            Ne("invalid type for setValue: " + t);
        }
      }
      l.wasmBinary && (I = l.wasmBinary),
        l.noExitRuntime && (B = l.noExitRuntime),
        "object" != typeof WebAssembly && F("no native wasm support detected");
      var W,
        G = new WebAssembly.Table({
          initial: 11181,
          maximum: 11181,
          element: "anyfunc",
        }),
        X = 0,
        Y = 0,
        V = !1;
      function Q(e, r) {
        e || Ne("Assertion failed: " + r);
      }
      function K(e) {
        var r = l["_" + e];
        return (
          Q(
            r,
            "Cannot call unknown function " + e + ", make sure it is exported"
          ),
          r
        );
      }
      var Z = 3;
      function J(e, r, n) {
        for (var t = r + n, o = ""; !(r >= t); ) {
          var i = e[r++];
          if (!i) return o;
          if (128 & i) {
            var a = 63 & e[r++];
            if (192 != (224 & i)) {
              var u = 63 & e[r++];
              if (
                (i =
                  224 == (240 & i)
                    ? ((15 & i) << 12) | (a << 6) | u
                    : ((7 & i) << 18) | (a << 12) | (u << 6) | (63 & e[r++])) <
                65536
              )
                o += String.fromCharCode(i);
              else {
                var s = i - 65536;
                o += String.fromCharCode(55296 | (s >> 10), 56320 | (1023 & s));
              }
            } else o += String.fromCharCode(((31 & i) << 6) | a);
          } else o += String.fromCharCode(i);
        }
        return o;
      }
      function $(e, r) {
        return e ? J(t(), e, r) : "";
      }
      function ee(e, r, n, t) {
        if (!(t > 0)) return 0;
        for (var o = n, i = n + t - 1, a = 0; a < e.length; ++a) {
          var u = e.charCodeAt(a);
          if (u >= 55296 && u <= 57343)
            u = (65536 + ((1023 & u) << 10)) | (1023 & e.charCodeAt(++a));
          if (u <= 127) {
            if (n >= i) break;
            r[n++] = u;
          } else if (u <= 2047) {
            if (n + 1 >= i) break;
            (r[n++] = 192 | (u >> 6)), (r[n++] = 128 | (63 & u));
          } else if (u <= 65535) {
            if (n + 2 >= i) break;
            (r[n++] = 224 | (u >> 12)),
              (r[n++] = 128 | ((u >> 6) & 63)),
              (r[n++] = 128 | (63 & u));
          } else {
            if (n + 3 >= i) break;
            (r[n++] = 240 | (u >> 18)),
              (r[n++] = 128 | ((u >> 12) & 63)),
              (r[n++] = 128 | ((u >> 6) & 63)),
              (r[n++] = 128 | (63 & u));
          }
        }
        return (r[n] = 0), n - o;
      }
      function re(e, r, n) {
        return ee(e, t(), r, n);
      }
      function ne(e) {
        for (var r = 0, n = 0; n < e.length; ++n) {
          var t = e.charCodeAt(n);
          t >= 55296 &&
            t <= 57343 &&
            (t = (65536 + ((1023 & t) << 10)) | (1023 & e.charCodeAt(++n))),
            t <= 127 ? ++r : (r += t <= 2047 ? 2 : t <= 65535 ? 3 : 4);
        }
        return r;
      }
      function te(e) {
        var r = ne(e) + 1,
          t = yo(r);
        return t && ee(e, n(), t, r), t;
      }
      function oe(e) {
        var r = ne(e) + 1,
          t = Zo(r);
        return ee(e, n(), t, r), t;
      }
      function ie(e, r) {
        n().set(e, r);
      }
      function ae(e, r, t) {
        for (var o = 0; o < e.length; ++o) n()[r++ >> 0] = e.charCodeAt(o);
        t || (n()[r >> 0] = 0);
      }
      var ue, se, ce, le, fe, de, me, pe, ve;
      function he(e) {
        (ue = e),
          (l.HEAP8 = se = new Int8Array(e)),
          (l.HEAP16 = le = new Int16Array(e)),
          (l.HEAP32 = de = new Int32Array(e)),
          (l.HEAPU8 = ce = new Uint8Array(e)),
          (l.HEAPU16 = fe = new Uint16Array(e)),
          (l.HEAPU32 = me = new Uint32Array(e)),
          (l.HEAPF32 = pe = new Float32Array(e)),
          (l.HEAPF64 = ve = new Float64Array(e));
      }
      var ge = 18878272,
        ye = 13634464,
        Ee = l.INITIAL_MEMORY || 1065353216;
      if (w) (j = l.wasmMemory), (ue = l.buffer);
      else if (l.wasmMemory) j = l.wasmMemory;
      else if (
        !(
          (j = new WebAssembly.Memory({
            initial: Ee / 65536,
            maximum: 32768,
            shared: !0,
          })).buffer instanceof SharedArrayBuffer
        )
      )
        throw (
          (F(
            "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"
          ),
          _ &&
            console.log(
              "(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"
            ),
          Error("bad memory"))
        );
      function _e(e) {
        for (; e.length > 0; ) {
          var r = e.shift();
          if ("function" != typeof r) {
            var n = r.func;
            "number" == typeof n
              ? void 0 === r.arg
                ? l.dynCall_v(n)
                : l.dynCall_vi(n, r.arg)
              : n(void 0 === r.arg ? null : r.arg);
          } else r();
        }
      }
      j && (ue = j.buffer),
        (Ee = ue.byteLength),
        he(ue),
        w || (a()[ye >> 2] = ge);
      var we = [],
        be = [],
        ke = [],
        Ce = [],
        Se = [];
      var xe = Math.abs,
        Te = Math.ceil,
        Ae = Math.floor,
        De = Math.min,
        Le = 0,
        Pe = null,
        Fe = null;
      function Me(e) {
        return e;
      }
      function Re(e) {
        Q(!w, "addRunDependency cannot be used in a pthread worker"),
          Le++,
          l.monitorRunDependencies && l.monitorRunDependencies(Le);
      }
      function Oe(e) {
        if (
          (Le--,
          l.monitorRunDependencies && l.monitorRunDependencies(Le),
          0 == Le && (null !== Pe && (clearInterval(Pe), (Pe = null)), Fe))
        ) {
          var r = Fe;
          (Fe = null), r();
        }
      }
      function Ne(e) {
        throw (
          (l.onAbort && l.onAbort(e),
          w && console.error("Pthread aborting at " + new Error().stack),
          P((e += "")),
          F(e),
          (V = !0),
          1,
          (e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."),
          new WebAssembly.RuntimeError(e))
        );
      }
      (l.preloadedImages = {}), (l.preloadedAudios = {});
      var Ie = "data:application/octet-stream;base64,";
      function Be(e) {
        return String.prototype.startsWith
          ? e.startsWith(Ie)
          : 0 === e.indexOf(Ie);
      }
      var je,
        Ue,
        ze = "ffmpeg-core.wasm";
      function He() {
        try {
          if (I) return new Uint8Array(I);
          if (C) return C(ze);
          throw "both async and sync fetching of the wasm failed";
        } catch (e) {
          Ne(e);
        }
      }
      Be(ze) || (ze = D(ze));
      var qe = {
        3847050: function (e) {
          var r = $(e) + "\n\nAbort/Retry/Ignore/AlwaysIgnore? [ariA] :",
            o = window.prompt(r, "i");
          return (
            null === o && (o = "i"),
            (function (e, r, o, i) {
              var u, s;
              "number" == typeof e
                ? ((u = !0), (s = e))
                : ((u = !1), (s = e.length));
              var c,
                l = "string" == typeof r ? r : null;
              if (
                ((c =
                  o == Z ? i : [yo, Zo, M][o](Math.max(s, l ? 1 : r.length))),
                u)
              ) {
                var f;
                for (i = c, Q(0 == (3 & c)), f = c + (-4 & s); i < f; i += 4)
                  a()[i >> 2] = 0;
                for (f = c + s; i < f; ) n()[i++ >> 0] = 0;
                return c;
              }
              if ("i8" === l)
                return (
                  e.subarray || e.slice
                    ? t().set(e, c)
                    : t().set(new Uint8Array(e), c),
                  c
                );
              for (var d, m, p, v = 0; v < s; ) {
                var h = e[v];
                0 !== (d = l || r[v])
                  ? ("i64" == d && (d = "i32"),
                    q(c + v, h, d),
                    p !== d && ((m = R(d)), (p = d)),
                    (v += m))
                  : v++;
              }
              return c;
            })(uo(o), "i8", 0)
          );
        },
        3879924: function (e, r, n) {
          var t = e,
            o = r,
            i = n;
          l.SDL2 || (l.SDL2 = {});
          var u = l.SDL2;
          u.ctxCanvas !== l.canvas &&
            ((u.ctx = l.createContext(l.canvas, !1, !0)),
            (u.ctxCanvas = l.canvas)),
            (u.w === t && u.h === o && u.imageCtx === u.ctx) ||
              ((u.image = u.ctx.createImageData(t, o)),
              (u.w = t),
              (u.h = o),
              (u.imageCtx = u.ctx));
          var s,
            c = u.image.data,
            f = i >> 2,
            d = 0;
          if (
            "undefined" != typeof CanvasPixelArray &&
            c instanceof CanvasPixelArray
          )
            for (s = c.length; d < s; ) {
              var m = a()[f];
              (c[d] = 255 & m),
                (c[d + 1] = (m >> 8) & 255),
                (c[d + 2] = (m >> 16) & 255),
                (c[d + 3] = 255),
                f++,
                (d += 4);
            }
          else {
            u.data32Data !== c &&
              ((u.data32 = new Int32Array(c.buffer)),
              (u.data8 = new Uint8Array(c.buffer)));
            var p = u.data32;
            (s = p.length), p.set(a().subarray(f, f + s));
            var v = u.data8,
              h = 3,
              g = h + 4 * s;
            if (s % 8 == 0)
              for (; h < g; )
                (v[h] = 255),
                  (v[(h = (h + 4) | 0)] = 255),
                  (v[(h = (h + 4) | 0)] = 255),
                  (v[(h = (h + 4) | 0)] = 255),
                  (v[(h = (h + 4) | 0)] = 255),
                  (v[(h = (h + 4) | 0)] = 255),
                  (v[(h = (h + 4) | 0)] = 255),
                  (v[(h = (h + 4) | 0)] = 255),
                  (h = (h + 4) | 0);
            else for (; h < g; ) (v[h] = 255), (h = (h + 4) | 0);
          }
          return u.ctx.putImageData(u.image, 0, 0), 0;
        },
        3881379: function (e, r, n, t, o) {
          var i = e,
            u = r,
            s = n,
            c = t,
            l = o,
            f = document.createElement("canvas");
          (f.width = i), (f.height = u);
          var d,
            m = f.getContext("2d"),
            p = m.createImageData(i, u),
            v = p.data,
            h = l >> 2,
            g = 0;
          if (
            "undefined" != typeof CanvasPixelArray &&
            v instanceof CanvasPixelArray
          )
            for (d = v.length; g < d; ) {
              var y = a()[h];
              (v[g] = 255 & y),
                (v[g + 1] = (y >> 8) & 255),
                (v[g + 2] = (y >> 16) & 255),
                (v[g + 3] = (y >> 24) & 255),
                h++,
                (g += 4);
            }
          else {
            var E = new Int32Array(v.buffer);
            (d = E.length), E.set(a().subarray(h, h + d));
          }
          m.putImageData(p, 0, 0);
          var _ =
              0 === s && 0 === c
                ? "url(" + f.toDataURL() + "), auto"
                : "url(" + f.toDataURL() + ") " + s + " " + c + ", auto",
            w = yo(_.length + 1);
          return re(_, w, _.length + 1), w;
        },
        3882368: function (e) {
          return l.canvas && (l.canvas.style.cursor = $(e)), 0;
        },
        3882461: function () {
          l.canvas && (l.canvas.style.cursor = "none");
        },
        3883686: function () {
          return screen.width;
        },
        3883713: function () {
          return screen.height;
        },
        3883786: function (e) {
          return void 0 !== l.setWindowTitle && l.setWindowTitle($(e)), 0;
        },
        3883940: function () {
          return "undefined" != typeof AudioContext
            ? 1
            : "undefined" != typeof webkitAudioContext
            ? 1
            : 0;
        },
        3884106: function () {
          return void 0 !== navigator.mediaDevices &&
            void 0 !== navigator.mediaDevices.getUserMedia
            ? 1
            : void 0 !== navigator.webkitGetUserMedia
            ? 1
            : 0;
        },
        3884332: function (e) {
          void 0 === l.SDL2 && (l.SDL2 = {});
          var r = l.SDL2;
          return (
            e ? (r.capture = {}) : (r.audio = {}),
            r.audioContext ||
              ("undefined" != typeof AudioContext
                ? (r.audioContext = new AudioContext())
                : "undefined" != typeof webkitAudioContext &&
                  (r.audioContext = new webkitAudioContext())),
            void 0 === r.audioContext ? -1 : 0
          );
        },
        3884815: function () {
          return l.SDL2.audioContext.sampleRate;
        },
        3884885: function (e, r, n, t) {
          var o = l.SDL2,
            i = function (i) {
              void 0 !== o.capture.silenceTimer &&
                (clearTimeout(o.capture.silenceTimer),
                (o.capture.silenceTimer = void 0)),
                (o.capture.mediaStreamNode =
                  o.audioContext.createMediaStreamSource(i)),
                (o.capture.scriptProcessorNode =
                  o.audioContext.createScriptProcessor(r, e, 1)),
                (o.capture.scriptProcessorNode.onaudioprocess = function (e) {
                  void 0 !== o &&
                    void 0 !== o.capture &&
                    (e.outputBuffer.getChannelData(0).fill(0),
                    (o.capture.currentCaptureBuffer = e.inputBuffer),
                    N("vi", n, [t]));
                }),
                o.capture.mediaStreamNode.connect(
                  o.capture.scriptProcessorNode
                ),
                o.capture.scriptProcessorNode.connect(
                  o.audioContext.destination
                ),
                (o.capture.stream = i);
            },
            a = function (e) {};
          (o.capture.silenceBuffer = o.audioContext.createBuffer(
            e,
            r,
            o.audioContext.sampleRate
          )),
            o.capture.silenceBuffer.getChannelData(0).fill(0);
          (o.capture.silenceTimer = setTimeout(function () {
            (o.capture.currentCaptureBuffer = o.capture.silenceBuffer),
              N("vi", n, [t]);
          }, (r / o.audioContext.sampleRate) * 1e3)),
            void 0 !== navigator.mediaDevices &&
            void 0 !== navigator.mediaDevices.getUserMedia
              ? navigator.mediaDevices
                  .getUserMedia({ audio: !0, video: !1 })
                  .then(i)
                  .catch(a)
              : void 0 !== navigator.webkitGetUserMedia &&
                navigator.webkitGetUserMedia({ audio: !0, video: !1 }, i, a);
        },
        3886537: function (e, r, n, t) {
          var o = l.SDL2;
          (o.audio.scriptProcessorNode = o.audioContext.createScriptProcessor(
            r,
            0,
            e
          )),
            (o.audio.scriptProcessorNode.onaudioprocess = function (e) {
              void 0 !== o &&
                void 0 !== o.audio &&
                ((o.audio.currentOutputBuffer = e.outputBuffer),
                N("vi", n, [t]));
            }),
            o.audio.scriptProcessorNode.connect(o.audioContext.destination);
        },
        3886947: function (e, r) {
          for (
            var n = l.SDL2,
              t = n.capture.currentCaptureBuffer.numberOfChannels,
              o = 0;
            o < t;
            ++o
          ) {
            var i = n.capture.currentCaptureBuffer.getChannelData(o);
            if (i.length != r)
              throw (
                "Web Audio capture buffer length mismatch! Destination size: " +
                i.length +
                " samples vs expected " +
                r +
                " samples!"
              );
            if (1 == t) for (var a = 0; a < r; ++a) q(e + 4 * a, i[a], "float");
            else for (a = 0; a < r; ++a) q(e + 4 * (a * t + o), i[a], "float");
          }
        },
        3887552: function (e, r) {
          for (
            var n = l.SDL2,
              t = n.audio.currentOutputBuffer.numberOfChannels,
              o = 0;
            o < t;
            ++o
          ) {
            var i = n.audio.currentOutputBuffer.getChannelData(o);
            if (i.length != r)
              throw (
                "Web Audio output buffer length mismatch! Destination size: " +
                i.length +
                " samples vs expected " +
                r +
                " samples!"
              );
            for (var a = 0; a < r; ++a)
              i[a] = s()[(e + ((a * t + o) << 2)) >> 2];
          }
        },
        3888032: function (e) {
          var r = l.SDL2;
          if (e) {
            if (
              (void 0 !== r.capture.silenceTimer &&
                clearTimeout(r.capture.silenceTimer),
              void 0 !== r.capture.stream)
            ) {
              for (
                var n = r.capture.stream.getAudioTracks(), t = 0;
                t < n.length;
                t++
              )
                r.capture.stream.removeTrack(n[t]);
              r.capture.stream = void 0;
            }
            void 0 !== r.capture.scriptProcessorNode &&
              ((r.capture.scriptProcessorNode.onaudioprocess = function (e) {}),
              r.capture.scriptProcessorNode.disconnect(),
              (r.capture.scriptProcessorNode = void 0)),
              void 0 !== r.capture.mediaStreamNode &&
                (r.capture.mediaStreamNode.disconnect(),
                (r.capture.mediaStreamNode = void 0)),
              void 0 !== r.capture.silenceBuffer &&
                (r.capture.silenceBuffer = void 0),
              (r.capture = void 0);
          } else
            null != r.audio.scriptProcessorNode &&
              (r.audio.scriptProcessorNode.disconnect(),
              (r.audio.scriptProcessorNode = void 0)),
              (r.audio = void 0);
          void 0 !== r.audioContext &&
            void 0 === r.audio &&
            void 0 === r.capture &&
            (r.audioContext.close(), (r.audioContext = void 0));
        },
        4029096: function () {
          throw "Canceled!";
        },
      };
      w ||
        be.push({
          func: function () {
            fo();
          },
        });
      var We = 0,
        Ge = 0,
        Xe = 0;
      function Ye(e, r, n) {
        (We = e |= 0), (Xe = r |= 0), (Ge = n |= 0);
      }
      l.__register_pthread_ptr = Ye;
      var Ve = {
          EPERM: 63,
          ENOENT: 44,
          ESRCH: 71,
          EINTR: 27,
          EIO: 29,
          ENXIO: 60,
          E2BIG: 1,
          ENOEXEC: 45,
          EBADF: 8,
          ECHILD: 12,
          EAGAIN: 6,
          EWOULDBLOCK: 6,
          ENOMEM: 48,
          EACCES: 2,
          EFAULT: 21,
          ENOTBLK: 105,
          EBUSY: 10,
          EEXIST: 20,
          EXDEV: 75,
          ENODEV: 43,
          ENOTDIR: 54,
          EISDIR: 31,
          EINVAL: 28,
          ENFILE: 41,
          EMFILE: 33,
          ENOTTY: 59,
          ETXTBSY: 74,
          EFBIG: 22,
          ENOSPC: 51,
          ESPIPE: 70,
          EROFS: 69,
          EMLINK: 34,
          EPIPE: 64,
          EDOM: 18,
          ERANGE: 68,
          ENOMSG: 49,
          EIDRM: 24,
          ECHRNG: 106,
          EL2NSYNC: 156,
          EL3HLT: 107,
          EL3RST: 108,
          ELNRNG: 109,
          EUNATCH: 110,
          ENOCSI: 111,
          EL2HLT: 112,
          EDEADLK: 16,
          ENOLCK: 46,
          EBADE: 113,
          EBADR: 114,
          EXFULL: 115,
          ENOANO: 104,
          EBADRQC: 103,
          EBADSLT: 102,
          EDEADLOCK: 16,
          EBFONT: 101,
          ENOSTR: 100,
          ENODATA: 116,
          ETIME: 117,
          ENOSR: 118,
          ENONET: 119,
          ENOPKG: 120,
          EREMOTE: 121,
          ENOLINK: 47,
          EADV: 122,
          ESRMNT: 123,
          ECOMM: 124,
          EPROTO: 65,
          EMULTIHOP: 36,
          EDOTDOT: 125,
          EBADMSG: 9,
          ENOTUNIQ: 126,
          EBADFD: 127,
          EREMCHG: 128,
          ELIBACC: 129,
          ELIBBAD: 130,
          ELIBSCN: 131,
          ELIBMAX: 132,
          ELIBEXEC: 133,
          ENOSYS: 52,
          ENOTEMPTY: 55,
          ENAMETOOLONG: 37,
          ELOOP: 32,
          EOPNOTSUPP: 138,
          EPFNOSUPPORT: 139,
          ECONNRESET: 15,
          ENOBUFS: 42,
          EAFNOSUPPORT: 5,
          EPROTOTYPE: 67,
          ENOTSOCK: 57,
          ENOPROTOOPT: 50,
          ESHUTDOWN: 140,
          ECONNREFUSED: 14,
          EADDRINUSE: 3,
          ECONNABORTED: 13,
          ENETUNREACH: 40,
          ENETDOWN: 38,
          ETIMEDOUT: 73,
          EHOSTDOWN: 142,
          EHOSTUNREACH: 23,
          EINPROGRESS: 26,
          EALREADY: 7,
          EDESTADDRREQ: 17,
          EMSGSIZE: 35,
          EPROTONOSUPPORT: 66,
          ESOCKTNOSUPPORT: 137,
          EADDRNOTAVAIL: 4,
          ENETRESET: 39,
          EISCONN: 30,
          ENOTCONN: 53,
          ETOOMANYREFS: 141,
          EUSERS: 136,
          EDQUOT: 19,
          ESTALE: 72,
          ENOTSUP: 138,
          ENOMEDIUM: 148,
          EILSEQ: 25,
          EOVERFLOW: 61,
          ECANCELED: 11,
          ENOTRECOVERABLE: 56,
          EOWNERDEAD: 62,
          ESTRPIPE: 135,
        },
        Qe = 13635376;
      function Ke(e, r) {
        if (e <= 0 || e > n().length || !0 & e || r < 0) return -28;
        if (0 == r) return 0;
        r >= 2147483647 && (r = 1 / 0);
        var t = Atomics.load(a(), Qe >> 2),
          o = 0;
        if (
          t == e &&
          Atomics.compareExchange(a(), Qe >> 2, t, 0) == t &&
          ((o = 1), --r <= 0)
        )
          return 1;
        var i = Atomics.notify(a(), e >> 2, r);
        if (i >= 0) return i + o;
        throw "Atomics.notify returned an unexpected value " + i;
      }
      function Ze(e) {
        if (w)
          throw "Internal Error! _cancel_thread() can only ever be called from main application thread!";
        if (!e) throw "Internal Error! Null pthread_ptr in _cancel_thread!";
        er.pthreads[e].worker.postMessage({ cmd: "cancel" });
      }
      function Je(e) {
        if (w)
          throw "Internal Error! _cleanup_thread() can only ever be called from main application thread!";
        if (!e) throw "Internal Error! Null pthread_ptr in _cleanup_thread!";
        a()[(e + 12) >> 2] = 0;
        var r = er.pthreads[e];
        if (r) {
          var n = r.worker;
          er.returnWorkerToPool(n);
        }
      }
      l._emscripten_futex_wake = Ke;
      var $e,
        er = {
          MAIN_THREAD_ID: 1,
          mainThreadInfo: { schedPolicy: 0, schedPrio: 0 },
          unusedWorkers: [],
          runningWorkers: [],
          initRuntime: function () {
            Ye(er.mainThreadBlock, !E, 1), Do(er.mainThreadBlock);
          },
          initMainThreadBlock: function () {
            for (var e = 0; e < 4; ++e) er.allocateUnusedWorker();
            er.mainThreadBlock = 13634624;
            for (e = 0; e < 58; ++e) u()[er.mainThreadBlock / 4 + e] = 0;
            a()[(er.mainThreadBlock + 12) >> 2] = er.mainThreadBlock;
            var r = er.mainThreadBlock + 156;
            a()[r >> 2] = r;
            for (e = 0; e < 128; ++e) u()[3408716 + e] = 0;
            Atomics.store(u(), (er.mainThreadBlock + 104) >> 2, 13634864),
              Atomics.store(
                u(),
                (er.mainThreadBlock + 40) >> 2,
                er.mainThreadBlock
              ),
              Atomics.store(u(), (er.mainThreadBlock + 44) >> 2, 42);
          },
          initWorker: function () {},
          pthreads: {},
          exitHandlers: null,
          setThreadStatus: function () {},
          runExitHandlers: function () {
            if (null !== er.exitHandlers) {
              for (; er.exitHandlers.length > 0; ) er.exitHandlers.pop()();
              er.exitHandlers = null;
            }
            w && X && To();
          },
          threadExit: function (e) {
            var r = Qt();
            r &&
              (Atomics.store(u(), (r + 4) >> 2, e),
              Atomics.store(u(), (r + 0) >> 2, 1),
              Atomics.store(u(), (r + 60) >> 2, 1),
              Atomics.store(u(), (r + 64) >> 2, 0),
              er.runExitHandlers(),
              Ke(r + 0, 2147483647),
              Ye(0, 0, 0),
              (X = 0),
              w && postMessage({ cmd: "exit" }));
          },
          threadCancel: function () {
            er.runExitHandlers(),
              Atomics.store(u(), (X + 4) >> 2, -1),
              Atomics.store(u(), (X + 0) >> 2, 1),
              Ke(X + 0, 2147483647),
              (X = Y = 0),
              Ye(0, 0, 0),
              postMessage({ cmd: "cancelDone" });
          },
          terminateAllThreads: function () {
            for (var e in er.pthreads) {
              (t = er.pthreads[e]) &&
                t.worker &&
                er.returnWorkerToPool(t.worker);
            }
            er.pthreads = {};
            for (var r = 0; r < er.unusedWorkers.length; ++r) {
              (n = er.unusedWorkers[r]).terminate();
            }
            er.unusedWorkers = [];
            for (r = 0; r < er.runningWorkers.length; ++r) {
              var n,
                t = (n = er.runningWorkers[r]).pthread;
              er.freeThreadData(t), n.terminate();
            }
            er.runningWorkers = [];
          },
          freeThreadData: function (e) {
            if (e) {
              if (e.threadInfoStruct) {
                var r = a()[(e.threadInfoStruct + 104) >> 2];
                (a()[(e.threadInfoStruct + 104) >> 2] = 0),
                  go(r),
                  go(e.threadInfoStruct);
              }
              (e.threadInfoStruct = 0),
                e.allocatedOwnStack && e.stackBase && go(e.stackBase),
                (e.stackBase = 0),
                e.worker && (e.worker.pthread = null);
            }
          },
          returnWorkerToPool: function (e) {
            delete er.pthreads[e.pthread.thread],
              er.unusedWorkers.push(e),
              er.runningWorkers.splice(er.runningWorkers.indexOf(e), 1),
              er.freeThreadData(e.pthread),
              (e.pthread = void 0);
          },
          receiveObjectTransfer: function (e) {},
          loadWasmModuleToWorker: function (r, n) {
            (r.onmessage = function (e) {
              var t = e.data,
                o = t.cmd;
              if (
                (r.pthread &&
                  (er.currentProxiedOperationCallerThread =
                    r.pthread.threadInfoStruct),
                t.targetThread && t.targetThread != Qt())
              ) {
                var i = er.pthreads[t.targetThread];
                return (
                  i
                    ? i.worker.postMessage(e.data, t.transferList)
                    : console.error(
                        'Internal error! Worker sent a message "' +
                          o +
                          '" to target pthread ' +
                          t.targetThread +
                          ", but that thread no longer exists!"
                      ),
                  void (er.currentProxiedOperationCallerThread = void 0)
                );
              }
              if ("processQueuedMainThreadWork" === o) Ao();
              else if ("spawnThread" === o) Vt(e.data);
              else if ("cleanupThread" === o) Je(t.thread);
              else if ("killThread" === o)
                !(function (e) {
                  if (w)
                    throw "Internal Error! _kill_thread() can only ever be called from main application thread!";
                  if (!e)
                    throw "Internal Error! Null pthread_ptr in _kill_thread!";
                  a()[(e + 12) >> 2] = 0;
                  var r = er.pthreads[e];
                  r.worker.terminate(),
                    er.freeThreadData(r),
                    er.runningWorkers.splice(
                      er.runningWorkers.indexOf(r.worker),
                      1
                    ),
                    (r.worker.pthread = void 0);
                })(t.thread);
              else if ("cancelThread" === o) Ze(t.thread);
              else if ("loaded" === o)
                (r.loaded = !0),
                  n && n(r),
                  r.runPthread && (r.runPthread(), delete r.runPthread);
              else if ("print" === o) P("Thread " + t.threadId + ": " + t.text);
              else if ("printErr" === o)
                F("Thread " + t.threadId + ": " + t.text);
              else if ("alert" === o)
                alert("Thread " + t.threadId + ": " + t.text);
              else if ("exit" === o) {
                r.pthread &&
                  Atomics.load(u(), (r.pthread.thread + 68) >> 2) &&
                  er.returnWorkerToPool(r);
              } else
                "cancelDone" === o
                  ? er.returnWorkerToPool(r)
                  : "objectTransfer" === o
                  ? er.receiveObjectTransfer(e.data)
                  : "setimmediate" === e.data.target
                  ? r.postMessage(e.data)
                  : F("worker sent an unknown command " + o);
              er.currentProxiedOperationCallerThread = void 0;
            }),
              (r.onerror = function (e) {
                F(
                  "pthread sent an error! " +
                    e.filename +
                    ":" +
                    e.lineno +
                    ": " +
                    e.message
                );
              }),
              _ &&
                (r.on("message", function (e) {
                  r.onmessage({ data: e });
                }),
                r.on("error", function (e) {
                  r.onerror(e);
                }),
                r.on("exit", function (e) {
                  console.log("worker exited");
                })),
              r.postMessage({
                cmd: "load",
                urlOrBlob: l.mainScriptUrlOrBlob || e,
                wasmMemory: j,
                wasmModule: W,
                DYNAMIC_BASE: ge,
                DYNAMICTOP_PTR: ye,
              });
          },
          allocateUnusedWorker: function () {
            var e = D("ffmpeg-core.worker.js");
            er.unusedWorkers.push(new Worker(e));
          },
          getNewWorker: function () {
            return (
              0 == er.unusedWorkers.length &&
                (er.allocateUnusedWorker(),
                er.loadWasmModuleToWorker(er.unusedWorkers[0])),
              er.unusedWorkers.length > 0 ? er.unusedWorkers.pop() : null
            );
          },
          busySpinWait: function (e) {
            for (var r = performance.now() + e; performance.now() < r; );
          },
        };
      function rr() {
        var e = (function () {
          var e = new Error();
          if (!e.stack) {
            try {
              throw new Error();
            } catch (r) {
              e = r;
            }
            if (!e.stack) return "(no stack trace available)";
          }
          return e.stack.toString();
        })();
        return (
          l.extraStackTrace && (e += "\n" + l.extraStackTrace()),
          e.replace(/\b_Z[\w\d_]+/g, function (e) {
            var r = e;
            return e === r ? e : r + " [" + e + "]";
          })
        );
      }
      (l.establishStackSpace = function (e, r) {
        e, r, Jo(e);
      }),
        (l.getNoExitRuntime = function () {
          return B;
        }),
        ($e = _
          ? function () {
              var e = process.hrtime();
              return 1e3 * e[0] + e[1] / 1e6;
            }
          : w
          ? function () {
              return performance.now() - l.__performance_now_clock_drift;
            }
          : "undefined" != typeof dateNow
          ? dateNow
          : function () {
              return performance.now();
            });
      var nr = !0;
      function tr(e) {
        return l.___errno_location && (a()[l.___errno_location() >> 2] = e), e;
      }
      function or(e, r) {
        var n;
        if (0 === e) n = Date.now();
        else {
          if ((1 !== e && 4 !== e) || !nr) return tr(28), -1;
          n = $e();
        }
        return (
          (a()[r >> 2] = (n / 1e3) | 0),
          (a()[(r + 4) >> 2] = ((n % 1e3) * 1e3 * 1e3) | 0),
          0
        );
      }
      var ir = {
          splitPath: function (e) {
            return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
              .exec(e)
              .slice(1);
          },
          normalizeArray: function (e, r) {
            for (var n = 0, t = e.length - 1; t >= 0; t--) {
              var o = e[t];
              "." === o
                ? e.splice(t, 1)
                : ".." === o
                ? (e.splice(t, 1), n++)
                : n && (e.splice(t, 1), n--);
            }
            if (r) for (; n; n--) e.unshift("..");
            return e;
          },
          normalize: function (e) {
            var r = "/" === e.charAt(0),
              n = "/" === e.substr(-1);
            return (
              (e = ir
                .normalizeArray(
                  e.split("/").filter(function (e) {
                    return !!e;
                  }),
                  !r
                )
                .join("/")) ||
                r ||
                (e = "."),
              e && n && (e += "/"),
              (r ? "/" : "") + e
            );
          },
          dirname: function (e) {
            var r = ir.splitPath(e),
              n = r[0],
              t = r[1];
            return n || t ? (t && (t = t.substr(0, t.length - 1)), n + t) : ".";
          },
          basename: function (e) {
            if ("/" === e) return "/";
            var r = e.lastIndexOf("/");
            return -1 === r ? e : e.substr(r + 1);
          },
          extname: function (e) {
            return ir.splitPath(e)[3];
          },
          join: function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return ir.normalize(e.join("/"));
          },
          join2: function (e, r) {
            return ir.normalize(e + "/" + r);
          },
        },
        ar = {
          resolve: function () {
            for (
              var e = "", r = !1, n = arguments.length - 1;
              n >= -1 && !r;
              n--
            ) {
              var t = n >= 0 ? arguments[n] : cr.cwd();
              if ("string" != typeof t)
                throw new TypeError(
                  "Arguments to path.resolve must be strings"
                );
              if (!t) return "";
              (e = t + "/" + e), (r = "/" === t.charAt(0));
            }
            return (
              (r ? "/" : "") +
                (e = ir
                  .normalizeArray(
                    e.split("/").filter(function (e) {
                      return !!e;
                    }),
                    !r
                  )
                  .join("/")) || "."
            );
          },
          relative: function (e, r) {
            function n(e) {
              for (var r = 0; r < e.length && "" === e[r]; r++);
              for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
              return r > n ? [] : e.slice(r, n - r + 1);
            }
            (e = ar.resolve(e).substr(1)), (r = ar.resolve(r).substr(1));
            for (
              var t = n(e.split("/")),
                o = n(r.split("/")),
                i = Math.min(t.length, o.length),
                a = i,
                u = 0;
              u < i;
              u++
            )
              if (t[u] !== o[u]) {
                a = u;
                break;
              }
            var s = [];
            for (u = a; u < t.length; u++) s.push("..");
            return (s = s.concat(o.slice(a))).join("/");
          },
        },
        ur = {
          ttys: [],
          init: function () {},
          shutdown: function () {},
          register: function (e, r) {
            (ur.ttys[e] = { input: [], output: [], ops: r }),
              cr.registerDevice(e, ur.stream_ops);
          },
          stream_ops: {
            open: function (e) {
              var r = ur.ttys[e.node.rdev];
              if (!r) throw new cr.ErrnoError(43);
              (e.tty = r), (e.seekable = !1);
            },
            close: function (e) {
              e.tty.ops.flush(e.tty);
            },
            flush: function (e) {
              e.tty.ops.flush(e.tty);
            },
            read: function (e, r, n, t, o) {
              if (!e.tty || !e.tty.ops.get_char) throw new cr.ErrnoError(60);
              for (var i = 0, a = 0; a < t; a++) {
                var u;
                try {
                  u = e.tty.ops.get_char(e.tty);
                } catch (e) {
                  throw new cr.ErrnoError(29);
                }
                if (void 0 === u && 0 === i) throw new cr.ErrnoError(6);
                if (null == u) break;
                i++, (r[n + a] = u);
              }
              return i && (e.node.timestamp = Date.now()), i;
            },
            write: function (e, r, n, t, o) {
              if (!e.tty || !e.tty.ops.put_char) throw new cr.ErrnoError(60);
              try {
                for (var i = 0; i < t; i++) e.tty.ops.put_char(e.tty, r[n + i]);
              } catch (e) {
                throw new cr.ErrnoError(29);
              }
              return t && (e.node.timestamp = Date.now()), i;
            },
          },
          default_tty_ops: {
            get_char: function (e) {
              if (!e.input.length) {
                var r = null;
                if (_) {
                  var n = Buffer.alloc ? Buffer.alloc(256) : new Buffer(256),
                    t = 0;
                  try {
                    t = x.readSync(process.stdin.fd, n, 0, 256, null);
                  } catch (e) {
                    if (-1 == e.toString().indexOf("EOF")) throw e;
                    t = 0;
                  }
                  r = t > 0 ? n.slice(0, t).toString("utf-8") : null;
                } else
                  "undefined" != typeof window &&
                  "function" == typeof window.prompt
                    ? null !== (r = window.prompt("Input: ")) && (r += "\n")
                    : "function" == typeof readline &&
                      null !== (r = readline()) &&
                      (r += "\n");
                if (!r) return null;
                e.input = uo(r, !0);
              }
              return e.input.shift();
            },
            put_char: function (e, r) {
              null === r || 10 === r
                ? (P(J(e.output, 0)), (e.output = []))
                : 0 != r && e.output.push(r);
            },
            flush: function (e) {
              e.output &&
                e.output.length > 0 &&
                (P(J(e.output, 0)), (e.output = []));
            },
          },
          default_tty1_ops: {
            put_char: function (e, r) {
              null === r || 10 === r
                ? (F(J(e.output, 0)), (e.output = []))
                : 0 != r && e.output.push(r);
            },
            flush: function (e) {
              e.output &&
                e.output.length > 0 &&
                (F(J(e.output, 0)), (e.output = []));
            },
          },
        },
        sr = {
          ops_table: null,
          mount: function (e) {
            return sr.createNode(null, "/", 16895, 0);
          },
          createNode: function (e, r, n, t) {
            if (cr.isBlkdev(n) || cr.isFIFO(n)) throw new cr.ErrnoError(63);
            sr.ops_table ||
              (sr.ops_table = {
                dir: {
                  node: {
                    getattr: sr.node_ops.getattr,
                    setattr: sr.node_ops.setattr,
                    lookup: sr.node_ops.lookup,
                    mknod: sr.node_ops.mknod,
                    rename: sr.node_ops.rename,
                    unlink: sr.node_ops.unlink,
                    rmdir: sr.node_ops.rmdir,
                    readdir: sr.node_ops.readdir,
                    symlink: sr.node_ops.symlink,
                  },
                  stream: { llseek: sr.stream_ops.llseek },
                },
                file: {
                  node: {
                    getattr: sr.node_ops.getattr,
                    setattr: sr.node_ops.setattr,
                  },
                  stream: {
                    llseek: sr.stream_ops.llseek,
                    read: sr.stream_ops.read,
                    write: sr.stream_ops.write,
                    allocate: sr.stream_ops.allocate,
                    mmap: sr.stream_ops.mmap,
                    msync: sr.stream_ops.msync,
                  },
                },
                link: {
                  node: {
                    getattr: sr.node_ops.getattr,
                    setattr: sr.node_ops.setattr,
                    readlink: sr.node_ops.readlink,
                  },
                  stream: {},
                },
                chrdev: {
                  node: {
                    getattr: sr.node_ops.getattr,
                    setattr: sr.node_ops.setattr,
                  },
                  stream: cr.chrdev_stream_ops,
                },
              });
            var o = cr.createNode(e, r, n, t);
            return (
              cr.isDir(o.mode)
                ? ((o.node_ops = sr.ops_table.dir.node),
                  (o.stream_ops = sr.ops_table.dir.stream),
                  (o.contents = {}))
                : cr.isFile(o.mode)
                ? ((o.node_ops = sr.ops_table.file.node),
                  (o.stream_ops = sr.ops_table.file.stream),
                  (o.usedBytes = 0),
                  (o.contents = null))
                : cr.isLink(o.mode)
                ? ((o.node_ops = sr.ops_table.link.node),
                  (o.stream_ops = sr.ops_table.link.stream))
                : cr.isChrdev(o.mode) &&
                  ((o.node_ops = sr.ops_table.chrdev.node),
                  (o.stream_ops = sr.ops_table.chrdev.stream)),
              (o.timestamp = Date.now()),
              e && (e.contents[r] = o),
              o
            );
          },
          getFileDataAsRegularArray: function (e) {
            if (e.contents && e.contents.subarray) {
              for (var r = [], n = 0; n < e.usedBytes; ++n)
                r.push(e.contents[n]);
              return r;
            }
            return e.contents;
          },
          getFileDataAsTypedArray: function (e) {
            return e.contents
              ? e.contents.subarray
                ? e.contents.subarray(0, e.usedBytes)
                : new Uint8Array(e.contents)
              : new Uint8Array(0);
          },
          expandFileStorage: function (e, r) {
            var n = e.contents ? e.contents.length : 0;
            if (!(n >= r)) {
              (r = Math.max(r, (n * (n < 1048576 ? 2 : 1.125)) | 0)),
                0 != n && (r = Math.max(r, 256));
              var t = e.contents;
              (e.contents = new Uint8Array(r)),
                e.usedBytes > 0 &&
                  e.contents.set(t.subarray(0, e.usedBytes), 0);
            }
          },
          resizeFileStorage: function (e, r) {
            if (e.usedBytes != r) {
              if (0 == r) return (e.contents = null), void (e.usedBytes = 0);
              if (!e.contents || e.contents.subarray) {
                var n = e.contents;
                return (
                  (e.contents = new Uint8Array(r)),
                  n && e.contents.set(n.subarray(0, Math.min(r, e.usedBytes))),
                  void (e.usedBytes = r)
                );
              }
              if ((e.contents || (e.contents = []), e.contents.length > r))
                e.contents.length = r;
              else for (; e.contents.length < r; ) e.contents.push(0);
              e.usedBytes = r;
            }
          },
          node_ops: {
            getattr: function (e) {
              var r = {};
              return (
                (r.dev = cr.isChrdev(e.mode) ? e.id : 1),
                (r.ino = e.id),
                (r.mode = e.mode),
                (r.nlink = 1),
                (r.uid = 0),
                (r.gid = 0),
                (r.rdev = e.rdev),
                cr.isDir(e.mode)
                  ? (r.size = 4096)
                  : cr.isFile(e.mode)
                  ? (r.size = e.usedBytes)
                  : cr.isLink(e.mode)
                  ? (r.size = e.link.length)
                  : (r.size = 0),
                (r.atime = new Date(e.timestamp)),
                (r.mtime = new Date(e.timestamp)),
                (r.ctime = new Date(e.timestamp)),
                (r.blksize = 4096),
                (r.blocks = Math.ceil(r.size / r.blksize)),
                r
              );
            },
            setattr: function (e, r) {
              void 0 !== r.mode && (e.mode = r.mode),
                void 0 !== r.timestamp && (e.timestamp = r.timestamp),
                void 0 !== r.size && sr.resizeFileStorage(e, r.size);
            },
            lookup: function (e, r) {
              throw cr.genericErrors[44];
            },
            mknod: function (e, r, n, t) {
              return sr.createNode(e, r, n, t);
            },
            rename: function (e, r, n) {
              if (cr.isDir(e.mode)) {
                var t;
                try {
                  t = cr.lookupNode(r, n);
                } catch (e) {}
                if (t) for (var o in t.contents) throw new cr.ErrnoError(55);
              }
              delete e.parent.contents[e.name],
                (e.name = n),
                (r.contents[n] = e),
                (e.parent = r);
            },
            unlink: function (e, r) {
              delete e.contents[r];
            },
            rmdir: function (e, r) {
              var n = cr.lookupNode(e, r);
              for (var t in n.contents) throw new cr.ErrnoError(55);
              delete e.contents[r];
            },
            readdir: function (e) {
              var r = [".", ".."];
              for (var n in e.contents)
                e.contents.hasOwnProperty(n) && r.push(n);
              return r;
            },
            symlink: function (e, r, n) {
              var t = sr.createNode(e, r, 41471, 0);
              return (t.link = n), t;
            },
            readlink: function (e) {
              if (!cr.isLink(e.mode)) throw new cr.ErrnoError(28);
              return e.link;
            },
          },
          stream_ops: {
            read: function (e, r, n, t, o) {
              var i = e.node.contents;
              if (o >= e.node.usedBytes) return 0;
              var a = Math.min(e.node.usedBytes - o, t);
              if (a > 8 && i.subarray) r.set(i.subarray(o, o + a), n);
              else for (var u = 0; u < a; u++) r[n + u] = i[o + u];
              return a;
            },
            write: function (e, r, t, o, i, a) {
              if ((r.buffer === n().buffer && (a = !1), !o)) return 0;
              var u = e.node;
              if (
                ((u.timestamp = Date.now()),
                r.subarray && (!u.contents || u.contents.subarray))
              ) {
                if (a)
                  return (
                    (u.contents = r.subarray(t, t + o)), (u.usedBytes = o), o
                  );
                if (0 === u.usedBytes && 0 === i)
                  return (u.contents = r.slice(t, t + o)), (u.usedBytes = o), o;
                if (i + o <= u.usedBytes)
                  return u.contents.set(r.subarray(t, t + o), i), o;
              }
              if (
                (sr.expandFileStorage(u, i + o),
                u.contents.subarray && r.subarray)
              )
                u.contents.set(r.subarray(t, t + o), i);
              else for (var s = 0; s < o; s++) u.contents[i + s] = r[t + s];
              return (u.usedBytes = Math.max(u.usedBytes, i + o)), o;
            },
            llseek: function (e, r, n) {
              var t = r;
              if (
                (1 === n
                  ? (t += e.position)
                  : 2 === n &&
                    cr.isFile(e.node.mode) &&
                    (t += e.node.usedBytes),
                t < 0)
              )
                throw new cr.ErrnoError(28);
              return t;
            },
            allocate: function (e, r, n) {
              sr.expandFileStorage(e.node, r + n),
                (e.node.usedBytes = Math.max(e.node.usedBytes, r + n));
            },
            mmap: function (e, r, t, o, i, a, u) {
              if (!cr.isFile(e.node.mode)) throw new cr.ErrnoError(43);
              var s,
                c,
                l = e.node.contents;
              if (2 & u || l.buffer !== r.buffer) {
                (i > 0 || i + o < l.length) &&
                  (l = l.subarray
                    ? l.subarray(i, i + o)
                    : Array.prototype.slice.call(l, i, i + o)),
                  (c = !0);
                var f = r.buffer == n().buffer;
                if (!(s = yo(o))) throw new cr.ErrnoError(48);
                (f ? n() : r).set(l, s);
              } else (c = !1), (s = l.byteOffset);
              return { ptr: s, allocated: c };
            },
            msync: function (e, r, n, t, o) {
              if (!cr.isFile(e.node.mode)) throw new cr.ErrnoError(43);
              if (2 & o) return 0;
              sr.stream_ops.write(e, r, 0, t, n, !1);
              return 0;
            },
          },
        },
        cr = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: "/",
          initialized: !1,
          ignorePermissions: !0,
          trackingDelegate: {},
          tracking: { openFlags: { READ: 1, WRITE: 2 } },
          ErrnoError: null,
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          handleFSError: function (e) {
            if (!(e instanceof cr.ErrnoError)) throw e + " : " + rr();
            return tr(e.errno);
          },
          lookupPath: function (e, r) {
            if (((r = r || {}), !(e = ar.resolve(cr.cwd(), e))))
              return { path: "", node: null };
            var n = { follow_mount: !0, recurse_count: 0 };
            for (var t in n) void 0 === r[t] && (r[t] = n[t]);
            if (r.recurse_count > 8) throw new cr.ErrnoError(32);
            for (
              var o = ir.normalizeArray(
                  e.split("/").filter(function (e) {
                    return !!e;
                  }),
                  !1
                ),
                i = cr.root,
                a = "/",
                u = 0;
              u < o.length;
              u++
            ) {
              var s = u === o.length - 1;
              if (s && r.parent) break;
              if (
                ((i = cr.lookupNode(i, o[u])),
                (a = ir.join2(a, o[u])),
                cr.isMountpoint(i) &&
                  (!s || (s && r.follow_mount)) &&
                  (i = i.mounted.root),
                !s || r.follow)
              )
                for (var c = 0; cr.isLink(i.mode); ) {
                  var l = cr.readlink(a);
                  if (
                    ((a = ar.resolve(ir.dirname(a), l)),
                    (i = cr.lookupPath(a, {
                      recurse_count: r.recurse_count,
                    }).node),
                    c++ > 40)
                  )
                    throw new cr.ErrnoError(32);
                }
            }
            return { path: a, node: i };
          },
          getPath: function (e) {
            for (var r; ; ) {
              if (cr.isRoot(e)) {
                var n = e.mount.mountpoint;
                return r ? ("/" !== n[n.length - 1] ? n + "/" + r : n + r) : n;
              }
              (r = r ? e.name + "/" + r : e.name), (e = e.parent);
            }
          },
          hashName: function (e, r) {
            for (var n = 0, t = 0; t < r.length; t++)
              n = ((n << 5) - n + r.charCodeAt(t)) | 0;
            return ((e + n) >>> 0) % cr.nameTable.length;
          },
          hashAddNode: function (e) {
            var r = cr.hashName(e.parent.id, e.name);
            (e.name_next = cr.nameTable[r]), (cr.nameTable[r] = e);
          },
          hashRemoveNode: function (e) {
            var r = cr.hashName(e.parent.id, e.name);
            if (cr.nameTable[r] === e) cr.nameTable[r] = e.name_next;
            else
              for (var n = cr.nameTable[r]; n; ) {
                if (n.name_next === e) {
                  n.name_next = e.name_next;
                  break;
                }
                n = n.name_next;
              }
          },
          lookupNode: function (e, r) {
            var n = cr.mayLookup(e);
            if (n) throw new cr.ErrnoError(n, e);
            for (
              var t = cr.hashName(e.id, r), o = cr.nameTable[t];
              o;
              o = o.name_next
            ) {
              var i = o.name;
              if (o.parent.id === e.id && i === r) return o;
            }
            return cr.lookup(e, r);
          },
          createNode: function (e, r, n, t) {
            var o = new cr.FSNode(e, r, n, t);
            return cr.hashAddNode(o), o;
          },
          destroyNode: function (e) {
            cr.hashRemoveNode(e);
          },
          isRoot: function (e) {
            return e === e.parent;
          },
          isMountpoint: function (e) {
            return !!e.mounted;
          },
          isFile: function (e) {
            return 32768 == (61440 & e);
          },
          isDir: function (e) {
            return 16384 == (61440 & e);
          },
          isLink: function (e) {
            return 40960 == (61440 & e);
          },
          isChrdev: function (e) {
            return 8192 == (61440 & e);
          },
          isBlkdev: function (e) {
            return 24576 == (61440 & e);
          },
          isFIFO: function (e) {
            return 4096 == (61440 & e);
          },
          isSocket: function (e) {
            return 49152 == (49152 & e);
          },
          flagModes: {
            r: 0,
            rs: 1052672,
            "r+": 2,
            w: 577,
            wx: 705,
            xw: 705,
            "w+": 578,
            "wx+": 706,
            "xw+": 706,
            a: 1089,
            ax: 1217,
            xa: 1217,
            "a+": 1090,
            "ax+": 1218,
            "xa+": 1218,
          },
          modeStringToFlags: function (e) {
            var r = cr.flagModes[e];
            if (void 0 === r) throw new Error("Unknown file open mode: " + e);
            return r;
          },
          flagsToPermissionString: function (e) {
            var r = ["r", "w", "rw"][3 & e];
            return 512 & e && (r += "w"), r;
          },
          nodePermissions: function (e, r) {
            return cr.ignorePermissions
              ? 0
              : (-1 === r.indexOf("r") || 292 & e.mode) &&
                (-1 === r.indexOf("w") || 146 & e.mode) &&
                (-1 === r.indexOf("x") || 73 & e.mode)
              ? 0
              : 2;
          },
          mayLookup: function (e) {
            var r = cr.nodePermissions(e, "x");
            return r || (e.node_ops.lookup ? 0 : 2);
          },
          mayCreate: function (e, r) {
            try {
              cr.lookupNode(e, r);
              return 20;
            } catch (e) {}
            return cr.nodePermissions(e, "wx");
          },
          mayDelete: function (e, r, n) {
            var t;
            try {
              t = cr.lookupNode(e, r);
            } catch (e) {
              return e.errno;
            }
            var o = cr.nodePermissions(e, "wx");
            if (o) return o;
            if (n) {
              if (!cr.isDir(t.mode)) return 54;
              if (cr.isRoot(t) || cr.getPath(t) === cr.cwd()) return 10;
            } else if (cr.isDir(t.mode)) return 31;
            return 0;
          },
          mayOpen: function (e, r) {
            return e
              ? cr.isLink(e.mode)
                ? 32
                : cr.isDir(e.mode) &&
                  ("r" !== cr.flagsToPermissionString(r) || 512 & r)
                ? 31
                : cr.nodePermissions(e, cr.flagsToPermissionString(r))
              : 44;
          },
          MAX_OPEN_FDS: 4096,
          nextfd: function (e, r) {
            (e = e || 0), (r = r || cr.MAX_OPEN_FDS);
            for (var n = e; n <= r; n++) if (!cr.streams[n]) return n;
            throw new cr.ErrnoError(33);
          },
          getStream: function (e) {
            return cr.streams[e];
          },
          createStream: function (e, r, n) {
            cr.FSStream ||
              ((cr.FSStream = function () {}),
              (cr.FSStream.prototype = {
                object: {
                  get: function () {
                    return this.node;
                  },
                  set: function (e) {
                    this.node = e;
                  },
                },
                isRead: {
                  get: function () {
                    return 1 != (2097155 & this.flags);
                  },
                },
                isWrite: {
                  get: function () {
                    return 0 != (2097155 & this.flags);
                  },
                },
                isAppend: {
                  get: function () {
                    return 1024 & this.flags;
                  },
                },
              }));
            var t = new cr.FSStream();
            for (var o in e) t[o] = e[o];
            e = t;
            var i = cr.nextfd(r, n);
            return (e.fd = i), (cr.streams[i] = e), e;
          },
          closeStream: function (e) {
            cr.streams[e] = null;
          },
          chrdev_stream_ops: {
            open: function (e) {
              var r = cr.getDevice(e.node.rdev);
              (e.stream_ops = r.stream_ops),
                e.stream_ops.open && e.stream_ops.open(e);
            },
            llseek: function () {
              throw new cr.ErrnoError(70);
            },
          },
          major: function (e) {
            return e >> 8;
          },
          minor: function (e) {
            return 255 & e;
          },
          makedev: function (e, r) {
            return (e << 8) | r;
          },
          registerDevice: function (e, r) {
            cr.devices[e] = { stream_ops: r };
          },
          getDevice: function (e) {
            return cr.devices[e];
          },
          getMounts: function (e) {
            for (var r = [], n = [e]; n.length; ) {
              var t = n.pop();
              r.push(t), n.push.apply(n, t.mounts);
            }
            return r;
          },
          syncfs: function (e, r) {
            "function" == typeof e && ((r = e), (e = !1)),
              cr.syncFSRequests++,
              cr.syncFSRequests > 1 &&
                F(
                  "warning: " +
                    cr.syncFSRequests +
                    " FS.syncfs operations in flight at once, probably just doing extra work"
                );
            var n = cr.getMounts(cr.root.mount),
              t = 0;
            function o(e) {
              return cr.syncFSRequests--, r(e);
            }
            function i(e) {
              if (e) return i.errored ? void 0 : ((i.errored = !0), o(e));
              ++t >= n.length && o(null);
            }
            n.forEach(function (r) {
              if (!r.type.syncfs) return i(null);
              r.type.syncfs(r, e, i);
            });
          },
          mount: function (e, r, n) {
            var t,
              o = "/" === n,
              i = !n;
            if (o && cr.root) throw new cr.ErrnoError(10);
            if (!o && !i) {
              var a = cr.lookupPath(n, { follow_mount: !1 });
              if (((n = a.path), (t = a.node), cr.isMountpoint(t)))
                throw new cr.ErrnoError(10);
              if (!cr.isDir(t.mode)) throw new cr.ErrnoError(54);
            }
            var u = { type: e, opts: r, mountpoint: n, mounts: [] },
              s = e.mount(u);
            return (
              (s.mount = u),
              (u.root = s),
              o
                ? (cr.root = s)
                : t && ((t.mounted = u), t.mount && t.mount.mounts.push(u)),
              s
            );
          },
          unmount: function (e) {
            var r = cr.lookupPath(e, { follow_mount: !1 });
            if (!cr.isMountpoint(r.node)) throw new cr.ErrnoError(28);
            var n = r.node,
              t = n.mounted,
              o = cr.getMounts(t);
            Object.keys(cr.nameTable).forEach(function (e) {
              for (var r = cr.nameTable[e]; r; ) {
                var n = r.name_next;
                -1 !== o.indexOf(r.mount) && cr.destroyNode(r), (r = n);
              }
            }),
              (n.mounted = null);
            var i = n.mount.mounts.indexOf(t);
            n.mount.mounts.splice(i, 1);
          },
          lookup: function (e, r) {
            return e.node_ops.lookup(e, r);
          },
          mknod: function (e, r, n) {
            var t = cr.lookupPath(e, { parent: !0 }).node,
              o = ir.basename(e);
            if (!o || "." === o || ".." === o) throw new cr.ErrnoError(28);
            var i = cr.mayCreate(t, o);
            if (i) throw new cr.ErrnoError(i);
            if (!t.node_ops.mknod) throw new cr.ErrnoError(63);
            return t.node_ops.mknod(t, o, r, n);
          },
          create: function (e, r) {
            return (
              (r = void 0 !== r ? r : 438),
              (r &= 4095),
              (r |= 32768),
              cr.mknod(e, r, 0)
            );
          },
          mkdir: function (e, r) {
            return (
              (r = void 0 !== r ? r : 511),
              (r &= 1023),
              (r |= 16384),
              cr.mknod(e, r, 0)
            );
          },
          mkdirTree: function (e, r) {
            for (var n = e.split("/"), t = "", o = 0; o < n.length; ++o)
              if (n[o]) {
                t += "/" + n[o];
                try {
                  cr.mkdir(t, r);
                } catch (e) {
                  if (20 != e.errno) throw e;
                }
              }
          },
          mkdev: function (e, r, n) {
            return (
              void 0 === n && ((n = r), (r = 438)),
              (r |= 8192),
              cr.mknod(e, r, n)
            );
          },
          symlink: function (e, r) {
            if (!ar.resolve(e)) throw new cr.ErrnoError(44);
            var n = cr.lookupPath(r, { parent: !0 }).node;
            if (!n) throw new cr.ErrnoError(44);
            var t = ir.basename(r),
              o = cr.mayCreate(n, t);
            if (o) throw new cr.ErrnoError(o);
            if (!n.node_ops.symlink) throw new cr.ErrnoError(63);
            return n.node_ops.symlink(n, t, e);
          },
          rename: function (e, r) {
            var n,
              t,
              o = ir.dirname(e),
              i = ir.dirname(r),
              a = ir.basename(e),
              u = ir.basename(r);
            try {
              (n = cr.lookupPath(e, { parent: !0 }).node),
                (t = cr.lookupPath(r, { parent: !0 }).node);
            } catch (e) {
              throw new cr.ErrnoError(10);
            }
            if (!n || !t) throw new cr.ErrnoError(44);
            if (n.mount !== t.mount) throw new cr.ErrnoError(75);
            var s,
              c = cr.lookupNode(n, a),
              l = ar.relative(e, i);
            if ("." !== l.charAt(0)) throw new cr.ErrnoError(28);
            if ("." !== (l = ar.relative(r, o)).charAt(0))
              throw new cr.ErrnoError(55);
            try {
              s = cr.lookupNode(t, u);
            } catch (e) {}
            if (c !== s) {
              var f = cr.isDir(c.mode),
                d = cr.mayDelete(n, a, f);
              if (d) throw new cr.ErrnoError(d);
              if ((d = s ? cr.mayDelete(t, u, f) : cr.mayCreate(t, u)))
                throw new cr.ErrnoError(d);
              if (!n.node_ops.rename) throw new cr.ErrnoError(63);
              if (cr.isMountpoint(c) || (s && cr.isMountpoint(s)))
                throw new cr.ErrnoError(10);
              if (t !== n && (d = cr.nodePermissions(n, "w")))
                throw new cr.ErrnoError(d);
              try {
                cr.trackingDelegate.willMovePath &&
                  cr.trackingDelegate.willMovePath(e, r);
              } catch (n) {
                F(
                  "FS.trackingDelegate['willMovePath']('" +
                    e +
                    "', '" +
                    r +
                    "') threw an exception: " +
                    n.message
                );
              }
              cr.hashRemoveNode(c);
              try {
                n.node_ops.rename(c, t, u);
              } catch (e) {
                throw e;
              } finally {
                cr.hashAddNode(c);
              }
              try {
                cr.trackingDelegate.onMovePath &&
                  cr.trackingDelegate.onMovePath(e, r);
              } catch (n) {
                F(
                  "FS.trackingDelegate['onMovePath']('" +
                    e +
                    "', '" +
                    r +
                    "') threw an exception: " +
                    n.message
                );
              }
            }
          },
          rmdir: function (e) {
            var r = cr.lookupPath(e, { parent: !0 }).node,
              n = ir.basename(e),
              t = cr.lookupNode(r, n),
              o = cr.mayDelete(r, n, !0);
            if (o) throw new cr.ErrnoError(o);
            if (!r.node_ops.rmdir) throw new cr.ErrnoError(63);
            if (cr.isMountpoint(t)) throw new cr.ErrnoError(10);
            try {
              cr.trackingDelegate.willDeletePath &&
                cr.trackingDelegate.willDeletePath(e);
            } catch (r) {
              F(
                "FS.trackingDelegate['willDeletePath']('" +
                  e +
                  "') threw an exception: " +
                  r.message
              );
            }
            r.node_ops.rmdir(r, n), cr.destroyNode(t);
            try {
              cr.trackingDelegate.onDeletePath &&
                cr.trackingDelegate.onDeletePath(e);
            } catch (r) {
              F(
                "FS.trackingDelegate['onDeletePath']('" +
                  e +
                  "') threw an exception: " +
                  r.message
              );
            }
          },
          readdir: function (e) {
            var r = cr.lookupPath(e, { follow: !0 }).node;
            if (!r.node_ops.readdir) throw new cr.ErrnoError(54);
            return r.node_ops.readdir(r);
          },
          unlink: function (e) {
            var r = cr.lookupPath(e, { parent: !0 }).node,
              n = ir.basename(e),
              t = cr.lookupNode(r, n),
              o = cr.mayDelete(r, n, !1);
            if (o) throw new cr.ErrnoError(o);
            if (!r.node_ops.unlink) throw new cr.ErrnoError(63);
            if (cr.isMountpoint(t)) throw new cr.ErrnoError(10);
            try {
              cr.trackingDelegate.willDeletePath &&
                cr.trackingDelegate.willDeletePath(e);
            } catch (r) {
              F(
                "FS.trackingDelegate['willDeletePath']('" +
                  e +
                  "') threw an exception: " +
                  r.message
              );
            }
            r.node_ops.unlink(r, n), cr.destroyNode(t);
            try {
              cr.trackingDelegate.onDeletePath &&
                cr.trackingDelegate.onDeletePath(e);
            } catch (r) {
              F(
                "FS.trackingDelegate['onDeletePath']('" +
                  e +
                  "') threw an exception: " +
                  r.message
              );
            }
          },
          readlink: function (e) {
            var r = cr.lookupPath(e).node;
            if (!r) throw new cr.ErrnoError(44);
            if (!r.node_ops.readlink) throw new cr.ErrnoError(28);
            return ar.resolve(cr.getPath(r.parent), r.node_ops.readlink(r));
          },
          stat: function (e, r) {
            var n = cr.lookupPath(e, { follow: !r }).node;
            if (!n) throw new cr.ErrnoError(44);
            if (!n.node_ops.getattr) throw new cr.ErrnoError(63);
            return n.node_ops.getattr(n);
          },
          lstat: function (e) {
            return cr.stat(e, !0);
          },
          chmod: function (e, r, n) {
            var t;
            "string" == typeof e
              ? (t = cr.lookupPath(e, { follow: !n }).node)
              : (t = e);
            if (!t.node_ops.setattr) throw new cr.ErrnoError(63);
            t.node_ops.setattr(t, {
              mode: (4095 & r) | (-4096 & t.mode),
              timestamp: Date.now(),
            });
          },
          lchmod: function (e, r) {
            cr.chmod(e, r, !0);
          },
          fchmod: function (e, r) {
            var n = cr.getStream(e);
            if (!n) throw new cr.ErrnoError(8);
            cr.chmod(n.node, r);
          },
          chown: function (e, r, n, t) {
            var o;
            "string" == typeof e
              ? (o = cr.lookupPath(e, { follow: !t }).node)
              : (o = e);
            if (!o.node_ops.setattr) throw new cr.ErrnoError(63);
            o.node_ops.setattr(o, { timestamp: Date.now() });
          },
          lchown: function (e, r, n) {
            cr.chown(e, r, n, !0);
          },
          fchown: function (e, r, n) {
            var t = cr.getStream(e);
            if (!t) throw new cr.ErrnoError(8);
            cr.chown(t.node, r, n);
          },
          truncate: function (e, r) {
            if (r < 0) throw new cr.ErrnoError(28);
            var n;
            "string" == typeof e
              ? (n = cr.lookupPath(e, { follow: !0 }).node)
              : (n = e);
            if (!n.node_ops.setattr) throw new cr.ErrnoError(63);
            if (cr.isDir(n.mode)) throw new cr.ErrnoError(31);
            if (!cr.isFile(n.mode)) throw new cr.ErrnoError(28);
            var t = cr.nodePermissions(n, "w");
            if (t) throw new cr.ErrnoError(t);
            n.node_ops.setattr(n, { size: r, timestamp: Date.now() });
          },
          ftruncate: function (e, r) {
            var n = cr.getStream(e);
            if (!n) throw new cr.ErrnoError(8);
            if (0 == (2097155 & n.flags)) throw new cr.ErrnoError(28);
            cr.truncate(n.node, r);
          },
          utime: function (e, r, n) {
            var t = cr.lookupPath(e, { follow: !0 }).node;
            t.node_ops.setattr(t, { timestamp: Math.max(r, n) });
          },
          open: function (e, r, n, t, o) {
            if ("" === e) throw new cr.ErrnoError(44);
            var i;
            if (
              ((n = void 0 === n ? 438 : n),
              (n =
                64 & (r = "string" == typeof r ? cr.modeStringToFlags(r) : r)
                  ? (4095 & n) | 32768
                  : 0),
              "object" == typeof e)
            )
              i = e;
            else {
              e = ir.normalize(e);
              try {
                i = cr.lookupPath(e, { follow: !(131072 & r) }).node;
              } catch (e) {}
            }
            var a = !1;
            if (64 & r)
              if (i) {
                if (128 & r) throw new cr.ErrnoError(20);
              } else (i = cr.mknod(e, n, 0)), (a = !0);
            if (!i) throw new cr.ErrnoError(44);
            if (
              (cr.isChrdev(i.mode) && (r &= -513),
              65536 & r && !cr.isDir(i.mode))
            )
              throw new cr.ErrnoError(54);
            if (!a) {
              var u = cr.mayOpen(i, r);
              if (u) throw new cr.ErrnoError(u);
            }
            512 & r && cr.truncate(i, 0), (r &= -641);
            var s = cr.createStream(
              {
                node: i,
                path: cr.getPath(i),
                flags: r,
                seekable: !0,
                position: 0,
                stream_ops: i.stream_ops,
                ungotten: [],
                error: !1,
              },
              t,
              o
            );
            s.stream_ops.open && s.stream_ops.open(s),
              !l.logReadFiles ||
                1 & r ||
                (cr.readFiles || (cr.readFiles = {}),
                e in cr.readFiles ||
                  ((cr.readFiles[e] = 1),
                  F("FS.trackingDelegate error on read file: " + e)));
            try {
              if (cr.trackingDelegate.onOpenFile) {
                var c = 0;
                1 != (2097155 & r) && (c |= cr.tracking.openFlags.READ),
                  0 != (2097155 & r) && (c |= cr.tracking.openFlags.WRITE),
                  cr.trackingDelegate.onOpenFile(e, c);
              }
            } catch (r) {
              F(
                "FS.trackingDelegate['onOpenFile']('" +
                  e +
                  "', flags) threw an exception: " +
                  r.message
              );
            }
            return s;
          },
          close: function (e) {
            if (cr.isClosed(e)) throw new cr.ErrnoError(8);
            e.getdents && (e.getdents = null);
            try {
              e.stream_ops.close && e.stream_ops.close(e);
            } catch (e) {
              throw e;
            } finally {
              cr.closeStream(e.fd);
            }
            e.fd = null;
          },
          isClosed: function (e) {
            return null === e.fd;
          },
          llseek: function (e, r, n) {
            if (cr.isClosed(e)) throw new cr.ErrnoError(8);
            if (!e.seekable || !e.stream_ops.llseek)
              throw new cr.ErrnoError(70);
            if (0 != n && 1 != n && 2 != n) throw new cr.ErrnoError(28);
            return (
              (e.position = e.stream_ops.llseek(e, r, n)),
              (e.ungotten = []),
              e.position
            );
          },
          read: function (e, r, n, t, o) {
            if (t < 0 || o < 0) throw new cr.ErrnoError(28);
            if (cr.isClosed(e)) throw new cr.ErrnoError(8);
            if (1 == (2097155 & e.flags)) throw new cr.ErrnoError(8);
            if (cr.isDir(e.node.mode)) throw new cr.ErrnoError(31);
            if (!e.stream_ops.read) throw new cr.ErrnoError(28);
            var i = void 0 !== o;
            if (i) {
              if (!e.seekable) throw new cr.ErrnoError(70);
            } else o = e.position;
            var a = e.stream_ops.read(e, r, n, t, o);
            return i || (e.position += a), a;
          },
          write: function (e, r, n, t, o, i) {
            if (t < 0 || o < 0) throw new cr.ErrnoError(28);
            if (cr.isClosed(e)) throw new cr.ErrnoError(8);
            if (0 == (2097155 & e.flags)) throw new cr.ErrnoError(8);
            if (cr.isDir(e.node.mode)) throw new cr.ErrnoError(31);
            if (!e.stream_ops.write) throw new cr.ErrnoError(28);
            1024 & e.flags && cr.llseek(e, 0, 2);
            var a = void 0 !== o;
            if (a) {
              if (!e.seekable) throw new cr.ErrnoError(70);
            } else o = e.position;
            var u = e.stream_ops.write(e, r, n, t, o, i);
            a || (e.position += u);
            try {
              e.path &&
                cr.trackingDelegate.onWriteToFile &&
                cr.trackingDelegate.onWriteToFile(e.path);
            } catch (r) {
              F(
                "FS.trackingDelegate['onWriteToFile']('" +
                  e.path +
                  "') threw an exception: " +
                  r.message
              );
            }
            return u;
          },
          allocate: function (e, r, n) {
            if (cr.isClosed(e)) throw new cr.ErrnoError(8);
            if (r < 0 || n <= 0) throw new cr.ErrnoError(28);
            if (0 == (2097155 & e.flags)) throw new cr.ErrnoError(8);
            if (!cr.isFile(e.node.mode) && !cr.isDir(e.node.mode))
              throw new cr.ErrnoError(43);
            if (!e.stream_ops.allocate) throw new cr.ErrnoError(138);
            e.stream_ops.allocate(e, r, n);
          },
          mmap: function (e, r, n, t, o, i, a) {
            if (0 != (2 & i) && 0 == (2 & a) && 2 != (2097155 & e.flags))
              throw new cr.ErrnoError(2);
            if (1 == (2097155 & e.flags)) throw new cr.ErrnoError(2);
            if (!e.stream_ops.mmap) throw new cr.ErrnoError(43);
            return e.stream_ops.mmap(e, r, n, t, o, i, a);
          },
          msync: function (e, r, n, t, o) {
            return e && e.stream_ops.msync
              ? e.stream_ops.msync(e, r, n, t, o)
              : 0;
          },
          munmap: function (e) {
            return 0;
          },
          ioctl: function (e, r, n) {
            if (!e.stream_ops.ioctl) throw new cr.ErrnoError(59);
            return e.stream_ops.ioctl(e, r, n);
          },
          readFile: function (e, r) {
            if (
              (((r = r || {}).flags = r.flags || "r"),
              (r.encoding = r.encoding || "binary"),
              "utf8" !== r.encoding && "binary" !== r.encoding)
            )
              throw new Error('Invalid encoding type "' + r.encoding + '"');
            var n,
              t = cr.open(e, r.flags),
              o = cr.stat(e).size,
              i = new Uint8Array(o);
            return (
              cr.read(t, i, 0, o, 0),
              "utf8" === r.encoding
                ? (n = J(i, 0))
                : "binary" === r.encoding && (n = i),
              cr.close(t),
              n
            );
          },
          writeFile: function (e, r, n) {
            (n = n || {}).flags = n.flags || "w";
            var t = cr.open(e, n.flags, n.mode);
            if ("string" == typeof r) {
              var o = new Uint8Array(ne(r) + 1),
                i = ee(r, o, 0, o.length);
              cr.write(t, o, 0, i, void 0, n.canOwn);
            } else {
              if (!ArrayBuffer.isView(r))
                throw new Error("Unsupported data type");
              cr.write(t, r, 0, r.byteLength, void 0, n.canOwn);
            }
            cr.close(t);
          },
          cwd: function () {
            return cr.currentPath;
          },
          chdir: function (e) {
            var r = cr.lookupPath(e, { follow: !0 });
            if (null === r.node) throw new cr.ErrnoError(44);
            if (!cr.isDir(r.node.mode)) throw new cr.ErrnoError(54);
            var n = cr.nodePermissions(r.node, "x");
            if (n) throw new cr.ErrnoError(n);
            cr.currentPath = r.path;
          },
          createDefaultDirectories: function () {
            cr.mkdir("/tmp"), cr.mkdir("/home"), cr.mkdir("/home/web_user");
          },
          createDefaultDevices: function () {
            var e;
            if (
              (cr.mkdir("/dev"),
              cr.registerDevice(cr.makedev(1, 3), {
                read: function () {
                  return 0;
                },
                write: function (e, r, n, t, o) {
                  return t;
                },
              }),
              cr.mkdev("/dev/null", cr.makedev(1, 3)),
              ur.register(cr.makedev(5, 0), ur.default_tty_ops),
              ur.register(cr.makedev(6, 0), ur.default_tty1_ops),
              cr.mkdev("/dev/tty", cr.makedev(5, 0)),
              cr.mkdev("/dev/tty1", cr.makedev(6, 0)),
              "object" == typeof crypto &&
                "function" == typeof crypto.getRandomValues)
            ) {
              var r = new Uint8Array(1);
              e = function () {
                return crypto.getRandomValues(r), r[0];
              };
            } else if (_)
              try {
                var n = require("crypto");
                e = function () {
                  return n.randomBytes(1)[0];
                };
              } catch (e) {}
            e ||
              (e = function () {
                Ne("random_device");
              }),
              cr.createDevice("/dev", "random", e),
              cr.createDevice("/dev", "urandom", e),
              cr.mkdir("/dev/shm"),
              cr.mkdir("/dev/shm/tmp");
          },
          createSpecialDirectories: function () {
            cr.mkdir("/proc"),
              cr.mkdir("/proc/self"),
              cr.mkdir("/proc/self/fd"),
              cr.mount(
                {
                  mount: function () {
                    var e = cr.createNode("/proc/self", "fd", 16895, 73);
                    return (
                      (e.node_ops = {
                        lookup: function (e, r) {
                          var n = +r,
                            t = cr.getStream(n);
                          if (!t) throw new cr.ErrnoError(8);
                          var o = {
                            parent: null,
                            mount: { mountpoint: "fake" },
                            node_ops: {
                              readlink: function () {
                                return t.path;
                              },
                            },
                          };
                          return (o.parent = o), o;
                        },
                      }),
                      e
                    );
                  },
                },
                {},
                "/proc/self/fd"
              );
          },
          createStandardStreams: function () {
            l.stdin
              ? cr.createDevice("/dev", "stdin", l.stdin)
              : cr.symlink("/dev/tty", "/dev/stdin"),
              l.stdout
                ? cr.createDevice("/dev", "stdout", null, l.stdout)
                : cr.symlink("/dev/tty", "/dev/stdout"),
              l.stderr
                ? cr.createDevice("/dev", "stderr", null, l.stderr)
                : cr.symlink("/dev/tty1", "/dev/stderr");
            cr.open("/dev/stdin", "r"),
              cr.open("/dev/stdout", "w"),
              cr.open("/dev/stderr", "w");
          },
          ensureErrnoError: function () {
            cr.ErrnoError ||
              ((cr.ErrnoError = function (e, r) {
                (this.node = r),
                  (this.setErrno = function (e) {
                    this.errno = e;
                  }),
                  this.setErrno(e),
                  (this.message = "FS error");
              }),
              (cr.ErrnoError.prototype = new Error()),
              (cr.ErrnoError.prototype.constructor = cr.ErrnoError),
              [44].forEach(function (e) {
                (cr.genericErrors[e] = new cr.ErrnoError(e)),
                  (cr.genericErrors[e].stack = "<generic error, no stack>");
              }));
          },
          staticInit: function () {
            cr.ensureErrnoError(),
              (cr.nameTable = new Array(4096)),
              cr.mount(sr, {}, "/"),
              cr.createDefaultDirectories(),
              cr.createDefaultDevices(),
              cr.createSpecialDirectories(),
              (cr.filesystems = { MEMFS: sr });
          },
          init: function (e, r, n) {
            (cr.init.initialized = !0),
              cr.ensureErrnoError(),
              (l.stdin = e || l.stdin),
              (l.stdout = r || l.stdout),
              (l.stderr = n || l.stderr),
              cr.createStandardStreams();
          },
          quit: function () {
            cr.init.initialized = !1;
            var e = l._fflush;
            e && e(0);
            for (var r = 0; r < cr.streams.length; r++) {
              var n = cr.streams[r];
              n && cr.close(n);
            }
          },
          getMode: function (e, r) {
            var n = 0;
            return e && (n |= 365), r && (n |= 146), n;
          },
          joinPath: function (e, r) {
            var n = ir.join.apply(null, e);
            return r && "/" == n[0] && (n = n.substr(1)), n;
          },
          absolutePath: function (e, r) {
            return ar.resolve(r, e);
          },
          standardizePath: function (e) {
            return ir.normalize(e);
          },
          findObject: function (e, r) {
            var n = cr.analyzePath(e, r);
            return n.exists ? n.object : (tr(n.error), null);
          },
          analyzePath: function (e, r) {
            try {
              e = (t = cr.lookupPath(e, { follow: !r })).path;
            } catch (e) {}
            var n = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null,
            };
            try {
              var t = cr.lookupPath(e, { parent: !0 });
              (n.parentExists = !0),
                (n.parentPath = t.path),
                (n.parentObject = t.node),
                (n.name = ir.basename(e)),
                (t = cr.lookupPath(e, { follow: !r })),
                (n.exists = !0),
                (n.path = t.path),
                (n.object = t.node),
                (n.name = t.node.name),
                (n.isRoot = "/" === t.path);
            } catch (e) {
              n.error = e.errno;
            }
            return n;
          },
          createFolder: function (e, r, n, t) {
            var o = ir.join2("string" == typeof e ? e : cr.getPath(e), r),
              i = cr.getMode(n, t);
            return cr.mkdir(o, i);
          },
          createPath: function (e, r, n, t) {
            e = "string" == typeof e ? e : cr.getPath(e);
            for (var o = r.split("/").reverse(); o.length; ) {
              var i = o.pop();
              if (i) {
                var a = ir.join2(e, i);
                try {
                  cr.mkdir(a);
                } catch (e) {}
                e = a;
              }
            }
            return a;
          },
          createFile: function (e, r, n, t, o) {
            var i = ir.join2("string" == typeof e ? e : cr.getPath(e), r),
              a = cr.getMode(t, o);
            return cr.create(i, a);
          },
          createDataFile: function (e, r, n, t, o, i) {
            var a = r
                ? ir.join2("string" == typeof e ? e : cr.getPath(e), r)
                : e,
              u = cr.getMode(t, o),
              s = cr.create(a, u);
            if (n) {
              if ("string" == typeof n) {
                for (
                  var c = new Array(n.length), l = 0, f = n.length;
                  l < f;
                  ++l
                )
                  c[l] = n.charCodeAt(l);
                n = c;
              }
              cr.chmod(s, 146 | u);
              var d = cr.open(s, "w");
              cr.write(d, n, 0, n.length, 0, i), cr.close(d), cr.chmod(s, u);
            }
            return s;
          },
          createDevice: function (e, r, n, t) {
            var o = ir.join2("string" == typeof e ? e : cr.getPath(e), r),
              i = cr.getMode(!!n, !!t);
            cr.createDevice.major || (cr.createDevice.major = 64);
            var a = cr.makedev(cr.createDevice.major++, 0);
            return (
              cr.registerDevice(a, {
                open: function (e) {
                  e.seekable = !1;
                },
                close: function (e) {
                  t && t.buffer && t.buffer.length && t(10);
                },
                read: function (e, r, t, o, i) {
                  for (var a = 0, u = 0; u < o; u++) {
                    var s;
                    try {
                      s = n();
                    } catch (e) {
                      throw new cr.ErrnoError(29);
                    }
                    if (void 0 === s && 0 === a) throw new cr.ErrnoError(6);
                    if (null == s) break;
                    a++, (r[t + u] = s);
                  }
                  return a && (e.node.timestamp = Date.now()), a;
                },
                write: function (e, r, n, o, i) {
                  for (var a = 0; a < o; a++)
                    try {
                      t(r[n + a]);
                    } catch (e) {
                      throw new cr.ErrnoError(29);
                    }
                  return o && (e.node.timestamp = Date.now()), a;
                },
              }),
              cr.mkdev(o, i, a)
            );
          },
          createLink: function (e, r, n, t, o) {
            var i = ir.join2("string" == typeof e ? e : cr.getPath(e), r);
            return cr.symlink(n, i);
          },
          forceLoadFile: function (e) {
            if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
            var r = !0;
            if ("undefined" != typeof XMLHttpRequest)
              throw new Error(
                "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
              );
            if (!b)
              throw new Error("Cannot load without read() or XMLHttpRequest.");
            try {
              (e.contents = uo(b(e.url), !0)),
                (e.usedBytes = e.contents.length);
            } catch (e) {
              r = !1;
            }
            return r || tr(29), r;
          },
          createLazyFile: function (e, r, n, t, o) {
            function i() {
              (this.lengthKnown = !1), (this.chunks = []);
            }
            if (
              ((i.prototype.get = function (e) {
                if (!(e > this.length - 1 || e < 0)) {
                  var r = e % this.chunkSize,
                    n = (e / this.chunkSize) | 0;
                  return this.getter(n)[r];
                }
              }),
              (i.prototype.setDataGetter = function (e) {
                this.getter = e;
              }),
              (i.prototype.cacheLength = function () {
                var e = new XMLHttpRequest();
                if (
                  (e.open("HEAD", n, !1),
                  e.send(null),
                  !((e.status >= 200 && e.status < 300) || 304 === e.status))
                )
                  throw new Error(
                    "Couldn't load " + n + ". Status: " + e.status
                  );
                var r,
                  t = Number(e.getResponseHeader("Content-length")),
                  o =
                    (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r,
                  i =
                    (r = e.getResponseHeader("Content-Encoding")) &&
                    "gzip" === r,
                  a = 1048576;
                o || (a = t);
                var u = this;
                u.setDataGetter(function (e) {
                  var r = e * a,
                    o = (e + 1) * a - 1;
                  if (
                    ((o = Math.min(o, t - 1)),
                    void 0 === u.chunks[e] &&
                      (u.chunks[e] = (function (e, r) {
                        if (e > r)
                          throw new Error(
                            "invalid range (" +
                              e +
                              ", " +
                              r +
                              ") or no bytes requested!"
                          );
                        if (r > t - 1)
                          throw new Error(
                            "only " + t + " bytes available! programmer error!"
                          );
                        var o = new XMLHttpRequest();
                        if (
                          (o.open("GET", n, !1),
                          t !== a &&
                            o.setRequestHeader("Range", "bytes=" + e + "-" + r),
                          "undefined" != typeof Uint8Array &&
                            (o.responseType = "arraybuffer"),
                          o.overrideMimeType &&
                            o.overrideMimeType(
                              "text/plain; charset=x-user-defined"
                            ),
                          o.send(null),
                          !(
                            (o.status >= 200 && o.status < 300) ||
                            304 === o.status
                          ))
                        )
                          throw new Error(
                            "Couldn't load " + n + ". Status: " + o.status
                          );
                        return void 0 !== o.response
                          ? new Uint8Array(o.response || [])
                          : uo(o.responseText || "", !0);
                      })(r, o)),
                    void 0 === u.chunks[e])
                  )
                    throw new Error("doXHR failed!");
                  return u.chunks[e];
                }),
                  (!i && t) ||
                    ((a = t = 1),
                    (t = this.getter(0).length),
                    (a = t),
                    P(
                      "LazyFiles on gzip forces download of the whole file when length is accessed"
                    )),
                  (this._length = t),
                  (this._chunkSize = a),
                  (this.lengthKnown = !0);
              }),
              "undefined" != typeof XMLHttpRequest)
            ) {
              if (!E)
                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
              var a = new i();
              Object.defineProperties(a, {
                length: {
                  get: function () {
                    return this.lengthKnown || this.cacheLength(), this._length;
                  },
                },
                chunkSize: {
                  get: function () {
                    return (
                      this.lengthKnown || this.cacheLength(), this._chunkSize
                    );
                  },
                },
              });
              var u = { isDevice: !1, contents: a };
            } else u = { isDevice: !1, url: n };
            var s = cr.createFile(e, r, u, t, o);
            u.contents
              ? (s.contents = u.contents)
              : u.url && ((s.contents = null), (s.url = u.url)),
              Object.defineProperties(s, {
                usedBytes: {
                  get: function () {
                    return this.contents.length;
                  },
                },
              });
            var c = {};
            return (
              Object.keys(s.stream_ops).forEach(function (e) {
                var r = s.stream_ops[e];
                c[e] = function () {
                  if (!cr.forceLoadFile(s)) throw new cr.ErrnoError(29);
                  return r.apply(null, arguments);
                };
              }),
              (c.read = function (e, r, n, t, o) {
                if (!cr.forceLoadFile(s)) throw new cr.ErrnoError(29);
                var i = e.node.contents;
                if (o >= i.length) return 0;
                var a = Math.min(i.length - o, t);
                if (i.slice) for (var u = 0; u < a; u++) r[n + u] = i[o + u];
                else for (u = 0; u < a; u++) r[n + u] = i.get(o + u);
                return a;
              }),
              (s.stream_ops = c),
              s
            );
          },
          createPreloadedFile: function (e, r, n, t, o, i, a, u, s, c) {
            qr.init();
            var f = r ? ar.resolve(ir.join2(e, r)) : e;
            Me("cp " + f);
            function d(n) {
              function d(n) {
                c && c(),
                  u || cr.createDataFile(e, r, n, t, o, s),
                  i && i(),
                  Oe();
              }
              var m = !1;
              l.preloadPlugins.forEach(function (e) {
                m ||
                  (e.canHandle(f) &&
                    (e.handle(n, f, d, function () {
                      a && a(), Oe();
                    }),
                    (m = !0)));
              }),
                m || d(n);
            }
            Re(),
              "string" == typeof n
                ? qr.asyncLoad(
                    n,
                    function (e) {
                      d(e);
                    },
                    a
                  )
                : d(n);
          },
          indexedDB: function () {
            return (
              window.indexedDB ||
              window.mozIndexedDB ||
              window.webkitIndexedDB ||
              window.msIndexedDB
            );
          },
          DB_NAME: function () {
            return "EM_FS_" + window.location.pathname;
          },
          DB_VERSION: 20,
          DB_STORE_NAME: "FILE_DATA",
          saveFilesToDB: function (e, r, n) {
            (r = r || function () {}), (n = n || function () {});
            var t = cr.indexedDB();
            try {
              var o = t.open(cr.DB_NAME(), cr.DB_VERSION);
            } catch (e) {
              return n(e);
            }
            (o.onupgradeneeded = function () {
              P("creating db"), o.result.createObjectStore(cr.DB_STORE_NAME);
            }),
              (o.onsuccess = function () {
                var t = o.result.transaction([cr.DB_STORE_NAME], "readwrite"),
                  i = t.objectStore(cr.DB_STORE_NAME),
                  a = 0,
                  u = 0,
                  s = e.length;
                function c() {
                  0 == u ? r() : n();
                }
                e.forEach(function (e) {
                  var r = i.put(cr.analyzePath(e).object.contents, e);
                  (r.onsuccess = function () {
                    ++a + u == s && c();
                  }),
                    (r.onerror = function () {
                      a + ++u == s && c();
                    });
                }),
                  (t.onerror = n);
              }),
              (o.onerror = n);
          },
          loadFilesFromDB: function (e, r, n) {
            (r = r || function () {}), (n = n || function () {});
            var t = cr.indexedDB();
            try {
              var o = t.open(cr.DB_NAME(), cr.DB_VERSION);
            } catch (e) {
              return n(e);
            }
            (o.onupgradeneeded = n),
              (o.onsuccess = function () {
                var t = o.result;
                try {
                  var i = t.transaction([cr.DB_STORE_NAME], "readonly");
                } catch (e) {
                  return void n(e);
                }
                var a = i.objectStore(cr.DB_STORE_NAME),
                  u = 0,
                  s = 0,
                  c = e.length;
                function l() {
                  0 == s ? r() : n();
                }
                e.forEach(function (e) {
                  var r = a.get(e);
                  (r.onsuccess = function () {
                    cr.analyzePath(e).exists && cr.unlink(e),
                      cr.createDataFile(
                        ir.dirname(e),
                        ir.basename(e),
                        r.result,
                        !0,
                        !0,
                        !0
                      ),
                      ++u + s == c && l();
                  }),
                    (r.onerror = function () {
                      u + ++s == c && l();
                    });
                }),
                  (i.onerror = n);
              }),
              (o.onerror = n);
          },
        },
        lr = {
          mappings: {},
          DEFAULT_POLLMASK: 5,
          umask: 511,
          calculateAt: function (e, r) {
            if ("/" !== r[0]) {
              var n;
              if (-100 === e) n = cr.cwd();
              else {
                var t = cr.getStream(e);
                if (!t) throw new cr.ErrnoError(8);
                n = t.path;
              }
              r = ir.join2(n, r);
            }
            return r;
          },
          doStat: function (e, r, n) {
            try {
              var t = e(r);
            } catch (e) {
              if (
                e &&
                e.node &&
                ir.normalize(r) !== ir.normalize(cr.getPath(e.node))
              )
                return -54;
              throw e;
            }
            return (
              (a()[n >> 2] = t.dev),
              (a()[(n + 4) >> 2] = 0),
              (a()[(n + 8) >> 2] = t.ino),
              (a()[(n + 12) >> 2] = t.mode),
              (a()[(n + 16) >> 2] = t.nlink),
              (a()[(n + 20) >> 2] = t.uid),
              (a()[(n + 24) >> 2] = t.gid),
              (a()[(n + 28) >> 2] = t.rdev),
              (a()[(n + 32) >> 2] = 0),
              (Ue = [
                t.size >>> 0,
                ((je = t.size),
                +xe(je) >= 1
                  ? je > 0
                    ? (0 | De(+Ae(je / 4294967296), 4294967295)) >>> 0
                    : ~~+Te((je - +(~~je >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (a()[(n + 40) >> 2] = Ue[0]),
              (a()[(n + 44) >> 2] = Ue[1]),
              (a()[(n + 48) >> 2] = 4096),
              (a()[(n + 52) >> 2] = t.blocks),
              (a()[(n + 56) >> 2] = (t.atime.getTime() / 1e3) | 0),
              (a()[(n + 60) >> 2] = 0),
              (a()[(n + 64) >> 2] = (t.mtime.getTime() / 1e3) | 0),
              (a()[(n + 68) >> 2] = 0),
              (a()[(n + 72) >> 2] = (t.ctime.getTime() / 1e3) | 0),
              (a()[(n + 76) >> 2] = 0),
              (Ue = [
                t.ino >>> 0,
                ((je = t.ino),
                +xe(je) >= 1
                  ? je > 0
                    ? (0 | De(+Ae(je / 4294967296), 4294967295)) >>> 0
                    : ~~+Te((je - +(~~je >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (a()[(n + 80) >> 2] = Ue[0]),
              (a()[(n + 84) >> 2] = Ue[1]),
              0
            );
          },
          doMsync: function (e, r, n, o, i) {
            var a = t().slice(e, e + n);
            cr.msync(r, a, i, n, o);
          },
          doMkdir: function (e, r) {
            return (
              "/" === (e = ir.normalize(e))[e.length - 1] &&
                (e = e.substr(0, e.length - 1)),
              cr.mkdir(e, r, 0),
              0
            );
          },
          doMknod: function (e, r, n) {
            switch (61440 & r) {
              case 32768:
              case 8192:
              case 24576:
              case 4096:
              case 49152:
                break;
              default:
                return -28;
            }
            return cr.mknod(e, r, n), 0;
          },
          doReadlink: function (e, r, t) {
            if (t <= 0) return -28;
            var o = cr.readlink(e),
              i = Math.min(t, ne(o)),
              a = n()[r + i];
            return re(o, r, t + 1), (n()[r + i] = a), i;
          },
          doAccess: function (e, r) {
            if (-8 & r) return -28;
            var n;
            if (!(n = cr.lookupPath(e, { follow: !0 }).node)) return -44;
            var t = "";
            return (
              4 & r && (t += "r"),
              2 & r && (t += "w"),
              1 & r && (t += "x"),
              t && cr.nodePermissions(n, t) ? -2 : 0
            );
          },
          doDup: function (e, r, n) {
            var t = cr.getStream(n);
            return t && cr.close(t), cr.open(e, r, 0, n, n).fd;
          },
          doReadv: function (e, r, t, o) {
            for (var i = 0, u = 0; u < t; u++) {
              var s = a()[(r + 8 * u) >> 2],
                c = a()[(r + (8 * u + 4)) >> 2],
                l = cr.read(e, n(), s, c, o);
              if (l < 0) return -1;
              if (((i += l), l < c)) break;
            }
            return i;
          },
          doWritev: function (e, r, t, o) {
            for (var i = 0, u = 0; u < t; u++) {
              var s = a()[(r + 8 * u) >> 2],
                c = a()[(r + (8 * u + 4)) >> 2],
                l = cr.write(e, n(), s, c, o);
              if (l < 0) return -1;
              i += l;
            }
            return i;
          },
          varargs: void 0,
          get: function () {
            return (lr.varargs += 4), a()[(lr.varargs - 4) >> 2];
          },
          getStr: function (e) {
            return $(e);
          },
          getStreamFromFD: function (e) {
            var r = cr.getStream(e);
            if (!r) throw new cr.ErrnoError(8);
            return r;
          },
          get64: function (e, r) {
            return e;
          },
        };
      function fr(e) {
        if (w) return Vn(1, 1, e);
        try {
          return (e = lr.getStr(e)), cr.unlink(e), 0;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      var dr = {
        mount: function (e) {
          return (
            (l.websocket =
              l.websocket && "object" == typeof l.websocket ? l.websocket : {}),
            (l.websocket._callbacks = {}),
            (l.websocket.on = function (e, r) {
              return "function" == typeof r && (this._callbacks[e] = r), this;
            }),
            (l.websocket.emit = function (e, r) {
              "function" == typeof this._callbacks[e] &&
                this._callbacks[e].call(this, r);
            }),
            cr.createNode(null, "/", 16895, 0)
          );
        },
        createSocket: function (e, r, n) {
          n && Q((1 == r) == (6 == n));
          var t = {
              family: e,
              type: r,
              protocol: n,
              server: null,
              error: null,
              peers: {},
              pending: [],
              recv_queue: [],
              sock_ops: dr.websocket_sock_ops,
            },
            o = dr.nextname(),
            i = cr.createNode(dr.root, o, 49152, 0);
          i.sock = t;
          var a = cr.createStream({
            path: o,
            node: i,
            flags: cr.modeStringToFlags("r+"),
            seekable: !1,
            stream_ops: dr.stream_ops,
          });
          return (t.stream = a), t;
        },
        getSocket: function (e) {
          var r = cr.getStream(e);
          return r && cr.isSocket(r.node.mode) ? r.node.sock : null;
        },
        stream_ops: {
          poll: function (e) {
            var r = e.node.sock;
            return r.sock_ops.poll(r);
          },
          ioctl: function (e, r, n) {
            var t = e.node.sock;
            return t.sock_ops.ioctl(t, r, n);
          },
          read: function (e, r, n, t, o) {
            var i = e.node.sock,
              a = i.sock_ops.recvmsg(i, t);
            return a ? (r.set(a.buffer, n), a.buffer.length) : 0;
          },
          write: function (e, r, n, t, o) {
            var i = e.node.sock;
            return i.sock_ops.sendmsg(i, r, n, t);
          },
          close: function (e) {
            var r = e.node.sock;
            r.sock_ops.close(r);
          },
        },
        nextname: function () {
          return (
            dr.nextname.current || (dr.nextname.current = 0),
            "socket[" + dr.nextname.current++ + "]"
          );
        },
        websocket_sock_ops: {
          createPeer: function (e, r, n) {
            var t;
            if (("object" == typeof r && ((t = r), (r = null), (n = null)), t))
              if (t._socket)
                (r = t._socket.remoteAddress), (n = t._socket.remotePort);
              else {
                var o = /ws[s]?:\/\/([^:]+):(\d+)/.exec(t.url);
                if (!o)
                  throw new Error(
                    "WebSocket URL must be in the format ws(s)://address:port"
                  );
                (r = o[1]), (n = parseInt(o[2], 10));
              }
            else
              try {
                var i = l.websocket && "object" == typeof l.websocket,
                  a = "ws:#".replace("#", "//");
                if (
                  (i &&
                    "string" == typeof l.websocket.url &&
                    (a = l.websocket.url),
                  "ws://" === a || "wss://" === a)
                ) {
                  var u = r.split("/");
                  a = a + u[0] + ":" + n + "/" + u.slice(1).join("/");
                }
                var s = "binary";
                i &&
                  "string" == typeof l.websocket.subprotocol &&
                  (s = l.websocket.subprotocol);
                var c = void 0;
                "null" !== s &&
                  ((s = s.replace(/^ +| +$/g, "").split(/ *, */)),
                  (c = _ ? { protocol: s.toString() } : s)),
                  i &&
                    null === l.websocket.subprotocol &&
                    ((s = "null"), (c = void 0)),
                  ((t = new (_ ? require("ws") : WebSocket)(a, c)).binaryType =
                    "arraybuffer");
              } catch (e) {
                throw new cr.ErrnoError(Ve.EHOSTUNREACH);
              }
            var f = { addr: r, port: n, socket: t, dgram_send_queue: [] };
            return (
              dr.websocket_sock_ops.addPeer(e, f),
              dr.websocket_sock_ops.handlePeerEvents(e, f),
              2 === e.type &&
                void 0 !== e.sport &&
                f.dgram_send_queue.push(
                  new Uint8Array([
                    255,
                    255,
                    255,
                    255,
                    "p".charCodeAt(0),
                    "o".charCodeAt(0),
                    "r".charCodeAt(0),
                    "t".charCodeAt(0),
                    (65280 & e.sport) >> 8,
                    255 & e.sport,
                  ])
                ),
              f
            );
          },
          getPeer: function (e, r, n) {
            return e.peers[r + ":" + n];
          },
          addPeer: function (e, r) {
            e.peers[r.addr + ":" + r.port] = r;
          },
          removePeer: function (e, r) {
            delete e.peers[r.addr + ":" + r.port];
          },
          handlePeerEvents: function (e, r) {
            var n = !0,
              t = function () {
                l.websocket.emit("open", e.stream.fd);
                try {
                  for (var n = r.dgram_send_queue.shift(); n; )
                    r.socket.send(n), (n = r.dgram_send_queue.shift());
                } catch (e) {
                  r.socket.close();
                }
              };
            function o(t) {
              if ("string" == typeof t) {
                t = new TextEncoder().encode(t);
              } else {
                if ((Q(void 0 !== t.byteLength), 0 == t.byteLength)) return;
                t = new Uint8Array(t);
              }
              var o = n;
              if (
                ((n = !1),
                o &&
                  10 === t.length &&
                  255 === t[0] &&
                  255 === t[1] &&
                  255 === t[2] &&
                  255 === t[3] &&
                  t[4] === "p".charCodeAt(0) &&
                  t[5] === "o".charCodeAt(0) &&
                  t[6] === "r".charCodeAt(0) &&
                  t[7] === "t".charCodeAt(0))
              ) {
                var i = (t[8] << 8) | t[9];
                return (
                  dr.websocket_sock_ops.removePeer(e, r),
                  (r.port = i),
                  void dr.websocket_sock_ops.addPeer(e, r)
                );
              }
              e.recv_queue.push({ addr: r.addr, port: r.port, data: t }),
                l.websocket.emit("message", e.stream.fd);
            }
            _
              ? (r.socket.on("open", t),
                r.socket.on("message", function (e, r) {
                  r.binary && o(new Uint8Array(e).buffer);
                }),
                r.socket.on("close", function () {
                  l.websocket.emit("close", e.stream.fd);
                }),
                r.socket.on("error", function (r) {
                  (e.error = Ve.ECONNREFUSED),
                    l.websocket.emit("error", [
                      e.stream.fd,
                      e.error,
                      "ECONNREFUSED: Connection refused",
                    ]);
                }))
              : ((r.socket.onopen = t),
                (r.socket.onclose = function () {
                  l.websocket.emit("close", e.stream.fd);
                }),
                (r.socket.onmessage = function (e) {
                  o(e.data);
                }),
                (r.socket.onerror = function (r) {
                  (e.error = Ve.ECONNREFUSED),
                    l.websocket.emit("error", [
                      e.stream.fd,
                      e.error,
                      "ECONNREFUSED: Connection refused",
                    ]);
                }));
          },
          poll: function (e) {
            if (1 === e.type && e.server) return e.pending.length ? 65 : 0;
            var r = 0,
              n =
                1 === e.type
                  ? dr.websocket_sock_ops.getPeer(e, e.daddr, e.dport)
                  : null;
            return (
              (e.recv_queue.length ||
                !n ||
                (n && n.socket.readyState === n.socket.CLOSING) ||
                (n && n.socket.readyState === n.socket.CLOSED)) &&
                (r |= 65),
              (!n || (n && n.socket.readyState === n.socket.OPEN)) && (r |= 4),
              ((n && n.socket.readyState === n.socket.CLOSING) ||
                (n && n.socket.readyState === n.socket.CLOSED)) &&
                (r |= 16),
              r
            );
          },
          ioctl: function (e, r, n) {
            switch (r) {
              case 21531:
                var t = 0;
                return (
                  e.recv_queue.length && (t = e.recv_queue[0].data.length),
                  (a()[n >> 2] = t),
                  0
                );
              default:
                return Ve.EINVAL;
            }
          },
          close: function (e) {
            if (e.server) {
              try {
                e.server.close();
              } catch (e) {}
              e.server = null;
            }
            for (var r = Object.keys(e.peers), n = 0; n < r.length; n++) {
              var t = e.peers[r[n]];
              try {
                t.socket.close();
              } catch (e) {}
              dr.websocket_sock_ops.removePeer(e, t);
            }
            return 0;
          },
          bind: function (e, r, n) {
            if (void 0 !== e.saddr || void 0 !== e.sport)
              throw new cr.ErrnoError(Ve.EINVAL);
            if (((e.saddr = r), (e.sport = n), 2 === e.type)) {
              e.server && (e.server.close(), (e.server = null));
              try {
                e.sock_ops.listen(e, 0);
              } catch (e) {
                if (!(e instanceof cr.ErrnoError)) throw e;
                if (e.errno !== Ve.EOPNOTSUPP) throw e;
              }
            }
          },
          connect: function (e, r, n) {
            if (e.server) throw new cr.ErrnoError(Ve.EOPNOTSUPP);
            if (void 0 !== e.daddr && void 0 !== e.dport) {
              var t = dr.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
              if (t)
                throw t.socket.readyState === t.socket.CONNECTING
                  ? new cr.ErrnoError(Ve.EALREADY)
                  : new cr.ErrnoError(Ve.EISCONN);
            }
            var o = dr.websocket_sock_ops.createPeer(e, r, n);
            throw (
              ((e.daddr = o.addr),
              (e.dport = o.port),
              new cr.ErrnoError(Ve.EINPROGRESS))
            );
          },
          listen: function (e, r) {
            if (!_) throw new cr.ErrnoError(Ve.EOPNOTSUPP);
            if (e.server) throw new cr.ErrnoError(Ve.EINVAL);
            var n = require("ws").Server,
              t = e.saddr;
            (e.server = new n({ host: t, port: e.sport })),
              l.websocket.emit("listen", e.stream.fd),
              e.server.on("connection", function (r) {
                if (1 === e.type) {
                  var n = dr.createSocket(e.family, e.type, e.protocol),
                    t = dr.websocket_sock_ops.createPeer(n, r);
                  (n.daddr = t.addr),
                    (n.dport = t.port),
                    e.pending.push(n),
                    l.websocket.emit("connection", n.stream.fd);
                } else dr.websocket_sock_ops.createPeer(e, r), l.websocket.emit("connection", e.stream.fd);
              }),
              e.server.on("closed", function () {
                l.websocket.emit("close", e.stream.fd), (e.server = null);
              }),
              e.server.on("error", function (r) {
                (e.error = Ve.EHOSTUNREACH),
                  l.websocket.emit("error", [
                    e.stream.fd,
                    e.error,
                    "EHOSTUNREACH: Host is unreachable",
                  ]);
              });
          },
          accept: function (e) {
            if (!e.server) throw new cr.ErrnoError(Ve.EINVAL);
            var r = e.pending.shift();
            return (r.stream.flags = e.stream.flags), r;
          },
          getname: function (e, r) {
            var n, t;
            if (r) {
              if (void 0 === e.daddr || void 0 === e.dport)
                throw new cr.ErrnoError(Ve.ENOTCONN);
              (n = e.daddr), (t = e.dport);
            } else (n = e.saddr || 0), (t = e.sport || 0);
            return { addr: n, port: t };
          },
          sendmsg: function (e, r, n, t, o, i) {
            if (2 === e.type) {
              if (
                ((void 0 !== o && void 0 !== i) ||
                  ((o = e.daddr), (i = e.dport)),
                void 0 === o || void 0 === i)
              )
                throw new cr.ErrnoError(Ve.EDESTADDRREQ);
            } else (o = e.daddr), (i = e.dport);
            var a,
              u = dr.websocket_sock_ops.getPeer(e, o, i);
            if (1 === e.type) {
              if (
                !u ||
                u.socket.readyState === u.socket.CLOSING ||
                u.socket.readyState === u.socket.CLOSED
              )
                throw new cr.ErrnoError(Ve.ENOTCONN);
              if (u.socket.readyState === u.socket.CONNECTING)
                throw new cr.ErrnoError(Ve.EAGAIN);
            }
            if (
              (ArrayBuffer.isView(r) && ((n += r.byteOffset), (r = r.buffer)),
              (a =
                r instanceof SharedArrayBuffer
                  ? new Uint8Array(new Uint8Array(r.slice(n, n + t))).buffer
                  : r.slice(n, n + t)),
              2 === e.type && (!u || u.socket.readyState !== u.socket.OPEN))
            )
              return (
                (u &&
                  u.socket.readyState !== u.socket.CLOSING &&
                  u.socket.readyState !== u.socket.CLOSED) ||
                  (u = dr.websocket_sock_ops.createPeer(e, o, i)),
                u.dgram_send_queue.push(a),
                t
              );
            try {
              return u.socket.send(a), t;
            } catch (e) {
              throw new cr.ErrnoError(Ve.EINVAL);
            }
          },
          recvmsg: function (e, r) {
            if (1 === e.type && e.server) throw new cr.ErrnoError(Ve.ENOTCONN);
            var n = e.recv_queue.shift();
            if (!n) {
              if (1 === e.type) {
                var t = dr.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
                if (t) {
                  if (
                    t.socket.readyState === t.socket.CLOSING ||
                    t.socket.readyState === t.socket.CLOSED
                  )
                    return null;
                  throw new cr.ErrnoError(Ve.EAGAIN);
                }
                throw new cr.ErrnoError(Ve.ENOTCONN);
              }
              throw new cr.ErrnoError(Ve.EAGAIN);
            }
            var o = n.data.byteLength || n.data.length,
              i = n.data.byteOffset || 0,
              a = n.data.buffer || n.data,
              u = Math.min(r, o),
              s = {
                buffer: new Uint8Array(a, i, u),
                addr: n.addr,
                port: n.port,
              };
            if (1 === e.type && u < o) {
              var c = o - u;
              (n.data = new Uint8Array(a, i + u, c)), e.recv_queue.unshift(n);
            }
            return s;
          },
        },
      };
      function mr(e) {
        for (var r = e.split("."), n = 0; n < 4; n++) {
          var t = Number(r[n]);
          if (isNaN(t)) return null;
          r[n] = t;
        }
        return (r[0] | (r[1] << 8) | (r[2] << 16) | (r[3] << 24)) >>> 0;
      }
      function pr(e) {
        return parseInt(e, void 0);
      }
      function vr(e) {
        var r,
          n,
          t,
          o,
          i = [];
        if (
          !/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(
            e
          )
        )
          return null;
        if ("::" === e) return [0, 0, 0, 0, 0, 0, 0, 0];
        for (
          (e =
            0 === e.indexOf("::")
              ? e.replace("::", "Z:")
              : e.replace("::", ":Z:")).indexOf(".") > 0
            ? (((r = (e = e.replace(new RegExp("[.]", "g"), ":")).split(":"))[
                r.length - 4
              ] = pr(r[r.length - 4]) + 256 * pr(r[r.length - 3])),
              (r[r.length - 3] =
                pr(r[r.length - 2]) + 256 * pr(r[r.length - 1])),
              (r = r.slice(0, r.length - 2)))
            : (r = e.split(":")),
            t = 0,
            o = 0,
            n = 0;
          n < r.length;
          n++
        )
          if ("string" == typeof r[n])
            if ("Z" === r[n]) {
              for (o = 0; o < 8 - r.length + 1; o++) i[n + o] = 0;
              t = o - 1;
            } else i[n + t] = vo(parseInt(r[n], 16));
          else i[n + t] = r[n];
        return [
          (i[1] << 16) | i[0],
          (i[3] << 16) | i[2],
          (i[5] << 16) | i[4],
          (i[7] << 16) | i[6],
        ];
      }
      var hr = {
        address_map: { id: 1, addrs: {}, names: {} },
        lookup_name: function (e) {
          var r,
            n = mr(e);
          if (null !== n) return e;
          if (null !== (n = vr(e))) return e;
          if (hr.address_map.addrs[e]) r = hr.address_map.addrs[e];
          else {
            var t = hr.address_map.id++;
            Q(t < 65535, "exceeded max address mappings of 65535"),
              (r = "172.29." + (255 & t) + "." + (65280 & t)),
              (hr.address_map.names[r] = e),
              (hr.address_map.addrs[e] = r);
          }
          return r;
        },
        lookup_addr: function (e) {
          return hr.address_map.names[e] ? hr.address_map.names[e] : null;
        },
      };
      function gr(e) {
        return (
          (255 & e) +
          "." +
          ((e >> 8) & 255) +
          "." +
          ((e >> 16) & 255) +
          "." +
          ((e >> 24) & 255)
        );
      }
      function yr(e) {
        var r = "",
          n = 0,
          t = 0,
          o = 0,
          i = 0,
          a = 0,
          u = 0,
          s = [
            65535 & e[0],
            e[0] >> 16,
            65535 & e[1],
            e[1] >> 16,
            65535 & e[2],
            e[2] >> 16,
            65535 & e[3],
            e[3] >> 16,
          ],
          c = !0,
          l = "";
        for (u = 0; u < 5; u++)
          if (0 !== s[u]) {
            c = !1;
            break;
          }
        if (c) {
          if (((l = gr(s[6] | (s[7] << 16))), -1 === s[5]))
            return (r = "::ffff:"), (r += l);
          if (0 === s[5])
            return (
              (r = "::"),
              "0.0.0.0" === l && (l = ""),
              "0.0.0.1" === l && (l = "1"),
              (r += l)
            );
        }
        for (n = 0; n < 8; n++)
          0 === s[n] && (n - o > 1 && (a = 0), (o = n), a++),
            a > t && (i = n - (t = a) + 1);
        for (n = 0; n < 8; n++)
          t > 1 && 0 === s[n] && n >= i && n < i + t
            ? n === i && ((r += ":"), 0 === i && (r += ":"))
            : ((r += Number(po(65535 & s[n])).toString(16)),
              (r += n < 7 ? ":" : ""));
        return r;
      }
      function Er(e, r) {
        var n,
          t = o()[e >> 1],
          u = po(i()[(e + 2) >> 1]);
        switch (t) {
          case 2:
            if (16 !== r) return { errno: 28 };
            n = gr((n = a()[(e + 4) >> 2]));
            break;
          case 10:
            if (28 !== r) return { errno: 28 };
            n = yr(
              (n = [
                a()[(e + 8) >> 2],
                a()[(e + 12) >> 2],
                a()[(e + 16) >> 2],
                a()[(e + 20) >> 2],
              ])
            );
            break;
          default:
            return { errno: 5 };
        }
        return { family: t, addr: n, port: u };
      }
      function _r(e, r, n, t) {
        switch (r) {
          case 2:
            (n = mr(n)),
              (o()[e >> 1] = r),
              (a()[(e + 4) >> 2] = n),
              (o()[(e + 2) >> 1] = vo(t));
            break;
          case 10:
            (n = vr(n)),
              (a()[e >> 2] = r),
              (a()[(e + 8) >> 2] = n[0]),
              (a()[(e + 12) >> 2] = n[1]),
              (a()[(e + 16) >> 2] = n[2]),
              (a()[(e + 20) >> 2] = n[3]),
              (o()[(e + 2) >> 1] = vo(t)),
              (a()[(e + 4) >> 2] = 0),
              (a()[(e + 24) >> 2] = 0);
            break;
          default:
            return { errno: 5 };
        }
        return {};
      }
      function wr(e, r) {
        if (w) return Vn(2, 1, e, r);
        try {
          lr.varargs = r;
          var o = function () {
              var e = dr.getSocket(lr.get());
              if (!e) throw new cr.ErrnoError(8);
              return e;
            },
            i = function (e) {
              var r = lr.get(),
                n = lr.get();
              if (e && 0 === r) return null;
              var t = Er(r, n);
              if (t.errno) throw new cr.ErrnoError(t.errno);
              return (t.addr = hr.lookup_addr(t.addr) || t.addr), t;
            };
          switch (e) {
            case 1:
              var u = lr.get(),
                s = lr.get(),
                c = lr.get();
              return (l = dr.createSocket(u, s, c)).stream.fd;
            case 2:
              var l = o(),
                f = i();
              return l.sock_ops.bind(l, f.addr, f.port), 0;
            case 3:
              (l = o()), (f = i());
              return l.sock_ops.connect(l, f.addr, f.port), 0;
            case 4:
              l = o();
              var d = lr.get();
              return l.sock_ops.listen(l, d), 0;
            case 5:
              l = o();
              var m = lr.get(),
                p = (lr.get(), l.sock_ops.accept(l));
              if (m) _r(m, p.family, hr.lookup_name(p.daddr), p.dport);
              return p.stream.fd;
            case 6:
              (l = o()),
                (m = lr.get()),
                lr.get(),
                _r(m, l.family, hr.lookup_name(l.saddr || "0.0.0.0"), l.sport);
              return 0;
            case 7:
              (l = o()), (m = lr.get()), lr.get();
              if (!l.daddr) return -53;
              _r(m, l.family, hr.lookup_name(l.daddr), l.dport);
              return 0;
            case 11:
              l = o();
              var v = lr.get(),
                h = lr.get(),
                g = (lr.get(), i(!0));
              return g
                ? l.sock_ops.sendmsg(l, n(), v, h, g.addr, g.port)
                : cr.write(l.stream, n(), v, h);
            case 12:
              l = o();
              var y = lr.get(),
                E = lr.get();
              lr.get(), (m = lr.get()), lr.get();
              if (!(I = l.sock_ops.recvmsg(l, E))) return 0;
              if (m) _r(m, l.family, hr.lookup_name(I.addr), I.port);
              return t().set(I.buffer, y), I.buffer.byteLength;
            case 14:
              return -50;
            case 15:
              l = o();
              var _ = lr.get(),
                b = lr.get(),
                k = lr.get(),
                C = lr.get();
              return 1 === _ && 4 === b
                ? ((a()[k >> 2] = l.error),
                  (a()[C >> 2] = 4),
                  (l.error = null),
                  0)
                : -50;
            case 16:
              (l = o()), (v = lr.get()), lr.get();
              var S,
                x = a()[(v + 8) >> 2],
                T = a()[(v + 12) >> 2],
                A = a()[v >> 2],
                D = a()[(v + 4) >> 2];
              if (A) {
                if ((f = Er(A, D)).errno) return -f.errno;
                (S = f.port), (m = hr.lookup_addr(f.addr) || f.addr);
              }
              for (var L = 0, P = 0; P < T; P++)
                L += a()[(x + (8 * P + 4)) >> 2];
              var F = new Uint8Array(L),
                M = 0;
              for (P = 0; P < T; P++)
                for (
                  var R = a()[(x + (8 * P + 0)) >> 2],
                    O = a()[(x + (8 * P + 4)) >> 2],
                    N = 0;
                  N < O;
                  N++
                )
                  F[M++] = n()[(R + N) >> 0];
              return l.sock_ops.sendmsg(l, F, 0, L, m, S);
            case 17:
              for (
                l = o(),
                  v = lr.get(),
                  lr.get(),
                  x = a()[(v + 8) >> 2],
                  T = a()[(v + 12) >> 2],
                  L = 0,
                  P = 0;
                P < T;
                P++
              )
                L += a()[(x + (8 * P + 4)) >> 2];
              var I;
              if (!(I = l.sock_ops.recvmsg(l, L))) return 0;
              if ((A = a()[v >> 2]))
                _r(A, l.family, hr.lookup_name(I.addr), I.port);
              var B = 0,
                j = I.buffer.byteLength;
              for (P = 0; j > 0 && P < T; P++) {
                R = a()[(x + (8 * P + 0)) >> 2];
                if ((O = a()[(x + (8 * P + 4)) >> 2])) {
                  (h = Math.min(O, j)), (y = I.buffer.subarray(B, B + h));
                  t().set(y, R + B), (B += h), (j -= h);
                }
              }
              return B;
            default:
              return -52;
          }
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function br(e, r, n, t, o) {
        if (w) return Vn(3, 1, e, r, n, t, o);
        try {
          for (
            var i = 0,
              u = r ? a()[r >> 2] : 0,
              s = r ? a()[(r + 4) >> 2] : 0,
              c = n ? a()[n >> 2] : 0,
              l = n ? a()[(n + 4) >> 2] : 0,
              f = t ? a()[t >> 2] : 0,
              d = t ? a()[(t + 4) >> 2] : 0,
              m = 0,
              p = 0,
              v = 0,
              h = 0,
              g = 0,
              y = 0,
              E =
                (r ? a()[r >> 2] : 0) |
                (n ? a()[n >> 2] : 0) |
                (t ? a()[t >> 2] : 0),
              _ =
                (r ? a()[(r + 4) >> 2] : 0) |
                (n ? a()[(n + 4) >> 2] : 0) |
                (t ? a()[(t + 4) >> 2] : 0),
              b = function (e, r, n, t) {
                return e < 32 ? r & t : n & t;
              },
              k = 0;
            k < e;
            k++
          ) {
            var C = 1 << k % 32;
            if (b(k, E, _, C)) {
              var S = cr.getStream(k);
              if (!S) throw new cr.ErrnoError(8);
              var x = lr.DEFAULT_POLLMASK;
              S.stream_ops.poll && (x = S.stream_ops.poll(S)),
                1 & x && b(k, u, s, C) && (k < 32 ? (m |= C) : (p |= C), i++),
                4 & x && b(k, c, l, C) && (k < 32 ? (v |= C) : (h |= C), i++),
                2 & x && b(k, f, d, C) && (k < 32 ? (g |= C) : (y |= C), i++);
            }
          }
          return (
            r && ((a()[r >> 2] = m), (a()[(r + 4) >> 2] = p)),
            n && ((a()[n >> 2] = v), (a()[(n + 4) >> 2] = h)),
            t && ((a()[t >> 2] = g), (a()[(t + 4) >> 2] = y)),
            i
          );
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function kr(e, r, n) {
        if (w) return Vn(4, 1, e, r, n);
        try {
          for (var t = 0, i = 0; i < r; i++) {
            var u = e + 8 * i,
              s = a()[u >> 2],
              c = o()[(u + 4) >> 1],
              l = 32,
              f = cr.getStream(s);
            f &&
              ((l = lr.DEFAULT_POLLMASK),
              f.stream_ops.poll && (l = f.stream_ops.poll(f))),
              (l &= 24 | c) && t++,
              (o()[(u + 6) >> 1] = l);
          }
          return t;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Cr(e, r, t) {
        r |= 0;
        var o,
          i = 0,
          u = 0,
          s = 0;
        if (((o = ((e |= 0) + (t |= 0)) | 0), (r &= 255), (0 | t) >= 67)) {
          for (; 0 != (3 & e); ) (n()[e >> 0] = r), (e = (e + 1) | 0);
          for (
            s = r | (r << 8) | (r << 16) | (r << 24),
              u = ((i = (-4 & o) | 0) - 64) | 0;
            (0 | e) <= (0 | u);

          )
            (a()[e >> 2] = s),
              (a()[(e + 4) >> 2] = s),
              (a()[(e + 8) >> 2] = s),
              (a()[(e + 12) >> 2] = s),
              (a()[(e + 16) >> 2] = s),
              (a()[(e + 20) >> 2] = s),
              (a()[(e + 24) >> 2] = s),
              (a()[(e + 28) >> 2] = s),
              (a()[(e + 32) >> 2] = s),
              (a()[(e + 36) >> 2] = s),
              (a()[(e + 40) >> 2] = s),
              (a()[(e + 44) >> 2] = s),
              (a()[(e + 48) >> 2] = s),
              (a()[(e + 52) >> 2] = s),
              (a()[(e + 56) >> 2] = s),
              (a()[(e + 60) >> 2] = s),
              (e = (e + 64) | 0);
          for (; (0 | e) < (0 | i); ) (a()[e >> 2] = s), (e = (e + 4) | 0);
        }
        for (; (0 | e) < (0 | o); ) (n()[e >> 0] = r), (e = (e + 1) | 0);
        return (o - t) | 0;
      }
      function Sr(e, r, n, o, i, a) {
        if (w) return Vn(5, 1, e, r, n, o, i, a);
        try {
          return (function (e, r, n, o, i, a) {
            var u;
            a <<= 12;
            var s = !1;
            if (0 != (16 & o) && e % 16384 != 0) return -28;
            if (0 != (32 & o)) {
              if (!(u = Eo(16384, r))) return -48;
              Cr(u, 0, r), (s = !0);
            } else {
              var c = cr.getStream(i);
              if (!c) return -8;
              var l = cr.mmap(c, t(), e, r, a, n, o);
              (u = l.ptr), (s = l.allocated);
            }
            return (
              (lr.mappings[u] = {
                malloc: u,
                len: r,
                allocated: s,
                fd: i,
                flags: o,
                offset: a,
              }),
              u
            );
          })(e, r, n, o, i, a);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function xr(e, r) {
        if (w) return Vn(6, 1, e, r);
        try {
          return (e = lr.getStr(e)), lr.doStat(cr.stat, e, r);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Tr(e, r) {
        if (w) return Vn(7, 1, e, r);
        try {
          return (e = lr.getStr(e)), lr.doStat(cr.lstat, e, r);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Ar(e, r) {
        if (w) return Vn(8, 1, e, r);
        try {
          var n = lr.getStreamFromFD(e);
          return lr.doStat(cr.stat, n.path, r);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Dr(e, r, t) {
        if (w) return Vn(9, 1, e, r, t);
        try {
          var i = lr.getStreamFromFD(e);
          i.getdents || (i.getdents = cr.readdir(i.path));
          for (
            var u = 0, s = cr.llseek(i, 0, 1), c = Math.floor(s / 280);
            c < i.getdents.length && u + 280 <= t;

          ) {
            var l,
              f,
              d = i.getdents[c];
            if ("." === d[0]) (l = 1), (f = 4);
            else {
              var m = cr.lookupNode(i.node, d);
              (l = m.id),
                (f = cr.isChrdev(m.mode)
                  ? 2
                  : cr.isDir(m.mode)
                  ? 4
                  : cr.isLink(m.mode)
                  ? 10
                  : 8);
            }
            (Ue = [
              l >>> 0,
              ((je = l),
              +xe(je) >= 1
                ? je > 0
                  ? (0 | De(+Ae(je / 4294967296), 4294967295)) >>> 0
                  : ~~+Te((je - +(~~je >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
              (a()[(r + u) >> 2] = Ue[0]),
              (a()[(r + u + 4) >> 2] = Ue[1]),
              (Ue = [
                (280 * (c + 1)) >>> 0,
                ((je = 280 * (c + 1)),
                +xe(je) >= 1
                  ? je > 0
                    ? (0 | De(+Ae(je / 4294967296), 4294967295)) >>> 0
                    : ~~+Te((je - +(~~je >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (a()[(r + u + 8) >> 2] = Ue[0]),
              (a()[(r + u + 12) >> 2] = Ue[1]),
              (o()[(r + u + 16) >> 1] = 280),
              (n()[(r + u + 18) >> 0] = f),
              re(d, r + u + 19, 256),
              (u += 280),
              (c += 1);
          }
          return cr.llseek(i, 280 * c, 0), u;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Lr(e, r, n) {
        if (w) return Vn(10, 1, e, r, n);
        lr.varargs = n;
        try {
          var t = lr.getStreamFromFD(e);
          switch (r) {
            case 0:
              return (i = lr.get()) < 0
                ? -28
                : cr.open(t.path, t.flags, 0, i).fd;
            case 1:
            case 2:
              return 0;
            case 3:
              return t.flags;
            case 4:
              var i = lr.get();
              return (t.flags |= i), 0;
            case 12:
              i = lr.get();
              return (o()[(i + 0) >> 1] = 2), 0;
            case 13:
            case 14:
              return 0;
            case 16:
            case 8:
              return -28;
            case 9:
              return tr(28), -1;
            default:
              return -28;
          }
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Pr(e, r, t) {
        if (w) return Vn(11, 1, e, r, t);
        try {
          var o = lr.getStreamFromFD(e);
          return cr.read(o, n(), r, t);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Fr(e, r) {
        if (w) return Vn(12, 1, e, r);
        try {
          return (e = lr.getStr(e)), lr.doAccess(e, r);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Mr(e, r, n, t) {
        if (w) return Vn(13, 1, e, r, n, t);
        try {
          return (
            t &&
              ((a()[t >> 2] = -1),
              (a()[(t + 4) >> 2] = -1),
              (a()[(t + 8) >> 2] = -1),
              (a()[(t + 12) >> 2] = -1)),
            0
          );
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Rr(e, r) {
        if (w) return Vn(14, 1, e, r);
        try {
          return (e = lr.getStr(e)), (r = lr.getStr(r)), cr.rename(e, r), 0;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Or(e, r) {
        if (w) return Vn(15, 1, e, r);
        try {
          return (e = lr.getStr(e)), lr.doMkdir(e, r);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Nr(e) {
        if (w) return Vn(16, 1, e);
        try {
          return (e = lr.getStr(e)), cr.rmdir(e), 0;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Ir(e, r, n) {
        if (w) return Vn(17, 1, e, r, n);
        lr.varargs = n;
        try {
          var t = lr.getStr(e),
            o = lr.get();
          return cr.open(t, r, o).fd;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Br(e, r, n) {
        if (w) return Vn(18, 1, e, r, n);
        lr.varargs = n;
        try {
          var t = lr.getStreamFromFD(e);
          switch (r) {
            case 21509:
            case 21505:
              return t.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
              return t.tty ? 0 : -59;
            case 21519:
              if (!t.tty) return -59;
              var o = lr.get();
              return (a()[o >> 2] = 0), 0;
            case 21520:
              return t.tty ? -28 : -59;
            case 21531:
              o = lr.get();
              return cr.ioctl(t, r, o);
            case 21523:
            case 21524:
              return t.tty ? 0 : -59;
            default:
              Ne("bad ioctl syscall " + r);
          }
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function jr(e, r) {
        if (w) return Vn(19, 1, e, r);
        try {
          return (
            Cr(r, 0, 136),
            (a()[r >> 2] = 1),
            (a()[(r + 4) >> 2] = 2),
            (a()[(r + 8) >> 2] = 3),
            (a()[(r + 12) >> 2] = 4),
            0
          );
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      function Ur(e, r) {
        if (w) return Vn(20, 1, e, r);
        try {
          return (function (e, r) {
            if (-1 === e || 0 === r) return -28;
            var n = lr.mappings[e];
            if (!n) return 0;
            if (r === n.len) {
              var t = cr.getStream(n.fd);
              lr.doMsync(e, t, r, n.flags, n.offset),
                cr.munmap(t),
                (lr.mappings[e] = null),
                n.allocated && go(n.malloc);
            }
            return 0;
          })(e, r);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
          );
        }
      }
      var zr = xe;
      function Hr(e, r) {
        if (
          ((qr.mainLoop.timingMode = e),
          (qr.mainLoop.timingValue = r),
          !qr.mainLoop.func)
        )
          return 1;
        if (0 == e)
          (qr.mainLoop.scheduler = function () {
            var e = 0 | Math.max(0, qr.mainLoop.tickStartTime + r - $e());
            setTimeout(qr.mainLoop.runner, e);
          }),
            (qr.mainLoop.method = "timeout");
        else if (1 == e)
          (qr.mainLoop.scheduler = function () {
            qr.requestAnimationFrame(qr.mainLoop.runner);
          }),
            (qr.mainLoop.method = "rAF");
        else if (2 == e) {
          if ("undefined" == typeof setImmediate) {
            var n = [];
            addEventListener(
              "message",
              function (e) {
                ("setimmediate" !== e.data &&
                  "setimmediate" !== e.data.target) ||
                  (e.stopPropagation(), n.shift()());
              },
              !0
            ),
              (setImmediate = function (e) {
                n.push(e),
                  E
                    ? (void 0 === l.setImmediates && (l.setImmediates = []),
                      l.setImmediates.push(e),
                      postMessage({ target: "setimmediate" }))
                    : postMessage("setimmediate", "*");
              });
          }
          (qr.mainLoop.scheduler = function () {
            setImmediate(qr.mainLoop.runner);
          }),
            (qr.mainLoop.method = "immediate");
        }
        return 0;
      }
      var qr = {
          mainLoop: {
            scheduler: null,
            method: "",
            currentlyRunningMainloop: 0,
            func: null,
            arg: 0,
            timingMode: 0,
            timingValue: 0,
            currentFrameNumber: 0,
            queue: [],
            pause: function () {
              (qr.mainLoop.scheduler = null),
                qr.mainLoop.currentlyRunningMainloop++;
            },
            resume: function () {
              qr.mainLoop.currentlyRunningMainloop++;
              var e = qr.mainLoop.timingMode,
                r = qr.mainLoop.timingValue,
                n = qr.mainLoop.func;
              (qr.mainLoop.func = null),
                (function (e, r, n, t, o) {
                  var i;
                  (B = !0),
                    Q(
                      !qr.mainLoop.func,
                      "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
                    ),
                    (qr.mainLoop.func = e),
                    (qr.mainLoop.arg = t),
                    (i =
                      void 0 !== t
                        ? function () {
                            l.dynCall_vi(e, t);
                          }
                        : function () {
                            l.dynCall_v(e);
                          });
                  var a = qr.mainLoop.currentlyRunningMainloop;
                  if (
                    ((qr.mainLoop.runner = function () {
                      if (!V)
                        if (qr.mainLoop.queue.length > 0) {
                          var e = Date.now(),
                            r = qr.mainLoop.queue.shift();
                          if ((r.func(r.arg), qr.mainLoop.remainingBlockers)) {
                            var n = qr.mainLoop.remainingBlockers,
                              t = n % 1 == 0 ? n - 1 : Math.floor(n);
                            r.counted
                              ? (qr.mainLoop.remainingBlockers = t)
                              : ((t += 0.5),
                                (qr.mainLoop.remainingBlockers =
                                  (8 * n + t) / 9));
                          }
                          if (
                            (console.log(
                              'main loop blocker "' +
                                r.name +
                                '" took ' +
                                (Date.now() - e) +
                                " ms"
                            ),
                            qr.mainLoop.updateStatus(),
                            a < qr.mainLoop.currentlyRunningMainloop)
                          )
                            return;
                          setTimeout(qr.mainLoop.runner, 0);
                        } else
                          a < qr.mainLoop.currentlyRunningMainloop ||
                            ((qr.mainLoop.currentFrameNumber =
                              (qr.mainLoop.currentFrameNumber + 1) | 0),
                            1 == qr.mainLoop.timingMode &&
                            qr.mainLoop.timingValue > 1 &&
                            qr.mainLoop.currentFrameNumber %
                              qr.mainLoop.timingValue !=
                              0
                              ? qr.mainLoop.scheduler()
                              : (0 == qr.mainLoop.timingMode &&
                                  (qr.mainLoop.tickStartTime = $e()),
                                qr.mainLoop.runIter(i),
                                a < qr.mainLoop.currentlyRunningMainloop ||
                                  ("object" == typeof SDL &&
                                    SDL.audio &&
                                    SDL.audio.queueNewAudioData &&
                                    SDL.audio.queueNewAudioData(),
                                  qr.mainLoop.scheduler())));
                    }),
                    o ||
                      (r && r > 0 ? Hr(0, 1e3 / r) : Hr(1, 1),
                      qr.mainLoop.scheduler()),
                    n)
                  )
                    throw "unwind";
                })(n, 0, !1, qr.mainLoop.arg, !0),
                Hr(e, r),
                qr.mainLoop.scheduler();
            },
            updateStatus: function () {
              if (l.setStatus) {
                var e = l.statusMessage || "Please wait...",
                  r = qr.mainLoop.remainingBlockers,
                  n = qr.mainLoop.expectedBlockers;
                r
                  ? r < n
                    ? l.setStatus(e + " (" + (n - r) + "/" + n + ")")
                    : l.setStatus(e)
                  : l.setStatus("");
              }
            },
            runIter: function (e) {
              if (!V) {
                if (l.preMainLoop) if (!1 === l.preMainLoop()) return;
                try {
                  e();
                } catch (e) {
                  if (e instanceof $o) return;
                  throw (
                    (e &&
                      "object" == typeof e &&
                      e.stack &&
                      F("exception thrown: " + [e, e.stack]),
                    e)
                  );
                }
                l.postMainLoop && l.postMainLoop();
              }
            },
          },
          isFullscreen: !1,
          pointerLock: !1,
          moduleContextCreatedCallbacks: [],
          workers: [],
          init: function () {
            if ((l.preloadPlugins || (l.preloadPlugins = []), !qr.initted)) {
              qr.initted = !0;
              try {
                new Blob(), (qr.hasBlobConstructor = !0);
              } catch (e) {
                (qr.hasBlobConstructor = !1),
                  console.log(
                    "warning: no blob constructor, cannot create blobs with mimetypes"
                  );
              }
              (qr.BlobBuilder =
                "undefined" != typeof MozBlobBuilder
                  ? MozBlobBuilder
                  : "undefined" != typeof WebKitBlobBuilder
                  ? WebKitBlobBuilder
                  : qr.hasBlobConstructor
                  ? null
                  : console.log("warning: no BlobBuilder")),
                (qr.URLObject =
                  "undefined" != typeof window
                    ? window.URL
                      ? window.URL
                      : window.webkitURL
                    : void 0),
                l.noImageDecoding ||
                  void 0 !== qr.URLObject ||
                  (console.log(
                    "warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."
                  ),
                  (l.noImageDecoding = !0));
              var e = {
                canHandle: function (e) {
                  return !l.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e);
                },
                handle: function (e, r, n, t) {
                  var o = null;
                  if (qr.hasBlobConstructor)
                    try {
                      (o = new Blob([e], { type: qr.getMimetype(r) })).size !==
                        e.length &&
                        (o = new Blob([new Uint8Array(e).buffer], {
                          type: qr.getMimetype(r),
                        }));
                    } catch (e) {
                      O(
                        "Blob constructor present but fails: " +
                          e +
                          "; falling back to blob builder"
                      );
                    }
                  if (!o) {
                    var i = new qr.BlobBuilder();
                    i.append(new Uint8Array(e).buffer), (o = i.getBlob());
                  }
                  var a = qr.URLObject.createObjectURL(o),
                    u = new Image();
                  (u.onload = function () {
                    Q(u.complete, "Image " + r + " could not be decoded");
                    var t = document.createElement("canvas");
                    (t.width = u.width),
                      (t.height = u.height),
                      t.getContext("2d").drawImage(u, 0, 0),
                      (l.preloadedImages[r] = t),
                      qr.URLObject.revokeObjectURL(a),
                      n && n(e);
                  }),
                    (u.onerror = function (e) {
                      console.log("Image " + a + " could not be decoded"),
                        t && t();
                    }),
                    (u.src = a);
                },
              };
              l.preloadPlugins.push(e);
              var r = {
                canHandle: function (e) {
                  return (
                    !l.noAudioDecoding &&
                    e.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
                  );
                },
                handle: function (e, r, n, t) {
                  var o = !1;
                  function i(t) {
                    o || ((o = !0), (l.preloadedAudios[r] = t), n && n(e));
                  }
                  function a() {
                    o ||
                      ((o = !0),
                      (l.preloadedAudios[r] = new Audio()),
                      t && t());
                  }
                  if (!qr.hasBlobConstructor) return a();
                  try {
                    var u = new Blob([e], { type: qr.getMimetype(r) });
                  } catch (e) {
                    return a();
                  }
                  var s = qr.URLObject.createObjectURL(u),
                    c = new Audio();
                  c.addEventListener(
                    "canplaythrough",
                    function () {
                      i(c);
                    },
                    !1
                  ),
                    (c.onerror = function (n) {
                      o ||
                        (console.log(
                          "warning: browser could not fully decode audio " +
                            r +
                            ", trying slower base64 approach"
                        ),
                        (c.src =
                          "data:audio/x-" +
                          r.substr(-3) +
                          ";base64," +
                          (function (e) {
                            for (
                              var r =
                                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                n = "",
                                t = 0,
                                o = 0,
                                i = 0;
                              i < e.length;
                              i++
                            )
                              for (t = (t << 8) | e[i], o += 8; o >= 6; ) {
                                var a = (t >> (o - 6)) & 63;
                                (o -= 6), (n += r[a]);
                              }
                            return (
                              2 == o
                                ? ((n += r[(3 & t) << 4]), (n += "=="))
                                : 4 == o &&
                                  ((n += r[(15 & t) << 2]), (n += "=")),
                              n
                            );
                          })(e)),
                        i(c));
                    }),
                    (c.src = s),
                    qr.safeSetTimeout(function () {
                      i(c);
                    }, 1e4);
                },
              };
              l.preloadPlugins.push(r);
              var n = l.canvas;
              n &&
                ((n.requestPointerLock =
                  n.requestPointerLock ||
                  n.mozRequestPointerLock ||
                  n.webkitRequestPointerLock ||
                  n.msRequestPointerLock ||
                  function () {}),
                (n.exitPointerLock =
                  document.exitPointerLock ||
                  document.mozExitPointerLock ||
                  document.webkitExitPointerLock ||
                  document.msExitPointerLock ||
                  function () {}),
                (n.exitPointerLock = n.exitPointerLock.bind(document)),
                document.addEventListener("pointerlockchange", t, !1),
                document.addEventListener("mozpointerlockchange", t, !1),
                document.addEventListener("webkitpointerlockchange", t, !1),
                document.addEventListener("mspointerlockchange", t, !1),
                l.elementPointerLock &&
                  n.addEventListener(
                    "click",
                    function (e) {
                      !qr.pointerLock &&
                        l.canvas.requestPointerLock &&
                        (l.canvas.requestPointerLock(), e.preventDefault());
                    },
                    !1
                  ));
            }
            function t() {
              qr.pointerLock =
                document.pointerLockElement === l.canvas ||
                document.mozPointerLockElement === l.canvas ||
                document.webkitPointerLockElement === l.canvas ||
                document.msPointerLockElement === l.canvas;
            }
          },
          createContext: function (e, r, n, t) {
            if (r && l.ctx && e == l.canvas) return l.ctx;
            var o, i;
            if (r) {
              var a = { antialias: !1, alpha: !1, majorVersion: 1 };
              if (t) for (var u in t) a[u] = t[u];
              void 0 !== Yr &&
                (i = Yr.createContext(e, a)) &&
                (o = Yr.getContext(i).GLctx);
            } else o = e.getContext("2d");
            return o
              ? (n &&
                  (r ||
                    Q(
                      void 0 === to,
                      "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"
                    ),
                  (l.ctx = o),
                  r && Yr.makeContextCurrent(i),
                  (l.useWebGL = r),
                  qr.moduleContextCreatedCallbacks.forEach(function (e) {
                    e();
                  }),
                  qr.init()),
                o)
              : null;
          },
          destroyContext: function (e, r, n) {},
          fullscreenHandlersInstalled: !1,
          lockPointer: void 0,
          resizeCanvas: void 0,
          requestFullscreen: function (e, r) {
            (qr.lockPointer = e),
              (qr.resizeCanvas = r),
              void 0 === qr.lockPointer && (qr.lockPointer = !0),
              void 0 === qr.resizeCanvas && (qr.resizeCanvas = !1);
            var n = l.canvas;
            function t() {
              qr.isFullscreen = !1;
              var e = n.parentNode;
              (document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement ||
                document.webkitFullscreenElement ||
                document.webkitCurrentFullScreenElement) === e
                ? ((n.exitFullscreen = qr.exitFullscreen),
                  qr.lockPointer && n.requestPointerLock(),
                  (qr.isFullscreen = !0),
                  qr.resizeCanvas
                    ? qr.setFullscreenCanvasSize()
                    : qr.updateCanvasDimensions(n))
                : (e.parentNode.insertBefore(n, e),
                  e.parentNode.removeChild(e),
                  qr.resizeCanvas
                    ? qr.setWindowedCanvasSize()
                    : qr.updateCanvasDimensions(n)),
                l.onFullScreen && l.onFullScreen(qr.isFullscreen),
                l.onFullscreen && l.onFullscreen(qr.isFullscreen);
            }
            qr.fullscreenHandlersInstalled ||
              ((qr.fullscreenHandlersInstalled = !0),
              document.addEventListener("fullscreenchange", t, !1),
              document.addEventListener("mozfullscreenchange", t, !1),
              document.addEventListener("webkitfullscreenchange", t, !1),
              document.addEventListener("MSFullscreenChange", t, !1));
            var o = document.createElement("div");
            n.parentNode.insertBefore(o, n),
              o.appendChild(n),
              (o.requestFullscreen =
                o.requestFullscreen ||
                o.mozRequestFullScreen ||
                o.msRequestFullscreen ||
                (o.webkitRequestFullscreen
                  ? function () {
                      o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                  : null) ||
                (o.webkitRequestFullScreen
                  ? function () {
                      o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                  : null)),
              o.requestFullscreen();
          },
          exitFullscreen: function () {
            return (
              !!qr.isFullscreen &&
              ((
                document.exitFullscreen ||
                document.cancelFullScreen ||
                document.mozCancelFullScreen ||
                document.msExitFullscreen ||
                document.webkitCancelFullScreen ||
                function () {}
              ).apply(document, []),
              !0)
            );
          },
          nextRAF: 0,
          fakeRequestAnimationFrame: function (e) {
            var r = Date.now();
            if (0 === qr.nextRAF) qr.nextRAF = r + 1e3 / 60;
            else for (; r + 2 >= qr.nextRAF; ) qr.nextRAF += 1e3 / 60;
            var n = Math.max(qr.nextRAF - r, 0);
            setTimeout(e, n);
          },
          requestAnimationFrame: function (e) {
            "function" != typeof requestAnimationFrame
              ? (0, qr.fakeRequestAnimationFrame)(e)
              : requestAnimationFrame(e);
          },
          safeCallback: function (e) {
            return function () {
              if (!V) return e.apply(null, arguments);
            };
          },
          allowAsyncCallbacks: !0,
          queuedAsyncCallbacks: [],
          pauseAsyncCallbacks: function () {
            qr.allowAsyncCallbacks = !1;
          },
          resumeAsyncCallbacks: function () {
            if (
              ((qr.allowAsyncCallbacks = !0),
              qr.queuedAsyncCallbacks.length > 0)
            ) {
              var e = qr.queuedAsyncCallbacks;
              (qr.queuedAsyncCallbacks = []),
                e.forEach(function (e) {
                  e();
                });
            }
          },
          safeRequestAnimationFrame: function (e) {
            return qr.requestAnimationFrame(function () {
              V ||
                (qr.allowAsyncCallbacks
                  ? e()
                  : qr.queuedAsyncCallbacks.push(e));
            });
          },
          safeSetTimeout: function (e, r) {
            return (
              (B = !0),
              setTimeout(function () {
                V ||
                  (qr.allowAsyncCallbacks
                    ? e()
                    : qr.queuedAsyncCallbacks.push(e));
              }, r)
            );
          },
          safeSetInterval: function (e, r) {
            return (
              (B = !0),
              setInterval(function () {
                V || (qr.allowAsyncCallbacks && e());
              }, r)
            );
          },
          getMimetype: function (e) {
            return {
              jpg: "image/jpeg",
              jpeg: "image/jpeg",
              png: "image/png",
              bmp: "image/bmp",
              ogg: "audio/ogg",
              wav: "audio/wav",
              mp3: "audio/mpeg",
            }[e.substr(e.lastIndexOf(".") + 1)];
          },
          getUserMedia: function (e) {
            window.getUserMedia ||
              (window.getUserMedia =
                navigator.getUserMedia || navigator.mozGetUserMedia),
              window.getUserMedia(e);
          },
          getMovementX: function (e) {
            return e.movementX || e.mozMovementX || e.webkitMovementX || 0;
          },
          getMovementY: function (e) {
            return e.movementY || e.mozMovementY || e.webkitMovementY || 0;
          },
          getMouseWheelDelta: function (e) {
            var r = 0;
            switch (e.type) {
              case "DOMMouseScroll":
                r = e.detail / 3;
                break;
              case "mousewheel":
                r = e.wheelDelta / 120;
                break;
              case "wheel":
                switch (((r = e.deltaY), e.deltaMode)) {
                  case 0:
                    r /= 100;
                    break;
                  case 1:
                    r /= 3;
                    break;
                  case 2:
                    r *= 80;
                    break;
                  default:
                    throw "unrecognized mouse wheel delta mode: " + e.deltaMode;
                }
                break;
              default:
                throw "unrecognized mouse wheel event: " + e.type;
            }
            return r;
          },
          mouseX: 0,
          mouseY: 0,
          mouseMovementX: 0,
          mouseMovementY: 0,
          touches: {},
          lastTouches: {},
          calculateMouseEvent: function (e) {
            if (qr.pointerLock)
              "mousemove" != e.type && "mozMovementX" in e
                ? (qr.mouseMovementX = qr.mouseMovementY = 0)
                : ((qr.mouseMovementX = qr.getMovementX(e)),
                  (qr.mouseMovementY = qr.getMovementY(e))),
                "undefined" != typeof SDL
                  ? ((qr.mouseX = SDL.mouseX + qr.mouseMovementX),
                    (qr.mouseY = SDL.mouseY + qr.mouseMovementY))
                  : ((qr.mouseX += qr.mouseMovementX),
                    (qr.mouseY += qr.mouseMovementY));
            else {
              var r = l.canvas.getBoundingClientRect(),
                n = l.canvas.width,
                t = l.canvas.height,
                o =
                  void 0 !== window.scrollX
                    ? window.scrollX
                    : window.pageXOffset,
                i =
                  void 0 !== window.scrollY
                    ? window.scrollY
                    : window.pageYOffset;
              if (
                "touchstart" === e.type ||
                "touchend" === e.type ||
                "touchmove" === e.type
              ) {
                var a = e.touch;
                if (void 0 === a) return;
                var u = a.pageX - (o + r.left),
                  s = a.pageY - (i + r.top),
                  c = { x: (u *= n / r.width), y: (s *= t / r.height) };
                if ("touchstart" === e.type)
                  (qr.lastTouches[a.identifier] = c),
                    (qr.touches[a.identifier] = c);
                else if ("touchend" === e.type || "touchmove" === e.type) {
                  var f = qr.touches[a.identifier];
                  f || (f = c),
                    (qr.lastTouches[a.identifier] = f),
                    (qr.touches[a.identifier] = c);
                }
                return;
              }
              var d = e.pageX - (o + r.left),
                m = e.pageY - (i + r.top);
              (d *= n / r.width),
                (m *= t / r.height),
                (qr.mouseMovementX = d - qr.mouseX),
                (qr.mouseMovementY = m - qr.mouseY),
                (qr.mouseX = d),
                (qr.mouseY = m);
            }
          },
          asyncLoad: function (e, r, n, t) {
            var o = t ? "" : Me("al " + e);
            k(
              e,
              function (n) {
                Q(n, 'Loading data file "' + e + '" failed (no arrayBuffer).'),
                  r(new Uint8Array(n)),
                  o && Oe();
              },
              function (r) {
                if (!n) throw 'Loading data file "' + e + '" failed.';
                n();
              }
            ),
              o && Re();
          },
          resizeListeners: [],
          updateResizeListeners: function () {
            var e = l.canvas;
            qr.resizeListeners.forEach(function (r) {
              r(e.width, e.height);
            });
          },
          setCanvasSize: function (e, r, n) {
            var t = l.canvas;
            qr.updateCanvasDimensions(t, e, r), n || qr.updateResizeListeners();
          },
          windowedWidth: 0,
          windowedHeight: 0,
          setFullscreenCanvasSize: function () {
            if ("undefined" != typeof SDL) {
              var e = u()[SDL.screen >> 2];
              (e |= 8388608), (a()[SDL.screen >> 2] = e);
            }
            qr.updateCanvasDimensions(l.canvas), qr.updateResizeListeners();
          },
          setWindowedCanvasSize: function () {
            if ("undefined" != typeof SDL) {
              var e = u()[SDL.screen >> 2];
              (e &= -8388609), (a()[SDL.screen >> 2] = e);
            }
            qr.updateCanvasDimensions(l.canvas), qr.updateResizeListeners();
          },
          updateCanvasDimensions: function (e, r, n) {
            r && n
              ? ((e.widthNative = r), (e.heightNative = n))
              : ((r = e.widthNative), (n = e.heightNative));
            var t = r,
              o = n;
            if (
              (l.forcedAspectRatio &&
                l.forcedAspectRatio > 0 &&
                (t / o < l.forcedAspectRatio
                  ? (t = Math.round(o * l.forcedAspectRatio))
                  : (o = Math.round(t / l.forcedAspectRatio))),
              (document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement ||
                document.webkitFullscreenElement ||
                document.webkitCurrentFullScreenElement) === e.parentNode &&
                "undefined" != typeof screen)
            ) {
              var i = Math.min(screen.width / t, screen.height / o);
              (t = Math.round(t * i)), (o = Math.round(o * i));
            }
            qr.resizeCanvas
              ? (e.width != t && (e.width = t),
                e.height != o && (e.height = o),
                void 0 !== e.style &&
                  (e.style.removeProperty("width"),
                  e.style.removeProperty("height")))
              : (e.width != r && (e.width = r),
                e.height != n && (e.height = n),
                void 0 !== e.style &&
                  (t != r || o != n
                    ? (e.style.setProperty("width", t + "px", "important"),
                      e.style.setProperty("height", o + "px", "important"))
                    : (e.style.removeProperty("width"),
                      e.style.removeProperty("height"))));
          },
          wgetRequests: {},
          nextWgetRequestHandle: 0,
          getNextWgetRequestHandle: function () {
            var e = qr.nextWgetRequestHandle;
            return qr.nextWgetRequestHandle++, e;
          },
        },
        Wr = {
          errorCode: 12288,
          defaultDisplayInitialized: !1,
          currentContext: 0,
          currentReadSurface: 0,
          currentDrawSurface: 0,
          contextAttributes: {
            alpha: !1,
            depth: !1,
            stencil: !1,
            antialias: !1,
          },
          stringCache: {},
          setErrorCode: function (e) {
            Wr.errorCode = e;
          },
          chooseConfig: function (e, r, n, t, o) {
            if (62e3 != e) return Wr.setErrorCode(12296), 0;
            if (r)
              for (;;) {
                var i = a()[r >> 2];
                if (12321 == i) {
                  var u = a()[(r + 4) >> 2];
                  Wr.contextAttributes.alpha = u > 0;
                } else if (12325 == i) {
                  var s = a()[(r + 4) >> 2];
                  Wr.contextAttributes.depth = s > 0;
                } else if (12326 == i) {
                  var c = a()[(r + 4) >> 2];
                  Wr.contextAttributes.stencil = c > 0;
                } else if (12337 == i) {
                  var l = a()[(r + 4) >> 2];
                  Wr.contextAttributes.antialias = l > 0;
                } else if (12338 == i) {
                  l = a()[(r + 4) >> 2];
                  Wr.contextAttributes.antialias = 1 == l;
                } else if (12544 == i) {
                  var f = a()[(r + 4) >> 2];
                  Wr.contextAttributes.lowLatency = 12547 != f;
                } else if (12344 == i) break;
                r += 8;
              }
            return (n && t) || o
              ? (o && (a()[o >> 2] = 1),
                n && t > 0 && (a()[n >> 2] = 62002),
                Wr.setErrorCode(12288),
                1)
              : (Wr.setErrorCode(12300), 0);
          },
        };
      function Gr(e) {
        return w
          ? Vn(21, 1, e)
          : 12448 == e
          ? (Wr.setErrorCode(12288), 1)
          : (Wr.setErrorCode(12300), 0);
      }
      function Xr(e, r, n, t, o) {
        return w ? Vn(22, 1, e, r, n, t, o) : Wr.chooseConfig(e, r, n, t, o);
      }
      var Yr = {
        counter: 1,
        lastError: 0,
        buffers: [],
        mappedBuffers: {},
        programs: [],
        framebuffers: [],
        renderbuffers: [],
        textures: [],
        uniforms: [],
        shaders: [],
        vaos: [],
        contexts: {},
        currentContext: null,
        offscreenCanvases: {},
        timerQueriesEXT: [],
        programInfos: {},
        stringCache: {},
        unpackAlignment: 4,
        init: function () {
          for (
            var e = new Float32Array(Yr.MINI_TEMP_BUFFER_SIZE), r = 0;
            r < Yr.MINI_TEMP_BUFFER_SIZE;
            r++
          )
            Yr.miniTempBufferFloatViews[r] = e.subarray(0, r + 1);
          var n = new Int32Array(Yr.MINI_TEMP_BUFFER_SIZE);
          for (r = 0; r < Yr.MINI_TEMP_BUFFER_SIZE; r++)
            Yr.miniTempBufferIntViews[r] = n.subarray(0, r + 1);
        },
        recordError: function (e) {
          Yr.lastError || (Yr.lastError = e);
        },
        getNewId: function (e) {
          for (var r = Yr.counter++, n = e.length; n < r; n++) e[n] = null;
          return r;
        },
        MINI_TEMP_BUFFER_SIZE: 256,
        miniTempBufferFloatViews: [0],
        miniTempBufferIntViews: [0],
        getSource: function (e, r, n, t) {
          for (var o = "", i = 0; i < r; ++i) {
            var u = t ? a()[(t + 4 * i) >> 2] : -1;
            o += $(a()[(n + 4 * i) >> 2], u < 0 ? void 0 : u);
          }
          return o;
        },
        createContext: function (e, r) {
          var n = e.getContext("webgl", r);
          return n ? Yr.registerContext(n, r) : 0;
        },
        registerContext: function (e, r) {
          var n = yo(8);
          a()[(n + 4) >> 2] = Qt();
          var t = {
            handle: n,
            attributes: r,
            version: r.majorVersion,
            GLctx: e,
          };
          return (
            e.canvas && (e.canvas.GLctxObject = t),
            (Yr.contexts[n] = t),
            (void 0 === r.enableExtensionsByDefault ||
              r.enableExtensionsByDefault) &&
              Yr.initExtensions(t),
            n
          );
        },
        makeContextCurrent: function (e) {
          return (
            (Yr.currentContext = Yr.contexts[e]),
            (l.ctx = to = Yr.currentContext && Yr.currentContext.GLctx),
            !(e && !to)
          );
        },
        getContext: function (e) {
          return Yr.contexts[e];
        },
        deleteContext: function (e) {
          Yr.currentContext === Yr.contexts[e] && (Yr.currentContext = null),
            "object" == typeof dn &&
              dn.removeAllHandlersOnTarget(Yr.contexts[e].GLctx.canvas),
            Yr.contexts[e] &&
              Yr.contexts[e].GLctx.canvas &&
              (Yr.contexts[e].GLctx.canvas.GLctxObject = void 0),
            go(Yr.contexts[e].handle),
            (Yr.contexts[e] = null);
        },
        initExtensions: function (e) {
          if ((e || (e = Yr.currentContext), !e.initExtensionsDone)) {
            e.initExtensionsDone = !0;
            var r,
              n,
              t = e.GLctx;
            e.version < 2 &&
              ((n = (r = t).getExtension("ANGLE_instanced_arrays")) &&
                ((r.vertexAttribDivisor = function (e, r) {
                  n.vertexAttribDivisorANGLE(e, r);
                }),
                (r.drawArraysInstanced = function (e, r, t, o) {
                  n.drawArraysInstancedANGLE(e, r, t, o);
                }),
                (r.drawElementsInstanced = function (e, r, t, o, i) {
                  n.drawElementsInstancedANGLE(e, r, t, o, i);
                })),
              (function (e) {
                var r = e.getExtension("OES_vertex_array_object");
                r &&
                  ((e.createVertexArray = function () {
                    return r.createVertexArrayOES();
                  }),
                  (e.deleteVertexArray = function (e) {
                    r.deleteVertexArrayOES(e);
                  }),
                  (e.bindVertexArray = function (e) {
                    r.bindVertexArrayOES(e);
                  }),
                  (e.isVertexArray = function (e) {
                    return r.isVertexArrayOES(e);
                  }));
              })(t),
              (function (e) {
                var r = e.getExtension("WEBGL_draw_buffers");
                r &&
                  (e.drawBuffers = function (e, n) {
                    r.drawBuffersWEBGL(e, n);
                  });
              })(t)),
              (t.disjointTimerQueryExt = t.getExtension(
                "EXT_disjoint_timer_query"
              ));
            var o = [
              "OES_texture_float",
              "OES_texture_half_float",
              "OES_standard_derivatives",
              "OES_vertex_array_object",
              "WEBGL_compressed_texture_s3tc",
              "WEBGL_depth_texture",
              "OES_element_index_uint",
              "EXT_texture_filter_anisotropic",
              "EXT_frag_depth",
              "WEBGL_draw_buffers",
              "ANGLE_instanced_arrays",
              "OES_texture_float_linear",
              "OES_texture_half_float_linear",
              "EXT_blend_minmax",
              "EXT_shader_texture_lod",
              "EXT_texture_norm16",
              "WEBGL_compressed_texture_pvrtc",
              "EXT_color_buffer_half_float",
              "WEBGL_color_buffer_float",
              "EXT_sRGB",
              "WEBGL_compressed_texture_etc1",
              "EXT_disjoint_timer_query",
              "WEBGL_compressed_texture_etc",
              "WEBGL_compressed_texture_astc",
              "EXT_color_buffer_float",
              "WEBGL_compressed_texture_s3tc_srgb",
              "EXT_disjoint_timer_query_webgl2",
              "WEBKIT_WEBGL_compressed_texture_pvrtc",
            ];
            (t.getSupportedExtensions() || []).forEach(function (e) {
              -1 != o.indexOf(e) && t.getExtension(e);
            });
          }
        },
        populateUniformTable: function (e) {
          for (
            var r = Yr.programs[e],
              n = (Yr.programInfos[e] = {
                uniforms: {},
                maxUniformLength: 0,
                maxAttributeLength: -1,
                maxUniformBlockNameLength: -1,
              }),
              t = n.uniforms,
              o = to.getProgramParameter(r, 35718),
              i = 0;
            i < o;
            ++i
          ) {
            var a = to.getActiveUniform(r, i),
              u = a.name;
            (n.maxUniformLength = Math.max(n.maxUniformLength, u.length + 1)),
              "]" == u.slice(-1) && (u = u.slice(0, u.lastIndexOf("[")));
            var s = to.getUniformLocation(r, u);
            if (s) {
              var c = Yr.getNewId(Yr.uniforms);
              (t[u] = [a.size, c]), (Yr.uniforms[c] = s);
              for (var l = 1; l < a.size; ++l) {
                var f = u + "[" + l + "]";
                (s = to.getUniformLocation(r, f)),
                  (c = Yr.getNewId(Yr.uniforms)),
                  (Yr.uniforms[c] = s);
              }
            }
          }
        },
      };
      function Vr(e, r, n, t) {
        if (w) return Vn(23, 1, e, r, n, t);
        if (62e3 != e) return Wr.setErrorCode(12296), 0;
        for (var o = 1; ; ) {
          var i = a()[t >> 2];
          if (12440 != i) {
            if (12344 == i) break;
            return Wr.setErrorCode(12292), 0;
          }
          (o = a()[(t + 4) >> 2]), (t += 8);
        }
        return 2 != o
          ? (Wr.setErrorCode(12293), 0)
          : ((Wr.contextAttributes.majorVersion = o - 1),
            (Wr.contextAttributes.minorVersion = 0),
            (Wr.context = Yr.createContext(l.canvas, Wr.contextAttributes)),
            0 != Wr.context
              ? (Wr.setErrorCode(12288),
                Yr.makeContextCurrent(Wr.context),
                (l.useWebGL = !0),
                qr.moduleContextCreatedCallbacks.forEach(function (e) {
                  e();
                }),
                Yr.makeContextCurrent(null),
                62004)
              : (Wr.setErrorCode(12297), 0));
      }
      function Qr(e, r, n, t) {
        return w
          ? Vn(24, 1, e, r, n, t)
          : 62e3 != e
          ? (Wr.setErrorCode(12296), 0)
          : 62002 != r
          ? (Wr.setErrorCode(12293), 0)
          : (Wr.setErrorCode(12288), 62006);
      }
      function Kr(e, r) {
        return w
          ? Vn(25, 1, e, r)
          : 62e3 != e
          ? (Wr.setErrorCode(12296), 0)
          : 62004 != r
          ? (Wr.setErrorCode(12294), 0)
          : (Yr.deleteContext(Wr.context),
            Wr.setErrorCode(12288),
            Wr.currentContext == r && (Wr.currentContext = 0),
            1);
      }
      function Zr(e, r) {
        return w
          ? Vn(26, 1, e, r)
          : 62e3 != e
          ? (Wr.setErrorCode(12296), 0)
          : 62006 != r
          ? (Wr.setErrorCode(12301), 1)
          : (Wr.currentReadSurface == r && (Wr.currentReadSurface = 0),
            Wr.currentDrawSurface == r && (Wr.currentDrawSurface = 0),
            Wr.setErrorCode(12288),
            1);
      }
      function Jr(e, r, n, t) {
        if (w) return Vn(27, 1, e, r, n, t);
        if (62e3 != e) return Wr.setErrorCode(12296), 0;
        if (62002 != r) return Wr.setErrorCode(12293), 0;
        if (!t) return Wr.setErrorCode(12300), 0;
        switch ((Wr.setErrorCode(12288), n)) {
          case 12320:
            return (a()[t >> 2] = Wr.contextAttributes.alpha ? 32 : 24), 1;
          case 12321:
            return (a()[t >> 2] = Wr.contextAttributes.alpha ? 8 : 0), 1;
          case 12322:
          case 12323:
          case 12324:
            return (a()[t >> 2] = 8), 1;
          case 12325:
            return (a()[t >> 2] = Wr.contextAttributes.depth ? 24 : 0), 1;
          case 12326:
            return (a()[t >> 2] = Wr.contextAttributes.stencil ? 8 : 0), 1;
          case 12327:
            return (a()[t >> 2] = 12344), 1;
          case 12328:
            return (a()[t >> 2] = 62002), 1;
          case 12329:
            return (a()[t >> 2] = 0), 1;
          case 12330:
            return (a()[t >> 2] = 4096), 1;
          case 12331:
            return (a()[t >> 2] = 16777216), 1;
          case 12332:
            return (a()[t >> 2] = 4096), 1;
          case 12333:
          case 12334:
            return (a()[t >> 2] = 0), 1;
          case 12335:
            return (a()[t >> 2] = 12344), 1;
          case 12337:
            return (a()[t >> 2] = Wr.contextAttributes.antialias ? 4 : 0), 1;
          case 12338:
            return (a()[t >> 2] = Wr.contextAttributes.antialias ? 1 : 0), 1;
          case 12339:
            return (a()[t >> 2] = 4), 1;
          case 12340:
            return (a()[t >> 2] = 12344), 1;
          case 12341:
          case 12342:
          case 12343:
            return (a()[t >> 2] = -1), 1;
          case 12345:
          case 12346:
          case 12347:
            return (a()[t >> 2] = 0), 1;
          case 12348:
            return (a()[t >> 2] = 1), 1;
          case 12349:
          case 12350:
            return (a()[t >> 2] = 0), 1;
          case 12351:
            return (a()[t >> 2] = 12430), 1;
          case 12352:
            return (a()[t >> 2] = 4), 1;
          case 12354:
            return (a()[t >> 2] = 0), 1;
          default:
            return Wr.setErrorCode(12292), 0;
        }
      }
      function $r(e) {
        return w ? Vn(28, 1, e) : (Wr.setErrorCode(12288), 62e3);
      }
      function en() {
        return w ? Vn(29, 1) : Wr.errorCode;
      }
      function rn(e) {
        return w ? Vn(30, 1, e) : xo(e);
      }
      function nn(e, r, n) {
        return w
          ? Vn(31, 1, e, r, n)
          : 62e3 == e
          ? (r && (a()[r >> 2] = 1),
            n && (a()[n >> 2] = 4),
            (Wr.defaultDisplayInitialized = !0),
            Wr.setErrorCode(12288),
            1)
          : (Wr.setErrorCode(12296), 0);
      }
      function tn(e, r, n, t) {
        return w
          ? Vn(32, 1, e, r, n, t)
          : 62e3 != e
          ? (Wr.setErrorCode(12296), 0)
          : 0 != t && 62004 != t
          ? (Wr.setErrorCode(12294), 0)
          : (0 != n && 62006 != n) || (0 != r && 62006 != r)
          ? (Wr.setErrorCode(12301), 0)
          : (Yr.makeContextCurrent(t ? Wr.context : null),
            (Wr.currentContext = t),
            (Wr.currentDrawSurface = r),
            (Wr.currentReadSurface = n),
            Wr.setErrorCode(12288),
            1);
      }
      function on(e, r) {
        if (w) return Vn(33, 1, e, r);
        if (62e3 != e) return Wr.setErrorCode(12296), 0;
        if ((Wr.setErrorCode(12288), Wr.stringCache[r]))
          return Wr.stringCache[r];
        var n;
        switch (r) {
          case 12371:
            n = te("Emscripten");
            break;
          case 12372:
            n = te("1.4 Emscripten EGL");
            break;
          case 12373:
            n = te("");
            break;
          case 12429:
            n = te("OpenGL_ES");
            break;
          default:
            return Wr.setErrorCode(12300), 0;
        }
        return (Wr.stringCache[r] = n), n;
      }
      function an() {
        if (w) return Vn(34, 1);
        if (Wr.defaultDisplayInitialized)
          if (l.ctx) {
            if (!l.ctx.isContextLost()) return Wr.setErrorCode(12288), 1;
            Wr.setErrorCode(12302);
          } else Wr.setErrorCode(12290);
        else Wr.setErrorCode(12289);
        return 0;
      }
      function un(e, r) {
        return w
          ? Vn(35, 1, e, r)
          : 62e3 != e
          ? (Wr.setErrorCode(12296), 0)
          : (0 == r ? Hr(0, 0) : Hr(1, r), Wr.setErrorCode(12288), 1);
      }
      function sn(e) {
        return w
          ? Vn(36, 1, e)
          : 62e3 != e
          ? (Wr.setErrorCode(12296), 0)
          : ((Wr.currentContext = 0),
            (Wr.currentReadSurface = 0),
            (Wr.currentDrawSurface = 0),
            (Wr.defaultDisplayInitialized = !1),
            Wr.setErrorCode(12288),
            1);
      }
      function cn() {
        return w ? Vn(37, 1) : (Wr.setErrorCode(12288), 1);
      }
      function ln(e) {
        return w ? Vn(38, 1, e) : (Wr.setErrorCode(12288), 1);
      }
      function fn() {
        _ ||
          w ||
          O(
            "Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"
          );
      }
      var dn = {
          keyEvent: 0,
          mouseEvent: 0,
          wheelEvent: 0,
          uiEvent: 0,
          focusEvent: 0,
          deviceOrientationEvent: 0,
          deviceMotionEvent: 0,
          fullscreenChangeEvent: 0,
          pointerlockChangeEvent: 0,
          visibilityChangeEvent: 0,
          touchEvent: 0,
          previousFullscreenElement: null,
          previousScreenX: null,
          previousScreenY: null,
          removeEventListenersRegistered: !1,
          removeAllEventListeners: function () {
            for (var e = dn.eventHandlers.length - 1; e >= 0; --e)
              dn._removeHandler(e);
            (dn.eventHandlers = []), (dn.deferredCalls = []);
          },
          registerRemoveEventListeners: function () {
            dn.removeEventListenersRegistered ||
              (Ce.push(dn.removeAllEventListeners),
              (dn.removeEventListenersRegistered = !0));
          },
          deferredCalls: [],
          deferCall: function (e, r, n) {
            function t(e, r) {
              if (e.length != r.length) return !1;
              for (var n in e) if (e[n] != r[n]) return !1;
              return !0;
            }
            for (var o in dn.deferredCalls) {
              var i = dn.deferredCalls[o];
              if (i.targetFunction == e && t(i.argsList, n)) return;
            }
            dn.deferredCalls.push({
              targetFunction: e,
              precedence: r,
              argsList: n,
            }),
              dn.deferredCalls.sort(function (e, r) {
                return e.precedence < r.precedence;
              });
          },
          removeDeferredCalls: function (e) {
            for (var r = 0; r < dn.deferredCalls.length; ++r)
              dn.deferredCalls[r].targetFunction == e &&
                (dn.deferredCalls.splice(r, 1), --r);
          },
          canPerformEventHandlerRequests: function () {
            return (
              dn.inEventHandler && dn.currentEventHandler.allowsDeferredCalls
            );
          },
          runDeferredCalls: function () {
            if (dn.canPerformEventHandlerRequests())
              for (var e = 0; e < dn.deferredCalls.length; ++e) {
                var r = dn.deferredCalls[e];
                dn.deferredCalls.splice(e, 1),
                  --e,
                  r.targetFunction.apply(null, r.argsList);
              }
          },
          inEventHandler: 0,
          currentEventHandler: null,
          eventHandlers: [],
          removeAllHandlersOnTarget: function (e, r) {
            for (var n = 0; n < dn.eventHandlers.length; ++n)
              dn.eventHandlers[n].target != e ||
                (r && r != dn.eventHandlers[n].eventTypeString) ||
                dn._removeHandler(n--);
          },
          _removeHandler: function (e) {
            var r = dn.eventHandlers[e];
            r.target.removeEventListener(
              r.eventTypeString,
              r.eventListenerFunc,
              r.useCapture
            ),
              dn.eventHandlers.splice(e, 1);
          },
          registerOrRemoveHandler: function (e) {
            var r = function (r) {
              ++dn.inEventHandler,
                (dn.currentEventHandler = e),
                dn.runDeferredCalls(),
                e.handlerFunc(r),
                dn.runDeferredCalls(),
                --dn.inEventHandler;
            };
            if (e.callbackfunc)
              (e.eventListenerFunc = r),
                e.target.addEventListener(e.eventTypeString, r, e.useCapture),
                dn.eventHandlers.push(e),
                dn.registerRemoveEventListeners();
            else
              for (var n = 0; n < dn.eventHandlers.length; ++n)
                dn.eventHandlers[n].target == e.target &&
                  dn.eventHandlers[n].eventTypeString == e.eventTypeString &&
                  dn._removeHandler(n--);
          },
          queueEventHandlerOnThread_iiii: function (e, r, n, t, o) {
            var i = Ko(),
              u = Zo(12);
            (a()[u >> 2] = n),
              (a()[(u + 4) >> 2] = t),
              (a()[(u + 8) >> 2] = o),
              Fo(e, 637534208, r, t, u),
              Jo(i);
          },
          getTargetThreadForEventCallback: function (e) {
            switch (e) {
              case 1:
                return 0;
              case 2:
                return er.currentProxiedOperationCallerThread;
              default:
                return e;
            }
          },
          getNodeNameForTarget: function (e) {
            return e
              ? e == window
                ? "#window"
                : e == screen
                ? "#screen"
                : e && e.nodeName
                ? e.nodeName
                : ""
              : "";
          },
          fullscreenEnabled: function () {
            return (
              document.fullscreenEnabled || document.webkitFullscreenEnabled
            );
          },
        },
        mn = {};
      var pn = [
        0,
        "undefined" != typeof document ? document : 0,
        "undefined" != typeof window ? window : 0,
      ];
      function vn(e) {
        var r;
        return (
          pn[e] ||
          ("undefined" != typeof document
            ? document.querySelector((r = e) === r + 0 ? $(r) : r)
            : void 0)
        );
      }
      function hn(e) {
        return vn(e);
      }
      function gn(e, r, n) {
        var t = hn(e);
        if (!t) return -4;
        if (t.canvasSharedPtr) {
          var o = a()[t.canvasSharedPtr >> 2],
            i = a()[(t.canvasSharedPtr + 4) >> 2];
          (a()[r >> 2] = o), (a()[n >> 2] = i);
        } else if (t.offscreenCanvas)
          (a()[r >> 2] = t.offscreenCanvas.width),
            (a()[n >> 2] = t.offscreenCanvas.height);
        else {
          if (t.controlTransferredOffscreen) return -4;
          (a()[r >> 2] = t.width), (a()[n >> 2] = t.height);
        }
        return 0;
      }
      function yn(e, r, n) {
        return w ? Vn(39, 1, e, r, n) : gn(e, r, n);
      }
      function En(e) {
        var r = Ko(),
          n = Zo(8),
          t = n + 4,
          o = Zo(e.id.length + 1);
        re(e.id, o, e.id.length + 1);
        !(function (e, r, n) {
          hn(e) ? gn(e, r, n) : yn(e, r, n);
        })(o, n, t);
        var i = [a()[n >> 2], a()[t >> 2]];
        return Jo(r), i;
      }
      function _n(e) {
        var r = ne(e) + 1,
          n = yo(r);
        return re(e, n, r), n;
      }
      function wn(e, r, n, t) {
        !(function (e, r, n, t) {
          var o = Ko(),
            i = Zo(12),
            u = 0;
          r && (u = _n(r)),
            (a()[i >> 2] = u),
            (a()[(i + 4) >> 2] = n),
            (a()[(i + 8) >> 2] = t),
            Fo(e, 657457152, 0, u, i),
            Jo(o);
        })(e, (r = r ? $(r) : ""), n, t);
      }
      function bn(e, r, n) {
        var t = hn(e);
        if (!t) return -4;
        if (
          (t.canvasSharedPtr &&
            ((a()[t.canvasSharedPtr >> 2] = r),
            (a()[(t.canvasSharedPtr + 4) >> 2] = n)),
          !t.offscreenCanvas && t.controlTransferredOffscreen)
        )
          return t.canvasSharedPtr
            ? (wn(a()[(t.canvasSharedPtr + 8) >> 2], e, r, n), 1)
            : -4;
        t.offscreenCanvas && (t = t.offscreenCanvas);
        var o = !1;
        if (t.GLctxObject && t.GLctxObject.GLctx) {
          var i = t.GLctxObject.GLctx.getParameter(2978);
          o = 0 === i[0] && 0 === i[1] && i[2] === t.width && i[3] === t.height;
        }
        return (
          (t.width = r),
          (t.height = n),
          o && t.GLctxObject.GLctx.viewport(0, 0, r, n),
          0
        );
      }
      function kn(e, r, n) {
        return w ? Vn(40, 1, e, r, n) : bn(e, r, n);
      }
      function Cn(e, r, n) {
        return hn(e) ? bn(e, r, n) : kn(e, r, n);
      }
      function Sn(e, r, n) {
        if (e.controlTransferredOffscreen) {
          var t = Ko(),
            o = Zo(e.id.length + 1);
          re(e.id, o, e.id.length + 1), Cn(o, r, n), Jo(t);
        } else (e.width = r), (e.height = n);
      }
      function xn(e, r, n) {
        (e.style.paddingLeft = e.style.paddingRight = n + "px"),
          (e.style.paddingTop = e.style.paddingBottom = r + "px");
      }
      function Tn(e) {
        return e.getBoundingClientRect();
      }
      function An(e, r) {
        var n = (function (e) {
            var r = En(e),
              n = r[0],
              t = r[1],
              o = e.style.width,
              i = e.style.height,
              a = e.style.backgroundColor,
              u = document.body.style.backgroundColor,
              s = e.style.paddingLeft,
              c = e.style.paddingRight,
              l = e.style.paddingTop,
              f = e.style.paddingBottom,
              d = e.style.marginLeft,
              m = e.style.marginRight,
              p = e.style.marginTop,
              v = e.style.marginBottom,
              h = document.body.style.margin,
              g = document.documentElement.style.overflow,
              y = document.body.scroll,
              E = e.style.imageRendering;
            function _() {
              document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement ||
                (document.removeEventListener("fullscreenchange", _),
                document.removeEventListener("webkitfullscreenchange", _),
                Sn(e, n, t),
                (e.style.width = o),
                (e.style.height = i),
                (e.style.backgroundColor = a),
                u || (document.body.style.backgroundColor = "white"),
                (document.body.style.backgroundColor = u),
                (e.style.paddingLeft = s),
                (e.style.paddingRight = c),
                (e.style.paddingTop = l),
                (e.style.paddingBottom = f),
                (e.style.marginLeft = d),
                (e.style.marginRight = m),
                (e.style.marginTop = p),
                (e.style.marginBottom = v),
                (document.body.style.margin = h),
                (document.documentElement.style.overflow = g),
                (document.body.scroll = y),
                (e.style.imageRendering = E),
                e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, n, t),
                mn.canvasResizedCallback &&
                  (mn.canvasResizedCallbackTargetThread
                    ? dn.queueEventHandlerOnThread_iiii(
                        mn.canvasResizedCallbackTargetThread,
                        mn.canvasResizedCallback,
                        37,
                        0,
                        mn.canvasResizedCallbackUserData
                      )
                    : Wo(
                        mn.canvasResizedCallback,
                        37,
                        0,
                        mn.canvasResizedCallbackUserData
                      )));
            }
            return (
              document.addEventListener("fullscreenchange", _),
              document.addEventListener("webkitfullscreenchange", _),
              _
            );
          })(e),
          t = r.softFullscreen ? innerWidth : screen.width,
          o = r.softFullscreen ? innerHeight : screen.height,
          i = Tn(e),
          a = i.width,
          u = i.height,
          s = En(e),
          c = s[0],
          l = s[1];
        if (3 == r.scaleMode) xn(e, (o - u) / 2, (t - a) / 2), (t = a), (o = u);
        else if (2 == r.scaleMode)
          if (t * l < c * o) {
            var f = (l * t) / c;
            xn(e, (o - f) / 2, 0), (o = f);
          } else {
            var d = (c * o) / l;
            xn(e, 0, (t - d) / 2), (t = d);
          }
        e.style.backgroundColor || (e.style.backgroundColor = "black"),
          document.body.style.backgroundColor ||
            (document.body.style.backgroundColor = "black"),
          (e.style.width = t + "px"),
          (e.style.height = o + "px"),
          1 == r.filteringMode &&
            ((e.style.imageRendering = "optimizeSpeed"),
            (e.style.imageRendering = "-moz-crisp-edges"),
            (e.style.imageRendering = "-o-crisp-edges"),
            (e.style.imageRendering = "-webkit-optimize-contrast"),
            (e.style.imageRendering = "optimize-contrast"),
            (e.style.imageRendering = "crisp-edges"),
            (e.style.imageRendering = "pixelated"));
        var m = 2 == r.canvasResolutionScaleMode ? devicePixelRatio : 1;
        if (0 != r.canvasResolutionScaleMode) {
          var p = (t * m) | 0,
            v = (o * m) | 0;
          Sn(e, p, v),
            e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, p, v);
        }
        return n;
      }
      function Dn(e, r) {
        if (
          ((0 == r.scaleMode && 0 == r.canvasResolutionScaleMode) || An(e, r),
          e.requestFullscreen)
        )
          e.requestFullscreen();
        else {
          if (!e.webkitRequestFullscreen)
            return dn.fullscreenEnabled() ? -3 : -1;
          e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        return (
          r.canvasResizedCallback &&
            (r.canvasResizedCallbackTargetThread
              ? dn.queueEventHandlerOnThread_iiii(
                  r.canvasResizedCallbackTargetThread,
                  r.canvasResizedCallback,
                  37,
                  0,
                  r.canvasResizedCallbackUserData
                )
              : Wo(
                  r.canvasResizedCallback,
                  37,
                  0,
                  r.canvasResizedCallbackUserData
                )),
          0
        );
      }
      function Ln() {
        if (w) return Vn(41, 1);
        if (!dn.fullscreenEnabled()) return -1;
        dn.removeDeferredCalls(Dn);
        var e = pn[1];
        if (e.exitFullscreen) e.fullscreenElement && e.exitFullscreen();
        else {
          if (!e.webkitExitFullscreen) return -1;
          e.webkitFullscreenElement && e.webkitExitFullscreen();
        }
        return 0;
      }
      function Pn(e) {
        if (e.requestPointerLock) e.requestPointerLock();
        else {
          if (!e.msRequestPointerLock)
            return document.body.requestPointerLock ||
              document.body.msRequestPointerLock
              ? -3
              : -1;
          e.msRequestPointerLock();
        }
        return 0;
      }
      function Fn() {
        if (w) return Vn(42, 1);
        if ((dn.removeDeferredCalls(Pn), document.exitPointerLock))
          document.exitPointerLock();
        else {
          if (!document.msExitPointerLock) return -1;
          document.msExitPointerLock();
        }
        return 0;
      }
      function Mn(e, r, t) {
        if (e <= 0 || e > n().length || !0 & e) return -28;
        if (E) {
          var o = Atomics.wait(a(), e >> 2, r, t);
          if ("timed-out" === o) return -73;
          if ("not-equal" === o) return -6;
          if ("ok" === o) return 0;
          throw "Atomics.wait returned an unexpected value " + o;
        }
        if (r != Atomics.load(a(), e >> 2)) return -6;
        var i = performance.now(),
          u = i + t;
        Atomics.store(a(), Qe >> 2, e);
        for (var s = e; e == s; ) {
          if ((i = performance.now()) > u) return -73;
          Ao(), (e = Atomics.load(a(), Qe >> 2));
        }
        return 0;
      }
      function Rn() {
        return w
          ? Vn(43, 1)
          : ("number" == typeof devicePixelRatio && devicePixelRatio) || 1;
      }
      function On(e, r, n) {
        if (w) return Vn(44, 1, e, r, n);
        if (!(e = vn(e))) return -4;
        var t = Tn(e);
        return (c()[r >> 3] = t.width), (c()[n >> 3] = t.height), 0;
      }
      function Nn(e, r) {
        c()[e >> 3] = r.timestamp;
        for (var n = 0; n < r.axes.length; ++n)
          c()[(e + 8 * n + 16) >> 3] = r.axes[n];
        for (n = 0; n < r.buttons.length; ++n)
          "object" == typeof r.buttons[n]
            ? (c()[(e + 8 * n + 528) >> 3] = r.buttons[n].value)
            : (c()[(e + 8 * n + 528) >> 3] = r.buttons[n]);
        for (n = 0; n < r.buttons.length; ++n)
          "object" == typeof r.buttons[n]
            ? (a()[(e + 4 * n + 1040) >> 2] = r.buttons[n].pressed)
            : (a()[(e + 4 * n + 1040) >> 2] = 1 == r.buttons[n]);
        (a()[(e + 1296) >> 2] = r.connected),
          (a()[(e + 1300) >> 2] = r.index),
          (a()[(e + 8) >> 2] = r.axes.length),
          (a()[(e + 12) >> 2] = r.buttons.length),
          re(r.id, e + 1304, 64),
          re(r.mapping, e + 1368, 64);
      }
      function In(e, r) {
        return w
          ? Vn(45, 1, e, r)
          : e < 0 || e >= dn.lastGamepadState.length
          ? -5
          : dn.lastGamepadState[e]
          ? (Nn(r, dn.lastGamepadState[e]), 0)
          : -7;
      }
      function Bn() {
        return t().length;
      }
      function jn() {
        return w ? Vn(46, 1) : dn.lastGamepadState.length;
      }
      var Un = [];
      function zn(e, r, n, t) {
        for (var o = 0; o < e; o++) {
          var i = to[n](),
            u = i && Yr.getNewId(t);
          i ? ((i.name = u), (t[u] = i)) : Yr.recordError(1282),
            (a()[(r + 4 * o) >> 2] = u);
        }
      }
      function Hn(e, r) {
        (u()[e >> 2] = r), (u()[(e + 4) >> 2] = (r - u()[e >> 2]) / 4294967296);
      }
      function qn(e, r, t) {
        if (r) {
          var o = void 0;
          switch (e) {
            case 36346:
              o = 1;
              break;
            case 36344:
              return void (0 != t && 1 != t && Yr.recordError(1280));
            case 36345:
              o = 0;
              break;
            case 34466:
              var i = to.getParameter(34467);
              o = i ? i.length : 0;
          }
          if (void 0 === o) {
            var u = to.getParameter(e);
            switch (typeof u) {
              case "number":
                o = u;
                break;
              case "boolean":
                o = u ? 1 : 0;
                break;
              case "string":
                return void Yr.recordError(1280);
              case "object":
                if (null === u)
                  switch (e) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 34068:
                      o = 0;
                      break;
                    default:
                      return void Yr.recordError(1280);
                  }
                else {
                  if (
                    u instanceof Float32Array ||
                    u instanceof Uint32Array ||
                    u instanceof Int32Array ||
                    u instanceof Array
                  ) {
                    for (var c = 0; c < u.length; ++c)
                      switch (t) {
                        case 0:
                          a()[(r + 4 * c) >> 2] = u[c];
                          break;
                        case 2:
                          s()[(r + 4 * c) >> 2] = u[c];
                          break;
                        case 4:
                          n()[(r + c) >> 0] = u[c] ? 1 : 0;
                      }
                    return;
                  }
                  try {
                    o = 0 | u.name;
                  } catch (r) {
                    return (
                      Yr.recordError(1280),
                      void F(
                        "GL_INVALID_ENUM in glGet" +
                          t +
                          "v: Unknown object returned from WebGL getParameter(" +
                          e +
                          ")! (error: " +
                          r +
                          ")"
                      )
                    );
                  }
                }
                break;
              default:
                return (
                  Yr.recordError(1280),
                  void F(
                    "GL_INVALID_ENUM in glGet" +
                      t +
                      "v: Native code calling glGet" +
                      t +
                      "v(" +
                      e +
                      ") and it returns " +
                      u +
                      " of type " +
                      typeof u +
                      "!"
                  )
                );
            }
          }
          switch (t) {
            case 1:
              Hn(r, o);
              break;
            case 0:
              a()[r >> 2] = o;
              break;
            case 2:
              s()[r >> 2] = o;
              break;
            case 4:
              n()[r >> 0] = o ? 1 : 0;
          }
        } else Yr.recordError(1281);
      }
      function Wn(e, r, n, t) {
        if (n) {
          var o = to.getUniform(Yr.programs[e], Yr.uniforms[r]);
          if ("number" == typeof o || "boolean" == typeof o)
            switch (t) {
              case 0:
                a()[n >> 2] = o;
                break;
              case 2:
                s()[n >> 2] = o;
                break;
              default:
                throw (
                  "internal emscriptenWebGLGetUniform() error, bad type: " + t
                );
            }
          else
            for (var i = 0; i < o.length; i++)
              switch (t) {
                case 0:
                  a()[(n + 4 * i) >> 2] = o[i];
                  break;
                case 2:
                  s()[(n + 4 * i) >> 2] = o[i];
                  break;
                default:
                  throw (
                    "internal emscriptenWebGLGetUniform() error, bad type: " + t
                  );
              }
        } else Yr.recordError(1281);
      }
      function Gn(e, r, n, t) {
        if (n) {
          var o = to.getVertexAttrib(e, r);
          if (34975 == r) a()[n >> 2] = o.name;
          else if ("number" == typeof o || "boolean" == typeof o)
            switch (t) {
              case 0:
                a()[n >> 2] = o;
                break;
              case 2:
                s()[n >> 2] = o;
                break;
              case 5:
                a()[n >> 2] = Math.fround(o);
                break;
              default:
                throw (
                  "internal emscriptenWebGLGetVertexAttrib() error, bad type: " +
                  t
                );
            }
          else
            for (var i = 0; i < o.length; i++)
              switch (t) {
                case 0:
                  a()[(n + 4 * i) >> 2] = o[i];
                  break;
                case 2:
                  s()[(n + 4 * i) >> 2] = o[i];
                  break;
                case 5:
                  a()[(n + 4 * i) >> 2] = Math.fround(o[i]);
                  break;
                default:
                  throw (
                    "internal emscriptenWebGLGetVertexAttrib() error, bad type: " +
                    t
                  );
              }
        } else Yr.recordError(1281);
      }
      function Xn(e, r, n, o, c, l) {
        var f = (function (e) {
            return 1 == (e -= 5120)
              ? t()
              : 4 == e
              ? a()
              : 6 == e
              ? s()
              : 5 == e || 28922 == e
              ? u()
              : i();
          })(e),
          d = (function (e) {
            return 31 - Math.clz32(e.BYTES_PER_ELEMENT);
          })(f),
          m = 1 << d,
          p = (function (e, r, n, t) {
            var o;
            return r * ((e * n + (o = t) - 1) & -o);
          })(
            n,
            o,
            (function (e) {
              return { 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4 }[e - 6402] || 1;
            })(r) * m,
            Yr.unpackAlignment
          );
        return f.subarray(c >> d, (c + p) >> d);
      }
      var Yn = 0;
      function Vn(e, r) {
        for (
          var n = arguments.length - 2,
            t = Ko(),
            o = Zo(8 * n),
            i = o >> 3,
            a = 0;
          a < n;
          a++
        )
          c()[i + a] = arguments[2 + a];
        var u = Po(e, n, o, r);
        return Jo(t), u;
      }
      var Qn = [];
      function Kn(e, r) {
        Kn.array || (Kn.array = []);
        var n,
          o = Kn.array;
        for (o.length = 0; (n = t()[e++]); )
          100 === n || 102 === n
            ? ((r = (r + 7) & -8), o.push(c()[r >> 3]), (r += 8))
            : ((r = (r + 3) & -4), o.push(a()[r >> 2]), (r += 4));
        return o;
      }
      function Zn(e, r, n) {
        if (w) return Vn(47, 1, e, r, n);
        var t = {
          scaleMode: a()[n >> 2],
          canvasResolutionScaleMode: a()[(n + 4) >> 2],
          filteringMode: a()[(n + 8) >> 2],
          deferUntilInEventHandler: r,
          canvasResizedCallbackTargetThread: a()[(n + 20) >> 2],
          canvasResizedCallback: a()[(n + 12) >> 2],
          canvasResizedCallbackUserData: a()[(n + 16) >> 2],
        };
        return (
          (mn = t),
          (function (e, r) {
            return dn.fullscreenEnabled()
              ? (e = vn(e))
                ? e.requestFullscreen || e.webkitRequestFullscreen
                  ? dn.canPerformEventHandlerRequests()
                    ? Dn(e, r)
                    : r.deferUntilInEventHandler
                    ? (dn.deferCall(Dn, 1, [e, r]), 1)
                    : -2
                  : -3
                : -4
              : -1;
          })(e, t)
        );
      }
      function Jn(e, r) {
        return w
          ? Vn(48, 1, e, r)
          : (e = vn(e))
          ? e.requestPointerLock || e.msRequestPointerLock
            ? dn.canPerformEventHandlerRequests()
              ? Pn(e)
              : r
              ? (dn.deferCall(Pn, 2, [e]), 1)
              : -2
            : -1
          : -4;
      }
      function $n(e) {
        try {
          return j.grow((e - ue.byteLength + 65535) >> 16), he(j.buffer), 1;
        } catch (e) {}
      }
      function et() {
        return w
          ? Vn(49, 1)
          : (dn.lastGamepadState = navigator.getGamepads
              ? navigator.getGamepads()
              : navigator.webkitGetGamepads
              ? navigator.webkitGetGamepads()
              : null)
          ? 0
          : -1;
      }
      function rt(e, r, n, t, o, i, a) {
        (a = dn.getTargetThreadForEventCallback(a)),
          dn.focusEvent || (dn.focusEvent = yo(256));
        var u = {
          target: vn(e),
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc: function (e) {
            var n = e || event,
              i = dn.getNodeNameForTarget(n.target),
              u = n.target.id ? n.target.id : "",
              s = a ? yo(256) : dn.focusEvent;
            re(i, s + 0, 128),
              re(u, s + 128, 128),
              a
                ? dn.queueEventHandlerOnThread_iiii(a, t, o, s, r)
                : Wo(t, o, s, r) && n.preventDefault();
          },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(u);
      }
      function nt(e, r, n, t, o) {
        return w
          ? Vn(50, 1, e, r, n, t, o)
          : (rt(e, r, n, t, 12, "blur", o), 0);
      }
      function tt(e, r, n) {
        return w
          ? Vn(51, 1, e, r, n)
          : (e = vn(e))
          ? ((e.style.width = r + "px"), (e.style.height = n + "px"), 0)
          : -4;
      }
      function ot(e, r, n, t, o) {
        return w
          ? Vn(52, 1, e, r, n, t, o)
          : (rt(e, r, n, t, 13, "focus", o), 0);
      }
      function it(e, r, n, t, o, i, u) {
        (u = dn.getTargetThreadForEventCallback(u)),
          dn.fullscreenChangeEvent || (dn.fullscreenChangeEvent = yo(280));
        var s = {
          target: e,
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc: function (e) {
            var n = e || event,
              i = u ? yo(280) : dn.fullscreenChangeEvent;
            !(function (e) {
              var r =
                  document.fullscreenElement ||
                  document.mozFullScreenElement ||
                  document.webkitFullscreenElement ||
                  document.msFullscreenElement,
                n = !!r;
              (a()[e >> 2] = n), (a()[(e + 4) >> 2] = dn.fullscreenEnabled());
              var t = n ? r : dn.previousFullscreenElement,
                o = dn.getNodeNameForTarget(t),
                i = t && t.id ? t.id : "";
              re(o, e + 8, 128),
                re(i, e + 136, 128),
                (a()[(e + 264) >> 2] = t ? t.clientWidth : 0),
                (a()[(e + 268) >> 2] = t ? t.clientHeight : 0),
                (a()[(e + 272) >> 2] = screen.width),
                (a()[(e + 276) >> 2] = screen.height),
                n && (dn.previousFullscreenElement = r);
            })(i),
              u
                ? dn.queueEventHandlerOnThread_iiii(u, t, o, i, r)
                : Wo(t, o, i, r) && n.preventDefault();
          },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(s);
      }
      function at(e, r, n, t, o) {
        return w
          ? Vn(53, 1, e, r, n, t, o)
          : dn.fullscreenEnabled()
          ? (e = vn(e))
            ? (it(e, r, n, t, 19, "fullscreenchange", o),
              it(e, r, n, t, 19, "webkitfullscreenchange", o),
              0)
            : -4
          : -1;
      }
      function ut(e, r, n, t, o, i, a) {
        (a = dn.getTargetThreadForEventCallback(a)),
          dn.gamepadEvent || (dn.gamepadEvent = yo(1432));
        var u = {
          target: vn(e),
          allowsDeferredCalls: !0,
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc: function (e) {
            var n = e || event,
              i = a ? yo(1432) : dn.gamepadEvent;
            Nn(i, n.gamepad),
              a
                ? dn.queueEventHandlerOnThread_iiii(a, t, o, i, r)
                : Wo(t, o, i, r) && n.preventDefault();
          },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(u);
      }
      function st(e, r, n, t) {
        return w
          ? Vn(54, 1, e, r, n, t)
          : navigator.getGamepads || navigator.webkitGetGamepads
          ? (ut(2, e, r, n, 26, "gamepadconnected", t), 0)
          : -1;
      }
      function ct(e, r, n, t) {
        return w
          ? Vn(55, 1, e, r, n, t)
          : navigator.getGamepads || navigator.webkitGetGamepads
          ? (ut(2, e, r, n, 27, "gamepaddisconnected", t), 0)
          : -1;
      }
      function lt(e, r, n, t, o, i, u) {
        (u = dn.getTargetThreadForEventCallback(u)),
          dn.keyEvent || (dn.keyEvent = yo(164));
        var s = {
          target: vn(e),
          allowsDeferredCalls: !0,
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc: function (e) {
            var n = e || event,
              i = u ? yo(164) : dn.keyEvent;
            re(n.key ? n.key : "", i + 0, 32),
              re(n.code ? n.code : "", i + 32, 32),
              (a()[(i + 64) >> 2] = n.location),
              (a()[(i + 68) >> 2] = n.ctrlKey),
              (a()[(i + 72) >> 2] = n.shiftKey),
              (a()[(i + 76) >> 2] = n.altKey),
              (a()[(i + 80) >> 2] = n.metaKey),
              (a()[(i + 84) >> 2] = n.repeat),
              re(n.locale ? n.locale : "", i + 88, 32),
              re(n.char ? n.char : "", i + 120, 32),
              (a()[(i + 152) >> 2] = n.charCode),
              (a()[(i + 156) >> 2] = n.keyCode),
              (a()[(i + 160) >> 2] = n.which),
              u
                ? dn.queueEventHandlerOnThread_iiii(u, t, o, i, r)
                : Wo(t, o, i, r) && n.preventDefault();
          },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(s);
      }
      function ft(e, r, n, t, o) {
        return w
          ? Vn(56, 1, e, r, n, t, o)
          : (lt(e, r, n, t, 2, "keydown", o), 0);
      }
      function dt(e, r, n, t, o) {
        return w
          ? Vn(57, 1, e, r, n, t, o)
          : (lt(e, r, n, t, 1, "keypress", o), 0);
      }
      function mt(e, r, n, t, o) {
        return w
          ? Vn(58, 1, e, r, n, t, o)
          : (lt(e, r, n, t, 3, "keyup", o), 0);
      }
      function pt(e, r, n) {
        (a()[e >> 2] = r.screenX),
          (a()[(e + 4) >> 2] = r.screenY),
          (a()[(e + 8) >> 2] = r.clientX),
          (a()[(e + 12) >> 2] = r.clientY),
          (a()[(e + 16) >> 2] = r.ctrlKey),
          (a()[(e + 20) >> 2] = r.shiftKey),
          (a()[(e + 24) >> 2] = r.altKey),
          (a()[(e + 28) >> 2] = r.metaKey),
          (o()[(e + 32) >> 1] = r.button),
          (o()[(e + 34) >> 1] = r.buttons);
        var t = r.movementX || r.screenX - dn.previousScreenX,
          i = r.movementY || r.screenY - dn.previousScreenY;
        (a()[(e + 36) >> 2] = t), (a()[(e + 40) >> 2] = i);
        var u = pn.indexOf(n) < 0 ? Tn(n) : { left: 0, top: 0 };
        (a()[(e + 44) >> 2] = r.clientX - u.left),
          (a()[(e + 48) >> 2] = r.clientY - u.top),
          "wheel" !== r.type &&
            "mousewheel" !== r.type &&
            ((dn.previousScreenX = r.screenX),
            (dn.previousScreenY = r.screenY));
      }
      function vt(e, r, n, t, o, i, a) {
        (a = dn.getTargetThreadForEventCallback(a)),
          dn.mouseEvent || (dn.mouseEvent = yo(64));
        var u = {
          target: (e = vn(e)),
          allowsDeferredCalls:
            "mousemove" != i && "mouseenter" != i && "mouseleave" != i,
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc: function (n) {
            var i = n || event;
            if ((pt(dn.mouseEvent, i, e), a)) {
              var u = yo(64);
              pt(u, i, e), dn.queueEventHandlerOnThread_iiii(a, t, o, u, r);
            } else Wo(t, o, dn.mouseEvent, r) && i.preventDefault();
          },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(u);
      }
      function ht(e, r, n, t, o) {
        return w
          ? Vn(59, 1, e, r, n, t, o)
          : (vt(e, r, n, t, 5, "mousedown", o), 0);
      }
      function gt(e, r, n, t, o) {
        return w
          ? Vn(60, 1, e, r, n, t, o)
          : (vt(e, r, n, t, 33, "mouseenter", o), 0);
      }
      function yt(e, r, n, t, o) {
        return w
          ? Vn(61, 1, e, r, n, t, o)
          : (vt(e, r, n, t, 34, "mouseleave", o), 0);
      }
      function Et(e, r, n, t, o) {
        return w
          ? Vn(62, 1, e, r, n, t, o)
          : (vt(e, r, n, t, 8, "mousemove", o), 0);
      }
      function _t(e, r, n, t, o) {
        return w
          ? Vn(63, 1, e, r, n, t, o)
          : (vt(e, r, n, t, 6, "mouseup", o), 0);
      }
      function wt(e, r, n, t, o, i, u) {
        (u = dn.getTargetThreadForEventCallback(u)),
          dn.pointerlockChangeEvent || (dn.pointerlockChangeEvent = yo(260));
        var s = {
          target: e,
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc: function (e) {
            var n = e || event,
              i = u ? yo(260) : dn.pointerlockChangeEvent;
            !(function (e) {
              var r =
                  document.pointerLockElement ||
                  document.mozPointerLockElement ||
                  document.webkitPointerLockElement ||
                  document.msPointerLockElement,
                n = !!r;
              a()[e >> 2] = n;
              var t = dn.getNodeNameForTarget(r),
                o = r && r.id ? r.id : "";
              re(t, e + 4, 128), re(o, e + 132, 128);
            })(i),
              u
                ? dn.queueEventHandlerOnThread_iiii(u, t, o, i, r)
                : Wo(t, o, i, r) && n.preventDefault();
          },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(s);
      }
      function bt(e, r, n, t, o) {
        return w
          ? Vn(64, 1, e, r, n, t, o)
          : document &&
            document.body &&
            (document.body.requestPointerLock ||
              document.body.mozRequestPointerLock ||
              document.body.webkitRequestPointerLock ||
              document.body.msRequestPointerLock)
          ? (e = vn(e))
            ? (wt(e, r, n, t, 20, "pointerlockchange", o),
              wt(e, r, n, t, 20, "mozpointerlockchange", o),
              wt(e, r, n, t, 20, "webkitpointerlockchange", o),
              wt(e, r, n, t, 20, "mspointerlockchange", o),
              0)
            : -4
          : -1;
      }
      function kt(e, r, n, t, o) {
        return w
          ? Vn(65, 1, e, r, n, t, o)
          : ((function (e, r, n, t, o, i, u) {
              (u = dn.getTargetThreadForEventCallback(u)),
                dn.uiEvent || (dn.uiEvent = yo(36));
              var s = {
                target: (e = vn(e)),
                eventTypeString: i,
                callbackfunc: t,
                handlerFunc: function (n) {
                  var i = n || event;
                  if (i.target == e) {
                    var s = u ? yo(36) : dn.uiEvent,
                      c = document.body;
                    (a()[s >> 2] = i.detail),
                      (a()[(s + 4) >> 2] = c.clientWidth),
                      (a()[(s + 8) >> 2] = c.clientHeight),
                      (a()[(s + 12) >> 2] = innerWidth),
                      (a()[(s + 16) >> 2] = innerHeight),
                      (a()[(s + 20) >> 2] = outerWidth),
                      (a()[(s + 24) >> 2] = outerHeight),
                      (a()[(s + 28) >> 2] = pageXOffset),
                      (a()[(s + 32) >> 2] = pageYOffset),
                      u
                        ? dn.queueEventHandlerOnThread_iiii(u, t, o, s, r)
                        : Wo(t, o, s, r) && i.preventDefault();
                  }
                },
                useCapture: n,
              };
              dn.registerOrRemoveHandler(s);
            })(e, r, n, t, 10, "resize", o),
            0);
      }
      function Ct(e, r, n, t, o, i, u) {
        (u = dn.getTargetThreadForEventCallback(u)),
          dn.touchEvent || (dn.touchEvent = yo(1684));
        var s = {
          target: (e = vn(e)),
          allowsDeferredCalls: "touchstart" == i || "touchend" == i,
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc: function (n) {
            for (var i = n || event, s = {}, c = 0; c < i.touches.length; ++c)
              ((l = i.touches[c]).changed = !1), (s[l.identifier] = l);
            for (c = 0; c < i.changedTouches.length; ++c)
              (s[(l = i.changedTouches[c]).identifier] = l), (l.changed = !0);
            for (c = 0; c < i.targetTouches.length; ++c) {
              var l;
              s[(l = i.targetTouches[c]).identifier].onTarget = !0;
            }
            var f = u ? yo(1684) : dn.touchEvent,
              d = f;
            (a()[(d + 4) >> 2] = i.ctrlKey),
              (a()[(d + 8) >> 2] = i.shiftKey),
              (a()[(d + 12) >> 2] = i.altKey),
              (a()[(d + 16) >> 2] = i.metaKey),
              (d += 20);
            var m = Tn(e),
              p = 0;
            for (var c in s) {
              var v = s[c];
              if (
                ((a()[d >> 2] = v.identifier),
                (a()[(d + 4) >> 2] = v.screenX),
                (a()[(d + 8) >> 2] = v.screenY),
                (a()[(d + 12) >> 2] = v.clientX),
                (a()[(d + 16) >> 2] = v.clientY),
                (a()[(d + 20) >> 2] = v.pageX),
                (a()[(d + 24) >> 2] = v.pageY),
                (a()[(d + 28) >> 2] = v.changed),
                (a()[(d + 32) >> 2] = v.onTarget),
                (a()[(d + 36) >> 2] = v.clientX - m.left),
                (a()[(d + 40) >> 2] = v.clientY - m.top),
                (d += 52),
                ++p >= 32)
              )
                break;
            }
            (a()[f >> 2] = p),
              u
                ? dn.queueEventHandlerOnThread_iiii(u, t, o, f, r)
                : Wo(t, o, f, r) && i.preventDefault();
          },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(s);
      }
      function St(e, r, n, t, o) {
        return w
          ? Vn(66, 1, e, r, n, t, o)
          : (Ct(e, r, n, t, 25, "touchcancel", o), 0);
      }
      function xt(e, r, n, t, o) {
        return w
          ? Vn(67, 1, e, r, n, t, o)
          : (Ct(e, r, n, t, 23, "touchend", o), 0);
      }
      function Tt(e, r, n, t, o) {
        return w
          ? Vn(68, 1, e, r, n, t, o)
          : (Ct(e, r, n, t, 24, "touchmove", o), 0);
      }
      function At(e, r, n, t, o) {
        return w
          ? Vn(69, 1, e, r, n, t, o)
          : (Ct(e, r, n, t, 22, "touchstart", o), 0);
      }
      function Dt(e, r, n, t, o, i, u) {
        (u = dn.getTargetThreadForEventCallback(u)),
          dn.visibilityChangeEvent || (dn.visibilityChangeEvent = yo(8));
        var s = {
          target: e,
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc: function (e) {
            var n,
              i,
              s = e || event,
              c = u ? yo(8) : dn.visibilityChangeEvent;
            (n = c),
              (i = ["hidden", "visible", "prerender", "unloaded"].indexOf(
                document.visibilityState
              )),
              (a()[n >> 2] = document.hidden),
              (a()[(n + 4) >> 2] = i),
              u
                ? dn.queueEventHandlerOnThread_iiii(u, t, o, c, r)
                : Wo(t, o, c, r) && s.preventDefault();
          },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(s);
      }
      function Lt(e, r, n, t) {
        return w
          ? Vn(70, 1, e, r, n, t)
          : pn[1]
          ? (Dt(pn[1], e, r, n, 21, "visibilitychange", t), 0)
          : -4;
      }
      function Pt(e, r, n, t, o, i, u) {
        (u = dn.getTargetThreadForEventCallback(u)),
          dn.wheelEvent || (dn.wheelEvent = yo(96));
        var s = {
          target: e,
          allowsDeferredCalls: !0,
          eventTypeString: i,
          callbackfunc: t,
          handlerFunc:
            "wheel" == i
              ? function (n) {
                  var i = n || event,
                    s = u ? yo(96) : dn.wheelEvent;
                  pt(s, i, e),
                    (c()[(s + 64) >> 3] = i.deltaX),
                    (c()[(s + 72) >> 3] = i.deltaY),
                    (c()[(s + 80) >> 3] = i.deltaZ),
                    (a()[(s + 88) >> 2] = i.deltaMode),
                    u
                      ? dn.queueEventHandlerOnThread_iiii(u, t, o, s, r)
                      : Wo(t, o, s, r) && i.preventDefault();
                }
              : function (n) {
                  var i = n || event;
                  pt(dn.wheelEvent, i, e),
                    (c()[(dn.wheelEvent + 64) >> 3] = i.wheelDeltaX || 0);
                  var u = -(i.wheelDeltaY || i.wheelDelta);
                  (c()[(dn.wheelEvent + 72) >> 3] = u),
                    (c()[(dn.wheelEvent + 80) >> 3] = 0),
                    (a()[(dn.wheelEvent + 88) >> 2] = 0),
                    Wo(t, o, dn.wheelEvent, r) && i.preventDefault();
                },
          useCapture: n,
        };
        dn.registerOrRemoveHandler(s);
      }
      function Ft(e, r, n, t, o) {
        return w
          ? Vn(71, 1, e, r, n, t, o)
          : void 0 !== (e = vn(e)).onwheel
          ? (Pt(e, r, n, t, 9, "wheel", o), 0)
          : void 0 !== e.onmousewheel
          ? (Pt(e, r, n, t, 9, "mousewheel", o), 0)
          : -1;
      }
      var Mt = ["default", "low-power", "high-performance"];
      var Rt = {};
      function Ot() {
        if (!Ot.strings) {
          var e = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG:
              (
                ("object" == typeof navigator &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                "C"
              ).replace("-", "_") + ".UTF-8",
            _: h || "./this.program",
          };
          for (var r in Rt) e[r] = Rt[r];
          var n = [];
          for (var r in e) n.push(r + "=" + e[r]);
          Ot.strings = n;
        }
        return Ot.strings;
      }
      function Nt(e) {
        if (w) return Vn(72, 1, e);
        try {
          var r = lr.getStreamFromFD(e);
          return cr.close(r), 0;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), e.errno
          );
        }
      }
      function It(e, r) {
        if (w) return Vn(73, 1, e, r);
        try {
          var t = lr.getStreamFromFD(e),
            o = t.tty ? 2 : cr.isDir(t.mode) ? 3 : cr.isLink(t.mode) ? 7 : 4;
          return (n()[r >> 0] = o), 0;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), e.errno
          );
        }
      }
      function Bt(e, r, n, t) {
        if (w) return Vn(74, 1, e, r, n, t);
        try {
          var o = lr.getStreamFromFD(e),
            i = lr.doReadv(o, r, n);
          return (a()[t >> 2] = i), 0;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), e.errno
          );
        }
      }
      function jt(e, r, n, t, o) {
        if (w) return Vn(75, 1, e, r, n, t, o);
        try {
          var i = lr.getStreamFromFD(e),
            u = 4294967296 * n + (r >>> 0);
          return u <= -9007199254740992 || u >= 9007199254740992
            ? -61
            : (cr.llseek(i, u, t),
              (Ue = [
                i.position >>> 0,
                ((je = i.position),
                +xe(je) >= 1
                  ? je > 0
                    ? (0 | De(+Ae(je / 4294967296), 4294967295)) >>> 0
                    : ~~+Te((je - +(~~je >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (a()[o >> 2] = Ue[0]),
              (a()[(o + 4) >> 2] = Ue[1]),
              i.getdents && 0 === u && 0 === t && (i.getdents = null),
              0);
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), e.errno
          );
        }
      }
      function Ut(e, r, n, t) {
        if (w) return Vn(76, 1, e, r, n, t);
        try {
          var o = lr.getStreamFromFD(e),
            i = lr.doWritev(o, r, n);
          return (a()[t >> 2] = i), 0;
        } catch (e) {
          return (
            (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), e.errno
          );
        }
      }
      var zt = {};
      function Ht(e, r, n, t) {
        if (w) return Vn(77, 1, e, r, n, t);
        var o,
          i = 0,
          u = 0,
          s = 0,
          c = 0,
          l = 0,
          f = 0;
        function d(e, r, n, t, o, i) {
          var u, s, c;
          return (
            (s = 10 === e ? 28 : 16),
            (o = 10 === e ? yr(o) : gr(o)),
            Q(!_r((u = yo(s)), e, o, i).errno),
            (c = yo(32)),
            (a()[(c + 4) >> 2] = e),
            (a()[(c + 8) >> 2] = r),
            (a()[(c + 12) >> 2] = n),
            (a()[(c + 24) >> 2] = t),
            (a()[(c + 20) >> 2] = u),
            (a()[(c + 16) >> 2] = 10 === e ? 28 : 16),
            (a()[(c + 28) >> 2] = 0),
            c
          );
        }
        if (
          (n &&
            ((s = a()[n >> 2]),
            (c = a()[(n + 4) >> 2]),
            (l = a()[(n + 8) >> 2]),
            (f = a()[(n + 12) >> 2])),
          l && !f && (f = 2 === l ? 17 : 6),
          !l && f && (l = 17 === f ? 2 : 1),
          0 === f && (f = 6),
          0 === l && (l = 1),
          !e && !r)
        )
          return -2;
        if (-1088 & s) return -1;
        if (0 !== n && 2 & a()[n >> 2] && !e) return -1;
        if (32 & s) return -2;
        if (0 !== l && 1 !== l && 2 !== l) return -7;
        if (0 !== c && 2 !== c && 10 !== c) return -6;
        if (r && ((r = $(r)), (u = parseInt(r, 10)), isNaN(u)))
          return 1024 & s ? -2 : -8;
        if (!e)
          return (
            0 === c && (c = 2),
            0 == (1 & s) && (i = 2 === c ? wo(2130706433) : [0, 0, 0, 1]),
            (o = d(c, l, f, null, i, u)),
            (a()[t >> 2] = o),
            0
          );
        if (null !== (i = mr((e = $(e)))))
          if (0 === c || 2 === c) c = 2;
          else {
            if (!(10 === c && 8 & s)) return -2;
            (i = [0, 0, wo(65535), i]), (c = 10);
          }
        else if (null !== (i = vr(e))) {
          if (0 !== c && 10 !== c) return -2;
          c = 10;
        }
        return null != i
          ? ((o = d(c, l, f, e, i, u)), (a()[t >> 2] = o), 0)
          : 4 & s
          ? -2
          : ((i = mr((e = hr.lookup_name(e)))),
            0 === c ? (c = 2) : 10 === c && (i = [0, 0, wo(65535), i]),
            (o = d(c, l, f, null, i, u)),
            (a()[t >> 2] = o),
            0);
      }
      var qt = 13634480,
        Wt = (re("GMT", 13634528, 4), 13634528);
      function Gt(e, r) {
        var n = new Date(1e3 * a()[e >> 2]);
        (a()[r >> 2] = n.getUTCSeconds()),
          (a()[(r + 4) >> 2] = n.getUTCMinutes()),
          (a()[(r + 8) >> 2] = n.getUTCHours()),
          (a()[(r + 12) >> 2] = n.getUTCDate()),
          (a()[(r + 16) >> 2] = n.getUTCMonth()),
          (a()[(r + 20) >> 2] = n.getUTCFullYear() - 1900),
          (a()[(r + 24) >> 2] = n.getUTCDay()),
          (a()[(r + 36) >> 2] = 0),
          (a()[(r + 32) >> 2] = 0);
        var t = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
          o = ((n.getTime() - t) / 864e5) | 0;
        return (a()[(r + 28) >> 2] = o), (a()[(r + 40) >> 2] = Wt), r;
      }
      function Xt() {
        if (w) return Vn(78, 1);
        if (!Xt.called) {
          (Xt.called = !0),
            (a()[Co() >> 2] = 60 * new Date().getTimezoneOffset());
          var e = new Date().getFullYear(),
            r = new Date(e, 0, 1),
            n = new Date(e, 6, 1);
          a()[ko() >> 2] = Number(
            r.getTimezoneOffset() != n.getTimezoneOffset()
          );
          var t = s(r),
            o = s(n),
            i = te(t),
            u = te(o);
          n.getTimezoneOffset() < r.getTimezoneOffset()
            ? ((a()[bo() >> 2] = i), (a()[(bo() + 4) >> 2] = u))
            : ((a()[bo() >> 2] = u), (a()[(bo() + 4) >> 2] = i));
        }
        function s(e) {
          var r = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
          return r ? r[1] : "GMT";
        }
      }
      function Yt(e, r) {
        Xt();
        var n = new Date(1e3 * a()[e >> 2]);
        (a()[r >> 2] = n.getSeconds()),
          (a()[(r + 4) >> 2] = n.getMinutes()),
          (a()[(r + 8) >> 2] = n.getHours()),
          (a()[(r + 12) >> 2] = n.getDate()),
          (a()[(r + 16) >> 2] = n.getMonth()),
          (a()[(r + 20) >> 2] = n.getFullYear() - 1900),
          (a()[(r + 24) >> 2] = n.getDay());
        var t = new Date(n.getFullYear(), 0, 1),
          o = ((n.getTime() - t.getTime()) / 864e5) | 0;
        (a()[(r + 28) >> 2] = o),
          (a()[(r + 36) >> 2] = -60 * n.getTimezoneOffset());
        var i = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
          u = t.getTimezoneOffset(),
          s = 0 | (i != u && n.getTimezoneOffset() == Math.min(u, i));
        a()[(r + 32) >> 2] = s;
        var c = a()[(bo() + (s ? 4 : 0)) >> 2];
        return (a()[(r + 40) >> 2] = c), r;
      }
      function Vt(e) {
        if (w)
          throw "Internal Error! _spawn_thread() can only ever be called from main application thread!";
        var r = er.getNewWorker();
        if (void 0 !== r.pthread) throw "Internal error!";
        if (!e.pthread_ptr) throw "Internal error, no pthread ptr!";
        er.runningWorkers.push(r);
        for (var n = yo(512), t = 0; t < 128; ++t) a()[(n + 4 * t) >> 2] = 0;
        var o = e.stackBase + e.stackSize,
          i = (er.pthreads[e.pthread_ptr] = {
            worker: r,
            stackBase: e.stackBase,
            stackSize: e.stackSize,
            allocatedOwnStack: e.allocatedOwnStack,
            thread: e.pthread_ptr,
            threadInfoStruct: e.pthread_ptr,
          }),
          s = i.threadInfoStruct >> 2;
        Atomics.store(u(), s + 0, 0),
          Atomics.store(u(), s + 1, 0),
          Atomics.store(u(), s + 2, 0),
          Atomics.store(u(), s + 17, e.detached),
          Atomics.store(u(), s + 26, n),
          Atomics.store(u(), s + 12, 0),
          Atomics.store(u(), s + 10, i.threadInfoStruct),
          Atomics.store(u(), s + 11, 42),
          Atomics.store(u(), s + 27, e.stackSize),
          Atomics.store(u(), s + 21, e.stackSize),
          Atomics.store(u(), s + 20, o),
          Atomics.store(u(), s + 29, o),
          Atomics.store(u(), s + 30, e.detached),
          Atomics.store(u(), s + 32, e.schedPolicy),
          Atomics.store(u(), s + 33, e.schedPrio);
        var c = _o() + 40;
        Atomics.store(u(), s + 44, c), (r.pthread = i);
        var l = {
          cmd: "run",
          start_routine: e.startRoutine,
          arg: e.arg,
          threadInfoStruct: e.pthread_ptr,
          selfThreadId: e.pthread_ptr,
          parentThreadId: e.parent_pthread_ptr,
          stackBase: e.stackBase,
          stackSize: e.stackSize,
        };
        (r.runPthread = function () {
          (l.time = performance.now()), r.postMessage(l, e.transferList);
        }),
          r.loaded && (r.runPthread(), delete r.runPthread);
      }
      function Qt() {
        return 0 | We;
      }
      function Kt() {
        if (
          w &&
          X &&
          !Atomics.load(u(), (X + 60) >> 2) &&
          2 == Atomics.load(u(), (X + 0) >> 2)
        )
          throw "Canceled!";
      }
      l._pthread_self = Qt;
      function Zt(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
      }
      function Jt(e, r) {
        for (var n = 0, t = 0; t <= r; n += e[t++]);
        return n;
      }
      var $t = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        eo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function ro(e, r) {
        for (var n = new Date(e.getTime()); r > 0; ) {
          var t = Zt(n.getFullYear()),
            o = n.getMonth(),
            i = (t ? $t : eo)[o];
          if (!(r > i - n.getDate())) return n.setDate(n.getDate() + r), n;
          (r -= i - n.getDate() + 1),
            n.setDate(1),
            o < 11
              ? n.setMonth(o + 1)
              : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1));
        }
        return n;
      }
      function no(e) {
        if (w) return Vn(79, 1, e);
        switch (e) {
          case 30:
            return 16384;
          case 85:
            return 2147483648, 131072;
          case 132:
          case 133:
          case 12:
          case 137:
          case 138:
          case 15:
          case 235:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 149:
          case 13:
          case 10:
          case 236:
          case 153:
          case 9:
          case 21:
          case 22:
          case 159:
          case 154:
          case 14:
          case 77:
          case 78:
          case 139:
          case 80:
          case 81:
          case 82:
          case 68:
          case 67:
          case 164:
          case 11:
          case 29:
          case 47:
          case 48:
          case 95:
          case 52:
          case 51:
          case 46:
          case 79:
            return 200809;
          case 27:
          case 246:
          case 127:
          case 128:
          case 23:
          case 24:
          case 160:
          case 161:
          case 181:
          case 182:
          case 242:
          case 183:
          case 184:
          case 243:
          case 244:
          case 245:
          case 165:
          case 178:
          case 179:
          case 49:
          case 50:
          case 168:
          case 169:
          case 175:
          case 170:
          case 171:
          case 172:
          case 97:
          case 76:
          case 32:
          case 173:
          case 35:
            return -1;
          case 176:
          case 177:
          case 7:
          case 155:
          case 8:
          case 157:
          case 125:
          case 126:
          case 92:
          case 93:
          case 129:
          case 130:
          case 131:
          case 94:
          case 91:
            return 1;
          case 74:
          case 60:
          case 69:
          case 70:
          case 4:
            return 1024;
          case 31:
          case 42:
          case 72:
            return 32;
          case 87:
          case 26:
          case 33:
            return 2147483647;
          case 34:
          case 1:
            return 47839;
          case 38:
          case 36:
            return 99;
          case 43:
          case 37:
            return 2048;
          case 0:
            return 2097152;
          case 3:
            return 65536;
          case 28:
            return 32768;
          case 44:
            return 32767;
          case 75:
            return 16384;
          case 39:
            return 1e3;
          case 89:
            return 700;
          case 71:
            return 256;
          case 40:
            return 255;
          case 2:
            return 100;
          case 180:
            return 64;
          case 25:
            return 20;
          case 5:
            return 16;
          case 6:
            return 6;
          case 73:
            return 4;
          case 84:
            return (
              ("object" == typeof navigator && navigator.hardwareConcurrency) ||
              1
            );
        }
        return tr(28), -1;
      }
      w ? er.initWorker() : er.initMainThreadBlock();
      var to,
        oo = function (e, r, n, t) {
          e || (e = this),
            (this.parent = e),
            (this.mount = e.mount),
            (this.mounted = null),
            (this.id = cr.nextInode++),
            (this.name = r),
            (this.mode = n),
            (this.node_ops = {}),
            (this.stream_ops = {}),
            (this.rdev = t);
        };
      Object.defineProperties(oo.prototype, {
        read: {
          get: function () {
            return 365 == (365 & this.mode);
          },
          set: function (e) {
            e ? (this.mode |= 365) : (this.mode &= -366);
          },
        },
        write: {
          get: function () {
            return 146 == (146 & this.mode);
          },
          set: function (e) {
            e ? (this.mode |= 146) : (this.mode &= -147);
          },
        },
        isFolder: {
          get: function () {
            return cr.isDir(this.mode);
          },
        },
        isDevice: {
          get: function () {
            return cr.isChrdev(this.mode);
          },
        },
      }),
        (cr.FSNode = oo),
        cr.staticInit(),
        (l.requestFullscreen = function (e, r) {
          qr.requestFullscreen(e, r);
        }),
        (l.requestAnimationFrame = function (e) {
          qr.requestAnimationFrame(e);
        }),
        (l.setCanvasSize = function (e, r, n) {
          qr.setCanvasSize(e, r, n);
        }),
        (l.pauseMainLoop = function () {
          qr.mainLoop.pause();
        }),
        (l.resumeMainLoop = function () {
          qr.mainLoop.resume();
        }),
        (l.getUserMedia = function () {
          qr.getUserMedia();
        }),
        (l.createContext = function (e, r, n, t) {
          return qr.createContext(e, r, n, t);
        }),
        Yr.init();
      for (var io = 0; io < 32; io++) Un.push(new Array(io));
      var ao = [
        null,
        fr,
        wr,
        br,
        kr,
        Sr,
        xr,
        Tr,
        Ar,
        Dr,
        Lr,
        Pr,
        Fr,
        Mr,
        Rr,
        Or,
        Nr,
        Ir,
        Br,
        jr,
        Ur,
        Gr,
        Xr,
        Vr,
        Qr,
        Kr,
        Zr,
        Jr,
        $r,
        en,
        rn,
        nn,
        tn,
        on,
        an,
        un,
        sn,
        cn,
        ln,
        yn,
        kn,
        Ln,
        Fn,
        Rn,
        On,
        In,
        jn,
        Zn,
        Jn,
        et,
        nt,
        tt,
        ot,
        at,
        st,
        ct,
        ft,
        dt,
        mt,
        ht,
        gt,
        yt,
        Et,
        _t,
        bt,
        kt,
        St,
        xt,
        Tt,
        At,
        Lt,
        Ft,
        Nt,
        It,
        Bt,
        jt,
        Ut,
        Ht,
        Xt,
        no,
      ];
      function uo(e, r, n) {
        var t = n > 0 ? n : ne(e) + 1,
          o = new Array(t),
          i = ee(e, o, 0, o.length);
        return r && (o.length = i), o;
      }
      var so = {
          b: function (e, r, n, t) {
            Ne(
              "Assertion failed: " +
                $(e) +
                ", at: " +
                [
                  r ? $(r) : "unknown filename",
                  n,
                  t ? $(t) : "unknown function",
                ]
            );
          },
          W: function (e, r) {
            mo(e, r);
          },
          Ia: function (e, r) {
            return or(e, r);
          },
          Me: fr,
          v: wr,
          Ie: function (e) {
            try {
              if (!e) return -21;
              var r = {
                  sysname: 0,
                  nodename: 65,
                  domainname: 325,
                  machine: 260,
                  version: 195,
                  release: 130,
                  __size__: 390,
                },
                n = function (n, t) {
                  ae(t, e + r[n]);
                };
              return (
                n("sysname", "Emscripten"),
                n("nodename", "emscripten"),
                n("release", "1.0"),
                n("version", "#1"),
                n("machine", "x86-JS"),
                0
              );
            } catch (e) {
              return (
                (void 0 !== cr && e instanceof cr.ErrnoError) || Ne(e), -e.errno
              );
            }
          },
          Ge: br,
          Fe: kr,
          Ne: Sr,
          Ga: xr,
          Ee: Tr,
          Ce: Ar,
          Pe: function (e, r, n) {
            return 0;
          },
          ze: Dr,
          x: Lr,
          Je: Pr,
          Ke: Fr,
          Le: function (e) {
            return -63;
          },
          La: Mr,
          Ae: Rr,
          De: Or,
          He: Nr,
          Ja: Ir,
          Ha: Br,
          Re: function (e) {
            return 0;
          },
          Qe: jr,
          Oe: Ur,
          te: function (e, r) {
            if (e == r) postMessage({ cmd: "processQueuedMainThreadWork" });
            else if (w)
              postMessage({ targetThread: e, cmd: "processThreadQueue" });
            else {
              var n = er.pthreads[e],
                t = n && n.worker;
              if (!t) return;
              t.postMessage({ cmd: "processThreadQueue" });
            }
            return 1;
          },
          a: function () {
            Ne();
          },
          gb: zr,
          od: function e() {
            return (
              void 0 === e.start && (e.start = Date.now()),
              (1e3 * (Date.now() - e.start)) | 0
            );
          },
          R: or,
          Q: function (e) {
            Ne(
              "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
            );
          },
          Na: function () {
            Ne(
              "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
            );
          },
          Aa: function (e, r) {
            Ne(
              "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
            );
          },
          k: function (e, r) {
            Ne(
              "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
            );
          },
          ab: Gr,
          eb: Xr,
          Ta: Vr,
          Va: Qr,
          Ua: Kr,
          Wa: Zr,
          fb: Jr,
          ua: $r,
          Sa: en,
          bb: rn,
          cb: nn,
          Xa: tn,
          Ra: on,
          Ya: an,
          Za: un,
          db: sn,
          $a: function () {
            return cn();
          },
          _a: ln,
          o: function (e, r, n) {
            var t = Kn(r, n);
            return qe[e].apply(null, t);
          },
          ve: fn,
          S: function (e, r) {},
          Oa: Ln,
          Qa: Fn,
          J: Mn,
          s: Ke,
          O: Rn,
          F: On,
          _: In,
          D: $e,
          Ma: jn,
          Vd: function (e) {
            to.activeTexture(e);
          },
          Ud: function (e, r) {
            to.attachShader(Yr.programs[e], Yr.shaders[r]);
          },
          je: function (e, r) {
            to.disjointTimerQueryExt.beginQueryEXT(e, Yr.timerQueriesEXT[r]);
          },
          Td: function (e, r, n) {
            to.bindAttribLocation(Yr.programs[e], r, $(n));
          },
          Sd: function (e, r) {
            to.bindBuffer(e, Yr.buffers[r]);
          },
          Rd: function (e, r) {
            to.bindFramebuffer(e, Yr.framebuffers[r]);
          },
          Qd: function (e, r) {
            to.bindRenderbuffer(e, Yr.renderbuffers[r]);
          },
          Pd: function (e, r) {
            to.bindTexture(e, Yr.textures[r]);
          },
          be: function (e) {
            to.bindVertexArray(Yr.vaos[e]);
          },
          Od: function (e, r, n, t) {
            to.blendColor(e, r, n, t);
          },
          Nd: function (e) {
            to.blendEquation(e);
          },
          Md: function (e, r) {
            to.blendEquationSeparate(e, r);
          },
          Ld: function (e, r) {
            to.blendFunc(e, r);
          },
          Kd: function (e, r, n, t) {
            to.blendFuncSeparate(e, r, n, t);
          },
          Id: function (e, r, n, o) {
            to.bufferData(e, n ? t().subarray(n, n + r) : r, o);
          },
          Hd: function (e, r, n, o) {
            to.bufferSubData(e, r, t().subarray(o, o + n));
          },
          Gd: function (e) {
            return to.checkFramebufferStatus(e);
          },
          Fd: function (e) {
            to.clear(e);
          },
          Ed: function (e, r, n, t) {
            to.clearColor(e, r, n, t);
          },
          Dd: function (e) {
            to.clearDepth(e);
          },
          Cd: function (e) {
            to.clearStencil(e);
          },
          Bd: function (e, r, n, t) {
            to.colorMask(!!e, !!r, !!n, !!t);
          },
          Ad: function (e) {
            to.compileShader(Yr.shaders[e]);
          },
          zd: function (e, r, n, o, i, a, u, s) {
            to.compressedTexImage2D(
              e,
              r,
              n,
              o,
              i,
              a,
              s ? t().subarray(s, s + u) : null
            );
          },
          yd: function (e, r, n, o, i, a, u, s, c) {
            to.compressedTexSubImage2D(
              e,
              r,
              n,
              o,
              i,
              a,
              u,
              c ? t().subarray(c, c + s) : null
            );
          },
          xd: function (e, r, n, t, o, i, a, u) {
            to.copyTexImage2D(e, r, n, t, o, i, a, u);
          },
          wd: function (e, r, n, t, o, i, a, u) {
            to.copyTexSubImage2D(e, r, n, t, o, i, a, u);
          },
          vd: function () {
            var e = Yr.getNewId(Yr.programs),
              r = to.createProgram();
            return (r.name = e), (Yr.programs[e] = r), e;
          },
          ud: function (e) {
            var r = Yr.getNewId(Yr.shaders);
            return (Yr.shaders[r] = to.createShader(e)), r;
          },
          td: function (e) {
            to.cullFace(e);
          },
          sd: function (e, r) {
            for (var n = 0; n < e; n++) {
              var t = a()[(r + 4 * n) >> 2],
                o = Yr.buffers[t];
              o &&
                (to.deleteBuffer(o),
                (o.name = 0),
                (Yr.buffers[t] = null),
                t == Yr.currArrayBuffer && (Yr.currArrayBuffer = 0),
                t == Yr.currElementArrayBuffer &&
                  (Yr.currElementArrayBuffer = 0));
            }
          },
          rd: function (e, r) {
            for (var n = 0; n < e; ++n) {
              var t = a()[(r + 4 * n) >> 2],
                o = Yr.framebuffers[t];
              o &&
                (to.deleteFramebuffer(o),
                (o.name = 0),
                (Yr.framebuffers[t] = null));
            }
          },
          qd: function (e) {
            if (e) {
              var r = Yr.programs[e];
              r
                ? (to.deleteProgram(r),
                  (r.name = 0),
                  (Yr.programs[e] = null),
                  (Yr.programInfos[e] = null))
                : Yr.recordError(1281);
            }
          },
          le: function (e, r) {
            for (var n = 0; n < e; n++) {
              var t = a()[(r + 4 * n) >> 2],
                o = Yr.timerQueriesEXT[t];
              o &&
                (to.disjointTimerQueryExt.deleteQueryEXT(o),
                (Yr.timerQueriesEXT[t] = null));
            }
          },
          pd: function (e, r) {
            for (var n = 0; n < e; n++) {
              var t = a()[(r + 4 * n) >> 2],
                o = Yr.renderbuffers[t];
              o &&
                (to.deleteRenderbuffer(o),
                (o.name = 0),
                (Yr.renderbuffers[t] = null));
            }
          },
          nd: function (e) {
            if (e) {
              var r = Yr.shaders[e];
              r
                ? (to.deleteShader(r), (Yr.shaders[e] = null))
                : Yr.recordError(1281);
            }
          },
          md: function (e, r) {
            for (var n = 0; n < e; n++) {
              var t = a()[(r + 4 * n) >> 2],
                o = Yr.textures[t];
              o && (to.deleteTexture(o), (o.name = 0), (Yr.textures[t] = null));
            }
          },
          ae: function (e, r) {
            for (var n = 0; n < e; n++) {
              var t = a()[(r + 4 * n) >> 2];
              to.deleteVertexArray(Yr.vaos[t]), (Yr.vaos[t] = null);
            }
          },
          ld: function (e) {
            to.depthFunc(e);
          },
          kd: function (e) {
            to.depthMask(!!e);
          },
          jd: function (e, r) {
            to.depthRange(e, r);
          },
          id: function (e, r) {
            to.detachShader(Yr.programs[e], Yr.shaders[r]);
          },
          hd: function (e) {
            to.disable(e);
          },
          gd: function (e) {
            to.disableVertexAttribArray(e);
          },
          fd: function (e, r, n) {
            to.drawArrays(e, r, n);
          },
          Yd: function (e, r, n, t) {
            to.drawArraysInstanced(e, r, n, t);
          },
          Zd: function (e, r) {
            for (var n = Un[e], t = 0; t < e; t++) n[t] = a()[(r + 4 * t) >> 2];
            to.drawBuffers(n);
          },
          ed: function (e, r, n, t) {
            to.drawElements(e, r, n, t);
          },
          Xd: function (e, r, n, t, o) {
            to.drawElementsInstanced(e, r, n, t, o);
          },
          dd: function (e) {
            to.enable(e);
          },
          cd: function (e) {
            to.enableVertexAttribArray(e);
          },
          ie: function (e) {
            to.disjointTimerQueryExt.endQueryEXT(e);
          },
          bd: function () {
            to.finish();
          },
          ad: function () {
            to.flush();
          },
          $c: function (e, r, n, t) {
            to.framebufferRenderbuffer(e, r, n, Yr.renderbuffers[t]);
          },
          _c: function (e, r, n, t, o) {
            to.framebufferTexture2D(e, r, n, Yr.textures[t], o);
          },
          Zc: function (e) {
            to.frontFace(e);
          },
          Yc: function (e, r) {
            zn(e, r, "createBuffer", Yr.buffers);
          },
          Wc: function (e, r) {
            zn(e, r, "createFramebuffer", Yr.framebuffers);
          },
          me: function (e, r) {
            for (var n = 0; n < e; n++) {
              var t = to.disjointTimerQueryExt.createQueryEXT();
              if (!t) {
                for (Yr.recordError(1282); n < e; ) a()[(r + 4 * n++) >> 2] = 0;
                return;
              }
              var o = Yr.getNewId(Yr.timerQueriesEXT);
              (t.name = o),
                (Yr.timerQueriesEXT[o] = t),
                (a()[(r + 4 * n) >> 2] = o);
            }
          },
          Vc: function (e, r) {
            zn(e, r, "createRenderbuffer", Yr.renderbuffers);
          },
          Uc: function (e, r) {
            zn(e, r, "createTexture", Yr.textures);
          },
          $d: function (e, r) {
            zn(e, r, "createVertexArray", Yr.vaos);
          },
          Xc: function (e) {
            to.generateMipmap(e);
          },
          Tc: function (e, r, n, t, o, i, u) {
            e = Yr.programs[e];
            var s = to.getActiveAttrib(e, r);
            if (s) {
              var c = n > 0 && u ? re(s.name, u, n) : 0;
              t && (a()[t >> 2] = c),
                o && (a()[o >> 2] = s.size),
                i && (a()[i >> 2] = s.type);
            }
          },
          Sc: function (e, r, n, t, o, i, u) {
            e = Yr.programs[e];
            var s = to.getActiveUniform(e, r);
            if (s) {
              var c = n > 0 && u ? re(s.name, u, n) : 0;
              t && (a()[t >> 2] = c),
                o && (a()[o >> 2] = s.size),
                i && (a()[i >> 2] = s.type);
            }
          },
          Rc: function (e, r, n, t) {
            var o = to.getAttachedShaders(Yr.programs[e]),
              i = o.length;
            i > r && (i = r), (a()[n >> 2] = i);
            for (var u = 0; u < i; ++u) {
              var s = Yr.shaders.indexOf(o[u]);
              a()[(t + 4 * u) >> 2] = s;
            }
          },
          Qc: function (e, r) {
            return to.getAttribLocation(Yr.programs[e], $(r));
          },
          Pc: function (e, r) {
            qn(e, r, 4);
          },
          Oc: function (e, r, n) {
            n
              ? (a()[n >> 2] = to.getBufferParameter(e, r))
              : Yr.recordError(1281);
          },
          Nc: function () {
            var e = to.getError() || Yr.lastError;
            return (Yr.lastError = 0), e;
          },
          Mc: function (e, r) {
            qn(e, r, 2);
          },
          Lc: function (e, r, n, t) {
            var o = to.getFramebufferAttachmentParameter(e, r, n);
            (o instanceof WebGLRenderbuffer || o instanceof WebGLTexture) &&
              (o = 0 | o.name),
              (a()[t >> 2] = o);
          },
          Kc: function (e, r) {
            qn(e, r, 0);
          },
          Ic: function (e, r, n, t) {
            var o = to.getProgramInfoLog(Yr.programs[e]);
            null === o && (o = "(unknown error)");
            var i = r > 0 && t ? re(o, t, r) : 0;
            n && (a()[n >> 2] = i);
          },
          Jc: function (e, r, n) {
            if (n)
              if (e >= Yr.counter) Yr.recordError(1281);
              else {
                var t = Yr.programInfos[e];
                if (t)
                  if (35716 == r) {
                    var o = to.getProgramInfoLog(Yr.programs[e]);
                    null === o && (o = "(unknown error)"),
                      (a()[n >> 2] = o.length + 1);
                  } else if (35719 == r) a()[n >> 2] = t.maxUniformLength;
                  else if (35722 == r) {
                    if (-1 == t.maxAttributeLength) {
                      e = Yr.programs[e];
                      var i = to.getProgramParameter(e, 35721);
                      t.maxAttributeLength = 0;
                      for (var u = 0; u < i; ++u) {
                        var s = to.getActiveAttrib(e, u);
                        t.maxAttributeLength = Math.max(
                          t.maxAttributeLength,
                          s.name.length + 1
                        );
                      }
                    }
                    a()[n >> 2] = t.maxAttributeLength;
                  } else if (35381 == r) {
                    if (-1 == t.maxUniformBlockNameLength) {
                      e = Yr.programs[e];
                      var c = to.getProgramParameter(e, 35382);
                      for (t.maxUniformBlockNameLength = 0, u = 0; u < c; ++u) {
                        var l = to.getActiveUniformBlockName(e, u);
                        t.maxUniformBlockNameLength = Math.max(
                          t.maxUniformBlockNameLength,
                          l.length + 1
                        );
                      }
                    }
                    a()[n >> 2] = t.maxUniformBlockNameLength;
                  } else
                    a()[n >> 2] = to.getProgramParameter(Yr.programs[e], r);
                else Yr.recordError(1282);
              }
            else Yr.recordError(1281);
          },
          de: function (e, r, n) {
            if (n) {
              var t = Yr.timerQueriesEXT[e],
                o = to.disjointTimerQueryExt.getQueryObjectEXT(t, r);
              Hn(n, "boolean" == typeof o ? (o ? 1 : 0) : o);
            } else Yr.recordError(1281);
          },
          fe: function (e, r, n) {
            if (n) {
              var t,
                o = Yr.timerQueriesEXT[e],
                i = to.disjointTimerQueryExt.getQueryObjectEXT(o, r);
              (t = "boolean" == typeof i ? (i ? 1 : 0) : i), (a()[n >> 2] = t);
            } else Yr.recordError(1281);
          },
          ce: function (e, r, n) {
            if (n) {
              var t = Yr.timerQueriesEXT[e],
                o = to.disjointTimerQueryExt.getQueryObjectEXT(t, r);
              Hn(n, "boolean" == typeof o ? (o ? 1 : 0) : o);
            } else Yr.recordError(1281);
          },
          ee: function (e, r, n) {
            if (n) {
              var t,
                o = Yr.timerQueriesEXT[e],
                i = to.disjointTimerQueryExt.getQueryObjectEXT(o, r);
              (t = "boolean" == typeof i ? (i ? 1 : 0) : i), (a()[n >> 2] = t);
            } else Yr.recordError(1281);
          },
          ge: function (e, r, n) {
            n
              ? (a()[n >> 2] = to.disjointTimerQueryExt.getQueryEXT(e, r))
              : Yr.recordError(1281);
          },
          Hc: function (e, r, n) {
            n
              ? (a()[n >> 2] = to.getRenderbufferParameter(e, r))
              : Yr.recordError(1281);
          },
          Fc: function (e, r, n, t) {
            var o = to.getShaderInfoLog(Yr.shaders[e]);
            null === o && (o = "(unknown error)");
            var i = r > 0 && t ? re(o, t, r) : 0;
            n && (a()[n >> 2] = i);
          },
          Ec: function (e, r, n, t) {
            var o = to.getShaderPrecisionFormat(e, r);
            (a()[n >> 2] = o.rangeMin),
              (a()[(n + 4) >> 2] = o.rangeMax),
              (a()[t >> 2] = o.precision);
          },
          Dc: function (e, r, n, t) {
            var o = to.getShaderSource(Yr.shaders[e]);
            if (o) {
              var i = r > 0 && t ? re(o, t, r) : 0;
              n && (a()[n >> 2] = i);
            }
          },
          Gc: function (e, r, n) {
            if (n)
              if (35716 == r) {
                var t = to.getShaderInfoLog(Yr.shaders[e]);
                null === t && (t = "(unknown error)"),
                  (a()[n >> 2] = t.length + 1);
              } else if (35720 == r) {
                var o = to.getShaderSource(Yr.shaders[e]),
                  i = null === o || 0 == o.length ? 0 : o.length + 1;
                a()[n >> 2] = i;
              } else a()[n >> 2] = to.getShaderParameter(Yr.shaders[e], r);
            else Yr.recordError(1281);
          },
          Cc: function (e) {
            if (Yr.stringCache[e]) return Yr.stringCache[e];
            var r;
            switch (e) {
              case 7939:
                var n = to.getSupportedExtensions() || [];
                r = _n(
                  (n = n.concat(
                    n.map(function (e) {
                      return "GL_" + e;
                    })
                  )).join(" ")
                );
                break;
              case 7936:
              case 7937:
              case 37445:
              case 37446:
                var t = to.getParameter(e);
                t || Yr.recordError(1280), (r = _n(t));
                break;
              case 7938:
                var o = to.getParameter(7938);
                r = _n((o = "OpenGL ES 2.0 (" + o + ")"));
                break;
              case 35724:
                var i = to.getParameter(35724),
                  a = i.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== a &&
                  (3 == a[1].length && (a[1] = a[1] + "0"),
                  (i = "OpenGL ES GLSL ES " + a[1] + " (" + i + ")")),
                  (r = _n(i));
                break;
              default:
                return Yr.recordError(1280), 0;
            }
            return (Yr.stringCache[e] = r), r;
          },
          Bc: function (e, r, n) {
            n ? (s()[n >> 2] = to.getTexParameter(e, r)) : Yr.recordError(1281);
          },
          Ac: function (e, r, n) {
            n ? (a()[n >> 2] = to.getTexParameter(e, r)) : Yr.recordError(1281);
          },
          xc: function (e, r) {
            var n = 0;
            if ("]" == (r = $(r))[r.length - 1]) {
              var t = r.lastIndexOf("[");
              (n = "]" != r[t + 1] ? pr(r.slice(t + 1)) : 0),
                (r = r.slice(0, t));
            }
            var o = Yr.programInfos[e] && Yr.programInfos[e].uniforms[r];
            return o && n >= 0 && n < o[0] ? o[1] + n : -1;
          },
          zc: function (e, r, n) {
            Wn(e, r, n, 2);
          },
          yc: function (e, r, n) {
            Wn(e, r, n, 0);
          },
          uc: function (e, r, n) {
            n
              ? (a()[n >> 2] = to.getVertexAttribOffset(e, r))
              : Yr.recordError(1281);
          },
          wc: function (e, r, n) {
            Gn(e, r, n, 2);
          },
          vc: function (e, r, n) {
            Gn(e, r, n, 5);
          },
          tc: function (e, r) {
            to.hint(e, r);
          },
          sc: function (e) {
            var r = Yr.buffers[e];
            return r ? to.isBuffer(r) : 0;
          },
          rc: function (e) {
            return to.isEnabled(e);
          },
          qc: function (e) {
            var r = Yr.framebuffers[e];
            return r ? to.isFramebuffer(r) : 0;
          },
          pc: function (e) {
            return (e = Yr.programs[e]) ? to.isProgram(e) : 0;
          },
          ke: function (e) {
            var r = Yr.timerQueriesEXT[e];
            return r ? to.disjointTimerQueryExt.isQueryEXT(r) : 0;
          },
          oc: function (e) {
            var r = Yr.renderbuffers[e];
            return r ? to.isRenderbuffer(r) : 0;
          },
          nc: function (e) {
            var r = Yr.shaders[e];
            return r ? to.isShader(r) : 0;
          },
          mc: function (e) {
            var r = Yr.textures[e];
            return r ? to.isTexture(r) : 0;
          },
          _d: function (e) {
            var r = Yr.vaos[e];
            return r ? to.isVertexArray(r) : 0;
          },
          lc: function (e) {
            to.lineWidth(e);
          },
          kc: function (e) {
            to.linkProgram(Yr.programs[e]), Yr.populateUniformTable(e);
          },
          jc: function (e, r) {
            3317 == e && (Yr.unpackAlignment = r), to.pixelStorei(e, r);
          },
          ic: function (e, r) {
            to.polygonOffset(e, r);
          },
          he: function (e, r) {
            to.disjointTimerQueryExt.queryCounterEXT(Yr.timerQueriesEXT[e], r);
          },
          hc: function (e, r, n, t, o, i, a) {
            var u = Xn(i, o, n, t, a);
            u ? to.readPixels(e, r, n, t, o, i, u) : Yr.recordError(1280);
          },
          gc: function () {},
          fc: function (e, r, n, t) {
            to.renderbufferStorage(e, r, n, t);
          },
          ec: function (e, r) {
            to.sampleCoverage(e, !!r);
          },
          dc: function (e, r, n, t) {
            to.scissor(e, r, n, t);
          },
          cc: function () {
            Yr.recordError(1280);
          },
          bc: function (e, r, n, t) {
            var o = Yr.getSource(e, r, n, t);
            to.shaderSource(Yr.shaders[e], o);
          },
          ac: function (e, r, n) {
            to.stencilFunc(e, r, n);
          },
          $b: function (e, r, n, t) {
            to.stencilFuncSeparate(e, r, n, t);
          },
          _b: function (e) {
            to.stencilMask(e);
          },
          Zb: function (e, r) {
            to.stencilMaskSeparate(e, r);
          },
          Yb: function (e, r, n) {
            to.stencilOp(e, r, n);
          },
          Xb: function (e, r, n, t) {
            to.stencilOpSeparate(e, r, n, t);
          },
          Wb: function (e, r, n, t, o, i, a, u, s) {
            to.texImage2D(e, r, n, t, o, i, a, u, s ? Xn(u, a, t, o, s) : null);
          },
          Vb: function (e, r, n) {
            to.texParameterf(e, r, n);
          },
          Ub: function (e, r, n) {
            var t = s()[n >> 2];
            to.texParameterf(e, r, t);
          },
          Tb: function (e, r, n) {
            to.texParameteri(e, r, n);
          },
          Sb: function (e, r, n) {
            var t = a()[n >> 2];
            to.texParameteri(e, r, t);
          },
          Rb: function (e, r, n, t, o, i, a, u, s) {
            var c = null;
            s && (c = Xn(u, a, o, i, s)),
              to.texSubImage2D(e, r, n, t, o, i, a, u, c);
          },
          Qb: function (e, r) {
            to.uniform1f(Yr.uniforms[e], r);
          },
          Pb: function (e, r, n) {
            if (r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var t = Yr.miniTempBufferFloatViews[r - 1], o = 0;
                o < r;
                ++o
              )
                t[o] = s()[(n + 4 * o) >> 2];
            else t = s().subarray(n >> 2, (n + 4 * r) >> 2);
            to.uniform1fv(Yr.uniforms[e], t);
          },
          Ob: function (e, r) {
            to.uniform1i(Yr.uniforms[e], r);
          },
          Nb: function (e, r, n) {
            if (r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (var t = Yr.miniTempBufferIntViews[r - 1], o = 0; o < r; ++o)
                t[o] = a()[(n + 4 * o) >> 2];
            else t = a().subarray(n >> 2, (n + 4 * r) >> 2);
            to.uniform1iv(Yr.uniforms[e], t);
          },
          Mb: function (e, r, n) {
            to.uniform2f(Yr.uniforms[e], r, n);
          },
          Lb: function (e, r, n) {
            if (2 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var t = Yr.miniTempBufferFloatViews[2 * r - 1], o = 0;
                o < 2 * r;
                o += 2
              )
                (t[o] = s()[(n + 4 * o) >> 2]),
                  (t[o + 1] = s()[(n + (4 * o + 4)) >> 2]);
            else t = s().subarray(n >> 2, (n + 8 * r) >> 2);
            to.uniform2fv(Yr.uniforms[e], t);
          },
          Kb: function (e, r, n) {
            to.uniform2i(Yr.uniforms[e], r, n);
          },
          Jb: function (e, r, n) {
            if (2 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var t = Yr.miniTempBufferIntViews[2 * r - 1], o = 0;
                o < 2 * r;
                o += 2
              )
                (t[o] = a()[(n + 4 * o) >> 2]),
                  (t[o + 1] = a()[(n + (4 * o + 4)) >> 2]);
            else t = a().subarray(n >> 2, (n + 8 * r) >> 2);
            to.uniform2iv(Yr.uniforms[e], t);
          },
          Ib: function (e, r, n, t) {
            to.uniform3f(Yr.uniforms[e], r, n, t);
          },
          Hb: function (e, r, n) {
            if (3 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var t = Yr.miniTempBufferFloatViews[3 * r - 1], o = 0;
                o < 3 * r;
                o += 3
              )
                (t[o] = s()[(n + 4 * o) >> 2]),
                  (t[o + 1] = s()[(n + (4 * o + 4)) >> 2]),
                  (t[o + 2] = s()[(n + (4 * o + 8)) >> 2]);
            else t = s().subarray(n >> 2, (n + 12 * r) >> 2);
            to.uniform3fv(Yr.uniforms[e], t);
          },
          Gb: function (e, r, n, t) {
            to.uniform3i(Yr.uniforms[e], r, n, t);
          },
          Fb: function (e, r, n) {
            if (3 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var t = Yr.miniTempBufferIntViews[3 * r - 1], o = 0;
                o < 3 * r;
                o += 3
              )
                (t[o] = a()[(n + 4 * o) >> 2]),
                  (t[o + 1] = a()[(n + (4 * o + 4)) >> 2]),
                  (t[o + 2] = a()[(n + (4 * o + 8)) >> 2]);
            else t = a().subarray(n >> 2, (n + 12 * r) >> 2);
            to.uniform3iv(Yr.uniforms[e], t);
          },
          Eb: function (e, r, n, t, o) {
            to.uniform4f(Yr.uniforms[e], r, n, t, o);
          },
          Db: function (e, r, n) {
            if (4 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var t = Yr.miniTempBufferFloatViews[4 * r - 1], o = 0;
                o < 4 * r;
                o += 4
              )
                (t[o] = s()[(n + 4 * o) >> 2]),
                  (t[o + 1] = s()[(n + (4 * o + 4)) >> 2]),
                  (t[o + 2] = s()[(n + (4 * o + 8)) >> 2]),
                  (t[o + 3] = s()[(n + (4 * o + 12)) >> 2]);
            else t = s().subarray(n >> 2, (n + 16 * r) >> 2);
            to.uniform4fv(Yr.uniforms[e], t);
          },
          Cb: function (e, r, n, t, o) {
            to.uniform4i(Yr.uniforms[e], r, n, t, o);
          },
          Bb: function (e, r, n) {
            if (4 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var t = Yr.miniTempBufferIntViews[4 * r - 1], o = 0;
                o < 4 * r;
                o += 4
              )
                (t[o] = a()[(n + 4 * o) >> 2]),
                  (t[o + 1] = a()[(n + (4 * o + 4)) >> 2]),
                  (t[o + 2] = a()[(n + (4 * o + 8)) >> 2]),
                  (t[o + 3] = a()[(n + (4 * o + 12)) >> 2]);
            else t = a().subarray(n >> 2, (n + 16 * r) >> 2);
            to.uniform4iv(Yr.uniforms[e], t);
          },
          Ab: function (e, r, n, t) {
            if (4 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var o = Yr.miniTempBufferFloatViews[4 * r - 1], i = 0;
                i < 4 * r;
                i += 4
              )
                (o[i] = s()[(t + 4 * i) >> 2]),
                  (o[i + 1] = s()[(t + (4 * i + 4)) >> 2]),
                  (o[i + 2] = s()[(t + (4 * i + 8)) >> 2]),
                  (o[i + 3] = s()[(t + (4 * i + 12)) >> 2]);
            else o = s().subarray(t >> 2, (t + 16 * r) >> 2);
            to.uniformMatrix2fv(Yr.uniforms[e], !!n, o);
          },
          zb: function (e, r, n, t) {
            if (9 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var o = Yr.miniTempBufferFloatViews[9 * r - 1], i = 0;
                i < 9 * r;
                i += 9
              )
                (o[i] = s()[(t + 4 * i) >> 2]),
                  (o[i + 1] = s()[(t + (4 * i + 4)) >> 2]),
                  (o[i + 2] = s()[(t + (4 * i + 8)) >> 2]),
                  (o[i + 3] = s()[(t + (4 * i + 12)) >> 2]),
                  (o[i + 4] = s()[(t + (4 * i + 16)) >> 2]),
                  (o[i + 5] = s()[(t + (4 * i + 20)) >> 2]),
                  (o[i + 6] = s()[(t + (4 * i + 24)) >> 2]),
                  (o[i + 7] = s()[(t + (4 * i + 28)) >> 2]),
                  (o[i + 8] = s()[(t + (4 * i + 32)) >> 2]);
            else o = s().subarray(t >> 2, (t + 36 * r) >> 2);
            to.uniformMatrix3fv(Yr.uniforms[e], !!n, o);
          },
          yb: function (e, r, n, t) {
            if (16 * r <= Yr.MINI_TEMP_BUFFER_SIZE)
              for (
                var o = Yr.miniTempBufferFloatViews[16 * r - 1], i = 0;
                i < 16 * r;
                i += 16
              )
                (o[i] = s()[(t + 4 * i) >> 2]),
                  (o[i + 1] = s()[(t + (4 * i + 4)) >> 2]),
                  (o[i + 2] = s()[(t + (4 * i + 8)) >> 2]),
                  (o[i + 3] = s()[(t + (4 * i + 12)) >> 2]),
                  (o[i + 4] = s()[(t + (4 * i + 16)) >> 2]),
                  (o[i + 5] = s()[(t + (4 * i + 20)) >> 2]),
                  (o[i + 6] = s()[(t + (4 * i + 24)) >> 2]),
                  (o[i + 7] = s()[(t + (4 * i + 28)) >> 2]),
                  (o[i + 8] = s()[(t + (4 * i + 32)) >> 2]),
                  (o[i + 9] = s()[(t + (4 * i + 36)) >> 2]),
                  (o[i + 10] = s()[(t + (4 * i + 40)) >> 2]),
                  (o[i + 11] = s()[(t + (4 * i + 44)) >> 2]),
                  (o[i + 12] = s()[(t + (4 * i + 48)) >> 2]),
                  (o[i + 13] = s()[(t + (4 * i + 52)) >> 2]),
                  (o[i + 14] = s()[(t + (4 * i + 56)) >> 2]),
                  (o[i + 15] = s()[(t + (4 * i + 60)) >> 2]);
            else o = s().subarray(t >> 2, (t + 64 * r) >> 2);
            to.uniformMatrix4fv(Yr.uniforms[e], !!n, o);
          },
          xb: function (e) {
            to.useProgram(Yr.programs[e]);
          },
          wb: function (e) {
            to.validateProgram(Yr.programs[e]);
          },
          vb: function (e, r) {
            to.vertexAttrib1f(e, r);
          },
          ub: function (e, r) {
            to.vertexAttrib1f(e, s()[r >> 2]);
          },
          tb: function (e, r, n) {
            to.vertexAttrib2f(e, r, n);
          },
          sb: function (e, r) {
            to.vertexAttrib2f(e, s()[r >> 2], s()[(r + 4) >> 2]);
          },
          rb: function (e, r, n, t) {
            to.vertexAttrib3f(e, r, n, t);
          },
          qb: function (e, r) {
            to.vertexAttrib3f(
              e,
              s()[r >> 2],
              s()[(r + 4) >> 2],
              s()[(r + 8) >> 2]
            );
          },
          pb: function (e, r, n, t, o) {
            to.vertexAttrib4f(e, r, n, t, o);
          },
          ob: function (e, r) {
            to.vertexAttrib4f(
              e,
              s()[r >> 2],
              s()[(r + 4) >> 2],
              s()[(r + 8) >> 2],
              s()[(r + 12) >> 2]
            );
          },
          Wd: function (e, r) {
            to.vertexAttribDivisor(e, r);
          },
          nb: function (e, r, n, t, o, i) {
            to.vertexAttribPointer(e, r, n, !!t, o, i);
          },
          mb: function (e, r, n, t) {
            to.viewport(e, r, n, t);
          },
          pe: function () {
            return "undefined" != typeof SharedArrayBuffer;
          },
          L: function () {
            return 0 | Xe;
          },
          ue: function () {
            return 0 | Ge;
          },
          f: function (e, r) {
            !(function (e, r) {
              throw (So(e, r || 1), "longjmp");
            })(e, r);
          },
          oe: function (e, r, n) {
            t().copyWithin(e, r, r + n);
          },
          re: function (e, r, n) {
            Qn.length = r;
            for (var t = n >> 3, o = 0; o < r; o++) Qn[o] = c()[t + o];
            var i = e < 0,
              a = i ? qe[-e - 1] : ao[e];
            if (i) {
              var u = Kn(Qn[1], Qn[2]);
              return a.apply(null, u);
            }
            return a.apply(null, Qn);
          },
          Pa: Zn,
          ta: Jn,
          we: function (e) {
            var r = Bn();
            if (e <= r) return !1;
            if (e > 2147483648) return !1;
            for (var n, t, o = 1; o <= 4; o *= 2) {
              var i = r * (1 + 0.2 / o);
              if (
                ((i = Math.min(i, e + 100663296)),
                $n(
                  Math.min(
                    2147483648,
                    ((n = Math.max(16777216, e, i)) % (t = 65536) > 0 &&
                      (n += t - (n % t)),
                    n)
                  )
                ))
              )
                return !0;
            }
            return !1;
          },
          $: et,
          la: nt,
          K: Cn,
          Da: function (e) {},
          T: tt,
          ma: ot,
          ca: at,
          Z: st,
          Y: ct,
          fa: ft,
          da: dt,
          ea: mt,
          ra: ht,
          pa: gt,
          oa: yt,
          sa: Et,
          qa: _t,
          ga: bt,
          ba: kt,
          qe: function (e, r) {},
          ha: St,
          ja: xt,
          ia: Tt,
          ka: At,
          aa: Lt,
          na: Ft,
          se: function (e, r) {
            return (function (e, r) {
              var n = {},
                t = r >> 2;
              (n.alpha = !!a()[t + 0]),
                (n.depth = !!a()[t + 1]),
                (n.stencil = !!a()[t + 2]),
                (n.antialias = !!a()[t + 3]),
                (n.premultipliedAlpha = !!a()[t + 4]),
                (n.preserveDrawingBuffer = !!a()[t + 5]);
              var o = a()[t + 6];
              (n.powerPreference = Mt[o]),
                (n.failIfMajorPerformanceCaveat = !!a()[t + 7]),
                (n.majorVersion = a()[t + 8]),
                (n.minorVersion = a()[t + 9]),
                (n.enableExtensionsByDefault = a()[t + 10]),
                (n.explicitSwapControl = a()[t + 11]),
                (n.proxyContextToMainThread = a()[t + 12]),
                (n.renderViaOffscreenBackBuffer = a()[t + 13]);
              var i = hn(e);
              return i
                ? n.explicitSwapControl
                  ? 0
                  : Yr.createContext(i, n)
                : 0;
            })(e, r);
          },
          xe: function (e, r) {
            var n = Ot(),
              t = 0;
            return (
              n.forEach(function (n, o) {
                var i = r + t;
                (a()[(e + 4 * o) >> 2] = i), ae(n, i), (t += n.length + 1);
              }),
              0
            );
          },
          ye: function (e, r) {
            var n = Ot();
            a()[e >> 2] = n.length;
            var t = 0;
            return (
              n.forEach(function (e) {
                t += e.length + 1;
              }),
              (a()[r >> 2] = t),
              0
            );
          },
          H: function (e) {
            !(function (e, r) {
              (r && B && 0 === e) ||
                (B ||
                  (er.terminateAllThreads(),
                  (V = !0),
                  e,
                  w || !0,
                  l.onExit && l.onExit(e)),
                g(e, new $o(e)));
            })(e);
          },
          N: Nt,
          Ka: It,
          Be: Bt,
          ib: jt,
          X: Ut,
          I: function e(r) {
            e.buffer ||
              ((e.buffer = yo(256)),
              (zt[0] = "Success"),
              (zt[-1] = "Invalid value for 'ai_flags' field"),
              (zt[-2] = "NAME or SERVICE is unknown"),
              (zt[-3] = "Temporary failure in name resolution"),
              (zt[-4] = "Non-recoverable failure in name res"),
              (zt[-6] = "'ai_family' not supported"),
              (zt[-7] = "'ai_socktype' not supported"),
              (zt[-8] = "SERVICE not supported for 'ai_socktype'"),
              (zt[-10] = "Memory allocation failure"),
              (zt[-11] = "System error returned in 'errno'"),
              (zt[-12] = "Argument buffer overflow"));
            var n = "Unknown error";
            return (
              r in zt && (n = zt[r].length > 255 ? "Message too long" : zt[r]),
              ae(n, e.buffer),
              e.buffer
            );
          },
          c: function () {
            return 0 | H();
          },
          B: Ht,
          z: function (e, r, n, t, o, i, a) {
            var u = Er(e, r);
            if (u.errno) return -6;
            var s = u.port,
              c = u.addr,
              l = !1;
            if (n && t) {
              var f;
              if (1 & a || !(f = hr.lookup_addr(c))) {
                if (8 & a) return -2;
              } else c = f;
              re(c, n, t) + 1 >= t && (l = !0);
            }
            return (
              o && i && re((s = "" + s), o, i) + 1 >= i && (l = !0), l ? -12 : 0
            );
          },
          n: function (e) {
            var r = Date.now();
            return (
              (a()[e >> 2] = (r / 1e3) | 0),
              (a()[(e + 4) >> 2] = ((r % 1e3) * 1e3) | 0),
              0
            );
          },
          Se: function (e) {
            return Gt(e, qt);
          },
          w: Gt,
          ne: function () {
            er.initRuntime();
          },
          xa: function (e) {
            var r = Ko();
            try {
              return zo(e);
            } catch (e) {
              if ((Jo(r), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          l: function (e, r) {
            var n = Ko();
            try {
              return Ho(e, r);
            } catch (e) {
              if ((Jo(n), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          h: function (e, r, n) {
            var t = Ko();
            try {
              return qo(e, r, n);
            } catch (e) {
              if ((Jo(t), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          M: function (e, r, n, t) {
            var o = Ko();
            try {
              return Wo(e, r, n, t);
            } catch (e) {
              if ((Jo(o), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          za: function (e, r, n, t, o) {
            var i = Ko();
            try {
              return Go(e, r, n, t, o);
            } catch (e) {
              if ((Jo(i), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          wa: function (e, r, n, t, o, i) {
            var a = Ko();
            try {
              return Xo(e, r, n, t, o, i);
            } catch (e) {
              if ((Jo(a), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          V: function (e, r, n, t, o, i, a, u, s) {
            var c = Ko();
            try {
              return Yo(e, r, n, t, o, i, a, u, s);
            } catch (e) {
              if ((Jo(c), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          lb: function (e, r, n, t, o, i, a, u) {
            var s = Ko();
            try {
              return Vo(e, r, n, t, o, i, a, u);
            } catch (e) {
              if ((Jo(s), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          jb: function (e, r, n, t) {
            var o = Ko();
            try {
              return Qo(e, r, n, t);
            } catch (e) {
              if ((Jo(o), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          m: function (e, r) {
            var n = Ko();
            try {
              Mo(e, r);
            } catch (e) {
              if ((Jo(n), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          A: function (e, r, n) {
            var t = Ko();
            try {
              Ro(e, r, n);
            } catch (e) {
              if ((Jo(t), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          P: function (e, r, n, t) {
            var o = Ko();
            try {
              Oo(e, r, n, t);
            } catch (e) {
              if ((Jo(o), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          g: function (e, r, n, t, o) {
            var i = Ko();
            try {
              No(e, r, n, t, o);
            } catch (e) {
              if ((Jo(i), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          U: function (e, r, n, t, o, i) {
            var a = Ko();
            try {
              Io(e, r, n, t, o, i);
            } catch (e) {
              if ((Jo(a), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          hb: function (e, r, n, t, o, i, a) {
            var u = Ko();
            try {
              Bo(e, r, n, t, o, i, a);
            } catch (e) {
              if ((Jo(u), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          va: function (e, r, n, t, o, i, a, u, s) {
            var c = Ko();
            try {
              jo(e, r, n, t, o, i, a, u, s);
            } catch (e) {
              if ((Jo(c), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          kb: function (e, r, n, t, o, i, a, u, s, c) {
            var l = Ko();
            try {
              Uo(e, r, n, t, o, i, a, u, s, c);
            } catch (e) {
              if ((Jo(l), e !== e + 0 && "longjmp" !== e)) throw e;
              So(1, 0);
            }
          },
          ya: function (e) {
            return Yt(e, qt);
          },
          y: Yt,
          memory: j || l.wasmMemory,
          Ca: function (e) {
            Xt();
            var r = new Date(
                a()[(e + 20) >> 2] + 1900,
                a()[(e + 16) >> 2],
                a()[(e + 12) >> 2],
                a()[(e + 8) >> 2],
                a()[(e + 4) >> 2],
                a()[e >> 2],
                0
              ),
              n = a()[(e + 32) >> 2],
              t = r.getTimezoneOffset(),
              o = new Date(r.getFullYear(), 0, 1),
              i = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
              u = o.getTimezoneOffset(),
              s = Math.min(u, i);
            if (n < 0) a()[(e + 32) >> 2] = Number(i != u && s == t);
            else if (n > 0 != (s == t)) {
              var c = Math.max(u, i),
                l = n > 0 ? s : c;
              r.setTime(r.getTime() + 6e4 * (l - t));
            }
            a()[(e + 24) >> 2] = r.getDay();
            var f = ((r.getTime() - o.getTime()) / 864e5) | 0;
            return (a()[(e + 28) >> 2] = f), (r.getTime() / 1e3) | 0;
          },
          Jd: function (e) {
            return e === er.MAIN_THREAD_ID
              ? (F("Main thread (id=" + e + ") cannot be canceled!"), Ve.ESRCH)
              : e
              ? a()[(e + 12) >> 2] !== e
                ? (F(
                    "pthread_cancel attempted on thread " +
                      e +
                      ", which does not point to a valid thread, or does not exist anymore!"
                  ),
                  Ve.ESRCH)
                : (Atomics.compareExchange(u(), (e + 0) >> 2, 0, 2),
                  w ? postMessage({ cmd: "cancelThread", thread: e }) : Ze(e),
                  0)
              : (F("pthread_cancel attempted on a null thread pointer!"),
                Ve.ESRCH);
          },
          Ea: function (e) {
            var r = er.exitHandlers.pop();
            e && r();
          },
          Fa: function (e, r) {
            null === er.exitHandlers && (er.exitHandlers = []),
              er.exitHandlers.push(function () {
                Mo(e, r);
              });
          },
          r: function (e, r, n, t) {
            if ("undefined" == typeof SharedArrayBuffer)
              return (
                F(
                  "Current environment does not support SharedArrayBuffer, pthreads are not available!"
                ),
                6
              );
            if (!e)
              return F("pthread_create called with a null thread pointer!"), 28;
            var o = [];
            if (w && 0 === o.length) return Lo(687865856, e, r, n, t);
            var i = 0,
              s = 0,
              c = 0,
              l = 0,
              f = 0;
            if (r)
              if (
                ((i = a()[r >> 2]),
                (i += 81920),
                (s = a()[(r + 8) >> 2]),
                (c = 0 !== a()[(r + 12) >> 2]),
                0 === a()[(r + 16) >> 2])
              ) {
                var d = a()[(r + 20) >> 2],
                  m = a()[(r + 24) >> 2];
                !(function (e, r, n) {
                  if (!r && !n) return Ve.EINVAL;
                  if (!e)
                    return (
                      F(
                        "pthread_getschedparam called with a null thread pointer!"
                      ),
                      Ve.ESRCH
                    );
                  if (a()[(e + 12) >> 2] !== e)
                    return (
                      F(
                        "pthread_getschedparam attempted on thread " +
                          e +
                          ", which does not point to a valid thread, or does not exist anymore!"
                      ),
                      Ve.ESRCH
                    );
                  var t = Atomics.load(u(), (e + 108 + 20) >> 2),
                    o = Atomics.load(u(), (e + 108 + 24) >> 2);
                  r && (a()[r >> 2] = t), n && (a()[n >> 2] = o);
                })(
                  er.currentProxiedOperationCallerThread
                    ? er.currentProxiedOperationCallerThread
                    : Qt(),
                  r + 20,
                  r + 24
                ),
                  (l = a()[(r + 20) >> 2]),
                  (f = a()[(r + 24) >> 2]),
                  (a()[(r + 20) >> 2] = d),
                  (a()[(r + 24) >> 2] = m);
              } else (l = a()[(r + 20) >> 2]), (f = a()[(r + 24) >> 2]);
            else i = 2097152;
            var p = 0 == s;
            p ? (s = Eo(16, i)) : Q((s -= i) > 0);
            for (var v = yo(232), h = 0; h < 58; ++h) u()[(v >> 2) + h] = 0;
            (a()[e >> 2] = v), (a()[(v + 12) >> 2] = v);
            var g = v + 156;
            a()[g >> 2] = g;
            var y = {
              stackBase: s,
              stackSize: i,
              allocatedOwnStack: p,
              schedPolicy: l,
              schedPrio: f,
              detached: c,
              startRoutine: n,
              pthread_ptr: v,
              parent_pthread_ptr: Qt(),
              arg: t,
              transferList: o,
            };
            return w ? ((y.cmd = "spawnThread"), postMessage(y, o)) : Vt(y), 0;
          },
          q: function (e, r) {
            return (function (e, r, n) {
              if (!e)
                return (
                  F("pthread_join attempted on a null thread pointer!"),
                  Ve.ESRCH
                );
              if (w && Y == e)
                return (
                  F("PThread " + e + " is attempting to join to itself!"),
                  Ve.EDEADLK
                );
              if (!w && er.mainThreadBlock == e)
                return (
                  F("Main thread " + e + " is attempting to join to itself!"),
                  Ve.EDEADLK
                );
              if (a()[(e + 12) >> 2] !== e)
                return (
                  F(
                    "pthread_join attempted on thread " +
                      e +
                      ", which does not point to a valid thread, or does not exist anymore!"
                  ),
                  Ve.ESRCH
                );
              if (Atomics.load(u(), (e + 68) >> 2))
                return (
                  F(
                    "Attempted to join thread " +
                      e +
                      ", which was already detached!"
                  ),
                  Ve.EINVAL
                );
              for (n && fn(); ; ) {
                var t = Atomics.load(u(), (e + 0) >> 2);
                if (1 == t) {
                  var o = Atomics.load(u(), (e + 4) >> 2);
                  return (
                    r && (a()[r >> 2] = o),
                    Atomics.store(u(), (e + 68) >> 2, 1),
                    w
                      ? postMessage({ cmd: "cleanupThread", thread: e })
                      : Je(e),
                    0
                  );
                }
                if (!n) return Ve.EBUSY;
                Kt(), w || Ao(), Mn(e + 0, t, w ? 100 : 1);
              }
            })(e, r, !0);
          },
          i: Qt,
          j: function (e) {
            return (e = +e) >= 0 ? +Ae(e + 0.5) : +Te(e - 0.5);
          },
          E: function (e) {
            return (e = +e) >= 0 ? +Ae(e + 0.5) : +Te(e - 0.5);
          },
          t: function e(r, n, t, o) {
            (r |= 0), (n |= 0), (t |= 0), (o |= 0);
            var i = 0;
            for (Yn = (Yn + 1) | 0, a()[r >> 2] = Yn; (0 | i) < (0 | o); ) {
              if (0 == (0 | a()[(t + (i << 3)) >> 2]))
                return (
                  (a()[(t + (i << 3)) >> 2] = Yn),
                  (a()[(t + (4 + (i << 3))) >> 2] = n),
                  (a()[(t + (8 + (i << 3))) >> 2] = 0),
                  z(0 | o),
                  0 | t
                );
              i = (i + 1) | 0;
            }
            return (
              (t =
                0 |
                e(
                  0 | r,
                  0 | n,
                  0 |
                    (t =
                      0 | ho(0 | t, (8 * ((1 + (o = (2 * o) | 0)) | 0)) | 0)),
                  0 | o
                )),
              z(0 | o),
              0 | t
            );
          },
          d: function (e) {
            z(0 | e);
          },
          C: function (e, r, n) {
            return 0;
          },
          G: function (e, r) {
            return 14 == e && r, 0;
          },
          p: function (e, r, n, t) {
            var o = a()[(t + 40) >> 2],
              i = {
                tm_sec: a()[t >> 2],
                tm_min: a()[(t + 4) >> 2],
                tm_hour: a()[(t + 8) >> 2],
                tm_mday: a()[(t + 12) >> 2],
                tm_mon: a()[(t + 16) >> 2],
                tm_year: a()[(t + 20) >> 2],
                tm_wday: a()[(t + 24) >> 2],
                tm_yday: a()[(t + 28) >> 2],
                tm_isdst: a()[(t + 32) >> 2],
                tm_gmtoff: a()[(t + 36) >> 2],
                tm_zone: o ? $(o) : "",
              },
              u = $(n),
              s = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y",
              };
            for (var c in s) u = u.replace(new RegExp(c, "g"), s[c]);
            var l = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              f = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
            function d(e, r, n) {
              for (
                var t = "number" == typeof e ? e.toString() : e || "";
                t.length < r;

              )
                t = n[0] + t;
              return t;
            }
            function m(e, r) {
              return d(e, r, "0");
            }
            function p(e, r) {
              function n(e) {
                return e < 0 ? -1 : e > 0 ? 1 : 0;
              }
              var t;
              return (
                0 === (t = n(e.getFullYear() - r.getFullYear())) &&
                  0 === (t = n(e.getMonth() - r.getMonth())) &&
                  (t = n(e.getDate() - r.getDate())),
                t
              );
            }
            function v(e) {
              switch (e.getDay()) {
                case 0:
                  return new Date(e.getFullYear() - 1, 11, 29);
                case 1:
                  return e;
                case 2:
                  return new Date(e.getFullYear(), 0, 3);
                case 3:
                  return new Date(e.getFullYear(), 0, 2);
                case 4:
                  return new Date(e.getFullYear(), 0, 1);
                case 5:
                  return new Date(e.getFullYear() - 1, 11, 31);
                case 6:
                  return new Date(e.getFullYear() - 1, 11, 30);
              }
            }
            function h(e) {
              var r = ro(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                n = new Date(r.getFullYear(), 0, 4),
                t = new Date(r.getFullYear() + 1, 0, 4),
                o = v(n),
                i = v(t);
              return p(o, r) <= 0
                ? p(i, r) <= 0
                  ? r.getFullYear() + 1
                  : r.getFullYear()
                : r.getFullYear() - 1;
            }
            var g = {
              "%a": function (e) {
                return l[e.tm_wday].substring(0, 3);
              },
              "%A": function (e) {
                return l[e.tm_wday];
              },
              "%b": function (e) {
                return f[e.tm_mon].substring(0, 3);
              },
              "%B": function (e) {
                return f[e.tm_mon];
              },
              "%C": function (e) {
                return m(((e.tm_year + 1900) / 100) | 0, 2);
              },
              "%d": function (e) {
                return m(e.tm_mday, 2);
              },
              "%e": function (e) {
                return d(e.tm_mday, 2, " ");
              },
              "%g": function (e) {
                return h(e).toString().substring(2);
              },
              "%G": function (e) {
                return h(e);
              },
              "%H": function (e) {
                return m(e.tm_hour, 2);
              },
              "%I": function (e) {
                var r = e.tm_hour;
                return 0 == r ? (r = 12) : r > 12 && (r -= 12), m(r, 2);
              },
              "%j": function (e) {
                return m(
                  e.tm_mday + Jt(Zt(e.tm_year + 1900) ? $t : eo, e.tm_mon - 1),
                  3
                );
              },
              "%m": function (e) {
                return m(e.tm_mon + 1, 2);
              },
              "%M": function (e) {
                return m(e.tm_min, 2);
              },
              "%n": function () {
                return "\n";
              },
              "%p": function (e) {
                return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM";
              },
              "%S": function (e) {
                return m(e.tm_sec, 2);
              },
              "%t": function () {
                return "\t";
              },
              "%u": function (e) {
                return e.tm_wday || 7;
              },
              "%U": function (e) {
                var r = new Date(e.tm_year + 1900, 0, 1),
                  n = 0 === r.getDay() ? r : ro(r, 7 - r.getDay()),
                  t = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                if (p(n, t) < 0) {
                  var o =
                      Jt(Zt(t.getFullYear()) ? $t : eo, t.getMonth() - 1) - 31,
                    i = 31 - n.getDate() + o + t.getDate();
                  return m(Math.ceil(i / 7), 2);
                }
                return 0 === p(n, r) ? "01" : "00";
              },
              "%V": function (e) {
                var r,
                  n = new Date(e.tm_year + 1900, 0, 4),
                  t = new Date(e.tm_year + 1901, 0, 4),
                  o = v(n),
                  i = v(t),
                  a = ro(new Date(e.tm_year + 1900, 0, 1), e.tm_yday);
                return p(a, o) < 0
                  ? "53"
                  : p(i, a) <= 0
                  ? "01"
                  : ((r =
                      o.getFullYear() < e.tm_year + 1900
                        ? e.tm_yday + 32 - o.getDate()
                        : e.tm_yday + 1 - o.getDate()),
                    m(Math.ceil(r / 7), 2));
              },
              "%w": function (e) {
                return e.tm_wday;
              },
              "%W": function (e) {
                var r = new Date(e.tm_year, 0, 1),
                  n =
                    1 === r.getDay()
                      ? r
                      : ro(r, 0 === r.getDay() ? 1 : 7 - r.getDay() + 1),
                  t = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                if (p(n, t) < 0) {
                  var o =
                      Jt(Zt(t.getFullYear()) ? $t : eo, t.getMonth() - 1) - 31,
                    i = 31 - n.getDate() + o + t.getDate();
                  return m(Math.ceil(i / 7), 2);
                }
                return 0 === p(n, r) ? "01" : "00";
              },
              "%y": function (e) {
                return (e.tm_year + 1900).toString().substring(2);
              },
              "%Y": function (e) {
                return e.tm_year + 1900;
              },
              "%z": function (e) {
                var r = e.tm_gmtoff,
                  n = r >= 0;
                return (
                  (r = ((r = Math.abs(r) / 60) / 60) * 100 + (r % 60)),
                  (n ? "+" : "-") + String("0000" + r).slice(-4)
                );
              },
              "%Z": function (e) {
                return e.tm_zone;
              },
              "%%": function () {
                return "%";
              },
            };
            for (var c in g)
              u.indexOf(c) >= 0 && (u = u.replace(new RegExp(c, "g"), g[c](i)));
            var y = uo(u, !1);
            return y.length > r ? 0 : (ie(y, e), y.length - 1);
          },
          Ba: no,
          table: G,
          e: function (e, r, n) {
            (e |= 0), (r |= 0), (n |= 0);
            for (
              var t = 0, o = 0;
              (0 | t) < (0 | n) &&
              0 != (0 | (o = 0 | a()[(r + (t << 3)) >> 2]));

            ) {
              if ((0 | o) == (0 | e)) return 0 | a()[(r + (4 + (t << 3))) >> 2];
              t = (t + 1) | 0;
            }
            return 0;
          },
          u: function (e) {
            var r = (Date.now() / 1e3) | 0;
            return e && (a()[e >> 2] = r), r;
          },
        },
        co = (function () {
          var e = { a: so };
          function r(e, r) {
            var n = e.exports;
            if (((l.asm = n), (W = r), !w)) {
              var t = er.unusedWorkers.length;
              er.unusedWorkers.forEach(function (e) {
                er.loadWasmModuleToWorker(e, function () {
                  --t || Oe();
                });
              });
            }
          }
          function n(e) {
            r(e.instance, e.module);
          }
          function t(r) {
            return (
              I || (!y && !E) || "function" != typeof fetch
                ? new Promise(function (e, r) {
                    e(He());
                  })
                : fetch(ze, { credentials: "same-origin" })
                    .then(function (e) {
                      if (!e.ok)
                        throw "failed to load wasm binary file at '" + ze + "'";
                      return e.arrayBuffer();
                    })
                    .catch(function () {
                      return He();
                    })
            )
              .then(function (r) {
                return WebAssembly.instantiate(r, e);
              })
              .then(r, function (e) {
                F("failed to asynchronously prepare wasm: " + e), Ne(e);
              });
          }
          if ((w || Re(), l.instantiateWasm))
            try {
              return l.instantiateWasm(e, r);
            } catch (e) {
              return (
                F("Module.instantiateWasm callback failed with error: " + e), !1
              );
            }
          return (
            (function () {
              if (
                I ||
                "function" != typeof WebAssembly.instantiateStreaming ||
                Be(ze) ||
                "function" != typeof fetch
              )
                return t(n);
              fetch(ze, { credentials: "same-origin" }).then(function (r) {
                return WebAssembly.instantiateStreaming(r, e).then(
                  n,
                  function (e) {
                    F("wasm streaming compile failed: " + e),
                      F("falling back to ArrayBuffer instantiation"),
                      t(n);
                  }
                );
              });
            })(),
            {}
          );
        })();
      l.asm = co;
      var lo,
        fo = (l.___wasm_call_ctors = function () {
          return (fo = l.___wasm_call_ctors = l.asm.Te).apply(null, arguments);
        }),
        mo =
          ((l.___errno_location = function () {
            return (l.___errno_location = l.asm.Ue).apply(null, arguments);
          }),
          (l._main = function () {
            return (mo = l._main = l.asm.Ve).apply(null, arguments);
          })),
        po = (l._ntohs = function () {
          return (po = l._ntohs = l.asm.We).apply(null, arguments);
        }),
        vo = (l._htons = function () {
          return (vo = l._htons = l.asm.Xe).apply(null, arguments);
        }),
        ho = (l._realloc = function () {
          return (ho = l._realloc = l.asm.Ye).apply(null, arguments);
        }),
        go = (l._free = function () {
          return (go = l._free = l.asm.Ze).apply(null, arguments);
        }),
        yo = (l._malloc = function () {
          return (yo = l._malloc = l.asm._e).apply(null, arguments);
        }),
        Eo = (l._memalign = function () {
          return (Eo = l._memalign = l.asm.$e).apply(null, arguments);
        }),
        _o =
          ((l.___em_js__initPthreadsJS = function () {
            return (l.___em_js__initPthreadsJS = l.asm.af).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_get_global_libc = function () {
            return (_o = l._emscripten_get_global_libc = l.asm.bf).apply(
              null,
              arguments
            );
          })),
        wo = (l._htonl = function () {
          return (wo = l._htonl = l.asm.cf).apply(null, arguments);
        }),
        bo = (l.__get_tzname = function () {
          return (bo = l.__get_tzname = l.asm.df).apply(null, arguments);
        }),
        ko = (l.__get_daylight = function () {
          return (ko = l.__get_daylight = l.asm.ef).apply(null, arguments);
        }),
        Co = (l.__get_timezone = function () {
          return (Co = l.__get_timezone = l.asm.ff).apply(null, arguments);
        }),
        So = (l._setThrew = function () {
          return (So = l._setThrew = l.asm.gf).apply(null, arguments);
        }),
        xo = (l._emscripten_GetProcAddress = function () {
          return (xo = l._emscripten_GetProcAddress = l.asm.hf).apply(
            null,
            arguments
          );
        }),
        To =
          ((l._emscripten_main_browser_thread_id = function () {
            return (l._emscripten_main_browser_thread_id = l.asm.jf).apply(
              null,
              arguments
            );
          }),
          (l.___pthread_tsd_run_dtors = function () {
            return (To = l.___pthread_tsd_run_dtors = l.asm.kf).apply(
              null,
              arguments
            );
          })),
        Ao = (l._emscripten_main_thread_process_queued_calls = function () {
          return (Ao = l._emscripten_main_thread_process_queued_calls =
            l.asm.lf).apply(null, arguments);
        }),
        Do =
          ((l._emscripten_current_thread_process_queued_calls = function () {
            return (l._emscripten_current_thread_process_queued_calls =
              l.asm.mf).apply(null, arguments);
          }),
          (l._emscripten_register_main_browser_thread_id = function () {
            return (Do = l._emscripten_register_main_browser_thread_id =
              l.asm.nf).apply(null, arguments);
          })),
        Lo =
          ((l._emscripten_async_run_in_main_thread = function () {
            return (l._emscripten_async_run_in_main_thread = l.asm.of).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_sync_run_in_main_thread = function () {
            return (l._emscripten_sync_run_in_main_thread = l.asm.pf).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_sync_run_in_main_thread_0 = function () {
            return (l._emscripten_sync_run_in_main_thread_0 = l.asm.qf).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_sync_run_in_main_thread_1 = function () {
            return (l._emscripten_sync_run_in_main_thread_1 = l.asm.rf).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_sync_run_in_main_thread_2 = function () {
            return (l._emscripten_sync_run_in_main_thread_2 = l.asm.sf).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_sync_run_in_main_thread_xprintf_varargs = function () {
            return (l._emscripten_sync_run_in_main_thread_xprintf_varargs =
              l.asm.tf).apply(null, arguments);
          }),
          (l._emscripten_sync_run_in_main_thread_3 = function () {
            return (l._emscripten_sync_run_in_main_thread_3 = l.asm.uf).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_sync_run_in_main_thread_4 = function () {
            return (Lo = l._emscripten_sync_run_in_main_thread_4 =
              l.asm.vf).apply(null, arguments);
          })),
        Po =
          ((l._emscripten_sync_run_in_main_thread_5 = function () {
            return (l._emscripten_sync_run_in_main_thread_5 = l.asm.wf).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_sync_run_in_main_thread_6 = function () {
            return (l._emscripten_sync_run_in_main_thread_6 = l.asm.xf).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_sync_run_in_main_thread_7 = function () {
            return (l._emscripten_sync_run_in_main_thread_7 = l.asm.yf).apply(
              null,
              arguments
            );
          }),
          (l._emscripten_run_in_main_runtime_thread_js = function () {
            return (Po = l._emscripten_run_in_main_runtime_thread_js =
              l.asm.zf).apply(null, arguments);
          })),
        Fo = (l._emscripten_async_queue_on_thread_ = function () {
          return (Fo = l._emscripten_async_queue_on_thread_ = l.asm.Af).apply(
            null,
            arguments
          );
        }),
        Mo =
          ((l._proxy_main = function () {
            return (l._proxy_main = l.asm.Bf).apply(null, arguments);
          }),
          (l._emscripten_tls_init = function () {
            return (l._emscripten_tls_init = l.asm.Cf).apply(null, arguments);
          }),
          (l.dynCall_vi = function () {
            return (Mo = l.dynCall_vi = l.asm.Df).apply(null, arguments);
          })),
        Ro = (l.dynCall_vii = function () {
          return (Ro = l.dynCall_vii = l.asm.Ef).apply(null, arguments);
        }),
        Oo = (l.dynCall_viii = function () {
          return (Oo = l.dynCall_viii = l.asm.Ff).apply(null, arguments);
        }),
        No = (l.dynCall_viiii = function () {
          return (No = l.dynCall_viiii = l.asm.Gf).apply(null, arguments);
        }),
        Io = (l.dynCall_viiiii = function () {
          return (Io = l.dynCall_viiiii = l.asm.Hf).apply(null, arguments);
        }),
        Bo = (l.dynCall_viiiiii = function () {
          return (Bo = l.dynCall_viiiiii = l.asm.If).apply(null, arguments);
        }),
        jo = (l.dynCall_viiiiiiii = function () {
          return (jo = l.dynCall_viiiiiiii = l.asm.Jf).apply(null, arguments);
        }),
        Uo = (l.dynCall_vijjjid = function () {
          return (Uo = l.dynCall_vijjjid = l.asm.Kf).apply(null, arguments);
        }),
        zo = (l.dynCall_i = function () {
          return (zo = l.dynCall_i = l.asm.Lf).apply(null, arguments);
        }),
        Ho = (l.dynCall_ii = function () {
          return (Ho = l.dynCall_ii = l.asm.Mf).apply(null, arguments);
        }),
        qo = (l.dynCall_iii = function () {
          return (qo = l.dynCall_iii = l.asm.Nf).apply(null, arguments);
        }),
        Wo = (l.dynCall_iiii = function () {
          return (Wo = l.dynCall_iiii = l.asm.Of).apply(null, arguments);
        }),
        Go = (l.dynCall_iiiii = function () {
          return (Go = l.dynCall_iiiii = l.asm.Pf).apply(null, arguments);
        }),
        Xo = (l.dynCall_iiiiii = function () {
          return (Xo = l.dynCall_iiiiii = l.asm.Qf).apply(null, arguments);
        }),
        Yo = (l.dynCall_iiiiiiiii = function () {
          return (Yo = l.dynCall_iiiiiiiii = l.asm.Rf).apply(null, arguments);
        }),
        Vo = (l.dynCall_iiiijj = function () {
          return (Vo = l.dynCall_iiiijj = l.asm.Sf).apply(null, arguments);
        }),
        Qo = (l.dynCall_iij = function () {
          return (Qo = l.dynCall_iij = l.asm.Tf).apply(null, arguments);
        }),
        Ko = (l.stackSave = function () {
          return (Ko = l.stackSave = l.asm.Uf).apply(null, arguments);
        }),
        Zo = (l.stackAlloc = function () {
          return (Zo = l.stackAlloc = l.asm.Vf).apply(null, arguments);
        }),
        Jo = (l.stackRestore = function () {
          return (Jo = l.stackRestore = l.asm.Wf).apply(null, arguments);
        });
      (l.dynCall_viiiif = function () {
        return (l.dynCall_viiiif = l.asm.Xf).apply(null, arguments);
      }),
        (l.dynCall_viiiiiii = function () {
          return (l.dynCall_viiiiiii = l.asm.Yf).apply(null, arguments);
        }),
        (l.dynCall_viiiiijji = function () {
          return (l.dynCall_viiiiijji = l.asm.Zf).apply(null, arguments);
        }),
        (l.dynCall_iiidiiiiii = function () {
          return (l.dynCall_iiidiiiiii = l.asm._f).apply(null, arguments);
        }),
        (l.dynCall_did = function () {
          return (l.dynCall_did = l.asm.$f).apply(null, arguments);
        }),
        (l.dynCall_iiiiiii = function () {
          return (l.dynCall_iiiiiii = l.asm.ag).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiiidddddi = function () {
          return (l.dynCall_viiiiiiiidddddi = l.asm.bg).apply(null, arguments);
        }),
        (l.dynCall_viiiiifi = function () {
          return (l.dynCall_viiiiifi = l.asm.cg).apply(null, arguments);
        }),
        (l.dynCall_didd = function () {
          return (l.dynCall_didd = l.asm.dg).apply(null, arguments);
        }),
        (l.dynCall_viiiji = function () {
          return (l.dynCall_viiiji = l.asm.eg).apply(null, arguments);
        }),
        (l.dynCall_vid = function () {
          return (l.dynCall_vid = l.asm.fg).apply(null, arguments);
        }),
        (l.dynCall_viffffffffffffffffi = function () {
          return (l.dynCall_viffffffffffffffffi = l.asm.gg).apply(
            null,
            arguments
          );
        }),
        (l.dynCall_viffffffffffffffi = function () {
          return (l.dynCall_viffffffffffffffi = l.asm.hg).apply(
            null,
            arguments
          );
        }),
        (l.dynCall_vifffffffi = function () {
          return (l.dynCall_vifffffffi = l.asm.ig).apply(null, arguments);
        }),
        (l.dynCall_viffffffffi = function () {
          return (l.dynCall_viffffffffi = l.asm.jg).apply(null, arguments);
        }),
        (l.dynCall_viffffffi = function () {
          return (l.dynCall_viffffffi = l.asm.kg).apply(null, arguments);
        }),
        (l.dynCall_ddi = function () {
          return (l.dynCall_ddi = l.asm.lg).apply(null, arguments);
        }),
        (l.dynCall_viiiiif = function () {
          return (l.dynCall_viiiiif = l.asm.mg).apply(null, arguments);
        }),
        (l.dynCall_viiif = function () {
          return (l.dynCall_viiif = l.asm.ng).apply(null, arguments);
        }),
        (l.dynCall_v = function () {
          return (l.dynCall_v = l.asm.og).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiiiiii = function () {
          return (l.dynCall_viiiiiiiiiii = l.asm.pg).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiiii = function () {
          return (l.dynCall_viiiiiiiii = l.asm.qg).apply(null, arguments);
        }),
        (l.dynCall_diiiiii = function () {
          return (l.dynCall_diiiiii = l.asm.rg).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiiiiiii = function () {
          return (l.dynCall_viiiiiiiiiiii = l.asm.sg).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiiiiiiiiii = function () {
          return (l.dynCall_viiiiiiiiiiiiiii = l.asm.tg).apply(null, arguments);
        }),
        (l.dynCall_viiffiiiiii = function () {
          return (l.dynCall_viiffiiiiii = l.asm.ug).apply(null, arguments);
        }),
        (l.dynCall_iiiiiiiif = function () {
          return (l.dynCall_iiiiiiiif = l.asm.vg).apply(null, arguments);
        }),
        (l.dynCall_fii = function () {
          return (l.dynCall_fii = l.asm.wg).apply(null, arguments);
        }),
        (l.dynCall_iffiiiii = function () {
          return (l.dynCall_iffiiiii = l.asm.xg).apply(null, arguments);
        }),
        (l.dynCall_iiiiiiiiiiii = function () {
          return (l.dynCall_iiiiiiiiiiii = l.asm.yg).apply(null, arguments);
        }),
        (l.dynCall_viiifi = function () {
          return (l.dynCall_viiifi = l.asm.zg).apply(null, arguments);
        }),
        (l.dynCall_iiiiiiii = function () {
          return (l.dynCall_iiiiiiii = l.asm.Ag).apply(null, arguments);
        }),
        (l.dynCall_jiiiii = function () {
          return (l.dynCall_jiiiii = l.asm.Bg).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiiiiiiiii = function () {
          return (l.dynCall_viiiiiiiiiiiiii = l.asm.Cg).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiiiii = function () {
          return (l.dynCall_viiiiiiiiii = l.asm.Dg).apply(null, arguments);
        }),
        (l.dynCall_jiii = function () {
          return (l.dynCall_jiii = l.asm.Eg).apply(null, arguments);
        }),
        (l.dynCall_iiiiiiiiii = function () {
          return (l.dynCall_iiiiiiiiii = l.asm.Fg).apply(null, arguments);
        }),
        (l.dynCall_fiii = function () {
          return (l.dynCall_fiii = l.asm.Gg).apply(null, arguments);
        }),
        (l.dynCall_fiiiiiiiii = function () {
          return (l.dynCall_fiiiiiiiii = l.asm.Hg).apply(null, arguments);
        }),
        (l.dynCall_viiiiffi = function () {
          return (l.dynCall_viiiiffi = l.asm.Ig).apply(null, arguments);
        }),
        (l.dynCall_jiiiiii = function () {
          return (l.dynCall_jiiiiii = l.asm.Jg).apply(null, arguments);
        }),
        (l.dynCall_iiiji = function () {
          return (l.dynCall_iiiji = l.asm.Kg).apply(null, arguments);
        }),
        (l.dynCall_iiijjji = function () {
          return (l.dynCall_iiijjji = l.asm.Lg).apply(null, arguments);
        }),
        (l.dynCall_jiiij = function () {
          return (l.dynCall_jiiij = l.asm.Mg).apply(null, arguments);
        }),
        (l.dynCall_jiji = function () {
          return (l.dynCall_jiji = l.asm.Ng).apply(null, arguments);
        }),
        (l.dynCall_jiiji = function () {
          return (l.dynCall_jiiji = l.asm.Og).apply(null, arguments);
        }),
        (l.dynCall_iiiiij = function () {
          return (l.dynCall_iiiiij = l.asm.Pg).apply(null, arguments);
        }),
        (l.dynCall_iiiiiij = function () {
          return (l.dynCall_iiiiiij = l.asm.Qg).apply(null, arguments);
        }),
        (l.dynCall_ijiii = function () {
          return (l.dynCall_ijiii = l.asm.Rg).apply(null, arguments);
        }),
        (l.dynCall_fiiiiiiiiffii = function () {
          return (l.dynCall_fiiiiiiiiffii = l.asm.Sg).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiifi = function () {
          return (l.dynCall_viiiiiiifi = l.asm.Tg).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiff = function () {
          return (l.dynCall_viiiiiiff = l.asm.Ug).apply(null, arguments);
        }),
        (l.dynCall_viiiiiifi = function () {
          return (l.dynCall_viiiiiifi = l.asm.Vg).apply(null, arguments);
        }),
        (l.dynCall_viiiifii = function () {
          return (l.dynCall_viiiifii = l.asm.Wg).apply(null, arguments);
        }),
        (l.dynCall_viiiffi = function () {
          return (l.dynCall_viiiffi = l.asm.Xg).apply(null, arguments);
        }),
        (l.dynCall_viiiff = function () {
          return (l.dynCall_viiiff = l.asm.Yg).apply(null, arguments);
        }),
        (l.dynCall_viiiffiii = function () {
          return (l.dynCall_viiiffiii = l.asm.Zg).apply(null, arguments);
        }),
        (l.dynCall_viiiiiiiiiif = function () {
          return (l.dynCall_viiiiiiiiiif = l.asm._g).apply(null, arguments);
        }),
        (l.dynCall_viifi = function () {
          return (l.dynCall_viifi = l.asm.$g).apply(null, arguments);
        }),
        (l.dynCall_fiiii = function () {
          return (l.dynCall_fiiii = l.asm.ah).apply(null, arguments);
        }),
        (l.dynCall_iiiiiiiiiiiiiifii = function () {
          return (l.dynCall_iiiiiiiiiiiiiifii = l.asm.bh).apply(
            null,
            arguments
          );
        }),
        (l.dynCall_viiiiiiif = function () {
          return (l.dynCall_viiiiiiif = l.asm.ch).apply(null, arguments);
        }),
        (l.dynCall_viiijj = function () {
          return (l.dynCall_viiijj = l.asm.dh).apply(null, arguments);
        }),
        (l.dynCall_iiiiiiidiiddii = function () {
          return (l.dynCall_iiiiiiidiiddii = l.asm.eh).apply(null, arguments);
        }),
        (l.dynCall_jij = function () {
          return (l.dynCall_jij = l.asm.fh).apply(null, arguments);
        }),
        (l.dynCall_jii = function () {
          return (l.dynCall_jii = l.asm.gh).apply(null, arguments);
        }),
        (l.dynCall_dd = function () {
          return (l.dynCall_dd = l.asm.hh).apply(null, arguments);
        }),
        (l.dynCall_viidi = function () {
          return (l.dynCall_viidi = l.asm.ih).apply(null, arguments);
        }),
        (l.dynCall_diii = function () {
          return (l.dynCall_diii = l.asm.jh).apply(null, arguments);
        }),
        (l.dynCall_iiijiii = function () {
          return (l.dynCall_iiijiii = l.asm.kh).apply(null, arguments);
        }),
        (l.dynCall_iiiiiiiiiii = function () {
          return (l.dynCall_iiiiiiiiiii = l.asm.lh).apply(null, arguments);
        }),
        (l.dynCall_iiiiiiiiiiiiiiiiii = function () {
          return (l.dynCall_iiiiiiiiiiiiiiiiii = l.asm.mh).apply(
            null,
            arguments
          );
        }),
        (l.dynCall_iiifii = function () {
          return (l.dynCall_iiifii = l.asm.nh).apply(null, arguments);
        }),
        (l.dynCall_ji = function () {
          return (l.dynCall_ji = l.asm.oh).apply(null, arguments);
        }),
        (l.dynCall_iiiiidii = function () {
          return (l.dynCall_iiiiidii = l.asm.ph).apply(null, arguments);
        }),
        (l.dynCall_iidiiii = function () {
          return (l.dynCall_iidiiii = l.asm.qh).apply(null, arguments);
        }),
        (l.dynCall_vffff = function () {
          return (l.dynCall_vffff = l.asm.rh).apply(null, arguments);
        }),
        (l.dynCall_vf = function () {
          return (l.dynCall_vf = l.asm.sh).apply(null, arguments);
        }),
        (l.dynCall_vff = function () {
          return (l.dynCall_vff = l.asm.th).apply(null, arguments);
        }),
        (l.dynCall_vfi = function () {
          return (l.dynCall_vfi = l.asm.uh).apply(null, arguments);
        }),
        (l.dynCall_viif = function () {
          return (l.dynCall_viif = l.asm.vh).apply(null, arguments);
        }),
        (l.dynCall_vif = function () {
          return (l.dynCall_vif = l.asm.wh).apply(null, arguments);
        }),
        (l.dynCall_viff = function () {
          return (l.dynCall_viff = l.asm.xh).apply(null, arguments);
        }),
        (l.dynCall_vifff = function () {
          return (l.dynCall_vifff = l.asm.yh).apply(null, arguments);
        }),
        (l.dynCall_viffff = function () {
          return (l.dynCall_viffff = l.asm.zh).apply(null, arguments);
        });
      function $o(e) {
        (this.name = "ExitStatus"),
          (this.message = "Program terminated with exit(" + e + ")"),
          (this.status = e);
      }
      (l.asm = co),
        (l.cwrap = function (e, r, n, t) {
          var o = (n = n || []).every(function (e) {
            return "number" === e;
          });
          return "string" !== r && o && !t
            ? K(e)
            : function () {
                return (function (e, r, n, t, o) {
                  var i = {
                      string: function (e) {
                        var r = 0;
                        if (null != e && 0 !== e) {
                          var n = 1 + (e.length << 2);
                          re(e, (r = Zo(n)), n);
                        }
                        return r;
                      },
                      array: function (e) {
                        var r = Zo(e.length);
                        return ie(e, r), r;
                      },
                    },
                    a = K(e),
                    u = [],
                    s = 0;
                  if (t)
                    for (var c = 0; c < t.length; c++) {
                      var l = i[n[c]];
                      l
                        ? (0 === s && (s = Ko()), (u[c] = l(t[c])))
                        : (u[c] = t[c]);
                    }
                  var f = a.apply(null, u);
                  return (
                    (f = (function (e) {
                      return "string" === r
                        ? $(e)
                        : "boolean" === r
                        ? Boolean(e)
                        : e;
                    })(f)),
                    0 !== s && Jo(s),
                    f
                  );
                })(e, r, n, arguments);
              };
        }),
        (l.setValue = q),
        (l.getValue = function (e, r, t) {
          switch (
            ("*" === (r = r || "i8").charAt(r.length - 1) && (r = "i32"), r)
          ) {
            case "i1":
            case "i8":
              return n()[e >> 0];
            case "i16":
              return o()[e >> 1];
            case "i32":
            case "i64":
              return a()[e >> 2];
            case "float":
              return s()[e >> 2];
            case "double":
              return c()[e >> 3];
            default:
              Ne("invalid type for getValue: " + r);
          }
          return null;
        }),
        (l.FS = cr),
        (l.PThread = er),
        (l.PThread = er),
        (l._pthread_self = Qt),
        (l.wasmMemory = j),
        (l.ExitStatus = $o),
        (l.then = function (e) {
          if (lo) e(l);
          else {
            var r = l.onRuntimeInitialized;
            l.onRuntimeInitialized = function () {
              r && r(), e(l);
            };
          }
          return l;
        });
      function ei(e) {
        function r() {
          lo ||
            ((lo = !0),
            (l.calledRun = !0),
            V ||
              (!0,
              l.noFSInit || cr.init.initialized || cr.init(),
              ur.init(),
              (dr.root = cr.mount(dr, {}, null)),
              _e(be),
              w || ((cr.ignorePermissions = !1), _e(ke)),
              l.onRuntimeInitialized && l.onRuntimeInitialized(),
              ri &&
                (function (e) {
                  l._main;
                  var r = (e = e || []).length + 1,
                    n = Zo(4 * (r + 1));
                  a()[n >> 2] = oe(h);
                  for (var t = 1; t < r; t++) a()[(n >> 2) + t] = oe(e[t - 1]);
                  a()[(n >> 2) + r] = 0;
                  try {
                    l._proxy_main(r, n);
                  } finally {
                    !0;
                  }
                })(e),
              (function () {
                if (!w) {
                  if (l.postRun)
                    for (
                      "function" == typeof l.postRun &&
                      (l.postRun = [l.postRun]);
                      l.postRun.length;

                    )
                      (e = l.postRun.shift()), Se.unshift(e);
                  var e;
                  _e(Se);
                }
              })()));
        }
        (e = e || v),
          Le > 0 ||
            (!(function () {
              if (!w) {
                if (l.preRun)
                  for (
                    "function" == typeof l.preRun && (l.preRun = [l.preRun]);
                    l.preRun.length;

                  )
                    (e = l.preRun.shift()), we.unshift(e);
                var e;
                _e(we);
              }
            })(),
            Le > 0 ||
              (l.setStatus
                ? (l.setStatus("Running..."),
                  setTimeout(function () {
                    setTimeout(function () {
                      l.setStatus("");
                    }, 1),
                      r();
                  }, 1))
                : r()));
      }
      if (
        ((Fe = function e() {
          lo || ei(), lo || (Fe = e);
        }),
        (l.run = ei),
        l.preInit)
      )
        for (
          "function" == typeof l.preInit && (l.preInit = [l.preInit]);
          l.preInit.length > 0;

        )
          l.preInit.pop()();
      var ri = !1;
      return l.noInitialRun && (ri = !1), w || (B = !0), w || ei(), r;
    }
  );
})();
"object" == typeof exports && "object" == typeof module
  ? (module.exports = createModule)
  : "function" == typeof define && define.amd
  ? define([], function () {
      return createModule;
    })
  : "object" == typeof exports && (exports.createModule = createModule);
