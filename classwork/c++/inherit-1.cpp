#include<iostream>
using namespace std;

class A{
	public: //single inheritance
		fun1()
		{
			cout<<"Hello"<<endl;
		}
};
class B:public A{
	public:
		fun2()
		{
			cout<<"everyone
			"<<endl;
		}
};	
main()
{
	B obj;
	obj.fun1();
	obj.fun2();
}
