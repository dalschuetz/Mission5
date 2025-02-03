// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("#btnSubmit").click(function () {

    let hours = $("#Hours").val()

    if ((/^\d+$/.test(hours))){
        $("#AnswerText").removeAttr("hidden");
        $("#Answer").removeAttr("hidden");
        $("#Answer").val("$" + hours * 20);
    }
    else {
        alert("Please enter a positive integer for: Hours");
    }
})
