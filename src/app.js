/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cartas = [];
  let registros = [];

  document.getElementById("generar").addEventListener("click", generarCartas);
  document.getElementById("ordenar").addEventListener("click", ordenarCartas);

  function ordenarCartas() {
    for (let i = 0; i < cartas.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < cartas.length; j++) {
        if (cartas[j] < cartas[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [cartas[i], cartas[minIdx]] = [cartas[minIdx], cartas[i]];
      }
    }
    mostrarCartas();
  }

  function generarCartas() {
    const cantidad = parseInt(document.getElementById("cantidad").value, 10);
    cartas = [];
    registros = [];

    if (!cantidad) {
      alert("Ingrese una cantidad válida de cartas.");
      return;
    }

    const valoresNegros = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    const palosNegros = ["♠️", "♣️", "♥️", "♦️"];

    for (let i = 0; i < cantidad; i++) {
      const valor =
        valoresNegros[Math.floor(Math.random() * valoresNegros.length)];
      const palo = palosNegros[Math.floor(Math.random() * palosNegros.length)];
      const carta = `${palo} ${valor}`;
      cartas.push(carta);
    }
    mostrarCartas();
  }

  function mostrarCartas() {
    const cartasUl = document.getElementById("cartas");
    cartasUl.innerHTML = "";
    cartas.forEach(carta => {
      const li = document.createElement("li");
      li.textContent = carta;
      cartasUl.appendChild(li);
    });
  }

  function ordenarCartas() {
    const cartasOrdenadasUl = document.getElementById("cartas-ordenadas");
    cartasOrdenadasUl.innerHTML = ""; // Borra cualquier contenido anterior de la lista ordenada

    const cartasOrdenadas = [...cartas]; // Crea una copia de las cartas originales para no modificarlas

    for (let i = 0; i < cartasOrdenadas.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < cartasOrdenadas.length; j++) {
        if (cartasOrdenadas[j] < cartasOrdenadas[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [cartasOrdenadas[i], cartasOrdenadas[minIdx]] = [
          cartasOrdenadas[minIdx],
          cartasOrdenadas[i]
        ];
      }
    }

    cartasOrdenadas.forEach(carta => {
      const li = document.createElement("li");
      li.textContent = carta;
      cartasOrdenadasUl.appendChild(li);
    });
  }
};
