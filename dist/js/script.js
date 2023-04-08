"use strict";
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
window.log = function() {
        var t;
        log.history = log.history || [], log.history.push(arguments), this.console && (arguments.callee = arguments.callee.caller, t = [].slice.call(arguments), "object" === _typeof(console.log) ? log.apply.call(console.log, console, t) : console.log.apply(console, t))
    },
    function(t) {
        function e() {}
        for (var i, o = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","); i = o.pop();) t[i] = t[i] || e
    }(function() {
        try {
            return console.log(), window.console
        } catch (t) {
            return window.console = {}
        }
    }());
var DOM = window.DOM || {},
    set100vhVar = (DOM.Methods = {}, DOM.LoadMethod = function(t) {
        (t = void 0 === t ? $(document) : t).find("*[data-method]").each(function() {
            var i = $(this),
                t = i.attr("data-method");
            $.each(t.split(" "), function(t, e) {
                try {
                    new DOM.Methods[e](i)
                } catch (t) {}
            })
        })
    }, function() {
        var t;
        window.innerWidth <= 1380 && (t = window.innerHeight + "px", document.documentElement.style.setProperty("--mobile100vh", t))
    });
function mobileMenuFunction() {
    var t = document.body.querySelector(".mobile-menu"),
        e = (document.body.querySelector(".hamburger"), t.querySelector(".close-button"), document.body.querySelector(".hamburger")),
        i = (t.querySelectorAll(".mobile-menu-barba-link"), t.querySelectorAll(".link span")),
        o = t.querySelector(".projects"),
        n = gsap.timeline({
            paused: !0,
            onReverseComplete: function() {
                return e.classList.remove("active")
            }
        });
    n.add("start"), n.fromTo(t, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        display: "none"
    }, {
        clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
        display: "block",
        duration: 1,
        ease: "power4.inOut"
    }, "start"), n.from(i, {
        y: "100%",
        duration: 1.45,
        ease: "power4.inOut",
        stagger: .2
    }, "start+=0.2"), n.from(o, {
        y: "25%",
        alpha: 0,
        duration: 1.45,
        ease: "power4.inOut"
    }, "start+=0.6"), e.addEventListener("click", function(t) {
        t.preventDefault(), t = "active", -1 < (" " + e.className + " ").indexOf(" " + t + " ") ? (document.body.classList.remove("overflow-hidden"), n.timeScale(1).reverse()) : (document.body.classList.add("overflow-hidden"), e.classList.add("active"), n.timeScale(1).play())
    }), window.closeMenu = function() {
        document.body.classList.remove("overflow-hidden"), n.timeScale(1.5).reverse()
    }
}

