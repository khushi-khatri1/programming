#include<iostream>
using namespace std;

class Myclass{
	public:
		int a,b;
		myfun1()
		{
			cout<<"Enter A:";
			cin>>a;
			cout<<"Enter B:";
			cin>>b;
			
			cout<<"Addition :"<<a+b<<endl;
		}
		myfun2()
		{
			cout<<"Enter A:";
			cin>>a;
			cout<<"Enter B:";
			cin>>b;
			
			cout<<"sub :"<<a-b<<endl;
		}
		myfun3()
		{
			cout<<"Enter A:";
			cin>>a;
			cout<<"Enter B:";
			cin>>b;
			
			cout<<"mul :"<<a*b<<endl;
		}
};

main()
{
	Myclass obj;
	obj.myfun1();
	obj.myfun2();
	obj.myfun3();
}

