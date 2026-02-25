// تشغيل مكتبة الانيميشن
AOS.init({
    duration: 1000,
    once: true
});

// تصفير السكرول عند التحميل
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// تأثير الهيدر عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
        header.style.height = '70px';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
        header.style.height = '80px';
    }
});
