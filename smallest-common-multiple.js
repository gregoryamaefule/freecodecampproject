function smallestCommons(arr) {
  const smallerNum = arr[0] < arr[1] ? arr[0] : arr[1]
  const biggerNum = arr[0] > arr[1] ? arr[0] : arr[1]
  const numRange = []
  for (let i = smallerNum; i <= biggerNum; i++){
    numRange.push(i)
  }

  let j = 2
  let check = true

  while(check){
    if (numRange.length == numRange.filter( (x) => j%x == 0 ).length){
      check = false
      break
    }
    j ++

  }
  return j
}

smallestCommons([1,5]);