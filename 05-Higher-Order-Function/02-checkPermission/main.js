const para2 = function () { return alert("ACCESS GRANTED")};
const para3 = function () { return alert("ACCESS DENIED")};
function checkPermission(role,para2,para3) {
    if (role === "ADMIN") {
        return para2() 
    } else {
        return para3() 
    }
};

//typeof (para2)
//'function'

//typeof (para3)
//'function'

//checkPermission("ADMIN",para2,para3)
//checkPermission("ADMIN",para2,para3) alert("ACCESS GRANTED")
//checkPermission(role,para2,para3) alert("ACCESS DENIED")   