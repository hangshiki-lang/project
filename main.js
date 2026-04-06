const numbersContainer = document.getElementById('numbers-container');
const generateButton = document.getElementById('generate-button');
const themeToggleButton = document.getElementById('theme-toggle');
const resetButton = document.getElementById('reset-button'); // Added reset button reference
const htmlElement = document.documentElement;

// Function to set the theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Function to toggle the theme
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Function to reset the application (clear numbers)
function resetApplication() {
    numbersContainer.innerHTML = ''; // Clear displayed numbers
    // Optionally, reset theme to default or last saved here if desired
}

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light theme if no preference is saved
        setTheme('light');
    }
});

generateButton.addEventListener('click', () => {
    generateLottoNumbers();
});

themeToggleButton.addEventListener('click', toggleTheme);
resetButton.addEventListener('click', resetApplication); // Added event listener for reset button

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
