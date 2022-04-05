const instructorWithLongestName = function(instructors) {
  let longLen = 0
  let len = 0
  for (let i = 0; i < instructors.length; i++)  {
    xy = instructors[i]
    len = xy['name'].length
    if (len > longLen)  {
      longLen = len
      ind = i
    }
  }
  return instructors[ind]['name']
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));