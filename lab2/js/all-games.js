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

function displayAllGames() {
    const allGamesContainer = document.getElementById('all-games');
    allGamesContainer.innerHTML = ''; 

    const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];

    games.forEach(game => {
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
            <button class="favorite-btn">Додати до улюблених</button>
        `;
        allGamesContainer.appendChild(gameBlock);
    });

   
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const gameBlock = event.target.closest('.block');
            const gameName = gameBlock.querySelector('h3').textContent;
            gameBlock.classList.toggle('favorite');

            let favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];
            if (gameBlock.classList.contains('favorite')) {
                favoriteGames.push(gameName);
            } else {
                favoriteGames = favoriteGames.filter(name => name !== gameName);
            }
            localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
        });
    });
}


window.onload = displayAllGames;