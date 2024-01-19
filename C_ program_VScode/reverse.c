#include<stdio.h>

int main()
{
    int n,r,sum=0,temp;
    temp=n;
    printf("Enter a no. : ");
    scanf("%d",&n);
    while(n!=0)
    {
        r = n % 10;
        sum = sum * 10 + r;
        n = n / 10;
    }
    printf("The reverse no. is %d",sum);
}