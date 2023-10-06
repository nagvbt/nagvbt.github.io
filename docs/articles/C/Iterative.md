---
sidebar_position: 6
---

# Iterative Statements
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
### 1. What are Iterative Statements?

Iteration statements (also called loops) allow a set of instructions to be repeatedly executed until a certain condition is reached. This condition may be predetermined (as in the for loop) or open ended (as in the while and do-while loops).

### 2. Explain about ‘while’ Loop?

The while statement is used for repeating a statement or series of statements as long as a given conditional expression is evaluated to true.
***Syntax:***
while( condition )
{
 //statements;
}

### 3. Write a program to print numbers from 1 to 10 use ‘while’ Loop?

```c
#include <stdio.h>  
void main()
{
 int i = 0;

 while( i<=10 )
 {
  printf("%d ", i);
  i++;
 }
}
OUTPUT: 0 1 2 3 4 5 6 7 8 9 10
```

### 4. Explain about ‘do-while’ Loop?

The do..while statement executes a statement or statements once, then repeats the execution as long as a given conditional expression evaluates to true.  The do..while statement is used to create post-test loops.

***Syntax:***
do
{
 //statements;

} while ( condition );

### 5. Explain about ‘for’ Loop?

The for statement is used for repeating a statement or series of statements as long as a given conditional expression evaluates to true.
One of the main differences between while statement and for statement is that in addition to a conditional expression, you can also include code in the for statement
• to initialize a counter variable and
• changes its value with each iteration

***Syntax:***
for ( initialization; condition; update statement)
{
    //statement(s);
}

### 6. What are ‘jump’ Statements?

C has four statements that perform an unconditional branch: return, goto, break, and continue. Of these, you can use return and goto anywhere inside a function. You can use the break and continue statements in conjunction with any of the loop statements. As discussed earlier in this chapter, you can also use break with switch

### 7. Define ‘break’ and ‘continue’ statements?

1.Break : break statement is used to break any type of loop such as while, do while an for loop.  break statement terminates the loop body immediately.

   2.Continue : continue statement is used to break current iteration. After continu estatement the control returns to the top of the loop test conditions.

### 8. Write a program to demonstrate ‘break’ and ‘continue’ statements?

Example of using break and continue statement:

```c
#include <stdio.h>
#define SIZE 10
void main()
{
  // demonstration of using break statement
 int items[SIZE] = {1,3,2,4,5,6,9,7,10,0};
 int number_found = 4,i;

 for(i = 0; i < SIZE;i++)
 {
  if(items[i] == number_found)
  {
   printf("number found at position %d\n",i);
   break;// break the loop
  }
  printf("finding at position %d\n",i);
 }

 // demonstration of using continue statement
 for(i = 0; i < SIZE;i++)
 {     
  if(items[i] != number_found)
  {
   printf("finding at position %d\n",i);
   continue;// break current iteration
  }

  // print number found and break the loop
  printf("number found at position %d\n",i);
  break;
 }   
}
OUTPUT
finding at position 0
finding at position 1
finding at position 2
number found at position 3
finding at position 0
finding at position 1
finding at position 2
number found at position 3
```

### 9. Explain about ‘return’ statement ?

A return statement ends the processing of the current function and returns control to the caller of the function.

***Syntax:***
return expression; //expression is optional

***Example:***

```c
#include <stdio.h>

int function (void)
{
  int b;
  b = scanf ("%d", &b);
  return b; // returns the value of b to the calling function.
}

int main ()
{
  printf ("\n%d", function ());
  return 0;
}
```

### 10.  Explain about ‘goto’ statement and write a program to print 1 -10  numbers with out using while, do-while, for loop?

The goto statement performs an unconditional transfer of control to the named label. The label must be in the current function.

***Syntax:***
.
.
goto label1;
.
.
label1: statement;
.
.
label2: statement;
.
.
goto label2;

***Example:***

```c
#include <stdio.h>

int main() 
{
  int n = 0;
  loop: ; //label
 
  printf("%d ", n);
  n++;
  
  if (n<10) 
  {
    goto loop;
  }
  
  return 0;
}
OUTPUT: 0 1 2 3 4 5 6 7 8 9
```

### 11. Explain about ‘exit’ statement ?

Just as you can break out of a loop, you can break out of a program by using the standard library function exit( ). This function causes immediate termination of the entire program, forcing a return to the operating system. In effect, the exit( ) function acts as if it were breaking out of the entire program.

***Example:***

```c
const int RED = 1;
const int GREEN = 2;
const int BLUE = 3;

#include <stdio.h>  
void main()
{
 int color = 1;
 printf("Enter an integer to choose a color\n");
 printf("1. RED\n");
 printf("2. GREEN\n");
 printf("3. BLUE\n");
 printf("4. Quit\n");
 printf(" Enter your choice: ");

 scanf("%d",&color); 
 switch(color)
 {
  case RED: printf("you chose red color\n");
  break;
  case GREEN:printf("you chose green color\n");
  break;
  case BLUE:printf("you chose blue color\n");
  break;
  default:
  exit(0); /* return to OS */
 }
}
```

### 12. Write a program to find given number is an ARMSTRONG NUMBER ?

Definition:  A number is armstrong if the sum of cubes of individual digits of a number is equal to the number itself.
Example -  0, 1, 153, 370, 407.

1^3 + 5^3 + 3^3 = 153

```c
#include <stdio.h>  
void ArmstrongNumber()
{
   int number, sum = 0, temp, remainder;
 
   printf("Enter an integer\n");
   scanf("%d",&number);
 
   temp = number;
 
   while( temp != 0 )
   {
      remainder = temp%10;
      sum = sum + remainder*remainder*remainder;
      temp = temp/10;
   }
 
   if ( number == sum )
      printf("Entered number is an armstrong number.\n");
   else
      printf("Entered number is not an armstrong number.\n");
}

int main()
{ 
   ArmstrongNumber(); 
   return 0;
}
```

