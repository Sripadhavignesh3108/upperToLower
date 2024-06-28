const prompt = require("prompt-sync")();
let stn=prompt("enter a text combination of upper and lowercase");
// let stn="VignEsH-sriPaDhA";
let stn1="";
for(i=0;i<=stn.length-1;i++)
{
if(stn[i]===stn[i].toUpperCase()){
stn1+=stn[i].toLowerCase();
}
else if(stn[i]===stn[i].toLowerCase())
{
    stn1+=stn[i].toUpperCase();   
}
}
console.log(stn1);
