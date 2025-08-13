#include<iostream>
using namespace std;

main()
{
	int n1,n2;
	cout<<"enter first number :";
	cin>>n1;
	cout<<"enter second number :";
	cin>>n2;
	
	cout<<endl<<"******** arithmatic operation ********"<<endl;
	cout<<"Addition : "<<n1 + n2<<endl;
	cout<<"subtraction : "<<n1 - n2<<endl;
	cout<<"divison : "<<n1 / n2<<endl;
	cout<<"modulus : "<<n1 % n2<<endl;
	
	cout<<endl<<"******** logical operation ********"<<endl;
	cout<<"n1 && n2 :"<<(n1 && n2)<<endl;
	cout<<"n1 || n2 :"<<(n1 || n2)<<endl;
	cout<<"!n1 : "<<(!n1)<<endl;
	cout<<"!n2 :"<<(!n2)<<endl;
	
	cout<<endl<<"******** relational operation ********"<<endl;
	cout<<"n1 == n2 : "<<(n1 == n2)<<endl;
	cout<<"n1 != n2 : "<<(n1 != n2)<<endl;
	cout<<"n1 < n2 : "<<(n1 < n2)<<endl;
	cout<<"n1 < n2 : "<<(n1 > n2)<<endl;
	cout<<"n1 >= n2 : "<<(n1 >= n2)<<endl;
	cout<<"n1 <= n2 : "<<(n1 <= n2)<<endl;
	
	cout<<endl<<"******** bitwise operation ********"<<endl;
	cout<<"n1 & n2 : "<<(n1 & n2)<<endl;
	cout<<"n1 | n2 : "<<(n1 | n2)<<endl;
	cout<<"n1 ^ n2 : "<<(n1 ^ n2)<<endl;
	cout<<"~n1 : "<<(~n1)<<endl;
	cout<<"n1 << 1: "<<(n1 << 1)<<endl;
	cout<<"n1 >> 1 : "<<(n1 >> 1)<<endl;
}
