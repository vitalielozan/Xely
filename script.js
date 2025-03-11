const myArrow = document.querySelector("#myArrow");



myArrow.addEventListener("click", () => {
    myArrow.style.visibility = "hidden";
});

const onscroll = () => {
    const scrolledTo = window.scrollY + window.innerHeight;
    const threshold = 3750;
    const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo;
    if (isReachBottom) {
        myArrow.style.visibility = "visible";
    };
};

window.addEventListener("scroll", onscroll);


