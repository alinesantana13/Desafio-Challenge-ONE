const result = (message) => {
    let resultOnClick = document.getElementById("result");
    resultOnClick.innerHTML = `
    <div class="container__result">
        <textarea id="copy_text">${message}</textarea>
        <button class="button" onclick="copyText()">Copiar</button>
    </div>`;

    document.querySelector(".button").addEventListener('click', copyText);
}

const criptografar = () =>{
    let text = document.getElementById('text').value;

    let message = "Nenhuma mensagem foi encontrada";

    let arrayLetter = text.split("");

    if(text != ""){
        for (let index = 0; index < arrayLetter.length; index++) {
            let letter = arrayLetter[index];
            if (letter === "a") {
                arrayLetter[index] = "ai";
            } else if (letter === "e") {
                arrayLetter[index] = "enter";
            } else if (letter === "i") {
                arrayLetter[index] = "imes";
            } else if (letter === "o") {
                arrayLetter[index] = "ober";
            } else if (letter === "u") {
                arrayLetter[index] = "ufat";
            }  
        }
        message = arrayLetter.join("");
    }

    result(message);

    document.getElementById('text').value = "";
}

const descriptografar = () => {
    let text = document.getElementById('text').value;

    let message = "Nenhuma mensagem foi encontrada";

    let arrayLetter = [];

    if(text != ""){
        for (let index = 0; index < text.length; index++){
            if(text.includes("ai")){
                arrayLetter[text.indexOf("ai")] = "a";
                text = text.replace("ai", "**");
            }
            if(text.includes("enter")){
                arrayLetter[text.indexOf("enter")] = "e";
                text = text.replace("enter", "*****");
            }
            if(text.includes("imes")){
                arrayLetter[text.indexOf("imes")] = "i";
                text = text.replace("imes", "****");
            }
            if(text.includes("ober")){
                arrayLetter[text.indexOf("ober")] = "o";
                text = text.replace("ober", "****");
            }
            if(text.includes("ufat")){
                arrayLetter[text.indexOf("ufat")] = "u";
                text = text.replace("ufat", "****");
            }
            if(text.includes(" ")){
                arrayLetter[text.indexOf(" ")] = " ";
                text = text.replace(" ", "*");
            }
        }
        for (let j = 0; j < text.length; j++){
            if(text[j] != "*" && text[j] != " "){
                arrayLetter[j] = text[j]
            }
        }
        message = arrayLetter.join("")
    }

    result(message);

    document.getElementById('text').value = "";
}

const copyText = async () => {
    let text = document.querySelector("#copy_text").value;

    await navigator.clipboard.writeText(text);
}

