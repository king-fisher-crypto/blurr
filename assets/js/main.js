gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
let locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    getDirection: true,
});

locoScroll.destroy();

const init = () => {
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction)
    });

    locoScroll.destroy();
    locoScroll.init();

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, {
                duration: 0,
                disableLerp: true
            }) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => {
        console.log('dfasfadsf');
        locoScroll.update()
    });
    
    ScrollTrigger.defaults({
        scroller: "[data-scroll-container]"
    });

    let body = document.querySelector("body")

    ScrollTrigger.create({
        trigger: ".trigger-start-section",
        start: "top 50%+=100px",
        endTrigger: ".trigger-end-section",
        toggleActions: "play reverse play reverse",
        end: "bottom bottom",
        onToggle: self => {
            if (!self.isActive) {
                body.setAttribute('class', 'dark-mode')
            } else {
                body.setAttribute('class', 'light-mode')
            }
        },
        onUpdate: self => {
            // document.
        }
    });

    let header = document.querySelector("header");

    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        endTrigger: "footer",
        toggleActions: "play reverse play reverse",
        end: "bottom bottom",
        onToggle: self => {},
        onUpdate: self => {
            if (self.direction == 1) {
                header.setAttribute("class", "down")
            }
            if (self.direction == -1 && self.progress.toFixed(2) * 1 < 1) {
                header.setAttribute("class", "up")
            }
            if (self.progress <= 0.01) {
                header.removeAttribute('class', 'up')
            }
        }
    });

    let splitWords = function(selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
            el.dataset.splitText = el.textContent;
            if (el.classList.contains('spec')) {
                el.innerHTML = el.textContent.split(/\n/).map((word) => {
                        return word
                            .split("-")
                            .map(function(word) {
                                return '<span class="word">' + word + "</span>";
                            })
                            .join('<span class="hyphen">-</span>');
                    })
                    .join('<span class="whitespace"> </span>');
            } else {
                el.innerHTML = el.textContent
                    .split(/\s/)
                    .map(function(word) {
                        return word
                            .split("-")
                            .map(function(word) {
                                return '<span class="word">' + word + "</span>";
                            })
                            .join('<span class="hyphen">-</span>');
                    })
                    .join('<span class="whitespace"> </span>');
            }
        });
    };

    let splitLines = function(selector) {
        var elements = document.querySelectorAll(selector);
        splitWords(selector);
        elements.forEach(function(el) {
            var lines = getLines(el);
            var wrappedLines = "";
            lines.forEach(function(wordsArr) {
                wrappedLines += '<span class="line"><span class="words">';
                wordsArr.forEach(function(word) {
                    wrappedLines += word.outerHTML;
                });
                wrappedLines += "</span></span>";
            });
            el.innerHTML = wrappedLines;
        });
    };

    let getLines = function(el) {
        var lines = [];
        var line;
        var words = el.querySelectorAll("span");
        var lastTop;
        
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.offsetTop != lastTop) {
                // Don't start with whitespace
                if (!word.classList.contains("whitespace")) {
                    lastTop = word.offsetTop;
                    line = [];
                    lines.push(line);
                }
            }
            line.push(word);
        }
        return lines;
    };

    splitLines(".reveal-text");
    splitLines("h1")

    let revealText = document.querySelectorAll(".reveal-text");

    gsap.registerPlugin(ScrollTrigger);

    let revealLines = revealText.forEach((element) => {
        const lines = element.querySelectorAll(".words");
        const words = element.querySelectorAll(".word");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: element
            }
        });
        tl.set(element, {
            autoAlpha: 1
        });
        tl.from([words], 1, {
            yPercent: 100,
            translateZ: 0,
            rotateZ: [10, 0],
            ease: Power3.out,
            delay: .5,
        });
    });

    const titles = document.querySelectorAll('.title');
    const h1Tags = document.querySelectorAll('h1');
    const h2Tags = document.querySelectorAll('h2');
    const pTags = document.querySelectorAll('p');

    splitLines(".title div")

    titles.forEach((element) => {
        let icon = element.querySelector("i")
        let span = element.querySelector("span.words")
        let spanParent = span.parentNode
        let titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
            }
        })
        titleTl.from([spanParent, icon], 1, {
            width: 0,
            ease: Power2.out,
        })
    })

    pTags.forEach((element) => {
        let pTagsTl = gsap.timeline({
            scrollTrigger: {
                trigger: element
            }
        })
        pTagsTl.set(element, {
            autoAlpha: 1
        });
        pTagsTl.from(element, 1, {
            yPercent: 25,
            opacity: 0,
            ease: Power3.out,
            stagger: 2.5,
        });
    })

    h1Tags.forEach((element) => {
        const lines = element.querySelectorAll(".words");
        const words = element.querySelectorAll(".word");
        let h1TagsTl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
            }
        });
        h1TagsTl.set(element, {
            autoAlpha: 1
        });
        h1TagsTl.from([lines], 1, {
            yPercent: 100,
            translateZ: 0,
            ease: Power3.out,
        });
    })

    h2Tags.forEach((element) => {
        let h2TagsTl = gsap.timeline({
            scrollTrigger: {
                trigger: element
            }
        });
        h2TagsTl.from(element, 1, {
            yPercent: 100,
            ease: Power3.out,
        });
    })
    // reveal image
    let revealImg = document.querySelectorAll(".reveal-img");

    revealImg.forEach((container) => {
        let image = container.querySelector("img");
        let imgTl = gsap.timeline({
            scrollTrigger: {
                trigger: container
            }
        });
        imgTl.set(container, {
            autoAlpha: 1
        });
        imgTl.from(container, 1.5, {
            xPercent: -100,
            ease: Power2.out
        });
        imgTl.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        });
    });
    
    gsap.to(".parallax-img", {
        ease: "none",
        scrollTrigger: {
            trigger: ".parallax-img",
            scrub: true
        },
    });
}

