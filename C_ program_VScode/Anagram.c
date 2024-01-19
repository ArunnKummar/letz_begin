#include<stdio.h>
#include<string.h>

void main()
{
    char str1[20];
    char str2[20];
    char temp;
    int i;
    int j;
    int m;
    int n;
    int l;

    printf("Enter a string 1 : ");
    scanf("%s",&str1);
    printf("Enter a string 2 : ");
    scanf("%s",&str2);

    // printf("%s\n",str1);
    
    m = strlen(str1);
    n = strlen(str2);

    // printf("%c\n",str1[0]);
    // printf("%c\n",str2[0]);

    if(m != n)
    {
        printf("The strings cannot be a anagram");
    }

    else
    {
        for(i=0;i<m;i++)
        {   
            for(j=0;j<m;j++)
            {
                if(str1[i] > str1[j])
                {
                    temp = str1[i];
                    str1[j] = str1[i];
                    str1[i] = temp;                            
                    // printf("1i%c\n",str1[i]);
                    // printf("1j%c\n\n",str1[j]);
                }
            }
        }

        for(i=0;i<n;i++)
        {   
            for(j=0;j<n;j++)
            {
                if(str2[i] > str2[j])
                {
                    temp = str2[i];
                    str2[j] = str2[i];
                    str2[i] = temp; 
                    // printf("2i%c\n",str1[i]);
                    // printf("2j%c\n",str1[j]);
                }                           
            }
        }

        if(strcmp(str1,str2) == 0)
        {
            l = 1;
        }
        else
        {
            l = 0;
        }

        if(l == 1)
        {
            printf("Anagram");
        }
        else
        {
            printf("Not anagram");
        }
    }
}
