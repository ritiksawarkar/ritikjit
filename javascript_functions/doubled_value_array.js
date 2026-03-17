const arr = [5,8,7,6,11,87];

const doubled = arr.map((num) => num * 2);
console.log(doubled);

const even = arr.filter((num) => num % 2 === 0);
console.log(even);

const sort=arr.sort((a, b) => a-b);
console.log(sort);
const sort_desc=arr.sort((a, b) => b-a);
console.log(sort_desc);