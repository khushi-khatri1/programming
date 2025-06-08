#include<iostream>
using namespace std;

template <typename T>

T my_max(T x,T y)
{
	if(x>y)
	{
		cout<< x << "is Greatest!!"<<endl;
	}
	else
	{
		cout<< y << "is Greatest!!"<<endl;
	}
}

main()
{
	my_max<int>(10,20);
	my_max<char>('a','k');
}
