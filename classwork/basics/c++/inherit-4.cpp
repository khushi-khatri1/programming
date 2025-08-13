#include<iostream>
using namespace std;

class A{
	public: //hierarchi inheritance
		fun1()
		{
			cout<<"hello"<<endl;
		}
};

class B:public A{
	public:
		fun2()
		{
			cout<<"this is hierarchi inheritance!"<<endl;
		}
};

class C:public A{
	public:
		fun3()
		{
			cout<<"!!"<<endl;
		}
};

main()
{
	B obj;
	obj.fun2();
	
	C obj1;
	obj1.fun3();
}
