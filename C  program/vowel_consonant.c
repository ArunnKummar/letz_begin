#include<stdio.h>
#include<string.h>
#include<ctype.h>

void main()
{
    char a;
    printf("Enter a character : ");
    scanf("%c",&a);

    if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')
    {
        printf("The character is vowel");
    }
    else
    {
        printf("The character is consonant");
    }
}