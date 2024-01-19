#include<stdio.h>

void main()
{
    int a[10], n, temp, i;
    printf("Enter a decimal value : ");
    scanf("%d",&n);
    temp = n;
    // printf("%d",n);
    for(i=0;n>0;++i)
    {
        a[i] = n % 2;
        n = n / 2;   
    }
    printf("%d\n",i);
    
    printf("Binary value is : ");
    for(i=i-1;i>=0;i--)
    {
       printf("%d",a[i]); 
    }
}