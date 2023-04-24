# Notes 

CSS stands for Cascading Style Sheets
CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files
	
### What is Anatomy of CSS ruleset?

The whole structure is called a rule set (but often "rule" for short). Note also the names of the individual parts:

**Selector:**

The HTML element name at the start of the rule set. It selects the element(s) to be styled (in this case,  elements). To style a different element, just change the selector.

**Declaration:**

A single rule like color: red; specifying which of the element's properties you want to style.

**Properties:**

Ways in which you can style a given HTML element. (In this case, color is a property of the  elements.) In CSS, you choose which properties you want to affect in your rule.

**Property value:**

To the right of the property after the colon, we have the property value, which chooses one out of many possible appearances for a given property (there are many color values besides red).

Note the other important parts of the syntax:
• Each rule set (apart from the selector) must be wrapped in curly braces ({}).
• Within each declaration, you must use a colon (:) to separate the property from its values.

• Within each rule set, you must use a semicolon (;) to separate each declaration from the next one.

So to modify multiple property values at once, you just need to write them separated by semicolons, like this:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```
