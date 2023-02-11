function sumFibs(num) {
  function fibs(num){
    let i = 2;
    let fib = [0, 1];

  while( fib[fib.length - 1] <= num) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
    i++
  }
  return fib[fib.length - 1] > num ? fib.slice(0, fib.length - 1) : fib 
}
  const fibSeq = fibs(num)
  return fibSeq.filter( (x) => x % 2 == 1 ).reduce( (sum, item) => sum + item, 0 )
}

sumFibs(4);