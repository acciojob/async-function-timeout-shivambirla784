//your JS code here. If required.
// Function to introduce a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to display message after delay
async function displayMessage() {
    // Retrieve input values
    const text = document.getElementById("text").value;
    const delayTime = parseInt(document.getElementById("delay").value, 10);

    // Clear previous output
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "";

    // Check if the input values are valid
    if (!text || isNaN(delayTime) || delayTime < 0) {
        outputDiv.textContent = "Please enter valid text and a non-negative delay.";
        return;
    }

    // Introduce delay using async/await
    await delay(delayTime);

    // Display the message after the delay
    outputDiv.textContent = text;
}

// Add event listener to the button
document.getElementById("btn").addEventListener("click", displayMessage);
