const text = document.querySelector(".lotustext");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i < splitText.length; i++) {
    text.innerHTML+= "<span>"+ splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === split.Text.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}