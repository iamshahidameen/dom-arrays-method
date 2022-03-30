//Dom Elements
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

//Defined data array which will store objects in it.

let data = [];


//Fetch Random User From RandomUserApi and random money.

async function getRandomUser() {
    //Async Fetch Request
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    //Store Fetch Result in User
    let user = data.results[0]
    
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() *  9999999)
    }

    const personEl = document.createElement('div');
    const personNameEl = document.createElement('div');
    const personWealthEl = document.createElement('div');
    personEl.classList.add('person');
    
    // Data insertion into table
    personNameEl.innerText = `${newUser.name}`;
    personWealthEl.innerText = `$ ${newUser.money}`;

    // Append Childs
    personEl.appendChild(personNameEl);
    personEl.appendChild(personWealthEl);
    main.appendChild(personEl);

    addData(newUser);
}

//Add new Obj to data arr

function addData(newUser){
    data.push(newUser)
}
addUserBtn.addEventListener('click', getRandomUser)
console.log(data);