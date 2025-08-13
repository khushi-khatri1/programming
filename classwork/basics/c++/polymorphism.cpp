#include<iostream>
using namespace std;

//overloading method
class A{
	public:
		fun1()
		{
			cout<<"hey"<<endl;
		}
		fun1(int a)
		{
			cout<<"my name is"<<endl;
		}
		fun1(string a)
		{
			cout<<"khushi"<<endl;
		}
		fun1(int a,int b)
		{
			cout<<"khatri"<<endl;
		}
};

main()
{
	A obj;
	obj.fun1();
	obj.fun1(10);
	obj.fun1("hi");
	obj.fun1(10,20);
}

