var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var log = console.log;
var curry = function (f) { return function (a) {
    var as = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        as[_i - 1] = arguments[_i];
    }
    return as.length ? f.apply(void 0, __spreadArrays([a], as)) : function () {
        var newAs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newAs[_i] = arguments[_i];
        }
        return f.apply(void 0, __spreadArrays([a], newAs));
    };
}; };
var emptyIter = (function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); })();
var emptyL = function () { return emptyIter; };
var goOne = function (a, f) { return (a instanceof Promise ? a.then(f) : f(a)); };
var nop = Symbol["for"]('nop');
var toIter = function (iter) {
    return iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : emptyL();
};
var reduce = curry(function (f, acc, iter) {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (var _i = 0, iter_1 = iter; _i < iter_1.length; _i++) {
        var v = iter_1[_i];
        acc = f(acc, v);
    }
    return acc;
});
var mapL = curry(function mapL(f, iter) {
    var _i, _a, v;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _i = 0, _a = toIter(iter);
                _b.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                v = _a[_i];
                return [4 /*yield*/, goOne(v, f)];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
});
var filterL = curry(function filterL(f, iter) {
    var _loop_1, _i, _a, a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _loop_1 = function (a) {
                    var r;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                r = goOne(a, f);
                                if (!(r instanceof Promise)) return [3 /*break*/, 2];
                                return [4 /*yield*/, r.then(function (c) { return (c ? a : Promise.reject(nop)); })];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 2:
                                if (!r) return [3 /*break*/, 4];
                                return [4 /*yield*/, a];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                _i = 0, _a = toIter(iter);
                _b.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                a = _a[_i];
                return [5 /*yield**/, _loop_1(a)];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
});
var take = curry(function (l, iter) {
    if (l < 1)
        return [];
    var res = [];
    iter = toIter(iter);
    return (function recur() {
        var cur;
        while (!(cur = iter.next()).done) {
            var a = cur.value;
            if (a instanceof Promise) {
                return a
                    .then(function (a) { return ((res.push(a), res).length === l ? res : recur()); })["catch"](function (e) { return (e === nop ? recur() : Promise.reject(e)); });
            }
            res.push(a);
            if (res.length === l)
                return res;
        }
        return res;
    })();
});
var takeAll = function (iter) { return take(Infinity, iter); };
var map = curry(function (f, iter) {
    return takeAll(mapL(f, iter));
});
var filter = curry(function (f, iter) {
    return takeAll(filterL(f, iter));
});
var go = curry(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return reduce(function (a, f) { return f(a); }, args);
});
var pipe = curry(function (f) {
    var fs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fs[_i - 1] = arguments[_i];
    }
    return function () {
        var as = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            as[_i] = arguments[_i];
        }
        return go.apply(void 0, __spreadArrays([f.apply(void 0, as)], fs));
    };
});
go([1, 2, 3, 4], map(function (n) { return n * n; }), filter(function (n) { return 10 < n; }), console.log);
go([1, 2, 3, 4], reduce(function (a, b) { return a + b; }), log);
var p = pipe(function (n) { return n * n; }, log);
p(10);
