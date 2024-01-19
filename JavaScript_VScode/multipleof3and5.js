function sum(limit)
{
    let r = 0;
    for(let i=0; i<=limit; i++)
    {
        if(i % 3 === 0 || i % 5 === 0)
        {
            
            console.log(i);
            r = r + i;
        }
    }
    console.log(r);
}

console.log(sum(15))