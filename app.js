let celsiusInput = document.querySelector("#cel-input");
let fahrenheitInput = document.querySelector("#far-input");
function CtoF(c) {
    return ((c * 9 / 5) + 32).toFixed(1);
}
function FtoC(f) {
    return ((f - 32) * 5 / 9).toFixed(1);
}
let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', e => {
        if (e.target.id === "cel-input") {
            let celsius = parseFloat(celsiusInput.value);
            if (!isNaN(celsius)) {
                fahrenheitInput.value = CtoF(celsius);
            } else {
                fahrenheitInput.value = '';
            }
        } else if (e.target.id === "far-input") {
            let fahrenheit = parseFloat(fahrenheitInput.value);
            if (!isNaN(fahrenheit)) {
                celsiusInput.value = FtoC(fahrenheit);
            } else {
                celsiusInput.value = '';
            }
        }
    });
});
