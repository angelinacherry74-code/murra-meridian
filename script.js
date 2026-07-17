// ==================== КОНФІГУРАЦІЯ ====================
// Вкажіть тут ваш нік у Telegram (без символу @), щоб замовлення йшли напряму до вас:
const TELEGRAM_USERNAME = "murraa13"; 


// ==================== БАЗА ДАНИХ (10 ГОДИННИКІВ) ====================
const watches = [
    {
        id: 1,
        title: "Чоловічий годинник Pagani Design PD-YS025 Silver-Blue",
        model: "1138-0269",
        price: "5 889 грн",
        img: [
            "img/watch1.jpg",
            "img/jpg1.jpg",
            "img/jpg2.jpg",
            "img/jpg3.jpg",
            "img/jpg4.jpg",
            "img/jpg5.jpg",
            "img/jpg6.jpg"
        ],
        
        
    },
    {
        id: 2,
        title: "Casio MTP-VD01D-1B",
        model: "1141-0041",
        price: "2 860 грн",
        img: [
            "img/watch2.jpg",
            "img/jpg1.2.jpg",
            "img/jpg1.3.jpg",
            "img/jpg1.4.jpg",
            "img/jpg1.5.jpg",
            "img/jpg1.6.jpg",
            "img/jpg1.7.jpg"
        ],
        
        
    },
    {
        id: 3,
        title: "Casio MTP-V300L-1A ",
        model: "1141-0276",
        price: "3 490 грн",
        img: [
            "img/watch3.jpg",
            "img/jpg2.1.jpg",
            "img/jpg2.2.jpg",
            "img/jpg2.3.jpg",
            "img/jpg2.4.jpg",
        ],
        
        
    },
    {
        id: 4,
        title: "Casio MTP-VD300D-2E",
        model: "1141-0480",
        price: "3 900 грн",
        img: [
            "img/watch4.jpg",
            "img/jpg3.1.jpg",
            "img/jpg3.2.jpg",
            "img/jpg3.3.jpg",
            "img/jpg3.4.jpg",
            "img/jpg3.5.jpg",
            "img/jpg3.6.jpg",
        ],
        
    },
    {
        id: 5,
        title: "Forsining 8314 Silver-White Steel",
        model: "1059-0353",
        price: "2495 грн",
        img: [
            "img/watch5.jpg",
            "img/jpg4.1.jpg",
            "img/jpg4.2.jpg",
            "img/jpg4.3.jpg",
            "img/jpg4.4.jpg",
            "img/jpg4.5.jpg",
            
        ],
        
       
    },
    {
        id: 6,
        title: "Casio MTP-VD01D-1E2",
        model: "1141-0203",
        price: "2730 грн",
        img: [
            "img/watch6.jpg",
            "img/jpg5.1.jpg",
            "img/jpg5.2.jpg",
            "img/jpg5.3.jpg",
            "img/jpg5.4.jpg",
            "img/jpg5.5.jpg",
            "img/jpg5.6.jpg",
        ],
        
        
    },
    {
        id: 7,
        title: "Casio MTP-VD300D-1E",
        model: "1141-0327                        ",
        price: "3830 грн",
        img: [
            "img/watch7.jpg",
            "img/jpg6.1.jpg",
            "img/jpg6.2.jpg",
            "img/jpg6.3.jpg",
            "img/jpg6.4.jpg",
            "img/jpg6.5.jpg",
            "img/jpg6.6.jpg",
            "img/jpg6.7.jpg",
            "img/jpg6.8.jpg",
        ],
        
        
    },
    {
        id: 8,
        title: "Casio MTP-V002D-2B3",
        model: "1141-0337",
        price: "2050 грн",
        img: [
            "img/watch8.jpg",
            "img/jpg7.1.jpg",
            "img/jpg7.2.jpg",
            "img/jpg7.3.jpg",
            "img/jpg7.4.jpg",
            "img/jpg7.5.jpg",
            "img/jpg7.6.jpg",
            "img/jpg7.7.jpg",
            "img/jpg7.8.jpg",
        ],
        
       
    },
    {
        id: 9,
        title: "Casio LTP-V009D-2E",
        model: "1141-0022",
        price: "2440 грн",
        img: [
            "img/watch9.jpg",
            "img/jpg8.1.jpg",
            "img/jpg8.2.jpg",
            "img/jpg8.3.jpg",
            "img/jpg8.4.jpg",
            "img/jpg8.5.jpg",
            "img/jpg8.6.jpg",
        ],
        
        
    },
    {
        id: 10,
        title: "Casio MTP-VD03D-3A1 ",
        model: "1141-0403",
        price: "2860 грн",
        img: [
            "img/watch10.jpg",
            "img/jpg9.1.jpg",
            "img/jpg9.2.jpg",
            "img/jpg9.3.jpg",
            "img/jpg9.4.jpg",
            "img/jpg9.5.jpg",
            "img/jpg9.6.jpg",
        ],
        
       
    }
];

