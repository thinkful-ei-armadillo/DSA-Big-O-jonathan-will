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

let rodA = [3,2,1];
let rodB = [];
let rodC = [];


function towerOfHanoi(disk, start, middle, end) {
  if (disk === 1) {
    return;
  }
  end.push(start.pop());
  console.log(rodA, rodB, rodC);
  towerOfHanoi(disk - 1, start, end, middle);
  towerOfHanoi(disk - 1, end, start, middle);
  towerOfHanoi(disk - 1, start, middle, end);
  towerOfHanoi(disk - 1, middle, end, start);
  towerOfHanoi(disk - 1, middle, start, end);
  towerOfHanoi(disk - 1, start, middle, end); 
}

//towerOfHanoi(3, rodA, rodB, rodC);


function countSheep(num) {
  for (let i = num; i > 0; i--) {
    if (i >= 1) {
      console.log('Another sheep jump over the fence');
    }
  }
  console.log('All sheep jumped over the fence');
}
// Linear, O(n)
//countSheep(3);

function powerCalculator(baseInt, expInt) {
  let result = baseInt;

  for (let i = expInt; i > 1; i--) {
    result *= baseInt;
  }
  return result;
}
// Linear, O(n)
//console.log(powerCalculator(10, 3));

function reverseString(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    // take last letter in string
    result += str[str.length - i - 1];
    // replace last letter with first letter

  }
  return result;
}
// Linear, O(n)
//console.log(reverseString('hello'));

function TriangularNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
    console.log(sum);
  }
  return sum;
}
// Linear, O(n)
//TriangularNum(5);

function stringSplitter(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '/') {
      result += str[i];
    }
  }
  console.log(result);
  return result;
}
// Linear, O(n)
//stringSplitter('02/20/2020');

function fibonacci(num) {
  const numArr = [];
  for (let i = 0; i < num; i++) {
    if (!numArr.length) {
      numArr.push(1);
      numArr.push(i);
    }
    numArr.push(numArr[i+1] + numArr[i]);
  }
  numArr.splice(0, 2);
  console.log(numArr);
}
// Linear, O(n)
//fibonacci(7);



/* 
  Counting Sheep function - Linear, O(n)
  Power Calculator function - Linear, O(n)
  ReverseString function - Linear, O(n)
  Triangular Number function - Linear, O(n)
  String Splitter function - Linear, O(n)
  Factorial function - Linear, O(n)
  Fibonacci function - Linear, O(n)
  Find Way Out of The Maze function - Linear, O(n)
  Find ALL the ways out of the maze function - Linear, O(n)
  Anagramsfunction - Organization Chart function - Linear, O(n)
  binaryRep function - constant, O(1)
*/