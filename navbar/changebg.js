
window.addEventListener("scroll", function () {
    let fixh = document.querySelector("header")
    let current = window.window;
    if (current > 0) {
        fixh.classList.add("header-fixed")
    } else {
        fixh.classList.remove("header-fixed")
    }
})
