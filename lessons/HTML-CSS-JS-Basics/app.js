let name = "Alex"; let age = 21; let isStudent = true;
console.log(typeof name, typeof age, typeof isStudent);

const colors = ["red","green","blue"];
const person = { name, age, isStudent };
console.log(colors[0], person.name);

function add(a,b){ return a+b; }
console.log("2 + 3 =", add(2,3));

for(const c of colors){ if(c.length>3) console.log(c.toUpperCase()); }

function average(nums){
  // TODO: compute the average of an array
  return 0;
}
console.log("Average of [2,4,6] should be 4 ->", average([2,4,6]));
