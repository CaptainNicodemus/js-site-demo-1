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

// added in 1.01
$(document).ready(function () {
    $("#hidden").hover(function () {
        $(this).css("color", "black");
    },
        function () {
            $(this).hide();
        });

    $("#b1").click(function () {
        alert("I'm alerting you!");
    })
})

