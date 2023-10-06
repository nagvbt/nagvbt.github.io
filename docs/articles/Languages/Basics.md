
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD041 MD042 MD001 MD051 MD025-->

# Basics

***Legend:***

1. ditto - is same as C++

## Comments

|Description |C++         |C#            |Java|JS           | Python    |
|---         |---         |---           |---          |---        | ---        |
|Single line | // comment | ditto | ditto | ditto| # comment |
|Multiline   | /*multiline*/ | ditto | ditto | ditto|"""multiline""|

## Main Function

### C++ Main

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Main Method";
  return 0;
}
```

### C# Main

```cpp
using System;
 
class Program {
  
    // Main Method
    static public void Main(String[] args)
    {  
        System.Console.WriteLine("Main Method");
    }
}
```

### Java Main

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

### JS

No need main

```js
console.log("Main Method");
```

### Python

main function is not needed in Python. When you run a Python script, everything that’s not defined in a function or class will be executed.

```js
print("Main Method");
```

### Variables and Semicolons

***Variables***
No need to declare variables in Python. In Python, variables are just labels that point to object instances in memory, and are not statically bound to a specific data type.

***Semicolons***
Semicolons are optional in Python. As the new line (\n) marks the end of a statement, since it’s better to have one statement per line anyway! It also declutters the code a bit.

 |C++         |C#    | Java        |JS           | Python    |
|---         |---     |---       |---          |---        |
| <pre>type variableName = value; <br/>// Create a string variable <br/> string greeting = "Hello";</pre> | ditto | ditto | <pre>let greeting = "Hello";</pre> | <pre>greeting = "Hello"</pre>|
| <pre>// Create a integer variable<br/>int i = 79;</pre> | ditto | ditto | <pre>let i = 79;</pre> | <pre>i = 79</pre>|

## Console Input/output

***Input:***
Input is used to get user input from console.

***Output:***
Output is used to output (print) values on console

|Description |C++         |C#            |Java|JS           | Python    |
|---         |---         |---           |---          |---        | ---        |
|Input| cin >> | System.Console.ReadLine( );|System.console( ).readLine( );| | input( )
|Output| cout<< |System.Console.WriteLine("")|System.out.println("");|console.log("")|print("")|

## Braces / Code blocks

 |C++         |C#   |Java         |JS           | Python    |
|---         |---    |---          |---          |---        |
 | <pre>{ <br/>  statements1 <br/>  statements2 <br/>}</pre> | ditto | ditto | ditto | <pre>i=1 <br/>  statements1 <br/>  statements2 </pre> |

## Decision/Conditional  Control Flow

 ***Switch***

 1. In java `break` is optional
 2. In Python from 3.10 we have match-case for simulating Switch prior to 3.10 elif ladder was used.

Python Switch example using elif ladder.

 ```python
def num_in_words(no):
    if(no==1):
        print("One")
    elif(no==2):
        print("Two")
    elif(no==3):
        print("Three")
    else:
        print("Give input of numbers from 1 to 3")
    
num_in_words(3)
num_in_words(4.5)
"""
Output:
Three
Give input of numbers from 1 to 3
"""
 ```

|Description |C++         |C#     |Java       |JS           | Python    |
|---         |---         |---   |---        |---          |---        |
|if | <pre>if (condition) {  <br/>  statement1  <br/>  statement2  <br/>} </pre> | ditto | ditto | ditto |  <pre>if (condition):  <br/>   statement1  <br/>   statement2</pre> |
|if else   | <pre>if (condition1) {  <br/>  statement1 <br/>  statement2  <br/>}  else {  <br/>  statement1  <br/>  statement2   <br/>}  </pre>   | ditto | ditto |ditto | <pre>if (condition1): <br/>  statement1 <br/>  statement2  <br/>elif (condition2):  <br/>  statemnt1 <br/>  statement2</pre>|
|if else if  | <pre>if (condition1) {  <br/>   statement1  <br/>   statement2   <br/>} else if (condition2) {   <br/>   statement1  <br/>   statement2   <br/>} else if (condition2) {    <br/>   statement1 <br/>   statement2   <br/>} </pre>   | ditto | ditto |ditto | <pre>if (condition1): <br/>  statement1  <br/>  statement2 <br/>elif (condition2): <br/>  statement1 <br/>  statement2  <br/>else: <br/>  statement1  <br/>  statement2  </pre>|
| Switch | <pre>switch (expression) {<br/>  case value_1:<br/>      // statement1;<br/>      break;<br/>  case value_2:<br/>      // statement2;<br/>      break;<br/>  default:<br/>      // default_statements;<br/>      break;<br/><br/>}</pre>| ditto |ditto|ditto| From python 3.10 we have match case <pre>match expression:<br/>  case value_1:<br/>      // statement1 <br/>  case value_2:<br/>      // statement2 <br/>  case _:<br/>      // default_statements</pre>

## Repetition Control Flow

***while Loop***
The while loop First checks the condition and loops through a block of code as long as condition is true.

- Python:
while loop with the else statement we can run a statements 3 & 4 once when the condition no longer is true.

***do-while Loop***

The do while loop is used to execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

- Python: no do-while loop in python

|Description |C++         |C#      |Java      |JS           | Python    |
|---         |---         |---    |---       |---          |---        |
| while |<pre>while (condition){ <br/>  statement1 <br/>  statement2 <br/>}; <br/> </pre>| ditto | ditto |ditto | <pre>while (condition):  <br/>  statement1  <br/>  statement2</pre> while with else <pre>while (condition):  <br/>  statement1  <br/>  statement2  <br/>else: <br/>  statement3  <br/>  statement4 <br/></pre>
| do-while | <pre>do {<br/>  statement1 <br/>  statement2 <br/> }<br/>while(condition); </pre>| ditto | ditto |ditto | no do-while|

***for Loop***

The for loop – firstly initializes, then, condition check, execute body, update

- Python: for loop with else has an optional else block as well. The else part is executed when the loop is finished.

***foreach Loop***

The for-each loop, is used exclusively to loop through elements in an array.

***for-in Loop***
The JavaScript for in statement loops through the properties of an Object:

```js
const person = {fname:"Bill", lname:"Gates", age:50};

let text = "";
for (let pKey in person) {
  text += person[pKey];
}
// OUTPUT
Bill Gates 50
```

***for-of Loop***
The JavaScript for-of statement loops through the values of an iterable object such and iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.

- It is similar to foreach loop

```js
const fruits = ["apple", "banana", "grapes"];

let text = "";
for (let fruit of fruits) {
  text += fruit + "<br>";
}
// OUTPUT
apple
banna
grapes
```

|Description |C++         |C#      |Java      |JS           | Python    |
|---         |---         |---    |---       |---          |---        |
|for| <pre>for(initialize; condition; update)<br/>{ <br/> //code block to be executed <br/>}</pre>|ditto|ditto|ditto| <pre> for val in sequence:<br/>   statement1  <br/>   statement2  <br/></pre> for with else <pre>for val in sequence:  <br/>  statement1  <br/>  statement2  <br/>else: <br/>  statement3  <br/>  statement4 <br/></pre>|
|foreach| Introduced in C++ version 11 (2011) <pre>foreach (type value : array) <br/>{<br/> // code block to be executed <br/>} </pre>| <pre>foreach (type value in array) <br/>{<br/> // code block to be executed <br/>} </pre>|<pre>foreach (type value : array) <br/>{<br/> // code block to be executed <br/>} </pre>| Not Available | Not Available |
| for-in| Not Available | Not Available | Not Available |<pre>for (key in object) {<br/>  // code block to be executed <br/>} </pre> | Not Available |
| for-of| Not Available | Not Available | Not Available |<pre>for (variable in iterable) {<br/>  // code block to be executed <br/>} </pre> | Not Available |