function initGravityFormsBarba() {
    $(".form-wrap").each(function() {
        var e = $(this),
            t = e.find(".gfid"),
            i = t.attr("data-id"),
            i = parseInt(i),
            o = t.attr("data-title"),
            n = t.attr("data-descr"),
            t = t.attr("data-ajax");
        e.animate({
            opacity: "0.0"
        }, 400), e.length && $.ajax({
            type: "GET",
            url: admin_url,
            data: {
                action: "load_gravity_form",
                formid: i,
                formtitle: o,
                formdescr: n,
                formajax: t
            }
        }).done(function(t) {
            e.html(t), e.animate({
                opacity: "1.0"
            }, 400), initSelect2(".ginput_container_select select", "", "variation-dropdown", "variation-select"), ScrollTrigger.refresh()
        })
    })
}
function label_transition_form() {
    $("input").each(function() {
        $(this).on("focus", function() {
            $(this).parent().parent(".gfield").addClass("active")
        }), $(this).on("blur", function() {
            0 == $(this).val().length && $(this).parent().parent(".gfield").removeClass("active")
        }), "" != $(this).val() && $(this).parent().parent(".gfield").addClass("active")
    }), $("textarea").each(function() {
        $(this).on("focus", function() {
            $(this).parent().parent(".gfield").addClass("active")
        }), $(this).on("blur", function() {
            0 == $(this).val().length && $(this).parent().parent(".gfield").removeClass("active")
        }), "" != $(this).val() && $(this).parent().parent(".gfield").addClass("active")
    }), $("select").each(function() {
        var e = $(this);
        "" != e.val() && e.parent().parent(".gfield").addClass("active"), e.on("select2:select", function(t) {
            "" != $(this).val() && e.parent().parent(".gfield").addClass("active")
        })
    })
}
function initSelect2(t, e, i, o) {
    $.isFunction($.fn.select2) && $(t).select2({
        placeholder: "",
        dropdownCssClass: i || null,
        selectionCssClass: o || null,
        minimumResultsForSearch: -1,
        dropdownParent: $(".subpage-intro-section")
    })
}
function iOS() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
}
window.animations = [], DOM.onReady = function() {
        DOM.LoadMethod(), $("html").removeClass("no-js").addClass("js"), setTimeout(function() {
            document.body.classList.add("loaded")
        }, 200)
    }, $(document).ready(function() {}), window.onload = function() {
        DOM.onReady(), set100vhVar()
    }, window.onresize = function() {
        set100vhVar()
    },
    function(t, e) {
        "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LocomotiveScroll = e()
    }(void 0, function() {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        function t(t, e, i) {
            e && o(t.prototype, e), i && o(t, i)
        }
        function e(e, t) {
            var i, o = Object.keys(e);
            return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), o.push.apply(o, i)), o
        }
        function n(o) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? e(Object(n), !0).forEach(function(t) {
                    var e, i;
                    e = o, i = n[t = t], t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function(t) {
                    Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return o
        }
        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }
        function r(t) {
            return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        function a(t, e) {
            return (a = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        function l(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function c(o) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e, i = r(o);
                return t = n ? (t = r(this).constructor, Reflect.construct(i, arguments, t)) : i.apply(this, arguments), i = this, !(e = t) || "object" != _typeof(e) && "function" != typeof e ? l(i) : e
            }
        }
        function d(t, e, i) {
            return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var t = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
                    return t
                }(t, e);
                if (t) return (t = Object.getOwnPropertyDescriptor(t, e)).get ? t.get.call(i) : t.value
            })(t, e, i || t)
        }
        function E(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var i = [],
                        o = !0,
                        n = !1,
                        s = void 0;
                    try {
                        for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                    } catch (t) {
                        n = !0, s = t
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (n) throw s
                        }
                    }
                    return i
                }
            }(t, e) || p(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function p(t, e) {
            if (t) {
                if ("string" == typeof t) return f(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? f(t, e) : void 0
            }
        }
        function f(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
            return o
        }
        var h = {
                el: document,
                name: "scroll",
                offset: [0, 0],
                repeat: !1,
                smooth: !1,
                initPosition: {
                    x: 0,
                    y: 0
                },
                direction: "vertical",
                gestureDirection: "vertical",
                reloadOnContextChange: !1,
                lerp: .1,
                class: "is-inview",
                scrollbarContainer: !1,
                scrollbarClass: "c-scrollbar",
                scrollingClass: "has-scroll-scrolling",
                draggingClass: "has-scroll-dragging",
                smoothClass: "has-scroll-smooth",
                initClass: "has-scroll-init",
                getSpeed: !1,
                getDirection: !1,
                scrollFromAnywhere: !1,
                multiplier: 1,
                firefoxMultiplier: 50,
                touchMultiplier: 2,
                resetNativeScroll: !0,
                tablet: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical",
                    breakpoint: 1024
                },
                smartphone: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical"
                }
            },
            u = (t(m, [{
                key: "init",
                value: function() {
                    this.initEvents()
                }
            }, {
                key: "checkScroll",
                value: function() {
                    this.dispatchScroll()
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (this.resizeTick = !0, requestAnimationFrame(function() {
                        t.resize(), t.resizeTick = !1
                    }))
                }
            }, {
                key: "resize",
                value: function() {}
            }, {
                key: "checkContext",
                value: function() {
                    var t;
                    this.reloadOnContextChange && (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint, t = this.context, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context && ("desktop" == t ? this : this[t]).smooth != ("desktop" == this.context ? this : this[this.context]).smooth && window.location.reload())
                }
            }, {
                key: "initEvents",
                value: function() {
                    var e = this;
                    this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function(t) {
                        t.addEventListener("click", e.setScrollTo, !1)
                    })
                }
            }, {
                key: "setScrollTo",
                value: function(t) {
                    t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                        offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                    })
                }
            }, {
                key: "addElements",
                value: function() {}
            }, {
                key: "detectElements",
                value: function(o) {
                    var n = this,
                        s = this.instance.scroll.y,
                        r = s + this.windowHeight,
                        a = this.instance.scroll.x,
                        l = a + this.windowWidth;
                    Object.entries(this.els).forEach(function(t) {
                        var e, t = E(t, 2),
                            i = t[0],
                            t = t[1];
                        !t || t.inView && !o || ("horizontal" === n.direction ? l >= t.left && a < t.right && n.setInView(t, i) : r >= t.top && s < t.bottom && n.setInView(t, i)), t && t.inView && ("horizontal" === n.direction ? (e = t.right - t.left, t.progress = (n.instance.scroll.x - (t.left - n.windowWidth)) / (e + n.windowWidth), (l < t.left || a > t.right) && n.setOutOfView(t, i)) : (e = t.bottom - t.top, t.progress = (n.instance.scroll.y - (t.top - n.windowHeight)) / (e + n.windowHeight), (r < t.top || s > t.bottom) && n.setOutOfView(t, i)))
                    }), this.hasScrollTicking = !1
                }
            }, {
                key: "setInView",
                value: function(t, e) {
                    this.els[e].inView = !0, t.el.classList.add(t.class), (this.currentElements[e] = t).call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
                }
            }, {
                key: "setOutOfView",
                value: function(t, e) {
                    var i = this;
                    this.els[e].inView = !1, Object.keys(this.currentElements).forEach(function(t) {
                        t === e && delete i.currentElements[t]
                    }), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
                }
            }, {
                key: "dispatchCall",
                value: function(t, e) {
                    this.callWay = e, this.callValue = t.call.split(",").map(function(t) {
                        return t.trim()
                    }), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                    e = new Event(this.namespace + "call");
                    this.el.dispatchEvent(e)
                }
            }, {
                key: "dispatchScroll",
                value: function() {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t)
                }
            }, {
                key: "setEvents",
                value: function(t, e) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var i = this.listeners[t];
                    i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
                }
            }, {
                key: "unsetEvents",
                value: function(t, e) {
                    var i;
                    !this.listeners[t] || (e = (i = this.listeners[t]).indexOf(e)) < 0 || (i.splice(e, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                }
            }, {
                key: "checkEvent",
                value: function(t) {
                    var e = this,
                        i = t.type.replace(this.namespace, ""),
                        t = this.listeners[i];
                    t && 0 !== t.length && t.forEach(function(t) {
                        switch (i) {
                            case "scroll":
                                return t(e.instance);
                            case "call":
                                return t(e.callValue, e.callWay, e.callObj);
                            default:
                                return t()
                        }
                    })
                }
            }, {
                key: "startScroll",
                value: function() {}
            }, {
                key: "stopScroll",
                value: function() {}
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.instance.scroll = {
                        x: 0,
                        y: 0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function(t) {
                        e.el.removeEventListener(e.namespace + t, e.checkEvent, !1)
                    }), this.listeners = {}, this.scrollToEls.forEach(function(t) {
                        t.removeEventListener("click", e.setScrollTo, !1)
                    }), this.html.classList.remove(this.initClass)
                }
            }]), m),
            P = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
        function m() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, m), Object.assign(this, h, t), this.smartphone = h.smartphone, t.smartphone && Object.assign(this.smartphone, t.smartphone), this.tablet = h.tablet, t.tablet && Object.assign(this.tablet, t.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
            }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                scroll: {
                    x: 0,
                    y: 0
                },
                limit: {
                    x: this.html.offsetWidth,
                    y: this.html.offsetHeight
                },
                currentElements: this.currentElements
            }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
        }
        function w(t, e) {
            return t(e = {
                exports: {}
            }, e.exports), e.exports
        }
        var y, v = w(function(t, e) {
                t.exports = {
                    polyfill: function() {
                        var t, e, a, l, i, c = window,
                            d = document;
                        function h(t, e) {
                            this.scrollLeft = t, this.scrollTop = e
                        }
                        function o(t) {
                            if (null === t || "object" != _typeof(t) || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                            if ("object" == _typeof(t) && "smooth" === t.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }
                        function n(t, e) {
                            return "Y" === e ? t.clientHeight + i < t.scrollHeight : "X" === e ? t.clientWidth + i < t.scrollWidth : void 0
                        }
                        function s(t, e) {
                            t = c.getComputedStyle(t, null)["overflow" + e];
                            return "auto" === t || "scroll" === t
                        }
                        function u(t) {
                            var e = (l() - t.startTime) / 468,
                                e = e = 1 < e ? 1 : e,
                                e = .5 * (1 - Math.cos(Math.PI * e)),
                                i = t.startX + (t.x - t.startX) * e,
                                e = t.startY + (t.y - t.startY) * e;
                            t.method.call(t.scrollable, i, e), i === t.x && e === t.y || c.requestAnimationFrame(u.bind(c, t))
                        }
                        function r(t, e, i) {
                            var o, n, s, r = l(),
                                t = t === d.body ? (n = (o = c).scrollX || c.pageXOffset, s = c.scrollY || c.pageYOffset, a.scroll) : (n = (o = t).scrollLeft, s = t.scrollTop, h);
                            u({
                                scrollable: o,
                                method: t,
                                startTime: r,
                                startX: n,
                                startY: s,
                                x: e,
                                y: i
                            })
                        }
                        "scrollBehavior" in d.documentElement.style && !0 !== c.__forceSmoothScrollPolyfill__ || (e = c.HTMLElement || c.Element, a = {
                            scroll: c.scroll || c.scrollTo,
                            scrollBy: c.scrollBy,
                            elementScroll: e.prototype.scroll || h,
                            scrollIntoView: e.prototype.scrollIntoView
                        }, l = c.performance && c.performance.now ? c.performance.now.bind(c.performance) : Date.now, t = c.navigator.userAgent, i = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t) ? 1 : 0, c.scroll = c.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== o(arguments[0]) ? r.call(c, d.body, void 0 !== arguments[0].left ? ~~arguments[0].left : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : c.scrollY || c.pageYOffset) : a.scroll.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != _typeof(arguments[0]) ? arguments[0] : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : c.scrollY || c.pageYOffset))
                        }, c.scrollBy = function() {
                            void 0 !== arguments[0] && (o(arguments[0]) ? a.scrollBy.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != _typeof(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : r.call(c, d.body, ~~arguments[0].left + (c.scrollX || c.pageXOffset), ~~arguments[0].top + (c.scrollY || c.pageYOffset)))
                        }, e.prototype.scroll = e.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== o(arguments[0])) {
                                    var t = arguments[0].left,
                                        e = arguments[0].top;
                                    r.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                    a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != _typeof(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }, e.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== o(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }, e.prototype.scrollIntoView = function() {
                            var t, e, i;
                            !0 !== o(arguments[0]) ? (e = (t = function(t) {
                                for (; t !== d.body && !1 === function(t) {
                                        var e = n(t, "Y") && s(t, "Y"),
                                            t = n(t, "X") && s(t, "X");
                                        return e || t
                                    }(t);) t = t.parentNode || t.host;
                                return t
                            }(this)).getBoundingClientRect(), i = this.getBoundingClientRect(), t !== d.body ? (r.call(this, t, t.scrollLeft + i.left - e.left, t.scrollTop + i.top - e.top), "fixed" !== c.getComputedStyle(t).position && c.scrollBy({
                                left: e.left,
                                top: e.top,
                                behavior: "smooth"
                            })) : c.scrollBy({
                                left: i.left,
                                top: i.top,
                                behavior: "smooth"
                            })) : a.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        })
                    }
                }
            }),
            R = (v.polyfill, s(b, u), y = c(b), t(b, [{
                key: "init",
                value: function() {
                    this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), d(r(b.prototype), "init", this).call(this)
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this;
                    d(r(b.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && !this.hasScrollTicking && (requestAnimationFrame(function() {
                        t.detectElements()
                    }), this.hasScrollTicking = !0)
                }
            }, {
                key: "addDirection",
                value: function() {
                    window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                }
            }, {
                key: "addSpeed",
                value: function() {
                    window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                }
            }, {
                key: "resize",
                value: function() {
                    Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
                }
            }, {
                key: "addElements",
                value: function() {
                    var u = this;
                    this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach(function(t, e) {
                        t.getBoundingClientRect();
                        var i = t.dataset[u.name + "Class"] || u.class,
                            e = "string" == typeof t.dataset[u.name + "Id"] ? t.dataset[u.name + "Id"] : e,
                            o = "string" == typeof t.dataset[u.name + "Offset"] ? t.dataset[u.name + "Offset"].split(",") : u.offset,
                            n = t.dataset[u.name + "Repeat"],
                            s = t.dataset[u.name + "Call"],
                            r = t.dataset[u.name + "Target"],
                            a = (r = void 0 !== r ? document.querySelector("".concat(r)) : t).getBoundingClientRect(),
                            l = a.top + u.instance.scroll.y,
                            a = a.left + u.instance.scroll.x,
                            c = l + r.offsetHeight,
                            d = a + r.offsetWidth,
                            n = "false" != n && (null != n || u.repeat),
                            h = u.getRelativeOffset(o),
                            r = {
                                el: t,
                                targetEl: r,
                                id: e,
                                class: i,
                                top: l += h[0],
                                bottom: c -= h[1],
                                left: a,
                                right: d,
                                offset: o,
                                progress: 0,
                                repeat: n,
                                inView: !1,
                                call: s
                            };
                        u.els[e] = r, t.classList.contains(i) && u.setInView(u.els[e], e)
                    })
                }
            }, {
                key: "updateElements",
                value: function() {
                    var n = this;
                    Object.entries(this.els).forEach(function(t) {
                        var t = E(t, 2),
                            e = t[0],
                            t = t[1],
                            i = t.targetEl.getBoundingClientRect().top + n.instance.scroll.y,
                            o = i + t.targetEl.offsetHeight,
                            t = n.getRelativeOffset(t.offset);
                        n.els[e].top = i + t[0], n.els[e].bottom = o - t[1]
                    }), this.hasScrollTicking = !1
                }
            }, {
                key: "getRelativeOffset",
                value: function(t) {
                    var e = [0, 0];
                    if (t)
                        for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                    return e
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        i = parseInt(e.offset) || 0,
                        o = !!e.callback && e.callback;
                    if ("string" == typeof t) {
                        if ("top" === t) t = this.html;
                        else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                        else if (!(t = document.querySelector(t))) return
                    } else if ("number" == typeof t) t = parseInt(t);
                    else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                    var i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i,
                        n = function() {
                            return parseInt(window.pageYOffset) === parseInt(i)
                        };
                    if (o) {
                        if (n()) return void o();
                        window.addEventListener("scroll", function t() {
                            n() && (window.removeEventListener("scroll", t), o())
                        })
                    }
                    window.scrollTo({
                        top: i,
                        behavior: 0 === e.duration ? "auto" : "smooth"
                    })
                }
            }, {
                key: "update",
                value: function() {
                    this.addElements(), this.detectElements()
                }
            }, {
                key: "destroy",
                value: function() {
                    d(r(b.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                }
            }]), b),
            g = Object.getOwnPropertySymbols,
            W = Object.prototype.hasOwnProperty,
            I = Object.prototype.propertyIsEnumerable;
        function b() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return i(this, b), (t = y.call(this, t)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = v, window.smoothscrollPolyfill.polyfill()), t
        }
        var H = function() {
            try {
                if (!Object.assign) return;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return;
                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    o[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
            } catch (t) {
                return
            }
        }() ? Object.assign : function(t, e) {
            for (var i, o = function(t) {
                    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }(t), n = 1; n < arguments.length; n++) {
                for (var s in i = Object(arguments[n])) W.call(i, s) && (o[s] = i[s]);
                if (g)
                    for (var r = g(i), a = 0; a < r.length; a++) I.call(i, r[a]) && (o[r[a]] = i[r[a]])
            }
            return o
        };
        function S() {}
        S.prototype = {
            on: function(t, e, i) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: i
                }), this
            },
            once: function(t, e, i) {
                var o = this;
                function n() {
                    o.off(t, n), e.apply(i, arguments)
                }
                return n._ = e, this.on(t, n, i)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, n = i.length; o < n; o++) i[o].fn.apply(i[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var i = this.e || (this.e = {}),
                    o = i[t],
                    n = [];
                if (o && e)
                    for (var s = 0, r = o.length; s < r; s++) o[s].fn !== e && o[s].fn._ !== e && n.push(o[s]);
                return n.length ? i[t] = n : delete i[t], this
            }
        };
        var Y = S,
            z = w(function(t, e) {
                ! function() {
                    function t(t, e, i, o) {
                        this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != o ? o : 150, this.lastUpDeltas = function() {
                            for (var t = [], e = 1, i = 2 * this.stability; 1 <= i ? e <= i : i <= e; 1 <= i ? e++ : e--) t.push(null);
                            return t
                        }.call(this), this.lastDownDeltas = function() {
                            for (var t = [], e = 1, i = 2 * this.stability; 1 <= i ? e <= i : i <= e; 1 <= i ? e++ : e--) t.push(null);
                            return t
                        }.call(this), this.deltasTimestamp = function() {
                            for (var t = [], e = 1, i = 2 * this.stability; 1 <= i ? e <= i : i <= e; 1 <= i ? e++ : e--) t.push(null);
                            return t
                        }.call(this)
                    }(null !== e ? e : this).Lethargy = (t.prototype.check = function(t) {
                        var e;
                        return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), 0 < e ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                    }, t.prototype.isInertia = function(t) {
                        var e, i, o, n;
                        return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (i = e.slice(0, this.stability), e = e.slice(this.stability, 2 * this.stability), n = i.reduce(function(t, e) {
                            return t + e
                        }), o = e.reduce(function(t, e) {
                            return t + e
                        }), n = n / i.length, i = o / e.length, Math.abs(n) < Math.abs(i * this.tolerance) && this.sensitivity < Math.abs(i) && t)
                    }, t.prototype.showLastUpDeltas = function() {
                        return this.lastUpDeltas
                    }, t.prototype.showLastDownDeltas = function() {
                        return this.lastDownDeltas
                    }, t)
                }.call(P)
            }),
            x = "onwheel" in document,
            L = "onmousewheel" in document,
            k = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
            T = navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
            A = !!window.navigator.msPointerEnabled,
            $ = "onkeydown" in document,
            F = -1 < navigator.userAgent.indexOf("Firefox"),
            V = Object.prototype.toString,
            X = Object.prototype.hasOwnProperty;
        var N = z.Lethargy,
            O = "virtualscroll",
            K = M;
        function M(t) {
            ! function(t) {
                if (!t) return console.warn("bindAll requires at least one argument.");
                var e = Array.prototype.slice.call(arguments, 1);
                if (0 === e.length)
                    for (var i in t) X.call(t, i) && "function" == typeof t[i] && "[object Function]" == V.call(t[i]) && e.push(i);
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    t[n] = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }(t[n], t)
                }
            }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = H({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, t), this.options.limitInertia && (this._lethargy = new N), this._emitter = new Y, this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }
        function C(t, e, i) {
            return (1 - i) * t + i * e
        }
        function q(t) {
            var e, i = {};
            if (window.getComputedStyle) return (e = (t = (t = getComputedStyle(t)).transform || t.webkitTransform || t.mozTransform).match(/^matrix3d\((.+)\)$/)) ? (i.x = e ? parseFloat(e[1].split(", ")[12]) : 0, i.y = e ? parseFloat(e[1].split(", ")[13]) : 0) : (e = t.match(/^matrix\((.+)\)$/), i.x = e ? parseFloat(e[1].split(", ")[4]) : 0, i.y = e ? parseFloat(e[1].split(", ")[5]) : 0), i
        }
        function D(t) {
            for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
            return e
        }
        M.prototype._notify = function(t) {
            var e = this._event;
            e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(O, {
                x: e.x,
                y: e.y,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                originalEvent: t
            })
        }, M.prototype._onWheel = function(t) {
            var e, i = this.options;
            this._lethargy && !1 === this._lethargy.check(t) || ((e = this._event).deltaX = t.wheelDeltaX || -1 * t.deltaX, e.deltaY = t.wheelDeltaY || -1 * t.deltaY, F && 1 == t.deltaMode && (e.deltaX *= i.firefoxMultiplier, e.deltaY *= i.firefoxMultiplier), e.deltaX *= i.mouseMultiplier, e.deltaY *= i.mouseMultiplier, this._notify(t))
        }, M.prototype._onMouseWheel = function(t) {
            var e;
            this.options.limitInertia && !1 === this._lethargy.check(t) || ((e = this._event).deltaX = t.wheelDeltaX || 0, e.deltaY = t.wheelDeltaY || t.wheelDelta, this._notify(t))
        }, M.prototype._onTouchStart = function(t) {
            t = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = t.pageX, this.touchStartY = t.pageY
        }, M.prototype._onTouchMove = function(t) {
            var e = this.options,
                i = (e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault(), this._event),
                o = t.targetTouches ? t.targetTouches[0] : t;
            i.deltaX = (o.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (o.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = o.pageX, this.touchStartY = o.pageY, this._notify(t)
        }, M.prototype._onKeyDown = function(t) {
            var e = this._event,
                i = (e.deltaX = e.deltaY = 0, window.innerHeight - 40);
            switch (t.keyCode) {
                case 37:
                case 38:
                    e.deltaY = this.options.keyStep;
                    break;
                case 39:
                case 40:
                    e.deltaY = -this.options.keyStep;
                    break;
                case t.shiftKey:
                    e.deltaY = i;
                    break;
                case 32:
                    e.deltaY = -i;
                    break;
                default:
                    return
            }
            this._notify(t)
        }, M.prototype._bind = function() {
            x && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), L && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), k && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), A && T && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), $ && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }, M.prototype._unbind = function() {
            x && this.el.removeEventListener("wheel", this._onWheel), L && this.el.removeEventListener("mousewheel", this._onMouseWheel), k && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), A && T && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), $ && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }, M.prototype.on = function(t, e) {
            this._emitter.on(O, t, e);
            t = this._emitter.e;
            t && t[O] && 1 === t[O].length && this._bind()
        }, M.prototype.off = function(t, e) {
            this._emitter.off(O, t, e);
            t = this._emitter.e;
            (!t[O] || t[O].length <= 0) && this._unbind()
        }, M.prototype.reset = function() {
            var t = this._event;
            t.x = 0, t.y = 0
        }, M.prototype.destroy = function() {
            this._emitter.off(), this._unbind()
        };
        var U = "function" == typeof Float32Array;
        function G(t, e) {
            return 1 - 3 * e + 3 * t
        }
        function _(t, e, i) {
            return ((G(e, i) * t + (3 * i - 6 * e)) * t + 3 * e) * t
        }
        function Q(t, e, i) {
            return 3 * G(e, i) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e
        }
        function J(t) {
            return t
        }
        function Z(g, e, b, i) {
            if (!(0 <= g && g <= 1 && 0 <= b && b <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            if (g === e && b === i) return J;
            for (var S = new(U ? Float32Array : Array)(11), t = 0; t < 11; ++t) S[t] = _(.1 * t, g, b);
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : _(function(t) {
                    for (var e = 0, i = 1; 10 !== i && S[i] <= t; ++i) e += .1;
                    var o = e + (t - S[--i]) / (S[i + 1] - S[i]) * .1,
                        n = Q(o, g, b);
                    if (.001 <= n) {
                        for (var s = t, r = o, a = g, l = b, c = 0; c < 4; ++c) {
                            var d = Q(r, a, l);
                            if (0 === d) return r;
                            r -= (_(r, a, l) - s) / d
                        }
                        return r
                    }
                    if (0 === n) return o;
                    for (var h, u, m = t, p = e, f = e + .1, w = g, y = b, v = 0; 0 < (h = _(u = p + (f - p) / 2, w, y) - m) ? f = u : p = u, 1e-7 < Math.abs(h) && ++v < 10;);
                    return u
                }(t), e, i)
            }
        }
        s(B, u), tt = c(B), t(B, [{
            key: "init",
            value: function() {
                var e = this;
                this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = n({
                    delta: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    },
                    scroll: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    }
                }, this.instance), this.vs = new K({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier: -1 < navigator.platform.indexOf("Win") ? 1 : .4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: !1,
                    passive: !0
                }), this.vs.on(function(t) {
                    e.stop || e.isDraggingScrollbar || requestAnimationFrame(function() {
                        e.updateDelta(t), e.isScrolling || e.startScrolling()
                    })
                }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), d(r(B.prototype), "init", this).call(this)
            }
        }, {
            key: "setScrollLimit",
            value: function() {
                if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                    for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                    this.instance.limit.x = t - this.windowWidth
                }
            }
        }, {
            key: "startScrolling",
            value: function() {
                this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
            }
        }, {
            key: "stopScrolling",
            value: function() {
                cancelAnimationFrame(this.checkScrollRaf), this.startScrollTs = void 0, this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
            }
        }, {
            key: "checkKey",
            value: function(t) {
                var e = this;
                if (this.stop) 9 == t.keyCode && requestAnimationFrame(function() {
                    e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
                });
                else {
                    switch (t.keyCode) {
                        case 9:
                            requestAnimationFrame(function() {
                                e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                                    offset: -window.innerHeight / 2
                                })
                            });
                            break;
                        case 38:
                            this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                            break;
                        case 40:
                            this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                            break;
                        case 33:
                            this.instance.delta[this.directionAxis] -= window.innerHeight;
                            break;
                        case 34:
                            this.instance.delta[this.directionAxis] += window.innerHeight;
                            break;
                        case 36:
                            this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                            break;
                        case 35:
                            this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                            break;
                        case 32:
                            this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                            break;
                        default:
                            return
                    }
                    this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                }
            }
        }, {
            key: "isActiveElementScrollSensitive",
            value: function() {
                return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement)
            }
        }, {
            key: "checkScroll",
            value: function() {
                var t, e, i = this,
                    o = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                (o || this.isScrolling || this.isDraggingScrollbar) && (this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame(function() {
                    return i.checkScroll()
                }), this.hasScrollTicking = !0), this.updateScroll(), t = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]), e = Date.now() - this.startScrollTs, !this.animatingScroll && 100 < e && (t < .5 && 0 != this.instance.delta[this.directionAxis] || t < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach(function(t) {
                    t = E(t, 2), t[0], t = t[1];
                    t.persistent || i.instance.scroll[i.directionAxis] > t.offset[i.directionAxis] && i.instance.scroll[i.directionAxis] < t.limit[i.directionAxis] ? ("horizontal" === i.direction ? i.transform(t.el, -i.instance.scroll[i.directionAxis], 0) : i.transform(t.el, 0, -i.instance.scroll[i.directionAxis]), t.inView || (t.inView = !0, t.el.style.opacity = 1, t.el.style.pointerEvents = "all", t.el.setAttribute("data-".concat(i.name, "-section-inview"), ""))) : ((t.inView || o) && (t.inView = !1, t.el.style.opacity = 0, t.el.style.pointerEvents = "none", t.el.removeAttribute("data-".concat(i.name, "-section-inview"))), i.transform(t.el, 0, 0))
                }), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar && (e = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis], "horizontal" === this.direction ? this.transform(this.scrollbarThumb, e, 0) : this.transform(this.scrollbarThumb, 0, e)), d(r(B.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1)
            }
        }, {
            key: "resize",
            value: function() {
                this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                }, this.update()
            }
        }, {
            key: "updateDelta",
            value: function(t) {
                var e = (this[this.context] && this[this.context].gestureDirection ? this[this.context] : this).gestureDirection,
                    e = "both" === e ? t.deltaX + t.deltaY : "vertical" !== e && "horizontal" === e ? t.deltaX : t.deltaY;
                this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
            }
        }, {
            key: "updateScroll",
            value: function(t) {
                this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = C(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
            }
        }, {
            key: "addDirection",
            value: function() {
                this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
            }
        }, {
            key: "addSpeed",
            value: function() {
                this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
        }, {
            key: "initScrollBar",
            value: function() {
                if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), (this.scrollbarContainer || document.body).append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
            }
        }, {
            key: "reinitScrollBar",
            value: function() {
                if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
            }
        }, {
            key: "destroyScrollBar",
            value: function() {
                this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
            }
        }, {
            key: "getScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
            }
        }, {
            key: "releaseScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !1, this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
            }
        }, {
            key: "moveScrollBar",
            value: function(i) {
                var o = this;
                this.isDraggingScrollbar && requestAnimationFrame(function() {
                    var t = 100 * (i.clientX - o.scrollbarBCR.left) / o.scrollbarWidth * o.instance.limit.x / 100,
                        e = 100 * (i.clientY - o.scrollbarBCR.top) / o.scrollbarHeight * o.instance.limit.y / 100;
                    0 < e && e < o.instance.limit.y && (o.instance.delta.y = e), 0 < t && t < o.instance.limit.x && (o.instance.delta.x = t)
                })
            }
        }, {
            key: "addElements",
            value: function() {
                var k = this;
                this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach(function(t, e) {
                    var i, o, n, s = D(t),
                        r = Object.entries(k.sections).map(function(t) {
                            t = E(t, 2);
                            return t[0], t[1]
                        }).find(function(t) {
                            return s.includes(t.el)
                        }),
                        a = t.dataset[k.name + "Class"] || k.class,
                        e = "string" == typeof t.dataset[k.name + "Id"] ? t.dataset[k.name + "Id"] : "el" + e,
                        l = t.dataset[k.name + "Repeat"],
                        c = t.dataset[k.name + "Call"],
                        d = t.dataset[k.name + "Position"],
                        h = t.dataset[k.name + "Delay"],
                        u = t.dataset[k.name + "Direction"],
                        m = "string" == typeof t.dataset[k.name + "Sticky"],
                        p = !!t.dataset[k.name + "Speed"] && parseFloat(t.dataset[k.name + "Speed"]) / 10,
                        f = "string" == typeof t.dataset[k.name + "Offset"] ? t.dataset[k.name + "Offset"].split(",") : k.offset,
                        w = t.dataset[k.name + "Target"],
                        y = (w = void 0 !== w ? document.querySelector("".concat(w)) : t).getBoundingClientRect(),
                        y = null === r || r.inView ? (i = y.top + k.instance.scroll.y - q(w).y, y.left + k.instance.scroll.x - q(w).x) : (i = y.top - q(r.el).y - q(w).y, y.left - q(r.el).x - q(w).x),
                        v = i + w.offsetHeight,
                        g = y + w.offsetWidth,
                        b = {
                            x: (g - y) / 2 + y,
                            y: (v - i) / 2 + i
                        },
                        S = (m && (L = (o = t.getBoundingClientRect()).top, n = {
                            x: (o = o.left) - y,
                            y: L - i
                        }, i += window.innerHeight, y += window.innerWidth, v = L + w.offsetHeight - t.offsetHeight - n[k.directionAxis], b = {
                            x: ((g = o + w.offsetWidth - t.offsetWidth - n[k.directionAxis]) - y) / 2 + y,
                            y: (v - i) / 2 + i
                        }), l = "false" != l && (null != l || k.repeat), [0, 0]);
                    if (f)
                        if ("horizontal" === k.direction) {
                            for (var x = 0; x < f.length; x++) "string" == typeof f[x] ? f[x].includes("%") ? S[x] = parseInt(f[x].replace("%", "") * k.windowWidth / 100) : S[x] = parseInt(f[x]) : S[x] = f[x];
                            y += S[0], g -= S[1]
                        } else {
                            for (x = 0; x < f.length; x++) "string" == typeof f[x] ? f[x].includes("%") ? S[x] = parseInt(f[x].replace("%", "") * k.windowHeight / 100) : S[x] = parseInt(f[x]) : S[x] = f[x];
                            i += S[0], v -= S[1]
                        } var L = {
                        el: t,
                        id: e,
                        class: a,
                        section: r,
                        top: i,
                        middle: b,
                        bottom: v,
                        left: y,
                        right: g,
                        offset: f,
                        progress: 0,
                        repeat: l,
                        inView: !1,
                        call: c,
                        speed: p,
                        delay: h,
                        position: d,
                        target: w,
                        direction: u,
                        sticky: m
                    };
                    k.els[e] = L, t.classList.contains(a) && k.setInView(k.els[e], e), !1 === p && !m || (k.parallaxElements[e] = L)
                })
            }
        }, {
            key: "addSections",
            value: function() {
                var s = this,
                    t = (this.sections = {}, this.el.querySelectorAll("[data-".concat(this.name, "-section]")));
                (t = 0 === t.length ? [this.el] : t).forEach(function(t, e) {
                    var e = "string" == typeof t.dataset[s.name + "Id"] ? t.dataset[s.name + "Id"] : "section" + e,
                        i = t.getBoundingClientRect(),
                        o = {
                            x: i.left - 1.5 * window.innerWidth - q(t).x,
                            y: i.top - 1.5 * window.innerHeight - q(t).y
                        },
                        i = {
                            x: o.x + i.width + 2 * window.innerWidth,
                            y: o.y + i.height + 2 * window.innerHeight
                        },
                        n = "string" == typeof t.dataset[s.name + "Persistent"];
                    t.setAttribute("data-scroll-section-id", e), s.sections[e] = {
                        el: t,
                        offset: o,
                        limit: i,
                        inView: !1,
                        persistent: n,
                        id: e
                    }
                })
            }
        }, {
            key: "transform",
            value: function(t, e, i, o) {
                var n, s;
                o = o ? (n = C((s = q(t)).x, e, o), s = C(s.y, i, o), "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(n, ",").concat(s, ",0,1)")) : "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)"), t.style.webkitTransform = o, t.style.msTransform = o, t.style.transform = o
            }
        }, {
            key: "transformElements",
            value: function(o) {
                var n = this,
                    s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    r = this.instance.scroll.x + this.windowWidth,
                    a = this.instance.scroll.y + this.windowHeight,
                    l = {
                        x: this.instance.scroll.x + this.windowMiddle.x,
                        y: this.instance.scroll.y + this.windowMiddle.y
                    };
                Object.entries(this.parallaxElements).forEach(function(t) {
                    var t = E(t, 2),
                        e = (t[0], t[1]),
                        i = o ? 0 : !1;
                    if (e.inView || s) switch (e.position) {
                        case "top":
                            i = n.instance.scroll[n.directionAxis] * -e.speed;
                            break;
                        case "elementTop":
                            i = (a - e.top) * -e.speed;
                            break;
                        case "bottom":
                            i = (n.instance.limit[n.directionAxis] - a + n.windowHeight) * e.speed;
                            break;
                        case "left":
                            i = n.instance.scroll[n.directionAxis] * -e.speed;
                            break;
                        case "elementLeft":
                            i = (r - e.left) * -e.speed;
                            break;
                        case "right":
                            i = (n.instance.limit[n.directionAxis] - r + n.windowHeight) * e.speed;
                            break;
                        default:
                            i = (l[n.directionAxis] - e.middle[n.directionAxis]) * -e.speed
                    }!1 !== (i = e.sticky ? e.inView ? "horizontal" === n.direction ? n.instance.scroll.x - e.left + window.innerWidth : n.instance.scroll.y - e.top + window.innerHeight : "horizontal" === n.direction ? n.instance.scroll.x < e.left - window.innerWidth && n.instance.scroll.x < e.left - window.innerWidth / 2 ? 0 : n.instance.scroll.x > e.right && n.instance.scroll.x > e.right + 100 && e.right - e.left + window.innerWidth : n.instance.scroll.y < e.top - window.innerHeight && n.instance.scroll.y < e.top - window.innerHeight / 2 ? 0 : n.instance.scroll.y > e.bottom && n.instance.scroll.y > e.bottom + 100 && e.bottom - e.top + window.innerHeight : i) && ("horizontal" === e.direction || "horizontal" === n.direction && "vertical" !== e.direction ? n.transform(e.el, i, 0, !o && e.delay) : n.transform(e.el, 0, i, !o && e.delay))
                })
            }
        }, {
            key: "scrollTo",
            value: function(t) {
                var i = this,
                    e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    o = parseInt(e.offset) || 0,
                    n = isNaN(parseInt(e.duration)) ? 1e3 : parseInt(e.duration),
                    s = e.easing || [.25, 0, .35, 1],
                    r = !!e.disableLerp,
                    a = !!e.callback && e.callback,
                    s = Z.apply(void 0, function(t) {
                        if (Array.isArray(t)) return f(t)
                    }(e = s) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(e) || p(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }());
                if ("string" == typeof t) {
                    if ("top" === t) t = 0;
                    else if ("bottom" === t) t = this.instance.limit.y;
                    else if ("left" === t) t = 0;
                    else if ("right" === t) t = this.instance.limit.x;
                    else if (!(t = document.querySelector(t))) return
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                if ("number" != typeof t) {
                    if (!D(t).includes(this.el)) return;
                    var e = t.getBoundingClientRect(),
                        l = e.top,
                        e = e.left,
                        c = D(t).find(function(e) {
                            return Object.entries(i.sections).map(function(t) {
                                t = E(t, 2);
                                return t[0], t[1]
                            }).find(function(t) {
                                return t.el == e
                            })
                        }),
                        c = c ? q(c)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                        o = "horizontal" === this.direction ? e + o - c : l + o - c
                } else o = t + o;
                var d = parseFloat(this.instance.delta[this.directionAxis]),
                    h = Math.max(0, Math.min(o, this.instance.limit[this.directionAxis])) - d,
                    u = function(t) {
                        r ? "horizontal" === i.direction ? i.setScroll(d + h * t, i.instance.delta.y) : i.setScroll(i.instance.delta.x, d + h * t) : i.instance.delta[i.directionAxis] = d + h * t
                    },
                    m = (this.animatingScroll = !0, this.stopScrolling(), this.startScrolling(), Date.now());
                (function t() {
                    var e = (Date.now() - m) / n;
                    1 < e ? (u(1), i.animatingScroll = !1, 0 == n && i.update(), a && a()) : (i.scrollToRaf = requestAnimationFrame(t), u(s(e)))
                })()
            }
        }, {
            key: "update",
            value: function() {
                this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
            }
        }, {
            key: "startScroll",
            value: function() {
                this.stop = !1
            }
        }, {
            key: "stopScroll",
            value: function() {
                this.stop = !0
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance = n(n({}, this.instance), {}, {
                    scroll: {
                        x: t,
                        y: e
                    },
                    delta: {
                        x: t,
                        y: e
                    },
                    speed: 0
                })
            }
        }, {
            key: "destroy",
            value: function() {
                d(r(B.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
            }
        }]);
        var tt, et = B;
        function B() {
            var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return i(this, B), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = tt.call(this, e)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = e.scrollbarContainer, t.checkKey = t.checkKey.bind(l(t)), window.addEventListener("keydown", t.checkKey, !1), t
        }
        return t(j, [{
            key: "init",
            value: function() {
                var t;
                this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new et(this.options) : this.scroll = new R(this.options), this.scroll.init(), window.location.hash && (t = window.location.hash.slice(1, window.location.hash.length), (t = document.getElementById(t)) && this.scroll.scrollTo(t))
            }
        }, {
            key: "update",
            value: function() {
                this.scroll.update()
            }
        }, {
            key: "start",
            value: function() {
                this.scroll.startScroll()
            }
        }, {
            key: "stop",
            value: function() {
                this.scroll.stopScroll()
            }
        }, {
            key: "scrollTo",
            value: function(t, e) {
                this.scroll.scrollTo(t, e)
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.scroll.setScroll(t, e)
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.scroll.setEvents(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.scroll.unsetEvents(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.scroll.destroy()
            }
        }]), j;
        function j() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, j), this.options = t, Object.assign(this, h, t), this.smartphone = h.smartphone, t.smartphone && Object.assign(this.smartphone, t.smartphone), this.tablet = h.tablet, t.tablet && Object.assign(this.tablet, t.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
        }
    }), $(document).ready(function() {
        mobileMenuFunction(), mouseControl()
    }), window.loaded = 0, jQuery(document).on("gform_post_render", function(t, e, i) {
        0 != jQuery("div.gform_validation_errors").length && window.locoScroll.scrollTo(document.querySelector("#gform_wrapper_" + e)), initSelect2(".ginput_container_select select", "", "variation-dropdown", "variation-select"), label_transition_form()
    }), jQuery(document).on("gform_confirmation_loaded", function(t, e) {
        initSelect2(".ginput_container_select select", "", "variation-dropdown", "variation-select")
    });
