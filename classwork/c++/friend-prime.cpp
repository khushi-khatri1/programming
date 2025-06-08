#include<iostream>
using namespace std;

class prime{
	private:
		int i,n;
		int count=0;
	
	friend fun1(prime &obj);
};

fun1(prime &obj)
{
	cout<<"Enter number : ";
	cin>>obj.n;
	
	for(obj.i=1;obj.i<=obj.n;obj.i++)
	{
		if(obj.n%obj.i== 0)
		{
			obj.count++;
		}
	}
	if(obj.count==2)
	{
		cout<<"prime!!";
	}
	else
	{
		cout<<" not prime!!";
	}
}

main()
{
	prime obj;
	fun1(obj);
}
