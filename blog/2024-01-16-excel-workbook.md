---
tags: ["python"]
---

# Create a Excel Workbook and add Data

1. Open Terminal and Install openpyxl

    `python -m pip install openpyxl`

2. Open VSCode and Create a file excel_practice.py and write the below code
```python
import openpyxl  

name_list = [
    "Ram",
    "Lakshman",    
    "Sita",
    "Hanuman"
]  

roll_number_list = ["001", "002", "003", "004"]

# Workbook initialize
wb = openpyxl.Workbook()

# Take the active sheet and name title and column headers
sheet = wb.active
sheet.title = "Students"
sheet["A1"] = "Name"
sheet["B1"] = "Roll Number"

# Append the values to the sheet
for name, number in zip(name_list, roll_number_list):
    sheet.append([name, number])

# Save the Excel
wb.save("Students_Data.xlsx")

```

3. No run the code

4. You can see the **Students_Data.xlsx** created.