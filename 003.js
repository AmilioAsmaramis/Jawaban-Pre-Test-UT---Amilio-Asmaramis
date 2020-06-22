const Min = arr => Math.min(...arr);
// arrMin([20, 10, 5, 10]) -> 5
console.log('Min (20, 10, 5, 10)');
console.log(Min([20, 10, 5, 10]));

const Max = arr => Math.max(...arr);
// arrMax([20, 10, 5, 10]) -> 20
console.log('Max (20, 10, 5, 10)');
console.log(Max([20, 10, 5, 10]));

const Average = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25
console.log('Average (20, 10, 5, 10)');
console.log(Average([20, 10, 5, 10]));