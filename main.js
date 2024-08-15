const data = [
    'hello world'
]


const paragraphTemplate = document.querySelector('#screen-paragraph-template').content.querySelector('.screen-paragraph');
const screenElem = document.querySelector('.screen');

function addParagraph (screen, str) {
    const p = paragraphTemplate.cloneNode();
    p.textContent = str;
    screen.append(p)
}

addParagraph(screenElem, data[0])

