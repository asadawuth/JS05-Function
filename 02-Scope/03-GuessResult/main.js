function sayHi(name) {
    let name = "Guest";
    console.log(name); // *
  }
  
  sayHi("Jim");

//  Uncaught SyntaxError: Identifier 'name' has already been declared
//error ชื่อตัวแปรซ้ำ