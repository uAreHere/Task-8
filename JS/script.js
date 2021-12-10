//-----------------Reverse a String--------------------------
function reverseThisString(string){
    let stringFlip = string.split("").reverse();
    document.write(stringFlip.join(""));
    return stringFlip.join("");
}
reverseThisString("thgindooG dnA ,gninevE dooG ,noonretfA dooG aY eeS tnoD I esaC nI dnA");

//-------------------Swap Case of Chars----------------------
// function swapCase(string){
//    let str = "And In Case I Dont See Ya Good Afternoon, Good Evening, And Goodnight";
//    const s
// }

//--------------------Fahrenheit to Celcius------------------
const tempsF =[23, 32, 41, 50, 59];
const tempsC = tempsF.map(
    function toCelcius(array){
        return (array-32)/1.8;
    });
console.log(tempsF, tempsC)

//------------------Grades to P/F Bool Values----------------
const grades = [20, 30, 50, 80, 90, 100];
const boolGrade = grades.map(
    function passOrFail(array){
        if(array>=75)
        return true;
        else if (array<75)
        return false;
    }
);
console.log(grades, boolGrade)

//------------------------------------------------------------
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

}

//------------------------------------------------------------
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

}

