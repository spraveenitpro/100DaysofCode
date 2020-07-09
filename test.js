/**
 *
 *
 * @param {*} original
 * @param {*} attach
 */

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const sumOfages = users.reduce()

/* const array1 = [1, 2, 3];

const total = array1.reduce((acc, cur) => acc + cur);
total;
 */

// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 },
// ];

// const sumOfages = users.reduce((sum, user) => sum + user.age);
// console.log(sumOfages)

// The global variable
// var watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     Plot:
//       "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot:
//       "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot:
//       "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot:
//       "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot:
//       "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// function getRating(watchList) {
//   // Only change code below this line
//   var averageRating =
//     watchList
//       .filter((film) => film.Director === "Christopher Nolan") // Filter out all the movies by Christopher Nolan into a new array
//       .map((film) => Number(film.imdbRating)) // Extract all the imdb ratings into a new array while converting them to a numerical value
//       .reduce((acc, rating) => acc + rating) /
//     watchList.filter((film) => film.Director === "Christopher Nolan").length; // Find the average of the IMDB ratings with .reduce

//   return averageRating;
// }

// getRating(watchList); //?

// const squareList = (arr) => {
//   // Only change code below this line
//   return arr
//     .filter((number) => number > 0)
//     .filter((number) => Number.isInteger(number)) //?
//     .map((number) => number * number);

//   // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);
// squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]); //?

// function ascendingOrder(arr) {
//   return arr.sort(function (a, b) {
//     return a - b;
//   });
// }

// ascendingOrder([1, 5, 2, 3, 4]); //?

// function reverseAlpha(arr) {
//   return arr.sort(function (a, b) {
//     return a === b ? 0 : a < b ? 1 : -1;
//   });
// }

// reverseAlpha(["l", "h", "z", "b", "s"]); //?

// function alphabeticalOrder(arr) {
//   return arr.sort(function (a, b) {
//     return a === b ? 0 : a < b ? -1 : 1;
//   });
// }

// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); //?

// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Only change code below this line
//   return [].concat(arr).sort(function (a, b) {
//     return a - b;
//   });

//   // Only change code above this line
// }
// nonMutatingSort(globalArray);

// function splitify(str) {
//   // Only change code below this line

//   return str.split(/\W/); //?
//   // Only change code above this line
// }
// splitify("Hello World,I-am code");

// function sentensify(str) {
//   // Only change code below this line

//   return str.split(/\W/).join(" "); //?

//   // Only change code above this line
// }
// sentensify("May-the-force-be-with-you");

// // The global variable
// var globalTitle = "Winter Is Coming";

// // Only change code below this line
// function urlSlug(title) {
//   return title
//     .split(" ")
//     .filter((obj) => {
//       return obj !== "";
//     })

//     .join("-")
//     .toLowerCase(); //?
// }
// // Only change code above this line
// urlSlug("Winter Is Coming"); //?
// urlSlug(" Winter Is  Coming"); //?

// function unCurried(x,y) {
//   return x + y;
// }

// unCurried(4,7) //?

// function curried(x) {
//   return function (y) {
//     return x + y;
//   }
// }

// curried (3)(5) //?

// const curried2 = x => y => x + y;

// curried2(2)(5) //?

// function add(x) {
//   // Only change code below this line

// return function (y) {
//   return function(z) {
//     return x + y + z;
//   }
// }
//   // Only change code above this line
// }
// add(10)(20)(30); //?

function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    console.log(`comparing ${a} and ${b}`);
    return a > b ? 1 : a === b ? 0 : -1;
  });
}

ascendingOrder([1, 5, 2, 3, 4]); //?

var numbers = [43, 2, 1, 4, 23, 5, 3, 76, 13];
numbers.sort((a, b) => a - b); //?

numbers.sort((a, b) => (a > b ? -1 : a === b ? 0 : 1)); //?

function sumAll(arr) {
  var min = Math.min(...arr); //?
  var max = Math.max(...arr); //?
  var j = 0;
  for (var i = min, j = 0; i <= max; i++) {
    j = j + i;
  }

  return j;
}

