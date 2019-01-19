String.prototype.camelCase=function(){
  //your code here
console.log(this)

let newArray = this.split(" ");
console.log(newArray)
for(let i =0 ;i<newArray.length;i++){
  newArray[i] = newArray[i].charAt(0).toUpperCase()+newArray[i].slice(1)
}
console.log(newArray)
let answer = newArray.join("")
return answer
}

// Write simple.camelCase method(camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
