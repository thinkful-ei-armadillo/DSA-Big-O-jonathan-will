/* eslint-disable strict */
/* 
In these drills, you'll practice determining the big O complexity of algorithms. For each drill, we'll provide a code snippet with a function, and you'll work out the big O complexity by analyzing the code without running it.

1. What is the Big O for this?

1) O(1) - Constant

2) O(n) - Linear time 


2. Even or odd

O(1) - Constant time - Only has one value and only one operation.


3. Are you here?

O(n^2) - Quadratic/Polynomial. There is a nested for loop. Two levels of for loops.


4. Doubler

O(n) - Linear - it has to perform a calculation on each element in the input array so its directly proportional to the length of input. 


5. Naive search

O(n) - Linear - A for loop checks each element in the input array to compare it to item parameter so its directly proportional to the length of input. 


6. Creating pairs

O(n^2) - Quadratic/Polynomial. There is a nested for loop. Two levels of for loops.


7. Compute the sequence

What does the following algorithm do? Adds the first 2 indexes of the array and stores it in a different array.
O(1) - Constant. It is appending at the end of the array due to reassigning indices

8. An efficient search

O(log(n)) - Logarithmic time - Always cuts the amount of items it needs to search in half. The time complexity increases slowly in a logarithmic fashion.


9. Random element

O(1) - Constant time - just a simple calculation. Doesn't depend on length of the array. No iterations occuring.

10. What Am I?

The first conditional checks if inputed number is less than 2 or if its a whole number. The for loop checks to see if the inputed number is a prime number.

O(n) - Linear run time complexity. For loop that iterates through each item once and only once.

*/

// 11. Tower of Hanoi

let rodA = [];
let rodB = [];
let rodC = [];

let disk1 = 1;
let disk2 = 2;
let disk3 = 3;


function towerOfHanoi() {

}

// iterative approach: 
// condition to make sure disks cant move if they have disk     on top of them
// doesnt allow disks to go back to where it was previously
// base case = when arr3 == initial value arr1
// insert algorithm here
// display each movement of the disk with a console.log?




