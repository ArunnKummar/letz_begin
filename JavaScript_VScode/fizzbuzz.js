const output = fizzBuzz(4);
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number')
    {
        return "Not a number";
    }
    else
    {
        if((input % 3 === 0) && (input % 5 ===0))
        {
            return "fizzBuzz";
        }
        if(input % 3 === 0)
        {
            return 'fizz';
        }
        if(input % 5 === 0)
        {
            return "buzz";
        }
        else
        {
        return input;  
        }
    }
    
   
    
}