const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // From Matt to Sarah
sendTo(null); //From null to undefined
// ดึง Matt ของ sender มาตัวที่1 และดึง Sarah มาเป็นตัวที่ 2
// ใส่ from เป็น null ขึ้น null ส่วน to ไม่ได้ใส่เลยขึ้น undefined

const sender = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // From CC to Max   *console.logค่า from from มี cc ไว้สำรอง กรณีไม่ได้ใส่่ ส่วน to
//ใส่ Max เลยได้ Max
sendTo('Ben', 'Jay'); // From Jay to Ben *ใส่ Ben Jay แต่ console.log from มาก่อน to
//
// 