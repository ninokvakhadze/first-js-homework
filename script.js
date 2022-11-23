function exercie1 (a, b) {
    if (a === b) {
    return "equal";
}  else {  
  return "not equal"
}
}
console.log(exercie1(2, 2)) // true
console.log(exercie1(5, 6)) //not equal



function convertFtoC(F) {
    if (typeof F !== "number" ){
        return false
    }else {
        return F*5/(9*32)
    }
}
console.log(convertFtoC(451)) //232.777778


function calculate(a, b, operation){
    if (typeof a !== "number" && typeof b !== "number" && 
    typeof operation !== "+" && typeof operation !=="-" && typeof
   operation !=="/" && typeof operation !=="*" ){
    return false
}
  else if (operation === "+")
  return a+b
  else if (operation ==="-")
  return a-b
  else if (operation ==="/")
  return a/b
  else if (operation ==="*")
  return a*b

}
 console.log(calculate(6, 8, "+")) //48

