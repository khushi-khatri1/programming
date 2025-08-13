#include<iostream>
using namespace std;

class Employer{
	public:
		virtual salary()=0; //pure virtual function
};

class Khushi:public Employer{
	public:
		salary()
		{
			cout<<"25k salary got by Khushi.."<<endl;
		}
};

class Anjali:public Employer{
	public:
		salary()
		{
			cout<<"27k salary got by Anjali.."<<endl;
		}
};
main()
{
	Khushi obj;
	obj.salary();
	
	Anjali obj1;
	obj1.salary();
}
