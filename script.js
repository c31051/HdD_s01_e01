// Función para calcular y mostrar los años
function calculateYears() {
    const yearsInput = document.getElementById('yearsInput');
    const resultDiv = document.getElementById('result');
    const yearsValue = yearsInput.value.trim();

    // Validar que se haya ingresado un valor
    if (yearsValue === '') {
        alert('Por favor ingresa una cantidad de años');
        return;
    }

    // Validar que sea un número válido
    const years = parseFloat(yearsValue);
    if (isNaN(years) || years < 0) {
        alert('Por favor ingresa un número válido');
        yearsInput.value = '';
        return;
    }

    // Multiplicar años por 7 y mostrar el resultado
    const yearsMultiplied = years * 7;
    resultDiv.innerHTML = `<strong>✓ Tienes ${years} ${years === 1 ? 'año' : 'años'} = ${yearsMultiplied} en múltiplos de 7</strong>`;
    resultDiv.classList.add('show');
}

// Permitir calcular al presionar Enter
document.addEventListener('DOMContentLoaded', function() {
    const yearsInput = document.getElementById('yearsInput');
    yearsInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateYears();
        }
    });
});

