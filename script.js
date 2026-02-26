document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تشغيل السلايدر (Swiper)
    if (document.querySelector('.mySwiper')) {
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    // 2. إصلاح وتشغيل الفيديو (Click Event)
    const videoThumb = document.querySelector('.video-placeholder');
    if (videoThumb) {
        videoThumb.onclick = function() {
            const videoId = this.getAttribute('data-video');
            // نقوم بإنشاء الـ Iframe مكان الصورة والزر
            this.innerHTML = `
                <iframe 
                    width="100%" 
                    height="450" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen 
                    style="border-radius:20px; display:block;">
                </iframe>`;
        };
    }
    document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تفعيل السلايدر (كما هو)
    if (document.querySelector('.mySwiper')) {
        new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            coverflowEffect: {
                rotate: 20, stretch: 0, depth: 200, modifier: 1, slideShadows: true,
            },
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        });
    }

    // 2. إصلاح تشغيل الفيديو (حل Error 153)
    const videoThumb = document.querySelector('.video-placeholder');
    if (videoThumb) {
        videoThumb.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            // أضفنا روابط الحماية والمتطلبات البرمجية ليوتيوب
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&enablejsapi=1&origin=${window.location.origin}`;
            
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
    }

    // كود مسح الهاش
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname);
    }
});

    // 3. ضبط بداية الصفحة
    window.scrollTo(0, 0);
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname);
    }
});
