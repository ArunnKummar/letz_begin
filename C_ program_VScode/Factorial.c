#include<stdio.h>
int main()
{
    int n, i, value = 1;
    printf("Enter a no. : ");
    scanf("%d",&n);
    if(n >= 0)
    {
        for(i=1; i <= n; i++)
            {
                value *= i;
                              
            }
            printf("%d",value);
    }
    else 
     printf("1");
}