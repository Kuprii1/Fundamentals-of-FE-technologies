document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("li, ol li"); // Вибираємо всі елементи списків
  const element1 = elements[0]; 
  const element2 = elements[1]; 
  let isFirstClickElement1 = true; // Змінна для визначення першого кліку на першому елементі
  let isFirstClickElement2 = true; // Змінна для визначення першого кліку на другому елементі

  // Відстеження натискання на 1-му елементі
  element1.addEventListener("click", function () {
      if (isFirstClickElement1) {
          toggleColorById(this); // Використовуємо getElementById() для першого кліку
      } else {
          toggleColorByQuery(this); // Використовуємо querySelector() для наступних кліків
      }
      isFirstClickElement1 = !isFirstClickElement1; // Перемикаємо стан кліку
  });

  // Відстеження натискання на 2-му елементі
  element2.addEventListener("click", function () {
      if (isFirstClickElement2) {
          toggleColorById(this); // Використовуємо getElementById() для першого кліку
      } else {
          toggleColorByQuery(this); // Використовуємо querySelector() для наступних кліків
      }
      isFirstClickElement2 = !isFirstClickElement2; // Перемикаємо стан кліку
  });
});

// Функція для зміни кольору елемента за допомогою getElementById
function toggleColorById(element) {
  if (element.style.backgroundColor === "pink") {
      element.style.backgroundColor = "white";
      element.style.color = "blue";
  } else {
      element.style.backgroundColor = "red";
      element.style.color = "black";
  }
}

// Функція для зміни кольору елемента за допомогою querySelector
function toggleColorByQuery(element) {
  if (element.style.backgroundColor === "silver") {
      element.style.backgroundColor = "golden";
      element.style.color = "brown";
  } else {
      element.style.backgroundColor = "grey";
      element.style.color = "yellow";
  }
}

  
  document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    let image = document.getElementById("lubnyImage"); // Початкове зображення
  
    // Кнопки
    const addImageBtn = document.getElementById("addImageBtn");
    const increaseSizeBtn = document.getElementById("increaseSizeBtn");
    const decreaseSizeBtn = document.getElementById("decreaseSizeBtn");
    const removeImageBtn = document.getElementById("removeImageBtn");
  
    // Дія 1: Додати зображення
    addImageBtn.addEventListener("click", function () {
      if (!image) {
        image = document.createElement("img");
        image.src = "town.jpg";
        image.alt = "фото міста Лубни";
        image.width = 300; // Встановлюємо початковий розмір
        image.id = "lubnyImage";
        imageContainer.appendChild(image);
      }
    });
  
    // Дія 2: Збільшити зображення
    increaseSizeBtn.addEventListener("click", function () {
      if (image) {
        image.width += 50; // Збільшуємо ширину зображення на 50px
      }
    });
  
    // Дія 3: Зменшити зображення
    decreaseSizeBtn.addEventListener("click", function () {
      if (image && image.width > 50) {
        image.width -= 50; // Зменшуємо ширину зображення на 50px
      }
    });
  
    // Дія 4: Видалити зображення
    removeImageBtn.addEventListener("click", function () {
      if (image) {
        imageContainer.removeChild(image); // Видаляємо зображення
        image = null; // Очищуємо змінну
      }
    });
  });