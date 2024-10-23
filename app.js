document.addEventListener("DOMContentLoaded", function () {
// LOADING PAGE
// window.addEventListener('load', () => {
//     const loadingOverlay = document.getElementById('loading');
//     const content = document.getElementById('content');

//     const loadingDuration = 0;

//     setTimeout(() => {
//         loadingOverlay.classList.add('hidden');

//         setTimeout(() => {
//             loadingOverlay.style.display = 'none';
//             content.style.display = 'block';
//         }, 500);
//     }, loadingDuration);
// });





// MAGIC CURSOR
$(function () {
    const cursorBall = document.getElementById('navcursor');

    document.addEventListener('mousemove', function (e) {
        gsap.to(cursorBall, {
            duration: 0.1,
            x: e.clientX,
            y: e.clientY,
            opacity: 1,
            ease: 'power2.out'
        });
    });
})


// PLAY AUDIO WHEN BUTTON CLICKED
const bodyTop = document.getElementById('bodyTop')
bodyTop.addEventListener('click', () => {
    window.scrollTo(top)
    const audio = document.getElementById('playAudio')
    audio.play()

})


// BODY TOP BUTTON & HEADER STICKY
const header = document.getElementById('header')

window.addEventListener('scroll', () => {
    bodyTop.classList.toggle('sticky', window.scrollY > 200)
    header.classList.toggle('sticky', window.scrollY > 200)
})



// 

// create a function to update the date and time
function updateDateTime() {
    let updateDate = new Date();
    let hours = updateDate.getHours()
    let minutes = updateDate.getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let show = hours + ' : ' + minutes + ' ' + ampm
    document.querySelector('#time').textContent = show;
}

setInterval(updateDateTime, 1000);




// ANIMATE TEXT
// const myText = new SplitType('#developer-txt');

// gsap.to('.char', {
//     y: 0,
//     stagger: 0.05,
//     delay: 0.2,
//     duration: .1,
//     ease: "power2.out",
//     scrollTrigger:{
//         trigger: '#developer-txt',
//         start: 'top 85%',
//         end: 'bottom 70%',
//         scrub: true,
//         markers: true
//     }
// })


    // gsap.registerPlugin(ScrollTrigger);

    // // ANIMATE TEXT
    // const myText = new SplitType('#developer-txt');
    // const chars = myText.chars;

    // // Set initial position for characters off-screen
    // gsap.set(chars, { y: 115 }); // Start characters 115px below their position

    // // Animate characters when scrolling
    // gsap.to(chars, {
    //     y: 0, // Animate to their original position
    //     stagger: 0.05,
    //     duration: 0.1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //         trigger: '#developer-txt',
    //         start: 'top 85%', // Trigger when the top hits 85% of the viewport height
    //         end: 'bottom 70%', // End when the bottom hits 70% of the viewport height
    //         scrub: true, // Smooth animation based on scroll
    //         markers: true // Enable markers for debugging
    //     }
    // });
});
