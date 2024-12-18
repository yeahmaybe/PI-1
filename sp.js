// Создаем страницу "Справочник инвестора" на чистом JavaScript

// Создаем корневой элемент
const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

// Задаем стили для body через DOM
const bodyStyle = document.body.style;
bodyStyle.margin = "0";
bodyStyle.fontFamily = "Arial, sans-serif";
bodyStyle.backgroundColor = "#f4f4f4";

// Заголовок страницы
const header = document.createElement("h1");
header.textContent = "Справочник инвестора";
header.style.textAlign = "center";
header.style.padding = "20px";
header.style.backgroundColor = "#333";
header.style.color = "#fff";
root.appendChild(header);

// Контейнер для справочника
const guideContainer = document.createElement("div");
guideContainer.style.maxWidth = "800px";
guideContainer.style.margin = "20px auto";
guideContainer.style.padding = "20px";
guideContainer.style.backgroundColor = "#fff";
guideContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
root.appendChild(guideContainer);

// Разделы справочника
const sections = [
  {
    title: "Почему инвестировать в драгоценные металлы?",
    content:
      "Драгоценные металлы, такие как золото и серебро, являются надежным активом, который сохраняет свою ценность в долгосрочной перспективе.",
  },
  {
    title: "Золото",
    content:
      "Золото — это один из самых популярных драгоценных металлов для инвестиций. Оно используется как средство сбережения и защиты от инфляции.",
  },
  {
    title: "Серебро",
    content:
      "Серебро имеет широкое применение в промышленности, что делает его не только инвестиционным, но и стратегическим активом.",
  },
  {
    title: "Как начать инвестировать?",
    content:
      "Начните с изучения рынка, выберите надежного поставщика и определите свою стратегию инвестиций.",
  },
];

sections.forEach((section) => {
  const sectionContainer = document.createElement("div");
  sectionContainer.style.marginBottom = "20px";

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = section.title;
  sectionTitle.style.fontSize = "1.5em";
  sectionTitle.style.color = "#333";
  sectionTitle.style.borderBottom = "2px solid #ccc";
  sectionTitle.style.paddingBottom = "10px";

  const sectionContent = document.createElement("p");
  sectionContent.textContent = section.content;
  sectionContent.style.fontSize = "1em";
  sectionContent.style.lineHeight = "1.6";
  sectionContent.style.color = "#555";

  sectionContainer.appendChild(sectionTitle);
  sectionContainer.appendChild(sectionContent);
  guideContainer.appendChild(sectionContainer);
});

// Добавляем футер
const footer = document.createElement("footer");
footer.textContent = "© 2024 Ваш сайт о драгоценных металлах";
footer.style.textAlign = "center";
footer.style.padding = "10px";
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.marginTop = "20px";
root.appendChild(footer);
