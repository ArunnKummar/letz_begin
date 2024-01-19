#include<stdio.h>

void main()
{
    int a[10][10], b[10][10], c[10][10], i, j, k,s;
    int r1,r2,c1,c2;
    printf("Enter the rows and columns of 1st matrix : \n");
    scanf("%d %d", &r1,&c1);
    printf("Enter the rows and columns of 2nd matrix : \n");
    scanf("%d %d", &r2,&c2);
    if(c1 != r2)
    {
        printf("Matrix operation cant be done");
    }
    else
    {
        printf("Enter the elements of 1st matrix : \n");
        for(i=0; i<r1; ++i)
        {
            for(j=0; j<c1; ++j)
            {
                
                scanf("%d",&a[i][j]);
            }
        }

        printf("1st matrix : \n");
        for(i=0; i<r1; ++i)
        {
            for(j=0; j<c1; ++j)
            {
                
               printf("%d\t",a[i][j]);
            }
            printf("\n");
        }

         printf("Enter the elements of 2nd matrix : \n");
        for(i=0; i<r2; ++i)
        {
            for(j=0; j<c2; ++j)
            {
                
                scanf("%d",&b[i][j]);
            }
        }

        printf("2nd matrix : \n");
        for(i=0; i<r2; ++i)
        {
            for(j=0; j<c2; ++j)
            {
                
               printf("%d\t",b[i][j]);
            }
            printf("\n");
        }

        for(i=0; i<r1; ++i)
        {
            for(j=0; j<c2; ++j)
            {
                s = 0;
                for(k=0;k<c1;k++)
                {
                    s = s + a[i][k] * b[k][j];
                    c[i][j] = s;
                }
                // scanf("%d",&c[i][j]);
            }
        }

        printf("The product is : \n");
        for(i=0; i<r1; ++i)
        {
            for(j=0; j<c2; ++j)
            {
                
               printf("%d\t",c[i][j]);
            }
            printf("\n");
        }

    }
}