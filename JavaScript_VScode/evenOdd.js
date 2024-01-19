function evenOdd(number)
{
    let x;
    let i;
    
    for(i=0; i<=number; i++)
    {
        if(i % 2 === 0)
        {
            x = "Even";
        }
        else
        {
            x = "Odd";
        }
        
        console.log(i, x);
    }
}

evenOdd(10);