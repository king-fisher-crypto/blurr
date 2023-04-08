/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
function initWordAnimation() {
	var t = document.getElementsByClassName("js-word"),
		e = [],
		n = 0;
	t[n].style.opacity = 1;
	for (var i = 0; i < t.length; i++) a(t[i]);

	function r() {
		for (var i = e[n], r = n == t.length - 1 ? e[0] : e[n + 1], a = 0; a < i.length; a++) o(i, a);
		for (a = 0; a < r.length; a++) r[a].className = "letter behind", r[0].parentElement.style.opacity = 1, s(r, a);
		n = n == e.length - 1 ? 0 : n + 1
	}

	function o(t, e) {
		setTimeout((function() {
			t[e].className = "letter out"
		}), 1 * e)
	}

	function s(t, e) {
		setTimeout((function() {
			t[e].className = "letter in"
		}), 340 + 1 * e)
	}

	function a(t) {
		var n = t.innerHTML;
		t.innerHTML = "";
		for (var i = [], r = 0; r < n.length; r++) {
			var o = document.createElement("span");
			o.className = "letter", o.innerHTML = n.charAt(r), t.appendChild(o), i.push(o)
		}
		e.push(i)
	}
	r(), setInterval(r, 2500)
}

function callParallax(t) {
	parallaxIt(t, ".menu-btn__toggleBtn", 9)
}