var parser = (new UAParser).getResult(),
    tablet = "tablet" == parser.device.type;

function mouseControl() {
    gsap.set(".cursor-follower", {
        xPercent: -50,
        yPercent: -50
    });
    var t = document.querySelector(".cursor-follower"),
        e = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        },
        i = {
            x: e.x,
            y: e.y
        },
        o = gsap.quickSetter(t, "x", "px"),
        n = gsap.quickSetter(t, "y", "px");
    window.addEventListener("mousemove", function(t) {
        i.x = t.x, i.y = t.y
    }), gsap.ticker.add(function() {
        var t = 1 - Math.pow(.9, gsap.ticker.deltaRatio());
        e.x += (i.x - e.x) * t, e.y += (i.y - e.y) * t, o(e.x), n(e.y)
    })
}
var removeCursorClasses = function() {
    document.body.querySelector(".cursor-follower").classList.remove("view", "project", "muted", "drag", "next-page", "all")
};
function mouseHover() {
    var t = $(".cursor-follower");
    $(".view-cursor").on("mouseenter", function() {
        t.addClass("view")
    }), $(".view-cursor").on("mouseleave", function() {
        t.removeClass("view")
    }), $(".view-project-cursor").on("mouseenter", function() {
        t.addClass("project")
    }), $(".view-project-cursor").on("mouseleave", function() {
        t.removeClass("project")
    }), $(".view-muted-cursor").on("mouseenter", function() {
        t.addClass("muted")
    }), $(".view-muted-cursor").on("mouseleave", function() {
        t.removeClass("muted")
    }), $(".view-drag-cursor").on("mouseenter", function() {
        t.addClass("drag")
    }), $(".view-drag-cursor").on("mouseleave", function() {
        t.removeClass("drag")
    }), $(".project-custom-cursor").on("mouseenter", function() {
        t.addClass("next-page")
    }), $(".project-custom-cursor").on("mouseleave", function() {
        t.removeClass("next-page")
    }), $(".all-projects-mouse").on("mouseenter", function() {
        t.addClass("all")
    }), $(".all-projects-mouse").on("mouseleave", function() {
        t.removeClass("all")
    })
}
document.body.classList.add(parser.device.type), tablet && document.body.classList.add("tablet"), "Safari" == parser.browser.name && (iOS() || window.innerWidth <= 1380) && (document.body.classList.add("tablet"), tablet = !0);
var removeCursorClasses = function() {
    document.body.querySelector(".cursor-follower").classList.remove("view", "project", "muted", "drag", "next-page", "all")
};
var videos, lastSize, themeSwitchInited, maxYScroll, currentYScroll, playAllAutoplay = function() {
        var t = document.body.querySelectorAll("video[autoplay]");
        Array.from(t).forEach(function(e) {
            var t = e.play();
            void 0 !== t && t.then(function(t) {}).catch(function(t) {
                e.play()
            })
        })
    },
    viewportVideoPlayPauseTrigger = function() {
        (videos = document.querySelectorAll("video:not(.no-pausing)")) && Array.from(videos).forEach(function(t) {
            gsap.to({
                val: 0
            }, {
                val: 1,
                duration: 1,
                paused: !0,
                scrollTrigger: {
                    trigger: t,
                    scroller: document.body.querySelector("[data-scroll-container]"),
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0,
                    toggleActions: "play none none none",
                    onLeave: function() {
                        t.paused || t.pause()
                    },
                    onLeaveBack: function() {
                        t.paused || t.pause()
                    },
                    onEnter: function() {
                        t.paused && t.play()
                    },
                    onEnterBack: function() {
                        t.paused && t.play()
                    }
                }
            })
        })
    },
    windowLoadHandle = function() {
        mouseHover(), initGravityFormsBarba(), label_transition_form(), smooth(document.body), viewportVideoPlayPauseTrigger()
    },
    callAnimation = (window.addEventListener("load", function() {
        setTimeout(function() {
            windowLoadHandle()
        }, 200)
    }), function(e) {
        window.animations.forEach(function(t) {
            e == t.name && setTimeout(function() {
                t.animation.play()
            }, t.delay)
        })
    }),
    initThemeSwitcher = function() {
        function i() {
            e.forEach(function(t) {
                o.classList.remove(t)
            })
        }
        var o = document.body.querySelector("#page-wrapper"),
            t = document.body.querySelectorAll(".theme-switch"),
            e = ["dark-mode", "light-mode", "white-mode"],
            n = "top bottom",
            s = "bottom bottom";
        Array.from(t).forEach(function(t, e) {
            0 == e || 1 == e ? document.body.querySelector("[data-scroll-container]").classList.contains("tpl-work") && window.innerWidth < window.mobileBreakpoint && (n = "top 50%", s = "bottom 50%") : (n = "top bottom", s = "bottom bottom");
            gsap.to({
                val: 0
            }, {
                val: 1,
                scrollTrigger: {
                    trigger: t,
                    scroller: document.body.querySelector("[data-scroll-container]"),
                    start: n,
                    end: s,
                    toggleActions: "play none none none",
                    onEnter: function() {
                        themeSwitchInited && (i(), o.classList.add(t.dataset.theme.toString()))
                    },
                    onEnterBack: function() {
                        themeSwitchInited && (i(), o.classList.add(t.dataset.theme.toString()))
                    }
                }
            })
        })
    },
    initFirstSiteTheme = function(t) {
        document.body.querySelector("#page-wrapper").classList.add(t.querySelector("section").dataset.theme)
    },
    toggleRefresh = (initFirstSiteTheme(document.body), window.tabletBreakpoint = 1380, window.tabletPortraitBreakpoint = 1030, window.mobileBreakpoint = 767, function() {
        window.innerWidth <= window.tabletBreakpoint && "desktop" == lastSize ? (window.location.reload(), console.log("tablet refresh")) : window.innerWidth > window.tabletBreakpoint && "tablet" == lastSize && (window.location.reload(), console.log("desktop refresh")), lastSize = window.innerWidth > window.tabletBreakpoint ? "desktop" : "tablet"
    }),
    smooth = function(t) {
        document.body.querySelector(".home-intro-section") && (e = setInterval(function() {
            window.introAnimation && window.introAnimation.play(), clearInterval(e)
        }, 50)), document.documentElement.classList.remove("overflow-hidden-mobile"), toggleRefresh(), window.addEventListener("resize", toggleRefresh), window.locoScroll = null, window.locoScroll = new LocomotiveScroll({
            el: t.querySelector("[data-scroll-container]"),
            smooth: !0,
            getDirection: !0,
            getSpeed: !0,
            reloadOnContextChange: !0,
            multiplier: .65,
            lerp: .1,
            tablet: {
                breakpoint: window.tabletPortraitBreakpoint,
                smooth: !0,
                getDirection: !0,
                getSpeed: !0
            },
            mobile: {
                smooth: !1,
                getDirection: !0,
                getSpeed: !1
            }
        }), ScrollTrigger.scrollerProxy(t.querySelector("[data-scroll-container]"), {
            scrollTop: function(t) {
                return arguments.length ? window.locoScroll.scrollTo(t, 0, 0) : window.locoScroll.scroll.instance.scroll.y
            },
            getBoundingClientRect: function() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            },
            pinType: t.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
        }), ScrollTrigger.addEventListener("refresh", function() {
            window.locoScroll.update()
        }), ScrollTrigger.refresh(), window.initParallaxEffect && window.initParallaxEffect.call(), window.initParallaxEffect2 && window.initParallaxEffect2.call(), window.initCardGridAnim2 && window.initCardGridAnim2.call(), window.initCardGridAnim && window.initCardGridAnim.call(), window.serviceInitCardGridAnim && window.serviceInitCardGridAnim.call(), window.aboutListAnimations && window.aboutListAnimations.call(), window.scrolling = !1;
        var e, i, o = themeSwitchInited = !1,
            n = !1,
            s = 0;
        window.locoScroll.on("scroll", function(t) {
            var e;
            ScrollTrigger.update(), maxYScroll = t.limit.y, currentYScroll = t.scroll.y, i && clearTimeout(i), window.scrolling = !0, i = setTimeout(function() {
                window.scrolling = !1
            }, 50), !themeSwitchInited && 50 <= t.scroll.y && (themeSwitchInited = !0, initThemeSwitcher()), currentYScroll < 100 ? (document.querySelector(".page-header").classList.remove("up", "down"), document.querySelector(".hamburger-wrap").classList.remove("up", "down")) : "down" == t.direction ? (s = 0, document.querySelector(".page-header").classList.remove("up"), document.querySelector(".hamburger-wrap").classList.remove("up"), document.querySelector(".page-header").classList.add("down"), document.querySelector(".hamburger-wrap").classList.add("down")) : "up" == t.direction && (s++, (window.innerWidth > window.tabletBreakpoint ? 30 : 10) <= s && (document.querySelector(".page-header").classList.remove("down"), document.querySelector(".hamburger-wrap").classList.remove("down"), document.querySelector(".page-header").classList.add("up"), document.querySelector(".hamburger-wrap").classList.add("up"))), "single" == document.body.querySelector("#barba-wrapper").dataset.barbaNamespace && window.innerWidth > window.mobileBreakpoint && maxYScroll <= currentYScroll && !o && (n && (o = !0, e = document.body.querySelector(".next-study-link-section"), barba.go(e.href)), setTimeout(function() {
                n = !0
            }, 500)), t.scroll.y <= .5 * window.innerHeight && (t.scroll.y <= .1 * window.innerHeight ? (document.body.querySelector("#page-wrapper").classList.remove("dark-mode", "light-mode", "white-mode"), document.body.querySelector("#page-wrapper").classList.add(document.body.querySelector("section").dataset.theme)) : t.scroll.y > .1 * window.innerHeight && t.scroll.y <= .5 * window.innerHeight && document.body.querySelectorAll(".theme-switch")[1] && document.body.querySelectorAll(".theme-switch")[1].classList.contains("is-inview") && (document.body.querySelector("#page-wrapper").classList.remove("dark-mode", "light-mode", "white-mode"), document.body.querySelector("#page-wrapper").classList.add(document.body.querySelectorAll(".theme-switch")[1].dataset.theme)))
        }), window.locoScroll.on("call", function(t) {
            "string" == typeof t ? callAnimation(t) : "object" == _typeof(t) && Array.from(t).forEach(function(t) {
                callAnimation(t)
            })
        }), new ResizeObserver(function() {
            setTimeout(function() {
                window.locoScroll.update()
            }, 650)
        }).observe(document.querySelector("[data-scroll-container]"))
    };
