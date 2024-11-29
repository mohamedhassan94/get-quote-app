var quoteBtn = document.getElementById("getQuote");
var quoteBody = document.getElementById("quoteBody");
var quoteAuthor = document.getElementById("quoteAuthor");

var quotes = [
  {
    id: 1,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 2,
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    id: 3,
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 4,
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 5,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 6,
    quote: "The only way to learn a new skill is by doing it.",
    author: "Bill Gates",
  },
  {
    id: 7,
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    id: 8,
    quote: "The only way to make your dreams come true is to wake up.",
    author: "Napoleon Hill",
  },
  {
    id: 9,
    quote: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    id: 10,
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
];

var currentQuote = null;

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var newQuote = quotes[randomIndex];
  if (currentQuote?.id === newQuote.id) {
    return getRandomQuote();
  }
  currentQuote = newQuote;
  return newQuote;
}

function displayQuote(quoteDetails) {
  quoteBody.textContent = quoteDetails.quote;
  quoteAuthor.textContent = quoteDetails.author;
}

quoteBtn.onclick = function () {
  displayQuote(getRandomQuote());
};
