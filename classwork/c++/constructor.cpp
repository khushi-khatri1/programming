#include<iostream>
using namespace std;

class A{
	public:
		
		A() //constructor
		{
			cout<<"Constructor called!!"<<endl;
		}
		
		fun1()
		{
			cout<<"welcome!"<<endl;
		}
		
		~A() //Distructor
		{
			cout<<"Distructor called!!";
		}
};

main()
{
	A obj;
	obj.fun1();
}
