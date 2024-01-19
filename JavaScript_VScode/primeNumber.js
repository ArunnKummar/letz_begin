function prime(range)
{
    let count = 0;
    for(let i=1; i<=range; i++)
    {
        if(i % 2 === 0 )
        {
            count++;
        }
        // console.log(count);
        // // if(count === 2)
        // // {
        // //     console.log(i);
        // // }
        // console.log(count);
    }

    // if(range % 2 === 0)
    // {
    //     console.log('prime number') ;
    // }
    // else
    // {
    //     console.log('not a prime number');
    // }    

}
prime(11);