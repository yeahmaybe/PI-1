const padding = 50;
const canvasWidth = 1000; // Задайте ширину канваса
const canvasHeight = 500; // Задайте высоту канвас
let width = 0;
let height = 0;

export function drawGrid(canvas, ctx, labels) {
  ctx.strokeStyle = "#222222";
  ctx.lineWidth = 0.5;

  // Вертикальные линии сетки
  for (let i = 0; i <= labels.length - 1; i++) {
    const x = padding + (width / (labels.length - 1)) * i;
    ctx.beginPath();
    ctx.moveTo(x, padding);
    ctx.lineTo(x, canvas.height - padding);
    ctx.stroke();
  }

  // Горизонтальные линии сетки
  const numberOfHorizontalLines = 5; // Число горизонтальных линий
  for (let i = 0; i <= numberOfHorizontalLines; i++) {
    const y = (canvas.height - 2 * padding) * (i / numberOfHorizontalLines);
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding - y);
    ctx.lineTo(canvas.width - padding, canvas.height - padding - y);
    ctx.stroke();
  }
}

export function drawChart(canvas, labels, data) {
  const ctx = canvas.getContext("2d");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  width = canvas.width - padding * 2;
  height = canvas.height - padding * 2;

  // Нормализация данных
  const maxDataValue = Math.max(...data);
  const normalizedData = data.map((value) => (value / maxDataValue) * height);

  // Очищаем холст только один раз перед рисованием
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGrid(canvas, ctx, labels);

  // Проверяем, есть ли данные для рисования
  if (normalizedData.length > 1) {
    for (let i = 1; i < normalizedData.length; i++) {
      // Устанавливаем цвет линии в зависимости от изменения цены
      ctx.strokeStyle =
        normalizedData[i] > normalizedData[i - 1] ? "green" : "red";
      ctx.lineWidth = 3;

      // Начинаем новую линию
      ctx.beginPath();
      ctx.moveTo(
        padding + (width / (normalizedData.length - 1)) * (i - 1),
        canvas.height - padding - normalizedData[i - 1]
      );
      ctx.lineTo(
        padding + (width / (normalizedData.length - 1)) * i,
        canvas.height - padding - normalizedData[i]
      );
      ctx.stroke(); // Рисуем линию
    }
  }

  // Добавление точек
  ctx.fillStyle = "black";
  for (let i = 0; i < normalizedData.length; i++) {
    ctx.beginPath();
    ctx.arc(
      padding + (width / (data.length - 1)) * i,
      canvas.height - padding - normalizedData[i],
      5,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  // Ось X
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";

  for (let i = 0; i < labels.length; i++) {
    if (i % 5 != 0 && i != 0 && i != labels.length - 1) continue;
    ctx.beginPath();
    ctx.moveTo(
      padding + (width / (data.length - 1)) * i,
      canvas.height - padding
    );
    ctx.lineTo(
      padding + (width / (data.length - 1)) * i,
      canvas.height - padding + 5
    );
    ctx.stroke();
    ctx.fillText(
      labels[i],
      padding + (width / (data.length - 1)) * i,
      canvas.height - padding + 15
    );
  }

  // Ось Y
  ctx.textAlign = "right";
  const numberOfTicks = 5; // Количество рисок на оси Y
  const tickInterval = maxDataValue / numberOfTicks;
  for (let i = 0; i <= numberOfTicks; i++) {
    const yValue = i * tickInterval;
    const yPos = canvas.height - padding - (yValue / maxDataValue) * height;

    ctx.beginPath();
    ctx.moveTo(padding - 5, yPos);
    ctx.lineTo(padding, yPos);
    ctx.stroke();
    ctx.fillText(yValue.toFixed(2), padding - 10, yPos + 5);
  }
}
