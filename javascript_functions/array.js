const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

let arr_iteration = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
arr_iteration(arr);

console.log("Array reverse:")

let arr_reverse = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  } };

arr_reverse(arr);

