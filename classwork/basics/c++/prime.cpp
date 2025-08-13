#include<iostream>
using namespace std;

main()
{
	int n;
	int i,count=0;
	cout<<"enter number:";
	cin>>n;
	
	for(i=1;i<=n;i++)
	{
		if(n%i==0)
		{
			count++;
		}
	}
	if(count==2)
	{
		cout<<n<<"is prime";
	}
	else
	{
		cout<<n<<"is not prime";

	}	
}
