const board = document.querySelector("#board")
const box = document.querySelectorAll(".box")
const NewGame = document.querySelector("#NewGame")

NewGame.addEventListener("click", randomColor)


function randomColor () {
    const arr = []
    for (key of box) {
        const R = Math.floor(Math.random()*255)
        const G = Math.floor(Math.random()*255)
        const B = Math.floor(Math.random()*255)
        if (!arr.includes(`rgb(${R} ${G} ${B})`)) {
            key.style.backgroundColor=`rgb(${R} ${G} ${B})`
            key.innerText=`rgb(${R} ${G} ${B})`
            arr.push(`rgb(${R} ${G} ${B})`)
        } else {
            randomColor()
        }
    }
}