### 13. Write a program to find given number is an PERFECT NUMBER ?

Definition: Perfect number is a positive number which sum of all positive divisors excluding that number is equal to that number.
Example: 6 is perfect number since divisor of 6 are 1, 2 and 3.  Sum of its divisor is
1 + 2+ 3 =6

```c
#include <stdio.h>  
void PerfectNumber()
{
  int n,i=1,sum=0;

  printf("Enter a number: ");
  scanf_s("%d",&n);

  while(i<n)
  {
      if(n%i==0)
           sum=sum+i;
       
   i++;
  }

  if(sum==n)
      printf("%d is a perfect number",i);
  else
      printf("%d is not a perfect number",i);
}

int main()
{ 
   PerfectNumber();   
}
```

### 14. Write a program to find FACTORIAL of a given number ?

Factorial is represented using '!', so five factorial will be written as (5!), n factorial as (n!). Also
n! = n*(n-1)*(n-2)*(n-3)...3.2.1 and zero factorial is defined as one i.e. 0! = 1.

```c
#include <stdio.h>  
void Factorial()
{
  int c, n, fact = 1;
 
  printf("Enter a number to calculate it's factorial\n");
  scanf_s("%d", &n);
 
  for (c = 1; c <= n; c++)
    fact = fact * c;
 
  printf("Factorial of %d = %d\n", n, fact);

}

int main()
{    
   Factorial();
   return 0;
}
```

### 15. Write a program to find FACTORIAL of a given number using recursion  ?

Using recursion: Recursion is a technique in which a function calls itself, for example in above code factorial function is calling itself. To solve a problem using recursion you must first express its solution in recursive form.

```c
#include <stdio.h>  
long factorial(int); 
int main()
{
  int n;
  long f;
 
  printf("Enter an integer to find factorial\n");
  scanf("%d", &n); 
 
  if (n < 0)
    printf("Negative integers are not allowed.\n");
  else
  {
    f = factorial(n);
    printf("%d! = %ld\n", n, f);
  }
 
  return 0;
}
 
long factorial(int n)
{
  if (n == 0)
    return 1;
  else
    return(n * factorial(n-1));
}
```

### 16. Write a program to print FIBONOCCI SERIES ?

Numbers of Fibonacci sequence are known as Fibonacci numbers. First few numbers of series are 0, 1, 1, 2, 3, 5, 8 etc, Except first two terms in sequence every other term is the sum of two previous terms, For example 8 = 3 + 5 (addition of 3, 5

```c
#include <stdio.h>  
void FibonocciSeries()
{
   int n, first = 0, second = 1, next, c;
 
   printf("Enter the number of terms\n");
   scanf("%d",&n);
 
   printf("First %d terms of Fibonacci series are :-\n",n);
 
   for ( c = 0 ; c < n ; c++ )
   {
      if ( c <= 1 )
         next = c;
      else
      {
         next = first + second;
         first = second;
         second = next;
      }
      printf("%d\n",next);
   }
}

int main()
{ 
     FibonocciSeries();
     return 0;
}
```

### 17. Write a program to print FLOYD’S TRIANGLE ?

Floyd's triangle is a right-angled triangular array of natural numbers, used in computer science education. It is named after Robert Floyd. It is defined by filling the rows of the triangle with consecutive numbers, starting with a 1 in the top left corner:

```c
#include <stdio.h>   
void FloydsTriangle()
{
  int n, i,  c, a = 1;
 
  printf(“Enter the number of rows of Floyd's triangle to print:");
  scanf("%d",&n);
 
  for (i = 1; i <= n; i++)
  {
  for (c = 1; c <= i; c++)
  {
   printf("%d",a);

   a++;
  }
  printf(“\n”);
  }

}

void main()
{
 FloydsTriangle();
}

* OUTPUT: *
Enter the number of rows of Floyd's triangle to print:4
 1
 23
 456
 78910
```

### 18. Write a program to print Pascal ‘s TRIANGLE ?

```c
#include <stdio.h>
 
long factorial(int);
 
int main()
{
   int i, n, c;
 
   printf("Enter the number of rows you wish to see in pascal triangle:");
   scanf("%d",&n);
 
   for ( i = 0 ; i < n ; i++ )
   {
      for ( c = 0 ; c <= ( n - i - 2 ) ; c++ )
         printf(" ");
 
      for( c = 0 ; c <= i ; c++ )
         printf("%ld ",factorial(i)/(factorial(c)*factorial(i-c)));
 
      printf("\n");
   }
 
   return 0;
}
 
long factorial(int n)
{
   int c;
   long result = 1;
 
   for( c = 1 ; c <= n ; c++ )
         result = result*c;
 
   return ( result );
}

* OUTPUT *

Enter the number of rows you wish to see in pascal triangle: 4

   1
  1 1
 1 2 1
1 3 3 1
```

### 19. Write a program to print program to print patterns the following pattern (Stars Pyramid) ?

```c
#include <stdio.h>
 
int main()
{
   int row, c, n, temp;
 
   printf("Enter the number of rows in pyramid of stars you wish to see: ");
   scanf("%d",&n);
 
   temp = n;
 
   for ( row = 1 ; row <= n ; row++ )
   {
      for ( c = 1 ; c < temp ; c++ )
         printf(" ");
 
      temp--;
 
      for ( c = 1 ; c <= 2*row - 1 ; c++ )
         printf("*");
 
      printf("\n");
   }
 
   return 0;
}


* OUTPUT *

Enter the number of rows in pyramid of stars you wish to see: 5
 *
   ***
  *****
 *******
*********
```
