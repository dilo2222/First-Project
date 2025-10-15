const listEl = document.querySelector(".important__list")
const wrapperEl = document.querySelector(".important__wrapper")


const createButton = (btnName, parentEl) => {
    const btn = document.createElement("button")
    btn.textContent = btnName
    parentEl.append(btn)
}

//const addBTn = createButton("Add", wrapperEl )
//const removeBTn = createButton("Remove", wrapperEl )
