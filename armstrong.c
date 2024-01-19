#include<stdio.h>
#include<math.h>

int main()
{
    int n,r,sum=0,temp,c = 0,count=0,d;
    int tempn;
    printf("Enter a no.: ");
    scanf("%d", &n);
    temp = n;
    tempn = n;
    while(tempn != 0)
    {
        tempn = tempn /10;
        count++;
    }
    printf("the no. of digits are %d\n",count);
  
    while(n>0)
    {
        r = 0;
        r = n % 10;
        c = 0;
        c =  round(pow(r, count));                                     //pow(4 , 2)   
         printf("c = %d\n",c);

        sum = sum + c;
        n = n / 10;
    }

    printf("%d\n",temp);
    printf("%d\n",sum);

    if(temp == sum)
    printf("It is a armstrong no.");
    else
    printf("It is not a armstrong");
}