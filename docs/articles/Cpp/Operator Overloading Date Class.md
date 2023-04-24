# Operator Overloading Date Class

```cpp
//Class Date Explains About operator overloading
 
#define W1 "SUN DAY"
#define W2 "MON DAY"
#define W3 "TUES DAY"
#define W4 "WEDNES DAY"
#define W5 "THURS DAY"
#define W6 "FRI DAY"
#define W7 "SATUR DAY"
 
#include<iostream>
#include<string.h>
using namespace std;
 
class DATE
{
	int dd;
	int mm;
	int yy;
	long dp;
	charweek[30];
	voidcaldmy();
	voidcal_dp_week();
public:
	DATE();
	DATE(int,int,int);
	voidgetdate();
	voidgetdate(int,int,int);
	voidshowdate();
	DATE operator+(long);
	DATE operator-(long);
	long operator-(DATE);
	DATE operator=(long);
	DATE operator++();
	DATE operator++(int);
	DATE operator--();
	DATE operator--(int);
	int operator>(DATE);
 
};
DATE::DATE()
{
	dp=1;
	caldmy();
}
DATE::DATE(int d,int m,int y)
{
	dd=d;
	mm=m;
	yy=y;
	cal_dp_week();
}
 
int DATE::operator>(DATE D)
{
	returndp>D.dp;
}
 
DATE DATE::operator++()
{
	dp++;
	caldmy();
	return *this;
}
 
DATE DATE::operator++(int)
{
	DATE td;
	td=*this;
	dp++;
	caldmy();
	returntd;
}
 
DATE DATE::operator--()
{
	dp--;
	caldmy();
	return *this;
}
 
DATE DATE::operator--(int)
{
	DATE td;
	td=*this;
	dp--;
	caldmy();
	returntd;
}
  
DATE DATE::operator=(long days)
{
	dp=days;
	caldmy();
	return *this;
}
 
long DATE::operator-(DATE D)
{
	returndp-D.dp;
}
 
void DATE::getdate(int d,int m,int y)
{
	dd=d;
	mm=m;
	yy=y;
	cal_dp_week();
}
 
DATE DATE::operator+(long days)
{
	DATE td;
	td.dp=dp+days;
	td.caldmy();
	returntd;
}
 
DATE DATE::operator-(long days)
{
	return operator+(-days);
} 
 
void DATE::caldmy()
{
	long int tdp=dp;
	for(yy=1;tdp>365;tdp-=365)
	{
		if(tdp==366 && yy%4==0)
		break;
		if(yy%4==0)
		tdp--;
	 
		yy++;
	}
	 
	if(tdp>=1&&tdp<=31)
	{
		mm=1;
		dd=tdp;
	}
	 
	if(tdp>=32&&tdp<=59)
	{
		mm=2;
		dd=tdp-31;
	}
	 
	if(yy%4==0 && tdp==60)
	{
		mm=2;
		dd=tdp-31;
	}
	if(yy%4==0)
	tdp--;
	 
	if(tdp>=60&&tdp<=90)
	{
		mm=3;
		dd=tdp-59;
	}
	if(tdp>=91&&tdp<=120)
	{
		mm=4;
		dd=tdp-90;
	}
	if(tdp>=121&&tdp<=151)
	{
		mm=5;
		dd=tdp-120;
	}
	if(tdp>=152&&tdp<=181)
	{
		mm=6;
		dd=tdp-151;
	}
	if(tdp>=182&&tdp<=212)
	{
		mm=7;
		dd=tdp-181;
	}
	if(tdp>=213&&tdp<=243)
	{
		mm=8;
		dd=tdp-212;
	}
	if(tdp>=244&&tdp<=273)
	{
		mm=9;
		dd=tdp-243;
	}
	if(tdp>=274&&tdp<=304)
	{
		mm=10;
		dd=tdp-273;
	}
	if(tdp>=305&&tdp<=334)
	{
		mm=11;
		dd=tdp-304;
	}
	if(tdp>=335&&tdp<=365)
	{
		mm=12;
		dd=tdp-334;
	}
	 
	switch(dp%7)
	{
	case1:strcpy(week,W1);
		break;
	case2:strcpy(week,W2);
		break;
	case3:strcpy(week,W3);
		break;
	case4:strcpy(week,W4);
		break;
	case5:strcpy(week,W5);
		break;
	case6:strcpy(week,W6);
		break;
	case0:strcpy(week,W7);
		break;
 
	}
}// END FOR CAL DMY
 
voidDATE::cal_dp_week()
{
	int syy;
	dp=0;
	for(syy=1;syy<yy;syy++)
	{
		dp+=365;
		 
		if(syy%4==0)
			dp++;
	}
	switch(mm)
	{
		case12:dp+=30;
		case11:dp+=31;
		case10:dp+=30;
		case9:dp+=31;
		case8:dp+=31;
		case7:dp+=30;
		case6:dp+=31;
		case5:dp+=30;
		case4:dp+=31;
		case3:dp+=28;
		case2:dp+=31;
		case1:dp+=dd;
	}
	if( yy%4==0 && mm>2)
		dp++;
	switch(dp%7)
	{
	case1:strcpy(week,W1);
		break;
	case2:strcpy(week,W2);
		break;
	case3:strcpy(week,W3);
		break;
	case4:strcpy(week,W4);
		break;
	case5:strcpy(week,W5);
		break;
	case6:strcpy(week,W6);
		break;
	case0:strcpy(week,W7);
		break;
 
	}
} // END FOR CAL DP &WEEK
 
void DATE::getdate()
{
	cout<<"\nENTER DD:";
	cin>>dd;
	cout<<"\nENTER MM:";
	cin>>mm;
	cout<<"\nENTER YY:";
	cin>>yy;
	cal_dp_week();
}
 
void DATE::showdate()
{
	cout<<"\nDATE:"<<dd<<"/"<<mm<<"/"<<yy;
	cout<<"\nDP ="<<dp;
	cout<<"\nWEEK ="<<week;
}
 
DATE operator+(long days,DATE D)
{
	returnD+days;
}
 
void main()
{
	DATE d1,d2,d3,d4;
	d1.getdate(23,2,1981);
	d2.getdate(15,3,2005);
	cout<< (d2>d1);
	d1.showdate();
	// d2=d1+365+1;
	// d2=d1-365;
	// d2.showdate();
	// cout<<d2-d1;
	// d3= d2-d1;
	/* d3.getdate(28,2,2003);
	d4=d3++;
	d3.showdate();
	d4.showdate();
	*/
}
```