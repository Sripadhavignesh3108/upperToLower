// MUlTIPLE OPTIONS FOR 1 TO NUM
//----------------------------------
const prompt = require("prompt-sync")();

num=+prompt("enter a number1 : ");
i=0;
while(i<=num){
console.log(i)
i++
}

num=+prompt("enter a number2 : ");
i=0;
while(!(i-1==num)){
    console.log(i)
    i++;
}


num=+prompt("enter a number3 : ");
i=0;
while(!(i==num+1))
{
    console.log(i)
    i++;
}


num=+prompt("enter a number4 : ");
i=0;
while(i!=num+1)
{
    console.log(i)
    i++;
}


num=+prompt("enter a number5 : ");
i=0;
while(num>=i)
{
    console.log(i);
    i++;
}


num=+prompt("enter a number6 : ");
i=0;
while(!(num+1<=i))
{
    console.log(i)
    i++;
}


