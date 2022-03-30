// Custom Method
//Dom Elements

// const main = document.getElementById('main');
// const addUserBtn = document.getElementById('add-user');
// const doubleBtn = document.getElementById('double');
// const showMillionairesBtn = document.getElementById('show-millionaires');
// const sortBtn = document.getElementById('sort');
// const calculateWealthBtn = document.getElementById('calculate-wealth');

// //Defined data array which will store objects in it.

// let data = [];


// //Fetch Random User From RandomUserApi and random money.

// async function getRandomUser() {
//     //Async Fetch Request
//     const res = await fetch('https://randomuser.me/api');
//     const data = await res.json();

//     //Store Fetch Result in User
//     let user = data.results[0]
    
//     const newUser = {
//         name: `${user.name.first} ${user.name.last}`,
//         money: Math.floor(Math.random() *  9999999)
//     }

//     const personEl = document.createElement('div');
//     const personNameEl = document.createElement('div');
//     const personWealthEl = document.createElement('div');
//     personEl.classList.add('person');
    
//     // Data insertion into table
//     personNameEl.innerText = `${newUser.name}`;
//     personWealthEl.innerText = `$ ${newUser.money}`;

//     // Append Childs
//     personEl.appendChild(personNameEl);
//     personEl.appendChild(personWealthEl);
//     main.appendChild(personEl);

//     addData(newUser);
// }

// function doubleMoney(){
//     data.map( (e)=> {
//         let moneyDoub = e.money * 2;
        
//     })
// }

// //Add new Obj to data arr

// function addData(newUser){
//     data.push(newUser)
// }
// addUserBtn.addEventListener('click', getRandomUser);
// doubleBtn.addEventListener('click', doubleMoney);
// console.log(data);


const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}

// Double eveyones money
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

// Sort users by richest
function sortByRichest() {
  console.log(123);
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

// Filter only millionaires
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDOM();
}

// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
