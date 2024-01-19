#include<stdio.h>
#include<string.h>

void main()
{
    char str[20], a, b;
    int i, len;

    printf("Enter a string : ");
    gets(str);
    printf("Enter a character to be replaced: ");
    scanf("%c",&a);

    len = strlen(str);

    for(i=0;i<len;i++)
    {
        if(str[i] == ' ')
        {
           str[i] = a;
        }
    }
    printf("%s",str);
}