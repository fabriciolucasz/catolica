window.onload = function() {
    const isLogged = "Usuário"
    const notLogged = "Visitante" ?? isLogged
    const text = document.getElementById("welcome_text")
    text.innerText = text.innerText.replace("${visitant}", notLogged)
    console.log(text)
}