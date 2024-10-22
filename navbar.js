document.addEventListener('DOMContentLoaded', () => {
    let menutoggle = document.querySelector('.toggle');
    let menuitems = document.querySelector('.menu-items');

    function openMenu() {
        menuitems.classList.add('open');
        menuitems.classList.remove('close');
    }

    function closeMenu() {
        menuitems.classList.add('close');
        menuitems.classList.remove('open');
        setTimeout(() => {
            menuitems.classList.add('nav-opacity');
            menuitems.classList.remove('close');
            setTimeout(() => {
                menuitems.classList.remove('nav-opacity');
            }, 500);
        }, 500);
    }

    menutoggle.addEventListener('click', () => {
        menutoggle.classList.toggle('active');
        if (menutoggle.classList.contains('active')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    const removeClass = () => {
        menutoggle.classList.remove('active');
        menuitems.classList.add('closeTop');
        menuitems.classList.remove('open');
        setTimeout(() => {
            menuitems.classList.remove('closeTop');
        }, 500);
    };


    // SMOOTH SCROLL DOWN PAGE WHEN MENU LINK CLICKED
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem) => {
        const link = navItem;

        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            removeClass();
        });
    });
});