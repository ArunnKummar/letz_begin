#include <string.h>
#include <stdio.h>

int main() {
  int i,count=0,l;
  char name[20],a;
  printf("Enter a string : ");
  gets(name);
  printf("Enter a character : ");
  scanf("%c",&a);
  
  l = strlen(name);
  printf("%d\n", l);

  for(i=0;i<=l;i++)
    {
      if(name[i] == a) 
      {
        count++;
      }          
    }
    printf("Character %c has occured %d times", a, count);
}