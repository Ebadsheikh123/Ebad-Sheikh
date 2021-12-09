//    var a = "120.344";
//    var b = Number(a);
//    console.log(b);


// var a = 4567;
// var b = a.toString();
// console.log (b);

var newdate = new Date ();
//  console.log (newdate);
//  year = newdate.getFullYear();
//  console.log(year);

// month = newdate.getMonth();
// console.log(month);

// date = newdate.getUTCDate();
// console.log(date);
 
// day = newdate.getDay ();
// var days =["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];



var CurrentDate = new Date ();
var CurrentDateTime = CurrentDate.getTime();

var EbadBirthday = new Date (UserBirthday);
var EbadBirthdayTime = EbadBirthday.getTime();

var UserBirthday = prompt("your Name");

var diffbetween = CurrentDateTime - EbadBirthdayTime;
var age = diffbetween / (1000 * 60 * 60 * 24 * 365);
document.write(age);