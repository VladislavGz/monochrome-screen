const data = [
    'hello world',
    'data data\ndata data data data\ndata data data data data data\ndata data data\ndata data data data data data\ndata data data data\ndata data data data data '
];

const config = {
    printTime: 10,
};


const paragraphTemplate = document.querySelector('#screen-paragraph-template').content.querySelector('.screen-paragraph');
const screenElem = document.querySelector('.screen');

function addSymbol (paragraph, symbol) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (symbol === '\n') symbol = '<br>';
            paragraph.innerHTML += symbol;
            resolve();
        }, config.printTime);
    });
}

async function addParagraph (screen, str) {
    const p = paragraphTemplate.cloneNode();
    screen.append(p);
    if (p.previousElementSibling) p.previousElementSibling.classList.remove('screen-paragraph_cursor');
    for (let c of str) {
        await addSymbol(p, c);
    }
}

addParagraph(screenElem, data[1]);