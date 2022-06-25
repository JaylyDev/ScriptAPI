var t,
    e =
        (this && this.__extends) ||
        ((t = function (e, n) {
            return (
                (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    }),
                t(e, n)
            );
        }),
            function (e, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError(
                        "Class extends value " + String(n) + " is not a constructor or null"
                    );
                function r() {
                    this.constructor = e;
                }
                t(e, n),
                    (e.prototype =
                        null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
            }),
    n =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(t) {
                    try {
                        s(r.next(t));
                    } catch (t) {
                        i(t);
                    }
                }
                function u(t) {
                    try {
                        s(r.throw(t));
                    } catch (t) {
                        i(t);
                    }
                }
                function s(t) {
                    var e;
                    t.done
                        ? o(t.value)
                        : ((e = t.value),
                            e instanceof n
                                ? e
                                : new n(function (t) {
                                    t(e);
                                })).then(a, u);
                }
                s((r = r.apply(t, e || [])).next());
            });
        },
    r =
        (this && this.__generator) ||
        function (t, e) {
            var n,
                r,
                o,
                i,
                a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: [],
                };
            return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                    return this;
                }),
                i
            );
            function u(i) {
                return function (u) {
                    return (function (i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;)
                            try {
                                if (
                                    ((n = 1),
                                        r &&
                                        (o =
                                            2 & i[0]
                                                ? r.return
                                                : i[0]
                                                    ? r.throw || ((o = r.return) && o.call(r), 0)
                                                    : r.next) &&
                                        !(o = o.call(r, i[1])).done)
                                )
                                    return o;
                                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, { value: i[1], done: !1 };
                                    case 5:
                                        a.label++, (r = i[1]), (i = [0]);
                                        continue;
                                    case 7:
                                        (i = a.ops.pop()), a.trys.pop();
                                        continue;
                                    default:
                                        if (
                                            !((o = a.trys),
                                                (o = o.length > 0 && o[o.length - 1]) ||
                                                (6 !== i[0] && 2 !== i[0]))
                                        ) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                            a.label = i[1];
                                            break;
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            (a.label = o[1]), (o = i);
                                            break;
                                        }
                                        if (o && a.label < o[2]) {
                                            (a.label = o[2]), a.ops.push(i);
                                            break;
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                }
                                i = e.call(t, a);
                            } catch (t) {
                                (i = [6, t]), (r = 0);
                            } finally {
                                n = o = 0;
                            }
                        if (5 & i[0]) throw i[1];
                        return { value: i[0] ? i[1] : void 0, done: !0 };
                    })([i, u]);
                };
            }
        },
    o =
        (this && this.__spreadArray) ||
        function (t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++)
                    (!r && o in e) ||
                        (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
            return t.concat(r || Array.prototype.slice.call(e));
        },
    i = function (t, e, o, i, a) {
        for (var u = [], s = 5; s < arguments.length; s++) u[s - 5] = arguments[s];
        var c = this;
        (this._idleTimeout = t),
            (this._idleStart = e),
            (this._onTimeout = o),
            (this._repeat = i),
            (this._destroyed = a),
            n(c, void 0, void 0, function () {
                var n;
                return r(this, function (r) {
                    switch (r.label) {
                        case 0:
                            if (!0 !== i) return [3, 4];
                            r.label = 1;
                        case 1:
                            return [4, this._destroyed];
                        case 2:
                            return !0 === r.sent()
                                ? [2]
                                : ((n = e + t),
                                    new Date().getTime() >= n &&
                                    (this._onTimeout.apply(this, u),
                                        (this._idleStart = e = new Date().getTime())),
                                    [3, 1]);
                        case 3:
                            return [3, 6];
                        case 4:
                            return [4, this._destroyed];
                        case 5:
                            if (!0 === r.sent()) return [2];
                            for (n = e + t; new Date().getTime() < n;);
                            this._onTimeout.apply(this, u), (r.label = 6);
                        case 6:
                            return [2];
                    }
                });
            });
    },
    a = (function (t) {
        function n(e, n, r, i, a) {
            for (var u = [], s = 5; s < arguments.length; s++)
                u[s - 5] = arguments[s];
            var c = t.apply(this, o([e, n, r, i, a], u, !1)) || this;
            return (
                (c._idleTimeout = e),
                (c._idleStart = n),
                (c._onTimeout = r),
                (c._repeat = i),
                (c._destroyed = a),
                c
            );
        }
        return e(n, t), n;
    })(i),
    u = function (t) {
        for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
        var i = this;
        (this._destroyed = !1),
            (this._onImmediate = t),
            (this._argv = e),
            n(i, void 0, void 0, function () {
                return r(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this._destroyed];
                        case 1:
                            return !0 === t.sent()
                                ? [2]
                                : [4, this._onImmediate.apply(this, e)];
                        case 2:
                            return t.sent(), [2];
                    }
                });
            });
    },
    s = (function () {
        function t() { }
        return (
            (t.setTimeout = function (t, e) {
                for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                var i = "number" == typeof e ? e : 1,
                    u = new Date().getTime();
                return new (a.bind.apply(a, o([void 0, i, u, t, !1, !1], n, !1)))();
            }),
            (t.clearTimeout = function (t) {
                t instanceof a &&
                    ((t._destroyed = !0), (t._onTimeout = function () { }));
            }),
            (t.setInterval = function (t, e) {
                for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                var a = "number" == typeof e ? e : 1,
                    u = new Date().getTime();
                return new (i.bind.apply(i, o([void 0, a, u, t, !0, !1], n, !1)))();
            }),
            (t.clearInterval = function (t) {
                t instanceof i &&
                    ((t._destroyed = !0), (t._onTimeout = function () { }));
            }),
            (t.setImmediate = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                return new (u.bind.apply(u, o([void 0, t], e, !1)))();
            }),
            (t.clearImmediate = function (t) {
                t instanceof u &&
                    ((t._destroyed = !0), (t._onImmediate = function () { }));
            }),
            t
        );
    })(),
    c = s.setTimeout,
    l = s.clearTimeout,
    f = s.setInterval,
    h = s.clearInterval,
    p = s.setImmediate,
    d = s.clearImmediate;
export {
    c as setTimeout,
    l as clearTimeout,
    f as setInterval,
    h as clearInterval,
    p as setImmediate,
    d as clearImmediate,
};
