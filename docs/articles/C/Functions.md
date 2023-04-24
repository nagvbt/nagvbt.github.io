---
sidebar_position: 7
---

# Functions

### 1.	Define a C function ?

Definition: A ‘Function’ can be defined as a group of statements which performs a certain task.

***Syntax:***
returnType functionName ( parameter1, parameter2, ...) 
{
	//Statement(s)
      //body of the function 
}

### 2.	Explain about parts of a function ?

A function definition in C programming language consists of a function header and a function body. Here are all the parts of a function:

return_type function_name( parameter list )
{
   //body of the function 
}

a.	Return Type: A function may return a value. The return_type is the data type of the value the function returns. Some functions perform the desired operations without returning a value. In this case, the return_type is the keyword void.

b.	Function Name: This is the actual name of the function. The function name and the parameter list together constitute the function signature.

c.	Parameters: A parameter is like a placeholder. When a function is invoked, you pass a value to the parameter. This value is referred to as actual parameter or argument. The parameter list refers to the type, order, and number of the parameters of a function. Parameters are optional; that is, a function may contain no parameters.

d.	Function Body: The function body contains a collection of statements that define what the function does.

Note: returnType specifies the type of data that the function returns. A function may return any type of data except an Array.

### 3.	Explain about function Declaration and Definition?

* Declaration: *
A function declaration tells the compiler about a function name and how to call the function. The actual body of the function can be defined separately.
A function declaration has the following parts:
return_type function_name( parameter list );
For the above defined function max(), following is the function declaration:
int max(int num1, int num2);
Parameter names are not important in function declaration only their type is required, so following is also valid declaration:
int max(int, int);
Function declaration is required when we define a function in one source file and you call that function in another file. In such case we should declare the function at the top of the file calling the function.

* Definition: *
When a function is defined at any place in the program then it is called function definition. At the time of definition of a function actual logic is implemented with-in the function.

### 4.	What are the Advantages of using functions ?

1.	Writing functions avoids rewriting the same code 
2.	Using functions it becomes easier to write programs and keep track of what they are doing.

### 5.	Write a program to perform addition of two numbers using function?
```c
#include <stdio.h>
//Function Declaration
int addition (int a, int b);

int main ()
{
  int z;
  z = addition (5,3);
  printf("The result is = %d \n",z);
  return 0;
}

//Function definition
int addition (int a, int b)
{
  int Result;
  Result = a + b;
  return Result;
}

OUTPUT:
The result is =  8
```
Program flow:
In the above example the function addition  performs a certain task Adding of two numbers. 
The value of both arguments passed in the call (5 and 3) are copied to the local variables int a and int b within the function.

The call to a function (addition (5,3)) is literally replaced by the value it returns (8).

### 6.	Explain about Passing Parameters to a Function ?

There are two ways to pass parameters to a function:
			
•	Pass by Value: mechanism is used when you don't want to change the value of passed paramters. When parameters are passed by value then functions in C create copies of the passed in variables and do required processing on these copied variables.

•	Pass by Reference mechanism is used when you want a function to do the changes in passed parameters and reflect those changes back to the calling function. In this case only addresses of the variables are passed to a function so that function can work directly over the addresses.

### 7.	Write a program to swap two numbers using pass by reference?
```c
#include <stdio.h>
 
void swap(int*, int*);
 
int main()
{
   int x, y;
 
   printf("Enter the value of x and y\n");
   scanf("%d%d",&x,&y);
 
   printf("Before Swapping\nx = %d\ny = %d\n", x, y);
 
   swap(&x, &y); 
 
   printf("After Swapping\nx = %d\ny = %d\n", x, y);
 
   return 0;
}
 
void swap(int *a, int *b)
{
   int temp;
 
   temp = *b;
   *b   = *a;
   *a   = temp;   
}
```
