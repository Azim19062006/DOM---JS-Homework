document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".container img")

    images.forEach(image => {
        image.addEventListener("click", function () {
            const fullScreenImage = document.createElement("div")
            fullScreenImage.classList.add("full-screen-image")
            fullScreenImage.innerHTML = `<img src="${image.src}">`

            fullScreenImage.addEventListener("click", function () {
                document.body.removeChild(fullScreenImage)
            })

            document.body.appendChild(fullScreenImage)
        })
    })
})