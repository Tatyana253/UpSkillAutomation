
//option one
const animal = {
    move() {
      console.log('The animal moves');
    }
  };
  

  const cat = Object.create(animal);
  
  
  cat.move();


//second option

class Animal {
    move() {
      console.log('The animal moves');
    }
  }
  
  class Cat extends Animal {}
  

  const catTwo = new Cat();
  cat.move();
  
  