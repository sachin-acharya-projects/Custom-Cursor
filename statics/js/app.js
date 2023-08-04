const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => {
    const target = e.target
    const computedStyle = window.getComputedStyle(target)

    const cursorStyle = computedStyle.getPropertyValue("--cursor")
    if (cursorStyle === "pointer") {
        if (!cursor.classList.contains("hover")) cursor.classList.add("hover")
    } else {
        if (cursor.classList.contains("hover")) cursor.classList.remove("hover")
    }
    cursor.style.top = e.clientY + "px"
    cursor.style.left = e.clientX + "px"
})
