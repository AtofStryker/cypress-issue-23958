"'use strict';
$lockerEvalContext$(function(e) {
    const {
        elementToLoadingPromiseMap: t
    } = e, n = Array, o = Promise, r = TypeError, {
        asyncIterator: i,
        iterator: a
    } = Symbol, {
        [a]: s
    } = n.prototype, c = function*() {}.constructor.prototype.prototype, {
        next: l,
        throw: u
    } = c, {
        delete: f,
        get: p,
        set: d
    } = Map.prototype, {
        appendChild: m
    } = Node.prototype, {
        defineProperties: h,
        freeze: g
    } = Object, {
        then: y
    } = o.prototype, b = o.resolve.bind(o), {
        apply: v,
        getPrototypeOf: E,
        setPrototypeOf: S
    } = Reflect, {
        replace: T
    } = String.prototype, {
        get: w,
        set: A
    } = WeakMap.prototype, {
        createElement: L
    } = Document.prototype, {
        querySelector: M,
        setAttribute: O
    } = Element.prototype, {
        stopPropagation: N
    } = Event.prototype, {
        addEventListener: C,
        removeEventListener: P
    } = EventTarget.prototype, {
        head: _
    } = document, k = new Map, I = /\\?'/g, G = "data-locker-id", V = `${crypto.getRandomValues(new Uint32Array(1))[0]}`;
    class R extends Error {
        constructor(e) {
            super(`Lightning Web Security: ${e}`)
        }
    }

    function x(e) {
        return v(T, e, [I, "\\'"])
    }

    function D(e, t, n, o, r, i, a) {
        let s, c;
        try {
            s = v(i, e, [a]), c = s.value
        } catch (e) {
            return n(e), void 0
        }
        s.done ? t(c) : b(c).then(o, r)
    }

    function H(e, n) {
        const r = new o((t, o) => {
            function r(t) {
                v(P, e, ["error", r]), v(P, e, ["load", i]), v(N, t, []), o(new R(`Resource loader error loading '${x(n)}'.`))
            }

            function i() {
                v(P, e, ["error", r]), v(P, e, ["load", i]), t(void 0)
            }
            v(C, e, ["error", r]), v(C, e, ["load", i])
        });
        return v(A, t, [e, r]), v(m, _, [e]), r
    }

    function $(e) {
        return S(e, null), e[a] = s, e
    }

    function j(e) {
        return "string" == typeof e ? e : `${e}`
    }
    return {
        asyncToGen: function(e, t, n) {
            return new o((o, r) => {
                const i = v(e, t, n);

                function a(e) {
                    D(i, o, r, a, s, l, e)
                }

                function s(e) {
                    D(i, o, r, a, s, u, e)
                }
                a(void 0)
            })
        },
        forAwaitOf: function(e, t, n) {
            if (0 === t) {
                let t = !1,
                    {
                        [i]: o
                    } = n;
                if (null == o && (t = !0, ({
                        [a]: o
                    } = n)), "function" != typeof o) throw new r("Object is not iterable.");
                return v(d, k, [e, {
                    iterable: v(o, n, []),
                    step: void 0,
                    sync: t
                }]), void 0
            }
            const s = v(p, k, [e]);
            if (1 === t) {
                const e = s.iterable.next();
                return s.sync ? new o(t => {
                    s.step = e, t()
                }) : v(y, e, [e => {
                    s.step = e
                }])
            }
            if (2 === t) return s.step.value;
            if (3 === t) {
                const t = !!s.step.done;
                return t && v(f, k, [e]), t
            }
        },
        loadScript: function(e, n) {
            const o = j(n);
            let r = v(M, _, [`script[data-distorted-src='${x(o)}'][data-locker-id='${V}']`]);
            var i;
            return r ? null != (i = v(w, t, [r])) ? i : b() : (r = v(L, document, ["script"]), v(O, r, [G, V]), r.type = "text/javascript", r.src = o, H(r, o))
        },
        loadStyle: function(e, n) {
            const o = j(n);
            let r = v(M, _, [`link[href='${x(o)}']`]);
            var i;
            return r ? null != (i = v(w, t, [r])) ? i : b() : (r = v(L, document, ["link"]), r.type = "text/css", r.rel = "stylesheet", r.href = o, H(r, o))
        },
        makeRedGet: function(...e) {
            const {
                length: t
            } = e, o = n(t), r = {};
            for (let n = 0; n < t; n += 1) r[n] = {
                __proto__: null,
                get: e[n]
            };
            return h(o, r), o
        },
        makeRedResyncImports: function(e) {
            return function(...t) {
                for (let t = 0, {
                        length: n
                    } = e; t < n; t += 1) try {
                    e[t]
                } catch (e) {}
                return $(t)
            }
        },
        namespace: function(e) {
            return g(e)
        },
        spreadable: $,
        super: function(e, t, n, o) {
            const r = E(e.prototype)[t];
            return v(r, n, o)
        }
    }
})
"