window.ADMIN_BAR_VISIBLE || (barba.init({
    prevent: function(t) {
        t = t.el;
        return t.classList && t.classList.contains("prevent-barba")
    },
    transitions: [{
        name: "opacity-transition",
        beforeLeave: function(t) {
            document.body.querySelector("#page-wrapper").classList.remove("dark-mode", "light-mode", "white-mode"), document.body.querySelector("#page-wrapper").classList.add(t.next.namespace), document.querySelector(".page-header").classList.remove("up", "down"), document.querySelector(".hamburger-wrap").classList.remove("up", "down"), "single" == t.next.namespace ? (document.body.querySelector("#page-header").classList.add("case-study-theme"), document.body.querySelector(".hamburger-wrap").classList.add("case-study-theme")) : (document.body.querySelector("#page-header").classList.remove("case-study-theme"), document.body.querySelector(".hamburger-wrap").classList.remove("case-study-theme")), themeSwitchInited = !1, removeCursorClasses(), window.closeMenu()
        },
        leave: function(e) {
            return new Promise(function(t) {
                gsap.to(e.current.container, {
                    alpha: 0,
                    duration: .5,
                    ease: "power4.out",
                    onComplete: function() {
                        t()
                    }
                })
            })
        },
        beforeEnter: function(t) {
            window.locoScroll && (document.documentElement.classList.add("overflow-hidden-mobile"), window.locoScroll.destroy())
        },
        enter: function(t) {
            $('.faq-row .faq-item').on('click', function() {
                let _ = $(this);
                if (!_.hasClass('active')) {
                    $('.faq-item.active .answer').slideToggle();
                    $('.faq-item').removeClass('active');
                    _.toggleClass('active');
                    _.find('.answer').slideToggle();
                }
            });
            
            if ($('#home_blob_container').length > 0) {
                new BlobAnimation("home_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#work_blob_container').length > 0) {
                new BlobAnimation("work_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#service_blob_container').length > 0) {
                new BlobAnimation("service_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#about_blob_container').length > 0) {
                new BlobAnimation("about_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#contact_blob_container').length > 0) {
                new BlobAnimation("contact_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#price_blob_container').length > 0) {
                new BlobAnimation("price_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }

            if ($('#contact_faq_blob_container').length > 0) {
                new BlobAnimation("contact_faq_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }

            if ($('#service_faq_blob_container').length > 0) {
                new BlobAnimation("service_faq_blob_container", {
                    //Blob main settings
                        BLOB_SIZE: 100,
                        BLOB_DISTANCE: 1000,
                        DETALIZATION: 60,
                        PERSPECTIVE_DISTORTION: 1,
                        ROTATION_SPEED: 5,
                        OFFSET_X: 0, //offset in pixels
                        OFFSET_Y: 0, //offset in pixels
                        PERCENTAGE_OFFSET_X: 0, //offset in percentages
                        PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                    
                    //Dot settins
                        DOT_SIZE: 2,
                        DOT_COLOR: "gray",
                
                    //Responsivity settings
                        AUTO_SCALE: false,
                        VIEWPORT_WIDTH: 183,
                        VIEWPORT_HEIGHT: 133,
                        
                    //Mouse settings				
                        MOUSE_DISTANCE_MIN: 20,
                        MOUSE_DISTANCE_MAX: 400,
                        MOUSE_SENSITIVITY: 1,
                        INERTIAL_TIME: 2,
                    
                    //Shape settins
                        //Shape main settings
                            INITIAL_SHAPE: {
                                                wave1: {amplitude: 41.758, frequency: 4.78, phase: 3.142},
                                                wave2: {amplitude: 31.868, frequency: 2.692, phase: 1.45},
                                                wave3: {amplitude: 37.363, frequency: 2, phase: 1.036}
                                        },
                            USE_MORPHING: true,
                            USE_WAVE_MOTION: true,
                            USE_WAVE_SWING: true,
                        
                        //Morphing settings
                            MORPHING_AUTOPLAY: true,
                            MORPHING_DURATION: 2,
                            MORPHING_DELAY: 2,
                            MORPHING_TRANSITION_TYPE: "cubic",	
                            MORPHING_SHAPES: [									  	
                                                {
                                                    wave1: {amplitude: 58.242, frequency: 4.231, phase: 4.005},
                                                    wave2: {amplitude: 37.363, frequency: 4.176, phase: 5.006},
                                                    wave3: {amplitude: 41.758, frequency: 3.297, phase: 5.178}
                                                },
                                                {
                                                    wave1: {amplitude: 112.088, frequency: 2.857, phase: 2.969},
                                                    wave2: {amplitude: 40.659, frequency: 3.187, phase: 2.486},
                                                    wave3: {amplitude: 43.956, frequency: 0.604, phase: 0.449}
                                                },
                                                {
                                                    wave1: {amplitude: 127.473, frequency: 2.857, phase: 4.626},
                                                    wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                                    wave3: {amplitude: 31.868, frequency: 0.604, phase: 3.59}
                                                },
                                                {
                                                    wave1: {amplitude: 36.264, frequency: 0, phase: 1.795},
                                                    wave2: {amplitude: 40.659, frequency: 2.033, phase: 1.312},
                                                    wave3: {amplitude: 165.934, frequency: 0, phase: 3.97}
                                                },
                                                {
                                                    wave1: {amplitude: 43.956, frequency: 2.967, phase: 4.315},
                                                    wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                                    wave3: {amplitude: 170.33, frequency: 0, phase: 3.245}
                                                },
                                                {
                                                    wave1: {amplitude: 118.681, frequency: 0, phase: 4.074},
                                                    wave2: {amplitude: 115.385, frequency: 0, phase: 4.039},
                                                    wave3: {amplitude: 141.758, frequency: 0.989, phase: 0}
                                                },
                                                {
                                                    wave1: {amplitude: 36.264, frequency: 6.319, phase: 4.419},
                                                    wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                                    wave3: {amplitude: 2.198, frequency: 7.033, phase: 0.138}
                                                },
                                                {
                                                    wave1: {amplitude: 49.451, frequency: 4.725, phase: 4.592},
                                                    wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                                    wave3: {amplitude: 161.538, frequency: 0.989, phase: 4.661}
                                                }									
                                            ],
                                            
                        //Wave motion settings
                            WAVE_1_MOTION_SPEED: 1.3,
                            WAVE_2_MOTION_SPEED: 0.8,
                            //WAVE_3_MOTION_SPEED: 0.3,
                        
                        //Wave swing settings
                            /*
                            WAVE_1_SWING_SETTINGS: {
                                                        //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "pulse"},
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                                },
                            */
                            WAVE_2_SWING_SETTINGS: {
                                                        amplitude: {amplitude: 20, frequency: 1, phase: 0, type: "sine"}//,
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                                },
                            WAVE_3_SWING_SETTINGS: {
                                                        //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        phase: {amplitude: 2, frequency: 0.2, phase: 2.1, type: "sine"}
                                                }
                });
            }

            // slickInit();
            
            initFirstSiteTheme(t.next.container)
        },
        after: function(t) {
            gsap.from(t.next.container, {
                alpha: 0,
                duration: .5,
                ease: "power4.in"
            }), DOM.onReady(), windowLoadHandle(), removeCursorClasses(), slickInit();
        }
    }, {
        name: "self",
        beforeLeave: function(t) {
            document.body.querySelector("#page-wrapper").classList.remove("dark-mode", "light-mode", "white-mode"), document.body.querySelector("#page-wrapper").classList.add(t.next.namespace), document.querySelector(".page-header").classList.remove("up", "down"), document.querySelector(".hamburger-wrap").classList.remove("up", "down"), "single" == t.next.namespace ? (document.body.querySelector("#page-header").classList.add("case-study-theme"), document.body.querySelector(".hamburger-wrap").classList.add("case-study-theme")) : (document.body.querySelector("#page-header").classList.remove("case-study-theme"), document.body.querySelector(".hamburger-wrap").classList.remove("case-study-theme")), themeSwitchInited = !1, removeCursorClasses(), window.closeMenu()
            
        },
        leave: function(e) {
            return new Promise(function(t) {
                gsap.to(e.current.container, {
                    alpha: 0,
                    duration: .5,
                    ease: "power4.out",
                    onComplete: function() {
                        t()
                    }
                })
            })
        },
        beforeEnter: function(t) {
            window.locoScroll && (document.documentElement.classList.add("overflow-hidden-mobile"), window.locoScroll.destroy())
        },
        enter: function(t) {       
            $('.faq-row .faq-item').on('click', function() {
                let _ = $(this);
                if (!_.hasClass('active')) {
                    $('.faq-item.active .answer').slideToggle();
                    $('.faq-item').removeClass('active');
                    _.toggleClass('active');
                    _.find('.answer').slideToggle();
                }
            });
            
            // if ($(".slider-for").length > 0) {    
            //     $(".slider-for").slick({
            //         vertical: true,
            //         centerMode: true,
            //         slidesToShow: 1,
            //         infinite: true,
            //         slidesToScroll: 1,
            //         autoplay: true,
            //         autoplaySpeed: 3000,
            //     });
            // }
            
            if ($('#home_blob_container').length > 0) {
                new BlobAnimation("home_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#work_blob_container').length > 0) {
                new BlobAnimation("work_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#service_blob_container').length > 0) {
                new BlobAnimation("service_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#about_blob_container').length > 0) {
                new BlobAnimation("about_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#contact_blob_container').length > 0) {
                new BlobAnimation("contact_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }
            
            if ($('#price_blob_container').length > 0) {
                new BlobAnimation("price_blob_container", {
                    //Blob main settings
                            BLOB_SIZE: 90,
                            BLOB_DISTANCE: 1000,
                            DETALIZATION: 60,
                            PERSPECTIVE_DISTORTION: 1,
                            ROTATION_SPEED: 5,
                            OFFSET_X: 0, //offset in pixels
                            OFFSET_Y: 0, //offset in pixels
                            PERCENTAGE_OFFSET_X: 0, //offset in percentages
                            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                        
                        //Dot settins
                            DOT_SIZE: 1,
                            DOT_COLOR: "#494351",
            
                        //Responsivity settings
                            AUTO_SCALE: false,
                            VIEWPORT_WIDTH: 1000,
                            VIEWPORT_HEIGHT: 1000,
                            
                        //Mouse settings				
                            MOUSE_DISTANCE_MIN: 20,
                            MOUSE_DISTANCE_MAX: 400,
                            MOUSE_SENSITIVITY: 1,
                            INERTIAL_TIME: 2,
                        
                        //Shape settins
                            //Shape main settings
                                INITIAL_SHAPE: {
                                                    wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                    wave3: {amplitude: 0, frequency: 0, phase: 0}
                                               },
                                USE_MORPHING: true,
                                USE_WAVE_MOTION: false,
                                USE_WAVE_SWING: false,
                            
                            //Morphing settings
                                MORPHING_AUTOPLAY: true,
                                MORPHING_DURATION: 2,
                                MORPHING_DELAY: 1,
                                MORPHING_TRANSITION_TYPE: "cubic",
                                MORPHING_SHAPES: [										
                                                    {
                                                        wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
                                                        wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 2.209}
                                                    },
                                                    {
                                                        wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
                                                        wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
                                                        wave3: {amplitude: 26.374, frequency: 0, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
                                                        wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
                                                        wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
                                                    },
                                                    {
                                                        wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
                                                        wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
                                                        wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
                                                       },
                                                       {
                                                        wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
                                                        wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
                                                        wave3: {amplitude: 50, frequency: 2, phase: 5.42}
                                                      },
                                                      {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
                                                        wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
                                                    },
                                                    {
                                                        wave1: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave2: {amplitude: 0, frequency: 0, phase: 0},
                                                        wave3: {amplitude: 0, frequency: 0, phase: 0}
                                                    }
                                                 ]
                });
            }           
            
            if ($('#contact_faq_blob_container').length > 0) {
                new BlobAnimation("contact_faq_blob_container", {
                            
                    //Blob main settings
                        BLOB_SIZE: 100,
                        BLOB_DISTANCE: 1000,
                        DETALIZATION: 60,
                        PERSPECTIVE_DISTORTION: 1,
                        ROTATION_SPEED: 5,
                        OFFSET_X: 0, //offset in pixels
                        OFFSET_Y: 0, //offset in pixels
                        PERCENTAGE_OFFSET_X: 0, //offset in percentages
                        PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                    
                    //Dot settins
                        DOT_SIZE: 2,
                        DOT_COLOR: "gray",
                
                    //Responsivity settings
                        AUTO_SCALE: false,
                        VIEWPORT_WIDTH: 183,
                        VIEWPORT_HEIGHT: 133,
                        
                    //Mouse settings				
                        MOUSE_DISTANCE_MIN: 20,
                        MOUSE_DISTANCE_MAX: 400,
                        MOUSE_SENSITIVITY: 1,
                        INERTIAL_TIME: 2,
                    
                    //Shape settins
                        //Shape main settings
                            INITIAL_SHAPE: {
                                                wave1: {amplitude: 41.758, frequency: 4.78, phase: 3.142},
                                                wave2: {amplitude: 31.868, frequency: 2.692, phase: 1.45},
                                                wave3: {amplitude: 37.363, frequency: 2, phase: 1.036}
                                        },
                            USE_MORPHING: true,
                            USE_WAVE_MOTION: true,
                            USE_WAVE_SWING: true,
                        
                        //Morphing settings
                            MORPHING_AUTOPLAY: true,
                            MORPHING_DURATION: 2,
                            MORPHING_DELAY: 2,
                            MORPHING_TRANSITION_TYPE: "cubic",	
                            MORPHING_SHAPES: [									  	
                                                {
                                                    wave1: {amplitude: 58.242, frequency: 4.231, phase: 4.005},
                                                    wave2: {amplitude: 37.363, frequency: 4.176, phase: 5.006},
                                                    wave3: {amplitude: 41.758, frequency: 3.297, phase: 5.178}
                                                },
                                                {
                                                    wave1: {amplitude: 112.088, frequency: 2.857, phase: 2.969},
                                                    wave2: {amplitude: 40.659, frequency: 3.187, phase: 2.486},
                                                    wave3: {amplitude: 43.956, frequency: 0.604, phase: 0.449}
                                                },
                                                {
                                                    wave1: {amplitude: 127.473, frequency: 2.857, phase: 4.626},
                                                    wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                                    wave3: {amplitude: 31.868, frequency: 0.604, phase: 3.59}
                                                },
                                                {
                                                    wave1: {amplitude: 36.264, frequency: 0, phase: 1.795},
                                                    wave2: {amplitude: 40.659, frequency: 2.033, phase: 1.312},
                                                    wave3: {amplitude: 165.934, frequency: 0, phase: 3.97}
                                                },
                                                {
                                                    wave1: {amplitude: 43.956, frequency: 2.967, phase: 4.315},
                                                    wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                                    wave3: {amplitude: 170.33, frequency: 0, phase: 3.245}
                                                },
                                                {
                                                    wave1: {amplitude: 118.681, frequency: 0, phase: 4.074},
                                                    wave2: {amplitude: 115.385, frequency: 0, phase: 4.039},
                                                    wave3: {amplitude: 141.758, frequency: 0.989, phase: 0}
                                                },
                                                {
                                                    wave1: {amplitude: 36.264, frequency: 6.319, phase: 4.419},
                                                    wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                                    wave3: {amplitude: 2.198, frequency: 7.033, phase: 0.138}
                                                },
                                                {
                                                    wave1: {amplitude: 49.451, frequency: 4.725, phase: 4.592},
                                                    wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                                    wave3: {amplitude: 161.538, frequency: 0.989, phase: 4.661}
                                                }									
                                            ],
                                            
                        //Wave motion settings
                            WAVE_1_MOTION_SPEED: 1.3,
                            WAVE_2_MOTION_SPEED: 0.8,
                            //WAVE_3_MOTION_SPEED: 0.3,
                        
                        //Wave swing settings
                            /*
                            WAVE_1_SWING_SETTINGS: {
                                                        //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "pulse"},
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                                },
                            */
                            WAVE_2_SWING_SETTINGS: {
                                                        amplitude: {amplitude: 20, frequency: 1, phase: 0, type: "sine"}//,
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                                },
                            WAVE_3_SWING_SETTINGS: {
                                                        //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        phase: {amplitude: 2, frequency: 0.2, phase: 2.1, type: "sine"}
                                                }
                });
            }
            
            if ($('#service_faq_blob_container').length > 0) {
                new BlobAnimation("service_faq_blob_container", {
                    //Blob main settings
                        BLOB_SIZE: 100,
                        BLOB_DISTANCE: 1000,
                        DETALIZATION: 60,
                        PERSPECTIVE_DISTORTION: 1,
                        ROTATION_SPEED: 5,
                        OFFSET_X: 0, //offset in pixels
                        OFFSET_Y: 0, //offset in pixels
                        PERCENTAGE_OFFSET_X: 0, //offset in percentages
                        PERCENTAGE_OFFSET_Y: 0, //offset in percentages
                    
                    //Dot settins
                        DOT_SIZE: 2,
                        DOT_COLOR: "gray",
                
                    //Responsivity settings
                        AUTO_SCALE: false,
                        VIEWPORT_WIDTH: 183,
                        VIEWPORT_HEIGHT: 133,
                        
                    //Mouse settings				
                        MOUSE_DISTANCE_MIN: 20,
                        MOUSE_DISTANCE_MAX: 400,
                        MOUSE_SENSITIVITY: 1,
                        INERTIAL_TIME: 2,
                    
                    //Shape settins
                        //Shape main settings
                            INITIAL_SHAPE: {
                                                wave1: {amplitude: 41.758, frequency: 4.78, phase: 3.142},
                                                wave2: {amplitude: 31.868, frequency: 2.692, phase: 1.45},
                                                wave3: {amplitude: 37.363, frequency: 2, phase: 1.036}
                                        },
                            USE_MORPHING: true,
                            USE_WAVE_MOTION: true,
                            USE_WAVE_SWING: true,
                        
                        //Morphing settings
                            MORPHING_AUTOPLAY: true,
                            MORPHING_DURATION: 2,
                            MORPHING_DELAY: 2,
                            MORPHING_TRANSITION_TYPE: "cubic",	
                            MORPHING_SHAPES: [									  	
                                                {
                                                    wave1: {amplitude: 58.242, frequency: 4.231, phase: 4.005},
                                                    wave2: {amplitude: 37.363, frequency: 4.176, phase: 5.006},
                                                    wave3: {amplitude: 41.758, frequency: 3.297, phase: 5.178}
                                                },
                                                {
                                                    wave1: {amplitude: 112.088, frequency: 2.857, phase: 2.969},
                                                    wave2: {amplitude: 40.659, frequency: 3.187, phase: 2.486},
                                                    wave3: {amplitude: 43.956, frequency: 0.604, phase: 0.449}
                                                },
                                                {
                                                    wave1: {amplitude: 127.473, frequency: 2.857, phase: 4.626},
                                                    wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                                    wave3: {amplitude: 31.868, frequency: 0.604, phase: 3.59}
                                                },
                                                {
                                                    wave1: {amplitude: 36.264, frequency: 0, phase: 1.795},
                                                    wave2: {amplitude: 40.659, frequency: 2.033, phase: 1.312},
                                                    wave3: {amplitude: 165.934, frequency: 0, phase: 3.97}
                                                },
                                                {
                                                    wave1: {amplitude: 43.956, frequency: 2.967, phase: 4.315},
                                                    wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                                    wave3: {amplitude: 170.33, frequency: 0, phase: 3.245}
                                                },
                                                {
                                                    wave1: {amplitude: 118.681, frequency: 0, phase: 4.074},
                                                    wave2: {amplitude: 115.385, frequency: 0, phase: 4.039},
                                                    wave3: {amplitude: 141.758, frequency: 0.989, phase: 0}
                                                },
                                                {
                                                    wave1: {amplitude: 36.264, frequency: 6.319, phase: 4.419},
                                                    wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                                    wave3: {amplitude: 2.198, frequency: 7.033, phase: 0.138}
                                                },
                                                {
                                                    wave1: {amplitude: 49.451, frequency: 4.725, phase: 4.592},
                                                    wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                                    wave3: {amplitude: 161.538, frequency: 0.989, phase: 4.661}
                                                }									
                                            ],
                                            
                        //Wave motion settings
                            WAVE_1_MOTION_SPEED: 1.3,
                            WAVE_2_MOTION_SPEED: 0.8,
                            //WAVE_3_MOTION_SPEED: 0.3,
                        
                        //Wave swing settings
                            /*
                            WAVE_1_SWING_SETTINGS: {
                                                        //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "pulse"},
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                                },
                            */
                            WAVE_2_SWING_SETTINGS: {
                                                        amplitude: {amplitude: 20, frequency: 1, phase: 0, type: "sine"}//,
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                                },
                            WAVE_3_SWING_SETTINGS: {
                                                        //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                                        phase: {amplitude: 2, frequency: 0.2, phase: 2.1, type: "sine"}
                                                }
                });
            }

            slickInit();
            
            initFirstSiteTheme(t.next.container)
        },
        after: function(t) {
            gsap.from(t.next.container, {
                alpha: 0,
                duration: .5,
                ease: "power4.in"
            }), DOM.onReady(), windowLoadHandle(), removeCursorClasses(), slickInit();
        }
    }, {
        name: "case-study",
        from: {
            namespace: "single"
        },
        to: {
            namespace: "single"
        },
        beforeLeave: function(t) {
            "back" == t.trigger || "forward" == t.trigger ? (document.body.querySelector("#page-wrapper").classList.remove("dark-mode", "light-mode", "white-mode"), document.body.querySelector("#page-wrapper").classList.add(t.next.namespace), document.querySelector(".page-header").classList.remove("up", "down"), document.querySelector(".hamburger-wrap").classList.remove("up", "down"), "single" == t.next.namespace ? (document.body.querySelector("#page-header").classList.add("case-study-theme"), document.body.querySelector(".hamburger-wrap").classList.add("case-study-theme")) : (document.body.querySelector("#page-header").classList.remove("case-study-theme"), document.body.querySelector(".hamburger-wrap").classList.remove("case-study-theme")), themeSwitchInited = !1, removeCursorClasses(), window.closeMenu()) : (document.body.querySelector("#page-wrapper").classList.remove("dark-mode", "light-mode", "white-mode"), themeSwitchInited = !1, removeCursorClasses())
        },
        leave: function(e) {
            var t, i, o, n;
            return "back" == e.trigger || "forward" == e.trigger ? new Promise(function(t) {
                gsap.to(e.current.container, {
                    alpha: 0,
                    duration: .5,
                    ease: "power4.out",
                    onComplete: function() {
                        t()
                    }
                })
            }) : (t = (o = e.current.container.querySelector(".next-study-link-section")).querySelector(".content"), i = o.querySelector(".media-wrap"), o = o.querySelector(".go-next-circle"), n = 0, currentYScroll !== maxYScroll && (window.locoScroll.scrollTo("bottom", {
                duration: 300
            }), n = .3), (n = gsap.timeline({
                delay: n,
                onStart: function() {
                    window.closeMenu()
                }
            })).add("start"), n.to(i, {
                top: 0,
                ease: "power4.inOut",
                duration: 1.1
            }, "start"), n.to(t, {
                y: "-100%",
                ease: "power4.inOut",
                duration: 1.1
            }, "start+=0.15"), n.to(o, {
                scale: .5,
                alpha: 0,
                ease: "power4.inOut",
                duration: 1.1
            }, "start+=0.15"), n)
        },
        beforeEnter: function(o) {
            if ("back" == o.trigger || "forward" == o.trigger) window.locoScroll && (document.documentElement.classList.add("overflow-hidden-mobile"), window.locoScroll.destroy());
            else {
                var t, n = o.current.container.querySelector(".next-study-link-section").querySelector(".media-wrap");
                if (n.querySelector("video")) return t = {
                    val: 0
                }, new Promise(function(i) {
                    gsap.to(t, {
                        val: 1,
                        duration: 1,
                        onComplete: function() {
                            var t, e;
                            n && (t = n.querySelector("video")) && (t = t.currentTime, (e = o.next.container.querySelector(".case-study-intro-section .media-wrap video")) && (e.currentTime = t)), window.locoScroll && (document.documentElement.classList.add("overflow-hidden-mobile"), window.locoScroll.destroy()), i()
                        }
                    })
                });
                window.locoScroll && (document.documentElement.classList.add("overflow-hidden-mobile"), window.locoScroll.destroy())
            }
        },
        enter: function(t) {
            "back" == t.trigger || "forward" == t.trigger || (document.querySelector(".page-header").classList.remove("up", "down"), document.querySelector(".hamburger-wrap").classList.remove("up", "down")), initFirstSiteTheme(t.next.container)
        },
        after: function(t) {

            ("back" == t.trigger || "forward" == t.trigger) && gsap.from(t.next.container, {
                alpha: 0,
                duration: .5,
                ease: "power4.in"
            }), DOM.onReady(), windowLoadHandle(), removeCursorClasses()
        }
    }]
}), barba.hooks.after(function() {
    gtag("event", "page_view", {
        page_path: window.location.pathname
    })
})), DOM.Methods._9to5Slider = function(t) {
    var t = t[0],
        e = t.querySelectorAll(".media-wrap");
    gsap.to(e, {
        scale: .95,
        duration: 1,
        ease: "power4.out",
        paused: !0
    }), new Swiper(t, {
        speed: 400,
        spaceBetween: 0,
        grabCursor: !0,
        slidesPerView: 1,
        parallax: !0,
        freeMode: {
            enabled: !0,
            sticky: !1
        },
        breakpoints: {
            767: {
                spaceBetween: 0,
                slidesPerView: 2
            }
        }
    })
}, DOM.Methods.aboutListControl = function(t) {
    var e = t[0];
    window.aboutListAnimations = function() {
        Array.from(e.children).forEach(function(t) {
            var e = t.querySelectorAll(".small-text, .text, .line"),
                t = gsap.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: t,
                        scroller: document.body.querySelector("[data-scroll-container]"),
                        start: "top bottom",
                        end: "bottom top",
                        scrub: !0,
                        toggleActions: "play none none none"
                    }
                });
            t.fromTo(e, {
                alpha: 0
            }, {
                alpha: 1,
                ease: "none"
            }), t.to(e, {
                alpha: 0,
                ease: "none"
            })
        })
    }
}, DOM.Methods.accordian = function(t) {
    function e() {
        0 != s.length && (s.forEach(function(t) {
            t.invalidate().kill()
        }), s = []), n.forEach(function(e) {
            var i, t = e.querySelector(".item-wrap"),
                o = e.querySelector(".answer");
            e.opened = !1, o.removeAttribute("style"), i = gsap.from(o, {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                duration: .75,
                ease: "power4.inOut",
                paused: !0,
                onComplete: function() {
                    ScrollTrigger.refresh()
                },
                onReverseComplete: function() {
                    ScrollTrigger.refresh()
                }
            });
            t.onclick = function(t) {
                t.preventDefault(), s.forEach(function(t) {
                    t.reverse()
                }), n.forEach(function(t) {
                    t != e && t.opened && (t.classList.remove("active"), t.opened = !1)
                }), e.opened ? (e.classList.remove("active"), e.opened = !1, i.reverse()) : (e.classList.add("active"), e.opened = !0, i.play())
            }, s.push(i)
        })
    }
    var t = t[0],
        n = Array.from(t.children),
        s = [],
        t = debounce(function() {
            1390 < window.innerWidth && e()
        }, 200);
    window.addEventListener("resize", t), e()
}, DOM.Methods.autoPlayVideo = function(t) {
    var i, t = t[0];
    "IntersectionObserver" in window && (i = new IntersectionObserver(function(t, e) {
        t.forEach(function(t) {
            if (t.isIntersecting) {
                for (var e in t.target.children) {
                    e = t.target.children[e];
                    "string" == typeof e.tagName && "SOURCE" === e.tagName && (e.src = e.dataset.src)
                }
                t.target.load(), t.target.classList.remove("lazy"), i.unobserve(t.target)
            }
        })
    })).observe(t)
}, DOM.Methods.cardControll = function(t) {
    var e = t[0].querySelectorAll(".card-1");
    window.initCardGridAnim = function() {
        Array.from(e).forEach(function(t, e) {
            var i = gsap.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: t,
                        scroller: document.body.querySelector("[data-scroll-container]"),
                        start: "top bottom",
                        end: "bottom top",
                        scrub: !0,
                        toggleActions: "play none none none"
                    }
                }),
                i = (i.add("start"), i.fromTo(t.querySelector(".media"), {
                    y: "-10%"
                }, {
                    y: "10%",
                    duration: 1,
                    ease: "none"
                }, "start"), gsap.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: t.querySelector(".media"),
                        scroller: document.body.querySelector("[data-scroll-container]"),
                        start: "50% top",
                        end: "bottom top",
                        scrub: !0,
                        toggleActions: "play none none none"
                    }
                }));
            i.add("start"), i.fromTo(t.querySelector(".media"), {
                alpha: 1
            }, {
                alpha: .25,
                duration: 1,
                ease: "none"
            }, "start")
        })
    }
}, DOM.Methods.cardControll2 = function(t) {
    var e = t[0].querySelectorAll(".card-2");
    window.initCardGridAnim2 = function() {
        Array.from(e).forEach(function(t, e) {
            var i = gsap.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: t,
                        scroller: document.body.querySelector("[data-scroll-container]"),
                        start: "top bottom",
                        end: "bottom top",
                        scrub: !0,
                        toggleActions: "play none none none"
                    }
                }),
                i = (i.add("start"), i.fromTo(t.querySelector(".media"), {
                    y: "-10%"
                }, {
                    y: "10%",
                    duration: 1,
                    ease: "none"
                }, "start"), gsap.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: t.querySelector(".media"),
                        scroller: document.body.querySelector("[data-scroll-container]"),
                        start: "50% top",
                        end: "bottom top",
                        scrub: !0,
                        toggleActions: "play none none none"
                    }
                }));
            i.add("start"), i.fromTo(t.querySelector(".media"), {
                alpha: 1
            }, {
                alpha: .25,
                duration: 1,
                ease: "none"
            }, "start")
        })
    }
}, DOM.Methods.claimReveal = function(t) {
    var e = t[0].querySelector(".title"),
        e = new SplitText(e, {
            type: "lines, words",
            linesClass: "lines"
        }),
        i = gsap.timeline({
            paused: !0
        }),
        e = (i.add("start"), e.lines.forEach(function(t, e) {
            i.from(t.children, {
                y: "110%",
                duration: 1.2,
                ease: "power4.inOut"
            }, "start+=" + (.1 * e).toString())
        }), {
            name: t[0].dataset.animName,
            animation: i,
            delay: t[0].dataset.delay
        });
    window.animations.push(e)
}, DOM.Methods.fadeReveal = function(t) {
    var e = t[0],
        i = gsap.timeline({
            paused: !0
        }),
        e = (i.add("start"), i.from(e, {
            alpha: 0,
            duration: 1.6,
            ease: "power4.out"
        }), {
            name: t[0].dataset.animName,
            animation: i,
            delay: t[0].dataset.delay
        });
    window.animations.push(e)
}, DOM.Methods.fadeRevealBottom = function(t) {
    var e = t[0],
        i = gsap.timeline({
            paused: !0
        }),
        e = (i.add("start"), i.from(e, {
            y: "25%",
            alpha: 0,
            duration: 1.6,
            ease: "power4.out"
        }), {
            name: t[0].dataset.animName,
            animation: i,
            delay: t[0].dataset.delay
        });
    window.animations.push(e)
}, DOM.Methods.homeIntroAnimation = function(t) {
    var e, o = t[0],
        t = o.querySelector(".title-2xl-home"),
        n = o.querySelector(".media-wrap"),
        s = o.querySelector(".media-wrap-outer"),
        r = o.querySelector(".sound-control-icon"),
        a = new SplitText(t, {
            type: "words, lines",
            linesClass: "lines"
        });
    window.innerWidth > window.mobileBreakpoint ? (window.introAnimation = gsap.timeline({
        paused: !0,
        onStart: function() {},
        onComplete: function() {
            window.introAnimation.invalidate(), window.introAnimation.kill(), e(), window.locoScroll.start()
        }
    }), window.introAnimation.add("start"), a.lines.forEach(function(t, e) {
        window.introAnimation.from(t.children, {
            y: "110%",
            rotation: 5,
            duration: 1.4,
            ease: "power4.inOut"
        }, "start+=" + (.01 * e).toString())
    }), window.introAnimation.fromTo(n, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
    }, {
        clipPath: "polygon(85% 0, 100% 0, 100% 100%, 85% 100%)",
        duration: 1.4,
        ease: "power4.inOut"
    }, "start+=0.5"), e = function() {
        var i = gsap.timeline({
                paused: !0,
                onStart: function() {
                    0
                },
                onUpdate: function() {
                    n.children[0].volume = i.progress()
                },
                onComplete: function() {},
                onReverseComplete: function() {
                    n.children[0].classList.add("muted"), r.classList.add("no-sound"), n.children[0].muted = !0, 0
                }
            }),
            t = (i.add("start"), a.lines.forEach(function(t, e) {
                i.to(t.children, {
                    y: "-110%",
                    duration: 1,
                    ease: "power4.inOut"
                }, "start+=" + (.3 + .1 * e).toString())
            }), i.fromTo(n, {
                clipPath: "polygon(85% 0, 100% 0, 100% 100%, 85% 100%)"
            }, {
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                duration: 1.5,
                ease: "power4.inOut"
            }, "start"), i.fromTo(n.children[0], {
                x: "42.5%"
            }, {
                x: "0%",
                duration: 1.5,
                ease: "power4.inOut"
            }, "start"), i.fromTo(r, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: .8,
                ease: "power4.inOut"
            }, "start+=1"), !1);
        n.addEventListener("click", function() {
            t ? (t = !1, s.classList.remove("active"), document.body.classList.remove("video-active"), i.reverse(), 0) : (t = !0, s.classList.add("active"), document.body.classList.add("video-active"), i.play(), n.children[0].muted && (n.children[0].classList.remove("muted"), r.classList.remove("no-sound"), n.children[0].muted = !1, 0))
        }), r.addEventListener("click", function() {
            n.children[0].muted ? (n.children[0].classList.remove("muted"), r.classList.remove("no-sound"), !(n.children[0].muted = !1)) : (n.children[0].classList.add("muted"), r.classList.add("no-sound"), !(n.children[0].muted = !0))
        }), n.addEventListener("mouseenter", function() {
            0 != t || i.isActive() || i.tweenTo("start+=0.45", {
                ease: "power3.out"
            })
        }), n.addEventListener("mouseleave", function() {
            0 != t || i.isActive() || i.tweenTo("start", {
                ease: "power3.in"
            })
        }), gsap.to({
            val: 0
        }, {
            paused: !0,
            scrollTrigger: {
                trigger: o,
                scroller: document.body.querySelector("[data-scroll-container]"),
                start: "top top",
                end: "bottom top",
                toggleActions: "play none none none",
                onLeave: function() {
                    t = !1, s.classList.remove("active"), document.body.classList.remove("video-active"), n.children[0].classList.remove("muted"), r.classList.remove("no-sound"), n.children[0].muted = !0, i.reverse()
                }
            }
        });
        window.homeIntroAnim = i
    }) : (window.introAnimation = gsap.timeline({
        paused: !0,
        onStart: function() {},
        onComplete: function() {
            window.locoScroll.start()
        }
    }), window.introAnimation.add("start"), window.introAnimation.from(s, {
        y: "25%",
        alpha: 0,
        duration: 1.6,
        ease: "power4.out"
    }), a.lines.forEach(function(t, e) {
        window.introAnimation.from(t.children, {
            y: "110%",
            rotation: 5,
            duration: 1.4,
            ease: "power4.inOut"
        }, "start+=" + (.01 * e).toString())
    }), r.addEventListener("click", function() {
        n.children[0].muted ? (n.children[0].classList.add("muted"), r.classList.add("no-sound"), n.children[0].muted = !1) : (n.children[0].classList.remove("muted"), r.classList.remove("no-sound"), n.children[0].muted = !0)
    }))
}, DOM.Methods.homeIntroAnimationBackup = function(t) {
    var t = t[0],
        e = t.querySelector(".home-intro-track"),
        i = (t.querySelector(".track-inner"), t.querySelector(".title-2xl-home")),
        o = t.querySelector(".media-wrap"),
        i = new SplitText(i, {
            type: "words, lines",
            linesClass: "lines"
        }),
        n = gsap.timeline({
            paused: !0,
            scrollTrigger: {
                trigger: e,
                start: "5% top",
                end: "bottom bottom",
                scrub: !0,
                markers: !0,
                toggleActions: "play none none none"
            }
        });
    n.add("start"), i.lines.forEach(function(t, e) {
        n.from(t.children, {
            y: "110%",
            rotation: 5,
            duration: 1,
            ease: "none"
        }, "start+=" + (.075 * e).toString())
    }), n.from(o, {
        width: 0,
        duration: 1,
        ease: "none"
    }, "start"), console.log(t, ScrollTrigger)
}, DOM.Methods.infiniteLoopContact = function(t) {}, DOM.Methods.initLootie = function(t) {
    var e, i = t[0],
        t = i.dataset.json.toString(),
        t = {
            container: i,
            renderer: "svg",
            loop: !0,
            autoplay: !0,
            name: i.dataset.lottieNameFirst,
            path: t,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid meet",
                className: "dark-pattern"
            }
        };
    lottie.loadAnimation(t).addEventListener("DOMLoaded", function() {
        e = i.dataset.json2.toString(), e = {
            container: i,
            renderer: "svg",
            loop: !0,
            autoplay: !0,
            path: e,
            name: i.dataset.lottieNameSecond,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid meet",
                className: "light-pattern"
            }
        }, lottie.loadAnimation(e)
    })
}, DOM.Methods.initLootieLoopable = function(i) {
    function o(t) {
        t.currentTime >= s - 5 && d.goToAndPlay(e, !0)
    }
    function n(t) {
        t.currentTime >= l - 5 && a.goToAndPlay(e, !0)
    }
    var s, r, a, l, c = i[0],
        e = parseInt(c.dataset.frame),
        t = c.dataset.json.toString(),
        d = lottie.loadAnimation({
            container: c,
            renderer: "svg",
            loop: !0,
            autoplay: !1,
            path: t,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid meet",
                className: "dark-pattern"
            }
        });
    d.addEventListener("DOMLoaded", function() {
        s = d.getDuration(!0), d.removeEventListener("enterFrame", o), d.addEventListener("enterFrame", o), r = c.dataset.json2.toString(), r = {
            container: c,
            renderer: "svg",
            loop: !0,
            autoplay: !1,
            path: r,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid meet",
                className: "light-pattern"
            }
        }, (a = lottie.loadAnimation(r)).addEventListener("DOMLoaded", function() {
            l = a.getDuration(!0), a.removeEventListener("enterFrame", n), a.addEventListener("enterFrame", n)
        });
        var t = !1,
            e = {
                name: i[0].dataset.animName,
                animation: {
                    play: function() {
                        t || (t = !0, d.goToAndPlay(0, !0), a.goToAndPlay(0, !0))
                    }
                },
                delay: i[0].dataset.delay
            };
        window.animations.push(e)
    })
}, DOM.Methods.lineControl = function(t) {}, DOM.Methods.lineText = function(t) {
    var e, i, o, n;
    window.innerWidth > window.mobileBreakpoint && (e = (n = t[0]).querySelector("span"), n = n.querySelector("i"), e.clientWidth, i = n.clientWidth, new SplitText(e, {
        type: "words",
        wordClass: "words"
    }), (o = gsap.timeline({
        paused: !0
    })).add("start"), o.from(n, {
        x: "-100%",
        duration: 1.6,
        ease: "power4.out"
    }), o.from(e, {
        width: 0,
        x: -i,
        transformOrigin: "0 50%",
        duration: 1.6,
        ease: "power4.out"
    }, "start"), n = {
        name: t[0].dataset.animName,
        animation: o,
        delay: t[0].dataset.delay
    }, window.animations.push(n))
}, DOM.Methods.loadTestimonial = function(t) {
    var e = t[0],
        i = gsap.timeline({
            paused: !0
        }),
        t = ($.ajax({
            type: "POST",
            url: admin_url,
            dataType: "html",
            data: {
                action: "load_testimonial"
            },
            success: function(t) {
                setTimeout(function() {
                    e.innerHTML = t, i.add("start"), i.from(e, {
                        y: "25%",
                        alpha: 0,
                        duration: 1.6,
                        ease: "power4.out"
                    })
                }, 200), setTimeout(function() {
                    ScrollTrigger.refresh()
                }, 250)
            }
        }), {
            name: t[0].dataset.animName,
            animation: i,
            delay: t[0].dataset.delay
        });
    window.animations.push(t)
}, DOM.Methods.mobileMenu = function(t) {}, DOM.Methods.rowLineTextFade = function(t) {
    var e = t[0],
        e = new SplitText(e, {
            type: "lines, words",
            linesClass: "lines"
        }),
        i = gsap.timeline({
            paused: !0
        }),
        e = (i.add("start"), e.lines.forEach(function(t, e) {
            i.from(t.children, {
                y: "40%",
                alpha: 0,
                duration: 1.6,
                ease: "power4.out"
            }, "start+=" + (.1 * e).toString())
        }), {
            name: t[0].dataset.animName,
            animation: i,
            delay: t[0].dataset.delay
        });
    window.animations.push(e)
}, DOM.Methods.rowLineTextReveal = function(t) {
    var e = t[0],
        e = new SplitText(e, {
            type: "lines, words",
            linesClass: "lines overflow-hidden"
        }),
        i = gsap.timeline({
            paused: !0
        }),
        e = (i.add("start"), e.lines.forEach(function(t, e) {
            0 != t.children.length && i.from(t.children, {
                y: "110%",
                duration: 1.6,
                ease: "power4.out"
            }, "start+=" + (.1 * e).toString())
        }), {
            name: t[0].dataset.animName,
            animation: i,
            delay: t[0].dataset.delay
        });
    window.animations.push(e)
}, DOM.Methods.serviceCardControl = function(t) {
    var e = t[0].querySelectorAll(".service-card");
    window.serviceInitCardGridAnim = function() {
        Array.from(e).forEach(function(t, e) {
            var i = gsap.timeline({
                // paused: !0,
                scrollTrigger: {
                    trigger: t.querySelector(".image-wrap"),
                    scroller: document.body.querySelector("[data-scroll-container]"),
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0,
                    toggleActions: "play none none none"
                }
            });
            i.add("start"), i.fromTo(t.querySelector(".image-media"), {
                y: "-10%"
            }, {
                y: "10%",
                duration: 2.5,
                ease: "none"
            }, "start"), i.from(t.querySelector(".image-media"), {
                alpha: .2,
                duration: 1,
                ease: "none"
            }, "start"), i.to(t.querySelector(".image-media"), {
                alpha: .2,
                duration: 1,
                ease: "none"
            })
        })
    }
}, DOM.Methods.subpageIntroTitleAnimation = function(t) {
    var e = t[0],
        e = new SplitText(e, {
            type: "words, lines",
            linesClass: "lines"
        }),
        i = gsap.timeline({
            paused: !0
        }),
        e = (i.add("start"), e.lines.forEach(function(t, e) {
            i.from(t.children, {
                y: "110%",
                rotation: 5,
                duration: 1.4,
                ease: "power4.out"
            }, "start+=" + (.1 * e).toString())
        }), {
            name: t[0].dataset.animName,
            animation: i,
            delay: t[0].dataset.delay
        });
    window.animations.push(e)
}, DOM.Methods.test = function(t) {
    var e = t[0],
        i = {
            x: 0,
            y: 0
        };
    document.addEventListener("keydown", function(t) {
        console.log(t), 39 == t.which && (i.x = i.x + 10), 37 == t.which && (i.x = i.x - 10), gsap.set(e, {
            x: i.x
        })
    }), console.log(e)
}, DOM.Methods.videoSliderControl = function(t) {
    var e, t = t[0],
        i = t.querySelectorAll("video");
    Array.from(i).forEach(function(t) {
        var e = !1;
        t.addEventListener("mouseenter", function() {
            window.innerWidth > window.mobileBreakpoint && (t.parentElement.classList.remove("blurred"), t.play())
        }), t.addEventListener("mouseleave", function() {
            window.innerWidth > window.mobileBreakpoint && (t.parentElement.classList.add("blurred"), t.pause()), e = !1, t.parentElement.parentElement.classList.remove("active")
        }), t.addEventListener("click", function() {
            tablet ? e ? (e = !1, t.parentElement.parentElement.classList.remove("active"), t.parentElement.classList.add("blurred")) : (e = !0, t.parentElement.parentElement.classList.add("active"), t.parentElement.classList.remove("blurred")) : e ? (e = !1, t.parentElement.parentElement.classList.remove("active")) : (e = !0, t.parentElement.parentElement.classList.add("active"))
        }), window.innerWidth <= window.mobileBreakpoint && (t.parentElement.classList.remove("blurred"), t.play())
    }), window.innerWidth > window.mobileBreakpoint && (e = new Swiper(t, {
        speed: 300,
        spaceBetween: 2,
        grabCursor: !0,
        slidesPerView: 1,
        breakpoints: {
            767: {
                slidesPerView: 2
            },
            1380: {
                slidesPerView: 2,
                freeMode: {
                    enabled: !0,
                    sticky: !0
                }
            }
        },
        on: {
            slideChange: function() {
                var t;
                window.innerWidth > window.mobileBreakpoint && window.innerWidth < window.tabletBreakpoint && tablet && (t = e.realIndex, t = e.slides[t].querySelector("video"), Array.from(i).forEach(function(t) {
                    t.pause()
                }), t.play())
            }
        }
    }), window.innerWidth > window.mobileBreakpoint && window.innerWidth < window.tabletBreakpoint && tablet && (t = e.realIndex, e.slides[t].querySelector("video").play()))
}, DOM.Methods.videoSoundControl = function(t) {
    var e = t[0],
        i = document.body.querySelector(".cursor-follower");
    e.muted ? (e.classList.add("muted"), i.classList.add("no-sound")) : (e.classList.remove("muted"), i.classList.remove("no-sound")), e.addEventListener("click", function() {
        e.muted ? (e.classList.remove("muted"), i.classList.remove("no-sound"), e.muted = !1) : (e.classList.add("muted"), i.classList.add("no-sound"), e.muted = !0)
    })
}, DOM.Methods.parallaxSlideEffect = function(t) {
    var e = t[0].querySelectorAll(".reveal");
    window.initParallaxEffect = function() {
        Array.from(e).forEach(function(t) {
            var i = gsap.timeline({
                    scrollTrigger: {
                        trigger: t,
                        scroller: document.body.querySelector("[data-scroll-container]"),
                        toggleActions: "restart none none reset",
                    }
                });
                i.set(t, {
                    autoAlpha: 1
                });
                i.from(t, 1.5, {
                    xPercent: -100,
                    ease: Power2.out
                });
                i.from(t.querySelector('img'), 1.5, {
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.out
                });
        })
    }
}, DOM.Methods.parallaxSlideEffect2 = function(t) {
    var e = t[0].querySelectorAll(".reveal-img");
    window.initParallaxEffect2 = function() {
        Array.from(e).forEach(function(t) {
            var i = gsap.timeline({
                    scrollTrigger: {
                        trigger: t,
                        scroller: document.body.querySelector("[data-scroll-container]"),
                        toggleActions: "restart none none reset",
                    }
                });
                i.set(t, {
                    autoAlpha: 1
                });
                i.from(t, 1.5, {
                    xPercent: -100,
                    ease: Power2.out
                });
                i.from(t.querySelector('img'), 1.5, {
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.out
                });
        })
    }
}

