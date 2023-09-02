function squareNum(num) {
    const result = num * num;
  }
  
  console.log(squareNum(2)); 

  /*VM97:1 Uncaught ReferenceError: num is not defined
  at <anonymous>:1:11  
  เพราะ ตำสั่งใน function ไม่มีการ return หรือ console.log  มีแค่การกำหนด ตัวแปล เลยไม่มีไร */