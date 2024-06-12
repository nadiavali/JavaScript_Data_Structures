const weekdays = ["Monday", "Tuesday", "Wednesday"];
weekdays[0] = "Lunes";
weekdays[1] = "Martes";

console.log(weekdays); // Output: Lunes, Martes, Wednesday in array

const mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse"];
//It represents the number of elements in the array
// and adjusts automatically when elements are added or removed.
console.log(mountains.length); // Output: 4

// find the last element
const vehicles = ["car", "bike", "bus", "train"];
const lastIndex = vehicles.length - 1;

console.log(vehicles[lastIndex]); // Output: train



// Task 1: Initial array
const cities = ["Shanghai"
,"Sydney"
,"Toronto"
,"Frankfurt"];

// Task 2: Modify a city name
cities[2] = "Miami";

// Modified array
console.log(cities); // Output: Shanghai, Sydney, Miami, Frankfurt

// Task 3: Log array length
console.log("Array length:", cities.length); // Output: Array length: 4

// Task 4: Access and log the last city
console.log("Last city:",cities[cities.length-1] ); // Output: Last city: Frankfurt



/*Line 1: This line declares an array called students and initializes it with three strings, 
which represent the students' names. The array contains "Brandon", "Mario", and "Saul".
Line 3: This line starts a for loop. It has three parts separated by semicolons:
let i = 0;: This part initializes a variable i and sets it to 0. i is used as a loop counter.
i < students.length;: This part is the condition for the loop to continue. The loop will continue 
as long as i is less than the length of the students array.
i += 1: This part is the update statement, which increments the value of i by 1 after each iteration.
Line 4: Inside the for loop, this line uses the console.log() function to log the value at the i-th index 
of the students array. In the first iteration, i is 0, so it logs the name at index 0, which is "Brandon".
In the second iteration, it logs "Mario", and in the third iteration, it logs "Saul".*/ 
const students = ["Brandon", "Mario", "Saul",'o'];

for (let i = 0; i < students.length; i += 1) {
    console.log(students[i]);
}

//The for...of loop is a more modern and concise way to iterate over arrays.
// It automatically handles the loop counter and provides direct access to each element's value. 

const friends = [
    {
        name: "Gail Russel",
        address: "803 Kozey Rapid",
        phone: "(317) 833-9935 41777",
    },
    {
        name: "Mrs. Laurie Wunsch",
        address: "7361 Austin Road",
        phone: "(728) 884-9049 4760",
    },
];

// Use a for...of loop
for (const friend of friends) {
    friend.online = false;
}

/*Second Loop: Logs the name and online status of each friend. 
The ternary operator friend.online ? "online" : "offline" checks
if the online property is true or false and returns the corresponding string.*/
for (const friend of friends) {
    console.log(
    `Friend name is ${friend.name}, ${friend.online ? "online" : "offline"}`
    );
}


//another

const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    },
    {
        title: "1984",
        author: "George Orwell"
    }
];

// Use a for...of loop to add the read property to each book
for (const book of books) {
    book.read = true;  // Adding the property read with value false
}

// Logging specific properties after modifications
for (const book of books) {
    console.log(
    `Book title is "${book.title}", ${book.read ? "well read" : "not read"}`
    );
}
