function steamrollArray(arr) {
    const newArr = []
    for (const i of arr){
      if (i instanceof Array){
        newArr.push(...steamrollArray(i))
      }else{
        newArr.push(i)
      }
    }
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);