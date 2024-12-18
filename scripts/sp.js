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
header.style.backgroundColor = "#d4af37"; // Золотой цвет
header.style.color = "#fff";
header.style.fontFamily = "'Georgia', serif"; // Изменили шрифт для элегантности
root.appendChild(header);

// Создаем nav элемент
const nav = document.createElement("nav");

// Создаем ul элемент
const ul = document.createElement("ul");

// Массив элементов списка
const menuItems = [
  { href: "index.html", text: "Главная" },
  { href: "sp.html", text: "Справочник инвестора", isCurrent: true },
  { href: "gold.html", text: "Золото" },
  { href: "silver.html", text: "Серебро" },
];

// Создаем li элементы
menuItems.forEach((item) => {
  const li = document.createElement("li");
  if (item.isCurrent) {
    li.classList.add("current");
  }

  const a = document.createElement("a");
  a.href = item.href;
  a.textContent = item.text;

  li.appendChild(a);
  ul.appendChild(li);
});

// Добавляем ul в nav
nav.appendChild(ul);

// Добавляем nav в body (или другой родительский элемент)
root.appendChild(nav);

// Контейнер для справочника
const guideContainer = document.createElement("div");
guideContainer.style.maxWidth = "800px";
guideContainer.style.margin = "20px auto";
guideContainer.style.padding = "20px";
guideContainer.style.backgroundColor = "#fff";
guideContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
guideContainer.style.borderRadius = "10px"; // Добавили скругленные углы
root.appendChild(guideContainer);

// Разделы справочника
const sections = [
  {
    title: "Зачем инвестировать в драгоценные металлы?",
    content:
      "Драгоценные металлы, такие как золото и серебро, являются надежным активом, который сохраняет свою ценность в долгосрочной перспективе. Эти металлы защищают от инфляции и экономических кризисов.",
  },
  {
    title: "Золото",
    content:
      "Золото — это один из самых популярных драгоценных металлов для инвестиций. Оно используется как средство сбережения и защиты от инфляции. Кроме того, золото всегда ассоциировалось с богатством и стабильностью.",
  },
  {
    title: "Серебро",
    content:
      "Серебро активно используется в промышленности, что делает его не только инвестиционным, но и стратегическим активом. Его стоимость растет с увеличением промышленного спроса, особенно в области технологий.",
  },
  {
    title: "Как начать инвестировать?",
    content:
      "Начните с изучения рынка, выберите надежного поставщика и определите свою стратегию инвестиций. Помните, что диверсификация активов — ключ к минимизации рисков.",
  },
  {
    title: "Драгоценные металлы",
    content: `
      <dl>
        <dt>Золото</dt>
        <dd>Металл, используемый для защиты капитала от инфляции и экономических кризисов.</dd>
        <dt>Серебро</dt>
        <dd>Металл, который активно используется в промышленности и является важным инвестиционным активом.</dd>
        <dt>Платина</dt>
        <dd>Редкий металл, востребованный в ювелирной промышленности и автомобильной промышленности.</dd>
      </dl>
    `,
  },
  {
    title: "Инвестиционные стратегии",
    content: `
      <dl>
        <dt>Долгосрочные инвестиции</dt>
        <dd>Стратегия, ориентированная на удержание активов в течение нескольких лет с целью получения прибыли от роста стоимости.</dd>
        <dt>Краткосрочные инвестиции</dt>
        <dd>Стратегия, ориентированная на быструю прибыль от активов, удерживаемых в течение короткого времени.</dd>
        <dt>Диверсификация</dt>
        <dd>Стратегия распределения инвестиций между различными активами для минимизации рисков.</dd>
      </dl>
    `,
  },
  // Добавим раздел о истории золота и серебра
  {
    title: "История золота и серебра",
    content: `
      <p><strong>Золото</strong> использовалось людьми более 5000 лет, начиная с древнего Египта, где оно было символом власти и богатства. В Средневековье золото стало основой для создания монет, и его ценность была признана во всем мире.</p>
      <p><strong>Серебро</strong> также имеет долгую историю, начиная с Древнего Рима, где оно использовалось для чеканки монет. В более поздние века серебро стало важным элементом в промышленности, включая производство электрических компонентов и солнечных панелей.</p>
    `,
  },
];

// Добавляем стилизованные секции
sections.forEach((section) => {
  const sectionContainer = document.createElement("div");
  sectionContainer.style.marginBottom = "30px"; // Увеличили отступы для более просторного вида

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = section.title;
  sectionTitle.style.fontSize = "1.7em";
  sectionTitle.style.color = "#d4af37"; // Золотой цвет для заголовков
  sectionTitle.style.borderBottom = "3px solid #d4af37"; // Золотая линия под заголовком
  sectionTitle.style.paddingBottom = "10px";
  sectionTitle.style.fontFamily = "'Georgia', serif"; // Элегантный шрифт

  const sectionContent = document.createElement("div");
  sectionContent.innerHTML = section.content;
  sectionContent.style.fontSize = "1.1em";
  sectionContent.style.lineHeight = "1.8";
  sectionContent.style.color = "#555";

  sectionContainer.appendChild(sectionTitle);
  sectionContainer.appendChild(sectionContent);
  guideContainer.appendChild(sectionContainer);
});
