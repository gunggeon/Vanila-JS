const quotes = [
    {
        quote: "The way to get started is to quit to talking and begin doing",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans",
        author: "John Lennon",
    },
    {
        quote: "The World is a book and those who do not travel read only",
        author: "Saint Augustine"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author: "Nelson Mandela"
    },
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Despite the forecast, live like it’s spring. ",
        author: "Lilly pulitzer"
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why",
        author: "Mark Twain"
    },


]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;




