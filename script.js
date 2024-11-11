const screen = document.querySelector(".screen");
let text = "";

function buttonClick(btn) { // функция для отслеживания нажатия на кнопки
    switch(btn) {
        case '1':
            if( screen.innerText === '0' ) {
                screen.innerText = '1';
                text += '1';
            } else {
                screen.innerText += '1';
                text += '1';
            }
            break;

        case '2':
            if( screen.innerText === '0' ) {
                screen.innerText = '2';
                text += '2';
            } else {
                screen.innerText += '2';
                text += '2';
            }
            break;

        case '3':
            if( screen.innerText === '0' ) {
                screen.innerText = '3';
                text += '3';
            } else {
                screen.innerText += '3';
                text += '3';
            }
            break;

        case '4':
            if( screen.innerText === '0' ) {
                screen.innerText = '4';
                text += '4';
            } else {
                screen.innerText += '4';
                text += '4';
            }
            break;

        case '5':
            if( screen.innerText === '0' ) {
                screen.innerText = '5';
                text += '5';
            } else {
                screen.innerText += '5';
                text += '5';
            }
            break;

        case '6':
            if( screen.innerText === '0' ) {
                screen.innerText = '6';
                text += '6';
            } else {
                screen.innerText += '6';
                text += '6';
            }
            break;

        case '7':
            if( screen.innerText === '0' ) {
                screen.innerText = '7';
                text += '7';
            } else {
                screen.innerText += '7';
                text += '7';
            }
            break;
            
        case '8':
            if( screen.innerText === '0' ) {
                screen.innerText = '8';
                text += '8';
            } else {
                screen.innerText += '8';
                text += '8';
            }
            break;
            
        case '9':
            if( screen.innerText === '0' ) {
                screen.innerText = '9';
                text += '9';
            } else {
                screen.innerText += '9';
                text += '9';
            }
            break;

        case '0':
            if( screen.innerText === '0' ) {
                return
            } else {
                screen.innerText += '0';
                text += '0';
            }
            break;
        


        case '+':
            screen.innerText += '+';
            text += '+';
            break;

        case '−':
            screen.innerText += '−';
            text += '-';
            break;

        case '×':
            screen.innerText += '×';
            text += '*';
            break;            
        
        case '÷':
            screen.innerText += '÷';
            text += '/';
            break;

        case '←':
            if(screen.innerText.length === 1) {
                screen.innerText = '0';
                text = '0';
            } else {
                screen.innerText = screen.innerText.slice(0, -1);
                text = text.innerText.slice(0, -1);
            }
            break;
        
        case 'C':
            screen.innerText = '0';
            text = '0';
            break;

        case '=':
            screen.innerText = eval(text);
            text = eval(text)
            break;
        
        case '%':
            screen.innerText += '%';
            text += '%';
            break;

        case ',':
            screen.innerText += ',';
            text += '.';
            break;

    }
}