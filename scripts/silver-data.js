import { drawChart } from "./chart.js";
import { buildTable } from "./table.js";
// Пример данных для графика
const data = [
  4.99, 4.35, 4.57, 4.84, 6.65, 7.23, 11.68, 13.39, 16.61, 14.175, 18.3925,
  34.91, 31.705, 22.43, 19.48, 15.8, 17.05, 17.02, 16.11, 15.81, 18.51, 25.29,
  21.79, 23.45,
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
let table = document.querySelector("#silver-prices-table");
buildTable(table, tableLabels, tableData);

const canvas = document.getElementById("silver-prices-chart");
drawChart(canvas, labels, data);
