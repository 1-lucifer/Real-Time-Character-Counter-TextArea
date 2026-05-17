const textarea = document.getElementById("message");
const count = document.getElementById("count");
const warning = document.getElementById("warning");

const maxChars = 200;

textarea.addEventListener("input", () => {
    let currentLength = textarea.value.length;

    // Prevent typing more than limit
    if (currentLength > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars);
        currentLength = maxChars;
    }

    // Update counter
    count.textContent = currentLength;

    // Show warning message
    if (currentLength === maxChars) {
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "";
    }
});