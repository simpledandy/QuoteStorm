
document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { text: "The only source of knowledge is experience.", author: "Albert Einstein" },
  { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein" },
  { text: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.", author: "Albert Einstein" },
  { text: "The only thing that interferes with my learning is my education.", author: "Albert Einstein" },
  { text: "Anyone who has never made a mistake has never tried anything new.", author: "Albert Einstein" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
  { text: "I have no special talent. I am only passionately curious.", author: "Albert Einstein" },
  { text: "The true sign of intelligence is not knowledge but imagination.", author: "Albert Einstein" },
  { text: "Once we accept our limits, we go beyond them.", author: "Albert Einstein" },
  { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein" },
  { text: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
  { text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.", author: "Albert Einstein" },
  { text: "Peace cannot be kept by force; it can only be achieved by understanding.", author: "Albert Einstein" },
  { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
  { text: "Education is what remains after one has forgotten what one has learned in school.", author: "Albert Einstein" },
  { text: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein" },
  { text: "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.", author: "Albert Einstein" },
  { text: "The only way to escape the corruptible effect of praise is to go on working.", author: "Albert Einstein" },
  { text: "The difference between stupidity and genius is that genius has its limits.", author: "Albert Einstein" },
  // Add more quotes here...
];

  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  const newQuoteButton = document.getElementById("new-quote");

  const copyStatusElement = document.getElementById("copy-status")
  const shareTwitterButton = document.getElementById("share-twitter");
  const copyButton = document.getElementById("copy-quote");

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteTextElement.textContent = randomQuote.text;
    quoteAuthorElement.textContent = randomQuote.author;

    updateBackgroundColor();
  }

  function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function updateBackgroundColor() {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;

    document.getElementById("fc").style.color = randomColor;
    // Calculate complementary color
    const backgroundColor = new tinycolor(randomColor);
    const complementaryColor = backgroundColor.spin(180).toString();

    // Apply complementary color to buttons
    document.getElementById("new-quote").style.color = complementaryColor;
    document.getElementById("copy-quote").style.color = complementaryColor;
    document.getElementById("share-twitter").style.color = complementaryColor;
}


  function copyToClipboard() {
    const quote = quoteTextElement.textContent;
    navigator.clipboard.writeText(quote)
      .then(() => {
        copyStatusElement.textContent = 'Quote copied to clipboard';
        copyStatusElement.style.color = '#5bc0de'; // Change color to match success buttons
        copyStatusElement.style.visibility = 'visible';
        copyStatusElement.style.opacity = '1';
        console.log('Quote copied to clipboard');
  
        // Hide the message after 5 seconds
        setTimeout(() => {
          copyStatusElement.style.visibility = 'hidden';
          copyStatusElement.style.opacity = '0';
        }, 5000); // 5000 milliseconds (5 seconds)
      })
      .catch((error) => {
        copyStatusElement.textContent = 'Failed to copy quote';
        copyStatusElement.style.color = '#d9534f'; // Change color to match error buttons
        copyStatusElement.style.visibility = 'visible';
        copyStatusElement.style.opacity = '1';
        console.error('Failed to copy quote: ', error);
  
        // Hide the message after 5 seconds
        setTimeout(() => {
          copyStatusElement.style.visibility = 'hidden';
          copyStatusElement.style.opacity = '0';
        }, 5000); // 5000 milliseconds (5 seconds)
      });
  }
  
  
  function shareOnTwitter() {
    const quote = quoteTextElement.textContent;
    const author = quoteAuthorElement.textContent;
    const tweetText = encodeURIComponent(`"${quote}" - ${author}`);
    const twitterURL = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterURL, "_blank");
  }

  copyButton.addEventListener("click", copyToClipboard);
  newQuoteButton.addEventListener("click", generateRandomQuote);
  shareTwitterButton.addEventListener("click", shareOnTwitter);
  generateRandomQuote();

});