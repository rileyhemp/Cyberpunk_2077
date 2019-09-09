let spacer = document.querySelector('.platform-spacer')

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    resizeSpacer()
});

function resizeSpacer() {
	spacer.style.width = window.innerWidth - spacer.getBoundingClientRect().x - 415 + 'px'
}

resizeSpacer()


let navigation = document.querySelectorAll('.navigation li')

var tl = new TimelineMax()

if ( window.innerWidth >= 1024 ) {

    if (window.innerWidth > 1550) {
        tl.from('header', 10, {
            ease: Power4.easeOut,
            css:{
                opacity: 0,
            }
        },1)
        .fromTo('.trailer-container', .75,{
            css:{
                top: "-16rem",
                height: "61rem",
                width: "100vw",
                left: "-42.8rem",
                filter: "hue-rotate(180deg)"
            }
        },{css:{
            height: "42rem",
            top: "-7rem",
            left: "-42.8rem",
            filter: "hue-rotate(0deg)"
        }
        },2.5)
        .from('.hero-container i', .5, {
        ease: Power2.easeInOut,
        css:{
            left: "-600px"
        }},"-=7.25")
        .to('.trailer-container', 0.5, {
            ease: Power2.easeInOut,
            css:{
                left: '-4.8rem'
            }
        },"-=7.25")
        .to('.hero', 0.5, {
            ease: Power2.easeInOut,
            css:{
                left: '-148px'
            }
        },"-=7.25")
    } else if ( window.innerWidth < 1550 ) {
        tl.from('header', 10, {
            ease: Power4.easeOut,
            css:{
                opacity: 0,
            }
        },1)
        .fromTo('.trailer-container', .75,{
            css:{
                top: "-16rem",
                height: "61rem",
                width: "110vw",
                left: "-38rem",
                filter: "hue-rotate(180deg)"
            }
        },{css:{
            height: "35rem",
            top: "0rem",
            left: "-33.8rem",
            filter: "hue-rotate(0deg)"
        }
        },2.5)
        .from('.hero-container i', .5, {
        ease: Power2.easeInOut,
        css:{
            left: "-600px"
        }},"-=7.25")
        .to('.trailer-container', 0.5, {
            ease: Power2.easeInOut,
            css:{
                left: '-8.8rem'
            }
        },"-=7.25")
        .to('.hero', 0.5, {
            ease: Power2.easeInOut,
            css:{
                left: '-248px'
            }
        },"-=7.25")        
    }

    tl.from('.hero', 1, {ease: Power2.easeInOut,css:{left:"300rem",opacity:0}},3.45)
    .from('.hero-numbers', .7, {ease: Power2.easeInOut,css:{left:"300rem", opacity: 0.5}},3.65)
    .from('.button-container-home', .85, {ease: Power3.easeInOut, css:{left:"300rem",opacity:0}},3.5)
    .from('nav', .8, {ease: Power3.easeInOut, css:{opacity: 0, top:"-100rem"}},2)
    .from('.trailer-border', .8, {left:-5000}, 3.50)
    .staggerFrom(navigation, .75, {opacity: 0, left: 200}, 0.2, 1.5)
    .from('.hero-divider', .8, {ease: Power3.easeInOut,css:{right:"-111%"}}, 3.75)
    .from('.next-hero-preview', 1, {ease: Power3.easeInOut,x:300}, 3.75)
    .from('.platform-select', 0.8, {left:3000}, 4)
    .from('.sm-links', 0.7, {left: -100}, 2.5)
    .from('.platform-spacer', 0.7, {width: 30}, 4)
    
    var controller = new ScrollMagic.Controller();
    var tl2 = new TimelineMax();
    
    var scene = new ScrollMagic.Scene({
        triggerElement: ".about"
    })
    
    .setTween(".about-image", 0.5, {css:{
        transform: "translate-x: -300px"
    }})
    .addTo(controller)
    
    function aboutScrollFX() {
        var controller = new ScrollMagic.Controller();
        let tl2 = new TimelineMax()
        let splitHeadline = new SplitText(".about-headline", {type:"lines,words,chars"})
        let splitParagraph = new SplitText('.about-paragraph-container p', {type:"lines"})

        tl2.staggerFrom(splitHeadline.chars, .2, {
            css:{
                left: "-70px",
                color: 'black',
                opacity: 0,
            }}, 0.02, "-=2")
            .staggerFrom(splitParagraph.lines, 1, {
                ease: Power2.easeInOut,
                css:{
                    opacity: 0,
                    height: 0,
                    overflow: "hidden"}}, .05, '-=2')
            .from('.breadcrumbs.abt', 0.7, {x:-400},'-=2.5')
        var scene = new ScrollMagic.Scene({
            triggerElement: ".about"
        })
    .setTween(tl2)
    .addTo(controller)
    scene.triggerHook(0.9)
    }
    aboutScrollFX()
    function characterScrollFX() {

        var controller = new ScrollMagic.Controller();
        let tl3 = new TimelineMax()
        let v = ['li .character-preview.v', 'li.v .character-preview-overlay']
        let vName = 'li.v h1'
        let vDivider = 'li.v i'
        let vDescription = new SplitText('li.v p', {type:"lines"})
        let dexter = ['li .character-preview.dexter', 'li.dexter .character-preview-overlay']
        let dexterName = 'li.v h1'
        let dexterDivider = 'li.dexter i'
        let dexterDescription = new SplitText('li.dexter p', {type:"lines"})
        let jackie = ['li .character-preview.jackie', 'li.jackie .character-preview-overlay']
        let jackieName = 'li.v h1'
        let jackieDivider = 'li.jackie i'
        let jackieDescription = new SplitText('li.jackie p', {type:"lines"})
        let johnny = ['li .character-preview.johnny', 'li.johnny .character-preview-overlay']
        let johnnyName = 'li.v h1'
        let johnnyDivider = 'li.johnny i'
        let johnnyDescription = new SplitText('li.johnny p', {type:"lines"})
        let t = .75
        let ease = Power2.easeInOut
        
        
        tl2.from(v, t, {
            ease: ease,
            css:{
                left: -300,
            }})
        .fromTo([vName, vDivider], t-.3, {
            ease: ease,
            css:{
                left: -500,
                scale: 0,
            }},{
                left: 0,
                scale: 1,
            },'-=.5')
        .staggerFrom(vDescription.lines, t-.3, {      
            css:{
                left: -200,
                opacity: 0,
            }
        }, 0.1, '-=.2')
        .staggerFrom([dexter, jackie, johnny], t, {x:800, scale: 0}, 0.1, '-=1')
        .from('.breadcrumbs.char', 0.7, {x:-400},'-=2.5')
        
        var scene = new ScrollMagic.Scene({
            triggerElement: ".trailer"
        })
        scene.triggerHook(0.1)
        .setTween(tl2)
        .addTo(controller)
    }
    characterScrollFX()
    function wallpaperScrollFX() {
        var controller = new ScrollMagic.Controller();
        let tl3 = new TimelineMax()

        tl3.staggerFrom('.wallpaper-container', .7, {right: -1000}, 0.2)   
            .from('.wallpaper-divider', 2, {right: -500}, '-=1.5')
            .from('.wallpaper-counter', 2, {css:{
                marginLeft: '3000px'
            }},'-=2')
            .from('.breadcrumbs.wall', 0.7, {x:-400},'-=2.5')

        var scene = new ScrollMagic.Scene({
            triggerElement: ".wallpaper"
        })
        scene.triggerHook(0.9)
        .setTween(tl3)
        .addTo(controller)
    }
    wallpaperScrollFX()
}

