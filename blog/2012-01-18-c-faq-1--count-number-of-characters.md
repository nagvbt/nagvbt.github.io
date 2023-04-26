---
title: "C FAQ 1: How to write a code to count number of characters/Spaces/numbers/special characters present in a sentence.  sentence =\"1. GOD IS GREAT !!!\""
date: "2012-01-18"
categories: 
  - "c-cpp-mfc-vcpp"
tags: 
  - "c-faq"
  - "c"
---

\[sourcecode language="c"\]
#include 
#define LEN 255  //Total ASCII Characterset
void main()
{
    int ASCII\[LEN\];
    char sentence\[100\];
    int count = 0, j = 0;
    int code;

    //Initialize the ASCII Array with Zero
    for(int i = 0; i<LEN; i++)
    {
        ASCII\[i\] = 0;
    }

    printf("Enter the sentence: n");
    for(j = 0; (sentence\[j\] = getchar())!='n'; j++)
    {
        //Do Nothing
    }

    sentence\[j\] = '';
    count = j;

    //Increment the value of the corresponding ASCII Array
    //Index (code) represents the ASCII Character
    for(int idx = 0; idx<count; idx++)
    {
        code = sentence \[ idx \];
        ASCII\[ code\]  = ASCII\[ code \]+1;
    }

    printf("The given sentence is: %s n",sentence);

    //Print the Result
    int TotalChars = 0;
    for(int ch = 0; ch<LEN; ch++)
    {
        if(ASCII\[ch\] != 0)
        {
            int cnt = ASCII\[ch\];
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

**OUTPUT**

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
