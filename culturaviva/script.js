// Função para lidar com o envio do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    
    // Captura dos valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validação básica
    if (name && email && message) {
        // Exibe uma mensagem de confirmação
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        formMessage.style.color = '#FFD700';
        
        // Animação para feedback visual
        formMessage.style.opacity = 1;
        setTimeout(() => {
            formMessage.style.opacity = 0; // Gradualmente desaparece após 3 segundos
        }, 3000);

        // Limpa os campos do formulário após o envio
        document.getElementById('contactForm').reset();
    } else {
        // Mensagem de erro se os campos não estiverem preenchidos
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});

// Adiciona efeito de zoom suave nas imagens da galeria
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)'; // Aumenta ligeiramente a imagem
        image.style.transition = 'transform 0.3s ease-in-out'; // Transição suave
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // Retorna a imagem ao tamanho original
    });
});
