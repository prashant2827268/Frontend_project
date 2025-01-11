var crsr = document.querySelector('#cursor');
var blurr = document.querySelector('#cursor-blur');

let speed =     0.3; // Adjust this value to control the smoothness
let currentX = 0, currentY = 0;
document.addEventListener('mousemove',function(dets){
    currentX += (dets.clientX - currentX) * speed;
    currentY += (dets.clientY - currentY) * speed;
    
    crsr.style.left = currentX +"px";
    crsr.style.top = currentY + "px";
    blurr.style.left = currentX -100 +"px";
    blurr.style.top = currentY- 100+ "px";
})
let h4all = document.querySelectorAll('#nav h4');
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        crsr.style.transform= "scale(3)";
        crsr.style.border= "1px solid white";
        crsr.style.backgroundColor = "transparent"

    });
    elem.addEventListener('mouseleave', function(){
        crsr.style.transform = "scale(1)";  // Reset to default
        crsr.style.border = ''; // Reset to default
        crsr.style.backgroundColor = "#95C11E"
    });
})

gsap.to("#nav",{
    backgroundColor:"black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -20%",
        scrub:1,
        
    }

})

gsap.to("#main", {
    backgroundColor:"#000",
    // duration:2,
    // delay:2,
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start:" top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from('#about-us img,#about-us-in',{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:'#about-us',
        scroller:'body',
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:1,
    }
})

gsap.from('.card',{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:'.card',
        scroller:'body',
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#colon1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 37%",
        end: "top 45%",
        // markers:true,
        scrub:2,
    }
})
gsap.from("#colon2",{
    y:50,
    x:80,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 99%",
        end: "top 120%",
        // markers:true,
        scrub:2,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})