




const dropDownH = document.querySelector('.nav-menu')
const spann = document.querySelector('.nav-svg')
const bars = document.querySelectorAll('.bar')



let bar2 = Array.from(bars)
let toggleHamburger = () => {
    bar2.forEach(bar => bar.classList.add('x'))
}
let removeHamburger = () => {
    bar2.forEach(bar => bar.classList.remove("x"))
}

spann.addEventListener('click', () => {
    if (dropDownH.style.display === "none") {
        toggleHamburger()
        dropDownH.style.display = "block";
    } else {
        removeHamburger()
        dropDownH.style.display = "none";
    }

});









function changeBg() {
    let myNav = document.getElementById("nav");
    let scrollValue = window.scrollY
    if (scrollValue < 100) {
        myNav.classList.remove('scroll')
    } else {
        myNav.classList.add('scroll')
    }
}


window.addEventListener("scroll", changeBg)

