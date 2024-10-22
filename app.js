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

    let show = hours + ' : ' + minutes + ' '+ ampm
    document.querySelector('#time').textContent = show;
}

setInterval(updateDateTime, 1000);