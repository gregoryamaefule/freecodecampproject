const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  // firstName = firstAndLast.split(' ')[0]
  // lastName = firstAndLast.split(' ')[1]
   let fullName=firstAndLast
  let full=fullName.split(" ");

  this.getFirstName = function() {
    return full[0];
  };
  this.getLastName = function() {
    return full[1];
  };
  this.setFirstName = function(newName) {
    full[0] = newName;
  };
  this.setLastName = function(newLast) {
    full[1] = newLast;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFullName = function(firstAndLast) {
    fullName=firstAndLast;
    full=fullName.split(" ");
  };
  
};

const bob = new Person('Bob Ross');
bob.getFullName();