#include<stdio.h>
#include<string.h>

void main()
{
    char str[20], a;
    char b;
    int i, len;

    printf("Enter a string : ");
    gets(str);
    printf("Enter a character to be replaced: ");
    scanf("%c",&a);
    printf("Enter a replacing character : ");
    scanf("%c\n",&b);

    len = strlen(str);

    for(i=0;i<len;i++)
    {
        if(str[i] == a)
        {
            str[i] = b;  
            // printf("%s\n",str[i]);
        }
    }
    printf("%s",str);
}