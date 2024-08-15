//Array of quotes
const quotes = [
    "Well-behaved women seldom make history.",
    "Who knows what women can be when they are finally free to become themselves.",
    "Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.",
    "When someone shows you who they are, believe them the first time.",
    "Love costs all we are and will ever be. Yet it is only love which sets us free."
]
// Keeps track of which quotes have already been shown
const usedIndexes = new Set();
// Function to generate and display a new quote
function generateQuote() {
    const quoteElement = document.getElementById("quote");
    // Reset used indexes if all quotes have been shown 
    if (usedIndexes.size >= quotes.length) {
        // Clears the Set to allow all quotes to be shown again
        usedIndexes.clear();
    }
    // Loop to find a new, unused quote
    while (true) {
        // Generate a random index
        const randomIdx = Math.floor(Math.random() * quotes.length);
        // Skip if this quote has already been shown
        if (usedIndexes.has(randomIdx)) continue;
        // Selects the quote at the random index
        const quote = quotes[randomIdx];
        // Display the selected quote
        quoteElement.innerHTML = quote;
        // Mark this index as used
        usedIndexes.add(randomIdx);
        break; //Exit the loop after displaying the quote
    }
}

/*Thought Process Summary
1. Understand Requirements: Determine the need to display quotes randomly and avoid repetitions.
2. Plan Data Structure: Use an array for quotes and a set for tracking displayed quotes.
3. Design the Function:
- Handle resetting of the tracking set.
- Ensure unique quote selection.
- Update the display with the selected quote.
- Mark the quote as used.
4. Implement and Test: Write the code following the designed steps and test to ensure it meets requirements.*/