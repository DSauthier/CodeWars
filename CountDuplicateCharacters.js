function duplicateCount(text){
  //...
  var count =0;
text = text.split("");
console.log(text)
var newObject = {}
for(var i =0;i<text.length;i++)
{
   console.log(text[i])
   if(newObject[text[i]]) newObject[text[i]]++
  
  else
  {
    newObject[text[i]]=1
  }
}
console.log(newObject)
var finalArray = Object.values(newObject);
console.log(finalArray)
for(var j=0;j<finalArray.length;j++)
{
  if(finalArray[j]>1)
  {
    count++
  }
}
return count
}


duplicateCount("aabbcdea")