// Data manipulation Methods

// map()


/*element: This is the current element being processed in the array.
index: This is the current element's index within the array. It represents 
the position of the element in the array.
array: This is the array on which the map() method was called.
It refers to the original array being iterated over.*/

const products = ["Ball", "Shoes", "Mouse"];

const modifiedProducts = products.map((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});


const numbers = [3, 5, 11, 32, 87];

/* Use the 'map' method to create a new array ('doubledNumbers') 
  by doubling each element of the 'numbers' array. */
const doubledNumbers = numbers.map((element) => {
  return element * 2;
});

console.log("Initial array:", numbers); // Output: 3, 5, 11, 32, 87
console.log("Modified array:", doubledNumbers); // Output: 6, 10, 22, 64, 174


const strings = ["Hey, there", "Hi"];

const modifiedStrings = strings.map((element) => (element += "!"));
console.log(modifiedStrings);

const stringNumbers = ["1", "5", "10"];
const number = stringNumbers.map(Number);

console.log(number);
// Output: [1, 5, 10]



// Initial array
const celsiusTemperatures = [0, 25, 100, -5, 15];

const fahrenheitTemperatures = celsiusTemperatures.map((celsius) => {
  return celsius * 1.8 + 32;
});

// Log the initial and modified arrays
console.log("Initial array:", celsiusTemperatures);
console.log("Modified array:", fahrenheitTemperatures);


//The .map((book) => book.author) part of the code is used to transform 
//an array of book objects into an array containing only the authors of those books. 
//The map method iterates over each element in the array (in this case, each book object), 
//and for each element, it applies the function provided to it (here, (book) => book.author), 
//which returns the author property of the book. The result is a new array made up of just the authors' names.

const papers = [
    { title: "Book A", author: "Author A" },
    { title: "Book B", author: "Author B" }
];

const authors = papers.map((book) => book.author);

console.log(authors); // ["Author A", "Author B"]



// filter()

const products_ = [
    { name: "Keyboard", price: 220 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 500 },
    { name: "Headphones", price: 120 },
    { name: "Camera", price: 1500 },
];

const affordableProducts = products_.filter((product) => product.price < 500);
console.log(affordableProducts); // Output: [ { name: "Keyboard", price: 220 }, { name: "Headphones", price: 120 } ]



// Task:

const students = [
    { name: "Alice", score: 92 },
    { name: "Bob", score: 87 },
    { name: "Charlie", score: 95 },
    { name: "David", score: 78 },
    { name: "Emma", score: 90 },
];

const highScorers = students.filter((student) => {
    return student.score >= 90;
});

for (let i = 0; i < highScorers.length; i += 1) {
    console.log(highScorers[i].name);

}

// find()


const tasks = [
    { order: 1, name: "Buy groceries" },
    { order: 2, name: "Walk the dog" },
    { order: 3, name: "Read a book" },
];

const firstTask = tasks.find((element) => element.order === 1);
console.log("First task:", firstTask.name); // Output: First task: Buy groceries

const secondTask = tasks.find((element) => element.order === 2);
console.log("Second task:", secondTask.name); // Output: Second task: Walk the dog


//real-World
/*Finding a Product in a Catalog: an array representing a product catalog,
 where each product has a SKU (Stock Keeping Unit) and a name. we want to find a product by its SKU. */

const products__ = [
    { sku: "ABC123", name: "Keyboard" },
    { sku: "XYZ789", name: "Mouse" },
    { sku: "DEF456", name: "Monitor" },
];

const findProductBySku = (sku) => products__.find(product => product.sku === sku);

console.log(findProductBySku("XYZ789")); // Output: { sku: "XYZ789", name: "Mouse" }




// it stops when it can find the first element, so to speak,
// camera is not included, in this case we need to use filter instead
const products___ = [
    { name: "Laptop", price: 1200, featured: false },
    { name: "Headphones", price: 150, featured: true },
    { name: "Smartphone", price: 800, featured: false },
    { name: "Camera", price: 1000, featured: true },
];

const featuredProduct = products___.find((product) => product.featured === true);

if (featuredProduct) {
    console.log(
    `Featured product: ${featuredProduct.name}, Price: $${featuredProduct.price}`
    );
} else {
    console.log('Well! Nothing has been Found');
}


//Sort()


// crazy result(sort see that as string)
const numb = [34, 25, 19, 1, 92, 2, 3];
numbers.sort();
console.log(numb); // Output: 1, 19, 2, 25, 3, 34, 92



const numbers_ = [34, 25, 19, 1, 92, 2, 3];

const ascendingNumbers = [...numbers_].sort((a, b) => a - b);
console.log(ascendingNumbers); // Output: 1, 2, 3, 19, 25, 34, 92

const descendingNumbers = [...numbers_].sort((a, b) => b - a);
console.log(descendingNumbers); // Output: 92, 34, 25, 19, 3, 2, 1
/*[...numbers]: This creates a shallow copy of the original array using the spread operator. 
It prevents the original array (numbers) from being modified.
.sort((a, b) => a - b): This sorts the copied array in ascending order. 
The sort method takes a comparison function as an argument,
and (a, b) => a - b ensures that elements are arranged in ascending order.
The sorted array is stored in the variable ascendingNumbers.
[...numbers]: Again, this creates a shallow copy of the original array to avoid modifying it.
.sort((a, b) => b - a): This time, the comparison function (a, b) => b - a sorts the array in 
descending order by returning a positive value when b should come before a.
The sorted array is stored in the variable descendingNumbers.*/


//Sort Strings
//The localeCompare() method facilitates alphabetical sorting,
// allowing customization for both ascending and descending orders.
const employees = ["Antonia", "Rene", "Casey", "Lorraine", "Shelia"];

const inAlphabetOrder = [...employees].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // Antonia, Casey, Lorraine, Rene, Shelia

const inReversedOrder = [...employees].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // Shelia, Rene, Lorraine, Casey, Antonia



// Task
/*Given an array of books, each represented by an object with properties
(title, author, publicationYear), create a solution that performs the following tasks:
Sort the array of books:
Sort by title in ascending order.
Sort by author in descending order.
Sort by year in descending order.
Extract specific properties into separate arrays:
Create an array containing only the titles of books (sorted by title in ascending order).
Create an array containing only the authors of books (sorted by author in descending order).
Create an array containing only the publication years of books (sorted by year in descending order).
Ensure that the original array of books remains unaltered. */

const books = [
    {
        title: "Noughts & Crosses",
        author: "Malorie Blackman",
        publicationYear: 2001,
    },
    {
        title: "Priestdaddy",
        author: "Patricia Lockwood",
        publicationYear: 2017,
    },
    {
        author: "Deborah Levy",
        publicationYear: 2018,
        title: "The Cost of Living",
    },
];

  // Sort by title in ascending order
const sortedByTitleAscending = [...books].sort((a, b) => a.title.localeCompare(b.title)).map((book) => book.title);

// Sort by author in descending order
const sortedByAuthorDescending = [...books]
    .sort((a, b) => b.author.localeCompare(a.author))
    .map((book) => book.author);

// Sort by year in descending order
const sortedByYearDescending = [...books].sort((a, b) => a.publicationYear-b.publicationYear).map((book) => book.publicationYear);

console.log("Sorted by Title (Ascending):", sortedByTitleAscending);
console.log("Sorted by Author (Descending):", sortedByAuthorDescending);
console.log("Sorted by Year (Descending):", sortedByYearDescending);

