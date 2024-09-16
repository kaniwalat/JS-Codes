const value = document.querySelector(".value")
const btns = document.querySelectorAll(".btn")

num = 0
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains("decrease")) {
            num--
        } else if (styles.contains("increase")) {
            num++
        } else {
            num = 0
        }
        value.textContent = num
        if (num > 0) {
            value.style.color = "green"
        } else if (num < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "black"
        }
    });
});