window.addEventListener("load", function () {  
    setTimeout(() => {
        $('body').removeClass('overflow-hidden');
    }, 200);
});

$('.faq-row .faq-item').on('click', function() {
    let _ = $(this);
    if (!_.hasClass('active')) {
        $('.faq-item.active .answer').slideToggle();
        $('.faq-item').removeClass('active');
        _.toggleClass('active');
        _.find('.answer').slideToggle();
    }
});

if ($('#home_blob_container').length > 0) {
    new BlobAnimation("home_blob_container", {
        //Blob main settings
				BLOB_SIZE: 90,
				BLOB_DISTANCE: 1000,
				DETALIZATION: 60,
				PERSPECTIVE_DISTORTION: 1,
				ROTATION_SPEED: 5,
				OFFSET_X: 0, //offset in pixels
				OFFSET_Y: 0, //offset in pixels
				PERCENTAGE_OFFSET_X: 0, //offset in percentages
				PERCENTAGE_OFFSET_Y: 0, //offset in percentages
			
			//Dot settins
				DOT_SIZE: 1,
				DOT_COLOR: "#494351",

			//Responsivity settings
				AUTO_SCALE: false,
				VIEWPORT_WIDTH: 1000,
				VIEWPORT_HEIGHT: 1000,
				
			//Mouse settings				
				MOUSE_DISTANCE_MIN: 20,
				MOUSE_DISTANCE_MAX: 400,
				MOUSE_SENSITIVITY: 1,
				INERTIAL_TIME: 2,
			
			//Shape settins
				//Shape main settings
					INITIAL_SHAPE: {
										wave1: {amplitude: 0, frequency: 0, phase: 0},
										wave2: {amplitude: 0, frequency: 0, phase: 0},
										wave3: {amplitude: 0, frequency: 0, phase: 0}
								   },
					USE_MORPHING: true,
					USE_WAVE_MOTION: false,
					USE_WAVE_SWING: false,
				
				//Morphing settings
					MORPHING_AUTOPLAY: true,
					MORPHING_DURATION: 2,
					MORPHING_DELAY: 1,
					MORPHING_TRANSITION_TYPE: "cubic",
					MORPHING_SHAPES: [										
										{
											wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
											wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
											wave3: {amplitude: 0, frequency: 0, phase: 2.209}
										},
										{
											wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
											wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
											wave3: {amplitude: 26.374, frequency: 0, phase: 0}
										},
										{
											wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
											wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
											wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
										},
										{
											wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
											wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
											wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
									   	},
									   	{
											wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
											wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
											wave3: {amplitude: 50, frequency: 2, phase: 5.42}
									  	},
									  	{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
											wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
										},
										{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 0, frequency: 0, phase: 0},
											wave3: {amplitude: 0, frequency: 0, phase: 0}
									    }
									 ]
    });
}

