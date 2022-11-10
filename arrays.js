

// 1. Declare a variable that stores an Array of at least 4 Strings.

var birthMonths = ["July", "May", "October", "August"];
// Method : sort() . This method sorts the elements in this array.(Sort order depends in implenation)
birthMonths.sort()

console.log(birthMonths)

// 2. Declare a variable that stores an Array of at least 4 Numbers.

var ticketPrices = [87, 88, 103, 68];
// Method : pop() . This method removes the last element of an array
ticketPrices.pop()

console.log(ticketPrices)

// 3. Declare a variable that stores an Array of at least 4 Booleans.

var questions = ["Truthful", "Bad", "Tall,Short"];
// Method : reverse() . This method reverses the order of elements with last starting first etc.
questions.reverse()

console.log(questions);

// Index Position (examples)

var birthMonths = ["July", "May", "October", "August"];

// Index position [0] is July.
// Index position [1] is May.
// Index position [2] is October.
// Index position [3] is August.

var birthMonths = ["July", "May", "October", "August"];
console.log(birthMonths[2])

// As you can see above , we are logging the variable along with the index position
// in bracket notation to access the element at the index position of `2`, which is October