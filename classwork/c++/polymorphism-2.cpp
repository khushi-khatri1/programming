#include<iostream>
using namespace std;

//overriding method
class A{
	public:
		fun1()
		{
			cout<<"Aastha - kashish"<<endl;
		}
};

class B{
	public:
		fun1()
		{
			cout<<"jiya - khushi"<<endl;
		}
};

class C:public A,public B{
	public:
		fun1()
		{
			A::fun1(); //scope resolution operator
			B::fun1();
			cout<<"forever"<<endl;
		}
};

main()
{
	C obj;
	obj.fun1();
}