if ($('#work_blob_container').length > 0) {
    new BlobAnimation("work_blob_container", {
        //Blob main settings
				BLOB_SIZE: 90,
				BLOB_DISTANCE: 1000,
				DETALIZATION: 60,
				PERSPECTIVE_DISTORTION: 1,
				ROTATION_SPEED: 5,
				OFFSET_X: 0, //offset in pixels
				OFFSET_Y: 0, //offset in pixels
				PERCENTAGE_OFFSET_X: 0, //offset in percentages
				PERCENTAGE_OFFSET_Y: 0, //offset in percentages
			
			//Dot settins
				DOT_SIZE: 1,
				DOT_COLOR: "#494351",

			//Responsivity settings
				AUTO_SCALE: false,
				VIEWPORT_WIDTH: 1000,
				VIEWPORT_HEIGHT: 1000,
				
			//Mouse settings				
				MOUSE_DISTANCE_MIN: 20,
				MOUSE_DISTANCE_MAX: 400,
				MOUSE_SENSITIVITY: 1,
				INERTIAL_TIME: 2,
			
			//Shape settins
				//Shape main settings
					INITIAL_SHAPE: {
										wave1: {amplitude: 0, frequency: 0, phase: 0},
										wave2: {amplitude: 0, frequency: 0, phase: 0},
										wave3: {amplitude: 0, frequency: 0, phase: 0}
								   },
					USE_MORPHING: true,
					USE_WAVE_MOTION: false,
					USE_WAVE_SWING: false,
				
				//Morphing settings
					MORPHING_AUTOPLAY: true,
					MORPHING_DURATION: 2,
					MORPHING_DELAY: 1,
					MORPHING_TRANSITION_TYPE: "cubic",
					MORPHING_SHAPES: [										
										{
											wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
											wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
											wave3: {amplitude: 0, frequency: 0, phase: 2.209}
										},
										{
											wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
											wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
											wave3: {amplitude: 26.374, frequency: 0, phase: 0}
										},
										{
											wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
											wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
											wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
										},
										{
											wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
											wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
											wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
									   	},
									   	{
											wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
											wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
											wave3: {amplitude: 50, frequency: 2, phase: 5.42}
									  	},
									  	{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
											wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
										},
										{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 0, frequency: 0, phase: 0},
											wave3: {amplitude: 0, frequency: 0, phase: 0}
									    }
									 ]
    });
}