const headerTrigger = () => {
    let header = document.querySelector("header");
    let logo = header.querySelector(".logo-brand");
    let links = header.querySelectorAll(".btn");
    let headerTl = gsap.timeline({
        scrollTrigger: {
            trigger: header
        }
    })
    headerTl.from([logo, links], 1, {
        opacity: 0,
        ease: Power2.out
    })
}

function removeStyles(el) {
    el.removeAttribute('style')
    for (let i = 0; i < el.children.length; i++) {
        const element = el.children[i];
        if (element.nodeType == 1) removeStyles(element);
    }
}

headerTrigger();
init();

var links = document.querySelectorAll('a[href]');
var cbk = function(e) {
    if (e.currentTarget.href === window.location.href) {
        e.preventDefault();
        e.stopPropagation();
        let mainContent = document.querySelector('[data-scroll-container]');
        gsap.to(mainContent, {
            alpha: 0,
            duration: .4,
            ease: "power4.in",
            onComplete: function() {
                removeStyles(mainContent);
                init();
            }
        })
    }
};

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', cbk);
}

function mobileMenuFunction() {
    var t = document.body.querySelector(".mobile-menu"),
        e = (document.body.querySelector(".hamburger"), t.querySelector(".close-button"), document.body.querySelector(".hamburger")),
        i = (t.querySelectorAll(".mobile-menu-barba-link"), t.querySelectorAll(".link span")),
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
        duration: .5,
        ease: "power4.inOut"
    }, "start"), n.from(i, {
        y: "100%",
        duration: .95,
        ease: "power4.inOut",
        stagger: .2
    }, "start+=0.6"), e.addEventListener("click", function(t) {
        t.preventDefault(), t = "active", -1 < (" " + e.className + " ").indexOf(" " + t + " ") ? (document.body.classList.remove("overflow-hidden"), n.timeScale(1).reverse()) : (document.body.classList.add("overflow-hidden"), e.classList.add("active"), n.timeScale(1).play())
    }), window.closeMenu = function() {
        document.body.classList.remove("overflow-hidden"), n.timeScale(.5).reverse()
    }
}

mobileMenuFunction();

faqContentToggle = function(e) {
    if (e.target.classList.contains('item-wrap')) {
        e.target.classList.toggle('active');
    }
}

const faqBtns = document.querySelectorAll('.faq-row > .faq-item');
faqBtns.forEach(item => item.addEventListener('click', faqContentToggle));

var e = document.querySelectorAll(".media-wrap");
gsap.to(e, {
    scale: .95,
    duration: 1,
    ease: "power4.out",
    paused: !0
}) 

var e = document.querySelectorAll(".media-wrap");
const initMediaAnim = function() {

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
            }, {
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
            }, "start"),
            i = (i.add("start"), i.fromTo(t.querySelector(".media"), {
            }, {}, "start"), gsap.timeline({
                paused: !0,
                scrollTrigger: {
                    trigger: t.querySelector(".media"),
                    scroller: document.body.querySelector("[data-scroll-container]"),
                    start: "top bottom",
                    end: "top 70%",
                    scrub: !0,
                    toggleActions: "play none none none"
                }
            }));
            i.add("start"), i.fromTo(t.querySelector(".media"), {
                alpha: .15
            }, {
                alpha: 1,
                duration: 1,
                ease: "none"
            }, "start")
    })
}

initMediaAnim();

function barbaInit(){
    const loader = document.querySelector('.loader');

    if (!locoScroll) {
        locoScroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            getDirection: true,
        });
    }

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0, 
        rotation: 10, 
        xPercent: -5,
        yPercent: -50, 
        transformOrigin: 'left center', 
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, 
            {
                rotation: 10,
                scaleX: 0,
                xPercent: -5
            },
            { 
                duration: 0,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
                ease: 'Power4.inOut', 
                transformOrigin: 'left center'
            });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.to(loader, { 
            duration: 0.8, 
            scaleX: 0,
            xPercent: 5, 
            rotation: -10, 
            transformOrigin: 'right center', 
            ease: 'Power4.inOut'
        });
    }

    // do something before the transition starts
    barba.hooks.before(() => {        
        let mainContent = document.querySelector('[data-scroll-container]');
        gsap.to(mainContent, {
            alpha: 0,
            duration: .5,
            ease: "power4.in",
            onComplete: function() {
                document.querySelector('html').classList.add('is-transitioning');
                barba.wrapper.classList.add('is-animating');

                removeStyles(mainContent);
                
                locoScroll = new LocomotiveScroll({
                    el: document.querySelector("[data-scroll-container]"),
                    smooth: true,
                    getDirection: true,
                });

                init();
                initMediaAnim();
            }
        })        
    });

    // do something after the transition finishes
    barba.hooks.after(() => {        
        let mainContent = document.querySelector('[data-scroll-container]');
        gsap.to(mainContent, {
            alpha: 0,
            duration: .5,
            ease: "power4.in",
            onComplete: function() {
                removeStyles(mainContent);

                document.querySelector('html').classList.remove('is-transitioning');
                barba.wrapper.classList.remove('is-animating');

                locoScroll = new LocomotiveScroll({
                    el: document.querySelector("[data-scroll-container]"),
                    smooth: true,
                    getDirection: true,
                });

                init();
                initMediaAnim();
            }
        })    
    });

    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });

    barba.init({
        transitions: [{
            async leave() {
                await loaderIn();   
            },
            enter() {
                loaderAway();
            }
        }]
    })

}

window.addEventListener('load', function(){
    barbaInit();
});
