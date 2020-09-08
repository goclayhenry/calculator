var screen = document.getElementById("screen");

var nums = [0];
var counter = 10.0;
var sign = ' ';
var currValue = 0;
var sum = 0;

document.getElementById("one").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 1;
    } else 
    {
        currValue = (currValue * counter) + 1;
    }
    
    screen.value = currValue;

});

document.getElementById("two").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 2;
    } else 
    {
        currValue = (currValue * counter) + 2;
    }
    
    screen.value = currValue;

});

document.getElementById("three").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 3;
    } else 
    {
        currValue = (currValue * counter) + 3;
    }
    
    screen.value = currValue;

});

document.getElementById("four").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 4;
    } else 
    {
        currValue = (currValue * counter) + 4;
    }
    
    screen.value = currValue;

});

document.getElementById("five").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 5;
    } else 
    {
        currValue = (currValue * counter) + 5;
    }
    
    screen.value = currValue;

});

document.getElementById("six").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 6;
    } else 
    {
        currValue = (currValue * counter) + 6;
    }
    
    screen.value = currValue;

});

document.getElementById("seven").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 7;
    } else 
    {
        currValue = (currValue * counter) + 7;
    }
    
    screen.value = currValue;

});

document.getElementById("eight").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 8;
    } else 
    {
        currValue = (currValue * counter) + 8;
    }
    
    screen.value = currValue;

});

document.getElementById("nine").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 9;
    } else 
    {
        currValue = (currValue * counter) + 9;
    }
    
    screen.value = currValue;

});

document.getElementById("zero").addEventListener("click", function()
{
    
    if (currValue === 0) 
    {
        currValue = 0;
    } else 
    {
        currValue = (currValue * counter) + 0;
    }
    
    screen.value = currValue;

});

document.getElementById("add").addEventListener("click", function()
{
    
    //Try to use multiple operations together
    nums.push(currValue);
    currValue = 0;
    counter = 10.0;
    sign = '+';
    screen.value = "+";

});

document.getElementById("subtract").addEventListener("click", function()
{
    
    nums.push(currValue);
    currValue = 0;
    counter = 10.0;
    sign = '-';
    screen.value = "-";

});

document.getElementById("multiply").addEventListener("click", function()
{
    
    nums.push(currValue);
    currValue = 0;
    counter = 10.0;
    sign = '*';
    screen.value = "x";

});

document.getElementById("divide").addEventListener("click", function()
{
    
    nums.push(currValue);
    currValue = 0;
    counter = 10.0;
    sign = '/';
    screen.value = "/";

});

document.getElementById("equal").addEventListener("click", function()
{
    nums.push(currValue);
    switch(sign) 
    {
        case '+':
            for (var i = 1; i < nums.length; i ++) 
            {
                console.log(i);
                sum += nums[i];
            }
            break;

        case '-':
            for (var i = 1; i < nums.length; i ++) 
            {
                if (i === 1)
                {
                    sum = nums[i];
                } else 
                {
                    sum -= nums[i];
                }
            }
            break;
        
        case '*':
            for (var i = 0; i < nums.length; i ++)
            {
                if (i === 1)
                {
                    sum = nums[i];
                } else 
                {
                    sum *= nums[i];
                }
            }
            break;

        case '/':
            for (var i = 1; i < nums.length; i ++)
            {
                if (i === 1)
                {
                    sum = nums[i];
                } else 
                {
                    sum /= nums[i];
                }
            }
            break;
                
        default:
            sum = -1;
    }

    screen.value = sum;
    nums.splice(0, nums.length);
    nums.push(sum);
    currValue = 0;

});

document.getElementById("clear").addEventListener("click", function()
{
    nums.push(currValue);
    nums.splice(0, nums.length);
    currValue = 0;
    nums.push(currValue);
    sum = 0;
    sign = ' ';
    screen.value = currValue;

});
