---
title: "C FAQ 2: How to insert space between each character in a sentence. sentence =\"GOOD MORNING\" newsentence = \"G O O D  M O R N I N G\""
date: "2012-01-19"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "c-faq"
  - "c"
---

The main/logic part of the code is just

\->1. copy char by char from sentence to newsentence ->2. Insert space after each step 1

```c

# include <stdio.h>

void main() { char sentence\[100\], newsentence\[100\]; int i = 0, j = 0, count = 0; printf("Enter the sentence to be formatted:n"); for(i = 0; (sentence\[i\]=getchar())!='n'; i++) { } sentence\[i\] = '/0'; //shows the number of chars accepted in a sentence count = i; //Insert Space between each character for(i = 0; i<count; i++) { newsentence\[j\] = sentence\[i\]; j++; newsentence\[j\] = ' '; j++; } newsentence\[j\] = '/0'; printf("The given sentence is: %s n",sentence); printf("Formated sentence is : %s n",newsentence); } ```

**OUTPUT**

 Enter the sentence to be formated:
 GOOD MORNING
 The given sentence is : GOOD MORNING
 New sentence is  : G O O D   M O R N I N G
