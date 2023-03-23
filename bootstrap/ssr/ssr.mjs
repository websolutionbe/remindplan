import { createSSRApp, h as h$1 } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp, Link, Head, usePage } from "@inertiajs/inertia-vue3";
import createServer from "@inertiajs/server";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import axios from "axios";
import { parse, stringify } from "qs";
import * as Sentry from "@sentry/vue";
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, e2.key, e2);
  }
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign || function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function i(t4, r2) {
  return i = Object.setPrototypeOf || function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, i(t4, r2);
}
function o() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = o() ? Reflect.construct : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var o2 = new (Function.bind.apply(t5, e2))();
    return n3 && i(o2, n3.prototype), o2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), i(n2, t5);
  }, f(t4);
}
var c = String.prototype.replace, a = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return c.call(t4, a, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), d = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, y = { arrayToObject: d, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var i2 = r2[e2], o2 = i2.obj[i2.prop], u2 = Object.keys(o2), f2 = 0; f2 < u2.length; ++f2) {
      var c2 = u2[f2], a2 = o2[c2];
      "object" == typeof a2 && null !== a2 && -1 === n2.indexOf(a2) && (r2.push({ obj: o2, prop: c2 }), n2.push(a2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], i3 = 0; i3 < n3.length; ++i3)
          void 0 !== n3[i3] && e3.push(n3[i3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, i2) {
  if (0 === t4.length)
    return t4;
  var o2 = t4;
  if ("symbol" == typeof t4 ? o2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (o2 = String(t4)), "iso-8859-1" === n2)
    return escape(o2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < o2.length; ++f2) {
    var c2 = o2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === l.RFC1738 && (40 === c2 || 41 === c2) ? u2 += o2.charAt(f2) : c2 < 128 ? u2 += p[c2] : c2 < 2048 ? u2 += p[192 | c2 >> 6] + p[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? u2 += p[224 | c2 >> 12] + p[128 | c2 >> 6 & 63] + p[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & o2.charCodeAt(f2 += 1)), u2 += p[240 | c2 >> 18] + p[128 | c2 >> 12 & 63] + p[128 | c2 >> 6 & 63] + p[128 | 63 & c2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var i2 = r2;
  return v(r2) && !v(n2) && (i2 = d(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, i3) {
    if (s.call(r2, i3)) {
      var o2 = r2[i3];
      o2 && "object" == typeof o2 && n3 && "object" == typeof n3 ? r2[i3] = t2(o2, n3, e2) : r2.push(n3);
    } else
      r2[i3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, i3) {
    var o2 = n2[i3];
    return r3[i3] = s.call(r3, i3) ? t2(r3[i3], o2, e2) : o2, r3;
  }, i2);
} }, h = Object.prototype.hasOwnProperty, b = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, g = Array.isArray, m = String.prototype.split, j = Array.prototype.push, O = function(t4, r2) {
  j.apply(t4, g(r2) ? r2 : [r2]);
}, w = Date.prototype.toISOString, R = l.default, E = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: y.encode, encodeValuesOnly: false, format: R, formatter: l.formatters[R], indices: false, serializeDate: function(t4) {
  return w.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, i2, o2, u2, f2, c2, a2, l2, s2, v2, p2, d2) {
  var h2, b2 = r2;
  if ("function" == typeof f2 ? b2 = f2(n2, b2) : b2 instanceof Date ? b2 = l2(b2) : "comma" === e2 && g(b2) && (b2 = y.maybeMap(b2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === b2) {
    if (i2)
      return u2 && !p2 ? u2(n2, E.encoder, d2, "key", s2) : n2;
    b2 = "";
  }
  if ("string" == typeof (h2 = b2) || "number" == typeof h2 || "boolean" == typeof h2 || "symbol" == typeof h2 || "bigint" == typeof h2 || y.isBuffer(b2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, E.encoder, d2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var w2 = m.call(String(b2), ","), R2 = "", S2 = 0; S2 < w2.length; ++S2)
          R2 += (0 === S2 ? "" : ",") + v2(u2(w2[S2], E.encoder, d2, "value", s2));
        return [v2(j2) + "=" + R2];
      }
      return [v2(j2) + "=" + v2(u2(b2, E.encoder, d2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(b2))];
  }
  var k2, x2 = [];
  if (void 0 === b2)
    return x2;
  if ("comma" === e2 && g(b2))
    k2 = [{ value: b2.length > 0 ? b2.join(",") || null : void 0 }];
  else if (g(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(b2);
    k2 = c2 ? C2.sort(c2) : C2;
  }
  for (var F2 = 0; F2 < k2.length; ++F2) {
    var N2 = k2[F2], T2 = "object" == typeof N2 && void 0 !== N2.value ? N2.value : b2[N2];
    if (!o2 || null !== T2) {
      var D2 = g(b2) ? "function" == typeof e2 ? e2(n2, N2) : n2 : n2 + (a2 ? "." + N2 : "[" + N2 + "]");
      O(x2, t3(T2, D2, e2, i2, o2, u2, f2, c2, a2, l2, s2, v2, p2, d2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: y.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, F = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, N = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, T = function(t4, r2, n2, e2) {
  if (t4) {
    var i2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, o2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(i2), f2 = u2 ? i2.slice(0, u2.index) : i2, c2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      c2.push(f2);
    }
    for (var a2 = 0; n2.depth > 0 && null !== (u2 = o2.exec(i2)) && a2 < n2.depth; ) {
      if (a2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      c2.push(u2[1]);
    }
    return u2 && c2.push("[" + i2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var i3 = e3 ? r3 : N(r3, n3), o3 = t5.length - 1; o3 >= 0; --o3) {
        var u3, f3 = t5[o3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(i3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var c3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, a3 = parseInt(c3, 10);
          n3.parseArrays || "" !== c3 ? !isNaN(a3) && f3 !== c3 && String(a3) === c3 && a3 >= 0 && n3.parseArrays && a3 <= n3.arrayLimit ? (u3 = [])[a3] = i3 : "__proto__" !== c3 && (u3[c3] = i3) : u3 = { 0: i3 };
        }
        i3 = u3;
      }
      return i3;
    }(c2, r2, n2, e2);
  }
}, D = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, i2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (i2 = r2.wheres) ? i2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    if (!this.definition.methods.includes("GET"))
      return false;
    var r2 = this.template.replace(/\/{[^}?]*\?}/g, "(/[^/?]+)?").replace(/{[^}?]*\?}/g, "([^/?]+)?").replace(/{[^}]+}/g, "[^/?]+").replace(/^\w+:\/\//, "");
    return new RegExp("^" + r2 + "$").test(t5.replace(/\/+$/, "").split("?").shift());
  }, n2.compile = function(t5) {
    var r2 = this;
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)\??}/g, function(n3, e2) {
      var i2, o2;
      if ([null, void 0].includes(t5[e2]) && r2.parameterSegments.find(function(t6) {
        return t6.name === e2;
      }).required)
        throw new Error("Ziggy error: '" + e2 + "' parameter is required for route '" + r2.name + "'.");
      return r2.parameterSegments[r2.parameterSegments.length - 1].name === e2 && ".*" === r2.wheres[e2] ? null != (o2 = t5[e2]) ? o2 : "" : encodeURIComponent(null != (i2 = t5[e2]) ? i2 : "");
    }).replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), $ = /* @__PURE__ */ function(t4) {
  var e2, o2;
  function u2(r2, e3, i2, o3) {
    var u3;
    if (void 0 === i2 && (i2 = true), (u3 = t4.call(this) || this).t = null != o3 ? o3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: i2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new D(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  o2 = t4, (e2 = u2).prototype = Object.create(o2.prototype), e2.prototype.constructor = e2, i(e2, o2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var i2;
      return n({}, r3, ((i2 = {})[e3] = t5.u[e3], i2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, i2 = function(t7) {
        if (!t7)
          return E;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || E.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!h.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], i3 = E.filter;
        return ("function" == typeof t7.filter || g(t7.filter)) && (i3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : E.addQueryPrefix, allowDots: void 0 === t7.allowDots ? E.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : E.charsetSentinel, delimiter: void 0 === t7.delimiter ? E.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : E.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : E.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : E.encodeValuesOnly, filter: i3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : E.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : E.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : E.strictNullHandling };
      }(r3);
      "function" == typeof i2.filter ? e3 = (0, i2.filter)("", e3) : g(i2.filter) && (n2 = i2.filter);
      var o3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = b[r3 && r3.arrayFormat in b ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), i2.sort && n2.sort(i2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var c2 = n2[f3];
        i2.skipNulls && null === e3[c2] || O(o3, S(e3[c2], c2, u3, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var a2 = o3.join(i2.delimiter), s2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (s2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), a2.length > 0 ? s2 + a2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.current = function(t5, r2) {
    var n2 = this, e3 = this.t.absolute ? this.v().host + this.v().pathname : this.v().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/"), i2 = Object.entries(this.t.routes).find(function(r3) {
      return new D(t5, r3[1], n2.t).matchesUrl(e3);
    }) || [void 0, void 0], o3 = i2[0], u3 = i2[1];
    if (!t5)
      return o3;
    var f3 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o3);
    if ([null, void 0].includes(r2) || !f3)
      return f3;
    var c2 = new D(o3, u3, this.t);
    r2 = this.l(r2, c2);
    var a2 = this.p(u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(a2).length) || Object.entries(r2).every(function(t6) {
      return a2[t6[0]] == t6[1];
    });
  }, f2.v = function() {
    var t5, r2, n2, e3, i2, o3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, c2 = u3.pathname, a2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === c2 ? "" : c2, search: null != (i2 = null == (o3 = this.t.location) ? void 0 : o3.search) ? i2 : void 0 === a2 ? "" : a2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var i2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var o4, u3;
        return n({}, t6, i2[e4] ? ((o4 = {})[i2[e4].name] = r3, o4) : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === i2.length && !t5[i2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var o3;
      (o3 = {})[i2[0].name] = t5, t5 = o3;
    }
    return n({}, this.h(r2), this.g(t5, r2));
  }, f2.h = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, i2) {
      var o3, u3 = e3.name;
      return n({}, t6, ((o3 = {})[u3] = r2.t.defaults[u3], o3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, i2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var o3, u3, f3 = r3[0], c2 = r3[1];
      if (!c2 || "object" != typeof c2 || Array.isArray(c2) || !i2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = c2, u3));
      if (!c2.hasOwnProperty(e3[f3])) {
        if (!c2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((o3 = {})[f3] = c2[e3[f3]], o3));
    }, {});
  }, f2.p = function(t5) {
    var r2, e3 = this.v().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, ""), i2 = function(t6, r3, e4) {
      void 0 === r3 && (r3 = "");
      var i3 = [t6, r3].map(function(t7) {
        return t7.split(e4);
      }), o3 = i3[0];
      return i3[1].reduce(function(t7, r4, e5) {
        var i4;
        return /{[^}?]+\??}/.test(r4) && o3[e5] ? n({}, t7, ((i4 = {})[r4.replace(/.*{|\??}.*/g, "")] = o3[e5].replace(r4.match(/^[^{]*/g), "").replace(r4.match(/[^}]*$/g), ""), i4)) : t7;
      }, {});
    };
    return n({}, i2(this.v().host, t5.domain, "."), i2(e3, t5.uri, "/"), function(t6, r3) {
      var n2 = C;
      if ("" === t6 || null == t6)
        return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var e4 = "string" == typeof t6 ? function(t7, r4) {
        var n3, e5 = {}, i4 = (r4.ignoreQueryPrefix ? t7.replace(/^\?/, "") : t7).split(r4.delimiter, Infinity === r4.parameterLimit ? void 0 : r4.parameterLimit), o4 = -1, u4 = r4.charset;
        if (r4.charsetSentinel)
          for (n3 = 0; n3 < i4.length; ++n3)
            0 === i4[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === i4[n3] ? u4 = "utf-8" : "utf8=%26%2310003%3B" === i4[n3] && (u4 = "iso-8859-1"), o4 = n3, n3 = i4.length);
        for (n3 = 0; n3 < i4.length; ++n3)
          if (n3 !== o4) {
            var f4, c3, a2 = i4[n3], l2 = a2.indexOf("]="), s2 = -1 === l2 ? a2.indexOf("=") : l2 + 1;
            -1 === s2 ? (f4 = r4.decoder(a2, C.decoder, u4, "key"), c3 = r4.strictNullHandling ? null : "") : (f4 = r4.decoder(a2.slice(0, s2), C.decoder, u4, "key"), c3 = y.maybeMap(N(a2.slice(s2 + 1), r4), function(t8) {
              return r4.decoder(t8, C.decoder, u4, "value");
            })), c3 && r4.interpretNumericEntities && "iso-8859-1" === u4 && (c3 = F(c3)), a2.indexOf("[]=") > -1 && (c3 = x(c3) ? [c3] : c3), e5[f4] = k.call(e5, f4) ? y.combine(e5[f4], c3) : c3;
          }
        return e5;
      }(t6, n2) : t6, i3 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o3 = Object.keys(e4), u3 = 0; u3 < o3.length; ++u3) {
        var f3 = o3[u3], c2 = T(f3, e4[f3], n2, "string" == typeof t6);
        i3 = y.merge(i3, c2, n2);
      }
      return y.compact(i3);
    }(null == (r2 = this.v().search) ? void 0 : r2.replace(/^\?/, "")));
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    return this.p(this.t.routes[this.current()]);
  } }]), u2;
}(/* @__PURE__ */ f(String)), A = { install: function(t4, r2) {
  return t4.mixin({ methods: { route: function(t5, n2, e2, i2) {
    return void 0 === i2 && (i2 = r2), function(t6, r3, n3, e3) {
      var i3 = new $(t6, r3, n3, e3);
      return t6 ? i3.toString() : i3;
    }(t5, n2, e2, i2);
  } } });
} };
const Ziggy$1 = { "url": "https://dentalcare.test", "port": null, "defaults": {}, "routes": { "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "ignition.healthCheck": { "uri": "_ignition/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition/update-config", "methods": ["POST"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "contact": { "uri": "contact", "methods": ["GET", "HEAD"] }, "contact.post": { "uri": "store", "methods": ["POST"] }, "requirements": { "uri": "verkoopsvoorwaarden", "methods": ["GET", "HEAD"] }, "cookies": { "uri": "cookies", "methods": ["GET", "HEAD"] }, "privacy": { "uri": "privacy", "methods": ["GET", "HEAD"] }, "sitemap": { "uri": "sitemap.xml", "methods": ["GET", "HEAD"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy$1.routes, window.Ziggy.routes);
}
const style = "";
class Route {
  constructor(name, definition, config) {
    var _a, _b;
    this.name = name;
    this.definition = definition;
    this.bindings = (_a = definition.bindings) != null ? _a : {};
    this.wheres = (_b = definition.wheres) != null ? _b : {};
    this.config = config;
  }
  get template() {
    const origin = !this.config.absolute ? "" : this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url;
    return `${origin}/${this.definition.uri}`.replace(/\/+$/, "");
  }
  get parameterSegments() {
    var _a, _b;
    return (_b = (_a = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : _a.map((segment) => ({
      name: segment.replace(/{|\??}/g, ""),
      required: !/\?}$/.test(segment)
    }))) != null ? _b : [];
  }
  matchesUrl(url) {
    if (!this.definition.methods.includes("GET"))
      return false;
    const pattern = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (_, slash, segment, optional) => {
      var _a;
      const regex = `(?<${segment}>${((_a = this.wheres[segment]) == null ? void 0 : _a.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return optional ? `(${slash}${regex})?` : `${slash}${regex}`;
    }).replace(/^\w+:\/\//, "");
    const [location, query] = url.replace(/^\w+:\/\//, "").split("?");
    const matches = new RegExp(`^${pattern}/?$`).exec(location);
    return matches ? { params: matches.groups, query: parse(query) } : false;
  }
  compile(params) {
    const segments = this.parameterSegments;
    if (!segments.length)
      return this.template;
    return this.template.replace(/{([^}?]+)(\??)}/g, (_, segment, optional) => {
      var _a, _b, _c;
      if (!optional && [null, void 0].includes(params[segment])) {
        throw new Error(`Ziggy error: '${segment}' parameter is required for route '${this.name}'.`);
      }
      if (segments[segments.length - 1].name === segment && this.wheres[segment] === ".*") {
        return encodeURIComponent((_a = params[segment]) != null ? _a : "").replace(/%2F/g, "/");
      }
      if (this.wheres[segment] && !new RegExp(`^${optional ? `(${this.wheres[segment]})?` : this.wheres[segment]}$`).test((_b = params[segment]) != null ? _b : "")) {
        throw new Error(`Ziggy error: '${segment}' parameter does not match required format '${this.wheres[segment]}' for route '${this.name}'.`);
      }
      return encodeURIComponent((_c = params[segment]) != null ? _c : "");
    }).replace(/\/+$/, "");
  }
}
class Router extends String {
  constructor(name, params, absolute = true, config) {
    super();
    this._config = config != null ? config : typeof Ziggy !== "undefined" ? Ziggy : globalThis == null ? void 0 : globalThis.Ziggy;
    this._config = { ...this._config, absolute };
    if (name) {
      if (!this._config.routes[name]) {
        throw new Error(`Ziggy error: route '${name}' is not in the route list.`);
      }
      this._route = new Route(name, this._config.routes[name], this._config);
      this._params = this._parse(params);
    }
  }
  toString() {
    const unhandled = Object.keys(this._params).filter((key) => !this._route.parameterSegments.some(({ name }) => name === key)).filter((key) => key !== "_query").reduce((result, current) => ({ ...result, [current]: this._params[current] }), {});
    return this._route.compile(this._params) + stringify({ ...unhandled, ...this._params["_query"] }, {
      addQueryPrefix: true,
      arrayFormat: "indices",
      encodeValuesOnly: true,
      skipNulls: true,
      encoder: (value, encoder) => typeof value === "boolean" ? Number(value) : encoder(value)
    });
  }
  _unresolve(url) {
    if (!url) {
      url = this._currentUrl();
    } else if (this._config.absolute && url.startsWith("/")) {
      url = this._location().host + url;
    }
    let matchedParams = {};
    const [name, route2] = Object.entries(this._config.routes).find(
      ([name2, route3]) => matchedParams = new Route(name2, route3, this._config).matchesUrl(url)
    ) || [void 0, void 0];
    return { name, ...matchedParams, route: route2 };
  }
  _currentUrl() {
    const { host, pathname, search } = this._location();
    return (this._config.absolute ? host + pathname : pathname.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + search;
  }
  current(name, params) {
    const { name: current, params: currentParams, query, route: route2 } = this._unresolve();
    if (!name)
      return current;
    const match = new RegExp(`^${name.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(current);
    if ([null, void 0].includes(params) || !match)
      return match;
    const routeObject = new Route(current, route2, this._config);
    params = this._parse(params, routeObject);
    const routeParams = { ...currentParams, ...query };
    if (Object.values(params).every((p2) => !p2) && !Object.values(routeParams).some((v2) => v2 !== void 0))
      return true;
    return Object.entries(params).every(([key, value]) => routeParams[key] == value);
  }
  _location() {
    var _a, _b, _c, _d, _e, _f;
    const { host = "", pathname = "", search = "" } = typeof window !== "undefined" ? window.location : {};
    return {
      host: (_b = (_a = this._config.location) == null ? void 0 : _a.host) != null ? _b : host,
      pathname: (_d = (_c = this._config.location) == null ? void 0 : _c.pathname) != null ? _d : pathname,
      search: (_f = (_e = this._config.location) == null ? void 0 : _e.search) != null ? _f : search
    };
  }
  get params() {
    const { params, query } = this._unresolve();
    return { ...params, ...query };
  }
  has(name) {
    return Object.keys(this._config.routes).includes(name);
  }
  _parse(params = {}, route2 = this._route) {
    params = ["string", "number"].includes(typeof params) ? [params] : params;
    const segments = route2.parameterSegments.filter(({ name }) => !this._config.defaults[name]);
    if (Array.isArray(params)) {
      params = params.reduce((result, current, i2) => segments[i2] ? { ...result, [segments[i2].name]: current } : typeof current === "object" ? { ...result, ...current } : { ...result, [current]: "" }, {});
    } else if (segments.length === 1 && !params[segments[0].name] && (params.hasOwnProperty(Object.values(route2.bindings)[0]) || params.hasOwnProperty("id"))) {
      params = { [segments[0].name]: params };
    }
    return {
      ...this._defaults(route2),
      ...this._substituteBindings(params, route2)
    };
  }
  _defaults(route2) {
    return route2.parameterSegments.filter(({ name }) => this._config.defaults[name]).reduce((result, { name }, i2) => ({ ...result, [name]: this._config.defaults[name] }), {});
  }
  _substituteBindings(params, { bindings, parameterSegments }) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (!value || typeof value !== "object" || Array.isArray(value) || !parameterSegments.some(({ name }) => name === key)) {
        return { ...result, [key]: value };
      }
      if (!value.hasOwnProperty(bindings[key])) {
        if (value.hasOwnProperty("id")) {
          bindings[key] = "id";
        } else {
          throw new Error(`Ziggy error: object passed as '${key}' parameter is missing route model binding key '${bindings[key]}'.`);
        }
      }
      return { ...result, [key]: value[bindings[key]] };
    }, {});
  }
  valueOf() {
    return this.toString();
  }
  check(name) {
    return this.has(name);
  }
}
function route(name, params, absolute, config) {
  const router = new Router(name, params, absolute, config);
  return name ? router.toString() : router;
}
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
createServer.default(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: async (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./components/pages/BeforeAndAfter.vue": () => import("./assets/BeforeAndAfter.92f77daa.mjs"), "./components/pages/Cookies.vue": () => import("./assets/Cookies.b4c50679.mjs"), "./components/pages/Home.vue": () => import("./assets/Home.63d7ae22.mjs"), "./components/pages/Privacy.vue": () => import("./assets/Privacy.57d11293.mjs"), "./components/pages/Procedure.vue": () => import("./assets/Procedure.eb5e2602.mjs"), "./components/pages/Requirements.vue": () => import("./assets/Requirements.51acef9b.mjs"), "./components/pages/Services.vue": () => import("./assets/Services.c38a4e01.mjs") });
      return (await pages[`./components/pages/${name}.vue`]()).default;
    },
    setup({ app, props, plugin }) {
      const ssrApp = createSSRApp({
        render: () => h$1(app, props)
      }).use(plugin).use(A, Ziggy$1).component("Link", Link).component("Head", Head).mixin({
        data: function() {
          return {
            get animator() {
              return gsap;
            }
          };
        },
        methods: {
          __t: function(key) {
            const translation = usePage().props.value.translations.find((translation2) => translation2.key === key);
            if (!translation) {
              this.createTranslation(key);
            } else {
              const localeTranslation = translation["value_" + usePage().props.value.locale];
              if (localeTranslation) {
                return localeTranslation;
              } else {
                return key;
              }
            }
          },
          createTranslation: async function(key) {
            await axios.post("async/translation", { key }).then(({ data }) => {
              return data.key;
            });
          },
          imagePath: function(path) {
            return `/images/${path}`;
          },
          route: (name, params, absolute, config = Ziggy$1) => route(name, params, absolute, config)
        }
      });
      Sentry.init({
        app: ssrApp,
        dsn: ""
      });
      return ssrApp;
    }
  })
);
