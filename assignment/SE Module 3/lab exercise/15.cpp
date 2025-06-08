#include<iostream>
using namespace std;

main()
{
	int a[5],i;
	float sum , avg;
	for(i=1;i<=5;i++)
	{
		cout<<"Enter elements : ";
		cin>>a[i];
	}
	
	for(i=1;i<=5;i++)
	{
		sum = sum+a[i];
	}
	cout<<"sum of array is : " << sum <<endl ;
	
	for(i=1;i<=5;i++)
	{
		avg = sum/5;
	} 
	cout<<"Average of array is : " << avg ;
}
