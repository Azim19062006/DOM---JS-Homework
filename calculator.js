let first = document.querySelector("input[name='f_num']")
let second = document.querySelector("input[name='s_num']")
let operator_ = document.querySelector("select[name='operator']")
let resultDisplay = document.querySelector("p[name='res']")
let calculateButton = document.querySelector("button[type='submit']")

function Do() {
    let num1 = parseFloat(first.value)
    let num2 = parseFloat(second.value)
    let operator = operator_.value
    let result

    if (isNaN(num1) || isNaN(num2)) {
        alert("You cannot complete this operation!")
        return
    }

    switch (operator) {
        case "+":
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
        case "*":
            result = num1 * num2
            break
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error (division by zero)"
            break
        case "%":
            result = num1 % num2
            break
        default:
            result = "Invalid operator"
    }

    resultDisplay.innerHTML = `<strong>Result:</strong> ${result}`
}

calculateButton.addEventListener("click", function(event) {
    event.preventDefault()
    Do()
})