if (function (t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	}: e(t)
} ("undefined" != typeof window ? window: this, function (f, t) {
	var h = [],
	u = h.slice,
	g = h.concat,
	a = h.push,
	o = h.indexOf,
	i = {},
	e = i.toString,
	m = i.hasOwnProperty,
	v = {},
	n = "1.11.2",
	C = function (t, e) {
		return new C.fn.init(t, e)
	},
	s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	r = /^-ms-/,
	l = /-([\da-z])/gi,
	c = function (t, e) {
		return e.toUpperCase()
	};
	function d(t) {
		var e = t.length,
		i = C.type(t);
		return "function" !== i && !C.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t))
	}
	C.fn = C.prototype = {
		jquery: n,
		constructor: C,
		selector: "",
		length: 0,
		toArray: function () {
			return u.call(this)
		},
		get: function (t) {
			return null != t ? t < 0 ? this[t + this.length] : this[t] : u.call(this)
		},
		pushStack: function (t) {
			var e = C.merge(this.constructor(), t);
			return e.prevObject = this,
			e.context = this.context,
			e
		},
		each: function (t, e) {
			return C.each(this, t, e)
		},
		map: function (i) {
			return this.pushStack(C.map(this, function (t, e) {
				return i.call(t, e, t)
			}))
		},
		slice: function () {
			return this.pushStack(u.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq( - 1)
		},
		eq: function (t) {
			var e = this.length,
			i = +t + (t < 0 ? e: 0);
			return this.pushStack(0 <= i && i < e ? [this[i]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: a,
		sort: h.sort,
		splice: h.splice
	},
	C.extend = C.fn.extend = function () {
		var t, e, i, n, o, s, r = arguments[0] || {},
		a = 1,
		l = arguments.length,
		c = !1;
		for ("boolean" == typeof r && (c = r, r = arguments[a] || {},
		a++), "object" == typeof r || C.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (o = arguments[a])) for (n in o) t = r[n],
		r !== (i = o[n]) && (c && i && (C.isPlainObject(i) || (e = C.isArray(i))) ? (s = e ? (e = !1, t && C.isArray(t) ? t: []) : t && C.isPlainObject(t) ? t: {},
		r[n] = C.extend(c, s, i)) : void 0 !== i && (r[n] = i));
		return r
	},
	C.extend({
		expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (t) {
			throw new Error(t)
		},
		noop: function () {},
		isFunction: function (t) {
			return "function" === C.type(t)
		},
		isArray: Array.isArray ||
		function (t) {
			return "array" === C.type(t)
		},
		isWindow: function (t) {
			return null != t && t == t.window
		},
		isNumeric: function (t) {
			return ! C.isArray(t) && 0 <= t - parseFloat(t) + 1
		},
		isEmptyObject: function (t) {
			var e;
			for (e in t) return ! 1;
			return ! 0
		},
		isPlainObject: function (t) {
			var e;
			if (!t || "object" !== C.type(t) || t.nodeType || C.isWindow(t)) return ! 1;
			try {
				if (t.constructor && !m.call(t, "constructor") && !m.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
			} catch(t) {
				return ! 1
			}
			if (v.ownLast) for (e in t) return m.call(t, e);
			for (e in t);
			return void 0 === e || m.call(t, e)
		},
		type: function (t) {
			return null == t ? t + "": "object" == typeof t || "function" == typeof t ? i[e.call(t)] || "object": typeof t
		},
		globalEval: function (t) {
			t && C.trim(t) && (f.execScript ||
			function (t) {
				f.eval.call(f, t)
			})(t)
		},
		camelCase: function (t) {
			return t.replace(r, "ms-").replace(l, c)
		},
		nodeName: function (t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function (t, e, i) {
			var n = 0,
			o = t.length,
			s = d(t);
			if (i) {
				if (s) for (; n < o && !1 !== e.apply(t[n], i); n++);
				else for (n in t) if (!1 === e.apply(t[n], i)) break
			} else if (s) for (; n < o && !1 !== e.call(t[n], n, t[n]); n++);
			else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
			return t
		},
		trim: function (t) {
			return null == t ? "": (t + "").replace(s, "")
		},
		makeArray: function (t, e) {
			var i = e || [];
			return null != t && (d(Object(t)) ? C.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)),
			i
		},
		inArray: function (t, e, i) {
			var n;
			if (e) {
				if (o) return o.call(e, t, i);
				for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i: 0; i < n; i++) if (i in e && e[i] === t) return i
			}
			return - 1
		},
		merge: function (t, e) {
			for (var i = +e.length, n = 0, o = t.length; n < i;) t[o++] = e[n++];
			if (i != i) for (; void 0 !== e[n];) t[o++] = e[n++];
			return t.length = o,
			t
		},
		grep: function (t, e, i) {
			for (var n = [], o = 0, s = t.length, r = !i; o < s; o++) ! e(t[o], o) !== r && n.push(t[o]);
			return n
		},
		map: function (t, e, i) {
			var n, o = 0,
			s = t.length,
			r = [];
			if (d(t)) for (; o < s; o++) null != (n = e(t[o], o, i)) && r.push(n);
			else for (o in t) null != (n = e(t[o], o, i)) && r.push(n);
			return g.apply([], r)
		},
		guid: 1,
		proxy: function (t, e) {
			var i, n, o;
			return "string" == typeof e && (o = t[e], e = t, t = o),
			C.isFunction(t) ? (i = u.call(arguments, 2), (n = function () {
				return t.apply(e || this, i.concat(u.call(arguments)))
			}).guid = t.guid = t.guid || C.guid++, n) : void 0
		},
		now: function () {
			return + new Date
		},
		support: v
	}),
	C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
		i["[object " + e + "]"] = e.toLowerCase()
	});
	var p = function (i) {
		var t, f, w, s, n, g, h, m, x, c, u, v, _, o, y, b, r, a, C, T = "sizzle" + 1 * new Date,
		E = i.document,
		$ = 0,
		d = 0,
		l = st(),
		p = st(),
		k = st(),
		S = function (t, e) {
			return t === e && (u = !0),
			0
		},
		N = {}.hasOwnProperty,
		e = [],
		D = e.pop,
		A = e.push,
		j = e.push,
		O = e.slice,
		L = function (t, e) {
			for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
			return - 1
		},
		I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		H = "[\\x20\\t\\r\\n\\f]",
		z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		R = z.replace("w", "w#"),
		P = "\\[" + H + "*(" + z + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
		M = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
		q = new RegExp(H + "+", "g"),
		F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
		W = new RegExp("^" + H + "*," + H + "*"),
		B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
		U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
		V = new RegExp(M),
		Q = new RegExp("^" + R + "$"),
		X = {
			ID: new RegExp("^#(" + z + ")"),
			CLASS: new RegExp("^\\.(" + z + ")"),
			TAG: new RegExp("^(" + z.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + P),
			PSEUDO: new RegExp("^" + M),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + I + ")$", "i"),
			needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
		},
		J = /^(?:input|select|textarea|button)$/i,
		Y = /^h\d$/i,
		Z = /^[^{]+\{\s*\[native \w/,
		G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		K = /[+~]/,
		tt = /'|\\/g,
		et = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
		it = function (t, e, i) {
			var n = "0x" + e - 65536;
			return n != n || i ? e: n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
		},
		nt = function () {
			v()
		};
		try {
			j.apply(e = O.call(E.childNodes), E.childNodes),
			e[E.childNodes.length].nodeType
		} catch(t) {
			j = {
				apply: e.length ?
				function (t, e) {
					A.apply(t, O.call(e))
				}: function (t, e) {
					for (var i = t.length, n = 0; t[i++] = e[n++];);
					t.length = i - 1
				}
			}
		}
		function ot(t, e, i, n) {
			var o, s, r, a, l, c, u, h, d, p;
			if ((e ? e.ownerDocument || e: E) !== _ && v(e), i = i || [], a = (e = e || _).nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
			if (!n && y) {
				if (11 !== a && (o = G.exec(t))) if (r = o[1]) {
					if (9 === a) {
						if (! (s = e.getElementById(r)) || !s.parentNode) return i;
						if (s.id === r) return i.push(s),
						i
					} else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && C(e, s) && s.id === r) return i.push(s),
					i
				} else {
					if (o[2]) return j.apply(i, e.getElementsByTagName(t)),
					i;
					if ((r = o[3]) && f.getElementsByClassName) return j.apply(i, e.getElementsByClassName(r)),
					i
				}
				if (f.qsa && (!b || !b.test(t))) {
					if (h = u = T, d = e, p = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
						for (c = g(t), (u = e.getAttribute("id")) ? h = u.replace(tt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + gt(c[l]);
						d = K.test(t) && pt(e.parentNode) || e,
						p = c.join(",")
					}
					if (p) try {
						return j.apply(i, d.querySelectorAll(p)),
						i
					} catch(t) {} finally {
						u || e.removeAttribute("id")
					}
				}
			}
			return m(t.replace(F, "$1"), e, i, n)
		}
		function st() {
			var n = [];
			return function t(e, i) {
				return n.push(e + " ") > w.cacheLength && delete t[n.shift()],
				t[e + " "] = i
			}
		}
		function rt(t) {
			return t[T] = !0,
			t
		}
		function at(t) {
			var e = _.createElement("div");
			try {
				return !! t(e)
			} catch(t) {
				return ! 1
			} finally {
				e.parentNode && e.parentNode.removeChild(e),
				e = null
			}
		}
		function lt(t, e) {
			for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
		}
		function ct(t, e) {
			var i = e && t,
			n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
			if (n) return n;
			if (i) for (; i = i.nextSibling;) if (i === e) return - 1;
			return t ? 1 : -1
		}
		function ut(e) {
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}
		function ht(i) {
			return function (t) {
				var e = t.nodeName.toLowerCase();
				return ("input" === e || "button" === e) && t.type === i
			}
		}
		function dt(r) {
			return rt(function (s) {
				return s = +s,
				rt(function (t, e) {
					for (var i, n = r([], t.length, s), o = n.length; o--;) t[i = n[o]] && (t[i] = !(e[i] = t[i]))
				})
			})
		}
		function pt(t) {
			return t && void 0 !== t.getElementsByTagName && t
		}
		for (t in f = ot.support = {},
		n = ot.isXML = function (t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return !! e && "HTML" !== e.nodeName
		},
		v = ot.setDocument = function (t) {
			var e, i, l = t ? t.ownerDocument || t: E;
			return l !== _ && 9 === l.nodeType && l.documentElement ? (o = (_ = l).documentElement, (i = l.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", nt, !1) : i.attachEvent && i.attachEvent("onunload", nt)), y = !n(l), f.attributes = at(function (t) {
				return t.className = "i",
				!t.getAttribute("className")
			}), f.getElementsByTagName = at(function (t) {
				return t.appendChild(l.createComment("")),
				!t.getElementsByTagName("*").length
			}), f.getElementsByClassName = Z.test(l.getElementsByClassName), f.getById = at(function (t) {
				return o.appendChild(t).id = T,
				!l.getElementsByName || !l.getElementsByName(T).length
			}), f.getById ? (w.find.ID = function (t, e) {
				if (void 0 !== e.getElementById && y) {
					var i = e.getElementById(t);
					return i && i.parentNode ? [i] : []
				}
			},
			w.filter.ID = function (t) {
				var e = t.replace(et, it);
				return function (t) {
					return t.getAttribute("id") === e
				}
			}) : (delete w.find.ID, w.filter.ID = function (t) {
				var i = t.replace(et, it);
				return function (t) {
					var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
					return e && e.value === i
				}
			}), w.find.TAG = f.getElementsByTagName ?
			function (t, e) {
				return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
			}: function (t, e) {
				var i, n = [],
				o = 0,
				s = e.getElementsByTagName(t);
				if ("*" !== t) return s;
				for (; i = s[o++];) 1 === i.nodeType && n.push(i);
				return n
			},
			w.find.CLASS = f.getElementsByClassName &&
			function (t, e) {
				return y ? e.getElementsByClassName(t) : void 0
			},
			r = [], b = [], (f.qsa = Z.test(l.querySelectorAll)) && (at(function (t) {
				o.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\f]' msallowcapture=''><option selected=''></option></select>",
				t.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + H + "*(?:''|\"\")"),
				t.querySelectorAll("[selected]").length || b.push("\\[" + H + "*(?:value|" + I + ")"),
				t.querySelectorAll("[id~=" + T + "-]").length || b.push("~="),
				t.querySelectorAll(":checked").length || b.push(":checked"),
				t.querySelectorAll("a#" + T + "+*").length || b.push(".#.+[+~]")
			}), at(function (t) {
				var e = l.createElement("input");
				e.setAttribute("type", "hidden"),
				t.appendChild(e).setAttribute("name", "D"),
				t.querySelectorAll("[name=d]").length && b.push("name" + H + "*[*^$|!~]?="),
				t.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"),
				t.querySelectorAll("*,:x"),
				b.push(",.*:")
			})), (f.matchesSelector = Z.test(a = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && at(function (t) {
				f.disconnectedMatch = a.call(t, "div"),
				a.call(t, "[s!='']:x"),
				r.push("!=", M)
			}), b = b.length && new RegExp(b.join("|")), r = r.length && new RegExp(r.join("|")), e = Z.test(o.compareDocumentPosition), C = e || Z.test(o.contains) ?
			function (t, e) {
				var i = 9 === t.nodeType ? t.documentElement: t,
				n = e && e.parentNode;
				return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
			}: function (t, e) {
				if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
				return ! 1
			},
			S = e ?
			function (t, e) {
				if (t === e) return u = !0,
				0;
				var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
				return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === l || t.ownerDocument === E && C(E, t) ? -1 : e === l || e.ownerDocument === E && C(E, e) ? 1 : c ? L(c, t) - L(c, e) : 0 : 4 & i ? -1 : 1)
			}: function (t, e) {
				if (t === e) return u = !0,
				0;
				var i, n = 0,
				o = t.parentNode,
				s = e.parentNode,
				r = [t],
				a = [e];
				if (!o || !s) return t === l ? -1 : e === l ? 1 : o ? -1 : s ? 1 : c ? L(c, t) - L(c, e) : 0;
				if (o === s) return ct(t, e);
				for (i = t; i = i.parentNode;) r.unshift(i);
				for (i = e; i = i.parentNode;) a.unshift(i);
				for (; r[n] === a[n];) n++;
				return n ? ct(r[n], a[n]) : r[n] === E ? -1 : a[n] === E ? 1 : 0
			},
			l) : _
		},
		ot.matches = function (t, e) {
			return ot(t, null, null, e)
		},
		ot.matchesSelector = function (t, e) {
			if ((t.ownerDocument || t) !== _ && v(t), e = e.replace(U, "='$1']"), !(!f.matchesSelector || !y || r && r.test(e) || b && b.test(e))) try {
				var i = a.call(t, e);
				if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
			} catch(t) {}
			return 0 < ot(e, _, null, [t]).length
		},
		ot.contains = function (t, e) {
			return (t.ownerDocument || t) !== _ && v(t),
			C(t, e)
		},
		ot.attr = function (t, e) { (t.ownerDocument || t) !== _ && v(t);
			var i = w.attrHandle[e.toLowerCase()],
			n = i && N.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !y) : void 0;
			return void 0 !== n ? n: f.attributes || !y ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
		},
		ot.error = function (t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		},
		ot.uniqueSort = function (t) {
			var e, i = [],
			n = 0,
			o = 0;
			if (u = !f.detectDuplicates, c = !f.sortStable && t.slice(0), t.sort(S), u) {
				for (; e = t[o++];) e === t[o] && (n = i.push(o));
				for (; n--;) t.splice(i[n], 1)
			}
			return c = null,
			t
		},
		s = ot.getText = function (t) {
			var e, i = "",
			n = 0,
			o = t.nodeType;
			if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
				} else if (3 === o || 4 === o) return t.nodeValue
			} else for (; e = t[n++];) i += s(e);
			return i
		},
		(w = ot.selectors = {
			cacheLength: 50,
			createPseudo: rt,
			match: X,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (t) {
					return t[1] = t[1].replace(et, it),
					t[3] = (t[3] || t[4] || t[5] || "").replace(et, it),
					"~=" === t[2] && (t[3] = " " + t[3] + " "),
					t.slice(0, 4)
				},
				CHILD: function (t) {
					return t[1] = t[1].toLowerCase(),
					"nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]),
					t
				},
				PSEUDO: function (t) {
					var e, i = !t[6] && t[2];
					return X.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": i && V.test(i) && (e = g(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function (t) {
					var e = t.replace(et, it).toLowerCase();
					return "*" === t ?
					function () {
						return ! 0
					}: function (t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				},
				CLASS: function (t) {
					var e = l[t + " "];
					return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && l(t, function (t) {
						return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
					})
				},
				ATTR: function (i, n, o) {
					return function (t) {
						var e = ot.attr(t, i);
						return null == e ? "!=" === n: !n || (e += "", "=" === n ? e === o: "!=" === n ? e !== o: "^=" === n ? o && 0 === e.indexOf(o) : "*=" === n ? o && -1 < e.indexOf(o) : "$=" === n ? o && e.slice( - o.length) === o: "~=" === n ? -1 < (" " + e.replace(q, " ") + " ").indexOf(o) : "|=" === n && (e === o || e.slice(0, o.length + 1) === o + "-"))
					}
				},
				CHILD: function (p, t, e, f, g) {
					var m = "nth" !== p.slice(0, 3),
					v = "last" !== p.slice( - 4),
					y = "of-type" === t;
					return 1 === f && 0 === g ?
					function (t) {
						return !! t.parentNode
					}: function (t, e, i) {
						var n, o, s, r, a, l, c = m !== v ? "nextSibling": "previousSibling",
						u = t.parentNode,
						h = y && t.nodeName.toLowerCase(),
						d = !i && !y;
						if (u) {
							if (m) {
								for (; c;) {
									for (s = t; s = s[c];) if (y ? s.nodeName.toLowerCase() === h: 1 === s.nodeType) return ! 1;
									l = c = "only" === p && !l && "nextSibling"
								}
								return ! 0
							}
							if (l = [v ? u.firstChild: u.lastChild], v && d) {
								for (a = (n = (o = u[T] || (u[T] = {}))[p] || [])[0] === $ && n[1], r = n[0] === $ && n[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (r = a = 0) || l.pop();) if (1 === s.nodeType && ++r && s === t) {
									o[p] = [$, a, r];
									break
								}
							} else if (d && (n = (t[T] || (t[T] = {}))[p]) && n[0] === $) r = n[1];
							else for (;
							(s = ++a && s && s[c] || (r = a = 0) || l.pop()) && ((y ? s.nodeName.toLowerCase() !== h: 1 !== s.nodeType) || !++r || (d && ((s[T] || (s[T] = {}))[p] = [$, r]), s !== t)););
							return (r -= g) === f || r % f == 0 && 0 <= r / f
						}
					}
				},
				PSEUDO: function (t, s) {
					var e, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
					return r[T] ? r(s) : 1 < r.length ? (e = [t, t, "", s], w.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function (t, e) {
						for (var i, n = r(t, s), o = n.length; o--;) t[i = L(t, n[o])] = !(e[i] = n[o])
					}) : function (t) {
						return r(t, 0, e)
					}) : r
				}
			},
			pseudos: {
				not: rt(function (t) {
					var n = [],
					o = [],
					a = h(t.replace(F, "$1"));
					return a[T] ? rt(function (t, e, i, n) {
						for (var o, s = a(t, null, n, []), r = t.length; r--;)(o = s[r]) && (t[r] = !(e[r] = o))
					}) : function (t, e, i) {
						return n[0] = t,
						a(n, null, i, o),
						n[0] = null,
						!o.pop()
					}
				}),
				has: rt(function (e) {
					return function (t) {
						return 0 < ot(e, t).length
					}
				}),
				contains: rt(function (e) {
					return e = e.replace(et, it),
					function (t) {
						return - 1 < (t.textContent || t.innerText || s(t)).indexOf(e)
					}
				}),
				lang: rt(function (i) {
					return Q.test(i || "") || ot.error("unsupported lang: " + i),
					i = i.replace(et, it).toLowerCase(),
					function (t) {
						var e;
						do {
							if (e = y ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
						} while ((t = t.parentNode) && 1 === t.nodeType);
						return ! 1
					}
				}),
				target: function (t) {
					var e = i.location && i.location.hash;
					return e && e.slice(1) === t.id
				},
				root: function (t) {
					return t === o
				},
				focus: function (t) {
					return t === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				},
				enabled: function (t) {
					return ! 1 === t.disabled
				},
				disabled: function (t) {
					return ! 0 === t.disabled
				},
				checked: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !!t.checked || "option" === e && !!t.selected
				},
				selected: function (t) {
					return t.parentNode && t.parentNode.selectedIndex,
					!0 === t.selected
				},
				empty: function (t) {
					for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
					return ! 0
				},
				parent: function (t) {
					return ! w.pseudos.empty(t)
				},
				header: function (t) {
					return Y.test(t.nodeName)
				},
				input: function (t) {
					return J.test(t.nodeName)
				},
				button: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				},
				text: function (t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
				},
				first: dt(function () {
					return [0]
				}),
				last: dt(function (t, e) {
					return [e - 1]
				}),
				eq: dt(function (t, e, i) {
					return [i < 0 ? i + e: i]
				}),
				even: dt(function (t, e) {
					for (var i = 0; i < e; i += 2) t.push(i);
					return t
				}),
				odd: dt(function (t, e) {
					for (var i = 1; i < e; i += 2) t.push(i);
					return t
				}),
				lt: dt(function (t, e, i) {
					for (var n = i < 0 ? i + e: i; 0 <= --n;) t.push(n);
					return t
				}),
				gt: dt(function (t, e, i) {
					for (var n = i < 0 ? i + e: i; ++n < e;) t.push(n);
					return t
				})
			}
		}).pseudos.nth = w.pseudos.eq, {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) w.pseudos[t] = ut(t);
		for (t in {
			submit: !0,
			reset: !0
		}) w.pseudos[t] = ht(t);
		function ft() {}
		function gt(t) {
			for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
			return n
		}
		function mt(r, t, e) {
			var a = t.dir,
			l = e && "parentNode" === a,
			c = d++;
			return t.first ?
			function (t, e, i) {
				for (; t = t[a];) if (1 === t.nodeType || l) return r(t, e, i)
			}: function (t, e, i) {
				var n, o, s = [$, c];
				if (i) {
					for (; t = t[a];) if ((1 === t.nodeType || l) && r(t, e, i)) return ! 0
				} else for (; t = t[a];) if (1 === t.nodeType || l) {
					if ((n = (o = t[T] || (t[T] = {}))[a]) && n[0] === $ && n[1] === c) return s[2] = n[2];
					if ((o[a] = s)[2] = r(t, e, i)) return ! 0
				}
			}
		}
		function vt(o) {
			return 1 < o.length ?
			function (t, e, i) {
				for (var n = o.length; n--;) if (!o[n](t, e, i)) return ! 1;
				return ! 0
			}: o[0]
		}
		function yt(t, e, i, n, o) {
			for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (!i || i(s, n, o)) && (r.push(s), c && e.push(a));
			return r
		}
		function bt(p, f, g, m, v, t) {
			return m && !m[T] && (m = bt(m)),
			v && !v[T] && (v = bt(v, t)),
			rt(function (t, e, i, n) {
				var o, s, r, a = [],
				l = [],
				c = e.length,
				u = t ||
				function (t, e, i) {
					for (var n = 0, o = e.length; n < o; n++) ot(t, e[n], i);
					return i
				} (f || "*", i.nodeType ? [i] : i, []),
				h = !p || !t && f ? u: yt(u, a, p, i, n),
				d = g ? v || (t ? p: c || m) ? [] : e: h;
				if (g && g(h, d, i, n), m) for (o = yt(d, l), m(o, [], i, n), s = o.length; s--;)(r = o[s]) && (d[l[s]] = !(h[l[s]] = r));
				if (t) {
					if (v || p) {
						if (v) {
							for (o = [], s = d.length; s--;)(r = d[s]) && o.push(h[s] = r);
							v(null, d = [], o, n)
						}
						for (s = d.length; s--;)(r = d[s]) && -1 < (o = v ? L(t, r) : a[s]) && (t[o] = !(e[o] = r))
					}
				} else d = yt(d === e ? d.splice(c, d.length) : d),
				v ? v(null, e, d, n) : j.apply(e, d)
			})
		}
		function wt(t) {
			for (var o, e, i, n = t.length, s = w.relative[t[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = mt(function (t) {
				return t === o
			},
			r, !0), c = mt(function (t) {
				return - 1 < L(o, t)
			},
			r, !0), u = [function (t, e, i) {
				var n = !s && (i || e !== x) || ((o = e).nodeType ? l(t, e, i) : c(t, e, i));
				return o = null,
				n
			}]; a < n; a++) if (e = w.relative[t[a].type]) u = [mt(vt(u), e)];
			else {
				if ((e = w.filter[t[a].type].apply(null, t[a].matches))[T]) {
					for (i = ++a; i < n && !w.relative[t[i].type]; i++);
					return bt(1 < a && vt(u), 1 < a && gt(t.slice(0, a - 1).concat({
						value: " " === t[a - 2].type ? "*": ""
					})).replace(F, "$1"), e, a < i && wt(t.slice(a, i)), i < n && wt(t = t.slice(i)), i < n && gt(t))
				}
				u.push(e)
			}
			return vt(u)
		}
		return ft.prototype = w.filters = w.pseudos,
		w.setFilters = new ft,
		g = ot.tokenize = function (t, e) {
			var i, n, o, s, r, a, l, c = p[t + " "];
			if (c) return e ? 0 : c.slice(0);
			for (r = t, a = [], l = w.preFilter; r;) {
				for (s in (!i || (n = W.exec(r))) && (n && (r = r.slice(n[0].length) || r), a.push(o = [])), i = !1, (n = B.exec(r)) && (i = n.shift(), o.push({
					value: i,
					type: n[0].replace(F, " ")
				}), r = r.slice(i.length)), w.filter) ! (n = X[s].exec(r)) || l[s] && !(n = l[s](n)) || (i = n.shift(), o.push({
					value: i,
					type: s,
					matches: n
				}), r = r.slice(i.length));
				if (!i) break
			}
			return e ? r.length: r ? ot.error(t) : p(t, a).slice(0)
		},
		h = ot.compile = function (t, e) {
			var i, m, v, y, b, n, o = [],
			s = [],
			r = k[t + " "];
			if (!r) {
				for (e || (e = g(t)), i = e.length; i--;)(r = wt(e[i]))[T] ? o.push(r) : s.push(r);
				(r = k(t, (m = s, y = 0 < (v = o).length, b = 0 < m.length, n = function (t, e, i, n, o) {
					var s, r, a, l = 0,
					c = "0",
					u = t && [],
					h = [],
					d = x,
					p = t || b && w.find.TAG("*", o),
					f = $ += null == d ? 1 : Math.random() || .1,
					g = p.length;
					for (o && (x = e !== _ && e); c !== g && null != (s = p[c]); c++) {
						if (b && s) {
							for (r = 0; a = m[r++];) if (a(s, e, i)) {
								n.push(s);
								break
							}
							o && ($ = f)
						}
						y && ((s = !a && s) && l--, t && u.push(s))
					}
					if (l += c, y && c !== l) {
						for (r = 0; a = v[r++];) a(u, h, e, i);
						if (t) {
							if (0 < l) for (; c--;) u[c] || h[c] || (h[c] = D.call(n));
							h = yt(h)
						}
						j.apply(n, h),
						o && !t && 0 < h.length && 1 < l + v.length && ot.uniqueSort(n)
					}
					return o && ($ = f, x = d),
					u
				},
				y ? rt(n) : n))).selector = t
			}
			return r
		},
		m = ot.select = function (t, e, i, n) {
			var o, s, r, a, l, c = "function" == typeof t && t,
			u = !n && g(t = c.selector || t);
			if (i = i || [], 1 === u.length) {
				if (2 < (s = u[0] = u[0].slice(0)).length && "ID" === (r = s[0]).type && f.getById && 9 === e.nodeType && y && w.relative[s[1].type]) {
					if (! (e = (w.find.ID(r.matches[0].replace(et, it), e) || [])[0])) return i;
					c && (e = e.parentNode),
					t = t.slice(s.shift().value.length)
				}
				for (o = X.needsContext.test(t) ? 0 : s.length; o--&&(r = s[o], !w.relative[a = r.type]);) if ((l = w.find[a]) && (n = l(r.matches[0].replace(et, it), K.test(s[0].type) && pt(e.parentNode) || e))) {
					if (s.splice(o, 1), !(t = n.length && gt(s))) return j.apply(i, n),
					i;
					break
				}
			}
			return (c || h(t, u))(n, e, !y, i, K.test(t) && pt(e.parentNode) || e),
			i
		},
		f.sortStable = T.split("").sort(S).join("") === T,
		f.detectDuplicates = !!u,
		v(),
		f.sortDetached = at(function (t) {
			return 1 & t.compareDocumentPosition(_.createElement("div"))
		}),
		at(function (t) {
			return t.innerHTML = "<a href='#'></a>",
			"#" === t.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function (t, e, i) {
			return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}),
		f.attributes && at(function (t) {
			return t.innerHTML = "<input/>",
			t.firstChild.setAttribute("value", ""),
			"" === t.firstChild.getAttribute("value")
		}) || lt("value", function (t, e, i) {
			return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}),
		at(function (t) {
			return null == t.getAttribute("disabled")
		}) || lt(I, function (t, e, i) {
			var n;
			return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
		}),
		ot
	} (f);
	C.find = p,
	C.expr = p.selectors,
	C.expr[":"] = C.expr.pseudos,
	C.unique = p.uniqueSort,
	C.text = p.getText,
	C.isXMLDoc = p.isXML,
	C.contains = p.contains;
	var y = C.expr.match.needsContext,
	b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	w = /^.[^:#\[\.,]*$/;
	function x(t, i, n) {
		if (C.isFunction(i)) return C.grep(t, function (t, e) {
			return !! i.call(t, e, t) !== n
		});
		if (i.nodeType) return C.grep(t, function (t) {
			return t === i !== n
		});
		if ("string" == typeof i) {
			if (w.test(i)) return C.filter(i, t, n);
			i = C.filter(i, t)
		}
		return C.grep(t, function (t) {
			return 0 <= C.inArray(t, i) !== n
		})
	}
	C.filter = function (t, e, i) {
		var n = e[0];
		return i && (t = ":not(" + t + ")"),
		1 === e.length && 1 === n.nodeType ? C.find.matchesSelector(n, t) ? [n] : [] : C.find.matches(t, C.grep(e, function (t) {
			return 1 === t.nodeType
		}))
	},
	C.fn.extend({
		find: function (t) {
			var e, i = [],
			n = this,
			o = n.length;
			if ("string" != typeof t) return this.pushStack(C(t).filter(function () {
				for (e = 0; e < o; e++) if (C.contains(n[e], this)) return ! 0
			}));
			for (e = 0; e < o; e++) C.find(t, n[e], i);
			return (i = this.pushStack(1 < o ? C.unique(i) : i)).selector = this.selector ? this.selector + " " + t: t,
			i
		},
		filter: function (t) {
			return this.pushStack(x(this, t || [], !1))
		},
		not: function (t) {
			return this.pushStack(x(this, t || [], !0))
		},
		is: function (t) {
			return !! x(this, "string" == typeof t && y.test(t) ? C(t) : t || [], !1).length
		}
	});
	var _, T = f.document,
	E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(C.fn.init = function (t, e) {
		var i, n;
		if (!t) return this;
		if ("string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : C.isFunction(t) ? void 0 !== _.ready ? _.ready(t) : t(C) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), C.makeArray(t, this));
		if (! (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : E.exec(t)) || !i[1] && e) return ! e || e.jquery ? (e || _).find(t) : this.constructor(e).find(t);
		if (i[1]) {
			if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e: T, !0)), b.test(i[1]) && C.isPlainObject(e)) for (i in e) C.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
			return this
		}
		if ((n = T.getElementById(i[2])) && n.parentNode) {
			if (n.id !== i[2]) return _.find(t);
			this.length = 1,
			this[0] = n
		}
		return this.context = T,
		this.selector = t,
		this
	}).prototype = C.fn,
	_ = C(T);
	var $ = /^(?:parents|prev(?:Until|All))/,
	k = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	function S(t, e) {
		for (;
		(t = t[e]) && 1 !== t.nodeType;);
		return t
	}
	C.extend({
		dir: function (t, e, i) {
			for (var n = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === i || 1 !== o.nodeType || !C(o).is(i));) 1 === o.nodeType && n.push(o),
			o = o[e];
			return n
		},
		sibling: function (t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		}
	}),
	C.fn.extend({
		has: function (t) {
			var e, i = C(t, this),
			n = i.length;
			return this.filter(function () {
				for (e = 0; e < n; e++) if (C.contains(this, i[e])) return ! 0
			})
		},
		closest: function (t, e) {
			for (var i, n = 0, o = this.length, s = [], r = y.test(t) || "string" != typeof t ? C(t, e || this.context) : 0; n < o; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
				s.push(i);
				break
			}
			return this.pushStack(1 < s.length ? C.unique(s) : s)
		},
		index: function (t) {
			return t ? "string" == typeof t ? C.inArray(this[0], C(t)) : C.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
		},
		add: function (t, e) {
			return this.pushStack(C.unique(C.merge(this.get(), C(t, e))))
		},
		addBack: function (t) {
			return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
		}
	}),
	C.each({
		parent: function (t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e: null
		},
		parents: function (t) {
			return C.dir(t, "parentNode")
		},
		parentsUntil: function (t, e, i) {
			return C.dir(t, "parentNode", i)
		},
		next: function (t) {
			return S(t, "nextSibling")
		},
		prev: function (t) {
			return S(t, "previousSibling")
		},
		nextAll: function (t) {
			return C.dir(t, "nextSibling")
		},
		prevAll: function (t) {
			return C.dir(t, "previousSibling")
		},
		nextUntil: function (t, e, i) {
			return C.dir(t, "nextSibling", i)
		},
		prevUntil: function (t, e, i) {
			return C.dir(t, "previousSibling", i)
		},
		siblings: function (t) {
			return C.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function (t) {
			return C.sibling(t.firstChild)
		},
		contents: function (t) {
			return C.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: C.merge([], t.childNodes)
		}
	},
	function (n, o) {
		C.fn[n] = function (t, e) {
			var i = C.map(this, o, t);
			return "Until" !== n.slice( - 5) && (e = t),
			e && "string" == typeof e && (i = C.filter(e, i)),
			1 < this.length && (k[n] || (i = C.unique(i)), $.test(n) && (i = i.reverse())),
			this.pushStack(i)
		}
	});
	var N, D = /\S+/g,
	A = {};
	function j() {
		T.addEventListener ? (T.removeEventListener("DOMContentLoaded", O, !1), f.removeEventListener("load", O, !1)) : (T.detachEvent("onreadystatechange", O), f.detachEvent("onload", O))
	}
	function O() { (T.addEventListener || "load" === event.type || "complete" === T.readyState) && (j(), C.ready())
	}
	C.Callbacks = function (o) {
		var t, i;
		o = "string" == typeof o ? A[o] || (i = A[t = o] = {},
		C.each(t.match(D) || [], function (t, e) {
			i[e] = !0
		}), i) : C.extend({},
		o);
		var n, e, s, r, a, l, c = [],
		u = !o.once && [],
		h = function (t) {
			for (e = o.memory && t, s = !0, a = l || 0, l = 0, r = c.length, n = !0; c && a < r; a++) if (!1 === c[a].apply(t[0], t[1]) && o.stopOnFalse) {
				e = !1;
				break
			}
			n = !1,
			c && (u ? u.length && h(u.shift()) : e ? c = [] : d.disable())
		},
		d = {
			add: function () {
				if (c) {
					var t = c.length; !
					function n(t) {
						C.each(t, function (t, e) {
							var i = C.type(e);
							"function" === i ? o.unique && d.has(e) || c.push(e) : e && e.length && "string" !== i && n(e)
						})
					} (arguments),
					n ? r = c.length: e && (l = t, h(e))
				}
				return this
			},
			remove: function () {
				return c && C.each(arguments, function (t, e) {
					for (var i; - 1 < (i = C.inArray(e, c, i));) c.splice(i, 1),
					n && (i <= r && r--, i <= a && a--)
				}),
				this
			},
			has: function (t) {
				return t ? -1 < C.inArray(t, c) : !(!c || !c.length)
			},
			empty: function () {
				return c = [],
				r = 0,
				this
			},
			disable: function () {
				return c = u = e = void 0,
				this
			},
			disabled: function () {
				return ! c
			},
			lock: function () {
				return u = void 0,
				e || d.disable(),
				this
			},
			locked: function () {
				return ! u
			},
			fireWith: function (t, e) {
				return ! c || s && !u || (e = [t, (e = e || []).slice ? e.slice() : e], n ? u.push(e) : h(e)),
				this
			},
			fire: function () {
				return d.fireWith(this, arguments),
				this
			},
			fired: function () {
				return !! s
			}
		};
		return d
	},
	C.extend({
		Deferred: function (t) {
			var s = [["resolve", "done", C.Callbacks("once memory"), "resolved"], ["reject", "fail", C.Callbacks("once memory"), "rejected"], ["notify", "progress", C.Callbacks("memory")]],
			o = "pending",
			r = {
				state: function () {
					return o
				},
				always: function () {
					return a.done(arguments).fail(arguments),
					this
				},
				then: function () {
					var o = arguments;
					return C.Deferred(function (n) {
						C.each(s, function (t, e) {
							var i = C.isFunction(o[t]) && o[t];
							a[e[1]](function () {
								var t = i && i.apply(this, arguments);
								t && C.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[e[0] + "With"](this === r ? n.promise() : this, i ? [t] : arguments)
							})
						}),
						o = null
					}).promise()
				},
				promise: function (t) {
					return null != t ? C.extend(t, r) : r
				}
			},
			a = {};
			return r.pipe = r.then,
			C.each(s, function (t, e) {
				var i = e[2],
				n = e[3];
				r[e[1]] = i.add,
				n && i.add(function () {
					o = n
				},
				s[1 ^ t][2].disable, s[2][2].lock),
				a[e[0]] = function () {
					return a[e[0] + "With"](this === a ? r: this, arguments),
					this
				},
				a[e[0] + "With"] = i.fireWith
			}),
			r.promise(a),
			t && t.call(a, a),
			a
		},
		when: function (t) {
			var o, e, i, n = 0,
			s = u.call(arguments),
			r = s.length,
			a = 1 !== r || t && C.isFunction(t.promise) ? r: 0,
			l = 1 === a ? t: C.Deferred(),
			c = function (e, i, n) {
				return function (t) {
					i[e] = this,
					n[e] = 1 < arguments.length ? u.call(arguments) : t,
					n === o ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
				}
			};
			if (1 < r) for (o = new Array(r), e = new Array(r), i = new Array(r); n < r; n++) s[n] && C.isFunction(s[n].promise) ? s[n].promise().done(c(n, i, s)).fail(l.reject).progress(c(n, e, o)) : --a;
			return a || l.resolveWith(i, s),
			l.promise()
		}
	}),
	C.fn.ready = function (t) {
		return C.ready.promise().done(t),
		this
	},
	C.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (t) {
			t ? C.readyWait++:C.ready(!0)
		},
		ready: function (t) {
			if (!0 === t ? !--C.readyWait: !C.isReady) {
				if (!T.body) return setTimeout(C.ready);
				(C.isReady = !0) !== t && 0 < --C.readyWait || (N.resolveWith(T, [C]), C.fn.triggerHandler && (C(T).triggerHandler("ready"), C(T).off("ready")))
			}
		}
	}),
	C.ready.promise = function (t) {
		if (!N) if (N = C.Deferred(), "complete" === T.readyState) setTimeout(C.ready);
		else if (T.addEventListener) T.addEventListener("DOMContentLoaded", O, !1),
		f.addEventListener("load", O, !1);
		else {
			T.attachEvent("onreadystatechange", O),
			f.attachEvent("onload", O);
			var i = !1;
			try {
				i = null == f.frameElement && T.documentElement
			} catch(t) {}
			i && i.doScroll &&
			function e() {
				if (!C.isReady) {
					try {
						i.doScroll("left")
					} catch(t) {
						return setTimeout(e, 50)
					}
					j(),
					C.ready()
				}
			} ()
		}
		return N.promise(t)
	};
	var L, I = "undefined";
	for (L in C(v)) break;
	v.ownLast = "0" !== L,
	v.inlineBlockNeedsLayout = !1,
	C(function () {
		var t, e, i, n;
		(i = T.getElementsByTagName("body")[0]) && i.style && (e = T.createElement("div"), (n = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== I && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
	}),
	function () {
		var t = T.createElement("div");
		if (null == v.deleteExpando) {
			v.deleteExpando = !0;
			try {
				delete t.test
			} catch(t) {
				v.deleteExpando = !1
			}
		}
		t = null
	} (),
	C.acceptData = function (t) {
		var e = C.noData[(t.nodeName + " ").toLowerCase()],
		i = +t.nodeType || 1;
		return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
	};
	var H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	z = /([A-Z])/g;
	function R(t, e, i) {
		if (void 0 === i && 1 === t.nodeType) {
			var n = "data-" + e.replace(z, "-$1").toLowerCase();
			if ("string" == typeof(i = t.getAttribute(n))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null: +i + "" === i ? +i: H.test(i) ? C.parseJSON(i) : i)
				} catch(t) {}
				C.data(t, e, i)
			} else i = void 0
		}
		return i
	}
	function P(t) {
		var e;
		for (e in t) if (("data" !== e || !C.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
		return ! 0
	}
	function M(t, e, i, n) {
		if (C.acceptData(t)) {
			var o, s, r = C.expando,
			a = t.nodeType,
			l = a ? C.cache: t,
			c = a ? t[r] : t[r] && r;
			if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e) return c || (c = a ? t[r] = h.pop() || C.guid++:r),
			l[c] || (l[c] = a ? {}: {
				toJSON: C.noop
			}),
			("object" == typeof e || "function" == typeof e) && (n ? l[c] = C.extend(l[c], e) : l[c].data = C.extend(l[c].data, e)),
			s = l[c],
			n || (s.data || (s.data = {}), s = s.data),
			void 0 !== i && (s[C.camelCase(e)] = i),
			"string" == typeof e ? null == (o = s[e]) && (o = s[C.camelCase(e)]) : o = s,
			o
		}
	}
	function q(t, e, i) {
		if (C.acceptData(t)) {
			var n, o, s = t.nodeType,
			r = s ? C.cache: t,
			a = s ? t[C.expando] : C.expando;
			if (r[a]) {
				if (e && (n = i ? r[a] : r[a].data)) {
					o = (e = C.isArray(e) ? e.concat(C.map(e, C.camelCase)) : e in n ? [e] : (e = C.camelCase(e)) in n ? [e] : e.split(" ")).length;
					for (; o--;) delete n[e[o]];
					if (i ? !P(n) : !C.isEmptyObject(n)) return
				} (i || (delete r[a].data, P(r[a]))) && (s ? C.cleanData([t], !0) : v.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
			}
		}
	}
	C.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (t) {
			return !! (t = t.nodeType ? C.cache[t[C.expando]] : t[C.expando]) && !P(t)
		},
		data: function (t, e, i) {
			return M(t, e, i)
		},
		removeData: function (t, e) {
			return q(t, e)
		},
		_data: function (t, e, i) {
			return M(t, e, i, !0)
		},
		_removeData: function (t, e) {
			return q(t, e, !0)
		}
	}),
	C.fn.extend({
		data: function (t, e) {
			var i, n, o, s = this[0],
			r = s && s.attributes;
			if (void 0 !== t) return "object" == typeof t ? this.each(function () {
				C.data(this, t)
			}) : 1 < arguments.length ? this.each(function () {
				C.data(this, t, e)
			}) : s ? R(s, t, C.data(s, t)) : void 0;
			if (this.length && (o = C.data(s), 1 === s.nodeType && !C._data(s, "parsedAttrs"))) {
				for (i = r.length; i--;) r[i] && (0 === (n = r[i].name).indexOf("data-") && R(s, n = C.camelCase(n.slice(5)), o[n]));
				C._data(s, "parsedAttrs", !0)
			}
			return o
		},
		removeData: function (t) {
			return this.each(function () {
				C.removeData(this, t)
			})
		}
	}),
	C.extend({
		queue: function (t, e, i) {
			var n;
			return t ? (e = (e || "fx") + "queue", n = C._data(t, e), i && (!n || C.isArray(i) ? n = C._data(t, e, C.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function (t, e) {
			e = e || "fx";
			var i = C.queue(t, e),
			n = i.length,
			o = i.shift(),
			s = C._queueHooks(t, e);
			"inprogress" === o && (o = i.shift(), n--),
			o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, function () {
				C.dequeue(t, e)
			},
			s)),
			!n && s && s.empty.fire()
		},
		_queueHooks: function (t, e) {
			var i = e + "queueHooks";
			return C._data(t, i) || C._data(t, i, {
				empty: C.Callbacks("once memory").add(function () {
					C._removeData(t, e + "queue"),
					C._removeData(t, i)
				})
			})
		}
	}),
	C.fn.extend({
		queue: function (e, i) {
			var t = 2;
			return "string" != typeof e && (i = e, e = "fx", t--),
			arguments.length < t ? C.queue(this[0], e) : void 0 === i ? this: this.each(function () {
				var t = C.queue(this, e, i);
				C._queueHooks(this, e),
				"fx" === e && "inprogress" !== t[0] && C.dequeue(this, e)
			})
		},
		dequeue: function (t) {
			return this.each(function () {
				C.dequeue(this, t)
			})
		},
		clearQueue: function (t) {
			return this.queue(t || "fx", [])
		},
		promise: function (t, e) {
			var i, n = 1,
			o = C.Deferred(),
			s = this,
			r = this.length,
			a = function () {--n || o.resolveWith(s, [s])
			};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = C._data(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
			return a(),
			o.promise(e)
		}
	});
	var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	W = ["Top", "Right", "Bottom", "Left"],
	B = function (t, e) {
		return t = e || t,
		"none" === C.css(t, "display") || !C.contains(t.ownerDocument, t)
	},
	U = C.access = function (t, e, i, n, o, s, r) {
		var a = 0,
		l = t.length,
		c = null == i;
		if ("object" === C.type(i)) for (a in o = !0, i) C.access(t, e, a, i[a], !0, s, r);
		else if (void 0 !== n && (o = !0, C.isFunction(n) || (r = !0), c && (e = r ? (e.call(t, n), null) : (c = e, function (t, e, i) {
			return c.call(C(t), i)
		})), e)) for (; a < l; a++) e(t[a], i, r ? n: n.call(t[a], a, e(t[a], i)));
		return o ? t: c ? e.call(t) : l ? e(t[0], i) : s
	},
	V = /^(?:checkbox|radio)$/i; !
	function () {
		var t = T.createElement("input"),
		e = T.createElement("div"),
		i = T.createDocumentFragment();
		if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === e.firstChild.nodeType, v.tbody = !e.getElementsByTagName("tbody").length, v.htmlSerialize = !!e.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== T.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), v.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
			v.noCloneEvent = !1
		}), e.cloneNode(!0).click()), null == v.deleteExpando) {
			v.deleteExpando = !0;
			try {
				delete e.test
			} catch(t) {
				v.deleteExpando = !1
			}
		}
	} (),
	function () {
		var t, e, i = T.createElement("div");
		for (t in {
			submit: !0,
			change: !0,
			focusin: !0
		}) e = "on" + t,
		(v[t + "Bubbles"] = e in f) || (i.setAttribute(e, "t"), v[t + "Bubbles"] = !1 === i.attributes[e].expando);
		i = null
	} ();
	var Q = /^(?:input|select|textarea)$/i,
	X = /^key/,
	J = /^(?:mouse|pointer|contextmenu)|click/,
	Y = /^(?:focusinfocus|focusoutblur)$/,
	Z = /^([^.]*)(?:\.(.+)|)$/;
	function G() {
		return ! 0
	}
	function K() {
		return ! 1
	}
	function tt() {
		try {
			return T.activeElement
		} catch(t) {}
	}
	function et(t) {
		var e = it.split("|"),
		i = t.createDocumentFragment();
		if (i.createElement) for (; e.length;) i.createElement(e.pop());
		return i
	}
	C.event = {
		global: {},
		add: function (t, e, i, n, o) {
			var s, r, a, l, c, u, h, d, p, f, g, m = C._data(t);
			if (m) {
				for (i.handler && (i = (l = i).handler, o = l.selector), i.guid || (i.guid = C.guid++), (r = m.events) || (r = m.events = {}), (u = m.handle) || ((u = m.handle = function (t) {
					return typeof C === I || t && C.event.triggered === t.type ? void 0 : C.event.dispatch.apply(u.elem, arguments)
				}).elem = t), a = (e = (e || "").match(D) || [""]).length; a--;) p = g = (s = Z.exec(e[a]) || [])[1],
				f = (s[2] || "").split(".").sort(),
				p && (c = C.event.special[p] || {},
				p = (o ? c.delegateType: c.bindType) || p, c = C.event.special[p] || {},
				h = C.extend({
					type: p,
					origType: g,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && C.expr.match.needsContext.test(o),
					namespace: f.join(".")
				},
				l), (d = r[p]) || ((d = r[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, f, u) || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, h) : d.push(h), C.event.global[p] = !0);
				t = null
			}
		},
		remove: function (t, e, i, n, o) {
			var s, r, a, l, c, u, h, d, p, f, g, m = C.hasData(t) && C._data(t);
			if (m && (u = m.events)) {
				for (c = (e = (e || "").match(D) || [""]).length; c--;) if (p = g = (a = Z.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
					for (h = C.event.special[p] || {},
					d = u[p = (n ? h.delegateType: h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = d.length; s--;) r = d[s],
					!o && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(s, 1), r.selector && d.delegateCount--, h.remove && h.remove.call(t, r));
					l && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || C.removeEvent(t, p, m.handle), delete u[p])
				} else for (p in u) C.event.remove(t, p + e[c], i, n, !0);
				C.isEmptyObject(u) && (delete m.handle, C._removeData(t, "events"))
			}
		},
		trigger: function (t, e, i, n) {
			var o, s, r, a, l, c, u, h = [i || T],
			d = m.call(t, "type") ? t.type: t,
			p = m.call(t, "namespace") ? t.namespace.split(".") : [];
			if (r = c = i = i || T, 3 !== i.nodeType && 8 !== i.nodeType && !Y.test(d + C.event.triggered) && (0 <= d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), s = d.indexOf(":") < 0 && "on" + d, (t = t[C.expando] ? t: new C.Event(d, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : C.makeArray(e, [t]), l = C.event.special[d] || {},
			n || !l.trigger || !1 !== l.trigger.apply(i, e))) {
				if (!n && !l.noBubble && !C.isWindow(i)) {
					for (a = l.delegateType || d, Y.test(a + d) || (r = r.parentNode); r; r = r.parentNode) h.push(r),
					c = r;
					c === (i.ownerDocument || T) && h.push(c.defaultView || c.parentWindow || f)
				}
				for (u = 0;
				(r = h[u++]) && !t.isPropagationStopped();) t.type = 1 < u ? a: l.bindType || d,
				(o = (C._data(r, "events") || {})[t.type] && C._data(r, "handle")) && o.apply(r, e),
				(o = s && r[s]) && o.apply && C.acceptData(r) && (t.result = o.apply(r, e), !1 === t.result && t.preventDefault());
				if (t.type = d, !n && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(h.pop(), e)) && C.acceptData(i) && s && i[d] && !C.isWindow(i)) { (c = i[s]) && (i[s] = null),
					C.event.triggered = d;
					try {
						i[d]()
					} catch(t) {}
					C.event.triggered = void 0,
					c && (i[s] = c)
				}
				return t.result
			}
		},
		dispatch: function (t) {
			t = C.event.fix(t);
			var e, i, n, o, s, r = [],
			a = u.call(arguments),
			l = (C._data(this, "events") || {})[t.type] || [],
			c = C.event.special[t.type] || {};
			if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				for (r = C.event.handlers.call(this, t, l), e = 0;
				(o = r[e++]) && !t.isPropagationStopped();) for (t.currentTarget = o.elem, s = 0;
				(n = o.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, void 0 !== (i = ((C.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t),
				t.result
			}
		},
		handlers: function (t, e) {
			var i, n, o, s, r = [],
			a = e.delegateCount,
			l = t.target;
			if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
				for (o = [], s = 0; s < a; s++) void 0 === o[i = (n = e[s]).selector + " "] && (o[i] = n.needsContext ? 0 <= C(i, this).index(l) : C.find(i, this, null, [l]).length),
				o[i] && o.push(n);
				o.length && r.push({
					elem: l,
					handlers: o
				})
			}
			return a < e.length && r.push({
				elem: this,
				handlers: e.slice(a)
			}),
			r
		},
		fix: function (t) {
			if (t[C.expando]) return t;
			var e, i, n, o = t.type,
			s = t,
			r = this.fixHooks[o];
			for (r || (this.fixHooks[o] = r = J.test(o) ? this.mouseHooks: X.test(o) ? this.keyHooks: {}), n = r.props ? this.props.concat(r.props) : this.props, t = new C.Event(s), e = n.length; e--;) t[i = n[e]] = s[i];
			return t.target || (t.target = s.srcElement || T),
			3 === t.target.nodeType && (t.target = t.target.parentNode),
			t.metaKey = !!t.metaKey,
			r.filter ? r.filter(t, s) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
				t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (t, e) {
				var i, n, o, s = e.button,
				r = e.fromElement;
				return null == t.pageX && null != e.clientX && (o = (n = t.target.ownerDocument || T).documentElement, i = n.body, t.pageX = e.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)),
				!t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement: r),
				t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
				t
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== tt() && this.focus) try {
						return this.focus(),
						!1
					} catch(t) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === tt() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return C.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function (t) {
					return C.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function (t, e, i, n) {
			var o = C.extend(new C.Event, i, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? C.event.trigger(o, null, e) : C.event.dispatch.call(e, o),
			o.isDefaultPrevented() && i.preventDefault()
		}
	},
	C.removeEvent = T.removeEventListener ?
	function (t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i, !1)
	}: function (t, e, i) {
		var n = "on" + e;
		t.detachEvent && (typeof t[n] === I && (t[n] = null), t.detachEvent(n, i))
	},
	C.Event = function (t, e) {
		return this instanceof C.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? G: K) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || C.now(), void(this[C.expando] = !0)) : new C.Event(t, e)
	},
	C.Event.prototype = {
		isDefaultPrevented: K,
		isPropagationStopped: K,
		isImmediatePropagationStopped: K,
		preventDefault: function () {
			var t = this.originalEvent;
			this.isDefaultPrevented = G,
			t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function () {
			var t = this.originalEvent;
			this.isPropagationStopped = G,
			t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = G,
			t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
			this.stopPropagation()
		}
	},
	C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	},
	function (t, o) {
		C.event.special[t] = {
			delegateType: o,
			bindType: o,
			handle: function (t) {
				var e, i = t.relatedTarget,
				n = t.handleObj;
				return (!i || i !== this && !C.contains(this, i)) && (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = o),
				e
			}
		}
	}),
	v.submitBubbles || (C.event.special.submit = {
		setup: function () {
			return ! C.nodeName(this, "form") && void C.event.add(this, "click._submit keypress._submit", function (t) {
				var e = t.target,
				i = C.nodeName(e, "input") || C.nodeName(e, "button") ? e.form: void 0;
				i && !C._data(i, "submitBubbles") && (C.event.add(i, "submit._submit", function (t) {
					t._submit_bubble = !0
				}), C._data(i, "submitBubbles", !0))
			})
		},
		postDispatch: function (t) {
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && C.event.simulate("submit", this.parentNode, t, !0))
		},
		teardown: function () {
			return ! C.nodeName(this, "form") && void C.event.remove(this, "._submit")
		}
	}),
	v.changeBubbles || (C.event.special.change = {
		setup: function () {
			return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (C.event.add(this, "propertychange._change", function (t) {
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), C.event.add(this, "click._change", function (t) {
				this._just_changed && !t.isTrigger && (this._just_changed = !1),
				C.event.simulate("change", this, t, !0)
			})), !1) : void C.event.add(this, "beforeactivate._change", function (t) {
				var e = t.target;
				Q.test(e.nodeName) && !C._data(e, "changeBubbles") && (C.event.add(e, "change._change", function (t) { ! this.parentNode || t.isSimulated || t.isTrigger || C.event.simulate("change", this.parentNode, t, !0)
				}), C._data(e, "changeBubbles", !0))
			})
		},
		handle: function (t) {
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function () {
			return C.event.remove(this, "._change"),
			!Q.test(this.nodeName)
		}
	}),
	v.focusinBubbles || C.each({
		focus: "focusin",
		blur: "focusout"
	},
	function (i, n) {
		var o = function (t) {
			C.event.simulate(n, t.target, C.event.fix(t), !0)
		};
		C.event.special[n] = {
			setup: function () {
				var t = this.ownerDocument || this,
				e = C._data(t, n);
				e || t.addEventListener(i, o, !0),
				C._data(t, n, (e || 0) + 1)
			},
			teardown: function () {
				var t = this.ownerDocument || this,
				e = C._data(t, n) - 1;
				e ? C._data(t, n, e) : (t.removeEventListener(i, o, !0), C._removeData(t, n))
			}
		}
	}),
	C.fn.extend({
		on: function (t, e, i, n, o) {
			var s, r;
			if ("object" == typeof t) {
				for (s in "string" != typeof e && (i = i || e, e = void 0), t) this.on(s, e, i, t[s], o);
				return this
			}
			if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = K;
			else if (!n) return this;
			return 1 === o && (r = n, (n = function (t) {
				return C().off(t),
				r.apply(this, arguments)
			}).guid = r.guid || (r.guid = C.guid++)),
			this.each(function () {
				C.event.add(this, t, n, i, e)
			})
		},
		one: function (t, e, i, n) {
			return this.on(t, e, i, n, 1)
		},
		off: function (t, e, i) {
			var n, o;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj,
			C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace: n.origType, n.selector, n.handler),
			this;
			if ("object" != typeof t) return (!1 === e || "function" == typeof e) && (i = e, e = void 0),
			!1 === i && (i = K),
			this.each(function () {
				C.event.remove(this, t, i, e)
			});
			for (o in t) this.off(o, e, t[o]);
			return this
		},
		trigger: function (t, e) {
			return this.each(function () {
				C.event.trigger(t, e, this)
			})
		},
		triggerHandler: function (t, e) {
			var i = this[0];
			return i ? C.event.trigger(t, e, i, !0) : void 0
		}
	});
	var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	nt = / jQuery\d+="(?:null|\d+)"/g,
	ot = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
	st = /^\s+/,
	rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	at = /<([\w:]+)/,
	lt = /<tbody/i,
	ct = /<|&#?\w+;/,
	ut = /<(?:script|style|link)/i,
	ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
	dt = /^$|\/(?:java|ecma)script/i,
	pt = /^true\/(.*)/,
	ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	gt = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	mt = et(T).appendChild(T.createElement("div"));
	function vt(t, e) {
		var i, n, o = 0,
		s = typeof t.getElementsByTagName !== I ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== I ? t.querySelectorAll(e || "*") : void 0;
		if (!s) for (s = [], i = t.childNodes || t; null != (n = i[o]); o++) ! e || C.nodeName(n, e) ? s.push(n) : C.merge(s, vt(n, e));
		return void 0 === e || e && C.nodeName(t, e) ? C.merge([t], s) : s
	}
	function yt(t) {
		V.test(t.type) && (t.defaultChecked = t.checked)
	}
	function bt(t, e) {
		return C.nodeName(t, "table") && C.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}
	function wt(t) {
		return t.type = (null !== C.find.attr(t, "type")) + "/" + t.type,
		t
	}
	function xt(t) {
		var e = pt.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"),
		t
	}
	function _t(t, e) {
		for (var i, n = 0; null != (i = t[n]); n++) C._data(i, "globalEval", !e || C._data(e[n], "globalEval"))
	}
	function Ct(t, e) {
		if (1 === e.nodeType && C.hasData(t)) {
			var i, n, o, s = C._data(t),
			r = C._data(e, s),
			a = s.events;
			if (a) for (i in delete r.handle, r.events = {},
			a) for (n = 0, o = a[i].length; n < o; n++) C.event.add(e, i, a[i][n]);
			r.data && (r.data = C.extend({},
			r.data))
		}
	}
	function Tt(t, e) {
		var i, n, o;
		if (1 === e.nodeType) {
			if (i = e.nodeName.toLowerCase(), !v.noCloneEvent && e[C.expando]) {
				for (n in (o = C._data(e)).events) C.removeEvent(e, n, o.handle);
				e.removeAttribute(C.expando)
			}
			"script" === i && e.text !== t.text ? (wt(e).text = t.text, xt(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), v.html5Clone && t.innerHTML && !C.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && V.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
		}
	}
	gt.optgroup = gt.option,
	gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead,
	gt.th = gt.td,
	C.extend({
		clone: function (t, e, i) {
			var n, o, s, r, a, l = C.contains(t.ownerDocument, t);
			if (v.html5Clone || C.isXMLDoc(t) || !ot.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (mt.innerHTML = t.outerHTML, mt.removeChild(s = mt.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t))) for (n = vt(s), a = vt(t), r = 0; null != (o = a[r]); ++r) n[r] && Tt(o, n[r]);
			if (e) if (i) for (a = a || vt(t), n = n || vt(s), r = 0; null != (o = a[r]); r++) Ct(o, n[r]);
			else Ct(t, s);
			return 0 < (n = vt(s, "script")).length && _t(n, !l && vt(t, "script")),
			n = a = o = null,
			s
		},
		buildFragment: function (t, e, i, n) {
			for (var o, s, r, a, l, c, u, h = t.length, d = et(e), p = [], f = 0; f < h; f++) if ((s = t[f]) || 0 === s) if ("object" === C.type(s)) C.merge(p, s.nodeType ? [s] : s);
			else if (ct.test(s)) {
				for (a = a || d.appendChild(e.createElement("div")), l = (at.exec(s) || ["", ""])[1].toLowerCase(), u = gt[l] || gt._default, a.innerHTML = u[1] + s.replace(rt, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
				if (!v.leadingWhitespace && st.test(s) && p.push(e.createTextNode(st.exec(s)[0])), !v.tbody) for (o = (s = "table" !== l || lt.test(s) ? "<table>" !== u[1] || lt.test(s) ? 0 : a: a.firstChild) && s.childNodes.length; o--;) C.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
				for (C.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
				a = d.lastChild
			} else p.push(e.createTextNode(s));
			for (a && d.removeChild(a), v.appendChecked || C.grep(vt(p, "input"), yt), f = 0; s = p[f++];) if ((!n || -1 === C.inArray(s, n)) && (r = C.contains(s.ownerDocument, s), a = vt(d.appendChild(s), "script"), r && _t(a), i)) for (o = 0; s = a[o++];) dt.test(s.type || "") && i.push(s);
			return a = null,
			d
		},
		cleanData: function (t, e) {
			for (var i, n, o, s, r = 0, a = C.expando, l = C.cache, c = v.deleteExpando, u = C.event.special; null != (i = t[r]); r++) if ((e || C.acceptData(i)) && (s = (o = i[a]) && l[o])) {
				if (s.events) for (n in s.events) u[n] ? C.event.remove(i, n) : C.removeEvent(i, n, s.handle);
				l[o] && (delete l[o], c ? delete i[a] : typeof i.removeAttribute !== I ? i.removeAttribute(a) : i[a] = null, h.push(o))
			}
		}
	}),
	C.fn.extend({
		text: function (t) {
			return U(this, function (t) {
				return void 0 === t ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(t))
			},
			null, t, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || bt(this, t).appendChild(t)
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = bt(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function (t, e) {
			for (var i, n = t ? C.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || C.cleanData(vt(i)),
			i.parentNode && (e && C.contains(i.ownerDocument, i) && _t(vt(i, "script")), i.parentNode.removeChild(i));
			return this
		},
		empty: function () {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && C.cleanData(vt(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && C.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		},
		clone: function (t, e) {
			return t = null != t && t,
			e = null == e ? t: e,
			this.map(function () {
				return C.clone(this, t, e)
			})
		},
		html: function (t) {
			return U(this, function (t) {
				var e = this[0] || {},
				i = 0,
				n = this.length;
				if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(nt, "") : void 0;
				if (! ("string" != typeof t || ut.test(t) || !v.htmlSerialize && ot.test(t) || !v.leadingWhitespace && st.test(t) || gt[(at.exec(t) || ["", ""])[1].toLowerCase()])) {
					t = t.replace(rt, "<$1></$2>");
					try {
						for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (C.cleanData(vt(e, !1)), e.innerHTML = t);
						e = 0
					} catch(t) {}
				}
				e && this.empty().append(t)
			},
			null, t, arguments.length)
		},
		replaceWith: function () {
			var e = arguments[0];
			return this.domManip(arguments, function (t) {
				e = this.parentNode,
				C.cleanData(vt(this)),
				e && e.replaceChild(t, this)
			}),
			e && (e.length || e.nodeType) ? this: this.remove()
		},
		detach: function (t) {
			return this.remove(t, !0)
		},
		domManip: function (i, n) {
			i = g.apply([], i);
			var t, e, o, s, r, a, l = 0,
			c = this.length,
			u = this,
			h = c - 1,
			d = i[0],
			p = C.isFunction(d);
			if (p || 1 < c && "string" == typeof d && !v.checkClone && ht.test(d)) return this.each(function (t) {
				var e = u.eq(t);
				p && (i[0] = d.call(this, t, e.html())),
				e.domManip(i, n)
			});
			if (c && (t = (a = C.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild, 1 === a.childNodes.length && (a = t), t)) {
				for (o = (s = C.map(vt(a, "script"), wt)).length; l < c; l++) e = a,
				l !== h && (e = C.clone(e, !0, !0), o && C.merge(s, vt(e, "script"))),
				n.call(this[l], e, l);
				if (o) for (r = s[s.length - 1].ownerDocument, C.map(s, xt), l = 0; l < o; l++) e = s[l],
				dt.test(e.type || "") && !C._data(e, "globalEval") && C.contains(r, e) && (e.src ? C._evalUrl && C._evalUrl(e.src) : C.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ft, "")));
				a = t = null
			}
			return this
		}
	}),
	C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function (t, r) {
		C.fn[t] = function (t) {
			for (var e, i = 0, n = [], o = C(t), s = o.length - 1; i <= s; i++) e = i === s ? this: this.clone(!0),
			C(o[i])[r](e),
			a.apply(n, e.get());
			return this.pushStack(n)
		}
	});
	var Et, $t, kt = {};
	function St(t, e) {
		var i, n = C(e.createElement(t)).appendTo(e.body),
		o = f.getDefaultComputedStyle && (i = f.getDefaultComputedStyle(n[0])) ? i.display: C.css(n[0], "display");
		return n.detach(),
		o
	}
	function Nt(t) {
		var e = T,
		i = kt[t];
		return i || ("none" !== (i = St(t, e)) && i || ((e = ((Et = (Et || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || Et[0].contentDocument).document).write(), e.close(), i = St(t, e), Et.detach()), kt[t] = i),
		i
	}
	v.shrinkWrapBlocks = function () {
		return null != $t ? $t: ($t = !1, (e = T.getElementsByTagName("body")[0]) && e.style ? (t = T.createElement("div"), (i = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(i).appendChild(t), typeof t.style.zoom !== I && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(T.createElement("div")).style.width = "5px", $t = 3 !== t.offsetWidth), e.removeChild(i), $t) : void 0);
		var t, e, i
	};
	var Dt, At, jt = /^margin/,
	Ot = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
	Lt = /^(top|right|bottom|left)$/;
	function It(e, i) {
		return {
			get: function () {
				var t = e();
				if (null != t) return t ? void delete this.get: (this.get = i).apply(this, arguments)
			}
		}
	}
	f.getComputedStyle ? (Dt = function (t) {
		return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : f.getComputedStyle(t, null)
	},
	At = function (t, e, i) {
		var n, o, s, r, a = t.style;
		return r = (i = i || Dt(t)) ? i.getPropertyValue(e) || i[e] : void 0,
		i && ("" !== r || C.contains(t.ownerDocument, t) || (r = C.style(t, e)), Ot.test(r) && jt.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)),
		void 0 === r ? r: r + ""
	}) : T.documentElement.currentStyle && (Dt = function (t) {
		return t.currentStyle
	},
	At = function (t, e, i) {
		var n, o, s, r, a = t.style;
		return null == (r = (i = i || Dt(t)) ? i[e] : void 0) && a && a[e] && (r = a[e]),
		Ot.test(r) && !Lt.test(e) && (n = a.left, (s = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em": r, r = a.pixelLeft + "px", a.left = n, s && (o.left = s)),
		void 0 === r ? r: r + "" || "auto"
	}),
	function () {
		var t, e, i, o, s, r, a;
		if ((t = T.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = (i = t.getElementsByTagName("a")[0]) && i.style) {
			function n() {
				var t, e, i, n;
				(e = T.getElementsByTagName("body")[0]) && e.style && (t = T.createElement("div"), (i = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, a = !0, f.getComputedStyle && (o = "1%" !== (f.getComputedStyle(t, null) || {}).top, s = "4px" === (f.getComputedStyle(t, null) || {
					width: "4px"
				}).width, (n = t.appendChild(T.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", t.style.width = "1px", a = !parseFloat((f.getComputedStyle(n, null) || {}).marginRight), t.removeChild(n)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === n[0].offsetHeight) && (n[0].style.display = "", n[1].style.display = "none", r = 0 === n[0].offsetHeight), e.removeChild(i))
			}
			e.cssText = "float:left;opacity:.5",
			v.opacity = "0.5" === e.opacity,
			v.cssFloat = !!e.cssFloat,
			t.style.backgroundClip = "content-box",
			t.cloneNode(!0).style.backgroundClip = "",
			v.clearCloneStyle = "content-box" === t.style.backgroundClip,
			v.boxSizing = "" === e.boxSizing || "" === e.MozBoxSizing || "" === e.WebkitBoxSizing,
			C.extend(v, {
				reliableHiddenOffsets: function () {
					return null == r && n(),
					r
				},
				boxSizingReliable: function () {
					return null == s && n(),
					s
				},
				pixelPosition: function () {
					return null == o && n(),
					o
				},
				reliableMarginRight: function () {
					return null == a && n(),
					a
				}
			})
		}
	} (),
	C.swap = function (t, e, i, n) {
		var o, s, r = {};
		for (s in e) r[s] = t.style[s],
		t.style[s] = e[s];
		for (s in o = i.apply(t, n || []), e) t.style[s] = r[s];
		return o
	};
	var Ht = /alpha\([^)]*\)/i,
	zt = /opacity\s*=\s*([^)]*)/,
	Rt = /^(none|table(?!-c[ea]).+)/,
	Pt = new RegExp("^(" + F + ")(.*)$", "i"),
	Mt = new RegExp("^([+-])=(" + F + ")", "i"),
	qt = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	Ft = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	Wt = ["Webkit", "O", "Moz", "ms"];
	function Bt(t, e) {
		if (e in t) return e;
		for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = Wt.length; o--;) if ((e = Wt[o] + i) in t) return e;
		return n
	}
	function Ut(t, e) {
		for (var i, n, o, s = [], r = 0, a = t.length; r < a; r++)(n = t[r]).style && (s[r] = C._data(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && B(n) && (s[r] = C._data(n, "olddisplay", Nt(n.nodeName)))) : (o = B(n), (i && "none" !== i || !o) && C._data(n, "olddisplay", o ? i: C.css(n, "display"))));
		for (r = 0; r < a; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "": "none"));
		return t
	}
	function Vt(t, e, i) {
		var n = Pt.exec(e);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
	}
	function Qt(t, e, i, n, o) {
		for (var s = i === (n ? "border": "content") ? 4 : "width" === e ? 1 : 0, r = 0; s < 4; s += 2)"margin" === i && (r += C.css(t, i + W[s], !0, o)),
		n ? ("content" === i && (r -= C.css(t, "padding" + W[s], !0, o)), "margin" !== i && (r -= C.css(t, "border" + W[s] + "Width", !0, o))) : (r += C.css(t, "padding" + W[s], !0, o), "padding" !== i && (r += C.css(t, "border" + W[s] + "Width", !0, o)));
		return r
	}
	function Xt(t, e, i) {
		var n = !0,
		o = "width" === e ? t.offsetWidth: t.offsetHeight,
		s = Dt(t),
		r = v.boxSizing && "border-box" === C.css(t, "boxSizing", !1, s);
		if (o <= 0 || null == o) {
			if (((o = At(t, e, s)) < 0 || null == o) && (o = t.style[e]), Ot.test(o)) return o;
			n = r && (v.boxSizingReliable() || o === t.style[e]),
			o = parseFloat(o) || 0
		}
		return o + Qt(t, e, i || (r ? "border": "content"), n, s) + "px"
	}
	function Jt(t, e, i, n, o) {
		return new Jt.prototype.init(t, e, i, n, o)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var i = At(t, "opacity");
						return "" === i ? "1": i
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: v.cssFloat ? "cssFloat": "styleFloat"
		},
		style: function (t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, s, r, a = C.camelCase(e),
				l = t.style;
				if (e = C.cssProps[a] || (C.cssProps[a] = Bt(l, a)), r = C.cssHooks[e] || C.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o: l[e];
				if ("string" === (s = typeof i) && (o = Mt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(C.css(t, e)), s = "number"), null != i && i == i && ("number" !== s || C.cssNumber[a] || (i += "px"), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
					l[e] = i
				} catch(t) {}
			}
		},
		css: function (t, e, i, n) {
			var o, s, r, a = C.camelCase(e);
			return e = C.cssProps[a] || (C.cssProps[a] = Bt(t.style, a)),
			(r = C.cssHooks[e] || C.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)),
			void 0 === s && (s = At(t, e, n)),
			"normal" === s && e in Ft && (s = Ft[e]),
			"" === i || i ? (o = parseFloat(s), !0 === i || C.isNumeric(o) ? o || 0 : s) : s
		}
	}),
	C.each(["height", "width"], function (t, o) {
		C.cssHooks[o] = {
			get: function (t, e, i) {
				return e ? Rt.test(C.css(t, "display")) && 0 === t.offsetWidth ? C.swap(t, qt, function () {
					return Xt(t, o, i)
				}) : Xt(t, o, i) : void 0
			},
			set: function (t, e, i) {
				var n = i && Dt(t);
				return Vt(0, e, i ? Qt(t, o, i, v.boxSizing && "border-box" === C.css(t, "boxSizing", !1, n), n) : 0)
			}
		}
	}),
	v.opacity || (C.cssHooks.opacity = {
		get: function (t, e) {
			return zt.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
		},
		set: function (t, e) {
			var i = t.style,
			n = t.currentStyle,
			o = C.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
			s = n && n.filter || i.filter || "";
			((i.zoom = 1) <= e || "" === e) && "" === C.trim(s.replace(Ht, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = Ht.test(s) ? s.replace(Ht, o) : s + " " + o)
		}
	}),
	C.cssHooks.marginRight = It(v.reliableMarginRight, function (t, e) {
		return e ? C.swap(t, {
			display: "inline-block"
		},
		At, [t, "marginRight"]) : void 0
	}),
	C.each({
		margin: "",
		padding: "",
		border: "Width"
	},
	function (o, s) {
		C.cssHooks[o + s] = {
			expand: function (t) {
				for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[o + W[e] + s] = n[e] || n[e - 2] || n[0];
				return i
			}
		},
		jt.test(o) || (C.cssHooks[o + s].set = Vt)
	}),
	C.fn.extend({
		css: function (t, e) {
			return U(this, function (t, e, i) {
				var n, o, s = {},
				r = 0;
				if (C.isArray(e)) {
					for (n = Dt(t), o = e.length; r < o; r++) s[e[r]] = C.css(t, e[r], !1, n);
					return s
				}
				return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
			},
			t, e, 1 < arguments.length)
		},
		show: function () {
			return Ut(this, !0)
		},
		hide: function () {
			return Ut(this)
		},
		toggle: function (t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
				B(this) ? C(this).show() : C(this).hide()
			})
		}
	}),
	((C.Tween = Jt).prototype = {
		constructor: Jt,
		init: function (t, e, i, n, o, s) {
			this.elem = t,
			this.prop = i,
			this.easing = o || "swing",
			this.options = e,
			this.start = this.now = this.cur(),
			this.end = n,
			this.unit = s || (C.cssNumber[i] ? "": "px")
		},
		cur: function () {
			var t = Jt.propHooks[this.prop];
			return t && t.get ? t.get(this) : Jt.propHooks._default.get(this)
		},
		run: function (t) {
			var e, i = Jt.propHooks[this.prop];
			return this.pos = e = this.options.duration ? C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
			this.now = (this.end - this.start) * e + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			i && i.set ? i.set(this) : Jt.propHooks._default.set(this),
			this
		}
	}).init.prototype = Jt.prototype,
	(Jt.propHooks = {
		_default: {
			get: function (t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e: 0 : t.elem[t.prop]
			},
			set: function (t) {
				C.fx.step[t.prop] ? C.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[C.cssProps[t.prop]] || C.cssHooks[t.prop]) ? C.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}).scrollTop = Jt.propHooks.scrollLeft = {
		set: function (t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	},
	C.easing = {
		linear: function (t) {
			return t
		},
		swing: function (t) {
			return.5 - Math.cos(t * Math.PI) / 2
		}
	},
	C.fx = Jt.prototype.init,
	C.fx.step = {};
	var Yt, Zt, Gt, Kt, te, ee, ie, ne = /^(?:toggle|show|hide)$/,
	oe = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
	se = /queueHooks$/,
	re = [function (e, t, i) {
		var n, o, s, r, a, l, c, u = this,
		h = {},
		d = e.style,
		p = e.nodeType && B(e),
		f = C._data(e, "fxshow");
		for (n in i.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
			a.unqueued || l()
		}), a.unqueued++, u.always(function () {
			u.always(function () {
				a.unqueued--,
				C.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], c = C.css(e, "display"), "inline" === ("none" === c ? C._data(e, "olddisplay") || Nt(e.nodeName) : c) && "none" === C.css(e, "float") && (v.inlineBlockNeedsLayout && "inline" !== Nt(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), i.overflow && (d.overflow = "hidden", v.shrinkWrapBlocks() || u.always(function () {
			d.overflow = i.overflow[0],
			d.overflowX = i.overflow[1],
			d.overflowY = i.overflow[2]
		})), t) if (o = t[n], ne.exec(o)) {
			if (delete t[n], s = s || "toggle" === o, o === (p ? "hide": "show")) {
				if ("show" !== o || !f || void 0 === f[n]) continue;
				p = !0
			}
			h[n] = f && f[n] || C.style(e, n)
		} else c = void 0;
		if (C.isEmptyObject(h))"inline" === ("none" === c ? Nt(e.nodeName) : c) && (d.display = c);
		else for (n in f ? "hidden" in f && (p = f.hidden) : f = C._data(e, "fxshow", {}), s && (f.hidden = !p), p ? C(e).show() : u.done(function () {
			C(e).hide()
		}), u.done(function () {
			var t;
			for (t in C._removeData(e, "fxshow"), h) C.style(e, t, h[t])
		}), h) r = ue(p ? f[n] : 0, n, u),
		n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
	}],
	ae = {
		"*": [function (t, e) {
			var i = this.createTween(t, e),
			n = i.cur(),
			o = oe.exec(e),
			s = o && o[3] || (C.cssNumber[t] ? "": "px"),
			r = (C.cssNumber[t] || "px" !== s && +n) && oe.exec(C.css(i.elem, t)),
			a = 1,
			l = 20;
			if (r && r[3] !== s) for (s = s || r[3], o = o || [], r = +n || 1; r /= a = a || ".5", C.style(i.elem, t, r + s), a !== (a = i.cur() / n) && 1 !== a && --l;);
			return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]),
			i
		}]
	};
	function le() {
		return setTimeout(function () {
			Yt = void 0
		}),
		Yt = C.now()
	}
	function ce(t, e) {
		var i, n = {
			height: t
		},
		o = 0;
		for (e = e ? 1 : 0; o < 4; o += 2 - e) n["margin" + (i = W[o])] = n["padding" + i] = t;
		return e && (n.opacity = n.width = t),
		n
	}
	function ue(t, e, i) {
		for (var n, o = (ae[e] || []).concat(ae["*"]), s = 0, r = o.length; s < r; s++) if (n = o[s].call(i, e, t)) return n
	}
	function he(s, t, e) {
		var i, r, n = 0,
		o = re.length,
		a = C.Deferred().always(function () {
			delete l.elem
		}),
		l = function () {
			if (r) return ! 1;
			for (var t = Yt || le(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
			return a.notifyWith(s, [c, i, e]),
			i < 1 && o ? e: (a.resolveWith(s, [c]), !1)
		},
		c = a.promise({
			elem: s,
			props: C.extend({},
			t),
			opts: C.extend(!0, {
				specialEasing: {}
			},
			e),
			originalProperties: t,
			originalOptions: e,
			startTime: Yt || le(),
			duration: e.duration,
			tweens: [],
			createTween: function (t, e) {
				var i = C.Tween(s, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
				return c.tweens.push(i),
				i
			},
			stop: function (t) {
				var e = 0,
				i = t ? c.tweens.length: 0;
				if (r) return this;
				for (r = !0; e < i; e++) c.tweens[e].run(1);
				return t ? a.resolveWith(s, [c, t]) : a.rejectWith(s, [c, t]),
				this
			}
		}),
		u = c.props;
		for (function (t, e) {
			var i, n, o, s, r;
			for (i in t) if (o = e[n = C.camelCase(i)], s = t[i], C.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = C.cssHooks[n]) && "expand" in r) for (i in s = r.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = o);
			else e[n] = o
		} (u, c.opts.specialEasing); n < o; n++) if (i = re[n].call(c, s, u, c.opts)) return i;
		return C.map(u, ue, c),
		C.isFunction(c.opts.start) && c.opts.start.call(s, c),
		C.fx.timer(C.extend(l, {
			elem: s,
			anim: c,
			queue: c.opts.queue
		})),
		c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	C.Animation = C.extend(he, {
		tweener: function (t, e) {
			for (var i, n = 0, o = (t = C.isFunction(t) ? (e = t, ["*"]) : t.split(" ")).length; n < o; n++) i = t[n],
			ae[i] = ae[i] || [],
			ae[i].unshift(e)
		},
		prefilter: function (t, e) {
			e ? re.unshift(t) : re.push(t)
		}
	}),
	C.speed = function (t, e, i) {
		var n = t && "object" == typeof t ? C.extend({},
		t) : {
			complete: i || !i && e || C.isFunction(t) && t,
			duration: t,
			easing: i && e || e && !C.isFunction(e) && e
		};
		return n.duration = C.fx.off ? 0 : "number" == typeof n.duration ? n.duration: n.duration in C.fx.speeds ? C.fx.speeds[n.duration] : C.fx.speeds._default,
		(null == n.queue || !0 === n.queue) && (n.queue = "fx"),
		n.old = n.complete,
		n.complete = function () {
			C.isFunction(n.old) && n.old.call(this),
			n.queue && C.dequeue(this, n.queue)
		},
		n
	},
	C.fn.extend({
		fadeTo: function (t, e, i, n) {
			return this.filter(B).css("opacity", 0).show().end().animate({
				opacity: e
			},
			t, i, n)
		},
		animate: function (e, t, i, n) {
			var o = C.isEmptyObject(e),
			s = C.speed(t, i, n),
			r = function () {
				var t = he(this, C.extend({},
				e), s);
				(o || C._data(this, "finish")) && t.stop(!0)
			};
			return r.finish = r,
			o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
		},
		stop: function (o, t, s) {
			var r = function (t) {
				var e = t.stop;
				delete t.stop,
				e(s)
			};
			return "string" != typeof o && (s = t, t = o, o = void 0),
			t && !1 !== o && this.queue(o || "fx", []),
			this.each(function () {
				var t = !0,
				e = null != o && o + "queueHooks",
				i = C.timers,
				n = C._data(this);
				if (e) n[e] && n[e].stop && r(n[e]);
				else for (e in n) n[e] && n[e].stop && se.test(e) && r(n[e]);
				for (e = i.length; e--;) i[e].elem !== this || null != o && i[e].queue !== o || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
				(t || !s) && C.dequeue(this, o)
			})
		},
		finish: function (r) {
			return ! 1 !== r && (r = r || "fx"),
			this.each(function () {
				var t, e = C._data(this),
				i = e[r + "queue"],
				n = e[r + "queueHooks"],
				o = C.timers,
				s = i ? i.length: 0;
				for (e.finish = !0, C.queue(this, r, []), n && n.stop && n.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === r && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete e.finish
			})
		}
	}),
	C.each(["toggle", "show", "hide"], function (t, n) {
		var o = C.fn[n];
		C.fn[n] = function (t, e, i) {
			return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(ce(n, !0), t, e, i)
		}
	}),
	C.each({
		slideDown: ce("show"),
		slideUp: ce("hide"),
		slideToggle: ce("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	},
	function (t, n) {
		C.fn[t] = function (t, e, i) {
			return this.animate(n, t, e, i)
		}
	}),
	C.timers = [],
	C.fx.tick = function () {
		var t, e = C.timers,
		i = 0;
		for (Yt = C.now(); i < e.length; i++)(t = e[i])() || e[i] !== t || e.splice(i--, 1);
		e.length || C.fx.stop(),
		Yt = void 0
	},
	C.fx.timer = function (t) {
		C.timers.push(t),
		t() ? C.fx.start() : C.timers.pop()
	},
	C.fx.interval = 13,
	C.fx.start = function () {
		Zt || (Zt = setInterval(C.fx.tick, C.fx.interval))
	},
	C.fx.stop = function () {
		clearInterval(Zt),
		Zt = null
	},
	C.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	},
	C.fn.delay = function (n, t) {
		return n = C.fx && C.fx.speeds[n] || n,
		t = t || "fx",
		this.queue(t, function (t, e) {
			var i = setTimeout(t, n);
			e.stop = function () {
				clearTimeout(i)
			}
		})
	},
	(Kt = T.createElement("div")).setAttribute("className", "t"),
	Kt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
	ee = Kt.getElementsByTagName("a")[0],
	ie = (te = T.createElement("select")).appendChild(T.createElement("option")),
	Gt = Kt.getElementsByTagName("input")[0],
	ee.style.cssText = "top:1px",
	v.getSetAttribute = "t" !== Kt.className,
	v.style = /top/.test(ee.getAttribute("style")),
	v.hrefNormalized = "/a" === ee.getAttribute("href"),
	v.checkOn = !!Gt.value,
	v.optSelected = ie.selected,
	v.enctype = !!T.createElement("form").enctype,
	te.disabled = !0,
	v.optDisabled = !ie.disabled,
	(Gt = T.createElement("input")).setAttribute("value", ""),
	v.input = "" === Gt.getAttribute("value"),
	Gt.value = "t",
	Gt.setAttribute("type", "radio"),
	v.radioValue = "t" === Gt.value;
	var de = /\r/g;
	C.fn.extend({
		val: function (i) {
			var n, t, o, e = this[0];
			return arguments.length ? (o = C.isFunction(i), this.each(function (t) {
				var e;
				1 === this.nodeType && (null == (e = o ? i.call(this, t, C(this).val()) : i) ? e = "": "number" == typeof e ? e += "": C.isArray(e) && (e = C.map(e, function (t) {
					return null == t ? "": t + ""
				})), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
			})) : e ? (n = C.valHooks[e.type] || C.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t: "string" == typeof(t = e.value) ? t.replace(de, "") : null == t ? "": t: void 0
		}
	}),
	C.extend({
		valHooks: {
			option: {
				get: function (t) {
					var e = C.find.attr(t, "value");
					return null != e ? e: C.trim(C.text(t))
				}
			},
			select: {
				get: function (t) {
					for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || o < 0, r = s ? null: [], a = s ? o + 1 : n.length, l = o < 0 ? a: s ? o: 0; l < a; l++) if (! (! (i = n[l]).selected && l !== o || (v.optDisabled ? i.disabled: null !== i.getAttribute("disabled")) || i.parentNode.disabled && C.nodeName(i.parentNode, "optgroup"))) {
						if (e = C(i).val(), s) return e;
						r.push(e)
					}
					return r
				},
				set: function (t, e) {
					for (var i, n, o = t.options, s = C.makeArray(e), r = o.length; r--;) if (n = o[r], 0 <= C.inArray(C.valHooks.option.get(n), s)) try {
						n.selected = i = !0
					} catch(t) {
						n.scrollHeight
					} else n.selected = !1;
					return i || (t.selectedIndex = -1),
					o
				}
			}
		}
	}),
	C.each(["radio", "checkbox"], function () {
		C.valHooks[this] = {
			set: function (t, e) {
				return C.isArray(e) ? t.checked = 0 <= C.inArray(C(t).val(), e) : void 0
			}
		},
		v.checkOn || (C.valHooks[this].get = function (t) {
			return null === t.getAttribute("value") ? "on": t.value
		})
	});
	var pe, fe, ge = C.expr.attrHandle,
	me = /^(?:checked|selected)$/i,
	ve = v.getSetAttribute,
	ye = v.input;
	C.fn.extend({
		attr: function (t, e) {
			return U(this, C.attr, t, e, 1 < arguments.length)
		},
		removeAttr: function (t) {
			return this.each(function () {
				C.removeAttr(this, t)
			})
		}
	}),
	C.extend({
		attr: function (t, e, i) {
			var n, o, s = t.nodeType;
			if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === I ? C.prop(t, e, i) : (1 === s && C.isXMLDoc(t) || (e = e.toLowerCase(), n = C.attrHooks[e] || (C.expr.match.bool.test(e) ? fe: pe)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o: null == (o = C.find.attr(t, e)) ? void 0 : o: null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o: (t.setAttribute(e, i + ""), i) : void C.removeAttr(t, e))
		},
		removeAttr: function (t, e) {
			var i, n, o = 0,
			s = e && e.match(D);
			if (s && 1 === t.nodeType) for (; i = s[o++];) n = C.propFix[i] || i,
			C.expr.match.bool.test(i) ? ye && ve || !me.test(i) ? t[n] = !1 : t[C.camelCase("default-" + i)] = t[n] = !1 : C.attr(t, i, ""),
			t.removeAttribute(ve ? i: n)
		},
		attrHooks: {
			type: {
				set: function (t, e) {
					if (!v.radioValue && "radio" === e && C.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e),
						i && (t.value = i),
						e
					}
				}
			}
		}
	}),
	fe = {
		set: function (t, e, i) {
			return ! 1 === e ? C.removeAttr(t, i) : ye && ve || !me.test(i) ? t.setAttribute(!ve && C.propFix[i] || i, i) : t[C.camelCase("default-" + i)] = t[i] = !0,
			i
		}
	},
	C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
		var s = ge[e] || C.find.attr;
		ge[e] = ye && ve || !me.test(e) ?
		function (t, e, i) {
			var n, o;
			return i || (o = ge[e], ge[e] = n, n = null != s(t, e, i) ? e.toLowerCase() : null, ge[e] = o),
			n
		}: function (t, e, i) {
			return i ? void 0 : t[C.camelCase("default-" + e)] ? e.toLowerCase() : null
		}
	}),
	ye && ve || (C.attrHooks.value = {
		set: function (t, e, i) {
			return C.nodeName(t, "input") ? void(t.defaultValue = e) : pe && pe.set(t, e, i)
		}
	}),
	ve || (pe = {
		set: function (t, e, i) {
			var n = t.getAttributeNode(i);
			return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
			n.value = e += "",
			"value" === i || e === t.getAttribute(i) ? e: void 0
		}
	},
	ge.id = ge.name = ge.coords = function (t, e, i) {
		var n;
		return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value: null
	},
	C.valHooks.button = {
		get: function (t, e) {
			var i = t.getAttributeNode(e);
			return i && i.specified ? i.value: void 0
		},
		set: pe.set
	},
	C.attrHooks.contenteditable = {
		set: function (t, e, i) {
			pe.set(t, "" !== e && e, i)
		}
	},
	C.each(["width", "height"], function (t, i) {
		C.attrHooks[i] = {
			set: function (t, e) {
				return "" === e ? (t.setAttribute(i, "auto"), e) : void 0
			}
		}
	})),
	v.style || (C.attrHooks.style = {
		get: function (t) {
			return t.style.cssText || void 0
		},
		set: function (t, e) {
			return t.style.cssText = e + ""
		}
	});
	var be = /^(?:input|select|textarea|button|object)$/i,
	we = /^(?:a|area)$/i;
	C.fn.extend({
		prop: function (t, e) {
			return U(this, C.prop, t, e, 1 < arguments.length)
		},
		removeProp: function (t) {
			return t = C.propFix[t] || t,
			this.each(function () {
				try {
					this[t] = void 0,
					delete this[t]
				} catch(t) {}
			})
		}
	}),
	C.extend({
		propFix: {
			for: "htmlFor",
			class: "className"
		},
		prop: function (t, e, i) {
			var n, o, s = t.nodeType;
			if (t && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !C.isXMLDoc(t)) && (e = C.propFix[e] || e, o = C.propHooks[e]),
			void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n: t[e] = i: o && "get" in o && null !== (n = o.get(t, e)) ? n: t[e]
		},
		propHooks: {
			tabIndex: {
				get: function (t) {
					var e = C.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : be.test(t.nodeName) || we.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}
	}),
	v.hrefNormalized || C.each(["href", "src"], function (t, e) {
		C.propHooks[e] = {
			get: function (t) {
				return t.getAttribute(e, 4)
			}
		}
	}),
	v.optSelected || (C.propHooks.selected = {
		get: function (t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
			null
		}
	}),
	C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		C.propFix[this.toLowerCase()] = this
	}),
	v.enctype || (C.propFix.enctype = "encoding");
	var xe = /[\t\r\n\f]/g;
	C.fn.extend({
		addClass: function (e) {
			var t, i, n, o, s, r, a = 0,
			l = this.length,
			c = "string" == typeof e && e;
			if (C.isFunction(e)) return this.each(function (t) {
				C(this).addClass(e.call(this, t, this.className))
			});
			if (c) for (t = (e || "").match(D) || []; a < l; a++) if (n = 1 === (i = this[a]).nodeType && (i.className ? (" " + i.className + " ").replace(xe, " ") : " ")) {
				for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
				r = C.trim(n),
				i.className !== r && (i.className = r)
			}
			return this
		},
		removeClass: function (e) {
			var t, i, n, o, s, r, a = 0,
			l = this.length,
			c = 0 === arguments.length || "string" == typeof e && e;
			if (C.isFunction(e)) return this.each(function (t) {
				C(this).removeClass(e.call(this, t, this.className))
			});
			if (c) for (t = (e || "").match(D) || []; a < l; a++) if (n = 1 === (i = this[a]).nodeType && (i.className ? (" " + i.className + " ").replace(xe, " ") : "")) {
				for (s = 0; o = t[s++];) for (; 0 <= n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
				r = e ? C.trim(n) : "",
				i.className !== r && (i.className = r)
			}
			return this
		},
		toggleClass: function (o, e) {
			var s = typeof o;
			return "boolean" == typeof e && "string" === s ? e ? this.addClass(o) : this.removeClass(o) : this.each(C.isFunction(o) ?
			function (t) {
				C(this).toggleClass(o.call(this, t, this.className, e), e)
			}: function () {
				if ("string" === s) for (var t, e = 0, i = C(this), n = o.match(D) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else(s === I || "boolean" === s) && (this.className && C._data(this, "__className__", this.className), this.className = this.className || !1 === o ? "": C._data(this, "__className__") || "")
			})
		},
		hasClass: function (t) {
			for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++) if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(xe, " ").indexOf(e)) return ! 0;
			return ! 1
		}
	}),
	C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, i) {
		C.fn[i] = function (t, e) {
			return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
		}
	}),
	C.fn.extend({
		hover: function (t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function (t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function (t, e) {
			return this.off(t, null, e)
		},
		delegate: function (t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function (t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
		}
	});
	var _e = C.now(),
	Ce = /\?/,
	Te = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	C.parseJSON = function (t) {
		if (f.JSON && f.JSON.parse) return f.JSON.parse(t + "");
		var o, s = null,
		e = C.trim(t + "");
		return e && !C.trim(e.replace(Te, function (t, e, i, n) {
			return o && e && (s = 0),
			0 === s ? t: (o = i || e, s += !n - !i, "")
		})) ? Function("return " + e)() : C.error("Invalid JSON: " + t)
	},
	C.parseXML = function (t) {
		var e;
		if (!t || "string" != typeof t) return null;
		try {
			f.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
		} catch(t) {
			e = void 0
		}
		return e && e.documentElement && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t),
		e
	};
	var Ee, $e, ke = /#.*$/,
	Se = /([?&])_=[^&]*/,
	Ne = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
	De = /^(?:GET|HEAD)$/,
	Ae = /^\/\//,
	je = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	Oe = {},
	Le = {},
	Ie = "*/".concat("*");
	try {
		$e = location.href
	} catch(t) { ($e = T.createElement("a")).href = "",
		$e = $e.href
	}
	function He(s) {
		return function (t, e) {
			"string" != typeof t && (e = t, t = "*");
			var i, n = 0,
			o = t.toLowerCase().match(D) || [];
			if (C.isFunction(e)) for (; i = o[n++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
		}
	}
	function ze(e, o, s, r) {
		var a = {},
		l = e === Le;
		function c(t) {
			var n;
			return a[t] = !0,
			C.each(e[t] || [], function (t, e) {
				var i = e(o, s, r);
				return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
			}),
			n
		}
		return c(o.dataTypes[0]) || !a["*"] && c("*")
	}
	function Re(t, e) {
		var i, n, o = C.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((o[n] ? t: i || (i = {}))[n] = e[n]);
		return i && C.extend(!0, t, i),
		t
	}
	Ee = je.exec($e.toLowerCase()) || [],
	C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: $e,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ee[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ie,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": C.parseJSON,
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (t, e) {
			return e ? Re(Re(t, C.ajaxSettings), e) : Re(C.ajaxSettings, t)
		},
		ajaxPrefilter: He(Oe),
		ajaxTransport: He(Le),
		ajax: function (t, e) {
			"object" == typeof t && (e = t, t = void 0),
			e = e || {};
			var i, n, u, h, d, p, f, o, g = C.ajaxSetup({},
			e),
			m = g.context || g,
			v = g.context && (m.nodeType || m.jquery) ? C(m) : C.event,
			y = C.Deferred(),
			b = C.Callbacks("once memory"),
			w = g.statusCode || {},
			s = {},
			r = {},
			x = 0,
			a = "canceled",
			_ = {
				readyState: 0,
				getResponseHeader: function (t) {
					var e;
					if (2 === x) {
						if (!o) for (o = {}; e = Ne.exec(h);) o[e[1].toLowerCase()] = e[2];
						e = o[t.toLowerCase()]
					}
					return null == e ? null: e
				},
				getAllResponseHeaders: function () {
					return 2 === x ? h: null
				},
				setRequestHeader: function (t, e) {
					var i = t.toLowerCase();
					return x || (t = r[i] = r[i] || t, s[t] = e),
					this
				},
				overrideMimeType: function (t) {
					return x || (g.mimeType = t),
					this
				},
				statusCode: function (t) {
					var e;
					if (t) if (x < 2) for (e in t) w[e] = [w[e], t[e]];
					else _.always(t[_.status]);
					return this
				},
				abort: function (t) {
					var e = t || a;
					return f && f.abort(e),
					l(0, e),
					this
				}
			};
			if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, g.url = ((t || g.url || $e) + "").replace(ke, "").replace(Ae, Ee[1] + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = C.trim(g.dataType || "*").toLowerCase().match(D) || [""], null == g.crossDomain && (i = je.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === Ee[1] && i[2] === Ee[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Ee[3] || ("http:" === Ee[1] ? "80": "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)), ze(Oe, g, e, _), 2 === x) return _;
			for (n in (p = C.event && g.global) && 0 == C.active++&&C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !De.test(g.type), u = g.url, g.hasContent || (g.data && (u = g.url += (Ce.test(u) ? "&": "?") + g.data, delete g.data), !1 === g.cache && (g.url = Se.test(u) ? u.replace(Se, "$1_=" + _e++) : u + (Ce.test(u) ? "&": "?") + "_=" + _e++)), g.ifModified && (C.lastModified[u] && _.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && _.setRequestHeader("If-None-Match", C.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && _.setRequestHeader("Content-Type", g.contentType), _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ie + "; q=0.01": "") : g.accepts["*"]), g.headers) _.setRequestHeader(n, g.headers[n]);
			if (g.beforeSend && (!1 === g.beforeSend.call(m, _, g) || 2 === x)) return _.abort();
			for (n in a = "abort", {
				success: 1,
				error: 1,
				complete: 1
			}) _[n](g[n]);
			if (f = ze(Le, g, e, _)) {
				_.readyState = 1,
				p && v.trigger("ajaxSend", [_, g]),
				g.async && 0 < g.timeout && (d = setTimeout(function () {
					_.abort("timeout")
				},
				g.timeout));
				try {
					x = 1,
					f.send(s, l)
				} catch(t) {
					if (! (x < 2)) throw t;
					l( - 1, t)
				}
			} else l( - 1, "No Transport");
			function l(t, e, i, n) {
				var o, s, r, a, l, c = e;
				2 !== x && (x = 2, d && clearTimeout(d), f = void 0, h = n || "", _.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, i && (a = function (t, e, i) {
					for (var n, o, s, r, a = t.contents, l = t.dataTypes;
					"*" === l[0];) l.shift(),
					void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
					if (o) for (r in a) if (a[r] && a[r].test(o)) {
						l.unshift(r);
						break
					}
					if (l[0] in i) s = l[0];
					else {
						for (r in i) {
							if (!l[0] || t.converters[r + " " + l[0]]) {
								s = r;
								break
							}
							n || (n = r)
						}
						s = s || n
					}
					return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
				} (g, _, i)), a = function (t, e, i, n) {
					var o, s, r, a, l, c = {},
					u = t.dataTypes.slice();
					if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
					for (s = u.shift(); s;) if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift()) if ("*" === s) s = l;
					else if ("*" !== l && l !== s) {
						if (! (r = c[l + " " + s] || c["* " + s])) for (o in c) if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) { ! 0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], u.unshift(a[1]));
							break
						}
						if (!0 !== r) if (r && t.throws) e = r(e);
						else try {
							e = r(e)
						} catch(t) {
							return {
								state: "parsererror",
								error: r ? t: "No conversion from " + l + " to " + s
							}
						}
					}
					return {
						state: "success",
						data: e
					}
				} (g, a, _, o), o ? (g.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (C.lastModified[u] = l), (l = _.getResponseHeader("etag")) && (C.etag[u] = l)), 204 === t || "HEAD" === g.type ? c = "nocontent": 304 === t ? c = "notmodified": (c = a.state, s = a.data, o = !(r = a.error))) : (r = c, (t || !c) && (c = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || c) + "", o ? y.resolveWith(m, [s, c, _]) : y.rejectWith(m, [_, c, r]), _.statusCode(w), w = void 0, p && v.trigger(o ? "ajaxSuccess": "ajaxError", [_, g, o ? s: r]), b.fireWith(m, [_, c]), p && (v.trigger("ajaxComplete", [_, g]), --C.active || C.event.trigger("ajaxStop")))
			}
			return _
		},
		getJSON: function (t, e, i) {
			return C.get(t, e, i, "json")
		},
		getScript: function (t, e) {
			return C.get(t, void 0, e, "script")
		}
	}),
	C.each(["get", "post"], function (t, o) {
		C[o] = function (t, e, i, n) {
			return C.isFunction(e) && (n = n || i, i = e, e = void 0),
			C.ajax({
				url: t,
				type: o,
				dataType: n,
				data: e,
				success: i
			})
		}
	}),
	C._evalUrl = function (t) {
		return C.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	},
	C.fn.extend({
		wrapAll: function (e) {
			if (C.isFunction(e)) return this.each(function (t) {
				C(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = C(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]),
				t.map(function () {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function (i) {
			return this.each(C.isFunction(i) ?
			function (t) {
				C(this).wrapInner(i.call(this, t))
			}: function () {
				var t = C(this),
				e = t.contents();
				e.length ? e.wrapAll(i) : t.append(i)
			})
		},
		wrap: function (e) {
			var i = C.isFunction(e);
			return this.each(function (t) {
				C(this).wrapAll(i ? e.call(this, t) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
			}).end()
		}
	}),
	C.expr.filters.hidden = function (t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (t.style && t.style.display || C.css(t, "display"))
	},
	C.expr.filters.visible = function (t) {
		return ! C.expr.filters.hidden(t)
	};
	var Pe = / /g,
	Me = /\[\]$/,
	qe = /\r?\n/g,
	Fe = /^(?:submit|button|image|reset|file)$/i,
	We = /^(?:input|select|textarea|keygen)/i;
	function Be(i, t, n, o) {
		var e;
		if (C.isArray(t)) C.each(t, function (t, e) {
			n || Me.test(i) ? o(i, e) : Be(i + "[" + ("object" == typeof e ? t: "") + "]", e, n, o)
		});
		else if (n || "object" !== C.type(t)) o(i, t);
		else for (e in t) Be(i + "[" + e + "]", t[e], n, o)
	}
	C.param = function (t, e) {
		var i, n = [],
		o = function (t, e) {
			e = C.isFunction(e) ? e() : null == e ? "": e,
			n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		};
		if (void 0 === e && (e = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function () {
			o(this.name, this.value)
		});
		else for (i in t) Be(i, t[i], e, o);
		return n.join("&").replace(Pe, "+")
	},
	C.fn.extend({
		serialize: function () {
			return C.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var t = C.prop(this, "elements");
				return t ? C.makeArray(t) : this
			}).filter(function () {
				var t = this.type;
				return this.name && !C(this).is(":disabled") && We.test(this.nodeName) && !Fe.test(t) && (this.checked || !V.test(t))
			}).map(function (t, e) {
				var i = C(this).val();
				return null == i ? null: C.isArray(i) ? C.map(i, function (t) {
					return {
						name: e.name,
						value: t.replace(qe, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(qe, "\r\n")
				}
			}).get()
		}
	}),
	C.ajaxSettings.xhr = void 0 !== f.ActiveXObject ?
	function () {
		return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Xe() ||
		function () {
			try {
				return new f.ActiveXObject("Microsoft.XMLHTTP")
			} catch(t) {}
		} ()
	}: Xe;
	var Ue = 0,
	Ve = {},
	Qe = C.ajaxSettings.xhr();
	function Xe() {
		try {
			return new f.XMLHttpRequest
		} catch(t) {}
	}
	f.attachEvent && f.attachEvent("onunload", function () {
		for (var t in Ve) Ve[t](void 0, !0)
	}),
	v.cors = !!Qe && "withCredentials" in Qe,
	(Qe = v.ajax = !!Qe) && C.ajaxTransport(function (l) {
		var c;
		if (!l.crossDomain || v.cors) return {
			send: function (t, s) {
				var e, r = l.xhr(),
				a = ++Ue;
				if (r.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (e in l.xhrFields) r[e] = l.xhrFields[e];
				for (e in l.mimeType && r.overrideMimeType && r.overrideMimeType(l.mimeType), l.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) void 0 !== t[e] && r.setRequestHeader(e, t[e] + "");
				r.send(l.hasContent && l.data || null),
				c = function (t, e) {
					var i, n, o;
					if (c && (e || 4 === r.readyState)) if (delete Ve[a], c = void 0, r.onreadystatechange = C.noop, e) 4 !== r.readyState && r.abort();
					else {
						o = {},
						i = r.status,
						"string" == typeof r.responseText && (o.text = r.responseText);
						try {
							n = r.statusText
						} catch(t) {
							n = ""
						}
						i || !l.isLocal || l.crossDomain ? 1223 === i && (i = 204) : i = o.text ? 200 : 404
					}
					o && s(i, n, o, r.getAllResponseHeaders())
				},
				l.async ? 4 === r.readyState ? setTimeout(c) : r.onreadystatechange = Ve[a] = c: c()
			},
			abort: function () {
				c && c(void 0, !0)
			}
		}
	}),
	C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (t) {
				return C.globalEval(t),
				t
			}
		}
	}),
	C.ajaxPrefilter("script", function (t) {
		void 0 === t.cache && (t.cache = !1),
		t.crossDomain && (t.type = "GET", t.global = !1)
	}),
	C.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var n, o = T.head || C("head")[0] || T.documentElement;
			return {
				send: function (t, i) { (n = T.createElement("script")).async = !0,
					e.scriptCharset && (n.charset = e.scriptCharset),
					n.src = e.url,
					n.onload = n.onreadystatechange = function (t, e) { (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || i(200, "success"))
					},
					o.insertBefore(n, o.firstChild)
				},
				abort: function () {
					n && n.onload(void 0, !0)
				}
			}
		}
	});
	var Je = [],
	Ye = /(=)\?(?=&|$)|\?\?/;
	C.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var t = Je.pop() || C.expando + "_" + _e++;
			return this[t] = !0,
			t
		}
	}),
	C.ajaxPrefilter("json jsonp", function (t, e, i) {
		var n, o, s, r = !1 !== t.jsonp && (Ye.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(t.data) && "data");
		return r || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = C.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Ye, "$1" + n) : !1 !== t.jsonp && (t.url += (Ce.test(t.url) ? "&": "?") + t.jsonp + "=" + n), t.converters["script json"] = function () {
			return s || C.error(n + " was not called"),
			s[0]
		},
		t.dataTypes[0] = "json", o = f[n], f[n] = function () {
			s = arguments
		},
		i.always(function () {
			f[n] = o,
			t[n] && (t.jsonpCallback = e.jsonpCallback, Je.push(n)),
			s && C.isFunction(o) && o(s[0]),
			s = o = void 0
		}), "script") : void 0
	}),
	C.parseHTML = function (t, e, i) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (i = e, e = !1),
		e = e || T;
		var n = b.exec(t),
		o = !i && [];
		return n ? [e.createElement(n[1])] : (n = C.buildFragment([t], e, o), o && o.length && C(o).remove(), C.merge([], n.childNodes))
	};
	var Ze = C.fn.load;
	C.fn.load = function (t, e, i) {
		if ("string" != typeof t && Ze) return Ze.apply(this, arguments);
		var n, o, s, r = this,
		a = t.indexOf(" ");
		return 0 <= a && (n = C.trim(t.slice(a, t.length)), t = t.slice(0, a)),
		C.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"),
		0 < r.length && C.ajax({
			url: t,
			type: s,
			dataType: "html",
			data: e
		}).done(function (t) {
			o = arguments,
			r.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
		}).complete(i &&
		function (t, e) {
			r.each(i, o || [t.responseText, e, t])
		}),
		this
	},
	C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
		C.fn[e] = function (t) {
			return this.on(e, t)
		}
	}),
	C.expr.filters.animated = function (e) {
		return C.grep(C.timers, function (t) {
			return e === t.elem
		}).length
	};
	var Ge = f.document.documentElement;
	function Ke(t) {
		return C.isWindow(t) ? t: 9 === t.nodeType && (t.defaultView || t.parentWindow)
	}
	C.offset = {
		setOffset: function (t, e, i) {
			var n, o, s, r, a, l, c = C.css(t, "position"),
			u = C(t),
			h = {};
			"static" === c && (t.style.position = "relative"),
			a = u.offset(),
			s = C.css(t, "top"),
			l = C.css(t, "left"),
			o = ("absolute" === c || "fixed" === c) && -1 < C.inArray("auto", [s, l]) ? (r = (n = u.position()).top, n.left) : (r = parseFloat(s) || 0, parseFloat(l) || 0),
			C.isFunction(e) && (e = e.call(t, i, a)),
			null != e.top && (h.top = e.top - a.top + r),
			null != e.left && (h.left = e.left - a.left + o),
			"using" in e ? e.using.call(t, h) : u.css(h)
		}
	},
	C.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this: this.each(function (t) {
				C.offset.setOffset(this, e, t)
			});
			var t, i, n = {
				top: 0,
				left: 0
			},
			o = this[0],
			s = o && o.ownerDocument;
			return s ? (t = s.documentElement, C.contains(t, o) ? (typeof o.getBoundingClientRect !== I && (n = o.getBoundingClientRect()), i = Ke(s), {
				top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : n) : void 0
		},
		position: function () {
			if (this[0]) {
				var t, e, i = {
					top: 0,
					left: 0
				},
				n = this[0];
				return "fixed" === C.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), C.nodeName(t[0], "html") || (i = t.offset()), i.top += C.css(t[0], "borderTopWidth", !0), i.left += C.css(t[0], "borderLeftWidth", !0)),
				{
					top: e.top - i.top - C.css(n, "marginTop", !0),
					left: e.left - i.left - C.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var t = this.offsetParent || Ge; t && !C.nodeName(t, "html") && "static" === C.css(t, "position");) t = t.offsetParent;
				return t || Ge
			})
		}
	}),
	C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	},
	function (e, o) {
		var s = /Y/.test(o);
		C.fn[e] = function (t) {
			return U(this, function (t, e, i) {
				var n = Ke(t);
				return void 0 === i ? n ? o in n ? n[o] : n.document.documentElement[e] : t[e] : void(n ? n.scrollTo(s ? C(n).scrollLeft() : i, s ? i: C(n).scrollTop()) : t[e] = i)
			},
			e, t, arguments.length, null)
		}
	}),
	C.each(["top", "left"], function (t, i) {
		C.cssHooks[i] = It(v.pixelPosition, function (t, e) {
			return e ? (e = At(t, i), Ot.test(e) ? C(t).position()[i] + "px": e) : void 0
		})
	}),
	C.each({
		Height: "height",
		Width: "width"
	},
	function (s, r) {
		C.each({
			padding: "inner" + s,
			content: r,
			"": "outer" + s
		},
		function (n, t) {
			C.fn[t] = function (t, e) {
				var i = arguments.length && (n || "boolean" != typeof t),
				o = n || (!0 === t || !0 === e ? "margin": "border");
				return U(this, function (t, e, i) {
					var n;
					return C.isWindow(t) ? t.document.documentElement["client" + s] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + s], n["scroll" + s], t.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? C.css(t, e, o) : C.style(t, e, i, o)
				},
				r, i ? t: void 0, i, null)
			}
		})
	}),
	C.fn.size = function () {
		return this.length
	},
	C.fn.andSelf = C.fn.addBack,
	"function" == typeof define && define.amd && define("jquery", [], function () {
		return C
	});
	var ti = f.jQuery,
	ei = f.$;
	return C.noConflict = function (t) {
		return f.$ === C && (f.$ = ei),
		t && f.jQuery === C && (f.jQuery = ti),
		C
	},
	typeof t === I && (f.jQuery = f.$ = C),
	C
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); !
function (t) {
	"use strict";
	var e = jQuery.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
} (),
function (n) {
	"use strict";
	n.fn.emulateTransitionEnd = function (t) {
		var e = !1,
		i = this;
		n(this).one("bsTransitionEnd", function () {
			e = !0
		});
		return setTimeout(function () {
			e || n(i).trigger(n.support.transition.end)
		},
		t),
		this
	},
	n(function () {
		n.support.transition = function () {
			var t = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
			for (var i in e) if (void 0 !== t.style[i]) return {
				end: e[i]
			};
			return ! 1
		} (),
		n.support.transition && (n.event.special.bsTransitionEnd = {
			bindType: n.support.transition.end,
			delegateType: n.support.transition.end,
			handle: function (t) {
				if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
			}
		})
	})
} (jQuery),
function (s) {
	"use strict";
	var e = '[data-dismiss="alert"]',
	r = function (t) {
		s(t).on("click", e, this.close)
	};
	r.VERSION = "3.3.7",
	r.TRANSITION_DURATION = 150,
	r.prototype.close = function (t) {
		function e() {
			o.detach().trigger("closed.bs.alert").remove()
		}
		var i = s(this),
		n = i.attr("data-target");
		n || (n = (n = i.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
		var o = s("#" === n ? [] : n);
		t && t.preventDefault(),
		o.length || (o = i.closest(".alert")),
		o.trigger(t = s.Event("close.bs.alert")),
		t.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(r.TRANSITION_DURATION) : e())
	};
	var t = s.fn.alert;
	s.fn.alert = function (i) {
		return this.each(function () {
			var t = s(this),
			e = t.data("bs.alert");
			e || t.data("bs.alert", e = new r(this)),
			"string" == typeof i && e[i].call(t)
		})
	},
	s.fn.alert.Constructor = r,
	s.fn.alert.noConflict = function () {
		return s.fn.alert = t,
		this
	},
	s(document).on("click.bs.alert.data-api", e, r.prototype.close)
} (jQuery),
function (s) {
	"use strict";
	function i(n) {
		return this.each(function () {
			var t = s(this),
			e = t.data("bs.button"),
			i = "object" == typeof n && n;
			e || t.data("bs.button", e = new o(this, i)),
			"toggle" == n ? e.toggle() : n && e.setState(n)
		})
	}
	var o = function (t, e) {
		this.$element = s(t),
		this.options = s.extend({},
		o.DEFAULTS, e),
		this.isLoading = !1
	};
	o.VERSION = "3.3.7",
	o.DEFAULTS = {
		loadingText: "loading..."
	},
	o.prototype.setState = function (t) {
		var e = "disabled",
		i = this.$element,
		n = i.is("input") ? "val": "html",
		o = i.data();
		t += "Text",
		null == o.resetText && i.data("resetText", i[n]()),
		setTimeout(s.proxy(function () {
			i[n](null == o[t] ? this.options[t] : o[t]),
			"loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e).prop(e, !1))
		},
		this), 0)
	},
	o.prototype.toggle = function () {
		var t = !0,
		e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
			i.prop("checked", this.$element.hasClass("active")),
			t && i.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
		this.$element.toggleClass("active")
	};
	var t = s.fn.button;
	s.fn.button = i,
	s.fn.button.Constructor = o,
	s.fn.button.noConflict = function () {
		return s.fn.button = t,
		this
	},
	s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
		var e = s(t.target).closest(".btn");
		i.call(e, "toggle"),
		s(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
		s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
	})
} (jQuery),
function (h) {
	"use strict";
	function r(o) {
		return this.each(function () {
			var t = h(this),
			e = t.data("bs.carousel"),
			i = h.extend({},
			d.DEFAULTS, t.data(), "object" == typeof o && o),
			n = "string" == typeof o ? o: i.slide;
			e || t.data("bs.carousel", e = new d(this, i)),
			"number" == typeof o ? e.to(o) : n ? e[n]() : i.interval && e.pause().cycle()
		})
	}
	var d = function (t, e) {
		this.$element = h(t),
		this.$indicators = this.$element.find(".carousel-indicators"),
		this.options = e,
		this.paused = null,
		this.sliding = null,
		this.interval = null,
		this.$active = null,
		this.$items = null,
		this.options.keyboard && this.$element.on("keydown.bs.carousel", h.proxy(this.keydown, this)),
		"hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", h.proxy(this.pause, this)).on("mouseleave.bs.carousel", h.proxy(this.cycle, this))
	};
	d.VERSION = "3.3.7",
	d.TRANSITION_DURATION = 600,
	d.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	},
	d.prototype.keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			t.preventDefault()
		}
	},
	d.prototype.cycle = function (t) {
		return t || (this.paused = !1),
		this.interval && clearInterval(this.interval),
		this.options.interval && !this.paused && (this.interval = setInterval(h.proxy(this.next, this), this.options.interval)),
		this
	},
	d.prototype.getItemIndex = function (t) {
		return this.$items = t.parent().children(".item"),
		this.$items.index(t || this.$active)
	},
	d.prototype.getItemForDirection = function (t, e) {
		var i = this.getItemIndex(e);
		if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
		var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
		return this.$items.eq(n)
	},
	d.prototype.to = function (t) {
		var e = this,
		i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if (! (t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
			e.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(i < t ? "next": "prev", this.$items.eq(t))
	},
	d.prototype.pause = function (t) {
		return t || (this.paused = !0),
		this.$element.find(".next, .prev").length && h.support.transition && (this.$element.trigger(h.support.transition.end), this.cycle(!0)),
		this.interval = clearInterval(this.interval),
		this
	},
	d.prototype.next = function () {
		if (!this.sliding) return this.slide("next")
	},
	d.prototype.prev = function () {
		if (!this.sliding) return this.slide("prev")
	},
	d.prototype.slide = function (t, e) {
		var i = this.$element.find(".item.active"),
		n = e || this.getItemForDirection(t, i),
		o = this.interval,
		s = "next" == t ? "left": "right",
		r = this;
		if (n.hasClass("active")) return this.sliding = !1;
		var a = n[0],
		l = h.Event("slide.bs.carousel", {
			relatedTarget: a,
			direction: s
		});
		if (this.$element.trigger(l), !l.isDefaultPrevented()) {
			if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var c = h(this.$indicators.children()[this.getItemIndex(n)]);
				c && c.addClass("active")
			}
			var u = h.Event("slid.bs.carousel", {
				relatedTarget: a,
				direction: s
			});
			return h.support.transition && this.$element.hasClass("slide") ? (n.addClass(t), n[0].offsetWidth, i.addClass(s), n.addClass(s), i.one("bsTransitionEnd", function () {
				n.removeClass([t, s].join(" ")).addClass("active"),
				i.removeClass(["active", s].join(" ")),
				r.sliding = !1,
				setTimeout(function () {
					r.$element.trigger(u)
				},
				0)
			}).emulateTransitionEnd(d.TRANSITION_DURATION)) : (i.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(u)),
			o && this.cycle(),
			this
		}
	};
	var t = h.fn.carousel;
	h.fn.carousel = r,
	h.fn.carousel.Constructor = d,
	h.fn.carousel.noConflict = function () {
		return h.fn.carousel = t,
		this
	};
	var e = function (t) {
		var e, i = h(this),
		n = h(i.attr("data-target") || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
		if (n.hasClass("carousel")) {
			var o = h.extend({},
			n.data(), i.data()),
			s = i.attr("data-slide-to");
			s && (o.interval = !1),
			r.call(n, o),
			s && n.data("bs.carousel").to(s),
			t.preventDefault()
		}
	};
	h(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
	h(window).on("load", function () {
		h('[data-ride="carousel"]').each(function () {
			var t = h(this);
			r.call(t, t.data())
		})
	})
} (jQuery),
function (r) {
	"use strict";
	function o(t) {
		var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
		return r(i)
	}
	function a(n) {
		return this.each(function () {
			var t = r(this),
			e = t.data("bs.collapse"),
			i = r.extend({},
			l.DEFAULTS, t.data(), "object" == typeof n && n); ! e && i.toggle && /show|hide/.test(n) && (i.toggle = !1),
			e || t.data("bs.collapse", e = new l(this, i)),
			"string" == typeof n && e[n]()
		})
	}
	var l = function (t, e) {
		this.$element = r(t),
		this.options = r.extend({},
		l.DEFAULTS, e),
		this.$trigger = r('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
		this.transitioning = null,
		this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
		this.options.toggle && this.toggle()
	};
	l.VERSION = "3.3.7",
	l.TRANSITION_DURATION = 350,
	l.DEFAULTS = {
		toggle: !0
	},
	l.prototype.dimension = function () {
		return this.$element.hasClass("width") ? "width": "height"
	},
	l.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (! (e && e.length && ((t = e.data("bs.collapse")) && t.transitioning))) {
				var i = r.Event("show.bs.collapse");
				if (this.$element.trigger(i), !i.isDefaultPrevented()) {
					e && e.length && (a.call(e, "hide"), t || e.data("bs.collapse", null));
					var n = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0),
					this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
					this.transitioning = 1;
					var o = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[n](""),
						this.transitioning = 0,
						this.$element.trigger("shown.bs.collapse")
					};
					if (!r.support.transition) return o.call(this);
					var s = r.camelCase(["scroll", n].join("-"));
					this.$element.one("bsTransitionEnd", r.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[n](this.$element[0][s])
				}
			}
		}
	},
	l.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var t = r.Event("hide.bs.collapse");
			if (this.$element.trigger(t), !t.isDefaultPrevented()) {
				var e = this.dimension();
				this.$element[e](this.$element[e]())[0].offsetHeight,
				this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
				this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
				this.transitioning = 1;
				var i = function () {
					this.transitioning = 0,
					this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return r.support.transition ? void this.$element[e](0).one("bsTransitionEnd", r.proxy(i, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : i.call(this)
			}
		}
	},
	l.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide": "show"]()
	},
	l.prototype.getParent = function () {
		return r(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(r.proxy(function (t, e) {
			var i = r(e);
			this.addAriaAndCollapsedClass(o(i), i)
		},
		this)).end()
	},
	l.prototype.addAriaAndCollapsedClass = function (t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i),
		e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var t = r.fn.collapse;
	r.fn.collapse = a,
	r.fn.collapse.Constructor = l,
	r.fn.collapse.noConflict = function () {
		return r.fn.collapse = t,
		this
	},
	r(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
		var e = r(this);
		e.attr("data-target") || t.preventDefault();
		var i = o(e),
		n = i.data("bs.collapse") ? "toggle": e.data();
		a.call(i, n)
	})
} (jQuery),
function (r) {
	"use strict";
	function a(t) {
		var e = t.attr("data-target");
		e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
		var i = e && r(e);
		return i && i.length ? i: t.parent()
	}
	function s(n) {
		n && 3 === n.which || (r(".dropdown-backdrop").remove(), r(l).each(function () {
			var t = r(this),
			e = a(t),
			i = {
				relatedTarget: this
			};
			e.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && r.contains(e[0], n.target) || (e.trigger(n = r.Event("hide.bs.dropdown", i)), n.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(r.Event("hidden.bs.dropdown", i)))))
		}))
	}
	var l = '[data-toggle="dropdown"]',
	n = function (t) {
		r(t).on("click.bs.dropdown", this.toggle)
	};
	n.VERSION = "3.3.7",
	n.prototype.toggle = function (t) {
		var e = r(this);
		if (!e.is(".disabled, :disabled")) {
			var i = a(e),
			n = i.hasClass("open");
			if (s(), !n) {
				"ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && r(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(r(this)).on("click", s);
				var o = {
					relatedTarget: this
				};
				if (i.trigger(t = r.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"),
				i.toggleClass("open").trigger(r.Event("shown.bs.dropdown", o))
			}
			return ! 1
		}
	},
	n.prototype.keydown = function (t) {
		if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
			var e = r(this);
			if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
				var i = a(e),
				n = i.hasClass("open");
				if (!n && 27 != t.which || n && 27 == t.which) return 27 == t.which && i.find(l).trigger("focus"),
				e.trigger("click");
				var o = i.find(".dropdown-menu li:not(.disabled):visible a");
				if (o.length) {
					var s = o.index(t.target);
					38 == t.which && 0 < s && s--,
					40 == t.which && s < o.length - 1 && s++,
					~s || (s = 0),
					o.eq(s).trigger("focus")
				}
			}
		}
	};
	var t = r.fn.dropdown;
	r.fn.dropdown = function (i) {
		return this.each(function () {
			var t = r(this),
			e = t.data("bs.dropdown");
			e || t.data("bs.dropdown", e = new n(this)),
			"string" == typeof i && e[i].call(t)
		})
	},
	r.fn.dropdown.Constructor = n,
	r.fn.dropdown.noConflict = function () {
		return r.fn.dropdown = t,
		this
	},
	r(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", l, n.prototype.toggle).on("keydown.bs.dropdown.data-api", l, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
} (jQuery),
function (s) {
	"use strict";
	function r(n, o) {
		return this.each(function () {
			var t = s(this),
			e = t.data("bs.modal"),
			i = s.extend({},
			a.DEFAULTS, t.data(), "object" == typeof n && n);
			e || t.data("bs.modal", e = new a(this, i)),
			"string" == typeof n ? e[n](o) : i.show && e.show(o)
		})
	}
	var a = function (t, e) {
		this.options = e,
		this.$body = s(document.body),
		this.$element = s(t),
		this.$dialog = this.$element.find(".modal-dialog"),
		this.$backdrop = null,
		this.isShown = null,
		this.originalBodyPad = null,
		this.scrollbarWidth = 0,
		this.ignoreBackdropClick = !1,
		this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		},
		this))
	};
	a.VERSION = "3.3.7",
	a.TRANSITION_DURATION = 300,
	a.BACKDROP_TRANSITION_DURATION = 150,
	a.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	},
	a.prototype.toggle = function (t) {
		return this.isShown ? this.hide() : this.show(t)
	},
	a.prototype.show = function (i) {
		var n = this,
		t = s.Event("show.bs.modal", {
			relatedTarget: i
		});
		this.$element.trigger(t),
		this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			n.$element.one("mouseup.dismiss.bs.modal", function (t) {
				s(t.target).is(n.$element) && (n.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var t = s.support.transition && n.$element.hasClass("fade");
			n.$element.parent().length || n.$element.appendTo(n.$body),
			n.$element.show().scrollTop(0),
			n.adjustDialog(),
			t && n.$element[0].offsetWidth,
			n.$element.addClass("in"),
			n.enforceFocus();
			var e = s.Event("shown.bs.modal", {
				relatedTarget: i
			});
			t ? n.$dialog.one("bsTransitionEnd", function () {
				n.$element.trigger("focus").trigger(e)
			}).emulateTransitionEnd(a.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(e)
		}))
	},
	a.prototype.hide = function (t) {
		t && t.preventDefault(),
		t = s.Event("hide.bs.modal"),
		this.$element.trigger(t),
		this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), s(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
	},
	a.prototype.enforceFocus = function () {
		s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function (t) {
			document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		},
		this))
	},
	a.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function (t) {
			27 == t.which && this.hide()
		},
		this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	},
	a.prototype.resize = function () {
		this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
	},
	a.prototype.hideModal = function () {
		var t = this;
		this.$element.hide(),
		this.backdrop(function () {
			t.$body.removeClass("modal-open"),
			t.resetAdjustments(),
			t.resetScrollbar(),
			t.$element.trigger("hidden.bs.modal")
		})
	},
	a.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(),
		this.$backdrop = null
	},
	a.prototype.backdrop = function (t) {
		var e = this,
		i = this.$element.hasClass("fade") ? "fade": "";
		if (this.isShown && this.options.backdrop) {
			var n = s.support.transition && i;
			if (this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", s.proxy(function (t) {
				return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
			},
			this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
			n ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : t()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var o = function () {
				e.removeBackdrop(),
				t && t()
			};
			s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : o()
		} else t && t()
	},
	a.prototype.handleUpdate = function () {
		this.adjustDialog()
	},
	a.prototype.adjustDialog = function () {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth: "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth: ""
		})
	},
	a.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	},
	a.prototype.checkScrollbar = function () {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t,
		this.scrollbarWidth = this.measureScrollbar()
	},
	a.prototype.setScrollbar = function () {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "",
		this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	},
	a.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	},
	a.prototype.measureScrollbar = function () {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure",
		this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t),
		e
	};
	var t = s.fn.modal;
	s.fn.modal = r,
	s.fn.modal.Constructor = a,
	s.fn.modal.noConflict = function () {
		return s.fn.modal = t,
		this
	},
	s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
		var e = s(this),
		i = e.attr("href"),
		n = s(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
		o = n.data("bs.modal") ? "toggle": s.extend({
			remote: !/#/.test(i) && i
		},
		n.data(), e.data());
		e.is("a") && t.preventDefault(),
		n.one("show.bs.modal", function (t) {
			t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
				e.is(":visible") && e.trigger("focus")
			})
		}),
		r.call(n, o, this)
	})
} (jQuery),
function (g) {
	"use strict";
	var m = function (t, e) {
		this.type = null,
		this.options = null,
		this.enabled = null,
		this.timeout = null,
		this.hoverState = null,
		this.$element = null,
		this.inState = null,
		this.init("tooltip", t, e)
	};
	m.VERSION = "3.3.7",
	m.TRANSITION_DURATION = 150,
	m.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	},
	m.prototype.init = function (t, e, i) {
		if (this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && g(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
			click: !1,
			hover: !1,
			focus: !1
		},
		this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var n = this.options.trigger.split(" "), o = n.length; o--;) {
			var s = n[o];
			if ("click" == s) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));
			else if ("manual" != s) {
				var r = "hover" == s ? "mouseenter": "focusin",
				a = "hover" == s ? "mouseleave": "focusout";
				this.$element.on(r + "." + this.type, this.options.selector, g.proxy(this.enter, this)),
				this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = g.extend({},
		this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	},
	m.prototype.getDefaults = function () {
		return m.DEFAULTS
	},
	m.prototype.getOptions = function (t) {
		return (t = g.extend({},
		this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
			show: t.delay,
			hide: t.delay
		}),
		t
	},
	m.prototype.getDelegateOptions = function () {
		var i = {},
		n = this.getDefaults();
		return this._options && g.each(this._options, function (t, e) {
			n[t] != e && (i[t] = e)
		}),
		i
	},
	m.prototype.enter = function (t) {
		var e = t instanceof this.constructor ? t: g(t.currentTarget).data("bs." + this.type);
		return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)),
		t instanceof g.Event && (e.inState["focusin" == t.type ? "focus": "hover"] = !0),
		e.tip().hasClass("in") || "in" == e.hoverState ? void(e.hoverState = "in") : (clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function () {
			"in" == e.hoverState && e.show()
		},
		e.options.delay.show)) : e.show())
	},
	m.prototype.isInStateTrue = function () {
		for (var t in this.inState) if (this.inState[t]) return ! 0;
		return ! 1
	},
	m.prototype.leave = function (t) {
		var e = t instanceof this.constructor ? t: g(t.currentTarget).data("bs." + this.type);
		if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusout" == t.type ? "focus": "hover"] = !1), !e.isInStateTrue()) return clearTimeout(e.timeout),
		e.hoverState = "out",
		e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function () {
			"out" == e.hoverState && e.hide()
		},
		e.options.delay.hide)) : e.hide()
	},
	m.prototype.show = function () {
		var t = g.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(t);
			var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (t.isDefaultPrevented() || !e) return;
			var i = this,
			n = this.tip(),
			o = this.getUID(this.type);
			this.setContent(),
			n.attr("id", o),
			this.$element.attr("aria-describedby", o),
			this.options.animation && n.addClass("fade");
			var s = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
			r = /\s?auto?\s?/i,
			a = r.test(s);
			a && (s = s.replace(r, "") || "top"),
			n.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(s).data("bs." + this.type, this),
			this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element),
			this.$element.trigger("inserted.bs." + this.type);
			var l = this.getPosition(),
			c = n[0].offsetWidth,
			u = n[0].offsetHeight;
			if (a) {
				var h = s,
				d = this.getPosition(this.$viewport);
				s = "bottom" == s && l.bottom + u > d.bottom ? "top": "top" == s && l.top - u < d.top ? "bottom": "right" == s && l.right + c > d.width ? "left": "left" == s && l.left - c < d.left ? "right": s,
				n.removeClass(h).addClass(s)
			}
			var p = this.getCalculatedOffset(s, l, c, u);
			this.applyPlacement(p, s);
			var f = function () {
				var t = i.hoverState;
				i.$element.trigger("shown.bs." + i.type),
				i.hoverState = null,
				"out" == t && i.leave(i)
			};
			g.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", f).emulateTransitionEnd(m.TRANSITION_DURATION) : f()
		}
	},
	m.prototype.applyPlacement = function (t, e) {
		var i = this.tip(),
		n = i[0].offsetWidth,
		o = i[0].offsetHeight,
		s = parseInt(i.css("margin-top"), 10),
		r = parseInt(i.css("margin-left"), 10);
		isNaN(s) && (s = 0),
		isNaN(r) && (r = 0),
		t.top += s,
		t.left += r,
		g.offset.setOffset(i[0], g.extend({
			using: function (t) {
				i.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		},
		t), 0),
		i.addClass("in");
		var a = i[0].offsetWidth,
		l = i[0].offsetHeight;
		"top" == e && l != o && (t.top = t.top + o - l);
		var c = this.getViewportAdjustedDelta(e, t, a, l);
		c.left ? t.left += c.left: t.top += c.top;
		var u = /top|bottom/.test(e),
		h = u ? 2 * c.left - n + a: 2 * c.top - o + l,
		d = u ? "offsetWidth": "offsetHeight";
		i.offset(t),
		this.replaceArrow(h, i[0][d], u)
	},
	m.prototype.replaceArrow = function (t, e, i) {
		this.arrow().css(i ? "left": "top", 50 * (1 - t / e) + "%").css(i ? "top": "left", "")
	},
	m.prototype.setContent = function () {
		var t = this.tip(),
		e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html": "text"](e),
		t.removeClass("fade in top bottom left right")
	},
	m.prototype.hide = function (t) {
		function e() {
			"in" != i.hoverState && n.detach(),
			i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
			t && t()
		}
		var i = this,
		n = g(this.$tip),
		o = g.Event("hide.bs." + this.type);
		if (this.$element.trigger(o), !o.isDefaultPrevented()) return n.removeClass("in"),
		g.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(m.TRANSITION_DURATION) : e(),
		this.hoverState = null,
		this
	},
	m.prototype.fixTitle = function () {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	},
	m.prototype.hasContent = function () {
		return this.getTitle()
	},
	m.prototype.getPosition = function (t) {
		var e = (t = t || this.$element)[0],
		i = "BODY" == e.tagName,
		n = e.getBoundingClientRect();
		null == n.width && (n = g.extend({},
		n, {
			width: n.right - n.left,
			height: n.bottom - n.top
		}));
		var o = window.SVGElement && e instanceof window.SVGElement,
		s = i ? {
			top: 0,
			left: 0
		}: o ? null: t.offset(),
		r = {
			scroll: i ? document.documentElement.scrollTop || document.body.scrollTop: t.scrollTop()
		},
		a = i ? {
			width: g(window).width(),
			height: g(window).height()
		}: null;
		return g.extend({},
		n, r, a, s)
	},
	m.prototype.getCalculatedOffset = function (t, e, i, n) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		}: "top" == t ? {
			top: e.top - n,
			left: e.left + e.width / 2 - i / 2
		}: "left" == t ? {
			top: e.top + e.height / 2 - n / 2,
			left: e.left - i
		}: {
			top: e.top + e.height / 2 - n / 2,
			left: e.left + e.width
		}
	},
	m.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
		var o = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return o;
		var s = this.options.viewport && this.options.viewport.padding || 0,
		r = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var a = e.top - s - r.scroll,
			l = e.top + s - r.scroll + n;
			a < r.top ? o.top = r.top - a: l > r.top + r.height && (o.top = r.top + r.height - l)
		} else {
			var c = e.left - s,
			u = e.left + s + i;
			c < r.left ? o.left = r.left - c: u > r.right && (o.left = r.left + r.width - u)
		}
		return o
	},
	m.prototype.getTitle = function () {
		var t = this.$element,
		e = this.options;
		return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
	},
	m.prototype.getUID = function (t) {
		for (; t += ~~ (1e6 * Math.random()), document.getElementById(t););
		return t
	},
	m.prototype.tip = function () {
		if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	},
	m.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	},
	m.prototype.enable = function () {
		this.enabled = !0
	},
	m.prototype.disable = function () {
		this.enabled = !1
	},
	m.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	},
	m.prototype.toggle = function (t) {
		var e = this;
		t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))),
		t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
	},
	m.prototype.destroy = function () {
		var t = this;
		clearTimeout(this.timeout),
		this.hide(function () {
			t.$element.off("." + t.type).removeData("bs." + t.type),
			t.$tip && t.$tip.detach(),
			t.$tip = null,
			t.$arrow = null,
			t.$viewport = null,
			t.$element = null
		})
	};
	var t = g.fn.tooltip;
	g.fn.tooltip = function (n) {
		return this.each(function () {
			var t = g(this),
			e = t.data("bs.tooltip"),
			i = "object" == typeof n && n; ! e && /destroy|hide/.test(n) || (e || t.data("bs.tooltip", e = new m(this, i)), "string" == typeof n && e[n]())
		})
	},
	g.fn.tooltip.Constructor = m,
	g.fn.tooltip.noConflict = function () {
		return g.fn.tooltip = t,
		this
	}
} (jQuery),
function (o) {
	"use strict";
	var s = function (t, e) {
		this.init("popover", t, e)
	};
	if (!o.fn.tooltip) throw new Error("Popover requires tooltip.js");
	s.VERSION = "3.3.7",
	s.DEFAULTS = o.extend({},
	o.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}),
	((s.prototype = o.extend({},
	o.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function () {
		return s.DEFAULTS
	},
	s.prototype.setContent = function () {
		var t = this.tip(),
		e = this.getTitle(),
		i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html": "text"](e),
		t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html": "append": "text"](i),
		t.removeClass("fade top bottom left right in"),
		t.find(".popover-title").html() || t.find(".popover-title").hide()
	},
	s.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	},
	s.prototype.getContent = function () {
		var t = this.$element,
		e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	},
	s.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var t = o.fn.popover;
	o.fn.popover = function (n) {
		return this.each(function () {
			var t = o(this),
			e = t.data("bs.popover"),
			i = "object" == typeof n && n; ! e && /destroy|hide/.test(n) || (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof n && e[n]())
		})
	},
	o.fn.popover.Constructor = s,
	o.fn.popover.noConflict = function () {
		return o.fn.popover = t,
		this
	}
} (jQuery),
function (s) {
	"use strict";
	function o(t, e) {
		this.$body = s(document.body),
		this.$scrollElement = s(s(t).is(document.body) ? window: t),
		this.options = s.extend({},
		o.DEFAULTS, e),
		this.selector = (this.options.target || "") + " .nav li > a",
		this.offsets = [],
		this.targets = [],
		this.activeTarget = null,
		this.scrollHeight = 0,
		this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)),
		this.refresh(),
		this.process()
	}
	function e(n) {
		return this.each(function () {
			var t = s(this),
			e = t.data("bs.scrollspy"),
			i = "object" == typeof n && n;
			e || t.data("bs.scrollspy", e = new o(this, i)),
			"string" == typeof n && e[n]()
		})
	}
	o.VERSION = "3.3.7",
	o.DEFAULTS = {
		offset: 10
	},
	o.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	},
	o.prototype.refresh = function () {
		var t = this,
		n = "offset",
		o = 0;
		this.offsets = [],
		this.targets = [],
		this.scrollHeight = this.getScrollHeight(),
		s.isWindow(this.$scrollElement[0]) || (n = "position", o = this.$scrollElement.scrollTop()),
		this.$body.find(this.selector).map(function () {
			var t = s(this),
			e = t.data("target") || t.attr("href"),
			i = /^#./.test(e) && s(e);
			return i && i.length && i.is(":visible") && [[i[n]().top + o, e]] || null
		}).sort(function (t, e) {
			return t[0] - e[0]
		}).each(function () {
			t.offsets.push(this[0]),
			t.targets.push(this[1])
		})
	},
	o.prototype.process = function () {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset,
		i = this.getScrollHeight(),
		n = this.options.offset + i - this.$scrollElement.height(),
		o = this.offsets,
		s = this.targets,
		r = this.activeTarget;
		if (this.scrollHeight != i && this.refresh(), n <= e) return r != (t = s[s.length - 1]) && this.activate(t);
		if (r && e < o[0]) return this.activeTarget = null,
		this.clear();
		for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
	},
	o.prototype.activate = function (t) {
		this.activeTarget = t,
		this.clear();
		var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
		i = s(e).parents("li").addClass("active");
		i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
		i.trigger("activate.bs.scrollspy")
	},
	o.prototype.clear = function () {
		s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var t = s.fn.scrollspy;
	s.fn.scrollspy = e,
	s.fn.scrollspy.Constructor = o,
	s.fn.scrollspy.noConflict = function () {
		return s.fn.scrollspy = t,
		this
	},
	s(window).on("load.bs.scrollspy.data-api", function () {
		s('[data-spy="scroll"]').each(function () {
			var t = s(this);
			e.call(t, t.data())
		})
	})
} (jQuery),
function (a) {
	"use strict";
	function e(i) {
		return this.each(function () {
			var t = a(this),
			e = t.data("bs.tab");
			e || t.data("bs.tab", e = new r(this)),
			"string" == typeof i && e[i]()
		})
	}
	var r = function (t) {
		this.element = a(t)
	};
	r.VERSION = "3.3.7",
	r.TRANSITION_DURATION = 150,
	r.prototype.show = function () {
		var t = this.element,
		e = t.closest("ul:not(.dropdown-menu)"),
		i = t.data("target");
		if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var n = e.find(".active:last a"),
			o = a.Event("hide.bs.tab", {
				relatedTarget: t[0]
			}),
			s = a.Event("show.bs.tab", {
				relatedTarget: n[0]
			});
			if (n.trigger(o), t.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
				var r = a(i);
				this.activate(t.closest("li"), e),
				this.activate(r, r.parent(), function () {
					n.trigger({
						type: "hidden.bs.tab",
						relatedTarget: t[0]
					}),
					t.trigger({
						type: "shown.bs.tab",
						relatedTarget: n[0]
					})
				})
			}
		}
	},
	r.prototype.activate = function (t, e, i) {
		function n() {
			o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
			t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
			s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
			t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
			i && i()
		}
		var o = e.find("> .active"),
		s = i && a.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);
		o.length && s ? o.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n(),
		o.removeClass("in")
	};
	var t = a.fn.tab;
	a.fn.tab = e,
	a.fn.tab.Constructor = r,
	a.fn.tab.noConflict = function () {
		return a.fn.tab = t,
		this
	};
	var i = function (t) {
		t.preventDefault(),
		e.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
} (jQuery),
function (l) {
	"use strict";
	function i(n) {
		return this.each(function () {
			var t = l(this),
			e = t.data("bs.affix"),
			i = "object" == typeof n && n;
			e || t.data("bs.affix", e = new c(this, i)),
			"string" == typeof n && e[n]()
		})
	}
	var c = function (t, e) {
		this.options = l.extend({},
		c.DEFAULTS, e),
		this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)),
		this.$element = l(t),
		this.affixed = null,
		this.unpin = null,
		this.pinnedOffset = null,
		this.checkPosition()
	};
	c.VERSION = "3.3.7",
	c.RESET = "affix affix-top affix-bottom",
	c.DEFAULTS = {
		offset: 0,
		target: window
	},
	c.prototype.getState = function (t, e, i, n) {
		var o = this.$target.scrollTop(),
		s = this.$element.offset(),
		r = this.$target.height();
		if (null != i && "top" == this.affixed) return o < i && "top";
		if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom": !(o + r <= t - n) && "bottom";
		var a = null == this.affixed,
		l = a ? o: s.top;
		return null != i && o <= i ? "top": null != n && t - n <= l + (a ? r: e) && "bottom"
	},
	c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var t = this.$target.scrollTop(),
		e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	},
	c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(l.proxy(this.checkPosition, this), 1)
	},
	c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var t = this.$element.height(),
			e = this.options.offset,
			i = e.top,
			n = e.bottom,
			o = Math.max(l(document).height(), l(document.body).height());
			"object" != typeof e && (n = i = e),
			"function" == typeof i && (i = e.top(this.$element)),
			"function" == typeof n && (n = e.bottom(this.$element));
			var s = this.getState(o, t, i, n);
			if (this.affixed != s) {
				null != this.unpin && this.$element.css("top", "");
				var r = "affix" + (s ? "-" + s: ""),
				a = l.Event(r + ".bs.affix");
				if (this.$element.trigger(a), a.isDefaultPrevented()) return;
				this.affixed = s,
				this.unpin = "bottom" == s ? this.getPinnedOffset() : null,
				this.$element.removeClass(c.RESET).addClass(r).trigger(r.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == s && this.$element.offset({
				top: o - t - n
			})
		}
	};
	var t = l.fn.affix;
	l.fn.affix = i,
	l.fn.affix.Constructor = c,
	l.fn.affix.noConflict = function () {
		return l.fn.affix = t,
		this
	},
	l(window).on("load", function () {
		l('[data-spy="affix"]').each(function () {
			var t = l(this),
			e = t.data();
			e.offset = e.offset || {},
			null != e.offsetBottom && (e.offset.bottom = e.offsetBottom),
			null != e.offsetTop && (e.offset.top = e.offsetTop),
			i.call(t, e)
		})
	})
} (jQuery),
function (l, i, o, a) {
	function c(t, e) {
		this.settings = null,
		this.options = l.extend({},
		c.Defaults, e),
		this.$element = l(t),
		this._handlers = {},
		this._plugins = {},
		this._supress = {},
		this._current = null,
		this._speed = null,
		this._coordinates = [],
		this._breakpoint = null,
		this._width = null,
		this._items = [],
		this._clones = [],
		this._mergers = [],
		this._widths = [],
		this._invalidated = {},
		this._pipe = [],
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		},
		this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		},
		l.each(["onResize", "onThrottledResize"], l.proxy(function (t, e) {
			this._handlers[e] = l.proxy(this[e], this)
		},
		this)),
		l.each(c.Plugins, l.proxy(function (t, e) {
			this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
		},
		this)),
		l.each(c.Workers, l.proxy(function (t, e) {
			this._pipe.push({
				filter: e.filter,
				run: l.proxy(e.run, this)
			})
		},
		this)),
		this.setup(),
		this.initialize()
	}
	c.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		checkVisibility: !0,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: i,
		fallbackEasing: "swing",
		slideTransition: "",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	},
	c.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	},
	c.Type = {
		Event: "event",
		State: "state"
	},
	c.Plugins = {},
	c.Workers = [{
		filter: ["width", "settings"],
		run: function () {
			this._width = this.$element.width()
		}
	},
	{
		filter: ["width", "items", "settings"],
		run: function (t) {
			t.current = this._items && this._items[this.relative(this._current)]
		}
	},
	{
		filter: ["items", "settings"],
		run: function () {
			this.$stage.children(".cloned").remove()
		}
	},
	{
		filter: ["width", "items", "settings"],
		run: function (t) {
			var e = this.settings.margin || "",
			i = !this.settings.autoWidth,
			n = this.settings.rtl,
			o = {
				width: "auto",
				"margin-left": n ? e: "",
				"margin-right": n ? "": e
			}; ! i && this.$stage.children().css(o),
			t.css = o
		}
	},
	{
		filter: ["width", "items", "settings"],
		run: function (t) {
			var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
			i = null,
			n = this._items.length,
			o = !this.settings.autoWidth,
			s = [];
			for (t.items = {
				merge: !1,
				width: e
			}; n--;) i = this._mergers[n],
			i = this.settings.mergeFit && Math.min(i, this.settings.items) || i,
			t.items.merge = 1 < i || t.items.merge,
			s[n] = o ? e * i: this._items[n].width();
			this._widths = s
		}
	},
	{
		filter: ["items", "settings"],
		run: function () {
			var t = [],
			e = this._items,
			i = this.settings,
			n = Math.max(2 * i.items, 4),
			o = 2 * Math.ceil(e.length / 2),
			s = i.loop && e.length ? i.rewind ? n: Math.max(n, o) : 0,
			r = "",
			a = "";
			for (s /= 2; 0 < s;) t.push(this.normalize(t.length / 2, !0)),
			r += e[t[t.length - 1]][0].outerHTML,
			t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
			a = e[t[t.length - 1]][0].outerHTML + a,
			s -= 1;
			this._clones = t,
			l(r).addClass("cloned").appendTo(this.$stage),
			l(a).addClass("cloned").prependTo(this.$stage)
		}
	},
	{
		filter: ["width", "items", "settings"],
		run: function () {
			for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, s = []; ++i < e;) n = s[i - 1] || 0,
			o = this._widths[this.relative(i)] + this.settings.margin,
			s.push(n + o * t);
			this._coordinates = s
		}
	},
	{
		filter: ["width", "items", "settings"],
		run: function () {
			var t = this.settings.stagePadding,
			e = this._coordinates,
			i = {
				width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
				"padding-left": t || "",
				"padding-right": t || ""
			};
			this.$stage.css(i)
		}
	},
	{
		filter: ["width", "items", "settings"],
		run: function (t) {
			var e = this._coordinates.length,
			i = !this.settings.autoWidth,
			n = this.$stage.children();
			if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)],
			n.eq(e).css(t.css);
			else i && (t.css.width = t.items.width, n.css(t.css))
		}
	},
	{
		filter: ["items"],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	},
	{
		filter: ["width", "items", "settings"],
		run: function (t) {
			t.current = t.current ? this.$stage.children().index(t.current) : 0,
			t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)),
			this.reset(t.current)
		}
	},
	{
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	},
	{
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var t, e, i, n, o = this.settings.rtl ? 1 : -1,
			s = 2 * this.settings.stagePadding,
			r = this.coordinates(this.current()) + s,
			a = r + this.width() * o,
			l = [];
			for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0,
			e = Math.abs(this._coordinates[i]) + s * o,
			(this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
			this.$stage.children(".active").removeClass("active"),
			this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
			this.$stage.children(".center").removeClass("center"),
			this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
		}
	}],
	c.prototype.initializeStage = function () {
		this.$stage = this.$element.find("." + this.settings.stageClass),
		this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ">", {
			class: this.settings.stageClass
		}).wrap(l("<div/>", {
			class: this.settings.stageOuterClass
		})), this.$element.append(this.$stage.parent()))
	},
	c.prototype.initializeItems = function () {
		var t = this.$element.find(".owl-item");
		if (t.length) return this._items = t.get().map(function (t) {
			return l(t)
		}),
		this._mergers = this._items.map(function () {
			return 1
		}),
		void this.refresh();
		this.replace(this.$element.children().not(this.$stage.parent())),
		this.isVisible() ? this.refresh() : this.invalidate("width"),
		this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
	},
	c.prototype.initialize = function () {
		var t, e, i;
		(this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector: a, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
		this.initializeStage(),
		this.initializeItems(),
		this.registerEventHandlers(),
		this.leave("initializing"),
		this.trigger("initialized")
	},
	c.prototype.isVisible = function () {
		return ! this.settings.checkVisibility || this.$element.is(":visible")
	},
	c.prototype.setup = function () {
		var e = this.viewport(),
		t = this.options.responsive,
		i = -1,
		n = null;
		t ? (l.each(t, function (t) {
			t <= e && i < t && (i = Number(t))
		}), "function" == typeof(n = l.extend({},
		this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({},
		this.options),
		this.trigger("change", {
			property: {
				name: "settings",
				value: n
			}
		}),
		this._breakpoint = i,
		this.settings = n,
		this.invalidate("settings"),
		this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	},
	c.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	},
	c.prototype.prepare = function (t) {
		var e = this.trigger("prepare", {
			content: t
		});
		return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)),
		this.trigger("prepared", {
			content: e.data
		}),
		e.data
	},
	c.prototype.update = function () {
		for (var t = 0, e = this._pipe.length, i = l.proxy(function (t) {
			return this[t]
		},
		this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n),
		t++;
		this._invalidated = {},
		!this.is("valid") && this.enter("valid")
	},
	c.prototype.width = function (t) {
		switch (t = t || c.Width.Default) {
		case c.Width.Inner:
		case c.Width.Outer:
			return this._width;
		default:
			return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	},
	c.prototype.refresh = function () {
		this.enter("refreshing"),
		this.trigger("refresh"),
		this.setup(),
		this.optionsLogic(),
		this.$element.addClass(this.options.refreshClass),
		this.update(),
		this.$element.removeClass(this.options.refreshClass),
		this.leave("refreshing"),
		this.trigger("refreshed")
	},
	c.prototype.onThrottledResize = function () {
		i.clearTimeout(this.resizeTimer),
		this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	},
	c.prototype.onResize = function () {
		return !! this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
	},
	c.prototype.registerEventHandlers = function () {
		l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)),
		!1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),
		this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
			return ! 1
		})),
		this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
	},
	c.prototype.onDragStart = function (t) {
		var e = null;
		3 !== t.which && (e = l.support.transform ? {
			x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
			y: e[16 === e.length ? 13 : 5]
		}: (e = this.$stage.position(), {
			x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin: e.left,
			y: e.top
		}), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(o).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(o).one("mousemove.owl.core touchmove.owl.core", l.proxy(function (t) {
			var e = this.difference(this._drag.pointer, this.pointer(t));
			l(o).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)),
			Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		},
		this)))
	},
	c.prototype.onDragMove = function (t) {
		var e = null,
		i = null,
		n = null,
		o = this.difference(this._drag.pointer, this.pointer(t)),
		s = this.difference(this._drag.stage.start, o);
		this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
	},
	c.prototype.onDragEnd = function (t) {
		var e = this.difference(this._drag.pointer, this.pointer(t)),
		i = this._drag.stage.current,
		n = 0 < e.x ^ this.settings.rtl ? "left": "right";
		l(o).off(".owl.core"),
		this.$element.removeClass(this.options.grabClass),
		(0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? n: this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
			return ! 1
		})),
		this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	},
	c.prototype.closest = function (i, n) {
		var o = -1,
		s = this.width(),
		r = this.coordinates();
		return this.settings.freeDrag || l.each(r, l.proxy(function (t, e) {
			return "left" === n && e - 30 < i && i < e + 30 ? o = t: "right" === n && e - s - 30 < i && i < e - s + 30 ? o = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - s) && (o = "left" === n ? t + 1 : t),
			-1 === o
		},
		this)),
		this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? o = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (o = i = this.maximum())),
		o
	},
	c.prototype.animate = function (t) {
		var e = 0 < this.speed();
		this.is("animating") && this.onTransitionEnd(),
		e && (this.enter("animating"), this.trigger("translate")),
		l.support.transform3d && l.support.transition ? this.$stage.css({
			transform: "translate3d(" + t + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition: "")
		}) : e ? this.$stage.animate({
			left: t + "px"
		},
		this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: t + "px"
		})
	},
	c.prototype.is = function (t) {
		return this._states.current[t] && 0 < this._states.current[t]
	},
	c.prototype.current = function (t) {
		if (t === a) return this._current;
		if (0 === this._items.length) return a;
		if (t = this.normalize(t), this._current !== t) {
			var e = this.trigger("change", {
				property: {
					name: "position",
					value: t
				}
			});
			e.data !== a && (t = this.normalize(e.data)),
			this._current = t,
			this.invalidate("position"),
			this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	},
	c.prototype.invalidate = function (t) {
		return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")),
		l.map(this._invalidated, function (t, e) {
			return e
		})
	},
	c.prototype.reset = function (t) { (t = this.normalize(t)) !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
	},
	c.prototype.normalize = function (t, e) {
		var i = this._items.length,
		n = e ? 0 : this._clones.length;
		return ! this.isNumeric(t) || i < 1 ? t = a: (t < 0 || i + n <= t) && (t = ((t - n / 2) % i + i) % i + n / 2),
		t
	},
	c.prototype.relative = function (t) {
		return t -= this._clones.length / 2,
		this.normalize(t, !0)
	},
	c.prototype.maximum = function (t) {
		var e, i, n, o = this.settings,
		s = this._coordinates.length;
		if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
		else if (o.autoWidth || o.merge) {
			if (e = this._items.length) for (i = this._items[--e].width(), n = this.$element.width(); e--&&!((i += this._items[e].width() + this.settings.margin) > n););
			s = e + 1
		} else s = o.center ? this._items.length - 1 : this._items.length - o.items;
		return t && (s -= this._clones.length / 2),
		Math.max(s, 0)
	},
	c.prototype.minimum = function (t) {
		return t ? 0 : this._clones.length / 2
	},
	c.prototype.items = function (t) {
		return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
	},
	c.prototype.mergers = function (t) {
		return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
	},
	c.prototype.clones = function (i) {
		var e = this._clones.length / 2,
		n = e + this._items.length,
		o = function (t) {
			return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
		};
		return i === a ? l.map(this._clones, function (t, e) {
			return o(e)
		}) : l.map(this._clones, function (t, e) {
			return t === i ? o(e) : null
		})
	},
	c.prototype.speed = function (t) {
		return t !== a && (this._speed = t),
		this._speed
	},
	c.prototype.coordinates = function (t) {
		var e, i = 1,
		n = t - 1;
		return t === a ? l.map(this._coordinates, l.proxy(function (t, e) {
			return this.coordinates(e)
		},
		this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, e = Math.ceil(e))
	},
	c.prototype.duration = function (t, e, i) {
		return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
	},
	c.prototype.to = function (t, e) {
		var i = this.current(),
		n = null,
		o = t - this.relative(i),
		s = (0 < o) - (o < 0),
		r = this._items.length,
		a = this.minimum(),
		l = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r), (n = (((t = i + o) - a) % r + r) % r + a) !== t && n - o <= l && 0 < n - o && (i = n - o, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l: Math.max(a, Math.min(l, t)),
		this.speed(this.duration(i, t, e)),
		this.current(t),
		this.isVisible() && this.update()
	},
	c.prototype.next = function (t) {
		t = t || !1,
		this.to(this.relative(this.current()) + 1, t)
	},
	c.prototype.prev = function (t) {
		t = t || !1,
		this.to(this.relative(this.current()) - 1, t)
	},
	c.prototype.onTransitionEnd = function (t) {
		if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return ! 1;
		this.leave("animating"),
		this.trigger("translated")
	},
	c.prototype.viewport = function () {
		var t;
		return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth: o.documentElement && o.documentElement.clientWidth ? t = o.documentElement.clientWidth: console.warn("Can not detect viewport width."),
		t
	},
	c.prototype.replace = function (t) {
		this.$stage.empty(),
		this._items = [],
		t && (t = t instanceof jQuery ? t: l(t)),
		this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)),
		t.filter(function () {
			return 1 === this.nodeType
		}).each(l.proxy(function (t, e) {
			e = this.prepare(e),
			this.$stage.append(e),
			this._items.push(e),
			this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		},
		this)),
		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition: 0),
		this.invalidate("items")
	},
	c.prototype.add = function (t, e) {
		var i = this.relative(this._current);
		e = e === a ? this._items.length: this.normalize(e, !0),
		t = t instanceof jQuery ? t: l(t),
		this.trigger("add", {
			content: t,
			position: e
		}),
		t = this.prepare(t),
		0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
		this._items[i] && this.reset(this._items[i].index()),
		this.invalidate("items"),
		this.trigger("added", {
			content: t,
			position: e
		})
	},
	c.prototype.remove = function (t) { (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
			content: this._items[t],
			position: t
		}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: t
		}))
	},
	c.prototype.preloadAutoWidthImages = function (t) {
		t.each(l.proxy(function (t, e) {
			this.enter("pre-loading"),
			e = l(e),
			l(new Image).one("load", l.proxy(function (t) {
				e.attr("src", t.target.src),
				e.css("opacity", 1),
				this.leave("pre-loading"),
				!this.is("pre-loading") && !this.is("initializing") && this.refresh()
			},
			this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
		},
		this))
	},
	c.prototype.destroy = function () {
		for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(o).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
		this.$stage.children(".cloned").remove(),
		this.$stage.unwrap(),
		this.$stage.children().contents().unwrap(),
		this.$stage.children().unwrap(),
		this.$stage.remove(),
		this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	},
	c.prototype.op = function (t, e, i) {
		var n = this.settings.rtl;
		switch (e) {
		case "<":
			return n ? i < t: t < i;
		case ">":
			return n ? t < i: i < t;
		case ">=":
			return n ? t <= i: i <= t;
		case "<=":
			return n ? i <= t: t <= i
		}
	},
	c.prototype.on = function (t, e, i, n) {
		t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
	},
	c.prototype.off = function (t, e, i, n) {
		t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
	},
	c.prototype.trigger = function (t, e, i, n, o) {
		var s = {
			item: {
				count: this._items.length,
				index: this.current()
			}
		},
		r = l.camelCase(l.grep(["on", t, i], function (t) {
			return t
		}).join("-").toLowerCase()),
		a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
			relatedTarget: this
		},
		s, e));
		return this._supress[t] || (l.each(this._plugins, function (t, e) {
			e.onTrigger && e.onTrigger(a)
		}), this.register({
			type: c.Type.Event,
			name: t
		}), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)),
		a
	},
	c.prototype.enter = function (t) {
		l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
			this._states.current[e] === a && (this._states.current[e] = 0),
			this._states.current[e]++
		},
		this))
	},
	c.prototype.leave = function (t) {
		l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
			this._states.current[e]--
		},
		this))
	},
	c.prototype.register = function (i) {
		if (i.type === c.Type.Event) {
			if (l.event.special[i.name] || (l.event.special[i.name] = {}), !l.event.special[i.name].owl) {
				var e = l.event.special[i.name]._default;
				l.event.special[i.name]._default = function (t) {
					return ! e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
				},
				l.event.special[i.name].owl = !0
			}
		} else i.type === c.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function (t, e) {
			return l.inArray(t, this._states.tags[i.name]) === e
		},
		this)))
	},
	c.prototype.suppress = function (t) {
		l.each(t, l.proxy(function (t, e) {
			this._supress[e] = !0
		},
		this))
	},
	c.prototype.release = function (t) {
		l.each(t, l.proxy(function (t, e) {
			delete this._supress[e]
		},
		this))
	},
	c.prototype.pointer = function (t) {
		var e = {
			x: null,
			y: null
		};
		return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY),
		e
	},
	c.prototype.isNumeric = function (t) {
		return ! isNaN(parseFloat(t))
	},
	c.prototype.difference = function (t, e) {
		return {
			x: t.x - e.x,
			y: t.y - e.y
		}
	},
	l.fn.owlCarousel = function (e) {
		var n = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var t = l(this),
			i = t.data("owl.carousel");
			i || (i = new c(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
				i.register({
					type: c.Type.Event,
					name: e
				}),
				i.$element.on(e + ".owl.carousel.core", l.proxy(function (t) {
					t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
				},
				i))
			})),
			"string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
		})
	},
	l.fn.owlCarousel.Constructor = c
} (window.Zepto || window.jQuery, window, document),
function (e, i, t, n) {
	var o = function (t) {
		this._core = t,
		this._interval = null,
		this._visible = null,
		this._handlers = {
			"initialized.owl.carousel": e.proxy(function (t) {
				t.namespace && this._core.settings.autoRefresh && this.watch()
			},
			this)
		},
		this._core.options = e.extend({},
		o.Defaults, this._core.options),
		this._core.$element.on(this._handlers)
	};
	o.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	},
	o.prototype.watch = function () {
		this._interval || (this._visible = this._core.isVisible(), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	},
	o.prototype.refresh = function () {
		this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	},
	o.prototype.destroy = function () {
		var t, e;
		for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	},
	e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
} (window.Zepto || window.jQuery, window, document),
function (a, s, t, e) {
	var i = function (t) {
		this._core = t,
		this._loaded = [],
		this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {
				if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
					var e = this._core.settings,
					i = e.center && Math.ceil(e.items / 2) || e.items,
					n = e.center && -1 * i || 0,
					o = (t.property && void 0 !== t.property.value ? t.property.value: this._core.current()) + n,
					s = this._core.clones().length,
					r = a.proxy(function (t, e) {
						this.load(e)
					},
					this);
					for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop && (o -= e.lazyLoadEager, i++)); n++<i;) this.load(s / 2 + this._core.relative(o)),
					s && a.each(this._core.clones(this._core.relative(o)), r),
					o++
				}
			},
			this)
		},
		this._core.options = a.extend({},
		i.Defaults, this._core.options),
		this._core.$element.on(this._handlers)
	};
	i.Defaults = {
		lazyLoad: !1,
		lazyLoadEager: 0
	},
	i.prototype.load = function (t) {
		var e = this._core.$stage.children().eq(t),
		i = e && e.find(".owl-lazy"); ! i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function (t, e) {
			var i, n = a(e),
			o = 1 < s.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src") || n.attr("data-srcset");
			this._core.trigger("load", {
				element: n,
				url: o
			},
			"lazy"),
			n.is("img") ? n.one("load.owl.lazy", a.proxy(function () {
				n.css("opacity", 1),
				this._core.trigger("loaded", {
					element: n,
					url: o
				},
				"lazy")
			},
			this)).attr("src", o) : n.is("source") ? n.one("load.owl.lazy", a.proxy(function () {
				this._core.trigger("loaded", {
					element: n,
					url: o
				},
				"lazy")
			},
			this)).attr("srcset", o) : ((i = new Image).onload = a.proxy(function () {
				n.css({
					"background-image": 'url("' + o + '")',
					opacity: "1"
				}),
				this._core.trigger("loaded", {
					element: n,
					url: o
				},
				"lazy")
			},
			this), i.src = o)
		},
		this)), this._loaded.push(e.get(0)))
	},
	i.prototype.destroy = function () {
		var t, e;
		for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	},
	a.fn.owlCarousel.Constructor.Plugins.Lazy = i
} (window.Zepto || window.jQuery, window, document),
function (r, i, t, e) {
	var n = function (t) {
		this._core = t,
		this._previousHeight = null,
		this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": r.proxy(function (t) {
				t.namespace && this._core.settings.autoHeight && this.update()
			},
			this),
			"changed.owl.carousel": r.proxy(function (t) {
				t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
			},
			this),
			"loaded.owl.lazy": r.proxy(function (t) {
				t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			},
			this)
		},
		this._core.options = r.extend({},
		n.Defaults, this._core.options),
		this._core.$element.on(this._handlers),
		this._intervalId = null;
		var e = this;
		r(i).on("load", function () {
			e._core.settings.autoHeight && e.update()
		}),
		r(i).resize(function () {
			e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function () {
				e.update()
			},
			250))
		})
	};
	n.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	},
	n.prototype.update = function () {
		var t = this._core._current,
		e = t + this._core.settings.items,
		i = this._core.settings.lazyLoad,
		n = this._core.$stage.children().toArray().slice(t, e),
		o = [],
		s = 0;
		r.each(n, function (t, e) {
			o.push(r(e).height())
		}),
		(s = Math.max.apply(null, o)) <= 1 && i && this._previousHeight && (s = this._previousHeight),
		this._previousHeight = s,
		this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
	},
	n.prototype.destroy = function () {
		var t, e;
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	},
	r.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
} (window.Zepto || window.jQuery, window, document),
function (u, t, e, i) {
	var n = function (t) {
		this._core = t,
		this._videos = {},
		this._playing = null,
		this._handlers = {
			"initialized.owl.carousel": u.proxy(function (t) {
				t.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			},
			this),
			"resize.owl.carousel": u.proxy(function (t) {
				t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
			},
			this),
			"refreshed.owl.carousel": u.proxy(function (t) {
				t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			},
			this),
			"changed.owl.carousel": u.proxy(function (t) {
				t.namespace && "position" === t.property.name && this._playing && this.stop()
			},
			this),
			"prepared.owl.carousel": u.proxy(function (t) {
				if (t.namespace) {
					var e = u(t.content).find(".owl-video");
					e.length && (e.css("display", "none"), this.fetch(e, u(t.content)))
				}
			},
			this)
		},
		this._core.options = u.extend({},
		n.Defaults, this._core.options),
		this._core.$element.on(this._handlers),
		this._core.$element.on("click.owl.video", ".owl-video-play-icon", u.proxy(function (t) {
			this.play(t)
		},
		this))
	};
	n.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	},
	n.prototype.fetch = function (t, e) {
		var i = t.attr("data-vimeo-id") ? "vimeo": t.attr("data-vzaar-id") ? "vzaar": "youtube",
		n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
		o = t.attr("data-width") || this._core.settings.videoWidth,
		s = t.attr("data-height") || this._core.settings.videoHeight,
		r = t.attr("href");
		if (!r) throw new Error("Missing video URL.");
		if ( - 1 < (n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
		else if ( - 1 < n[3].indexOf("vimeo")) i = "vimeo";
		else {
			if (! ( - 1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
			i = "vzaar"
		}
		n = n[6],
		this._videos[r] = {
			type: i,
			id: n,
			width: o,
			height: s
		},
		e.attr("data-video", r),
		this.thumbnail(t, this._videos[r])
	},
	n.prototype.thumbnail = function (e, t) {
		var i, n, o = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;": "",
		s = e.find("img"),
		r = "src",
		a = "",
		l = this._core.settings,
		c = function (t) {
			'<div class="owl-video-play-icon"></div>',
			i = l.lazyLoad ? u("<div/>", {
				class: "owl-video-tn " + a,
				srcType: t
			}) : u("<div/>", {
				class: "owl-video-tn",
				style: "opacity:1;background-image:url(" + t + ")"
			}),
			e.after(i),
			e.after('<div class="owl-video-play-icon"></div>')
		};
		if (e.wrap(u("<div/>", {
			class: "owl-video-wrapper",
			style: o
		})), this._core.settings.lazyLoad && (r = "data-src", a = "owl-lazy"), s.length) return c(s.attr(r)),
		s.remove(),
		!1;
		"youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", c(n)) : "vimeo" === t.type ? u.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + t.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (t) {
				n = t[0].thumbnail_large,
				c(n)
			}
		}) : "vzaar" === t.type && u.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + t.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (t) {
				n = t.framegrab_url,
				c(n)
			}
		})
	},
	n.prototype.stop = function () {
		this._core.trigger("stop", null, "video"),
		this._playing.find(".owl-video-frame").remove(),
		this._playing.removeClass("owl-video-playing"),
		this._playing = null,
		this._core.leave("playing"),
		this._core.trigger("stopped", null, "video")
	},
	n.prototype.play = function (t) {
		var e, i = u(t.target).closest("." + this._core.settings.itemClass),
		n = this._videos[i.attr("data-video")],
		o = n.width || "100%",
		s = n.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (e = u('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), e.attr("width", o), "youtube" === n.type ? e.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? e.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && e.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), u(e).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
	},
	n.prototype.isInFullScreen = function () {
		var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
		return t && u(t).parent().hasClass("owl-video-frame")
	},
	n.prototype.destroy = function () {
		var t, e;
		for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	},
	u.fn.owlCarousel.Constructor.Plugins.Video = n
} (window.Zepto || window.jQuery, window, document),
function (r, t, e, i) {
	var n = function (t) {
		this.core = t,
		this.core.options = r.extend({},
		n.Defaults, this.core.options),
		this.swapping = !0,
		this.previous = void 0,
		this.next = void 0,
		this.handlers = {
			"change.owl.carousel": r.proxy(function (t) {
				t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
			},
			this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function (t) {
				t.namespace && (this.swapping = "translated" == t.type)
			},
			this),
			"translate.owl.carousel": r.proxy(function (t) {
				t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			},
			this)
		},
		this.core.$element.on(this.handlers)
	};
	n.Defaults = {
		animateOut: !1,
		animateIn: !1
	},
	n.prototype.swap = function () {
		if (1 === this.core.settings.items && r.support.animation && r.support.transition) {
			this.core.speed(0);
			var t, e = r.proxy(this.clear, this),
			i = this.core.$stage.children().eq(this.previous),
			n = this.core.$stage.children().eq(this.next),
			o = this.core.settings.animateIn,
			s = this.core.settings.animateOut;
			this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(r.support.animation.end, e).css({
				left: t + "px"
			}).addClass("animated owl-animated-out").addClass(s)), o && n.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(o))
		}
	},
	n.prototype.clear = function (t) {
		r(t.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
		this.core.onTransitionEnd()
	},
	n.prototype.destroy = function () {
		var t, e;
		for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	},
	r.fn.owlCarousel.Constructor.Plugins.Animate = n
} (window.Zepto || window.jQuery, window, document),
function (n, o, e, t) {
	var i = function (t) {
		this._core = t,
		this._call = null,
		this._time = 0,
		this._timeout = 0,
		this._paused = !0,
		this._handlers = {
			"changed.owl.carousel": n.proxy(function (t) {
				t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
			},
			this),
			"initialized.owl.carousel": n.proxy(function (t) {
				t.namespace && this._core.settings.autoplay && this.play()
			},
			this),
			"play.owl.autoplay": n.proxy(function (t, e, i) {
				t.namespace && this.play(e, i)
			},
			this),
			"stop.owl.autoplay": n.proxy(function (t) {
				t.namespace && this.stop()
			},
			this),
			"mouseover.owl.autoplay": n.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			},
			this),
			"mouseleave.owl.autoplay": n.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			},
			this),
			"touchstart.owl.core": n.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			},
			this),
			"touchend.owl.core": n.proxy(function () {
				this._core.settings.autoplayHoverPause && this.play()
			},
			this)
		},
		this._core.$element.on(this._handlers),
		this._core.options = n.extend({},
		i.Defaults, this._core.options)
	};
	i.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	},
	i.prototype._next = function (t) {
		this._call = o.setTimeout(n.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
		this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
	},
	i.prototype.read = function () {
		return (new Date).getTime() - this._time
	},
	i.prototype.play = function (t, e) {
		var i;
		this._core.is("rotating") || this._core.enter("rotating"),
		t = t || this._core.settings.autoplayTimeout,
		i = Math.min(this._time % (this._timeout || t), t),
		this._paused ? (this._time = this.read(), this._paused = !1) : o.clearTimeout(this._call),
		this._time += this.read() % t - i,
		this._timeout = t,
		this._call = o.setTimeout(n.proxy(this._next, this, e), t - i)
	},
	i.prototype.stop = function () {
		this._core.is("rotating") && (this._time = 0, this._paused = !0, o.clearTimeout(this._call), this._core.leave("rotating"))
	},
	i.prototype.pause = function () {
		this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, o.clearTimeout(this._call))
	},
	i.prototype.destroy = function () {
		var t, e;
		for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	},
	n.fn.owlCarousel.Constructor.Plugins.autoplay = i
} (window.Zepto || window.jQuery, window, document),
function (s, t, e, i) {
	"use strict";
	var n = function (t) {
		this._core = t,
		this._initialized = !1,
		this._pages = [],
		this._controls = {},
		this._templates = [],
		this.$element = this._core.$element,
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		},
		this._handlers = {
			"prepared.owl.carousel": s.proxy(function (t) {
				t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + s(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			},
			this),
			"added.owl.carousel": s.proxy(function (t) {
				t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
			},
			this),
			"remove.owl.carousel": s.proxy(function (t) {
				t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
			},
			this),
			"changed.owl.carousel": s.proxy(function (t) {
				t.namespace && "position" == t.property.name && this.draw()
			},
			this),
			"initialized.owl.carousel": s.proxy(function (t) {
				t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			},
			this),
			"refreshed.owl.carousel": s.proxy(function (t) {
				t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			},
			this)
		},
		this._core.options = s.extend({},
		n.Defaults, this._core.options),
		this.$element.on(this._handlers)
	};
	n.Defaults = {
		nav: !1,
		navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
		navSpeed: !1,
		navElement: 'button type="button" role="presentation"',
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	},
	n.prototype.initialize = function () {
		var t, i = this._core.settings;
		for (t in this._controls.$relative = (i.navContainer ? s(i.navContainer) : s("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = s("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", s.proxy(function (t) {
			this.prev(i.navSpeed)
		},
		this)), this._controls.$next = s("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", s.proxy(function (t) {
			this.next(i.navSpeed)
		},
		this)), i.dotsData || (this._templates = [s('<button role="button">').addClass(i.dotClass).append(s("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? s(i.dotsContainer) : s("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", s.proxy(function (t) {
			var e = s(t.target).parent().is(this._controls.$absolute) ? s(t.target).index() : s(t.target).parent().index();
			t.preventDefault(),
			this.to(e, i.dotsSpeed)
		},
		this)), this._overrides) this._core[t] = s.proxy(this[t], this)
	},
	n.prototype.destroy = function () {
		var t, e, i, n, o;
		for (t in o = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
		for (e in this._controls)"$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();
		for (n in this.overides) this._core[n] = this._overrides[n];
		for (i in Object.getOwnPropertyNames(this))"function" != typeof this[i] && (this[i] = null)
	},
	n.prototype.update = function () {
		var t, e, i = this._core.clones().length / 2,
		n = i + this._core.items().length,
		o = this._core.maximum(!0),
		s = this._core.settings,
		r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
		if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy) for (this._pages = [], t = i, e = 0; t < n; t++) {
			if (r <= e || 0 === e) {
				if (this._pages.push({
					start: Math.min(o, t - i),
					end: t - i + r - 1
				}), Math.min(o, t - i) === o) break;
				e = 0,
				0
			}
			e += this._core.mergers(this._core.relative(t))
		}
	},
	n.prototype.draw = function () {
		var t, e = this._core.settings,
		i = this._core.items().length <= e.items,
		n = this._core.relative(this._core.current()),
		o = e.loop || e.rewind;
		this._controls.$relative.toggleClass("disabled", !e.nav || i),
		e.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))),
		this._controls.$absolute.toggleClass("disabled", !e.dots || i),
		e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(s.inArray(this.current(), this._pages)).addClass("active"))
	},
	n.prototype.onTrigger = function (t) {
		var e = this._core.settings;
		t.page = {
			index: s.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
		}
	},
	n.prototype.current = function () {
		var i = this._core.relative(this._core.current());
		return s.grep(this._pages, s.proxy(function (t, e) {
			return t.start <= i && t.end >= i
		},
		this)).pop()
	},
	n.prototype.getPosition = function (t) {
		var e, i, n = this._core.settings;
		return "page" == n.slideBy ? (e = s.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e: --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy: e -= n.slideBy),
		e
	},
	n.prototype.next = function (t) {
		s.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
	},
	n.prototype.prev = function (t) {
		s.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
	},
	n.prototype.to = function (t, e, i) {
		var n; ! i && this._pages.length ? (n = this._pages.length, s.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e)) : s.proxy(this._overrides.to, this._core)(t, e)
	},
	s.fn.owlCarousel.Constructor.Plugins.Navigation = n
} (window.Zepto || window.jQuery, window, document),
function (n, o, t, e) {
	"use strict";
	var i = function (t) {
		this._core = t,
		this._hashes = {},
		this.$element = this._core.$element,
		this._handlers = {
			"initialized.owl.carousel": n.proxy(function (t) {
				t.namespace && "URLHash" === this._core.settings.startPosition && n(o).trigger("hashchange.owl.navigation")
			},
			this),
			"prepared.owl.carousel": n.proxy(function (t) {
				if (t.namespace) {
					var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!e) return;
					this._hashes[e] = t.content
				}
			},
			this),
			"changed.owl.carousel": n.proxy(function (t) {
				if (t.namespace && "position" === t.property.name) {
					var i = this._core.items(this._core.relative(this._core.current())),
					e = n.map(this._hashes, function (t, e) {
						return t === i ? e: null
					}).join();
					if (!e || o.location.hash.slice(1) === e) return;
					o.location.hash = e
				}
			},
			this)
		},
		this._core.options = n.extend({},
		i.Defaults, this._core.options),
		this.$element.on(this._handlers),
		n(o).on("hashchange.owl.navigation", n.proxy(function (t) {
			var e = o.location.hash.substring(1),
			i = this._core.$stage.children(),
			n = this._hashes[e] && i.index(this._hashes[e]);
			void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
		},
		this))
	};
	i.Defaults = {
		URLhashListener: !1
	},
	i.prototype.destroy = function () {
		var t, e;
		for (t in n(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	},
	n.fn.owlCarousel.Constructor.Plugins.Hash = i
} (window.Zepto || window.jQuery, window, document),
function (o, t, e, s) {
	function i(t, i) {
		var n = !1,
		e = t.charAt(0).toUpperCase() + t.slice(1);
		return o.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
			if (r[e] !== s) return n = !i || e,
			!1
		}),
		n
	}
	function n(t) {
		return i(t, !0)
	}
	var r = o("<support>").get(0).style,
	a = "Webkit Moz O ms".split(" "),
	l = {
		transition: {
			end: {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd",
				transition: "transitionend"
			}
		},
		animation: {
			end: {
				WebkitAnimation: "webkitAnimationEnd",
				MozAnimation: "animationend",
				OAnimation: "oAnimationEnd",
				animation: "animationend"
			}
		}
	},
	c = function () {
		return !! i("transform")
	},
	u = function () {
		return !! i("perspective")
	},
	h = function () {
		return !! i("animation")
	};
	(function () {
		return !! i("transition")
	})() && (o.support.transition = new String(n("transition")), o.support.transition.end = l.transition.end[o.support.transition]),
	h() && (o.support.animation = new String(n("animation")), o.support.animation.end = l.animation.end[o.support.animation]),
	c() && (o.support.transform = new String(n("transform")), o.support.transform3d = u())
} (window.Zepto || window.jQuery, window, document),
function (l) {
	l.fn.unveil = function (t, e) {
		function i() {
			var t = a.filter(function () {
				var t = l(this);
				if (!t.is(":hidden")) {
					var e = s.scrollTop(),
					i = e + s.height(),
					n = t.offset().top,
					o = n + t.height();
					return e - r <= o && n <= i + r
				}
			});
			n = t.trigger("unveil"),
			a = a.not(n)
		}
		var n, s = l(window),
		r = t || 0,
		o = 1 < window.devicePixelRatio ? "data-src-retina": "data-src",
		a = this;
		return this.one("unveil", function () {
			var t = this.getAttribute(o);
			(t = t || this.getAttribute("data-src")) && (this.setAttribute("src", t), "function" == typeof e && e.call(this))
		}),
		s.on("scroll.unveil resize.unveil lookup.unveil", i),
		i(),
		this
	}
} (window.jQuery || window.Zepto),
function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
} (function (f) {
	var n = /\+/g;
	function g(t) {
		return v.raw ? t: encodeURIComponent(t)
	}
	function m(t, e) {
		var i = v.raw ? t: function (t) {
			0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
			try {
				return t = decodeURIComponent(t.replace(n, " ")),
				v.json ? JSON.parse(t) : t
			} catch(t) {}
		} (t);
		return f.isFunction(e) ? e(i) : i
	}
	var v = f.cookie = function (t, e, i) {
		if (void 0 !== e && !f.isFunction(e)) {
			if ("number" == typeof(i = f.extend({},
			v.defaults, i)).expires) {
				var n = i.expires,
				o = i.expires = new Date;
				o.setTime( + o + 864e5 * n)
			}
			return document.cookie = [g(t), "=", (s = e, g(v.json ? JSON.stringify(s) : String(s))), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path: "", i.domain ? "; domain=" + i.domain: "", i.secure ? "; secure": ""].join("")
		}
		for (var s, r, a = t ? void 0 : {},
		l = document.cookie ? document.cookie.split("; ") : [], c = 0, u = l.length; c < u; c++) {
			var h = l[c].split("="),
			d = (r = h.shift(), v.raw ? r: decodeURIComponent(r)),
			p = h.join("=");
			if (t && t === d) {
				a = m(p, e);
				break
			}
			t || void 0 === (p = m(p)) || (a[d] = p)
		}
		return a
	};
	v.defaults = {},
	f.removeCookie = function (t, e) {
		return void 0 !== f.cookie(t) && (f.cookie(t, "", f.extend({},
		e, {
			expires: -1
		})), !f.cookie(t))
	}
});
var Register = function () {
	this.resources = [];
	this.loaders = []
};
Register.prototype = {
	addResource: function (b) {
		if (!this.isRegistered(b)) {
			var a = {
				src: b,
				loaded: false
			};
			this.resources.push(a)
		}
	},
	addLoader: function (a) {
		this.loaders.push(a)
	},
	setLoaded: function (b) {
		for (var a = 0; a < this.resources.length; a++) {
			if (b == this.resources[a].src) {
				this.resources[a].loaded = true
			}
		}
	},
	isLoaded: function (b) {
		for (var a = 0; a < this.resources.length; a++) {
			if (b == this.resources[a].src && this.resources[a].loaded) {
				return true
			}
		}
		return false
	},
	isRegistered: function (b) {
		for (var a = 0; a < this.resources.length; a++) {
			if (b == this.resources[a].src) {
				return true
			}
		}
		return false
	},
	fireLoaderCallback: function () {
		for (var a = 0; a < this.loaders.length; a++) {
			this.loaders[a].fireCallback()
		}
	}
};
var register = new Register();
var Loader = function () {
	this.isFiredCallback = false;
	this.resources = [];
	this.callback = ""
};
Loader.prototype = {
	require: function (a, e) {
		var c = this;
		register.addLoader(c);
		this.callback = e;
		for (var d = 0; d < a.length; d++) {
			var b = is_script_file(a[d]);
			if (b) {
				this.resources.push(a[d]);
				this.writeScript(a[d])
			} else {
				this.writeCSS(a[d])
			}
		}
	},
	fireCallback: function () {
		if (!this.isFiredCallback) {
			var b = true;
			for (var a = 0; a < this.resources.length; a++) {
				b = b && register.isLoaded(this.resources[a])
			}
			if (b && typeof this.callback == "function") {
				this.callback.call();
				this.isFiredCallback = true
			}
		}
	},
	writeCSS: function (g) {
		var a = '<link rel="stylesheet" type="text/css" href="' + g + '"/>';
		var c = $("head")[0];
		var f = $(c).children();
		var d = false;
		for (var b = 0; b < f.length; b++) {
			var e = f[b];
			if ($(e).attr("href") == g) {
				d = true;
				break
			}
		}
		if (!d) {
			$(c).append(a)
		}
	},
	writeScript: function (a) {
		if (!register.isRegistered(a)) {
			register.addResource(a);
			$.ajax({
				url: a,
				dataType: "script",
				cache: true
			}).done(function (b) {
				register.setLoaded(a);
				register.fireLoaderCallback()
			})
		} else {
			if (register.isLoaded(a)) {
				register.fireLoaderCallback()
			}
		}
	}
};
function is_script_file(a) {
	if (a.indexOf(".js") > -1 || a.indexOf("googleapis") > -1) {
		return true
	}
	return false
}
jQuery.fn.bpvToggle = function (a) {
	$(this).click(function (d) {
		d.preventDefault();
		var c = $(this).attr("data-target");
		if ($(c).length == 0) {
			return false
		}
		if (typeof a == "function") {
			a.call(this, {
				id: c
			})
		}
		var b = $(".bpv-toggle-icon", $(this));
		if ($(b).hasClass("icon-more-phone-down")) {
			$(b).toggleClass("icon-more-phone-up")
		}
		$(c).not(":animated").slideToggle("slow", "swing", function () {
			if ($(b).hasClass("icon-arrow-right-white-down")) {
				$(b).toggleClass("icon-arrow-right-white-up")
			}
			if ($(b).hasClass("icon-chevron-down")) {
				$(b).toggleClass("icon-chevron-up")
			}
			if ($(b).hasClass("glyphicon-triangle-right")) {
				$(b).toggleClass("glyphicon-triangle-bottom")
			}
		})
	})
};
jQuery.fn.center = function () {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	return this
};
var FORMAT_DATE = "dd/mm/yy";
var FORMAT_DATE_CALENDAR = "dd/mm/yy";
is_mobile_screen = function () {
	if (window.matchMedia("(max-width: 768px)").matches) {
		return true
	}
	return false
};
function go_url(a) {
	window.location = a
}
function go_check_rate_position() {
	$("html, body").animate({
		scrollTop: $(".bpv-check-rate-form").offset().top
	},
	"fast")
}
function go_position(a) {
	$("html, body").animate({
		scrollTop: a
	},
	"fast")
}
function shuffle_assoc(a) {
	var d, c, b;
	for (d = a.length - 1; d > 0; d--) {
		c = Math.floor(Math.random() * (d + 1));
		b = a[d];
		a[d] = a[c];
		a[c] = b
	}
	return a
}
function go_position_top() {
	$("html, body").animate({
		scrollTop: 0
	},
	"fast")
}
function go_position_id(f, d, e) {
	var b = is_mobile_screen();
	var a = 0;
	var c = 0;
	if ($("#tab-details").length > 0 && !b) {
		c = 50
	}
	if (b) {
		a = parseInt($(".bpv-header").height()) + 5
	}
	if (d == undefined) {
		d = "fast"
	}
	if (e == undefined) {
		e = 0
	}
	$("html, body").animate({
		scrollTop: ($(f).offset().top - a - c - e)
	},
	d)
}
function get_url_var(b, c) {
	var a = new RegExp(b + "=([^&]*)", "i").exec(c);
	return a && unescape(a[1]) || ""
}
function show_more_photos() {
	var b = $("#show_more_photos").attr("show");
	var a = $("#show_more_photos").text();
	if (b == "hide") {
		$(".more-photos").show();
		$("#show_more_photos").attr("show", "show");
		a = a.replace("[+]", "[-]")
	} else {
		$(".more-photos").hide();
		$("#show_more_photos").attr("show", "hide");
		a = a.replace("[+]", "[-]")
	}
	$("#show_more_photos").text(a)
}
function show_more_rooms() {
	var b = $("#show_more_rooms").attr("show");
	var a = $("#show_more_rooms").text();
	if (b == "hide") {
		$(".more-rooms").show();
		$("#show_more_rooms").attr("show", "show");
		a = a.replace("[+]", "[-]")
	} else {
		$(".more-rooms").hide();
		$(".more-rooms").removeClass("visible-xs");
		$("#show_more_rooms").attr("show", "hide");
		a = a.replace("[-]", "[+]")
	}
	$("#show_more_rooms").text(a)
}
function show_more(c) {
	var b = $(c).attr("show");
	var a = $(c).text();
	if (b == "hide") {
		$(".hidden-item").show();
		$(c).attr("show", "show");
		a = a.replace("[+]", "[-]")
	} else {
		$(".hidden-item").hide();
		$(c).attr("show", "hide");
		a = a.replace("[+]", "[-]")
	}
	$(c).text(a)
}
function show_more_hotel_des(c) {
	var b = $("." + c).attr("data-name");
	if ($("." + c).attr("data-show") == "0") {
		$("." + b).removeClass("hide");
		$("." + c).attr("data-show", "1");
		var a = $("." + c).text();
		$("." + c).text(a.replace("+", "-"))
	} else {
		$("." + b).addClass("hide");
		$("." + c).attr("data-show", "0");
		var a = $("." + c).text();
		$("." + c).text(a.replace("-", "+"))
	}
}
function change_search() {
	$(".bpv-search-overview").hide();
	$(".bpv-search-left").show()
}
function go_top(a) {
	if (a == undefined) {
		a = "fast"
	}
	$("html, body").animate({
		scrollTop: 0
	},
	a)
}
function bpv_format_currency(c, d) {
	c = c.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
	if (c.length > 3) {
		var b = c.substring(0, c.length - 3);
		var a = c.substring(c.length - 3, c.length);
		c = b + a + "" + d
	}
	return c
}
function number_format(a) {
	a = a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
	return a
}
function number_format_2(a) {
	a = a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	return a
}
var dateFormat = function (b) {
	pad = function (f, d) {
		f = String(f);
		d = d || 2;
		while (f.length < d) {
			f = "0" + f
		}
		return f
	};
	var c = b.getDate();
	var a = b.getMonth();
	a++;
	var e = b.getFullYear();
	return pad(c) + "/" + pad(a) + "/" + e
};
var get_JS_Date = function (a) {
	var b = a.split("/");
	return new Date(parseInt(b[2], 10), [parseInt(b[1], 10) - 1], parseInt(b[0], 10), 0, 0, 0, 0)
};
function check_date(d) {
	var a = /^\d{2}\/\d{2}\/\d{4}$/;
	var g = false;
	if (!a.test(d)) {
		return false
	} else {
		var b = d.split("/")[0];
		var f = d.split("/")[1];
		var c = d.split("/")[2];
		var e = new Date(c, f - 1, b);
		if ((e.getMonth() + 1 != f) || (e.getDate() != b) || (e.getFullYear() != c)) {
			g = false
		} else {
			g = true
		}
	}
	if (g == false) {
		input.select()
	}
	return g
}
function initGUI() {}
function get_favourite() {
	$.ajax({
		url: "/get-favourite/",
		type: "GET",
		dataType: "json",
		success: function (a) {
			if (a != "" && a != undefined) {
				$(".btn-block.btn-favourite").each(function () {
					var b = $(this).attr("data-id");
					for (var c = 0; c < a.length; c++) {
						var d = a[c];
						if (b == d) {
							$(".btn-favourite-" + b).attr("data-fav", 1);
							var f = $(".btn-favourite-" + b).attr("data-text-del");
							if (f != "" && f != undefined) {
								var e = $(".btn-favourite-" + b).hasClass("btn-add-favourite");
								if (e) {
									$(".btn-favourite-" + b).removeClass("btn-add-favourite");
									$(".btn-favourite-" + b + " span").removeClass("icon-favourite-blue");
									$(".btn-favourite-" + b).addClass("btn-del-favourite");
									$(".btn-favourite-" + b + " span").addClass("icon-favourite-red");
									$(".btn-favourite-" + b + " .text").text(f)
								}
							} else {
								$(".btn-favourite-" + b).removeClass("icon-item-favorite");
								$(".btn-favourite-" + b).addClass("icon-item-favorited")
							}
						}
					}
				})
			}
		}
	})
}
function my_favourite(c, b) {
	var a = $(".btn-block.btn-favourite").attr("data-fav");
	if (a == 1) {
		delete_my_favourite(c, b)
	} else {
		add_my_favourite(c, b)
	}
}
function add_my_favourite(b, a) {
	$.ajax({
		url: "/add-my-favourite/",
		type: "POST",
		cache: false,
		data: {
			id: b,
			module: a
		},
		success: function (d) {
			$(".btn-block.btn-favourite").attr("data-fav", 1);
			var c = $(".fav-destop-header").hasClass("favourite-destop");
			if (!c) {
				$(".fav-destop-header").addClass("favourite-destop")
			}
			$(".favourite-header").show();
			var e = $(".btn-block.btn-favourite").attr("data-text-del");
			$(".fav-destop-header").html(d);
			$(".fav-mobile").html(d);
			$(".btn-favourite").removeClass("btn-add-favourite");
			$(".btn-favourite span").removeClass("icon-favourite-blue");
			$(".btn-favourite").addClass("btn-del-favourite");
			$(".btn-favourite span").addClass("icon-favourite-red");
			$(".btn-favourite .text").text(e)
		},
		error: function (e, d, c) {}
	})
}
function delete_my_favourite(b, a) {
	$.ajax({
		url: "/delete-my-favourite/",
		type: "POST",
		cache: false,
		data: {
			id: b,
			module: a
		},
		success: function (c) {
			if (c == "") {
				$(".fav-destop-header").removeClass("favourite-destop");
				$(".favourite-header").hide()
			}
			$(".btn-block.btn-favourite").attr("data-fav", 0);
			var d = $(".btn-block.btn-favourite").attr("data-text-add");
			$(".fav-destop-header").html(c);
			$(".fav-mobile").html(c);
			$(".btn-favourite").removeClass("btn-del-favourite");
			$(".btn-favourite").addClass("btn-add-favourite");
			$(".btn-favourite span").removeClass("icon-favourite-red");
			$(".btn-favourite span").addClass("icon-favourite-blue");
			$(".btn-favourite .text").text(d)
		},
		error: function (e, d, c) {}
	})
}
function load_favourite_header() {
	$.ajax({
		url: "/get-header-favourite/",
		type: "GET",
		cache: false,
		success: function (a) {
			if (a != "") {
				$(".fav-destop-header").html(a);
				$(".fav-destop-header").addClass("favourite-destop");
				$(".fav-mobile").html(a)
			}
		},
		error: function (c, b, a) {}
	})
}
init_carousel = function (e, c, b, d) {
	if (d == "" || d == undefined) {
		d = false
	}
	if (c == "" || c == undefined) {
		c = 1
	}
	if ((b == "" || b == undefined) && b != false) {
		b = true
	}
	$(e).owlCarousel({
		lazyLoad: true,
		video: true,
		onInitialized: function () {
			reset_video_size(e)
		},
		onResized: function () {
			reset_video_size(e)
		},
		navText: ['<i class="glyphicon glyphicon-menu-left"></i>', '<i class="glyphicon glyphicon glyphicon-menu-right"></i>'],
		responsiveClass: true,
		autoplay: d,
		autoplayHoverPause: true,
		responsive: {
			0 : {
				items: 1,
				nav: true
			},
			768 : {
				items: c,
				nav: true
			}
		},
		loop: b
	});
	var a = $(e);
	return a
};
function init_facebook() { (function (e, a, f) {
		var c, b = e.getElementsByTagName(a)[0];
		if (e.getElementById(f)) {
			return
		}
		c = e.createElement(a);
		c.id = f;
		c.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&autoLogAppEvents=1&version=v3.1&appId=142757919714397";
		b.parentNode.insertBefore(c, b)
	} (document, "script", "facebook-jssdk"))
}
function is_hotline_time() {
	var b = false;
	var c = new Date();
	var a = c.getHours();
	b = a >= 8 && a < 22 ? true: false;
	return b
}
function create_view_phone_number(a) {
	var b = "";
	b += '<div class="clearfix">';
	b += '	<span class="pull-left pd-left-5" style="padding-top: 3px; width: 15%">';
	b += '		<span class="icon icon-phone-header"></span>';
	b += "	</span>";
	b += '	<div class="pull-left" style="padding-top: 3px; width: 85%">';
	b += '		<div class="phone-item" style="font-size: 14px; display: inline-block;"><span style="text-transform: uppercase; margin-right:11px">HN: </span>' + a.hn + "</div>";
	b += '		<div class="phone-item" style="font-size: 14px; display: inline-block;"><span style="text-transform: uppercase;">HCM: </span>' + a.hcm + "</div>";
	b += "	</div>";
	b += "</div>";
	return b
}
function create_view_list_hotline(a) {
	var c = "";
	c += '<div class="pull-right pd-right-0 pd-left-0" style="padding-top: 3px;">';
	c += '<div class="text-right">';
	for (var b = 0; b < a.length; b++) {
		if (b < 3) {
			c += '<div class="text-left" style="padding-left: 5px;"> ' + a[b].hotline_number + " </div>"
		}
	}
	c += "</div>";
	c += "</div>";
	return c
}
function is_working_time() {
	var e = new Date();
	var a = e.getHours();
	var c = e.getMinutes();
	var b = e.getDay();
	var d = false;
	if (b == 0) {
		d = false
	} else {
		if (b == 6) {
			d = a >= 8 && a < 12 ? true: false
		} else {
			d = a >= 8 && a < 17 ? true: false;
			if (a == 17) {
				d = c <= 30 ? true: false
			}
		}
	}
	return d
}
function check_working_time(d) {
	var f = new Date(d);
	var a = f.getHours();
	var c = f.getMinutes();
	var b = f.getDay();
	var e = false;
	if (b == 0) {
		e = false
	} else {
		if (b == 6) {
			e = a >= 8 && a < 12 ? true: false
		} else {
			e = a >= 8 && a < 17 ? true: false;
			if (a == 17) {
				e = c <= 30 ? true: false
			}
		}
	}
	return e
}
function get_hot_line() {
	var b = new Date();
	var a = $("#current_menu").val();
	$.ajax({
		url: "/get-hot-line/?menu=" + a + "&t=" + b.getTime(),
		type: "GET",
		dataType: "json",
		success: function (c) {
			if (c != "") {
				$("#hd_email_support").hide();
				$("#hd_time_working").show();
				$("#hd_phone_support").html(c);
				$("#hd_phone_support_mb").show();
				$(".phone-footer").show();
				$("#bpv_header").css("height", "90px")
			} else {
				$("#hd_phone_support_mb").hide();
				$("#bpv_header").css("height", "53px");
				$("#hd_time_working").hide();
				$(".phone-footer").hide();
				$("#hd_email_support").show()
			}
		},
		error: function (e, d, c) {}
	})
}
function check_show_hotline_working_time(a, b) {
	$.ajax({
		url: "/check-show-hotline-working-time/" + a + "/" + b + "/",
		type: "GET",
		success: function (c) {
			if (c != "") {
				$(".tailor-make-tour .hotline").html(c);
				$(".bpv-quick-contact .hotline").html(c)
			} else {
				if (a == "4") {
					$(".bpv-quick-contact").hide()
				}
			}
		},
		error: function (e, d, c) {}
	})
}
function create_view_phone_number_mobile(g, b) {
	var e = "";
	if (is_working_time() || is_hotline_time()) {
		if (is_working_time()) {
			e += '<div class="row bpv-header-phone text-center">';
			e += '	<div class="col-xs-6">';
			e += '		<a class="btn-call pull-right" href="tel:' + g.hn + '">';
			e += "			<span>HN: </span><span>" + g.hn + "</span>";
			e += "	</a>";
			e += "	</div>";
			e += '	<div class="col-xs-6 pd-left-0">';
			e += '		<a class="btn-call pull-left" href="tel:' + g.hcm + '">';
			e += "			<span>HCM: </span><span>" + g.hcm + "</span>";
			e += "		</a>";
			e += "	</div>";
			e += "</div>"
		} else {
			e += '<div class="row bpv-header-phone">';
			for (var d = 0; d < b.length; d++) {
				var j = "";
				var c = "";
				if (b.length > 1) {
					var a = "col-xs-6";
					c = d == 0 ? "pd-right-5 ": "pd-left-5 ";
					j = d == 0 ? "pull-right": "pull-left";
					var f = "";
					var h = "padding: 3px 20px;"
				} else {
					var a = "col-xs-12";
					var f = "padding: 4px 0;";
					var h = "padding: 4px 20px; font-size:15px;"
				}
				if (d < 2) {
					e += '<div class="' + c + a + '" style="' + f + '">';
					e += '<a class="btn-call ' + j + '" style="' + h + '" href="tel:' + b[d].hotline_number + '">';
					e += "<span>" + b[d].hotline_number + "</span>";
					e += "</a>";
					e += "</div>"
				}
			}
			e += "</div>"
		}
		$("#bpv_phone_header_").html("");
		$("#bpv_phone_header_").html(e)
	} else {
		$("#bpv_header").css("height", "53px")
	}
}
function get_hotline_box(a, b) {
	$.ajax({
		url: "/get-hotline-box/",
		type: "POST",
		cache: false,
		data: {
			display_on: a,
			on_sidebar: b
		},
		success: function (c) {
			if (c != "") {
				$("#hotline_support_box").html(c)
			} else {
				$("#hotline_support_box").html("")
			}
		},
		error: function (e, d, c) {
			$("#hotline_support_box").html("")
		}
	})
}
function get_list_hot_line(g) {
	var c = is_mobile_screen();
	if (c) {
		var e = list.today_hotline;
		create_view_phone_number_mobile(list.phone_number, shuffle_assoc(e))
	} else {
		var a = create_view_phone_number(list.phone_number);
		if (is_working_time()) {
			var f = list.list_hotline;
			var b = create_view_list_hotline(shuffle_assoc(f))
		} else {
			if (is_hotline_time()) {
				var f = list.today_hotline;
				var b = create_view_list_hotline(shuffle_assoc(f))
			}
		}
		var d = "";
		if (is_working_time() || is_hotline_time()) {
			if (is_working_time()) {
				d += '<div class="clearfix" style="position: absolute;right: 0px;">';
				d += '	<div class="pul-right col-xs-2" style="width: 29%;">';
				d += "	</div>";
				d += '	<div id="phone_contact" style="width: 38%;" class="pul-right col-xs-5 pd-right-0 pd-left-0 hot-line">';
				d += a;
				d += "	</div>";
				d += '	<div class="pul-right col-xs-5 pd-left-0" style="width: 33%;">';
				d += '		<span id="bpv_list_hotline" style="font-size: 14px; width: 36%; text-align: right; color: rgb(51, 51, 51);">';
				d += b;
				d += '			<div class="pull-right text-right pd-left-5" style="padding-top: 3px;">';
				d += '				<span class="icon icon-hotline-header"></span>';
				d += "			</div>";
				d += "		</span>";
				d += "	</div>";
				d += "</div>"
			} else {
				d += '<div class="clearfix" style="position: absolute;right: 0px;">';
				d += '	<div class="pul-right col-xs-2" style="width: 29%;">';
				d += "	</div>";
				d += '	<div id="phone_contact" style="width: 38%;" class="pul-right col-xs-5 pd-right-0 pd-left-0 hot-line">';
				d += "	</div>";
				d += '	<div class="pul-right col-xs-5 pd-left-0" style="width: 100%;">';
				d += '		<span id="bpv_list_hotline" style="font-size: 14px; width: 36%; text-align: right; color: rgb(51, 51, 51);">';
				d += b;
				d += '			<div class="pull-right text-right pd-left-5" style="padding-top: 3px;">';
				d += '				<div class="text-price" style="text-transform: uppercase; font-weight: bold;">Hotline:</div>';
				d += "			</div>";
				d += "		</span>";
				d += "	</div>";
				d += "</div>"
			}
			$("#bpv_phone_header_").html("");
			$("#bpv_phone_header_").html(d)
		} else {
			$("#bpv_hotline_contact").show()
		}
	}
}
function get_quick_contact_popup(a) {
	$.ajax({
		url: "/get-contact-popup/",
		type: "GET",
		success: function (b) {
			if (b != "") {
				$(a).html(b)
			}
		},
		error: function (d, c, b) {}
	})
}
function load_arrow_offer(f, e, b) {
	if (typeof e == "undefined") {
		e = 0
	}
	var d = $.trim(f).split(",");
	var a = d.length;
	for (i = 0; i < a; i++) {
		var c = $.trim(d[i]);
		if ($(c).length) {
			$(c).each(function () {
				var h = this;
				var g = 0;
				if (b) {
					$(h).find(".item-offer").each(function () {
						if ($(this).height() > g) {
							g = parseInt($(this).height(), 10)
						}
					});
					$(h).find(".item-offer").css("height", g + 10 + "px")
				} else {
					g = parseInt($(h).find(".item-offer").height(), 10)
				}
				if (g > 0) {
					g = (g + 10) / 2;
					$(h).find(".item-offer-arrow-before").css("border-width", g + "px 16px");
					$(h).find(".item-offer-arrow-after").css("border-width", g + "px 15px");
					$(h).css("margin-right", e + "px")
				}
			})
		}
	}
}
function findmax(e) {
	var b = 0,
	d = e.length,
	c;
	for (c = 0; c < d; c++) {
		if (e[c] > b) {
			b = e[c]
		}
	}
	return b
}
function equal_height(f, a) {
	if (a == undefined) {
		a = 0
	}
	var d = $.trim(f).split(",");
	for (i = 0; i < d.length; i++) {
		var g = $.trim(d[i]);
		if ($(g).length) {
			var c = 0;
			var e = false;
			var b = "";
			$(g).each(function (j) {
				var h = $(this).outerHeight(true);
				if (b != "" && b != h) {
					e = true
				}
				c = h > c ? h: c;
				b = h
			});
			$(g).css("height", c + a)
		}
	}
}
function list_item_equal_height(b) {
	var a = $.trim(b).split(",");
	for (i = 0; i < a.length; i++) {
		var c = $.trim(a[i]);
		if ($(c).length) {
			tmpCount = 0;
			$(c).each(function (d) {
				var e = 0;
				var f = [];
				$(".eql_item_" + tmpCount).each(function (g) {
					f.push($(this).height())
				});
				e = findmax(f);
				$(".eql_item_" + tmpCount).css("height", e);
				tmpCount++
			})
		}
	}
}
function list_multiple_item_equal_height(b) {
	var a = $.trim(b).split(",");
	for (i = 0; i < a.length; i++) {
		var c = $.trim(a[i]);
		if ($(c).length) {
			tmpCount = 0;
			$(c).each(function (d) {
				var e = 0;
				var f = [];
				$(c + "_eql_item_" + tmpCount).each(function (g) {
					f.push($(this).height())
				});
				e = findmax(f);
				$(c + "_eql_item_" + tmpCount).css("height", e);
				tmpCount++
			})
		}
	}
}
function set_up_hotel_autocomplete(c) {
	if (typeof c !== "undefined" && c) {
		c = true
	} else {
		c = false
	}
	var b = new Bloodhound({
		datumTokenizer: function (f) {
			return Bloodhound.tokenizers.whitespace(f.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest_hotel_destinations/?query=%QUERY"
		}
	});
	var a = new Bloodhound({
		datumTokenizer: function (f) {
			return Bloodhound.tokenizers.whitespace(f.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest_hotels/?query=%QUERY"
		}
	});
	b.initialize();
	a.initialize();
	$("#destination").typeahead({
		minLength: 2,
		highlight: true,
		hint: false
	},
	{
		displayKey: "name",
		source: b.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Tỉnh/Thành Phố/Địa danh</span>'
		}
	},
	{
		displayKey: "name",
		source: a.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Khách Sạn</span>'
		}
	}).on("typeahead:selected", function (g, f) {
		$("#hotel_destination_input").val(f.url_title);
		$("#oid").val(f.type + "-" + f.id);
		$("#destination").data("selected_value", $("#destination").val());
		if (!c) {
			add_clear_search("#destination")
		}
		$("#destination").popover("hide")
	});
	var d = new Bloodhound({
		datumTokenizer: function (f) {
			return Bloodhound.tokenizers.whitespace(f.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest_hotel_destinations/?query=%QUERY"
		}
	});
	var e = new Bloodhound({
		datumTokenizer: function (f) {
			return Bloodhound.tokenizers.whitespace(f.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest_hotels/?query=%QUERY"
		}
	});
	d.initialize();
	e.initialize();
	$("#m_destination").typeahead({
		minLength: 2,
		highlight: true,
		hint: false
	},
	{
		displayKey: "name",
		source: b.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Tỉnh/Thành Phố/Địa danh</span>'
		}
	},
	{
		displayKey: "name",
		source: a.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Khách Sạn</span>'
		}
	}).on("typeahead:selected", function (g, f) {
		$("#hotel_destination_input").val(f.url_title);
		$("#oid").val(f.type + "-" + f.id);
		$("#m_destination").data("selected_value", $("#m_destination").val());
		if (!c) {
			add_clear_search("#m_destination")
		}
	})
}
function set_up_m_hotel_autocomplete() {
	var a = new Bloodhound({
		datumTokenizer: function (c) {
			return Bloodhound.tokenizers.whitespace(c.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest_hotel_destinations/?query=%QUERY"
		}
	});
	var b = new Bloodhound({
		datumTokenizer: function (c) {
			return Bloodhound.tokenizers.whitespace(c.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest_hotels/?query=%QUERY"
		}
	});
	a.initialize();
	b.initialize();
	$(".popover-content .m_destination").typeahead({
		minLength: 2,
		highlight: true,
		hint: false
	},
	{
		displayKey: "name",
		source: a.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Tỉnh/Thành Phố/Địa danh</span>'
		}
	},
	{
		displayKey: "name",
		source: b.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Khách Sạn</span>'
		}
	}).on("typeahead:selected", function (d, c) {
		$("#hotel_destination_input").val(c.url_title);
		$("#oid").val(c.type + "-" + c.id);
		$("#destination").val(c.name);
		$(".m_destination").data("selected_value", $(".m_destination").val());
		$("#destination").click()
	})
}
function set_up_tour_autocomplete() {
	var b = is_mobile_screen();
	var a = new Bloodhound({
		datumTokenizer: function (e) {
			return Bloodhound.tokenizers.whitespace(e.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest_tour_destinations/?query=%QUERY"
		}
	});
	a.initialize();
	var c = "#tour_destination";
	$(c).typeahead({
		minLength: 2,
		highlight: true,
		hint: false
	},
	{
		displayKey: "name",
		source: a.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Quốc Gia/Thành Phố/Điểm Du Lịch</span>'
		}
	}).on("typeahead:selected", function (e, d) {
		$("#tour_destination_input").val(d.url_title);
		$("#des_id").val(d.id);
		$(c).data("selected_value", $(c).val());
		if (!b) {
			add_clear_search(c)
		}
		$(c).popover("hide")
	})
}
function set_up_flight_des_autocomplete() {
	var b = is_mobile_screen();
	var a = new Bloodhound({
		datumTokenizer: function (e) {
			return Bloodhound.tokenizers.whitespace(e.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest-flight-destinations/?name=%QUERY",
			replace: function (e, f) {
				val = $("#flight_from_code").val();
				if (!val) {
					return e.replace("%QUERY", f)
				}
				return e.replace("%QUERY", f) + "&code=" + encodeURIComponent(val)
			}
		}
	});
	a.initialize();
	var d = "#flight_to_autocomplete";
	$(d).typeahead({
		minLength: 3,
		highlight: true,
		hint: false
	},
	{
		displayKey: "name",
		source: a.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Chọn điểm đến</span>',
			empty: ['<div class="error" style="padding: 10px;">', "Không tìm thấy sân bay phù hợp!", "</div>"].join("\n"),
			suggestion: Handlebars.compile("<p onclick=\"update_flight_destination('{{airport_name}} ({{airport_code}})','flight_to')\"><strong>{{airport_code}}</strong> - {{airport_name}} - {{city}}</p>")
		}
	}).on("typeahead:selected", function (f, e) {
		$("#flight_to_autocomplete").val(e.city + " (" + e.airport_code + ")");
		$("#flight_to_code").val(e.airport_code);
		$(d).data("selected_value", $(d).val());
		$(d).popover("hide")
	});
	var c = new Bloodhound({
		datumTokenizer: function (e) {
			return Bloodhound.tokenizers.whitespace(e.name)
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: "/suggest-flight-destinations/?name=%QUERY",
			replace: function (e, f) {
				val = $("#flight_to_code").val();
				if (!val) {
					return e.replace("%QUERY", f)
				}
				return e.replace("%QUERY", f) + "&code=" + encodeURIComponent(val)
			}
		}
	});
	c.initialize();
	var d = "#flight_from_autocomplete";
	$(d).typeahead({
		minLength: 3,
		highlight: true,
		hint: false
	},
	{
		displayKey: "name",
		source: c.ttAdapter(),
		templates: {
			header: '<span class="lb-header">Chọn điểm đi</span>',
			empty: ['<div class="error" style="padding: 10px;">', "Không tìm thấy sân bay phù hợp!", "</div>"].join("\n"),
			suggestion: Handlebars.compile("<p onclick=\"update_flight_destination('{{airport_name}} ({{airport_code}})','flight_from')\"><strong>{{airport_code}}</strong> - {{airport_name}} - {{city}}</p>")
		}
	}).on("typeahead:selected", function (f, e) {
		$("#flight_from_autocomplete").val(e.city + " (" + e.airport_code + ")");
		$("#flight_from_code").val(e.airport_code);
		$(d).data("selected_value", $(d).val());
		$(d).popover("hide")
	})
}
function IsPhone(b) {
	var c = /^[0-9-+]+$/;
	if (c.test(b)) {
		return true
	} else {
		return false
	}
}
function is_valid_phone(a) {
	var b = /^0(1\d{9}|9\d{8}|8\d{8})+$/;
	if (b.test(a)) {
		return true
	} else {
		return false
	}
}
function IsEmail(a) {
	var b = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return b.test(a)
}
function is_valid_email(a) {
	var b = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (!b.test(a)) {
		return false
	} else {
		return true
	}
}
function get_current_search(a) {
	$(function () {
		$.ajax({
			url: "/get-current-search/" + a + "/",
			type: "GET",
			dataType: "JSON",
			data: {},
			success: function (e) {
				if (a == 1) {
					var d = $("#is_update_des").length == 0 || $("#is_update_des").val() == 1;
					if (d) {
						$("#destination").attr(e.destination);
						$("#oid").val(e.oid)
					}
					if (!e.is_default) {
						$("#startdate").val(e.startdate);
						$("#enddate").val(e.enddate);
						$('#check_rate_form input[name="startdate"]').val(e.startdate);
						$('#check_rate_form input[name="enddate"]').val(e.enddate);
						$('#hotel_search_form input[name="startdate"]').val(e.startdate);
						$('#hotel_search_form input[name="enddate"]').val(e.enddate)
					} else {
						$("#startdate").val("");
						$("#enddate").val("")
					}
					$("#night option[value='" + e.night + "']").attr("selected", "selected");
					get_check_out_date("#startdate", "#night", "#enddate", "#show_search_end_date")
				}
				if (a == 2) {
					var c = $("#is_not_get_current_search").val();
					if (c == "" || c == undefined) {
						if (e.From != "") {
							$("#flight_from").val(e.From)
						}
						var b = $("#is_update_fly_to").length == 0 || $("#is_update_fly_to").val() == 1;
						if (b && e.To != "") {
							$("#flight_to").val(e.To)
						}
						$("#departure_date_flight").val(e.Depart);
						$("#returning_date_flight").val(e.Return);
						change_datepicker_date("#departure_date_flight");
						change_datepicker_date("#returning_date_flight");
						if (e.Return != "") {
							$("#delete_return").show()
						} else {
							$("#delete_return").hide()
						}
						$("#flight_dialog_departure_date").val(e.Depart);
						$("#flight_dialog_returning_date").val(e.Return);
						if (e.adt != "") {
							$("#adt option[value='" + e.adt + "']").attr("selected", "selected");
							$("#dialog_adt option[value='" + e.adt + "']").attr("selected", "selected")
						}
						if (e.chd != "") {
							$("#chd option[value='" + e.chd + "']").attr("selected", "selected");
							$("#dialog_chd option[value='" + e.chd + "']").attr("selected", "selected")
						}
						if (e.inf != "") {
							$("#inf option[value='" + e.inf + "']").attr("selected", "selected");
							$("#dialog_inf option[value='" + e.inf + "']").attr("selected", "selected")
						}
					}
				}
				if (a == 3) {
					$("#destination").val(e.destination);
					$("#oid").val(e.oid);
					$("#duration option[value='" + e.duration + "']").attr("selected", "selected");
					if (!e.is_default) {
						$("#startdate").val(e.startdate);
						$("#enddate").val(e.enddate)
					} else {
						$("#startdate").val("");
						$("#enddate").val("");
						$("#duration option[value='']").attr("selected", "selected")
					}
					get_end_date("#startdate", "#duration", "#enddate", "#show_search_end_date")
				}
			},
			error: function (d, c, b) {}
		})
	})
}
function book_flight() {
	if (validate_contact_form()) {
		var a = $("#flight_term_cond_check").length > 0 && !$("#flight_term_cond_check").is(":checked");
		if (a) {
			go_position_id("#term_agreement");
			alert("Quý khách vui lòng đồng ý với các điều khoản và điều kiện đặt vé của BestPrice.");
			return false
		} else {
			go_top();
			if ($("#submit_data_waiting").length > 0) {
				$("#submit_data_waiting").modal()
			}
			return true
		}
	} else {
		return false
	}
}
function init_flight_search() {
	get_current_search(2);
	$("#btn_flight_departure_date").click(function () {
		$("#departure_date_flight").focus()
	});
	$("#btn_returning_date_flight").click(function () {
		$("#returning_date_flight").focus()
	})
}
function delete_flight_return() {
	$("#returning_date_flight").removeClass("bpv-input-warning");
	$("#returning_date_flight").val("");
	$("#delete_return").hide();
	if ($("#flight_type").length > 0) {
		$("input[name=Type][value=oneway]").prop("checked", true)
	}
}
function select_flight_type() {
	var a = $('input[name="Type"]:checked').val();
	if (a == "oneway") {
		delete_flight_return()
	}
}
function validate_flight_search() {
	var c = is_mobile_screen();
	var g = $("#flight_from");
	var f = $("#flight_to");
	if ($.trim(g.val()) == "") {
		alert('Xin vui lòng nhập "Điểm Đi"');
		$(g).addClass("bpv-input-warning");
		return false
	}
	if ($.trim(f.val()) == "") {
		alert('Xin vui lòng nhập "Điểm Đến"');
		$(f).addClass("bpv-input-warning");
		return false
	}
	var e = $("#departure_date_flight").val();
	var d = $("#returning_date_flight").val();
	if ($.trim(e) == "") {
		alert('Xin vui lòng nhập "Ngày đi"');
		$("#departure_date_flight").focus();
		$("#departure_date_flight").addClass("bpv-input-warning");
		$("#departure_day_flight").addClass("bpv-input-warning");
		$("#departure_month_flight").addClass("bpv-input-warning");
		return false
	}
	if (!check_date(e)) {
		alert('"Ngày đi" phải theo định dạng ' + FORMAT_DATE);
		$("#departure_date_flight").focus();
		$("#departure_date_flight").addClass("bpv-input-warning");
		return false
	}
	var b = new Date();
	b = dateFormat(b);
	if (get_JS_Date(e) < get_JS_Date(b)) {
		alert('"Ngày đi" không được phép là ngày trong quá khứ!');
		$("#departure_date_flight").focus();
		$("#departure_date_flight").addClass("bpv-input-warning");
		return false
	}
	if (d != "" && !check_date(d)) {
		alert('"Ngày về" phải theo định dạng ' + FORMAT_DATE);
		$("#returning_date_flight").focus();
		$("#returning_date_flight").addClass("bpv-input-warning");
		return false
	}
	if (d != "" && get_JS_Date(e) > get_JS_Date(d)) {
		alert('Vui lòng nhập "Ngày về" lớn hơn hoặc bằng "Ngày đi"');
		$("#returning_date_flight").focus();
		$("#returning_date_flight").addClass("bpv-input-warning");
		return false
	}
	if ($("#flight_type").length > 0) {
		var a = $('input[name="Type"]:checked').val();
		if (a == "roundway") {
			if ($.trim(d) == "") {
				alert('Bạn đang tìm kiếm chuyến bay khứ hồi. Xin vui lòng nhập "Ngày về"');
				$("#returning_date_flight").focus();
				$("#returning_date_flight").addClass("bpv-input-warning");
				return false
			}
		}
	}
	return true
}
function validate_flight_search_dialog() {
	var c = $("#flight_dialog_departure_date").val();
	var b = $("#flight_dialog_returning_date").val();
	if ($.trim(c) == "") {
		alert('Xin vui lòng nhập "Ngày đi"');
		$("#flight_dialog_departure_date").focus();
		$("#flight_dialog_departure_date").addClass("bpv-input-warning");
		return false
	}
	if (!check_date(c)) {
		alert('"Ngày đi" phải theo định dạng ' + FORMAT_DATE);
		$("#flight_dialog_departure_date").focus();
		$("#flight_dialog_departure_date").addClass("bpv-input-warning");
		return false
	}
	var a = new Date();
	a = dateFormat(a);
	if (get_JS_Date(c) < get_JS_Date(a)) {
		alert('"Ngày đi" không được phép là ngày trong quá khứ!');
		$("#flight_dialog_departure_date").focus();
		$("#flight_dialog_departure_date").addClass("bpv-input-warning");
		return false
	}
	if (b != "" && !check_date(b)) {
		alert('"Ngày về" phải theo định dạng ' + FORMAT_DATE);
		$("#flight_dialog_returning_date").focus();
		$("#flight_dialog_returning_date").addClass("bpv-input-warning");
		return false
	}
	if (b != "" && get_JS_Date(c) > get_JS_Date(b)) {
		alert('Vui lòng nhập "Ngày về" lớn hơn hoặc bằng "Ngày đi"');
		$("#flight_dialog_returning_date").focus();
		$("#flight_dialog_returning_date").addClass("bpv-input-warning");
		return false
	}
	return true
}
function init_combo_search() {
	$("#dep_id").change(function () {
		if ($("#dep_id").val() != "") {
			$("#departure").val($("#dep_id option:selected").text())
		} else {
			$("#departure").val("")
		}
	});
	var a = "#tour_destination";
	if (!is_mobile_screen()) {
		$(a).popover({
			html: true,
			trigger: "click",
			template: '<div class="popover suggestion-des tour-des-suggestion"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>',
			content: $("#tour_des_suggestion").html(),
			placement: "right",
			container: "body"
		}).on("shown.bs.popover", function (b) {
			$(".sg-des").click(function () {
				$(a).val($(this).attr("data-name"));
				$(".typeahead").typeahead("val", $(this).attr("data-name"));
				$("#tour_destination_input").val($(this).attr("data-url-title"));
				$("#des_id").val($(this).attr("data-id"));
				$(a).data("selected_value", $(a).val());
				add_clear_search(a);
				$(a).popover("hide");
				$(".typeahead").typeahead("close")
			});
			$(".group-name").bpvToggle()
		})
	}
}
function init_tour_search(b) {
	var a = is_mobile_screen();
	if (b == undefined) {
		b = false
	}
	if (b) {
		get_current_search(4)
	}
	var c = "#tour_destination";
	if ($(c).parent().find(".search-choice-close").length == 0 && $(c).val() != "" && !a) {
		add_clear_search(c)
	}
	$(c).blur(function () {
		if ($.trim($(c).val()) != "" && !a) {
			add_clear_search(c)
		}
	});
	$("#dep_id").change(function () {
		if ($("#dep_id").val() != "") {
			$("#departure").val($("#dep_id option:selected").text())
		} else {
			$("#departure").val("")
		}
	});
	$(c).on("input", function () {
		if ($.trim($(c).val()) != $(c).data("selected_value")) {
			$("#tour_destination_input").val("");
			$("#des_id").val("");
			$(".search-choice-close").remove()
		}
		$(c).popover("hide")
	});
	if (!is_mobile_screen()) {
		$(c).popover({
			html: true,
			trigger: "click",
			template: '<div class="popover suggestion-des tour-des-suggestion"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>',
			content: $("#tour_des_suggestion").html(),
			placement: "right",
			container: "body"
		}).on("shown.bs.popover", function (d) {
			$("#tour_des_suggestion").remove();
			$(".sg-des").click(function () {
				$(c).val($(this).attr("data-name"));
				$(".typeahead").typeahead("val", $(this).attr("data-name"));
				$("#tour_destination_input").val($(this).attr("data-url-title"));
				$("#des_id").val($(this).attr("data-id"));
				$(c).data("selected_value", $(c).val());
				add_clear_search(c);
				$(c).popover("hide");
				$(".typeahead").typeahead("close")
			});
			$(".tour-des-suggestion .group-name").bpvToggle()
		})
	}
}
function init_tour_date(e, a, c) {
	var b = new Date();
	if (a != "") {
		$(e).val(a)
	}
	var d = "#btn_" + e.replace("#", "");
	$(d).click(function () {
		$(e).focus()
	})
}
function validate_tour_search() {
	var a = "#tour_destination";
	if ($.trim($(a).val()) == "") {
		alert("Xin vui lòng nhập Quốc Gia/Thành Phố/Điểm Du Lịch");
		$(a).focus();
		$(a).addClass("bpv-input-warning");
		return false
	}
	return true
}
function get_check_out_date(d, f, e, b) {
	var c = $(d).val();
	if (check_date(c)) {
		var a = get_JS_Date(c);
		var g = $(f).val();
		a.setDate(a.getDate() + parseInt(g, 10));
		if (check_date(dateFormat(a))) {
			$(b).html(dateFormat(a));
			$(e).val(dateFormat(a));
			if ($("#enddate_lbl").length > 0) {
				$("#enddate_lbl").show()
			}
		}
	}
}
function validate_hotel_search() {
	if ($.trim($("#destination").val()) == "") {
		alert("Xin vui lòng nhập Tỉnh/Thành Phố/Điểm Du Lịch/Tên Khách Sạn");
		$("#destination").focus();
		$("#destination").addClass("bpv-input-warning");
		return false
	}
	var a = $("#hotel_date").val();
	if ($.trim(a) == "") {
		$("#hotel_date").focus();
		$("#hotel_date").addClass("bpv-input-warning");
		alert('Xin vui lòng nhập thông tin "Ngày nhận phòng"');
		return false
	}
	if (!check_date(a)) {
		$("#hotel_date").focus();
		$("#hotel_date").addClass("bpv-input-warning");
		alert('"Ngày nhận phòng" phải theo định dạng ' + FORMAT_DATE);
		return false
	}
	return true
}
function init_hotel_search(b) {
	var a = is_mobile_screen();
	if (b == undefined) {
		b = false
	}
	if (b) {
		get_current_search(1)
	}
	if ($("#destination").parent().find(".search-choice-close").length == 0 && $("#destination").val() != "" && !a) {
		add_clear_search("#destination")
	}
	$("#destination").blur(function () {
		if ($.trim($("#destination").val()) != "" && !a) {
			add_clear_search("#destination")
		}
	});
	$("#destination").on("input", function () {
		if ($.trim($("#destination").val()) != $("#destination").data("selected_value")) {
			$("#hotel_destination_input").val("");
			$("#oid").val("");
			$(".search-choice-close").remove();
			$("#destination").popover("hide")
		}
	});
	$("#destination").popover({
		html: true,
		trigger: "click",
		template: '<div class="popover suggestion-des popup-suggestion-des"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>',
		content: $("#suggestion-des").html(),
		placement: a ? "bottom": "right",
		container: "body"
	}).on("shown.bs.popover", function (c) {
		set_up_m_hotel_autocomplete();
		$(".suggestion-des a").click(function () {
			$("#destination").val($(this).attr("data-name"));
			$(".typeahead").typeahead("val", $(this).attr("data-name"));
			$("#hotel_destination_input").val($(this).attr("data-url-title"));
			$("#oid").val("d-" + $(this).attr("data-id"));
			$("#destination").data("selected_value", $("#destination").val());
			add_clear_search("#destination");
			$("#destination").click();
			$(".typeahead").typeahead("close")
		})
	})
}
function init_payment_detail() {
	$(".right-fixed").width($(".bpv-col-left").width());
	var a = $("#pro_code").val();
	if ($.trim(a) != "") {
		$("#pro_use").show()
	} else {
		$("#pro_use").hide()
	}
	$("#pro_code").keyup(function () {
		var b = $("#pro_code").val();
		if ($.trim(b) != "") {
			$("#pro_use").show();
			$("#pro_use_2").show()
		} else {
			$("#pro_use").hide();
			$("#pro_use_2").hide()
		}
		$("#pro_code_2").val(b)
	});
	$("#pro_code").bind("paste", function (b) {
		$("#pro_use").show();
		$("#pro_use_2").show()
	});
	$("#pro_use_2").bind("paste", function (b) {
		$("#pro_use").show();
		$("#pro_use_2").show()
	});
	$("#pro_code_2").keyup(function () {
		var b = $("#pro_code_2").val();
		if ($.trim(b) != "") {
			$("#pro_use").show();
			$("#pro_use_2").show()
		} else {
			$("#pro_use").hide();
			$("#pro_use_2").hide()
		}
		$("#pro_code").val(b)
	});
	$("#pro_phone").keyup(function () {
		var b = $("#pro_phone").val();
		$("#pro_phone_2").val(b);
		$("#phone").val(b);
		$("#phone_cf").val(b)
	});
	$("#pro_phone_2").keyup(function () {
		var b = $("#pro_phone_2").val();
		$("#pro_phone").val(b);
		$("#phone").val(b);
		$("#phone_cf").val(b)
	})
}
function use_pro_code(e) {
	reset_pro_code_discount(e);
	$("#code_invalid").hide();
	$("#code_ok").hide();
	$("#code_invalid_2").hide();
	$("#code_ok_2").hide();
	var f = $.trim($("#pro_code").val());
	var h = $("#pro_hotel").val();
	var c = $("#pro_cruise").val();
	var j = $("#pro_tour").val();
	var a = $("#pro_combo").val();
	var b = $("#nr_pax").val();
	var k = $.trim($("#pro_phone").val());
	var g = $.trim($("#flight_total_price").attr("total-price"));
	var d = $("#pro_departure_date").val();
	if (g == "" || g == undefined) {
		var g = $.trim($("#total_payment").attr("rate"))
	}
	if (/^[a-zA-Z0-9- ]*$/.test(f) == false || f == "") {
		$("#code_invalid").show();
		$("#code_invalid_2").show()
	} else {
		$("#pro_use").button("loading");
		$("#pro_use_2").button("loading");
		$.ajax({
			url: "/apply-promotion-code/",
			type: "POST",
			cache: false,
			dataType: "json",
			data: {
				service_type: e,
				pro_code: f,
				hotel_id: h,
				cruise_id: c,
				tour_id: j,
				combo_id: a,
				nr_passengers: b,
				pro_phone: k,
				price_total: g,
				departure_date: d
			},
			success: function (l) {
				if (l.state == 1) {
					$("#pro_use").button("reset");
					$("#pro_use_2").button("reset");
					if (l.invalid_phone) {
						$(".pro_phone_block").show();
						$(".pro_phone_invalid").show();
						$(".pro_phone_invalid_msg").html(l.invalid_phone);
						$("#is_valid_phone").val(1);
						return false
					} else {
						$(".pro_phone_invalid").hide()
					}
					if (l == "") {
						$("#code_invalid").show();
						$("#code_invalid_2").show()
					} else {
						update_booking_payment(l, f, e)
					}
				} else {
					if (l.msg != undefined) {
						$("#code_invalid").html(l.msg);
						$("#code_invalid_2").html(l.msg)
					}
					$("#code_invalid").show();
					$("#pro_use").button("reset");
					$("#code_invalid_2").show();
					$("#pro_use_2").button("reset")
				}
			},
			error: function (n, m, l) {
				$("#code_invalid").show();
				$("#pro_use").button("reset");
				$("#code_invalid_2").show();
				$("#pro_use_2").button("reset")
			}
		})
	}
}
function update_booking_payment(j, h, f) {
	var k = 0;
	if (j.discount_type == 2) {
		k = j.get
	}
	if (j.discount_type == 3) {
		var a = j.get;
		var c = $("#nr_ticket").val();
		if (c == undefined || c == "") {
			c = 0
		} else {
			c = parseInt(c)
		}
		k = a * c
	}
	if (j.discount_type == 4) {
		var a = j.get;
		var d = $("#nr_pax").val();
		if (d == undefined || d == "") {
			d = 0
		} else {
			d = parseInt(d)
		}
		k = a * d
	}
	if (j.discount_type == 1) {
		var a = j.get;
		var g = j.get_max;
		var e = 0;
		if (f == 1) {
			e = update_hotel_total_payment("đ")
		}
		if (f == 2) {
			e = update_flight_total_payment("đ")
		}
		if (f == 3 || f == 4) {
			e = update_total_payment("đ")
		}
		var k = e * a / 100;
		if (k > g && g > 0) {
			k = g
		}
		k = Math.round(k / 1000) * 1000
	}
	$("#applied_code_discount").attr("rate", k);
	$("#applied_code_discount").html("- " + bpv_format_currency(k, "đ"));
	$("#applied_code").text(h);
	if (k > 0) {
		$("#p_applied_code").show()
	}
	var b = '<span class="glyphicon glyphicon-ok"></span>';
	if (k > 0) {
		b = b + "&nbsp; Đã giảm giá <b>" + bpv_format_currency(k, "đ") + "</b>."
	}
	if (j.discount_note != undefined && j.discount_note != "") {
		b = b + "&nbsp; " + j.discount_note
	}
	$("#code_ok").html(b);
	$("#code_ok").show();
	$("#code_ok_2").html(b);
	$("#code_ok_2").show();
	$("#promotion_code_used").val(h);
	if (f == 1) {
		update_hotel_total_payment("đ")
	}
	if (f == 2) {
		update_flight_total_payment("đ")
	}
	if (f == 3 || f == 4) {
		update_total_payment("đ")
	}
	return k
}
function reset_pro_code_discount(a) {
	$("#applied_code_discount").attr("rate", 0);
	$("#p_applied_code").hide();
	$("#promotion_code_used").val("");
	if (a == 1) {
		update_hotel_total_payment("đ")
	}
	if (a == 2) {
		update_flight_total_payment("đ")
	}
	if (a == 3 || a == 4) {
		update_total_payment("đ")
	}
}
function send_tour_contact_request(g) {
	var h = $(g).attr("id");
	var d = $("#tour_request_email").val();
	var b = $("#tour_request_phone").val();
	var f = $("#adults").val();
	var c = $("#children").val();
	var e = $("#infants").val();
	var a = $("#tour_request_content").val();
	$("#tour_request_email").removeClass("bpv-input-warning");
	$("#tour_request_phone").removeClass("bpv-input-warning");
	$(".er_tour_request_email").addClass("hide");
	$(".er_tour_request_phone").addClass("hide");
	if (IsEmail(d) && IsPhone(b)) {
		return true
	} else {
		if (!IsEmail(d) && IsPhone(b)) {
			$("#tour_request_email").focus();
			$("#tour_request_email").addClass("bpv-input-warning");
			$(".er_tour_request_email").removeClass("hide");
			$(".er_tour_request_email").html("Bạn cần nhập đúng thông tin <b>[Email]</b> ");
			return false
		} else {
			if (IsEmail(d) && !IsPhone(b)) {
				$("#tour_request_phone").focus();
				$("#tour_request_phone").addClass("bpv-input-warning");
				$(".er_tour_request_phone").removeClass("hide");
				return false
			} else {
				$("#tour_request_email").focus();
				$("#tour_request_email").addClass("bpv-input-warning");
				$(".er_tour_request_email").removeClass("hide");
				$("#tour_request_phone").focus();
				$("#tour_request_phone").addClass("bpv-input-warning");
				$(".er_tour_request_phone").removeClass("hide");
				return false
			}
		}
	}
}
function send_contact_request(c) {
	var d = $(c).attr("data-id");
	var b = ["groupon_request", "groupon_email", "groupon_phone_number"];
	var a = true;
	$.each(b, function (f, g) {
		var e = $("#" + g).val();
		if (e == "" || (g == "groupon_email" && !IsEmail(e)) || (g == "groupon_phone_number" && !IsPhone(e))) {
			$("#" + g).focus();
			$("#" + g).addClass("bpv-input-warning");
			$(".er_" + g).removeClass("hide");
			a = false
		} else {
			$("#" + g).removeClass("bpv-input-warning");
			$(".er_" + g).addClass("hide")
		}
	});
	if (a) {
		$("#" + d + "_hd").button("loading");
		$("#" + d + "_form").addClass("hide");
		$("#" + d + "_waiting").removeClass("hide");
		$.ajax({
			url: "/groupon_request/",
			type: "POST",
			data: {
				groupon_request: $("#groupon_request").val(),
				groupon_email: $("#groupon_email").val(),
				groupon_phone_number: $("#groupon_phone_number").val(),
				groupon_pop_type: $("#popup_type").val()
			},
			success: function (e) {
				$("#" + d + "_hd").button("reset");
				$("#" + d + "_waiting").addClass("hide");
				$("#" + d + "_success").removeClass("hide");
				setTimeout(function () {
					$("#" + d).popover("hide")
				},
				10000)
			},
			error: function (g, f, e) {
				$("#" + d + "_hd").button("reset");
				alert("Có lỗi kết nối mạng, yêu cầu của quý khách không thể gửi đi, xin quý khách vui lòng gọi đến số (024) 7307 2605 - (028) 7307 2605 để gặp trực tiếp nhân viên của chúng tôi.");
				$("#" + d).popover("hide")
			}
		})
	}
}
function send_news_letter_request(b) {
	var c = $(b).attr("id");
	var a = $("#newsletter_to").val();
	if (IsEmail(a)) {
		$("#newsletter").button("loading");
		$("#newsletter").html("Đang xử lý");
		$.ajax({
			url: "/news-letter-request/",
			type: "POST",
			data: {
				news_letter_to: a
			},
			success: function (d) {
				if (d == 1 || d == 2) {
					$("#newsletter").button("reset");
					$("#newsletter_to").attr("readonly", "1");
					$("#newsletter_to").removeClass("bpv-input-warning");
					$("#newsletter_to").val("");
					$("#newsletter").css("margin-top", "27px");
					$(".bpv-register").css("height", "90px");
					$("#newsletter_invalid").addClass("hide");
					$("#newsletter_ok").removeClass("hide")
				} else {
					if (d == 3) {
						$("#newsletter").button("reset");
						$("#newsletter_to").focus();
						$("#newsletter_to").addClass("bpv-input-warning");
						$("#newsletter_invalid").removeClass("hide");
						$("#newsletter").css("margin-top", "27px");
						$(".bpv-register").css("height", "90px")
					}
				}
			},
			error: function (f, e, d) {
				$("#newsletter").button("reset");
				alert("Quý khách hãy nhấn lại đăng ký.")
			}
		})
	} else {
		$("#newsletter_to").focus();
		$("#newsletter_to").addClass("bpv-input-warning");
		$("#newsletter_invalid").removeClass("hide");
		$("#newsletter").css("margin-top", "27px");
		$(".bpv-register").css("height", "90px")
	}
}
function send_sign_up_request(c) {
	var d = $(c).attr("data-id");
	$("#" + d + "_success").addClass("hide");
	$("#sign_up_email").removeClass("bpv-input-warning");
	$("#sign_up_phone").removeClass("bpv-input-warning");
	$(".er_sign_up_email").addClass("hide");
	$(".er_sign_up_phone").addClass("hide");
	var b = $("#sign_up_email").val();
	var a = $("#sign_up_phone").val();
	if (IsEmail(b) && IsPhone(a)) {
		$("#" + d + "_hd").button("loading");
		$.ajax({
			url: "/sign-up-request/",
			type: "POST",
			data: {
				email: b,
				phone: a
			},
			success: function (e) {
				if (e == 1 || e == 2) {
					$("#" + d + "_hd").button("reset");
					$("#" + d + "_waiting").addClass("hide");
					$(".er_sign_up_email").addClass("hide");
					$(".er_sign_up_phone").addClass("hide");
					$("#" + d + "_success").removeClass("hide");
					$("#" + d + "_form").addClass("hide");
					setTimeout(function () {
						$("#" + d).popover("hide")
					},
					10000)
				} else {
					if (e == 3) {
						$("#" + d + "_hd").button("reset");
						$("#sign_up_email").addClass("bpv-input-warning");
						$(".er_sign_up_email").removeClass("hide");
						$(".er_sign_up_email").html("Email đã được sử dụng , hãy chọn email khác")
					} else {
						if (e == 4) {
							$("#" + d + "_hd").button("reset");
							$("#sign_up_email").addClass("bpv-input-warning");
							$(".er_sign_up_email").removeClass("hide");
							$(".er_sign_up_email").html("Bạn cần nhập đúng thông tin <b>[Email]</b> ")
						} else {
							$("#" + d + "_hd").button("reset")
						}
					}
				}
			},
			error: function (g, f, e) {
				$("#" + d + "_hd").button("reset")
			}
		})
	} else {
		if (!IsEmail(b) && IsPhone(a)) {
			$("#sign_up_email").focus();
			$("#sign_up_email").addClass("bpv-input-warning");
			$(".er_sign_up_email").removeClass("hide");
			$(".er_sign_up_email").html("Bạn cần nhập đúng thông tin <b>[Email]</b> ")
		} else {
			if (IsEmail(b) && !IsPhone(a)) {
				$("#sign_up_phone").focus();
				$("#sign_up_phone").addClass("bpv-input-warning");
				$(".er_sign_up_phone").removeClass("hide")
			} else {
				$("#sign_up_phone").focus();
				$("#sign_up_phone").addClass("bpv-input-warning");
				$(".er_sign_up_phone").removeClass("hide");
				$("#sign_up_email").focus();
				$("#sign_up_email").addClass("bpv-input-warning");
				$(".er_sign_up_email").removeClass("hide")
			}
		}
	}
}
function send_sign_in_request(c) {
	var d = $(c).attr("data-id");
	$("#" + d + "_success").addClass("hide");
	var b = $("#sign_in_email").val();
	var a = $("#sign_in_password").val();
	if (IsEmail(b) && (a != "")) {
		$("#" + d + "_hd").button("loading");
		$.ajax({
			url: "/sign-in-request/",
			type: "POST",
			data: {
				email: b,
				password: a
			},
			success: function (e) {
				if (e == 1) {
					$("#" + d).popover("hide");
					$("#btn_sign_in").addClass("hide");
					$("#btn_sign_up").addClass("hide");
					$("#sign_in").show();
					$("#sign_out").show();
					$("#sign_in").html("Chào : " + b);
					$("#sign_out").html("Thoát");
					window.location = window.location
				} else {
					$("#" + d + "_hd").button("reset");
					$("#" + d + "_waiting").addClass("hide");
					$(".er_sign_in").removeClass("hide")
				}
			},
			error: function (g, f, e) {
				$("#" + d + "_hd").button("reset")
			}
		})
	} else {
		if (!IsEmail(b)) {
			$("#sign_in_email").addClass("bpv-input-warning");
			$(".er_sign_in_email").removeClass("hide")
		} else {
			$(".er_sign_in").removeClass("hide")
		}
	}
}
function sign_out_request() {
	$.ajax({
		url: "/sign-out-request/",
		type: "POST",
		success: function (a) {
			if (a != "") {
				window.location = window.location
			} else {}
		},
		error: function (c, b, a) {}
	})
}
function show_link_data_overview(b, a) {
	if ($("#data_overview").length > 0) {
		$("#data_overview").modal();
		$("#data_overview_loading").show();
		$("#data_overview_content").hide();
		$.ajax({
			url: "/show-data-overview/",
			type: "POST",
			cache: false,
			data: {
				id: b,
				data_type: a
			},
			success: function (c) {
				$("#data_overview_loading").hide();
				$("#data_overview_content").html(c);
				$("#data_overview_content").show()
			},
			error: function (e, d, c) {
				$("#data_overview_content").html("<center>Lỗi kết nối dữ liệu!</center>");
				$("#data_overview_content").show()
			}
		})
	}
}
function load_reviews(a, b) {
	var d = '<div class="bpv-update-wrapper">';
	d += '<div class="bpv-search-updating center-block" ><div class="ms1">Đang tải dữ liệu</div>';
	d += '<div class="ms2"><img style="margin-right:15px;" src="/assets/img/icon/loading.gif"><span>Xin đợi trong giây lát...</span></div></div>';
	var c = $(d).appendTo("body");
	$(c).center();
	$.ajax({
		url: b,
		type: "GET",
		success: function (e) {
			go_position_id("#comments_list");
			$(c).remove();
			$(a).html(e)
		},
		error: function (g, f, e) {
			$(c).remove()
		}
	})
}
function open_review(a) {
	$(document).scrollTop($(a).offset().top);
	var c = "#tab_reviews";
	$(a + ' a[href="' + c + '"]').tab("show");
	if (c == "#tab_reviews") {
		var b = $('a[href="#tab_reviews"]').attr("data-url");
		load_reviews(c, b)
	}
}
function validate_contact_form(c) {
	if (c == undefined) {
		c = false
	}
	var f = true;
	$(".bpv-contact .warning-message").hide();
	$(".bpv-contact input").removeClass("bpv-input-warning");
	$(".bpv-contact select").removeClass("bpv-input-warning");
	if ($.trim($("#gender").val()) == "") {
		$("#gender").addClass("bpv-input-warning");
		$("#title_required").show();
		f = false
	}
	if ($.trim($("#name").val()) == "") {
		$("#name").addClass("bpv-input-warning");
		$("#name_required").show();
		f = false
	}
	if (c) {
		if ($.trim($("#email").val()) == "") {
			$("#email").addClass("bpv-input-warning");
			$("#email_required").show();
			f = false
		} else {
			if (!is_valid_email($("#email").val())) {
				$("#email").addClass("bpv-input-warning");
				$("#email_valid").show();
				f = false
			}
		}
	}
	var g = $("#check_bill").prop("checked");
	if (g) {
		if ($("#tax_code").val() == "") {
			$("#tax_code").addClass("bpv-input-warning");
			$("#tax_code_valid").show();
			f = false
		}
		if ($("#company_name").val() == "") {
			$("#company_name").addClass("bpv-input-warning");
			$("#company_name_valid").show();
			f = false
		}
		if ($("#company_address").val() == "") {
			$("#company_address").addClass("bpv-input-warning");
			$("#company_address_valid").show();
			f = false
		}
		if ($("#address_to").val() == "") {
			$("#address_to").addClass("bpv-input-warning");
			$("#address_to_valid").show();
			f = false
		}
	}
	var j = $.trim($("#c_day").val());
	var e = $.trim($("#c_month").val());
	var h = $.trim($("#c_year").val());
	var b = j != "" || e != "" || h != "";
	if (b) {
		if (j == "" || e == "" || h == "") {
			$("#birthday_valid").show();
			f = false
		}
		if (j == "") {
			$("#c_day").addClass("bpv-input-warning")
		}
		if (e == "") {
			$("#c_month").addClass("bpv-input-warning")
		}
		if (h == "") {
			$("#c_year").addClass("bpv-input-warning")
		}
	}
	if ($.trim($("#phone").val()) == "") {
		$("#phone").addClass("bpv-input-warning");
		$("#phone_required").show();
		f = false
	}
	if (!f) {
		go_position($(".bpv-contact-res").offset().top)
	} else {
		if ($("#payment_method").length > 0) {
			var l = true;
			var d = $("#payment_method").attr("data-validation");
			if (typeof d !== typeof undefined && d == 0) {
				l = false
			}
			if (l) {
				var a = $("#payment_method").val();
				if (a == "") {
					alert("Xin vui lòng lựa chọn hình thức thanh toán.");
					f = false;
					go_position($(".bpv-payment-methods").offset().top)
				}
			}
		}
		if (f && $("#flight_term_cond_check").length > 0) {
			var k = $("#flight_term_cond_check").length > 0 && !$("#flight_term_cond_check").is(":checked");
			if (k) {
				go_position_id("#term_agreement");
				alert("Quý khách vui lòng đồng ý với các điều khoản và điều kiện đặt vé của BestPrice.");
				f = false
			}
		}
		if (f && $("#submit_data_waiting").length > 0) {
			$("#submit_data_waiting").modal()
		}
	}
	if (f) {
		$("button[value='make_booking']").button("loading")
	}
	return f
}
function add_clear_search(b) {
	if ($(b).parent().find(".search-choice-close").length == 0) {
		var a = $('<span class="icon btn-search-close search-choice-close"></span>');
		$(b).parent().append(a);
		a.click(function () {
			clear_search(b)
		})
	}
}
function clear_search(a) {
	$(a).val("");
	$(a).focus();
	$(a).parent().find(".typeahead").typeahead("val", "");
	$(a).parent().parent().find(".search-choice-close").remove();
	if (a == "#destination") {
		$("#oid").val("");
		$("#hotel_destination_input").val("")
	}
	if (a == "#tour_destination") {
		$("#des_id").val("")
	}
}
function init_flight_airports() {
	$(".li-tab-des").click(function () {
		$(".flight-form-des .bpv-sort-arow").hide();
		$(this).find("span").show();
		var a = $(this).attr("data-id");
		if (a == "flight_from") {
			hide_tab_destinations("flight_to")
		} else {
			hide_tab_destinations("flight_from")
		}
	});
	$(".select-des").click(function () {
		if ($(this).find(".flight-form-des").is(":visible") == false) {
			$(":root").removeClass("state-sidebar-flight")
		} else {
			$(":root").addClass("state-sidebar-flight")
		}
	});
	$(".des-input").focus(function () {
		if ($(this).parent().find(".flight-form-des").is(":visible") == false) {
			$(":root").removeClass("state-sidebar-flight")
		} else {
			$(":root").addClass("state-sidebar-flight")
		}
	})
}
function init_search_form_ui() {
	if ($("#tour_search_form").length > 0) {
		init_tour_search(true);
		init_autocomplete_ui()
	}
	if ($("#hotel_search_form").length > 0) {
		init_hotel_search(true);
		init_autocomplete_ui()
	}
	if ($("#cruise_search_form").length > 0) {
		init_autocomplete_ui()
	}
	if ($("#flight_search_form").length > 0) {
		init_flight_search_form();
		init_flight_search();
		init_autocomplete_ui()
	}
	if ($("#combo_search_form").length > 0) {
		init_combo_search();
		init_autocomplete_ui()
	}
	init_datepicker_ui()
}
function init_flight_search_form() {
	var b = true;
	$("#flight_to").on("focus", function (c) {
		if (is_mobile_screen()) {
			$(this).trigger("blur")
		}
	});
	$("#flight_from").on("focus", function (c) {
		if (is_mobile_screen()) {
			$(this).trigger("blur")
		}
	});
	init_flight_airports();
	change_flight_depart_return_date("departure", "returning");
	init_flight_search_destination();
	click_out_form();
	var a = $("#flight_from").attr("value");
	if (a) {
		update_flight_destination(a, "flight_from")
	}
}
function init_flight_airports() {
	$(".li-tab-des").click(function () {
		$(".flight-form-des .bpv-sort-arow").hide();
		$(this).find("span").show();
		var a = $(this).attr("data-id");
		if (a == "flight_from") {
			hide_tab_destinations("flight_to")
		} else {
			hide_tab_destinations("flight_from")
		}
	});
	$(".select-des").click(function () {
		if ($(this).find(".flight-form-des").is(":visible") == false) {
			$(":root").removeClass("state-sidebar-flight")
		} else {
			$(":root").addClass("state-sidebar-flight")
		}
	});
	$(".des-input").focus(function () {
		if ($(this).parent().find(".flight-form-des").is(":visible") == false) {
			$(":root").removeClass("state-sidebar-flight")
		} else {
			$(":root").addClass("state-sidebar-flight")
		}
	})
}
function send_regis_email() {
	var b = $(".regis_email").val();
	var a = new Date();
	var c = 60;
	a.setTime(a.getTime() + (60 * 60 * 60 * 60 * 60 * 24 * 12));
	if (IsEmail(b)) {
		$(".fancybox-opened .btn-send-email").button("loading");
		$.ajax({
			url: "/register-email-promotion.html",
			type: "POST",
			dataType: "json",
			data: {
				email: b
			},
			success: function (f) {
				if (f.status == 1) {
					jQuery.cookie("popupNewLetterStatus", "closed", {
						expires: a,
						path: "/"
					});
					$(".fancybox-opened .regis_email").hide();
					$(".fancybox-opened .btn-send-email").hide();
					$(".fancybox-opened .box-form-regis").css("top", "62%");
					$(".fancybox-opened .btn-continue").show();
					var d = "";
					var e = $(".fancybox-opened .img-popup").attr("data" + d + "-src-success");
					$(".fancybox-opened .img-popup").attr("src", e)
				} else {
					jQuery.cookie("popupNewLetterStatus", "closed", {
						expires: a,
						path: "/"
					});
					var d = "";
					$(".fancybox-opened .regis_email").hide();
					$(".fancybox-opened .btn-send-email").hide();
					$(".fancybox-opened .box-form-regis").css("top", "62%");
					$(".fancybox-opened .btn-continue").css("margin-top", "25px");
					$(".fancybox-opened .btn-continue").show();
					var e = $(".fancybox-opened .img-popup").attr("data" + d + "-src-unsuccess");
					$(".fancybox-opened .img-popup").attr("src", e)
				}
			}
		})
	} else {
		alert("Email không đúng định dạng !")
	}
}
function init_popup_newletter() {
	if ($("#popup-newletter").length > 0) {
		jQuery(document).ready(function (a) {
			setTimeout(function () {
				var b = new Date();
				var c = 60;
				b.setTime(b.getTime() + (60 * 60 * 60 * 60 * 60 * 24 * 12));
				if (jQuery.cookie("popupNewLetterStatus") != "closed") {
					a("#popup-newletter").modal("show")
				}
			},
			10000);
			a("#popup-newletter").on("hidden.bs.modal", function (d) {
				var b = new Date();
				var c = 60;
				b.setTime(b.getTime() + (60 * 60 * 60 * 60 * 60 * 24 * 12));
				jQuery.cookie("popupNewLetterStatus", "closed", {
					expires: b,
					path: "/"
				})
			})
		});
		$(".box-form-regis .btn-continue").click(function () {
			$(".fancybox-close").click()
		});
		$(".box-form-regis .btn-continue").click(function () {
			$(".fancybox-close").click()
		})
	}
}
function ajax_submit_form(a) {
	$.ajax({
		url: a.attr("action"),
		type: a.attr("method"),
		data: a.serialize(),
		dataType: "json",
		success: function (b) {
			console.log(b);
			a.find(".notify_error").remove();
			if (b.sts == 0 && b.data) {
				$.each(b.data, function (d, c) {
					var e = a.find('.import[name="' + d + '"]');
					e.closest(".box").append('<div class="notify_error" style="color: red">' + c + "</div>")
				})
			} else {
				if (b.msg) {
					alert(b.msg)
				}
				if (b.redirect) {
					window.location.href = b.redirect
				}
			}
		},
		error: function (b) {}
	})
}
init_ui = function () {
	init_popup_newletter();
	init_search_form_ui();
	init_header_ui();
	init_body_ui();
	init_zopim()
};
function init_body_ui() {
	if ($("#is_show_create_account_coin").val() > 0) {
		init_coin_colect()
	}
	if ($(".combo-ids").length > 0) {
		combine_ticket_combo()
	}
	$("#destination").click(function () {
		if (is_mobile_screen()) {
			$("#destination").attr("readonly", "readonly")
		}
	});
	if ($(".pro-offer-note").length > 0 && !is_mobile_screen()) {
		set_popover(".pro-offer-note", "hover")
	}
	if ($("#ifram_cheapest_flight").length > 0) {
		$("#ifram_cheapest_flight").load(function () {
			$("#ifram_cheapest_flight").height($("#ifram_cheapest_flight").contents().height())
		})
	}
	$("#destination").popover().on("shown.bs.popover", function (d) {
		$(":root").addClass("state-sidebar-flight")
	});
	$("#destination").popover().on("hidden.bs.popover", function (d) {
		$(":root").removeClass("state-sidebar-flight");
		$("#destination").removeAttr("readonly")
	});
	if ($("#btn-core-value").length > 0) {
		$("#btn-core-value").bpvToggle();
		$("#btn-core-value").click(function () {
			$(".why-us-content .button").toggleClass("background-white");
			if ($("#btn-core-value .icon").hasClass("icon-menu-down-blue")) {
				$("#btn-core-value .icon").toggleClass("icon-menu-up-blue-2")
			} else {
				$("#btn-core-value .icon").toggleClass("icon-menu-down-blue")
			}
			$(".why-us-content .title-why-us").toggleClass("padding")
		})
	}
	if (is_mobile_screen()) {
		$(window).scroll(function () {
			var d = $(window).scrollTop();
			if (parseInt(d) > 2000) {
				$(".btn-go-top").show()
			} else {
				$(".btn-go-top").hide()
			}
		})
	}
	if ($(".book-width-confident").length > 0) {
		if (is_mobile_screen()) {
			set_popover(".book-width-confident")
		} else {
			set_popover(".book-width-confident", "hover")
		}
	}
	if ($(".bp-lazy-load").length > 0) {
		$(".bp-lazy-load").unveil()
	}
	if ($(".fb-comments").length > 0) {
		init_facebook()
	}
	if ($(".tailor-make-tour").length > 0) {
		var a = $(".tailor-make-tour").attr("data-display-on");
		var c = $(".tailor-make-tour").attr("data-slide-bar");
		check_show_hotline_working_time(a, c)
	}
	if ($(".bpv-quick-contact").length > 0) {
		var a = $(".bpv-quick-contact").attr("data-display-on");
		var c = $(".bpv-quick-contact").attr("data-slide-bar");
		check_show_hotline_working_time(a, c)
	}
	if ($("#tab-details").length > 0) {
		sticky_menu()
	}
	init_button_more();
	if ($("#hotline_support_box").length > 0) {
		var a = $("#hotline_support_box").attr("data-display_on");
		var b = $("#hotline_support_box").attr("data-on_sidebar");
		get_hotline_box(a, b)
	}
	if ($(".each_paymethod").length > 0 || $(".block-payment-methods").length > 0) {
		init_payment_paymethod()
	}
	$(document).on("focus", '.pay_use_point input[name="use_point"]', function () {
		if ($(this).val() == 0 || $(this).val() == undefined) {
			$(this).val("")
		}
	});
	$(document).on("blur", '.pay_use_point input[name="use_point"]', function () {
		if ($(this).val() == 0 || $(this).val() == "" || $(this).val() == undefined) {
			$(this).val(0)
		}
	});
	$(document).on("keyup", '.pay_use_point input[name="use_point"]', function () {
		if ($("#flight_total_price").length > 0) {
			process_pay_use_point($(this), $("#flight_total_price"), "total-price")
		} else {
			process_pay_use_point($(this), $("#total_payment"))
		}
	});
	$(".submit-combo-modal .full-name").keyup(function () {
		$(this).removeClass("bpv-input-warning");
		$(".rate-msg").hide()
	});
	$(".submit-combo-modal .phone").keyup(function () {
		$(this).removeClass("bpv-input-warning");
		$(".rate-msg").hide()
	});
	$(".submit-combo-modal .email").keyup(function () {
		$(this).removeClass("bpv-input-warning");
		$(".rate-msg").hide()
	});
	$(".btn-submit-combo").click(function () {
		$(".rate-msg").hide();
		var p = $(this).attr("data-id");
		var w = "Xin quý khách nhập tên liên hệ.";
		var n = "Xin quý khách nhập số điện thoại liên hệ.";
		var u = "Xin quý khách nhập đúng email liên hệ.";
		var g = "Xin quý khách nhập đúng số điện thoại liên hệ.";
		if ($(".q-name").length > 0) {
			if ($("#data_submit_" + p + " .full-name").val() == "") {
				show_form_error(w, "", p);
				$("#data_submit_" + p + " .full-name").addClass("bpv-input-warning");
				return false
			}
		}
		if ($(".q-phone").length > 0) {
			if ($("#data_submit_" + p + " .phone").val() == "") {
				show_form_error(n, "", p);
				return false
			} else {
				if ($("#data_submit_" + p + " .phone").val() != "" && !is_valid_phone($("#data_submit_" + p + " .phone").val())) {
					$("#data_submit_" + p + " .phone").addClass("bpv-input-warning");
					show_form_error(g, "", p);
					return false
				}
			}
		}
		if ($(".q-email").length > 0) {
			if ($("#data_submit_" + p + " .email").val() != "" && !is_valid_email($("#data_submit_" + p + " .email").val())) {
				$("#data_submit_" + p + " .email").addClass("bpv-input-warning");
				show_form_error(u, "", p);
				return false
			}
		}
		$(".btn-submit-combo-" + p).button("loading");
		var t = $("#data_submit_" + p + " .departure-date").val();
		var e = $("#data_submit_" + p + " .adt").val();
		var d = $("#data_submit_" + p + " .chd").val();
		var h = $("#data_submit_" + p + " .inf").val();
		var r = $("#data_submit_" + p + " .departing-from").val();
		var l = $("#data_submit_" + p + " .gender").val();
		var s = $("#data_submit_" + p + " .full-name").val();
		var q = $("#data_submit_" + p + " .email").val();
		var f = $("#data_submit_" + p + " .phone").val();
		var j = $("#data_submit_" + p + " .market_id").val();
		var m = $("#data_submit_" + p + " .service_id").val();
		var k = $("#data_submit_" + p + " .service_name").val();
		var o = $("#data_submit_" + p + " .is_outbound").val();
		var v = {
			departure_date: t,
			adt: e,
			chd: d,
			inf: h,
			departure_from: r,
			gender: l,
			name: s,
			email: q,
			phone: f,
			market_id: j,
			service_id: m,
			service_name: k,
			is_outbound: o
		};
		$.ajax({
			url: "/ajax-send-quick-request.html",
			type: "POST",
			data: v,
			success: function (x) {
				if (x != "") {
					$("#data_submit_" + p + " .adt").val(2);
					$("#data_submit_" + p + " .chd").val(0);
					$("#data_submit_" + p + " .inf").val(0);
					$("#data_submit_" + p + " .full-name").val("");
					$("#data_submit_" + p + " .email").val("");
					$("#data_submit_" + p + " .phone").val("");
					$("#data_submit_" + p + " .gender").val(1);
					$("#data_submit_" + p + " .btn-submit-combo").html($("#data_submit_" + p + " .btn-submit-combo").attr("data-text"));
					$("#data_submit_" + p + " .btn-submit-combo").removeClass("disabled");
					$("#data_submit_" + p + " .btn-submit-combo").removeAttr("disabled");
					$(".modal-header").hide();
					$(".form-content").hide();
					$("#cus_phone").html(f);
					$(".modal-dialog-combo").addClass("modal-dialog-success");
					$(".submit-combo-modal .modal-body").addClass("modal-body-success");
					$(".success-content").show()
				}
			}
		})
	});
	$(".submit-combo-modal").on("hidden.bs.modal", function (d) {
		$(".modal-header").show();
		$(".form-content").show();
		$("#cus_phone").html("");
		$(".modal-dialog-combo").removeClass("modal-dialog-success");
		$(".submit-combo-modal .modal-body").removeClass("modal-body-success");
		$(".success-content").hide()
	});
	if ($(".tour-ids").length > 0) {
		get_tour_price_from()
	}
}
function show_form_error(b, a, c) {
	if (typeof c == "undefined") {
		c = ""
	}
	if (typeof b == "undefined" || b == "") {
		b = 'Xin quý khách vui lòng điền thông tin cá nhân và click "Gửi yêu cầu". Nhân viên của chúng tôi sẽ liên hệ và báo giá lại trong thời gian ngắn nhất'
	}
	if (typeof a == "undefined" || a == "") {
		a = '<span class="glyphicon glyphicon glyphicon-warning-sign"></span> '
	}
	$("#rate_msg" + c).html(a + b);
	$("#rate_msg" + c).show()
}
function readmore(a) {
	$("#" + a + "_short").hide();
	$("#" + a + "_full").show()
}
function readless(a) {
	$("#" + a + "_short").show();
	$("#" + a + "_full").hide()
}
function init_header_ui() {
	$(".btn-side-menu").click(function () {
		$(":root").toggleClass("state-sidebar")
	});
	$(".bs-sidebar").on("swipeleft", function (a) {
		$(":root").toggleClass("state-sidebar")
	});
	set_popover_phone_number();
	get_hot_line();
	$("#more_phone_header").popover();
	$(".icon-search-mb").click(function () {
		if ($(".block-search").length > 0) {
			var a = $(".block-search").hasClass("hide");
			$(".block-search").slideToggle("slow");
			if (a == false) {
				go_position_id(".bpv-search", "slow")
			} else {}
		}
		if ($(".bpv-search-horizontal").length > 0) {
			var a = $(".bpv-search-horizontal").css("display");
			if (a == "none") {
				$(".bpv-search-horizontal").show();
				$(".search-overview span").toggleClass("icon-arrow-top");
				go_position_id(".bpv-search-horizontal")
			} else {
				$(".bpv-search-horizontal").hide();
				$(".search-overview span").toggleClass("icon-arrow-bottom")
			}
		}
	})
}
function init_photo_slider() {
	$(".photo-slider").each(function () {
		var b = "#" + $(this).attr("data-id");
		var a = $(b + " .photo-slider");
		$(b + " .photo-slider").owlCarousel({
			lazyLoad: false,
			video: true,
			onInitialized: function () {
				reset_video_size(b)
			},
			onResized: function () {
				reset_video_size(b)
			},
			navText: ['<i class="glyphicon glyphicon-menu-left"></i>', '<i class="glyphicon glyphicon glyphicon-menu-right"></i>'],
			responsiveClass: true,
			responsive: {
				0 : {
					items: 1,
					nav: true
				},
				768 : {
					items: 1,
					nav: true
				}
			},
			loop: true
		});
		$(b + " .btnNext").click(function () {
			a.trigger("next.owl.carousel", [300])
		});
		$(b + " .btnPrev").click(function () {
			a.trigger("prev.owl.carousel", [300])
		})
	})
}
function reset_video_size(c, a) {
	var b = $(".owl-item[data-video]");
	b.each(function () {
		var d = $(this).find(".owl-video").attr("data-bg");
		if (is_mobile_screen()) {
			d = $(this).find(".owl-video").attr("data-src-mobile")
		}
		$(this).find(".owl-video-tn").css("background-image", "url(" + d + ")")
	})
}
function init_review_tab(a) {
	var b = $(a).attr("data-url");
	$.ajax({
		url: b,
		type: "GET",
		success: function (c) {
			$(a).html(c)
		},
		error: function (e, d, c) {
			$(div).remove()
		}
	})
}
function init_autocomplete_ui() {
	if ($(".bpv-search-horizontal #tour_destination").length > 0 || $(".bpv-search #tour_destination").length > 0 || $(".bpv-search-horizontal #destination").length > 0 || $(".bpv-search #destination").length > 0 || $("#flight_from_auto").length > 0) {
		var a = new Loader();
		a.require(["https://owa.bestprice.vn/assets/built/libs/typeahead.bundle.min.160820191611.js"], function () {
			if ($(".bpv-search-horizontal #tour_destination").length > 0 || $(".bpv-search #tour_destination").length > 0) {
				set_up_tour_autocomplete()
			}
			if (!is_mobile_screen() && ($(".bpv-search-horizontal #hotel_search_form #destination").length > 0 || $(".bpv-search #hotel_search_form #destination").length > 0)) {
				set_up_hotel_autocomplete()
			}
			if (is_mobile_screen() && ($(".bpv-search-horizontal #hotel_search_form #m_destination").length > 0 || $(".bpv-search #hotel_search_form #m_destination").length > 0)) {}
			if ($(".bpv-search-horizontal #cruise_search_form #destination").length > 0 || $(".bpv-search #cruise_search_form #destination").length > 0) {
				set_up_cruise_autocomplete()
			}
			if ($("#flight_from_auto").length > 0) {
				set_up_flight_des_autocomplete()
			}
		})
	}
}
function init_datepicker_ui() {
	if ($(".bpdatepicker").length > 0) {
		$(".bpdatepicker").each(function () {
			var a = $(this).attr("data-available-dates");
			var e = "#" + $(this).attr("data-day-id");
			var b = "#" + $(this).attr("data-date-id");
			var h = "#" + $(this).attr("data-month-id");
			var j = $(this).attr("data-selected-date");
			var g = $(this).attr("data-loading-asyn");
			var d = $(this).attr("data-lang-code");
			if (a != undefined && a != "") {
				a = JSON.parse(a)
			}
			$(h).change(function () {
				var k = a;
				change_datepicker_month(e, h, b, k)
			});
			if (j == "" && $(b).val() != "") {
				j = $(b).val()
			}
			init_datepicker(e, h, b, a, j);
			if (g == 1) {
				var f = new Loader();
				f.require(["https://owa.bestprice.vn/assets/built/libs/jquery-ui-lunar-event-move.bundle.min.160820191618.js"], function () {
					setup_datepicker(b, a, function (m, l) {
						set_current_selected_date(e, h, b, a, m)
					},
					d);
					if (b == "#returning_date_flight") {
						var k = $("#departure_date_flight").val();
						if (jQuery().datepicker) {
							$("#returning_date_flight").datepicker("option", "minDate", k)
						}
					}
				})
			} else {
				setup_datepicker(b, a, function (m, l) {
					set_current_selected_date(e, h, b, a, m);
					if (b == "#returning_date_flight") {
						var k = $("#departure_date_flight").val();
						$("#returning_date_flight").datepicker("option", "minDate", k)
					}
				},
				d);
				if (b == "#returning_date_flight") {
					var c = $("#departure_date_flight").val();
					$("#returning_date_flight").datepicker("option", "minDate", c)
				}
			}
		});
		$(".icon-calendar").click(function () {
			$(this).parent().find(".bpv-date-input").focus()
		});
		$(".btn_calendar").click(function () {
			var a = $(this).attr("data-id");
			if (a) {
				$("#" + a).focus()
			}
		})
	}
}
function setup_datepicker(b, a, c, d) {
	var e = 2;
	is_mobile = false;
	if (is_mobile_screen()) {
		is_mobile = true;
		e = 1
	}
	if (c == undefined && typeof c != "function") {
		c = null
	}
	if (is_mobile) {
		$(b).datepicker({
			numberOfMonths: e,
			closeText: "Đóng",
			currentText: "Hôm nay",
			showButtonPanel: is_mobile,
			monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
			dayNames: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
			dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
			minDate: 0,
			dateFormat: FORMAT_DATE,
			beforeShowDay: function (g) {
				var f = date_to_str(g);
				if (a == "" || a.length == 0) {
					return [true]
				} else {
					return [a.indexOf(f) != -1]
				}
			},
			onSelect: c
		});
		$(".ui-datepicker").on("swipeleft", function (f) {
			if (!$(".ui-datepicker-next").hasClass("ui-state-disabled")) {
				$(".ui-datepicker-next").trigger("click")
			}
		});
		$(".ui-datepicker").on("swiperight", function (f) {
			if (!$(".ui-datepicker-prev").hasClass("ui-state-disabled")) {
				$(".ui-datepicker-prev").trigger("click")
			}
		});
		$(b).on("focus", function (f) {
			$(this).trigger("blur")
		})
	} else {
		$(b).datepicker({
			numberOfMonths: e,
			showButtonPanel: is_mobile,
			monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
			dayNames: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
			dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
			minDate: 0,
			dateFormat: FORMAT_DATE,
			beforeShowDay: function (g) {
				var f = date_to_str(g);
				if (a == "" || a.length == 0) {
					return [true]
				} else {
					return [a.indexOf(f) != -1]
				}
			},
			onSelect: c
		})
	}
}
function date_to_str(b) {
	pad = function (f, d) {
		f = String(f);
		d = d || 2;
		while (f.length < d) {
			f = "0" + f
		}
		return f
	};
	var c = b.getDate();
	var a = b.getMonth();
	a++;
	var e = b.getFullYear();
	return pad(c) + "/" + pad(a) + "/" + e
}
function str_to_date(c) {
	var b = c.split("/");
	var a = new Date(parseInt(b[2], 10), [parseInt(b[1], 10) - 1], parseInt(b[0], 10), 0, 0, 0, 0);
	return a
}
function init_datepicker(g, d, a, c, e) {
	if ((e == undefined || e == "") && g != "#returning_day_flight") {
		e = new Date();
		e = date_to_str(e)
	}
	var b = new Date();
	if (c.length > 0 && c.indexOf(e) == -1) {
		for (var f = 0; f < c.length; f++) {
			var h = str_to_date(c[f]);
			if (h != str_to_date(e) && h >= b) {
				e = c[f];
				break
			}
		}
	}
	set_current_selected_date(g, d, a, c, e)
}
function set_current_selected_date(g, c, a, b, f) {
	if ($(g).length && $(c).length) {
		var e = f.split("/");
		var h = e[0];
		var d = e[1] + "/" + e[2];
		$(c + ' option[value="' + d + '"]').prop("selected", true);
		change_datepicker_month(g, c, a, b, false);
		$(g + ' option[value="' + h + '"]').prop("selected", true)
	}
	$(a).val(f);
	$(a).change()
}
function change_datepicker_day(d, b, a) {
	var c = get_current_selected_date(d, b);
	$(a).val(c);
	$(a).change()
}
function change_datepicker_month(e, c, a, b, f) {
	init_datepicker_days(e, c, b);
	if (f == undefined) {
		f = true
	}
	if (f) {
		var d = get_current_selected_date(e, c);
		$(a).val(d);
		$(a).change()
	}
}
function init_datepicker_days(g, k, c) {
	var e = $.trim($(g + " option:selected").val());
	var h = "";
	var m = $(k + " option:selected").val();
	var b = m.split("/");
	var l = days_in_month(b[0], b[1]);
	var j = false;
	for (var f = 0; f < l.length; ++f) {
		var a = l[f].split("/");
		var d = a[1].toString();
		if (d.length == 1) {
			d = "0" + d
		}
		if (is_available_dates(d, k, c)) {
			h += '<option value="' + d + '">' + a[0] + ", " + a[1] + "</option>";
			if (e == a[1]) {
				j = true
			}
		}
	}
	$(g).html(h);
	if (j) {
		$(g).val(e)
	} else {}
}
function change_datepicker_date(g, b, l) {
	var h = $(g).val();
	if (l != undefined && l != "" && $(l).length > 0) {
		b = parseInt($(l).val())
	}
	b = parseInt(b);
	if (isNaN(b)) {
		b = 0
	}
	if (g == "#returning_date_flight" && h != undefined && h != "") {
		$("#delete_return").show()
	}
	departure_date_obj = str_to_date(h);
	departure_date_obj.setDate(departure_date_obj.getDate() + b);
	var c = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
	var a = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
	var k = c[departure_date_obj.getMonth()] + " " + departure_date_obj.getFullYear();
	k = a[departure_date_obj.getDay()] + " " + departure_date_obj.getDate() + " " + k;
	if (k.indexOf("NaN") == -1) {
		$(g + "_end_show").text(dateFormat(departure_date_obj));
		$(g + "_end").val(dateFormat(departure_date_obj))
	}
	var f = $("#dpk_is_load_departure_date_flight").val();
	var j = $("#dpk_is_mobile").val() == undefined || $("#dpk_is_mobile").val() == false ? true: false;
	if (g == "#departure_date_flight") {
		$("#dpk_is_load_departure_date_flight").val("0")
	}
	if ($(g).attr("name") == "Depart" && j && f == 0) {
		if (jQuery().datepicker) {
			$('input[name="Return"]').datepicker("option", "minDate", $(g).val())
		}
	}
	if ($(g).attr("name") == "depart" && j && f == 0) {
		if (jQuery().datepicker) {
			$('input[name="return"]').datepicker("option", "minDate", $(g).val())
		}
	}
	var d = $("#is_dynamic").val() == undefined || $("#is_dynamic").val() == false || $("#is_dynamic").val() == "0" ? false: true;
	if ($(g).attr("name") == "depart" && d == false) {
		var m = $(g).val();
		var e = $("#night").val();
		depart_date_obj = str_to_date(m);
		depart_date_obj.setDate(depart_date_obj.getDate() + parseInt(e) + 1);
		if (jQuery().datepicker) {
			$('input[name="return"]').datepicker("option", "minDate", m);
			$("#returning_date_flight").datepicker("setDate", date_to_str(depart_date_obj))
		}
	} else {
		if ($(g).attr("name") == "depart" && d == true) {
			var m = $(g).val();
			if (jQuery().datepicker) {
				$('input[name="return"]').datepicker("option", "minDate", m);
				$("#returning_date_flight").datepicker("setDate", "")
			}
		}
	}
}
function days_in_month(e, c) {
	e = parseInt(e, 10);
	c = parseInt(c, 10);
	var d = new Array();
	var a = 32 - new Date(c, e - 1, 32).getDate();
	for (var b = 1; b <= a; ++b) {
		day = new Date(c, e - 1, b);
		d.push(daysofweek[day.getDay()] + "/" + b)
	}
	return d
}
function is_available_dates(e, b, a) {
	if (a.length == 0) {
		return true
	}
	var c = e + "/" + $(b + " option:selected").val();
	for (var d = 0; d < a.length; d++) {
		if (c == a[d]) {
			return true
		}
	}
	return false
}
function collapse_tab() {
	$(".bpv-collapse").each(function () {
		if ($(this).is(":visible")) {
			var a = $(this).attr("data-target");
			if ($(a).hasClass("tab-pane")) {
				$(a).removeClass("tab-pane").addClass("collapse")
			}
			if ($(a).hasClass("active")) {
				$(a).removeClass("active").addClass("in")
			}
		}
	})
}
function set_popover(c, b, a) {
	if (b == undefined) {
		b = "manual"
	}
	if (a == undefined) {
		a = true
	}
	if (is_mobile_screen()) {
		set_modal(c, a)
	} else {
		$(c).each(function () {
			var l = $(this).attr("data-pop");
			if (l == "" || l == undefined) {
				var e = this;
				var h = $(this).attr("data-target");
				if (h == undefined) {
					return false
				}
				var d = h.substring(1, h.length);
				var k = "";
				if (b != "hover" && a == true) {
					k = '<div class="popover-footer text-right"><button type="button" class="btn btn-blue btn-sm ' + d + '">Đóng</button></div>'
				}
				var m = '<div class="popover cus-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div>' + k + "</div>";
				if (b != "hover") {
					var j = $(this).attr("data-title");
					if (j == undefined || j == "") {
						j = "Thông tin"
					}
					j = j + '<button type="button" class="close ' + d + '" aria-hidden="true" data-dismiss="popover"><span class="glyphicon glyphicon-remove"></span></button>'
				}
				var g = $(h).html();
				var f = $(this).attr("data-placement");
				if (f == undefined || f == "") {
					f = ""
				}
				if ($.trim(g) != "") {
					var n = {
						container: "body",
						title: j,
						placement: function (o, p) {
							if (f == "") {
								var s = $(p).offset(),
								r = s.top;
								var q = $(window).scrollTop();
								f = q > (r / 2) + 200 ? "bottom": "top";
								return f
							} else {
								return f
							}
						},
						html: true,
						content: g,
						template: m,
						trigger: b
					};
					$(e).popover(n);
					$(e).click(function () {
						$(e).popover("toggle")
					});
					$(e).on("shown.bs.popover", function () {
						$("." + d).click(function () {
							$(e).popover("hide")
						})
					})
				}
				$(e).attr("data-pop", "1")
			}
		})
	}
}
var getPlacement = function (l) {
	var f = l.offset(),
	h = f.top,
	d = f.left,
	j = $(document).outerHeight(),
	b = $(document).outerWidth(),
	g = 0.5 * j - h,
	a = g > 0 ? "bottom": "top",
	k = 0.5 * b - d,
	c = k > 0 ? "right": "left",
	e = Math.abs(k) > Math.abs(g) ? c: a;
	return e
};
function set_modal(b, a) {
	if (a == undefined) {
		a = true
	}
	$(b).each(function () {
		var d = $(this).attr("data-target");
		console.log(d);
		var g = $(this).attr("data-title");
		if (g == undefined || g == "") {
			g = "Thông tin"
		}
		var f = $(d).html();
		console.log(f);
		var c = a == false ? 'id="modal_filter"': "";
		var e = "<div " + c + ' class="modal fade custom-modal" tabindex="-1" role="dialog"><div class="modal-dialog modal-lg"><div class="modal-content" role="document"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">Modal title</h4></div><div class="modal-body"></div>';
		if (a == true) { + '<div class="modal-footer"><button type="button" class="btn btn-blue" data-dismiss="modal">Đóng</button></div>'
		} + "</div></div></div>";
		$(this).click(function () {
			if ($(".custom-modal").length == 0) {
				$("body").append(e);
				$(".custom-modal .modal-title").html(g);
				$(".custom-modal .modal-body").html(f);
				$(".custom-modal .hide").show();
				$(".custom-modal").modal();
				$(".custom-modal").on("hidden.bs.modal", function () {
					$(".custom-modal").remove()
				})
			}
		})
	})
}
function set_show_hide(d, b, c, a) {
	if (b == undefined) {
		b = "fast"
	}
	$(d).each(function () {
		var e = $(this).attr("data-register");
		if (e != "1") {
			$(this).attr("data-register", "1");
			$(this).click(function (j) {
				var g = $(this).attr("data-show");
				var f = $(this).attr("data-target");
				var l = $(this).attr("data-icon");
				if (l != "") {
					var h = $(l).attr("data-show");
					var k = $(l).attr("data-hide")
				}
				if (g == "show") {
					$(f).hide(b);
					$(this).attr("data-show", "hide");
					if (c != undefined) {
						$(this).text(c)
					}
					if (l != "") {
						$(l).removeClass(h);
						$(l).addClass(k)
					}
				} else {
					$(this).attr("data-show", "show");
					$(f).show(b);
					if (a != undefined) {
						$(this).text(a)
					}
					if (l != "") {
						$(l).removeClass(k);
						$(l).addClass(h)
					}
				}
			})
		}
	})
}
function read_more(a) {
	$("#" + a + "_short").hide();
	$("#" + a + "_full").show()
}
function read_less(a) {
	$("#" + a + "_short").show();
	$("#" + a + "_full").hide()
}
function init_button_more() {
	if ($(".btn-more-combo-category").length > 0) {
		$(".btn-more-combo-category").click(function () {
			$(".combo-category .item-more").toggleClass("hide");
			var a = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".combo-category .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + a)
			} else {
				$(this).html($(this).attr("data-text-less") + a.replace("down", "up"))
			}
		})
	}
	if ($(".btn-show-condition").length > 0) {
		$(".btn-show-condition").click(function () {
			$("#flight_condition").toggle("slow");
			var a = '<span class="glyphicon glyphicon-menu-down margin-left-5"></span>';
			if ($("#flight_condition").css("display") == "none") {
				$(this).html($(this).attr("data-text-more") + a)
			} else {
				$(this).html($(this).attr("data-text-less") + a.replace("down", "up"))
			}
		})
	}
	if ($(".btn-more-top-hotel").length > 0) {
		$(".btn-more-top-hotel").click(function () {
			$(".hotel-deals .item-more").toggleClass("hide");
			$(".hotel-deals .item-more-m").toggleClass("hide-mobile");
			var a = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".hotel-deals .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + a)
			} else {
				if (!is_mobile_screen()) {
					$(".top-deals").each(function () {
						var b = $(this).attr("id");
						equal_height("#" + b + " .item-content")
					})
				}
				$(this).html($(this).attr("data-text-less") + a.replace("down", "up"))
			}
		})
	}
	if ($(".btn-more-voucher").length > 0) {
		$(".btn-more-voucher").click(function () {
			$(".list-voucher .item-more").toggleClass("hide");
			$(".list-voucher .item-more-m").toggleClass("hide-mobile");
			var a = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".list-voucher .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + a)
			} else {
				$(this).html($(this).attr("data-text-less") + a.replace("down", "up"))
			}
		})
	}
	if ($(".btn-more-similar-hotel").length > 0) {
		$(".btn-more-similar-hotel").click(function () {
			$(".similar-hotel .item-more").toggleClass("hide");
			$(".similar-hotel .item-more-m").toggleClass("hide-mobile");
			var a = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".similar-hotel .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + a)
			} else {
				$(this).html($(this).attr("data-text-less") + a.replace("down", "up"))
			}
		})
	}
	if ($(".btn-more-similar").length > 0) {
		$(".btn-more-similar").click(function () {
			$(".cruise-deals .item-more").toggleClass("hide");
			$(".cruise-deals .item-more-m").toggleClass("hide-mobile");
			var a = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".cruise-deals .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + a)
			} else {
				if (!is_mobile_screen()) {
					$(".cruise-deals").each(function () {
						var b = $(this).attr("id");
						equal_height("#" + b + " .item-content")
					})
				}
				$(this).html($(this).attr("data-text-less") + a.replace("down", "up"))
			}
		})
	}
	if ($(".btn-more-tour-deal").length > 0) {
		$(".btn-more-tour-deal").click(function () {
			var a = $(this).attr("data-btn");
			$(".tour-deals-" + a + " .item-more").toggleClass("hide");
			$(".tour-deals-" + a + " .item-more-m").toggleClass("hide-mobile");
			var b = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".tour-deals-" + a + " .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + b)
			} else {
				if (!is_mobile_screen()) {
					$(".top-deals").each(function () {
						var c = $(this).attr("id");
						equal_height("#" + c + " .item-content-info");
						equal_height("#" + c + " .item-content")
					})
				}
				$(this).html($(this).attr("data-text-less") + b.replace("down", "up"))
			}
		})
	}
	if ($(".top-deals").length > 0 && $(".home-tab-deal").length == 0 && $(".combo-tab").length == 0) {
		if (!is_mobile_screen()) {
			$(".top-deals").each(function () {
				var d = $(this).hasClass("cruise-package");
				var c = 0;
				if (d) {
					c = 20
				}
				var b = $(this).attr("id");
				var a = $("#" + b + " .item-more").hasClass("hide");
				if (!a) {
					equal_height("#" + b + " .item-content .item-content-info");
					equal_height("#" + b + " .item-content")
				}
			})
		}
	}
	if ($(".cruise-m-deals").length > 0) {
		if (!is_mobile_screen()) {
			$(".cruise-m-deals").each(function () {
				var b = $(this).attr("id");
				var a = $("#" + b + " .item-more").hasClass("hide");
				if (!a) {
					equal_height("#" + b + " .item-content .item-content-info");
					equal_height("#" + b + " .item-content")
				}
			})
		}
	}
	if ($(".list-4-combos").length > 0) {
		if (!is_mobile_screen()) {
			$(".list-4-combos").each(function () {
				var b = $(this).attr("id");
				var a = $("#" + b + " .item-more").hasClass("hide");
				if (!a) {
					equal_height("#" + b + " .item-content")
				}
			})
		}
	}
	if ($(".similar-list").length > 0) {
		if (!is_mobile_screen()) {
			$(".similar-list").each(function () {
				var a = $(this).attr("id");
				equal_height("#" + a + " .bpt-item .name");
				equal_height("#" + a + " .bpt-item .review");
				equal_height("#" + a + " .bpt-item .promotion");
				equal_height("#" + a + " .bpt-item")
			})
		}
	}
	if ($(".home-tab-deal").length > 0) {
		if (!is_mobile_screen()) {
			$(".home-tab-deal .active a").attr("show", 1);
			$(".home-tab-deal .active .top-deals").each(function () {
				var a = $(this).attr("id");
				equal_height("#" + a + " .item-content .item-content-info");
				equal_height("#" + a + " .item-content")
			})
		}
	}
	$(".home-tab-deal .nav-link").click(function () {
		if (!is_mobile_screen()) {
			$(".home-tab-deal .nav-link").on("shown.bs.tab", function () {
				var b = $(this).attr("aria-controls");
				var a = $("#pills_" + b).attr("show");
				if (a != "1") {
					$(this).attr("show", 1);
					equal_height("#" + b + " .top-deals .item-content .item-content-info");
					equal_height("#" + b + " .top-deals .item-content")
				}
			})
		}
	});
	$(".combo-tab .nav-link").click(function () {
		if (!is_mobile_screen()) {
			$(".combo-tab .nav-link").on("shown.bs.tab", function () {
				var b = $(this).attr("aria-controls");
				var a = $("#pills_" + b).attr("show");
				$(this).attr("show", 1);
				$("#" + b + " .combo-deals").each(function () {
					var d = $(this).attr("id");
					var c = $("#" + d + " .item-more").hasClass("hide");
					if (!c) {
						equal_height("#" + d + " .item-content .item-content-info");
						equal_height("#" + d + " .item-content")
					}
				});
				$(this).attr("show", 1);
				$("#" + b + " .dynamic-combos").each(function () {
					var d = $(this).attr("id");
					var c = $("#" + d + " .item-more").hasClass("hide");
					if (!c) {
						equal_height("#" + d + " .item-content .item-content-info");
						equal_height("#" + d + " .item-content")
					}
				})
			})
		}
	});
	if ($(".btn-show-more-dynamic-combo").length > 0) {
		$(".btn-show-more-dynamic-combo").click(function () {
			var a = $(this).attr("data-btn");
			$(".dynamic-combos-" + a + " .item-more").toggleClass("hide");
			$(".dynamic-combos-" + a + " .item-more-m").toggleClass("hide-mobile");
			var b = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".dynamic-combos-" + a + " .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + b)
			} else {
				if (!is_mobile_screen()) {
					var c = $(".combo-tab .active .nav-link").attr("aria-controls");
					$("#" + c + " .dynamic-combos").each(function () {
						var d = $(this).attr("id");
						equal_height("#" + d + " .item-content .item-content-info");
						equal_height("#" + d + " .item-content")
					})
				}
				$(this).html($(this).attr("data-text-less") + b.replace("down", "up"))
			}
		})
	}
	if ($(".btn-show-more-combo").length > 0) {
		$(".btn-show-more-combo").click(function () {
			var a = $(this).attr("data-btn");
			$(".combo-deals-" + a + " .item-more").toggleClass("hide");
			$(".combo-deals-" + a + " .item-more-m").toggleClass("hide-mobile");
			var b = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".combo-deals-" + a + " .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + b)
			} else {
				if (!is_mobile_screen()) {
					var c = $(".combo-tab .active .nav-link").attr("aria-controls");
					$("#" + c + " .combo-deals").each(function () {
						var d = $(this).attr("id");
						equal_height("#" + d + " .item-content .item-content-info");
						equal_height("#" + d + " .item-content")
					})
				}
				$(this).html($(this).attr("data-text-less") + b.replace("down", "up"))
			}
		})
	}
	if ($(".combo-tab").length > 0) {
		if (!is_mobile_screen()) {
			$(".active .combo-deals").each(function () {
				var b = $(this).attr("id");
				var a = $("#" + b + " .item-more").hasClass("hide");
				if (!a) {
					equal_height("#" + b + " .item-content .item-content-info");
					equal_height("#" + b + " .item-content")
				}
			})
		}
	}
	if ($(".dynamic-combos").length > 0) {
		if (!is_mobile_screen()) {
			$(".active .dynamic-combos").each(function () {
				var b = $(this).attr("id");
				var a = $("#" + b + " .item-more").hasClass("hide");
				if (!a) {
					equal_height("#" + b + " .item-content .item-content-info");
					equal_height("#" + b + " .item-content")
				}
			})
		}
	}
	if ($(".top-des").length > 0) {
		if (!is_mobile_screen()) {
			$(".top-des .tab-pane").each(function () {
				var b = $(this).attr("id");
				var a = $("#" + b).hasClass("active");
				if (a) {
					$("#" + b + " .similar-cruise").each(function () {
						var c = $(this).attr("id");
						equal_height("#" + c + " .bpt-item")
					})
				}
			})
		}
		$(".top-des .nav-link").click(function () {
			if (!is_mobile_screen()) {
				var a = $(this).attr("aria-controls");
				$("#" + a + " .similar-list").each(function () {
					var b = $(this).attr("id");
					equal_height("#" + b + " .bpt-item")
				})
			}
		})
	}
	if ($(".btn-more-cruise-deal").length > 0) {
		$(".btn-more-cruise-deal").click(function () {
			var a = $(this).attr("data-id");
			$(".cruise-deals-" + a + " .item-more").toggleClass("hide");
			$(".cruise-deals-" + a + " .item-more-m").toggleClass("hide-mobile");
			var b = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".cruise-deals-" + a + " .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + b)
			} else {
				if (!is_mobile_screen()) {
					$(".cruise-deals-" + a).each(function () {
						var c = $(this).attr("id");
						equal_height("#" + c + " .item-content")
					})
				}
				$(this).html($(this).attr("data-text-less") + b.replace("down", "up"))
			}
		})
	}
	if ($(".btn-more-des").length > 0) {
		$(".btn-more-des").click(function () {
			$(".more-des .item-more").toggleClass("hide");
			$(".more-des .item-more-m").toggleClass("hide-mobile");
			var a = '<span class="glyphicon glyphicon-menu-down margin-left-10"></span>';
			if ($(".more-des .item-more").hasClass("hide")) {
				$(this).html($(this).attr("data-text-more") + a)
			} else {
				$(this).html($(this).attr("data-text-less") + a.replace("down", "up"))
			}
		})
	}
}
function data_register_news(e, b) {
	var d = e.closest(".form");
	var a = "/receive-news/";
	var c = {
		email: d.find("input").val(),
		type: b
	};
	if (!d.find(".btn-regis-email").hasClass("registed")) {
		user_register_news(d, a, c)
	}
}
function user_register_news(c, a, b) {
	$.ajax({
		url: a,
		type: "post",
		data: b,
		dataType: "json",
		success: function (d) {
			if (d.msg) {
				alert(d.msg)
			}
			if (d.status == 0 && d.row) {
				c.find("input[name=" + d.row + "]").focus()
			}
			if (d.status) {
				c.find("input").val("").attr("disabled", "disabled");
				c.find(".btn-regis-email").attr("disabled", "disabled").addClass("registed")
			}
		},
		error: function (d) {}
	})
}
jQuery(document).ready(function (a) {
	if (!is_mobile_screen() && a("#bpv-col-right").length > 0) {
		a(window).scroll(function () {
			var b = a("#bpv-col-left").height();
			a("#bpv-col-right").css("height", b + "px")
		})
	}
	if (a(".slider-home-top").length > 0) {
		a(".slider-home-top").owlCarousel({
			lazyLoad: true,
			nav: true,
			loop: true,
			callbacks: true,
			dots: true,
			dotsEach: true,
			pagination: true,
			items: 1,
			slideSpeed: 600,
			paginationSpeed: 600,
			rewindSpeed: 2000,
			autoplay: true,
			autoplayHoverPause: true
		})
	}
	if (a(".slider-home-ads").length > 0) {}
	a(".btn-side-menu").click(function () {
		a(".overlay").show();
		a(".left-sidebar").addClass("left-sidebar-side");
		a("body").addClass("no-scroll-y")
	});
	a(".overlay").click(function () {
		a(".left-sidebar").removeClass("left-sidebar-side");
		a(".overlay").hide()
	});
	a("#icon-menu-mb").on("click", function () {
		a(".left-sidebar").removeClass("left-sidebar-side");
		a(".overlay").hide()
	});
	a(".bpv-hotel-destinations h4").on("click", function () {
		if (is_mobile_screen()) {
			var b = a(this).attr("data-active");
			if (b == "off") {
				a(this).parent().find(".list-unstyled").css("display", "block");
				a(this).attr("data-active", "on");
				a(this).find("span").addClass("icon-arrow-up-md-black")
			} else {
				a(this).parent().find(".list-unstyled").css("display", "none");
				a(this).attr("data-active", "off");
				a(this).find("span").removeClass("icon-arrow-up-md-black")
			}
		}
	});
	a("#pills-tab-des h4").on("click", function () {
		if (is_mobile_screen()) {
			var b = a(this).attr("data-active");
			var c = a(this).attr("data-id");
			if (a(this).find("span").hasClass("icon-more-phone-down")) {
				a(this).find("span").toggleClass("icon-more-phone-up")
			}
			if (b == "off") {
				a("#pills-tab-des").find("#" + c).addClass("active in");
				a(this).attr("data-active", "on");
				a(this).find("span").removeClass("icon-circle-plus");
				a(this).find("span").addClass("icon-circle-minus")
			} else {
				a("#" + c).removeClass("active in");
				a(this).attr("data-active", "off");
				a(this).find("span").removeClass("icon-circle-minus");
				a(this).find("span").addClass("icon-circle-plus")
			}
		}
	});
	initGUI()
});
function show_all_tab_deal() {
	$(".tab-deals").find(".fade").addClass("active in")
}
function change_search_form() {
	var a = $(".change_search").attr("data-active");
	if (a == "on") {
		$(".bpv-search-horizontal").show();
		$(".change_search").attr("data-active", "off");
		$(".change_search span").addClass("top")
	} else {
		$(".bpv-search-horizontal").hide();
		$(".change_search").attr("data-active", "on");
		$(".change_search span").removeClass("top")
	}
}
function process_pay_use_point(a, j, d) {
	$(a).keyup(function () {
		$(a).mask("###,###,###,###,###", {
			reverse: true,
			translation: {
				"#": {
					pattern: /-|\d/,
					recursive: true
				}
			},
			onChange: function (k, l) {
				l.target.value = k.replace(/(?!^)-/g, "").replace(/^,/, "").replace(/^-,/, "-")
			}
		})
	});
	var h = 0;
	var c = $("#applied_code_discount").attr("rate");
	if (d == undefined) {
		d = "rate"
	}
	if (c == undefined) {
		c = 0
	}
	if (parseInt(a.val().replace(/,/g, "")) > parseInt(a.attr("max-value"))) {
		alert("Vượt quá số điểm có thể sử dụng!");
		var b = $(".pay_use_point .account_balance").html();
		if (parseInt(a.attr("max-value")) < parseInt(a.attr("all-coin"))) {
			h = a.attr("max-value");
			var e = a.attr("all-coin") - parseInt(h);
			a.val(number_format_2(h));
			$(".pay_use_point .account_balance").html(number_format(e))
		} else {
			var f = number_format_2(a.attr("all-coin"));
			a.val(f);
			$(".pay_use_point .account_balance").html(0)
		}
	} else {
		h = a.val();
		h = h.replace(/,/g, "");
		var e = a.attr("all-coin") - h;
		$(".pay_use_point .account_balance").html(number_format(e))
	}
	$(".number-point-used").html(number_format(h));
	$(".number-point-used").attr("rate", h);
	var g = j.attr(d) - h - c;
	console.log("num_coin => " + h);
	if (h > 0) {
		$("#number_point_used").show()
	} else {
		$("#number_point_used").hide()
	}
	j.html(bpv_format_currency(g, "đ"))
}
function process_pay_use_point_(e, b, d) {
	$(e).keyup(function () {
		$(e).mask("###,###,###,###,###", {
			reverse: true,
			translation: {
				"#": {
					pattern: /-|\d/,
					recursive: true
				}
			},
			onChange: function (h, j) {
				j.target.value = h.replace(/(?!^)-/g, "").replace(/^,/, "").replace(/^-,/, "-")
			}
		})
	});
	var c = 0;
	var g = $("#applied_code_discount").attr("rate");
	if (d == undefined) {
		d = "rate"
	}
	if (g == undefined) {
		g = 0
	}
	if (e.val() * 1000 > e.attr("max-value")) {
		alert("Vượt quá số điểm có thể sử dụng!");
		e.val(0);
		$(".pay_use_point .account_balance").html(number_format(e.attr("all-coin")))
	} else {
		c = e.val() * 1000;
		var a = e.attr("all-coin") - c;
		$(".pay_use_point .account_balance").html(number_format(a))
	}
	$(".number-point-used").html(number_format(c));
	$(".number-point-used").attr("rate", c);
	var f = b.attr(d) - c - g;
	b.html(bpv_format_currency(f, "đ"))
}
function js_change_number_coin(a) {
	if (a.val() > 0) {
		a.css({
			"text-align": "right",
			padding: "6px 32px 6px 12px"
		}).val(parseInt(a.val()));
		a.parent("div").find(".x1000").removeClass("hide")
	} else {
		a.css({
			"text-align": "left",
			padding: "6px 12px"
		}).val(0);
		a.parent("div").find(".x1000").addClass("hide")
	}
}
function sticky_menu() {
	$(".tab-details a").each(function () {
		var d = $(this).attr("href");
		$(this).click(function () {
			if ($(d).length) {
				var e = $(d).offset().top - $(d).height() - $(this).height();
				$("html, body").animate({
					scrollTop: e
				},
				"fast")
			}
		})
	});
	if (!is_mobile_screen()) {
		var a = $("#tab-details");
		var c = a.offset().top;
		$(window).scroll(function () {
			b()
		});
		function b() {
			if ($(window).scrollTop() > c && !a.hasClass("affix-top")) {
				a.addClass("affix-top");
				var d = a.hasClass("tab-tour-details");
				if (d) {
					a.show()
				}
			} else {
				if ($(window).scrollTop() <= c) {
					a.removeClass("affix-top");
					var d = a.hasClass("tab-tour-details");
					if (d) {
						a.css("display", "none")
					}
				}
			}
			$(".tab-details a").each(function () {
				var e = $(this).attr("href");
				var f = $(e).offset().top - $(e).height() - $(this).height();
				if ($(window).scrollTop() >= f && !$(this).parent().hasClass("active")) {
					$(".tab-details li").removeClass("active");
					$(this).parent().addClass("active")
				}
			})
		}
	}
}
function init_payment_paymethod() {
	$(".each_paymethod").click(function () {
		if (!$(this).hasClass("active")) {
			$(".each_paymethod").removeClass("active");
			$(this).addClass("active");
			$(".each_paymethod").find(".icon_no_tick").removeClass("icon_tick");
			$(this).find(".icon_no_tick").addClass("icon_tick");
			$(".hidden_paymethod").removeClass("in");
			$("#payment_method").val($(this).attr("paymentmethod"));
			go_position_id(this)
		} else {
			$(".each_paymethod").find(".icon_no_tick").removeClass("icon_tick");
			$(this).removeClass("active")
		}
	});
	if ($(".item-bank").length > 0) {
		$(".item-bank").click(function () {
			var a = $(this).attr("data-bank");
			$("#payment_bank").val(a);
			$(".item-bank .checked").hide();
			$(this).find(".checked").show();
			$(".item-bank").removeClass("item-bank-active");
			$(this).addClass("item-bank-active");
			$(".bank-list").removeClass("in")
		})
	}
}
function init_coin_colect() {
	if ($(".bpv-contact-res").length) {
		$(".bpv-contact-res #phone").keyup(function () {
			var a = $(this).val();
			var b = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
			if (b.test(a) === true) {
				check_account_available()
			} else {
				$("#account_notification").hide();
				$("#register_account").show()
			}
		})
	}
	if ($(".bpv-contact-res").length) {
		$(".bpv-contact-res #email").keyup(function () {
			var a = $(this).val();
			var b = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (b.test(a) === true) {
				check_account_available()
			} else {
				$("#account_notification").hide();
				$("#register_account").show()
			}
		})
	}
	if ($(".bpv-contact-res").length) {
		if ($(".bpv-contact-res #phone").val() != "") {
			$(".bpv-contact-res #phone").keyup()
		}
		if ($(".bpv-contact-res #email").val() != "") {
			$(".bpv-contact-res #email").keyup()
		}
	}
	if ($(".form-login-modal").length) {
		$(".form-login-modal #c_email").keyup(function () {
			$(".noti_email").hide()
		});
		$(".form-login-modal #password").keyup(function () {
			$(".noti_password").hide()
		})
	}
	$(".form-login-modal #bpt-login-modal").click(function () {
		var c = $(".form-login-modal #c_email").val();
		var b = $(".form-login-modal #password").val();
		var a = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
		var d = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (d.test(c) === false && a.test(c) === false) {
			$(".noti_email").text("Vui lòng nhập đúng email hoặc số điện thoại");
			$(".noti_email").show();
			return false
		}
		if (b == "") {
			$(".noti_password").show();
			return false
		}
		$(".form-login-modal #bpt-login-modal").button("loading");
		$.ajax({
			url: "login.html",
			method: "post",
			data: {
				email: c,
				password: b,
				is_get_payment_method: true
			},
			dataType: "json",
			success: function (f) {
				if (f.sts != 1) {
					var e = f.data;
					if (f.data != undefined && f.data.email != undefined) {
						$(".noti_email").show()
					}
					if (f.data != undefined && f.data.password != undefined) {
						$(".noti_password").show()
					}
					if (f.msg != "") {
						$(".noti_email_res").text(f.msg);
						$(".noti_email_res").show()
					}
					$("#contact_login").show();
					$(".form-login-modal #bpt-login-modal").removeAttr("disabled");
					$(".form-login-modal #bpt-login-modal").removeClass("disabled");
					var g = $(".form-login-modal #bpt-login-modal").attr("data-text");
					$(".form-login-modal #bpt-login-modal").text(g)
				} else {
					$("#header_account").html(f.header);
					$("#payment_method_coin").html(f.payment_method);
					$("#contact_login").hide();
					$("#modal_register .close").click()
				}
			},
			error: function (f) {}
		})
	})
}
function check_account_available() {
	var b = $("#email").val();
	var a = $("#phone").val();
	$.ajax({
		url: "check-account-available",
		method: "POST",
		data: {
			phone: a,
			email: b
		},
		dataType: "json",
		success: function (c) {
			if (c != "") {
				if (c.is_login_account != "") {
					$("#register_message").hide()
				} else {
					$("#register_message").show()
				}
				$("#register_with").html(c.register_width);
				$("#coin_available").html('<strong class="text-price">' + c.coin_available + "</strong>");
				$("#register_account").hide();
				$("#account_notification").show();
				$("#is_create_account").prop("checked", false)
			} else {
				$("#is_create_account").prop("checked", true);
				$("#account_notification").hide();
				$("#register_account").show()
			}
		},
		error: function (c) {}
	})
}
function set_popover_phone_number() {
	var c = "#more_phone_header";
	var b = "manual";
	var a = true;
	$(c).each(function () {
		var l = $(this).attr("data-pop");
		if (l == "" || l == undefined) {
			var e = this;
			var h = $(this).attr("data-target");
			if (h == undefined) {
				return false
			}
			var d = h.substring(1, h.length);
			var k = "";
			if (b != "hover" && a == true) {
				k = '<div class="popover-footer text-right"><button type="button" class="btn btn-blue btn-sm ' + d + '">Đóng</button></div>'
			}
			var m = '<div class="popover pop-phone-number" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>';
			if (b != "hover") {
				var j = $(this).attr("data-title");
				if (j == undefined || j == "") {
					j = "Thông tin"
				}
				j = j + '<button type="button" class="close ' + d + '" aria-hidden="true" data-dismiss="popover"><span class="glyphicon glyphicon-remove"></span></button>'
			}
			var g = $(h).html();
			var f = $(this).attr("data-placement");
			if (f == undefined || f == "") {
				f = "auto bottom"
			}
			if ($.trim(g) != "") {
				var n = {
					container: "body",
					title: j,
					placement: f,
					html: true,
					content: g,
					template: m,
					trigger: b
				};
				$(e).popover(n);
				$(e).click(function () {
					$(e).popover("toggle")
				});
				$(e).on("shown.bs.popover", function () {
					$("." + d).click(function () {
						$(e).popover("hide")
					})
				})
			}
			$(e).attr("data-pop", "1")
		}
	})
}
function combine_ticket_combo() {
	var d = [];
	var e = [];
	var b = [];
	$(".combo-ids").each(function () {
		var m = $(this).attr("data-id");
		var l = $(this).attr("data-from-code");
		var k = $(this).attr("data-to-code");
		var g = $(this).attr("data-get-ticket-type");
		var h = $(this).attr("data-duration");
		var j = $(this).find(".price-from").attr("data-price-from");
		var f = $(this).find(".price-origin").attr("data-price-origin");
		if (f == undefined) {
			f = 0
		}
		if (j != undefined && l != "" && k != "" & g != "" && h != "" && jQuery.inArray(m + "-" + l + "-" + k + "-" + g + "-" + h, d) == "-1") {
			d.push(m + "-" + l + "-" + k + "-" + g + "-" + h + "-" + j + "-" + f)
		}
	});
	if (d.length > 0) {
		for (var c = 0; c < d.length; c++) {
			var a = [];
			a.push(d[c]);
			$.ajax({
				url: "/get-data-ticket-combo.html?",
				type: "POST",
				cache: false,
				dataType: "json",
				data: {
					data_routes: a
				},
				success: function (m) {
					for (var k = 0; k < m.length; k++) {
						var j = m[k];
						$(".departure-date-" + j.id + j.from).show();
						$(".cb-date-depart-" + j.id + j.from).html(j.depart_date);
						$(".cb-price-origin-" + j.id + j.from).html(j.price_origin_dis);
						$(".cb-price-from-" + j.id + j.from).html(j.price_from_dis);
						var h = $(".combo-id-" + j.id + j.from).attr("onclick");
						var n = "";
						var f = "";
						if (h != "" && h != undefined) {
							n = h.indexOf("?") != -1 ? "&": "?";
							f = n + "startdate=" + j.depart_date;
							var l = h.replace("')", f + "')");
							$(".combo-id-" + j.id + j.from).attr("onclick", l)
						}
						var g = $(".combo-id-" + j.id + j.from + " .link").attr("href");
						$(".combo-id-" + j.id + j.from).find("a.link").attr("href", g + f)
					}
				},
				error: function (h, g, f) {}
			})
		}
	}
}
function getUrlParameter(a) {
	var d = decodeURIComponent(window.location.search.substring(1)),
	c = d.split("&"),
	e,
	b;
	for (b = 0; b < c.length; b++) {
		e = c[b].split("=");
		if (e[0] === a) {
			return e[1] === undefined ? true: e[1]
		}
		return ""
	}
}
function init_zopim() {
	var b = "/assets/js/zopim.js";
	var c = new Loader();
	if (is_mobile_screen()) {
		var a = function () {
			$(".button-zopim").remove();
			$zopim(function () {
				$zopim.livechat.window.show()
			})
		};
		$(".button-zopim").click(function () {
			c.require([b], function () {
				var d = setInterval(function () {
					if (window.$zopim === undefined || window.$zopim.livechat === undefined || window.$zopim.livechat.departments === undefined) {
						return
					}
					clearInterval(d);
					a()
				},
				500)
			})
		})
	} else {
		c.require([b])
	}
}
function get_tour_price_from() {
	var a = [];
	$(".tour-ids").each(function () {
		var b = $(this).attr("data-id");
		a.push(b)
	});
	$.ajax({
		url: "/get-tour-price-from.html",
		type: "POST",
		data: {
			tour_ids: a
		},
		dataType: "json",
		success: function (b) {
			$.each(b, function (c, d) {
				$(".price-tour").css("height", "auto");
				$(".t-from-" + d.id).html("<span>" + bpv_format_currency(d.price_from, "đ") + "</span>");
				$(".t-origin-" + d.id).html("<span>" + bpv_format_currency(d.price_origin, "đ") + "</span>")
			});
			if ($(".top-deals").length > 0 && $(".home-tab-deal").length == 0 && $(".combo-tab").length == 0) {
				if (!is_mobile_screen()) {
					$(".top-deals").each(function () {
						var d = $(this).attr("id");
						var c = $("#" + d + " .item-more").hasClass("hide");
						if (!c) {
							equal_height("#" + d + " .item-content .item-content-info");
							equal_height("#" + d + " .item-content")
						}
					})
				}
			} else {
				if (!is_mobile_screen()) {
					$(".home-tab-deal .active a").attr("show", 1);
					$(".home-tab-deal .active .top-deals").each(function () {
						var c = $(this).attr("id");
						equal_height("#" + c + " .item-content .item-content-info");
						equal_height("#" + c + " .item-content")
					})
				}
			}
		}
	})
};
function init_google_tracking() {
	$(document).ready(function () {
		google_get_promotion_impression();
		$(".item .promotion-ids, .bpv-list-item .promotion-ids, .hotel .promotion-ids").click(function () {
			var b = $(this).attr("data-pro-id");
			var a = $(this).attr("data-pro-name");
			google_promotion_click(b, a)
		});
		init_tour_rate_form()
	})
}
function init_tour_rate_form() {
	$("#rate_form input[name=accommodation_id]").change(function () {
		change_tour_price()
	});
	if ($("#cb_departure_date").length) {
		$("#cb_departure_date").change(function () {
			var a = $("#cb_departure_date option:selected");
			change_tour_price()
		})
	}
	if ($("#tour_departure_date").length) {
		$("#tour_departure_date").change(function () {
			change_tour_price()
		})
	}
	$("#unknow_departure").change(function () {
		change_tour_price()
	});
	$("#adults, #children, #infants").change(function () {
		change_tour_price()
	});
	$("#number_voucher").change(function () {
		change_tour_price()
	})
}
function change_tour_price() {
	setTimeout(function () {
		var e = $("#tour_id").val();
		var b = $("#tour_name").val();
		var d = $("#total_payment").attr("rate");
		var f = $("#url_title").val();
		var g = "";
		if ($("#cb_departure_date").length) {
			var c = $("#cb_departure_date").val()
		} else {
			var c = $("#tour_departure_date").val()
		}
		if (c != "" && c != undefined) {
			c = c.replace("/", "");
			c = c.replace("/", "")
		} else {
			c = ""
		}
		var a = "";
		google_add_to_cart(e, b, d, c);
		fb_AddToCart(e, d)
	},
	1000)
}
function action_select_item(g) {
	var e = $(g).attr("data-id");
	var b = $(g).attr("data-name");
	var d = $(g).attr("data-price");
	var f = "";
	var c = $(g).attr("data-variant");
	var a = "";
	google_product_onclick(e, b, d, f, a, c)
}
function input_flight_select(g) {
	var e = $(g).attr("data-flight-id");
	var b = $(g).attr("data-flight-name");
	var d = $(g).attr("data-flight-price");
	var f = $(g).attr("data-flight-brand");
	var c = $(g).attr("data-flight-variant");
	var a = "Flight";
	google_product_onclick(e, b, d, f, a, c);
	fb_ViewContent(e, d)
}
function google_get_promotion_impression() {
	var b = new Array();
	var a = new Array();
	$(".item .promotion-ids, .bpv-list-item .promotion-ids, .hotel .promotion-ids").each(function () {
		var e = $(this).attr("data-pro-id");
		var c = $(this).attr("data-pro-name");
		if (jQuery.inArray(e, b)) {
			b.push(e);
			var d = {
				id: e,
				name: c
			};
			a.push(d)
		}
	});
	if (b.length > 0) {
		dataLayer.push({
			ecommerce: {
				promoView: {
					promotions: a
				}
			}
		})
	}
}
function google_promotion_click(b, a) {
	dataLayer.push({
		event: "promotionClick",
		ecommerce: {
			promoClick: {
				promotions: [{
					id: b,
					name: a
				}]
			}
		}
	})
}
function google_add_to_cart(e, b, d, a, c) {
	c = c == undefined ? "": c;
	dataLayer.push({
		event: "addToCart",
		ecommerce: {
			currencyCode: "VND",
			add: {
				products: [{
					name: b,
					id: e,
					price: d,
					variant: a,
					quantity: c
				}]
			}
		}
	})
}
function google_product_onclick(f, b, d, e, a, c) {
	dataLayer.push({
		event: "productClick",
		ecommerce: {
			click: {
				products: [{
					name: b,
					id: f,
					price: d,
					brand: e,
					category: a,
					variant: c
				}]
			}
		}
	})
}
function google_product_detail(g) {
	var e = $(g).attr("data-flight-id");
	var b = $(g).attr("data-flight-name");
	var d = $(g).attr("data-flight-price");
	var f = $(g).attr("data-flight-brand");
	var c = $(g).attr("data-flight-variant");
	var a = "Flight";
	dataLayer.push({
		ecommerce: {
			detail: {
				actionField: {
					list: "Flight"
				},
				products: [{
					name: b,
					id: e,
					price: d,
					brand: f,
					category: "Flight",
					variant: c
				}]
			}
		}
	})
}
function google_remarketing_add_to_cart(c, b, a) {
	dataLayer.push({
		dr_event_type: "add_to_cart",
		dr_value: a,
		dr_items: [{
			origin: b + "-" + c,
			google_business_vertical: "travel"
		}],
		event: "dynamic_remarketing"
	})
}
function fb_ViewContent(b, a) {
	fbq("track", "ViewContent", {
		content_ids: b,
		content_type: "product",
		value: a,
		currency: "VND"
	})
}
function fb_AddToCart(b, a) {
	fbq("track", "AddToCart", {
		content_ids: [b],
		content_type: "product",
		value: a,
		currency: "VND"
	})
};
function init_hotel_detail() {
	init_photo_slider();
	init_review_tab("#tab_reviews");
	init_facebook();
	if ($(".room-price-detail").length > 0) {
		set_popover(".room-price-detail")
	}
	if ($("#check_rate_form").length > 0) {
		get_current_search(1)
	}
	if ($(".pro-offer-note").length > 0 && is_mobile_screen()) {
		set_popover(".pro-offer-note")
	}
	if (is_mobile_screen()) {
		$(".bpv-collapse").each(function () {
			$(this).attr("data-toggle", "collapse")
		});
		collapse_tab();
		$(window).resize(collapse_tab)
	}
	$(".btn_book_tour").click(function () {
		$("html, body").animate({
			scrollTop: $("#h_hotel_rate").offset().top
		},
		"fast")
	});
	$(".btn-overview").click(function () {
		var c = $(this).attr("data-id");
		var b = $("#" + c).hasClass("collapsed");
		if (b == true) {
			$("#" + c).click()
		}
	});
	var a = $("#is_action").val();
	if (a == "check_rate") {
		console.log("action => " + a);
		go_position_id("#hotel_rate", "slow", 45)
	}
	$(".btn-show-detail").click(function () {
		var b = $(this).attr("data-show");
		var d = $(this).attr("data-id");
		$(d).slideToggle();
		var c = '<span class="glyphicon glyphicon-menu-down margin-left-5"></span>';
		if (b == "1") {
			$(this).attr("data-show", 0);
			$(this).html($(this).attr("data-text-more") + c)
		} else {
			$(this).attr("data-show", 1);
			$(this).html($(this).attr("data-text-less") + c.replace("down", "up"))
		}
	});
	if ($(".div-passenger").length > 0) {
		$(document).on("click", ".id-btn-close", function () {
			var b = $(this).attr("data-id");
			$("#total_passenger_" + b).click()
		});
		$(document).ready(function () {
			$('[data-toggle="popover"]').popover({})
		});
		$(".div-passenger .icon-arrow-bottom-black").click(function () {
			var b = $(this).attr("data-id");
			$(b).click()
		});
		$("[data-toggle=popover]").popover({
			html: true,
			content: function () {
				var b = $(this).attr("data-id");
				return $("#popover_content_passenger_" + b).html()
			}
		});
		$("[data-toggle=popover]").popover().on("shown.bs.popover", function () {
			var e = $(this).attr("data-id");
			var b = $(".adt-" + e).val();
			var d = $(".chd-" + e).val();
			var c = $(".inf-" + e).val();
			$("#cr_adults_" + e).val(b);
			$("#cr_children_" + e).val(d);
			$("#cr_infants_" + e).val(c)
		});
		$(document).on("change", ".cr-adults", function () {
			var g = $(this).attr("data-id");
			var b = $("#cr_adults_" + g + " option:selected").text();
			$(".adt-" + g).val(b);
			$(".cr-adults-" + g).val(b);
			var c = $(".adt-" + g).val();
			var f = $(".chd-" + g).val();
			var e = $(".inf-" + g).val();
			var d = [c, f, e];
			load_pasenger(d, g)
		});
		$(document).on("change", ".cr-children", function () {
			var h = $(this).attr("data-id");
			var g = $("#cr_children_" + h + " option:selected").text();
			$(".chd-" + h).val(g);
			$(".cr-children-" + h).val(g);
			var b = $(".adt-" + h).val();
			var f = $(".chd-" + h).val();
			var e = $(".inf-" + h).val();
			var d = [b, f, e];
			load_pasenger(d, h)
		});
		$(document).on("change", ".cr-infants", function () {
			var g = $(this).attr("data-id");
			var d = $("#cr_infants_" + g + " option:selected").text();
			$(".inf-" + g).val(d);
			$(".cr-infants-" + g).val(d);
			var b = $(".adt-" + g).val();
			var f = $(".chd-" + g).val();
			var e = $(".inf-" + g).val();
			var c = [b, f, e];
			load_pasenger(c, g)
		})
	}
	if ($(".div-passenger").length > 0) {
		$(".div-passenger").each(function () {
			var c = $(this).attr("data-id");
			var b = [2, 0, 0];
			load_pasenger(b, c)
		})
	}
}
function load_pasenger(c, d) {
	var b = c[0] + " nguời lớn";
	b += c[1] > 0 ? ", " + c[1] + " trẻ em": "";
	b += c[2] > 0 ? ", " + c[2] + " em bé": "";
	$("#total_passenger_" + d).val(b)
}
function check_room_rates() {
	$(".bpv-rate-loading").show();
	$("#rate_content").hide();
	$.ajax({
		url: "hotel/Hotel_Detail/check_rates?" + $("#check_rate_form").serialize(),
		type: "GET",
		cache: true,
		data: {},
		success: function (a) {
			$(".bpv-rate-loading").hide();
			$("#rate_content").html(a);
			$("#rate_content").show()
		},
		error: function (c, b, a) {}
	})
}
function search_hotels_in_waiting_page(a) {
	var b = window.location.hash;
	if (b != "" && b != undefined) {
		b = b.substring(1)
	}
	$.ajax({
		url: a + "?isAjax=1&" + b,
		type: "GET",
		cache: true,
		data: {},
		success: function (c) {
			if (c.indexOf("[hotel-detail-page]") != -1) {
				c = c.replace("[hotel-detail-page]", "");
				window.location = c
			} else {
				if (c.indexOf("[search-suggestion]") != -1) {
					c = c.replace("[search-suggestion]", "");
					window.location = c
				} else {
					$(".hotel-search-container").html(c)
				}
			}
		},
		error: function (e, d, c) {}
	})
}
function search_sort_hotels(c, d) {
	var b = validate_hotel_search();
	if (b) {
		var a = get_search_sort_params(d);
		window.location = c + "#" + a;
		go_position(0);
		$(".bpv-update-wrapper").show();
		$.ajax({
			url: c + "?isAjax=1&" + a,
			type: "GET",
			cache: true,
			data: {},
			success: function (e) {
				if (e.indexOf("[hotel-detail-page]") != -1) {
					e = e.replace("[hotel-detail-page]", "");
					window.location = e
				} else {
					if (e.indexOf("[search-suggestion]") != -1) {
						e = e.replace("[search-suggestion]", "");
						window.location = e
					} else {
						$(".bpv-content").html(e)
					}
				}
			},
			error: function (g, f, e) {}
		})
	}
	return false
}
function redirect_to_search_page(b, a) {
	window.location = b + "#" + a
}
function get_search_sort_params(j) {
	var k = $("#destination").val();
	k = encodeURIComponent(k);
	var l = $("#startdate").val();
	var b = $("#enddate").val();
	var c = $("#night").val();
	var d = $("#oid").val();
	var h = $("input[name='filter_price\\[\\]']:checked").map(function () {
		return $(this).val()
	}).get();
	var g = $("input[name='filter_star\\[\\]']:checked").map(function () {
		return $(this).val()
	}).get();
	var a = $("input[name='filter_area']:checked").map(function () {
		return $(this).val()
	}).get();
	var i = $("input[name='filter_facility\\[\\]']:checked").map(function () {
		return $(this).val()
	}).get();
	var f = $("#sort_by_value").val();
	var e = "destination=" + k;
	e = e + "&startdate=" + l;
	e = e + "&night=" + c;
	e = e + "&enddate=" + b;
	if (d != "") {
		e = e + "&oid=" + d
	}
	if (h != "") {
		e = e + "&price=" + h
	}
	if (g != "") {
		e = e + "&star=" + g
	}
	if (a != "") {
		e = e + "&area=" + a
	}
	if (i != "") {
		e = e + "&facility=" + i
	}
	if (f != "") {
		e = e + "&sort=" + f
	}
	if (j != undefined) {
		e = e + "&page=" + j
	}
	return e
}
function sort_by(b, a) {
	$("#sort_by_value").val(b);
	search_sort_hotels(a)
}
function remove_filter(c, b, a) {
	$("#" + c + "_" + b).prop("checked", false);
	search_sort_hotels(a)
}
function init_hotel_paging(a) {
	$(".pagination a").click(function () {
		var b = $(this).attr("href");
		page = get_url_var("page", b);
		if (page == "" || page == undefined) {
			page = 0
		}
		page = parseInt(page);
		search_sort_hotels(a, page);
		return false
	})
}
function book_hotel_now(a) {
	var b = false;
	$(".num_room").each(function () {
		var c = $(this).val();
		if (c > 0) {
			b = true
		}
	});
	if (!b) {
		alert(a)
	}
	return b
}
function select_rooms(c) {
	var a = 0;
	var b = 0;
	var d = $("#stay_night").val();
	$(".num_room").each(function () {
		var f = $(this).val();
		var e = $(this).attr("room-rate-id");
		if (f > 0) {
			var g = $(this).attr("rate-origin");
			var h = $(this).attr("rate-sell");
			a = a + f * parseInt(g);
			b = b + f * parseInt(h);
			if (is_mobile_screen()) {
				$("#book_room_info_" + e).show()
			}
		} else {
			if (e != undefined && e != "") {
				$("#select_room_to_book_" + e).show();
				$("#total_room_info_" + e).hide();
				if (is_mobile_screen()) {
					$("#book_room_info_" + e).hide()
				}
			}
		}
	});
	if (b > 0) {
		if (is_mobile_screen()) {
			$(".div-total-price").show()
		}
		$(".total_rate_label").show();
		if (a != b) {
			$(".total_rate_origin").html(bpv_format_currency(a, c));
			$(".total_rate_origin").show()
		}
		$(".total_rate_sell").html(bpv_format_currency(b, c));
		$(".total_rate_sell").show()
	} else {
		if (is_mobile_screen()) {
			$(".div-total-price").hide()
		}
		$(".total_rate_label").hide();
		$(".total_rate_origin").hide();
		$(".total_rate_sell").hide()
	}
}
function select_extra_bed(c) {
	var b = 0;
	var a = 0;
	$(".extrabed").each(function () {
		var g = parseInt($(this).val());
		var e = $(this).attr("extrabed-rate");
		e = parseInt(e) * g;
		var f = $(this).attr("room-index");
		update_room_rate_with_extrabed(e, f, c);
		a = a + g;
		b = b + e
	});
	var d = show_extrabed_on_payment_detail(a, b, c);
	return d
}
function update_room_rate_with_extrabed(a, d, c) {
	var b = $("#rate_origin_" + d).attr("rate");
	if (b != undefined && b != "") {
		b = parseInt(b);
		b = b + a;
		b = bpv_format_currency(b, c);
		$("#rate_origin_" + d).html(b)
	}
	var e = $("#rate_sell_" + d).attr("rate");
	if (e != undefined && e != "") {
		e = parseInt(e);
		e = e + a;
		e = bpv_format_currency(e, c);
		$("#rate_sell_" + d).html(e)
	}
}
function show_extrabed_on_payment_detail(b, f, e) {
	if (b > 0) {
		$("#nr_extrabed").text(b);
		$("#total_extrabed").html(bpv_format_currency(f, e));
		$("#p_extrabed_detail").show()
	} else {
		$("#p_extrabed_detail").hide()
	}
	var c = 0;
	$(".room-rate-payment").each(function () {
		c = c + parseInt($(this).attr("rate"))
	});
	$(".surcharge-payment").each(function () {
		c = c + parseInt($(this).attr("rate"))
	});
	var g = $("#total_discount").attr("rate");
	if (g == undefined || g == "") {
		g = 0
	} else {
		g = parseInt(g)
	}
	var d = $("#applied_code_discount").attr("rate");
	if (d == undefined || d == "") {
		d = 0
	} else {
		d = parseInt(d)
	}
	var a = 0;
	if ($("#use_point .number-point-used").length > 0) {
		a = $("#use_point .number-point-used").attr("rate")
	}
	var h = c + f - g - d - a;
	$("#total_payment").html(bpv_format_currency(h, e));
	return h
}
function update_travel_guests_for_surcharge(c) {
	var a = $("#adults").val();
	var b = $("#children").val();
	$(".sur_adults").text(a);
	$(".sur_children").text(b);
	var d = parseInt(a) + parseInt(b);
	$(".sur-info").each(function () {
		var f = $(this).attr("c-type");
		f = parseInt(f);
		if (f == 1) {
			var e = $(this).attr("charge");
			e = parseInt(e);
			var g = e * d;
			$(this).html(bpv_format_currency(g, c));
			$(this).attr("rate", g)
		}
	});
	$(".surcharge-payment").each(function () {
		var f = $(this).attr("c-type");
		f = parseInt(f);
		if (f == 1) {
			var e = $(this).attr("charge");
			e = parseInt(e);
			var g = e * d;
			$(this).html(bpv_format_currency(g, c));
			$(this).attr("rate", g)
		}
	});
	select_extra_bed(c)
}
function update_hotel_total_payment(a) {
	var b = select_extra_bed(a);
	return b
}
function validate_hotel_check_rate_form() {
	var a = $("#checkin_date").val();
	if ($.trim(a) == "") {
		$("#checkin_date").focus();
		$("#checkin_date").addClass("bpv-input-warning");
		alert('Xin vui lòng nhập thông tin "Ngày nhận phòng"');
		return false
	}
	if (!check_date(a)) {
		$("#checkin_date").focus();
		$("#checkin_date").addClass("bpv-input-warning");
		alert('"Ngày nhận phòng" phải theo định dạng ' + FORMAT_DATE);
		return false
	}
	return true
}
