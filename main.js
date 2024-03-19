gsap.from(".ELEMENT", { x: 100, duration: 2 });

// target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second. 

gsap.from(".IMAGE", { x: -200, duration: 2});
gsap.fromTo(".ICON1", {x: -100},{ x: -10, duration: 2});
gsap.fromTo(".ICON3", {x: 200},{ x: -10, duration: 2});
gsap.fromTo(".ICON2",{x: 10},{ x: -10, duration: 2,rotation:360});
// gsap.to(".ELEMENT",{duration:2,x:-100})