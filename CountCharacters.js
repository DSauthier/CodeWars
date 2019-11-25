function count (string) {  
  // The function code should be here
  string = string.split("")
    let obj = {}
    for (let i =0; i < string.length;i++){
      console.log(string[i])
      if(obj[string[i]]==true) 
      {obj[string[i]]++}
      else obj[string[i]] = 1
    }
   if(string.length ===0)return {};
   else {return obj}
}
