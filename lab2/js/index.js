const games = [
    { name: "For Honor", img: "img/Game1.png", players: 5902, genre: "Екшн / Файтинг", rating: 4.2 },
    { name: "Leage of Legends", img: "img/Game2.png", players: 4654, genre: "MOBA", rating: 4.7 },
    { name: "Stray", img: "img/Game3.png", players: 3826, genre: "Пригодницька / Головоломка", rating: 4.6 },
    { name: "Crysis", img: "img/Game4.png", players: 2997, genre: "Шутер від першої особи (FPS)", rating: 4.4 },
    { name: "Cyberpunk 2077", img: "img/Game5.png", players: 1234, genre: "RPG", rating: 4.5 },
    { name: "Minecraft", img: "img/Game6.png", players: 7890, genre: "Пісочниця", rating: 4.8 },
    { name: "The Witcher 3: Wild Hunt", img: "img/Game7.png", players: 4321, genre: "RPG", rating: 4.9 },
    { name: "Overwatch", img: "img/Game8.png", players: 5678, genre: "Шутер від першої особи (FPS)", rating: 4.3 },
    { name: "Fortnite", img: "img/Game9.png", players: 8765, genre: "Королівська битва", rating: 4.6 },
    { name: "Apex Legends", img: "img/Game10.png", players: 6543, genre: "Королівська битва", rating: 4.7 },
    { name: "Valorant", img: "img/Game11.png", players: 3456, genre: "Шутер від першої особи (FPS)", rating: 4.5 },
    { name: "Ark", img: "img/Game12.png", players: 2345, genre: "Пригодницька / Виживання", rating: 4.8 }
];

function generateRandomGames() {
    const recommendedGamesContainer = document.getElementById('recommended-games');
    recommendedGamesContainer.innerHTML = ''; 

    const numberOfGames = 4; 
    let selectedGames = [];
    let i = 0;

    while (i < numberOfGames) {
        const randomIndex = Math.floor(Math.random() * games.length);
        const selectedGame = games[randomIndex];

        if (!selectedGames.includes(selectedGame)) {
            selectedGames.push(selectedGame);
            i++;
        }
    }

    const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];

    selectedGames.forEach(game => {
        const gameBlock = document.createElement('div');
        gameBlock.classList.add('block');
        if (favoriteGames.includes(game.name)) {
            gameBlock.classList.add('favorite');
        }
        gameBlock.innerHTML = `
            <div class="image-container">
                <img src="${game.img}" alt="${game.name}">
            </div>
            <h3>${game.name}</h3>
            <p>${game.genre}</p>
            <span><img src="img/fire.png" alt="">${game.players} гравців</span>
            <p>Рейтинг: ${game.rating} ★</p>
        `;
        recommendedGamesContainer.appendChild(gameBlock);
    });
}

window.onload = generateRandomGames;

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('info-modal');
    const openModalBtn = document.getElementById('more-info-btn');
    const closeModalBtn = document.getElementById('close-modal');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const registerModal = document.getElementById('register-modal');
    const closeRegisterModal = document.getElementById('close-register-modal');
    const registerButtons = document.querySelectorAll('.btn[data-tournament]'); 
    const tournamentNameField = document.createElement('p');

    const form = document.getElementById('register-form');
    form.insertBefore(tournamentNameField, form.firstChild);

    registerButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tournamentName = button.getAttribute('data-tournament');
            tournamentNameField.textContent = `Турнір: ${tournamentName}`;
            registerModal.style.display = 'block';
        });
    });

    closeRegisterModal.addEventListener('click', function () {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const team = document.getElementById('team').value;

        console.log(`Ім'я: ${name}, Email: ${email}, Команда: ${team}`);
        alert('Реєстрація успішна!');

        registerModal.style.display = 'none';
        registerForm.reset();
    });
});