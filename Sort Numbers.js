numbers = new Array;
sortnumbers = new Array;
canelement = new Array;
sortcanelement = new Array;
var colors = new Array("red","blue","green","yellow","orange","purple","#00FFFF","#FF00FF","#990000","#009900");
var min,pos=0,loop,change=false,t,amount=5;
window.onload=function()
{
    funcrandomnumbers();        
}
function funcrandomnumbers()
{
    loop=0;
    for (i=0;i<=amount-1;i++)
    {
        if(canelement[i]!=undefined)
        {
            canelement[i].delete();    
        }
        numbers[i]=Math.floor(Math.random()*19+1);
        canelement[i] = new Canvas(24,numbers[i]*2,i*40+10,80-numbers[i]*2,colors[i]);    
        canelement[i].create();  
        sortnumbers[i]=numbers[i];
        sortcanelement[i]=canelement[i];
    }
    document.getElementById("start").disabled=false;
}
function funcsortnumbers()
{
    document.getElementById("generate").disabled=true;
    document.getElementById("start").disabled=true;
    document.getElementById("+").disabled=true;
    document.getElementById("-").disabled=true;    
    min=numbers[loop];
    for(i=loop;i<=amount-1;i++)
    {
        if(min>numbers[i])
        {
            min=numbers[i];    
            pos=i;
            change=true;
        }
    } 
    if (change)
    {
        sortnumbers[loop]=numbers[pos];
        sortnumbers[pos]=numbers[loop];
    }
    for(i=0;i<=amount-1;i++)
    {
        numbers[i]=sortnumbers[i];
        canelement[i]=sortcanelement[i];
    }
    if(loop>=amount-1)
    {
    document.getElementById("generate").disabled=false;
    document.getElementById("start").disabled=false;
        document.getElementById("+").disabled=false;
    document.getElementById("-").disabled=false; 
    }
    else
    {
        t=setInterval(animation,1);   
    } 
}
function animation()
{
    if(sortcanelement[loop].left<pos*40+10&&change)
    {
        sortcanelement[loop].translate(1);     
        sortcanelement[pos].translate(-1);     
    }
    else
    {
        if(change)
        {
            sortcanelement[pos]=canelement[loop];
            sortcanelement[loop]=canelement[pos];    
        }
        clearInterval(t);
        loop++; 
        change=false;
        funcsortnumbers();  
    }
}
function add()
{
    if(amount<9)
    {
    loop=0;
    numbers[amount]=Math.floor(Math.random()*19+1);
        canelement[amount] = new Canvas(24,numbers[amount]*2,amount*40+10,80-numbers[amount]*2,colors[amount]);    
        canelement[amount].create();  
        sortnumbers[amount]=numbers[amount];
        sortcanelement[amount]=canelement[amount];
    amount++;    
    document.getElementById("amount").innerHTML=amount;
    document.getElementById("-").disabled=false; 
    }
    else
    {
        document.getElementById("+").disabled=true;     
    }
}
function subtract()
{
    if(amount>0)
    {
        if(canelement[amount-1]!=undefined)
        {
            canelement[amount-1].delete();    
        }
            amount--; document.getElementById("amount").innerHTML=amount;
        document.getElementById("+").disabled=false;
        
    }
    else
    {
        document.getElementById("-").disabled=true; 
    }
} 