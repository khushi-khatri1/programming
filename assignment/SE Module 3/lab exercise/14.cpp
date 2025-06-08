#include<iostream>
using namespace std;

class A{
	public:
		int a=10,b=20; //global variable
		
		fun1()
		{
			int c; //local variable
			c = a + b; 
			cout<<"Addition : "<<c<<endl;
			cout<<"done!!";
		}
};

main()
{
	A obj;
	obj.fun1();
}
