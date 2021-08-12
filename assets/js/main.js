let element = document.getElementById("element");

function small() {
    // use clear classlist instead
    // element.classList.remove("middle");
    // element.classList.remove("bigCrazy");

    // clear classlist
    element.classList = "";
    element.classList.add("small");

}
function middle() {
    // use clear classlist instead
    // element.classList.remove("small");
    // element.classList.remove("bigCrazy");

    // clear classlist
    element.classList = "";
    element.classList.add("middle");

}
function bigCrazy() {
    // use clear classlist instead
    // element.classList.remove("small");
    // element.classList.remove("middle");

    // clear classlist
    element.classList = "";
    element.classList.add("bigCrazy");
}
