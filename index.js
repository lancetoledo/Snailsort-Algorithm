let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const snail = (array) => {
  // Set up sorted array
  const sorted = [];

  // While there are items in the array keep looping
  while (array.length) {
    // Remove and push the first inner arr elem "1,2,3" into sorted arr
    sorted.push(...array.shift());

    // Loop through original array and remove the last element from each "6", "9"

    for (let i = 0; i < array.length; i++) {
      sorted.push(array[i].pop());
    }
    // pop the last inner array "[7,8]", reverse it then make use ... to make it indivdual elements "8,7"
    sorted.push(...(array.pop() || []).reverse());

    // Loop through remaining array [[4,5]]
    for (let i = array.length - 1; i >= 0; i--) {
      // This will add "4" and it will go back into the while loop to get "[[5]]" and just get "5"
      sorted.push(array[i].shift());
    }
  }
  return sorted;
};

snail(array);
