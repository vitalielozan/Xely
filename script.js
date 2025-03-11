const myArrow = document.querySelector("#myArrow");

window.addEventListener("scroll", onScroll);

myArrow.addEventListener("click", () => {

    myArrow.style.visibility = "hidden";

});

function onScroll() {
    const scrolledTo = window.scrollY + window.innerHeight;
    const threshold = 3350;
    const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo;
    if (isReachBottom) {
        myArrow.style.visibility = "visible";
    };
};
