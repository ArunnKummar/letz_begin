
function checkSpeed(speed)
{
    let speedLimit = 70;
    let speedPoints = 5;
    
    if(speed < speedLimit + speedPoints)
    {
        return "OK";
    }
    else
    {
        let point = Math.floor((speed - speedLimit)/speedPoints);
        console.log(point + " points");
        
        if(point >= 12)
        {
            return "License suspended";
        }
    }
}

console.log(checkSpeed(768));