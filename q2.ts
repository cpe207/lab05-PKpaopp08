  interface student{
    name: string;
    score: number;
  }
  
  // assign interface/type to the function definition properly
  function findTopNames(students) {
    const filterscore = students.filter((st) => st.score > 8).map((st) =>st.name);
    return filterscore;
  }

  // assign interface/type to the student1 object properly
  const students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
  ];

  console.log(findTopNames(students1));

  module.exports = findTopNames;
