// الكود ده وظيفته يخلي الصفحة تبدأ من فوق ويمسح الـ #portfolio من الرابط فوراً
window.addEventListener('load', function() {
    // 1. مسح كلمة #portfolio من شريط العنوان بدون ريفريش
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname);
    }
    // 2. إجبار المتصفح على الصعود لأعلى الصفحة
    window.scrollTo(0, 0);
});
