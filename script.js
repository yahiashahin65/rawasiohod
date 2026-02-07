window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(13, 13, 13, 0.98)';
        header.style.height = '70px';
    } else {
        header.style.background = 'rgba(13, 13, 13, 0.9)';
        header.style.height = '80px';
    }
});
