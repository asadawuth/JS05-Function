บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function getLongText() {
  return;
  ("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
}

console.log(getLongText()); // undefined เพราะมี ; อยู่ข้างใน return เลยไม่ทำงาน
```



///////////////////////////
function getLongText() {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}

console.log(getLongText()); 
Lorem Ipsum is simply dummy text of the printing and typesetting industry.