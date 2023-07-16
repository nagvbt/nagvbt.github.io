# C FAQ

Following are the important C frequently asked questions in interviews.

## 1. How to write a code to count number of characters/Spaces/numbers/special characters present in a sentence.  sentence =”1. GOD IS GREAT !!!”

***Program***

```c
#include <stdio.h>
#define LEN 255  //Total ASCII Characterset
void main()
{
    int ASCII[LEN];
    char sentence[100];
    int count = 0, j = 0;
    int code;
 
    //Initialize the ASCII Array with Zero
    for(int i = 0; i&lt;LEN; i++)
    {
        ASCII[i] = 0;
    }
 
    printf("Enter the sentence: n");
    for(j = 0; (sentence[j] = getchar())!='n'; j++)
    {
        //Do Nothing
    }
 
    sentence[j] = '';
    count = j;
 
    //Increment the value of the corresponding ASCII Array
    //Index (code) represents the ASCII Character
    for(int idx = 0; idx&lt;count; idx++)
    {
        code = sentence [ idx ];
        ASCII[ code]  = ASCII[ code ]+1;
    }
 
    printf("The given sentence is: %s n",sentence);
 
    //Print the Result
    int TotalChars = 0;
    for(int ch = 0; ch&lt;LEN; ch++)
    {
        if(ASCII[ch] != 0)
        {
            int cnt = ASCII[ch];
            TotalChars = TotalChars + cnt;
            switch(ch)
            {
            case 9:
                printf("Horizontal Tab - %dn", cnt);
                break;
            case 11:
                printf("Vertical Tab - %dn", cnt);
                break;
            case 32:
                printf("Space - %dn", cnt);
                break;
            default:
                printf("%c - %dn",ch, cnt);
                break;
            }
        }
    }
 
    printf("Total Characters - %dn", TotalChars);
}
```

***OUTPUT***
```
Enter the sentence:
1. GOD IS GREAT !!!
The given sentence is: 1. GOD IS GREAT !!!
Space - 4
! - 3
. - 1
1 - 1
A - 1
D - 1
E - 1
G - 2
I - 1
O - 1
R - 1
S - 1
T - 1
Total Characters - 19
```

## 2. How to insert space between each character in a sentence. sentence =”GOOD MORNING” newsentence = “G O O D  M O R N I N G”

The main/logic part of the code is just

1. copy char by char from sentence to newsentence
2. Insert space after each step 1

***Program***

```c
#include <stdio.h>
 
void main()
{
    char sentence[100], newsentence[100];
    int i = 0, j = 0, count = 0;
    printf("Enter the sentence to be formatted:n");
    for(i = 0; (sentence[i]=getchar())!='n'; i++)
    {
    }
    sentence[i] = '';
    //shows the number of chars accepted in a sentence
    count = i;
    //Insert Space between each character
    for(i = 0; i<count; i++)
    {
        newsentence[j] = sentence[i];
        j++;
        newsentence[j] = ' ';
        j++;
    }
    newsentence[j] = '';
    printf("The given sentence is: %s n",sentence);
    printf("Formated sentence is : %s n",newsentence);
}

```

***OUTPUT***
```
Enter the sentence to be formated:
 GOOD MORNING
 The given sentence is : GOOD MORNING
 New sentence is  : G O O D   M O R N I N G

```


## 3. How to write a code to Outputs its own code

__FILE__ :It is a Predefined Macros : The name of the current source file.
__FILE__ expands to a string surrounded by double quotation marks.

fgetc: Read a character from a stream. returns an integer
putchar: Writes a character to a stream

***Program***

```c
#include "stdio.h"
#include <stdlib.h>
//Program that outputs its own code
int main ()
{
    FILE *fp;
    char c;
 
    fp = fopen(__FILE__,"r");
    while((c=getc(fp))!= EOF)
    {
        printf("%c",c);
    }
    fclose(fp);
}
```

## 4. Swap of two numbers  with out temp

***Program***
```c
#include "stdio.h"
#include <stdlib.h>
 
int main()
{
    int a,b;
    a=10;
    b=20;
    printf("Before swapingn");
    printf("%dt%dn",a,b);
 
    /* normal temp
    int temp;
    temp=a;
    a=b;
    b=temp;
 
    //sol:-1
    a=a+b;
    b=a-b;
    a=a-b;
 
    //sol:-2
    a=a*b;
    b=a/b;
    a=a/b;*/
 
    //sol:-3
    //a^=b^=a^=b;
 
    a= a^b;
    b= a^b;
    a= a^b;
    printf("%dt",a);
    printf("After swapingn");
    printf("%dt%dn",a,b);
    return 0;
}
```

## 5. Write a program to print “Hello World” with out using semicolon(;) ?

```c
#include "stdio.h"
#include <stdlib.h>
 
int main()
{
    if(printf("Hello World "))
    {
        //do nothing
    }
}
```

## 6. Write a program to display the output as
```
*****
****
***
**
*
```

```c
void main()
{
    for(int i=1; i<=5; i++)
    {
        for(int j=5; j>=i; j--)
        {
            printf("*");
        }
 
        printf("n");
    }
}
```

## 7. Write a program to display Fibonacci Series Using Recursion

```c
#include <stdio.h>
 
unsigned int fibonacci (unsigned int n)
{
  if (n <= 2)
  {
      return 1;
  }
  else
  {
      return fibonacci(n-1) + fibonacci(n-2);
  }
}
 
int main()
{
  unsigned int i, j=0;
 
  printf("n Enter the fibonnaci number : ");
  scanf("%d", &i);
 
  for(j=1; j<=i; j++)
    printf("%d  ",fibonacci(j));
}
```
