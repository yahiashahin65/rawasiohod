window.onload = function() {
    // مسح الـ Hash من الرابط عشان ميفضلش فاتح في نص الصفحة
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname);
    }
    // إجبار المتصفح يطلع لفوق
    window.scrollTo(0, 0);
};

// حركة خفيفة للهيدر عند النزول
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.height = '75px';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.height = '90px';
    }
});
