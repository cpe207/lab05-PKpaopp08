// assign interface/type to the function definition properly
function findTopNames(students) {
    var filterscore = students.filter(function (st) { return st.score > 8; }).map(function (st) { return st.name; });
    return filterscore;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
