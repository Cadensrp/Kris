var handVisible = false;
var hand;
var messages = [
    "Are you sure?",
    "Please?",
    "Come on, You're hurting my feelings!",
    "Are you sure about this?",
    "Maybe you'll change your mind later.",
    "Not today?",
    "Alright, maybe next time!"
];
var messageIndex = 0;

function checkAnswer(answer) {
    if (answer) {
        alert("Yay! See you soon for a surprise!");
    } else {
        var confirmation = confirm(messages[messageIndex]);
        messageIndex = (messageIndex + 1) % messages.length;

        if (!confirmation) {
            if (!handVisible) {
                showHand();
            }
        }
    }
}

function showHand() {
    hand = document.getElementById("hand");
    hand.style.display = "block";
    handVisible = true;

    document.addEventListener("mousemove", moveHand);

    // Remove the hand and event listener after a short delay (5 seconds in this example)
    setTimeout(function () {
        hand.style.display = "none";
        handVisible = false;
        document.removeEventListener("mousemove", moveHand);
    }, 5000);
}

function moveHand(event) {
    hand.style.left = event.clientX + "px";
    hand.style.top = event.clientY + "px";
}

// Reset the hand visibility when the page is reloaded
window.addEventListener("beforeunload", function () {
    handVisible = false;
    if (hand) {
        hand.style.display = "none";
    }
    document.removeEventListener("mousemove", moveHand);
});
