


// CAMPO PESQUISA
const campoPesquisa = document.getElementById("pesquisa");

campoPesquisa.addEventListener("input", function() {
    const termoBuscado = this.value.toLowerCase().trim();
    const todosOsCards = document.querySelectorAll(".card");
    
    todosOsCards.forEach(function(card) {
        const conteudoCard = card.textContent.toLowerCase();
        
        if (termoBuscado === "" || conteudoCard.includes(termoBuscado)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// CONTROLES DE ACESSIBILIDADE
let tamanhoFonte = 16;

// Botão para AUMENTAR o texto 
document.getElementById("aumentar").onclick = () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";

};

// Botão para DIMINUIR o texto
document.getElementById("diminuir").onclick = () => {
    if (tamanhoFonte > 12) { // Evita que o texto fique muito pequeno
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    } 
};


// Botão de ALTO CONTRASTE 
document.getElementById("contraste").onclick = () => {
    
    document.body.classList.toggle("alto-contraste");
    const statusContraste = document.getElementById("status-contraste");
    
    if (document.body.classList.contains("alto-contraste")) {
        statusContraste.style.display = "block";
     
    } else {
        statusContraste.style.display = "none";
        
    }
};



/// DIVA MAPA

// INICIA COORDENADAS MAPA + ZOOM
const mapa = L.map('mapa').setView([-15.9672, -48.0451], 14);

//INSERE CAMADA DE IMAGENS DE REAIS DO SATELITE
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
}).addTo(mapa);


// INSERE MARCADOR
L.marker([-15.9672, -48.0451])
    .addTo(mapa)
    .bindPopup('<strong>Ponte Alta Norte</strong><br>Gama - Distrito Federal')
    .openPopup();


// INSERE CIRCULO DE ABRANGENCIA DA REGIAO
L.circle([-15.9672, -48.0451], {
    color: '#0a4ea1',        
    fillColor: '#0a4ea1',    
    fillOpacity: 0.1,       
    radius: 2000             
}).addTo(mapa);


// INSERE CONTROLE DE ZOOM
mapa.zoomControl.setPosition('topright');

//ADICIONA ESCALA
L.control.scale({
    imperial: false,  
    metric: true,     
    position: 'bottomleft'
}).addTo(mapa);