function stars(rows)
{
    for(let i=1; i<=rows; i++)
    {
        for(let j=1; j<=i; j++)
        {
            console.log("*");
        }
        console.log("\n");
    }
}

stars(5);
