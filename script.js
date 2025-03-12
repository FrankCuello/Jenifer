document.addEventListener('DOMContentLoaded', () => {
    const recipientElement = document.getElementById('recipient');
    const messageElement = document.getElementById('main-message');
    const flowersContainer = document.querySelector('.flowers');

    // Mensajes dinámicos
    const recipientName = "Jenifer";
    const messageText = "En poco tiempo me has demostrado ser una persona increíble.  Gracias por las risas, las conversaciones y por ser tan tú.";

    recipientElement.textContent = `Para ${recipientName}`;
    messageElement.textContent = messageText;

    // Función para crear flores
    function createFlower() {
        const flower = document.createElement('span');
        flower.classList.add('flower');
        flower.textContent = '🌸'; // Puedes cambiar el emoji de la flor

        // Posición horizontal aleatoria
        flower.style.left = Math.random() * 100 + 'vw';

        // Duración de la animación aleatoria (entre 5 y 15 segundos)
        const animationDuration = Math.random() * 10 + 5;
        flower.style.animationDuration = animationDuration + 's';

        // Retraso de la animación aleatorio para que no todas las flores caigan al mismo tiempo
        const animationDelay = Math.random() * 5;
        flower.style.animationDelay = '-' + animationDelay + 's';

        flowersContainer.appendChild(flower);

        // Eliminar la flor después de que termine la animación para evitar sobrecargar el DOM
        setTimeout(() => {
            flower.remove();
        }, animationDuration * 1000);
    }

    // Crear flores cada cierto tiempo (más o menos una nueva flor cada 0.5 segundos)
    setInterval(createFlower, 500);
});