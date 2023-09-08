/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for(let i=0;i<pets.length;i++)
{
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const vett=[];
for(let i=0;i< pets.length;i++)
{
   vett[i]=pets[i]
};
vett.sort();
console.log(vett);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let animale=pets[0];
for (let i=0; i< pets.length-1;i++)
{
    pets[i]=pets[i+1];
}
pets[pets.length-1]=animale;
console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'yellow',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'red',
    trims: ['life', 'style', 'r-line'],
  },
]

for(let i=0;i<cars.length;i++)
{
  cars[i].licensePlate=["FR456WE", "RM967GF", "NA793ER"]
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


for(let i=0; i<cars.length-1;i++)
{
    cars[i]=cars[i+1];
}
cars[cars.length-1]=
{
  brand:"Skoda",
  model:"scala",
  color:"blue",
  trims:["life", "style"],
  licensePlate:["FR456WE", "RM967GF", "NA793ER"],
};
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i=0; i< cars.length;i++)
{
  justTrims[i]=cars[i].trims[0];
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
let check;
for(let i=0; i<cars.length;i++)
{
  check=cars[i].color.slice(0,1);
  if (check==="b")
  {
    console.log("Fizz")
   
  }
  else if (check!=="b")
  {
    console.log("Buzz");
  }

  
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i=0
let save=0;
for(let i=0;i<numericArray.length;i++)
{
  if (numericArray[i]===32)
  {
     save=i;
  }
}
while (i<save)
{
  console.log(numericArray[i]);
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['b', 'n', 'u', 'z', 'd']
let position=[];
let j=0
for (let i=0; i< charactersArray.length;i++)
{
  switch (charactersArray[i])
  {
    case "a": 
          position[j]=1;
          j++;
          break;
    case "b":
          position[j]=2;
          j++;
          break;
    case "c":
          position[j]=3;
          j++;
          break;
    case "d":
          position[j]=4;
          j++;
          break;
          case "e":
            position[j]=5;
            j++;
            break;
            case "f":
          position[j]=6;
          j++;
          break;
          case "g":
          position[j]=7;
          j++;
          break;
          case "h":
          position[j]=8;
          j++;
          break;
          case "i":
          position[j]=9;
          j++;
          break;
          case "j":
          position[j]=10;
          j++;
          break;
          case "k":
          position[j]=11;
          j++;
          break;
          case "l":
          position[j]=12;
          j++;
          break;
          case "m":
          position[j]=13;
          j++;
          break;
          case "n":
          position[j]=14;
          j++;
          break;
          case "o":
          position[j]=15;
          j++;
          break;
          case "p":
          position[j]=16;
          j++;
          break;
          case "q":
          position[j]=17;
          j++;
          break;
          case "r":
          position[j]=18;
          j++;
          break;
          case "s":
          position[j]=19;
          j++;
          break;
          case "t":
          position[j]=20;
          j++;
          break;
          case "u":
          position[j]=21;
          j++;
          break;
          case "v":
          position[j]=22;
          j++;
          break;
          case "w":
          position[j]=23;
          j++;
          break;
          case "x":
          position[j]=24;
          j++;
          break;
          case "y":
          position[j]=25;
          j++;
          break;
          case "z":
          position[j]=26;
          j++;
          break;
}

}
console.log(position);