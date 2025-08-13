#include<iostream>
using namespace std;

main()
{
	int a[2][2] , b[2][2];
	int i,j;
	
	cout<<" ***** A ***** "<<endl;
	for(i=0;i<2;i++)//rows
	{
		for(j=0;j<2;j++)//cols
		{
			cout<<"Enter elements : ";
			cin>>a[i][j];
		} 
	}
	
	cout<<endl<<" ***** matrix ***** "<<endl;
	for(i=0;i<2;i++)//rows
	{
		for(j=0;j<2;j++)//cols
		{
			cout<<a[i][j]<< "  ";
		} 
		cout<<endl;
	}
	
	cout<<endl<<" ***** B ***** "<<endl;
	for(i=0;i<2;i++)//rows
	{
		for(j=0;j<2;j++)//cols
		{
			cout<<"Enter elements : ";
			cin>>b[i][j];
		} 
	}
	
	cout<<endl<<"***** matrix format ***** "<<endl;
	for(i=0;i<2;i++)//rows
	{
		for(j=0;j<2;j++)//cols
		{
			cout<<b[i][j]<< "  ";
		} 
		cout<<endl;
	} 
	
	cout<<endl<<"***** Addition ***** "<<endl;
	for(i=0;i<2;i++)//rows
	{
		for(j=0;j<2;j++)//cols
		{
			cout<<a[i][j] + b[i][j] << "  ";
		}
		cout<<endl;
	} 

}
