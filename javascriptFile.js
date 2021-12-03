
/**
 * It check if text match with regular expretion.
 * @param {string} text 
 */
function testPattern(text) {
    const temp = text.replaceAll(" ", "a");
    if (/(?:\W|\d|\t|\n|_)+/.test(temp)) return false;

    return true;
}

/**
 * Get a name and return prediction.
 * @param {string} name 
 */
function predictGender(name) {
    fetch("https://api.genderize.io/?name="+name)
    .then((response) => {
        if (!response.ok) throw new Error("Network has a problem");
        
        return response.json();
    })
    .then((data) => {
        importToBoardInfo(data);
    })
    .catch(error => {console.error("There is problem in fetching", error);});
}

/**
 * It replace probability of person who entered.
 * @param {Person} some 
 */
function importToBoardInfo(some) {

    if (some.gender === null) {
        document.getElementById("Id-predictionGender").innerHTML = "Unknown";
    } 
    else {
        document.getElementById("Id-predictionGender").innerHTML = some.gender;
    }
    document.getElementById("Id-predictionNumber").innerHTML = some.probability;
}

/**
 * Set some setting.
 * it is for prevnting default event handler.
 */
function configSetting() {
    /** Preventing default submit browser. */
    document.querySelector("#Id-submitButton").addEventListener("click", (event) => {
        event.preventDefault();
    });
}

/**
 * whenever the value of name input changes, it calls and try to get prediction.
 */
function checkingGender() {
    const name = document.querySelector("#Id-textName").value.trim();

    if (isPersonInputsCorrect()) {
        predictGender(name);
    }
}


class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    get cname() {
        return this.name;
    }
    get cgender() {
        return this.gender;
    }
    set cname(new_name) {
        this.name = new_name;
    }
    set cgender(g) {
        this.gender = g;
    }
}

/**
 * It take an object of Person and show it in board info
 * 
 */
function saveInfo() {
    // checking whether all inputs are full.
    const name = document.getElementById("Id-textName").value.trim();
    const gender = document.querySelector("input[name=gender]:checked");
    
    let exit = name === "";
    exit |= !testPattern(name);
    exit |= gender === null;
    if (exit) return;

    // create a person
    const p = new Person(name, gender.value);

    // add it to storage
    addPerson(p)

    // turn on visibility of board info
    document.getElementById("Id-boardInfo").style.visibility = "visible";

    // try to set the each person who are in storage.
    let isBoardEmpty = document.getElementById("Id-boardInfo-p").innerHTML === "";
    if (isBoardEmpty) {
        document.getElementById("Id-boardInfo-p").innerHTML = p.name + ", " + p.gender + "<br />";
    }
    else {
        console.log("empty n");
        
        document.getElementById("Id-boardInfo-p").innerHTML += p.name + ", " + p.gender + "<br />";
    }

}

function clearBoardInfo() {
    // checking whether all inputs are full.
    const name = document.getElementById("Id-textName").value.trim();
    const gender = document.querySelector("input[name=gender]:checked");
    
    let exit = name == "";
    exit |= !testPattern(name);
    exit |= gender == null;
    if (exit) return;

    // create a person
    const p = new Person(name, gender.value);

    // clear user
    let peopleArr = clearPerson(p)

    // check size
    if (peopleArr.length == 0 ) {
        document.getElementById("Id-boardInfo").style.visibility = "hidden";
        return;
    }

    // try to set the each person who are in storage.
    document.getElementById("Id-boardInfo-p").innerHTML = "";
    for (x of peopleArr.people) {
        document.getElementById("Id-boardInfo-p").innerHTML += x.name + ", " + x.gender + "<br />";
    }
        
}


function isPersonInputsCorrect() {
    const name = document.getElementById("Id-textName").value.trim();
    
    let incorrect = name === "";
    incorrect |= !testPattern(name);

    return !incorrect;
}


function addPerson(p) {
    // get json string from storage.
    let buffer = localStorage.getItem("PEOPLE_STORAGE");
    
    // check it whether it is exist or not
    if (buffer === null) {
        // assign new json string
        localStorage.setItem("PEOPLE_STORAGE",  "{\"people\":[]}");
        buffer = "{\"people\":[]}"
    }
    
    // parse
    buffer = JSON.parse(buffer);
    
    buffer.people.push(p);

    localStorage.setItem("PEOPLE_STORAGE",  JSON.stringify(buffer));

    return buffer;
}

function clearPerson(p) {
    let buffer = localStorage.getItem("PEOPLE_STORAGE");
    
    if (buffer == null) return;

    buffer = JSON.parse(buffer);

    let newP = {people:[]};
    for(x of buffer.people) {

        if ( p.name == x.name ) {
            console.log(x);
        } else {

            newP.people.push(x);
        }
    }

    localStorage.setItem("PEOPLE_STORAGE",  JSON.stringify(newP));

    return newP;
}