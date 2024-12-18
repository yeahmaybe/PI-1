export function buildTable(table, tableLabels, tableData) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = "Год";
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerHTML = "Цена, $/toz";
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerHTML = "Прирост цены";
  tr.appendChild(td3);

  let th = document.createElement("thead");
  th.appendChild(tr);
  table.appendChild(th);

  for (let i = 0; i < tableLabels.length; i++) {
    let tr = document.createElement("tr");

    let year = document.createElement("td");
    year.innerHTML = tableLabels[i];
    tr.appendChild(year);

    let price = document.createElement("td");
    price.innerHTML = tableData[i];
    tr.appendChild(price);

    let increase = document.createElement("td");
    if (i < tableLabels.length - 1) {
      let p = (tableData[i] / tableData[i + 1] - 1) * 100;
      let percentage = Math.round(p * 100) / 100;
      increase.innerHTML = percentage + "%";

      increase.style.color = percentage > 0 ? "green" : "red";
    }

    tr.appendChild(increase);

    table.appendChild(tr);
  }
}
