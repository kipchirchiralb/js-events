// fetch() api -- non-blocking / assynchrous
// we can write assynchonous by creating our own promises
// --- research on how to create promises in js -- new Promise -- .then .catch
// alternatively you could use async await

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/random")
  .then((resp) => resp.json())
  .then((data) => {
    // consume the data -- creating elements
    // console.log(data[0].meanings[0].definitions);
    console.log(data);

    let definitionEl = document.createElement("h2");
    let wordEl = document.createElement("h1");

    definitionEl.append(data[0].meanings[0].definitions[0].definition);
    wordEl.append(data[0].word);

    document.body.appendChild(wordEl);
    document.body.append(definitionEl);
    console.log(document.querySelector("h2").parentElement);

    document.body.style.margin = "100px";
  })
  .catch((err) => {
    console.log(err);
  });
// console.log("Hello 2");
// console.log("Hello 1");

let age = 3;
console.log("I am " + age + "yrs old."); // string concatenation
console.log(`I am ${age} yrs old.`); // template literals

let cardEl = document.getElementById("card");
cardEl.style.border = "2px solid red";
cardEl.style.margin = "20px";
cardEl.style.padding = "10px";

if (age > 18) {
  cardEl.setAttribute("class", "card light-bg");
}

let pEl = document.querySelector("p");
console.log(pEl.classList.add("peru"));
console.log(pEl.classList.remove("p"));
console.log(pEl.classList.contains("p")); //false
console.log(pEl.classList.contains("peru")); // true

// difference btw a nodelist and html collection in DOM manipulation
