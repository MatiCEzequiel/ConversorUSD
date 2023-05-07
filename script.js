function convertir() {
    const tipoCambio = 480; // Actualiza el valor del tipo de cambio aquí
  
    const pesosInput = document.getElementById("pesos");
    const dolaresInput = document.getElementById("dolares");
  
    const pesos = parseFloat(pesosInput.value);
    const dolares = pesos / tipoCambio;
  
    dolaresInput.value = dolares.toFixed(2);
  }
  