// ==================== ДОПОМІЖНА ФУНКЦІЯ ====================
function getImageUrl(img) {
    // Якщо це масив, беремо перший елемент, інакше беремо сам рядок
    return Array.isArray(img) ? img[0] : img;
}

// ==================== ЗМІННІ ДЛЯ ПЕРЕГОРТУВАННЯ ФОТ0 ====================
let currentWatchId = null;
let currentImageIndex = 0;

function updateProductImage() {
    const watch = watches.find(w => w.id === currentWatchId);
    if (!watch) return;

    const images = Array.isArray(watch.img) ? watch.img : [watch.img];
    
    // Обновляємо зображення та лічильник
    document.getElementById('detail-img').src = images[currentImageIndex];
    document.getElementById('image-index').innerText = currentImageIndex + 1;
    document.getElementById('image-total').innerText = images.length;
    
    // Приховуємо кнопки якщо лишає одна фото
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    if (images.length <= 1) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    } else {
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';
    }
}

function prevImage() {
    const watch = watches.find(w => w.id === currentWatchId);
    if (!watch) return;
    
    const images = Array.isArray(watch.img) ? watch.img : [watch.img];
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateProductImage();
}

function nextImage() {
    const watch = watches.find(w => w.id === currentWatchId);
    if (!watch) return;
    
    const images = Array.isArray(watch.img) ? watch.img : [watch.img];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateProductImage();
}

// ==================== РЕНДЕРИНГ КАТАЛОГУ ====================
const catalogContainer = document.getElementById('catalog-container');

function loadCatalog() {
    if (!catalogContainer) return;
    
    catalogContainer.innerHTML = '';
    watches.forEach(watch => {
        const item = document.createElement('div');
        item.className = 'catalog-item';
        item.onclick = () => openProductDetail(watch.id);
        item.innerHTML = `
            <img class="catalog-item-img" src="${getImageUrl(watch.img)}" alt="${watch.title}">
            <div>
                <h3 class="catalog-item-title">${watch.title}</h3>
                <p class="catalog-item-price">${watch.price}</p>
            </div>
            <button class="catalog-item-btn">Детальніше</button>
        `;
        catalogContainer.appendChild(item);
    });
}

// ==================== ВІДКРИТТЯ СТОРІНКИ ТОВАРУ ====================
function openProductDetail(id) {
    const watch = watches.find(w => w.id === id);
    if (!watch) return;

    // Зберігаємо поточний товар та скидаємо індекс фото
    currentWatchId = id;
    currentImageIndex = 0;

    // Оновлюємо дані на сторінці детального перегляду
    updateProductImage();
    document.getElementById('detail-title').innerText = watch.title;
    document.getElementById('detail-price').innerText = watch.price;
    document.getElementById('detail-code').innerText = watch.model;
    document.getElementById('detail-desc').innerText = watch.desc || '';
    document.getElementById('detail-spec1').innerText = watch.spec1 || '';
    document.getElementById('detail-spec2').innerText = watch.spec2 || '';
    document.getElementById('detail-spec3').innerText = watch.spec3 || '';
    document.getElementById('detail-spec4').innerText = watch.spec4 || '';
    document.getElementById('detail-spec5').innerText = watch.spec5 || '';

    // Шаблон автоматичного повідомлення в Telegram при натисканні
    const message = encodeURIComponent(`Вітаю! Мене цікавить годинник "${watch.title}" (Код товару: ${watch.model}), за ціною ${watch.price}. Бажаю оформити замовлення!`);
    const tgLink = `https://t.me/${TELEGRAM_USERNAME}?text=${message}`;
    
    document.getElementById('detail-tg-btn').href = tgLink;

    // Перемикаємо секцію на деталі продукту
    showSection('product-detail');
}

