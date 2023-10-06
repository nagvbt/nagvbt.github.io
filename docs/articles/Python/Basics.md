---
sidebar_position: 1
---

<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
# STRINGS

## Title

title() displays each word in titlecase, where each word begins with a
capital letter.

```python
name = "ram mohan"
print(name.title()); #output >>> Ram Mohan

```

## Upper & Lower

```python
name2 = "Sam Prabu"
print(name2.upper()) #output >>> SAM PRABU
print(name2.lower()) #output >>> sam prabu
```

## Concatenating Strings

Concatenating strings means combining strings.

Example: To store a surname name and a name in separate variables, and then to combine them.

```python
surname = 'Thota'
name = 'Ramudu'

full_name = surname + ' ' + name
print(full_name) #output >>> Thota Ramudu
```

## Tabs or Newlines

For easy reading of the output we can use Tabs(\t) or newlines (\n)

```python
surname = 'Thota'
name = 'Ramudu'

full_name = surname + ' ' + name
print(surname+'\n'+name + '\n\t' + full_name)

#output
Thota
Ramudu
 Thota Ramudu
```

## Stripping Whitespace

1. rstrip(): strip whitespace from the right side
2. lstrip(): strip whitespace from the left side
3. strip(): strip whitespace from both sides

Example:

```python
country = ' India '
# strip whitespace from the right side
print(country.rstrip())  
# strip whitespace from the left side
print(country.lstrip())
# strip whitespace from both sides
print(country.strip())

#Output
 India
India 
India
```

## str conversion

str(): str() function tells Python to represent non-string values as strings.

Example

```python
age = 43
message = "Happy " + str(age) + "rd Birthday!"
print(message)

#output
Happy 43rd Birthday!
```

# Numbers

## Integers

```python
>>> 2 + 3
5
>>> 3 - 2
1
>>> 2 * 3
6
```

## Float

```python
>>> 0.1 + 0.1
0.2
>>> 0.2 + 0.2
0.4
>>> 2 * 0.1
0.2
```
