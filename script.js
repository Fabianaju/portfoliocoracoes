document.addEventListener('DOMContentLoaded', () => {
    // Função para criar corações animados
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.getElementById('hearts-container').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Criar corações a cada 500ms
    setInterval(createHeart, 500);
});