if ($('#service_blob_container').length > 0) {
    new BlobAnimation("service_blob_container", {
        //Blob main settings
				BLOB_SIZE: 90,
				BLOB_DISTANCE: 1000,
				DETALIZATION: 60,
				PERSPECTIVE_DISTORTION: 1,
				ROTATION_SPEED: 5,
				OFFSET_X: 0, //offset in pixels
				OFFSET_Y: 0, //offset in pixels
				PERCENTAGE_OFFSET_X: 0, //offset in percentages
				PERCENTAGE_OFFSET_Y: 0, //offset in percentages
			
			//Dot settins
				DOT_SIZE: 1,
				DOT_COLOR: "#494351",

			//Responsivity settings
				AUTO_SCALE: false,
				VIEWPORT_WIDTH: 1000,
				VIEWPORT_HEIGHT: 1000,
				
			//Mouse settings				
				MOUSE_DISTANCE_MIN: 20,
				MOUSE_DISTANCE_MAX: 400,
				MOUSE_SENSITIVITY: 1,
				INERTIAL_TIME: 2,
			
			//Shape settins
				//Shape main settings
					INITIAL_SHAPE: {
										wave1: {amplitude: 0, frequency: 0, phase: 0},
										wave2: {amplitude: 0, frequency: 0, phase: 0},
										wave3: {amplitude: 0, frequency: 0, phase: 0}
								   },
					USE_MORPHING: true,
					USE_WAVE_MOTION: false,
					USE_WAVE_SWING: false,
				
				//Morphing settings
					MORPHING_AUTOPLAY: true,
					MORPHING_DURATION: 2,
					MORPHING_DELAY: 1,
					MORPHING_TRANSITION_TYPE: "cubic",
					MORPHING_SHAPES: [										
										{
											wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
											wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
											wave3: {amplitude: 0, frequency: 0, phase: 2.209}
										},
										{
											wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
											wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
											wave3: {amplitude: 26.374, frequency: 0, phase: 0}
										},
										{
											wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
											wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
											wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
										},
										{
											wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
											wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
											wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
									   	},
									   	{
											wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
											wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
											wave3: {amplitude: 50, frequency: 2, phase: 5.42}
									  	},
									  	{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
											wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
										},
										{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 0, frequency: 0, phase: 0},
											wave3: {amplitude: 0, frequency: 0, phase: 0}
									    }
									 ]
    });
}

if ($('#about_blob_container').length > 0) {
    new BlobAnimation("about_blob_container", {
        //Blob main settings
				BLOB_SIZE: 90,
				BLOB_DISTANCE: 1000,
				DETALIZATION: 60,
				PERSPECTIVE_DISTORTION: 1,
				ROTATION_SPEED: 5,
				OFFSET_X: 0, //offset in pixels
				OFFSET_Y: 0, //offset in pixels
				PERCENTAGE_OFFSET_X: 0, //offset in percentages
				PERCENTAGE_OFFSET_Y: 0, //offset in percentages
			
			//Dot settins
				DOT_SIZE: 1,
				DOT_COLOR: "#494351",

			//Responsivity settings
				AUTO_SCALE: false,
				VIEWPORT_WIDTH: 1000,
				VIEWPORT_HEIGHT: 1000,
				
			//Mouse settings				
				MOUSE_DISTANCE_MIN: 20,
				MOUSE_DISTANCE_MAX: 400,
				MOUSE_SENSITIVITY: 1,
				INERTIAL_TIME: 2,
			
			//Shape settins
				//Shape main settings
					INITIAL_SHAPE: {
										wave1: {amplitude: 0, frequency: 0, phase: 0},
										wave2: {amplitude: 0, frequency: 0, phase: 0},
										wave3: {amplitude: 0, frequency: 0, phase: 0}
								   },
					USE_MORPHING: true,
					USE_WAVE_MOTION: false,
					USE_WAVE_SWING: false,
				
				//Morphing settings
					MORPHING_AUTOPLAY: true,
					MORPHING_DURATION: 2,
					MORPHING_DELAY: 1,
					MORPHING_TRANSITION_TYPE: "cubic",
					MORPHING_SHAPES: [										
										{
											wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
											wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
											wave3: {amplitude: 0, frequency: 0, phase: 2.209}
										},
										{
											wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
											wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
											wave3: {amplitude: 26.374, frequency: 0, phase: 0}
										},
										{
											wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
											wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
											wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
										},
										{
											wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
											wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
											wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
									   	},
									   	{
											wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
											wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
											wave3: {amplitude: 50, frequency: 2, phase: 5.42}
									  	},
									  	{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
											wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
										},
										{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 0, frequency: 0, phase: 0},
											wave3: {amplitude: 0, frequency: 0, phase: 0}
									    }
									 ]
    });
}

if ($('#contact_blob_container').length > 0) {
    new BlobAnimation("contact_blob_container", {
        //Blob main settings
				BLOB_SIZE: 90,
				BLOB_DISTANCE: 1000,
				DETALIZATION: 60,
				PERSPECTIVE_DISTORTION: 1,
				ROTATION_SPEED: 5,
				OFFSET_X: 0, //offset in pixels
				OFFSET_Y: 0, //offset in pixels
				PERCENTAGE_OFFSET_X: 0, //offset in percentages
				PERCENTAGE_OFFSET_Y: 0, //offset in percentages
			
			//Dot settins
				DOT_SIZE: 1,
				DOT_COLOR: "#494351",

			//Responsivity settings
				AUTO_SCALE: false,
				VIEWPORT_WIDTH: 1000,
				VIEWPORT_HEIGHT: 1000,
				
			//Mouse settings				
				MOUSE_DISTANCE_MIN: 20,
				MOUSE_DISTANCE_MAX: 400,
				MOUSE_SENSITIVITY: 1,
				INERTIAL_TIME: 2,
			
			//Shape settins
				//Shape main settings
					INITIAL_SHAPE: {
										wave1: {amplitude: 0, frequency: 0, phase: 0},
										wave2: {amplitude: 0, frequency: 0, phase: 0},
										wave3: {amplitude: 0, frequency: 0, phase: 0}
								   },
					USE_MORPHING: true,
					USE_WAVE_MOTION: false,
					USE_WAVE_SWING: false,
				
				//Morphing settings
					MORPHING_AUTOPLAY: true,
					MORPHING_DURATION: 2,
					MORPHING_DELAY: 1,
					MORPHING_TRANSITION_TYPE: "cubic",
					MORPHING_SHAPES: [										
										{
											wave1: {amplitude: 10.989, frequency: 10, phase: 3.487},
											wave2: {amplitude: 8.791, frequency: 10, phase: 1.277},
											wave3: {amplitude: 0, frequency: 0, phase: 2.209}
										},
										{
											wave1: {amplitude: 26.374, frequency: 3.791, phase: 0},
											wave2: {amplitude: 26.374, frequency: 3.352, phase: 0},
											wave3: {amplitude: 26.374, frequency: 0, phase: 0}
										},
										{
											wave1: {amplitude: 83.516, frequency: 3.132, phase: 3.694},
											wave2: {amplitude: 72.527, frequency: 0.769, phase: 3.245},
											wave3: {amplitude: 34.066, frequency: 2.857, phase: 0}
										},
										{
											wave1: {amplitude: 31.868, frequency: 2.692, phase: 4.074},
											wave2: {amplitude: 97.802, frequency: 0, phase: 4.937},
											wave3: {amplitude: 94.505, frequency: 1.044, phase: 2.693}
									   	},
									   	{
											wave1: {amplitude: 62.637, frequency: 3, phase: 4.315},
											wave2: {amplitude: 105.495, frequency: 2.198, phase: 2.279},
											wave3: {amplitude: 50, frequency: 2, phase: 5.42}
									  	},
									  	{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 116.484, frequency: 1.044, phase: 0},
											wave3: {amplitude: 164.835, frequency: 0, phase: 4.695}
										},
										{
											wave1: {amplitude: 0, frequency: 0, phase: 0},
											wave2: {amplitude: 0, frequency: 0, phase: 0},
											wave3: {amplitude: 0, frequency: 0, phase: 0}
									    }
									 ]
    });
}

