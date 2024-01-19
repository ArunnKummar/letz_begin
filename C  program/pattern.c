#include<stdio.h>
#include<stdlib.h>

int main()
{
    int n,i,j,k,l,m;
    printf("Enter the range : ");
    scanf("%d", &n);
    m=n;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)               //* * *
        {                               //* * *
            printf("*\t");              //* * * 
        }
        printf("\n");
    }
    printf("\n");

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {                                 //*  
            printf("*\t");                //* * 
        }                                 //* * * 
        printf("\n");
    }
    printf("\n");

    for(i=n;i>=1;i--)
    {
        for(j=1;j<=i;j++)
        {                                 //* * * 
            printf("*\t");                //* * 
        }                                 //* 
        printf("\n");
    }
    printf("\n");

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)                  //1 2 3
        {                                  //1 2 3
            printf("%d\t",i);              //1 2 3
        }
        printf("\n");
    }
    printf("\n");

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)    
        {                                  //1 
            printf("%d\t",j);              //1 2 
        }                                  //1 2 3
        printf("\n");
    }
   printf("\n");

   for(i=n;i>=1;i--)
    {
        for(j=1;j<=i;j++)
        {                                //1 2 3
            printf("%d\t",j);            //1 2     
        }                                //1 
        printf("\n");
    }
    printf("\n");

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n-i;j++)
        {
            printf(" \t");
        }
        for(k=1;k<=i;k++)
        {
            printf("%d\t",k);
        }
        for(l=i-1;l>=1;l--)
        {
            printf("%d\t",l);
        }
        printf("\n");
    }

}