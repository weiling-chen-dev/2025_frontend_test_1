/**
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
**/
let items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];
function getUniqueNumber(items) {
  // solution1
  //   console.log([...new Set(items)]);
  // solution2
  //   let unique = [];
  //   for (n of items) {
  //     if (!unique.includes(n)) {
  //       unique.push(n);
  //     }
  //   }
  //   console.log(unique);
  // solution3
}

getUniqueNumber(items);
