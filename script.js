// Datos de las conexiones (basados en el catálogo de Grupo Tinsa)
const conexiones = [
    "Codo 45°", "Codo 90°", "Codo reducido", "Niple",
    "Cople", "Reducciones", "Stub end", "Tapones",
    "Tee's", "Tuerca unión", "Clamp inoxidable",
    "Nipolet", "Sockolet", "Threadolet", "Weldolet",
    "Latrolet", "Elbolet", "Sweepolet"
];

const bridas = [
    "Brida socket", "Brida socket weld", "Brida deslizable",
    "Brida lap joint", "Brida ciega"
];

// Función para renderizar una lista en un grid
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

// Renderizar conexiones (usamos un ícono genérico de engranaje/pipe)
renderizarItems('gridConexiones', conexiones, 'fa-pipe');

// Renderizar bridas (ícono de engranaje o brida)
renderizarItems('gridBridas', bridas, 'fa-cog');

// (Opcional) Pequeña mejora: si el usuario hace clic en un item, muestra alerta informativa
document.addEventListener('click', function(e) {
    const item = e.target.closest('.item-catalogo, .item-brida');
    if (item) {
        const nombre = item.querySelector('span')?.innerText || 'Producto';
        alert(`🚧 ${nombre} — Disponible para compras mayoritarias. Cotiza por WhatsApp.`);
    }
});

console.log('✅ Soluciones Ind. y Petroleras Magaña — Sitio para compras mayoritarias');