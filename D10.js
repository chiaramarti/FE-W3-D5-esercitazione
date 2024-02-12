/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A      ok
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let x = 10;
let y = 20;
const sum1 = x + y;

console.log(sum1);

const sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(10, 20));

/* ESERCIZIO B    ok
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * (20 - 0 + 1));

console.log(random);

/* ESERCIZIO C   ok
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
class Student {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

let me = new Student("chiara", "martinelli", 29);

console.log(me);

/* ESERCIZIO D    ok
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E    ok
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["javascript"];
console.log(me);

/* ESERCIZIO F    ok
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
const addSkill = function (skill) {
  me.skills.push(skill);
};

addSkill("PHP");
console.log(me);

/* ESERCIZIO G   ok
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

const removeSkill = function () {
  me.skills.pop();
};

removeSkill();
console.log(me);

/* ESERCIZIO 1   ok
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(dice());

/* ESERCIZIO 2   ok
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let n1 = dice();
let n2 = dice();

const whoIsBigger = (n1, n2) => Math.max(n1, n2);

console.log(`tra ${n1} e ${n2} il numero maggiore è: `, whoIsBigger(n1, n2));

/* ESERCIZIO 3     ok
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (myString) => myString.split(" ");

console.log("ma che belli gli esercizi di stamattina", splitMe("ma che belli gli esercizi di stamattina"));

/* ESERCIZIO 4   ok  
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (myString) {
  if (myString.length >= 15) {
    return myString.slice(1, myString.length);
  } else {
    if (myString.length === 0) {
      return "devi inserire una stringa";
    } else {
      return myString.slice(0, myString.length - 1);
    }
  }
};

console.log("esercizi di stamattina (più di 15 c.)-->", deleteOne("esercizi di stamattina"));
console.log("esercizi (meno di 15 c.)-->", deleteOne("esercizi"));

/* ESERCIZIO 5  ok
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

//regularexpression (era meglio usare if-else) oppure .filter
const onlyLetters = (myStringWNumber) => myStringWNumber.match(/\D/g).join("").replace("  ", " ");

console.log("hemingway è 1 gatto  ----->  ", onlyLetters("hemingway è 1 gatto"));

// autocorrezione split / filter / isNaN
const onlyLetters2 = (stringWithNumbers) =>
  stringWithNumbers
    .split(" ")
    .filter((char) => isNaN(char))
    .join(" ");

console.log("hemingway è 1 gatto  ----->  ", onlyLetters2("hemingway è 1 gatto"));

/* ESERCIZIO 6   ok
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (myEmail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myEmail)) {
    return true;
  } else {
    return false;
  }
};

console.log(isThisAnEmail("chicca@gmail.com"));
console.log(isThisAnEmail("chiccagmail.com"));

// autocorrezione senza regular expression

const isThisAnEmail2 = (myEmail) => {
  let at = myEmail.indexOf("@");
  let dot = myEmail.lastIndexOf(".");
  let space = myEmail.indexOf(" ");

  if (
    at != -1 &&
    at != 0 &&
    dot != -1 &&
    dot != 0 && // controllo che @ e . siano presenti e non in prima posizione
    dot > at + 1 &&
    myEmail.length > dot + 1 &&
    space == -1
  ) {
    alert("Email address is valid.");
    return true;
  } else {
    alert("Error !!! Email address is not valid.");
    return false;
  }
};

// console.log(isThisAnEmail2('martinellichiara94@gmail.com'))
// console.log(isThisAnEmail2('martinellichiara94gmail.com'))

/* ESERCIZIO 7   ok
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const d = new Date();
  return days[d.getDay()];
};

console.log(whatDayIsIt());

/* ESERCIZIO 8    ok
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (rolls) {
  let sum = 0;
  let values = [];

  for (let i = 0; i < rolls; i++) {
    let nRandom = dice();
    values.push(nRandom);
    sum += nRandom;
  }

  return {
    sum: sum,
    values: values,
  };
};

console.log(rollTheDices(7));

/* ESERCIZIO 9   ok
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (date) => {
  let passedDate = new Date(date);
  let now = new Date();

  let differencesInTime = now.getTime() - passedDate.getTime();

  let differencesInDays = Math.round(differencesInTime / (1000 * 3600 * 24));

  return differencesInDays;
};

console.log(howManyDays("01/16/2024"));

/* ESERCIZIO 10   ok
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = (date) => {
  const today = new Date();
  const birthday = new Date(date);

  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;

  const birthdayDay = birthday.getDate();
  const birthdayMonth = birthday.getMonth() + 1;

  if (todayDay === birthdayDay && todayMonth === birthdayMonth) {
    return "wow! happy birthday to you";
  } else {
    return "buon non compleanno...a te! a te! a te!";
  }
};

console.log(isTodayMyBirthday("1994-07-20"));
console.log(isTodayMyBirthday("1990-02-02"));
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11    ok
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, propName) {
  if (obj.hasOwnProperty(propName)) {
    // If it exists, delete the property
    delete obj[propName];
  }
  return obj;
}
const objFirstFilm = Object.assign({}, movies[0]);
console.log("Before deleting property:", objFirstFilm);

const modifiedObj = deleteProp(objFirstFilm, "Poster"); // Deleting the property "Poster"
console.log("After deleting property:", modifiedObj);

/* ESERCIZIO 12    ok
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (array) {
  let result = array[0];

  if (Array.isArray(array)) {
    array.forEach((movie) => {
      const currentYear = parseInt(movie.Year);

      if (currentYear > result.Year) {
        result = movie;
      }
    });
  }

  return result;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13   ok
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (myArr) => myArr.length;

console.log(countMovies(movies));

/* ESERCIZIO 14     ok
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function (myArr) {
  const newArr = [];
  myArr.forEach((movie) => newArr.push(movie.Year));
  return newArr;
};

console.log(onlyTheYears(movies));
/* ESERCIZIO 15     ok
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (myArr) =>
  myArr.filter((movie) => parseInt(movie.Year) >= 1900 && parseInt(movie.Year) <= 2000);

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16    ok
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (myArr) =>
  myArr.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.Year), 0);

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17     ok
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (arr, search) => {
  arr = arr.filter((curr) => curr["Title"].includes(search));
  return arr;
};

console.log(searchByTitle(movies, "Avengers"));

/* ESERCIZIO 18    ok
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(search) {
  const match = [];
  const unmatch = [];

  movies.forEach((movie) => {
    // Check if the Title of the movie includes the keyword
    if (movie.Title.toLowerCase().includes(search.toLowerCase())) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  });

  return {
    match: match,
    unmatch: unmatch,
  };
}

const searchResult = searchAndDivide("Lord");
console.log("Matched movies:", searchResult.match);
console.log("Unmatched movies:", searchResult.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(index) {
  if (index >= 0 && index < movies.length) {
    movies.splice(index, 1);
  }

  return movies;
}

console.log("Movies array prima di usare la funzione:", movies);
const modifiedMovies = removeIndex(2);
console.log("Movies array dopo aver usato la funzione removeIndex:", modifiedMovies);

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectContainer = () => document.getElementById("container");

console.log(selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectAllTd = () => document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// Array.from(selectAllTd()).forEach((td) => console.log(td.textContent));

// la trasformo in funzione
function printTdText() {
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    console.log(td.textContent);
  });
}

printTdText();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

// Array.from(selectAllTd()).forEach((td) => (td.style.backgroundColor = "red"));

// la trasformo in funzione
function addRedBackgroundToLinks() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.backgroundColor = "red";
  });
}

addRedBackgroundToLinks();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const createNewLi = function () {
  const myList = document.getElementById("myList");
  const newLi = document.createElement("li");
  newLi.textContent = "New item";
  myList.appendChild(newLi);
};

createNewLi();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function listToVoid() {
  const myList = document.getElementById("myList");
  myList.innerHTML = ""; // Set innerHTML to an empty string to remove all list items
}

listToVoid();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addTestClassToRows() {
  const rows = document.querySelectorAll("tr");
  rows.forEach((row) => {
    row.classList.add("test");
  });
}

addTestClassToRows();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
*/

function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****
*/

function tree(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
