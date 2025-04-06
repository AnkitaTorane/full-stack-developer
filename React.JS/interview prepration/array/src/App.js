


function App() {
  // array length method
  const arr = ["apple", 45, "ankita", { name: "ankita" }]

  console.log(arr.length);

  // push method- add an element the the end

  const data = ["ankita", "akash", "akshay"]
  data.push("yash", "harish")
  console.log(data);
}

// pop method- remove the last element

const data = [1, 2, 3, 4, 5]
data.pop();
console.log(data)
// let popedval= data.pop()
// console.log(popedval) - return the removed value

// shift method- remove the first element
const color = ["red", "pink", "gray", "white"]
color.shift();
console.log(color)
// let shiftedval= color.shift();
// console.log(shiftedval);- return the removed value

// unshift method- add an element the the begining
const num = [12, 30, 40, 42, 50, 52]
num.unshift(999, "anu");
console.log(num)

// slice method - return a part of array

const fruit = ["mango", "apple", "Orange", "Strawberry", "Kiwi"]

const sliceTheArr = fruit.slice(1, 3);
// const sliceTheArr= fruit.slice(-5,-2);
console.log(sliceTheArr)

//  splice method- remove and replace element


const arr = ["mango", "apple", "Orange", "Strawberry", "Kiwi"]
const spliceTheArr = arr.splice(1, 3);

console.log(spliceTheArr)

// foreach method-

const array = [1, 2, 3, 4, 5, 6, 7, 8]

array.forEach(function (element, index) {
  console.log(element, index)
})
// map method- it will create  new array

const alfa = ["a", "b", "c", "d", "e", "f"]
const alfaValue = alfa.map((element, index) => {
  return element
})

console.log(alfaValue)

// filter method-

const number = [1, 2, 3, 4, 5, 6, 7, 8]

const even = number.filter(isEven);

function isEven(value) {
  return value % 2 === 0;

}
console.log(even)
// Reduce method- prev= previusevalue


let counts=[7,8,9,4,5,6,3]

let sum= counts.reduce((prev,current)=>{      
        console.log(prev);
        console.log(current);
        console.log("iteration 1");
        return prev+ current;

})

console.log(sum);

// find method- return the value  of the first array element  that passes a test funtion
 const names=["ankita","saanvi","sneha","vrunda"]
  
 const res= names.find(findvrunda);

 function findvrunda(item){
  return item ==='vrunda';
 }
console.log(res);

// some method- 

const fnd=[24,26,36,20,56]

function findFnd(num){
  return num> 30
}
console.log(fnd.some(findFnd))


// every method -

const evr=[20,30,40,50,60,80,70]
 function findevr(num){
  return num<5
 }
console.log(evr.every(findevr))





export default App;
