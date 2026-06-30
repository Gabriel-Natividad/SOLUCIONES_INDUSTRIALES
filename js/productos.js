
document.addEventListener('DOMContentLoaded', function() {
    
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const productCards = document.querySelectorAll('.producto-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    const quickViewBtns = document.querySelectorAll('.btn-quick-view');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productName = this.getAttribute('data-product');
            alert(`📦 ${productName}\n\nPara más información, contáctanos por WhatsApp o llena el formulario de contacto.\n\n📞 +52 993 265 6845`);
        });
    });

    console.log('📦 Página de Productos cargada');
});