document.getElementById('consumo-form').addEventListener('submit', function(event) {
    event.preventDefault();
  

  
    const kwhConsumidos = parseInt(document.getElementById('kwhConsumidos').value);
  
    let cargoFijo = 41.34;
    if (kwhConsumidos > 100) {
      cargoFijo = 127.83;
    }
  
    let totalPagar = cargoFijo;
  
    let detalle = '';
  
    if (kwhConsumidos <= 200) {
      const primeraEscala = (kwhConsumidos * 6.17).toFixed(2);
      totalPagar += parseFloat(primeraEscala);
      detalle = `Energía ${kwhConsumidos} kWh X RD$6.17 = RD$${primeraEscala}`;
    } else if (kwhConsumidos <= 300) {
      const primeraEscala = (200 * 6.17).toFixed(2);
      const segundaEscala = ((kwhConsumidos - 200) * 8.71).toFixed(2);
      totalPagar += parseFloat(primeraEscala) + parseFloat(segundaEscala);
      detalle = `Energía 200 kWh X RD$6.17 = RD$${primeraEscala}<br>Energía ${kwhConsumidos - 200} kWh X RD$8.71 = RD$${segundaEscala}`;
    } else if (kwhConsumidos <= 700) {
      const primeraEscala = (200 * 6.17).toFixed(2);
      const segundaEscala = (100 * 8.71).toFixed(2);
      const terceraEscala = ((kwhConsumidos - 300) * 13.04).toFixed(2);
      totalPagar += parseFloat(primeraEscala) + parseFloat(segundaEscala) + parseFloat(terceraEscala);
      detalle = `Energía 200 kWh X RD$6.17 = RD$${primeraEscala}<br>Energía 100 kWh X RD$8.71 = RD$${segundaEscala}<br>Energía ${kwhConsumidos - 300} kWh X RD$13.04 = RD$${terceraEscala}`;
    } else {
      const cuartaEscala = (kwhConsumidos * 13.26).toFixed(2);
      totalPagar += parseFloat(cuartaEscala);
      detalle = `Energía ${kwhConsumidos} kWh X RD$13.26 = RD$${cuartaEscala}`;
    }
  
    document.getElementById('result').innerHTML = `
      <h3>Resultado:</h3>
      <p>kWh Consumidos: ${kwhConsumidos}</p>
      <p>Cargo Fijo 30 días: RD$${cargoFijo.toFixed(2)}</p>
      <p>${detalle}</p>
      <p>Total a Pagar: RD$${totalPagar.toFixed(2)}</p>
    `;
  });
  