var controller = new ScrollMagic.Controller();

var homePage = new ScrollMagic.Scene({triggerElement: 'header', duration: document.querySelector('header').offsetHeight })
    homePage.triggerHook(0.5)
    .setClassToggle("#home", "active") 
    .addTo(controller);

var aboutPage = new ScrollMagic.Scene({triggerElement: '.about',duration: document.querySelector('.about').offsetHeight})
    aboutPage.triggerHook(0.5)
    .setClassToggle("#about", "active") 
    .addTo(controller);

var trailerPage = new ScrollMagic.Scene({triggerElement: '.trailer',duration: document.querySelector('.trailer').offsetHeight})
    trailerPage.triggerHook(0.5)
    .setClassToggle("#trailer", "active") 
    .addTo(controller);

var characterPage = new ScrollMagic.Scene({triggerElement: '.characters',duration: document.querySelector('.characters').offsetHeight})
    characterPage.triggerHook(0.5)
    .setClassToggle("#characters", "active") 
    .addTo(controller);

var wallpaperPage = new ScrollMagic.Scene({triggerElement: '.wallpaper',duration: document.querySelector('.wallpaper').offsetHeight})
    wallpaperPage.triggerHook(0.5)
    .setClassToggle("#wallpaper", "active") 
    .addTo(controller);

