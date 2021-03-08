function isEvenlyDivisible(num1, num2) {
  return num1%num2 === 0;
}

function halfSquare(num) {
  return Math.pow(num,2)/2;
}

function isLong(str) {
  return str.length>=15;
}

function exclaim(str) {
  let newStr = ''
  if (str[str.length-1] !== '!'){
    for (let i=0; i<str.length;i++){
      newStr+=str[i]
    }
    newStr = newStr+'!'
  } else if(str.indexOf('!') !== str.length-1){
    for (let i = 0; i<str.indexOf('!')+1;i++){
      newStr += str[i]
    }
  } else {
    for (let i=0; i<str.length;i++){
      newStr+=str[i]
    }
  }
  return newStr
} 

function countWords(str) {
  let spaces = 0;
  for (const letter of str){
    if (letter === ' '){
      spaces+=1
    }
  }
  return spaces+1
}

function containsDigit(str) {
  let isNumber = false;
  for (const digit of str){
    if (parseInt(digit)){
      isNumber = true;
    } else{
      continue;
    }
  }
  return isNumber;
}

function containsLowerCase(str) {
  let isLower = false;
  for (const value of str){
    // console.log(value);
    // console.log(value !== '!' && value !== ' ')
    if ((value === value.toLowerCase() && !parseInt(value)) && (value !== '!' && value !== ' ')){
      isLower = true;
      if (value === '0'){
        isLower = false;
        }
    }
  }
  return isLower;
}

function containsUpperCase(str) {
  let isHigher = false;
  for (const value of str){
    if (value === value.toUpperCase() && !parseInt(value) && value !== '!' && value !== ' '){
      isHigher = true;
        if (value === '0'){
          isHigher = false;
    }
  }
}
  return isHigher;
}

function containsNonAlphanumeric(str) {
  let isAlpha = false;
  let isNumeric = false;
  let isAlphaNumeric = false
  for (const value of str){
    if (value === '#' || value === '@' || value === ' ' || value === '*' || value === '!' || value === '?' || value === '('){
      isNumeric = true;
      isAlpha = true;
    } else if (parseInt(value)){
        isNumeric = true;
    } else if (value && value !== 0){
        isAlpha = true;
    }
  } if (isNumeric && isAlpha){
    isAlphaNumeric = true;
  }
  return isAlphaNumeric;
}


function containsSpace(str) {
  let space = false;
  for (const letter of str){
    if (letter === ' ' && letter){
      space = true;
    } else {
      continue;
    }
  }
  return space;
}

function digits(num) {
  let arr = []
  if (num<0){
    num = num* (-1)
  }
  let str = num.toString()
  for (const digit of str){
    if (digit !=='.'){
    arr.push(parseInt(digit));
  } else {
    continue;
  }
}
  return arr;
}

function truncate(str) {
  let newStr=''
  if (str.length>=15){
    for (let i=0; i<8;i++){
      newStr += str[i]
    }
    newStr = newStr +'...'
  }else{
    for (let i=0;i<str.length;i++){
      newStr +=str[i]
    }
  }
  return newStr
}

function isValidPassword(str) {
  let status = false;
  
  if (containsDigit(str) && str !== str.toLowerCase() && str !== str.toUpperCase() && containsNonAlphanumeric(str) && !containsSpace(str)){
    status = true;
  }
  return status;
}

function onlyPunchy(arr) {
  let newArr = []
  for (const i of arr){
    let item = exclaim(i)
    if (item.length<15){
      newArr.push(item)
    }
    // if (i.indexOf('!')<=15){
    //   newArr.push(exclaim(i))
    // }
  }
return newArr;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}