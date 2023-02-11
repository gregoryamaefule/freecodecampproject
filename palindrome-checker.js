function palindrome(str) {
  const newStr = str.replace(/\W/gi, '').replace(/_*/gi, '').toLowerCase()
  const strReverse = newStr.split('').reverse().join('')
  return strReverse == newStr;
}

palindrome("eye");