function parallaxIt(t, e, n) {
	var i = $(".menu-btn__toggleBtn"),
		r = t.pageX - i.offset().left,
		o = t.pageY - i.offset().top;
	TweenMax.to(e, .3, {
		x: (r - i.width() / 2) / i.width() * n,
		y: (o - i.height() / 2) / i.height() * n,
		ease: Power4.easeOut
	})
}! function(t, e) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, (function(t, e) {
	"use strict";
	var n = [],
		i = Object.getPrototypeOf,
		r = n.slice,
		o = n.flat ? function(t) {
			return n.flat.call(t)
		} : function(t) {
			return n.concat.apply([], t)
		},
		s = n.push,
		a = n.indexOf,
		l = {},
		u = l.toString,
		c = l.hasOwnProperty,
		d = c.toString,
		p = d.call(Object),
		f = {},
		h = function(t) {
			return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
		},
		g = function(t) {
			return null != t && t === t.window
		},
		m = t.document,
		v = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function y(t, e, n) {
		var i, r, o = (n = n || m).createElement("script");
		if (o.text = t, e)
			for (i in v)(r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function b(t) {
		return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[u.call(t)] || "object" : typeof t
	}
	var w = function(t, e) {
		return new w.fn.init(t, e)
	};

	function x(t) {
		var e = !!t && "length" in t && t.length,
			n = b(t);
		return !h(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
	}
	w.fn = w.prototype = {
		jquery: "3.6.1",
		constructor: w,
		length: 0,
		toArray: function() {
			return r.call(this)
		},
		get: function(t) {
			return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
		},
		pushStack: function(t) {
			var e = w.merge(this.constructor(), t);
			return e.prevObject = this, e
		},
		each: function(t) {
			return w.each(this, t)
		},
		map: function(t) {
			return this.pushStack(w.map(this, (function(e, n) {
				return t.call(e, n, e)
			})))
		},
		slice: function() {
			return this.pushStack(r.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(w.grep(this, (function(t, e) {
				return (e + 1) % 2
			})))
		},
		odd: function() {
			return this.pushStack(w.grep(this, (function(t, e) {
				return e % 2
			})))
		},
		eq: function(t) {
			var e = this.length,
				n = +t + (t < 0 ? e : 0);
			return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: s,
		sort: n.sort,
		splice: n.splice
	}, w.extend = w.fn.extend = function() {
		var t, e, n, i, r, o, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || h(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
			if (null != (t = arguments[a]))
				for (e in t) i = t[e], "__proto__" !== e && s !== i && (u && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, s[e] = w.extend(u, o, i)) : void 0 !== i && (s[e] = i));
		return s
	}, w.extend({
		expando: "jQuery" + ("3.6.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isPlainObject: function(t) {
			var e, n;
			return !(!t || "[object Object]" !== u.call(t)) && (!(e = i(t)) || "function" == typeof(n = c.call(e, "constructor") && e.constructor) && d.call(n) === p)
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		globalEval: function(t, e, n) {
			y(t, {
				nonce: e && e.nonce
			}, n)
		},
		each: function(t, e) {
			var n, i = 0;
			if (x(t))
				for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
			else
				for (i in t)
					if (!1 === e.call(t[i], i, t[i])) break;
			return t
		},
		makeArray: function(t, e) {
			var n = e || [];
			return null != t && (x(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n
		},
		inArray: function(t, e, n) {
			return null == e ? -1 : a.call(e, t, n)
		},
		merge: function(t, e) {
			for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
			return t.length = r, t
		},
		grep: function(t, e, n) {
			for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
			return i
		},
		map: function(t, e, n) {
			var i, r, s = 0,
				a = [];
			if (x(t))
				for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && a.push(r);
			else
				for (s in t) null != (r = e(t[s], s, n)) && a.push(r);
			return o(a)
		},
		guid: 1,
		support: f
	}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
		l["[object " + e + "]"] = e.toLowerCase()
	}));
	var _ =
		/*!
		 * Sizzle CSS Selector Engine v2.3.6
		 * https://sizzlejs.com/
		 *
		 * Copyright JS Foundation and other contributors
		 * Released under the MIT license
		 * https://js.foundation/
		 *
		 * Date: 2021-02-16
		 */
		function(t) {
			var e, n, i, r, o, s, a, l, u, c, d, p, f, h, g, m, v, y, b, w = "sizzle" + 1 * new Date,
				x = t.document,
				_ = 0,
				T = 0,
				k = lt(),
				S = lt(),
				C = lt(),
				A = lt(),
				E = function(t, e) {
					return t === e && (d = !0), 0
				},
				$ = {}.hasOwnProperty,
				O = [],
				D = O.pop,
				M = O.push,
				j = O.push,
				P = O.slice,
				L = function(t, e) {
					for (var n = 0, i = t.length; n < i; n++)
						if (t[n] === e) return n;
					return -1
				},
				N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				z = "[\\x20\\t\\r\\n\\f]",
				q = "(?:\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
				I = "\\[" + z + "*(" + q + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + z + "*\\]",
				H = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
				R = new RegExp(z + "+", "g"),
				F = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
				B = new RegExp("^" + z + "*," + z + "*"),
				W = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
				X = new RegExp(z + "|>"),
				U = new RegExp(H),
				Y = new RegExp("^" + q + "$"),
				V = {
					ID: new RegExp("^#(" + q + ")"),
					CLASS: new RegExp("^\\.(" + q + ")"),
					TAG: new RegExp("^(" + q + "|[*])"),
					ATTR: new RegExp("^" + I),
					PSEUDO: new RegExp("^" + H),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + N + ")$", "i"),
					needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
				},
				Q = /HTML$/i,
				G = /^(?:input|select|textarea|button)$/i,
				J = /^h\d$/i,
				K = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				tt = /[+~]/,
				et = new RegExp("\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\([^\\r\\n\\f])", "g"),
				nt = function(t, e) {
					var n = "0x" + t.slice(1) - 65536;
					return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
				},
				it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				rt = function(t, e) {
					return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
				},
				ot = function() {
					p()
				},
				st = wt((function(t) {
					return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
				}), {
					dir: "parentNode",
					next: "legend"
				});
			try {
				j.apply(O = P.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
			} catch (t) {
				j = {
					apply: O.length ? function(t, e) {
						M.apply(t, P.call(e))
					} : function(t, e) {
						for (var n = t.length, i = 0; t[n++] = e[i++];);
						t.length = n - 1
					}
				}
			}

			function at(t, e, i, r) {
				var o, a, u, c, d, h, v, y = e && e.ownerDocument,
					x = e ? e.nodeType : 9;
				if (i = i || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return i;
				if (!r && (p(e), e = e || f, g)) {
					if (11 !== x && (d = Z.exec(t)))
						if (o = d[1]) {
							if (9 === x) {
								if (!(u = e.getElementById(o))) return i;
								if (u.id === o) return i.push(u), i
							} else if (y && (u = y.getElementById(o)) && b(e, u) && u.id === o) return i.push(u), i
						} else {
							if (d[2]) return j.apply(i, e.getElementsByTagName(t)), i;
							if ((o = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return j.apply(i, e.getElementsByClassName(o)), i
						} if (n.qsa && !A[t + " "] && (!m || !m.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
						if (v = t, y = e, 1 === x && (X.test(t) || W.test(t))) {
							for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(it, rt) : e.setAttribute("id", c = w)), a = (h = s(t)).length; a--;) h[a] = (c ? "#" + c : ":scope") + " " + bt(h[a]);
							v = h.join(",")
						}
						try {
							return j.apply(i, y.querySelectorAll(v)), i
						} catch (e) {
							A(t, !0)
						} finally {
							c === w && e.removeAttribute("id")
						}
					}
				}
				return l(t.replace(F, "$1"), e, i, r)
			}

			function lt() {
				var t = [];
				return function e(n, r) {
					return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
				}
			}

			function ut(t) {
				return t[w] = !0, t
			}

			function ct(t) {
				var e = f.createElement("fieldset");
				try {
					return !!t(e)
				} catch (t) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}

			function dt(t, e) {
				for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
			}

			function pt(t, e) {
				var n = e && t,
					i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === e) return -1;
				return t ? 1 : -1
			}

			function ft(t) {
				return function(e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}

			function ht(t) {
				return function(e) {
					var n = e.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && e.type === t
				}
			}

			function gt(t) {
				return function(e) {
					return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
				}
			}

			function mt(t) {
				return ut((function(e) {
					return e = +e, ut((function(n, i) {
						for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
					}))
				}))
			}

			function vt(t) {
				return t && void 0 !== t.getElementsByTagName && t
			}
			for (e in n = at.support = {}, o = at.isXML = function(t) {
					var e = t && t.namespaceURI,
						n = t && (t.ownerDocument || t).documentElement;
					return !Q.test(e || n && n.nodeName || "HTML")
				}, p = at.setDocument = function(t) {
					var e, r, s = t ? t.ownerDocument || t : x;
					return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, g = !o(f), x != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.scope = ct((function(t) {
						return h.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
					})), n.attributes = ct((function(t) {
						return t.className = "i", !t.getAttribute("className")
					})), n.getElementsByTagName = ct((function(t) {
						return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
					})), n.getElementsByClassName = K.test(f.getElementsByClassName), n.getById = ct((function(t) {
						return h.appendChild(t).id = w, !f.getElementsByName || !f.getElementsByName(w).length
					})), n.getById ? (i.filter.ID = function(t) {
						var e = t.replace(et, nt);
						return function(t) {
							return t.getAttribute("id") === e
						}
					}, i.find.ID = function(t, e) {
						if (void 0 !== e.getElementById && g) {
							var n = e.getElementById(t);
							return n ? [n] : []
						}
					}) : (i.filter.ID = function(t) {
						var e = t.replace(et, nt);
						return function(t) {
							var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
							return n && n.value === e
						}
					}, i.find.ID = function(t, e) {
						if (void 0 !== e.getElementById && g) {
							var n, i, r, o = e.getElementById(t);
							if (o) {
								if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
								for (r = e.getElementsByName(t), i = 0; o = r[i++];)
									if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
							}
							return []
						}
					}), i.find.TAG = n.getElementsByTagName ? function(t, e) {
						return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
					} : function(t, e) {
						var n, i = [],
							r = 0,
							o = e.getElementsByTagName(t);
						if ("*" === t) {
							for (; n = o[r++];) 1 === n.nodeType && i.push(n);
							return i
						}
						return o
					}, i.find.CLASS = n.getElementsByClassName && function(t, e) {
						if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
					}, v = [], m = [], (n.qsa = K.test(f.querySelectorAll)) && (ct((function(t) {
						var e;
						h.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + z + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + z + "*name" + z + "*=" + z + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
					})), ct((function(t) {
						t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var e = f.createElement("input");
						e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + z + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
					}))), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ct((function(t) {
						n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", H)
					})), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = K.test(h.compareDocumentPosition), b = e || K.test(h.contains) ? function(t, e) {
						var n = 9 === t.nodeType ? t.documentElement : t,
							i = e && e.parentNode;
						return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
					} : function(t, e) {
						if (e)
							for (; e = e.parentNode;)
								if (e === t) return !0;
						return !1
					}, E = e ? function(t, e) {
						if (t === e) return d = !0, 0;
						var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
						return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == f || t.ownerDocument == x && b(x, t) ? -1 : e == f || e.ownerDocument == x && b(x, e) ? 1 : c ? L(c, t) - L(c, e) : 0 : 4 & i ? -1 : 1)
					} : function(t, e) {
						if (t === e) return d = !0, 0;
						var n, i = 0,
							r = t.parentNode,
							o = e.parentNode,
							s = [t],
							a = [e];
						if (!r || !o) return t == f ? -1 : e == f ? 1 : r ? -1 : o ? 1 : c ? L(c, t) - L(c, e) : 0;
						if (r === o) return pt(t, e);
						for (n = t; n = n.parentNode;) s.unshift(n);
						for (n = e; n = n.parentNode;) a.unshift(n);
						for (; s[i] === a[i];) i++;
						return i ? pt(s[i], a[i]) : s[i] == x ? -1 : a[i] == x ? 1 : 0
					}, f) : f
				}, at.matches = function(t, e) {
					return at(t, null, null, e)
				}, at.matchesSelector = function(t, e) {
					if (p(t), n.matchesSelector && g && !A[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
						var i = y.call(t, e);
						if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
					} catch (t) {
						A(e, !0)
					}
					return at(e, f, null, [t]).length > 0
				}, at.contains = function(t, e) {
					return (t.ownerDocument || t) != f && p(t), b(t, e)
				}, at.attr = function(t, e) {
					(t.ownerDocument || t) != f && p(t);
					var r = i.attrHandle[e.toLowerCase()],
						o = r && $.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
					return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
				}, at.escape = function(t) {
					return (t + "").replace(it, rt)
				}, at.error = function(t) {
					throw new Error("Syntax error, unrecognized expression: " + t)
				}, at.uniqueSort = function(t) {
					var e, i = [],
						r = 0,
						o = 0;
					if (d = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(E), d) {
						for (; e = t[o++];) e === t[o] && (r = i.push(o));
						for (; r--;) t.splice(i[r], 1)
					}
					return c = null, t
				}, r = at.getText = function(t) {
					var e, n = "",
						i = 0,
						o = t.nodeType;
					if (o) {
						if (1 === o || 9 === o || 11 === o) {
							if ("string" == typeof t.textContent) return t.textContent;
							for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
						} else if (3 === o || 4 === o) return t.nodeValue
					} else
						for (; e = t[i++];) n += r(e);
					return n
				}, (i = at.selectors = {
					cacheLength: 50,
					createPseudo: ut,
					match: V,
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
						ATTR: function(t) {
							return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
						},
						CHILD: function(t) {
							return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
						},
						PSEUDO: function(t) {
							var e, n = !t[6] && t[2];
							return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
						}
					},
					filter: {
						TAG: function(t) {
							var e = t.replace(et, nt).toLowerCase();
							return "*" === t ? function() {
								return !0
							} : function(t) {
								return t.nodeName && t.nodeName.toLowerCase() === e
							}
						},
						CLASS: function(t) {
							var e = k[t + " "];
							return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && k(t, (function(t) {
								return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
							}))
						},
						ATTR: function(t, e, n) {
							return function(i) {
								var r = at.attr(i, t);
								return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function(t, e, n, i, r) {
							var o = "nth" !== t.slice(0, 3),
								s = "last" !== t.slice(-4),
								a = "of-type" === e;
							return 1 === i && 0 === r ? function(t) {
								return !!t.parentNode
							} : function(e, n, l) {
								var u, c, d, p, f, h, g = o !== s ? "nextSibling" : "previousSibling",
									m = e.parentNode,
									v = a && e.nodeName.toLowerCase(),
									y = !l && !a,
									b = !1;
								if (m) {
									if (o) {
										for (; g;) {
											for (p = e; p = p[g];)
												if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
											h = g = "only" === t && !h && "nextSibling"
										}
										return !0
									}
									if (h = [s ? m.firstChild : m.lastChild], s && y) {
										for (b = (f = (u = (c = (d = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === _ && u[1]) && u[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
											if (1 === p.nodeType && ++b && p === e) {
												c[t] = [_, f, b];
												break
											}
									} else if (y && (b = f = (u = (c = (d = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === _ && u[1]), !1 === b)
										for (;
											(p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((c = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [_, b]), p !== e)););
									return (b -= r) === i || b % i == 0 && b / i >= 0
								}
							}
						},
						PSEUDO: function(t, e) {
							var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
							return r[w] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ut((function(t, n) {
								for (var i, o = r(t, e), s = o.length; s--;) t[i = L(t, o[s])] = !(n[i] = o[s])
							})) : function(t) {
								return r(t, 0, n)
							}) : r
						}
					},
					pseudos: {
						not: ut((function(t) {
							var e = [],
								n = [],
								i = a(t.replace(F, "$1"));
							return i[w] ? ut((function(t, e, n, r) {
								for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
							})) : function(t, r, o) {
								return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
							}
						})),
						has: ut((function(t) {
							return function(e) {
								return at(t, e).length > 0
							}
						})),
						contains: ut((function(t) {
							return t = t.replace(et, nt),
								function(e) {
									return (e.textContent || r(e)).indexOf(t) > -1
								}
						})),
						lang: ut((function(t) {
							return Y.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
								function(e) {
									var n;
									do {
										if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						})),
						target: function(e) {
							var n = t.location && t.location.hash;
							return n && n.slice(1) === e.id
						},
						root: function(t) {
							return t === h
						},
						focus: function(t) {
							return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
						},
						enabled: gt(!1),
						disabled: gt(!0),
						checked: function(t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && !!t.checked || "option" === e && !!t.selected
						},
						selected: function(t) {
							return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
						},
						empty: function(t) {
							for (t = t.firstChild; t; t = t.nextSibling)
								if (t.nodeType < 6) return !1;
							return !0
						},
						parent: function(t) {
							return !i.pseudos.empty(t)
						},
						header: function(t) {
							return J.test(t.nodeName)
						},
						input: function(t) {
							return G.test(t.nodeName)
						},
						button: function(t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && "button" === t.type || "button" === e
						},
						text: function(t) {
							var e;
							return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
						},
						first: mt((function() {
							return [0]
						})),
						last: mt((function(t, e) {
							return [e - 1]
						})),
						eq: mt((function(t, e, n) {
							return [n < 0 ? n + e : n]
						})),
						even: mt((function(t, e) {
							for (var n = 0; n < e; n += 2) t.push(n);
							return t
						})),
						odd: mt((function(t, e) {
							for (var n = 1; n < e; n += 2) t.push(n);
							return t
						})),
						lt: mt((function(t, e, n) {
							for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
							return t
						})),
						gt: mt((function(t, e, n) {
							for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
							return t
						}))
					}
				}).pseudos.nth = i.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) i.pseudos[e] = ft(e);
			for (e in {
					submit: !0,
					reset: !0
				}) i.pseudos[e] = ht(e);

			function yt() {}

			function bt(t) {
				for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
				return i
			}

			function wt(t, e, n) {
				var i = e.dir,
					r = e.next,
					o = r || i,
					s = n && "parentNode" === o,
					a = T++;
				return e.first ? function(e, n, r) {
					for (; e = e[i];)
						if (1 === e.nodeType || s) return t(e, n, r);
					return !1
				} : function(e, n, l) {
					var u, c, d, p = [_, a];
					if (l) {
						for (; e = e[i];)
							if ((1 === e.nodeType || s) && t(e, n, l)) return !0
					} else
						for (; e = e[i];)
							if (1 === e.nodeType || s)
								if (c = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
								else {
									if ((u = c[o]) && u[0] === _ && u[1] === a) return p[2] = u[2];
									if (c[o] = p, p[2] = t(e, n, l)) return !0
								} return !1
				}
			}

			function xt(t) {
				return t.length > 1 ? function(e, n, i) {
					for (var r = t.length; r--;)
						if (!t[r](e, n, i)) return !1;
					return !0
				} : t[0]
			}

			function _t(t, e, n, i, r) {
				for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
				return s
			}

			function Tt(t, e, n, i, r, o) {
				return i && !i[w] && (i = Tt(i)), r && !r[w] && (r = Tt(r, o)), ut((function(o, s, a, l) {
					var u, c, d, p = [],
						f = [],
						h = s.length,
						g = o || function(t, e, n) {
							for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
							return n
						}(e || "*", a.nodeType ? [a] : a, []),
						m = !t || !o && e ? g : _t(g, p, t, a, l),
						v = n ? r || (o ? t : h || i) ? [] : s : m;
					if (n && n(m, v, a, l), i)
						for (u = _t(v, f), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
					if (o) {
						if (r || t) {
							if (r) {
								for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
								r(null, v = [], u, l)
							}
							for (c = v.length; c--;)(d = v[c]) && (u = r ? L(o, d) : p[c]) > -1 && (o[u] = !(s[u] = d))
						}
					} else v = _t(v === s ? v.splice(h, v.length) : v), r ? r(null, s, v, l) : j.apply(s, v)
				}))
			}

			function kt(t) {
				for (var e, n, r, o = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = wt((function(t) {
						return t === e
					}), a, !0), d = wt((function(t) {
						return L(e, t) > -1
					}), a, !0), p = [function(t, n, i) {
						var r = !s && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
						return e = null, r
					}]; l < o; l++)
					if (n = i.relative[t[l].type]) p = [wt(xt(p), n)];
					else {
						if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
							for (r = ++l; r < o && !i.relative[t[r].type]; r++);
							return Tt(l > 1 && xt(p), l > 1 && bt(t.slice(0, l - 1).concat({
								value: " " === t[l - 2].type ? "*" : ""
							})).replace(F, "$1"), n, l < r && kt(t.slice(l, r)), r < o && kt(t = t.slice(r)), r < o && bt(t))
						}
						p.push(n)
					} return xt(p)
			}
			return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, s = at.tokenize = function(t, e) {
				var n, r, o, s, a, l, u, c = S[t + " "];
				if (c) return e ? 0 : c.slice(0);
				for (a = t, l = [], u = i.preFilter; a;) {
					for (s in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = W.exec(a)) && (n = r.shift(), o.push({
							value: n,
							type: r[0].replace(F, " ")
						}), a = a.slice(n.length)), i.filter) !(r = V[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
						value: n,
						type: s,
						matches: r
					}), a = a.slice(n.length));
					if (!n) break
				}
				return e ? a.length : a ? at.error(t) : S(t, l).slice(0)
			}, a = at.compile = function(t, e) {
				var n, r = [],
					o = [],
					a = C[t + " "];
				if (!a) {
					for (e || (e = s(t)), n = e.length; n--;)(a = kt(e[n]))[w] ? r.push(a) : o.push(a);
					(a = C(t, function(t, e) {
						var n = e.length > 0,
							r = t.length > 0,
							o = function(o, s, a, l, c) {
								var d, h, m, v = 0,
									y = "0",
									b = o && [],
									w = [],
									x = u,
									T = o || r && i.find.TAG("*", c),
									k = _ += null == x ? 1 : Math.random() || .1,
									S = T.length;
								for (c && (u = s == f || s || c); y !== S && null != (d = T[y]); y++) {
									if (r && d) {
										for (h = 0, s || d.ownerDocument == f || (p(d), a = !g); m = t[h++];)
											if (m(d, s || f, a)) {
												l.push(d);
												break
											} c && (_ = k)
									}
									n && ((d = !m && d) && v--, o && b.push(d))
								}
								if (v += y, n && y !== v) {
									for (h = 0; m = e[h++];) m(b, w, s, a);
									if (o) {
										if (v > 0)
											for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
										w = _t(w)
									}
									j.apply(l, w), c && !o && w.length > 0 && v + e.length > 1 && at.uniqueSort(l)
								}
								return c && (_ = k, u = x), b
							};
						return n ? ut(o) : o
					}(o, r))).selector = t
				}
				return a
			}, l = at.select = function(t, e, n, r) {
				var o, l, u, c, d, p = "function" == typeof t && t,
					f = !r && s(t = p.selector || t);
				if (n = n || [], 1 === f.length) {
					if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
						if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
						p && (e = e.parentNode), t = t.slice(l.shift().value.length)
					}
					for (o = V.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
						if ((d = i.find[c]) && (r = d(u.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
							if (l.splice(o, 1), !(t = r.length && bt(l))) return j.apply(n, r), n;
							break
						}
				}
				return (p || a(t, f))(r, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
			}, n.sortStable = w.split("").sort(E).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = ct((function(t) {
				return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
			})), ct((function(t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			})) || dt("type|href|height|width", (function(t, e, n) {
				if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			})), n.attributes && ct((function(t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			})) || dt("value", (function(t, e, n) {
				if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
			})), ct((function(t) {
				return null == t.getAttribute("disabled")
			})) || dt(N, (function(t, e, n) {
				var i;
				if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			})), at
		}(t);
	w.find = _, w.expr = _.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = _.uniqueSort, w.text = _.getText, w.isXMLDoc = _.isXML, w.contains = _.contains, w.escapeSelector = _.escape;
	var T = function(t, e, n) {
			for (var i = [], r = void 0 !== n;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (r && w(t).is(n)) break;
					i.push(t)
				} return i
		},
		k = function(t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		},
		S = w.expr.match.needsContext;

	function C(t, e) {
		return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
	}
	var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function E(t, e, n) {
		return h(e) ? w.grep(t, (function(t, i) {
			return !!e.call(t, i, t) !== n
		})) : e.nodeType ? w.grep(t, (function(t) {
			return t === e !== n
		})) : "string" != typeof e ? w.grep(t, (function(t) {
			return a.call(e, t) > -1 !== n
		})) : w.filter(e, t, n)
	}
	w.filter = function(t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e, (function(t) {
			return 1 === t.nodeType
		})))
	}, w.fn.extend({
		find: function(t) {
			var e, n, i = this.length,
				r = this;
			if ("string" != typeof t) return this.pushStack(w(t).filter((function() {
				for (e = 0; e < i; e++)
					if (w.contains(r[e], this)) return !0
			})));
			for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, r[e], n);
			return i > 1 ? w.uniqueSort(n) : n
		},
		filter: function(t) {
			return this.pushStack(E(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(E(this, t || [], !0))
		},
		is: function(t) {
			return !!E(this, "string" == typeof t && S.test(t) ? w(t) : t || [], !1).length
		}
	});
	var $, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(w.fn.init = function(t, e, n) {
		var i, r;
		if (!t) return this;
		if (n = n || $, "string" == typeof t) {
			if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : O.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
			if (i[1]) {
				if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), A.test(i[1]) && w.isPlainObject(e))
					for (i in e) h(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
				return this
			}
			return (r = m.getElementById(i[2])) && (this[0] = r, this.length = 1), this
		}
		return t.nodeType ? (this[0] = t, this.length = 1, this) : h(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
	}).prototype = w.fn, $ = w(m);
	var D = /^(?:parents|prev(?:Until|All))/,
		M = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function j(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}
	w.fn.extend({
		has: function(t) {
			var e = w(t, this),
				n = e.length;
			return this.filter((function() {
				for (var t = 0; t < n; t++)
					if (w.contains(this, e[t])) return !0
			}))
		},
		closest: function(t, e) {
			var n, i = 0,
				r = this.length,
				o = [],
				s = "string" != typeof t && w(t);
			if (!S.test(t))
				for (; i < r; i++)
					for (n = this[i]; n && n !== e; n = n.parentNode)
						if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
							o.push(n);
							break
						} return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? a.call(w(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), w.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return T(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return T(t, "parentNode", n)
		},
		next: function(t) {
			return j(t, "nextSibling")
		},
		prev: function(t) {
			return j(t, "previousSibling")
		},
		nextAll: function(t) {
			return T(t, "nextSibling")
		},
		prevAll: function(t) {
			return T(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return T(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return T(t, "previousSibling", n)
		},
		siblings: function(t) {
			return k((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return k(t.firstChild)
		},
		contents: function(t) {
			return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (C(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
		}
	}, (function(t, e) {
		w.fn[t] = function(n, i) {
			var r = w.map(this, e, n);
			return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), this.length > 1 && (M[t] || w.uniqueSort(r), D.test(t) && r.reverse()), this.pushStack(r)
		}
	}));
	var P = /[^\x20\t\r\n\f]+/g;

	function L(t) {
		return t
	}

	function N(t) {
		throw t
	}

	function z(t, e, n, i) {
		var r;
		try {
			t && h(r = t.promise) ? r.call(t).done(e).fail(n) : t && h(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
		} catch (t) {
			n.apply(void 0, [t])
		}
	}
	w.Callbacks = function(t) {
		t = "string" == typeof t ? function(t) {
			var e = {};
			return w.each(t.match(P) || [], (function(t, n) {
				e[n] = !0
			})), e
		}(t) : w.extend({}, t);
		var e, n, i, r, o = [],
			s = [],
			a = -1,
			l = function() {
				for (r = r || t.once, i = e = !0; s.length; a = -1)
					for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length, n = !1);
				t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
			},
			u = {
				add: function() {
					return o && (n && !e && (a = o.length - 1, s.push(n)), function e(n) {
						w.each(n, (function(n, i) {
							h(i) ? t.unique && u.has(i) || o.push(i) : i && i.length && "string" !== b(i) && e(i)
						}))
					}(arguments), n && !e && l()), this
				},
				remove: function() {
					return w.each(arguments, (function(t, e) {
						for (var n;
							(n = w.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= a && a--
					})), this
				},
				has: function(t) {
					return t ? w.inArray(t, o) > -1 : o.length > 0
				},
				empty: function() {
					return o && (o = []), this
				},
				disable: function() {
					return r = s = [], o = n = "", this
				},
				disabled: function() {
					return !o
				},
				lock: function() {
					return r = s = [], n || e || (o = n = ""), this
				},
				locked: function() {
					return !!r
				},
				fireWith: function(t, n) {
					return r || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
				},
				fire: function() {
					return u.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return u
	}, w.extend({
		Deferred: function(e) {
			var n = [
					["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
					["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				r = {
					state: function() {
						return i
					},
					always: function() {
						return o.done(arguments).fail(arguments), this
					},
					catch: function(t) {
						return r.then(null, t)
					},
					pipe: function() {
						var t = arguments;
						return w.Deferred((function(e) {
							w.each(n, (function(n, i) {
								var r = h(t[i[4]]) && t[i[4]];
								o[i[1]]((function() {
									var t = r && r.apply(this, arguments);
									t && h(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
								}))
							})), t = null
						})).promise()
					},
					then: function(e, i, r) {
						var o = 0;

						function s(e, n, i, r) {
							return function() {
								var a = this,
									l = arguments,
									u = function() {
										var t, u;
										if (!(e < o)) {
											if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
											u = t && ("object" == typeof t || "function" == typeof t) && t.then, h(u) ? r ? u.call(t, s(o, n, L, r), s(o, n, N, r)) : (o++, u.call(t, s(o, n, L, r), s(o, n, N, r), s(o, n, L, n.notifyWith))) : (i !== L && (a = void 0, l = [t]), (r || n.resolveWith)(a, l))
										}
									},
									c = r ? u : function() {
										try {
											u()
										} catch (t) {
											w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (i !== N && (a = void 0, l = [t]), n.rejectWith(a, l))
										}
									};
								e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
							}
						}
						return w.Deferred((function(t) {
							n[0][3].add(s(0, t, h(r) ? r : L, t.notifyWith)), n[1][3].add(s(0, t, h(e) ? e : L)), n[2][3].add(s(0, t, h(i) ? i : N))
						})).promise()
					},
					promise: function(t) {
						return null != t ? w.extend(t, r) : r
					}
				},
				o = {};
			return w.each(n, (function(t, e) {
				var s = e[2],
					a = e[5];
				r[e[1]] = s.add, a && s.add((function() {
					i = a
				}), n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), o[e[0]] = function() {
					return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
				}, o[e[0] + "With"] = s.fireWith
			})), r.promise(o), e && e.call(o, o), o
		},
		when: function(t) {
			var e = arguments.length,
				n = e,
				i = Array(n),
				o = r.call(arguments),
				s = w.Deferred(),
				a = function(t) {
					return function(n) {
						i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || s.resolveWith(i, o)
					}
				};
			if (e <= 1 && (z(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || h(o[n] && o[n].then))) return s.then();
			for (; n--;) z(o[n], a(n), s.reject);
			return s.promise()
		}
	});
	var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	w.Deferred.exceptionHook = function(e, n) {
		t.console && t.console.warn && e && q.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
	}, w.readyException = function(e) {
		t.setTimeout((function() {
			throw e
		}))
	};
	var I = w.Deferred();

	function H() {
		m.removeEventListener("DOMContentLoaded", H), t.removeEventListener("load", H), w.ready()
	}
	w.fn.ready = function(t) {
		return I.then(t).catch((function(t) {
			w.readyException(t)
		})), this
	}, w.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(t) {
			(!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== t && --w.readyWait > 0 || I.resolveWith(m, [w]))
		}
	}), w.ready.then = I.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", H), t.addEventListener("load", H));
	var R = function(t, e, n, i, r, o, s) {
			var a = 0,
				l = t.length,
				u = null == n;
			if ("object" === b(n))
				for (a in r = !0, n) R(t, e, a, n[a], !0, o, s);
			else if (void 0 !== i && (r = !0, h(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
					return u.call(w(t), n)
				})), e))
				for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
			return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
		},
		F = /^-ms-/,
		B = /-([a-z])/g;

	function W(t, e) {
		return e.toUpperCase()
	}

	function X(t) {
		return t.replace(F, "ms-").replace(B, W)
	}
	var U = function(t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	};

	function Y() {
		this.expando = w.expando + Y.uid++
	}
	Y.uid = 1, Y.prototype = {
		cache: function(t) {
			var e = t[this.expando];
			return e || (e = {}, U(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
				value: e,
				configurable: !0
			}))), e
		},
		set: function(t, e, n) {
			var i, r = this.cache(t);
			if ("string" == typeof e) r[X(e)] = n;
			else
				for (i in e) r[X(i)] = e[i];
			return r
		},
		get: function(t, e) {
			return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
		},
		access: function(t, e, n) {
			return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
		},
		remove: function(t, e) {
			var n, i = t[this.expando];
			if (void 0 !== i) {
				if (void 0 !== e) {
					n = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in i ? [e] : e.match(P) || []).length;
					for (; n--;) delete i[e[n]]
				}(void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
			}
		},
		hasData: function(t) {
			var e = t[this.expando];
			return void 0 !== e && !w.isEmptyObject(e)
		}
	};
	var V = new Y,
		Q = new Y,
		G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		J = /[A-Z]/g;

	function K(t, e, n) {
		var i;
		if (void 0 === n && 1 === t.nodeType)
			if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
				try {
					n = function(t) {
						return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : G.test(t) ? JSON.parse(t) : t)
					}(n)
				} catch (t) {}
				Q.set(t, e, n)
			} else n = void 0;
		return n
	}
	w.extend({
		hasData: function(t) {
			return Q.hasData(t) || V.hasData(t)
		},
		data: function(t, e, n) {
			return Q.access(t, e, n)
		},
		removeData: function(t, e) {
			Q.remove(t, e)
		},
		_data: function(t, e, n) {
			return V.access(t, e, n)
		},
		_removeData: function(t, e) {
			V.remove(t, e)
		}
	}), w.fn.extend({
		data: function(t, e) {
			var n, i, r, o = this[0],
				s = o && o.attributes;
			if (void 0 === t) {
				if (this.length && (r = Q.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
					for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)), K(o, i, r[i]));
					V.set(o, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == typeof t ? this.each((function() {
				Q.set(this, t)
			})) : R(this, (function(e) {
				var n;
				if (o && void 0 === e) return void 0 !== (n = Q.get(o, t)) || void 0 !== (n = K(o, t)) ? n : void 0;
				this.each((function() {
					Q.set(this, t, e)
				}))
			}), null, e, arguments.length > 1, null, !0)
		},
		removeData: function(t) {
			return this.each((function() {
				Q.remove(this, t)
			}))
		}
	}), w.extend({
		queue: function(t, e, n) {
			var i;
			if (t) return e = (e || "fx") + "queue", i = V.get(t, e), n && (!i || Array.isArray(n) ? i = V.access(t, e, w.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = w.queue(t, e),
				i = n.length,
				r = n.shift(),
				o = w._queueHooks(t, e);
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, (function() {
				w.dequeue(t, e)
			}), o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var n = e + "queueHooks";
			return V.get(t, n) || V.access(t, n, {
				empty: w.Callbacks("once memory").add((function() {
					V.remove(t, [e + "queue", n])
				}))
			})
		}
	}), w.fn.extend({
		queue: function(t, e) {
			var n = 2;
			return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each((function() {
				var n = w.queue(this, t, e);
				w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
			}))
		},
		dequeue: function(t) {
			return this.each((function() {
				w.dequeue(this, t)
			}))
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var n, i = 1,
				r = w.Deferred(),
				o = this,
				s = this.length,
				a = function() {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = V.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
			return a(), r.promise(e)
		}
	});
	var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		tt = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
		et = ["Top", "Right", "Bottom", "Left"],
		nt = m.documentElement,
		it = function(t) {
			return w.contains(t.ownerDocument, t)
		},
		rt = {
			composed: !0
		};
	nt.getRootNode && (it = function(t) {
		return w.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
	});
	var ot = function(t, e) {
		return "none" === (t = e || t).style.display || "" === t.style.display && it(t) && "none" === w.css(t, "display")
	};

	function st(t, e, n, i) {
		var r, o, s = 20,
			a = i ? function() {
				return i.cur()
			} : function() {
				return w.css(t, e, "")
			},
			l = a(),
			u = n && n[3] || (w.cssNumber[e] ? "" : "px"),
			c = t.nodeType && (w.cssNumber[e] || "px" !== u && +l) && tt.exec(w.css(t, e));
		if (c && c[3] !== u) {
			for (l /= 2, u = u || c[3], c = +l || 1; s--;) w.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
			c *= 2, w.style(t, e, c + u), n = n || []
		}
		return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
	}
	var at = {};

	function lt(t) {
		var e, n = t.ownerDocument,
			i = t.nodeName,
			r = at[i];
		return r || (e = n.body.appendChild(n.createElement(i)), r = w.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), at[i] = r, r)
	}

	function ut(t, e) {
		for (var n, i, r = [], o = 0, s = t.length; o < s; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = V.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ot(i) && (r[o] = lt(i))) : "none" !== n && (r[o] = "none", V.set(i, "display", n)));
		for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
		return t
	}
	w.fn.extend({
		show: function() {
			return ut(this, !0)
		},
		hide: function() {
			return ut(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
				ot(this) ? w(this).show() : w(this).hide()
			}))
		}
	});
	var ct, dt, pt = /^(?:checkbox|radio)$/i,
		ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		ht = /^$|^module$|\/(?:java|ecma)script/i;
	ct = m.createDocumentFragment().appendChild(m.createElement("div")), (dt = m.createElement("input")).setAttribute("type", "radio"), dt.setAttribute("checked", "checked"), dt.setAttribute("name", "t"), ct.appendChild(dt), f.checkClone = ct.cloneNode(!0).cloneNode(!0).lastChild.checked, ct.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!ct.cloneNode(!0).lastChild.defaultValue, ct.innerHTML = "<option></option>", f.option = !!ct.lastChild;
	var gt = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function mt(t, e) {
		var n;
		return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && C(t, e) ? w.merge([t], n) : n
	}

	function vt(t, e) {
		for (var n = 0, i = t.length; n < i; n++) V.set(t[n], "globalEval", !e || V.get(e[n], "globalEval"))
	}
	gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, f.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", "</select>"]);
	var yt = /<|&#?\w+;/;

	function bt(t, e, n, i, r) {
		for (var o, s, a, l, u, c, d = e.createDocumentFragment(), p = [], f = 0, h = t.length; f < h; f++)
			if ((o = t[f]) || 0 === o)
				if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o);
				else if (yt.test(o)) {
			for (s = s || d.appendChild(e.createElement("div")), a = (ft.exec(o) || ["", ""])[1].toLowerCase(), l = gt[a] || gt._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
			w.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
		} else p.push(e.createTextNode(o));
		for (d.textContent = "", f = 0; o = p[f++];)
			if (i && w.inArray(o, i) > -1) r && r.push(o);
			else if (u = it(o), s = mt(d.appendChild(o), "script"), u && vt(s), n)
			for (c = 0; o = s[c++];) ht.test(o.type || "") && n.push(o);
		return d
	}
	var wt = /^([^.]*)(?:\.(.+)|)/;

	function xt() {
		return !0
	}

	function _t() {
		return !1
	}

	function Tt(t, e) {
		return t === function() {
			try {
				return m.activeElement
			} catch (t) {}
		}() == ("focus" === e)
	}

	function kt(t, e, n, i, r, o) {
		var s, a;
		if ("object" == typeof e) {
			for (a in "string" != typeof n && (i = i || n, n = void 0), e) kt(t, a, n, i, e[a], o);
			return t
		}
		if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = _t;
		else if (!r) return t;
		return 1 === o && (s = r, (r = function(t) {
			return w().off(t), s.apply(this, arguments)
		}).guid = s.guid || (s.guid = w.guid++)), t.each((function() {
			w.event.add(this, e, r, i, n)
		}))
	}

	function St(t, e, n) {
		n ? (V.set(t, e, !1), w.event.add(t, e, {
			namespace: !1,
			handler: function(t) {
				var i, o, s = V.get(this, e);
				if (1 & t.isTrigger && this[e]) {
					if (s.length)(w.event.special[e] || {}).delegateType && t.stopPropagation();
					else if (s = r.call(arguments), V.set(this, e, s), i = n(this, e), this[e](), s !== (o = V.get(this, e)) || i ? V.set(this, e, !1) : o = {}, s !== o) return t.stopImmediatePropagation(), t.preventDefault(), o && o.value
				} else s.length && (V.set(this, e, {
					value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this)
				}), t.stopImmediatePropagation())
			}
		})) : void 0 === V.get(t, e) && w.event.add(t, e, xt)
	}
	w.event = {
		global: {},
		add: function(t, e, n, i, r) {
			var o, s, a, l, u, c, d, p, f, h, g, m = V.get(t);
			if (U(t))
				for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(nt, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(e) {
						return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
					}), u = (e = (e || "").match(P) || [""]).length; u--;) f = g = (a = wt.exec(e[u]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, c = w.extend({
					type: f,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && w.expr.match.needsContext.test(r),
					namespace: h.join(".")
				}, o), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[f] = !0)
		},
		remove: function(t, e, n, i, r) {
			var o, s, a, l, u, c, d, p, f, h, g, m = V.hasData(t) && V.get(t);
			if (m && (l = m.events)) {
				for (u = (e = (e || "").match(P) || [""]).length; u--;)
					if (f = g = (a = wt.exec(e[u]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
						for (d = w.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(t, c));
						s && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, m.handle) || w.removeEvent(t, f, m.handle), delete l[f])
					} else
						for (f in l) w.event.remove(t, f + e[u], n, i, !0);
				w.isEmptyObject(l) && V.remove(t, "handle events")
			}
		},
		dispatch: function(t) {
			var e, n, i, r, o, s, a = new Array(arguments.length),
				l = w.event.fix(t),
				u = (V.get(this, "events") || Object.create(null))[l.type] || [],
				c = w.event.special[l.type] || {};
			for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
			if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
				for (s = w.event.handlers.call(this, l, u), e = 0;
					(r = s[e++]) && !l.isPropagationStopped();)
					for (l.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, l), l.result
			}
		},
		handlers: function(t, e) {
			var n, i, r, o, s, a = [],
				l = e.delegateCount,
				u = t.target;
			if (l && u.nodeType && !("click" === t.type && t.button >= 1))
				for (; u !== this; u = u.parentNode || this)
					if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
						for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? w(r, this).index(u) > -1 : w.find(r, this, null, [u]).length), s[r] && o.push(i);
						o.length && a.push({
							elem: u,
							handlers: o
						})
					} return u = this, l < e.length && a.push({
				elem: u,
				handlers: e.slice(l)
			}), a
		},
		addProp: function(t, e) {
			Object.defineProperty(w.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: h(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(t) {
			return t[w.expando] ? t : new w.Event(t)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(t) {
					var e = this || t;
					return pt.test(e.type) && e.click && C(e, "input") && St(e, "click", xt), !1
				},
				trigger: function(t) {
					var e = this || t;
					return pt.test(e.type) && e.click && C(e, "input") && St(e, "click"), !0
				},
				_default: function(t) {
					var e = t.target;
					return pt.test(e.type) && e.click && C(e, "input") && V.get(e, "click") || C(e, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, w.removeEvent = function(t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n)
	}, w.Event = function(t, e) {
		if (!(this instanceof w.Event)) return new w.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? xt : _t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
	}, w.Event.prototype = {
		constructor: w.Event,
		isDefaultPrevented: _t,
		isPropagationStopped: _t,
		isImmediatePropagationStopped: _t,
		isSimulated: !1,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = xt, t && !this.isSimulated && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = xt, t && !this.isSimulated && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = xt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, w.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: !0
	}, w.event.addProp), w.each({
		focus: "focusin",
		blur: "focusout"
	}, (function(t, e) {
		w.event.special[t] = {
			setup: function() {
				return St(this, t, Tt), !1
			},
			trigger: function() {
				return St(this, t), !0
			},
			_default: function(e) {
				return V.get(e.target, t)
			},
			delegateType: e
		}
	})), w.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, (function(t, e) {
		w.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var n, i = this,
					r = t.relatedTarget,
					o = t.handleObj;
				return r && (r === i || w.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
			}
		}
	})), w.fn.extend({
		on: function(t, e, n, i) {
			return kt(this, t, e, n, i)
		},
		one: function(t, e, n, i) {
			return kt(this, t, e, n, i, 1)
		},
		off: function(t, e, n) {
			var i, r;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof t) {
				for (r in t) this.off(r, e, t[r]);
				return this
			}
			return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = _t), this.each((function() {
				w.event.remove(this, t, n, e)
			}))
		}
	});
	var Ct = /<script|<style|<link/i,
		At = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Et = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

	function $t(t, e) {
		return C(t, "table") && C(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
	}

	function Ot(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function Dt(t) {
		return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
	}

	function Mt(t, e) {
		var n, i, r, o, s, a;
		if (1 === e.nodeType) {
			if (V.hasData(t) && (a = V.get(t).events))
				for (r in V.remove(e, "handle events"), a)
					for (n = 0, i = a[r].length; n < i; n++) w.event.add(e, r, a[r][n]);
			Q.hasData(t) && (o = Q.access(t), s = w.extend({}, o), Q.set(e, s))
		}
	}

	function jt(t, e) {
		var n = e.nodeName.toLowerCase();
		"input" === n && pt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
	}

	function Pt(t, e, n, i) {
		e = o(e);
		var r, s, a, l, u, c, d = 0,
			p = t.length,
			g = p - 1,
			m = e[0],
			v = h(m);
		if (v || p > 1 && "string" == typeof m && !f.checkClone && At.test(m)) return t.each((function(r) {
			var o = t.eq(r);
			v && (e[0] = m.call(this, r, o.html())), Pt(o, e, n, i)
		}));
		if (p && (s = (r = bt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
			for (l = (a = w.map(mt(r, "script"), Ot)).length; d < p; d++) u = r, d !== g && (u = w.clone(u, !0, !0), l && w.merge(a, mt(u, "script"))), n.call(t[d], u, d);
			if (l)
				for (c = a[a.length - 1].ownerDocument, w.map(a, Dt), d = 0; d < l; d++) u = a[d], ht.test(u.type || "") && !V.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
					nonce: u.nonce || u.getAttribute("nonce")
				}, c) : y(u.textContent.replace(Et, ""), u, c))
		}
		return t
	}

	function Lt(t, e, n) {
		for (var i, r = e ? w.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(mt(i)), i.parentNode && (n && it(i) && vt(mt(i, "script")), i.parentNode.removeChild(i));
		return t
	}
	w.extend({
		htmlPrefilter: function(t) {
			return t
		},
		clone: function(t, e, n) {
			var i, r, o, s, a = t.cloneNode(!0),
				l = it(t);
			if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
				for (s = mt(a), i = 0, r = (o = mt(t)).length; i < r; i++) jt(o[i], s[i]);
			if (e)
				if (n)
					for (o = o || mt(t), s = s || mt(a), i = 0, r = o.length; i < r; i++) Mt(o[i], s[i]);
				else Mt(t, a);
			return (s = mt(a, "script")).length > 0 && vt(s, !l && mt(t, "script")), a
		},
		cleanData: function(t) {
			for (var e, n, i, r = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
				if (U(n)) {
					if (e = n[V.expando]) {
						if (e.events)
							for (i in e.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
						n[V.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), w.fn.extend({
		detach: function(t) {
			return Lt(this, t, !0)
		},
		remove: function(t) {
			return Lt(this, t)
		},
		text: function(t) {
			return R(this, (function(t) {
				return void 0 === t ? w.text(this) : this.empty().each((function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
				}))
			}), null, t, arguments.length)
		},
		append: function() {
			return Pt(this, arguments, (function(t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
			}))
		},
		prepend: function() {
			return Pt(this, arguments, (function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = $t(this, t);
					e.insertBefore(t, e.firstChild)
				}
			}))
		},
		before: function() {
			return Pt(this, arguments, (function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			}))
		},
		after: function() {
			return Pt(this, arguments, (function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			}))
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(mt(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map((function() {
				return w.clone(this, t, e)
			}))
		},
		html: function(t) {
			return R(this, (function(t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !Ct.test(t) && !gt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = w.htmlPrefilter(t);
					try {
						for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(mt(e, !1)), e.innerHTML = t);
						e = 0
					} catch (t) {}
				}
				e && this.empty().append(t)
			}), null, t, arguments.length)
		},
		replaceWith: function() {
			var t = [];
			return Pt(this, arguments, (function(e) {
				var n = this.parentNode;
				w.inArray(this, t) < 0 && (w.cleanData(mt(this)), n && n.replaceChild(e, this))
			}), t)
		}
	}), w.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, (function(t, e) {
		w.fn[t] = function(t) {
			for (var n, i = [], r = w(t), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(r[a])[e](n), s.apply(i, n.get());
			return this.pushStack(i)
		}
	}));
	var Nt = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
		zt = /^--/,
		qt = function(e) {
			var n = e.ownerDocument.defaultView;
			return n && n.opener || (n = t), n.getComputedStyle(e)
		},
		It = function(t, e, n) {
			var i, r, o = {};
			for (r in e) o[r] = t.style[r], t.style[r] = e[r];
			for (r in i = n.call(t), e) t.style[r] = o[r];
			return i
		},
		Ht = new RegExp(et.join("|"), "i"),
		Rt = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");

	function Ft(t, e, n) {
		var i, r, o, s, a = zt.test(e),
			l = t.style;
		return (n = n || qt(t)) && (s = n.getPropertyValue(e) || n[e], a && (s = s.replace(Rt, "$1")), "" !== s || it(t) || (s = w.style(t, e)), !f.pixelBoxStyles() && Nt.test(s) && Ht.test(e) && (i = l.width, r = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, l.width = i, l.minWidth = r, l.maxWidth = o)), void 0 !== s ? s + "" : s
	}

	function Bt(t, e) {
		return {
			get: function() {
				if (!t()) return (this.get = e).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function e() {
			if (c) {
				u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(u).appendChild(c);
				var e = t.getComputedStyle(c);
				i = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), r = 36 === n(e.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), nt.removeChild(u), c = null
			}
		}

		function n(t) {
			return Math.round(parseFloat(t))
		}
		var i, r, o, s, a, l, u = m.createElement("div"),
			c = m.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(f, {
			boxSizingReliable: function() {
				return e(), r
			},
			pixelBoxStyles: function() {
				return e(), s
			},
			pixelPosition: function() {
				return e(), i
			},
			reliableMarginLeft: function() {
				return e(), l
			},
			scrollboxSize: function() {
				return e(), o
			},
			reliableTrDimensions: function() {
				var e, n, i, r;
				return null == a && (e = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", nt.appendChild(e).appendChild(n).appendChild(i), r = t.getComputedStyle(n), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, nt.removeChild(e)), a
			}
		}))
	}();
	var Wt = ["Webkit", "Moz", "ms"],
		Xt = m.createElement("div").style,
		Ut = {};

	function Yt(t) {
		var e = w.cssProps[t] || Ut[t];
		return e || (t in Xt ? t : Ut[t] = function(t) {
			for (var e = t[0].toUpperCase() + t.slice(1), n = Wt.length; n--;)
				if ((t = Wt[n] + e) in Xt) return t
		}(t) || t)
	}
	var Vt = /^(none|table(?!-c[ea]).+)/,
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Gt = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function Jt(t, e, n) {
		var i = tt.exec(e);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
	}

	function Kt(t, e, n, i, r, o) {
		var s = "width" === e ? 1 : 0,
			a = 0,
			l = 0;
		if (n === (i ? "border" : "content")) return 0;
		for (; s < 4; s += 2) "margin" === n && (l += w.css(t, n + et[s], !0, r)), i ? ("content" === n && (l -= w.css(t, "padding" + et[s], !0, r)), "margin" !== n && (l -= w.css(t, "border" + et[s] + "Width", !0, r))) : (l += w.css(t, "padding" + et[s], !0, r), "padding" !== n ? l += w.css(t, "border" + et[s] + "Width", !0, r) : a += w.css(t, "border" + et[s] + "Width", !0, r));
		return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
	}

	function Zt(t, e, n) {
		var i = qt(t),
			r = (!f.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, i),
			o = r,
			s = Ft(t, e, i),
			a = "offset" + e[0].toUpperCase() + e.slice(1);
		if (Nt.test(s)) {
			if (!n) return s;
			s = "auto"
		}
		return (!f.boxSizingReliable() && r || !f.reliableTrDimensions() && C(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === w.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === w.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + Kt(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
	}

	function te(t, e, n, i, r) {
		return new te.prototype.init(t, e, n, i, r)
	}
	w.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var n = Ft(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(t, e, n, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var r, o, s, a = X(e),
					l = zt.test(e),
					u = t.style;
				if (l || (e = Yt(a)), s = w.cssHooks[e] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
				"string" === (o = typeof n) && (r = tt.exec(n)) && r[1] && (n = st(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
			}
		},
		css: function(t, e, n, i) {
			var r, o, s, a = X(e);
			return zt.test(e) || (e = Yt(a)), (s = w.cssHooks[e] || w.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Ft(t, e, i)), "normal" === r && e in Gt && (r = Gt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
		}
	}), w.each(["height", "width"], (function(t, e) {
		w.cssHooks[e] = {
			get: function(t, n, i) {
				if (n) return !Vt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Zt(t, e, i) : It(t, Qt, (function() {
					return Zt(t, e, i)
				}))
			},
			set: function(t, n, i) {
				var r, o = qt(t),
					s = !f.scrollboxSize() && "absolute" === o.position,
					a = (s || i) && "border-box" === w.css(t, "boxSizing", !1, o),
					l = i ? Kt(t, e, i, a, o) : 0;
				return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Kt(t, e, "border", !1, o) - .5)), l && (r = tt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Jt(0, n, l)
			}
		}
	})), w.cssHooks.marginLeft = Bt(f.reliableMarginLeft, (function(t, e) {
		if (e) return (parseFloat(Ft(t, "marginLeft")) || t.getBoundingClientRect().left - It(t, {
			marginLeft: 0
		}, (function() {
			return t.getBoundingClientRect().left
		}))) + "px"
	})), w.each({
		margin: "",
		padding: "",
		border: "Width"
	}, (function(t, e) {
		w.cssHooks[t + e] = {
			expand: function(n) {
				for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + et[i] + e] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, "margin" !== t && (w.cssHooks[t + e].set = Jt)
	})), w.fn.extend({
		css: function(t, e) {
			return R(this, (function(t, e, n) {
				var i, r, o = {},
					s = 0;
				if (Array.isArray(e)) {
					for (i = qt(t), r = e.length; s < r; s++) o[e[s]] = w.css(t, e[s], !1, i);
					return o
				}
				return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
			}), t, e, arguments.length > 1)
		}
	}), w.Tween = te, te.prototype = {
		constructor: te,
		init: function(t, e, n, i, r, o) {
			this.elem = t, this.prop = n, this.easing = r || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var t = te.propHooks[this.prop];
			return t && t.get ? t.get(this) : te.propHooks._default.get(this)
		},
		run: function(t) {
			var e, n = te.propHooks[this.prop];
			return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : te.propHooks._default.set(this), this
		}
	}, te.prototype.init.prototype = te.prototype, te.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
			},
			set: function(t) {
				w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}, te.propHooks.scrollTop = te.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, w.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, w.fx = te.prototype.init, w.fx.step = {};
	var ee, ne, ie = /^(?:toggle|show|hide)$/,
		re = /queueHooks$/;

	function oe() {
		ne && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(oe) : t.setTimeout(oe, w.fx.interval), w.fx.tick())
	}

	function se() {
		return t.setTimeout((function() {
			ee = void 0
		})), ee = Date.now()
	}

	function ae(t, e) {
		var n, i = 0,
			r = {
				height: t
			};
		for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = et[i])] = r["padding" + n] = t;
		return e && (r.opacity = r.width = t), r
	}

	function le(t, e, n) {
		for (var i, r = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), o = 0, s = r.length; o < s; o++)
			if (i = r[o].call(n, e, t)) return i
	}

	function ue(t, e, n) {
		var i, r, o = 0,
			s = ue.prefilters.length,
			a = w.Deferred().always((function() {
				delete l.elem
			})),
			l = function() {
				if (r) return !1;
				for (var e = ee || se(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
				return a.notifyWith(t, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
			},
			u = a.promise({
				elem: t,
				props: w.extend({}, e),
				opts: w.extend(!0, {
					specialEasing: {},
					easing: w.easing._default
				}, n),
				originalProperties: e,
				originalOptions: n,
				startTime: ee || se(),
				duration: n.duration,
				tweens: [],
				createTween: function(e, n) {
					var i = w.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
					return u.tweens.push(i), i
				},
				stop: function(e) {
					var n = 0,
						i = e ? u.tweens.length : 0;
					if (r) return this;
					for (r = !0; n < i; n++) u.tweens[n].run(1);
					return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
				}
			}),
			c = u.props;
		for (! function(t, e) {
				var n, i, r, o, s;
				for (n in t)
					if (r = e[i = X(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = w.cssHooks[i]) && "expand" in s)
						for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
					else e[i] = r
			}(c, u.opts.specialEasing); o < s; o++)
			if (i = ue.prefilters[o].call(u, t, c, u.opts)) return h(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
		return w.map(c, le, u), h(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
			elem: t,
			anim: u,
			queue: u.opts.queue
		})), u
	}
	w.Animation = w.extend(ue, {
			tweeners: {
				"*": [function(t, e) {
					var n = this.createTween(t, e);
					return st(n.elem, t, tt.exec(e), n), n
				}]
			},
			tweener: function(t, e) {
				h(t) ? (e = t, t = ["*"]) : t = t.match(P);
				for (var n, i = 0, r = t.length; i < r; i++) n = t[i], ue.tweeners[n] = ue.tweeners[n] || [], ue.tweeners[n].unshift(e)
			},
			prefilters: [function(t, e, n) {
				var i, r, o, s, a, l, u, c, d = "width" in e || "height" in e,
					p = this,
					f = {},
					h = t.style,
					g = t.nodeType && ot(t),
					m = V.get(t, "fxshow");
				for (i in n.queue || (null == (s = w._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
						s.unqueued || a()
					}), s.unqueued++, p.always((function() {
						p.always((function() {
							s.unqueued--, w.queue(t, "fx").length || s.empty.fire()
						}))
					}))), e)
					if (r = e[i], ie.test(r)) {
						if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
							if ("show" !== r || !m || void 0 === m[i]) continue;
							g = !0
						}
						f[i] = m && m[i] || w.style(t, i)
					} if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(f))
					for (i in d && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = V.get(t, "display")), "none" === (c = w.css(t, "display")) && (u ? c = u : (ut([t], !0), u = t.style.display || u, c = w.css(t, "display"), ut([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(t, "float") && (l || (p.done((function() {
							h.display = u
						})), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
							h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
						}))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = V.access(t, "fxshow", {
						display: u
					}), o && (m.hidden = !g), g && ut([t], !0), p.done((function() {
						for (i in g || ut([t]), V.remove(t, "fxshow"), f) w.style(t, i, f[i])
					}))), l = le(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
			}],
			prefilter: function(t, e) {
				e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
			}
		}), w.speed = function(t, e, n) {
			var i = t && "object" == typeof t ? w.extend({}, t) : {
				complete: n || !n && e || h(t) && t,
				duration: t,
				easing: n && e || e && !h(e) && e
			};
			return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				h(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
			}, i
		}, w.fn.extend({
			fadeTo: function(t, e, n, i) {
				return this.filter(ot).css("opacity", 0).show().end().animate({
					opacity: e
				}, t, n, i)
			},
			animate: function(t, e, n, i) {
				var r = w.isEmptyObject(t),
					o = w.speed(e, n, i),
					s = function() {
						var e = ue(this, w.extend({}, t), o);
						(r || V.get(this, "finish")) && e.stop(!0)
					};
				return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
			},
			stop: function(t, e, n) {
				var i = function(t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
				return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
					var e = !0,
						r = null != t && t + "queueHooks",
						o = w.timers,
						s = V.get(this);
					if (r) s[r] && s[r].stop && i(s[r]);
					else
						for (r in s) s[r] && s[r].stop && re.test(r) && i(s[r]);
					for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
					!e && n || w.dequeue(this, t)
				}))
			},
			finish: function(t) {
				return !1 !== t && (t = t || "fx"), this.each((function() {
					var e, n = V.get(this),
						i = n[t + "queue"],
						r = n[t + "queueHooks"],
						o = w.timers,
						s = i ? i.length : 0;
					for (n.finish = !0, w.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
					for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
					delete n.finish
				}))
			}
		}), w.each(["toggle", "show", "hide"], (function(t, e) {
			var n = w.fn[e];
			w.fn[e] = function(t, i, r) {
				return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ae(e, !0), t, i, r)
			}
		})), w.each({
			slideDown: ae("show"),
			slideUp: ae("hide"),
			slideToggle: ae("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, (function(t, e) {
			w.fn[t] = function(t, n, i) {
				return this.animate(e, t, n, i)
			}
		})), w.timers = [], w.fx.tick = function() {
			var t, e = 0,
				n = w.timers;
			for (ee = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
			n.length || w.fx.stop(), ee = void 0
		}, w.fx.timer = function(t) {
			w.timers.push(t), w.fx.start()
		}, w.fx.interval = 13, w.fx.start = function() {
			ne || (ne = !0, oe())
		}, w.fx.stop = function() {
			ne = null
		}, w.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, w.fn.delay = function(e, n) {
			return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, (function(n, i) {
				var r = t.setTimeout(n, e);
				i.stop = function() {
					t.clearTimeout(r)
				}
			}))
		},
		function() {
			var t = m.createElement("input"),
				e = m.createElement("select").appendChild(m.createElement("option"));
			t.type = "checkbox", f.checkOn = "" !== t.value, f.optSelected = e.selected, (t = m.createElement("input")).value = "t", t.type = "radio", f.radioValue = "t" === t.value
		}();
	var ce, de = w.expr.attrHandle;
	w.fn.extend({
		attr: function(t, e) {
			return R(this, w.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each((function() {
				w.removeAttr(this, t)
			}))
		}
	}), w.extend({
		attr: function(t, e, n) {
			var i, r, o = t.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (r = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ce : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = w.find.attr(t, e)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!f.radioValue && "radio" === e && C(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		},
		removeAttr: function(t, e) {
			var n, i = 0,
				r = e && e.match(P);
			if (r && 1 === t.nodeType)
				for (; n = r[i++];) t.removeAttribute(n)
		}
	}), ce = {
		set: function(t, e, n) {
			return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n
		}
	}, w.each(w.expr.match.bool.source.match(/\w+/g), (function(t, e) {
		var n = de[e] || w.find.attr;
		de[e] = function(t, e, i) {
			var r, o, s = e.toLowerCase();
			return i || (o = de[s], de[s] = r, r = null != n(t, e, i) ? s : null, de[s] = o), r
		}
	}));
	var pe = /^(?:input|select|textarea|button)$/i,
		fe = /^(?:a|area)$/i;

	function he(t) {
		return (t.match(P) || []).join(" ")
	}

	function ge(t) {
		return t.getAttribute && t.getAttribute("class") || ""
	}

	function me(t) {
		return Array.isArray(t) ? t : "string" == typeof t && t.match(P) || []
	}
	w.fn.extend({
		prop: function(t, e) {
			return R(this, w.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return this.each((function() {
				delete this[w.propFix[t] || t]
			}))
		}
	}), w.extend({
		prop: function(t, e, n) {
			var i, r, o = t.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, r = w.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = w.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : pe.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), f.optSelected || (w.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		},
		set: function(t) {
			var e = t.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
		w.propFix[this.toLowerCase()] = this
	})), w.fn.extend({
		addClass: function(t) {
			var e, n, i, r, o, s;
			return h(t) ? this.each((function(e) {
				w(this).addClass(t.call(this, e, ge(this)))
			})) : (e = me(t)).length ? this.each((function() {
				if (i = ge(this), n = 1 === this.nodeType && " " + he(i) + " ") {
					for (o = 0; o < e.length; o++) r = e[o], n.indexOf(" " + r + " ") < 0 && (n += r + " ");
					s = he(n), i !== s && this.setAttribute("class", s)
				}
			})) : this
		},
		removeClass: function(t) {
			var e, n, i, r, o, s;
			return h(t) ? this.each((function(e) {
				w(this).removeClass(t.call(this, e, ge(this)))
			})) : arguments.length ? (e = me(t)).length ? this.each((function() {
				if (i = ge(this), n = 1 === this.nodeType && " " + he(i) + " ") {
					for (o = 0; o < e.length; o++)
						for (r = e[o]; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
					s = he(n), i !== s && this.setAttribute("class", s)
				}
			})) : this : this.attr("class", "")
		},
		toggleClass: function(t, e) {
			var n, i, r, o, s = typeof t,
				a = "string" === s || Array.isArray(t);
			return h(t) ? this.each((function(n) {
				w(this).toggleClass(t.call(this, n, ge(this), e), e)
			})) : "boolean" == typeof e && a ? e ? this.addClass(t) : this.removeClass(t) : (n = me(t), this.each((function() {
				if (a)
					for (o = w(this), r = 0; r < n.length; r++) i = n[r], o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
				else void 0 !== t && "boolean" !== s || ((i = ge(this)) && V.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === t ? "" : V.get(this, "__className__") || ""))
			})))
		},
		hasClass: function(t) {
			var e, n, i = 0;
			for (e = " " + t + " "; n = this[i++];)
				if (1 === n.nodeType && (" " + he(ge(n)) + " ").indexOf(e) > -1) return !0;
			return !1
		}
	});
	var ve = /\r/g;
	w.fn.extend({
		val: function(t) {
			var e, n, i, r = this[0];
			return arguments.length ? (i = h(t), this.each((function(n) {
				var r;
				1 === this.nodeType && (null == (r = i ? t.call(this, n, w(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, (function(t) {
					return null == t ? "" : t + ""
				}))), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
			}))) : r ? (e = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(ve, "") : null == n ? "" : n : void 0
		}
	}), w.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = w.find.attr(t, "value");
					return null != e ? e : he(w.text(t))
				}
			},
			select: {
				get: function(t) {
					var e, n, i, r = t.options,
						o = t.selectedIndex,
						s = "select-one" === t.type,
						a = s ? null : [],
						l = s ? o + 1 : r.length;
					for (i = o < 0 ? l : s ? o : 0; i < l; i++)
						if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
							if (e = w(n).val(), s) return e;
							a.push(e)
						} return a
				},
				set: function(t, e) {
					for (var n, i, r = t.options, o = w.makeArray(e), s = r.length; s--;)((i = r[s]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
					return n || (t.selectedIndex = -1), o
				}
			}
		}
	}), w.each(["radio", "checkbox"], (function() {
		w.valHooks[this] = {
			set: function(t, e) {
				if (Array.isArray(e)) return t.checked = w.inArray(w(t).val(), e) > -1
			}
		}, f.checkOn || (w.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	})), f.focusin = "onfocusin" in t;
	var ye = /^(?:focusinfocus|focusoutblur)$/,
		be = function(t) {
			t.stopPropagation()
		};
	w.extend(w.event, {
		trigger: function(e, n, i, r) {
			var o, s, a, l, u, d, p, f, v = [i || m],
				y = c.call(e, "type") ? e.type : e,
				b = c.call(e, "namespace") ? e.namespace.split(".") : [];
			if (s = f = a = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !ye.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (e = e[w.expando] ? e : new w.Event(y, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : w.makeArray(n, [e]), p = w.event.special[y] || {}, r || !p.trigger || !1 !== p.trigger.apply(i, n))) {
				if (!r && !p.noBubble && !g(i)) {
					for (l = p.delegateType || y, ye.test(l + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), a = s;
					a === (i.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || t)
				}
				for (o = 0;
					(s = v[o++]) && !e.isPropagationStopped();) f = s, e.type = o > 1 ? l : p.bindType || y, (d = (V.get(s, "events") || Object.create(null))[e.type] && V.get(s, "handle")) && d.apply(s, n), (d = u && s[u]) && d.apply && U(s) && (e.result = d.apply(s, n), !1 === e.result && e.preventDefault());
				return e.type = y, r || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !U(i) || u && h(i[y]) && !g(i) && ((a = i[u]) && (i[u] = null), w.event.triggered = y, e.isPropagationStopped() && f.addEventListener(y, be), i[y](), e.isPropagationStopped() && f.removeEventListener(y, be), w.event.triggered = void 0, a && (i[u] = a)), e.result
			}
		},
		simulate: function(t, e, n) {
			var i = w.extend(new w.Event, n, {
				type: t,
				isSimulated: !0
			});
			w.event.trigger(i, null, e)
		}
	}), w.fn.extend({
		trigger: function(t, e) {
			return this.each((function() {
				w.event.trigger(t, e, this)
			}))
		},
		triggerHandler: function(t, e) {
			var n = this[0];
			if (n) return w.event.trigger(t, e, n, !0)
		}
	}), f.focusin || w.each({
		focus: "focusin",
		blur: "focusout"
	}, (function(t, e) {
		var n = function(t) {
			w.event.simulate(e, t.target, w.event.fix(t))
		};
		w.event.special[e] = {
			setup: function() {
				var i = this.ownerDocument || this.document || this,
					r = V.access(i, e);
				r || i.addEventListener(t, n, !0), V.access(i, e, (r || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this.document || this,
					r = V.access(i, e) - 1;
				r ? V.access(i, e, r) : (i.removeEventListener(t, n, !0), V.remove(i, e))
			}
		}
	}));
	var we = t.location,
		xe = {
			guid: Date.now()
		},
		_e = /\?/;
	w.parseXML = function(e) {
		var n, i;
		if (!e || "string" != typeof e) return null;
		try {
			n = (new t.DOMParser).parseFromString(e, "text/xml")
		} catch (t) {}
		return i = n && n.getElementsByTagName("parsererror")[0], n && !i || w.error("Invalid XML: " + (i ? w.map(i.childNodes, (function(t) {
			return t.textContent
		})).join("\n") : e)), n
	};
	var Te = /\[\]$/,
		ke = /\r?\n/g,
		Se = /^(?:submit|button|image|reset|file)$/i,
		Ce = /^(?:input|select|textarea|keygen)/i;

	function Ae(t, e, n, i) {
		var r;
		if (Array.isArray(e)) w.each(e, (function(e, r) {
			n || Te.test(t) ? i(t, r) : Ae(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
		}));
		else if (n || "object" !== b(e)) i(t, e);
		else
			for (r in e) Ae(t + "[" + r + "]", e[r], n, i)
	}
	w.param = function(t, e) {
		var n, i = [],
			r = function(t, e) {
				var n = h(e) ? e() : e;
				i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == t) return "";
		if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, (function() {
			r(this.name, this.value)
		}));
		else
			for (n in t) Ae(n, t[n], e, r);
		return i.join("&")
	}, w.fn.extend({
		serialize: function() {
			return w.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map((function() {
				var t = w.prop(this, "elements");
				return t ? w.makeArray(t) : this
			})).filter((function() {
				var t = this.type;
				return this.name && !w(this).is(":disabled") && Ce.test(this.nodeName) && !Se.test(t) && (this.checked || !pt.test(t))
			})).map((function(t, e) {
				var n = w(this).val();
				return null == n ? null : Array.isArray(n) ? w.map(n, (function(t) {
					return {
						name: e.name,
						value: t.replace(ke, "\r\n")
					}
				})) : {
					name: e.name,
					value: n.replace(ke, "\r\n")
				}
			})).get()
		}
	});
	var Ee = /%20/g,
		$e = /#.*$/,
		Oe = /([?&])_=[^&]*/,
		De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Me = /^(?:GET|HEAD)$/,
		je = /^\/\//,
		Pe = {},
		Le = {},
		Ne = "*/".concat("*"),
		ze = m.createElement("a");

	function qe(t) {
		return function(e, n) {
			"string" != typeof e && (n = e, e = "*");
			var i, r = 0,
				o = e.toLowerCase().match(P) || [];
			if (h(n))
				for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
		}
	}

	function Ie(t, e, n, i) {
		var r = {},
			o = t === Le;

		function s(a) {
			var l;
			return r[a] = !0, w.each(t[a] || [], (function(t, a) {
				var u = a(e, n, i);
				return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
			})), l
		}
		return s(e.dataTypes[0]) || !r["*"] && s("*")
	}

	function He(t, e) {
		var n, i, r = w.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
		return i && w.extend(!0, t, i), t
	}
	ze.href = we.href, w.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: we.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ne,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": w.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? He(He(t, w.ajaxSettings), e) : He(w.ajaxSettings, t)
		},
		ajaxPrefilter: qe(Pe),
		ajaxTransport: qe(Le),
		ajax: function(e, n) {
			"object" == typeof e && (n = e, e = void 0), n = n || {};
			var i, r, o, s, a, l, u, c, d, p, f = w.ajaxSetup({}, n),
				h = f.context || f,
				g = f.context && (h.nodeType || h.jquery) ? w(h) : w.event,
				v = w.Deferred(),
				y = w.Callbacks("once memory"),
				b = f.statusCode || {},
				x = {},
				_ = {},
				T = "canceled",
				k = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (u) {
							if (!s)
								for (s = {}; e = De.exec(o);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
							e = s[t.toLowerCase() + " "]
						}
						return null == e ? null : e.join(", ")
					},
					getAllResponseHeaders: function() {
						return u ? o : null
					},
					setRequestHeader: function(t, e) {
						return null == u && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t, x[t] = e), this
					},
					overrideMimeType: function(t) {
						return null == u && (f.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t)
							if (u) k.always(t[k.status]);
							else
								for (e in t) b[e] = [b[e], t[e]];
						return this
					},
					abort: function(t) {
						var e = t || T;
						return i && i.abort(e), S(0, e), this
					}
				};
			if (v.promise(k), f.url = ((e || f.url || we.href) + "").replace(je, we.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [""], null == f.crossDomain) {
				l = m.createElement("a");
				try {
					l.href = f.url, l.href = l.href, f.crossDomain = ze.protocol + "//" + ze.host != l.protocol + "//" + l.host
				} catch (t) {
					f.crossDomain = !0
				}
			}
			if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), Ie(Pe, f, n, k), u) return k;
			for (d in (c = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Me.test(f.type), r = f.url.replace($e, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ee, "+")) : (p = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (_e.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Oe, "$1"), p = (_e.test(r) ? "&" : "?") + "_=" + xe.guid++ + p), f.url = r + p), f.ifModified && (w.lastModified[r] && k.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && k.setRequestHeader("If-None-Match", w.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ne + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(d, f.headers[d]);
			if (f.beforeSend && (!1 === f.beforeSend.call(h, k, f) || u)) return k.abort();
			if (T = "abort", y.add(f.complete), k.done(f.success), k.fail(f.error), i = Ie(Le, f, n, k)) {
				if (k.readyState = 1, c && g.trigger("ajaxSend", [k, f]), u) return k;
				f.async && f.timeout > 0 && (a = t.setTimeout((function() {
					k.abort("timeout")
				}), f.timeout));
				try {
					u = !1, i.send(x, S)
				} catch (t) {
					if (u) throw t;
					S(-1, t)
				}
			} else S(-1, "No Transport");

			function S(e, n, s, l) {
				var d, p, m, x, _, T = n;
				u || (u = !0, a && t.clearTimeout(a), i = void 0, o = l || "", k.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, s && (x = function(t, e, n) {
					for (var i, r, o, s, a = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
					if (i)
						for (r in a)
							if (a[r] && a[r].test(i)) {
								l.unshift(r);
								break
							} if (l[0] in n) o = l[0];
					else {
						for (r in n) {
							if (!l[0] || t.converters[r + " " + l[0]]) {
								o = r;
								break
							}
							s || (s = r)
						}
						o = o || s
					}
					if (o) return o !== l[0] && l.unshift(o), n[o]
				}(f, k, s)), !d && w.inArray("script", f.dataTypes) > -1 && w.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), x = function(t, e, n, i) {
					var r, o, s, a, l, u = {},
						c = t.dataTypes.slice();
					if (c[1])
						for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
					for (o = c.shift(); o;)
						if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
							if ("*" === o) o = l;
							else if ("*" !== l && l !== o) {
						if (!(s = u[l + " " + o] || u["* " + o]))
							for (r in u)
								if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
									!0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
									break
								} if (!0 !== s)
							if (s && t.throws) e = s(e);
							else try {
								e = s(e)
							} catch (t) {
								return {
									state: "parsererror",
									error: s ? t : "No conversion from " + l + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: e
					}
				}(f, x, k, d), d ? (f.ifModified && ((_ = k.getResponseHeader("Last-Modified")) && (w.lastModified[r] = _), (_ = k.getResponseHeader("etag")) && (w.etag[r] = _)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, p = x.data, d = !(m = x.error))) : (m = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (n || T) + "", d ? v.resolveWith(h, [p, T, k]) : v.rejectWith(h, [k, T, m]), k.statusCode(b), b = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [k, f, d ? p : m]), y.fireWith(h, [k, T]), c && (g.trigger("ajaxComplete", [k, f]), --w.active || w.event.trigger("ajaxStop")))
			}
			return k
		},
		getJSON: function(t, e, n) {
			return w.get(t, e, n, "json")
		},
		getScript: function(t, e) {
			return w.get(t, void 0, e, "script")
		}
	}), w.each(["get", "post"], (function(t, e) {
		w[e] = function(t, n, i, r) {
			return h(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
				url: t,
				type: e,
				dataType: r,
				data: n,
				success: i
			}, w.isPlainObject(t) && t))
		}
	})), w.ajaxPrefilter((function(t) {
		var e;
		for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
	})), w._evalUrl = function(t, e, n) {
		return w.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(t) {
				w.globalEval(t, e, n)
			}
		})
	}, w.fn.extend({
		wrapAll: function(t) {
			var e;
			return this[0] && (h(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			})).append(this)), this
		},
		wrapInner: function(t) {
			return h(t) ? this.each((function(e) {
				w(this).wrapInner(t.call(this, e))
			})) : this.each((function() {
				var e = w(this),
					n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			}))
		},
		wrap: function(t) {
			var e = h(t);
			return this.each((function(n) {
				w(this).wrapAll(e ? t.call(this, n) : t)
			}))
		},
		unwrap: function(t) {
			return this.parent(t).not("body").each((function() {
				w(this).replaceWith(this.childNodes)
			})), this
		}
	}), w.expr.pseudos.hidden = function(t) {
		return !w.expr.pseudos.visible(t)
	}, w.expr.pseudos.visible = function(t) {
		return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
	}, w.ajaxSettings.xhr = function() {
		try {
			return new t.XMLHttpRequest
		} catch (t) {}
	};
	var Re = {
			0: 200,
			1223: 204
		},
		Fe = w.ajaxSettings.xhr();
	f.cors = !!Fe && "withCredentials" in Fe, f.ajax = Fe = !!Fe, w.ajaxTransport((function(e) {
		var n, i;
		if (f.cors || Fe && !e.crossDomain) return {
			send: function(r, o) {
				var s, a = e.xhr();
				if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (s in e.xhrFields) a[s] = e.xhrFields[s];
				for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
				n = function(t) {
					return function() {
						n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Re[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
							binary: a.response
						} : {
							text: a.responseText
						}, a.getAllResponseHeaders()))
					}
				}, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
					4 === a.readyState && t.setTimeout((function() {
						n && i()
					}))
				}, n = n("abort");
				try {
					a.send(e.hasContent && e.data || null)
				} catch (t) {
					if (n) throw t
				}
			},
			abort: function() {
				n && n()
			}
		}
	})), w.ajaxPrefilter((function(t) {
		t.crossDomain && (t.contents.script = !1)
	})), w.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(t) {
				return w.globalEval(t), t
			}
		}
	}), w.ajaxPrefilter("script", (function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	})), w.ajaxTransport("script", (function(t) {
		var e, n;
		if (t.crossDomain || t.scriptAttrs) return {
			send: function(i, r) {
				e = w("<script>").attr(t.scriptAttrs || {}).prop({
					charset: t.scriptCharset,
					src: t.url
				}).on("load error", n = function(t) {
					e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
				}), m.head.appendChild(e[0])
			},
			abort: function() {
				n && n()
			}
		}
	}));
	var Be, We = [],
		Xe = /(=)\?(?=&|$)|\?\?/;
	w.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = We.pop() || w.expando + "_" + xe.guid++;
			return this[t] = !0, t
		}
	}), w.ajaxPrefilter("json jsonp", (function(e, n, i) {
		var r, o, s, a = !1 !== e.jsonp && (Xe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = h(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xe, "$1" + r) : !1 !== e.jsonp && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return s || w.error(r + " was not called"), s[0]
		}, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
			s = arguments
		}, i.always((function() {
			void 0 === o ? w(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, We.push(r)), s && h(o) && o(s[0]), s = o = void 0
		})), "script"
	})), f.createHTMLDocument = ((Be = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Be.childNodes.length), w.parseHTML = function(t, e, n) {
		return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (f.createHTMLDocument ? ((i = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(i)) : e = m), o = !n && [], (r = A.exec(t)) ? [e.createElement(r[1])] : (r = bt([t], e, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
		var i, r, o
	}, w.fn.load = function(t, e, n) {
		var i, r, o, s = this,
			a = t.indexOf(" ");
		return a > -1 && (i = he(t.slice(a)), t = t.slice(0, a)), h(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && w.ajax({
			url: t,
			type: r || "GET",
			dataType: "html",
			data: e
		}).done((function(t) {
			o = arguments, s.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t)
		})).always(n && function(t, e) {
			s.each((function() {
				n.apply(this, o || [t.responseText, e, t])
			}))
		}), this
	}, w.expr.pseudos.animated = function(t) {
		return w.grep(w.timers, (function(e) {
			return t === e.elem
		})).length
	}, w.offset = {
		setOffset: function(t, e, n) {
			var i, r, o, s, a, l, u = w.css(t, "position"),
				c = w(t),
				d = {};
			"static" === u && (t.style.position = "relative"), a = c.offset(), o = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), h(e) && (e = e.call(t, n, w.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
		}
	}, w.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each((function(e) {
				w.offset.setOffset(this, t, e)
			}));
			var e, n, i = this[0];
			return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, n, i = this[0],
					r = {
						top: 0,
						left: 0
					};
				if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
				else {
					for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
					t && t !== i && 1 === t.nodeType && ((r = w(t).offset()).top += w.css(t, "borderTopWidth", !0), r.left += w.css(t, "borderLeftWidth", !0))
				}
				return {
					top: e.top - r.top - w.css(i, "marginTop", !0),
					left: e.left - r.left - w.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map((function() {
				for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
				return t || nt
			}))
		}
	}), w.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, (function(t, e) {
		var n = "pageYOffset" === e;
		w.fn[t] = function(i) {
			return R(this, (function(t, i, r) {
				var o;
				if (g(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
				o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
			}), t, i, arguments.length)
		}
	})), w.each(["top", "left"], (function(t, e) {
		w.cssHooks[e] = Bt(f.pixelPosition, (function(t, n) {
			if (n) return n = Ft(t, e), Nt.test(n) ? w(t).position()[e] + "px" : n
		}))
	})), w.each({
		Height: "height",
		Width: "width"
	}, (function(t, e) {
		w.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, (function(n, i) {
			w.fn[i] = function(r, o) {
				var s = arguments.length && (n || "boolean" != typeof r),
					a = n || (!0 === r || !0 === o ? "margin" : "border");
				return R(this, (function(e, n, r) {
					var o;
					return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? w.css(e, n, a) : w.style(e, n, r, a)
				}), e, s ? r : void 0, s)
			}
		}))
	})), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
		w.fn[e] = function(t) {
			return this.on(e, t)
		}
	})), w.fn.extend({
		bind: function(t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function(t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		},
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
		w.fn[e] = function(t, n) {
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}));
	var Ue = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
	w.proxy = function(t, e) {
		var n, i, o;
		if ("string" == typeof e && (n = t[e], e = t, t = n), h(t)) return i = r.call(arguments, 2), (o = function() {
			return t.apply(e || this, i.concat(r.call(arguments)))
		}).guid = t.guid = t.guid || w.guid++, o
	}, w.holdReady = function(t) {
		t ? w.readyWait++ : w.ready(!0)
	}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = C, w.isFunction = h, w.isWindow = g, w.camelCase = X, w.type = b, w.now = Date.now, w.isNumeric = function(t) {
		var e = w.type(t);
		return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
	}, w.trim = function(t) {
		return null == t ? "" : (t + "").replace(Ue, "$1")
	}, "function" == typeof define && define.amd && define("jquery", [], (function() {
		return w
	}));
	var Ye = t.jQuery,
		Ve = t.$;
	return w.noConflict = function(e) {
		return t.$ === w && (t.$ = Ve), e && t.jQuery === w && (t.jQuery = Ye), w
	}, void 0 === e && (t.jQuery = t.$ = w), w
})),
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var n = this._events = this._events || {},
				i = n[t] = n[t] || [];
			return -1 == i.indexOf(e) && i.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var n = this._onceEvents = this._onceEvents || {};
			return (n[t] = n[t] || {})[e] = !0, this
		}
	}, e.off = function(t, e) {
		var n = this._events && this._events[t];
		if (n && n.length) {
			var i = n.indexOf(e);
			return -1 != i && n.splice(i, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var n = this._events && this._events[t];
		if (n && n.length) {
			n = n.slice(0), e = e || [];
			for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
				var o = n[r];
				i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e)
			}
			return this
		}
	}, e.allOff = function() {
		delete this._events, delete this._onceEvents
	}, t
})),
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function(n) {
		return e(t, n)
	})) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function(t, e) {
	var n = t.jQuery,
		i = t.console;

	function r(t, e) {
		for (var n in e) t[n] = e[n];
		return t
	}
	var o = Array.prototype.slice;

	function s(t, e, a) {
		if (!(this instanceof s)) return new s(t, e, a);
		var l, u = t;
		("string" == typeof t && (u = document.querySelectorAll(t)), u) ? (this.elements = (l = u, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? o.call(l) : [l]), this.options = r({}, this.options), "function" == typeof e ? a = e : r(this.options, e), a && this.on("always", a), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded " + (u || t))
	}
	s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function() {
		this.images = [], this.elements.forEach(this.addElementImages, this)
	}, s.prototype.addElementImages = function(t) {
		"IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
		var e = t.nodeType;
		if (e && a[e]) {
			for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
				var r = n[i];
				this.addImage(r)
			}
			if ("string" == typeof this.options.background) {
				var o = t.querySelectorAll(this.options.background);
				for (i = 0; i < o.length; i++) {
					var s = o[i];
					this.addElementBackgroundImages(s)
				}
			}
		}
	};
	var a = {
		1: !0,
		9: !0,
		11: !0
	};

	function l(t) {
		this.img = t
	}

	function u(t, e) {
		this.url = t, this.element = e, this.img = new Image
	}
	return s.prototype.addElementBackgroundImages = function(t) {
		var e = getComputedStyle(t);
		if (e)
			for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
				var r = i && i[2];
				r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
			}
	}, s.prototype.addImage = function(t) {
		var e = new l(t);
		this.images.push(e)
	}, s.prototype.addBackground = function(t, e) {
		var n = new u(t, e);
		this.images.push(n)
	}, s.prototype.check = function() {
		var t = this;

		function e(e, n, i) {
			setTimeout((function() {
				t.progress(e, n, i)
			}))
		}
		this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
			t.once("progress", e), t.check()
		})) : this.complete()
	}, s.prototype.progress = function(t, e, n) {
		this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, t, e)
	}, s.prototype.complete = function() {
		var t = this.hasAnyBroken ? "fail" : "done";
		if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
			var e = this.hasAnyBroken ? "reject" : "resolve";
			this.jqDeferred[e](this)
		}
	}, l.prototype = Object.create(e.prototype), l.prototype.check = function() {
		this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
	}, l.prototype.getIsImageComplete = function() {
		return this.img.complete && this.img.naturalWidth
	}, l.prototype.confirm = function(t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
	}, l.prototype.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, l.prototype.onload = function() {
		this.confirm(!0, "onload"), this.unbindEvents()
	}, l.prototype.onerror = function() {
		this.confirm(!1, "onerror"), this.unbindEvents()
	}, l.prototype.unbindEvents = function() {
		this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, u.prototype = Object.create(l.prototype), u.prototype.check = function() {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
	}, u.prototype.unbindEvents = function() {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, u.prototype.confirm = function(t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
	}, s.makeJQueryPlugin = function(e) {
		(e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function(t, e) {
			return new s(this, t, e).jqDeferred.promise(n(this))
		})
	}, s.makeJQueryPlugin(), s
})),
function(t, e) {
	var n = function(t, e, n) {
		"use strict";
		var i, r;
		if (function() {
				var e, n = {
					lazyClass: "lazyload",
					loadedClass: "lazyloaded",
					loadingClass: "lazyloading",
					preloadClass: "lazypreload",
					errorClass: "lazyerror",
					autosizesClass: "lazyautosizes",
					fastLoadedClass: "ls-is-cached",
					iframeLoadMode: 0,
					srcAttr: "data-src",
					srcsetAttr: "data-srcset",
					sizesAttr: "data-sizes",
					minSize: 40,
					customMedia: {},
					init: !0,
					expFactor: 1.5,
					hFac: .8,
					loadMode: 2,
					loadHidden: !0,
					ricTimeout: 0,
					throttleDelay: 125
				};
				for (e in r = t.lazySizesConfig || t.lazysizesConfig || {}, n) e in r || (r[e] = n[e])
			}(), !e || !e.getElementsByClassName) return {
			init: function() {},
			cfg: r,
			noSupport: !0
		};
		var o = e.documentElement,
			s = t.HTMLPictureElement,
			a = t.addEventListener.bind(t),
			l = t.setTimeout,
			u = t.requestAnimationFrame || l,
			c = t.requestIdleCallback,
			d = /^picture$/i,
			p = ["load", "error", "lazyincluded", "_lazyloaded"],
			f = {},
			h = Array.prototype.forEach,
			g = function(t, e) {
				return f[e] || (f[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), f[e].test(t.getAttribute("class") || "") && f[e]
			},
			m = function(t, e) {
				g(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e)
			},
			v = function(t, e) {
				var n;
				(n = g(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(n, " "))
			},
			y = function(t, e, n) {
				var i = n ? "addEventListener" : "removeEventListener";
				n && y(t, e), p.forEach((function(n) {
					t[i](n, e)
				}))
			},
			b = function(t, n, r, o, s) {
				var a = e.createEvent("Event");
				return r || (r = {}), r.instance = i, a.initEvent(n, !o, !s), a.detail = r, t.dispatchEvent(a), a
			},
			w = function(e, n) {
				var i;
				!s && (i = t.picturefill || r.pf) ? (n && n.src && !e.getAttribute("srcset") && e.setAttribute("srcset", n.src), i({
					reevaluate: !0,
					elements: [e]
				})) : n && n.src && (e.src = n.src)
			},
			x = function(t, e) {
				return (getComputedStyle(t, null) || {})[e]
			},
			_ = function(t, e, n) {
				for (n = n || t.offsetWidth; n < r.minSize && e && !t._lazysizesWidth;) n = e.offsetWidth, e = e.parentNode;
				return n
			},
			T = (ft = [], ht = [], gt = ft, mt = function() {
				var t = gt;
				for (gt = ft.length ? ht : ft, dt = !0, pt = !1; t.length;) t.shift()();
				dt = !1
			}, vt = function(t, n) {
				dt && !n ? t.apply(this, arguments) : (gt.push(t), pt || (pt = !0, (e.hidden ? l : u)(mt)))
			}, vt._lsFlush = mt, vt),
			k = function(t, e) {
				return e ? function() {
					T(t)
				} : function() {
					var e = this,
						n = arguments;
					T((function() {
						t.apply(e, n)
					}))
				}
			},
			S = function(t) {
				var e, i, r = function() {
						e = null, t()
					},
					o = function() {
						var t = n.now() - i;
						t < 99 ? l(o, 99 - t) : (c || r)(r)
					};
				return function() {
					i = n.now(), e || (e = l(o, 99))
				}
			},
			C = (X = /^img$/i, U = /^iframe$/i, Y = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent), V = 0, Q = 0, G = -1, J = function(t) {
				Q--, (!t || Q < 0 || !t.target) && (Q = 0)
			}, K = function(t) {
				return null == W && (W = "hidden" == x(e.body, "visibility")), W || !("hidden" == x(t.parentNode, "visibility") && "hidden" == x(t, "visibility"))
			}, Z = function(t, n) {
				var i, r = t,
					s = K(t);
				for (H -= n, B += n, R -= n, F += n; s && (r = r.offsetParent) && r != e.body && r != o;)(s = (x(r, "opacity") || 1) > 0) && "visible" != x(r, "overflow") && (i = r.getBoundingClientRect(), s = F > i.left && R < i.right && B > i.top - 1 && H < i.bottom + 1);
				return s
			}, tt = function() {
				var t, n, s, a, l, u, c, d, p, f, h, g, m = i.elements;
				if ((N = r.loadMode) && Q < 8 && (t = m.length)) {
					for (n = 0, G++; n < t; n++)
						if (m[n] && !m[n]._lazyRace)
							if (!Y || i.prematureUnveil && i.prematureUnveil(m[n])) at(m[n]);
							else if ((d = m[n].getAttribute("data-expand")) && (u = 1 * d) || (u = V), f || (f = !r.expand || r.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : r.expand, i._defEx = f, h = f * r.expFactor, g = r.hFac, W = null, V < h && Q < 1 && G > 2 && N > 2 && !e.hidden ? (V = h, G = 0) : V = N > 1 && G > 1 && Q < 6 ? f : 0), p !== u && (q = innerWidth + u * g, I = innerHeight + u, c = -1 * u, p = u), s = m[n].getBoundingClientRect(), (B = s.bottom) >= c && (H = s.top) <= I && (F = s.right) >= c * g && (R = s.left) <= q && (B || F || R || H) && (r.loadHidden || K(m[n])) && (P && Q < 3 && !d && (N < 3 || G < 4) || Z(m[n], u))) {
						if (at(m[n]), l = !0, Q > 9) break
					} else !l && P && !a && Q < 4 && G < 4 && N > 2 && (j[0] || r.preloadAfterLoad) && (j[0] || !d && (B || F || R || H || "auto" != m[n].getAttribute(r.sizesAttr))) && (a = j[0] || m[n]);
					a && !l && at(a)
				}
			}, et = function(t) {
				var e, i = 0,
					o = r.throttleDelay,
					s = r.ricTimeout,
					a = function() {
						e = !1, i = n.now(), t()
					},
					u = c && s > 49 ? function() {
						c(a, {
							timeout: s
						}), s !== r.ricTimeout && (s = r.ricTimeout)
					} : k((function() {
						l(a)
					}), !0);
				return function(t) {
					var r;
					(t = !0 === t) && (s = 33), e || (e = !0, (r = o - (n.now() - i)) < 0 && (r = 0), t || r < 9 ? u() : l(u, r))
				}
			}(tt), nt = function(t) {
				var e = t.target;
				e._lazyCache ? delete e._lazyCache : (J(t), m(e, r.loadedClass), v(e, r.loadingClass), y(e, rt), b(e, "lazyloaded"))
			}, it = k(nt), rt = function(t) {
				it({
					target: t.target
				})
			}, ot = function(t) {
				var e, n = t.getAttribute(r.srcsetAttr);
				(e = r.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), n && t.setAttribute("srcset", n)
			}, st = k((function(t, e, n, i, o) {
				var s, a, u, c, p, f;
				(p = b(t, "lazybeforeunveil", e)).defaultPrevented || (i && (n ? m(t, r.autosizesClass) : t.setAttribute("sizes", i)), a = t.getAttribute(r.srcsetAttr), s = t.getAttribute(r.srcAttr), o && (c = (u = t.parentNode) && d.test(u.nodeName || "")), f = e.firesLoad || "src" in t && (a || s || c), p = {
					target: t
				}, m(t, r.loadingClass), f && (clearTimeout(L), L = l(J, 2500), y(t, rt, !0)), c && h.call(u.getElementsByTagName("source"), ot), a ? t.setAttribute("srcset", a) : s && !c && (U.test(t.nodeName) ? function(t, e) {
					var n = t.getAttribute("data-load-mode") || r.iframeLoadMode;
					0 == n ? t.contentWindow.location.replace(e) : 1 == n && (t.src = e)
				}(t, s) : t.src = s), o && (a || c) && w(t, {
					src: s
				})), t._lazyRace && delete t._lazyRace, v(t, r.lazyClass), T((function() {
					var e = t.complete && t.naturalWidth > 1;
					f && !e || (e && m(t, r.fastLoadedClass), nt(p), t._lazyCache = !0, l((function() {
						"_lazyCache" in t && delete t._lazyCache
					}), 9)), "lazy" == t.loading && Q--
				}), !0)
			})), at = function(t) {
				if (!t._lazyRace) {
					var e, n = X.test(t.nodeName),
						i = n && (t.getAttribute(r.sizesAttr) || t.getAttribute("sizes")),
						o = "auto" == i;
					(!o && P || !n || !t.getAttribute("src") && !t.srcset || t.complete || g(t, r.errorClass) || !g(t, r.lazyClass)) && (e = b(t, "lazyunveilread").detail, o && A.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, Q++, st(t, e, o, i, n))
				}
			}, lt = S((function() {
				r.loadMode = 3, et()
			})), ut = function() {
				3 == r.loadMode && (r.loadMode = 2), lt()
			}, ct = function() {
				P || (n.now() - z < 999 ? l(ct, 999) : (P = !0, r.loadMode = 3, et(), a("scroll", ut, !0)))
			}, {
				_: function() {
					z = n.now(), i.elements = e.getElementsByClassName(r.lazyClass), j = e.getElementsByClassName(r.lazyClass + " " + r.preloadClass), a("scroll", et, !0), a("resize", et, !0), a("pageshow", (function(t) {
						if (t.persisted) {
							var n = e.querySelectorAll("." + r.loadingClass);
							n.length && n.forEach && u((function() {
								n.forEach((function(t) {
									t.complete && at(t)
								}))
							}))
						}
					})), t.MutationObserver ? new MutationObserver(et).observe(o, {
						childList: !0,
						subtree: !0,
						attributes: !0
					}) : (o.addEventListener("DOMNodeInserted", et, !0), o.addEventListener("DOMAttrModified", et, !0), setInterval(et, 999)), a("hashchange", et, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(t) {
						e.addEventListener(t, et, !0)
					})), /d$|^c/.test(e.readyState) ? ct() : (a("load", ct), e.addEventListener("DOMContentLoaded", et), l(ct, 2e4)), i.elements.length ? (tt(), T._lsFlush()) : et()
				},
				checkElems: et,
				unveil: at,
				_aLSL: ut
			}),
			A = (O = k((function(t, e, n, i) {
				var r, o, s;
				if (t._lazysizesWidth = i, i += "px", t.setAttribute("sizes", i), d.test(e.nodeName || ""))
					for (o = 0, s = (r = e.getElementsByTagName("source")).length; o < s; o++) r[o].setAttribute("sizes", i);
				n.detail.dataAttr || w(t, n.detail)
			})), D = function(t, e, n) {
				var i, r = t.parentNode;
				r && (n = _(t, r, n), (i = b(t, "lazybeforesizes", {
					width: n,
					dataAttr: !!e
				})).defaultPrevented || (n = i.detail.width) && n !== t._lazysizesWidth && O(t, r, i, n))
			}, M = S((function() {
				var t, e = $.length;
				if (e)
					for (t = 0; t < e; t++) D($[t])
			})), {
				_: function() {
					$ = e.getElementsByClassName(r.autosizesClass), a("resize", M)
				},
				checkElems: M,
				updateElem: D
			}),
			E = function() {
				!E.i && e.getElementsByClassName && (E.i = !0, A._(), C._())
			};
		var $, O, D, M;
		var j, P, L, N, z, q, I, H, R, F, B, W, X, U, Y, V, Q, G, J, K, Z, tt, et, nt, it, rt, ot, st, at, lt, ut, ct;
		var dt, pt, ft, ht, gt, mt, vt;
		return l((function() {
			r.init && E()
		})), i = {
			cfg: r,
			autoSizer: A,
			loader: C,
			init: E,
			uP: w,
			aC: m,
			rC: v,
			hC: g,
			fire: b,
			gW: _,
			rAF: T
		}
	}(t, t.document, Date);
	t.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}("undefined" != typeof window ? window : {}),
function(t, e) {
	if (t) {
		var n = function() {
			e(t.lazySizes), t.removeEventListener("lazyunveilread", n, !0)
		};
		e = e.bind(null, t, t.document), "object" == typeof module && module.exports ? e(require("lazysizes")) : "function" == typeof define && define.amd ? define(["lazysizes"], e) : t.lazySizes ? n() : t.addEventListener("lazyunveilread", n, !0)
	}
}("undefined" != typeof window ? window : 0, (function(t, e, n) {
	"use strict";
	if (t.addEventListener) {
		var i = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
			r = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
			o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
			s = /^picture$/i,
			a = n.cfg,
			l = {
				getParent: function(e, n) {
					var i = e,
						r = e.parentNode;
					return n && "prev" != n || !r || !s.test(r.nodeName || "") || (r = r.parentNode), "self" != n && (i = "prev" == n ? e.previousElementSibling : n && (r.closest || t.jQuery) && (r.closest ? r.closest(n) : jQuery(r).closest(n)[0]) || r), i
				},
				getFit: function(t) {
					var e, n, i = getComputedStyle(t, null) || {},
						s = i.content || i.fontFamily,
						a = {
							fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
						};
					return !a.fit && s && (e = s.match(r)) && (a.fit = e[1]), a.fit ? (!(n = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && s && (e = s.match(o)) && (n = e[1]), a.parent = l.getParent(t, n)) : a.fit = i.objectFit, a
				},
				getImageRatio: function(e) {
					var n, r, o, l, u, c, d, p = e.parentNode,
						f = p && s.test(p.nodeName || "") ? p.querySelectorAll("source, img") : [e];
					for (n = 0; n < f.length; n++)
						if (r = (e = f[n]).getAttribute(a.srcsetAttr) || e.getAttribute("srcset") || e.getAttribute("data-pfsrcset") || e.getAttribute("data-risrcset") || "", o = e._lsMedia || e.getAttribute("media"), o = a.customMedia[e.getAttribute("data-media") || o] || o, r && (!o || (t.matchMedia && matchMedia(o) || {}).matches)) {
							(l = parseFloat(e.getAttribute("data-aspectratio"))) || ((u = r.match(i)) ? "w" == u[2] ? (c = u[1], d = u[3]) : (c = u[3], d = u[1]) : (c = e.getAttribute("width"), d = e.getAttribute("height")), l = c / d);
							break
						} return l
				},
				calculateSize: function(t, e) {
					var n, i, r, o = this.getFit(t),
						s = o.fit,
						a = o.parent;
					return "width" == s || ("contain" == s || "cover" == s) && (i = this.getImageRatio(t)) ? (a ? e = a.clientWidth : a = t, r = e, "width" == s ? r = e : (n = e / a.clientHeight) && ("cover" == s && n < i || "contain" == s && n > i) && (r = e * (i / n)), r) : e
				}
			};
		n.parentFit = l, e.addEventListener("lazybeforesizes", (function(t) {
			if (!t.defaultPrevented && t.detail.instance == n) {
				var e = t.target;
				t.detail.width = l.calculateSize(e, t.detail.width)
			}
		}))
	}
})),
function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function(t) {
	"use strict";

	function e(t, e) {
		t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
	}

	function n(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function i(t) {
		return "string" == typeof t
	}

	function r(t) {
		return "function" == typeof t
	}

	function o(t) {
		return "number" == typeof t
	}

	function s(t) {
		return void 0 === t
	}

	function a(t) {
		return "object" == typeof t
	}

	function l(t) {
		return !1 !== t
	}

	function u() {
		return "undefined" != typeof window
	}

	function c(t) {
		return r(t) || i(t)
	}

	function d(t) {
		return (yt = fe(t, re)) && hn
	}

	function p(t, e) {
		return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
	}

	function f(t, e) {
		return !e && console.warn(t)
	}

	function h(t, e) {
		return t && (re[t] = e) && yt && (yt[t] = e) || re
	}

	function g() {
		return 0
	}

	function m(t) {
		var e, n, i = t[0];
		if (a(i) || r(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
			for (n = de.length; n-- && !de[n].targetTest(i););
			e = de[n]
		}
		for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new ze(t[n], e))) || t.splice(n, 1);
		return t
	}

	function v(t) {
		return t._gsap || m(we(t))[0]._gsap
	}

	function y(t, e, n) {
		return (n = t[e]) && r(n) ? t[e]() : s(n) && t.getAttribute && t.getAttribute(e) || n
	}

	function b(t, e) {
		return (t = t.split(",")).forEach(e) || t
	}

	function w(t) {
		return Math.round(1e5 * t) / 1e5 || 0
	}

	function x(t, e) {
		for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;);
		return i < n
	}

	function _() {
		var t, e, n = se.length,
			i = se.slice(0);
		for (ae = {}, t = se.length = 0; t < n; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
	}

	function T(t, e, n, i) {
		se.length && _(), t.render(e, n, i), se.length && _()
	}

	function k(t) {
		var e = parseFloat(t);
		return (e || 0 === e) && (t + "").match(ne).length < 2 ? e : i(t) ? t.trim() : t
	}

	function S(t) {
		return t
	}

	function C(t, e) {
		for (var n in e) n in t || (t[n] = e[n]);
		return t
	}

	function A(t, e) {
		for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
	}

	function E(t, e) {
		for (var n in e) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = a(e[n]) ? E(t[n] || (t[n] = {}), e[n]) : e[n]);
		return t
	}

	function $(t, e) {
		var n, i = {};
		for (n in t) n in e || (i[n] = t[n]);
		return i
	}

	function O(t) {
		var e = t.parent || ht,
			n = t.keyframes ? A : C;
		if (l(t.inherit))
			for (; e;) n(t, e.vars.defaults), e = e.parent || e._dp;
		return t
	}

	function D(t, e, n, i) {
		void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
		var r = e._prev,
			o = e._next;
		r ? r._next = o : t[n] === e && (t[n] = o), o ? o._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
	}

	function M(t, e) {
		!t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
	}

	function j(t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var n = t; n;) n._dirty = 1, n = n.parent;
		return t
	}

	function P(t) {
		return t._repeat ? he(t._tTime, t = t.duration() + t._rDelay) * t : 0
	}

	function L(t, e) {
		return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
	}

	function N(t) {
		return t._end = w(t._start + (t._tDur / Math.abs(t._ts || t._rts || Ft) || 0))
	}

	function z(t, e) {
		var n = t._dp;
		return n && n.smoothChildTiming && t._ts && (t._start = w(n._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), N(t), n._dirty || j(n, t)), t
	}

	function q(t, e) {
		var n;
		if ((e._time || e._initted && !e._dur) && (n = L(t.rawTime(), e), (!e._dur || ye(0, e.totalDuration(), n) - e._tTime > Ft) && e.render(n, !0)), j(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
			if (t._dur < t.duration())
				for (n = t; n._dp;) 0 <= n.rawTime() && n.totalTime(n._tTime), n = n._dp;
			t._zTime = -Ft
		}
	}

	function I(t, e, n, i) {
		return e.parent && M(e), e._start = w((o(n) ? n : n || t !== ht ? ve(t, n, e) : t._time) + e._delay), e._end = w(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
			function(t, e, n, i, r) {
				void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
				var o, s = t[i];
				if (r)
					for (o = e[r]; s && s[r] > o;) s = s._prev;
				s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
			}(t, e, "_first", "_last", t._sort ? "_start" : 0), ge(e) || (t._recent = e), i || q(t, e), t
	}

	function H(t, e) {
		return (re.ScrollTrigger || p("scrollTrigger", e)) && re.ScrollTrigger.create(e, t)
	}

	function R(t, e, n, i) {
		return We(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && wt !== Ae.frame ? (se.push(t), t._lazy = [e, i], 1) : void 0 : 1
	}

	function F(t, e, n, i) {
		var r = t._repeat,
			o = w(e) || 0,
			s = t._tTime / t._tDur;
		return s && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = r ? r < 0 ? 1e10 : w(o * (r + 1) + t._rDelay * r) : o, s && !i ? z(t, t._tTime = t._tDur * s) : t.parent && N(t), n || j(t.parent, t), t
	}

	function B(t) {
		return t instanceof He ? j(t) : F(t, t._dur)
	}

	function W(t, e, n) {
		var i, r, s = o(e[1]),
			a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
			u = e[a];
		if (s && (u.duration = e[1]), u.parent = n, t) {
			for (i = u, r = n; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = l(r.vars.inherit) && r.parent;
			u.immediateRender = l(i.immediateRender), t < 2 ? u.runBackwards = 1 : u.startAt = e[a - 1]
		}
		return new Ve(e[0], u, e[1 + a])
	}

	function X(t, e) {
		return t || 0 === t ? e(t) : e
	}

	function U(t) {
		if ("string" != typeof t) return "";
		var e = ie.exec(t);
		return e ? t.substr(e.index + e[0].length) : ""
	}

	function Y(t, e) {
		return t && a(t) && "length" in t && (!e && !t.length || t.length - 1 in t && a(t[0])) && !t.nodeType && t !== gt
	}

	function V(t) {
		return t.sort((function() {
			return .5 - Math.random()
		}))
	}

	function Q(t) {
		if (r(t)) return t;
		var e = a(t) ? t : {
				each: t
			},
			n = je(e.ease),
			o = e.from || 0,
			s = parseFloat(e.base) || 0,
			l = {},
			u = 0 < o && o < 1,
			c = isNaN(o) || u,
			d = e.axis,
			p = o,
			f = o;
		return i(o) ? p = f = {
				center: .5,
				edges: .5,
				end: 1
			} [o] || 0 : !u && c && (p = o[0], f = o[1]),
			function(t, i, r) {
				var a, u, h, g, m, v, y, b, x, _ = (r || e).length,
					T = l[_];
				if (!T) {
					if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, Rt])[1])) {
						for (y = -Rt; y < (y = r[x++].getBoundingClientRect().left) && x < _;);
						x--
					}
					for (T = l[_] = [], a = c ? Math.min(x, _) * p - .5 : o % x, u = c ? _ * f / x - .5 : o / x | 0, b = Rt, v = y = 0; v < _; v++) h = v % x - a, g = u - (v / x | 0), T[v] = m = d ? Math.abs("y" === d ? g : h) : Ut(h * h + g * g), y < m && (y = m), m < b && (b = m);
					"random" === o && V(T), T.max = y - b, T.min = b, T.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (_ < x ? _ - 1 : d ? "y" === d ? _ / x : x : Math.max(x, _ / x)) || 0) * ("edges" === o ? -1 : 1), T.b = _ < 0 ? s - _ : s, T.u = U(e.amount || e.each) || 0, n = n && _ < 0 ? Me(n) : n
				}
				return _ = (T[t] - T.min) / T.max || 0, w(T.b + (n ? n(_) : _) * T.v) + T.u
			}
	}

	function G(t) {
		var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
		return function(n) {
			var i = Math.round(parseFloat(n) / t) * t * e;
			return (i - i % 1) / e + (o(n) ? 0 : U(n))
		}
	}

	function J(t, e) {
		var n, i, s = Gt(t);
		return !s && a(t) && (n = s = t.radius || Rt, t.values ? (t = we(t.values), (i = !o(t[0])) && (n *= n)) : t = G(t.increment)), X(e, s ? r(t) ? function(e) {
			return i = t(e), Math.abs(i - e) <= n ? i : e
		} : function(e) {
			for (var r, s, a = parseFloat(i ? e.x : e), l = parseFloat(i ? e.y : 0), u = Rt, c = 0, d = t.length; d--;)(r = i ? (r = t[d].x - a) * r + (s = t[d].y - l) * s : Math.abs(t[d] - a)) < u && (u = r, c = d);
			return c = !n || u <= n ? t[c] : e, i || c === e || o(e) ? c : c + U(e)
		} : G(t))
	}

	function K(t, e, n, i) {
		return X(Gt(t) ? !e : !0 === n ? !!(n = 0) : !i, (function() {
			return Gt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
		}))
	}

	function Z(t, e, n) {
		return X(n, (function(n) {
			return t[~~e(n)]
		}))
	}

	function tt(t) {
		for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? ne : Jt), s += t.substr(o, e - o) + K(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), o = i + 1;
		return s + t.substr(o, t.length - o)
	}

	function et(t, e, n) {
		var i, r, o, s = t.labels,
			a = Rt;
		for (i in s)(r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (o = i, a = r);
		return o
	}

	function nt(t) {
		return M(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && _e(t, "onInterrupt"), t
	}

	function it(t, e, n) {
		return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Te + .5 | 0
	}

	function rt(t, e, n) {
		var i, r, s, a, l, u, c, d, p, f, h = t ? o(t) ? [t >> 16, t >> 8 & Te, t & Te] : 0 : ke.black;
		if (!h) {
			if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ke[t]) h = ke[t];
			else if ("#" === t.charAt(0)) {
				if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(h = parseInt(t.substr(1, 6), 16)) >> 16, h >> 8 & Te, h & Te, parseInt(t.substr(7), 16) / 255];
				h = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Te, t & Te]
			} else if ("hsl" === t.substr(0, 3))
				if (h = f = t.match(Jt), e) {
					if (~t.indexOf("=")) return h = t.match(Kt), n && h.length < 4 && (h[3] = 1), h
				} else a = +h[0] % 360 / 360, l = h[1] / 100, i = 2 * (u = h[2] / 100) - (r = u <= .5 ? u * (l + 1) : u + l - u * l), 3 < h.length && (h[3] *= 1), h[0] = it(a + 1 / 3, i, r), h[1] = it(a, i, r), h[2] = it(a - 1 / 3, i, r);
			else h = t.match(Jt) || ke.transparent;
			h = h.map(Number)
		}
		return e && !f && (i = h[0] / Te, r = h[1] / Te, s = h[2] / Te, u = ((c = Math.max(i, r, s)) + (d = Math.min(i, r, s))) / 2, c === d ? a = l = 0 : (p = c - d, l = .5 < u ? p / (2 - c - d) : p / (c + d), a = c === i ? (r - s) / p + (r < s ? 6 : 0) : c === r ? (s - i) / p + 2 : (i - r) / p + 4, a *= 60), h[0] = ~~(a + .5), h[1] = ~~(100 * l + .5), h[2] = ~~(100 * u + .5)), n && h.length < 4 && (h[3] = 1), h
	}

	function ot(t) {
		var e = [],
			n = [],
			i = -1;
		return t.split(Se).forEach((function(t) {
			var r = t.match(Zt) || [];
			e.push.apply(e, r), n.push(i += r.length + 1)
		})), e.c = n, e
	}

	function st(t, e, n) {
		var i, r, o, s, a = "",
			l = (t + a).match(Se),
			u = e ? "hsla(" : "rgba(",
			c = 0;
		if (!l) return t;
		if (l = l.map((function(t) {
				return (t = rt(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
			})), n && (o = ot(t), (i = n.c).join(a) !== o.c.join(a)))
			for (s = (r = t.replace(Se, "1").split(Zt)).length - 1; c < s; c++) a += r[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
		if (!r)
			for (s = (r = t.split(Se)).length - 1; c < s; c++) a += r[c] + l[c];
		return a + r[s]
	}

	function at(t) {
		var e, n = t.join(" ");
		if (Se.lastIndex = 0, Se.test(n)) return e = Ce.test(n), t[1] = st(t[1], e), t[0] = st(t[0], e, ot(t[1])), !0
	}

	function lt(t, e) {
		for (var n, i = t._first; i;) i instanceof He ? lt(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? lt(i.timeline, e) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = e)), i = i._next
	}

	function ut(t, e, n, i) {
		void 0 === n && (n = function(t) {
			return 1 - e(1 - t)
		}), void 0 === i && (i = function(t) {
			return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
		});
		var r, o = {
			easeIn: e,
			easeOut: n,
			easeInOut: i
		};
		return b(t, (function(t) {
			for (var e in $e[t] = re[t] = o, $e[r = t.toLowerCase()] = n, o) $e[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = $e[t + "." + e] = o[e]
		})), o
	}

	function ct(t) {
		return function(e) {
			return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
		}
	}

	function dt(t, e, n) {
		function i(t) {
			return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Vt((t - s) * o) + 1
		}
		var r = 1 <= e ? e : 1,
			o = (n || (t ? .3 : .45)) / (e < 1 ? e : 1),
			s = o / Bt * (Math.asin(1 / r) || 0),
			a = "out" === t ? i : "in" === t ? function(t) {
				return 1 - i(1 - t)
			} : ct(i);
		return o = Bt / o, a.config = function(e, n) {
			return dt(t, e, n)
		}, a
	}

	function pt(t, e) {
		function n(t) {
			return t ? --t * t * ((e + 1) * t + e) + 1 : 0
		}
		void 0 === e && (e = 1.70158);
		var i = "out" === t ? n : "in" === t ? function(t) {
			return 1 - n(1 - t)
		} : ct(n);
		return i.config = function(e) {
			return pt(t, e)
		}, i
	}
	var ft, ht, gt, mt, vt, yt, bt, wt, xt, _t, Tt, kt, St, Ct, At, Et, $t, Ot, Dt, Mt, jt, Pt, Lt, Nt, zt, qt, It = {
			autoSleep: 120,
			force3D: "auto",
			nullTargetWarn: 1,
			units: {
				lineHeight: ""
			}
		},
		Ht = {
			duration: .5,
			overwrite: !1,
			delay: 0
		},
		Rt = 1e8,
		Ft = 1 / Rt,
		Bt = 2 * Math.PI,
		Wt = Bt / 4,
		Xt = 0,
		Ut = Math.sqrt,
		Yt = Math.cos,
		Vt = Math.sin,
		Qt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
		Gt = Array.isArray,
		Jt = /(?:-?\.?\d|\.)+/gi,
		Kt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
		Zt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
		te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
		ee = /[+-]=-?[.\d]+/,
		ne = /[^,'"\[\]\s]+/gi,
		ie = /[\d.+\-=]+(?:e[-+]\d*)*/i,
		re = {},
		oe = {},
		se = [],
		ae = {},
		le = {},
		ue = {},
		ce = 30,
		de = [],
		pe = "",
		fe = function(t, e) {
			for (var n in e) t[n] = e[n];
			return t
		},
		he = function(t, e) {
			var n = Math.floor(t /= e);
			return t && n === t ? n - 1 : n
		},
		ge = function(t) {
			var e = t.data;
			return "isFromStart" === e || "isStart" === e
		},
		me = {
			_start: 0,
			endTime: g,
			totalDuration: g
		},
		ve = function t(e, n, r) {
			var o, s, a, l = e.labels,
				u = e._recent || me,
				c = e.duration() >= Rt ? u.endTime(!1) : e._dur;
			return i(n) && (isNaN(n) || n in l) ? (s = n.charAt(0), a = "%" === n.substr(-1), o = n.indexOf("="), "<" === s || ">" === s ? (0 <= o && (n = n.replace(/=/, "")), ("<" === s ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(n.substr(1)) || 0) * (a ? (o < 0 ? u : r).totalDuration() / 100 : 1)) : o < 0 ? (n in l || (l[n] = c), l[n]) : (s = parseFloat(n.charAt(o - 1) + n.substr(o + 1)), a && r && (s = s / 100 * (Gt(r) ? r[0] : r).totalDuration()), 1 < o ? t(e, n.substr(0, o - 1), r) + s : c + s)) : null == n ? c : +n
		},
		ye = function(t, e, n) {
			return n < t ? t : e < n ? e : n
		},
		be = [].slice,
		we = function(t, e, n) {
			return !i(t) || n || !mt && Ee() ? Gt(t) ? function(t, e, n) {
				return void 0 === n && (n = []), t.forEach((function(t) {
					return i(t) && !e || Y(t, 1) ? n.push.apply(n, we(t)) : n.push(t)
				})) || n
			}(t, n) : Y(t) ? be.call(t, 0) : t ? [t] : [] : be.call((e || vt).querySelectorAll(t), 0)
		},
		xe = function(t, e, n, i, r) {
			var o = e - t,
				s = i - n;
			return X(r, (function(e) {
				return n + ((e - t) / o * s || 0)
			}))
		},
		_e = function(t, e, n) {
			var i, r, o = t.vars,
				s = o[e];
			if (s) return i = o[e + "Params"], r = o.callbackScope || t, n && se.length && _(), i ? s.apply(r, i) : s.call(r)
		},
		Te = 255,
		ke = {
			aqua: [0, Te, Te],
			lime: [0, Te, 0],
			silver: [192, 192, 192],
			black: [0, 0, 0],
			maroon: [128, 0, 0],
			teal: [0, 128, 128],
			blue: [0, 0, Te],
			navy: [0, 0, 128],
			white: [Te, Te, Te],
			olive: [128, 128, 0],
			yellow: [Te, Te, 0],
			orange: [Te, 165, 0],
			gray: [128, 128, 128],
			purple: [128, 0, 128],
			green: [0, 128, 0],
			red: [Te, 0, 0],
			pink: [Te, 192, 203],
			cyan: [0, Te, Te],
			transparent: [Te, Te, Te, 0]
		},
		Se = function() {
			var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
			for (t in ke) e += "|" + t + "\\b";
			return new RegExp(e + ")", "gi")
		}(),
		Ce = /hsl[a]?\(/,
		Ae = ($t = Date.now, Ot = 500, Dt = 33, Mt = $t(), jt = Mt, Lt = Pt = 1e3 / 240, Ct = {
			time: 0,
			frame: 0,
			tick: function() {
				Pe(!0)
			},
			deltaRatio: function(t) {
				return At / (1e3 / (t || 60))
			},
			wake: function() {
				bt && (!mt && u() && (gt = mt = window, vt = gt.document || {}, re.gsap = hn, (gt.gsapVersions || (gt.gsapVersions = [])).push(hn.version), d(yt || gt.GreenSockGlobals || !gt.gsap && gt || {}), St = gt.requestAnimationFrame), Tt && Ct.sleep(), kt = St || function(t) {
					return setTimeout(t, Lt - 1e3 * Ct.time + 1 | 0)
				}, _t = 1, Pe(2))
			},
			sleep: function() {
				(St ? gt.cancelAnimationFrame : clearTimeout)(Tt), _t = 0, kt = g
			},
			lagSmoothing: function(t, e) {
				Ot = t || 1e8, Dt = Math.min(e, Ot, 0)
			},
			fps: function(t) {
				Pt = 1e3 / (t || 240), Lt = 1e3 * Ct.time + Pt
			},
			add: function(t) {
				Nt.indexOf(t) < 0 && Nt.push(t), Ee()
			},
			remove: function(t) {
				var e;
				~(e = Nt.indexOf(t)) && Nt.splice(e, 1) && e <= Et && Et--
			},
			_listeners: Nt = []
		}),
		Ee = function() {
			return !_t && Ae.wake()
		},
		$e = {},
		Oe = /^[\d.\-M][\d.\-,\s]/,
		De = /["']/g,
		Me = function(t) {
			return function(e) {
				return 1 - t(1 - e)
			}
		},
		je = function(t, e) {
			return t && (r(t) ? t : $e[t] || function(t) {
				var e = (t + "").split("("),
					n = $e[e[0]];
				return n && 1 < e.length && n.config ? n.config.apply(null, ~t.indexOf("{") ? [function(t) {
					for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) n = o[a], e = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[s] = isNaN(i) ? i.replace(De, "").trim() : +i, s = n.substr(e + 1).trim();
					return r
				}(e[1])] : function(t) {
					var e = t.indexOf("(") + 1,
						n = t.indexOf(")"),
						i = t.indexOf("(", e);
					return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n)
				}(t).split(",").map(k)) : $e._CE && Oe.test(t) ? $e._CE("", t) : n
			}(t)) || e
		};

	function Pe(t) {
		var e, n, i, r, o = $t() - jt,
			s = !0 === t;
		if (Ot < o && (Mt += o - Dt), (0 < (e = (i = (jt += o) - Mt) - Lt) || s) && (r = ++Ct.frame, At = i - 1e3 * Ct.time, Ct.time = i /= 1e3, Lt += e + (Pt <= e ? 4 : Pt - e), n = 1), s || (Tt = kt(Pe)), n)
			for (Et = 0; Et < Nt.length; Et++) Nt[Et](i, At, r, t)
	}

	function Le(t) {
		return t < qt ? zt * t * t : t < .7272727272727273 ? zt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? zt * (t -= 2.25 / 2.75) * t + .9375 : zt * Math.pow(t - 2.625 / 2.75, 2) + .984375
	}
	b("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
		var n = e < 5 ? e + 1 : e;
		ut(t + ",Power" + (n - 1), e ? function(t) {
			return Math.pow(t, n)
		} : function(t) {
			return t
		}, (function(t) {
			return 1 - Math.pow(1 - t, n)
		}), (function(t) {
			return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
		}))
	})), $e.Linear.easeNone = $e.none = $e.Linear.easeIn, ut("Elastic", dt("in"), dt("out"), dt()), zt = 7.5625, qt = 1 / 2.75, ut("Bounce", (function(t) {
		return 1 - Le(1 - t)
	}), Le), ut("Expo", (function(t) {
		return t ? Math.pow(2, 10 * (t - 1)) : 0
	})), ut("Circ", (function(t) {
		return -(Ut(1 - t * t) - 1)
	})), ut("Sine", (function(t) {
		return 1 === t ? 1 : 1 - Yt(t * Wt)
	})), ut("Back", pt("in"), pt("out"), pt()), $e.SteppedEase = $e.steps = re.SteppedEase = {
		config: function(t, e) {
			void 0 === t && (t = 1);
			var n = 1 / t,
				i = t + (e ? 0 : 1),
				r = e ? 1 : 0;
			return function(t) {
				return ((i * ye(0, .99999999, t) | 0) + r) * n
			}
		}
	}, Ht.ease = $e["quad.out"], b("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
		return pe += t + "," + t + "Params,"
	}));
	var Ne, ze = function(t, e) {
			this.id = Xt++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : y, this.set = e ? e.getSetter : tn
		},
		qe = ((Ne = Ie.prototype).delay = function(t) {
			return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
		}, Ne.duration = function(t) {
			return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
		}, Ne.totalDuration = function(t) {
			return arguments.length ? (this._dirty = 0, F(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
		}, Ne.totalTime = function(t, e) {
			if (Ee(), !arguments.length) return this._tTime;
			var n = this._dp;
			if (n && n.smoothChildTiming && this._ts) {
				for (z(this, t), !n._dp || n.parent || q(n, this); n.parent;) n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
				!this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && I(this._dp, this, this._start - this._delay)
			}
			return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Ft || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), T(this, t, e)), this
		}, Ne.time = function(t, e) {
			return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + P(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
		}, Ne.totalProgress = function(t, e) {
			return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
		}, Ne.progress = function(t, e) {
			return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + P(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
		}, Ne.iteration = function(t, e) {
			var n = this.duration() + this._rDelay;
			return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? he(this._tTime, n) + 1 : 1
		}, Ne.timeScale = function(t) {
			if (!arguments.length) return this._rts === -Ft ? 0 : this._rts;
			if (this._rts === t) return this;
			var e = this.parent && this._ts ? L(this.parent._time, this) : this._tTime;
			return this._rts = +t || 0, this._ts = this._ps || t === -Ft ? 0 : this._rts,
				function(t) {
					for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
					return t
				}(this.totalTime(ye(-this._delay, this._tDur, e), !0))
		}, Ne.paused = function(t) {
			return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ee(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Ft && (this._tTime -= Ft)))), this) : this._ps
		}, Ne.startTime = function(t) {
			if (arguments.length) {
				this._start = t;
				var e = this.parent || this._dp;
				return !e || !e._sort && this.parent || I(e, this, t - this._delay), this
			}
			return this._start
		}, Ne.endTime = function(t) {
			return this._start + (l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
		}, Ne.rawTime = function(t) {
			var e = this.parent || this._dp;
			return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? L(e.rawTime(t), this) : this._tTime : this._tTime
		}, Ne.globalTime = function(t) {
			for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
			return n
		}, Ne.repeat = function(t) {
			return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, B(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
		}, Ne.repeatDelay = function(t) {
			if (arguments.length) {
				var e = this._time;
				return this._rDelay = t, B(this), e ? this.time(e) : this
			}
			return this._rDelay
		}, Ne.yoyo = function(t) {
			return arguments.length ? (this._yoyo = t, this) : this._yoyo
		}, Ne.seek = function(t, e) {
			return this.totalTime(ve(this, t), l(e))
		}, Ne.restart = function(t, e) {
			return this.play().totalTime(t ? -this._delay : 0, l(e))
		}, Ne.play = function(t, e) {
			return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
		}, Ne.reverse = function(t, e) {
			return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
		}, Ne.pause = function(t, e) {
			return null != t && this.seek(t, e), this.paused(!0)
		}, Ne.resume = function() {
			return this.paused(!1)
		}, Ne.reversed = function(t) {
			return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Ft : 0)), this) : this._rts < 0
		}, Ne.invalidate = function() {
			return this._initted = this._act = 0, this._zTime = -Ft, this
		}, Ne.isActive = function() {
			var t, e = this.parent || this._dp,
				n = this._start;
			return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - Ft))
		}, Ne.eventCallback = function(t, e, n) {
			var i = this.vars;
			return 1 < arguments.length ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
		}, Ne.then = function(t) {
			var e = this;
			return new Promise((function(n) {
				function i() {
					var t = e.then;
					e.then = null, r(o) && (o = o(e)) && (o.then || o === e) && (e.then = t), n(o), e.then = t
				}
				var o = r(t) ? t : S;
				e._initted && 1 === e.totalProgress() && 0 <= e._ts || !e._tTime && e._ts < 0 ? i() : e._prom = i
			}))
		}, Ne.kill = function() {
			nt(this)
		}, Ie);

	function Ie(t) {
		this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, F(this, +t.duration, 1, 1), this.data = t.data, _t || Ae.wake()
	}
	C(qe.prototype, {
		_time: 0,
		_start: 0,
		_end: 0,
		_tTime: 0,
		_tDur: 0,
		_dirty: 0,
		_repeat: 0,
		_yoyo: !1,
		parent: null,
		_initted: !1,
		_rDelay: 0,
		_ts: 1,
		_dp: 0,
		ratio: 0,
		_zTime: -Ft,
		_prom: 0,
		_ps: !1,
		_rts: 1
	});
	var He = function(t) {
		function s(e, i) {
			var r;
			return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = l(e.sortChildren), ht && I(e.parent || ht, n(r), i), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && H(n(r), e.scrollTrigger), r
		}
		e(s, t);
		var a = s.prototype;
		return a.to = function(t, e, n) {
			return W(0, arguments, this), this
		}, a.from = function(t, e, n) {
			return W(1, arguments, this), this
		}, a.fromTo = function(t, e, n, i) {
			return W(2, arguments, this), this
		}, a.set = function(t, e, n) {
			return e.duration = 0, e.parent = this, O(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ve(t, e, ve(this, n), 1), this
		}, a.call = function(t, e, n) {
			return I(this, Ve.delayedCall(0, t, e), n)
		}, a.staggerTo = function(t, e, n, i, r, o, s) {
			return n.duration = e, n.stagger = n.stagger || i, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new Ve(t, n, ve(this, r)), this
		}, a.staggerFrom = function(t, e, n, i, r, o, s) {
			return n.runBackwards = 1, O(n).immediateRender = l(n.immediateRender), this.staggerTo(t, e, n, i, r, o, s)
		}, a.staggerFromTo = function(t, e, n, i, r, o, s, a) {
			return i.startAt = n, O(i).immediateRender = l(i.immediateRender), this.staggerTo(t, e, i, r, o, s, a)
		}, a.render = function(t, e, n) {
			var i, r, o, s, a, l, u, c, d, p, f, h, g = this._time,
				m = this._dirty ? this.totalDuration() : this._tDur,
				v = this._dur,
				y = this !== ht && m - Ft < t && 0 <= t ? m : t < Ft ? 0 : t,
				b = this._zTime < 0 != t < 0 && (this._initted || !v);
			if (y !== this._tTime || n || b) {
				if (g !== this._time && v && (y += this._time - g, t += this._time - g), i = y, d = this._start, l = !(c = this._ts), b && (v || (g = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
					if (f = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, n);
					if (i = w(y % a), y === m ? (s = this._repeat, i = v) : ((s = ~~(y / a)) && s === y / a && (i = v, s--), v < i && (i = v)), p = he(this._tTime, a), !g && this._tTime && p !== s && (p = s), f && 1 & s && (i = v - i, h = 1), s !== p && !this._lock) {
						var x = f && 1 & p,
							_ = x === (f && 1 & s);
						if (s < p && (x = !x), g = x ? 0 : v, this._lock = 1, this.render(g || (h ? 0 : w(s * a)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && _e(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), g && g !== this._time || l != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
						if (v = this._dur, m = this._tDur, _ && (this._lock = 2, g = x ? v : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
						lt(this, h)
					}
				}
				if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, n) {
						var i;
						if (e < n)
							for (i = t._first; i && i._start <= n;) {
								if (!i._dur && "isPause" === i.data && i._start > e) return i;
								i = i._next
							} else
								for (i = t._last; i && i._start >= n;) {
									if (!i._dur && "isPause" === i.data && i._start < e) return i;
									i = i._prev
								}
					}(this, w(g), w(i))) && (y -= i - (i = u._start)), this._tTime = y, this._time = i, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && i && !e && (_e(this, "onStart"), this._tTime !== y)) return this;
				if (g <= i && 0 <= t)
					for (r = this._first; r;) {
						if (o = r._next, (r._act || i >= r._start) && r._ts && u !== r) {
							if (r.parent !== this) return this.render(t, e, n);
							if (r.render(0 < r._ts ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !l) {
								u = 0, o && (y += this._zTime = -Ft);
								break
							}
						}
						r = o
					} else {
						r = this._last;
						for (var T = t < 0 ? t : i; r;) {
							if (o = r._prev, (r._act || T <= r._end) && r._ts && u !== r) {
								if (r.parent !== this) return this.render(t, e, n);
								if (r.render(0 < r._ts ? (T - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (T - r._start) * r._ts, e, n), i !== this._time || !this._ts && !l) {
									u = 0, o && (y += this._zTime = T ? -Ft : Ft);
									break
								}
							}
							r = o
						}
					}
				if (u && !e && (this.pause(), u.render(g <= i ? 0 : -Ft)._zTime = g <= i ? 1 : -1, this._ts)) return this._start = d, N(this), this.render(t, e, n);
				this._onUpdate && !e && _e(this, "onUpdate", !0), (y === m && m >= this.totalDuration() || !y && g) && (d !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || (!t && v || !(y === m && 0 < this._ts || !y && this._ts < 0) || M(this, 1), e || t < 0 && !g || !y && !g && m || (_e(this, y === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || y < m && 0 < this.timeScale() || this._prom())))
			}
			return this
		}, a.add = function(t, e) {
			var n = this;
			if (o(e) || (e = ve(this, e, t)), !(t instanceof qe)) {
				if (Gt(t)) return t.forEach((function(t) {
					return n.add(t, e)
				})), this;
				if (i(t)) return this.addLabel(t, e);
				if (!r(t)) return this;
				t = Ve.delayedCall(0, t)
			}
			return this !== t ? I(this, t, e) : this
		}, a.getChildren = function(t, e, n, i) {
			void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -Rt);
			for (var r = [], o = this._first; o;) o._start >= i && (o instanceof Ve ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), o = o._next;
			return r
		}, a.getById = function(t) {
			for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
				if (e[n].vars.id === t) return e[n]
		}, a.remove = function(t) {
			return i(t) ? this.removeLabel(t) : r(t) ? this.killTweensOf(t) : (D(this, t), t === this._recent && (this._recent = this._last), j(this))
		}, a.totalTime = function(e, n) {
			return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = w(Ae.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
		}, a.addLabel = function(t, e) {
			return this.labels[t] = ve(this, e), this
		}, a.removeLabel = function(t) {
			return delete this.labels[t], this
		}, a.addPause = function(t, e, n) {
			var i = Ve.delayedCall(0, e || g, n);
			return i.data = "isPause", this._hasPause = 1, I(this, i, ve(this, t))
		}, a.removePause = function(t) {
			var e = this._first;
			for (t = ve(this, t); e;) e._start === t && "isPause" === e.data && M(e), e = e._next
		}, a.killTweensOf = function(t, e, n) {
			for (var i = this.getTweensOf(t, n), r = i.length; r--;) Fe !== i[r] && i[r].kill(t, e);
			return this
		}, a.getTweensOf = function(t, e) {
			for (var n, i = [], r = we(t), s = this._first, a = o(e); s;) s instanceof Ve ? x(s._targets, r) && (a ? (!Fe || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (n = s.getTweensOf(r, e)).length && i.push.apply(i, n), s = s._next;
			return i
		}, a.tweenTo = function(t, e) {
			e = e || {};
			var n, i = this,
				r = ve(i, t),
				o = e.startAt,
				s = e.onStart,
				a = e.onStartParams,
				l = e.immediateRender,
				u = Ve.to(i, C({
					ease: e.ease || "none",
					lazy: !1,
					immediateRender: !1,
					time: r,
					overwrite: "auto",
					duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale()) || Ft,
					onStart: function() {
						if (i.pause(), !n) {
							var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale());
							u._dur !== t && F(u, t, 0, 1).render(u._time, !0, !0), n = 1
						}
						s && s.apply(u, a || [])
					}
				}, e));
			return l ? u.render(0) : u
		}, a.tweenFromTo = function(t, e, n) {
			return this.tweenTo(e, C({
				startAt: {
					time: ve(this, t)
				}
			}, n))
		}, a.recent = function() {
			return this._recent
		}, a.nextLabel = function(t) {
			return void 0 === t && (t = this._time), et(this, ve(this, t))
		}, a.previousLabel = function(t) {
			return void 0 === t && (t = this._time), et(this, ve(this, t), 1)
		}, a.currentLabel = function(t) {
			return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Ft)
		}, a.shiftChildren = function(t, e, n) {
			void 0 === n && (n = 0);
			for (var i, r = this._first, o = this.labels; r;) r._start >= n && (r._start += t, r._end += t), r = r._next;
			if (e)
				for (i in o) o[i] >= n && (o[i] += t);
			return j(this)
		}, a.invalidate = function() {
			var e = this._first;
			for (this._lock = 0; e;) e.invalidate(), e = e._next;
			return t.prototype.invalidate.call(this)
		}, a.clear = function(t) {
			void 0 === t && (t = !0);
			for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
			return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), j(this)
		}, a.totalDuration = function(t) {
			var e, n, i, r = 0,
				o = this,
				s = o._last,
				a = Rt;
			if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
			if (o._dirty) {
				for (i = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), a < (n = s._start) && o._sort && s._ts && !o._lock ? (o._lock = 1, I(o, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (r -= n, (!i && !o._dp || i && i.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -1 / 0), a = 0), s._end > r && s._ts && (r = s._end), s = e;
				F(o, o === ht && o._time > r ? o._time : r, 1, 1), o._dirty = 0
			}
			return o._tDur
		}, s.updateRoot = function(t) {
			if (ht._ts && (T(ht, L(t, ht)), wt = Ae.frame), Ae.frame >= ce) {
				ce += It.autoSleep || 120;
				var e = ht._first;
				if ((!e || !e._ts) && It.autoSleep && Ae._listeners.length < 2) {
					for (; e && !e._ts;) e = e._next;
					e || Ae.sleep()
				}
			}
		}, s
	}(qe);

	function Re(t, e, n, o, s, l) {
		var u, c, d, p;
		if (le[t] && !1 !== (u = new le[t]).init(s, u.rawVars ? e[t] : function(t, e, n, o, s) {
				if (r(t) && (t = Xe(t, s, e, n, o)), !a(t) || t.style && t.nodeType || Gt(t) || Qt(t)) return i(t) ? Xe(t, s, e, n, o) : t;
				var l, u = {};
				for (l in t) u[l] = Xe(t[l], s, e, n, o);
				return u
			}(e[t], o, s, l, n), n, o, l) && (n._pt = c = new un(n._pt, s, t, 0, 1, u.render, u, 0, u.priority), n !== xt))
			for (d = n._ptLookup[n._targets.indexOf(s)], p = u._props.length; p--;) d[u._props[p]] = c;
		return u
	}
	C(He.prototype, {
		_lock: 0,
		_hasPause: 0,
		_forcing: 0
	});
	var Fe, Be = function(t, e, n, o, s, a, l, u, c) {
			r(o) && (o = o(s || 0, t, a));
			var d, f = t[e],
				h = "get" !== n ? n : r(f) ? c ? t[e.indexOf("set") || !r(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : f,
				g = r(f) ? c ? Ze : Ke : Je;
			if (i(o) && (~o.indexOf("random(") && (o = tt(o)), "=" === o.charAt(1) && (!(d = parseFloat(h) + parseFloat(o.substr(2)) * ("-" === o.charAt(0) ? -1 : 1) + (U(h) || 0)) && 0 !== d || (o = d))), h !== o) return isNaN(h * o) || "" === o ? (f || e in t || p(e, o), function(t, e, n, i, r, o, s) {
				var a, l, u, c, d, p, f, h, g = new un(this._pt, t, e, 0, 1, rn, null, r),
					m = 0,
					v = 0;
				for (g.b = n, g.e = i, n += "", (f = ~(i += "").indexOf("random(")) && (i = tt(i)), o && (o(h = [n, i], t, e), n = h[0], i = h[1]), l = n.match(te) || []; a = te.exec(i);) c = a[0], d = i.substring(m, a.index), u ? u = (u + 1) % 5 : "rgba(" === d.substr(-5) && (u = 1), c !== l[v++] && (p = parseFloat(l[v - 1]) || 0, g._pt = {
					_next: g._pt,
					p: d || 1 === v ? d : ",",
					s: p,
					c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - p,
					m: u && u < 4 ? Math.round : 0
				}, m = te.lastIndex);
				return g.c = m < i.length ? i.substring(m, i.length) : "", g.fp = s, (ee.test(i) || f) && (g.e = 0), this._pt = g
			}.call(this, t, e, h, o, g, u || It.stringFilter, c)) : (d = new un(this._pt, t, e, +h || 0, o - (h || 0), "boolean" == typeof f ? nn : en, 0, g), c && (d.fp = c), l && d.modifier(l, this, t), this._pt = d)
		},
		We = function t(e, n) {
			var i, r, o, s, a, u, c, d, p, f, h, g, y, b = e.vars,
				w = b.ease,
				x = b.startAt,
				T = b.immediateRender,
				k = b.lazy,
				S = b.onUpdate,
				A = b.onUpdateParams,
				E = b.callbackScope,
				O = b.runBackwards,
				D = b.yoyoEase,
				j = b.keyframes,
				P = b.autoRevert,
				L = e._dur,
				N = e._startAt,
				z = e._targets,
				q = e.parent,
				I = q && "nested" === q.data ? q.parent._targets : z,
				H = "auto" === e._overwrite && !ft,
				R = e.timeline;
			if (!R || j && w || (w = "none"), e._ease = je(w, Ht.ease), e._yEase = D ? Me(je(!0 === D ? w : D, Ht.ease)) : 0, D && e._yoyo && !e._repeat && (D = e._yEase, e._yEase = e._ease, e._ease = D), e._from = !R && !!b.runBackwards, !R) {
				if (g = (d = z[0] ? v(z[0]).harness : 0) && b[d.prop], i = $(b, oe), N && N.render(-1, !0).kill(), x)
					if (M(e._startAt = Ve.set(z, C({
							data: "isStart",
							overwrite: !1,
							parent: q,
							immediateRender: !0,
							lazy: l(k),
							startAt: null,
							delay: 0,
							onUpdate: S,
							onUpdateParams: A,
							callbackScope: E,
							stagger: 0
						}, x))), n < 0 && !T && !P && e._startAt.render(-1, !0), T) {
						if (0 < n && !P && (e._startAt = 0), L && n <= 0) return void(n && (e._zTime = n))
					} else !1 === P && (e._startAt = 0);
				else if (O && L)
					if (N) P || (e._startAt = 0);
					else if (n && (T = !1), o = C({
						overwrite: !1,
						data: "isFromStart",
						lazy: T && l(k),
						immediateRender: T,
						stagger: 0,
						parent: q
					}, i), g && (o[d.prop] = g), M(e._startAt = Ve.set(z, o)), n < 0 && e._startAt.render(-1, !0), T) {
					if (!n) return
				} else t(e._startAt, Ft);
				for (e._pt = 0, k = L && l(k) || k && !L, r = 0; r < z.length; r++) {
					if (c = (a = z[r])._gsap || m(z)[r]._gsap, e._ptLookup[r] = f = {}, ae[c.id] && se.length && _(), h = I === z ? r : I.indexOf(a), d && !1 !== (p = new d).init(a, g || i, e, h, I) && (e._pt = s = new un(e._pt, a, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function(t) {
							f[t] = s
						})), p.priority && (u = 1)), !d || g)
						for (o in i) le[o] && (p = Re(o, i, e, h, a, I)) ? p.priority && (u = 1) : f[o] = s = Be.call(e, a, o, "get", i[o], h, I, 0, b.stringFilter);
					e._op && e._op[r] && e.kill(a, e._op[r]), H && e._pt && (Fe = e, ht.killTweensOf(a, f, e.globalTime(0)), y = !e.parent, Fe = 0), e._pt && k && (ae[c.id] = 1)
				}
				u && ln(e), e._onInit && e._onInit(e)
			}
			e._onUpdate = S, e._initted = (!e._op || e._pt) && !y
		},
		Xe = function(t, e, n, o, s) {
			return r(t) ? t.call(e, n, o, s) : i(t) && ~t.indexOf("random(") ? tt(t) : t
		},
		Ue = pe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
		Ye = (Ue + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
		Ve = function(t) {
			function r(e, i, r, s) {
				var u;
				"number" == typeof i && (r.duration = i, i = r, r = null);
				var d, p, h, v, y, b, x, _, T = (u = t.call(this, s ? i : O(i)) || this).vars,
					k = T.duration,
					S = T.delay,
					A = T.immediateRender,
					E = T.stagger,
					$ = T.overwrite,
					D = T.keyframes,
					M = T.defaults,
					j = T.scrollTrigger,
					P = T.yoyoEase,
					L = i.parent || ht,
					N = (Gt(e) || Qt(e) ? o(e[0]) : "length" in i) ? [e] : we(e);
				if (u._targets = N.length ? m(N) : f("GSAP target " + e + " not found. https://greensock.com", !It.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = $, D || E || c(k) || c(S)) {
					if (i = u.vars, (d = u.timeline = new He({
							data: "nested",
							defaults: M || {}
						})).kill(), d.parent = d._dp = n(u), d._start = 0, D) C(d.vars.defaults, {
						ease: "none"
					}), E ? N.forEach((function(t, e) {
						return D.forEach((function(n, i) {
							return d.to(t, n, i ? ">" : e * E)
						}))
					})) : D.forEach((function(t) {
						return d.to(N, t, ">")
					}));
					else {
						if (v = N.length, x = E ? Q(E) : g, a(E))
							for (y in E) ~Ue.indexOf(y) && ((_ = _ || {})[y] = E[y]);
						for (p = 0; p < v; p++) {
							for (y in h = {}, i) Ye.indexOf(y) < 0 && (h[y] = i[y]);
							h.stagger = 0, P && (h.yoyoEase = P), _ && fe(h, _), b = N[p], h.duration = +Xe(k, n(u), p, b, N), h.delay = (+Xe(S, n(u), p, b, N) || 0) - u._delay, !E && 1 === v && h.delay && (u._delay = S = h.delay, u._start += S, h.delay = 0), d.to(b, h, x(p, b, N))
						}
						d.duration() ? k = S = 0 : u.timeline = 0
					}
					k || u.duration(k = d.duration())
				} else u.timeline = 0;
				return !0 !== $ || ft || (Fe = n(u), ht.killTweensOf(N), Fe = 0), I(L, n(u), r), i.reversed && u.reverse(), i.paused && u.paused(!0), (A || !k && !D && u._start === w(L._time) && l(A) && function t(e) {
					return !e || e._ts && t(e.parent)
				}(n(u)) && "nested" !== L.data) && (u._tTime = -Ft, u.render(Math.max(0, -S))), j && H(n(u), j), u
			}
			e(r, t);
			var s = r.prototype;
			return s.render = function(t, e, n) {
				var i, r, o, s, a, l, u, c, d, p = this._time,
					f = this._tDur,
					h = this._dur,
					g = f - Ft < t && 0 <= t ? f : t < Ft ? 0 : t;
				if (h) {
					if (g !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
						if (i = g, c = this.timeline, this._repeat) {
							if (s = h + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, n);
							if (i = w(g % s), g === f ? (o = this._repeat, i = h) : ((o = ~~(g / s)) && o === g / s && (i = h, o--), h < i && (i = h)), (l = this._yoyo && 1 & o) && (d = this._yEase, i = h - i), a = he(this._tTime, s), i === p && !n && this._initted) return this;
							o !== a && (c && this._yEase && lt(c, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1, this.render(w(s * o), !0).invalidate()._lock = 0))
						}
						if (!this._initted) {
							if (R(this, t < 0 ? t : i, n, e)) return this._tTime = 0, this;
							if (h !== this._dur) return this.render(t, e, n)
						}
						if (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (d || this._ease)(i / h), this._from && (this.ratio = u = 1 - u), i && !p && !e && (_e(this, "onStart"), this._tTime !== g)) return this;
						for (r = this._pt; r;) r.r(u, r.d), r = r._next;
						c && c.render(t < 0 ? t : !i && l ? -Ft : c._dur * u, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), _e(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && _e(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && h || !(g === this._tDur && 0 < this._ts || !g && this._ts < 0) || M(this, 1), e || t < 0 && !p || !g && !p || (_e(this, g === f ? "onComplete" : "onReverseComplete", !0), !this._prom || g < f && 0 < this.timeScale() || this._prom()))
					}
				} else ! function(t, e, n, i) {
					var r, o, s, a = t.ratio,
						l = e < 0 || !e && (!t._start && function t(e) {
							var n = e.parent;
							return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
						}(t) && (t._initted || !ge(t)) || (t._ts < 0 || t._dp._ts < 0) && !ge(t)) ? 0 : 1,
						u = t._rDelay,
						c = 0;
					if (u && t._repeat && (c = ye(0, t._tDur, e), o = he(c, u), s = he(t._tTime, u), t._yoyo && 1 & o && (l = 1 - l), o !== s && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== a || i || t._zTime === Ft || !e && t._zTime) {
						if (!t._initted && R(t, e, i, n)) return;
						for (s = t._zTime, t._zTime = e || (n ? Ft : 0), n = n || e && !s, t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, r = t._pt; r;) r.r(l, r.d), r = r._next;
						t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && _e(t, "onUpdate"), c && t._repeat && !n && t.parent && _e(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && M(t, 1), n || (_e(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
					} else t._zTime || (t._zTime = e)
				}(this, t, e, n);
				return this
			}, s.targets = function() {
				return this._targets
			}, s.invalidate = function() {
				return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
			}, s.kill = function(t, e) {
				if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? nt(this) : this;
				if (this.timeline) {
					var n = this.timeline.totalDuration();
					return this.timeline.killTweensOf(t, e, Fe && !0 !== Fe.vars.overwrite)._first || nt(this), this.parent && n !== this.timeline.totalDuration() && F(this, this._dur * this.timeline._tDur / n, 0, 1), this
				}
				var r, o, s, a, l, u, c, d = this._targets,
					p = t ? we(t) : d,
					f = this._ptLookup,
					h = this._pt;
				if ((!e || "all" === e) && function(t, e) {
						for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];);
						return n < 0
					}(d, p)) return "all" === e && (this._pt = 0), nt(this);
				for (r = this._op = this._op || [], "all" !== e && (i(e) && (l = {}, b(e, (function(t) {
						return l[t] = 1
					})), e = l), e = function(t, e) {
						var n, i, r, o, s = t[0] ? v(t[0]).harness : 0,
							a = s && s.aliases;
						if (!a) return e;
						for (i in n = fe({}, e), a)
							if (i in n)
								for (r = (o = a[i].split(",")).length; r--;) n[o[r]] = n[i];
						return n
					}(d, e)), c = d.length; c--;)
					if (~p.indexOf(d[c]))
						for (l in o = f[c], "all" === e ? (r[c] = e, a = o, s = {}) : (s = r[c] = r[c] || {}, a = e), a)(u = o && o[l]) && ("kill" in u.d && !0 !== u.d.kill(l) || D(this, u, "_pt"), delete o[l]), "all" !== s && (s[l] = 1);
				return this._initted && !this._pt && h && nt(this), this
			}, r.to = function(t, e, n) {
				return new r(t, e, n)
			}, r.from = function(t, e) {
				return W(1, arguments)
			}, r.delayedCall = function(t, e, n, i) {
				return new r(e, 0, {
					immediateRender: !1,
					lazy: !1,
					overwrite: !1,
					delay: t,
					onComplete: e,
					onReverseComplete: e,
					onCompleteParams: n,
					onReverseCompleteParams: n,
					callbackScope: i
				})
			}, r.fromTo = function(t, e, n) {
				return W(2, arguments)
			}, r.set = function(t, e) {
				return e.duration = 0, e.repeatDelay || (e.repeat = 0), new r(t, e)
			}, r.killTweensOf = function(t, e, n) {
				return ht.killTweensOf(t, e, n)
			}, r
		}(qe);

	function Qe(t, e, n) {
		return t.setAttribute(e, n)
	}

	function Ge(t, e, n, i) {
		i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
	}
	C(Ve.prototype, {
		_targets: [],
		_lazy: 0,
		_startAt: 0,
		_op: 0,
		_onInit: 0
	}), b("staggerTo,staggerFrom,staggerFromTo", (function(t) {
		Ve[t] = function() {
			var e = new He,
				n = be.call(arguments, 0);
			return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
		}
	}));
	var Je = function(t, e, n) {
			return t[e] = n
		},
		Ke = function(t, e, n) {
			return t[e](n)
		},
		Ze = function(t, e, n, i) {
			return t[e](i.fp, n)
		},
		tn = function(t, e) {
			return r(t[e]) ? Ke : s(t[e]) && t.setAttribute ? Qe : Je
		},
		en = function(t, e) {
			return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
		},
		nn = function(t, e) {
			return e.set(e.t, e.p, !!(e.s + e.c * t), e)
		},
		rn = function(t, e) {
			var n = e._pt,
				i = "";
			if (!t && e.b) i = e.b;
			else if (1 === t && e.e) i = e.e;
			else {
				for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
				i += e.c
			}
			e.set(e.t, e.p, i, e)
		},
		on = function(t, e) {
			for (var n = e._pt; n;) n.r(t, n.d), n = n._next
		},
		sn = function(t, e, n, i) {
			for (var r, o = this._pt; o;) r = o._next, o.p === i && o.modifier(t, e, n), o = r
		},
		an = function(t) {
			for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? D(this, i, "_pt") : i.dep || (e = 1), i = n;
			return !e
		},
		ln = function(t) {
			for (var e, n, i, r, o = t._pt; o;) {
				for (e = o._next, n = i; n && n.pr > o.pr;) n = n._next;
				(o._prev = n ? n._prev : r) ? o._prev._next = o: i = o, (o._next = n) ? n._prev = o : r = o, o = e
			}
			t._pt = i
		},
		un = (cn.prototype.modifier = function(t, e, n) {
			this.mSet = this.mSet || this.set, this.set = Ge, this.m = t, this.mt = n, this.tween = e
		}, cn);

	function cn(t, e, n, i, r, o, s, a, l) {
		this.t = e, this.s = i, this.c = r, this.p = n, this.r = o || en, this.d = s || this, this.set = a || Je, this.pr = l || 0, (this._next = t) && (t._prev = this)
	}
	b(pe + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
		return oe[t] = 1
	})), re.TweenMax = re.TweenLite = Ve, re.TimelineLite = re.TimelineMax = He, ht = new He({
		sortChildren: !1,
		defaults: Ht,
		autoRemoveChildren: !0,
		id: "root",
		smoothChildTiming: !0
	}), It.stringFilter = at;
	var dn = {
		registerPlugin: function() {
			for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
			e.forEach((function(t) {
				return function(t) {
					var e = (t = !t.name && t.default || t).name,
						n = r(t),
						i = e && !n && t.init ? function() {
							this._props = []
						} : t,
						o = {
							init: g,
							render: on,
							add: Be,
							kill: an,
							modifier: sn,
							rawVars: 0
						},
						s = {
							targetTest: 0,
							get: 0,
							getSetter: tn,
							aliases: {},
							register: 0
						};
					if (Ee(), t !== i) {
						if (le[e]) return;
						C(i, C($(t, o), s)), fe(i.prototype, fe(o, $(t, s))), le[i.prop = e] = i, t.targetTest && (de.push(i), oe[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
					}
					h(e, i), t.register && t.register(hn, i, un)
				}(t)
			}))
		},
		timeline: function(t) {
			return new He(t)
		},
		getTweensOf: function(t, e) {
			return ht.getTweensOf(t, e)
		},
		getProperty: function(t, e, n, r) {
			i(t) && (t = we(t)[0]);
			var o = v(t || {}).get,
				s = n ? S : k;
			return "native" === n && (n = ""), t ? e ? s((le[e] && le[e].get || o)(t, e, n, r)) : function(e, n, i) {
				return s((le[e] && le[e].get || o)(t, e, n, i))
			} : t
		},
		quickSetter: function(t, e, n) {
			if (1 < (t = we(t)).length) {
				var i = t.map((function(t) {
						return hn.quickSetter(t, e, n)
					})),
					r = i.length;
				return function(t) {
					for (var e = r; e--;) i[e](t)
				}
			}
			t = t[0] || {};
			var o = le[e],
				s = v(t),
				a = s.harness && (s.harness.aliases || {})[e] || e,
				l = o ? function(e) {
					var i = new o;
					xt._pt = 0, i.init(t, n ? e + n : e, xt, 0, [t]), i.render(1, i), xt._pt && on(1, xt)
				} : s.set(t, a);
			return o ? l : function(e) {
				return l(t, a, n ? e + n : e, s, 1)
			}
		},
		isTweening: function(t) {
			return 0 < ht.getTweensOf(t, !0).length
		},
		defaults: function(t) {
			return t && t.ease && (t.ease = je(t.ease, Ht.ease)), E(Ht, t || {})
		},
		config: function(t) {
			return E(It, t || {})
		},
		registerEffect: function(t) {
			var e = t.name,
				n = t.effect,
				i = t.plugins,
				r = t.defaults,
				o = t.extendTimeline;
			(i || "").split(",").forEach((function(t) {
				return t && !le[t] && !re[t] && f(e + " effect requires " + t + " plugin.")
			})), ue[e] = function(t, e, i) {
				return n(we(t), C(e || {}, r), i)
			}, o && (He.prototype[e] = function(t, n, i) {
				return this.add(ue[e](t, a(n) ? n : (i = n) && {}, this), i)
			})
		},
		registerEase: function(t, e) {
			$e[t] = je(e)
		},
		parseEase: function(t, e) {
			return arguments.length ? je(t, e) : $e
		},
		getById: function(t) {
			return ht.getById(t)
		},
		exportRoot: function(t, e) {
			void 0 === t && (t = {});
			var n, i, r = new He(t);
			for (r.smoothChildTiming = l(t.smoothChildTiming), ht.remove(r), r._dp = 0, r._time = r._tTime = ht._time, n = ht._first; n;) i = n._next, !e && !n._dur && n instanceof Ve && n.vars.onComplete === n._targets[0] || I(r, n, n._start - n._delay), n = i;
			return I(ht, r, 0), r
		},
		utils: {
			wrap: function t(e, n, i) {
				var r = n - e;
				return Gt(e) ? Z(e, t(0, e.length), n) : X(i, (function(t) {
					return (r + (t - e) % r) % r + e
				}))
			},
			wrapYoyo: function t(e, n, i) {
				var r = n - e,
					o = 2 * r;
				return Gt(e) ? Z(e, t(0, e.length - 1), n) : X(i, (function(t) {
					return e + (r < (t = (o + (t - e) % o) % o || 0) ? o - t : t)
				}))
			},
			distribute: Q,
			random: K,
			snap: J,
			normalize: function(t, e, n) {
				return xe(t, e, 0, 1, n)
			},
			getUnit: U,
			clamp: function(t, e, n) {
				return X(n, (function(n) {
					return ye(t, e, n)
				}))
			},
			splitColor: rt,
			toArray: we,
			selector: function(t) {
				return t = we(t)[0] || f("Invalid scope") || {},
					function(e) {
						var n = t.current || t.nativeElement || t;
						return we(e, n.querySelectorAll ? n : n === t ? f("Invalid scope") || vt.createElement("div") : t)
					}
			},
			mapRange: xe,
			pipe: function() {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				return function(t) {
					return e.reduce((function(t, e) {
						return e(t)
					}), t)
				}
			},
			unitize: function(t, e) {
				return function(n) {
					return t(parseFloat(n)) + (e || U(n))
				}
			},
			interpolate: function t(e, n, r, o) {
				var s = isNaN(e + n) ? 0 : function(t) {
					return (1 - t) * e + t * n
				};
				if (!s) {
					var a, l, u, c, d, p = i(e),
						f = {};
					if (!0 === r && (o = 1) && (r = null), p) e = {
						p: e
					}, n = {
						p: n
					};
					else if (Gt(e) && !Gt(n)) {
						for (u = [], c = e.length, d = c - 2, l = 1; l < c; l++) u.push(t(e[l - 1], e[l]));
						c--, s = function(t) {
							t *= c;
							var e = Math.min(d, ~~t);
							return u[e](t - e)
						}, r = n
					} else o || (e = fe(Gt(e) ? [] : {}, e));
					if (!u) {
						for (a in n) Be.call(f, e, a, "get", n[a]);
						s = function(t) {
							return on(t, f) || (p ? e.p : e)
						}
					}
				}
				return X(r, s)
			},
			shuffle: V
		},
		install: d,
		effects: ue,
		ticker: Ae,
		updateRoot: He.updateRoot,
		plugins: le,
		globalTimeline: ht,
		core: {
			PropTween: un,
			globals: h,
			Tween: Ve,
			Timeline: He,
			Animation: qe,
			getCache: v,
			_removeLinkedListItem: D,
			suppressOverwrites: function(t) {
				return ft = t
			}
		}
	};

	function pn(t, e) {
		for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
		return n
	}

	function fn(t, e) {
		return {
			name: t,
			rawVars: 1,
			init: function(t, n, r) {
				r._onInit = function(t) {
					var r, o;
					if (i(n) && (r = {}, b(n, (function(t) {
							return r[t] = 1
						})), n = r), e) {
						for (o in r = {}, n) r[o] = e(n[o]);
						n = r
					}! function(t, e) {
						var n, i, r, o = t._targets;
						for (n in e)
							for (i = o.length; i--;)(r = (r = t._ptLookup[i][n]) && r.d) && (r._pt && (r = pn(r, n)), r && r.modifier && r.modifier(e[n], t, o[i], n))
					}(t, n)
				}
			}
		}
	}
	b("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
		return dn[t] = Ve[t]
	})), Ae.add(He.updateRoot), xt = dn.to({}, {
		duration: 0
	});
	var hn = dn.registerPlugin({
		name: "attr",
		init: function(t, e, n, i, r) {
			var o, s;
			for (o in e)(s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o)) && (s.op = o), this._props.push(o)
		}
	}, {
		name: "endArray",
		init: function(t, e) {
			for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
		}
	}, fn("roundProps", G), fn("modifiers"), fn("snap", J)) || dn;

	function gn(t, e) {
		return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
	}

	function mn(t, e) {
		return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
	}

	function vn(t, e) {
		return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
	}

	function yn(t, e) {
		var n = e.s + e.c * t;
		e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
	}

	function bn(t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e)
	}

	function wn(t, e) {
		return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
	}

	function xn(t, e, n) {
		return t.style[e] = n
	}

	function _n(t, e, n) {
		return t.style.setProperty(e, n)
	}

	function Tn(t, e, n) {
		return t._gsap[e] = n
	}

	function kn(t, e, n) {
		return t._gsap.scaleX = t._gsap.scaleY = n
	}

	function Sn(t, e, n, i, r) {
		var o = t._gsap;
		o.scaleX = o.scaleY = n, o.renderTransform(r, o)
	}

	function Cn(t, e, n, i, r) {
		var o = t._gsap;
		o[e] = n, o.renderTransform(r, o)
	}

	function An(t, e) {
		var n = Gn.createElementNS ? Gn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Gn.createElement(t);
		return n.style ? n : Gn.createElement(t)
	}

	function En(t, e, n) {
		var i = getComputedStyle(t);
		return i[e] || i.getPropertyValue(e.replace(ki, "-$1").toLowerCase()) || i.getPropertyValue(e) || !n && En(t, Di(e) || e, 1) || ""
	}

	function $n() {
		"undefined" != typeof window && window.document && (Qn = window, Gn = Qn.document, Jn = Gn.documentElement, Zn = An("div") || {
			style: {}
		}, An("div"), Ei = Di(Ei), $i = Ei + "Origin", Zn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ei = !!Di("perspective"), Kn = 1)
	}

	function On(t) {
		var e, n = An("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
			i = this.parentNode,
			r = this.nextSibling,
			o = this.style.cssText;
		if (Jn.appendChild(n), n.appendChild(this), this.style.display = "block", t) try {
			e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = On
		} catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
		return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), Jn.removeChild(n), this.style.cssText = o, e
	}

	function Dn(t, e) {
		for (var n = e.length; n--;)
			if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
	}

	function Mn(t) {
		var e;
		try {
			e = t.getBBox()
		} catch (n) {
			e = On.call(t, !0)
		}
		return e && (e.width || e.height) || t.getBBox === On || (e = On.call(t, !0)), !e || e.width || e.x || e.y ? e : {
			x: +Dn(t, ["x", "cx", "x1"]) || 0,
			y: +Dn(t, ["y", "cy", "y1"]) || 0,
			width: 0,
			height: 0
		}
	}

	function jn(t) {
		return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Mn(t))
	}

	function Pn(t, e) {
		if (e) {
			var n = t.style;
			e in wi && e !== $i && (e = Ei), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(ki, "-$1").toLowerCase())) : n.removeAttribute(e)
		}
	}

	function Ln(t, e, n, i, r, o) {
		var s = new un(t._pt, e, n, 0, 1, o ? wn : bn);
		return (t._pt = s).b = i, s.e = r, t._props.push(n), s
	}

	function Nn(t, e, n, i) {
		var r, o, s, a, l = parseFloat(n) || 0,
			u = (n + "").trim().substr((l + "").length) || "px",
			c = Zn.style,
			d = Si.test(e),
			p = "svg" === t.tagName.toLowerCase(),
			f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
			h = "px" === i,
			g = "%" === i;
		return i === u || !l || Mi[i] || Mi[u] ? l : ("px" === u || h || (l = Nn(t, e, n, "px")), a = t.getCTM && jn(t), !g && "%" !== u || !wi[e] && !~e.indexOf("adius") ? (c[d ? "width" : "height"] = 100 + (h ? u : i), o = ~e.indexOf("adius") || "em" === i && t.appendChild && !p ? t : t.parentNode, a && (o = (t.ownerSVGElement || {}).parentNode), o && o !== Gn && o.appendChild || (o = Gn.body), (s = o._gsap) && g && s.width && d && s.time === Ae.time ? w(l / s.width * 100) : (!g && "%" !== u || (c.position = En(t, "position")), o === t && (c.position = "static"), o.appendChild(Zn), r = Zn[f], o.removeChild(Zn), c.position = "absolute", d && g && ((s = v(o)).time = Ae.time, s.width = o[f]), w(h ? r * l / 100 : r && l ? 100 / r * l : 0))) : (r = a ? t.getBBox()[d ? "width" : "height"] : t[f], w(g ? l / r * 100 : l / 100 * r)))
	}

	function zn(t, e, n, i) {
		var r;
		return Kn || $n(), e in Ai && "transform" !== e && ~(e = Ai[e]).indexOf(",") && (e = e.split(",")[0]), wi[e] && "transform" !== e ? (r = zi(t, i), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : qi(En(t, $i)) + " " + r.zOrigin + "px") : (r = t.style[e]) && "auto" !== r && !i && !~(r + "").indexOf("calc(") || (r = Pi[e] && Pi[e](t, e, n) || En(t, e) || y(t, e) || ("opacity" === e ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? Nn(t, e, r, n) + n : r
	}

	function qn(t, e, n, i) {
		if (!n || "none" === n) {
			var r = Di(e, t, 1),
				o = r && En(t, r, 1);
			o && o !== n ? (e = r, n = o) : "borderColor" === e && (n = En(t, "borderTopColor"))
		}
		var s, a, l, u, c, d, p, f, h, g, m, v, y = new un(this._pt, t.style, e, 0, 1, rn),
			b = 0,
			w = 0;
		if (y.b = n, y.e = i, n += "", "auto" == (i += "") && (t.style[e] = i, i = En(t, e) || i, t.style[e] = n), at(s = [n, i]), i = s[1], l = (n = s[0]).match(Zt) || [], (i.match(Zt) || []).length) {
			for (; a = Zt.exec(i);) p = a[0], h = i.substring(b, a.index), c ? c = (c + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (c = 1), p !== (d = l[w++] || "") && (u = parseFloat(d) || 0, m = d.substr((u + "").length), (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), f = parseFloat(p), g = p.substr((f + "").length), b = Zt.lastIndex - g.length, g || (g = g || It.units[e] || m, b === i.length && (i += g, y.e += g)), m !== g && (u = Nn(t, e, d, g) || 0), y._pt = {
				_next: y._pt,
				p: h || 1 === w ? h : ",",
				s: u,
				c: v ? v * f : f - u,
				m: c && c < 4 || "zIndex" === e ? Math.round : 0
			});
			y.c = b < i.length ? i.substring(b, i.length) : ""
		} else y.r = "display" === e && "none" === i ? wn : bn;
		return ee.test(i) && (y.e = 0), this._pt = y
	}

	function In(t) {
		var e = t.split(" "),
			n = e[0],
			i = e[1] || "50%";
		return "top" !== n && "bottom" !== n && "left" !== i && "right" !== i || (t = n, n = i, i = t), e[0] = ji[n] || n, e[1] = ji[i] || i, e.join(" ")
	}

	function Hn(t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var n, i, r, o = e.t,
				s = o.style,
				a = e.u,
				l = o._gsap;
			if ("all" === a || !0 === a) s.cssText = "", i = 1;
			else
				for (r = (a = a.split(",")).length; - 1 < --r;) n = a[r], wi[n] && (i = 1, n = "transformOrigin" === n ? $i : Ei), Pn(o, n);
			i && (Pn(o, Ei), l && (l.svg && o.removeAttribute("transform"), zi(o, 1), l.uncache = 1))
		}
	}

	function Rn(t) {
		return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
	}

	function Fn(t) {
		var e = En(t, Ei);
		return Rn(e) ? Li : e.substr(7).match(Kt).map(w)
	}

	function Bn(t, e) {
		var n, i, r, o, s = t._gsap || v(t),
			a = t.style,
			l = Fn(t);
		return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Li : l : (l !== Li || t.offsetParent || t === Jn || s.svg || (r = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, i = t.nextSibling, Jn.appendChild(t)), l = Fn(t), r ? a.display = r : Pn(t, "display"), o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : Jn.removeChild(t))), e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
	}

	function Wn(t, e, n, i, r, o) {
		var s, a, l, u = t._gsap,
			c = r || Bn(t, !0),
			d = u.xOrigin || 0,
			p = u.yOrigin || 0,
			f = u.xOffset || 0,
			h = u.yOffset || 0,
			g = c[0],
			m = c[1],
			v = c[2],
			y = c[3],
			b = c[4],
			w = c[5],
			x = e.split(" "),
			_ = parseFloat(x[0]) || 0,
			T = parseFloat(x[1]) || 0;
		n ? c !== Li && (a = g * y - m * v) && (l = _ * (-m / a) + T * (g / a) - (g * w - m * b) / a, _ = _ * (y / a) + T * (-v / a) + (v * w - y * b) / a, T = l) : (_ = (s = Mn(t)).x + (~x[0].indexOf("%") ? _ / 100 * s.width : _), T = s.y + (~(x[1] || x[0]).indexOf("%") ? T / 100 * s.height : T)), i || !1 !== i && u.smooth ? (b = _ - d, w = T - p, u.xOffset = f + (b * g + w * v) - b, u.yOffset = h + (b * m + w * y) - w) : u.xOffset = u.yOffset = 0, u.xOrigin = _, u.yOrigin = T, u.smooth = !!i, u.origin = e, u.originIsAbsolute = !!n, t.style[$i] = "0px 0px", o && (Ln(o, u, "xOrigin", d, _), Ln(o, u, "yOrigin", p, T), Ln(o, u, "xOffset", f, u.xOffset), Ln(o, u, "yOffset", h, u.yOffset)), t.setAttribute("data-svg-origin", _ + " " + T)
	}

	function Xn(t, e, n) {
		var i = U(e);
		return w(parseFloat(e) + parseFloat(Nn(t, "x", n + "px", i))) + i
	}

	function Un(t, e, n, r, o, s) {
		var a, l, u = 360,
			c = i(o),
			d = parseFloat(o) * (c && ~o.indexOf("rad") ? xi : 1),
			p = s ? d * s : d - r,
			f = r + p + "deg";
		return c && ("short" === (a = o.split("_")[1]) && (p %= u) != p % 180 && (p += p < 0 ? u : -u), "cw" === a && p < 0 ? p = (p + 36e9) % u - ~~(p / u) * u : "ccw" === a && 0 < p && (p = (p - 36e9) % u - ~~(p / u) * u)), t._pt = l = new un(t._pt, e, n, r, p, mn), l.e = f, l.u = "deg", t._props.push(n), l
	}

	function Yn(t, e) {
		for (var n in e) t[n] = e[n];
		return t
	}

	function Vn(t, e, n) {
		var i, r, o, s, a, l, u, c = Yn({}, n._gsap),
			d = n.style;
		for (r in c.svg ? (o = n.getAttribute("transform"), n.setAttribute("transform", ""), d[Ei] = e, i = zi(n, 1), Pn(n, Ei), n.setAttribute("transform", o)) : (o = getComputedStyle(n)[Ei], d[Ei] = e, i = zi(n, 1), d[Ei] = o), wi)(o = c[r]) !== (s = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = U(o) !== (u = U(s)) ? Nn(n, r, o, u) : parseFloat(o), l = parseFloat(s), t._pt = new un(t._pt, i, r, a, l - a, gn), t._pt.u = u || 0, t._props.push(r));
		Yn(i, c)
	}
	Ve.version = He.version = hn.version = "3.7.1", bt = 1, u() && Ee();
	var Qn, Gn, Jn, Kn, Zn, ti, ei, ni = $e.Power0,
		ii = $e.Power1,
		ri = $e.Power2,
		oi = $e.Power3,
		si = $e.Power4,
		ai = $e.Linear,
		li = $e.Quad,
		ui = $e.Cubic,
		ci = $e.Quart,
		di = $e.Quint,
		pi = $e.Strong,
		fi = $e.Elastic,
		hi = $e.Back,
		gi = $e.SteppedEase,
		mi = $e.Bounce,
		vi = $e.Sine,
		yi = $e.Expo,
		bi = $e.Circ,
		wi = {},
		xi = 180 / Math.PI,
		_i = Math.PI / 180,
		Ti = Math.atan2,
		ki = /([A-Z])/g,
		Si = /(?:left|right|width|margin|padding|x)/i,
		Ci = /[\s,\(]\S/,
		Ai = {
			autoAlpha: "opacity,visibility",
			scale: "scaleX,scaleY",
			alpha: "opacity"
		},
		Ei = "transform",
		$i = Ei + "Origin",
		Oi = "O,Moz,ms,Ms,Webkit".split(","),
		Di = function(t, e, n) {
			var i = (e || Zn).style,
				r = 5;
			if (t in i && !n) return t;
			for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Oi[r] + t in i););
			return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? Oi[r] : "") + t
		},
		Mi = {
			deg: 1,
			rad: 1,
			turn: 1
		},
		ji = {
			top: "0%",
			bottom: "100%",
			left: "0%",
			right: "100%",
			center: "50%"
		},
		Pi = {
			clearProps: function(t, e, n, i, r) {
				if ("isFromStart" !== r.data) {
					var o = t._pt = new un(t._pt, e, n, 0, 0, Hn);
					return o.u = i, o.pr = -10, o.tween = r, t._props.push(n), 1
				}
			}
		},
		Li = [1, 0, 0, 1, 0, 0],
		Ni = {},
		zi = function(t, e) {
			var n = t._gsap || new ze(t);
			if ("x" in n && !e && !n.uncache) return n;
			var i, r, o, s, a, l, u, c, d, p, f, h, g, m, v, y, b, x, _, T, k, S, C, A, E, $, O, D, M, j, P, L, N = t.style,
				z = n.scaleX < 0,
				q = "deg",
				I = En(t, $i) || "0";
			return i = r = o = l = u = c = d = p = f = 0, s = a = 1, n.svg = !(!t.getCTM || !jn(t)), m = Bn(t, n.svg), n.svg && (A = (!n.uncache || "0px 0px" === I) && !e && t.getAttribute("data-svg-origin"), Wn(t, A || I, !!A || n.originIsAbsolute, !1 !== n.smooth, m)), h = n.xOrigin || 0, g = n.yOrigin || 0, m !== Li && (x = m[0], _ = m[1], T = m[2], k = m[3], i = S = m[4], r = C = m[5], 6 === m.length ? (s = Math.sqrt(x * x + _ * _), a = Math.sqrt(k * k + T * T), l = x || _ ? Ti(_, x) * xi : 0, (d = T || k ? Ti(T, k) * xi + l : 0) && (a *= Math.abs(Math.cos(d * _i))), n.svg && (i -= h - (h * x + g * T), r -= g - (h * _ + g * k))) : (L = m[6], j = m[7], O = m[8], D = m[9], M = m[10], P = m[11], i = m[12], r = m[13], o = m[14], u = (v = Ti(L, M)) * xi, v && (A = S * (y = Math.cos(-v)) + O * (b = Math.sin(-v)), E = C * y + D * b, $ = L * y + M * b, O = S * -b + O * y, D = C * -b + D * y, M = L * -b + M * y, P = j * -b + P * y, S = A, C = E, L = $), c = (v = Ti(-T, M)) * xi, v && (y = Math.cos(-v), P = k * (b = Math.sin(-v)) + P * y, x = A = x * y - O * b, _ = E = _ * y - D * b, T = $ = T * y - M * b), l = (v = Ti(_, x)) * xi, v && (A = x * (y = Math.cos(v)) + _ * (b = Math.sin(v)), E = S * y + C * b, _ = _ * y - x * b, C = C * y - S * b, x = A, S = E), u && 359.9 < Math.abs(u) + Math.abs(l) && (u = l = 0, c = 180 - c), s = w(Math.sqrt(x * x + _ * _ + T * T)), a = w(Math.sqrt(C * C + L * L)), v = Ti(S, C), d = 2e-4 < Math.abs(v) ? v * xi : 0, f = P ? 1 / (P < 0 ? -P : P) : 0), n.svg && (A = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Rn(En(t, Ei)), A && t.setAttribute("transform", A))), 90 < Math.abs(d) && Math.abs(d) < 270 && (z ? (s *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), n.x = i - ((n.xPercent = i && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = r - ((n.yPercent = r && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = o + "px", n.scaleX = w(s), n.scaleY = w(a), n.rotation = w(l) + q, n.rotationX = w(u) + q, n.rotationY = w(c) + q, n.skewX = d + q, n.skewY = p + q, n.transformPerspective = f + "px", (n.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (N[$i] = qi(I)), n.xOffset = n.yOffset = 0, n.force3D = It.force3D, n.renderTransform = n.svg ? Wi : ei ? Bi : Ii, n.uncache = 0, n
		},
		qi = function(t) {
			return (t = t.split(" "))[0] + " " + t[1]
		},
		Ii = function(t, e) {
			e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Bi(t, e)
		},
		Hi = "0deg",
		Ri = "0px",
		Fi = ") ",
		Bi = function(t, e) {
			var n = e || this,
				i = n.xPercent,
				r = n.yPercent,
				o = n.x,
				s = n.y,
				a = n.z,
				l = n.rotation,
				u = n.rotationY,
				c = n.rotationX,
				d = n.skewX,
				p = n.skewY,
				f = n.scaleX,
				h = n.scaleY,
				g = n.transformPerspective,
				m = n.force3D,
				v = n.target,
				y = n.zOrigin,
				b = "",
				w = "auto" === m && t && 1 !== t || !0 === m;
			if (y && (c !== Hi || u !== Hi)) {
				var x, _ = parseFloat(u) * _i,
					T = Math.sin(_),
					k = Math.cos(_);
				_ = parseFloat(c) * _i, o = Xn(v, o, T * (x = Math.cos(_)) * -y), s = Xn(v, s, -Math.sin(_) * -y), a = Xn(v, a, k * x * -y + y)
			}
			g !== Ri && (b += "perspective(" + g + Fi), (i || r) && (b += "translate(" + i + "%, " + r + "%) "), !w && o === Ri && s === Ri && a === Ri || (b += a !== Ri || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Fi), l !== Hi && (b += "rotate(" + l + Fi), u !== Hi && (b += "rotateY(" + u + Fi), c !== Hi && (b += "rotateX(" + c + Fi), d === Hi && p === Hi || (b += "skew(" + d + ", " + p + Fi), 1 === f && 1 === h || (b += "scale(" + f + ", " + h + Fi), v.style[Ei] = b || "translate(0, 0)"
		},
		Wi = function(t, e) {
			var n, i, r, o, s, a = e || this,
				l = a.xPercent,
				u = a.yPercent,
				c = a.x,
				d = a.y,
				p = a.rotation,
				f = a.skewX,
				h = a.skewY,
				g = a.scaleX,
				m = a.scaleY,
				v = a.target,
				y = a.xOrigin,
				b = a.yOrigin,
				x = a.xOffset,
				_ = a.yOffset,
				T = a.forceCSS,
				k = parseFloat(c),
				S = parseFloat(d);
			p = parseFloat(p), f = parseFloat(f), (h = parseFloat(h)) && (f += h = parseFloat(h), p += h), p || f ? (p *= _i, f *= _i, n = Math.cos(p) * g, i = Math.sin(p) * g, r = Math.sin(p - f) * -m, o = Math.cos(p - f) * m, f && (h *= _i, s = Math.tan(f - h), r *= s = Math.sqrt(1 + s * s), o *= s, h && (s = Math.tan(h), n *= s = Math.sqrt(1 + s * s), i *= s)), n = w(n), i = w(i), r = w(r), o = w(o)) : (n = g, o = m, i = r = 0), (k && !~(c + "").indexOf("px") || S && !~(d + "").indexOf("px")) && (k = Nn(v, "x", c, "px"), S = Nn(v, "y", d, "px")), (y || b || x || _) && (k = w(k + y - (y * n + b * r) + x), S = w(S + b - (y * i + b * o) + _)), (l || u) && (k = w(k + l / 100 * (s = v.getBBox()).width), S = w(S + u / 100 * s.height)), s = "matrix(" + n + "," + i + "," + r + "," + o + "," + k + "," + S + ")", v.setAttribute("transform", s), T && (v.style[Ei] = s)
		};
	b("padding,margin,Width,Radius", (function(t, e) {
		var n = "Right",
			i = "Bottom",
			r = "Left",
			o = (e < 3 ? ["Top", n, i, r] : ["Top" + r, "Top" + n, i + n, i + r]).map((function(n) {
				return e < 2 ? t + n : "border" + n + t
			}));
		Pi[1 < e ? "border" + t : t] = function(t, e, n, i, r) {
			var s, a;
			if (arguments.length < 4) return s = o.map((function(e) {
				return zn(t, e, n)
			})), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
			s = (i + "").split(" "), a = {}, o.forEach((function(t, e) {
				return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
			})), t.init(e, a, r)
		}
	}));
	var Xi, Ui, Yi = {
		name: "css",
		register: $n,
		targetTest: function(t) {
			return t.style && t.nodeType
		},
		init: function(t, e, n, i, r) {
			var o, s, a, l, u, c, d, f, h, g, m, v, y, b, w, x = this._props,
				_ = t.style,
				T = n.vars.startAt;
			for (d in Kn || $n(), e)
				if ("autoRound" !== d && (s = e[d], !le[d] || !Re(d, e, n, i, t, r)))
					if (u = typeof s, c = Pi[d], "function" === u && (u = typeof(s = s.call(n, i, t, r))), "string" === u && ~s.indexOf("random(") && (s = tt(s)), c) c(this, t, d, s, n) && (w = 1);
					else if ("--" === d.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(d) + "").trim(), s += "", Se.lastIndex = 0, Se.test(o) || (f = U(o), h = U(s)), h ? f !== h && (o = Nn(t, d, o, h) + h) : f && (s += f), this.add(_, "setProperty", o, s, i, r, 0, 0, d), x.push(d);
			else if ("undefined" !== u) {
				if (T && d in T ? (o = "function" == typeof T[d] ? T[d].call(n, i, t, r) : T[d], d in It.units && !U(o) && (o += It.units[d]), "=" === (o + "").charAt(1) && (o = zn(t, d))) : o = zn(t, d), l = parseFloat(o), (g = "string" === u && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), d in Ai && ("autoAlpha" === d && (1 === l && "hidden" === zn(t, "visibility") && a && (l = 0), Ln(this, _, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== d && "transform" !== d && ~(d = Ai[d]).indexOf(",") && (d = d.split(",")[0])), m = d in wi)
					if (v || ((y = t._gsap).renderTransform && !e.parseTransform || zi(t, e.parseTransform), b = !1 !== e.smoothOrigin && y.smooth, (v = this._pt = new un(this._pt, _, Ei, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === d) this._pt = new un(this._pt, y, "scaleY", y.scaleY, (g ? g * a : a - y.scaleY) || 0), x.push("scaleY", d), d += "X";
					else {
						if ("transformOrigin" === d) {
							s = In(s), y.svg ? Wn(t, s, 0, b, 0, this) : ((h = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && Ln(this, y, "zOrigin", y.zOrigin, h), Ln(this, _, d, qi(o), qi(s)));
							continue
						}
						if ("svgOrigin" === d) {
							Wn(t, s, 1, b, 0, this);
							continue
						}
						if (d in Ni) {
							Un(this, y, d, l, s, g);
							continue
						}
						if ("smoothOrigin" === d) {
							Ln(this, y, "smooth", y.smooth, s);
							continue
						}
						if ("force3D" === d) {
							y[d] = s;
							continue
						}
						if ("transform" === d) {
							Vn(this, s, t);
							continue
						}
					}
				else d in _ || (d = Di(d) || d);
				if (m || (a || 0 === a) && (l || 0 === l) && !Ci.test(s) && d in _) a = a || 0, (f = (o + "").substr((l + "").length)) !== (h = U(s) || (d in It.units ? It.units[d] : f)) && (l = Nn(t, d, o, h)), this._pt = new un(this._pt, m ? y : _, d, l, g ? g * a : a - l, m || "px" !== h && "zIndex" !== d || !1 === e.autoRound ? gn : yn), this._pt.u = h || 0, f !== h && (this._pt.b = o, this._pt.r = vn);
				else if (d in _) qn.call(this, t, d, o, s);
				else {
					if (!(d in t)) {
						p(d, s);
						continue
					}
					this.add(t, d, o || t[d], s, i, r)
				}
				x.push(d)
			}
			w && ln(this)
		},
		get: zn,
		aliases: Ai,
		getSetter: function(t, e, n) {
			var i = Ai[e];
			return i && i.indexOf(",") < 0 && (e = i), e in wi && e !== $i && (t._gsap.x || zn(t, "x")) ? n && ti === n ? "scale" === e ? kn : Tn : (ti = n || {}) && ("scale" === e ? Sn : Cn) : t.style && !s(t.style[e]) ? xn : ~e.indexOf("-") ? _n : tn(t, e)
		},
		core: {
			_removeProperty: Pn,
			_getMatrix: Bn
		}
	};
	hn.utils.checkPrefix = Di, Ui = b("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Xi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
		wi[t] = 1
	})), b(Xi, (function(t) {
		It.units[t] = "deg", Ni[t] = 1
	})), Ai[Ui[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Xi, b("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
		var e = t.split(":");
		Ai[e[1]] = Ui[e[0]]
	})), b("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
		It.units[t] = "px"
	})), hn.registerPlugin(Yi);
	var Vi = hn.registerPlugin(Yi) || hn,
		Qi = Vi.core.Tween;
	t.Back = hi, t.Bounce = mi, t.CSSPlugin = Yi, t.Circ = bi, t.Cubic = ui, t.Elastic = fi, t.Expo = yi, t.Linear = ai, t.Power0 = ni, t.Power1 = ii, t.Power2 = ri, t.Power3 = oi, t.Power4 = si, t.Quad = li, t.Quart = ci, t.Quint = di, t.Sine = vi, t.SteppedEase = gi, t.Strong = pi, t.TimelineLite = He, t.TimelineMax = He, t.TweenLite = Ve, t.TweenMax = Qi, t.default = Vi, t.gsap = Vi, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
		value: !0
	}) : delete t.default
})),
function(t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function(t) {
	"use strict";
	var e, n = window.Slick || {};
	e = 0, (n = function(n, i) {
		var r, o = this;
		o.defaults = {
			accessibility: !0,
			adaptiveHeight: !1,
			appendArrows: t(n),
			appendDots: t(n),
			arrows: !0,
			asNavFor: null,
			prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
			nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
			autoplay: !1,
			autoplaySpeed: 3e3,
			centerMode: !1,
			centerPadding: "50px",
			cssEase: "ease",
			customPaging: function(e, n) {
				return t('<button type="button" />').text(n + 1)
			},
			dots: !1,
			dotsClass: "slick-dots",
			draggable: !0,
			easing: "linear",
			edgeFriction: .35,
			fade: !1,
			focusOnSelect: !1,
			focusOnChange: !1,
			infinite: !0,
			initialSlide: 0,
			lazyLoad: "ondemand",
			mobileFirst: !1,
			pauseOnHover: !0,
			pauseOnFocus: !0,
			pauseOnDotsHover: !1,
			respondTo: "window",
			responsive: null,
			rows: 1,
			rtl: !1,
			slide: "",
			slidesPerRow: 1,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			swipe: !0,
			swipeToSlide: !1,
			touchMove: !0,
			touchThreshold: 5,
			useCSS: !0,
			useTransform: !0,
			variableWidth: !1,
			vertical: !1,
			verticalSwiping: !1,
			waitForAnimate: !0,
			zIndex: 1e3
		}, o.initials = {
			animating: !1,
			dragging: !1,
			autoPlayTimer: null,
			currentDirection: 0,
			currentLeft: null,
			currentSlide: 0,
			direction: 1,
			$dots: null,
			listWidth: null,
			listHeight: null,
			loadIndex: 0,
			$nextArrow: null,
			$prevArrow: null,
			scrolling: !1,
			slideCount: null,
			slideWidth: null,
			$slideTrack: null,
			$slides: null,
			sliding: !1,
			slideOffset: 0,
			swipeLeft: null,
			swiping: !1,
			$list: null,
			touchObject: {},
			transformsEnabled: !1,
			unslicked: !1
		}, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(n), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = t(n).data("slick") || {}, o.options = t.extend({}, o.defaults, i, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = e++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
	}).prototype.activateADA = function() {
		this.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, n.prototype.addSlide = n.prototype.slickAdd = function(e, n, i) {
		var r = this;
		if ("boolean" == typeof n) i = n, n = null;
		else if (n < 0 || n >= r.slideCount) return !1;
		r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : i ? t(e).insertBefore(r.$slides.eq(n)) : t(e).insertAfter(r.$slides.eq(n)) : !0 === i ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each((function(e, n) {
			t(n).attr("data-slick-index", e)
		})), r.$slidesCache = r.$slides, r.reinit()
	}, n.prototype.animateHeight = function() {
		var t = this;
		if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
			var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
			t.$list.animate({
				height: e
			}, t.options.speed)
		}
	}, n.prototype.animateSlide = function(e, n) {
		var i = {},
			r = this;
		r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (e = -e), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
			left: e
		}, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({
			top: e
		}, r.options.speed, r.options.easing, n) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), t({
			animStart: r.currentLeft
		}).animate({
			animStart: e
		}, {
			duration: r.options.speed,
			easing: r.options.easing,
			step: function(t) {
				t = Math.ceil(t), !1 === r.options.vertical ? (i[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(i))
			},
			complete: function() {
				n && n.call()
			}
		})) : (r.applyTransition(), e = Math.ceil(e), !1 === r.options.vertical ? i[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(i), n && setTimeout((function() {
			r.disableTransition(), n.call()
		}), r.options.speed))
	}, n.prototype.getNavTarget = function() {
		var e = this.options.asNavFor;
		return e && null !== e && (e = t(e).not(this.$slider)), e
	}, n.prototype.asNavFor = function(e) {
		var n = this.getNavTarget();
		null !== n && "object" == typeof n && n.each((function() {
			var n = t(this).slick("getSlick");
			n.unslicked || n.slideHandler(e, !0)
		}))
	}, n.prototype.applyTransition = function(t) {
		var e = this,
			n = {};
		!1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
	}, n.prototype.autoPlay = function() {
		var t = this;
		t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
	}, n.prototype.autoPlayClear = function() {
		this.autoPlayTimer && clearInterval(this.autoPlayTimer)
	}, n.prototype.autoPlayIterator = function() {
		var t = this,
			e = t.currentSlide + t.options.slidesToScroll;
		t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
	}, n.prototype.buildArrows = function() {
		var e = this;
		!0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, n.prototype.buildDots = function() {
		var e, n, i = this;
		if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
			for (i.$slider.addClass("slick-dotted"), n = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
			i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
		}
	}, n.prototype.buildOut = function() {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each((function(e, n) {
			t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
		})), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
	}, n.prototype.buildRows = function() {
		var t, e, n, i, r, o, s, a = this;
		if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 0) {
			for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; t < r; t++) {
				var l = document.createElement("div");
				for (e = 0; e < a.options.rows; e++) {
					var u = document.createElement("div");
					for (n = 0; n < a.options.slidesPerRow; n++) {
						var c = t * s + (e * a.options.slidesPerRow + n);
						o.get(c) && u.appendChild(o.get(c))
					}
					l.appendChild(u)
				}
				i.appendChild(l)
			}
			a.$slider.empty().append(i), a.$slider.children().children().children().css({
				width: 100 / a.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, n.prototype.checkResponsive = function(e, n) {
		var i, r, o, s = this,
			a = !1,
			l = s.$slider.width(),
			u = window.innerWidth || t(window).width();
		if ("window" === s.respondTo ? o = u : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
			for (i in r = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
			null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || n) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = r), e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
		}
	}, n.prototype.changeSlide = function(e, n) {
		var i, r, o = this,
			s = t(e.currentTarget);
		switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
			case "previous":
				r = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, n);
				break;
			case "next":
				r = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, n);
				break;
			case "index":
				var a = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
				o.slideHandler(o.checkNavigable(a), !1, n), s.children().trigger("focus");
				break;
			default:
				return
		}
	}, n.prototype.checkNavigable = function(t) {
		var e, n;
		if (n = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
		else
			for (var i in e) {
				if (t < e[i]) {
					t = n;
					break
				}
				n = e[i]
			}
		return t
	}, n.prototype.cleanUpEvents = function() {
		var e = this;
		e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
	}, n.prototype.cleanUpSlideEvents = function() {
		var e = this;
		e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
	}, n.prototype.cleanUpRows = function() {
		var t, e = this;
		e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
	}, n.prototype.clickHandler = function(t) {
		!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
	}, n.prototype.destroy = function(e) {
		var n = this;
		n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
			t(this).attr("style", t(this).data("originalStyling"))
		})), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
	}, n.prototype.disableTransition = function(t) {
		var e = this,
			n = {};
		n[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
	}, n.prototype.fadeSlide = function(t, e) {
		var n = this;
		!1 === n.cssTransitions ? (n.$slides.eq(t).css({
			zIndex: n.options.zIndex
		}), n.$slides.eq(t).animate({
			opacity: 1
		}, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
			opacity: 1,
			zIndex: n.options.zIndex
		}), e && setTimeout((function() {
			n.disableTransition(t), e.call()
		}), n.options.speed))
	}, n.prototype.fadeSlideOut = function(t) {
		var e = this;
		!1 === e.cssTransitions ? e.$slides.eq(t).animate({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, n.prototype.filterSlides = n.prototype.slickFilter = function(t) {
		var e = this;
		null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
	}, n.prototype.focusHandler = function() {
		var e = this;
		e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
			n.stopImmediatePropagation();
			var i = t(this);
			setTimeout((function() {
				e.options.pauseOnFocus && (e.focussed = i.is(":focus"), e.autoPlay())
			}), 0)
		}))
	}, n.prototype.getCurrent = n.prototype.slickCurrentSlide = function() {
		return this.currentSlide
	}, n.prototype.getDotCount = function() {
		var t = this,
			e = 0,
			n = 0,
			i = 0;
		if (!0 === t.options.infinite)
			if (t.slideCount <= t.options.slidesToShow) ++i;
			else
				for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		else if (!0 === t.options.centerMode) i = t.slideCount;
		else if (t.options.asNavFor)
			for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
		return i - 1
	}, n.prototype.getLeft = function(t) {
		var e, n, i, r, o = this,
			s = 0;
		return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), s = n * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * n * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + s, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (o.$list.width() - i.outerWidth()) / 2)), e
	}, n.prototype.getOption = n.prototype.slickGetOption = function(t) {
		return this.options[t]
	}, n.prototype.getNavigableIndexes = function() {
		var t, e = this,
			n = 0,
			i = 0,
			r = [];
		for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); n < t;) r.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		return r
	}, n.prototype.getSlick = function() {
		return this
	}, n.prototype.getSlideCount = function() {
		var e, n, i = this;
		return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function(r, o) {
			if (o.offsetLeft - n + t(o).outerWidth() / 2 > -1 * i.swipeLeft) return e = o, !1
		})), Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
	}, n.prototype.goTo = n.prototype.slickGoTo = function(t, e) {
		this.changeSlide({
			data: {
				message: "index",
				index: parseInt(t)
			}
		}, e)
	}, n.prototype.init = function(e) {
		var n = this;
		t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), e && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
	}, n.prototype.initADA = function() {
		var e = this,
			n = Math.ceil(e.slideCount / e.options.slidesToShow),
			i = e.getNavigableIndexes().filter((function(t) {
				return t >= 0 && t < e.slideCount
			}));
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(n) {
			var r = i.indexOf(n);
			if (t(this).attr({
					role: "tabpanel",
					id: "slick-slide" + e.instanceUid + n,
					tabindex: -1
				}), -1 !== r) {
				var o = "slick-slide-control" + e.instanceUid + r;
				t("#" + o).length && t(this).attr({
					"aria-describedby": o
				})
			}
		})), e.$dots.attr("role", "tablist").find("li").each((function(r) {
			var o = i[r];
			t(this).attr({
				role: "presentation"
			}), t(this).find("button").first().attr({
				role: "tab",
				id: "slick-slide-control" + e.instanceUid + r,
				"aria-controls": "slick-slide" + e.instanceUid + o,
				"aria-label": r + 1 + " of " + n,
				"aria-selected": null,
				tabindex: "-1"
			})
		})).eq(e.currentSlide).find("button").attr({
			"aria-selected": "true",
			tabindex: "0"
		}).end());
		for (var r = e.currentSlide, o = r + e.options.slidesToShow; r < o; r++) e.options.focusOnChange ? e.$slides.eq(r).attr({
			tabindex: "0"
		}) : e.$slides.eq(r).removeAttr("tabindex");
		e.activateADA()
	}, n.prototype.initArrowEvents = function() {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
	}, n.prototype.initDotEvents = function() {
		var e = this;
		!0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", {
			message: "index"
		}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
	}, n.prototype.initSlideEvents = function() {
		var e = this;
		e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
	}, n.prototype.initializeEvents = function() {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
	}, n.prototype.initUI = function() {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
	}, n.prototype.keyHandler = function(t) {
		var e = this;
		t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
			data: {
				message: !0 === e.options.rtl ? "next" : "previous"
			}
		}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
			data: {
				message: !0 === e.options.rtl ? "previous" : "next"
			}
		}))
	}, n.prototype.lazyLoad = function() {
		var e, n, i, r = this;

		function o(e) {
			t("img[data-lazy]", e).each((function() {
				var e = t(this),
					n = t(this).attr("data-lazy"),
					i = t(this).attr("data-srcset"),
					o = t(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
					s = document.createElement("img");
				s.onload = function() {
					e.animate({
						opacity: 0
					}, 100, (function() {
						i && (e.attr("srcset", i), o && e.attr("sizes", o)), e.attr("src", n).animate({
							opacity: 1
						}, 200, (function() {
							e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
						})), r.$slider.trigger("lazyLoaded", [r, e, n])
					}))
				}, s.onerror = function() {
					e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, n])
				}, s.src = n
			}))
		}
		if (!0 === r.options.centerMode ? !0 === r.options.infinite ? i = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), i = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (n > 0 && n--, i <= r.slideCount && i++)), e = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad)
			for (var s = n - 1, a = i, l = r.$slider.find(".slick-slide"), u = 0; u < r.options.slidesToScroll; u++) s < 0 && (s = r.slideCount - 1), e = (e = e.add(l.eq(s))).add(l.eq(a)), s--, a++;
		o(e), r.slideCount <= r.options.slidesToShow ? o(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? o(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && o(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
	}, n.prototype.loadSlider = function() {
		var t = this;
		t.setPosition(), t.$slideTrack.css({
			opacity: 1
		}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
	}, n.prototype.next = n.prototype.slickNext = function() {
		this.changeSlide({
			data: {
				message: "next"
			}
		})
	}, n.prototype.orientationChange = function() {
		this.checkResponsive(), this.setPosition()
	}, n.prototype.pause = n.prototype.slickPause = function() {
		this.autoPlayClear(), this.paused = !0
	}, n.prototype.play = n.prototype.slickPlay = function() {
		var t = this;
		t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
	}, n.prototype.postSlide = function(e) {
		var n = this;
		n.unslicked || (n.$slider.trigger("afterChange", [n, e]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && t(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
	}, n.prototype.prev = n.prototype.slickPrev = function() {
		this.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, n.prototype.preventDefault = function(t) {
		t.preventDefault()
	}, n.prototype.progressiveLazyLoad = function(e) {
		e = e || 1;
		var n, i, r, o, s, a = this,
			l = t("img[data-lazy]", a.$slider);
		l.length ? (n = l.first(), i = n.attr("data-lazy"), r = n.attr("data-srcset"), o = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
			r && (n.attr("srcset", r), o && n.attr("sizes", o)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
		}, s.onerror = function() {
			e < 3 ? setTimeout((function() {
				a.progressiveLazyLoad(e + 1)
			}), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
		}, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
	}, n.prototype.refresh = function(e) {
		var n, i, r = this;
		i = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > i && (r.currentSlide = i), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), n = r.currentSlide, r.destroy(!0), t.extend(r, r.initials, {
			currentSlide: n
		}), r.init(), e || r.changeSlide({
			data: {
				message: "index",
				index: n
			}
		}, !1)
	}, n.prototype.registerBreakpoints = function() {
		var e, n, i, r = this,
			o = r.options.responsive || null;
		if ("array" === t.type(o) && o.length) {
			for (e in r.respondTo = r.options.respondTo || "window", o)
				if (i = r.breakpoints.length - 1, o.hasOwnProperty(e)) {
					for (n = o[e].breakpoint; i >= 0;) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
					r.breakpoints.push(n), r.breakpointSettings[n] = o[e].settings
				} r.breakpoints.sort((function(t, e) {
				return r.options.mobileFirst ? t - e : e - t
			}))
		}
	}, n.prototype.reinit = function() {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	}, n.prototype.resize = function() {
		var e = this;
		t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function() {
			e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
		}), 50))
	}, n.prototype.removeSlide = n.prototype.slickRemove = function(t, e, n) {
		var i = this;
		if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t, i.slideCount < 1 || t < 0 || t > i.slideCount - 1) return !1;
		i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
	}, n.prototype.setCSS = function(t) {
		var e, n, i = this,
			r = {};
		!0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", r[i.positionProp] = t, !1 === i.transformsEnabled ? i.$slideTrack.css(r) : (r = {}, !1 === i.cssTransitions ? (r[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(r)))
	}, n.prototype.setDimensions = function() {
		var t = this;
		!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
			padding: "0px " + t.options.centerPadding
		}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
			padding: t.options.centerPadding + " 0px"
		})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
		var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
		!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
	}, n.prototype.setFade = function() {
		var e, n = this;
		n.$slides.each((function(i, r) {
			e = n.slideWidth * i * -1, !0 === n.options.rtl ? t(r).css({
				position: "relative",
				right: e,
				top: 0,
				zIndex: n.options.zIndex - 2,
				opacity: 0
			}) : t(r).css({
				position: "relative",
				left: e,
				top: 0,
				zIndex: n.options.zIndex - 2,
				opacity: 0
			})
		})), n.$slides.eq(n.currentSlide).css({
			zIndex: n.options.zIndex - 1,
			opacity: 1
		})
	}, n.prototype.setHeight = function() {
		var t = this;
		if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
			var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
			t.$list.css("height", e)
		}
	}, n.prototype.setOption = n.prototype.slickSetOption = function() {
		var e, n, i, r, o, s = this,
			a = !1;
		if ("object" === t.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = r;
		else if ("multiple" === o) t.each(i, (function(t, e) {
			s.options[t] = e
		}));
		else if ("responsive" === o)
			for (n in r)
				if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[n]];
				else {
					for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === r[n].breakpoint && s.options.responsive.splice(e, 1), e--;
					s.options.responsive.push(r[n])
				} a && (s.unload(), s.reinit())
	}, n.prototype.setPosition = function() {
		var t = this;
		t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
	}, n.prototype.setProps = function() {
		var t = this,
			e = document.body.style;
		t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
	}, n.prototype.setSlideClasses = function(t) {
		var e, n, i, r, o = this;
		if (n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode) {
			var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
			e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + t, n.slice(i - e + 1 + s, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")
		} else t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, i = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
		"ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
	}, n.prototype.setupInfinite = function() {
		var e, n, i, r = this;
		if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (n = null, r.slideCount > r.options.slidesToShow)) {
			for (i = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - i; e -= 1) n = e - 1, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
			for (e = 0; e < i + r.slideCount; e += 1) n = e, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
			r.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
				t(this).attr("id", "")
			}))
		}
	}, n.prototype.interrupt = function(t) {
		t || this.autoPlay(), this.interrupted = t
	}, n.prototype.selectHandler = function(e) {
		var n = this,
			i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
			r = parseInt(i.attr("data-slick-index"));
		r || (r = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(r, !1, !0) : n.slideHandler(r)
	}, n.prototype.slideHandler = function(t, e, n) {
		var i, r, o, s, a, l, u = this;
		if (e = e || !1, !(!0 === u.animating && !0 === u.options.waitForAnimate || !0 === u.options.fade && u.currentSlide === t))
			if (!1 === e && u.asNavFor(t), i = t, a = u.getLeft(i), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, !1 === u.options.infinite && !1 === u.options.centerMode && (t < 0 || t > u.getDotCount() * u.options.slidesToScroll)) !1 === u.options.fade && (i = u.currentSlide, !0 !== n && u.slideCount > u.options.slidesToShow ? u.animateSlide(s, (function() {
				u.postSlide(i)
			})) : u.postSlide(i));
			else if (!1 === u.options.infinite && !0 === u.options.centerMode && (t < 0 || t > u.slideCount - u.options.slidesToScroll)) !1 === u.options.fade && (i = u.currentSlide, !0 !== n && u.slideCount > u.options.slidesToShow ? u.animateSlide(s, (function() {
			u.postSlide(i)
		})) : u.postSlide(i));
		else {
			if (u.options.autoplay && clearInterval(u.autoPlayTimer), r = i < 0 ? u.slideCount % u.options.slidesToScroll != 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + i : i >= u.slideCount ? u.slideCount % u.options.slidesToScroll != 0 ? 0 : i - u.slideCount : i, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, r]), o = u.currentSlide, u.currentSlide = r, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (l = (l = u.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(u.currentSlide), u.updateDots(), u.updateArrows(), !0 === u.options.fade) return !0 !== n ? (u.fadeSlideOut(o), u.fadeSlide(r, (function() {
				u.postSlide(r)
			}))) : u.postSlide(r), void u.animateHeight();
			!0 !== n && u.slideCount > u.options.slidesToShow ? u.animateSlide(a, (function() {
				u.postSlide(r)
			})) : u.postSlide(r)
		}
	}, n.prototype.startLoad = function() {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
	}, n.prototype.swipeDirection = function() {
		var t, e, n, i, r = this;
		return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(e, t), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === r.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
	}, n.prototype.swipeEnd = function(t) {
		var e, n, i = this;
		if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
		if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
		if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
			switch (n = i.swipeDirection()) {
				case "left":
				case "down":
					e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
					break;
				case "right":
				case "up":
					e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
			}
			"vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
		} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
	}, n.prototype.swipeHandler = function(t) {
		var e = this;
		if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
			case "start":
				e.swipeStart(t);
				break;
			case "move":
				e.swipeMove(t);
				break;
			case "end":
				e.swipeEnd(t)
		}
	}, n.prototype.swipeMove = function(t) {
		var e, n, i, r, o, s, a = this;
		return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + i * r : a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
	}, n.prototype.swipeStart = function(t) {
		var e, n = this;
		if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
		void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, n.dragging = !0
	}, n.prototype.unfilterSlides = n.prototype.slickUnfilter = function() {
		var t = this;
		null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
	}, n.prototype.unload = function() {
		var e = this;
		t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, n.prototype.unslick = function(t) {
		var e = this;
		e.$slider.trigger("unslick", [e, t]), e.destroy()
	}, n.prototype.updateArrows = function() {
		var t = this;
		Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, n.prototype.updateDots = function() {
		var t = this;
		null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
	}, n.prototype.visibility = function() {
		var t = this;
		t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
	}, t.fn.slick = function() {
		var t, e, i = this,
			r = arguments[0],
			o = Array.prototype.slice.call(arguments, 1),
			s = i.length;
		for (t = 0; t < s; t++)
			if ("object" == typeof r || void 0 === r ? i[t].slick = new n(i[t], r) : e = i[t].slick[r].apply(i[t].slick, o), void 0 !== e) return e;
		return i
	}
})),
function(t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function(t) {
	t.fn.marquee = function(e) {
		return this.each((function() {
			var n, i, r, o, s, a = t.extend({}, t.fn.marquee.defaults, e),
				l = t(this),
				u = 3,
				c = "animation-play-state",
				d = !1,
				p = function(t, e, n) {
					for (var i = ["webkit", "moz", "MS", "o", ""], r = 0; r < i.length; r++) i[r] || (e = e.toLowerCase()), t.addEventListener(i[r] + e, n, !1)
				},
				f = function() {
					l.timer = setTimeout($, a.delayBeforeStart)
				},
				h = {
					pause: function() {
						d && a.allowCss3Support ? n.css(c, "paused") : t.fn.pause && n.pause(), l.data("runningStatus", "paused"), l.trigger("paused")
					},
					resume: function() {
						d && a.allowCss3Support ? n.css(c, "running") : t.fn.resume && n.resume(), l.data("runningStatus", "resumed"), l.trigger("resumed")
					},
					toggle: function() {
						h["resumed" === l.data("runningStatus") ? "pause" : "resume"]()
					},
					destroy: function() {
						clearTimeout(l.timer), l.find("*").addBack().off(), l.html(l.find(".js-marquee:first").html())
					}
				};
			if ("string" != typeof e) {
				var g;
				t.each(a, (function(t) {
					if (void 0 !== (g = l.attr("data-" + t))) {
						switch (g) {
							case "true":
								g = !0;
								break;
							case "false":
								g = !1
						}
						a[t] = g
					}
				})), a.speed && (a.duration = parseInt(l.width(), 10) / a.speed * 1e3), o = "up" === a.direction || "down" === a.direction, a.gap = a.duplicated ? parseInt(a.gap) : 0, l.wrapInner('<div class="js-marquee"></div>');
				var m = l.find(".js-marquee").css({
					"margin-right": a.gap,
					float: "left"
				});
				if (a.duplicated && m.clone(!0).appendTo(l), l.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'), n = l.find(".js-marquee-wrapper"), o) {
					var v = l.height();
					n.removeAttr("style"), l.height(v), l.find(".js-marquee").css({
						float: "none",
						"margin-bottom": a.gap,
						"margin-right": 0
					}), a.duplicated && l.find(".js-marquee:last").css({
						"margin-bottom": 0
					});
					var y = l.find(".js-marquee:first").height() + a.gap;
					a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(y, 10) + parseInt(v, 10)) / parseInt(v, 10) * a.duration, a.duration = parseInt(y, 10) / parseInt(v, 10) * a.duration) : a.duration = (parseInt(y, 10) + parseInt(v, 10)) / parseInt(v, 10) * a.duration
				} else s = l.find(".js-marquee:first").width() + a.gap, i = l.width(), a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(s, 10) + parseInt(i, 10)) / parseInt(i, 10) * a.duration, a.duration = parseInt(s, 10) / parseInt(i, 10) * a.duration) : a.duration = (parseInt(s, 10) + parseInt(i, 10)) / parseInt(i, 10) * a.duration;
				if (a.duplicated && (a.duration = a.duration / 2), a.allowCss3Support) {
					var b = document.body || document.createElement("div"),
						w = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
						x = "Webkit Moz O ms Khtml".split(" "),
						_ = "animation",
						T = "",
						k = "";
					if (void 0 !== b.style.animation && (k = "@keyframes " + w + " ", d = !0), !1 === d)
						for (var S = 0; S < x.length; S++)
							if (void 0 !== b.style[x[S] + "AnimationName"]) {
								var C = "-" + x[S].toLowerCase() + "-";
								_ = C + _, c = C + c, k = "@" + C + "keyframes " + w + " ", d = !0;
								break
							} d && (T = w + " " + a.duration / 1e3 + "s " + a.delayBeforeStart / 1e3 + "s infinite " + a.css3easing, l.data("css3AnimationIsSupported", !0))
				}
				var A = function() {
						n.css("transform", "translateY(" + ("up" === a.direction ? v + "px" : "-" + y + "px") + ")")
					},
					E = function() {
						n.css("transform", "translateX(" + ("left" === a.direction ? i + "px" : "-" + s + "px") + ")")
					};
				a.duplicated ? (o ? a.startVisible ? n.css("transform", "translateY(0)") : n.css("transform", "translateY(" + ("up" === a.direction ? v + "px" : "-" + (2 * y - a.gap) + "px") + ")") : a.startVisible ? n.css("transform", "translateX(0)") : n.css("transform", "translateX(" + ("left" === a.direction ? i + "px" : "-" + (2 * s - a.gap) + "px") + ")"), a.startVisible || (u = 1)) : a.startVisible ? u = 2 : o ? A() : E();
				var $ = function() {
					if (a.duplicated && (1 === u ? (a._originalDuration = a.duration, a.duration = o ? "up" === a.direction ? a.duration + v / (y / a.duration) : 2 * a.duration : "left" === a.direction ? a.duration + i / (s / a.duration) : 2 * a.duration, T && (T = w + " " + a.duration / 1e3 + "s " + a.delayBeforeStart / 1e3 + "s " + a.css3easing), u++) : 2 === u && (a.duration = a._originalDuration, T && (w += "0", k = t.trim(k) + "0 ", T = w + " " + a.duration / 1e3 + "s 0s infinite " + a.css3easing), u++)), o ? a.duplicated ? (u > 2 && n.css("transform", "translateY(" + ("up" === a.direction ? 0 : "-" + y + "px") + ")"), r = {
							transform: "translateY(" + ("up" === a.direction ? "-" + y + "px" : 0) + ")"
						}) : a.startVisible ? 2 === u ? (T && (T = w + " " + a.duration / 1e3 + "s " + a.delayBeforeStart / 1e3 + "s " + a.css3easing), r = {
							transform: "translateY(" + ("up" === a.direction ? "-" + y + "px" : v + "px") + ")"
						}, u++) : 3 === u && (a.duration = a._completeDuration, T && (w += "0", k = t.trim(k) + "0 ", T = w + " " + a.duration / 1e3 + "s 0s infinite " + a.css3easing), A()) : (A(), r = {
							transform: "translateY(" + ("up" === a.direction ? "-" + n.height() + "px" : v + "px") + ")"
						}) : a.duplicated ? (u > 2 && n.css("transform", "translateX(" + ("left" === a.direction ? 0 : "-" + s + "px") + ")"), r = {
							transform: "translateX(" + ("left" === a.direction ? "-" + s + "px" : 0) + ")"
						}) : a.startVisible ? 2 === u ? (T && (T = w + " " + a.duration / 1e3 + "s " + a.delayBeforeStart / 1e3 + "s " + a.css3easing), r = {
							transform: "translateX(" + ("left" === a.direction ? "-" + s + "px" : i + "px") + ")"
						}, u++) : 3 === u && (a.duration = a._completeDuration, T && (w += "0", k = t.trim(k) + "0 ", T = w + " " + a.duration / 1e3 + "s 0s infinite " + a.css3easing), E()) : (E(), r = {
							transform: "translateX(" + ("left" === a.direction ? "-" + s + "px" : i + "px") + ")"
						}), l.trigger("beforeStarting"), d) {
						n.css(_, T);
						var e = k + " { 100%  " + function(t) {
								var e = [];
								for (var n in t) t.hasOwnProperty(n) && e.push(n + ":" + t[n]);
								return e.push(), "{" + e.join(",") + "}"
							}(r) + "}",
							c = n.find("style");
						0 !== c.length ? c.filter(":last").html(e) : t("head").append("<style>" + e + "</style>"), p(n[0], "AnimationIteration", (function() {
							l.trigger("finished")
						})), p(n[0], "AnimationEnd", (function() {
							$(), l.trigger("finished")
						}))
					} else n.animate(r, a.duration, a.easing, (function() {
						l.trigger("finished"), a.pauseOnCycle ? f() : $()
					}));
					l.data("runningStatus", "resumed")
				};
				l.on("pause", h.pause), l.on("resume", h.resume), a.pauseOnHover && (l.on("mouseenter", h.pause), l.on("mouseleave", h.resume)), d && a.allowCss3Support ? $() : f()
			} else t.isFunction(h[e]) && (n || (n = l.find(".js-marquee-wrapper")), !0 === l.data("css3AnimationIsSupported") && (d = !0), h[e]())
		}))
	}, t.fn.marquee.defaults = {
		allowCss3Support: !0,
		css3easing: "linear",
		easing: "linear",
		delayBeforeStart: 1e3,
		direction: "left",
		duplicated: !1,
		duration: 5e3,
		speed: 0,
		gap: 20,
		pauseOnCycle: !1,
		pauseOnHover: !1,
		startVisible: !1
	}
})),
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.sal = e() : t.sal = e()
}(this, (function() {
	return (() => {
		"use strict";
		var t = {
				d: (e, n) => {
					for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
						enumerable: !0,
						get: n[i]
					})
				},
				o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
			},
			e = {};

		function n(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(t);
				e && (i = i.filter((function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, i)
			}
			return n
		}

		function i(t) {
			for (var e = 1; e < arguments.length; e++) {
				var i = null != arguments[e] ? arguments[e] : {};
				e % 2 ? n(Object(i), !0).forEach((function(e) {
					r(t, e, i[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
				}))
			}
			return t
		}

		function r(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		t.d(e, {
			default: () => _
		});
		var o = "Sal was not initialised! Probably it is used in SSR.",
			s = "Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",
			a = {
				root: null,
				rootMargin: "0% 50%",
				threshold: .5,
				animateClassName: "sal-animate",
				disabledClassName: "sal-disabled",
				enterEventName: "sal:in",
				exitEventName: "sal:out",
				selector: "[data-sal]",
				once: !0,
				disabled: !1
			},
			l = [],
			u = null,
			c = function(t) {
				t && t !== a && (a = i(i({}, a), t))
			},
			d = function(t) {
				t.classList.remove(a.animateClassName)
			},
			p = function(t, e) {
				var n = new CustomEvent(t, {
					bubbles: !0,
					detail: e
				});
				e.target.dispatchEvent(n)
			},
			f = function() {
				document.body.classList.add(a.disabledClassName)
			},
			h = function() {
				u.disconnect(), u = null
			},
			g = function() {
				return a.disabled || "function" == typeof a.disabled && a.disabled()
			},
			m = function(t, e) {
				t.forEach((function(t) {
					var n = t.target,
						i = void 0 !== n.dataset.salRepeat,
						r = void 0 !== n.dataset.salOnce,
						o = i || !(r || a.once);
					t.intersectionRatio >= a.threshold ? (function(t) {
						t.target.classList.add(a.animateClassName), p(a.enterEventName, t)
					}(t), o || e.unobserve(n)) : o && function(t) {
						d(t.target), p(a.exitEventName, t)
					}(t)
				}))
			},
			v = function() {
				var t = [].filter.call(document.querySelectorAll(a.selector), (function(t) {
					return ! function(t) {
						return t.classList.contains(a.animateClassName)
					}(t, a.animateClassName)
				}));
				return t.forEach((function(t) {
					return u.observe(t)
				})), t
			},
			y = function() {
				f(), h()
			},
			b = function() {
				document.body.classList.remove(a.disabledClassName), u = new IntersectionObserver(m, {
					root: a.root,
					rootMargin: a.rootMargin,
					threshold: a.threshold
				}), l = v()
			},
			w = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				h(), Array.from(document.querySelectorAll(a.selector)).forEach(d), c(t), b()
			},
			x = function() {
				var t = v();
				l.push(t)
			};
		const _ = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
			if (c(t), "undefined" == typeof window) return console.warn(o), {
				elements: l,
				disable: y,
				enable: b,
				reset: w,
				update: x
			};
			if (!window.IntersectionObserver) throw f(), Error(s);
			return g() ? f() : b(), {
				elements: l,
				disable: y,
				enable: b,
				reset: w,
				update: x
			}
		};
		return e.default
	})()
})), imagesLoaded(document.querySelector("body"), (function(t) {
	$("img").addClass("loaded")
})), $(".marqueeText-root").marquee({
	direction: "left",
	duration: 2e4,
	gap: 0,
	delayBeforeStart: 0,
	duplicated: !0,
	startVisible: !0
}), $(document).ready((function() {
	sal()
})), $("button.menu-btn__toggleBtn").click((function() {
	$("html").toggleClass("-is-scroll-disable"), $(".menu .menuNav").toggleClass("hidden"), $(".menuPanel").toggleClass("menu-open"), $(this).toggleClass("-active")
})), $(document).ready((function() {
	$(window).on("resize", (function() {
		var t = $(document).height();
		$(".www-navigation__desktop__menus__top-offset").height(t)
	}))
})), $(".js-btn--effectMagnetic").mouseleave((function(t) {
	TweenMax.to(this, .3, {
		scale: 1,
		x: 0,
		y: 0
	})
})), $(".js-btn--effectMagnetic").mouseenter((function(t) {
	TweenMax.to(this, .3, {
		scale: 1,
		x: 0,
		y: 0
	})
})), $(".js-btn--effectMagnetic").mousemove((function(t) {
	callParallax(t)
})), gsap.defaults({
	duration: .4
}), gsap.set([".linkHoverWrap"], {
	visibility: "visible",
	xPercent: -101,
	ease: "power3.inOut"
});
const links = document.querySelectorAll(".js-linkHover");

