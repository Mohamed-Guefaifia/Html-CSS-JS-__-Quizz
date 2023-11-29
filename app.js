const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✅", "✨", "👀", "😭", "👎"]


const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const results = [];
    const radioButtons = document.querySelectorAll("input[type='radio']:checked")

    radioButtons.forEach((radioButton, index) => {
        if (radioButton.value === responses[index]) {
            results.push(true)
        } else {
            results.push(false)
        }
    })

    showResult(results)

}

const titleResult = document.querySelector(".results h2")
const markResult = document.querySelector(".mark")
const helpResult = document.querySelector(".help")


function showResult(results) {
    const numberError = results.filter(el => el === false).length;
    switch (numberError) {
        case 0:
            titleResult.titleResult = "Bravo, c'est un sans faute !"
            helpResult.style.display = "block"
            helpResult.styleContent = "Quelle culture ..."
            markResult.style.display = "block"
            markResult.innerHTML = "Score :<span> 5 / 5</span>"
            break;
        case 1:
            titleResult.titleResult = "✨ Vous y etes presque ! ✨"
            helpResult.style.display = "block"
            helpResult.styleContent = "Retentez une autre reponse dans la case rouge, puis re-validez !"
            markResult.style.display = "block"
            markResult.innerHTML = "Score :<span> 4 / 5</span>"
            break;
        case 2:
            titleResult.titleResult = "✨ Encore un effort ! 👀"
            helpResult.style.display = "block"
            helpResult.styleContent = "Retentez une autre reponse dans la case rouges, puis re-validez !"
            markResult.style.display = "block"
            markResult.innerHTML = "Score :<span> 3 / 5</span>"
            break;
        case 3:
            titleResult.titleResult = "👀 Il reste quelques erreurs. ! 😭"
            helpResult.style.display = "block"
            helpResult.styleContent = "Retentez une autre reponse dans la case rouge, puis re-validez !"
            markResult.style.display = "block"
            markResult.innerHTML = "Score :<span> 2 / 5</span>"
            break;
        case 4:
            titleResult.titleResult = "😭 Peut mieux faire  ! 😭"
            helpResult.style.display = "block"
            helpResult.styleContent = "Retentez une autre reponse dans la case rouge, puis re-validez !"
            markResult.style.display = "block"
            markResult.innerHTML = "Score :<span> 1 / 5</span>"
            break;
        case 5:
            titleResult.titleResult = "👎 Peut mieux faire  ! 👎"
            helpResult.style.display = "block"
            helpResult.styleContent = "Retentez une autre reponse dans la case rouge, puis re-validez !"
            markResult.style.display = "block"
            markResult.innerHTML = "Score :<span> 0 / 5</span>"
            break;
        default:
            titleResult.textContent = "Wops, cas Innatendu"


    }
}