let burgerChange = new ScrollMagic.Scene({triggerElement:'.about'})
burgerChange.triggerHook(0.1)
    .setClassToggle(".hamburger-menu", "active") 
    .addTo(controller);

let logoChange = new ScrollMagic.Scene({triggerElement:'.about'})
    logoChange.triggerHook(0.1)
    .setClassToggle("nav img", "active") 
    .addTo(controller);
    
let twitterChange = new ScrollMagic.Scene({triggerElement:'.about'})
    twitterChange.triggerHook(0.9)
    .setClassToggle(".twitter-link", "active") 
    .addTo(controller);

let instagranChange = new ScrollMagic.Scene({triggerElement:'.about'})
    instagranChange.triggerHook(0.9)
    .setClassToggle(".insta-link", "active") 
    .addTo(controller);

let facebookChange = new ScrollMagic.Scene({triggerElement:'.about'})
    facebookChange.triggerHook(0.9)
    .setClassToggle(".facebook-link", "active") 
    .addTo(controller);

let youtubeChange = new ScrollMagic.Scene({triggerElement:'.about'})
    youtubeChange.triggerHook(0.9)
    .setClassToggle(".youtube-link", "active") 
    .addTo(controller);

let socialChange = new ScrollMagic.Scene({triggerElement:'.about'})
    socialChange.triggerHook(0.9)
    .setClassToggle(".sm-links", "active") 
    .addTo(controller);

let shareBtnChange = new ScrollMagic.Scene({triggerElement:'.about'})
    shareBtnChange.triggerHook(0.9)
    .setClassToggle(".share-btn-mobile", "active") 
    .addTo(controller);

let scrollChange = new ScrollMagic.Scene({triggerElement:'.about'})
    scrollChange.triggerHook(0.9)
    .setClassToggle(".scroll-indicator", "active") 
    .addTo(controller);

                                              ///        ///////////////////////////////////
//////////////////////////////////////////// Navigation ///////////////////////////////////
////////////////////////////////////////////        ///

//Links
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const trailer = document.querySelector('#trailer')
const characters = document.querySelector('#characters')
const wallpaper = document.querySelector('#wallpaper')

//Anchors
const homeLink = document.querySelector('#homeLink')
const aboutLink = document.querySelector('#aboutLink')
const trailerLink = document.querySelector('#trailerLink')
const charactersLink = document.querySelector('#charactersLink')
const wallpaperLink = document.querySelector('#wallpaperLink')

const links = [home, about, trailer, characters, wallpaper]
const anchors = [homeLink, aboutLink, trailerLink, charactersLink, wallpaperLink]

let scrollIndicator = document.querySelector('.scroll-indicator')
let logo = document.querySelector('nav img')

logo.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})

for (let i=0; i<links.length; i++) {

    links[i].addEventListener('click', function(){

        document.documentElement.scrollTop = getPosition(anchors[i])
    })
}

function getPosition(el){
    let position = 0
    while(el){
        position += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent
    }
    return position
}

document.addEventListener('scroll', function(){
    if ( wallpaper.classList.contains('active') ) {
        scrollIndicator.style.display = 'none'
    } else {
        scrollIndicator.style.display = 'block'
    }
})

scrollIndicator.addEventListener('click', function(){
    let index
    for (let i=0; i<links.length; i++){
        if (links[i].classList.contains('active')) {
            index = links.indexOf(links[i])
        }
    }
    document.documentElement.scrollTop = getPosition(anchors[index+1])
})
