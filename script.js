// Ждем загрузки страницы
window.addEventListener('load', () => {
    console.log("Игра загружена и готова к работе!");
    
    // Можно добавить автоматический фокус на окно с игрой, 
    // чтобы управление клавишами работало сразу.
    const gameFrame = document.querySelector('.game-frame');
    gameFrame.focus();
});
