function convertToRoman(num) {
  const conversionObj = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
   100: 'C',
   200: 'CC',
   300: 'CCC',
   400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM'
  }
  let romanNumeral = ''
  const decArr = num.toString().split('');
  // for (let i of decArr){
  //   if(parseInt(i) == 0){
  //     decArr.shift()
  //     continue
  //   }
  //   const exp = 10**(decArr.length-1)
  //   const placeValue = parseInt(i) * exp
  //   romanNumeral += conversionObj[placeValue]
  //   decArr.shift()
  // }
  // why didnt this for loop work?
  while(decArr.length > 0){
    if(parseInt(decArr[0]) == 0){
      decArr.shift()
      continue
    }
    const exp = 10**(decArr.length-1)
    const placeValue = parseInt(decArr[0]) * exp
    romanNumeral += conversionObj[placeValue]
    decArr.shift()
  }
 return romanNumeral;
}

convertToRoman(36);