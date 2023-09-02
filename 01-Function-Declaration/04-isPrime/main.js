function cheackNum(n) {
    if (n % 2 === 0 || n % 3 === 0) {
        console.log("ไม่เป็นจำนวณเฉพาะ");
    }
    else {
        console.log("เป็นจำนวณเฉพาะ");
    };
};

cheackNum(8) // ไม่เป็นจำนวณเฉพาะ
cheackNum(19) // เป็นจำนวณเฉพาะ

