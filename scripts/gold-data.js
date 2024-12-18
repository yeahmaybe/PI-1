import { drawChart } from "./chart.js";
import { buildTable } from "./table.js";

// Пример данных для графика
const data = [
  279.03, 271.04, 309.68, 363.32, 409.17, 444.45, 603.77, 695.39, 871.96,
  972.35, 1224.53, 1571.52, 1668.98, 1411.23, 1266.4, 1160.06, 1250.74, 1257.12,
  1268.49, 1411.15, 1586.2, 1798.61, 1800.09, 1940.54,
]; // Замените на реальные данные цен золота
const labels = [
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
]; // Метки для оси X

var tableData = [].concat(data).reverse();
var tableLabels = [].concat(labels).reverse();
let table = document.querySelector("#gold-prices-table");
buildTable(table, tableLabels, tableData);

const canvas = document.getElementById("gold-prices-chart");
drawChart(canvas, labels, data);
