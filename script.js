const conexiones = [
    "Codo 45°", "Codo 90°", "Codo reducido", "Niple",
    "Cople", "Reducciones", "Stub end", "Tapones",
    "Tee's", "Tuerca unión", "Clamp inoxidable",
    "Nipolet", "Sockolet", "Threadolet", "Weldolet",
    "Latrolet", "Elbolet", "Sweepolet"
];
b
const bridas = [
    "Brida socket", "Brida socket weld", "Brida deslizable",
    "Brida lap joint", "Brida ciega"
];

function renderizarItems(elementId, items, icono = 'fa-plug') {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    grid.innerHTML = items.map(item => `
        <div class="item-catalogo">
            <i class="fas ${icono}"></i>
            <span>${item}</span>
        </div>
    `).join('');
}

renderizarItems('gridConexiones', conexiones, 'fa-pipe');

renderizarItems('gridBridas', bridas, 'fa-cog');

document.addEventListener('click', function(e) {
    const item = e.target.closest('.item-catalogo, .item-brida');
    if (item) {
        const nombre = item.querySelector('span')?.innerText || 'Producto';
        alert(`🚧 ${nombre} — Disponible para compras mayoritarias. Cotiza por WhatsApp.`);
    }
});

console.log('✅ Soluciones Ind. y Petroleras Magaña — Sitio para compras mayoritarias');