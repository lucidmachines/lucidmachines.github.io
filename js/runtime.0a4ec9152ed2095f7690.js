(()=>{
    "use strict";
    var r, e = {}, t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n),
        i.exports
    }
    n.m = e,
    r = [],
    n.O = (e,t,o,i)=>{
        if (!t) {
            var a = 1 / 0;
            for (s = 0; s < r.length; s++) {
                for (var [t,o,i] = r[s], f = !0, u = 0; u < t.length; u++)
                    (!1 & i || a >= i) && Object.keys(n.O).every((r=>n.O[r](t[u]))) ? t.splice(u--, 1) : (f = !1,
                    i < a && (a = i));
                if (f) {
                    r.splice(s--, 1);
                    var l = o();
                    void 0 !== l && (e = l)
                }
            }
            return e
        }
        i = i || 0;
        for (var s = r.length; s > 0 && r[s - 1][2] > i; s--)
            r[s] = r[s - 1];
        r[s] = [t, o, i]
    }
    ,
    n.n = r=>{
        var e = r && r.__esModule ? ()=>r.default : ()=>r;
        return n.d(e, {
            a: e
        }),
        e
    }
    ,
    n.d = (r,e)=>{
        for (var t in e)
            n.o(e, t) && !n.o(r, t) && Object.defineProperty(r, t, {
                enumerable: !0,
                get: e[t]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (r) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (r,e)=>Object.prototype.hasOwnProperty.call(r, e),
    (()=>{
        var r = {
            666: 0
        };
        n.O.j = e=>0 === r[e];
        var e = (e,t)=>{
            var o, i, [a,f,u] = t, l = 0;
            if (a.some((e=>0 !== r[e]))) {
                for (o in f)
                    n.o(f, o) && (n.m[o] = f[o]);
                if (u)
                    var s = u(n)
            }
            for (e && e(t); l < a.length; l++)
                i = a[l],
                n.o(r, i) && r[i] && r[i][0](),
                r[i] = 0;
            return n.O(s)
        }
          , t = self.webpackChunkweb3 = self.webpackChunkweb3 || [];
        t.forEach(e.bind(null, 0)),
        t.push = e.bind(null, t.push.bind(t))
    }
    )()
}
)();
