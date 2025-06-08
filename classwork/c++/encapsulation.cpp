#include<iostream>
using namespace std;

class A{
	public:
		int b;
		fun1()
		{
			int a=10;
			this->b=a;
		}
		fun2()
		{
			cout<<"A :"<<this->b;
		}
};
main()
{
	A obj;
	obj.fun1();
	obj.fun2();
}
