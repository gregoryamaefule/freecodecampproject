function addTogether(...arr) {
  if(typeof(arr[0]) != 'number'){
    return undefined
  }
  else if (typeof(arr[0]) == 'number' && typeof(arr[1]) == 'number'){
    return arr[0] + arr[1]
  }else if(arr[1] == undefined){
    return arr.length == 2 ? undefined : (y) => {
      if (typeof(y) != 'number'){
        return undefined
      }
    else{
      return y + arr[0]
    }
    }
  }
}

addTogether(2,3);