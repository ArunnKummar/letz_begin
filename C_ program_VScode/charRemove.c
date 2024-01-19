#include<stdio.h>
#include<string.h>

int main()
{
    char str[10];
    int i,j,l,n,a,del;
    printf("Enter a string : ");
    gets(str);
    printf("%s",str);
    printf("\nEnter the position : ");
    scanf("%d",&n);
    printf("Enter the no. of characters to be deleted : ");
    scanf("%d",&del);

    l = strlen(str);
    printf("%d",l);

    for(i=n,j=n+del;i<j,j<l;i++,j++)
    {
        str[i] = str[j];        
    }
    str[i] = '\0';
    printf("\n%s",str);

    return 0;
}