sumAll([1, 4]); //?

function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); //?

function diffArray(arr1, arr2) {
  var newArr = [];

  function notinArray(first, second) {
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  notinArray(arr1, arr2);
  notinArray(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //?
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
); //?

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);

  return arr.filter(function (val) {
    console.log(val);
    return !args.includes(val);
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3); //?

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source); //?
  return collection.filter(function (obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/) //?
    .join("-")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap"); //?

function sumAll2(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var j = 0;
  for (var i = min; i <= max; i++) {
    j = j + i;
  }
  return j;
}

sumAll2([1, 4]); //?

function diffArray2(arr1, arr2) {
  var newArr = [];

  function checkarr(a1, a2) {
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        newArr.push(a1[i]);
      }
    }
  }
  checkarr(arr1, arr2);
  checkarr(arr2, arr1);
  return newArr;
}

diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]); //?

function destroyer2(arr) {
  var args = Array.from(arguments).slice(1);

  return arr.filter(function (val) {
    return !args.includes(val);
  });
}

destroyer2([1, 2, 3, 1, 2, 3], 2, 3); //?

function whatIsInAName2(collection, source) {
  var arr = collection.filter(function (item) {
    for (var i in source) {
      if (source[i] != item[i]) {
        return false; //?
      }
    }
    return true;
  });
  return arr; //?
}

whatIsInAName2(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

const person = {
  name: "Edward",
  city: "New York",
  age: 37,
  isStudent: true,
  skills: ["javascript", "html", "css"],
};
person.country = "India";
const message = `Hi, I am ${person.name} , I live in ${person.city} I am from ${person.country} I have ${person.skills.length} skills`; //?

person;

for (let key in person) {
  console.log(`${key} => ${person[key]}`);
}

const personProps = Object.keys(person); //?
console.log(personProps);
personProps;

const personInfo = Object.values(person);
personInfo;

const pets = [
  {
    name: "Joey",
    type: "Dog",
    breed: "Australian Shepherd",
    age: 8,
    photo: "img/aussie.jpg",
  },
  {
    name: "Patches",
    type: "Cat",
    breed: "Domestic Shorthair",
    age: 1,
    photo: "img/tabby.jpg",
  },
  {
    name: "Pugsley",
    type: "Dog",
    breed: "Pug",
    age: 6,
    photo: "img/pug.jpg",
  },
  {
    name: "Simba",
    type: "Cat",
    breed: "Persian",
    age: 5,
    photo: "img/persian.jpg",
  },
  {
    name: "Comet",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    photo: "img/golden.jpg",
  },
];
let html = "";
for (let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  html += `
    
    <H2> ${pet.name}</H2>
    <h3> Type is ${pet.type}</h3>
    <h3> Breed is ${pet.Breed}</h3>
    <p> Age is ${pet.age}</p>
    `;
}

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);

  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant"); //?

function myReplace(str, before, after) {
  return str
    .split(" ")
    .map((x) =>
      x == before
        ? x[0] == x[0].toUpperCase()
          ? after[0].toUpperCase() + after.slice(1)
          : after.toLowerCase()
        : x
    )
    .join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); //?

function myReplace1(str, before, after) {
  return str
    .split(" ")
    .map((x) =>
      x == before
        ? x[0] == x[0].toUpperCase()
          ? after[0].toUpperCase() + after.slice(1)
          : after.toLowerCase()
        : x
    )
    .join(" ");
}

myReplace1("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); //?

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce"); //?

function uniteUnique(...arrays) {
  const flatArray = [].concat(...arrays); //?
  return [...new Set(flatArray)]; //?
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split(" ")
    .map((word) => htmlEntities[word] || word)
    .join(" "); //?
}

convertHTML("Dolce & Gabbana"); //?

//1,1,2,3,5,8,13,21...

function fibonacci(num) {
  var a = 0;
  var b = 1;
  var result = b;

  for (var i = 1; i < num; i++) {
    console.log(result);
    result = a + b; //?
    a = b;
    b = result;
  }
}

fibonacci(10); //?
