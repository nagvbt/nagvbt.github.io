---
sidebar_position: 5
---


# Control Statements
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->

### 1. What are control statements?

Control statements controls the flow of the program execution. There are three types of controls statements
   a. Selection
   b. Iteration
            c. Jump statements

### 2. What are Selection Statements ?

A selection statement can direct the flow of program execution along different paths depending on a given condition.

Five Kinds of selection statements:

1. if
2. if-else
3. Switch     e
4. Logical operators
5. Conditional operators

### 3. Explain about if & if-else Selection Statements ?

1. The if statement
If the condition, whatever it is, is true, then the statements in the {} executed.

***Syntax:***

```c
if(condition)
{
  //statements 1
  //statements n
}
```

2. The if-else Statement
If we want to execute one group of statements if the expression evaluates to true and another group of statements if the expression evaluates to false the use the if-else statement:

***Syntax:***

```c
if(conditional) {
  //statements 1
}
else{
  // statements 2
}
```

### 4. Write a program  To find given number is even or odd use 'if & if-else' Selection Statements?

```c
#include <stdio.h>  
int main(void)                
{
 int num = 0;
 
 puts("Enter a number");
 scanf("%d", &num);
 
 if ( num % 2 == 0 )
 {
  puts( "Given number is even" );
 }
 else          
 {
    puts( "Given number is odd" );  
 }
}
```

### 5. Explain about Switch Selection Statement ?

C has a built-in multiple-branch selection statement, called switch, which successively tests the value of an expression against a list of integer or character constants. When a match is found, the statements associated with that constant are executed.

***Syntax:***

```c
switch (expression) 
{
 case constant1:
 statement sequence
 break;

 case constant2:
 statement sequence
 break;
 .
 .
 default
 statement sequence
}
```

Note: The expression must evaluate to an integer type. Thus, you can use character or integer values, but floating-point expressions, are not allowed. The default statement is executed if no matches are found.

When break is encountered in a switch, program execution "jumps" to the line of code following the switch statement.

### 6. Write a program to test for gender by accepting a character. Make use of switch statement ?

```c
#include <stdio.h>  
int main(void)                
{
 char ch;
 
 printf("Enter your sex (m/f):");
 scanf("%c", &ch);
 
 switch(ch)
 {
  case 'm':
   printf( "You are a male." );
  break;
    
  case 'f':
   printf( "You are a female." );
  break;

  default:
   printf( "Error: Invalid sex code:" );
 }

 return 0;
}

* OUTPUT: *                   
Enter your sex (m/f):m 
You are a male.
```

### 7. Explain about Logical Operators?

C allows usage of three logical operators, namely, &&, || and !. These are to be read as ‘AND’ ‘OR’ and ‘NOT’ respectively.
              The following figure summarizes the working of all the three logical operators.

### 8. Write a program to calculate the division obtained by the student. Make use of Logical Operators ?

The marks obtained by a student in 5 different subjects are input through the keyboard. The student gets a division as per the following rules:
• Percentage above or equal to 60 - First division
• Percentage between 50 and 59 - Second division
• Percentage between 40 and 49 - Third division
• Percentage less than 40 - Fail

```c
#include <stdio.h>  
main( )
{
 int m1, m2, m3, m4, m5, per ;
 printf ( "Enter marks in five subjects " ) ;
 scanf ( "%d %d %d %d %d", &m1, &m2, &m3, &m4, &m5 ) ;
 per = ( m1 + m2 + m3 + m4 + m5 ) / 5 ;

 if ( per >= 60 )
 {
  printf ( "First division" ) ;
 }

 if ( ( per >= 50 ) && ( per < 60 ) )
 {
  printf ( "Second division" ) ;
 }

 if ( ( per >= 40 ) && ( per < 50 ) )
 {
  printf ( "Third division" ) ;
 }

 if ( per < 40 )
 {
  printf ( "Fail" ) ;
 }
}
```

### 9. Explain about Conditional Operators?

The conditional operators ? and : are sometimes called ternary operators since they take three arguments. In fact, they form a kind of foreshortened if-then-else. Their general form is,

* Syntax: *
expression 1 ? expression 2:expression 3
What this expression says is: “if expression 1 is true (that is, if its value is non-zero), then the value returned will be expression 2, otherwise the value returned will be expression 3”. Let us understand this with the help of a few examples:

### 10. Give an example for Conditional Operators?

```c
int x, y ; 
scanf ( "%d", &x ) ; 
y = ( x > 5 ? 3 : 4 ) ; 
```

This statement will store 3 in y if x is greater than 5, otherwise it will store 4 in y. The equivalent if statement will be,

```c
if ( x > 5 ) 
{
      y = 3 ; 
}
else 
{
     y = 4 ; 
}
```
