// تأثير ظهور العناصر عند التمرير (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تغيير خلفية الهيدر عند النزول للأسفل
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.padding = '10px 5%';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
        header.style.padding = '15px 5%';
    }
});
