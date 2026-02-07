// تغيير خلفية الهيدر عند التمرير فقط
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.height = '70px';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.height = '80px';
    }
});
