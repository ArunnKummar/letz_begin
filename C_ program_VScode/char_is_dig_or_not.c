#include<stdio.h>
#include<string.h>
#include<ctype.h>


void main()
{
    char a;
    printf("Enter a character : ");
    scanf("%c",&a);

    if(isdigit(a))
    {
        printf("The character is digit");
    }
    else
    {
        printf("The character is not digit");
    }
}
