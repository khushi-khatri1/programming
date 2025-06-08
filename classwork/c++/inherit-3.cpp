#include<iostream>
using namespace std;

class A{
	public: //multiple inheritance
		fun1()
		{
			cout<<"example of"<<endl;
		}
};

class B{
	public:
		fun2()
		{
			cout<<"multiple inhritance"<<endl;
		}
};

class C:public A,public B{
	public:
		fun3()
		{
			cout<<"!!"<<endl;
		}
};

main()
{
	C obj;
	obj.fun1();
	obj.fun2();
	obj.fun3();
}
