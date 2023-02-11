function sumPrimes(num) {
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
  const primeArr = []
  for (let i = 1; i <= num; i++){
    if (isPrime(i)){
      primeArr.push(i)
    }
  }
  return primeArr.reduce( (sum, item) => sum + item, 0 );
}

sumPrimes(10);