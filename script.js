
const screens = document.querySelectorAll('.screen');
const navbar = document.querySelector('.navbar');

function handleScroll() {
    screens.forEach((screen, index) => {
        const rect = screen.getBoundingClientRect();
if (rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4) {

            screen.classList.add('active');
        } else {
            screen.classList.remove('active');
        }
    });

    // Show navbar after second screen
    const secondScreen = screens[1].getBoundingClientRect();
if (secondScreen.bottom < window.innerHeight * 0.3) {

        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
