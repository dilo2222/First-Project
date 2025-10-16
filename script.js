const listEl = document.querySelector(".important__list")
const wrapperEl = document.querySelector(".important__wrapper")
const overlayed = document.querySelector(".important__overlay")
const overlayEl = document.querySelector(".overlay")
const popEl = document.querySelector(".popup")
const addEl = document.querySelector(".popup_add")
const cancelEl = document.querySelector(".popup_remove")
const inputEl = document.querySelector(".popup__input")
const switchEl = document.querySelector(".important__switcher")

const addBtn = document.querySelector(".important__add")


addBtn.addEventListener("click", function (e) {
    overlayEl.classList.toggle("hidden")
    popEl.classList.toggle("hidden")
})

cancelEl.addEventListener("click", function (e) {
    overlayEl.classList.toggle("hidden")
    popEl.classList.toggle("hidden")
    inputEl.value = ""
})

function createSpan(name) {
    const spanEl = document.createElement("span")
    spanEl.classList.add("important__span")
    spanEl.textContent = name
    return spanEl
}


addEl.addEventListener("click", function (e) {
    if (inputEl.value) {
        const liEl = document.createElement("li")
        liEl.classList.add("important__item")
        listEl.append(liEl)
        const divContainer = document.createElement("div")
        divContainer.classList.add("important__div")
        const spanValue = createSpan(inputEl.value)
        const btnEdit = document.createElement("button")
        btnEdit.classList.add("important__edit")
        btnEdit.textContent = "Edit"
        divContainer.append(spanValue, btnEdit)
        liEl.append(divContainer)
        overlayEl.classList.toggle("hidden")
        popEl.classList.toggle("hidden")
        inputEl.value = ""
    } else {
        overlayEl.classList.toggle("hidden")
        popEl.classList.toggle("hidden")
    }
})


switchEl.addEventListener("click", function (e) {
    wrapperEl.classList.toggle("dark__wrapper"),
        overlayed.classList.toggle("dark"),
        addBtn.classList.toggle("dark"),
        switchEl.classList.toggle("dark")
})
