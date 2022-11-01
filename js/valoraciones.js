const cardsContainer = document.getElementById("cards-container");

fetch("../json/comentarios.json")
.then(response => response.json())
.then(data => {
    data.forEach(valoracion => {
        let div = document.createElement('div');
        div.className = `card card${valoracion.id}`
        div.innerHTML = `
        <h5 class="cardName">${valoracion.nombre}</h5>
        <p class="cardContent">${valoracion.mensaje}</p>
        <p class="cardValoration">Puntuacion: ${valoracion.puntuacion}</p>
        `;

        cardsContainer.appendChild(div)
    });
})