function enter(t) {
	return gsap.fromTo(t, {
		xPercent: -101
	}, {
		xPercent: -40,
		ease: "power3.inOut"
	})
}

function leave(t) {
	return gsap.to(t, {
		xPercent: 101,
		ease: "power4.inOut",
		delay: .1
	})
}

function initWordAnimation() {
	var t = document.getElementsByClassName("js-word"),
		e = [],
		n = 0;
	t[n].style.opacity = 1;
	for (var i = 0; i < t.length; i++) a(t[i]);

	function r() {
		for (var i = e[n], r = n == t.length - 1 ? e[0] : e[n + 1], a = 0; a < i.length; a++) o(i, a);
		for (a = 0; a < r.length; a++) r[a].className = "letter behind", r[0].parentElement.style.opacity = 1, s(r, a);
		n = n == e.length - 1 ? 0 : n + 1
	}

	function o(t, e) {
		setTimeout((function() {
			t[e].className = "letter out"
		}), 0 * e)
	}

	function s(t, e) {
		setTimeout((function() {
			t[e].className = "letter in"
		}), 340 + 1 * e)
	}

	function a(t) {
		var n = t.innerHTML;
		t.innerHTML = "";
		for (var i = [], r = 0; r < n.length; r++) {
			var o = document.createElement("span");
			o.className = "letter", o.innerHTML = n.charAt(r), t.appendChild(o), i.push(o)
		}
		e.push(i)
	}
	r(), setInterval(r, 2500)
}
links.forEach((function(t) {
	const e = t.querySelector(".linkHoverWrap");
	let n = null,
		i = !1;

	function r() {
		i = !0, n || (n = gsap.timeline({
			onComplete: () => {
				n = null, i || o()
			}
		}).add(enter(e)))
	}

	function o() {
		i = !1, n || (n = gsap.timeline({
			onComplete: () => {
				n = null, i && r()
			}
		}).add(leave(e)))
	}
	t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", o)
}))