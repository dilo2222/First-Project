const listEl = document.querySelector(".important__list")
const wrapperEl = document.querySelector(".important__wrapper")
const overlayEl = document.querySelector(".overlay")
const popEl = document.querySelector(".popup")
const addEl = document.querySelector(".popup_add")
const cancelEl = document.querySelector(".popup_remove")
const inputEl = document.querySelector(".popup__input")


const addBtn = document.querySelector(".important__add")
addBtn.addEventListener("click", function (e) {
    overlayEl.classList.toggle("hidden")
    popEl.classList.toggle("hidden")
})

cancelEl.addEventListener("click", function (e) {
    overlayEl.classList.toggle("hidden")
    popEl.classList.toggle("hidden")
})

addEl.addEventListener("click", function (e) {
    if (inputEl.value) {
        const liEl = document.createElement("li")
        liEl.classList.add("important__item")
        liEl.textContent = inputEl.value
        listEl.append(liEl)
        overlayEl.classList.toggle("hidden")
        popEl.classList.toggle("hidden")
        inputEl.value = ""
    }
})
