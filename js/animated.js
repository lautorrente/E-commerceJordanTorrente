let animado = document.querySelectorAll('.animated');

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animated.length; i++) {
        let alturaAnimated = animated[i].offsetTop;
        if (alturaAnimated < scrollTop){
            animated.style.opacity = 1;
        }
    }
}
window.addEventListener('scroll', mostrarScroll);