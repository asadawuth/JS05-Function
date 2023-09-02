let x = 1;
function func() {
  console.log(x); // *
  let x = 2;
}
func();
//error ประกาศตัวแปรซ้ำ นอก และ ใน มีชื่อซ้ำกัน