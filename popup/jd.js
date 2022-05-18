$(function() {
    window.setTimeout(function() {
        $(".main-container").fadeIn();
    }, 5000)
    $("#no-thanks").click(function() {
        $(".main-container").fadeOut();
    })
});