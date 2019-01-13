"use strict"; // triggers compiler so that certain things will give errors, ex. assigning values to variables without declaration

// self-executing anonymous function aka IIFE (Immediately Invoked Function Expression)
(function(){ // IFFE header
    let myFunctionalVariable = 0;

    function Start() { // named function
        let myLocalVariable = 0;
        console.log(`App Started...${myFunctionalVariable}`); // use back ticks(``) instead of double quotation marks ("")
        // injects value instead of concatenating
    }

    window.addEventListener("load", Start); // call back
})();