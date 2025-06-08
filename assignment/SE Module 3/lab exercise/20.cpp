#include<iostream>
using namespace std;

class Person{
	public:
		fun1()
		{
			cout<<"Let's the beginning!!"<<endl;	
		}
};

class Student:public Person{
	public:
		fun2()
		{
			cout<<"students today , Leaders tomorrow."<<endl;	
		}
};

class Teacher:public Person{
	public:
		fun3()
		{
			cout<<"Teachers plant seeds.";	
		}
};

main()
{
	Student obj;
	obj.fun1();
	obj.fun2();
	
	Teacher obj1;
	obj1.fun3();
}
