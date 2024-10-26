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
    const myText = new SplitType('#developer-txt');

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '#developer-txt',
            start: 'top 90%',
            end: 'bottom 65%',
            scrub: true
        }
    })

    // const AnimatedText = new SplitType('#text-work');

    // gsap.to('.char', {
    //     y: 0,
    //     stagger: 0.05,
    //     delay: 0.2,
    //     duration: .1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //         trigger: '#text-work',
    //         start: '-100% bottom',
    //         end: '300% 20%',
    //         scrub: true,
    //         // markers: true
    //     }
    // })

    // const AboutText = new SplitType('#text-about');

    // gsap.to('.char', {
    //     y: 0,
    //     stagger: 0.05,
    //     delay: 0.2,
    //     duration: .1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //         trigger: '#text-about',
    //         start: '-50% bottom',
    //         end: '200% 20%',
    //         scrub: true,
    //         // markers: true
    //     }
    // })

    // const TextService = new SplitType('#text-service');

    // gsap.to('.char', {
    //     y: 0,
    //     stagger: 0.05,
    //     delay: 0.2,
    //     duration: .1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //         trigger: '#text-service',
    //         start: '-50% bottom',
    //         end: '200% 20%',
    //         scrub: true,
    //         // markers: true
    //     }
    // })

    // const TextTestimonial = new SplitType('#text-testimonial');

    // gsap.to('.char', {
    //     y: 0,
    //     stagger: 0.05,
    //     delay: 0.2,
    //     duration: .1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //         trigger: '#text-testimonial',
    //         start: '-50% bottom',
    //         end: '200% 30%',
    //         scrub: true,
    //         markers: true
    //     }
    // })




    function animateText(selector, start, end, markers = false) {
        const animatedText = new SplitType(selector);

        gsap.to('.char', {
            y: 0,
            stagger: 0.15,
            delay: 0.2,
            duration: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: selector,
                start: start,
                end: end,
                scrub: true,
                markers: markers
            }
        });
    }

    animateText('#text-work', 'bottom bottom', 'center 70%');
    animateText('#text-about', 'bottom bottom', 'center 30%',);
    animateText('#text-service', 'bottom bottom', 'center 30%',);
    animateText('#text-testimonial', 'bottom bottom', 'center 30%',);
    animateText('#text-faq', 'bottom bottom', 'center 30%',);
    animateText('#text-contact', 'bottom bottom', 'center 30%',);
    animateText('#text-footer', 'bottom bottom', 'center 30%',);





});