// ==================== НАВІГАЦІЯ СТОРІНКАМИ ====================
function showSection(sectionId, pushToHistory = true) {
    // Приховуємо всі секції сайту
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Показуємо активну секцію
    const activeSection = document.getElementById(`section-${sectionId}`);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Візуально підсвічуємо пункт навігації в меню
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.getElementById(`nav-${sectionId}`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // ДОДАНО: Записуємо перехід в історію браузера
    if (pushToHistory) {
        history.pushState({ sectionId: sectionId }, "", `#${sectionId}`);
    }

    // Плавно скролимо екран до початку нової сторінки
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== СТАРТ САЙТУ ====================
window.onload = () => {
    loadCatalog();
};

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".modal-close");
    const prevBtn = document.getElementById("modal-prev-btn");
    const nextBtn = document.getElementById("modal-next-btn");

    let currentImages = []; // Тут зберігатимемо список картинок активного годинника
    let currentIndex = 0;   // Індекс поточної картинки в модалці

    // Слідкуємо за кліком на головне фото товару
    document.addEventListener("click", function (event) {
        if (event.target && event.target.id === "detail-img") {
            const currentSrc = event.target.getAttribute("src");
            if (!currentSrc) return;

            // 1. Шукаємо в масиві watches той годинник, який містить цю картинку
            // (Працює автоматично з твоїм масивом watches!)
            const activeWatch = watches.find(watch => 
                watch.img.some(imgPath => currentSrc.includes(imgPath))
            );

            if (activeWatch) {
                currentImages = activeWatch.img; // Записуємо всі фото цього годинника
                
                // Знаходимо індекс саме тієї картинки, на яку клікнули
                currentIndex = currentImages.findIndex(imgPath => currentSrc.includes(imgPath));
                if (currentIndex === -1) currentIndex = 0;
            } else {
                // Якщо раптом не знайшли в базі, покажемо хоча б одну цю картинку
                currentImages = [currentSrc];
                currentIndex = 0;
            }

            // 2. Відкриваємо модалку та показуємо картинку
            updateModalImage();
            modal.style.display = "flex";
        }
    });

    // Функція оновлення картинки в модалці
    function updateModalImage() {
        if (currentImages.length > 0) {
            modalImg.src = currentImages[currentIndex];
            
            // Якщо у годинника лише 1 фото, ховаємо стрілочки
            if (currentImages.length <= 1) {
                prevBtn.style.display = "none";
                nextBtn.style.display = "none";
            } else {
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
            }
        }
    }

    // Кнопка "Вперед"
    nextBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Щоб клік не закривав модалку
        currentIndex = (currentIndex + 1) % currentImages.length; // Перехід по колу
        updateModalImage();
    });

    // Кнопка "Назад"
    prevBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length; // Перехід по колу назад
        updateModalImage();
    });

    // Закриття на хрестик
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Закриття при кліку на темний фон (але не на саме фото чи стрілки)
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal || event.target.classList.contains("modal")) {
                modal.style.display = "none";
            }
        });
    }
    
    // Додаємо можливість гортати стрілочками на клавіатурі
    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            if (event.key === "ArrowRight") {
                nextBtn.click();
            } else if (event.key === "ArrowLeft") {
                prevBtn.click();
            } else if (event.key === "Escape") {
                modal.style.display = "none";
            }
        }
    });
});