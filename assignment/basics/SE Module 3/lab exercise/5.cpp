#include<iostream>
using namespace std;

main()
{
	int n1=31;
	const int n2=21;
	
	cout<<"n1 :"<<n1<<endl;
	cout<<"n2 :"<<n2<<endl;
	
	n1 = n1-n2;
	cout<<"new n1 is : "<<n1;
}
