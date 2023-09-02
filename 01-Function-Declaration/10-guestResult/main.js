function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // เพราะเราไป console.log ชื่อฟังชั่น เลย ไปได้แค่บรรทัดเดียว เข้าไปถึง if 
/*ƒ sayHi(age) {
    if (age < 12) alert('Hi kid');
} */


function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
//alert('Hi kid') เพราะ console.log(sayHi()) ชื่อการ console.log เรียกใช่ฟังชั่น 