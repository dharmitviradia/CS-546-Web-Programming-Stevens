$(document).ready(function() {
    $("#btn").click(function(e) {
        e.preventDefault()
        var number = $("#num").val()
        var flag = false
        if (number === undefined || number == null || number.length <= 0)
        throw alert ("Number is Null or Invalid")

        if (number <= 1 ) {
            flag = true
        }
        if (number == 2) {
            flag = false
        }

        for (i = 2; i <= number - 1; i++) {
            if (number % i == 0) {
                flag = true
                break
            }
        }
        if (flag === false)
        $("#attempts").append("<li>" + "<span class = 'is-prime'>" +number+ " is a prime number" + "</span>" +"</li>")
        else
        $("#attempts").append("<li>" + "<span class = 'not-prime'>" +number+ " is a not a prime number" + "</span>" +"</li>")
    })
})