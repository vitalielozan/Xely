const myArrow = document.querySelector("#myArrow");

window.addEventListener("scroll", onScroll);

myArrow.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log("Arrow clicked");
    myArrow.style.display = "none";
});

function onScroll() {
    const scrolledTo = window.scrollY + window.innerHeight;
    const threshold = document.body.scrollHeight * 0.75;
    const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo;
    if (isReachBottom) {
        myArrow.style.display = "block";
    };
};
