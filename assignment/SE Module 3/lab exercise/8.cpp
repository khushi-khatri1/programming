#include<iostream>
using namespace std;

main()
{
	int marks;
	cout<<"Enter marks :";
	cin>>marks;
	
	if(marks>90)
	{
		cout<<"Grade A";	
	}
	else if(marks=90 && marks>80)
	{
		cout<<"Grade B";	
	}	
	else if(marks=80 && marks>70)
	{
		cout<<"Grade C";	
	}	
	else if(marks=70 && marks>=45)
	{
		cout<<"Grade D";	
	}	
	else
	{
		cout<<"Fail";	
	}		
} 
