// Obtener los elementos de imagen de los logos y el modal
const logos = document.querySelectorAll('.logo-image');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeButton = document.querySelector('.close');

// Cuando se hace clic en una imagen de logo
logos.forEach(logo => {
    logo.addEventListener('click', (e) => {
        const img = e.target;
        modal.style.display = 'flex';  // Cambiado a 'flex' para centrado
        modalContent.src = img.src; // Cambia la imagen en el modal a la imagen del logo clickeado
        modalContent.classList.add('zoom'); // Aplica el efecto de zoom
    });
});

// Cuando se hace clic en el botón de cerrar
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.classList.remove('zoom'); // Elimina el efecto de zoom al cerrar
});

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalContent.classList.remove('zoom');
    }
});

// Función para abrir la imagen en pantalla completa (Ajustada con el modal existente)
function openFullscreen(imageSrc) {
    const fullscreenView = document.getElementById('fullscreen-view');
    const fullscreenImage = document.getElementById('fullscreen-image');
    
    // Establecer la imagen en el modal
    fullscreenImage.src = imageSrc;
    
    // Mostrar el modal de pantalla completa
    fullscreenView.style.display = 'block';
}

// Función para cerrar el modal de pantalla completa
function closeFullscreen() {
    const fullscreenView = document.getElementById('fullscreen-view');
    fullscreenView.style.display = 'none';
}

// Función para votar y contar los votos
function vote(logoId) {
    const voteCountElement = document.querySelector(`#${logoId} .vote-count`);
    let currentVotes = parseInt(voteCountElement.textContent.replace('Votos: ', ''));
    currentVotes++;
    voteCountElement.textContent = `Votos: ${currentVotes}`;
    
    // Guardar el número de votos en el localStorage
    localStorage.setItem(logoId, currentVotes);
}

// Función para cargar los votos guardados desde el localStorage
function loadVotes() {
    // Lista de los logos con sus ids
    const logos = ['logo1', 'logo2', 'logo3', 'logo4', 'logo5', 'logo6', 'logo7', 'logo8', 'logo9', 'logo10', 'logo11', 'logo12', 'logo13', 'logo14', 'logo15', 'logo16', 'logo17', 'logo18', 'logo19', 'logo20'];

    logos.forEach(logoId => {
        const storedVotes = localStorage.getItem(logoId);
        if (storedVotes !== null) {
            document.querySelector(`#${logoId} .vote-count`).textContent = `Votos: ${storedVotes}`;
        }
    });
}

// Llamar a la función para cargar los votos guardados cuando se carga la página
window.onload = loadVotes;
