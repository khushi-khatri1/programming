#include<iostream>
using namespace std;

class A{
	public:
		fun1()
		{
			cout<<"this is"<<endl;
		}
};

class B:public A{
	public:
		fun2()
		{
			cout<<"example of"<<endl;
		}
};

class C{
	public:
		fun3()
		{
			cout<<"hybrid"<<endl;
		}
};

class D:public B,public C{
	public:
		fun4()
		{
			cout<<"inheritance!!";
		}
};

main()
{
	D obj;
	obj.fun1();
	obj.fun2();
	obj.fun3();
	obj.fun4();	
	
}
