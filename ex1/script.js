// *! Cпосіб вирішення через функцію!!!!!
var number = [5, 12, 33, 2, 17, 28];
var result = number.reduce(function (sum, current) {
  return sum + current;
}, 0);

console.log(result);
