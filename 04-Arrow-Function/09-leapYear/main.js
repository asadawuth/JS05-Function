/*const isLeapYear = v{
      if (year % 4 === 0 && year % 100 != 0 ) {
        return true;
      } else if (year % 100 === 0 && year % 400 != 0) {
        return false
      }
       else if (year % 400 == 0) {
        return true;
      } else {
        return false
      }
} */
//////////////////////////////////////////////////////////////////
/*const isLeapYear = (year) => {
    if (year % 400 == 0) {
        return true;
    }  else if (year % 100 == 0) {
        return false;
    }  else if (year % 4 == 0) {
        return true;
    }
}*/
////////////////////////////////////////////////////////////////
/*const isLeapYear = (year) => {
    if (year % 400 == 0) {
        return true;
    }  else if (year % 100 == 0) {
        return false;
    }  else if (year % 4 == 0) {
        return true;
    }
} */
////////////////////////////////////////////////////////////////////
/*const isLeapYear = (year) => {
    if (year % 400 == 0) {
        return true;
    } 
    if (year % 100 == 0) {
        return false;
    } 
    if (year % 4 == 0) {
        return true;
    }
    return false;
} */
////////////////////////////////////////////////////////////////////

/*const isLeapYear = (year) => {
    if (year % 100 === 0) {
        return year % 400 == 0;
    }
    return year % 4 === 0;
} */

//const  isLeapYear = (year) => year =  year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;

//const isLeapYear = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;