var screen = document.getElementById("screen");

var sum = 0;

var oldNum = -1;
var newNum = -1;
var sign = ' ';

document.getElementById("one").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 1;
    } else 
    {
        newNum = 1;
    }
    screen.value = 1;

});

document.getElementById("two").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 2;
    } else 
    {
        newNum = 2;
    }

    screen.value = 2;
});

document.getElementById("three").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 3;
    } else 
    {
        newNum = 3;
    }

    screen.value = 3;
});

document.getElementById("four").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 4;
    } else 
    {
        newNum = 4;
    }

    screen.value = 4;
});

document.getElementById("five").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 5;
    } else 
    {
        newNum = 5;
    }

    screen.value = 5;
});

document.getElementById("six").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 6;
    } else 
    {
        newNum = 6;
    }

    screen.value = 6;
});

document.getElementById("seven").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 7;
    } else 
    {
        newNum = 7;
    }

    screen.value = 7;
});

document.getElementById("eight").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 8;
    } else 
    {
        newNum = 8;
    }

    screen.value = 8;
});

document.getElementById("nine").addEventListener("click", function()
{
    if (oldNum === -1)
    {
        oldNum = 9;
    } else 
    {
        newNum = 9;
    }
    
    screen.value = 9;
});

document.getElementById("add").addEventListener("click", function()
{
    sign = '+';
    screen.value = '+';
    
});

document.getElementById("subtract").addEventListener("click", function()
{
    sign = '-';
    screen.value = '-';
    
});

document.getElementById("multiply").addEventListener("click", function()
{
    sign = 'x';
    screen.value = 'x';
    
});

document.getElementById("divide").addEventListener("click", function()
{
    sign = '/';
    screen.value = '/';
    
});

function equalBtn()
{
    console.log("oldnum: " + oldNum + " newnum: " + newNum);
    switch(sign) {
        case '+':
            
            sum = oldNum + newNum;
            break;

        case '-':
            
            sum = oldNum - newNum;
            break;

        case 'x':
            
            sum = oldNum * newNum;
            break;

        case '/':
            
            sum = oldNum / newNum;
            break;

        default:
            sum = sum;
    }

    oldNum = -1;
    newNum = -1;
    sign = ' ';
    screen.value = sum;
    
};
