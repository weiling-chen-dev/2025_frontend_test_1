/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’} lastName, note can be empty, customerID can only be a set of digital numbers. profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
**/

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/

let users = require("./users-mock-data");

function sortUserName(users) {
  const userNames = users.map((user) => {
    return `${user.firstName}${user.lastName ?? ""}${user.customerID}`;
  });
  // when it comes to sorting a huge array, mdn suggests using Intl.Collator compare function rather than localeCompare for better performance
  const coll = new Intl.Collator(undefined, {
    // the string is alphanumeric
    numeric: true,
    // accent-insensitive and case-insensitive
    sensitivity: "base",
  }).compare;

  userNames.sort(coll);

  sortAccording(
    users,
    userNames,
    (user) => `${user.firstName}${user.lastName ?? ""}${user.customerID}`
  );
}

sortUserName(users);

console.log(
  "____________ sort by (‘firstName’ + ‘lastName’ + ‘customerID’)  _________________"
);

console.log(users);

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’) **/

function sortByType(users) {
  const typeOrder = [
    "systemAnalytics",
    "engineer",
    "productOwner",
    "freelancer",
    "student",
  ];
  sortAccording(users, typeOrder, (user) => user.profession);
}

sortByType(users);

console.log("____________ sort by profession _________________");

console.log(users);

function sortAccording(arr, referenceArr, compare) {
  const index = new Map();

  for (let i = 0; i < referenceArr.length; i++) {
    if (!index.has(referenceArr)) {
      index.set(referenceArr[i], i + 1);
    }
  }

  arr.sort((a, b) => {
    let indexA = index.get(compare(a));
    let indexB = index.get(compare(b));

    return indexA - indexB;
  });
}
