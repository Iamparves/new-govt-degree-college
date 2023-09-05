const tableRows = [...document.querySelector("table:nth-child(2)").querySelectorAll("tr")].slice(1)

const data = tableRows.map(tr => {
    const cols = [...tr.querySelectorAll("td")].map(td => td.textContent);

    const row = {
        serialNo: cols[0],
        name: cols[1],
        mobileNo: cols[2],
        division: cols[3]
    }

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