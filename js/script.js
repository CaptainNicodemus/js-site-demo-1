function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = currentVal - 1;
    if (currentVal <= 0) {
        newVal = 0
    }

    document.getElementById("countDownButton").innerHTML = newVal;

}