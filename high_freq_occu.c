#include<stdio.h>
#include<string.h>
#include<stdlib.h>

void main()
{
    char str[20];
    char max_char;
    int i,j,k,temp[20],count = 0;
    int len;
    printf("Enter a string : ");
    scanf("%s",&str);

    len = strlen(str);
    // printf("%d\n",len);

    for(i=0;i<len;i++)
    {
        for(j=0;j<len;j++)
        {
            if(str[i] == str[j])
            {               
                count++;
                
            }
        }
        // printf("%d\n",count);

        
    }
    if(count > 0)
    {
        k = count;
        max_char = str[i];
    }
    printf("%c %d",max_char,k);
}   