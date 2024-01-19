
function calGrade(marks)
{
    let sum = 0;
    let avg;
    for(let i=0; i<marks.length; i++)
    {
        sum = sum + marks[i];
        // console.log(sum);
        avg = sum/marks.length;
    }
    console.log(avg);
    
    if(avg < 60)
    {
        console.log("F");
    }
    else if(avg >= 60 && avg < 70)
    {
        console.log("D"); 
    }
    else if(avg >= 70 && avg < 80)
    {
        console.log("C"); 
    }
    else if(avg >= 80 && avg < 90)
    {
        console.log("B"); 
    }
    else 
    {
        console.log("A"); 
    }
}

const marks = [70, 80, 95];
calGrade(marks)
// console.log(calGrade(marks));
