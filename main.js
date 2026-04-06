const numbersContainer = document.getElementById('numbers-container');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    displayNumbers(Array.from(numbers));
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);
    }
}
