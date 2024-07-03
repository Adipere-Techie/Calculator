document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonValue = event.target.innerText;
            handleButtonClick(buttonValue);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += value;
        }
    }
});
