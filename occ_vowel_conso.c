#include<stdio.h>
#include<string.h>

void main()
{
    char str[20];
    int len,i,j,count=0;
    printf("Enter a string : ");
    scanf("%s",&str);
    len = strlen(str);

    for(i=0;i<len;i++)
    {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
            count++;          
        }      
    }

    printf("Vowels have occured %d times and consonant have occured %d times\n",count,len-count);
    // printf("Consonant have occured %d times",len-count);
}