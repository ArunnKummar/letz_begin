/*arr[i] !== 0 || arr[i] !== 'undefined' ||
arr[i] !== 'null' || arr[i] !== false || 
arr[i] !== 0 || arr[i] === 'number'*/ 
               
arr = [1,3,4,null,0, undefined];
        
function countTruthy(arr)
{
    let count = 0;
    for(let value of arr)
    {
        if(value)
        {
            count++;
        }      
    }
    return count;
}

console.log(countTruthy(arr));