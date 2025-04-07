const tournaments = [
    { name: "Summoner’s Showdown", game: "League of Legends", date: "березень 25, 2025", prize: "$50,000", requirements: "18+ років, ранг Diamond, або вище" },
    { name: "Battle of Legends", game: "For Honor", date: "квітень 20, 2025", prize: "$80,000", requirements: "Відкритий для всіх, один або команда (максимум 3 гравці)" },
    { name: "Ultimate Arena", game: "League of Legends", date: "квітень 15, 2025", prize: "$250,000", requirements: "18+ років, ранг Master, або вище" },
    { name: "Cyber Clash", game: "Cyberpunk 2077", date: "травень 10, 2025", prize: "$100,000", requirements: "18+ років, відкритий для всіх" },
    { name: "Minecraft Masters", game: "Minecraft", date: "червень 5, 2025", prize: "$60,000", requirements: "Відкритий для всіх, індивідуальні або командні змагання" }
];

function displayAllTournaments() {
    const allTournamentsContainer = document.getElementById('all-tournaments');
    allTournamentsContainer.innerHTML = '';

    tournaments.forEach(tournament => {
        const tournamentBlock = document.createElement('div');
        tournamentBlock.classList.add('block');
        tournamentBlock.innerHTML = `
            <h2>${tournament.name}</h2>
            <h3>${tournament.game}</h3>
            <p>Дата: ${tournament.date}</p>
            <p>Призовий фонд: ${tournament.prize}</p>
            <p>Вимоги: ${tournament.requirements}</p>
            <button class="btn" data-tournament="${tournament.name}">Зареєструватися</button>
        `;
        allTournamentsContainer.appendChild(tournamentBlock);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    displayAllTournaments();

    const registerModal = document.getElementById('register-modal');
    const closeRegisterModal = document.getElementById('close-register-modal');
    const tournamentNameField = document.createElement('p'); 

    const form = document.getElementById('register-form');
    form.insertBefore(tournamentNameField, form.firstChild);

    document.getElementById('all-tournaments').addEventListener('click', function (event) {
        if (event.target.classList.contains('btn')) {
            const tournamentName = event.target.getAttribute('data-tournament'); 
            tournamentNameField.textContent = `Турнір: ${tournamentName}`;
            registerModal.style.display = 'block';
        }
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

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const team = document.getElementById('team').value.trim();

        if (!name) {
            alert('Будь ласка, введіть ваше ім\'я.');
        } else if (!email) {
            alert('Будь ласка, введіть вашу електронну пошту.');
        } else {
            console.log(`Ім'я: ${name}, Email: ${email}, Команда: ${team}`);
            alert('Реєстрація успішна!');

            registerModal.style.display = 'none';
            registerForm.reset(); 
        }
    });
});