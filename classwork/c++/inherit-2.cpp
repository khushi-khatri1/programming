#include<iostream>
using namespace std;

class A{
	public: //multilevel inheritence
		fun1()
		{
			cout<<"Hello"<<endl;
		}
};
class B:public A{
	public:
		fun2()
		{
			cout<<"everyone"<<endl;
		}
};	
class C:public B{
	public:
		fun3()
		{
			cout<<"welcome"<<endl;
		}
};	
main()
{
	C obj;
	obj.fun1();
	obj.fun2();
	obj.fun3();
}
