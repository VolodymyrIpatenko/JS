// const obj = { a: 1, b: 2, c: 3 };
// const props = ["a", "c"];

// const pickProps = (obj, props) => {
//   let result = props.reduce((acc, prop) => ((acc[prop] = obj[prop]), acc), {});
//   return result;
// };

// console.log(pickProps(obj, props));

// const getAdults = (obj) => {
//   if (Object.keys(obj).length === 0) {
//     return {};
//   } else {
//     const result = {};
//     for (let keys in obj) {
//       if (obj[keys] >= 18) {
//         result[keys] = obj[keys];
//       }
//     }
//     return result;
//   }
// };

// console.log(getAdults({ Ann: 25, Andrey: 20, Mike: 51 }));

// let objc = { name: "Ann", age: 25 };
// function getKeys(obj) {
//   let keys = Object.keys(objc).join("\n");
//   return keys;
// }
// console.log(getKeys(objc));

// console.log(getKeys({ name: "Denis", age: 20, status: "rich" }));
// const rooms = {
//   room1: [{ name: "John" }, { name: "Bill" }],
//   room2: [{ name: "Denis" }, { name: "Mike" }],
// };

// function getPeople(rooms) {
//   const arrays = Object.values(rooms).flat();
//   let result = [];
//   for (let elem of arrays) {
//     result.push(elem.name);
//   }
//   return result;
// }
// console.log(getPeople(rooms));
const transactions = [
  { userId: 22, amount: 60, operation: "sell" },
  { userId: 22, amount: 160, operation: "buy" },
  { userId: 44, amount: 90, operation: "sell" },
];
const getTotalRevenue = (transactions) => {
  return transactions.reduce((acc, elem) => acc + elem.amount, 0);
};
console.log(getTotalRevenue(transactions));
