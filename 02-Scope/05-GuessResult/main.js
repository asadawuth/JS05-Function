let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // *
}

logMessage(message);
console.log(message); 
//Hello everybody ฟังชั่นจะหาตัวในฟังชั่นก่อน
//Welcome to Thailand console ดึงตัวที่เป็น โกเบว ก่อน

let name = "John";

function sayHi(input) {
  console.log(name); // ***
  name = input;
}

sayHi();
console.log(name);
//console ดึงตัวที่เป็น โกเบว ก่อน
//undefined เพราะยังม่ได้ใส่ค่า ใน sayHi()