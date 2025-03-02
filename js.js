let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img'); // Chọn tất cả các hình ảnh trong bộ sưu tập

// Hàm kiểm tra khi tất cả hình ảnh đã tải xong
function checkImagesLoaded() {
    let loadedCount = 0;

    images.forEach((image) => {
        // Khi mỗi hình ảnh được tải xong
        image.onload = () => {
            loadedCount++;
            // Nếu tất cả các hình ảnh đã được tải
            if (loadedCount === images.length) {
                enableGalleryNavigation(); // Bật các nút điều hướng
            }
        };

        // Nếu hình ảnh đã được tải từ trước, gọi trực tiếp
        if (image.complete) {
            loadedCount++;
        }
    });
}

// Hàm để bật các nút điều hướng khi tất cả hình ảnh đã được tải
function enableGalleryNavigation() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.disabled = false;
    nextButton.disabled = false;

    // Các sự kiện click cho các nút chuyển động
    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));
}

// Hàm để di chuyển các slide
function moveSlide(direction) {
    const items = document.querySelectorAll('.gallery-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 220;  // Điều chỉnh giá trị này tùy theo chiều rộng của ảnh và khoảng cách
    const gallery = document.querySelector('.gallery');
    gallery.style.transform = `translateX(${offset}px)`;
}

// Chạy hàm kiểm tra khi tất cả hình ảnh được tải xong
checkImagesLoaded();
