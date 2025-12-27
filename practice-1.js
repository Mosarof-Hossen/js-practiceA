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

if(fileName.includes('result.pdf','data.docx','#exp.mp4','#')){
    console.log("Store")
}
else{
    console.log("Delete")
}
//write your code here