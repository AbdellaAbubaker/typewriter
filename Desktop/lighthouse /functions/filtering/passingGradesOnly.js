
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35].filter(passingGrade);

const passingGrade = function(grades){
    return grades >= 70
}

const passingGrades = grades.filter(passingGrade);
console.log(passingGrades);


