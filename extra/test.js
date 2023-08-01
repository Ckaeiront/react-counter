const frameworks = [
  { name: "Ember.js", contributors: 1040 },
  { name: "Vue.js", contributors: 904 },
  { name: "React.js", contributors: 400 },
];

const reduzido = frameworks.reduce(function (total, framework) {
  return total + framework.contributors;
}, -1000);

// console.log(filhos);
// console.log(result);
console.log(reduzido);
