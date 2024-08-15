// основной файл скриптов

// для подсветки активного меню
document.querySelectorAll('.l-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.l-menu a.active').classList.remove('active');
        this.classList.add('active');
    });
});