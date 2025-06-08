#include<iostream>
using namespace std;

class A{
	protected:
		int a=10;
		int b=20;
	public:
		fun1()
		{
			cout<<"Addition :"<<a+b<<endl;
		}
};

class B:public A{
	public:
		fun2()
		{
			cout<<"subtraction :"<<a-b<<endl;
		}
};

main()
{
	B obj;
	obj.fun1();
	obj.fun2();
}
