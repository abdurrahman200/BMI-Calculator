const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const successButton = document.getElementById("successBtn");
const resetButton = document.getElementById("resetBtn");
const result = document.getElementById("bmi");
const message = document.getElementById("bmi_text");

/* = = = = = = = = = = = = */
function calculateBMI() {
    let height, weight, bmi;
    height = Number(heightInput.value);
    weight = Number(weightInput.value);
    bmi = weight / (height * 0.0254 * height * 0.0254);

    result.innerText = bmi.toFixed(2);
    let msg = showMessage(bmi);
    message.innerText = msg;
}

function showMessage(isBMI) {
    if (isBMI < 16) {
        return "You are Severe Thin";
    } else if (isBMI >= 16 && isBMI <= 17) {
        return "You are Moderate Thin";
    } else if (isBMI > 17 && isBMI <= 18.5) {
        return "You are Mid Thin";
    } else if (isBMI > 18.5 && isBMI <= 25) {
        return "You are Normal";
    } else if (isBMI > 25) {
        return "You are Overweight";
    }
}
function reset() {
    heightInput.value = '';
    weightInput.value = '';
    result.innerText = ' - - - - ';
    message.innerText = '';
}
function eventHandler() {
    if (Number(heightInput.value) && Number(weightInput.value)) {
        calculateBMI()
    }
    else {
        alert('Invalid Input');
        reset();
    }
}
successButton.addEventListener('click', eventHandler);
resetButton.addEventListener('click', reset);