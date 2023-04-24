---
sidebar_position: 8
---

# Arrays

### 1.	Define Array ?

Definition: An Array is a collection of variables of the same data type that are referenced by a common name.

### 2.	How to declare an single dimensional Array and assign values ?

Like any other variable arrays must be declared before they are used. 

***Declaration Syntax:***
dataType arrayName[size];

***Example:***
```c
int num[10];
declares an array of integers of size 10

* Declaration Assigning Values Syntax: *
dataType arrayName[size] = {comma separated values};
dataType arrayName[] = {comma separated values};
      or
arrayname[index] = value;
```

***Example:***
```c
// siged array
int num[3] = {11, 12, 13, 14}; 
// unsized array
int num[] = {11, 12, 13, 14};  
or
num[0] = 11;
num[1] = 12;
num[2] = 13;
num[3] = 14;
```

### 3.	How to access elements of an array?

a.	Entering Data into an array:
```c
    for (int i = 0 ; i < size ; i++ ) 
	{ 
		printf ( "Enter marks " );
           /* store data in array */
		scanf ( "%d", & arrayName [i] );
	}
```

b.	Reading Data from an array:
```c
    for (int i = 0 ; i < size ; i++ ) 
	{
        /* read data from an array*/
		int temp = arrayName [i];
	}
```

### 4.	How to declare an Two dimensional Array and assign values ?

* Declaration Syntax: *
int twoDimensional[rowSize][columnSize];

***Example:***
```c
//Declares an array of integer matrix of row size 4 and column size 2
int matrix[4][2]; 

* Declaration Assigning Values Syntax: *
dataType twoDimensional[rowSize][columnSize] = {comma separated values};
``
*  Example: *

int matrix[4][2] = { 
						{1, 2}, 
						{3, 4}, 
						{5, 6}, 
						{7, 8}
                    };

### 5.	 Write a program to find an average of seven subjects marks using an array?
```c
#include <stdio.h>
int main()
{ 
	int avg, sum = 0; int i; 
   /* array declaration */
	int marks[7];

   for ( i = 0 ; i < 7 ; i++ ) 
	{ 
		printf ( "Enter marks " );
        /* store data in array */
		scanf ( "%d", &marks[i] );
	}
	for ( i = 0 ; i < 7 ; i++ ) 
	{
        /* read data from an array*/
		sum = sum + marks[i];
	}
	avg = sum / 7 ; 

   printf ("\nAverage marks = %d", avg) ;
   return 0;
}

OUTPUT:
Enter marks 1
Enter marks 2
Enter marks 3
Enter marks 4
Enter marks 5
Enter marks 6
Enter marks 7
Average marks = 4
```c

### 6.	How to pass Single-Dimension Arrays to Functions?

In C, you cannot pass an entire array as an argument to a function. You can, however, pass a pointer to an array by specifying the arrays name without an index as shown in below example printArray(num);

Example:Passing Array to function
```c
#include <stdio.h>
void printArray(int x[5]); //function declaration

void main()
{
 /*  int num[5];*/

   int num[5] = {0,1,2,3,4};
   num[4] = 10;

   printArray(num);
}

//function Definition
void printArray(int x[5])
{
   for(int i = 0; i<5; i++)
   {
     printf("%d ",x[i]);
   }
}

*OUTPUT: *
0 1 2 3 10
```

We can write function argument in to three ways pass an array

Sized Array	:
	
void printArray(int x[5])
{
   //Code
}	

UnSized Array:

void printArray(int x[])
{
   //Code
}	

Using pointer :

void printArray(int *x)
{
   //Code
}

### 7.	Write a program to find the Largest Two Numbers in a given Array ?
```c
#include <stdio.h>
#define MAX 4
 
void main()
{
    int array[MAX], i, largest1, largest2, temp;
 
    printf("Enter %d integer numbers \n", MAX);
    for (i = 0; i < MAX; i++)
    {
        scanf("%d", &array[i]);
    }
 
    printf("Input interger are \n");
    for (i = 0; i < MAX; i++)
    {
      printf("%5d", array[i]);
    }
    printf("\n");
    /*  assume first element of array is the first larges t*/
    largest1 = array[0];
    /*  assume first element of array is the second largest */
    largest2 = array[1];
    if (largest1 < largest2)
    {
        temp = largest1;
        largest1 = largest2;
        largest2 = temp;
    }
    for (i = 2; i < 4;	i++)
    {
        if (array[i] >= largest1)
        {
            largest2 = largest1;
            largest1 = array[i];
        }
        else if (array[i] > largest2)
        {
            largest2 = array[i];
        }
    }
    printf("n%d is the first largest \n", largest1);
    printf("%d is the second largest \n", largest2);
    printf("nAverage of %d and %d = %d \n", largest1, largest2, (largest1 + largest2) / 2);
}

OUTPUT: 
Enter 4 integer numbers
80
23
79
58
Input interger are
80   23   79   58
 
80 is the first largest
79 is the second largest
 
Average of 80 and 79 = 79
```

### 8. Write a program to find smallest among N numbers ?
```c
#include <stdio.h> 
main() 
{ 
	int a[10], i, small; 
	printf("\nEnter elements of an array:\n"); 
	for (i=0; i<=9; i++) 
	scanf("%d", &a[i]); 
	small = a[0]; 
	for (i=0; i<=9; i++) 
	if (a[i] < small) 
	small = a[i]; 
	printf("\nSmallest number is %d", small); 
}
```

### 9. Find the count of each character in a string ? 
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
	for(int i = 0; i<LEN; i++)
	{
		ASCII[i] = 0;
	}

	printf("Enter the sentence: \n");
	for(j = 0; (sentence[j] = getchar())!='\n'; j++) { }
	
	sentence[j] = '\0';
	count = j;

	//Increment the value of the corresponding ASCII Array
	//Index (code) represents the ASCII Character
	for(int idx = 0; idx<count; idx++)
	{
		code = sentence [ idx ];
		ASCII[ code]  = ASCII[ code ]+1;
	}

	printf("The given sentence is: %s \n",sentence);

	//Print the Result
	int TotalChars = 0;
	for(int ch = 0; ch<LEN; ch++)
	{
		if(ASCII[ch] != 0)
		{
			int cnt = ASCII[ch];
			TotalChars = TotalChars + cnt;
			switch(ch)
			{
			case 9:
				printf("Horizontal Tab - %d\n", cnt);
				break;
			case 11:
				printf("Vertical Tab - %d\n", cnt);
				break;
			case 32:
				printf("Space - %d\n", cnt);
				break;
			default:
				printf("%c - %d\n",ch, cnt);
				break;
			}
		}
	}
	printf("Total Characters - %d\n", TotalChars);
}
```

### 10. Write a program to count the number of  Vowels in a string/word ?
```c
#include <stdio.h>
main()
{
	int i, vowels = 0;
	char word[20];
	printf("Enter the word\n");
	scanf("%s",word);
	i = 0;

	while(i<20 && word[i]!='\0')
	{
		switch(word[i])
		{
		    case 'a': case 'A';
			case 'e': case 'E';
			case 'i': case 'I';
			case 'o': case 'O';
			case 'u': case 'U';
				vowels++;
				break;
		}
	i++;
	}
	printf("The number of Vovels in a word are %d\n", vowels);
}
```
