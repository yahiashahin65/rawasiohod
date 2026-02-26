document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تشغيل السلايدر (إذا كنت ستستخدمه لاحقاً)
    if (document.querySelector('.mySwiper')) {
        new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        });
    }

    // 2. تفعيل تشغيل "كل" الفيديوهات الموجودة في الصفحة
    const allVideos = document.querySelectorAll('.video-placeholder');
    
    allVideos.forEach(video => {
        video.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            const currentOrigin = window.location.origin;
            
            // حل Error 153 بإضافة المعايير اللازمة ليوتيوب
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1&origin=${currentOrigin}`;
            
            this.innerHTML = `
                <iframe 
                    width="100%" 
                    height="450" 
                    src="${embedUrl}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen 
                    style="border-radius:20px; display:block; border: none;">
                </iframe>`;
        });
    });

    // 3. ضبط بداية الصفحة ومسح الهاش
    window.scrollTo(0, 0);
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname);
    }
});
