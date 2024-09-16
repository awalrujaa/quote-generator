let btn = document.getElementById('btn');
let output = document.getElementById('output');
let allQuotes = {
    science: [
        "The important thing is not to stop questioning. Curiosity has its own reason for existing. — Albert Einstein",
        "Science is a way of thinking much more than it is a body of knowledge. — Carl Sagan",
        "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. — Stephen Hawking",
        "The universe is under no obligation to make sense to you. — Neil deGrasse Tyson",
        "Science is the poetry of reality. — Richard Dawkins",
        "The scientist is not a person who gives the right answers, he's one who asks the right questions. — Claude Lévi-Strauss",
        "In science, there are no shortcuts to truth. — Karl Popper",
        "We cannot solve our problems with the same thinking we used when we created them. — Albert Einstein",
        "Somewhere, something incredible is waiting to be known. — Carl Sagan",
        "To confine our attention to terrestrial matters would be to limit the human spirit. — Stephen Hawking"
    ],
    motivation: [
        "The only way to do great work is to love what you do. — Steve Jobs",
        "Believe you can and you're halfway there. — Theodore Roosevelt",
        "The best way to predict the future is to create it. — Peter Drucker",
        "You miss 100% of the shots you don't take. — Wayne Gretzky",
        "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
        "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
        "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
        "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
        "You are never too old to set another goal or to dream a new dream. — C.S. Lewis"
    ],
};

let currentCategory = 'science';
let currentIndex = 0;
let quotes = allQuotes[currentCategory];

window.onload = function() {
    // Get the element where you want to display the quote
    const quoteDisplay = document.getElementById('output');
    quoteDisplay.textContent = quotes[currentIndex];
};

prevbtn.addEventListener('click', function(){
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length; // Loop back to the last quote if needed
    var prevQuote = quotes[currentIndex]
    output.innerHTML = prevQuote;
})

nextbtn.addEventListener('click', function(){
    currentIndex = (currentIndex + 1) % quotes.length; // Loop back to the first quote if needed
    var nextQuote = quotes[currentIndex]
    output.innerHTML = nextQuote;
})

randombtn.addEventListener('click', function(){
    console.log("random");
    currentIndex = Math.floor(Math.random() * quotes.length)
    var randomQuote = quotes[currentIndex]
    output.innerHTML = randomQuote;
})

category.addEventListener('change', function(){
    var select = document.getElementById('category');
    currentCategory = select.value;
    quotes = allQuotes[currentCategory];
    currentIndex = 0; // Reset index
    const quoteDisplay = document.getElementById('output');
    quoteDisplay.textContent = quotes[currentIndex];
})

const toggleCheckbox = document.getElementById('dark-mode-toggle');

// Check for saved user preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleCheckbox.checked = true;
}

toggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const increaseFontBtn = document.getElementById('increaseFont');
    const decreaseFontBtn = document.getElementById('decreaseFont');

    let currentFontSize = 20; // Initial font size in pixels

    increaseFontBtn.addEventListener('click', () => {
        if (currentFontSize < 25) { // Maximum font size
            currentFontSize += 2;
            output.style.fontSize = `${currentFontSize}px`;
        }
    });

    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > 12) { // Minimum font size
            currentFontSize -= 2;
            output.style.fontSize = `${currentFontSize}px`;
        }
    });
});

