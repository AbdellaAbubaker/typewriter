const obj = {
    employee_1: {
        hourly: 10,
        position: 'retail'
    },
    employee_2: {
        hourly: 20,
        position: 'supervisor'
    },
    employee_3: {
        hourly: 15,
        position: 'retail'
    },
    employee_4: {
        hourly: 12,
        position: 'retail'
    },
    employee_5: {
        hourly: 30,
        position: 'manager'
    },
    employee_6: {
        hourly: 30,
        position: 'supervisor'
    },
};

/**
 * Write a function that can take in an employees
 * object and return an array of employee objects
 * for a specific position.
 */

// 1. Create an empty object 
// 2. Get the object keys for the positions and push into the empty object 
// 2. Make the empty object into an aray 


/**
 * Employee Position
 *
 * @param {object} employees Getting employees object 
 * @param {string} specificPosition Get the specific position 
 * @return {array} Position Return an array of employees objects 
 */

const printPosition = (employees, specificPosition) => {
    const newArr  = [];
  
    // processing takes place here.
    // Loopign through an object keys 
    for (let employeekey in employees ) {
        const position  = employees[employeekey].position
       
        // When we have the specific position push employee object
        if (position === specificPosition){
            // Using the key we are pushing this employee into new array 
           newArr.push( employees[employeekey]) 
        }
    }
    // Returns a number
   
    return newArr
  };
  console.log(printPosition(obj, 'manager' ))
//   [ {hourly: 30, position: manager } ]
console.log(printPosition(obj, 'supervisor' ))
//   [ {hourly: 30, position: supervisor}  {hourly: 30, position: supervisor } ]


/**
 * Write a function that can take in an employees
 * object and return an array of employee objects
 * that make above a given hourly.
 */

// 1. 
/**
 * Employee hours 
 *
 * @param {object} employees Getting employees object 
 * @param {number} specificHours Get the specific hours
 * @return {array} Position Return an array of employees objects above a certain hour 
 */

const printHours = (employees, specificHours) => {
    const newArr  = [];
  
    // processing takes place here.
    // Loopign through an object keys 
    for (let employeekey in employees ) {
        const hours  = employees[employeekey].hourly
       
        // When we have the specific position push employee object
        if (hours > specificHours){
            
           newArr.push( employees[employeekey]) 
        }
    }
    // Returns a number
   
    return newArr
  };
  console.log(printHours(obj, 10 ))
/*   [  {
    hourly: 20,
    position: 'supervisor'
},
 {
    hourly: 15,
    position: 'retail'
},
 {
    hourly: 12,
    position: 'retail'
},
 {
    hourly: 30,
    position: 'manager'
},
 {
    hourly: 30,
    position: 'supervisor'
}, ]
*/
console.log(printHours(obj, 30 ))
// []