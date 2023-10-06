# Enum
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
```javascript
const QuestionType = {
MultipleChoice: { value:1, text:'MultipleChoice' },
MultipleSelect: { value:2, text:'MultipleSelect' },
}

  const getQuestionType = (type) => {
    let statusText = '';
    switch(type){
   case QuestionType.MultipleChoice.value:
   statusText = QuestionType.MultipleChoice.text
   break;
   case QuestionType.MultipleSelect.value:
   statusText = QuestionType.MultipleSelect.text
   break;
 }
  
  return statusText;
  };
  
  console.log(getQuestionType(2));
  //output
  // MultipleSelect
  
```
