// find the  square root of each element ina an array
let array =[4,9,16,25,36,49,64,81,100,144]
let newArray=array.map((element)=>{
    return Math.sqrt(element)
});
console.log(newArray);