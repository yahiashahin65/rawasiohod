// تأثير بسيط عند التمرير
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 8%';
        header.style.background = 'rgba(13, 13, 13, 0.95)';
    } else {
        header.style.padding = '20px 8%';
        header.style.background = 'rgba(13, 13, 13, 0.8)';
    }
});
