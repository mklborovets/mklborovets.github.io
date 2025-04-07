document.addEventListener('DOMContentLoaded', function () {
    const totalGames = 12; 
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text'); 

    function updateProgressBar() {
        const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || []; 
        const selectedGames = favoriteGames.length; 
        const progressPercentage = (selectedGames / totalGames) * 100; 

        progressBar.style.width = progressPercentage + '%'; 
        progressText.textContent = `${selectedGames} з ${totalGames} ігор обрано`; 
    }

    updateProgressBar();

    window.addEventListener('storage', updateProgressBar); 
});