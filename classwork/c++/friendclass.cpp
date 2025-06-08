#include<iostream>
using namespace std;

class My{
	private:
		int a=10,b=20;
		
	friend class Hello;
};

class Hello{
	public:
		access(My &obj)
		{
			cout<<"value of A : "<<obj.a<<endl;
			cout<<"value of B : "<<obj.b<<endl;
		}
};

main()
{
	My obj;
	Hello obj1;
	obj1.access(obj);
}
