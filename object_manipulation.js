// For... in

const flower = {
    genus: "Allium",
    species: "Allium sativum",
    color: "Purple",
    height: 24,
    isEdible: true,
    isBlooming: true,
};

for (let key in flower) {
    console.log(`Property: ${key}, Value: ${flower[key]}`);
}

// hasOwnProperty built-in method:
//To check if a specific property exists directly on an object.
//To avoid errors and ensure that only the object's own properties are accessed.
const exercise = {
    name: "Deadlift",
    primaryMusclesWorked: "Erector spinae",
    equipment: "Barbell",
    exerciseType: "Strength",
    difficulty: "Intermediate",
};

for (let key in exercise) {
    if (exercise.hasOwnProperty(key)) {
        console.log(`Property: ${key}, Value: ${exercise[key]}`);
        }
}


const originalObject = {
    name: "Diamond Kite",
    color: "purple",
};


// Spread Operator
/**
 * Clone objects.
 * Add or modify properties.
 * Create new objects.
 */
// Create a cloned object by spreading the original object
const clonedObject = { ...originalObject }; // Cloning with the help of the spread operator

// Add a new property to the cloned object
clonedObject.size = "large"; // Adding a new property to the cloned object

console.log(originalObject); // Output: {name: 'Diamond Kite', color: 'purple'}
console.log(clonedObject); // Output: {name: 'Diamond Kite', color: 'purple', size: 'large'}


// add modify
const waterBottle = {
    brand: "HydroFlask",
    capacity: 32,
};

const extendedWaterBottle = {
    ...waterBottle,
    color: "blue",
    capacity: 24,
};

console.log(waterBottle); // Output: {brand: 'HydroFlask', capacity: 32}
console.log(extendedWaterBottle); // Output: {brand: 'HydroFlask', capacity: 24, color: 'blue'}


// merging objs

const apartmentFeatures = {
    size: "1200 square feet",
    bedrooms: 2,
    bathrooms: 2,
};

const apartmentDetails = {
    rent: 2000,
    location: "Downtown City",
};

const apartment = { ...apartmentFeatures, ...apartmentDetails };
console.log(apartment); // Output: {size: '1200 square feet', bedrooms: 2, bathrooms: 2, rent: 2000, location: 'Downtown City'}



// TODO


const personInfo = {
    name: "Ferry",
    age: 62,
    city: "Caracas",
  };
  
  const jobInfo = {
    experience: 7,
    occupation: "Speech-Language Pathologist",
  };
  
  // Task 1: merge two objects
  const fullInfo = {
    ...personInfo,
    ...jobInfo,
    isRetired: false, // Task 2: add the property
  };
  
  // Task 3: log each property and its value
  for (let key in fullInfo) {
    console.log(`${key}:`, fullInfo[key]);
  }


// Nested Object Destructuring

const person = {
    name: "Dean Mayert",
    profession: "Neuropsychologist",
    education: {
      degree: "Ph.D. in Neuropsychology",
      university: "Mind Institute",
      graduationYear: 2008,
    },
  };
  
  const {
    name,
    profession,
    education: { degree, university, graduationYear },
  } = person;
  
  console.log(name); // Output: Dean Mayert
  console.log(profession); // Output: Neuropsychologist
  console.log(degree); // Output: Ph.D. in Neuropsychology
  console.log(university); // Output: Mind Institute
  console.log(graduationYear); // Output: 2008


const movie = {
    movieName: "Going in Style",
    producer: "Donald De Line",
    duration: 96,
    budget: "$25 million",
};

// Destructure properties from the movie object
const { movieName, producer, duration, budget } = movie;

// Use the extracted properties
console.log(`Name: ${movieName}`); // Movie name
console.log(`Producer: ${producer}`); // Movie producer
console.log(`Duration: ${duration} minutes`); // Movie duration time
console.log(`Budget: ${budget}`); // Movie budget