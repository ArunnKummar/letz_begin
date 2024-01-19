#include<stdio.h>
#include<string.h>

void main()
{
    char str[20];
    int i;
    int flag = 0;
    int len;
    printf("Enter a  string : ");
    scanf("%s",&str);
    
    len = strlen(str);
    printf("%d\n",len);

    for(i=0;i<len;i++)
    {
        if(str[i] != str[len-i-1])
        {
            flag = 1;
            break;
        }
    }

    if(flag == 0)
    {
        printf("The string is pallindrome");
    }
    else
    {
        printf("The strings are not pallindrome");
    }
}