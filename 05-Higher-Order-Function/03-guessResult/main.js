function makeWorker() {
    let name = 'Pete';
    return function () {
      alert(name);
    };
  }
  let name = 'John';
  let work = makeWorker();
  work(); // *

  //ได้ค่า  alert = (Pete) เพราะว่า 
  //เรากำหนด let work = makeWorker
  //ส่วน name = 'john' ไม่ตรงกับ Pete อยู่แล้ว เพราะอยู่นอกบ้าน เป็นแบบ Global
  //เรียกใช้งาน work() แบบฟังชั้น (ในบ้านฟังชั่นมี let name = Pete เลยได้ Pete)


















// function multiply(num1, num2, callback) {
//     let result = num1 * num2;
//     callback(result);
// }

// function displayResult(result) {
//     console.log('The result is: ' + result);
// }

// multiply(5, 10, displayResult);

// function outerFunction() {
//     let outerVariable = 'Hello';

//     function innerFunction() {
//         console.log(outerVariable + ' World!');
//     }

//     return innerFunction;
// }

// let greeting = outerFunction();
// greeting(); // Output: "Hello World!"

// function adder(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// let add5 = adder(5);
// console.log(add5(3)); // Output: 8
// console.log(add5(7)); // Output: 12