if ($('#price_blob_container').length > 0) {
    new BlobAnimation("price_blob_container", {
                
        //Blob main settings
            BLOB_SIZE: 100,
            BLOB_DISTANCE: 1000,
            DETALIZATION: 60,
            PERSPECTIVE_DISTORTION: 1,
            ROTATION_SPEED: 5,
            OFFSET_X: 0, //offset in pixels
            OFFSET_Y: 0, //offset in pixels
            PERCENTAGE_OFFSET_X: 0, //offset in percentages
            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
        
        //Dot settins
            DOT_SIZE: 2,
            DOT_COLOR: "gray",
    
        //Responsivity settings
            AUTO_SCALE: false,
            VIEWPORT_WIDTH: 183,
            VIEWPORT_HEIGHT: 133,
            
        //Mouse settings				
            MOUSE_DISTANCE_MIN: 20,
            MOUSE_DISTANCE_MAX: 400,
            MOUSE_SENSITIVITY: 1,
            INERTIAL_TIME: 2,
        
        //Shape settins
            //Shape main settings
                INITIAL_SHAPE: {
                                    wave1: {amplitude: 41.758, frequency: 4.78, phase: 3.142},
                                    wave2: {amplitude: 31.868, frequency: 2.692, phase: 1.45},
                                    wave3: {amplitude: 37.363, frequency: 2, phase: 1.036}
                            },
                USE_MORPHING: true,
                USE_WAVE_MOTION: true,
                USE_WAVE_SWING: true,
            
            //Morphing settings
                MORPHING_AUTOPLAY: true,
                MORPHING_DURATION: 2,
                MORPHING_DELAY: 2,
                MORPHING_TRANSITION_TYPE: "cubic",	
                MORPHING_SHAPES: [									  	
                                    {
                                        wave1: {amplitude: 58.242, frequency: 4.231, phase: 4.005},
                                        wave2: {amplitude: 37.363, frequency: 4.176, phase: 5.006},
                                        wave3: {amplitude: 41.758, frequency: 3.297, phase: 5.178}
                                    },
                                    {
                                        wave1: {amplitude: 112.088, frequency: 2.857, phase: 2.969},
                                        wave2: {amplitude: 40.659, frequency: 3.187, phase: 2.486},
                                        wave3: {amplitude: 43.956, frequency: 0.604, phase: 0.449}
                                    },
                                    {
                                        wave1: {amplitude: 127.473, frequency: 2.857, phase: 4.626},
                                        wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                        wave3: {amplitude: 31.868, frequency: 0.604, phase: 3.59}
                                    },
                                    {
                                        wave1: {amplitude: 36.264, frequency: 0, phase: 1.795},
                                        wave2: {amplitude: 40.659, frequency: 2.033, phase: 1.312},
                                        wave3: {amplitude: 165.934, frequency: 0, phase: 3.97}
                                    },
                                    {
                                        wave1: {amplitude: 43.956, frequency: 2.967, phase: 4.315},
                                        wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                        wave3: {amplitude: 170.33, frequency: 0, phase: 3.245}
                                    },
                                    {
                                        wave1: {amplitude: 118.681, frequency: 0, phase: 4.074},
                                        wave2: {amplitude: 115.385, frequency: 0, phase: 4.039},
                                        wave3: {amplitude: 141.758, frequency: 0.989, phase: 0}
                                    },
                                    {
                                        wave1: {amplitude: 36.264, frequency: 6.319, phase: 4.419},
                                        wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                        wave3: {amplitude: 2.198, frequency: 7.033, phase: 0.138}
                                    },
                                    {
                                        wave1: {amplitude: 49.451, frequency: 4.725, phase: 4.592},
                                        wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                        wave3: {amplitude: 161.538, frequency: 0.989, phase: 4.661}
                                    }									
                                ],
                                
            //Wave motion settings
                WAVE_1_MOTION_SPEED: 1.3,
                WAVE_2_MOTION_SPEED: 0.8,
                //WAVE_3_MOTION_SPEED: 0.3,
            
            //Wave swing settings
                /*
                WAVE_1_SWING_SETTINGS: {
                                            //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "pulse"},
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                    },
                */
                WAVE_2_SWING_SETTINGS: {
                                            amplitude: {amplitude: 20, frequency: 1, phase: 0, type: "sine"}//,
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                    },
                WAVE_3_SWING_SETTINGS: {
                                            //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            phase: {amplitude: 2, frequency: 0.2, phase: 2.1, type: "sine"}
                                    }
    });
}

if ($('#contact_faq_blob_container').length > 0) {
    new BlobAnimation("contact_faq_blob_container", {
                
        //Blob main settings
            BLOB_SIZE: 100,
            BLOB_DISTANCE: 1000,
            DETALIZATION: 60,
            PERSPECTIVE_DISTORTION: 1,
            ROTATION_SPEED: 5,
            OFFSET_X: 0, //offset in pixels
            OFFSET_Y: 0, //offset in pixels
            PERCENTAGE_OFFSET_X: 0, //offset in percentages
            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
        
        //Dot settins
            DOT_SIZE: 2,
            DOT_COLOR: "gray",
    
        //Responsivity settings
            AUTO_SCALE: false,
            VIEWPORT_WIDTH: 183,
            VIEWPORT_HEIGHT: 133,
            
        //Mouse settings				
            MOUSE_DISTANCE_MIN: 20,
            MOUSE_DISTANCE_MAX: 400,
            MOUSE_SENSITIVITY: 1,
            INERTIAL_TIME: 2,
        
        //Shape settins
            //Shape main settings
                INITIAL_SHAPE: {
                                    wave1: {amplitude: 41.758, frequency: 4.78, phase: 3.142},
                                    wave2: {amplitude: 31.868, frequency: 2.692, phase: 1.45},
                                    wave3: {amplitude: 37.363, frequency: 2, phase: 1.036}
                            },
                USE_MORPHING: true,
                USE_WAVE_MOTION: true,
                USE_WAVE_SWING: true,
            
            //Morphing settings
                MORPHING_AUTOPLAY: true,
                MORPHING_DURATION: 2,
                MORPHING_DELAY: 2,
                MORPHING_TRANSITION_TYPE: "cubic",	
                MORPHING_SHAPES: [									  	
                                    {
                                        wave1: {amplitude: 58.242, frequency: 4.231, phase: 4.005},
                                        wave2: {amplitude: 37.363, frequency: 4.176, phase: 5.006},
                                        wave3: {amplitude: 41.758, frequency: 3.297, phase: 5.178}
                                    },
                                    {
                                        wave1: {amplitude: 112.088, frequency: 2.857, phase: 2.969},
                                        wave2: {amplitude: 40.659, frequency: 3.187, phase: 2.486},
                                        wave3: {amplitude: 43.956, frequency: 0.604, phase: 0.449}
                                    },
                                    {
                                        wave1: {amplitude: 127.473, frequency: 2.857, phase: 4.626},
                                        wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                        wave3: {amplitude: 31.868, frequency: 0.604, phase: 3.59}
                                    },
                                    {
                                        wave1: {amplitude: 36.264, frequency: 0, phase: 1.795},
                                        wave2: {amplitude: 40.659, frequency: 2.033, phase: 1.312},
                                        wave3: {amplitude: 165.934, frequency: 0, phase: 3.97}
                                    },
                                    {
                                        wave1: {amplitude: 43.956, frequency: 2.967, phase: 4.315},
                                        wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                        wave3: {amplitude: 170.33, frequency: 0, phase: 3.245}
                                    },
                                    {
                                        wave1: {amplitude: 118.681, frequency: 0, phase: 4.074},
                                        wave2: {amplitude: 115.385, frequency: 0, phase: 4.039},
                                        wave3: {amplitude: 141.758, frequency: 0.989, phase: 0}
                                    },
                                    {
                                        wave1: {amplitude: 36.264, frequency: 6.319, phase: 4.419},
                                        wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                        wave3: {amplitude: 2.198, frequency: 7.033, phase: 0.138}
                                    },
                                    {
                                        wave1: {amplitude: 49.451, frequency: 4.725, phase: 4.592},
                                        wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                        wave3: {amplitude: 161.538, frequency: 0.989, phase: 4.661}
                                    }									
                                ],
                                
            //Wave motion settings
                WAVE_1_MOTION_SPEED: 1.3,
                WAVE_2_MOTION_SPEED: 0.8,
                //WAVE_3_MOTION_SPEED: 0.3,
            
            //Wave swing settings
                /*
                WAVE_1_SWING_SETTINGS: {
                                            //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "pulse"},
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                    },
                */
                WAVE_2_SWING_SETTINGS: {
                                            amplitude: {amplitude: 20, frequency: 1, phase: 0, type: "sine"}//,
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                    },
                WAVE_3_SWING_SETTINGS: {
                                            //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            phase: {amplitude: 2, frequency: 0.2, phase: 2.1, type: "sine"}
                                    }
    });
}

if ($('#service_faq_blob_container').length > 0) {
    new BlobAnimation("service_faq_blob_container", {
        //Blob main settings
            BLOB_SIZE: 100,
            BLOB_DISTANCE: 1000,
            DETALIZATION: 60,
            PERSPECTIVE_DISTORTION: 1,
            ROTATION_SPEED: 5,
            OFFSET_X: 0, //offset in pixels
            OFFSET_Y: 0, //offset in pixels
            PERCENTAGE_OFFSET_X: 0, //offset in percentages
            PERCENTAGE_OFFSET_Y: 0, //offset in percentages
        
        //Dot settins
            DOT_SIZE: 2,
            DOT_COLOR: "gray",
    
        //Responsivity settings
            AUTO_SCALE: false,
            VIEWPORT_WIDTH: 183,
            VIEWPORT_HEIGHT: 133,
            
        //Mouse settings				
            MOUSE_DISTANCE_MIN: 20,
            MOUSE_DISTANCE_MAX: 400,
            MOUSE_SENSITIVITY: 1,
            INERTIAL_TIME: 2,
        
        //Shape settins
            //Shape main settings
                INITIAL_SHAPE: {
                                    wave1: {amplitude: 41.758, frequency: 4.78, phase: 3.142},
                                    wave2: {amplitude: 31.868, frequency: 2.692, phase: 1.45},
                                    wave3: {amplitude: 37.363, frequency: 2, phase: 1.036}
                            },
                USE_MORPHING: true,
                USE_WAVE_MOTION: true,
                USE_WAVE_SWING: true,
            
            //Morphing settings
                MORPHING_AUTOPLAY: true,
                MORPHING_DURATION: 2,
                MORPHING_DELAY: 2,
                MORPHING_TRANSITION_TYPE: "cubic",	
                MORPHING_SHAPES: [									  	
                                    {
                                        wave1: {amplitude: 58.242, frequency: 4.231, phase: 4.005},
                                        wave2: {amplitude: 37.363, frequency: 4.176, phase: 5.006},
                                        wave3: {amplitude: 41.758, frequency: 3.297, phase: 5.178}
                                    },
                                    {
                                        wave1: {amplitude: 112.088, frequency: 2.857, phase: 2.969},
                                        wave2: {amplitude: 40.659, frequency: 3.187, phase: 2.486},
                                        wave3: {amplitude: 43.956, frequency: 0.604, phase: 0.449}
                                    },
                                    {
                                        wave1: {amplitude: 127.473, frequency: 2.857, phase: 4.626},
                                        wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                        wave3: {amplitude: 31.868, frequency: 0.604, phase: 3.59}
                                    },
                                    {
                                        wave1: {amplitude: 36.264, frequency: 0, phase: 1.795},
                                        wave2: {amplitude: 40.659, frequency: 2.033, phase: 1.312},
                                        wave3: {amplitude: 165.934, frequency: 0, phase: 3.97}
                                    },
                                    {
                                        wave1: {amplitude: 43.956, frequency: 2.967, phase: 4.315},
                                        wave2: {amplitude: 40.659, frequency: 4.286, phase: 0.414},
                                        wave3: {amplitude: 170.33, frequency: 0, phase: 3.245}
                                    },
                                    {
                                        wave1: {amplitude: 118.681, frequency: 0, phase: 4.074},
                                        wave2: {amplitude: 115.385, frequency: 0, phase: 4.039},
                                        wave3: {amplitude: 141.758, frequency: 0.989, phase: 0}
                                    },
                                    {
                                        wave1: {amplitude: 36.264, frequency: 6.319, phase: 4.419},
                                        wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                        wave3: {amplitude: 2.198, frequency: 7.033, phase: 0.138}
                                    },
                                    {
                                        wave1: {amplitude: 49.451, frequency: 4.725, phase: 4.592},
                                        wave2: {amplitude: 32.967, frequency: 3.242, phase: 4.143},
                                        wave3: {amplitude: 161.538, frequency: 0.989, phase: 4.661}
                                    }									
                                ],
                                
            //Wave motion settings
                WAVE_1_MOTION_SPEED: 1.3,
                WAVE_2_MOTION_SPEED: 0.8,
                //WAVE_3_MOTION_SPEED: 0.3,
            
            //Wave swing settings
                /*
                WAVE_1_SWING_SETTINGS: {
                                            //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "pulse"},
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                    },
                */
                WAVE_2_SWING_SETTINGS: {
                                            amplitude: {amplitude: 20, frequency: 1, phase: 0, type: "sine"}//,
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //phase: {amplitude: 0, frequency: 0, phase: 0, type: "sine"}
                                    },
                WAVE_3_SWING_SETTINGS: {
                                            //amplitude: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            //frequency: {amplitude: 0, frequency: 0, phase: 0, type: "sine"},
                                            phase: {amplitude: 2, frequency: 0.2, phase: 2.1, type: "sine"}
                                    }
    });
}

function slickInit() {
    $(".js-cTestimonialSlider").slick({
        autoplay: !0,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        asNavFor: ".js-cTestimonialSliderNav",
        cssEase: "cubic-bezier(.84, 0, .08, .99)",
        vertical: !0,
        prevArrow: $(".prev"),
        nextArrow: $(".next")
    }), $(".js-cTestimonialSliderNav").slick({
        autoplay: !0,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".js-cTestimonialSlider",
        dots: !0,
        centerMode: !0,
        fade: !0,
        focusOnSelect: !0,
        cssEase: "cubic-bezier(.84, 0, .08, .99)",
        appendDots: $(".slider-dots-box"),
        dotsClass: "slider-dots",
        prevArrow: $(".prev"),
        nextArrow: $(".next")
    }), $(".js-cTestimonialSliderNav").on("beforeChange", (function(t, e, n, i) {
        $(".slider-dots-box button").html("")
    })).trigger("beforeChange"), $(".js-cTestimonialSliderNav").on("afterChange", (function(t, e, n) {
        $(".slider-dots-box button").html(""), $(".slider-dots-box .slick-active button").html('<svg class="progress-svg" width="140" height="140">\n                <g transform="translate(0,0)">\n                <circle class="circle-go" cx="43" cy="44" r="42" ></circle>\n        \t\t</g></svg>')
    })).trigger("afterChange")
}

slickInit();