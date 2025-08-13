#include<iostream>
using namespace std;

class A{
	public:
		find_Area()
		{
			int l,w;
			float area;
			cout<<"enter length: ";
			cin>>l;
			cout<<"enter Width: ";
			cin>>w;
			
			//area = l*w;
			cout<<"Area of rectangle is : "<<l*w;
		}
};

main()
{
	A obj;
	obj.find_Area();
}
