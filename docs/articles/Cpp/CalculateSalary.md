
# Calculate Salary

```cpp
#include<iostream>
//Caluclation of salary
 
class CSalary
{
private:
 float mfltbasic;
 
public:
 void Display();
 void SetBasic( );
 float CalGSal(float *da, float *hra, float *con);
  
};
 
float CSalary::CalGSal(float *da, float *hra, float *con)
{
 float Gross;
 if(mfltbasic>=5000)
 {
  *da=mfltbasic*1.1; //110%
  *hra=mfltbasic*.2;
  *con=500;
 }
 Gross=(mfltbasic+*da+*hra+*con);
 
 return Gross;
}
 
void CSalary::Display()
{
 float da, hra, con, Gross;
 cout<<"    Basic salary :"<<mfltbasic<<endl;
 
 Gross =CalGSal(&da, &hra, &con);
 
 cout<<"    Hra :"<<hra<<endl;
 cout<<"    Da :"<<da<<endl;
 cout<<"    Conveyance :"<<hra<<endl;
 cout<<"    --------------------"<<endl;
 cout<<"    Gross Salary :"<<Gross<<endl;
}
 
void CSalary::SetBasic()
{
 cout << "Enter Basic Salary :";
 cin>>mfltbasic;
}
 
void main()
{
 CSalary sal;
 sal.SetBasic();
 sal.Display();
}

/*
Output
       Enter Basic Salary :100000
        Basic salary :100000
        Hra                 :20000
        Da                 :110000
        Conveyance  :20000
        --------------------
        Gross Salary :230500
*/
```
