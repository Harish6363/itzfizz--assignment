
gsap.registerPlugin(ScrollTrigger);


// Title Animation

gsap.to("#title",{

opacity:1,
y:-10,
duration:1

});


// Stats Animation

gsap.to(".box",{

opacity:1,
y:-20,
duration:1,
stagger:0.3,
delay:1

});


gsap.registerPlugin(ScrollTrigger);


// Title Animation
gsap.to("#title",{
opacity:1,
y:-10,
duration:1
});


// Stats Animation
gsap.to(".box",{
opacity:1,
y:-20,
duration:1,
stagger:0.3,
delay:1
});


// Better Scroll Animation
gsap.to("#car",{

x:800,
rotation:15,

scrollTrigger:{
trigger:"body",
start:"top top",
end:"bottom bottom",
scrub:2
}

});