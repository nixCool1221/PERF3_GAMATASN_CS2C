//Concatination of two arrays
let arr1 = ["Cecile","Lone"];
let arr2 = ["Emil","Tobias","Linus"];
let join = arr1.concat(arr2);
console.log(join);

//used .push() to add kiwi in the end
let fruits = ["Banana","Orange","Apple","Mango"];
fruits.push("Kiwi");
console.log(fruits);

//used .unshift() to place 4&5 in the beggining
let array1 = [1,2,3];
array1.unshift(4,5);
console.log(array1);

//used .pop() to remove the last in the array of fruits
fruits.pop(fruits);
console.log(fruits);

//used .shift() to remove the first in the array
array2 = [1,2,3];
array2.shift();
console.log(array2);

//used .sort() to Alphabetically arranged the fruits
fruits.sort();
console.log(fruits);

//used .slice() to create a new a array with a portion of the fruits array
let favFruits = fruits.slice([1],[2]);
console.log(favFruits);