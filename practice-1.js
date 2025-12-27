const area=2060;
const result=area/2; 
console.log(result)

//second problem
const money=9999;
if(money>=45000){
    console.log("laptop")
}
else if(money>=10000){
    console.log("Cycle")
}
else{
    console.log("chocolet")
}
// thard problem

const lastDay =30;
for(let i=1; i<=lastDay;i++){
    if(i%3===0){
        console.log(i+":medicine")
    }
    else{
        console.log(i+":rest")
    }
    
}

/** Problem 04 - (Delete / Store) */
var fileName= "result.pdf";

//write your code here

if(fileName.includes('result.pdf','data.docx','#exp.mp4','#')){
    console.log("Store")
}
else{
    console.log("Delete")
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

console.log(student.name+student.roll+student.department+"@ph.ac.bd")


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

for(let i=0;i<experience;i++){
    startingSalary=startingSalary+startingSalary*0.05;

}
console.log(startingSalary.toFixed(2))