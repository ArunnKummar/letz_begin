#include<stdio.h>
#include<string.h>
#include<ctype.h>

void main()
{
    char str[20];
    int i, len;
    printf("Enter a string : ");
    scanf("%s",str);
    len = strlen(str);
    for(i=0;i<len;i++)
    {
        str[i] = toupper(str[i]);
    }
    // strupr(str);
    printf("%s\n\n",str);

// .....................................................................................................................................................

    printf("Enter a string : ");
    scanf("%s",str);
    strupr(str);
    printf("%s",str);
}