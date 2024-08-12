const quotes = [
    "Well-behaved women seldom make history.",
    "Who knows what women can be when they are finally free to become themselves.",
    "Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.",
    "When someone shows you who they are, believe them the first time.",
    "Love costs all we are and will ever be. Yet it is only love which sets us free."
]

const usedIndexes = new Set();

function generateQuote() {
    const quoteElement = document.getElementById("quote");

    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIdx)) continue;

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break;
    }
}
