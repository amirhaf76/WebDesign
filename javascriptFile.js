
/**
 * It check if text match with regular expretion.
 * @param {string} text 
 */
function testPattern(text) {
    return /[a-zA-Z ]+/.test(text)
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
    .then((data) => JSON.stringify(data))
    .catch(error => {console.error("There is problem in fetching", error);});
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
