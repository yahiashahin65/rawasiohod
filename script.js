// الكود ده بيضمن إن الصفحة تفتح من فوق وبيمسح الهاش من الرابط
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname);
    }
});
