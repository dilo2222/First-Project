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

const editEl = document.querySelector(".edit")
const editAddEl = document.querySelector(".edit_add")
const editcancelEl = document.querySelector(".edit_remove")
const editinputEl = document.querySelector(".edit__input")
const editoverlayEl = document.querySelector(".edit__overlay")

let currentEditSpan = null

editcancelEl.addEventListener("click", function (e) {
    editoverlayEl.classList.toggle("hidden")
    editEl.classList.toggle("hidden")
    editinputEl.value = ""
})

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
        const div2 = document.createElement("div")
        div2.classList.add("important__divBtn")

        const spanValue = createSpan(inputEl.value)
        const btnEdit = document.createElement("button")
        btnEdit.classList.add("important__edit")
        btnEdit.textContent = "Edit"
        const btnRemove = document.createElement("button")
        btnRemove.classList.add("important__remove")
        btnRemove.textContent = "Delete"
        div2.append(btnEdit, btnRemove)

        divContainer.append(spanValue, div2)
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

listEl.addEventListener("click", function (e) {
    if (e.target.classList.contains("important__remove")) {
        const liEl = e.target.closest(".important__item")
        liEl.remove()
        editinputEl.value = ""
    } else if (e.target.classList.contains("important__edit")) {
        editEl.classList.toggle("hidden")
        editoverlayEl.classList.toggle("hidden")
        const li = e.target.closest(".important__item")
        const span = li.querySelector(".important__span")

        currentEditSpan = span
        editinputEl.value = span.textContent
    }
})

editAddEl.addEventListener("click", function (e) {
    if (!editinputEl.value || !currentEditSpan) return
    currentEditSpan.textContent = editinputEl.value
    editoverlayEl.classList.toggle("hidden")
    editEl.classList.toggle("hidden")
    currentEditSpan = null
    editinputEl.value = ""
})






