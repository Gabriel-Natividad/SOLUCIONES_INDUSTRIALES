
document.addEventListener('DOMContentLoaded', function() {
    
    const whatsappLinks = document.querySelectorAll('.whatsapp-link');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const number = this.getAttribute('data-number');
            const mensaje = 'Hola, estoy interesado en sus productos y servicios industriales.';
            window.open(`https://wa.me/${number}?text=${encodeURIComponent(mensaje)}`, '_blank');
        });
    });

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            if (!nombre || !email || !mensaje) {
                alert('⚠️ Por favor, llena todos los campos obligatorios.');
                return;
            }
            
            const submitBtn = form.querySelector('.btn-primary');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.');
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    const headerWhatsapp = document.querySelector('.header-actions .btn-whatsapp');
    if (headerWhatsapp) {
        headerWhatsapp.addEventListener('click', function(e) {
            e.preventDefault();
            const mensaje = 'Hola, estoy interesado en cotizar productos y servicios industriales.';
            const number = '529932656845';
            window.open(`https://wa.me/${number}?text=${encodeURIComponent(mensaje)}`, '_blank');
        });
    }

    console.log('📞 Página de Contacto cargada');
});