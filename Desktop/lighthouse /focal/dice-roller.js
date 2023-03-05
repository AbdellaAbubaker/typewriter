const diceNumber = (min, max) => {  // function is meant to get a random num from cmnd function 
    return Math.random () * (1-6) + 1 
}

const diceRoller = (dice) => {
    var output = "";               // this is the array 

    for (i = 1; i < Process.argv; i++) {
        diceNumber.push(output)
    }
}


// 1. Grab number from cmnd line 
// 2. Lop the number of dice from cmnd line 
// 3. Inside the lop generate the random number frm 1-6 
// 4. push the number into a result array and return number




    
