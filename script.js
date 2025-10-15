const wrapperEl = document.querySelector(".important__list")


const createButton = (btnName, parentEl) => {
    const btn = document.createElement("button")
    btn.textContent = btnName
    parentEl.append(btn)
}

//const addBTn = createButton("Add") // add parent el
