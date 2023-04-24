# Enum

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