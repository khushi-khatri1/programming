#include<iostream>
using namespace std;

class My{
	private:
		int a=30,b=15;
		
	friend access(My &obj);
};

	access(My &obj)
	{
		cout<<"Addition is : "<< obj.a + obj.b;
	}


main()
{
	My obj;
	access(obj);
}
