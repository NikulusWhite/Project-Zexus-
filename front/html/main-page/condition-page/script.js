// Плавный переход по якорям (улучшаем UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Кнопка "Вверх" видна после прокрутки
    const toTop = document.querySelector('.back-to-top');
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        toTop.style.display = 'inline-flex';
      } else {
        toTop.style.display = 'none';
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    toTop.style.display = 'none';