
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
        console.log(data);
        myDisplayer(data);
    })
    .catch(error => {console.error("There is problem in fetching", error);});

    console.log("here");
}

function myDisplayer(some) {

    if (some.gender === null) {
        document.getElementById("Id-predictionGender").innerHTML = "Unknown";
    } 
    else {
        document.getElementById("Id-predictionGender").innerHTML = some.gender;
    }
    document.getElementById("Id-predictionNumber").innerHTML = some.probability;
    // document.getElementById("Id-pad").innerHTML = JSON.stringify(some);
}

/**
 * Set some setting.
 */
function configSetting() {

    /** Preventing default submit browser. */
    document.querySelector("#Id-submitButton").addEventListener("click", (event) => {

        /** For debbuging */
        console.log("preventDefault");

        event.preventDefault();
    });
}



function checkingGender() {
    const name = document.querySelector("#Id-textName").value.trim();
    if (testPattern(name)) {
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
    const name = document.getElementById("Id-textName").value.trim();
    const gender = document.querySelector("input[name=gender]:checked");
    console.log(name);
    console.log(gender.value);
    
    

    let exit = name === "";
    exit |= !testPattern(name);
    exit |= gender === null;
    if (exit) return;

    const p = new Person(name, gender.value);

    localStorage.setItem(p.name, p);
    console.log(localStorage.getItem(p.name).gender);
    

    document.getElementById("Id-boardInfo").style.visibility = "visible";
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
    document.getElementById("Id-boardInfo-p").innerHTML = "";
    document.getElementById("Id-boardInfo").style.visibility = "hidden";
}
