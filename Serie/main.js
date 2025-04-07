import { series } from "./data.js";

const tableBody = document.querySelector("tbody");

let totalSeasons = 0;

series.forEach((serie) => {
  totalSeasons += serie.seasons;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  tableBody.appendChild(row);
});

const avgSeasons = (totalSeasons / series.length).toFixed(2);

const avgRow = document.createElement("tr");
avgRow.innerHTML = `
  <td colspan="4"><strong>Promedio de temporadas: ${avgSeasons}</strong></td>
`;
tableBody.appendChild(avgRow);
