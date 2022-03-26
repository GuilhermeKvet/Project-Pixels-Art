function selectPalette() {

    function selected(event) {
        let colors = document.querySelector('.selected');
        colors.classList.remove('selected');
        event.target.classList.add('selected');
    }

    preto.addEventListener('click', selected);
    amarelo.addEventListener('click', selected);
    azul.addEventListener('click', selected);
    vermelho.addEventListener('click', selected);
}
selectPalette();

function colorPixel() {

    document.addEventListener('click', function (event) {
        if (event.target.className == 'pixel') {
            let color = document.querySelector('.selected')
            event.target.style.backgroundColor = window.getComputedStyle(color).backgroundColor;
            //referencia = https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        }
    })
}
colorPixel();

function clearTable() {

    let button = document.getElementById('clear-board');

    button.addEventListener('click', function () {
        let pixels = document.querySelectorAll('.pixel');
        for (index = 0; index < pixels.length; index += 1) {
            let pixelColors = pixels[index]
            pixelColors.style.backgroundColor = 'white';
        }
    })
}
clearTable();

function newPixelBoard() {

    let button = document.getElementById('generate-board');

    button.addEventListener('click', pixelBoardSize)

    function pixelBoardSize() {

        let pixelBoard = document.getElementById('pixel-board');
        let input = document.getElementById('board-size');
        let pixels = document.querySelectorAll('.pixel');

        for (index = 0; index < pixels.length; index += 1) {
            if (input.value.length > 0) {
                pixels[index].parentNode.removeChild(pixels[index]);
            }
        }
        if (input.value > 50) {
            input.value = 50;
        }
        else if (input.value < 5 && input.value > 0) {
            input.value = 5;
        } 
        else if(input.value == '') {
            alert('Board inválido!');
        }
        if (input.value.length > 0) {
            pixelBoard.style.width = `${input.value * 42}px`;
            pixelBoard.style.height = `${input.value * 42}px`;
        }
        let inputValue = input.value * input.value

        for (index = 0; index < inputValue; index += 1) {
            let newPixel = document.createElement('div');

            newPixel.className = 'pixel';
            pixelBoard.appendChild(newPixel);
        }
    }
}
newPixelBoard();

function gerarCorAleatoria() {
    
    let amarelo = document.getElementById('amarelo');
    let azul = document.getElementById('azul');
    let vermelho = document.getElementById('vermelho');

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    let corAleatoria1 =  `rgba(${r}, ${g}, ${b})`;
    let corAleatoria2 =  `rgba(${g}, ${b}, ${r})`;
    let corAleatoria3 =  `rgba(${b}, ${r}, ${g})`;

    amarelo.style.background = corAleatoria1;
    azul.style.background = corAleatoria2;
    vermelho.style.background = corAleatoria3;
}
gerarCorAleatoria();