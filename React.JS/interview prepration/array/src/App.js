
import './App.css';

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
const num=[12,30,40,42,50,52]
num.unshift(999,"anu");
console.log(num)

// slice method - return a part of array

const fruit=["mango","apple","Orange","Strawberry","Kiwi"]

const sliceTheArr= fruit.slice(1,3);
// const sliceTheArr= fruit.slice(-5,-2);
console.log(sliceTheArr)

//  splice method- remove and replace element


const arr=["mango","apple","Orange","Strawberry","Kiwi"]
const spliceTheArr= arr.splice(1,3);

console.log(spliceTheArr)
 
// foreach method-

const array=[1,2,3,4,5,6,7,8]

array.forEach(function(element, index){
console.log(element, index)
})
// for forEach method







export default App;
