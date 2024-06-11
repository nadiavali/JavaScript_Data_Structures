//If a key is enclosed in quotes (single or double),
//it can be an arbitrary string. You can use spaces,
// special characters, and valid string content as the key.
// otherVERYwise The key should be a name without spaces and 
//should begin with a letter or one of the characters: _, $
//or any Unicode character

const person = {
    "first name": "Terry",
    "favorite color": "blue",
    "address@home": "485 Schaefer Stream",
    };

const Auto = {
    manufacturer: "Toyota",
    _model: "Camry",
    $year: 2022,
};

const employee = {
    companyName: "Schuster, Mertz and Marks",
    name: "Miss Alma Boyer",
    address: "2277 Karine Plains",
    workedYears: 4,
    remote: false,
};

console.log(employee.name); // Output: Miss Alma Boyer
console.log(employee.address); // Output: 2277 Karine Plains
console.log(employee.lastName); // Output: undefined

//less frequently than dot notation
// to access the key's property they must be in STRINGGG


console.log(employee["name"]); // Output: Miss Alma Boyer
console.log(employee["address"]); // Output: 2277 Karine Plains
console.log(employee["lastName"]); // Output: undefined


// I love Data!
const course = {
    courseName: "Applied Science",
    courseDuration: "48 hours",
    author: {
        position: "Nuclear Physicist",
        age: 43,
        name: {
            first: "Mattie",
            last: "Crooks",
            },
    },
};

console.log(course.author.position); // Output: Nuclear Physicist
console.log(course.author.age); // Output: 43
console.log(course.author.name.first); // Output: Mattie
console.log(course.author.name.last); // Output: Crooks



const user = {
    name: "Sarah",
    age: 32,
    hobbies: {
        outdoor: "hiking",
        indoor: "painting",
    },
    preferences: {
        music: "jazz",
        movieGenre: "sci-fi",
    },
};
// Task 1
console.log(user.name); // person's name

  // Task 2
console.log(user.hobbies.indoor); // indoor hobby

// Task 3
const userAge = user.age;
console.log(userAge); // person's age

// Task 4
console.log(user.preferences.music); // music genre


const company = {
    title: "Toyota",
    nativeName: "トヨタ自動車株式会社",
    industry: "Pharmacy",
    founded: {
        year: 1996,
        month: "August",
        day: 28,
    },
};

//modifying

company.industry = "Automotive";
company.founded.year = 1937;

console.log(company.industry); // Output: Automotive
console.log(company.founded.year); // Output: 1937


// adding
company.founder = "Kiichiro Toyoda";

console.log(company.founder); // Output: Kiichiro Toyoda


// Using Shorthand Properties


const name = "Carl Benz";
const birthCountry = "Germany";

const someone= {
    name: name,
    birthCountry: birthCountry,
};


console.log(someone.name); // Output: Carl Benz
console.log(someone.birthCountry); // Output: Germany

const someone1 = {
    name,
    birthCountry,
};

console.log(someone1.name); // Output: Carl Benz
console.log(someone1.birthCountry); // Output: Germany



//Object methods
const shoppingCart = {
    product: "apple",
    quantity: 7,
    // This is an object method
    getProduct() {
        console.log("This method can return the product name.");
    },
};

// Method calls
shoppingCart.getProduct();


//Access Object Properties in Methods using "This"

const furniture = {
    type: "wardrobe",
    manufacturer: "Belgium",
    color: "wenge magic",

    getColor() {
        console.log(this.color);
    },

    addProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    },

    modifyProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    },

    getInfo(){
        console.log(this)},

};

// Access the 'color' property of the furniture and log it to the console.
furniture.getColor(); // Output: wenge magic

// Add a new property to the furniture object using the 'addProperty' method.
furniture.addProperty("material", "wood");
console.log(furniture.material); // Output: wood

// Modify an existing property using the 'modifyProperty' method.
furniture.modifyProperty("color", "oak");
console.log(furniture.color); // Output: oak
furniture.getInfo()


//Task
const car = {
    make: "Ford",
    model: "F-150",
    basePrice: 72000,
    options: {
        leatherSeats: 2400,
        sunroof: 100,
        navigationSystem: 1650,
    },
    calculateTotalPrice() {
        const totalPrice = this.basePrice + this.options.leatherSeats
        + this.options.sunroof + this.options.navigationSystem;
        console.log("Total price is", totalPrice);
    },
};

car.calculateTotalPrice();