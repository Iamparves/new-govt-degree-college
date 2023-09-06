const tableRows = [
  ...document.querySelector("table").querySelectorAll("tr"),
].slice(1, -1);

const data = tableRows.map((tr) => {
  const cols = [...tr.querySelectorAll("td")].map((td) => td.innerHTML);

  const row = {
    class: cols[0],
    student: cols[1],
    dressCode: cols[2],
  };

  return row;
});

console.log(data);

// Teachers Data
// const data = [...document.querySelector("table").querySelectorAll("tr")].slice(2).map(tr => {
//     const cols = [...tr.querySelectorAll("td")].map(td => td.textContent);

//     const row = {
//         serialNo: cols[0],
//         name: cols[1],
//         startDate: cols[2],
//         endDate: cols[3]
//     }

//     return row;
// });

// console.log(data);
