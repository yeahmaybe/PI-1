// Анимация появления блоков
const cards = document.querySelectorAll(".card");

// Функция, проверяющая видимость карточек и применяющая стили
const checkVisibility = () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      // Если карточка в пределах видимости
      card.style.opacity = "1"; // Устанавливаем видимость
      card.style.transform = "translateY(0)"; // Убираем смещение
    } else {
      // Если карточка не в пределах видимости
      card.style.opacity = "0"; // Скрываем карточку
      card.style.transform = "translateY(50px)"; // Смещаем карточку вниз
    }
  });
};

// Слушатель события прокрутки
window.addEventListener("scroll", checkVisibility);

// Проверяем видимость карточек сразу при загрузке страницы
checkVisibility();
