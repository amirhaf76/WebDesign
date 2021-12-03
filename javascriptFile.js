
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
    document.getElementById("Id-predictionGender").innerHTML = some.name;
    document.getElementById("Id-predictionNumber").innerHTML = some.probability;
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
    const name = document.querySelector("#Id-textName").value;
    if (testPattern(name)) {
        predictGender(name);
    }
}