#include<stdio.h>
#include<string.h>
#include<ctype.h>

void main()
{
    char str[20];
    int i,len;
    printf("Enter a string : ");
    scanf("%s",&str);
    len = strlen(str);

    for(i=0;i<len;i++)
    {
        str[i] = tolower(str[i]);
    }
    printf("%s\n",str);

    // ..........................................................................

    printf("Enter a string : ");
    scanf("%s",&str);
    strlwr(str);
    printf("%s",str);
}