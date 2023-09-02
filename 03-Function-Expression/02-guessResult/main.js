const showModal = alert;
showModal("Execute modal"); // ได้  alert("Execute modal") เราใช้ showModal ให้ค่า เท่า alert 

const showModal = alert();
showModal("Execute modal");  
//Uncaught TypeError: showModal is not a function
//at <anonymous>:2:1  alert ในรูป function ไม่ได้