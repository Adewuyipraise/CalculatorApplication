// Add your JavaScript here
function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function deleteCharacter() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function changeTheme() {
    const calculator = document.querySelector('.calculator');
    const themeRadio = document.querySelector('input[name="theme"]:checked');
    const theme = themeRadio.value;
    calculator.className = 'calculator ' + theme + '-theme';
}

// Attach event listener to handle theme change on radio button selection
const themeRadios = document.querySelectorAll('input[name="theme"]');
themeRadios.forEach(function (radio) {
    radio.addEventListener('change', changeTheme);
});